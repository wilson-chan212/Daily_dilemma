// Supabase Edge Function: ai-chat
// Secrets: DEEPSEEK_API_KEY; optional SUPABASE_SERVICE_ROLE_KEY + DB RPC for quota.

const DEEPSEEK_API_KEY = Deno.env.get("DEEPSEEK_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

type PhilosopherJson = {
  nameEn: string;
  nameZh: string;
  conceptsEn: string;
  conceptsZh: string;
  methodEn: string;
  methodZh: string;
  toneEn: string;
  toneZh: string;
  avoidEn: string;
  avoidZh: string;
  anchorsEn: string;
  anchorsZh: string;
};

function loadPhilosopherProfiles(): Record<string, PhilosopherJson> {
  try {
    const raw = Deno.readTextFileSync(new URL("./philosopher-profiles.json", import.meta.url));
    const parsed = JSON.parse(raw) as unknown;
    return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)
      ? (parsed as Record<string, PhilosopherJson>)
      : {};
  } catch (e) {
    console.error("ai-chat: failed to load philosopher-profiles.json", e);
    return {};
  }
}

const PHILOSOPHER_PROFILES: Record<string, PhilosopherJson> = loadPhilosopherProfiles();

const DEFAULT_PHILOSOPHER_ID = "plato";
const ALLOWED_PHILOSOPHER_IDS = new Set([
  "aristotle",
  "plato",
  "socrates",
  "confucius",
  "kant",
  "descartes",
  "nietzsche",
  "marx",
]);

function coercePhilosopherId(x: unknown): string {
  const s = typeof x === "string" ? x.trim().toLowerCase() : "";
  if (ALLOWED_PHILOSOPHER_IDS.has(s)) return s;
  return DEFAULT_PHILOSOPHER_ID;
}

function buildPhilosopherSystemPrompt(lang: "en" | "zh-Hant", philosopherId: string): string {
  const id = ALLOWED_PHILOSOPHER_IDS.has(philosopherId) ? philosopherId : DEFAULT_PHILOSOPHER_ID;
  const p = PHILOSOPHER_PROFILES[id];
  if (!p) {
    return lang === "zh-Hant"
      ? "你是「每日抉擇」的助理，協助使用者反思兩難題。回覆精簡，繁體中文約 140 字內。不要捏造引文。不要要求敏感個資。"
      : "You help users reflect on dilemmas. Keep replies concise (max ~60 words). Do not fabricate quotes. Do not ask for sensitive personal data.";
  }

  if (lang === "zh-Hant") {
    return [
      `你是「每日抉擇」的對話助理，以${p.nameZh}的思想與方法為主軸（現代詮釋，非角色扮演歷史人物）。`,
      `核心概念：${p.conceptsZh}`,
      `推理方式：${p.methodZh}`,
      `語氣：${p.toneZh}`,
      `避免：${p.avoidZh}`,
      `思想背景（用於貼近其著作主題，勿逐字假引）：${p.anchorsZh}`,
      "規則：優先用此傳統的論證方式回應；若與其他學派衝突，仍以此傳統為準。不要捏造書名、章節或逐字引文。若不確定，明說這是依該傳統的詮釋。回覆精簡：繁體中文約 140 字以內。結尾提出一個反思性問題。不要要求使用者提供敏感個資。",
    ].join("\n");
  }

  return [
    `You are the Daily Dilemma assistant. Answer in the spirit of ${p.nameEn}'s philosophy (modern interpretation; not role-playing the historical person).`,
    `Core ideas to prioritize: ${p.conceptsEn}`,
    `How to reason: ${p.methodEn}`,
    `Tone: ${p.toneEn}`,
    `Avoid: ${p.avoidEn}`,
    `Thematic anchors (ground reasoning; do not invent verbatim quotes): ${p.anchorsEn}`,
    "Rules: Prefer this philosopher's approach even if other schools disagree. Do not fabricate book titles, page numbers, or exact quotations. If unsure, say it is an interpretation. Keep replies concise: at most 60 words. End with one reflective question. Do not ask for sensitive personal data.",
  ].join("\n");
}

function corsHeaders(): Headers {
  const h = new Headers();
  h.set("Access-Control-Allow-Origin", "*");
  // Must cover browser preflight for any header the client sends (incl. X-Device-Id if added later).
  h.set(
    "Access-Control-Allow-Headers",
    "authorization, x-client-info, apikey, content-type, x-device-id",
  );
  h.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  return h;
}

function json(data: unknown, init: ResponseInit = {}) {
  const headers = corsHeaders();
  if (init.headers) {
    const incoming = new Headers(init.headers);
    incoming.forEach((v, k) => headers.set(k, v));
  }
  headers.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(data), { ...init, headers });
}

function badRequest(message: string) {
  return json({ error: message }, { status: 400 });
}

function tooManyRequests(message: string) {
  return json({ error: message }, { status: 429 });
}

function limitStr(x: unknown, maxLen: number) {
  if (typeof x !== "string") return "";
  const s = x.trim();
  if (!s) return "";
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function extractIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for") || "";
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return req.headers.get("cf-connecting-ip") || req.headers.get("x-real-ip") || "unknown";
}

type Bucket = { ts: number[]; day: number; dayCount: number };
const rateBuckets = new Map<string, Bucket>();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_PER_MIN = 20; // generous
const RATE_LIMIT_PER_DAY = 300; // generous

function checkRateLimit(key: string) {
  const now = Date.now();
  const day = Math.floor(now / 86_400_000);
  const b = rateBuckets.get(key) ?? { ts: [], day, dayCount: 0 };
  if (b.day !== day) {
    b.day = day;
    b.dayCount = 0;
    b.ts = [];
  }
  b.ts = b.ts.filter((t) => now - t < RATE_WINDOW_MS);
  if (b.ts.length >= RATE_LIMIT_PER_MIN) {
    rateBuckets.set(key, b);
    return { ok: false, reason: "minute" as const };
  }
  if (b.dayCount >= RATE_LIMIT_PER_DAY) {
    rateBuckets.set(key, b);
    return { ok: false, reason: "day" as const };
  }
  b.ts.push(now);
  b.dayCount += 1;
  rateBuckets.set(key, b);
  return { ok: true };
}

function trimToWordLimit(lang: "en" | "zh-Hant", text: string) {
  const s = text.trim();
  if (!s) return s;
  if (lang === "zh-Hant") {
    // "Words" aren't well-defined for CJK; enforce a tight character cap (~30% below prior 200).
    const maxChars = 140;
    return s.length > maxChars ? s.slice(0, maxChars).trim() : s;
  }
  const words = s.split(/\s+/).filter(Boolean);
  if (words.length <= 60) return s;
  return words.slice(0, 60).join(" ").trim();
}

type Msg = { role: "user" | "assistant"; content: string };

type DeepSeekMsg = { role: "system" | "user" | "assistant"; content: string };

const PHILOSOPHER_REPLY_MAX_CONTINUATION_ROUNDS = 3;

function continuationUserPrompt(lang: "en" | "zh-Hant"): string {
  return lang === "zh-Hant"
    ? "請從上一則助理回覆停下的地方直接接續（不要重複已出現的句子），簡短補完。"
    : "Continue exactly where your previous reply stopped. Do not repeat sentences already given. Finish briefly.";
}

async function callDeepSeekRaw(opts: {
  model: string;
  messages: DeepSeekMsg[];
  maxOutputTokens: number;
  temperature: number;
}): Promise<{ text: string; finishReason: string }> {
  if (!DEEPSEEK_API_KEY) throw new Error("Missing DEEPSEEK_API_KEY");

  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: opts.model,
      messages: opts.messages.map((m) => ({ role: m.role, content: m.content })),
      max_tokens: opts.maxOutputTokens,
      temperature: opts.temperature,
    }),
  });

  const bodyText = await res.text();
  if (!res.ok) {
    throw new Error(bodyText || `DeepSeek error: ${res.status}`);
  }

  // deno-lint-ignore no-explicit-any
  let data: any;
  try {
    data = JSON.parse(bodyText);
  } catch {
    throw new Error(`DeepSeek returned non-JSON: ${bodyText.slice(0, 240)}`);
  }

  const c0 = data?.choices?.[0];
  const m0 = c0?.message;
  const finishReason = typeof c0?.finish_reason === "string" ? c0.finish_reason : "";

  const candidates: string[] = [];
  if (typeof m0?.content === "string") candidates.push(m0.content);
  if (typeof c0?.text === "string") candidates.push(c0.text);
  if (typeof data?.output_text === "string") candidates.push(data.output_text);
  if (Array.isArray(m0?.content)) {
    for (const part of m0.content) {
      const t = typeof part?.text === "string" ? part.text : "";
      if (t) candidates.push(t);
    }
  }

  const outputText = candidates.find((s) => typeof s === "string" && s.trim()) ?? "";
  const text = limitStr(outputText, 6000);
  return { text, finishReason };
}

/** Retries empty outputs; if the model hits max_tokens mid-thought, chains continuation calls (same per-request token cap). */
async function deepseekPhilosopherReply(opts: {
  model: string;
  baseInput: DeepSeekMsg[];
  maxOutputTokens: number;
  temperature: number;
  lang: "en" | "zh-Hant";
}): Promise<string> {
  const continueUser = continuationUserPrompt(opts.lang);
  let messages: DeepSeekMsg[] = [...opts.baseInput];
  let accumulated = "";

  for (let round = 0; round < PHILOSOPHER_REPLY_MAX_CONTINUATION_ROUNDS; round++) {
    let chunk = "";
    let finishReason = "";
    const delays = [0, 200, 600];
    for (let i = 0; i < delays.length; i++) {
      if (delays[i]) await new Promise((r) => setTimeout(r, delays[i]));
      const raw = await callDeepSeekRaw({
        model: opts.model,
        messages,
        maxOutputTokens: opts.maxOutputTokens,
        temperature: opts.temperature,
      });
      chunk = raw.text;
      finishReason = raw.finishReason;
      if (chunk) break;
      if (!chunk && round === 0) {
        console.log(
          JSON.stringify({
            msg: "deepseek_empty_output",
            attempt: i + 1,
            model: opts.model,
            finish_reason: raw.finishReason,
          }),
        );
      }
    }

    if (!chunk) {
      return accumulated;
    }

    accumulated += chunk;

    // OpenAI-compatible providers use "length" when output was cut off by max_tokens.
    if (finishReason !== "length") {
      break;
    }

    messages = [
      ...opts.baseInput,
      { role: "assistant", content: accumulated },
      { role: "user", content: continueUser },
    ];
  }

  return accumulated;
}

function coerceMessages(x: unknown): Msg[] {
  if (!Array.isArray(x)) return [];
  const out: Msg[] = [];
  for (const m of x) {
    if (!m || typeof m !== "object") continue;
    // deno-lint-ignore no-explicit-any
    const role = (m as any).role;
    // deno-lint-ignore no-explicit-any
    const content = limitStr((m as any).content, 2000);
    if ((role === "user" || role === "assistant") && content) out.push({ role, content });
  }
  return out.slice(-24);
}

/** Single-shot completion with empty-output retries (summarize mode). No length continuation. */
async function deepseekChatCompletion(opts: {
  model: string;
  input: DeepSeekMsg[];
  maxOutputTokens: number;
  temperature?: number;
}) {
  if (!DEEPSEEK_API_KEY) throw new Error("Missing DEEPSEEK_API_KEY");
  const temperature = typeof opts.temperature === "number" ? opts.temperature : 0.7;

  const delays = [0, 200, 600];
  for (let i = 0; i < delays.length; i++) {
    if (delays[i]) await new Promise((r) => setTimeout(r, delays[i]));
    const raw = await callDeepSeekRaw({
      model: opts.model,
      messages: opts.input,
      maxOutputTokens: opts.maxOutputTokens,
      temperature,
    });
    if (raw.text) return raw.text;
    console.log(
      JSON.stringify({
        msg: "deepseek_empty_output",
        attempt: i + 1,
        model: opts.model,
        finish_reason: raw.finishReason,
      }),
    );
  }
  return "";
}

function serverFallbackReply(lang: "en" | "zh-Hant") {
  return lang === "zh-Hant"
    ? "我暫時未能回覆。可否再試一次，或換個問法？"
    : "I couldn’t generate a reply just now. Please try again or rephrase.";
}

async function incrementDailyUsage(deviceId: string, limitPerDay: number) {
  if (!SUPABASE_URL?.trim() || !SUPABASE_SERVICE_ROLE_KEY?.trim()) {
    console.warn("ai-chat: quota skipped (set SUPABASE_SERVICE_ROLE_KEY secret for daily limits)");
    return { ok: true, remaining: 999, current: 0 };
  }
  try {
    const rpcUrl = `${SUPABASE_URL}/rest/v1/rpc/increment_ai_usage_daily_v2`;
    const res = await fetch(rpcUrl, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_device_id: deviceId, p_limit_per_day: limitPerDay }),
    });
    const txt = await res.text();
    if (!res.ok) {
      console.error("increment_ai_usage_daily_v2 HTTP error", res.status, txt.slice(0, 400));
      return { ok: true, remaining: 999, current: 0 };
    }
    let rows: unknown;
    try {
      rows = JSON.parse(txt || "[]");
    } catch {
      console.error("increment_ai_usage_daily_v2 invalid JSON", txt.slice(0, 300));
      return { ok: true, remaining: 999, current: 0 };
    }
    const row = Array.isArray(rows) ? rows[0] : null;
    const allowed = !!(row && typeof row === "object" && "allowed" in row &&
      (row as { allowed?: boolean }).allowed === true);
    const count = row && typeof row === "object" && typeof (row as { count?: unknown }).count === "number"
      ? (row as { count: number }).count
      : 0;
    const remaining = row && typeof row === "object" && typeof (row as { remaining?: unknown }).remaining === "number"
      ? (row as { remaining: number }).remaining
      : 0;
    return { ok: allowed, remaining, current: count };
  } catch (e) {
    console.error("incrementDailyUsage failed", e);
    return { ok: true, remaining: 999, current: 0 };
  }
}

function uncaughtErrorResponse(err: unknown): Response {
  const message = err instanceof Error ? err.message : String(err);
  console.error("ai-chat uncaught", err);
  const h = corsHeaders();
  h.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify({ error: message }), { status: 500, headers: h });
}

async function handleRequest(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }
  if (req.method !== "POST") return json({ error: "Method not allowed" }, { status: 405 });

  const ip = extractIp(req);
  const rl = checkRateLimit(ip);
  if (!rl.ok) {
    return tooManyRequests(rl.reason === "day" ? "Daily limit reached. Try again tomorrow." : "Too many messages. Try again in a minute.");
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return badRequest("Invalid JSON");
  }

  // deno-lint-ignore no-explicit-any
  const p = payload as any;
  const mode = p?.mode === "summarize" ? "summarize" : "chat";
  const lang = p?.lang === "zh-Hant" ? "zh-Hant" : "en";
  const summary = limitStr(p?.summary, 1200);
  const messages = coerceMessages(p?.messages);
  const deviceId = limitStr(p?.deviceId, 80);

  // Fast + cheap default model.
  const model = "deepseek-v4-flash";

  try {
    if (!deviceId) {
      return json({ error: "Missing deviceId" }, { status: 401 });
    }
    // Device quota (daily). Keep generous to avoid hurting UX.
    const DEVICE_DAILY_LIMIT = 50;
    const usage = await incrementDailyUsage(deviceId, DEVICE_DAILY_LIMIT);
    if (!usage.ok) {
      return tooManyRequests("Daily AI limit reached for this device. Try again tomorrow.");
    }

    if (mode === "summarize") {
      const sys =
        lang === "zh-Hant"
          ? "你是對話摘要器。請用繁體中文把使用者與助理的對話濃縮成一段「可重用的短記憶」，保留偏好、結論與尚未解決的問題。避免逐句重述。最多 80 tokens。"
          : "You are a conversation summarizer. Produce a short reusable memory of the conversation: preferences, conclusions, and open questions. Do not restate line by line. Max ~80 tokens.";

      const input = [
        { role: "system" as const, content: sys },
        ...(summary ? [{ role: "user" as const, content: `Existing summary:\n${summary}` }] : []),
        { role: "user" as const, content: `Conversation:\n${messages.map((m) => `${m.role}: ${m.content}`).join("\n")}` },
      ];

      const newSummary = await deepseekChatCompletion({ model, input, maxOutputTokens: 160 });
      return json({ summary: trimToWordLimit(lang, newSummary), quota: { remaining: usage.remaining } });
    }

    const dilemma = p?.dilemma && typeof p.dilemma === "object" ? p.dilemma : null;
    const dilemmaText = limitStr(dilemma?.text, 1200);
    const optA = limitStr(dilemma?.optA, 500);
    const optB = limitStr(dilemma?.optB, 500);
    const userChoice = limitStr(p?.userChoice, 20);
    const philosopherId = coercePhilosopherId(p?.philosopherId);

    const sys = buildPhilosopherSystemPrompt(lang, philosopherId);

    const contextBits: string[] = [];
    if (dilemmaText) {
      contextBits.push(`Dilemma: ${dilemmaText}`);
      if (optA) contextBits.push(`Option A: ${optA}`);
      if (optB) contextBits.push(`Option B: ${optB}`);
    }
    if (userChoice) contextBits.push(`User choice (if any): ${userChoice}`);
    if (summary) contextBits.push(`Conversation summary: ${summary}`);

    const input = [
      { role: "system" as const, content: sys },
      ...(contextBits.length ? [{ role: "user" as const, content: contextBits.join("\n") }] : []),
      ...messages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: limitStr(m.content, 2000),
      })),
    ];

    const replyRaw = await deepseekPhilosopherReply({
      model,
      baseInput: input,
      maxOutputTokens: 500,
      temperature: 0.55,
      lang,
    });
    const replyTrimmed = trimToWordLimit(lang, replyRaw);
    const reply = replyTrimmed || serverFallbackReply(lang);
    return json({ reply, summary, philosopherId, quota: { remaining: usage.remaining } });
  } catch (err) {
    const message = err && typeof err.message === "string" ? err.message : "Unknown error";
    return json({ error: message }, { status: 500 });
  }
}

Deno.serve(async (req: Request) => {
  try {
    return await handleRequest(req);
  } catch (err) {
    return uncaughtErrorResponse(err);
  }
});


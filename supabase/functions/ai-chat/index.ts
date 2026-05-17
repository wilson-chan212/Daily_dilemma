// Supabase Edge Function: ai-chat
// Secrets: DEEPSEEK_API_KEY; optional SUPABASE_SERVICE_ROLE_KEY + DB RPC for quota.
// Launch: set secret AI_DEVICE_DAILY_LIMIT_ENABLED=true to enforce per-device daily AI quota.

import PHILOSOPHER_PROFILES_IMPORTED from "./philosopher-profiles.json" with { type: "json" };

const DEEPSEEK_API_KEY = Deno.env.get("DEEPSEEK_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

/** Off during development; enable at launch via Supabase secret (see file header). */
const AI_DEVICE_DAILY_LIMIT_ENABLED =
  (Deno.env.get("AI_DEVICE_DAILY_LIMIT_ENABLED") ?? "").toLowerCase() === "true";

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
  coreIdeasEn?: string;
  coreIdeasZh?: string;
  conceptMovesEn?: string;
  conceptMovesZh?: string;
  signatureMisreadingsEn?: string;
  signatureMisreadingsZh?: string;
  voiceEn?: string;
  voiceZh?: string;
  replyDisciplineEn?: string;
  replyDisciplineZh?: string;
  blendMustUseZh?: string[];
  blendMustUseEn?: string[];
  contrastZh?: string;
  contrastEn?: string;
  exampleReplyZh?: string;
  exampleReplyEn?: string;
  deepExampleReplyZh?: string;
  deepExampleReplyEn?: string;
};

type ReplyDepth = "short" | "deep";

const SHORT_REPLY_MAX_CHARS_ZH = 150;
const SHORT_REPLY_MAX_WORDS_EN = 64;
const DEEP_REPLY_MAX_CHARS_ZH = 380;
const DEEP_REPLY_MAX_WORDS_EN = 180;
const SHORT_REPLY_MAX_OUTPUT_TOKENS = 360;
const DEEP_REPLY_MAX_OUTPUT_TOKENS = 760;
const PERSONA_VERSION = 9;

const PHILOSOPHER_PROFILES: Record<string, PhilosopherJson> =
  typeof PHILOSOPHER_PROFILES_IMPORTED === "object" &&
    PHILOSOPHER_PROFILES_IMPORTED !== null &&
    !Array.isArray(PHILOSOPHER_PROFILES_IMPORTED)
    ? (PHILOSOPHER_PROFILES_IMPORTED as Record<string, PhilosopherJson>)
    : {};

const DEFAULT_PHILOSOPHER_ID = "plato";
const ALLOWED_PHILOSOPHER_IDS = new Set([
  "aristotle",
  "plato",
  "socrates",
  "confucius",
  "kant",
  "laozi",
  "buddha",
  "marx",
]);

const PERSONA_LOADED = Object.keys(PHILOSOPHER_PROFILES).length >= ALLOWED_PHILOSOPHER_IDS.size;
if (!PERSONA_LOADED) {
  console.error(
    `ai-chat: philosopher profiles not bundled (got ${Object.keys(PHILOSOPHER_PROFILES).length}, need ${ALLOWED_PHILOSOPHER_IDS.size})`,
  );
}

function coercePhilosopherId(x: unknown): string {
  const s = typeof x === "string" ? x.trim().toLowerCase() : "";
  if (ALLOWED_PHILOSOPHER_IDS.has(s)) return s;
  return DEFAULT_PHILOSOPHER_ID;
}

function getPhilosopherProfile(philosopherId: string): PhilosopherJson | null {
  const id = ALLOWED_PHILOSOPHER_IDS.has(philosopherId) ? philosopherId : DEFAULT_PHILOSOPHER_ID;
  return PHILOSOPHER_PROFILES[id] ?? null;
}

function blendKeywordsLine(lang: "en" | "zh-Hant", p: PhilosopherJson): string {
  const list = lang === "zh-Hant" ? p.blendMustUseZh : p.blendMustUseEn;
  if (!list?.length) return "";
  const joined = list.map((w) => `「${w}」`).join("、");
  return lang === "zh-Hant"
    ? `回覆一定要自然用到以下其中至少一個概念詞：${joined}（要解釋點樣套用，唔好硬塞）。`
    : `Naturally use at least one of: ${list.join(", ")}—show how it applies.`;
}

function replyLimitLine(lang: "en" | "zh-Hant", depth: ReplyDepth): string {
  if (lang === "zh-Hant") {
    const maxChars = depth === "deep" ? DEEP_REPLY_MAX_CHARS_ZH : SHORT_REPLY_MAX_CHARS_ZH;
    return depth === "deep"
      ? `【字數】約 ${maxChars} 字內；可以分 2–3 句或短段，短但有教學感；港式口語；唔假引文。`
      : `【字數】嚴格約 ${maxChars} 字內（短但有料）；港式口語；唔假引文。`;
  }

  const maxWords = depth === "deep" ? DEEP_REPLY_MAX_WORDS_EN : SHORT_REPLY_MAX_WORDS_EN;
  return depth === "deep"
    ? `【LENGTH】Max ~${maxWords} words. Use enough room to teach one concept, but keep it app-chat friendly. No fake quotes.`
    : `【LENGTH】Strictly max ${maxWords} words (dense and brief). No fake quotes.`;
}

function depthInstructionLine(lang: "en" | "zh-Hant", depth: ReplyDepth, p: PhilosopherJson): string {
  if (depth !== "deep") {
    return lang === "zh-Hant"
      ? "【深度】用一個招牌概念點醒就夠，唔好變長文。"
      : "【DEPTH】Use one signature concept sharply; do not turn it into an essay.";
  }

  if (lang === "zh-Hant") {
    return [
      "【深度】用「有趣 hook → 點名一個哲學概念 → 用人話解釋 → 套返用戶處境 → 短結論」嘅節奏。",
      p.coreIdeasZh ? `【可教概念】${p.coreIdeasZh}` : "",
      p.conceptMovesZh ? `【概念點用】${p.conceptMovesZh}` : "",
      p.signatureMisreadingsZh ? `【避免誤讀】${p.signatureMisreadingsZh}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    "【DEPTH】Use this rhythm: memorable hook → name one philosophical concept → explain it plainly → apply it to the user's situation → short closing insight.",
    p.coreIdeasEn ? `Teachable ideas: ${p.coreIdeasEn}` : "",
    p.conceptMovesEn ? `How to apply them: ${p.conceptMovesEn}` : "",
    p.signatureMisreadingsEn ? `Avoid this simplification: ${p.signatureMisreadingsEn}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildPhilosopherSystemPrompt(lang: "en" | "zh-Hant", philosopherId: string, depth: ReplyDepth): string {
  const p = getPhilosopherProfile(philosopherId);
  if (!p) {
    return lang === "zh-Hant"
      ? `你係「每日兩難」嘅助理。香港口語粵語，${replyLimitLine(lang, depth)}`
      : `You help users reflect on dilemmas. ${replyLimitLine(lang, depth)}`;
  }

  const keywords = blendKeywordsLine(lang, p);
  const contrast = lang === "zh-Hant" ? p.contrastZh : p.contrastEn;
  const depthLine = depthInstructionLine(lang, depth, p);

  if (lang === "zh-Hant") {
    return [
      `【身份鎖定】你只可以係「${p.nameZh}」——唔係其他哲學家、唔係心理輔導、唔係通用AI。${contrast || ""}`,
      "【開場】直接入題，用招牌概念分析；唔好寫「我喺XX角度」「從XX角度」等自報身分嘅句。",
      keywords,
      depthLine,
      `【必做】${p.replyDisciplineZh || p.methodZh}`,
      `【招牌句式】${p.voiceZh || p.toneZh}`,
      `【概念】${p.conceptsZh}`,
      `【禁止】${p.avoidZh}；唔好用「慢慢嚟」「你已經好好」等通用心靈雞湯。`,
      "【焦點】跟住用戶最後一則訊息。如果佢講私人煩惱、生活、關係、情緒，就直接回覆；除非佢明確問今日兩難題、選項或自己嘅揀擇，否則唔好扯返今日題目、A/B。",
      replyLimitLine(lang, depth),
      "【收尾】用肯定句或短結論收束；禁止句尾反問、「呢？」「點算？」等逼答式問句（除非用戶本身係問你）。",
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    `【LOCKED IDENTITY】You are ONLY ${p.nameEn}—not other philosophers, not a therapist, not generic AI. ${contrast || ""}`,
    `【OPENER】Jump straight into a signature idea. Never write "From a ${p.nameEn} angle" or similar self-labels.`,
    keywords,
    depthLine,
    `Must: ${p.replyDisciplineEn || p.methodEn}`,
    `Signature phrases: ${p.voiceEn || p.toneEn}`,
    `Ideas: ${p.conceptsEn}`,
    `Forbidden: ${p.avoidEn}; no "take your time," "you're enough," or generic therapy.`,
    "【FOCUS】Follow the user's latest message. If they share personal life, feelings, or relationships, answer that—do not drag in today's dilemma or A/B options unless they clearly ask about them.",
    replyLimitLine(lang, depth),
    "【CLOSING】End with a statement or insight—not a closing question unless the user asked you one.",
  ]
    .filter(Boolean)
    .join("\n");
}

function replyUsesSignatureConcept(lang: "en" | "zh-Hant", philosopherId: string, text: string): boolean {
  const p = getPhilosopherProfile(philosopherId);
  if (!p) return false;
  const list = lang === "zh-Hant" ? p.blendMustUseZh : p.blendMustUseEn;
  if (!list?.length) return true;
  return list.some((kw) => text.includes(kw));
}

/** Strip self-label openers if the model still writes them. */
function stripPhilosopherAngleOpener(lang: "en" | "zh-Hant", raw: string): string {
  let text = raw.trim();
  if (!text) return text;
  if (lang === "zh-Hant") {
    text = text.replace(/^我喺[^。！？\n]{0,28}角度[——\-：:\s]*/u, "").trimStart();
    text = text.replace(/^從[^。！？\n]{0,24}角度[——\-：:\s]*/u, "").trimStart();
  } else {
    text = text.replace(/^From an? [^\n.]{0,50} angle[:\s—-]*/i, "").trimStart();
  }
  return text;
}

function signatureRetryUserPrompt(lang: "en" | "zh-Hant", philosopherId: string, depth: ReplyDepth): string {
  const p = getPhilosopherProfile(philosopherId);
  if (!p) return "";
  const list = lang === "zh-Hant" ? p.blendMustUseZh : p.blendMustUseEn;
  if (!list?.length) return "";
  const joined = lang === "zh-Hant" ? list.map((w) => `「${w}」`).join("、") : list.join(", ");
  const zhLimit = depth === "deep" ? DEEP_REPLY_MAX_CHARS_ZH : SHORT_REPLY_MAX_CHARS_ZH;
  const enLimit = depth === "deep" ? DEEP_REPLY_MAX_WORDS_EN : SHORT_REPLY_MAX_WORDS_EN;
  const deepNudge = depth === "deep"
    ? lang === "zh-Hant"
      ? "；要用一個哲學概念教識用戶點睇件事"
      : "; teach one philosophical concept through the user's situation"
    : "";
  return lang === "zh-Hant"
    ? `重寫：一定要自然用到${joined}其中一個，保持${p.nameZh}口吻${deepNudge}；唔寫「我喺XX角度」；約${zhLimit}字內；句尾唔好反問。`
    : `Rewrite: use one of ${joined}. Stay as ${p.nameEn}${deepNudge}; no "From a … angle"; max ${enLimit} words; no closing question.`;
}

function latestUserText(messages: Msg[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") return messages[i].content.trim();
  }
  return "";
}

/** True when the user's latest message is clearly about today's dilemma / their pick. */
function userWantsDilemmaContext(
  lang: "en" | "zh-Hant",
  latestUser: string,
  bits: { dilemmaText: string; optA: string; optB: string; userChoice: string },
): boolean {
  const t = latestUser.trim();
  if (!t) return false;

  if (lang === "zh-Hant") {
    const patterns = [
      /今日.{0,8}(題|兩難|抉擇)/,
      /呢題|這題|兩難題/,
      /點解有人.{0,6}揀/,
      /另一(邊|面|個選)/,
      /應該.{0,6}(揀|選)/,
      /揀.{0,3}[ABabＡＢ]/,
      /選.{0,3}[ABabＡＢ]/,
      /選項|答案[ABabＡＢ]/,
      /講清楚.{0,6}題/,
      /我(揀|選)(咗|了)/,
      /揀完|選完/,
      /後悔.{0,8}揀/,
      /用口語.{0,6}題/,
    ];
    if (patterns.some((re) => re.test(t))) return true;
  } else {
    const patterns = [
      /\btoday'?s dilemma\b/i,
      /\bthis dilemma\b/i,
      /\bthe dilemma\b/i,
      /\boption\s*[ab]\b/i,
      /\bpick\s*(option\s*)?[ab]\b/i,
      /\bother side\b/i,
      /\bwhy (would|might) someone\b/i,
      /\bwhat should i weigh\b/i,
      /\bi chose\b/i,
      /\bafter (my|the) choice\b/i,
      /\bexplain.{0,12}dilemma\b/i,
    ];
    if (patterns.some((re) => re.test(t))) return true;
  }

  if (bits.userChoice && /[ABabＡＢ]/.test(bits.userChoice)) {
    if (/內疚|後悔|選|揀|choice|chose|picked|regret|guilty/i.test(t)) return true;
  }

  const share = (hay: string, needle: string, minLen: number) => {
    const n = needle.trim();
    if (n.length < minLen) return false;
    for (let i = 0; i <= n.length - minLen; i++) {
      if (hay.includes(n.slice(i, i + minLen))) return true;
    }
    return false;
  };

  if (bits.optA && share(t, bits.optA, 8)) return true;
  if (bits.optB && share(t, bits.optB, 8)) return true;
  if (bits.dilemmaText && share(t, bits.dilemmaText, 12)) return true;

  return false;
}

function chooseReplyDepth(
  lang: "en" | "zh-Hant",
  latestUser: string,
  bits: { attachDilemma: boolean },
): ReplyDepth {
  const t = latestUser.trim();
  if (!t) return "short";

  if (bits.attachDilemma) return "deep";

  if (lang === "zh-Hant") {
    const deepPatterns = [
      /點解|為何|原因|解釋|講多啲|深入|詳細|概念|哲學|思想|主張|理論/,
      /應該|道德|倫理|正義|自由|責任|義務|意義|真理|現實|身份|自我|欲望/,
      /內疚|後悔|矛盾|掙扎|痛苦|執著|焦慮|關係|公平|剝削|制度|階級/,
      /如果係.+會點|會點睇|點睇|點樣睇|教我|學到啲咩/,
      /兩難|抉擇|選項|揀邊|點揀/,
    ];
    if (deepPatterns.some((re) => re.test(t))) return "deep";
    return t.length >= 70 ? "deep" : "short";
  }

  const deepPatterns = [
    /\b(why|explain|deeper|detail|concept|philosophy|philosophical|theory|idea|teach)\b/i,
    /\b(should|moral|ethical|justice|freedom|responsibility|duty|meaning|truth|reality|identity|self|desire)\b/i,
    /\b(guilt|regret|conflict|struggle|suffering|attachment|anxiety|relationship|fairness|exploitation|system|class)\b/i,
    /\bwhat would .+ (say|think|do)\b/i,
    /\b(dilemma|choice|option|choose|decide)\b/i,
  ];
  if (deepPatterns.some((re) => re.test(t))) return "deep";
  return t.split(/\s+/).filter(Boolean).length >= 18 ? "deep" : "short";
}

function buildSessionContext(
  lang: "en" | "zh-Hant",
  bits: {
    dilemmaText: string;
    optA: string;
    optB: string;
    userChoice: string;
    summary: string;
    attachDilemma: boolean;
  },
): string {
  const lines: string[] = [];

  if (bits.attachDilemma && bits.dilemmaText) {
    lines.push(
      lang === "zh-Hant"
        ? "【今日兩難題—用戶正問緊呢題，可以引用】"
        : "[Today's dilemma—the user is asking about this; you may reference it]",
    );
    lines.push(lang === "zh-Hant" ? bits.dilemmaText : bits.dilemmaText);
    if (bits.optA) lines.push(lang === "zh-Hant" ? `A：${bits.optA}` : `Option A: ${bits.optA}`);
    if (bits.optB) lines.push(lang === "zh-Hant" ? `B：${bits.optB}` : `Option B: ${bits.optB}`);
    if (bits.userChoice) {
      lines.push(lang === "zh-Hant" ? `【用戶已選】${bits.userChoice}` : `User choice: ${bits.userChoice}`);
    }
  }

  if (bits.summary) {
    lines.push(
      lang === "zh-Hant"
        ? `【對話摘要—只喺同用戶最新問題有關嗰陣先參考】${bits.summary}`
        : `[Conversation summary—use only if relevant to the latest question] ${bits.summary}`,
    );
  }

  return lines.join("\n");
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

function trimToWordLimit(lang: "en" | "zh-Hant", text: string, depth: ReplyDepth = "short") {
  const s = text.trim();
  if (!s) return s;
  if (lang === "zh-Hant") {
    const maxChars = depth === "deep" ? DEEP_REPLY_MAX_CHARS_ZH : SHORT_REPLY_MAX_CHARS_ZH;
    if (s.length <= maxChars) return s;
    // Prefer cutting at sentence end so blended ideas are not amputated mid-thought.
    const slice = s.slice(0, maxChars);
    const lastStop = Math.max(slice.lastIndexOf("。"), slice.lastIndexOf("？"), slice.lastIndexOf("！"));
    if (lastStop > Math.floor(maxChars * 0.55)) return slice.slice(0, lastStop + 1).trim();
    return slice.trim();
  }
  const words = s.split(/\s+/).filter(Boolean);
  const maxWords = depth === "deep" ? DEEP_REPLY_MAX_WORDS_EN : SHORT_REPLY_MAX_WORDS_EN;
  if (words.length <= maxWords) return s;
  return words.slice(0, maxWords).join(" ").trim();
}

type Msg = { role: "user" | "assistant"; content: string };

type DeepSeekMsg = { role: "system" | "user" | "assistant"; content: string };

function buildForumOpeningSystemPrompt(lang: "en" | "zh-Hant", philosopherId: string): string {
  const p = getPhilosopherProfile(philosopherId);
  const depth: ReplyDepth = "short";
  if (!p) return buildPhilosopherSystemPrompt(lang, philosopherId, depth);

  const keywords = blendKeywordsLine(lang, p);
  const contrast = lang === "zh-Hant" ? p.contrastZh : p.contrastEn;
  const depthLine = depthInstructionLine(lang, depth, p);

  if (lang === "zh-Hant") {
    return [
      `【身份鎖定】你只可以係「${p.nameZh}」——唔係其他哲學家、唔係心理輔導、唔係通用AI。${contrast || ""}`,
      "【場景】有人喺討論區發咗一個兩難題。你寫「開場回應」：用招牌概念打開討論，幫人睇清選擇背後嘅價值同習慣；唔好只係叫人快啲揀邊邊。",
      "【開場】直接入題，用招牌概念分析；唔好寫「我喺XX角度」「從XX角度」等自報身分嘅句。",
      keywords,
      depthLine,
      `【必做】${p.replyDisciplineZh || p.methodZh}`,
      `【招牌句式】${p.voiceZh || p.toneZh}`,
      `【概念】${p.conceptsZh}`,
      `【禁止】${p.avoidZh}；唔好用「慢慢嚟」「你已經好好」等通用心靈雞湯。`,
      replyLimitLine(lang, depth),
      "【收尾】用肯定句或短結論收束；禁止句尾反問、「呢？」「點算？」等逼答式問句。",
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    `【LOCKED IDENTITY】You are ONLY ${p.nameEn}—not other philosophers, not a therapist, not generic AI. ${contrast || ""}`,
    "【SCENE】A user posted a community dilemma. Write an opening reply: use your signature idea to open discussion and clarify values—not just tell them which option to pick.",
    `【OPENER】Jump straight into a signature idea. Never write "From a ${p.nameEn} angle" or similar self-labels.`,
    keywords,
    depthLine,
    `Must: ${p.replyDisciplineEn || p.methodEn}`,
    `Signature phrases: ${p.voiceEn || p.toneEn}`,
    `Ideas: ${p.conceptsEn}`,
    `Forbidden: ${p.avoidEn}; no "take your time," "you're enough," or generic therapy.`,
    replyLimitLine(lang, depth),
    "【CLOSING】End with a statement or insight—not a closing question.",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildForumDilemmaUserBlock(
  lang: "en" | "zh-Hant",
  title: string,
  body: string,
  optA: string,
  optB: string,
): string {
  if (lang === "zh-Hant") {
    return [
      "【討論區兩難題】",
      `標題：${title}`,
      body ? `背景：${body}` : "",
      `A：${optA}`,
      `B：${optB}`,
      "請寫你嘅開場回應。",
    ]
      .filter(Boolean)
      .join("\n");
  }
  return [
    "[Forum dilemma post]",
    `Title: ${title}`,
    body ? `Context: ${body}` : "",
    `Option A: ${optA}`,
    `Option B: ${optB}`,
    "Write your opening reply.",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildForumFollowupSystemPrompt(lang: "en" | "zh-Hant", philosopherId: string): string {
  const p = getPhilosopherProfile(philosopherId);
  const depth: ReplyDepth = "short";
  if (!p) return buildPhilosopherSystemPrompt(lang, philosopherId, depth);

  const keywords = blendKeywordsLine(lang, p);
  const contrast = lang === "zh-Hant" ? p.contrastZh : p.contrastEn;
  const depthLine = depthInstructionLine(lang, depth, p);

  if (lang === "zh-Hant") {
    return [
      `【身份鎖定】你只可以係「${p.nameZh}」——唔係其他哲學家、唔係心理輔導、唔係通用AI。${contrast || ""}`,
      "【場景】你喺討論區已經寫過開場回應。有讀者公開回覆你。請直接回應佢嘅留言：承接佢嘅觀點、用你嘅招牌概念推進，唔好重複開場白。",
      "【回應】直接入題；唔好寫「我喺XX角度」等自報身分句。",
      keywords,
      depthLine,
      `【必做】${p.replyDisciplineZh || p.methodZh}`,
      `【招牌句式】${p.voiceZh || p.toneZh}`,
      `【禁止】${p.avoidZh}；唔好用通用心靈雞湯。`,
      replyLimitLine(lang, depth),
      "【收尾】用肯定句或短結論收束；禁止句尾反問或逼答式問句。",
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    `【LOCKED IDENTITY】You are ONLY ${p.nameEn}—not other philosophers, not a therapist, not generic AI. ${contrast || ""}`,
    "【SCENE】You already posted an opening reply on a forum dilemma. A reader replied to you publicly. Respond to their comment: engage their point, advance with your signature idea—do not repeat your opening.",
    `【REPLY】Jump straight in; no "From a ${p.nameEn} angle" self-labels.`,
    keywords,
    depthLine,
    `Must: ${p.replyDisciplineEn || p.methodEn}`,
    `Signature phrases: ${p.voiceEn || p.toneEn}`,
    `Forbidden: ${p.avoidEn}; no generic therapy platitudes.`,
    replyLimitLine(lang, depth),
    "【CLOSING】End with a statement or insight—not a closing question.",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildForumFollowupUserBlock(
  lang: "en" | "zh-Hant",
  title: string,
  body: string,
  optA: string,
  optB: string,
  openingText: string,
  userReplyText: string,
): string {
  if (lang === "zh-Hant") {
    return [
      "【討論區兩難題】",
      `標題：${title}`,
      body ? `背景：${body}` : "",
      `A：${optA}`,
      `B：${optB}`,
      "【你嘅開場回應】",
      openingText,
      "【讀者公開回覆你】",
      userReplyText,
      "請寫你對呢條回覆嘅公開回應。",
    ]
      .filter(Boolean)
      .join("\n");
  }
  return [
    "[Forum dilemma post]",
    `Title: ${title}`,
    body ? `Context: ${body}` : "",
    `Option A: ${optA}`,
    `Option B: ${optB}`,
    "[Your opening reply]",
    openingText,
    "[Reader's public reply to you]",
    userReplyText,
    "Write your public reply to their comment.",
  ]
    .filter(Boolean)
    .join("\n");
}

function coerceForumPhilosopherIds(x: unknown): string[] {
  const out: string[] = [];
  if (!Array.isArray(x)) return out;
  for (const item of x) {
    const id = coercePhilosopherId(item);
    if (!out.includes(id)) out.push(id);
    if (out.length >= 2) break;
  }
  const fallbackOrder = [
    "socrates",
    "plato",
    "aristotle",
    "confucius",
    "kant",
    "laozi",
    "buddha",
    "marx",
  ];
  for (const id of fallbackOrder) {
    if (out.length >= 2) break;
    if (!out.includes(id)) out.push(id);
  }
  return out.slice(0, 2);
}

function buildPhilosopherFewShot(lang: "en" | "zh-Hant", p: PhilosopherJson, depth: ReplyDepth): DeepSeekMsg[] {
  const zhExample = depth === "deep" ? p.deepExampleReplyZh?.trim() || p.exampleReplyZh?.trim() : p.exampleReplyZh?.trim();
  const enExample = depth === "deep" ? p.deepExampleReplyEn?.trim() || p.exampleReplyEn?.trim() : p.exampleReplyEn?.trim();

  if (lang === "zh-Hant" && zhExample) {
    return [
      {
        role: "user",
        content:
          depth === "deep"
            ? "【深度風格示範—學結構同口吻，唔好抄內容；唔使提揀擇題】用戶：最近壓力好大，覺得自己唔夠好。請用你嘅哲學角度回覆，順便教我一個概念。"
            : "【風格示範—學口吻，唔好抄內容；唔使提揀擇題】用戶：最近壓力好大，覺得自己唔夠好。請用你嘅哲學角度回覆。",
      },
      { role: "assistant", content: zhExample },
    ];
  }
  if (lang !== "zh-Hant" && enExample) {
    return [
      {
        role: "user",
        content:
          depth === "deep"
            ? "[Deep style demo—match structure and voice, do not copy; no dilemma] User: I've been stressed and feel I'm not good enough. Use your philosophical voice and teach me one concept."
            : "[Style demo—match voice, do not copy; no dilemma] User: I've been stressed and feel I'm not good enough. Use your philosophical voice.",
      },
      { role: "assistant", content: enExample },
    ];
  }
  return [];
}

const PHILOSOPHER_REPLY_MAX_CONTINUATION_ROUNDS = 3;

function continuationUserPrompt(lang: "en" | "zh-Hant"): string {
  return lang === "zh-Hant"
    ? "請從上一則回覆停低嘅地方直接接落去（唔好重複已有句子）。保持同一哲學角度同概念詞，用香港口語補完；句尾唔好反問。"
    : "Continue where you stopped. Do not repeat. Keep the same philosopher's ideas and voice; no closing question.";
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
    ? "我暫時答唔到。再試一次，或者換個問法都得。"
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
  const modeRaw = typeof p?.mode === "string" ? p.mode.trim() : "chat";
  const mode = modeRaw === "summarize"
    ? "summarize"
    : modeRaw === "forum_seed"
    ? "forum_seed"
    : modeRaw === "forum_philosopher_reply"
    ? "forum_philosopher_reply"
    : "chat";
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
    let usage = { ok: true as const, remaining: 999, current: 0 };
    if (AI_DEVICE_DAILY_LIMIT_ENABLED) {
      usage = await incrementDailyUsage(deviceId, DEVICE_DAILY_LIMIT);
      if (!usage.ok) {
        return tooManyRequests("Daily AI limit reached for this device. Try again tomorrow.");
      }
    }

    if (mode === "summarize") {
      const sys =
        lang === "zh-Hant"
          ? "你是對話摘要器。請用香港口語粵語（繁體字）將用戶同助理嘅對話濃縮成一段「之後用得返嘅短記憶」，保留偏好、結論同未解決嘅問題。唔好逐句重述。最多 80 tokens。"
          : "You are a conversation summarizer. Produce a short reusable memory of the conversation: preferences, conclusions, and open questions. Do not restate line by line. Max ~80 tokens.";

      const input = [
        { role: "system" as const, content: sys },
        ...(summary ? [{ role: "user" as const, content: `Existing summary:\n${summary}` }] : []),
        { role: "user" as const, content: `Conversation:\n${messages.map((m) => `${m.role}: ${m.content}`).join("\n")}` },
      ];

      const newSummary = await deepseekChatCompletion({ model, input, maxOutputTokens: 160 });
      return json({ summary: trimToWordLimit(lang, newSummary), quota: { remaining: usage.remaining } });
    }

    if (mode === "forum_seed") {
      const forumPost = p?.forumPost && typeof p.forumPost === "object" ? p.forumPost : null;
      const title = limitStr(forumPost?.title, 300);
      const body = limitStr(forumPost?.body, 2000);
      const optA = limitStr(forumPost?.optionA, 500);
      const optB = limitStr(forumPost?.optionB, 500);
      if (!title || !optA || !optB) {
        return badRequest("forumPost requires title, optionA, and optionB");
      }

      const philosopherIds = coerceForumPhilosopherIds(p?.philosopherIds);
      const philosophers: { philosopherId: string; text: string }[] = [];

      for (const philosopherId of philosopherIds) {
        const profile = getPhilosopherProfile(philosopherId);
        const sys = buildForumOpeningSystemPrompt(lang, philosopherId);
        const fewShot = profile ? buildPhilosopherFewShot(lang, profile, "short") : [];
        const userBlock = buildForumDilemmaUserBlock(lang, title, body, optA, optB);
        const input: DeepSeekMsg[] = [
          { role: "system", content: sys },
          ...fewShot,
          { role: "user", content: userBlock },
        ];

        let replyRaw = await deepseekPhilosopherReply({
          model,
          baseInput: input,
          maxOutputTokens: SHORT_REPLY_MAX_OUTPUT_TOKENS,
          temperature: 0.84,
          lang,
        });

        let replyTrimmed = trimToWordLimit(
          lang,
          stripPhilosopherAngleOpener(lang, replyRaw),
          "short",
        );

        if (
          profile &&
          PERSONA_LOADED &&
          replyTrimmed &&
          !replyUsesSignatureConcept(lang, philosopherId, replyTrimmed)
        ) {
          const retryPrompt = signatureRetryUserPrompt(lang, philosopherId, "short");
          if (retryPrompt) {
            const retryRaw = await deepseekPhilosopherReply({
              model,
              baseInput: [
                ...input,
                { role: "assistant", content: replyTrimmed },
                { role: "user", content: retryPrompt },
              ],
              maxOutputTokens: SHORT_REPLY_MAX_OUTPUT_TOKENS,
              temperature: 0.78,
              lang,
            });
            const retryTrimmed = trimToWordLimit(
              lang,
              stripPhilosopherAngleOpener(lang, retryRaw),
              "short",
            );
            if (retryTrimmed && replyUsesSignatureConcept(lang, philosopherId, retryTrimmed)) {
              replyTrimmed = retryTrimmed;
            }
          }
        }

        philosophers.push({
          philosopherId,
          text: replyTrimmed || serverFallbackReply(lang),
        });
      }

      return json({
        philosophers,
        personaLoaded: PERSONA_LOADED,
        personaVersion: PERSONA_VERSION,
        quota: { remaining: usage.remaining },
      });
    }

    if (mode === "forum_philosopher_reply") {
      const forumPost = p?.forumPost && typeof p.forumPost === "object" ? p.forumPost : null;
      const title = limitStr(forumPost?.title, 300);
      const body = limitStr(forumPost?.body, 2000);
      const optA = limitStr(forumPost?.optionA, 500);
      const optB = limitStr(forumPost?.optionB, 500);
      const openingText = limitStr(p?.philosopherOpeningText, 2000);
      const userReplyText = limitStr(p?.userReplyText, 2000);
      if (!title || !optA || !optB || !openingText || !userReplyText) {
        return badRequest(
          "forum_philosopher_reply requires forumPost (title, optionA, optionB), philosopherOpeningText, and userReplyText",
        );
      }

      const philosopherId = coercePhilosopherId(p?.philosopherId);
      const profile = getPhilosopherProfile(philosopherId);
      const sys = buildForumFollowupSystemPrompt(lang, philosopherId);
      const fewShot = profile ? buildPhilosopherFewShot(lang, profile, "short") : [];
      const userBlock = buildForumFollowupUserBlock(
        lang,
        title,
        body,
        optA,
        optB,
        openingText,
        userReplyText,
      );
      const input: DeepSeekMsg[] = [
        { role: "system", content: sys },
        ...fewShot,
        { role: "user", content: userBlock },
      ];

      let replyRaw = await deepseekPhilosopherReply({
        model,
        baseInput: input,
        maxOutputTokens: SHORT_REPLY_MAX_OUTPUT_TOKENS,
        temperature: 0.84,
        lang,
      });

      let replyTrimmed = trimToWordLimit(
        lang,
        stripPhilosopherAngleOpener(lang, replyRaw),
        "short",
      );

      if (
        profile &&
        PERSONA_LOADED &&
        replyTrimmed &&
        !replyUsesSignatureConcept(lang, philosopherId, replyTrimmed)
      ) {
        const retryPrompt = signatureRetryUserPrompt(lang, philosopherId, "short");
        if (retryPrompt) {
          const retryRaw = await deepseekPhilosopherReply({
            model,
            baseInput: [
              ...input,
              { role: "assistant", content: replyTrimmed },
              { role: "user", content: retryPrompt },
            ],
            maxOutputTokens: SHORT_REPLY_MAX_OUTPUT_TOKENS,
            temperature: 0.78,
            lang,
          });
          const retryTrimmed = trimToWordLimit(
            lang,
            stripPhilosopherAngleOpener(lang, retryRaw),
            "short",
          );
          if (retryTrimmed && replyUsesSignatureConcept(lang, philosopherId, retryTrimmed)) {
            replyTrimmed = retryTrimmed;
          }
        }
      }

      return json({
        text: replyTrimmed || serverFallbackReply(lang),
        philosopherId,
        personaLoaded: PERSONA_LOADED,
        personaVersion: PERSONA_VERSION,
        quota: { remaining: usage.remaining },
      });
    }

    const dilemma = p?.dilemma && typeof p.dilemma === "object" ? p.dilemma : null;
    const dilemmaText = limitStr(dilemma?.text, 1200);
    const optA = limitStr(dilemma?.optA, 500);
    const optB = limitStr(dilemma?.optB, 500);
    const userChoice = limitStr(p?.userChoice, 20);
    const philosopherId = coercePhilosopherId(p?.philosopherId);
    const profile = getPhilosopherProfile(philosopherId);

    const latestUser = latestUserText(messages);
    const attachDilemma = userWantsDilemmaContext(lang, latestUser, {
      dilemmaText,
      optA,
      optB,
      userChoice,
    });
    const replyDepth = chooseReplyDepth(lang, latestUser, { attachDilemma });
    const sys = buildPhilosopherSystemPrompt(lang, philosopherId, replyDepth);
    const fewShot = profile ? buildPhilosopherFewShot(lang, profile, replyDepth) : [];
    const sessionBlock = buildSessionContext(lang, {
      dilemmaText,
      optA,
      optB,
      userChoice,
      summary,
      attachDilemma,
    });

    const input: DeepSeekMsg[] = [
      { role: "system", content: sys },
      ...fewShot,
      ...(sessionBlock ? [{ role: "user", content: sessionBlock }] : []),
      ...messages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: limitStr(m.content, 2000),
      })),
    ];

    let replyRaw = await deepseekPhilosopherReply({
      model,
      baseInput: input,
      maxOutputTokens: replyDepth === "deep" ? DEEP_REPLY_MAX_OUTPUT_TOKENS : SHORT_REPLY_MAX_OUTPUT_TOKENS,
      temperature: 0.84,
      lang,
    });

    let replyTrimmed = trimToWordLimit(lang, stripPhilosopherAngleOpener(lang, replyRaw), replyDepth);

    if (
      profile &&
      PERSONA_LOADED &&
      replyTrimmed &&
      !replyUsesSignatureConcept(lang, philosopherId, replyTrimmed)
    ) {
      const retryPrompt = signatureRetryUserPrompt(lang, philosopherId, replyDepth);
      if (retryPrompt) {
        const retryRaw = await deepseekPhilosopherReply({
          model,
          baseInput: [
            ...input,
            { role: "assistant", content: replyTrimmed },
            { role: "user", content: retryPrompt },
          ],
          maxOutputTokens: replyDepth === "deep" ? DEEP_REPLY_MAX_OUTPUT_TOKENS : SHORT_REPLY_MAX_OUTPUT_TOKENS,
          temperature: 0.78,
          lang,
        });
        const retryTrimmed = trimToWordLimit(lang, stripPhilosopherAngleOpener(lang, retryRaw), replyDepth);
        if (retryTrimmed && replyUsesSignatureConcept(lang, philosopherId, retryTrimmed)) {
          replyTrimmed = retryTrimmed;
        }
      }
    }

    const reply = replyTrimmed || serverFallbackReply(lang);
    return json({
      reply,
      summary,
      philosopherId,
      personaLoaded: PERSONA_LOADED,
      personaVersion: PERSONA_VERSION,
      replyDepth,
      dilemmaContextUsed: attachDilemma,
      quota: { remaining: usage.remaining },
    });
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


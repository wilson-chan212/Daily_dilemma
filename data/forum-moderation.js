/**
 * Forum moderation — client-side safety scan, hide, and report (Supabase + local fallback).
 */
(function forumModerationModule(global) {
  'use strict';

  const STORAGE_KEYS = {
    hidden: 'dailyDilemmas.forumHidden.v1',
    reports: 'dailyDilemmas.forumReports.v1',
    guidelines: 'dailyDilemmas.forumGuidelinesAccepted.v1',
  };

  const MAX_REPORTS = 200;

  const SAFETY_RULES = [
    {
      id: 'self_harm',
      severity: 'block',
      patterns: [
        /\b(suicid(e|al)|self[- ]?harm|kill\s+myself|end\s+my\s+life|want\s+to\s+die|cutting\s+myself)\b/i,
        /(自殺|自殘|想死|尋死|結束生命|割脈|跳樓)/,
      ],
    },
    {
      id: 'abuse',
      severity: 'block',
      patterns: [
        /\b(kill\s+you|i(?:'ll| will)\s+kill|rape\s+you|beat\s+you\s+to\s+death)\b/i,
        /(殺你|弄死你|打死你|強姦你|強暴你)/,
      ],
    },
    {
      id: 'crisis',
      severity: 'block',
      patterns: [
        /\b(overdose(d)?|bleeding\s+out|can't\s+breathe|heart\s+attack\s+now|stroke\s+right\s+now)\b/i,
        /(而家大出血|而家呼吸唔到|而家中風|而家心臟病發)/,
      ],
    },
    {
      id: 'private_data',
      severity: 'warn',
      patterns: [
        /\b[\w.+-]+@[\w.-]+\.\w{2,}\b/,
        /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/,
        /\b\d{4}[-\s]?\d{4}\b/,
        /\b(my|our)\s+(home\s+)?address\s+is\b/i,
        /\b(phone|mobile)\s*(number|#)?\s*[:：]?\s*\d/i,
        /(身份證|住址|電話號碼|手機號|whatsapp\s*[:：]?\s*\d|ig\s*[:：]?\s*@)/i,
      ],
    },
    {
      id: 'harassment',
      severity: 'warn',
      patterns: [
        /\b(you\s+are\s+(?:a\s+)?(?:stupid|worthless|disgusting)|go\s+die|kill\s+yourself)\b/i,
        /(你去死|你廢|你蠢|你無用)/,
      ],
    },
    {
      id: 'professional_advice',
      severity: 'warn',
      patterns: [
        /\b(legal\s+advice|am\s+i\s+liable|should\s+i\s+sue|diagnos(e|is)|prescri(be|ption)|medical\s+emergency|call\s+911|call\s+999)\b/i,
        /\b(what\s+medication|which\s+medication)\b/i,
        /(法律意見|律師話|應唔應該告|診斷|處方|醫療緊急|叫救護車|叫999|食咩藥|邊隻藥)/,
      ],
    },
  ];

  function postTargetKey(postId) {
    return `post:${String(postId || '').trim()}`;
  }

  function commentTargetKey(postId, kind, index) {
    return `comment:${String(postId || '').trim()}|${String(kind || 'user')}|${Number(index)}`;
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }

  function loadHiddenKeys() {
    const parsed = readJson(STORAGE_KEYS.hidden, []);
    return new Set(Array.isArray(parsed) ? parsed.map(String) : []);
  }

  function saveHiddenKeys(set) {
    writeJson(STORAGE_KEYS.hidden, Array.from(set));
  }

  function isTargetHidden(targetKey) {
    if (!targetKey) return false;
    return loadHiddenKeys().has(String(targetKey));
  }

  function hideTarget(targetKey) {
    if (!targetKey) return;
    const set = loadHiddenKeys();
    set.add(String(targetKey));
    saveHiddenKeys(set);
  }

  function unhideTarget(targetKey) {
    if (!targetKey) return;
    const set = loadHiddenKeys();
    set.delete(String(targetKey));
    saveHiddenKeys(set);
  }

  function loadReports() {
    const parsed = readJson(STORAGE_KEYS.reports, []);
    return Array.isArray(parsed) ? parsed : [];
  }

  function saveReports(reports) {
    writeJson(STORAGE_KEYS.reports, reports.slice(0, MAX_REPORTS));
  }

  function submitReportLocal(payload) {
    const entry = {
      targetKey: String(payload.targetKey || ''),
      reason: String(payload.reason || 'other'),
      otherDetail: payload.otherDetail ? String(payload.otherDetail).slice(0, 500) : null,
      snippet: String(payload.snippet || '').slice(0, 280),
      postId: payload.postId ? String(payload.postId) : null,
      reportedAt: new Date().toISOString(),
    };
    if (!entry.targetKey) return entry;
    const reports = loadReports();
    reports.unshift(entry);
    saveReports(reports);
    return entry;
  }

  async function submitReport(payload) {
    const entry = {
      targetKey: String(payload.targetKey || ''),
      reason: String(payload.reason || 'other'),
      otherDetail: payload.otherDetail ? String(payload.otherDetail).trim().slice(0, 500) : null,
      snippet: String(payload.snippet || '').slice(0, 280),
      postId: payload.postId ? String(payload.postId) : null,
    };
    if (!entry.targetKey) return { ok: false, entry };

    const supabaseOn =
      typeof global.supabaseEnabled === 'function' && global.supabaseEnabled();
    if (supabaseOn && typeof global.submitForumReportToSupabase === 'function') {
      try {
        const ok = await global.submitForumReportToSupabase(entry);
        if (ok) return { ok: true, entry };
        return { ok: false, entry };
      } catch (err) {
        console.error('Forum report Supabase failed', err);
        return { ok: false, entry };
      }
    }

    submitReportLocal(entry);
    return { ok: true, entry, offline: true };
  }

  function hasAcceptedGuidelines() {
    try {
      return localStorage.getItem(STORAGE_KEYS.guidelines) === '1';
    } catch {
      return false;
    }
  }

  function setAcceptedGuidelines(accepted) {
    try {
      if (accepted) localStorage.setItem(STORAGE_KEYS.guidelines, '1');
      else localStorage.removeItem(STORAGE_KEYS.guidelines);
    } catch {}
  }

  function scanForumContentSafety(text) {
    const hay = String(text || '');
    if (!hay.trim()) {
      return { flags: [], severity: 'none' };
    }
    const flags = [];
    let severity = 'none';
    SAFETY_RULES.forEach((rule) => {
      const hit = rule.patterns.some((re) => re.test(hay));
      if (!hit) return;
      flags.push({ id: rule.id, severity: rule.severity });
      if (rule.severity === 'block') severity = 'block';
      else if (rule.severity === 'warn' && severity !== 'block') severity = 'warn';
    });
    return { flags, severity };
  }

  function getComposeSafetyText(values) {
    return [
      values.title,
      values.body,
      values.optionA,
      values.optionB,
    ]
      .filter(Boolean)
      .join('\n');
  }

  global.ForumModeration = {
    STORAGE_KEYS,
    postTargetKey,
    commentTargetKey,
    isTargetHidden,
    hideTarget,
    unhideTarget,
    submitReport,
    loadReports,
    hasAcceptedGuidelines,
    setAcceptedGuidelines,
    scanForumContentSafety,
    getComposeSafetyText,
    SAFETY_FLAG_IDS: SAFETY_RULES.map((r) => r.id),
  };
})(typeof window !== 'undefined' ? window : globalThis);

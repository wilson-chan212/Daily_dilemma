/**
 * Anonymous forum avatars — warm palettes, emoji only (no human faces).
 * @global FORUM_AVATAR_CATALOG
 */
(function forumAvatarCatalogModule(global) {
  'use strict';

  const PALETTES = [
    { bg: '#f7ebe0', fg: '#8b5a38' },
    { bg: '#f3e0d0', fg: '#7a4a2e' },
    { bg: '#fae8d4', fg: '#9c6238' },
    { bg: '#efe4d6', fg: '#6b4a32' },
    { bg: '#f5ddd0', fg: '#8f4a3a' },
    { bg: '#edd9c8', fg: '#5c3d28' },
  ];

  const TABS = [
    {
      id: 'w1',
      emoji: ['🕯️', '🍵', '🫖', '🍯', '🥐', '🍞', '🦉', '📖', '🪶', '🌅', '🍂', '🌻'],
      labelEn: 'Hearth',
      labelZh: '爐邊',
    },
    {
      id: 'w2',
      emoji: ['🦉', '🕊️', '🐢', '🌱', '🍃', '🪨', '⚖️', '🧭', '📜', '✨', '🌙', '💭'],
      labelEn: 'Quiet wisdom',
      labelZh: '靜思',
    },
    {
      id: 'w3',
      emoji: ['🌅', '🌻', '🍂', '🌾', '🪵', '🪨', '☀️', '🔥', '🦊', '🐝', '🍑', '🪶'],
      labelEn: 'Golden hour',
      labelZh: '黃昏',
    },
  ];

  const EMOJI_ARIA_EN = {
    '🕯️': 'Candle',
    '🍵': 'Tea',
    '🫖': 'Teapot',
    '🍯': 'Honey',
    '🥐': 'Croissant',
    '🍞': 'Bread',
    '🦉': 'Owl',
    '📖': 'Book',
    '🪶': 'Feather',
    '🌅': 'Sunrise',
    '🍂': 'Autumn leaf',
    '🌻': 'Sunflower',
    '🕊️': 'Dove',
    '🐢': 'Turtle',
    '🌱': 'Seedling',
    '🍃': 'Leaf',
    '🪨': 'Rock',
    '⚖️': 'Scales',
    '🧭': 'Compass',
    '📜': 'Scroll',
    '✨': 'Sparkles',
    '🌙': 'Moon',
    '💭': 'Thought',
    '🌾': 'Sheaf',
    '🪵': 'Wood',
    '☀️': 'Sun',
    '🔥': 'Flame',
    '🦊': 'Fox',
    '🐝': 'Bee',
    '🍑': 'Peach',
  };

  const EMOJI_ARIA_ZH = {
    '🕯️': '蠟燭',
    '🍵': '茶',
    '🫖': '茶壺',
    '🍯': '蜜糖',
    '🥐': '牛角包',
    '🍞': '麵包',
    '🦉': '貓頭鷹',
    '📖': '書',
    '🪶': '羽毛',
    '🌅': '日出',
    '🍂': '秋葉',
    '🌻': '向日葵',
    '🕊️': '白鴿',
    '🐢': '龜',
    '🌱': '新芽',
    '🍃': '樹葉',
    '🪨': '石',
    '⚖️': '天平',
    '🧭': '指南針',
    '📜': '卷軸',
    '✨': '星光',
    '🌙': '月亮',
    '💭': '思緒',
    '🌾': '稻穗',
    '🪵': '木',
    '☀️': '太陽',
    '🔥': '火焰',
    '🦊': '狐狸',
    '🐝': '蜜蜂',
    '🍑': '桃',
  };

  const DEFAULT_AVATAR_ID = 'w2:0';

  function buildEntries() {
    const entries = [];
    TABS.forEach((tab) => {
      tab.emoji.forEach((emoji, index) => {
        entries.push({
          id: `${tab.id}:${index}`,
          tabId: tab.id,
          index,
          emoji,
          ariaEn: EMOJI_ARIA_EN[emoji] || emoji,
          ariaZh: EMOJI_ARIA_ZH[emoji] || emoji,
        });
      });
    });
    return entries;
  }

  const ENTRIES = buildEntries();
  const BY_ID = Object.fromEntries(ENTRIES.map((e) => [e.id, e]));
  const ALL_EMOJI = ENTRIES.map((e) => e.emoji);

  function hash(str) {
    let h = 0;
    const s = String(str || '');
    for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  }

  function isValidId(id) {
    return Boolean(id && BY_ID[id]);
  }

  function normalizeId(id) {
    return isValidId(id) ? id : DEFAULT_AVATAR_ID;
  }

  function getEntry(id) {
    return BY_ID[normalizeId(id)] || BY_ID[DEFAULT_AVATAR_ID];
  }

  function getEmoji(id) {
    return getEntry(id).emoji;
  }

  function getPalette(seed) {
    return PALETTES[hash(seed) % PALETTES.length];
  }

  function getSampleEmoji(name) {
    return ALL_EMOJI[hash(name) % ALL_EMOJI.length];
  }

  function getSampleId(name) {
    const emoji = getSampleEmoji(name);
    const hit = ENTRIES.find((e) => e.emoji === emoji);
    return hit ? hit.id : DEFAULT_AVATAR_ID;
  }

  function getAriaLabel(id, lang) {
    const entry = getEntry(id);
    if (lang === 'zh-Hant') return entry.ariaZh;
    return entry.ariaEn;
  }

  function getTabLabel(tabId, lang) {
    const tab = TABS.find((t) => t.id === tabId);
    if (!tab) return tabId;
    return lang === 'zh-Hant' ? tab.labelZh : tab.labelEn;
  }

  function pickRandomId() {
    if (!ENTRIES.length) return DEFAULT_AVATAR_ID;
    return ENTRIES[Math.floor(Math.random() * ENTRIES.length)].id;
  }

  global.FORUM_AVATAR_CATALOG = {
    PALETTES,
    TABS,
    ENTRIES,
    DEFAULT_AVATAR_ID,
    isValidId,
    normalizeId,
    getEntry,
    getEmoji,
    getPalette,
    getSampleEmoji,
    getSampleId,
    getAriaLabel,
    getTabLabel,
    pickRandomId,
    hash,
  };
})(typeof window !== 'undefined' ? window : globalThis);

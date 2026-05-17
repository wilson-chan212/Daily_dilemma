/**
 * Dilemma Forum — list + detail views (uses globals from app.js at runtime).
 */
(function forumPanelModule() {
  'use strict';

  function iconHtml(name, size) {
    if (typeof DD_ICONS !== 'undefined' && DD_ICONS.html) {
      return DD_ICONS.html(name, size);
    }
    return '';
  }

  function forumRefreshIconHtml(size) {
    return iconHtml('refresh', size || 18);
  }

  function createForumAvatarPickerButton() {
    const labels = ui();
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'forum-avatar-picker-btn';
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.setAttribute('aria-controls', 'forum-avatar-overlay');
    btn.setAttribute('aria-label', labels.forumAvatarChoose || 'Choose avatar');
    const preview = document.createElement('span');
    preview.className = 'forum-avatar-picker-preview';
    preview.setAttribute('aria-hidden', 'true');
    btn.appendChild(preview);
    return btn;
  }

  function createForumComposerFooter(submitBtn) {
    const footer = document.createElement('div');
    footer.className = 'forum-composer-footer';
    footer.appendChild(createForumAvatarPickerButton());
    const actions = document.createElement('div');
    actions.className = 'forum-composer-footer-actions';
    if (submitBtn) actions.appendChild(submitBtn);
    footer.appendChild(actions);
    return footer;
  }

  function wrapForumComposerTextarea(textarea, placement, onChatClick) {
    if (!textarea || textarea.closest('.forum-composer-shell')) return textarea;
    const shell = document.createElement('div');
    shell.className = `forum-composer-shell forum-composer-shell--${placement}`;
    const parent = textarea.parentNode;
    if (!parent) return textarea;
    parent.insertBefore(shell, textarea);
    shell.appendChild(textarea);
    const labels = ui();
    const chatBtn = document.createElement('button');
    chatBtn.type = 'button';
    chatBtn.className = `forum-composer-chat-btn forum-composer-chat-btn--${placement}`;
    chatBtn.setAttribute(
      'aria-label',
      labels.forumChatWithPhilosopher || labels.forumCommentChatWithPhilosopher || 'Dialogue'
    );
    chatBtn.innerHTML = iconHtml('chatPhilosopher', 22);
    chatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      onChatClick();
    });
    shell.appendChild(chatBtn);
    return textarea;
  }

  /** Forum comment / reply — outline speech bubble (see ui-icons comment) */
  const FORUM_COMMENT_ICON = 'comment';

  const FORUM_SAMPLE_AUTHORS = [
    'Maya',
    'Jon',
    'Leah',
    'Chris',
    'Nora',
    'Sam',
    'Priya',
    'Marcus',
    'Elena',
    'Dev',
    'Rina',
    'Owen',
    'Hannah',
    'Jules',
    'Tess',
    'Ian',
    'Alex',
    'Jordan',
    'Riley',
    'Casey',
  ];

  function avatarCatalog() {
    return typeof FORUM_AVATAR_CATALOG !== 'undefined' ? FORUM_AVATAR_CATALOG : null;
  }

  function getForumUserAvatarId() {
    const cat = avatarCatalog();
    const raw = state.forumUserAvatarId;
    if (cat) return cat.normalizeId(raw);
    return raw || 'w2:0';
  }

  function setForumUserAvatarId(id) {
    const cat = avatarCatalog();
    const next = cat ? cat.normalizeId(id) : id;
    state.forumUserAvatarId = next;
    if (typeof saveForumUserAvatarId === 'function') saveForumUserAvatarId(next);
    syncForumAvatarPickerPreview();
    if (state.mainTab === 'forum') renderFeed();
  }

  function isForumYouLabel(name) {
    const you = ui().forumYouLabel || 'You';
    return String(name || '') === you || name === 'You';
  }

  function isUserForumPost(post) {
    return Boolean(
      post && (post.isUserPost || String(post.id || '').startsWith('forum-user-'))
    );
  }

  function resolveForumAvatarId(name, opts) {
    const cat = avatarCatalog();
    if (!cat) return null;
    if (opts && opts.avatarId && cat.isValidId(opts.avatarId)) {
      return cat.normalizeId(opts.avatarId);
    }
    if (opts && opts.useUserAvatar) return getForumUserAvatarId();
    if (isForumYouLabel(name)) return getForumUserAvatarId();
    return cat.getSampleId(name);
  }

  function applyForumAvatarPalette(el, seed) {
    const cat = avatarCatalog();
    const palette = cat
      ? cat.getPalette(seed)
      : { bg: '#f7ebe0', fg: '#8b5a38' };
    el.style.background = palette.bg;
    el.style.color = palette.fg;
  }

  function forumPostHash(str) {
    let h = 0;
    const s = String(str || '');
    for (let i = 0; i < s.length; i += 1) {
      h = (h * 31 + s.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  function getForumPostAuthorName(post) {
    if (!post) return FORUM_SAMPLE_AUTHORS[0];
    if (post.author) return post.author;
    const youLabel = ui().forumYouLabel || 'You';
    if (String(post.id || '').startsWith('forum-user-')) return youLabel;
    const idx = forumPostHash(post.id || post.title) % FORUM_SAMPLE_AUTHORS.length;
    return FORUM_SAMPLE_AUTHORS[idx];
  }

  function createForumPostAuthorAvatar(post, sizeClass) {
    const name = getForumPostAuthorName(post);
    const avatar = createForumAvatar({
      name,
      useUserAvatar: isUserForumPost(post),
    });
    avatar.classList.add(sizeClass || 'forum-detail-user-avatar');
    const labels = ui();
    const aria = fillTemplate(labels.forumPostedByAria || 'Posted by {{name}}', { name });
    avatar.setAttribute('title', aria);
    avatar.setAttribute('aria-label', aria);
    return avatar;
  }

  function dilemmaShareIconHtml(size) {
    const n = Number(size) > 0 ? Number(size) : 14;
    return (
      '<svg class="dd-icon dilemma-share-icon" width="' +
      n +
      '" height="' +
      n +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>' +
      '<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>' +
      '</svg>'
    );
  }

  const FORUM_PORTRAIT_ALIASES = {
    Kant: 'Immanuel Kant',
    'Immanuel Kant': 'Immanuel Kant',
    康德: 'Immanuel Kant',
    Buddha: 'Buddha',
    'Shakyamuni Buddha': 'Buddha',
    佛陀: 'Buddha',
    Plato: 'Plato',
    柏拉圖: 'Plato',
    Confucius: 'Confucius',
    孔子: 'Confucius',
    Socrates: 'Socrates',
    蘇格拉底: 'Socrates',
    Aristotle: 'Aristotle',
    亞里士多德: 'Aristotle',
    Marx: 'Karl Marx',
    'Karl Marx': 'Karl Marx',
    馬克思: 'Karl Marx',
    Nietzsche: 'Friedrich Nietzsche',
    'Friedrich Nietzsche': 'Friedrich Nietzsche',
    尼采: 'Friedrich Nietzsche',
    Descartes: 'René Descartes',
    'René Descartes': 'René Descartes',
    笛卡兒: 'René Descartes',
  };

  const FORUM_COMPOSE_MAX = {
    topic: 40,
    description: 300,
    optionA: 60,
    optionB: 60,
  };

  const FORUM_COMPOSE_FIELDS = [
    {
      key: 'topic',
      inputId: 'forum-compose-topic',
      counterId: 'forum-compose-topic-count',
      errorId: 'forum-compose-topic-error',
      max: FORUM_COMPOSE_MAX.topic,
      postKey: 'title',
    },
    {
      key: 'description',
      inputId: 'forum-compose-description',
      counterId: 'forum-compose-description-count',
      errorId: 'forum-compose-description-error',
      max: FORUM_COMPOSE_MAX.description,
      postKey: 'body',
    },
    {
      key: 'optionA',
      inputId: 'forum-compose-option-a',
      counterId: 'forum-compose-option-a-count',
      errorId: 'forum-compose-option-a-error',
      max: FORUM_COMPOSE_MAX.optionA,
      postKey: 'optionA',
    },
    {
      key: 'optionB',
      inputId: 'forum-compose-option-b',
      counterId: 'forum-compose-option-b-count',
      errorId: 'forum-compose-option-b-error',
      max: FORUM_COMPOSE_MAX.optionB,
      postKey: 'optionB',
    },
  ];

  const FORUM_PHILOSOPHER_CHIP_MAP = {
    Socrates: 'socrates',
    Plato: 'plato',
    Aristotle: 'aristotle',
    Confucius: 'confucius',
    Kant: 'kant',
    'Immanuel Kant': 'kant',
    Laozi: 'laozi',
    'Lao Tzu': 'laozi',
    Buddha: 'buddha',
    'Shakyamuni Buddha': 'buddha',
    Marx: 'marx',
    'Karl Marx': 'marx',
    蘇格拉底: 'socrates',
    柏拉圖: 'plato',
    亞里士多德: 'aristotle',
    孔子: 'confucius',
    康德: 'kant',
    老子: 'laozi',
    佛陀: 'buddha',
    馬克思: 'marx',
  };

  let forumInitDone = false;

  function ui() {
    return getUiText(state.lang);
  }

  function fillTemplate(template, vars) {
    return String(template || '').replace(/\{\{(\w+)\}\}/g, (_, key) => {
      const v = vars[key];
      return v == null ? '' : String(v);
    });
  }

  function getForumSamplePosts() {
    const posts = window.FORUM_SAMPLE_POSTS;
    if (!posts) return [];
    return posts[state.lang] || posts.en || [];
  }

  function getForumUserPosts() {
    return Array.isArray(state.forumUserPosts) ? state.forumUserPosts : [];
  }

  function getAllForumPosts() {
    const user = getForumUserPosts().map((p) => ({ ...p }));
    const sample = getForumSamplePosts().map(mergeForumPostCopy);
    return [...user, ...sample];
  }

  function countComposeWords(text) {
    const s = String(text || '').trim();
    if (!s) return 0;
    const cjk = s.match(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/gu);
    const cjkCount = cjk ? cjk.length : 0;
    const latin = s.replace(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/gu, ' ').trim();
    const latinWords = latin ? latin.split(/\s+/).filter(Boolean).length : 0;
    return cjkCount + latinWords;
  }

  function createForumUserPostId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return `forum-user-${crypto.randomUUID()}`;
    }
    return `forum-user-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function mergePhilosopherEntry(entry, index, baseList) {
    const base = baseList && baseList[index];
    if (typeof entry === 'string') {
      return { name: (base && base.name) || 'Philosopher', text: entry };
    }
    if (entry && typeof entry === 'object') {
      return {
        name: entry.name || (base && base.name) || 'Philosopher',
        text: entry.text || (base && base.text) || '',
      };
    }
    return { name: (base && base.name) || 'Philosopher', text: (base && base.text) || '' };
  }

  function mergeCommentEntry(entry, index, baseList) {
    const base = baseList && baseList[index];
    if (typeof entry === 'string') {
      return { author: (base && base.author) || 'Community', text: entry };
    }
    if (entry && typeof entry === 'object') {
      return {
        author: entry.author || (base && base.author) || 'Community',
        text: entry.text || (base && base.text) || '',
      };
    }
    return { author: (base && base.author) || 'Community', text: (base && base.text) || '' };
  }

  function mergeForumPostCopy(post) {
    if (!post) return post;
    const merged = { ...post };
    const copyRoot = window.FORUM_SAMPLE_COPY;
    const rxRoot = window.FORUM_SAMPLE_REACTIONS;
    const langCopy = copyRoot && (copyRoot[state.lang] || copyRoot.en);
    const patch = langCopy && langCopy[post.id];
    if (patch) {
      if (patch.body) merged.body = patch.body;
      if (Array.isArray(patch.philosophers)) {
        merged.philosophers = patch.philosophers.map((entry, i) =>
          mergePhilosopherEntry(entry, i, post.philosophers)
        );
      }
      if (Array.isArray(patch.comments)) {
        merged.comments = patch.comments.map((entry, i) =>
          mergeCommentEntry(entry, i, post.comments)
        );
      }
    }
    const baseRx = (rxRoot && rxRoot[post.id]) || post.reactions || { likes: 0, dislikes: 0 };
    merged.reactions = { likes: baseRx.likes || 0, dislikes: baseRx.dislikes || 0 };
    return merged;
  }

  function getForumPostById(postId) {
    const user = getForumUserPosts().find((p) => p.id === postId);
    if (user) return { ...user };
    const raw = getForumSamplePosts().find((p) => p.id === postId);
    return raw ? mergeForumPostCopy(raw) : null;
  }

  function formatForumVoteCount(count) {
    const template = ui().forumVoteCount || '{{count}} votes';
    return template.replace('{{count}}', String(count));
  }

  function formatForumTotalVotes(count) {
    const template = ui().forumTotalVotes || '{{count}} votes';
    return template.replace('{{count}}', String(count));
  }

  function getForumVoteTotals(post) {
    const base = post && post.votes ? post.votes : { a: 0, b: 0 };
    const local = state.forumVotes[post.id] || {};
    return {
      a: Number(base.a || 0) + (local.choice === 'a' ? 1 : 0),
      b: Number(base.b || 0) + (local.choice === 'b' ? 1 : 0),
      choice: local.choice || null,
    };
  }

  function getForumVotePercentages(totals) {
    const sum = totals.a + totals.b;
    if (!sum) return { a: 50, b: 50 };
    return {
      a: Math.round((totals.a / sum) * 100),
      b: Math.round((totals.b / sum) * 100),
    };
  }

  function getForumTotalVoteCount(post) {
    const totals = getForumVoteTotals(post);
    return totals.a + totals.b;
  }

  function getForumPostReactions(post) {
    const base = post.reactions || { likes: 0, dislikes: 0 };
    const local = state.forumReactions[post.id] || {};
    let likes = Number(base.likes || 0);
    let dislikes = Number(base.dislikes || 0);
    if (local.choice === 'like') likes += 1;
    if (local.choice === 'dislike') dislikes += 1;
    return { likes, dislikes, choice: local.choice || null, net: likes - dislikes };
  }

  function getForumCommentReactions(postId, kind, index) {
    const key = `${postId}|${kind}|${index}`;
    const sample =
      window.FORUM_SAMPLE_COMMENT_REACTIONS &&
      window.FORUM_SAMPLE_COMMENT_REACTIONS[postId];
    const bucket = sample && sample[kind === 'philosopher' ? 'philosophers' : 'comments'];
    const base = bucket && bucket[index] ? bucket[index] : { likes: 0, dislikes: 0 };
    const local = state.forumCommentReactions[key] || {};
    let likes = Number(base.likes || 0);
    let dislikes = Number(base.dislikes || 0);
    if (local.choice === 'like') likes += 1;
    if (local.choice === 'dislike') dislikes += 1;
    return { likes, dislikes, choice: local.choice || null };
  }

  function formatForumTime(iso) {
    if (!iso) return '';
    try {
      const d = new Date(iso);
      if (Number.isNaN(d.getTime())) return '';
      const labels = ui();
      const sec = Math.floor((Date.now() - d.getTime()) / 1000);
      if (sec < 45) return labels.forumTimeJustNow || 'Just now';
      const min = Math.floor(sec / 60);
      if (min < 60) {
        return fillTemplate(labels.forumTimeMinutes || '{{count}}m ago', { count: min });
      }
      const hr = Math.floor(min / 60);
      if (hr < 24) {
        return fillTemplate(labels.forumTimeHours || '{{count}}h ago', { count: hr });
      }
      const day = Math.floor(hr / 24);
      if (day < 7) {
        return fillTemplate(labels.forumTimeDays || '{{count}}d ago', { count: day });
      }
      const week = Math.floor(day / 7);
      if (week < 5) {
        return fillTemplate(labels.forumTimeWeeks || '{{count}}w ago', { count: week });
      }
      const locale = typeof getActiveLocale === 'function' ? getActiveLocale() : 'en-US';
      return d.toLocaleDateString(locale, { month: 'short', day: 'numeric' });
    } catch {
      return '';
    }
  }

  function hasConceptNote(termKey) {
    if (!termKey) return false;
    if (state.lang === 'zh-Hant') {
      return Boolean((window.CONCEPT_NOTES_ZH_HANT || {})[termKey]);
    }
    return Boolean((window.CONCEPT_NOTES_EN || {})[termKey]);
  }

  function resolveConceptTermKey(label) {
    const raw = String(label || '').trim();
    if (!raw) return '';
    if (hasConceptNote(raw)) return raw;
    const notes = {
      ...(window.CONCEPT_NOTES_EN || {}),
      ...(window.CONCEPT_NOTES_ZH_HANT || {}),
    };
    const lower = raw.toLowerCase();
    const hit = Object.keys(notes).find((key) => key.toLowerCase() === lower);
    return hit || raw;
  }

  function getConceptChipLabel(termKey) {
    if (typeof translateTerm === 'function') return translateTerm(termKey);
    return termKey;
  }

  function getForumPortraitSrc(name) {
    if (!name || typeof PHILOSOPHER_PORTRAITS === 'undefined') return '';
    if (PHILOSOPHER_PORTRAITS[name]) return PHILOSOPHER_PORTRAITS[name];
    const alias = FORUM_PORTRAIT_ALIASES[name];
    if (alias && PHILOSOPHER_PORTRAITS[alias]) return PHILOSOPHER_PORTRAITS[alias];
    const chip = FORUM_PHILOSOPHER_CHIP_MAP[name];
    if (
      chip &&
      typeof AI_PHILOSOPHER_PORTRAIT_KEYS !== 'undefined' &&
      AI_PHILOSOPHER_PORTRAIT_KEYS[chip]
    ) {
      const full = AI_PHILOSOPHER_PORTRAIT_KEYS[chip];
      return PHILOSOPHER_PORTRAITS[full] || '';
    }
    return '';
  }

  function createForumAvatar(nameOrOpts) {
    const opts =
      nameOrOpts && typeof nameOrOpts === 'object'
        ? nameOrOpts
        : { name: nameOrOpts };
    const name = opts.name || '';
    const wrap = document.createElement('div');
    wrap.className = 'forum-comment-avatar';
    const src = getForumPortraitSrc(name);
    if (src) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.decoding = 'async';
      img.loading = 'lazy';
      wrap.appendChild(img);
      return wrap;
    }

    const cat = avatarCatalog();
    const avatarId = resolveForumAvatarId(name, opts);
    if (cat && avatarId) {
      wrap.classList.add('forum-comment-avatar--emoji');
      wrap.textContent = cat.getEmoji(avatarId);
      applyForumAvatarPalette(wrap, avatarId);
      wrap.dataset.avatarId = avatarId;
      wrap.setAttribute('aria-hidden', 'true');
      return wrap;
    }

    wrap.classList.add('forum-comment-avatar--initials');
    const initials = String(name || '?')
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
    wrap.textContent = initials || '?';
    applyForumAvatarPalette(wrap, name);
    return wrap;
  }

  function createForumVoteBlock(post, onVote) {
    const labels = ui();
    const totals = getForumVoteTotals(post);
    const pcts = getForumVotePercentages(totals);
    const hasVoted = Boolean(totals.choice);

    const wrap = document.createElement('div');
    wrap.className = 'forum-vote-wrap';

    if (!hasVoted) {
      const prompt = document.createElement('p');
      prompt.className = 'forum-vote-prompt';
      prompt.textContent = labels.forumVotePrompt || 'Which side are you on?';
      wrap.appendChild(prompt);
    }

    const voteRow = document.createElement('div');
    voteRow.className = 'forum-vote-row';
    voteRow.classList.toggle('has-voted', hasVoted);
    voteRow.setAttribute('role', 'group');
    voteRow.setAttribute('aria-label', labels.forumVoteGroupAria || 'Vote on this dilemma');

    [
      ['a', post.optionA, pcts.a, totals.a],
      ['b', post.optionB, pcts.b, totals.b],
    ].forEach(([choice, text, pct, count]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'forum-vote-btn';
      btn.classList.toggle('is-selected', totals.choice === choice);
      btn.setAttribute('aria-pressed', totals.choice === choice ? 'true' : 'false');
      btn.style.setProperty('--vote-pct', String(pct));

      const fill = document.createElement('span');
      fill.className = 'forum-vote-fill';
      fill.setAttribute('aria-hidden', 'true');

      const main = document.createElement('span');
      main.className = 'forum-vote-main';
      const letter = document.createElement('span');
      letter.className = 'forum-vote-letter';
      letter.textContent = choice.toUpperCase();
      const label = document.createElement('span');
      label.className = 'forum-vote-label';
      label.textContent = text;
      main.appendChild(letter);
      main.appendChild(label);

      const aside = document.createElement('span');
      aside.className = 'forum-vote-aside';
      const pctEl = document.createElement('span');
      pctEl.className = 'forum-vote-pct';
      const pctTemplate = labels.forumVotePct || '{{pct}}%';
      pctEl.textContent = pctTemplate.replace('{{pct}}', String(pct));
      const countEl = document.createElement('span');
      countEl.className = 'forum-vote-count';
      countEl.textContent = formatForumVoteCount(count);
      const selectedMark = document.createElement('span');
      selectedMark.className = 'forum-vote-selected-mark';
      selectedMark.setAttribute('aria-hidden', 'true');
      selectedMark.textContent = '✓';
      aside.appendChild(pctEl);
      aside.appendChild(countEl);
      aside.appendChild(selectedMark);

      btn.appendChild(fill);
      btn.appendChild(main);
      btn.appendChild(aside);
      btn.addEventListener('click', () => onVote(choice));
      voteRow.appendChild(btn);
    });

    wrap.appendChild(voteRow);
    return wrap;
  }

  function handleForumVote(postId, choice) {
    if (!postId || !['a', 'b'].includes(choice)) return;
    state.forumVotes[postId] = { choice };
    renderFeed();
  }

  function handleForumPostReaction(postId, reaction) {
    const cur = state.forumReactions[postId] || {};
    state.forumReactions[postId] = { choice: cur.choice === reaction ? null : reaction };
    renderFeed();
  }

  function handleForumCommentReaction(postId, kind, index, reaction) {
    const key = `${postId}|${kind}|${index}`;
    const cur = state.forumCommentReactions[key] || {};
    state.forumCommentReactions[key] = { choice: cur.choice === reaction ? null : reaction };
    renderFeed();
  }

  function filterForumPosts(posts) {
    const q = String(state.forumSearchQuery || '')
      .trim()
      .toLowerCase();
    if (!q) return posts;
    return posts.filter((p) => {
      const hay = `${p.title} ${p.body} ${p.optionA || ''} ${p.optionB || ''} ${(p.concepts || []).join(' ')}`.toLowerCase();
      return hay.includes(q);
    });
  }

  function sortForumPosts(posts) {
    const list = posts.slice();
    if (state.forumSort === 'popular') {
      list.sort((a, b) => getForumTotalVoteCount(b) - getForumTotalVoteCount(a));
      return list;
    }
    if (state.forumSort === 'split') {
      list.sort((a, b) => {
        const split = (post) => {
          const t = getForumVoteTotals(post);
          const sum = t.a + t.b;
          if (!sum) return 1;
          return Math.abs(t.a / sum - 0.5);
        };
        return split(a) - split(b);
      });
      return list;
    }
    list.sort((a, b) => new Date(b.postedAt || 0) - new Date(a.postedAt || 0));
    return list;
  }

  function syncForumViewVisibility() {
    const listView = document.getElementById('forum-list-view');
    const detailView = document.getElementById('forum-detail-view');
    const hero = document.querySelector('.forum-hero');
    const shell = document.querySelector('.forum-shell');
    const inDetail = state.forumView === 'detail' && state.forumPostId;
    if (listView) listView.hidden = !!inDetail;
    if (detailView) detailView.hidden = !inDetail;
    if (hero) hero.hidden = !!inDetail;
    if (shell) shell.classList.toggle('forum-shell--detail', !!inDetail);
  }

  function syncForumSortToolbar() {
    document.querySelectorAll('.forum-sort-btn[data-forum-sort]').forEach((btn) => {
      const sort = btn.getAttribute('data-forum-sort');
      btn.classList.toggle('is-active', sort === state.forumSort);
    });
  }

  function syncForumSearchPanel() {
    const panel = document.getElementById('forum-search-panel');
    const btn = document.getElementById('btn-forum-search');
    if (panel) panel.hidden = !state.forumSearchOpen;
    if (btn) {
      btn.classList.toggle('is-active', state.forumSearchOpen);
      btn.setAttribute('aria-expanded', state.forumSearchOpen ? 'true' : 'false');
    }
    const input = document.getElementById('forum-search-input');
    if (input && state.forumSearchOpen) input.focus();
  }

  function toggleForumSearchPanel() {
    state.forumSearchOpen = !state.forumSearchOpen;
    syncForumSearchPanel();
  }

  function pulseForumRefreshBtn(btn) {
    if (!btn) return;
    btn.classList.add('is-refreshing');
    window.setTimeout(() => btn.classList.remove('is-refreshing'), 550);
  }

  function refreshForumFeed({ animate = true } = {}) {
    if (state.forumView === 'detail') {
      refreshForumDetail({ animate });
      return;
    }
    if (animate) pulseForumRefreshBtn(document.getElementById('btn-forum-refresh'));
    renderForumList();
  }

  function refreshForumDetail() {
    if (state.forumView !== 'detail' || !state.forumPostId) return;
    renderForumDetail();
  }

  function openForumPost(postId) {
    if (!getForumPostById(postId)) return;
    state.forumView = 'detail';
    state.forumPostId = postId;
    state.forumReplyOpen = null;
    syncForumViewVisibility();
    renderForumDetail();
    const detail = document.getElementById('forum-detail');
    if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function closeForumDetail() {
    state.forumView = 'list';
    state.forumPostId = null;
    state.forumReplyOpen = null;
    syncForumViewVisibility();
    renderForumList();
    const listView = document.getElementById('forum-list-view');
    if (listView) {
      window.requestAnimationFrame(() => {
        listView.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  function openForumShare(post) {
    const labels = ui();
    const text = `${post.title}\n\n${post.body}\n\nA. ${post.optionA}\nB. ${post.optionB}`;
    if (navigator.share) {
      navigator
        .share({ title: labels.forumShareTitle || labels.shareTitle || post.title, text })
        .catch(() => {});
      return;
    }
    if (typeof openFeedbackFlash === 'function') {
      openFeedbackFlash(labels.share || 'Share');
    } else {
      window.alert(text.slice(0, 500));
    }
  }

  function resolveForumPhilosopherChip(name) {
    return FORUM_PHILOSOPHER_CHIP_MAP[name] || null;
  }

  function getForumComposeDraftPost() {
    const labels = ui();
    const values = {};
    FORUM_COMPOSE_FIELDS.forEach((field) => {
      values[field.postKey] = getForumComposeFieldValue(field);
    });
    return {
      title: values.title || labels.forumComposeTitle || 'Draft dilemma',
      body: values.body || '',
      optionA: values.optionA || '',
      optionB: values.optionB || '',
    };
  }

  function openForumPhilosopherChat(post, commentItem, philosopherName) {
    const labels = ui();
    const seed = commentItem
      ? fillTemplate(labels.forumCommentChatDefaultQuestion, {
          title: post.title,
          author: commentItem.name || commentItem.author || '',
          comment: commentItem.text || '',
        })
      : fillTemplate(labels.forumChatDefaultQuestion, {
          title: post.title,
          body: post.body,
          optionA: post.optionA,
          optionB: post.optionB,
        });
    const chipId = philosopherName ? resolveForumPhilosopherChip(philosopherName) : null;
    const openGateway = typeof window !== 'undefined' ? window.openPhilosopherGateway : null;
    if (typeof openGateway === 'function') {
      openGateway('forum', {
        defaultInput: seed,
        philosopherId: chipId || undefined,
      });
      return;
    }
    if (chipId && typeof setSelectedPhilosopherId === 'function') {
      setSelectedPhilosopherId(chipId);
    }
    if (typeof openAiAssistant === 'function') openAiAssistant();
    else if (typeof setMainTab === 'function') setMainTab('chat');
    if (typeof activateChatPanel === 'function') activateChatPanel();
    const input = document.getElementById('ai-input');
    if (input) {
      input.value = seed;
      requestAnimationFrame(() => input.focus());
    }
  }

  function buildForumThread(post) {
    const items = [];
    (post.philosophers || []).forEach((entry, i) => {
      items.push({
        kind: 'philosopher',
        index: i,
        name: entry.name,
        text: entry.text,
        postedAt: post.postedAt,
      });
    });
    (post.comments || []).forEach((entry, i) => {
      items.push({
        kind: 'comment',
        index: i,
        name: entry.author,
        author: entry.author,
        text: entry.text,
        postedAt: post.postedAt,
      });
    });
    const userComments = state.forumUserComments[post.id] || [];
    userComments.forEach((entry, i) => {
      items.push({
        kind: 'user',
        index: i,
        name: entry.author || ui().forumYouLabel || 'You',
        author: entry.author,
        text: entry.text,
        postedAt: entry.postedAt || new Date().toISOString(),
      });
    });
    return items;
  }

  function createForumTopicStat(iconName, text, className, ariaLabel) {
    const stat = document.createElement('span');
    stat.className = className ? `forum-topic-stat ${className}` : 'forum-topic-stat';
    if (ariaLabel) stat.setAttribute('aria-label', ariaLabel);
    const icon = document.createElement('span');
    icon.className = 'forum-topic-stat-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = iconHtml(iconName, 13);
    const label = document.createElement('span');
    label.className = 'forum-topic-stat-text';
    label.textContent = text;
    stat.appendChild(icon);
    stat.appendChild(label);
    return stat;
  }

  function renderForumList() {
    const feed = document.getElementById('forum-feed-list');
    const empty = document.getElementById('forum-list-empty');
    if (!feed) return;

    const labels = ui();
    const posts = sortForumPosts(filterForumPosts(getAllForumPosts()));

    feed.replaceChildren();
    if (empty) {
      empty.hidden = posts.length > 0;
      empty.textContent = labels.forumListEmpty || 'No dilemmas match your search.';
    }

    posts.forEach((post) => {
      const rx = getForumPostReactions(post);
      const votes = getForumTotalVoteCount(post);

      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'forum-topic-row';
      row.addEventListener('click', () => openForumPost(post.id));

      row.appendChild(createForumPostAuthorAvatar(post, 'forum-topic-user-avatar'));

      const main = document.createElement('span');
      main.className = 'forum-topic-main';

      const title = document.createElement('span');
      title.className = 'forum-topic-title';
      title.textContent = post.title;
      main.appendChild(title);

      const meta = document.createElement('span');
      meta.className = 'forum-topic-meta';

      const time = document.createElement('span');
      time.className = 'forum-topic-time';
      time.textContent = formatForumTime(post.postedAt);
      meta.appendChild(time);

      const stats = document.createElement('span');
      stats.className = 'forum-topic-stats';

      stats.appendChild(
        createForumTopicStat(
          'voteBox',
          String(votes),
          'forum-topic-stat--votes',
          fillTemplate(labels.forumTotalVotes || '{{count}} votes', { count: votes })
        )
      );
      stats.appendChild(
        createForumTopicStat(
          'thumbUp',
          String(rx.likes),
          'forum-topic-stat--like',
          `${labels.forumLike || 'Like'} (${rx.likes})`
        )
      );
      stats.appendChild(
        createForumTopicStat(
          'thumbDown',
          String(rx.dislikes),
          'forum-topic-stat--dislike',
          `${labels.forumDislike || 'Dislike'} (${rx.dislikes})`
        )
      );

      meta.appendChild(stats);
      main.appendChild(meta);
      row.appendChild(main);
      feed.appendChild(row);
    });

    syncForumSortToolbar();
    syncForumSearchPanel();
  }

  function createCommentReactionButtons(postId, item) {
    const labels = ui();
    const wrap = document.createElement('div');
    wrap.className = 'forum-comment-actions';
    const rx = getForumCommentReactions(postId, item.kind, item.index);

    [
      ['like', 'thumbUp', labels.forumCommentLike || labels.forumLike || 'Like'],
      ['dislike', 'thumbDown', labels.forumCommentDislike || labels.forumDislike || 'Dislike'],
    ].forEach(([key, iconName, label]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'forum-comment-action-btn';
      btn.classList.toggle('is-selected', rx.choice === key);
      const count = key === 'like' ? rx.likes : rx.dislikes;
      btn.innerHTML = `<span class="forum-action-icon" aria-hidden="true">${iconHtml(iconName, 16)}</span><span class="forum-comment-action-count">${count}</span>`;
      btn.setAttribute('aria-label', `${label} (${count})`);
      btn.setAttribute('aria-pressed', rx.choice === key ? 'true' : 'false');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleForumCommentReaction(postId, item.kind, item.index, key);
      });
      wrap.appendChild(btn);
    });

    if (item.kind !== 'user') {
      const replyBtn = document.createElement('button');
      replyBtn.type = 'button';
      replyBtn.className = 'forum-comment-action-btn forum-comment-action-btn--reply';
      replyBtn.setAttribute('aria-label', labels.forumCommentReply || 'Reply');
      replyBtn.innerHTML = `<span class="forum-action-icon" aria-hidden="true">${iconHtml(FORUM_COMMENT_ICON, 16)}</span>`;
      replyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const replyKey = `${postId}|${item.kind}|${item.index}`;
        state.forumReplyOpen = state.forumReplyOpen === replyKey ? null : replyKey;
        renderForumDetail();
      });
      wrap.appendChild(replyBtn);
    }

    if (item.kind === 'philosopher') {
      const chatBtn = document.createElement('button');
      chatBtn.type = 'button';
      chatBtn.className = 'forum-comment-action-btn forum-comment-action-btn--chat';
      chatBtn.setAttribute(
        'aria-label',
        labels.forumCommentChatWithPhilosopher || labels.forumChatWithPhilosopher || 'Dialogue'
      );
      chatBtn.innerHTML = `<span class="forum-chat-icon" aria-hidden="true">${iconHtml('chatPhilosopher', 16)}</span>`;
      chatBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const post = getForumPostById(postId);
        if (post) openForumPhilosopherChat(post, item, item.name);
      });
      wrap.appendChild(chatBtn);
    }

    return wrap;
  }

  function createReplyForm(postId, item) {
    const labels = ui();
    const form = document.createElement('div');
    form.className = 'forum-comment-reply-form';
    const input = document.createElement('textarea');
    input.className = 'forum-comment-reply-input';
    input.rows = 3;
    input.placeholder = labels.forumCommentReplyPlaceholder || 'Write a public reply…';
    wrapForumComposerTextarea(input, 'end', () => {
      const post = getForumPostById(postId);
      if (post) openForumPhilosopherChat(post, item, item.kind === 'philosopher' ? item.name : null);
    });
    const submit = document.createElement('button');
    submit.type = 'button';
    submit.className = 'forum-comment-reply-submit';
    submit.textContent = labels.forumCommentPostReply || 'Post reply';
    submit.addEventListener('click', () => {
      const text = String(input.value || '').trim();
      if (!text) return;
      if (!state.forumUserComments[postId]) state.forumUserComments[postId] = [];
      state.forumUserComments[postId].push({
        author: labels.forumYouLabel || 'You',
        text,
        postedAt: new Date().toISOString(),
      });
      state.forumReplyOpen = null;
      renderForumDetail();
    });
    form.appendChild(input);
    form.appendChild(createForumComposerFooter(submit));
    return form;
  }

  function renderForumThread(post, container) {
    const labels = ui();
    const thread = document.createElement('div');
    thread.className = 'forum-comment-thread';
    const items = buildForumThread(post);

    items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'forum-comment';

      row.appendChild(
        createForumAvatar({
          name: item.name,
          useUserAvatar: item.kind === 'user',
        })
      );

      const body = document.createElement('div');
      body.className = 'forum-comment-body';

      const head = document.createElement('div');
      head.className = 'forum-comment-head';
      const author = document.createElement('strong');
      author.className = 'forum-comment-author';
      author.textContent = item.name;
      const time = document.createElement('span');
      time.className = 'forum-comment-time';
      time.textContent = formatForumTime(item.postedAt);
      head.appendChild(author);
      if (item.kind === 'philosopher') {
        const badge = document.createElement('span');
        badge.className = 'forum-comment-badge';
        badge.textContent = labels.forumPhilosopherReplyBadge || 'Philosopher';
        head.appendChild(badge);
      }
      head.appendChild(time);
      body.appendChild(head);

      const text = document.createElement('p');
      text.className = 'forum-comment-text';
      text.textContent = item.text;
      body.appendChild(text);

      if (item.kind !== 'user') {
        body.appendChild(createCommentReactionButtons(post.id, item));
        const replyKey = `${post.id}|${item.kind}|${item.index}`;
        if (state.forumReplyOpen === replyKey) {
          body.appendChild(createReplyForm(post.id, item));
        }
      }

      row.appendChild(body);
      thread.appendChild(row);
    });

    container.appendChild(thread);
  }

  function renderForumDetail() {
    const root = document.getElementById('forum-detail');
    if (!root) return;
    const post = getForumPostById(state.forumPostId);
    if (!post) {
      closeForumDetail();
      return;
    }

    const labels = ui();
    const rx = getForumPostReactions(post);
    root.replaceChildren();

    const header = document.createElement('div');
    header.className = 'forum-detail-header';
    header.appendChild(createForumPostAuthorAvatar(post));
    const headerMain = document.createElement('div');
    headerMain.className = 'forum-detail-header-main';
    const title = document.createElement('h2');
    title.className = 'forum-detail-title';
    title.textContent = post.title;
    const time = document.createElement('time');
    time.className = 'forum-post-time';
    time.dateTime = post.postedAt || '';
    time.textContent = formatForumTime(post.postedAt);
    headerMain.appendChild(title);
    headerMain.appendChild(time);
    header.appendChild(headerMain);

    const headerActions = document.createElement('div');
    headerActions.className = 'forum-detail-header-actions';

    if (typeof makeBookmarkBtn === 'function' && typeof ensureBookmarksLoaded === 'function') {
      ensureBookmarksLoaded();
      const itemType = 'dilemma';
      const itemKey = `forum:${post.id}`;
      const payload = {
        source: 'forum',
        forumPostId: post.id,
        title: post.title,
        text: post.body,
        optA: post.optionA,
        optB: post.optionB,
      };
      const bookmarked = typeof isBookmarked === 'function' && isBookmarked(itemType, itemKey);
      const bmBtn = makeBookmarkBtn({
        itemType,
        itemKey,
        payload,
        dilemmaId: null,
        ariaLabel: bookmarked
          ? labels.bookmarkRemove || 'Remove bookmark'
          : labels.bookmarkAdd || 'Bookmark',
        className: 'forum-detail-header-btn bm-btn--forum',
      });
      if (typeof setBookmarkBtnActive === 'function') {
        setBookmarkBtnActive(bmBtn, bookmarked);
      }
      headerActions.appendChild(bmBtn);
    }

    const shareBtn = document.createElement('button');
    shareBtn.type = 'button';
    shareBtn.className = 'forum-detail-header-btn forum-detail-share-btn';
    shareBtn.setAttribute('aria-label', labels.forumShareTitle || labels.share || 'Share');
    shareBtn.innerHTML = `<span class="forum-action-icon" aria-hidden="true">${dilemmaShareIconHtml(14)}</span>`;
    shareBtn.addEventListener('click', () => openForumShare(post));
    headerActions.appendChild(shareBtn);
    header.appendChild(headerActions);
    root.appendChild(header);

    const body = document.createElement('p');
    body.className = 'forum-detail-body';
    body.textContent = post.body;
    root.appendChild(body);

    root.appendChild(
      createForumVoteBlock(post, (choice) => handleForumVote(post.id, choice))
    );

    const toolbar = document.createElement('div');
    toolbar.className = 'forum-detail-toolbar';
    toolbar.setAttribute('role', 'group');
    toolbar.setAttribute('aria-label', labels.forumDetailToolbarAria || 'Dilemma actions');

    [
      ['like', 'thumbUp', labels.forumLike || 'Like', rx.likes],
      ['dislike', 'thumbDown', labels.forumDislike || 'Dislike', rx.dislikes],
    ].forEach(([key, iconName, label, count]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'forum-detail-toolbar-btn forum-reaction-btn';
      btn.classList.toggle('is-selected', rx.choice === key);
      btn.innerHTML = `<span class="forum-reaction-emoji" aria-hidden="true">${iconHtml(iconName, 18)}</span><span class="forum-reaction-count">${count}</span>`;
      btn.setAttribute('aria-label', `${label} (${count})`);
      btn.setAttribute('aria-pressed', rx.choice === key ? 'true' : 'false');
      btn.addEventListener('click', () => handleForumPostReaction(post.id, key));
      toolbar.appendChild(btn);
    });

    const commentBtn = document.createElement('button');
    commentBtn.type = 'button';
    commentBtn.className = 'forum-detail-toolbar-btn';
    commentBtn.setAttribute('aria-label', labels.forumPostComment || 'Post comment');
    commentBtn.innerHTML = `<span class="forum-action-icon" aria-hidden="true">${iconHtml(FORUM_COMMENT_ICON, 18)}</span>`;
    commentBtn.addEventListener('click', () => {
      const form = document.getElementById('forum-post-comment-form');
      if (form) {
        form.hidden = false;
        form.querySelector('textarea')?.focus();
      }
    });
    toolbar.appendChild(commentBtn);

    const chatCta = document.createElement('button');
    chatCta.type = 'button';
    chatCta.className = 'forum-detail-toolbar-btn forum-chat-cta-btn';
    chatCta.setAttribute(
      'aria-label',
      labels.forumChatWithPhilosopher || labels.forumCommentChatWithPhilosopher || 'Dialogue'
    );
    chatCta.innerHTML = `<span class="forum-chat-icon" aria-hidden="true">${iconHtml('chatPhilosopher', 18)}</span>`;
    chatCta.addEventListener('click', () => openForumPhilosopherChat(post, null, null));
    toolbar.appendChild(chatCta);

    root.appendChild(toolbar);

    const commentFormWrap = document.createElement('div');
    commentFormWrap.className = 'forum-post-comment-form-wrap';
    commentFormWrap.id = 'forum-post-comment-form';
    commentFormWrap.hidden = true;
    const commentInput = document.createElement('textarea');
    commentInput.className = 'forum-comment-reply-input';
    commentInput.rows = 3;
    commentInput.placeholder =
      labels.forumPostCommentPlaceholder || 'Share your thoughts on this dilemma…';
    wrapForumComposerTextarea(commentInput, 'end', () => openForumPhilosopherChat(post, null, null));
    const commentSubmit = document.createElement('button');
    commentSubmit.type = 'button';
    commentSubmit.className = 'forum-comment-reply-submit';
    commentSubmit.textContent = labels.forumPostComment || 'Post comment';
    commentSubmit.addEventListener('click', () => {
      const text = String(commentInput.value || '').trim();
      if (!text) return;
      if (!state.forumUserComments[post.id]) state.forumUserComments[post.id] = [];
      state.forumUserComments[post.id].push({
        author: labels.forumYouLabel || 'You',
        text,
        postedAt: new Date().toISOString(),
      });
      commentInput.value = '';
      commentFormWrap.hidden = true;
      renderForumDetail();
    });
    commentFormWrap.appendChild(commentInput);
    commentFormWrap.appendChild(createForumComposerFooter(commentSubmit));
    root.appendChild(commentFormWrap);

    if ((post.concepts || []).length) {
      const conceptWrap = document.createElement('div');
      conceptWrap.className = 'forum-concepts';
      const conceptHeading = document.createElement('p');
      conceptHeading.className = 'forum-section-label';
      conceptHeading.textContent = labels.forumConceptsLabel || 'Concepts';
      conceptWrap.appendChild(conceptHeading);
      const conceptList = document.createElement('div');
      conceptList.className = 'forum-concept-list';
      post.concepts.forEach((concept) => {
        const termKey = resolveConceptTermKey(concept);
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'forum-concept-chip gf-tag-link';
        chip.textContent = getConceptChipLabel(termKey);
        if (hasConceptNote(termKey) && typeof openConcept === 'function') {
          chip.addEventListener('click', () => openConcept(termKey));
        } else {
          chip.disabled = true;
          chip.classList.add('forum-concept-chip--static');
        }
        conceptList.appendChild(chip);
      });
      conceptWrap.appendChild(conceptList);
      root.appendChild(conceptWrap);
    }

    const discussion = document.createElement('div');
    discussion.className = 'forum-discussion';
    const discussionLabel = document.createElement('p');
    discussionLabel.className = 'forum-section-label';
    discussionLabel.textContent = labels.forumDiscussionLabel || labels.forumCommentsLabel || 'Discussion';
    discussion.appendChild(discussionLabel);
    renderForumThread(post, discussion);
    root.appendChild(discussion);

    syncForumAvatarPickerPreview();
    syncForumAvatarPickerLabels();
    syncForumViewVisibility();
  }

  function renderFeed() {
    syncForumViewVisibility();
    if (state.forumView === 'detail' && state.forumPostId) {
      renderForumDetail();
      return;
    }
    state.forumView = 'list';
    state.forumPostId = null;
    renderForumList();
  }

  function getForumComposeFieldValue(field) {
    const el = document.getElementById(field.inputId);
    return el ? String(el.value || '').trim() : '';
  }

  function setForumComposeFieldError(field, message) {
    const input = document.getElementById(field.inputId);
    const err = document.getElementById(field.errorId);
    if (input) {
      input.classList.toggle('is-invalid', Boolean(message));
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }
    if (err) {
      err.hidden = !message;
      err.textContent = message || '';
    }
  }

  function clearForumComposeErrors() {
    FORUM_COMPOSE_FIELDS.forEach((field) => setForumComposeFieldError(field, ''));
  }

  function updateForumComposeCounter(field) {
    const counter = document.getElementById(field.counterId);
    if (!counter) return;
    const labels = ui();
    const current = countComposeWords(getForumComposeFieldValue(field));
    const template = labels.forumComposeWordCount || '{{current}} / {{max}}';
    counter.textContent = fillTemplate(template, { current, max: field.max });
    counter.classList.toggle('is-over-limit', current > field.max);
  }

  function updateForumComposeCounters() {
    FORUM_COMPOSE_FIELDS.forEach(updateForumComposeCounter);
  }

  function validateForumComposeForm() {
    const labels = ui();
    let firstInvalid = null;
    let valid = true;
    FORUM_COMPOSE_FIELDS.forEach((field) => {
      const value = getForumComposeFieldValue(field);
      const count = countComposeWords(value);
      let message = '';
      if (!value) {
        message = labels.forumComposeRequired || 'This field is required.';
      } else if (count > field.max) {
        message = fillTemplate(labels.forumComposeOverLimit || 'Keep within {{max}} words.', {
          max: field.max,
        });
      }
      setForumComposeFieldError(field, message);
      if (message) {
        valid = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });
    if (firstInvalid) {
      const input = document.getElementById(firstInvalid.inputId);
      input?.focus();
    }
    return valid;
  }

  function resetForumComposeForm() {
    FORUM_COMPOSE_FIELDS.forEach((field) => {
      const input = document.getElementById(field.inputId);
      if (input) input.value = '';
    });
    clearForumComposeErrors();
    updateForumComposeCounters();
  }

  function syncForumComposeLabels() {
    const labels = ui();
    const title = document.getElementById('forum-compose-title');
    if (title) title.textContent = labels.forumComposeTitle || labels.forumCompose || 'Post a dilemma';
    const closeBtn = document.getElementById('btn-close-forum-compose');
    if (closeBtn) closeBtn.setAttribute('aria-label', labels.forumComposeCloseAria || 'Close');
    const topicLabel = document.getElementById('forum-compose-topic-label');
    if (topicLabel) topicLabel.textContent = labels.forumComposeTopicLabel || 'Topic';
    const descLabel = document.getElementById('forum-compose-description-label');
    if (descLabel) descLabel.textContent = labels.forumComposeDescriptionLabel || 'Description';
    const optALabel = document.getElementById('forum-compose-option-a-label');
    if (optALabel) optALabel.textContent = labels.forumComposeOptionALabel || 'Vote A';
    const optBLabel = document.getElementById('forum-compose-option-b-label');
    if (optBLabel) optBLabel.textContent = labels.forumComposeOptionBLabel || 'Vote B';
    const cancelBtn = document.getElementById('btn-forum-compose-cancel');
    if (cancelBtn) cancelBtn.textContent = labels.forumComposeCancel || 'Cancel';
    const submitBtn = document.getElementById('btn-forum-compose-submit');
    if (submitBtn) submitBtn.textContent = labels.forumComposeSubmit || labels.forumCompose || 'Post';
    updateForumComposeCounters();
  }

  function isForumComposeOpen() {
    const overlay = document.getElementById('forum-compose-overlay');
    return !!(overlay && !overlay.hidden);
  }

  function openForumCompose() {
    const overlay = document.getElementById('forum-compose-overlay');
    if (!overlay) return;
    syncForumComposeLabels();
    resetForumComposeForm();
    overlay.hidden = false;
    overlay.style.display = 'flex';
    document.getElementById('forum-compose-topic')?.focus();
  }

  function closeForumCompose() {
    const overlay = document.getElementById('forum-compose-overlay');
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    overlay.style.display = 'none';
    clearForumComposeErrors();
  }

  function submitForumComposePost() {
    if (!validateForumComposeForm()) return;
    const values = {};
    FORUM_COMPOSE_FIELDS.forEach((field) => {
      values[field.postKey] = getForumComposeFieldValue(field);
    });
    const post = {
      id: createForumUserPostId(),
      title: values.title,
      body: values.body,
      optionA: values.optionA,
      optionB: values.optionB,
      votes: { a: 0, b: 0 },
      concepts: [],
      philosophers: [],
      comments: [],
      postedAt: new Date().toISOString(),
      reactions: { likes: 0, dislikes: 0 },
      isUserPost: true,
    };
    if (!Array.isArray(state.forumUserPosts)) state.forumUserPosts = [];
    state.forumUserPosts.unshift(post);
    if (typeof saveForumUserPosts === 'function') saveForumUserPosts();
    closeForumCompose();
    const labels = ui();
    if (typeof openFeedbackFlash === 'function') {
      openFeedbackFlash(labels.forumComposePosted || 'Your dilemma is now in the forum.', 'success');
    }
    if (state.mainTab !== 'forum' && typeof setMainTab === 'function') {
      setMainTab('forum');
    }
    state.forumView = 'list';
    state.forumPostId = null;
    renderFeed();
    openForumPost(post.id);
  }

  function initForumComposeModal() {
    syncForumComposeLabels();
    const form = document.getElementById('forum-compose-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForumComposePost();
    });
    document.getElementById('btn-close-forum-compose')?.addEventListener('click', closeForumCompose);
    document.getElementById('btn-forum-compose-cancel')?.addEventListener('click', closeForumCompose);
    const overlay = document.getElementById('forum-compose-overlay');
    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) closeForumCompose();
    });
    FORUM_COMPOSE_FIELDS.forEach((field) => {
      const input = document.getElementById(field.inputId);
      input?.addEventListener('input', () => {
        setForumComposeFieldError(field, '');
        updateForumComposeCounter(field);
      });
    });
  }

  let forumAvatarPickerTab = 'w2';

  function syncForumAvatarPickerPreview() {
    const cat = avatarCatalog();
    if (!cat) return;
    document.querySelectorAll('.forum-avatar-picker-preview').forEach((slot) => {
      slot.replaceChildren();
      const mini = createForumAvatar({ name: ui().forumYouLabel || 'You', useUserAvatar: true });
      mini.classList.add('forum-avatar-picker-preview__avatar');
      slot.appendChild(mini);
    });
  }

  function syncForumAvatarPickerLabels() {
    const labels = ui();
    const title = document.getElementById('forum-avatar-title');
    if (title) title.textContent = labels.forumAvatarTitle || 'Choose your avatar';
    document.querySelectorAll('.forum-avatar-picker-btn').forEach((btn) => {
      btn.setAttribute('aria-label', labels.forumAvatarChoose || 'Choose avatar');
    });
    const closeBtn = document.getElementById('btn-close-forum-avatar');
    if (closeBtn) {
      closeBtn.setAttribute('aria-label', labels.forumAvatarClose || labels.modalClose || 'Close');
    }
  }

  function renderForumAvatarPickerGrid() {
    const cat = avatarCatalog();
    const tabsEl = document.getElementById('forum-avatar-tabs');
    const gridEl = document.getElementById('forum-avatar-grid');
    if (!cat || !tabsEl || !gridEl) return;

    const labels = ui();
    const lang = typeof state !== 'undefined' && state.lang ? state.lang : 'en';
    const selected = getForumUserAvatarId();

    tabsEl.replaceChildren();
    cat.TABS.forEach((tab) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'forum-avatar-tab';
      btn.classList.toggle('is-active', tab.id === forumAvatarPickerTab);
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', tab.id === forumAvatarPickerTab ? 'true' : 'false');
      btn.textContent = cat.getTabLabel(tab.id, lang);
      btn.addEventListener('click', () => {
        forumAvatarPickerTab = tab.id;
        renderForumAvatarPickerGrid();
      });
      tabsEl.appendChild(btn);
    });

    gridEl.replaceChildren();
    const activeTab = cat.TABS.find((t) => t.id === forumAvatarPickerTab) || cat.TABS[0];
    activeTab.emoji.forEach((emoji, index) => {
      const id = `${activeTab.id}:${index}`;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'forum-avatar-option';
      btn.classList.toggle('is-selected', id === selected);
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', id === selected ? 'true' : 'false');
      btn.setAttribute(
        'aria-label',
        cat.getAriaLabel(id, lang) || labels.forumAvatarChoose || 'Avatar'
      );
      const preview = createForumAvatar({ name: '', avatarId: id });
      preview.classList.add('forum-avatar-option__preview');
      btn.appendChild(preview);
      btn.addEventListener('click', () => {
        setForumUserAvatarId(id);
        closeForumAvatarPicker();
      });
      gridEl.appendChild(btn);
    });
  }

  function openForumAvatarPicker() {
    const overlay = document.getElementById('forum-avatar-overlay');
    if (!overlay) return;
    const cat = avatarCatalog();
    if (!cat) return;
    const entry = cat.getEntry(getForumUserAvatarId());
    forumAvatarPickerTab = entry.tabId || 'w2';
    syncForumAvatarPickerLabels();
    renderForumAvatarPickerGrid();
    overlay.hidden = false;
    overlay.style.display = 'flex';
    overlay.querySelector('.forum-avatar-option.is-selected, .forum-avatar-tab.is-active')?.focus();
  }

  function closeForumAvatarPicker() {
    const overlay = document.getElementById('forum-avatar-overlay');
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    overlay.style.display = 'none';
  }

  function initForumAvatarPicker() {
    syncForumAvatarPickerPreview();
    syncForumAvatarPickerLabels();
    document.addEventListener('click', (e) => {
      if (e.target.closest('.forum-avatar-picker-btn')) {
        e.preventDefault();
        openForumAvatarPicker();
      }
    });
    document.getElementById('btn-close-forum-avatar')?.addEventListener('click', closeForumAvatarPicker);
    const overlay = document.getElementById('forum-avatar-overlay');
    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) closeForumAvatarPicker();
    });
  }

  function syncForumHeroLabels() {
    const labels = ui();
    const forumTitle = document.getElementById('forum-title');
    if (forumTitle) forumTitle.textContent = labels.forumTitle || 'Forum';
    const searchBtn = document.getElementById('btn-forum-search');
    if (searchBtn) {
      searchBtn.setAttribute('aria-label', labels.forumSearch || 'Search');
    }
    const composeBtn = document.getElementById('btn-forum-compose');
    if (composeBtn) {
      composeBtn.setAttribute('aria-label', labels.forumCompose || 'Post');
    }
    const refreshBtn = document.getElementById('btn-forum-refresh');
    if (refreshBtn) {
      refreshBtn.setAttribute('aria-label', labels.forumRefreshAria || 'Refresh');
    }
    const heroActions = document.querySelector('.forum-hero-actions');
    if (heroActions) {
      heroActions.setAttribute('aria-label', labels.forumActionsAria || 'Forum actions');
    }
    const backBtn = document.getElementById('btn-forum-back');
    const backLabel = labels.forumBack || 'Back to topics';
    if (backBtn) {
      backBtn.setAttribute('aria-label', backLabel);
      backBtn.setAttribute('title', backLabel);
    }
    const sortLatest = document.getElementById('forum-sort-latest');
    if (sortLatest) sortLatest.textContent = labels.forumSortLatest || 'Recent';
    const sortPopular = document.getElementById('forum-sort-popular');
    if (sortPopular) sortPopular.textContent = labels.forumSortPopular || 'Popular';
    const sortSplit = document.getElementById('forum-sort-split');
    if (sortSplit) sortSplit.textContent = labels.forumSortSplit || 'Controversial';
    const toolbar = document.getElementById('forum-list-toolbar');
    if (toolbar) toolbar.setAttribute('aria-label', labels.forumSortAria || 'Sort dilemmas');
    const searchLabel = document.getElementById('forum-search-label');
    if (searchLabel) searchLabel.textContent = labels.forumSearchAria || 'Search dilemmas';
    const searchInput = document.getElementById('forum-search-input');
    if (searchInput) {
      searchInput.placeholder = labels.forumSearchPlaceholder || 'Search dilemmas…';
      searchInput.setAttribute('aria-label', labels.forumSearchAria || 'Search dilemmas');
    }
    const refreshLabel = document.getElementById('label-forum-refresh');
    if (refreshLabel) refreshLabel.innerHTML = forumRefreshIconHtml(18);
    const searchIcon = document.getElementById('label-forum-search');
    if (searchIcon) searchIcon.innerHTML = iconHtml('search', 18);
    const composeIcon = document.getElementById('label-forum-compose');
    if (composeIcon) composeIcon.innerHTML = iconHtml('compose', 18);
  }

  function onLanguageChange() {
    syncForumHeroLabels();
    syncForumAvatarPickerLabels();
    syncForumAvatarPickerPreview();
    if (isForumComposeOpen()) syncForumComposeLabels();
    if (state.mainTab === 'forum') {
      renderFeed();
      if (state.forumView === 'detail') renderForumDetail();
    }
  }

  function init() {
    try {
      syncForumHeroLabels();
      syncForumAvatarPickerPreview();
    } catch (err) {
      console.error('ForumPanel: syncForumHeroLabels failed', err);
    }
    if (!forumInitDone) {
      forumInitDone = true;
      initForumComposeModal();
      initForumAvatarPicker();
      document.getElementById('btn-forum-refresh')?.addEventListener('click', () => refreshForumFeed());
    document.getElementById('btn-forum-search')?.addEventListener('click', toggleForumSearchPanel);
    document.getElementById('forum-search-input')?.addEventListener('input', (e) => {
      state.forumSearchQuery = e.target.value || '';
      renderForumList();
    });
    document.querySelectorAll('.forum-sort-btn[data-forum-sort]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sort = btn.getAttribute('data-forum-sort');
        if (!sort) return;
        state.forumSort = sort;
        syncForumSortToolbar();
        renderForumList();
      });
    });
    document.getElementById('btn-forum-back')?.addEventListener('click', (e) => {
      e.preventDefault();
      closeForumDetail();
    });
    }
  }

  window.ForumPanel = {
    init,
    renderFeed,
    onLanguageChange,
    openPost: openForumPost,
    closeDetail: closeForumDetail,
    openCompose: openForumCompose,
    closeCompose: closeForumCompose,
  };
})();

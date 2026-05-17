/**
 * Monochrome line icons (currentColor). Used across nav, feedback, and forum UI.
 */
(function uiIconsModule(global) {
  'use strict';

  const STROKE = 1.75;
  const THINKER_ICON_SRC = 'images/chat-philosopher-icons/thinker-reference.png';

  function svg(size, viewBox, inner, className) {
    const cls = className ? `dd-icon ${className}` : 'dd-icon';
    return (
      `<svg class="${cls}" width="${size}" height="${size}" viewBox="${viewBox}" fill="none" ` +
      `xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`
    );
  }

  function rasterIcon(size, src, className) {
    const cls = className ? `dd-icon dd-icon--raster ${className}` : 'dd-icon dd-icon--raster';
    const n = Number(size) > 0 ? Number(size) : 16;
    return (
      `<img class="${cls}" src="${src}" width="${n}" height="${n}" alt="" decoding="async" ` +
      `aria-hidden="true"/>`
    );
  }

  const PATHS = {
    smile: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="${STROKE}"/>` +
          `<circle cx="9" cy="10" r="1.2" fill="currentColor"/>` +
          `<circle cx="15" cy="10" r="1.2" fill="currentColor"/>` +
          `<path d="M8 14.25c1.75 2.25 5.25 2.25 8 0" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>`,
        cls
      ),
    /** Chat tab — compact bubble aligned with other tab icons */
    message: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M6 5.25h12a1.5 1.5 0 0 1 1.5 1.5V11.25a1.5 1.5 0 0 1-1.5 1.5H11.5L3.75 18.25l2.75-5.5H6A1.5 1.5 0 0 0 4.5 11.25V6.75A1.5 1.5 0 0 1 6 5.25z" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>`,
        cls
      ),
    /** Dialogue — attached Thinker artwork (PNG). */
    philosopherChat: (s, cls) => rasterIcon(s, THINKER_ICON_SRC, cls),
    /** Roman temple — Dilemma Forum tab & header (images/forum-icons/forum-temple.svg) */
    people: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M5 8.75 12 4 19 8.75z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>` +
          `<path d="M7 16.75 6.3 10.35 9.2 10.35 8.35 16.75z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>` +
          `<rect x="6.1" y="8.85" width="3.3" height="1.35" stroke="currentColor" stroke-width="${STROKE}"/>` +
          `<path d="M11 16.75 10.2 10.35 13.8 10.35 13 16.75z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>` +
          `<rect x="10" y="8.85" width="4" height="1.35" stroke="currentColor" stroke-width="${STROKE}"/>` +
          `<path d="M15.65 16.75 14.8 10.35 17.7 10.35 16.85 16.75z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>` +
          `<rect x="14.6" y="8.85" width="3.3" height="1.35" stroke="currentColor" stroke-width="${STROKE}"/>` +
          `<path d="M4 16.75h16v1.5H4z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>` +
          `<path d="M3 18.25h18v2.75H3z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>`,
        cls
      ),
    forum: (s, cls) => PATHS.people(s, cls),
    search: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<circle cx="11" cy="11" r="6.25" stroke="currentColor" stroke-width="${STROKE}"/>` +
          `<path d="M16.25 16.25L20 20" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>`,
        cls
      ),
    /** Forum “Post” — pen only (no document) */
    compose: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M17.5 5.5l2.5 2.5L10 18H7v-3l10-10z" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>` +
          `<path d="M5.5 19.5 7.5 17.5" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>`,
        cls
      ),
    refresh: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M20 12a8 8 0 1 1-2.35-5.65" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>` +
          `<path d="M20 5v4h-4" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>`,
        cls
      ),
    thumbUp: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M7.5 11.5V19h-2A1.5 1.5 0 0 1 4 17.5v-5A1.5 1.5 0 0 1 5.5 11h2z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>` +
          `<path d="M7.5 11.5h2.2l2.1-5.2c.35-.85 1.15-1.3 2-1.15.7.12 1.2.75 1.2 1.5V11h3.35c1 0 1.75.85 1.65 1.85l-.55 5.2c-.08.75-.7 1.3-1.45 1.3H9.5" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>`,
        cls
      ),
    thumbDown: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M7.5 12.5V5h-2A1.5 1.5 0 0 0 4 6.5v5A1.5 1.5 0 0 0 5.5 12.5h2z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>` +
          `<path d="M7.5 12.5h2.2l2.1 5.2c.35.85 1.15 1.3 2 1.15.7-.12 1.2-.75 1.2-1.5V13h3.35c1 0 1.75-.85 1.65-1.85l-.55-5.2c-.08-.75-.7-1.3-1.45-1.3H9.5" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>`,
        cls
      ),
    /** Forum list — ballot box (dilemma poll vote count) */
    voteBox: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<rect x="6" y="10.25" width="12" height="9.5" rx="1.5" stroke="currentColor" stroke-width="${STROKE}"/>` +
          `<path d="M8.25 10.25V7.5a1.25 1.25 0 0 1 1.25-1.25h5.5A1.25 1.25 0 0 1 16.25 7.5v2.75" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>` +
          `<path d="M9 7.25h6" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>` +
          `<path d="M12 5.5v5.25" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>`,
        cls
      ),
    share: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M12 5v10" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>` +
          `<path d="M8.5 8.5L12 5l3.5 3.5" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>` +
          `<path d="M6 14.5h12a2 2 0 0 1 2 2V19H4v-2.5a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="${STROKE}" stroke-linejoin="round"/>`,
        cls
      ),
    reply: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M9 8.5H5.5A2.5 2.5 0 0 0 3 11v6.5h6" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>` +
          `<path d="M7 12.5L3 8.5l4-4" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>`,
        cls
      ),
    /** Outline speech bubble — rounded rect, tail at bottom-left (forum comment / reply) */
    comment: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M5.25 17.25V6.75A1.5 1.5 0 0 1 6.75 5.25h10.5A1.5 1.5 0 0 1 18.75 6.75v5.25A1.5 1.5 0 0 1 17.25 13.5H9L5.25 17.25z" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>`,
        cls
      ),
    /** Forum “post comment” variants — same bubble as comment */
    commentLines: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M5.25 17.25V6.75A1.5 1.5 0 0 1 6.75 5.25h10.5A1.5 1.5 0 0 1 18.75 6.75v5.25A1.5 1.5 0 0 1 17.25 13.5H9L5.25 17.25z" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>` +
          `<path d="M8.25 8.75h7.5M8.25 10.75h5.25" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>`,
        cls
      ),
    commentPlus: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M5.25 17.25V6.75A1.5 1.5 0 0 1 6.75 5.25h10.5A1.5 1.5 0 0 1 18.75 6.75v5.25A1.5 1.5 0 0 1 17.25 13.5H9L5.25 17.25z" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>` +
          `<path d="M12 8v3.5M10.25 9.75H13.75" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round"/>`,
        cls
      ),
    commentPen: (s, cls) =>
      svg(
        s,
        '0 0 24 24',
        `<path d="M5.25 17.25V6.75A1.5 1.5 0 0 1 6.75 5.25h10.5A1.5 1.5 0 0 1 18.75 6.75v5.25A1.5 1.5 0 0 1 17.25 13.5H9L5.25 17.25z" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>` +
          `<path d="M14.25 7.5l2.25 2.25-4.5 4.5H9.75v-2.25l4.5-4.5z" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>`,
        cls
      ),
    /** @deprecated alias — same as philosopherChat */
    chatPhilosopher: (s, cls) => PATHS.philosopherChat(s, cls),
  };

  function html(name, size, className) {
    const fn = PATHS[name];
    if (!fn) return '';
    const n = Number(size) > 0 ? Number(size) : 16;
    return fn(n, className || '');
  }

  function mount(el, name, size, className) {
    if (!el) return;
    el.innerHTML = html(name, size, className);
  }

  global.DD_ICONS = Object.freeze({
    html,
    mount,
    names: Object.freeze(Object.keys(PATHS)),
  });
})(typeof window !== 'undefined' ? window : global);

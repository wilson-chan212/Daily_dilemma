/**
 * Dilemma Forum — list + detail views (uses globals from app.js at runtime).
 */
(function forumPanelModule() {
  'use strict';

  function iconHtml(name, size) {
    if (typeof DD_ICONS !== 'undefined' && DD_ICONS.html) {
      const html = DD_ICONS.html(name, size);
      if (html) return html;
      if (name === 'philosopherRole') return DD_ICONS.html('chatPhilosopher', size);
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
    setForumComposerAvatarId(btn, pickRandomForumAvatarId());
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

  let forumAvatarPickerTarget = null;

  function pickRandomForumAvatarId() {
    const cat = avatarCatalog();
    if (!cat) return 'w2:0';
    if (typeof cat.pickRandomId === 'function') return cat.pickRandomId();
    return cat.DEFAULT_AVATAR_ID || 'w2:0';
  }

  function getForumComposerAvatarId(btn) {
    const cat = avatarCatalog();
    const raw = btn?.dataset?.forumDraftAvatarId;
    if (cat) return cat.normalizeId(raw || pickRandomForumAvatarId());
    return raw || 'w2:0';
  }

  function setForumComposerAvatarId(btn, id) {
    if (!btn) return;
    const cat = avatarCatalog();
    const next = cat ? cat.normalizeId(id) : id;
    btn.dataset.forumDraftAvatarId = next;
    syncForumComposerAvatarPreview(btn);
  }

  function findForumComposerAvatarBtn(fromEl) {
    const footer = fromEl?.closest?.('.forum-composer-footer');
    if (footer) return footer.querySelector('.forum-avatar-picker-btn');
    const formWrap = fromEl?.closest?.('.forum-post-comment-form-wrap, .forum-comment-reply-form');
    if (formWrap) return formWrap.querySelector('.forum-avatar-picker-btn');
    return document.getElementById('btn-forum-compose-avatar');
  }

  function assignRandomForumComposeAvatar() {
    const btn = document.getElementById('btn-forum-compose-avatar');
    if (btn) setForumComposerAvatarId(btn, pickRandomForumAvatarId());
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
      avatarId: isUserForumPost(post) ? post.avatarId : undefined,
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
    Laozi: 'Laozi',
    'Lao Tzu': 'Laozi',
    老子: 'Laozi',
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

  let forumModerationMenuOpen = null;
  let forumReportContext = null;
  let forumHideContext = null;
  let forumDeleteContext = null;

  function mod() {
    return typeof ForumModeration !== 'undefined' ? ForumModeration : null;
  }

  function getSafetyFlagLabel(flagId, labels) {
    const map = {
      self_harm: labels.forumComposeSafetyFlagSelfHarm,
      abuse: labels.forumComposeSafetyFlagAbuse,
      crisis: labels.forumComposeSafetyFlagCrisis,
      private_data: labels.forumComposeSafetyFlagPrivate,
      harassment: labels.forumComposeSafetyFlagHarassment,
      professional_advice: labels.forumComposeSafetyFlagProfessional,
    };
    return map[flagId] || flagId;
  }

  function getForumComposeValues() {
    const values = {};
    FORUM_COMPOSE_FIELDS.forEach((field) => {
      values[field.postKey] = getForumComposeFieldValue(field);
    });
    return values;
  }

  function scanComposeSafety() {
    const m = mod();
    if (!m) return { flags: [], severity: 'none' };
    return m.scanForumContentSafety(m.getComposeSafetyText(getForumComposeValues()));
  }

  function isPostHidden(postId) {
    const m = mod();
    return m ? m.isTargetHidden(m.postTargetKey(postId)) : false;
  }

  function isCommentHidden(postId, kind, index) {
    const m = mod();
    return m ? m.isTargetHidden(m.commentTargetKey(postId, kind, index)) : false;
  }

  function filterHiddenForumPosts(posts) {
    const m = mod();
    if (!m) return posts;
    return posts.filter((p) => !m.isTargetHidden(m.postTargetKey(p.id)));
  }

  function syncForumComposeGuidelines() {
    const labels = ui();
    const title = document.getElementById('forum-compose-guidelines-title');
    if (title) title.textContent = labels.forumComposeGuidelinesTitle || 'Community guidelines';
    const intro = document.getElementById('forum-compose-guidelines-intro');
    if (intro) {
      intro.textContent =
        labels.forumComposeGuidelinesIntro ||
        'Before you post, keep the forum thoughtful and safe for everyone.';
    }
    const list = document.getElementById('forum-compose-guidelines-list');
    if (list) {
      list.replaceChildren();
      [
        labels.forumComposeGuidelineNoNames,
        labels.forumComposeGuidelineNoHarassment,
        labels.forumComposeGuidelineNoEmergency,
      ]
        .filter(Boolean)
        .forEach((text) => {
          const li = document.createElement('li');
          li.textContent = text;
          list.appendChild(li);
        });
    }
    const acceptLabel = document.getElementById('forum-compose-guidelines-accept-label');
    if (acceptLabel) {
      acceptLabel.textContent =
        labels.forumComposeGuidelinesAccept || 'I understand and will follow these guidelines.';
    }
    const accept = document.getElementById('forum-compose-guidelines-accept');
    if (accept && mod()?.hasAcceptedGuidelines()) accept.checked = true;
  }

  function setForumComposeGuidelinesError(message) {
    const err = document.getElementById('forum-compose-guidelines-error');
    const accept = document.getElementById('forum-compose-guidelines-accept');
    if (err) {
      err.hidden = !message;
      err.textContent = message || '';
    }
    if (accept) accept.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function updateForumComposeSafety() {
    const labels = ui();
    const panel = document.getElementById('forum-compose-safety');
    const titleEl = document.getElementById('forum-compose-safety-title');
    const flagsEl = document.getElementById('forum-compose-safety-flags');
    const messageEl = document.getElementById('forum-compose-safety-message');
    const ackWrap = document.getElementById('forum-compose-safety-ack-wrap');
    const ack = document.getElementById('forum-compose-safety-ack');
    const ackLabel = document.getElementById('forum-compose-safety-ack-label');
    const submitBtn = document.getElementById('btn-forum-compose-submit');
    if (!panel) return;

    const result = scanComposeSafety();
    if (!result.flags.length) {
      panel.hidden = true;
      panel.classList.remove('is-blocked');
      if (ack) ack.checked = false;
      if (ackWrap) ackWrap.hidden = true;
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    panel.hidden = false;
    panel.classList.toggle('is-blocked', result.severity === 'block');
    if (titleEl) titleEl.textContent = labels.forumComposeSafetyTitle || 'Safety check';
    if (flagsEl) {
      flagsEl.replaceChildren();
      result.flags.forEach((flag) => {
        const li = document.createElement('li');
        li.textContent = getSafetyFlagLabel(flag.id, labels);
        flagsEl.appendChild(li);
      });
    }
    if (messageEl) {
      messageEl.textContent =
        result.severity === 'block'
          ? labels.forumComposeSafetyBlock ||
            'This text may involve self-harm, abuse, or an emergency. Edit your post before publishing.'
          : labels.forumComposeSafetyWarn ||
            'This may include private details or requests for professional advice.';
    }
    if (ackLabel) {
      ackLabel.textContent =
        labels.forumComposeSafetyAcknowledge || 'Post anyway (not professional advice)';
    }
    if (ackWrap) ackWrap.hidden = result.severity === 'block';
    if (ack && result.severity === 'block') ack.checked = false;
    if (submitBtn) {
      if (result.severity === 'block') submitBtn.disabled = true;
      else if (result.severity === 'warn') {
        submitBtn.disabled = !document.getElementById('forum-compose-safety-ack')?.checked;
      } else submitBtn.disabled = false;
    }
  }

  function validateForumComposeModeration() {
    const labels = ui();
    const accept = document.getElementById('forum-compose-guidelines-accept');
    const accepted = accept?.checked;
    if (!accepted) {
      setForumComposeGuidelinesError(
        labels.forumComposeGuidelinesRequired || 'Please confirm the community guidelines before posting.'
      );
      accept?.focus();
      return false;
    }
    setForumComposeGuidelinesError('');
    if (mod()?.setAcceptedGuidelines) mod().setAcceptedGuidelines(true);

    const result = scanComposeSafety();
    if (result.severity === 'block') {
      updateForumComposeSafety();
      document.getElementById('forum-compose-safety')?.scrollIntoView({ block: 'nearest' });
      return false;
    }
    if (result.severity === 'warn') {
      const ack = document.getElementById('forum-compose-safety-ack');
      if (!ack?.checked) {
        updateForumComposeSafety();
        document.getElementById('forum-compose-safety')?.scrollIntoView({ block: 'nearest' });
        ack?.focus();
        return false;
      }
    }
    return true;
  }

  function closeForumModerationMenus() {
    forumModerationMenuOpen = null;
    document.querySelectorAll('.forum-detail-moderation-panel').forEach((el) => {
      el.hidden = true;
    });
  }

  function closeForumReportModal() {
    forumReportContext = null;
    const overlay = document.getElementById('forum-report-overlay');
    if (!overlay) return;
    overlay.hidden = true;
    overlay.style.display = 'none';
  }

  function syncForumReportOtherField() {
    const selected = document.querySelector('input[name="forum-report-reason"]:checked');
    const otherInput = document.getElementById('forum-report-other-detail');
    const isOther = selected?.value === 'other';
    if (otherInput) {
      otherInput.disabled = !isOther;
      otherInput.setAttribute('aria-hidden', isOther ? 'false' : 'true');
    }
  }

  function openForumReportModal(context) {
    const overlay = document.getElementById('forum-report-overlay');
    if (!overlay || !context?.targetKey) return;
    forumReportContext = context;
    const labels = ui();
    const title = document.getElementById('forum-report-title');
    if (title) title.textContent = labels.forumReportTitle || 'Report content';
    const reasons = document.getElementById('forum-report-reasons');
    if (reasons) {
      reasons.replaceChildren();
      const options = [
        ['harassment', labels.forumReportReasonHarassment],
        ['private', labels.forumReportReasonPrivate],
        ['self_harm', labels.forumReportReasonSelfHarm],
        ['spam', labels.forumReportReasonSpam],
        ['other', labels.forumReportReasonOther],
      ];
      options.forEach(([value, text], idx) => {
        const id = `forum-report-reason-${value}`;
        const label = document.createElement('label');
        label.className =
          value === 'other' ? 'forum-report-reason forum-report-reason--other' : 'forum-report-reason';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'forum-report-reason';
        input.id = id;
        input.value = value;
        input.checked = idx === 0;
        input.addEventListener('change', () => {
          syncForumReportOtherField();
          if (value === 'other' && input.checked) {
            document.getElementById('forum-report-other-detail')?.focus();
          }
        });
        const textSpan = document.createElement('span');
        textSpan.className = 'forum-report-reason-label';
        textSpan.textContent = text || value;
        label.appendChild(input);
        label.appendChild(textSpan);
        if (value === 'other') {
          const otherInput = document.createElement('input');
          otherInput.type = 'text';
          otherInput.id = 'forum-report-other-detail';
          otherInput.className = 'forum-report-other-input';
          otherInput.maxLength = 500;
          otherInput.autocomplete = 'off';
          otherInput.placeholder = labels.forumReportOtherPlaceholder || 'Describe the issue…';
          otherInput.disabled = !input.checked;
          otherInput.setAttribute('aria-label', labels.forumReportOtherPlaceholder || 'Describe the issue');
          label.appendChild(otherInput);
        }
        reasons.appendChild(label);
      });
    }
    syncForumReportOtherField();
    const submitBtn = document.getElementById('btn-forum-report-submit');
    if (submitBtn) {
      submitBtn.textContent = labels.forumReportSubmit || 'Submit report';
      submitBtn.disabled = false;
    }
    const cancelBtn = document.getElementById('btn-forum-report-cancel');
    if (cancelBtn) cancelBtn.textContent = labels.forumReportCancel || 'Cancel';
    overlay.hidden = false;
    overlay.style.display = 'flex';
    reasons?.querySelector('input[type="radio"]')?.focus();
  }

  async function submitForumReport() {
    const m = mod();
    if (!m || !forumReportContext) return;
    const labels = ui();
    const selected = document.querySelector('input[name="forum-report-reason"]:checked');
    const reason = selected ? selected.value : 'other';
    const otherDetail =
      reason === 'other' ? String(document.getElementById('forum-report-other-detail')?.value || '').trim() : '';
    if (reason === 'other' && !otherDetail) {
      if (typeof openFeedbackFlash === 'function') {
        openFeedbackFlash(labels.forumReportOtherRequired || 'Please add a short note for Other.', 'error');
      }
      document.getElementById('forum-report-other-detail')?.focus();
      return;
    }

    const submitBtn = document.getElementById('btn-forum-report-submit');
    if (submitBtn) submitBtn.disabled = true;

    const hideOnReport = forumReportContext.hideOnReport;
    const targetKey = forumReportContext.targetKey;
    const postId = forumReportContext.postId;

    let result;
    try {
      result = await m.submitReport({
        targetKey,
        reason,
        otherDetail: otherDetail || null,
        snippet: forumReportContext.snippet,
        postId,
      });
    } catch {
      result = { ok: false };
    }

    if (submitBtn) submitBtn.disabled = false;

    if (!result?.ok) {
      if (typeof openFeedbackFlash === 'function') {
        openFeedbackFlash(labels.forumReportFailed || 'Could not submit your report. Try again later.', 'error');
      }
      return;
    }

    closeForumReportModal();
    if (hideOnReport) {
      m.hideTarget(targetKey);
      if (postId && m.postTargetKey(postId) === targetKey) {
        closeForumDetail();
        renderForumList();
        if (typeof openFeedbackFlash === 'function') {
          openFeedbackFlash(labels.forumHideThanks || 'Hidden from your feed.', 'success');
        }
        return;
      }
      renderForumDetail();
    }
    if (typeof openFeedbackFlash === 'function') {
      openFeedbackFlash(
        hideOnReport
          ? labels.forumHideThanks || 'Hidden from your feed.'
          : labels.forumReportThanks || 'Thanks — we recorded your report.',
        'success'
      );
    }
  }

  function closeForumHideConfirmModal() {
    forumHideContext = null;
    const overlay = document.getElementById('forum-hide-overlay');
    if (!overlay) return;
    overlay.hidden = true;
    overlay.style.display = 'none';
  }

  function openForumHideConfirmModal(context) {
    const overlay = document.getElementById('forum-hide-overlay');
    if (!overlay || !context?.targetKey) return;
    const m = mod();
    if (!m || m.isTargetHidden(context.targetKey)) return;

    forumHideContext = context;
    closeForumModerationMenus();
    const labels = ui();
    const title = document.getElementById('forum-hide-title');
    if (title) title.textContent = labels.forumHideConfirmTitle || 'Hide this content?';
    const message = document.getElementById('forum-hide-message');
    if (message) {
      message.textContent =
        labels.forumHideConfirmMessage ||
        'This only hides it for you — other people can still see it. Once you hide it, you cannot bring it back.';
    }
    const confirmBtn = document.getElementById('btn-forum-hide-confirm');
    if (confirmBtn) confirmBtn.textContent = labels.forumHideConfirmButton || labels.forumHide || 'Hide';
    const cancelBtn = document.getElementById('btn-forum-hide-cancel');
    if (cancelBtn) cancelBtn.textContent = labels.forumHideConfirmCancel || 'Cancel';
    const closeBtn = document.getElementById('btn-close-forum-hide');
    if (closeBtn) {
      closeBtn.setAttribute('aria-label', labels.forumComposeCloseAria || labels.modalClose || 'Close');
    }
    overlay.hidden = false;
    overlay.style.display = 'flex';
    confirmBtn?.focus();
  }

  function hideForumTarget(targetKey, postId) {
    const m = mod();
    if (!m || !targetKey) return;
    m.hideTarget(targetKey);
    closeForumModerationMenus();
    const labels = ui();
    if (typeof openFeedbackFlash === 'function') {
      openFeedbackFlash(labels.forumHideThanks || 'Hidden from your feed.', 'success');
    }
    if (postId && m.postTargetKey(postId) === targetKey) {
      closeForumDetail();
      renderForumList();
      return;
    }
    renderForumDetail();
  }

  function confirmForumHide() {
    if (!forumHideContext?.targetKey) return;
    const { targetKey, postId } = forumHideContext;
    closeForumHideConfirmModal();
    hideForumTarget(targetKey, postId);
  }

  function closeForumDeleteConfirmModal() {
    forumDeleteContext = null;
    const overlay = document.getElementById('forum-delete-overlay');
    if (!overlay) return;
    overlay.hidden = true;
    overlay.style.display = 'none';
  }

  function openForumDeleteConfirmModal(context) {
    const overlay = document.getElementById('forum-delete-overlay');
    if (!overlay || !context?.postId) return;
    forumDeleteContext = context;
    closeForumModerationMenus();
    const labels = ui();
    const title = document.getElementById('forum-delete-title');
    if (title) title.textContent = labels.forumDeleteConfirmTitle || 'Delete this content?';
    const message = document.getElementById('forum-delete-message');
    if (message) {
      message.textContent =
        context.kind === 'comment'
          ? labels.forumDeleteCommentMessage ||
            'This permanently removes your comment. This cannot be undone.'
          : labels.forumDeletePostMessage ||
            'This permanently removes your dilemma and all related comments and votes. This cannot be undone.';
    }
    const confirmBtn = document.getElementById('btn-forum-delete-confirm');
    if (confirmBtn) {
      confirmBtn.textContent = labels.forumDeleteConfirmButton || labels.forumDelete || 'Delete';
    }
    const cancelBtn = document.getElementById('btn-forum-delete-cancel');
    if (cancelBtn) cancelBtn.textContent = labels.forumDeleteCancel || 'Cancel';
    const closeBtn = document.getElementById('btn-close-forum-delete');
    if (closeBtn) {
      closeBtn.setAttribute('aria-label', labels.forumComposeCloseAria || labels.modalClose || 'Close');
    }
    overlay.hidden = false;
    overlay.style.display = 'flex';
    confirmBtn?.focus();
  }

  async function confirmForumDelete() {
    if (!forumDeleteContext?.postId) return;
    const { kind, postId, commentId } = forumDeleteContext;
    const labels = ui();
    const confirmBtn = document.getElementById('btn-forum-delete-confirm');
    if (confirmBtn) confirmBtn.disabled = true;
    closeForumDeleteConfirmModal();
    try {
      let ok = false;
      if (kind === 'comment' && commentId != null && typeof deleteForumComment === 'function') {
        ok = await deleteForumComment(postId, commentId);
      } else if (typeof deleteForumPost === 'function') {
        ok = await deleteForumPost(postId);
      }
      if (!ok) {
        if (typeof openFeedbackFlash === 'function') {
          openFeedbackFlash(labels.forumDeleteFailed || 'Could not delete. Try again later.', 'error');
        }
        return;
      }
      if (typeof openFeedbackFlash === 'function') {
        openFeedbackFlash(
          kind === 'comment'
            ? labels.forumDeleteCommentThanks || 'Your comment was deleted.'
            : labels.forumDeletePostThanks || 'Your dilemma was deleted.',
          'success',
        );
      }
      if (kind === 'comment') {
        renderForumDetail();
      } else {
        closeForumDetail();
        renderForumList();
      }
    } catch (err) {
      console.error(err);
      if (typeof openFeedbackFlash === 'function') {
        openFeedbackFlash(labels.forumDeleteFailed || 'Could not delete. Try again later.', 'error');
      }
    } finally {
      if (confirmBtn) confirmBtn.disabled = false;
    }
  }

  function createForumModerationMenu(context) {
    const labels = ui();
    const m = mod();
    if (!m) return null;

    const wrap = document.createElement('div');
    wrap.className = 'forum-detail-moderation';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'forum-detail-header-btn';
    toggle.setAttribute('aria-label', labels.forumModerationMenuAria || 'More actions');
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.innerHTML =
      '<span class="forum-action-icon" aria-hidden="true"><svg class="dd-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg></span>';

    const panel = document.createElement('div');
    panel.className = 'forum-detail-moderation-panel';
    panel.hidden = true;

    const isOwner = Boolean(context.isOwner && context.deleteKind);

    if (isOwner) {
      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'forum-detail-moderation-action forum-detail-moderation-action--danger';
      deleteBtn.textContent = labels.forumDelete || 'Delete';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openForumDeleteConfirmModal({
          kind: context.deleteKind,
          postId: context.postId,
          commentId: context.commentId,
        });
      });
      panel.appendChild(deleteBtn);
    }

    if (!isOwner) {
      const reportBtn = document.createElement('button');
      reportBtn.type = 'button';
      reportBtn.className = 'forum-detail-moderation-action';
      reportBtn.textContent = labels.forumReport || 'Report';
      reportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeForumModerationMenus();
        openForumReportModal(context);
      });
      panel.appendChild(reportBtn);
      if (!m.isTargetHidden(context.targetKey)) {
        const hideBtn = document.createElement('button');
        hideBtn.type = 'button';
        hideBtn.className = 'forum-detail-moderation-action forum-detail-moderation-action--danger';
        hideBtn.textContent = labels.forumHide || 'Hide';
        hideBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeForumModerationMenus();
          openForumHideConfirmModal({
            targetKey: context.targetKey,
            postId: context.postId,
          });
        });
        panel.appendChild(hideBtn);
      }
    } else if (context.targetKey) {
      const reportBtn = document.createElement('button');
      reportBtn.type = 'button';
      reportBtn.className = 'forum-detail-moderation-action';
      reportBtn.textContent = labels.forumReport || 'Report';
      reportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeForumModerationMenus();
        openForumReportModal(context);
      });
      panel.appendChild(reportBtn);
    }

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = forumModerationMenuOpen === context.targetKey;
      closeForumModerationMenus();
      if (!open) {
        forumModerationMenuOpen = context.targetKey;
        panel.hidden = false;
      }
    });

    wrap.appendChild(toggle);
    wrap.appendChild(panel);
    return wrap;
  }

  function createForumCommentModeration(postId, item) {
    const m = mod();
    if (!m || !item) return null;
    if (item.kind === 'user') {
      const comment = { deviceId: item.deviceId, id: item.dbId };
      if (typeof isForumCommentOwner !== 'function' || !isForumCommentOwner(comment)) {
        return null;
      }
      return createForumModerationMenu({
        targetKey: m.commentTargetKey(postId, item.kind, item.index),
        snippet: item.text,
        postId,
        isOwner: true,
        deleteKind: 'comment',
        commentId: item.dbId,
      });
    }
    return createForumModerationMenu({
      targetKey: m.commentTargetKey(postId, item.kind, item.index),
      snippet: item.text,
      postId,
      hideOnReport: false,
    });
  }

  function renderForumHiddenNotice(postId) {
    const m = mod();
    if (!m || !isPostHidden(postId)) return null;
    const labels = ui();
    const notice = document.createElement('div');
    notice.className = 'forum-hidden-notice';
    const title = document.createElement('p');
    title.className = 'forum-hidden-notice-title';
    title.textContent = labels.forumHiddenTitle || 'You hid this content';
    const body = document.createElement('p');
    body.className = 'forum-hidden-notice-body';
    body.textContent =
      labels.forumHiddenBody ||
      'It is hidden from your feed only. Others can still see it, and you cannot undo this.';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'share-btn share-btn-secondary';
    btn.textContent = labels.forumBack || 'Back to topics';
    btn.addEventListener('click', () => closeForumDetail());
    notice.appendChild(title);
    notice.appendChild(body);
    notice.appendChild(btn);
    return notice;
  }

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

  function forumSupabaseOn() {
    return typeof supabaseEnabled === 'function' && supabaseEnabled();
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
    const localChoice = state.forumVotes[post.id]?.choice || null;
    if (forumSupabaseOn() && state.forumRemoteVotes[post.id]) {
      const remote = state.forumRemoteVotes[post.id];
      return {
        a: Number(remote.a || 0),
        b: Number(remote.b || 0),
        choice: localChoice,
      };
    }
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
    const localChoice = state.forumReactions[post.id]?.choice || null;
    if (forumSupabaseOn() && state.forumRemotePostReactions[post.id]) {
      const remote = state.forumRemotePostReactions[post.id];
      const likes = Number(remote.likes || 0);
      const dislikes = Number(remote.dislikes || 0);
      return { likes, dislikes, choice: localChoice, net: likes - dislikes };
    }
    const base = post.reactions || { likes: 0, dislikes: 0 };
    const local = state.forumReactions[post.id] || {};
    let likes = Number(base.likes || 0);
    let dislikes = Number(base.dislikes || 0);
    if (local.choice === 'like') likes += 1;
    if (local.choice === 'dislike') dislikes += 1;
    return { likes, dislikes, choice: local.choice || null, net: likes - dislikes };
  }

  function getForumCommentReactions(postId, kind, index, commentDbId) {
    const localKey =
      typeof forumCommentReactionLocalKey === 'function'
        ? forumCommentReactionLocalKey(postId, kind, index, commentDbId)
        : `${postId}|${kind}|${index}`;
    const localChoice = state.forumCommentReactions[localKey]?.choice || null;
    if (forumSupabaseOn()) {
      const targetKey =
        typeof forumCommentTargetKey === 'function'
          ? forumCommentTargetKey(kind, index, commentDbId)
          : `${kind}:${index}`;
      const remote = state.forumRemoteCommentReactions[postId]?.[targetKey];
      if (remote) {
        return {
          likes: Number(remote.likes || 0),
          dislikes: Number(remote.dislikes || 0),
          choice: localChoice,
        };
      }
    }
    const sample =
      window.FORUM_SAMPLE_COMMENT_REACTIONS &&
      window.FORUM_SAMPLE_COMMENT_REACTIONS[postId];
    const bucket = sample && sample[kind === 'philosopher' ? 'philosophers' : 'comments'];
    const base = bucket && bucket[index] ? bucket[index] : { likes: 0, dislikes: 0 };
    const local = state.forumCommentReactions[localKey] || {};
    let likes = Number(base.likes || 0);
    let dislikes = Number(base.dislikes || 0);
    if (local.choice === 'like') likes += 1;
    if (local.choice === 'dislike') dislikes += 1;
    return { likes, dislikes, choice: localChoice };
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
        return fillTemplate(labels.forumTimeMinutes || '{{count}}m', { count: min });
      }
      const hr = Math.floor(min / 60);
      if (hr < 24) {
        return fillTemplate(labels.forumTimeHours || '{{count}}h', { count: hr });
      }
      const day = Math.floor(hr / 24);
      if (day < 7) {
        return fillTemplate(labels.forumTimeDays || '{{count}}d', { count: day });
      }
      const week = Math.floor(day / 7);
      if (week < 5) {
        return fillTemplate(labels.forumTimeWeeks || '{{count}}w', { count: week });
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

  function getForumPortraitSrc(name, philosopherId) {
    if (!name && !philosopherId) return '';
    const id =
      (philosopherId && String(philosopherId).trim()) ||
      resolveForumPhilosopherChip(name) ||
      '';
    if (
      id &&
      typeof AI_PHILOSOPHER_PORTRAIT_KEYS !== 'undefined' &&
      AI_PHILOSOPHER_PORTRAIT_KEYS[id] &&
      typeof getPhilosopherPortraitCandidates === 'function'
    ) {
      const mapped = getPhilosopherPortraitCandidates(AI_PHILOSOPHER_PORTRAIT_KEYS[id]);
      if (mapped.length) return mapped[0];
    }
    if (!name) return '';
    if (typeof getPhilosopherPortraitCandidates === 'function') {
      const mapped = getPhilosopherPortraitCandidates(name);
      if (mapped.length) return mapped[0];
    }
    if (typeof PHILOSOPHER_PORTRAITS === 'undefined') return '';
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
      if (typeof getPhilosopherPortraitCandidates === 'function') {
        const c = getPhilosopherPortraitCandidates(full);
        if (c.length) return c[0];
      }
      return PHILOSOPHER_PORTRAITS[full] || '';
    }
    return '';
  }

  function getForumPhilosopherPortraitUrls(name, philosopherId) {
    const urls = [];
    const seen = new Set();
    function add(url) {
      const u = String(url || '').trim();
      if (u && !seen.has(u)) {
        seen.add(u);
        urls.push(u);
      }
    }
    const id =
      (philosopherId && String(philosopherId).trim()) ||
      resolveForumPhilosopherChip(name) ||
      (typeof resolveForumPhilosopherIdFromName === 'function'
        ? resolveForumPhilosopherIdFromName(name)
        : null);
    if (
      id &&
      typeof AI_PHILOSOPHER_PORTRAIT_KEYS !== 'undefined' &&
      AI_PHILOSOPHER_PORTRAIT_KEYS[id] &&
      typeof getPhilosopherPortraitCandidates === 'function'
    ) {
      getPhilosopherPortraitCandidates(AI_PHILOSOPHER_PORTRAIT_KEYS[id]).forEach(add);
    }
    const resolved = getForumPortraitSrc(name, id);
    if (resolved) add(resolved);
    if (typeof getPhilosopherPortraitCandidates === 'function') {
      getPhilosopherPortraitCandidates(name).forEach(add);
    }
    return urls;
  }

  function createForumAvatar(nameOrOpts) {
    const opts =
      nameOrOpts && typeof nameOrOpts === 'object'
        ? nameOrOpts
        : { name: nameOrOpts };
    const name = opts.name || '';
    const wrap = document.createElement('div');
    wrap.className = 'forum-comment-avatar';
    const urls = getForumPhilosopherPortraitUrls(name, opts.philosopherId);

    function finishForumAvatarWithoutPhoto() {
      const isPhilosopher =
        opts.philosopherId ||
        resolveForumPhilosopherChip(name) ||
        (typeof resolveForumPhilosopherIdFromName === 'function' &&
          resolveForumPhilosopherIdFromName(name));
      const cat = avatarCatalog();
      const avatarId = !isPhilosopher ? resolveForumAvatarId(name, opts) : null;
      if (cat && avatarId) {
        wrap.classList.add('forum-comment-avatar--emoji');
        wrap.textContent = cat.getEmoji(avatarId);
        applyForumAvatarPalette(wrap, avatarId);
        wrap.dataset.avatarId = avatarId;
        wrap.setAttribute('aria-hidden', 'true');
        return;
      }
      wrap.classList.add('forum-comment-avatar--initials');
      const initials = String(name || '?')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0].toUpperCase())
        .join('');
      wrap.textContent = initials || '?';
    }

    if (urls.length && typeof tryPhilosopherPortraitUrls === 'function') {
      tryPhilosopherPortraitUrls(
        urls,
        (src) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = '';
          img.decoding = 'async';
          img.loading = 'lazy';
          img.referrerPolicy = 'no-referrer';
          wrap.appendChild(img);
        },
        finishForumAvatarWithoutPhoto
      );
      return wrap;
    }

    finishForumAvatarWithoutPhoto();
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
      btn.classList.add(`forum-vote-btn--${choice}`);
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

  async function handleForumVote(postId, choice) {
    if (!postId || !['a', 'b'].includes(choice)) return;
    const prev = state.forumVotes[postId]?.choice;
    state.forumVotes[postId] = { choice };
    renderFeed();
    if (forumSupabaseOn() && typeof submitForumVoteToSupabase === 'function') {
      try {
        await submitForumVoteToSupabase(postId, choice);
        renderFeed();
      } catch (err) {
        console.error(err);
        if (prev) state.forumVotes[postId] = { choice: prev };
        else delete state.forumVotes[postId];
        renderFeed();
      }
    }
  }

  async function handleForumPostReaction(postId, reaction) {
    const cur = state.forumReactions[postId] || {};
    const next = cur.choice === reaction ? null : reaction;
    state.forumReactions[postId] = { choice: next };
    renderFeed();
    if (forumSupabaseOn() && typeof submitForumPostReactionToSupabase === 'function') {
      try {
        await submitForumPostReactionToSupabase(postId, next);
        renderFeed();
      } catch (err) {
        console.error(err);
        state.forumReactions[postId] = cur;
        renderFeed();
      }
    }
  }

  async function handleForumCommentReaction(postId, kind, index, reaction, commentDbId) {
    const localKey =
      typeof forumCommentReactionLocalKey === 'function'
        ? forumCommentReactionLocalKey(postId, kind, index, commentDbId)
        : `${postId}|${kind}|${index}`;
    const cur = state.forumCommentReactions[localKey] || {};
    const next = cur.choice === reaction ? null : reaction;
    state.forumCommentReactions[localKey] = { choice: next };
    renderFeed();
    if (forumSupabaseOn() && typeof submitForumCommentReactionToSupabase === 'function') {
      const targetKey =
        typeof forumCommentTargetKey === 'function'
          ? forumCommentTargetKey(kind, index, commentDbId)
          : `${kind}:${index}`;
      try {
        await submitForumCommentReactionToSupabase(postId, targetKey, next);
        renderFeed();
      } catch (err) {
        console.error(err);
        state.forumCommentReactions[localKey] = cur;
        renderFeed();
      }
    }
  }

  async function postForumUserComment(postId, text, replyToCommentId, avatarId) {
    const labels = ui();
    const trimmed = String(text || '').trim();
    if (!trimmed) return null;
    const cat = avatarCatalog();
    const draftAvatarId = cat ? cat.normalizeId(avatarId) : avatarId;
    if (forumSupabaseOn() && typeof submitForumCommentToSupabase === 'function') {
      const row = await submitForumCommentToSupabase(postId, trimmed, replyToCommentId, draftAvatarId);
      return row || null;
    }
    if (!state.forumUserComments[postId]) state.forumUserComments[postId] = [];
    const index = state.forumUserComments[postId].length;
    const entry = {
      author: labels.forumYouLabel || 'You',
      text: trimmed,
      postedAt: new Date().toISOString(),
      avatarId: draftAvatarId,
      deviceId: typeof getDeviceId === 'function' ? getDeviceId() : null,
    };
    state.forumUserComments[postId].push(entry);
    return { ...entry, localKey: `${postId}|user|${index}` };
  }

  async function triggerPhilosopherFollowupAfterUserReply(post, philosopherItem, userText, userCommentMeta) {
    if (!post || !philosopherItem || philosopherItem.kind !== 'philosopher') return;
    const pendingKey = `${post.id}|philosopher|${philosopherItem.index}`;
    state.forumPhilosopherFollowupPending = pendingKey;
    renderForumDetail();
    try {
      if (typeof generateForumPhilosopherFollowup === 'function') {
        await generateForumPhilosopherFollowup(post, philosopherItem, userText, userCommentMeta);
      }
    } catch (err) {
      console.error(err);
    } finally {
      if (state.forumPhilosopherFollowupPending === pendingKey) {
        state.forumPhilosopherFollowupPending = null;
      }
      renderForumDetail();
    }
  }

  function filterForumPosts(posts) {
    let list = filterHiddenForumPosts(posts);
    const q = String(state.forumSearchQuery || '')
      .trim()
      .toLowerCase();
    if (!q) return list;
    return list.filter((p) => {
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
    if (inDetail && isForumComposeOpen()) closeForumCompose();
  }

  function syncForumComposePanelVisibility() {
    const panel = document.getElementById('forum-compose-panel');
    const composeBtn = document.getElementById('btn-forum-compose');
    const open = isForumComposeOpen();
    if (panel) panel.hidden = !open;
    if (composeBtn) composeBtn.classList.toggle('is-active', open);
    if (composeBtn) {
      composeBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
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

  async function refreshForumFeed({ animate = true } = {}) {
    if (animate) {
      const btnId =
        state.forumView === 'detail' ? 'btn-forum-detail-refresh' : 'btn-forum-refresh';
      pulseForumRefreshBtn(document.getElementById(btnId));
    }
    if (forumSupabaseOn() && typeof syncForumFromSupabase === 'function') {
      const postId = state.forumView === 'detail' ? state.forumPostId : null;
      await syncForumFromSupabase({ postId: postId || undefined }).catch(() => {});
    }
    if (state.forumView === 'detail') {
      refreshForumDetail({ animate });
      return;
    }
    renderForumList();
  }

  function refreshForumDetail() {
    if (state.forumView !== 'detail' || !state.forumPostId) return;
    renderForumDetail();
  }

  async function openForumPost(postId) {
    if (!getForumPostById(postId)) return;
    if (forumSupabaseOn() && typeof syncForumFromSupabase === 'function') {
      await syncForumFromSupabase({ postId }).catch(() => {});
    }
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
    if (!name) return null;
    if (FORUM_PHILOSOPHER_CHIP_MAP[name]) return FORUM_PHILOSOPHER_CHIP_MAP[name];
    if (typeof AI_PHILOSOPHER_PORTRAIT_KEYS !== 'undefined') {
      for (const [id, portraitName] of Object.entries(AI_PHILOSOPHER_PORTRAIT_KEYS)) {
        if (portraitName === name) return id;
      }
    }
    const labels = ui();
    const names = labels.aiPhilosopherNames;
    if (names) {
      for (const [id, displayName] of Object.entries(names)) {
        if (displayName === name) return id;
      }
    }
    return null;
  }

  function openForumPhilosopherProfile(philosopherName) {
    const chipId = resolveForumPhilosopherChip(philosopherName);
    if (!chipId || typeof setSelectedPhilosopherId !== 'function') return;
    setSelectedPhilosopherId(chipId);
    if (typeof openPlatoReader === 'function') openPlatoReader();
  }

  function getForumPhilosopherThinkingLabel(name, philosopherId) {
    const labels = ui();
    const id =
      (philosopherId && String(philosopherId).trim()) ||
      resolveForumPhilosopherChip(name) ||
      '';
    if (typeof getAiThinkingMessage === 'function') {
      return getAiThinkingMessage(labels, id || 'plato');
    }
    const tpl = labels.forumPhilosopherThinking || '{{name}} is thinking…';
    return fillTemplate(tpl, { name: name || 'Philosopher' });
  }

  function createForumPhilosopherThinkingBlock(name, philosopherId) {
    const block = document.createElement('div');
    block.className = 'forum-philosopher-thinking';
    block.setAttribute('role', 'status');
    block.setAttribute('aria-live', 'polite');
    const bubble = document.createElement('div');
    bubble.className = 'forum-philosopher-thinking-bubble';
    const text = document.createElement('span');
    text.className = 'forum-philosopher-thinking-text';
    text.textContent = getForumPhilosopherThinkingLabel(name, philosopherId);
    bubble.appendChild(text);
    block.appendChild(bubble);
    return block;
  }

  function getForumEnrichingPhilosopherEntries(post) {
    const ids = Array.isArray(post.enrichingPhilosopherIds)
      ? post.enrichingPhilosopherIds.filter(Boolean)
      : [];
    if (ids.length) {
      return ids.map((philosopherId) => ({
        philosopherId,
        name:
          typeof getPhilosopherForumDisplayName === 'function'
            ? getPhilosopherForumDisplayName(philosopherId)
            : philosopherId,
      }));
    }
    if (Array.isArray(post.philosophers) && post.philosophers.length) {
      return post.philosophers.map((entry) => ({
        philosopherId: entry.philosopherId,
        name: entry.name,
      }));
    }
    const fallbackIds =
      typeof pickForumPhilosopherIds === 'function'
        ? pickForumPhilosopherIds(2)
        : ['plato', 'confucius'];
    return fallbackIds.map((philosopherId) => ({
      philosopherId,
      name:
        typeof getPhilosopherForumDisplayName === 'function'
          ? getPhilosopherForumDisplayName(philosopherId)
          : philosopherId,
    }));
  }

  function renderForumPhilosopherThinkingRow(entry) {
    const row = document.createElement('div');
    row.className = 'forum-comment forum-comment--philosopher-thinking';
    const avatarEl = createForumAvatar({
      name: entry.name,
      philosopherId: entry.philosopherId,
    });
    avatarEl.classList.add('forum-comment-avatar--thinking');
    row.appendChild(avatarEl);

    const body = document.createElement('div');
    body.className = 'forum-comment-body';
    const head = document.createElement('div');
    head.className = 'forum-comment-head';
    const headMeta = document.createElement('div');
    headMeta.className = 'forum-comment-head-meta';
    const authorBlock = document.createElement('div');
    authorBlock.className = 'forum-comment-author-block';
    const authorRow = document.createElement('div');
    authorRow.className = 'forum-comment-author-row';
    const author = document.createElement('strong');
    author.className = 'forum-comment-author';
    author.textContent = entry.name || ui().forumPhilosophersLabel || 'Philosopher';
    authorRow.appendChild(author);
    if (entry.name) {
      authorRow.appendChild(createForumPhilosopherRoleBadge(entry.name));
    }
    authorBlock.appendChild(authorRow);
    headMeta.appendChild(authorBlock);
    head.appendChild(headMeta);
    body.appendChild(head);
    body.appendChild(
      createForumPhilosopherThinkingBlock(entry.name, entry.philosopherId),
    );
    row.appendChild(body);
    return row;
  }

  function renderForumEnrichingPhilosophers(post, container) {
    const thread = document.createElement('div');
    thread.className = 'forum-comment-thread';
    getForumEnrichingPhilosopherEntries(post).forEach((entry) => {
      thread.appendChild(renderForumPhilosopherThinkingRow(entry));
    });
    container.appendChild(thread);
  }

  function createForumPhilosopherRoleBadge(philosopherName) {
    const labels = ui();
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'forum-comment-badge forum-comment-badge--philosopher';
    const ariaTpl =
      labels.philosopherReaderBtnAria || labels.forumPhilosopherRoleBtnAria || 'Open {{name}} profile';
    const titleTpl = labels.philosopherReaderBtnTitle || '{{name}} — profile';
    btn.setAttribute('aria-label', fillTemplate(ariaTpl, { name: philosopherName }));
    btn.setAttribute('title', fillTemplate(titleTpl, { name: philosopherName }));
    btn.innerHTML = iconHtml('philosopherRole', 20);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openForumPhilosopherProfile(philosopherName);
    });
    return btn;
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
        })
      : fillTemplate(labels.forumChatDefaultQuestion, {
          title: post.title,
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

  function injectPhilosopherFollowupsIntoThread(post, items) {
    const followups =
      typeof getForumPhilosopherFollowups === 'function'
        ? getForumPhilosopherFollowups(post.id)
        : [];
    const hasPending = String(state.forumPhilosopherFollowupPending || '').startsWith(
      `${post.id}|philosopher|`,
    );
    if (!followups.length && !hasPending) return items;

    const out = [];
    items.forEach((item) => {
      out.push(item);
      if (item.kind !== 'user') return;
      const matchId = item.dbId != null ? String(item.dbId) : '';
      const localKey = `${post.id}|user|${item.index}`;
      followups.forEach((f) => {
        const idMatch =
          matchId && f.userCommentId != null && String(f.userCommentId) === matchId;
        const localMatch = f.userCommentLocalKey && f.userCommentLocalKey === localKey;
        if (!idMatch && !localMatch) return;
        out.push({
          kind: 'philosopher_followup',
          followupId: f.id,
          philosopherIndex: f.philosopherIndex,
          philosopherId: f.philosopherId,
          name: f.philosopherName,
          text: f.text,
          postedAt: f.postedAt,
        });
      });
    });

    const pending = state.forumPhilosopherFollowupPending;
    if (pending && pending.startsWith(`${post.id}|philosopher|`)) {
      const idx = Number(pending.split('|')[2]);
      const ph = (post.philosophers || [])[idx];
      if (ph) {
        out.push({
          kind: 'philosopher_followup_pending',
          name: ph.name,
          philosopherId: ph.philosopherId,
          philosopherIndex: idx,
          postedAt: new Date().toISOString(),
        });
      }
    }
    return out;
  }

  function buildForumThread(post) {
    const items = [];
    (post.philosophers || []).forEach((entry, i) => {
      if (isCommentHidden(post.id, 'philosopher', i)) return;
      items.push({
        kind: 'philosopher',
        index: i,
        name: entry.name,
        text: entry.text,
        philosopherId: entry.philosopherId,
        postedAt: post.postedAt,
      });
    });
    (post.comments || []).forEach((entry, i) => {
      if (isCommentHidden(post.id, 'comment', i)) return;
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
      if (isCommentHidden(post.id, 'user', i)) return;
      items.push({
        kind: 'user',
        index: i,
        dbId: entry.id,
        deviceId: entry.deviceId,
        name: entry.author || ui().forumYouLabel || 'You',
        author: entry.author,
        text: entry.text,
        postedAt: entry.postedAt || new Date().toISOString(),
        avatarId: entry.avatarId,
      });
    });
    return injectPhilosopherFollowupsIntoThread(post, items);
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

  function commentReactionDbId(item) {
    if (item.kind === 'philosopher_followup') return item.followupId;
    return item.dbId;
  }

  function createCommentReactionButtons(postId, item) {
    const labels = ui();
    const wrap = document.createElement('div');
    wrap.className = 'forum-comment-actions';
    const rxDbId = commentReactionDbId(item);
    const rx = getForumCommentReactions(postId, item.kind, item.index, rxDbId);

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
        handleForumCommentReaction(postId, item.kind, item.index, key, rxDbId);
      });
      wrap.appendChild(btn);
    });

    if (
      item.kind !== 'user' &&
      item.kind !== 'philosopher_followup' &&
      item.kind !== 'philosopher_followup_pending'
    ) {
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

    if (item.kind === 'philosopher' || item.kind === 'philosopher_followup') {
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
    submit.addEventListener('click', async () => {
      const text = String(input.value || '').trim();
      if (!text) return;
      const m = mod();
      if (m) {
        const safety = m.scanForumContentSafety(text);
        if (safety.severity === 'block') {
          if (typeof openFeedbackFlash === 'function') {
            openFeedbackFlash(ui().forumComposeSafetyBlock || 'Edit your reply before posting.', 'error');
          }
          return;
        }
      }
      submit.disabled = true;
      try {
        const avatarId = getForumComposerAvatarId(findForumComposerAvatarBtn(submit));
        const post = getForumPostById(postId);
        const userComment = await postForumUserComment(postId, text, null, avatarId);
        if (!userComment) return;
        input.value = '';
        state.forumReplyOpen = null;
        renderForumDetail();
        if (item.kind === 'philosopher' && post) {
          await triggerPhilosopherFollowupAfterUserReply(post, item, text, userComment);
        }
      } catch (err) {
        console.error(err);
        if (typeof openFeedbackFlash === 'function') {
          openFeedbackFlash(labels.forumReportFailed || 'Could not post your reply. Try again later.', 'error');
        }
      } finally {
        submit.disabled = false;
      }
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
      const isThinking = item.kind === 'philosopher_followup_pending';
      if (isThinking) row.classList.add('forum-comment--philosopher-thinking');

      const avatarEl = createForumAvatar({
        name: item.name,
        avatarId: item.kind === 'user' ? item.avatarId : undefined,
        philosopherId:
          item.kind === 'philosopher' ||
          item.kind === 'philosopher_followup' ||
          item.kind === 'philosopher_followup_pending'
            ? item.philosopherId
            : undefined,
      });
      if (isThinking) avatarEl.classList.add('forum-comment-avatar--thinking');
      row.appendChild(avatarEl);

      const body = document.createElement('div');
      body.className = 'forum-comment-body';

      const head = document.createElement('div');
      head.className = 'forum-comment-head';
      const headMeta = document.createElement('div');
      headMeta.className = 'forum-comment-head-meta';
      const authorBlock = document.createElement('div');
      authorBlock.className = 'forum-comment-author-block';
      const author = document.createElement('strong');
      author.className = 'forum-comment-author';
      author.textContent = item.name;
      const time = document.createElement('span');
      time.className = 'forum-comment-time';
      if (!isThinking) time.textContent = formatForumTime(item.postedAt);
      const authorRow = document.createElement('div');
      authorRow.className = 'forum-comment-author-row';
      authorRow.appendChild(author);
      if (
        item.kind === 'philosopher' ||
        item.kind === 'philosopher_followup' ||
        isThinking
      ) {
        authorRow.appendChild(createForumPhilosopherRoleBadge(item.name));
      }
      authorBlock.appendChild(authorRow);
      if (!isThinking) authorBlock.appendChild(time);
      headMeta.appendChild(authorBlock);
      head.appendChild(headMeta);
      const commentMod = createForumCommentModeration(post.id, item);
      if (commentMod) head.appendChild(commentMod);
      body.appendChild(head);

      if (isThinking) {
        body.appendChild(
          createForumPhilosopherThinkingBlock(item.name, item.philosopherId),
        );
      } else {
        const text = document.createElement('p');
        text.className = 'forum-comment-text';
        text.textContent = item.text;
        body.appendChild(text);
      }

      if (
        item.kind !== 'user' &&
        item.kind !== 'philosopher_followup_pending'
      ) {
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

    const postOwner = typeof isForumPostOwner === 'function' && isForumPostOwner(post);
    const modMenu = createForumModerationMenu({
      targetKey: mod()?.postTargetKey(post.id),
      snippet: `${post.title}\n${post.body}`,
      postId: post.id,
      isOwner: postOwner,
      deleteKind: postOwner ? 'post' : null,
    });
    if (modMenu) headerActions.appendChild(modMenu);

    header.appendChild(headerActions);
    root.appendChild(header);

    const hiddenNotice = renderForumHiddenNotice(post.id);
    if (hiddenNotice) root.appendChild(hiddenNotice);

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
        const avatarBtn = form.querySelector('.forum-avatar-picker-btn');
        if (avatarBtn) setForumComposerAvatarId(avatarBtn, pickRandomForumAvatarId());
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
    commentSubmit.addEventListener('click', async () => {
      const text = String(commentInput.value || '').trim();
      if (!text) return;
      const m = mod();
      if (m) {
        const safety = m.scanForumContentSafety(text);
        if (safety.severity === 'block') {
          if (typeof openFeedbackFlash === 'function') {
            openFeedbackFlash(ui().forumComposeSafetyBlock || 'Edit your comment before posting.', 'error');
          }
          return;
        }
      }
      commentSubmit.disabled = true;
      try {
        const avatarId = getForumComposerAvatarId(findForumComposerAvatarBtn(commentSubmit));
        await postForumUserComment(post.id, text, null, avatarId);
        commentInput.value = '';
        commentFormWrap.hidden = true;
        renderForumDetail();
      } catch (err) {
        console.error(err);
        if (typeof openFeedbackFlash === 'function') {
          openFeedbackFlash(labels.forumReportFailed || 'Could not post your comment. Try again later.', 'error');
        }
      } finally {
        commentSubmit.disabled = false;
      }
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
    if (post.enriching) {
      renderForumEnrichingPhilosophers(post, discussion);
    } else {
      renderForumThread(post, discussion);
    }
    root.appendChild(discussion);

    syncForumComposerAvatarPreview();
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
    assignRandomForumComposeAvatar();
  }

  function syncForumComposeLabels() {
    const labels = ui();
    syncForumComposeGuidelines();
    updateForumComposeSafety();
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
    const panel = document.getElementById('forum-compose-panel');
    return !!(panel && !panel.hidden);
  }

  function openForumCompose() {
    const panel = document.getElementById('forum-compose-panel');
    if (!panel) return;
    if (state.forumView === 'detail') {
      closeForumDetail();
    }
    if (isForumComposeOpen()) {
      closeForumCompose();
      return;
    }
    syncForumComposeLabels();
    resetForumComposeForm();
    const safetyAck = document.getElementById('forum-compose-safety-ack');
    if (safetyAck) safetyAck.checked = false;
    const guidelinesAccept = document.getElementById('forum-compose-guidelines-accept');
    if (guidelinesAccept && mod()?.hasAcceptedGuidelines()) guidelinesAccept.checked = true;
    setForumComposeGuidelinesError('');
    panel.hidden = false;
    syncForumComposePanelVisibility();
    if (state.mainTab !== 'forum' && typeof setMainTab === 'function') {
      setMainTab('forum');
    }
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('forum-compose-topic')?.focus();
  }

  function closeForumCompose() {
    const panel = document.getElementById('forum-compose-panel');
    if (!panel || panel.hidden) return;
    panel.hidden = true;
    syncForumComposePanelVisibility();
    clearForumComposeErrors();
  }

  async   function submitForumComposePost() {
    if (!validateForumComposeForm()) return;
    if (!validateForumComposeModeration()) return;
    const values = getForumComposeValues();
    const composeAvatarBtn = document.getElementById('btn-forum-compose-avatar');
    const enrichingPhilosopherIds =
      typeof pickForumPhilosopherIds === 'function' ? pickForumPhilosopherIds(2) : [];
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
      enriching: true,
      enrichingPhilosopherIds,
      avatarId: getForumComposerAvatarId(composeAvatarBtn),
      deviceId: typeof getDeviceId === 'function' ? getDeviceId() : null,
    };
    if (typeof pickForumConceptsForPost === 'function') {
      post.concepts = pickForumConceptsForPost(post, 2, 4);
    }
    if (!Array.isArray(state.forumUserPosts)) state.forumUserPosts = [];
    state.forumUserPosts.unshift(post);

    const submitBtn = document.getElementById('btn-forum-compose-submit');
    if (submitBtn) submitBtn.disabled = true;
    try {
      if (forumSupabaseOn() && typeof submitForumPostToSupabase === 'function') {
        const saved = await submitForumPostToSupabase(post);
        if (saved?.device_id) post.deviceId = String(saved.device_id);
      }
    } catch (err) {
      console.error(err);
      state.forumUserPosts = state.forumUserPosts.filter((p) => p.id !== post.id);
      if (typeof openFeedbackFlash === 'function') {
        openFeedbackFlash(
          ui().forumReportFailed || 'Could not publish your dilemma. Try again later.',
          'error',
        );
      }
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    closeForumCompose();
    if (state.mainTab !== 'forum' && typeof setMainTab === 'function') {
      setMainTab('forum');
    }

    state.forumView = 'detail';
    state.forumPostId = post.id;
    state.forumReplyOpen = null;
    syncForumViewVisibility();
    renderForumDetail();

    try {
      if (typeof enrichForumUserPost === 'function') {
        await enrichForumUserPost(post);
      } else {
        delete post.enriching;
        delete post.enrichingPhilosopherIds;
        if (typeof upsertForumUserPostInState === 'function') upsertForumUserPostInState(post);
      }
    } catch (err) {
      console.warn('Forum post enrichment failed', err);
      delete post.enriching;
      delete post.enrichingPhilosopherIds;
      if (typeof upsertForumUserPostInState === 'function') upsertForumUserPostInState(post);
    }

    if (typeof saveForumUserPosts === 'function') saveForumUserPosts();

    if (forumSupabaseOn() && typeof syncForumFromSupabase === 'function') {
      await syncForumFromSupabase({ postId: post.id }).catch(() => {});
      if (typeof upsertForumUserPostInState === 'function') upsertForumUserPostInState(post);
      if (typeof saveForumUserPosts === 'function') saveForumUserPosts();
    }

    if (forumSupabaseOn() && typeof loadForumRemoteStatsForPost === 'function') {
      await loadForumRemoteStatsForPost(post.id).catch(() => {});
    }

    const detail = document.getElementById('forum-detail');
    if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    renderForumDetail();

    if (submitBtn) submitBtn.disabled = false;
  }

  function relocateForumComposePanel() {
    const overlay = document.getElementById('forum-compose-overlay');
    const listView = document.getElementById('forum-list-view');
    const anchor = document.getElementById('forum-list-empty');
    if (!overlay || !listView || !anchor || overlay.id === 'forum-compose-panel') return;

    const modal = overlay.querySelector('.forum-compose-modal');
    const header = overlay.querySelector('.modal-header');
    const form = overlay.querySelector('#forum-compose-form');
    if (!modal || !header || !form) return;

    overlay.id = 'forum-compose-panel';
    overlay.className = 'forum-compose-panel';
    overlay.hidden = true;
    overlay.removeAttribute('role');
    overlay.removeAttribute('aria-modal');
    overlay.style.display = '';

    const panelHead = document.createElement('div');
    panelHead.className = 'forum-compose-panel-head';
    const title = header.querySelector('#forum-compose-title');
    if (title) {
      title.className = 'forum-compose-panel-title';
      panelHead.appendChild(title);
    }
    const closeBtn = header.querySelector('#btn-close-forum-compose');
    if (closeBtn) {
      closeBtn.classList.add('forum-compose-panel-close');
      panelHead.appendChild(closeBtn);
    }
    header.remove();

    overlay.replaceChildren();
    overlay.appendChild(panelHead);
    overlay.appendChild(form);

    listView.insertBefore(overlay, anchor);
  }

  function initForumComposeModal() {
    relocateForumComposePanel();
    syncForumComposePanelVisibility();
    syncForumComposeLabels();
    const form = document.getElementById('forum-compose-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForumComposePost();
    });
    document.getElementById('btn-close-forum-compose')?.addEventListener('click', closeForumCompose);
    document.getElementById('btn-forum-compose-cancel')?.addEventListener('click', closeForumCompose);
    FORUM_COMPOSE_FIELDS.forEach((field) => {
      const input = document.getElementById(field.inputId);
      input?.addEventListener('input', () => {
        setForumComposeFieldError(field, '');
        updateForumComposeCounter(field);
        updateForumComposeSafety();
      });
    });
    document.getElementById('forum-compose-guidelines-accept')?.addEventListener('change', (e) => {
      if (e.target.checked) setForumComposeGuidelinesError('');
    });
    document.getElementById('forum-compose-safety-ack')?.addEventListener('change', () => {
      const submitBtn = document.getElementById('btn-forum-compose-submit');
      const result = scanComposeSafety();
      if (submitBtn && result.severity === 'warn') {
        submitBtn.disabled = !document.getElementById('forum-compose-safety-ack')?.checked;
      }
    });
    initForumReportModal();
    initForumHideConfirmModal();
    initForumDeleteConfirmModal();
  }

  function initForumDeleteConfirmModal() {
    const overlay = document.getElementById('forum-delete-overlay');
    if (!overlay || overlay.dataset.bound === '1') return;
    overlay.dataset.bound = '1';
    document.getElementById('btn-forum-delete-confirm')?.addEventListener('click', confirmForumDelete);
    document.getElementById('btn-forum-delete-cancel')?.addEventListener('click', closeForumDeleteConfirmModal);
    document.getElementById('btn-close-forum-delete')?.addEventListener('click', closeForumDeleteConfirmModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeForumDeleteConfirmModal();
    });
  }

  function initForumHideConfirmModal() {
    const overlay = document.getElementById('forum-hide-overlay');
    if (!overlay || overlay.dataset.bound === '1') return;
    overlay.dataset.bound = '1';
    document.getElementById('btn-forum-hide-confirm')?.addEventListener('click', confirmForumHide);
    document.getElementById('btn-forum-hide-cancel')?.addEventListener('click', closeForumHideConfirmModal);
    document.getElementById('btn-close-forum-hide')?.addEventListener('click', closeForumHideConfirmModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeForumHideConfirmModal();
    });
  }

  function initForumReportModal() {
    if (document.getElementById('forum-report-overlay')?.dataset.bound === '1') return;
    const overlay = document.getElementById('forum-report-overlay');
    if (!overlay) return;
    overlay.dataset.bound = '1';
    document.getElementById('btn-forum-report-submit')?.addEventListener('click', (e) => {
      e.preventDefault();
      submitForumReport();
    });
    document.getElementById('btn-forum-report-cancel')?.addEventListener('click', closeForumReportModal);
    document.getElementById('btn-close-forum-report')?.addEventListener('click', closeForumReportModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeForumReportModal();
    });
  }

  let forumAvatarPickerTab = 'w2';

  function syncForumComposerAvatarPreview(btn) {
    const cat = avatarCatalog();
    if (!cat) return;
    const pickers = btn ? [btn] : document.querySelectorAll('.forum-avatar-picker-btn');
    pickers.forEach((pickerBtn) => {
      const slot = pickerBtn.querySelector('.forum-avatar-picker-preview');
      if (!slot) return;
      slot.replaceChildren();
      const mini = createForumAvatar({ name: '', avatarId: getForumComposerAvatarId(pickerBtn) });
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
    const selected = getForumComposerAvatarId(forumAvatarPickerTarget);

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
        setForumComposerAvatarId(forumAvatarPickerTarget, id);
        closeForumAvatarPicker();
      });
      gridEl.appendChild(btn);
    });
  }

  function openForumAvatarPicker(targetBtn) {
    const overlay = document.getElementById('forum-avatar-overlay');
    if (!overlay) return;
    const cat = avatarCatalog();
    if (!cat) return;
    forumAvatarPickerTarget =
      targetBtn || document.getElementById('btn-forum-compose-avatar') || null;
    const entry = cat.getEntry(getForumComposerAvatarId(forumAvatarPickerTarget));
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
    assignRandomForumComposeAvatar();
    syncForumComposerAvatarPreview();
    syncForumAvatarPickerLabels();
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.forum-avatar-picker-btn');
      if (btn) {
        e.preventDefault();
        openForumAvatarPicker(btn);
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
    syncForumComposerAvatarPreview();
    if (isForumComposeOpen()) syncForumComposeLabels();
    if (state.mainTab === 'forum') {
      renderFeed();
      if (state.forumView === 'detail') renderForumDetail();
    }
  }

  function init() {
    try {
      syncForumHeroLabels();
      syncForumComposerAvatarPreview();
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
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.forum-detail-moderation')) closeForumModerationMenus();
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

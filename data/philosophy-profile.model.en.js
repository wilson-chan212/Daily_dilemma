/* eslint-disable no-undef */
;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory()
  else root.PHILOSOPHY_PROFILE_MODEL_EN = factory()
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict'

  /**
   * Model notes:
   * - This is intentionally “philosophy-light”: it scores value-tendencies rather than claiming strict schools.
   * - Runtime should stay deterministic; use AI only to draft/iterate copy offline.
   */

  const metaDims = [
    // Each dimension score is in [-N, +N]. Positive direction corresponds to “A-leaning” phrasing.
    { id: 'comfortVsMeaning', labelA: 'Comfort & stability', labelB: 'Meaning & growth' },
    { id: 'selfMasteryVsAuthenticity', labelA: 'Self-mastery', labelB: 'Authenticity' },
    { id: 'truthVsCohesion', labelA: 'Truth & accountability', labelB: 'Social cohesion' },
    { id: 'integrityVsLoyalty', labelA: 'Integrity', labelB: 'Loyalty' },
    { id: 'rulesVsJudgment', labelA: 'Principled restraint', labelB: 'Pragmatic judgment' },
    { id: 'courageVsPatience', labelA: 'Moral courage', labelB: 'Strategic patience' },
    { id: 'longtermVsImmediate', labelA: 'Long-term obligation', labelB: 'Immediate compassion' },
    { id: 'libertyVsGuardrails', labelA: 'Liberty', labelB: 'Civic protection' },
    { id: 'equalityVsEquity', labelA: 'Equality before rules', labelB: 'Equity through context' },
    { id: 'wellbeingVsDignity', labelA: 'Well-being-first', labelB: 'Purpose-through-contribution' },
    // Third axis for Truth vs Harmony (grouped dimension).
    { id: 'plainSpeechVsSocialEase', labelA: 'Plain speech', labelB: 'Social ease' },
    // Third axis for Freedom vs Guardrails (grouped dimension).
    { id: 'consentVsPaternalism', labelA: 'Informed consent', labelB: 'Protective safeguards' },
  ]

  /** Per-question mapping to one primary meta dimension. */
  const questions = [
    {
      id: 'pp-w1-self-happiness-tradeoff',
      week: 1,
      theme: 'Self & Happiness',
      metaDim: 'comfortVsMeaning',
      axis: { a: 'Comfort & stability', b: 'Meaning & growth' },
      weight: 1,
    },
    {
      id: 'pp-w2-freedom-mind-self-control',
      week: 2,
      theme: 'Freedom & Mind',
      metaDim: 'selfMasteryVsAuthenticity',
      axis: { a: 'Self-mastery', b: 'Authenticity' },
      weight: 1,
    },
    {
      id: 'pp-w3-justice-reality-truth-cost',
      week: 3,
      theme: 'Justice & Reality',
      metaDim: 'truthVsCohesion',
      axis: { a: 'Truth & accountability', b: 'Social cohesion' },
      weight: 1,
    },
    {
      id: 'pp-w4-honesty-character-loyalty',
      week: 4,
      theme: 'Honesty & Character',
      metaDim: 'integrityVsLoyalty',
      axis: { a: 'Integrity', b: 'Loyalty' },
      weight: 1,
    },
    {
      id: 'pp-w5-self-mastery-virtue-rule-bending',
      week: 5,
      theme: 'Self-Mastery & Virtue',
      metaDim: 'rulesVsJudgment',
      axis: { a: 'Principled restraint', b: 'Pragmatic judgment' },
      weight: 1,
    },
    {
      id: 'pp-w6-wisdom-courage-speaking-up',
      week: 6,
      theme: 'Wisdom & Courage',
      metaDim: 'courageVsPatience',
      axis: { a: 'Moral courage', b: 'Strategic patience' },
      weight: 1,
    },
    {
      id: 'pp-w7-future-ethics-generation-burden',
      week: 7,
      theme: 'Future Ethics',
      metaDim: 'longtermVsImmediate',
      axis: { a: 'Long-term obligation', b: 'Immediate compassion' },
      weight: 1,
    },
    {
      id: 'pp-w8-liberty-public-life-speech',
      week: 8,
      theme: 'Liberty & Public Life',
      metaDim: 'libertyVsGuardrails',
      axis: { a: 'Liberty', b: 'Civic protection' },
      weight: 1,
    },
    {
      id: 'pp-w9-justice-care-equal-treatment',
      week: 9,
      theme: 'Justice & Care',
      metaDim: 'equalityVsEquity',
      axis: { a: 'Equality before rules', b: 'Equity through context' },
      weight: 1,
    },
    {
      id: 'pp-w10-technology-meaning-human-worth',
      week: 10,
      theme: 'Technology & Meaning',
      metaDim: 'wellbeingVsDignity',
      axis: { a: 'Well-being-first', b: 'Purpose-through-contribution' },
      weight: 1,
    },
    {
      id: 'pp-w11-truth-plain-speech-social-ease',
      week: 11,
      theme: 'Truth & Trust',
      metaDim: 'plainSpeechVsSocialEase',
      axis: { a: 'Plain speech', b: 'Social ease' },
      weight: 1,
    },
    {
      id: 'pp-w12-freedom-consent-paternalism',
      week: 12,
      theme: 'Choice & Protection',
      metaDim: 'consentVsPaternalism',
      axis: { a: 'Informed consent', b: 'Protective safeguards' },
      weight: 1,
    },
  ]

  /**
   * Archetypes are “centers” in meta-dimension space.
   * target[dim] is in [-1, +1] where +1 means strongly A-leaning on that dimension.
   */
  const archetypes = [
    /**
     * toneGroup: visual + narrative family for the profile result (4 tones).
     * - blue: order, habits, long-horizon obligation
     * - green: care, harmony, relationships
     * - yellow: autonomy, meaning, integrative nuance
     * - red: truth, civic guardrails, pragmatic reform
     */
    {
      id: 'stoicArchitect',
      toneGroup: 'blue',
      title: 'Stoic Architect',
      sub: 'You aim for clarity, responsibility, and stable structures—internally and socially.',
      heroImageQuestionId: 'pp-w5-self-mastery-virtue-rule-bending',
      target: {
        comfortVsMeaning: +0.6,
        selfMasteryVsAuthenticity: +0.9,
        truthVsCohesion: +0.8,
        integrityVsLoyalty: +0.6,
        rulesVsJudgment: +0.8,
        courageVsPatience: +0.6,
        longtermVsImmediate: +0.6,
        libertyVsGuardrails: +0.4,
        equalityVsEquity: +0.5,
        wellbeingVsDignity: +0.7,
      },
      blindSpots: [
        'You may over-trust systems and self-control, and underweight how unpredictable life can be for people with fewer options.',
        'When things feel messy, you might reach for structure too fast—sometimes the human need is care before correction.',
      ],
      thinkers: [
        { name: 'Epictetus', note: 'On discipline and what’s in your control.' },
        { name: 'Immanuel Kant', note: 'On duty, consistency, and respect for persons.' },
        { name: 'John Rawls', note: 'On designing fair rules people can live with.' },
      ],
    },
    {
      id: 'principledRealist',
      toneGroup: 'red',
      title: 'Principled Realist',
      sub: 'You guard truth, consistency, and responsibility—especially under pressure.',
      heroImageQuestionId: 'pp-w3-justice-reality-truth-cost',
      target: {
        truthVsCohesion: +1,
        integrityVsLoyalty: +0.7,
        rulesVsJudgment: +0.6,
        courageVsPatience: +0.4,
      },
      blindSpots: [
        'You may underestimate the social value of tact, timing, and shared stories—especially when people are already struggling.',
        'You can default to “being right” over being effective, even when a gentler approach would preserve trust and still move truth forward.',
      ],
      thinkers: [
        { name: 'Immanuel Kant', note: 'On duty, honesty, and treating people as ends.' },
        { name: 'John Stuart Mill', note: 'On truth, liberty, and the harms of silencing.' },
        { name: 'Hannah Arendt', note: 'On public reality and the fragility of truth.' },
      ],
    },
    {
      id: 'civicGuardian',
      toneGroup: 'red',
      title: 'Civic Guardian',
      sub: 'You protect the conditions that make freedom and democracy workable: trust, norms, and safeguards.',
      heroImageQuestionId: 'pp-w8-liberty-public-life-speech',
      target: { libertyVsGuardrails: -1, truthVsCohesion: -0.4, equalityVsEquity: -0.2, longtermVsImmediate: +0.2 },
      blindSpots: [
        'You may accept restrictions too quickly and miss how guardrails can be captured, abused, or expanded.',
        'You can underweight dissent and experimentation—the very forces that often correct failing institutions.',
      ],
      thinkers: [
        { name: 'John Stuart Mill', note: 'On liberty and why dissent can be socially vital.' },
        { name: 'John Rawls', note: 'On fair rules and public justification.' },
        { name: 'Confucius', note: 'On public virtue, roles, and social trust.' },
      ],
    },
    {
      id: 'careCentered',
      toneGroup: 'green',
      title: 'Care-Centered Pragmatist',
      sub: 'You start from lived reality: context, relationships, and minimizing avoidable harm.',
      heroImageQuestionId: 'pp-w9-justice-care-equal-treatment',
      target: { longtermVsImmediate: -0.8, equalityVsEquity: -1, integrityVsLoyalty: -0.2, rulesVsJudgment: -0.4 },
      blindSpots: [
        'You may hesitate to apply firm rules even when consistency protects the vulnerable from favoritism.',
        'You can carry too much responsibility for fixing everything, especially when boundaries would prevent burnout.',
      ],
      thinkers: [
        { name: 'Carol Gilligan', note: 'On care, relationships, and moral voice.' },
        { name: 'Martha Nussbaum', note: 'On human capabilities and dignity in practice.' },
        { name: 'Aristotle', note: 'On practical wisdom and context-sensitive virtue.' },
      ],
    },
    {
      id: 'relationalProtector',
      toneGroup: 'green',
      title: 'Relational Protector',
      sub: 'You prioritize belonging, trust, and context; you try to keep people from getting crushed by rigid ideals.',
      heroImageQuestionId: 'pp-w4-honesty-character-loyalty',
      target: {
        comfortVsMeaning: -0.2,
        selfMasteryVsAuthenticity: -0.6,
        truthVsCohesion: -0.8,
        integrityVsLoyalty: -0.8,
        rulesVsJudgment: -0.7,
        courageVsPatience: -0.6,
        longtermVsImmediate: -0.8,
        libertyVsGuardrails: -0.4,
        equalityVsEquity: -0.9,
        wellbeingVsDignity: -0.4,
      },
      blindSpots: [
        'You may protect harmony at the cost of accountability; some patterns only change when truth is spoken plainly.',
        'You can take on too much emotional labor—especially when others treat your care as guaranteed.',
      ],
      thinkers: [
        { name: 'Carol Gilligan', note: 'On relationships and care-centered ethics.' },
        { name: 'David Hume', note: 'On sentiment, loyalty, and social glue.' },
        { name: 'Confucius', note: 'On roles, relationships, and moral cultivation.' },
      ],
    },
    {
      id: 'freedomFirst',
      toneGroup: 'yellow',
      title: 'Freedom-First Humanist',
      sub: 'You protect autonomy and dignity, and you resist control that turns people into tools.',
      heroImageQuestionId: 'pp-w2-freedom-mind-self-control',
      target: { libertyVsGuardrails: +0.8, selfMasteryVsAuthenticity: -0.5, truthVsCohesion: +0.2, wellbeingVsDignity: -0.2 },
      blindSpots: [
        'You may resist constraints even when shared limits protect vulnerable people from predictable harms.',
        'You can underweight the quiet power of institutions and incentives—systems can shape choices even without direct coercion.',
      ],
      thinkers: [
        { name: 'Simone de Beauvoir', note: 'On freedom, authenticity, and responsibility.' },
        { name: 'John Stuart Mill', note: 'On liberty and the harm principle.' },
        { name: 'Jean-Paul Sartre', note: 'On radical freedom and self-authorship.' },
      ],
    },
    {
      id: 'disciplinedBuilder',
      toneGroup: 'blue',
      title: 'Disciplined Builder',
      sub: 'You trust self-mastery, stable habits, and principled rules to protect the life you’re trying to build.',
      heroImageQuestionId: 'pp-w5-self-mastery-virtue-rule-bending',
      target: { selfMasteryVsAuthenticity: +1, rulesVsJudgment: +0.9, comfortVsMeaning: +0.2, integrityVsLoyalty: +0.2 },
      blindSpots: [
        'You may overvalue control and consistency, even when flexibility would help you respond to human messiness with grace.',
        'You can confuse “following the rule” with “serving the point of the rule,” especially when circumstances shift.',
      ],
      thinkers: [
        { name: 'Aristotle', note: 'On virtue as cultivated character and habit.' },
        { name: 'Epictetus', note: 'On self-control and what’s in your power.' },
        { name: 'Confucius', note: 'On self-cultivation and role-based duty.' },
      ],
    },
    {
      id: 'meaningSeeker',
      toneGroup: 'yellow',
      title: 'Meaning-Seeking Striver',
      sub: 'You’d rather grow than coast: purpose, challenge, and contribution are central for you.',
      heroImageQuestionId: 'pp-w10-technology-meaning-human-worth',
      target: { comfortVsMeaning: -1, wellbeingVsDignity: -1, courageVsPatience: +0.2, integrityVsLoyalty: +0.2 },
      blindSpots: [
        'You may romanticize struggle and underappreciate peace, rest, and simple stability as genuine goods.',
        'You can judge yourself (or others) too harshly when circumstances limit what “growth” looks like.',
      ],
      thinkers: [
        { name: 'Viktor Frankl', note: 'On meaning as a core human need.' },
        { name: 'Laozi', note: 'On wu-wei, naturalness, and letting go of forcing.' },
        { name: 'Shakyamuni Buddha', note: 'On suffering, clinging, and the middle way.' },
        { name: 'Aristotle', note: 'On flourishing as living excellently, not merely feeling good.' },
      ],
    },
    {
      id: 'pragmaticReformer',
      toneGroup: 'red',
      title: 'Pragmatic Reformer',
      sub: 'You care about truth and progress, but you also pay attention to incentives, timing, and what will actually work.',
      heroImageQuestionId: 'pp-w6-wisdom-courage-speaking-up',
      target: {
        truthVsCohesion: +0.5,
        rulesVsJudgment: -0.7,
        courageVsPatience: -0.5,
        libertyVsGuardrails: -0.2,
        equalityVsEquity: -0.3,
        longtermVsImmediate: +0.2,
      },
      blindSpots: [
        'You may drift into over-optimizing for “what works” and lose track of the lines you promised yourself you wouldn’t cross.',
        'You can under-communicate your principles; people may misread strategy as indifference.',
      ],
      thinkers: [
        { name: 'John Stuart Mill', note: 'On experimentation, reform, and harm reduction.' },
        { name: 'Aristotle', note: 'On practical wisdom over rigid rules.' },
        { name: 'Hannah Arendt', note: 'On politics, responsibility, and public truth.' },
      ],
    },
    {
      id: 'longtermSteward',
      toneGroup: 'blue',
      title: 'Long-Term Steward',
      sub: 'You take future people seriously and try to act as a trustee of the world you’ll leave behind.',
      heroImageQuestionId: 'pp-w7-future-ethics-generation-burden',
      target: { longtermVsImmediate: +1, truthVsCohesion: +0.2, libertyVsGuardrails: -0.2, rulesVsJudgment: +0.2 },
      blindSpots: [
        'You may ask too much of people who are already close to the edge; sacrifice is easier to endorse when it’s abstract.',
        'You can drift into “ends justify means” thinking if long-term goals start feeling sacred.',
      ],
      thinkers: [
        { name: 'Derek Parfit', note: 'On future generations and moral time.' },
        { name: 'John Rawls', note: 'On fairness across generations.' },
        { name: 'Peter Singer', note: 'On impartial concern beyond your immediate circle.' },
      ],
    },
    {
      id: 'harmonizer',
      toneGroup: 'green',
      title: 'Social Harmonizer',
      sub: 'You protect relationships and shared trust; you believe societies run on more than facts alone.',
      heroImageQuestionId: 'pp-w3-justice-reality-truth-cost',
      target: { truthVsCohesion: -1, integrityVsLoyalty: -0.4, courageVsPatience: -0.2, libertyVsGuardrails: -0.2 },
      blindSpots: [
        'You may avoid necessary conflict and let problems grow in the dark until they become crises.',
        'You can underweight accountability—people sometimes need hard truth to change course.',
      ],
      thinkers: [
        { name: 'Confucius', note: 'On harmony, roles, and social trust.' },
        { name: 'David Hume', note: 'On sentiment, social bonds, and moral psychology.' },
        { name: 'Aristotle', note: 'On friendship and civic life as ethical foundations.' },
      ],
    },
    {
      id: 'balancedIntegrator',
      toneGroup: 'yellow',
      title: 'Balanced Integrator',
      sub: 'You hold competing values at once and try to choose with nuance rather than slogans.',
      heroImageQuestionId: 'pp-w6-wisdom-courage-speaking-up',
      target: {}, // chosen when confidence is low / margins small
      blindSpots: [
        'Your nuance can look like hesitation; sometimes clarity (even if imperfect) is the kindest thing to offer.',
        'You may spread your attention across too many considerations and delay decisions that require commitment.',
      ],
      thinkers: [
        { name: 'Aristotle', note: 'On the mean, context, and practical wisdom.' },
        { name: 'Isaiah Berlin', note: 'On value pluralism and unavoidable trade-offs.' },
        { name: 'Amartya Sen', note: 'On comparative justice and real-world trade-offs.' },
      ],
    },
  ]

  const copy = {
    kicker: 'Your Philosophy Mirror',
    /** Four UI / illustration families (green, yellow, blue, red). */
    philosophyToneGroups: {
      green: { label: 'Care & connection' },
      yellow: { label: 'Freedom & flourishing' },
      blue: { label: 'Order & stewardship' },
      red: { label: 'Truth & reform' },
    },
    framingLine:
      'This isn’t a diagnosis. It’s a mirror of your value trade-offs in these scenarios.',
    dimensionsSection: 'Your Dimensions',
    /** Shown under each dimension bar: symbols + short gloss for each pole (no percentages). */
    dimensionPoles: {
      orderVsAdaptation: {
        leftSymbol: '▦',
        rightSymbol: '◐',
        leftHint:
          'Rules, consistency, and equal treatment before exceptions—predictable standards even when context pulls.',
        rightHint:
          'Context, loyalty trade-offs, and flexibility when rigid rules misfire or equity demands nuance.',
      },
      truthVsHarmony: {
        leftSymbol: '⌖',
        rightSymbol: '✶',
        leftHint:
          'Naming facts, friction, and costs—even when cohesion, patience, or faces would prefer silence.',
        rightHint:
          'Protecting trust, morale, and bonds—sometimes softening truth so relationships can hold.',
      },
      freedomVsGuardrails: {
        leftSymbol: '○',
        rightSymbol: '▭',
        leftHint:
          'Room to choose, speak, and steer your life—even when protection could narrow risky options.',
        rightHint:
          'Safeguards, friction, and shared floors—even when they clip pure consent or spontaneity.',
      },
      comfortVsStriving: {
        leftSymbol: '☀',
        rightSymbol: '▲',
        leftHint:
          'Present relief, stability, and felt well-being when pressure runs high.',
        rightHint:
          'Meaning, dignity, and longer horizons—even when they ask more of you right now.',
      },
    },
    privateNote: 'Private · Only you can see your results',
    sections: {
      blindSpot: 'Blind Spot',
      thinkers: 'Thinkers You Echo',
    },
    confidence: {
      high: 'clear',
      medium: 'mixed',
      low: 'balanced',
    },
  }

  return { version: 1, metaDims, questions, archetypes, copy }
})


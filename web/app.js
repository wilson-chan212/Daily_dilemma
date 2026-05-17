const APP_LOAD_STARTED_AT =
  typeof window !== 'undefined' && typeof window.__ddLoadT0 === 'number' ? window.__ddLoadT0 : Date.now();

/* =============================================
   WEEKLY THEMES  (5 dilemmas per week, 6 weeks)
   ============================================= */
const WEEKLY_THEMES = [
  // Week 1 — dilemmas 1–5
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '\u2728' },
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '\u2728' },
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '\u2728' },
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '\u2728' },
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '\u2728' },
  // Week 2 — dilemmas 6–10
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '\u{1F300}' },
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '\u{1F300}' },
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '\u{1F300}' },
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '\u{1F300}' },
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '\u{1F300}' },
  // Week 3 — dilemmas 11–15
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '\u2696\uFE0F' },
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '\u2696\uFE0F' },
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '\u2696\uFE0F' },
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '\u2696\uFE0F' },
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '\u2696\uFE0F' },
  // Week 4 — dilemmas 16–20 — Honesty & Character
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '\u{1FAA6}' },
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '\u{1FAA6}' },
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '\u{1FAA6}' },
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '\u{1FAA6}' },
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '\u{1FAA6}' },
  // Week 5 — dilemmas 21–25 — Self-Mastery & Virtue
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '\u{1F33F}' },
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '\u{1F33F}' },
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '\u{1F33F}' },
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '\u{1F33F}' },
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '\u{1F33F}' },
  // Week 6 — dilemmas 26–30 — Wisdom & Courage
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '\u{1F56F}\uFE0F' },
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '\u{1F56F}\uFE0F' },
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '\u{1F56F}\uFE0F' },
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '\u{1F56F}\uFE0F' },
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '\u{1F56F}\uFE0F' },
  // Week 7 — dilemmas 31–33 — Future Ethics
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '\u{1F9EC}' },
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '\u{1F9EC}' },
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '\u{1F9EC}' },
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '\u{1F9EC}' },
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '\u{1F9EC}' },
  // Week 8 — dilemmas 36–40 — Liberty & Public Life
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '\u{1F3DB}\uFE0F' },
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '\u{1F3DB}\uFE0F' },
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '\u{1F3DB}\uFE0F' },
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '\u{1F3DB}\uFE0F' },
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '\u{1F3DB}\uFE0F' },
  // Week 9 — dilemmas 41–45 — Justice & Care
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '\u{1F932}' },
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '\u{1F932}' },
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '\u{1F932}' },
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '\u{1F932}' },
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '\u{1F932}' },
  // Week 10 — dilemmas 46–50 — Technology & Meaning
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '\u{1F52D}' },
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '\u{1F52D}' },
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '\u{1F52D}' },
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '\u{1F52D}' },
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '\u{1F52D}' },
];

/* =============================================
   PHILOSOPHY PROFILE QUESTIONS
   ============================================= */
const PHILOSOPHY_PROFILE_QUESTIONS = [
  {
    id: 'pp-w1-self-happiness-tradeoff',
    week: 1,
    theme: 'Self & Happiness',
    image: 'images/philosophy-profile/pp-01-self-happiness.png',
    prompt: 'You can choose one life path for the next 5 years. Which feels more “right,” even if it costs you something?',
    optA: 'Choose the path that maximizes daily well-being and stability, even if it limits big ambitions.',
    optB: 'Choose the path that maximizes meaning and personal growth, even if it brings more stress and uncertainty.',
  },
  {
    id: 'pp-w2-freedom-mind-self-control',
    week: 2,
    theme: 'Freedom & Mind',
    image: 'images/philosophy-profile/pp-02-freedom-mind.png',
    prompt: 'A clinic offers a safe, reversible procedure that reliably reduces destructive impulses (addiction, rage, compulsive spending). You qualify. Do you take it?',
    optA: 'Yes—freedom is the ability to live by my values, not by my impulses.',
    optB: 'No—changing my mind to fit a “better” version risks turning me into someone else.',
  },
  {
    id: 'pp-w3-justice-reality-truth-cost',
    week: 3,
    theme: 'Justice & Reality',
    image: 'images/philosophy-profile/pp-03-justice-reality.png',
    prompt: 'You have proof that a widely believed “feel-good” story about a public figure is false. Revealing the truth will harm trust and morale but improve accuracy. What do you do?',
    optA: 'Reveal it—society should be built on reality, even when reality disappoints.',
    optB: 'Hold it back—some shared stories are socially valuable even if imperfectly true.',
  },
  {
    id: 'pp-w4-honesty-character-loyalty',
    week: 4,
    theme: 'Honesty & Character',
    image: 'images/philosophy-profile/pp-04-honesty-character.png',
    prompt: 'A close friend asks you to vouch for them in a high-stakes situation. You know they will probably fail—and it could harm others. What do you do?',
    optA: 'Be honest about the risk, even if it damages the friendship.',
    optB: 'Support them fully—loyalty means standing with someone when it matters most.',
  },
  {
    id: 'pp-w5-self-mastery-virtue-rule-bending',
    week: 5,
    theme: 'Self-Mastery & Virtue',
    image: 'images/philosophy-profile/pp-05-self-mastery-virtue.png',
    prompt: 'You can quietly bend a rule to help your team succeed. No one will be harmed, and everyone does it. What do you do?',
    optA: 'Follow the rule—virtue is consistency, not outcomes.',
    optB: 'Bend it—virtue includes practical wisdom about when rules miss the point.',
  },
  {
    id: 'pp-w6-wisdom-courage-speaking-up',
    week: 6,
    theme: 'Wisdom & Courage',
    image: 'images/philosophy-profile/pp-06-wisdom-courage.png',
    prompt: 'In a group you depend on, a popular belief is clearly wrong and will lead to a bad decision. Speaking up risks ridicule and exclusion. What do you do?',
    optA: 'Speak up—courage means protecting what’s true and right despite social cost.',
    optB: 'Stay quiet—wisdom means choosing battles and preserving influence for later.',
  },
  {
    id: 'pp-w7-future-ethics-generation-burden',
    week: 7,
    theme: 'Future Ethics',
    image: 'images/philosophy-profile/pp-07-future-ethics.png',
    prompt: 'A policy would significantly improve lives for people 100 years from now, but requires real sacrifices from people alive today who are already struggling. Do you support it?',
    optA: 'Yes—future people matter; we should not treat time as a moral discount.',
    optB: 'No—ethics starts with present suffering; you can’t demand heroism from the vulnerable.',
  },
  {
    id: 'pp-w8-liberty-public-life-speech',
    week: 8,
    theme: 'Liberty & Public Life',
    image: 'images/philosophy-profile/pp-08-liberty-public-life.png',
    prompt: 'A city considers banning a kind of “legal but corrosive” public behavior (e.g., aggressive misinformation campaigns) to protect democracy. Where do you land?',
    optA: 'Allow it—liberty includes tolerating harmful expression unless it’s direct violence.',
    optB: 'Restrict it—public life needs guardrails; freedom without trust destroys itself.',
  },
  {
    id: 'pp-w9-justice-care-equal-treatment',
    week: 9,
    theme: 'Justice & Care',
    image: 'images/philosophy-profile/pp-09-justice-care.png',
    prompt: 'Two people break the same rule. One had far fewer resources and faced harsher circumstances. Should the response differ?',
    optA: 'No—justice means equal treatment; exceptions become bias and favoritism.',
    optB: 'Yes—justice must consider context; equal treatment can be unequal in effect.',
  },
  {
    id: 'pp-w10-technology-meaning-human-worth',
    week: 10,
    theme: 'Technology & Meaning',
    image: 'images/philosophy-profile/pp-10-technology-meaning.png',
    prompt: 'An AI system can do most jobs better than humans. Society can guarantee comfort without work. What should we treat as “success”?',
    optA: 'Success is maximizing well-being; we should redesign life around flourishing without traditional work.',
    optB: 'Success requires human contribution; a life without needed effort risks emptiness and lost dignity.',
  },
  {
    id: 'pp-w11-truth-plain-speech-social-ease',
    week: 11,
    theme: 'Truth & Trust',
    image: 'images/philosophy-profile/pp-11-plain-speech-social-ease.png',
    prompt:
      'You notice a colleague’s mistake will embarrass them in an upcoming meeting. You could correct them privately now, or stay quiet and let the moment pass unless asked.',
    optA: 'Speak plainly now—respect includes helping someone avoid a public wound.',
    optB: 'Stay quiet unless it harms others—trust includes not forcing truth into every interaction.',
  },
  {
    id: 'pp-w12-freedom-consent-paternalism',
    week: 12,
    theme: 'Choice & Protection',
    image: 'images/philosophy-profile/pp-12-consent-paternalism.png',
    prompt:
      'A popular product is addictive for some users. Regulators could require blunt safeguards (limits, warnings, friction) that affect everyone. What do you favor?',
    optA: 'Default to informed consent—people choose risk with clear information; heavy-handed limits infantilize adults.',
    optB: 'Protect people first—design and defaults should reduce predictable harm even when “choice” technically exists.',
  },
];

const PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR = 'images/philosophy-profile-soft-rounded/';

/** Result hero: one soft-rounded illustration per engine archetype (palette matches model `toneGroup`). */
const PHILOSOPHY_PROFILE_ARCHETYPE_IMAGE = {
  stoicArchitect: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-01-stoic-architect.png',
  principledRealist: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-02-principled-realist.png',
  civicGuardian: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-03-civic-guardian.png',
  careCentered: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-04-care-centered.png',
  relationalProtector: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-05-relational-protector.png',
  freedomFirst: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-06-freedom-first.png',
  disciplinedBuilder: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-07-disciplined-builder.png',
  meaningSeeker: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-08-meaning-seeker.png',
  pragmaticReformer: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-09-pragmatic-reformer.png',
  longtermSteward: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-10-longterm-steward.png',
  harmonizer: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-11-harmonizer.png',
  balancedIntegrator: PHILOSOPHY_PROFILE_SOFT_ROUNDED_DIR + 'pp-arch-12-balanced-integrator.png',
};

function getPhilosophyProfileSoftImageForArchetype(archetypeId) {
  if (!archetypeId) return '';
  return PHILOSOPHY_PROFILE_ARCHETYPE_IMAGE[archetypeId] || '';
}

/* =============================================
   COUNTERARGUMENT NUDGES
   ============================================= */
const COUNTERARGS = [
  // 1. Happiness Machine
  { a: 'Nozick argued we want to actually do things, not just experience them. Plugging in means surrendering authorship of your own life.', b: 'If every moment of real suffering could be replaced by joy with no one worse off, what moral argument keeps you outside the machine?' },
  // 2. Trolley
  { a: 'You used a person as a means to save others — Kant would say this violates their dignity absolutely, regardless of the numbers.', b: 'Doing nothing is still a choice. If you had the power to save five and didn\'t, are you truly free of moral responsibility for their deaths?' },
  // 3. Immortality
  { a: 'Williams argued an immortal life eventually becomes tedious — what makes goals worth pursuing is that we won\'t be around forever to pursue them.', b: 'Everything you\'ll ever love or create is bounded by a clock you didn\'t set. Accepting that without question may be a failure of imagination.' },
  // 4. Memory
  { a: 'Locke argued memory is the basis of personal identity. Erase it and you may not be freeing yourself — you may be erasing part of who you are.', b: 'Carrying pain that no longer serves you isn\'t strength — it may be attachment to suffering that stops you from becoming someone new.' },
  // 5. Truth serum
  { a: 'Radical honesty with people who aren\'t ready for the truth causes harm. Kant\'s categorical honesty was criticized for ignoring consequences entirely.', b: 'Every white lie steals someone\'s ability to decide based on reality. Whose comfort are you actually protecting?' },
  // 6. Time rewind
  { a: 'The self who rewinds loses everything learned from suffering — returning a stranger to their own future, doomed to rediscover every hard lesson.', b: 'Accepting the present can be passive resignation. If you had the power to undo suffering, not using it is its own decision.' },
  // 7. Mind reading
  { a: 'Knowing what people think doesn\'t mean you understand why. Thought without context is noise — acting on it would destroy every relationship you have.', b: 'You already decide based on what you think others think — often wrongly. Total accuracy might make you more compassionate, not less.' },
  // 8. Last human
  { a: 'Without relationships or anyone to affect, what does the self even mean? You may be preserving a body while the person has already ceased to exist.', b: 'Your existence might still matter in ways you can\'t perceive. The desire to stop could be a product of grief that might lift.' },
  // 9. Free will
  { a: 'Compatibilists like Dennett argue free will and determinism aren\'t opposites. You are the deterministic process — your choices are still yours.', b: 'If nothing is truly chosen, praise and blame become incoherent. Law, relationships, and self-improvement all assume choices are real.' },
  // 10. AI governance
  { a: 'Perfect decisions by whose values? An AI optimizes for what it was trained to optimize. Remove human governance and you lose the ability to correct it.', b: 'Human leaders have caused wars, genocides, and environmental collapse. At what point does \"imperfect but ours\" become an excuse?' },
  // 11. Sacrifice
  { a: 'Thomson argued utilitarian math doesn\'t justify actively killing the innocent — there\'s a moral difference between killing and letting die.', b: 'If you had the power to save a thousand lives and didn\'t, those deaths are partly on you. Moral purity can be a form of selfishness.' },
  // 12. Identity
  { a: 'Parfit argued strict identity is the wrong concept. What persists is psychological continuity — at what exact point did \"you\" end?', b: 'You replace most of your atoms every few years already. If material replacement destroyed identity, you ceased to be yourself long ago.' },
  // 13. Solitary knowledge
  { a: 'Knowing something no one else believes isn\'t the same as knowing something true. History is full of people certain they alone had the answer — and were wrong.', b: 'Every truth that changed the world was first believed by one person. Comfortable shared ignorance is how civilizations stay stuck.' },
  // 14. Justice / Mercy
  { a: 'Punishing a genuinely reformed person satisfies only a retributive impulse — one that may say more about us than about justice.', b: 'Forgiveness without consequence says terrible acts are negotiable. Victims deserve the weight of the law, not just the offender\'s reformed conscience.' },
  // 15. Simulation
  { a: 'If your experience of love, loss, and growth is functionally identical to \"real\" experience, the distinction may be metaphysical noise.', b: 'Truth matters independently of experience. Living inside a comfortable lie — even an undetectable one — may still betray what it means to be a thinking being.' },
  // 16. Honest feedback
  { a: 'Aristotle taught that virtue lives in the mean — honesty without warmth becomes cruelty wearing the mask of truth.', b: 'Comfort offered in place of truth is its own quiet betrayal. A friend who only soothes is not really helping you grow.' },
  // 17. Private trust
  { a: 'Reputation built on a betrayal is borrowed light. The audience that praises you today would never trust you with anything of theirs.', b: 'You stayed loyal in private — but secrecy can also protect harm. Confucian virtue isn\'t silence; it\'s knowing when speech is owed.' },
  // 18. Filter bubble
  { a: 'Awareness of others\' suffering is not always a duty — sometimes it\'s a flood that drowns the very compassion it tries to feed.', b: 'A serene feed is a small Happiness Machine. You traded a piece of solidarity for calm — and may not notice what you stopped seeing.' },
  // 19. Fair play
  { a: 'Rules exist precisely so we don\'t have to litigate spirit. If it isn\'t forbidden, calling it cheating is moralism dressed as virtue.', b: 'Kant would say a maxim of \"do whatever isn\'t banned\" cannot be universalised — every game would unravel into loopholes.' },
  // 20. Group inclusion
  { a: 'A group is not a charity. Carrying someone who can\'t contribute can quietly punish the people who can.', b: 'Mill\'s liberty extends to dignity, not just outcomes. Excluding the quiet member treats them as a means, never as an end.' },
  // 21. Chosen path
  { a: 'Romanticising \"your own\" path can be a story we tell to dignify avoidable mistakes — the planner isn\'t wrong just because it\'s certain.', b: 'A life optimised by someone else is a life you only inhabit. Sartre\'s freedom is a burden, but it is also the only thing that makes a life yours.' },
  // 22. Stoic calm
  { a: 'Silence in the face of cruelty can also be complicity. Epictetus separated the controllable from the not — he didn\'t recommend never speaking up.', b: 'Every reply is a small surrender of attention to someone you would not invite into your home. The crowd is not a court worth winning.' },
  // 23. Simple pleasures
  { a: 'Epicurus warned against luxury, not against beauty. Sometimes a fine object marks an occasion that simple things cannot.', b: 'Status purchases tend to age into clutter. The shared meal is the kind of memory that doesn\'t depreciate.' },
  // 24. Responsibility
  { a: 'Owning a mistake that wasn\'t yours alone can also be a kind of vanity — dragging the team into a story about your character.', b: 'Marcus Aurelius asked \"is this necessary?\" — and truth almost always is. The discomfort of speaking is shorter than the rot of staying quiet.' },
  // 25. Honest study
  { a: 'A passing grade can buy you the time and credibility to actually learn the subject later — purity isn\'t always wisdom.', b: 'Plato saw ignorance as the deepest harm. A score that hides what you don\'t know is a door that closes on your own mind.' },
  // 26. Lead by example
  { a: 'Sometimes a clear order is the kindest thing a leader can give — example is slow, and people sometimes need direction now.', b: 'Authority without modelling breeds resentment. Confucius taught that the ruler who corrects himself first does not need to shout.' },
  // 27. Defend dignity
  { a: 'Stepping in can escalate harm — sometimes the wiser act is to comfort privately and report the cruelty quietly.', b: 'Wollstonecraft would say dignity is not optional. To stay silent in front of cruelty is to ratify it with your body.' },
  // 28. Promise vs. pivot
  { a: 'A promise is the bridge between who you were and who you become. Break it lightly and trust grows brittle for everyone, not just you.', b: 'Holding a promise that no longer fits can be a quiet form of self-betrayal. Honesty about change is a kind of integrity, too.' },
  // 29. Borrowed words
  { a: 'A polished message that lands well is still a real act of care. Refusing every tool can be its own kind of vanity.', b: 'The wobble in handwritten words is part of the gift. A perfect draft they did not write to is admiration of the tool, not of them.' },
  // 30. Quiet donation
  { a: 'Anonymous giving is purer in motive, but invisibility teaches no one. Visible generosity can move others to give too.', b: 'Public giving risks turning a kindness into a performance. The applause is a small tax the recipient pays in dignity.' },
  // 31. Designer child
  { a: 'Enhancement markets become social pressure quickly. What begins as freedom for one family becomes obligation for every family that can afford it.', b: 'Refusing safe prevention can romanticize "nature" while passing avoidable suffering to someone who never consented to the risk.' },
  // 32. Predictive surveillance
  { a: 'A safer city bought with total visibility rewrites citizenship into permanent suspicion. Rights are most meaningful before fear arrives.', b: 'Privacy is hollow if people are too afraid to use public space. Protecting life may justify constraints that are transparent and accountable.' },
  // 33. AI grief companion
  { a: 'An AI echo can keep love present long enough for healing. Grief is not betrayal, and continuation can be a bridge rather than a prison.', b: 'Attachment to a simulation can freeze mourning in place. The relationship was with a person, not an endlessly generated resemblance.' },
  // 34. Climate mirror
  { a: 'Geoengineering can turn one emergency into another. A technology powerful enough to cool the planet is also powerful enough to redraw weather, power, and blame.', b: 'Purity about natural systems is cold comfort to people already losing homes. Refusing intervention can be another way the comfortable ask the vulnerable to wait.' },
  // 35. Animal uplift
  { a: 'Giving a species self-awareness is not automatically liberation. You may create new kinds of fear, grief, and captivity they never had to carry.', b: 'Leaving intelligence locked away because it complicates our ethics may be paternalism. If a being can flourish more deeply, why deny the door?' },
  // 36. Quarantine order
  { a: 'Emergency powers age badly. A rule justified by fear today can become the template for ordinary control tomorrow.', b: 'Freedom is relational. Your liberty to move can become someone else\'s exposure, especially when risk is invisible.' },
  // 37. Robot caregiver
  { a: 'Reliable care is not lesser because it is mechanical. Dignity may require consistency more than sentiment.', b: 'Care is more than tasks completed. Replacing presence with efficiency can teach the vulnerable that they are problems to be managed.' },
  // 38. Deepfake ban
  { a: 'A medium that destroys trust in evidence can poison public life faster than satire can repair it.', b: 'Broad bans on expression often protect the powerful first. The cure for manipulation can become a tool for silencing dissent.' },
  // 39. Mood regulator
  { a: 'Suffering is not sacred just because it is familiar. If a safe tool lets people live without needless anguish, refusing it can romanticize pain.', b: 'Emotions carry information, even when they hurt. Flattening them may produce calm at the cost of depth, warning, and art.' },
  // 40. Space colony ticket
  { a: 'Leaving can look selfish, but species-level survival may require people willing to cross the lonely bridge first.', b: 'A future elsewhere does not absolve obligations here. Escape can become a beautiful name for abandonment.' },
  // 41. Wild suffering
  { a: 'Nature is not automatically moral. If we can reduce agony without collapse, distance alone does not excuse inaction.', b: 'Ecosystems are not machines with obvious levers. Compassion without humility can damage the very lives it hopes to protect.' },
  // 42. Cultural artifact
  { a: 'A global museum can preserve and share human heritage beyond any single border. Access matters too.', b: 'Objects taken under unequal power carry that history in their display cases. Return can repair what preservation alone cannot.' },
  // 43. Platform speech
  { a: 'Misinformation is not just speech when it predictably harms people. Platforms shape reality and cannot pretend to be empty rooms.', b: 'Handing truth-policing to platforms invites quiet abuse. Error is dangerous, but centralized permission to speak is dangerous too.' },
  // 44. Open-source medicine
  { a: 'A patent system that keeps lifesaving treatment unaffordable has lost moral priority. People are not waiting rooms for incentives.', b: 'Breaking patents can save people now while weakening the reason someone funds the next cure. Future patients are also invisible stakeholders.' },
  // 45. Blind hiring
  { a: 'Blind review can reduce bias by forcing attention onto the work itself. Fairness sometimes needs less story, not more.', b: 'Context is not favoritism when obstacles were unequal. Ignoring hardship can turn neutrality into another advantage for the already advantaged.' },
  // 46. Dream ads
  { a: 'If the exchange is voluntary, selling a little mental space may be a reasonable price for care someone otherwise cannot afford.', b: 'Sleep is one of the last unmarketed refuges. Turning dreams into ad space crosses a boundary consent may not fully protect.' },
  // 47. De-extinction
  { a: 'Restoring a lost species can repair part of what humans broke and renew public commitment to conservation.', b: 'Reviving the dead can become a spectacle that drains attention from living species disappearing now.' },
  // 48. Dementia archive
  { a: 'Recording a life can preserve identity when memory fails. The archive may become a gift from the present self to the future family.', b: 'Total preservation can violate the privacy of a person who can no longer curate themselves. Not every memory is owed to love.' },
  // 49. AI tutor
  { a: 'A patient AI tutor can give every child individual attention no crowded classroom can match.', b: 'Teaching is not just content delivery. Children also learn trust, patience, and belonging from imperfect human presence.' },
  // 50. Water rationing
  { a: 'Shared scarcity requires shared limits. Without rules, the wealthy can buy comfort while everyone else learns restraint.', b: 'Rationing can punish careful households and invite bureaucracy into ordinary life. Local choice may adapt better than central control.' },
];
/* =============================================
   RABBIT HOLE LINKS  (related dilemma index per dilemma)
   ============================================= */
// Each entry: { idx: 0-based index of related dilemma, label: short hint }
const RABBIT_HOLES = [
  { idx: 7,  label: 'On finding meaning without guarantees' },   // 1 → 8 Last Human
  { idx: 10, label: 'On using one life to save many' },           // 2 → 11 Sacrifice
  { idx: 2,  label: 'On what makes a life worth living' },        // 3 → 3 (loop to memory)
  { idx: 11, label: 'On whether the self can survive change' },   // 4 → 12 Identity
  { idx: 6,  label: 'On what we hide from each other' },          // 5 → 7 Mind reading
  { idx: 11, label: 'On identity across time' },                  // 6 → 12 Identity
  { idx: 8,  label: 'On whether free will is even possible' },    // 7 → 9 Free will
  { idx: 7,  label: 'On meaning when everything is gone' },       // 8 → same theme
  { idx: 9,  label: 'On who should make decisions for us' },      // 9 → 10 AI
  { idx: 8,  label: 'On free will and moral responsibility' },    // 10 → 9 Free will
  { idx: 1,  label: 'On the trolley problem and moral math' },    // 11 → 2 Trolley
  { idx: 5,  label: 'On identity across rewound time' },          // 12 → 6 Time rewind
  { idx: 14, label: 'On whether reality is what we make it' },    // 13 → 15 Simulation
  { idx: 10, label: 'On justice, sacrifice, and the one vs many' }, // 14 → 11 Sacrifice
  { idx: 12, label: 'On knowledge that isolates' },               // 15 → 13 Knowledge
  { idx: 4,  label: 'On honesty and what we owe each other' },    // 16 → 5 Truth serum
  { idx: 6,  label: 'On what others see and what we hide' },      // 17 → 7 Mind reading
  { idx: 0,  label: 'On comfort that closes off the world' },     // 18 → 1 Happiness Machine
  { idx: 13, label: 'On rules, fairness, and what we owe' },      // 19 → 14 Justice
  { idx: 7,  label: 'On loneliness and belonging' },              // 20 → 8 Last human
  { idx: 9,  label: 'On who chooses your life for you' },         // 21 → 10 Ethical AI
  { idx: 8,  label: 'On what is and isn\'t in our control' },     // 22 → 9 Free will
  { idx: 0,  label: 'On pleasure, meaning, and the good life' },  // 23 → 1 Happiness Machine
  { idx: 13, label: 'On owning consequences' },                   // 24 → 14 Justice
  { idx: 12, label: 'On knowing what you don\'t know' },          // 25 → 13 Knowledge
  { idx: 16, label: 'On honesty when it costs something' },       // 26 → 17 Private trust
  { idx: 13, label: 'On standing for someone who can\'t' },       // 27 → 14 Justice
  { idx: 11, label: 'On identity across change' },                // 28 → 12 Identity
  { idx: 4,  label: 'On honesty in the words we choose' },        // 29 → 5 Truth serum
  { idx: 16, label: 'On private acts and public reputation' },    // 30 → 17 Private trust
  { idx: 31, label: 'On technology that protects and controls' },  // 31 → 32 Surveillance
  { idx: 6,  label: 'On privacy when knowledge is tempting' },     // 32 → 7 Mind reading
  { idx: 3,  label: 'On memory, grief, and identity' },            // 33 → 4 Memory
  { idx: 39, label: 'On leaving Earth or repairing it' },          // 34 → 40 Space colony
  { idx: 40, label: 'On compassion beyond humanity' },             // 35 → 41 Wild suffering
  { idx: 31, label: 'On safety and civil liberty' },               // 36 → 32 Surveillance
  { idx: 48, label: 'On care when machines become patient' },      // 37 → 49 AI tutor
  { idx: 42, label: 'On speech, harm, and trust' },                // 38 → 43 Platform speech
  { idx: 0,  label: 'On comfort and the price of feeling' },       // 39 → 1 Happiness Machine
  { idx: 33, label: 'On saving the future from far away' },        // 40 → 34 Climate mirror
  { idx: 46, label: 'On restoring what humans broke' },            // 41 → 47 De-extinction
  { idx: 13, label: 'On justice after old wrongs' },               // 42 → 14 Justice
  { idx: 37, label: 'On expression in a fragile public square' },  // 43 → 38 Deepfake ban
  { idx: 10, label: 'On numbers, lives, and systems' },            // 44 → 11 Sacrifice
  { idx: 19, label: 'On fairness when starting lines differ' },    // 45 → 20 Group inclusion
  { idx: 38, label: 'On the market for inner life' },              // 46 → 39 Mood regulator
  { idx: 40, label: 'On care for creatures beyond us' },           // 47 → 41 Wild suffering
  { idx: 32, label: 'On memory that remains after us' },           // 48 → 33 AI grief
  { idx: 24, label: 'On learning what you really know' },          // 49 → 25 Honest study
  { idx: 33, label: 'On climate choices and collective limits' },  // 50 → 34 Climate mirror
];

/* =============================================
   PHILOSOPHER QUOTES
   ============================================= */
const PHILOSOPHER_QUOTES = [
  { text: 'There are only two tragedies in life: one is not getting what one wants, and the other is getting it.', author: 'Oscar Wilde' },
  { text: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.', author: 'Immanuel Kant' },
  { text: 'To live is to suffer, to survive is to find some meaning in the suffering.', author: 'Friedrich Nietzsche' },
  { text: 'The most important kind of freedom is to be what you really are. You trade in your reality for a role.', author: 'Jim Morrison' },
  { text: 'The truth is rarely pure and never simple.', author: 'Oscar Wilde' },
  { text: 'You cannot step into the same river twice, for other waters are continually flowing on.', author: 'Heraclitus' },
  { text: 'Hell is other people.', author: 'Jean-Paul Sartre' },
  { text: 'One must imagine Sisyphus happy.', author: 'Albert Camus' },
  { text: 'Everything is determined, the beginning as well as the end, by forces over which we have no control.', author: 'Albert Einstein' },
  { text: 'The question is not what you look at, but what you see.', author: 'Henry David Thoreau' },
  { text: 'The ends do not justify the means. The means express who we are.', author: 'Cornel West' },
  { text: 'Personal identity is not what matters. What matters is the fact of a person\'s existence.', author: 'Derek Parfit' },
  { text: 'The unexamined life is not worth living.', author: 'Socrates' },
  { text: 'Justice without mercy is cruelty; mercy without justice is the mother of dissolution.', author: 'Thomas Aquinas' },
  { text: 'There is nothing either good or bad, but thinking makes it so.', author: 'William Shakespeare' },
  // 16. Honest feedback
  { text: 'We are what we repeatedly do. Excellence, then, is not an act but a habit.', author: 'Aristotle' },
  // 17. Private trust
  { text: 'The superior man acts before he speaks, and afterwards speaks according to his actions.', author: 'Confucius' },
  // 18. Filter bubble
  { text: 'To will oneself free is also to will others free.', author: 'Simone de Beauvoir' },
  // 19. Fair play
  { text: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.', author: 'Immanuel Kant' },
  // 20. Group inclusion
  { text: 'The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others.', author: 'John Stuart Mill' },
  // 21. Chosen path
  { text: 'Man is condemned to be free.', author: 'Jean-Paul Sartre' },
  // 22. Stoic calm
  { text: 'Some things are in our control and others not.', author: 'Epictetus' },
  // 23. Simple pleasures
  { text: 'Nothing satisfies the man who is not satisfied with a little.', author: 'Epicurus' },
  // 24. Responsibility
  { text: 'Ask yourself at every moment, is this necessary?', author: 'Marcus Aurelius' },
  // 25. Honest study
  { text: 'Ignorance, the root and stem of every evil.', author: 'Plato' },
  // 26. Lead by example
  { text: 'When you know a thing, to hold that you know it; and when you do not know a thing, to allow that you do not know it — this is knowledge.', author: 'Confucius' },
  // 27. Defend dignity
  { text: 'I do not wish them to have power over men; but over themselves.', author: 'Mary Wollstonecraft' },
  // 28. Promise vs. pivot
  { text: 'There is nothing permanent except change.', author: 'Heraclitus' },
  // 29. Borrowed words
  { text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson' },
  // 30. Quiet donation
  { text: 'The best way to find yourself is to lose yourself in the service of others.', author: 'Mahatma Gandhi' },
  // 31. Designer child
  { text: 'Act so that the effects of your action are compatible with the permanence of genuine human life.', author: 'Hans Jonas' },
  // 32. Predictive surveillance
  { text: 'Visibility is a trap.', author: 'Michel Foucault' },
  // 33. AI grief companion
  { text: 'Life can only be understood backwards; but it must be lived forwards.', author: 'Søren Kierkegaard' },
  // 34. Climate mirror
  { text: 'The obligation of endurance gives us the right to know.', author: 'Rachel Carson' },
  // 35. Animal uplift
  { text: 'The question is not, Can they reason? nor, Can they talk? but, Can they suffer?', author: 'Jeremy Bentham' },
  // 36. Quarantine order
  { text: 'The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others.', author: 'John Stuart Mill' },
  // 37. Robot caregiver
  { text: 'Without friends no one would choose to live, though he had all other goods.', author: 'Aristotle' },
  // 38. Deepfake ban
  { text: 'The sad truth is that most evil is done by people who never make up their minds to be good or evil.', author: 'Hannah Arendt' },
  // 39. Mood regulator
  { text: 'One must still have chaos in oneself to be able to give birth to a dancing star.', author: 'Friedrich Nietzsche' },
  // 40. Space colony ticket
  { text: 'The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.', author: 'Konstantin Tsiolkovsky' },
  // 41. Wild suffering
  { text: 'Until he extends the circle of his compassion to all living things, man will not himself find peace.', author: 'Albert Schweitzer' },
  // 42. Cultural artifact
  { text: 'There is no document of civilization which is not at the same time a document of barbarism.', author: 'Walter Benjamin' },
  // 43. Platform speech
  { text: 'He who knows only his own side of the case knows little of that.', author: 'John Stuart Mill' },
  // 44. Open-source medicine
  { text: 'The idea that some lives matter less is the root of all that is wrong with the world.', author: 'Paul Farmer' },
  // 45. Blind hiring
  { text: 'Justice is the first virtue of social institutions, as truth is of systems of thought.', author: 'John Rawls' },
  // 46. Dream ads
  { text: 'In the kingdom of ends everything has either a price or a dignity.', author: 'Immanuel Kant' },
  // 47. De-extinction
  { text: 'A thing is right when it tends to preserve the integrity, stability, and beauty of the biotic community.', author: 'Aldo Leopold' },
  // 48. Dementia archive
  { text: 'Memory is the treasury and guardian of all things.', author: 'Cicero' },
  // 49. AI tutor
  { text: 'Education is not preparation for life; education is life itself.', author: 'John Dewey' },
  // 50. Water rationing
  { text: 'What is common to the greatest number has the least care bestowed upon it.', author: 'Aristotle' },
];

/* =============================================
   PHILOSOPHER QUOTES — SECOND (one per dilemma)
   ============================================= */
const PHILOSOPHER_QUOTES_2 = [
  { text: 'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.', author: 'Jean-Paul Sartre' },
  { text: 'The golden rule is that there are no golden rules.', author: 'George Bernard Shaw' },
  { text: 'It is not length of life, but depth of life.', author: 'Ralph Waldo Emerson' },
  { text: 'We are more than the sum of our knowledge; we are the products of our imagination.', author: 'Peter Salovey' },
  { text: 'All war is a symptom of man\'s failure as a thinking animal.', author: 'John Steinbeck' },
  { text: 'The only way to make sense out of change is to plunge into it, move with it, and join the dance.', author: 'Alan Watts' },
  { text: 'The secret of being miserable is to have the leisure to bother about whether you are happy or not.', author: 'George Bernard Shaw' },
  { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
  { text: 'The brain is wider than the sky.', author: 'Emily Dickinson' },
  { text: 'The measure of intelligence is the ability to change.', author: 'Albert Einstein' },
  { text: 'Act so as to treat humanity, whether in your own person or in that of any other, always as an end and never merely as a means.', author: 'Immanuel Kant' },
  { text: 'I am not what happened to me. I am what I choose to become.', author: 'Carl Jung' },
  { text: 'Doubt is the origin of wisdom.', author: 'René Descartes' },
  { text: 'The weak can never forgive. Forgiveness is the attribute of the strong.', author: 'Mahatma Gandhi' },
  { text: 'We do not receive wisdom, we must discover it for ourselves.', author: 'Marcel Proust' },
  // 16. Honest feedback
  { text: 'A friend to all is a friend to none.', author: 'Aristotle' },
  // 17. Private trust
  { text: 'A reputation once broken may possibly be repaired, but the world will always keep their eyes on the spot where the crack was.', author: 'Joseph Hall' },
  // 18. Filter bubble
  { text: 'It is the mark of an educated mind to be able to entertain a thought without accepting it.', author: 'Aristotle' },
  // 19. Fair play
  { text: 'It is not enough to do good; one must do it in the right way.', author: 'John Morley' },
  // 20. Group inclusion
  { text: 'I have learned, in whatsoever state I am, therewith to be content.', author: 'Apostle Paul' },
  // 21. Chosen path
  { text: 'In choosing himself, man chooses all men.', author: 'Jean-Paul Sartre' },
  // 22. Stoic calm
  { text: 'You have power over your mind — not outside events. Realize this, and you will find strength.', author: 'Marcus Aurelius' },
  // 23. Simple pleasures
  { text: 'It is not what we have but what we enjoy that constitutes our abundance.', author: 'Epicurus' },
  // 24. Responsibility
  { text: 'Waste no more time arguing about what a good man should be. Be one.', author: 'Marcus Aurelius' },
  // 25. Honest study
  { text: 'I know that I know nothing.', author: 'Socrates' },
  // 26. Lead by example
  { text: 'Example is not the main thing in influencing others. It is the only thing.', author: 'Albert Schweitzer' },
  // 27. Defend dignity
  { text: 'Virtue can only flourish among equals.', author: 'Mary Wollstonecraft' },
  // 28. Promise vs. pivot
  { text: 'The impediment to action advances action. What stands in the way becomes the way.', author: 'Marcus Aurelius' },
  // 29. Borrowed words
  { text: 'Employ your time in improving yourself by other men\'s writings, so that you shall gain easily what others have laboured hard for.', author: 'Socrates' },
  // 30. Quiet donation
  { text: 'The only ones among you who will be really happy are those who will have sought and found how to serve.', author: 'Albert Schweitzer' },
  // 31. Designer child
  { text: 'The deepest moral objection to enhancement lies less in the perfection it seeks than in the human disposition it expresses.', author: 'Michael Sandel' },
  // 32. Predictive surveillance
  { text: 'They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.', author: 'Benjamin Franklin' },
  // 33. AI grief companion
  { text: 'No one ever told me that grief felt so like fear.', author: 'C.S. Lewis' },
  // 34. Climate mirror
  { text: 'With great power there must also come great responsibility.', author: 'Voltaire' },
  // 35. Animal uplift
  { text: 'Justice is not only about how human beings treat one another.', author: 'Martha Nussbaum' },
  // 36. Quarantine order
  { text: 'The right to swing my fist ends where the other man\'s nose begins.', author: 'Oliver Wendell Holmes Jr.' },
  // 37. Robot caregiver
  { text: 'Caring involves stepping out of one\'s own personal frame of reference into the other\'s.', author: 'Nel Noddings' },
  // 38. Deepfake ban
  { text: 'If liberty means anything at all, it means the right to tell people what they do not want to hear.', author: 'George Orwell' },
  // 39. Mood regulator
  { text: 'The wound is the place where the Light enters you.', author: 'Rumi' },
  // 40. Space colony ticket
  { text: 'The world is a book, and those who do not travel read only one page.', author: 'Augustine of Hippo' },
  // 41. Wild suffering
  { text: 'The assumption that animals are without rights and the illusion that our treatment of them has no moral significance is a positively outrageous example of Western crudity.', author: 'Arthur Schopenhauer' },
  // 42. Cultural artifact
  { text: 'Culture belongs to all of us, but it begins somewhere.', author: 'Kwame Anthony Appiah' },
  // 43. Platform speech
  { text: 'Freedom of opinion is a farce unless factual information is guaranteed.', author: 'Hannah Arendt' },
  // 44. Open-source medicine
  { text: 'If we can prevent something bad without sacrificing anything of comparable moral importance, we ought to do it.', author: 'Peter Singer' },
  // 45. Blind hiring
  { text: 'The realization of justice requires the removal of manifest injustice.', author: 'Amartya Sen' },
  // 46. Dream ads
  { text: 'The medium is the message.', author: 'Marshall McLuhan' },
  // 47. De-extinction
  { text: 'In nature nothing exists alone.', author: 'Rachel Carson' },
  // 48. Dementia archive
  { text: 'We tell ourselves stories in order to live.', author: 'Joan Didion' },
  // 49. AI tutor
  { text: 'The classroom remains the most radical space of possibility in the academy.', author: 'bell hooks' },
  // 50. Water rationing
  { text: 'What makes it possible for people to cooperate is trust that others will also do their part.', author: 'Elinor Ostrom' },
];

/* =============================================
   OTHERS SPLIT DATA (seeded per dilemma)
   ============================================= */
const OTHERS_SPLIT = [
  { a: 38 }, { a: 61 }, { a: 44 }, { a: 29 }, { a: 53 },
  { a: 47 }, { a: 35 }, { a: 66 }, { a: 58 }, { a: 42 },
  { a: 55 }, { a: 71 }, { a: 39 }, { a: 48 }, { a: 63 },
  // 16–27
  { a: 24 }, { a: 19 }, { a: 41 }, { a: 33 }, { a: 27 },
  { a: 36 }, { a: 22 }, { a: 31 }, { a: 18 }, { a: 14 },
  { a: 46 }, { a: 28 },
  // 28–30
  { a: 39 }, { a: 52 }, { a: 64 },
  // 31–33
  { a: 57 }, { a: 46 }, { a: 62 },
  // 34–50
  { a: 41 }, { a: 58 }, { a: 49 }, { a: 35 }, { a: 44 },
  { a: 63 }, { a: 52 }, { a: 47 }, { a: 38 }, { a: 56 },
  { a: 68 }, { a: 31 }, { a: 54 }, { a: 43 }, { a: 61 },
  { a: 36 }, { a: 59 },
];

/* =============================================
   GO FURTHER DATA
   ============================================= */
const GO_FURTHER = [
  // 1. Happiness Machine
  {
    terms: ['Hedonism', 'Experience Machine', 'Nozick\'s Objection', 'Subjective Well-being'],
    books: [
      { title: 'Anarchy, State, and Utopia', author: 'Robert Nozick' },
      { title: 'The Methods of Ethics', author: 'Henry Sidgwick' },
    ],
    videos: [
      { title: 'Nozick\'s Experience Machine', url: 'https://www.youtube.com/watch?v=55TkL51iOSY' },
      { title: 'PHILOSOPHY – Hedonism & The Experience Machine', url: 'https://www.youtube.com/watch?v=yJ1dsNauhGE' },
    ],
  },
  // 2. Trolley Problem
  {
    terms: ['Utilitarianism', 'Deontology', 'Doctrine of Double Effect', 'Act vs. Omission'],
    books: [
      { title: 'Morality: An Introduction to Ethics', author: 'Bernard Williams' },
      { title: 'The Trolley Problem', author: 'Judith Jarvis Thomson' },
    ],
    videos: [
      { title: 'The Trolley Problem — Explained and Debated', url: 'https://www.youtube.com/watch?v=T0DjxbkK_Lk' },
      { title: 'What Everyone Gets Wrong About The Trolley Problem', url: 'https://www.youtube.com/watch?v=C5kIOsAq-gw' },
    ],
  },
  // 3. Immortality
  {
    terms: ['Bernard Williams\' Tedium of Immortality', 'Personal Identity', 'Epicureanism', 'Existential Finitude'],
    books: [
      { title: 'The Makropulos Case: Reflections on the Tedium of Immortality', author: 'Bernard Williams' },
      { title: 'Being Mortal', author: 'Atul Gawande' },
    ],
    videos: [
      { title: 'If You Had the Chance to Be Immortal, Would You Take It? — TED-Ed', url: 'https://www.youtube.com/watch?v=S3jqTWXwzJc' },
      { title: 'Why Consciousness is Immortal — Philosophy Documentary', url: 'https://www.youtube.com/watch?v=DNGT0uYPHAo' },
    ],
  },
  // 4. Memory Erase
  {
    terms: ['Personal Identity', 'Psychological Continuity', 'Narrative Self', 'Locke\'s Memory Theory'],
    books: [
      { title: 'Reasons and Persons', author: 'Derek Parfit' },
      { title: 'The Examined Life', author: 'Robert Nozick' },
    ],
    videos: [
      { title: 'Personal Identity: Crash Course Philosophy #19', url: 'https://www.youtube.com/watch?v=17CBP_JMCvk' },
      { title: 'Who am I? A Philosophical Inquiry — TED-Ed', url: 'https://www.youtube.com/watch?v=UHwVyplU3Pg' },
    ],
  },
  // 5. Truth Serum
  {
    terms: ['Radical Honesty', 'Kantian Ethics', 'Virtue of Honesty', 'White Lies & Social Cooperation'],
    books: [
      { title: 'Lying: Moral Choice in Public and Private Life', author: 'Sissela Bok' },
      { title: 'The Groundwork of the Metaphysics of Morals', author: 'Immanuel Kant' },
    ],
    videos: [
      { title: 'Is it Ever OK to Lie? — Philosophy Tube', url: 'https://www.youtube.com/watch?v=dqDG7V1FOqk' },
      { title: 'Kant\'s Moral Philosophy — Crash Course Philosophy #35', url: 'https://www.youtube.com/watch?v=8bIys6JoEDw' },
    ],
  },
  // 6. Time Rewind
  {
    terms: ['Temporal Paradox', 'Psychological Continuity', 'Regret & Counterfactuals', 'Identity Over Time'],
    books: [
      { title: 'Time and Free Will', author: 'Henri Bergson' },
      { title: 'Reasons and Persons', author: 'Derek Parfit' },
    ],
    videos: [
      { title: 'The Paradoxes of Time Travel — TED-Ed', url: 'https://www.youtube.com/watch?v=jKli00PQg-8' },
      { title: 'Personal Identity: Crash Course Philosophy #19', url: 'https://www.youtube.com/watch?v=17CBP_JMCvk' },
    ],
  },
  // 7. Mind Reading
  {
    terms: ['Theory of Mind', 'Privacy & Autonomy', 'Epistemic Injustice', 'Radical Transparency'],
    books: [
      { title: 'The Second Sex', author: 'Simone de Beauvoir' },
      { title: 'Privacy and Freedom', author: 'Alan Westin' },
    ],
    videos: [
      { title: 'Autonomy — Philosophy Tube', url: 'https://www.youtube.com/watch?v=gqm1ueqCRxA' },
      { title: 'How Does the Mind Work? — Daniel Dennett', url: 'https://www.youtube.com/watch?v=5I2y8KS_Z2Q' },
    ],
  },
  // 8. Last Human
  {
    terms: ['Existentialism', 'Absurdism', 'Meaning Without Others', 'Camus\' Revolt'],
    books: [
      { title: 'The Myth of Sisyphus', author: 'Albert Camus' },
      { title: 'Being and Nothingness', author: 'Jean-Paul Sartre' },
    ],
    videos: [
      { title: 'Albert Camus — The Absurd — Philosophy Tube', url: 'https://www.youtube.com/watch?v=jQOfbObFOCw' },
      { title: 'Existentialism: Crash Course Philosophy #16', url: 'https://www.youtube.com/watch?v=YaDvRdLMkHs' },
    ],
  },
  // 9. Free Will
  {
    terms: ['Hard Determinism', 'Compatibilism', 'Libertarian Free Will', 'Moral Responsibility'],
    books: [
      { title: 'Free Will', author: 'Sam Harris' },
      { title: 'Elbow Room: The Varieties of Free Will Worth Wanting', author: 'Daniel Dennett' },
    ],
    videos: [
      { title: 'Determinism vs Free Will — Crash Course Philosophy #24', url: 'https://www.youtube.com/watch?v=vCGtkDzELAI' },
      { title: 'The Free Will Delusion: Freedom, Determinism, and Compatibilism', url: 'https://www.youtube.com/watch?v=j5y6Igw4lXY' },
    ],
  },
  // 10. Ethical AI
  {
    terms: ['Algorithmic Governance', 'Technocracy', 'Autonomy vs. Efficiency', 'Value Alignment Problem'],
    books: [
      { title: 'Superintelligence', author: 'Nick Bostrom' },
      { title: 'The Alignment Problem', author: 'Brian Christian' },
    ],
    videos: [
      { title: 'The Dangers of AI — Stuart Russell at TED', url: 'https://www.youtube.com/watch?v=KsZI5oXBC0k' },
      { title: 'Philosophy of Artificial Intelligence — Crash Course', url: 'https://www.youtube.com/watch?v=R9OHn5ZF4Uo' },
    ],
  },
  // 11. Sacrifice
  {
    terms: ['Deontological Constraint', 'Rights vs. Utility', 'Innocent Shield', 'Doctrine of Double Effect'],
    books: [
      { title: 'Justice: What\'s the Right Thing to Do?', author: 'Michael Sandel' },
      { title: 'Morality: An Introduction to Ethics', author: 'Bernard Williams' },
    ],
    videos: [
      { title: 'Justice: What\'s the Right Thing to Do? (Episode 1) — Michael Sandel', url: 'https://www.youtube.com/watch?v=kBdfcR-8hEY' },
      { title: 'The Trolley Problem — Explained and Debated', url: 'https://www.youtube.com/watch?v=T0DjxbkK_Lk' },
    ],
  },
  // 12. Identity (synthetic cells)
  {
    terms: ['Ship of Theseus', 'Psychological Continuity', 'Material vs. Formal Identity', 'Bundle Theory'],
    books: [
      { title: 'Reasons and Persons', author: 'Derek Parfit' },
      { title: 'Personal Identity', author: 'John Perry (ed.)' },
    ],
    videos: [
      { title: 'PHILOSOPHY – Metaphysics: Ship of Theseus', url: 'https://www.youtube.com/watch?v=dYAoiLhOuao' },
      { title: 'The Ship of Theseus: A Philosophical Voyage', url: 'https://www.youtube.com/watch?v=x8DtuLEnHVo' },
    ],
  },
  // 13. Solitary Knowledge
  {
    terms: ['Epistemic Courage', 'Social Epistemology', 'Gettier Problem', 'The Burden of Knowing'],
    books: [
      { title: 'The Republic', author: 'Plato (Allegory of the Cave)' },
      { title: 'Knowledge and Its Limits', author: 'Timothy Williamson' },
    ],
    videos: [
      { title: 'Plato\'s Allegory of the Cave — TED-Ed', url: 'https://www.youtube.com/watch?v=1RWOpQXTltA' },
      { title: 'Epistemology: Crash Course Philosophy #13', url: 'https://www.youtube.com/watch?v=r9RI21rTDi8' },
    ],
  },
  // 14. Justice vs. Mercy
  {
    terms: ['Retributive Justice', 'Restorative Justice', 'Moral Luck', 'Redemption & Recidivism'],
    books: [
      { title: 'Punishment and Responsibility', author: 'H.L.A. Hart' },
      { title: 'Just Mercy', author: 'Bryan Stevenson' },
    ],
    videos: [
      { title: 'Retributive vs. Restorative Justice — TED-Ed', url: 'https://www.youtube.com/watch?v=Gbv5p53oTnk' },
      { title: 'Justice: What\'s the Right Thing to Do? (Episode 1) — Michael Sandel', url: 'https://www.youtube.com/watch?v=kBdfcR-8hEY' },
    ],
  },
  // 15. Simulation
  {
    terms: ['Simulation Argument', 'Nick Bostrom\'s Trilemma', 'Metaphysical Realism', 'Phenomenal Consciousness'],
    books: [
      { title: 'Simulacra and Simulation', author: 'Jean Baudrillard' },
      { title: 'The Simulation Hypothesis', author: 'Rizwan Virk' },
    ],
    videos: [
      { title: 'The Simulation Hypothesis — Full Documentary', url: 'https://www.youtube.com/watch?v=BG-E6WJNeEE' },
      { title: 'Simulation Theory Revealed — Rizwan Virk', url: 'https://www.youtube.com/watch?v=VovnnzsXVGc' },
    ],
  },
  // 16. Honest feedback
  {
    terms: ['Virtue Ethics', 'Golden Mean', 'Aristotelian Friendship', 'Sincerity vs. Tact'],
    books: [
      { title: 'Nicomachean Ethics', author: 'Aristotle' },
      { title: 'Lying', author: 'Sam Harris' },
    ],
    videos: [
      { title: 'Aristotle & Virtue Theory — Crash Course Philosophy #38', url: 'https://www.youtube.com/watch?v=PrvtOWEXDIQ' },
      { title: 'How to Give Honest Feedback Kindly — Kim Scott', url: 'https://www.youtube.com/watch?v=l_yWnQ0FrAo' },
    ],
  },
  // 17. Private trust
  {
    terms: ['Confucian Virtue (Ren)', 'Trust & Promise-Keeping', 'Privacy Ethics', 'Reputation vs. Character'],
    books: [
      { title: 'The Analects', author: 'Confucius' },
      { title: 'A Theory of Justice', author: 'John Rawls' },
    ],
    videos: [
      { title: 'Confucius — Crash Course Philosophy #6', url: 'https://www.youtube.com/watch?v=5J8CYP1J3aw' },
      { title: 'The Ethics of Privacy — TED-Ed', url: 'https://www.youtube.com/watch?v=KikuvdvyKvo' },
    ],
  },
  // 18. Filter bubble
  {
    terms: ['Filter Bubble', 'Algorithmic Curation', 'Solidarity', 'Existentialist Ethics'],
    books: [
      { title: 'The Ethics of Ambiguity', author: 'Simone de Beauvoir' },
      { title: 'The Filter Bubble', author: 'Eli Pariser' },
    ],
    videos: [
      { title: 'Beware Online Filter Bubbles — Eli Pariser TED Talk', url: 'https://www.youtube.com/watch?v=B8ofWFx525s' },
      { title: 'Simone de Beauvoir — Existentialism is a Humanism', url: 'https://www.youtube.com/watch?v=O4TJ0aVVPDg' },
    ],
  },
  // 19. Fair play
  {
    terms: ['Categorical Imperative', 'Letter vs. Spirit of the Law', 'Sportsmanship', 'Universalisability'],
    books: [
      { title: 'Groundwork of the Metaphysics of Morals', author: 'Immanuel Kant' },
      { title: 'A Theory of Justice', author: 'John Rawls' },
    ],
    videos: [
      { title: 'Kant\'s Categorical Imperative — Crash Course Philosophy #35', url: 'https://www.youtube.com/watch?v=8bIys6JoEDw' },
      { title: 'What Is Cheating? — The Ethics of Fair Play', url: 'https://www.youtube.com/watch?v=zXmRgI-_qJo' },
    ],
  },
  // 20. Group inclusion
  {
    terms: ['Utilitarianism', 'Harm Principle', 'Dignity', 'Inclusive Cooperation'],
    books: [
      { title: 'On Liberty', author: 'John Stuart Mill' },
      { title: 'Utilitarianism', author: 'John Stuart Mill' },
    ],
    videos: [
      { title: 'Utilitarianism — Crash Course Philosophy #36', url: 'https://www.youtube.com/watch?v=-a739VjqdSI' },
      { title: 'On Liberty — Mill\'s Harm Principle Explained', url: 'https://www.youtube.com/watch?v=H1y0aKbMvhc' },
    ],
  },
  // 21. Chosen path
  {
    terms: ['Existentialism', 'Authenticity', 'Bad Faith', 'Radical Freedom'],
    books: [
      { title: 'Existentialism Is a Humanism', author: 'Jean-Paul Sartre' },
      { title: 'Being and Nothingness', author: 'Jean-Paul Sartre' },
    ],
    videos: [
      { title: 'Existentialism — Crash Course Philosophy #16', url: 'https://www.youtube.com/watch?v=YaDvRdLMkHs' },
      { title: 'Sartre on Bad Faith — Philosophy Tube', url: 'https://www.youtube.com/watch?v=6PhEf5XUW-c' },
    ],
  },
  // 22. Stoic calm
  {
    terms: ['Stoicism', 'Dichotomy of Control', 'Apatheia', 'Digital Self-Discipline'],
    books: [
      { title: 'Enchiridion', author: 'Epictetus' },
      { title: 'A Guide to the Good Life', author: 'William B. Irvine' },
    ],
    videos: [
      { title: 'The Philosophy of Stoicism — TED-Ed', url: 'https://www.youtube.com/watch?v=R9OCA6UFE-0' },
      { title: 'Epictetus and the Art of Not Reacting — Einzelganger', url: 'https://www.youtube.com/watch?v=mu1V01jSAYo' },
    ],
  },
  // 23. Simple pleasures
  {
    terms: ['Epicureanism', 'Hedonic Adaptation', 'Eudaimonia', 'Anti-Consumerism'],
    books: [
      { title: 'Letter to Menoeceus', author: 'Epicurus' },
      { title: 'How to Be an Epicurean', author: 'Catherine Wilson' },
    ],
    videos: [
      { title: 'PHILOSOPHY — Epicurus', url: 'https://www.youtube.com/watch?v=icYZWXJqSiI' },
      { title: 'The Epicurean Recipe for Happiness', url: 'https://www.youtube.com/watch?v=YWUnfM3v7-c' },
    ],
  },
  // 24. Responsibility
  {
    terms: ['Stoic Duty', 'Moral Courage', 'Accountability', 'Whistleblowing'],
    books: [
      { title: 'Meditations', author: 'Marcus Aurelius' },
      { title: 'Extreme Ownership', author: 'Jocko Willink' },
    ],
    videos: [
      { title: 'Marcus Aurelius — How to Take Responsibility', url: 'https://www.youtube.com/watch?v=NKj5tg6n0vk' },
      { title: 'The Power of Owning Your Mistakes — TEDx', url: 'https://www.youtube.com/watch?v=mZyB7IF4hHs' },
    ],
  },
  // 25. Honest study
  {
    terms: ['Socratic Ignorance', 'Academic Integrity', 'Intellectual Virtue', 'Self-Deception'],
    books: [
      { title: 'The Republic', author: 'Plato' },
      { title: 'Apology', author: 'Plato' },
    ],
    videos: [
      { title: 'Plato\'s Allegory of the Cave — TED-Ed', url: 'https://www.youtube.com/watch?v=1RWOpQXTltA' },
      { title: 'The Socratic Method — Crash Course Philosophy #2', url: 'https://www.youtube.com/watch?v=dR1s2DtUMI8' },
    ],
  },
  // 26. Lead by example
  {
    terms: ['Confucian Leadership', 'Ren and Li', 'Servant Leadership', 'Authority vs. Authenticity'],
    books: [
      { title: 'The Analects', author: 'Confucius' },
      { title: 'The Tao of Leadership', author: 'John Heider' },
    ],
    videos: [
      { title: 'Confucius — Crash Course Philosophy #6', url: 'https://www.youtube.com/watch?v=5J8CYP1J3aw' },
      { title: 'Why Good Leaders Make You Feel Safe — Simon Sinek', url: 'https://www.youtube.com/watch?v=lmyZMtPVodo' },
    ],
  },
  // 27. Defend dignity
  {
    terms: ['Moral Courage', 'Dignity', 'Bystander Effect', 'Feminist Ethics'],
    books: [
      { title: 'A Vindication of the Rights of Woman', author: 'Mary Wollstonecraft' },
      { title: 'On Tyranny', author: 'Timothy Snyder' },
    ],
    videos: [
      { title: 'Mary Wollstonecraft — The Forgotten Feminist Philosopher', url: 'https://www.youtube.com/watch?v=q-cJUJ0AldA' },
      { title: 'The Bystander Effect — TED-Ed', url: 'https://www.youtube.com/watch?v=BdpBxoO5Qz4' },
    ],
  },
  // 28. Promise vs. pivot
  {
    terms: ['Promise-Keeping', 'Personal Identity over Time', 'Practical Wisdom', 'Akrasia'],
    books: [
      { title: 'After Virtue', author: 'Alasdair MacIntyre' },
      { title: 'Reasons and Persons', author: 'Derek Parfit' },
    ],
    videos: [
      { title: 'Heraclitus — The Philosophy of Change', url: 'https://www.youtube.com/watch?v=PmHFAuY5GBI' },
      { title: 'Should You Always Keep Your Promises? — Philosophy Tube', url: 'https://www.youtube.com/watch?v=eIho2S0ZahI' },
    ],
  },
  // 29. Borrowed words
  {
    terms: ['Authenticity', 'Sincerity', 'Authorship', 'Mediated Communication'],
    books: [
      { title: 'Sincerity and Authenticity', author: 'Lionel Trilling' },
      { title: 'The Shallows: What the Internet Is Doing to Our Brains', author: 'Nicholas Carr' },
    ],
    videos: [
      { title: 'Authenticity — The School of Life', url: 'https://www.youtube.com/watch?v=BbcwomSiGzc' },
      { title: 'Emerson on Self-Reliance', url: 'https://www.youtube.com/watch?v=ueB89GRtCpI' },
    ],
  },
  // 30. Quiet donation
  {
    terms: ['Effective Altruism', 'Maimonides\' Ladder of Charity', 'Virtue Signalling', 'Moral Witness'],
    books: [
      { title: 'The Life You Can Save', author: 'Peter Singer' },
      { title: 'Strangers Drowning', author: 'Larissa MacFarquhar' },
    ],
    videos: [
      { title: 'Peter Singer — The Why and How of Effective Altruism (TED)', url: 'https://www.youtube.com/watch?v=Diuv3XZQXyc' },
      { title: 'Maimonides\' Eight Levels of Giving', url: 'https://www.youtube.com/watch?v=oYgAi0pUkfk' },
    ],
  },
  // 31. Designer child
  {
    terms: ['Bioethics', 'Liberal Eugenics', 'Justice as Fairness', 'Parental Responsibility'],
    books: [
      { title: 'The Case Against Perfection', author: 'Michael Sandel' },
      { title: 'The Imperative of Responsibility', author: 'Hans Jonas' },
    ],
    videos: [
      { title: 'Genetic Engineering Will Change Everything Forever - CRISPR', url: 'https://www.youtube.com/watch?v=jAhjPd4uNFY' },
      { title: 'Michael Sandel - The Case Against Perfection', url: 'https://www.youtube.com/watch?v=G9M4S5IRZ8A' },
    ],
  },
  // 32. Predictive surveillance
  {
    terms: ['Panopticon', 'Civil Liberties', 'Public Safety', 'Proportionality Principle'],
    books: [
      { title: 'Discipline and Punish', author: 'Michel Foucault' },
      { title: 'The Age of Surveillance Capitalism', author: 'Shoshana Zuboff' },
    ],
    videos: [
      { title: 'Michel Foucault: The Panopticon', url: 'https://www.youtube.com/watch?v=FUyB0Tsj6jE' },
      { title: 'How China Tracks Everyone', url: 'https://www.youtube.com/watch?v=CLo3e1Pak-Y' },
    ],
  },
  // 33. AI grief companion
  {
    terms: ['Continuing Bonds', 'Digital Afterlife', 'Authenticity', 'Ethics of Mourning'],
    books: [
      { title: 'A Grief Observed', author: 'C.S. Lewis' },
      { title: 'The Year of Magical Thinking', author: 'Joan Didion' },
    ],
    videos: [
      { title: 'Digital Afterlife: When AI Recreates the Dead', url: 'https://www.youtube.com/watch?v=0p8HZVCZSkc' },
      { title: 'What Grief Does to Your Brain', url: 'https://www.youtube.com/watch?v=4GDTbtePHUU' },
    ],
  },
  // 34. Climate mirror
  {
    terms: ['Geoengineering', 'Climate Justice', 'Precautionary Principle', 'Collective Risk'],
    books: [
      { title: 'Under a White Sky', author: 'Elizabeth Kolbert' },
      { title: 'The Planet Remade', author: 'Oliver Morton' },
    ],
    videos: [
      { title: 'Geoengineering: A Horrible Idea We Might Have to Do', url: 'https://www.youtube.com/watch?v=dSu5sXmsur4' },
      { title: 'Can Geoengineering Save Us from Climate Change?', url: 'https://www.youtube.com/watch?v=aln6QVEgstw' },
    ],
  },
  // 35. Animal uplift
  {
    terms: ['Animal Ethics', 'Moral Status', 'Cognitive Enhancement', 'Paternalism'],
    books: [
      { title: 'Animal Liberation', author: 'Peter Singer' },
      { title: 'Frontiers of Justice', author: 'Martha Nussbaum' },
    ],
    videos: [
      { title: 'Peter Singer: The Why and How of Animal Rights', url: 'https://www.youtube.com/watch?v=gxxPYCxDdcM' },
      { title: 'The Ethics of Animal Enhancement', url: 'https://www.youtube.com/watch?v=uQW6D4nN8Cc' },
    ],
  },
  // 36. Quarantine order
  {
    terms: ['Public Health Ethics', 'Civil Liberty', 'Emergency Powers', 'Harm Principle'],
    books: [
      { title: 'On Liberty', author: 'John Stuart Mill' },
      { title: 'The Rules of Contagion', author: 'Adam Kucharski' },
    ],
    videos: [
      { title: 'Public Health Ethics: Thinking about Bioethics', url: 'https://www.youtube.com/watch?v=06hS5Tz3ShE' },
      { title: 'John Stuart Mill and the Harm Principle', url: 'https://www.youtube.com/watch?v=Kg_47J6sy3A' },
    ],
  },
  // 37. Robot caregiver
  {
    terms: ['Care Ethics', 'Elder Care', 'Automation', 'Dignity'],
    books: [
      { title: 'Caring', author: 'Nel Noddings' },
      { title: 'Alone Together', author: 'Sherry Turkle' },
    ],
    videos: [
      { title: 'Can Robots Care for Us?', url: 'https://www.youtube.com/watch?v=TRzBk_KuIaM' },
      { title: 'Sherry Turkle: Connected, but Alone?', url: 'https://www.youtube.com/watch?v=t7Xr3AsBEK4' },
    ],
  },
  // 38. Deepfake ban
  {
    terms: ['Free Speech', 'Deepfakes', 'Political Satire', 'Information Trust'],
    books: [
      { title: 'On Liberty', author: 'John Stuart Mill' },
      { title: 'Truth and Politics', author: 'Hannah Arendt' },
    ],
    videos: [
      { title: 'Deepfakes and the Future of Truth', url: 'https://www.youtube.com/watch?v=gLoI9hAX9dw' },
      { title: 'Free Speech: Crash Course Government and Politics', url: 'https://www.youtube.com/watch?v=Zeeq0qaEaLw' },
    ],
  },
  // 39. Mood regulator
  {
    terms: ['Neuroethics', 'Emotional Authenticity', 'Mental Health', 'Medical Enhancement'],
    books: [
      { title: 'Brave New World', author: 'Aldous Huxley' },
      { title: 'Listening to Prozac', author: 'Peter D. Kramer' },
    ],
    videos: [
      { title: 'Neuroethics: Ethics and the Brain', url: 'https://www.youtube.com/watch?v=3yNQ4VZ6Zp4' },
      { title: 'What Antidepressants Actually Do', url: 'https://www.youtube.com/watch?v=q5NkUPMDoO4' },
    ],
  },
  // 40. Space colony ticket
  {
    terms: ['Longtermism', 'Duties to Home', 'Species Survival', 'Exploration Ethics'],
    books: [
      { title: 'The Precipice', author: 'Toby Ord' },
      { title: 'The Case for Space', author: 'Robert Zubrin' },
    ],
    videos: [
      { title: 'Elon Musk: Making Humans a Multiplanetary Species', url: 'https://www.youtube.com/watch?v=H7Uyfqi_TE8' },
      { title: 'Longtermism: The Future of Humanity', url: 'https://www.youtube.com/watch?v=vvehj0KvzKQ' },
    ],
  },
  // 41. Wild suffering
  {
    terms: ['Wild Animal Suffering', 'Ecological Humility', 'Compassion', 'Nonhuman Ethics'],
    books: [
      { title: 'The Expanding Circle', author: 'Peter Singer' },
      { title: 'A Sand County Almanac', author: 'Aldo Leopold' },
    ],
    videos: [
      { title: 'Should We Intervene in Nature to Help Wild Animals?', url: 'https://www.youtube.com/watch?v=cp1qpzXe2Yw' },
      { title: 'Aldo Leopold and the Land Ethic', url: 'https://www.youtube.com/watch?v=4k2o6d4lZJ0' },
    ],
  },
  // 42. Cultural artifact
  {
    terms: ['Repatriation', 'Cultural Heritage', 'Restorative Justice', 'Museum Ethics'],
    books: [
      { title: 'Loot', author: 'Sharon Waxman' },
      { title: 'Cosmopolitanism', author: 'Kwame Anthony Appiah' },
    ],
    videos: [
      { title: 'Should Museums Return Their Colonial Artefacts?', url: 'https://www.youtube.com/watch?v=HO0q2F0P-hA' },
      { title: 'The British Museum and Repatriation', url: 'https://www.youtube.com/watch?v=YQ0z0NQKe3A' },
    ],
  },
  // 43. Platform speech
  {
    terms: ['Content Moderation', 'Misinformation', 'Free Expression', 'Platform Power'],
    books: [
      { title: 'The Constitution of Knowledge', author: 'Jonathan Rauch' },
      { title: 'Custodians of the Internet', author: 'Tarleton Gillespie' },
    ],
    videos: [
      { title: 'How Platforms Decide What Counts as Misinformation', url: 'https://www.youtube.com/watch?v=leX541Dr2rU' },
      { title: 'The Future of Free Speech Online', url: 'https://www.youtube.com/watch?v=H8zT9b8M2qA' },
    ],
  },
  // 44. Open-source medicine
  {
    terms: ['Patent Ethics', 'Access to Medicine', 'Innovation Incentives', 'Health Justice'],
    books: [
      { title: 'Pathologies of Power', author: 'Paul Farmer' },
      { title: 'The Life You Can Save', author: 'Peter Singer' },
    ],
    videos: [
      { title: 'Why Are Prescription Drugs So Expensive?', url: 'https://www.youtube.com/watch?v=3tK_UHD1pD8' },
      { title: 'Paul Farmer: On Health and Human Rights', url: 'https://www.youtube.com/watch?v=V3xrxA8mF5U' },
    ],
  },
  // 45. Blind hiring
  {
    terms: ['Meritocracy', 'Equality of Opportunity', 'Contextual Fairness', 'Bias Reduction'],
    books: [
      { title: 'A Theory of Justice', author: 'John Rawls' },
      { title: 'The Idea of Justice', author: 'Amartya Sen' },
    ],
    videos: [
      { title: 'John Rawls: A Theory of Justice', url: 'https://www.youtube.com/watch?v=5-JQ17X6VNg' },
      { title: 'How Blind Auditions Changed Orchestras', url: 'https://www.youtube.com/watch?v=QxG2kX9G9dA' },
    ],
  },
  // 46. Dream ads
  {
    terms: ['Mental Privacy', 'Commodification', 'Consent', 'Attention Economy'],
    books: [
      { title: 'The Attention Merchants', author: 'Tim Wu' },
      { title: 'The Medium is the Massage', author: 'Marshall McLuhan' },
    ],
    videos: [
      { title: 'The Attention Economy Explained', url: 'https://www.youtube.com/watch?v=50f4mDgHc4M' },
      { title: 'Marshall McLuhan: The Medium is the Message', url: 'https://www.youtube.com/watch?v=ImaH51F4HBw' },
    ],
  },
  // 47. De-extinction
  {
    terms: ['De-extinction', 'Conservation Ethics', 'Ecological Restoration', 'Moral Repair'],
    books: [
      { title: 'Bring Back the King', author: 'Helen Pilcher' },
      { title: 'A Sand County Almanac', author: 'Aldo Leopold' },
    ],
    videos: [
      { title: 'Should We Bring Extinct Animals Back to Life?', url: 'https://www.youtube.com/watch?v=8oLhvD6Kn3E' },
      { title: 'De-Extinction: Bringing Back the Mammoth', url: 'https://www.youtube.com/watch?v=Hjwyb5BbS6g' },
    ],
  },
  // 48. Dementia archive
  {
    terms: ['Narrative Identity', 'Dementia Ethics', 'Privacy After Decline', 'Family Memory'],
    books: [
      { title: 'The Self and Memory', author: 'John Locke' },
      { title: 'Still Alice', author: 'Lisa Genova' },
    ],
    videos: [
      { title: 'What Is Dementia?', url: 'https://www.youtube.com/watch?v=HobxLbPhrMc' },
      { title: 'The Ethics of Memory and Identity', url: 'https://www.youtube.com/watch?v=17CBP_JMCvk' },
    ],
  },
  // 49. AI tutor
  {
    terms: ['Education Ethics', 'Human Development', 'AI Tutoring', 'Relational Learning'],
    books: [
      { title: 'Democracy and Education', author: 'John Dewey' },
      { title: 'Teaching to Transgress', author: 'bell hooks' },
    ],
    videos: [
      { title: 'How AI Could Save Education', url: 'https://www.youtube.com/watch?v=hJP5GqnTrNo' },
      { title: 'John Dewey and Progressive Education', url: 'https://www.youtube.com/watch?v=opXKmwg8VQM' },
    ],
  },
  // 50. Water rationing
  {
    terms: ['Climate Adaptation', 'Resource Justice', 'Collective Responsibility', 'Scarcity Ethics'],
    books: [
      { title: 'Governing the Commons', author: 'Elinor Ostrom' },
      { title: 'The Uninhabitable Earth', author: 'David Wallace-Wells' },
    ],
    videos: [
      { title: 'Elinor Ostrom: Governing the Commons', url: 'https://www.youtube.com/watch?v=ByXM47Ri1Kc' },
      { title: 'How Cape Town Avoided Running Out of Water', url: 'https://www.youtube.com/watch?v=O7m7Fo6I6rU' },
    ],
  },
];

const DILEMMAS = [
  {
    id: 1,
    text: 'A perfect "Happiness Machine" can simulate an entire life of joy and meaning, indistinguishable from reality. Once connected, you can never leave.',
    optA: 'Plug in forever',
    optB: 'Stay in uncertain real life',
    reflection: { a: 'If joy is all that matters, the machine delivers. But is happiness without truth still happiness?', b: 'You chose the rawness of reality — imperfect, but yours. Authenticity over comfort.' },
    image: 'images/01-happiness-machine.png',
    tags: ['Well-being', 'VR', 'Tech'],
  },
  {
    id: 2,
    text: 'A runaway trolley will kill five people. You can pull a lever to divert it — but it will kill one person on the other track. That person is someone you love.',
    optA: 'Pull the lever',
    optB: 'Do nothing',
    reflection: { a: 'You weighed five lives against one. The math is clear — but the grief is yours alone.', b: 'Inaction feels different from action, even when the outcome is worse. Is there a moral difference?' },
    image: 'images/02-trolley.png',
    tags: ['Life & Death', 'Self-driving', 'Law'],
  },
  {
    id: 3,
    text: 'You are offered true immortality — you will never age, never die. But everyone you love will. You will watch them all pass, forever.',
    optA: 'Accept immortality',
    optB: 'Decline and live a mortal life',
    reflection: { a: 'Infinite time to learn, to create, to witness. But infinite loneliness follows infinite love.', b: 'You chose the finite — the beautiful constraint that makes each moment irreplaceable.' },
    image: 'images/03-immortality.png',
    tags: ['Longevity', 'Healthcare', 'Identity'],
  },
  {
    id: 4,
    text: 'You can erase one specific memory forever — the most painful moment of your life. But that memory shaped who you are today.',
    optA: 'Erase the memory',
    optB: 'Keep the pain',
    reflection: { a: 'Relief now. But who are you without the scar that taught you to be stronger?', b: 'You carry the weight willingly, knowing it forged something in you that comfort never could.' },
    image: 'images/04-memory-erase.png',
    tags: ['Mental Health', 'Neuroscience', 'Trauma'],
  },
  {
    id: 5,
    text: 'A serum exists that forces you to tell the absolute truth for the rest of your life. No lies, no white lies, no tactful silence. Ever.',
    optA: 'Take the truth serum',
    optB: 'Keep the ability to lie',
    reflection: { a: 'Radical honesty — liberating, terrifying, and deeply lonely. Some truths are better left unspoken.', b: 'You preserved the social fabric of kindness. But at what cost to your own integrity?' },
    image: 'images/05-truth-serum.png',
    tags: ['Honesty', 'Politics', 'Trust'],
  },
  {
    id: 6,
    text: 'You can rewind time to any moment in your past and relive your life from that point. But you lose all memories of everything that came after.',
    optA: 'Rewind time',
    optB: 'Accept the present',
    reflection: { a: 'A second chance — but blind. Without memory of your mistakes, will you simply make them again?', b: 'You trust that the path you walked, however imperfect, led you exactly here for a reason.' },
    image: 'images/06-time-rewind.png',
    tags: ['Regret', 'Identity', 'Time'],
  },
  {
    id: 7,
    text: 'You gain the ability to read everyone\'s thoughts. You cannot turn it off. You will know what everyone truly thinks — about everything, about you.',
    optA: 'Accept mind reading',
    optB: 'Remain in the dark',
    reflection: { a: 'Total knowledge of others — and total loss of trust. Knowing everything about someone is not the same as knowing them.', b: 'Mystery is what makes connection possible. You chose not to see behind every mask.' },
    image: 'images/07-mind-reading.png',
    tags: ['Privacy', 'Surveillance', 'Relationships'],
  },
  {
    id: 8,
    text: 'You are the last human alive. You have everything you need to survive comfortably. But there is no one left to share it with. Do you keep living?',
    optA: 'Keep living',
    optB: 'Choose to stop',
    reflection: { a: 'You find meaning in existence itself — the sunrise, the wind, the act of simply being.', b: 'Connection is what made life meaningful. Without it, survival becomes a sentence.' },
    image: 'images/08-last-human.png',
    tags: ['Loneliness', 'Meaning', 'Euthanasia'],
  },
  {
    id: 9,
    text: 'Science proves with certainty that free will does not exist — every choice you\'ve ever made was predetermined. Does this change how you live?',
    optA: 'It changes everything',
    optB: 'It changes nothing',
    reflection: { a: 'If choice is an illusion, responsibility dissolves. But so does regret — and so does pride.', b: 'Even if the universe wrote the script, you are still the one who has to perform it. The experience of choosing remains.' },
    image: 'images/09-free-will.png',
    tags: ['Free Will', 'Criminal Law', 'Neuroscience'],
  },
  {
    id: 10,
    text: 'An AI can make all major decisions for humanity — politics, economics, ethics — perfectly and without bias. Humans are removed from power. Do you accept?',
    optA: 'Let the AI decide',
    optB: 'Keep flawed human leadership',
    reflection: { a: 'Perfect decisions, zero agency. Efficiency at the cost of self-determination.', b: 'You chose the messy, imperfect process of human governance — because the right to be wrong is also a right.' },
    image: 'images/10-ethical-ai.png',
    tags: ['AI', 'Democracy', 'Governance'],
  },
  {
    id: 11,
    text: 'You can save a thousand strangers by sacrificing one person who trusts you completely and has done nothing wrong.',
    optA: 'Sacrifice the one',
    optB: 'Refuse to act',
    reflection: { a: 'A thousand lives weigh heavy. But you betrayed trust — the one currency that cannot be repaid.', b: 'You refused to trade innocence for numbers. Some lines cannot be crossed, no matter the math.' },
    image: 'images/11-sacrifice.png',
    tags: ['Organ Donation', 'War', 'Life & Death'],
  },
  {
    id: 12,
    text: 'Every cell in your body is gradually replaced with an identical synthetic one. When the last original cell is gone — are you still you?',
    optA: 'Yes, I am still me',
    optB: 'No, the original is gone',
    reflection: { a: 'Identity as continuity — if the pattern persists, the person persists.', b: 'If every piece is replaced, what remains is a copy. A perfect one, perhaps — but a copy nonetheless.' },
    image: 'images/12-identity.png',
    tags: ['Biotech', 'Identity', 'Transplant'],
  },
  {
    id: 13,
    text: 'You can learn the answer to any one question about the universe — but the knowledge will isolate you, because no one else will believe you.',
    optA: 'Ask the question',
    optB: 'Live without knowing',
    reflection: { a: 'Truth at the cost of belonging. You will know — and carry it alone forever.', b: 'Shared ignorance is warmer than solitary knowledge. You chose the comfort of the campfire over the cold light of certainty.' },
    image: 'images/13-knowledge.png',
    tags: ['Whistleblowing', 'Truth', 'Science'],
  },
  {
    id: 14,
    text: 'A criminal who committed a terrible act has genuinely reformed and become a force for good. Justice demands punishment. Mercy demands forgiveness. You decide.',
    optA: 'Punish them',
    optB: 'Forgive them',
    reflection: { a: 'Justice serves the past — it says actions have consequences, always.', b: 'Mercy serves the future — it says people are more than their worst moment.' },
    image: 'images/14-justice.png',
    tags: ['Criminal Justice', 'Prison Reform', 'Mercy'],
  },
  {
    id: 15,
    text: 'You discover irrefutable proof that your entire reality is a simulation. Everything you love, everything you\'ve built — none of it is "real." Does it matter?',
    optA: 'It matters — everything is a lie',
    optB: 'It doesn\'t matter — my experience is real',
    reflection: { a: 'Truth above all — even when truth destroys meaning.', b: 'If the love felt real, the pain felt real, the growth felt real — then it was real. Reality is what you live, not what you\'re made of.' },
    image: 'images/15-simulation.png',
    tags: ['Reality', 'AI', 'Consciousness'],
  },
  {
    id: 16,
    text: 'A friend asks for praise on work you think is weak. Honest feedback may sting; easy praise may protect their mood.',
    optA: 'Give kind but honest feedback',
    optB: 'Give the praise they want',
    reflection: { a: 'Truth, gently delivered, is one of the deepest gifts a friend can give. Growth needs a little air.', b: 'You chose the soft answer. Their mood is safe — but their next step may not be.' },
    image: 'images/16-honest-feedback.png',
    tags: ['Friendship', 'Honesty', 'Virtue'],
  },
  {
    id: 17,
    text: 'You can become famous overnight by sharing a private story about someone who trusted you. No one will know it was wrong.',
    optA: 'Post it and gain attention',
    optB: 'Protect the person\'s trust',
    reflection: { a: 'The crowd remembers your name today. The person who trusted you remembers something else.', b: 'Character is what you do when no one is watching. You chose loyalty over a louder version of yourself.' },
    image: 'images/17-private-trust.png',
    tags: ['Privacy', 'Trust', 'Character'],
  },
  {
    id: 18,
    text: 'A social app can show you only posts that make you happy. You will feel calm — but you may stop seeing what others suffer.',
    optA: 'Turn it on for peace of mind',
    optB: 'Keep seeing the wider world',
    reflection: { a: 'Calm is real, and rare. But a feed that hides the world is a small machine for narrowing the heart.', b: 'You stayed inside the noise. Compassion costs attention — and you chose to keep paying.' },
    image: 'images/18-filter-bubble.png',
    tags: ['Social Media', 'Algorithms', 'Empathy'],
  },
  {
    id: 19,
    text: 'You find a shortcut that helps you win a contest. It breaks no written rule, but it clearly violates the spirit of the game.',
    optA: 'Use the shortcut — it\'s allowed',
    optB: 'Compete fairly even if you lose',
    reflection: { a: 'Within the rules, but outside the spirit. The trophy is real — the win, less so.', b: 'You chose the harder version of the game. The result is uncertain, but the player is intact.' },
    image: 'images/19-fair-play.png',
    tags: ['Fairness', 'Ethics', 'Competition'],
  },
  {
    id: 20,
    text: 'Your group wants to exclude one quiet member because they slow everyone down. The project would improve, but the person would be humiliated.',
    optA: 'Exclude them for better results',
    optB: 'Find a role where they can contribute',
    reflection: { a: 'The work moves faster. Someone is now standing outside, learning what your group is willing to trade.', b: 'You chose a slower path that keeps the team whole. Efficiency is not the only thing a group is for.' },
    image: 'images/20-group-inclusion.png',
    tags: ['Teamwork', 'Inclusion', 'Dignity'],
  },
  {
    id: 21,
    text: 'A perfect planner can choose your career for maximum success. You will probably be rich — but the path will not feel chosen by you.',
    optA: 'Accept the optimised path',
    optB: 'Choose your own uncertain path',
    reflection: { a: 'A life arranged for you. Comfortable, predictable — and not entirely yours to inhabit.', b: 'Freedom is heavier than success. You took the risk that the life you build is the one you actually want.' },
    image: 'images/21-chosen-path.png',
    tags: ['Career', 'Autonomy', 'Freedom'],
  },
  {
    id: 22,
    text: 'Someone insults you online. You can reply sharply and win the crowd, or ignore it and keep your peace.',
    optA: 'Reply and win the argument',
    optB: 'Ignore it and keep your peace',
    reflection: { a: 'You won the round. The crowd moved on — and so did the small piece of attention you spent.', b: 'You kept your day. Some battles are loud invitations — and the strongest answer is to decline.' },
    image: 'images/22-stoic-calm.png',
    tags: ['Stoicism', 'Self-Control', 'Online Life'],
  },
  {
    id: 23,
    text: 'You can buy a luxury item that will impress everyone, or spend the same money on a simple trip with people you love.',
    optA: 'Buy the impressive item',
    optB: 'Choose the shared experience',
    reflection: { a: 'Admiration looks like wealth. Whether it feels like wealth is a different question.', b: 'You chose memory over object. Pleasures of the simple kind tend to keep paying out.' },
    image: 'images/23-simple-pleasures.png',
    tags: ['Pleasure', 'Meaning', 'Simplicity'],
  },
  {
    id: 24,
    text: 'Your team made a mistake. If you stay quiet, no one will blame you. If you speak up, everyone may be angry.',
    optA: 'Stay quiet and avoid blame',
    optB: 'Speak up and take responsibility',
    reflection: { a: 'You are safe. The truth is also still in the room — just no longer your problem to carry.', b: 'You took the harder seat. People remember who told the truth when telling it cost something.' },
    image: 'images/24-responsibility.png',
    tags: ['Responsibility', 'Courage', 'Work'],
  },
  {
    id: 25,
    text: 'A friend offers you the exact answers before a difficult test. You could pass easily — but you would not actually know the subject.',
    optA: 'Accept the answers and pass',
    optB: 'Refuse and test what you really know',
    reflection: { a: 'A score arrives. The knowledge it claims to certify did not. The door it opens may not fit you.', b: 'You chose to find out where you actually stand. That is the only place real learning can begin.' },
    image: 'images/25-honest-study.png',
    tags: ['Integrity', 'Learning', 'Truth'],
  },
  {
    id: 26,
    text: 'You can lead by giving strict orders, or by quietly showing the standard yourself. The first is faster; the second is slower.',
    optA: 'Give strict orders for speed',
    optB: 'Lead by example',
    reflection: { a: 'The work moves — and so do the people, until they don\'t have to anymore.', b: 'You chose to model the standard rather than enforce it. Slower, but the people grow.' },
    image: 'images/26-lead-by-example.png',
    tags: ['Leadership', 'Virtue', 'Influence'],
  },
  {
    id: 27,
    text: 'A classmate is being mocked. Joining in would make you popular; defending them would make you a target.',
    optA: 'Stay safe and say nothing',
    optB: 'Defend them calmly',
    reflection: { a: 'You are unhurt. The room is unchanged. The cost of safety was paid by someone else.', b: 'You stepped between cruelty and a person. Courage rarely shouts — sometimes it just stands there.' },
    image: 'images/27-defend-dignity.png',
    tags: ['Courage', 'Bullying', 'Dignity'],
  },
  {
    id: 28,
    text: 'You made a heartfelt promise years ago. The person still counts on it, but you have changed and the promise no longer fits who you are.',
    optA: 'Keep the old promise',
    optB: 'Break it kindly and explain',
    reflection: { a: 'You honoured the past. The promise stands — even if a quieter part of you no longer does.', b: 'You chose honesty about change. A promise outgrown is heavier than one renegotiated openly.' },
    image: 'images/28-promise-pivot.png',
    tags: ['Promises', 'Change', 'Integrity'],
  },
  {
    id: 29,
    text: 'A close friend needs comforting words. You can quickly use AI to write something polished and moving — or write something clumsy in your own voice.',
    optA: 'Send the AI-polished message',
    optB: 'Send your own imperfect words',
    reflection: { a: 'The message lands beautifully. The author it credits did not quite write it — a small ghost in the warmth.', b: 'The words wobble. They are also unmistakably yours — which is most of what they came to hear.' },
    image: 'images/29-borrowed-words.png',
    tags: ['Authenticity', 'AI', 'Friendship'],
  },
  {
    id: 30,
    text: 'You can give a generous donation anonymously, or give the same amount publicly so others are inspired to give too.',
    optA: 'Give anonymously',
    optB: 'Give visibly to inspire others',
    reflection: { a: 'Pure motive, quiet hand. The recipient gains — and only they will ever know your name.', b: 'You traded a little privacy for a louder example. If others follow, the gift multiplies; if they don\'t, the spotlight stays.' },
    image: 'images/30-quiet-donation.png',
    tags: ['Generosity', 'Virtue', 'Influence'],
  },
  {
    id: 31,
    text: 'You can safely edit your future child\'s genes to prevent major diseases and improve cognitive potential. Access is expensive, so only wealthy families can do it for now.',
    optA: 'Use the enhancement',
    optB: 'Refuse and keep natural chance',
    reflection: { a: 'You chose prevention and possibility. Love can look like reducing risk - but your private choice may widen a public divide.', b: 'You protected equality in principle and accepted uncertainty in practice. Refusing control can also be a moral stand.' },
    image: 'images/31-designer-child.png',
    tags: ['Bioethics', 'Parenting', 'Justice'],
  },
  {
    id: 32,
    text: 'Your city can cut violent crime sharply by installing real-time facial recognition in all public spaces. The system works, but anonymity in daily life would largely disappear.',
    optA: 'Deploy city-wide surveillance',
    optB: 'Reject it to protect civil liberty',
    reflection: { a: 'You prioritized immediate safety. Fewer victims now may come with a long tail of power that is hard to take back.', b: 'You defended freedom from constant tracking. Liberty stays intact - and so does the burden of preventable harm.' },
    image: 'images/32-predictive-surveillance.png',
    tags: ['Privacy', 'Policing', 'Rights'],
  },
  {
    id: 33,
    text: 'After someone you love dies, an AI companion trained on their voice and messages can keep talking with you indefinitely. It feels deeply comforting, but moving on becomes harder.',
    optA: 'Keep the AI companion active',
    optB: 'Say goodbye and archive it',
    reflection: { a: 'You kept a living thread of connection. Comfort is real - and so is the question of whether healing needs distance.', b: 'You chose finality over simulation. Letting go hurts now, but it may protect the shape of memory over time.' },
    image: 'images/33-ai-grief-companion.png',
    tags: ['Grief', 'AI', 'Identity'],
  },
  {
    id: 34,
    text: 'A climate mirror in the upper atmosphere could cool the planet quickly, but it may shift rainfall patterns and no one can predict every consequence.',
    optA: 'Launch the climate mirror',
    optB: 'Reject the risky intervention',
    reflection: { a: 'You chose action at planetary scale. It may buy time for millions, but the sky becomes a system humans now manage.', b: 'You refused to gamble with the atmosphere. Prudence protects against hubris, though delay has victims too.' },
    image: 'images/34-climate-mirror.png',
    tags: ['Climate', 'Risk', 'Responsibility'],
  },
  {
    id: 35,
    text: 'Scientists can raise one animal species to near-human intelligence. They may gain richer lives, but also new fears, rights, and suffering.',
    optA: 'Give them higher intelligence',
    optB: 'Leave them as they are',
    reflection: { a: 'You opened the door to a deeper life. But every new capacity brings new needs the world may not be ready to honor.', b: 'You protected them from burdens they did not ask for. Still, restraint can look uncomfortably like keeping a door locked.' },
    image: 'images/35-animal-uplift.png',
    tags: ['Animals', 'Bioethics', 'Rights'],
  },
  {
    id: 36,
    text: 'During a dangerous outbreak, authorities can enforce a strict quarantine that saves lives but confines healthy people who may never get sick.',
    optA: 'Enforce the quarantine',
    optB: 'Preserve freedom of movement',
    reflection: { a: 'You treated risk as shared. Some innocent freedom is restricted so vulnerable people can breathe safer.', b: 'You protected movement from emergency power. Liberty stays visible, but so does the danger carried by invisible infection.' },
    image: 'images/36-quarantine-order.png',
    tags: ['Public Health', 'Liberty', 'Community'],
  },
  {
    id: 37,
    text: 'A robot caregiver can look after your elderly parent perfectly: medicine, meals, safety, patience. Human care would be warmer but less reliable.',
    optA: 'Choose the robot caregiver',
    optB: 'Choose imperfect human care',
    reflection: { a: 'You chose steadiness. Reliability is a form of love, even when it comes without a heartbeat.', b: 'You chose human presence. Imperfection remains, but so does the warmth of being cared for by another person.' },
    image: 'images/37-robot-caregiver.png',
    tags: ['Care', 'Aging', 'Automation'],
  },
  {
    id: 38,
    text: 'Deepfake videos are destabilizing elections. A law could ban realistic synthetic political media, but it would also restrict satire and protest art.',
    optA: 'Ban political deepfakes',
    optB: 'Protect synthetic expression',
    reflection: { a: 'You defended public trust in what people see. Some creative freedom is narrowed so shared reality can survive.', b: 'You defended expression at the edge of new media. The risk is that manipulation wears the costume of creativity.' },
    image: 'images/38-deepfake-ban.png',
    tags: ['Speech', 'Media', 'Democracy'],
  },
  {
    id: 39,
    text: 'A neural implant can prevent intense anxiety and sadness. It is safe, but it also softens emotional highs and the creative depth that comes with struggle.',
    optA: 'Install the mood regulator',
    optB: 'Keep the full emotional range',
    reflection: { a: 'You chose relief from the sharpest edges. A quieter mind may be worth the colors it slightly mutes.', b: 'You kept the whole weather of feeling. Depth remains, but so does the storm.' },
    image: 'images/39-mood-regulator.png',
    tags: ['Mental Health', 'Neurotech', 'Authenticity'],
  },
  {
    id: 40,
    text: 'You win a one-way ticket to the first space colony. It may help secure humanity\'s future, but you must leave everyone you love behind forever.',
    optA: 'Join the colony',
    optB: 'Stay on Earth',
    reflection: { a: 'You stepped toward a future almost no one can see yet. Survival sometimes asks for lonely pioneers.', b: 'You stayed with the people who make a future worth having. The stars can wait; loyalty is closer.' },
    image: 'images/40-space-colony-ticket.png',
    tags: ['Space', 'Duty', 'Future'],
  },
  {
    id: 41,
    text: 'New technology can reduce suffering among wild animals, preventing disease and starvation. But intervening may disrupt ecosystems we barely understand.',
    optA: 'Intervene to reduce suffering',
    optB: 'Leave wild nature alone',
    reflection: { a: 'You extended compassion beyond the human fence. Pain matters even when no one can ask for help.', b: 'You chose humility before a complex world. Not every suffering has a lever we can safely pull.' },
    image: 'images/41-wild-suffering.png',
    tags: ['Nature', 'Animals', 'Compassion'],
  },
  {
    id: 42,
    text: 'A famous artifact sits in a world museum where millions can see it. Its country of origin says it was taken under empire and must come home.',
    optA: 'Keep it in the museum',
    optB: 'Return it to its origin',
    reflection: { a: 'You preserved broad access and stable care. Shared heritage stays visible to the world, though the wound remains nearby.', b: 'You chose repair over display. Some objects belong first to the people whose history was taken with them.' },
    image: 'images/42-cultural-artifact.png',
    tags: ['Culture', 'History', 'Justice'],
  },
  {
    id: 43,
    text: 'A social platform can remove harmful misinformation before it spreads, but doing so gives a private company major power over public debate.',
    optA: 'Remove harmful misinformation',
    optB: 'Protect open debate',
    reflection: { a: 'You treated speech as action with consequences. The feed becomes safer, but the gatekeeper grows stronger.', b: 'You kept debate open, including its errors. Freedom breathes easier, but falsehood travels with it.' },
    image: 'images/43-platform-speech.png',
    tags: ['Speech', 'Platforms', 'Truth'],
  },
  {
    id: 44,
    text: 'A company owns the patent for a lifesaving medicine and charges more than many patients can pay. Hackers can release the formula for free.',
    optA: 'Release the formula',
    optB: 'Respect the patent',
    reflection: { a: 'You chose lives now over ownership rules. The medicine reaches people, even if the system that made it is shaken.', b: 'You protected incentives for future cures. The rule holds, while some people remain priced outside relief.' },
    image: 'images/44-open-source-medicine.png',
    tags: ['Healthcare', 'Property', 'Justice'],
  },
  {
    id: 45,
    text: 'A hiring system can hide names, schools, and backgrounds to reduce bias. But it also hides hardship someone overcame and context that may matter.',
    optA: 'Use blind hiring',
    optB: 'Include personal context',
    reflection: { a: 'You forced attention onto the work. The cleaner process may miss the distance some people traveled to get there.', b: 'You allowed the whole story into the room. Context can correct unfairness, but it can also invite new bias.' },
    image: 'images/45-blind-hiring.png',
    tags: ['Work', 'Fairness', 'Opportunity'],
  },
  {
    id: 46,
    text: 'A sleep clinic can cure your insomnia for free if you allow harmless ads to appear inside your dreams. Paying to avoid them is too expensive.',
    optA: 'Accept ads in dreams',
    optB: 'Protect your sleeping mind',
    reflection: { a: 'You bought rest with a private corner of attention. Relief arrives, but the market follows you into sleep.', b: 'You protected the last quiet room of the mind. The boundary stays clear, though the sleepless nights remain.' },
    image: 'images/46-dream-ads.png',
    tags: ['Privacy', 'Markets', 'Sleep'],
  },
  {
    id: 47,
    text: 'Scientists can bring back an extinct animal. It may inspire conservation, but the money could protect endangered species that are still alive.',
    optA: 'Revive the extinct species',
    optB: 'Protect living species first',
    reflection: { a: 'You chose restoration and wonder. Bringing one lost creature back may remind people what extinction means.', b: 'You chose the living over the lost. Repair begins where help can still prevent an ending.' },
    image: 'images/47-de-extinction.png',
    tags: ['Conservation', 'Science', 'Nature'],
  },
  {
    id: 48,
    text: 'Before dementia progresses, you can record every memory for your family to access later. It preserves your story, but also exposes private thoughts you may one day be unable to explain.',
    optA: 'Create the full archive',
    optB: 'Keep some memories private',
    reflection: { a: 'You turned memory into an inheritance. The people you love may know you more fully, including parts you once kept quiet.', b: 'You left mystery intact. Love does not require total access, even when time is taking pieces away.' },
    image: 'images/48-dementia-archive.png',
    tags: ['Memory', 'Family', 'Privacy'],
  },
  {
    id: 49,
    text: 'An AI tutor can personalize every lesson for every child and raise test scores dramatically. Human teachers would become mentors with less classroom control.',
    optA: 'Let AI lead the lessons',
    optB: 'Keep humans at the center',
    reflection: { a: 'You chose precise attention for every student. Learning may accelerate, though the classroom becomes less human-led.', b: 'You protected education as a relationship. Progress may be slower, but children still learn from a person.' },
    image: 'images/49-ai-tutor.png',
    tags: ['Education', 'AI', 'Childhood'],
  },
  {
    id: 50,
    text: 'A severe drought is coming. The city can ration household water equally, including for wealthy homes with gardens and pools, or rely on voluntary restraint.',
    optA: 'Impose equal rationing',
    optB: 'Trust voluntary restraint',
    reflection: { a: 'You made scarcity a shared discipline. Everyone gives something up before comfort becomes a privilege.', b: 'You trusted people to adapt without force. Freedom remains, but unequal sacrifice may follow.' },
    image: 'images/50-water-rationing.png',
    tags: ['Climate', 'Fairness', 'Community'],
  },
];

/* =============================================
   STATE
   ============================================= */
function getLocalDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getYesterdayDateKey(from = new Date()) {
  const d = new Date(from.getTime());
  d.setDate(d.getDate() - 1);
  return getLocalDateKey(d);
}

const ZH = window.APP_I18N_ZH_HANT || {};
const SUPPORTED_LANGS = ['en', 'zh-Hant'];

function detectLanguage() {
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  const normalized = String(nav).toLowerCase().replace('_', '-');
  const isTraditionalChinese =
    normalized.startsWith('zh-hant') ||
    normalized.startsWith('zh-tw') ||
    normalized.startsWith('zh-hk') ||
    normalized.startsWith('zh-mo');
  return isTraditionalChinese ? 'zh-Hant' : 'en';
}

function getLangPack(lang = 'en') {
  if (lang === 'zh-Hant') return ZH;
  return {};
}

function getUiText(lang = 'en') {
  const en = {
    htmlLang: 'en',
    locale: 'en-US',
    appTitle: 'Daily Dilemmas - Philosophy',
    logoText: 'Daily Dilemma',
    languageToggle: '中文',
    greetingLabel: 'Dilemma Today',
    weekPrefix: 'Week ',
    weekSuffix: '',
    splitTitle: 'How Others Chose',
    yourTake: 'Your Take',
    otherSide: 'Other Side',
    philosopherSays: 'Philosopher Says',
    goFurther: 'Go Further',
    askFriend: 'Ask A Friend',
    nextDilemma: 'Next \u2192',
    historyTitle: 'History',
    historyEmpty: 'No Answered Dilemmas Yet.\nChoose a side to see it here.',
    clearHistoryConfirm: 'Clear your history on this device? This cannot be undone.',
    today: 'Today',
    yesterday: 'Yesterday',
    chosePrefix: 'Chose: ',
    shareTitle: 'Share Dilemma',
    share: 'Share',
    youChose: 'You Chose:',
    brandName: 'Daily Dilemmas',
    brandLine: 'Daily Dilemmas · Philosophy',
    saveImage: 'Save Image',
    copyLink: 'Copy Link',
    copyText: 'Copy Text',
    askFriendTitle: 'Ask A Friend',
    askFriendIntro: 'Share today’s dilemma and see what they’d choose.',
    send: 'Send',
    copiedSend: 'Copied — Send It.',
    copiedText: 'Text Copied.',
    copiedLink: 'Link Copied.',
    copyFailed: 'Could Not Copy.',
    imageSaved: 'Image Saved.',
    imageFailed: 'Could Not Generate Image.',
    generating: 'Generating…',
    keyConcepts: 'Concepts',
    books: 'Books',
    watch: 'Videos',
    dilemmaImageAlt: 'Illustration for today\'s dilemma',
    notifyEnable: 'Enable daily reminder',
    notifyDisable: 'Disable daily reminder',
    notifyEnabled: 'Daily reminder enabled for {time}.',
    notifyTimeUpdated: 'Reminder time updated to {time}.',
    notifyDisabled: 'Daily reminder turned off.',
    notifyDenied: 'Notification permission is required to enable reminders.',
    notifyUnsupported: 'Notifications are available in the mobile app build.',
    notifyTitle: 'Daily Dilemma',
    notifyBody: 'A new dilemma is waiting for you today.',
    reminderTimeLabel: 'Reminder Time',
    reminderPleasePickTime: 'Choose a reminder time below.',
    meridiemAm: 'AM',
    meridiemPm: 'PM',
    menuOpen: 'Open menu',
    historyAction: 'History',
    bookmarksAction: 'Bookmarks',
    bookmarksTitle: 'Bookmarks',
    bookmarksEmpty: 'No bookmarks yet.',
    bookmarksGroupDilemmas: 'Questions',
    bookmarksGroupQuotes: 'Quotes',
    bookmarksGroupConcepts: 'Concepts',
    bookmarksGroupBooks: 'Books',
    bookmarksGroupVideos: 'Videos',
    bookmarkAdd: 'Bookmark',
    bookmarkRemove: 'Remove',
    bookmarkOpenConceptAria: 'Open concept notes',
    bookmarksForumSource: 'Forum',
    bookmarkOpenForumAria: 'Open forum dilemma',
    dailyReminderAction: 'Daily Reminder',
    removeDailyReminder: 'Remove Daily Reminder',
    addReminder: 'Add',
    removeReminder: 'Remove',
    appVersion: 'Version 1.0',
    ariaInstagram: 'Instagram',
    ariaEmailSupport: 'Email support',
    ariaAppStore: 'App Store',
    ariaPlayStore: 'Google Play',
    languageAction: 'Language',
    userFeedbackAction: 'User Feedback',
    aiAssistantAction: 'Dialogue',
    mainTabBarAria: 'Main sections',
    mainTabForum: 'Forum',
    mainTabDilemma: 'Dilemma Today',
    mainTabChat: 'Dialogue',
    mainTabProfile: 'My Type',
    mainTabKnowledge: 'Knowledge Map',
    forumTitle: 'Forum',
    forumIntro: 'Vote on questions from the community, then see how philosophers would open the discussion.',
    forumSearch: 'Search',
    forumCompose: 'Post',
    forumRefreshAria: 'Refresh dilemmas',
    forumDetailRefreshAria: 'Refresh this dilemma',
    forumDetailToolbarAria: 'Dilemma actions',
    forumActionsAria: 'Forum actions',
    forumComposeSoon: 'Posting is coming soon. This prototype uses sample community dilemmas first.',
    forumComposeTitle: 'Post a dilemma',
    forumComposeTopicLabel: 'Topic',
    forumComposeDescriptionLabel: 'Description',
    forumComposeOptionALabel: 'Vote A',
    forumComposeOptionBLabel: 'Vote B',
    forumComposeSubmit: 'Post',
    forumComposeCancel: 'Cancel',
    forumComposeCloseAria: 'Close',
    forumComposeWordCount: '{{current}} / {{max}} words',
    forumComposeRequired: 'This field is required.',
    forumComposeOverLimit: 'Keep within {{max}} words.',
    forumComposePosted: 'Your dilemma is now in the forum.',
    forumComposeGuidelinesTitle: 'Community guidelines',
    forumComposeGuidelinesIntro:
      'Before you post, keep the forum thoughtful and safe for everyone.',
    forumComposeGuidelineNoNames: 'Do not include real names or private contact details.',
    forumComposeGuidelineNoHarassment: 'No harassment, threats, or hate toward others.',
    forumComposeGuidelineNoEmergency:
      'This is not for medical, legal, or emergency advice — contact local professionals or emergency services instead.',
    forumComposeGuidelinesAccept: 'I understand and will follow these guidelines.',
    forumComposeGuidelinesRequired: 'Please confirm the community guidelines before posting.',
    forumComposeSafetyTitle: 'Safety check',
    forumComposeSafetyBlock:
      'This text may involve self-harm, abuse, or an emergency. Edit your post or seek professional help — we cannot publish it as written.',
    forumComposeSafetyWarn:
      'This may include private details or requests for professional advice. Consider removing identifying information and framing it as a philosophical dilemma only.',
    forumComposeSafetyFlagSelfHarm: 'Possible self-harm or crisis language',
    forumComposeSafetyFlagAbuse: 'Possible threats or abuse',
    forumComposeSafetyFlagCrisis: 'Possible medical emergency',
    forumComposeSafetyFlagPrivate: 'Possible private or identifying information',
    forumComposeSafetyFlagHarassment: 'Possible harassment',
    forumComposeSafetyFlagProfessional: 'Possible request for medical or legal advice',
    forumComposeSafetyAcknowledge: 'Post anyway (not professional advice)',
    forumModerationMenuAria: 'More actions',
    forumReport: 'Report',
    forumHide: 'Hide',
    forumHideConfirmTitle: 'Hide this content?',
    forumHideConfirmMessage:
      'This only hides it for you — other people can still see it. Once you hide it, you cannot bring it back.',
    forumHideConfirmButton: 'Hide',
    forumHideConfirmCancel: 'Cancel',
    forumDelete: 'Delete',
    forumDeleteConfirmTitle: 'Delete this content?',
    forumDeletePostMessage:
      'This permanently removes your dilemma, philosopher replies, comments, and votes. This cannot be undone.',
    forumDeleteCommentMessage:
      'This permanently removes your comment. This cannot be undone.',
    forumDeleteConfirmButton: 'Delete',
    forumDeleteCancel: 'Cancel',
    forumDeletePostThanks: 'Your dilemma was deleted.',
    forumDeleteCommentThanks: 'Your comment was deleted.',
    forumDeleteFailed: 'Could not delete. Try again later.',
    forumHiddenTitle: 'You hid this content',
    forumHiddenBody:
      'It is hidden from your feed only. Others can still see it, and you cannot undo this.',
    forumReportTitle: 'Report content',
    forumReportReasonHarassment: 'Harassment',
    forumReportReasonPrivate: 'Privacy',
    forumReportReasonSelfHarm: 'Self-harm',
    forumReportReasonSpam: 'Spam',
    forumReportReasonOther: 'Other',
    forumReportOtherPlaceholder: 'Describe the issue…',
    forumReportOtherRequired: 'Please add a short note for Other.',
    forumReportSubmit: 'Submit report',
    forumReportCancel: 'Cancel',
    forumReportThanks: 'Thanks — we recorded your report.',
    forumReportFailed: 'Could not submit your report. Try again later.',
    forumHideThanks: 'Hidden from your feed.',
    forumUnhideThanks: 'Restored to your feed.',
    forumEnriching: 'Philosophers are weighing in on your dilemma…',
    forumBack: 'Back to topics',
    forumTimeJustNow: 'Just now',
    forumTimeMinutes: '{{count}}m',
    forumTimeHours: '{{count}}h',
    forumTimeDays: '{{count}}d',
    forumTimeWeeks: '{{count}}w',
    forumSortLatest: 'Recent',
    forumSortPopular: 'Popular',
    forumSortSplit: 'Controversial',
    forumSortAria: 'Sort dilemmas',
    forumSearchPlaceholder: 'Search dilemmas…',
    forumSearchAria: 'Search dilemmas',
    forumListEmpty: 'No dilemmas match your search.',
    forumCommentLike: 'Like',
    forumCommentDislike: 'Dislike',
    forumCommentReply: 'Reply',
    forumPostComment: 'Post comment',
    forumPostCommentPlaceholder: 'Share your thoughts on this dilemma…',
    forumCommentPostReply: 'Post reply',
    forumCommentReplyPlaceholder: 'Write a public reply…',
    forumYouLabel: 'You',
    forumAvatarTitle: 'Choose your avatar',
    forumAvatarChoose: 'Choose avatar',
    forumAvatarClose: 'Close',
    forumPostedByAria: 'Posted by {{name}}',
    forumPhilosopherReplyBadge: 'Philosopher',
    forumPhilosopherReplying: 'Philosopher is replying…',
    forumPhilosopherThinking: '{{name}} is thinking…',
    forumLike: 'Like',
    forumDislike: 'Dislike',
    forumNetScoreAria: 'Net score {{net}}',
    forumTotalVotes: '{{count}} votes',
    forumDiscussionLabel: 'Discussion',
    forumChatWithPhilosopher: 'Dialogue',
    forumCommentChatWithPhilosopher: 'Dialogue',
    forumChatDefaultQuestion:
      'I saw this dilemma on the forum: "{{title}}". I would like your private take — how would you think about it?',
    forumCommentChatDefaultQuestion:
      'On the thread for "{{title}}", I want to discuss what {{author}} wrote. How would you respond?',
    forumConceptsLabel: 'Concepts',
    forumPhilosophersLabel: 'Philosophers enter the chat',
    forumCommentsLabel: 'Discussion preview',
    forumVoteCount: '{{count}} votes',
    forumVotePrompt: 'Which side are you on?',
    forumVoteCta: 'Vote',
    forumVotePct: '{{pct}}%',
    forumVoteGroupAria: 'Vote on this dilemma',
    forumVotedLabel: 'Your vote',
    forumShareTitle: 'Share forum dilemma',
    aiCloseToDilemmaAria: 'Back to Dilemma Today',
    aiCloseToDilemmaTitle: '',
    aiTitle: 'Dialogue',
    aiSubtitle: 'Ask about today dilemma, your own questions or anything!',
    aiSwitchGuideConfirm: 'Switch your guide to {{name}}?',
    aiStartNewWithGuideConfirm: 'Start a new conversation with {{name}}? This clears only this guide’s messages for today’s dilemma. Your other guides’ chats stay saved.\n\nClick OK to start fresh, or Cancel to keep your saved chat with this guide.',
    aiPhilosopherLabel: '',
    aiPhilosopherGroupAria: 'Choose which philosopher shapes replies',
    aiPhilosopherNames: {
      aristotle: 'Aristotle',
      plato: 'Plato',
      socrates: 'Socrates',
      confucius: 'Confucius',
      kant: 'Kant',
      laozi: 'Laozi',
      buddha: 'Buddha',
      marx: 'Marx',
    },
    aiPhilosopherVibes: {
      aristotle: 'Practical categorizer',
      plato: 'Ideal seeker',
      socrates: 'Questioning spirit',
      confucius: 'Ritual guide',
      kant: 'Iron rule keeper',
      laozi: 'Wu-wei sage',
      buddha: 'Compassionate mind',
      marx: 'System dismantler',
    },
    aiThinking: {
      aristotle: 'Aristotle is thinking…',
      plato: 'Plato is thinking…',
      socrates: 'Socrates is thinking…',
      confucius: 'Confucius is thinking…',
      kant: 'Kant is thinking…',
      laozi: 'Laozi is thinking…',
      buddha: 'Buddha is thinking…',
      marx: 'Marx is thinking…',
    },
    aiPlatoThinking: 'Plato is thinking…',
    afterAnswerChatDefaultQuestion: 'What do you think about this dilemma?',
    chatPickTitle: 'Choose a philosopher',
    chatPickBack: 'Back',
    philosopherGatewayStartChat: 'Start conversation',
    philosopherGatewayProfile: 'Learn more',
    aiStarter1: 'Why might someone pick the other side?',
    aiStarter2: 'What should I weigh most here?',
    aiStarter3: 'Explain this dilemma in plain words.',
    aiStartersLabel: 'Suggested questions',
    aiChatFontAria: 'Text size',
    aiChatFontTitle: 'Cycle text size',
    aiChatFontSmall: 'Small',
    aiChatFontMedium: 'Medium',
    aiChatFontLarge: 'Large',
    aiNewStartersAria: 'New suggested questions',
    aiNewStartersTitle: 'Pick two random suggestions',
    aiClearChatAria: 'Clear chat',
    aiClearChatTitle: 'Clear chat',
    aiClearChatConfirm: 'Clear all chat records? This cannot be undone.',
    aiClearedHint: 'Cleared.',
    aiPlaceholder: 'Ask a question…',
    aiUnavailable: 'We’re not connected to the server right now, so I can’t speak. The team’s looking into it—we’re on it, we’re on it.',
    aiSendFailed: 'Could not send message. Check your connection and try again.',
    aiErrorTechnical: 'I can’t answer you right now—the backend’s temporarily down. Come back in a bit and we’ll think it through from the start.',
    aiErrorDailyDevice: 'Even philosophers need rest: your device’s quota for today is full. After it resets tomorrow, we’ll pick up the chat again.',
    aiErrorRateMinute: 'Hold on—the system says you’ve sent too many messages in a short time. Take a sip of water and try again in a minute.',
    aiErrorNetwork: 'Your message didn’t make it out the door—most likely the network dropped. Once you’re back online, we’ll try again.',
    aiErrorUnavailable: 'We’re not connected to the server right now, so I can’t speak. The team’s looking into it—we’re on it, we’re on it.',
    aiErrorDailyApp: 'The boss’s budget is tight—today’s chat quota for the whole app is used up. Come back tomorrow and we’ll keep talking.',
    feedbackPrompt: 'Your message',
    feedbackPlaceholder: 'Share a thought, a bug, or a suggestion…',
    feedbackThanks: 'Thanks for your feedback!',
    feedbackUnavailable: 'Feedback could not be sent because the app is not connected to the server.',
    feedbackSendFailed: 'Could not send feedback. Check your connection and try again.',
    feedbackDismiss: 'Got it',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
    philosophyProfileAction: 'My Type',
    profileIntroAria: 'How My Type works',
    profileDemoMsg1: 'Answer 12 dilemma questions—each one is a short scenario with two choices (A or B).',
    profileDemoMsg2:
      'When you finish, you get your philosophy type, including your Philosophy Type, value dimensions, blind spot, and thinkers you echo.',
    profileDemoMsg3:
      'Disclaimer: This test is for reflection, learning and entertainment only. It is not professional philosophical, medical, legal or psychological advice.',
    profileImageAlt: 'Illustration for this philosophy profile question',
    profileToneGreen: 'Care & connection',
    profileToneYellow: 'Freedom & flourishing',
    profileToneBlue: 'Order & stewardship',
    profileToneRed: 'Truth & reform',
    emailMe: 'Email Me',
    emailPlaceholder: 'your@email.com',
    legalMissing: 'Legal content was not found in the Legal folder yet.',
    platoReaderKicker: 'Plato · Profile',
    platoReaderTitle: 'Plato',
    platoReaderBtn: 'Plato',
    platoReaderBtnAria: 'Open Plato profile reader',
    platoReaderBtnTitle: 'Plato — profile',
    philosopherReaderBtnAria: 'Open {{name}} profile reader',
    philosopherReaderBtnTitle: '{{name}} — profile',
    platoReaderNavAria: 'Profile sections',
    platoReaderCloseAria: 'Close',
    platoReaderPillDialogue: 'Dialogue',
    platoReaderPillJustice: 'Justice',
    platoReaderPillKnowledge: 'Knowledge',
    platoReaderPillGood: 'Good',
    platoReaderTitleIntro: 'Introduction',
    platoReaderTitleEarly: 'Early Life',
    platoReaderTitleAchieve: 'Achievement',
    platoReaderTitleIdeas: 'Ideas',
    platoReaderTitleConcepts: 'Concepts',
    platoReaderTitleBooks: 'Books',
    platoReaderTitleVideos: 'Videos',
    platoReaderBodyIntro:
      '<p><strong>Athens · Academy · Dialogue</strong> — Plato (c. 428–348 BCE) is best known for philosophical dialogues and founding the Academy in Athens.</p><p>His texts dramatize inquiry: characters argue, revisit definitions, and face puzzles—so readers train judgment, not only absorb doctrines.</p>',
    platoReaderBodyEarly:
      '<p>Born into an aristocratic Athenian family, Plato encountered politics early—and <strong>Socrates</strong> redirected him toward relentless questioning.</p><p>After Socrates’ death, Plato traveled, returned, and built the Academy as a stable home for mathematics, ethics, and statecraft.</p>',
    platoReaderBodyAchieve:
      '<p><strong>The Academy</strong> educated generations (notably Aristotle) and blended rigorous proof-culture with ethical formation.</p><p>His dialogues survived as foundational texts—preserving Socrates as a literary hero while advancing metaphysics, psychology, and political philosophy.</p>',
    platoReaderBodyIdeas:
      '<p>Plato is famous for <strong>Forms</strong>—stable intelligible patterns behind shifting appearances—and for linking knowledge, virtue, and psychological order.</p><p>Politically, he explores guardianship, education, and stability—often controversial today, always argued within dramatic context rather than as slogans.</p>',
    platoReaderBodyConcepts:
      '<ul class="plato-reader-ul"><li><strong>Form (eidos)</strong> — intelligible structure; object of refined understanding.</li><li><strong>Dialectic</strong> — disciplined discourse testing definitions and assumptions.</li><li><strong>Justice / soul</strong> — harmony of parts; education shaping desire and reason.</li></ul>',
    platoReaderBodyBooks:
      `<ul class="plato-reader-ul"><li><a href="https://www.google.com/search?q=${encodeURIComponent('Plato Republic dialogue')}" target="_blank" rel="noopener noreferrer">Republic</a> — justice, education, city & soul; cave & divided line imagery.</li><li><a href="https://www.google.com/search?q=${encodeURIComponent('Plato Symposium dialogue')}" target="_blank" rel="noopener noreferrer">Symposium</a> — love ascending toward wisdom.</li><li><a href="https://www.google.com/search?q=${encodeURIComponent('Plato Phaedo')}" target="_blank" rel="noopener noreferrer">Phaedo</a> — soul, death, and the philosophical life.</li><li><a href="https://www.google.com/search?q=${encodeURIComponent('Plato Meno dialogue')}" target="_blank" rel="noopener noreferrer">Meno</a> / <a href="https://www.google.com/search?q=${encodeURIComponent('Plato Theaetetus dialogue')}" target="_blank" rel="noopener noreferrer">Theaetetus</a> — what knowledge is; how inquiry works.</li></ul>`,
    platoReaderBodyVideos:
      '<p>Starter searches on YouTube (opens in a new tab):</p><ul class="plato-reader-ul"><li><a href="https://www.youtube.com/results?search_query=Plato+allegory+of+the+cave+explained" target="_blank" rel="noopener noreferrer">Allegory of the cave — overview</a></li><li><a href="https://www.youtube.com/results?search_query=Plato+Theory+of+Forms+introduction" target="_blank" rel="noopener noreferrer">Theory of Forms — introduction</a></li><li><a href="https://www.youtube.com/results?search_query=Plato+Republic+Ring+of+Gyges" target="_blank" rel="noopener noreferrer">Republic — Ring of Gyges / justice</a></li></ul>',
  };
  return lang === 'zh-Hant' ? { ...en, ...(ZH.ui || {}) } : en;
}

function getActiveLocale() {
  return getUiText(state.lang).locale || 'en-US';
}

function getAllDilemmas() {
  const zhDilemmas = getLangPack(state.lang).dilemmas;
  if (state.lang === 'zh-Hant' && Array.isArray(zhDilemmas) && zhDilemmas.length === DILEMMAS.length) {
    return zhDilemmas;
  }
  return DILEMMAS;
}

function decorativeDilemmaImageForStableId(stableId) {
  const dilemmas = getAllDilemmas();
  const n = dilemmas.length;
  if (!n) return '';
  const sid = Number(stableId);
  const idx = Number.isFinite(sid) ? Math.abs(sid) % n : 0;
  const img = dilemmas[idx] && dilemmas[idx].image;
  return typeof img === 'string' && img.trim() ? img.trim() : '';
}

function getCounterargs() {
  const zhCounterargs = getLangPack(state.lang).counterargs;
  if (state.lang === 'zh-Hant' && Array.isArray(zhCounterargs) && zhCounterargs.length === COUNTERARGS.length) {
    return zhCounterargs;
  }
  return COUNTERARGS;
}

function getQuotes1() {
  const zhQuotes = getLangPack(state.lang).quotes1;
  if (state.lang === 'zh-Hant' && Array.isArray(zhQuotes) && zhQuotes.length === PHILOSOPHER_QUOTES.length) {
    return zhQuotes;
  }
  return PHILOSOPHER_QUOTES;
}

function getQuotes2() {
  const zhQuotes = getLangPack(state.lang).quotes2;
  if (state.lang === 'zh-Hant' && Array.isArray(zhQuotes) && zhQuotes.length === PHILOSOPHER_QUOTES_2.length) {
    return zhQuotes;
  }
  return PHILOSOPHER_QUOTES_2;
}

function getThemes() {
  const zhThemes = getLangPack(state.lang).weeklyThemes;
  if (state.lang === 'zh-Hant' && Array.isArray(zhThemes) && zhThemes.length === WEEKLY_THEMES.length) {
    return zhThemes;
  }
  return WEEKLY_THEMES;
}

function translateTerm(term) {
  if (state.lang !== 'zh-Hant') return term;
  const map = getLangPack(state.lang).termMap || {};
  return map[term] || term;
}

function getGoFurther() {
  if (state.lang !== 'zh-Hant') return GO_FURTHER;
  const pack = getLangPack(state.lang);
  const recs = Array.isArray(pack.zhRecommendations) ? pack.zhRecommendations : [];
  return GO_FURTHER.map((entry, i) => {
    const rec = recs[i] || {};
    return {
      terms: (entry.terms || []).map(translateTerm),
      books: rec.books || entry.books,
      videos: rec.videos || entry.videos,
    };
  });
}

const PHILOSOPHER_NAMES_ZH = {
  'Alan Watts': '艾倫・瓦茲',
  'Albert Camus': '阿爾貝・卡繆',
  'Albert Einstein': '阿爾伯特・愛因斯坦',
  'Aristotle': '亞里斯多德',
  'Carl Jung': '卡爾・榮格',
  'Cornel West': '康奈爾・韋斯特',
  'Derek Parfit': '德瑞克・帕菲特',
  'Emily Dickinson': '艾蜜莉・狄金生',
  'Friedrich Nietzsche': '弗里德里希・尼采',
  'George Bernard Shaw': '喬治・蕭伯納',
  'Henry David Thoreau': '亨利・大衛・梭羅',
  'Heraclitus': '赫拉克利特',
  'Immanuel Kant': '伊曼努爾・康德',
  'Jean-Paul Sartre': '尚-保羅・沙特',
  'Jim Morrison': '吉姆・莫里森',
  'John Steinbeck': '約翰・史坦貝克',
  'Mahatma Gandhi': '聖雄甘地',
  'Marcel Proust': '馬塞爾・普魯斯特',
  'Oscar Wilde': '奧斯卡・王爾德',
  'Peter Salovey': '彼得・薩洛維',
  'Ralph Waldo Emerson': '拉爾夫・沃爾多・愛默生',
  'René Descartes': '勒內・笛卡兒',
  'Socrates': '蘇格拉底',
  'Thomas Aquinas': '托馬斯・阿奎那',
  'William Shakespeare': '威廉・莎士比亞',
  'Simone de Beauvoir': '西蒙娜・德・波娃',
  'John Stuart Mill': '約翰・斯圖爾特・彌爾',
  'Marcus Aurelius': '馬可・奧理略',
  'Epictetus': '愛比克泰德',
  'Epicurus': '伊比鳩魯',
  'Plato': '柏拉圖',
  'Mary Wollstonecraft': '瑪麗・沃斯通克拉夫特',
  'Joseph Hall': '約瑟夫・霍爾',
  'John Morley': '約翰・莫利',
  'Apostle Paul': '使徒保羅',
  'Albert Schweitzer': '阿爾伯特・施韋澤',
  'Confucius': '孔子',
};

function getDisplayAuthorName(author) {
  if (state.lang !== 'zh-Hant') return author;
  return PHILOSOPHER_NAMES_ZH[author] || author;
}

const LEGAL_DOCS = {
  privacy: {
    titleKey: 'privacyPolicy',
    candidates: [
      'Legal/Privacy Policy (English).txt',
      'Legal/Privacy Policy.txt',
      'Legal/Privacy Policy.md',
      'Legal/privacy-policy.txt',
      'Legal/privacy-policy.md',
      'Legal/PrivacyPolicy.txt',
      'Legal/privacy_policy.txt',
    ],
    zhCandidates: [
      'Legal/Privacy Policy.zh-Hant.txt',
      'Legal/Privacy Policy (Traditional Chinese).txt',
      'Legal/Privacy Policy (Traditional Chinese).md',
    ],
  },
  terms: {
    titleKey: 'termsOfUse',
    candidates: [
      'Legal/Terms of Use (English).txt',
      'Legal/Terms of Use.txt',
      'Legal/Terms of Use.md',
      'Legal/terms-of-use.txt',
      'Legal/terms-of-use.md',
      'Legal/TermsOfUse.txt',
      'Legal/terms_of_use.txt',
    ],
    zhCandidates: [
      'Legal/Terms of Use.zh-Hant.txt',
      'Legal/Terms of Use (Traditional Chinese).txt',
      'Legal/Terms of Use (Traditional Chinese).md',
    ],
  },
};

const legalState = {
  type: null,
  title: '',
  content: '',
};

const state = {
  lang: 'en',
  todayKey: getLocalDateKey(),
  todayIndex: 0,
  answered: false,
  chosenOpt: null,
  history: [],
  reminderEnabled: false,
  reminderTime: '',
  reminderPanelOpen: false,
  feedbackPanelOpen: false,
  isNative: false,
  pendingTimeout: null,
  mainTab: 'dilemma',
  forumVotes: {},
  forumReactions: {},
  forumCommentReactions: {},
  forumView: 'list',
  forumPostId: null,
  forumSearchOpen: false,
  forumSort: 'latest',
  forumSearchQuery: '',
  forumReplyOpen: null,
  forumUserComments: {},
  forumUserPosts: [],
  forumUserAvatarId: 'w2:0',
  forumRemoteVotes: {},
  forumRemotePostReactions: {},
  forumRemoteCommentReactions: {},
  forumPhilosopherFollowups: {},
  forumPhilosopherFollowupPending: null,
  profileActive: false,
  knowledgeMapSeed: null,
  profileQuestionIndex: 0,
  profileAnswers: [],
  bookmarksLoaded: false,
  bookmarks: new Map(), // key: `${item_type}|${item_key}` => row
  bookmarksView: 'dilemma', // 'dilemma' | 'quote' | 'concept' | 'book' | 'video'
};

/* =============================================
   PERSISTENCE (localStorage)
   ============================================= */
const STORAGE_KEYS = {
  history: 'dailyDilemmas.history.v1',
  lang: 'dailyDilemmas.lang.v1',
  reminderEnabled: 'dailyDilemmas.reminderEnabled.v1',
  reminderTime: 'dailyDilemmas.reminderTime.v1',
  exploredConcepts: 'dailyDilemmas.exploredConcepts.v1',
  forumUserPosts: 'dailyDilemmas.forumUserPosts.v1',
  forumUserAvatarId: 'dailyDilemmas.forumUserAvatarId.v1',
  forumPhilosopherFollowups: 'dailyDilemmas.forumPhilosopherFollowups.v1',
};

function normalizeForumPhilosopherEntry(entry) {
  if (typeof entry === 'string') {
    const text = entry.trim();
    return text ? { name: 'Philosopher', text } : null;
  }
  if (!entry || typeof entry !== 'object') return null;
  const text = String(entry.text || '').trim();
  if (!text) return null;
  const philosopherId = entry.philosopherId ? String(entry.philosopherId).trim() : '';
  return {
    name: String(entry.name || 'Philosopher').trim() || 'Philosopher',
    text,
    ...(philosopherId ? { philosopherId } : {}),
  };
}

function normalizeForumUserPost(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const title = String(raw.title || '').trim();
  const body = String(raw.body || '').trim();
  const optionA = String(raw.optionA || '').trim();
  const optionB = String(raw.optionB || '').trim();
  const id = String(raw.id || '').trim();
  if (!id || !title || !body || !optionA || !optionB) return null;
  const concepts = Array.isArray(raw.concepts)
    ? raw.concepts.map((c) => String(c || '').trim()).filter(Boolean)
    : [];
  const philosophers = Array.isArray(raw.philosophers)
    ? raw.philosophers.map(normalizeForumPhilosopherEntry).filter(Boolean)
    : [];
  return {
    id,
    title,
    body,
    optionA,
    optionB,
    votes: raw.votes && typeof raw.votes === 'object'
      ? { a: Number(raw.votes.a || 0), b: Number(raw.votes.b || 0) }
      : { a: 0, b: 0 },
    concepts,
    philosophers,
    comments: Array.isArray(raw.comments) ? raw.comments : [],
    postedAt: raw.postedAt || new Date().toISOString(),
    reactions: raw.reactions && typeof raw.reactions === 'object'
      ? {
          likes: Number(raw.reactions.likes || 0),
          dislikes: Number(raw.reactions.dislikes || 0),
        }
      : { likes: 0, dislikes: 0 },
    isUserPost: true,
    deviceId: raw.deviceId ? String(raw.deviceId) : undefined,
    avatarId: raw.avatarId || null,
  };
}

function loadForumUserPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.forumUserPosts);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeForumUserPost).filter(Boolean);
  } catch {
    return [];
  }
}

function saveForumUserPosts() {
  try {
    const payload = (state.forumUserPosts || []).map((post) => {
      if (!post || typeof post !== 'object') return post;
      const { enriching, enrichingPhilosopherIds, ...rest } = post;
      return rest;
    });
    localStorage.setItem(STORAGE_KEYS.forumUserPosts, JSON.stringify(payload));
  } catch {}
}

/** Keep forum user post fields (philosophers, concepts) in state after Supabase sync replaces row objects. */
function upsertForumUserPostInState(post) {
  if (!post || !post.id) return;
  if (!Array.isArray(state.forumUserPosts)) state.forumUserPosts = [];
  const idx = state.forumUserPosts.findIndex((p) => p && p.id === post.id);
  const patch = {
    id: post.id,
    title: post.title,
    body: post.body,
    optionA: post.optionA,
    optionB: post.optionB,
    votes: post.votes,
    concepts: post.concepts,
    philosophers: post.philosophers,
    comments: post.comments,
    postedAt: post.postedAt,
    reactions: post.reactions,
    isUserPost: true,
    enriching: post.enriching,
    deviceId: post.deviceId,
    avatarId: post.avatarId,
  };
  if (idx >= 0) {
    state.forumUserPosts[idx] = { ...state.forumUserPosts[idx], ...patch };
  } else {
    state.forumUserPosts.unshift(patch);
  }
}

function shuffleArrayCopy(arr) {
  const list = arr.slice();
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function pickForumPhilosopherIds(count) {
  const n = Math.max(1, Math.min(count || 2, AI_PHILOSOPHER_ORDER.length));
  return shuffleArrayCopy(AI_PHILOSOPHER_ORDER).slice(0, n);
}

function getPhilosopherForumDisplayName(philosopherId) {
  const ui = getUiText(state.lang);
  if (ui.aiPhilosopherNames && ui.aiPhilosopherNames[philosopherId]) {
    return ui.aiPhilosopherNames[philosopherId];
  }
  return AI_PHILOSOPHER_PORTRAIT_KEYS[philosopherId] || philosopherId;
}

function getConceptCatalogKeys() {
  const notes =
    state.lang === 'zh-Hant'
      ? window.CONCEPT_NOTES_ZH_HANT || window.CONCEPT_NOTES_EN || {}
      : window.CONCEPT_NOTES_EN || {};
  return Object.keys(notes);
}

function pickForumConceptsForPost(post, minCount, maxCount) {
  const min = Math.max(1, minCount || 2);
  const max = Math.max(min, maxCount || 4);
  const keys = getConceptCatalogKeys();
  if (!keys.length) return [];

  const hay = `${post.title || ''} ${post.body || ''} ${post.optionA || ''} ${post.optionB || ''}`.toLowerCase();
  const scored = keys.map((key) => {
    const lowerKey = key.toLowerCase();
    let score = 0;
    if (hay.includes(lowerKey)) score += 12;
    lowerKey.split(/\s+/).forEach((word) => {
      if (word.length > 3 && hay.includes(word)) score += 2;
    });
    if (state.lang === 'zh-Hant') {
      const zh = translateTerm(key).toLowerCase();
      if (zh && zh !== lowerKey && hay.includes(zh)) score += 8;
    }
    return { key, score };
  });

  scored.sort((a, b) => b.score - a.score || a.key.localeCompare(b.key));
  const matched = scored.filter((row) => row.score > 0);
  const pool = (matched.length >= min ? matched : scored).map((row) => row.key);
  const target = min + Math.floor(Math.random() * (max - min + 1));
  return shuffleArrayCopy(pool).slice(0, Math.min(target, pool.length));
}

const FORUM_PHILOSOPHER_FALLBACK_REPLY = {
  en: {
    aristotle: 'Before you choose, ask which habit this trains—and whether either option still lets you flourish with integrity.',
    plato: 'The visible choice may be only a shadow. What good are you really seeking beneath the options?',
    socrates: 'Before kindness or truth wins, define what you call “help” here—and what belief you are unwilling to examine.',
    confucius: 'Propriety matters: how you speak may repair the relationship—or perform virtue without healing it.',
    kant: 'Test your maxim as if everyone in your position acted the same. Would honesty and dignity still hold?',
    laozi: 'Notice where you are forcing the outcome. Sometimes the wiser move is softer than winning the argument.',
    buddha: 'Watch the clinging beneath the choice. Compassion without awareness can become another kind of harm.',
    marx: 'Ask who benefits from the story you are telling. Private guilt can hide public structures.',
  },
  'zh-Hant': {
    aristotle: '揀之前先問：呢個選擇會練成邊種習慣？邊條路先令你仍然活得有品格、有繁盛？',
    plato: '你見到嘅選項可能只係影子。選項底下，你真正追求嘅「善」係咩？',
    socrates: '溫柔同真相比拼之前，先講清楚咩叫「幫」——同你有咩信念未肯面對。',
    confucius: '講嘢要有禮。你點樣開口，可以修補關係，亦可以變成表演式美德。',
    kant: '試下將你嘅做法普遍化：若果人人都咁做，仲有冇尊嚴同誠信剩低？',
    laozi: '留意你邊度硬拗。有時最聰明嘅一步，唔係贏辯論，而係放鬆掌控。',
    buddha: '睇清選擇底下嘅執著。冇覺察嘅慈悲，有時都係另一種傷害。',
    marx: '問邊個從你哋講緊嘅故事獲利。私人內疚有時遮住公共結構。',
  },
};

function fallbackForumPhilosopherReply(post, philosopherId) {
  const lang = state.lang === 'zh-Hant' ? 'zh-Hant' : 'en';
  const table = FORUM_PHILOSOPHER_FALLBACK_REPLY[lang] || FORUM_PHILOSOPHER_FALLBACK_REPLY.en;
  return (
    table[philosopherId] ||
    (lang === 'zh-Hant'
      ? `面對「${post.title}」，先問你重視嘅係邊一邊嘅後果，定係你想成為邊種人。`
      : `On "${post.title}," ask which values you are protecting—and which habit your choice would train.`)
  );
}

function resolveForumPhilosopherIdFromName(name) {
  const display = String(name || '').trim();
  if (!display) return null;
  if (typeof AI_PHILOSOPHER_PORTRAIT_KEYS !== 'undefined') {
    for (const [id, portraitName] of Object.entries(AI_PHILOSOPHER_PORTRAIT_KEYS)) {
      if (portraitName === display) return id;
    }
  }
  const ui = getUiText(state.lang);
  const names = ui.aiPhilosopherNames;
  if (names) {
    for (const [id, label] of Object.entries(names)) {
      if (label === display) return id;
    }
  }
  const lower = display.toLowerCase();
  if (AI_PHILOSOPHER_ORDER && AI_PHILOSOPHER_ORDER.includes(lower)) return lower;
  return null;
}

function pickForumPhilosopherFollowupFallback(philosopherName, philosopherId) {
  const lang = state.lang === 'zh-Hant' ? 'zh-Hant' : 'en';
  const tables = window.FORUM_PHILOSOPHER_FOLLOWUPS || {};
  const table = tables[lang] || tables.en || {};
  const id = philosopherId || resolveForumPhilosopherIdFromName(philosopherName);
  const portraitName =
    id && typeof AI_PHILOSOPHER_PORTRAIT_KEYS !== 'undefined'
      ? AI_PHILOSOPHER_PORTRAIT_KEYS[id]
      : philosopherName;
  const ui = getUiText(state.lang);
  const localizedName =
    (id && ui.aiPhilosopherNames && ui.aiPhilosopherNames[id]) || philosopherName;
  const candidates = [
    localizedName,
    portraitName,
    philosopherName,
    id,
  ].filter(Boolean);
  for (const key of candidates) {
    const lines = table[key];
    if (Array.isArray(lines) && lines.length) {
      return lines[Math.floor(Math.random() * lines.length)];
    }
  }
  const fallback = table.default;
  if (Array.isArray(fallback) && fallback.length) {
    return fallback[Math.floor(Math.random() * fallback.length)];
  }
  return lang === 'zh-Hant'
    ? '多謝你認真回應。呢個兩難仍然開放——邊一點會令你改變主意？'
    : 'Thank you for engaging seriously. The dilemma remains open—what would change your mind?';
}

function loadForumPhilosopherFollowups() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.forumPhilosopherFollowups);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveForumPhilosopherFollowups() {
  try {
    localStorage.setItem(
      STORAGE_KEYS.forumPhilosopherFollowups,
      JSON.stringify(state.forumPhilosopherFollowups || {}),
    );
  } catch {}
}

function getForumPhilosopherFollowups(postId) {
  if (!postId) return [];
  const list = state.forumPhilosopherFollowups?.[postId];
  return Array.isArray(list) ? list.slice() : [];
}

function addForumPhilosopherFollowup(postId, entry) {
  if (!postId || !entry || !entry.text) return null;
  if (!state.forumPhilosopherFollowups || typeof state.forumPhilosopherFollowups !== 'object') {
    state.forumPhilosopherFollowups = {};
  }
  if (!Array.isArray(state.forumPhilosopherFollowups[postId])) {
    state.forumPhilosopherFollowups[postId] = [];
  }
  const row = {
    id: String(entry.id || `ff-${Date.now()}`),
    philosopherIndex: Number(entry.philosopherIndex) || 0,
    philosopherId: entry.philosopherId ? String(entry.philosopherId) : '',
    philosopherName: String(entry.philosopherName || 'Philosopher'),
    userCommentId: entry.userCommentId != null ? entry.userCommentId : null,
    userCommentLocalKey: entry.userCommentLocalKey ? String(entry.userCommentLocalKey) : '',
    userText: String(entry.userText || ''),
    text: String(entry.text || '').trim(),
    postedAt: entry.postedAt || new Date().toISOString(),
  };
  if (!row.text) return null;
  state.forumPhilosopherFollowups[postId].push(row);
  saveForumPhilosopherFollowups();
  return row;
}

async function generateForumPhilosopherFollowup(post, target, userText, userCommentMeta) {
  if (!post || !target || !userText) return null;
  const philosopherIndex = Number(target.index) || 0;
  const philosopherEntry = (post.philosophers || [])[philosopherIndex] || {};
  const philosopherName = String(target.name || philosopherEntry.name || 'Philosopher');
  const philosopherId =
    String(target.philosopherId || philosopherEntry.philosopherId || '').trim() ||
    resolveForumPhilosopherIdFromName(philosopherName) ||
    '';
  const philosopherOpeningText = String(target.text || philosopherEntry.text || '').trim();
  let replyText = pickForumPhilosopherFollowupFallback(philosopherName, philosopherId);

  if (typeof supabaseEnabled === 'function' && supabaseEnabled() && philosopherOpeningText) {
    try {
      const resp = await aiCall({
        mode: 'forum_philosopher_reply',
        lang: state.lang,
        philosopherId: philosopherId || undefined,
        forumPost: {
          title: post.title,
          body: post.body,
          optionA: post.optionA,
          optionB: post.optionB,
        },
        philosopherOpeningText,
        userReplyText: userText,
      });
      const aiText = String(resp?.text || '').trim();
      if (aiText) replyText = aiText;
    } catch (err) {
      console.warn('Forum philosopher follow-up failed; using fallback.', err);
    }
  }

  return addForumPhilosopherFollowup(post.id, {
    philosopherIndex,
    philosopherId,
    philosopherName,
    userCommentId: userCommentMeta?.id ?? null,
    userCommentLocalKey: userCommentMeta?.localKey || '',
    userText,
    text: replyText,
    postedAt: new Date().toISOString(),
  });
}

async function enrichForumUserPost(post) {
  if (!post || typeof post !== 'object') return post;
  const philosopherIds =
    Array.isArray(post.enrichingPhilosopherIds) && post.enrichingPhilosopherIds.length
      ? post.enrichingPhilosopherIds.slice(0, 2)
      : pickForumPhilosopherIds(2);
  const concepts = pickForumConceptsForPost(post, 2, 4);
  let philosophers = philosopherIds.map((philosopherId) => ({
    philosopherId,
    name: getPhilosopherForumDisplayName(philosopherId),
    text: fallbackForumPhilosopherReply(post, philosopherId),
  }));

  if (typeof supabaseEnabled === 'function' && supabaseEnabled()) {
    try {
      const resp = await aiCall({
        mode: 'forum_seed',
        lang: state.lang,
        forumPost: {
          title: post.title,
          body: post.body,
          optionA: post.optionA,
          optionB: post.optionB,
        },
        philosopherIds,
      });
      if (Array.isArray(resp.philosophers) && resp.philosophers.length) {
        philosophers = resp.philosophers
          .map((entry) => {
            const philosopherId = String(entry.philosopherId || '').trim();
            const text = String(entry.text || '').trim();
            if (!text) return null;
            return {
              philosopherId,
              name: getPhilosopherForumDisplayName(philosopherId) || 'Philosopher',
              text,
            };
          })
          .filter(Boolean)
          .slice(0, 2);
      }
    } catch (err) {
      console.warn('Forum philosopher seed failed; using fallback replies.', err);
    }
  }

  if (philosophers.length < 2) {
    const usedNames = new Set(philosophers.map((p) => p.name));
    philosopherIds.forEach((philosopherId) => {
      if (philosophers.length >= 2) return;
      const name = getPhilosopherForumDisplayName(philosopherId);
      if (usedNames.has(name)) return;
      philosophers.push({
        philosopherId,
        name,
        text: fallbackForumPhilosopherReply(post, philosopherId),
      });
      usedNames.add(name);
    });
  }

  post.philosophers = philosophers.slice(0, 2);
  post.concepts = concepts;
  delete post.enriching;
  delete post.enrichingPhilosopherIds;
  upsertForumUserPostInState(post);
  return post;
}

function loadForumUserAvatarId() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.forumUserAvatarId);
    if (raw && typeof FORUM_AVATAR_CATALOG !== 'undefined') {
      return FORUM_AVATAR_CATALOG.normalizeId(raw);
    }
    if (raw) return raw;
  } catch {
    // ignore
  }
  return typeof FORUM_AVATAR_CATALOG !== 'undefined'
    ? FORUM_AVATAR_CATALOG.DEFAULT_AVATAR_ID
    : 'w2:0';
}

function saveForumUserAvatarId(id) {
  try {
    const next =
      typeof FORUM_AVATAR_CATALOG !== 'undefined'
        ? FORUM_AVATAR_CATALOG.normalizeId(id)
        : id;
    localStorage.setItem(STORAGE_KEYS.forumUserAvatarId, next);
    state.forumUserAvatarId = next;
  } catch {
    // ignore
  }
}

function loadLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.lang);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch {
    // ignore
  }
  return detectLanguage();
}

function saveLanguage() {
  try {
    localStorage.setItem(STORAGE_KEYS.lang, state.lang);
  } catch {
    // ignore
  }
}

function loadReminderEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEYS.reminderEnabled) === '1';
  } catch {
    return false;
  }
}

function saveReminderEnabled() {
  try {
    localStorage.setItem(STORAGE_KEYS.reminderEnabled, state.reminderEnabled ? '1' : '0');
  } catch {
    // ignore
  }
}

function isValidReminderTimeValue(value) {
  if (typeof value !== 'string') return false;
  const match = value.match(/^(\d{2}):(\d{2})$/);
  if (!match) return false;
  const hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && minute % 15 === 0;
}

function loadReminderTime() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.reminderTime);
    if (isValidReminderTimeValue(saved)) return saved;
  } catch {
    // ignore
  }
  return '';
}

function saveReminderTime() {
  try {
    localStorage.setItem(STORAGE_KEYS.reminderTime, state.reminderTime);
  } catch {
    // ignore
  }
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.history);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Soft-validate + migrate older shapes:
    // - v0 may have used `choice` instead of `choiceKey`
    // - we must ensure `choiceKey` is 'a' or 'b' to avoid defaulting UI to B
    const out = [];
    parsed.forEach(item => {
      if (!item || typeof item !== 'object') return;
      const id = item.id;
      const date = item.date;
      const time = item.time;
      const rawChoice = item.choiceKey ?? item.choice;
      const choiceKey = rawChoice === 'a' || rawChoice === 'b' ? rawChoice : null;
      if (typeof id !== 'number' || typeof date !== 'string' || typeof time !== 'string') return;
      if (!choiceKey) return;
      out.push({ id, date, time, choiceKey });
    });
    return out;
  } catch {
    return [];
  }
}

function saveHistory() {
  try {
    localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.history));
  } catch {
    // Ignore storage failures (private mode / quota / blocked).
  }
}

function clearHistory() {
  const ok = confirm(getUiText(state.lang).clearHistoryConfirm);
  if (!ok) return;

  state.history = [];
  try {
    localStorage.removeItem(STORAGE_KEYS.history);
  } catch {
    // ignore
  }
  renderHistoryList();
}

function getTodayIndexFromKey(dateKey = state.todayKey) {
  return parseInt(String(dateKey).replace(/-/g, ''), 10) % getAllDilemmas().length;
}

function computeEffectiveTodayIndex(dateKey = state.todayKey) {
  return getTodayIndexFromKey(dateKey);
}

/** Reserved for Supabase schedule; currently uses local date hash only. */
async function fetchScheduledDilemmaForToday() {
  return null;
}

function findTodayAnswerEntry() {
  const todayId = getDilemma().id;
  for (let i = state.history.length - 1; i >= 0; i -= 1) {
    const item = state.history[i];
    if (item && item.id === todayId && item.date === state.todayKey) return item;
  }
  return null;
}

function reseedTodayIfNeeded() {
  const nextTodayKey = getLocalDateKey();
  if (nextTodayKey === state.todayKey) return false;
  state.todayKey = nextTodayKey;
  state.todayIndex = getTodayIndexFromKey(nextTodayKey);
  const todayEntry = findTodayAnswerEntry();
  state.answered = !!todayEntry;
  state.chosenOpt = todayEntry ? todayEntry.choiceKey : null;
  if (!state.answered) renderDilemma();
  return true;
}

// Today’s index: date hash
state.todayIndex = getTodayIndexFromKey(state.todayKey);

function getDilemma() { return getAllDilemmas()[state.todayIndex]; }

/* =============================================
   DOM HELPERS (templates)
   ============================================= */
function tpl(id) {
  const t = document.getElementById(id);
  return t && t.content ? t.content : null;
}

function cloneTpl(id) {
  const c = tpl(id);
  return c ? c.cloneNode(true) : document.createDocumentFragment();
}

const REMINDER_WHEEL_ITEM_PX = 36;
const REMINDER_WHEEL_HOURS = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const REMINDER_WHEEL_MINS = [0, 15, 30, 45];

let reminderWheelScrollT = null;
let reminderWheelSnapBound = false;

function pad2(n) {
  return String(n).padStart(2, '0');
}

function wheelSelectionFrom24h(h24, m) {
  const pm = h24 >= 12;
  let h12 = h24 % 12;
  if (h12 === 0) h12 = 12;
  const hi = Math.max(0, REMINDER_WHEEL_HOURS.indexOf(h12));
  const mi = Math.max(0, REMINDER_WHEEL_MINS.indexOf(m));
  return { hi, mi, pi: pm ? 1 : 0 };
}

function wheelSelectionTo24h(hi, mi, pi) {
  const h12 = REMINDER_WHEEL_HOURS[hi];
  const m = REMINDER_WHEEL_MINS[mi];
  const pm = pi === 1;
  let h24;
  if (!pm) h24 = h12 === 12 ? 0 : h12;
  else h24 = h12 === 12 ? 12 : h12 + 12;
  return `${pad2(h24)}:${pad2(m)}`;
}

function buildReminderWheel() {
  const ui = getUiText(state.lang);
  const hourEl = document.getElementById('reminder-wheel-hour');
  const minEl = document.getElementById('reminder-wheel-minute');
  const ampmEl = document.getElementById('reminder-wheel-ampm');
  if (!hourEl || !minEl || !ampmEl) return;
  hourEl.replaceChildren();
  REMINDER_WHEEL_HOURS.forEach(h => {
    const div = document.createElement('div');
    div.className = 'reminder-wheel-item';
    div.textContent = String(h);
    hourEl.appendChild(div);
  });
  minEl.replaceChildren();
  REMINDER_WHEEL_MINS.forEach(m => {
    const div = document.createElement('div');
    div.className = 'reminder-wheel-item';
    div.textContent = pad2(m);
    minEl.appendChild(div);
  });
  const am = ui.meridiemAm || 'AM';
  const pm = ui.meridiemPm || 'PM';
  ampmEl.replaceChildren();
  [am, pm].forEach(text => {
    const div = document.createElement('div');
    div.className = 'reminder-wheel-item';
    div.textContent = text;
    ampmEl.appendChild(div);
  });
}

function onReminderWheelScroll() {
  if (reminderWheelScrollT) clearTimeout(reminderWheelScrollT);
  reminderWheelScrollT = setTimeout(snapAllReminderWheels, 45);
}

function snapAllReminderWheels() {
  ['reminder-wheel-hour', 'reminder-wheel-minute', 'reminder-wheel-ampm'].forEach(id => {
    const el = document.getElementById(id);
    if (!el || !el.children.length) return;
    const max = el.children.length - 1;
    const idx = Math.round(el.scrollTop / REMINDER_WHEEL_ITEM_PX);
    const i = Math.max(0, Math.min(max, idx));
    el.scrollTo({ top: i * REMINDER_WHEEL_ITEM_PX, behavior: 'smooth' });
  });
}

function attachReminderWheelSnapHandlers() {
  if (reminderWheelSnapBound) return;
  ['reminder-wheel-hour', 'reminder-wheel-minute', 'reminder-wheel-ampm'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('scroll', onReminderWheelScroll, { passive: true });
  });
  reminderWheelSnapBound = true;
}

function syncReminderWheelFromState() {
  const hourEl = document.getElementById('reminder-wheel-hour');
  if (!hourEl || !hourEl.children.length) return;
  let h24 = 9;
  let m = 0;
  if (isValidReminderTimeValue(state.reminderTime)) {
    h24 = parseInt(state.reminderTime.slice(0, 2), 10);
    m = parseInt(state.reminderTime.slice(3, 5), 10);
  }
  const s = wheelSelectionFrom24h(h24, m);
  const scrolls = [
    { id: 'reminder-wheel-hour', idx: s.hi },
    { id: 'reminder-wheel-minute', idx: s.mi },
    { id: 'reminder-wheel-ampm', idx: s.pi },
  ];
  scrolls.forEach(({ id, idx }) => {
    const el = document.getElementById(id);
    if (el) el.scrollTop = idx * REMINDER_WHEEL_ITEM_PX;
  });
}

function getReminderWheelTime24h() {
  const hourEl = document.getElementById('reminder-wheel-hour');
  const minEl = document.getElementById('reminder-wheel-minute');
  const ampmEl = document.getElementById('reminder-wheel-ampm');
  if (!hourEl || !minEl || !ampmEl || !hourEl.children.length) return '';
  const hi = Math.round(hourEl.scrollTop / REMINDER_WHEEL_ITEM_PX);
  const mi = Math.round(minEl.scrollTop / REMINDER_WHEEL_ITEM_PX);
  const pi = Math.round(ampmEl.scrollTop / REMINDER_WHEEL_ITEM_PX);
  const hic = Math.max(0, Math.min(REMINDER_WHEEL_HOURS.length - 1, hi));
  const mic = Math.max(0, Math.min(REMINDER_WHEEL_MINS.length - 1, mi));
  const pic = Math.max(0, Math.min(1, pi));
  return wheelSelectionTo24h(hic, mic, pic);
}

function refreshReminderWheel() {
  buildReminderWheel();
  attachReminderWheelSnapHandlers();
  syncReminderWheelFromState();
}

function syncOverflowSubpanels() {
  const reminderControls = document.getElementById('overflow-reminder-controls');
  if (reminderControls) reminderControls.hidden = !state.reminderPanelOpen;
  const feedbackControls = document.getElementById('overflow-feedback-controls');
  if (feedbackControls) feedbackControls.hidden = !state.feedbackPanelOpen;
}

function closeOverflowMenu() {
  const panel = document.getElementById('overflow-panel');
  const toggle = document.getElementById('btn-overflow-toggle');
  if (!panel || !toggle) return;
  state.reminderPanelOpen = false;
  state.feedbackPanelOpen = false;
  panel.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  syncOverflowSubpanels();
}

function openOverflowMenu() {
  const panel = document.getElementById('overflow-panel');
  const toggle = document.getElementById('btn-overflow-toggle');
  if (!panel || !toggle) return;
  panel.hidden = false;
  toggle.setAttribute('aria-expanded', 'true');
  syncOverflowSubpanels();
}

function toggleUserFeedbackPanel() {
  state.reminderPanelOpen = false;
  state.feedbackPanelOpen = !state.feedbackPanelOpen;
  syncOverflowSubpanels();
  applyUIText();
  if (state.feedbackPanelOpen) {
    const ta = document.getElementById('feedback-text');
    if (ta) requestAnimationFrame(() => ta.focus());
  }
}

/* =============================================
   LOCAL NOTIFICATIONS (Capacitor)
   ============================================= */
const DAILY_REMINDER = {
  id: 1001,
};

function getReminderTimeParts() {
  if (!isValidReminderTimeValue(state.reminderTime)) {
    return { hour: 9, minute: 0 };
  }
  const [h, m] = state.reminderTime.split(':');
  return { hour: parseInt(h, 10), minute: parseInt(m, 10) };
}

function formatReminderTimeLabel(value = state.reminderTime) {
  if (!isValidReminderTimeValue(value)) return value;
  const [h, m] = value.split(':');
  const date = new Date();
  date.setHours(parseInt(h, 10), parseInt(m, 10), 0, 0);
  return date.toLocaleTimeString(getActiveLocale(), { hour: 'numeric', minute: '2-digit' });
}

function formatUiTimeMessage(template, timeLabel) {
  if (!template) return timeLabel;
  return template.includes('{time}') ? template.replace('{time}', timeLabel) : `${template} (${timeLabel})`;
}

function getLocalNotificationsPlugin() {
  const plugins = window.Capacitor && window.Capacitor.Plugins;
  if (!plugins || !plugins.LocalNotifications) return null;
  return plugins.LocalNotifications;
}

function isPermissionGranted(permission) {
  if (!permission || typeof permission !== 'object') return false;
  const value = permission.display || permission.receive || permission.status;
  return value === 'granted';
}

async function cancelDailyReminderNotification() {
  const ln = getLocalNotificationsPlugin();
  if (!ln) return;
  await ln.cancel({ notifications: [{ id: DAILY_REMINDER.id }] });
}

async function scheduleDailyReminderNotification() {
  const ln = getLocalNotificationsPlugin();
  if (!ln) return false;
  const time = getReminderTimeParts();
  await cancelDailyReminderNotification();
  const ui = getUiText(state.lang);
  await ln.schedule({
    notifications: [
      {
        id: DAILY_REMINDER.id,
        title: ui.notifyTitle,
        body: ui.notifyBody,
        schedule: {
          on: { hour: time.hour, minute: time.minute },
          repeats: true,
          allowWhileIdle: true,
        },
      },
    ],
  });
  return true;
}

/** Replace with your live URLs before release (also mirrored in index.html hrefs). */
const OVERFLOW_FOOTER_LINKS = {
  instagram: 'https://www.instagram.com/',
  appStore: 'https://apps.apple.com/',
  playStore: 'https://play.google.com/store/apps/details?id=com.wilsonchan.dailydilemma',
};

function applyOverflowFooterLinks() {
  const ig = document.getElementById('link-footer-ig');
  const app = document.getElementById('link-footer-app-store');
  const play = document.getElementById('link-footer-play-store');
  if (ig) ig.href = OVERFLOW_FOOTER_LINKS.instagram;
  if (app) app.href = OVERFLOW_FOOTER_LINKS.appStore;
  if (play) play.href = OVERFLOW_FOOTER_LINKS.playStore;
}

async function addDailyReminderFromPanel() {
  const ui = getUiText(state.lang);
  const ln = getLocalNotificationsPlugin();
  if (!state.isNative || !ln) {
    alert(ui.notifyUnsupported);
    return;
  }

  const chosen = getReminderWheelTime24h();
  if (!chosen || !isValidReminderTimeValue(chosen)) {
    alert(ui.reminderPleasePickTime || 'Choose a reminder time.');
    return;
  }

  let permission = await ln.checkPermissions();
  if (!isPermissionGranted(permission)) {
    permission = await ln.requestPermissions();
  }
  if (!isPermissionGranted(permission)) {
    alert(ui.notifyDenied);
    return;
  }

  const hadScheduled = isValidReminderTimeValue(state.reminderTime);
  state.reminderTime = chosen;
  saveReminderTime();
  state.reminderEnabled = true;
  saveReminderEnabled();
  await scheduleDailyReminderNotification();
  applyUIText();
  const label = formatReminderTimeLabel(chosen);
  if (hadScheduled) {
    alert(formatUiTimeMessage(ui.notifyTimeUpdated, label));
  } else {
    alert(formatUiTimeMessage(ui.notifyEnabled, label));
  }
}

async function disableDailyReminder() {
  const ui = getUiText(state.lang);
  const ln = getLocalNotificationsPlugin();
  if (!state.isNative || !ln) {
    alert(ui.notifyUnsupported);
    return false;
  }
  await cancelDailyReminderNotification();
  state.reminderEnabled = false;
  state.reminderPanelOpen = false;
  saveReminderEnabled();
  applyUIText();
  alert(ui.notifyDisabled);
  return true;
}

async function openDailyReminderControls() {
  const ui = getUiText(state.lang);
  const ln = getLocalNotificationsPlugin();
  if (!state.isNative || !ln) {
    alert(ui.notifyUnsupported);
    return;
  }

  let permission = await ln.checkPermissions();
  if (!isPermissionGranted(permission)) {
    permission = await ln.requestPermissions();
  }
  if (!isPermissionGranted(permission)) {
    alert(ui.notifyDenied);
    return;
  }

  state.feedbackPanelOpen = false;
  const configured = state.reminderEnabled && isValidReminderTimeValue(state.reminderTime);
  if (configured) {
    state.reminderPanelOpen = !state.reminderPanelOpen;
  } else {
    state.reminderPanelOpen = true;
  }
  syncOverflowSubpanels();
  refreshReminderWheel();
}

/* =============================================
   SUPABASE (Postgres) — real vote percentages
   Set window.__DD_SUPABASE = { url, anonKey } in HTML before app.js (do not commit secrets).
   ============================================= */
function readSupabaseConfig() {
  const o = typeof window !== 'undefined' ? window.__DD_SUPABASE : null;
  const url = o && typeof o.url === 'string' ? o.url.trim() : '';
  const anonKey = o && typeof o.anonKey === 'string' ? o.anonKey.trim() : '';
  return { url, anonKey };
}

const SUPABASE = readSupabaseConfig();

function supabaseEnabled() {
  return !!(SUPABASE.url && SUPABASE.anonKey);
}

function supabaseHeaders(extra = null) {
  const headers = {
    apikey: SUPABASE.anonKey,
    Authorization: `Bearer ${SUPABASE.anonKey}`,
  };
  const deviceId = getDeviceId?.();
  if (deviceId) headers['X-Device-Id'] = deviceId;
  if (extra && typeof extra === 'object') Object.assign(headers, extra);
  return headers;
}

/** Edge Function CORS allow-lists only certain headers; omit X-Device-Id here (deviceId stays in JSON body). */
function supabaseFunctionsHeaders(extra = null) {
  const headers = {
    apikey: SUPABASE.anonKey,
    Authorization: `Bearer ${SUPABASE.anonKey}`,
  };
  if (extra && typeof extra === 'object') Object.assign(headers, extra);
  return headers;
}

async function supabaseRpc(fn, body) {
  const res = await fetch(`${SUPABASE.url}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: {
      ...supabaseHeaders(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body ?? {}),
  });
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase RPC failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  // "void" RPCs often return 204 No Content.
  if (res.status === 204) return null;
  const txt = await res.text();
  if (!txt || !txt.trim()) return null;
  return JSON.parse(txt);
}

async function submitVote(dilemmaId, choice) {
  if (!supabaseEnabled()) return;
  try {
    const res = await fetch(`${SUPABASE.url}/rest/v1/votes`, {
      method: 'POST',
      headers: {
        ...supabaseHeaders(),
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ dilemma_id: dilemmaId, choice }),
    });
    if (!res.ok) {
      const detail = await readSupabaseErrorText(res);
      console.error(`Supabase votes insert failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
    }
  } catch {
    // ignore (offline / blocked / misconfigured)
  }
}

async function fetchVoteStats(dilemmaId) {
  if (!supabaseEnabled()) return null;
  try {
    // RPC returns: [{ choice: 'a'|'b', count: number }, ...]
    const rows = await supabaseRpc('get_vote_stats', { dilemma_id: dilemmaId });
    const a = rows?.find(r => r.choice === 'a')?.count ?? 0;
    const b = rows?.find(r => r.choice === 'b')?.count ?? 0;
    const total = a + b;
    if (!total) return { a: 50, b: 50, total: 0 };
    const pctA = Math.round((a / total) * 100);
    return { a: pctA, b: 100 - pctA, total };
  } catch {
    return null;
  }
}

const FEEDBACK_MAX_LEN = 2000;

function closeFeedbackFlash() {
  const overlay = document.getElementById('feedback-flash-overlay');
  if (!overlay || overlay.hidden) return;
  overlay.hidden = true;
  overlay.style.display = 'none';
}

function openFeedbackFlash(message, variant = 'success') {
  const overlay = document.getElementById('feedback-flash-overlay');
  const modal = document.getElementById('feedback-flash-modal');
  const msgEl = document.getElementById('feedback-flash-message');
  const iconOk = document.getElementById('feedback-flash-icon-success');
  const iconWarn = document.getElementById('feedback-flash-icon-notice');
  if (!overlay || !modal || !msgEl) return;
  msgEl.textContent = message;
  const err = variant === 'error';
  modal.classList.toggle('feedback-flash-modal--success', !err);
  modal.classList.toggle('feedback-flash-modal--error', err);
  if (iconOk) iconOk.hidden = err;
  if (iconWarn) iconWarn.hidden = !err;
  overlay.hidden = false;
  overlay.style.display = 'flex';
  const okBtn = document.getElementById('btn-feedback-flash-ok');
  if (okBtn) okBtn.focus();
}

async function readSupabaseErrorText(res) {
  try {
    const txt = await res.text();
    return txt && txt.trim() ? txt.trim() : '';
  } catch {
    return '';
  }
}

async function submitForumReportToSupabase(payload) {
  if (!supabaseEnabled()) return false;
  const deviceId = typeof getDeviceId === 'function' ? getDeviceId() : '';
  if (!deviceId || !payload?.targetKey) return false;

  const reason = String(payload.reason || 'other');
  const allowed = ['harassment', 'private', 'self_harm', 'spam', 'other'];
  const safeReason = allowed.includes(reason) ? reason : 'other';
  const otherDetail =
    safeReason === 'other' ? String(payload.otherDetail || '').trim().slice(0, 500) : null;
  if (safeReason === 'other' && !otherDetail) return false;

  const body = {
    device_id: deviceId,
    target_key: String(payload.targetKey).slice(0, 280),
    post_id: payload.postId ? String(payload.postId).slice(0, 280) : null,
    reason: safeReason,
    other_detail: otherDetail,
    snippet: payload.snippet ? String(payload.snippet).slice(0, 500) : null,
    locale: state.lang === 'zh-Hant' ? 'zh-Hant' : 'en',
  };

  const res = await fetch(`${SUPABASE.url}/rest/v1/forum_reports`, {
    method: 'POST',
    headers: {
      ...supabaseHeaders(),
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase forum_reports failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  return true;
}

/* =============================================
   FORUM (Supabase — posts, comments, votes, reactions)
   ============================================= */
function forumCommentTargetKey(kind, index, commentDbId) {
  if (kind === 'philosopher_followup' && commentDbId != null && commentDbId !== '') {
    return `philosopher_followup:${commentDbId}`;
  }
  if (commentDbId != null && commentDbId !== '') return `user:${commentDbId}`;
  return `${kind}:${index}`;
}

function forumCommentReactionLocalKey(postId, kind, index, commentDbId) {
  if (kind === 'philosopher_followup' && commentDbId != null && commentDbId !== '') {
    return `${postId}|philosopher_followup|${commentDbId}`;
  }
  if (commentDbId != null && commentDbId !== '') return `${postId}|user|id:${commentDbId}`;
  return `${postId}|${kind}|${index}`;
}

function mapForumPostFromSupabaseRow(row) {
  if (!row || typeof row !== 'object' || !row.id) return null;
  return {
    id: String(row.id),
    title: String(row.title || ''),
    body: String(row.body || ''),
    optionA: String(row.option_a || ''),
    optionB: String(row.option_b || ''),
    votes: { a: 0, b: 0 },
    concepts: Array.isArray(row.concepts) ? row.concepts : [],
    philosophers: [],
    comments: [],
    postedAt: row.posted_at || new Date().toISOString(),
    reactions: { likes: 0, dislikes: 0 },
    isUserPost: true,
    avatarId: row.avatar_id || null,
    deviceId: row.device_id ? String(row.device_id) : null,
  };
}

function mapForumCommentFromSupabaseRow(row) {
  if (!row || typeof row !== 'object') return null;
  const body = String(row.body || '').trim();
  if (!body) return null;
  return {
    id: row.id,
    author: String(row.author_display || 'You'),
    text: body,
    postedAt: row.posted_at || new Date().toISOString(),
    avatarId: row.avatar_id || null,
    deviceId: row.device_id ? String(row.device_id) : null,
  };
}

function isForumPostOwner(post) {
  if (!post || !post.isUserPost) return false;
  const deviceId = typeof getDeviceId === 'function' ? getDeviceId() : '';
  if (!deviceId) return false;
  if (post.deviceId) return post.deviceId === deviceId;
  return String(post.id || '').startsWith('forum-user-');
}

function isForumCommentOwner(comment) {
  if (!comment) return false;
  const deviceId = typeof getDeviceId === 'function' ? getDeviceId() : '';
  if (!deviceId) return false;
  if (comment.deviceId) return comment.deviceId === deviceId;
  return false;
}

function removeForumPostFromState(postId) {
  if (!postId) return;
  state.forumUserPosts = (state.forumUserPosts || []).filter((p) => p && p.id !== postId);
  delete state.forumUserComments[postId];
  delete state.forumRemoteVotes[postId];
  delete state.forumRemotePostReactions[postId];
  delete state.forumRemoteCommentReactions[postId];
  delete state.forumVotes[postId];
  delete state.forumReactions[postId];
  if (state.forumPhilosopherFollowups) delete state.forumPhilosopherFollowups[postId];
  saveForumPhilosopherFollowups();
}

function removeForumCommentFromState(postId, commentId) {
  if (!postId || commentId == null) return;
  const list = state.forumUserComments[postId];
  if (!Array.isArray(list)) return;
  const idStr = String(commentId);
  state.forumUserComments[postId] = list.filter((c) => c && String(c.id) !== idStr);
  const targetKey = `user:${commentId}`;
  const rx = state.forumRemoteCommentReactions[postId];
  if (rx && rx[targetKey]) delete rx[targetKey];
  Object.keys(state.forumCommentReactions || {}).forEach((key) => {
    if (key.startsWith(`${postId}|user|id:${idStr}`)) {
      delete state.forumCommentReactions[key];
    }
  });
}

function mergeForumUserPostsAfterSync(dbPosts, previousPosts) {
  const prevById = new Map((previousPosts || []).map((p) => [p.id, p]));
  const merged = dbPosts.map((p) => {
    const prev = prevById.get(p.id);
    if (!prev) return p;
    return {
      ...p,
      philosophers: Array.isArray(prev.philosophers) && prev.philosophers.length
        ? prev.philosophers
        : p.philosophers,
      concepts:
        Array.isArray(prev.concepts) && prev.concepts.length ? prev.concepts : p.concepts,
      enriching: prev.enriching,
      deviceId: prev.deviceId || p.deviceId,
      avatarId: prev.avatarId || p.avatarId,
    };
  });
  const dbIds = new Set(merged.map((p) => p.id));
  const pendingLocal = (previousPosts || []).filter(
    (p) => p && p.id && !dbIds.has(p.id) && String(p.id).startsWith('forum-user-'),
  );
  return [...merged, ...pendingLocal];
}

function listForumPostIdsForRemoteSync() {
  const ids = new Set();
  (state.forumUserPosts || []).forEach((p) => {
    if (p && p.id) ids.add(p.id);
  });
  const sample = typeof window !== 'undefined' ? window.FORUM_SAMPLE_POSTS : null;
  if (sample) {
    const list = sample[state.lang] || sample.en || [];
    list.forEach((p) => {
      if (p && p.id) ids.add(p.id);
    });
  }
  return [...ids];
}

function applyForumVoteStatsRows(postId, rows) {
  let a = 0;
  let b = 0;
  (Array.isArray(rows) ? rows : []).forEach((r) => {
    if (r.choice === 'a') a = Number(r.count || 0);
    if (r.choice === 'b') b = Number(r.count || 0);
  });
  state.forumRemoteVotes[postId] = { a, b };
}

function applyForumPostReactionStatsRows(postId, rows) {
  let likes = 0;
  let dislikes = 0;
  (Array.isArray(rows) ? rows : []).forEach((r) => {
    if (r.reaction === 'like') likes = Number(r.count || 0);
    if (r.reaction === 'dislike') dislikes = Number(r.count || 0);
  });
  state.forumRemotePostReactions[postId] = { likes, dislikes };
}

function applyForumCommentReactionStatsRows(postId, rows) {
  const bucket = {};
  (Array.isArray(rows) ? rows : []).forEach((r) => {
    const key = String(r.target_key || '');
    if (!key) return;
    if (!bucket[key]) bucket[key] = { likes: 0, dislikes: 0 };
    if (r.reaction === 'like') bucket[key].likes = Number(r.count || 0);
    if (r.reaction === 'dislike') bucket[key].dislikes = Number(r.count || 0);
  });
  state.forumRemoteCommentReactions[postId] = bucket;
}

async function fetchForumPostsFromSupabase() {
  const res = await fetch(
    `${SUPABASE.url}/rest/v1/forum_posts?select=*&order=posted_at.desc`,
    { method: 'GET', headers: supabaseHeaders() },
  );
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase forum_posts fetch failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  return await res.json();
}

async function fetchForumCommentsFromSupabase(postId) {
  const res = await fetch(
    `${SUPABASE.url}/rest/v1/forum_comments?post_id=eq.${encodeURIComponent(postId)}&select=*&order=posted_at.asc`,
    { method: 'GET', headers: supabaseHeaders() },
  );
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase forum_comments fetch failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  return await res.json();
}

async function loadForumRemoteStatsForPost(postId) {
  if (!postId) return;
  const [voteRows, postRxRows, commentRxRows] = await Promise.all([
    supabaseRpc('get_forum_vote_stats', { p_post_id: postId }),
    supabaseRpc('get_forum_post_reaction_stats', { p_post_id: postId }),
    supabaseRpc('get_forum_comment_reaction_stats', { p_post_id: postId }),
  ]);
  applyForumVoteStatsRows(postId, voteRows);
  applyForumPostReactionStatsRows(postId, postRxRows);
  applyForumCommentReactionStatsRows(postId, commentRxRows);
}

async function loadForumRemoteStatsForPosts(postIds) {
  const ids = [...new Set((postIds || []).filter(Boolean))];
  const chunk = 8;
  for (let i = 0; i < ids.length; i += chunk) {
    const slice = ids.slice(i, i + chunk);
    await Promise.all(slice.map((id) => loadForumRemoteStatsForPost(id)));
  }
}

async function loadForumUserEngagementFromSupabase() {
  const deviceId = getDeviceId();
  const [votesRes, postRxRes, commentRxRes] = await Promise.all([
    fetch(
      `${SUPABASE.url}/rest/v1/forum_post_votes?device_id=eq.${encodeURIComponent(deviceId)}&select=post_id,choice`,
      { method: 'GET', headers: supabaseHeaders() },
    ),
    fetch(
      `${SUPABASE.url}/rest/v1/forum_post_reactions?device_id=eq.${encodeURIComponent(deviceId)}&select=post_id,reaction`,
      { method: 'GET', headers: supabaseHeaders() },
    ),
    fetch(
      `${SUPABASE.url}/rest/v1/forum_comment_reactions?device_id=eq.${encodeURIComponent(deviceId)}&select=post_id,target_key,reaction`,
      { method: 'GET', headers: supabaseHeaders() },
    ),
  ]);
  if (!votesRes.ok || !postRxRes.ok || !commentRxRes.ok) {
    throw new Error('Supabase forum user engagement fetch failed');
  }
  const voteRows = await votesRes.json();
  const postRxRows = await postRxRes.json();
  const commentRxRows = await commentRxRes.json();
  state.forumVotes = {};
  state.forumReactions = {};
  state.forumCommentReactions = {};
  (Array.isArray(voteRows) ? voteRows : []).forEach((r) => {
    if (r.post_id && (r.choice === 'a' || r.choice === 'b')) {
      state.forumVotes[r.post_id] = { choice: r.choice };
    }
  });
  (Array.isArray(postRxRows) ? postRxRows : []).forEach((r) => {
    if (r.post_id && (r.reaction === 'like' || r.reaction === 'dislike')) {
      state.forumReactions[r.post_id] = { choice: r.reaction };
    }
  });
  (Array.isArray(commentRxRows) ? commentRxRows : []).forEach((r) => {
    if (!r.post_id || !r.target_key) return;
    const tk = String(r.target_key);
    let localKey;
    if (tk.startsWith('user:')) {
      localKey = `${r.post_id}|user|id:${tk.slice(5)}`;
    } else if (tk.startsWith('philosopher_followup:')) {
      localKey = `${r.post_id}|philosopher_followup|${tk.slice('philosopher_followup:'.length)}`;
    } else {
      const parts = tk.split(':');
      if (parts.length >= 2) {
        localKey = `${r.post_id}|${parts[0]}|${parts[1]}`;
      }
    }
    if (localKey && (r.reaction === 'like' || r.reaction === 'dislike')) {
      state.forumCommentReactions[localKey] = { choice: r.reaction };
    }
  });
}

async function loadForumCommentsForPost(postId) {
  const rows = await fetchForumCommentsFromSupabase(postId);
  const comments = (Array.isArray(rows) ? rows : [])
    .map(mapForumCommentFromSupabaseRow)
    .filter(Boolean);
  state.forumUserComments[postId] = comments;
}

async function syncForumFromSupabase(options) {
  if (!supabaseEnabled()) return;
  const opts = options && typeof options === 'object' ? options : {};
  const focusPostId = opts.postId ? String(opts.postId) : null;
  try {
    const previousPosts = state.forumUserPosts || [];
    const rows = await fetchForumPostsFromSupabase();
    const dbPosts = (Array.isArray(rows) ? rows : [])
      .map(mapForumPostFromSupabaseRow)
      .filter(Boolean);
    state.forumUserPosts = mergeForumUserPostsAfterSync(dbPosts, previousPosts);
    if (!opts.skipLocalSave && typeof saveForumUserPosts === 'function') {
      saveForumUserPosts();
    }

    await loadForumUserEngagementFromSupabase();

    const postIds = focusPostId ? [focusPostId] : listForumPostIdsForRemoteSync();
    await loadForumRemoteStatsForPosts(postIds);

    if (focusPostId) {
      await loadForumCommentsForPost(focusPostId);
    }
  } catch (err) {
    console.error(err);
  }
}

async function submitForumPostToSupabase(post) {
  if (!supabaseEnabled() || !post) return null;
  const deviceId = getDeviceId();
  const labels = getUiText(state.lang);
  const row = {
    id: post.id,
    device_id: deviceId,
    author_display: labels.forumYouLabel || 'You',
    avatar_id: post.avatarId || null,
    title: post.title,
    body: post.body,
    option_a: post.optionA,
    option_b: post.optionB,
    concepts: Array.isArray(post.concepts) ? post.concepts : [],
    locale: state.lang === 'zh-Hant' ? 'zh-Hant' : 'en',
    posted_at: post.postedAt || new Date().toISOString(),
  };
  const res = await fetch(`${SUPABASE.url}/rest/v1/forum_posts`, {
    method: 'POST',
    headers: {
      ...supabaseHeaders(),
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase forum_posts insert failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  const txt = await res.text();
  const rows = txt && txt.trim() ? JSON.parse(txt) : null;
  return Array.isArray(rows) && rows[0] ? rows[0] : row;
}

async function submitForumVoteToSupabase(postId, choice) {
  if (!supabaseEnabled() || !postId || !['a', 'b'].includes(choice)) return false;
  const res = await fetch(
    `${SUPABASE.url}/rest/v1/forum_post_votes?on_conflict=post_id,device_id`,
    {
      method: 'POST',
      headers: {
        ...supabaseHeaders(),
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify({
        post_id: postId,
        device_id: getDeviceId(),
        choice,
      }),
    },
  );
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase forum_post_votes upsert failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  await loadForumRemoteStatsForPost(postId);
  return true;
}

async function submitForumPostReactionToSupabase(postId, reaction) {
  if (!supabaseEnabled() || !postId) return false;
  const deviceId = getDeviceId();
  if (!reaction) {
    const res = await fetch(
      `${SUPABASE.url}/rest/v1/forum_post_reactions?post_id=eq.${encodeURIComponent(postId)}&device_id=eq.${encodeURIComponent(deviceId)}`,
      { method: 'DELETE', headers: { ...supabaseHeaders(), Prefer: 'return=minimal' } },
    );
    if (!res.ok) {
      const detail = await readSupabaseErrorText(res);
      throw new Error(`Supabase forum_post_reactions delete failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
    }
  } else {
    const res = await fetch(
      `${SUPABASE.url}/rest/v1/forum_post_reactions?on_conflict=post_id,device_id`,
      {
        method: 'POST',
        headers: {
          ...supabaseHeaders(),
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates,return=minimal',
        },
        body: JSON.stringify({ post_id: postId, device_id: deviceId, reaction }),
      },
    );
    if (!res.ok) {
      const detail = await readSupabaseErrorText(res);
      throw new Error(`Supabase forum_post_reactions upsert failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
    }
  }
  await loadForumRemoteStatsForPost(postId);
  return true;
}

async function submitForumCommentReactionToSupabase(postId, targetKey, reaction) {
  if (!supabaseEnabled() || !postId || !targetKey) return false;
  const deviceId = getDeviceId();
  if (!reaction) {
    const res = await fetch(
      `${SUPABASE.url}/rest/v1/forum_comment_reactions?post_id=eq.${encodeURIComponent(postId)}&device_id=eq.${encodeURIComponent(deviceId)}&target_key=eq.${encodeURIComponent(targetKey)}`,
      { method: 'DELETE', headers: { ...supabaseHeaders(), Prefer: 'return=minimal' } },
    );
    if (!res.ok) {
      const detail = await readSupabaseErrorText(res);
      throw new Error(`Supabase forum_comment_reactions delete failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
    }
  } else {
    const res = await fetch(
      `${SUPABASE.url}/rest/v1/forum_comment_reactions?on_conflict=post_id,target_key,device_id`,
      {
        method: 'POST',
        headers: {
          ...supabaseHeaders(),
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates,return=minimal',
        },
        body: JSON.stringify({
          post_id: postId,
          target_key: targetKey,
          device_id: deviceId,
          reaction,
        }),
      },
    );
    if (!res.ok) {
      const detail = await readSupabaseErrorText(res);
      throw new Error(`Supabase forum_comment_reactions upsert failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
    }
  }
  await loadForumRemoteStatsForPost(postId);
  return true;
}

async function submitForumCommentToSupabase(postId, text, replyToCommentId, avatarId) {
  if (!supabaseEnabled() || !postId) return null;
  const labels = getUiText(state.lang);
  const body = {
    post_id: postId,
    device_id: getDeviceId(),
    author_display: labels.forumYouLabel || 'You',
    avatar_id: avatarId || null,
    body: String(text || '').trim(),
  };
  if (replyToCommentId != null) {
    body.reply_to_comment_id = replyToCommentId;
  }
  const res = await fetch(`${SUPABASE.url}/rest/v1/forum_comments`, {
    method: 'POST',
    headers: {
      ...supabaseHeaders(),
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase forum_comments insert failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  const txt = await res.text();
  const rows = txt && txt.trim() ? JSON.parse(txt) : null;
  const row = Array.isArray(rows) && rows[0] ? rows[0] : null;
  await loadForumCommentsForPost(postId);
  await loadForumRemoteStatsForPost(postId);
  return row ? mapForumCommentFromSupabaseRow(row) : null;
}

async function deleteForumPostFromSupabase(postId) {
  if (!supabaseEnabled() || !postId) return false;
  const result = await supabaseRpc('delete_forum_post', { p_post_id: postId });
  return result === true;
}

async function deleteForumCommentFromSupabase(commentId) {
  if (!supabaseEnabled() || commentId == null) return false;
  const result = await supabaseRpc('delete_forum_comment', { p_comment_id: commentId });
  return result === true;
}

async function deleteForumPost(postId) {
  if (!postId) return false;
  if (supabaseEnabled()) {
    const ok = await deleteForumPostFromSupabase(postId);
    if (!ok) return false;
  }
  removeForumPostFromState(postId);
  if (typeof saveForumUserPosts === 'function') saveForumUserPosts();
  return true;
}

async function deleteForumComment(postId, commentId) {
  if (!postId || commentId == null) return false;
  if (supabaseEnabled()) {
    const ok = await deleteForumCommentFromSupabase(commentId);
    if (!ok) return false;
    await loadForumCommentsForPost(postId).catch(() => {});
    await loadForumRemoteStatsForPost(postId).catch(() => {});
  } else {
    removeForumCommentFromState(postId, commentId);
  }
  return true;
}

async function submitFeedbackToSupabase(message, locale) {
  if (!supabaseEnabled()) return false;
  const safe = message.trim().slice(0, FEEDBACK_MAX_LEN);
  if (!safe) return false;
  const res = await fetch(`${SUPABASE.url}/rest/v1/feedback`, {
    method: 'POST',
    headers: {
      ...supabaseHeaders(),
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      body: safe,
      locale: locale === 'zh-Hant' ? 'zh-Hant' : 'en',
    }),
  });
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase feedback failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  return true;
}

/* =============================================
   BOOKMARKS (Supabase, device-scoped)
   ============================================= */
function bookmarkMapKey(itemType, itemKey) {
  return `${itemType}|${itemKey}`;
}

function isBookmarked(itemType, itemKey) {
  return state.bookmarks.has(bookmarkMapKey(itemType, itemKey));
}

function setBookmarkRow(rowOrNull, itemType, itemKey) {
  const k = bookmarkMapKey(itemType, itemKey);
  if (!rowOrNull) {
    state.bookmarks.delete(k);
    return;
  }
  state.bookmarks.set(k, rowOrNull);
}

async function fetchBookmarksFromSupabase() {
  if (!supabaseEnabled()) return [];
  const res = await fetch(`${SUPABASE.url}/rest/v1/bookmarks?select=*&order=updated_at.desc`, {
    method: 'GET',
    headers: supabaseHeaders(),
  });
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase bookmarks fetch failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  return await res.json();
}

async function ensureBookmarksLoaded() {
  if (state.bookmarksLoaded) return;
  try {
    const rows = await fetchBookmarksFromSupabase();
    state.bookmarks.clear();
    rows.forEach((r) => {
      if (!r || typeof r !== 'object') return;
      const t = r.item_type;
      const k = r.item_key;
      if (typeof t !== 'string' || typeof k !== 'string') return;
      setBookmarkRow(r, t, k);
    });
    state.bookmarksLoaded = true;
  } catch (err) {
    console.error(err);
    // Leave bookmarks unloaded; UI can still work best-effort with optimistic updates.
  }
}

async function upsertBookmarkToSupabase(row) {
  if (!supabaseEnabled()) return null;
  const res = await fetch(`${SUPABASE.url}/rest/v1/bookmarks?on_conflict=device_id,item_type,item_key`, {
    method: 'POST',
    headers: {
      ...supabaseHeaders(),
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=representation',
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase bookmarks upsert failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  const txt = await res.text();
  const rows = txt && txt.trim() ? JSON.parse(txt) : null;
  return Array.isArray(rows) && rows[0] ? rows[0] : null;
}

/**
 * Delete a bookmark row. Pass either:
 * - A row object from GET bookmarks (uses `id`; avoids filter/encoding mismatches on `item_key`), or
 * - (itemType, itemKey) strings for toggles that may run before a row id is cached.
 * PostgREST returns 2xx even when zero rows match filters; we use return=representation and require a deleted row.
 */
async function deleteBookmarkFromSupabase(itemTypeOrRow, itemKeyMaybe) {
  if (!supabaseEnabled()) return false;
  const deviceId = getDeviceId();
  let url;
  const hasRowId =
    itemTypeOrRow &&
    typeof itemTypeOrRow === 'object' &&
    itemTypeOrRow.id != null &&
    String(itemTypeOrRow.id).trim() !== '';
  if (hasRowId) {
    url = `${SUPABASE.url}/rest/v1/bookmarks?id=eq.${encodeURIComponent(String(itemTypeOrRow.id))}`;
  } else {
    const itemType = typeof itemTypeOrRow === 'string' ? itemTypeOrRow : '';
    const itemKey = typeof itemKeyMaybe === 'string' ? itemKeyMaybe : '';
    if (!itemType || !itemKey) return false;
    url =
      `${SUPABASE.url}/rest/v1/bookmarks?` +
      `device_id=eq.${encodeURIComponent(deviceId)}` +
      `&item_type=eq.${encodeURIComponent(itemType)}` +
      `&item_key=eq.${encodeURIComponent(itemKey)}`;
  }
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      ...supabaseHeaders(),
      Prefer: 'return=representation',
    },
  });
  const txt = await res.text();
  if (!res.ok) {
    throw new Error(
      `Supabase bookmarks delete failed: ${res.status}${txt && txt.trim() ? ` — ${txt.trim()}` : ''}`,
    );
  }
  let deleted = null;
  if (txt && txt.trim()) {
    try {
      deleted = JSON.parse(txt);
    } catch {
      deleted = null;
    }
  }
  const gotRow =
    (Array.isArray(deleted) && deleted.length > 0) ||
    (deleted && typeof deleted === 'object' && !Array.isArray(deleted) && deleted.id != null);
  if (!gotRow) {
    throw new Error('Supabase bookmarks delete matched no rows');
  }
  return true;
}

/* =============================================
   LEARNED CONCEPTS (Supabase, device-scoped; Knowledge Map)
   ============================================= */
async function fetchLearnedConceptsFromSupabase() {
  if (!supabaseEnabled()) return [];
  const res = await fetch(`${SUPABASE.url}/rest/v1/learned_concepts?select=concept_key`, {
    method: 'GET',
    headers: supabaseHeaders(),
  });
  if (!res.ok) {
    const detail = await readSupabaseErrorText(res);
    throw new Error(`Supabase learned_concepts fetch failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
  }
  return await res.json();
}

async function upsertLearnedConceptKeysToSupabase(keys) {
  if (!supabaseEnabled()) return;
  const deviceId = getDeviceId();
  const uniq = [...new Set((keys || []).filter((k) => typeof k === 'string' && k.trim()))];
  if (!uniq.length) return;
  const chunkSize = 100;
  for (let i = 0; i < uniq.length; i += chunkSize) {
    const chunk = uniq.slice(i, i + chunkSize);
    const body = chunk.map((concept_key) => ({ device_id: deviceId, concept_key }));
    const res = await fetch(`${SUPABASE.url}/rest/v1/learned_concepts?on_conflict=device_id,concept_key`, {
      method: 'POST',
      headers: {
        ...supabaseHeaders(),
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const detail = await readSupabaseErrorText(res);
      throw new Error(`Supabase learned_concepts upsert failed: ${res.status}${detail ? ` — ${detail}` : ''}`);
    }
  }
}

/** Pull server keys into localStorage; push any local-only keys (same device header as bookmarks). */
async function mergeLearnedConceptsFromSupabase() {
  if (!supabaseEnabled()) return;
  try {
    const rows = await fetchLearnedConceptsFromSupabase();
    const serverKeys = new Set(
      (Array.isArray(rows) ? rows : [])
        .map((r) => (r && typeof r.concept_key === 'string' ? r.concept_key.trim() : ''))
        .filter(Boolean),
    );
    const local = getExploredConcepts();
    let changed = false;
    for (const k of serverKeys) {
      if (!local.has(k)) {
        local.add(k);
        changed = true;
      }
    }
    if (changed) {
      saveExploredConcepts(local);
      renderKnowledgeHud();
    }
    const toPush = [...local].filter((k) => !serverKeys.has(k));
    if (toPush.length) await upsertLearnedConceptKeysToSupabase(toPush);
  } catch (err) {
    console.error(err);
  }
}

async function toggleBookmark(itemType, itemKey, payload, options = null) {
  const opts = options && typeof options === 'object' ? options : {};
  const dilemmaId = typeof opts.dilemmaId === 'number' ? opts.dilemmaId : null;

  await ensureBookmarksLoaded();

  if (isBookmarked(itemType, itemKey)) {
    try {
      await deleteBookmarkFromSupabase(itemType, itemKey);
      setBookmarkRow(null, itemType, itemKey);
    } catch (err) {
      console.error(err);
    }
    return isBookmarked(itemType, itemKey);
  }

  const deviceId = getDeviceId();
  const row = {
    device_id: deviceId,
    item_type: itemType,
    item_key: itemKey,
    dilemma_id: dilemmaId,
    locale: state.lang === 'zh-Hant' ? 'zh-Hant' : 'en',
    payload: payload && typeof payload === 'object' ? payload : {},
  };

  // Optimistic update
  setBookmarkRow(row, itemType, itemKey);
  try {
    const saved = await upsertBookmarkToSupabase(row);
    if (saved) setBookmarkRow(saved, itemType, itemKey);
  } catch (err) {
    console.error(err);
  }
  return true;
}

function makeBookmarkIconSvg(filled = false) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '18');
  svg.setAttribute('height', '18');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.classList.add('bm-icon');
  if (filled) svg.classList.add('bm-icon--filled');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M6 3.5h12a1.5 1.5 0 0 1 1.5 1.5v17l-7.5-4.25L4.5 22V5A1.5 1.5 0 0 1 6 3.5z');
  path.setAttribute('fill', filled ? 'currentColor' : 'none');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-width', '1.8');
  path.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(path);
  return svg;
}

function setBookmarkBtnActive(btn, active) {
  if (!btn) return;
  btn.classList.toggle('is-active', !!active);
  const svg = btn.querySelector('svg.bm-icon');
  if (!svg) return;
  const shouldBeFilled = !!active;
  const alreadyFilled = svg.classList.contains('bm-icon--filled');
  if (alreadyFilled === shouldBeFilled) return;
  svg.replaceWith(makeBookmarkIconSvg(shouldBeFilled));
}

/** Keeps dilemma bookmark icons in sync (question card + answered / chosen view share one bookmark key). */
function refreshDilemmaBookmarkButtons() {
  try {
    const d = getDilemma();
    if (!d) return;
    const itemType = 'dilemma';
    const itemKey = `dilemma:${d.id}`;
    const active = isBookmarked(itemType, itemKey);
    document.querySelectorAll('.bm-btn--dilemma, .bm-btn--chosen').forEach((btn) => {
      setBookmarkBtnActive(btn, active);
    });
  } catch (err) {
    console.error(err);
  }
}

function attachChosenStateBookmark(d) {
  try {
    const slot = document.getElementById('chosen-bookmark-slot');
    if (!slot || !d) return;
    slot.querySelector('.bm-btn--chosen')?.remove();
    ensureBookmarksLoaded();
    const ui = getUiText(state.lang);
    const itemType = 'dilemma';
    const itemKey = `dilemma:${d.id}`;
    const payload = { id: d.id, text: d.text, image: d.image, optA: d.optA, optB: d.optB };
    const btn = makeBookmarkBtn({
      itemType,
      itemKey,
      payload,
      dilemmaId: d.id,
      ariaLabel: ui.bookmarkAdd || 'Bookmark',
      className: 'bm-btn--chosen-row bm-btn--chosen',
    });
    setBookmarkBtnActive(btn, isBookmarked(itemType, itemKey));
    slot.appendChild(btn);
  } catch (err) {
    console.error(err);
  }
}

function makeBookmarkBtn({ itemType, itemKey, payload, ariaLabel, dilemmaId, className }) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `btn-icon bm-btn${className ? ` ${className}` : ''}`;
  btn.setAttribute('aria-label', ariaLabel);
  btn.title = ariaLabel;
  btn.appendChild(makeBookmarkIconSvg(isBookmarked(itemType, itemKey)));
  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    btn.disabled = true;
    try {
      const active = await toggleBookmark(itemType, itemKey, payload, { dilemmaId });
      if (itemType === 'dilemma' && !String(itemKey).startsWith('forum:')) {
        refreshDilemmaBookmarkButtons();
      } else if (String(itemKey).startsWith('forum:')) {
        setBookmarkBtnActive(btn, active);
        if (
          state.mainTab === 'forum' &&
          typeof ForumPanel !== 'undefined' &&
          typeof ForumPanel.renderFeed === 'function'
        ) {
          ForumPanel.renderFeed();
        }
      } else {
        setBookmarkBtnActive(btn, active);
      }
    } finally {
      btn.disabled = false;
    }
  });
  return btn;
}

async function sendUserFeedback() {
  const ta = document.getElementById('feedback-text');
  if (!ta) return;
  const text = ta.value.trim();
  if (!text) {
    ta.focus();
    return;
  }
  const ui = getUiText(state.lang);
  if (!supabaseEnabled()) {
    openFeedbackFlash(ui.feedbackUnavailable || 'Feedback is not available.', 'error');
    return;
  }
  try {
    await submitFeedbackToSupabase(text, state.lang);
    ta.value = '';
    closeOverflowMenu();
    openFeedbackFlash(ui.feedbackThanks || 'Thanks for your feedback!', 'success');
  } catch (err) {
    console.error(err);
    const msg = ui.feedbackSendFailed || 'Could not send feedback.';
    const detail = err && typeof err.message === 'string' ? err.message : '';
    openFeedbackFlash(detail ? `${msg}\n\n${detail}` : msg, 'error');
  }
}

/* =============================================
   RENDER
   ============================================= */
function renderDate() {
  reseedTodayIfNeeded();
  const d = new Date();
  document.getElementById('today-date').textContent =
    d.toLocaleDateString(getActiveLocale(), { weekday: 'long', month: 'long', day: 'numeric' });
}

function renderThemeAndTags(badgeId, tagsId) {
  const d = getDilemma();
  const themes = getThemes();
  const theme = themes[state.todayIndex] || themes[0] || { week: 1, name: '', color: '#888', emoji: '' };
  const ui = getUiText(state.lang);
  const badge = document.getElementById(badgeId);
  if (badge) {
    badge.replaceChildren(cloneTpl('tpl-theme-badge'));
    const emojiEl = badge.querySelector('.theme-emoji');
    const nameEl = badge.querySelector('.theme-name');
    if (emojiEl) emojiEl.textContent = theme.emoji;
    if (nameEl) nameEl.textContent = `${ui.weekPrefix}${theme.week}${ui.weekSuffix} \u00b7 ${theme.name}`;
    badge.style.setProperty('--theme-color', theme.color);
  }
  const tagsEl = document.getElementById(tagsId);
  if (tagsEl && d.tags) {
    tagsEl.replaceChildren();
    d.tags.forEach(tag => {
      const frag = cloneTpl('tpl-dilemma-tag');
      const el = frag.querySelector('.dilemma-tag');
      if (el) el.textContent = tag;
      tagsEl.appendChild(frag);
    });
  }
}

function renderDilemma() {
  const d = getDilemma();
  const ui = getUiText(state.lang);
  document.getElementById('dilemma-text').textContent = d.text;
  document.getElementById('dilemma-image').src = d.image;
  document.getElementById('dilemma-image').alt = ui.dilemmaImageAlt;

  // Theme badge + tags in greeting (top-right)
  renderThemeAndTags('theme-badge-greeting', 'greeting-tags');

  // Bookmark (top-right toolbar, left of share)
  try {
    const toolbar = document.getElementById('dilemma-card-toolbar');
    const shareBtn = document.getElementById('btn-share-trigger');
    if (toolbar) {
      toolbar.querySelector('.bm-btn--dilemma')?.remove();
      ensureBookmarksLoaded();
      const itemType = 'dilemma';
      const itemKey = `dilemma:${d.id}`;
      const payload = { id: d.id, text: d.text, image: d.image, optA: d.optA, optB: d.optB };
      const btn = makeBookmarkBtn({
        itemType,
        itemKey,
        payload,
        dilemmaId: d.id,
        ariaLabel: ui.bookmarkAdd || 'Bookmark',
        className: 'bm-btn--corner bm-btn--dilemma',
      });
      setBookmarkBtnActive(btn, isBookmarked(itemType, itemKey));
      toolbar.insertBefore(btn, shareBtn || null);
    }
  } catch (err) {
    console.error(err);
  }

  const optContainer = document.getElementById('dilemma-options');
  optContainer.replaceChildren();

  function makeOpt(opt, text) {
    const frag = cloneTpl('tpl-option-btn');
    const btn = frag.querySelector('button.option-btn');
    const letter = frag.querySelector('.option-letter');
    const label = frag.querySelector('.option-text');
    btn.dataset.opt = opt;
    if (letter) {
      letter.dataset.opt = opt;
      letter.textContent = opt.toUpperCase();
    }
    if (label) label.textContent = text;
    btn.addEventListener('click', () => handleChoice(opt));
    return btn;
  }

  optContainer.appendChild(makeOpt('a', d.optA));
  optContainer.appendChild(makeOpt('b', d.optB));
}

function syncProfilePanelContent() {
  if (state.profileAnswers.length >= PHILOSOPHY_PROFILE_QUESTIONS.length) {
    renderProfileResult();
  } else {
    renderProfileQuestion();
  }
}

function activateChatPanel() {
  const d = getDilemma();
  renderAiPhilosopherChips();
  aiRenderThread(d.id);
  aiSetHint('');
  aiSetThinking(false);
  refreshAiStarters();
  const input = document.getElementById('ai-input');
  if (input) requestAnimationFrame(() => input.focus());
}

function setMainTab(tab) {
  const allowed = ['forum', 'dilemma', 'chat', 'profile', 'knowledge'];
  const next = allowed.includes(tab) ? tab : 'dilemma';
  state.mainTab = next;
  state.profileActive = next === 'profile';

  const panelForum = document.getElementById('tab-panel-forum');
  const panelDilemma = document.getElementById('tab-panel-dilemma');
  const panelChat = document.getElementById('tab-panel-chat');
  const panelProfile = document.getElementById('tab-panel-profile');
  const panelKnowledge = document.getElementById('tab-panel-knowledge');
  const btnForum = document.getElementById('tab-btn-forum');
  const btnDilemma = document.getElementById('tab-btn-dilemma');
  const btnChat = document.getElementById('tab-btn-chat');
  const btnProfile = document.getElementById('tab-btn-profile');
  const btnKnowledge = document.getElementById('tab-btn-knowledge');
  const stickyNext = document.getElementById('sticky-next');

  const map = [
    ['forum', btnForum, panelForum],
    ['dilemma', btnDilemma, panelDilemma],
    ['chat', btnChat, panelChat],
    ['profile', btnProfile, panelProfile],
    ['knowledge', btnKnowledge, panelKnowledge],
  ];

  map.forEach(([name, btn, panel]) => {
    const active = name === next;
    if (panel) panel.hidden = !active;
    if (btn) {
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
      btn.tabIndex = active ? 0 : -1;
    }
  });

  document.body.classList.toggle('is-profile-mode', next === 'profile');

  if (stickyNext) {
    if (next !== 'dilemma' || !state.answered) {
      stickyNext.hidden = true;
      stickyNext.style.display = 'none';
    } else {
      stickyNext.hidden = false;
      stickyNext.style.display = 'flex';
    }
  }

  if (next === 'chat') {
    activateChatPanel();
  }

  if (next === 'forum') {
    if (supabaseEnabled()) {
      syncForumFromSupabase()
        .catch(() => {})
        .finally(() => {
          if (typeof ForumPanel !== 'undefined') ForumPanel.renderFeed();
        });
    } else if (typeof ForumPanel !== 'undefined') {
      ForumPanel.renderFeed();
    }
  }

  if (next === 'profile') {
    syncProfilePanelContent();
    requestAnimationFrame(() => {
      const view = document.getElementById('profile-view');
      if (view) view.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (next === 'knowledge') {
    activateKnowledgeTab();
  }
}

function openProfileTab() {
  closeOverflowMenu();
  if (state.pendingTimeout) {
    clearTimeout(state.pendingTimeout);
    state.pendingTimeout = null;
  }
  setMainTab('profile');
}

function openKnowledgeTab() {
  closeOverflowMenu();
  if (state.pendingTimeout) {
    clearTimeout(state.pendingTimeout);
    state.pendingTimeout = null;
  }
  setMainTab('knowledge');
}

const PHILOSOPHY_RESULT_TONE_CLASSES = [
  'profile-result-card--tone-green',
  'profile-result-card--tone-yellow',
  'profile-result-card--tone-blue',
  'profile-result-card--tone-red',
];

function clearPhilosophyResultTone(card) {
  if (!card) return;
  for (const c of PHILOSOPHY_RESULT_TONE_CLASSES) card.classList.remove(c);
  delete card.dataset.philosophyTone;
}

function applyPhilosophyResultTone(card, tone) {
  if (!card) return;
  clearPhilosophyResultTone(card);
  const allowed = new Set(['green', 'yellow', 'blue', 'red']);
  const t = allowed.has(tone) ? tone : 'green';
  card.classList.add('profile-result-card--tone-' + t);
  card.dataset.philosophyTone = t;
}

function getPhilosophyProfileQuestionCopy(q, lang) {
  if (!q || lang !== 'zh-Hant') {
    return { theme: q.theme, prompt: q.prompt, optA: q.optA, optB: q.optB };
  }
  const rows = getLangPack('zh-Hant').philosophyProfileQuestions;
  if (!Array.isArray(rows)) {
    return { theme: q.theme, prompt: q.prompt, optA: q.optA, optB: q.optB };
  }
  const loc = rows.find((r) => r.id === q.id);
  if (!loc) {
    return { theme: q.theme, prompt: q.prompt, optA: q.optA, optB: q.optB };
  }
  return {
    theme: loc.theme || q.theme,
    prompt: loc.prompt || q.prompt,
    optA: loc.optA || q.optA,
    optB: loc.optB || q.optB,
  };
}

function startPhilosophyProfile() {
  closeOverflowMenu();
  if (state.pendingTimeout) {
    clearTimeout(state.pendingTimeout);
    state.pendingTimeout = null;
  }
  state.profileQuestionIndex = 0;
  state.profileAnswers = [];
  setMainTab('profile');
  renderProfileQuestion();
  requestAnimationFrame(() => {
    const view = document.getElementById('profile-view');
    if (view) view.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function renderProfileIntroMessages() {
  const wrap = document.getElementById('profile-intro');
  const box = document.getElementById('profile-intro-messages');
  if (!wrap || !box) return;

  const show = state.profileAnswers.length === 0;
  wrap.hidden = !show;
  if (!show) {
    box.replaceChildren();
    return;
  }

  const ui = getUiText(state.lang);
  wrap.setAttribute('aria-label', ui.profileIntroAria || 'How My Type works');
  const lines = [ui.profileDemoMsg1, ui.profileDemoMsg2, ui.profileDemoMsg3].filter(Boolean);
  box.replaceChildren();
  lines.forEach((text, i) => {
    const msg = document.createElement('div');
    msg.className = 'profile-intro-msg' + (i === lines.length - 1 ? ' profile-intro-msg--disclaimer' : '');
    msg.setAttribute('role', 'listitem');
    msg.textContent = text;
    box.appendChild(msg);
  });
}

function renderProfileQuestion() {
  const q = PHILOSOPHY_PROFILE_QUESTIONS[state.profileQuestionIndex] || PHILOSOPHY_PROFILE_QUESTIONS[0];
  if (!q) return;

  renderProfileIntroMessages();

  const testCard = document.getElementById('profile-test-card');
  const resultCard = document.getElementById('profile-result-card');
  const image = document.getElementById('profile-question-image');
  const kicker = document.getElementById('profile-question-kicker');
  const progress = document.getElementById('profile-question-progress');
  const text = document.getElementById('profile-question-text');
  const options = document.getElementById('profile-options');
  const ui = getUiText(state.lang);

  if (testCard) testCard.hidden = false;
  if (resultCard) {
    resultCard.hidden = true;
    clearPhilosophyResultTone(resultCard);
  }
  if (image) {
    image.src = q.image;
    image.alt = ui.profileImageAlt || 'Illustration for this profile question';
  }
  const pq = getPhilosophyProfileQuestionCopy(q, state.lang);
  // Philosophy Profile: show theme only (no week label).
  if (kicker) kicker.textContent = `${pq.theme}`;
  if (progress) progress.textContent = `${state.profileQuestionIndex + 1} / ${PHILOSOPHY_PROFILE_QUESTIONS.length}`;
  if (text) text.textContent = pq.prompt;
  if (!options) return;

  options.replaceChildren();

  function makeProfileOpt(opt, label) {
    const frag = cloneTpl('tpl-option-btn');
    const btn = frag.querySelector('button.option-btn');
    const letter = frag.querySelector('.option-letter');
    const optionText = frag.querySelector('.option-text');
    btn.classList.add('profile-option-btn');
    btn.dataset.opt = opt;
    if (letter) {
      letter.dataset.opt = opt;
      letter.textContent = opt.toUpperCase();
    }
    if (optionText) optionText.textContent = label;
    btn.addEventListener('click', () => handleProfileAnswer(opt));
    return btn;
  }

  options.appendChild(makeProfileOpt('a', pq.optA));
  options.appendChild(makeProfileOpt('b', pq.optB));
}

function handleProfileAnswer(opt) {
  const q = PHILOSOPHY_PROFILE_QUESTIONS[state.profileQuestionIndex];
  if (!q) return;
  state.profileAnswers.push({ id: q.id, choiceKey: opt });
  if (state.profileQuestionIndex < PHILOSOPHY_PROFILE_QUESTIONS.length - 1) {
    state.profileQuestionIndex += 1;
    renderProfileQuestion();
    return;
  }
  renderProfileResult();
}

function renderProfileResult() {
  const intro = document.getElementById('profile-intro');
  if (intro) intro.hidden = true;

  const testCard = document.getElementById('profile-test-card');
  const resultCard = document.getElementById('profile-result-card');
  if (testCard) testCard.hidden = true;
  if (resultCard) {
    resultCard.hidden = false;
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Dynamic result content (deterministic + explainable; no runtime AI).
  try {
    const model = window.PHILOSOPHY_PROFILE_MODEL_EN;
    const engine = window.PhilosophyProfileEngine;
    if (!model || !engine) return;

    const includeDebug = /[?&]debugProfile=1\b/.test(location.search);
    const res = engine.buildNarrative(model, state.profileAnswers, { includeDebug });

    applyPhilosophyResultTone(resultCard, res.toneGroup);

    const ui = getUiText(state.lang);
    const kickerEl = document.getElementById('profile-result-kicker');
    const typeCodeEl = document.getElementById('profile-type-code');
    const dimsEl = document.getElementById('profile-dims');
    const titleEl = document.getElementById('profile-result-title');
    const subEl = document.getElementById('profile-result-sub');
    const framingEl = document.getElementById('profile-framing');
    const dimsSectionLabelEl = document.getElementById('profile-dims-section-label');
    const imgEl = document.getElementById('profile-result-image');
    const bsLabelEl = document.getElementById('profile-blind-spot-label');
    const bsTextEl = document.getElementById('profile-blind-spot-text');
    const thinkersLabelEl = document.getElementById('profile-thinkers-label');
    const thinkerGridEl = document.getElementById('profile-thinker-grid');
    const privateEl = document.getElementById('profile-private-note');
    const shareBtn = document.getElementById('btn-profile-share');
    const debugDetails = document.getElementById('profile-debug');
    const debugPre = document.getElementById('profile-debug-pre');

    if (kickerEl) kickerEl.textContent = res.kicker || (ui.profileResultKicker || 'Your Philosophy Mirror');
    if (typeCodeEl) typeCodeEl.textContent = res.typeCode || '';
    const toneGroupEl = document.getElementById('profile-tone-group');
    if (toneGroupEl) {
      const tk = res.toneGroup || 'green';
      const toneUi = {
        green: ui.profileToneGreen,
        yellow: ui.profileToneYellow,
        blue: ui.profileToneBlue,
        red: ui.profileToneRed,
      };
      const lbl = toneUi[tk] || '';
      toneGroupEl.textContent = lbl;
      toneGroupEl.hidden = !lbl;
    }
    if (titleEl) titleEl.textContent = res.archetype && res.archetype.title ? `You are a ${res.archetype.title}` : (ui.profileResultTitleFallback || 'Your Philosophy Mirror');
    if (subEl) subEl.textContent = (res.archetype && res.archetype.sub) || '';
    if (privateEl) privateEl.textContent = (res.sections && res.sections.privateNote) || privateEl.textContent;
    if (framingEl) {
      framingEl.textContent =
        res.framingLine ||
        'This isn’t a diagnosis. It’s a mirror of your value trade-offs in these scenarios.';
    }
    if (dimsSectionLabelEl) {
      dimsSectionLabelEl.textContent =
        res.dimensionsSectionLabel || dimsSectionLabelEl.textContent || 'Your Dimensions';
    }

    if (dimsEl) {
      dimsEl.replaceChildren();
      const dims = Array.isArray(res.dimensions) ? res.dimensions : [];
      function makeProfileDimPole(side, label, sym, hint) {
        const pole = document.createElement('div');
        pole.className = `profile-dim-pole profile-dim-pole--${side}`;
        const top = document.createElement('div');
        top.className = 'profile-dim-pole-top';
        const icon = document.createElement('span');
        icon.className = 'profile-dim-pole-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = sym || '';
        const lab = document.createElement('span');
        lab.className = 'profile-dim-pole-label';
        lab.textContent = label;
        top.appendChild(icon);
        top.appendChild(lab);
        pole.appendChild(top);
        if (hint) {
          const hi = document.createElement('p');
          hi.className = 'profile-dim-pole-hint';
          hi.textContent = hint;
          pole.appendChild(hi);
        }
        return pole;
      }
      for (const d of dims) {
        const row = document.createElement('div');
        row.className = 'profile-dim';

        const head = document.createElement('div');
        head.className = 'profile-dim-head';

        const name = document.createElement('div');
        name.className = 'profile-dim-name';

        const title = document.createElement('span');
        title.className = 'profile-dim-title';
        title.textContent = `${d.left} vs ${d.right}`;

        const code = document.createElement('span');
        code.className = 'profile-dim-code';
        code.setAttribute('title', 'Letter for your four-letter type from this row');
        code.textContent = d.code || '';

        name.appendChild(title);
        if (d.code) name.appendChild(code);

        head.appendChild(name);

        const p = Math.max(0, Math.min(100, Math.round(Number(d.pctLeft))));
        const bar = document.createElement('div');
        bar.className = 'profile-dim-bar';
        bar.style.gridTemplateColumns = `${p}% ${100 - p}%`;
        const segLeft = document.createElement('div');
        segLeft.className = 'profile-dim-bar-seg profile-dim-bar-seg--left';
        segLeft.setAttribute('aria-hidden', 'true');
        const segRight = document.createElement('div');
        segRight.className = 'profile-dim-bar-seg profile-dim-bar-seg--right';
        segRight.setAttribute('aria-hidden', 'true');
        bar.appendChild(segLeft);
        bar.appendChild(segRight);

        const poles = document.createElement('div');
        poles.className = 'profile-dim-poles';
        poles.appendChild(makeProfileDimPole('left', d.left, d.leftSymbol, d.leftHint));
        poles.appendChild(makeProfileDimPole('right', d.right, d.rightSymbol, d.rightHint));

        row.appendChild(head);
        row.appendChild(bar);
        row.appendChild(poles);
        dimsEl.appendChild(row);
      }
    }

    // Result hero: archetype soft-rounded art (fallback: legacy question illustration).
    if (imgEl) {
      const aid = res.archetype && res.archetype.id;
      let src = getPhilosophyProfileSoftImageForArchetype(aid);
      if (!src) {
        const qid = res.archetype && res.archetype.heroImageQuestionId;
        const q = PHILOSOPHY_PROFILE_QUESTIONS.find((x) => x.id === qid) || PHILOSOPHY_PROFILE_QUESTIONS[0];
        src = (q && q.image) || '';
      }
      if (src) imgEl.src = src;
      imgEl.alt = ui.profileImageAlt || 'Illustration for this philosophy profile question';
    }

    if (bsLabelEl) {
      const lbl = (res.sections && res.sections.blindSpotLabel) || 'Blind Spot'
      const textEl = bsLabelEl.querySelector && bsLabelEl.querySelector('.profile-blind-spot-label-text')
      if (textEl) textEl.innerHTML = String(lbl).replace(/\s+/g, '<br>')
    }
    if (bsTextEl) bsTextEl.textContent = (res.sections && res.sections.blindSpot) || '';

    if (thinkersLabelEl) thinkersLabelEl.textContent = (res.sections && res.sections.thinkersLabel) || thinkersLabelEl.textContent;
    if (thinkerGridEl) {
      thinkerGridEl.replaceChildren();
      const thinkers = (res.sections && res.sections.thinkers) || [];

      for (const t of thinkers) {
        const card = document.createElement('div');
        card.className = 'profile-thinker-card';

        const avatar = document.createElement('div');
        avatar.className = 'profile-thinker-avatar';

        const nameStr = String((t && t.name) || '').trim()
        const initialsText = (nameStr || '?')
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 2)
          .map(s => s[0].toUpperCase())
          .join('')

        function showInitials() {
          avatar.style.backgroundImage = ''
          avatar.replaceChildren()
          const initials = document.createElement('span')
          initials.className = 'profile-thinker-initials'
          initials.textContent = initialsText
          avatar.appendChild(initials)
        }

        const candidates = getPhilosopherPortraitCandidates(nameStr)
        if (!candidates.length) {
          showInitials()
        } else {
          tryPhilosopherPortraitUrls(
            candidates,
            (url) => {
              avatar.style.backgroundImage = `url('${url}')`
              avatar.style.backgroundPosition = 'center top'
              avatar.style.backgroundSize = 'cover'
              avatar.setAttribute('aria-label', nameStr)
            },
            showInitials
          )
        }

        card.appendChild(avatar);

        const copy = document.createElement('div');
        const name = document.createElement('strong');
        name.textContent = t.name || 'Thinker';
        const note = document.createElement('p');
        note.textContent = t.note || '';
        copy.appendChild(name);
        copy.appendChild(note);
        card.appendChild(copy);
        thinkerGridEl.appendChild(card);
      }
    }

    if (debugDetails) {
      const show = includeDebug && res.debug
      debugDetails.hidden = !show
      if (show && debugPre) debugPre.textContent = JSON.stringify(res.debug, null, 2)
    }

    // Share with Friends (reuse share modal & export-card)
    if (shareBtn && !shareBtn.dataset.bound) {
      shareBtn.dataset.bound = '1';
      shareBtn.addEventListener('click', () => {
        try {
          const m = window.PHILOSOPHY_PROFILE_MODEL_EN;
          const eng = window.PhilosophyProfileEngine;
          if (!m || !eng) return;
          const fresh = eng.buildNarrative(m, state.profileAnswers, { includeDebug: false });

          const overlay = document.getElementById('share-overlay');
          const title = document.querySelector('#share-modal .modal-title');
          if (title) title.textContent = 'Share My Type';

          const line1 = fresh.typeCode ? `My Type: ${fresh.typeCode}` : 'My Type';
          const line2 = fresh.archetype && fresh.archetype.title ? fresh.archetype.title : '';
          const shareText = `${line1}\n${line2}`.trim();

          document.getElementById('sc-text').textContent = shareText;
          document.getElementById('ec-text').textContent = shareText;

          const dims = Array.isArray(fresh.dimensions) ? fresh.dimensions : [];
          const top2 = dims.slice().sort((a, b) => Math.abs((a.pctLeft || 50) - 50) - Math.abs((b.pctLeft || 50) - 50)).reverse().slice(0, 2);
          const optA = top2[0] ? `${top2[0].left} vs ${top2[0].right}` : '';
          const optB = top2[1] ? `${top2[1].left} vs ${top2[1].right}` : '';
          document.getElementById('sc-opt-a').textContent = optA;
          document.getElementById('sc-opt-b').textContent = optB;
          document.getElementById('ec-opt-a').textContent = optA;
          document.getElementById('ec-opt-b').textContent = optB;

          const hint = document.getElementById('share-hint');
          if (hint) hint.textContent = '';

          if (overlay) {
            overlay.hidden = false; overlay.style.display = 'flex';
            document.addEventListener('keydown', function esc(e) {
              if (e.key !== 'Escape') return;
              overlay.hidden = true; overlay.style.display = 'none';
              document.removeEventListener('keydown', esc);
            });
          }
        } catch (e) {
          console.error('profile share', e);
        }
      });
    }
  } catch (err) {
    console.error('renderProfileResult dynamic', err);
  }
}

/** Shows reflection / accordions / sticky bar after A or B (also used to restore UI from history). */
function finalizeChosenState(opt, d) {
  try {
    const card = document.getElementById('dilemma-card');
    const chosen = document.getElementById('chosen-state');
    if (card) {
      card.hidden = true;
      card.style.display = 'none';
    }
    if (chosen) {
      chosen.hidden = false;
      chosen.style.display = 'flex';
    }

    const reflImg = document.getElementById('reflection-image');
    if (reflImg) {
      reflImg.src = d.image;
      reflImg.alt = getUiText(state.lang).dilemmaImageAlt;
    }

    const chosenLabel = document.getElementById('chosen-label');
    const chosenQuestion = document.getElementById('chosen-question');
    const chosenReflection = document.getElementById('chosen-reflection');
    const counterargEl = document.getElementById('counterarg-text');
    if (chosenLabel) chosenLabel.textContent = opt === 'a' ? d.optA : d.optB;
    if (chosenQuestion) chosenQuestion.textContent = d.text;
    const reflText = d.reflection && d.reflection[opt];
    if (chosenReflection) chosenReflection.textContent = reflText != null ? reflText : '';

    const caList = getCounterargs();
    const ca = caList[state.todayIndex];
    const other = opt === 'a' ? 'b' : 'a';
    if (counterargEl) counterargEl.textContent = ca && ca[other] != null ? ca[other] : '';

    renderPhilosopherQuote();
    renderOthersSplit(opt);
    renderOthersSplitFromSupabase(d.id);
    renderGoFurther();
    const dilemmaIdx = getAllDilemmas().findIndex((x) => x.id === d.id);
    markConceptsLearnedForDilemmaAtIndex(dilemmaIdx);

    const sn = document.getElementById('sticky-next');
    if (sn) {
      sn.hidden = false;
      sn.style.display = 'flex';
    }

    attachChosenStateBookmark(d);
  } catch (err) {
    console.error('finalizeChosenState', err);
  }
}

/** If history already has today’s answer for the current dilemma, sync flags and UI (e.g. after reload). */
function syncAnsweredUiFromHistoryIfNeeded() {
  const entry = findTodayAnswerEntry();
  if (!entry || state.answered) return;
  const d = getDilemma();
  if (entry.id !== d.id) return;
  state.answered = true;
  state.chosenOpt = entry.choiceKey;
  finalizeChosenState(entry.choiceKey, d);
}

function handleChoice(opt) {
  reseedTodayIfNeeded();
  const existing = findTodayAnswerEntry();
  const d = getDilemma();
  if (existing && existing.id === d.id) {
    if (!state.answered) {
      state.answered = true;
      state.chosenOpt = existing.choiceKey;
      finalizeChosenState(existing.choiceKey, d);
    }
    return;
  }
  if (state.answered) return;
  state.answered = true;
  state.chosenOpt = opt;

  const now = new Date();
  state.history.push({
    id: d.id,
    choiceKey: opt,
    date: state.todayKey,
    time: now.toLocaleTimeString(getActiveLocale(), { hour: '2-digit', minute: '2-digit' }),
  });
  saveHistory();
  submitVote(d.id, opt);

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(btn => {
    if (btn.dataset.opt === opt) {
      btn.classList.add('is-selected');
      btn.setAttribute('aria-checked', 'true');
    } else {
      btn.classList.add('is-dimmed');
    }
  });

  if (state.pendingTimeout) {
    clearTimeout(state.pendingTimeout);
    state.pendingTimeout = null;
  }
  state.pendingTimeout = setTimeout(() => {
    state.pendingTimeout = null;
    finalizeChosenState(opt, d);
  }, 800);
}

const PHILOSOPHER_PORTRAITS = {
  // Local portrait folder (preferred). If an author is missing here,
  // the UI falls back to initials automatically.
  'Alan Watts': 'images/philosophers/alan-watts.png',
  'Albert Camus': 'images/philosophers/albert-camus.jpg',
  'Albert Einstein': 'images/philosophers/albert-einstein.jpg',
  'Aristotle': 'images/philosophers/aristotle.jpg',
  'Carl Jung': 'images/philosophers/carl-jung.jpg',
  'Cornel West': 'images/philosophers/cornel-west.jpg',
  'Confucius': 'images/philosophers/confucius.jpg',
  'Derek Parfit': 'images/philosophers/derek-parfit.jpg',
  'Emily Dickinson': 'images/philosophers/emily-dickinson.png',
  'Friedrich Nietzsche': 'images/philosophers/friedrich-nietzsche.jpg',
  'George Bernard Shaw': 'images/philosophers/george-bernard-shaw.jpg',
  'Henry David Thoreau': 'images/philosophers/henry-david-thoreau.jpg',
  'Heraclitus': 'images/philosophers/heraclitus.jpg',
  'Immanuel Kant': 'images/philosophers/immanuel-kant.jpg',
  Kant: 'images/philosophers/immanuel-kant.jpg',
  Buddha: 'images/philosophers/buddha.png',
  'Shakyamuni Buddha': 'images/philosophers/buddha.png',
  Laozi: 'images/philosophers/laozi.jpg',
  'Lao Tzu': 'images/philosophers/laozi.jpg',
  'Jean-Paul Sartre': 'images/philosophers/jean-paul-sartre.jpg',
  'Jim Morrison': 'images/philosophers/jim-morrison.jpg',
  'John Steinbeck': 'images/philosophers/john-steinbeck.jpg',
  'Karl Marx': 'images/philosophers/karl-marx.jpg',
  'Mahatma Gandhi': 'images/philosophers/mahatma-gandhi.jpg',
  'Marcel Proust': 'images/philosophers/marcel-proust.jpg',
  'Oscar Wilde': 'images/philosophers/oscar-wilde.jpg',
  'Peter Salovey': 'images/philosophers/peter-salovey.jpg',
  'Plato': 'images/philosophers/plato.jpg',
  'Ralph Waldo Emerson': 'images/philosophers/ralph-waldo-emerson.jpg',
  'René Descartes': 'images/philosophers/ren-descartes.jpg',
  'Socrates': 'images/philosophers/socrates.jpg',
  'Thomas Aquinas': 'images/philosophers/thomas-aquinas.jpg',
  'William Shakespeare': 'images/philosophers/william-shakespeare.jpg',
};

/** Slug overrides when on-disk filename differs from author slug (e.g. buddha.png). */
const PHILOSOPHER_PORTRAIT_SLUG_OVERRIDES = {
  'shakyamuni-buddha': 'buddha',
};

function philosopherNameToSlug(name) {
  return String(name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[øØ]/g, 'o')
    .replace(/[æÆ]/g, 'ae')
    .replace(/[œŒ]/g, 'oe')
    .replace(/[ß]/g, 'ss')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getPhilosopherPortraitBasePath() {
  return 'images/philosophers/';
}

function normalizePhilosopherPortraitUrl(url) {
  return url || '';
}

/** Ordered local portrait URLs for an author (map entry, then slug jpg/png/webp). */
function getPhilosopherPortraitCandidates(name) {
  const n = typeof name === 'string' ? name.trim() : '';
  if (!n) return [];
  const seen = new Set();
  const out = [];
  function add(url) {
    const u = normalizePhilosopherPortraitUrl(url);
    if (u && !seen.has(u)) {
      seen.add(u);
      out.push(u);
    }
  }
  if (PHILOSOPHER_PORTRAITS[n]) add(PHILOSOPHER_PORTRAITS[n]);
  const slug = philosopherNameToSlug(n);
  const stem = PHILOSOPHER_PORTRAIT_SLUG_OVERRIDES[slug] || slug;
  if (stem) {
    const base = getPhilosopherPortraitBasePath();
    for (const ext of ['jpg', 'png', 'webp']) add(`${base}${stem}.${ext}`);
  }
  return out;
}

function tryPhilosopherPortraitUrls(candidates, onSuccess, onFail) {
  if (!candidates || !candidates.length) {
    if (onFail) onFail();
    return;
  }
  let idx = 0;
  function attempt() {
    if (idx >= candidates.length) {
      if (onFail) onFail();
      return;
    }
    const url = candidates[idx++];
    const img = new Image();
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.onload = () => onSuccess(url);
    img.onerror = attempt;
    img.src = url;
  }
  attempt();
}

function createAuthorAvatarNode(author) {
  const name = typeof author === 'string' ? author : '';
  const initials = (name || '?')
    .split(' ')
    .filter(Boolean)
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const el = document.createElement('div');
  el.className = 'bm-item-media bm-item-media--avatar';

  const candidates = getPhilosopherPortraitCandidates(name);
  if (!candidates.length) {
    el.classList.add('bm-item-media--initials');
    el.textContent = initials || '•';
    return el;
  }

  tryPhilosopherPortraitUrls(
    candidates,
    (url) => {
      const img = document.createElement('img');
      img.className = 'bm-item-media-img';
      img.alt = name;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.referrerPolicy = 'no-referrer';
      img.src = url;
      el.appendChild(img);
    },
    () => {
      el.classList.add('bm-item-media--initials');
      el.textContent = initials || '•';
    }
  );
  return el;
}

function createSymbolSvg(kind) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '18');
  svg.setAttribute('height', '18');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.classList.add('bm-item-media-icon');
  const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  p.setAttribute('fill', 'none');
  p.setAttribute('stroke', 'currentColor');
  p.setAttribute('stroke-width', '1.8');
  p.setAttribute('stroke-linecap', 'round');
  p.setAttribute('stroke-linejoin', 'round');

  if (kind === 'concept') {
    p.setAttribute('d', 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.6.5 1 1.2 1 2v1h6v-1c0-.8.4-1.5 1-2a7 7 0 0 0-4-12z');
  } else if (kind === 'book') {
    p.setAttribute('d', 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z');
  } else if (kind === 'video') {
    p.setAttribute('d', 'M3 7h18v12H3zM10 10l6 3-6 3z');
  } else {
    p.setAttribute('d', 'M6 3.5h12A1.5 1.5 0 0 1 19.5 5v17l-7.5-4.25L4.5 22V5A1.5 1.5 0 0 1 6 3.5z');
  }
  svg.appendChild(p);
  return svg;
}

function bookmarkSubtitle(row) {
  const p = row && typeof row.payload === 'object' ? row.payload : {};
  if (isForumBookmarkRow(row)) {
    return getUiText(state.lang).bookmarksForumSource || 'Forum';
  }
  if (row.item_type === 'book') return p.author || '';
  if (row.item_type === 'quote') return p.author ? `— ${getDisplayAuthorName(p.author)}` : '';
  return '';
}

function openForumBookmarkFromList(row) {
  const postId = forumBookmarkPostId(row);
  if (!postId) return;
  closeBookmarks();
  setMainTab('forum');
  if (typeof ForumPanel !== 'undefined' && typeof ForumPanel.openPost === 'function') {
    ForumPanel.openPost(postId);
  }
}

function renderPhilosopherQuote() {
  const q1 = getQuotes1()[state.todayIndex];
  const q2 = getQuotes2()[state.todayIndex];

  function applyPortrait(elId, author) {
    const el = document.getElementById(elId);
    if (!el) return;
    const name = typeof author === 'string' ? author : '';
    el.style.cssText = '';
    el.textContent = '';
    el.classList.remove('philosopher-avatar--initials');

    const initials = (name || '?')
      .split(' ')
      .filter(Boolean)
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    function showInitials() {
      el.textContent = '';
      el.style.cssText = '';
      el.classList.add('philosopher-avatar--initials');
      const span = document.createElement('span');
      span.className = 'philosopher-avatar-initials';
      span.textContent = initials || '•';
      el.appendChild(span);
    }

    const candidates = getPhilosopherPortraitCandidates(name);
    if (!candidates.length) {
      showInitials();
      return;
    }

    tryPhilosopherPortraitUrls(
      candidates,
      (url) => {
        const img = document.createElement('img');
        img.alt = name;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.className = 'philosopher-avatar-img';
        img.referrerPolicy = 'no-referrer';
        img.onerror = showInitials;
        img.src = url;
        el.appendChild(img);
      },
      showInitials
    );
  }

  const t1 = document.getElementById('pq-text');
  const c1 = document.getElementById('pq-cite');
  const t2 = document.getElementById('pq-text-2');
  const c2 = document.getElementById('pq-cite-2');

  if (!q1) {
    if (t1) t1.textContent = '';
    if (c1) c1.textContent = '';
    if (t2) t2.textContent = '';
    if (c2) c2.textContent = '';
    applyPortrait('philosopher-avatar-1', null);
    applyPortrait('philosopher-avatar-2', null);
    return;
  }

  if (t1) t1.textContent = '\u201c' + q1.text + '\u201d';
  if (c1) c1.textContent = '\u2014 ' + getDisplayAuthorName(q1.author);

  if (!q2) {
    if (t2) t2.textContent = '';
    if (c2) c2.textContent = '';
    applyPortrait('philosopher-avatar-1', q1.author);
    applyPortrait('philosopher-avatar-2', null);
    return;
  }

  if (t2) t2.textContent = '\u201c' + q2.text + '\u201d';
  if (c2) c2.textContent = '\u2014 ' + getDisplayAuthorName(q2.author);
  applyPortrait('philosopher-avatar-1', q1.author);
  applyPortrait('philosopher-avatar-2', q2.author);

  // Quote bookmarks (each row)
  try {
    const ui = getUiText(state.lang);
    ensureBookmarksLoaded();
    const d = getDilemma();
    const body = document.querySelector('#acc-quote .pq-accordion-body');
    if (!body) return;
    const row1 = body.querySelector('.philosopher-row');
    const row2 = body.querySelector('.philosopher-row.philosopher-row-2');

    function attach(rowEl, quoteObj, n) {
      if (!rowEl || !quoteObj) return;
      rowEl.querySelector(`.bm-btn--quote-${n}`)?.remove();
      const itemType = 'quote';
      const itemKey = `quote:${d.id}:${n}`;
      const payload = { dilemmaId: d.id, n, text: quoteObj.text, author: quoteObj.author };
      const btn = makeBookmarkBtn({
        itemType,
        itemKey,
        payload,
        dilemmaId: d.id,
        ariaLabel: ui.bookmarkAdd || 'Bookmark',
        className: `bm-btn--inline bm-btn--quote bm-btn--quote-${n}`,
      });
      setBookmarkBtnActive(btn, isBookmarked(itemType, itemKey));
      rowEl.appendChild(btn);
    }

    attach(row1, q1, 1);
    attach(row2, q2, 2);
  } catch (err) {
    console.error(err);
  }
}

function renderOthersSplit(chosenOpt) {
  const split = OTHERS_SPLIT[state.todayIndex];
  const pctA = split ? split.a : 50;
  const pctB = 100 - pctA;
  const d = getDilemma();

  const barA = document.getElementById('os-bar-a');
  const barB = document.getElementById('os-bar-b');
  // Animate width after a short delay so transition is visible
  barA.style.width = '0%'; barB.style.width = '0%';
  setTimeout(() => {
    barA.style.width = pctA + '%';
    barB.style.width = pctB + '%';
  }, 80);

  document.getElementById('os-pct-a').textContent = pctA + '%';
  document.getElementById('os-pct-b').textContent = pctB + '%';
  document.getElementById('os-opt-a-label').textContent = 'A. ' + d.optA;
  document.getElementById('os-opt-b-label').textContent = 'B. ' + d.optB;
}

async function renderOthersSplitFromSupabase(dilemmaId) {
  const stats = await fetchVoteStats(dilemmaId);
  if (!stats) return;
  const d = getDilemma();
  const barA = document.getElementById('os-bar-a');
  const barB = document.getElementById('os-bar-b');
  barA.style.width = '0%'; barB.style.width = '0%';
  setTimeout(() => {
    barA.style.width = stats.a + '%';
    barB.style.width = stats.b + '%';
  }, 80);
  document.getElementById('os-pct-a').textContent = stats.a + '%';
  document.getElementById('os-pct-b').textContent = stats.b + '%';
  document.getElementById('os-opt-a-label').textContent = 'A. ' + d.optA;
  document.getElementById('os-opt-b-label').textContent = 'B. ' + d.optB;
}

/* =============================================
   HISTORY PANEL
   ============================================= */
function openHistory() {
  const panel = document.getElementById('history-panel');
  const overlay = document.getElementById('history-overlay');
  panel.hidden = false; panel.style.display = 'flex';
  overlay.hidden = false; overlay.style.display = 'block';
  panel.classList.remove('is-closing');
  renderHistoryList();
  document.addEventListener('keydown', escHistory);
}

function closeHistory() {
  const panel = document.getElementById('history-panel');
  const overlay = document.getElementById('history-overlay');
  panel.classList.add('is-closing');
  setTimeout(() => {
    panel.hidden = true; panel.style.display = 'none';
    overlay.hidden = true; overlay.style.display = 'none';
    panel.classList.remove('is-closing');
  }, 230);
  document.removeEventListener('keydown', escHistory);
}
function escHistory(e) { if (e.key === 'Escape') closeHistory(); }

function renderHistoryList() {
  const ui = getUiText(state.lang);
  const container = document.getElementById('history-list');
  if (!state.history.length) {
    container.replaceChildren(cloneTpl('tpl-history-empty'));
    const empty = container.querySelector('.history-empty');
    if (empty) {
      const [line1, line2] = ui.historyEmpty.split('\n');
      empty.replaceChildren(document.createTextNode(line1 || ''));
      if (line2) {
        empty.appendChild(document.createElement('br'));
        empty.appendChild(document.createTextNode(line2));
      }
    }
    return;
  }

  const grouped = {};
  [...state.history].reverse().forEach(item => {
    if (!grouped[item.date]) grouped[item.date] = [];
    grouped[item.date].push(item);
  });

  const today = getLocalDateKey();
  const yesterday = getYesterdayDateKey();

  container.replaceChildren();
  Object.entries(grouped).forEach(([date, items]) => {
    let label = date;
    if (date === today) label = ui.today;
    else if (date === yesterday) label = ui.yesterday;
    else { const d = new Date(date + 'T00:00:00'); label = d.toLocaleDateString(getActiveLocale(), { month: 'short', day: 'numeric', year: 'numeric' }); }

    const dateFrag = cloneTpl('tpl-history-date-group');
    const dateEl = dateFrag.querySelector('.history-date-group');
    if (dateEl) dateEl.textContent = label;
    container.appendChild(dateFrag);
    items.forEach((item, i) => {
      const frag = cloneTpl('tpl-history-item');
      const root = frag.querySelector('.history-item');
      if (root) root.style.animationDelay = `${i * 40}ms`;
      const choice = frag.querySelector('.history-item-choice');
      const time = frag.querySelector('.history-item-date');
      const text = frag.querySelector('.history-item-text');
      const image = frag.querySelector('.history-item-image');
      const localized = getAllDilemmas().find(d => d.id === item.id);
      const selected = item.choiceKey ? (item.choiceKey === 'a' ? localized?.optA : localized?.optB) : item.choice;
      if (choice) choice.textContent = `${ui.chosePrefix}${selected || ''}`;
      if (time) time.textContent = item.time;
      if (text) text.textContent = localized?.text || item.text || '';
      if (image) {
        image.src = localized?.image || '';
        image.alt = ui.dilemmaImageAlt;
      }
      container.appendChild(frag);
    });
  });
}

document.getElementById('btn-history-toggle').addEventListener('click', () => {
  closeOverflowMenu();
  openHistory();
});
document.getElementById('btn-close-history').addEventListener('click', closeHistory);
document.getElementById('history-overlay').addEventListener('click', closeHistory);
document.getElementById('btn-clear-history').addEventListener('click', clearHistory);

/* =============================================
   BOOKMARKS PANEL
   ============================================= */
function openBookmarks() {
  const overlay = document.getElementById('bookmarks-overlay');
  if (!overlay) return;
  overlay.hidden = false;
  overlay.style.display = 'flex';
  renderBookmarksList();
}

function closeBookmarks() {
  const overlay = document.getElementById('bookmarks-overlay');
  if (!overlay || overlay.hidden) return;
  overlay.hidden = true;
  overlay.style.display = 'none';
}

function isForumBookmarkRow(row) {
  if (!row || row.item_type !== 'dilemma') return false;
  const p = row.payload && typeof row.payload === 'object' ? row.payload : {};
  if (p.source === 'forum') return true;
  return typeof row.item_key === 'string' && row.item_key.startsWith('forum:');
}

function forumBookmarkPostId(row) {
  const p = row && typeof row.payload === 'object' ? row.payload : {};
  if (typeof p.forumPostId === 'string' && p.forumPostId.trim()) return p.forumPostId.trim();
  if (typeof row.item_key === 'string' && row.item_key.startsWith('forum:')) {
    return row.item_key.slice('forum:'.length);
  }
  return '';
}

function bookmarkDisplayTitle(row) {
  const p = row && typeof row.payload === 'object' ? row.payload : {};
  if (row.item_type === 'dilemma') {
    if (isForumBookmarkRow(row)) return p.title || p.text || '';
    return p.text || '';
  }
  if (row.item_type === 'quote') return (p.text ? `“${p.text}”` : '');
  if (row.item_type === 'concept') return p.label || p.termKey || '';
  if (row.item_type === 'book') return p.title ? `${p.title}${p.author ? ` — ${p.author}` : ''}` : '';
  if (row.item_type === 'video') return p.title || '';
  return '';
}

async function renderBookmarksList() {
  const emptyEl = document.getElementById('bookmarks-empty');
  const grid = document.getElementById('bookmarks-grid');
  const tabs = document.getElementById('bookmarks-tabs');
  if (!grid) return;
  const ui = getUiText(state.lang);

  try {
  if (tabs) tabs.replaceChildren();
  grid.replaceChildren();

  // Refresh from Supabase (best-effort)
  await ensureBookmarksLoaded();
  try {
    const rows = await fetchBookmarksFromSupabase();
    state.bookmarks.clear();
    rows.forEach((r) => {
      if (!r || typeof r !== 'object') return;
      if (typeof r.item_type !== 'string' || typeof r.item_key !== 'string') return;
      setBookmarkRow(r, r.item_type, r.item_key);
    });
    state.bookmarksLoaded = true;
  } catch (err) {
    console.error(err);
  }

  const rows = [...state.bookmarks.values()]
    .filter(r => r && typeof r === 'object' && typeof r.item_type === 'string')
    .sort((a, b) => String(b.updated_at || '').localeCompare(String(a.updated_at || '')));

  if (!rows.length) {
    if (emptyEl) {
      emptyEl.hidden = false;
      emptyEl.textContent = ui.bookmarksEmpty || 'No bookmarks yet.';
    }
    return;
  }
  if (emptyEl) emptyEl.hidden = true;

  const order = ['dilemma', 'quote', 'concept', 'book', 'video'];
  const labels = {
    dilemma: ui.bookmarksGroupDilemmas || 'Question',
    quote: ui.bookmarksGroupQuotes || 'Quote',
    concept: ui.bookmarksGroupConcepts || 'Concept',
    book: ui.bookmarksGroupBooks || 'Book',
    video: ui.bookmarksGroupVideos || 'Video',
  };

  // Tabs on top (5 options)
  // Important: do NOT auto-switch tabs based on availability.
  // If a user picks "Books" and there are none, we should show the empty state for Books.
  if (!order.includes(state.bookmarksView)) state.bookmarksView = 'dilemma';

  if (tabs) {
    order.forEach((t) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bm-tab';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', t === state.bookmarksView ? 'true' : 'false');
      btn.textContent = labels[t] || t;
      btn.addEventListener('click', () => {
        state.bookmarksView = t;
        renderBookmarksList();
      });
      if (t === state.bookmarksView) btn.classList.add('is-active');
      tabs.appendChild(btn);
    });
  }

  // Full-width list for selected type
  grid.className = 'bookmarks-grid bookmarks-grid--single';
  const t = state.bookmarksView;

  const col = document.createElement('div');
  col.className = 'bm-col bm-col--single';

  const colList = document.createElement('div');
  colList.className = 'bm-col-list bm-col-list--single';

  const items = rows.filter(r => r.item_type === t);
  if (!items.length) {
    const em = document.createElement('p');
    em.className = 'bm-col-empty';
    em.textContent = ui.bookmarksEmpty || '—';
    colList.appendChild(em);
  } else {
    items.forEach((row) => {
      const item = document.createElement('div');
      item.className = 'bm-item';

      // Media (image / portrait / symbol)
      const payload = row && typeof row.payload === 'object' ? row.payload : {};
      let media = null;
      if (row.item_type === 'dilemma' && typeof payload.image === 'string' && payload.image) {
        const wrap = document.createElement('div');
        wrap.className = 'bm-item-media bm-item-media--thumb';
        const img = document.createElement('img');
        img.className = 'bm-item-media-img';
        img.alt = '';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.src = payload.image;
        wrap.appendChild(img);
        media = wrap;
      } else if (isForumBookmarkRow(row)) {
        const wrap = document.createElement('div');
        wrap.className = 'bm-item-media bm-item-media--symbol';
        wrap.appendChild(createSymbolSvg('bookmark'));
        media = wrap;
      } else if (row.item_type === 'quote') {
        media = createAuthorAvatarNode(payload.author);
      } else if (row.item_type === 'concept') {
        const wrap = document.createElement('div');
        wrap.className = 'bm-item-media bm-item-media--symbol';
        wrap.appendChild(createSymbolSvg('concept'));
        media = wrap;
      } else if (row.item_type === 'book') {
        const wrap = document.createElement('div');
        wrap.className = 'bm-item-media bm-item-media--symbol';
        wrap.appendChild(createSymbolSvg('book'));
        media = wrap;
      } else if (row.item_type === 'video') {
        const wrap = document.createElement('div');
        wrap.className = 'bm-item-media bm-item-media--symbol';
        wrap.appendChild(createSymbolSvg('video'));
        media = wrap;
      }
      if (media) item.appendChild(media);

      // Text (title + optional subtitle)
      const textWrap = document.createElement('div');
      textWrap.className = 'bm-item-text';
      const title = document.createElement('p');
      title.className = 'bm-item-title';
      title.textContent = bookmarkDisplayTitle(row) || '';
      const sub = bookmarkSubtitle(row);
      textWrap.appendChild(title);
      if (sub) {
        const meta = document.createElement('p');
        meta.className = 'bm-item-sub';
        meta.textContent = sub;
        textWrap.appendChild(meta);
      }
      item.appendChild(textWrap);

      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'bm-item-remove';
      remove.textContent = ui.bookmarkRemove || 'Remove';
      remove.addEventListener('click', async (e) => {
        e.stopPropagation();
        remove.disabled = true;
        try {
          await deleteBookmarkFromSupabase(row);
          setBookmarkRow(null, row.item_type, row.item_key);
          await renderBookmarksList();
        } catch (err) {
          console.error(err);
        } finally {
          remove.disabled = false;
        }
      });

      if (isForumBookmarkRow(row)) {
        const postId = forumBookmarkPostId(row);
        if (postId) {
          item.classList.add('bm-item--clickable');
          item.setAttribute('role', 'button');
          item.setAttribute('tabindex', '0');
          const ariaOpen = ui.bookmarkOpenForumAria || 'Open forum dilemma';
          const titleText = bookmarkDisplayTitle(row) || postId;
          item.setAttribute('aria-label', `${ariaOpen}: ${titleText}`);
          const openFromBookmark = () => openForumBookmarkFromList(row);
          item.addEventListener('click', (e) => {
            if (e.target.closest('.bm-item-remove')) return;
            openFromBookmark();
          });
          item.addEventListener('keydown', (e) => {
            if (e.target !== item) return;
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openFromBookmark();
            }
          });
        }
      }

      if (row.item_type === 'concept') {
        const term =
          (typeof payload.termKey === 'string' && payload.termKey.trim()
            ? payload.termKey.trim()
            : typeof row.item_key === 'string' && row.item_key.startsWith('concept:')
              ? row.item_key.slice('concept:'.length)
              : '');
        if (term) {
          item.classList.add('bm-item--clickable');
          item.setAttribute('role', 'button');
          item.setAttribute('tabindex', '0');
          const ariaOpen = ui.bookmarkOpenConceptAria || 'Open concept notes';
          const titleText = bookmarkDisplayTitle(row) || term;
          item.setAttribute('aria-label', `${ariaOpen}: ${titleText}`);
          const openFromBookmark = () => {
            closeBookmarks();
            openConcept(term);
          };
          item.addEventListener('click', (e) => {
            if (e.target.closest('.bm-item-remove')) return;
            openFromBookmark();
          });
          item.addEventListener('keydown', (e) => {
            if (e.target !== item) return;
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openFromBookmark();
            }
          });
        }
      }

      item.appendChild(remove);
      colList.appendChild(item);
    });
  }

  col.appendChild(colList);
  grid.appendChild(col);
  } finally {
    refreshDilemmaBookmarkButtons();
  }
}

document.getElementById('btn-bookmarks-toggle')?.addEventListener('click', () => {
  closeOverflowMenu();
  openBookmarks();
});
document.getElementById('btn-close-bookmarks')?.addEventListener('click', closeBookmarks);
document.getElementById('bookmarks-overlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('bookmarks-overlay')) closeBookmarks();
});

/* =============================================
   LEGAL
   ============================================= */
async function loadLegalContent(type) {
  const doc = LEGAL_DOCS[type];
  if (!doc) return getUiText(state.lang).legalMissing;
  const candidates = state.lang === 'zh-Hant' ? [...(doc.zhCandidates || []), ...doc.candidates] : doc.candidates;
  for (const path of candidates) {
    try {
      const res = await fetch(encodeURI(path), { cache: 'no-store' });
      if (res.ok) {
        const text = await res.text();
        if (text.trim()) return text.trim();
      }
    } catch {
      // Try the next likely filename.
    }
  }
  return getUiText(state.lang).legalMissing;
}

async function openLegal(type) {
  const ui = getUiText(state.lang);
  const doc = LEGAL_DOCS[type];
  if (!doc) return;
  closeOverflowMenu();
  legalState.type = type;
  legalState.title = ui[doc.titleKey] || '';
  legalState.content = await loadLegalContent(type);
  document.getElementById('legal-title').textContent = legalState.title;
  document.getElementById('legal-content').textContent = legalState.content;
  document.getElementById('legal-email').hidden = true;
  document.getElementById('legal-email-input').value = '';
  const overlay = document.getElementById('legal-overlay');
  overlay.hidden = false; overlay.style.display = 'flex';
}

function closeLegal() {
  const overlay = document.getElementById('legal-overlay');
  overlay.hidden = true; overlay.style.display = 'none';
}

function showLegalEmailForm() {
  const form = document.getElementById('legal-email');
  form.hidden = false;
  document.getElementById('legal-email-input').focus();
}

function sendLegalEmail() {
  const input = document.getElementById('legal-email-input');
  const email = input.value.trim();
  if (!email) {
    input.focus();
    return;
  }
  const subject = encodeURIComponent(legalState.title || 'Daily Dilemma Legal');
  const body = encodeURIComponent(legalState.content || '');
  location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

document.getElementById('btn-privacy-policy').addEventListener('click', () => {
  openLegal('privacy');
});
document.getElementById('btn-terms-of-use').addEventListener('click', () => {
  openLegal('terms');
});
document.getElementById('btn-close-legal').addEventListener('click', closeLegal);
document.getElementById('legal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('legal-overlay')) closeLegal();
});
document.getElementById('btn-email-legal').addEventListener('click', showLegalEmailForm);
document.getElementById('btn-send-legal-email').addEventListener('click', sendLegalEmail);

/* =============================================
   SHARE MODAL
   ============================================= */
function openShare() {
  const ui = getUiText(state.lang);
  const d = getDilemma();
  document.getElementById('sc-text').textContent = d.text;
  document.getElementById('sc-opt-a').textContent = 'A. ' + d.optA;
  document.getElementById('sc-opt-b').textContent = 'B. ' + d.optB;
  document.getElementById('ec-text').textContent = d.text;
  document.getElementById('ec-opt-a').textContent = 'A. ' + d.optA;
  document.getElementById('ec-opt-b').textContent = 'B. ' + d.optB;
  document.getElementById('share-hint').textContent = '';
  const title = document.querySelector('#share-modal .modal-title');
  if (title) title.textContent = ui.shareTitle;

  const overlay = document.getElementById('share-overlay');
  overlay.hidden = false; overlay.style.display = 'flex';
  document.addEventListener('keydown', escShare);
}

function closeShare() {
  const overlay = document.getElementById('share-overlay');
  overlay.hidden = true; overlay.style.display = 'none';
  document.removeEventListener('keydown', escShare);
}
function escShare(e) { if (e.key === 'Escape') closeShare(); }

function showHint(msg) {
  const h = document.getElementById('share-hint');
  h.textContent = msg;
  setTimeout(() => { h.textContent = ''; }, 3000);
}

document.getElementById('btn-share-trigger').addEventListener('click', openShare);
document.getElementById('btn-close-share').addEventListener('click', closeShare);
document.getElementById('share-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('share-overlay')) closeShare();
});

document.getElementById('btn-download-card').addEventListener('click', async () => {
  const ui = getUiText(state.lang);
  const btn = document.getElementById('btn-download-card');
  btn.textContent = ui.generating; btn.disabled = true;
  try {
    const canvas = await html2canvas(document.getElementById('export-card'), { scale: 2, useCORS: true, backgroundColor: null, logging: false });
    const link = document.createElement('a');
    link.download = (state.profileActive ? 'philosophy-profile.png' : 'daily-decision.png');
    link.href = canvas.toDataURL('image/png');
    link.click();
    showHint(ui.imageSaved);
  } catch { showHint(ui.imageFailed); }
  btn.replaceChildren(cloneTpl('tpl-download-btn-content'));
  const saveTemplate = btn.querySelector('#label-save-image-template');
  if (saveTemplate) saveTemplate.textContent = ui.saveImage;
  btn.disabled = false;
});

document.getElementById('btn-copy-link').addEventListener('click', () => {
  const ui = getUiText(state.lang);
  const d = getDilemma();
  const url = `${location.href.split('#')[0]}#d=${d.id}`;
  navigator.clipboard.writeText(url).then(() => showHint(ui.copiedLink)).catch(() => showHint(ui.copyFailed));
});

document.getElementById('btn-copy-text').addEventListener('click', () => {
  const ui = getUiText(state.lang);
  const d = getDilemma();
  const brand = ui.brandLine;
  const text = `${brand}\n\n"${d.text}"\n\nA. ${d.optA}\nB. ${d.optB}\n\n— daily-dilemmas.philosophy`;
  navigator.clipboard.writeText(text).then(() => showHint(ui.copiedText)).catch(() => showHint(ui.copyFailed));
});

/* =============================================
   GO FURTHER RENDER
   ============================================= */
function renderGoFurther() {
  const ui = getUiText(state.lang);
  const gf = getGoFurther()[state.todayIndex];
  if (!gf) return;
  const gfRaw = GO_FURTHER[state.todayIndex];

  // Clear previous content
  const root = document.getElementById('go-further-body');
  root.replaceChildren();

  const section = document.createElement('div');
  section.id = 'go-further-section';
  section.className = 'go-further';

  function mkBlock(label) {
    const block = document.createElement('div');
    block.className = 'gf-block';
    const p = document.createElement('p');
    p.className = 'gf-block-label';
    p.textContent = label;
    block.appendChild(p);
    return block;
  }

  // Key concepts
  const concepts = mkBlock(ui.keyConcepts);
  const tagsWrap = document.createElement('div');
  tagsWrap.className = 'gf-tags';
  const terms = (gfRaw && Array.isArray(gfRaw.terms)) ? gfRaw.terms : gf.terms;
  terms.forEach((termKey) => {
    const frag = cloneTpl('tpl-go-further-tag');
    const btn = frag.querySelector('button');
    if (btn) {
      btn.textContent = translateTerm(termKey);
      btn.addEventListener('click', () => openConcept(termKey));
    }
    tagsWrap.appendChild(frag);
  });
  concepts.appendChild(tagsWrap);
  section.appendChild(concepts);

  function mkListItem(iconType, href, textNode) {
    const frag = cloneTpl('tpl-go-further-item');
    const a = frag.querySelector('a');
    const svg = frag.querySelector('svg');
    const span = frag.querySelector('.gf-item-text');
    if (a) a.href = href;
    if (span) {
      span.replaceChildren(textNode);
    }
    if (svg) {
      // Fill SVG based on type
      if (iconType === 'book') {
        const p1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p1.setAttribute('d', 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20');
        const p2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p2.setAttribute('d', 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z');
        svg.appendChild(p1); svg.appendChild(p2);
      } else if (iconType === 'video') {
        const r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        r.setAttribute('x', '2'); r.setAttribute('y', '7'); r.setAttribute('width', '20'); r.setAttribute('height', '15'); r.setAttribute('rx', '2');
        const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('d', 'M16 2l-4 5-4-5');
        const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        poly.setAttribute('points', '10 11 16 14 10 17 10 11');
        poly.setAttribute('fill', 'currentColor');
        poly.setAttribute('stroke', 'none');
        svg.appendChild(r); svg.appendChild(p); svg.appendChild(poly);
      }
    }
    return frag;
  }

  // Books
  const books = mkBlock(ui.books);
  const booksList = document.createElement('div');
  booksList.className = 'gf-list';
  gf.books.forEach(b => {
    const q = encodeURIComponent(b.title + ' ' + b.author);
    const href = `https://www.google.com/search?q=${q}`;
    const wrapper = document.createElement('span');
    const strong = document.createElement('strong');
    strong.textContent = b.title;
    const br = document.createElement('br');
    const meta = document.createElement('span');
    meta.className = 'gf-meta';
    meta.textContent = b.author;
    wrapper.appendChild(strong); wrapper.appendChild(br); wrapper.appendChild(meta);
    const row = document.createElement('div');
    row.className = 'gf-row';
    row.appendChild(mkListItem('book', href, wrapper));
    try {
      ensureBookmarksLoaded();
      const itemType = 'book';
      const itemKey = `book:${b.title}|${b.author}`;
      const payload = { title: b.title, author: b.author, href };
      const bm = makeBookmarkBtn({
        itemType,
        itemKey,
        payload,
        dilemmaId: getDilemma().id,
        ariaLabel: ui.bookmarkAdd || 'Bookmark',
        className: 'bm-btn--row',
      });
      setBookmarkBtnActive(bm, isBookmarked(itemType, itemKey));
      row.appendChild(bm);
    } catch (err) {
      console.error(err);
    }
    booksList.appendChild(row);
  });
  books.appendChild(booksList);
  section.appendChild(books);

  // Watch
  const watch = mkBlock(ui.watch);
  const vidsList = document.createElement('div');
  vidsList.className = 'gf-list';
  const videoSearchSuffix = state.lang === 'zh-Hant' ? '哲學' : 'philosophy';
  gf.videos.forEach(v => {
    const span = document.createElement('span');
    span.textContent = v.title;
    const query = encodeURIComponent(`${v.title} ${videoSearchSuffix}`);
    const href = `https://www.youtube.com/results?search_query=${query}`;
    const row = document.createElement('div');
    row.className = 'gf-row';
    row.appendChild(mkListItem('video', href, span));
    try {
      ensureBookmarksLoaded();
      const itemType = 'video';
      const itemKey = `video:${v.title}`;
      const rawUrl = (gfRaw && Array.isArray(gfRaw.videos))
        ? (gfRaw.videos.find(x => x && x.title === v.title)?.url || '')
        : '';
      const payload = { title: v.title, href, url: rawUrl || '' };
      const bm = makeBookmarkBtn({
        itemType,
        itemKey,
        payload,
        dilemmaId: getDilemma().id,
        ariaLabel: ui.bookmarkAdd || 'Bookmark',
        className: 'bm-btn--row',
      });
      setBookmarkBtnActive(bm, isBookmarked(itemType, itemKey));
      row.appendChild(bm);
    } catch (err) {
      console.error(err);
    }
    vidsList.appendChild(row);
  });
  watch.appendChild(vidsList);
  section.appendChild(watch);

  root.appendChild(section);
}

function getConceptNote(term) {
  if (state.lang === 'zh-Hant') {
    const zh = window.CONCEPT_NOTES_ZH_HANT || {};
    return zh[term] || '';
  }
  const en = window.CONCEPT_NOTES_EN || {};
  return en[term] || '';
}

function getConceptLearnMoreUrl(term) {
  const suffix = state.lang === 'zh-Hant' ? '哲學' : 'philosophy';
  const display = state.lang === 'zh-Hant' ? translateTerm(term) : term;
  const q = encodeURIComponent(`${display} ${suffix}`);
  return `https://www.google.com/search?q=${q}`;
}

function openConcept(term) {
  const note = getConceptNote(term);
  const overlay = document.getElementById('concept-overlay');
  const title = document.getElementById('concept-title');
  const noteEl = document.getElementById('concept-note');
  const learnMore = document.getElementById('concept-learn-more');
  if (!overlay || !title || !noteEl || !learnMore) return;

  title.textContent = state.lang === 'zh-Hant' ? translateTerm(term) : term;
  noteEl.textContent = note || (state.lang === 'zh-Hant' ? '暫時未有此概念簡介。' : 'No concept note yet.');
  learnMore.href = getConceptLearnMoreUrl(term);
  learnMore.textContent = state.lang === 'zh-Hant' ? '了解更多' : 'Learn More';
  markConceptExplored(term);

  // Concept bookmark button (left of Learn More)
  try {
    ensureBookmarksLoaded();
    const ui = getUiText(state.lang);
    const actions = learnMore.parentElement;
    if (actions) {
      actions.querySelector('.bm-btn--concept-modal')?.remove();
      const itemType = 'concept';
      const itemKey = `concept:${term}`;
      const payload = { termKey: term, label: translateTerm(term), lang: state.lang };
      const bm = makeBookmarkBtn({
        itemType,
        itemKey,
        payload,
        dilemmaId: getDilemma().id,
        ariaLabel: ui.bookmarkAdd || 'Bookmark',
        className: 'bm-btn--concept-modal',
      });
      setBookmarkBtnActive(bm, isBookmarked(itemType, itemKey));
      actions.insertBefore(bm, learnMore);
    }
  } catch (err) {
    console.error(err);
  }

  overlay.hidden = false;
  overlay.style.display = 'flex';
}

function closeConcept() {
  const overlay = document.getElementById('concept-overlay');
  if (!overlay) return;
  overlay.hidden = true;
  overlay.style.display = 'none';
}

document.getElementById('btn-close-concept')?.addEventListener('click', closeConcept);
document.getElementById('concept-overlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('concept-overlay')) closeConcept();
});

/* =============================================
   KNOWLEDGE MIND MAP
   ============================================= */
function getAllConceptKeys() {
  const set = new Set();
  GO_FURTHER.forEach((entry) => {
    (entry.terms || []).forEach((t) => set.add(t));
  });
  return [...set].sort((a, b) => a.localeCompare(b));
}

function buildConceptLinks() {
  const links = new Map();
  const all = getAllConceptKeys();
  all.forEach((t) => links.set(t, []));

  GO_FURTHER.forEach((entry) => {
    const terms = Array.isArray(entry.terms) ? entry.terms : [];
    terms.forEach((a) => {
      const arr = links.get(a) || [];
      terms.forEach((b) => { if (a !== b) arr.push(b); });
      links.set(a, [...new Set(arr)]);
    });
  });

  return links;
}

function getExploredConcepts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.exploredConcepts);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : []);
  } catch {
    return new Set();
  }
}

function saveExploredConcepts(set) {
  try {
    localStorage.setItem(STORAGE_KEYS.exploredConcepts, JSON.stringify([...set].sort()));
  } catch {
    // Ignore storage failures.
  }
}

function markConceptExplored(term) {
  if (!term) return;
  const explored = getExploredConcepts();
  if (explored.has(term)) return;
  explored.add(term);
  saveExploredConcepts(explored);
  renderKnowledgeHud();
  if (supabaseEnabled()) {
    upsertLearnedConceptKeysToSupabase([term]).catch((err) => console.error(err));
  }
}

/** Mark the four Go Further concept keys for this dilemma as explored (canonical English keys in GO_FURTHER). */
function markConceptsLearnedForDilemmaAtIndex(index) {
  if (!Number.isFinite(index) || index < 0) return;
  const entry = GO_FURTHER[index];
  const terms = entry && Array.isArray(entry.terms) ? entry.terms : [];
  terms.forEach((term) => markConceptExplored(term));
}

/** Backfill explored concepts from all answered dilemmas in history (unique by dilemma id). */
function syncExploredConceptsFromHistory() {
  const dilemmas = getAllDilemmas();
  const seenIds = new Set();
  const explored = getExploredConcepts();
  let changed = false;
  const newTerms = [];
  for (const row of state.history) {
    if (!row || typeof row.id !== 'number') continue;
    if (seenIds.has(row.id)) continue;
    seenIds.add(row.id);
    const idx = dilemmas.findIndex((x) => x.id === row.id);
    if (idx < 0) continue;
    const entry = GO_FURTHER[idx];
    const terms = entry && Array.isArray(entry.terms) ? entry.terms : [];
    for (const term of terms) {
      if (term && !explored.has(term)) {
        explored.add(term);
        changed = true;
        newTerms.push(term);
      }
    }
  }
  if (changed) {
    saveExploredConcepts(explored);
    renderKnowledgeHud();
  }
  if (newTerms.length && supabaseEnabled()) {
    upsertLearnedConceptKeysToSupabase(newTerms).catch((err) => console.error(err));
  }
}

function getProgressionStats() {
  const explored = getExploredConcepts();
  const answeredCount = Array.isArray(state.history) ? new Set(state.history.map((h) => h.id)).size : 0;
  const currentWeek = Math.floor(state.todayIndex / 5) + 1;
  const unlockedWeek = Math.min(10, Math.max(1, currentWeek));
  const xp = answeredCount * 20 + explored.size * 5 + unlockedWeek * 15;
  const level = Math.max(1, Math.floor(xp / 100) + 1);
  const xpIntoLevel = xp % 100;
  const rankTitles = ['Novice Cartographer', 'Ink Trail Seeker', 'Dilemma Ranger', 'Atlas Philosopher', 'Master Wayfinder'];
  const rankTitle = rankTitles[Math.min(rankTitles.length - 1, Math.floor((level - 1) / 3))];
  return { explored, answeredCount, currentWeek, unlockedWeek, xp, level, xpIntoLevel, rankTitle };
}

function renderKnowledgeHud() {
  const stats = getProgressionStats();
  const levelEl = document.getElementById('knowledge-level');
  const rankEl = document.getElementById('knowledge-rank-title');
  const xpText = document.getElementById('knowledge-xp-text');
  const xpFill = document.getElementById('knowledge-xp-fill');
  if (levelEl) levelEl.textContent = String(stats.level);
  if (rankEl) rankEl.textContent = stats.rankTitle;
  if (xpText) xpText.textContent = `${stats.xpIntoLevel} / 100 XP`;
  if (xpFill) xpFill.style.width = `${stats.xpIntoLevel}%`;
}

function renderKnowledgeMap(seed = 1) {
  const viewport = document.getElementById('knowledge-viewport');
  if (!viewport) return;
  viewport.replaceChildren();

  const kmIsZh = state.lang === 'zh-Hant';

  const all = getAllConceptKeys();
  const links = buildConceptLinks();
  // (Removed UI: knowledge-count)
  const progress = getProgressionStats();
  renderKnowledgeHud();

  // Deterministic shuffle for layout variation.
  let s = seed % 2147483647;
  function rnd() { s = (s * 48271) % 2147483647; return s / 2147483647; }

  // Virtual map size (bigger than the visible SVG viewBox).
  // This makes the map feel like a world you can explore by panning.
  const VW = 4200;
  const VH = 2600;
  const cx = VW / 2;
  const cy = VH / 2;
  const radius = 520;
  /** Vertical offset so week chapter plaques sit above concept clusters (must match plaque draw + repel). */
  const WEEK_PLAQUE_TOP_OFFSET = 448;
  const WEEK_PLAQUE_W = 212;
  const WEEK_PLAQUE_H = 42;

  // Build node positions by question + week theme.
  // - Each question: 4 concepts grouped together (circle around them)
  // - Each week: 5 questions grouped (link question circles)
  const pos = new Map(); // conceptKey -> {x,y}
  const qCenters = [];   // [{qid, week, x, y, r, terms}]
  const termWeek = new Map(); // concept -> week index
  const weekCenters = []; // [{week, x, y}]

  const themes = getThemes(); // length 50 (week theme for each question)
  const weeks = 10;

  // Week centers laid out in a 5x2 grid across the big map world.
  const gridCols = 5;
  const cellW = 760;
  const cellH = 980;
  const startX = 520;
  const startY = 520;

  for (let w = 1; w <= weeks; w++) {
    const idx = w - 1;
    const col = idx % gridCols;
    const row = Math.floor(idx / gridCols);
    const x = startX + col * cellW + (rnd() - 0.5) * 120;
    const y = startY + row * cellH + (rnd() - 0.5) * 120;
    weekCenters.push({ week: w, x, y });
  }

  // Place each question cluster around its week center.
  for (let q = 1; q <= 50; q++) {
    const week = Math.floor((q - 1) / 5) + 1;
    const within = (q - 1) % 5; // 0..4
    const wc = weekCenters[week - 1];
    const angle = (within / 5) * Math.PI * 2 + rnd() * 0.25;
    const ringR = 260 + rnd() * 60;
    const qx = wc.x + Math.cos(angle) * ringR;
    const qy = wc.y + Math.sin(angle) * ringR;
    const entry = GO_FURTHER[q - 1];
    const terms = (entry && Array.isArray(entry.terms)) ? entry.terms : [];
    // Big enough so all 4 concept cards sit fully inside.
    qCenters.push({ qid: q, week, x: qx, y: qy, r: 210, terms });

    // Place the 4 concepts in a compact cluster inside the question circle.
    const offsets = [
      { dx: -92, dy: -52 },
      { dx:  92, dy: -52 },
      { dx: -92, dy:  58 },
      { dx:  92, dy:  58 },
    ];
    terms.forEach((t, i) => {
      const o = offsets[i] || { dx: (rnd() - 0.5) * 160, dy: (rnd() - 0.5) * 110 };
      termWeek.set(t, week);
      pos.set(t, { x: qx + o.dx + (rnd() - 0.5) * 10, y: qy + o.dy + (rnd() - 0.5) * 10 });
    });
  }

  // Focus week = current dilemma week; focus neighbors are the 4 concepts in that question.
  const focusQid = state.todayIndex + 1;
  const focusQ = qCenters.find((qq) => qq.qid === focusQid) || qCenters[Math.floor(rnd() * qCenters.length)];
  const focus = (focusQ && focusQ.terms && focusQ.terms[0]) ? focusQ.terms[0] : (all[0] || '');
  const focusNeighbors = new Set((focusQ && focusQ.terms) ? focusQ.terms : []);
  function dist2(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return dx * dx + dy * dy;
  }
  function tryPlace(term, x, y, minD) {
    const p = { x, y };
    for (const v of pos.values()) {
      if (dist2(p, v) < minD * minD) return false;
    }
    pos.set(term, p);
    return true;
  }
  function placeCluster(list, centerX, centerY, minD, tries = 1200, spread = 320) {
    list.forEach((term, i) => {
      if (i === 0) {
        pos.set(term, { x: centerX, y: centerY });
        return;
      }
      for (let t = 0; t < tries; t++) {
        const a = rnd() * Math.PI * 2;
        const r = (0.35 + rnd()) * spread;
        const x = centerX + Math.cos(a) * r;
        const y = centerY + Math.sin(a) * r;
        if (tryPlace(term, x, y, minD)) return;
      }
      // fallback
      pos.set(term, { x: centerX + (rnd() - 0.5) * spread, y: centerY + (rnd() - 0.5) * spread });
    });
  }
  function placeSpread(list, minD, tries = 4000) {
    list.forEach((term) => {
      for (let t = 0; t < tries; t++) {
        const x = 220 + rnd() * (VW - 440);
        const y = 220 + rnd() * (VH - 440);
        if (tryPlace(term, x, y, minD)) return;
      }
      // fallback
      pos.set(term, { x: 220 + rnd() * (VW - 440), y: 220 + rnd() * (VH - 440) });
    });
  }

  const gLinks = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const gLinkAccents = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const gGroups = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const gNodes = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  viewport.appendChild(gLinks);
  viewport.appendChild(gLinkAccents);
  viewport.appendChild(gGroups);
  viewport.appendChild(gNodes);

  // Helpers for a more "map-like" look
  function rgba(r, g, b, a) { return `rgba(${r},${g},${b},${a})`; }
  function hashStr(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0);
  }
  function iconTypeFor(termKey) {
    const types = ['leaf', 'scale', 'book', 'eye', 'spark', 'compass', 'heart', 'shield', 'hammer', 'wave', 'flame', 'key'];
    return types[hashStr(termKey) % types.length];
  }
  function iconPath(type, cx, cy) {
    // Return an SVG path "d" for a small icon centered roughly at cx/cy.
    switch (type) {
      case 'scale': // justice
        return `M ${cx} ${cy-7} V ${cy+7} M ${cx-10} ${cy-4} H ${cx+10} M ${cx-7} ${cy-4} L ${cx-12} ${cy+4} H ${cx-2} Z M ${cx+7} ${cy-4} L ${cx+2} ${cy+4} H ${cx+12} Z`;
      case 'book':
        return `M ${cx-9} ${cy-7} H ${cx+6} Q ${cx+9} ${cy-7} ${cx+9} ${cy-4} V ${cy+7} H ${cx-6} Q ${cx-9} ${cy+7} ${cx-9} ${cy+4} Z M ${cx-6} ${cy-5} H ${cx+6} M ${cx-6} ${cy-1} H ${cx+6} M ${cx-6} ${cy+3} H ${cx+6}`;
      case 'eye':
        return `M ${cx-12} ${cy} Q ${cx} ${cy-10} ${cx+12} ${cy} Q ${cx} ${cy+10} ${cx-12} ${cy} Z M ${cx} ${cy} m -3 0 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0`;
      case 'spark':
        return `M ${cx} ${cy-10} L ${cx+2} ${cy-2} L ${cx+10} ${cy} L ${cx+2} ${cy+2} L ${cx} ${cy+10} L ${cx-2} ${cy+2} L ${cx-10} ${cy} L ${cx-2} ${cy-2} Z`;
      case 'compass':
        return `M ${cx} ${cy-9} L ${cx+5} ${cy+7} L ${cx} ${cy+4} L ${cx-5} ${cy+7} Z M ${cx} ${cy-3} m -2 0 a 2 2 0 1 0 4 0 a 2 2 0 1 0 -4 0`;
      case 'heart':
        return `M ${cx} ${cy+7} C ${cx-10} ${cy-1} ${cx-6} ${cy-10} ${cx} ${cy-4} C ${cx+6} ${cy-10} ${cx+10} ${cy-1} ${cx} ${cy+7} Z`;
      case 'shield':
        return `M ${cx} ${cy-9} L ${cx+9} ${cy-5} V ${cy+2} Q ${cx+9} ${cy+8} ${cx} ${cy+10} Q ${cx-9} ${cy+8} ${cx-9} ${cy+2} V ${cy-5} Z`;
      case 'hammer':
        return `M ${cx-10} ${cy-6} H ${cx-2} V ${cy-2} H ${cx-6} L ${cx+8} ${cy+12} L ${cx+6} ${cy+14} L ${cx-8} ${cy} H ${cx-10} Z`;
      case 'wave':
        return `M ${cx-12} ${cy+2} C ${cx-8} ${cy-2} ${cx-4} ${cy+6} ${cx} ${cy+2} C ${cx+4} ${cy-2} ${cx+8} ${cy+6} ${cx+12} ${cy+2}`;
      case 'flame':
        return `M ${cx} ${cy-10} C ${cx+6} ${cy-4} ${cx+4} ${cy} ${cx+1} ${cy+4} C ${cx-1} ${cy+7} ${cx-6} ${cy+6} ${cx-6} ${cy} C ${cx-6} ${cy-6} ${cx-2} ${cy-6} ${cx} ${cy-10} Z`;
      case 'key':
        return `M ${cx-4} ${cy+1} a 5 5 0 1 1 4 4 h 8 v 3 h -3 v 3 h -3 v -3 h -2 a 5 5 0 0 1 -4 -4 z`;
      case 'leaf':
      default:
        return `M ${cx-4} ${cy+3} C ${cx-1} ${cy-7}, ${cx+7} ${cy-7}, ${cx+4} ${cy+3} C ${cx+1} ${cy+6}, ${cx-1} ${cy+6}, ${cx-4} ${cy+3} Z`;
    }
  }
  function mkPath(x1, y1, x2, y2, bend = 0.22) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    // Perpendicular control point for gentle curve
    const nx = -dy;
    const ny = dx;
    const len = Math.hypot(nx, ny) || 1;
    const ux = nx / len;
    const uy = ny / len;
    const cpx = mx + ux * Math.hypot(dx, dy) * bend;
    const cpy = my + uy * Math.hypot(dx, dy) * bend;
    return `M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`;
  }

  // Draw question circles and week linking (circle-to-circle).
  const themesByWeek = new Map();
  for (let q = 1; q <= 50; q++) {
    const w = Math.floor((q - 1) / 5) + 1;
    themesByWeek.set(w, themes[q - 1]);
  }

  // (Circles removed per request.)

  // Chapter plaques + fog-of-war banners for week progression.
  weekCenters.forEach((wc) => {
    const th = themesByWeek.get(wc.week);
    if (wc.week <= progress.unlockedWeek) {
      const plaque = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      plaque.setAttribute('opacity', wc.week === progress.currentWeek ? '0.95' : '0.68');
      const pr = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      pr.setAttribute('x', String(wc.x - WEEK_PLAQUE_W / 2));
      pr.setAttribute('y', String(wc.y - WEEK_PLAQUE_TOP_OFFSET));
      pr.setAttribute('width', String(WEEK_PLAQUE_W));
      pr.setAttribute('height', String(WEEK_PLAQUE_H));
      pr.setAttribute('rx', '16');
      pr.setAttribute('fill', rgba(248, 241, 222, 0.72));
      pr.setAttribute('stroke', th?.color || rgba(120, 100, 80, 0.24));
      pr.setAttribute('stroke-width', wc.week === progress.currentWeek ? '2.2' : '1.4');
      const pt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      pt.setAttribute('x', String(wc.x));
      pt.setAttribute('y', String(wc.y - WEEK_PLAQUE_TOP_OFFSET + WEEK_PLAQUE_H / 2));
      pt.setAttribute('text-anchor', 'middle');
      pt.setAttribute('dominant-baseline', 'middle');
      pt.setAttribute('font-family', 'DM Serif Display, Georgia, serif');
      pt.setAttribute('font-size', '17');
      pt.setAttribute('fill', rgba(40, 32, 24, 0.70));
      const weekLabel = state.lang === 'zh-Hant' ? `第 ${wc.week} 週` : `Week ${wc.week}`;
      pt.textContent = th?.name ? `${weekLabel} · ${th.name}` : weekLabel;
      plaque.appendChild(pr);
      plaque.appendChild(pt);
      gGroups.appendChild(plaque);
      return;
    }
    const banner = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    banner.setAttribute('opacity', '0.78');
    const r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    r.setAttribute('x', String(wc.x - 92));
    r.setAttribute('y', String(wc.y - 28));
    r.setAttribute('width', '184');
    r.setAttribute('height', '56');
    r.setAttribute('rx', '18');
    r.setAttribute('fill', rgba(248, 241, 222, 0.78));
    r.setAttribute('stroke', th?.color || rgba(120, 100, 80, 0.22));
    r.setAttribute('stroke-width', '1.6');
    r.setAttribute('stroke-dasharray', '3 6');
    const lock = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    lock.setAttribute('d', `M ${wc.x - 58} ${wc.y - 2} h 18 v 15 h -18 Z M ${wc.x - 54} ${wc.y - 2} v -8 q 5 -8 10 0 v 8`);
    lock.setAttribute('fill', 'none');
    lock.setAttribute('stroke', rgba(120, 100, 80, 0.46));
    lock.setAttribute('stroke-width', '1.8');
    lock.setAttribute('stroke-linejoin', 'round');
    lock.setAttribute('stroke-linecap', 'round');
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', String(wc.x - 28));
    label.setAttribute('y', String(wc.y + 2));
    label.setAttribute('dominant-baseline', 'middle');
    label.setAttribute('font-family', 'DM Serif Display, Georgia, serif');
    label.setAttribute('font-size', '17');
    label.setAttribute('fill', rgba(40, 32, 24, 0.62));
    label.textContent = state.lang === 'zh-Hant' ? `第 ${wc.week} 週未解鎖` : `Week ${wc.week} Locked`;
    banner.appendChild(r);
    banner.appendChild(lock);
    banner.appendChild(label);
    gGroups.appendChild(banner);
  });

  // Link each question-circle to the other 4 in the same week (subtle dotted curves).
  for (let w = 1; w <= 10; w++) {
    const qs = qCenters.filter(q => q.week === w);
    for (let i = 0; i < qs.length; i++) {
      for (let j = i + 1; j < qs.length; j++) {
        const a = qs[i], b = qs[j];
        const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('d', mkPath(a.x, a.y, b.x, b.y, 0.08));
        p.setAttribute('fill', 'none');
        p.setAttribute('stroke', themesByWeek.get(w)?.color || rgba(120, 100, 80, 0.18));
        p.setAttribute('stroke-width', '1.4');
        p.setAttribute('stroke-linecap', 'round');
        p.setAttribute('stroke-dasharray', '3 8');
        gGroups.appendChild(p);
      }
    }
  }

  // Ensure no overlap: simple rectangle collision repel.
  const repelW = kmIsZh ? 226 : 148;
  const repelH = kmIsZh ? 86 : 56;
  const repelPad = 10;
  const keys = all.slice();
  for (let iter = 0; iter < 90; iter++) {
    let moved = 0;
    for (let i = 0; i < keys.length; i++) {
      const a = keys[i];
      const pa = pos.get(a);
      if (!pa) continue;
      for (let j = i + 1; j < keys.length; j++) {
        const b = keys[j];
        const pb = pos.get(b);
        if (!pb) continue;
        const dx = pb.x - pa.x;
        const dy = pb.y - pa.y;
        const ox = (repelW + repelPad) - Math.abs(dx);
        const oy = (repelH + repelPad) - Math.abs(dy);
        if (ox > 0 && oy > 0) {
          const sx = dx === 0 ? (rnd() - 0.5) : Math.sign(dx);
          const sy = dy === 0 ? (rnd() - 0.5) : Math.sign(dy);
          const pushX = (ox / 2) * 0.35 * sx;
          const pushY = (oy / 2) * 0.35 * sy;
          pa.x -= pushX; pb.x += pushX;
          pa.y -= pushY; pb.y += pushY;
          moved++;
        }
      }
      // Keep concept cards out of week chapter plaque bands (labels sit above week hubs).
      const halfCardW = repelW / 2;
      const halfCardH = repelH / 2;
      const plaquePad = 18;
      for (const wch of weekCenters) {
        if (wch.week > progress.unlockedWeek) continue;
        const prc = {
          left: wch.x - WEEK_PLAQUE_W / 2 - plaquePad,
          top: wch.y - WEEK_PLAQUE_TOP_OFFSET - plaquePad,
          right: wch.x + WEEK_PLAQUE_W / 2 + plaquePad,
          bottom: wch.y - WEEK_PLAQUE_TOP_OFFSET + WEEK_PLAQUE_H + plaquePad,
        };
        const caLeft = pa.x - halfCardW;
        const caTop = pa.y - halfCardH;
        const caRight = pa.x + halfCardW;
        const caBottom = pa.y + halfCardH;
        if (caLeft < prc.right && caRight > prc.left && caTop < prc.bottom && caBottom > prc.top) {
          const overlapX = Math.min(caRight, prc.right) - Math.max(caLeft, prc.left);
          const overlapY = Math.min(caBottom, prc.bottom) - Math.max(caTop, prc.top);
          if (overlapX > 0 && overlapY > 0) {
            const pcx = (prc.left + prc.right) / 2;
            if (overlapY <= overlapX + 4) {
              pa.y = prc.bottom + halfCardH + 10;
            } else {
              pa.x += pa.x < pcx ? -(overlapX * 0.55 + 10) : (overlapX * 0.55 + 10);
            }
            moved++;
          }
        }
      }
      // Keep within frame (extra margin to avoid ornaments/frame).
      pa.x = clamp(pa.x, 170, VW - 170);
      pa.y = clamp(pa.y, 170, VH - 170);
    }
    if (moved === 0) break;
  }

  // Decorative placements must avoid concept cards and week chapter plaques (same layer family).
  const DECO_PAD = 24;
  const decoAvoidRects = (() => {
    const rects = [];
    for (const termKey of all) {
      const p = pos.get(termKey);
      if (!p) continue;
      const isFocus = focusNeighbors.has(termKey);
      const cw = (isFocus ? (kmIsZh ? 210 : 168) : (kmIsZh ? 198 : 156)) + DECO_PAD * 2;
      const ch = (isFocus ? (kmIsZh ? 78 : 56) : (kmIsZh ? 74 : 52)) + DECO_PAD * 2;
      rects.push({
        left: p.x - cw / 2,
        top: p.y - ch / 2,
        right: p.x + cw / 2,
        bottom: p.y + ch / 2,
      });
    }
    const decoPlaquePad = 32;
    weekCenters.forEach((wch) => {
      if (wch.week <= progress.unlockedWeek) {
        rects.push({
          left: wch.x - WEEK_PLAQUE_W / 2 - decoPlaquePad,
          top: wch.y - WEEK_PLAQUE_TOP_OFFSET - decoPlaquePad,
          right: wch.x + WEEK_PLAQUE_W / 2 + decoPlaquePad,
          bottom: wch.y - WEEK_PLAQUE_TOP_OFFSET + WEEK_PLAQUE_H + decoPlaquePad,
        });
      }
    });
    return rects;
  })();

  function rectHitsConcepts(left, top, right, bottom) {
    for (const r of decoAvoidRects) {
      if (left < r.right && right > r.left && top < r.bottom && bottom > r.top) return true;
    }
    return false;
  }
  function circleHitsConcepts(ccx, ccy, rad) {
    for (const r of decoAvoidRects) {
      const nx = Math.max(r.left, Math.min(ccx, r.right));
      const ny = Math.max(r.top, Math.min(ccy, r.bottom));
      const dx = ccx - nx;
      const dy = ccy - ny;
      if (dx * dx + dy * dy < rad * rad) return true;
    }
    return false;
  }
  function segmentHitsConcepts(x1, y1, x2, y2, inflate = 6) {
    const steps = 6;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const px = x1 + (x2 - x1) * t;
      const py = y1 + (y2 - y1) * t;
      if (circleHitsConcepts(px, py, inflate)) return true;
    }
    return false;
  }

  // Concept ↔ concept links (after layout repel) + small accents offset beside each connector.
  const seenConceptLinks = new Set();
  function linkControlPoint(x1, y1, x2, y2, bend) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const nx = -dy;
    const ny = dx;
    const len = Math.hypot(nx, ny) || 1;
    const ux = nx / len;
    const uy = ny / len;
    return {
      cpx: mx + ux * Math.hypot(dx, dy) * bend,
      cpy: my + uy * Math.hypot(dx, dy) * bend,
    };
  }
  function quadBezierPt(x1, y1, cpx, cpy, x2, y2, t) {
    const u = 1 - t;
    return {
      x: u * u * x1 + 2 * u * t * cpx + t * t * x2,
      y: u * u * y1 + 2 * u * t * cpy + t * t * y2,
    };
  }
  function quadPerp(x1, y1, cpx, cpy, x2, y2, t) {
    const tx = 2 * (1 - t) * (cpx - x1) + 2 * t * (x2 - cpx);
    const ty = 2 * (1 - t) * (cpy - y1) + 2 * t * (y2 - cpy);
    const pl = Math.hypot(tx, ty) || 1;
    return { px: -ty / pl, py: tx / pl };
  }
  gLinkAccents.setAttribute('aria-hidden', 'true');
  all.forEach((a) => {
    const aPos = pos.get(a);
    if (!aPos) return;
    (links.get(a) || []).forEach((b) => {
      const key = a < b ? `${a}__${b}` : `${b}__${a}`;
      if (seenConceptLinks.has(key)) return;
      seenConceptLinks.add(key);
      const bPos = pos.get(b);
      if (!bPos) return;

      const bend = focusNeighbors.has(a) && focusNeighbors.has(b) ? 0.12 : 0.22;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', mkPath(aPos.x, aPos.y, bPos.x, bPos.y, bend));
      path.setAttribute('fill', 'none');
      const isStrong = focusNeighbors.has(a) && focusNeighbors.has(b);
      const isLockedLink = (termWeek.get(a) || 1) > progress.unlockedWeek || (termWeek.get(b) || 1) > progress.unlockedWeek;
      path.setAttribute('stroke', isLockedLink ? rgba(120, 100, 80, 0.10) : (isStrong ? rgba(197, 96, 58, 0.55) : rgba(120, 100, 80, 0.26)));
      path.setAttribute('stroke-width', isLockedLink ? '1' : (isStrong ? '2.4' : '1.25'));
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-dasharray', isLockedLink ? '1 10' : (isStrong ? '0' : '2.5 6'));
      gLinks.appendChild(path);

      const cp = linkControlPoint(aPos.x, aPos.y, bPos.x, bPos.y, bend);
      const chord = Math.hypot(bPos.x - aPos.x, bPos.y - aPos.y);
      const samples = chord > 260 ? [0.22, 0.42, 0.58, 0.78] : chord > 160 ? [0.32, 0.5, 0.68] : [0.5];
      const side = (hashStr(key) % 2) ? 1 : -1;
      const strokeRgb = isLockedLink ? [120, 100, 80] : (isStrong ? [197, 96, 58] : [120, 100, 80]);
      const fillA = isLockedLink ? 0.12 : (isStrong ? 0.38 : 0.2);
      samples.forEach((t, idx) => {
        const p0 = quadBezierPt(aPos.x, aPos.y, cp.cpx, cp.cpy, bPos.x, bPos.y, t);
        const pr = quadPerp(aPos.x, aPos.y, cp.cpx, cp.cpy, bPos.x, bPos.y, t);
        const off = 9 + (idx % 3) * 2.2;
        let ax = p0.x + pr.px * off * side;
        let ay = p0.y + pr.py * off * side;
        if (circleHitsConcepts(ax, ay, 7)) {
          ax = p0.x - pr.px * off * side;
          ay = p0.y - pr.py * off * side;
        }
        if (circleHitsConcepts(ax, ay, 7)) return;
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', String(ax));
        dot.setAttribute('cy', String(ay));
        dot.setAttribute('r', String(isStrong ? 2.1 : 1.5));
        dot.setAttribute('fill', rgba(strokeRgb[0], strokeRgb[1], strokeRgb[2], fillA));
        gLinkAccents.appendChild(dot);
        if (!isLockedLink && samples.length > 1 && idx === Math.floor(samples.length / 2)) {
          const tick = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          const tx = ax - pr.py * 5;
          const ty = ay + pr.px * 5;
          tick.setAttribute('d', `M ${tx} ${ty} l ${pr.px * 9} ${pr.py * 9}`);
          tick.setAttribute('fill', 'none');
          tick.setAttribute('stroke', rgba(strokeRgb[0], strokeRgb[1], strokeRgb[2], fillA * 0.95));
          tick.setAttribute('stroke-width', '1.05');
          tick.setAttribute('stroke-linecap', 'round');
          gLinkAccents.appendChild(tick);
        }
      });
    });
  });

  // Decorative compass + subtle grid dots (mocking the reference style)
  const deco = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  function addCornerOrnament(cornerX, cornerY, sx, sy) {
    const orn = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    orn.setAttribute('transform', `translate(${cornerX} ${cornerY}) scale(${sx} ${sy})`);
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute(
      'd',
      'M 0 42 C 10 18 26 10 42 0 M 0 22 C 7 13 13 7 22 0 M 18 42 C 22 32 32 22 42 18 M 10 30 L 16 24 M 24 16 L 30 10'
    );
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', rgba(120, 100, 80, 0.24));
    p.setAttribute('stroke-width', '1.5');
    p.setAttribute('stroke-linecap', 'round');
    p.setAttribute('stroke-linejoin', 'round');
    orn.appendChild(p);
    deco.appendChild(orn);
  }
  function addCornerOrnamentSafe(cornerX, cornerY, sx, sy) {
    const ext = 46 * Math.max(Math.abs(sx), Math.abs(sy));
    const left = sx >= 0 ? cornerX : cornerX - ext;
    const top = sy >= 0 ? cornerY : cornerY - ext;
    if (rectHitsConcepts(left, top, left + ext, top + ext)) return;
    addCornerOrnament(cornerX, cornerY, sx, sy);
  }
  addCornerOrnamentSafe(34, 34, 1, 1);
  addCornerOrnamentSafe(VW - 34, 34, -1, 1);
  addCornerOrnamentSafe(34, VH - 34, 1, -1);
  addCornerOrnamentSafe(VW - 34, VH - 34, -1, -1);

  let dotsPlaced = 0;
  for (let attempts = 0; attempts < 9000 && dotsPlaced < 620; attempts++) {
    const x = 120 + rnd() * (VW - 240);
    const y = 120 + rnd() * (VH - 240);
    if (circleHitsConcepts(x, y, 4)) continue;
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', String(x));
    dot.setAttribute('cy', String(y));
    dot.setAttribute('r', String(0.9 + rnd() * 0.6));
    dot.setAttribute('fill', rgba(120, 100, 80, 0.09 + rnd() * 0.08));
    deco.appendChild(dot);
    dotsPlaced++;
  }
  let sketchPlaced = 0;
  for (let attempts = 0; attempts < 14000 && sketchPlaced < 520; attempts++) {
    const x1 = 100 + rnd() * (VW - 200);
    const y1 = 100 + rnd() * (VH - 200);
    const len = 28 + rnd() * 140;
    const ang = rnd() * Math.PI * 2;
    const x2 = x1 + Math.cos(ang) * len;
    const y2 = y1 + Math.sin(ang) * len;
    if (segmentHitsConcepts(x1, y1, x2, y2, 7)) continue;
    const sk = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    sk.setAttribute('d', `M ${x1} ${y1} L ${x2} ${y2}`);
    sk.setAttribute('fill', 'none');
    sk.setAttribute('stroke', rgba(120, 100, 80, 0.11 + rnd() * 0.1));
    sk.setAttribute('stroke-width', String(0.8 + rnd() * 0.6));
    sk.setAttribute('stroke-linecap', 'round');
    sk.setAttribute('stroke-dasharray', rnd() < 0.55 ? '2 7' : '1 8');
    deco.appendChild(sk);
    sketchPlaced++;
  }
  let tickPlaced = 0;
  for (let attempts = 0; attempts < 7000 && tickPlaced < 240; attempts++) {
    const tx = 110 + rnd() * (VW - 220);
    const ty = 110 + rnd() * (VH - 220);
    if (circleHitsConcepts(tx, ty, 14)) continue;
    const tick = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    if (rnd() < 0.5) {
      tick.setAttribute('d', `M ${tx - 5} ${ty} L ${tx + 5} ${ty} M ${tx} ${ty - 5} L ${tx} ${ty + 5}`);
    } else {
      tick.setAttribute('d', `M ${tx - 4} ${ty - 4} L ${tx + 4} ${ty + 4} M ${tx + 4} ${ty - 4} L ${tx - 4} ${ty + 4}`);
    }
    tick.setAttribute('fill', 'none');
    tick.setAttribute('stroke', rgba(154, 117, 66, 0.14 + rnd() * 0.12));
    tick.setAttribute('stroke-width', '1.1');
    tick.setAttribute('stroke-linecap', 'round');
    deco.appendChild(tick);
    tickPlaced++;
  }
  // Faint route curves between week hubs for an explorer-map feel.
  for (let i = 0; i < weekCenters.length - 1; i++) {
    const a = weekCenters[i];
    const b = weekCenters[i + 1];
    const route = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    route.setAttribute('d', mkPath(a.x, a.y, b.x, b.y, 0.15));
    route.setAttribute('fill', 'none');
    route.setAttribute('stroke', rgba(154, 117, 66, 0.28));
    route.setAttribute('stroke-width', '1.6');
    route.setAttribute('stroke-dasharray', '2 9');
    deco.appendChild(route);
  }

  function addCompass(compCx, compCy, size = 34) {
    const compass = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const compOuter = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    compOuter.setAttribute('cx', String(compCx));
    compOuter.setAttribute('cy', String(compCy));
    compOuter.setAttribute('r', String(size));
    compOuter.setAttribute('fill', rgba(255, 255, 255, 0.50));
    compOuter.setAttribute('stroke', rgba(120, 100, 80, 0.25));
    compOuter.setAttribute('stroke-width', '2');

    const compNeedle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    compNeedle.setAttribute('d', `M ${compCx} ${compCy-(size-12)} L ${compCx+7} ${compCy+8} L ${compCx} ${compCy+4} L ${compCx-7} ${compCy+8} Z`);
    compNeedle.setAttribute('fill', rgba(197, 96, 58, 0.55));

    const compNeedle2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    compNeedle2.setAttribute('d', `M ${compCx} ${compCy+(size-12)} L ${compCx+7} ${compCy-8} L ${compCx} ${compCy-4} L ${compCx-7} ${compCy-8} Z`);
    compNeedle2.setAttribute('fill', rgba(74, 135, 168, 0.45));

    compass.appendChild(compOuter);
    compass.appendChild(compNeedle);
    compass.appendChild(compNeedle2);
    deco.appendChild(compass);
  }

  function addShip(shipX, shipY, scale = 1) {
    const ship = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    ship.setAttribute('transform', `translate(${shipX} ${shipY}) scale(${scale}) translate(${-shipX} ${-shipY})`);
    const hull = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    hull.setAttribute('d', `M ${shipX} ${shipY} h 70 l -10 22 h -50 Z`);
    hull.setAttribute('fill', rgba(120, 100, 80, 0.16));
    const mast = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    mast.setAttribute('d', `M ${shipX+35} ${shipY-38} v 38 M ${shipX+35} ${shipY-38} l 22 14 h -22 Z`);
    mast.setAttribute('fill', rgba(120, 100, 80, 0.12));
    mast.setAttribute('stroke', rgba(120, 100, 80, 0.12));
    ship.appendChild(hull);
    ship.appendChild(mast);
    deco.appendChild(ship);

    // A few wave strokes under the ship
    for (let i = 0; i < 5; i++) {
      const w = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const y = shipY + 40 + i * 10;
      w.setAttribute('d', `M ${shipX-30} ${y} C ${shipX-10} ${y-6} ${shipX+10} ${y+6} ${shipX+30} ${y} C ${shipX+50} ${y-6} ${shipX+70} ${y+6} ${shipX+90} ${y}`);
      w.setAttribute('fill', 'none');
      w.setAttribute('stroke', rgba(74, 135, 168, 0.18));
      w.setAttribute('stroke-width', '1.6');
      w.setAttribute('stroke-linecap', 'round');
      w.setAttribute('stroke-dasharray', '0');
      deco.appendChild(w);
    }
  }

  function addLandmark(lx, ly) {
    const land = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    base.setAttribute('d', `M ${lx-20} ${ly+12} H ${lx+20} M ${lx-12} ${ly+12} V ${ly-10} H ${lx+12} V ${ly+12} M ${lx-6} ${ly-10} V ${ly-18} H ${lx+6} V ${ly-10}`);
    base.setAttribute('fill', 'none');
    base.setAttribute('stroke', rgba(120, 100, 80, 0.20));
    base.setAttribute('stroke-width', '1.4');
    base.setAttribute('stroke-linecap', 'round');
    base.setAttribute('stroke-linejoin', 'round');
    land.appendChild(base);
    deco.appendChild(land);
  }

  function addFunnyFish(fx, fy, s = 1) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${fx} ${fy}) scale(${s}) translate(${-fx} ${-fy})`);
    const body = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    body.setAttribute('d', `M ${fx-18} ${fy} C ${fx-6} ${fy-10} ${fx+10} ${fy-10} ${fx+18} ${fy} C ${fx+10} ${fy+10} ${fx-6} ${fy+10} ${fx-18} ${fy} Z`);
    body.setAttribute('fill', 'none');
    body.setAttribute('stroke', rgba(120, 100, 80, 0.18));
    body.setAttribute('stroke-width', '1.4');
    body.setAttribute('stroke-linecap', 'round');
    const tail = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tail.setAttribute('d', `M ${fx-18} ${fy} L ${fx-28} ${fy-8} L ${fx-28} ${fy+8} Z`);
    tail.setAttribute('fill', rgba(120, 100, 80, 0.10));
    tail.setAttribute('stroke', rgba(120, 100, 80, 0.18));
    tail.setAttribute('stroke-width', '1.2');
    const eye = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    eye.setAttribute('cx', String(fx + 10));
    eye.setAttribute('cy', String(fy - 2));
    eye.setAttribute('r', '1.8');
    eye.setAttribute('fill', rgba(120, 100, 80, 0.28));
    g.appendChild(body);
    g.appendChild(tail);
    g.appendChild(eye);
    deco.appendChild(g);
  }

  function addTreasureChest(cx, cy, s = 1) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`);

    const box = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    box.setAttribute('x', String(cx - 14));
    box.setAttribute('y', String(cy - 8));
    box.setAttribute('width', '28');
    box.setAttribute('height', '18');
    box.setAttribute('rx', '4');
    box.setAttribute('fill', rgba(120, 100, 80, 0.07));
    box.setAttribute('stroke', rgba(120, 100, 80, 0.20));
    box.setAttribute('stroke-width', '1.2');

    const lid = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    lid.setAttribute('d', `M ${cx-14} ${cy-8} Q ${cx} ${cy-16} ${cx+14} ${cy-8}`);
    lid.setAttribute('fill', 'none');
    lid.setAttribute('stroke', rgba(120, 100, 80, 0.20));
    lid.setAttribute('stroke-width', '1.2');
    lid.setAttribute('stroke-linecap', 'round');

    const latch = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    latch.setAttribute('x', String(cx - 2.5));
    latch.setAttribute('y', String(cy - 1));
    latch.setAttribute('width', '5');
    latch.setAttribute('height', '7');
    latch.setAttribute('rx', '2');
    latch.setAttribute('fill', rgba(197, 160, 90, 0.18));
    latch.setAttribute('stroke', rgba(120, 100, 80, 0.18));
    latch.setAttribute('stroke-width', '1');

    g.appendChild(box);
    g.appendChild(lid);
    g.appendChild(latch);
    deco.appendChild(g);
  }

  function addWaveBand(wx, wy, sc) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${wx} ${wy}) scale(${sc})`);
    for (let k = -1; k <= 1; k++) {
      const wv = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const oy = k * 6;
      wv.setAttribute('d', `M -22 ${oy} Q 0 ${oy - 4} 22 ${oy}`);
      wv.setAttribute('fill', 'none');
      wv.setAttribute('stroke', rgba(74, 135, 168, 0.22));
      wv.setAttribute('stroke-width', '1.35');
      wv.setAttribute('stroke-linecap', 'round');
      g.appendChild(wv);
    }
    deco.appendChild(g);
  }
  function addTreeGlyph(tx, ty, sc) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${tx} ${ty}) scale(${sc})`);
    const crown = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    crown.setAttribute('d', 'M 0 -12 L 11 6 L -11 6 Z');
    crown.setAttribute('fill', rgba(82, 118, 72, 0.20));
    crown.setAttribute('stroke', rgba(120, 100, 80, 0.26));
    crown.setAttribute('stroke-width', '1.2');
    const trunk = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    trunk.setAttribute('d', 'M -2.5 6 L -2.5 13 L 2.5 13 L 2.5 6');
    trunk.setAttribute('fill', rgba(120, 100, 80, 0.14));
    trunk.setAttribute('stroke', rgba(120, 100, 80, 0.22));
    trunk.setAttribute('stroke-width', '1');
    g.appendChild(crown);
    g.appendChild(trunk);
    deco.appendChild(g);
  }
  function addAnchorGlyph(ax, ay, sc) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${ax} ${ay}) scale(${sc})`);
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', 'M 0 -10 v 16 M -8 2 Q 0 10 8 2 M -6 10 H 6');
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', rgba(120, 100, 80, 0.28));
    p.setAttribute('stroke-width', '1.5');
    p.setAttribute('stroke-linecap', 'round');
    g.appendChild(p);
    deco.appendChild(g);
  }
  function addShellGlyph(sx, sy, sc) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${sx} ${sy}) scale(${sc})`);
    const sh = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    sh.setAttribute('d', 'M -10 4 Q 0 -10 10 4 Q 0 8 -10 4');
    sh.setAttribute('fill', rgba(120, 100, 80, 0.08));
    sh.setAttribute('stroke', rgba(120, 100, 80, 0.26));
    sh.setAttribute('stroke-width', '1.2');
    g.appendChild(sh);
    deco.appendChild(g);
  }
  function addHillGlyph(hx, hy, sc) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${hx} ${hy}) scale(${sc})`);
    const hill = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    hill.setAttribute('d', 'M -18 6 Q 0 -6 18 6');
    hill.setAttribute('fill', 'none');
    hill.setAttribute('stroke', rgba(120, 100, 80, 0.22));
    hill.setAttribute('stroke-width', '1.4');
    hill.setAttribute('stroke-linecap', 'round');
    g.appendChild(hill);
    deco.appendChild(g);
  }
  function addSparkGlyph(sx, sy, sc) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${sx} ${sy}) scale(${sc})`);
    const sp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    sp.setAttribute('d', 'M 0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z');
    sp.setAttribute('fill', rgba(197, 96, 58, 0.15));
    sp.setAttribute('stroke', rgba(120, 100, 80, 0.22));
    sp.setAttribute('stroke-width', '1');
    g.appendChild(sp);
    deco.appendChild(g);
  }

  function addSparkleStamp(sx, sy, color = rgba(197, 96, 58, 0.55)) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${sx} ${sy})`);

    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ring.setAttribute('cx', '0');
    ring.setAttribute('cy', '0');
    ring.setAttribute('r', '18');
    ring.setAttribute('fill', rgba(255, 255, 255, 0.0));
    ring.setAttribute('stroke', color);
    ring.setAttribute('stroke-width', '2');
    ring.setAttribute('stroke-dasharray', '2 6');
    ring.setAttribute('opacity', '0.65');

    const star = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    star.setAttribute('d', 'M 0 -10 L 2 -2 L 10 0 L 2 2 L 0 10 L -2 2 L -10 0 L -2 -2 Z');
    star.setAttribute('fill', rgba(255, 255, 255, 0.35));
    star.setAttribute('stroke', color);
    star.setAttribute('stroke-width', '1.6');
    star.setAttribute('stroke-linejoin', 'round');

    // Subtle pulse (no JS timers).
    const a1 = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
    a1.setAttribute('attributeName', 'transform');
    a1.setAttribute('type', 'scale');
    a1.setAttribute('values', '1;1.06;1');
    a1.setAttribute('dur', '2.4s');
    a1.setAttribute('repeatCount', 'indefinite');
    const a2 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    a2.setAttribute('attributeName', 'opacity');
    a2.setAttribute('values', '0.55;0.85;0.55');
    a2.setAttribute('dur', '2.4s');
    a2.setAttribute('repeatCount', 'indefinite');
    g.appendChild(a1);
    g.appendChild(a2);

    g.appendChild(ring);
    g.appendChild(star);
    deco.appendChild(g);
  }

  function tryPlaceCompass(prefX, prefY, prefSize) {
    for (let t = 0; t < 70; t++) {
      const x = t === 0 ? prefX : (200 + rnd() * (VW - 400));
      const y = t === 0 ? prefY : (200 + rnd() * (VH - 400));
      const sz = t === 0 ? prefSize : (24 + rnd() * 14);
      if (!circleHitsConcepts(x, y, sz + 12)) {
        addCompass(x, y, sz);
        return;
      }
    }
  }
  tryPlaceCompass(160, 150, 34);
  for (let i = 0; i < 9; i++) {
    tryPlaceCompass(240 + rnd() * (VW - 480), 220 + rnd() * (VH - 440), 26 + rnd() * 12);
  }

  function tryPlaceShip(prefX, prefY, prefSc) {
    for (let t = 0; t < 55; t++) {
      const x = t === 0 ? prefX : (520 + rnd() * (VW - 1040));
      const y = t === 0 ? prefY : (280 + rnd() * (VH - 560));
      const sc = t === 0 ? prefSc : (0.75 + rnd() * 0.35);
      const bw = 100 * sc;
      const bh = 95 * sc;
      if (!rectHitsConcepts(x - bw, y - bh - 40 * sc, x + bw, y + bh)) {
        addShip(x, y, sc);
        return;
      }
    }
  }
  tryPlaceShip(3720, 190, 1);
  for (let i = 0; i < 5; i++) {
    tryPlaceShip(520 + rnd() * (VW - 1040), 280 + rnd() * (VH - 560), 0.75 + rnd() * 0.35);
  }
  for (let i = 0; i < 14; i++) {
    const edge = rnd();
    const prefX = edge < 0.5 ? (90 + rnd() * 260) : (VW - 350 + rnd() * 260);
    const prefY = 120 + rnd() * (VH - 240);
    for (let t = 0; t < 40; t++) {
      const x = t === 0 ? prefX : (90 + rnd() * (VW - 180));
      const y = t === 0 ? prefY : (120 + rnd() * (VH - 240));
      if (!circleHitsConcepts(x, y, 28)) {
        addLandmark(x, y);
        break;
      }
    }
  }
  for (let i = 0; i < 14; i++) {
    for (let t = 0; t < 45; t++) {
      const x = 120 + rnd() * (VW - 240);
      const y = rnd() < 0.5 ? (92 + rnd() * 220) : (VH - 312 + rnd() * 220);
      const sc = 0.85 + rnd() * 0.35;
      if (!circleHitsConcepts(x, y, 22 * sc)) {
        addFunnyFish(x, y, sc);
        break;
      }
    }
  }
  for (let i = 0; i < 16; i++) {
    const edge = rnd();
    const prefX = edge < 0.5 ? (92 + rnd() * 260) : (VW - 352 + rnd() * 260);
    const prefY = 110 + rnd() * (VH - 220);
    for (let t = 0; t < 45; t++) {
      const x = t === 0 ? prefX : (92 + rnd() * (VW - 184));
      const y = t === 0 ? prefY : (110 + rnd() * (VH - 220));
      const sc = 0.9 + rnd() * 0.35;
      if (!circleHitsConcepts(x, y, 20 * sc)) {
        addTreasureChest(x, y, sc);
        break;
      }
    }
  }

  // Extra small map motifs (fish, compass, ship, waves, trees, …) — 30 placements, collision-aware.
  const miscGlyphKinds = ['fish', 'compass', 'ship', 'wave', 'tree', 'anchor', 'shell', 'hill', 'spark', 'land'];
  for (let gi = 0; gi < 30; gi++) {
    const kind = miscGlyphKinds[gi % miscGlyphKinds.length];
    for (let t = 0; t < 55; t++) {
      const x = 160 + rnd() * (VW - 320);
      const y = 160 + rnd() * (VH - 320);
      const sc = 0.55 + rnd() * 0.5;
      let rad = 26 * sc;
      if (kind === 'ship') rad = 58 * sc;
      else if (kind === 'compass') rad = 18 + sc * 12;
      if (circleHitsConcepts(x, y, rad)) continue;
      if (kind === 'fish') addFunnyFish(x, y, sc);
      else if (kind === 'compass') addCompass(x, y, 13 + rnd() * 11);
      else if (kind === 'ship') addShip(x, y, sc * 0.52);
      else if (kind === 'wave') addWaveBand(x, y, sc);
      else if (kind === 'tree') addTreeGlyph(x, y, sc);
      else if (kind === 'anchor') addAnchorGlyph(x, y, sc);
      else if (kind === 'shell') addShellGlyph(x, y, sc);
      else if (kind === 'hill') addHillGlyph(x, y, sc);
      else if (kind === 'spark') addSparkGlyph(x, y, sc);
      else addLandmark(x, y);
      break;
    }
  }

  // Sparkle/stamp near today's cluster (current week focus).
  if (focusQ && Array.isArray(focusQ.terms) && focusQ.terms.length) {
    const pts = focusQ.terms.map((t) => pos.get(t)).filter(Boolean);
    if (pts.length) {
      const mx = pts.reduce((sum, p) => sum + p.x, 0) / pts.length;
      const my = pts.reduce((sum, p) => sum + p.y, 0) / pts.length;
      const th = themesByWeek.get(Math.floor((focusQid - 1) / 5) + 1);
      const col = th?.color ? th.color : rgba(197, 96, 58, 0.55);
      const stampOffsets = [[110, -60], [130, -85], [-125, -72], [145, 72], [-105, 78], [0, -105], [-155, 40], [165, -35]];
      let stamped = false;
      for (let si = 0; si < stampOffsets.length && !stamped; si++) {
        const sx = mx + stampOffsets[si][0];
        const sy = my + stampOffsets[si][1];
        if (!circleHitsConcepts(sx, sy, 32)) {
          addSparkleStamp(sx, sy, col);
          stamped = true;
        }
      }
      if (!stamped) {
        for (let t = 0; t < 80; t++) {
          const sx = mx + (rnd() - 0.5) * 420;
          const sy = my + (rnd() - 0.5) * 320;
          if (!circleHitsConcepts(sx, sy, 32)) {
            addSparkleStamp(sx, sy, col);
            break;
          }
        }
      }
    }
  }

  deco.setAttribute('aria-hidden', 'true');
  viewport.insertBefore(deco, gLinks);

  // (Removed the old fixed center card so the map reads as week/question clusters.)

  function wrappedLines(text, maxCharsPerLine, maxLines) {
    const maxChars = Math.max(4, Math.floor(maxCharsPerLine));
    function trimLine(line) {
      const value = String(line || '');
      if (value.length <= maxChars) return value;
      return `${value.slice(0, Math.max(1, maxChars - 1)).replace(/\s+$/u, '')}…`;
    }
    const words = String(text || '').split(/\s+/).filter(Boolean);
    if (!words.length) return [''];
    const lines = [];
    let current = '';
    words.forEach((w) => {
      const next = current ? `${current} ${w}` : w;
      if (next.length <= maxChars) {
        current = next;
      } else {
        if (current) lines.push(trimLine(current));
        current = w.length > maxChars ? trimLine(w) : w;
      }
    });
    if (current) lines.push(trimLine(current));
    const shown = lines.slice(0, maxLines);
    if (lines.length > maxLines) {
      shown[maxLines - 1] = trimLine(`${shown[maxLines - 1].replace(/…$/u, '').replace(/\s+$/u, '')}…`);
    }
    return shown;
  }

  function isPrimarilyCjk(s) {
    const t = String(s || '');
    if (!t.length) return false;
    const cjkCount = (t.match(/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/g) || []).length;
    return cjkCount / Array.from(t).length >= 0.35;
  }

  /** Character-based wrap for labels without spaces (Traditional Chinese, etc.). */
  function wrappedLinesCjk(text, maxCharsPerLine, maxLines) {
    const maxChars = Math.max(2, Math.floor(maxCharsPerLine));
    const maxCells = Math.max(maxChars, maxChars * maxLines);
    const chars = Array.from(String(text || ''));
    if (!chars.length) return [''];
    const truncated = chars.length > maxCells
      ? [...chars.slice(0, maxCells - 1), '…']
      : chars;
    const lines = [];
    for (let i = 0; i < truncated.length && lines.length < maxLines; i += maxChars) {
      lines.push(truncated.slice(i, i + maxChars).join(''));
    }
    return lines.length ? lines : [''];
  }

  // Nodes as "cards" (like the reference)
  all.forEach((termKey) => {
    const p = pos.get(termKey);
    if (!p) return;
    const node = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
    node.setAttribute('aria-label', `Open concept ${termKey}`);
    const isFocus = focusNeighbors.has(termKey);
    const isLocked = (termWeek.get(termKey) || 1) > progress.unlockedWeek;
    const isExplored = progress.explored.has(termKey);
    node.style.cursor = isLocked ? 'not-allowed' : 'pointer';
    if (isLocked) node.setAttribute('aria-label', 'Locked concept');

    const display = isLocked
      ? (state.lang === 'zh-Hant' ? '未解鎖' : 'Locked')
      : (state.lang === 'zh-Hant' ? translateTerm(termKey) : termKey);

    const useCjkWrap = kmIsZh && isPrimarilyCjk(display);
    const fontSizeNum = isFocus ? 14 : 13;
    const iconSlot = 44;
    const sealReserve = (isExplored && !isLocked) ? 34 : 22;
    const lineH = useCjkWrap ? 17 : 16;
    const maxConceptLines = useCjkWrap ? 3 : 2;
    const cjkCharW = fontSizeNum * 0.92;
    const latCharW = fontSizeNum * 0.5;

    let cardW = isFocus ? (useCjkWrap ? 200 : 168) : (useCjkWrap ? 188 : 156);

    function layoutFromCardW(w) {
      const textInnerW = Math.max(48, w - iconSlot - sealReserve);
      const mcp = Math.max(3, Math.floor(textInnerW / (useCjkWrap ? cjkCharW : latCharW)));
      const ls = useCjkWrap
        ? wrappedLinesCjk(display, mcp, maxConceptLines)
        : wrappedLines(display, mcp, maxConceptLines);
      let maxLinePx = 0;
      ls.forEach((ln) => {
        if (useCjkWrap) {
          maxLinePx = Math.max(maxLinePx, Array.from(ln).length * cjkCharW);
        } else {
          maxLinePx = Math.max(maxLinePx, ln.length * latCharW * 0.85);
        }
      });
      const neededW = Math.ceil(iconSlot + sealReserve + maxLinePx + 10);
      return { lines: ls, neededW };
    }

    let { lines, neededW } = layoutFromCardW(cardW);
    if (neededW > cardW) {
      cardW = Math.min(292, neededW);
      ({ lines } = layoutFromCardW(cardW));
    }

    const cardH = Math.max(isFocus ? 56 : 52, 11 + lines.length * lineH + 11);
    const x = p.x - cardW / 2;
    const y = p.y - cardH / 2;

    // Parchment cards, now landscape-ish: icon left, text right.
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', String(x));
    rect.setAttribute('y', String(y));
    rect.setAttribute('width', String(cardW));
    rect.setAttribute('height', String(cardH));
    rect.setAttribute('rx', '18');
    rect.setAttribute('fill', isLocked ? rgba(230, 224, 210, 0.68) : (isFocus ? rgba(252, 247, 230, 0.96) : rgba(248, 241, 222, 0.92)));
    const tw = termWeek.get(termKey) || 1;
    const border = themesByWeek.get(tw)?.color || '#8a6d4f';
    rect.setAttribute('stroke', isLocked ? rgba(120, 100, 80, 0.34) : border);
    rect.setAttribute('stroke-width', isFocus && !isLocked ? '2.8' : '2');
    rect.setAttribute('stroke-dasharray', isLocked ? '4 6' : '0');
    rect.setAttribute('filter', 'url(#km-shadow)');

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    icon.setAttribute('cx', String(x + 24));
    icon.setAttribute('cy', String(y + cardH / 2));
    icon.setAttribute('r', '12');
    icon.setAttribute('fill', rgba(255, 255, 255, 0.66));
    icon.setAttribute('stroke', rgba(120, 100, 80, 0.26));

    const iconMark = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const mx = x + 24, my = y + cardH / 2;
    const it = iconTypeFor(termKey);
    iconMark.setAttribute('d', iconPath(it, mx, my));
    iconMark.setAttribute('fill', 'none');
    iconMark.setAttribute('stroke', isLocked ? rgba(120, 100, 80, 0.40) : border);
    iconMark.setAttribute('stroke-width', '1.8');
    iconMark.setAttribute('stroke-linecap', 'round');
    iconMark.setAttribute('stroke-linejoin', 'round');

    const textX = x + iconSlot;
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    title.setAttribute('x', String(textX));
    title.setAttribute('text-anchor', 'start');
    title.setAttribute(
      'font-family',
      useCjkWrap
        ? "'PingFang TC','Microsoft JhengHei','Noto Serif CJK TC',serif"
        : 'DM Serif Display, Georgia, serif'
    );
    title.setAttribute('font-size', String(fontSizeNum));
    title.setAttribute('fill', isLocked ? rgba(40, 32, 24, 0.46) : rgba(40, 32, 24, 0.86));
    title.setAttribute('dominant-baseline', useCjkWrap ? 'central' : 'middle');
    const centerY = y + cardH / 2;
    const startY = centerY - ((lines.length - 1) * lineH) / 2;
    lines.forEach((line, idx) => {
      const tsp = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      tsp.setAttribute('x', String(textX));
      tsp.setAttribute('y', String(startY + idx * lineH));
      if (useCjkWrap) tsp.setAttribute('dominant-baseline', 'central');
      tsp.textContent = line;
      title.appendChild(tsp);
    });

    let seal = null;
    if (isExplored && !isLocked) {
      seal = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      seal.setAttribute('d', `M ${x + cardW - 20} ${y + 11} l 3 6 l 7 1 l -5 5 l 1 7 l -6 -3 l -6 3 l 1 -7 l -5 -5 l 7 -1 Z`);
      seal.setAttribute('fill', rgba(197, 96, 58, 0.18));
      seal.setAttribute('stroke', rgba(197, 96, 58, 0.46));
      seal.setAttribute('stroke-width', '1.2');
    }

    function activate() {
      if (isLocked) return;
      openConcept(termKey);
    }
    node.addEventListener('click', activate);
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });

    node.appendChild(rect);
    node.appendChild(icon);
    node.appendChild(iconMark);
    node.appendChild(title);
    if (seal) node.appendChild(seal);
    gNodes.appendChild(node);
  });

  // (Removed UI: knowledge-insight)

  // On first open, snap camera to the center cluster so only a subset is visible.
  // Afterwards, preserve user pan/zoom.
  if (!knowledgeView._hasInitialView) {
    knowledgeView._hasInitialView = true;
    knowledgeView.s = 1;
    // Center virtual map on the visible area (SVG viewBox is 1200x720).
    // Keep focus near the middle with slight upward bias like the reference.
    const fx = (pos.get(focus) || { x: cx, y: cy }).x;
    const fy = (pos.get(focus) || { x: cx, y: cy }).y;
    knowledgeView.tx = 600 - fx;
    knowledgeView.ty = 330 - fy;
  }

  applyKnowledgeTransform();
}

const knowledgeView = {
  ready: false,
  tx: 0,
  ty: 0,
  s: 1,
  minS: 0.6,
  maxS: 2.6,
  pointers: new Map(), // pointerId -> {x,y}
  lastPinchDist: null,
  _hasInitialView: false,
};

function getKnowledgeSvg() {
  return document.getElementById('knowledge-svg');
}
function getKnowledgeViewport() {
  return document.getElementById('knowledge-viewport');
}
function applyKnowledgeTransform() {
  const vp = getKnowledgeViewport();
  if (!vp) return;
  vp.setAttribute('transform', `translate(${knowledgeView.tx} ${knowledgeView.ty}) scale(${knowledgeView.s})`);
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function svgPointFromEvent(svg, clientX, clientY) {
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const p = pt.matrixTransform(ctm.inverse());
  return { x: p.x, y: p.y };
}

function zoomKnowledgeAt(svgX, svgY, nextScale) {
  const oldS = knowledgeView.s;
  const s = clamp(nextScale, knowledgeView.minS, knowledgeView.maxS);
  if (s === oldS) return;

  // Keep the point (svgX, svgY) stable during zoom.
  knowledgeView.tx = svgX - (svgX - knowledgeView.tx) * (s / oldS);
  knowledgeView.ty = svgY - (svgY - knowledgeView.ty) * (s / oldS);
  knowledgeView.s = s;
  applyKnowledgeTransform();
}

function setupKnowledgeInteractionsOnce() {
  if (knowledgeView.ready) return;
  const svg = getKnowledgeSvg();
  const canvas = document.getElementById('knowledge-canvas');
  if (!svg || !canvas) return;
  knowledgeView.ready = true;

  function setPanning(on) {
    canvas.classList.toggle('is-panning', on);
  }

  svg.addEventListener('pointerdown', (e) => {
    // Only pan when pointer targets the background SVG, not when clicking a node.
    // Node clicks should open concept notes instead of dragging.
    const isNode = e.target && (e.target.closest && e.target.closest('g[role="button"]'));
    if (isNode) return;

    svg.setPointerCapture(e.pointerId);
    knowledgeView.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (knowledgeView.pointers.size === 1) setPanning(true);
    if (knowledgeView.pointers.size === 2) knowledgeView.lastPinchDist = null;
  });

  svg.addEventListener('pointermove', (e) => {
    if (!knowledgeView.pointers.has(e.pointerId)) return;
    const prev = knowledgeView.pointers.get(e.pointerId);
    knowledgeView.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Pinch zoom (2 pointers)
    if (knowledgeView.pointers.size === 2) {
      const pts = [...knowledgeView.pointers.values()];
      const dx = pts[0].x - pts[1].x;
      const dy = pts[0].y - pts[1].y;
      const dist = Math.hypot(dx, dy);
      const midX = (pts[0].x + pts[1].x) / 2;
      const midY = (pts[0].y + pts[1].y) / 2;
      const midSvg = svgPointFromEvent(svg, midX, midY);

      if (knowledgeView.lastPinchDist != null) {
        const ratio = dist / knowledgeView.lastPinchDist;
        zoomKnowledgeAt(midSvg.x, midSvg.y, knowledgeView.s * ratio);
      }
      knowledgeView.lastPinchDist = dist;
      return;
    }

    // Pan (1 pointer)
    if (!prev) return;
    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;
    knowledgeView.tx += dx;
    knowledgeView.ty += dy;
    applyKnowledgeTransform();
  });

  function endPointer(e) {
    if (!knowledgeView.pointers.has(e.pointerId)) return;
    knowledgeView.pointers.delete(e.pointerId);
    knowledgeView.lastPinchDist = null;
    if (knowledgeView.pointers.size === 0) setPanning(false);
  }

  svg.addEventListener('pointerup', endPointer);
  svg.addEventListener('pointercancel', endPointer);
  svg.addEventListener('pointerleave', endPointer);
  svg.addEventListener('pointerout', endPointer);

  // Wheel zoom (mouse / trackpad). Zoom around cursor.
  svg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const p = svgPointFromEvent(svg, e.clientX, e.clientY);
    const delta = -e.deltaY;
    // Smooth exponential zoom.
    const zoomFactor = Math.exp(delta * 0.0012);
    zoomKnowledgeAt(p.x, p.y, knowledgeView.s * zoomFactor);
  }, { passive: false });
}

function activateKnowledgeTab() {
  if (state.knowledgeMapSeed == null) {
    state.knowledgeMapSeed = Math.floor(Date.now() / 1000) % 100000;
  }
  const seed = state.knowledgeMapSeed;
  setupKnowledgeInteractionsOnce();
  if (supabaseEnabled()) {
    mergeLearnedConceptsFromSupabase()
      .then(() => renderKnowledgeMap(seed))
      .catch(() => renderKnowledgeMap(seed));
  } else {
    renderKnowledgeMap(seed);
  }
}

document.getElementById('btn-profile-restart')?.addEventListener('click', startPhilosophyProfile);
// (Removed UI buttons: reroll / continue)

/* =============================================
   NEXT DILEMMA
   ============================================= */
document.getElementById('btn-next').addEventListener('click', () => {
  // Cancel any pending choice animation
  if (state.pendingTimeout) { clearTimeout(state.pendingTimeout); state.pendingTimeout = null; }
  state.todayIndex = (state.todayIndex + 1) % getAllDilemmas().length;
  state.answered = false;
  state.chosenOpt = null;

  const card = document.getElementById('dilemma-card');
  const chosen = document.getElementById('chosen-state');
  const sn = document.getElementById('sticky-next');

  // Reset accordions
  document.querySelectorAll('.accordion').forEach(a => a.removeAttribute('open'));
  // Clear go-further body
  document.getElementById('go-further-body').replaceChildren();
  chosen.hidden = true; chosen.style.display = 'none';
  chosen.querySelector('.bm-btn--chosen')?.remove();
  sn.hidden = true; sn.style.display = 'none';
  card.hidden = false; card.style.display = 'block';

  renderDilemma();
});

/* =============================================
   CHALLENGE A FRIEND
   ============================================= */

function openChallenge() {
  const ui = getUiText(state.lang);
  const d = getDilemma();
  document.getElementById('ch-dilemma-preview').textContent = d.text;
  document.getElementById('ch-opt-a').textContent = 'A. ' + d.optA;
  document.getElementById('ch-opt-b').textContent = 'B. ' + d.optB;
  document.getElementById('ch-hint').textContent = '';
  const title = document.querySelector('#challenge-overlay .modal-title');
  if (title) title.textContent = ui.askFriendTitle;
  const intro = document.querySelector('#challenge-overlay .ch-intro');
  if (intro) intro.textContent = ui.askFriendIntro;

  const overlay = document.getElementById('challenge-overlay');
  overlay.hidden = false; overlay.style.display = 'flex';
  document.addEventListener('keydown', escChallenge);
}

function closeChallenge() {
  const overlay = document.getElementById('challenge-overlay');
  overlay.hidden = true; overlay.style.display = 'none';
  document.removeEventListener('keydown', escChallenge);
}
function escChallenge(e) { if (e.key === 'Escape') closeChallenge(); }

function showChallengeHint(msg) {
  const h = document.getElementById('ch-hint');
  h.textContent = msg;
  setTimeout(() => { h.textContent = ''; }, 3000);
}

/* =============================================
   AI ASSISTANT (Edge Function)
   ============================================= */
const AI_CHAT_MAX_INPUT_CHARS = 600;
const AI_MAX_VISIBLE_TURNS = 8;
const AI_SUMMARIZE_EVERY_TURNS = 6;
const AI_CHAT_FONT_STORAGE_KEY = 'dd_ai_chat_font';
const AI_CHAT_FONT_ORDER = ['sm', 'md', 'lg'];
let aiChatFontModeMem = 'md';

const AI_PHILOSOPHER_ORDER = [
  'aristotle',
  'plato',
  'socrates',
  'confucius',
  'kant',
  'laozi',
  'buddha',
  'marx',
];
const AI_PHILOSOPHER_STORAGE_KEY = 'dd_ai_philosopher';
/** Maps AI chip id to key in PHILOSOPHER_PORTRAITS (Wikimedia-sourced busts for the AI guides). */
const AI_PHILOSOPHER_PORTRAIT_KEYS = {
  aristotle: 'Aristotle',
  plato: 'Plato',
  socrates: 'Socrates',
  confucius: 'Confucius',
  kant: 'Immanuel Kant',
  laozi: 'Laozi',
  buddha: 'Buddha',
  marx: 'Karl Marx',
};

/** Philosopher gateway overlay: entry source and pending chat seed. */
let philosopherGatewaySource = null;
let philosopherGatewaySelectedId = null;
let philosopherGatewayPendingInput = null;

function getAiPhilosopherPortraitSrc() {
  const key = AI_PHILOSOPHER_PORTRAIT_KEYS[getSelectedPhilosopherId()];
  const candidates = getPhilosopherPortraitCandidates(key || '');
  return candidates.length ? candidates[0] : null;
}

/** Descartes reference portrait is small in-frame; zoom slightly in circular crops. */
function aiPortraitFaceZoomActive() {
  return getSelectedPhilosopherId() === 'descartes';
}

function aiMsgAvatarClass() {
  return aiPortraitFaceZoomActive() ? 'ai-msg-avatar ai-msg-avatar--face-zoom' : 'ai-msg-avatar';
}

function getAiThreadMessagesEl() {
  return document.getElementById('ai-thread-messages');
}

function getAiThreadScrollEl() {
  return document.getElementById('ai-thread-scroll');
}

function scrollAiThreadPaneToEnd() {
  const el = getAiThreadScrollEl();
  if (el) el.scrollTop = el.scrollHeight;
}

function getSelectedPhilosopherId() {
  try {
    const v = localStorage.getItem(AI_PHILOSOPHER_STORAGE_KEY);
    if (v && AI_PHILOSOPHER_ORDER.includes(v)) return v;
  } catch {}
  return 'plato';
}

function setSelectedPhilosopherId(id) {
  if (!AI_PHILOSOPHER_ORDER.includes(id)) return;
  try {
    localStorage.setItem(AI_PHILOSOPHER_STORAGE_KEY, id);
  } catch {}
}

function getAiThinkingMessage(ui, philosopherId) {
  const map = ui.aiThinking || {};
  const id =
    typeof philosopherId === 'string' && map[philosopherId] ? philosopherId : 'plato';
  return map[id] || ui.aiPlatoThinking || 'Plato is thinking…';
}

function renderAiPhilosopherChips() {
  const wrap = document.getElementById('ai-philosopher-chips');
  const labelEl = document.getElementById('ai-philosopher-label');
  if (!wrap) return;
  const ui = getUiText(state.lang);
  const names = ui.aiPhilosopherNames || {};
  const current = getSelectedPhilosopherId();
  wrap.replaceChildren();
  AI_PHILOSOPHER_ORDER.forEach((id) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `ai-philosopher-chip${id === current ? ' is-active' : ''}`;
    b.dataset.philosopher = id;
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', id === current ? 'true' : 'false');
    const labelText = names[id] || id;
    const portraitKey = AI_PHILOSOPHER_PORTRAIT_KEYS[id];
    const portraitCandidates = getPhilosopherPortraitCandidates(portraitKey || '');
    if (portraitCandidates.length) {
      const img = document.createElement('img');
      img.className = 'ai-philosopher-chip-img';
      img.alt = '';
      img.decoding = 'async';
      img.loading = 'lazy';
      img.referrerPolicy = 'no-referrer';
      img.src = portraitCandidates[0];
      if (id === 'descartes') {
        const frame = document.createElement('span');
        frame.className = 'ai-philosopher-chip-img-frame';
        frame.appendChild(img);
        b.appendChild(frame);
      } else {
        b.appendChild(img);
      }
    }
    const span = document.createElement('span');
    span.className = 'ai-philosopher-chip-label';
    span.textContent = labelText;
    b.appendChild(span);
    b.addEventListener('click', () => selectAiPhilosopher(id));
    wrap.appendChild(b);
  });
  wrap.setAttribute('aria-label', ui.aiPhilosopherGroupAria || ui.aiPhilosopherLabel || '');
  if (labelEl) {
    const lab = (ui.aiPhilosopherLabel || '').trim();
    labelEl.textContent = lab;
    labelEl.hidden = !lab;
  }
  const btnPlatoReader = document.getElementById('btn-plato-reader');
  if (btnPlatoReader) btnPlatoReader.hidden = false;
  applyPlatoReaderHeadTexts();
}

/** Which profile-scroll sections use dedicated JPGs under `images/philosopher-profile-sections/`. Others use the bust portrait beside text. */
const PHILOSOPHER_PROFILE_SECTION_IMAGES = {
  plato: ['intro', 'early', 'ideas'],
  socrates: ['intro', 'early', 'ideas'],
  aristotle: ['intro', 'early', 'ideas'],
  confucius: ['intro', 'early', 'ideas'],
  kant: ['intro', 'ideas'],
  laozi: ['intro', 'early', 'ideas'],
  buddha: ['intro', 'early', 'ideas'],
  marx: ['intro'],
};

function escapeHtmlProfile(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function philosopherProfilePlainToHtml(text) {
  if (!text || !String(text).trim()) return '';
  return String(text)
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${escapeHtmlProfile(p).replace(/\n/g, '<br />')}</p>`)
    .join('');
}

function buildPhilosopherProfileConceptsHtml(concepts) {
  if (!Array.isArray(concepts) || concepts.length === 0) return '';
  const items = concepts
    .map((c) => {
      const term = escapeHtmlProfile(c.term || '');
      const expl = escapeHtmlProfile(c.explanation || '');
      return `<li><strong>${term}</strong> — ${expl}</li>`;
    })
    .join('');
  return `<ul class="plato-reader-ul">${items}</ul>`;
}

function buildPhilosopherProfileBooksHtml(books) {
  if (!Array.isArray(books) || books.length === 0) return '';
  const items = books
    .map((b) => {
      const q = encodeURIComponent(`${b.title} ${b.author}`);
      const href = `https://www.google.com/search?q=${q}`;
      const title = escapeHtmlProfile(b.title || '');
      const author = escapeHtmlProfile(b.author || '');
      const note = b.note ? ` ${escapeHtmlProfile(b.note)}` : '';
      return `<li><a href="${href}" target="_blank" rel="noopener noreferrer"><strong>${title}</strong></a> — ${author}.${note}</li>`;
    })
    .join('');
  return `<ul class="plato-reader-ul">${items}</ul>`;
}

function buildPhilosopherProfileVideosHtml(videos) {
  if (!Array.isArray(videos) || videos.length === 0) return '';
  const items = videos
    .map((v) => {
      const q = encodeURIComponent(String(v.label || '').trim());
      const href = `https://www.youtube.com/results?search_query=${q}`;
      const lab = escapeHtmlProfile(v.label || '');
      const hint = v.hint ? ` <span class="gf-meta">(${escapeHtmlProfile(v.hint)})</span>` : '';
      return `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${lab}</a>${hint}</li>`;
    })
    .join('');
  return `<ul class="plato-reader-ul">${items}</ul>`;
}

function resolvePhilosopherProfileSectionPhotoSrc(philosopherId, sectionKey) {
  const fileSuffix = { intro: 'brief-intro', early: 'early-life', ideas: 'main-ideas' };
  const allowed = PHILOSOPHER_PROFILE_SECTION_IMAGES[philosopherId];
  if (allowed && allowed.includes(sectionKey) && fileSuffix[sectionKey]) {
    return `images/philosopher-profile-sections/${philosopherId}-${fileSuffix[sectionKey]}.jpg`;
  }
  const key = AI_PHILOSOPHER_PORTRAIT_KEYS[philosopherId];
  const candidates = getPhilosopherPortraitCandidates(key || '');
  return candidates.length ? candidates[0] : '';
}

function getPhilosopherProfileScroll(philosopherId) {
  const root = typeof window !== 'undefined' ? window : {};
  if (state.lang === 'zh-Hant') {
    const z = root.PHILOSOPHER_PROFILE_SCROLL_ZH_HANT;
    return z && z[philosopherId] ? z[philosopherId] : null;
  }
  const e = root.PHILOSOPHER_PROFILE_SCROLL_EN;
  return e && e[philosopherId] ? e[philosopherId] : null;
}

function getPhilosopherReaderSectionDefs(ui, philosopherId) {
  const prof = getPhilosopherProfileScroll(philosopherId);
  if (!prof) return [];

  const plain = philosopherProfilePlainToHtml;
  const introPhoto = resolvePhilosopherProfileSectionPhotoSrc(philosopherId, 'intro');
  const earlyPhoto = resolvePhilosopherProfileSectionPhotoSrc(philosopherId, 'early');
  const ideasPhoto = resolvePhilosopherProfileSectionPhotoSrc(philosopherId, 'ideas');

  return [
    {
      id: 'profile-sec-intro',
      iconKey: 'intro',
      titleKey: 'platoReaderTitleIntro',
      bodyHtml: plain(prof.briefIntroduction),
      portraitSrc: introPhoto || null,
    },
    {
      id: 'profile-sec-early',
      iconKey: 'early',
      titleKey: 'platoReaderTitleEarly',
      bodyHtml: plain(prof.earlyLife),
      portraitSrc: earlyPhoto || null,
    },
    {
      id: 'profile-sec-achieve',
      iconKey: 'achieve',
      titleKey: 'platoReaderTitleAchieve',
      bodyHtml: plain(prof.keyAchievements),
      portraitSrc: null,
    },
    {
      id: 'profile-sec-ideas',
      iconKey: 'ideas',
      titleKey: 'platoReaderTitleIdeas',
      bodyHtml: plain(prof.mainIdeas),
      portraitSrc: ideasPhoto || null,
    },
    {
      id: 'profile-sec-concepts',
      iconKey: 'concepts',
      titleKey: 'platoReaderTitleConcepts',
      bodyHtml: buildPhilosopherProfileConceptsHtml(prof.keyConcepts),
      portraitSrc: null,
    },
    {
      id: 'profile-sec-books',
      iconKey: 'books',
      titleKey: 'platoReaderTitleBooks',
      bodyHtml: buildPhilosopherProfileBooksHtml(prof.suggestedBooks),
      portraitSrc: null,
    },
    {
      id: 'profile-sec-videos',
      iconKey: 'videos',
      titleKey: 'platoReaderTitleVideos',
      bodyHtml: buildPhilosopherProfileVideosHtml(prof.suggestedVideos),
      portraitSrc: null,
    },
  ];
}

const PLATO_READER_NAV_ICON_HTML = {
  intro:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M8 7h8M8 11h6"/></svg>',
  early:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  achieve:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 3v18"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M8 7h8M8 11h6M8 15h4"/></svg>',
  ideas:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke="currentColor" stroke-width="2" d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>',
  concepts:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path stroke="currentColor" stroke-width="2" d="M8 7h8"/></svg>',
  books:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M2 3h6a4 4 0 0 1 4 4v14a2 2 0 0 0-2-2H2z"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M22 3h-6a4 4 0 0 0-4 4v14a2 2 0 0 1 2-2h8z"/></svg>',
  videos:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M8 5v14l11-7-11-7z"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>',
};

function platoReaderSectionHeadingHtml(title, iconKey) {
  const ic = PLATO_READER_NAV_ICON_HTML[iconKey] || '';
  return `<div class="plato-reader-block-heading"><h3 class="plato-reader-block-title">${title}</h3><span class="plato-reader-block-title-icon" aria-hidden="true">${ic}</span></div>`;
}

function buildPlatoReaderScrollHtml(ui) {
  const philosopherId = getSelectedPhilosopherId();
  const defs = getPhilosopherReaderSectionDefs(ui, philosopherId);
  return defs
    .map((d) => {
      const title = ui[d.titleKey] || '';
      const body = d.bodyHtml || '';
      const head = platoReaderSectionHeadingHtml(title, d.iconKey);
      if (d.portraitSrc) {
        return `<article id="${d.id}" class="plato-reader-block plato-reader-block--with-photo">${head}<div class="plato-reader-block-body"><div class="plato-reader-intro-copy plato-reader-intro-copy--inline-photo"><div class="plato-reader-inline-photo"><img src="${d.portraitSrc}" alt="" width="140" height="140" loading="lazy" decoding="async" /></div>${body}</div></div></article>`;
      }
      return `<article id="${d.id}" class="plato-reader-block">${head}<div class="plato-reader-block-body">${body}</div></article>`;
    })
    .join('');
}

function setActivePlatoReaderNav(sectionId) {
  document.querySelectorAll('#plato-reader-nav .plato-reader-nav-btn').forEach((b) => {
    b.classList.toggle('is-active', b.dataset.section === sectionId);
  });
}

function scrollPlatoReaderTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setActivePlatoReaderNav(sectionId);
}

function renderPlatoReaderNav() {
  const nav = document.getElementById('plato-reader-nav');
  if (!nav) return;
  const ui = getUiText(state.lang);
  nav.setAttribute('aria-label', ui.platoReaderNavAria || 'Profile sections');
  const defs = getPhilosopherReaderSectionDefs(ui, getSelectedPhilosopherId());
  nav.replaceChildren();
  const row2 = document.createElement('div');
  row2.className = 'plato-reader-nav-row2';
  defs.forEach((d, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'plato-reader-nav-btn';
    b.dataset.section = d.id;
    const ic = document.createElement('span');
    ic.className = 'plato-reader-nav-ic';
    ic.innerHTML = PLATO_READER_NAV_ICON_HTML[d.iconKey] || '';
    const lab = document.createElement('span');
    lab.className = 'plato-reader-nav-label';
    lab.textContent = ui[d.titleKey] || '';
    b.appendChild(ic);
    b.appendChild(lab);
    b.addEventListener('click', () => scrollPlatoReaderTo(d.id));
    if (i < 4) nav.appendChild(b);
    else row2.appendChild(b);
  });
  nav.appendChild(row2);
  setActivePlatoReaderNav(defs[0] ? defs[0].id : 'profile-sec-intro');
}

function renderPlatoReaderScroll() {
  const scroll = document.getElementById('plato-reader-scroll');
  if (!scroll) return;
  const ui = getUiText(state.lang);
  scroll.innerHTML = buildPlatoReaderScrollHtml(ui);
}

function applyPlatoReaderHeadTexts() {
  const ui = getUiText(state.lang);
  const pid = getSelectedPhilosopherId();
  const prof = getPhilosopherProfileScroll(pid);
  const names = ui.aiPhilosopherNames || {};
  const displayName = prof && prof.name ? prof.name : names[pid] || pid;
  const suffix = state.lang === 'zh-Hant' ? '側讀' : 'Profile';
  const kicker = document.getElementById('plato-reader-kicker');
  if (kicker) kicker.textContent = `${displayName} · ${suffix}`;
  const labelBtn = document.getElementById('label-plato-reader-btn');
  if (labelBtn) labelBtn.textContent = displayName;
  const openBtn = document.getElementById('btn-plato-reader');
  const ariaTpl = ui.philosopherReaderBtnAria || ui.platoReaderBtnAria || 'Open {{name}} profile reader';
  const titleTpl = ui.philosopherReaderBtnTitle || ui.platoReaderBtnTitle || '{{name}} — profile';
  if (openBtn) {
    openBtn.setAttribute('aria-label', ariaTpl.replace(/\{\{name\}\}/g, displayName));
    openBtn.setAttribute('title', titleTpl.replace(/\{\{name\}\}/g, displayName));
  }
  const closeBtn = document.getElementById('btn-close-plato-reader');
  const closeLbl = ui.platoReaderCloseAria || ui.closeLabel || 'Close';
  if (closeBtn) {
    closeBtn.setAttribute('aria-label', closeLbl);
    closeBtn.setAttribute('title', closeLbl);
  }
}

function refreshPlatoReaderIfOpen() {
  const overlay = document.getElementById('plato-reader-overlay');
  if (!overlay || overlay.hidden) return;
  renderPlatoReaderNav();
  renderPlatoReaderScroll();
  applyAiChatFontMode();
}

function isPlatoReaderOpen() {
  const overlay = document.getElementById('plato-reader-overlay');
  return !!(overlay && !overlay.hidden);
}

function openPlatoReader() {
  const overlay = document.getElementById('plato-reader-overlay');
  if (!overlay) return;
  overlay.hidden = false;
  overlay.style.display = 'flex';
  applyPlatoReaderHeadTexts();
  renderPlatoReaderNav();
  renderPlatoReaderScroll();
  applyAiChatFontMode();
  const scrollEl = document.getElementById('plato-reader-scroll');
  if (scrollEl) scrollEl.scrollTop = 0;
  document.getElementById('btn-close-plato-reader')?.focus();
}

function closePlatoReader() {
  const overlay = document.getElementById('plato-reader-overlay');
  if (!overlay || overlay.hidden) return;
  overlay.hidden = true;
  overlay.style.display = 'none';
  if (isChatPickOverlayOpen() && philosopherGatewaySelectedId) {
    requestAnimationFrame(() => {
      showPhilosopherGatewayActions(philosopherGatewaySelectedId);
    });
  }
}

function selectAiPhilosopher(id) {
  if (!AI_PHILOSOPHER_ORDER.includes(id)) return;
  if (id === getSelectedPhilosopherId()) return;
  const ui = getUiText(state.lang);
  const names = ui.aiPhilosopherNames || {};
  const displayName = names[id] || id;
  const label = (s) => (typeof s === 'string' ? s.replace(/\{\{name\}\}/g, displayName) : s);
  const step1 = confirm(
    label(ui.aiSwitchGuideConfirm) || `Switch your guide to ${displayName}?`
  );
  if (!step1) {
    renderAiPhilosopherChips();
    return;
  }
  if (isPlatoReaderOpen()) closePlatoReader();
  const startNew = confirm(
    label(ui.aiStartNewWithGuideConfirm) ||
      `Start a new conversation with ${displayName}? This clears only this guide’s messages for today’s dilemma. Your other guides’ chats stay saved.\n\nClick OK to start fresh, or Cancel to keep your saved chat with this guide.`
  );
  setSelectedPhilosopherId(id);
  if (startNew) {
    const d0 = getDilemma();
    clearAiThreadForPhilosopher(d0.id, id);
  }
  renderAiPhilosopherChips();
  const d = getDilemma();
  aiRenderThread(d.id);
}

const AI_STARTER_POOL_EN = [
  'Why might someone pick the other side?',
  'What should I weigh most here?',
  'Explain this dilemma in plain words.',
  'What would strengthen each side?',
  'What am I not seeing yet?',
  'How would you frame the trade-off?',
  'What feels hardest about choosing?',
  'Say something encouraging about my choice.',
  'What was your greatest contribution to philosophy?',
  'Summarize your core ideas briefly.',
  'Which of your ideas gets misunderstood most?',
  'Name one argument you are famous for.',
  'How does your view define the good life?',
  'Connect your teaching to this dilemma.',
  'What question should I ask myself first?',
  'I argued with family today—any wisdom?',
  'I am exhausted at work—how should I think?',
  'A friend ghosted me—what would you say?',
  'Feeling guilty about my choice—can you help?',
  'My boss pressured me—was refusing wrong?',
  'I am anxious—what habit of thought helps?',
];

const AI_STARTER_POOL_ZH = [
  '點解有人會揀另一邊？',
  '我應該最看重啲乜？',
  '用白話幫我整理呢題。',
  '兩邊各自可以加強啲乜論點？',
  '我仲忽略咗啲乜？',
  '你會點樣形容呢個取捨？',
  '揀嗰陣最難係咩？',
  '同我講句鼓勵嘅話。',
  '你對哲學最大嘅貢獻係咩？',
  '用幾句總結你嘅核心思想。',
  '邊個諗法最常畀人誤解？',
  '提起你，大家會諗起邊個論證？',
  '你眼中嘅美好生活係點樣？',
  '將你嘅學說連去呢題上。',
  '我第一步應該問自己咩？',
  '今日同屋企人嗌交咗，有咩建議？',
  '做到好攰，我應該點樣諗？',
  '朋友突然唔覆 message，你會點講？',
  '揀完一直內疚，可唔可以幫我諗諗？',
  '老細迫我，我拒絕係咪錯？',
  '我好焦慮，有咩思考習慣有用？',
];

function getAiStarterPool() {
  return state.lang === 'zh-Hant' ? AI_STARTER_POOL_ZH : AI_STARTER_POOL_EN;
}

function pickTwoRandomFromPool(pool) {
  const list = (pool || []).filter(Boolean);
  if (list.length === 0) return [];
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = copy[i];
    copy[i] = copy[j];
    copy[j] = t;
  }
  if (copy.length === 1) return [copy[0], copy[0]];
  return copy.slice(0, 2);
}

function getAiChatFontMode() {
  try {
    const v = localStorage.getItem(AI_CHAT_FONT_STORAGE_KEY);
    if (AI_CHAT_FONT_ORDER.includes(v)) return v;
  } catch {}
  return AI_CHAT_FONT_ORDER.includes(aiChatFontModeMem) ? aiChatFontModeMem : 'md';
}

function setAiChatFontMode(mode) {
  if (!AI_CHAT_FONT_ORDER.includes(mode)) return;
  aiChatFontModeMem = mode;
  try {
    localStorage.setItem(AI_CHAT_FONT_STORAGE_KEY, mode);
  } catch {}
  applyAiChatFontMode();
}

function cycleAiChatFontMode() {
  const cur = getAiChatFontMode();
  const i = AI_CHAT_FONT_ORDER.indexOf(cur);
  const next = AI_CHAT_FONT_ORDER[(i + 1) % AI_CHAT_FONT_ORDER.length];
  setAiChatFontMode(next);
}

function applyAiChatFontMode() {
  const mode = getAiChatFontMode();
  const modal = document.querySelector('.modal.ai-modal');
  if (modal) modal.setAttribute('data-ai-font', mode);
  const platoSheet = document.querySelector('.plato-reader-sheet');
  if (platoSheet) platoSheet.setAttribute('data-ai-font', mode);
  const ui = getUiText(state.lang);
  const sizeLabel = mode === 'sm'
    ? (ui.aiChatFontSmall || 'Small')
    : mode === 'lg'
      ? (ui.aiChatFontLarge || 'Large')
      : (ui.aiChatFontMedium || 'Medium');
  const aria = ui.aiChatFontAria || 'Text size';
  const titleBase = ui.aiChatFontTitle || aria;
  const btn = document.getElementById('btn-ai-chat-font');
  if (btn) {
    btn.setAttribute('aria-label', `${aria} (${sizeLabel})`);
    btn.setAttribute('title', `${titleBase}: ${sizeLabel}`);
  }
  const btnPlatoFont = document.getElementById('btn-plato-reader-font');
  if (btnPlatoFont) {
    btnPlatoFont.setAttribute('aria-label', `${aria} (${sizeLabel})`);
    btnPlatoFont.setAttribute('title', `${titleBase}: ${sizeLabel}`);
  }
}

function getDeviceId() {
  const KEY = 'dd_device_id';
  try {
    const existing = localStorage.getItem(KEY);
    if (existing && existing.trim()) return existing.trim();
  } catch {}
  const id =
    (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function')
      ? crypto.randomUUID()
      : `dd_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
  try {
    localStorage.setItem(KEY, id);
  } catch {}
  return id;
}

function getAiFunctionUrl() {
  if (!supabaseEnabled()) return '';
  const m = SUPABASE.url.match(/^https:\/\/([^.]+)\.supabase\.co\/?$/);
  if (!m) return '';
  return `https://${m[1]}.functions.supabase.co/ai-chat`;
}

function getAiStorageKey(kind, dilemmaId, lang, philosopherId) {
  const pid = philosopherId || getSelectedPhilosopherId();
  const langTag = lang === 'zh-Hant' ? 'zh-Hant' : 'en';
  return `dd_ai_${kind}_${String(dilemmaId)}_${langTag}_${pid}`;
}

function getAiLegacyStorageKey(kind, dilemmaId, lang) {
  const langTag = lang === 'zh-Hant' ? 'zh-Hant' : 'en';
  return `dd_ai_${kind}_${String(dilemmaId)}_${langTag}`;
}

function loadAiThread(dilemmaId) {
  const pid = getSelectedPhilosopherId();
  const summaryKey = getAiStorageKey('summary', dilemmaId, state.lang, pid);
  const msgsKey = getAiStorageKey('msgs', dilemmaId, state.lang, pid);
  let summary = '';
  let messages = [];
  try {
    summary = localStorage.getItem(summaryKey) || '';
  } catch {}
  try {
    const raw = localStorage.getItem(msgsKey) || '';
    messages = raw ? JSON.parse(raw) : [];
  } catch {
    messages = [];
  }
  if (pid === 'plato') {
    try {
      if (!summary) summary = localStorage.getItem(getAiLegacyStorageKey('summary', dilemmaId, state.lang)) || '';
    } catch {}
    try {
      if (!messages.length) {
        const raw = localStorage.getItem(getAiLegacyStorageKey('msgs', dilemmaId, state.lang)) || '';
        messages = raw ? JSON.parse(raw) : [];
      }
    } catch {
      messages = [];
    }
  }
  if (!Array.isArray(messages)) messages = [];
  messages = messages
    .filter(m => m && typeof m === 'object' && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-50);
  return { summary, messages };
}

function saveAiThread(dilemmaId, summary, messages) {
  const summaryKey = getAiStorageKey('summary', dilemmaId, state.lang);
  const msgsKey = getAiStorageKey('msgs', dilemmaId, state.lang);
  try {
    localStorage.setItem(summaryKey, summary || '');
  } catch {}
  try {
    localStorage.setItem(msgsKey, JSON.stringify(messages || []));
  } catch {}
}

function clearAiThread(dilemmaId) {
  const summaryKey = getAiStorageKey('summary', dilemmaId, state.lang);
  const msgsKey = getAiStorageKey('msgs', dilemmaId, state.lang);
  try { localStorage.removeItem(summaryKey); } catch {}
  try { localStorage.removeItem(msgsKey); } catch {}
}

function clearAiThreadForPhilosopher(dilemmaId, philosopherId) {
  const summaryKey = getAiStorageKey('summary', dilemmaId, state.lang, philosopherId);
  const msgsKey = getAiStorageKey('msgs', dilemmaId, state.lang, philosopherId);
  try { localStorage.removeItem(summaryKey); } catch {}
  try { localStorage.removeItem(msgsKey); } catch {}
}

function clearAllAiThreads() {
  const keys = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      if (k.startsWith('dd_ai_summary_') || k.startsWith('dd_ai_msgs_')) keys.push(k);
    }
  } catch {
    return;
  }
  keys.forEach(k => {
    try { localStorage.removeItem(k); } catch {}
  });
}

function aiClearChatRecords() {
  const ui = getUiText(state.lang);
  const ok = confirm(ui.aiClearChatConfirm || 'Clear all chat records?');
  if (!ok) return;
  clearAllAiThreads();
  const d = getDilemma();
  aiRenderThread(d.id);
  aiSetHint(ui.aiClearedHint || 'Cleared.');
}

function aiSetHint(text) {
  const h = document.getElementById('ai-hint');
  if (!h) return;
  h.textContent = text || '';
}

function aiSetThinking(active, message) {
  const row = document.getElementById('ai-thinking-row');
  const label = document.getElementById('ai-thinking-text');
  const avatar = document.getElementById('ai-thinking-avatar');
  if (!row) return;
  if (active) {
    row.hidden = false;
    const ui = getUiText(state.lang);
    const text = typeof message === 'string' && message.trim()
      ? message.trim()
      : getAiThinkingMessage(ui, getSelectedPhilosopherId());
    if (label) label.textContent = text;
    const src = getAiPhilosopherPortraitSrc();
    if (avatar && src) {
      avatar.src = src;
      avatar.className = `ai-msg-avatar ai-thinking-avatar${aiPortraitFaceZoomActive() ? ' ai-msg-avatar--face-zoom' : ''}`;
      avatar.hidden = false;
    } else if (avatar) {
      avatar.hidden = true;
    }
    scrollAiThreadPaneToEnd();
  } else {
    row.hidden = true;
  }
}

/** Split assistant reply for typewriter effect: per-character (ZH) or word / whitespace chunks (EN). */
function chunkTextForAiStream(text, lang) {
  const s = typeof text === 'string' ? text : '';
  if (!s) return [];
  if (lang === 'zh-Hant') return Array.from(s);
  return s.split(/(\s+)/).filter((part) => part.length > 0);
}

function delayMsForAiStreamChunk(lang) {
  return lang === 'zh-Hant' ? 22 : 38;
}

function streamTextIntoElement(el, fullText, lang) {
  const chunks = chunkTextForAiStream(fullText, lang);
  const delay = delayMsForAiStreamChunk(lang);
  el.textContent = '';
  let i = 0;
  return new Promise((resolve) => {
    function tick() {
      if (i >= chunks.length) {
        resolve();
        return;
      }
      el.textContent += chunks[i];
      i += 1;
      scrollAiThreadPaneToEnd();
      setTimeout(tick, delay);
    }
    tick();
  });
}

function refreshAiStarters(opts) {
  const options = opts || {};
  const wrap = document.getElementById('ai-starters');
  if (!wrap) return;
  const ui = getUiText(state.lang);
  let qs;
  if (options.random) {
    qs = pickTwoRandomFromPool(getAiStarterPool());
    if (qs.length < 2) {
      qs = [ui.aiStarter1, ui.aiStarter2].filter(Boolean);
    }
  } else {
    qs = [ui.aiStarter1, ui.aiStarter2].filter(Boolean);
  }
  wrap.replaceChildren();
  qs.forEach(text => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ai-starter-btn';
    b.textContent = text;
    b.addEventListener('click', () => {
      const input = document.getElementById('ai-input');
      if (input) {
        input.value = text;
        input.focus();
      }
    });
    wrap.appendChild(b);
  });
  wrap.setAttribute('aria-label', ui.aiStartersLabel || 'Suggested questions');
}

function aiAppendMessage(role, content) {
  const box = getAiThreadMessagesEl();
  if (!box) return;
  if (role === 'user') {
    const msg = document.createElement('div');
    msg.className = 'ai-msg ai-msg--user';
    msg.textContent = content;
    box.appendChild(msg);
  } else {
    const row = document.createElement('div');
    row.className = 'ai-msg-row ai-msg-row--assistant';
    const src = getAiPhilosopherPortraitSrc();
    if (src) {
      const img = document.createElement('img');
      img.className = aiMsgAvatarClass();
      img.src = src;
      img.alt = '';
      img.decoding = 'async';
      img.referrerPolicy = 'no-referrer';
      row.appendChild(img);
    }
    const msg = document.createElement('div');
    msg.className = 'ai-msg ai-msg--assistant';
    msg.textContent = content;
    row.appendChild(msg);
    box.appendChild(row);
  }
  scrollAiThreadPaneToEnd();
}

/** Append assistant bubble and reveal text gradually (current guide portrait, bottom-left). */
function aiStreamAssistantMessage(fullText) {
  const box = getAiThreadMessagesEl();
  if (!box) return Promise.resolve();
  const row = document.createElement('div');
  row.className = 'ai-msg-row ai-msg-row--assistant';
  const src = getAiPhilosopherPortraitSrc();
  if (src) {
    const img = document.createElement('img');
    img.className = aiMsgAvatarClass();
    img.src = src;
    img.alt = '';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    row.appendChild(img);
  }
  const msg = document.createElement('div');
  msg.className = 'ai-msg ai-msg--assistant';
  row.appendChild(msg);
  box.appendChild(row);
  return streamTextIntoElement(msg, fullText, state.lang).then(() => {
    scrollAiThreadPaneToEnd();
  });
}

function aiRenderThread(dilemmaId) {
  const box = getAiThreadMessagesEl();
  if (!box) return;
  box.replaceChildren();
  const { messages } = loadAiThread(dilemmaId);
  messages.forEach(m => aiAppendMessage(m.role, m.content));
}

function parseAiCallErrorBody(txt) {
  if (!txt || !txt.trim()) return '';
  try {
    const j = JSON.parse(txt);
    if (j && typeof j.error === 'string' && j.error.trim()) return j.error.trim();
    if (j && typeof j.message === 'string' && j.message.trim()) return j.message.trim();
  } catch {}
  return txt.trim();
}

function classifyAiChatError(err) {
  const detail = err && typeof err.message === 'string' ? err.message : '';
  const status = err && typeof err.status === 'number' ? err.status : 0;
  const isNetwork =
    err?.name === 'TypeError' ||
    /NetworkError|Failed to fetch|Load failed|fetch/i.test(detail);
  if (isNetwork) return 'network';
  if (/Daily AI limit reached for this device/i.test(detail)) return 'dailyDevice';
  if (/Too many messages/i.test(detail)) return 'rateMinute';
  if (/Daily limit reached/i.test(detail)) return 'dailyApp';
  if (/AI is not configured/i.test(detail)) return 'unavailable';
  if (status === 429) {
    if (/device/i.test(detail)) return 'dailyDevice';
    if (/minute/i.test(detail)) return 'rateMinute';
    return 'dailyApp';
  }
  return 'technical';
}

function getAiChatErrorMessage(ui, kind) {
  const keyByKind = {
    technical: 'aiErrorTechnical',
    dailyDevice: 'aiErrorDailyDevice',
    rateMinute: 'aiErrorRateMinute',
    network: 'aiErrorNetwork',
    unavailable: 'aiErrorUnavailable',
    dailyApp: 'aiErrorDailyApp',
  };
  const key = keyByKind[kind] || keyByKind.technical;
  return ui[key] || ui.aiErrorTechnical || ui.aiSendFailed || 'Could not send message.';
}

async function aiCall(payload) {
  const url = getAiFunctionUrl();
  if (!url) {
    const e = new Error('AI is not configured');
    e.kind = 'unavailable';
    throw e;
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: supabaseFunctionsHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ ...payload, deviceId: getDeviceId() }),
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    let detail = parseAiCallErrorBody(txt) || `AI request failed: ${res.status}`;
    try {
      const j = JSON.parse(txt);
      const code = j && typeof j.code === 'string' ? j.code : '';
      const msg = j && typeof j.message === 'string' ? j.message : '';
      if (
        code === 'UNAUTHORIZED_INVALID_JWT_FORMAT' ||
        msg.includes('JWT') ||
        msg.includes('authorization')
      ) {
        detail =
          'AI chat needs the JWT anon key from Supabase (Project Settings → API → anon public). Replace window.__DD_SUPABASE.anonKey in index.html — sb_publishable_* keys are not accepted by Edge Functions.';
      }
    } catch {}
    const e = new Error(detail);
    e.status = res.status;
    throw e;
  }
  return await res.json();
}

async function aiShowChatError(kind) {
  const ui = getUiText(state.lang);
  const copy = getAiChatErrorMessage(ui, kind);
  aiSetHint('');
  aiSetThinking(false);
  await aiStreamAssistantMessage(copy);
}

async function maybeSummarizeAiThread(dilemmaId) {
  const { summary, messages } = loadAiThread(dilemmaId);
  // Only summarize when the thread is getting long; keep cost predictable.
  const turns = messages.length;
  if (turns <= AI_MAX_VISIBLE_TURNS * 2) return { summary, messages };
  if (turns % AI_SUMMARIZE_EVERY_TURNS !== 0) return { summary, messages };

  aiSetThinking(true);
  aiSetHint('');
  try {
    const resp = await aiCall({
      mode: 'summarize',
      lang: state.lang,
      summary,
      messages: messages.slice(-30),
      philosopherId: getSelectedPhilosopherId(),
    });
    const newSummary = typeof resp.summary === 'string' ? resp.summary : summary;
    // Keep only the most recent few turns after summarizing.
    const trimmed = messages.slice(-AI_MAX_VISIBLE_TURNS * 2);
    saveAiThread(dilemmaId, newSummary, trimmed);
    return { summary: newSummary, messages: trimmed };
  } finally {
    aiSetThinking(false);
  }
}

async function aiSendCurrentMessage() {
  const input = document.getElementById('ai-input');
  const btn = document.getElementById('btn-ai-send');
  if (!input || !btn || !getAiThreadMessagesEl()) return;

  const ui = getUiText(state.lang);
  if (!supabaseEnabled()) {
    await aiShowChatError('unavailable');
    return;
  }

  const d = getDilemma();
  const dilemmaId = d.id;
  const text = String(input.value || '').trim().slice(0, AI_CHAT_MAX_INPUT_CHARS);
  if (!text) {
    input.focus();
    return;
  }

  input.value = '';
  aiSetHint('');
  aiSetThinking(false);
  btn.disabled = true;
  input.disabled = true;

  try {
    const pre = loadAiThread(dilemmaId);
    pre.messages.push({ role: 'user', content: text });
    saveAiThread(dilemmaId, pre.summary, pre.messages);
    aiAppendMessage('user', text);

    const { summary, messages } = await maybeSummarizeAiThread(dilemmaId);
    const contextMessages = messages.slice(-AI_MAX_VISIBLE_TURNS * 2);

    aiSetThinking(true);
    aiSetHint('');
    const resp = await aiCall({
      mode: 'chat',
      lang: state.lang,
      summary,
      messages: contextMessages,
      dilemma: { id: d.id, text: d.text, optA: d.optA, optB: d.optB },
      userChoice: state.choice || '',
      philosopherId: getSelectedPhilosopherId(),
    });

    const reply = typeof resp.reply === 'string' ? resp.reply.trim() : '';
    const safeReply = reply || getAiChatErrorMessage(ui, 'technical');

    const post = loadAiThread(dilemmaId);
    post.messages.push({ role: 'assistant', content: safeReply });
    const updatedSummary = typeof resp.summary === 'string' ? resp.summary : post.summary;
    saveAiThread(dilemmaId, updatedSummary, post.messages);
    aiSetThinking(false);
    aiSetHint('');
    await aiStreamAssistantMessage(safeReply);
  } catch (err) {
    console.error(err);
    const kind = err?.kind === 'unavailable' ? 'unavailable' : classifyAiChatError(err);
    await aiShowChatError(kind);
  } finally {
    aiSetThinking(false);
    btn.disabled = false;
    input.disabled = false;
    input.focus();
  }
}

function isChatPickOverlayOpen() {
  const overlay = document.getElementById('chat-pick-overlay');
  return !!(overlay && !overlay.hidden);
}

function getPhilosopherDisplayName(id) {
  const ui = getUiText(state.lang);
  const names = ui.aiPhilosopherNames || {};
  return names[id] || id;
}

function getPhilosopherVibe(id) {
  const ui = getUiText(state.lang);
  const vibes = ui.aiPhilosopherVibes || {};
  return vibes[id] || '';
}

function getGatewayPhilosopherPortraitSrc(id) {
  const key = AI_PHILOSOPHER_PORTRAIT_KEYS[id];
  const candidates = getPhilosopherPortraitCandidates(key || '');
  return candidates.length ? candidates[0] : '';
}

function applyPhilosopherGatewayTexts() {
  const ui = getUiText(state.lang);
  const title = document.getElementById('chat-pick-title');
  if (title) title.textContent = ui.chatPickTitle || 'Choose a philosopher';
  const backBtn = document.getElementById('btn-gateway-back');
  if (backBtn) backBtn.setAttribute('aria-label', ui.chatPickBack || 'Back');
  const closeBtn = document.getElementById('btn-close-chat-pick');
  if (closeBtn) closeBtn.setAttribute('aria-label', ui.closeLabel || 'Close');
  const profileBtn = document.getElementById('label-gateway-profile');
  if (profileBtn) profileBtn.textContent = ui.philosopherGatewayProfile || 'Learn more';
  const startBtn = document.getElementById('label-gateway-start-chat');
  if (startBtn) startBtn.textContent = ui.philosopherGatewayStartChat || 'Start conversation';
  if (philosopherGatewaySelectedId) {
    const nameEl = document.getElementById('gateway-selected-name');
    const vibeEl = document.getElementById('gateway-selected-vibe');
    if (nameEl) nameEl.textContent = getPhilosopherDisplayName(philosopherGatewaySelectedId);
    if (vibeEl) vibeEl.textContent = getPhilosopherVibe(philosopherGatewaySelectedId);
  }
}

function renderPhilosopherGatewayGrid() {
  const grid = document.getElementById('philosopher-gateway-grid');
  if (!grid) return;
  grid.replaceChildren();
  AI_PHILOSOPHER_ORDER.forEach((id) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'philosopher-gateway-card';
    btn.dataset.philosopher = id;
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-label', `${getPhilosopherDisplayName(id)} — ${getPhilosopherVibe(id)}`);
    const src = getGatewayPhilosopherPortraitSrc(id);
    if (src) {
      const img = document.createElement('img');
      img.className = 'philosopher-gateway-avatar';
      img.src = src;
      img.alt = '';
      img.width = 68;
      img.height = 68;
      img.decoding = 'async';
      img.loading = 'lazy';
      img.referrerPolicy = 'no-referrer';
      btn.appendChild(img);
    }
    const name = document.createElement('span');
    name.className = 'philosopher-gateway-name';
    name.textContent = getPhilosopherDisplayName(id);
    btn.appendChild(name);
    const vibe = document.createElement('span');
    vibe.className = 'philosopher-gateway-vibe';
    vibe.textContent = getPhilosopherVibe(id);
    btn.appendChild(vibe);
    btn.addEventListener('click', () => showPhilosopherGatewayActions(id));
    grid.appendChild(btn);
  });
}

function showPhilosopherGatewayGrid() {
  philosopherGatewaySelectedId = null;
  const gridWrap = document.getElementById('philosopher-gateway-grid-wrap');
  const actions = document.getElementById('philosopher-gateway-actions');
  const backBtn = document.getElementById('btn-gateway-back');
  if (gridWrap) gridWrap.hidden = false;
  if (actions) actions.hidden = true;
  if (backBtn) backBtn.hidden = true;
  renderPhilosopherGatewayGrid();
}

function showPhilosopherGatewayActions(id) {
  if (!AI_PHILOSOPHER_ORDER.includes(id)) return;
  philosopherGatewaySelectedId = id;
  const gridWrap = document.getElementById('philosopher-gateway-grid-wrap');
  const actions = document.getElementById('philosopher-gateway-actions');
  const backBtn = document.getElementById('btn-gateway-back');
  if (gridWrap) gridWrap.hidden = true;
  if (actions) actions.hidden = false;
  if (backBtn) backBtn.hidden = false;
  const portrait = document.getElementById('gateway-selected-portrait');
  const src = getGatewayPhilosopherPortraitSrc(id);
  if (portrait) {
    if (src) {
      portrait.src = src;
      portrait.hidden = false;
    } else {
      portrait.removeAttribute('src');
      portrait.hidden = true;
    }
    portrait.alt = getPhilosopherDisplayName(id);
  }
  const nameEl = document.getElementById('gateway-selected-name');
  const vibeEl = document.getElementById('gateway-selected-vibe');
  if (nameEl) nameEl.textContent = getPhilosopherDisplayName(id);
  if (vibeEl) vibeEl.textContent = getPhilosopherVibe(id);
  document.getElementById('btn-gateway-start-chat')?.focus();
}

function openPhilosopherGateway(source, options = {}) {
  philosopherGatewaySource = source;
  philosopherGatewayPendingInput =
    typeof options.defaultInput === 'string' ? options.defaultInput : null;
  const preselect =
    typeof options.philosopherId === 'string' &&
    AI_PHILOSOPHER_ORDER.includes(options.philosopherId)
      ? options.philosopherId
      : null;
  if (preselect) showPhilosopherGatewayActions(preselect);
  else showPhilosopherGatewayGrid();
  applyPhilosopherGatewayTexts();
  const overlay = document.getElementById('chat-pick-overlay');
  if (!overlay) return;
  overlay.hidden = false;
  overlay.style.display = 'flex';
  document.getElementById('btn-close-chat-pick')?.focus();
}

function closePhilosopherGateway() {
  const overlay = document.getElementById('chat-pick-overlay');
  if (!overlay || overlay.hidden) return;
  overlay.hidden = true;
  overlay.style.display = 'none';
  philosopherGatewaySource = null;
  philosopherGatewaySelectedId = null;
  philosopherGatewayPendingInput = null;
  showPhilosopherGatewayGrid();
}

function philosopherGatewayStartChat() {
  const id = philosopherGatewaySelectedId || getSelectedPhilosopherId();
  if (id && AI_PHILOSOPHER_ORDER.includes(id)) setSelectedPhilosopherId(id);
  const pending = philosopherGatewayPendingInput;
  closePhilosopherGateway();
  setMainTab('chat');
  if (pending) {
    const input = document.getElementById('ai-input');
    if (input) {
      input.value = pending;
      requestAnimationFrame(() => input.focus());
    }
  }
}

function philosopherGatewayOpenProfile() {
  const id = philosopherGatewaySelectedId;
  if (!id || !AI_PHILOSOPHER_ORDER.includes(id)) return;
  setSelectedPhilosopherId(id);
  openPlatoReader();
}

if (typeof window !== 'undefined') {
  window.openPhilosopherGateway = openPhilosopherGateway;
  window.closePhilosopherGateway = closePhilosopherGateway;
}

function openAiAssistant() {
  setMainTab('chat');
}

function closeAiAssistant() {
  if (isPlatoReaderOpen()) closePlatoReader();
  aiSetHint('');
  aiSetThinking(false);
  setMainTab('dilemma');
}

function buildChallengeText() {
  const d = getDilemma();
  if (state.lang === 'zh-Hant') {
    return `今日呢題，你會點揀？\n\n"${d.text}"\n\nA. ${d.optA}\nB. ${d.optB}\n\n回覆 A 或 B。`;
  }
  return `Today\'s decision — what would you choose?\n\n"${d.text}"\n\nA. ${d.optA}\nB. ${d.optB}\n\nReply with A or B.`;
}

const shareAfterAnswerBtn = document.getElementById('btn-share-after-answer');
if (shareAfterAnswerBtn) shareAfterAnswerBtn.addEventListener('click', openShare);
document.getElementById('btn-close-challenge').addEventListener('click', closeChallenge);
document.getElementById('challenge-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('challenge-overlay')) closeChallenge();
});

document.getElementById('btn-ch-copy').addEventListener('click', () => {
  const ui = getUiText(state.lang);
  const text = buildChallengeText();
  navigator.clipboard.writeText(text)
    .then(() => showChallengeHint(ui.copiedSend))
    .catch(() => showChallengeHint(ui.copyFailed));
});

document.getElementById('btn-ch-share').addEventListener('click', () => {
  const ui = getUiText(state.lang);
  const text = buildChallengeText();
  if (navigator.share) {
    navigator.share({ title: ui.brandLine, text })
      .catch(() => {});
  } else {
    navigator.clipboard.writeText(text)
      .then(() => showChallengeHint(ui.copiedSend))
      .catch(() => showChallengeHint(ui.copyFailed));
  }
});

/* =============================================
   LANGUAGE
   ============================================= */
function applyDdStaticIcons() {
  if (typeof DD_ICONS === 'undefined' || !DD_ICONS.mount) return;
  DD_ICONS.mount(document.getElementById('icon-user-feedback'), 'smile', 16);
  DD_ICONS.mount(document.getElementById('icon-tab-forum'), 'forum', 22);
  DD_ICONS.mount(document.getElementById('forum-title-icon'), 'forum', 24);
  DD_ICONS.mount(document.getElementById('icon-tab-chat'), 'philosopherChat', 22);
  DD_ICONS.mount(document.getElementById('icon-ai-modal'), 'philosopherChat', 28);
  DD_ICONS.mount(document.getElementById('icon-chat-after-answer'), 'philosopherChat', 18);
  DD_ICONS.mount(document.getElementById('icon-share-after-answer'), 'share', 18);
}

function applyUIText() {
  const ui = getUiText(state.lang);
  document.documentElement.lang = ui.htmlLang || (state.lang === 'zh-Hant' ? 'zh-Hant' : 'en');
  document.title = ui.appTitle;
  const logoText = document.querySelector('.logo-text');
  if (logoText) logoText.textContent = ui.logoText;
  const shareBtn = document.getElementById('btn-share-trigger');
  if (shareBtn) shareBtn.setAttribute('aria-label', ui.share);
  const youChose = document.getElementById('label-you-chose');
  if (youChose) youChose.textContent = ui.youChose;
  const shareCardBrand = document.getElementById('label-share-card-brand');
  if (shareCardBrand) shareCardBrand.textContent = ui.brandName;
  const exportCardBrand = document.getElementById('label-export-card-brand');
  if (exportCardBrand) exportCardBrand.textContent = ui.brandName;
  const shareFooterBrand = document.getElementById('label-share-footer-brand');
  if (shareFooterBrand) shareFooterBrand.textContent = ui.brandLine.toLowerCase();
  const exportFooterBrand = document.getElementById('label-export-footer-brand');
  if (exportFooterBrand) exportFooterBrand.textContent = ui.brandLine.toLowerCase();
  const saveImage = document.getElementById('label-save-image');
  if (saveImage) saveImage.textContent = ui.saveImage;
  const saveTemplate = document.getElementById('label-save-image-template');
  if (saveTemplate) saveTemplate.textContent = ui.saveImage;
  const copyLink = document.getElementById('label-copy-link');
  if (copyLink) copyLink.textContent = ui.copyLink;
  const copyText = document.getElementById('label-copy-text');
  if (copyText) copyText.textContent = ui.copyText;
  const chCopy = document.getElementById('label-ch-copy');
  if (chCopy) chCopy.textContent = ui.copyText;
  const overflowBtn = document.getElementById('btn-overflow-toggle');
  if (overflowBtn) {
    const menuOpenLabel = ui.menuOpen || 'Open menu';
    overflowBtn.setAttribute('aria-label', menuOpenLabel);
    overflowBtn.setAttribute('title', menuOpenLabel);
  }
  const langBtn = document.getElementById('lang-toggle-label');
  if (langBtn) langBtn.textContent = ui.languageToggle;
  const languageAction = document.getElementById('label-language-action');
  if (languageAction) languageAction.textContent = ui.languageAction || 'Language';
  const privacyPolicy = document.getElementById('label-privacy-policy');
  if (privacyPolicy) privacyPolicy.textContent = ui.privacyPolicy || 'Privacy Policy';
  const termsOfUse = document.getElementById('label-terms-of-use');
  if (termsOfUse) termsOfUse.textContent = ui.termsOfUse || 'Terms of Use';
  const emailLegal = document.getElementById('btn-email-legal');
  if (emailLegal) emailLegal.textContent = ui.emailMe || 'Email Me';
  const sendLegal = document.getElementById('btn-send-legal-email');
  if (sendLegal) sendLegal.textContent = ui.send || 'Send';
  const legalEmailInput = document.getElementById('legal-email-input');
  if (legalEmailInput) legalEmailInput.setAttribute('placeholder', ui.emailPlaceholder || 'your@email.com');
  const greeting = document.getElementById('greeting-label');
  if (greeting) greeting.textContent = ui.greetingLabel;
  const splitTitle = document.querySelector('#acc-split .acc-title');
  if (splitTitle) splitTitle.textContent = ui.splitTitle;
  const yourTake = document.getElementById('label-your-take');
  if (yourTake) yourTake.textContent = ui.yourTake;
  const otherSide = document.getElementById('label-other-side');
  if (otherSide) otherSide.textContent = ui.otherSide;
  const quoteTitle = document.querySelector('#acc-quote .acc-title');
  if (quoteTitle) quoteTitle.textContent = ui.philosopherSays;
  const gfTitle = document.querySelector('#acc-further .acc-title');
  if (gfTitle) gfTitle.textContent = ui.goFurther;
  const shareAfterLabel = document.getElementById('label-share-after-answer');
  if (shareAfterLabel) shareAfterLabel.textContent = ui.share;
  const shareAfterBtn = document.getElementById('btn-share-after-answer');
  if (shareAfterBtn) shareAfterBtn.setAttribute('aria-label', ui.share);
  const nextLabel = document.getElementById('label-next-dilemma');
  if (nextLabel) nextLabel.textContent = ui.nextDilemma;
  const dailyReminderBtn = document.getElementById('btn-daily-reminder');
  if (dailyReminderBtn) {
    const dailyReminderLabel = ui.dailyReminderAction || 'Daily Reminder';
    dailyReminderBtn.setAttribute('aria-label', dailyReminderLabel);
    dailyReminderBtn.setAttribute('title', dailyReminderLabel);
    dailyReminderBtn.classList.toggle(
      'is-active',
      !!state.reminderEnabled && isValidReminderTimeValue(state.reminderTime)
    );
  }
  const dailyReminderLabel = document.getElementById('label-daily-reminder-action');
  if (dailyReminderLabel) dailyReminderLabel.textContent = ui.dailyReminderAction || 'Daily Reminder';
  const reminderTimeLabel = document.getElementById('label-reminder-time');
  if (reminderTimeLabel) reminderTimeLabel.textContent = ui.reminderTimeLabel || 'Reminder Time';
  const addReminderLabel = document.getElementById('label-add-reminder');
  if (addReminderLabel) addReminderLabel.textContent = ui.addReminder || 'Add';
  const removeReminderLabel = document.getElementById('label-remove-reminder');
  if (removeReminderLabel) removeReminderLabel.textContent = ui.removeReminder || 'Remove';
  const appVersionEl = document.getElementById('label-app-version');
  if (appVersionEl) appVersionEl.textContent = ui.appVersion || 'Version 1.0';
  const linkIg = document.getElementById('link-footer-ig');
  if (linkIg) linkIg.setAttribute('aria-label', ui.ariaInstagram || 'Instagram');
  const linkEmail = document.getElementById('link-footer-email');
  if (linkEmail) linkEmail.setAttribute('aria-label', ui.ariaEmailSupport || 'Email support');
  const linkApp = document.getElementById('link-footer-app-store');
  if (linkApp) linkApp.setAttribute('aria-label', ui.ariaAppStore || 'App Store');
  const linkPlay = document.getElementById('link-footer-play-store');
  if (linkPlay) linkPlay.setAttribute('aria-label', ui.ariaPlayStore || 'Google Play');
  refreshReminderWheel();
  syncOverflowSubpanels();
  const userFeedbackActionEl = document.getElementById('label-user-feedback-action');
  if (userFeedbackActionEl) userFeedbackActionEl.textContent = ui.userFeedbackAction || 'User Feedback';
  const tabBar = document.getElementById('app-tab-bar');
  if (tabBar) tabBar.setAttribute('aria-label', ui.mainTabBarAria || 'Main sections');
  const tabForumLabel = document.getElementById('label-tab-forum');
  if (tabForumLabel) tabForumLabel.textContent = ui.mainTabForum || 'Forum';
  const tabDilemmaLabel = document.getElementById('label-tab-dilemma');
  if (tabDilemmaLabel) tabDilemmaLabel.textContent = ui.mainTabDilemma || 'Dilemma Today';
  const tabChatLabel = document.getElementById('label-tab-chat');
  if (tabChatLabel) tabChatLabel.textContent = ui.mainTabChat || ui.aiAssistantAction || 'Dialogue';
  const chatAfterLabel = document.getElementById('label-chat-after-answer');
  if (chatAfterLabel) chatAfterLabel.textContent = ui.aiAssistantAction || ui.mainTabChat || 'Dialogue';
  const tabProfileLabel = document.getElementById('label-tab-profile');
  if (tabProfileLabel) tabProfileLabel.textContent = ui.mainTabProfile || ui.philosophyProfileAction || 'My Type';
  const kmTabLabel = ui.mainTabKnowledge || ui.knowledgeMapAction || 'Knowledge Map';
  const tabKnowledgeLabel = document.getElementById('label-tab-knowledge');
  if (tabKnowledgeLabel) tabKnowledgeLabel.textContent = kmTabLabel;
  const tabKnowledgeBtn = document.getElementById('tab-btn-knowledge');
  if (tabKnowledgeBtn) {
    tabKnowledgeBtn.setAttribute('aria-label', kmTabLabel);
    tabKnowledgeBtn.setAttribute('title', kmTabLabel);
  }
  if (typeof ForumPanel !== 'undefined') ForumPanel.onLanguageChange();
  applyDdStaticIcons();
  const closeAiBtn = document.getElementById('btn-close-ai');
  if (closeAiBtn) {
    closeAiBtn.setAttribute('aria-label', ui.aiCloseToDilemmaAria || 'Back to Dilemma Today');
    closeAiBtn.setAttribute('title', ui.aiCloseToDilemmaTitle || '');
  }
  const aiTitleEl = document.getElementById('ai-title');
  if (aiTitleEl) aiTitleEl.textContent = ui.aiTitle || 'Dialogue';
  const aiSubtitleEl = document.getElementById('ai-subtitle');
  if (aiSubtitleEl) aiSubtitleEl.textContent = ui.aiSubtitle || '';
  const aiInputEl = document.getElementById('ai-input');
  if (aiInputEl) aiInputEl.setAttribute('placeholder', ui.aiPlaceholder || '');
  refreshAiStarters();
  applyAiChatFontMode();
  const aiNewStartersBtn = document.getElementById('btn-ai-new-starters');
  if (aiNewStartersBtn) {
    aiNewStartersBtn.setAttribute('aria-label', ui.aiNewStartersAria || 'New suggested questions');
    aiNewStartersBtn.setAttribute('title', ui.aiNewStartersTitle || '');
  }
  const aiClearBtn = document.getElementById('btn-ai-clear-chat');
  if (aiClearBtn) {
    aiClearBtn.setAttribute('aria-label', ui.aiClearChatAria || 'Clear chat');
    aiClearBtn.setAttribute('title', ui.aiClearChatTitle || '');
  }
  const feedbackBtn = document.getElementById('btn-user-feedback');
  if (feedbackBtn) {
    const fbLabel = ui.userFeedbackAction || 'User Feedback';
    feedbackBtn.setAttribute('aria-label', fbLabel);
    feedbackBtn.setAttribute('title', fbLabel);
    feedbackBtn.classList.toggle('is-active', !!state.feedbackPanelOpen);
  }
  const feedbackPromptEl = document.getElementById('label-feedback-prompt');
  if (feedbackPromptEl) feedbackPromptEl.textContent = ui.feedbackPrompt || 'Your message';
  const feedbackTa = document.getElementById('feedback-text');
  if (feedbackTa) feedbackTa.setAttribute('placeholder', ui.feedbackPlaceholder || '');
  const sendFeedbackSpan = document.getElementById('label-send-feedback');
  if (sendFeedbackSpan) sendFeedbackSpan.textContent = ui.send || 'Send';
  const feedbackFlashOk = document.getElementById('label-feedback-flash-ok');
  if (feedbackFlashOk) feedbackFlashOk.textContent = ui.feedbackDismiss || 'Got it';
  const historyAction = document.getElementById('label-history-action');
  if (historyAction) historyAction.textContent = ui.historyAction || ui.historyTitle;
  const bookmarksAction = document.getElementById('label-bookmarks-action');
  if (bookmarksAction) bookmarksAction.textContent = ui.bookmarksAction || ui.bookmarksTitle || 'Bookmarks';
  const historyTitle = document.querySelector('#history-panel .history-title');
  if (historyTitle) historyTitle.textContent = ui.historyTitle;
  const historyEmpty = document.querySelector('#history-panel .history-empty');
  if (historyEmpty) historyEmpty.textContent = ui.historyEmpty || '';
  const bookmarksTitle = document.getElementById('bookmarks-title');
  if (bookmarksTitle) bookmarksTitle.textContent = ui.bookmarksTitle || 'Bookmarks';
  const bookmarksEmpty = document.getElementById('bookmarks-empty');
  if (bookmarksEmpty) bookmarksEmpty.textContent = ui.bookmarksEmpty || 'No bookmarks yet.';
  applyPlatoReaderHeadTexts();
  refreshPlatoReaderIfOpen();
  if (isChatPickOverlayOpen()) {
    applyPhilosopherGatewayTexts();
    if (!philosopherGatewaySelectedId) renderPhilosopherGatewayGrid();
    else showPhilosopherGatewayActions(philosopherGatewaySelectedId);
  }
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  state.lang = lang;
  saveLanguage();
  applyUIText();
  renderDate();
  renderDilemma();
  if (state.profileActive) {
    if (state.profileAnswers.length >= PHILOSOPHY_PROFILE_QUESTIONS.length) renderProfileResult();
    else renderProfileQuestion();
  }
  if (state.mainTab === 'knowledge' && state.knowledgeMapSeed != null) {
    renderKnowledgeMap(state.knowledgeMapSeed);
  }
  if (state.answered) {
    // Keep current choice view coherent after language switch.
    state.answered = false;
    const card = document.getElementById('dilemma-card');
    const chosen = document.getElementById('chosen-state');
    const sn = document.getElementById('sticky-next');
    chosen.hidden = true; chosen.style.display = 'none';
    sn.hidden = true; sn.style.display = 'none';
    card.hidden = false; card.style.display = 'block';
  }
  renderHistoryList();
}

document.getElementById('btn-lang-toggle').addEventListener('click', () => {
  closeOverflowMenu();
  setLanguage(state.lang === 'en' ? 'zh-Hant' : 'en');
});
document.getElementById('btn-user-feedback').addEventListener('click', () => {
  toggleUserFeedbackPanel();
});
document.getElementById('tab-btn-forum')?.addEventListener('click', () => setMainTab('forum'));
document.getElementById('tab-btn-dilemma')?.addEventListener('click', () => setMainTab('dilemma'));
document.getElementById('tab-btn-chat')?.addEventListener('click', () => openPhilosopherGateway('tab'));
document.getElementById('btn-chat-after-answer')?.addEventListener('click', () => {
  const ui = getUiText(state.lang);
  openPhilosopherGateway('post-answer', {
    defaultInput: ui.afterAnswerChatDefaultQuestion || 'What do you think about this dilemma?',
  });
});
document.getElementById('btn-close-chat-pick')?.addEventListener('click', closePhilosopherGateway);
document.getElementById('btn-gateway-back')?.addEventListener('click', showPhilosopherGatewayGrid);
document.getElementById('btn-gateway-start-chat')?.addEventListener('click', () => {
  philosopherGatewayStartChat();
});
document.getElementById('btn-gateway-profile')?.addEventListener('click', philosopherGatewayOpenProfile);
document.getElementById('chat-pick-overlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('chat-pick-overlay')) closePhilosopherGateway();
});
document.getElementById('btn-forum-compose')?.addEventListener('click', () => {
  if (typeof ForumPanel !== 'undefined' && typeof ForumPanel.openCompose === 'function') {
    ForumPanel.openCompose();
    return;
  }
  const ui = getUiText(state.lang);
  openFeedbackFlash(ui.forumComposeSoon || 'Posting is coming soon.');
});
document.getElementById('tab-btn-profile')?.addEventListener('click', () => openProfileTab());
document.getElementById('tab-btn-knowledge')?.addEventListener('click', () => openKnowledgeTab());
document.getElementById('btn-send-feedback').addEventListener('click', () => {
  sendUserFeedback().catch(() => {});
});
document.getElementById('btn-daily-reminder').addEventListener('click', () => {
  openDailyReminderControls().catch(() => {
    alert(getUiText(state.lang).notifyUnsupported);
  });
});
document.getElementById('btn-add-reminder').addEventListener('click', () => {
  addDailyReminderFromPanel().catch(() => {
    alert(getUiText(state.lang).notifyUnsupported);
  });
});
document.getElementById('btn-remove-reminder').addEventListener('click', () => {
  disableDailyReminder().catch(() => {
    alert(getUiText(state.lang).notifyUnsupported);
  });
});
document.getElementById('btn-overflow-toggle').addEventListener('click', e => {
  e.stopPropagation();
  const panel = document.getElementById('overflow-panel');
  if (!panel || panel.hidden) openOverflowMenu();
  else closeOverflowMenu();
});
document.addEventListener('click', e => {
  const menu = document.getElementById('overflow-menu');
  if (menu && !menu.contains(e.target)) closeOverflowMenu();
});
document.getElementById('btn-feedback-flash-ok').addEventListener('click', closeFeedbackFlash);
document.getElementById('feedback-flash-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('feedback-flash-overlay')) closeFeedbackFlash();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeFeedbackFlash();
    closeOverflowMenu();
    closeLegal();
    if (isChatPickOverlayOpen()) {
      if (isPlatoReaderOpen()) {
        closePlatoReader();
        return;
      }
      const actions = document.getElementById('philosopher-gateway-actions');
      if (philosopherGatewaySelectedId && actions && !actions.hidden) {
        showPhilosopherGatewayGrid();
        return;
      }
      closePhilosopherGateway();
      return;
    }
    if (isPlatoReaderOpen()) {
      closePlatoReader();
      return;
    }
    if (state.mainTab === 'chat') closeAiAssistant();
    else if (state.mainTab === 'knowledge') setMainTab('dilemma');
  }
});

document.getElementById('btn-close-ai')?.addEventListener('click', closeAiAssistant);
document.getElementById('btn-plato-reader')?.addEventListener('click', () => openPlatoReader());
document.getElementById('btn-close-plato-reader')?.addEventListener('click', () => closePlatoReader());
document.getElementById('btn-plato-reader-font')?.addEventListener('click', () => cycleAiChatFontMode());
document.getElementById('plato-reader-overlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('plato-reader-overlay')) closePlatoReader();
});
const btnAiChatFontRoot = document.getElementById('btn-ai-chat-font');
if (btnAiChatFontRoot) btnAiChatFontRoot.addEventListener('click', () => cycleAiChatFontMode());
const btnAiClearRoot = document.getElementById('btn-ai-clear-chat');
if (btnAiClearRoot) btnAiClearRoot.addEventListener('click', () => aiClearChatRecords());
const btnAiNewStartersRoot = document.getElementById('btn-ai-new-starters');
if (btnAiNewStartersRoot) btnAiNewStartersRoot.addEventListener('click', () => refreshAiStarters({ random: true }));
document.getElementById('ai-compose')?.addEventListener('submit', e => {
  e.preventDefault();
  aiSendCurrentMessage().catch(() => {});
});

/* =============================================
   DEEP LINK
   ============================================= */
function checkDeepLink() {
  const match = location.hash.match(/[#&]d=(\d+)/);
  if (!match) return;
  const id = parseInt(match[1], 10);
  const idx = getAllDilemmas().findIndex(d => d.id === id);
  if (idx !== -1) { state.todayIndex = idx; renderDilemma(); }
}

function hideLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;
  const MIN_READING_MS = 500;
  const elapsed = Date.now() - APP_LOAD_STARTED_AT;
  const remaining = Math.max(0, MIN_READING_MS - elapsed);
  const fadeMs = 420;
  setTimeout(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        screen.classList.add('is-hiding');
        setTimeout(() => {
          screen.hidden = true;
          screen.setAttribute('aria-hidden', 'true');
        }, fadeMs);
      });
    });
  }, remaining);
}

function armStartScreenDismiss() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  // Auto-enter after 4 seconds (no manual "Enter" interaction).
  const AUTO_DISMISS_MS = 2000;
  setTimeout(() => hideLoadingScreen(), AUTO_DISMISS_MS);
}



function closeForumTopicDetail() {
  if (typeof ForumPanel !== 'undefined' && typeof ForumPanel.closeDetail === 'function') {
    ForumPanel.closeDetail();
    return;
  }
  state.forumView = 'list';
  state.forumPostId = null;
  state.forumReplyOpen = null;
  const listView = document.getElementById('forum-list-view');
  const detailView = document.getElementById('forum-detail-view');
  const hero = document.querySelector('.forum-hero');
  const shell = document.querySelector('.forum-shell');
  if (listView) listView.hidden = false;
  if (detailView) detailView.hidden = true;
  if (hero) hero.hidden = false;
  if (shell) shell.classList.remove('forum-shell--detail');
  if (typeof ForumPanel !== 'undefined' && typeof ForumPanel.renderFeed === 'function') {
    ForumPanel.renderFeed();
  }
}

function bindForumBackNavigation() {
  document.getElementById('btn-forum-back')?.addEventListener('click', (e) => {
    e.preventDefault();
    closeForumTopicDetail();
  });
}

/* =============================================
   INIT
   ============================================= */
function init() {
  const native = !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform());
  state.isNative = native;
  document.body.classList.toggle('is-native', native);
  applyOverflowFooterLinks();
  state.lang = loadLanguage();
  state.history = loadHistory();
  state.forumUserPosts = loadForumUserPosts();
  state.forumPhilosopherFollowups = loadForumPhilosopherFollowups();
  state.forumUserAvatarId = loadForumUserAvatarId();
  syncExploredConceptsFromHistory();
  mergeLearnedConceptsFromSupabase().catch(() => {});
  state.reminderEnabled = loadReminderEnabled();
  state.reminderTime = loadReminderTime();
  applyUIText();
  if (state.reminderEnabled && state.isNative && isValidReminderTimeValue(state.reminderTime)) {
    scheduleDailyReminderNotification().catch(() => {
      state.reminderEnabled = false;
      saveReminderEnabled();
      applyUIText();
    });
  }
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) loadingScreen.classList.add('loading-screen--ready');
  renderDate();
  renderDilemma();
  checkDeepLink();
  function refreshTodayAfterScheduleFetch() {
    if (location.hash.match(/[#&]d=\d+/)) return;
    if (state.answered) return;
    state.todayIndex = computeEffectiveTodayIndex(state.todayKey);
    renderDilemma();
    syncAnsweredUiFromHistoryIfNeeded();
    setMainTab('dilemma');
  }
  fetchScheduledDilemmaForToday()
    .then(() => refreshTodayAfterScheduleFetch())
    .catch(() => refreshTodayAfterScheduleFetch());
  armStartScreenDismiss();
  bindForumBackNavigation();
  if (typeof ForumPanel !== 'undefined') ForumPanel.init();
  setMainTab('dilemma');
}

function bootstrap() {
  const failOpen = err => {
    try {
      console.error('Daily Dilemma failed to start:', err);
    } catch {}
    try {
      const screen = document.getElementById('loading-screen');
      if (screen) {
        screen.classList.add('loading-screen--ready');
      }
    } catch {}
    try {
      armStartScreenDismiss();
    } catch {}
  };

  window.addEventListener('error', e => failOpen(e?.error || e?.message || e));
  window.addEventListener('unhandledrejection', e => failOpen(e?.reason || e));

  try {
    init();
  } catch (err) {
    failOpen(err);
  }
}

bootstrap();

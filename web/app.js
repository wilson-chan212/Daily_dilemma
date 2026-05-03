const APP_LOAD_STARTED_AT =
  typeof window !== 'undefined' && typeof window.__ddLoadT0 === 'number' ? window.__ddLoadT0 : Date.now();

/* =============================================
   WEEKLY THEMES  (5 dilemmas per week, 6 weeks)
   ============================================= */
const WEEKLY_THEMES = [
  // Week 1 — dilemmas 1–5
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '✨' },
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '✨' },
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '✨' },
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '✨' },
  { week: 1, name: 'Self & Happiness', color: '#c5603a', emoji: '✨' },
  // Week 2 — dilemmas 6–10
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '🌀' },
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '🌀' },
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '🌀' },
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '🌀' },
  { week: 2, name: 'Freedom & Mind', color: '#4a87a8', emoji: '🌀' },
  // Week 3 — dilemmas 11–15
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '⚖️' },
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '⚖️' },
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '⚖️' },
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '⚖️' },
  { week: 3, name: 'Justice & Reality', color: '#7a6e5f', emoji: '⚖️' },
  // Week 4 — dilemmas 16–20 — Honesty & Character
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '🪶' },
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '🪶' },
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '🪶' },
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '🪶' },
  { week: 4, name: 'Honesty & Character', color: '#8a6d4f', emoji: '🪶' },
  // Week 5 — dilemmas 21–25 — Self-Mastery & Virtue
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '🌿' },
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '🌿' },
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '🌿' },
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '🌿' },
  { week: 5, name: 'Self-Mastery & Virtue', color: '#5a7a6a', emoji: '🌿' },
  // Week 6 — dilemmas 26–30 — Wisdom & Courage
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '🕯️' },
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '🕯️' },
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '🕯️' },
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '🕯️' },
  { week: 6, name: 'Wisdom & Courage', color: '#6a5a8a', emoji: '🕯️' },
  // Week 7 — dilemmas 31–33 — Future Ethics
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '🧬' },
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '🧬' },
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '🧬' },
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '🧬' },
  { week: 7, name: 'Future Ethics', color: '#3f6b6a', emoji: '🧬' },
  // Week 8 — dilemmas 36–40 — Liberty & Public Life
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '🏛️' },
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '🏛️' },
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '🏛️' },
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '🏛️' },
  { week: 8, name: 'Liberty & Public Life', color: '#7b6753', emoji: '🏛️' },
  // Week 9 — dilemmas 41–45 — Justice & Care
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '🤲' },
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '🤲' },
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '🤲' },
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '🤲' },
  { week: 9, name: 'Justice & Care', color: '#6f7d5a', emoji: '🤲' },
  // Week 10 — dilemmas 46–50 — Technology & Meaning
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '🔭' },
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '🔭' },
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '🔭' },
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '🔭' },
  { week: 10, name: 'Technology & Meaning', color: '#5f6d8a', emoji: '🔭' },
];

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
    books: [],
    videos: [],
  },
  // 32. Predictive surveillance
  {
    terms: ['Panopticon', 'Civil Liberties', 'Public Safety', 'Proportionality Principle'],
    books: [],
    videos: [],
  },
  // 33. AI grief companion
  {
    terms: ['Continuing Bonds', 'Digital Afterlife', 'Authenticity', 'Ethics of Mourning'],
    books: [],
    videos: [],
  },
  // 34. Climate mirror
  {
    terms: ['Geoengineering', 'Climate Justice', 'Precautionary Principle', 'Collective Risk'],
    books: [],
    videos: [],
  },
  // 35. Animal uplift
  {
    terms: ['Animal Ethics', 'Moral Status', 'Cognitive Enhancement', 'Paternalism'],
    books: [],
    videos: [],
  },
  // 36. Quarantine order
  {
    terms: ['Public Health Ethics', 'Civil Liberty', 'Emergency Powers', 'Harm Principle'],
    books: [],
    videos: [],
  },
  // 37. Robot caregiver
  {
    terms: ['Care Ethics', 'Elder Care', 'Automation', 'Dignity'],
    books: [],
    videos: [],
  },
  // 38. Deepfake ban
  {
    terms: ['Free Speech', 'Deepfakes', 'Political Satire', 'Information Trust'],
    books: [],
    videos: [],
  },
  // 39. Mood regulator
  {
    terms: ['Neuroethics', 'Emotional Authenticity', 'Mental Health', 'Medical Enhancement'],
    books: [],
    videos: [],
  },
  // 40. Space colony ticket
  {
    terms: ['Longtermism', 'Duties to Home', 'Species Survival', 'Exploration Ethics'],
    books: [],
    videos: [],
  },
  // 41. Wild suffering
  {
    terms: ['Wild Animal Suffering', 'Ecological Humility', 'Compassion', 'Nonhuman Ethics'],
    books: [],
    videos: [],
  },
  // 42. Cultural artifact
  {
    terms: ['Repatriation', 'Cultural Heritage', 'Restorative Justice', 'Museum Ethics'],
    books: [],
    videos: [],
  },
  // 43. Platform speech
  {
    terms: ['Content Moderation', 'Misinformation', 'Free Expression', 'Platform Power'],
    books: [],
    videos: [],
  },
  // 44. Open-source medicine
  {
    terms: ['Patent Ethics', 'Access to Medicine', 'Innovation Incentives', 'Health Justice'],
    books: [],
    videos: [],
  },
  // 45. Blind hiring
  {
    terms: ['Meritocracy', 'Equality of Opportunity', 'Contextual Fairness', 'Bias Reduction'],
    books: [],
    videos: [],
  },
  // 46. Dream ads
  {
    terms: ['Mental Privacy', 'Commodification', 'Consent', 'Attention Economy'],
    books: [],
    videos: [],
  },
  // 47. De-extinction
  {
    terms: ['De-extinction', 'Conservation Ethics', 'Ecological Restoration', 'Moral Repair'],
    books: [],
    videos: [],
  },
  // 48. Dementia archive
  {
    terms: ['Narrative Identity', 'Dementia Ethics', 'Privacy After Decline', 'Family Memory'],
    books: [],
    videos: [],
  },
  // 49. AI tutor
  {
    terms: ['Education Ethics', 'Human Development', 'AI Tutoring', 'Relational Learning'],
    books: [],
    videos: [],
  },
  // 50. Water rationing
  {
    terms: ['Climate Adaptation', 'Resource Justice', 'Collective Responsibility', 'Scarcity Ethics'],
    books: [],
    videos: [],
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
    nextDilemma: 'Next Dilemma →',
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
    keyConcepts: 'Key Concepts',
    books: 'Books',
    watch: 'Watch',
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
    userFeedbackAction: 'User feedback',
    feedbackPrompt: 'Your message',
    feedbackPlaceholder: 'Share a thought, a bug, or a suggestion…',
    feedbackThanks: 'Thanks for your feedback!',
    feedbackUnavailable: 'Feedback could not be sent because the app is not connected to the server.',
    feedbackSendFailed: 'Could not send feedback. Check your connection and try again.',
    feedbackDismiss: 'Got it',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
    emailMe: 'Email Me',
    emailPlaceholder: 'your@email.com',
    legalMissing: 'Legal content was not found in the Legal folder yet.',
    topicSuggestAction: 'Suggest tomorrow',
    topicSuggestPlaceholder: 'e.g. friendship, exams, Hong Kong…',
    topicSuggestFind: 'Find themes',
    topicSuggestModalTitle: 'Vote for tomorrow’s dilemma',
    topicSuggestClosestTheme: 'Closest theme:',
    topicSuggestVoteTomorrow: 'Vote for tomorrow',
    topicSuggestTapPreview: 'Tap to read full dilemma',
    topicSuggestSubmitVote: 'Submit vote for tomorrow',
    topicSuggestBack: 'Back',
    topicSuggestSaved: 'Your vote was recorded for tomorrow’s featured dilemma.',
    topicSuggestEmpty: 'Pick a quick theme or type a topic and tap Find again.',
    topicSuggestBlocked: 'That topic is a bit heavy for this app. Try a lighter theme.',
    topicSuggestNoMatch: 'No close match — choose a theme below.',
    topicSuggestQuickLabel: 'Quick themes:',
    topicSuggestPickThemeFirst: 'Choose a theme first.',
    topicSuggestVoteUnavailable: 'Connect the app to the server to vote.',
    topicSuggestVoteFailed: 'Could not save your vote. Try again.',
    suggestTomorrowSticky: 'Suggest tomorrow',
    closeTopicModal: 'Close',
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
  topicSuggestPanelOpen: false,
  /** Community-scheduled dilemma index for today (null = use date hash). */
  scheduledDilemmaIndex: null,
  isNative: false,
  pendingTimeout: null,
};

/** Last tag matched in “Suggest a topic” (for voting + local stats only). */
let topicSuggestLastTag = null;
/** Dilemma index selected in modal detail view (pending vote). */
let topicSuggestPendingVoteIndex = null;

/* =============================================
   PERSISTENCE (localStorage)
   ============================================= */
const STORAGE_KEYS = {
  history: 'dailyDilemmas.history.v1',
  lang: 'dailyDilemmas.lang.v1',
  reminderEnabled: 'dailyDilemmas.reminderEnabled.v1',
  reminderTime: 'dailyDilemmas.reminderTime.v1',
  voterId: 'dailyDilemmas.voterClientId.v1',
  topicTagStats: 'dailyDilemmas.topicTagStats.v1',
};

function getOrCreateVoterClientId() {
  try {
    let id = localStorage.getItem(STORAGE_KEYS.voterId);
    if (id && id.length >= 8) return id;
    const arr = new Uint8Array(16);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) crypto.getRandomValues(arr);
    else for (let i = 0; i < 16; i++) arr[i] = Math.floor(Math.random() * 256);
    id = Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
    localStorage.setItem(STORAGE_KEYS.voterId, id);
    return id;
  } catch {
    return `anon-${Date.now()}-${Math.random().toString(16).slice(2)}`;
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
    // Soft-validate shape to avoid breaking if storage is corrupted.
    return parsed.filter(item =>
      item &&
      typeof item === 'object' &&
      typeof item.id === 'number' &&
      typeof item.date === 'string' &&
      typeof item.time === 'string'
    );
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

/* =============================================
   SUGGEST A TOPIC — approved tag match (no public free text)
   Optional: pick one curated dilemma for “tomorrow” on this device only.
   ============================================= */
const APPROVED_TOPIC_TAGS = [
  {
    id: 'relationships',
    labelEn: 'Relationships & trust',
    labelZh: '關係與信任',
    keywords: ['relationship', 'relationships', 'love', 'marriage', 'married', 'dating', 'date', 'partner', 'couple', 'romance', 'wedding', 'boyfriend', 'girlfriend', 'crush', 'heartbreak', 'breakup', '戀愛', '愛情', '結婚', '伴侶', '男友', '女友', '夫妻', '戀人'],
    dilemmaIndices: [6, 15, 16, 27, 28],
  },
  {
    id: 'family',
    labelEn: 'Family & home',
    labelZh: '家庭與家',
    keywords: ['family', 'parent', 'mother', 'father', 'sibling', 'kids', 'home', '家庭', '父母', '家人', '爸', '媽', '兄弟', '姊妹'],
    dilemmaIndices: [15, 19, 27],
  },
  {
    id: 'work',
    labelEn: 'Work & career',
    labelZh: '工作與事業',
    keywords: ['work', 'job', 'career', 'office', 'boss', 'colleague', 'salary', 'workplace', '工作', '職場', '同事', '老闆', '辦公室'],
    dilemmaIndices: [20, 23, 25],
  },
  {
    id: 'school',
    labelEn: 'School & learning',
    labelZh: '學校與學習',
    keywords: ['school', 'exam', 'exams', 'test', 'study', 'university', 'college', 'grade', 'class', 'teacher', 'homework', '學校', '考試', '測驗', '學習', '同學', '老師'],
    dilemmaIndices: [19, 24, 26],
  },
  {
    id: 'ethics',
    labelEn: 'Justice & rules',
    labelZh: '正義與規則',
    keywords: ['justice', 'law', 'crime', 'police', 'court', 'moral', 'ethics', 'rules', 'fair', 'fairness', '正義', '法律', '犯罪', '懲罰'],
    dilemmaIndices: [1, 8, 13, 18],
  },
  {
    id: 'tech',
    labelEn: 'Tech & AI',
    labelZh: '科技與人工智能',
    keywords: ['tech', 'technology', 'ai', 'internet', 'phone', 'app', 'apps', 'computer', 'robot', 'vr', 'virtual', 'simulation', 'algorithm', 'data', '科技', '人工智能', '手機', '程式', '演算法'],
    dilemmaIndices: [0, 9, 14, 17, 28],
  },
  {
    id: 'identity',
    labelEn: 'Self & identity',
    labelZh: '自我與身份',
    keywords: ['identity', 'self', 'who am', 'memory', 'change', 'body', 'brain', 'soul', '我是誰', '記憶', '身分', '自己'],
    dilemmaIndices: [2, 3, 5, 11],
  },
  {
    id: 'meaning',
    labelEn: 'Meaning & happiness',
    labelZh: '意義與快樂',
    keywords: ['happiness', 'happy', 'meaning', 'purpose', 'life', 'worth', 'lonely', 'loneliness', 'death', 'die', 'mortality', '快樂', '意義', '孤獨', '幸福'],
    dilemmaIndices: [0, 7, 22],
  },
  {
    id: 'social',
    labelEn: 'Social & online',
    labelZh: '社交與網上',
    keywords: ['social', 'instagram', 'online', 'post', 'viral', 'influencer', 'feed', 'media', '社交', '網上', '限時', '貼文'],
    dilemmaIndices: [17, 21],
  },
  {
    id: 'courage',
    labelEn: 'Courage & inclusion',
    labelZh: '勇氣與共融',
    keywords: ['courage', 'brave', 'bully', 'bullying', 'defend', 'stand up', 'inclusion', 'group', 'team', '勇氣', '欺凌', '站出來', '團隊'],
    dilemmaIndices: [10, 19, 26],
  },
  {
    id: 'honesty',
    labelEn: 'Honesty & truth',
    labelZh: '誠實與真相',
    keywords: ['honest', 'honesty', 'truth', 'lie', 'lying', 'fake', 'integrity', '誠實', '謊言', '真話'],
    dilemmaIndices: [4, 15, 24],
  },
  {
    id: 'freedom',
    labelEn: 'Freedom & choice',
    labelZh: '自由與選擇',
    keywords: ['free will', 'freedom', 'choose', 'choice', 'control', 'path', 'future', '自由', '選擇', '未來'],
    dilemmaIndices: [8, 20, 21],
  },
  {
    id: 'money',
    labelEn: 'Money & giving',
    labelZh: '金錢與付出',
    keywords: ['money', 'buy', 'rich', 'luxury', 'cheap', 'donate', 'charity', 'giving', '錢', '奢侈', '捐獻', '捐款'],
    dilemmaIndices: [22, 29],
  },
  {
    id: 'hk_life',
    labelEn: 'Daily life (HK)',
    labelZh: '本地日常',
    keywords: ['hong kong', ' hongkong', 'hk ', ' hk', 'mtr', 'commute', '香港', '港鐵', '地鐵'],
    dilemmaIndices: [15, 17, 21, 22],
  },
];

const TOPIC_INPUT_BLOCK_SUBSTRINGS = [
  'suicide', 'kill myself', 'kill yourself', 'rape', 'porn', 'porno', 'sexual', 'nazi', 'terror', 'bomb', 'weapon', 'drug deal',
  '自殺', '色情', '強姦',
];

function normalizeTopicInput(raw) {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function isTopicInputBlocked(normalized) {
  if (!normalized) return false;
  for (let i = 0; i < TOPIC_INPUT_BLOCK_SUBSTRINGS.length; i += 1) {
    if (normalized.includes(TOPIC_INPUT_BLOCK_SUBSTRINGS[i])) return true;
  }
  return false;
}

function matchApprovedTopicTag(normalized) {
  if (!normalized) return null;
  let best = null;
  let bestScore = 0;
  for (let t = 0; t < APPROVED_TOPIC_TAGS.length; t += 1) {
    const tag = APPROVED_TOPIC_TAGS[t];
    let score = 0;
    for (let k = 0; k < tag.keywords.length; k += 1) {
      const low = tag.keywords[k].toLowerCase();
      if (low && normalized.includes(low)) score += 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = tag;
    }
  }
  return bestScore > 0 ? best : null;
}

function tagDisplayLabel(tag) {
  if (!tag) return '';
  return state.lang === 'zh-Hant' ? tag.labelZh : tag.labelEn;
}

function pickThreeDilemmaIndices(pool, seed) {
  const unique = [...new Set(pool)].filter(i => i >= 0 && i < getAllDilemmas().length);
  const n = getAllDilemmas().length;
  let s = Math.abs(seed) % 2147483647 || 1;
  function rnd() {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  }
  const arr = [...unique];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  let out = arr.slice(0, 3);
  let fill = 0;
  while (out.length < 3 && fill < n) {
    if (!out.includes(fill)) out.push(fill);
    fill += 1;
  }
  return out.slice(0, 3);
}

function suggestIndicesForTag(tag) {
  const seed =
    parseInt(String(state.todayKey).replace(/-/g, ''), 10) +
    tag.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return pickThreeDilemmaIndices(tag.dilemmaIndices, seed);
}

function incrementTopicTagStat(tagId) {
  if (!tagId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.topicTagStats);
    let o = {};
    if (raw) {
      const p = JSON.parse(raw);
      if (typeof p === 'object' && p !== null) o = p;
    }
    o[tagId] = (o[tagId] || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.topicTagStats, JSON.stringify(o));
  } catch {
    // ignore
  }
}

function getTomorrowDateKey(fromKey = state.todayKey) {
  const parts = String(fromKey).split('-').map(Number);
  const dt = new Date(parts[0], parts[1] - 1, parts[2]);
  dt.setDate(dt.getDate() + 1);
  return getLocalDateKey(dt);
}

function computeEffectiveTodayIndex(dateKey = state.todayKey) {
  const len = getAllDilemmas().length;
  if (Number.isInteger(state.scheduledDilemmaIndex)) {
    const idx = state.scheduledDilemmaIndex;
    if (idx >= 0 && idx < len) return idx;
  }
  return getTodayIndexFromKey(dateKey);
}

function getTodayIndexFromKey(dateKey = state.todayKey) {
  return parseInt(String(dateKey).replace(/-/g, ''), 10) % getAllDilemmas().length;
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
  state.scheduledDilemmaIndex = null;
  state.todayIndex = getTodayIndexFromKey(nextTodayKey);
  const todayEntry = findTodayAnswerEntry();
  state.answered = !!todayEntry;
  state.chosenOpt = todayEntry ? todayEntry.choiceKey : null;
  fetchScheduledDilemmaForToday().then(() => {
    if (state.answered) return;
    state.todayIndex = computeEffectiveTodayIndex(state.todayKey);
    renderDilemma();
  });
  return true;
}

// Today’s index: community winner (loaded async) or date hash
state.todayIndex = computeEffectiveTodayIndex(state.todayKey);

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
  const topicControls = document.getElementById('overflow-topic-suggest-controls');
  if (topicControls) topicControls.hidden = !state.topicSuggestPanelOpen;
}

function closeOverflowMenu() {
  const panel = document.getElementById('overflow-panel');
  const toggle = document.getElementById('btn-overflow-toggle');
  if (!panel || !toggle) return;
  state.reminderPanelOpen = false;
  state.feedbackPanelOpen = false;
  state.topicSuggestPanelOpen = false;
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
  state.topicSuggestPanelOpen = false;
  state.feedbackPanelOpen = !state.feedbackPanelOpen;
  syncOverflowSubpanels();
  applyUIText();
  if (state.feedbackPanelOpen) {
    const ta = document.getElementById('feedback-text');
    if (ta) requestAnimationFrame(() => ta.focus());
  }
}

function topicSuggestModalEls() {
  return {
    themeLine: document.getElementById('topic-suggest-theme-line-modal'),
    themeLabel: document.getElementById('topic-suggest-theme-label-modal'),
    candidates: document.getElementById('topic-suggest-candidates-modal'),
    status: document.getElementById('topic-suggest-status-modal'),
    chips: document.getElementById('topic-suggest-quick-themes-modal'),
    quickLabel: document.getElementById('label-topic-suggest-quick-modal'),
  };
}

function resetTopicSuggestModal() {
  topicSuggestLastTag = null;
  topicSuggestPendingVoteIndex = null;
  hideTopicSuggestDetailModal(false);
  const { themeLine, candidates, status, chips, quickLabel } = topicSuggestModalEls();
  if (themeLine) themeLine.hidden = true;
  if (candidates) {
    candidates.replaceChildren();
    candidates.hidden = false;
  }
  if (status) {
    status.hidden = true;
    status.textContent = '';
  }
  if (chips) {
    chips.hidden = true;
    chips.replaceChildren();
  }
  if (quickLabel) quickLabel.hidden = true;
}

function hideTopicSuggestDetailModal(showList = true) {
  const detail = document.getElementById('topic-suggest-detail-modal');
  if (detail) detail.hidden = true;
  topicSuggestPendingVoteIndex = null;
  const { candidates } = topicSuggestModalEls();
  if (candidates && showList) candidates.hidden = false;
}

function showTopicSuggestDetailModal(dilemmaIndex) {
  const dilemmas = getAllDilemmas();
  const d = dilemmas[dilemmaIndex];
  if (!d) return;
  topicSuggestPendingVoteIndex = dilemmaIndex;
  const { candidates, status } = topicSuggestModalEls();
  if (candidates) candidates.hidden = true;
  if (status) status.hidden = true;
  const detail = document.getElementById('topic-suggest-detail-modal');
  const qEl = document.getElementById('topic-suggest-detail-text');
  const aEl = document.getElementById('topic-suggest-detail-opt-a');
  const bEl = document.getElementById('topic-suggest-detail-opt-b');
  if (qEl) qEl.textContent = d.text;
  if (aEl) aEl.textContent = `A. ${d.optA}`;
  if (bEl) bEl.textContent = `B. ${d.optB}`;
  if (detail) detail.hidden = false;
  const backBtn = document.getElementById('btn-topic-suggest-back');
  if (backBtn) requestAnimationFrame(() => backBtn.focus());
}

function openTopicSuggestModal(options = {}) {
  const { showQuickThemes = false } = options;
  const overlay = document.getElementById('topic-suggest-modal');
  if (!overlay) return;
  resetTopicSuggestModal();
  overlay.hidden = false;
  overlay.style.display = 'flex';
  applyUIText();
  if (showQuickThemes) {
    showQuickThemeChipsModal();
  }
  document.body.style.overflow = 'hidden';
}

function closeTopicSuggestModal() {
  const overlay = document.getElementById('topic-suggest-modal');
  if (!overlay) return;
  overlay.hidden = true;
  overlay.style.display = 'none';
  resetTopicSuggestModal();
  document.body.style.overflow = '';
}

function toggleTopicSuggestPanel() {
  state.reminderPanelOpen = false;
  state.feedbackPanelOpen = false;
  state.topicSuggestPanelOpen = !state.topicSuggestPanelOpen;
  syncOverflowSubpanels();
  applyUIText();
  if (!state.topicSuggestPanelOpen) {
    const inp = document.getElementById('topic-suggest-input');
    if (inp) inp.value = '';
  } else {
    const inp = document.getElementById('topic-suggest-input');
    if (inp) requestAnimationFrame(() => inp && inp.focus());
  }
}

function truncateTopicSnippet(text, max = 96) {
  const s = String(text || '').replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  return `${s.slice(0, max - 1)}…`;
}

function renderTopicSuggestCandidatesModal(indices) {
  hideTopicSuggestDetailModal(false);
  const { candidates } = topicSuggestModalEls();
  if (!candidates) return;
  candidates.replaceChildren();
  candidates.hidden = false;
  const detail = document.getElementById('topic-suggest-detail-modal');
  if (detail) detail.hidden = true;
  topicSuggestPendingVoteIndex = null;
  const dilemmas = getAllDilemmas();
  const ui = getUiText(state.lang);
  indices.forEach(idx => {
    const d = dilemmas[idx];
    if (!d) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'topic-suggest-candidate-btn';
    btn.dataset.dilemmaIndex = String(idx);
    const title = document.createElement('span');
    title.className = 'topic-suggest-candidate-title';
    title.textContent = truncateTopicSnippet(d.text, 100);
    const sub = document.createElement('span');
    sub.className = 'topic-suggest-candidate-action';
    sub.textContent = ui.topicSuggestTapPreview || 'Tap to read full dilemma';
    btn.appendChild(title);
    btn.appendChild(sub);
    btn.addEventListener('click', () => showTopicSuggestDetailModal(idx));
    candidates.appendChild(btn);
  });
}

function showTopicSuggestThemeModal(tag) {
  const { themeLine, themeLabel } = topicSuggestModalEls();
  if (!themeLine || !themeLabel) return;
  themeLine.hidden = false;
  const ui = getUiText(state.lang);
  const prefix = ui.topicSuggestClosestTheme || 'Closest theme:';
  themeLabel.textContent = `${prefix} ${tagDisplayLabel(tag)}`;
}

function showQuickThemeChipsModal() {
  const ui = getUiText(state.lang);
  const { quickLabel, chips, status } = topicSuggestModalEls();
  if (quickLabel) {
    quickLabel.hidden = false;
    quickLabel.textContent = ui.topicSuggestQuickLabel || 'Quick themes:';
  }
  if (!chips) return;
  chips.hidden = false;
  chips.replaceChildren();
  APPROVED_TOPIC_TAGS.slice(0, 8).forEach(tag => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'topic-suggest-chip';
    b.dataset.tagId = tag.id;
    b.textContent = tagDisplayLabel(tag);
    b.addEventListener('click', () => {
      topicSuggestLastTag = tag;
      showTopicSuggestThemeModal(tag);
      renderTopicSuggestCandidatesModal(suggestIndicesForTag(tag));
      if (status) {
        status.hidden = true;
        status.textContent = '';
      }
    });
    chips.appendChild(b);
  });
}

function runTopicSuggestLookup() {
  const input = document.getElementById('topic-suggest-input');
  openTopicSuggestModal();
  const { status } = topicSuggestModalEls();
  const ui = getUiText(state.lang);
  const normalized = normalizeTopicInput(input && input.value);
  if (status) {
    status.hidden = false;
    status.textContent = '';
  }
  if (!normalized) {
    if (status) status.textContent = ui.topicSuggestEmpty || 'Pick a quick theme or type a topic and tap Find again.';
    showQuickThemeChipsModal();
    return;
  }
  if (isTopicInputBlocked(normalized)) {
    if (status) status.textContent = ui.topicSuggestBlocked || 'That topic is a bit heavy for this app. Try a lighter theme.';
    resetTopicSuggestModal();
    showQuickThemeChipsModal();
    return;
  }
  const tag = matchApprovedTopicTag(normalized);
  if (!tag) {
    if (status) status.textContent = ui.topicSuggestNoMatch || 'No close match — choose a theme below.';
    topicSuggestLastTag = null;
    const { themeLine, candidates } = topicSuggestModalEls();
    if (themeLine) themeLine.hidden = true;
    if (candidates) candidates.replaceChildren();
    showQuickThemeChipsModal();
    return;
  }
  topicSuggestLastTag = tag;
  showTopicSuggestThemeModal(tag);
  renderTopicSuggestCandidatesModal(suggestIndicesForTag(tag));
  const { chips, quickLabel } = topicSuggestModalEls();
  if (chips) chips.hidden = true;
  if (quickLabel) quickLabel.hidden = true;
  if (status) status.hidden = true;
}

async function confirmTomorrowDilemmaIndex(dilemmaIndex) {
  const ui = getUiText(state.lang);
  const tag = topicSuggestLastTag;
  if (!tag) {
    openFeedbackFlash(ui.topicSuggestPickThemeFirst || 'Choose a theme first.', 'error');
    return;
  }
  if (dilemmaIndex == null || !Number.isInteger(dilemmaIndex)) {
    openFeedbackFlash(ui.topicSuggestPickThemeFirst || 'Choose a dilemma first.', 'error');
    return;
  }
  incrementTopicTagStat(tag.id);
  if (!supabaseEnabled()) {
    openFeedbackFlash(ui.topicSuggestVoteUnavailable || 'Connect the app to the server to vote.', 'error');
    return;
  }
  try {
    await submitTomorrowDilemmaVoteByIndex(dilemmaIndex);
    openFeedbackFlash(ui.topicSuggestSaved || 'Your vote was recorded for tomorrow’s featured dilemma.', 'success');
    closeTopicSuggestModal();
    closeOverflowMenu();
    const inp = document.getElementById('topic-suggest-input');
    if (inp) inp.value = '';
  } catch {
    openFeedbackFlash(ui.topicSuggestVoteFailed || 'Could not save your vote. Try again.', 'error');
  }
}

function submitTopicSuggestVoteFromDetail() {
  if (topicSuggestPendingVoteIndex == null) return;
  confirmTomorrowDilemmaIndex(topicSuggestPendingVoteIndex);
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
  state.topicSuggestPanelOpen = false;
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

async function supabaseRpc(fn, body) {
  const res = await fetch(`${SUPABASE.url}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE.anonKey,
      Authorization: `Bearer ${SUPABASE.anonKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body ?? {}),
  });
  if (!res.ok) throw new Error(`Supabase RPC failed: ${res.status}`);
  return await res.json();
}

async function submitVote(dilemmaId, choice) {
  if (!supabaseEnabled()) return;
  try {
    await fetch(`${SUPABASE.url}/rest/v1/votes`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE.anonKey,
        Authorization: `Bearer ${SUPABASE.anonKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ dilemma_id: dilemmaId, choice }),
    });
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

function parseScheduledDilemmaIdRow(rows) {
  const row = rows && rows[0];
  if (!row || typeof row !== 'object') return null;
  if (Object.prototype.hasOwnProperty.call(row, 'get_scheduled_dilemma_for_day')) {
    return row.get_scheduled_dilemma_for_day;
  }
  const k = Object.keys(row)[0];
  return k !== undefined ? row[k] : null;
}

/** Loads winning dilemma for today's calendar (requires votes with target_date = today). */
async function fetchScheduledDilemmaForToday() {
  state.scheduledDilemmaIndex = null;
  if (!supabaseEnabled()) return;
  try {
    const rows = await supabaseRpc('get_scheduled_dilemma_for_day', { p_show_date: state.todayKey });
    const rawId = parseScheduledDilemmaIdRow(rows);
    if (rawId == null) return;
    const numId = Number(rawId);
    if (!Number.isFinite(numId)) return;
    const idx = getAllDilemmas().findIndex(d => d.id === numId);
    if (idx !== -1) state.scheduledDilemmaIndex = idx;
  } catch {
    state.scheduledDilemmaIndex = null;
  }
}

async function submitTomorrowDilemmaVoteByIndex(dilemmaIndex) {
  if (!supabaseEnabled()) return false;
  const dilemmas = getAllDilemmas();
  const d = dilemmas[dilemmaIndex];
  if (!d) return false;
  const targetDate = getTomorrowDateKey(state.todayKey);
  await supabaseRpc('upsert_tomorrow_dilemma_vote', {
    p_target_date: targetDate,
    p_dilemma_id: d.id,
    p_voter_client_id: getOrCreateVoterClientId(),
  });
  return true;
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

async function submitFeedbackToSupabase(message, locale) {
  if (!supabaseEnabled()) return false;
  const safe = message.trim().slice(0, FEEDBACK_MAX_LEN);
  if (!safe) return false;
  const res = await fetch(`${SUPABASE.url}/rest/v1/feedback`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE.anonKey,
      Authorization: `Bearer ${SUPABASE.anonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      body: safe,
      locale: locale === 'zh-Hant' ? 'zh-Hant' : 'en',
    }),
  });
  if (!res.ok) throw new Error(`Supabase feedback failed: ${res.status}`);
  return true;
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
  } catch {
    openFeedbackFlash(ui.feedbackSendFailed || 'Could not send feedback.', 'error');
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
    if (nameEl) nameEl.textContent = `${ui.weekPrefix}${theme.week}${ui.weekSuffix} · ${theme.name}`;
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

    const sn = document.getElementById('sticky-next');
    if (sn) {
      sn.hidden = false;
      sn.style.display = 'flex';
    }
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
  'Derek Parfit': 'images/philosophers/derek-parfit.jpg',
  'Emily Dickinson': 'images/philosophers/emily-dickinson.png',
  'Friedrich Nietzsche': 'images/philosophers/friedrich-nietzsche.jpg',
  'George Bernard Shaw': 'images/philosophers/george-bernard-shaw.jpg',
  'Henry David Thoreau': 'images/philosophers/henry-david-thoreau.jpg',
  'Heraclitus': 'images/philosophers/heraclitus.jpg',
  'Immanuel Kant': 'images/philosophers/immanuel-kant.jpg',
  'Jean-Paul Sartre': 'images/philosophers/jean-paul-sartre.jpg',
  'Jim Morrison': 'images/philosophers/jim-morrison.jpg',
  'John Steinbeck': 'images/philosophers/john-steinbeck.jpg',
  'Mahatma Gandhi': 'images/philosophers/mahatma-gandhi.jpg',
  'Marcel Proust': 'images/philosophers/marcel-proust.jpg',
  'Oscar Wilde': 'images/philosophers/oscar-wilde.jpg',
  'Peter Salovey': 'images/philosophers/peter-salovey.jpg',
  'Ralph Waldo Emerson': 'images/philosophers/ralph-waldo-emerson.jpg',
  'René Descartes': 'images/philosophers/ren-descartes.jpg',
  'Socrates': 'images/philosophers/socrates.jpg',
  'Thomas Aquinas': 'images/philosophers/thomas-aquinas.jpg',
  'William Shakespeare': 'images/philosophers/william-shakespeare.jpg',
};

function renderPhilosopherQuote() {
  const q1 = getQuotes1()[state.todayIndex];
  const q2 = getQuotes2()[state.todayIndex];

  function applyPortrait(elId, author) {
    const el = document.getElementById(elId);
    if (!el) return;
    const name = typeof author === 'string' ? author : '';
    const url = name ? PHILOSOPHER_PORTRAITS[name] : null;
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

    if (!url) {
      showInitials();
      return;
    }

    const img = document.createElement('img');
    img.alt = name;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.className = 'philosopher-avatar-img';
    img.referrerPolicy = 'no-referrer';
    img.onerror = function () {
      showInitials();
    };
    img.src = url;
    el.appendChild(img);
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
    link.download = 'daily-decision.png';
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
  gf.terms.forEach(term => {
    const q = encodeURIComponent(`${term} ${state.lang === 'zh-Hant' ? '哲學' : 'philosophy'}`);
    const frag = cloneTpl('tpl-go-further-tag');
    const a = frag.querySelector('a');
    if (a) {
      a.href = `https://www.google.com/search?q=${q}`;
      a.textContent = term;
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
    booksList.appendChild(mkListItem('book', href, wrapper));
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
    vidsList.appendChild(mkListItem('video', href, span));
  });
  watch.appendChild(vidsList);
  section.appendChild(watch);

  root.appendChild(section);
}

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

function buildChallengeText() {
  const d = getDilemma();
  if (state.lang === 'zh-Hant') {
    return `今天這題，你會怎麼選？\n\n"${d.text}"\n\nA. ${d.optA}\nB. ${d.optB}\n\n回覆 A 或 B。`;
  }
  return `Today\'s decision — what would you choose?\n\n"${d.text}"\n\nA. ${d.optA}\nB. ${d.optB}\n\nReply with A or B.`;
}

document.getElementById('btn-challenge-trigger').addEventListener('click', openChallenge);
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
function applyUIText() {
  const ui = getUiText(state.lang);
  document.documentElement.lang = ui.htmlLang || (state.lang === 'zh-Hant' ? 'zh-Hant' : 'en');
  document.title = ui.appTitle;
  const logoText = document.querySelector('.logo-text');
  if (logoText) logoText.textContent = ui.logoText;
  const shareTrigger = document.getElementById('label-share-trigger');
  if (shareTrigger) shareTrigger.textContent = ui.share;
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
  const askLabel = document.getElementById('label-ask-friend');
  if (askLabel) askLabel.textContent = ui.askFriend;
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
  if (userFeedbackActionEl) userFeedbackActionEl.textContent = ui.userFeedbackAction || 'User feedback';
  const feedbackBtn = document.getElementById('btn-user-feedback');
  if (feedbackBtn) {
    const fbLabel = ui.userFeedbackAction || 'User feedback';
    feedbackBtn.setAttribute('aria-label', fbLabel);
    feedbackBtn.setAttribute('title', fbLabel);
    feedbackBtn.classList.toggle('is-active', !!state.feedbackPanelOpen);
  }
  const topicSuggestActionEl = document.getElementById('label-topic-suggest-action');
  if (topicSuggestActionEl) topicSuggestActionEl.textContent = ui.topicSuggestAction || 'Suggest a topic';
  const topicSuggestBtn = document.getElementById('btn-topic-suggest');
  if (topicSuggestBtn) {
    const tsLabel = ui.topicSuggestAction || 'Suggest a topic';
    topicSuggestBtn.setAttribute('aria-label', tsLabel);
    topicSuggestBtn.setAttribute('title', tsLabel);
    topicSuggestBtn.classList.toggle('is-active', !!state.topicSuggestPanelOpen);
  }
  const topicSuggestModalTitle = document.getElementById('topic-suggest-modal-title');
  if (topicSuggestModalTitle) topicSuggestModalTitle.textContent = ui.topicSuggestModalTitle || 'Vote for tomorrow’s dilemma';
  const topicSuggestInput = document.getElementById('topic-suggest-input');
  if (topicSuggestInput) topicSuggestInput.setAttribute('placeholder', ui.topicSuggestPlaceholder || '');
  const topicSuggestFindSpan = document.getElementById('label-topic-suggest-find');
  if (topicSuggestFindSpan) topicSuggestFindSpan.textContent = ui.topicSuggestFind || 'Find themes';
  const suggestSticky = document.getElementById('label-suggest-tomorrow-sticky');
  if (suggestSticky) suggestSticky.textContent = ui.suggestTomorrowSticky || 'Suggest tomorrow';
  const closeTopicBtn = document.getElementById('btn-close-topic-suggest-modal');
  if (closeTopicBtn) closeTopicBtn.setAttribute('aria-label', ui.closeTopicModal || 'Close');
  const labelBack = document.getElementById('label-topic-suggest-back');
  if (labelBack) labelBack.textContent = ui.topicSuggestBack || 'Back';
  const labelSubmit = document.getElementById('label-topic-suggest-submit-vote');
  if (labelSubmit) labelSubmit.textContent = ui.topicSuggestSubmitVote || 'Submit vote for tomorrow';
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
  const historyTitle = document.querySelector('.history-title');
  if (historyTitle) historyTitle.textContent = ui.historyTitle;
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  state.lang = lang;
  saveLanguage();
  applyUIText();
  renderDate();
  renderDilemma();
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
const btnTopicSuggest = document.getElementById('btn-topic-suggest');
if (btnTopicSuggest) {
  btnTopicSuggest.addEventListener('click', () => {
    toggleTopicSuggestPanel();
  });
}
const btnTopicSuggestFind = document.getElementById('btn-topic-suggest-find');
if (btnTopicSuggestFind) {
  btnTopicSuggestFind.addEventListener('click', () => runTopicSuggestLookup());
}
const topicSuggestInputEl = document.getElementById('topic-suggest-input');
if (topicSuggestInputEl) {
  topicSuggestInputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runTopicSuggestLookup();
    }
  });
}
const btnSuggestTomorrowSticky = document.getElementById('btn-suggest-tomorrow-sticky');
if (btnSuggestTomorrowSticky) {
  btnSuggestTomorrowSticky.addEventListener('click', () => {
    openTopicSuggestModal({ showQuickThemes: true });
  });
}
const btnCloseTopicModal = document.getElementById('btn-close-topic-suggest-modal');
if (btnCloseTopicModal) {
  btnCloseTopicModal.addEventListener('click', () => closeTopicSuggestModal());
}
const topicSuggestModalOverlay = document.getElementById('topic-suggest-modal');
if (topicSuggestModalOverlay) {
  topicSuggestModalOverlay.addEventListener('click', e => {
    if (e.target === topicSuggestModalOverlay) closeTopicSuggestModal();
  });
}
document.getElementById('btn-topic-suggest-back')?.addEventListener('click', () => {
  hideTopicSuggestDetailModal(true);
});
document.getElementById('btn-topic-suggest-submit-vote')?.addEventListener('click', () => {
  submitTopicSuggestVoteFromDetail();
});
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
    const detail = document.getElementById('topic-suggest-detail-modal');
    if (detail && !detail.hidden) {
      hideTopicSuggestDetailModal(true);
      e.preventDefault();
      return;
    }
    closeTopicSuggestModal();
    closeFeedbackFlash();
    closeOverflowMenu();
    closeLegal();
  }
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
  }
  fetchScheduledDilemmaForToday()
    .then(() => refreshTodayAfterScheduleFetch())
    .catch(() => refreshTodayAfterScheduleFetch());
  hideLoadingScreen();
}
init();

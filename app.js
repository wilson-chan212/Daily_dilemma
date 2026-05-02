/* =============================================
   WEEKLY THEMES  (5 dilemmas per week, 3 weeks)
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

const ZH = window.APP_I18N_ZH_HANT || {};
const SUPPORTED_LANGS = ['en', 'zh-Hant'];

function detectLanguage() {
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  return /^zh\b/i.test(nav) ? 'zh-Hant' : 'en';
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
    logoText: 'Daily Dilemmas',
    languageToggle: '中文',
    greetingLabel: 'Today\'s Dilemma',
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

const state = {
  lang: detectLanguage(),
  todayKey: getLocalDateKey(),
  todayIndex: 0,
  answered: false,
  chosenOpt: null,
  history: [],
  pendingTimeout: null,
};

/* =============================================
   PERSISTENCE (localStorage)
   ============================================= */
const STORAGE_KEYS = {
  history: 'dailyDilemmas.history.v1',
  lang: 'dailyDilemmas.lang.v1',
};

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

// Determine today's dilemma via date-seed
state.todayIndex = parseInt(state.todayKey.replace(/-/g, ''), 10) % getAllDilemmas().length;

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

/* =============================================
   SUPABASE (Postgres) — real vote percentages
   ============================================= */
const SUPABASE = {
  // TODO: set these after you create a Supabase project
  url: 'https://nreiswexmjhpxpmexgzx.supabase.co',
  anonKey: 'sb_publishable_xCzm1Zk3j9LDh0KRyRpNDQ_xpBTUH4p'
};

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

/* =============================================
   RENDER
   ============================================= */
function renderDate() {
  const d = new Date();
  document.getElementById('today-date').textContent =
    d.toLocaleDateString(getActiveLocale(), { weekday: 'long', month: 'long', day: 'numeric' });
}

function renderThemeAndTags(badgeId, tagsId) {
  const d = getDilemma();
  const theme = getThemes()[state.todayIndex];
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

function handleChoice(opt) {
  if (state.answered) return;
  state.answered = true;
  state.chosenOpt = opt;

  const d = getDilemma();
  const now = new Date();
  state.history.push({
    id: d.id,
    choiceKey: opt,
    date: state.todayKey,
    time: now.toLocaleTimeString(getActiveLocale(), { hour: '2-digit', minute: '2-digit' }),
  });
  saveHistory();
  // Send vote to Supabase (non-blocking)
  submitVote(d.id, opt);

  // Highlight chosen, dim other
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(btn => {
    if (btn.dataset.opt === opt) {
      btn.classList.add('is-selected');
      btn.setAttribute('aria-checked', 'true');
    } else {
      btn.classList.add('is-dimmed');
    }
  });

  // After short pause, show chosen state
  state.pendingTimeout = setTimeout(() => {
    const card = document.getElementById('dilemma-card');
    const chosen = document.getElementById('chosen-state');
    card.hidden = true; card.style.display = 'none';
    chosen.hidden = false; chosen.style.display = 'flex';

    // Reflection image — reuse dilemma image
    const reflImg = document.getElementById('reflection-image');
    reflImg.src = d.image;
    reflImg.alt = getUiText(state.lang).dilemmaImageAlt;

    document.getElementById('chosen-label').textContent = opt === 'a' ? d.optA : d.optB;
    document.getElementById('chosen-question').textContent = d.text;

    document.getElementById('chosen-reflection').textContent = d.reflection[opt];
    // Two views — counterarg for the OTHER side
    const ca = getCounterargs()[state.todayIndex];
    const other = opt === 'a' ? 'b' : 'a';
    document.getElementById('counterarg-text').textContent = ca ? ca[other] : '';
    renderPhilosopherQuote();
    renderOthersSplit(opt); // immediate (fallback) render
    // Update split from real votes (if configured)
    renderOthersSplitFromSupabase(d.id);
    renderGoFurther();
    // Show sticky next button
    const sn = document.getElementById('sticky-next');
    sn.hidden = false; sn.style.display = 'flex';
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
  const q = getQuotes1()[state.todayIndex];
  if (!q) return;
  document.getElementById('pq-text').textContent = '\u201c' + q.text + '\u201d';
  document.getElementById('pq-cite').textContent = '\u2014 ' + getDisplayAuthorName(q.author);
  const q2 = getQuotes2()[state.todayIndex];
  if (!q2) return;
  document.getElementById('pq-text-2').textContent = '\u201c' + q2.text + '\u201d';
  document.getElementById('pq-cite-2').textContent = '\u2014 ' + getDisplayAuthorName(q2.author);

  // Philosopher portraits — one per quote.
  // Uses an <img> with onerror so a broken/missing remote portrait falls back
  // to a styled initials avatar. Guarantees the slot is never empty/broken.
  function applyPortrait(elId, author) {
    const el = document.getElementById(elId);
    if (!el) return;
    const url = PHILOSOPHER_PORTRAITS[author];
    // Reset prior state
    el.style.cssText = '';
    el.textContent = '';
    el.classList.remove('philosopher-avatar--initials');

    const initials = (author || '?')
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
    img.alt = author;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.className = 'philosopher-avatar-img';
    img.referrerPolicy = 'no-referrer';
    img.onerror = function () {
      // Remote/broken URL — fall back to initials so the slot is never empty.
      showInitials();
    };
    img.src = url;
    el.appendChild(img);
  }
  applyPortrait('philosopher-avatar-1', q.author);
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
  const yesterday = getLocalDateKey(new Date(Date.now() - 86400000));

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
      const localized = getAllDilemmas().find(d => d.id === item.id);
      const selected = item.choiceKey ? (item.choiceKey === 'a' ? localized?.optA : localized?.optB) : item.choice;
      if (choice) choice.textContent = `${ui.chosePrefix}${selected || ''}`;
      if (time) time.textContent = item.time;
      if (text) text.textContent = localized?.text || item.text || '';
      container.appendChild(frag);
    });
  });
}

document.getElementById('btn-history-toggle').addEventListener('click', openHistory);
document.getElementById('btn-close-history').addEventListener('click', closeHistory);
document.getElementById('history-overlay').addEventListener('click', closeHistory);
document.getElementById('btn-clear-history').addEventListener('click', clearHistory);

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
  const langBtn = document.getElementById('lang-toggle-label');
  if (langBtn) langBtn.textContent = ui.languageToggle;
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
  setLanguage(state.lang === 'en' ? 'zh-Hant' : 'en');
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



/* =============================================
   INIT
   ============================================= */
function init() {
  state.lang = loadLanguage();
  state.history = loadHistory();
  applyUIText();
  renderDate();
  renderDilemma();
  checkDeepLink();
}
init();

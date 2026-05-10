/**
 * Test Your Philosophy Profile — question bank (EN)
 *
 * Standalone data only: no UI / app logic changes.
 * One question per weekly theme (Weeks 1–12).
 */

export const PHILOSOPHY_PROFILE_QUESTIONS_EN = [
  {
    id: 'pp-w1-self-happiness-tradeoff',
    week: 1,
    theme: 'Self & Happiness',
    prompt:
      'You can choose one life path for the next 5 years. Which feels more “right,” even if it costs you something?',
    optA: 'Choose the path that maximizes daily well-being and stability, even if it limits big ambitions.',
    optB: 'Choose the path that maximizes meaning and personal growth, even if it brings more stress and uncertainty.',
    axis: { a: 'Comfort & stability', b: 'Meaning & growth' },
    valueClash:
      'Is a good life primarily about felt well-being, or about becoming/doing something you can justify as meaningful?',
    tags: ['wellbeing', 'meaning', 'prudence', 'ambition'],
  },
  {
    id: 'pp-w2-freedom-mind-self-control',
    week: 2,
    theme: 'Freedom & Mind',
    prompt:
      'A clinic offers a safe, reversible procedure that reliably reduces destructive impulses (addiction, rage, compulsive spending). You qualify. Do you take it?',
    optA: 'Yes—freedom is the ability to live by my values, not by my impulses.',
    optB: 'No—changing my mind to fit a “better” version risks turning me into someone else.',
    axis: { a: 'Self-mastery', b: 'Authenticity' },
    valueClash: 'Is autonomy more about control over behavior, or fidelity to an unedited self?',
    tags: ['autonomy', 'identity', 'self-control', 'authenticity'],
  },
  {
    id: 'pp-w3-justice-reality-truth-cost',
    week: 3,
    theme: 'Justice & Reality',
    prompt:
      'You have proof that a widely believed “feel-good” story about a public figure is false. Revealing the truth will harm trust and morale but improve accuracy. What do you do?',
    optA: 'Reveal it—society should be built on reality, even when reality disappoints.',
    optB: 'Hold it back—some shared stories are socially valuable even if imperfectly true.',
    axis: { a: 'Truth & accountability', b: 'Social cohesion' },
    valueClash: 'Do you prioritize accuracy and transparency, or the stabilizing role of beneficial narratives?',
    tags: ['truth', 'public trust', 'social stability', 'accountability'],
  },
  {
    id: 'pp-w4-honesty-character-loyalty',
    week: 4,
    theme: 'Honesty & Character',
    prompt:
      'A close friend asks you to vouch for them in a high-stakes situation. You know they will probably fail—and it could harm others. What do you do?',
    optA: 'Be honest about the risk, even if it damages the friendship.',
    optB: 'Support them fully—loyalty means standing with someone when it matters most.',
    axis: { a: 'Integrity', b: 'Loyalty' },
    valueClash: 'Is character proven by truthfulness under pressure, or by unwavering commitment to a person?',
    tags: ['honesty', 'friendship', 'duty', 'risk'],
  },
  {
    id: 'pp-w5-self-mastery-virtue-rule-bending',
    week: 5,
    theme: 'Self-Mastery & Virtue',
    prompt:
      'You can quietly bend a rule to help your team succeed. No one will be harmed, and everyone does it. What do you do?',
    optA: 'Follow the rule—virtue is consistency, not outcomes.',
    optB: 'Bend it—virtue includes practical wisdom about when rules miss the point.',
    axis: { a: 'Principled restraint', b: 'Pragmatic judgment' },
    valueClash: 'Is moral strength mostly self-discipline, or situational wisdom that can override rigid norms?',
    tags: ['virtue', 'rules', 'integrity', 'practical wisdom'],
  },
  {
    id: 'pp-w6-wisdom-courage-speaking-up',
    week: 6,
    theme: 'Wisdom & Courage',
    prompt:
      'In a group you depend on, a popular belief is clearly wrong and will lead to a bad decision. Speaking up risks ridicule and exclusion. What do you do?',
    optA: 'Speak up—courage means protecting what’s true and right despite social cost.',
    optB: 'Stay quiet—wisdom means choosing battles and preserving influence for later.',
    axis: { a: 'Moral courage', b: 'Strategic patience' },
    valueClash: 'Do you value immediate principled action, or long-term effectiveness and relationship-preserving prudence?',
    tags: ['courage', 'prudence', 'truth', 'social pressure'],
  },
  {
    id: 'pp-w7-future-ethics-generation-burden',
    week: 7,
    theme: 'Future Ethics',
    prompt:
      'A policy would significantly improve lives for people 100 years from now, but requires real sacrifices from people alive today who are already struggling. Do you support it?',
    optA: 'Yes—future people matter; we should not treat time as a moral discount.',
    optB: 'No—ethics starts with present suffering; you can’t demand heroism from the vulnerable.',
    axis: { a: 'Long-term obligation', b: 'Immediate compassion' },
    valueClash: 'Do you prioritize impartial duty across time, or a care-first focus on those currently burdened?',
    tags: ['future generations', 'fairness', 'sacrifice', 'care ethics'],
  },
  {
    id: 'pp-w8-liberty-public-life-speech',
    week: 8,
    theme: 'Liberty & Public Life',
    prompt:
      'A city considers banning a kind of “legal but corrosive” public behavior (e.g., aggressive misinformation campaigns) to protect democracy. Where do you land?',
    optA: 'Allow it—liberty includes tolerating harmful expression unless it’s direct violence.',
    optB: 'Restrict it—public life needs guardrails; freedom without trust destroys itself.',
    axis: { a: 'Liberty', b: 'Civic protection' },
    valueClash: 'Is the default to maximize individual freedom, or to preserve the conditions that make freedom meaningful?',
    tags: ['free speech', 'democracy', 'harm', 'public norms'],
  },
  {
    id: 'pp-w9-justice-care-equal-treatment',
    week: 9,
    theme: 'Justice & Care',
    prompt:
      'Two people break the same rule. One had far fewer resources and faced harsher circumstances. Should the response differ?',
    optA: 'No—justice means equal treatment; exceptions become bias and favoritism.',
    optB: 'Yes—justice must consider context; equal treatment can be unequal in effect.',
    axis: { a: 'Equality before rules', b: 'Equity through context' },
    valueClash: 'Do you ground fairness in consistency, or in compassionate attention to lived conditions?',
    tags: ['justice', 'care', 'equality', 'equity'],
  },
  {
    id: 'pp-w10-technology-meaning-human-worth',
    week: 10,
    theme: 'Technology & Meaning',
    prompt:
      'An AI system can do most jobs better than humans. Society can guarantee comfort without work. What should we treat as “success”?',
    optA: 'Success is maximizing well-being; we should redesign life around flourishing without traditional work.',
    optB: 'Success requires human contribution; a life without needed effort risks emptiness and lost dignity.',
    axis: { a: 'Well-being-first', b: 'Purpose-through-contribution' },
    valueClash: 'Do you measure progress by comfort and outcomes, or by the role of striving and contribution in meaning?',
    tags: ['ai', 'work', 'meaning', 'dignity'],
  },
  {
    id: 'pp-w11-truth-plain-speech-social-ease',
    week: 11,
    theme: 'Truth & Trust',
    prompt:
      'You notice a colleague’s mistake will embarrass them in an upcoming meeting. You could correct them privately now, or stay quiet and let the moment pass unless asked.',
    optA: 'Speak plainly now—respect includes helping someone avoid a public wound.',
    optB: 'Stay quiet unless it harms others—trust includes not forcing truth into every interaction.',
    axis: { a: 'Plain speech', b: 'Social ease' },
    valueClash:
      'When does honesty serve trust, and when does sparing someone public embarrassment serve it?',
    tags: ['truth', 'trust', 'relationships', 'communication'],
  },
  {
    id: 'pp-w12-freedom-consent-paternalism',
    week: 12,
    theme: 'Choice & Protection',
    prompt:
      'A popular product is addictive for some users. Regulators could require blunt safeguards (limits, warnings, friction) that affect everyone. What do you favor?',
    optA: 'Default to informed consent—people choose risk with clear information; heavy-handed limits infantilize adults.',
    optB: 'Protect people first—design and defaults should reduce predictable harm even when “choice” technically exists.',
    axis: { a: 'Informed consent', b: 'Protective safeguards' },
    valueClash:
      'Should structural protections outweigh broad adult autonomy when harms are predictable but unevenly distributed?',
    tags: ['consent', 'regulation', 'autonomy', 'harm reduction'],
  },
];


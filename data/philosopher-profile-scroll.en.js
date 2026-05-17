/* eslint-disable no-undef */
/**
 * Long-form philosopher profiles for scroll UI (English).
 * Keys align with `supabase/functions/ai-chat/philosopher-profiles.json`.
 *
 * Each `keyConcepts` entry is { term, explanation } for expandable glossary UX.
 */
(function () {
  'use strict';

  window.PHILOSOPHER_PROFILE_SCROLL_EN = {
    plato: {
      name: 'Plato',
      briefIntroduction:
        'Plato (c. 428/427–348/347 BCE) is a central architect of the Western philosophical tradition. Almost his entire surviving work takes the form of dialogues—often starring his teacher Socrates—that weave argument together with myth, rhetoric, and dramatic conflict. He treats ethics, politics, metaphysics, epistemology, psychology, and education as parts of one inquiry into how human beings and cities should order themselves toward what is truly good rather than merely what looks pleasant or popular.\n\n' +
        'Readers should expect interpretive debate: Plato does not always speak in his own voice, characters disagree, and some proposals (especially in the Republic) function partly as thought experiments. Modern scholarship disagrees about how literally to read “ideal cities,” gender proposals, art bans, and metaphysical claims about abstract objects. For beginners, the lasting lesson is less a fixed doctrine than a habit: distinguish appearance from stability of truth, ask how education shapes desire, and test whether private and civic life display harmony or inner faction.',

      earlyLife:
        'Plato was born in Athens into an aristocratic milieu during the crisis-ridden decades of the Peloponnesian War. Ancient traditions link his family to Solon and to prominent political houses; such backgrounds matter because Plato’s dialogues return repeatedly to tensions between democracy, oligarchy, virtue, and sophistry in civic life.\n\n' +
        'Biographical certainty is limited, but a narrative widely repeated since antiquity is decisive: Plato planned or hoped for public life until the trial and execution of Socrates (399 BCE), which he portrays as a collision between philosophical integrity and democratic judgment. That trauma frames his suspicion of rule by uninformed passion and his insistence on moral and intellectual formation.\n\n' +
        'Later traditions describe travels—often including southern Italy/Sicily (Pythagorean-influenced circles) and sometimes Egypt—before founding the Academy in Athens around 387 BCE. Whether every detail is historical, the stories signal Plato’s synthesis of mathematics, rigorous argument, and political reflection. The Academy became an enduring center for advanced study; Aristotle studied there.',

      keyAchievements:
        'Founded the Academy (often described as the first European institution resembling a research university), institutionalizing philosophy alongside mathematics and science-like inquiry.\n\n' +
        'Developed philosophical dialogue as a literary form that dramatizes objections, seductive errors, and partial truths—exerting influence from Neoplatonism through Renaissance humanism to modern pedagogy.\n\n' +
        'Integrated ethics and politics with epistemology and metaphysics: questions about justice and education connect to questions about what can be known and what merely appears.\n\n' +
        'Introduced enduring conceptual tools—the cave image, tripartite soul, divided line, and systematic reflection on “Forms”—that shaped theology, idealism, and modern debates about realism, universals, and curriculum.',

      mainIdeas:
        'Justice as harmony: In the Republic especially, justice is not only obedience to law but an ordering condition—psychic parts and civic classes each doing their proper work without usurpation. Critics debate political implications, but the core intuition is ethical: injustice often mirrors inner disorder as much as outer oppression.\n\n' +
        'Education shapes character: Learning is formation of love and attention, not only information. Mis-education can chain people to shadows; proper education turns the soul toward intelligible structure and measured desire.\n\n' +
        'Appearance vs reality: Many dialogues contrast unstable opinion about sensible things with stronger kinds of understanding directed at reasons and definitions. Whether this requires a separate metaphysical realm is a scholarly dispute; pedagogically, Plato pushes readers toward articulate standards.\n\n' +
        'Philosopher-guardians as model rulers: The Republic’s ruling class is famous and controversial—often taught as a challenge to short-term populism and rhetoric-heavy politics, and equally criticized for possible authoritarian overtones if translated literally into modern states.\n\n' +
        'Late cosmology and law: Dialogues like Timaeus and Laws extend concerns about order, measure, and divine craftsmanship into cosmology and detailed legislation—showing Plato’s ambitions beyond “pure theory.”',

      keyConcepts: [
        {
          term: 'Forms (Ideas)',
          explanation:
            'Plato famously posits intelligible “Forms” (eidē)—stable accounts of what justice, beauty, equality, and other kinds are. In many dialogues, sensible things “participate” in or resemble these accounts; disagreement among scholars ranges from robust metaphysical realism to more deflationary readings. For ethics, Forms supply an objectivity anchor: moral discourse aims at genuine kinds, not only shifting feelings.',
        },
        {
          term: 'Dialectic',
          explanation:
            'Dialectic is disciplined inquiry through question-and-answer that tests definitions, exposes inconsistencies, and advances from premises to principles. It differs from rhetorical persuasion: the goal is understanding and ordering reasons, not merely winning assent. In the Republic’s curriculum image, dialectic sits highest because it addresses hypotheses and reaches unhypothetical starting points (how exactly that works remains contested).',
        },
        {
          term: 'Tripartite soul',
          explanation:
            'Plato famously divides the soul into rational, spirited, and appetitive parts (Republic IV). Inner conflict maps onto civic conflict: faction within oneself parallels faction in the city. Education trains harmony among parts—reason educated by dialectic, spirit aligned with justice rather than honor-seeking rage, appetite disciplined rather than tyrannical. Modern psychology analogies are tempting but inexact; treat this as a moral psychology framework.',
        },
        {
          term: 'Allegory of the Cave',
          explanation:
            'Prisoners chained facing shadows mistake images for reality; liberation turns the soul toward light—painful at first—until intelligible truth becomes intelligible. Political readings emphasize ideology and propaganda; epistemological readings emphasize levels of understanding; existential readings emphasize moral courage to leave comfortable illusion.',
        },
        {
          term: 'Divided Line',
          explanation:
            'Republic VI–VII maps cognitive states (eikasia, pistis, dianoia, noesis) and their objects along a line segment. It distinguishes imaging from belief about sensible things, and mathematical-thoughtful reasoning from full philosophical insight into first principles. Teachers use it to explain why opinion is not yet knowledge.',
        },
        {
          term: 'Anamnesis (Recollection)',
          explanation:
            'In Meno and Phaedrus among others, inquiry is portrayed as drawing truth out of the learner—sometimes framed mythically as “recollecting” what soul once saw. Even if one rejects literal pre-existence, the pedagogical point endures: understanding can look like remembering because latent structure becomes explicit through questioning.',
        },
        {
          term: 'The Good (Beyond Being)',
          explanation:
            'Republic VI famously treats the Good as the highest object of intellectual aspiration—sometimes glossed as “beyond being in power and dignity.” Interpretations differ (some stress axiological primacy, others theological echoes). Practically, it names orientation: ethics aims not only at true propositions but at fitting attraction toward genuine goods.',
        },
        {
          term: 'Kallipolis & philosopher-rulers',
          explanation:
            'Kallipolis is the “beautiful city” sketched in the Republic—classes, education, communisms of property/family among guardians, and joint rule by philosopher-kings/queens. It is a structured thought experiment about wisdom-led order; readers debate utopian danger versus diagnostic insight into virtue politics.',
        },
      ],

      suggestedBooks: [
        { title: 'Republic', author: 'Plato', note: 'Justice, cave, city-soul analogy; start with Books I–IV and VII–IX if time is short.' },
        { title: 'Symposium', author: 'Plato', note: 'Love ascending from beauty of bodies to Beauty itself—literary and philosophical peak.' },
        { title: 'Phaedo', author: 'Plato', note: 'Soul, death, arguments for immortality—gateway to Platonic metaphysics of soul.' },
        { title: 'Meno', author: 'Plato', note: 'Virtue teachable? Meno’s paradox; geometry slave scene and recollection.' },
        { title: 'Phaedrus', author: 'Plato', note: 'Rhetoric vs philosophy; chariot myth of soul; writing critique.' },
        { title: 'Gorgias', author: 'Plato', note: 'Power of rhetoric vs justice; callicles confrontation.' },
        { title: 'Timaeus', author: 'Plato', note: 'Cosmology and divine craftsmanship—Demiurge narrative.' },
        { title: 'Laws', author: 'Plato', note: 'Late political philosophy; detailed legislation vs Republic idealism.' },
        { title: 'Plato: Complete Works', author: 'Ed. Cooper / Hutchinson', note: 'Hackett one-volume shelf anchor.' },
      ],

      suggestedVideos: [
        { label: 'Open Yale / Stanford-style lecture courses on Plato’s Republic', hint: 'Good orientation; pair with primary text.', url: 'https://www.youtube.com/playlist?list=PL868E87E8CF959153' },
        { label: 'Crash Course Philosophy – Plato & Aristotle block', hint: 'Short intro before the Republic.', url: 'https://www.youtube.com/watch?v=Ra7VQGVwh5E' },
        { label: 'Gregory Vlastos / Julia Annas discussions (interviews & lectures)', hint: 'Scholar talks on Plato and justice.', url: 'https://www.youtube.com/results?search_query=Gregory+Vlastos+Julia+Annas+Plato+justice+lecture' },
        { label: 'BBC In Our Time – Plato’s Republic (radio)', hint: 'Narrative overview episode.', url: 'https://www.youtube.com/results?search_query=BBC+In+Our+Time+Plato+Republic' },
      ],
    },

    socrates: {
      name: 'Socrates',
      briefIntroduction:
        'Socrates (c. 470–399 BCE) wrote nothing; we know him chiefly through Plato, Xenophon, and comic caricature (Aristophanes’ Clouds). He embodies philosophy as persistent questioning in public view—testing politicians, poets, and craftsmen on what they think they know. He is associated with the examined life, ironic humility, and the insistence that ethical seriousness belongs in the marketplace and courtroom as much as in the academy.\n\n' +
        'Historical reconstruction is contested: “Socratic problem” names uncertainty about the real man versus Plato’s literary hero. Still, the figure crystallizes ideal traits—intellectual courage, refusal of easy prestige, and willingness to die rather than abandon philosophical integrity (as Plato tells it).',

      earlyLife:
        'Athenian by birth, son of a stoneworker and a midwife according to Plato—imagery Socrates uses for his philosophical method. He served as a hoplite in notable campaigns; biographical sources emphasize his endurance and indifference to cold, hunger, and fear—traits Plato connects to inner discipline.\n\n' +
        'He did not run a fee-charging school like the sophists; poverty and provocation were part of his reputation. In 399 BCE he was tried on religious and corruption charges, convicted, and executed by hemlock—events Plato’s Apology and Phaedo immortalize.',

      keyAchievements:
        'Crystallized philosophy as elenctic inquiry: cross-examination that refutes pretended knowledge and clarifies concepts.\n\n' +
        'Made ethics conversational and civic: moral paradoxes emerge in everyday dialogue, not only treatises.\n\n' +
        'Provided Western culture with a paradigm of conscience versus crowd judgment (especially via Plato’s Apology).\n\n' +
        'Set agenda for Plato’s entire corpus—virtually every major Platonic theme ramifies from Socratic prompts.',

      mainIdeas:
        'The examined life: Reflection is not optional decoration but the core of human seriousness (Apology).\n\n' +
        'Virtue and knowledge: Socrates often links excellence with understanding badness as ignorance—later criticized yet perennially debated.\n\n' +
        'Irony and humility: Professing ignorance while exposing others’ contradictions functions as moral therapy as much as logic.\n\n' +
        'Law and conscience: Crito explores obedience to law; Apology highlights obedience to divine philosophical mission—readers balance tensions rather than flatten them.',

      keyConcepts: [
        {
          term: 'Elenchus',
          explanation:
            'Refutative questioning: interlocutor proposes definition or thesis; Socrates derives contradictions from commitments. It targets unexamined beliefs and motivates clearer accounts of virtue terms.',
        },
        {
          term: 'Socratic irony',
          explanation:
            'Feigned ignorance and praise that prompts deeper confession of confusion. Not mere sarcasm: rhetorical stance that lowers defenses so inquiry can proceed honestly.',
        },
        {
          term: '“I know that I know nothing”',
          explanation:
            'Popular paraphrase of Apology’s humility motif: wisdom begins with acknowledging limits—especially compared to divine wisdom. Easy to quote, harder to live; distinguishes conceited opinion from investigative seriousness.',
        },
        {
          term: 'Care of the soul',
          explanation:
            'Apology prioritizes psychological and moral integrity over money and reputation. “Soul” here includes character and truth-directed attention—the seat of ethical health.',
        },
        {
          term: 'Daemonic sign',
          explanation:
            'Plato’s Apology mentions a personal divine signal that warns Socrates away from wrong actions—never commands positively. Interpretations range from religious experience to metaphor for conscience.',
        },
        {
          term: 'Sophrosyne (moderation / sound-mindedness)',
          explanation:
            'Self-command and measured judgment—contrasted with appetitive chaos or democratic rashness in Athenian worries.',
        },
      ],

      suggestedBooks: [
        { title: 'Apology', author: 'Plato', note: 'Trial defense—Socrates’ portrait in his own voice (dramatically).' },
        { title: 'Crito', author: 'Plato', note: 'Why stay imprisoned? Law and obligation.' },
        { title: 'Euthyphro', author: 'Plato', note: 'Holiness/piety definition—classic definitional investigation.' },
        { title: 'Meno', author: 'Plato', note: 'Is virtue teachable? Socratic inquiry into excellence.' },
        { title: 'Gorgias', author: 'Plato', note: 'Justice vs rhetoric—power of persuasion examined.' },
        { title: 'Memorabilia', author: 'Xenophon', note: 'Alternative Socratic vignettes—compare portraits.' },
      ],

      suggestedVideos: [
        { label: 'Michael Sugrue-style lectures on Apology / Socrates', hint: 'Trial and examined life.', url: 'https://www.youtube.com/results?search_query=Michael+Sugrue+Plato+Apology+Socrates+lecture' },
        { label: 'Yale Introduction to Political Philosophy – Socrates segments', hint: 'Classical Athens in the opening lectures.', url: 'https://www.youtube.com/playlist?list=PL868E87E8CF959153' },
        { label: 'Crash Course – Socrates', hint: 'Short orientation before primary texts.', url: 'https://www.youtube.com/watch?v=GvHDBqTBBDQ' },
      ],
    },

    aristotle: {
      name: 'Aristotle',
      briefIntroduction:
        'Aristotle (384–322 BCE) studied at Plato’s Academy, tutored Alexander of Macedon, and founded the Lyceum in Athens. His work spans logic, biology, metaphysics, ethics, politics, rhetoric, and poetics—often beginning from empirical observation and ordinary language but aiming at systematic explanations.\n\n' +
        'Ethically, he views humans as creatures whose good life involves cultivated excellence of character guided by practical wisdom rather than rule-following alone. Politically, humans are “political animals” whose flourishing normally engages shared deliberation and institutions.',

      earlyLife:
        'Born at Stagira; father Nicomachus was physician to Macedonian royalty—possibly influencing Aristotle’s biological interests. Orphaned young; guardian raised him. At ~17 joined Plato’s Academy until Plato’s death (348/347). Later lived at Assos and Lesbos (biological research).\n\n' +
        'Returned to Macedon to tutor young Alexander (343–335). After Alexander’s Athens campaign, founded Lyceum (335). Following anti-Macedonian backlash after Alexander’s death, Aristotle left Athens “lest the Athenians sin twice against philosophy,” dying next year at Chalcis.',

      keyAchievements:
        'Codified syllogistic logic and categories—foundational through medieval philosophy.\n\n' +
        'Massive empirical biology—classification, anatomy (with era limits), explanations by form and function.\n\n' +
        'Nicomachean Ethics and Politics remain central curricula for virtue ethics and comparative politics.\n\n' +
        'Metaphysics of substance, actuality/potentiality, four causes—anchor later theology and science metaphysics.',

      mainIdeas:
        'Eudaimonia as highest aim—often translated flourishing: activity of soul expressing virtue across a complete life.\n\n' +
        'Virtue ethical habituation: moral excellence is neither innate nor purely rationalistic; practice shapes stable character.\n\n' +
        'Doctrine of the mean: virtues locate between defect and excess relative to situation—not arithmetic midpoint.\n\n' +
        'Phronesis navigates particulars where universal rules underdetermine choice.\n\n' +
        'Politics studies constitutions that enable citizens’ capacities—mixed regimes sometimes praised pragmatically.',

      keyConcepts: [
        {
          term: 'Eudaimonia',
          explanation:
            'Often translated flourishing—teleological fulfillment of human nature through excellent rational activity and interpersonal goods. Not mere pleasure though pleasure may accompany it.',
        },
        {
          term: 'Hexis (stable disposition)',
          explanation:
            'Virtue is not one-off action but lasting condition formed by repeated choice—character states trained like skills.',
        },
        {
          term: 'Golden mean',
          explanation:
            'Excellences lie between opposed vices (e.g., courage between rashness and cowardice). Relativity to person and situation matters—mean is “relative to us.”',
        },
        {
          term: 'Phronesis (practical wisdom)',
          explanation:
            'Excellence of deliberation toward human good in concrete contexts—integrates perception, emotion education, and ends.',
        },
        {
          term: 'Six regimes (Politics III)',
          explanation:
            'Three “correct” forms—kingship, aristocracy, polity—and three deviations—tyranny, oligarchy, democracy—classified by ruling aim (common good vs factional advantage).',
        },
        {
          term: 'Four causes',
          explanation:
            'Material, formal, efficient, final causes explain beings—famous example: statue’s marble, shape, sculptor, artistic purpose. Useful scaffold even where modern science revises metaphysics.',
        },
      ],

      suggestedBooks: [
        { title: 'Nicomachean Ethics', author: 'Aristotle', note: 'Irwin or Sachs translations accessible.' },
        { title: 'Politics', author: 'Aristotle', note: 'Books I–III core for nature of city & citizenship.' },
        { title: 'Metaphysics', author: 'Aristotle', note: 'Selections—substance and potentiality chapters.' },
        { title: 'On the Soul', author: 'Aristotle', note: 'Philosophy of mind precursors—read with commentary.' },
        { title: 'Aristotle: A Very Short Introduction', author: 'Jonathan Barnes', note: 'Orientation.' },
      ],

      suggestedVideos: [
        { label: 'Wi-Phi / Wireless Philosophy – Aristotle ethics', hint: 'Short animated primers.', url: 'https://www.youtube.com/watch?v=PrvtOWEXDIQ' },
        { label: 'Harvard / Duke lecture recordings on Nicomachean Ethics', hint: 'Virtue and the good life.', url: 'https://www.youtube.com/watch?v=MoCuVa7zU-I' },
        { label: 'History of Philosophy Without Any Gaps – Aristotle arc', hint: 'Podcast narrative continuity.', url: 'https://www.youtube.com/results?search_query=History+of+Philosophy+Without+Any+Gaps+Aristotle' },
      ],
    },

    confucius: {
      name: 'Confucius',
      briefIntroduction:
        'Confucius (Kong Fuzi, traditionally 551–479 BCE) stands at the origin of the Ru (Confucian) lineage in classical China. The Analects—a mosaic of sayings and episodes compiled by disciples—portrays him as teacher and ritual scholar obsessed with moral leadership and self-correction.\n\n' +
        'Core aspirations include ren (humaneness), li (ritual propriety), filial responsibility, trustworthy speech, and governance by moral example rather than naked coercion. Later imperial orthodoxy, neo-Confucian metaphysics, and modern revivals reinterpret him sharply; introductory profiles bracket those developments.',

      earlyLife:
        'Traditions describe modest origins in Lu (modern Shandong area). Confucius mastered Zhou ritual culture and served minor offices—sometimes portrayed as frustrated reformer when rulers preferred expedience over virtue.\n\n' +
        'He traveled seeking rulers receptive to humane governance; accounts vary in chronology and reliability. Returned to Lu to teach disciples who transmitted texts and ideals that shaped East Asian education ideals for millennia.',

      keyAchievements:
        'Paradigm of teacher–disciple communities emphasizing lifelong moral learning.\n\n' +
        'Articulated relational ethics—roles, respect, reciprocity—that grounded later theories of family and state harmony.\n\n' +
        'Canonical vocabulary (ren, li, junzi, xiao, zhengming) became backbone of classical curriculum.\n\n' +
        'Model for meritocratic bureaucracy ideals—later institutionalized far beyond Confucius’ own lifetime.',

      mainIdeas:
        'Ren as orienting virtue—humane care disciplined by ritual forms.\n\n' +
        'Li trains emotion and attention so ethical responses become reliable.\n\n' +
        'Junzi cultivation precedes demanding reform from others—authority springs from character.\n\n' +
        'Rectification of names: social coordination requires truthful role-performance matching titles.\n\n' +
        'Harmony prioritized—often glossed as differentiated cooperation rather than blunt uniformity.',

      keyConcepts: [
        {
          term: 'Ren (humaneness benevolence)',
          explanation:
            'Central ethical excellence—kind regard disciplined by judgment; Confucius rarely gives single definitions, modeling contextual enactment instead.',
        },
        {
          term: 'Li (ritual propriety)',
          explanation:
            'Ceremonial and everyday norms expressing respect; not mere etiquette when animated by ren—forms embed moral education.',
        },
        {
          term: 'Junzi / Xiaoren',
          explanation:
            'Junzi (exemplary person) pursues moral nobility; xiaoren petty person trades integrity for gain—ethical typology influencing appraisal language.',
        },
        {
          term: 'Xiao (filial piety)',
          explanation:
            'Structured care for parents and elders—often analogized outward to loyalty and civic reciprocity in classical extensions.',
        },
        {
          term: 'Zhengming (rectification of names)',
          explanation:
            'Calling roles and relationships honestly so conduct aligns with responsibilities—early philosophy of language meets politics.',
        },
        {
          term: 'Shu (reciprocity / akin-to golden rule)',
          explanation:
            'Do not impose on others what you would not choose yourself—negative formulation surfaces in Analects 15.24.',
        },
      ],

      suggestedBooks: [
        { title: 'Analects', author: 'Confucius', note: 'Compare translations (Slingerland, Lau).' },
        { title: 'Mencius', author: 'Mencius', note: 'Human nature and moral sprouts—develops Confucian moral psychology.' },
        { title: 'Xunzi', author: 'Xunzi', note: 'Ritual as moral craft—contrasts Mencian optimism sometimes.' },
        { title: 'Confucian Role Ethics', author: 'Roger T. Ames', note: 'Contemporary relational framing.' },
      ],

      suggestedVideos: [
        { label: 'Harvard / Berkeley Chinese philosophy lecture series', hint: 'Analects in university context.', url: 'https://www.youtube.com/results?search_query=Confucius+Analects+lecture+Harvard+Berkeley' },
        { label: 'TED-Ed / shorts on Confucius', hint: 'Verify nuance in comments—pair with translation.', url: 'https://www.youtube.com/watch?v=tuhGrGias3o' },
        { label: 'Philosophize This! – Eastern philosophy episodes', hint: 'Podcast narrative overview.', url: 'https://www.youtube.com/results?search_query=Philosophize+This+Eastern+philosophy+Confucius' },
      ],
    },

    kant: {
      name: 'Immanuel Kant',
      briefIntroduction:
        'Immanuel Kant (1724–1804) reorganized modern philosophy with “critical” investigations into what reason can justify a priori. His ethics centers duty, autonomy, and equal respect for rational persons as ends in themselves—often opposed to consequentialist shortcuts.\n\n' +
        'Politically he champions republican institutions, rule of law, and cosmopolitan hopes while distinguishing public right from private virtue. Aesthetics and teleological judgment form a third Critique bridging nature and freedom.\n\n' +
        'Interpretive debates persist (two-world vs two-aspect readings of idealism; precise relation among categorical imperative formulations)—introductions foreground moral dignity and universalizability tests.',

      earlyLife:
        'Born in Königsberg, East Prussia (now Kaliningrad). Pietist schooling stressed discipline—later mirrored in Kant’s rigorous habits. University of Königsberg career; private lecturer years before professorship (1770).\n\n' +
        'Rarely traveled; legendary clockwork walks. Late intellectual blossoming: first Critique 1781; ethics and religion essays through 1790s; unfinished Opus Postumum fragments. Died 1804 after cognitive decline.',

      keyAchievements:
        'Critique of Pure Reason reframes metaphysics’ scope—conditions of experience and limits of speculative claims.\n\n' +
        'Moral philosophy articulates autonomy of will and categorical imperative framework central to deontology.\n\n' +
        'Political essays outline republican peace and cosmopolitan right threads influencing modern liberal international thought.\n\n' +
        'Third Critique influences aesthetics and biology-as-if-teleological reasoning.',

      mainIdeas:
        'Good will alone possesses unconditional moral worth when acting from duty—not merely conforming outwardly.\n\n' +
        'Categorical imperative tests maxims: could you will them universal laws? treat humanity always as end never mere means? legislate for kingdom of ends?\n\n' +
        'Autonomy: moral law arises from rational nature’s self-legislation.\n\n' +
        'Public use of reason vs private office reasoning—Enlightenment essay famous for intellectual freedom defense.\n\n' +
        'Rights grounded on innate freedom under universal law (Doctrine of Right).',

      keyConcepts: [
        {
          term: 'Categorical vs hypothetical imperatives',
          explanation:
            'Hypothetical imperatives prescribe means to contingent ends (“if you want X, do Y”). Categorical imperatives bind unconditionally—moral oughts holding for rational agents as such.',
        },
        {
          term: 'Universal law formulation',
          explanation:
            'Act only on maxims you can at the same time will as universal law—tests consistency of intention when generalized (interpretations differ on role-consequences vs contradiction-in-conception).',
        },
        {
          term: 'Humanity formulation',
          explanation:
            'Treat humanity—your own and others’—always as an end, never merely as means: cornerstone of Kantian respect and many human-rights readings.',
        },
        {
          term: 'Kingdom of ends',
          explanation:
            'Ideal union of rational beings jointly legislating compatible maxims—imaginative check on fairness and reciprocity beyond solitary willing.',
        },
        {
          term: 'Autonomy of the will',
          explanation:
            'Moral law not imposed externally like physical law on passive matter; rational agents recognize norms they legislate for themselves when perfectly rational.',
        },
        {
          term: 'Noumenon / phenomenon',
          explanation:
            'Technical vocabulary distinguishing things-as-known-through-sensible-forms from things-in-themselves—intro courses caution against oversimplifying into dogmatic claims about unknowability.',
        },
      ],

      suggestedBooks: [
        { title: 'Groundwork of the Metaphysics of Morals', author: 'Kant', note: 'Entry ethics—short but dense.' },
        { title: 'Critique of Practical Reason', author: 'Kant', note: 'Freedom, fact of reason, incentives.' },
        { title: 'Metaphysics of Morals', author: 'Kant', note: 'Doctrine of Right / Virtue split.' },
        { title: 'Critique of Pure Reason', author: 'Kant', note: 'Aesthetic & Analytic openings—guided excerpts.' },
        { title: 'Creating the Kingdom of Ends', author: 'Christine Korsgaard', note: 'Essays bridging analytic Kant reception.' },
      ],

      suggestedVideos: [
        { label: 'Michael Sandel Justice – Kant chapters', hint: 'Harvard lectures widely mirrored online.', url: 'https://www.youtube.com/watch?v=kBdfcR-8hEY' },
        { label: 'Wireless Philosophy – Kant / categorical imperative', hint: 'Short animated intros.', url: 'https://www.youtube.com/watch?v=8bIys6TJDEg' },
        { label: 'Yale political philosophy – Kant modules', hint: 'Duty, freedom, and the good will.', url: 'https://www.youtube.com/watch?v=x2n1JxKU0Tg' },
      ],
    },

    laozi: {
      name: 'Laozi',
      briefIntroduction:
        'Laozi (traditionally 6th century BCE) is the named figure behind the Daodejing—a sparse, paradoxical guide to living with less forcing. Dao is not a thing to own but the way things arise and return; wu-wei is skilled non-coercion, like water finding low places without a battle plan.\n\n' +
        'Readings vary (legend vs history); for daily life the text works as psychology of grasping: when striving tightens knots, softness and simplicity may untie them.\n\n' +
        'Modern use: stress, control, comparison—ask what you are pushing that the situation does not need.',

      earlyLife:
        'Legends place Laozi as an archivist in Zhou courts, then departing west—guarded by Yin Xi who asked for teachings. Historical Laozi is debated; the text likely grew over centuries.\n\n' +
        'Cultural role: counter-voice to rigid ritualism—not anti-ethics, but suspicious of performative striving.',

      keyAchievements:
        'Daodejing shapes East Asian thought, religion, and art—Daoism as philosophy and practice.\n\n' +
        'Influences governance ideals (rule lightly), ecology metaphors (naturalness), and martial arts ideas of yielding.\n\n' +
        'Pairs often with Confucius in contrast: social forms vs spontaneous order.',

      mainIdeas:
        'Dao: unnamed process—naming already narrows it.\n\n' +
        'Wu-wei: act without domineering force—still act when care is needed.\n\n' +
        'Softness over hardness; return and reversal; simplicity and few desires.\n\n' +
        'Critique of competitive display—"the sage is not competitive."',

      keyConcepts: [
        { term: 'Dao (Way)', explanation: 'The flowing order of things—guide by aligning, not conquering every moment.' },
        { term: 'Wu-wei', explanation: 'Non-forcing efficacy—stop harmful overcontrol; respond cleanly.' },
        { term: 'Softness (water)', explanation: 'Water wears stone by yielding—strength without brittle pride.' },
        { term: 'Simplicity', explanation: 'Fewer wants, less comparison—room to see clearly.' },
        { term: 'Reversal', explanation: 'Extremes turn—hubris bends; exhaustion signals misalignment.' },
      ],

      suggestedBooks: [
        { title: 'Daodejing (Tao Te Ching)', author: 'Laozi (attrib.)', note: 'Many translations—compare Red Pine, Lau, or Addiss & Lombardo.' },
        { title: 'Zhuangzi (selections)', author: 'Zhuangzi', note: 'Playful companion—stories loosen rigid mind.' },
        { title: 'Tao: The Watercourse Way', author: 'Alan Watts', note: 'Modern bridge—read critically alongside primary text.' },
      ],

      suggestedVideos: [
        { label: 'Daoism / Laozi introduction (university lecture)', hint: 'Overview of Daoist thought.', url: 'https://www.youtube.com/results?search_query=Daoism+Laozi+introduction+university+lecture' },
        { label: 'Dao De Jing explained (lecture series)', hint: 'Chapter-by-chapter guides.', url: 'https://www.youtube.com/results?search_query=Dao+De+Jing+Tao+Te+Ching+explained+lecture' },
      ],
    },

    buddha: {
      name: 'Shakyamuni Buddha',
      briefIntroduction:
        'Shakyamuni Buddha (Siddhartha Gautama, c. 5th–4th century BCE India) taught a practical path out of suffering—not by denying pain, but by seeing how craving and clinging amplify it. The Four Noble Truths diagnose; the Eightfold Path trains ethics, mind, and wisdom.\n\n' +
        'The Middle Way avoids both indulgence and harsh asceticism. Compassion (metta) and mindfulness are trainable—not mystical escapes from responsibility.\n\n' +
        'Modern reading: anxiety, burnout, regret—ask what habit of mind is being fed.',

      earlyLife:
        'Born a prince in Shakya clan; early life sheltered. Encounters with sickness, aging, death, and a renunciant prompted the spiritual search.\n\n' +
        'Years of asceticism, then breakthrough meditation under the Bodhi tree—awakening to dependent arising and a shareable path.',

      keyAchievements:
        'Founded the Sangha—monastic and lay communities practicing together.\n\n' +
        'Taught for decades across castes and genders (context-limited yet radical for era).\n\n' +
        'Legacy spans Theravada, Mahayana, Vajrayana—diverse philosophies united by dukkha and practice.',

      mainIdeas:
        'Dukkha: unsatisfactoriness in conditioned life—not only pain.\n\n' +
        'Impermanence: clinging to what changes breeds suffering.\n\n' +
        'Non-self (anatta): loosen fixed ego stories—without nihilism.\n\n' +
        'Ethical action, concentration, and insight interdepend.',

      keyConcepts: [
        { term: 'Four Noble Truths', explanation: 'Suffering, its origin (craving/clinging), cessation, the path—clinical and hopeful.' },
        { term: 'Middle Way', explanation: 'Between hedonism and self-torture—sustainable discipline.' },
        { term: 'Mindfulness', explanation: 'Know body, feeling, mind, phenomena—before reactive stories run.' },
        { term: 'Compassion', explanation: 'Extend care outward—start with honest kindness to yourself.' },
        { term: 'Letting go', explanation: 'Release the grip, not necessarily the effort that matters.' },
      ],

      suggestedBooks: [
        { title: 'What the Buddha Taught', author: 'Walpola Rahula', note: 'Clear Theravada introduction.' },
        { title: "In the Buddha's Words", author: 'Bhikkhu Bodhi', note: 'Anthology of suttas.' },
        { title: "The Heart of the Buddha's Teaching", author: 'Thich Nhat Hanh', note: 'Gentle Mahayana-leaning primer.' },
      ],

      suggestedVideos: [
        { label: 'Berkeley / Stanford Buddhism intro lectures', hint: 'Four Noble Truths and the path.', url: 'https://www.youtube.com/results?search_query=Buddhism+101+university+lecture+Berkeley' },
        { label: 'The Buddha (PBS documentary)', hint: 'Historical overview—pair with primary texts.', url: 'https://www.youtube.com/results?search_query=PBS+The+Buddha+documentary' },
      ],
    },

    marx: {
      name: 'Karl Marx',
      briefIntroduction:
        'Karl Marx (1818–1883) fuses philosophy, political economy, and revolutionary journalism into critique of capitalism’s structural dynamics—class relations, exploitation via surplus labor, alienation, commodity fetishism, and ideology obscuring material interests.\n\n' +
        'Distinctions matter: Marx vs diverse Marxisms; philosophy vs economics archives; collaborative texts with Engels vs Marx solo nuances.\n\n' +
        'Academic philosophy redeploys Marx for ideology critique, alienation ethics, and social ontology debates—not solely revolutionary prophecy.',

      earlyLife:
        'Born Trier to Jewish lineage converting for civic survival under Prussian pressures—biographical scholarship stresses antisemitic political climate shaping Young Hegelian circles Marx navigated.\n\n' +
        'University Bonn/Berlin; doctorate Jena 1841; journalism censored (Rheinische Zeitung). Paris exile met Engels; Brussels/Cologne organizing; London exile from 1849—often impoverished, chronic illness, relying on Engels; buried Highgate 1883.',

      keyAchievements:
        'Capital Vol I analyses commodity, surplus value, working day—cornerstone political economy critique.\n\n' +
        'Communist Manifesto frames class struggle narrative—historically interpreted diversely.\n\n' +
        'German Ideology (with Engels) advances materialist history / ideology critique sketches.\n\n' +
        '1844 Manuscripts articulate alienation themes influencing existential and Catholic social thought receptions.',

      mainIdeas:
        'Historical materialism (popular tag): social reproduction modes shape dominant relations—avoid crude determinism clichés.\n\n' +
        'Exploitation rooted in property relations enabling surplus extraction—not reducible only personal greed narrative.\n\n' +
        'Alienation: estrangement from labor process, product, species-being, fellow workers—early Marx emphasis.\n\n' +
        'Commodity fetishism: social relations appear as relations between things—reification dynamics.\n\n' +
        'Praxis (Theses on Feuerbach): philosophers interpreted world; point is change—activist horizon.',

      keyConcepts: [
        {
          term: 'Historical materialism',
          explanation:
            'Broad thesis that material conditions and productive organization constrain/shape legal, political, ideological superstructures—debates refine determination vs relative autonomy.',
        },
        {
          term: 'Surplus value',
          explanation:
            'Value workers add beyond reproduction cost of labor power captured by capital—technical machinery for exploitation narrative (volume of Capital elaborates).',
        },
        {
          term: 'Alienation',
          explanation:
            'Structural estrangement where labor becomes external power dominating producer—psychological + ontological diagnosis early Marx.',
        },
        {
          term: 'Commodity fetishism',
          explanation:
            'Social character of labor appears as intrinsic natural properties of commodities—masks relational exploitation behind quantitative prices.',
        },
        {
          term: 'Ideology',
          explanation:
            'Ideas stabilizing ruling arrangements often unconsciously—critical theory inherits suspicion of meritocracy narratives.',
        },
        {
          term: 'Class struggle',
          explanation:
            'Motor of large-scale change in Marx’s historical storytelling—empirical sociologists refine boundaries today.',
        },
        {
          term: 'Praxis',
          explanation:
            'Unity of theory and transformative action—Theses on Feuerbach thesis XI sloganized philosophy’s activist pivot.',
        },
      ],

      suggestedBooks: [
        { title: 'The Communist Manifesto', author: 'Marx & Engels', note: 'Pamphlet force—contextualize historically.' },
        { title: 'Capital Vol. I', author: 'Marx', note: 'Start commodity fetishism chapter; Harvey companion helps.' },
        { title: 'Economic and Philosophic Manuscripts of 1844', author: 'Marx', note: 'Alienated labor sections widely taught.' },
        { title: 'The German Ideology', author: 'Marx & Engels', note: 'Ideology critique sketches—selected chunks.' },
        { title: 'A Companion to Marx’s Capital', author: 'David Harvey', note: 'Pairs well with Harvey’s Capital lecture series.' },
      ],

      suggestedVideos: [
        { label: 'David Harvey – Reading Marx’s Capital (online course)', hint: 'Free lecture playlist canonical.', url: 'https://www.youtube.com/playlist?list=PL5044C0878AED6804' },
        { label: 'Yale political philosophy – Marx modules', hint: 'Survey texts paired.', url: 'https://www.youtube.com/results?search_query=Yale+Introduction+to+Political+Philosophy+Marx' },
        { label: 'BBC In Our Time – Marx / Capital episodes', hint: 'Radio archive accessibility.', url: 'https://www.youtube.com/results?search_query=BBC+In+Our+Time+Marx+Capital' },
      ],
    },
  };
})();

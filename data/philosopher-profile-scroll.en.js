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
        { label: 'Open Yale / Stanford-style lecture courses on Plato’s Republic', hint: 'Search “Plato Republic lecture full course”.' },
        { label: 'Crash Course Philosophy – Plato & Aristotle block', hint: 'Good orientation; pair with primary text.' },
        { label: 'Gregory Vlastos / Julia Annas discussions (interviews & lectures)', hint: 'Search scholar name + “Plato justice”.' },
        { label: 'BBC In Our Time – Plato’s Republic (radio)', hint: 'Archive episode for narrative overview.' },
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
        { label: 'Michael Sugrue-style lectures on Apology / Socrates', hint: 'YouTube search “Apology Plato lecture”.' },
        { label: 'Yale Introduction to Political Philosophy – Socrates segments', hint: 'Course playlists often front-load classical Athens.' },
        { label: 'Crash Course – Socrates', hint: 'Short orientation before primary texts.' },
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
        { label: 'Wi-Phi / Wireless Philosophy – Aristotle ethics', hint: 'Short animated primers.' },
        { label: 'Harvard / Duke lecture recordings on Nicomachean Ethics', hint: 'Search course title + ethics.' },
        { label: 'History of Philosophy Without Any Gaps – Aristotle arc', hint: 'Podcast narrative continuity.' },
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
        { label: 'Harvard / Berkeley Chinese philosophy lecture series', hint: 'Search “Confucius Analects lecture”.' },
        { label: 'TED-Ed / shorts on Confucius', hint: 'Verify nuance in comments—pair with translation.' },
        { label: 'Philosophize This! – Eastern philosophy episodes', hint: 'Podcast narrative overview.' },
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
        { label: 'Michael Sandel Justice – Kant chapters', hint: 'Harvard lectures widely mirrored online.' },
        { label: 'Wireless Philosophy – Kant / categorical imperative', hint: 'Short animated intros.' },
        { label: 'Yale political philosophy – Kant modules', hint: 'Search course title + Kant PDF syllabus.' },
      ],
    },

    descartes: {
      name: 'René Descartes',
      briefIntroduction:
        'René Descartes (1596–1650) sought foundations for science and metaphysics after scholastic turbulence. Methodical doubt clears away dubitable beliefs until indubitable starting points remain—famously the cogito (“I think, therefore I am”). From there he argues for God’s existence and the reliability of clear and distinct perceptions under divine non-deceptiveness guarantee.\n\n' +
        'He advances mechanistic physics for extended substance while treating mind as thinking substance—generating mind–body interaction puzzles Princess Elisabeth famously pressed. Mathematics gains analytic geometry bridges.\n\n' +
        'Scholarship debates Cartesian circle, status of animals, and dualism alternatives—introductions balance textual steps with problem-centered teaching.',

      earlyLife:
        'Born La Haye (now Descartes), France; educated Jesuit La Flèche—humanities and mathematics. Law degree Poitiers; soldiering phase includes Bohemia winter dreams legend influencing life plans.\n\n' +
        'Settled Netherlands for intellectual liberty; prolific correspondence networks. Tutored Queen Christina in Stockholm; died 1650 from illness (pneumonia tradition).',

      keyAchievements:
        'Discourse on Method + Meditations crystallize early modern epistemological anxiety and foundationalism.\n\n' +
        'Coordinate geometry unifies algebra and spatial reasoning.\n\n' +
        'Mind–body distinction shapes centuries of philosophy of mind—even chiefly as foil.\n\n' +
        'Scientific mechanistic cosmology vetted metaphysically—natural philosophy paired with theology cautiously.',

      mainIdeas:
        'Systematic doubt as hygiene—not endpoint skepticism but purification.\n\n' +
        'Cogito secures indubitable subjective existence of thinking.\n\n' +
        'God proofs intended to secure truth criteria bridging finite minds and external world.\n\n' +
        'Extended substance explained geometrically; thinking substance known introspectively.\n\n' +
        'Passions treated quasi-mechanically yet ethically (Passions of the Soul).',

      keyConcepts: [
        {
          term: 'Methodical doubt',
          explanation:
            'Hypothesize deceiving demon / dream scenarios to withhold assent until foundations firm—filters unreliable senses and latent prejudices.',
        },
        {
          term: 'Cogito ergo sum',
          explanation:
            'Even if all else doubtful, doubting is thinking—therefore thinker exists while thinking occurs. Starting point for rebuilding knowledge.',
        },
        {
          term: 'Clear and distinct perceptions',
          explanation:
            'Epistemic criterion after proofs secure God’s veracity—yet notorious Cartesian circle debate asks whether God proofs already assume clarity standard.',
        },
        {
          term: 'Res cogitans / res extensa',
          explanation:
            'Thinking substance vs extended substance—defines dual-aspect ontology generating interaction problem: how can immaterial mind move body?',
        },
        {
          term: 'Wax argument (Meditation II)',
          explanation:
            'Sensible qualities change while piece remains wax—shows imagination limited; intellect grasps flexible extended thing—supports rationalism about essence.',
        },
        {
          term: 'Cartesian circle (student topic)',
          explanation:
            'Suspected circularity: using clear and distinct rule while proving God who validates clarity—literature proposes rescuing strategies or softer readings.',
        },
      ],

      suggestedBooks: [
        { title: 'Discourse on Method', author: 'Descartes', note: 'Easier entry—geometry autobiography sections famous.' },
        { title: 'Meditations on First Philosophy', author: 'Descartes', note: 'Core texts with objections/replies volume helpful.' },
        { title: 'Principles of Philosophy', author: 'Descartes', note: 'Systematic metaphysics & physics outline.' },
        { title: 'Descartes', author: 'Margaret Dauler Wilson', note: 'Classic scholarly commentary style.' },
      ],

      suggestedVideos: [
        { label: 'Early modern philosophy OCW lectures – Descartes Meditations', hint: 'Search university + Meditations.' },
        { label: 'Crash Course – Descartes', hint: 'Quick orientation.' },
        { label: 'Wi-Phi – skepticism & cogito', hint: 'Pairs with primary reading.' },
      ],
    },

    nietzsche: {
      name: 'Friedrich Nietzsche',
      briefIntroduction:
        'Friedrich Nietzsche (1844–1900) punctures complacent morality with genealogical suspicion, psychological diagnosis, and literary experimentation. He interrogates Christian–Platonic valuations, herd conformity, and resentment-driven ideals—while celebrating affirmation, creativity of values, and aesthetic existential stakes.\n\n' +
        'Interpretations divide sharply; responsible reading avoids Nazi-era distortions (Elisabeth Förster-Nietzsche editorial meddling). Terms like “will to power” and Übermisch require textual nuance—popular brutality myths mislead.\n\n' +
        'Style matters: aphorisms, poetry, masks—philosophy as provocation and diagnosis, not solely argument-tree.',

      earlyLife:
        'Born Röcken, Prussia; Lutheran pastor father died young. Brilliant classical philologist appointed Basel professor improbably young (1869). Chronic illness worsened—left professorship 1879.\n\n' +
        'Itinerant life Swiss/Italian resorts produced major works. Collapse in Turin 1889; institutional care until death 1900. Intellectual legacy exploded posthumously—sometimes problematically.',

      keyAchievements:
        'Genealogy as method influencing Foucault and critical theory tracks moral concepts to interests/psychology.\n\n' +
        'Birth of Tragedy reframes Greek culture via Apollonian/Dionysian tension.\n\n' +
        'Thus Spoke Zarathustra enters cultural lexicon—Übermensch, eternal recurrence as existential tests.\n\n' +
        'Beyond Good and Evil / Twilight of Idols sharpen critique of metaphysical comforts.',

      mainIdeas:
        'Slave morality thesis: moral ideals sometimes stem from ressentiment—interpretive not merely historical claim.\n\n' +
        'Perspectivism: knowledge arises from situated angles—contrasts naive absolutism without collapsing into trivial relativism in careful readings.\n\n' +
        'Death of God: cultural diagnosis of vacuum after metaphysical foundations erode—opens question of value creation.\n\n' +
        'Will to power: contested umbrella for drives toward expansion/overcoming—NOT simple fascist domination in scholarly caution.\n\n' +
        'Eternal recurrence / amor fati: existential litmus tests—could you affirm your life repeating?',

      keyConcepts: [
        {
          term: 'Genealogy',
          explanation:
            'Historical-psychological tracing of moral concepts to contingent struggles—not timeless Platonic discovery moral facts.',
        },
        {
          term: 'Perspectivism',
          explanation:
            'Truth emerges through interplay of perspectives—still demands rigor; not endorsement of lazy “anything goes.”',
        },
        {
          term: 'Ressentiment',
          explanation:
            'Reactive poisoning of evaluation—resentful inversion values disguised as saintly when rooted in impotent hatred (polemical sketch).',
        },
        {
          term: 'Will to power',
          explanation:
            'Interpretive lens for drives striving expression/overcoming—debates whether metaphysical doctrine or heuristic; beware pop dominance readings.',
        },
        {
          term: 'Übermensch (Overhuman)',
          explanation:
            'Symbolic aspirational figure transcending last-man comfort—not racist ubermensch pop meme; tied to self-overcoming narrative.',
        },
        {
          term: 'Eternal recurrence',
          explanation:
            'Thought experiment: if your life repeated eternally unchanged—ultimate affirmation test—psychological not cosmological certainty for most interpreters.',
        },
        {
          term: 'Apollonian / Dionysian',
          explanation:
            'Birth of Tragedy couples sober individuating form (Apollo) with ecstatic dissolution boundaries (Dionysus)—art metaphysics predecessor.',
        },
      ],

      suggestedBooks: [
        { title: 'On the Genealogy of Morals', author: 'Nietzsche', note: 'Essays on ascetic ideals, guilt, bad conscience.' },
        { title: 'Beyond Good and Evil', author: 'Nietzsche', note: 'Prelude philosophy of future—aphoristic density.' },
        { title: 'Thus Spoke Zarathustra', author: 'Nietzsche', note: 'Literary; selective reading advised first pass.' },
        { title: 'Twilight of the Idols', author: 'Nietzsche', note: 'Late hammer blows—readable polemic.' },
        { title: 'Nietzsche on Morality', author: 'Brian Leiter', note: 'Analytic introduction—arguments clarified.',
        },
      ],

      suggestedVideos: [
        { label: 'Sadler’s Nietzsche lectures (YouTube)', hint: 'Book-by-book commentary depth.' },
        { label: 'Philosophize This! – Nietzsche sequence', hint: 'Podcast pacing friendly.' },
        { label: 'Partially Examined Life – Genealogy episodes', hint: 'Discussion format caveats noted.',
        },
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
        { label: 'David Harvey – Reading Marx’s Capital (online course)', hint: 'Free lecture playlist canonical.' },
        { label: 'Yale political philosophy – Marx modules', hint: 'Survey texts paired.' },
        { label: 'BBC In Our Time – Marx / Capital episodes', hint: 'Radio archive accessibility.' },
      ],
    },
  };
})();

/**
 * One-off: replace descartes/nietzsche profile-scroll entries with laozi/buddha.
 * Run: node scripts/patch-laozi-buddha-scroll.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const files = [
  'data/philosopher-profile-scroll.en.js',
  'data/philosopher-profile-scroll.zh-hant.js',
  'web/data/philosopher-profile-scroll.en.js',
  'web/data/philosopher-profile-scroll.zh-hant.js',
]

function replaceBetween(src, startMarker, endMarker, replacement) {
  const start = src.indexOf(startMarker)
  if (start < 0) throw new Error(`Missing start: ${startMarker}`)
  const end = src.indexOf(endMarker, start + startMarker.length)
  if (end < 0) throw new Error(`Missing end: ${endMarker}`)
  return src.slice(0, start) + replacement + src.slice(end)
}

const laoziEn = `    laozi: {
      name: 'Laozi',
      briefIntroduction:
        'Laozi (traditionally 6th century BCE) is the named figure behind the Daodejing—a sparse, paradoxical guide to living with less forcing. Dao is not a thing to own but the way things arise and return; wu-wei is skilled non-coercion, like water finding low places without a battle plan.\\n\\n' +
        'Readings vary (legend vs history); for daily life the text works as psychology of grasping: when striving tightens knots, softness and simplicity may untie them.\\n\\n' +
        'Modern use: stress, control, comparison—ask what you are pushing that the situation does not need.',

      earlyLife:
        'Legends place Laozi as an archivist in Zhou courts, then departing west—guarded by Yin Xi who asked for teachings. Historical Laozi is debated; the text likely grew over centuries.\\n\\n' +
        'Cultural role: counter-voice to rigid ritualism—not anti-ethics, but suspicious of performative striving.',

      keyAchievements:
        'Daodejing shapes East Asian thought, religion, and art—Daoism as philosophy and practice.\\n\\n' +
        'Influences governance ideals (rule lightly), ecology metaphors (naturalness), and martial arts ideas of yielding.\\n\\n' +
        'Pairs often with Confucius in contrast: social forms vs spontaneous order.',

      mainIdeas:
        'Dao: unnamed process—naming already narrows it.\\n\\n' +
        'Wu-wei: act without domineering force—still act when care is needed.\\n\\n' +
        'Softness over hardness; return and reversal; simplicity and few desires.\\n\\n' +
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
        { label: 'Stanford Encyclopedia: Laozi / Daoism', hint: 'Overview entry online.' },
        { label: 'Dao De Jing explained (lecture series)', hint: 'Search university Daoism intro.' },
      ],
    },

`

const buddhaEn = `    buddha: {
      name: 'Shakyamuni Buddha',
      briefIntroduction:
        'Shakyamuni Buddha (Siddhartha Gautama, c. 5th–4th century BCE India) taught a practical path out of suffering—not by denying pain, but by seeing how craving and clinging amplify it. The Four Noble Truths diagnose; the Eightfold Path trains ethics, mind, and wisdom.\\n\\n' +
        'The Middle Way avoids both indulgence and harsh asceticism. Compassion (metta) and mindfulness are trainable—not mystical escapes from responsibility.\\n\\n' +
        'Modern reading: anxiety, burnout, regret—ask what habit of mind is being fed.',

      earlyLife:
        'Born a prince in Shakya clan; early life sheltered. Encounters with sickness, aging, death, and a renunciant prompted the spiritual search.\\n\\n' +
        'Years of asceticism, then breakthrough meditation under the Bodhi tree—awakening to dependent arising and a shareable path.',

      keyAchievements:
        'Founded the Sangha—monastic and lay communities practicing together.\\n\\n' +
        'Taught for decades across castes and genders (context-limited yet radical for era).\\n\\n' +
        'Legacy spans Theravada, Mahayana, Vajrayana—diverse philosophies united by dukkha and practice.',

      mainIdeas:
        'Dukkha: unsatisfactoriness in conditioned life—not only pain.\\n\\n' +
        'Impermanence: clinging to what changes breeds suffering.\\n\\n' +
        'Non-self (anatta): loosen fixed ego stories—without nihilism.\\n\\n' +
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
        { title: 'In the Buddha\'s Words', author: 'Bhikkhu Bodhi', note: 'Anthology of suttas.' },
        { title: 'The Heart of the Buddha\'s Teaching', author: 'Thich Nhat Hanh', note: 'Gentle Mahayana-leaning primer.' },
      ],

      suggestedVideos: [
        { label: 'Berkeley / Stanford Buddhism intro lectures', hint: 'Search "Buddhism 101" university.' },
        { label: 'The Buddha (PBS documentary)', hint: 'Historical overview—pair with primary texts.' },
      ],
    },

`

const laoziZh = `    laozi: {
      name: '老子',
      briefIntroduction:
        '老子（傳統說約公元前六世紀）相傳為《道德經》作者——文字簡省、充滿悖論，教人少一點硬拗。《道德經》嘅「道」唔係攞嚟炫耀嘅教條，而係萬物如何生成、返樸；「無為」係高明嘅不強求，似水就勢，唔係懶散。\\n\\n' +
        '史實有爭議，但作日常心法很管用：越逼自己越緊時，柔、簡、少欲可能先睇清形勢。',

      earlyLife:
        '傳說擔任周室守藏吏，西出函谷關，關令尹喜請教而留下五千言。學界多認為文本歷經累積。\\n\\n' +
        '文化上常與孔子對照：名教禮法 vs 自然無為——並非簡單敵對。',

      keyAchievements:
        '《道德經》影響道家思想、宗教、藝術與政治理想（無為而治）。\\n\\n' +
        '「柔弱勝剛強」「返樸」成為處世與養生常語。\\n\\n' +
        '與儒家並列為華夏思想兩大源頭之一。',

      mainIdeas:
        '道：不可執著名相，順勢而行。\\n\\n' +
        '無為：減少有害控制，該照顧時仍照顧。\\n\\n' +
        '柔弱、知足、反者道之動——極端會轉。',

      keyConcepts: [
        { term: '道', explanation: '萬物運行的秩序——對齊而唔征服每一刻。' },
        { term: '無為', explanation: '不強求嘅效力——停低有害嘅過度操控。' },
        { term: '柔弱（水）', explanation: '水穿石靠順流——力量而唔脆。' },
        { term: '知足', explanation: '少欲少比較——心先有空間。' },
        { term: '返樸', explanation: '去繁就簡——剝離表演式努力。' },
      ],

      suggestedBooks: [
        { title: '《道德經》', author: '老子（傳）', note: '多種中譯本可對照。' },
        { title: '《莊子》（選讀）', author: '莊子', note: '寓言鬆開僵化心。' },
        { title: '《老子今注今譯》', author: '陳鼓應', note: '常見中文入門。' },
      ],

      suggestedVideos: [
        { label: '道家／老子入門講座', hint: '搜大學中國哲學史。' },
        { label: '《道德經》導讀', hint: '公開課或播客。' },
      ],
    },

`

const buddhaZh = `    buddha: {
      name: '釋迦牟尼佛',
      briefIntroduction:
        '釋迦牟尼佛（釋迦族王子悉達多，約公元前五至四世紀）教導離苦之道——唔係否認痛苦，而係看清貪愛、執著如何令苦放大。四諦診斷；八正道訓練戒、定、慧。\\n\\n' +
        '中道避開放縱同虐待式苦行。慈悲、正念可以練——唔係用玄學逃責任。',

      earlyLife:
        '早年宮廷生活；見老、病、死、沙門而立志求道。\\n\\n' +
        '歷經苦行後於菩提樹下證悟緣起，說法四十餘年，建立僧團。',

      keyAchievements:
        '成立僧伽，聲聞、菩薩傳統繁衍。\\n\\n' +
        '教義傳播南亞、東亞、東南亞，形成上座部、大乘、金剛乘等。\\n\\n' +
        '「苦、集、滅、道」成為東方倫理與心理修養核心語彙。',

      mainIdeas:
        '苦：生命嘅不安穩，唔止肉体痛。\\n\\n' +
        '無常：抓緊會變嘅嘢就苦。\\n\\n' +
        '中道：唔放縱、唔自虐。\\n\\n' +
        '慈悲由誠實面對自己開始。',

      keyConcepts: [
        { term: '四諦', explanation: '苦、苦因、滅、道——可實踐嘅框架。' },
        { term: '中道', explanation: '兩極之間可行嘅路。' },
        { term: '正念', explanation: '先覺察身、受、心、法，再少被故事牽走。' },
        { term: '慈悲', explanation: '由己及人——唔係口號。' },
        { term: '放下', explanation: '鬆開執著，唔等於放棄責任。' },
      ],

      suggestedBooks: [
        { title: '《佛陀傳》', author: '一行禪師等', note: '敘事入門。' },
        { title: '《What the Buddha Taught》中譯', author: 'Walpola Rahula', note: '上座部清晰導論。' },
        { title: '《八正道》', author: '德寶法師', note: '實修導向。' },
      ],

      suggestedVideos: [
        { label: '佛學入門公開課', hint: '搜「佛學概論」大學課程。' },
        { label: '四諦、八正道短片', hint: '正念／中道關鍵詞。' },
      ],
    },

`

for (const rel of files) {
  const fp = path.join(root, rel)
  let src = fs.readFileSync(fp, 'utf8')
  const isZh = rel.includes('zh-hant')
  src = replaceBetween(src, '    descartes: {', '    nietzsche: {', isZh ? laoziZh : laoziEn)
  src = replaceBetween(src, '    nietzsche: {', '    marx: {', isZh ? buddhaZh : buddhaEn)
  fs.writeFileSync(fp, src, 'utf8')
  console.log('patched', rel)
}

console.log('Done.')

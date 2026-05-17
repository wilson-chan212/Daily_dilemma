/* eslint-disable no-undef */
/**
 * 哲學家長文概覽（香港繁體中文，供可捲動介面使用）。
 * 鍵名與 `supabase/functions/ai-chat/philosopher-profiles.json` 及英文版
 * `PHILOSOPHER_PROFILE_SCROLL_EN` 對齊。
 *
 * `keyConcepts` 每項為 { term, explanation }，利於手風琴／展開式詞彙 UI。
 */
(function () {
  'use strict';

  window.PHILOSOPHER_PROFILE_SCROLL_ZH_HANT = {
    plato: {
      name: '柏拉圖',
      briefIntroduction:
        '柏拉圖（約西元前428/427–前348/347年）係西方哲學傳統其中一位核心奠基者。流傳落嚟嘅作品幾乎全部都係對話錄，成日以老師蘇格拉底做主角，將論證、神話、修辭同戲劇張力編埋一齊。倫理、政治、形上學、知識論、心理學與教育，喺佢筆下，成日都係同一條追問：個人與城邦應該點樣將生命秩序指向真正嘅善，而唔係只睇起嚟愉悅或流行嘅嘢。\n\n' +
        '讀者可以預留啲詮釋空間：柏拉圖未必等於對話入面邊個角色；人物彼此駁難；《理想國》入面有啲設計（尤其城邦藍圖）成日會被當成思想實驗。當代研究對「理型」嘅本體地位、理想城邦的字面可行性、藝術禁令等仍有激烈爭議。對初學者而言，更可貴嘅往往係一種習慣：區分表象與較穩定嘅真理、追問教育如何塑造欲望，並檢視公私生活係咪呈現和諧或內在分裂。',

      earlyLife:
        '柏拉圖生於雅典貴族環境，正值伯羅奔尼撒戰爭與城邦動盪。古代傳統把佢嘅家世連到梭倫與顯赫政治家族；呢點有助理解佢啲作品點解一再返到民主、寡頭、德性與詭辯學派之間嘅張力。\n\n' +
        '生平細節難以盡考，但自古反覆敘述的一條主線極具份量：他曾懷抱政治志向，直到蘇格拉底受審與被處死（西元前399年）。柏拉圖筆下，呢個係哲學正直同民主判決嘅撞擊；亦形塑咗佢對「未經教化嘅激情統治」嘅疑慮，以及對道德同智性養成嘅堅持。\n\n' +
        '後世傳說他遊歷南義／西西里（與畢達哥拉斯傳統接觸）、亦提及埃及等經驗，約於西元前387年在雅典創立學園（Academy）。細節係咪句句屬實，可以暫時保留，但象徵意義清楚：數學、嚴格論證與政治反思的綜合。學園後來成為長期高等研究中心；亞里斯多德亦曾喺度求學。',

      keyAchievements:
        '創立學園（常被比作近代大學嘅先聲），令哲學同數學、類科學探究制度化並延續。\n\n' +
        '將哲學對話發展成一種文學形式：畀異議、好有吸引力嘅錯誤與片面真理喺戲劇入面現身；影響新柏拉圖主義、文藝復興人文主義乃至當代教學。\n\n' +
        '將倫理、政治與知識論、形上學連環相扣：正義同教育追問牽涉「何者可被認識」與「何者只係表象」。\n\n' +
        '提出洞穴比喻、靈魂三分、線喻，以及對「理型」嘅系統反思，深遠影響神學、觀念論，以及關於實在、共相同課程設計的現代討論。',

      mainIdeas:
        '正義作為和諧：喺《理想國》等脈絡中，正義唔只係守法，而是秩序：靈魂各部份與城邦各階層各安其分、唔互相僭越。政治後果至今仍有爭辯，但倫理直覺好清楚：不義往往同時反映內在失序與外在壓迫。\n\n' +
        '教育塑造品格：學習唔只係資訊搬運，而係塑造愛同注意力。錯嘅教育會將人鎖喺影子入面；好嘅教育會畀靈魂轉向可理解嘅結構，亦學識節制欲望。\n\n' +
        '表象與實在：好多對話都將感官世界入面飄忽嘅信念，同更有理由、更能落定義嘅理解作對照。係咪需要獨立嘅本體「界域」係學界爭點；教學上，柏拉圖逼我哋提出可說明的判準。\n\n' +
        '哲人護衛者作為統治模型：《理想國》的統治階級既著名亦富爭議——成日被用嚟質疑短期民粹與修辭政治，亦有人批評，如果照字面搬到現代國家，可能會有威權色彩。\n\n' +
        '晚期宇宙論與立法：《蒂邁歐》《法律篇》將秩序、度量同神匠類比伸延到宇宙同細密法制，可見佢唔限於「純理論」。',

      keyConcepts: [
        {
          term: '理型（Forms／Ideas）',
          explanation:
            '柏拉圖提出可理解的「理型」——對正義、美、相等「種類本身」的穩定說明。可感物常以「分有」或摹仿的方式關聯理型；詮釋從強形上實在論到較貶抑的讀法不一。對倫理學而言，理型提供客觀性錨點：道德論述指向真實的種類結構，而不只係情緒漂移。',
        },
        {
          term: '辯證法（Dialectic）',
          explanation:
            '透過問答檢驗定義、揭露矛盾，並由前提推向原理。它不同於純修辭說服：目標在於理解與理由秩序，而非僅僅贏得同意。《理想國》教育藍圖中辯證位階最高，因為它處理假設並指向較不假設的起點（細節仍是研究爭點）。',
        },
        {
          term: '靈魂三分（Tripartite soul）',
          explanation:
            '《理想國》第四卷將靈魂分為理性、激情／意氣、欲望三部份。內在衝突可類比城邦派系分裂。教育旨在協調各部：理性受辯證陶冶；意氣服膺正義而非榮譽狂怒；欲望受節制而非暴虐主宰。與現代心理學類比僅宜謹慎：此處首先是道德心理學架構。',
        },
        {
          term: '洞穴比喻（Allegory of the Cave）',
          explanation:
            '囚徒面壁見影，誤把影子當實在；解放意味靈魂轉向光——起初痛苦——終能理解可理解的真理。政治讀法強調意識形態與宣傳；知識論讀法強調理解層級；存在式讀法強調離開舒適幻覺的道德勇氣。',
        },
        {
          term: '線喻（Divided Line）',
          explanation:
            '《理想國》第六至七卷以線段標示認知狀態（影像、信念、理智推理、哲學洞見）及其對象。它區分想像與對可感物的信念，也區分數學式推理與對第一原理的把握。教學上常用來說明「意見」尚非「知識」。',
        },
        {
          term: '回憶說（Anamnesis）',
          explanation:
            '《美諾》《斐德羅》等對話把探究描寫為從學習者身上「引出」真理，並以神話式語言說成「回憶」靈魂曾見之物。即使不接受字面前世論，教學啟示仍在：理解常像「想起」，因潛在結構在問答中變得明朗。',
        },
        {
          term: '善（超越於「存在」之上）',
          explanation:
            '《理想國》第六卷將「善」標舉為理智追求的頂點，並以「在尊嚴與權能上超越存在」著名表述（譯法與詮釋各異）。重點在定向：倫理不只累積真命題，更包含對真正善者的適切嚮往。',
        },
        {
          term: '美城（Kallipolis）與哲人王／后',
          explanation:
            '《理想國》勾勒「美麗城」：階級、護衛者教育、財產／家庭安排與哲人統治。它是關於「智慧領導的秩序」的結構化思想實驗；讀者對烏托邦危險與對現實政治的診斷價值常有不同衡估。',
        },
      ],

      suggestedBooks: [
        { title: 'Republic（理想國）', author: 'Plato', note: '正義、洞穴、城邦—靈魂類比；時間有限可先讀卷一至四、七至九。' },
        { title: 'Symposium（饗宴）', author: 'Plato', note: '愛欲上升：由身體之美通往美本身——文學與哲學高峰。' },
        { title: 'Phaedo（斐多）', author: 'Plato', note: '靈魂與死亡、不死論證——進入柏拉圖靈魂形上學的門戶。' },
        { title: 'Meno（美諾）', author: 'Plato', note: '美德可教嗎？美諾悖論、奴隸幾何與回憶說。' },
        { title: 'Phaedrus（斐德羅）', author: 'Plato', note: '修辭與哲學；靈魂馬車神話；對書寫的批判。' },
        { title: 'Gorgias（高吉亞斯）', author: 'Plato', note: '修辭權力與正義；與卡里克勒斯對質。' },
        { title: 'Timaeus（蒂邁歐）', author: 'Plato', note: '宇宙論與神匠敘事。' },
        { title: 'Laws（法律篇）', author: 'Plato', note: '晚期政治與細密立法，與《理想國》理想主義對照。' },
        { title: 'Plato: Complete Works', author: 'Ed. Cooper / Hutchinson', note: 'Hackett 單卷本便於藏書與檢索。' },
      ],

      suggestedVideos: [
        { label: 'Open Yale／史丹佛式《理想國》整門課', hint: '入門動畫；務必搭配原著。', url: 'https://www.youtube.com/playlist?list=PL868E87E8CF959153' },
        { label: 'Crash Course Philosophy（柏拉圖與亞里斯多德段）', hint: '短片入門。', url: 'https://www.youtube.com/watch?v=Ra7VQGVwh5E' },
        { label: 'Gregory Vlastos／Julia Annas 訪談與演講', hint: '學者談柏拉圖與正義。', url: 'https://www.youtube.com/results?search_query=Gregory+Vlastos+Julia+Annas+Plato+justice+lecture' },
        { label: 'BBC In Our Time：柏拉圖《理想國》', hint: '廣播節目檔案，適合先聽全貌。', url: 'https://www.youtube.com/results?search_query=BBC+In+Our+Time+Plato+Republic' },
      ],
    },

    socrates: {
      name: '蘇格拉底',
      briefIntroduction:
        '蘇格拉底（約西元前470–399年）本人冇著作傳世；我哋主要透過柏拉圖、色諾芬與喜劇諷刺（如阿里斯托芬《雲》）認識佢。佢將哲學變成公開對話：喺市集入面追問政客、詩人與工匠「你以為自己知道咩」。「省察嘅人生」、反諷式謙遜，以及嚴肅倫理唔使閉門造車——呢啲形象深刻烙印喺西方自我理解入面。\n\n' +
        '歷史重建充滿爭議：「蘇格拉底問題」指嘅係真實人物與柏拉圖筆下主角之間的縫隙。即便如此，呢個形象凝聚咗智性勇氣、拒絕廉價名聲，以及（依柏拉圖敘述）寧死都唔放低哲學正直。',

      earlyLife:
        '據柏拉圖，佢係石匠之子、助產士之子——後者成為其「助產術」方法的意象。佢曾經喺戰役入面擔任重裝步兵；傳記材料強調佢嘅耐力，仲有面對寒暑饑渴都唔太動搖，柏拉圖將此連到內在節制。\n\n' +
        '佢唔似詭辯學家咁收費開班；貧窮同成日激嬲人，都係佢名聲一部分。西元前399年他以宗教與敗壞青年等罪名受審，被判死刑，飲鸩而亡——《申辯》《克里同》《斐多》使之不朽。',

      keyAchievements:
        '將哲學定格為詰問式探究：交叉詰問戳破假裝的知識並澄清概念。\n\n' +
        '把倫理拉到對話與公共現場：悖論喺日常傾偈入面發生，唔係淨係出現喺論文集。\n\n' +
        '提供西方文化中「良知對群眾判決」的原型場景（尤其《申辯》）。\n\n' +
        '為柏拉圖全部著作佈題：幾乎所有柏拉圖主題都可追溯到蘇格拉底式提問。',

      mainIdeas:
        '省察的人生：反省唔係裝飾，而是嚴肅性的核心（《申辯》）。\n\n' +
        '德與知：蘇格拉底成日將卓越連到理解——惡出於無知——後世批評甚烈卻仍回頭爭辯。\n\n' +
        '反諷與謙遜：宣稱無知同時揭露他人矛盾，既係邏輯，亦係一種道德治療。\n\n' +
        '法律與良知：《克里同》談守法；《申辯》強調對哲學使命的堅持——讀者要喺張力入面細讀，唔好讀到扁平晒。',

      keyConcepts: [
        {
          term: '詰問法（Elenchus）',
          explanation:
            '對話者提出定義或論題，蘇格拉底從其承諾推出矛盾。它針對未反省的信念，逼迫更清晰的美德概念說明。',
        },
        {
          term: '蘇格拉底式反諷',
          explanation:
            '佯裝無知與讚美，引對方暴露更深的困惑。那唔係辛辣挖苦：而是降低防衛，使探究能以誠實進行。',
        },
        {
          term: '「我只知道我一無所知」',
          explanation:
            '流行概括《申辯》的謙遜母題：智慧始於承認界限——尤其相對於神的智慧。易引用難實踐；區分傲慢意見與探究態度。',
        },
        {
          term: '照顧靈魂',
          explanation:
            '《申辯》把心理與道德完整看得比財富與名聲更重。「靈魂」在此涵蓋品格與指向真理的注意——倫理健康的所在。',
        },
        {
          term: '靈兆（daimonion）',
          explanation:
            '《申辯》提到個人神性訊號，只在阻止錯事時發聲、從不正面命令。詮釋從宗教經驗到良知隱喻不一。',
        },
        {
          term: '節制（Sophrosyne）',
          explanation:
            '自我節制與清明判斷——對照欲望的混亂或民主急躁（雅典焦慮語境下的張力）。',
        },
      ],

      suggestedBooks: [
        { title: 'Apology（申辯篇）', author: 'Plato', note: '法庭上的申辯——戲劇性的「蘇格拉底之聲」。' },
        { title: 'Crito（克里同篇）', author: 'Plato', note: '為何留在獄中？法律與義務。' },
        { title: 'Euthyphro（歐緒弗洛篇）', author: 'Plato', note: '虔敬定義——經典的定義探究。' },
        { title: 'Meno（美諾篇）', author: 'Plato', note: '美德可教嗎？卓越的蘇格拉底式追問。' },
        { title: 'Gorgias（高吉亞斯篇）', author: 'Plato', note: '正義與修辭——說服力的權力。' },
        { title: 'Memorabilia（蘇格拉底回憶錄）', author: 'Xenophon', note: '另一種蘇格拉底肖像——可比對閱讀。' },
      ],

      suggestedVideos: [
        { label: 'Michael Sugrue 式《申辯》講解', hint: '審判與省察人生。', url: 'https://www.youtube.com/results?search_query=Michael+Sugrue+Plato+Apology+Socrates+lecture' },
        { label: 'Yale《政治哲學導論》蘇格拉底單元', hint: '課程播放清單開頭常見古典雅典。', url: 'https://www.youtube.com/playlist?list=PL868E87E8CF959153' },
        { label: 'Crash Course：蘇格拉底', hint: '入門短片；接著讀原著。', url: 'https://www.youtube.com/watch?v=GvHDBqTBBDQ' },
      ],
    },

    aristotle: {
      name: '亞里斯多德',
      briefIntroduction:
        '亞里斯多德（西元前384–322年）入柏拉圖學園進修，曾任馬其頓亞歷山大之家教，後在雅典創立逍遙學園（Lyceum）。著作涵蓋邏輯、生物學、形上學、倫理學、政治學、修辭與詩學——常從經驗觀察與日常語言出發，再追求系統說明。\n\n' +
        '倫理上，他視人為須透過習慣養成品格、並以實踐智慧指引脈絡抉擇的存在者，而非只靠規條套用。政治上，人是「城邦的動物」，繁盛通常須參與共同審議與制度生活。',

      earlyLife:
        '生於斯塔吉拉；父親尼各馬可為馬其頓宮廷醫師，可能滋長其生物學興趣。自幼失怙，由監護人養育。約十七歲進入柏拉圖學園直至柏拉圖過世（前348/347）。後寓居阿索斯、勒斯博斯等地從事生物研究。\n\n' +
        '返馬其頓任少年亞歷山大師傅（前343–335）。亞歷山大入主雅典後回雅典創逍遙學園（前335）。亞歷山大死後反馬其頓情緒升高，他離開雅典以免「雅典人二度對哲學犯罪」，翌年於哈爾基斯去世。',

      keyAchievements:
        '整理三段論與範疇——中世紀邏輯與哲學的重要基石。\n\n' +
        '大量經驗生物學：分類、解剖（受時代限制）與目的論式功能說明。\n\n' +
        '《尼各馬可倫理學》《政治學》到今日仍然係德性倫理與憲制研究的必讀。\n\n' +
        '形上學的實體、潛能／現實與四因——深刻影響後世神學與科學形上學討論。',

      mainIdeas:
        '幸福（eudaimonia）為最高目的——常譯繁盛：靈魂依德性而活動，貫穿完整人生。\n\n' +
        '德性倫理的習慣養成：道德卓越既非天生固定，亦非純粹抽象推理；反覆抉擇形塑穩定品格。\n\n' +
        '中庸教義：德性在過與不及之間，相對於情境與個人——唔係算術正中央。\n\n' +
        '實踐智慧（phronesis）在普遍規則不足以決定具體善時，辨識脈絡並斟酌。\n\n' +
        '政治學研究何種憲制最能發展公民能力——混合政體有時獲實務肯定。',

      keyConcepts: [
        {
          term: '幸福／繁盛（Eudaimonia）',
          explanation:
            '常譯「幸福」但更接近完整意義上的「活得好」：透過理性卓越活動與人際善目標諧調而實現本性；可伴隨快樂但不等同短暫享樂。',
        },
        {
          term: '習性／品格狀態（Hexis）',
          explanation:
            '德性唔係單次行為，而是反覆抉擇形成的穩定傾向——類似技藝般可養成。',
        },
        {
          term: '中庸（Golden mean）',
          explanation:
            '勇敢介於魯莽與怯懦之間；節制介於放縱與麻木之間。「中道」相對於我哋與情境而定，唔係機械平均。',
        },
        {
          term: '實踐智慧（Phronesis）',
          explanation:
            '在具體處境中朝向人之善進行慎思與判斷的卓越——整合感知、情感陶冶與目的取向。',
        },
        {
          term: '六種政體（《政治學》卷三）',
          explanation:
            '三種「正確」：君主、貴族、共和（polity）；三種「變體」：僭主、寡頭、民主——依統治是否指向公共利益或派系私利而分。',
        },
        {
          term: '四因（Four causes）',
          explanation:
            '質料因、形式因、動力因、目的因——例如雕像的大理石、造型、雕刻者、藝術目的。現代科學改寫形上學後，仍常用作分析架構。',
        },
      ],

      suggestedBooks: [
        { title: 'Nicomachean Ethics（尼各馬可倫理學）', author: 'Aristotle', note: 'Irwin、Sachs 等譯本易讀。' },
        { title: 'Politics（政治學）', author: 'Aristotle', note: '卷一至三尤核心：城邦本性與公民。' },
        { title: 'Metaphysics（形上學）', author: 'Aristotle', note: '選讀實體與潛能／現實章節。' },
        { title: 'On the Soul（論靈魂）', author: 'Aristotle', note: '心靈哲學先聲——宜搭配導讀。' },
        { title: 'Aristotle: A Very Short Introduction', author: 'Jonathan Barnes', note: '極短導論。' },
      ],

      suggestedVideos: [
        { label: 'Wi-Phi／Wireless Philosophy：亞里斯多德倫理', hint: '短片動畫入門。', url: 'https://www.youtube.com/watch?v=PrvtOWEXDIQ' },
        { label: '哈佛／杜克《尼各馬可倫理學》課程錄影', hint: '德性與幸福。', url: 'https://www.youtube.com/watch?v=MoCuVa7zU-I' },
        { label: 'History of Philosophy Without Any Gaps：亞里斯多德段落', hint: '播客連貫敘事。', url: 'https://www.youtube.com/results?search_query=History+of+Philosophy+Without+Any+Gaps+Aristotle' },
      ],
    },

    confucius: {
      name: '孔子',
      briefIntroduction:
        '孔子（孔夫子，傳統生卒年為西元前551–479年）係先秦儒家嘅核心源頭。《論語》由弟子及再傳弟子纂輯語錄與場景，呈現出一位執著於身教、禮學與政治道德的老師形象。\n\n' +
        '核心關懷包括仁（仁者愛人）、禮（節文與敬意）、孝悌、信實言語，同埋靠德行，而唔係淨靠暴力去維繫秩序。後世帝制正統、宋明理學與現代新儒學對「孔子」的重構差異極大；入門可以暫時放低後世爭論，先捉住文本入面嘅修身同關係倫理。',

      earlyLife:
        '傳說出身魯國（今山東一帶）唔算最顯赫；熟諳周代禮樂文化，曾任次級官職，成日被講成理想受挫的改革者，因當權者重便計而輕德政。\n\n' +
        '周遊列國尋求可行仁政的君主；年代細節與路線在史料中有出入。返魯後授徒講學，弟子傳承文本與理想，深刻形塑咗東亞教育想像——其制度化（科舉等）就屬於後世延伸。',

      keyAchievements:
        '建立「師徒共學、終身修身」的典範。\n\n' +
        '講清楚角色倫理：敬、恕、互惠，連結家庭與政治想像。\n\n' +
        '仁、禮、君子、小人、正名等詞彙成為古典教育嘅語彙骨架。\n\n' +
        '為後世「選賢與能」理想提供道德詞彙——與實際制度史宜分開理解。',

      mainIdeas:
        '仁係定向嘅德目：在具體關係與分寸中實踐惻隱與體貼；孔子好少畀單句定義，而係用身教示範。\n\n' +
        '禮陶冶情感與注意力：令倫理反應穩定可靠；如果冇仁做根底，禮易淪為空殼。\n\n' +
        '君子修身優先於苛責他人：權威來自品格，唔係淨係來自位階。\n\n' +
        '正名：名實相符，社會協調需要角色與稱謂誠實對應行為。\n\n' +
        '和：成日被理解成有差異之中嘅協調，而唔係表面一律。',

      keyConcepts: [
        {
          term: '仁',
          explanation:
            '核心德目：克己復禮為仁、仁者愛人等語境互見。重在情境中的體貼與分寸，而非口號式定義。',
        },
        {
          term: '禮',
          explanation:
            '節文與生活中的敬意表達；當由仁涵養時，不只係外在規矩，而是道德陶冶的載體。',
        },
        {
          term: '君子／小人',
          explanation:
            '君子追求人格高度；小人易徇私利而輕德——這是品格類型對照，影響後世評價語彙。',
        },
        {
          term: '孝悌',
          explanation:
            '善事父母、尊敬兄長；古典延伸常以家庭倫理類比政治忠敬，詮釋史上有保守與批判兩條線。',
        },
        {
          term: '正名',
          explanation:
            '名稱與實際責任相符，語言與政治得以偕調——早期「語言—政治」交會的思想資源。',
        },
        {
          term: '恕（近似「恕道」）',
          explanation:
            '「己所不欲，勿施於人」（《論語·衛靈公》）——消極金律式的互惠戒條，與仁聯動。',
        },
      ],

      suggestedBooks: [
        { title: '論語', author: '孔子（弟子輯）', note: '可比對英譯（如 Slingerland、劉殿爵）。' },
        { title: '孟子', author: '孟子', note: '性善與道德萌芽——儒家心理學的古典發展。' },
        { title: '荀子', author: '荀子', note: '禮作為「化性起偽」——與孟學對照。' },
        { title: 'Confucian Role Ethics', author: 'Roger T. Ames', note: '當代角色倫理詮釋。' },
      ],

      suggestedVideos: [
        { label: '哈佛／柏克萊：中國哲學課程', hint: '《論語》大學講座。', url: 'https://www.youtube.com/results?search_query=孔子+論語+公開課+講座' },
        { label: 'TED-Ed 等短片（孔子）', hint: '留言區常有校正——須搭配可靠譯本。', url: 'https://www.youtube.com/watch?v=tuhGrGias3o' },
        { label: 'Philosophize This!：東方哲學集數', hint: '播客式總覽。', url: 'https://www.youtube.com/results?search_query=Philosophize+This+Eastern+philosophy+Confucius' },
      ],
    },

    kant: {
      name: '康德',
      briefIntroduction:
        '伊曼努爾·康德（1724–1804）用「批判哲學」檢視理性在先驗層面可以正當化啲咩。倫理學標榜義務、自律，以及將人當成目的而非純手段——成日同後果論捷徑作對照。\n\n' +
        '政治上支持共和、法治與永久和平願景，並區分公共法權與私人德性。《判斷力批判》則連結自然與自由領域的美感與目的論反省。\n\n' +
        '詮釋爭議仲喺度：兩個「世界」或同一對象的兩種面向、定言令式各公式之間的嚴格關係等；入門可以先掌握尊嚴與可普遍化測試。',

      earlyLife:
        '生於東普魯士哥尼斯堡（今俄羅斯加里寧格勒）。虔信派教育強調紀律，呼應其後半生規律作息。哥尼斯堡大學生涯漫長，1770 年任教授前長期私人講師。\n\n' +
        '少旅行；散步故事已成軼事。晚期思想大爆發：1781《純粹理性批判》；1790年代倫理與宗教文稿頻仍；晚年認知衰退，1804年逝世；未完成《遺稿》。',

      keyAchievements:
        '《純粹理性批判》重劃形上學範圍：經驗可能性的條件與超越經驗的思辨界限。\n\n' +
        '道德哲學奠立意志自律與定言令式架構，影響義務論傳統。\n\n' +
        '政治論文勾勒共和和平與世界公民視域，與當代人權／國際法論述對話。\n\n' +
        '第三批判連結審美與目的論判斷，影響美學與生物「彷彿有目的」式推理。',

      mainIdeas:
        '只有出於義務嘅好意志具有無條件道德價值——唔可以淨係睇表面合規。\n\n' +
        '定言令式測試品準：能否同時願意你嘅準則成為普遍法則？係咪將人只當成手段？能否設想「目的王國」的立法？\n\n' +
        '自律：道德法則來自理性能動者的自我立法。\n\n' +
        '理性的公共運用（啟蒙短文）：學者喺公共領域使用理性的自由辯護。\n\n' +
        '法權奠基於外在自由在普遍法則下的一致性（《法權論》脈絡）。',

      keyConcepts: [
        {
          term: '假言令式與定言令式',
          explanation:
            '假言令式連結手段與偶然目的（若要 X，便做 Y）。定言令式無條件拘束理性存有者——道德應然的核心。',
        },
        {
          term: '普遍法則公式',
          explanation:
            '只依你能同時願意其準則成為普遍法則的那些準則而行動。爭點在於「矛盾」是邏輯上不可能抑或唔願它在世上普遍化。',
        },
        {
          term: '人性公式',
          explanation:
            '無論對己對人，總要以人性（理性存在者的設定目的）為目的，而永不僅作手段——康德式尊重與人權讀法的基石。',
        },
        {
          term: '目的王國',
          explanation:
            '理性存在者彼此為彼此立法的理想共同體——測試公平與互認，超越孤獨的個人願意。',
        },
        {
          term: '意志自律',
          explanation:
            '道德法則不像外在物理律強加於被動質料；理性主體在充分理性下認可自己所立的規範。',
        },
        {
          term: '物自身／現象（簡介）',
          explanation:
            '技術語彙：經由感性形式所予之物 vs 物自身。入門課提醒勿把「不可知」說死教條化；各家詮釋出入甚大。',
        },
      ],

      suggestedBooks: [
        { title: 'Groundwork（道德形上學基礎）', author: 'Kant', note: '倫理入門——篇幅短但密度高。' },
        { title: 'Critique of Practical Reason（實踐理性批判）', author: 'Kant', note: '自由、理性事實、動機等。' },
        { title: 'Metaphysics of Morals（道德形上學）', author: 'Kant', note: '法權論／德性論分冊。' },
        { title: 'Critique of Pure Reason（純粹理性批判）', author: 'Kant', note: '感性論與分析論開頭——宜選讀並配導讀。' },
        { title: 'Creating the Kingdom of Ends', author: 'Christine Korsgaard', note: '分析哲學圈康德倫理論文集。' },
      ],

      suggestedVideos: [
        { label: 'Michael Sandel《正義》課：康德單元', hint: '哈佛網上好易搵到公開課鏡像。', url: 'https://www.youtube.com/watch?v=kBdfcR-8hEY' },
        { label: 'Wireless Philosophy：康德／定言令式', hint: '短片動畫。', url: 'https://www.youtube.com/watch?v=8bIys6TJDEg' },
        { label: 'Yale 政治哲學課：康德模組', hint: '義務、自由與善良意志。', url: 'https://www.youtube.com/watch?v=x2n1JxKU0Tg' },
      ],
    },

    laozi: {
      name: '老子',
      briefIntroduction:
        '老子（傳統說約公元前六世紀）相傳為《道德經》作者——文字簡省、充滿悖論，教人少一點硬拗。《道德經》嘅「道」唔係攞嚟炫耀嘅教條，而係萬物如何生成、返樸；「無為」係高明嘅不強求，似水就勢，唔係懶散。\n\n' +
        '史實有爭議，但作日常心法很管用：越逼自己越緊時，柔、簡、少欲可能先睇清形勢。',

      earlyLife:
        '傳說擔任周室守藏吏，西出函谷關，關令尹喜請教而留下五千言。學界多認為文本歷經累積。\n\n' +
        '文化上常與孔子對照：名教禮法 vs 自然無為——並非簡單敵對。',

      keyAchievements:
        '《道德經》影響道家思想、宗教、藝術與政治理想（無為而治）。\n\n' +
        '「柔弱勝剛強」「返樸」成為處世與養生常語。\n\n' +
        '與儒家並列為華夏思想兩大源頭之一。',

      mainIdeas:
        '道：不可執著名相，順勢而行。\n\n' +
        '無為：減少有害控制，該照顧時仍照顧。\n\n' +
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
        { label: '道家／老子入門講座', hint: '大學中國哲學史導論。', url: 'https://www.youtube.com/results?search_query=道家+老子+入門+講座+大學' },
        { label: '《道德經》導讀', hint: '公開課或播客。', url: 'https://www.youtube.com/results?search_query=道德經+導讀+公開課' },
      ],
    },

    buddha: {
      name: '釋迦牟尼佛',
      briefIntroduction:
        '釋迦牟尼佛（釋迦族王子悉達多，約公元前五至四世紀）教導離苦之道——唔係否認痛苦，而係看清貪愛、執著如何令苦放大。四諦診斷；八正道訓練戒、定、慧。\n\n' +
        '中道避開放縱同虐待式苦行。慈悲、正念可以練——唔係用玄學逃責任。',

      earlyLife:
        '早年宮廷生活；見老、病、死、沙門而立志求道。\n\n' +
        '歷經苦行後於菩提樹下證悟緣起，說法四十餘年，建立僧團。',

      keyAchievements:
        '成立僧伽，聲聞、菩薩傳統繁衍。\n\n' +
        '教義傳播南亞、東亞、東南亞，形成上座部、大乘、金剛乘等。\n\n' +
        '「苦、集、滅、道」成為東方倫理與心理修養核心語彙。',

      mainIdeas:
        '苦：生命嘅不安穩，唔止肉体痛。\n\n' +
        '無常：抓緊會變嘅嘢就苦。\n\n' +
        '中道：唔放縱、唔自虐。\n\n' +
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
        { label: '佛學入門公開課', hint: '四諦與八正道。', url: 'https://www.youtube.com/results?search_query=佛學概論+公開課+大學' },
        { label: '四諦、八正道短片', hint: '正念／中道關鍵詞。', url: 'https://www.youtube.com/results?search_query=四諦+八正道+佛教+講解' },
      ],
    },

    marx: {
      name: '馬克思',
      briefIntroduction:
        '卡爾·馬克思（1818–1883）將哲學、政治經濟學同革命政論熔入對資本主義結構動態的批判：階級關係、剩餘勞動剝削、異化、商品拜物教，以及掩蓋物質利益的意識形態。\n\n' +
        '分清楚好重要：馬克思本人 vs 各式馬克思主義；哲學手稿 vs 《資本論》經濟學；與恩格斯合作文本 vs 獨著語氣差異。\n\n' +
        '學院哲學亦借用馬克思做意識形態批判、異化倫理與社會本體論——唔只係革命預言。',

      earlyLife:
        '生於特里爾；家族喺普魯士排猶政策下改宗以求公民生存——傳記研究強調反猶政治氛圍點樣形塑青年黑格爾派圈子。\n\n' +
        '波昂／柏林大學就讀，1841耶拿博士；《萊茵報》時遭審查。巴黎流亡遇恩格斯；布魯塞爾／科隆組織；1849起長居倫敦——經濟拮据、病痛纏身，靠恩格斯幫手；1883年葬於海格特公墓。',

      keyAchievements:
        '《資本論》第一卷剖析商品、剩餘價值與工作日——政治經濟批判基石。\n\n' +
        '《共產黨宣言》提出階級鬥爭敘事——歷史詮釋多元。\n\n' +
        '《德意志意識形態》（與恩格斯）草擬唯物史觀／意識形態批判。\n\n' +
        '1844手稿深化異化討論——影響存在主義與天主教社會思想等 reception。',

      mainIdeas:
        '唯物史觀（通俗標籤）：生產方式制約支配性社會關係——避免機械經濟決定論漫畫。\n\n' +
        '剝削根植於使剩餘榨取得以可能的財產與權力關係——唔只係個人貪婪故事。\n\n' +
        '異化：勞動過程、產品、類本質與他人關係的結構性疏離——早期馬克思重心。\n\n' +
        '商品拜物教：社會勞動關係彷彿物與物的關係——物化動態。\n\n' +
        '實踐（費爾巴哈論綱第十一條）：哲學唔只解釋世界，更要改變世界。',

      keyConcepts: [
        {
          term: '唯物史觀（historical materialism）',
          explanation:
            '物質生活條件與生產組織型塑法律、政治、意識形態上層建築——當代討論細化決定與相對自主性的比例。',
        },
        {
          term: '剩餘價值',
          explanation:
            '工人在再生產自身勞動力成本之外創造的價值，常被資本佔有——《資本論》卷一技術性展開剝削敘事。',
        },
        {
          term: '異化',
          explanation:
            '勞動與其成果脫離勞動者的支配而成為統治其上的外在力量——早期文本的心理—存有診斷。',
        },
        {
          term: '商品拜物教',
          explanation:
            '社會性的勞動協作以物的自然屬性與價格幻覺顯現——掩蓋背後的支配與依賴。',
        },
        {
          term: '意識形態',
          explanation:
            '穩定支配安排的觀念往往無意識內化——批判理論承接對精英叙事的懷疑。',
        },
        {
          term: '階級鬥爭',
          explanation:
            '馬克思大歷史敘事的驅動機制表述——經驗社會學今日以更細緻的階級／族群／性別框架補充。',
        },
        {
          term: '實踐（Praxis）',
          explanation:
            '理論與改造世界的行動統一——費爾巴哈論綱口號化後成為馬克思主義實踐哲學的標語。',
        },
      ],

      suggestedBooks: [
        { title: 'The Communist Manifesto（共產黨宣言）', author: 'Marx & Engels', note: '宣言力道強——須歷史語境化。' },
        { title: 'Capital Vol. I（資本論．卷一）', author: 'Marx', note: '先讀商品與拜物教章；搭配 Harvey 導讀。' },
        { title: '1844年經濟學哲學手稿', author: 'Marx', note: '異化勞動諸節教學常用。' },
        { title: 'The German Ideology（德意志意識形態）', author: 'Marx & Engels', note: '意識形態批判——選讀即可。' },
        { title: '《資本論》讀本／伴讀', author: 'David Harvey', note: '與線上課程相互發明。' },
      ],

      suggestedVideos: [
        { label: 'David Harvey《讀資本論》線上課', hint: '免費講座播放清單，經典入門。', url: 'https://www.youtube.com/playlist?list=PL5044C0878AED6804' },
        { label: 'Yale 政治哲學：馬克思單元', hint: '與指定閱讀並進。', url: 'https://www.youtube.com/results?search_query=Yale+Introduction+to+Political+Philosophy+Marx' },
        { label: 'BBC In Our Time：馬克思／《資本論》', hint: '廣播檔案易找。', url: 'https://www.youtube.com/results?search_query=BBC+In+Our+Time+Marx+Capital' },
      ],
    },
  };
})();

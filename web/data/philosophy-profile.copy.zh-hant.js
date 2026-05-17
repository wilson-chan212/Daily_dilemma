(function () {
  const copy = {
    kicker: '你嘅哲學鏡像',
    framingLine: '呢個唔係診斷，而係你喺呢啲情境入面價值取捨嘅鏡像。',
    dimensionsSection: '你嘅維度',
    privateNote: '私人 · 得你先睇到結果',
    defaultBlindSpot: '當你最重視嘅價值拉得太盡時，可能會出現你未必察覺嘅盲點。',
    sections: {
      blindSpot: '盲點',
      thinkers: '同你共鳴嘅思想家',
    },
    dimensions: {
      orderVsAdaptation: {
        left: '秩序',
        right: '適應',
        leftHint: '規則、一致性、盡量一視同仁——就算處境拉扯，都想有清晰標準。',
        rightHint: '睇處境、忠誠取捨同彈性——當死板規則唔啱用，或者公平要留空間。',
      },
      truthVsHarmony: {
        left: '真理',
        right: '和諧',
        leftHint: '講清事實、摩擦同代價——就算和氣、耐性或者面子想你收聲。',
        rightHint: '保護信任、士氣同關係——有時要軟化真相，關係先接得住。',
      },
      freedomVsGuardrails: {
        left: '自由',
        right: '防線',
        leftHint: '留空間俾人揀、發聲、掌握自己人生——就算保護會收窄高風險選項。',
        rightHint: '防護、阻力同共同底線——就算會削減純粹同意或者即興。',
      },
      comfortVsStriving: {
        left: '安逸',
        right: '奮鬥',
        leftHint: '眼前嘅舒緩、穩定同身心安穩——壓力大時尤其重要。',
        rightHint: '意義、尊嚴同更長遠嘅 horizon——就算而家要你付出多啲。',
      },
    },
    archetypes: {
      stoicArchitect: {
        title: '斯多噶築構者',
        sub: '你追求清晰、責任同穩定結構——喺內心同社會層面都係。',
        blindSpot: '你可能太信系統同自控，低估咗揀擇較少嘅人面對嘅混亂；有時人需要嘅係關懷，多過即刻糾正。',
        thinkers: [
          { name: '愛比克泰德', note: '論自律同自己所掌控嘅範圍。' },
          { name: '康德', note: '論義務、一致性同尊重每個人。' },
          { name: '羅爾斯', note: '論設計人人住得落嘅公平規則。' },
        ],
      },
      principledRealist: {
        title: '原則派現實主義者',
        sub: '你守護真理、一致性同問責——尤其喺壓力底下。',
        blindSpot: '你可能低估分寸、時機同共同故事嘅價值；有時「贏辯論」會傷害本可以推進真相嘅信任。',
        thinkers: [
          { name: '康德', note: '論誠實、義務同將人當成目的。' },
          { name: '彌爾', note: '論真理、自由同壓制言論嘅害處。' },
          { name: '漢娜・雅倫特', note: '論公共現實同真理嘅脆弱。' },
        ],
      },
      civicGuardian: {
        title: '公民守護者',
        sub: '你保護自由同民主運作嘅條件：信任、規範同防線。',
        blindSpot: '你可能太快接受限制，睇唔到防線被濫用或擴張；亦可能低估異議同實驗修正制度嘅力量。',
        thinkers: [
          { name: '彌爾', note: '論自由同點解異議對社會好重要。' },
          { name: '羅爾斯', note: '論公平規則同公共理由。' },
          { name: '孔子', note: '論公共德性、角色同社會信任。' },
        ],
      },
      careCentered: {
        title: '關懷為本嘅實用主義者',
        sub: '你由生活現實出發：處境、關係同修可避免嘅傷害。',
        blindSpot: '你可能猶豫用硬規則，即使一致性可以保護弱者免於偏袒；亦可能揹太多「修補一切」嘅責任。',
        thinkers: [
          { name: '卡羅・吉利根', note: '論關懷、關係同道德聲音。' },
          { name: '瑪莎・努斯鮑姆', note: '論能力同實際生活中嘅尊嚴。' },
          { name: '亞里斯多德', note: '論實踐智慧同因境制宜嘅德性。' },
        ],
      },
      relationalProtector: {
        title: '關係守護者',
        sub: '你優先歸屬、信任同處境；盡量唔俾人俾僵化理想壓垮。',
        blindSpot: '你可能為和諧而犧牲問責；有啲模式要直白講出真相先會變。',
        thinkers: [
          { name: '卡羅・吉利根', note: '論關係同以關懷為中心嘅倫理。' },
          { name: '休謨', note: '論情感、忠誠同社會黏合。' },
          { name: '孔子', note: '論角色、關係同道德修養。' },
        ],
      },
      freedomFirst: {
        title: '自由優先嘅人文主義者',
        sub: '你保護自主同尊嚴，抗拒將人變成工具嘅控制。',
        blindSpot: '你可能抗拒約束，即使共同限制可以保護弱者免受可預見傷害；亦可能低估制度同誘因無形塑造揀擇嘅力量。',
        thinkers: [
          { name: '波娃', note: '論自由、真實同責任。' },
          { name: '彌爾', note: '論自由同傷害原則。' },
          { name: '沙特', note: '論徹底自由同自我書寫。' },
        ],
      },
      disciplinedBuilder: {
        title: '自律建造者',
        sub: '你相信自律、穩定習慣同有原則嘅規則，守護你想建立嘅生活。',
        blindSpot: '你可能過度重視控制同一致，即使彈性會令你更優雅地面對人性混亂；亦可能將「守規」同「達到規則本意」混淆。',
        thinkers: [
          { name: '亞里斯多德', note: '論德性係養成嘅品格同習慣。' },
          { name: '愛比克泰德', note: '論自控同能力範圍。' },
          { name: '孔子', note: '論修身同角色義務。' },
        ],
      },
      meaningSeeker: {
        title: '追尋意義嘅奮鬥者',
        sub: '你寧願成長多過安逸：目的、挑戰同貢獻對你好重要。',
        blindSpot: '你可能浪漫化掙扎，低估平靜、休息同簡單穩定都係真正嘅善；處境限制「成長」樣貌時，亦可能對自己或他人太苛刻。',
        thinkers: [
          { name: '維克多・法蘭克', note: '論意義係人類核心需要。' },
          { name: '老子', note: '論無為、自然同唔再硬拗。' },
          { name: '佛陀', note: '論苦、執著同中道。' },
          { name: '亞里斯多德', note: '論繁盛係活得出色，唔只感覺良好。' },
        ],
      },
      pragmaticReformer: {
        title: '務實改革者',
        sub: '你關心真理同進步，亦會睇誘因、時機同邊樣先真係行得通。',
        blindSpot: '你可能為「行得通」而偏離自己話過唔會跨嘅線；策略如果講得唔夠清楚，旁人可能誤以為你唔在乎原則。',
        thinkers: [
          { name: '彌爾', note: '論實驗、改革同減害。' },
          { name: '亞里斯多德', note: '論實踐智慧勝過死板規則。' },
          { name: '漢娜・雅倫特', note: '論政治、責任同公共真理。' },
        ],
      },
      longtermSteward: {
        title: '長遠託付者',
        sub: '你認真對待未來世代，努力做你會留低俾世界嘅託管者。',
        blindSpot: '你可能對已經好辛苦嘅人要求太多——犧牲抽象時較易贊成；長遠目標若變成神聖，亦可能滑向「目的合理化手段」。',
        thinkers: [
          { name: '德里克・帕菲特', note: '論未來世代同道德時間。' },
          { name: '羅爾斯', note: '論跨世代公平。' },
          { name: '彼得・辛格', note: '論超越眼前圈子嘅不偏私關懷。' },
        ],
      },
      harmonizer: {
        title: '社會調和者',
        sub: '你保護關係同共同信任；你相信社會唔只靠事實運行。',
        blindSpot: '你可能避開必要衝突，問題喺暗處爛大；亦可能低估問責——有時人要聽硬真相先會轉向。',
        thinkers: [
          { name: '孔子', note: '論和諧、角色同社會信任。' },
          { name: '休謨', note: '論情感、社會連結同道德心理。' },
          { name: '亞里斯多德', note: '論友誼同公民生活作倫理基礎。' },
        ],
      },
      balancedIntegrator: {
        title: '平衡整合者',
        sub: '你同時抱住衝突價值，用細緻揀選多過口號。',
        blindSpot: '你嘅細緻有時似猶豫；有啲時候清晰（就算唔完美）反而係最善意嘅揀擇。亦可能考慮太多而延遲需要承擔嘅決定。',
        thinkers: [
          { name: '亞里斯多德', note: '論中道、處境同實踐智慧。' },
          { name: '以賽亞・柏林', note: '論價值多元同難以避免嘅取捨。' },
          { name: '阿馬蒂亞・森', note: '論比較正義同現實取捨。' },
        ],
      },
    },
  };

  if (typeof window !== 'undefined' && window.APP_I18N_ZH_HANT) {
    window.APP_I18N_ZH_HANT.philosophyProfileCopy = copy;
  }
})();

/*
 * 渋谷区の歴史スポットデータ
 *
 * 追加・修正はこの配列を編集するだけで地図に反映されます。
 *   id        : 一意なID（英数字）
 *   name      : 名称
 *   era       : 時代区分（ERAS のキー）
 *   year      : 代表的な年（西暦）。年代スライダーの絞り込みと並び順に使用
 *   yearLabel : 表示用の年（「伝 1092年」など）
 *   lat,lng   : 緯度経度（世界測地系）。位置はおおよそです
 *   area      : 地域名
 *   summary   : 一行説明
 *   detail    : 詳細説明
 *   highlights: 現地での見どころ（任意）
 *   tags      : キーワード
 *   sources   : 参考にした資料（任意）
 *   dark      : 事件・事故・災害など負の歴史の種類（任意。「戦争」「事件」など）
 *
 * ※ 年代・由来には諸説あるものを含みます。「伝」「社伝」は伝承によるものです。
 */
window.ERAS = {
  ancient:  { label: "原始・古代",        color: "#8d6e63" },
  medieval: { label: "中世",              color: "#5d4037" },
  edo:      { label: "江戸",              color: "#c62828" },
  meiji:    { label: "明治・大正",        color: "#ef6c00" },
  prewar:   { label: "昭和（戦前・戦中）", color: "#558b2f" },
  postwar:  { label: "昭和（戦後）",       color: "#1565c0" },
  modern:   { label: "平成・令和",        color: "#6a1b9a" }
};

/*
 * 地域区分（絞り込み用）。各スポットの area に keywords のどれかが含まれれば、その地域に入ります。
 * 上から順に判定します。
 */
window.DISTRICTS = [
  { key: "harajuku", label: "原宿・表参道・神宮前", keywords: ["原宿", "表参道", "神宮前", "青山"] },
  { key: "sendagaya", label: "千駄ヶ谷", keywords: ["千駄ヶ谷"] },
  { key: "west", label: "上原・大山町・初台・幡ヶ谷・笹塚・本町", keywords: ["上原", "大山町", "初台", "幡ヶ谷", "笹塚", "本町", "西原"] },
  { key: "shoto", label: "松濤・神泉・円山町・南平台", keywords: ["松濤", "神泉", "円山町", "南平台"] },
  { key: "ebisu", label: "恵比寿・代官山・広尾", keywords: ["恵比寿", "代官山", "猿楽", "鉢山", "広尾"] },
  { key: "shibuya", label: "渋谷駅周辺・道玄坂・宇田川町", keywords: ["渋谷", "道玄坂", "宇田川", "センター街"] },
  { key: "yoyogi", label: "代々木・代々木公園・神南・富ヶ谷", keywords: ["代々木", "神南", "富ヶ谷"] },
  { key: "higashi", label: "東（國學院・氷川神社周辺）", keywords: ["東"] }
];

window.SPOTS = [
  // ---------------- 原始・古代 ----------------
  {
    id: "yoyogi-hachiman-iseki",
    name: "代々木八幡遺跡",
    era: "ancient",
    year: -2500,
    yearLabel: "縄文時代中期（約4,500年前）",
    lat: 35.6696, lng: 139.6858,
    area: "代々木",
    summary: "代々木八幡宮の境内にある縄文時代の集落跡。",
    detail: "1950年、代々木八幡宮の宮司が境内を掃除中に土器片を見つけたことから発掘が始まり、竪穴住居跡2軒や多数の土器・石器が出土しました。出土した土器は縄文時代中期後半の加曽利E式が中心で、約4,500年前の集落と考えられています。境内は渋谷区指定史跡です。",
    highlights: ["復元された竪穴住居", "出土品の展示施設"],
    tags: ["縄文", "遺跡", "竪穴住居"],
    sources: [
      { title: "代々木八幡宮 境内案内", url: "https://yoyogihachimangu.or.jp/pdf/keidaimap.pdf" }
    ]
  },
  {
    id: "sarugaku-kodai-jukyo",
    name: "猿楽古代住居跡公園",
    era: "ancient",
    year: 100,
    yearLabel: "弥生時代後期（約2,000年前）",
    lat: 35.6514, lng: 139.6986,
    area: "代官山・鉢山町",
    summary: "渋谷で最初に見つかった弥生時代の遺跡。",
    detail: "1977年の発掘で出土した土器から、約2,000年前の弥生時代後期の住居跡であることがわかりました。1978年に住居が復元されましたが不審火で焼失し、現在は住居跡を覆って保存しています。渋谷区指定史跡です。",
    tags: ["弥生", "遺跡", "代官山"],
    sources: [
      { title: "シブヤ散歩新聞 渋谷歴史散歩 No.8", url: "http://shibuyasanpokaigi.jp/shinbun/index.php/2017/07/27/history8-sarugakukodaizyuukyoato/" }
    ]
  },
  {
    id: "sarugakuzuka",
    name: "猿楽塚（猿楽塚古墳）",
    era: "ancient",
    year: 600,
    yearLabel: "6〜7世紀（古墳時代）",
    lat: 35.6497, lng: 139.7003,
    area: "代官山・猿楽町",
    summary: "区内に唯一現存する高塚古墳。",
    detail: "直径約20m、高さ約5mの円墳とされ、代官山ヒルサイドテラスの敷地内に残っています。塚の上には1920年に祠が建てられ、現在は猿楽神社となっています。「猿楽町」の町名の由来とされ、渋谷区指定文化財です。",
    highlights: ["おしゃれな街並みの中に残る古墳", "塚の上の猿楽神社"],
    tags: ["古墳", "代官山", "地名"],
    sources: [
      { title: "猿楽塚古墳（agataJapan）", url: "https://agatajapan.com/tokyo/guide/sarugakuzuka-burial-mound/" }
    ]
  },

  // ---------------- 中世 ----------------
  {
    id: "konno-hachimangu",
    name: "金王八幡宮（渋谷城跡）",
    era: "medieval",
    year: 1092,
    yearLabel: "社伝 1092年（寛治6年）創建",
    lat: 35.6566, lng: 139.7043,
    area: "渋谷",
    summary: "渋谷氏の居城・渋谷城の跡に建つ、渋谷の名の起こりにゆかりの深い神社。",
    detail: "社伝では1092年に平武綱が創建したとされます。その子孫の渋谷重家が「渋谷」の姓を賜り、この地に渋谷城を築いて渋谷氏の祖となったと伝わります。渋谷城は1524年（大永4年）、北条氏綱と上杉朝興の戦いのさなかに北条方の別動隊に焼き払われました。現在の社殿は、徳川家光が三代将軍に決まった際、守役の青山忠俊と乳母の春日局が1612年（慶長17年）に造営を始めたものです。",
    highlights: ["境内に残る「渋谷城砦の石」", "江戸初期の彩色社殿", "名木「金王桜」"],
    tags: ["渋谷氏", "渋谷城", "神社", "春日局"],
    sources: [
      { title: "金王八幡宮 由緒", url: "https://www.konno-hachimangu.jp/yuisho.html" }
    ]
  },
  {
    id: "shibuya-hikawa",
    name: "渋谷氷川神社",
    era: "medieval",
    year: 1100,
    yearLabel: "創建年不詳（渋谷最古の神社とされる）",
    lat: 35.6517, lng: 139.7090,
    area: "東",
    summary: "渋谷最古とされる神社。江戸郊外三大相撲「金王相撲」の地。",
    detail: "1605年（慶長10年）の縁起には、日本武尊の東征の折にこの地に素盞鳴尊を祀ったと記されています。約4千坪の広い境内を持ち、江戸時代には祭礼で行われた「金王相撲」が、世田谷八幡宮・大井鹿嶋神社の相撲と並ぶ江戸郊外三大相撲の一つとして知られました。",
    highlights: ["金王相撲の土俵跡", "鎮守の森"],
    tags: ["神社", "相撲", "江戸郊外三大相撲"],
    sources: [
      { title: "シブヤ散歩新聞 渋谷歴史散歩 No.4", url: "http://shibuyasanpokaigi.jp/shinbun/index.php/2017/05/11/history4-shibuyahikawazinzya2/" }
    ]
  },
  {
    id: "yoyogi-hachimangu",
    name: "代々木八幡宮",
    era: "medieval",
    year: 1212,
    yearLabel: "社伝 1212年（建暦2年）創建",
    lat: 35.6700, lng: 139.6865,
    area: "代々木",
    summary: "鎌倉時代の創建と伝わる代々木の鎮守。",
    detail: "二代将軍源頼家の側近・近藤三郎是茂の家来だった荒井外記智明が、頼家暗殺ののちこの地に隠れ住み、1212年に霊夢のお告げを受けて鶴岡八幡宮を勧請したのが始まりとされます。現在も例祭は創建の日にちなむ9月23日に行われています。",
    tags: ["神社", "鎌倉", "代々木"],
    sources: [
      { title: "代々木八幡宮 由緒", url: "https://www.yoyogihachimangu.or.jp/about.html" }
    ]
  },
  {
    id: "dogenzaka",
    name: "道玄坂",
    era: "medieval",
    year: 1213,
    yearLabel: "鎌倉時代（地名の由来とされる伝承）",
    lat: 35.6575, lng: 139.6975,
    area: "道玄坂",
    summary: "大和田道玄の名にちなむと伝わる、大山街道の坂。",
    detail: "1213年の和田合戦で滅んだ和田義盛の一族・大和田太郎道玄が、この坂に潜んで山賊をしていたという伝承が名の由来とされます。ほかに「道玄庵」という寺の名から来たという説もあります。道玄坂は大山街道の一部で、江戸時代から人と物資が行き交いました。坂の途中には、この近くに住んだ与謝野晶子の歌碑があります。",
    highlights: ["与謝野晶子の歌碑・道玄坂の由来碑（道玄坂2丁目）"],
    tags: ["坂", "大山街道", "地名", "与謝野晶子"],
    sources: [
      { title: "シブヤ散歩新聞 渋谷坂散歩 No.1 道玄坂", url: "http://shibuyasanpokaigi.jp/shinbun/index.php/2016/10/06/hill1/" },
      { title: "シブヤ散歩新聞 渋谷坂散歩 No.2 道玄坂", url: "http://shibuyasanpokaigi.jp/shinbun/index.php/2016/10/07/hill2/" }
    ]
  },

  // ---------------- 江戸 ----------------
  {
    id: "miyamasu-mitake",
    name: "宮益御嶽神社と宮益坂",
    era: "edo",
    year: 1700,
    yearLabel: "1700年（元禄13年）宮益町と改称",
    lat: 35.6601, lng: 139.7040,
    area: "渋谷",
    summary: "「宮益坂」の名の由来となった神社。狛犬はニホンオオカミ。",
    detail: "宮益坂の途中にある神社で、1570年創建、1640年頃再建と伝わります。1700年に「渋谷新町」が「宮益町」と改められたのは、この御嶽神社にちなむといわれ、坂の名にもなりました。1870年には明治天皇が駒場の練兵場へ向かう途中、拝殿で小休止しています。",
    highlights: ["ニホンオオカミの狛犬（初代は延宝年間の作）"],
    tags: ["神社", "坂", "地名", "オオカミ"],
    sources: [
      { title: "神社メモ 宮益御嶽神社", url: "https://jinjamemo.com/archives/miyamasumitakejinja.html" }
    ]
  },
  {
    id: "tamagawa-josui",
    name: "玉川上水旧水路緑道",
    era: "edo",
    year: 1653,
    yearLabel: "1653年（承応2年）開削",
    lat: 35.6757, lng: 139.6720,
    area: "笹塚・幡ヶ谷・初台",
    summary: "江戸の人々の飲み水を運んだ上水の跡。",
    detail: "玉川兄弟が多摩川の羽村から四谷大木戸まで、わずか7か月余りで掘り上げた上水です。渋谷区の北部では甲州街道に沿って流れていました。現在は暗渠となり、笹塚から代々木まで6区間・約2.6kmの緑道として整備されています。",
    highlights: ["笹塚・幡ヶ谷・西原・初台などに続く緑道", "水路に架かっていた橋の名残"],
    tags: ["上水", "緑道", "暗渠", "甲州街道"],
    sources: [
      { title: "渋谷区 玉川上水旧水路緑道再整備", url: "https://www.city.shibuya.tokyo.jp/kankyo/sasazuka/tamagawa/tamagawajosui_saiseibi.html" },
      { title: "渋谷区立図書館 玉川上水跡を逍遥く一冊", url: "https://www.lib.city.shibuya.tokyo.jp/shibuya/shibuya-more/tamakawa-cleanwater/" }
    ]
  },
  {
    id: "shounji",
    name: "祥雲寺",
    era: "edo",
    year: 1668,
    yearLabel: "1668年（寛文8年）頃 現在地へ移転",
    lat: 35.6505, lng: 139.7195,
    area: "広尾",
    summary: "福岡藩主・黒田家の江戸の菩提寺。",
    detail: "1623年、福岡藩2代藩主の黒田忠之が父・黒田長政の霊を弔うため赤坂に創建しました。麻布台への移転を経て、1668年の大火を機に現在地へ移りました。江戸時代には黒田家のほか、秋月藩黒田家や久留米藩有馬家など多くの大名家の菩提寺となりました。",
    highlights: ["黒田長政の墓（高さ約6mの笠塔婆、渋谷区指定史跡）"],
    tags: ["寺", "大名", "黒田長政", "広尾"],
    sources: [
      { title: "祥雲寺（東京寺社めぐり）", url: "https://tesshow.jp/shibuya/temple_hiroo_shoun.html" }
    ]
  },
  {
    id: "hatonomori",
    name: "鳩森八幡神社と千駄ヶ谷の富士塚",
    era: "edo",
    year: 1789,
    yearLabel: "1789年（寛政元年）富士塚築造",
    lat: 35.6803, lng: 139.7084,
    area: "千駄ヶ谷",
    summary: "元の場所に残る都内最古の富士塚。",
    detail: "江戸時代の富士信仰（富士講）によって築かれた富士塚で、江戸八富士の一つに数えられました。関東大震災後に修復されましたが、移築や大規模な改修はされておらず、東京都の有形民俗文化財に指定されています。神社自体は860年に正式に八幡社になったと伝わります。",
    highlights: ["実際に登れる富士塚", "山頂の奥宮と七合目の洞窟"],
    tags: ["富士講", "神社", "千駄ヶ谷"],
    sources: [
      { title: "鳩森八幡神社 千駄ヶ谷の冨士塚", url: "https://www.hatonomori-shrine.or.jp/pages/74/" }
    ]
  },
  {
    id: "onden-suisha",
    name: "穏田神社と「穏田の水車」",
    era: "edo",
    year: 1831,
    yearLabel: "1830〜32年頃（北斎『冨嶽三十六景』）",
    lat: 35.6676, lng: 139.7056,
    area: "神宮前（旧穏田村）",
    summary: "北斎が描いた、渋谷川の水車がある農村・穏田。",
    detail: "現在の原宿・神宮前あたりは江戸時代「穏田村」という農村で、渋谷川（穏田川）が流れていました。葛飾北斎は『冨嶽三十六景』の一枚に、米つきや粉ひきに使われた水車と遠くの富士山を描いています。穏田神社はこの村の鎮守です。",
    highlights: ["北斎の絵にちなんだ御朱印", "渋谷川の暗渠「キャットストリート」が近くを通る"],
    tags: ["浮世絵", "北斎", "渋谷川", "原宿"],
    sources: [
      { title: "文化遺産オンライン 冨嶽三十六景《穏田乃水車》", url: "https://online.bunka.go.jp/heritages/detail/197728" }
    ]
  },
  {
    id: "nabeshima-shoto",
    name: "鍋島松濤公園",
    era: "edo",
    year: 1750,
    yearLabel: "江戸時代（紀州徳川家下屋敷）",
    lat: 35.6609, lng: 139.6918,
    area: "松濤",
    summary: "大名屋敷から茶園を経て公園になった「松濤」の地名の由来地。",
    detail: "江戸時代は紀州徳川家の下屋敷でした。1876年に旧佐賀藩主の鍋島家に払い下げられ、鍋島家は茶園「松濤園」を開いて「松濤」の銘で茶を売りました。これが松濤の地名の由来です。1932年に湧水の池を中心とした児童遊園として整備され、東京市に寄付されました。",
    highlights: ["今も湧き水が残る池"],
    tags: ["大名屋敷", "松濤", "公園", "湧水"],
    sources: [
      { title: "渋谷区 鍋島松濤公園", url: "https://www.city.shibuya.tokyo.jp/shisetsu/koen/kuritsu-koen/park_nabesima.html" }
    ]
  },

  // ---------------- 明治・大正 ----------------
  {
    id: "aoyama-gakuin",
    name: "青山学院",
    era: "meiji",
    year: 1883,
    yearLabel: "1883年（明治16年）青山で開校",
    lat: 35.6614, lng: 139.7090,
    area: "渋谷（青山）",
    summary: "渋谷が「文教の街」となるきっかけの一つ。",
    detail: "青山学院の前身・東京英和学校が1883年に青山の地に開校しました。その後も國學院大學などの学校が集まり、渋谷は文教の街としても発展していきます。",
    tags: ["学校", "文教", "青山"],
    sources: [
      { title: "このまちアーカイブス 渋谷 文教の街としての発展", url: "https://smtrc.jp/town-archives/city/shibuya/p03.html" }
    ]
  },
  {
    id: "shibuya-station",
    name: "渋谷駅",
    era: "meiji",
    year: 1885,
    yearLabel: "1885年（明治18年）3月1日開業",
    lat: 35.6580, lng: 139.7016,
    area: "渋谷",
    summary: "日本鉄道品川線（現在の山手線）の駅として開業。",
    detail: "開業当時の渋谷は田園地帯で、1日の利用者はわずか十数人だったといわれます。その後、玉川電気鉄道（1907年）、東横線、東京高速鉄道（現在の銀座線、1938年）などが次々と乗り入れ、日本有数のターミナル駅に発展しました。",
    tags: ["鉄道", "駅", "山手線"],
    sources: [
      { title: "このまちアーカイブス 渋谷「渋谷駅」の誕生", url: "https://smtrc.jp/town-archives/city/shibuya/p02.html" },
      { title: "東急 渋谷発展の歴史", url: "https://www.tokyu.co.jp/shibuya-redevelopment/history/past/" }
    ]
  },
  {
    id: "yebisu",
    name: "恵比寿（ヱビスビール発祥の地）",
    era: "meiji",
    year: 1890,
    yearLabel: "1890年（明治23年）ヱビスビール発売",
    lat: 35.6421, lng: 139.7137,
    area: "恵比寿",
    summary: "ビールの商品名が駅名になり、やがて地名になった場所。",
    detail: "1887年に設立された日本麦酒醸造会社（現在のサッポロビール）が、この地の工場で1890年にヱビスビールを発売しました。1901年、ビール出荷専用の貨物駅として「恵比寿駅」が開業し、1906年に旅客営業を始めます。商品名が駅名、さらに地名になった極めて珍しい例です。工場跡地は1994年に恵比寿ガーデンプレイスになりました。",
    highlights: ["恵比寿ガーデンプレイス内のヱビスビールの博物館"],
    tags: ["ビール", "産業", "地名", "駅"],
    sources: [
      { title: "サッポロビール 1901年 商品名が駅名、地名に", url: "https://www.sapporobeer.jp/company/history/1901.html" }
    ]
  },
  {
    id: "yoyogi-first-flight",
    name: "日本初飛行の地（代々木練兵場）",
    era: "meiji",
    year: 1910,
    yearLabel: "1910年（明治43年）12月19日",
    lat: 35.6717, lng: 139.6949,
    area: "代々木公園",
    summary: "日本で初めて動力飛行機が公式に飛んだ場所。",
    detail: "代々木練兵場は1909年、閉鎖された青山練兵場の代わりとして陸軍刑務所とともに設けられました。この練兵場で、徳川好敏大尉がフランス製の複葉機で高度70m・約3km・4分間の飛行に成功し、同じ日の午後には日野熊蔵大尉もドイツ製の単葉機で飛行しました。1974年、代々木公園内に「日本初飛行の地」の記念碑と二人の胸像が建てられました。",
    highlights: ["記念碑と徳川・日野両大尉の胸像"],
    tags: ["飛行機", "陸軍", "代々木公園"],
    sources: [
      { title: "国立国会図書館 本の万華鏡 日本人、初飛行へ", url: "https://www.ndl.go.jp/kaleido/entry/5/1.html" }
    ]
  },
  {
    id: "haru-no-ogawa",
    name: "「春の小川」の河骨川",
    era: "meiji",
    year: 1912,
    yearLabel: "1912年（大正元年）発表",
    lat: 35.6693, lng: 139.6840,
    area: "代々木",
    summary: "唱歌「春の小川」のモデルとされる小川の跡。",
    detail: "作詞者の高野辰之は当時の代々幡村（現在の代々木3丁目）に住んでおり、近くを流れる宇田川の支流・河骨川（こうほねがわ）の風景を詞にしたとされます。川は1964年、東京オリンピックに向けた整備で暗渠になりました。",
    highlights: ["小田急線沿い・代々木八幡駅近くの歌碑"],
    tags: ["唱歌", "川", "暗渠"],
    sources: [
      { title: "東京都建設局 渋谷川・古川流域 春の小川", url: "https://www.kensetsu.metro.tokyo.lg.jp/river/kankyo/ryuiki/sibufuru-title/sh-haru" }
    ]
  },
  {
    id: "asakura-house",
    name: "旧朝倉家住宅",
    era: "meiji",
    year: 1919,
    yearLabel: "1919年（大正8年）建築",
    lat: 35.6490, lng: 139.7022,
    area: "代官山・猿楽町",
    summary: "関東大震災以前の大正期の邸宅と庭園が残る国の重要文化財。",
    detail: "東京府議会議長や渋谷区議会議長を務めた朝倉虎治郎が、猿楽町の斜面を生かして建てた和風住宅です。客をもてなす部屋や茶室など用途ごとに異なる意匠を持ち、庭園と一体で保存されています。2004年に国の重要文化財に指定され、一般公開されています。",
    highlights: ["斜面を生かした回遊式庭園", "秋の紅葉"],
    tags: ["重要文化財", "邸宅", "庭園", "代官山"],
    sources: [
      { title: "渋谷区 重要文化財 旧朝倉家住宅", url: "https://www.city.shibuya.tokyo.jp/shisetsu/bunka-shisetsu/asakura/asakura_00004.html" }
    ]
  },
  {
    id: "meiji-jingu",
    name: "明治神宮",
    era: "meiji",
    year: 1920,
    yearLabel: "1920年（大正9年）鎮座",
    lat: 35.6764, lng: 139.6993,
    area: "代々木",
    summary: "明治天皇と昭憲皇太后を祀る神社と、人の手で造られた森。",
    detail: "全国から献木された木々を植え、長い年月をかけて自然の森になるよう計画された「永遠の杜」です。明治神宮の鎮座にあわせて表参道も参道として整備されました。1945年4月14日未明の空襲で本殿・拝殿など中心部の社殿が焼失し、1958年に再建されました。南・東・西の神門などは創建当時の建物が残っています。",
    highlights: ["創建当時から残る神門"],
    tags: ["神社", "森", "原宿", "空襲"],
    sources: [
      { title: "70seeds 日本復興の象徴「明治神宮」", url: "https://www.70seeds.jp/meijijingu-102/" }
    ]
  },
  {
    id: "omotesando-keyaki",
    name: "表参道のケヤキ並木",
    era: "meiji",
    year: 1921,
    yearLabel: "1920年 参道整備／1921年 ケヤキ植樹",
    lat: 35.6680, lng: 139.7070,
    area: "表参道",
    summary: "明治神宮の参道として整備された並木道。",
    detail: "明治神宮の鎮座にともない参道として整備され、翌年に両側へ201本のケヤキが植えられました。1945年の空襲で大半が焼けましたが、1948年から地元の造園業者らが私財を投じて植え直し、現在の並木がよみがえりました。",
    tags: ["並木", "参道", "表参道"],
    sources: [
      { title: "FASHIONSNAP 表参道のケヤキ並木", url: "https://www.fashionsnap.com/article/2025-11-29/omotesando-keyaki/" }
    ]
  },
  {
    id: "kokugakuin",
    name: "國學院大學",
    era: "meiji",
    year: 1923,
    yearLabel: "1923年（大正12年）渋谷に移転",
    lat: 35.6546, lng: 139.7108,
    area: "東",
    summary: "1882年創立の皇典講究所を母体とする大学。",
    detail: "1882年に古典研究と神職養成のために創立された皇典講究所が、1890年に國學院を設立しました。1923年5月、現在の渋谷キャンパス（旧若木町）へ移転しています。",
    tags: ["学校", "文教", "大学"],
    sources: [
      { title: "國學院大學 沿革", url: "https://www.kokugakuin.ac.jp/about/introduction/p6" }
    ]
  },
  {
    id: "harajuku-station",
    name: "原宿駅（旧駅舎跡）",
    era: "meiji",
    year: 1924,
    yearLabel: "1924年（大正13年）旧駅舎竣工",
    lat: 35.6702, lng: 139.7027,
    area: "原宿",
    summary: "尖塔が目印だった都内最古の木造駅舎があった場所。",
    detail: "「原宿」は、鎌倉と奥州を結んだ鎌倉街道の宿駅（宿場）に由来し、萱やススキの茂る原っぱだったことから「原」の字がついたとされます。1924年に建てられた旧駅舎は、尖塔をのせたハーフティンバー風のデザインで親しまれ、晩年は都内最古の木造駅舎でした。耐火基準を満たさないため2020年3月に新駅舎へ役目を譲り、同年に解体されました。JR東日本は外観を再現した建物を建てるとしています。",
    tags: ["駅", "建築", "原宿"],
    sources: [
      { title: "鉄道コム 原宿駅の木造駅舎が再現で復活へ", url: "https://www.tetsudo.com/column/866/" },
      { title: "nippon.com 原宿（JY19）", url: "https://www.nippon.com/ja/japan-topics/c13309/" }
    ]
  },

  // ---------------- 昭和（戦前・戦中） ----------------
  {
    id: "dojunkai-aoyama",
    name: "同潤会青山アパート跡（表参道ヒルズ）",
    era: "prewar",
    year: 1927,
    yearLabel: "1927年（昭和2年）竣工",
    lat: 35.6674, lng: 139.7087,
    area: "表参道",
    summary: "関東大震災の復興住宅として建てられた鉄筋コンクリート造アパート。",
    detail: "震災復興のために設立された同潤会が建てた3階建て・6棟の近代的な集合住宅で、75年にわたり表参道のシンボルでした。2003年に解体され、跡地には安藤忠雄設計の表参道ヒルズ（2006年）が建てられています。",
    highlights: ["当時の外観を再現した「同潤館」"],
    tags: ["震災復興", "集合住宅", "表参道"],
    sources: [
      { title: "東京ガス ガスミュージアム 同潤会青山アパートと表参道", url: "https://www.gasmuseum.jp/blog/20230808-1/" }
    ]
  },
  {
    id: "daikanyama-dojunkai",
    name: "同潤会代官山アパート跡（代官山アドレス）",
    era: "prewar",
    year: 1927,
    yearLabel: "1927年（昭和2年）完成",
    lat: 35.6508, lng: 139.7045,
    area: "代官山",
    summary: "代官山の街の原点となった震災復興アパート。",
    detail: "関東大震災の復興事業として、学校跡地に建てられた低層のアパート群です。1996年に解体され、500人を超える権利者が15年かけて合意した再開発により、2000年に「代官山アドレス」として生まれ変わりました。",
    tags: ["震災復興", "集合住宅", "代官山", "再開発"],
    sources: [
      { title: "東京新聞 東京舞台さんぽ 同潤会代官山アパートメント", url: "https://www.tokyo-np.co.jp/article/208618" }
    ]
  },
  {
    id: "koga-masao",
    name: "古賀政男音楽博物館（古賀政男邸跡）",
    era: "prewar",
    year: 1932,
    yearLabel: "1932年 古賀政男が居住／1997年 博物館開館",
    lat: 35.6674, lng: 139.6797,
    area: "代々木上原",
    summary: "昭和の作曲家・古賀政男が暮らした地。",
    detail: "「古賀メロディー」で知られる作曲家の古賀政男が1932年から住んだ邸宅の跡地に、1997年に音楽博物館が開館しました。古賀は代々木上原に音楽家の村をつくる構想を持っていたといわれます。",
    tags: ["音楽", "作曲家", "博物館"],
    sources: [
      { title: "古賀政男音楽博物館", url: "https://www.koga.or.jp/" }
    ]
  },
  {
    id: "hachiko",
    name: "忠犬ハチ公像",
    era: "prewar",
    year: 1934,
    yearLabel: "1934年（昭和9年）初代像建立",
    lat: 35.6590, lng: 139.7006,
    area: "渋谷",
    summary: "亡き飼い主を渋谷駅で待ち続けた秋田犬の像。",
    detail: "東京帝国大学教授・上野英三郎の死後も、ハチは渋谷駅で帰りを待ち続けました。1934年、彫刻家・安藤照による像が建てられましたが、戦時中の金属供出で失われ、現在の像は1948年に子の安藤士が再建したものです。",
    tags: ["ハチ公", "待ち合わせ", "渋谷駅"],
    sources: [
      { title: "日本経済新聞「ハチ公」が見た100年", url: "https://www.nikkei.com/article/DGXZQOUE102RZ0Q3A111C2000000/" }
    ]
  },
  {
    id: "toyoko-dept",
    name: "東横百貨店（東急東横店）跡",
    era: "prewar",
    year: 1934,
    yearLabel: "1934年（昭和9年）11月開業",
    lat: 35.6586, lng: 139.7026,
    area: "渋谷",
    summary: "関東初の私鉄ターミナルデパート。",
    detail: "東京横浜電鉄（現在の東急）が駅と一体で開いた百貨店で、渋谷が「駅に人が集まる街」になるきっかけとなりました。1938年に完成した玉電ビル（のちの西館）の3〜4階には東京高速鉄道（現在の銀座線）の渋谷駅が入りました。東急東横店は2020年3月、85年の歴史に幕を下ろしました。",
    tags: ["百貨店", "鉄道", "銀座線", "再開発"],
    sources: [
      { title: "鹿島建設 東横百貨店―ターミナルビルのさきがけ", url: "https://www.kajima.co.jp/gallery/kiseki/kiseki56/index-j.html" },
      { title: "シブヤ経済新聞 東急東横店ヒストリー", url: "https://www.shibukei.com/column/49/" }
    ]
  },
  {
    id: "tokyo-camii",
    name: "東京ジャーミイ",
    era: "prewar",
    year: 1938,
    yearLabel: "1938年 東京回教礼拝堂落成／2000年 現在の建物",
    lat: 35.6687, lng: 139.6765,
    area: "大山町",
    summary: "日本最大級のモスク。前身は戦前の東京回教礼拝堂。",
    detail: "前身の「東京回教礼拝堂」は1938年5月に落成した木造建築でした。老朽化で取り壊されたのち、トルコ政府の支援で再建され、2000年に現在のオスマン様式の建物が完成しました。水とコンクリート以外の建材はトルコから運ばれたといわれます。",
    highlights: ["見学可能な礼拝堂", "トルコ文化センター"],
    tags: ["モスク", "建築", "国際交流"],
    sources: [
      { title: "じゃらんニュース 東京ジャーミイ", url: "https://www.jalan.net/news/article/575801/" }
    ]
  },
  {
    id: "togo-jinja",
    name: "東郷神社",
    era: "prewar",
    year: 1940,
    yearLabel: "1940年（昭和15年）創建",
    lat: 35.6712, lng: 139.7045,
    area: "神宮前",
    summary: "日露戦争の連合艦隊司令長官・東郷平八郎を祀る神社。",
    detail: "竹下通りのすぐ近くにありながら、池のある静かな境内が広がります。",
    tags: ["神社", "原宿"]
  },
  {
    id: "yamanote-kushu",
    name: "山の手大空襲と表参道",
    era: "prewar",
    dark: "戦争",
    year: 1945,
    yearLabel: "1945年（昭和20年）5月25日",
    lat: 35.6655, lng: 139.7118,
    area: "表参道・青山",
    summary: "表参道が炎に包まれた「もうひとつの東京大空襲」。",
    detail: "1945年5月25〜26日の山の手空襲では、東京で3,000人以上が亡くなりました。表参道ではケヤキ並木が燃え、青山通りとの交差点付近では火と熱風で逃げ場を失った多くの人が犠牲になりました。",
    highlights: ["焼夷弾で削られたといわれる跡が残る表参道の石灯籠"],
    tags: ["戦争", "空襲", "表参道"],
    sources: [
      { title: "NHK 表参道にも戦火が 山の手空襲から81年", url: "https://news.web.nhk/shutoken/articles/101/032/35" },
      { title: "戦跡紀行 表参道の戦跡散策", url: "https://senseki-kikou.net/?p=16134" }
    ]
  },

  // ---------------- 昭和（戦後） ----------------
  {
    id: "washington-heights",
    name: "ワシントンハイツ跡（代々木公園）",
    era: "postwar",
    year: 1946,
    yearLabel: "1946年〜1964年",
    lat: 35.6725, lng: 139.6960,
    area: "代々木公園",
    summary: "戦後、旧練兵場に造られた米軍の家族用住宅地。",
    detail: "敗戦後、代々木練兵場の跡地に米軍将校と家族のための住宅地「ワシントンハイツ」が造られました。1964年8月に全面返還され、東京オリンピックの選手村として使われたのち、1967年に代々木公園として開園しました。",
    highlights: ["選手村の宿舎として使われた「オリンピック記念宿舎」"],
    tags: ["占領期", "米軍", "オリンピック"],
    sources: [
      { title: "シブヤ経済新聞 オリンピック記念宿舎", url: "https://www.shibukei.com/headline/18895/" }
    ]
  },
  {
    id: "tokyu-bunka-kaikan",
    name: "東急文化会館跡（渋谷ヒカリエ）",
    era: "postwar",
    year: 1956,
    yearLabel: "1956年 開業 → 2012年 ヒカリエ開業",
    lat: 35.6590, lng: 139.7036,
    area: "渋谷",
    summary: "映画館とプラネタリウムで親しまれた文化の殿堂。",
    detail: "1956年に開業した東急文化会館には映画館や商業施設、8階には五島プラネタリウムがありました。プラネタリウムは2001年、会館は2003年に閉館し、跡地に渋谷ヒカリエ（2012年）が建てられました。",
    tags: ["映画館", "プラネタリウム", "再開発"],
    sources: [
      { title: "シブヤ経済新聞 サヨナラ「渋谷東急文化会館」", url: "https://www.shibukei.com/special/83/" }
    ]
  },
  {
    id: "yoyogi-gym",
    name: "国立代々木競技場",
    era: "postwar",
    year: 1964,
    yearLabel: "1964年（昭和39年）竣工",
    lat: 35.6675, lng: 139.7003,
    area: "神南",
    summary: "丹下健三設計、東京オリンピックのために建てられた吊り屋根の体育館。",
    detail: "吊り構造による大胆な屋根が特徴の、戦後日本建築の代表作です。2021年に国の重要文化財に指定されました。",
    tags: ["オリンピック", "建築", "丹下健三", "重要文化財"],
    sources: [
      { title: "国指定文化財等データベース", url: "https://kunishitei.bunka.go.jp/bsys/maindetails/102/00005355" }
    ]
  },
  {
    id: "226-memorial",
    name: "二・二六事件慰霊像",
    era: "postwar",
    dark: "事件",
    year: 1965,
    yearLabel: "1965年（昭和40年）建立",
    lat: 35.6636, lng: 139.6987,
    area: "宇田川町",
    summary: "処刑が行われた陸軍刑務所の跡に建つ慰霊像。",
    detail: "1936年の二・二六事件から30年にあたる1965年、遺族らでつくる仏心会が建てました。処刑された将校らだけでなく、斎藤実内大臣や高橋是清蔵相、警護の警察官など、事件で亡くなったすべての人を慰霊しています。",
    tags: ["二・二六事件", "慰霊", "陸軍"],
    sources: [
      { title: "NEWSポストセブン 渋谷に建つ慰霊像の不思議", url: "https://www.news-postseven.com/archives/20200711_1576075.html" }
    ]
  },
  {
    id: "miyashita-park",
    name: "宮下公園（MIYASHITA PARK）",
    era: "postwar",
    year: 1966,
    yearLabel: "1966年 屋上公園／2020年 MIYASHITA PARK",
    lat: 35.6617, lng: 139.7018,
    area: "神宮前",
    summary: "東京初の屋上公園として生まれた公園。",
    detail: "1966年、駐車場の上に東京で初めての屋上公園として整備されました。耐震性やバリアフリーの課題から再整備され、2020年6月、商業施設とホテルを備えた4階建ての立体都市公園「MIYASHITA PARK」として開業しました。",
    tags: ["公園", "再開発"],
    sources: [
      { title: "三井不動産「MIYASHITA PARK」2020年6月グランドオープン", url: "https://www.mitsuifudosan.co.jp/corporate/news/2020/0120/" }
    ]
  },
  {
    id: "hillside-terrace",
    name: "代官山ヒルサイドテラス",
    era: "postwar",
    year: 1969,
    yearLabel: "1969年 第1期竣工（〜1998年）",
    lat: 35.6494, lng: 139.6992,
    area: "代官山",
    summary: "30年かけて育てられた、代官山の街並みの原点。",
    detail: "地主の朝倉家が建築家・槇文彦に設計を依頼し、1969年の第1期から1998年まで30年をかけて旧山手通り沿いに建てられた住宅・店舗の複合施設です。低層で調和のとれた街並みは、現在の代官山のイメージをつくりました。",
    tags: ["建築", "槇文彦", "代官山", "街づくり"],
    sources: [
      { title: "artscape《ヒルサイドテラス》槇文彦", url: "https://artscape.jp/artword/6585/" }
    ]
  },
  {
    id: "parco",
    name: "渋谷パルコと公園通り",
    era: "postwar",
    year: 1973,
    yearLabel: "1973年（昭和48年）6月開業",
    lat: 35.6619, lng: 139.6987,
    area: "宇田川町",
    summary: "「公園通り」「スペイン坂」などの名付けで街の姿を変えた商業施設。",
    detail: "区役所通りの坂の中腹に開業し、通りを「公園通り」と呼ぶなど、ストリートに名前を付ける街づくりで話題になりました。演劇・アート・広告などで渋谷の若者文化を牽引しました。",
    tags: ["ファッション", "若者文化", "街づくり"],
    sources: [
      { title: "シブヤ経済新聞「渋谷パルコ」復活へ", url: "https://www.shibukei.com/column/39/" }
    ]
  },
  {
    id: "shirane-museum",
    name: "白根記念渋谷区郷土博物館・文学館",
    era: "postwar",
    year: 1975,
    yearLabel: "1975年（昭和50年）開館",
    lat: 35.6534, lng: 139.7103,
    area: "東",
    summary: "渋谷の歴史を学ぶならまずここ。",
    detail: "区議会議員だった白根全忠が寄贈した宅地・邸宅・資料をもとに「白根記念郷土文化館」として開館しました。2005年に全面改築し、渋谷ゆかりの文学者を紹介する文学館を併設しています。",
    highlights: ["渋谷の歴史の常設展示", "渋谷ゆかりの文学者の展示"],
    tags: ["博物館", "郷土史", "文学"],
    sources: [
      { title: "白根記念渋谷区郷土博物館・文学館", url: "https://shibuya-muse.jp/" }
    ]
  },
  {
    id: "hokoten",
    name: "原宿の歩行者天国（ホコ天）",
    era: "postwar",
    year: 1977,
    yearLabel: "1977年〜1998年",
    lat: 35.6683, lng: 139.6982,
    area: "代々木公園前",
    summary: "竹の子族やバンドでにぎわった若者の表現の場。",
    detail: "1977年に始まった歩行者天国では、ディスコ衣装で踊る「竹の子族」やロカビリーを踊る「ローラー族」、1980年代後半にはホコ天バンドが登場し、大勢の見物客を集めました。1998年8月31日に廃止されました。",
    tags: ["若者文化", "竹の子族", "音楽"],
    sources: [
      { title: "原宿竹下通り観光ガイド 原宿の歴史", url: "https://www.tour-harajuku.com/history.html" }
    ]
  },
  {
    id: "shibuya-109",
    name: "SHIBUYA109",
    era: "postwar",
    year: 1979,
    yearLabel: "1979年（昭和54年）4月開業",
    lat: 35.6595, lng: 139.6988,
    area: "道玄坂",
    summary: "若者文化・ギャル文化の発信地となったファッションビル。",
    detail: "道玄坂と文化村通りの分かれ目に建つ円筒形のビルです。1990年代には「カリスマ店員」などの社会現象を生み、若者文化の象徴となりました。",
    tags: ["ファッション", "若者文化", "道玄坂"],
    sources: [
      { title: "シブヤ経済新聞 SHIBUYA109が開業35周年", url: "https://www.shibukei.com/headline/10085/" }
    ]
  },
  {
    id: "moyai",
    name: "モヤイ像",
    era: "postwar",
    year: 1980,
    yearLabel: "1980年（昭和55年）9月除幕",
    lat: 35.6577, lng: 139.6996,
    area: "渋谷",
    summary: "新島から贈られた、ハチ公と並ぶ待ち合わせの目印。",
    detail: "新島が東京都に移管されて100年を記念し、新島から渋谷区に贈られました。作者は新島の彫刻家・大後友市。「もやい」は力を合わせることを意味します。再開発に伴い、2025年に渋谷フクラス西側の広場へ移設されました。",
    tags: ["待ち合わせ", "新島", "像"],
    sources: [
      { title: "マイナビニュース 渋谷駅に「モヤイ像」があるのはなぜ?", url: "https://news.mynavi.jp/techplus/article/20150930-moyai/" }
    ]
  },
  {
    id: "shoto-museum",
    name: "渋谷区立松濤美術館",
    era: "postwar",
    year: 1981,
    yearLabel: "1981年（昭和56年）10月開館",
    lat: 35.6592, lng: 139.6930,
    area: "松濤",
    summary: "「哲学の建築家」白井晟一の晩年の代表作。",
    detail: "白井晟一が設計した区立美術館で、中央の吹き抜けと噴水を囲む独特の空間で知られます。",
    tags: ["美術館", "建築", "白井晟一"],
    sources: [
      { title: "渋谷区立松濤美術館 設計者 白井晟一", url: "https://shoto-museum.jp/aboutthemuseum/architect/" }
    ]
  },
  {
    id: "noh-theatre",
    name: "国立能楽堂",
    era: "postwar",
    year: 1983,
    yearLabel: "1983年（昭和58年）9月開場",
    lat: 35.6810, lng: 139.7045,
    area: "千駄ヶ谷",
    summary: "能・狂言を上演する国立の劇場。",
    detail: "大江宏の設計で建てられ、627席の本舞台のほか研修舞台も備えています。能楽の公開や伝承者の養成を行っています。",
    tags: ["能楽", "伝統芸能", "千駄ヶ谷"],
    sources: [
      { title: "文化庁 ぶんかる 国立能楽堂開場40周年", url: "https://www.bunka.go.jp/prmagazine/rensai/youkoso/youkoso_109.html" }
    ]
  },

  // ---------------- 平成・令和 ----------------
  {
    id: "bunkamura",
    name: "Bunkamura",
    era: "modern",
    year: 1989,
    yearLabel: "1989年（平成元年）9月開業",
    lat: 35.6612, lng: 139.6958,
    area: "道玄坂",
    summary: "コンサートホール・劇場・美術館・映画館を備えた複合文化施設。",
    detail: "オーチャードホール、シアターコクーン、ザ・ミュージアム、ル・シネマなどを備え、渋谷の文化の拠点となりました。",
    tags: ["文化施設", "音楽", "演劇"],
    sources: [
      { title: "東急文化村 Bunkamuraの歴史", url: "https://www.bunkamura.co.jp/company/aboutus/history.html" }
    ]
  },
  {
    id: "tokyo-gym",
    name: "東京体育館",
    era: "modern",
    year: 1990,
    yearLabel: "1954年 開設／1990年 改築",
    lat: 35.6800, lng: 139.7128,
    area: "千駄ヶ谷",
    summary: "槇文彦設計による、宇宙船のような屋根の体育館。",
    detail: "1954年に開設され、1986年からの全面改築を経て1990年に再オープンしました。設計は代官山ヒルサイドテラスも手がけた槇文彦です。",
    tags: ["スポーツ", "建築", "槇文彦"],
    sources: [
      { title: "東西アスファルト事業協同組合 槇文彦「東京都体育館」", url: "https://www.tozai-as.or.jp/mytech/86/86_maki18.html" }
    ]
  },
  {
    id: "shibuya-stream",
    name: "渋谷川と渋谷ストリーム",
    era: "modern",
    year: 2018,
    yearLabel: "2018年（平成30年）開業",
    lat: 35.6568, lng: 139.7028,
    area: "渋谷",
    summary: "かつての東横線ホーム跡と、よみがえった渋谷川の水辺。",
    detail: "渋谷川は上流部が暗渠となり、街の下を流れています。東横線の地下化で生まれた跡地に渋谷ストリームが建ち、渋谷川沿いに遊歩道と水辺空間が整備されました。",
    tags: ["川", "再開発", "東横線"]
  },
  // ---------------- 事件・事故・災害など（負の歴史） ----------------
  {
    id: "pow-fire",
    name: "東京陸軍刑務所 捕虜焼死事件",
    era: "prewar",
    dark: "戦争",
    year: 1945,
    yearLabel: "1945年（昭和20年）5月25日",
    lat: 35.6629, lng: 139.6979,
    area: "宇田川町・神南（陸軍刑務所跡）",
    summary: "山の手大空襲の夜、刑務所に収容されていた米軍捕虜62人が亡くなった事件。",
    detail: "現在の渋谷区役所周辺にあった東京陸軍刑務所は、山の手大空襲で猛火に包まれました。米国側の主張によれば、日本人の囚人約400人は救出された一方、撃墜されて捕虜となっていたB29の搭乗員など62人は置き去りにされ焼死しました。戦後、戦争犯罪として裁かれましたが、日本ではあまり知られていない出来事です。",
    tags: ["戦争", "空襲", "捕虜", "陸軍"],
    sources: [
      { title: "東京新聞 渋谷で犠牲になった米兵捕虜62人", url: "https://www.tokyo-np.co.jp/article/251994" }
    ]
  },
  {
    id: "shibuya-jiken",
    name: "渋谷事件",
    era: "postwar",
    dark: "事件",
    year: 1946,
    yearLabel: "1946年（昭和21年）7月19日",
    lat: 35.6573, lng: 139.7036,
    area: "渋谷警察署付近（位置はおおよそ）",
    summary: "終戦直後の混乱の中、渋谷警察署前で起きた銃撃を伴う衝突。",
    detail: "闇市などをめぐる対立を背景に、渋谷警察署前で警察・暴力団と在日台湾人の集団が衝突し、当日だけで警察官1人と台湾人2人が亡くなりました（その後の死者を含め計7人）。台湾人側が警察署を襲ったとする説と、警察側が帰路の台湾人を襲撃したとする説があり、評価は分かれています。占領軍の軍事法廷で裁かれました。",
    tags: ["事件", "戦後", "闇市"],
    sources: [
      { title: "コトバンク・Weblio 渋谷事件", url: "https://www.weblio.jp/content/%E6%B8%8B%E8%B0%B7%E4%BA%8B%E4%BB%B6" }
    ]
  },
  {
    id: "shibuya-riot",
    name: "渋谷暴動事件",
    era: "postwar",
    dark: "事件",
    year: 1971,
    yearLabel: "1971年（昭和46年）11月14日",
    lat: 35.6612, lng: 139.6972,
    area: "渋谷駅周辺（位置はおおよそ）",
    summary: "沖縄返還協定に反対する過激派が暴徒化し、警察官が亡くなった事件。",
    detail: "米軍の駐留を認める沖縄返還協定に反対して約5,000人が渋谷に集まり、うち約150人が火炎瓶や鉄パイプで機動隊や交番を襲いました。警備のため新潟県警から派遣されていた21歳の警察官が火炎瓶による火傷で亡くなり、交番も放火されました。警視庁は中核派によるものとして捜査し、実行犯とされた一人は長く逃亡を続けました。",
    tags: ["事件", "学生運動", "沖縄返還"],
    sources: [
      { title: "時事ドットコム 渋谷暴動事件 写真特集", url: "https://www.jiji.com/jc/d4?p=sbj176&d=d4_ccc" },
      { title: "コトバンク 渋谷暴動事件", url: "https://kotobank.jp/word/%E6%B8%8B%E8%B0%B7%E6%9A%B4%E5%8B%95%E4%BA%8B%E4%BB%B6-3195677" }
    ]
  },
  {
    id: "siespa",
    name: "渋谷温泉施設爆発事故（松濤温泉シエスパ）",
    era: "modern",
    dark: "事故",
    year: 2007,
    yearLabel: "2007年（平成19年）6月19日",
    lat: 35.6583, lng: 139.6940,
    area: "松濤（位置はおおよそ）",
    summary: "温泉のくみ上げで出た天然ガスが爆発し、従業員3人が亡くなった事故。",
    detail: "女性専用の温泉施設の別棟地下で、温泉水とともに出てきたメタンを主成分とする天然ガスがたまり、機械の火花で引火して爆発しました。従業員3人が亡くなり、通行人を含む3人が重傷を負いました。この事故をきっかけに温泉法が改正され、温泉採取時の可燃性ガス対策が義務づけられました。",
    tags: ["事故", "温泉", "ガス爆発", "松濤"],
    sources: [
      { title: "失敗知識データベース 渋谷シエスパ爆発", url: "https://www.shippai.org/fkd/cf/CZ0200803.html" },
      { title: "環境省 温泉法の一部を改正する法律の概要", url: "https://www.env.go.jp/council/12nature/y123-09/mat03.pdf" },
      { title: "日本経済新聞 渋谷の温泉施設事故", url: "https://www.nikkei.com/article/DGXLASDG16H5B_Z10C17A6CR0000/" }
    ]
  },
  {
    id: "miyashita-2010",
    name: "宮下公園の命名権問題と強制撤去",
    era: "modern",
    dark: "社会問題",
    year: 2010,
    yearLabel: "2010年（平成22年）9月",
    lat: 35.6624, lng: 139.7023,
    area: "神宮前",
    summary: "公園の「ナイキ化」と、そこで暮らしていた人々の強制排除をめぐる論争。",
    detail: "渋谷区は2009年、宮下公園の命名権をナイキに売却し、スケートボード場などを整備する計画を進めました。市民団体が反対運動を行う中、2010年9月に区は行政代執行で公園内のホームレスの人々のテントなどを撤去しました。2015年、東京高裁は代執行自体は適法としつつ、撤去の手法が行き過ぎだったとして区に損害賠償を命じています。",
    tags: ["社会問題", "公園", "ホームレス", "再開発"],
    sources: [
      { title: "Business Insider Japan 10年に及ぶ“ホームレス排除”の歴史", url: "https://www.businessinsider.jp/article/217134/" },
      { title: "日本経済新聞 宮下公園整備で強制撤去 渋谷区が代執行", url: "https://www.nikkei.com/article/DGXNASDG2401I_U0A920C1CC0000/" }
    ]
  },
  {
    id: "dengue-2014",
    name: "代々木公園のデング熱国内感染",
    era: "modern",
    dark: "災害",
    year: 2014,
    yearLabel: "2014年（平成26年）8〜10月",
    lat: 35.6705, lng: 139.6972,
    area: "代々木公園",
    summary: "約70年ぶりのデング熱国内感染。公園の一部が約2か月閉鎖された。",
    detail: "2014年8月、海外渡航歴のない人のデング熱感染が約70年ぶりに確認されました。感染者は全国で約160人にのぼり、その多くが代々木公園周辺で蚊に刺されたとみられています。ウイルスを持つ蚊が見つかったため、9月4日から10月30日まで公園の中心部が閉鎖されました。",
    tags: ["感染症", "デング熱", "代々木公園"],
    sources: [
      { title: "東京都感染症情報センター 代々木公園を中心とした都内のデング熱国内感染事例", url: "https://idsc.tmiph.metro.tokyo.lg.jp/diseases/dengue/dengue2014/iasr1/" }
    ]
  },
  {
    id: "halloween",
    name: "ハロウィーンの混乱と路上飲酒の禁止",
    era: "modern",
    dark: "社会問題",
    year: 2018,
    yearLabel: "2018年 軽トラック横転／2019年 条例施行",
    lat: 35.6603, lng: 139.6985,
    area: "センター街",
    summary: "群衆が軽トラックを横転させた騒ぎをきっかけに、路上飲酒が規制された。",
    detail: "2018年10月28日未明、ハロウィーン前の週末でにぎわうセンター街で、若者らが軽トラックを横転させ、後に男4人が逮捕されました。痴漢や暴行などの被害も相次ぎ、渋谷区は2019年6月、ハロウィーンや年末年始の期間に駅周辺での路上飲酒を禁止する条例を施行しました。2024年10月からは禁止が通年に広げられています。",
    tags: ["社会問題", "ハロウィーン", "条例", "治安"],
    sources: [
      { title: "日本経済新聞 渋谷ハロウィーン、軽トラ横転容疑で男4人逮捕", url: "https://www.nikkei.com/article/DGXMZO38558520V01C18A2CC0000/" },
      { title: "シブヤ経済新聞 渋谷区、路上飲酒禁止条例を通年に", url: "https://www.shibukei.com/headline/18451/" }
    ]
  },
  {
    id: "flood",
    name: "「谷」の街・渋谷の水害と雨水貯留施設",
    era: "modern",
    dark: "災害",
    year: 2020,
    yearLabel: "1958年 狩野川台風ほか／2020年 雨水貯留施設",
    lat: 35.6583, lng: 139.7031,
    area: "渋谷駅東口",
    summary: "坂に囲まれたすり鉢状の地形のため、大雨のたびに水害の危険を抱えてきた。",
    detail: "渋谷駅は道玄坂や宮益坂に囲まれた谷底にあり、渋谷川・古川の流域は1958年の狩野川台風、1982年・1999年の集中豪雨などで浸水被害を受けてきました。支流は1970年までにほぼすべて暗渠化され下水道幹線となりました。再開発にあわせて駅東口の地下に約4,000立方メートルの雨水をためる施設がつくられ、2020年8月に使用が始まりました。",
    tags: ["災害", "水害", "地形", "渋谷川"],
    sources: [
      { title: "東京都建設局 渋谷川・古川 浸水被害の状況", url: "https://www.kensetsu.metro.tokyo.lg.jp/river/kankyo/ryuiki/sibufuru-title/sh3/sh3-2" },
      { title: "渋谷文化プロジェクト 渋谷駅地下の雨水貯留施設", url: "https://www.shibuyabunka.com/blog.php?id=1151" }
    ]
  }
,
  // ---------------- 地域ごとの追加（地名の由来・各町の歴史） ----------------
  {
    id: "shibuya-name",
    name: "「渋谷」の地名の由来",
    era: "medieval",
    year: 1100,
    yearLabel: "諸説あり（定説なし）",
    lat: 35.6561, lng: 139.7038,
    area: "渋谷（渋谷川沿い）",
    summary: "入江の「塩谷の里」説、渋谷氏説、川の色説など、由来には複数の説がある。",
    detail: "①かつてこの付近が入江で「塩谷（しおや）の里」と呼ばれ、それが「しぶや」に変わったという説、②平安時代末、領主の河崎重家が御所に侵入した賊を捕らえた功で「渋谷」の姓を賜り、領地の名も渋谷になったという説、③川の水が鉄分を含んだ赤さび色（シブ色）だったという説、④渋谷川沿いの低地が「しぼんだ谷」だったという説などがあり、定説はありません。",
    tags: ["地名", "渋谷川", "渋谷氏"],
    sources: [
      { title: "渋谷区 地名の由来", url: "https://www.city.shibuya.tokyo.jp/kusei/shibuyaku/introduction/uraig.html" },
      { title: "渋谷区立図書館 「渋谷」の名はどこからきたの", url: "https://www.lib.city.shibuya.tokyo.jp/shibuya/about-shibuya/origin-name/" }
    ]
  },
  {
    id: "hataaraiike",
    name: "旗洗池跡（幡ヶ谷の地名の由来）",
    era: "medieval",
    year: 1087,
    yearLabel: "伝承（11世紀・後三年の役のあと）",
    lat: 35.6795, lng: 139.6765,
    area: "本町（位置はおおよそ）",
    summary: "源義家が白旗を洗ったという伝説の池。",
    detail: "後三年の役のあと、京へ向かう源義家がこの池で源氏の白旗を洗い、そばの松にかけて乾かしたという伝説があり、「幡ヶ谷」の地名の由来とされます。池は唐津藩小笠原家の屋敷内にあった小さな湧水池で、1963年に埋め立てられました。現在は1906年にこの地を訪れた東郷平八郎の筆による「洗旗池」の碑だけが残っています。なお義家が本当に旗を洗ったかどうかの証拠はなく、関東に多い源氏伝説の一つです。",
    highlights: ["東郷平八郎の筆による「洗旗池」の碑"],
    tags: ["地名", "伝説", "源義家", "幡ヶ谷"],
    sources: [
      { title: "シブヤ散歩新聞 渋谷歴史散歩 No.11「笹塚跡」と「旗洗池跡」", url: "http://shibuyasanpokaigi.jp/shinbun/index.php/2018/07/11/history11-sasazuka-and-hataraiike/" }
    ]
  },
  {
    id: "hatsudai-shoshunji",
    name: "初台の地名と正春寺",
    era: "edo",
    year: 1591,
    yearLabel: "1591年（天正19年）初台局がこの地を拝領",
    lat: 35.6812, lng: 139.6948,
    area: "代々木・初台",
    summary: "太田道灌の砦と、将軍の乳母「初台局」ゆかりの地。",
    detail: "「初台」の名は、太田道灌が代々木村に築いた8か所の砦のうち、一の砦（狼煙台）があったことに由来するといわれます。徳川家康の関東入りの直後、二代将軍秀忠の乳母がこの地に200石を拝領して「初台局」と名乗りました。その娘で三代将軍家光の乳母となった梅園局が、母の菩提寺として代々木三丁目に正春寺を建てました。",
    tags: ["地名", "寺", "太田道灌", "初台"],
    sources: [
      { title: "東京さんぽ「初台駅」地名の由来", url: "https://www.jk-tokyo.tv/station/hatudai/" },
      { title: "シブヤ散歩新聞 渋谷坂散歩 No.14 初台坂", url: "http://shibuyasanpokaigi.jp/shinbun/index.php/2018/11/21/saka14-hatsudaisaka/" }
    ]
  },
  {
    id: "sasazuka",
    name: "笹塚跡と甲州街道",
    era: "edo",
    year: 1604,
    yearLabel: "1604年（慶長9年）塚が築かれたと伝わる",
    lat: 35.6740, lng: 139.6670,
    area: "笹塚",
    summary: "甲州街道の一里塚に笹が茂っていたことが地名の由来。",
    detail: "江戸の五街道の一つ・甲州街道の両側に築かれた塚（盛り土）に笹が生い茂っていたことから「笹塚」と呼ばれるようになったといいます。塚は1604年に大久保長安によって設けられたと伝えられます。1913年には京王電気軌道（現在の京王線）が笹塚〜調布間で開業し、笹塚駅が始発駅となりました。",
    tags: ["地名", "街道", "甲州街道", "京王線"],
    sources: [
      { title: "渋谷区 地名の由来", url: "https://www.city.shibuya.tokyo.jp/kusei/shibuyaku/introduction/uraig.html" },
      { title: "甲州街道紀行 笹塚跡", url: "https://oldroad.japan-report.com/kosyu/point/list/kosyu160" }
    ]
  },
  {
    id: "sendagaya-name",
    name: "「千駄ヶ谷」の地名の由来",
    era: "edo",
    year: 1600,
    yearLabel: "古くからの地名",
    lat: 35.6812, lng: 139.7110,
    area: "千駄ヶ谷",
    summary: "馬1,000頭分の萱（かや）がとれた土地。",
    detail: "「千駄萱（せんだがや）」が由来といわれます。「一駄」は馬1頭で運べる荷物の量のことで、「千駄萱」は馬1,000頭分もの萱を産する土地という意味です。一帯が萱の生い茂る原野だったことを物語っています。",
    tags: ["地名", "千駄ヶ谷"],
    sources: [
      { title: "nippon.com 原宿（JY19）", url: "https://www.nippon.com/ja/japan-topics/c13309/" }
    ]
  },
  {
    id: "tomigaya-name",
    name: "「富ヶ谷」の地名の由来",
    era: "edo",
    year: 1700,
    yearLabel: "江戸時代 代々木村富谷",
    lat: 35.6672, lng: 139.6905,
    area: "富ヶ谷",
    summary: "地下の貝の化石層にちなむ「留貝」が転じたといわれる。",
    detail: "古くは「留貝（とめがい）」と呼ばれ、富ヶ谷の低地の地下約10mに貝の化石層が広がっていたことに由来するといわれます。のちに縁起をかついで「富谷」となり、江戸時代には代々木村富谷、1932年に代々木富ヶ谷町となりました。",
    tags: ["地名", "富ヶ谷"],
    sources: [
      { title: "渋谷区 地名の由来", url: "https://www.city.shibuya.tokyo.jp/kusei/shibuyaku/introduction/uraig.html" },
      { title: "東京さんぽ 富ヶ谷の由来", url: "https://www.jk-tokyo.tv/zatsugaku/236/" }
    ]
  },
  {
    id: "yoyogi-momi",
    name: "「代々木」の地名の由来となった樅の木",
    era: "edo",
    year: 1840,
    yearLabel: "江戸時代後期（『江戸名所図会』に記載）",
    lat: 35.6720, lng: 139.6985,
    area: "代々木（明治神宮内）",
    summary: "代々受け継がれた大きな樅の木が地名になったといわれる。",
    detail: "江戸時代、この地には彦根藩井伊家の下屋敷があり、そこに立つ樅の大木が「代々木」の名の由来になったといわれます。片側に馬を3頭つなぐと反対側から見えなくなるほどの大木で、幕末には井伊家の家臣が木に登って品川沖の外国船を見張ったという話も伝わります。初代の木は枯れましたが、明治神宮の南参道近くに二代目の樅と説明板があります。",
    highlights: ["明治神宮内の二代目の樅と説明板"],
    tags: ["地名", "代々木", "井伊家", "明治神宮"],
    sources: [
      { title: "nippon.com 代々木（JY18）", url: "https://www.nippon.com/ja/japan-topics/c13310/" }
    ]
  },
  {
    id: "shinsen-kobo",
    name: "神泉と弘法湯跡",
    era: "edo",
    year: 1800,
    yearLabel: "江戸時代後期〜",
    lat: 35.6560, lng: 139.6928,
    area: "神泉町・円山町",
    summary: "仙人の霊水伝説と、大山詣での人々が立ち寄った湯。",
    detail: "神泉の地名は、この谷に湧いた水が空鉢仙人ゆかりの霊水「神仙水」と呼ばれたことに由来します（近くの鉢山町の名も同じ仙人にちなむとされます）。のちに弘法大師が湧かせた泉だとする話も広まり、江戸後期には村の共同浴場「弘法湯」ができました。大山詣でや富士講の人々が行き帰りに立ち寄る休憩所としてにぎわいました。",
    highlights: ["弘法湯の石碑"],
    tags: ["地名", "湧水", "銭湯", "大山詣で"],
    sources: [
      { title: "SCAPE WORKS 弘法湯石碑", url: "https://www.scapeworks.jp/soundwalk03.html" },
      { title: "東京さんぽ 町の由来「渋谷編（2）」", url: "https://www.jk-tokyo.tv/zatsugaku/130/" }
    ]
  },
  {
    id: "tokiwamatsu",
    name: "常盤松の碑と常陸宮邸（常盤松御用邸）",
    era: "edo",
    year: 1856,
    yearLabel: "1855年 薩摩藩の屋敷に／1856年 篤姫が江戸城へ",
    lat: 35.6555, lng: 139.7080,
    area: "東",
    summary: "常盤御前の手植えと伝わる松と、篤姫が江戸城へ嫁いだ屋敷の跡。",
    detail: "源義朝の側室・常盤御前が植えたと伝わる古い松があり、地名「常磐松」の由来となりました。松は1945年5月25日の空襲で被害を受けましたが、植え直された松が「常盤松の碑」のそばにあります。すぐ近くの常盤松御用邸（常陸宮邸）の地は、1855年から薩摩藩の屋敷となり、翌年、篤姫がここから十三代将軍徳川家定のもとへ輿入れしました。1966年の住居表示で、町名は「東」に変わりました。",
    highlights: ["常盤松の碑"],
    tags: ["地名", "伝説", "篤姫", "空襲"],
    sources: [
      { title: "シブヤ散歩新聞 渋谷歴史散歩 No.5 常盤松の碑", url: "http://shibuyasanpokaigi.jp/shinbun/index.php/2017/05/15/history5-tokiwamatumonument/" }
    ]
  },
  {
    id: "sendagaya-goten",
    name: "徳川宗家の「千駄ヶ谷御殿」跡",
    era: "meiji",
    year: 1877,
    yearLabel: "1877年（明治10年）〜1943年",
    lat: 35.6795, lng: 139.7120,
    area: "千駄ヶ谷",
    summary: "江戸幕府を継いだ徳川宗家の10万坪を超える屋敷。",
    detail: "徳川家達（いえさと）は1877年から千駄ヶ谷に住み、現在の千駄ケ谷駅の南側一帯に10万坪を超える屋敷を構えました。洋館の公爵邸は「千駄ヶ谷御殿」と呼ばれました。1943年に東京府が買い取り、戦後、跡地には東京体育館が建てられました。津田塾大学千駄ヶ谷キャンパスなども、かつての屋敷の一帯にあります。",
    tags: ["徳川家", "屋敷", "千駄ヶ谷"],
    sources: [
      { title: "遠藤潔 千駄ヶ谷 德川宗家本邸", url: "http://www.kiyoshi-endo.com/information/detail.php?id=862" }
    ]
  },
  {
    id: "maruyamacho-kagai",
    name: "円山町の花街",
    era: "meiji",
    year: 1887,
    yearLabel: "1887年頃〜／1913年 三業地に指定",
    lat: 35.6572, lng: 139.6955,
    area: "円山町",
    summary: "弘法湯の前の芸者屋から始まった、渋谷の花街。",
    detail: "1887年頃、弘法湯の前に芸者屋「宝屋」が開業したのが始まりとされます。1913年には芸妓置屋24戸・芸妓60名・待合茶屋13戸を抱える三業地に指定され、花街として栄えました。現在はホテル街・ライブハウス街となっていますが、料亭の名残や石畳の路地に当時の面影が残ります。",
    tags: ["花街", "芸者", "円山町"],
    sources: [
      { title: "東京花柳界情報舎 円山町", url: "https://www.tokyo-geisha.com/html/kagai/maruyamachou.php" },
      { title: "TRiP EDiTOR かつての花街・円山町", url: "https://tripeditor.com/7841" }
    ]
  },
  {
    id: "jrc-hospital",
    name: "日本赤十字社医療センター",
    era: "meiji",
    year: 1891,
    yearLabel: "1891年（明治24年）広尾へ移転",
    lat: 35.6528, lng: 139.7180,
    area: "広尾",
    summary: "日本赤十字社の最初の病院。",
    detail: "1886年に麹町区飯田町に開設された博愛社病院が前身で、1891年に現在の広尾（当時は南豊島郡）へ移転しました。以来、日本赤十字社の中核病院となっています。",
    tags: ["病院", "赤十字", "広尾"],
    sources: [
      { title: "日本赤十字社医療センター 沿革・歴史", url: "https://www.med.jrc.or.jp/hospital/tabid/105/Default.aspx" }
    ]
  },
  {
    id: "kuninomiya",
    name: "旧久邇宮邸（聖心女子大学）",
    era: "meiji",
    year: 1924,
    yearLabel: "1918年 本邸完成／1924年 御常御殿",
    lat: 35.6485, lng: 139.7225,
    area: "広尾",
    summary: "宮家の本邸として唯一現存する和風の御殿。",
    detail: "久邇宮家第2代・邦彦王の本邸で、1918年に完成しました。戦災で一部を失いましたが、1924年完成の御常御殿などが残り、1947年に聖心女子大学の校地となりました。和風を基調とした宮家本邸の唯一の現存例として、国の重要文化財に指定されています。",
    highlights: ["「パレス」と呼ばれる御常御殿（公開日あり）"],
    tags: ["重要文化財", "皇族", "大学", "広尾"],
    sources: [
      { title: "聖心女子大学 重要文化財 旧久邇宮邸", url: "https://www.u-sacred-heart.ac.jp/assets/images/about/campus/palace_ja.pdf" }
    ]
  },
  {
    id: "hyakkendana",
    name: "百軒店",
    era: "meiji",
    year: 1924,
    yearLabel: "1924年（大正13年）開業",
    lat: 35.6588, lng: 139.6963,
    area: "道玄坂",
    summary: "関東大震災で被災した下町の名店を集めた商店街。",
    detail: "西武の前身・箱根土地の堤康次郎が旧中川伯爵邸の土地を開発し、前年の関東大震災で被災した下町の名店を誘致しました。劇場や映画館、上野精養軒、資生堂など117店が並び、渋谷の繁華街の原点の一つとなりました。1945年の空襲で焼失し、戦後はジャズ喫茶などが集まる街として再生しました。",
    tags: ["商店街", "震災復興", "道玄坂"],
    sources: [
      { title: "百軒店商店街 百軒店商店街とは", url: "https://hyakkendana.com/history/" }
    ]
  },
  {
    id: "odakyu-sanguubashi",
    name: "参宮橋駅と小田急線の開業",
    era: "prewar",
    year: 1927,
    yearLabel: "1927年（昭和2年）4月1日開業",
    lat: 35.6783, lng: 139.6937,
    area: "代々木",
    summary: "明治神宮へ参拝する橋の名を持つ駅。",
    detail: "小田原急行鉄道（現在の小田急電鉄）が新宿〜小田原間を一度に開業した日に、参宮橋・代々木八幡・代々木上原などの駅も開業しました。開業当時、参宮橋〜代々木八幡の間には代々木練兵場が広がり、周辺は軍の施設に囲まれていました。",
    tags: ["鉄道", "小田急", "駅"],
    sources: [
      { title: "このまちアーカイブス 小田急小田原線 沿線の歴史散策", url: "https://smtrc.jp/railway/line/odakyu-odawarasen/index.html" }
    ]
  },
  {
    id: "koibumi-yokocho",
    name: "恋文横丁跡（戦後の闇市）",
    era: "postwar",
    year: 1948,
    yearLabel: "1948年頃〜",
    lat: 35.6589, lng: 139.6979,
    area: "道玄坂",
    summary: "米兵への恋文を代筆・翻訳する店があった闇市の横丁。",
    detail: "空襲で焼け野原になった渋谷では、道玄坂と文化村通りにはさまれた一帯にバラックが建ち並び、闇市ができました。1948年、英語が堪能な元軍人がここで、日本人女性から米兵への恋文の代筆・翻訳を始めました。これを題材にした丹羽文雄の小説『恋文』が1953年に映画化されて評判となり、「恋文横丁」と呼ばれるようになりました。",
    highlights: ["「恋文横丁此処にありき」の標柱"],
    tags: ["闇市", "戦後", "占領期", "道玄坂"],
    sources: [
      { title: "テレビ東京 アド街ック天国 恋文横丁此処にありき", url: "https://www.tv-tokyo.co.jp/adomachi/backnumber/20240330/144775.html" },
      { title: "シブテナ 渋谷に存在した「恋文横丁」を紐解く", url: "https://shibutena.com/local_information/10556/" }
    ]
  },
  {
    id: "nanpeidai-anpo",
    name: "南平台の岸首相邸と安保闘争",
    era: "postwar",
    dark: "社会運動",
    year: 1960,
    yearLabel: "1960年（昭和35年）6月",
    lat: 35.6552, lng: 139.6960,
    area: "南平台町",
    summary: "日米安保条約に反対するデモ隊が首相の私邸に押し寄せた。",
    detail: "南平台（道玄坂を上った高台の平地にあることが地名の由来とされます）には岸信介首相の私邸がありました。1960年6月、日米安保条約の改定に反対する学生や労働者の大群が岸邸を目指し、周辺の道路を埋め尽くして門が押し破られることもありました。条約は強行採決を経て成立し、岸内閣は混乱の責任をとって総辞職しました。",
    tags: ["安保闘争", "デモ", "政治", "南平台"],
    sources: [
      { title: "日本記者クラブ 戦後政治の分岐点―60年安保騒動", url: "https://www.jnpc.or.jp/journal/interviews/11912" },
      { title: "渋谷文化プロジェクト 南平台エリア", url: "https://www.shibuyabunka.com/area.php?id=12" }
    ]
  },
  {
    id: "shibuya-kokaido",
    name: "渋谷公会堂と渋谷区役所",
    era: "postwar",
    year: 1964,
    yearLabel: "1964年（昭和39年）竣工／2019年 建て替え",
    lat: 35.6643, lng: 139.6982,
    area: "宇田川町（旧陸軍刑務所跡）",
    summary: "東京オリンピックの重量挙げ会場となった公会堂。",
    detail: "区の総合庁舎とともに1964年に完成し、東京オリンピックの重量挙げ会場となりました。ここで三宅義信選手が日本選手団の金メダル第1号を獲得しています。その後は「ロックの殿堂」と呼ばれるコンサート会場として親しまれました。耐震性の問題で2015年に閉館し、2019年に新しい区役所とともに建て替えられ「LINE CUBE SHIBUYA」として再開しました。",
    tags: ["オリンピック", "音楽", "区役所"],
    sources: [
      { title: "JOC 渋谷公会堂", url: "https://www.joc.or.jp/past_games/tokyo1964/memorialplace/5.html" },
      { title: "シブヤ経済新聞 渋谷公会堂、10月開業へ", url: "https://www.shibukei.com/headline/14121/" }
    ]
  },
  {
    id: "udagawa",
    name: "宇田川の暗渠",
    era: "postwar",
    year: 1964,
    yearLabel: "1964年頃までに暗渠化",
    lat: 35.6628, lng: 139.6962,
    area: "宇田川町",
    summary: "センター街や井の頭通りの下を流れる、宇田川町の名の由来の川。",
    detail: "宇田川は代々木・初台・西原・大山町・上原あたりを水源とする渋谷川の支流で、一帯の田畑を潤していました。豪雨のたびに水害を起こしたため昭和初期から護岸工事が進み、1964年の東京オリンピックを前に暗渠化されて下水道となりました。今も蛇行する道や護岸の跡に川の名残が見られます。",
    tags: ["川", "暗渠", "地名", "水害"],
    sources: [
      { title: "CBCマガジン 東京・渋谷の暗渠道を巡る旅", url: "https://hicbc.com/magazine/article/?id=michi-column-26032401" }
    ]
  },
  {
    id: "nhk",
    name: "NHK放送センター",
    era: "postwar",
    year: 1965,
    yearLabel: "1965年 第1期完成／1973年 本部機能を移転",
    lat: 35.6645, lng: 139.6955,
    area: "神南",
    summary: "ワシントンハイツの返還地に建てられた放送の拠点。",
    detail: "1964年に返還されたワシントンハイツの跡地の一部に建設され、1965年に第1期工事が完成しました。1973年7月に日比谷の旧放送会館での業務が終わり、本部機能が渋谷に移りました。",
    tags: ["放送", "ワシントンハイツ", "神南"],
    sources: [
      { title: "清水建設 NHK放送センター・NHKホール", url: "https://www.shimz.co.jp/works/jp_off_197303_nhk_hall.html" }
    ]
  },
  {
    id: "kanze-nohgakudo",
    name: "観世能楽堂跡",
    era: "postwar",
    year: 1972,
    yearLabel: "1972年〜2015年",
    lat: 35.6600, lng: 139.6936,
    area: "松濤（旧鍋島邸跡）",
    summary: "43年間、松濤にあった観世流の能楽堂。",
    detail: "1972年、旧鍋島邸の跡地に552席の観世能楽堂が建てられました。老朽化などのため2015年に閉場し、2017年に銀座のGINZA SIXへ移りました。",
    tags: ["能楽", "伝統芸能", "松濤"],
    sources: [
      { title: "シブヤ経済新聞 松濤の「観世能楽堂」閉場", url: "https://www.shibukei.com/headline/10753/" }
    ]
  },
  {
    id: "scramble",
    name: "渋谷スクランブル交差点",
    era: "postwar",
    year: 1973,
    yearLabel: "1973年（昭和48年）スクランブル化",
    lat: 35.6595, lng: 139.7005,
    area: "渋谷",
    summary: "世界で最も有名な交差点の一つ。",
    detail: "1960年代以降、百貨店の開業や1973年の渋谷パルコ開業で人出が急増したことから、安全のためにスクランブル化されました（国内では新宿駅東口などが先行）。1回の青信号で多い時は3,000人以上が渡り、1日の通行量は平日で約26万人、休日で約39万人といわれます。",
    tags: ["交差点", "観光", "渋谷駅"],
    sources: [
      { title: "渋谷新聞 スクランブル交差点の豆知識", url: "https://shibuya-shimbun.com/archives/190" }
    ]
  },
  {
    id: "shogi-kaikan",
    name: "将棋会館（旧会館）",
    era: "postwar",
    year: 1976,
    yearLabel: "1976年 竣工／2024年 新会館へ移転",
    lat: 35.6795, lng: 139.7072,
    area: "千駄ヶ谷",
    summary: "「将棋の街・千駄ヶ谷」の象徴だった日本将棋連盟の本部。",
    detail: "1976年に完成した日本将棋連盟の本部で、数々のタイトル戦や公式戦が行われ、千駄ヶ谷は「将棋の街」として知られるようになりました。2024年、近くに完成した新しい将棋会館へ本部機能が移りました。",
    tags: ["将棋", "千駄ヶ谷"],
    sources: [
      { title: "日本将棋連盟 東京・将棋会館", url: "https://www.shogi.or.jp/about/base/tokyo/" }
    ]
  },
  {
    id: "enzai-1997",
    name: "円山町の未解決殺人事件と冤罪",
    era: "modern",
    dark: "事件",
    year: 1997,
    yearLabel: "1997年（平成9年）3月／2012年 再審無罪",
    lat: 35.6579, lng: 139.6962,
    area: "円山町（位置は地域の目安）",
    summary: "逮捕・服役した男性が15年後に無罪となった冤罪事件。真犯人は不明のまま。",
    detail: "1997年3月、円山町のアパートで会社員の女性が殺害されました。近くに住んでいた外国人男性が逮捕され、一審は無罪でしたが控訴審で無期懲役となり確定しました。男性は一貫して無実を訴え、2012年、現場に残された証拠から別人のDNAが検出されたことなどを受けて再審で無罪となりました。捜査と裁判のあり方が問われた冤罪事件として知られ、事件そのものは未解決です。",
    tags: ["事件", "冤罪", "再審", "未解決"],
    sources: [
      { title: "日本大百科全書（ジャパンナレッジ）", url: "https://japanknowledge.com/contents/nipponica/sample_koumoku.html?entryid=183" },
      { title: "冤罪マップ（1997）無罪確定", url: "https://enzai-map.com/cases/todeno/" }
    ]
  },
  {
    id: "new-national-theatre",
    name: "新国立劇場と東京オペラシティ",
    era: "modern",
    year: 1997,
    yearLabel: "1997年（平成9年）10月開場",
    lat: 35.6830, lng: 139.6865,
    area: "本町・初台",
    summary: "オペラ・バレエ・演劇のための国立劇場。",
    detail: "文化庁が建設した国立の劇場で、オペラ・バレエ・現代舞踊・演劇を上演します。隣接する東京オペラシティとあわせて「東京オペラシティ街区」として一体的に開発されました。",
    tags: ["劇場", "オペラ", "初台"],
    sources: [
      { title: "新国立劇場 沿革", url: "https://www.nntt.jac.go.jp/about/foundation/history.html" }
    ]
  }
];

/*
 * 渋谷区の歴史年表
 *   year   : 西暦（並び順に使用）
 *   label  : 表示用の年
 *   text   : 出来事
 *   spot   : 関連スポットの id（任意。年表から地図へ移動できます）
 *   dark   : 事件・事故・災害などの出来事なら true
 */
window.TIMELINE = [
  { year: 1087,  label: "11世紀（伝承）", text: "源義家が旗洗池で白旗を洗ったという伝説（幡ヶ谷の由来）", spot: "hataaraiike" },
  { year: 1591,  label: "1591年", text: "秀忠の乳母が初台の地を拝領し「初台局」と名乗る", spot: "hatsudai-shoshunji" },
  { year: 1604,  label: "1604年", text: "甲州街道に塚が築かれたと伝わる（笹塚の由来）", spot: "sasazuka" },
  { year: 1856,  label: "1856年", text: "篤姫が渋谷の薩摩藩屋敷から江戸城へ輿入れ", spot: "tokiwamatsu" },
  { year: 1877,  label: "1877年", text: "徳川家達が千駄ヶ谷に屋敷を構える（千駄ヶ谷御殿）", spot: "sendagaya-goten" },
  { year: 1887,  label: "1887年頃", text: "円山町に芸者屋が開業し、花街が始まる", spot: "maruyamacho-kagai" },
  { year: 1891,  label: "1891年", text: "日本赤十字社の病院が広尾へ移転", spot: "jrc-hospital" },
  { year: 1909.5, label: "1909年", text: "代々木練兵場と陸軍刑務所が設けられる", spot: "yoyogi-first-flight" },
  { year: 1913,  label: "1913年", text: "京王電気軌道が笹塚〜調布間で開業。円山町が三業地に指定", spot: "sasazuka" },
  { year: 1918,  label: "1918年", text: "久邇宮邸（現・聖心女子大学）完成", spot: "kuninomiya" },
  { year: 1924.5, label: "1924年", text: "堤康次郎が道玄坂に百軒店を開く", spot: "hyakkendana" },
  { year: 1927.5, label: "1927年4月1日", text: "小田急線開業。参宮橋・代々木八幡・代々木上原駅ができる", spot: "odakyu-sanguubashi" },
  { year: 1948.5, label: "1948年頃", text: "道玄坂下の闇市に「恋文横丁」が生まれる", spot: "koibumi-yokocho" },
  { year: 1960,  label: "1960年6月", text: "安保闘争のデモ隊が南平台の岸首相邸に押し寄せる", spot: "nanpeidai-anpo", dark: true },
  { year: 1963,  label: "1963年", text: "幡ヶ谷の地名の由来・旗洗池が埋め立てられる", spot: "hataaraiike" },
  { year: 1964.5, label: "1964年", text: "渋谷公会堂・区役所完成。公会堂は東京五輪の重量挙げ会場に", spot: "shibuya-kokaido" },
  { year: 1966.5, label: "1966年", text: "住居表示の実施で常磐松町などが「東」に", spot: "tokiwamatsu" },
  { year: 1972,  label: "1972年", text: "松濤に観世能楽堂が開場（2015年閉場）", spot: "kanze-nohgakudo" },
  { year: 1973.5, label: "1973年", text: "渋谷駅前交差点がスクランブル化。NHKの本部機能が渋谷へ", spot: "scramble" },
  { year: 1976,  label: "1976年", text: "千駄ヶ谷に将棋会館完成", spot: "shogi-kaikan" },
  { year: 1997,  label: "1997年3月", text: "円山町で殺人事件（のちに冤罪が判明、未解決）", spot: "enzai-1997", dark: true },
  { year: 1997.5, label: "1997年10月", text: "新国立劇場開場", spot: "new-national-theatre" },
  { year: 2012.5, label: "2012年", text: "1997年の円山町の事件で服役していた男性が再審無罪に", spot: "enzai-1997", dark: true },
  { year: 2019,  label: "2019年", text: "新区役所の使用開始、渋谷公会堂が「LINE CUBE SHIBUYA」として再開", spot: "shibuya-kokaido" },
  { year: 2024,  label: "2024年", text: "将棋会館が新会館へ移転。路上飲酒の禁止が通年に", spot: "shogi-kaikan" },
  { year: 1923,  label: "1923年9月1日", text: "関東大震災。渋谷など山の手は比較的被害が少なく、その後住宅地として発展する", dark: true },
  { year: 1945,  label: "1945年4月14日", text: "空襲で明治神宮の本殿・拝殿が焼失（1958年再建）", spot: "meiji-jingu", dark: true },
  { year: 1945.4, label: "1945年5月25日", text: "東京陸軍刑務所で米軍捕虜62人が焼死", spot: "pow-fire", dark: true },
  { year: 1946.5, label: "1946年7月19日", text: "渋谷警察署前で渋谷事件", spot: "shibuya-jiken", dark: true },
  { year: 1958,  label: "1958年9月", text: "狩野川台風。渋谷川・古川流域で浸水被害", spot: "flood", dark: true },
  { year: 1971,  label: "1971年11月14日", text: "渋谷暴動事件。警備の警察官が死亡", spot: "shibuya-riot", dark: true },
  { year: 2007,  label: "2007年6月19日", text: "松濤の温泉施設で天然ガス爆発、3人死亡", spot: "siespa", dark: true },
  { year: 2010,  label: "2010年9月", text: "宮下公園でホームレスの人々のテントなどを行政代執行で撤去", spot: "miyashita-2010", dark: true },
  { year: 2014,  label: "2014年", text: "代々木公園を中心にデング熱の国内感染が約70年ぶりに発生", spot: "dengue-2014", dark: true },
  { year: 2018,  label: "2018年10月", text: "ハロウィーン前の騒ぎで軽トラックが横転。翌年、路上飲酒禁止条例", spot: "halloween", dark: true },
  { year: -2500, label: "約4,500年前", text: "代々木の台地に縄文時代の集落が営まれる", spot: "yoyogi-hachiman-iseki" },
  { year: 100,   label: "約2,000年前", text: "猿楽町・鉢山町の台地に弥生時代の集落", spot: "sarugaku-kodai-jukyo" },
  { year: 600,   label: "6〜7世紀",    text: "猿楽塚古墳が築かれる", spot: "sarugakuzuka" },
  { year: 1092,  label: "1092年",      text: "社伝による金王八幡宮の創建。のちに渋谷氏がこの地に渋谷城を築く", spot: "konno-hachimangu" },
  { year: 1212,  label: "1212年",      text: "社伝による代々木八幡宮の創建", spot: "yoyogi-hachimangu" },
  { year: 1213,  label: "1213年",      text: "和田合戦。一族の大和田道玄が道玄坂に潜んだという伝承", spot: "dogenzaka" },
  { year: 1524,  label: "1524年",      text: "北条氏綱と上杉朝興の戦いの中で渋谷城が焼き払われる", spot: "konno-hachimangu" },
  { year: 1612,  label: "1612年",      text: "青山忠俊と春日局により金王八幡宮の社殿造営が始まる", spot: "konno-hachimangu" },
  { year: 1623,  label: "1623年",      text: "黒田忠之が祥雲寺の前身を赤坂に創建（1668年頃に広尾へ）", spot: "shounji" },
  { year: 1653,  label: "1653年",      text: "玉川上水が開削され、区の北部を流れる", spot: "tamagawa-josui" },
  { year: 1700,  label: "1700年",      text: "渋谷新町が宮益町と改称（宮益坂の由来）", spot: "miyamasu-mitake" },
  { year: 1789,  label: "1789年",      text: "鳩森八幡神社に千駄ヶ谷の富士塚が築かれる", spot: "hatonomori" },
  { year: 1831,  label: "1830〜32年頃", text: "葛飾北斎が『冨嶽三十六景 穏田の水車』を描く", spot: "onden-suisha" },
  { year: 1876,  label: "1876年",      text: "旧紀州徳川家下屋敷が鍋島家に。茶園「松濤園」が開かれる", spot: "nabeshima-shoto" },
  { year: 1883,  label: "1883年",      text: "東京英和学校（のちの青山学院）が青山で開校", spot: "aoyama-gakuin" },
  { year: 1885,  label: "1885年",      text: "日本鉄道品川線の渋谷駅が開業", spot: "shibuya-station" },
  { year: 1889,  label: "1889年",      text: "市制町村制により渋谷村・千駄ヶ谷村・代々幡村が成立" },
  { year: 1890,  label: "1890年",      text: "ヱビスビール発売", spot: "yebisu" },
  { year: 1901,  label: "1901年",      text: "ビール出荷用の貨物駅として恵比寿駅が開業", spot: "yebisu" },
  { year: 1907,  label: "1907年",      text: "玉川電気鉄道（玉電）が開業。千駄ヶ谷村が町制施行", spot: "shibuya-station" },
  { year: 1909,  label: "1909年",      text: "渋谷村が町制施行し渋谷町に" },
  { year: 1910,  label: "1910年",      text: "代々木練兵場で日本初の動力飛行", spot: "yoyogi-first-flight" },
  { year: 1912,  label: "1912年",      text: "唱歌「春の小川」発表", spot: "haru-no-ogawa" },
  { year: 1915,  label: "1915年",      text: "代々幡村が町制施行し代々幡町に" },
  { year: 1919,  label: "1919年",      text: "朝倉虎治郎の邸宅（旧朝倉家住宅）が建つ", spot: "asakura-house" },
  { year: 1920,  label: "1920年",      text: "明治神宮鎮座。表参道が参道として整備される", spot: "meiji-jingu" },
  { year: 1923,  label: "1923年",      text: "國學院大學が渋谷に移転", spot: "kokugakuin" },
  { year: 1924,  label: "1924年",      text: "原宿駅の木造駅舎が竣工", spot: "harajuku-station" },
  { year: 1927,  label: "1927年",      text: "同潤会青山アパート・代官山アパートが完成", spot: "dojunkai-aoyama" },
  { year: 1932,  label: "1932年10月1日", text: "渋谷町・千駄ヶ谷町・代々幡町が合併し、東京市渋谷区が誕生" },
  { year: 1934,  label: "1934年",      text: "ハチ公像の建立。東横百貨店が開業", spot: "hachiko" },
  { year: 1936,  label: "1936年2月26日", text: "二・二六事件", spot: "226-memorial", dark: true },
  { year: 1938,  label: "1938年",      text: "東京高速鉄道（現・銀座線）渋谷駅が開業。東京回教礼拝堂が落成", spot: "toyoko-dept" },
  { year: 1940,  label: "1940年",      text: "東郷神社創建", spot: "togo-jinja" },
  { year: 1945,  label: "1945年5月25日", text: "山の手大空襲。表参道などが大きな被害を受ける", spot: "yamanote-kushu", dark: true },
  { year: 1946,  label: "1946年",      text: "代々木練兵場跡に米軍住宅地「ワシントンハイツ」", spot: "washington-heights" },
  { year: 1947,  label: "1947年",      text: "地方自治法の施行により東京都の特別区となる" },
  { year: 1948,  label: "1948年",      text: "ハチ公像再建。表参道のケヤキの植え直しが始まる", spot: "hachiko" },
  { year: 1950,  label: "1950年",      text: "代々木八幡宮の境内で縄文時代の遺跡が見つかる", spot: "yoyogi-hachiman-iseki" },
  { year: 1956,  label: "1956年",      text: "東急文化会館開業", spot: "tokyu-bunka-kaikan" },
  { year: 1964,  label: "1964年",      text: "ワシントンハイツ返還、東京オリンピック開催。代々木競技場完成。河骨川が暗渠に", spot: "yoyogi-gym" },
  { year: 1965,  label: "1965年",      text: "二・二六事件慰霊像建立", spot: "226-memorial" },
  { year: 1966,  label: "1966年",      text: "宮下公園が東京初の屋上公園に", spot: "miyashita-park" },
  { year: 1967,  label: "1967年",      text: "代々木公園開園", spot: "washington-heights" },
  { year: 1969,  label: "1969年",      text: "代官山ヒルサイドテラス第1期竣工", spot: "hillside-terrace" },
  { year: 1973,  label: "1973年",      text: "渋谷パルコ開業。「公園通り」が生まれる", spot: "parco" },
  { year: 1975,  label: "1975年",      text: "白根記念郷土文化館（現・郷土博物館・文学館）開館", spot: "shirane-museum" },
  { year: 1977,  label: "1977年",      text: "原宿の歩行者天国が始まる", spot: "hokoten" },
  { year: 1979,  label: "1979年",      text: "SHIBUYA109開業", spot: "shibuya-109" },
  { year: 1980,  label: "1980年",      text: "新島からモヤイ像が贈られる", spot: "moyai" },
  { year: 1981,  label: "1981年",      text: "松濤美術館開館", spot: "shoto-museum" },
  { year: 1983,  label: "1983年",      text: "国立能楽堂開場", spot: "noh-theatre" },
  { year: 1989,  label: "1989年",      text: "Bunkamura開業", spot: "bunkamura" },
  { year: 1990,  label: "1990年",      text: "東京体育館が改築オープン", spot: "tokyo-gym" },
  { year: 1994,  label: "1994年",      text: "ビール工場跡に恵比寿ガーデンプレイス", spot: "yebisu" },
  { year: 1997,  label: "1997年",      text: "古賀政男音楽博物館開館", spot: "koga-masao" },
  { year: 1998,  label: "1998年",      text: "原宿の歩行者天国が廃止", spot: "hokoten" },
  { year: 2000,  label: "2000年",      text: "東京ジャーミイ完成。代官山アドレス開業", spot: "tokyo-camii" },
  { year: 2003,  label: "2003年",      text: "東急文化会館閉館。同潤会青山アパート解体", spot: "tokyu-bunka-kaikan" },
  { year: 2004,  label: "2004年",      text: "旧朝倉家住宅が国の重要文化財に", spot: "asakura-house" },
  { year: 2006,  label: "2006年",      text: "表参道ヒルズ開業", spot: "dojunkai-aoyama" },
  { year: 2012,  label: "2012年",      text: "渋谷ヒカリエ開業", spot: "tokyu-bunka-kaikan" },
  { year: 2018,  label: "2018年",      text: "渋谷ストリーム開業、渋谷川沿いに遊歩道", spot: "shibuya-stream" },
  { year: 2020,  label: "2020年",      text: "MIYASHITA PARK開業。原宿駅が新駅舎に。東急東横店閉店", spot: "miyashita-park" },
  { year: 2021,  label: "2021年",      text: "国立代々木競技場が国の重要文化財に", spot: "yoyogi-gym" }
];

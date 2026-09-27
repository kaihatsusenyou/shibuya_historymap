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
    detail: "陸軍代々木練兵場で、徳川好敏大尉がフランス製の複葉機で高度70m・約3km・4分間の飛行に成功し、同じ日の午後には日野熊蔵大尉もドイツ製の単葉機で飛行しました。1974年、代々木公園内に「日本初飛行の地」の記念碑と二人の胸像が建てられました。",
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
    detail: "全国から献木された木々を植え、長い年月をかけて自然の森になるよう計画された「永遠の杜」です。明治神宮の鎮座にあわせて表参道も参道として整備されました。",
    tags: ["神社", "森", "原宿"]
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
    detail: "1924年に建てられた旧駅舎は、尖塔をのせたハーフティンバー風のデザインで親しまれ、晩年は都内最古の木造駅舎でした。耐火基準を満たさないため2020年3月に新駅舎へ役目を譲り、同年に解体されました。JR東日本は外観を再現した建物を建てるとしています。",
    tags: ["駅", "建築", "原宿"],
    sources: [
      { title: "鉄道コム 原宿駅の木造駅舎が再現で復活へ", url: "https://www.tetsudo.com/column/866/" }
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
  }
];

/*
 * 渋谷区の歴史年表
 *   year   : 西暦（並び順に使用）
 *   label  : 表示用の年
 *   text   : 出来事
 *   spot   : 関連スポットの id（任意。年表から地図へ移動できます）
 */
window.TIMELINE = [
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
  { year: 1936,  label: "1936年",      text: "二・二六事件", spot: "226-memorial" },
  { year: 1938,  label: "1938年",      text: "東京高速鉄道（現・銀座線）渋谷駅が開業。東京回教礼拝堂が落成", spot: "toyoko-dept" },
  { year: 1940,  label: "1940年",      text: "東郷神社創建", spot: "togo-jinja" },
  { year: 1945,  label: "1945年5月25日", text: "山の手大空襲。表参道などが大きな被害を受ける", spot: "yamanote-kushu" },
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

/*
 * 港区の歴史スポットデータ（区ごとのデータファイル）
 *
 * 項目の意味は data/shibuya.js の先頭の説明と同じです。
 * ※ 年代・由来には諸説あるものを含みます。「伝」「社伝」は伝承によるものです。
 *    事件・事故については、被害者や加害者など個人を特定する情報は載せない方針です
 *    （公人や、歴史上の人物として広く知られる当事者を除く）。
 */
(function () {

// 上から順に判定します（「芝浦」が「芝」より先に判定されるよう、台場・芝浦を先頭に置いています）
var DISTRICTS = [
  { key: "odaiba", label: "台場・芝浦", keywords: ["台場", "芝浦"] },
  { key: "shimbashi", label: "新橋・汐留・虎ノ門・愛宕", keywords: ["新橋", "汐留", "虎ノ門", "愛宕"] },
  { key: "akasaka", label: "赤坂・青山・乃木坂", keywords: ["赤坂", "青山", "乃木坂"] },
  { key: "roppongi", label: "六本木・麻布", keywords: ["六本木", "麻布"] },
  { key: "takanawa", label: "高輪・白金", keywords: ["高輪", "白金"] },
  { key: "shiba", label: "芝・芝公園・浜松町・三田", keywords: ["芝", "浜松町", "三田", "田町"] }
];

var SPOTS = [
  // ---------------- 原始・古代 ----------------
  {
    id: "zenpukuji",
    name: "善福寺（麻布山）",
    era: "ancient",
    year: 824,
    yearLabel: "伝 824年（天長元年）空海の開山／1859年 アメリカ公使館",
    lat: 35.6522, lng: 139.7340,
    area: "麻布",
    summary: "都内でも屈指の古い由緒を持つ寺。幕末には最初のアメリカ公使館が置かれた。",
    detail: "824年、空海（弘法大師）が高野山にならって開いたと伝わり、はじめは真言宗の寺でした。1859年には初代アメリカ公使ハリスの公使館が置かれ、日米外交の舞台となりました。",
    tags: ["寺", "空海", "外交", "麻布"],
    wiki: ["善福寺 (東京都港区)"],
    sources: [
      { title: "善福寺 歴史", url: "https://azabu-san.or.jp/history.html" }
    ]
  },
  {
    id: "shiba-daijingu",
    name: "芝大神宮",
    era: "ancient",
    year: 1005,
    yearLabel: "1005年（寛弘2年）鎮座",
    lat: 35.6575, lng: 139.7543,
    area: "芝大門",
    summary: "伊勢神宮の神を祀る「関東のお伊勢さま」。長いお祭りは「だらだら祭り」。",
    detail: "平安時代の1005年、一条天皇の時代に鎮座したと伝わります。9月の例大祭は10日以上も続くことから、江戸っ子に「だらだら祭り」と呼ばれて親しまれてきました。",
    highlights: ["だらだら祭り（9月）", "名物の生姜と千木筥"],
    tags: ["神社", "祭", "芝"],
    wiki: ["芝大神宮"],
    sources: [
      { title: "芝大神宮 太良太良まつり", url: "https://www.shibadaijingu.com/matsuri/" }
    ]
  },

  // ---------------- 中世 ----------------
  {
    id: "zojoji",
    name: "増上寺",
    era: "medieval",
    year: 1393,
    yearLabel: "1393年（明徳4年）改宗・改称／1598年 芝へ移転",
    lat: 35.6573, lng: 139.7483,
    area: "芝公園",
    summary: "徳川将軍家の菩提寺。6人の将軍が眠る。",
    detail: "1393年、真言宗の光明寺を聖聡が浄土宗に改め、増上寺と名を変えたのが始まりです。徳川家康の江戸入り後、1598年に現在地に移され、徳川家の菩提寺として大伽藍が造営されました。2代秀忠をはじめ6人の将軍が葬られています。1945年の空襲で霊廟や本堂など多くを焼失しましたが、1605年建立の三解脱門は焼け残り、国の重要文化財となっています。",
    highlights: ["三解脱門（重要文化財）", "徳川将軍家墓所"],
    tags: ["寺", "徳川家", "空襲", "重要文化財"],
    wiki: ["増上寺"],
    sources: [
      { title: "大本山 増上寺 歴史", url: "https://www.zojoji.or.jp/info/history.html" },
      { title: "このまちアーカイブス 徳川家の菩提寺「増上寺」と「芝公園」", url: "https://smtrc.jp/town-archives/city/shiba/p02.html" }
    ]
  },
  {
    id: "shirogane-choja",
    name: "自然教育園（白金長者屋敷跡）",
    era: "medieval",
    year: 1450,
    yearLabel: "室町時代（伝承）／1949年 天然記念物・史跡",
    lat: 35.6378, lng: 139.7195,
    area: "白金台",
    summary: "白金長者の屋敷跡と伝わる、都心に残る武蔵野の森。",
    detail: "室町時代、「白金長者」と呼ばれた豪族がここに屋敷を構えたと伝わります。江戸時代は高松藩松平家の下屋敷、明治には陸海軍の火薬庫、1917年からは白金御料地となりました。1949年に国の天然記念物・史跡に指定され、1962年から国立科学博物館附属自然教育園として公開されています。",
    tags: ["森", "自然", "天然記念物", "伝説"],
    wiki: ["国立科学博物館附属自然教育園"],
    sources: [
      { title: "附属自然教育園について", url: "https://ins.kahaku.go.jp/about/" }
    ]
  },

  // ---------------- 江戸 ----------------
  {
    id: "atago",
    name: "愛宕神社と出世の石段",
    era: "edo",
    year: 1603,
    yearLabel: "1603年（慶長8年）創建",
    lat: 35.6647, lng: 139.7486,
    area: "愛宕",
    summary: "23区で一番高い自然の山の上の神社。馬で石段を上った武士の伝説が残る。",
    detail: "江戸幕府を開いた1603年に徳川家康が防火の神として建てました。標高26mの愛宕山は、23区内で自然の地形としては最も高い山です。1634年、丸亀藩の曲垣平九郎が馬に乗ったまま急な石段を駆け上がって将軍に称えられたことから、「出世の石段」と呼ばれています。",
    highlights: ["出世の石段（86段）"],
    tags: ["神社", "徳川家康", "山"],
    wiki: ["愛宕神社 (東京都港区)"],
    sources: [
      { title: "愛宕神社について", url: "https://www.atago-jinja.com/about/" }
    ]
  },
  {
    id: "kyu-shiba-rikyu",
    name: "旧芝離宮恩賜庭園",
    era: "edo",
    year: 1678,
    yearLabel: "1678年（延宝6年）／1924年 公開",
    lat: 35.6555, lng: 139.7580,
    area: "浜松町",
    summary: "老中・大久保忠朝の屋敷の庭園から生まれた大名庭園。",
    detail: "1678年に老中の大久保忠朝が将軍から屋敷地を与えられ、小田原から庭師を呼んで庭園「楽壽園」をつくりました。関東大震災で建物と樹木のほとんどが焼けましたが、翌1924年、昭和天皇の結婚を記念して東京市に下賜され、「旧芝離宮恩賜庭園」として公開されました。国の名勝です。",
    tags: ["庭園", "大名", "名勝"],
    wiki: ["旧芝離宮恩賜庭園"],
    sources: [
      { title: "東京都公園協会 旧芝離宮恩賜庭園", url: "https://www.tokyo-park.or.jp/park/kyu-shiba-rikyu/index.html" }
    ]
  },
  {
    id: "sengakuji",
    name: "泉岳寺と赤穂義士の墓",
    era: "edo",
    year: 1703,
    yearLabel: "1641年 高輪に再建／1703年 義士が葬られる",
    lat: 35.6380, lng: 139.7400,
    area: "高輪",
    summary: "主君の仇を討った赤穂浪士47人が眠る寺。",
    detail: "1612年に徳川家康が外桜田に創建し、寛永の大火のあと高輪に再建されました。赤穂藩主・浅野長矩の墓があり、主君の仇・吉良上野介を討った赤穂浪士は討ち入り後にここへ向かい、1703年に切腹したのち葬られました。「忠臣蔵」の聖地として今も多くの人が訪れます。",
    highlights: ["赤穂義士墓所（国史跡）", "12月14日の義士祭"],
    tags: ["寺", "赤穂事件", "忠臣蔵"],
    wiki: ["泉岳寺"],
    sources: [
      { title: "全国観光資源台帳 泉岳寺", url: "https://tabi.jtb.or.jp/res/130061-" }
    ]
  },
  {
    id: "takanawa-okido",
    name: "高輪大木戸跡",
    era: "edo",
    year: 1710,
    yearLabel: "1710年（宝永7年）",
    lat: 35.6405, lng: 139.7415,
    area: "高輪",
    summary: "東海道から江戸に入る南の玄関口。",
    detail: "東海道の両側に石垣を築き、門と柵を設けた関門で、朝6時ごろに開き夕方6時ごろに閉じて治安を守りました。すぐ東には江戸湾が広がっていました。現在は国道15号沿いに東側の石垣だけが残り、国の史跡となっています。",
    tags: ["街道", "東海道", "国史跡"],
    wiki: ["高輪大木戸"],
    sources: [
      { title: "港区ゆかりの人物データベース 高輪大木戸", url: "https://www.lib.city.minato.tokyo.jp/yukari/j/ukiyoe-detail.cgi?id=18" }
    ]
  },
  {
    id: "akasaka-hikawa",
    name: "赤坂氷川神社",
    era: "edo",
    year: 1730,
    yearLabel: "1730年（享保15年）遷座",
    lat: 35.6680, lng: 139.7365,
    area: "赤坂",
    summary: "8代将軍吉宗が建てた社殿が、震災も空襲も免れて残る。",
    detail: "8代将軍徳川吉宗の命で現在地に社殿が建てられ、1730年に遷座しました。社殿は安政の大地震、関東大震災、東京大空襲のいずれの被害も免れ、江戸時代の姿のまま残っています。",
    tags: ["神社", "徳川吉宗", "文化財"],
    wiki: ["氷川神社 (東京都港区赤坂)", "赤坂氷川神社"],
    sources: [
      { title: "赤坂氷川神社について", url: "http://www.akasakahikawa.or.jp/about/" }
    ]
  },
  {
    id: "daiba",
    name: "品川台場（台場公園）",
    era: "edo",
    year: 1853,
    yearLabel: "1853年（嘉永6年）築造開始",
    lat: 35.6340, lng: 139.7705,
    area: "台場",
    summary: "ペリー来航に驚いた幕府が海の上に築いた砲台。「お台場」の名の由来。",
    detail: "1853年のペリー来航を受け、江川英龍の提案で江戸湾の防衛のために築かれた砲台です。11基の予定でしたが資金不足で5基だけが完成しました。第三台場と第六台場は国の史跡で、第三台場は台場公園として上陸でき、第六台場はレインボーブリッジの遊歩道から眺められます。",
    tags: ["砲台", "幕末", "ペリー", "国史跡"],
    wiki: ["台場公園", "品川台場"],
    sources: [
      { title: "東京港埠頭 台場の歴史", url: "https://www.tptc.co.jp/park/01_01/history" }
    ]
  },
  {
    id: "heusken",
    name: "ヒュースケン殺害事件",
    era: "edo",
    dark: "事件",
    year: 1861,
    yearLabel: "1861年1月（万延元年12月）",
    lat: 35.6545, lng: 139.7380,
    area: "麻布（古川の中の橋付近、位置はおおよそ）",
    summary: "アメリカ公使館の通訳が攘夷派に襲われて亡くなった。",
    detail: "初代アメリカ公使ハリスの通訳を務めたオランダ出身のヒュースケンが、夜、善福寺の公使館へ帰る途中、古川にかかる中の橋付近で攘夷派の薩摩藩士らに襲われ、翌日亡くなりました。幕府は母親に1万ドルの賠償金を支払い、外国人の保護体制が強化されました。",
    tags: ["事件", "攘夷", "幕末", "外交"],
    sources: [
      { title: "コトバンク ヒュースケン殺害事件", url: "https://kotobank.jp/word/%E3%83%92%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%B3%E6%AE%BA%E5%AE%B3%E4%BA%8B%E4%BB%B6-863976" }
    ]
  },
  {
    id: "tozenji",
    name: "東禅寺事件（イギリス公使館襲撃）",
    era: "edo",
    dark: "事件",
    year: 1861,
    yearLabel: "1861年／1862年",
    lat: 35.6395, lng: 139.7345,
    area: "高輪",
    summary: "イギリス公使館が置かれた寺が、攘夷派に2度襲われた。",
    detail: "イギリス公使館が置かれていた高輪の東禅寺を、1861年に水戸藩の浪士14人が襲撃し、書記官らが負傷しました。公使オールコックはかろうじて難を逃れました。翌1862年には警備の松本藩士がイギリス兵2人を殺害する事件も起きました。",
    tags: ["事件", "攘夷", "幕末", "外交"],
    wiki: ["東禅寺事件"],
    sources: [
      { title: "コトバンク 東禅寺事件", url: "https://kotobank.jp/word/%E6%9D%B1%E7%A6%85%E5%AF%BA%E4%BA%8B%E4%BB%B6-103807" },
      { title: "港区立郷土歴史館 東禅寺事件銀製メダル", url: "https://www.minato-rekishi.com/museum/2020/10/R02-02.html" }
    ]
  },
  {
    id: "saigo-katsu",
    name: "西郷・勝会見の地（薩摩藩蔵屋敷跡）",
    era: "edo",
    year: 1868,
    yearLabel: "1868年（慶応4年）3月14日",
    lat: 35.6468, lng: 139.7460,
    area: "芝（田町）",
    summary: "江戸を戦火から救った、江戸城無血開城の話し合いの場。",
    detail: "新政府軍の西郷隆盛と旧幕府の勝海舟が、薩摩藩の蔵屋敷で2日間にわたって会談し、江戸城を戦わずに明け渡すことを決めました。これにより、予定されていた江戸総攻撃が中止されました。第一京浜沿いに記念碑があります。",
    highlights: ["「江戸開城 西郷南洲 勝海舟 会見之地」の碑"],
    tags: ["幕末", "江戸開城", "西郷隆盛", "勝海舟"],
    sources: [
      { title: "東京とりっぷ 江戸開城 西郷南洲 勝海舟会見の地", url: "https://tokyo-trip.org/spot/visiting/tk0431/" },
      { title: "国立国会図書館 勝海舟の日記", url: "https://www.ndl.go.jp/nikki/citeid/katsu_18680313" }
    ]
  },

  // ---------------- 明治・大正 ----------------
  {
    id: "keio",
    name: "慶應義塾と三田演説館",
    era: "meiji",
    year: 1871,
    yearLabel: "1871年 三田へ移転／1875年 演説館",
    lat: 35.6485, lng: 139.7425,
    area: "三田",
    summary: "福沢諭吉が大名屋敷跡に開いた学塾。日本初の演説会堂が残る。",
    detail: "1871年、福沢諭吉の慶應義塾が島原藩の中屋敷跡に移り、当時最大規模の私塾となりました。1875年に福沢が自費で建てた三田演説館は日本初の演説会堂で、国の重要文化財です。",
    tags: ["学校", "福沢諭吉", "重要文化財"],
    wiki: ["三田演説館", "慶應義塾"],
    sources: [
      { title: "慶應義塾 三田移転150年", url: "https://www.keio.ac.jp/ja/keio-times/features/2021/10/" }
    ]
  },
  {
    id: "shimbashi-station",
    name: "旧新橋停車場（鉄道発祥の地）",
    era: "meiji",
    year: 1872,
    yearLabel: "1872年（明治5年）開業／2003年 駅舎を再現",
    lat: 35.6650, lng: 139.7615,
    area: "汐留",
    summary: "日本最初の鉄道の始発駅。",
    detail: "1872年、新橋〜横浜間に日本初の鉄道が開業し、その始発駅となりました。駅舎はアメリカ人ブリジェンスの設計による洋風建築でした。汐留の再開発で遺構が見つかり、2003年に同じ場所に当時の外観の駅舎が再現され、鉄道歴史展示室になっています。",
    tags: ["鉄道", "駅", "国史跡"],
    wiki: ["旧新橋停車場"],
    sources: [
      { title: "東日本鉄道文化財団 旧新橋停車場", url: "https://www.ejrcf.or.jp/shinbashi/facilities.html" }
    ]
  },
  {
    id: "takanawa-chikutei",
    name: "高輪築堤跡",
    era: "meiji",
    year: 1872,
    yearLabel: "1872年 築造／2019年 発見／2021年 国史跡",
    lat: 35.6355, lng: 139.7405,
    area: "高輪（高輪ゲートウェイ駅付近）",
    summary: "海の上に石垣を築いて走らせた、日本最初の鉄道の遺構。",
    detail: "日本初の鉄道は、高輪付近では海の上に石を積んだ堤（築堤）を築いてその上を走りました。2019年、品川駅周辺の工事中に石垣が見つかり、発掘で南北に長い築堤が確認されました。2021年、「旧新橋停車場跡及び高輪築堤跡」として国の史跡に指定されています。",
    tags: ["鉄道", "遺跡", "国史跡", "再開発"],
    wiki: ["高輪築堤"],
    sources: [
      { title: "文化庁 高輪築堤跡の史跡指定について", url: "https://www.bunka.go.jp/prmagazine/rensai/news/news_003.html" },
      { title: "港区 高輪築堤跡", url: "https://www.city.minato.tokyo.jp/bunkazai/tikutei2.html" }
    ]
  },
  {
    id: "aoyama-reien",
    name: "青山霊園",
    era: "meiji",
    year: 1874,
    yearLabel: "1872年 開設／1874年 公共墓地に",
    lat: 35.6655, lng: 139.7220,
    area: "青山",
    summary: "大名屋敷跡につくられた公共墓地。ハチ公の墓もある。",
    detail: "美濃郡上藩青山家の下屋敷跡に1872年に開かれ、1874年に市民のための公共墓地となりました。のちに日本初の公営墓地となっています。多くの著名人のほか、近代化に貢献した外国人の墓地もあり、ハチ公の飼い主・上野英三郎博士の墓のそばには、ハチ公の碑もあります。",
    tags: ["墓地", "ハチ公", "青山"],
    wiki: ["青山霊園"],
    sources: [
      { title: "コトバンク 青山霊園", url: "https://kotobank.jp/word/%E9%9D%92%E5%B1%B1%E9%9C%8A%E5%9C%92-674276" }
    ]
  },
  {
    id: "geihinkan",
    name: "迎賓館赤坂離宮",
    era: "meiji",
    year: 1909,
    yearLabel: "1909年（明治42年）完成／2009年 国宝",
    lat: 35.6804, lng: 139.7275,
    area: "赤坂（元赤坂）",
    summary: "皇太子の住まいとして建てられた、日本で唯一のネオ・バロック様式の宮殿。国宝。",
    detail: "のちの大正天皇の東宮御所として、片山東熊の設計で10年をかけて1909年に完成しました。戦後は国立国会図書館や東京オリンピック組織委員会などにも使われたのち、迎賓館となりました。2009年、明治以降の建物として初めて国宝に指定されています。",
    tags: ["建築", "国宝", "宮殿"],
    wiki: ["迎賓館赤坂離宮"],
    sources: [
      { title: "全国観光資源台帳 迎賓館赤坂離宮", url: "https://tabi.jtb.or.jp/res/130067-" }
    ]
  },
  {
    id: "nogi",
    name: "旧乃木邸と乃木神社",
    era: "meiji",
    year: 1912,
    yearLabel: "1912年（大正元年）9月13日",
    lat: 35.6700, lng: 139.7275,
    area: "赤坂（乃木坂）",
    summary: "明治天皇の葬儀の日、乃木希典夫妻がこの家で自刃した。",
    detail: "日露戦争の将軍・乃木希典と妻の静子は、明治天皇の大喪の日にあたる1912年9月13日、自宅で天皇のあとを追って自刃しました。近くの「幽霊坂」はこのとき「乃木坂」と改められ、邸の隣には1923年に乃木神社が鎮座しました。",
    tags: ["明治", "乃木希典", "神社", "地名"],
    wiki: ["乃木神社 (東京都港区)"],
    sources: [
      { title: "web春秋 明治天皇の大喪と乃木希典の殉死", url: "https://haruaki.shunjusha.co.jp/posts/785" }
    ]
  },
  {
    id: "nhk-atago",
    name: "NHK放送博物館（ラジオ放送のはじまり）",
    era: "meiji",
    year: 1925,
    yearLabel: "1925年 3月 芝浦で仮放送／7月 愛宕山で本放送",
    lat: 35.6636, lng: 139.7496,
    area: "愛宕",
    summary: "「JOAK、こちらは東京放送局であります」──日本のラジオはここから。",
    detail: "1925年3月22日、芝浦の東京高等工芸学校の図書室を仮の放送所として、日本初のラジオ放送が始まりました。同年7月、愛宕山に新局舎が完成して本放送に切り替わり、1939年まで放送が続けられました。跡地には現在、NHK放送博物館があります。",
    tags: ["放送", "ラジオ", "NHK"],
    wiki: ["NHK放送博物館"],
    sources: [
      { title: "AV Watch 愛宕山のNHK放送博物館", url: "https://av.watch.impress.co.jp/docs/news/1646155.html" },
      { title: "レトロ郵便局 ラジオの始まり（1925年）", url: "https://retropost.net/radio1925/" }
    ]
  },

  // ---------------- 昭和（戦前・戦中） ----------------
  {
    id: "infantry3",
    name: "歩兵第三連隊と二・二六事件（国立新美術館）",
    era: "prewar",
    dark: "事件",
    year: 1936,
    yearLabel: "1928年 兵舎完成／1936年 二・二六事件",
    lat: 35.6653, lng: 139.7263,
    area: "六本木",
    summary: "反乱部隊が出撃した兵舎の跡に、美術館が建っている。",
    detail: "六本木は明治以降「陸軍の街」でした。1928年に完成した歩兵第三連隊の兵舎は、陸軍初の鉄筋コンクリート造の兵舎で、1936年の二・二六事件ではここからも反乱部隊が出撃しました。戦後は米軍の接収を経て東京大学生産技術研究所となり、その跡地に2007年、国立新美術館が開館しました。兵舎の一部は別館として保存されています。",
    highlights: ["国立新美術館の別館（旧兵舎の一部）"],
    tags: ["事件", "陸軍", "二・二六事件", "美術館"],
    wiki: ["国立新美術館"],
    sources: [
      { title: "六本木経済新聞 旧陸軍兵舎を一部保存", url: "https://roppongi.keizai.biz/headline/1170/" },
      { title: "このまちアーカイブス 『陸軍の街』とその後の発展", url: "https://smtrc.jp/town-archives/city/azabu/p05.html" }
    ]
  },
  {
    id: "takahashi-korekiyo",
    name: "高橋是清翁記念公園（二・二六事件の現場）",
    era: "prewar",
    dark: "事件",
    year: 1936,
    yearLabel: "1936年（昭和11年）2月26日",
    lat: 35.6727, lng: 139.7295,
    area: "赤坂",
    summary: "大蔵大臣・高橋是清が反乱部隊に殺害された邸宅の跡。",
    detail: "首相や蔵相を務めた高橋是清の邸宅があった場所です。1936年2月26日の未明、反乱部隊に襲われ、高橋は殺害されました。跡地は公園になり、邸宅の建物は小金井市の江戸東京たてもの園に移築されています。",
    tags: ["事件", "二・二六事件", "公園"],
    wiki: ["高橋是清翁記念公園"],
    sources: [
      { title: "港区 高橋是清翁記念公園", url: "https://www.city.minato.tokyo.jp/shisetsu/koen/akasaka/04.html" }
    ]
  },
  {
    id: "minato-kushu",
    name: "芝・麻布・赤坂の空襲",
    era: "prewar",
    dark: "戦争",
    year: 1945,
    yearLabel: "1945年（昭和20年）3月10日・5月25日ほか",
    lat: 35.6600, lng: 139.7300,
    area: "赤坂・麻布（区全体の被害）",
    summary: "赤坂区の8割以上の建物が焼けた。",
    detail: "1945年5月25〜26日の空襲で、現在の港区にあたる芝・麻布・赤坂の各区では737人が亡くなり、約2万9千棟が焼けました。3月10日の空襲でも新橋・汐留などで118人が亡くなっています。焼けたり壊れたりした建物の割合は、芝区で56.5％、麻布区で60.4％、赤坂区では83.7％にのぼりました。",
    tags: ["戦争", "空襲", "戦災"],
    sources: [
      { title: "広報みなと 1945年5月、港区に大規模な空襲がありました", url: "https://www.city.minato.tokyo.jp/kouhou/kuse/koho/minato2025/202505/20250501top/03.html" },
      { title: "港区 デジタル版 港区のあゆみ", url: "https://adeac.jp/minato-city/text-list/d110120/ht002980" }
    ]
  },

  // ---------------- 昭和（戦後） ----------------
  {
    id: "press-center",
    name: "赤坂プレスセンター（麻布米軍ヘリ基地）",
    era: "postwar",
    dark: "社会問題",
    year: 1945.9,
    yearLabel: "戦後から現在まで",
    lat: 35.6627, lng: 139.7228,
    area: "六本木",
    summary: "六本木の真ん中に、今も米軍のヘリポートがある。",
    detail: "六本木7丁目の約2万7千平方メートルの敷地は米陸軍の施設で、ヘリポートや宿泊施設、米軍向け新聞「星条旗新聞」の事務所などがあります。ヘリコプターの騒音や事故の危険から、港区や東京都は全面返還を求め続けており、住民による撤去運動も行われています。",
    tags: ["米軍", "基地", "社会問題"],
    wiki: ["赤坂プレスセンター"],
    sources: [
      { title: "港区 区内にある米軍基地等の要請行動", url: "https://www.city.minato.tokyo.jp/jinken/kurashi/hewa/torikumi/begunkichi.html" }
    ]
  },
  {
    id: "tokyo-tower",
    name: "東京タワー",
    era: "postwar",
    year: 1958,
    yearLabel: "1958年（昭和33年）12月23日完成",
    lat: 35.6586, lng: 139.7454,
    area: "芝公園",
    summary: "高さ333m。戦後の復興と高度成長のシンボル。",
    detail: "「塔博士」と呼ばれた内藤多仲らの設計による総合電波塔で、完成当時は日本一高い建造物でした。初年度だけで540万人が訪れ、テレビ放送の時代を支えました。",
    tags: ["電波塔", "観光", "昭和"],
    wiki: ["東京タワー"],
    sources: [
      { title: "日本経済新聞 1958年12月23日 東京タワーが完成", url: "https://www.nikkei.com/article/DGKDZO37388750Y1A211C1KB2000/" }
    ]
  },

  // ---------------- 平成・令和 ----------------
  {
    id: "roppongi-hills",
    name: "六本木ヒルズと回転ドア事故",
    era: "modern",
    dark: "事故",
    year: 2004,
    yearLabel: "2003年 開業／2004年3月26日 事故",
    lat: 35.6604, lng: 139.7292,
    area: "六本木",
    summary: "17年がかりの再開発で生まれた街で、6歳の子どもが回転ドアに挟まれて亡くなった。",
    detail: "約400人の地権者をまとめ、構想から17年をかけた再開発で2003年に開業しました。翌2004年3月、森タワーの大型自動回転ドアに6歳の男の子が挟まれて亡くなりました。誤作動を防ぐためにセンサーの検知範囲を狭めていたため子どもが検知されず、開業以来同様の挟まれ事故が30件以上起きていたことも明らかになりました。事故を機に、大型自動回転ドアの安全基準が見直されました。",
    tags: ["事故", "再開発", "安全"],
    wiki: ["六本木ヒルズ"],
    sources: [
      { title: "国土交通省 六本木ヒルズ事故の概要", url: "https://www.mlit.go.jp/kisha/kisha04/07/070408/03.pdf" },
      { title: "森ビル 六本木ヒルズ 開発経緯", url: "https://www.mori.co.jp/projects/roppongihills/history9.html" }
    ]
  },
  {
    id: "schindler",
    name: "区営住宅のエレベーター事故",
    era: "modern",
    dark: "事故",
    year: 2006,
    yearLabel: "2006年（平成18年）6月3日",
    lat: 35.6520, lng: 139.7560,
    area: "芝（位置は地域の目安）",
    summary: "扉が開いたままエレベーターが上昇し、高校生が亡くなった。",
    detail: "区営住宅で、降りようとした16歳の男子高校生が、扉が開いたまま急に上昇したエレベーターのかごと出入口の枠にはさまれて亡くなりました。ブレーキの異常な摩耗が直接の原因とされ、この事故をきっかけに、扉が開いたまま動き出すことを防ぐ装置の設置が法律で義務づけられました。",
    tags: ["事故", "エレベーター", "安全"],
    sources: [
      { title: "失敗学会 シンドラー、エレベータ事故", url: "https://www.shippai.org/shippai/html/index.php?name=nenkan2006_04_Schindler" },
      { title: "弁護士JPニュース シンドラーエレベーター事故から20年", url: "https://www.ben54.jp/news/3553" }
    ]
  },
  // ---------------- 追加（第2弾） ----------------
  {
    id: "karasumori",
    name: "烏森神社",
    era: "ancient",
    year: 940,
    yearLabel: "伝 940年（天慶3年）創建",
    lat: 35.6660, lng: 139.7575,
    area: "新橋",
    summary: "平将門の乱を鎮めた藤原秀郷が、カラスの群れる森に建てたと伝わる神社。",
    detail: "平将門の乱のとき、藤原秀郷が稲荷社に戦勝を祈ると白い狐が現れて白羽の矢を授け、乱を鎮めることができたと伝わります。お礼に社を建てようとした秀郷の夢に狐が現れて「神鳥の群がる所」を示し、カラスが集まる森を見つけてそこに社を建てたのが「烏森」の名の由来とされます。",
    tags: ["神社", "伝説", "平将門", "地名"],
    wiki: ["烏森神社"],
    sources: [
      { title: "東京都神社庁 烏森神社", url: "http://www.tokyo-jinjacho.or.jp/minato/3036" }
    ]
  },
  {
    id: "kotohira",
    name: "虎ノ門金刀比羅宮",
    era: "edo",
    year: 1660,
    yearLabel: "1660年 丸亀藩邸に創建／1679年 現在地へ",
    lat: 35.6695, lng: 139.7475,
    area: "虎ノ門",
    summary: "丸亀藩の屋敷神から始まった、オフィス街の「こんぴらさん」。",
    detail: "讃岐丸亀藩主・京極家が、国元の金刀比羅宮を江戸の藩邸に祀ったのが始まりで、1679年に現在地へ移りました。江戸の人々にも開放され、海上安全や商売繁盛の神として信仰を集めました。",
    tags: ["神社", "大名屋敷", "虎ノ門"],
    wiki: ["金刀比羅宮 (東京都港区)"],
    sources: [
      { title: "GO TOKYO 虎ノ門 金刀比羅宮", url: "https://www.gotokyo.org/jp/spot/254/index.html" }
    ]
  },
  {
    id: "roppongi-name",
    name: "「六本木」の地名",
    era: "edo",
    year: 1700,
    yearLabel: "江戸時代〜（諸説あり）",
    lat: 35.6628, lng: 139.7310,
    area: "六本木",
    summary: "「木」のつく名の大名屋敷が6つ？ 松の大木が6本？ 由来には諸説ある。",
    detail: "上杉・朽木・高木・青木・片桐・一柳と、「木」に縁のある名の大名の屋敷が集まっていたからという説、松の大木が6本あったからという説などがあり、定説はありません。江戸時代の六本木は武家屋敷の町で、湧き水に恵まれ金魚の養殖も盛んでした。",
    tags: ["地名", "大名屋敷", "六本木"],
    wiki: ["六本木"],
    sources: [
      { title: "レファレンス協同データベース 六本木の地名", url: "https://crd.ndl.go.jp/reference/entry/index.php?id=1000178533&page=ref_view" }
    ]
  },
  {
    id: "toyokawa-inari",
    name: "豊川稲荷東京別院",
    era: "edo",
    year: 1828,
    yearLabel: "1828年（文政11年）",
    lat: 35.6770, lng: 139.7300,
    area: "赤坂（元赤坂）",
    summary: "名奉行・大岡越前の屋敷に祀られていた稲荷から始まった寺。",
    detail: "豊川稲荷を篤く信仰していた大岡家（大岡越前守忠相の子孫）が、赤坂一ツ木の屋敷の一角に庶民も参拝できる場所を設けたのが始まりです。稲荷の名前がついていますが、神社ではなく曹洞宗の寺院です。",
    tags: ["寺", "稲荷", "大岡越前"],
    wiki: ["豊川稲荷東京別院"],
    sources: [
      { title: "キスポート 港区探訪 豊川稲荷東京別院", url: "https://www.kissport.or.jp/spot/tanbou/2509/" }
    ]
  },
  {
    id: "shinagawa-station",
    name: "品川駅（実は港区）",
    era: "meiji",
    year: 1872,
    yearLabel: "1872年（明治5年）6月 仮開業",
    lat: 35.6285, lng: 139.7387,
    area: "高輪（品川駅）",
    summary: "新橋より先に開業した、日本の鉄道発祥の駅の一つ。所在地は品川区ではなく港区。",
    detail: "1872年6月、正式開業（10月）に先立って品川〜横浜間で鉄道が仮開業しました。当時の線路は海岸沿いにあり、線路の東側は海でした。駅の東側（港南）はその後の埋め立てで生まれた土地です。駅の所在地は港区高輪で、品川区ではありません。",
    tags: ["鉄道", "駅", "埋め立て", "地名"],
    wiki: ["品川駅"],
    sources: [
      { title: "nippon.com 品川（JY25）", url: "https://www.nippon.com/ja/japan-topics/c13305/" }
    ]
  },
  {
    id: "meiji-gakuin",
    name: "明治学院のインブリー館と記念館",
    era: "meiji",
    year: 1890,
    yearLabel: "1890年頃",
    lat: 35.6378, lng: 139.7305,
    area: "白金",
    summary: "宣教師が建てた、明治の洋風建築が残るキャンパス。",
    detail: "明治学院は宣教師ヘボンらの流れをくむ学校です。宣教師館のインブリー館は1890年頃に建てられた木造の洋館で、国の重要文化財に指定されています。同じころに建てられた記念館は、道路の拡幅にともない1960年代に現在の位置へ移されました。",
    tags: ["学校", "建築", "重要文化財", "キリスト教"],
    wiki: ["インブリー館"],
    sources: [
      { title: "明治学院 歴史的建造物", url: "https://meijigakuin.jp/meigakuhistory/landmark/" }
    ]
  },
  {
    id: "teien-museum",
    name: "東京都庭園美術館（旧朝香宮邸）",
    era: "prewar",
    year: 1933,
    yearLabel: "1933年（昭和8年）完成",
    lat: 35.6386, lng: 139.7168,
    area: "白金台",
    summary: "フランスの装飾家と宮内省の技師が協力した、アール・デコの邸宅。",
    detail: "皇族の朝香宮家の邸宅として1933年に完成しました。主な部屋の内装はフランスの装飾家アンリ・ラパンが手がけ、建物は宮内省の技師が設計しました。アール・デコ様式の傑作として、1983年に美術館となり、2015年に国の重要文化財に指定されています。",
    tags: ["建築", "アール・デコ", "重要文化財", "美術館"],
    wiki: ["東京都庭園美術館"],
    sources: [
      { title: "東京都庭園美術館 朝香宮邸のアール・デコ", url: "https://www.teien-art-museum.ne.jp/archive/museum/asaka_artdeco.html" }
    ]
  },
  {
    id: "tbs",
    name: "TBS（赤坂のテレビ局）",
    era: "postwar",
    year: 1955,
    yearLabel: "1955年（昭和30年）4月1日 テレビ放送開始",
    lat: 35.6718, lng: 139.7365,
    area: "赤坂",
    summary: "NHK、日本テレビに続いて、赤坂一ツ木からテレビ放送を始めた。",
    detail: "1955年、NHKと日本テレビに次いでテレビ放送を開始し、赤坂一ツ木町（現在の赤坂5丁目）にスタジオと送信塔を設けました。以来、赤坂は「テレビの街」として知られるようになりました。",
    tags: ["放送", "テレビ", "赤坂"],
    wiki: ["TBSテレビ"],
    sources: [
      { title: "TBS放送センター（Wikipedia）", url: "https://ja.wikipedia.org/wiki/TBS%E6%94%BE%E9%80%81%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC" }
    ]
  },
  {
    id: "roppongi-zoku",
    name: "「六本木族」と国際的な夜の街",
    era: "postwar",
    year: 1960,
    yearLabel: "1959年ごろ〜",
    lat: 35.6595, lng: 139.7360,
    area: "麻布（飯倉片町）",
    summary: "米軍の街から、若者と外国人が集う夜の街へ。",
    detail: "明治以降「陸軍の街」だった六本木は、戦後は占領軍の施設が置かれ、外国人向けの店が増えていきました。1959年にテレビ局（現在のテレビ朝日）ができると、深夜までアメリカ映画や音楽を楽しむ若者が集まり「六本木族」と呼ばれました。1960年に飯倉片町に開店したイタリア料理店「キャンティ」には、作家や映画監督など多くの文化人が通いました。",
    tags: ["若者文化", "夜の街", "米軍", "戦後"],
    sources: [
      { title: "キャンティ 六本木族とは", url: "https://www.chianti-1960.com/news/20220630/646/" },
      { title: "Curiosity 泉麻人が綴る、六本木", url: "https://r100tokyo.com/curiosity/in-this-place/220902/" }
    ]
  },
  {
    id: "okura",
    name: "ホテルオークラ東京（オークラ東京）",
    era: "postwar",
    year: 1962,
    yearLabel: "1962年 開業／2019年 建て替え",
    lat: 35.6665, lng: 139.7440,
    area: "虎ノ門",
    summary: "日本の美を生かしたロビーで知られる、戦後を代表するホテル。",
    detail: "1962年に開業し、日本の伝統的な意匠を取り入れたロビーは世界の建築ファンにも愛されました。建て替えの際には保存を求める声が国内外から上がり、2019年に新しい本館「オークラ東京」として開業、ロビーは元の印象を再現してつくられています。",
    tags: ["ホテル", "建築", "保存"],
    wiki: ["ホテルオークラ東京"],
    sources: [
      { title: "Curiosity 伝説のロビー空間を再構築", url: "https://r100tokyo.com/curiosity/tokyo-architecture/211201/" }
    ]
  },
  {
    id: "shiodome",
    name: "汐留貨物駅跡と汐留シオサイト",
    era: "postwar",
    year: 1986,
    yearLabel: "1986年 貨物駅廃止／2002年〜 超高層ビル群",
    lat: 35.6632, lng: 139.7605,
    area: "汐留",
    summary: "鉄道発祥の地の貨物駅跡が、超高層ビルの街に生まれ変わった。",
    detail: "旧新橋停車場はのちに汐留貨物駅となり、東京の物流を支えました。トラック輸送の増加などで1986年に廃止され、約31ヘクタールの跡地は再開発で11の街区に分けられて「汐留シオサイト」となりました。工事中には旧新橋停車場の遺構も発掘されています。",
    tags: ["鉄道", "再開発", "貨物"],
    wiki: ["汐留シオサイト", "汐留"],
    sources: [
      { title: "物流博物館 世界貿易センタービルと旧国鉄・汐留貨物駅", url: "https://www.lmuse.or.jp/collection/gallery/sengo/06.html" }
    ]
  },
  {
    id: "juliana",
    name: "ジュリアナ東京",
    era: "modern",
    year: 1991,
    yearLabel: "1991年5月〜1994年8月",
    lat: 35.6440, lng: 139.7520,
    area: "芝浦",
    summary: "バブル崩壊直後の芝浦に現れ、わずか3年で消えた伝説のディスコ。",
    detail: "倉庫街だった芝浦に1991年に開店し、最大2,000人を収容しました。テクノ音楽と、扇子を振って踊る「お立ち台」で一世を風靡しましたが、露出の多さへの批判から1993年にお立ち台が撤去され、1994年8月に閉店しました。最終日には入場を待つ列が田町駅まで続いたといいます。",
    tags: ["ディスコ", "バブル", "若者文化", "芝浦"],
    wiki: ["ジュリアナ東京"],
    sources: [
      { title: "アーバンライフ東京 1991年オープン「ジュリアナ東京」の衝撃", url: "https://urbanlife.tokyo/post/34241/" }
    ]
  },
  {
    id: "rainbow-bridge",
    name: "レインボーブリッジ",
    era: "modern",
    year: 1993,
    yearLabel: "1993年（平成5年）8月26日開通",
    lat: 35.6365, lng: 139.7635,
    area: "芝浦・台場",
    summary: "芝浦と台場を結ぶ、全長798mの吊り橋。",
    detail: "1987年に着工し、1993年に開通しました。当時は東日本で最も長い吊り橋でした。上層を首都高速、下層を一般道とゆりかもめ（1995年開業）が通り、歩いて渡ることもできます。遊歩道からは幕末の第六台場を眺められます。",
    tags: ["橋", "臨海副都心", "首都高"],
    wiki: ["レインボーブリッジ"],
    sources: [
      { title: "乗りものニュース レインボーブリッジが開通した日", url: "https://trafficnews.jp/post/121580" }
    ]
  },
  {
    id: "fujitv",
    name: "臨海副都心とフジテレビ",
    era: "modern",
    year: 1997,
    yearLabel: "1995年 都市博中止／1997年 フジテレビ移転",
    lat: 35.6268, lng: 139.7746,
    area: "台場",
    summary: "バブル崩壊で揺れた臨海副都心は、テレビ局の移転で観光地に。",
    detail: "埋め立て地の臨海副都心では、1996年に「世界都市博覧会」を開く予定でしたが、バブル崩壊で開発の見通しが外れ、中止を公約に掲げた青島幸男知事が1995年に中止を決めました。1997年にフジテレビが新宿区河田町から台場に本社を移すと、お台場は一躍人気の観光地となりました。",
    tags: ["臨海副都心", "テレビ", "バブル崩壊"],
    wiki: ["フジテレビジョン", "お台場"],
    sources: [
      { title: "日本経済新聞 世界都市博覧会を中止、青島都知事が決断", url: "https://r.nikkei.com/article/DGKKZO45449620Q9A530C1EAC000" },
      { title: "Merkmal 「絶海の孤島」だったお台場が大人気観光地に変貌した理由", url: "https://merkmal-biz.jp/post/96829/3" }
    ]
  },
  {
    id: "macarthur-road",
    name: "「マッカーサー道路」と虎ノ門ヒルズ",
    era: "modern",
    year: 2014,
    yearLabel: "1946年 計画／2014年 開通",
    lat: 35.6668, lng: 139.7497,
    area: "虎ノ門",
    summary: "戦後すぐに計画され、約70年かかって開通した道路。ビルの下をくぐる。",
    detail: "環状2号線は1946年の戦災復興の都市計画で決まった道路で、「マッカーサー道路」の通称で知られます。用地買収が進まず長く未完成でしたが、道路の上にビルを建てる制度を使い、2014年に新橋〜虎ノ門間が開通しました。道路は虎ノ門ヒルズ森タワーの地下をトンネルで貫いています。",
    tags: ["道路", "再開発", "都市計画"],
    wiki: ["虎ノ門ヒルズ"],
    sources: [
      { title: "日本経済新聞 「マッカーサー道路」の新橋-虎ノ門間が開通", url: "https://www.nikkei.com/article/DGXNASFK2502K_V20C14A3000000/" }
    ]
  },
  // ---------------- 負の歴史（第2弾） ----------------
  {
    id: "satsuma-yakiuchi",
    name: "江戸薩摩藩邸焼討事件",
    era: "edo",
    dark: "事件",
    year: 1867,
    yearLabel: "1867年（慶応3年）12月25日",
    lat: 35.6480, lng: 139.7445,
    area: "三田（薩摩藩上屋敷跡）",
    summary: "幕府側の兵が薩摩藩邸を砲撃して焼き払い、戊辰戦争のきっかけとなった。",
    detail: "西郷隆盛の指示を受けた浪士たちが三田の薩摩藩邸を拠点に、「御用盗」と称して江戸の町で強盗や放火を繰り返し、庄内藩の屯所も銃撃しました。これに対し、幕府の命を受けた庄内藩などの兵が藩邸を包囲・砲撃し、藩邸は約3時間で焼け落ちました。藩邸側は64人が討たれ、112人が捕らえられ、討伐側も11人が亡くなりました。この事件が、翌年の鳥羽・伏見の戦いから始まる戊辰戦争の引き金の一つとなりました。",
    tags: ["事件", "幕末", "戊辰戦争", "薩摩藩"],
    wiki: ["江戸薩摩藩邸の焼討事件"],
    sources: [
      { title: "WEB歴史街道 江戸薩摩藩邸焼討事件～挑発にのった幕府", url: "https://rekishikaido.php.co.jp/detail/4604" },
      { title: "コトバンク 薩摩藩邸焼打ち事件", url: "https://kotobank.jp/word/%E8%96%A9%E6%91%A9%E8%97%A9%E9%82%B8%E7%84%BC%E6%89%93%E3%81%A1%E4%BA%8B%E4%BB%B6-1539018" }
    ]
  },
  {
    id: "infantry1",
    name: "歩兵第一連隊と二・二六事件（東京ミッドタウン）",
    era: "prewar",
    dark: "事件",
    year: 1936,
    yearLabel: "1936年 二・二六事件／1960〜2000年 防衛庁／2007年 東京ミッドタウン",
    lat: 35.6660, lng: 139.7310,
    area: "赤坂（東京ミッドタウン）",
    summary: "二・二六事件の反乱部隊の主力を出した連隊の跡地。",
    detail: "檜町にあった歩兵第一連隊は、近くの歩兵第三連隊などとともに、1936年の二・二六事件で約1,400人の反乱部隊の中心となりました。戦後は米軍の将校宿舎として接収され、返還後の1960年から2000年までは防衛庁（檜町駐屯地）が置かれました。防衛庁が市ヶ谷へ移ったあと再開発され、2007年に東京ミッドタウンが開業しています。",
    tags: ["事件", "陸軍", "二・二六事件", "再開発"],
    wiki: ["東京ミッドタウン"],
    sources: [
      { title: "東京ミッドタウン 歴史と開発", url: "https://www.tokyo-midtown.com/jp/about/history/" },
      { title: "このまちアーカイブス 『陸軍の街』とその後の発展", url: "https://smtrc.jp/town-archives/city/azabu/p05.html" }
    ]
  },
  {
    id: "shimbashi-yamiichi",
    name: "新橋の闇市（新生マーケット）とニュー新橋ビル",
    era: "postwar",
    dark: "戦後の混乱",
    year: 1946,
    yearLabel: "1946年 新生マーケット／1971年 ニュー新橋ビル",
    lat: 35.6660, lng: 139.7570,
    area: "新橋（駅西口）",
    summary: "焼け跡に生まれた日本最大級の闇市。その跡に「サラリーマンの聖地」が建った。",
    detail: "戦後、焼け野原となった新橋駅の西口前には自然発生的に闇市が生まれ、1946年には木造長屋の「新生マーケット」ができて、日本最大級の闇市となりました。物資が不足し、違法な取引や暴力もはびこる混乱の時代でした。東京都による再開発で、1971年に跡地にニュー新橋ビルが完成し、飲食店の並ぶ「サラリーマンの聖地」として今も親しまれています。",
    tags: ["闇市", "戦後", "再開発", "新橋"],
    wiki: ["ニュー新橋ビル"],
    sources: [
      { title: "港区 デジタル版 港区のあゆみ 新橋駅前の闇市の誕生", url: "https://adeac.jp/minato-city/text-list/d110120/ht003100" }
    ]
  },
  {
    id: "mitsui-bomb",
    name: "三井物産爆破事件",
    era: "postwar",
    dark: "事件",
    year: 1974,
    yearLabel: "1974年（昭和49年）10月14日",
    lat: 35.6680, lng: 139.7535,
    area: "新橋（西新橋）",
    summary: "連続企業爆破事件の一つ。オフィスビルで爆弾が爆発し、16人が負傷した。",
    detail: "丸の内の三菱重工爆破事件の翌月、過激派グループ「東アジア反日武装戦線」が西新橋の三井物産ビルのコンピューター室に爆弾を仕掛け、16人が負傷しました。戦前の財閥系企業を「侵略の担い手」とみなして次々と狙った連続企業爆破事件の一つです。",
    tags: ["事件", "テロ", "爆破"],
    sources: [
      { title: "コトバンク 連続企業爆破事件", url: "https://kotobank.jp/word/%E9%80%A3%E7%B6%9A%E4%BC%81%E6%A5%AD%E7%88%86%E7%A0%B4%E4%BA%8B%E4%BB%B6-1609072" }
    ]
  },
  {
    id: "roppongi-club",
    name: "六本木の飲食店での人違い殺人事件",
    era: "modern",
    dark: "事件",
    year: 2012,
    yearLabel: "2012年（平成24年）9月2日",
    lat: 35.6625, lng: 139.7325,
    area: "六本木（位置は地域の目安）",
    summary: "覆面の集団が店に押し入り、人違いで客の男性を殺害した。",
    detail: "六本木の飲食店に、目出し帽をかぶり金属バットを持った10人ほどの集団が押し入り、客として来ていた男性を殴って死亡させました。犯行グループは元暴走族グループのメンバーらで、別の事件の相手と特徴が似ていた男性を人違いで襲ったとされます。首謀者とされる人物は国外に逃亡し、国際手配されています。繁華街の暴力の問題が改めて注目されました。",
    tags: ["事件", "暴力", "六本木"],
    sources: [
      { title: "六本木クラブ襲撃事件（Wikipedia）", url: "https://ja.wikipedia.org/wiki/%E5%85%AD%E6%9C%AC%E6%9C%A8%E3%82%AF%E3%83%A9%E3%83%96%E8%A5%B2%E6%92%83%E4%BA%8B%E4%BB%B6" }
    ]
  }
];

var TIMELINE = [
  { year: 1867.9, label: "1867年12月25日", text: "三田の薩摩藩邸が焼き討ちされる。戊辰戦争のきっかけに", spot: "satsuma-yakiuchi", dark: true },
  { year: 1936.1, label: "1936年2月26日", text: "歩兵第一連隊・第三連隊から反乱部隊が出撃（二・二六事件）", spot: "infantry1", dark: true },
  { year: 1946.5, label: "1946年", text: "新橋駅前の闇市に新生マーケットができる", spot: "shimbashi-yamiichi", dark: true },
  { year: 1960.5, label: "1960年", text: "檜町の歩兵第一連隊跡に防衛庁が置かれる（2000年まで）", spot: "infantry1" },
  { year: 1971, label: "1971年", text: "新橋の闇市跡にニュー新橋ビルが完成", spot: "shimbashi-yamiichi" },
  { year: 1974.8, label: "1974年10月14日", text: "西新橋で三井物産爆破事件", spot: "mitsui-bomb", dark: true },
  { year: 2007.5, label: "2007年", text: "防衛庁跡地に東京ミッドタウン開業", spot: "infantry1" },
  { year: 2012.7, label: "2012年9月", text: "六本木の飲食店で人違いの殺人事件", spot: "roppongi-club", dark: true },
  { year: 940,  label: "940年（伝承）", text: "藤原秀郷が烏森神社を建てたと伝わる", spot: "karasumori" },
  { year: 1660, label: "1660年", text: "丸亀藩邸に金刀比羅宮が祀られる（1679年に虎ノ門へ）", spot: "kotohira" },
  { year: 1828, label: "1828年", text: "赤坂の大岡家屋敷に豊川稲荷が祀られる", spot: "toyokawa-inari" },
  { year: 1872.4, label: "1872年6月", text: "品川〜横浜間で鉄道が仮開業", spot: "shinagawa-station" },
  { year: 1890, label: "1890年頃", text: "明治学院にインブリー館・記念館が建てられる", spot: "meiji-gakuin" },
  { year: 1933, label: "1933年", text: "白金台に朝香宮邸（東京都庭園美術館）が完成", spot: "teien-museum" },
  { year: 1946, label: "1946年", text: "戦災復興計画で環状2号線（マッカーサー道路）が決まる", spot: "macarthur-road" },
  { year: 1955, label: "1955年", text: "TBSが赤坂からテレビ放送を開始", spot: "tbs" },
  { year: 1960, label: "1960年頃", text: "六本木に若者が集まり「六本木族」と呼ばれる", spot: "roppongi-zoku" },
  { year: 1962, label: "1962年", text: "ホテルオークラ開業", spot: "okura" },
  { year: 1986, label: "1986年", text: "汐留貨物駅が廃止される", spot: "shiodome" },
  { year: 1991, label: "1991年", text: "芝浦にジュリアナ東京が開店（1994年閉店）", spot: "juliana" },
  { year: 1993, label: "1993年8月26日", text: "レインボーブリッジ開通", spot: "rainbow-bridge" },
  { year: 1995, label: "1995年", text: "世界都市博覧会の中止が決まる", spot: "fujitv" },
  { year: 1997, label: "1997年", text: "フジテレビが台場に移転", spot: "fujitv" },
  { year: 2002, label: "2002年", text: "汐留シオサイトに超高層ビルが次々と完成", spot: "shiodome" },
  { year: 2014, label: "2014年", text: "マッカーサー道路が開通、虎ノ門ヒルズ開業", spot: "macarthur-road" },
  { year: 2015, label: "2015年", text: "旧朝香宮邸が国の重要文化財に", spot: "teien-museum" },
  { year: 824,  label: "824年（伝承）", text: "空海が麻布に善福寺を開いたと伝わる", spot: "zenpukuji" },
  { year: 1005, label: "1005年", text: "芝大神宮が鎮座する", spot: "shiba-daijingu" },
  { year: 1393, label: "1393年", text: "光明寺が浄土宗に改められ増上寺となる", spot: "zojoji" },
  { year: 1450, label: "室町時代（伝承）", text: "白金長者が屋敷を構えたと伝わる", spot: "shirogane-choja" },
  { year: 1598, label: "1598年", text: "増上寺が芝に移され、徳川家の菩提寺となる", spot: "zojoji" },
  { year: 1603, label: "1603年", text: "徳川家康が愛宕神社を建てる", spot: "atago" },
  { year: 1605, label: "1605年", text: "増上寺三解脱門が建てられる", spot: "zojoji" },
  { year: 1634, label: "1634年", text: "曲垣平九郎が馬で愛宕山の石段を上る", spot: "atago" },
  { year: 1641, label: "1641年頃", text: "泉岳寺が高輪に再建される", spot: "sengakuji" },
  { year: 1678, label: "1678年", text: "大久保忠朝が庭園「楽壽園」（旧芝離宮）をつくる", spot: "kyu-shiba-rikyu" },
  { year: 1703, label: "1703年", text: "切腹した赤穂浪士が泉岳寺に葬られる", spot: "sengakuji" },
  { year: 1710, label: "1710年", text: "高輪大木戸が設けられる", spot: "takanawa-okido" },
  { year: 1730, label: "1730年", text: "赤坂氷川神社が徳川吉宗の建てた社殿に遷座", spot: "akasaka-hikawa" },
  { year: 1853, label: "1853年", text: "ペリー来航。品川台場の築造が始まる", spot: "daiba" },
  { year: 1859, label: "1859年", text: "善福寺にアメリカ公使館が置かれる", spot: "zenpukuji" },
  { year: 1861, label: "1861年1月", text: "アメリカ公使館の通訳ヒュースケンが殺害される", spot: "heusken", dark: true },
  { year: 1861.4, label: "1861年", text: "東禅寺のイギリス公使館が襲撃される", spot: "tozenji", dark: true },
  { year: 1868, label: "1868年3月", text: "西郷隆盛と勝海舟が会談し、江戸無血開城が決まる", spot: "saigo-katsu" },
  { year: 1871, label: "1871年", text: "慶應義塾が三田に移る", spot: "keio" },
  { year: 1872, label: "1872年", text: "新橋〜横浜間に日本初の鉄道が開業。高輪の海上を築堤で走る", spot: "shimbashi-station" },
  { year: 1874, label: "1874年", text: "青山墓地が公共墓地となる", spot: "aoyama-reien" },
  { year: 1875, label: "1875年", text: "福沢諭吉が三田演説館を建てる", spot: "keio" },
  { year: 1909, label: "1909年", text: "東宮御所（迎賓館赤坂離宮）が完成", spot: "geihinkan" },
  { year: 1912, label: "1912年9月13日", text: "乃木希典夫妻が自刃。幽霊坂が「乃木坂」に", spot: "nogi" },
  { year: 1924, label: "1924年", text: "旧芝離宮恩賜庭園が公開される", spot: "kyu-shiba-rikyu" },
  { year: 1925, label: "1925年", text: "芝浦で日本初のラジオ放送。7月から愛宕山で本放送", spot: "nhk-atago" },
  { year: 1928, label: "1928年", text: "六本木に歩兵第三連隊の兵舎が完成", spot: "infantry3" },
  { year: 1936, label: "1936年2月26日", text: "二・二六事件。赤坂の自邸で高橋是清が殺害される", spot: "takahashi-korekiyo", dark: true },
  { year: 1945.2, label: "1945年3月10日", text: "空襲で新橋・汐留などが被災", spot: "minato-kushu", dark: true },
  { year: 1945.4, label: "1945年5月25日", text: "空襲で芝・麻布・赤坂が大きな被害。増上寺の霊廟も焼失", spot: "minato-kushu", dark: true },
  { year: 1947, label: "1947年3月15日", text: "芝区・麻布区・赤坂区が合併し、港区が生まれる" },
  { year: 1949, label: "1949年", text: "白金長者屋敷跡が天然記念物・史跡に（のちの自然教育園）", spot: "shirogane-choja" },
  { year: 1958, label: "1958年12月", text: "東京タワー完成", spot: "tokyo-tower" },
  { year: 1974, label: "1974年", text: "増上寺の大殿（本堂）が再建される", spot: "zojoji" },
  { year: 2003, label: "2003年", text: "六本木ヒルズ開業。旧新橋停車場の駅舎が再現される", spot: "roppongi-hills" },
  { year: 2004, label: "2004年3月26日", text: "六本木ヒルズの回転ドアで6歳の子どもが死亡", spot: "roppongi-hills", dark: true },
  { year: 2006, label: "2006年6月3日", text: "区営住宅のエレベーター事故で高校生が死亡", spot: "schindler", dark: true },
  { year: 2007, label: "2007年", text: "歩兵第三連隊の兵舎跡に国立新美術館が開館", spot: "infantry3" },
  { year: 2009, label: "2009年", text: "迎賓館赤坂離宮が国宝に", spot: "geihinkan" },
  { year: 2019, label: "2019年", text: "品川駅周辺の工事で高輪築堤跡が見つかる", spot: "takanawa-chikutei" },
  { year: 2021, label: "2021年", text: "旧新橋停車場跡及び高輪築堤跡が国史跡に", spot: "takanawa-chikutei" }
];

window.WARDS = window.WARDS || {};
window.WARDS.minato = {
  label: "港区",
  center: [35.655, 139.742],
  zoom: 14,
  districts: DISTRICTS,
  spots: SPOTS,
  timeline: TIMELINE
};
})();

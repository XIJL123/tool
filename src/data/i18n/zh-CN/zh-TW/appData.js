/*
     Ygktool AppList - 正體中文譯本
當前版本=[1.1 by Hsdbql]
歷史版本=[RiverTwilight簡中原版]
完成時間=[2021-8-24 19.15 GTM+8]
譯者扎記=[翻譯過程中玩了一會《冠軍島運動會》作為小憩。所謂的正體（即台灣繁體）和香港繁體是有一定區別的，主要體現在用詞習慣方面。有意思的是，線上翻譯程式都只進行了暴力簡繁字替換，沒有翻譯到位。為了達成高質量翻譯，作為簡體慣用者的我衹能不厭其煩地查找資料，這無疑讓這項工作難度驟增；儘管如此，翻譯缺陷仍然難以杜絕，歡迎指正。]
*/

module.exports = [
	{
		name: "積分To-Do",
		channel: 4,
		icon: "/icon/tasks.png",
		link: "point_brochure",
		description: "操縱你的多巴胺，幫助你自律",
	},
	{
		name: "離子方程式配平",
		channel: 4,
		icon: "/icon/lens.png",
		link: "coming",
		icon_color: "teal",
	},
	{
		name: "Torrent轉換Magnet",
		channel: 4,
		icon: "cloud_download",
		link: "coming",
		description: "將BitTorrent文件轉換為Magnet鏈接",
	},
	{
		name: "線上OCR文字識別",
		channel: 1,
		icon: "font_download",
		link: "ocr",
		icon_color: "blue-400",
		description: "識別圖片中的文字,支持多種語言",
	},
	{
		name: "應用程式服務協議生成",
		channel: 3,
		icon: "lock",
		link: "policy_generator",
		icon_color: "grey-500",
		description: "定制化生成服務協議和隱私政策",
	},
	{
		name: "圖像辨識",
		link: "aic",
		icon: "photo_album",
		icon_color: "blue-500",
		help: "",
		description: "識別圖中的物體，支持植物/動物/汽車/菜品等",
		channel: 1,
	},
	{
		name: "螢幕錄製",
		link: "screenrecord",
		icon: "videocam",
		help: "僅支持PC端最新版本的Chrome/Firefox/Opera使用",
		channel: 2,
	},
	{
		name: "UserAgent分析",
		link: "ua",
		icon: "devices",
		icon_color: "teal-300",
		help: "默認為本機UA(UserAgent)",
		channel: 3,
	},
	{
		name: "網頁日誌抓取",
		link: "console",
		icon: "language",
		icon_color: "indigo-300",
		help: "動態生成的內容可能無法抓取到",
		channel: 3,
	},
	// {
	// 	name: "翻譯",
	// 	link: "translate",
	// 	icon: "translate",
	// 	icon_color: "blue-400",
	// 	help: "使用百度翻譯引擎",
	// 	channel: 4,
	// },
	{
		name: "日期與時間計算",
		link: "date_calculator",
		icon: "/icon/Google_Calendar_icon_(2020).svg",
		icon_color: "purple-200",
		help: "輸入負數可以向前推算",
		description:
			"計算兩個日期間隔的天數和時間，或推算幾天前/後是哪一天，可以算算你活了多久 :)",
		channel: 4,
	},
	{
		name: "番茄鐘",
		link: "tomato",
		icon: "access_alarm",
		icon_color: "red",
		description:
			"番茄鐘工作法極大地提高了工作的效率，還會有意想不到的成就感",
		channel: 4,
	},
	{
		name: "跨設備文本傳輸",
		link: "clipboard",
		icon: "call_split",
		icon_color: "green",
		help: "較大的文件可能會有很大延遲",
		network: true,
		channel: 4,
	},
	{
		name: "GIF分拆",
		link: "gif_lib",
		icon: "collections",
		icon_color: "teal",
		description: "將GIF逐幀分解",
		channel: 2,
	},
	{
		name: "QR碼生成",
		link: "qrcode",
		icon: "/icon/qrcode.png",
		help: "",
		description: "支持自定義顏色和大小；支持生成WiFi碼",
		channel: 2,
	},
	{
		name: "Bilibili預覽圖獲取",
		link: "bilibili_cover",
		icon: "photo_size_select_actual",
		icon_color: "pink-300",
		description: "下載Bilibili上的影片和動畫劇集封面圖",
		help: "番劇請使用md開頭，例：md425（科學的超電磁炮）；影片請使用av開頭，例：av32211954。點擊圖片鏈接可以復制。",
		channel: 4,
	},
	{
		name: "PornHub風格圖標生成",
		link: "fake_pornhub_logo",
		icon: "insert_emoticon",
		icon_color: "orange",
		help: "僅供娛樂，少兒不宜",
		channel: 2,
	},
	{
		name: "便簽",
		link: "note",
		icon: "/icon/scratchpad.png",
		icon_color: "amber",
		help: "全部內容皆保存在本地瀏覽器快取中，不會上傳到伺候器。刪除網站數據可能會導致內容丟失。",
		channel: 4,
	},
	{
		name: "manifest生成",
		link: "manifest",
		icon: "settings_applications",
		icon_color: "grey",
		help: "語言代碼請Google搜尋。如美式英語是en-us",
		channel: 3,
	},
	{
		name: "簡繁轉換",
		link: "sctc",
		icon: "font_download",
		icon_color: "red",
		help: "",
		description: "原作者：憂郁的烏龜",
		channel: 4,
	},
	{
		name: "做決定",
		link: "decision",
		icon: "widgets",
		icon_color: "indigo",
		description: "隨機選取，選擇困難症患者的福音",
		help: "",
		channel: 4,
	},
	{
		name: "批次文本生成",
		link: "text_create",
		icon: "font_download",
		icon_color: "brown-200",
		description: "批次生成有規律的文本",
		help: "使用“${}”代表關鍵字，如“${5}表示首項為5的關鍵字。暫時只支持統一的公差/公比（作者偷懶）",
		channel: 4,
	},
	{
		name: "資料夾樹狀圖生成",
		link: "folder_tree",
		icon: "/icon/file.jpg",
		description: "產生樹狀目錄結構圖",
		help: "移動端可能無法使用；檔案數量過多可能會有卡頓",
		channel: 3,
	},
	{
		name: "GIF製作",
		link: "gif",
		icon: "gif",
		icon_color: "light-green",
		help: "影片過大可能會導致卡頓，所有操作均在本地處理，不消耗行動數據",
		channel: 2,
	},
	{
		name: "櫻花動漫影片解析",
		link: "imomoe_parse",
		icon: "ondemand_video",
		icon_color: "pink",
		help: "部分動漫劇集無法解析（不支持流視頻）",
		channel: 2,
		network: true,
	},
	{
		name: "九宮格切圖",
		link: "img_split",
		icon: "apps",
		icon_color: "blue",
		description: "將圖片按照九宮格排列進行切分，用於在社交媒體共享",
		help: "",
		channel: 2,
	},
	{
		name: "正則表達式測試",
		link: "regexp_test",
		icon: "sort_by_alpha",
		icon_color: "green-200",
		description: "測試正則表達式與文本是否匹配",
		help: "",
		channel: 3,
	},
	{
		name: "HTML轉換JSX",
		link: "html2jsx",
		icon: "/icon/code.png",
		help: "不支持部分Html屬性，請手動改為smallCamel命名法，所有操作均在本地處理，不消耗行動數據",
		channel: 3,
	},
	{
		name: "mimetype查詢",
		link: "mimetype",
		icon: "attachment",
		icon_color: "purple",
		help: "",
		channel: 3,
	},
	{
		name: "運動計分板",
		link: "scoreboard",
		icon: "today",
		icon_color: "lime",
		help: "",
		channel: 4,
	},
	{
		name: "貼圖製作",
		link: "emoticon",
		icon: "tag_faces",
		icon_color: "yellow",
		help: "",
                                description: "製作獨一無二的個人專屬貼圖",
		channel: 2,
	},
	{
		name: "全能文本轉換",
		link: "endecode",
		icon: "wb_auto",
		icon_color: "cyan-200",
		description: "可能是最全面的文本轉換工具，支持多達7種類型",
		help: "",
		channel: 3,
	},
	{
		name: "圖片轉換Base64",
		link: "img2base64",
		icon: "photo",
		icon_color: "green-300",
		help: "圖片過大可能導致卡頓",
		channel: 2,
	},
	{
		name: "圖片拼接",
		link: "img_mosaic",
		icon: "view_column",
		icon_color: "amber-600",
		help: "圖片過大可能會卡頓；拉動陰影部分可調整拼接範圍，適合字幕圖或長圖拼接",
		channel: 2,
	},
	{
		name: "化學方程式配平",
		link: "cem",
		icon: "linear_scale",
		icon_color: "blue-600",
		channel: 4,
	},
	{
		name: "網易云音樂歌單對比",
		link: "songlist",
		icon: "queue_music",
		icon_color: "red-600",
		channel: 4,
		network: true,
	},
	{
		name: "影像文檔壓縮",
		link: "img_compress",
		icon: "/icon/finance.png",
		icon_color: "brown-300",
		help: "太小的圖片可能沒有效果",
		channel: 2,
	},
	{
		name: "文字雲圖片產生器",
		link: "word_cloud",
		icon: "cloud_circle",
		icon_color: "green-300",
		help: "點擊圖片可保存；不填寫文字大小則採用隨機大小",
		channel: 2,
	},
	{
		name: "文字轉語音",
		link: "tts",
		icon: "mic",
		icon_color: "teal-300",
		help: "一次性最多合成500字符",
		description:
			"將文字轉換成mp3朗讀音頻，支持多種聲線/速度/音調/音量自定義",
		channel: 1,
		network: true,
	},
	{
		name: "金額數字大寫",
		link: "num2chinese",
		icon: "attach_money",
		icon_color: "yellow-600",
		help: "生成結果僅供參考",
		channel: 4,
	},
	{
		name: "擷取色彩與調色盤",
		link: "color_picker",
		icon: "colorize",
		icon_color: "amber-800",
		help: "可以通過鍵盤方向鍵精準調節",
		channel: 2,
	},
	{
		name: "漢語詞典",
		link: "dic_ci",
		icon: "/icon/book.png",
		description: "便捷查詢常用詞",
		channel: 4,
		network: true,
	},
	{
		name: "歇後語查詢",
		link: "xiehouyu",
		icon: "/icon/book.png",
		description: "支持謎面謎底互查",
		channel: 4,
		network: true,
	},
	{
		name: "成語詞典",
		link: "dic_idiom",
		icon: "/icon/book.png",
		help: "支持縮寫哦",
		channel: 4,
		network: true,
	},
	{
		name: "簡體字典",
		link: "dic_word",
		help: "暫不支持太簡單的字查詢",
		description: "我們中國的漢字，落筆成畫留下五千年的歷史",
		channel: 4,
		network: true,
	},
	{
		name: "JS鍵碼查詢",
		link: "js_keycode",
		icon: "/icon/js.png",
		channel: 3,
	},
	{ name: "Hello Tool", link: "http://hellotool.htm.kim", channel: 5 },
	{
		name: "精品網站導航",
		link: "https://imyshare.com/?from=ygktool",
		channel: 5,
	},
	{ name: "墨靈音樂", link: "https://yinyue.qugeek.com/", channel: 5 },
];
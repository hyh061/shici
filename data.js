/* 拾词 · 词库数据
 * 240 个词：核心高频 / 学术进阶 / 商务职场 / 生活表达 各 60 个；
 * 另按 12 个生活主题各 20 个词建立场景词包。每个词都带有常用搭配。
 */
window.WORD_THEMES = [
  {
    "id": "travel",
    "name": "旅行出行",
    "en": "TRAVEL",
    "icon": "plane",
    "description": "从出发到抵达，把路上的词装进口袋。",
    "tint": "#f5e2d9",
    "accent": "#b85a3d"
  },
  {
    "id": "food",
    "name": "饮食日常",
    "en": "FOOD",
    "icon": "utensils",
    "description": "从食材到风味，读懂一日三餐。",
    "tint": "#f5e8d2",
    "accent": "#9a6b27"
  },
  {
    "id": "work",
    "name": "职场沟通",
    "en": "WORK",
    "icon": "briefcase",
    "description": "把想法说清楚，把协作做扎实。",
    "tint": "#e4ece3",
    "accent": "#4b7158"
  },
  {
    "id": "media",
    "name": "媒体观点",
    "en": "MEDIA",
    "icon": "newspaper",
    "description": "在标题与叙事之间，保持判断。",
    "tint": "#e3e9ed",
    "accent": "#50697a"
  },
  {
    "id": "emotions",
    "name": "情绪心理",
    "en": "EMOTIONS",
    "icon": "heart",
    "description": "看见情绪，也学会与它相处。",
    "tint": "#f4e1e2",
    "accent": "#a85860"
  },
  {
    "id": "education",
    "name": "教育学习",
    "en": "EDUCATION",
    "icon": "graduation",
    "description": "把知识学进去，也讲得出来。",
    "tint": "#f2e9d8",
    "accent": "#886a3b"
  },
  {
    "id": "social",
    "name": "社交关系",
    "en": "SOCIAL",
    "icon": "users",
    "description": "靠近彼此，也守住自己的边界。",
    "tint": "#e1ece8",
    "accent": "#406f63"
  },
  {
    "id": "home",
    "name": "居家生活",
    "en": "HOME",
    "icon": "home",
    "description": "把日常过成自己喜欢的样子。",
    "tint": "#efe6dd",
    "accent": "#8a6549"
  },
  {
    "id": "environment",
    "name": "环境自然",
    "en": "ENVIRONMENT",
    "icon": "leaf",
    "description": "理解自然，也理解我们的位置。",
    "tint": "#e4eddc",
    "accent": "#557344"
  },
  {
    "id": "health",
    "name": "健康医疗",
    "en": "HEALTH",
    "icon": "activity",
    "description": "照顾身体，从读懂信号开始。",
    "tint": "#f4e2dd",
    "accent": "#ad5845"
  },
  {
    "id": "technology",
    "name": "科技网络",
    "en": "TECHNOLOGY",
    "icon": "cpu",
    "description": "看清工具背后的逻辑与选择。",
    "tint": "#e3e9e7",
    "accent": "#4e6863"
  },
  {
    "id": "shopping",
    "name": "购物消费",
    "en": "SHOPPING",
    "icon": "shopping-bag",
    "description": "买得明白，也花得从容。",
    "tint": "#eae3ea",
    "accent": "#705d75"
  }
];

window.WORD_DATA = [
  {
    "id": "jetlag",
    "word": "jet lag",
    "phonetic": "/ˈdʒetlæɡ/",
    "pos": "n.",
    "meaning": "时差反应",
    "example": "It took me several days to get over the jet lag.",
    "translation": "我花了好几天才倒过时差。",
    "note": "也写作 jetlag。长途飞行后身体的节律与当地时间错位。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "suffer from jet lag",
      "get over jet lag"
    ]
  },
  {
    "id": "wholesale",
    "word": "wholesale",
    "phonetic": "/ˈhəʊlseɪl/",
    "pos": "n. / adj.",
    "meaning": "批发",
    "example": "They sell fruit both wholesale and online.",
    "translation": "他们既做水果批发，也在网上销售。",
    "note": "whole（整体）+ sale（出售）→ 整批卖。反义词是 retail。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "wholesale prices",
      "the wholesale market"
    ],
    "confusables": "wholesale（批发）≠ retail（零售）"
  },
  {
    "id": "workload",
    "word": "workload",
    "phonetic": "/ˈwɜːkləʊd/",
    "pos": "n.",
    "meaning": "工作量；工作负担",
    "example": "Her workload increased after two colleagues left.",
    "translation": "两位同事离开后，她的工作量增加了。",
    "note": "work + load，把工作量想象成背在身上的货物。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "a heavy workload",
      "manage one's workload"
    ]
  },
  {
    "id": "compelling",
    "word": "compelling",
    "phonetic": "/kəmˈpelɪŋ/",
    "pos": "adj.",
    "meaning": "令人信服的；引人入胜的",
    "example": "She made a compelling case for reform.",
    "translation": "她为改革提出了令人信服的理由。",
    "note": "compel 是“迫使”。能迫使你认同的，就是有说服力的。",
    "category": "核心高频",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "a compelling case",
      "compelling evidence"
    ]
  },
  {
    "id": "self-esteem",
    "word": "self-esteem",
    "phonetic": "/ˌself ɪˈstiːm/",
    "pos": "n.",
    "meaning": "自尊；自我价值感",
    "example": "Small wins can build a child's self-esteem.",
    "translation": "小小的成功可以建立孩子的自尊。",
    "note": "不可数名词。low self-esteem 是“自尊心低”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "low self-esteem",
      "build self-esteem"
    ]
  },
  {
    "id": "plagiarism",
    "word": "plagiarism",
    "phonetic": "/ˈpleɪdʒərɪzəm/",
    "pos": "n.",
    "meaning": "抄袭；剽窃",
    "example": "The university has strict rules against plagiarism.",
    "translation": "这所大学对抄袭有严格规定。",
    "note": "plagiarize 是动词，plagiarism 是不可数名词。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "academic plagiarism",
      "accuse sb. of plagiarism"
    ]
  },
  {
    "id": "boundary",
    "word": "boundary",
    "phonetic": "/ˈbaʊndri/",
    "pos": "n.",
    "meaning": "界限；边界",
    "example": "It is healthy to set boundaries at work.",
    "translation": "在工作中设立界限是健康的。",
    "note": "set boundaries 是心理学高频表达：明确自己能接受什么。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "set boundaries",
      "cross a boundary"
    ]
  },
  {
    "id": "balcony",
    "word": "balcony",
    "phonetic": "/ˈbælkəni/",
    "pos": "n.",
    "meaning": "阳台",
    "example": "We had breakfast on the balcony.",
    "translation": "我们在阳台上吃早餐。",
    "note": "注意拼写：中间是 lk，不是 lc。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "a small balcony",
      "step onto the balcony"
    ]
  },
  {
    "id": "conservation",
    "word": "conservation",
    "phonetic": "/ˌkɒnsəˈveɪʃn/",
    "pos": "n.",
    "meaning": "保护；节约",
    "example": "The group works on wildlife conservation.",
    "translation": "这个组织致力于野生动物保护。",
    "note": "conservation 既可指自然保护，也可指能源节约。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "wildlife conservation",
      "energy conservation"
    ]
  },
  {
    "id": "prescription",
    "word": "prescription",
    "phonetic": "/prɪˈskrɪpʃn/",
    "pos": "n.",
    "meaning": "处方；药方",
    "example": "The doctor gave me a prescription for antibiotics.",
    "translation": "医生给我开了抗生素处方。",
    "note": "prescription drug 是处方药；over-the-counter 是非处方药。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "on prescription",
      "prescription medication"
    ]
  },
  {
    "id": "digital",
    "word": "digital",
    "phonetic": "/ˈdɪdʒɪtl/",
    "pos": "adj.",
    "meaning": "数字的；数码的",
    "example": "Most of our records are now digital.",
    "translation": "我们的大部分记录现在都是数字化的。",
    "note": "digital 与 analogue（模拟的）相对；digit 是数字。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "digital technology",
      "digital records"
    ],
    "confusables": "digital（数字的）≠ analogue（模拟的）"
  },
  {
    "id": "warranty",
    "word": "warranty",
    "phonetic": "/ˈwɒrənti/",
    "pos": "n.",
    "meaning": "保修；保证书",
    "example": "The laptop comes with a two-year warranty.",
    "translation": "这台笔记本电脑有两年保修。",
    "note": "under warranty 是“在保修期内”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "under warranty",
      "a two-year warranty"
    ]
  },
  {
    "id": "terrain",
    "word": "terrain",
    "phonetic": "/təˈreɪn/",
    "pos": "n.",
    "meaning": "地形；地势",
    "example": "The hikers struggled across rough mountain terrain.",
    "translation": "徒步者艰难地穿过崎岖的山地。",
    "note": "terrain 指地面的自然特征；territory 指领土。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "rough terrain",
      "mountainous terrain"
    ],
    "confusables": "terrain（地形）≠ territory（领土）"
  },
  {
    "id": "roast",
    "word": "roast",
    "phonetic": "/rəʊst/",
    "pos": "v.",
    "meaning": "烤；烘",
    "example": "Roast the vegetables until they are golden.",
    "translation": "把蔬菜烤到金黄。",
    "note": "roast 多用于烤箱或火边；toast 通常指烤面包。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "roast chicken",
      "roast vegetables"
    ]
  },
  {
    "id": "consolidate",
    "word": "consolidate",
    "phonetic": "/kənˈsɒlɪdeɪt/",
    "pos": "v.",
    "meaning": "巩固；合并",
    "example": "The company consolidated its position in the market.",
    "translation": "公司巩固了自己在市场中的地位。",
    "note": "con-（一起）+ solid（坚固）→ 合在一起，变得更稳固。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "consolidate gains",
      "consolidate its position"
    ]
  },
  {
    "id": "legitimate",
    "word": "legitimate",
    "phonetic": "/lɪˈdʒɪtɪmət/",
    "pos": "adj.",
    "meaning": "合法的；合理的",
    "example": "She has a legitimate reason to complain.",
    "translation": "她有正当理由抱怨。",
    "note": "legit 是它的口语缩写；除了“合法”，也可以指“合情合理”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "a legitimate concern",
      "legitimate reason"
    ]
  },
  {
    "id": "perceive",
    "word": "perceive",
    "phonetic": "/pəˈsiːv/",
    "pos": "v.",
    "meaning": "察觉；看待",
    "example": "People perceive risk differently.",
    "translation": "人们对风险的感知各不相同。",
    "note": "perceive A as B 表示“把 A 看作 B”，常用于观点表达。",
    "category": "学术进阶",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "perceive A as B",
      "perceive a change"
    ]
  },
  {
    "id": "graduate",
    "word": "graduate",
    "phonetic": "/ˈɡrædʒueɪt/",
    "pos": "v.",
    "meaning": "毕业；授予学位",
    "example": "He graduated from college last summer.",
    "translation": "他去年夏天大学毕业。",
    "note": "作动词重音在第二音节；作名词“毕业生”时重音在第一音节。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "graduate from",
      "a graduate program"
    ]
  },
  {
    "id": "diplomatic",
    "word": "diplomatic",
    "phonetic": "/ˌdɪpləˈmætɪk/",
    "pos": "adj.",
    "meaning": "圆通的；外交的",
    "example": "She found a diplomatic way to say no.",
    "translation": "她找到了一种圆通的方式拒绝。",
    "note": "形容人时，diplomatic 是“会说话、不得罪人”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "a diplomatic answer",
      "diplomatic relations"
    ]
  },
  {
    "id": "landlord",
    "word": "landlord",
    "phonetic": "/ˈlændlɔːd/",
    "pos": "n.",
    "meaning": "房东；地主",
    "example": "The landlord agreed to fix the heating.",
    "translation": "房东同意修暖气。",
    "note": "land + lord。女房东是 landlady。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "ask the landlord",
      "a private landlord"
    ]
  },
  {
    "id": "sustainable",
    "word": "sustainable",
    "phonetic": "/səˈsteɪnəbl/",
    "pos": "adj.",
    "meaning": "可持续的",
    "example": "We need a more sustainable way to produce food.",
    "translation": "我们需要更可持续的粮食生产方式。",
    "note": "sustain（维持）+ able。既能满足当下，也不透支未来。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "sustainable development",
      "environmentally sustainable"
    ]
  },
  {
    "id": "fatigue",
    "word": "fatigue",
    "phonetic": "/fəˈtiːɡ/",
    "pos": "n.",
    "meaning": "疲劳；疲惫",
    "example": "Long shifts left him with constant fatigue.",
    "translation": "长时间轮班让他一直疲惫不堪。",
    "note": "fatigue 比 tiredness 正式，常指持续的、病理性的疲劳。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "suffer from fatigue",
      "mental fatigue"
    ]
  },
  {
    "id": "software",
    "word": "software",
    "phonetic": "/ˈsɒftweə(r)/",
    "pos": "n.",
    "meaning": "软件",
    "example": "The software updates automatically.",
    "translation": "这款软件会自动更新。",
    "note": "不可数名词：a piece of software，不说 a software。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "install software",
      "software update"
    ]
  },
  {
    "id": "substantial",
    "word": "substantial",
    "phonetic": "/səbˈstænʃl/",
    "pos": "adj.",
    "meaning": "大量的；实质性的",
    "example": "The project requires a substantial investment.",
    "translation": "这个项目需要大量投资。",
    "note": "既可指“数量大”，也可指“有实质内容”。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "a substantial amount",
      "substantial progress"
    ]
  },
  {
    "id": "scenic",
    "word": "scenic",
    "phonetic": "/ˈsiːnɪk/",
    "pos": "adj.",
    "meaning": "风景优美的",
    "example": "The train follows a scenic route along the coast.",
    "translation": "火车沿着海岸线行驶，一路风景优美。",
    "note": "scene（景色）+ ic。常修饰 route、view、spot。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "a scenic route",
      "scenic views"
    ]
  },
  {
    "id": "portion",
    "word": "portion",
    "phonetic": "/ˈpɔːʃn/",
    "pos": "n.",
    "meaning": "一份；部分",
    "example": "The restaurant serves generous portions.",
    "translation": "这家餐厅每份分量都很足。",
    "note": "portion 指分出来的一份，也可指整体中的一部分。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "a generous portion",
      "portion control"
    ]
  },
  {
    "id": "hinder",
    "word": "hinder",
    "phonetic": "/ˈhɪndə(r)/",
    "pos": "v.",
    "meaning": "阻碍；妨碍",
    "example": "Poor communication can hinder progress.",
    "translation": "沟通不畅会阻碍进展。",
    "note": "hinder 与 prevent 不同：它更多是“拖慢”，不是完全阻止。",
    "category": "学术进阶",
    "level": "考研",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "hinder progress",
      "hinder growth"
    ]
  },
  {
    "id": "ambiguous",
    "word": "ambiguous",
    "phonetic": "/æmˈbɪɡjuəs/",
    "pos": "adj.",
    "meaning": "模棱两可的；含糊不清的",
    "example": "The wording of the contract is deliberately ambiguous.",
    "translation": "合同的措辞故意含糊其辞。",
    "note": "ambi- 表示“两边”。两种解释都说得通，便是 ambiguous。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "deliberately ambiguous",
      "ambiguous wording"
    ]
  },
  {
    "id": "reluctant",
    "word": "reluctant",
    "phonetic": "/rɪˈlʌktənt/",
    "pos": "adj.",
    "meaning": "不情愿的；勉强的",
    "example": "She was reluctant to ask for help.",
    "translation": "她不愿意开口求助。",
    "note": "be reluctant to do sth. 是高频结构，比 don't want 更正式。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "reluctant to do sth.",
      "a reluctant agreement"
    ]
  },
  {
    "id": "coherent",
    "word": "coherent",
    "phonetic": "/kəʊˈhɪərənt/",
    "pos": "adj.",
    "meaning": "连贯的；条理清楚的",
    "example": "She gave a coherent account of the incident.",
    "translation": "她对事件做了条理清楚的叙述。",
    "note": "co-（共同）+ here（粘着）→ 内容粘在一起，自然连贯。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "a coherent argument",
      "coherent strategy"
    ]
  },
  {
    "id": "networking",
    "word": "networking",
    "phonetic": "/ˈnetwɜːkɪŋ/",
    "pos": "n.",
    "meaning": "建立人脉；社交联络",
    "example": "The conference is a good place for networking.",
    "translation": "这个会议是建立人脉的好地方。",
    "note": "network 作动词是“建立关系网”，不只是“联网”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "professional networking",
      "a networking event"
    ]
  },
  {
    "id": "infrastructure",
    "word": "infrastructure",
    "phonetic": "/ˈɪnfrəstrʌktʃə(r)/",
    "pos": "n.",
    "meaning": "基础设施",
    "example": "The city invested heavily in public infrastructure.",
    "translation": "这座城市在公共基础设施上投入巨大。",
    "note": "infra-（下方）+ structure（结构）→ 支撑社会的底层结构。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "public infrastructure",
      "transport infrastructure"
    ]
  },
  {
    "id": "renewable",
    "word": "renewable",
    "phonetic": "/rɪˈnjuːəbl/",
    "pos": "adj.",
    "meaning": "可再生的",
    "example": "Solar power is a renewable source of energy.",
    "translation": "太阳能是一种可再生能源。",
    "note": "renew（更新）+ able；与 finite（有限的）相对。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "renewable energy",
      "renewable resources"
    ]
  },
  {
    "id": "symptom",
    "word": "symptom",
    "phonetic": "/ˈsɪmptəm/",
    "pos": "n.",
    "meaning": "症状；征兆",
    "example": "A dry cough is a common symptom of the virus.",
    "translation": "干咳是这种病毒的常见症状。",
    "note": "symptom 是身体发出的信号；也可比喻问题的“征兆”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "a common symptom",
      "show symptoms"
    ]
  },
  {
    "id": "privacy",
    "word": "privacy",
    "phonetic": "/ˈprɪvəsi/",
    "pos": "n.",
    "meaning": "隐私；私密",
    "example": "Users are worried about their online privacy.",
    "translation": "用户担心自己的网络隐私。",
    "note": "privacy 是不可数名词；private 是形容词。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "online privacy",
      "privacy settings"
    ]
  },
  {
    "id": "discount",
    "word": "discount",
    "phonetic": "/ˈdɪskaʊnt/",
    "pos": "n.",
    "meaning": "折扣；减价",
    "example": "The store offers a 20% discount to students.",
    "translation": "这家店给学生打八折。",
    "note": "注意：20% discount 是“减价 20%”，即打八折。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "a 20% discount",
      "at a discount"
    ]
  },
  {
    "id": "transit",
    "word": "transit",
    "phonetic": "/ˈtrænzɪt/",
    "pos": "n.",
    "meaning": "运输；过境",
    "example": "The goods were damaged in transit.",
    "translation": "货物在运输途中受损。",
    "note": "in transit 是固定搭配，表示“在途中”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "in transit",
      "public transit"
    ]
  },
  {
    "id": "savory",
    "word": "savory",
    "phonetic": "/ˈseɪvəri/",
    "pos": "adj.",
    "meaning": "咸香的；开胃的",
    "example": "I prefer savory snacks to sweet ones.",
    "translation": "比起甜零食，我更喜欢咸味零食。",
    "note": "savory 与 sweet 相对，常形容带咸味或香草味的食物。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "savory snacks",
      "a savory dish"
    ]
  },
  {
    "id": "viable",
    "word": "viable",
    "phonetic": "/ˈvaɪəbl/",
    "pos": "adj.",
    "meaning": "可行的；能存活的",
    "example": "We need a viable alternative.",
    "translation": "我们需要一个可行的替代方案。",
    "note": "来自 vie（生命）→ 能活下去，所以“可行”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "a viable option",
      "economically viable"
    ]
  },
  {
    "id": "gossip",
    "word": "gossip",
    "phonetic": "/ˈɡɒsɪp/",
    "pos": "n.",
    "meaning": "八卦；流言",
    "example": "Office gossip can damage trust.",
    "translation": "办公室八卦会破坏信任。",
    "note": "gossip 可作名词也可作动词，通常带“未经证实”的意味。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "spread gossip",
      "celebrity gossip"
    ]
  },
  {
    "id": "content",
    "word": "content",
    "phonetic": "/kənˈtent/",
    "pos": "adj.",
    "meaning": "满足的；满意的",
    "example": "He seems content with a simple life.",
    "translation": "他似乎满足于简单的生活。",
    "note": "作形容词重音在第二音节；作名词“内容”时重音在第一音节。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "content with",
      "perfectly content"
    ]
  },
  {
    "id": "curriculum",
    "word": "curriculum",
    "phonetic": "/kəˈrɪkjələm/",
    "pos": "n.",
    "meaning": "课程体系；全部课程",
    "example": "The school has introduced coding into its curriculum.",
    "translation": "学校把编程纳入了课程体系。",
    "note": "复数 curricula，但 curriculum 也可作单数集合名词。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "the school curriculum",
      "a broad curriculum"
    ]
  },
  {
    "id": "compliment",
    "word": "compliment",
    "phonetic": "/ˈkɒmplɪmənt/",
    "pos": "n.",
    "meaning": "赞美；恭维",
    "example": "She paid him a sincere compliment on his talk.",
    "translation": "她真诚地称赞了他的讲座。",
    "note": "compliment 是“赞美”；complement 是“补充、补足”。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "pay a compliment",
      "take it as a compliment"
    ],
    "confusables": "compliment（赞美）≠ complement（补充）"
  },
  {
    "id": "mundane",
    "word": "mundane",
    "phonetic": "/mʌnˈdeɪn/",
    "pos": "adj.",
    "meaning": "平凡的；单调的",
    "example": "He found beauty in mundane moments.",
    "translation": "他在平凡的时刻里发现了美。",
    "note": "mundane 不是“坏”，只是“日常到不起眼”。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "mundane tasks",
      "a mundane routine"
    ]
  },
  {
    "id": "compliance",
    "word": "compliance",
    "phonetic": "/kəmˈplaɪəns/",
    "pos": "n.",
    "meaning": "合规；遵守",
    "example": "The factory must prove compliance with the new rules.",
    "translation": "工厂必须证明其遵守了新规定。",
    "note": "compliance with 是固定搭配；动词是 comply with。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "compliance with",
      "environmental compliance"
    ]
  },
  {
    "id": "alleviate",
    "word": "alleviate",
    "phonetic": "/əˈliːvieɪt/",
    "pos": "v.",
    "meaning": "减轻；缓解",
    "example": "The new policy aims to alleviate traffic congestion.",
    "translation": "新政策旨在缓解交通拥堵。",
    "note": "常见搭配：alleviate pain / pressure / congestion，让负担变轻。",
    "category": "学术进阶",
    "level": "考研",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "alleviate pressure",
      "alleviate congestion"
    ]
  },
  {
    "id": "platform",
    "word": "platform",
    "phonetic": "/ˈplætfɔːm/",
    "pos": "n.",
    "meaning": "平台；站台",
    "example": "The platform connects freelancers with clients.",
    "translation": "这个平台把自由职业者和客户连接起来。",
    "note": "platform 可指数字平台、实体站台，也可指“表达观点的平台”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "an online platform",
      "a social media platform"
    ]
  },
  {
    "id": "coupon",
    "word": "coupon",
    "phonetic": "/ˈkuːpɒn/",
    "pos": "n.",
    "meaning": "优惠券；折扣券",
    "example": "She used a coupon to get ten percent off.",
    "translation": "她用优惠券打了九折。",
    "note": "coupon 是纸面或电子折扣券；voucher 更像代金券。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "use a coupon",
      "a discount coupon"
    ]
  },
  {
    "id": "itinerary",
    "word": "itinerary",
    "phonetic": "/aɪˈtɪnərəri/",
    "pos": "n.",
    "meaning": "行程安排；旅行路线",
    "example": "Our itinerary includes two days in Kyoto.",
    "translation": "我们的行程包括在京都停留两天。",
    "note": "itiner- 与“道路”有关，指按顺序排好的旅行计划。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "a detailed itinerary",
      "a flexible itinerary"
    ]
  },
  {
    "id": "ingredient",
    "word": "ingredient",
    "phonetic": "/ɪnˈɡriːdiənt/",
    "pos": "n.",
    "meaning": "原料；成分；要素",
    "example": "Tomatoes are the main ingredient in the sauce.",
    "translation": "番茄是这款酱汁的主要原料。",
    "note": "既可指食材，也可指成功所必需的“要素”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "key ingredient",
      "natural ingredients"
    ]
  },
  {
    "id": "elaborate",
    "word": "elaborate",
    "phonetic": "/ɪˈlæbərət/",
    "pos": "adj. / v.",
    "meaning": "精心制作的；详尽的 / 详细说明",
    "example": "He refused to elaborate on his decision.",
    "translation": "他拒绝详细说明自己的决定。",
    "note": "形容词重音在第二音节，动词在第三音节；作动词常接 on。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "elaborate on a point",
      "an elaborate design"
    ]
  },
  {
    "id": "manipulate",
    "word": "manipulate",
    "phonetic": "/məˈnɪpjuleɪt/",
    "pos": "v.",
    "meaning": "操纵；巧妙处理",
    "example": "He accused them of manipulating the data.",
    "translation": "他指责他们操纵数据。",
    "note": "man-（手）+ pul（抓）→ 用手摆弄，引申为操纵。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "manipulate data",
      "manipulate public opinion"
    ]
  },
  {
    "id": "morale",
    "word": "morale",
    "phonetic": "/məˈrɑːl/",
    "pos": "n.",
    "meaning": "士气；精神状态",
    "example": "The team's morale improved after the win.",
    "translation": "赢球之后，球队士气提升了。",
    "note": "morale 是群体士气；moral 是“道德的”或“寓意”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "boost morale",
      "low morale"
    ],
    "confusables": "morale（士气）≠ moral（道德的）"
  },
  {
    "id": "profound",
    "word": "profound",
    "phonetic": "/prəˈfaʊnd/",
    "pos": "adj.",
    "meaning": "深刻的；意义深远的",
    "example": "The book had a profound influence on my thinking.",
    "translation": "这本书对我的思考产生了深远影响。",
    "note": "pro-（向前）+ found（底部）→ 一直探到底，所以深刻。",
    "category": "学术进阶",
    "level": "CET-6",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "a profound impact",
      "profound change"
    ]
  },
  {
    "id": "reconcile",
    "word": "reconcile",
    "phonetic": "/ˈrekənsaɪl/",
    "pos": "v.",
    "meaning": "和解；调和",
    "example": "The two brothers finally reconciled after years apart.",
    "translation": "两兄弟分开多年后终于和解。",
    "note": "reconcile with sb. 是“与某人和好”；reconcile A with B 是“调和”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "reconcile with",
      "reconcile differences"
    ]
  },
  {
    "id": "cozy",
    "word": "cozy",
    "phonetic": "/ˈkəʊzi/",
    "pos": "adj.",
    "meaning": "舒适温馨的",
    "example": "The small cafe feels warm and cozy.",
    "translation": "这家小咖啡馆让人感到温暖舒适。",
    "note": "美式 cozy，英式 cosy。强调小巧、温暖、让人放松。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "a cozy corner",
      "warm and cozy"
    ]
  },
  {
    "id": "drought",
    "word": "drought",
    "phonetic": "/draʊt/",
    "pos": "n.",
    "meaning": "干旱；旱灾",
    "example": "The drought lasted for three years.",
    "translation": "这场干旱持续了三年。",
    "note": "注意发音 /draʊt/，gh 不发音。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "severe drought",
      "a period of drought"
    ]
  },
  {
    "id": "recovery",
    "word": "recovery",
    "phonetic": "/rɪˈkʌvəri/",
    "pos": "n.",
    "meaning": "康复；恢复",
    "example": "She made a full recovery after surgery.",
    "translation": "手术后她完全康复了。",
    "note": "make a full recovery 是“完全康复”的固定说法。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "make a full recovery",
      "recovery from"
    ]
  },
  {
    "id": "encrypt",
    "word": "encrypt",
    "phonetic": "/ɪnˈkrɪpt/",
    "pos": "v.",
    "meaning": "加密",
    "example": "The messages are encrypted before they leave your phone.",
    "translation": "消息在离开手机前会被加密。",
    "note": "encrypt 是加密；decrypt 是解密。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "encrypt data",
      "fully encrypted"
    ]
  },
  {
    "id": "frugal",
    "word": "frugal",
    "phonetic": "/ˈfruːɡl/",
    "pos": "adj.",
    "meaning": "节俭的；简朴的",
    "example": "They live a frugal but comfortable life.",
    "translation": "他们过着简朴却舒适的生活。",
    "note": "frugal 偏褒义，是“有节制地花”；stingy 才是“吝啬”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "a frugal lifestyle",
      "frugal with money"
    ]
  },
  {
    "id": "customs",
    "word": "customs",
    "phonetic": "/ˈkʌstəmz/",
    "pos": "n.",
    "meaning": "海关",
    "example": "It took an hour to get through customs.",
    "translation": "我们花了一个小时才通过海关。",
    "note": "custom 是“习俗”，加 s 后作“海关”，通常用复数。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "go through customs",
      "customs officers"
    ],
    "confusables": "custom（习俗）≠ customs（海关）"
  },
  {
    "id": "catering",
    "word": "catering",
    "phonetic": "/ˈkeɪtərɪŋ/",
    "pos": "n.",
    "meaning": "餐饮服务；承办酒席",
    "example": "She runs a small catering business for weddings.",
    "translation": "她经营一家承办婚礼餐饮的小公司。",
    "note": "cater for 是“为……提供饮食”，catering 是这门生意。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "a catering company",
      "catering for events"
    ]
  },
  {
    "id": "delegate",
    "word": "delegate",
    "phonetic": "/ˈdelɪɡeɪt/",
    "pos": "v.",
    "meaning": "委派；授权",
    "example": "Good managers know how to delegate.",
    "translation": "优秀的管理者懂得如何授权。",
    "note": "作动词重音在第三音节；作名词“代表”时重音在第一音节。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "delegate tasks",
      "delegate authority"
    ]
  },
  {
    "id": "objective",
    "word": "objective",
    "phonetic": "/əbˈdʒektɪv/",
    "pos": "adj.",
    "meaning": "客观的；不带偏见的",
    "example": "A good reporter tries to stay objective.",
    "translation": "优秀的记者会尽量保持客观。",
    "note": "作名词时 objective 是“目标”。客观与主观相对：objective vs subjective。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "an objective account",
      "remain objective"
    ],
    "confusables": "objective（客观的）≠ subjective（主观的）"
  },
  {
    "id": "overwhelmed",
    "word": "overwhelmed",
    "phonetic": "/ˌəʊvəˈwelmd/",
    "pos": "adj.",
    "meaning": "不堪重负的；被淹没的",
    "example": "She felt overwhelmed by the amount of work.",
    "translation": "工作量让她感到不堪重负。",
    "note": "overwhelm 原意是“淹没”，情绪上就是被压得喘不过气。",
    "category": "核心高频",
    "level": "IELTS",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "feel overwhelmed",
      "overwhelmed by"
    ]
  },
  {
    "id": "tuition",
    "word": "tuition",
    "phonetic": "/tjuˈɪʃn/",
    "pos": "n.",
    "meaning": "学费；教学",
    "example": "Tuition has risen faster than inflation.",
    "translation": "学费上涨得比通胀还快。",
    "note": "美式英语常指学费；英式英语也可指“教学、辅导”。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "tuition fees",
      "private tuition"
    ]
  },
  {
    "id": "supportive",
    "word": "supportive",
    "phonetic": "/səˈpɔːtɪv/",
    "pos": "adj.",
    "meaning": "支持的；给予帮助的",
    "example": "Her colleagues were supportive during a difficult year.",
    "translation": "在艰难的一年里，同事们一直支持她。",
    "note": "be supportive of sb./sth. 表示“支持……”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "supportive of",
      "a supportive friend"
    ]
  },
  {
    "id": "appliance",
    "word": "appliance",
    "phonetic": "/əˈplaɪəns/",
    "pos": "n.",
    "meaning": "家用电器；器具",
    "example": "The kitchen comes with modern appliances.",
    "translation": "厨房配有现代家电。",
    "note": "household appliances 是“家用电器”的固定说法。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "household appliances",
      "kitchen appliances"
    ]
  },
  {
    "id": "wildlife",
    "word": "wildlife",
    "phonetic": "/ˈwaɪldlaɪf/",
    "pos": "n.",
    "meaning": "野生动物；野生生物",
    "example": "The park protects rare wildlife.",
    "translation": "这座公园保护珍稀野生动物。",
    "note": "wildlife 是不可数集合名词，通常不加 s。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "wildlife protection",
      "local wildlife"
    ]
  },
  {
    "id": "chronic",
    "word": "chronic",
    "phonetic": "/ˈkrɒnɪk/",
    "pos": "adj.",
    "meaning": "慢性的；长期的",
    "example": "She has chronic back pain.",
    "translation": "她有慢性背痛。",
    "note": "chronic 与 acute（急性的）相对，强调长期存在。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "chronic illness",
      "chronic pain"
    ],
    "confusables": "chronic（慢性的）≠ acute（急性的）"
  },
  {
    "id": "automate",
    "word": "automate",
    "phonetic": "/ˈɔːtəmeɪt/",
    "pos": "v.",
    "meaning": "使自动化",
    "example": "The factory automated most of its packing process.",
    "translation": "工厂把大部分包装流程自动化了。",
    "note": "automate 是“让机器完成”；automatic 是形容词。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "automate a process",
      "fully automated"
    ]
  },
  {
    "id": "counterfeit",
    "word": "counterfeit",
    "phonetic": "/ˈkaʊntəfɪt/",
    "pos": "adj.",
    "meaning": "假冒的；伪造的",
    "example": "Customs officers seized thousands of counterfeit goods.",
    "translation": "海关官员查获了数千件假冒商品。",
    "note": "counterfeit 强调伪造成真品；fake 更口语。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "counterfeit goods",
      "a counterfeit product"
    ]
  },
  {
    "id": "layover",
    "word": "layover",
    "phonetic": "/ˈleɪəʊvə(r)/",
    "pos": "n.",
    "meaning": "中途停留；转机等待",
    "example": "We had a six-hour layover in Dubai.",
    "translation": "我们在迪拜中转停留了六个小时。",
    "note": "layover 指转机之间的等待；stopover 往往可以出机场停留更久。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "a long layover",
      "a layover in Hong Kong"
    ]
  },
  {
    "id": "flavor",
    "word": "flavor",
    "phonetic": "/ˈfleɪvə(r)/",
    "pos": "n.",
    "meaning": "味道；风味",
    "example": "This soup has a rich, smoky flavor.",
    "translation": "这汤有浓郁的烟熏风味。",
    "note": "flavor 偏美式拼写；英式写作 flavour。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "a rich flavor",
      "add flavor to"
    ]
  },
  {
    "id": "proposal",
    "word": "proposal",
    "phonetic": "/prəˈpəʊzl/",
    "pos": "n.",
    "meaning": "提案；建议；求婚",
    "example": "The board will review the proposal on Friday.",
    "translation": "董事会将在周五审议这项提案。",
    "note": "propose 的名词。商务语境里通常指正式书面方案。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "submit a proposal",
      "a business proposal"
    ]
  },
  {
    "id": "credible",
    "word": "credible",
    "phonetic": "/ˈkredəbl/",
    "pos": "adj.",
    "meaning": "可信的；可靠的",
    "example": "We need a credible source before we publish the claim.",
    "translation": "在发布这一说法前，我们需要一个可信的来源。",
    "note": "credible 是“别人愿意相信”；credulous 才是“轻信的”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "credible evidence",
      "a credible source"
    ],
    "confusables": "credible（可信的）≠ credulous（轻信的）"
  },
  {
    "id": "serene",
    "word": "serene",
    "phonetic": "/səˈriːn/",
    "pos": "adj.",
    "meaning": "宁静的；安详的",
    "example": "The lake looked calm and serene at dawn.",
    "translation": "黎明时分的湖面宁静安详。",
    "note": "serene 是“平静得让人安心”，比 calm 更有画面感。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "a serene expression",
      "calm and serene"
    ]
  },
  {
    "id": "lecture",
    "word": "lecture",
    "phonetic": "/ˈlektʃə(r)/",
    "pos": "n.",
    "meaning": "讲座；大学课程",
    "example": "She gave a lecture on climate history.",
    "translation": "她做了一场关于气候历史的讲座。",
    "note": "lecture 通常是老师讲、学生听；seminar 更强调讨论。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "attend a lecture",
      "a lecture hall"
    ]
  },
  {
    "id": "courtesy",
    "word": "courtesy",
    "phonetic": "/ˈkɜːtəsi/",
    "pos": "n.",
    "meaning": "礼貌；殷勤",
    "example": "He greeted every guest with courtesy.",
    "translation": "他礼貌地迎接每一位客人。",
    "note": "common courtesy 是“基本的礼貌”；courtesy call 是礼节性拜访。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "common courtesy",
      "a courtesy call"
    ]
  },
  {
    "id": "furniture",
    "word": "furniture",
    "phonetic": "/ˈfɜːnɪtʃə(r)/",
    "pos": "n.",
    "meaning": "家具",
    "example": "The furniture was simple but comfortable.",
    "translation": "家具简单但舒适。",
    "note": "不可数名词：a piece of furniture，不说 a furniture。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "a piece of furniture",
      "office furniture"
    ]
  },
  {
    "id": "offset",
    "word": "offset",
    "phonetic": "/ˈɒfset/",
    "pos": "v.",
    "meaning": "抵消；弥补",
    "example": "Planting trees can offset some carbon emissions.",
    "translation": "种树可以抵消一部分碳排放。",
    "note": "offset 的过去式和过去分词通常仍是 offset。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "offset emissions",
      "offset the cost"
    ]
  },
  {
    "id": "surgery",
    "word": "surgery",
    "phonetic": "/ˈsɜːdʒəri/",
    "pos": "n.",
    "meaning": "手术；外科",
    "example": "He needs surgery on his shoulder.",
    "translation": "他的肩膀需要手术。",
    "note": "英式 surgery 也可指诊所；美式常用 doctor's office。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "undergo surgery",
      "minor surgery"
    ]
  },
  {
    "id": "obsolete",
    "word": "obsolete",
    "phonetic": "/ˌɒbsəˈliːt/",
    "pos": "adj.",
    "meaning": "过时的；被淘汰的",
    "example": "Many old skills become obsolete.",
    "translation": "许多旧技能会变得过时。",
    "note": "obsolete 强调“已被新事物取代”，不是单纯“老”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "become obsolete",
      "obsolete technology"
    ]
  },
  {
    "id": "budget",
    "word": "budget",
    "phonetic": "/ˈbʌdʒɪt/",
    "pos": "n.",
    "meaning": "预算；经费",
    "example": "We need to stay within budget.",
    "translation": "我们需要控制在预算之内。",
    "note": "on a budget 是“预算有限”；budget 也可作动词“编制预算”。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "on a budget",
      "stay within budget"
    ]
  },
  {
    "id": "wander",
    "word": "wander",
    "phonetic": "/ˈwɒndə(r)/",
    "pos": "v.",
    "meaning": "漫步；闲逛",
    "example": "We spent the afternoon wandering through the old town.",
    "translation": "我们花了一下午在老城里闲逛。",
    "note": "wander 是漫无目的地走；wonder 才是“想知道”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "wander around",
      "wander off"
    ],
    "confusables": "wander（漫步）≠ wonder（想知道）"
  },
  {
    "id": "nutritious",
    "word": "nutritious",
    "phonetic": "/njuˈtrɪʃəs/",
    "pos": "adj.",
    "meaning": "有营养的",
    "example": "Beans are cheap, filling and highly nutritious.",
    "translation": "豆类便宜、饱腹，而且很有营养。",
    "note": "nutrition 是营养；nutritious 是“有营养的”，不是“营养学”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "nutritious food",
      "a nutritious meal"
    ],
    "confusables": "nutritious（有营养的）≠ nutritional（营养方面的）"
  },
  {
    "id": "commute",
    "word": "commute",
    "phonetic": "/kəˈmjuːt/",
    "pos": "v.",
    "meaning": "通勤；上下班往返",
    "example": "He commutes by train for over an hour each way.",
    "translation": "他每天坐火车通勤，单程一个多小时。",
    "note": "commute 是往返于家和工作地，不是“交流”（communicate）。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "commute to work",
      "a long commute"
    ],
    "confusables": "commute（通勤）≠ communicate（交流）"
  },
  {
    "id": "propaganda",
    "word": "propaganda",
    "phonetic": "/ˌprɒpəˈɡændə/",
    "pos": "n.",
    "meaning": "宣传；政治宣传",
    "example": "The film was dismissed as propaganda.",
    "translation": "这部电影被斥为政治宣传。",
    "note": "propaganda 通常带贬义，暗示信息被有目的地操控。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "political propaganda",
      "spread propaganda"
    ]
  },
  {
    "id": "dilemma",
    "word": "dilemma",
    "phonetic": "/dɪˈlemə/",
    "pos": "n.",
    "meaning": "困境；两难选择",
    "example": "He faced the dilemma of choosing between work and family.",
    "translation": "他面临在工作和家庭之间选择的两难。",
    "note": "di-（二）+ lemma（命题）→ 两个选项都难，才是 dilemma。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "face a dilemma",
      "a moral dilemma"
    ]
  },
  {
    "id": "cognitive",
    "word": "cognitive",
    "phonetic": "/ˈkɒɡnətɪv/",
    "pos": "adj.",
    "meaning": "认知的；思维的",
    "example": "Sleep affects cognitive performance.",
    "translation": "睡眠会影响认知表现。",
    "note": "cognition 是认知过程；cognitive 是形容词。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "cognitive skills",
      "cognitive development"
    ]
  },
  {
    "id": "undermine",
    "word": "undermine",
    "phonetic": "/ˌʌndəˈmaɪn/",
    "pos": "v.",
    "meaning": "削弱；暗中破坏",
    "example": "Constant criticism can undermine confidence.",
    "translation": "持续的批评会削弱信心。",
    "note": "under（下面）+ mine（挖）→ 从底部挖空，引申为削弱。",
    "category": "学术进阶",
    "level": "考研",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "undermine confidence",
      "undermine authority"
    ]
  },
  {
    "id": "urban",
    "word": "urban",
    "phonetic": "/ˈɜːbən/",
    "pos": "adj.",
    "meaning": "城市的；都市的",
    "example": "More people now live in urban areas.",
    "translation": "现在更多人生活在城市地区。",
    "note": "urban 与 rural（乡村的）相对。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "urban areas",
      "urban life"
    ],
    "confusables": "urban（城市的）≠ rural（乡村的）"
  },
  {
    "id": "carbon",
    "word": "carbon",
    "phonetic": "/ˈkɑːbən/",
    "pos": "n.",
    "meaning": "碳",
    "example": "The company aims to cut its carbon footprint.",
    "translation": "该公司计划减少碳足迹。",
    "note": "carbon footprint 是个人或组织产生的温室气体总量。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "carbon footprint",
      "carbon emissions"
    ]
  },
  {
    "id": "allergy",
    "word": "allergy",
    "phonetic": "/ˈælədʒi/",
    "pos": "n.",
    "meaning": "过敏；过敏症",
    "example": "She has a severe allergy to nuts.",
    "translation": "她对坚果严重过敏。",
    "note": "allergic 是形容词；an allergy to sth. 表示“对某物过敏”。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "an allergy to",
      "food allergy"
    ]
  },
  {
    "id": "implement",
    "word": "implement",
    "phonetic": "/ˈɪmplɪment/",
    "pos": "v.",
    "meaning": "实施；执行",
    "example": "The team will implement the new system next month.",
    "translation": "团队将在下个月实施新系统。",
    "note": "职场高频搭配：implement a plan / policy / system。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "implement a policy",
      "implement a system"
    ]
  },
  {
    "id": "subscription",
    "word": "subscription",
    "phonetic": "/səbˈskrɪpʃn/",
    "pos": "n.",
    "meaning": "订阅；会员费",
    "example": "I cancelled my streaming subscription.",
    "translation": "我取消了流媒体订阅。",
    "note": "subscribe 是动词；subscription 是订阅服务或费用。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "a monthly subscription",
      "cancel a subscription"
    ]
  },
  {
    "id": "indigenous",
    "word": "indigenous",
    "phonetic": "/ɪnˈdɪdʒənəs/",
    "pos": "adj.",
    "meaning": "土著的；本地原生的",
    "example": "The museum works closely with indigenous communities.",
    "translation": "博物馆与原住民社区密切合作。",
    "note": "indigenous 强调“原本就生长在这片土地”，不是外来引入。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "indigenous people",
      "indigenous culture"
    ]
  },
  {
    "id": "metabolism",
    "word": "metabolism",
    "phonetic": "/məˈtæbəlɪzəm/",
    "pos": "n.",
    "meaning": "新陈代谢",
    "example": "Regular exercise can boost your metabolism.",
    "translation": "规律运动可以促进新陈代谢。",
    "note": "meta-（变化）+ bol（投掷）→ 体内不断转换物质的过程。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "boost metabolism",
      "a slow metabolism"
    ]
  },
  {
    "id": "stakeholder",
    "word": "stakeholder",
    "phonetic": "/ˈsteɪkhəʊldə(r)/",
    "pos": "n.",
    "meaning": "利益相关者",
    "example": "The plan was discussed with all key stakeholders.",
    "translation": "该计划已与所有关键利益相关者讨论。",
    "note": "stake 是“利害关系”，不只指股东，也包括员工、客户、社区。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "key stakeholders",
      "stakeholder interests"
    ]
  },
  {
    "id": "rumor",
    "word": "rumor",
    "phonetic": "/ˈruːmə(r)/",
    "pos": "n.",
    "meaning": "谣言；传闻",
    "example": "A rumor spread that the factory would close.",
    "translation": "有传闻说工厂将要关闭。",
    "note": "美式拼写 rumor，英式 rumour。rumor has it that... 表示“有传闻说”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "a false rumor",
      "rumor has it that"
    ]
  },
  {
    "id": "gloomy",
    "word": "gloomy",
    "phonetic": "/ˈɡluːmi/",
    "pos": "adj.",
    "meaning": "忧郁的；阴暗的",
    "example": "The weather matched her gloomy mood.",
    "translation": "天气和她阴郁的心情正相衬。",
    "note": "既可形容天气昏暗，也可形容人情绪低落。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "a gloomy mood",
      "gloomy weather"
    ]
  },
  {
    "id": "campus",
    "word": "campus",
    "phonetic": "/ˈkæmpəs/",
    "pos": "n.",
    "meaning": "校园；校区",
    "example": "Most first-year students live on campus.",
    "translation": "大多数大一学生住在校内。",
    "note": "on campus 是固定搭配，不加 the。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "on campus",
      "a university campus"
    ]
  },
  {
    "id": "etiquette",
    "word": "etiquette",
    "phonetic": "/ˈetɪket/",
    "pos": "n.",
    "meaning": "礼仪；规矩",
    "example": "Good email etiquette matters in a new job.",
    "translation": "在新工作中，良好的邮件礼仪很重要。",
    "note": "etiquette 是约定俗成的社交规则，比 manners 更正式。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "office etiquette",
      "social etiquette"
    ]
  },
  {
    "id": "neighbor",
    "word": "neighbor",
    "phonetic": "/ˈneɪbə(r)/",
    "pos": "n.",
    "meaning": "邻居",
    "example": "Our neighbor waters the plants when we travel.",
    "translation": "我们旅行时，邻居会帮忙浇花。",
    "note": "美式 neighbor，英式 neighbour；neighborhood 是社区。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "next-door neighbor",
      "a good neighbor"
    ]
  },
  {
    "id": "recycle",
    "word": "recycle",
    "phonetic": "/ˌriːˈsaɪkl/",
    "pos": "v.",
    "meaning": "回收利用",
    "example": "We recycle glass, paper and metal.",
    "translation": "我们回收玻璃、纸张和金属。",
    "note": "re-（再）+ cycle（循环）→ 让材料再进入循环。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "recycle waste",
      "recycled materials"
    ]
  },
  {
    "id": "injury",
    "word": "injury",
    "phonetic": "/ˈɪndʒəri/",
    "pos": "n.",
    "meaning": "伤；受伤",
    "example": "He missed the season because of a knee injury.",
    "translation": "他因膝伤错过了整个赛季。",
    "note": "injury 多指意外造成的身体损伤；wound 常指刀枪等造成的伤口。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "a serious injury",
      "sports injury"
    ]
  },
  {
    "id": "algorithm",
    "word": "algorithm",
    "phonetic": "/ˈælɡərɪðəm/",
    "pos": "n.",
    "meaning": "算法",
    "example": "The algorithm decides which posts you see.",
    "translation": "算法决定你能看到哪些帖子。",
    "note": "algorithm 是一组计算规则，不一定是“程序”本身。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "a search algorithm",
      "the algorithm decides"
    ]
  },
  {
    "id": "bargain",
    "word": "bargain",
    "phonetic": "/ˈbɑːɡən/",
    "pos": "n. / v.",
    "meaning": "便宜货；讨价还价",
    "example": "At that price, it was a real bargain.",
    "translation": "以那个价格买到，真是捡了个大便宜。",
    "note": "a real bargain 是“真划算”；bargain with sb. 是“与某人讨价还价”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "a real bargain",
      "bargain with sb."
    ]
  },
  {
    "id": "hostel",
    "word": "hostel",
    "phonetic": "/ˈhɒstl/",
    "pos": "n.",
    "meaning": "青年旅舍；廉价旅馆",
    "example": "We stayed in a friendly hostel near the station.",
    "translation": "我们住在车站附近一家氛围友好的青年旅舍。",
    "note": "hostel 比 hotel 便宜，常有共用房间；不要与 hostile（敌意的）混淆。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "youth hostel",
      "book a hostel"
    ],
    "confusables": "hostel（旅舍）≠ hostile（敌意的）"
  },
  {
    "id": "preservative",
    "word": "preservative",
    "phonetic": "/prɪˈzɜːvətɪv/",
    "pos": "n.",
    "meaning": "防腐剂",
    "example": "The label says the juice contains no preservatives.",
    "translation": "标签上写着这款果汁不含防腐剂。",
    "note": "preserve 是保存；preservative 是帮助保存的添加剂。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "artificial preservatives",
      "free from preservatives"
    ]
  },
  {
    "id": "burnout",
    "word": "burnout",
    "phonetic": "/ˈbɜːnaʊt/",
    "pos": "n.",
    "meaning": "倦怠；精疲力竭",
    "example": "Long hours and constant pressure led to burnout.",
    "translation": "长时间工作和持续压力导致了职业倦怠。",
    "note": "burn out 是动词短语；burnout 是这种被掏空的状态。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "suffer from burnout",
      "avoid burnout"
    ]
  },
  {
    "id": "coverage",
    "word": "coverage",
    "phonetic": "/ˈkʌvərɪdʒ/",
    "pos": "n.",
    "meaning": "报道；覆盖范围",
    "example": "The trial received extensive media coverage.",
    "translation": "这场审判得到了媒体的广泛报道。",
    "note": "media coverage 是“媒体报道量”；coverage 也可指保险或信号覆盖。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "media coverage",
      "extensive coverage"
    ]
  },
  {
    "id": "nostalgia",
    "word": "nostalgia",
    "phonetic": "/nɒˈstældʒə/",
    "pos": "n.",
    "meaning": "怀旧；乡愁",
    "example": "The old songs filled him with nostalgia.",
    "translation": "那些老歌让他满怀怀旧之情。",
    "note": "nostalgia for sth. 表示对过去某段时光的怀念。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "a wave of nostalgia",
      "nostalgia for"
    ]
  },
  {
    "id": "revise",
    "word": "revise",
    "phonetic": "/rɪˈvaɪz/",
    "pos": "v.",
    "meaning": "复习；修订",
    "example": "I need to revise for tomorrow's test.",
    "translation": "我得为明天的考试复习。",
    "note": "英式英语里 revise for an exam 就是“备考”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "revise for an exam",
      "revise the draft"
    ]
  },
  {
    "id": "mutual",
    "word": "mutual",
    "phonetic": "/ˈmjuːtʃuəl/",
    "pos": "adj.",
    "meaning": "相互的；共同的",
    "example": "The decision was based on mutual respect.",
    "translation": "这个决定建立在相互尊重之上。",
    "note": "mutual 强调双方彼此，不是单方面的。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "mutual respect",
      "mutual benefit"
    ]
  },
  {
    "id": "versatile",
    "word": "versatile",
    "phonetic": "/ˈvɜːsətaɪl/",
    "pos": "adj.",
    "meaning": "多用途的；多才多艺的",
    "example": "Eggs are a versatile ingredient.",
    "translation": "鸡蛋是一种用途广泛的食材。",
    "note": "vers-（转）→ 能朝很多方向转，所以多才多艺。",
    "category": "核心高频",
    "level": "IELTS",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "a versatile tool",
      "versatile skill set"
    ]
  },
  {
    "id": "landscape",
    "word": "landscape",
    "phonetic": "/ˈlændskeɪp/",
    "pos": "n.",
    "meaning": "风景；景观",
    "example": "The landscape changes dramatically at sunset.",
    "translation": "日落时，景观变化非常壮观。",
    "note": "landscape 是视野中的整片地景；scenery 更泛指风景。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "a rural landscape",
      "the landscape changes"
    ]
  },
  {
    "id": "therapy",
    "word": "therapy",
    "phonetic": "/ˈθerəpi/",
    "pos": "n.",
    "meaning": "治疗；疗法；心理治疗",
    "example": "She has been in therapy since last year.",
    "translation": "她从去年开始接受心理治疗。",
    "note": "therapy 可指物理治疗，也可指谈话治疗。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "physical therapy",
      "talk therapy"
    ]
  },
  {
    "id": "patent",
    "word": "patent",
    "phonetic": "/ˈpætnt/",
    "pos": "n.",
    "meaning": "专利；专利权",
    "example": "They filed a patent for the new battery.",
    "translation": "他们为这种新电池申请了专利。",
    "note": "file a patent 是“申请专利”；patent 也可作形容词“明显的”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "apply for a patent",
      "patent protection"
    ]
  },
  {
    "id": "luxury",
    "word": "luxury",
    "phonetic": "/ˈlʌkʃəri/",
    "pos": "n.",
    "meaning": "奢侈；奢侈品",
    "example": "A long bath is a small luxury.",
    "translation": "好好泡个澡是一种小小的奢侈。",
    "note": "luxury 可作名词也可作定语：a luxury hotel。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "a luxury item",
      "afford a luxury"
    ]
  },
  {
    "id": "souvenir",
    "word": "souvenir",
    "phonetic": "/ˌsuːvəˈnɪə(r)/",
    "pos": "n.",
    "meaning": "纪念品",
    "example": "I bought a small wooden boat as a souvenir.",
    "translation": "我买了一只小木船作纪念品。",
    "note": "来自法语，原意是“记住”。纪念品是用来留住记忆的。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "a souvenir shop",
      "a souvenir from Paris"
    ]
  },
  {
    "id": "simmer",
    "word": "simmer",
    "phonetic": "/ˈsɪmə(r)/",
    "pos": "v.",
    "meaning": "炖；小火慢煮",
    "example": "Let the sauce simmer for ten minutes.",
    "translation": "让酱汁小火慢炖十分钟。",
    "note": "simmer 是“咕嘟但不沸腾”，比 boil 温和。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "simmer gently",
      "leave it to simmer"
    ]
  },
  {
    "id": "prioritize",
    "word": "prioritize",
    "phonetic": "/praɪˈɒrətaɪz/",
    "pos": "v.",
    "meaning": "优先处理；确定优先级",
    "example": "We need to prioritize the most urgent tasks.",
    "translation": "我们需要优先处理最紧急的任务。",
    "note": "priority + ize。不是“把所有事都做完”，而是先做最重要的。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "prioritize tasks",
      "prioritize safety"
    ]
  },
  {
    "id": "viral",
    "word": "viral",
    "phonetic": "/ˈvaɪrəl/",
    "pos": "adj.",
    "meaning": "病毒式传播的；走红的",
    "example": "The video went viral within a day.",
    "translation": "这段视频一天之内就火了。",
    "note": "go viral 是网络高频说法：像病毒一样迅速扩散。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "go viral",
      "viral content"
    ]
  },
  {
    "id": "vulnerable",
    "word": "vulnerable",
    "phonetic": "/ˈvʌlnərəbl/",
    "pos": "adj.",
    "meaning": "脆弱的；易受伤害的",
    "example": "It is hard to be vulnerable with someone new.",
    "translation": "在新认识的人面前展露脆弱并不容易。",
    "note": "be vulnerable to 表示“容易受到……影响或伤害”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "feel vulnerable",
      "vulnerable to"
    ]
  },
  {
    "id": "literacy",
    "word": "literacy",
    "phonetic": "/ˈlɪtərəsi/",
    "pos": "n.",
    "meaning": "读写能力；素养",
    "example": "The program aims to improve adult literacy.",
    "translation": "该项目旨在提高成人读写能力。",
    "note": "digital literacy 是“数字素养”，不只指识字。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "digital literacy",
      "adult literacy"
    ]
  },
  {
    "id": "apology",
    "word": "apology",
    "phonetic": "/əˈpɒlədʒi/",
    "pos": "n.",
    "meaning": "道歉；歉意",
    "example": "He offered a public apology for the mistake.",
    "translation": "他为这个错误公开道歉。",
    "note": "apologize 是动词；apology 是名词。offer/make an apology 都可。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "offer an apology",
      "accept an apology"
    ]
  },
  {
    "id": "tidy",
    "word": "tidy",
    "phonetic": "/ˈtaɪdi/",
    "pos": "adj.",
    "meaning": "整洁的；井井有条的",
    "example": "Keep your desk tidy so you can focus.",
    "translation": "保持桌面整洁，才能专注。",
    "note": "tidy 既可形容房间，也可形容人“爱整洁”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "keep sth. tidy",
      "a tidy room"
    ]
  },
  {
    "id": "endangered",
    "word": "endangered",
    "phonetic": "/ɪnˈdeɪndʒəd/",
    "pos": "adj.",
    "meaning": "濒危的",
    "example": "The snow leopard is an endangered species.",
    "translation": "雪豹是濒危物种。",
    "note": "endanger 是“危及”；endangered species 是“濒危物种”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "endangered species",
      "critically endangered"
    ]
  },
  {
    "id": "diagnosis",
    "word": "diagnosis",
    "phonetic": "/ˌdaɪəɡˈnəʊsɪs/",
    "pos": "n.",
    "meaning": "诊断",
    "example": "An early diagnosis can save lives.",
    "translation": "早期诊断可以挽救生命。",
    "note": "复数 diagnoses。动词是 diagnose。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "make a diagnosis",
      "an early diagnosis"
    ]
  },
  {
    "id": "data",
    "word": "data",
    "phonetic": "/ˈdeɪtə/",
    "pos": "n.",
    "meaning": "数据；资料",
    "example": "The study collected data from 2,000 users.",
    "translation": "这项研究收集了两千名用户的数据。",
    "note": "正式语境中常作复数，但日常也常作不可数名词。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "collect data",
      "personal data"
    ]
  },
  {
    "id": "receipt",
    "word": "receipt",
    "phonetic": "/rɪˈsiːt/",
    "pos": "n.",
    "meaning": "收据；接收",
    "example": "Keep the receipt in case you need to return it.",
    "translation": "保留收据，以备退货时需要。",
    "note": "p 不发音。不要与 recipe（食谱）混淆。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "keep the receipt",
      "a receipt for"
    ],
    "confusables": "receipt（收据）≠ recipe（食谱）"
  },
  {
    "id": "expedition",
    "word": "expedition",
    "phonetic": "/ˌekspəˈdɪʃn/",
    "pos": "n.",
    "meaning": "探险；考察",
    "example": "The team spent three months on an expedition to the Arctic.",
    "translation": "团队花了三个月去北极探险。",
    "note": "expedition 有明确目标，通常是艰苦、有组织的远行。",
    "category": "学术进阶",
    "level": "考研",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "a polar expedition",
      "lead an expedition"
    ]
  },
  {
    "id": "recipe",
    "word": "recipe",
    "phonetic": "/ˈresəpi/",
    "pos": "n.",
    "meaning": "食谱；秘诀",
    "example": "This recipe takes only twenty minutes.",
    "translation": "这道菜只要二十分钟就能做好。",
    "note": "recipe 的发音不是 re-sipe；结尾是 /pi/。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "follow a recipe",
      "a recipe for success"
    ],
    "confusables": "recipe（食谱）≠ receipt（收据）"
  },
  {
    "id": "anticipate",
    "word": "anticipate",
    "phonetic": "/ænˈtɪsɪpeɪt/",
    "pos": "v.",
    "meaning": "预期；预料",
    "example": "We anticipate a rise in demand.",
    "translation": "我们预计需求会上升。",
    "note": "不只是“知道会来”，还包含提前准备。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "anticipate demand",
      "as anticipated"
    ]
  },
  {
    "id": "transparent",
    "word": "transparent",
    "phonetic": "/trænsˈpærənt/",
    "pos": "adj.",
    "meaning": "透明的；易懂的",
    "example": "The process should be transparent to the public.",
    "translation": "这个过程应当对公众透明。",
    "note": "trans-（穿过）+ parere（显现）→ 光能穿过，因而透明。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "a transparent process",
      "fully transparent"
    ]
  },
  {
    "id": "relieved",
    "word": "relieved",
    "phonetic": "/rɪˈliːvd/",
    "pos": "adj.",
    "meaning": "宽慰的；松了一口气的",
    "example": "He was relieved to hear that everyone was safe.",
    "translation": "听说大家都平安，他松了一口气。",
    "note": "relieved 是“坏事没有发生”之后的轻松，不是普通的 happy。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "feel relieved",
      "a relieved smile"
    ]
  },
  {
    "id": "scholarship",
    "word": "scholarship",
    "phonetic": "/ˈskɒləʃɪp/",
    "pos": "n.",
    "meaning": "奖学金；学术研究",
    "example": "She won a scholarship to study abroad.",
    "translation": "她获得了出国留学的奖学金。",
    "note": "既可以指奖学金，也可指严谨的学术研究。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "win a scholarship",
      "a full scholarship"
    ]
  },
  {
    "id": "trust",
    "word": "trust",
    "phonetic": "/trʌst/",
    "pos": "n. / v.",
    "meaning": "信任；信赖",
    "example": "Trust takes years to build and seconds to break.",
    "translation": "信任需要多年建立，却能在几秒内破碎。",
    "note": "trust sb. with sth. 表示“放心把某物交给某人”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "build trust",
      "trust sb. with sth."
    ]
  },
  {
    "id": "household",
    "word": "household",
    "phonetic": "/ˈhaʊshəʊld/",
    "pos": "n.",
    "meaning": "家庭；家户",
    "example": "The average household spends less on food than before.",
    "translation": "普通家庭在食物上的支出比以前少。",
    "note": "household 是作为一个单位的一家人；household chores 是家务。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "household chores",
      "household income"
    ]
  },
  {
    "id": "thrive",
    "word": "thrive",
    "phonetic": "/θraɪv/",
    "pos": "v.",
    "meaning": "茁壮成长；兴旺",
    "example": "These plants thrive in partial shade.",
    "translation": "这些植物在半阴处长得很好。",
    "note": "thrive 不只是“活着”，而是在合适的环境里“活得很好”。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "thrive on change",
      "thrive in a competitive market"
    ]
  },
  {
    "id": "immune",
    "word": "immune",
    "phonetic": "/ɪˈmjuːn/",
    "pos": "adj.",
    "meaning": "免疫的；不受影响的",
    "example": "Vaccines help the body build immune protection.",
    "translation": "疫苗帮助身体建立免疫保护。",
    "note": "immune to 是“对……免疫”，也可比喻“不受……影响”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "immune system",
      "immune to"
    ]
  },
  {
    "id": "glitch",
    "word": "glitch",
    "phonetic": "/ɡlɪtʃ/",
    "pos": "n.",
    "meaning": "小故障；小差错",
    "example": "A minor glitch delayed the launch.",
    "translation": "一个小故障推迟了上线。",
    "note": "glitch 通常指短暂、不严重的技术问题。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "a technical glitch",
      "fix a glitch"
    ]
  },
  {
    "id": "inflation",
    "word": "inflation",
    "phonetic": "/ɪnˈfleɪʃn/",
    "pos": "n.",
    "meaning": "通货膨胀；物价上涨",
    "example": "Inflation has pushed up the price of food.",
    "translation": "通货膨胀推高了食品价格。",
    "note": "inflation 是物价整体上涨；deflation 是通货紧缩。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "rising inflation",
      "control inflation"
    ]
  },
  {
    "id": "hospitality",
    "word": "hospitality",
    "phonetic": "/ˌhɒspɪˈtæləti/",
    "pos": "n.",
    "meaning": "好客；款待",
    "example": "The warmth of their hospitality made us feel at home.",
    "translation": "他们热情好客，让我们宾至如归。",
    "note": "hospital 与 hospitality 同源：把陌生人当病人一样照顾。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "warm hospitality",
      "the hospitality industry"
    ]
  },
  {
    "id": "appetite",
    "word": "appetite",
    "phonetic": "/ˈæpɪtaɪt/",
    "pos": "n.",
    "meaning": "食欲；胃口",
    "example": "The walk gave me a good appetite.",
    "translation": "散步让我胃口大开。",
    "note": "appetite 不只指对食物，也可指对事物的强烈兴趣。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "a good appetite",
      "lose one's appetite"
    ]
  },
  {
    "id": "feedback",
    "word": "feedback",
    "phonetic": "/ˈfiːdbæk/",
    "pos": "n.",
    "meaning": "反馈；意见",
    "example": "The survey collected feedback from over 500 customers.",
    "translation": "这项调查收集了五百多位客户的反馈。",
    "note": "不可数名词，不说 a feedback，可说 some feedback。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "provide feedback",
      "constructive feedback"
    ]
  },
  {
    "id": "subtle",
    "word": "subtle",
    "phonetic": "/ˈsʌtl/",
    "pos": "adj.",
    "meaning": "微妙的；不易察觉的",
    "example": "There is a subtle difference between the two meanings.",
    "translation": "这两个含义之间有微妙的差别。",
    "note": "subtle 的 b 不发音。像风一样轻，才叫微妙。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "a subtle difference",
      "subtle shift"
    ]
  },
  {
    "id": "resilient",
    "word": "resilient",
    "phonetic": "/rɪˈzɪliənt/",
    "pos": "adj.",
    "meaning": "有韧性的；能迅速恢复的",
    "example": "Children are often more resilient than we expect.",
    "translation": "孩子往往比我们想象的更有韧性。",
    "note": "来自拉丁语 resilire（弹回）。想象一根被压弯、又立刻弹起的枝条。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "resilient community",
      "highly resilient"
    ]
  },
  {
    "id": "tutor",
    "word": "tutor",
    "phonetic": "/ˈtjuːtə(r)/",
    "pos": "n.",
    "meaning": "家教；导师",
    "example": "She works as a private tutor on weekends.",
    "translation": "她周末做私人家教。",
    "note": "tutor 可作名词也可作动词，表示“辅导”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "a private tutor",
      "tutor a student"
    ]
  },
  {
    "id": "loyal",
    "word": "loyal",
    "phonetic": "/ˈlɔɪəl/",
    "pos": "adj.",
    "meaning": "忠诚的；忠实的",
    "example": "She remained loyal to her friends.",
    "translation": "她对朋友始终忠诚。",
    "note": "loyal to sb./sth.；loyalty 是名词。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "loyal to",
      "a loyal customer"
    ]
  },
  {
    "id": "clutter",
    "word": "clutter",
    "phonetic": "/ˈklʌtə(r)/",
    "pos": "n.",
    "meaning": "杂物；凌乱",
    "example": "Clear the clutter before you start working.",
    "translation": "开始工作前，先把杂物清理掉。",
    "note": "clutter 是不可数名词，指堆积的、让人心烦的东西。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "clutter on the desk",
      "a lot of clutter"
    ]
  },
  {
    "id": "climate",
    "word": "climate",
    "phonetic": "/ˈklaɪmət/",
    "pos": "n.",
    "meaning": "气候；氛围",
    "example": "The climate here is mild all year round.",
    "translation": "这里全年气候温和。",
    "note": "climate 是长期气候；weather 是某天的天气。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "climate change",
      "a mild climate"
    ],
    "confusables": "climate（气候）≠ weather（天气）"
  },
  {
    "id": "remedy",
    "word": "remedy",
    "phonetic": "/ˈremədi/",
    "pos": "n.",
    "meaning": "疗法；补救办法",
    "example": "There is no simple remedy for a cold.",
    "translation": "感冒没有简单的特效疗法。",
    "note": "remedy 不只指药，也可指解决任何问题的“补救措施”。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "a home remedy",
      "a remedy for"
    ]
  },
  {
    "id": "interface",
    "word": "interface",
    "phonetic": "/ˈɪntəfeɪs/",
    "pos": "n.",
    "meaning": "界面；接口",
    "example": "The app has a clean, simple interface.",
    "translation": "这款应用的界面干净简洁。",
    "note": "user interface（UI）是用户与系统交互的界面。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "user interface",
      "a simple interface"
    ]
  },
  {
    "id": "installment",
    "word": "installment",
    "phonetic": "/ɪnˈstɔːlmənt/",
    "pos": "n.",
    "meaning": "分期付款的一期；分期",
    "example": "They paid for the car in monthly installments.",
    "translation": "他们按月分期付款买下了这辆车。",
    "note": "英式拼写 instalment；pay in installments 是“分期付款”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "monthly installments",
      "pay in installments"
    ]
  },
  {
    "id": "embark",
    "word": "embark",
    "phonetic": "/ɪmˈbɑːk/",
    "pos": "v.",
    "meaning": "上船；开始从事",
    "example": "She embarked on a new career at thirty.",
    "translation": "她三十岁时开始了一段新的职业生涯。",
    "note": "embark on sth. 是高频搭配，表示“着手开始”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "embark on a journey",
      "embark on a career"
    ]
  },
  {
    "id": "bland",
    "word": "bland",
    "phonetic": "/blænd/",
    "pos": "adj.",
    "meaning": "清淡无味的；平淡的",
    "example": "The dish was healthy but a little bland.",
    "translation": "这道菜很健康，但味道有点淡。",
    "note": "bland 常带贬义：不是“清淡宜人”，而是“没味道”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "a bland diet",
      "taste bland"
    ]
  },
  {
    "id": "meticulous",
    "word": "meticulous",
    "phonetic": "/məˈtɪkjələs/",
    "pos": "adj.",
    "meaning": "一丝不苟的；极其细致的",
    "example": "She kept meticulous records of every experiment.",
    "translation": "她一丝不苟地记录了每一次实验。",
    "note": "meticulous 的人连最小的细节（detail）都不放过。",
    "category": "学术进阶",
    "level": "考研",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "meticulous records",
      "meticulous attention to detail"
    ]
  },
  {
    "id": "censorship",
    "word": "censorship",
    "phonetic": "/ˈsensəʃɪp/",
    "pos": "n.",
    "meaning": "审查制度；审查",
    "example": "The law led to tighter censorship of online content.",
    "translation": "这项法律导致网络内容受到更严格的审查。",
    "note": "censor 是审查者或审查动作；censorship 是制度本身。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "media censorship",
      "strict censorship"
    ]
  },
  {
    "id": "well-being",
    "word": "well-being",
    "phonetic": "/ˌwel ˈbiːɪŋ/",
    "pos": "n.",
    "meaning": "幸福感；身心健康",
    "example": "Sleep is essential for mental well-being.",
    "translation": "睡眠对心理健康至关重要。",
    "note": "well-being 强调整体状态，不只是“没有生病”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "mental well-being",
      "a sense of well-being"
    ]
  },
  {
    "id": "thesis",
    "word": "thesis",
    "phonetic": "/ˈθiːsɪs/",
    "pos": "n.",
    "meaning": "论文；论点",
    "example": "She is writing her thesis on urban migration.",
    "translation": "她正在写关于城市移民的论文。",
    "note": "复数 theses。也可指一篇文章的核心论点。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "a doctoral thesis",
      "the central thesis"
    ]
  },
  {
    "id": "spontaneous",
    "word": "spontaneous",
    "phonetic": "/spɒnˈteɪniəs/",
    "pos": "adj.",
    "meaning": "自发的；即兴的",
    "example": "The crowd broke into spontaneous applause.",
    "translation": "人群自发地鼓起掌来。",
    "note": "没有事先安排，从心里自然发生，才叫 spontaneous。",
    "category": "核心高频",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "a spontaneous decision",
      "spontaneous applause"
    ]
  },
  {
    "id": "suburb",
    "word": "suburb",
    "phonetic": "/ˈsʌbɜːb/",
    "pos": "n.",
    "meaning": "郊区；城郊",
    "example": "They moved to a quiet suburb outside the city.",
    "translation": "他们搬到了城外的安静郊区。",
    "note": "常用复数 the suburbs；suburban 是形容词。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "a leafy suburb",
      "in the suburbs"
    ]
  },
  {
    "id": "emission",
    "word": "emission",
    "phonetic": "/ɪˈmɪʃn/",
    "pos": "n.",
    "meaning": "排放；排放物",
    "example": "The new rules aim to cut carbon emissions.",
    "translation": "新规旨在减少碳排放。",
    "note": "常用复数 emissions 指排放的气体。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "carbon emissions",
      "reduce emissions"
    ]
  },
  {
    "id": "hygiene",
    "word": "hygiene",
    "phonetic": "/ˈhaɪdʒiːn/",
    "pos": "n.",
    "meaning": "卫生；卫生习惯",
    "example": "Hand hygiene reduces the spread of infection.",
    "translation": "手部卫生可以减少感染传播。",
    "note": "hygiene 是不可数名词；personal hygiene 是“个人卫生”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "personal hygiene",
      "hand hygiene"
    ]
  },
  {
    "id": "startup",
    "word": "startup",
    "phonetic": "/ˈstɑːtʌp/",
    "pos": "n.",
    "meaning": "初创公司；启动",
    "example": "She left her job to join a startup.",
    "translation": "她辞职加入了一家初创公司。",
    "note": "也写作 start-up。a tech startup 是科技创业公司。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "a tech startup",
      "launch a startup"
    ]
  },
  {
    "id": "affordable",
    "word": "affordable",
    "phonetic": "/əˈfɔːdəbl/",
    "pos": "adj.",
    "meaning": "负担得起的；价格合理的",
    "example": "The city needs more affordable housing.",
    "translation": "这座城市需要更多可负担住房。",
    "note": "afford（负担得起）+ able。比 cheap 更中性、体面。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "affordable housing",
      "affordable price"
    ]
  },
  {
    "id": "departure",
    "word": "departure",
    "phonetic": "/dɪˈpɑːtʃə(r)/",
    "pos": "n.",
    "meaning": "出发；离开",
    "example": "Please arrive at the gate an hour before departure.",
    "translation": "请在起飞前一小时到达登机口。",
    "note": "depart（离开）+ ure。机场的“出发”和感情的“离去”都用它。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "departure time",
      "departure lounge"
    ]
  },
  {
    "id": "leftover",
    "word": "leftover",
    "phonetic": "/ˈleftəʊvə(r)/",
    "pos": "n. / adj.",
    "meaning": "剩菜；剩余的",
    "example": "We turned the leftovers into a simple soup.",
    "translation": "我们把剩菜做成了一锅简单的汤。",
    "note": "常用复数 leftovers 指吃剩的饭菜。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "leftover food",
      "use up the leftovers"
    ]
  },
  {
    "id": "pragmatic",
    "word": "pragmatic",
    "phonetic": "/præɡˈmætɪk/",
    "pos": "adj.",
    "meaning": "务实的；讲求实际的",
    "example": "We need a pragmatic approach to the problem.",
    "translation": "我们需要用务实的方法来解决问题。",
    "note": "pragmatic 的人先问“有没有用”，再谈“好不好看”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "a pragmatic approach",
      "pragmatic solution"
    ]
  },
  {
    "id": "broadcast",
    "word": "broadcast",
    "phonetic": "/ˈbrɔːdkɑːst/",
    "pos": "v. / n.",
    "meaning": "播出；广播节目",
    "example": "The match will be broadcast live on Saturday.",
    "translation": "比赛将在周六现场直播。",
    "note": "broadcast 的过去式和过去分词通常仍是 broadcast。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "broadcast live",
      "a live broadcast"
    ]
  },
  {
    "id": "gratitude",
    "word": "gratitude",
    "phonetic": "/ˈɡrætɪtjuːd/",
    "pos": "n.",
    "meaning": "感激；感恩",
    "example": "She expressed gratitude for their support.",
    "translation": "她对他们的支持表示感谢。",
    "note": "常见搭配：express / show gratitude for sth.。",
    "category": "生活表达",
    "level": "考研",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "express gratitude",
      "deep gratitude"
    ]
  },
  {
    "id": "assignment",
    "word": "assignment",
    "phonetic": "/əˈsaɪnmənt/",
    "pos": "n.",
    "meaning": "作业；任务",
    "example": "The assignment is due next Monday.",
    "translation": "作业下周一截止。",
    "note": "hand in an assignment 是“交作业”；assign 是布置任务。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "hand in an assignment",
      "a written assignment"
    ]
  },
  {
    "id": "argument",
    "word": "argument",
    "phonetic": "/ˈɑːɡjumənt/",
    "pos": "n.",
    "meaning": "争论；论点",
    "example": "They had an argument about money.",
    "translation": "他们因为钱吵了一架。",
    "note": "既可指争吵，也可指支持观点的论证。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "have an argument",
      "a strong argument"
    ]
  },
  {
    "id": "mortgage",
    "word": "mortgage",
    "phonetic": "/ˈmɔːɡɪdʒ/",
    "pos": "n.",
    "meaning": "抵押贷款；按揭",
    "example": "They took out a 25-year mortgage.",
    "translation": "他们办了一笔二十五年的按揭贷款。",
    "note": "take out a mortgage 是“办理按揭”；pay off a mortgage 是“还清”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "take out a mortgage",
      "monthly mortgage payments"
    ]
  },
  {
    "id": "biodiversity",
    "word": "biodiversity",
    "phonetic": "/ˌbaɪəʊdaɪˈvɜːsəti/",
    "pos": "n.",
    "meaning": "生物多样性",
    "example": "The forest is home to remarkable biodiversity.",
    "translation": "这片森林拥有惊人的生物多样性。",
    "note": "bio（生命）+ diversity（多样性）。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "loss of biodiversity",
      "preserve biodiversity"
    ]
  },
  {
    "id": "posture",
    "word": "posture",
    "phonetic": "/ˈpɒstʃə(r)/",
    "pos": "n.",
    "meaning": "姿势；态度",
    "example": "Sitting with poor posture can cause back pain.",
    "translation": "坐姿不良会导致背痛。",
    "note": "posture 可指身体姿势，也可指机构或个人的“姿态”。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "good posture",
      "poor posture"
    ]
  },
  {
    "id": "device",
    "word": "device",
    "phonetic": "/dɪˈvaɪs/",
    "pos": "n.",
    "meaning": "设备；装置",
    "example": "The device can track your sleep.",
    "translation": "这个设备可以追踪你的睡眠。",
    "note": "device 是可执行特定功能的人造装置；不要与 devise（设计）混淆。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "a mobile device",
      "digital devices"
    ]
  },
  {
    "id": "expense",
    "word": "expense",
    "phonetic": "/ɪkˈspens/",
    "pos": "n.",
    "meaning": "费用；开销",
    "example": "Travel is the biggest expense of the trip.",
    "translation": "交通是这趟旅行最大的开销。",
    "note": "at the expense of 表示“以……为代价”。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "living expenses",
      "at the expense of"
    ]
  },
  {
    "id": "accommodation",
    "word": "accommodation",
    "phonetic": "/əˌkɒməˈdeɪʃn/",
    "pos": "n.",
    "meaning": "住宿；住处",
    "example": "The price includes flights and three nights' accommodation.",
    "translation": "价格包含机票和三晚住宿。",
    "note": "两个 c、两个 m。英式英语中常用作不可数名词。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "book accommodation",
      "affordable accommodation"
    ]
  },
  {
    "id": "beverage",
    "word": "beverage",
    "phonetic": "/ˈbevərɪdʒ/",
    "pos": "n.",
    "meaning": "饮料",
    "example": "Tea is the most popular beverage in the office.",
    "translation": "茶是办公室里最受欢迎的饮料。",
    "note": "比 drink 更正式，常见于菜单、包装和商业文本。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "a hot beverage",
      "alcoholic beverages"
    ]
  },
  {
    "id": "agenda",
    "word": "agenda",
    "phonetic": "/əˈdʒendə/",
    "pos": "n.",
    "meaning": "议程；待办事项",
    "example": "Cost control is at the top of the agenda.",
    "translation": "成本控制是议程上的首要事项。",
    "note": "原为拉丁语复数，现代英语中常作单数名词使用。",
    "category": "商务职场",
    "level": "CET-6",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "on the agenda",
      "set the agenda"
    ]
  },
  {
    "id": "headline",
    "word": "headline",
    "phonetic": "/ˈhedlaɪn/",
    "pos": "n.",
    "meaning": "标题；头条新闻",
    "example": "The story made headlines around the world.",
    "translation": "这则新闻成了世界各地的头条。",
    "note": "make headlines 表示“成为头条”，比“写标题”更常用。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "make headlines",
      "front-page headline"
    ]
  },
  {
    "id": "contemplate",
    "word": "contemplate",
    "phonetic": "/ˈkɒntəmpleɪt/",
    "pos": "v.",
    "meaning": "沉思；仔细考虑",
    "example": "He contemplated the offer for several days.",
    "translation": "他仔细考虑了那个提议好几天。",
    "note": "比 think about 更慢、更深，适合“认真斟酌”的语境。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "contemplate a change",
      "contemplate doing sth."
    ]
  },
  {
    "id": "assessment",
    "word": "assessment",
    "phonetic": "/əˈsesmənt/",
    "pos": "n.",
    "meaning": "评估；考核",
    "example": "The course uses continuous assessment instead of one final exam.",
    "translation": "这门课采用持续评估，而不是一次期末考试。",
    "note": "assess 是评估动作；assessment 是评估过程或结果。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "continuous assessment",
      "a risk assessment"
    ]
  },
  {
    "id": "sincere",
    "word": "sincere",
    "phonetic": "/sɪnˈsɪə(r)/",
    "pos": "adj.",
    "meaning": "真诚的；诚挚的",
    "example": "Please accept my sincere apology.",
    "translation": "请接受我诚挚的道歉。",
    "note": "sincere 强调没有虚情假意；名词是 sincerity。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "sincere apology",
      "a sincere effort"
    ]
  },
  {
    "id": "spacious",
    "word": "spacious",
    "phonetic": "/ˈspeɪʃəs/",
    "pos": "adj.",
    "meaning": "宽敞的",
    "example": "The new apartment is bright and spacious.",
    "translation": "新公寓明亮又宽敞。",
    "note": "space + ious。形容空间大，居住舒服。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "a spacious room",
      "spacious living area"
    ]
  },
  {
    "id": "flood",
    "word": "flood",
    "phonetic": "/flʌd/",
    "pos": "n. / v.",
    "meaning": "洪水；淹没",
    "example": "Heavy rain caused floods across the region.",
    "translation": "暴雨在该地区引发了洪水。",
    "note": "flood 可作名词“洪水”，也可作动词“淹没、涌入”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "flash flood",
      "flood the streets"
    ]
  },
  {
    "id": "nutrition",
    "word": "nutrition",
    "phonetic": "/njuˈtrɪʃn/",
    "pos": "n.",
    "meaning": "营养；营养学",
    "example": "Good nutrition is the basis of recovery.",
    "translation": "良好的营养是康复的基础。",
    "note": "nutrition 是营养的获取与利用；nutritious 是“有营养的”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "good nutrition",
      "nutrition advice"
    ]
  },
  {
    "id": "upgrade",
    "word": "upgrade",
    "phonetic": "/ˌʌpˈɡreɪd/",
    "pos": "v.",
    "meaning": "升级；提升",
    "example": "We upgraded the system last week.",
    "translation": "我们上周升级了系统。",
    "note": "作动词重音在后，作名词重音在前：an upgrade。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "upgrade the software",
      "a free upgrade"
    ]
  },
  {
    "id": "refund",
    "word": "refund",
    "phonetic": "/ˈriːfʌnd/",
    "pos": "n.",
    "meaning": "退款；退还",
    "example": "I asked for a refund because the shoes were damaged.",
    "translation": "鞋子有破损，我要求退款。",
    "note": "作名词重音在前；作动词重音在后：to refund。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "a full refund",
      "ask for a refund"
    ]
  },
  {
    "id": "destination",
    "word": "destination",
    "phonetic": "/ˌdestɪˈneɪʃn/",
    "pos": "n.",
    "meaning": "目的地；终点",
    "example": "After a long train ride, we finally reached our destination.",
    "translation": "坐了很久的火车，我们终于抵达目的地。",
    "note": "来自 destine（注定前往）。旅程的终点，也可以是努力的方向。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "final destination",
      "reach a destination"
    ]
  },
  {
    "id": "perishable",
    "word": "perishable",
    "phonetic": "/ˈperɪʃəbl/",
    "pos": "adj.",
    "meaning": "易腐烂的；易变质的",
    "example": "Perishable food must be kept in a cold place.",
    "translation": "易腐食物必须冷藏。",
    "note": "perish 是死亡、毁灭；perishable 食物放不久。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "perishable goods",
      "highly perishable"
    ]
  },
  {
    "id": "autonomy",
    "word": "autonomy",
    "phonetic": "/ɔːˈtɒnəmi/",
    "pos": "n.",
    "meaning": "自主权；自治",
    "example": "The team has considerable autonomy over its schedule.",
    "translation": "团队在日程安排上有相当大的自主权。",
    "note": "auto-（自己）+ nom（规则）→ 自己给自己定规则。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "greater autonomy",
      "professional autonomy"
    ]
  },
  {
    "id": "editorial",
    "word": "editorial",
    "phonetic": "/ˌedɪˈtɔːriəl/",
    "pos": "n. / adj.",
    "meaning": "社论；编辑的",
    "example": "The newspaper published a strong editorial on climate policy.",
    "translation": "这家报纸发表了一篇关于气候政策的强硬社论。",
    "note": "社论代表编辑部立场，通常不署名。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "a newspaper editorial",
      "the editorial board"
    ]
  },
  {
    "id": "frustrated",
    "word": "frustrated",
    "phonetic": "/frʌˈstreɪtɪd/",
    "pos": "adj.",
    "meaning": "沮丧的；受挫的",
    "example": "I get frustrated when the internet keeps dropping.",
    "translation": "网络总是掉线时，我会很烦躁。",
    "note": "frustrated 常指“努力被挡住”的无力感。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "frustrated with",
      "deeply frustrated"
    ]
  },
  {
    "id": "nurture",
    "word": "nurture",
    "phonetic": "/ˈnɜːtʃə(r)/",
    "pos": "v.",
    "meaning": "培养；养育",
    "example": "Good teachers nurture curiosity.",
    "translation": "好老师会培养好奇心。",
    "note": "常见搭配：nurture talent / curiosity / growth。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "nurture talent",
      "nurture curiosity"
    ]
  },
  {
    "id": "companionship",
    "word": "companionship",
    "phonetic": "/kəmˈpæniənʃɪp/",
    "pos": "n.",
    "meaning": "陪伴；友谊",
    "example": "Pets offer companionship and comfort.",
    "translation": "宠物带来陪伴和安慰。",
    "note": "companion 是同伴；companionship 是陪伴的状态。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "offer companionship",
      "the companionship of friends"
    ]
  },
  {
    "id": "lease",
    "word": "lease",
    "phonetic": "/liːs/",
    "pos": "n. / v.",
    "meaning": "租约；租赁",
    "example": "We signed a two-year lease on the office.",
    "translation": "我们签了办公室的两年租约。",
    "note": "lease 强调正式合同；rent 更日常。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "sign a lease",
      "a short-term lease"
    ],
    "confusables": "lease（租约）≠ rent（租金）"
  },
  {
    "id": "pollution",
    "word": "pollution",
    "phonetic": "/pəˈluːʃn/",
    "pos": "n.",
    "meaning": "污染",
    "example": "Air pollution is a serious health risk.",
    "translation": "空气污染是严重的健康风险。",
    "note": "pollute 是动词；pollution 是不可数名词。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "air pollution",
      "reduce pollution"
    ]
  },
  {
    "id": "vaccine",
    "word": "vaccine",
    "phonetic": "/ˈvæksiːn/",
    "pos": "n.",
    "meaning": "疫苗",
    "example": "The vaccine is offered free to older people.",
    "translation": "老年人可以免费接种这种疫苗。",
    "note": "vaccine 是疫苗；vaccination 是接种行为。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "a flu vaccine",
      "develop a vaccine"
    ]
  },
  {
    "id": "innovation",
    "word": "innovation",
    "phonetic": "/ˌɪnəˈveɪʃn/",
    "pos": "n.",
    "meaning": "创新；新事物",
    "example": "The company is known for its rapid innovation.",
    "translation": "这家公司以快速创新闻名。",
    "note": "innovation 既可指创新过程，也可指一项新发明。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "technological innovation",
      "drive innovation"
    ]
  },
  {
    "id": "delivery",
    "word": "delivery",
    "phonetic": "/dɪˈlɪvəri/",
    "pos": "n.",
    "meaning": "配送；交付；分娩",
    "example": "The store offers free delivery over 50 dollars.",
    "translation": "这家店满五十美元免配送费。",
    "note": "deliver 是动词；delivery 可指送货，也可指分娩或演讲方式。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "free delivery",
      "delivery time"
    ]
  },
  {
    "id": "sightseeing",
    "word": "sightseeing",
    "phonetic": "/ˈsaɪtsiːɪŋ/",
    "pos": "n.",
    "meaning": "观光；游览",
    "example": "Sightseeing was the best part of the trip.",
    "translation": "观光成了这趟旅行最精彩的部分。",
    "note": "go sightseeing 是固定说法，注意不是 go to sightseeing。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "go sightseeing",
      "a sightseeing tour"
    ]
  },
  {
    "id": "crispy",
    "word": "crispy",
    "phonetic": "/ˈkrɪspi/",
    "pos": "adj.",
    "meaning": "酥脆的",
    "example": "The chicken is crispy on the outside and tender inside.",
    "translation": "这鸡肉外酥里嫩。",
    "note": "crispy 强调咬下去会碎；crisp 也可形容清脆爽口。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "crispy skin",
      "crispy fried chicken"
    ]
  },
  {
    "id": "supervise",
    "word": "supervise",
    "phonetic": "/ˈsuːpəvaɪz/",
    "pos": "v.",
    "meaning": "监督；管理；指导",
    "example": "She supervises a team of eight designers.",
    "translation": "她管理着一个八人的设计师团队。",
    "note": "super-（在上）+ vis（看）→ 在上面看着，即监督。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "supervise staff",
      "closely supervised"
    ]
  },
  {
    "id": "inevitable",
    "word": "inevitable",
    "phonetic": "/ɪnˈevɪtəbl/",
    "pos": "adj.",
    "meaning": "不可避免的；必然会发生的",
    "example": "Change is inevitable; growth is optional.",
    "translation": "变化不可避免，成长却是一种选择。",
    "note": "in-（不）+ evitable（可避免的）→ 不可避免。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "an inevitable consequence",
      "seem inevitable"
    ]
  },
  {
    "id": "irritable",
    "word": "irritable",
    "phonetic": "/ˈɪrɪtəbl/",
    "pos": "adj.",
    "meaning": "易怒的；烦躁的",
    "example": "He becomes irritable when he skips lunch.",
    "translation": "他不吃午饭就会变得烦躁。",
    "note": "irritate 是“使恼怒”；irritable 是“容易被惹恼的”。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "irritable mood",
      "feel irritable"
    ]
  },
  {
    "id": "enroll",
    "word": "enroll",
    "phonetic": "/ɪnˈrəʊl/",
    "pos": "v.",
    "meaning": "注册；报名；招收",
    "example": "More than 300 students enrolled in the course.",
    "translation": "超过三百名学生选修了这门课。",
    "note": "美式拼写 enroll，英式 enrol；常接 in。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "enroll in a course",
      "enroll at a university"
    ]
  },
  {
    "id": "acquaintance",
    "word": "acquaintance",
    "phonetic": "/əˈkweɪntəns/",
    "pos": "n.",
    "meaning": "熟人；泛泛之交",
    "example": "He is an old acquaintance from university.",
    "translation": "他是大学时认识的一位老熟人。",
    "note": "acquaintance 比 friend 疏远，只是“认识的人”。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "a casual acquaintance",
      "make sb's acquaintance"
    ],
    "confusables": "acquaintance（熟人）≠ friend（朋友）"
  },
  {
    "id": "decorate",
    "word": "decorate",
    "phonetic": "/ˈdekəreɪt/",
    "pos": "v.",
    "meaning": "装饰；装修",
    "example": "We decorated the room with old posters.",
    "translation": "我们用旧海报装饰房间。",
    "note": "decorate 可指挂装饰，也可指粉刷装修。",
    "category": "生活表达",
    "level": "CET-4",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "decorate with",
      "decorate a room"
    ]
  },
  {
    "id": "habitat",
    "word": "habitat",
    "phonetic": "/ˈhæbɪtæt/",
    "pos": "n.",
    "meaning": "栖息地；生境",
    "example": "Deforestation destroys the habitat of many species.",
    "translation": "森林砍伐破坏了许多物种的栖息地。",
    "note": "habitat 是动植物自然生活的地方。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "natural habitat",
      "habitat loss"
    ]
  },
  {
    "id": "infection",
    "word": "infection",
    "phonetic": "/ɪnˈfekʃn/",
    "pos": "n.",
    "meaning": "感染；传染病",
    "example": "The infection spread quickly through the wound.",
    "translation": "感染迅速在伤口蔓延。",
    "note": "infect 是动词；infection 是感染状态。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "a viral infection",
      "risk of infection"
    ]
  },
  {
    "id": "virtual",
    "word": "virtual",
    "phonetic": "/ˈvɜːtʃuəl/",
    "pos": "adj.",
    "meaning": "虚拟的；实际上的",
    "example": "The team meets in a virtual office.",
    "translation": "团队在一个虚拟办公室里开会。",
    "note": "virtual 可指“计算机模拟的”，也可指“实际上起作用的”。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "virtual reality",
      "a virtual meeting"
    ]
  },
  {
    "id": "retail",
    "word": "retail",
    "phonetic": "/ˈriːteɪl/",
    "pos": "n.",
    "meaning": "零售；零售业",
    "example": "She has worked in retail for ten years.",
    "translation": "她在零售业工作了十年。",
    "note": "retail 是卖给最终消费者；wholesale 是批发。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "the retail sector",
      "retail prices"
    ],
    "confusables": "retail（零售）≠ wholesale（批发）"
  },
  {
    "id": "landmark",
    "word": "landmark",
    "phonetic": "/ˈlændmɑːk/",
    "pos": "n.",
    "meaning": "地标；里程碑",
    "example": "The tower is the city's most famous landmark.",
    "translation": "这座塔是这座城市最著名的地标。",
    "note": "land（土地）+ mark（标记）→ 大地上醒目的标记。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "a famous landmark",
      "a landmark decision"
    ]
  },
  {
    "id": "craving",
    "word": "craving",
    "phonetic": "/ˈkreɪvɪŋ/",
    "pos": "n.",
    "meaning": "强烈的渴望；馋",
    "example": "She had a sudden craving for chocolate.",
    "translation": "她突然特别想吃巧克力。",
    "note": "crave 是动词；craving 是那种“忍不住想吃/想要”的感觉。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "a craving for sugar",
      "satisfy a craving"
    ]
  },
  {
    "id": "mediate",
    "word": "mediate",
    "phonetic": "/ˈmiːdieɪt/",
    "pos": "v.",
    "meaning": "调解；斡旋",
    "example": "A senior manager was asked to mediate the dispute.",
    "translation": "一位高级经理被请来调解这场争端。",
    "note": "mediate between A and B，站在中间帮双方找到解法。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "mediate a dispute",
      "mediate between two sides"
    ]
  },
  {
    "id": "narrative",
    "word": "narrative",
    "phonetic": "/ˈnærətɪv/",
    "pos": "n.",
    "meaning": "叙事；说法；故事",
    "example": "The documentary challenges the official narrative.",
    "translation": "这部纪录片挑战了官方说法。",
    "note": "narrative 不只是“故事”，也指一套被反复讲述的解释框架。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "control the narrative",
      "a personal narrative"
    ]
  },
  {
    "id": "anxious",
    "word": "anxious",
    "phonetic": "/ˈæŋkʃəs/",
    "pos": "adj.",
    "meaning": "焦虑的；担心的",
    "example": "She felt anxious before the interview.",
    "translation": "面试前她感到焦虑。",
    "note": "be anxious about sth. 是“担心”；be anxious to do 是“渴望做”。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "anxious about",
      "feel anxious"
    ]
  },
  {
    "id": "facilitate",
    "word": "facilitate",
    "phonetic": "/fəˈsɪlɪteɪt/",
    "pos": "v.",
    "meaning": "促进；使便利",
    "example": "The app is designed to facilitate language learning.",
    "translation": "这款应用旨在让语言学习更便利。",
    "note": "facile 表示“容易的”，facilitate 就是“让事情变容易”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "facilitate learning",
      "facilitate communication"
    ]
  },
  {
    "id": "reunion",
    "word": "reunion",
    "phonetic": "/ˌriːˈjuːniən/",
    "pos": "n.",
    "meaning": "团聚；重逢",
    "example": "The whole family gathered for a reunion.",
    "translation": "全家人聚在一起团圆。",
    "note": "re-（再次）+ union（结合）→ 再次相聚。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "a family reunion",
      "a class reunion"
    ]
  },
  {
    "id": "rent",
    "word": "rent",
    "phonetic": "/rent/",
    "pos": "n. / v.",
    "meaning": "租金；租用",
    "example": "They rent a small flat near the station.",
    "translation": "他们在车站附近租了一间小公寓。",
    "note": "rent 可指“租金”，也可指“租用”；for rent 是“出租”。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "pay rent",
      "rent a flat"
    ]
  },
  {
    "id": "wilderness",
    "word": "wilderness",
    "phonetic": "/ˈwɪldənəs/",
    "pos": "n.",
    "meaning": "荒野；无人区",
    "example": "They spent a week hiking in the wilderness.",
    "translation": "他们在荒野中徒步了一周。",
    "note": "wilderness 强调未开发、无人居住的自然区域。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "a remote wilderness",
      "wilderness area"
    ]
  },
  {
    "id": "wellness",
    "word": "wellness",
    "phonetic": "/ˈwelnəs/",
    "pos": "n.",
    "meaning": "健康；保健",
    "example": "The company runs a wellness program for staff.",
    "translation": "公司为员工提供健康计划。",
    "note": "wellness 强调主动维护身心状态，不只是“没病”。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "health and wellness",
      "a wellness program"
    ]
  },
  {
    "id": "wireless",
    "word": "wireless",
    "phonetic": "/ˈwaɪələs/",
    "pos": "adj.",
    "meaning": "无线的",
    "example": "The hotel has fast wireless internet.",
    "translation": "酒店有高速无线网络。",
    "note": "wire（电线）+ less（没有）→ 无线的。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "wireless network",
      "wireless charging"
    ]
  },
  {
    "id": "transaction",
    "word": "transaction",
    "phonetic": "/trænˈzækʃn/",
    "pos": "n.",
    "meaning": "交易；业务办理",
    "example": "Each transaction is recorded in the app.",
    "translation": "每一笔交易都会记录在应用里。",
    "note": "transaction 比 deal 正式，常用于银行、支付与商业记录。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "an online transaction",
      "complete a transaction"
    ]
  },
  {
    "id": "excursion",
    "word": "excursion",
    "phonetic": "/ɪkˈskɜːʃn/",
    "pos": "n.",
    "meaning": "短途旅行；远足",
    "example": "The hotel offers a day excursion to the nearby islands.",
    "translation": "酒店提供前往附近岛屿的一日游。",
    "note": "通常指有组织的短途出行，比 journey 更轻量。",
    "category": "核心高频",
    "level": "CET-6",
    "theme": "旅行出行",
    "themeId": "travel",
    "collocations": [
      "a day excursion",
      "go on an excursion"
    ]
  },
  {
    "id": "consume",
    "word": "consume",
    "phonetic": "/kənˈsjuːm/",
    "pos": "v.",
    "meaning": "消耗；食用；饮用",
    "example": "The average household consumes less water than before.",
    "translation": "普通家庭现在用水量比以前少。",
    "note": "既可以“消耗资源”，也可以正式地表示“吃、喝”。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "饮食日常",
    "themeId": "food",
    "collocations": [
      "consume energy",
      "consume less water"
    ]
  },
  {
    "id": "correspondence",
    "word": "correspondence",
    "phonetic": "/ˌkɒrəˈspɒndəns/",
    "pos": "n.",
    "meaning": "通信；往来信件",
    "example": "Please keep all correspondence with the client.",
    "translation": "请保留与客户的所有往来信件。",
    "note": "correspond 既表示“通信”，也表示“相对应”，注意语境。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "职场沟通",
    "themeId": "work",
    "collocations": [
      "business correspondence",
      "keep correspondence"
    ]
  },
  {
    "id": "audience",
    "word": "audience",
    "phonetic": "/ˈɔːdiəns/",
    "pos": "n.",
    "meaning": "受众；观众；读者",
    "example": "The podcast has a young, loyal audience.",
    "translation": "这档播客有一群年轻而忠实的听众。",
    "note": "audience 不只指现场观众，也包括内容的目标读者与用户。",
    "category": "核心高频",
    "level": "CET-4",
    "theme": "媒体观点",
    "themeId": "media",
    "collocations": [
      "target audience",
      "a wide audience"
    ]
  },
  {
    "id": "envious",
    "word": "envious",
    "phonetic": "/ˈenviəs/",
    "pos": "adj.",
    "meaning": "羡慕的；嫉妒的",
    "example": "She was envious of his freedom.",
    "translation": "她羡慕他的自由。",
    "note": "envious of sth. 是“羡慕”；jealous 更常指“怕失去”的嫉妒。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "情绪心理",
    "themeId": "emotions",
    "collocations": [
      "envious of",
      "a little envious"
    ],
    "confusables": "envious（羡慕）≠ jealous（嫉妒）"
  },
  {
    "id": "comprehend",
    "word": "comprehend",
    "phonetic": "/ˌkɒmprɪˈhend/",
    "pos": "v.",
    "meaning": "理解；领会",
    "example": "It is hard to comprehend the scale of the loss.",
    "translation": "很难理解这场损失有多大。",
    "note": "comprehend 比 understand 正式，常见于阅读与学术语境。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "教育学习",
    "themeId": "education",
    "collocations": [
      "fully comprehend",
      "hard to comprehend"
    ]
  },
  {
    "id": "empathy",
    "word": "empathy",
    "phonetic": "/ˈempəθi/",
    "pos": "n.",
    "meaning": "共情；同理心",
    "example": "Good doctors combine skill with empathy.",
    "translation": "好医生既有技术，也有同理心。",
    "note": "empathy 是理解对方的感受；sympathy 更多是同情、惋惜。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "社交关系",
    "themeId": "social",
    "collocations": [
      "show empathy",
      "empathy for others"
    ]
  },
  {
    "id": "renovate",
    "word": "renovate",
    "phonetic": "/ˈrenəveɪt/",
    "pos": "v.",
    "meaning": "翻新；修复",
    "example": "They plan to renovate the kitchen this spring.",
    "translation": "他们计划今年春天翻新厨房。",
    "note": "renovate 是让旧空间恢复新状态，比 decorate 工程更大。",
    "category": "生活表达",
    "level": "IELTS",
    "theme": "居家生活",
    "themeId": "home",
    "collocations": [
      "renovate a house",
      "fully renovated"
    ]
  },
  {
    "id": "ecosystem",
    "word": "ecosystem",
    "phonetic": "/ˈiːkəʊsɪstəm/",
    "pos": "n.",
    "meaning": "生态系统",
    "example": "Coral reefs support a rich ecosystem.",
    "translation": "珊瑚礁支撑着丰富的生态系统。",
    "note": "eco-（生态）+ system（系统）→ 生物与环境构成的整体。",
    "category": "学术进阶",
    "level": "IELTS",
    "theme": "环境自然",
    "themeId": "environment",
    "collocations": [
      "a fragile ecosystem",
      "marine ecosystem"
    ]
  },
  {
    "id": "deteriorate",
    "word": "deteriorate",
    "phonetic": "/dɪˈtɪəriəreɪt/",
    "pos": "v.",
    "meaning": "恶化；变坏",
    "example": "Her health deteriorated rapidly.",
    "translation": "她的健康状况迅速恶化。",
    "note": "常与 health / condition / situation 搭配，表示逐渐变坏。",
    "category": "商务职场",
    "level": "IELTS",
    "theme": "健康医疗",
    "themeId": "health",
    "collocations": [
      "health deteriorates",
      "conditions deteriorate"
    ]
  },
  {
    "id": "gadget",
    "word": "gadget",
    "phonetic": "/ˈɡædʒɪt/",
    "pos": "n.",
    "meaning": "小装置；小玩意",
    "example": "He loves buying clever little gadgets.",
    "translation": "他喜欢买各种精巧的小玩意儿。",
    "note": "gadget 通常指小巧、实用或有趣的新奇设备。",
    "category": "生活表达",
    "level": "CET-6",
    "theme": "科技网络",
    "themeId": "technology",
    "collocations": [
      "a kitchen gadget",
      "a clever gadget"
    ]
  },
  {
    "id": "purchase",
    "word": "purchase",
    "phonetic": "/ˈpɜːtʃəs/",
    "pos": "v. / n.",
    "meaning": "购买；采购",
    "example": "You can purchase the ticket online.",
    "translation": "你可以在线购买这张票。",
    "note": "比 buy 正式；make a purchase 是“购买”的名词搭配。",
    "category": "商务职场",
    "level": "CET-4",
    "theme": "购物消费",
    "themeId": "shopping",
    "collocations": [
      "make a purchase",
      "purchase online"
    ]
  }
];

const QUESTIONS = [
  {
    "id": 1,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "jü / ju",
    "answer": "ju",
    "explanation": "성모 j, q, x와 ü가 결합할 때는 ü 위의 두 점을 빼고 ‘u’만 표기해요.",
    "difficulty": 1,
    "type": "pinyin"
  },
  {
    "id": 2,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "qüe / que",
    "answer": "que",
    "explanation": "성모 j, q, x와 ü가 결합할 때는 ü 위의 두 점을 빼고 ‘u’만 표기해요.",
    "difficulty": 1,
    "type": "pinyin"
  },
  {
    "id": 3,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "xuan / xüan",
    "answer": "xuan",
    "explanation": "성모 j, q, x와 ü가 결합할 때는 ü 위의 두 점을 빼고 ‘u’만 표기해요.",
    "difficulty": 1,
    "type": "pinyin"
  },
  {
    "id": 4,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "xuéxiào",
    "explanation": "学校 / 학교",
    "difficulty": 1,
    "type": "picture"
  },
  {
    "id": 5,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "lǎoshī",
    "explanation": "老师 / 선생님",
    "difficulty": 1,
    "type": "picture"
  },
  {
    "id": 6,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "xuéshēng",
    "explanation": "学生 / 학생",
    "difficulty": 1,
    "type": "picture"
  },
  {
    "id": 7,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "hánguó",
    "explanation": "韩国 / 한국",
    "difficulty": 1,
    "type": "picture"
  },
  {
    "id": 8,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "zhōngguó",
    "explanation": "中国 / 중국",
    "difficulty": 1,
    "type": "picture"
  },
  {
    "id": 9,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "bàba",
    "explanation": "爸爸 / 아버지",
    "difficulty": 1,
    "type": "picture"
  },
  {
    "id": 10,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "māma",
    "explanation": "妈妈 / 어머니",
    "difficulty": 1,
    "type": "picture"
  },
  {
    "id": 11,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "여동생",
    "answer": "mèimei",
    "explanation": "妹妹",
    "difficulty": 1,
    "type": "word"
  },
  {
    "id": 12,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "남동생",
    "answer": "dìdi",
    "explanation": "弟弟",
    "difficulty": 1,
    "type": "word"
  },
  {
    "id": 13,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "오빠, 형",
    "answer": "gēge",
    "explanation": "哥哥",
    "difficulty": 1,
    "type": "word"
  },
  {
    "id": 14,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "언니, 누나",
    "answer": "jiějie",
    "explanation": "姐姐",
    "difficulty": 1,
    "type": "word"
  },
  {
    "id": 15,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "나",
    "answer": "wǒ",
    "explanation": "我",
    "difficulty": 1,
    "type": "word"
  },
  {
    "id": 16,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "고맙습니다.",
    "answer": "xièxie",
    "explanation": "谢谢",
    "difficulty": 1,
    "type": "word"
  },
  {
    "id": 17,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "미안합니다.",
    "answer": "duìbuqǐ",
    "explanation": "对不起",
    "difficulty": 1,
    "type": "word"
  },
  {
    "id": 18,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "你O, 老师O, 早上O ",
    "answer": "hǎo",
    "explanation": "好 / 좋다, 안녕하다",
    "difficulty": 1,
    "type": "blank",
    "translation": "안녕하세요 / 선생님, 안녕하세요 / 좋은 아침이에요"
  },
  {
    "id": 19,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "再O, 明天O, 下午O",
    "answer": "jiàn",
    "explanation": "见 / 만나다, 보다",
    "difficulty": 1,
    "type": "blank",
    "translation": "또 만나요(안녕히 가세요) / 내일 봐요 / 오후에 봐요",
    "note": "再见은 기본 어휘"
  },
  {
    "id": 20,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "现在O点？，你今年O岁？, 他上O年级？",
    "answer": "jǐ",
    "explanation": "几 / 몇",
    "difficulty": 1,
    "type": "blank",
    "translation": "지금 몇 시예요? / 너는 올해 몇 살이야? / 그는 몇 학년이야?"
  },
  {
    "id": 21,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "有(있다)의 부정형 OO이다.",
    "answer": "méiyǒu",
    "explanation": "没有 / 없다",
    "difficulty": 1,
    "type": "blank"
  },
  {
    "id": 22,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "你(너)의 존칭은 O이다.",
    "answer": "nín",
    "explanation": "您 / 당신",
    "difficulty": 1,
    "type": "blank"
  },
  {
    "id": 23,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "중국어에서 사람, 사물을 세는 단위는 O이다.",
    "answer": "ge / gè",
    "explanation": "个 / 명, 개[사람, 사물을 세는 단위]",
    "difficulty": 1,
    "type": "blank"
  },
  {
    "id": 24,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "nou / niou / niu",
    "answer": "niu",
    "explanation": "성모와 iou, uei, uen이 결합하면 가운데 모음은 생략하여 표기해요.",
    "difficulty": 2,
    "type": "pinyin"
  },
  {
    "id": 25,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "tei / tue / tui",
    "answer": "tui",
    "explanation": "성모와 iou, uei, uen이 결합하면 가운데 모음은 생략하여 표기해요.",
    "difficulty": 2,
    "type": "pinyin"
  },
  {
    "id": 26,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "zhui / zhei / zhuei",
    "answer": "zhui",
    "explanation": "성모와 iou, uei, uen이 결합하면 가운데 모음은 생략하여 표기해요.",
    "difficulty": 2,
    "type": "pinyin"
  },
  {
    "id": 27,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "shuen / shwen / shun",
    "answer": "shun",
    "explanation": "성모와 iou, uei, uen이 결합하면 가운데 모음은 생략하여 표기해요.",
    "difficulty": 2,
    "type": "pinyin"
  },
  {
    "id": 28,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "yīshēng",
    "explanation": "医生 / 의사",
    "difficulty": 2,
    "type": "picture"
  },
  {
    "id": 29,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "fēijī",
    "explanation": "飞机 / 비행기",
    "difficulty": 2,
    "type": "picture"
  },
  {
    "id": 30,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "dìtiě",
    "explanation": "地铁 / 지하철",
    "difficulty": 2,
    "type": "picture"
  },
  {
    "id": 31,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "shuìjiào",
    "explanation": "睡觉 / 잠을 자다",
    "difficulty": 2,
    "type": "picture"
  },
  {
    "id": 32,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "qǐchuáng",
    "explanation": "起床 / 기상하다",
    "difficulty": 2,
    "type": "picture"
  },
  {
    "id": 33,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "반(30분)",
    "answer": "bàn",
    "explanation": "半",
    "difficulty": 2,
    "type": "word"
  },
  {
    "id": 34,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "그저께 [今天，明天，前天，后天]",
    "answer": "qiántiān",
    "explanation": "前天",
    "difficulty": 2,
    "type": "word"
  },
  {
    "id": 35,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "모레 [今天，明天，昨天，后天]",
    "answer": "hòutiān",
    "explanation": "后天",
    "difficulty": 2,
    "type": "word"
  },
  {
    "id": 36,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "예쁘다",
    "answer": "piàoliang",
    "explanation": "漂亮",
    "difficulty": 2,
    "type": "word"
  },
  {
    "id": 37,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "귀엽다",
    "answer": "kě'ài",
    "explanation": "可爱",
    "difficulty": 2,
    "type": "word"
  },
  {
    "id": 38,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "有(있다)의 부정형은 OO이다. ",
    "answer": "méiyǒu",
    "explanation": "没有 / 없다",
    "difficulty": 2,
    "type": "blank"
  },
  {
    "id": 39,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "我OO唱歌。我OO糖葫芦。",
    "answer": "xǐhuan",
    "explanation": "喜欢 / 좋아하다",
    "difficulty": 2,
    "type": "blank",
    "translation": "나는 노래 부르는 것을 좋아해요. / 나는 탕후루를 좋아해요."
  },
  {
    "id": 40,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "你叫OO名字？这是OOO？ ",
    "answer": "shénme",
    "explanation": "什么 / 무엇, 무슨",
    "difficulty": 2,
    "type": "blank",
    "translation": "네 이름은 뭐야? / 이건 뭐야?"
  },
  {
    "id": 41,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "중국어에서 경험을 나타내는 단어는 O이다. [了，吗， 呢， 过]",
    "answer": "guo",
    "explanation": "过 / ~한 적 있다",
    "difficulty": 2,
    "type": "blank"
  },
  {
    "id": 42,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "我是韩国人，你O？ [呢，吧，吗，么]",
    "answer": "ne",
    "explanation": "呢 / ~은/는(요)?",
    "difficulty": 2,
    "type": "blank",
    "translation": "나는 한국인이에요, 당신은요?"
  },
  {
    "id": 43,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "we / üe / yue",
    "answer": "yue",
    "explanation": "운모 ü가 단독으로 쓰이거나 첫 글자로 쓰이면 yu로 표기해요.",
    "difficulty": 3,
    "type": "pinyin"
  },
  {
    "id": 44,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "wan / wian / yian",
    "answer": "wan",
    "explanation": "운모 i와 u가 첫 글자로 쓰이면, i는 y로, u는 w로 표기해요.",
    "difficulty": 3,
    "type": "pinyin"
  },
  {
    "id": 45,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "dò / dúo / duò",
    "answer": "duò",
    "explanation": "모음이 여러 개일 경우, 입을 크게 벌리는 주요 모음 위에 성조를 표기해요.",
    "difficulty": 3,
    "type": "pinyin"
  },
  {
    "id": 46,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "kúai / kuǎi / kuaǐ",
    "answer": "kuǎi",
    "explanation": "모음이 여러 개일 경우, 입을 크게 벌리는 주요 모음 위에 성조를 표기해요.",
    "difficulty": 3,
    "type": "pinyin"
  },
  {
    "id": 47,
    "instruction": "다음 중 올바른 한어병음 표기법은 무엇일까요?",
    "prompt": "sǐu / jiù / niǒu",
    "answer": "jiù",
    "explanation": "성모와 iou, uei, uen이 결합하면 가운데 모음은 생략하고, i와 u가 함께 쓰인 경우 뒤에 있는 모음에 성조를 표기해요.",
    "difficulty": 3,
    "type": "pinyin"
  },
  {
    "id": 48,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "lánqiú",
    "explanation": "篮球 / 농구",
    "difficulty": 3,
    "type": "picture"
  },
  {
    "id": 49,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "zúqiú",
    "explanation": "足球 / 축구",
    "difficulty": 3,
    "type": "picture"
  },
  {
    "id": 50,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "tàijíquán",
    "explanation": "太极拳 / 태극권",
    "difficulty": 3,
    "type": "picture"
  },
  {
    "id": 51,
    "instruction": "다음 그림에 해당하는 단어는 중국어로 무엇일까요?",
    "prompt": "그림",
    "answer": "yóuyǒng",
    "explanation": "游泳 / 수영(하다)",
    "difficulty": 3,
    "type": "picture"
  },
  {
    "id": 52,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "몸, 신체",
    "answer": "shēntǐ",
    "explanation": "身体",
    "difficulty": 3,
    "type": "word"
  },
  {
    "id": 53,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "머리가 아프다",
    "answer": "tóuténg",
    "explanation": "头疼",
    "difficulty": 3,
    "type": "word"
  },
  {
    "id": 54,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "감기(에 걸리다)",
    "answer": "gǎnmào",
    "explanation": "感冒",
    "difficulty": 3,
    "type": "word"
  },
  {
    "id": 55,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "기침",
    "answer": "késou",
    "explanation": "咳嗽",
    "difficulty": 3,
    "type": "word"
  },
  {
    "id": 56,
    "instruction": "다음 단어는 중국어로 무엇일까요?",
    "prompt": "열이 나다",
    "answer": "fāshāo",
    "explanation": "发烧",
    "difficulty": 3,
    "type": "word"
  },
  {
    "id": 57,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "OO你很高兴！",
    "answer": "rènshi",
    "explanation": "认识 / 알다",
    "difficulty": 3,
    "type": "blank",
    "translation": "만나서 반가워요!"
  },
  {
    "id": 58,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "味道OO样? 故宫OO走? ",
    "answer": "zěnme",
    "explanation": "怎么 / 어떻게",
    "difficulty": 3,
    "type": "blank",
    "translation": "맛이 어때요? / 고궁은 어떻게 가요?"
  },
  {
    "id": 59,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "这件旗袍OO钱？",
    "answer": "duōshao",
    "explanation": "多少 / 얼마, 몇",
    "difficulty": 3,
    "type": "blank",
    "translation": "이 치파오는 얼마예요?"
  },
  {
    "id": 60,
    "instruction": "빈칸에 들어갈 중국어는 무엇일까요?",
    "prompt": "중국에서는 '对不起' 대신 OOOO도 자주 사용해요.",
    "answer": "bù hǎoyìsi",
    "explanation": "不好意思 / 실례합니다",
    "difficulty": 3,
    "type": "blank"
  }
];

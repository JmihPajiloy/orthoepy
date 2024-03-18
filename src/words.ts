import { Word } from "@/providers";

export const wordList = [
  /* Nouns */
  {
    right: "аэропОрты",
    wrong: ["аэропортЫ"],
    type: "noun"
  },
  {
    right: "бАнты",
    wrong: ["бантЫ"],
    type: "noun"
  },
  {
    right: "бОроду",
    wrong: ["бородУ"],
    type: "noun"
  },
  {
    right: "бухгАлтеров",
    wrong: ["бухгалтерОв"],
    type: "noun"
  },
  {
    right: "вероисповЕдание",
    wrong: ["вероисповедАние"],
    type: "noun"
  },
  {
    right: "водопровОд",
    wrong: ["водопрОвод"],
    type: "noun"
  },
  {
    right: "граждАнство",
    wrong: ["грАжданство"],
    type: "noun"
  },
  {
    right: "дефИс",
    wrong: ["дЕфис"],
    type: "noun"
  },
  {
    right: "дешевИзна",
    wrong: ["дешевизнА"],
    type: "noun"
  },
  {
    right: "диспансЕр",
    wrong: ["диспАнсер"],
    type: "noun"
  },
  {
    right: "договорЕнность",
    wrong: ["договОренность"],
    type: "noun"
  },
  {
    right: "докумЕнт",
    wrong: ["докУмент"],
    type: "noun"
  },
  {
    right: "досУг",
    wrong: ["дОсуг"],
    type: "noun"
  },
  {
    right: "еретИк",
    wrong: ["ерЕтик"],
    type: "noun"
  },
  {
    right: "жалюзИ",
    wrong: ["жАлюзи"],
    type: "noun"
  },
  {
    right: "знАчимость",
    wrong: ["значимОсть"],
    type: "noun"
  },
  {
    right: "Иксы",
    wrong: ["иксЫ"],
    type: "noun"
  },
  {
    right: "каталОг",
    wrong: ["катАлог"],
    type: "noun"
  },
  {
    right: "квартАл",
    wrong: ["квАртал"],
    type: "noun"
  },
  {
    right: "киломЕтр",
    wrong: ["килОметр"],
    type: "noun"
  },
  {
    right: "кОнусов",
    wrong: ["конусОв"],
    type: "noun"
  },
  {
    right: "корЫсть",
    wrong: ["кОрысть"],
    type: "noun"
  },
  {
    right: "крАны",
    wrong: ["кранЫ"],
    type: "noun"
  },
  {
    right: "кремЕнь",
    wrong: ["крЕмень"],
    type: "noun"
  },
  {
    right: "кремнЯ",
    wrong: ["крЕмня"],
    type: "noun"
  },
  {
    right: "лЕкторов",
    wrong: ["лекторОв"],
    type: "noun"
  },
  {
    right: "лОктя",
    wrong: ["локтЯ"],
    type: "noun"
  },
  {
    right: "локтЕй",
    wrong: ["лОктей"],
    type: "noun"
  },
  {
    right: "лыжнЯ",
    wrong: ["лЫжня"],
    type: "noun"
  },
  {
    right: "мЕстностей",
    wrong: ["местностЕй"],
    type: "noun"
  },
  {
    right: "намЕрение",
    wrong: ["намерЕние"],
    type: "noun"
  },
  {
    right: "нарОст",
    wrong: ["нАрост"],
    type: "noun"
  },
  {
    right: "нЕдруг",
    wrong: ["недрУг"],
    type: "noun"
  },
  {
    right: "недУг",
    wrong: ["нЕдуг"],
    type: "noun"
  },
  {
    right: "некролОг",
    wrong: ["некрОлог"],
    type: "noun"
  },
  {
    right: "нЕнависть",
    wrong: [],
    type: "noun"
  },
  {
    right: "нефтепровОд",
    wrong: ["нефтепрОвод"],
    type: "noun"
  },
  {
    right: "новостЕй",
    wrong: ["нОвостей"],
    type: "noun"
  },
  {
    right: "нОгтя",
    wrong: ["ногтЯ"],
    type: "noun"
  },
  {
    right: "ногтЕй",
    wrong: ["нОгтей"],
    type: "noun"
  },
  {
    right: "Отзыв (о книге)",
    wrong: ["отзЫв (о книге)"],
    type: "noun"
  },
  {
    right: "отзЫв (посла из страны)",
    wrong: ["Отзыв (посла из страны)"],
    type: "noun"
  },
  {
    right: "Отрочество",
    wrong: ["отрОчество"],
    type: "noun"
  },
  {
    right: "партЕр",
    wrong: ["пАртер"],
    type: "noun"
  },
  {
    right: "портфЕль",
    wrong: [],
    type: "noun"
  },
  {
    right: "пОручни",
    wrong: ["поручнИ"],
    type: "noun"
  },
  {
    right: "придАное",
    wrong: ["прИданое", "приданОе"],
    type: "noun"
  },
  {
    right: "призЫв",
    wrong: ["прИзыв"],
    type: "noun"
  },
  {
    right: "свЕкла",
    wrong: ["свеклА"],
    type: "noun"
  },
  {
    right: "сирОты",
    wrong: ["сИроты"],
    type: "noun"
  },
  {
    right: "созЫв",
    wrong: ["сОзыв"],
    type: "noun"
  },
  {
    right: "сосредотОчение",
    wrong: ["сосредоточЕние"],
    type: "noun"
  },
  {
    right: "срЕдства",
    wrong: ["средствА"],
    type: "noun"
  },
  {
    right: "стАтуя",
    wrong: ["статУя"],
    type: "noun"
  },
  {
    right: "столЯр",
    wrong: ["стОляр"],
    type: "noun"
  },
  {
    right: "тамОжня",
    wrong: [],
    type: "noun"
  },
  {
    right: "тОрты",
    wrong: ["тортЫ"],
    type: "noun"
  },
  {
    right: "тУфля",
    wrong: ["туфлЯ"],
    type: "noun"
  },
  {
    right: "цемЕнт",
    wrong: [],
    type: "noun"
  },
  {
    right: "цЕнтнер",
    wrong: ["центнЕр"],
    type: "noun"
  },
  {
    right: "цепОчка",
    wrong: ["цЕпочка"],
    type: "noun"
  },
  {
    right: "шАрфы",
    wrong: ["шарфЫ"],
    type: "noun"
  },
  {
    right: "шофЕр",
    wrong: ["шОфер"],
    type: "noun"
  },
  {
    right: "экспЕрт",
    wrong: ["Эксперт"],
    type: "noun"
  },
  /* Adjectives */
  {
    right: "вернА",
    wrong: ["вЕрна"],
    type: "adjective"
  },
  {
    right: "знАчимый",
    wrong: ["значИмый"],
    type: "adjective"
  },
  {
    right: "красИвее",
    wrong: ["красивЕе"],
    type: "adjective"
  },
  {
    right: "красИвейший",
    wrong: ["красивЕйший"],
    type: "adjective"
  },
  {
    right: "кУхонный",
    wrong: ["кухОнный"],
    type: "adjective"
  },
  {
    right: "ловкА",
    wrong: ["лОвка"],
    type: "adjective"
  },
  {
    right: "мозаИчный",
    wrong: ["мозАичный"],
    type: "adjective"
  },
  {
    right: "оптОвый",
    wrong: ["Оптовый"],
    type: "adjective"
  },
  {
    right: "прозорлИвый",
    wrong: ["прозОрливый"],
    type: "adjective"
  },
  {
    right: "прозорлИва",
    wrong: ["прозОрлива"],
    type: "adjective"
  },
  {
    right: "слИвовый",
    wrong: ["сливОвый"],
    type: "adjective"
  },
  /* Verbs */
  {
    right: "бралА",
    wrong: ["брАла"],
    type: "verb"
  },
  {
    right: "бралАсь",
    wrong: ["брАлась"],
    type: "verb"
  },
  {
    right: "взялА",
    wrong: ["взЯла"],
    type: "verb"
  },
  {
    right: "взялАсь",
    wrong: ["взЯлась"],
    type: "verb"
  },
  {
    right: "влилАсь",
    wrong: ["влИлась"],
    type: "verb"
  },
  {
    right: "ворвалАсь",
    wrong: ["ворвАлась"],
    type: "verb"
  },
  {
    right: "воспринЯть",
    wrong: ["воспрИнять"],
    type: "verb"
  },
  {
    right: "воспринялА",
    wrong: ["воспрИняла"],
    type: "verb"
  },
  {
    right: "воссоздалА",
    wrong: ["воссоздАла"],
    type: "verb"
  },
  {
    right: "вручИт",
    wrong: ["врУчит"],
    type: "verb"
  },
  {
    right: "гналА",
    wrong: ["гнАла"],
    type: "verb"
  },
  {
    right: "гналАсь",
    wrong: ["гнАлась"],
    type: "verb"
  },
  {
    right: "добралА",
    wrong: ["добрАла"],
    type: "verb"
  },
  {
    right: "добралАсь",
    wrong: ["добрАлась"],
    type: "verb"
  },
  {
    right: "дождалАсь",
    wrong: ["дождАлась"],
    type: "verb"
  },
  {
    right: "дозвонИтся",
    wrong: ["дозвОнится"],
    type: "verb"
  },
  {
    right: "дозИровать",
    wrong: ["дозировАть"],
    type: "verb"
  },
  {
    right: "ждалА",
    wrong: ["ждАла"],
    type: "verb"
  },
  {
    right: "жилОсь",
    wrong: [],
    type: "verb"
  },
  {
    right: "закУпорить",
    wrong: ["закупОрить"],
    type: "verb"
  },
  {
    right: "занЯть",
    wrong: [],
    type: "verb"
  },
  {
    right: "зАнял",
    wrong: ["занЯл"],
    type: "verb"
  },
  {
    right: "занялА",
    wrong: ["занЯла"],
    type: "verb"
  },
  {
    right: "зАняли",
    wrong: ["занЯли"],
    type: "verb"
  },
  {
    right: "заперлА",
    wrong: [],
    type: "verb"
  },
  {
    right: "запломбировАть",
    wrong: ["запломбИровать"],
    type: "verb"
  },
  {
    right: "защемИт",
    wrong: ["защЕмит"],
    type: "verb"
  },
  {
    right: "звалА",
    wrong: ["звАла"],
    type: "verb"
  },
  {
    right: "звонИт",
    wrong: ["звОнит"],
    type: "verb"
  },
  {
    right: "кАшлянуть",
    wrong: ["кашлянУть"],
    type: "verb"
  },
  {
    right: "клАла",
    wrong: ["клалА"],
    type: "verb"
  },
  {
    right: "клЕить",
    wrong: [],
    type: "verb"
  },
  {
    right: "крАлась",
    wrong: ["кралАсь"],
    type: "verb"
  },
  {
    right: "кровоточИть",
    wrong: ["кровотОчить"],
    type: "verb"
  },
  {
    right: "лгалА",
    wrong: ["лгАла"],
    type: "verb"
  },
  {
    right: "лилА",
    wrong: ["лИла"],
    type: "verb"
  },
  {
    right: "лилАсь",
    wrong: ["лИлась"],
    type: "verb"
  },
  {
    right: "навралА",
    wrong: ["наврАла"],
    type: "verb"
  },
  {
    right: "наделИт",
    wrong: ["надЕлит"],
    type: "verb"
  },
  {
    right: "надорвалАсь",
    wrong: ["надорвАлась"],
    type: "verb"
  },
  {
    right: "надорвАться",
    wrong: [],
    type: "verb"
  },
  {
    right: "назвалАсь",
    wrong: ["назвАлась"],
    type: "verb"
  },
  {
    right: "накренИтся",
    wrong: ["накрЕнится"],
    type: "verb"
  },
  {
    right: "налилА",
    wrong: ["налИла"],
    type: "verb"
  },
  {
    right: "нарвалА",
    wrong: ["нарвАла"],
    type: "verb"
  },
  {
    right: "начАть",
    wrong: [],
    type: "verb"
  },
  {
    right: "нАчал",
    wrong: ["начАл"],
    type: "verb"
  },
  {
    right: "началА",
    wrong: ["начАла", "нАчала"],
    type: "verb"
  },
  {
    right: "нАчали",
    wrong: ["начАли", "начАли"],
    type: "verb"
  },
  {
    right: "обзвонИт",
    wrong: ["обзвОнит"],
    type: "verb"
  },
  {
    right: "облегчИть",
    wrong: ["облЕгчить"],
    type: "verb"
  },
  {
    right: "облегчИт",
    wrong: ["облЕгчит"],
    type: "verb"
  },
  {
    right: "облилАсь",
    wrong: ["облИлась"],
    type: "verb"
  },
  {
    right: "обнялАсь",
    wrong: ["обнЯлась"],
    type: "verb"
  },
  {
    right: "обогналА",
    wrong: ["обогнАла"],
    type: "verb"
  },
  {
    right: "ободралА",
    wrong: ["ободрАла"],
    type: "verb"
  },
  {
    right: "ободрИть",
    wrong: [],
    type: "verb"
  },
  {
    right: "ободрИт",
    wrong: [],
    type: "verb"
  },
  {
    right: "ободрИться",
    wrong: ["обОдриться"],
    type: "verb"
  },
  {
    right: "ободрИтся",
    wrong: ["обОдрится"],
    type: "verb"
  },
  {
    right: "обострИть",
    wrong: ["обОстрить"],
    type: "verb"
  },
  {
    right: "одолжИть",
    wrong: ["одОлжить"],
    type: "verb"
  },
  {
    right: "одолжИт",
    wrong: ["одОлжит"],
    type: "verb"
  },
  {
    right: "озлОбить",
    wrong: ["озлобИть"],
    type: "verb"
  },
  {
    right: "оклЕить",
    wrong: ["оклеИть"],
    type: "verb"
  },
  {
    right: "окружИт",
    wrong: ["окрУжит"],
    type: "verb"
  },
  {
    right: "опОшлить",
    wrong: ["опошлИть"],
    type: "verb"
  },
  {
    right: "освЕдомиться",
    wrong: ["осведомИться"],
    type: "verb"
  },
  {
    right: "освЕдомится",
    wrong: ["осведомИтся"],
    type: "verb"
  },
  {
    right: "отбылА",
    wrong: ["отбЫла"],
    type: "verb"
  },
  {
    right: "отдалА",
    wrong: ["отдАла"],
    type: "verb"
  },
  {
    right: "откУпорить",
    wrong: ["откупОрить"],
    type: "verb"
  },
  {
    right: "отозвалА",
    wrong: ["отозвАла"],
    type: "verb"
  },
  {
    right: "отозвалАсь",
    wrong: ["отозвАлась"],
    type: "verb"
  },
  {
    right: "перезвонИт",
    wrong: ["перезвОнит"],
    type: "verb"
  },
  {
    right: "перелилА",
    wrong: ["перелИла"],
    type: "verb"
  },
  {
    right: "плодоносИть",
    wrong: ["плодонОсить"],
    type: "verb"
  },
  {
    right: "пломбировАть",
    wrong: ["пломбИровать"],
    type: "verb"
  },
  {
    right: "повторИт",
    wrong: ["повтОрит"],
    type: "verb"
  },
  {
    right: "позвалА",
    wrong: ["позвАла"],
    type: "verb"
  },
  {
    right: "позвонИт",
    wrong: ["позвОнит"],
    type: "verb"
  },
  {
    right: "полилА",
    wrong: ["полИла"],
    type: "verb"
  },
  {
    right: "положИть",
    wrong: [],
    type: "verb"
  },
  {
    right: "положИл",
    wrong: [],
    type: "verb"
  },
  {
    right: "понЯть",
    wrong: [],
    type: "verb"
  },
  {
    right: "понялА",
    wrong: [],
    type: "verb"
  },
  {
    right: "послАла",
    wrong: ["послалА"],
    type: "verb"
  },
  {
    right: "прибЫть",
    wrong: [],
    type: "verb"
  },
  {
    right: "прИбыл",
    wrong: ["прибЫл"],
    type: "verb"
  },
  {
    right: "прибылА",
    wrong: ["прибЫла"],
    type: "verb"
  },
  {
    right: "прИбыли",
    wrong: ["прибЫли"],
    type: "verb"
  },
  {
    right: "принЯть",
    wrong: ["прИнять"],
    type: "verb"
  },
  {
    right: "прИнял",
    wrong: ["принЯл"],
    type: "verb"
  },
  {
    right: "принялА",
    wrong: ["принЯла", "прИняла"],
    type: "verb"
  },
  {
    right: "прИняли",
    wrong: ["принЯли"],
    type: "verb"
  },
  {
    right: "рвалА",
    wrong: ["рвАла"],
    type: "verb"
  },
  {
    right: "сверлИт",
    wrong: ["свЕрлит"],
    type: "verb"
  },
  {
    right: "снялА",
    wrong: ["снЯла"],
    type: "verb"
  },
  {
    right: "совралА",
    wrong: ["соврАла"],
    type: "verb"
  },
  {
    right: "создалА",
    wrong: ["создАла"],
    type: "verb"
  },
  {
    right: "сорвалА",
    wrong: ["сорвАла"],
    type: "verb"
  },
  {
    right: "сорИт",
    wrong: ["сОрит"],
    type: "verb"
  },
  {
    right: "убралА",
    wrong: ["убрАла"],
    type: "verb"
  },
  {
    right: "углубИть",
    wrong: ["углУбить"],
    type: "verb"
  },
  {
    right: "укрепИт",
    wrong: ["укрЕпит"],
    type: "verb"
  },
  {
    right: "чЕрпать",
    wrong: ["черпАть"],
    type: "verb"
  },
  {
    right: "щемИт",
    wrong: ["щЕмит"],
    type: "verb"
  },
  {
    right: "щЕлкать",
    wrong: ["щелкАть"],
    type: "verb"
  },
  {
    right: "довезЕнный",
    wrong: [],
    type: "adjective-participle"
  },
  {
    right: "зАгнутый",
    wrong: ["загнУтый"],
    type: "adjective-participle"
  },
  {
    right: "зАнятый",
    wrong: ["занЯтый"],
    type: "adjective-participle"
  },
  {
    right: "занятА",
    wrong: ["зАнята"],
    type: "adjective-participle"
  },
  {
    right: "зАпертый",
    wrong: ["запЕртый"],
    type: "adjective-participle"
  },
  {
    right: "заселЕнный",
    wrong: ["засЕленный"],
    type: "adjective-participle"
  },
  {
    right: "заселенА",
    wrong: ["засЕлена"],
    type: "adjective-participle"
  },
  {
    right: "кормЯщий",
    wrong: ["кОрмящий"],
    type: "adjective-participle"
  },
  {
    right: "кровоточАщий",
    wrong: ["кровотОчащий"],
    type: "adjective-participle"
  },
  {
    right: "нажИвший",
    wrong: ["нАживший"],
    type: "adjective-participle"
  },
  {
    right: "налИвший",
    wrong: ["нАливший"],
    type: "adjective-participle"
  },
  {
    right: "нанЯвшийся",
    wrong: ["нАнявшийся"],
    type: "adjective-participle"
  },
  {
    right: "начАвший",
    wrong: ["нАчавший"],
    type: "adjective-participle"
  },
  {
    right: "нАчатый",
    wrong: ["начАтый"],
    type: "adjective-participle"
  },
  {
    right: "низведЕнный",
    wrong: ["низвЕденный"],
    type: "adjective-participle"
  },
  {
    right: "облегчЕнный",
    wrong: ["облЕгченный"],
    type: "adjective-participle"
  },
  {
    right: "ободрЕнный",
    wrong: ["обОдренный"],
    type: "adjective-participle"
  },
  {
    right: "обострЕнный",
    wrong: ["обОстренный"],
    type: "adjective-participle"
  },
  {
    right: "отключЕнный",
    wrong: ["отклЮченный"],
    type: "adjective-participle"
  },
  {
    right: "повторЕнный",
    wrong: ["повтОренный"],
    type: "adjective-participle"
  },
  {
    right: "поделЕнный",
    wrong: ["подЕленный"],
    type: "adjective-participle"
  },
  {
    right: "понЯвший",
    wrong: ["пОнявший"],
    type: "adjective-participle"
  },
  {
    right: "прИнятый",
    wrong: ["принЯтый"],
    type: "adjective-participle"
  },
  {
    right: "принятА",
    wrong: ["прИнята"],
    type: "adjective-participle"
  },
  {
    right: "приручЕнный",
    wrong: ["прирУченный"],
    type: "adjective-participle"
  },
  {
    right: "прожИвший",
    wrong: ["прожИвший"],
    type: "adjective-participle"
  },
  {
    right: "снятА",
    wrong: ["снЯта"],
    type: "adjective-participle"
  },
  {
    right: "сОгнутый",
    wrong: ["согнУтый"],
    type: "adjective-participle"
  },
  {
    right: "углублЕнный",
    wrong: ["углУбленный"],
    type: "adjective-participle"
  },
  {
    right: "закУпорив",
    wrong: ["закупОрив"],
    type: "verb-participle"
  },
  {
    right: "начАв",
    wrong: ["нАчав"],
    type: "verb-participle"
  },
  {
    right: "начАвшись",
    wrong: ["нАчавшись"],
    type: "verb-participle"
  },
  {
    right: "отдАв",
    wrong: [],
    type: "verb-participle"
  },
  {
    right: "поднЯв",
    wrong: [],
    type: "verb-participle"
  },
  {
    right: "понЯв",
    wrong: ["пОняв"],
    type: "verb-participle"
  },
  {
    right: "прибЫв",
    wrong: ["прИбыв"],
    type: "verb-participle"
  },
  {
    right: "создАв",
    wrong: ["сОздав"],
    type: "verb-participle"
  },
  {
    right: "вОвремя",
    wrong: ["воврЕмя"],
    type: "adverb"
  },
  {
    right: "дОверху",
    wrong: ["довЕрху"],
    type: "adverb"
  },
  {
    right: "донЕльзя",
    wrong: ["дОнельзя", "донельзЯ"],
    type: "adverb"
  },
  {
    right: "дОнизу",
    wrong: ["донИзу"],
    type: "adverb"
  },
  {
    right: "дОсуха",
    wrong: ["досУха", "досухА"],
    type: "adverb"
  },
  {
    right: "зАсветло",
    wrong: ["засветлО"],
    type: "adverb"
  },
  {
    right: "зАтемно",
    wrong: ["затемнО"],
    type: "adverb"
  },
  {
    right: "надОлго",
    wrong: ["нАдолго"],
    type: "adverb"
  },
  {
    right: "ненадОлго",
    wrong: ["ненАдолго"],
    type: "adverb"
  }
] satisfies Array<Omit<Word, "enabled">>;
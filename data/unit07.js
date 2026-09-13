/* ===== واحد ۷: Chez moi — خانه من ===== */
EDITO.units[7] = {
  id: 7,
  title: 'Chez moi !',
  fa: 'خانه من!',
  theme: 'خانه و اتاق‌ها، اثاث و حروف اضافه مکان، passé composé با avoir، ضمایر مفعولی مستقیم (le/la/les) و فعل connaître',
  culture: {
    title: 'طبقه صفر یعنی همکف! 🏢',
    body: 'در فرانسه شماره‌گذاری طبقات با «rez-de-chaussée» (همکف، طبقه صفر) شروع می‌شود، نه «premier étage» (طبقه اول) — یعنی چیزی که در خیلی جاها «طبقه دوم» حساب می‌شود، اینجا «premier étage» است! همچنین آپارتمان‌های پاریس معمولاً کوچک‌ترند و اجاره بر اساس متراژ (m²) حساب می‌شود، نه تعداد اتاق‌خواب.'
  },
  lessons: [
    {
      id: 'u7l1',
      title: 'Le logement',
      fa: 'مسکن',
      vocab: [
        { fr: 'un appartement', ipa: 'apaʁtəmɑ̃', fa: 'آپارتمان', ex: 'Un appartement de trois pièces', exfa: 'آپارتمان سه‌خوابه' },
        { fr: 'une maison', ipa: 'mɛzɔ̃', fa: 'خانه', ex: 'Une maison avec jardin', exfa: 'خانه با حیاط' },
        { fr: 'une pièce', ipa: 'pjɛs', fa: 'اتاق (هر فضای خانه)', ex: 'Il y a quatre pièces.', exfa: 'چهار اتاق دارد.' },
        { fr: 'le salon', ipa: 'salɔ̃', fa: 'پذیرایی', ex: 'Le salon est grand.', exfa: 'پذیرایی بزرگ است.' },
        { fr: 'la chambre', ipa: 'ʃɑ̃bʁ', fa: 'اتاق خواب', ex: 'Ma chambre est petite.', exfa: 'اتاق خوابم کوچک است.' },
        { fr: 'la cuisine', ipa: 'kɥizin', fa: 'آشپزخانه', ex: 'La cuisine est moderne.', exfa: 'آشپزخانه مدرن است.' },
        { fr: 'la salle de bains', ipa: 'sal də bɛ̃', fa: 'حمام', ex: 'La salle de bains est là.', exfa: 'حمام آنجاست.' },
        { fr: 'les toilettes', ipa: 'twalɛt', fa: 'دستشویی', ex: 'Où sont les toilettes ?', exfa: 'دستشویی کجاست؟' },
        { fr: 'un balcon', ipa: 'balkɔ̃', fa: 'بالکن', ex: 'Un balcon avec vue', exfa: 'بالکن با منظره' },
        { fr: 'un jardin', ipa: 'ʒaʁdɛ̃', fa: 'حیاط / باغچه', ex: 'Les enfants jouent dans le jardin.', exfa: 'بچه‌ها در حیاط بازی می‌کنند.' },
        { fr: 'un étage', ipa: 'etaʒ', fa: 'طبقه', ex: 'J\'habite au troisième étage.', exfa: 'طبقه سوم زندگی می‌کنم.' },
        { fr: 'un ascenseur', ipa: 'asɑ̃sœʁ', fa: 'آسانسور', ex: 'Il n\'y a pas d\'ascenseur.', exfa: 'آسانسور ندارد.' },
        { fr: 'le loyer', ipa: 'lwaje', fa: 'اجاره', ex: 'Le loyer est de 800 euros.', exfa: 'اجاره ۸۰۰ یورو است.' },
        { fr: 'louer', ipa: 'lwe', fa: 'اجاره کردن', ex: 'Je loue un studio.', exfa: 'یک سوئیت اجاره کرده‌ام.' },
        { fr: 'clair / claire', ipa: 'klɛʁ', fa: 'روشن / نورگیر', ex: 'Le salon est très clair.', exfa: 'پذیرایی خیلی نورگیر است.' }
      ],
      phrases: [
        { fr: 'Tu habites dans une maison ou un appartement ?', fa: 'در خانه زندگی می‌کنی یا آپارتمان؟' },
        { fr: 'C\'est au deuxième étage.', fa: 'طبقه دوم است.' },
        { fr: 'Bienvenue chez moi !', fa: 'به خانه من خوش آمدی!' }
      ],
      grammar: {
        title: '« chez » + les nombres ordinaux',
        body: 'حرف اضافه <b>chez</b> یعنی «خانهٔ / پیشِ»:<br>' +
          '• chez moi (خانه من)، chez toi، chez Karim (خانه کریم)، chez le médecin (پیش دکتر)<br><br>' +
          'اعداد ترتیبی: به عدد پسوند <b>-ième</b> اضافه می‌شود:<br>' +
          'deux → deux<b>ième</b>، trois → trois<b>ième</b> | استثنا: un → <b>premier / première</b>',
        examples: [
          { fr: 'Ce soir, on mange chez mes parents.', fa: 'امشب خانه والدینم غذا می‌خوریم.' },
          { fr: 'J\'habite au premier étage, chez ma tante.', fa: 'طبقه اول، خانه خاله‌ام زندگی می‌کنم.' }
        ]
      },
      phonetics: {
        title: 'آوای [ɥi] در cuisine',
        body: 'تمرین صداهای خانه:',
        items: [
          { fr: 'la cuisine', ipa: 'kɥizin', fa: '«کوئیزین»' },
          { fr: 'la chambre', ipa: 'ʃɑ̃bʁ', fa: '«شامبر»' },
          { fr: 'l\'étage', ipa: 'etaʒ', fa: '«اِتاژ»' },
          { fr: 'chez moi', ipa: 'ʃe mwa', fa: '«شه موا»' }
        ]
      },
      reading: {
        title: 'Petite annonce — À louer',
        fr: 'À LOUER — Bel appartement de 3 pièces, 65 m², au 4e étage avec ascenseur.\nGrand salon très clair, deux chambres, cuisine moderne, salle de bains, balcon.\nPrès du métro et des magasins. Loyer : 950 € par mois.\nContact : 06 12 45 78 90',
        fa: 'اجاره داده می‌شود — آپارتمان زیبای ۳ اتاقه، ۶۵ متر، طبقه چهارم با آسانسور.\nپذیرایی بزرگ و نورگیر، دو اتاق خواب، آشپزخانه مدرن، حمام، بالکن.\nنزدیک مترو و مغازه‌ها. اجاره: ۹۵۰ یورو در ماه.\nتماس: ۰۶۱۲۴۵۷۸۹۰'
      },
      exercises: [
        { type: 'mcq', skill: 'CE', topic: 'خانه و اتاق‌ها', level: 'easy', q: 'در آگهی بالا، آپارتمان در کدام طبقه است؟', qfr: 'Bel appartement de 3 pièces, au 4e étage avec ascenseur.', options: ['چهارم، با آسانسور', 'سوم، بدون آسانسور', 'اول', 'همکف'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'خانه و اتاق‌ها', level: 'easy', fa: 'جور کن:', pairs: [['la cuisine', 'آشپزخانه'], ['la chambre', 'اتاق خواب'], ['le salon', 'پذیرایی'], ['la salle de bains', 'حمام'], ['le jardin', 'حیاط']] },
        { type: 'fill', skill: 'GR', topic: 'خانه و اتاق‌ها', level: 'medium', fa: 'کامل کن:', q: 'Ce soir, on mange ___ mes parents. (خانهٔ)', answer: ['chez'] },
        { type: 'fill', skill: 'GR', topic: 'اعداد ترتیبی', level: 'medium', fa: 'عدد ترتیبی بساز:', q: 'J\'habite au ___ étage. (طبقه ۳)', answer: ['troisième', 'troisieme'] },
        { type: 'mcq', skill: 'CO', topic: 'خانه و اتاق‌ها', level: 'easy', q: '🎧 گوش کن — خانه او چند اتاق خواب دارد؟', audio: 'Mon appartement a un grand salon, deux chambres et une petite cuisine.', audioFa: 'آپارتمانم یک پذیرایی بزرگ، دو اتاق خواب و یک آشپزخانه کوچک دارد.', options: ['دو', 'یک', 'سه', 'چهار'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'خانه و اتاق‌ها', level: 'hard', text: 'La cuisine est moderne et claire.', trans: 'آشپزخانه مدرن و نورگیر است.' },
        { type: 'order', skill: 'GR', topic: 'خانه و اتاق‌ها', level: 'medium', answer: 'J\'habite au deuxième étage.', fa: 'جمله «طبقه دوم زندگی می‌کنم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'خانه و اتاق‌ها', level: 'medium', text: 'Mon appartement a trois pièces et un balcon.', fa: 'آپارتمان من سه اتاق و یک بالکن دارد.' },
        { type: 'write', skill: 'PE', topic: 'خانه و اتاق‌ها', level: 'hard', prompt: 'خانه‌ات را توصیف کن: چند اتاق، کدام طبقه، چه چیزهایی دارد. (۳-۴ جمله)', min: 12, sample: 'J\'habite dans un appartement au troisième étage. Il y a un salon, deux chambres et une cuisine. Le salon est grand et clair. J\'ai aussi un petit balcon.' }
      ]
    },
    {
      id: 'u7l2',
      title: 'Les meubles',
      fa: 'اثاث خانه',
      vocab: [
        { fr: 'un meuble', ipa: 'mœbl', fa: 'مبل / اثاث', ex: 'J\'achète des meubles.', exfa: 'اثاث می‌خرم.' },
        { fr: 'une table', ipa: 'tabl', fa: 'میز', ex: 'La table est dans la cuisine.', exfa: 'میز در آشپزخانه است.' },
        { fr: 'une chaise', ipa: 'ʃɛz', fa: 'صندلی', ex: 'Quatre chaises', exfa: 'چهار صندلی' },
        { fr: 'un canapé', ipa: 'kanape', fa: 'کاناپه', ex: 'Le canapé est confortable.', exfa: 'کاناپه راحت است.' },
        { fr: 'un lit', ipa: 'li', fa: 'تخت', ex: 'Le lit est dans la chambre.', exfa: 'تخت در اتاق خواب است.' },
        { fr: 'une armoire', ipa: 'aʁmwaʁ', fa: 'کمد', ex: 'Une grande armoire', exfa: 'یک کمد بزرگ' },
        { fr: 'un bureau', ipa: 'byʁo', fa: 'میز کار / دفتر', ex: 'Mon bureau est près de la fenêtre.', exfa: 'میز کارم نزدیک پنجره است.' },
        { fr: 'une lampe', ipa: 'lɑ̃p', fa: 'چراغ', ex: 'Une lampe sur le bureau', exfa: 'یک چراغ روی میز' },
        { fr: 'une fenêtre', ipa: 'fənɛtʁ', fa: 'پنجره', ex: 'Ouvre la fenêtre !', exfa: 'پنجره را باز کن!' },
        { fr: 'une porte', ipa: 'pɔʁt', fa: 'در', ex: 'Ferme la porte.', exfa: 'در را ببند.' },
        { fr: 'sur / sous', ipa: 'syʁ / su', fa: 'روی / زیر', ex: 'Le chat est sous la table.', exfa: 'گربه زیر میز است.' },
        { fr: 'dans', ipa: 'dɑ̃', fa: 'داخل', ex: 'Dans l\'armoire', exfa: 'داخل کمد' },
        { fr: 'confortable', ipa: 'kɔ̃fɔʁtabl', fa: 'راحت', ex: 'Un canapé confortable', exfa: 'کاناپه راحت' }
      ],
      phrases: [
        { fr: 'Où est... ?', fa: '... کجاست؟' },
        { fr: 'Il est sur / sous / dans...', fa: 'روی / زیر / داخلِ ... است' },
        { fr: 'Qu\'est-ce qu\'il y a dans ta chambre ?', fa: 'در اتاقت چه چیزهایی هست؟' }
      ],
      grammar: {
        title: 'Les prépositions de lieu — حروف اضافه مکان',
        body: 'جای اشیا را با این حروف اضافه می‌گوییم:<br>' +
          '<b>sur</b> (روی) | <b>sous</b> (زیر) | <b>dans</b> (داخل) | <b>devant</b> (جلوی) | <b>derrière</b> (پشت) | <b>à côté de</b> (کنار) | <b>en face de</b> (روبه‌روی) | <b>entre</b> (بین)<br>' +
          '⚠️ حروف اضافه‌ای که de دارند، با حرف تعریف ترکیب می‌شوند: à côté <b>du</b> lit (de + le)، en face <b>de la</b> porte',
        examples: [
          { fr: 'La lampe est sur le bureau.', fa: 'چراغ روی میز کار است.' },
          { fr: 'Le chat dort sous le canapé.', fa: 'گربه زیر کاناپه خوابیده.' },
          { fr: 'L\'armoire est à côté de la fenêtre.', fa: 'کمد کنار پنجره است.' }
        ]
      },
      phonetics: {
        title: 'sur / sous — [y] و [u]',
        body: 'این دو حرف اضافه فقط در یک صدا فرق دارند — دقت کن:',
        items: [
          { fr: 'sur la table', ipa: 'syʁ', fa: 'روی میز — [y] لب گرد و «ای»' },
          { fr: 'sous la table', ipa: 'su', fa: 'زیر میز — [u] مثل «او»' },
          { fr: 'Le livre est sur le lit.', ipa: '', fa: 'کتاب روی تخت است' },
          { fr: 'Le chat est sous le lit.', ipa: '', fa: 'گربه زیر تخت است' }
        ]
      },
      dialogue: {
        title: 'On installe les meubles',
        lines: [
          { s: 'Karim', fr: 'On met le canapé où ?', fa: 'کاناپه را کجا بگذاریم؟' },
          { s: 'Mona', fr: 'En face de la fenêtre. Et la table à côté de la cuisine.', fa: 'روبه‌روی پنجره. و میز را کنار آشپزخانه.' },
          { s: 'Karim', fr: 'D\'accord. Et cette lampe ?', fa: 'باشه. و این چراغ؟' },
          { s: 'Mona', fr: 'Sur le bureau, dans la chambre.', fa: 'روی میز کار، در اتاق خواب.' },
          { s: 'Karim', fr: 'Et le chat ? Il est où ?', fa: 'و گربه؟ کجاست؟' },
          { s: 'Mona', fr: 'Regarde ! Il dort sous le lit !', fa: 'نگاه کن! زیر تخت خوابیده!' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'حروف اضافه مکان', level: 'easy', q: '🎧 گوش کن — گربه کجاست؟', audio: 'Le chat n\'est pas sur le canapé, il est sous la table !', audioFa: 'گربه روی کاناپه نیست، زیر میز است!', options: ['زیر میز', 'روی کاناپه', 'داخل کمد', 'پشت در'], correct: 0, frOptions: false },
        { type: 'fill', skill: 'GR', topic: 'حروف اضافه مکان', level: 'medium', fa: '«روی» یا «زیر»؟', q: 'La lampe est ___ le bureau. (روی)', answer: ['sur'] },
        { type: 'fill', skill: 'GR', topic: 'حروف اضافه مکان', level: 'medium', fa: 'ترکیب de + le :', q: 'L\'armoire est à côté ___ lit.', answer: ['du'], explain: 'de + le = du.' },
        { type: 'match', skill: 'VO', topic: 'اثاث خانه', level: 'easy', fa: 'جور کن:', pairs: [['le lit', 'تخت'], ['l\'armoire', 'کمد'], ['la chaise', 'صندلی'], ['le canapé', 'کاناپه'], ['la fenêtre', 'پنجره']] },
        { type: 'mcq', skill: 'GR', topic: 'حروف اضافه مکان', level: 'easy', q: '«کتاب داخل کمد است»:', options: ['Le livre est dans l\'armoire.', 'Le livre est sur l\'armoire.', 'Le livre est sous l\'armoire.', 'Le livre est chez l\'armoire.'], correct: 0 },
        { type: 'dictation', skill: 'CO', topic: 'حروف اضافه مکان', level: 'hard', text: 'Le chat dort sous le canapé.', trans: 'گربه زیر کاناپه خوابیده.' },
        { type: 'order', skill: 'GR', topic: 'حروف اضافه مکان', level: 'medium', answer: 'La table est à côté de la fenêtre.', fa: 'جمله «میز کنار پنجره است» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'اثاث خانه', level: 'medium', text: 'Dans ma chambre, il y a un lit, un bureau et une grande armoire.', fa: 'اتاقت را توصیف کن' },
        { type: 'write', skill: 'PE', topic: 'اثاث خانه', level: 'hard', prompt: 'اتاقت را توصیف کن: چه اثاثی دارد و هرکدام کجاست؟ (۳-۴ جمله با حروف اضافه)', min: 12, sample: 'Dans ma chambre, il y a un lit et un bureau. Le bureau est à côté de la fenêtre. Il y a une lampe sur le bureau. Mon armoire est en face du lit.' }
      ]
    },
    {
      id: 'u7l3',
      title: 'J\'ai trouvé un appartement !',
      fa: 'یک آپارتمان پیدا کردم! — گذشته و ضمایر مفعولی',
      vocab: [
        { fr: 'trouver', ipa: 'tʁuve', fa: 'پیدا کردن', ex: 'J\'ai trouvé un appartement.', exfa: 'یک آپارتمان پیدا کردم.' },
        { fr: 'visiter', ipa: 'vizite', fa: 'بازدید کردن', ex: 'On a visité trois appartements.', exfa: 'سه آپارتمان را دیدیم.' },
        { fr: 'déménager', ipa: 'demenaʒe', fa: 'اسباب‌کشی کردن', ex: 'On a déménagé en juin.', exfa: 'ژوئن اسباب‌کشی کردیم.' },
        { fr: 'connaître', ipa: 'kɔnɛtʁ', fa: 'شناختن (جایی/کسی)', ex: 'Tu connais ce quartier ?', exfa: 'این محله را می‌شناسی؟' },
        { fr: 'calme / bruyant', ipa: 'kalm / bʁɥijɑ̃', fa: 'آرام / پرسروصدا', ex: 'C\'est un quartier calme.', exfa: 'محله آرامی است.' },
        { fr: 'pratique', ipa: 'pʁatik', fa: 'کاربردی / راحت', ex: 'C\'est très pratique.', exfa: 'خیلی کاربردی است.' },
        { fr: 'moderne / ancien', ipa: 'mɔdɛʁn / ɑ̃sjɛ̃', fa: 'مدرن / قدیمی', ex: 'Un immeuble ancien', exfa: 'یک ساختمان قدیمی' }
      ],
      phrases: [
        { fr: 'Tu connais ce quartier ?', fa: 'این محله را می‌شناسی؟' },
        { fr: 'J\'ai visité l\'appartement hier.', fa: 'دیروز آپارتمان را دیدم.' },
        { fr: 'Je le/la prends !', fa: 'برش می‌دارم!' }
      ],
      grammar: {
        title: 'Le passé composé (avoir) + les pronoms COD',
        body: 'برای گفتن کاری که <b>انجام دادی</b>، از passé composé با avoir استفاده می‌کنیم: avoir (حال) + participe passé.<br>' +
          '• trouver → trouv<b>é</b> | visiter → visit<b>é</b>: J\'<b>ai trouvé</b> un appartement.<br><br>' +
          'برای تکرار نکردن مفعول مستقیم، از ضمیر <b>le / la / l\' / les</b> استفاده می‌کنیم که <b>قبل از فعل</b> می‌آید:<br>' +
          '• Tu as visité <s>l\'appartement</s> ? → Tu <b>l\'</b>as visité ?<br>' +
          '• Je prends <s>ces meubles</s> → Je <b>les</b> prends.',
        table: {
          head: ['مفعول', 'ضمیر', 'مثال'],
          rows: [
            ['مذکر', 'le', 'Je le prends.'],
            ['مؤنث', 'la', 'Je la visite.'],
            ['قبل صدادار', 'l\'', 'Je l\'ai trouvé.'],
            ['جمع', 'les', 'Je les connais.']
          ]
        },
        examples: [
          { fr: 'J\'ai visité un appartement hier. Je l\'ai adoré !', fa: 'دیروز یک آپارتمان دیدم. عاشقش شدم!' },
          { fr: 'Tu connais cette rue ? — Oui, je la connais bien.', fa: 'این خیابان را می‌شناسی؟ — آره، خوب می‌شناسمش.' }
        ]
      },
      phonetics: {
        title: 'é در اسم مفعول',
        body: 'پایانه é با صدای [e] بسته — کوتاه و واضح:',
        items: [
          { fr: 'j\'ai trouvé', ipa: 'ʒe tʁuve', fa: 'پیدا کردم' },
          { fr: 'j\'ai visité', ipa: 'ʒe vizite', fa: 'بازدید کردم' }
        ]
      },
      dialogue: {
        title: 'Bonne nouvelle !',
        lines: [
          { s: 'Mona', fr: 'Karim ! J\'ai trouvé un appartement !', fa: 'کریم! یک آپارتمان پیدا کردم!' },
          { s: 'Karim', fr: 'Super ! Tu connais le quartier ?', fa: 'عالی! محله را می‌شناسی؟' },
          { s: 'Mona', fr: 'Oui, je le connais bien, il est calme.', fa: 'آره، خوب می‌شناسمش، آرام است.' },
          { s: 'Karim', fr: 'Et l\'appartement, tu l\'as visité ?', fa: 'و آپارتمان، دیدیش؟' },
          { s: 'Mona', fr: 'Oui, hier. Je l\'ai adoré, je le prends !', fa: 'آره، دیروز. عاشقش شدم، برش می‌دارم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'passé composé بساز:', q: 'J\'___ trouvé un appartement. (avoir)', answer: ['ai'] },
        { type: 'fill', skill: 'GR', topic: 'ضمایر مفعولی', level: 'medium', fa: 'با ضمیر جایگزین کن:', q: 'Tu visites l\'appartement ? → Tu ___ visites ?', answer: ["l'"] },
        { type: 'fill', skill: 'GR', topic: 'فعل connaître', level: 'medium', fa: 'connaître را صرف کن:', q: 'Tu ___ ce quartier ?', answer: ['connais'] },
        { type: 'mcq', skill: 'GR', topic: 'ضمایر مفعولی', level: 'medium', q: '«خوب می‌شناسمش» (این خیابان) به فرانسه:', options: ['Je la connais bien.', 'Je le connais bien.', 'Je connais la bien.', 'Je les connais bien.'], correct: 0, explain: 'rue مؤنث است: la.' },
        { type: 'match', skill: 'VO', topic: 'توصیف خانه', level: 'easy', fa: 'جور کن:', pairs: [['calme', 'آرام'], ['bruyant', 'پر سروصدا'], ['ancien', 'قدیمی'], ['pratique', 'کاربردی']] },
        { type: 'mcq', skill: 'CO', topic: 'passé composé', level: 'easy', q: '🎧 گوش کن — او چند آپارتمان دید؟', audio: 'J\'ai visité trois appartements et j\'ai trouvé un très bel appartement calme.', audioFa: 'سه آپارتمان دیدم و یک آپارتمان آرام و زیبا پیدا کردم.', options: ['سه تا', 'دو تا', 'یکی', 'پنج تا'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'passé composé', level: 'hard', text: 'J\'ai trouvé un appartement calme et pratique.', trans: 'یک آپارتمان آرام و کاربردی پیدا کردم.' },
        { type: 'order', skill: 'GR', topic: 'passé composé', level: 'medium', answer: 'J\'ai visité un appartement hier.', fa: 'جمله «دیروز یک آپارتمان دیدم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'passé composé', level: 'medium', text: 'J\'ai trouvé un appartement. Je le connais bien, il est calme et pratique.', fa: 'از پیداکردن خانه‌ات بگو' },
        { type: 'write', skill: 'PE', topic: 'passé composé', level: 'hard', prompt: 'داستان پیداکردن آپارتمانت را بنویس: چند تا دیدی، کدام را پیدا کردی، چرا آن را دوست داری. (۴ جمله)', min: 14, sample: 'J\'ai visité quatre appartements. J\'ai trouvé un bel appartement dans un quartier calme. Je le connais bien maintenant. Je l\'ai pris parce qu\'il est près du métro.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'خانه و اتاق‌ها', level: 'easy', q: '🎧 گوش کن — این خانه چه چیزی ندارد؟', audio: 'C\'est un bel appartement avec un grand salon, deux chambres et un balcon, mais il n\'y a pas d\'ascenseur.', audioFa: 'آپارتمان زیبایی است با پذیرایی بزرگ، دو اتاق خواب و بالکن، ولی آسانسور ندارد.', options: ['آسانسور', 'بالکن', 'پذیرایی', 'اتاق خواب'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'خانه و اتاق‌ها', level: 'easy', q: 'آگهی را بخوان — اجاره چقدر است؟', qfr: 'À louer : studio meublé, 25 m², 5e étage sans ascenseur, près de l\'université. Loyer : 550 € par mois.', options: ['۵۵۰ یورو در ماه', '۲۵ یورو', '۵۰۰ یورو', '۵۵۰ یورو در سال'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'حروف اضافه مکان', level: 'medium', fa: 'روی یا زیر؟', q: 'Le livre est ___ la table. (روی)', answer: ['sur'] },
      { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'کامل کن:', q: 'J\'___ visité cet appartement hier. (avoir)', answer: ['ai'] },
      { type: 'fill', skill: 'GR', topic: 'ضمایر مفعولی', level: 'medium', fa: 'با ضمیر جایگزین کن:', q: 'Tu connais cette rue ? → Oui, je ___ connais.', answer: ['la'] },
      { type: 'match', skill: 'VO', topic: 'اثاث خانه', level: 'easy', fa: 'جور کن:', pairs: [['un lit', 'تخت'], ['une lampe', 'چراغ'], ['un bureau', 'میز کار'], ['une porte', 'در']] },
      { type: 'order', skill: 'GR', topic: 'حروف اضافه مکان', level: 'medium', answer: 'Le canapé est en face de la fenêtre.', fa: 'جمله «کاناپه روبه‌روی پنجره است» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'خانه و اتاق‌ها', level: 'hard', text: 'J\'habite au troisième étage avec ascenseur.', trans: 'طبقه سوم با آسانسور زندگی می‌کنم.' },
      { type: 'speak', skill: 'PO', topic: 'خانه و اتاق‌ها', level: 'medium', text: 'Bienvenue chez moi ! Voilà le salon et là, c\'est la cuisine.', fa: 'مهمانت را خانه‌ات راهنمایی کن' },
      { type: 'write', skill: 'PE', topic: 'خانه و اتاق‌ها', level: 'hard', prompt: 'خانه رویایی‌ات را توصیف کن: کجاست، چند اتاق دارد، چه اثاثی دارد و چرا از خانه فعلی‌ات بهتر است. (۵ جمله)', min: 16, sample: 'Ma maison idéale est près de la mer. Il y a quatre pièces : un grand salon, deux chambres et une cuisine moderne. Dans le salon, il y a un canapé confortable. Le quartier est calme. C\'est plus grand et plus clair que mon appartement !' }
    ]
  }
};

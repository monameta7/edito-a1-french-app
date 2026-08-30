/* ===== واحد ۸: Bonnes vacances ! — تعطیلات خوش! ===== */
EDITO.units[8] = {
  id: 8,
  title: 'Bonnes vacances !',
  fa: 'تعطیلات خوش!',
  theme: 'سفر، کشورها و حروف اضافه، فصل‌ها، و گذشته (passé composé با avoir)',
  culture: {
    title: 'کوچ بزرگ تابستانی 🚗',
    body: 'در ماه اوت (août)، بخش بزرگی از فرانسه به تعطیلات می‌روند و شهرهای بزرگ مثل پاریس نسبتاً خلوت می‌شوند، درحالی‌که جاده‌ها و مقاصد ساحلی شلوغ می‌شوند — به این پدیده «les grands départs» می‌گویند. DELF (که آزمون نهایی این اپ از آن الهام گرفته) مدرک رسمی زبان فرانسه است که توسط وزارت آموزش فرانسه صادر می‌شود و در سراسر دنیا معتبر است.'
  },
  lessons: [
    {
      id: 'u8l1',
      title: 'Les destinations',
      fa: 'مقصدها — کشورها و فصل‌ها',
      vocab: [
        { fr: 'les vacances', ipa: 'vakɑ̃s', fa: 'تعطیلات', ex: 'Bonnes vacances !', exfa: 'تعطیلات خوش!' },
        { fr: 'un voyage', ipa: 'vwajaʒ', fa: 'سفر', ex: 'Bon voyage !', exfa: 'سفر خوش!' },
        { fr: 'la mer', ipa: 'mɛʁ', fa: 'دریا', ex: 'On va à la mer.', exfa: 'به دریا می‌رویم.' },
        { fr: 'la montagne', ipa: 'mɔ̃taɲ', fa: 'کوه / کوهستان', ex: 'J\'adore la montagne.', exfa: 'عاشق کوهستانم.' },
        { fr: 'la plage', ipa: 'plaʒ', fa: 'ساحل', ex: 'Une belle plage', exfa: 'یک ساحل زیبا' },
        { fr: 'la campagne', ipa: 'kɑ̃paɲ', fa: 'روستا / ییلاق', ex: 'Un week-end à la campagne', exfa: 'یک آخر هفته در ییلاق' },
        { fr: 'l\'été', ipa: 'ete', fa: 'تابستان', ex: 'En été, il fait chaud.', exfa: 'تابستان هوا گرم است.' },
        { fr: 'l\'hiver', ipa: 'ivɛʁ', fa: 'زمستان', ex: 'En hiver, il fait froid.', exfa: 'زمستان هوا سرد است.' },
        { fr: 'le printemps', ipa: 'pʁɛ̃tɑ̃', fa: 'بهار', ex: 'Au printemps', exfa: 'در بهار' },
        { fr: 'l\'automne', ipa: 'otɔn', fa: 'پاییز', ex: 'En automne', exfa: 'در پاییز' },
        { fr: 'l\'Italie', ipa: 'itali', fa: 'ایتالیا', ex: 'Je vais en Italie.', exfa: 'به ایتالیا می‌روم.' },
        { fr: 'le Maroc', ipa: 'maʁɔk', fa: 'مراکش', ex: 'Il va au Maroc.', exfa: 'او به مراکش می‌رود.' },
        { fr: 'les États-Unis', ipa: 'etazyni', fa: 'آمریکا', ex: 'Elle habite aux États-Unis.', exfa: 'او در آمریکا زندگی می‌کند.' },
        { fr: 'un billet', ipa: 'bijɛ', fa: 'بلیت', ex: 'Un billet d\'avion', exfa: 'بلیت هواپیما' },
        { fr: 'un avion', ipa: 'avjɔ̃', fa: 'هواپیما', ex: 'On voyage en avion.', exfa: 'با هواپیما سفر می‌کنیم.' },
        { fr: 'une valise', ipa: 'valiz', fa: 'چمدان', ex: 'Je fais ma valise.', exfa: 'چمدانم را می‌بندم.' }
      ],
      phrases: [
        { fr: 'Où est-ce que tu pars en vacances ?', fa: 'تعطیلات کجا می‌روی؟' },
        { fr: 'Je pars en Italie.', fa: 'به ایتالیا می‌روم.' },
        { fr: 'Bon voyage !', fa: 'سفر خوش!' }
      ],
      grammar: {
        title: 'Les prépositions + pays — en / au / aux',
        body: 'حرف اضافه کشورها به جنسیت کشور بستگی دارد:<br>' +
          '• کشور مؤنث (اکثراً ختم به e-) → <b>en</b>: en France، en Italie، en Iran*<br>' +
          '• کشور مذکر → <b>au</b>: au Maroc، au Canada، au Japon<br>' +
          '• کشور جمع → <b>aux</b>: aux États-Unis<br>' +
          '• شهرها → <b>à</b>: à Paris، à Téhéran<br>' +
          '*⚠️ Iran مذکر است ولی چون با صدادار شروع می‌شود en می‌گیرد: <b>en Iran</b>',
        table: {
          head: ['مقصد', 'حرف اضافه', 'مثال'],
          rows: [
            ['کشور مؤنث', 'en', 'en France'],
            ['کشور با صدادار', 'en', 'en Iran'],
            ['کشور مذکر', 'au', 'au Maroc'],
            ['کشور جمع', 'aux', 'aux États-Unis'],
            ['شهر', 'à', 'à Paris']
          ]
        },
        examples: [
          { fr: 'Cet été, je vais en Iran, à Téhéran.', fa: 'این تابستان به ایران می‌روم، به تهران.' },
          { fr: 'Ils partent au Canada en hiver.', fa: 'آنها زمستان به کانادا می‌روند.' }
        ]
      },
      phonetics: {
        title: 'فصل‌ها — تلفظ',
        body: 'به حرف اضافه فصل‌ها هم دقت کن: en été، en hiver، en automne ولی au printemps!',
        items: [
          { fr: 'en été', ipa: 'ɑ̃n‿ete', fa: 'در تابستان' },
          { fr: 'en hiver', ipa: 'ɑ̃n‿ivɛʁ', fa: 'در زمستان' },
          { fr: 'au printemps', ipa: 'o pʁɛ̃tɑ̃', fa: 'در بهار' },
          { fr: 'en automne', ipa: 'ɑ̃n‿otɔn', fa: 'در پاییز' }
        ]
      },
      dialogue: {
        title: 'Projets de vacances',
        lines: [
          { s: 'Emma', fr: 'Où est-ce que tu pars cet été, Mona ?', fa: 'این تابستان کجا می‌روی مونا؟' },
          { s: 'Mona', fr: 'Je vais en Iran, chez mes parents. Et après, une semaine en Italie !', fa: 'به ایران می‌روم، خانه والدینم. و بعدش، یک هفته ایتالیا!' },
          { s: 'Emma', fr: 'Super ! Tu vas où en Italie ?', fa: 'عالی! کجای ایتالیا می‌روی؟' },
          { s: 'Mona', fr: 'À Rome et à Venise. Et toi ?', fa: 'رم و ونیز. تو چی؟' },
          { s: 'Emma', fr: 'Moi, je vais à la montagne avec ma famille. On adore la nature !', fa: 'من با خانواده به کوهستان می‌روم. عاشق طبیعتیم!' },
          { s: 'Mona', fr: 'Bonnes vacances alors !', fa: 'پس تعطیلات خوش!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', fa: 'حرف اضافه درست (en/au/aux/à):', q: 'Je vais ___ France.', answer: ['en'] },
        { type: 'fill', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', fa: 'حرف اضافه درست:', q: 'Il part ___ Maroc.', answer: ['au'] },
        { type: 'fill', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', fa: 'حرف اضافه درست:', q: 'Elle habite ___ États-Unis.', answer: ['aux'] },
        { type: 'mcq', skill: 'GR', topic: 'کشورها و سفر', level: 'easy', q: '«به تهران می‌روم» به فرانسه:', options: ['Je vais à Téhéran.', 'Je vais en Téhéran.', 'Je vais au Téhéran.', 'Je vais Téhéran.'], correct: 0, explain: 'شهرها با à می‌آیند.' },
        { type: 'match', skill: 'VO', topic: 'فصل‌ها', level: 'easy', fa: 'فصل‌ها را جور کن:', pairs: [['l\'été', 'تابستان'], ['l\'hiver', 'زمستان'], ['le printemps', 'بهار'], ['l\'automne', 'پاییز']] },
        { type: 'mcq', skill: 'CO', topic: 'کشورها و سفر', level: 'easy', q: '🎧 گوش کن — او کجا می‌رود؟', audio: 'Cet été, je pars en Espagne, à Barcelone, avec deux amies.', audioFa: 'این تابستان با دو دوستم به اسپانیا، بارسلون می‌روم.', options: ['اسپانیا، بارسلون', 'ایتالیا، رم', 'فرانسه، پاریس', 'مراکش'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'کشورها و سفر', level: 'hard', text: 'Je fais ma valise pour le voyage.', trans: 'چمدانم را برای سفر می‌بندم.' },
        { type: 'order', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', answer: 'On va à la mer en été.', fa: 'جمله «تابستان به دریا می‌رویم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'کشورها و سفر', level: 'medium', text: 'Cet été, je vais en Iran et après en France.', fa: 'برنامه سفرت را بگو' },
        { type: 'write', skill: 'PE', topic: 'کشورها و سفر', level: 'hard', prompt: 'برنامه تعطیلات بعدی‌ات را بنویس: کجا، کِی، با کی، چطور؟ (۳-۴ جمله)', min: 12, sample: 'Cet été, je vais en Turquie avec ma famille. On part en avion au mois de juillet. On va à la mer et on visite Istanbul. J\'adore voyager !' }
      ]
    },
    {
      id: 'u8l2',
      title: 'Raconter au passé',
      fa: 'تعریف کردن گذشته — passé composé',
      vocab: [
        { fr: 'hier', ipa: 'jɛʁ', fa: 'دیروز', ex: 'Hier, j\'ai travaillé.', exfa: 'دیروز کار کردم.' },
        { fr: 'la semaine dernière', ipa: 'səmɛn dɛʁnjɛʁ', fa: 'هفته پیش', ex: 'La semaine dernière, j\'ai voyagé.', exfa: 'هفته پیش سفر کردم.' },
        { fr: 'l\'année dernière', ipa: 'ane dɛʁnjɛʁ', fa: 'پارسال', ex: 'L\'année dernière, on a visité Rome.', exfa: 'پارسال رم را دیدیم.' },
        { fr: 'visiter', ipa: 'vizite', fa: 'بازدید کردن', ex: 'J\'ai visité le musée.', exfa: 'از موزه بازدید کردم.' },
        { fr: 'un monument', ipa: 'mɔnymɑ̃', fa: 'بنای تاریخی', ex: 'La tour Eiffel est un monument.', exfa: 'برج ایفل یک بناست.' },
        { fr: 'une photo', ipa: 'fɔto', fa: 'عکس', ex: 'J\'ai pris des photos.', exfa: 'عکس گرفتم.' },
        { fr: 'un souvenir', ipa: 'suvniʁ', fa: 'خاطره / سوغاتی', ex: 'Un bon souvenir', exfa: 'یک خاطره خوب' },
        { fr: 'rencontrer', ipa: 'ʁɑ̃kɔ̃tʁe', fa: 'ملاقات کردن / آشنا شدن', ex: 'J\'ai rencontré des gens sympas.', exfa: 'با آدم‌های خوبی آشنا شدم.' },
        { fr: 'goûter', ipa: 'ɡute', fa: 'چشیدن', ex: 'On a goûté la cuisine locale.', exfa: 'غذای محلی را چشیدیم.' },
        { fr: 'acheter des souvenirs', ipa: '', fa: 'سوغاتی خریدن', ex: 'J\'ai acheté des souvenirs.', exfa: 'سوغاتی خریدم.' },
        { fr: 'formidable', ipa: 'fɔʁmidabl', fa: 'فوق‌العاده', ex: 'C\'était formidable !', exfa: 'فوق‌العاده بود!' },
        { fr: 'passer (du temps)', ipa: 'pɑse', fa: 'گذراندن', ex: 'On a passé une semaine à Rome.', exfa: 'یک هفته در رم گذراندیم.' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu as fait hier ?', fa: 'دیروز چه‌کار کردی؟' },
        { fr: 'C\'était comment ?', fa: 'چطور بود؟' },
        { fr: 'C\'était super / formidable !', fa: 'عالی / فوق‌العاده بود!' },
        { fr: 'J\'ai passé de bonnes vacances.', fa: 'تعطیلات خوبی گذراندم.' }
      ],
      grammar: {
        title: 'Le passé composé avec « avoir »',
        body: 'زمان گذشته اصلی فرانسه است — معادل ماضی ساده/نقلی فارسی:<br>' +
          '<b>avoir (حال) + participe passé (اسم مفعول)</b><br>' +
          'ساخت اسم مفعول:<br>' +
          '• فعل‌های -er → <b>é</b>: travailler → travaill<b>é</b>، visiter → visit<b>é</b><br>' +
          '• فعل‌های -ir → <b>i</b>: finir → fin<b>i</b>، choisir → chois<b>i</b><br>' +
          '• بی‌قاعده‌های مهم: faire → <b>fait</b>، prendre → <b>pris</b>، voir → <b>vu</b>، boire → <b>bu</b>، avoir → <b>eu</b>، être → <b>été</b>',
        table: {
          head: ['حال', 'گذشته (passé composé)'],
          rows: [
            ['je visite', 'j\'ai visité'],
            ['tu manges', 'tu as mangé'],
            ['il fait', 'il a fait'],
            ['nous prenons', 'nous avons pris'],
            ['vous voyez', 'vous avez vu'],
            ['ils choisissent', 'ils ont choisi']
          ]
        },
        examples: [
          { fr: 'Hier, j\'ai visité le Louvre et j\'ai pris des photos.', fa: 'دیروز از لوور بازدید کردم و عکس گرفتم.' },
          { fr: 'On a mangé dans un petit restaurant.', fa: 'در یک رستوران کوچک غذا خوردیم.' },
          { fr: 'Tu as fait quoi ce week-end ?', fa: 'این آخر هفته چه‌کار کردی؟' }
        ]
      },
      phonetics: {
        title: 'é در اسم مفعول',
        body: 'پایانه é با صدای [e] بسته — کوتاه و واضح:',
        items: [
          { fr: 'j\'ai visité', ipa: 'ʒe vizite', fa: 'بازدید کردم' },
          { fr: 'j\'ai mangé', ipa: 'ʒe mɑ̃ʒe', fa: 'خوردم' },
          { fr: 'j\'ai travaillé', ipa: 'ʒe tʁavaje', fa: 'کار کردم' },
          { fr: 'on a goûté', ipa: 'ɔ̃n‿a ɡute', fa: 'چشیدیم' }
        ]
      },
      dialogue: {
        title: 'Le retour de voyage',
        lines: [
          { s: 'Karim', fr: 'Alors Mona, tes vacances en Italie ? C\'était comment ?', fa: 'خب مونا، تعطیلات ایتالیا؟ چطور بود؟' },
          { s: 'Mona', fr: 'Formidable ! On a passé une semaine à Rome.', fa: 'فوق‌العاده! یک هفته در رم گذراندیم.' },
          { s: 'Karim', fr: 'Qu\'est-ce que vous avez fait ?', fa: 'چه‌کارها کردید؟' },
          { s: 'Mona', fr: 'On a visité le Colisée, on a pris beaucoup de photos...', fa: 'کولوسئوم را دیدیم، کلی عکس گرفتیم...' },
          { s: 'Karim', fr: 'Et la cuisine italienne ?', fa: 'و غذای ایتالیایی؟' },
          { s: 'Mona', fr: 'On a goûté les pâtes et les glaces. J\'ai adoré ! Et j\'ai acheté des souvenirs pour toi !', fa: 'پاستا و بستنی خوردیم. عاشقش شدم! برایت سوغاتی هم خریدم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'passé composé بساز:', q: 'Hier, j\'___ visité le musée.', answer: ['ai'] },
        { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'اسم مفعول manger:', q: 'Nous avons ___ au restaurant. (manger)', answer: ['mangé', 'mange'] },
        { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'اسم مفعول بی‌قاعده faire:', q: 'Qu\'est-ce que tu as ___ hier ? (faire)', answer: ['fait'] },
        { type: 'mcq', skill: 'GR', topic: 'passé composé', level: 'easy', q: '«عکس گرفتم» به فرانسه:', options: ['J\'ai pris des photos.', 'J\'ai prendre des photos.', 'Je pris des photos.', 'J\'ai prendé des photos.'], correct: 0, explain: 'prendre بی‌قاعده است: pris.' },
        { type: 'mcq', skill: 'CO', topic: 'passé composé', level: 'easy', q: '🎧 گوش کن — او دیروز چه کرد؟', audio: 'Hier, j\'ai travaillé le matin et l\'après-midi, j\'ai fait du sport.', audioFa: 'دیروز صبح کار کردم و بعدازظهر ورزش کردم.', options: ['کار و ورزش', 'سفر و خرید', 'فیلم و رستوران', 'هیچی'], correct: 0, frOptions: false },
        { type: 'match', skill: 'GR', topic: 'passé composé', level: 'easy', fa: 'اسم مفعول‌ها را جور کن:', pairs: [['voir', 'vu'], ['boire', 'bu'], ['prendre', 'pris'], ['faire', 'fait']] },
        { type: 'dictation', skill: 'CO', topic: 'passé composé', level: 'hard', text: 'On a visité un monument magnifique.', trans: 'از یک بنای فوق‌العاده بازدید کردیم.' },
        { type: 'order', skill: 'GR', topic: 'passé composé', level: 'medium', answer: 'J\'ai acheté des souvenirs pour ma famille.', fa: 'جمله «برای خانواده‌ام سوغاتی خریدم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'passé composé', level: 'medium', text: 'Hier, j\'ai visité le musée et j\'ai pris des photos.', fa: 'دیروزت را تعریف کن' },
        { type: 'write', skill: 'PE', topic: 'passé composé', level: 'hard', prompt: 'دیروزت را تعریف کن: سه کاری که انجام دادی. (۳ جمله در گذشته)', min: 10, sample: 'Hier, j\'ai travaillé jusqu\'à cinq heures. Le soir, j\'ai regardé un film français. Et j\'ai étudié mon français !' }
      ]
    },
    {
      id: 'u8l3',
      title: 'Le récit de voyage',
      fa: 'سفرنامه — منفی گذشته و سؤال',
      vocab: [
        { fr: 'partir', ipa: 'paʁtiʁ', fa: 'رفتن / عزیمت کردن', ex: 'Je pars demain matin.', exfa: 'فردا صبح می‌روم.' },
        { fr: 'un aéroport', ipa: 'aeʁɔpɔʁ', fa: 'فرودگاه', ex: 'On va à l\'aéroport.', exfa: 'به فرودگاه می‌رویم.' },
        { fr: 'réserver', ipa: 'ʁezɛʁve', fa: 'رزرو کردن', ex: 'J\'ai réservé l\'hôtel.', exfa: 'هتل را رزرو کردم.' },
        { fr: 'perdre', ipa: 'pɛʁdʁ', fa: 'گم کردن', ex: 'J\'ai perdu mon passeport !', exfa: 'پاسپورتم را گم کردم!' },
        { fr: 'un passeport', ipa: 'pɑspɔʁ', fa: 'پاسپورت', ex: 'Votre passeport, s\'il vous plaît.', exfa: 'پاسپورت‌تان، لطفاً.' },
        { fr: 'oublier', ipa: 'ublije', fa: 'فراموش کردن', ex: 'J\'ai oublié mon billet.', exfa: 'بلیتم را فراموش کردم.' },
        { fr: 'attendre', ipa: 'atɑ̃dʁ', fa: 'منتظر ماندن', ex: 'On a attendu deux heures.', exfa: 'دو ساعت منتظر ماندیم.' },
        { fr: 'en retard', ipa: 'ɑ̃ ʁətaʁ', fa: 'دیر / با تأخیر', ex: 'Le train est en retard.', exfa: 'قطار تأخیر دارد.' },
        { fr: 'trouver', ipa: 'tʁuve', fa: 'پیدا کردن', ex: 'J\'ai trouvé un bon hôtel.', exfa: 'یک هتل خوب پیدا کردم.' },
        { fr: 'déjà', ipa: 'deʒa', fa: 'قبلاً / تا حالا', ex: 'Tu as déjà visité Paris ?', exfa: 'تا حالا پاریس رفته‌ای؟' },
        { fr: 'ne... jamais', ipa: 'ʒamɛ', fa: 'هرگز', ex: 'Je n\'ai jamais visité Rome.', exfa: 'هرگز رم نرفته‌ام.' },
        { fr: 'heureusement', ipa: 'øʁøzmɑ̃', fa: 'خوشبختانه', ex: 'Heureusement, j\'ai trouvé mon sac !', exfa: 'خوشبختانه کیفم را پیدا کردم!' }
      ],
      phrases: [
        { fr: 'Tu as déjà visité... ?', fa: 'تا حالا ... رفته‌ای؟' },
        { fr: 'Non, jamais. / Oui, une fois.', fa: 'نه، هرگز. / آره، یک بار.' },
        { fr: 'Quelle aventure !', fa: 'عجب ماجرایی!' }
      ],
      grammar: {
        title: 'La négation au passé composé + déjà / jamais',
        body: 'در منفیِ گذشته، <b>ne...pas دور فعل کمکی avoir</b> می‌آید نه دور اسم مفعول:<br>' +
          '• Je <b>n\'ai pas</b> visité Rome. (رم را ندیده‌ام)<br>' +
          '• On <b>n\'a pas</b> trouvé l\'hôtel. (هتل را پیدا نکردیم)<br><br>' +
          '• <b>déjà</b> (قبلاً/تا حالا): Tu as <b>déjà</b> visité Paris ?<br>' +
          '• <b>ne... jamais</b> (هرگز): Je n\'ai <b>jamais</b> voyagé en avion.',
        examples: [
          { fr: 'Je n\'ai pas pris de photos.', fa: 'عکس نگرفتم.' },
          { fr: 'Vous avez déjà goûté la cuisine iranienne ? — Non, jamais !', fa: 'تا حالا غذای ایرانی خورده‌اید؟ — نه، هرگز!' }
        ]
      },
      phonetics: {
        title: 'گفتار سریع — j\'ai / je n\'ai pas',
        body: 'در گفتار روزمره این‌ها خیلی سریع ادا می‌شوند:',
        items: [
          { fr: 'j\'ai visité', ipa: 'ʒe', fa: '«ژه ویزیته»' },
          { fr: 'je n\'ai pas visité', ipa: 'ʒənepa', fa: '«ژُنِپا ویزیته»' },
          { fr: 'on n\'a pas trouvé', ipa: 'ɔ̃napa', fa: '«اُناپا تروُوه»' }
        ]
      },
      dialogue: {
        title: 'Une aventure à l\'aéroport',
        lines: [
          { s: 'Sara', fr: 'Alors, ton voyage ? Tout s\'est bien passé ?', fa: 'خب، سفرت؟ همه‌چیز خوب پیش رفت؟' },
          { s: 'Mona', fr: 'Non, quelle aventure ! D\'abord, le taxi est arrivé en retard.', fa: 'نه، عجب ماجرایی! اول تاکسی دیر رسید.' },
          { s: 'Sara', fr: 'Oh non !', fa: 'وای نه!' },
          { s: 'Mona', fr: 'Et à l\'aéroport, j\'ai perdu mon passeport ! J\'ai cherché partout...', fa: 'و در فرودگاه پاسپورتم را گم کردم! همه‌جا را گشتم...' },
          { s: 'Sara', fr: 'Et alors ?', fa: 'خب بعدش؟' },
          { s: 'Mona', fr: 'Heureusement, une dame a trouvé mon passeport ! Mais je n\'ai pas mangé, je n\'ai pas bu... quel stress !', fa: 'خوشبختانه یک خانم پاسپورتم را پیدا کرد! ولی نه چیزی خوردم، نه نوشیدم... عجب استرسی!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'منفی کن:', q: 'Je ___ ai pas visité le musée.', answer: ["n'", 'n'], explain: 'ne قبل از صدادار به \'n تبدیل می‌شود.' },
        { type: 'mcq', skill: 'GR', topic: 'passé composé', level: 'easy', q: 'منفیِ «On a trouvé l\'hôtel»:', options: ['On n\'a pas trouvé l\'hôtel.', 'On a pas ne trouvé l\'hôtel.', 'On a trouvé pas l\'hôtel.', 'On ne trouvé pas l\'hôtel.'], correct: 0 },
        { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: '«هرگز» را اضافه کن:', q: 'Je n\'ai ___ voyagé en avion.', answer: ['jamais'] },
        { type: 'mcq', skill: 'CO', topic: 'سفر و ماجرا', level: 'easy', q: '🎧 گوش کن — چه مشکلی پیش آمد؟', audio: 'À la gare, j\'ai oublié ma valise dans le train ! Heureusement, un employé a trouvé ma valise.', audioFa: 'در ایستگاه، چمدانم را در قطار جا گذاشتم! خوشبختانه یک کارمند چمدانم را پیدا کرد.', options: ['چمدانش را در قطار جا گذاشت', 'بلیتش را گم کرد', 'قطار تأخیر داشت', 'پاسپورتش را گم کرد'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'سفر و ماجرا', level: 'easy', fa: 'جور کن:', pairs: [['perdre', 'گم کردن'], ['oublier', 'فراموش کردن'], ['attendre', 'منتظر ماندن'], ['réserver', 'رزرو کردن']] },
        { type: 'dictation', skill: 'CO', topic: 'passé composé', level: 'hard', text: 'J\'ai perdu mon billet à l\'aéroport.', trans: 'بلیتم را در فرودگاه گم کردم.' },
        { type: 'order', skill: 'GR', topic: 'passé composé', level: 'medium', answer: 'Tu as déjà visité la France ?', fa: 'سؤال «تا حالا فرانسه رفته‌ای؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'سفر و ماجرا', level: 'medium', text: 'Je n\'ai jamais visité Paris, mais je veux y aller !', fa: 'هرگز پاریس نرفته‌ام، ولی می‌خواهم بروم!' },
        { type: 'write', skill: 'PE', topic: 'passé composé', level: 'hard', prompt: 'یک سفر واقعی‌ات را تعریف کن: کجا رفتی، چه کردی، یک اتفاق جالب. (۴ جمله در گذشته)', min: 14, sample: 'L\'année dernière, j\'ai voyagé à Ispahan avec mes amis. On a visité les monuments et on a pris beaucoup de photos. J\'ai goûté des plats traditionnels. Mais j\'ai perdu mon téléphone ! Heureusement, un homme sympa a trouvé mon téléphone.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'کشورها و سفر', level: 'easy', q: '🎧 گوش کن — او تعطیلات کجا رفت؟', audio: 'L\'été dernier, je suis allée au Maroc. On a visité Marrakech, c\'était magnifique !', audioFa: 'تابستان گذشته به مراکش رفتم. مراکش را دیدیم، فوق‌العاده بود!', options: ['مراکش', 'ایتالیا', 'فرانسه', 'اسپانیا'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'passé composé', level: 'easy', q: 'کارت‌پستال را بخوان — کدام درست است؟', qfr: 'Chère Sara, bonjour de Rome ! On a visité le Colisée et on a mangé des pâtes délicieuses. Hier, j\'ai acheté des souvenirs au marché. Il fait très beau ! Bises, Mona', options: ['مونا در رم است و خوش می‌گذرد', 'مونا در پاریس است', 'هوا بد است', 'مونا چیزی نخریده'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', fa: 'حرف اضافه:', q: 'Ils habitent ___ Iran.', answer: ['en'] },
      { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'passé composé بساز:', q: 'Nous ___ visité trois musées.', answer: ['avons'] },
      { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'اسم مفعول boire:', q: 'J\'ai ___ un café italien. (boire)', answer: ['bu'] },
      { type: 'fill', skill: 'GR', topic: 'passé composé', level: 'medium', fa: 'منفی گذشته:', q: 'Elle n\'a ___ trouvé son passeport.', answer: ['pas'] },
      { type: 'match', skill: 'VO', topic: 'کشورها و سفر', level: 'easy', fa: 'جور کن:', pairs: [['un avion', 'هواپیما'], ['une valise', 'چمدان'], ['la plage', 'ساحل'], ['un billet', 'بلیت']] },
      { type: 'order', skill: 'GR', topic: 'passé composé', level: 'medium', answer: 'On a passé une semaine à la mer.', fa: 'جمله «یک هفته کنار دریا گذراندیم» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'passé composé', level: 'hard', text: 'Hier, on a pris beaucoup de photos.', trans: 'دیروز کلی عکس گرفتیم.' },
      { type: 'speak', skill: 'PO', topic: 'کشورها و سفر', level: 'medium', text: 'L\'année dernière, j\'ai voyagé en Turquie. C\'était formidable !', fa: 'از یک سفر تعریف کن' },
      { type: 'write', skill: 'PE', topic: 'passé composé', level: 'hard', prompt: 'یک کارت‌پستال از سفر بنویس: کجایی، چه کرده‌ای، هوا چطور است. (۴-۵ جمله)', min: 16, sample: 'Chère Emma, bonjour d\'Ispahan ! On a visité la place Naghsh-e Jahan, c\'est magnifique. Hier, j\'ai acheté des souvenirs au bazar. On a goûté des plats délicieux. Il fait beau et chaud. Bises, Mona' }
    ]
  }
};

/* ===== واحد ۷: Chez moi — خانه من ===== */
EDITO.units[7] = {
  id: 7,
  title: 'Chez moi',
  fa: 'خانه من',
  theme: 'خانه و اتاق‌ها، اثاث، حروف اضافه مکان، مقایسه و il faut',
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
      title: 'Comparer et choisir',
      fa: 'مقایسه و انتخاب',
      vocab: [
        { fr: 'plus... que', ipa: 'ply... kə', fa: 'بیشتر... از', ex: 'Paris est plus grand que Lyon.', exfa: 'پاریس بزرگ‌تر از لیون است.' },
        { fr: 'moins... que', ipa: 'mwɛ̃... kə', fa: 'کمتر... از', ex: 'C\'est moins cher.', exfa: 'ارزان‌تر است.' },
        { fr: 'aussi... que', ipa: 'osi... kə', fa: 'به همان اندازه...', ex: 'Aussi grand que...', exfa: 'به همان بزرگیِ...' },
        { fr: 'meilleur / meilleure', ipa: 'mɛjœʁ', fa: 'بهتر', ex: 'C\'est le meilleur choix.', exfa: 'بهترین انتخاب است.' },
        { fr: 'il faut', ipa: 'il fo', fa: 'باید / لازم است', ex: 'Il faut un canapé.', exfa: 'یک کاناپه لازم است.' },
        { fr: 'choisir', ipa: 'ʃwaziʁ', fa: 'انتخاب کردن', ex: 'Je choisis le bleu.', exfa: 'آبی را انتخاب می‌کنم.' },
        { fr: 'déménager', ipa: 'demenaʒe', fa: 'اسباب‌کشی کردن', ex: 'On déménage en juin.', exfa: 'ژوئن اسباب‌کشی می‌کنیم.' },
        { fr: 'calme', ipa: 'kalm', fa: 'آرام / ساکت', ex: 'Un quartier calme', exfa: 'یک محله آرام' },
        { fr: 'bruyant / bruyante', ipa: 'bʁɥijɑ̃ / -ɑ̃t', fa: 'پر سر و صدا', ex: 'La rue est bruyante.', exfa: 'خیابان پر سر و صداست.' },
        { fr: 'pratique', ipa: 'pʁatik', fa: 'کاربردی / راحت', ex: 'C\'est très pratique.', exfa: 'خیلی کاربردی است.' },
        { fr: 'moderne / ancien', ipa: 'mɔdɛʁn / ɑ̃sjɛ̃', fa: 'مدرن / قدیمی', ex: 'Un immeuble ancien', exfa: 'یک ساختمان قدیمی' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu préfères ?', fa: 'کدام را ترجیح می‌دهی؟' },
        { fr: 'Je préfère...', fa: 'ترجیح می‌دهم...' },
        { fr: 'C\'est une bonne idée.', fa: 'فکر خوبی است.' }
      ],
      grammar: {
        title: 'Le comparatif + il faut',
        body: 'برای مقایسه:<br>' +
          '• <b>plus + صفت + que</b>: بزرگ‌تر از — La maison est <b>plus grande que</b> l\'appartement.<br>' +
          '• <b>moins + صفت + que</b>: کمتر — L\'appartement est <b>moins cher que</b> la maison.<br>' +
          '• <b>aussi + صفت + que</b>: به همان اندازه<br>' +
          '⚠️ استثنا: plus bon نمی‌گوییم! → <b>meilleur</b> (بهتر)<br><br>' +
          '<b>il faut</b> + اسم/مصدر = «لازم است / باید»: Il faut une table. Il faut visiter l\'appartement.',
        examples: [
          { fr: 'Cet appartement est plus clair que l\'autre.', fa: 'این آپارتمان از آن یکی نورگیرتر است.' },
          { fr: 'Le quartier est moins bruyant.', fa: 'محله کم‌سروصداتر است.' },
          { fr: 'Il faut déménager avant juin.', fa: 'باید قبل از ژوئن اسباب‌کشی کنیم.' }
        ]
      },
      phonetics: {
        title: 'plus — سه تلفظ!',
        body: 'واژه plus بسته به جایگاه سه تلفظ دارد:',
        items: [
          { fr: 'plus grand', ipa: 'ply ɡʁɑ̃', fa: 'قبل صامت: «پلو»' },
          { fr: 'plus ancien', ipa: 'ply‿zɑ̃sjɛ̃', fa: 'قبل صدادار: «پلوز»' },
          { fr: 'J\'aime plus !', ipa: 'plys', fa: 'آخر جمله: «پلوس»' }
        ]
      },
      dialogue: {
        title: 'Quel appartement choisir ?',
        lines: [
          { s: 'Mona', fr: 'Alors, l\'appartement A ou l\'appartement B ?', fa: 'خب، آپارتمان A یا B؟' },
          { s: 'Karim', fr: 'Le A est plus grand, mais il est plus cher aussi.', fa: 'A بزرگ‌تر است، ولی گران‌تر هم هست.' },
          { s: 'Mona', fr: 'Oui, et le B est plus près du métro. C\'est pratique.', fa: 'آره، و B به مترو نزدیک‌تر است. راحت است.' },
          { s: 'Karim', fr: 'Mais le quartier du B est plus bruyant, non ?', fa: 'ولی محله B پر سروصداتر است، نه؟' },
          { s: 'Mona', fr: 'C\'est vrai. Le A est dans un quartier plus calme. Il faut réfléchir !', fa: 'راست می‌گویی. A در محله آرام‌تری است. باید فکر کنیم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'مقایسه', level: 'medium', fa: 'مقایسه بساز (بزرگ‌تر):', q: 'La maison est ___ grande que l\'appartement.', answer: ['plus'] },
        { type: 'fill', skill: 'GR', topic: 'مقایسه', level: 'medium', fa: 'مقایسه بساز (ارزان‌تر = کمتر گران):', q: 'Le studio est ___ cher que la maison.', answer: ['moins'] },
        { type: 'mcq', skill: 'GR', topic: 'مقایسه', level: 'easy', q: '«این کیک بهتر است»:', options: ['Ce gâteau est meilleur.', 'Ce gâteau est plus bon.', 'Ce gâteau est plus meilleur.', 'Ce gâteau est bien plus.'], correct: 0, explain: 'plus bon غلط است — meilleur درست است.' },
        { type: 'fill', skill: 'GR', topic: 'il faut', level: 'medium', fa: 'کامل کن:', q: 'Il ___ une table pour la cuisine.', answer: ['faut'] },
        { type: 'mcq', skill: 'CO', topic: 'مقایسه', level: 'easy', q: '🎧 گوش کن — کدام آپارتمان ارزان‌تر است؟', audio: 'L\'appartement A coûte mille euros, l\'appartement B coûte huit cents euros. Le B est moins cher.', audioFa: 'آپارتمان A هزار یورو است، آپارتمان B هشتصد یورو است. B ارزان‌تر است.', options: ['B', 'A', 'مساوی‌اند', 'گفته نشد'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'توصیف خانه', level: 'easy', fa: 'جور کن:', pairs: [['calme', 'آرام'], ['bruyant', 'پر سروصدا'], ['ancien', 'قدیمی'], ['pratique', 'کاربردی']] },
        { type: 'dictation', skill: 'CO', topic: 'مقایسه', level: 'hard', text: 'Ce quartier est plus calme que le centre.', trans: 'این محله از مرکز شهر آرام‌تر است.' },
        { type: 'order', skill: 'GR', topic: 'مقایسه', level: 'medium', answer: 'La maison est plus grande que le studio.', fa: 'جمله «خانه از سوئیت بزرگ‌تر است» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'مقایسه', level: 'medium', text: 'Je préfère cet appartement. Il est plus clair et moins cher.', fa: 'من این آپارتمان را ترجیح می‌دهم. نورگیرتر و ارزان‌تر است.' },
        { type: 'write', skill: 'PE', topic: 'مقایسه', level: 'hard', prompt: 'دو خانه (یا دو شهر) را مقایسه کن. (۳ جمله با plus/moins/aussi)', min: 12, sample: 'Téhéran est plus grand que Chiraz. Mais Chiraz est plus calme et moins cher. Je préfère Chiraz parce que c\'est une belle ville.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'خانه و اتاق‌ها', level: 'easy', q: '🎧 گوش کن — این خانه چه چیزی ندارد؟', audio: 'C\'est un bel appartement avec un grand salon, deux chambres et un balcon, mais il n\'y a pas d\'ascenseur.', audioFa: 'آپارتمان زیبایی است با پذیرایی بزرگ، دو اتاق خواب و بالکن، ولی آسانسور ندارد.', options: ['آسانسور', 'بالکن', 'پذیرایی', 'اتاق خواب'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'خانه و اتاق‌ها', level: 'easy', q: 'آگهی را بخوان — اجاره چقدر است؟', qfr: 'À louer : studio meublé, 25 m², 5e étage sans ascenseur, près de l\'université. Loyer : 550 € par mois.', options: ['۵۵۰ یورو در ماه', '۲۵ یورو', '۵۰۰ یورو', '۵۵۰ یورو در سال'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'حروف اضافه مکان', level: 'medium', fa: 'روی یا زیر؟', q: 'Le livre est ___ la table. (روی)', answer: ['sur'] },
      { type: 'fill', skill: 'GR', topic: 'مقایسه', level: 'medium', fa: 'مقایسه بساز:', q: 'Le salon est ___ grand que la chambre. (بزرگ‌تر)', answer: ['plus'] },
      { type: 'fill', skill: 'GR', topic: 'il faut', level: 'medium', fa: 'کامل کن:', q: 'Il ___ visiter l\'appartement avant de louer.', answer: ['faut'] },
      { type: 'match', skill: 'VO', topic: 'اثاث خانه', level: 'easy', fa: 'جور کن:', pairs: [['un lit', 'تخت'], ['une lampe', 'چراغ'], ['un bureau', 'میز کار'], ['une porte', 'در']] },
      { type: 'order', skill: 'GR', topic: 'حروف اضافه مکان', level: 'medium', answer: 'Le canapé est en face de la fenêtre.', fa: 'جمله «کاناپه روبه‌روی پنجره است» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'خانه و اتاق‌ها', level: 'hard', text: 'J\'habite au troisième étage avec ascenseur.', trans: 'طبقه سوم با آسانسور زندگی می‌کنم.' },
      { type: 'speak', skill: 'PO', topic: 'خانه و اتاق‌ها', level: 'medium', text: 'Bienvenue chez moi ! Voilà le salon et là, c\'est la cuisine.', fa: 'مهمانت را خانه‌ات راهنمایی کن' },
      { type: 'write', skill: 'PE', topic: 'خانه و اتاق‌ها', level: 'hard', prompt: 'خانه رویایی‌ات را توصیف کن: کجاست، چند اتاق دارد، چه اثاثی دارد و چرا از خانه فعلی‌ات بهتر است. (۵ جمله)', min: 16, sample: 'Ma maison idéale est près de la mer. Il y a quatre pièces : un grand salon, deux chambres et une cuisine moderne. Dans le salon, il y a un canapé confortable. Le quartier est calme. C\'est plus grand et plus clair que mon appartement !' }
    ]
  }
};

/* ===== واحد ۳: Qu'est-ce qu'on mange ? — چی بخوریم؟ ===== */
EDITO.units[3] = {
  id: 3,
  title: 'Qu\'est-ce qu\'on mange ?',
  fa: 'چی بخوریم؟',
  theme: 'غذا و خرید: حروف تعریف جزئی، کمیت‌ها، اعداد ۷۰ تا ۱۰۰، سفارش در رستوران',
  culture: {
    title: 'وعده‌های غذایی مقدس‌اند 🍽️',
    body: 'در فرانسه ساعت غذا خوردن نسبتاً ثابت است: ناهار حدود ۱۲ تا ۱۴ و شام حدود ۱۹:۳۰ تا ۲۱. خوردن میان‌وعده بین این ساعت‌ها چندان معمول نیست. قبل از شروع غذا، همیشه <b>Bon appétit !</b> (نوش جان) گفته می‌شود. و در رستوران، عجله برای گرفتن صورت‌حساب رایج نیست — باید خودت با گفتن <i>«L\'addition, s\'il vous plaît»</i> درخواستش کنی، وگرنه گارسون معطلت نمی‌کند.'
  },
  lessons: [
    {
      id: 'u3l1',
      title: 'Les aliments',
      fa: 'خوراکی‌ها',
      vocab: [
        { fr: 'le pain', ipa: 'pɛ̃', fa: 'نان', ex: 'Le pain français est bon.', exfa: 'نان فرانسوی خوب است.' },
        { fr: 'le fromage', ipa: 'fʁɔmaʒ', fa: 'پنیر', ex: 'Je mange du fromage.', exfa: 'پنیر می‌خورم.' },
        { fr: 'le lait', ipa: 'lɛ', fa: 'شیر', ex: 'Un café au lait', exfa: 'قهوه با شیر' },
        { fr: 'un œuf / des œufs', ipa: 'œf / ø', fa: 'تخم‌مرغ', ex: 'Je prends des œufs.', exfa: 'تخم‌مرغ می‌گیرم.' },
        { fr: 'la viande', ipa: 'vjɑ̃d', fa: 'گوشت', ex: 'Je ne mange pas de viande.', exfa: 'گوشت نمی‌خورم.' },
        { fr: 'le poulet', ipa: 'pulɛ', fa: 'مرغ', ex: 'Du poulet avec du riz', exfa: 'مرغ با برنج' },
        { fr: 'le poisson', ipa: 'pwasɔ̃', fa: 'ماهی', ex: 'Le poisson est frais.', exfa: 'ماهی تازه است.' },
        { fr: 'le riz', ipa: 'ʁi', fa: 'برنج', ex: 'Les Iraniens mangent du riz.', exfa: 'ایرانی‌ها برنج می‌خورند.' },
        { fr: 'les légumes', ipa: 'leɡym', fa: 'سبزیجات', ex: 'Mange des légumes !', exfa: 'سبزیجات بخور!' },
        { fr: 'les fruits', ipa: 'fʁɥi', fa: 'میوه‌ها', ex: 'J\'adore les fruits.', exfa: 'عاشق میوه‌ام.' },
        { fr: 'une pomme', ipa: 'pɔm', fa: 'سیب', ex: 'Une pomme rouge', exfa: 'یک سیب قرمز' },
        { fr: 'une tomate', ipa: 'tɔmat', fa: 'گوجه‌فرنگی', ex: 'Une salade de tomates', exfa: 'سالاد گوجه' },
        { fr: 'l\'eau', ipa: 'o', fa: 'آب', ex: 'Un verre d\'eau', exfa: 'یک لیوان آب' },
        { fr: 'le thé', ipa: 'te', fa: 'چای', ex: 'Je bois du thé.', exfa: 'چای می‌نوشم.' },
        { fr: 'manger', ipa: 'mɑ̃ʒe', fa: 'خوردن', ex: 'Qu\'est-ce que tu manges ?', exfa: 'چی می‌خوری؟' },
        { fr: 'boire', ipa: 'bwaʁ', fa: 'نوشیدن', ex: 'Je bois de l\'eau.', exfa: 'آب می‌نوشم.' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu manges ?', fa: 'چی می‌خوری؟' },
        { fr: 'J\'aime... / Je n\'aime pas...', fa: 'دوست دارم... / دوست ندارم...' },
        { fr: 'J\'adore le chocolat !', fa: 'عاشق شکلاتم!' },
        { fr: 'Bon appétit !', fa: 'نوش جان!' }
      ],
      grammar: {
        title: 'Les articles partitifs — du / de la / de l\' / des',
        body: 'وقتی از «مقداری از» چیزی حرف می‌زنیم (نه همه‌اش، نه یک عدد کامل)، از حرف تعریف <b>جزئی</b> استفاده می‌کنیم — چیزی که در فارسی معادل ندارد:<br>' +
          '• Je mange <b>du</b> pain. (نان می‌خورم — مقداری نان)<br>' +
          '• Je bois <b>de la</b> soupe. / <b>de l\'</b>eau.<br>' +
          '⚠️ در جمله منفی، همه به <b>de</b> تبدیل می‌شوند: Je ne mange pas <b>de</b> viande.<br>' +
          '⚠️ با فعل‌های علاقه (aimer ،adorer ،détester) حرف تعریف <b>معین</b> می‌آید: J\'aime <b>le</b> fromage.',
        table: {
          head: ['', 'مثبت', 'منفی'],
          rows: [
            ['مذکر', 'du pain', 'pas de pain'],
            ['مؤنث', 'de la viande', 'pas de viande'],
            ['قبل صدادار', 'de l\'eau', 'pas d\'eau'],
            ['جمع', 'des fruits', 'pas de fruits']
          ]
        },
        examples: [
          { fr: 'Je mange du riz avec du poulet.', fa: 'برنج با مرغ می‌خورم.' },
          { fr: 'Elle ne boit pas de lait.', fa: 'او شیر نمی‌نوشد.' },
          { fr: 'J\'adore les légumes !', fa: 'عاشق سبزیجاتم!' }
        ]
      },
      phonetics: {
        title: 'آوای [wa] و [ɥi]',
        body: 'ترکیب <b>oi</b> صدای «وا» می‌دهد و <b>ui</b> صدای خاص «وئی»:',
        items: [
          { fr: 'le poisson', ipa: 'pwasɔ̃', fa: '«پواسون»' },
          { fr: 'boire', ipa: 'bwaʁ', fa: '«بوار»' },
          { fr: 'les fruits', ipa: 'fʁɥi', fa: '«فروئی»' },
          { fr: 'huit', ipa: 'ɥit', fa: '«اوئیت»' },
          { fr: 'trois croissants', ipa: 'tʁwa kʁwasɑ̃', fa: 'سه کروسان' }
        ]
      },
      dialogue: {
        title: 'Au petit-déjeuner',
        lines: [
          { s: 'Emma', fr: 'Qu\'est-ce que tu manges au petit-déjeuner ?', fa: 'صبحانه چی می‌خوری؟' },
          { s: 'Mona', fr: 'Je mange du pain avec du fromage, et je bois du thé.', fa: 'نان با پنیر می‌خورم و چای می‌نوشم.' },
          { s: 'Emma', fr: 'Tu ne bois pas de café ?', fa: 'قهوه نمی‌نوشی؟' },
          { s: 'Mona', fr: 'Non, je n\'aime pas le café. Et toi ?', fa: 'نه، قهوه دوست ندارم. تو چی؟' },
          { s: 'Emma', fr: 'Moi, je prends un croissant et un café au lait. C\'est très français !', fa: 'من کروسان و قهوه با شیر می‌گیرم. خیلی فرانسوی است!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'حرف تعریف جزئی', level: 'easy', fa: 'حرف تعریف جزئی درست (du / de la / de l\' / des):', q: 'Je mange ___ pain.', answer: ['du'] },
        { type: 'fill', skill: 'GR', topic: 'حرف تعریف جزئی', level: 'easy', fa: 'حرف تعریف جزئی درست:', q: 'Elle boit ___ eau.', answer: ["de l'", 'de l'], explain: 'eau با صدادار شروع می‌شود: de l\'eau.' },
        { type: 'fill', skill: 'GR', topic: 'حرف تعریف جزئی', level: 'easy', fa: 'جمله منفی را کامل کن:', q: 'Je ne mange pas ___ viande.', answer: ['de'], explain: 'در منفی، حرف تعریف جزئی به de تبدیل می‌شود.' },
        { type: 'mcq', skill: 'GR', topic: 'حرف تعریف جزئی', level: 'easy', q: 'کدام درست است؟ «عاشق پنیرم»', options: ['J\'adore le fromage.', 'J\'adore du fromage.', 'J\'adore de fromage.', 'J\'adore un fromage.'], correct: 0, explain: 'با فعل‌های علاقه، حرف تعریف معین (le/la/les) می‌آید.' },
        { type: 'match', skill: 'VO', topic: 'غذا و خوراکی', level: 'easy', fa: 'خوراکی‌ها را جور کن:', pairs: [['le poulet', 'مرغ'], ['le poisson', 'ماهی'], ['les légumes', 'سبزیجات'], ['une pomme', 'سیب'], ['le riz', 'برنج']] },
        { type: 'mcq', skill: 'CO', topic: 'غذا و خوراکی', level: 'easy', q: '🎧 گوش کن — او چه چیزی نمی‌خورد؟', audio: 'Je mange du poisson et des légumes, mais je ne mange pas de viande.', audioFa: 'ماهی و سبزیجات می‌خورم، ولی گوشت نمی‌خورم.', options: ['گوشت', 'ماهی', 'سبزیجات', 'نان'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'حرف تعریف جزئی', level: 'medium', text: 'Je bois du thé avec du lait.', trans: 'چای با شیر می‌نوشم.' },
        { type: 'order', skill: 'GR', topic: 'حرف تعریف جزئی', level: 'easy', answer: 'Elle ne boit pas de café.', fa: 'جمله «او قهوه نمی‌نوشد» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'غذا و خوراکی', level: 'easy', text: 'Au petit-déjeuner, je mange du pain et je bois du thé.', fa: 'صبحانه نان می‌خورم و چای می‌نوشم.' },
        { type: 'write', skill: 'PE', topic: 'غذا و خوراکی', level: 'medium', prompt: 'بنویس صبحانه چی می‌خوری و چی می‌نوشی + یک چیزی که دوست نداری. (۳ جمله)', min: 10, sample: 'Au petit-déjeuner, je mange du pain avec du fromage. Je bois du thé. Je n\'aime pas le café.' }
      ]
    },
    {
      id: 'u3l2',
      title: 'Faire les courses',
      fa: 'خرید روزانه',
      vocab: [
        { fr: 'les courses', ipa: 'kuʁs', fa: 'خرید (روزانه)', ex: 'Je fais les courses.', exfa: 'خرید می‌کنم.' },
        { fr: 'un marché', ipa: 'maʁʃe', fa: 'بازار', ex: 'Le marché du dimanche', exfa: 'بازار یکشنبه' },
        { fr: 'une boulangerie', ipa: 'bulɑ̃ʒʁi', fa: 'نانوایی', ex: 'La boulangerie du quartier', exfa: 'نانوایی محله' },
        { fr: 'acheter', ipa: 'aʃte', fa: 'خریدن', ex: 'J\'achète des fruits.', exfa: 'میوه می‌خرم.' },
        { fr: 'coûter', ipa: 'kute', fa: 'قیمت داشتن', ex: 'Ça coûte combien ?', exfa: 'چقدر می‌شود؟' },
        { fr: 'un kilo de', ipa: 'kilo', fa: 'یک کیلو', ex: 'Un kilo de tomates', exfa: 'یک کیلو گوجه' },
        { fr: 'un litre de', ipa: 'litʁ', fa: 'یک لیتر', ex: 'Un litre de lait', exfa: 'یک لیتر شیر' },
        { fr: 'une bouteille de', ipa: 'butɛj', fa: 'یک بطری', ex: 'Une bouteille d\'eau', exfa: 'یک بطری آب' },
        { fr: 'un morceau de', ipa: 'mɔʁso', fa: 'یک تکه', ex: 'Un morceau de fromage', exfa: 'یک تکه پنیر' },
        { fr: 'beaucoup de', ipa: 'boku', fa: 'مقدار زیادی', ex: 'Beaucoup de fruits', exfa: 'کلی میوه' },
        { fr: 'un peu de', ipa: 'œ̃ pø', fa: 'کمی', ex: 'Un peu de riz', exfa: 'کمی برنج' },
        { fr: 'un euro', ipa: 'øʁo', fa: 'یورو', ex: 'Ça coûte dix euros.', exfa: 'ده یورو می‌شود.' },
        { fr: 'soixante-dix', ipa: 'swasɑ̃tdis', fa: '۷۰ هفتاد', ex: '70 = 60+10 !', exfa: '' },
        { fr: 'quatre-vingts', ipa: 'katʁəvɛ̃', fa: '۸۰ هشتاد', ex: '80 = 4×20 !', exfa: '' },
        { fr: 'quatre-vingt-dix', ipa: 'katʁəvɛ̃dis', fa: '۹۰ نود', ex: '90 = 4×20+10 !', exfa: '' },
        { fr: 'cent', ipa: 'sɑ̃', fa: '۱۰۰ صد', ex: 'Cent euros', exfa: 'صد یورو' }
      ],
      phrases: [
        { fr: 'Vous désirez ?', fa: 'چی می‌خواهید؟ (فروشنده)' },
        { fr: 'Je voudrais un kilo de pommes.', fa: 'یک کیلو سیب می‌خواهم.' },
        { fr: 'C\'est combien ? / Ça coûte combien ?', fa: 'چند است؟ / چقدر می‌شود؟' },
        { fr: 'Et avec ça ?', fa: 'دیگر چی؟ (فروشنده)' },
        { fr: 'C\'est tout, merci.', fa: 'همین، ممنون.' }
      ],
      grammar: {
        title: 'Les quantités + اعداد ۷۰ تا ۱۰۰',
        body: 'بعد از واژه‌های مقدار، همیشه <b>de</b> می‌آید (بدون حرف تعریف):<br>' +
          'un kilo <b>de</b> tomates، beaucoup <b>de</b> fruits، une bouteille <b>d\'</b>eau<br><br>' +
          'اعداد فرانسه از ۷۰ به بعد عجیب می‌شوند! 😅<br>' +
          '• 70 = soixante-dix (۶۰+۱۰)، 71 = soixante et onze (۶۰+۱۱)... 75 = soixante-quinze<br>' +
          '• 80 = quatre-vingts (۴×۲۰)، 81 = quatre-vingt-un<br>' +
          '• 90 = quatre-vingt-dix (۴×۲۰+۱۰)، 95 = quatre-vingt-quinze',
        table: {
          head: ['عدد', 'فرانسه', 'منطقش'],
          rows: [
            ['72', 'soixante-douze', '60+12'],
            ['80', 'quatre-vingts', '4×20'],
            ['85', 'quatre-vingt-cinq', '4×20+5'],
            ['91', 'quatre-vingt-onze', '4×20+11'],
            ['100', 'cent', '—']
          ]
        },
        examples: [
          { fr: 'Je voudrais un kilo de tomates et un peu de fromage.', fa: 'یک کیلو گوجه و کمی پنیر می‌خواهم.' },
          { fr: 'Ça coûte quatre-vingt-quinze euros.', fa: 'نود و پنج یورو می‌شود.' }
        ]
      },
      phonetics: {
        title: 'اتصال اعداد با euros',
        body: 'اعداد با euro اتصال (liaison) می‌گیرند — به صدای «ز» و «ت» دقت کن:',
        items: [
          { fr: 'deux euros', ipa: 'dø‿zøʁo', fa: '«دو زورو»' },
          { fr: 'trois euros', ipa: 'tʁwa‿zøʁo', fa: '«تروا زورو»' },
          { fr: 'six euros', ipa: 'si‿zøʁo', fa: '«سی زورو»' },
          { fr: 'vingt euros', ipa: 'vɛ̃‿tøʁo', fa: '«ون تورو»' },
          { fr: 'cent euros', ipa: 'sɑ̃‿tøʁo', fa: '«سان تورو»' }
        ]
      },
      dialogue: {
        title: 'Au marché',
        lines: [
          { s: 'Vendeur', fr: 'Bonjour madame ! Vous désirez ?', fa: 'سلام خانم! چی می‌خواهید؟' },
          { s: 'Mona', fr: 'Bonjour ! Je voudrais un kilo de tomates, s\'il vous plaît.', fa: 'سلام! یک کیلو گوجه می‌خواهم، لطفاً.' },
          { s: 'Vendeur', fr: 'Voilà ! Et avec ça ?', fa: 'بفرمایید! دیگر چی؟' },
          { s: 'Mona', fr: 'Un morceau de fromage et une bouteille d\'eau.', fa: 'یک تکه پنیر و یک بطری آب.' },
          { s: 'Vendeur', fr: 'C\'est tout ?', fa: 'همین؟' },
          { s: 'Mona', fr: 'Oui, c\'est tout. Ça coûte combien ?', fa: 'بله، همین. چقدر می‌شود؟' },
          { s: 'Vendeur', fr: 'Ça fait douze euros cinquante.', fa: 'دوازده یورو و پنجاه می‌شود.' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — قیمت چند یورو است؟', audio: 'Ça coûte soixante-quinze euros.', audioFa: 'هفتادوپنج یورو می‌شود.', options: ['75', '65', '85', '95'], correct: 0 },
        { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — قیمت چند یورو است؟', audio: 'Ça fait quatre-vingt-onze euros.', audioFa: 'نودویک یورو می‌شود.', options: ['91', '81', '80', '99'], correct: 0, explain: 'quatre-vingt-onze = ۴×۲۰+۱۱ = ۹۱' },
        { type: 'fill', skill: 'GR', topic: 'کمیت‌ها', level: 'easy', fa: 'کامل کن:', q: 'Je voudrais un kilo ___ pommes.', answer: ['de'], explain: 'بعد از واژه‌های مقدار همیشه de می‌آید.' },
        { type: 'fill', skill: 'VO', topic: 'اعداد', level: 'easy', fa: 'عدد ۸۰ را به حروف بنویس:', q: '80 = ___', answer: ['quatre-vingts', 'quatre vingts'], explain: '80 = quatre-vingts با s. ولی 81 بدون s: quatre-vingt-un.' },
        { type: 'match', skill: 'VO', topic: 'کمیت‌ها', level: 'easy', fa: 'جور کن:', pairs: [['une bouteille d\'eau', 'یک بطری آب'], ['un morceau de fromage', 'یک تکه پنیر'], ['beaucoup de fruits', 'کلی میوه'], ['un peu de riz', 'کمی برنج']] },
        { type: 'dictation', skill: 'CO', topic: 'خرید', level: 'medium', text: 'Je voudrais un litre de lait.', trans: 'یک لیتر شیر می‌خواهم.' },
        { type: 'order', skill: 'GR', topic: 'خرید', level: 'easy', answer: 'Ça coûte combien s\'il vous plaît ?', fa: 'سؤال «چقدر می‌شود لطفاً؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'خرید', level: 'easy', text: 'Bonjour ! Je voudrais un kilo de tomates, s\'il vous plaît.', fa: 'سلام! یک کیلو گوجه می‌خواهم لطفاً.' },
        { type: 'mcq', skill: 'CE', topic: 'خرید', level: 'easy', q: 'لیست خرید را بخوان — چند قلم می‌خواهد بخرد؟', qfr: 'Courses : 1 kilo de riz, 6 œufs, du fromage, 2 bouteilles d\'eau, un peu de fruits', options: ['۵ قلم', '۳ قلم', '۶ قلم', '۴ قلم'], correct: 0, frOptions: false }
      ]
    },
    {
      id: 'u3l3',
      title: 'Au restaurant',
      fa: 'در رستوران',
      vocab: [
        { fr: 'la carte', ipa: 'kaʁt', fa: 'منو', ex: 'La carte, s\'il vous plaît.', exfa: 'منو، لطفاً.' },
        { fr: 'une entrée', ipa: 'ɑ̃tʁe', fa: 'پیش‌غذا', ex: 'Comme entrée, une salade.', exfa: 'برای پیش‌غذا، سالاد.' },
        { fr: 'un plat', ipa: 'pla', fa: 'غذای اصلی', ex: 'Le plat du jour', exfa: 'غذای روز' },
        { fr: 'un dessert', ipa: 'desɛʁ', fa: 'دسر', ex: 'Comme dessert, une glace.', exfa: 'برای دسر، بستنی.' },
        { fr: 'une salade', ipa: 'salad', fa: 'سالاد', ex: 'Une salade de tomates', exfa: 'سالاد گوجه' },
        { fr: 'une soupe', ipa: 'sup', fa: 'سوپ', ex: 'Une soupe de légumes', exfa: 'سوپ سبزیجات' },
        { fr: 'une glace', ipa: 'ɡlas', fa: 'بستنی', ex: 'Une glace au chocolat', exfa: 'بستنی شکلاتی' },
        { fr: 'prendre', ipa: 'pʁɑ̃dʁ', fa: 'گرفتن / خوردن (سفارش)', ex: 'Je prends le poulet.', exfa: 'مرغ می‌گیرم.' },
        { fr: 'commander', ipa: 'kɔmɑ̃de', fa: 'سفارش دادن', ex: 'Vous voulez commander ?', exfa: 'می‌خواهید سفارش بدهید؟' },
        { fr: 'l\'addition', ipa: 'adisjɔ̃', fa: 'صورت‌حساب', ex: 'L\'addition, s\'il vous plaît !', exfa: 'صورت‌حساب، لطفاً!' },
        { fr: 'un serveur / une serveuse', ipa: 'sɛʁvœʁ', fa: 'گارسون', ex: 'Le serveur est sympa.', exfa: 'گارسون مهربان است.' },
        { fr: 'délicieux / délicieuse', ipa: 'delisjø', fa: 'خوشمزه', ex: 'C\'est délicieux !', exfa: 'خوشمزه است!' }
      ],
      phrases: [
        { fr: 'Vous avez choisi ?', fa: 'انتخاب کردید؟' },
        { fr: 'Je vais prendre...', fa: 'من ... می‌گیرم' },
        { fr: 'Comme entrée / plat / dessert...', fa: 'برای پیش‌غذا / غذا / دسر...' },
        { fr: 'C\'était très bon !', fa: 'خیلی خوب بود!' },
        { fr: 'L\'addition, s\'il vous plaît.', fa: 'صورت‌حساب، لطفاً.' }
      ],
      grammar: {
        title: 'Le verbe « prendre » + « boire »',
        body: 'فعل <b>prendre</b> (گرفتن) در رستوران یعنی «سفارش دادن / خوردن»: Je prends le poisson. فعل بی‌قاعده است.<br>' +
          'فعل <b>boire</b> (نوشیدن) هم بی‌قاعده است.<br>' +
          '💡 «Je voudrais» (می‌خواستم/می‌خواهم) شکل مؤدبانه‌ی vouloir است — در مغازه و رستوران همیشه از این استفاده کن.',
        table: {
          head: ['ضمیر', 'prendre', 'boire'],
          rows: [
            ['je', 'prends', 'bois'],
            ['tu', 'prends', 'bois'],
            ['il / elle / on', 'prend', 'boit'],
            ['nous', 'prenons', 'buvons'],
            ['vous', 'prenez', 'buvez'],
            ['ils / elles', 'prennent', 'boivent']
          ]
        },
        examples: [
          { fr: 'Je prends le plat du jour.', fa: 'غذای روز را می‌گیرم.' },
          { fr: 'Qu\'est-ce que vous buvez ?', fa: 'چی می‌نوشید؟' },
          { fr: 'Nous prenons deux cafés.', fa: 'دو قهوه می‌گیریم.' }
        ]
      },
      phonetics: {
        title: 'آوای [ø] و [œ]',
        body: 'ترکیب <b>eu</b> صدایی بین «اُ» و «اِ» دارد — لب گرد، زبان جلو:',
        items: [
          { fr: 'un serveur', ipa: 'sɛʁvœʁ', fa: 'گارسون' },
          { fr: 'deux', ipa: 'dø', fa: 'دو' },
          { fr: 'je veux', ipa: 'ʒə vø', fa: 'می‌خواهم' },
          { fr: 'délicieux', ipa: 'delisjø', fa: 'خوشمزه' },
          { fr: 'un œuf', ipa: 'œf', fa: 'تخم‌مرغ' }
        ]
      },
      dialogue: {
        title: 'Au restaurant « Le Petit Jardin »',
        lines: [
          { s: 'Serveur', fr: 'Bonsoir ! Vous avez choisi ?', fa: 'شب بخیر! انتخاب کردید؟' },
          { s: 'Mona', fr: 'Oui. Comme entrée, je prends la soupe de légumes.', fa: 'بله. برای پیش‌غذا سوپ سبزیجات می‌گیرم.' },
          { s: 'Serveur', fr: 'Très bien. Et comme plat ?', fa: 'خیلی خوب. و غذای اصلی؟' },
          { s: 'Mona', fr: 'Le poulet avec du riz, s\'il vous plaît.', fa: 'مرغ با برنج، لطفاً.' },
          { s: 'Serveur', fr: 'Et qu\'est-ce que vous buvez ?', fa: 'و چی می‌نوشید؟' },
          { s: 'Mona', fr: 'De l\'eau, merci.', fa: 'آب، ممنون.' },
          { s: 'Serveur', fr: 'Parfait ! Et comme dessert ?', fa: 'عالی! و دسر؟' },
          { s: 'Mona', fr: 'Une glace au chocolat. J\'adore le chocolat !', fa: 'بستنی شکلاتی. عاشق شکلاتم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل prendre', level: 'easy', fa: 'prendre را صرف کن:', q: 'Je ___ le poisson.', answer: ['prends'] },
        { type: 'fill', skill: 'GR', topic: 'فعل prendre', level: 'easy', fa: 'prendre را صرف کن:', q: 'Nous ___ deux cafés.', answer: ['prenons'] },
        { type: 'mcq', skill: 'GR', topic: 'رستوران', level: 'easy', q: 'مؤدبانه‌ترین راه سفارش دادن:', options: ['Je voudrais le poulet, s\'il vous plaît.', 'Donne le poulet !', 'Le poulet !', 'Je veux poulet.'], correct: 0 },
        { type: 'mcq', skill: 'CO', topic: 'رستوران', level: 'easy', q: '🎧 گوش کن — او برای دسر چه می‌گیرد؟', audio: 'Comme dessert, je vais prendre une glace au chocolat.', audioFa: 'برای دسر، بستنی شکلاتی می‌گیرم.', options: ['بستنی شکلاتی', 'سالاد میوه', 'قهوه', 'سوپ'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'رستوران', level: 'easy', fa: 'جور کن:', pairs: [['une entrée', 'پیش‌غذا'], ['un plat', 'غذای اصلی'], ['un dessert', 'دسر'], ['l\'addition', 'صورت‌حساب']] },
        { type: 'mcq', skill: 'CE', topic: 'رستوران', level: 'easy', q: 'منو را بخوان — کدام غذا در منو نیست؟', qfr: 'MENU — Entrées : soupe, salade de tomates | Plats : poulet-riz, poisson grillé | Desserts : glace, fruits', options: ['پیتزا', 'سوپ', 'ماهی', 'بستنی'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'فعل boire', level: 'medium', text: 'Qu\'est-ce que vous buvez ?', trans: 'چی می‌نوشید؟' },
        { type: 'order', skill: 'GR', topic: 'رستوران', level: 'easy', answer: 'Comme plat je prends le poulet.', fa: 'جمله «برای غذای اصلی مرغ می‌گیرم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'رستوران', level: 'easy', text: 'L\'addition, s\'il vous plaît. C\'était délicieux !', fa: 'صورت‌حساب لطفاً. خوشمزه بود!' },
        { type: 'write', skill: 'PE', topic: 'رستوران', level: 'medium', prompt: 'در رستوران هستی: پیش‌غذا، غذای اصلی و نوشیدنی سفارش بده. (۳ جمله)', min: 10, sample: 'Comme entrée, je prends la salade. Comme plat, je voudrais le poisson avec du riz. Et je bois de l\'eau, s\'il vous plaît.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'رستوران', level: 'easy', q: '🎧 گوش کن — مشتری چه سفارش می‌دهد؟', audio: 'Je voudrais la soupe, le poisson avec des légumes, et de l\'eau, s\'il vous plaît.', audioFa: 'سوپ، ماهی با سبزیجات و آب می‌خواهم، لطفاً.', options: ['سوپ، ماهی با سبزیجات و آب', 'مرغ با برنج و چای', 'سالاد و بستنی', 'فقط قهوه'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — صورت‌حساب چقدر شد؟', audio: 'Ça fait soixante-dix-huit euros.', audioFa: 'هفتادوهشت یورو می‌شود.', options: ['78', '68', '88', '98'], correct: 0 },
      { type: 'mcq', skill: 'CE', topic: 'غذا و خوراکی', level: 'easy', q: 'متن را بخوان — لوکا چه چیزی نمی‌خورد؟', qfr: 'Luca est végétarien : il mange des légumes, du riz, des œufs et du fromage, mais il ne mange pas de viande et pas de poisson.', options: ['گوشت و ماهی', 'تخم‌مرغ و پنیر', 'برنج', 'سبزیجات'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'حرف تعریف جزئی', level: 'easy', fa: 'کامل کن:', q: 'Le matin, je bois ___ café.', answer: ['du'] },
      { type: 'fill', skill: 'GR', topic: 'حرف تعریف جزئی', level: 'easy', fa: 'منفی کن:', q: 'Il ne mange pas ___ fromage.', answer: ['de'] },
      { type: 'fill', skill: 'GR', topic: 'فعل prendre', level: 'easy', fa: 'prendre را صرف کن:', q: 'Ils ___ le plat du jour.', answer: ['prennent'] },
      { type: 'fill', skill: 'VO', topic: 'اعداد', level: 'easy', fa: 'به حروف بنویس:', q: '90 = ___', answer: ['quatre-vingt-dix', 'quatre vingt dix'] },
      { type: 'match', skill: 'VO', topic: 'غذا و خوراکی', level: 'easy', fa: 'جور کن:', pairs: [['le lait', 'شیر'], ['un œuf', 'تخم‌مرغ'], ['l\'eau', 'آب'], ['le pain', 'نان']] },
      { type: 'dictation', skill: 'CO', topic: 'خرید', level: 'medium', text: 'Je voudrais un kilo de pommes et un morceau de fromage.', trans: 'یک کیلو سیب و یک تکه پنیر می‌خواهم.' },
      { type: 'order', skill: 'GR', topic: 'حرف تعریف جزئی', level: 'easy', answer: 'Je mange du riz avec du poulet.', fa: 'جمله «برنج با مرغ می‌خورم» را بساز:' },
      { type: 'speak', skill: 'PO', topic: 'رستوران', level: 'easy', text: 'Bonsoir ! Comme plat, je voudrais le poulet avec du riz, et de l\'eau, s\'il vous plaît.', fa: 'در رستوران سفارش بده' },
      { type: 'write', skill: 'PE', topic: 'غذا و خوراکی', level: 'medium', prompt: 'عادت‌های غذایی‌ات را بنویس: صبحانه، ناهار و یک غذایی که عاشقش هستی. (۴ جمله)', min: 14, sample: 'Au petit-déjeuner, je mange du pain avec du fromage et je bois du thé. À midi, je mange du riz avec du poulet. J\'adore les fruits. Je n\'aime pas le café.' }
    ]
  }
};

/* ===== واحد ۱۲: C'était bien — خوب بود ===== */
EDITO.units[12] = {
  id: 12,
  title: 'C\'était bien',
  fa: 'خوب بود',
  theme: 'خاطره‌ها و imparfait، بیان نظر، و مرور کامل سطح A1',
  culture: {
    title: 'بعد از A1: مسیر رسمی زبان فرانسه 🎓',
    body: 'سطوح رسمی زبان فرانسه (طبق چارچوب اروپایی CEFR) این‌طور ادامه پیدا می‌کنند: A1 (همین دوره) → A2 → B1 → B2 → C1 → C2. آزمون‌های رسمی DELF این سطوح را تا B2 گواهی می‌دهند و DALF سطوح C1/C2 را. بسیاری از دانشگاه‌ها و شرکت‌های فرانسوی‌زبان، B2 را حداقل سطح لازم برای تحصیل یا کار می‌دانند. مؤسسه‌ی Alliance Française هم در بیشتر کشورها دوره و آزمون رسمی برگزار می‌کند.'
  },
  lessons: [
    {
      id: 'u12l1',
      title: 'Les souvenirs',
      fa: 'خاطره‌ها — آشنایی با imparfait',
      vocab: [
        { fr: 'un souvenir', ipa: 'suvniʁ', fa: 'خاطره', ex: 'J\'ai de bons souvenirs.', exfa: 'خاطره‌های خوبی دارم.' },
        { fr: 'c\'était', ipa: 'setɛ', fa: 'بود (توصیف گذشته)', ex: 'C\'était formidable !', exfa: 'فوق‌العاده بود!' },
        { fr: 'il y avait', ipa: 'il javɛ', fa: 'بود / وجود داشت', ex: 'Il y avait beaucoup de monde.', exfa: 'کلی آدم بود.' },
        { fr: 'il faisait', ipa: 'il fəzɛ', fa: 'هوا ... بود', ex: 'Il faisait beau.', exfa: 'هوا خوب بود.' },
        { fr: 'l\'enfance', ipa: 'ɑ̃fɑ̃s', fa: 'کودکی', ex: 'Les souvenirs d\'enfance', exfa: 'خاطره‌های کودکی' },
        { fr: 'quand j\'étais petit(e)', ipa: 'kɑ̃ ʒetɛ pəti', fa: 'وقتی بچه بودم', ex: 'Quand j\'étais petite, j\'habitais à Chiraz.', exfa: 'وقتی بچه بودم در شیراز زندگی می‌کردم.' },
        { fr: 'se souvenir de', ipa: 'sə suvniʁ', fa: 'به یاد آوردن', ex: 'Je me souviens de ce jour.', exfa: 'آن روز را یادم هست.' },
        { fr: 'le monde', ipa: 'mɔ̃d', fa: 'مردم / دنیا', ex: 'Il y avait du monde.', exfa: 'شلوغ بود.' },
        { fr: 'une ambiance', ipa: 'ɑ̃bjɑ̃s', fa: 'حال‌وهوا / جو', ex: 'L\'ambiance était super.', exfa: 'جوّش عالی بود.' },
        { fr: 'inoubliable', ipa: 'inublijabl', fa: 'فراموش‌نشدنی', ex: 'Un voyage inoubliable', exfa: 'یک سفر فراموش‌نشدنی' },
        { fr: 'avant', ipa: 'avɑ̃', fa: 'قبلاً / قبل', ex: 'Avant, j\'habitais ici.', exfa: 'قبلاً اینجا زندگی می‌کردم.' },
        { fr: 'maintenant', ipa: 'mɛ̃tnɑ̃', fa: 'الان', ex: 'Maintenant, tout est différent.', exfa: 'الان همه‌چیز فرق کرده.' }
      ],
      phrases: [
        { fr: 'C\'était comment ?', fa: 'چطور بود؟' },
        { fr: 'C\'était génial / super / nul.', fa: 'محشر / عالی / افتضاح بود.' },
        { fr: 'Je me souviens...', fa: 'یادم هست...' },
        { fr: 'Quel bon souvenir !', fa: 'چه خاطره خوبی!' }
      ],
      grammar: {
        title: 'L\'imparfait — découverte',
        body: 'برای <b>توصیف</b> در گذشته (حال‌وهوا، هوا، احساس) از imparfait استفاده می‌کنیم — در سطح A1 این چهار تا را یاد بگیر:<br>' +
          '• <b>c\'était</b> + صفت: C\'était super ! (عالی بود)<br>' +
          '• <b>il y avait</b> + اسم: Il y avait de la musique. (موسیقی بود)<br>' +
          '• <b>il faisait</b> + هوا: Il faisait chaud. (هوا گرم بود)<br>' +
          '• <b>j\'étais / j\'avais</b>: J\'étais content. J\'avais dix ans. (خوشحال بودم / ده سالم بود)<br><br>' +
          '📌 فرق با passé composé: کارِ انجام‌شده → passé composé (J\'ai visité Rome) ولی توصیف و پس‌زمینه → imparfait (C\'était magnifique)',
        examples: [
          { fr: 'On a fait une fête. Il y avait trente personnes, c\'était génial !', fa: 'مهمانی گرفتیم. سی نفر بودند، محشر بود!' },
          { fr: 'Quand j\'étais petite, j\'habitais à Chiraz.', fa: 'وقتی بچه بودم در شیراز زندگی می‌کردم.' }
        ]
      },
      phonetics: {
        title: 'پایانه -ait',
        body: 'پایانه imparfait همیشه [ɛ] تلفظ می‌شود:',
        items: [
          { fr: 'c\'était', ipa: 'setɛ', fa: '«سِتِه»' },
          { fr: 'il faisait', ipa: 'il fəzɛ', fa: '«ایل فُزِه»' },
          { fr: 'il y avait', ipa: 'il javɛ', fa: '«ایل یاوِه»' },
          { fr: 'j\'étais', ipa: 'ʒetɛ', fa: '«ژِتِه»' }
        ]
      },
      dialogue: {
        title: 'Souvenirs de fête',
        lines: [
          { s: 'Sara', fr: 'Alors, la fête de samedi ? C\'était comment ?', fa: 'خب، مهمانی شنبه؟ چطور بود؟' },
          { s: 'Mona', fr: 'C\'était génial ! Il y avait tous nos amis.', fa: 'محشر بود! همه دوستان‌مان بودند.' },
          { s: 'Sara', fr: 'Vous avez dansé ?', fa: 'رقصیدید؟' },
          { s: 'Mona', fr: 'Oui, on a dansé toute la nuit ! Il y avait de la bonne musique et l\'ambiance était super.', fa: 'آره، تمام شب رقصیدیم! موسیقی خوبی بود و جو عالی بود.' },
          { s: 'Sara', fr: 'Et le gâteau de Karim ?', fa: 'و کیک کریم؟' },
          { s: 'Mona', fr: 'Délicieux ! Vraiment, c\'était une soirée inoubliable.', fa: 'خوشمزه! واقعاً شب فراموش‌نشدنی‌ای بود.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'imparfait', level: 'hard', fa: 'توصیف گذشته:', q: 'La fête ? C\'___ génial !', answer: ['était', 'etait'] },
        { type: 'fill', skill: 'GR', topic: 'imparfait', level: 'hard', fa: 'کامل کن:', q: 'Il y ___ beaucoup de monde au concert.', answer: ['avait'] },
        { type: 'mcq', skill: 'GR', topic: 'imparfait', level: 'medium', q: '«هوا سرد بود»:', options: ['Il faisait froid.', 'Il fait froid.', 'Il a fait froids.', 'Il était froid.'], correct: 0 },
        { type: 'mcq', skill: 'GR', topic: 'imparfait', level: 'medium', q: 'کدام جمله توصیف است (imparfait می‌خواهد)؟', options: ['جو عالی بود', 'دیروز رم را دیدم', 'عکس گرفتم', 'کیک خریدم'], correct: 0, frOptions: false, explain: 'توصیف و پس‌زمینه → imparfait، عملِ انجام‌شده → passé composé.' },
        { type: 'mcq', skill: 'CO', topic: 'imparfait', level: 'medium', q: '🎧 گوش کن — مهمانی چطور بود؟', audio: 'C\'était une soirée super ! Il y avait de la musique et on a dansé jusqu\'à minuit.', audioFa: 'شب فوق‌العاده‌ای بود! موسیقی بود و تا نیمه‌شب رقصیدیم.', options: ['عالی، با موسیقی و رقص', 'خسته‌کننده', 'شلوغ و بد', 'کوتاه'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'imparfait', level: 'hard', text: 'C\'était une journée inoubliable.', trans: 'روز فراموش‌نشدنی‌ای بود.' },
        { type: 'order', skill: 'GR', topic: 'imparfait', level: 'hard', answer: 'Il y avait beaucoup de monde.', fa: 'جمله «کلی آدم بود» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'imparfait', level: 'hard', text: 'Quand j\'étais petite, j\'habitais chez mes grands-parents.', fa: 'از کودکی‌ات بگو' },
        { type: 'write', skill: 'PE', topic: 'imparfait', level: 'hard', prompt: 'یک خاطره خوب را تعریف کن: چه بود، کجا، جو چطور بود؟ (۳-۴ جمله — ترکیب passé composé و c\'était/il y avait)', min: 14, sample: 'L\'année dernière, on a fait une fête pour l\'anniversaire de ma mère. Il y avait toute la famille. On a mangé un grand gâteau et on a dansé. C\'était une soirée inoubliable !' }
      ]
    },
    {
      id: 'u12l2',
      title: 'Donner son avis',
      fa: 'بیان نظر',
      vocab: [
        { fr: 'un avis', ipa: 'avi', fa: 'نظر', ex: 'À mon avis, c\'est super.', exfa: 'به نظر من عالی است.' },
        { fr: 'penser', ipa: 'pɑ̃se', fa: 'فکر کردن', ex: 'Qu\'est-ce que tu en penses ?', exfa: 'نظرت چیست؟' },
        { fr: 'trouver', ipa: 'tʁuve', fa: 'به نظر رسیدن (نظر دادن)', ex: 'Je trouve ça intéressant.', exfa: 'به نظرم جالب است.' },
        { fr: 'adorer', ipa: 'adɔʁe', fa: 'عاشق بودن', ex: 'J\'ai adoré ce film !', exfa: 'عاشق این فیلم شدم!' },
        { fr: 'détester', ipa: 'detɛste', fa: 'متنفر بودن', ex: 'Je déteste attendre.', exfa: 'از منتظر ماندن متنفرم.' },
        { fr: 'préférer', ipa: 'pʁefeʁe', fa: 'ترجیح دادن', ex: 'Je préfère le théâtre.', exfa: 'تئاتر را ترجیح می‌دهم.' },
        { fr: 'génial / géniale', ipa: 'ʒenjal', fa: 'محشر', ex: 'C\'est génial !', exfa: 'محشر است!' },
        { fr: 'nul / nulle', ipa: 'nyl', fa: 'افتضاح', ex: 'Ce film est nul.', exfa: 'این فیلم افتضاح است.' },
        { fr: 'ennuyeux / ennuyeuse', ipa: 'ɑ̃nɥijø', fa: 'خسته‌کننده', ex: 'C\'était un peu ennuyeux.', exfa: 'کمی خسته‌کننده بود.' },
        { fr: 'parce que', ipa: 'paʁs kə', fa: 'چون / زیرا', ex: 'J\'aime ce café parce que c\'est calme.', exfa: 'این کافه را دوست دارم چون آرام است.' },
        { fr: 'être d\'accord', ipa: 'dakɔʁ', fa: 'موافق بودن', ex: 'Je suis d\'accord avec toi.', exfa: 'با تو موافقم.' },
        { fr: 'avoir raison / tort', ipa: 'ʁɛzɔ̃ / tɔʁ', fa: 'حق داشتن / اشتباه کردن', ex: 'Tu as raison !', exfa: 'حق با توست!' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu en penses ?', fa: 'نظرت چیست؟' },
        { fr: 'À mon avis...', fa: 'به نظر من...' },
        { fr: 'Moi aussi ! / Moi non plus !', fa: 'من هم! / من هم نه!' },
        { fr: 'Pas du tout !', fa: 'اصلاً!' }
      ],
      grammar: {
        title: 'Exprimer son opinion + pourquoi / parce que',
        body: 'راه‌های بیان نظر:<br>' +
          '• <b>Je pense que</b>... (فکر می‌کنم که...)<br>' +
          '• <b>Je trouve que</b>... / Je trouve ça + صفت (به نظرم...)<br>' +
          '• <b>À mon avis</b>... (به نظر من...)<br>' +
          'دلیل با <b>pourquoi</b> (چرا؟) پرسیده و با <b>parce que</b> (چون) جواب داده می‌شود.<br>' +
          'موافقت/مخالفت: Je suis d\'accord. / Je ne suis pas d\'accord.',
        examples: [
          { fr: 'Pourquoi tu aimes ce film ? — Parce que c\'est drôle !', fa: 'چرا این فیلم را دوست داری؟ — چون بامزه است!' },
          { fr: 'Je trouve que le français est une belle langue.', fa: 'به نظرم فرانسه زبان زیبایی است.' }
        ]
      },
      phonetics: {
        title: 'واکنش‌های احساسی',
        body: 'با آهنگ درست بگو:',
        items: [
          { fr: 'C\'est génial !', ipa: '↗', fa: 'با هیجان!' },
          { fr: 'C\'est nul...', ipa: '↘', fa: 'با ناامیدی' },
          { fr: 'Pas du tout !', ipa: '', fa: 'قاطع' },
          { fr: 'Tu as raison.', ipa: '', fa: 'آرام' }
        ]
      },
      dialogue: {
        title: 'Après le cinéma',
        lines: [
          { s: 'Karim', fr: 'Alors, ce film ? Qu\'est-ce que tu en penses ?', fa: 'خب، این فیلم؟ نظرت چیست؟' },
          { s: 'Mona', fr: 'J\'ai adoré ! Je trouve que l\'histoire est géniale.', fa: 'عاشقش شدم! به نظرم داستانش محشر است.' },
          { s: 'Karim', fr: 'Ah bon ? Moi, j\'ai trouvé ça un peu ennuyeux.', fa: 'جدی؟ من کمی خسته‌کننده دیدمش.' },
          { s: 'Mona', fr: 'Pas du tout ! Pourquoi tu dis ça ?', fa: 'اصلاً! چرا این را می‌گویی؟' },
          { s: 'Karim', fr: 'Parce que c\'était trop long ! Deux heures et demie !', fa: 'چون خیلی طولانی بود! دو ساعت و نیم!' },
          { s: 'Mona', fr: 'Bon, là, tu as raison. Mais les acteurs étaient formidables !', fa: 'خب، اینجا حق با توست. ولی بازیگرها فوق‌العاده بودند!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'بیان نظر', level: 'hard', fa: '«چون» را بگذار:', q: 'J\'aime ce café ___ c\'est calme.', answer: ['parce que', 'parce qu'] },
        { type: 'mcq', skill: 'GR', topic: 'بیان نظر', level: 'medium', q: '«به نظرم جالب است»:', options: ['Je trouve ça intéressant.', 'Je trouve intéressant ça.', 'Ça trouve intéressant.', 'Je suis intéressant.'], correct: 0 },
        { type: 'fill', skill: 'GR', topic: 'بیان نظر', level: 'hard', fa: 'موافقت کن:', q: 'Tu as raison, je suis ___ avec toi.', answer: ["d'accord", 'd accord', 'daccord'] },
        { type: 'match', skill: 'VO', topic: 'بیان نظر', level: 'medium', fa: 'جور کن:', pairs: [['génial', 'محشر'], ['nul', 'افتضاح'], ['ennuyeux', 'خسته‌کننده'], ['avoir raison', 'حق داشتن']] },
        { type: 'mcq', skill: 'CO', topic: 'بیان نظر', level: 'medium', q: '🎧 گوش کن — نظرش درباره کتاب چیست؟', audio: 'J\'ai détesté ce livre. C\'était trop long et vraiment ennuyeux.', audioFa: 'از این کتاب متنفر شدم. خیلی طولانی و واقعاً خسته‌کننده بود.', options: ['متنفر بود — طولانی و خسته‌کننده', 'عاشقش شد', 'به نظرش بامزه بود', 'نصفش را خواند'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'بیان نظر', level: 'hard', text: 'Qu\'est-ce que tu en penses ?', trans: 'نظرت چیست؟' },
        { type: 'order', skill: 'GR', topic: 'بیان نظر', level: 'hard', answer: 'Je trouve que ce film est génial.', fa: 'جمله «به نظرم این فیلم محشر است» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'بیان نظر', level: 'hard', text: 'À mon avis, le français est une belle langue, mais c\'est difficile !', fa: 'نظرت را درباره زبان فرانسه بگو' },
        { type: 'write', skill: 'PE', topic: 'بیان نظر', level: 'hard', prompt: 'درباره آخرین فیلمی که دیدی نظر بده: چطور بود و چرا؟ (۳ جمله با parce que)', min: 12, sample: 'Le week-end dernier, j\'ai regardé un film iranien. Je trouve que c\'était génial parce que l\'histoire était très intéressante. Mais mon mari a trouvé ça un peu long !' }
      ]
    },
    {
      id: 'u12l3',
      title: 'Bilan du niveau A1',
      fa: 'جمع‌بندی سطح A1 🎓',
      vocab: [
        { fr: 'apprendre', ipa: 'apʁɑ̃dʁ', fa: 'یاد گرفتن', ex: 'J\'apprends le français.', exfa: 'فرانسه یاد می‌گیرم.' },
        { fr: 'un niveau', ipa: 'nivo', fa: 'سطح', ex: 'J\'ai le niveau A1.', exfa: 'سطح A1 دارم.' },
        { fr: 'progresser', ipa: 'pʁɔɡʁese', fa: 'پیشرفت کردن', ex: 'Tu as beaucoup progressé !', exfa: 'خیلی پیشرفت کرده‌ای!' },
        { fr: 'un examen', ipa: 'ɛɡzamɛ̃', fa: 'امتحان', ex: 'Je prépare l\'examen DELF.', exfa: 'برای امتحان DELF آماده می‌شوم.' },
        { fr: 'réussir', ipa: 'ʁeysiʁ', fa: 'موفق شدن / قبول شدن', ex: 'Tu vas réussir !', exfa: 'موفق می‌شوی!' },
        { fr: 'continuer', ipa: 'kɔ̃tinɥe', fa: 'ادامه دادن', ex: 'Il faut continuer !', exfa: 'باید ادامه داد!' },
        { fr: 'fier / fière', ipa: 'fjɛʁ', fa: 'سربلند / مفتخر', ex: 'Je suis fière de toi !', exfa: 'بهت افتخار می‌کنم!' },
        { fr: 'bravo', ipa: 'bʁavo', fa: 'آفرین', ex: 'Bravo, beau travail !', exfa: 'آفرین، کار عالی!' }
      ],
      phrases: [
        { fr: 'J\'apprends le français depuis...', fa: 'از ... دارم فرانسه یاد می‌گیرم' },
        { fr: 'Petit à petit !', fa: 'کم‌کم! (قدم به قدم)' },
        { fr: 'C\'est parti pour le A2 !', fa: 'برویم سراغ A2!' }
      ],
      grammar: {
        title: 'مرور بزرگ گرامر A1',
        body: 'در این دوره یاد گرفتی:<br>' +
          '• <b>زمان حال</b>: être، avoir، aller، faire، فعل‌های -er، انعکاسی‌ها<br>' +
          '• <b>گذشته</b>: passé composé با avoir و être + آشنایی با imparfait<br>' +
          '• <b>آینده</b>: futur proche (aller + مصدر)<br>' +
          '• <b>حروف تعریف</b>: un/une/des، le/la/les، du/de la (جزئی)<br>' +
          '• <b>صفت‌ها</b>: مطابقت، ملکی (mon/ma/mes)، اشاره (ce/cette/ces)<br>' +
          '• <b>ضمایر</b>: مفعولی (le/la/les)، تأکیدی (moi/toi...)، مکان (y)<br>' +
          '• <b>مقایسه</b>: plus/moins/aussi... que<br>' +
          'اگر جایی را فراموش کرده‌ای، به همان واحد برگرد و دوباره تمرین کن!',
        examples: [
          { fr: 'Je suis très fière : j\'ai fini le niveau A1 !', fa: 'خیلی سربلندم: سطح A1 را تمام کردم!' },
          { fr: 'Maintenant, je vais continuer avec le A2 !', fa: 'حالا با A2 ادامه می‌دهم!' }
        ]
      },
      phonetics: {
        title: 'مرور صداهای سخت فرانسه',
        body: 'یک بار دیگر صداهایی که در فارسی نیستند:',
        items: [
          { fr: 'tu / vous', ipa: 'y / u', fa: '[y] در برابر [u]' },
          { fr: 'un bon vin blanc', ipa: 'œ̃ bɔ̃ vɛ̃ blɑ̃', fa: 'چهار صدای تودماغی!' },
          { fr: 'la rue de Rivoli', ipa: 'ʁy', fa: '[ʁ] گلویی' },
          { fr: 'deux œufs', ipa: 'dø‿zø', fa: '[ø]' }
        ]
      },
      reading: {
        title: 'Le message de ton professeur',
        fr: 'Chère étudiante,\n\nFélicitations ! Tu as fini les douze unités du niveau A1. Tu as beaucoup progressé : maintenant, tu peux te présenter, parler de ta famille et de ton travail, faire les courses, commander au restaurant, raconter tes voyages et donner ton avis — tout ça en français !\n\nMaintenant, il faut continuer : fais l\'examen DELF A1 de l\'application, révise tes cartes chaque jour, et après... c\'est parti pour le niveau A2 !\n\nJe suis très fier de toi. Bravo !\n\nTon professeur de français 🇫🇷',
        fa: 'دانشجوی عزیز،\n\nتبریک! دوازده واحد سطح A1 را تمام کردی. خیلی پیشرفت کرده‌ای: حالا می‌توانی خودت را معرفی کنی، درباره خانواده و کارت حرف بزنی، خرید کنی، در رستوران سفارش بدهی، سفرهایت را تعریف کنی و نظرت را بگویی — همه به فرانسه!\n\nحالا باید ادامه بدهی: آزمون DELF A1 اپ را بده، هر روز کارت‌هایت را مرور کن، و بعد... برویم سراغ A2!\n\nخیلی بهت افتخار می‌کنم. آفرین!\n\nمعلم فرانسه‌ات 🇫🇷'
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'مرور A1', level: 'hard', fa: 'مرور: être یا avoir؟', q: 'Hier, nous ___ allés au cinéma.', answer: ['sommes'] },
        { type: 'fill', skill: 'GR', topic: 'مرور A1', level: 'hard', fa: 'مرور حرف تعریف جزئی:', q: 'Le matin, je bois ___ thé.', answer: ['du'] },
        { type: 'fill', skill: 'GR', topic: 'مرور A1', level: 'hard', fa: 'مرور futur proche:', q: 'Demain, elle ___ commencer le niveau A2.', answer: ['va'] },
        { type: 'mcq', skill: 'GR', topic: 'مرور A1', level: 'medium', q: 'کدام جمله کاملاً درست است؟', options: ['Ma sœur est allée chez le médecin parce qu\'elle avait mal à la tête.', 'Ma sœur a allé chez le médecin.', 'Ma sœur est allé au médecin.', 'Ma sœur est allée chez la médecin parce que elle a mal à la tête hier.'], correct: 0 },
        { type: 'mcq', skill: 'CE', topic: 'مرور A1', level: 'medium', q: 'متن «پیام معلم» را دوباره بخوان — بعد از A1 چه باید کرد؟', qfr: 'Maintenant, il faut continuer : fais l\'examen DELF A1, révise tes cartes chaque jour, et après... c\'est parti pour le niveau A2 !', options: ['آزمون DELF بده و مرور روزانه کن', 'استراحت کن', 'از اول شروع کن', 'کتاب بخر'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'مرور A1', level: 'hard', text: 'Tu as beaucoup progressé, bravo !', trans: 'خیلی پیشرفت کرده‌ای، آفرین!' },
        { type: 'order', skill: 'GR', topic: 'مرور A1', level: 'hard', answer: 'J\'apprends le français depuis six mois.', fa: 'جمله «شش ماه است فرانسه یاد می‌گیرم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'مرور A1', level: 'hard', text: 'Je m\'appelle Mona, je suis iranienne et j\'apprends le français depuis six mois. Je peux parler de ma famille, de mon travail et de mes voyages !', fa: 'معرفی کامل — نشان بده چقدر یاد گرفته‌ای!' },
        { type: 'write', skill: 'PE', topic: 'مرور A1', level: 'hard', prompt: 'به معلمت (Claude!) یک نامه کوتاه بنویس: چه چیزهایی یاد گرفتی، چه چیزی سخت بود، برنامه‌ات چیست؟ (۵ جمله — بعد با «کپی برای معلم» برایم بفرست!)', min: 18, sample: 'Cher professeur, j\'ai fini le niveau A1 ! J\'ai appris à me présenter, à faire les courses et à raconter mes voyages. Je trouve que le passé composé est difficile, mais j\'adore le français. Maintenant, je vais préparer l\'examen DELF A1. Merci beaucoup pour tout !' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'imparfait', level: 'medium', q: '🎧 گوش کن — سفرش چطور بود؟', audio: 'Mon voyage à Paris ? C\'était inoubliable ! Il faisait beau et il y avait une ambiance super.', audioFa: 'سفرم به پاریس؟ فراموش‌نشدنی بود! هوا خوب بود و جو فوق‌العاده‌ای بود.', options: ['فراموش‌نشدنی، هوای خوب و جو عالی', 'بد و بارانی', 'خسته‌کننده', 'کوتاه و شلوغ'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'بیان نظر', level: 'medium', q: 'نظرها را بخوان — چه کسی فیلم را دوست نداشت؟', qfr: 'Avis sur le film « Minuit à Paris » : ★ Léa : « Génial, j\'ai adoré ! » ★ Karim : « Pas mal, mais un peu long. » ★ Jules : « Nul et ennuyeux, je déteste ! »', options: ['ژول', 'لئا', 'کریم', 'هیچ‌کس'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'imparfait', level: 'hard', fa: 'توصیف گذشته:', q: 'La musique ? C\'___ super !', answer: ['était', 'etait'] },
      { type: 'fill', skill: 'GR', topic: 'بیان نظر', level: 'hard', fa: 'دلیل بیاور:', q: 'J\'adore Paris ___ c\'est une belle ville.', answer: ['parce que'] },
      { type: 'fill', skill: 'GR', topic: 'مرور A1', level: 'hard', fa: 'مرور ضمیر مفعولی:', q: 'Tu regardes ce film ? → Oui, je ___ regarde.', answer: ['le'] },
      { type: 'fill', skill: 'GR', topic: 'مرور A1', level: 'hard', fa: 'مرور مقایسه:', q: 'Le train est ___ rapide que le bus. (بیشتر)', answer: ['plus'] },
      { type: 'match', skill: 'VO', topic: 'بیان نظر', level: 'medium', fa: 'جور کن:', pairs: [['inoubliable', 'فراموش‌نشدنی'], ['ennuyeux', 'خسته‌کننده'], ['fier', 'سربلند'], ['réussir', 'موفق شدن']] },
      { type: 'order', skill: 'GR', topic: 'imparfait', level: 'hard', answer: 'C\'était une soirée inoubliable.', fa: 'جمله «شب فراموش‌نشدنی‌ای بود» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'مرور A1', level: 'hard', text: 'Félicitations, tu as fini le niveau A1 !', trans: 'تبریک، سطح A1 را تمام کردی!' },
      { type: 'speak', skill: 'PO', topic: 'مرور A1', level: 'hard', text: 'J\'ai fini le niveau A1 ! C\'était difficile mais génial. Maintenant, je vais continuer avec le A2 !', fa: 'جشن بگیر!' },
      { type: 'write', skill: 'PE', topic: 'مرور A1', level: 'hard', prompt: 'بهترین خاطره‌ات از این دوره یادگیری را بنویس + نظرت درباره زبان فرانسه. (۴-۵ جمله)', min: 16, sample: 'J\'apprends le français depuis six mois avec cette application. Au début, c\'était difficile : je ne comprenais rien ! Maintenant, je peux parler, lire et écrire. Je trouve que le français est une très belle langue. Je suis fière de moi et je vais continuer !' }
    ]
  }
};

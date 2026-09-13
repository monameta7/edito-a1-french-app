/* ===== واحد ۴: C'est où ? — کجاست؟ ===== */
EDITO.units[4] = {
  id: 4,
  title: 'C\'est où ?',
  fa: 'کجاست؟',
  theme: 'شهر و مکان‌ها (c\'est un/il est)، وسایل نقلیه و بسامد (jamais/souvent/toujours)، فعل prendre، امری و ربط‌دهنده‌ها، اعداد بزرگ',
  culture: {
    title: 'ورود به مغازه 🏪',
    body: 'وقتی وارد یک نانوایی، مغازه یا داروخانه در فرانسه می‌شوی، همیشه یک <b>Bonjour</b> بلند به همه می‌گویی — نه فقط به فروشنده. همین‌طور هنگام خروج، <b>Au revoir</b> گفتن عادی و منتظره است. بسیاری از شهرهای کوچک فرانسه بین ساعت ۱۲ تا ۱۴ برای ناهار مغازه‌هایشان را می‌بندند، پس قبل از رفتن ساعت کاری را چک کن!'
  },
  lessons: [
    {
      id: 'u4l1',
      title: 'Les lieux de la ville',
      fa: 'مکان‌های شهر',
      vocab: [
        { fr: 'une ville', ipa: 'vil', fa: 'شهر', ex: 'Paris est une belle ville.', exfa: 'پاریس شهر زیبایی است.' },
        { fr: 'une rue', ipa: 'ʁy', fa: 'خیابان', ex: 'J\'habite rue Pasteur.', exfa: 'در خیابان پاستور زندگی می‌کنم.' },
        { fr: 'une place', ipa: 'plas', fa: 'میدان', ex: 'La place de la République', exfa: 'میدان جمهوری' },
        { fr: 'un café / un restaurant', ipa: 'kafe / ʁɛstoʁɑ̃', fa: 'کافه / رستوران', ex: 'Il y a un café ici.', exfa: 'اینجا یک کافه هست.' },
        { fr: 'un cinéma / un musée', ipa: 'sinema / myze', fa: 'سینما / موزه', ex: 'Le musée du Louvre', exfa: 'موزه لوور' },
        { fr: 'une gare', ipa: 'ɡaʁ', fa: 'ایستگاه قطار', ex: 'La gare est loin ?', exfa: 'ایستگاه دور است؟' },
        { fr: 'un hôtel', ipa: 'otɛl', fa: 'هتل', ex: 'L\'hôtel est dans le centre.', exfa: 'هتل در مرکز شهر است.' },
        { fr: 'une banque / une pharmacie', ipa: 'bɑ̃k / faʁmasi', fa: 'بانک / داروخانه', ex: 'La banque est fermée.', exfa: 'بانک بسته است.' },
        { fr: 'un monument', ipa: 'mɔnymɑ̃', fa: 'بنای تاریخی', ex: 'C\'est un monument célèbre.', exfa: 'یک بنای تاریخی معروف است.' },
        { fr: 'un plan (de la ville)', ipa: 'plɑ̃', fa: 'نقشه (شهر)', ex: 'Vous avez un plan de la ville ?', exfa: 'نقشه شهر دارید؟' },
        { fr: 'un habitant / une habitante', ipa: 'abitɑ̃', fa: 'ساکن (شهر)', ex: 'Paris a deux millions d\'habitants.', exfa: 'پاریس دو میلیون ساکن دارد.' }
      ],
      phrases: [
        { fr: 'Il y a...', fa: 'وجود دارد / هست' },
        { fr: 'Qu\'est-ce qu\'il y a dans ton quartier ?', fa: 'در محله‌ات چه چیزهایی هست؟' },
        { fr: 'C\'est ouvert / fermé.', fa: 'باز است / بسته است.' }
      ],
      grammar: {
        title: '« C\'est un(e)... » vs « Il/Elle est... »',
        body: 'برای <b>معرفی/شناساندنِ</b> یک چیز از <b>c\'est + حرف تعریف نامعین + اسم</b> استفاده می‌کنیم؛ برای <b>توصیفِ</b> همان چیز (با صفت) از <b>il/elle est + صفت</b>:<br>' +
          '• <b>C\'est un</b> musée. (این یک موزه است — معرفی)<br>' +
          '• <b>Il est</b> grand et moderne. (بزرگ و مدرن است — توصیف)<br>' +
          '⚠️ اشتباه رایج: نگو «Il est un musée» — یا c\'est+اسم یا il est+صفت!',
        examples: [
          { fr: 'C\'est une place magnifique. Elle est très grande.', fa: 'میدان فوق‌العاده‌ای است. خیلی بزرگ است.' },
          { fr: 'C\'est un petit café. Il est ouvert le dimanche.', fa: 'یک کافه کوچک است. یکشنبه‌ها باز است.' }
        ]
      },
      phonetics: {
        title: 'آواهای [e] و [ɛ]',
        body: 'دو نوع «اِ» در فرانسه: <b>[e]</b> بسته (مثل é در café) و <b>[ɛ]</b> باز (مثل è یا ai):',
        items: [
          { fr: 'un café / un musée', ipa: 'kafe / myze', fa: 'بسته [e]' },
          { fr: 'près / français', ipa: 'pʁɛ / fʁɑ̃sɛ', fa: 'باز [ɛ]' }
        ]
      },
      dialogue: {
        title: 'Mon quartier',
        lines: [
          { s: 'Nina', fr: 'Tu habites où, Karim ?', fa: 'کجا زندگی می‌کنی کریم؟' },
          { s: 'Karim', fr: 'Rue Pasteur, dans le centre. C\'est un quartier calme.', fa: 'خیابان پاستور، در مرکز شهر. یک محله آرام است.' },
          { s: 'Nina', fr: 'Qu\'est-ce qu\'il y a dans ton quartier ?', fa: 'در محله‌ات چه چیزهایی هست؟' },
          { s: 'Karim', fr: 'Il y a un parc, des cafés et un petit musée. Il est gratuit le dimanche !', fa: 'یک پارک، چند کافه و یک موزه کوچک هست. یکشنبه‌ها رایگان است!' },
          { s: 'Nina', fr: 'Super, j\'aimerais visiter ça un jour.', fa: 'عالی، دوست دارم یک روز آنجا را ببینم.' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'GR', topic: 'c\'est / il est', level: 'medium', q: 'کدام درست است؟', options: ['C\'est un café. Il est ouvert.', 'Il est un café. Il est ouvert.', 'C\'est un café. C\'est ouvert le café.', 'Il un café.'], correct: 0 },
        { type: 'fill', skill: 'GR', topic: 'c\'est / il est', level: 'medium', fa: 'کامل کن:', q: '___ un musée. Il est très grand.', answer: ["C'est", "c'est"] },
        { type: 'mcq', skill: 'GR', topic: 'حرف تعریف نامعین', level: 'easy', q: 'کدام جمله درست است؟', options: ['Il y a une banque ici.', 'Il y a un banque ici.', 'Il y a le banque ici.', 'Il y a banque ici.'], correct: 0, explain: 'banque مؤنث است و برای چیز ناشناخته une می‌آید.' },
        { type: 'match', skill: 'VO', topic: 'شهر و مکان‌ها', level: 'easy', fa: 'مکان‌ها را جور کن:', pairs: [['la gare', 'ایستگاه قطار'], ['le musée', 'موزه'], ['la pharmacie', 'داروخانه'], ['un plan', 'نقشه'], ['un habitant', 'ساکن']] },
        { type: 'mcq', skill: 'CO', topic: 'شهر و مکان‌ها', level: 'easy', q: '🎧 گوش کن — در محله چه چیزی نیست؟', audio: 'Dans mon quartier, il y a un café et une pharmacie, mais il n\'y a pas de parc.', audioFa: 'در محله من یک کافه و یک داروخانه هست، ولی پارک نیست.', options: ['پارک', 'کافه', 'داروخانه', 'مدرسه'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'شهر و مکان‌ها', level: 'medium', text: 'C\'est un grand musée. Il est gratuit le dimanche.', trans: 'موزه بزرگی است. یکشنبه‌ها رایگان است.' },
        { type: 'order', skill: 'GR', topic: 'شهر و مکان‌ها', level: 'easy', answer: 'Il y a un parc dans mon quartier.', fa: 'جمله «در محله من یک پارک هست» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'شهر و مکان‌ها', level: 'easy', text: 'C\'est un grand parc. Il est très calme.', fa: 'یک مکان از شهرت را معرفی و توصیف کن' },
        { type: 'write', skill: 'PE', topic: 'شهر و مکان‌ها', level: 'medium', prompt: 'یک مکان از شهرت را معرفی کن (c\'est) و توصیفش کن (il/elle est). (۲-۳ جمله)', min: 8, sample: 'C\'est un grand parc dans mon quartier. Il est très calme et magnifique.' }
      ]
    },
    {
      id: 'u4l2',
      title: 'On y va comment ?',
      fa: 'چطور برویم؟ — وسایل نقلیه و فعل prendre',
      vocab: [
        { fr: 'aller', ipa: 'ale', fa: 'رفتن', ex: 'Je vais au cinéma.', exfa: 'به سینما می‌روم.' },
        { fr: 'prendre', ipa: 'pʁɑ̃dʁ', fa: 'سوار شدن / گرفتن', ex: 'Je prends le métro.', exfa: 'مترو سوار می‌شوم.' },
        { fr: 'le métro / le bus / un train', ipa: 'metʁo / bys / tʁɛ̃', fa: 'مترو / اتوبوس / قطار', ex: 'Le bus numéro 12', exfa: 'اتوبوس شماره ۱۲' },
        { fr: 'un vélo / une voiture', ipa: 'velo / vwatyʁ', fa: 'دوچرخه / ماشین', ex: 'Nous allons en voiture.', exfa: 'با ماشین می‌رویم.' },
        { fr: 'à pied', ipa: 'a pje', fa: 'پیاده', ex: 'Je vais au travail à pied.', exfa: 'پیاده سر کار می‌روم.' },
        { fr: 'un ticket', ipa: 'tikɛ', fa: 'بلیت', ex: 'J\'achète un ticket de métro.', exfa: 'بلیت مترو می‌خرم.' },
        { fr: 'toujours', ipa: 'tuʒuʁ', fa: 'همیشه', ex: 'Je prends toujours le métro.', exfa: 'همیشه مترو سوار می‌شوم.' },
        { fr: 'souvent', ipa: 'suvɑ̃', fa: 'اغلب', ex: 'Je vais souvent à pied.', exfa: 'اغلب پیاده می‌روم.' },
        { fr: 'ne... jamais', ipa: 'ʒamɛ', fa: 'هرگز', ex: 'Je ne prends jamais le bus.', exfa: 'هرگز اتوبوس سوار نمی‌شوم.' },
        { fr: 'loin (de) / près (de)', ipa: 'lwɛ̃ / pʁɛ', fa: 'دور / نزدیک', ex: 'C\'est loin d\'ici ?', exfa: 'از اینجا دور است؟' }
      ],
      phrases: [
        { fr: 'On y va comment ?', fa: 'چطور برویم؟' },
        { fr: 'Je prends le métro.', fa: 'مترو سوار می‌شوم.' },
        { fr: 'C\'est à dix minutes.', fa: 'ده دقیقه راه است.' }
      ],
      grammar: {
        title: 'Le verbe « prendre » + les adverbes de fréquence',
        body: 'فعل <b>prendre</b> برای وسیله نقلیه یعنی «سوار شدن»: Je prends le bus.<br>' +
          'قید‌های بسامد معمولاً بعد از فعل می‌آیند:<br>' +
          '• <b>toujours</b> (همیشه) > <b>souvent</b> (اغلب) > <b>ne... jamais</b> (هرگز)<br>' +
          'Je prends <b>toujours</b> le métro. | Je <b>ne</b> prends <b>jamais</b> le bus.',
        table: {
          head: ['ضمیر', 'prendre — گرفتن/سوار شدن'],
          rows: [
            ['je', 'prends'], ['tu', 'prends'], ['il / elle / on', 'prend'],
            ['nous', 'prenons'], ['vous', 'prenez'], ['ils / elles', 'prennent']
          ]
        },
        examples: [
          { fr: 'Je prends toujours le métro pour aller au travail.', fa: 'همیشه با مترو سر کار می‌روم.' },
          { fr: 'Elle ne prend jamais le bus, elle préfère le vélo.', fa: 'او هرگز اتوبوس سوار نمی‌شود، دوچرخه را ترجیح می‌دهد.' }
        ]
      },
      phonetics: {
        title: 'آواهای تودماغی [ɑ̃] و [ɔ̃]',
        body: 'فرانسه چند صدای «تودماغی» دارد که در فارسی نیستند:',
        items: [
          { fr: 'en voiture', ipa: 'ɑ̃ vwatyʁ', fa: '[ɑ̃]' },
          { fr: 'on prend', ipa: 'ɔ̃ pʁɑ̃', fa: '[ɔ̃]' },
          { fr: 'souvent', ipa: 'suvɑ̃', fa: '[ɑ̃]' }
        ]
      },
      dialogue: {
        title: 'On va au cinéma ?',
        lines: [
          { s: 'Léa', fr: 'On va au cinéma ce soir ? On y va comment ?', fa: 'امشب بریم سینما؟ چطور بریم؟' },
          { s: 'Karim', fr: 'Je prends toujours le métro le soir, c\'est plus rapide.', fa: 'شب‌ها همیشه مترو سوار می‌شوم، سریع‌تر است.' },
          { s: 'Léa', fr: 'D\'accord. Moi, je ne prends jamais le métro le soir, mais bon !', fa: 'باشه. من هرگز شب‌ها مترو سوار نمی‌شوم، ولی باشه!' },
          { s: 'Karim', fr: 'C\'est à cinq minutes à pied de la station. Parfait, on y va !', fa: 'از ایستگاه پنج دقیقه پیاده است. عالی، بزن بریم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل prendre', level: 'easy', fa: 'prendre را صرف کن:', q: 'Nous ___ le train.', answer: ['prenons'] },
        { type: 'fill', skill: 'GR', topic: 'فعل prendre', level: 'easy', fa: 'prendre را صرف کن:', q: 'Elle ___ toujours le bus.', answer: ['prend'] },
        { type: 'mcq', skill: 'GR', topic: 'قید بسامد', level: 'medium', q: '«هرگز اتوبوس سوار نمی‌شوم» به فرانسه:', options: ['Je ne prends jamais le bus.', 'Je prends jamais le bus.', 'Je ne jamais prends le bus.', 'Jamais je prends le bus.'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'وسایل نقلیه', level: 'easy', fa: 'وسیله‌ها را جور کن:', pairs: [['le métro', 'مترو'], ['à pied', 'پیاده'], ['le vélo', 'دوچرخه'], ['un ticket', 'بلیت']] },
        { type: 'mcq', skill: 'CO', topic: 'وسایل نقلیه', level: 'easy', q: '🎧 گوش کن — او چطور سر کار می‌رود؟', audio: 'Je prends toujours le vélo pour aller au travail. C\'est rapide !', audioFa: 'همیشه با دوچرخه سر کار می‌روم. سریع است!', options: ['همیشه با دوچرخه', 'گاهی با مترو', 'هرگز پیاده نمی‌رود', 'همیشه با ماشین'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'فعل prendre', level: 'medium', text: 'On prend le métro ce soir.', trans: 'امشب مترو سوار می‌شویم.' },
        { type: 'order', skill: 'GR', topic: 'فعل prendre', level: 'easy', answer: 'Je prends souvent le bus.', fa: 'جمله «اغلب اتوبوس سوار می‌شوم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'وسایل نقلیه', level: 'easy', text: 'Je prends toujours le métro. Je ne prends jamais le bus.', fa: 'وسیله نقلیه‌ات را بگو' }
      ]
    },
    {
      id: 'u4l3',
      title: 'Pour aller à... ?',
      fa: 'مسیر — آدرس پرسیدن و اعداد بزرگ',
      vocab: [
        { fr: 'tourner / continuer', ipa: 'tuʁne / kɔ̃tinɥe', fa: 'پیچیدن / ادامه دادن', ex: 'Tournez à droite.', exfa: 'به راست بپیچید.' },
        { fr: 'traverser', ipa: 'tʁavɛʁse', fa: 'عبور کردن (رد شدن)', ex: 'Traversez la place.', exfa: 'از میدان رد شوید.' },
        { fr: 'monter / descendre', ipa: 'mɔ̃te / desɑ̃dʁ', fa: 'بالا رفتن / پایین رفتن', ex: 'Montez dans le bus.', exfa: 'سوار اتوبوس شوید.' },
        { fr: 'à droite / à gauche / tout droit', ipa: 'a dʁwat / a ɡoʃ / tu dʁwa', fa: 'راست / چپ / مستقیم', ex: 'La banque est à droite.', exfa: 'بانک سمت راست است.' },
        { fr: 'devant / derrière', ipa: 'dəvɑ̃ / dɛʁjɛʁ', fa: 'جلوی / پشتِ', ex: 'Devant la gare', exfa: 'جلوی ایستگاه' },
        { fr: 'à côté de / en face de', ipa: 'a kote də / ɑ̃ fas də', fa: 'کنارِ / روبه‌روی', ex: 'En face du café', exfa: 'روبه‌روی کافه' },
        { fr: 'mille', ipa: 'mil', fa: '۱۰۰۰ هزار', ex: 'Mille habitants', exfa: 'هزار ساکن' },
        { fr: 'un million', ipa: 'miljɔ̃', fa: 'یک میلیون', ex: 'Deux millions d\'habitants', exfa: 'دو میلیون ساکن' },
        { fr: 'un milliard', ipa: 'miljaʁ', fa: 'یک میلیارد', ex: 'Sept milliards de personnes', exfa: 'هفت میلیارد نفر' }
      ],
      phrases: [
        { fr: 'Pour aller à la gare, s\'il vous plaît ?', fa: 'برای رفتن به ایستگاه (از کدام طرف)، لطفاً؟' },
        { fr: 'Prenez la première rue à droite.', fa: 'اولین خیابان سمت راست را بروید.' },
        { fr: 'C\'est juste là.', fa: 'همین‌جاست.' }
      ],
      grammar: {
        title: 'L\'impératif + les connecteurs',
        body: 'برای دادن دستور/راهنمایی، فعل را <b>بدون ضمیر</b> می‌آوریم — être، avoir، aller و فعل‌های -er همه امری دارند:<br>' +
          '• être → <b>Sois</b> prudent ! (مواظب باش!) | avoir → <b>Ayez</b> votre ticket ! | aller → <b>Allez</b> tout droit ! | monter → <b>Montez</b> !<br>' +
          '⚠️ در امریِ tu برای فعل‌های -er، حرف s حذف می‌شود: Tu tournes → Tourne !<br><br>' +
          'ربط‌دهنده‌های مفید: <b>pour</b> (برای)، <b>parce que</b> (چون)، <b>mais</b> (ولی)، <b>avec</b> (با)، <b>sans</b> (بدون).',
        table: {
          head: ['فعل', 'امری با tu', 'امری با vous'],
          rows: [
            ['aller', 'Va !', 'Allez !'],
            ['avoir', '(کمتر رایج)', 'Ayez votre ticket !'],
            ['tourner', 'Tourne !', 'Tournez !'],
            ['monter', 'Monte !', 'Montez !']
          ]
        },
        examples: [
          { fr: 'Traversez la place pour aller à la gare.', fa: 'برای رفتن به ایستگاه از میدان رد شوید.' },
          { fr: 'Prenez le bus, mais n\'oubliez pas votre ticket !', fa: 'اتوبوس سوار شوید، ولی بلیت‌تان را فراموش نکنید!' }
        ]
      },
      phonetics: {
        title: 'آوای [ʁ] فرانسوی',
        body: 'حرف r فرانسه از تهِ گلو تلفظ می‌شود، شبیه «غ» نرم فارسی:',
        items: [
          { fr: 'à droite', ipa: 'a dʁwat', fa: 'راست' },
          { fr: 'derrière', ipa: 'dɛʁjɛʁ', fa: 'پشت' },
          { fr: 'un million', ipa: 'miljɔ̃', fa: 'میلیون' }
        ]
      },
      dialogue: {
        title: 'Où est le musée ?',
        lines: [
          { s: 'Touriste', fr: 'Excusez-moi, madame. Pour aller au musée, s\'il vous plaît ?', fa: 'ببخشید خانم. برای رفتن به موزه، لطفاً؟' },
          { s: 'Passante', fr: 'Continuez tout droit et prenez la première rue à gauche.', fa: 'مستقیم ادامه بدهید و اولین خیابان سمت چپ را بروید.' },
          { s: 'Touriste', fr: 'D\'accord. C\'est loin ?', fa: 'باشه. دور است؟' },
          { s: 'Passante', fr: 'Non, c\'est à cinq minutes à pied. Le musée a plus d\'un million de visiteurs par an !', fa: 'نه، پنج دقیقه پیاده است. موزه بیش از یک میلیون بازدیدکننده در سال دارد!' },
          { s: 'Touriste', fr: 'Merci beaucoup !', fa: 'خیلی ممنون!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل امری', level: 'easy', fa: 'به یک غریبه (رسمی) بگو «بپیچید به چپ»:', q: '___ à gauche.', answer: ['Tournez', 'tournez'] },
        { type: 'fill', skill: 'GR', topic: 'فعل امری', level: 'easy', fa: 'امری فعل aller با vous:', q: '___ tout droit !', answer: ['Allez', 'allez'] },
        { type: 'fill', skill: 'GR', topic: 'ربط‌دهنده‌ها', level: 'medium', fa: 'ربط‌دهنده درست:', q: 'Je prends le bus ___ c\'est rapide.', answer: ['parce que', "parce qu'"] },
        { type: 'fill', skill: 'VO', topic: 'اعداد بزرگ', level: 'medium', fa: 'به حروف بنویس:', q: '1 000 000 = un ___', answer: ['million'] },
        { type: 'match', skill: 'VO', topic: 'حروف اضافه مکان', level: 'easy', fa: 'جور کن:', pairs: [['en face de', 'روبه‌روی'], ['à côté de', 'کنار'], ['derrière', 'پشت'], ['devant', 'جلوی']] },
        { type: 'mcq', skill: 'CE', topic: 'مسیر و جهت', level: 'easy', q: 'پیام را بخوان — کافه کجاست؟', qfr: 'Le café « Chez Paul » est en face de la gare, à côté de la banque.', options: ['روبه‌روی ایستگاه، کنار بانک', 'پشت ایستگاه', 'داخل هتل', 'کنار موزه'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'مسیر و جهت', level: 'medium', text: 'Prenez la deuxième rue à droite.', trans: 'دومین خیابان سمت راست را بروید.' },
        { type: 'order', skill: 'GR', topic: 'مسیر و جهت', level: 'easy', answer: 'Pour aller à la gare, s\'il vous plaît ?', fa: 'سؤال «برای رفتن به ایستگاه، لطفاً؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'مسیر و جهت', level: 'easy', text: 'Excusez-moi, pour aller au musée, s\'il vous plaît ?', fa: 'ببخشید، برای رفتن به موزه (از کدام طرف)، لطفاً؟' },
        { type: 'write', skill: 'PE', topic: 'مسیر و جهت', level: 'medium', prompt: 'به یک توریست آدرس بده: از اینجا تا ایستگاه (۲-۳ جمله امری با یک ربط‌دهنده).', min: 8, sample: 'Continuez tout droit et traversez la place. Prenez la première rue à gauche parce que c\'est plus court. La gare est juste là.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'شهر و مکان‌ها', level: 'easy', q: '🎧 گوش کن — در محله چه چیزهایی هست؟', audio: 'Dans mon quartier, il y a une école, deux cafés et un petit parc, mais il n\'y a pas de musée.', audioFa: 'در محله من یک مدرسه، دو کافه و یک پارک کوچک هست، ولی موزه نیست.', options: ['مدرسه، دو کافه و پارک', 'موزه و سینما', 'فقط یک بانک', 'ایستگاه و هتل'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'وسایل نقلیه', level: 'medium', q: '🎧 گوش کن — او چطور همیشه سر کار می‌رود؟', audio: 'Je prends toujours le métro, je ne prends jamais la voiture.', audioFa: 'همیشه مترو سوار می‌شوم، هرگز ماشین نمی‌گیرم.', options: ['همیشه مترو', 'همیشه ماشین', 'گاهی پیاده', 'اغلب دوچرخه'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'شهر و مکان‌ها', level: 'easy', q: 'آگهی را بخوان — هتل کجاست؟', qfr: 'Hôtel Le Soleil ** — dans le centre-ville, à côté de la gare, à dix minutes du musée.', options: ['مرکز شهر، کنار ایستگاه', 'بیرون شهر', 'روبه‌روی پارک', 'ده دقیقه تا ایستگاه'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'c\'est / il est', level: 'medium', fa: 'کامل کن:', q: '___ une banque. Elle est fermée le dimanche.', answer: ["C'est", "c'est"] },
      { type: 'fill', skill: 'GR', topic: 'فعل prendre', level: 'easy', fa: 'prendre را صرف کن:', q: 'Vous ___ le train ?', answer: ['prenez'] },
      { type: 'fill', skill: 'GR', topic: 'فعل امری', level: 'easy', fa: 'امری بساز (vous):', q: '___ la première rue à gauche.', answer: ['Prenez', 'prenez'] },
      { type: 'fill', skill: 'VO', topic: 'اعداد بزرگ', level: 'medium', fa: 'به حروف بنویس:', q: '1000 = ___', answer: ['mille'] },
      { type: 'match', skill: 'VO', topic: 'شهر و مکان‌ها', level: 'easy', fa: 'جور کن:', pairs: [['une gare', 'ایستگاه'], ['un plan', 'نقشه'], ['une banque', 'بانک'], ['un habitant', 'ساکن']] },
      { type: 'order', skill: 'GR', topic: 'فعل امری', level: 'easy', answer: 'Prenez la première rue à gauche.', fa: 'جمله «اولین خیابان سمت چپ را بروید» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'فعل prendre', level: 'medium', text: 'Je prends toujours le métro pour aller au travail.', trans: 'همیشه با مترو سر کار می‌روم.' },
      { type: 'speak', skill: 'PO', topic: 'مسیر و جهت', level: 'medium', text: 'Excusez-moi, où est la pharmacie ? C\'est loin d\'ici ?', fa: 'ببخشید، داروخانه کجاست؟ از اینجا دور است؟' },
      { type: 'write', skill: 'PE', topic: 'شهر و مکان‌ها', level: 'medium', prompt: 'محله‌ات را توصیف کن (c\'est/il-elle est)، و بگو چطور همیشه/اغلب/هرگز سر کار می‌روی. (۴ جمله)', min: 14, sample: 'J\'habite dans un petit quartier. C\'est un endroit calme. Il y a un parc et des cafés. Je prends toujours le métro pour aller au travail.' }
    ]
  }
};

/* ===== واحد ۹: Bonnes vacances ! — تعطیلات خوش! ===== */
EDITO.units[9] = {
  id: 9,
  title: 'Bonnes vacances !',
  fa: 'تعطیلات خوش!',
  theme: 'سفر، کشورها و فصل‌ها، passé composé با être (aller)، مقایسه، و imparfait برای توصیف گذشته و طبیعت',
  culture: {
    title: 'کوچ بزرگ تابستانی 🚗',
    body: 'در ماه اوت (août)، بخش بزرگی از فرانسه به تعطیلات می‌روند و شهرهای بزرگ مثل پاریس نسبتاً خلوت می‌شوند، درحالی‌که جاده‌ها و مقاصد ساحلی شلوغ می‌شوند — به این پدیده «les grands départs» می‌گویند.'
  },
  lessons: [
    {
      id: 'u9l1',
      title: 'Les destinations',
      fa: 'مقصدها — کشورها و فصل‌ها',
      vocab: [
        { fr: 'les vacances', ipa: 'vakɑ̃s', fa: 'تعطیلات', ex: 'Bonnes vacances !', exfa: 'تعطیلات خوش!' },
        { fr: 'un voyage', ipa: 'vwajaʒ', fa: 'سفر', ex: 'Bon voyage !', exfa: 'سفر خوش!' },
        { fr: 'la mer / la montagne / la plage', ipa: 'mɛʁ / mɔ̃taɲ / plaʒ', fa: 'دریا / کوه / ساحل', ex: 'On va à la mer.', exfa: 'به دریا می‌رویم.' },
        { fr: 'l\'été / l\'hiver / le printemps / l\'automne', ipa: 'ete / ivɛʁ / pʁɛ̃tɑ̃ / otɔn', fa: 'تابستان / زمستان / بهار / پاییز', ex: 'En été, il fait chaud.', exfa: 'تابستان هوا گرم است.' },
        { fr: 'l\'Italie / le Maroc / les États-Unis', ipa: 'itali / maʁɔk / etazyni', fa: 'ایتالیا / مراکش / آمریکا', ex: 'Je vais en Italie.', exfa: 'به ایتالیا می‌روم.' },
        { fr: 'un billet / un avion', ipa: 'bijɛ / avjɔ̃', fa: 'بلیت / هواپیما', ex: 'Un billet d\'avion', exfa: 'بلیت هواپیما' },
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
          '• کشور جمع → <b>aux</b>: aux États-Unis | شهرها → <b>à</b>: à Paris<br>' +
          '*⚠️ Iran مذکر است ولی چون با صدادار شروع می‌شود en می‌گیرد: <b>en Iran</b>',
        table: {
          head: ['مقصد', 'حرف اضافه', 'مثال'],
          rows: [
            ['کشور مؤنث', 'en', 'en France'],
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
          { fr: 'au printemps', ipa: 'o pʁɛ̃tɑ̃', fa: 'در بهار' }
        ]
      },
      dialogue: {
        title: 'Projets de vacances',
        lines: [
          { s: 'Emma', fr: 'Où est-ce que tu pars cet été, Mona ?', fa: 'این تابستان کجا می‌روی مونا؟' },
          { s: 'Mona', fr: 'Je vais en Iran, chez mes parents. Et après, une semaine en Italie !', fa: 'به ایران می‌روم، خانه والدینم. و بعدش، یک هفته ایتالیا!' },
          { s: 'Emma', fr: 'Super ! Moi, je vais à la montagne avec ma famille.', fa: 'عالی! من با خانواده به کوهستان می‌روم.' },
          { s: 'Mona', fr: 'Bonnes vacances alors !', fa: 'پس تعطیلات خوش!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', fa: 'حرف اضافه درست (en/au/aux/à):', q: 'Je vais ___ France.', answer: ['en'] },
        { type: 'fill', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', fa: 'حرف اضافه درست:', q: 'Il part ___ Maroc.', answer: ['au'] },
        { type: 'fill', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', fa: 'حرف اضافه درست:', q: 'Elle habite ___ États-Unis.', answer: ['aux'] },
        { type: 'match', skill: 'VO', topic: 'فصل‌ها', level: 'easy', fa: 'فصل‌ها را جور کن:', pairs: [['l\'été', 'تابستان'], ['l\'hiver', 'زمستان'], ['le printemps', 'بهار'], ['l\'automne', 'پاییز']] },
        { type: 'mcq', skill: 'CO', topic: 'کشورها و سفر', level: 'easy', q: '🎧 گوش کن — او کجا می‌رود؟', audio: 'Cet été, je pars en Espagne, à Barcelone, avec deux amies.', audioFa: 'این تابستان با دو دوستم به اسپانیا، بارسلون می‌روم.', options: ['اسپانیا، بارسلون', 'ایتالیا، رم', 'فرانسه، پاریس', 'مراکش'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'کشورها و سفر', level: 'hard', text: 'Je fais ma valise pour le voyage.', trans: 'چمدانم را برای سفر می‌بندم.' },
        { type: 'order', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', answer: 'On va à la mer en été.', fa: 'جمله «تابستان به دریا می‌رویم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'کشورها و سفر', level: 'medium', text: 'Cet été, je vais en Iran et après en France.', fa: 'برنامه سفرت را بگو' },
        { type: 'write', skill: 'PE', topic: 'کشورها و سفر', level: 'hard', prompt: 'برنامه تعطیلات بعدی‌ات را بنویس: کجا، کِی، با کی؟ (۳-۴ جمله)', min: 12, sample: 'Cet été, je vais en Turquie avec ma famille. On part en avion au mois de juillet. On va à la mer et on visite Istanbul.' }
      ]
    },
    {
      id: 'u9l2',
      title: 'On est allés...',
      fa: 'رفتیم... — passé composé با être و مقایسه',
      vocab: [
        { fr: 'partir / arriver', ipa: 'paʁtiʁ / aʁive', fa: 'حرکت کردن / رسیدن', ex: 'On est partis à huit heures.', exfa: 'ساعت هشت حرکت کردیم.' },
        { fr: 'un aéroport', ipa: 'aeʁɔpɔʁ', fa: 'فرودگاه', ex: 'On va à l\'aéroport.', exfa: 'به فرودگاه می‌رویم.' },
        { fr: 'rester', ipa: 'ʁɛste', fa: 'ماندن', ex: 'On est restés une semaine.', exfa: 'یک هفته ماندیم.' },
        { fr: 'un monument', ipa: 'mɔnymɑ̃', fa: 'بنای تاریخی', ex: 'On a visité un monument.', exfa: 'از یک بنای تاریخی بازدید کردیم.' },
        { fr: 'plus... que / moins... que / aussi... que', ipa: 'ply / mwɛ̃ / osi', fa: 'بیشتر/کمتر/به‌اندازه... از', ex: 'Rome est plus grande que Nice.', exfa: 'رم از نیس بزرگ‌تر است.' },
        { fr: 'meilleur / meilleure', ipa: 'mɛjœʁ', fa: 'بهتر', ex: 'C\'était le meilleur voyage !', exfa: 'بهترین سفر بود!' },
        { fr: 'formidable', ipa: 'fɔʁmidabl', fa: 'فوق‌العاده', ex: 'C\'était formidable !', exfa: 'فوق‌العاده بود!' }
      ],
      phrases: [
        { fr: 'On est allés à Rome.', fa: 'به رم رفتیم.' },
        { fr: 'C\'était comment ?', fa: 'چطور بود؟' },
        { fr: 'C\'est plus beau que...', fa: 'از ... زیباتر است' }
      ],
      grammar: {
        title: 'Le passé composé avec « être » (aller) + le comparatif',
        body: 'فعل <b>aller</b> با être صرف می‌شود و اسم مفعول با فاعل مطابقت می‌کند:<br>' +
          'je suis allé(e) | tu es allé(e) | il est allé / elle est allé<b>e</b> | nous sommes allé(e)s | ils sont allé<b>s</b> / elles sont allé<b>es</b><br><br>' +
          'برای مقایسه دو مقصد: <b>plus/moins/aussi + صفت + que</b>. استثنا: <b>meilleur</b> (بهتر) نه «plus bon».',
        table: {
          head: ['فاعل', 'مثال'],
          rows: [
            ['je (زن)', 'Je suis allée à Rome.'],
            ['il', 'Il est allé au Maroc.'],
            ['nous', 'Nous sommes allés en Italie.'],
            ['elles', 'Elles sont allées à la mer.']
          ]
        },
        examples: [
          { fr: 'L\'année dernière, on est allés en Italie. C\'était le meilleur voyage !', fa: 'پارسال به ایتالیا رفتیم. بهترین سفر بود!' },
          { fr: 'Rome est plus grande que Nice, mais Nice est plus calme.', fa: 'رم از نیس بزرگ‌تر است، ولی نیس آرام‌تر است.' }
        ]
      },
      phonetics: {
        title: 'plus — سه تلفظ!',
        body: 'واژه plus بسته به جایگاه سه تلفظ دارد:',
        items: [
          { fr: 'plus grand', ipa: 'ply ɡʁɑ̃', fa: 'قبل صامت: «پلو»' },
          { fr: 'plus ancien', ipa: 'ply‿zɑ̃sjɛ̃', fa: 'قبل صدادار: «پلوز»' }
        ]
      },
      dialogue: {
        title: 'Le retour de voyage',
        lines: [
          { s: 'Karim', fr: 'Alors Mona, tes vacances en Italie ?', fa: 'خب مونا، تعطیلات ایتالیا؟' },
          { s: 'Mona', fr: 'Formidable ! On est allés à Rome et à Venise.', fa: 'فوق‌العاده! به رم و ونیز رفتیم.' },
          { s: 'Karim', fr: 'Quelle ville tu as préférée ?', fa: 'کدام شهر را بیشتر پسندیدی؟' },
          { s: 'Mona', fr: 'Venise est plus romantique, mais Rome est plus grande. C\'était le meilleur voyage de ma vie !', fa: 'ونیز رمانتیک‌تر است، ولی رم بزرگ‌تر است. بهترین سفر عمرم بود!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'passé composé با être', level: 'medium', fa: 'être بساز:', q: 'Hier, je ___ allée au musée. (زن)', answer: ['suis'] },
        { type: 'fill', skill: 'GR', topic: 'passé composé با être', level: 'medium', fa: 'مطابقت:', q: 'Ils sont ___ à Rome. (aller)', answer: ['allés'] },
        { type: 'fill', skill: 'GR', topic: 'مقایسه', level: 'medium', fa: 'مقایسه بساز (بزرگ‌تر):', q: 'Rome est ___ grande que Nice.', answer: ['plus'] },
        { type: 'mcq', skill: 'GR', topic: 'مقایسه', level: 'easy', q: '«این سفر بهتر بود»:', options: ['Ce voyage était meilleur.', 'Ce voyage était plus bon.', 'Ce voyage était plus meilleur.', 'Ce voyage bien plus.'], correct: 0, explain: 'plus bon غلط است — meilleur درست است.' },
        { type: 'mcq', skill: 'CO', topic: 'کشورها و سفر', level: 'easy', q: '🎧 گوش کن — او تعطیلات کجا رفت؟', audio: 'L\'été dernier, je suis allée au Maroc. C\'était magnifique !', audioFa: 'تابستان گذشته به مراکش رفتم. فوق‌العاده بود!', options: ['مراکش', 'ایتالیا', 'فرانسه', 'اسپانیا'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'passé composé با être', level: 'hard', text: 'On est allés à Rome et c\'était formidable.', trans: 'به رم رفتیم و فوق‌العاده بود.' },
        { type: 'order', skill: 'GR', topic: 'مقایسه', level: 'medium', answer: 'Venise est plus romantique que Rome.', fa: 'جمله «ونیز از رم رمانتیک‌تر است» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'کشورها و سفر', level: 'medium', text: 'L\'année dernière, je suis allée en Turquie. C\'était formidable !', fa: 'از یک سفر تعریف کن' },
        { type: 'write', skill: 'PE', topic: 'passé composé با être', level: 'hard', prompt: 'یک سفر واقعی‌ات را تعریف کن و آن را با یک سفر دیگر مقایسه کن. (۴ جمله)', min: 14, sample: 'L\'année dernière, je suis allée à Ispahan. C\'était magnifique. Ispahan est plus calme que Téhéran, mais Téhéran est plus grande. C\'était un excellent voyage !' }
      ]
    },
    {
      id: 'u9l3',
      title: 'C\'était comment, le voyage ?',
      fa: 'سفر چطور بود؟ — imparfait و طبیعت',
      vocab: [
        { fr: 'c\'était', ipa: 'setɛ', fa: 'بود (توصیف گذشته)', ex: 'C\'était formidable !', exfa: 'فوق‌العاده بود!' },
        { fr: 'il y avait', ipa: 'il javɛ', fa: 'بود / وجود داشت', ex: 'Il y avait beaucoup de monde.', exfa: 'کلی آدم بود.' },
        { fr: 'il faisait beau/chaud/froid', ipa: 'il fəzɛ', fa: 'هوا ... بود', ex: 'Il faisait beau.', exfa: 'هوا خوب بود.' },
        { fr: 'la nature', ipa: 'natyʁ', fa: 'طبیعت', ex: 'On a adoré la nature.', exfa: 'عاشق طبیعت شدیم.' },
        { fr: 'une forêt / un lac / une rivière', ipa: 'fɔʁɛ / lak / ʁivjɛʁ', fa: 'جنگل / دریاچه / رودخانه', ex: 'On a marché dans la forêt.', exfa: 'در جنگل قدم زدیم.' },
        { fr: 'un animal / des animaux', ipa: 'animal / animo', fa: 'حیوان / حیوانات', ex: 'Il y avait beaucoup d\'animaux.', exfa: 'حیوانات زیادی بود.' },
        { fr: 'une randonnée', ipa: 'ʁɑ̃dɔne', fa: 'کوهپیمایی', ex: 'On a fait une randonnée.', exfa: 'کوهپیمایی کردیم.' },
        { fr: 'inoubliable', ipa: 'inublijabl', fa: 'فراموش‌نشدنی', ex: 'Un voyage inoubliable', exfa: 'یک سفر فراموش‌نشدنی' }
      ],
      phrases: [
        { fr: 'C\'était comment ?', fa: 'چطور بود؟' },
        { fr: 'Il y avait beaucoup de nature.', fa: 'طبیعت زیادی بود.' },
        { fr: 'Quel bon souvenir !', fa: 'چه خاطره خوبی!' }
      ],
      grammar: {
        title: 'L\'imparfait pour décrire — c\'était / il y avait / il faisait',
        body: 'برای <b>توصیف</b> در گذشته (حال‌وهوا، هوا) — نه برای گفتن کاری که انجام دادی — از imparfait استفاده می‌کنیم. در سطح A1 این سه تا را یاد بگیر:<br>' +
          '• <b>c\'était</b> + صفت: C\'était magnifique !<br>' +
          '• <b>il y avait</b> + اسم: Il y avait des animaux partout.<br>' +
          '• <b>il faisait</b> + هوا: Il faisait très beau.<br><br>' +
          '📌 فرق با passé composé: کارِ انجام‌شده → passé composé (On a fait une randonnée) ولی توصیف → imparfait (C\'était magnifique)',
        examples: [
          { fr: 'On a fait une randonnée dans la forêt. C\'était magnifique et il y avait beaucoup d\'animaux.', fa: 'در جنگل کوهپیمایی کردیم. فوق‌العاده بود و حیوانات زیادی بود.' },
          { fr: 'Il faisait très chaud, mais il y avait un lac pour nager.', fa: 'هوا خیلی گرم بود، ولی یک دریاچه برای شنا بود.' }
        ]
      },
      phonetics: {
        title: 'پایانه -ait',
        body: 'پایانه imparfait همیشه [ɛ] تلفظ می‌شود:',
        items: [
          { fr: 'c\'était', ipa: 'setɛ', fa: '«سِتِه»' },
          { fr: 'il faisait', ipa: 'il fəzɛ', fa: '«ایل فُزِه»' }
        ]
      },
      dialogue: {
        title: 'Souvenirs de vacances',
        lines: [
          { s: 'Sara', fr: 'Alors, tes vacances à la montagne ? C\'était comment ?', fa: 'خب، تعطیلات کوهستانت؟ چطور بود؟' },
          { s: 'Mona', fr: 'C\'était inoubliable ! On a fait une randonnée dans la forêt.', fa: 'فراموش‌نشدنی بود! در جنگل کوهپیمایی کردیم.' },
          { s: 'Sara', fr: 'Il faisait beau ?', fa: 'هوا خوب بود؟' },
          { s: 'Mona', fr: 'Oui, il faisait beau et il y avait un lac magnifique. Il y avait aussi beaucoup d\'animaux !', fa: 'آره، هوا خوب بود و یک دریاچه فوق‌العاده بود. حیوانات زیادی هم بود!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'imparfait', level: 'hard', fa: 'توصیف گذشته:', q: 'Le voyage ? C\'___ magnifique !', answer: ['était', 'etait'] },
        { type: 'fill', skill: 'GR', topic: 'imparfait', level: 'hard', fa: 'کامل کن:', q: 'Il y ___ beaucoup d\'animaux dans la forêt.', answer: ['avait'] },
        { type: 'mcq', skill: 'GR', topic: 'imparfait', level: 'medium', q: '«هوا گرم بود»:', options: ['Il faisait chaud.', 'Il fait chaud.', 'Il a fait chaud.', 'Il était chaud.'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'طبیعت', level: 'medium', fa: 'جور کن:', pairs: [['la forêt', 'جنگل'], ['un lac', 'دریاچه'], ['une randonnée', 'کوهپیمایی'], ['un animal', 'حیوان']] },
        { type: 'mcq', skill: 'CO', topic: 'imparfait', level: 'medium', q: '🎧 گوش کن — سفرش چطور بود؟', audio: 'Mon voyage à la montagne ? C\'était inoubliable ! Il faisait beau et il y avait un lac magnifique.', audioFa: 'سفرم به کوهستان؟ فراموش‌نشدنی بود! هوا خوب بود و یک دریاچه فوق‌العاده بود.', options: ['فراموش‌نشدنی، هوای خوب و دریاچه زیبا', 'بد و بارانی', 'خسته‌کننده', 'کوتاه و شلوغ'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'imparfait', level: 'hard', text: 'Il faisait beau et il y avait beaucoup d\'animaux.', trans: 'هوا خوب بود و حیوانات زیادی بود.' },
        { type: 'order', skill: 'GR', topic: 'imparfait', level: 'hard', answer: 'C\'était un voyage inoubliable.', fa: 'جمله «سفر فراموش‌نشدنی‌ای بود» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'طبیعت', level: 'hard', text: 'On a fait une randonnée. C\'était magnifique et il y avait un lac.', fa: 'از یک سفر در طبیعت تعریف کن' },
        { type: 'write', skill: 'PE', topic: 'imparfait', level: 'hard', prompt: 'یک سفر در طبیعت را تعریف کن: چه کردید (passé composé) و هوا/جو چطور بود (imparfait). (۴ جمله)', min: 14, sample: 'L\'été dernier, on a fait une randonnée à la montagne. Il faisait très beau. Il y avait un lac magnifique et beaucoup d\'animaux. C\'était un voyage inoubliable !' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'کشورها و سفر', level: 'easy', q: '🎧 گوش کن — او تعطیلات کجا رفت؟', audio: 'L\'été dernier, je suis allée au Maroc. On a visité Marrakech, c\'était magnifique !', audioFa: 'تابستان گذشته به مراکش رفتم. مراکش را دیدیم، فوق‌العاده بود!', options: ['مراکش', 'ایتالیا', 'فرانسه', 'اسپانیا'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'imparfait', level: 'easy', q: 'کارت‌پستال را بخوان — کدام درست است؟', qfr: 'Chère Sara, bonjour de Rome ! On a visité le Colisée. C\'était magnifique et il faisait très beau ! Bises, Mona', options: ['مونا در رم است و هوا خوب بود', 'مونا در پاریس است', 'هوا بد بود', 'مونا چیزی ندیده'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'کشورها و سفر', level: 'medium', fa: 'حرف اضافه:', q: 'Ils habitent ___ Iran.', answer: ['en'] },
      { type: 'fill', skill: 'GR', topic: 'passé composé با être', level: 'medium', fa: 'être بساز:', q: 'Nous ___ allés à la mer.', answer: ['sommes'] },
      { type: 'fill', skill: 'GR', topic: 'مقایسه', level: 'medium', fa: 'مقایسه:', q: 'Cette plage est ___ belle que l\'autre. (بیشتر)', answer: ['plus'] },
      { type: 'fill', skill: 'GR', topic: 'imparfait', level: 'hard', fa: 'توصیف گذشته:', q: 'Il ___ très chaud à la plage.', answer: ['faisait'] },
      { type: 'match', skill: 'VO', topic: 'طبیعت', level: 'easy', fa: 'جور کن:', pairs: [['un avion', 'هواپیما'], ['une valise', 'چمدان'], ['la forêt', 'جنگل'], ['un animal', 'حیوان']] },
      { type: 'order', skill: 'GR', topic: 'passé composé با être', level: 'medium', answer: 'On est allés à la montagne.', fa: 'جمله «به کوهستان رفتیم» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'imparfait', level: 'hard', text: 'C\'était un voyage magnifique, il faisait beau.', trans: 'سفر فوق‌العاده‌ای بود، هوا خوب بود.' },
      { type: 'speak', skill: 'PO', topic: 'کشورها و سفر', level: 'medium', text: 'L\'année dernière, j\'ai voyagé en Turquie. C\'était formidable !', fa: 'از یک سفر تعریف کن' },
      { type: 'write', skill: 'PE', topic: 'imparfait', level: 'hard', prompt: 'یک کارت‌پستال از سفر بنویس: کجایی، چه دیدی، هوا و جو چطور بود. (۴-۵ جمله)', min: 16, sample: 'Chère Emma, bonjour d\'Ispahan ! On a visité la place Naghsh-e Jahan, c\'est magnifique. Il faisait beau et chaud. Il y avait beaucoup de monde. C\'était un voyage inoubliable ! Bises, Mona' }
    ]
  }
};

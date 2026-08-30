/* ===== واحد ۱۱: Au grand air — در هوای آزاد ===== */
EDITO.units[11] = {
  id: 11,
  title: 'Au grand air',
  fa: 'در هوای آزاد',
  theme: 'آب‌وهوا، طبیعت و حیوانات، فعالیت‌های بیرون و ضمایر تأکیدی',
  culture: {
    title: 'فرهنگ کوهپیمایی و مسیرهای GR 🥾',
    body: 'فرانسه شبکه‌ی گسترده‌ای از مسیرهای کوهپیمایی رسمی و علامت‌گذاری‌شده به نام «GR» (Grande Randonnée) دارد که هزاران کیلومتر کل کشور را پوشش می‌دهند — از جمله مسیرهای معروفی که تا اسپانیا یا سوئیس ادامه دارند. آخر هفته‌ها، رفتن به طبیعت (une randonnée، un pique-nique) یک سرگرمی خانوادگی محبوب است، به‌خصوص در فصل بهار و تابستان.'
  },
  lessons: [
    {
      id: 'u11l1',
      title: 'La météo',
      fa: 'آب‌وهوا',
      vocab: [
        { fr: 'la météo', ipa: 'meteo', fa: 'هواشناسی / وضع هوا', ex: 'Tu as regardé la météo ?', exfa: 'هواشناسی را دیدی؟' },
        { fr: 'il fait beau', ipa: 'il fɛ bo', fa: 'هوا خوب است', ex: 'Aujourd\'hui, il fait beau !', exfa: 'امروز هوا خوب است!' },
        { fr: 'il fait mauvais', ipa: 'il fɛ mɔvɛ', fa: 'هوا بد است', ex: 'Il fait mauvais ce week-end.', exfa: 'این آخر هفته هوا بد است.' },
        { fr: 'il fait chaud', ipa: 'ʃo', fa: 'هوا گرم است', ex: 'En été, il fait très chaud.', exfa: 'تابستان هوا خیلی گرم است.' },
        { fr: 'il fait froid', ipa: 'fʁwa', fa: 'هوا سرد است', ex: 'Il fait froid en hiver.', exfa: 'زمستان هوا سرد است.' },
        { fr: 'il pleut', ipa: 'il plø', fa: 'باران می‌بارد', ex: 'Prends ton parapluie, il pleut !', exfa: 'چترت را بردار، باران می‌بارد!' },
        { fr: 'il neige', ipa: 'il nɛʒ', fa: 'برف می‌بارد', ex: 'Il neige à la montagne.', exfa: 'در کوهستان برف می‌بارد.' },
        { fr: 'il y a du vent', ipa: 'vɑ̃', fa: 'باد می‌آید', ex: 'Il y a beaucoup de vent.', exfa: 'باد زیادی می‌آید.' },
        { fr: 'il y a du soleil', ipa: 'sɔlɛj', fa: 'آفتابی است', ex: 'Il y a du soleil aujourd\'hui.', exfa: 'امروز آفتابی است.' },
        { fr: 'un nuage', ipa: 'nɥaʒ', fa: 'ابر', ex: 'Il y a des nuages.', exfa: 'ابری است.' },
        { fr: 'un parapluie', ipa: 'paʁaplɥi', fa: 'چتر', ex: 'J\'ai oublié mon parapluie.', exfa: 'چترم را فراموش کردم.' },
        { fr: 'la température', ipa: 'tɑ̃peʁatyʁ', fa: 'دما', ex: 'La température est de 25 degrés.', exfa: 'دما ۲۵ درجه است.' },
        { fr: 'un degré', ipa: 'dəɡʁe', fa: 'درجه', ex: 'Il fait moins cinq degrés !', exfa: 'منفی پنج درجه است!' }
      ],
      phrases: [
        { fr: 'Quel temps fait-il ?', fa: 'هوا چطور است؟' },
        { fr: 'Il fait combien aujourd\'hui ?', fa: 'امروز دما چند است؟' },
        { fr: 'Quelle belle journée !', fa: 'چه روز قشنگی!' }
      ],
      grammar: {
        title: 'Parler de la météo — il impersonnel',
        body: 'برای هوا از <b>il غیرشخصی</b> استفاده می‌کنیم (مثل «هوا» در فارسی):<br>' +
          '• <b>il fait</b> + صفت: il fait beau / chaud / froid / mauvais<br>' +
          '• <b>il</b> + فعل هوا: il pleut (می‌بارد)، il neige (برف می‌آید)<br>' +
          '• <b>il y a</b> + du/des: il y a du vent / du soleil / des nuages<br>' +
          'گذشته: il <b>a fait</b> beau، il <b>a plu</b> (باران بارید)',
        examples: [
          { fr: 'Aujourd\'hui, il fait beau mais il y a du vent.', fa: 'امروز هوا خوب است ولی باد می‌آید.' },
          { fr: 'Hier, il a plu toute la journée.', fa: 'دیروز تمام روز باران بارید.' },
          { fr: 'Demain, il va neiger à la montagne.', fa: 'فردا در کوهستان برف خواهد بارید.' }
        ]
      },
      phonetics: {
        title: 'il fait / il pleut — گفتار سریع',
        body: 'در گفتار روزمره il اغلب کوتاه می‌شود:',
        items: [
          { fr: 'il fait beau', ipa: 'i fɛ bo', fa: '«ای فه بو»' },
          { fr: 'il pleut', ipa: 'i plø', fa: '«ای پلو»' },
          { fr: 'il y a du vent', ipa: 'ja dy vɑ̃', fa: '«یا دو وان»' }
        ]
      },
      dialogue: {
        title: 'Le pique-nique de samedi',
        lines: [
          { s: 'Karim', fr: 'On fait le pique-nique samedi ? Tu as regardé la météo ?', fa: 'شنبه پیک‌نیک برویم؟ هواشناسی را دیدی؟' },
          { s: 'Mona', fr: 'Oui ! Samedi matin, il fait beau, il y a du soleil.', fa: 'آره! شنبه صبح هوا خوب است، آفتابی است.' },
          { s: 'Karim', fr: 'Super ! Et l\'après-midi ?', fa: 'عالی! و بعدازظهر؟' },
          { s: 'Mona', fr: 'L\'après-midi, il y a des nuages et il va pleuvoir le soir.', fa: 'بعدازظهر ابری است و شب باران می‌بارد.' },
          { s: 'Karim', fr: 'Alors, pique-nique le matin ! Et on rentre avant la pluie.', fa: 'پس پیک‌نیک صبح! و قبل از باران برمی‌گردیم.' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'آب‌وهوا', level: 'medium', q: '🎧 گوش کن — هوای فردا چطور است؟', audio: 'Demain, il fait froid et il neige. La température : moins deux degrés.', audioFa: 'فردا هوا سرد است و برف می‌بارد. دما: منفی دو درجه.', options: ['سرد و برفی، منفی ۲ درجه', 'گرم و آفتابی', 'بارانی، ۱۰ درجه', 'ابری و بادی'], correct: 0, frOptions: false },
        { type: 'fill', skill: 'GR', topic: 'آب‌وهوا', level: 'hard', fa: 'کامل کن:', q: 'En été, il ___ très chaud.', answer: ['fait'] },
        { type: 'fill', skill: 'GR', topic: 'آب‌وهوا', level: 'hard', fa: '«باران می‌بارد»:', q: 'Prends ton parapluie, il ___ !', answer: ['pleut'] },
        { type: 'match', skill: 'VO', topic: 'آب‌وهوا', level: 'medium', fa: 'جور کن:', pairs: [['il neige', 'برف می‌بارد'], ['il y a du vent', 'باد می‌آید'], ['un nuage', 'ابر'], ['un parapluie', 'چتر']] },
        { type: 'mcq', skill: 'GR', topic: 'آب‌وهوا', level: 'medium', q: '«دیروز باران بارید»:', options: ['Hier, il a plu.', 'Hier, il pleut.', 'Hier, il a pleut.', 'Hier, il est plu.'], correct: 0, explain: 'گذشته pleuvoir بی‌قاعده است: il a plu.' },
        { type: 'dictation', skill: 'CO', topic: 'آب‌وهوا', level: 'hard', text: 'Aujourd\'hui, il fait beau et chaud.', trans: 'امروز هوا خوب و گرم است.' },
        { type: 'order', skill: 'GR', topic: 'آب‌وهوا', level: 'hard', answer: 'Quel temps fait-il aujourd\'hui ?', fa: 'سؤال «امروز هوا چطور است؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'آب‌وهوا', level: 'hard', text: 'Aujourd\'hui, il fait beau mais il y a du vent.', fa: 'هوای امروز را توصیف کن' },
        { type: 'write', skill: 'PE', topic: 'آب‌وهوا', level: 'hard', prompt: 'هوای شهرت را در چهار فصل توصیف کن. (۴ جمله)', min: 12, sample: 'À Téhéran, en été, il fait très chaud. En automne, il y a du vent et des nuages. En hiver, il fait froid et il neige. Au printemps, il fait beau. J\'adore le printemps !' }
      ]
    },
    {
      id: 'u11l2',
      title: 'La nature et les animaux',
      fa: 'طبیعت و حیوانات',
      vocab: [
        { fr: 'la nature', ipa: 'natyʁ', fa: 'طبیعت', ex: 'J\'adore la nature.', exfa: 'عاشق طبیعتم.' },
        { fr: 'une forêt', ipa: 'fɔʁɛ', fa: 'جنگل', ex: 'On marche dans la forêt.', exfa: 'در جنگل قدم می‌زنیم.' },
        { fr: 'un arbre', ipa: 'aʁbʁ', fa: 'درخت', ex: 'Un grand arbre', exfa: 'یک درخت بزرگ' },
        { fr: 'une fleur', ipa: 'flœʁ', fa: 'گل', ex: 'Des fleurs magnifiques', exfa: 'گل‌های فوق‌العاده' },
        { fr: 'une rivière', ipa: 'ʁivjɛʁ', fa: 'رودخانه', ex: 'La rivière est belle.', exfa: 'رودخانه زیباست.' },
        { fr: 'un lac', ipa: 'lak', fa: 'دریاچه', ex: 'On nage dans le lac.', exfa: 'در دریاچه شنا می‌کنیم.' },
        { fr: 'un animal / des animaux', ipa: 'animal / animo', fa: 'حیوان / حیوانات', ex: 'J\'aime les animaux.', exfa: 'حیوانات را دوست دارم.' },
        { fr: 'un chien', ipa: 'ʃjɛ̃', fa: 'سگ', ex: 'Mon chien s\'appelle Rex.', exfa: 'سگم رکس نام دارد.' },
        { fr: 'un chat', ipa: 'ʃa', fa: 'گربه', ex: 'Le chat dort.', exfa: 'گربه خوابیده.' },
        { fr: 'un oiseau / des oiseaux', ipa: 'wazo', fa: 'پرنده / پرندگان', ex: 'Les oiseaux chantent.', exfa: 'پرنده‌ها می‌خوانند.' },
        { fr: 'un cheval / des chevaux', ipa: 'ʃəval / ʃəvo', fa: 'اسب / اسب‌ها', ex: 'Elle monte à cheval.', exfa: 'او سوارکاری می‌کند.' },
        { fr: 'un poisson', ipa: 'pwasɔ̃', fa: 'ماهی', ex: 'Il y a des poissons dans le lac.', exfa: 'در دریاچه ماهی هست.' }
      ],
      phrases: [
        { fr: 'Tu as un animal ?', fa: 'حیوان خانگی داری؟' },
        { fr: 'C\'est magnifique !', fa: 'فوق‌العاده است!' },
        { fr: 'On respire !', fa: 'نفس می‌کشیم! (چه هوایی!)' }
      ],
      grammar: {
        title: 'Les pronoms toniques — moi, toi, lui...',
        body: 'ضمایر تأکیدی بعد از حرف اضافه، برای تأکید، یا تنها می‌آیند:<br>' +
          '<b>moi، toi، lui (او مرد)، elle، nous، vous، eux (آنها مردان)، elles</b><br>' +
          '• بعد از حرف اضافه: avec <b>moi</b> (با من)، chez <b>eux</b> (خانه آنها)، pour <b>toi</b><br>' +
          '• تأکید: <b>Moi</b>, j\'adore la nature ! (من که عاشق طبیعتم!)<br>' +
          '• جواب کوتاه: Qui vient ? — <b>Moi !</b>',
        table: {
          head: ['ضمیر فاعلی', 'ضمیر تأکیدی'],
          rows: [
            ['je', 'moi'], ['tu', 'toi'], ['il', 'lui'], ['elle', 'elle'],
            ['nous', 'nous'], ['vous', 'vous'], ['ils', 'eux'], ['elles', 'elles']
          ]
        },
        examples: [
          { fr: 'Tu viens avec moi ou avec eux ?', fa: 'با من می‌آیی یا با آنها؟' },
          { fr: 'Moi, j\'aime les chats. Lui, il préfère les chiens.', fa: 'من گربه دوست دارم. او سگ ترجیح می‌دهد.' }
        ]
      },
      phonetics: {
        title: 'جمع‌های بی‌قاعده — al → aux',
        body: 'واژه‌های ختم به -al در جمع -aux می‌شوند:',
        items: [
          { fr: 'un animal / des animaux', ipa: 'animal / animo', fa: 'حیوان‌ها' },
          { fr: 'un cheval / des chevaux', ipa: 'ʃəval / ʃəvo', fa: 'اسب‌ها' },
          { fr: 'un oiseau / des oiseaux', ipa: 'wazo', fa: 'پرنده‌ها (eau → eaux)' }
        ]
      },
      dialogue: {
        title: 'Le week-end à la campagne',
        lines: [
          { s: 'Mona', fr: 'Quel endroit magnifique ! Regarde la rivière !', fa: 'چه جای فوق‌العاده‌ای! رودخانه را ببین!' },
          { s: 'Karim', fr: 'Oui ! Et il y a des chevaux là-bas, tu les vois ?', fa: 'آره! و آنجا اسب هست، می‌بینی‌شان؟' },
          { s: 'Mona', fr: 'Oui ! Moi, j\'adore les chevaux. Toi aussi ?', fa: 'آره! من عاشق اسب‌هام. تو هم؟' },
          { s: 'Karim', fr: 'Moi, je préfère les chiens. Chez nous, on a deux chiens et un chat.', fa: 'من سگ‌ها را ترجیح می‌دهم. خانه ما دو سگ و یک گربه داریم.' },
          { s: 'Mona', fr: 'Écoute les oiseaux ! Ici, on respire. C\'est mieux que la ville !', fa: 'به پرنده‌ها گوش کن! اینجا آدم نفس می‌کشد. از شهر بهتر است!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'ضمایر تأکیدی', level: 'hard', fa: 'ضمیر تأکیدی:', q: 'Tu viens avec ___ ? (من)', answer: ['moi'] },
        { type: 'fill', skill: 'GR', topic: 'ضمایر تأکیدی', level: 'hard', fa: 'ضمیر تأکیدی:', q: 'On va chez ___ ce soir. (آنها - مردان)', answer: ['eux'] },
        { type: 'mcq', skill: 'GR', topic: 'ضمایر تأکیدی', level: 'medium', q: '«من که عاشق طبیعتم!» با تأکید:', options: ['Moi, j\'adore la nature !', 'Je, j\'adore la nature !', 'Moi adore la nature !', 'Mon, j\'adore la nature !'], correct: 0 },
        { type: 'fill', skill: 'GR', topic: 'طبیعت', level: 'hard', fa: 'جمع بساز:', q: 'un animal → des ___', answer: ['animaux'] },
        { type: 'match', skill: 'VO', topic: 'طبیعت', level: 'medium', fa: 'جور کن:', pairs: [['la forêt', 'جنگل'], ['un oiseau', 'پرنده'], ['une fleur', 'گل'], ['un cheval', 'اسب'], ['le lac', 'دریاچه']] },
        { type: 'mcq', skill: 'CO', topic: 'طبیعت', level: 'medium', q: '🎧 گوش کن — او چه حیوانی دارد؟', audio: 'Chez moi, j\'ai un chat noir et deux petits oiseaux jaunes.', audioFa: 'خانه من یک گربه مشکی و دو پرنده زرد کوچک دارم.', options: ['یک گربه و دو پرنده', 'دو سگ', 'یک اسب', 'ماهی'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'طبیعت', level: 'hard', text: 'Il y a des poissons dans la rivière.', trans: 'در رودخانه ماهی هست.' },
        { type: 'order', skill: 'GR', topic: 'ضمایر تأکیدی', level: 'hard', answer: 'Moi, je préfère les chats.', fa: 'جمله «من که گربه‌ها را ترجیح می‌دهم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'طبیعت', level: 'hard', text: 'J\'adore la nature. Le week-end, je marche dans la forêt.', fa: 'درباره طبیعت بگو' },
        { type: 'write', skill: 'PE', topic: 'طبیعت', level: 'hard', prompt: 'جای موردعلاقه‌ات در طبیعت را توصیف کن: کجاست، چه چیزهایی دارد، آنجا چه می‌کنی؟ (۳-۴ جمله)', min: 12, sample: 'Mon endroit préféré, c\'est la forêt près de chez mes parents. Il y a une petite rivière et beaucoup d\'oiseaux. Le week-end, je marche là-bas avec mon chien. C\'est magnifique et calme !' }
      ]
    },
    {
      id: 'u11l3',
      title: 'Les activités de plein air',
      fa: 'فعالیت‌های بیرون از خانه',
      vocab: [
        { fr: 'une randonnée', ipa: 'ʁɑ̃dɔne', fa: 'کوهپیمایی / پیاده‌روی طولانی', ex: 'On fait une randonnée.', exfa: 'کوهپیمایی می‌کنیم.' },
        { fr: 'marcher', ipa: 'maʁʃe', fa: 'راه رفتن', ex: 'On a marché trois heures.', exfa: 'سه ساعت راه رفتیم.' },
        { fr: 'un pique-nique', ipa: 'piknik', fa: 'پیک‌نیک', ex: 'On fait un pique-nique.', exfa: 'پیک‌نیک می‌کنیم.' },
        { fr: 'nager', ipa: 'naʒe', fa: 'شنا کردن', ex: 'On nage dans le lac.', exfa: 'در دریاچه شنا می‌کنیم.' },
        { fr: 'le vélo', ipa: 'velo', fa: 'دوچرخه(سواری)', ex: 'On fait du vélo.', exfa: 'دوچرخه‌سواری می‌کنیم.' },
        { fr: 'le ski', ipa: 'ski', fa: 'اسکی', ex: 'En hiver, on fait du ski.', exfa: 'زمستان اسکی می‌کنیم.' },
        { fr: 'camper', ipa: 'kɑ̃pe', fa: 'چادر زدن / کمپ', ex: 'On campe près du lac.', exfa: 'نزدیک دریاچه چادر می‌زنیم.' },
        { fr: 'une tente', ipa: 'tɑ̃t', fa: 'چادر', ex: 'On monte la tente.', exfa: 'چادر را برپا می‌کنیم.' },
        { fr: 'un sac à dos', ipa: 'sak a do', fa: 'کوله‌پشتی', ex: 'Prends ton sac à dos.', exfa: 'کوله‌ات را بردار.' },
        { fr: 'y', ipa: 'i', fa: 'آنجا (ضمیر مکان)', ex: 'On y va dimanche.', exfa: 'یکشنبه آنجا می‌رویم.' },
        { fr: 'emporter', ipa: 'ɑ̃pɔʁte', fa: 'با خود بردن', ex: 'On emporte de l\'eau.', exfa: 'آب با خودمان می‌بریم.' },
        { fr: 'se promener', ipa: 'sə pʁɔmne', fa: 'قدم زدن', ex: 'On se promène au parc.', exfa: 'در پارک قدم می‌زنیم.' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce qu\'on emporte ?', fa: 'چی با خودمان ببریم؟' },
        { fr: 'N\'oublie pas ton sac !', fa: 'کیفت را فراموش نکن!' },
        { fr: 'On y va ensemble ?', fa: 'با هم برویم؟' }
      ],
      grammar: {
        title: 'Le pronom « y » — ضمیر مکان',
        body: 'ضمیر <b>y</b> جای «به آنجا / در آنجا» را می‌گیرد و قبل از فعل می‌آید:<br>' +
          '• Tu vas <s>au parc</s> ? → Oui, j\'<b>y</b> vais. (آره، آنجا می‌روم)<br>' +
          '• On va <s>à la montagne</s> dimanche ? → On <b>y</b> va !<br>' +
          '• Tu habites <s>à Paris</s> ? → Oui, j\'<b>y</b> habite depuis un an.<br>' +
          '💬 عبارت پرکاربرد: <b>On y va !</b> (بزن بریم!) | <b>Allons-y !</b> (برویم!) | <b>Vas-y !</b> (برو! / شروع کن!)',
        examples: [
          { fr: 'Le lac ? On y nage en été.', fa: 'دریاچه؟ تابستان آنجا شنا می‌کنیم.' },
          { fr: 'Tu vas à la salle de sport ? — J\'y vais deux fois par semaine.', fa: 'باشگاه می‌روی؟ — هفته‌ای دو بار می‌روم.' }
        ]
      },
      phonetics: {
        title: 'اتصال با y',
        body: 'ترکیب‌های پرکاربرد با y:',
        items: [
          { fr: 'on y va', ipa: 'ɔ̃ni va', fa: '«اُنی وا»' },
          { fr: 'j\'y vais', ipa: 'ʒi vɛ', fa: '«ژی وه»' },
          { fr: 'allons-y', ipa: 'alɔ̃zi', fa: '«آلُنزی»' },
          { fr: 'vas-y', ipa: 'vazi', fa: '«وازی»' }
        ]
      },
      dialogue: {
        title: 'La randonnée de dimanche',
        lines: [
          { s: 'Karim', fr: 'Dimanche, on fait une randonnée à la montagne. Tu viens avec nous ?', fa: 'یکشنبه کوهپیمایی می‌رویم. با ما می‌آیی؟' },
          { s: 'Mona', fr: 'Oui ! J\'adore la montagne. On y va comment ?', fa: 'آره! عاشق کوهم. چطور می‌رویم؟' },
          { s: 'Karim', fr: 'En voiture jusqu\'au village, et après, on marche.', fa: 'با ماشین تا روستا، بعدش پیاده.' },
          { s: 'Mona', fr: 'Qu\'est-ce qu\'on emporte ?', fa: 'چی با خودمان ببریم؟' },
          { s: 'Karim', fr: 'De l\'eau, un pique-nique et un bon sac à dos. Et n\'oublie pas tes chaussures de sport !', fa: 'آب، پیک‌نیک و یک کوله خوب. کفش ورزشی‌ات را هم فراموش نکن!' },
          { s: 'Mona', fr: 'Parfait. Allons-y !', fa: 'عالی. برویم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'ضمیر y', level: 'hard', fa: 'با y جواب بده:', q: 'Tu vas au parc ? → Oui, j\'___ vais.', answer: ['y'] },
        { type: 'mcq', skill: 'GR', topic: 'ضمیر y', level: 'medium', q: '«آنجا می‌رویم!» به فرانسه:', options: ['On y va !', 'On va y !', 'Y on va !', 'On la va !'], correct: 0 },
        { type: 'fill', skill: 'GR', topic: 'اوقات فراغت', level: 'hard', fa: 'faire du یا jouer au؟', q: 'En hiver, on ___ du ski à la montagne.', answer: ['fait'] },
        { type: 'match', skill: 'VO', topic: 'فعالیت بیرون', level: 'medium', fa: 'جور کن:', pairs: [['une randonnée', 'کوهپیمایی'], ['une tente', 'چادر'], ['un sac à dos', 'کوله‌پشتی'], ['nager', 'شنا کردن']] },
        { type: 'mcq', skill: 'CO', topic: 'فعالیت بیرون', level: 'medium', q: '🎧 گوش کن — برای پیک‌نیک چه می‌برند؟', audio: 'Pour le pique-nique, on emporte du pain, du fromage, des fruits et beaucoup d\'eau.', audioFa: 'برای پیک‌نیک، نان، پنیر، میوه و آب زیاد می‌بریم.', options: ['نان، پنیر، میوه و آب', 'برنج و مرغ', 'کیک و قهوه', 'ساندویچ و نوشابه'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'فعالیت بیرون', level: 'hard', text: 'On fait une randonnée à la montagne.', trans: 'در کوهستان کوهپیمایی می‌کنیم.' },
        { type: 'order', skill: 'GR', topic: 'ضمیر y', level: 'hard', answer: 'On y va ensemble dimanche ?', fa: 'سؤال «یکشنبه با هم آنجا برویم؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'فعالیت بیرون', level: 'hard', text: 'Le week-end, on fait du vélo et un pique-nique au parc.', fa: 'برنامه بیرون رفتنت را بگو' },
        { type: 'write', skill: 'PE', topic: 'فعالیت بیرون', level: 'hard', prompt: 'یک برنامه گردش یک‌روزه بنویس: کجا، چطور، چه می‌برید، چه می‌کنید؟ (۴ جمله)', min: 14, sample: 'Dimanche, on va à la montagne avec des amis. On y va en voiture. On emporte un pique-nique et beaucoup d\'eau. On va marcher, nager dans le lac et prendre des photos !' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'آب‌وهوا', level: 'medium', q: '🎧 گوش کن — پیش‌بینی هوای آخر هفته؟', audio: 'Ce week-end : samedi, il fait beau et chaud, vingt-huit degrés. Dimanche, il y a des nuages et il pleut le soir.', audioFa: 'این آخر هفته: شنبه هوا خوب و گرم است، بیست‌وهشت درجه. یکشنبه ابری است و شب باران می‌بارد.', options: ['شنبه آفتابی ۲۸ درجه، یکشنبه بارانی', 'هر دو روز برفی', 'شنبه بارانی', 'هر دو روز آفتابی'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'فعالیت بیرون', level: 'medium', q: 'آگهی را بخوان — این برنامه چیست؟', qfr: 'Club Nature — Randonnée au lac Bleu, dimanche 8h. Niveau facile, 10 km. Emportez : eau, pique-nique, chaussures de marche. Rendez-vous devant la gare.', options: ['کوهپیمایی ۱۰ کیلومتری تا دریاچه', 'مسابقه شنا', 'اسکی در کوهستان', 'کلاس دوچرخه'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'آب‌وهوا', level: 'hard', fa: 'کامل کن:', q: 'En hiver, il ___ froid et il neige.', answer: ['fait'] },
      { type: 'fill', skill: 'GR', topic: 'ضمیر y', level: 'hard', fa: 'با y:', q: 'Tu vas à la piscine ? → Oui, j\'___ vais le samedi.', answer: ['y'] },
      { type: 'fill', skill: 'GR', topic: 'ضمایر تأکیدی', level: 'hard', fa: 'ضمیر تأکیدی:', q: 'Viens avec ___ ! (ما)', answer: ['nous'] },
      { type: 'fill', skill: 'GR', topic: 'طبیعت', level: 'hard', fa: 'جمع بساز:', q: 'un oiseau → des ___', answer: ['oiseaux'] },
      { type: 'match', skill: 'VO', topic: 'طبیعت', level: 'medium', fa: 'جور کن:', pairs: [['il pleut', 'باران می‌بارد'], ['la forêt', 'جنگل'], ['un chien', 'سگ'], ['le soleil', 'خورشید']] },
      { type: 'order', skill: 'GR', topic: 'آب‌وهوا', level: 'hard', answer: 'Il fait beau mais il y a du vent.', fa: 'جمله «هوا خوب است ولی باد می‌آید» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'فعالیت بیرون', level: 'hard', text: 'N\'oublie pas ton parapluie et ton sac à dos.', trans: 'چتر و کوله‌ات را فراموش نکن.' },
      { type: 'speak', skill: 'PO', topic: 'آب‌وهوا', level: 'hard', text: 'Quel temps fait-il ? On fait un pique-nique s\'il fait beau !', fa: 'برنامه بریز' },
      { type: 'write', skill: 'PE', topic: 'فعالیت بیرون', level: 'hard', prompt: 'یک گردش در طبیعت که رفته‌ای را تعریف کن (در گذشته): کجا، هوا، چه کردید؟ (۴-۵ جمله)', min: 16, sample: 'Le mois dernier, on est allés à la montagne. Il a fait très beau. On a marché quatre heures dans la forêt. On a fait un pique-nique près de la rivière et on a pris des photos des oiseaux. C\'était magnifique !' }
    ]
  }
};

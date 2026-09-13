/* ===== واحد ۵: C'est tendance ! — این باب روزه! ===== */
EDITO.units[5] = {
  id: 5,
  title: 'C\'est tendance !',
  fa: 'این باب روزه!',
  theme: 'لباس و رنگ‌ها (مطابقت و جای صفت)، صفت اشاره، هواشناسی، فعل‌های mettre/vendre/venir و futur proche',
  culture: {
    title: 'Les soldes — حراج‌های قانونی 🏷️',
    body: 'در فرانسه حراج‌های بزرگ فروشگاهی (les soldes) آزاد نیستند؛ فقط دو دوره در سال — یکی زمستان (ژانویه) و یکی تابستان (ژوئیه) — و تاریخشان توسط دولت تعیین و اعلام می‌شود. به همین دلیل «les soldes» یک رویداد فرهنگی-اجتماعی است که مردم منتظرش می‌مانند!'
  },
  lessons: [
    {
      id: 'u5l1',
      title: 'Les vêtements et les couleurs',
      fa: 'لباس‌ها و رنگ‌ها',
      vocab: [
        { fr: 'un vêtement', ipa: 'vɛtmɑ̃', fa: 'لباس', ex: 'J\'achète des vêtements.', exfa: 'لباس می‌خرم.' },
        { fr: 'un pantalon', ipa: 'pɑ̃talɔ̃', fa: 'شلوار', ex: 'Un pantalon noir', exfa: 'شلوار مشکی' },
        { fr: 'une chemise', ipa: 'ʃəmiz', fa: 'پیراهن (مردانه)', ex: 'Une chemise blanche', exfa: 'پیراهن سفید' },
        { fr: 'une robe', ipa: 'ʁɔb', fa: 'پیراهن زنانه', ex: 'Une jolie robe', exfa: 'یک پیراهن قشنگ' },
        { fr: 'une jupe', ipa: 'ʒyp', fa: 'دامن', ex: 'Une jupe bleue', exfa: 'دامن آبی' },
        { fr: 'un manteau', ipa: 'mɑ̃to', fa: 'پالتو', ex: 'Un manteau d\'hiver', exfa: 'پالتوی زمستانی' },
        { fr: 'des chaussures', ipa: 'ʃosyʁ', fa: 'کفش', ex: 'Des chaussures de sport', exfa: 'کفش ورزشی' },
        { fr: 'un tee-shirt', ipa: 'tiʃœʁt', fa: 'تی‌شرت', ex: 'Un tee-shirt vert', exfa: 'تی‌شرت سبز' },
        { fr: 'porter', ipa: 'pɔʁte', fa: 'پوشیدن (تن داشتن)', ex: 'Elle porte une robe rouge.', exfa: 'او پیراهن قرمز پوشیده.' },
        { fr: 'noir / blanc / rouge', ipa: 'nwaʁ / blɑ̃ / ʁuʒ', fa: 'مشکی / سفید / قرمز', ex: 'Un pantalon noir', exfa: 'شلوار مشکی' },
        { fr: 'bleu / vert / jaune', ipa: 'blø / vɛʁ / ʒon', fa: 'آبی / سبز / زرد', ex: 'Un manteau bleu', exfa: 'پالتوی آبی' },
        { fr: 'joli / jolie', ipa: 'ʒɔli', fa: 'قشنگ', ex: 'C\'est très joli !', exfa: 'خیلی قشنگ است!' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu portes ?', fa: 'چی پوشیدی؟' },
        { fr: 'De quelle couleur ?', fa: 'چه رنگی؟' },
        { fr: 'Ça te va bien !', fa: 'بهت میاد!' }
      ],
      grammar: {
        title: 'La place et l\'accord des adjectifs',
        body: 'صفت‌ها در فرانسه:<br>' +
          '۱) با اسم <b>مطابقت</b> می‌کنند (جنسیت و تعداد): un pantalon noir / une robe noir<b>e</b> / des robes noir<b>es</b><br>' +
          '۲) بیشتر صفت‌ها (از جمله همه رنگ‌ها) <b>بعد از اسم</b> می‌آیند: une robe <b>rouge</b> (نه rouge robe!)<br>' +
          '۳) چند صفت کوتاه قبل از اسم می‌آیند: petit، grand، joli، beau — un <b>joli</b> manteau',
        table: {
          head: ['مذکر', 'مؤنث', 'معنی'],
          rows: [
            ['noir', 'noire', 'مشکی'],
            ['blanc', 'blanche', 'سفید'],
            ['vert', 'verte', 'سبز'],
            ['bleu', 'bleue', 'آبی']
          ]
        },
        examples: [
          { fr: 'Elle porte une jupe verte et des chaussures blanches.', fa: 'او دامن سبز و کفش سفید پوشیده.' },
          { fr: 'C\'est un joli manteau bleu.', fa: 'این یک پالتوی آبی قشنگ است.' }
        ]
      },
      phonetics: {
        title: 'صفت مذکر و مؤنث — بشنو',
        body: 'مثل ملیت‌ها، صامت آخر صفت فقط در مؤنث خوانده می‌شود:',
        items: [
          { fr: 'vert / verte', ipa: 'vɛʁ / vɛʁt', fa: 'سبز' },
          { fr: 'blanc / blanche', ipa: 'blɑ̃ / blɑ̃ʃ', fa: 'سفید' }
        ]
      },
      dialogue: {
        title: 'Qu\'est-ce que je porte ce soir ?',
        lines: [
          { s: 'Sara', fr: 'Qu\'est-ce que je porte ce soir ? La robe rouge ou la jupe noire ?', fa: 'امشب چی بپوشم؟ پیراهن قرمز یا دامن مشکی؟' },
          { s: 'Mona', fr: 'La robe rouge ! Elle est très jolie.', fa: 'پیراهن قرمز! خیلی قشنگ است.' },
          { s: 'Sara', fr: 'Avec les chaussures blanches ?', fa: 'با کفش‌های سفید؟' },
          { s: 'Mona', fr: 'Oui ! Et le petit manteau noir. Ça te va très bien !', fa: 'آره! و آن پالتوی مشکی کوچک. خیلی بهت میاد!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'صفت و مطابقت', level: 'medium', fa: 'صفت را با اسم مطابقت بده:', q: 'Une chemise ___ (سفید)', answer: ['blanche'], explain: 'chemise مؤنث است: blanche.' },
        { type: 'mcq', skill: 'GR', topic: 'صفت و مطابقت', level: 'easy', q: 'کدام ترتیب درست است؟', options: ['une robe rouge', 'une rouge robe', 'rouge une robe', 'une robe rouges'], correct: 0, explain: 'رنگ‌ها بعد از اسم می‌آیند.' },
        { type: 'fill', skill: 'GR', topic: 'صفت و مطابقت', level: 'medium', fa: 'جمع کن:', q: 'des chaussures ___ (مشکی)', answer: ['noires'], explain: 'مؤنث جمع: noires.' },
        { type: 'match', skill: 'VO', topic: 'لباس و رنگ', level: 'easy', fa: 'جور کن:', pairs: [['un pantalon', 'شلوار'], ['une jupe', 'دامن'], ['un manteau', 'پالتو'], ['des chaussures', 'کفش']] },
        { type: 'mcq', skill: 'CO', topic: 'لباس و رنگ', level: 'easy', q: '🎧 گوش کن — او چه پوشیده؟', audio: 'Aujourd\'hui, je porte un pantalon bleu et un tee-shirt blanc.', audioFa: 'امروز شلوار آبی و تی‌شرت سفید پوشیده‌ام.', options: ['شلوار آبی و تی‌شرت سفید', 'پیراهن قرمز', 'دامن سبز و پالتو', 'کفش مشکی و شلوار زرد'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'لباس و رنگ', level: 'hard', text: 'Elle porte une jolie robe verte.', trans: 'او یک پیراهن سبز قشنگ پوشیده.' },
        { type: 'order', skill: 'GR', topic: 'صفت و مطابقت', level: 'medium', answer: 'Je porte un manteau noir.', fa: 'جمله «پالتوی مشکی پوشیده‌ام» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'لباس و رنگ', level: 'medium', text: 'Aujourd\'hui, je porte un pantalon noir et une chemise blanche.', fa: 'امروز شلوار مشکی و پیراهن سفید پوشیده‌ام.' },
        { type: 'write', skill: 'PE', topic: 'لباس و رنگ', level: 'hard', prompt: 'بنویس امروز چی پوشیده‌ای (با رنگ‌ها، ۲ جمله).', min: 8, sample: 'Aujourd\'hui, je porte un pantalon bleu et un tee-shirt blanc. Je porte aussi des chaussures noires.' }
      ]
    },
    {
      id: 'u5l2',
      title: 'Dans le magasin',
      fa: 'در مغازه',
      vocab: [
        { fr: 'un magasin', ipa: 'maɡazɛ̃', fa: 'مغازه', ex: 'Le magasin est ouvert.', exfa: 'مغازه باز است.' },
        { fr: 'les soldes', ipa: 'sɔld', fa: 'حراج', ex: 'C\'est les soldes !', exfa: 'حراج است!' },
        { fr: 'essayer', ipa: 'eseje', fa: 'پرو کردن / امتحان کردن', ex: 'Je peux essayer ?', exfa: 'می‌توانم پرو کنم؟' },
        { fr: 'la taille', ipa: 'tɑj', fa: 'سایز', ex: 'Quelle est votre taille ?', exfa: 'سایزتان چند است؟' },
        { fr: 'cher / chère, pas cher', ipa: 'ʃɛʁ', fa: 'گران / ارزان', ex: 'C\'est trop cher !', exfa: 'خیلی گران است!' },
        { fr: 'trop / un peu', ipa: 'tʁo / œ̃ pø', fa: 'زیادی / کمی', ex: 'C\'est trop grand.', exfa: 'زیادی بزرگ است.' },
        { fr: 'grand / petit', ipa: 'ɡʁɑ̃ / pəti', fa: 'بزرگ / کوچک', ex: 'Trop grand pour moi', exfa: 'برای من زیادی بزرگ' },
        { fr: 'la cabine d\'essayage', ipa: 'kabin desɛjaʒ', fa: 'اتاق پرو', ex: 'La cabine est là-bas.', exfa: 'اتاق پرو آنجاست.' },
        { fr: 'un vendeur / une vendeuse', ipa: 'vɑ̃dœʁ / vɑ̃døz', fa: 'فروشنده', ex: 'La vendeuse est sympa.', exfa: 'فروشنده مهربان است.' }
      ],
      phrases: [
        { fr: 'Je cherche une robe.', fa: 'دنبال یک پیراهن می‌گردم.' },
        { fr: 'Vous faites quelle taille ?', fa: 'سایزتان چند است؟' },
        { fr: 'Je le / la prends !', fa: 'برش می‌دارم! (می‌خرم)' }
      ],
      grammar: {
        title: 'Les adjectifs démonstratifs — ce / cette / ces',
        body: 'برای اشاره به چیزی («این / آن»)، از صفت اشاره استفاده می‌کنیم:<br>' +
          '• <b>ce</b> + اسم مذکر: ce pantalon (این شلوار)<br>' +
          '• <b>cet</b> + مذکرِ با صدادار: cet hôtel<br>' +
          '• <b>cette</b> + اسم مؤنث: cette robe (این پیراهن)<br>' +
          '• <b>ces</b> + جمع: ces chaussures (این کفش‌ها)',
        table: {
          head: ['', 'مثال', 'معنی'],
          rows: [
            ['ce', 'ce manteau', 'این پالتو'],
            ['cet', 'cet hôtel', 'این هتل'],
            ['cette', 'cette jupe', 'این دامن'],
            ['ces', 'ces vêtements', 'این لباس‌ها']
          ]
        },
        examples: [
          { fr: 'J\'aime cette robe, mais ce manteau est trop cher.', fa: 'این پیراهن را دوست دارم، ولی این پالتو خیلی گران است.' },
          { fr: 'Ces chaussures sont jolies !', fa: 'این کفش‌ها قشنگ‌اند!' }
        ]
      },
      phonetics: {
        title: 'آوای [ʃ] و [ʒ]',
        body: '<b>ch</b> صدای «ش» و <b>j / g(e,i)</b> صدای «ژ» می‌دهد:',
        items: [
          { fr: 'une chemise', ipa: 'ʃəmiz', fa: '«ش»' },
          { fr: 'une jupe', ipa: 'ʒyp', fa: '«ژ»' }
        ]
      },
      dialogue: {
        title: 'C\'est les soldes !',
        lines: [
          { s: 'Vendeuse', fr: 'Bonjour ! Je peux vous aider ?', fa: 'سلام! می‌توانم کمک‌تان کنم؟' },
          { s: 'Mona', fr: 'Oui, je cherche une robe pour une fête.', fa: 'بله، دنبال یک پیراهن برای مهمانی می‌گردم.' },
          { s: 'Vendeuse', fr: 'Vous faites quelle taille ?', fa: 'سایزتان چند است؟' },
          { s: 'Mona', fr: 'Du 38. J\'aime cette robe bleue. Je peux l\'essayer ?', fa: 'سایز ۳۸. این پیراهن آبی را دوست دارم. می‌توانم پرو کنم؟' },
          { s: 'Vendeuse', fr: 'Bien sûr ! La cabine est là-bas.', fa: 'حتماً! اتاق پرو آنجاست.' },
          { s: 'Mona', fr: 'Parfait, je la prends !', fa: 'عالی، برش می‌دارم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'صفت اشاره', level: 'medium', fa: 'صفت اشاره درست (ce / cet / cette / ces):', q: 'J\'aime ___ robe.', answer: ['cette'] },
        { type: 'fill', skill: 'GR', topic: 'صفت اشاره', level: 'medium', fa: 'صفت اشاره درست:', q: '___ chaussures sont trop chères.', answer: ['Ces', 'ces'] },
        { type: 'mcq', skill: 'GR', topic: 'صفت اشاره', level: 'easy', q: '«این هتل» به فرانسه:', options: ['cet hôtel', 'ce hôtel', 'cette hôtel', 'ces hôtel'], correct: 0, explain: 'مذکر با صدادار/h بی‌صدا: cet.' },
        { type: 'match', skill: 'VO', topic: 'خرید', level: 'easy', fa: 'جور کن:', pairs: [['essayer', 'پرو کردن'], ['la taille', 'سایز'], ['cher', 'گران'], ['les soldes', 'حراج']] },
        { type: 'mcq', skill: 'CO', topic: 'خرید', level: 'easy', q: '🎧 گوش کن — مشکل چیست؟', audio: 'Cette jupe est jolie mais elle est trop petite. Vous avez la taille 40 ?', audioFa: 'این دامن قشنگ است ولی خیلی کوچک است. سایز ۴۰ دارید؟', options: ['دامن زیادی کوچک است', 'دامن گران است', 'رنگش را دوست ندارد', 'مغازه بسته است'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'خرید', level: 'hard', text: 'Je peux essayer cette robe ?', trans: 'می‌توانم این پیراهن را پرو کنم؟' },
        { type: 'order', skill: 'GR', topic: 'خرید', level: 'medium', answer: 'Ce manteau est trop cher.', fa: 'جمله «این پالتو خیلی گران است» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'خرید', level: 'medium', text: 'Bonjour, je cherche un pantalon noir, taille 40.', fa: 'سلام، دنبال شلوار مشکی سایز ۴۰ می‌گردم.' }
      ]
    },
    {
      id: 'u5l3',
      title: 'Qu\'est-ce que je mets ?',
      fa: 'چی بپوشم؟ — هواشناسی و برنامه‌های آینده',
      vocab: [
        { fr: 'mettre', ipa: 'mɛtʁ', fa: 'پوشیدن / گذاشتن', ex: 'Je mets un manteau.', exfa: 'پالتو می‌پوشم.' },
        { fr: 'vendre', ipa: 'vɑ̃dʁ', fa: 'فروختن', ex: 'On vend des vêtements d\'hiver.', exfa: 'لباس زمستانی می‌فروشیم.' },
        { fr: 'venir', ipa: 'vəniʁ', fa: 'آمدن', ex: 'Tu viens avec moi au magasin ?', exfa: 'با من به مغازه می‌آیی؟' },
        { fr: 'la météo', ipa: 'meteo', fa: 'هواشناسی', ex: 'Tu as regardé la météo ?', exfa: 'هواشناسی را دیدی؟' },
        { fr: 'il fait chaud / froid', ipa: 'il fɛ ʃo / fʁwa', fa: 'هوا گرم/سرد است', ex: 'En hiver, il fait froid.', exfa: 'زمستان هوا سرد است.' },
        { fr: 'il pleut / il neige', ipa: 'il plø / il nɛʒ', fa: 'باران/برف می‌بارد', ex: 'Prends ton manteau, il pleut !', exfa: 'پالتوت را بردار، باران می‌بارد!' },
        { fr: 'la température', ipa: 'tɑ̃peʁatyʁ', fa: 'دما', ex: 'La température est de vingt degrés.', exfa: 'دما بیست درجه است.' },
        { fr: 'un objet', ipa: 'ɔbʒɛ', fa: 'وسیله / شیء', ex: 'C\'est un objet très pratique.', exfa: 'وسیله خیلی کاربردی‌ای است.' },
        { fr: 'utile / pratique', ipa: 'ytil / pʁatik', fa: 'مفید / کاربردی', ex: 'Ce parapluie est très utile.', exfa: 'این چتر خیلی مفید است.' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu vas mettre demain ?', fa: 'فردا چی می‌پوشی؟' },
        { fr: 'Quel temps fait-il ?', fa: 'هوا چطور است؟' },
        { fr: 'Ça sert à quoi ?', fa: 'به چه دردی می‌خورد؟' }
      ],
      grammar: {
        title: 'Le verbe « mettre » + le futur proche',
        body: 'فعل <b>mettre</b> (بی‌قاعده) هم یعنی «گذاشتن» و هم «پوشیدن»: Je mets une robe.<br>' +
          'برای صحبت از آینده (مثلاً چی خواهی پوشید بسته به هوا)، از <b>futur proche</b> استفاده کن: <b>aller (صرف‌شده) + مصدر</b>:<br>' +
          'Il <b>va faire</b> froid demain, je <b>vais mettre</b> un manteau.',
        table: {
          head: ['ضمیر', 'mettre — پوشیدن/گذاشتن'],
          rows: [
            ['je', 'mets'], ['tu', 'mets'], ['il / elle', 'met'],
            ['nous', 'mettons'], ['vous', 'mettez'], ['ils / elles', 'mettent']
          ]
        },
        examples: [
          { fr: 'Il va pleuvoir, je vais mettre mon manteau.', fa: 'باران خواهد بارید، پالتویم را می‌پوشم.' },
          { fr: 'Qu\'est-ce que tu vas mettre pour la fête ?', fa: 'برای مهمانی چی می‌پوشی؟' }
        ]
      },
      phonetics: {
        title: 'e بی‌صدا در mettre',
        body: 'دقت کن به تلفظ mettre و صرف‌هایش:',
        items: [
          { fr: 'je mets', ipa: 'ʒə mɛ', fa: '' },
          { fr: 'nous mettons', ipa: 'nu mɛtɔ̃', fa: '' },
          { fr: 'il va pleuvoir', ipa: 'il va pløvwaʁ', fa: '' }
        ]
      },
      dialogue: {
        title: 'Quel temps demain ?',
        lines: [
          { s: 'Karim', fr: 'Tu as regardé la météo pour demain ?', fa: 'هواشناسی فردا را دیدی؟' },
          { s: 'Mona', fr: 'Oui, il va faire froid et il va pleuvoir l\'après-midi.', fa: 'آره، هوا سرد می‌شود و بعدازظهر باران می‌بارد.' },
          { s: 'Karim', fr: 'Alors, qu\'est-ce que tu vas mettre ?', fa: 'خب، چی می‌پوشی؟' },
          { s: 'Mona', fr: 'Je vais mettre un manteau et prendre mon parapluie.', fa: 'پالتو می‌پوشم و چترم را برمی‌دارم.' },
          { s: 'Karim', fr: 'Bonne idée ! On vend des parapluies en soldes au magasin, tu viens avec moi ?', fa: 'فکر خوبی است! در مغازه چتر با تخفیف می‌فروشند، با من می‌آیی؟' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل mettre', level: 'medium', fa: 'mettre را صرف کن:', q: 'Je ___ un manteau.', answer: ['mets'] },
        { type: 'fill', skill: 'GR', topic: 'futur proche', level: 'medium', fa: 'با futur proche کامل کن:', q: 'Demain, il ___ pleuvoir. (aller)', answer: ['va'] },
        { type: 'mcq', skill: 'GR', topic: 'futur proche', level: 'medium', q: '«فردا چی می‌پوشی؟» به فرانسه:', options: ['Qu\'est-ce que tu vas mettre demain ?', 'Qu\'est-ce que tu mets demain ?', 'Qu\'est-ce que tu vas mets demain ?', 'Tu vas quoi mettre demain ?'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'هواشناسی', level: 'easy', fa: 'جور کن:', pairs: [['il fait froid', 'هوا سرد است'], ['il pleut', 'باران می‌بارد'], ['il fait chaud', 'هوا گرم است'], ['la météo', 'هواشناسی']] },
        { type: 'mcq', skill: 'CO', topic: 'هواشناسی', level: 'medium', q: '🎧 گوش کن — فردا چی می‌پوشد؟', audio: 'Il va faire très froid demain, je vais mettre mon manteau et un bonnet.', audioFa: 'فردا خیلی سرد می‌شود، پالتو و کلاه می‌پوشم.', options: ['پالتو و کلاه', 'تی‌شرت', 'لباس شنا', 'دامن تابستانی'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'futur proche', level: 'hard', text: 'Demain, il va faire froid et il va neiger.', trans: 'فردا هوا سرد می‌شود و برف می‌بارد.' },
        { type: 'order', skill: 'GR', topic: 'فعل mettre', level: 'medium', answer: 'Je vais mettre un manteau.', fa: 'جمله «یک پالتو خواهم پوشید» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'هواشناسی', level: 'medium', text: 'Il fait froid aujourd\'hui, je mets un manteau.', fa: 'هوای امروز و لباست را بگو' },
        { type: 'write', skill: 'PE', topic: 'هواشناسی', level: 'hard', prompt: 'هوای فردا را پیش‌بینی کن و بگو چی خواهی پوشید. (۳ جمله با futur proche)', min: 10, sample: 'Demain, il va faire froid et il va pleuvoir. Je vais mettre un manteau et des bottes. Je vais prendre mon parapluie aussi.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'خرید', level: 'easy', q: '🎧 گوش کن — مشتری چه می‌خرد؟', audio: 'Je prends cette jupe noire et ces chaussures blanches.', audioFa: 'این دامن مشکی و این کفش‌های سفید را برمی‌دارم.', options: ['دامن مشکی و کفش سفید', 'پیراهن قرمز', 'پالتوی آبی', 'شلوار و تی‌شرت'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'هواشناسی', level: 'medium', q: '🎧 گوش کن — فردا هوا چطور است؟', audio: 'Demain, il va faire beau et chaud. Je vais mettre une robe légère.', audioFa: 'فردا هوا خوب و گرم می‌شود. یک پیراهن سبک می‌پوشم.', options: ['خوب و گرم', 'سرد و برفی', 'بارانی', 'ابری'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'خرید', level: 'easy', q: 'آگهی را بخوان — کدام درست است؟', qfr: 'SOLDES D\'ÉTÉ ! Robes : -40% | Chaussures : -50% | Livraison gratuite.', options: ['کفش‌ها ۵۰٪ تخفیف دارند', 'پیراهن‌ها ۵۰٪ تخفیف دارند', 'ارسال پولی است', 'حراج در ماه اوت است'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'صفت اشاره', level: 'medium', fa: 'ce / cet / cette / ces :', q: 'J\'adore ___ chaussures !', answer: ['ces'] },
      { type: 'fill', skill: 'GR', topic: 'صفت و مطابقت', level: 'medium', fa: 'صفت را مطابقت بده:', q: 'une robe ___ (آبی)', answer: ['bleue'] },
      { type: 'fill', skill: 'GR', topic: 'فعل mettre', level: 'medium', fa: 'mettre را صرف کن:', q: 'Nous ___ un manteau en hiver.', answer: ['mettons'] },
      { type: 'fill', skill: 'GR', topic: 'futur proche', level: 'medium', fa: 'futur proche بساز:', q: 'Il ___ neiger demain.', answer: ['va'] },
      { type: 'match', skill: 'VO', topic: 'لباس و رنگ', level: 'easy', fa: 'جور کن:', pairs: [['une chemise', 'پیراهن'], ['un tee-shirt', 'تی‌شرت'], ['il pleut', 'باران می‌بارد'], ['il fait froid', 'هوا سرد است']] },
      { type: 'order', skill: 'GR', topic: 'خرید', level: 'medium', answer: 'Je peux essayer cette jupe ?', fa: 'سؤال «می‌توانم این دامن را پرو کنم؟» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'لباس و رنگ', level: 'hard', text: 'Ce manteau noir est trop grand.', trans: 'این پالتوی مشکی زیادی بزرگ است.' },
      { type: 'speak', skill: 'PO', topic: 'خرید', level: 'medium', text: 'Il va faire froid, je vais mettre mon manteau et acheter des gants.', fa: 'برنامه لباست را بگو' },
      { type: 'write', skill: 'PE', topic: 'خرید', level: 'hard', prompt: 'یک خرید و هوای آن روز را توصیف کن: چی خریدی، چه رنگی، هوا چطور بود. (۴ جمله)', min: 14, sample: 'Hier, il faisait froid. Je suis allée au magasin et j\'ai acheté une robe rouge et des chaussures noires. Demain, il va faire beau, je vais mettre ma nouvelle robe !' }
    ]
  }
};

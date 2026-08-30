/* ===== واحد ۴: Les soldes, c'est parti ! — حراج شروع شد! ===== */
EDITO.units[4] = {
  id: 4,
  title: 'Les soldes, c\'est parti !',
  fa: 'حراج شروع شد!',
  theme: 'لباس و رنگ‌ها، صفت اشاره، خرید در مغازه، اعداد تا ۱۰۰۰',
  culture: {
    title: 'Les soldes — حراج‌های قانونی 🏷️',
    body: 'در فرانسه حراج‌های بزرگ فروشگاهی (les soldes) آزاد نیستند؛ فقط دو دوره در سال — یکی زمستان (ژانویه) و یکی تابستان (ژوئیه) — و تاریخشان توسط دولت تعیین و اعلام می‌شود. بیرون از این دوره‌ها، تخفیف زدن روی قیمت اصلی برای فروشگاه‌ها قانوناً محدود است. به همین دلیل «les soldes» یک رویداد فرهنگی-اجتماعی است که مردم منتظرش می‌مانند!'
  },
  lessons: [
    {
      id: 'u4l1',
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
        { fr: 'noir / noire', ipa: 'nwaʁ', fa: 'مشکی', ex: 'Un pantalon noir', exfa: 'شلوار مشکی' },
        { fr: 'blanc / blanche', ipa: 'blɑ̃ / blɑ̃ʃ', fa: 'سفید', ex: 'Une chemise blanche', exfa: 'پیراهن سفید' },
        { fr: 'rouge', ipa: 'ʁuʒ', fa: 'قرمز', ex: 'Une robe rouge', exfa: 'پیراهن قرمز' },
        { fr: 'bleu / bleue', ipa: 'blø', fa: 'آبی', ex: 'Un manteau bleu', exfa: 'پالتوی آبی' },
        { fr: 'vert / verte', ipa: 'vɛʁ / vɛʁt', fa: 'سبز', ex: 'Une jupe verte', exfa: 'دامن سبز' },
        { fr: 'jaune', ipa: 'ʒon', fa: 'زرد', ex: 'Un tee-shirt jaune', exfa: 'تی‌شرت زرد' },
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
            ['bleu', 'bleue', 'آبی'],
            ['rouge', 'rouge', 'قرمز (بی‌تغییر)']
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
          { fr: 'blanc / blanche', ipa: 'blɑ̃ / blɑ̃ʃ', fa: 'سفید' },
          { fr: 'grand / grande', ipa: 'ɡʁɑ̃ / ɡʁɑ̃d', fa: 'بزرگ' },
          { fr: 'petit / petite', ipa: 'pəti / pətit', fa: 'کوچک' }
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
      id: 'u4l2',
      title: 'Dans le magasin',
      fa: 'در مغازه',
      vocab: [
        { fr: 'un magasin', ipa: 'maɡazɛ̃', fa: 'مغازه', ex: 'Le magasin est ouvert.', exfa: 'مغازه باز است.' },
        { fr: 'les soldes', ipa: 'sɔld', fa: 'حراج', ex: 'C\'est les soldes !', exfa: 'حراج است!' },
        { fr: 'essayer', ipa: 'eseje', fa: 'پرو کردن / امتحان کردن', ex: 'Je peux essayer ?', exfa: 'می‌توانم پرو کنم؟' },
        { fr: 'la taille', ipa: 'tɑj', fa: 'سایز', ex: 'Quelle est votre taille ?', exfa: 'سایزتان چند است؟' },
        { fr: 'cher / chère', ipa: 'ʃɛʁ', fa: 'گران', ex: 'C\'est trop cher !', exfa: 'خیلی گران است!' },
        { fr: 'pas cher', ipa: 'pa ʃɛʁ', fa: 'ارزان', ex: 'C\'est pas cher.', exfa: 'ارزان است.' },
        { fr: 'trop', ipa: 'tʁo', fa: 'زیادی / بیش از حد', ex: 'C\'est trop grand.', exfa: 'زیادی بزرگ است.' },
        { fr: 'un peu', ipa: 'œ̃ pø', fa: 'کمی', ex: 'C\'est un peu petit.', exfa: 'کمی کوچک است.' },
        { fr: 'grand / grande', ipa: 'ɡʁɑ̃ / ɡʁɑ̃d', fa: 'بزرگ', ex: 'Trop grand pour moi', exfa: 'برای من زیادی بزرگ' },
        { fr: 'petit / petite', ipa: 'pəti / pətit', fa: 'کوچک', ex: 'Un peu petit', exfa: 'کمی کوچک' },
        { fr: 'la cabine d\'essayage', ipa: 'kabin desɛjaʒ', fa: 'اتاق پرو', ex: 'La cabine est là-bas.', exfa: 'اتاق پرو آنجاست.' },
        { fr: 'un vendeur / une vendeuse', ipa: 'vɑ̃dœʁ / vɑ̃døz', fa: 'فروشنده', ex: 'La vendeuse est sympa.', exfa: 'فروشنده مهربان است.' }
      ],
      phrases: [
        { fr: 'Je peux vous aider ?', fa: 'می‌توانم کمک‌تان کنم؟ (فروشنده)' },
        { fr: 'Je cherche une robe.', fa: 'دنبال یک پیراهن می‌گردم.' },
        { fr: 'Vous faites quelle taille ?', fa: 'سایزتان چند است؟' },
        { fr: 'Je peux l\'essayer ?', fa: 'می‌توانم پروش کنم؟' },
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
          { fr: 'des chaussures', ipa: 'ʃosyʁ', fa: '«ش»' },
          { fr: 'une jupe', ipa: 'ʒyp', fa: '«ژ»' },
          { fr: 'joli', ipa: 'ʒɔli', fa: '«ژ»' },
          { fr: 'un magasin', ipa: 'maɡazɛ̃', fa: '«گ» — چون بعدش a است' }
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
          { s: 'Mona', fr: '... C\'est un peu grand, non ?', fa: '... کمی بزرگ نیست؟' },
          { s: 'Vendeuse', fr: 'Voilà le 36. ... Ah oui, ça vous va très bien !', fa: 'بفرمایید سایز ۳۶... آه بله، خیلی به شما می‌آید!' },
          { s: 'Mona', fr: 'Parfait, je la prends !', fa: 'عالی، برش می‌دارم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'صفت اشاره', level: 'medium', fa: 'صفت اشاره درست (ce / cet / cette / ces):', q: 'J\'aime ___ robe.', answer: ['cette'] },
        { type: 'fill', skill: 'GR', topic: 'صفت اشاره', level: 'medium', fa: 'صفت اشاره درست:', q: '___ chaussures sont trop chères.', answer: ['Ces', 'ces'] },
        { type: 'mcq', skill: 'GR', topic: 'صفت اشاره', level: 'easy', q: '«این هتل» به فرانسه:', options: ['cet hôtel', 'ce hôtel', 'cette hôtel', 'ces hôtel'], correct: 0, explain: 'مذکر با صدادار/h بی‌صدا: cet.' },
        { type: 'mcq', skill: 'CO', topic: 'خرید', level: 'easy', q: '🎧 گوش کن — مشکل چیست؟', audio: 'Cette jupe est jolie mais elle est trop petite. Vous avez la taille 40 ?', audioFa: 'این دامن قشنگ است ولی خیلی کوچک است. سایز ۴۰ دارید؟', options: ['دامن زیادی کوچک است', 'دامن گران است', 'رنگش را دوست ندارد', 'مغازه بسته است'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'خرید', level: 'easy', fa: 'جور کن:', pairs: [['essayer', 'پرو کردن'], ['la taille', 'سایز'], ['cher', 'گران'], ['les soldes', 'حراج']] },
        { type: 'dictation', skill: 'CO', topic: 'خرید', level: 'hard', text: 'Je peux essayer cette robe ?', trans: 'می‌توانم این پیراهن را پرو کنم؟' },
        { type: 'order', skill: 'GR', topic: 'خرید', level: 'medium', answer: 'Ce manteau est trop cher.', fa: 'جمله «این پالتو خیلی گران است» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'خرید', level: 'medium', text: 'Bonjour, je cherche un pantalon noir, taille 40.', fa: 'سلام، دنبال شلوار مشکی سایز ۴۰ می‌گردم.' },
        { type: 'mcq', skill: 'CE', topic: 'خرید', level: 'easy', q: 'برچسب را بخوان — قیمت با تخفیف چند است؟', qfr: 'SOLDES ! Robe d\'été — Prix : 60 € → 30 € (-50%)', options: ['۳۰ یورو', '۶۰ یورو', '۵۰ یورو', '۹۰ یورو'], correct: 0, frOptions: false }
      ]
    },
    {
      id: 'u4l3',
      title: 'On paie !',
      fa: 'حساب می‌کنیم! — پرداخت و اعداد بزرگ',
      vocab: [
        { fr: 'payer', ipa: 'peje', fa: 'پرداخت کردن', ex: 'Vous payez comment ?', exfa: 'چطور پرداخت می‌کنید؟' },
        { fr: 'la caisse', ipa: 'kɛs', fa: 'صندوق', ex: 'La caisse est là-bas.', exfa: 'صندوق آنجاست.' },
        { fr: 'en espèces', ipa: 'ɑ̃n‿ɛspɛs', fa: 'نقدی', ex: 'Je paie en espèces.', exfa: 'نقد پرداخت می‌کنم.' },
        { fr: 'par carte', ipa: 'paʁ kaʁt', fa: 'با کارت', ex: 'Je paie par carte.', exfa: 'با کارت پرداخت می‌کنم.' },
        { fr: 'un prix', ipa: 'pʁi', fa: 'قیمت', ex: 'C\'est un bon prix.', exfa: 'قیمت خوبی است.' },
        { fr: 'une réduction', ipa: 'ʁedyksjɔ̃', fa: 'تخفیف', ex: 'Il y a une réduction de 20%.', exfa: '۲۰٪ تخفیف دارد.' },
        { fr: 'gratuit / gratuite', ipa: 'ɡʁatɥi / ɡʁatɥit', fa: 'رایگان', ex: 'La livraison est gratuite.', exfa: 'ارسال رایگان است.' },
        { fr: 'deux cents', ipa: 'dø sɑ̃', fa: '۲۰۰ دویست', ex: 'Deux cents euros', exfa: 'دویست یورو' },
        { fr: 'cinq cents', ipa: 'sɛ̃k sɑ̃', fa: '۵۰۰ پانصد', ex: 'Cinq cents grammes', exfa: 'پانصد گرم' },
        { fr: 'mille', ipa: 'mil', fa: '۱۰۰۰ هزار', ex: 'Mille euros', exfa: 'هزار یورو' },
        { fr: 'un ticket / un reçu', ipa: 'tikɛ / ʁəsy', fa: 'رسید', ex: 'Voilà votre ticket.', exfa: 'بفرمایید رسیدتان.' },
        { fr: 'rembourser', ipa: 'ʁɑ̃buʁse', fa: 'پس دادن پول', ex: 'On peut vous rembourser.', exfa: 'می‌توانیم پول‌تان را پس بدهیم.' }
      ],
      phrases: [
        { fr: 'Vous payez comment ?', fa: 'چطور پرداخت می‌کنید؟' },
        { fr: 'Par carte, s\'il vous plaît.', fa: 'با کارت، لطفاً.' },
        { fr: 'Ça fait combien en tout ?', fa: 'جمعاً چقدر می‌شود؟' },
        { fr: 'Vous avez la monnaie ?', fa: 'پول خرد دارید؟' }
      ],
      grammar: {
        title: 'Les nombres de 100 à 1000 + payer',
        body: 'اعداد بزرگ:<br>' +
          '• 100 = cent، 200 = deux cent<b>s</b> (با s)، ولی 201 = deux cent un (بدون s)<br>' +
          '• 1000 = mille — هیچ‌وقت s نمی‌گیرد: deux mille<br>' +
          '• ترکیب: 345 = trois cent quarante-cinq<br><br>' +
          'فعل <b>payer</b>: je paie، tu paies، il paie، nous payons، vous payez، ils paient',
        table: {
          head: ['عدد', 'فرانسه'],
          rows: [
            ['150', 'cent cinquante'],
            ['238', 'deux cent trente-huit'],
            ['500', 'cinq cents'],
            ['999', 'neuf cent quatre-vingt-dix-neuf'],
            ['1000', 'mille']
          ]
        },
        examples: [
          { fr: 'Ça fait cent vingt euros. Vous payez comment ?', fa: 'صدوبیست یورو می‌شود. چطور پرداخت می‌کنید؟' },
          { fr: 'Je paie par carte.', fa: 'با کارت پرداخت می‌کنم.' }
        ]
      },
      phonetics: {
        title: 'ریتم و تکیه جمله فرانسوی',
        body: 'در فرانسه تکیه همیشه روی <b>آخرین هجای گروه</b> است و جمله مثل موسیقی روان ادا می‌شود. گوش کن و با همان آهنگ تکرار کن:',
        items: [
          { fr: 'Ça fait combien ?', ipa: 'sa fɛ kɔ̃bjɛ̃', fa: 'تکیه روی «بین»' },
          { fr: 'Je paie par carte.', ipa: 'ʒə pɛ paʁ kaʁt', fa: 'تکیه روی «کارت»' },
          { fr: 'C\'est un bon prix !', ipa: 'sɛ‿tœ̃ bɔ̃ pʁi', fa: 'تکیه روی «پری»' }
        ]
      },
      dialogue: {
        title: 'À la caisse',
        lines: [
          { s: 'Caissier', fr: 'Bonjour ! Alors, la robe et les chaussures... Ça fait cent quinze euros.', fa: 'سلام! خب، پیراهن و کفش‌ها... صدوپانزده یورو می‌شود.' },
          { s: 'Mona', fr: 'Il y a une réduction avec les soldes, non ?', fa: 'با حراج تخفیف دارد، نه؟' },
          { s: 'Caissier', fr: 'Ah oui, pardon ! Moins 30%... Ça fait quatre-vingts euros cinquante.', fa: 'آه بله، ببخشید! منهای ۳۰٪... هشتاد یورو و پنجاه می‌شود.' },
          { s: 'Mona', fr: 'Super ! Je paie par carte.', fa: 'عالی! با کارت پرداخت می‌کنم.' },
          { s: 'Caissier', fr: 'Voilà votre reçu. Bonne journée !', fa: 'بفرمایید رسیدتان. روز خوش!' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — چقدر شد؟', audio: 'Ça fait trois cent quarante-cinq euros.', audioFa: 'سیصدوچهل‌وپنج یورو می‌شود.', options: ['345', '245', '445', '335'], correct: 0 },
        { type: 'fill', skill: 'VO', topic: 'اعداد', level: 'medium', fa: 'به حروف بنویس:', q: '200 = ___', answer: ['deux cents', 'deux cent'], explain: 'دویست: deux cents (با s چون گِرد است).' },
        { type: 'fill', skill: 'GR', topic: 'خرید', level: 'medium', fa: 'payer را صرف کن:', q: 'Nous ___ en espèces.', answer: ['payons'] },
        { type: 'mcq', skill: 'VO', topic: 'خرید', level: 'easy', q: '«با کارت پرداخت می‌کنم» به فرانسه:', options: ['Je paie par carte.', 'Je paie en carte.', 'Je paie de carte.', 'Je paie au carte.'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'خرید', level: 'easy', fa: 'جور کن:', pairs: [['gratuit', 'رایگان'], ['une réduction', 'تخفیف'], ['en espèces', 'نقدی'], ['un reçu', 'رسید']] },
        { type: 'dictation', skill: 'CO', topic: 'اعداد', level: 'hard', text: 'Ça fait cent cinquante euros.', trans: 'صدوپنجاه یورو می‌شود.' },
        { type: 'order', skill: 'GR', topic: 'خرید', level: 'medium', answer: 'Vous payez comment ?', fa: 'سؤال «چطور پرداخت می‌کنید؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'خرید', level: 'medium', text: 'Ça fait combien en tout ? Je paie par carte.', fa: 'جمعاً چقدر می‌شود؟ با کارت پرداخت می‌کنم.' },
        { type: 'write', skill: 'PE', topic: 'خرید', level: 'hard', prompt: 'یک مکالمه کوتاه خرید بنویس: چه می‌خواهی، سایز، و چطور پرداخت می‌کنی. (۳ جمله)', min: 12, sample: 'Bonjour, je cherche une chemise blanche, taille 38. Je peux l\'essayer ? Je paie par carte, s\'il vous plaît.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'خرید', level: 'easy', q: '🎧 گوش کن — مشتری چه می‌خرد؟', audio: 'Je prends cette jupe noire et ces chaussures blanches. Je paie par carte.', audioFa: 'این دامن مشکی و این کفش‌های سفید را برمی‌دارم. با کارت پرداخت می‌کنم.', options: ['دامن مشکی و کفش سفید', 'پیراهن قرمز', 'پالتوی آبی', 'شلوار و تی‌شرت'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — قیمت نهایی؟', audio: 'Avec la réduction, ça fait deux cent soixante euros.', audioFa: 'با تخفیف، دویست‌وشصت یورو می‌شود.', options: ['260', '360', '250', '160'], correct: 0 },
      { type: 'mcq', skill: 'CE', topic: 'خرید', level: 'easy', q: 'آگهی را بخوان — کدام درست است؟', qfr: 'SOLDES D\'ÉTÉ ! Du 1er au 30 juillet. Robes : -40% | Chaussures : -50% | Livraison gratuite.', options: ['کفش‌ها ۵۰٪ تخفیف دارند', 'پیراهن‌ها ۵۰٪ تخفیف دارند', 'ارسال پولی است', 'حراج در ماه اوت است'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'صفت اشاره', level: 'medium', fa: 'ce / cet / cette / ces :', q: 'J\'adore ___ chaussures !', answer: ['ces'] },
      { type: 'fill', skill: 'GR', topic: 'صفت و مطابقت', level: 'medium', fa: 'صفت را مطابقت بده:', q: 'une robe ___ (آبی)', answer: ['bleue'] },
      { type: 'fill', skill: 'VO', topic: 'اعداد', level: 'medium', fa: 'به حروف بنویس:', q: '500 = ___', answer: ['cinq cents', 'cinq cent'] },
      { type: 'match', skill: 'VO', topic: 'لباس و رنگ', level: 'easy', fa: 'جور کن:', pairs: [['une chemise', 'پیراهن'], ['un tee-shirt', 'تی‌شرت'], ['blanc', 'سفید'], ['vert', 'سبز']] },
      { type: 'order', skill: 'GR', topic: 'خرید', level: 'medium', answer: 'Je peux essayer cette jupe ?', fa: 'سؤال «می‌توانم این دامن را پرو کنم؟» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'لباس و رنگ', level: 'hard', text: 'Ce manteau noir est trop grand.', trans: 'این پالتوی مشکی زیادی بزرگ است.' },
      { type: 'speak', skill: 'PO', topic: 'خرید', level: 'medium', text: 'Je cherche une robe pour une fête. J\'aime cette robe bleue.', fa: 'در مغازه‌ای' },
      { type: 'write', skill: 'PE', topic: 'خرید', level: 'hard', prompt: 'تجربه یک خرید را بنویس: کجا رفتی، چی خریدی، چه رنگی، چند شد؟ (۴ جمله)', min: 14, sample: 'Je vais au magasin avec mon amie. J\'achète une robe rouge et des chaussures noires. La robe coûte quarante euros avec la réduction. Je paie par carte.' }
    ]
  }
};

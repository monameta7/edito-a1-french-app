/* ===== صرف فعل‌های فرانسه =====
   موتور صرف: فرهنگ ~۵۰ فعل بی‌قاعدهٔ پرکاربرد (دستی و دقیق) + یک موتور قاعده‌مند
   برای فعل‌های باقاعدهٔ er/ir/re (شامل قاعده‌های نرم‌شدن g/c، دوبرابرشدن حرف در
   eler/eter، تبدیل e→è، و y→i در yer). زمان‌ها: حال، گذشتهٔ ساده (imparfait)،
   گذشتهٔ ترکیبی (passé composé)، آیندهٔ نزدیک، و امری — همان زمان‌هایی که در
   سیلابس Édito A1 پوشش داده می‌شوند. */

var VerbConj = {
  PRONOUNS: ['je', 'tu', 'il / elle', 'nous', 'vous', 'ils / elles'],
  REFL: ['me', 'te', 'se', 'nous', 'vous', 'se'],

  /* افعال بی‌قاعده — pres/impf شش‌تایی به ترتیب je/tu/il/nous/vous/ils،
     pp=participe passé، aux=avoir|être، imp=[tu,nous,vous] یا null اگر امری معمول ندارد */
  IRREGULAR: {
    'être': { pres: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], impf: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'], pp: 'été', aux: 'avoir', imp: ['sois', 'soyons', 'soyez'] },
    'avoir': { pres: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], impf: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'], pp: 'eu', aux: 'avoir', imp: ['aie', 'ayons', 'ayez'] },
    'aller': { pres: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], impf: ['allais', 'allais', 'allait', 'allions', 'alliez', 'allaient'], pp: 'allé', aux: 'être', imp: ['va', 'allons', 'allez'] },
    'faire': { pres: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'], impf: ['faisais', 'faisais', 'faisait', 'faisions', 'faisiez', 'faisaient'], pp: 'fait', aux: 'avoir', imp: ['fais', 'faisons', 'faites'] },
    'pouvoir': { pres: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'], impf: ['pouvais', 'pouvais', 'pouvait', 'pouvions', 'pouviez', 'pouvaient'], pp: 'pu', aux: 'avoir', imp: null },
    'vouloir': { pres: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'], impf: ['voulais', 'voulais', 'voulait', 'voulions', 'vouliez', 'voulaient'], pp: 'voulu', aux: 'avoir', imp: ['veuille', 'veuillons', 'veuillez'] },
    'devoir': { pres: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'], impf: ['devais', 'devais', 'devait', 'devions', 'deviez', 'devaient'], pp: 'dû', aux: 'avoir', imp: null },
    'savoir': { pres: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'], impf: ['savais', 'savais', 'savait', 'savions', 'saviez', 'savaient'], pp: 'su', aux: 'avoir', imp: ['sache', 'sachons', 'sachez'] },
    'prendre': { pres: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'], impf: ['prenais', 'prenais', 'prenait', 'prenions', 'preniez', 'prenaient'], pp: 'pris', aux: 'avoir', imp: ['prends', 'prenons', 'prenez'] },
    'comprendre': { pres: ['comprends', 'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent'], impf: ['comprenais', 'comprenais', 'comprenait', 'comprenions', 'compreniez', 'comprenaient'], pp: 'compris', aux: 'avoir', imp: ['comprends', 'comprenons', 'comprenez'] },
    'apprendre': { pres: ['apprends', 'apprends', 'apprend', 'apprenons', 'apprenez', 'apprennent'], impf: ['apprenais', 'apprenais', 'apprenait', 'apprenions', 'appreniez', 'apprenaient'], pp: 'appris', aux: 'avoir', imp: ['apprends', 'apprenons', 'apprenez'] },
    'venir': { pres: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'], impf: ['venais', 'venais', 'venait', 'venions', 'veniez', 'venaient'], pp: 'venu', aux: 'être', imp: ['viens', 'venons', 'venez'] },
    'devenir': { pres: ['deviens', 'deviens', 'devient', 'devenons', 'devenez', 'deviennent'], impf: ['devenais', 'devenais', 'devenait', 'devenions', 'deveniez', 'devenaient'], pp: 'devenu', aux: 'être', imp: ['deviens', 'devenons', 'devenez'] },
    'revenir': { pres: ['reviens', 'reviens', 'revient', 'revenons', 'revenez', 'reviennent'], impf: ['revenais', 'revenais', 'revenait', 'revenions', 'reveniez', 'revenaient'], pp: 'revenu', aux: 'être', imp: ['reviens', 'revenons', 'revenez'] },
    'tenir': { pres: ['tiens', 'tiens', 'tient', 'tenons', 'tenez', 'tiennent'], impf: ['tenais', 'tenais', 'tenait', 'tenions', 'teniez', 'tenaient'], pp: 'tenu', aux: 'avoir', imp: ['tiens', 'tenons', 'tenez'] },
    'voir': { pres: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'], impf: ['voyais', 'voyais', 'voyait', 'voyions', 'voyiez', 'voyaient'], pp: 'vu', aux: 'avoir', imp: ['vois', 'voyons', 'voyez'] },
    'revoir': { pres: ['revois', 'revois', 'revoit', 'revoyons', 'revoyez', 'revoient'], impf: ['revoyais', 'revoyais', 'revoyait', 'revoyions', 'revoyiez', 'revoyaient'], pp: 'revu', aux: 'avoir', imp: ['revois', 'revoyons', 'revoyez'] },
    'dire': { pres: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'], impf: ['disais', 'disais', 'disait', 'disions', 'disiez', 'disaient'], pp: 'dit', aux: 'avoir', imp: ['dis', 'disons', 'dites'] },
    'mettre': { pres: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'], impf: ['mettais', 'mettais', 'mettait', 'mettions', 'mettiez', 'mettaient'], pp: 'mis', aux: 'avoir', imp: ['mets', 'mettons', 'mettez'] },
    'permettre': { pres: ['permets', 'permets', 'permet', 'permettons', 'permettez', 'permettent'], impf: ['permettais', 'permettais', 'permettait', 'permettions', 'permettiez', 'permettaient'], pp: 'permis', aux: 'avoir', imp: ['permets', 'permettons', 'permettez'] },
    'promettre': { pres: ['promets', 'promets', 'promet', 'promettons', 'promettez', 'promettent'], impf: ['promettais', 'promettais', 'promettait', 'promettions', 'promettiez', 'promettaient'], pp: 'promis', aux: 'avoir', imp: ['promets', 'promettons', 'promettez'] },
    'sortir': { pres: ['sors', 'sors', 'sort', 'sortons', 'sortez', 'sortent'], impf: ['sortais', 'sortais', 'sortait', 'sortions', 'sortiez', 'sortaient'], pp: 'sorti', aux: 'être', imp: ['sors', 'sortons', 'sortez'] },
    'partir': { pres: ['pars', 'pars', 'part', 'partons', 'partez', 'partent'], impf: ['partais', 'partais', 'partait', 'partions', 'partiez', 'partaient'], pp: 'parti', aux: 'être', imp: ['pars', 'partons', 'partez'] },
    'dormir': { pres: ['dors', 'dors', 'dort', 'dormons', 'dormez', 'dorment'], impf: ['dormais', 'dormais', 'dormait', 'dormions', 'dormiez', 'dormaient'], pp: 'dormi', aux: 'avoir', imp: ['dors', 'dormons', 'dormez'] },
    'sentir': { pres: ['sens', 'sens', 'sent', 'sentons', 'sentez', 'sentent'], impf: ['sentais', 'sentais', 'sentait', 'sentions', 'sentiez', 'sentaient'], pp: 'senti', aux: 'avoir', imp: ['sens', 'sentons', 'sentez'] },
    'servir': { pres: ['sers', 'sers', 'sert', 'servons', 'servez', 'servent'], impf: ['servais', 'servais', 'servait', 'servions', 'serviez', 'servaient'], pp: 'servi', aux: 'avoir', imp: ['sers', 'servons', 'servez'] },
    'mentir': { pres: ['mens', 'mens', 'ment', 'mentons', 'mentez', 'mentent'], impf: ['mentais', 'mentais', 'mentait', 'mentions', 'mentiez', 'mentaient'], pp: 'menti', aux: 'avoir', imp: ['mens', 'mentons', 'mentez'] },
    'connaître': { pres: ['connais', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent'], impf: ['connaissais', 'connaissais', 'connaissait', 'connaissions', 'connaissiez', 'connaissaient'], pp: 'connu', aux: 'avoir', imp: ['connais', 'connaissons', 'connaissez'] },
    'reconnaître': { pres: ['reconnais', 'reconnais', 'reconnaît', 'reconnaissons', 'reconnaissez', 'reconnaissent'], impf: ['reconnaissais', 'reconnaissais', 'reconnaissait', 'reconnaissions', 'reconnaissiez', 'reconnaissaient'], pp: 'reconnu', aux: 'avoir', imp: ['reconnais', 'reconnaissons', 'reconnaissez'] },
    'paraître': { pres: ['parais', 'parais', 'paraît', 'paraissons', 'paraissez', 'paraissent'], impf: ['paraissais', 'paraissais', 'paraissait', 'paraissions', 'paraissiez', 'paraissaient'], pp: 'paru', aux: 'avoir', imp: ['parais', 'paraissons', 'paraissez'] },
    'naître': { pres: ['nais', 'nais', 'naît', 'naissons', 'naissez', 'naissent'], impf: ['naissais', 'naissais', 'naissait', 'naissions', 'naissiez', 'naissaient'], pp: 'né', aux: 'être', imp: ['nais', 'naissons', 'naissez'] },
    'écrire': { pres: ['écris', 'écris', 'écrit', 'écrivons', 'écrivez', 'écrivent'], impf: ['écrivais', 'écrivais', 'écrivait', 'écrivions', 'écriviez', 'écrivaient'], pp: 'écrit', aux: 'avoir', imp: ['écris', 'écrivons', 'écrivez'] },
    'décrire': { pres: ['décris', 'décris', 'décrit', 'décrivons', 'décrivez', 'décrivent'], impf: ['décrivais', 'décrivais', 'décrivait', 'décrivions', 'décriviez', 'décrivaient'], pp: 'décrit', aux: 'avoir', imp: ['décris', 'décrivons', 'décrivez'] },
    'lire': { pres: ['lis', 'lis', 'lit', 'lisons', 'lisez', 'lisent'], impf: ['lisais', 'lisais', 'lisait', 'lisions', 'lisiez', 'lisaient'], pp: 'lu', aux: 'avoir', imp: ['lis', 'lisons', 'lisez'] },
    'relire': { pres: ['relis', 'relis', 'relit', 'relisons', 'relisez', 'relisent'], impf: ['relisais', 'relisais', 'relisait', 'relisions', 'relisiez', 'relisaient'], pp: 'relu', aux: 'avoir', imp: ['relis', 'relisons', 'relisez'] },
    'boire': { pres: ['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent'], impf: ['buvais', 'buvais', 'buvait', 'buvions', 'buviez', 'buvaient'], pp: 'bu', aux: 'avoir', imp: ['bois', 'buvons', 'buvez'] },
    'croire': { pres: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'], impf: ['croyais', 'croyais', 'croyait', 'croyions', 'croyiez', 'croyaient'], pp: 'cru', aux: 'avoir', imp: ['crois', 'croyons', 'croyez'] },
    'courir': { pres: ['cours', 'cours', 'court', 'courons', 'courez', 'courent'], impf: ['courais', 'courais', 'courait', 'courions', 'couriez', 'couraient'], pp: 'couru', aux: 'avoir', imp: ['cours', 'courons', 'courez'] },
    'ouvrir': { pres: ['ouvre', 'ouvres', 'ouvre', 'ouvrons', 'ouvrez', 'ouvrent'], impf: ['ouvrais', 'ouvrais', 'ouvrait', 'ouvrions', 'ouvriez', 'ouvraient'], pp: 'ouvert', aux: 'avoir', imp: ['ouvre', 'ouvrons', 'ouvrez'] },
    'offrir': { pres: ['offre', 'offres', 'offre', 'offrons', 'offrez', 'offrent'], impf: ['offrais', 'offrais', 'offrait', 'offrions', 'offriez', 'offraient'], pp: 'offert', aux: 'avoir', imp: ['offre', 'offrons', 'offrez'] },
    'découvrir': { pres: ['découvre', 'découvres', 'découvre', 'découvrons', 'découvrez', 'découvrent'], impf: ['découvrais', 'découvrais', 'découvrait', 'découvrions', 'découvriez', 'découvraient'], pp: 'découvert', aux: 'avoir', imp: ['découvre', 'découvrons', 'découvrez'] },
    'couvrir': { pres: ['couvre', 'couvres', 'couvre', 'couvrons', 'couvrez', 'couvrent'], impf: ['couvrais', 'couvrais', 'couvrait', 'couvrions', 'couvriez', 'couvraient'], pp: 'couvert', aux: 'avoir', imp: ['couvre', 'couvrons', 'couvrez'] },
    'plaire': { pres: ['plais', 'plais', 'plaît', 'plaisons', 'plaisez', 'plaisent'], impf: ['plaisais', 'plaisais', 'plaisait', 'plaisions', 'plaisiez', 'plaisaient'], pp: 'plu', aux: 'avoir', imp: ['plais', 'plaisons', 'plaisez'] },
    'rire': { pres: ['ris', 'ris', 'rit', 'rions', 'riez', 'rient'], impf: ['riais', 'riais', 'riait', 'riions', 'riiez', 'riaient'], pp: 'ri', aux: 'avoir', imp: ['ris', 'rions', 'riez'] },
    'sourire': { pres: ['souris', 'souris', 'sourit', 'sourions', 'souriez', 'sourient'], impf: ['souriais', 'souriais', 'souriait', 'souriions', 'souriiez', 'souriaient'], pp: 'souri', aux: 'avoir', imp: ['souris', 'sourions', 'souriez'] },
    'suivre': { pres: ['suis', 'suis', 'suit', 'suivons', 'suivez', 'suivent'], impf: ['suivais', 'suivais', 'suivait', 'suivions', 'suiviez', 'suivaient'], pp: 'suivi', aux: 'avoir', imp: ['suis', 'suivons', 'suivez'] },
    'vivre': { pres: ['vis', 'vis', 'vit', 'vivons', 'vivez', 'vivent'], impf: ['vivais', 'vivais', 'vivait', 'vivions', 'viviez', 'vivaient'], pp: 'vécu', aux: 'avoir', imp: ['vis', 'vivons', 'vivez'] },
    'mourir': { pres: ['meurs', 'meurs', 'meurt', 'mourons', 'mourez', 'meurent'], impf: ['mourais', 'mourais', 'mourait', 'mourions', 'mouriez', 'mouraient'], pp: 'mort', aux: 'être', imp: ['meurs', 'mourons', 'mourez'] },
    'recevoir': { pres: ['reçois', 'reçois', 'reçoit', 'recevons', 'recevez', 'reçoivent'], impf: ['recevais', 'recevais', 'recevait', 'recevions', 'receviez', 'recevaient'], pp: 'reçu', aux: 'avoir', imp: ['reçois', 'recevons', 'recevez'] }
  },

  /* افعال باقاعده که با être صرف می‌شوند (فعل‌های بی‌قاعدهٔ بالا خودشان aux دارند) */
  ETRE_REGULAR: ['arriver', 'entrer', 'rentrer', 'rester', 'tomber', 'monter', 'descendre', 'retourner'],
  /* استثناهای eler/eter که به‌جای دوبرابرشدن حرف، تبدیل e→è می‌گیرند */
  E_ACCENT_STEMS: ['achet', 'gel', 'pel', 'congel', 'dégel', 'halet', 'écartel'],

  _toAccentGrave: function (stem) {
    var idx = Math.max(stem.lastIndexOf('e'), stem.lastIndexOf('é'));
    if (idx < 0) return stem;
    return stem.slice(0, idx) + 'è' + stem.slice(idx + 1);
  },
  _softenGC: function (stem, ending) {
    var first = ending ? ending[0] : '';
    if (first === 'a' || first === 'o') {
      if (/g$/.test(stem)) return stem + 'e';
      if (/c$/.test(stem)) return stem.slice(0, -1) + 'ç';
    }
    return stem;
  },
  _classifyErStem: function (stem) {
    if (/(el|et)$/.test(stem) && this.E_ACCENT_STEMS.indexOf(stem) < 0) return 'double';
    if (/[eé][bcdfgjklmnpqrstvwxz]$/.test(stem)) return 'accent';
    if (/y$/.test(stem)) return 'yer';
    return null;
  },
  _conjugateER: function (inf) {
    var self = this, stem = inf.slice(0, -2);
    var kind = this._classifyErStem(stem);
    var endings = ['e', 'es', 'e', 'ons', 'ez', 'ent'];
    var stressed = { 0: 1, 1: 1, 2: 1, 5: 1 };
    var pres = endings.map(function (end, i) {
      var s = stem;
      if (kind && stressed[i]) {
        if (kind === 'double') s = stem + stem[stem.length - 1];
        else if (kind === 'accent') s = self._toAccentGrave(stem);
        else if (kind === 'yer') s = stem.slice(0, -1) + 'i';
      }
      s = self._softenGC(s, end);
      return s + end;
    });
    var impfEndings = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
    var impf = impfEndings.map(function (end) { return self._softenGC(stem, end) + end; });
    var imp = [pres[1].replace(/s$/, ''), pres[3], pres[4]];
    return { pres: pres, impf: impf, pp: stem + 'é', imp: imp };
  },
  _conjugateIR: function (inf) {
    var stem = inf.slice(0, -2);
    var pres = ['is', 'is', 'it', 'issons', 'issez', 'issent'].map(function (e) { return stem + e; });
    var impf = ['issais', 'issais', 'issait', 'issions', 'issiez', 'issaient'].map(function (e) { return stem + e; });
    return { pres: pres, impf: impf, pp: stem + 'i', imp: [pres[1], pres[3], pres[4]] };
  },
  _conjugateRE: function (inf) {
    var stem = inf.slice(0, -2);
    var pres = ['s', 's', '', 'ons', 'ez', 'ent'].map(function (e) { return stem + e; });
    var impf = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(function (e) { return stem + e; });
    return { pres: pres, impf: impf, pp: stem + 'u', imp: [pres[1], pres[3], pres[4]] };
  },
  _regular: function (inf) {
    if (/er$/.test(inf)) return this._conjugateER(inf);
    if (/ir$/.test(inf)) return this._conjugateIR(inf);
    if (/re$/.test(inf)) return this._conjugateRE(inf);
    return null;
  },

  _elide: function (word, pronoun) {
    if ((pronoun === 'me' || pronoun === 'te' || pronoun === 'se') && /^[aeiouyàâéèêëïîôùûh]/i.test(word)) {
      return pronoun[0] + "'" + word;
    }
    return pronoun + ' ' + word;
  },

  /* موتور اصلی: هر مصدر فرانسه (با/بدون «se »/«s' » در جلویش) را می‌گیرد و
     صرفش را در همهٔ زمان‌های پوشش‌داده‌شده برمی‌گرداند، یا null اگر نشناخت. */
  conjugate: function (raw) {
    var input = (raw || '').trim().toLowerCase();
    if (!input) return null;
    var reflexive = false, base = input;
    if (/^se\s+/.test(input)) { reflexive = true; base = input.replace(/^se\s+/, '').trim(); }
    else if (/^s['’]/.test(input)) { reflexive = true; base = input.replace(/^s['’]/, '').trim(); }
    if (!base) return null;

    var guessed = false, src;
    if (this.IRREGULAR[base]) {
      src = this.IRREGULAR[base];
    } else {
      var reg = this._regular(base);
      if (!reg) return null;
      guessed = true;
      src = { pres: reg.pres, impf: reg.impf, pp: reg.pp, imp: reg.imp, aux: this.ETRE_REGULAR.indexOf(base) >= 0 ? 'être' : 'avoir' };
    }
    var aux = reflexive ? 'être' : src.aux;
    var self = this;

    var pres = src.pres.map(function (form, i) { return reflexive ? self._elide(form, self.REFL[i]) : form; });
    var impf = src.impf.map(function (form, i) { return reflexive ? self._elide(form, self.REFL[i]) : form; });

    var allerPres = this.IRREGULAR['aller'].pres;
    var futurProche = allerPres.map(function (av, i) {
      return av + ' ' + (reflexive ? self._elide(base, self.REFL[i]) : base);
    });

    var auxPres = this.IRREGULAR[aux].pres;
    var passeCompose = auxPres.map(function (av, i) {
      var prefix = reflexive ? self._elide(av, self.REFL[i]) : av;
      return prefix + ' ' + src.pp;
    });

    return {
      infinitive: (reflexive ? 'se ' : '') + base,
      reflexive: reflexive,
      pronouns: this.PRONOUNS,
      pres: pres, impf: impf, futurProche: futurProche, passeCompose: passeCompose,
      imperatif: (!reflexive && src.imp) ? src.imp : null,
      auxiliary: aux, participle: src.pp,
      guessed: guessed
    };
  }
};

/* ---------- نما ---------- */
var Views = window.Views || {};

var CONJ_COMMON = ['être', 'avoir', 'aller', 'faire', 'parler', 'manger', 'aimer', 'habiter', 'travailler',
  'finir', 'choisir', 'prendre', 'venir', 'pouvoir', 'vouloir', 'devoir', 'savoir', 'voir', 'dire',
  'mettre', 'sortir', 'partir', 'dormir', 'boire', 'lire', 'écrire', 'se lever', "s'appeler", 'acheter', 'préférer'];

/* قاعدهٔ کلی صرف فعل‌های باقاعده — سه گروه er/ir/re با فعل نمونه؛ برای نمایش
   قاعده (نه صرف یک فعل خاص) در بالای صفحه، جدا از موتور جستجوی فعل. */
var REGULAR_GROUPS = [
  {
    key: 'er', label: '-ER (مثل parler)', sample: 'parler',
    endings: ['-e', '-es', '-e', '-ons', '-ez', '-ent'],
    pp: 'حذف -er و افزودن -é (مثال: parlé)',
    notes: [
      'حدود ۹۰٪ فعل‌های فرانسه از این گروه‌اند.',
      'فعل‌های -ger (مثل manger): فقط برای nous یک e اضافه می‌شود → mangeons.',
      'فعل‌های -cer (مثل commencer): فقط برای nous، c به ç تبدیل می‌شود → commençons.',
      'فعل‌های -eler/-eter (مثل appeler): حرف آخر دوبرابر می‌شود → appelle (به‌جز چند استثنا مثل acheter که به‌جایش e به è تبدیل می‌شود: achète).',
      'فعل‌های -yer (مثل envoyer): y به i تبدیل می‌شود → envoie.'
    ]
  },
  {
    key: 'ir', label: '-IR (مثل finir)', sample: 'finir',
    endings: ['-is', '-is', '-it', '-issons', '-issez', '-issent'],
    pp: 'حذف -ir و افزودن -i (مثال: fini)',
    notes: ['چند فعل -ir پرکاربرد (partir، sortir، dormir، servir، sentir) از این قاعده پیروی نمی‌کنند — در فرهنگ افعال بی‌قاعدهٔ همین صفحه هستند.']
  },
  {
    key: 're', label: '-RE (مثل vendre)', sample: 'vendre',
    endings: ['-s', '-s', '(بدون پسوند)', '-ons', '-ez', '-ent'],
    pp: 'حذف -re و افزودن -u (مثال: vendu)',
    notes: []
  }
];

function rulesCardHTML() {
  var h = '<div class="card"><h2>📏 قاعدهٔ صرف فعل‌های باقاعده</h2>' +
    '<div class="muted">هر فعل فرانسه بر اساس پایانش (-er، -ir یا -re) یکی از این سه الگو را دنبال می‌کند — این‌جا خودِ قاعده را می‌بینی، برای صرف یک فعل خاص از جستجوی پایین صفحه استفاده کن.</div>' +
    '<div class="btnrow picker group-tabs" style="margin-top:8px"></div>' +
    '<div class="group-body"></div>' +
    '<div class="muted" style="margin-top:12px">این سه مورد برای <b>همهٔ</b> فعل‌ها (باقاعده و اکثر بی‌قاعده‌ها) یکسان است:</div>' +
    '<ul class="muted" style="margin:4px 0 0;padding-inline-start:20px">' +
    '<li><b>گذشتهٔ استمراری (imparfait)</b>: به ریشهٔ nous در زمان حال (بدون -ons) این پسوندها اضافه می‌شود: -ais, -ais, -ait, -ions, -iez, -aient</li>' +
    '<li><b>آیندهٔ نزدیک (futur proche)</b>: فعل aller در زمان حال + مصدر → مثلاً «je vais parler»</li>' +
    '<li><b>امری (impératif)</b>: شکل‌های tu/nous/vous زمان حال، بدون ضمیر (فقط برای فعل‌های -er، حرف s آخرِ tu حذف می‌شود: «tu parles» → «Parle !»)</li>' +
    '</ul></div>';
  return h;
}

Views.conjugator = function (el) {
  el.innerHTML =
    rulesCardHTML() +
    '<div class="card"><h2>🔍 صرف یک فعل خاص</h2>' +
    '<div class="muted">هر فعل فرانسه را (به شکل مصدر، مثل <span class="fr">parler</span> یا <span class="fr">se lever</span>) تایپ کن تا صرفش را در زمان‌های حال، گذشتهٔ ساده، گذشتهٔ ترکیبی، آیندهٔ نزدیک و امری ببینی.</div>' +
    '<input class="ex-input verb-input" type="text" placeholder="مثلاً: parler یا être یا se lever" style="direction:ltr;text-align:left;margin-top:8px">' +
    '<div class="btnrow verb-chips"></div></div>' +
    '<div class="verb-result"></div>';

  var input = el.querySelector('.verb-input');
  var chipsRow = el.querySelector('.verb-chips');
  var resultBox = el.querySelector('.verb-result');

  var tabsRow = el.querySelector('.group-tabs');
  var groupBody = el.querySelector('.group-body');
  function showGroup(g, btn) {
    tabsRow.querySelectorAll('.picker-btn').forEach(function (x) { x.classList.remove('sel'); });
    btn.classList.add('sel');
    var r = VerbConj.conjugate(g.sample);
    var hh = '<h3>صرف نمونه: <span class="fr">' + Exercises.esc(g.sample) + '</span></h3><table class="tbl"><tbody>';
    r.pres.forEach(function (form, i) {
      hh += '<tr><td class="fr" style="text-align:left;color:var(--muted)">' + Exercises.esc(VerbConj.PRONOUNS[i]) + '</td>' +
        '<td class="fr" style="text-align:left;font-weight:600">' + Exercises.esc(form) + '</td>' +
        '<td class="muted fr" style="text-align:left">(' + Exercises.esc(g.endings[i]) + ')</td></tr>';
    });
    hh += '</tbody></table>' +
      '<div class="muted" style="margin-top:8px"><b>گذشتهٔ ساده (participe passé):</b> ' + g.pp + '</div>' +
      (g.notes.length ? '<ul class="muted" style="margin:8px 0 0;padding-inline-start:20px">' + g.notes.map(function (n) { return '<li>' + n + '</li>'; }).join('') + '</ul>' : '');
    groupBody.innerHTML = hh;
  }
  REGULAR_GROUPS.forEach(function (g, i) {
    var b = document.createElement('button');
    b.className = 'btn-ghost picker-btn';
    b.textContent = g.label;
    b.onclick = function () { showGroup(g, b); };
    tabsRow.appendChild(b);
    if (i === 0) showGroup(g, b);
  });

  CONJ_COMMON.forEach(function (v) {
    var b = document.createElement('button');
    b.className = 'btn-ghost picker-btn fr';
    b.textContent = v;
    b.onclick = function () { input.value = v; run(); };
    chipsRow.appendChild(b);
  });

  function tenseTable(title, icon, rows, pronouns) {
    var h = '<h3>' + icon + ' ' + title + '</h3><table class="tbl"><tbody>';
    rows.forEach(function (form, i) {
      h += '<tr><td class="fr" style="text-align:left;color:var(--muted)">' + Exercises.esc(pronouns ? pronouns[i] : VerbConj.PRONOUNS[i]) + '</td>' +
        '<td class="fr" style="text-align:left;font-weight:600">' + Exercises.esc(form) + '</td>' +
        '<td>' + audioBtn(form) + '</td></tr>';
    });
    h += '</tbody></table>';
    return h;
  }

  function run() {
    var raw = input.value;
    if (!raw.trim()) { resultBox.innerHTML = ''; return; }
    var r = VerbConj.conjugate(raw);
    if (!r) {
      resultBox.innerHTML = '<div class="card"><div class="feedback warn">این را به‌عنوان مصدر فرانسه نشناختم. مصدر باید به <span class="fr">-er</span>، <span class="fr">-ir</span> یا <span class="fr">-re</span> ختم شود (مثلاً <span class="fr">parler</span>، <span class="fr">finir</span>، <span class="fr">vendre</span>) یا برای فعل انعکاسی با <span class="fr">se</span> / <span class="fr">s\'</span> شروع شود.</div></div>';
      return;
    }
    var h = '<div class="card">' +
      '<h2><span class="fr">' + Exercises.esc(r.infinitive) + '</span> ' + audioBtn(r.infinitive) + '</h2>' +
      '<div class="muted">فعل کمکی در گذشته: <b>' + r.auxiliary + '</b> · participe passé: <span class="fr">' + Exercises.esc(r.participle) + '</span></div>' +
      (r.guessed ? '<div class="feedback warn" style="margin-top:8px">⚠️ این فعل در فرهنگ افعال بی‌قاعدهٔ اپ نبود — صرف زیر بر اساس قاعدهٔ فعل‌های باقاعده حدس زده شده. اگر فعل بی‌قاعدهٔ ناآشنایی است، ممکن است دقیق نباشد.</div>' : '') +
      (r.auxiliary === 'être' ? '<div class="muted" style="margin-top:6px">نکته: چون فعل کمکی être است، «participe passé» باید با جنسیت/تعداد فاعل هماهنگ شود (مثلاً elle est allé<b>e</b>، ils sont allé<b>s</b>) — بالا فقط شکل پایه نشان داده شده.</div>' : '') +
      '</div>';
    h += '<div class="card">' + tenseTable('زمان حال (Présent)', '🟢', r.pres) + '</div>';
    h += '<div class="card">' + tenseTable('گذشتهٔ ترکیبی (Passé composé)', '🟠', r.passeCompose) + '</div>';
    h += '<div class="card">' + tenseTable('گذشتهٔ استمراری (Imparfait)', '🔵', r.impf) + '</div>';
    h += '<div class="card">' + tenseTable('آیندهٔ نزدیک (Futur proche)', '🟣', r.futurProche) + '</div>';
    if (r.imperatif) {
      h += '<div class="card">' + tenseTable('امری (Impératif)', '❗', r.imperatif, ['(tu)', '(nous)', '(vous)']) + '</div>';
    }
    resultBox.innerHTML = h;
    window.scrollTo(0, 0);
  }

  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') run(); });
  input.addEventListener('blur', run);
};

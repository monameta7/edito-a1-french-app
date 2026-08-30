/* ===== واژه‌نامه کامل قابل جستجو =====
   همه واژه‌ها و عبارت‌های فرانسه اپ (از همه واحدها + کلمات دستی کاربر)
   را یک‌جا و جستجوپذیر نشان می‌دهد؛ چون بعضی واژه‌ها در چند درس تکرار
   می‌شوند، بر اساس متن فرانسه یکتاسازی می‌شوند و نسخه‌ای که تلفظ/مثال
   دارد (vocab) به نسخه بی‌مثال (phrases) ترجیح داده می‌شود. */
function buildDictionaryList() {
  var map = {};
  Curriculum.allLessons().forEach(function (l) {
    (l.vocab || []).forEach(function (v, i) {
      var key = (v.fr || '').toLowerCase();
      if (!key) return;
      if (!map[key] || (!map[key].ipa && v.ipa)) {
        map[key] = { fr: v.fr, ipa: v.ipa, fa: v.fa, ex: v.ex, exfa: v.exfa, id: l.id + ':v' + i };
      }
    });
    (l.phrases || []).forEach(function (p, i) {
      var key = (p.fr || '').toLowerCase();
      if (!key) return;
      if (!map[key]) map[key] = { fr: p.fr, fa: p.fa, id: l.id + ':p' + i };
    });
  });
  for (var id in Store.state.customWords) {
    var w = Store.state.customWords[id];
    var key = (w.fr || '').toLowerCase();
    if (key) map[key] = { fr: w.fr, ipa: w.ipa, fa: w.fa, ex: w.ex, exfa: w.exfa, id: id };
  }
  var list = [];
  for (var k in map) list.push(map[k]);
  list.sort(function (a, b) { return a.fr.localeCompare(b.fr, 'fr'); });
  return list;
}

var Views = window.Views || {};

Views.dictionary = function (el) {
  var all = buildDictionaryList();
  el.innerHTML =
    '<h2 style="margin:10px 4px">📖 واژه‌نامه</h2>' +
    '<div class="muted" style="margin:0 4px 10px">جستجو در تمام ' + all.length + ' واژه و عبارت فرانسه — با تلفظ، معنی و مثال</div>' +
    '<div class="card"><input class="ex-input dict-search" type="text" placeholder="جستجو به فرانسه یا فارسی... مثلاً bonjour یا سلام" style="direction:rtl;text-align:right"></div>' +
    '<div class="dict-count muted" style="margin:8px 4px"></div>' +
    '<div class="dict-list"></div>' +
    '<div class="wikt-box"></div>';

  var input = el.querySelector('.dict-search');
  var listEl = el.querySelector('.dict-list');
  var countEl = el.querySelector('.dict-count');
  var wiktBox = el.querySelector('.wikt-box');
  var LIMIT = 200;

  function norm(s) { return (s || '').toLowerCase(); }

  function render(query) {
    var q = norm(query).trim();
    var items = !q ? all : all.filter(function (w) {
      return norm(w.fr).indexOf(q) >= 0 || norm(w.fa).indexOf(q) >= 0 || norm(w.ipa).indexOf(q) >= 0;
    });
    countEl.textContent = items.length + ' واژه';
    wiktBox.innerHTML = '';
    if (q) {
      var wb = document.createElement('div');
      wb.className = 'btnrow';
      wb.innerHTML = '<button class="btn-ghost wikt-btn">🌐 جستجوی «' + Exercises.esc(query.trim()) + '» در Wiktionary' + (items.length ? ' (اگر همین‌ها کافی نبود)' : '') + '</button>';
      wiktBox.appendChild(wb);
      wb.querySelector('.wikt-btn').onclick = function () { runWiktionary(query.trim()); };
    }
    if (!items.length) {
      listEl.innerHTML = '<div class="muted center">چیزی پیدا نشد — می‌توانی از دکمهٔ بالا در Wiktionary هم بگردی.</div>';
      return;
    }
    var shown = items.slice(0, LIMIT);
    var h = '<div class="card">';
    shown.forEach(function (w) {
      var inBox = SRS.inLeitner(w.id);
      var emoji = wordEmoji(w.fr);
      h += '<div class="vocab-row">' +
        (emoji ? '<span class="vocab-emoji">' + emoji + '</span>' : '') +
        '<span class="vocab-fr fr">' + Exercises.esc(w.fr) + '</span>' +
        (w.ipa ? '<span class="chip">[' + Exercises.esc(w.ipa) + ']</span>' : '') +
        audioBtn(w.fr) +
        '<span class="vocab-fa">' + Exercises.esc(w.fa) + '</span>' +
        (inBox
          ? '<span class="chip ok">✅ در جعبه لایتنر</span>'
          : '<button class="btn-ghost add-leitner-btn" data-id="' + w.id + '">➕ افزودن به لایتنر</button>') +
        '</div>';
      if (w.ex) {
        h += '<div class="vocab-ex"><span class="fr">' + Exercises.esc(w.ex) + '</span> ' + audioBtn(w.ex) +
          (w.exfa ? '<div class="muted">' + Exercises.esc(w.exfa) + '</div>' : '') + '</div>';
      }
    });
    h += '</div>';
    if (items.length > LIMIT) h += '<div class="muted center">و ' + (items.length - LIMIT) + ' واژه دیگر — برای دیدن‌شان دقیق‌تر جستجو کن</div>';
    listEl.innerHTML = h;
  }

  function runWiktionary(word) {
    if (!word) return;
    wiktBox.innerHTML = '<div class="card"><div class="muted center">در حال جستجو در Wiktionary...</div></div>';
    Wiktionary.lookup(word).then(function (entries) {
      if (!entries) {
        wiktBox.innerHTML = '<div class="card"><div class="muted">در Wiktionary هم چیزی برای «' + Exercises.esc(word) + '» پیدا نشد.</div></div>';
        return;
      }
      var h = '<div class="card"><h3>🌐 از Wiktionary: <span class="fr">' + Exercises.esc(word) + '</span></h3>';
      entries.forEach(function (en) {
        h += '<div class="vocab-row"><span class="chip">' + Exercises.esc(en.heading) + '</span></div>' +
          '<div class="vocab-ex"><span class="fr">' + Exercises.esc(en.headword) + '</span></div>' +
          '<div class="vocab-ex">' + Exercises.esc(en.def) + '</div>';
      });
      h += '<div class="muted" style="margin-top:8px">منبع: <a href="https://fr.wiktionary.org/wiki/' + encodeURIComponent(word) + '" target="_blank" rel="noopener">Wiktionary (fr)</a> — مجوز CC BY-SA، تعریف‌ها به فرانسه‌اند. برای دیدن مثال‌های کامل به لینک بالا سر بزن.</div></div>';
      wiktBox.innerHTML = h;
    }).catch(function (err) {
      wiktBox.innerHTML = '<div class="card"><div class="feedback warn">' +
        (err && err.kind === 'file'
          ? '📡 این قابلیت فقط روی http://localhost:5173 کار می‌کند (نه با دابل‌کلیک روی index.html).'
          : '📡 مشکل اتصال به اینترنت یا سرور Wiktionary. دوباره امتحان کن.') +
        '</div></div>';
    });
  }

  listEl.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.add-leitner-btn') : null;
    if (!btn) return;
    var id = btn.dataset.id;
    if (SRS.addExisting(id)) {
      toast('به جعبه لایتنر اضافه شد ✅');
      render(input.value);
    }
  });

  render('');
  input.addEventListener('input', function () { render(input.value); });
};

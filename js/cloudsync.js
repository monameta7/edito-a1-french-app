/* ===== ورود با گوگل + همگام‌سازی پیشرفت بین دستگاه‌ها (اختیاری، با Supabase) =====
   اگر پیکربندی Supabase هنوز وارد نشده (یا اسکریپت آن لود نشود — مثلاً به‌خاطر
   قطعی اینترنت یا ad-blocker)، این بخش کاملاً غیرفعال می‌ماند و اپ دقیقاً مثل
   قبل (فقط localStorage روی همین مرورگر) کار می‌کند — بدون خطا. */
var SUPABASE_CONFIG = {
  url: 'https://mekjiwxaqmuoenpbtkse.supabase.co',
  anonKey: 'sb_publishable_3bbIBGrEgZfHGkrQEfg1CA_SzfjaI4C'
};

var CloudSync = {
  enabled: false,
  ready: false,
  user: null,
  _saveTimer: null,
  _listeners: [],

  /* هر تابعی که با onChange ثبت شود، بعد از تغییر وضعیت ورود صدا زده می‌شود
     (برای اینکه Views.settings/home بتوانند خودشان را دوباره رسم کنند) */
  onChange: function (fn) { this._listeners.push(fn); },
  _notify: function () { this._listeners.forEach(function (fn) { try { fn(); } catch (e) {} }); },

  init: function () {
    if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.indexOf('PASTE_') === 0) return;
    if (typeof supabase === 'undefined' || !supabase.createClient) return;
    try {
      this.client = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    } catch (e) { return; }
    this.enabled = true;
    var self = this;
    /* اولین بار که این event صدا زده می‌شود، همان وضعیت فعلی (وارد شده یا نه) را
       می‌دهد — چه صفحه تازه رفرش شده باشد چه تازه از صفحه ورود گوگل برگشته باشد */
    this.client.auth.onAuthStateChange(function (event, session) {
      self.ready = true;
      self._setUser(session ? session.user : null);
    });
  },

  _setUser: function (user) {
    var justSignedIn = !this.user && user;
    this.user = user;
    if (justSignedIn) this._onSignIn(user);
    this._notify();
  },

  signIn: function () {
    if (!this.enabled) return Promise.reject(new Error('cloud sync not configured'));
    return this.client.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: location.origin + location.pathname }
    });
  },

  signOut: function () {
    if (!this.enabled) return;
    var self = this;
    this.client.auth.signOut().then(function () { self.user = null; self._notify(); });
  },

  /* اولین بار بعد از ورود: اگر نسخه ابری موجود بود، آن را جایگزین پیشرفت محلی کن
     (چون فرض بر این است که کاربر همان حسابش را روی چند دستگاه استفاده می‌کند)؛
     اگر نبود (اولین ورود این کاربر)، پیشرفت محلی فعلی را به‌عنوان شروع در ابر آپلود کن */
  _onSignIn: function (user) {
    var self = this;
    this.client.from('progress').select('state').eq('user_id', user.id).maybeSingle().then(function (res) {
      if (res.data && res.data.state) {
        try {
          var cloudState = JSON.parse(res.data.state);
          var keepKey = Store.state.settings && Store.state.settings.apiKey;
          Store.state = cloudState;
          var d = Store.defaults();
          for (var k in d) if (!(k in Store.state)) Store.state[k] = d[k];
          for (var sk in d.settings) if (!(sk in Store.state.settings)) Store.state.settings[sk] = d.settings[sk];
          /* کلید API هیچ‌وقت در ابر ذخیره نمی‌شود — کلید همینِ مرورگر را نگه دار */
          Store.state.settings.apiKey = keepKey || Store.state.settings.apiKey || '';
          localStorage.setItem(Store.KEY, JSON.stringify(Store.state));
          if (typeof buildItemIndex === 'function') buildItemIndex();
        } catch (e) {}
      } else {
        self._pushNow();
      }
      self._notify();
      if (typeof route === 'function') route();
    }).catch(function () {});
  },

  /* هر بار Store.save() صدا زده شود از اینجا هم رد می‌شود؛ برای جلوگیری از
     نوشتن زیاد روی Supabase، چند نوشتن پشت‌سرهم را در یک نوشتن ادغام می‌کند */
  queuePush: function () {
    if (!this.enabled || !this.user) return;
    var self = this;
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(function () { self._pushNow(); }, 1500);
  },

  _pushNow: function () {
    if (!this.enabled || !this.user) return;
    var clone = JSON.parse(JSON.stringify(Store.state));
    clone.settings = clone.settings || {};
    clone.settings.apiKey = ''; /* کلید API هیچ‌وقت به ابر فرستاده نمی‌شود */
    var self = this;
    this.client.from('progress').upsert({
      user_id: this.user.id,
      state: JSON.stringify(clone),
      updated_at: new Date().toISOString()
    }).then(function (res) {
      if (!res.error) { self.lastSyncedAt = new Date(); self._notify(); }
    }).catch(function () {});
  }
};

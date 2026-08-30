/* ===== ورود با گوگل + همگام‌سازی پیشرفت بین دستگاه‌ها (اختیاری، با Firebase) =====
   اگر پیکربندی Firebase هنوز وارد نشده (یا اسکریپت‌های Firebase لود نشوند —
   مثلاً به‌خاطر قطعی اینترنت یا ad-blocker)، این بخش کاملاً غیرفعال می‌ماند و
   اپ دقیقاً مثل قبل (فقط localStorage روی همین مرورگر) کار می‌کند — بدون خطا. */
var FIREBASE_CONFIG = {
  apiKey: 'PASTE_YOUR_FIREBASE_CONFIG_HERE',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
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
    if (!FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey.indexOf('PASTE_') === 0) return;
    if (typeof firebase === 'undefined') return;
    var self = this;
    try {
      firebase.initializeApp(FIREBASE_CONFIG);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
    } catch (e) { return; }
    this.enabled = true;
    this.auth.onAuthStateChanged(function (user) {
      var justSignedIn = !self.user && user;
      self.user = user;
      self.ready = true;
      if (justSignedIn) self._onSignIn(user);
      self._notify();
    });
  },

  signIn: function () {
    if (!this.enabled) return Promise.reject(new Error('cloud sync not configured'));
    var provider = new firebase.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  },

  signOut: function () {
    if (!this.enabled) return;
    this.auth.signOut();
  },

  /* اولین بار بعد از ورود: اگر نسخه ابری موجود بود، آن را جایگزین پیشرفت محلی کن
     (چون فرض بر این است که کاربر همان حسابش را روی چند دستگاه استفاده می‌کند)؛
     اگر نبود (اولین ورود این کاربر)، پیشرفت محلی فعلی را به‌عنوان شروع در ابر آپلود کن */
  _onSignIn: function (user) {
    var self = this;
    this.db.collection('progress').doc(user.uid).get().then(function (doc) {
      if (doc.exists && doc.data() && doc.data().state) {
        try {
          var cloudState = JSON.parse(doc.data().state);
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
     نوشتن زیاد روی Firestore، چند نوشتن پشت‌سرهم را در یک نوشتن ادغام می‌کند */
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
    this.db.collection('progress').doc(this.user.uid).set({
      state: JSON.stringify(clone),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function () {
      self.lastSyncedAt = new Date();
      self._notify();
    }).catch(function () {});
  }
};

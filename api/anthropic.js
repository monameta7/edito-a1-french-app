/* ===== Vercel Serverless Function — واسط مشترک برای مکالمه زنده و تصحیح نوشتار =====
   کلید API آنتروپیک اینجا (فقط روی سرور، از process.env.ANTHROPIC_API_KEY) نگه داشته
   می‌شود و هرگز به مرورگر فرستاده نمی‌شود؛ این تابع برای هر بازدیدکننده‌ای که خودش کلید
   شخصی وارد نکرده باشد صدا زده می‌شود.

   برای جلوگیری از سوءاستفاده (چون کلید مشترک است و هزینه‌اش با صاحب سایت است)، یک سقف
   روزانه ساده بر اساس IP از طریق یک تابع Postgres در Supabase (با کلید anon عمومی —
   همان کلیدی که js/cloudsync.js هم استفاده می‌کند) اعمال می‌شود. اگر Supabase در دسترس
   نبود، درخواست رد می‌شود بدون اعمال محدودیت (fail-open) تا یک قطعی موقت باعث از کار
   افتادن کامل قابلیت نشود. */

var SUPABASE_URL = 'https://mekjiwxaqmuoenpbtkse.supabase.co';
var SUPABASE_ANON_KEY = 'sb_publishable_3bbIBGrEgZfHGkrQEfg1CA_SzfjaI4C';
var DAILY_LIMIT = 15; /* سقف رایگان هر IP در روز — هم مکالمه هم تصحیح نوشتار را می‌شمارد */

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: { message: 'Method not allowed' } });
    return;
  }

  var apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: { message: 'سرور هنوز پیکربندی نشده — کلید API روی Vercel تنظیم نشده است.' } });
    return;
  }

  var ip = ((req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown') + '').split(',')[0].trim();
  var day = new Date().toISOString().slice(0, 10);
  var usageId = ip + ':' + day;

  try {
    var rpcRes = await fetch(SUPABASE_URL + '/rest/v1/rpc/increment_api_usage', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        authorization: 'Bearer ' + SUPABASE_ANON_KEY
      },
      body: JSON.stringify({ usage_id: usageId, daily_limit: DAILY_LIMIT })
    });
    if (rpcRes.ok) {
      var allowed = await rpcRes.json();
      if (allowed === false) {
        res.status(429).json({ error: { message: 'سقف رایگان امروز پر شده — فردا دوباره امتحان کن، یا کلید شخصی‌ات را در ⚙️ تنظیمات وارد کن تا محدودیتی نداشته باشی.' } });
        return;
      }
    }
  } catch (e) {
    /* Supabase در دسترس نبود — بدون اعمال محدودیت ادامه بده */
  }

  try {
    var body = req.body || {};
    var anthRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: body.max_tokens || 400,
        system: body.system,
        messages: body.messages
      })
    });
    var data = await anthRes.json();
    res.status(anthRes.status).json(data);
  } catch (e) {
    res.status(502).json({ error: { message: 'اتصال به سرور Anthropic برقرار نشد.' } });
  }
};

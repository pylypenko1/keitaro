// Получение значения idpxl из cookie
function getCookieValue(name) {
  const value = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return value ? value.pop() : '';
}

const trafficSource = localStorage.getItem('trafficSource');
const idpxl = getCookieValue('idpxl');

switch (trafficSource) {
  case 'facebook':
    // Lead Event
    // Facebook Pixel Code
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', idpxl);
    fbq('track', 'Lead');
    break;

  case 'bigo':
    window.bgdataLayer = window.bgdataLayer || [];
    function bge() {
      bgdataLayer.push(arguments);
    }
    bge('init', idpxl);

    const newScript = document.createElement('script');
    newScript.async = true;
    newScript.src = `https://api.imotech.video/ad/events.js?pixel_id=${idpxl}`;
    const currentScript = document.currentScript;
    currentScript.parentNode.insertBefore(newScript, currentScript.nextSibling);
    break;

  case 'google':
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', idpxl);
    gtag('event', 'conversion', { 'send_to': idpxl });

    const newScriptGgl = document.createElement('script');
    newScriptGgl.async = true;
    newScriptGgl.src = `https://www.googletagmanager.com/gtag/js?id=${idpxl}`;
    const currentScriptGgl = document.currentScriptGgl;
    currentScriptGgl.parentNode.insertBefore(newScriptGgl, currentScriptGgl.nextSibling);
    break;

  default:
    // Обработка по умолчанию, если trafficSource не соответствует ни одному из случаев
    console.log('Undefined source');
    break;
}

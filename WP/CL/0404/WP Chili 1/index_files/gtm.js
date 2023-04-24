// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: '6',

      macros: [
        { function: '__e' },
        {
          function: '__gas',
          vtp_cookieDomain: 'auto',
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: 'UA-194788136-1',
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: false,
        },
        { function: '__v', vtp_name: 'gtm.elementClasses', vtp_dataLayerVersion: 1 },
        {
          function: '__u',
          vtp_component: 'PATH',
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: '__v',
          vtp_name: 'gtm.triggers',
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: '',
        },
        { function: '__v', vtp_name: 'gtm.elementUrl', vtp_dataLayerVersion: 1 },
        {
          function: '__smm',
          vtp_setDefaultValue: false,
          vtp_input: ['macro', 5],
          vtp_map: ['list', ['map', 'key', 'mailto:contacto@biendu.shop', 'value', 'mail']],
        },
        {
          function: '__smm',
          vtp_setDefaultValue: false,
          vtp_input: ['macro', 5],
          vtp_map: [
            'list',
            ['map', 'key', 'tel:+56968469597', 'value', 'telChi'],
            ['map', 'key', 'tel:+573003224287', 'value', 'telCol'],
            ['map', 'key', 'tel:+5491521684951', 'value', 'telArg'],
            ['map', 'key', 'tel:5554280940', 'value', 'tel'],
          ],
        },
        {
          function: '__u',
          vtp_component: 'URL',
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: '__u',
          vtp_component: 'HOST',
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: '__f', vtp_component: 'URL' },
        { function: '__e' },
        { function: '__v', vtp_name: 'gtm.element', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.elementClasses', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.elementId', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.elementTarget', vtp_dataLayerVersion: 1 },
        { function: '__aev', vtp_varType: 'TEXT' },
        { function: '__v', vtp_name: 'gtm.element', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.elementId', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.elementTarget', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.elementUrl', vtp_dataLayerVersion: 1 },
        { function: '__aev', vtp_varType: 'TEXT' },
      ],
      tags: [
        {
          function: '__ua',
          metadata: ['map'],
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: 'TRACK_PAGEVIEW',
          vtp_gaSettings: ['macro', 1],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: false,
          tag_id: 4,
        },
        {
          function: '__ua',
          metadata: ['map'],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: 'conversiones',
          vtp_trackType: 'TRACK_EVENT',
          vtp_gaSettings: ['macro', 1],
          vtp_eventAction: 'form',
          vtp_eventLabel: ['macro', 3],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 6,
        },
        {
          function: '__ua',
          metadata: ['map'],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: 'conversiones',
          vtp_trackType: 'TRACK_EVENT',
          vtp_gaSettings: ['macro', 1],
          vtp_eventAction: 'click',
          vtp_eventLabel: ['macro', 6],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 9,
        },
        {
          function: '__ua',
          metadata: ['map'],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: 'conversiones',
          vtp_trackType: 'TRACK_EVENT',
          vtp_gaSettings: ['macro', 1],
          vtp_eventAction: 'click',
          vtp_eventLabel: ['macro', 7],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 16,
        },
        {
          function: '__ua',
          metadata: ['map'],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: 'conversiones',
          vtp_trackType: 'TRACK_EVENT',
          vtp_gaSettings: ['macro', 1],
          vtp_eventAction: 'cotizacion',
          vtp_eventLabel: ['macro', 3],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 19,
        },
        {
          function: '__gaawc',
          metadata: ['map'],
          once_per_event: true,
          vtp_sendPageView: true,
          vtp_enableSendToServerContainer: false,
          vtp_measurementId: 'G-Y2YBLH1JSH',
          vtp_enableUserProperties: true,
          vtp_enableEuid: false,
          vtp_enableSendFirstPartyUserDataForSgtm: true,
          tag_id: 21,
        },
        {
          function: '__fsl',
          vtp_waitForTagsTimeout: '2000',
          vtp_uniqueTriggerId: '43792919_5',
          tag_id: 22,
        },
        {
          function: '__lcl',
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: '2000',
          vtp_uniqueTriggerId: '43792919_8',
          tag_id: 23,
        },
        {
          function: '__lcl',
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: '2000',
          vtp_uniqueTriggerId: '43792919_15',
          tag_id: 24,
        },
        {
          function: '__fsl',
          vtp_waitForTagsTimeout: '2000',
          vtp_uniqueTriggerId: '43792919_18',
          tag_id: 25,
        },
        {
          function: '__html',
          metadata: ['map'],
          once_per_load: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","746055080129373");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height="1" width="1" src="https://www.facebook.com/tr?id=7460550801293732\u0026amp;ev=PageView\n\u0026amp;noscript=1"\u003E\n\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 11,
        },
        {
          function: '__html',
          metadata: ['map'],
          setup_tags: ['list', ['tag', 10, 0]],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efbq("track","clickMail");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 12,
        },
        {
          function: '__html',
          metadata: ['map'],
          setup_tags: ['list', ['tag', 10, 0]],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efbq("track","Lead");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 13,
        },
        {
          function: '__html',
          metadata: ['map'],
          setup_tags: ['list', ['tag', 10, 0]],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efbq("track","clickTel");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 17,
        },
        {
          function: '__html',
          metadata: ['map'],
          setup_tags: ['list', ['tag', 10, 0]],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efbq("track","cotizacion");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 20,
        },
      ],
      predicates: [
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.js' },
        { function: '_cn', arg0: ['macro', 2], arg1: 'wpcf7-form' },
        { function: '_eq', arg0: ['macro', 3], arg1: '/cotizar_servicios/' },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.formSubmit' },
        { function: '_re', arg0: ['macro', 4], arg1: '(^$|((^|,)43792919_5($|,)))' },
        { function: '_eq', arg0: ['macro', 6], arg1: 'mail' },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.linkClick' },
        { function: '_re', arg0: ['macro', 4], arg1: '(^$|((^|,)43792919_8($|,)))' },
        { function: '_sw', arg0: ['macro', 7], arg1: 'tel' },
        { function: '_re', arg0: ['macro', 4], arg1: '(^$|((^|,)43792919_15($|,)))' },
        { function: '_re', arg0: ['macro', 4], arg1: '(^$|((^|,)43792919_18($|,)))' },
      ],
      rules: [
        [
          ['if', 0],
          ['add', 0, 5, 10, 6, 7, 8, 9],
        ],
        [
          ['if', 1, 3, 4],
          ['unless', 2],
          ['add', 1, 12],
        ],
        [
          ['if', 5, 6, 7],
          ['add', 2, 11],
        ],
        [
          ['if', 6, 8, 9],
          ['add', 3, 13],
        ],
        [
          ['if', 1, 2, 3, 10],
          ['add', 4, 14],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    da;
  if ('function' == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
  else {
    var ea;
    a: {
      var fa = { a: !0 },
        ia = {};
      try {
        ia.__proto__ = fa;
        ea = ia.a;
        break a;
      } catch (a) {}
      ea = !1;
    }
    da = ea
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var ja = da,
    ka = function (a, b) {
      a.prototype = ca(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Dk = b.prototype;
    },
    la = this || self,
    ma = function (a) {
      return a;
    };
  var na = function () {},
    oa = function (a) {
      return 'function' === typeof a;
    },
    h = function (a) {
      return 'string' === typeof a;
    },
    pa = function (a) {
      return 'number' === typeof a && !isNaN(a);
    },
    qa = Array.isArray,
    ra = function (a, b) {
      if (a && qa(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    sa = function (a, b) {
      if (!pa(a) || !pa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    ua = function (a, b) {
      for (var c = new ta(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    xa = function (a) {
      return (
        !!a &&
        ('[object Arguments]' === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, 'callee'))
      );
    },
    za = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Aa = function (a) {
      return 'false' === String(a).toLowerCase() ? !1 : !!a;
    },
    Ba = function (a) {
      var b = [];
      if (qa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ca = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : '';
    },
    Da = function () {
      return new Date(Date.now());
    },
    z = function () {
      return Da().getTime();
    },
    ta = function () {
      this.prefix = 'gtm.';
      this.values = {};
    };
  ta.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ta.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ea = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Fa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ga = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ha = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ia = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ja = function (a, b) {
      for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ka = /^\w{1,9}$/,
    La = function (a, b) {
      a = a || {};
      b = b || ',';
      var c = [];
      k(a, function (d, e) {
        Ka.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ma = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var Pa = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ('string' === typeof a)
          return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Qa,
    Ra = function () {
      if (void 0 === Qa) {
        var a = null,
          b = la.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy('goog#html', {
              createHTML: ma,
              createScript: ma,
              createScriptURL: ma,
            });
          } catch (c) {
            la.console && la.console.error(c.message);
          }
          Qa = a;
        } else Qa = a;
      }
      return Qa;
    };
  var Ta = function (a, b) {
    this.h = b === Sa ? a : '';
  };
  Ta.prototype.toString = function () {
    return this.h + '';
  };
  var Sa = {};
  var Ua = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Va() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return '';
  }
  function Wa(a) {
    return -1 != Va().indexOf(a);
  }
  function Xa() {
    return Wa('Firefox') || Wa('FxiOS');
  }
  function Ya() {
    return ((Wa('Chrome') || Wa('CriOS')) && !Wa('Edge')) || Wa('Silk');
  }
  var Za = {},
    $a = function (a, b) {
      this.h = b === Za ? a : '';
    };
  $a.prototype.toString = function () {
    return this.h.toString();
  };
  var ab = function (a) {
      return a instanceof $a && a.constructor === $a ? a.h : 'type_error:SafeHtml';
    },
    bb = function (a) {
      var b = a,
        c = Ra(),
        d = c ? c.createHTML(b) : b;
      return new $a(d, Za);
    };
  function cb(a) {
    if ('script' === a.tagName.toLowerCase()) throw Error('Use setTextContent with a SafeScript.');
    if ('style' === a.tagName.toLowerCase())
      throw Error('Use setTextContent with a SafeStyleSheet.');
  }
  function db() {
    for (var a = eb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function fb() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a += a.toLowerCase() + '0123456789-_';
    return a + '.';
  }
  var eb, gb;
  function hb(a) {
    eb = eb || fb();
    gb = gb || db();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(eb[m], eb[n], eb[p], eb[q]);
    }
    return b.join('');
  }
  function ib(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = gb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error('Unknown base64 encoding at char: ' + n);
      }
      return m;
    }
    eb = eb || fb();
    gb = gb || db();
    for (var c = '', d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var jb = {},
    kb = function (a, b) {
      jb[a] = jb[a] || [];
      jb[a][b] = !0;
    },
    lb = function () {
      delete jb.GA4_EVENT;
    },
    mb = function (a) {
      for (var b = [], c = jb[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(b[e] || 0);
      return b.join('');
    },
    nb = function (a) {
      var b = jb[a];
      if (!b || 0 === b.length) return '';
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return hb(c.join('')).replace(/\.+$/, '');
    };
  var E = window,
    F = document,
    ob = navigator,
    pb = F.currentScript && F.currentScript.src,
    qb = function (a, b) {
      var c = E[a];
      E[a] = void 0 === c ? b : c;
      return E[a];
    },
    rb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b());
            }));
    },
    sb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    tb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function ub(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var vb = function (a, b, c, d, e) {
      var f = F.createElement('script');
      ub(f, d, sb);
      f.type = 'text/javascript';
      f.async = !0;
      var g,
        l = a,
        m = Ra(),
        n = m ? m.createScriptURL(l) : l;
      g = new Ta(n, Sa);
      f.src = g instanceof Ta && g.constructor === Ta ? g.h : 'type_error:TrustedResourceUrl';
      var p,
        q,
        t,
        u =
          null ==
          (t = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window).document)
            .querySelector)
            ? void 0
            : t.call(q, 'script[nonce]');
      (p = u ? u.nonce || u.getAttribute('nonce') || '' : '') && f.setAttribute('nonce', p);
      rb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var r = F.getElementsByTagName('script')[0] || F.body || F.head;
        r.parentNode.insertBefore(f, r);
      }
      return f;
    },
    wb = function () {
      if (pb) {
        var a = pb.toLowerCase();
        if (0 === a.indexOf('https://')) return 2;
        if (0 === a.indexOf('http://')) return 3;
      }
      return 1;
    },
    xb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        l = !1;
      g || ((g = F.createElement('iframe')), (l = !0));
      ub(g, c, tb);
      d &&
        k(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = '0'),
        (g.width = '0'),
        (g.style.display = 'none'),
        (g.style.visibility = 'hidden'));
      if (l) {
        var m = (F.body && F.body.lastChild) || F.body || F.head;
        m.parentNode.insertBefore(g, m);
      }
      rb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    yb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    zb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    },
    Ab = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c);
    },
    G = function (a) {
      E.setTimeout(a, 0);
    },
    Bb = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Cb = function (a) {
      var b = a.innerText || a.textContent || '';
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
      return b;
    },
    Db = function (a) {
      var b = F.createElement('div'),
        c = b,
        d = bb('A<div>' + a + '</div>');
      void 0 !== c.tagName && cb(c);
      c.innerHTML = ab(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Eb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Fb = function (a) {
      var b;
      try {
        b = ob.sendBeacon && ob.sendBeacon(a);
      } catch (c) {
        kb('TAGGING', 15);
      }
      b || yb(a);
    },
    Gb = function (a, b) {
      var c = a[b];
      c && 'string' === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Hb = function () {
      var a = E.performance;
      if (a && oa(a.now)) return a.now();
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Jb = function (a) {
      if (null == a) return String(a);
      var b = Ib.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : 'object';
    },
    Kb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    J = function (a) {
      if (!a || 'object' != Jb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Kb(a, 'constructor') && !Kb(a.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Kb(a, b);
    },
    N = function (a, b) {
      var c = b || ('array' == Jb(a) ? [] : {}),
        d;
      for (d in a)
        if (Kb(a, d)) {
          var e = a[d];
          'array' == Jb(e)
            ? ('array' != Jb(c[d]) && (c[d] = []), (c[d] = N(e, c[d])))
            : J(e)
            ? (J(c[d]) || (c[d] = {}), (c[d] = N(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Lb = function (a) {
    if (void 0 === a || qa(a) || J(a)) return !0;
    switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'function':
        return !0;
    }
    return !1;
  };
  var Mb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Mh: a('consent'),
      Hf: a('convert_case_to'),
      If: a('convert_false_to'),
      Jf: a('convert_null_to'),
      Kf: a('convert_true_to'),
      Lf: a('convert_undefined_to'),
      qk: a('debug_mode_metadata'),
      xb: a('function'),
      Re: a('instance_name'),
      Ci: a('live_only'),
      Di: a('malware_disabled'),
      Ei: a('metadata'),
      Hi: a('original_activity_id'),
      uk: a('original_vendor_template_id'),
      tk: a('once_on_load'),
      Gi: a('once_per_event'),
      Pg: a('once_per_load'),
      vk: a('priority_override'),
      wk: a('respected_consent_types'),
      Tg: a('setup_tags'),
      Ug: a('tag_id'),
      Vg: a('teardown_tags'),
    };
  })();
  var ic;
  var jc = [],
    kc = [],
    lc = [],
    mc = [],
    nc = [],
    oc = {},
    pc,
    qc,
    sc = function () {
      var a = rc;
      qc = qc || a;
    },
    tc,
    uc = function (a, b) {
      var c = a['function'],
        d = b && b.event;
      if (!c) throw Error('Error: No function name given for function call.');
      var e = oc[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf('vtp_') &&
          (e && d && d.ah && d.ah(a[g]), (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.Zg && (f.vtp_gtmCachedValues = d.Zg);
      if (b) {
        if (null == b.name) {
          var l;
          a: {
            var m = b.index;
            if (null == m) l = '';
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = jc[m];
                  break;
                case 1:
                  n = mc[m];
                  break;
                default:
                  l = '';
                  break a;
              }
              var p = n && n[Mb.Re];
              l = p ? String(p) : '';
            }
          }
          b.name = l;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : ic(c, f, b);
    },
    wc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = vc(a[e], b, c));
      return d;
    },
    vc = function (a, b, c) {
      if (qa(a)) {
        var d;
        switch (a[0]) {
          case 'function_id':
            return a[1];
          case 'list':
            d = [];
            for (var e = 1; e < a.length; e++) d.push(vc(a[e], b, c));
            return d;
          case 'macro':
            var f = a[1];
            if (c[f]) return;
            var g = jc[f];
            if (!g || b.jf(g)) return;
            c[f] = !0;
            var l = String(g[Mb.Re]);
            try {
              var m = wc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = uc(m, { event: b, index: f, type: 2, name: l });
              tc && (d = tc.Wi(d, m));
            } catch (x) {
              b.ph && b.ph(x, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case 'map':
            d = {};
            for (var n = 1; n < a.length; n += 2) d[vc(a[n], b, c)] = vc(a[n + 1], b, c);
            return d;
          case 'template':
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = vc(a[q], b, c);
              qc && (p = p || t === qc.Pd);
              d.push(t);
            }
            return qc && p ? qc.Xi(d) : d.join('');
          case 'escape':
            d = vc(a[1], b, c);
            if (qc && qa(a[1]) && 'macro' === a[1][0] && qc.wj(a)) return qc.Oj(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Nb[a[u]] && (d = Nb[a[u]](d));
            return d;
          case 'tag':
            var r = a[1];
            if (!mc[r]) throw Error('Unable to resolve tag reference ' + r + '.');
            return (d = { hh: a[2], index: r });
          case 'zb':
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v['function'] = a[1];
            var w = xc(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error('Attempting to expand unknown Value type: ' + a[0] + '.');
        }
      }
      return a;
    },
    xc = function (a, b, c) {
      try {
        return pc(wc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Ac = function (a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0;
      }
      for (var c = [], d = [], e = yc(a), f = 0; f < kc.length; f++) {
        var g = kc[f],
          l = zc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < mc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    zc = function (a, b) {
      for (var c = a['if'] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    yc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = xc(lc[c], a));
        return b[c];
      };
    };
  var Bc = {
    Wi: function (a, b) {
      b[Mb.Hf] && 'string' === typeof a && (a = 1 == b[Mb.Hf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Mb.Jf) && null === a && (a = b[Mb.Jf]);
      b.hasOwnProperty(Mb.Lf) && void 0 === a && (a = b[Mb.Lf]);
      b.hasOwnProperty(Mb.Kf) && !0 === a && (a = b[Mb.Kf]);
      b.hasOwnProperty(Mb.If) && !1 === a && (a = b[Mb.If]);
      return a;
    },
  };
  var Dc = [];
  Dc[7] = !0;
  Dc[9] = !0;
  Dc[27] = !0;
  Dc[5] = !0;
  Dc[6] = !0;
  Dc[11] = !0;
  Dc[15] = !0;
  Dc[18] = !0;
  Dc[23] = !0;
  Dc[24] = !0;
  Dc[29] = !0;
  Dc[33] = !0;
  Dc[35] = !0;
  Dc[36] = !0;
  Dc[38] = !0;

  Dc[42] = !0;
  Dc[43] = !0;
  Dc[44] = !0;
  Ec(46, 47);
  Dc[53] = !0;
  function Ec(a, b) {
    for (var c, d, e = 0; c === d; )
      if (((c = Math.floor(2 * Math.random())), (d = Math.floor(2 * Math.random())), e++, 20 < e))
        return;
    c ? (Dc[a] = !0) : (Dc[b] = !0);
  }
  var Fc = function (a) {
    return !!Dc[a];
  };
  var $c = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function ad(a, b) {
    return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[(a << 2) | b];
  }
  var fd = function (a) {
      return ed ? F.querySelectorAll(a) : null;
    },
    gd = function (a, b) {
      if (!ed) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    hd = !1;
  if (F.querySelectorAll)
    try {
      var id = F.querySelectorAll(':root');
      id && 1 == id.length && id[0] == F.documentElement && (hd = !0);
    } catch (a) {}
  var ed = hd;
  var P = function (a) {
    kb('GTM', a);
  };
  var R = {
      g: {
        F: 'ad_storage',
        R: 'analytics_storage',
        Ef: 'region',
        Ff: 'consent_updated',
        Gf: 'wait_for_update',
        Qh: 'app_remove',
        Rh: 'app_store_refund',
        Sh: 'app_store_subscription_cancel',
        Th: 'app_store_subscription_convert',
        Uh: 'app_store_subscription_renew',
        Mf: 'add_payment_info',
        Nf: 'add_shipping_info',
        kc: 'add_to_cart',
        mc: 'remove_from_cart',
        Of: 'view_cart',
        Ib: 'begin_checkout',
        nc: 'select_item',
        rb: 'view_item_list',
        Jb: 'select_promotion',
        sb: 'view_promotion',
        Ba: 'purchase',
        oc: 'refund',
        Ha: 'view_item',
        Pf: 'add_to_wishlist',
        Vh: 'first_open',
        Wh: 'first_visit',
        va: 'gtag.config',
        Ca: 'gtag.get',
        Xh: 'in_app_purchase',
        qc: 'page_view',
        Yh: 'session_start',
        ue: 'user_engagement',
        Kb: 'gclid',
        ia: 'ads_data_redaction',
        X: 'allow_ad_personalization_signals',
        ve: 'allow_custom_scripts',
        Zh: 'allow_display_features',
        sc: 'allow_enhanced_conversions',
        uc: 'allow_google_signals',
        wa: 'allow_interest_groups',
        sd: 'auid',
        ai: 'auto_detection_enabled',
        Va: 'aw_remarketing',
        ud: 'aw_remarketing_only',
        vc: 'discount',
        wc: 'aw_feed_country',
        xc: 'aw_feed_language',
        Z: 'items',
        yc: 'aw_merchant_id',
        Qf: 'aw_basket_type',
        vd: 'campaign_content',
        wd: 'campaign_id',
        xd: 'campaign_medium',
        yd: 'campaign_name',
        zc: 'campaign',
        zd: 'campaign_source',
        Ad: 'campaign_term',
        jb: 'client_id',
        bi: 'content_group',
        ci: 'content_type',
        Da: 'conversion_cookie_prefix',
        Ac: 'conversion_id',
        Wa: 'conversion_label',
        qa: 'conversion_linker',
        we: 'conversion_api',
        Xa: 'cookie_domain',
        Ia: 'cookie_expires',
        Ya: 'cookie_flags',
        Bc: 'cookie_name',
        xe: 'cookie_path',
        Pa: 'cookie_prefix',
        tb: 'cookie_update',
        Lb: 'country',
        ma: 'currency',
        Cc: 'customer_lifetime_value',
        Dc: 'custom_map',
        di: 'debug_mode',
        aa: 'developer_id',
        Rf: 'disable_merchant_reported_purchases',
        ei: 'dc_custom_params',
        fi: 'dc_natural_search',
        ye: 'dynamic_event_settings',
        gi: 'affiliation',
        Sf: 'checkout_option',
        Tf: 'checkout_step',
        hi: 'coupon',
        Uf: 'item_list_name',
        Vf: 'list_name',
        ii: 'promotions',
        Ec: 'shipping',
        Wf: 'tax',
        Bd: 'engagement_time_msec',
        Fc: 'enhanced_client_id',
        Gc: 'enhanced_conversions',
        Xf: 'enhanced_conversions_automatic_settings',
        Hc: 'estimated_delivery_date',
        ze: 'euid_logged_in_state',
        Mb: 'event_callback',
        Nb: 'event_developer_id_string',
        Yf: 'event',
        Cd: 'event_settings',
        Dd: 'event_timeout',
        ji: 'experiments',
        Ae: 'firebase_id',
        Ed: 'first_party_collection',
        Fd: '_x_20',
        ub: '_x_19',
        Zf: 'fledge',
        ag: 'flight_error_code',
        cg: 'flight_error_message',
        dg: 'gac_gclid',
        Gd: 'gac_wbraid',
        eg: 'gac_wbraid_multiple_conversions',
        Ic: 'ga_restrict_domain',
        Be: 'ga_temp_client_id',
        fg: 'gdpr_applies',
        gg: 'geo_granularity',
        Za: 'value_callback',
        Qa: 'value_key',
        Ob: 'global_developer_id_string',
        rk: 'google_ono',
        kb: 'google_signals',
        Hd: 'google_tld',
        Id: 'groups',
        hg: 'gsa_experiment_id',
        ig: 'iframe_state',
        Jd: 'ignore_referrer',
        Ce: 'internal_traffic_results',
        jg: 'is_passthrough',
        Ja: 'language',
        De: 'legacy_developer_id_string',
        ra: 'linker',
        Pb: 'accept_incoming',
        Qb: 'decorate_forms',
        T: 'domains',
        Jc: 'url_position',
        kg: 'method',
        Rb: 'new_customer',
        lg: 'non_interaction',
        ki: 'optimize_id',
        Ka: 'page_location',
        Ee: 'page_path',
        La: 'page_referrer',
        Sb: 'page_title',
        mg: 'passengers',
        ng: 'phone_conversion_callback',
        li: 'phone_conversion_country_code',
        og: 'phone_conversion_css_class',
        mi: 'phone_conversion_ids',
        pg: 'phone_conversion_number',
        qg: 'phone_conversion_options',
        rg: 'quantity',
        Kd: 'redact_device_info',
        sg: 'redact_enhanced_user_id',
        ni: 'redact_ga_client_id',
        oi: 'redact_user_id',
        Ld: 'referral_exclusion_definition',
        lb: 'restricted_data_processing',
        ri: 'retoken',
        ug: 'screen_name',
        vb: 'screen_resolution',
        si: 'search_term',
        xa: 'send_page_view',
        wb: 'send_to',
        Kc: 'session_duration',
        Md: 'session_engaged',
        Fe: 'session_engaged_time',
        nb: 'session_id',
        Nd: 'session_number',
        Tb: 'delivery_postal_code',
        vg: 'tc_privacy_string',
        wg: 'temporary_client_id',
        ui: 'tracking_id',
        Ge: 'traffic_type',
        Ea: 'transaction_id',
        na: 'transport_url',
        xg: 'trip_type',
        Lc: 'update',
        ab: 'url_passthrough',
        He: '_user_agent_architecture',
        Ie: '_user_agent_bitness',
        Je: '_user_agent_full_version_list',
        yg: '_user_agent_mobile',
        Ke: '_user_agent_model',
        Le: '_user_agent_platform',
        Me: '_user_agent_platform_version',
        zg: '_user_agent_wait',
        Ne: '_user_agent_wow64',
        ca: 'user_data',
        Ag: 'user_data_auto_latency',
        Bg: 'user_data_auto_meta',
        Cg: 'user_data_auto_multi',
        Dg: 'user_data_auto_selectors',
        Eg: 'user_data_auto_status',
        Fg: 'user_data_mode',
        Oe: 'user_data_settings',
        sa: 'user_id',
        Ma: 'user_properties',
        Gg: 'us_privacy_string',
        ka: 'value',
        Od: 'wbraid',
        Hg: 'wbraid_multiple_conversions',
        Kg: '_host_name',
        Lg: '_in_page_command',
        Mg: '_is_linker_valid',
        Ng: '_is_passthrough_cid',
        Og: 'non_personalized_ads',
      },
    },
    Gd = {},
    Hd = Object.freeze(
      ((Gd[R.g.X] = 1),
      (Gd[R.g.sc] = 1),
      (Gd[R.g.uc] = 1),
      (Gd[R.g.Z] = 1),
      (Gd[R.g.Xa] = 1),
      (Gd[R.g.Ia] = 1),
      (Gd[R.g.Ya] = 1),
      (Gd[R.g.Bc] = 1),
      (Gd[R.g.xe] = 1),
      (Gd[R.g.Pa] = 1),
      (Gd[R.g.tb] = 1),
      (Gd[R.g.Dc] = 1),
      (Gd[R.g.aa] = 1),
      (Gd[R.g.ye] = 1),
      (Gd[R.g.Mb] = 1),
      (Gd[R.g.Cd] = 1),
      (Gd[R.g.Dd] = 1),
      (Gd[R.g.Ed] = 1),
      (Gd[R.g.Ic] = 1),
      (Gd[R.g.kb] = 1),
      (Gd[R.g.Hd] = 1),
      (Gd[R.g.Id] = 1),
      (Gd[R.g.Ce] = 1),
      (Gd[R.g.ra] = 1),
      (Gd[R.g.Ld] = 1),
      (Gd[R.g.lb] = 1),
      (Gd[R.g.xa] = 1),
      (Gd[R.g.wb] = 1),
      (Gd[R.g.Kc] = 1),
      (Gd[R.g.Fe] = 1),
      (Gd[R.g.Tb] = 1),
      (Gd[R.g.na] = 1),
      (Gd[R.g.Lc] = 1),
      (Gd[R.g.Oe] = 1),
      (Gd[R.g.Ma] = 1),
      Gd),
    );
  Object.freeze([R.g.Ka, R.g.La, R.g.Sb, R.g.Ja, R.g.ug, R.g.sa, R.g.Ae, R.g.bi]);
  var Id = {},
    Kd = Object.freeze(
      ((Id[R.g.Qh] = 1),
      (Id[R.g.Rh] = 1),
      (Id[R.g.Sh] = 1),
      (Id[R.g.Th] = 1),
      (Id[R.g.Uh] = 1),
      (Id[R.g.Vh] = 1),
      (Id[R.g.Wh] = 1),
      (Id[R.g.Xh] = 1),
      (Id[R.g.Yh] = 1),
      (Id[R.g.ue] = 1),
      Id),
    ),
    Ld = {},
    Md = Object.freeze(
      ((Ld[R.g.Mf] = 1),
      (Ld[R.g.Nf] = 1),
      (Ld[R.g.kc] = 1),
      (Ld[R.g.mc] = 1),
      (Ld[R.g.Of] = 1),
      (Ld[R.g.Ib] = 1),
      (Ld[R.g.nc] = 1),
      (Ld[R.g.rb] = 1),
      (Ld[R.g.Jb] = 1),
      (Ld[R.g.sb] = 1),
      (Ld[R.g.Ba] = 1),
      (Ld[R.g.oc] = 1),
      (Ld[R.g.Ha] = 1),
      (Ld[R.g.Pf] = 1),
      Ld),
    ),
    Nd = Object.freeze([R.g.X, R.g.uc, R.g.tb]),
    Od = Object.freeze([].concat(Nd)),
    Pd = Object.freeze([R.g.Ia, R.g.Dd, R.g.Kc, R.g.Fe, R.g.Bd]),
    Qd = Object.freeze([].concat(Pd)),
    Rd = {},
    Sd = ((Rd[R.g.F] = '1'), (Rd[R.g.R] = '2'), Rd),
    Td = {},
    Ud = Object.freeze(
      ((Td[R.g.X] = 1),
      (Td[R.g.sc] = 1),
      (Td[R.g.wa] = 1),
      (Td[R.g.Va] = 1),
      (Td[R.g.ud] = 1),
      (Td[R.g.vc] = 1),
      (Td[R.g.wc] = 1),
      (Td[R.g.xc] = 1),
      (Td[R.g.Z] = 1),
      (Td[R.g.yc] = 1),
      (Td[R.g.Da] = 1),
      (Td[R.g.qa] = 1),
      (Td[R.g.Xa] = 1),
      (Td[R.g.Ia] = 1),
      (Td[R.g.Ya] = 1),
      (Td[R.g.Pa] = 1),
      (Td[R.g.ma] = 1),
      (Td[R.g.Cc] = 1),
      (Td[R.g.aa] = 1),
      (Td[R.g.Rf] = 1),
      (Td[R.g.Gc] = 1),
      (Td[R.g.Hc] = 1),
      (Td[R.g.Ae] = 1),
      (Td[R.g.Ed] = 1),
      (Td[R.g.Ja] = 1),
      (Td[R.g.Rb] = 1),
      (Td[R.g.Ka] = 1),
      (Td[R.g.La] = 1),
      (Td[R.g.ng] = 1),
      (Td[R.g.og] = 1),
      (Td[R.g.pg] = 1),
      (Td[R.g.qg] = 1),
      (Td[R.g.lb] = 1),
      (Td[R.g.xa] = 1),
      (Td[R.g.wb] = 1),
      (Td[R.g.Tb] = 1),
      (Td[R.g.Ea] = 1),
      (Td[R.g.na] = 1),
      (Td[R.g.Lc] = 1),
      (Td[R.g.ab] = 1),
      (Td[R.g.ca] = 1),
      (Td[R.g.sa] = 1),
      (Td[R.g.ka] = 1),
      Td),
    );
  Object.freeze(R.g);
  var Vd = {},
    Wd = (E.google_tag_manager = E.google_tag_manager || {}),
    Xd = Math.random();
  Vd.Oc = 'aj0';
  Vd.Ue = Number('') || 0;
  Vd.fa = 'dataLayer';
  Vd.Oh =
    'ChEI8O/YmgYQmpbwysTozpKkARIkAGh49XHRhMewfUsbSQNLw3XKiL9QJGD1FQavjsb34iAcX34xGgK6Wg\x3d\x3d';
  var Yd = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Zd = { __paused: !0, __tg: !0 },
    $d;
  for ($d in Yd) Yd.hasOwnProperty($d) && (Zd[$d] = !0);
  var ae = Aa(''),
    be = Aa(''),
    ce,
    de = !1;
  ce = de;
  var ee,
    fe = !1;
  ee = fe;
  var ge,
    he = !1;
  ge = he;
  var ie,
    je = !1;
  ie = je;
  Vd.rd = 'www.googletagmanager.com';
  var ke = '' + Vd.rd + (ce ? '/gtag/js' : '/gtm.js'),
    le = null,
    me = null,
    ne = {},
    oe = {},
    pe = function () {
      var a = Wd.sequence || 1;
      Wd.sequence = a + 1;
      return a;
    };
  Vd.Nh = '';
  var qe = '';
  Vd.Td = qe;
  var re = new ta(),
    se = {},
    te = {},
    we = {
      name: Vd.fa,
      set: function (a, b) {
        N(Ja(a, b), se);
        ue();
      },
      get: function (a) {
        return ve(a, 2);
      },
      reset: function () {
        re = new ta();
        se = {};
        ue();
      },
    },
    ve = function (a, b) {
      return 2 != b ? re.get(a) : xe(a);
    },
    xe = function (a) {
      var b,
        c = a.split('.');
      b = b || [];
      for (var d = se, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    ye = function (a, b) {
      te.hasOwnProperty(a) || (re.set(a, b), N(Ja(a, b), se), ue());
    },
    ue = function (a) {
      k(te, function (b, c) {
        re.set(b, c);
        N(Ja(b), se);
        N(Ja(b, c), se);
        a && delete te[b];
      });
    },
    ze = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? xe(a) : re.get(a);
      'array' === Jb(d) || 'object' === Jb(d) ? (c = N(d)) : (c = d);
      return c;
    };
  var Ae,
    Be = !1,
    Ce = function (a) {
      if (!Be) {
        Be = !0;
        Ae = Ae || {};
      }
      return Ae[a];
    };
  var De = function () {
      var a = E.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Ee = function (a) {
      if (F.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
      var c = E.getComputedStyle(a, null);
      if ('hidden' === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ('none' === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var l = g.indexOf('opacity(');
          0 <= l &&
            ((g = g.substring(l + 8, g.indexOf(')', l))),
            '%' == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = E.getComputedStyle(d, null));
      }
      return !1;
    };
  var Pe = /:[0-9]+$/,
    Qe = function (a, b, c) {
      for (var d = a.split('&'), e = 0; e < d.length; e++) {
        var f = d[e].split('=');
        if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
          var g = f.slice(1).join('=');
          return c ? g : decodeURIComponent(g).replace(/\+/g, ' ');
        }
      }
    },
    Te = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ('protocol' === b || 'port' === b) a.protocol = Re(a.protocol) || Re(E.location.protocol);
      'port' === b
        ? (a.port = String(
            Number(a.hostname ? a.port : E.location.port) ||
              ('http' === a.protocol ? 80 : 'https' === a.protocol ? 443 : ''),
          ))
        : 'host' === b &&
          (a.hostname = (a.hostname || E.location.hostname).replace(Pe, '').toLowerCase());
      return Se(a, b, c, d, e);
    },
    Se = function (a, b, c, d, e) {
      var f,
        g = Re(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case 'url_no_fragment':
          f = Ue(a);
          break;
        case 'protocol':
          f = g;
          break;
        case 'host':
          f = a.hostname.replace(Pe, '').toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case 'port':
          f = String(Number(a.port) || ('http' === g ? 80 : 'https' === g ? 443 : ''));
          break;
        case 'path':
          a.pathname || a.hostname || kb('TAGGING', 1);
          f = '/' === a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
          var m = f.split('/');
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = '');
          f = m.join('/');
          break;
        case 'query':
          f = a.search.replace('?', '');
          e && (f = Qe(f, e));
          break;
        case 'extension':
          var n = a.pathname.split('.');
          f = 1 < n.length ? n[n.length - 1] : '';
          f = f.split('/')[0];
          break;
        case 'fragment':
          f = a.hash.replace('#', '');
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Re = function (a) {
      return a ? a.replace(':', '').toLowerCase() : '';
    },
    Ue = function (a) {
      var b = '';
      if (a && a.href) {
        var c = a.href.indexOf('#');
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Ve = function (a) {
      var b = F.createElement('a');
      a && (b.href = a);
      var c = b.pathname;
      '/' !== c[0] && (a || kb('TAGGING', 1), (c = '/' + c));
      var d = b.hostname.replace(Pe, '');
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    We = function (a) {
      function b(n) {
        var p = n.split('=')[0];
        return 0 > d.indexOf(p) ? n : p + '=0';
      }
      function c(n) {
        return n
          .split('&')
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join('&');
      }
      var d = 'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(' '),
        e = Ve(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      '?' === g[0] && (g = g.substring(1));
      '#' === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      '' !== g && (g = '?' + g);
      '' !== l && (l = '#' + l);
      var m = '' + f + g + l;
      '/' === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var Xe = {};
  var zf = {},
    Af = function (a, b) {
      if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a)) return E._gtmexpgrp[a];
      void 0 === zf[a] && (zf[a] = Math.floor(Math.random() * b));
      return zf[a];
    };
  var Cf = { dh: 'UA', Uj: '' };
  var Df = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Ef = function (a) {
    Ef[' '](a);
    return a;
  };
  Ef[' '] = function () {};
  var Gf = function () {
    var a = Ff,
      b = 'ff';
    if (a.ff && a.hasOwnProperty(b)) return a.ff;
    var c = new a();
    return (a.ff = c);
  };
  var Ff = function () {
    var a = {};
    this.h = function () {
      var b = Df.h,
        c = Df.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[Df.h] = !0;
    };
  };
  var Hf = [];
  function If() {
    var a = qb('google_tag_data', {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Jf,
        update: Kf,
        addListener: Lf,
        notifyListeners: Mf,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Jf(a, b, c, d, e, f) {
    var g = If();
    g.usedDefault || (!g.accessedDefault && !g.accessedAny) || (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          t = { region: p, initial: 'granted' === b, update: m.update, quiet: q };
        if ('' !== d || !1 !== m.initial) l[a] = t;
        q &&
          E.setTimeout(function () {
            l[a] === t && t.quiet && ((t.quiet = !1), Nf(a), Mf(), kb('TAGGING', 2));
          }, f);
      }
    }
  }
  function Kf(a, b) {
    var c = If();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Of(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = 'granted' === b;
      var g = Of(c, a);
      f.quiet ? ((f.quiet = !1), Nf(a)) : g !== d && Nf(a);
    }
  }
  function Lf(a, b) {
    Hf.push({ Ye: a, fj: b });
  }
  function Nf(a) {
    for (var b = 0; b < Hf.length; ++b) {
      var c = Hf[b];
      qa(c.Ye) && -1 !== c.Ye.indexOf(a) && (c.uh = !0);
    }
  }
  function Mf(a, b) {
    for (var c = 0; c < Hf.length; ++c) {
      var d = Hf[c];
      if (d.uh) {
        d.uh = !1;
        try {
          d.fj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Of(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Pf = function (a) {
      var b = If();
      b.accessedAny = !0;
      return Of(b, a);
    },
    Qf = function (a) {
      var b = If();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Rf = function (a) {
      var b = If();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Sf = function () {
      if (!Gf().h()) return !1;
      var a = If();
      a.accessedAny = !0;
      return a.active;
    },
    Tf = function () {
      var a = If();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Uf = function (a, b) {
      If().addListener(a, b);
    },
    Vf = function (a, b) {
      If().notifyListeners(a, b);
    },
    Wf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Rf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Uf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Xf = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === Pf(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Uf(d, function (f) {
          var g = c();
          0 < g.length && ((f.Ye = g), a(f));
        });
    };
  function Yf() {}
  function Zf() {}
  function $f(a) {
    for (var b = [], c = 0; c < ag.length; c++) {
      var d = a(ag[c]);
      b[c] = !0 === d ? '1' : !1 === d ? '0' : '-';
    }
    return b.join('');
  }
  var ag = [R.g.F, R.g.R],
    bg = function (a) {
      var b = a[R.g.Ef];
      b && P(40);
      var c = a[R.g.Gf];
      c && P(41);
      for (var d = qa(b) ? b : [b], e = { hc: 0 }; e.hc < d.length; e = { hc: e.hc }, ++e.hc)
        k(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== R.g.Ef && g !== R.g.Gf) {
                var m = d[f.hc],
                  n = Cf.dh,
                  p = Cf.Uj;
                If().set(g, l, m, n, p, c);
              }
            };
          })(e),
        );
    },
    cg = 0,
    dg = function (a, b) {
      k(a, function (e, f) {
        If().update(e, f);
      });
      Vf(b.eventId, b.priorityId);
      var c = z(),
        d = c - cg;
      cg && 0 <= d && 1e3 > d && P(66);
      cg = c;
    },
    eg = function (a) {
      var b = Pf(a);
      return void 0 != b ? b : !0;
    },
    fg = function () {
      return 'G1' + $f(Pf);
    },
    gg = function (a, b) {
      Xf(a, b);
    },
    hg = function (a, b) {
      Wf(a, b);
    };
  var ig = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var jg = function (a, b, c) {
    for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
      var g = e[f].split('='),
        l = g[0].replace(/^\s*|\s*$/g, '');
      if (l && l == a) {
        var m = g
          .slice(1)
          .join('=')
          .replace(/^\s*|\s*$/g, '');
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var kg = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    lg = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function mg(a) {
    return 'null' !== a.origin;
  }
  var pg = function (a, b, c, d) {
      return ng(d) ? jg(a, String(b || og()), c) : [];
    },
    zg = function (a, b, c, d, e) {
      if (ng(e)) {
        var f = qg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = yg(
            f,
            function (g) {
              return g.Zd;
            },
            b,
          );
          if (1 === f.length) return f[0].id;
          f = yg(
            f,
            function (g) {
              return g.dd;
            },
            c,
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Ag(a, b, c, d) {
    var e = og(),
      f = window;
    mg(f) && (f.document.cookie = a);
    var g = og();
    return e != g || (void 0 != c && 0 <= pg(b, g, !1, d).indexOf(c));
  }
  var Eg = function (a, b, c) {
      function d(u, r, v) {
        if (null == v) return delete g[r], u;
        g[r] = v;
        return u + '; ' + r + '=' + v;
      }
      function e(u, r) {
        if (null == r) return delete g[r], u;
        g[r] = !0;
        return u + '; ' + r;
      }
      if (!ng(c.qb)) return 2;
      var f;
      void 0 == b
        ? (f = a + '=deleted; expires=' + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)), (b = Bg(b)), (f = a + '=' + b));
      var g = {};
      f = d(f, 'path', c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = '' + c.expires);
      f = d(f, 'expires', l);
      f = d(f, 'max-age', c.Ak);
      f = d(f, 'samesite', c.Bk);
      c.Ck && (f = e(f, 'secure'));
      var m = c.domain;
      if (m && 'auto' === m.toLowerCase()) {
        for (var n = Cg(), p = 0; p < n.length; ++p) {
          var q = 'none' !== n[p] ? n[p] : void 0,
            t = d(f, 'domain', q);
          t = e(t, c.flags);
          if (!Dg(q, c.path) && Ag(t, a, b, c.qb)) return 0;
        }
        return 1;
      }
      m && 'none' !== m.toLowerCase() && (f = d(f, 'domain', m));
      f = e(f, c.flags);
      return Dg(m, c.path) ? 1 : Ag(f, a, b, c.qb) ? 0 : 1;
    },
    Fg = function (a, b, c) {
      null == c.path && (c.path = '/');
      c.domain || (c.domain = 'auto');
      return Eg(a, b, c);
    };
  function yg(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c ? d.push(l) : void 0 === f || m < f ? ((e = [l]), (f = m)) : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function qg(a, b, c) {
    for (var d = [], e = pg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split('.'),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split('-')), d.push({ id: g.join('.'), Zd: 1 * m[0] || 1, dd: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Bg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Gg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Hg = /(^|\.)doubleclick\.net$/i,
    Dg = function (a, b) {
      return Hg.test(window.document.location.hostname) || ('/' === b && Gg.test(a));
    },
    og = function () {
      return mg(window) ? window.document.cookie : '';
    },
    Cg = function () {
      var a = [],
        b = window.document.location.hostname.split('.');
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ['none'];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'));
      var e = window.document.location.hostname;
      Hg.test(e) || Gg.test(e) || a.push('none');
      return a;
    },
    ng = function (a) {
      if (!Gf().h() || !a || !Sf()) return !0;
      if (!Rf(a)) return !1;
      var b = Pf(a);
      return null == b ? !0 : !!b;
    };
  var Ig = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (ig(a) & 2147483647)) : String(b);
    },
    Jg = function (a) {
      return [Ig(a), Math.round(z() / 1e3)].join('.');
    },
    Mg = function (a, b, c, d, e) {
      var f = Kg(b);
      return zg(a, f, Lg(c), d, e);
    },
    Ng = function (a, b, c, d) {
      var e = '' + Kg(c),
        f = Lg(d);
      1 < f && (e += '-' + f);
      return [b, e, a].join('.');
    },
    Kg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf('.') ? a.substr(1) : a;
      return a.split('.').length;
    },
    Lg = function (a) {
      if (!a || '/' === a) return 1;
      '/' !== a[0] && (a = '/' + a);
      '/' !== a[a.length - 1] && (a += '/');
      return a.split('/').length - 1;
    };
  var Og = function () {
    Wd.dedupe_gclid || (Wd.dedupe_gclid = '' + Jg());
    return Wd.dedupe_gclid;
  };
  var Pg = function () {
    var a = !1;
    return a;
  };
  var Qg = { M: 'GTM-5J6J5R4', Hb: '43792919' },
    Rg = { rh: 'GTM-5J6J5R4', sh: 'GTM-5J6J5R4' };
  Qg.Se = Aa('');
  var Sg = function () {
      return Rg.rh ? Rg.rh.split('|') : [Qg.M];
    },
    Tg = function () {
      if (Rg.sh) return Rg.sh.split('|');
      P(84);
      return [];
    },
    Ug = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Wg = function () {
      for (var a = Vg(), b = Sg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || pa(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2);
      }
      for (var e = Tg(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && P(93);
        g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 });
      }
      a.canonical[Qg.Hb] = 2;
    },
    Xg = function (a) {
      return !!Vg().container[a];
    },
    Yg = function () {
      var a = Vg().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (pa(c)) {
            if (1 === c) return !0;
          } else if (1 === c.state) return !0;
        }
      return !1;
    },
    Zg = function () {
      var a = {};
      k(Vg().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function Vg() {
    var a = Wd.tidr;
    a || ((a = new Ug()), (Wd.tidr = a));
    return a;
  }
  var $g = {
      '': 'n',
      UA: 'u',
      AW: 'a',
      DC: 'd',
      G: 'e',
      GF: 'f',
      GT: 't',
      HA: 'h',
      MC: 'm',
      GTM: 'g',
      OPT: 'o',
    },
    ah = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 10, HA: 6, MC: 7 },
    bh = function (a) {
      var b = Qg.M.split('-'),
        c = b[0].toUpperCase();
      if (Fc(45)) {
        var d = {};
        d.Yi = Qg.M;
        d.Yj = Vd.Ue;
        d.dk = Vd.Oc;
        d.Fj = Qg.Se ? 2 : 1;
        ce ? ((d.ne = ah[c]), d.ne || (d.ne = 0)) : (d.ne = ie ? 13 : 10);
        ge ? (d.oh = 1) : Pg() && (d.oh = 2);
        var e;
        var f = d.ne,
          g = d.oh;
        void 0 === f
          ? (e = '')
          : (g || (g = 0),
            (e =
              '' +
              ad(1, 1) +
              '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[(f << 2) | g]));
        var l = d.xk,
          m =
            '4' +
            e +
            (l
              ? '' +
                ad(2, 1) +
                '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[l]
              : ''),
          n,
          p = d.dk;
        n = p && $c.test(p) ? '' + ad(3, 2) + p : '';
        var q,
          t = d.Yj;
        q = t
          ? '' + ad(4, 1) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[t]
          : '';
        var u;
        var r = d.Yi;
        if (r && a) {
          var v = r.split('-'),
            w = v[0].toUpperCase();
          if ('GTM' !== w && 'OPT' !== w) u = '';
          else {
            var y = v[1];
            u = '' + ad(5, 3) + (1 + y.length) + (d.Fj || 0) + y;
          }
        } else u = '';
        return m + n + q + u;
      }
      var x = $g[c] || 'i',
        A = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
        B = 'w';
      ce && (B = Pg() ? 's' : 'o');
      ee
        ? ('w' === B && (B = 'x'), 'o' === B && (B = 'q'))
        : ge
        ? ('w' === B && (B = 'y'), 'o' === B && (B = 'r'))
        : ie && (B = 'z');
      return '2' + B + x + (4 === Vd.Oc.length ? Vd.Oc.slice(1) : Vd.Oc) + A;
    };
  function ch(a, b) {
    if ('' === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var dh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function eh() {
    return Wa('iPhone') && !Wa('iPod') && !Wa('iPad');
  }
  function fh() {
    eh() || Wa('iPad') || Wa('iPod');
  }
  Wa('Opera');
  Wa('Trident') || Wa('MSIE');
  Wa('Edge');
  !Wa('Gecko') ||
    (-1 != Va().toLowerCase().indexOf('webkit') && !Wa('Edge')) ||
    Wa('Trident') ||
    Wa('MSIE') ||
    Wa('Edge');
  -1 != Va().toLowerCase().indexOf('webkit') && !Wa('Edge') && Wa('Mobile');
  Wa('Macintosh');
  Wa('Windows');
  Wa('Linux') || Wa('CrOS');
  var gh = la.navigator || null;
  gh && (gh.appVersion || '').indexOf('X11');
  Wa('Android');
  eh();
  Wa('iPad');
  Wa('iPod');
  fh();
  Va().toLowerCase().indexOf('kaios');
  var hh = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    ih = /#|$/,
    jh = function (a, b) {
      var c = a.search(ih),
        d = hh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf('&', d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' '));
    },
    kh = /[?&]($|#)/,
    lh = function (a, b, c) {
      for (var d, e = a.search(ih), f = 0, g, l = []; 0 <= (g = hh(a, f, b, e)); )
        l.push(a.substring(f, g)), (f = Math.min(a.indexOf('&', g) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join('').replace(kh, '$1');
      var m,
        n = null != c ? '=' + encodeURIComponent(String(c)) : '';
      var p = b + n;
      if (p) {
        var q,
          t = d.indexOf('#');
        0 > t && (t = d.length);
        var u = d.indexOf('?'),
          r;
        0 > u || u > t ? ((u = t), (r = '')) : (r = d.substring(u + 1, t));
        q = [d.slice(0, u), r, d.slice(t)];
        var v = q[1];
        q[1] = p ? (v ? v + '&' + p : p) : v;
        m = q[0] + (q[1] ? '?' + q[1] : '') + q[2];
      } else m = d;
      return m;
    };
  var mh = function (a, b) {
    if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  };
  function nh(a) {
    if (!a || !F.head) return null;
    var b = oh('META');
    F.head.appendChild(b);
    b.httpEquiv = 'origin-trial';
    b.content = a;
    return b;
  }
  var ph = function () {
      if (E.top == E) return 0;
      var a = E.location.ancestorOrigins;
      if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
      var b;
      var c = E.top;
      try {
        var d;
        if ((d = !!c && null != c.location.href))
          b: {
            try {
              Ef(c.foo);
              d = !0;
              break b;
            } catch (e) {}
            d = !1;
          }
        b = d;
      } catch (e) {
        b = !1;
      }
      return b ? 1 : 2;
    },
    oh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function qh(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = oh('IMG', a.document);
    if (c) {
      var e = function () {
        if (c) {
          var f = a.google_image_requests,
            g = Pa(f, d);
          0 <= g && Array.prototype.splice.call(f, g, 1);
        }
        d.removeEventListener && d.removeEventListener('load', e, !1);
        d.removeEventListener && d.removeEventListener('error', e, !1);
      };
      dh(d, 'load', e);
      dh(d, 'error', e);
    }
    d.src = b;
    a.google_image_requests.push(d);
  }
  var sh = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe';
      mh(a, function (d, e) {
        d && (c += '&' + e + '=' + encodeURIComponent(d));
      });
      rh(c, b);
    },
    rh = function (a, b) {
      var c = window;
      b = void 0 === b ? !1 : b;
      c.fetch
        ? c.fetch(a, {
            keepalive: !0,
            credentials: 'include',
            redirect: 'follow',
            method: 'get',
            mode: 'no-cors',
          })
        : qh(c, a, void 0 === b ? !1 : b);
    };
  var th = function () {};
  var uh = function (a) {
      void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
        (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && 'error' !== a.cmpStatus
        ? 0
        : 3;
    },
    vh = function (a, b, c) {
      this.m = a;
      this.h = null;
      this.K = {};
      this.Ga = 0;
      this.P = void 0 === b ? 500 : b;
      this.D = void 0 === c ? !1 : c;
      this.B = null;
    };
  ka(vh, th);
  vh.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = lg(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.P &&
      (e = setTimeout(function () {
        c.tcString = 'tcunavailable';
        c.internalErrorState = 1;
        d();
      }, this.P));
    var f = function (g, l) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = uh(c)),
          (c.internalBlockOnErrors = b.D),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = 'tcunavailable'), l || (c.internalErrorState = 3)))
        : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
      a(c);
    };
    try {
      wh(this, 'addEventListener', f);
    } catch (g) {
      (c.tcString = 'tcunavailable'),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  vh.prototype.removeEventListener = function (a) {
    a && a.listenerId && wh(this, 'removeEventListener', null, a.listenerId);
  };
  var yh = function (a, b, c) {
      var d;
      d = void 0 === d ? '755' : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? '755' : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c ? ((l = 0), 2 === g && (l = 1)) : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = xh(a.vendor.consents, void 0 === d ? '755' : d);
          m =
            n && '1' === b && a.purposeOneTreatment && 'CH' === a.publisherCC
              ? !0
              : n && xh(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? xh(a.purpose.legitimateInterests, b) &&
                xh(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
              : !0
            : !0;
      return m;
    },
    xh = function (a, b) {
      return !(!a || !a[b]);
    },
    wh = function (a, b, c, d) {
      c || (c = function () {});
      if ('function' === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if (zh(a)) {
        Ah(a);
        var f = ++a.Ga;
        a.K[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g),
            '*',
          );
        }
      } else c({}, !1);
    },
    zh = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Ah = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
            a.K[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        dh(a.m, 'message', a.B));
    },
    Bh = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = uh(a));
      return 'error' === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (sh({ e: String(a.internalErrorState) }), !1)
          : !0
        : 'loaded' !== a.cmpStatus ||
          ('tcloaded' !== a.eventStatus && 'useractioncomplete' !== a.eventStatus)
        ? !1
        : !0;
    };
  var Ch = !0;
  Ch = !1;
  var Dh = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Eh = ch('', 550),
    Fh = ch('', 500);
  function Gh() {
    var a = Wd.tcf || {};
    return (Wd.tcf = a);
  }
  var Lh = function () {
    var a = Gh(),
      b = new vh(E, Ch ? 3e3 : -1);
    if (
      !0 === E.gtag_enable_tcf_support &&
      !a.active &&
      ('function' === typeof E.__tcfapi || 'function' === typeof b.m.__tcfapi || null != zh(b))
    ) {
      a.active = !0;
      a.fd = {};
      Hh();
      var c = null;
      Ch
        ? (c = E.setTimeout(function () {
            Ih(a);
            Jh(a);
            c = null;
          }, Fh))
        : (a.tcString = 'tcunavailable');
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Ih(a), Jh(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Kh()), b.removeEventListener(d);
            else if (
              'tcloaded' === d.eventStatus ||
              'useractioncomplete' === d.eventStatus ||
              'cmpuishown' === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Dh)
                if (Dh.hasOwnProperty(g))
                  if ('1' === g) {
                    var l,
                      m = d,
                      n = !0;
                    n = void 0 === n ? !1 : n;
                    l = Bh(m)
                      ? !1 === m.gdprApplies ||
                        'tcunavailable' === m.tcString ||
                        (void 0 === m.gdprApplies && !n) ||
                        'string' !== typeof m.tcString ||
                        !m.tcString.length
                        ? !0
                        : yh(m, '1', 0)
                      : !1;
                    f['1'] = l;
                  } else f[g] = yh(d, g, Dh[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || 'tcempty'), (a.fd = e), Jh(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Ih(a), Jh(a);
      }
    }
  };
  function Ih(a) {
    a.type = 'e';
    a.tcString = 'tcunavailable';
    Ch && (a.fd = Kh());
  }
  function Hh() {
    var a = {},
      b = ((a.ad_storage = 'denied'), (a.wait_for_update = Eh), a);
    bg(b);
  }
  function Kh() {
    var a = {},
      b;
    for (b in Dh) Dh.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Jh(a) {
    var b = {},
      c = ((b.ad_storage = a.fd['1'] ? 'granted' : 'denied'), b);
    dg(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Mh() });
  }
  var Mh = function () {
      var a = Gh();
      return a.active ? a.tcString || '' : '';
    },
    Nh = function () {
      var a = Gh();
      return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? '1' : '0') : '';
    },
    Oh = function (a) {
      if (!Dh.hasOwnProperty(String(a))) return !0;
      var b = Gh();
      return b.active && b.fd ? !!b.fd[String(a)] : !0;
    };
  function Ph(a, b, c, d) {
    var e,
      f = Number(null != a.Sa ? a.Sa : void 0);
    0 !== f && (e = new Date((b || z()) + 1e3 * (f || 7776e3)));
    return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: e, qb: d };
  }
  var Qh = ['1'],
    Rh = {},
    Sh = {},
    Uh = function (a) {
      return Rh[Th(a)];
    },
    Xh = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Th(a.prefix);
      if (!Rh[c] && !Vh(c, a.path, a.domain) && b) {
        var d = Th(a.prefix),
          e = Jg();
        if (0 === Wh(d, e, a)) {
          var f = qb('google_tag_data', {});
          f._gcl_au ? kb('GTM', 57) : (f._gcl_au = e);
        }
        Vh(c, a.path, a.domain);
      }
    };
  function Wh(a, b, c, d) {
    var e = Ng(b, '1', c.domain, c.path),
      f = Ph(c, d);
    f.qb = 'ad_storage';
    return Fg(a, e, f);
  }
  function Vh(a, b, c) {
    var d = Mg(a, b, c, Qh, 'ad_storage');
    if (!d) return !1;
    var e = d.split('.');
    5 === e.length
      ? ((Rh[a] = e.slice(0, 2).join('.')),
        (Sh[a] = { id: e.slice(2, 4).join('.'), nh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (Sh[a] = { id: e.slice(0, 2).join('.'), nh: Number(e[2]) || 0 })
      : (Rh[a] = d);
    return !0;
  }
  function Th(a) {
    return (a || '_gcl') + '_au';
  }
  var Yh;
  var bi = function () {
      var a = Zh,
        b = $h,
        c = ai(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        zb(F, 'mousedown', d);
        zb(F, 'keyup', d);
        zb(F, 'submit', e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    ci = function (a, b, c, d, e) {
      var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
      ai().decorators.push(f);
    },
    di = function (a, b, c) {
      for (var d = ai().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== F.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (0 <= n.indexOf(m[q]) || (p && 0 <= m[q].indexOf(n))) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && Ga(e, g.callback());
        }
      }
      return e;
    };
  function ai() {
    var a = qb('google_tag_data', {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var ei = /(.*?)\*(.*?)\*(.*)/,
    fi = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    gi = /^(?:www\.|m\.|amp\.)+/,
    hi = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function ii(a) {
    return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)');
  }
  var ki = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          '[object Object]' !== d.toString() &&
          (b.push(c), b.push(hb(String(d))));
      }
    var e = b.join('*');
    return ['1', ji(e), e].join('*');
  };
  function ji(a, b) {
    var c = [
        E.navigator.userAgent,
        new Date().getTimezoneOffset(),
        ob.userLanguage || ob.language,
        Math.floor(z() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join('*'),
      d;
    if (!(d = Yh)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Yh = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Yh[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function li() {
    return function (a) {
      var b = Ve(E.location.href),
        c = b.search.replace('?', ''),
        d = Qe(c, '_gl', !0) || '';
      a.query = mi(d) || {};
      var e = Te(b, 'fragment').match(ii('_gl'));
      a.fragment = mi((e && e[3]) || '') || {};
    };
  }
  function ni(a, b) {
    var c = ii(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var oi = function (a, b) {
      b || (b = '_gl');
      var c = hi.exec(a);
      if (!c) return '';
      var d = c[1],
        e = ni(b, (c[2] || '').slice(1)),
        f = ni(b, (c[3] || '').slice(1));
      e.length && (e = '?' + e);
      f.length && (f = '#' + f);
      return '' + d + e + f;
    },
    pi = function (a) {
      var b = li(),
        c = ai();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ga(d, e.query), a && Ga(d, e.fragment));
      return d;
    },
    mi = function (a) {
      try {
        var b = qi(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split('*') : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              g = ib(d[e + 1]);
            c[f] = g;
          }
          kb('TAGGING', 6);
          return c;
        }
      } catch (l) {
        kb('TAGGING', 8);
      }
    };
  function qi(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = ei.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && '1' === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === ji(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        kb('TAGGING', 7);
      }
    }
  }
  function ri(a, b, c, d) {
    function e(p) {
      p = ni(a, p);
      var q = p.charAt(p.length - 1);
      p && '&' !== q && (p += '&');
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = hi.exec(c);
    if (!f) return '';
    var g = f[1],
      l = f[2] || '',
      m = f[3] || '',
      n = a + '=' + b;
    d ? (m = '#' + e(m.substring(1))) : (l = '?' + e(l.substring(1)));
    return '' + g + l + m;
  }
  function si(a, b) {
    var c = 'FORM' === (a.tagName || '').toUpperCase(),
      d = di(b, 1, c),
      e = di(b, 2, c),
      f = di(b, 3, c);
    if (Ha(d)) {
      var g = ki(d);
      c ? ti('_gl', g, a) : ui('_gl', g, a, !1);
    }
    if (!c && Ha(e)) {
      var l = ki(e);
      ui('_gl', l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ('a' === q.tagName.toLowerCase()) {
              ui(n, p, q);
              break a;
            }
            if ('form' === q.tagName.toLowerCase()) {
              ti(n, p, q);
              break a;
            }
          }
          'string' == typeof q && ri(n, p, q);
        }
  }
  function ui(a, b, c, d) {
    if (c.href) {
      var e = ri(a, b, c.href, void 0 === d ? !1 : d);
      Ua.test(e) && (c.href = e);
    }
  }
  function ti(a, b, c) {
    if (c && c.action) {
      var d = (c.method || '').toLowerCase();
      if ('get' === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute('value', b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = F.createElement('input');
          m.setAttribute('type', 'hidden');
          m.setAttribute('name', a);
          m.setAttribute('value', b);
          c.appendChild(m);
        }
      } else if ('post' === d) {
        var n = ri(a, b, c.action);
        Ua.test(n) && (c.action = n);
      }
    }
  }
  function Zh(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ('http:' !== f && 'https:' !== f) || si(e, e.hostname);
      }
    } catch (g) {}
  }
  function $h(a) {
    try {
      if (a.action) {
        var b = Te(Ve(a.action), 'host');
        si(a, b);
      }
    } catch (c) {}
  }
  var vi = function (a, b, c, d) {
      bi();
      ci(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
    },
    wi = function (a, b) {
      bi();
      ci(a, [Se(E.location, 'host', !0)], b, !0, !0);
    },
    xi = function () {
      var a = F.location.hostname,
        b = fi.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = '';
      if (c) {
        var f = c.split('/'),
          g = f[1];
        e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf('xn--')) return !1;
        e = d.replace(/-/g, '.').replace(/\.\./g, '-');
      }
      var l = a.replace(gi, ''),
        m = e.replace(gi, ''),
        n;
      if (!(n = l === m)) {
        var p = '.' + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    yi = function (a, b) {
      return !1 === a ? !1 : a || b || xi();
    };
  var zi = {};
  var Ai = function (a) {
    for (
      var b = [],
        c = F.cookie.split(';'),
        d = new RegExp('^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f && b.push({ Af: f[1], value: f[2], timestamp: Number(f[2].split('.')[1]) || 0 });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function Bi(a, b) {
    var c = Ai(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split('.');
      if (!('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
        d[c[e].Af] || (d[c[e].Af] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), da: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Af].push(g);
      }
    }
    return d;
  }
  var Ci = /^\w+$/,
    Di = /^[\w-]+$/,
    Ei = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp', gb: '_gb' },
    Fi = function () {
      if (!Gf().h() || !Sf()) return !0;
      var a = Pf('ad_storage');
      return null == a ? !0 : !!a;
    },
    Gi = function (a, b) {
      Rf('ad_storage')
        ? Fi()
          ? a()
          : Xf(a, 'ad_storage')
        : b
        ? kb('TAGGING', 3)
        : Wf(
            function () {
              Gi(a, !0);
            },
            ['ad_storage'],
          );
    },
    Ii = function (a) {
      return Hi(a).map(function (b) {
        return b.da;
      });
    },
    Hi = function (a) {
      var b = [];
      if (!mg(E) || !F.cookie) return b;
      var c = pg(a, F.cookie, void 0, 'ad_storage');
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { md: d.md }, e++) {
        var f = Ji(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.md = g.da;
          var m = g.timestamp,
            n = g.labels,
            p = ra(
              b,
              (function (q) {
                return function (t) {
                  return t.da === q.md;
                };
              })(d),
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)), (p.labels = Ki(p.labels, n || [])))
            : b.push({ version: l, da: d.md, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return Li(b);
    };
  function Ki(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Mi(a) {
    return a && 'string' == typeof a && a.match(Ci) ? a : '_gcl';
  }
  var Oi = function () {
      var a = Ve(E.location.href),
        b = Te(a, 'query', !1, void 0, 'gclid'),
        c = Te(a, 'query', !1, void 0, 'gclsrc'),
        d = Te(a, 'query', !1, void 0, 'wbraid'),
        e = Te(a, 'query', !1, void 0, 'dclid');
      if (!b || !c || !d) {
        var f = a.hash.replace('#', '');
        b = b || Qe(f, 'gclid');
        c = c || Qe(f, 'gclsrc');
        d = d || Qe(f, 'wbraid');
      }
      return Ni(b, c, e, d);
    },
    Ni = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Di.test(d) && ((e.gbraid = d), f(d, 'gb'));
      if (void 0 !== a && a.match(Di))
        switch (b) {
          case void 0:
            f(a, 'aw');
            break;
          case 'aw.ds':
            f(a, 'aw');
            f(a, 'dc');
            break;
          case 'ds':
            f(a, 'dc');
            break;
          case '3p.ds':
            f(a, 'dc');
            break;
          case 'gf':
            f(a, 'gf');
            break;
          case 'ha':
            f(a, 'ha');
        }
      c && f(c, 'dc');
      return e;
    },
    Qi = function (a) {
      var b = Oi();
      Gi(function () {
        Pi(b, !1, a);
      });
    };
  function Pi(a, b, c, d, e) {
    function f(w, y) {
      var x = Ri(w, g);
      x && (Fg(x, y, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Mi(c.prefix);
    d = d || z();
    var l = Ph(c, d, !0);
    l.qb = 'ad_storage';
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var y = ['GCL', n, w];
        0 < e.length && y.push(e.join('.'));
        return y.join('.');
      };
    a.aw && f('aw', p(a.aw[0]));
    a.dc && f('dc', p(a.dc[0]));
    a.gf && f('gf', p(a.gf[0]));
    a.ha && f('ha', p(a.ha[0]));
    a.gp && f('gp', p(a.gp[0]));
    if (
      (void 0 == zi.enable_gbraid_cookie_write ? 0 : zi.enable_gbraid_cookie_write) &&
      !m &&
      a.gb
    ) {
      var q = a.gb[0],
        t = Ri('gb', g),
        u = !1;
      if (!b)
        for (var r = Hi(t), v = 0; v < r.length; v++)
          r[v].da === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f('gb', p(q));
    }
  }
  var Ti = function (a, b) {
      var c = pi(!0);
      Gi(function () {
        for (var d = Mi(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Ei[f]) {
            var g = Ri(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(Si(l), z()),
                n;
              b: {
                var p = m;
                if (mg(E))
                  for (var q = pg(g, F.cookie, void 0, 'ad_storage'), t = 0; t < q.length; ++t)
                    if (Si(q[t]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Ph(b, m, !0);
                u.qb = 'ad_storage';
                Fg(g, l, u);
              }
            }
          }
        }
        Pi(Ni(c.gclid, c.gclsrc), !1, b);
      });
    },
    Ri = function (a, b) {
      var c = Ei[a];
      if (void 0 !== c) return b + c;
    },
    Si = function (a) {
      return 0 !== Ui(a.split('.')).length ? 1e3 * (Number(a.split('.')[1]) || 0) : 0;
    };
  function Ji(a) {
    var b = Ui(a.split('.'));
    return 0 === b.length
      ? null
      : { version: b[0], da: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) };
  }
  function Ui(a) {
    return 3 > a.length || ('GCL' !== a[0] && '1' !== a[0]) || !/^\d+$/.test(a[1]) || !Di.test(a[2])
      ? []
      : a;
  }
  var Vi = function (a, b, c, d, e) {
      if (qa(b) && mg(E)) {
        var f = Mi(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Ri(a[m], f);
              if (n) {
                var p = pg(n, F.cookie, void 0, 'ad_storage');
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Gi(function () {
          vi(g, b, c, d);
        });
      }
    },
    Li = function (a) {
      return a.filter(function (b) {
        return Di.test(b.da);
      });
    },
    Wi = function (a, b) {
      if (mg(E)) {
        for (var c = Mi(b.prefix), d = {}, e = 0; e < a.length; e++)
          Ei[a[e]] && (d[a[e]] = Ei[a[e]]);
        Gi(function () {
          k(d, function (f, g) {
            var l = pg(c + g, F.cookie, void 0, 'ad_storage');
            l.sort(function (u, r) {
              return Si(r) - Si(u);
            });
            if (l.length) {
              var m = l[0],
                n = Si(m),
                p = 0 !== Ui(m.split('.')).length ? m.split('.').slice(3) : [],
                q = {},
                t;
              t = 0 !== Ui(m.split('.')).length ? m.split('.')[2] : void 0;
              q[f] = [t];
              Pi(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Xi(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Yi = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Sf()) {
        var c = Oi();
        if (Xi(c, a)) {
          var d = {};
          b(d, 'gclid', c.gclid);
          b(d, 'dclid', c.dclid);
          b(d, 'gclsrc', c.gclsrc);
          b(d, 'wbraid', c.gbraid);
          wi(function () {
            return d;
          }, 3);
          wi(function () {
            var e = {};
            return (e._up = '1'), e;
          }, 1);
        }
      }
    },
    Zi = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Fi()) return e;
      var f = Hi(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.da].concat(l.labels || [], [b]).join('.'),
          p = Ph(c, m, !0);
        p.qb = 'ad_storage';
        Fg(a, n, p);
      }
      return e;
    };
  function $i(a, b) {
    var c = Mi(b),
      d = Ri(a, c);
    if (!d) return 0;
    for (var e = Hi(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function aj(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var bj = function (a) {
    var b = Math.max($i('aw', a), aj(Fi() ? Bi() : {}));
    return Math.max($i('gb', a), aj(Fi() ? Bi('_gac_gb', !0) : {})) > b;
  };
  var gj = /[A-Z]+/,
    hj = /\s/,
    ij = function (a) {
      if (h(a)) {
        a = Ca(a);
        var b = a.indexOf('-');
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (gj.test(c)) {
            for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++)
              if (!d[e] || (hj.test(d[e]) && ('AW' !== c || 1 !== e))) return;
            return { id: a, prefix: c, U: c + '-' + d[0], I: d };
          }
        }
      }
    },
    kj = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = ij(a[c]);
        d && (b[d.id] = d);
      }
      jj(b);
      var e = [];
      k(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function jj(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        'AW' === d.prefix && d.I[1] && b.push(d.U);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var mj = function (a, b, c, d) {
      return (2 === lj() || d || 'http:' != E.location.protocol ? a : b) + c;
    },
    lj = function () {
      var a = wb(),
        b;
      if (1 === a)
        a: {
          var c = ke;
          c = c.toLowerCase();
          for (
            var d = 'https://' + c,
              e = 'http://' + c,
              f = 1,
              g = F.getElementsByTagName('script'),
              l = 0;
            l < g.length && 100 > l;
            l++
          ) {
            var m = g[l].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var oj = function (a, b, c) {
      if (E[a.functionName]) return b.sf && G(b.sf), E[a.functionName];
      var d = nj();
      E[a.functionName] = d;
      if (a.Vd) for (var e = 0; e < a.Vd.length; e++) E[a.Vd[e]] = E[a.Vd[e]] || nj();
      a.je && void 0 === E[a.je] && (E[a.je] = c);
      vb(mj('https://', 'http://', a.zf), b.sf, b.Jj);
      return d;
    },
    nj = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Ej = { functionName: '_googWcmImpl', je: '_googWcmAk', zf: 'www.gstatic.com/wcm/loader.js' },
    Fj = { functionName: '_gaPhoneImpl', je: 'ga_wpid', zf: 'www.gstatic.com/gaphone/loader.js' },
    Gj = { Lh: '', Ji: '5' },
    Hj = {
      functionName: '_googCallTrackingImpl',
      Vd: [Fj.functionName, Ej.functionName],
      zf: 'www.gstatic.com/call-tracking/call-tracking_' + (Gj.Lh || Gj.Ji) + '.js',
    },
    Ij = {},
    Jj = function (a, b, c, d) {
      P(22);
      if (c) {
        d = d || {};
        var e = oj(Ej, d, a),
          f = { ak: a, cl: b };
        void 0 === d.eb && (f.autoreplace = c);
        e(2, d.eb, f, c, 0, Da(), d.options);
      }
    },
    Kj = function (a, b, c, d) {
      P(21);
      if (b && c) {
        d = d || {};
        for (
          var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Da() }, f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          Ij[g.id] ||
            (g && 'AW' === g.prefix && !e.adData && 2 <= g.I.length
              ? ((e.adData = { ak: g.I[0], cl: g.I[1] }), (Ij[g.id] = !0))
              : g &&
                'UA' === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.U }), (Ij[g.id] = !0)));
        }
        (e.gaData || e.adData) && oj(Hj, d)(d.eb, e, d.options);
      }
    },
    Lj = function () {
      var a = !1;
      return a;
    },
    Mj = function (a, b) {
      if (a)
        if (Pg()) {
        } else {
          if (h(a)) {
            var c = ij(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = U(b, R.g.mi);
          if (f && qa(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var l = ij(f[g]);
              l && (d.push(l), (a.id === l.id || (a.id === a.U && a.U === l.U)) && (e = !0));
            }
          }
          if (!d || e) {
            var m = U(b, R.g.pg),
              n;
            if (m) {
              qa(m) ? (n = m) : (n = [m]);
              var p = U(b, R.g.ng),
                q = U(b, R.g.og),
                t = U(b, R.g.qg),
                u = U(b, R.g.li),
                r = p || q,
                v = 1;
              'UA' !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) Kj(d, n[w], u, { eb: r, options: t });
                  else if ('AW' === a.prefix && a.I[1])
                    Lj()
                      ? Kj([a], n[w], u || 'US', { eb: r, options: t })
                      : Jj(a.I[0], a.I[1], n[w], { eb: r, options: t });
                  else if ('UA' === a.prefix)
                    if (Lj()) Kj([a], n[w], u || 'US', { eb: r });
                    else {
                      var y = a.U,
                        x = n[w],
                        A = { eb: r };
                      P(23);
                      if (x) {
                        A = A || {};
                        var B = oj(Fj, A, y),
                          C = {};
                        void 0 !== A.eb ? (C.receiver = A.eb) : (C.replace = x);
                        C.ga_wpid = y;
                        C.destination = x;
                        B(2, Da(), C);
                      }
                    }
            }
          }
        }
    };
  var Nj = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.h = c;
      this.m = {};
      this.metadata = N(c.eventMetadata || {});
      this.H = !1;
    },
    Oj = function (a, b, c) {
      var d = U(a.h, b);
      void 0 !== d ? (a.m[b] = d) : void 0 !== c && (a.m[b] = c);
    },
    Pj = function (a, b, c) {
      var d = Ce(a.target.U);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Qj(a) {
    return {
      getDestinationId: function () {
        return a.target.U;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        return void (a.m[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        Oj(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.H = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
      getFromEventContext: function (b) {
        return U(a.h, b);
      },
    };
  }
  var jk = ['L', 'S', 'Y'],
    kk = ['S', 'E'],
    lk = { sampleRate: '0.005000', Ih: '', Hh: Number('5') },
    mk =
      0 <= F.location.search.indexOf('?gtm_latency=') ||
      0 <= F.location.search.indexOf('&gtm_latency='),
    nk;
  if (!(nk = mk)) {
    var ok = Math.random(),
      pk = lk.sampleRate;
    nk = ok < pk;
  }
  var qk = nk,
    rk = 'https://www.googletagmanager.com/a?id=' + Qg.M + '&cv=6',
    sk = { label: Qg.M + ' Container', children: [{ label: 'Initialization', children: [] }] };
  function tk() {
    return [rk, '&v=3&t=t', '&pid=' + sa(), '&rv=' + Vd.Oc].join('');
  }
  var uk = tk();
  function vk() {
    uk = tk();
  }
  var wk = {},
    xk = '',
    yk = '',
    zk = '',
    Ak = '',
    Bk = [],
    Ck = '',
    Dk = {},
    Ek = !1,
    Fk = {},
    Gk = {},
    Hk = '',
    Ik = void 0,
    Jk = {},
    Kk = {},
    Lk = void 0,
    Mk = 5;
  0 < lk.Hh && (Mk = lk.Hh);
  var Nk = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        xj: function () {
          return c < a ? !1 : z() - d[c % a] < b;
        },
        Vj: function () {
          var f = c++ % a;
          d[f] = z();
        },
      };
    })(Mk, 1e3),
    Ok = 1e3;
  function Pk(a, b) {
    var c = Ik;
    if (void 0 === c) return '';
    var d = Fc(53) ? nb('GTM') : mb('GTM'),
      e = Fc(53) ? nb('TAGGING') : mb('TAGGING'),
      f = nb('HEALTH'),
      g = uk,
      l = wk[c] ? '' : '&es=1',
      m = Jk[c],
      n = Qk(c),
      p = Rk(),
      q = xk,
      t = yk,
      u = Hk,
      r = Sk(a),
      v = zk,
      w = Ak,
      y = Tk(a, b),
      x;
    return [
      g,
      l,
      m,
      n,
      d ? '&u=' + d : '',
      e ? '&ut=' + e : '',
      f ? '&h=' + f : '',
      p,
      q,
      t,
      u,
      r,
      v,
      w,
      y,
      x,
      Ck ? '&dl=' + encodeURIComponent(Ck) : '',
      0 < Bk.length ? '&tdp=' + Bk.join('.') : '',
      Vd.Ue ? '&x=' + Vd.Ue : '',
      '&z=0',
    ].join('');
  }
  function Vk(a) {
    Lk && (E.clearTimeout(Lk), (Lk = void 0));
    if (void 0 !== Ik && (!wk[Ik] || xk || yk || Wk(a)))
      if (void 0 === Xk[Ik] && (Kk[Ik] || Nk.xj() || 0 >= Ok--)) P(1), (Kk[Ik] = !0);
      else {
        void 0 === Xk[Ik] && Nk.Vj();
        var b = Pk(!0, a);
        a ? Fb(b) : yb(b);
        if (Ak || (Ck && 0 < Bk.length)) {
          var c = b.replace('/a?', '/td?');
          yb(c);
        }
        wk[Ik] = !0;
        Ck = Ak = zk = Hk = yk = xk = '';
        Bk = [];
      }
  }
  function Yk() {
    Lk || (Lk = E.setTimeout(Vk, 500));
  }
  function Zk(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : '*';
  }
  function $k() {
    2022 <= Pk().length && Vk();
  }
  function Rk() {
    return (
      '&tc=' +
      mc.filter(function (a) {
        return a;
      }).length
    );
  }
  var bl = function (a, b) {
      if (qk && !Kk[a] && Ik !== a) {
        Vk();
        Ik = a;
        zk = xk = '';
        Jk[a] = '&e=' + Zk(b) + '&eid=' + a;
        Yk();
      }
    },
    cl = function (a, b, c, d) {
      if (qk && b) {
        var e,
          f = String(b[Mb.xb] || '').replace(/_/g, '');
        0 === f.indexOf('cvt') && (f = 'cvt');
        e = f;
        var g = c + e;
        if (!Kk[a]) {
          a !== Ik && (Vk(), (Ik = a));
          xk = xk ? xk + '.' + g : '&tr=' + g;
          var l = b['function'];
          if (!l) throw Error('Error: No function name given for function call.');
          var m = (oc[l] ? '1' : '2') + e;
          zk = zk ? zk + '.' + m : '&ti=' + m;
          Yk();
          $k();
        }
      }
    };
  function Sk(a) {}
  function Qk(a) {}
  var jl = function (a, b, c) {
      if (qk && void 0 !== a && !Kk[a]) {
        a !== Ik && (Vk(), (Ik = a));
        var d = c + b;
        yk = yk ? yk + '.' + d : '&epr=' + d;
        Yk();
        $k();
      }
    },
    kl = function (a, b, c) {},
    ll = ['S', 'P', 'C', 'Z'],
    ml = {},
    nl = ((ml[1] = 5), (ml[2] = 5), (ml[3] = 5), ml),
    ol = {},
    Xk = {},
    Uk = void 0,
    pl = function (a, b) {
      var c = !1;
      if (!qk || Xk[a] || 0 === nl[b]) return !1;
      --nl[b];
      Xk[a] = b;
      c = !0;
      return c;
    },
    ql = function (a, b, c) {
      if (!qk || !Xk[a]) return;
      var d = ol[a];
      d || (ol[a] = d = {});
      d[b] = c;
    };
  function Tk(a, b) {
    var c;
    if (!Ik || !Wk(b)) return '';
    var d = ol[Ik];
    c =
      '&al=' +
      ll
        .filter(function (e) {
          return void 0 !== d[e];
        })
        .map(function (e) {
          return e + Math.floor(d[e]);
        })
        .join('.') +
      ('.Z' + Xk[Ik]);
    a && delete ol[Ik];
    return c;
  }
  function Wk(a) {
    var b = !1;
    if (!Ik || !ol[Ik]) return !1;
    b = a || 'C' in ol[Ik];
    return b;
  }
  var rl = function () {
    if (qk) {
      E.setInterval(vk, 864e5);
      zb(E, 'pagehide', function () {
        Ik && Xk[Ik] && Vk(!0);
        for (var a in ol) ol.hasOwnProperty(a) && ((Ik = Number(a)), Vk(!0));
      });
    }
  };
  var sl = function (a, b, c, d, e, f, g, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.m = e;
      this.D = f;
      this.P = g;
      this.B = l;
      this.eventMetadata = m;
      this.O = n;
      this.N = p;
      this.C = q;
    },
    U = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.m[b]) return a.m[b];
      qk && tl(a, a.D[b], a.P[b]) && (P(71), P(79));
      return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    ul = function (a) {
      function b(g) {
        for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.m);
      b(a.D);
      if (qk)
        for (var d = Object.keys(a.P), e = 0; e < d.length; e++) {
          var f = d[e];
          if ('event' !== f && 'gtm' !== f && 'tagTypeBlacklist' !== f && !c.hasOwnProperty(f)) {
            P(71);
            P(80);
            break;
          }
        }
      return Object.keys(c);
    },
    vl = function (a, b, c) {
      function d(m) {
        J(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.K[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (qk) {
        var g = f,
          l = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.P[b]), d(a.m[b]), d(a.K[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || tl(a, e, l)) P(71), P(81);
        f = g;
        e = l;
      }
      return f ? e : void 0;
    },
    wl = function (a) {
      var b = [R.g.zc, R.g.vd, R.g.wd, R.g.xd, R.g.yd, R.g.zd, R.g.Ad],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.m)) return c;
      e(a.D);
      if (qk) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.P);
        tl(a, c, f) && (P(71), P(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    tl = function (a, b, c) {
      if (!qk) return !1;
      try {
        if (b === c) return !1;
        var d = Jb(b);
        if (d !== Jb(c) || !((J(b) && J(c)) || 'array' === d)) return !0;
        if ('array' === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (tl(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b) if (!c.hasOwnProperty(g) || tl(a, b[g], c[g])) return !0;
        }
      } catch (l) {
        P(72);
      }
      return !1;
    },
    xl = function (a, b) {
      this.xi = a;
      this.yi = b;
      this.D = {};
      this.Ig = {};
      this.h = {};
      this.K = {};
      this.m = {};
      this.Mc = {};
      this.B = {};
      this.jc = function () {};
      this.Ga = function () {};
      this.P = !1;
    },
    yl = function (a, b) {
      a.D = b;
      return a;
    },
    zl = function (a, b) {
      a.Ig = b;
      return a;
    },
    Al = function (a, b) {
      a.h = b;
      return a;
    },
    Bl = function (a, b) {
      a.K = b;
      return a;
    },
    Cl = function (a, b) {
      a.m = b;
      return a;
    },
    Dl = function (a, b) {
      a.Mc = b;
      return a;
    },
    El = function (a, b) {
      a.B = b || {};
      return a;
    },
    Fl = function (a, b) {
      a.jc = b;
      return a;
    },
    Gl = function (a, b) {
      a.Ga = b;
      return a;
    },
    Hl = function (a) {
      a.P = !0;
      return a;
    },
    Il = function (a) {
      return new sl(a.xi, a.yi, a.D, a.Ig, a.h, a.K, a.m, a.Mc, a.B, a.jc, a.Ga, a.P);
    };
  Xa();
  eh() || Wa('iPod');
  Wa('iPad');
  !Wa('Android') || Ya() || Xa() || Wa('Opera') || Wa('Silk');
  Ya();
  !Wa('Safari') ||
    Ya() ||
    Wa('Coast') ||
    Wa('Opera') ||
    Wa('Edge') ||
    Wa('Edg/') ||
    Wa('OPR') ||
    Xa() ||
    Wa('Silk') ||
    Wa('Android') ||
    fh();
  var Ml = {},
    Nl = null,
    Ol = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Nl) {
        Nl = {};
        for (
          var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
            l = ['+/=', '+/', '-_=', '-_.', '-_'],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(l[m].split(''));
          Ml[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Nl[q] && (Nl[q] = p);
          }
        }
      }
      for (
        var t = Ml[f], u = Array(Math.floor(b.length / 3)), r = t[64] || '', v = 0, w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var y = b[v],
          x = b[v + 1],
          A = b[v + 2],
          B = t[y >> 2],
          C = t[((y & 3) << 4) | (x >> 4)],
          H = t[((x & 15) << 2) | (A >> 6)],
          I = t[A & 63];
        u[w++] = '' + B + C + H + I;
      }
      var D = 0,
        K = r;
      switch (b.length - v) {
        case 2:
          (D = b[v + 1]), (K = t[(D & 15) << 2] || r);
        case 1:
          var O = b[v];
          u[w] = '' + t[O >> 2] + t[((O & 3) << 4) | (D >> 4)] + K + r;
      }
      return u.join('');
    };
  var Pl =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' ',
    );
  function Ql() {
    var a;
    return null != (a = E.google_tag_data) ? a : (E.google_tag_data = {});
  }
  function Rl() {
    var a = E.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Sl() {
    var a, b;
    return null != (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function Tl() {
    var a, b;
    return (
      'function' ===
      typeof (null == (a = E.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function Ul() {
    if (!Tl()) return null;
    var a = Ql();
    if (a.uach_promise) return a.uach_promise;
    var b = E.navigator.userAgentData.getHighEntropyValues(Pl).then(function (c) {
      null != a.uach || (a.uach = c);
      return c;
    });
    return (a.uach_promise = b);
  }
  var Vl,
    Wl = function () {
      if (Tl() && ((Vl = z()), !Sl())) {
        var a = Ul();
        a &&
          (a.then(function () {
            P(95);
          }),
          a.catch(function () {
            P(96);
          }));
      }
    },
    Yl = function (a) {
      var b = Xl.pk,
        c = function (g, l) {
          try {
            a(g, l);
          } catch (m) {}
        },
        d = Rl();
      if (d) c(d);
      else {
        var e = Sl();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = E.setTimeout(function () {
            c.Zc || ((c.Zc = !0), P(106), c(null, Error('Timeout')));
          }, b);
          e.then(function (g) {
            c.Zc || ((c.Zc = !0), P(104), E.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Zc || ((c.Zc = !0), P(105), E.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Zl = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      a &&
        ((b.m[R.g.He] = a.architecture),
        (b.m[R.g.Ie] = a.bitness),
        a.fullVersionList &&
          (b.m[R.g.Je] = a.fullVersionList
            .map(function (d) {
              return encodeURIComponent(d.brand || '') + ';' + encodeURIComponent(d.version || '');
            })
            .join('|')),
        c && (b.m[R.g.yg] = a.mobile ? '1' : '0'),
        (b.m[R.g.Ke] = a.model),
        (b.m[R.g.Le] = a.platform),
        (b.m[R.g.Me] = a.platformVersion),
        (b.m[R.g.Ne] = a.wow64 ? '1' : '0'));
    };
  function $l() {
    return 'attribution-reporting';
  }
  function am(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var bm = !1;
  function cm() {
    if (am('join-ad-interest-group') && oa(ob.joinAdInterestGroup)) return !0;
    bm ||
      (nh(
        'A7bG5hJ4XpMV5a3V1wwAR0PalkFSxLOZeL9D/YBYdupYUIgUgGhfVJ1zBFOqGybb7gRhswfJ+AmO7S2rNK2IOwkAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9',
      ),
      (bm = !0));
    return am('join-ad-interest-group') && oa(ob.joinAdInterestGroup);
  }
  function dm(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > z() - d) {
        kb('TAGGING', 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length
        ) {
          kb('TAGGING', 10);
          return;
        }
      } catch (e) {}
    xb(a, void 0, { allow: 'join-ad-interest-group' }, { taggingId: b, loadTime: z() }, c);
  }
  var em = RegExp(
      '^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$',
    ),
    fm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    gm = /^\d+\.fls\.doubleclick\.net$/,
    hm = /;gac=([^;?]+)/,
    im = /;gacgb=([^;?]+)/,
    jm = /;gclaw=([^;?]+)/,
    km = /;gclgb=([^;?]+)/;
  function lm(a, b) {
    if (gm.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && 2 == c.length && c[1].match(em) ? decodeURIComponent(c[1]) : '';
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].da);
      d.push(e + ':' + f.join(','));
    }
    return 0 < d.length ? d.join(';') : '';
  }
  var mm = function (a, b, c) {
    var d = Fi() ? Bi('_gac_gb', !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var l = Zi('_gac_gb_' + g, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ':' + l.join(','));
    }
    return { jj: f ? e.join(';') : '', ij: lm(d, im) };
  };
  function nm(a, b, c) {
    if (gm.test(F.location.host)) {
      var d = F.location.href.match(c);
      if (d && 2 == d.length && d[1].match(fm)) return [{ da: d[1] }];
    } else return Hi((a || '_gcl') + b);
    return [];
  }
  var om = function (a) {
      return nm(a, '_aw', jm)
        .map(function (b) {
          return b.da;
        })
        .join('.');
    },
    pm = function (a) {
      return nm(a, '_gb', km)
        .map(function (b) {
          return b.da;
        })
        .join('.');
    },
    qm = function (a, b) {
      var c = Zi(((b && b.prefix) || '_gcl') + '_gb', a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ''
        : c.join('.');
    };
  var rm = function () {
    if (oa(E.__uspapi)) {
      var a = '';
      try {
        E.__uspapi('getUSPData', 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var an = function (a, b) {
    var c,
      d = E.GooglebQhCsO;
    d || ((d = {}), (E.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var bn = function (a, b) {
    var c = jh(a, 'fmt');
    if (b) {
      var d = jh(a, 'random'),
        e = jh(a, 'label') || '';
      if (!d) return !1;
      var f = Ol(
        decodeURIComponent(e.replace(/\+/g, ' ')) + ':' + decodeURIComponent(d.replace(/\+/g, ' ')),
      );
      if (!an(f, b)) return !1;
    }
    c && 4 != c && (a = lh(a, 'rfmt', c));
    var g = lh(a, 'fmt', 4);
    vb(
      g,
      function () {
        E.google_noFurtherRedirects && b && b.call && ((E.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      F.getElementsByTagName('script')[0].parentElement || void 0,
    );
    return !0;
  };
  var sn = function () {
      this.h = {};
    },
    tn = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    un = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + '=' + encodeURIComponent(a.h[b]);
        })
        .join('&');
    },
    wn = function (a, b, c, d, e) {};
  function yn(a, b) {
    if (a) {
      var c = '' + a;
      0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c);
      '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ve('' + c + b).href;
    }
  }
  function zn(a, b) {
    return ee || ge ? yn(a, b) : void 0;
  }
  function An() {
    return !!Vd.Td && 'SGTM_TOKEN' !== Vd.Td.split('@@').join('');
  }
  var Cn = function (a, b, c, d) {
      if (!Bn() && !Xg(a)) {
        var e = c ? '/gtag/js' : '/gtm.js',
          f = '?id=' + encodeURIComponent(a) + '&l=' + Vd.fa,
          g = 0 === a.indexOf('GTM-');
        g || (f += '&cx=c');
        var l = An();
        l && (f += '&sign=' + Vd.Td);
        var m = zn(b, e + f);
        if (!m) {
          var n = Vd.rd + e;
          l && pb && g && (n = pb.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0]);
          m = mj('https://', 'http://', n + f);
        }
        Vg().container[a] = { state: 1, context: d };
        vb(m);
      }
    },
    Dn = function (a, b, c) {
      var d;
      if ((d = !Bn())) {
        var e = Vg().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (Yg()) (Vg().destination[a] = { state: 0, transportUrl: b, context: c }), P(91);
        else {
          var f = '/gtag/destination?id=' + encodeURIComponent(a) + '&l=' + Vd.fa + '&cx=c';
          An() && (f += '&sign=' + Vd.Td);
          var g = zn(b, f);
          g || (g = mj('https://', 'http://', Vd.rd + f));
          Vg().destination[a] = { state: 1, context: c };
          vb(g);
        }
    };
  function Bn() {
    if (Pg()) {
      return !0;
    }
    return !1;
  }
  var En = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Fn = {
      cl: ['ecl'],
      customPixels: ['nonGooglePixels'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: [
        'customScripts',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      customScripts: [
        'html',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels'],
    },
    Gn = {
      cl: ['ecl'],
      customPixels: ['customScripts', 'html'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: [
        'customPixels',
        'customScripts',
        'html',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
    },
    Hn =
      'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
        ' ',
      );
  var Jn = function (a) {
      var b = ve('gtm.allowlist') || ve('gtm.whitelist');
      b && P(9);
      ce && (b = ['google', 'gtagfl', 'lcl', 'zone']);
      var c = b && Ia(Ba(b), Fn),
        d = ve('gtm.blocklist') || ve('gtm.blacklist');
      d || ((d = ve('tagTypeBlacklist')) && P(3));
      d ? P(8) : (d = []);
      In() && ((d = Ba(d)), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
      0 <= Ba(d).indexOf('google') && P(2);
      var e = d && Ia(Ba(d), Gn),
        f = {};
      return function (g) {
        var l = g && g[Mb.xb];
        if (!l || 'string' != typeof l) return !0;
        l = l.replace(/^_*/, '');
        if (void 0 !== f[l]) return f[l];
        var m = oe[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      P(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var t = !1;
        if (d) {
          var u = 0 <= e.indexOf(l);
          if (u) t = u;
          else {
            var r = ua(e, m || []);
            r && P(10);
            t = r;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= m.indexOf('sandboxedScripts')) ||
          (c && -1 !== c.indexOf('sandboxedScripts')) ||
          (v = ua(e, Hn));
        return (f[l] = v);
      };
    },
    In = function () {
      return En.test(E.location && E.location.hostname);
    };
  var Kn = { initialized: 11, complete: 12, interactive: 13 },
    Ln = {},
    Mn = Object.freeze(((Ln[R.g.xa] = !0), Ln)),
    Nn =
      0 <= F.location.search.indexOf('?gtm_diagnostics=') ||
      0 <= F.location.search.indexOf('&gtm_diagnostics='),
    Pn = function (a, b, c) {
      if (qk && 'config' === a && !(1 < ij(b).I.length)) {
        var d,
          e = qb('google_tag_data', {});
        e.td || (e.td = {});
        d = e.td;
        var f = N(c.D);
        N(c.h, f);
        var g = [],
          l;
        for (l in d) {
          var m = On(d[l], f);
          m.length && (Nn && console.log(m), g.push(l));
        }
        if (g.length) {
          if (g.length) {
            var n = b + '*' + g.join('.');
            Ak = Ak ? Ak + '!' + n : '&tdc=' + n;
          }
          kb('TAGGING', Kn[F.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function Qn(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function On(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? '' : d;
    if (a === b) return [];
    var e = function (q, t) {
        var u = t[q];
        return void 0 === u ? Mn[q] : u;
      },
      f;
    for (f in Qn(a, b)) {
      var g = (d ? d + '.' : '') + f,
        l = e(f, a),
        m = e(f, b),
        n = 'object' === Jb(l) || 'array' === Jb(l),
        p = 'object' === Jb(m) || 'array' === Jb(m);
      if (n && p) On(l, m, c, g);
      else if (n || p || l !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Rn = !1,
    Sn = 0,
    Tn = [];
  function Un(a) {
    if (!Rn) {
      var b = F.createEventObject,
        c = 'complete' == F.readyState,
        d = 'interactive' == F.readyState;
      if (!a || 'readystatechange' != a.type || c || (!b && d)) {
        Rn = !0;
        for (var e = 0; e < Tn.length; e++) G(Tn[e]);
      }
      Tn.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function Vn() {
    if (!Rn && 140 > Sn) {
      Sn++;
      try {
        F.documentElement.doScroll('left'), Un();
      } catch (a) {
        E.setTimeout(Vn, 50);
      }
    }
  }
  var Wn = function (a) {
    Rn ? a() : Tn.push(a);
  };
  var Xn = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: Qg.M,
    };
  };
  var Zn = function (a, b) {
      this.h = !1;
      this.D = [];
      this.K = { tags: [] };
      this.P = !1;
      this.m = this.B = 0;
      Yn(this, a, b);
    },
    $n = function (a, b, c, d) {
      if (Zd.hasOwnProperty(b) || '__zone' === b) return -1;
      var e = {};
      J(d) && (e = N(d, e));
      e.id = c;
      e.status = 'timeout';
      return a.K.tags.push(e) - 1;
    },
    ao = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    bo = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    Yn = function (a, b, c) {
      void 0 !== b && co(a, b);
      c &&
        E.setTimeout(function () {
          return bo(a);
        }, Number(c));
    },
    co = function (a, b) {
      var c = Fa(function () {
        return G(function () {
          b(Qg.M, a.K);
        });
      });
      a.h ? c() : a.D.push(c);
    },
    eo = function (a) {
      a.B++;
      return Fa(function () {
        a.m++;
        a.P && a.m >= a.B && bo(a);
      });
    },
    fo = function (a) {
      a.P = !0;
      a.m >= a.B && bo(a);
    };
  var go = function () {
      function a(d) {
        return !pa(d) || 0 > d ? 0 : d;
      }
      if (!Wd._li && E.performance && E.performance.timing) {
        var b = E.performance.timing.navigationStart,
          c = pa(we.get('gtm.start')) ? we.get('gtm.start') : 0;
        Wd._li = { cst: a(c - b), cbt: a(me - b) };
      }
    },
    ho = function (a) {
      E.performance && E.performance.mark(Qg.M + '_' + a + '_start');
    },
    io = function (a) {
      if (E.performance) {
        var b = Qg.M + '_' + a + '_start',
          c = Qg.M + '_' + a + '_duration';
        E.performance.measure(c, b);
        var d = E.performance.getEntriesByName(c)[0];
        E.performance.clearMarks(b);
        E.performance.clearMeasures(c);
        var e = Wd._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Wd._p = e));
        return d.duration;
      }
    },
    jo = function () {
      var a = Hb();
      if (void 0 !== a) {
        var b = Wd._p || {};
        b.PAGEVIEW = a;
        Wd._p = b;
      }
    };
  var ko = {},
    lo = function () {
      return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject];
    },
    mo = !1;
  var no = function (a) {
      E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || 'ga');
      var b = E.GoogleAnalyticsObject;
      if (E[b]) E.hasOwnProperty(b) || P(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Da());
        E[b] = c;
      }
      go();
      return E[b];
    },
    oo = function (a) {
      if (Sf()) {
        var b = lo();
        b(a + 'require', 'linker');
        b(a + 'linker:passthrough', !0);
      }
    };
  function po() {
    return E.GoogleAnalyticsObject || 'ga';
  }
  var qo = function (a) {},
    ro = function (a, b) {
      return function () {
        var c = lo(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get('sendHitTask');
          d.set('sendHitTask', function (f) {
            var g = f.get('hitPayload'),
              l = f.get('hitCallback'),
              m = 0 > g.indexOf('&tid=' + b);
            m &&
              (f.set('hitPayload', g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b), !0),
              f.set('hitCallback', void 0, !0));
            e(f);
            m &&
              (f.set('hitPayload', g, !0),
              f.set('hitCallback', l, !0),
              f.set('_x_19', void 0, !0),
              e(f));
          });
        }
      };
    };
  function wo(a, b, c, d) {
    var e = mc[a],
      f = xo(a, b, c, d);
    if (!f) return null;
    var g = vc(e[Mb.Tg], c, []);
    if (g && g.length) {
      var l = g[0];
      f = wo(l.index, { O: f, N: 1 === l.hh ? b.terminate : f, terminate: b.terminate }, c, d);
    }
    return f;
  }
  function xo(a, b, c, d) {
    function e() {
      if (f[Mb.Di]) l();
      else {
        var w = wc(f, c, []),
          y = w[Mb.Mh];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!eg(y[x])) {
              l();
              return;
            }
        var A = $n(c.zb, String(f[Mb.xb]), Number(f[Mb.Ug]), w[Mb.Ei]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            cl(c.id, mc[a], '5', I);
            ao(c.zb, A, 'success', I);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            cl(c.id, mc[a], '6', I);
            ao(c.zb, A, 'failure', I);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        cl(c.id, f, '1');
        var C = function () {
          var I = z() - H;
          cl(c.id, f, '7', I);
          ao(c.zb, A, 'exception', I);
          B || ((B = !0), l());
        };
        var H = z();
        try {
          uc(w, { event: c, index: a, type: 1 });
        } catch (I) {
          C(I);
        }
      }
    }
    var f = mc[a],
      g = b.O,
      l = b.N,
      m = b.terminate;
    if (c.jf(f)) return null;
    var n = vc(f[Mb.Vg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = wo(p.index, { O: g, N: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.hh ? m : q;
    }
    if (f[Mb.Pg] || f[Mb.Gi]) {
      var t = f[Mb.Pg] ? nc : c.jk,
        u = g,
        r = l;
      if (!t[a]) {
        e = Fa(e);
        var v = yo(a, t, e);
        g = v.O;
        l = v.N;
      }
      return function () {
        t[a](u, r);
      };
    }
    return e;
  }
  function yo(a, b, c) {
    var d = [],
      e = [];
    b[a] = zo(d, e, c);
    return {
      O: function () {
        b[a] = Ao;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      N: function () {
        b[a] = Bo;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function zo(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Ao(a) {
    a();
  }
  function Bo(a, b) {
    b();
  }
  var Do = function (a, b) {
      return 1 === arguments.length ? Co('config', a) : Co('config', a, b);
    },
    Eo = function (a, b, c) {
      c = c || {};
      c[R.g.wb] = a;
      return Co('event', b, c);
    };
  function Co(a) {
    return arguments;
  }
  var Fo = function () {
    this.h = [];
    this.m = [];
  };
  Fo.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a['gtm.uniqueEventId'] = b;
    a['gtm.priorityId'] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = { message: a, notBeforeEventId: b, priorityId: d, messageContext: c };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  Fo.prototype.listen = function (a) {
    this.m.push(a);
  };
  Fo.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Fo.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Ho = function (a, b, c) {
      Go().enqueue(a, b, c);
    },
    Jo = function () {
      var a = Io;
      Go().listen(a);
    };
  function Go() {
    var a = Wd.mb;
    a || ((a = new Fo()), (Wd.mb = a));
    return a;
  }
  var Ro = function (a) {
      var b = Wd.zones;
      return b
        ? b.getIsAllowedFn(Sg(), a)
        : function () {
            return !0;
          };
    },
    So = function (a) {
      var b = Wd.zones;
      return b ? b.isActive(Sg(), a) : !0;
    };
  var Vo = function (a, b) {
    for (var c = [], d = 0; d < mc.length; d++)
      if (a[d]) {
        var e = mc[d];
        var f = eo(b.zb);
        try {
          var g = wo(d, { O: f, N: f, terminate: f }, b, d);
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              p = e['function'];
            if (!p) throw 'Error: No function name given for function call.';
            var q = oc[p];
            m.call(l, { Eh: n, vh: q ? q.priorityOverride || 0 : 0, execute: g });
          } else To(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(Uo);
    for (var t = 0; t < c.length; t++) c[t].execute();
    return 0 < c.length;
  };
  function Uo(a, b) {
    var c,
      d = b.vh,
      e = a.vh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Eh,
        l = b.Eh;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function To(a, b) {
    if (qk) {
      var c = function (d) {
        var e = b.jf(mc[d]) ? '3' : '4',
          f = vc(mc[d][Mb.Tg], b, []);
        f && f.length && c(f[0].index);
        cl(b.id, mc[d], e);
        var g = vc(mc[d][Mb.Vg], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Yo = !1,
    Wo;
  var Bp = function (a) {
    var b = z(),
      c = a['gtm.uniqueEventId'],
      d = a['gtm.priorityId'],
      e = a.event;
    if ('gtm.js' === e) {
      if (Yo) return !1;
      Yo = !0;
    }
    var l,
      m = !1;
    if (So(c)) l = Ro(c);
    else {
      if ('gtm.js' !== e && 'gtm.init' !== e && 'gtm.init_consent' !== e) return !1;
      m = !0;
      l = Ro(Number.MAX_SAFE_INTEGER);
    }
    bl(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var t = {
        id: c,
        priorityId: d,
        name: e,
        jf: Jn(l),
        jk: [],
        ph: function () {
          P(6);
          kb('HEALTH', 0);
        },
        Zg: Zo(),
        ah: $o(c),
        zb: new Zn(q, p),
      },
      u = Ac(t);
    m && (u = zp(u));
    var r = Vo(u, t),
      v = !1;
    fo(t.zb);
    ('gtm.js' !== e && 'gtm.sync' !== e) || qo(Qg.M);
    return Ap(u, r) || v;
  };
  function $o(a) {
    return function (b) {
      qk && (Lb(b) || kl(a, 'input', b));
    };
  }
  function Zo() {
    var a = {};
    a.event = ze('event', 1);
    a.ecommerce = ze('ecommerce', 1);
    a.gtm = ze('gtm');
    a.eventModel = ze('eventModel');
    return a;
  }
  function zp(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(mc[c][Mb.xb]),
          e;
        if (!(e = Yd[d] || void 0 !== mc[c][Mb.Hi])) {
          var f = mc[c]['function'];
          if (!f) throw 'Error: No function name given for function call.';
          var g = oc[f];
          e = g ? g.isInfrastructure || !1 : !1;
        }
        if (
          e ||
          0 === d.indexOf('__ccd') ||
          0 === d.indexOf('__ogt') ||
          '__set_product_settings' === d
        )
          b[c] = !0;
      }
    return b;
  }
  function Ap(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && mc[c] && !Zd[String(mc[c][Mb.xb])]) return !0;
    return !1;
  }
  var Dp = function (a, b, c, d) {
      Cp.push('event', [b, a], c, d);
    },
    Ep = function (a, b, c, d) {
      Cp.push('get', [a, b], c, d);
    },
    Fp = function () {
      this.status = 1;
      this.D = {};
      this.h = {};
      this.K = {};
      this.P = null;
      this.B = {};
      this.m = !1;
    },
    Gp = function (a, b, c, d) {
      var e = z();
      this.type = a;
      this.m = e;
      this.W = b || '';
      this.h = c;
      this.messageContext = d;
    },
    Hp = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    Ip = function (a, b) {
      var c = ij(b);
      return (a.m[c.U] = a.m[c.U] || new Fp());
    },
    Jp = function (a, b, c, d) {
      if (d.W) {
        var e = Ip(a, d.W),
          f = e.P;
        if (f) {
          var g = N(c),
            l = N(e.D[d.W]),
            m = N(e.B),
            n = N(e.h),
            p = N(a.B),
            q = {};
          if (qk)
            try {
              q = N(se);
            } catch (v) {
              P(72);
            }
          var t = ij(d.W).prefix,
            u = function (v) {
              jl(d.messageContext.eventId, t, v);
              var w = g[R.g.Mb];
              w && G(w);
            },
            r = Il(
              Gl(
                Fl(
                  El(
                    Cl(
                      Bl(
                        Dl(
                          Al(
                            zl(
                              yl(new xl(d.messageContext.eventId, d.messageContext.priorityId), g),
                              l,
                            ),
                            m,
                          ),
                          n,
                        ),
                        p,
                      ),
                      q,
                    ),
                    d.messageContext.eventMetadata,
                  ),
                  function () {
                    if (u) {
                      var v = u;
                      u = void 0;
                      v('2');
                    }
                  },
                ),
                function () {
                  if (u) {
                    var v = u;
                    u = void 0;
                    v('3');
                  }
                },
              ),
            );
          try {
            jl(d.messageContext.eventId, t, '1'), Pn(d.type, d.W, r), f(d.W, b, d.m, r);
          } catch (v) {
            jl(d.messageContext.eventId, t, '4');
          }
        }
      }
    };
  Hp.prototype.register = function (a, b, c) {
    var d = Ip(this, a);
    3 !== d.status && ((d.P = b), (d.status = 3), c && (N(d.h, c), (d.h = c)), this.flush());
  };
  Hp.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!ij(c)) return;
      if (c) {
        var e = ij(c);
        e &&
          1 === Ip(this, c).status &&
          ((Ip(this, c).status = 2), this.push('require', [{}], e.U, {}));
      }
      Ip(this, c).m && (d.deferrable = !1);
    }
    this.h.push(new Gp(a, c, b, d));
    d.deferrable || this.flush();
  };
  Hp.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.W || Ip(this, f.W).m ? ((f.messageContext.deferrable = !1), this.h.push(f)) : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case 'require':
            g = Ip(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case 'set':
            k(f.h[0], function (t, u) {
              N(Ja(t, u), b.B);
            });
            break;
          case 'config':
            g = Ip(this, f.W);
            e.fb = {};
            k(
              f.h[0],
              (function (t) {
                return function (u, r) {
                  N(Ja(u, r), t.fb);
                };
              })(e),
            );
            var l = !!e.fb[R.g.Lc];
            delete e.fb[R.g.Lc];
            var m = ij(f.W),
              n = m.U === m.id;
            l || (n ? (g.B = {}) : (g.D[f.W] = {}));
            (g.m && l) || Jp(this, R.g.va, e.fb, f);
            g.m = !0;
            n ? N(e.fb, g.B) : (N(e.fb, g.D[f.W]), P(70));
            d = !0;
            break;
          case 'event':
            g = Ip(this, f.W);
            e.ld = {};
            k(
              f.h[0],
              (function (t) {
                return function (u, r) {
                  N(Ja(u, r), t.ld);
                };
              })(e),
            );
            Jp(this, f.h[1], e.ld, f);
            break;
          case 'get':
            g = Ip(this, f.W);
            var p = {},
              q = ((p[R.g.Qa] = f.h[0]), (p[R.g.Za] = f.h[1]), p);
            Jp(this, R.g.Ca, q, f);
        }
        this.h.shift();
        Kp(this, f);
      }
      e = { fb: e.fb, ld: e.ld };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Kp = function (a, b) {
      if ('require' !== b.type)
        if (b.W) for (var c = Ip(a, b.W).K[b.type] || [], d = 0; d < c.length; d++) c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.K) for (var g = f.K[b.type] || [], l = 0; l < g.length; l++) g[l]();
            }
    },
    Lp = function (a, b) {
      var c = Cp,
        d = N(b);
      N(Ip(c, a).h, d);
      Ip(c, a).h = d;
    },
    Cp = new Hp();
  var Mp = {},
    Np = {},
    Op = function (a) {
      for (var b = [], c = [], d = {}, e = 0; e < a.length; d = { qd: d.qd, nd: d.nd }, e++) {
        var f = a[e];
        if (0 <= f.indexOf('-')) {
          if (((d.qd = ij(f)), d.qd)) {
            var g = Tg();
            ra(
              g,
              (function (q) {
                return function (t) {
                  return q.qd.U === t;
                };
              })(d),
            )
              ? b.push(f)
              : c.push(f);
          }
        } else {
          var l = Mp[f] || [];
          d.nd = {};
          l.forEach(
            (function (q) {
              return function (t) {
                return (q.nd[t] = !0);
              };
            })(d),
          );
          for (var m = Sg(), n = 0; n < m.length; n++)
            if (d.nd[m[n]]) {
              b = b.concat(Tg());
              break;
            }
          var p = Np[f] || [];
          p.length && (b = b.concat(p));
        }
      }
      return { Gj: b, Ij: c };
    },
    Pp = function (a) {
      k(Mp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Qp = function (a) {
      k(Np, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Rp = 'HA GF G UA AW DC MC'.split(' '),
    Sp = !1,
    Tp = !1;
  function Up(a, b) {
    a.hasOwnProperty('gtm.uniqueEventId') ||
      Object.defineProperty(a, 'gtm.uniqueEventId', { value: pe() });
    b.eventId = a['gtm.uniqueEventId'];
    b.priorityId = a['gtm.priorityId'];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Vp = {
      config: function (a, b) {
        var c = Up(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !J(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = ij(a[1]);
          if (e) {
            bl(c.eventId, 'gtag.config');
            var f = e.U,
              g = e.id !== f;
            if (g ? -1 === Tg().indexOf(f) : -1 === Sg().indexOf(f)) {
              var l = d[R.g.na] || Cp.B[R.g.na];
              g
                ? Dn(f, l, { source: 2, fromContainerExecution: b.fromContainerExecution })
                : Cn(f, l, !0, { source: 2, fromContainerExecution: b.fromContainerExecution });
            } else {
              if (be && !g && !d[R.g.Lc]) {
                var m = Tp;
                Tp = !0;
                if (m) return;
              }
              Sp || P(43);
              if (!b.noTargetGroup)
                if (g) {
                  Qp(e.id);
                  var n = e.id,
                    p = d[R.g.Id] || 'default';
                  p = String(p).split(',');
                  for (var q = 0; q < p.length; q++) {
                    var t = Np[p[q]] || [];
                    Np[p[q]] = t;
                    0 > t.indexOf(n) && t.push(n);
                  }
                } else {
                  Pp(e.id);
                  var u = e.id,
                    r = d[R.g.Id] || 'default';
                  r = r.toString().split(',');
                  for (var v = 0; v < r.length; v++) {
                    var w = Mp[r[v]] || [];
                    Mp[r[v]] = w;
                    0 > w.indexOf(u) && w.push(u);
                  }
                }
              delete d[R.g.Id];
              var y = b.eventMetadata || {};
              y.hasOwnProperty('is_external_event') ||
                (y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = y;
              delete d[R.g.Mb];
              for (var x = g ? [e.id] : Tg(), A = 0; A < x.length; A++) {
                var B = N(b);
                Cp.push('config', [d], x[A], B);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          P(39);
          var c = Up(a, b),
            d = a[1];
          'default' === d ? bg(a[2]) : 'update' === d && dg(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if ((!J(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = N(e)),
            e[R.g.Mb] && (g.eventCallback = e[R.g.Mb]),
            e[R.g.Dd] && (g.eventTimeout = e[R.g.Dd]));
          var l = Up(a, b),
            m = l.eventId,
            n = l.priorityId;
          g['gtm.uniqueEventId'] = m;
          n && (g['gtm.priorityId'] = n);
          if ('optimize.callback' === c) return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            t = q && q[R.g.wb];
          void 0 === t && ((t = ve(R.g.wb, 2)), void 0 === t && (t = 'default'));
          if (h(t) || qa(t)) {
            var u = t.toString().replace(/\s+/g, '').split(','),
              r = Op(u),
              v = r.Gj,
              w = r.Ij;
            if (w.length)
              for (var y = (q && q[R.g.na]) || Cp.B[R.g.na], x = 0; x < w.length; x++) {
                var A = ij(w[x]);
                A && Dn(A.U, y, { source: 3, fromContainerExecution: b.fromContainerExecution });
              }
            p = kj(v);
          } else p = void 0;
          var B = p;
          if (B) {
            bl(m, c);
            for (var C = [], H = 0; H < B.length; H++) {
              var I = B[H],
                D = N(b);
              if (-1 !== Rp.indexOf(I.prefix)) {
                var K = N(d),
                  O = D.eventMetadata || {};
                O.hasOwnProperty('is_external_event') ||
                  (O.is_external_event = !D.fromContainerExecution);
                D.eventMetadata = O;
                delete K[R.g.Mb];
                Dp(c, K, I.id, D);
              }
              C.push(I.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length ? (g.eventModel[R.g.wb] = C.join()) : delete g.eventModel[R.g.wb];
            Sp || P(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        P(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && oa(a[3])) {
          var c = ij(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Sp || P(43);
            var f = Cp.B[R.g.na];
            if (
              !ra(Tg(), function (l) {
                return c.U === l;
              })
            )
              Dn(c.U, f, { source: 4, fromContainerExecution: b.fromContainerExecution });
            else if (-1 !== Rp.indexOf(c.prefix)) {
              Up(a, b);
              var g = {};
              Yf(N(((g[R.g.Qa] = d), (g[R.g.Za] = e), g)));
              Ep(
                d,
                function (l) {
                  G(function () {
                    return e(l);
                  });
                },
                c.id,
                b,
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Sp = !0;
          var c = Up(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = 'gtm.js'),
            (f['gtm.start'] = a[1].getTime()),
            (f['gtm.uniqueEventId'] = d),
            (f['gtm.priorityId'] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && J(a[1])
          ? (c = N(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((c = {}), J(a[2]) || qa(a[2]) ? (c[a[1]] = N(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Up(a, b),
            e = d.eventId,
            f = d.priorityId;
          N(c);
          var g = N(c);
          Cp.push('set', [g], void 0, b);
          c['gtm.uniqueEventId'] = e;
          f && (c['gtm.priorityId'] = f);
          Fc(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Wp = { policy: !0 };
  var Xp = function (a) {
      var b = E[Vd.fa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Yp = function (a) {
      var b = E[Vd.fa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Zp = !1,
    $p = [];
  function aq() {
    if (!Zp) {
      Zp = !0;
      for (var a = 0; a < $p.length; a++) G($p[a]);
    }
  }
  var bq = function (a) {
    Zp ? G(a) : $p.push(a);
  };
  var sq = function (a) {
    if (rq(a)) return a;
    this.h = a;
  };
  sq.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var rq = function (a) {
    return !a || 'object' !== Jb(a) || J(a) ? !1 : 'getUntrustedMessageValue' in a;
  };
  sq.prototype.getUntrustedMessageValue = sq.prototype.getUntrustedMessageValue;
  var tq = 0,
    uq = {},
    vq = [],
    wq = [],
    xq = !1,
    yq = !1;
  function zq(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Aq = function (a) {
      return E[Vd.fa].push(a);
    },
    Bq = function (a, b) {
      var c = Wd[Vd.fa],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = E.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d && (g && (E.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Cq(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      '_clear' !== e && (c && ye(e), ye(e, f));
    });
    le || (le = a['gtm.start']);
    var d = a['gtm.uniqueEventId'];
    if (!a.event) return !1;
    'number' !== typeof d && ((d = pe()), (a['gtm.uniqueEventId'] = d), ye('gtm.uniqueEventId', d));
    return Bp(a);
  }
  function Dq(a) {
    if (null == a || 'object' !== typeof a) return !1;
    if (a.event) return !0;
    if (xa(a)) {
      var b = a[0];
      if ('config' === b || 'event' === b || 'js' === b || 'get' === b) return !0;
    }
    return !1;
  }
  function Eq() {
    var a;
    if (wq.length) a = wq.shift();
    else if (vq.length) a = vq.shift();
    else return;
    var b;
    var c = a;
    if (xq || !Dq(c.message)) b = c;
    else {
      xq = !0;
      var d = c.message['gtm.uniqueEventId'];
      'number' !== typeof d && (d = c.message['gtm.uniqueEventId'] = pe());
      var e = {},
        f = {
          message: ((e.event = 'gtm.init_consent'), (e['gtm.uniqueEventId'] = d - 2), e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        l = {
          message: ((g.event = 'gtm.init'), (g['gtm.uniqueEventId'] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      vq.unshift(l, c);
      if (qk && Qg.M) {
        var m;
        if (Qg.Se) {
          var n = Qg.M,
            p = Vg().destination[n];
          m = p && p.context;
        } else {
          var q = Qg.M,
            t = Vg().container[q];
          m = t && t.context;
        }
        var u = m,
          r,
          v = Ve(E.location.href);
        r = v.hostname + v.pathname;
        var w = u && u.fromContainerExecution,
          y = u && u.source,
          x = Qg.M,
          A = Qg.Hb,
          B = Qg.Se;
        Ck || (Ck = r);
        Bk.push(x + ';' + A + ';' + (w ? 1 : 0) + ';' + (y || 0) + ';' + (B ? 1 : 0));
      }
      b = f;
    }
    return b;
  }
  function Fq() {
    for (var a = !1, b; !yq && (b = Eq()); ) {
      yq = !0;
      delete se.eventModel;
      ue();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) yq = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                'gtm.allowlist',
                'gtm.blocklist',
                'gtm.whitelist',
                'gtm.blacklist',
                'tagTypeBlacklist',
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var l = f[g],
              m = ve(l, 1);
            if (qa(m) || J(m)) m = N(m);
            te[l] = m;
          }
        try {
          if (oa(d))
            try {
              d.call(we);
            } catch (C) {}
          else if (qa(d)) {
            var n = d;
            if (h(n[0])) {
              var p = n[0].split('.'),
                q = p.pop(),
                t = n.slice(1),
                u = ve(p.join('.'), 2);
              if (null != u)
                try {
                  u[q].apply(u, t);
                } catch (C) {}
            }
          } else {
            var r = void 0,
              v = !1;
            if (xa(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var w = Vp[d[0]];
                  if (w && (!e.fromContainerExecution || !Wp[d[0]])) {
                    r = w(d, e);
                    break a;
                  }
                }
                r = void 0;
              }
              (v = r && 'set' === d[0] && !!r.event) && P(101);
            } else r = d;
            if (r) {
              var y = Cq(r, e);
              a = y || a;
              v && y && P(113);
            }
          }
        } finally {
          e.fromContainerExecution && ue(!0);
          var x = d['gtm.uniqueEventId'];
          if ('number' === typeof x) {
            for (var A = uq[String(x)] || [], B = 0; B < A.length; B++) wq.push(Gq(A[B]));
            A.length && wq.sort(zq);
            delete uq[String(x)];
            x > tq && (tq = x);
          }
          yq = !1;
        }
      }
    }
    return !a;
  }
  function Hq() {
    var b = Fq();
    try {
      Xp(Qg.M);
    } catch (c) {}
    return b;
  }
  function Io(a) {
    if (tq < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      uq[b] = uq[b] || [];
      uq[b].push(a);
    } else
      wq.push(Gq(a)),
        wq.sort(zq),
        G(function () {
          yq || Fq();
        });
  }
  function Gq(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Jq = function () {
      function a(f) {
        var g = {};
        if (rq(f)) {
          var l = f;
          f = rq(l) ? l.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = qb(Vd.fa, []),
        c = (Wd[Vd.fa] = Wd[Vd.fa] || {});
      !0 === c.pruned && P(83);
      uq = Go().get();
      Jo();
      Wn(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = 'gtm.dom'), f));
        }
      });
      bq(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = 'gtm.load'), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Wd.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++) f[g] = new sq(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        vq.push.apply(vq, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number('1000') || 300);
        if (this.length > n) for (P(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = 'boolean' !== typeof m || m;
        return Fq() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      vq.push.apply(vq, e);
      if (Iq()) {
        G(Hq);
      }
    },
    Iq = function () {
      var a = !0;
      return a;
    };
  function Kq(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = z();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Lq(a) {
    return a && 0 === a.indexOf('pending:') ? Kq(a.substr(8)) : !1;
  }
  var rc = {};
  rc.Pd = new String('undefined');
  var Mq = function (a) {
    this.h = function (b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === rc.Pd ? b : a[d]);
      return c.join('');
    };
  };
  Mq.prototype.toString = function () {
    return this.h('undefined');
  };
  Mq.prototype.valueOf = Mq.prototype.toString;
  rc.Ki = Mq;
  rc.Te = {};
  rc.Xi = function (a) {
    return new Mq(a);
  };
  var Nq = {};
  rc.Wj = function (a, b) {
    var c = pe();
    Nq[c] = [a, b];
    return c;
  };
  rc.eh = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = Nq[c];
      if (d && 'function' === typeof d[b]) d[b]();
      Nq[c] = void 0;
    };
  };
  rc.wj = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  rc.Oj = function (a) {
    if (a === rc.Pd) return a;
    var b = pe();
    rc.Te[b] = a;
    return 'google_tag_manager["' + Qg.M + '"].macro(' + b + ')';
  };
  rc.Hj = function (a, b, c) {
    a instanceof rc.Ki && ((a = a.h(rc.Wj(b, c))), (b = na));
    return { rj: a, O: b };
  };
  var Oq = function (a, b, c) {
      var d = {
        event: b,
        'gtm.element': a,
        'gtm.elementClasses': Gb(a, 'className'),
        'gtm.elementId': a['for'] || Bb(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || Gb(a, 'target') || '',
      };
      c && (d['gtm.triggers'] = c.join(','));
      d['gtm.elementUrl'] =
        (a.attributes && a.attributes.formaction ? a.formAction : '') ||
        a.action ||
        Gb(a, 'href') ||
        a.src ||
        a.code ||
        a.codebase ||
        '';
      return d;
    },
    Pq = function (a) {
      Wd.hasOwnProperty('autoEventsSettings') || (Wd.autoEventsSettings = {});
      var b = Wd.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Qq = function (a, b, c) {
      Pq(a)[b] = c;
    },
    Rq = function (a, b, c, d) {
      var e = Pq(a),
        f = Ea(e, b, d);
      e[b] = c(f);
    },
    Sq = function (a, b, c) {
      var d = Pq(a);
      return Ea(d, b, c);
    };
  var Tq = ['input', 'select', 'textarea'],
    Uq = ['button', 'hidden', 'image', 'reset', 'submit'],
    Vq = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > Tq.indexOf(b) || ('input' === b && 0 <= Uq.indexOf(a.type.toLowerCase()))
        ? !1
        : !0;
    },
    Wq = function (a) {
      return a.form ? (a.form.tagName ? a.form : F.getElementById(a.form)) : Eb(a, ['form'], 100);
    },
    Xq = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Vq(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var lr = E.clearTimeout,
    mr = E.setTimeout,
    V = function (a, b, c, d) {
      if (Pg()) {
        b && G(b);
      } else return vb(a, b, c, d);
    },
    nr = function () {
      return new Date();
    },
    or = function () {
      return E.location.href;
    },
    pr = function (a) {
      return Te(Ve(a), 'fragment');
    },
    qr = function (a) {
      return Ue(Ve(a));
    },
    rr = function (a, b) {
      return ve(a, b || 2);
    },
    sr = function (a, b, c) {
      var d;
      b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Aq(a))) : (d = Aq(a));
      return d;
    },
    tr = function (a, b) {
      E[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === E[a] || (c && !E[a])) && (E[a] = b);
      return E[a];
    },
    ur = function (a, b, c) {
      return pg(a, b, void 0 === c ? !0 : !!c);
    },
    vr = function (a, b, c) {
      return 0 === Fg(a, b, c);
    },
    wr = function (a, b) {
      if (Pg()) {
        b && G(b);
      } else xb(a, b);
    },
    xr = function (a) {
      return !!Sq(a, 'init', !1);
    },
    yr = function (a) {
      Qq(a, 'init', !0);
    },
    zr = function (a, b, c) {
      qk && (Lb(a) || kl(c, b, a));
    };
  var Ar = rc.Hj;
  var Xr = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector',
  ];
  function Yr(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Zr = new ta();
  function $r(a, b, c) {
    var d = c ? 'i' : void 0;
    try {
      var e = String(b) + d,
        f = Zr.get(e);
      f || ((f = new RegExp(b, d)), Zr.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function as(a, b) {
    function c(g) {
      var l = Ve(g),
        m = Te(l, 'protocol'),
        n = Te(l, 'host', !0),
        p = Te(l, 'port'),
        q = Te(l, 'path').toLowerCase().replace(/\/$/, '');
      if (void 0 === m || ('http' === m && '80' === p) || ('https' === m && '443' === p))
        (m = 'web'), (p = 'default');
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function bs(a) {
    return cs(a) ? 1 : 0;
  }
  function cs(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = N(a, {});
        N({ arg1: c[d], any_of: void 0 }, e);
        if (bs(e)) return !0;
      }
      return !1;
    }
    switch (a['function']) {
      case '_cn':
        return 0 <= String(b).indexOf(String(c));
      case '_css':
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Xr.length; g++) {
                var l = Xr[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case '_ew':
        return Yr(b, c);
      case '_eq':
        return String(b) === String(c);
      case '_ge':
        return Number(b) >= Number(c);
      case '_gt':
        return Number(b) > Number(c);
      case '_lc':
        return 0 <= String(b).split(',').indexOf(String(c));
      case '_le':
        return Number(b) <= Number(c);
      case '_lt':
        return Number(b) < Number(c);
      case '_re':
        return $r(b, c, a.ignore_case);
      case '_sw':
        return 0 === String(b).indexOf(String(c));
      case '_um':
        return as(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(['config', 'event', 'get', 'set']);
  function us() {
    return (E.gaGlobal = E.gaGlobal || {});
  }
  var vs = function () {
      var a = us();
      a.hid = a.hid || sa();
      return a.hid;
    },
    ws = function (a, b) {
      var c = us();
      if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
    };
  var Ts = function () {
      var a = !0;
      (Oh(7) && Oh(9) && Oh(10)) || (a = !1);
      return a;
    },
    Us = function () {
      var a = !0;
      (Oh(3) && Oh(4)) || (a = !1);
      return a;
    };
  var wt = window,
    xt = document,
    yt = function (a) {
      var b = wt._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === wt['ga-disable-' + a])) return !0;
      try {
        var c = wt.external;
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = jg('AMP_TOKEN', String(xt.cookie), !0), e = 0; e < d.length; e++)
        if ('$OPT_OUT' == d[e]) return !0;
      return xt.getElementById('__gaOptOutExtension') ? !0 : !1;
    };
  function Gt(a) {
    k(a, function (c) {
      '_' === c.charAt(0) && delete a[c];
    });
    var b = a[R.g.Ma] || {};
    k(b, function (c) {
      '_' === c.charAt(0) && delete b[c];
    });
  }
  var Pt = function (a, b) {};
  function Ot(a, b) {
    var c = function () {};
    return c;
  }
  function Qt(a, b, c) {}
  var Vu = function (a, b) {
      if (!b.C) {
        var c = U(b, R.g.Qa),
          d = U(b, R.g.Za),
          e = U(b, c);
        if (void 0 === e) {
          var f = void 0;
          Su.hasOwnProperty(c) ? (f = Su[c]) : Tu.hasOwnProperty(c) && (f = Tu[c]);
          1 === f && (f = Uu(c));
          h(f)
            ? lo()(function () {
                var g = lo().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    Wu = function (a, b) {
      var c = a[R.g.Jc],
        d = b + '.',
        e = a[R.g.T] || '',
        f = void 0 === c ? !!a.use_anchor : 'fragment' === c,
        g = !!a[R.g.Qb];
      e = String(e).replace(/\s+/g, '').split(',');
      var l = lo();
      l(d + 'require', 'linker');
      l(d + 'linker:autoLink', e, f, g);
    },
    $u = function (a, b, c) {
      if (Sf() && (!c.C || !Xu[a])) {
        var d = !eg(R.g.R),
          e = function (f) {
            var g,
              l,
              m = lo(),
              n = Yu(b, '', c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.C || Zu(b, n.createOnlyFields)) {
              c.C &&
                ((g = 'gtm' + pe()), (l = n.createOnlyFields), n.gtmTrackerName && (l.name = g));
              m(function () {
                var u = m.getByName(b);
                u && (p = u.get('clientId'));
                c.C || m.remove(b);
              });
              m('create', a, c.C ? l : n.createOnlyFields);
              d &&
                eg(R.g.R) &&
                ((d = !1),
                m(function () {
                  var u = lo().getByName(c.C ? g : b);
                  !u ||
                    (u.get('clientId') == p && q) ||
                    (c.C
                      ? ((n.fieldsToSet['&gcu'] = '1'), (n.fieldsToSet['&gcut'] = Sd[f]))
                      : ((n.fieldsToSend['&gcu'] = '1'), (n.fieldsToSend['&gcut'] = Sd[f])),
                    u.set(n.fieldsToSet),
                    c.C ? u.send('pageview') : u.send('pageview', n.fieldsToSend));
                }));
              c.C &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        gg(function () {
          return e(R.g.R);
        }, R.g.R);
        gg(function () {
          return e(R.g.F);
        }, R.g.F);
        c.C && (Xu[a] = !0);
      }
    },
    av = function (a, b) {
      An() && b && (a[R.g.ub] = b);
    },
    jv = function (a, b, c) {
      function d() {
        var D = U(c, R.g.Dc);
        l(function () {
          if (!c.C && J(D)) {
            var K = r.fieldsToSend,
              O = m().getByName(n),
              S;
            for (S in D)
              if (D.hasOwnProperty(S) && /^(dimension|metric)\d+$/.test(S) && void 0 != D[S]) {
                var ha = O.get(Uu(D[S]));
                bv(K, S, ha);
              }
          }
        });
      }
      function e() {
        if (r.displayfeatures) {
          var D = '_dc_gtm_' + f.replace(/[^A-Za-z0-9-]/g, '');
          p('require', 'displayfeatures', void 0, { cookieName: D });
        }
      }
      var f = a,
        g = 'https://www.google-analytics.com/analytics.js',
        l = c.C ? no(U(c, 'gaFunctionName')) : no();
      if (oa(l)) {
        var m = lo,
          n;
        c.C ? (n = U(c, 'name') || U(c, 'gtmTrackerName')) : (n = 'gtag_' + f.split('-').join('_'));
        var p = function (D) {
            var K = [].slice.call(arguments, 0);
            K[0] = n ? n + '.' + K[0] : '' + K[0];
            l.apply(window, K);
          },
          q = function (D) {
            var K = function (X, T) {
                for (var Q = 0; T && Q < T.length; Q++) p(X, T[Q]);
              },
              O = c.C,
              S = O ? cv(r) : dv(b, c);
            if (S) {
              var ha = {};
              av(ha, D);
              p('require', 'ec', 'ec.js', ha);
              O && S.af && p('set', '&cu', S.af);
              var M = S.action;
              if (O || 'impressions' === M) if ((K('ec:addImpression', S.mh), !O)) return;
              if ('promo_click' === M || 'promo_view' === M || (O && S.ed)) {
                var L = S.ed;
                K('ec:addPromo', L);
                if (L && 0 < L.length && 'promo_click' === M) {
                  O ? p('ec:setAction', M, S.Ra) : p('ec:setAction', M);
                  return;
                }
                if (!O) return;
              }
              'promo_view' !== M &&
                'impressions' !== M &&
                (K('ec:addProduct', S.Bb), p('ec:setAction', M, S.Ra));
            }
          },
          t = function (D) {
            if (D) {
              var K = {};
              if (J(D)) for (var O in ev) ev.hasOwnProperty(O) && fv(ev[O], O, D[O], K);
              av(K, y);
              p('require', 'linkid', K);
            }
          },
          u = function () {
            if (Pg()) {
            } else {
              var D = U(c, R.g.ki);
              D && (p('require', D, { dataLayer: Vd.fa }), p('require', 'render'));
            }
          },
          r = Yu(n, b, c),
          v = function (D, K, O) {
            O && (K = '' + K);
            r.fieldsToSend[D] = K;
          };
        !c.C &&
          Zu(n, r.createOnlyFields) &&
          (l(function () {
            m() && m().remove(n);
          }),
          (gv[n] = !1));
        l('create', f, r.createOnlyFields);
        if (r.createOnlyFields[R.g.ub] && !c.C) {
          var w = zn(r.createOnlyFields[R.g.ub], '/analytics.js');
          w && (g = w);
        }
        var y = c.C ? r.fieldsToSet[R.g.ub] : r.createOnlyFields[R.g.ub];
        if (y) {
          var x = c.C ? r.fieldsToSet[R.g.Fd] : r.createOnlyFields[R.g.Fd];
          x && !gv[n] && ((gv[n] = !0), l(ro(n, x)));
        }
        c.C
          ? r.enableRecaptcha && p('require', 'recaptcha', 'recaptcha.js')
          : (d(), t(r.linkAttribution));
        var A = r[R.g.ra];
        A && A[R.g.T] && Wu(A, n);
        p('set', r.fieldsToSet);
        if (c.C) {
          if (r.enableLinkId) {
            var B = {};
            av(B, y);
            p('require', 'linkid', 'linkid.js', B);
          }
          Sf() && $u(f, n, c);
        }
        if (b === R.g.qc)
          if (c.C) {
            e();
            if (r.remarketingLists) {
              var C = '_dc_gtm_' + f.replace(/[^A-Za-z0-9-]/g, '');
              p('require', 'adfeatures', { cookieName: C });
            }
            q(y);
            p('send', 'pageview');
            r.createOnlyFields._useUp && oo(n + '.');
          } else u(), p('send', 'pageview', r.fieldsToSend);
        else
          b === R.g.va
            ? (u(),
              Mj(f, c),
              U(c, R.g.ab) && (Yi(['aw', 'dc']), oo(n + '.')),
              0 != r.sendPageView && p('send', 'pageview', r.fieldsToSend),
              $u(f, n, c))
            : b === R.g.Ca
            ? Vu(n, c)
            : 'screen_view' === b
            ? p('send', 'screenview', r.fieldsToSend)
            : 'timing_complete' === b
            ? ((r.fieldsToSend.hitType = 'timing'),
              v('timingCategory', r.eventCategory, !0),
              c.C ? v('timingVar', r.timingVar, !0) : v('timingVar', r.name, !0),
              v('timingValue', za(r.value)),
              void 0 !== r.eventLabel && v('timingLabel', r.eventLabel, !0),
              p('send', r.fieldsToSend))
            : 'exception' === b
            ? p('send', 'exception', r.fieldsToSend)
            : ('' === b && c.C) ||
              ('track_social' === b && c.C
                ? ((r.fieldsToSend.hitType = 'social'),
                  v('socialNetwork', r.socialNetwork, !0),
                  v('socialAction', r.socialAction, !0),
                  v('socialTarget', r.socialTarget, !0))
                : ((c.C || hv[b]) && q(y),
                  c.C && e(),
                  (r.fieldsToSend.hitType = 'event'),
                  v('eventCategory', r.eventCategory, !0),
                  v('eventAction', r.eventAction || b, !0),
                  void 0 !== r.eventLabel && v('eventLabel', r.eventLabel, !0),
                  void 0 !== r.value && v('eventValue', za(r.value))),
              p('send', r.fieldsToSend));
        if (!iv && !c.C) {
          iv = !0;
          go();
          var H = function () {
              c.N();
            },
            I = function () {
              m().loaded || H();
            };
          Pg() ? G(I) : vb(g, I, H);
        }
      } else G(c.N);
    },
    kv = function (a, b, c, d) {
      hg(
        function () {
          jv(a, b, d);
        },
        [R.g.R, R.g.F],
      );
    },
    nv = function (a, b) {
      function c(f) {
        function g(n, p) {
          for (var q = 0; q < p.length; q++) {
            var t = p[q];
            if (f[t]) {
              m[n] = f[t];
              break;
            }
          }
        }
        function l() {
          if (f.category) m.category = f.category;
          else {
            for (var n = '', p = 0; p < lv.length; p++)
              void 0 !== f[lv[p]] && (n && (n += '/'), (n += f[lv[p]]));
            n && (m.category = n);
          }
        }
        var m = N(f);
        if (mv || b)
          g('id', ['id', 'item_id', 'promotion_id']),
            g('name', ['name', 'item_name', 'promotion_name']),
            g('brand', ['brand', 'item_brand']),
            g('variant', ['variant', 'item_variant']),
            g('list', ['list_name', 'item_list_name']),
            g('position', ['list_position', 'creative_slot', 'index']),
            l();
        g('listPosition', ['list_position']);
        g('creative', ['creative_name']);
        g('list', ['list_name']);
        g('position', ['list_position', 'creative_slot']);
        return m;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++) a[e] && J(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    ov = function (a) {
      return eg(a);
    },
    pv = !1;
  var mv = !1;
  mv = !0;
  var iv,
    gv = {},
    Xu = {},
    qv = {},
    Su = Object.freeze(
      ((qv.client_storage = 'storage'),
      (qv.sample_rate = 1),
      (qv.site_speed_sample_rate = 1),
      (qv.store_gac = 1),
      (qv.use_amp_client_id = 1),
      (qv[R.g.jb] = 1),
      (qv[R.g.qa] = 'storeGac'),
      (qv[R.g.Xa] = 1),
      (qv[R.g.Ia] = 1),
      (qv[R.g.Ya] = 1),
      (qv[R.g.Bc] = 1),
      (qv[R.g.xe] = 1),
      (qv[R.g.tb] = 1),
      qv),
    ),
    rv = {},
    sv = Object.freeze(
      ((rv._cs = 1),
      (rv._useUp = 1),
      (rv.allowAnchor = 1),
      (rv.allowLinker = 1),
      (rv.alwaysSendReferrer = 1),
      (rv.clientId = 1),
      (rv.cookieDomain = 1),
      (rv.cookieExpires = 1),
      (rv.cookieFlags = 1),
      (rv.cookieName = 1),
      (rv.cookiePath = 1),
      (rv.cookieUpdate = 1),
      (rv.legacyCookieDomain = 1),
      (rv.legacyHistoryImport = 1),
      (rv.name = 1),
      (rv.sampleRate = 1),
      (rv.siteSpeedSampleRate = 1),
      (rv.storage = 1),
      (rv.storeGac = 1),
      (rv.useAmpClientId = 1),
      (rv._cd2l = 1),
      rv),
    ),
    tv = Object.freeze({ anonymize_ip: 1 }),
    uv = {},
    Tu = Object.freeze(
      ((uv.campaign = {
        content: 'campaignContent',
        id: 'campaignId',
        medium: 'campaignMedium',
        name: 'campaignName',
        source: 'campaignSource',
        term: 'campaignKeyword',
      }),
      (uv.app_id = 1),
      (uv.app_installer_id = 1),
      (uv.app_name = 1),
      (uv.app_version = 1),
      (uv.description = 'exDescription'),
      (uv.fatal = 'exFatal'),
      (uv.language = 1),
      (uv.page_hostname = 'hostname'),
      (uv.transport_type = 'transport'),
      (uv[R.g.ma] = 'currencyCode'),
      (uv[R.g.lg] = 1),
      (uv[R.g.Ka] = 'location'),
      (uv[R.g.Ee] = 'page'),
      (uv[R.g.La] = 'referrer'),
      (uv[R.g.Sb] = 'title'),
      (uv[R.g.ug] = 1),
      (uv[R.g.sa] = 1),
      uv),
    ),
    vv = {},
    wv = Object.freeze(
      ((vv.content_id = 1),
      (vv.event_action = 1),
      (vv.event_category = 1),
      (vv.event_label = 1),
      (vv.link_attribution = 1),
      (vv.name = 1),
      (vv[R.g.ra] = 1),
      (vv[R.g.kg] = 1),
      (vv[R.g.xa] = 1),
      (vv[R.g.ka] = 1),
      vv),
    ),
    xv = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    lv = Object.freeze([
      'item_category',
      'item_category2',
      'item_category3',
      'item_category4',
      'item_category5',
    ]),
    yv = {},
    ev = Object.freeze(((yv.levels = 1), (yv[R.g.Ia] = 'duration'), (yv[R.g.Bc] = 1), yv)),
    zv = {},
    Av = Object.freeze(
      ((zv.anonymize_ip = 1),
      (zv.fatal = 1),
      (zv.send_page_view = 1),
      (zv.store_gac = 1),
      (zv.use_amp_client_id = 1),
      (zv[R.g.qa] = 1),
      (zv[R.g.lg] = 1),
      zv),
    ),
    fv = function (a, b, c, d) {
      if (void 0 !== c)
        if ((Av[b] && (c = Aa(c)), 'anonymize_ip' !== b || c || (c = void 0), 1 === a))
          d[Uu(b)] = c;
        else if (h(a)) d[a] = c;
        else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Uu = function (a) {
      return a && h(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    Bv = {},
    hv = Object.freeze(
      ((Bv.checkout_progress = 1),
      (Bv.select_content = 1),
      (Bv.set_checkout_option = 1),
      (Bv[R.g.kc] = 1),
      (Bv[R.g.mc] = 1),
      (Bv[R.g.Ib] = 1),
      (Bv[R.g.nc] = 1),
      (Bv[R.g.rb] = 1),
      (Bv[R.g.Jb] = 1),
      (Bv[R.g.sb] = 1),
      (Bv[R.g.Ba] = 1),
      (Bv[R.g.oc] = 1),
      (Bv[R.g.Ha] = 1),
      Bv),
    ),
    Cv = {},
    Dv = Object.freeze(
      ((Cv.checkout_progress = 1),
      (Cv.set_checkout_option = 1),
      (Cv[R.g.Mf] = 1),
      (Cv[R.g.Nf] = 1),
      (Cv[R.g.kc] = 1),
      (Cv[R.g.mc] = 1),
      (Cv[R.g.Of] = 1),
      (Cv[R.g.Ib] = 1),
      (Cv[R.g.Ba] = 1),
      (Cv[R.g.oc] = 1),
      (Cv[R.g.Pf] = 1),
      Cv),
    ),
    Ev = {},
    Fv = Object.freeze(
      ((Ev.generate_lead = 1),
      (Ev.login = 1),
      (Ev.search = 1),
      (Ev.select_content = 1),
      (Ev.share = 1),
      (Ev.sign_up = 1),
      (Ev.view_search_results = 1),
      (Ev[R.g.nc] = 1),
      (Ev[R.g.rb] = 1),
      (Ev[R.g.Jb] = 1),
      (Ev[R.g.sb] = 1),
      (Ev[R.g.Ha] = 1),
      Ev),
    ),
    Gv = function (a) {
      var b = 'general';
      Dv[a] ? (b = 'ecommerce') : Fv[a] ? (b = 'engagement') : 'exception' === a && (b = 'error');
      return b;
    },
    Hv = {},
    Iv = Object.freeze(
      ((Hv.view_search_results = 1), (Hv[R.g.rb] = 1), (Hv[R.g.sb] = 1), (Hv[R.g.Ha] = 1), Hv),
    ),
    bv = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    Jv = function (a) {
      if (qa(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + '.' + String(f));
          }
        }
        return 0 < b.length ? b.join('!') : void 0;
      }
    },
    Yu = function (a, b, c) {
      var d = function (K) {
          return U(c, K);
        },
        e = {},
        f = {},
        g = {},
        l = {},
        m = Jv(d(R.g.ji));
      !c.C && m && bv(f, 'exp', m);
      g['&gtm'] = bh(!0);
      Sf() && (l._cs = ov);
      var n = d(R.g.Dc);
      if (!c.C && J(n))
        for (var p in n)
          if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
            var q = d(String(n[p]));
            void 0 !== q && bv(f, p, q);
          }
      for (var t = ul(c), u = 0; u < t.length; ++u) {
        var r = t[u];
        if (c.C) {
          var v = d(r);
          xv.hasOwnProperty(r) ? (e[r] = v) : sv.hasOwnProperty(r) ? (l[r] = v) : (g[r] = v);
        } else {
          var w = void 0;
          w = r !== R.g.aa ? d(r) : vl(c, r);
          if (wv.hasOwnProperty(r)) fv(wv[r], r, w, e);
          else if (tv.hasOwnProperty(r)) fv(tv[r], r, w, g);
          else if (Tu.hasOwnProperty(r)) fv(Tu[r], r, w, f);
          else if (Su.hasOwnProperty(r)) fv(Su[r], r, w, l);
          else if (/^(dimension|metric|content_group)\d+$/.test(r)) fv(1, r, w, f);
          else if (r === R.g.aa) {
            if (!pv) {
              var y = La(w);
              y && (f['&did'] = y);
            }
            var x = void 0,
              A = void 0;
            b === R.g.va
              ? (x = La(vl(c, r), '.'))
              : ((x = La(vl(c, r, 1), '.')), (A = La(vl(c, r, 2), '.')));
            x && (f['&gdid'] = x);
            A && (f['&edid'] = A);
          } else r === R.g.Pa && 0 > t.indexOf(R.g.Bc) && (l.cookieName = w + '_ga');
        }
      }
      (!1 !== d(R.g.Zh) && !1 !== d(R.g.uc) && Ts()) || (g.allowAdFeatures = !1);
      (!1 !== d(R.g.X) && Us()) || (g.allowAdPersonalizationSignals = !1);
      !c.C && d(R.g.ab) && (l._useUp = !0);
      if (c.C) {
        l.name = l.name || e.gtmTrackerName;
        var B = g.hitCallback;
        g.hitCallback = function () {
          oa(B) && B();
          c.O();
        };
      } else {
        bv(l, 'cookieDomain', 'auto');
        bv(g, 'forceSSL', !0);
        bv(e, 'eventCategory', Gv(b));
        Iv[b] && bv(f, 'nonInteraction', !0);
        'login' === b || 'sign_up' === b || 'share' === b
          ? bv(e, 'eventLabel', d(R.g.kg))
          : 'search' === b || 'view_search_results' === b
          ? bv(e, 'eventLabel', d(R.g.si))
          : 'select_content' === b && bv(e, 'eventLabel', d(R.g.ci));
        var C = e[R.g.ra] || {},
          H = C[R.g.Pb];
        H || (0 != H && C[R.g.T]) ? (l.allowLinker = !0) : !1 === H && bv(l, 'useAmpClientId', !1);
        f.hitCallback = c.O;
        l.name = a;
      }
      Sf() &&
        ((g['&gcs'] = fg()),
        eg(R.g.R) || (l.storage = 'none'),
        eg(R.g.F) || ((g.allowAdFeatures = !1), (l.storeGac = !1)));
      var I = d(R.g.na) || d(R.g.ub),
        D = d(R.g.Fd);
      I && (c.C || (l[R.g.ub] = I), (l._cd2l = !0));
      D && !c.C && (l[R.g.Fd] = D);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = l;
      return e;
    },
    cv = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.af = b.currencyCode);
      if (b.impressions) {
        c.action = 'impressions';
        var d = b.impressions;
        c.mh = 'impressions' === b.translateIfKeyEquals ? nv(d, !0) : d;
      }
      if (b.promoView) {
        c.action = 'promo_view';
        var e = b.promoView.promotions;
        c.ed = 'promoView' === b.translateIfKeyEquals ? nv(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = 'promo_click';
        var f = b.promoClick.promotions;
        c.ed = 'promoClick' === b.translateIfKeyEquals ? nv(f, !0) : f;
        c.Ra = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          'translateIfKeyEquals' !== g &&
          'impressions' !== g &&
          'promoView' !== g &&
          'promoClick' !== g &&
          'currencyCode' !== g
        ) {
          c.action = g;
          var l = b[g].products;
          c.Bb = 'products' === b.translateIfKeyEquals ? nv(l, !0) : l;
          c.Ra = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    dv = function (a, b) {
      function c(v) {
        return {
          id: d(R.g.Ea),
          affiliation: d(R.g.gi),
          revenue: d(R.g.ka),
          tax: d(R.g.Wf),
          shipping: d(R.g.Ec),
          coupon: d(R.g.hi),
          list: e() || v,
        };
      }
      for (
        var d = function (v) {
            return U(b, v);
          },
          e = function () {
            var v;
            mv && (v = d(R.g.Uf));
            return d(R.g.Vf) || v;
          },
          f = d(R.g.Z),
          g,
          l = 0;
        f && l < f.length && ((g = f[l][R.g.Vf]), !g && mv && (g = f[l][R.g.Uf]), !g);
        l++
      );
      var m = d(R.g.Dc);
      if (J(m))
        for (var n = 0; f && n < f.length; ++n) {
          var p = f[n],
            q;
          for (q in m)
            m.hasOwnProperty(q) &&
              /^(dimension|metric)\d+$/.test(q) &&
              void 0 != m[q] &&
              bv(p, q, p[m[q]]);
        }
      var t = null,
        u = d(R.g.ii);
      if (a === R.g.Ba || a === R.g.oc) t = { action: a, Ra: c(), Bb: nv(f) };
      else if (a === R.g.kc) t = { action: 'add', Ra: c(), Bb: nv(f) };
      else if (a === R.g.mc) t = { action: 'remove', Ra: c(), Bb: nv(f) };
      else if (a === R.g.Ha) t = { action: 'detail', Ra: c(g), Bb: nv(f) };
      else if (a === R.g.rb) t = { action: 'impressions', mh: nv(f) };
      else if (a === R.g.sb) t = { action: 'promo_view', ed: mv ? nv(u) || nv(f) : nv(u) };
      else if (('select_content' === a && u && 0 < u.length) || (mv && a === R.g.Jb))
        t = { action: 'promo_click', ed: mv ? nv(u) || nv(f) : nv(u) };
      else if ('select_content' === a || (mv && a === R.g.nc))
        t = { action: 'click', Ra: { list: e() || g }, Bb: nv(f) };
      else if (a === R.g.Ib || 'checkout_progress' === a) {
        var r = { step: a === R.g.Ib ? 1 : d(R.g.Tf), option: d(R.g.Sf) };
        t = { action: 'checkout', Bb: nv(f), Ra: N(c(), r) };
      } else
        'set_checkout_option' === a &&
          (t = { action: 'checkout_option', Ra: { step: d(R.g.Tf), option: d(R.g.Sf) } });
      t && (t.af = d(R.g.ma));
      return t;
    },
    Kv = {},
    Zu = function (a, b) {
      var c = Kv[a];
      Kv[a] = N(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var Lv = Ot;
  var Mv = function (a, b, c) {
    for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  var Nv = encodeURI,
    Y = encodeURIComponent,
    Ov = function (a, b, c) {
      yb(a, b, c);
    },
    Pv = function (a, b) {
      if (!a) return !1;
      var c = Te(Ve(a), 'host');
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Qv = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { o: {} };
  (Z.o.e = ['google']),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.s = 'e';
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.o.f = ['google']),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.s = 'f';
        Z.__f.isVendorTemplate = !0;
        Z.__f.priorityOverride = 0;
        Z.__f.isInfrastructure = !1;
      })(function (a) {
        var b = rr('gtm.referrer', 1) || F.referrer;
        return b
          ? a.vtp_component && 'URL' != a.vtp_component
            ? Te(Ve(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey)
            : qr(String(b))
          : String(b);
      });
    })();
  (Z.o.u = ['google']),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.s = 'u';
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !1;
      })(function (b) {
        var c;
        c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : rr('gtm.url', 1)) || or();
        var d = b[a('vtp_component')];
        if (!d || 'URL' == d) return qr(String(c));
        var e = Ve(String(c)),
          f;
        if ('QUERY' === d)
          a: {
            var g = b[a('vtp_multiQueryKeys').toString()],
              l = b[a('vtp_queryKey').toString()] || '',
              m = b[a('vtp_ignoreEmptyQueryParam').toString()],
              n;
            g
              ? qa(l)
                ? (n = l)
                : (n = String(l).replace(/\s+/g, '').split(','))
              : (n = [String(l)]);
            for (var p = 0; p < n.length; p++) {
              var q = Te(e, 'QUERY', void 0, void 0, n[p]);
              if (void 0 != q && (!m || '' !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Te(
            e,
            d,
            'HOST' == d ? b[a('vtp_stripWww')] : void 0,
            'PATH' == d ? b[a('vtp_defaultPages')] : void 0,
          );
        return f;
      });
    })();
  (Z.o.v = ['google']),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.s = 'v';
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = rr(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        zr(d, 'v', a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.o.aev = ['google']),
    (function () {
      function a(t, u, r, v, w) {
        w || (w = 'element');
        var y = u + '.' + r,
          x;
        if (n.hasOwnProperty(y)) x = n[y];
        else {
          var A = t[w];
          if (A && ((x = v(A)), (n[y] = x), p.push(y), 35 < p.length)) {
            var B = p.shift();
            delete n[B];
          }
        }
        return x;
      }
      function b(t, u, r) {
        var v = t[q[u]];
        return void 0 !== v ? v : r;
      }
      function c(t, u) {
        if (!t) return !1;
        var r = d(or());
        qa(u) ||
          (u = String(u || '')
            .replace(/\s+/g, '')
            .split(','));
        for (var v = [r], w = 0; w < u.length; w++) {
          var y = u[w];
          if (y.hasOwnProperty('is_regex'))
            if (y.is_regex)
              try {
                y = new RegExp(y.domain);
              } catch (B) {
                continue;
              }
            else y = y.domain;
          var x = d(t);
          if (y instanceof RegExp) {
            if (y.test(x)) return !1;
          } else {
            var A = y;
            if (0 != A.length) {
              if (0 <= x.indexOf(A)) return !1;
              v.push(d(A));
            }
          }
        }
        return !Pv(t, v);
      }
      function d(t) {
        m.test(t) || (t = 'http://' + t);
        return Te(Ve(t), 'HOST', !0);
      }
      function e(t, u, r, v) {
        switch (t) {
          case 'SUBMIT_TEXT':
            return a(u, r, 'FORM.' + t, f, 'formSubmitElement') || v;
          case 'LENGTH':
            var w = a(u, r, 'FORM.' + t, g);
            return void 0 === w ? v : w;
          case 'INTERACTED_FIELD_ID':
            return l(u, 'id', v);
          case 'INTERACTED_FIELD_NAME':
            return l(u, 'name', v);
          case 'INTERACTED_FIELD_TYPE':
            return l(u, 'type', v);
          case 'INTERACTED_FIELD_POSITION':
            var y = u.interactedFormFieldPosition;
            return void 0 === y ? v : y;
          case 'INTERACT_SEQUENCE_NUMBER':
            var x = u.interactSequenceNumber;
            return void 0 === x ? v : x;
          default:
            return v;
        }
      }
      function f(t) {
        switch (t.tagName.toLowerCase()) {
          case 'input':
            return Bb(t, 'value');
          case 'button':
            return Cb(t);
          default:
            return null;
        }
      }
      function g(t) {
        if ('form' === t.tagName.toLowerCase() && t.elements) {
          for (var u = 0, r = 0; r < t.elements.length; r++) Vq(t.elements[r]) && u++;
          return u;
        }
      }
      function l(t, u, r) {
        var v = t.interactedFormField;
        return (v && Bb(v, u)) || r;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: 'elementAttribute',
          CLASSES: 'elementClasses',
          ELEMENT: 'element',
          ID: 'elementId',
          HISTORY_CHANGE_SOURCE: 'historyChangeSource',
          HISTORY_NEW_STATE: 'newHistoryState',
          HISTORY_NEW_URL_FRAGMENT: 'newUrlFragment',
          HISTORY_OLD_STATE: 'oldHistoryState',
          HISTORY_OLD_URL_FRAGMENT: 'oldUrlFragment',
          TARGET: 'elementTarget',
        };
      (function (t) {
        Z.__aev = t;
        Z.__aev.s = 'aev';
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0;
        Z.__aev.isInfrastructure = !1;
      })(function (t) {
        var u = t.vtp_gtmEventId,
          r = t.vtp_defaultValue,
          v = t.vtp_varType,
          w = t.vtp_gtmCachedValues.gtm;
        switch (v) {
          case 'TAG_NAME':
            var y = w.element;
            return (y && y.tagName) || r;
          case 'TEXT':
            return a(w, u, v, Cb) || r;
          case 'URL':
            var x;
            a: {
              var A = String(w.elementUrl || r || ''),
                B = Ve(A),
                C = String(t.vtp_component || 'URL');
              switch (C) {
                case 'URL':
                  x = A;
                  break a;
                case 'IS_OUTBOUND':
                  x = c(A, t.vtp_affiliatedDomains);
                  break a;
                default:
                  x = Te(B, C, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey);
              }
            }
            return x;
          case 'ATTRIBUTE':
            var H;
            if (void 0 === t.vtp_attribute) H = b(w, v, r);
            else {
              var I = w.element;
              H = (I && Bb(I, t.vtp_attribute)) || r || '';
            }
            return H;
          case 'MD':
            var D = t.vtp_mdValue,
              K = a(w, u, 'MD', gr);
            return D && K ? jr(K, D) || r : K || r;
          case 'FORM':
            return e(String(t.vtp_component || 'SUBMIT_TEXT'), w, u, r);
          default:
            var O = b(w, v, r);
            zr(O, 'aev', t.vtp_gtmEventId);
            return O;
        }
      });
    })();
  (Z.o.fsl = []),
    (function () {
      function a() {
        var e = W('document'),
          f = c(),
          g = HTMLFormElement.prototype.submit;
        zb(
          e,
          'click',
          function (l) {
            var m = l.target;
            if (
              m &&
              (m = Eb(m, ['button', 'input'], 100)) &&
              ('submit' == m.type || 'image' == m.type) &&
              m.name &&
              Bb(m, 'value')
            ) {
              var n;
              m.form
                ? m.form.tagName
                  ? (n = m.form)
                  : (n = F.getElementById(m.form))
                : (n = Eb(m, ['form'], 100));
              n && f.store(n, m);
            }
          },
          !1,
        );
        zb(
          e,
          'submit',
          function (l) {
            var m = l.target;
            if (!m) return l.returnValue;
            var n = l.defaultPrevented || !1 === l.returnValue,
              p = b(m) && !n,
              q = f.get(m),
              t = !0;
            if (
              d(
                m,
                function () {
                  if (t) {
                    var u;
                    q &&
                      ((u = e.createElement('input')),
                      (u.type = 'hidden'),
                      (u.name = q.name),
                      (u.value = q.value),
                      m.appendChild(u),
                      Fc(24) && q.hasAttribute('formaction') && P(103));
                    g.call(m);
                    u && m.removeChild(u);
                  }
                },
                n,
                p,
                q,
              )
            )
              t = !1;
            else return n || (l.preventDefault && l.preventDefault(), (l.returnValue = !1)), !1;
            return l.returnValue;
          },
          !1,
        );
        HTMLFormElement.prototype.submit = function () {
          var l = this,
            m = b(l),
            n = !0;
          d(
            l,
            function () {
              n && g.call(l);
            },
            !1,
            m,
          ) && (g.call(l), (n = !1));
        };
      }
      function b(e) {
        var f = e.target;
        return f && '_self' !== f && '_parent' !== f && '_top' !== f ? !1 : !0;
      }
      function c() {
        var e = [],
          f = function (g) {
            return ra(e, function (l) {
              return l.form === g;
            });
          };
        return {
          store: function (g, l) {
            var m = f(g);
            m ? (m.button = l) : e.push({ form: g, button: l });
          },
          get: function (g) {
            var l = f(g);
            return l ? l.button : null;
          },
        };
      }
      function d(e, f, g, l, m) {
        var n = Sq('fsl', g ? 'nv.mwt' : 'mwt', 0),
          p;
        p = g ? Sq('fsl', 'nv.ids', []) : Sq('fsl', 'ids', []);
        if (!p.length) return !0;
        var q = Oq(e, 'gtm.formSubmit', p),
          t = e.action;
        t && t.tagName && (t = e.cloneNode(!1).action);
        q['gtm.elementUrl'] = t;
        m && (q['gtm.formSubmitElement'] = m);
        if (l && n) {
          if (!sr(q, Bq(f, n), n)) return !1;
        } else sr(q, function () {}, n || 2e3);
        return !0;
      }
      (function (e) {
        Z.__fsl = e;
        Z.__fsl.s = 'fsl';
        Z.__fsl.isVendorTemplate = !0;
        Z.__fsl.priorityOverride = 0;
        Z.__fsl.isInfrastructure = !1;
      })(function (e) {
        var f = e.vtp_waitForTags,
          g = e.vtp_checkValidation,
          l = Number(e.vtp_waitForTagsTimeout);
        if (!l || 0 >= l) l = 2e3;
        var m = e.vtp_uniqueTriggerId || '0';
        if (f) {
          var n = function (q) {
            return Math.max(l, q);
          };
          Rq('fsl', 'mwt', n, 0);
          g || Rq('fsl', 'nv.mwt', n, 0);
        }
        var p = function (q) {
          q.push(m);
          return q;
        };
        Rq('fsl', 'ids', p, []);
        g || Rq('fsl', 'nv.ids', p, []);
        xr('fsl') || (a(), yr('fsl'));
        G(e.vtp_gtmOnSuccess);
      });
    })();
  (Z.o.smm = ['google']),
    (function () {
      (function (a) {
        Z.__smm = a;
        Z.__smm.s = 'smm';
        Z.__smm.isVendorTemplate = !0;
        Z.__smm.priorityOverride = 0;
        Z.__smm.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_input,
          c = Qv(a.vtp_map, 'key', 'value') || {},
          d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
        zr(d, 'smm', a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.o.lcl = []),
    (function () {
      function a() {
        var c = W('document'),
          d = 0,
          e = function (f) {
            var g = f.target;
            if (g && 3 !== f.which && !(f.vj || (f.timeStamp && f.timeStamp === d))) {
              d = f.timeStamp;
              g = Eb(g, ['a', 'area'], 100);
              if (!g) return f.returnValue;
              var l = f.defaultPrevented || !1 === f.returnValue,
                m = Sq('lcl', l ? 'nv.mwt' : 'mwt', 0),
                n;
              n = l ? Sq('lcl', 'nv.ids', []) : Sq('lcl', 'ids', []);
              if (n.length) {
                var p = Oq(g, 'gtm.linkClick', n);
                if (b(f, g, c) && !l && m && g.href) {
                  var q = !!ra(String(Gb(g, 'rel') || '').split(' '), function (v) {
                    return 'noreferrer' === v.toLowerCase();
                  });
                  q && P(36);
                  var t = W((Gb(g, 'target') || '_self').substring(1)),
                    u = !0,
                    r = Bq(function () {
                      var v;
                      if ((v = u && t)) {
                        var w;
                        a: if (q) {
                          var y;
                          try {
                            y = new MouseEvent(f.type, { bubbles: !0 });
                          } catch (x) {
                            if (!c.createEvent) {
                              w = !1;
                              break a;
                            }
                            y = c.createEvent('MouseEvents');
                            y.initEvent(f.type, !0, !0);
                          }
                          y.vj = !0;
                          f.target.dispatchEvent(y);
                          w = !0;
                        } else w = !1;
                        v = !w;
                      }
                      v && (t.location.href = Gb(g, 'href'));
                    }, m);
                  if (sr(p, r, m)) u = !1;
                  else return f.preventDefault && f.preventDefault(), (f.returnValue = !1);
                } else sr(p, function () {}, m || 2e3);
                return !0;
              }
            }
          };
        zb(c, 'click', e, !1);
        zb(c, 'auxclick', e, !1);
      }
      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
        var f = Gb(d, 'href'),
          g = f.indexOf('#'),
          l = Gb(d, 'target');
        if ((l && '_self' !== l && '_parent' !== l && '_top' !== l) || 0 === g) return !1;
        if (0 < g) {
          var m = qr(f),
            n = qr(e.location);
          return m !== n;
        }
        return !0;
      }
      (function (c) {
        Z.__lcl = c;
        Z.__lcl.s = 'lcl';
        Z.__lcl.isVendorTemplate = !0;
        Z.__lcl.priorityOverride = 0;
        Z.__lcl.isInfrastructure = !1;
      })(function (c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2e3;
        var g = c.vtp_uniqueTriggerId || '0';
        if (d) {
          var l = function (n) {
            return Math.max(f, n);
          };
          Rq('lcl', 'mwt', l, 0);
          e || Rq('lcl', 'nv.mwt', l, 0);
        }
        var m = function (n) {
          n.push(g);
          return n;
        };
        Rq('lcl', 'ids', m, []);
        e || Rq('lcl', 'nv.ids', m, []);
        xr('lcl') || (a(), yr('lcl'));
        G(c.vtp_gtmOnSuccess);
      });
    })();

  (Z.o.gaawc = ['google']),
    (function () {
      (function (a) {
        Z.__gaawc = a;
        Z.__gaawc.s = 'gaawc';
        Z.__gaawc.isVendorTemplate = !0;
        Z.__gaawc.priorityOverride = 10;
        Z.__gaawc.isInfrastructure = !1;
      })(function (a) {
        var b = String(a.vtp_measurementId);
        if (!h(b) || 0 >= b.indexOf('-')) G(a.vtp_gtmOnFailure);
        else {
          var c = Qv(a.vtp_fieldsToSet, 'name', 'value') || {};
          if (c.hasOwnProperty(R.g.Ma) || a.vtp_userProperties) {
            var d = c[R.g.Ma] || {};
            N(Qv(a.vtp_userProperties, 'name', 'value'), d);
            c[R.g.Ma] = d;
          }
          a.vtp_enableSendToServerContainer &&
            a.vtp_serverContainerUrl &&
            ((c[R.g.na] = a.vtp_serverContainerUrl), (c[R.g.Ed] = !0));
          var e = a.vtp_userDataVariable;
          e && (c[R.g.ca] = e);
          Mv(c, Nd, function (f) {
            return Aa(f);
          });
          Mv(c, Pd, function (f) {
            return Number(f);
          });
          c.send_page_view = a.vtp_sendPageView;
          Ho(Do(b, c), a.vtp_gtmEventId, {
            noTargetGroup: !0,
            originatingEntity: Xn(a.vtp_gtmEntityIndex, a.vtp_gtmEntityName),
          });
          G(a.vtp_gtmOnSuccess);
        }
      });
    })();

  (Z.o.ua = ['google']),
    (function () {
      function a(m, n) {
        for (var p in m)
          if (!l[p] && m.hasOwnProperty(p)) {
            var q = g[p] ? Aa(m[p]) : m[p];
            'anonymizeIp' != p || q || (q = void 0);
            n[p] = q;
          }
      }
      function b(m) {
        var n = {};
        m.vtp_gaSettings && N(Qv(m.vtp_gaSettings.vtp_fieldsToSet, 'fieldName', 'value'), n);
        N(Qv(m.vtp_fieldsToSet, 'fieldName', 'value'), n);
        Aa(n.urlPassthrough) && (n._useUp = !0);
        m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
        return n;
      }
      function c(m, n) {
        return void 0 === n ? n : m(n);
      }
      function d(m, n, p) {}
      function e(m, n) {
        if (!f) {
          var p = m.vtp_useDebugVersion ? 'u/analytics_debug.js' : 'analytics.js';
          m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = 'internal/' + p);
          f = !0;
          var q = m.vtp_gtmOnFailure,
            t = zn(n._x_19, '/analytics.js'),
            u = mj('https:', 'http:', '//www.google-analytics.com/' + p, n && !!n.forceSSL);
          V(
            'analytics.js' === p && t ? t : u,
            function () {
              var r = lo();
              (r && r.loaded) || q();
            },
            q,
          );
        }
      }
      var f,
        g = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        l = { urlPassthrough: !0 };
      (function (m) {
        Z.__ua = m;
        Z.__ua.s = 'ua';
        Z.__ua.isVendorTemplate = !0;
        Z.__ua.priorityOverride = 0;
        Z.__ua.isInfrastructure = !1;
      })(function (m) {
        function n() {
          if (m.vtp_doubleClick || 'DISPLAY_FEATURES' == m.vtp_advertisingFeaturesType)
            v.displayfeatures = !0;
        }
        var p = {},
          q = {},
          t = {};
        if (m.vtp_gaSettings) {
          var u = m.vtp_gaSettings;
          N(Qv(u.vtp_contentGroup, 'index', 'group'), p);
          N(Qv(u.vtp_dimension, 'index', 'dimension'), q);
          N(Qv(u.vtp_metric, 'index', 'metric'), t);
          var r = N(u);
          r.vtp_fieldsToSet = void 0;
          r.vtp_contentGroup = void 0;
          r.vtp_dimension = void 0;
          r.vtp_metric = void 0;
          m = N(m, r);
        }
        N(Qv(m.vtp_contentGroup, 'index', 'group'), p);
        N(Qv(m.vtp_dimension, 'index', 'dimension'), q);
        N(Qv(m.vtp_metric, 'index', 'metric'), t);
        var v = b(m),
          w = String(m.vtp_trackingId || ''),
          y = '',
          x = '',
          A = '';
        m.vtp_setTrackerName && 'string' == typeof m.vtp_trackerName
          ? '' !== m.vtp_trackerName && ((A = m.vtp_trackerName), (x = A + '.'))
          : ((A = 'gtm' + pe()), (x = A + '.'));
        var B = function (T, Q) {
          for (var va in Q) Q.hasOwnProperty(va) && (v[T + va] = Q[va]);
        };
        B('contentGroup', p);
        B('dimension', q);
        B('metric', t);
        m.vtp_enableEcommerce &&
          ((y = m.vtp_gtmCachedValues.event), (v.gtmEcommerceData = d(m, v, y)));
        if ('TRACK_EVENT' === m.vtp_trackType)
          (y = 'track_event'),
            n(),
            (v.eventCategory = String(m.vtp_eventCategory)),
            (v.eventAction = String(m.vtp_eventAction)),
            (v.eventLabel = c(String, m.vtp_eventLabel)),
            (v.value = c(za, m.vtp_eventValue));
        else if ('TRACK_PAGEVIEW' == m.vtp_trackType) {
          if (
            ((y = R.g.qc),
            n(),
            'DISPLAY_FEATURES_WITH_REMARKETING_LISTS' == m.vtp_advertisingFeaturesType &&
              (v.remarketingLists = !0),
            m.vtp_autoLinkDomains)
          ) {
            var C = {};
            C[R.g.T] = m.vtp_autoLinkDomains;
            C.use_anchor = m.vtp_useHashAutoLink;
            C[R.g.Qb] = m.vtp_decorateFormsAutoLink;
            v[R.g.ra] = C;
          }
        } else
          'TRACK_SOCIAL' === m.vtp_trackType
            ? ((y = 'track_social'),
              (v.socialNetwork = String(m.vtp_socialNetwork)),
              (v.socialAction = String(m.vtp_socialAction)),
              (v.socialTarget = String(m.vtp_socialActionTarget)))
            : 'TRACK_TIMING' == m.vtp_trackType &&
              ((y = 'timing_complete'),
              (v.eventCategory = String(m.vtp_timingCategory)),
              (v.timingVar = String(m.vtp_timingVar)),
              (v.value = za(m.vtp_timingValue)),
              (v.eventLabel = c(String, m.vtp_timingLabel)));
        m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
        m.vtp_enableLinkId && (v.enableLinkId = !0);
        var H = {};
        a(v, H);
        v.name || (H.gtmTrackerName = A);
        H.gaFunctionName = m.vtp_functionName;
        void 0 !== m.vtp_nonInteraction && (H.nonInteraction = m.vtp_nonInteraction);
        var I = Il(
          Hl(
            Gl(
              Fl(yl(new xl(m.vtp_gtmEventId, m.vtp_gtmPriorityId), H), m.vtp_gtmOnSuccess),
              m.vtp_gtmOnFailure,
            ),
          ),
        );
        kv(w, y, Date.now(), I);
        var D = no(m.vtp_functionName);
        if (oa(D)) {
          var K = function (T) {
            var Q = [].slice.call(arguments, 0);
            Q[0] = x + Q[0];
            D.apply(window, Q);
          };
          if ('TRACK_TRANSACTION' == m.vtp_trackType) {
          } else if ('DECORATE_LINK' == m.vtp_trackType) {
          } else if ('DECORATE_FORM' == m.vtp_trackType) {
          } else if ('TRACK_DATA' == m.vtp_trackType) {
          }
          e(m, v);
        } else G(m.vtp_gtmOnFailure);
      });
    })();

  (Z.o.gas = ['google']),
    (function () {
      (function (a) {
        Z.__gas = a;
        Z.__gas.s = 'gas';
        Z.__gas.isVendorTemplate = !0;
        Z.__gas.priorityOverride = 0;
        Z.__gas.isInfrastructure = !1;
      })(function (a) {
        var b = N(a),
          c = b;
        c[Mb.xb] = null;
        c[Mb.Re] = null;
        var d = (b = c);
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        void 0 !== e &&
          (d.vtp_fieldsToSet.push({ fieldName: 'cookieDomain', value: e }),
          delete d.vtp_cookieDomain);
        return b;
      });
    })();

  (Z.o.html = ['customScripts']),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var l = e.shift(),
                m = a(d, e, f, g);
              if ('SCRIPT' == String(l.nodeName).toUpperCase() && 'text/gtmscript' == l.type) {
                var n = F.createElement('script');
                n.async = !1;
                n.type = 'text/javascript';
                n.id = l.id;
                n.text = l.text || l.textContent || l.innerHTML || '';
                l.charset && (n.charset = l.charset);
                var p = l.getAttribute('data-gtmsrc');
                p && ((n.src = p), rb(n, m));
                d.insertBefore(n, null);
                p || m();
              } else if (l.innerHTML && 0 <= l.innerHTML.toLowerCase().indexOf('<script')) {
                for (var q = []; l.firstChild; ) q.push(l.removeChild(l.firstChild));
                d.insertBefore(l, null);
                a(l, q, m, g)();
              } else d.insertBefore(l, null), m();
            } else f();
          } catch (t) {
            G(g);
          }
        };
      }
      function b(d) {
        if (F.body) {
          var e = d.vtp_gtmOnFailure,
            f = Ar(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.rj,
            l = f.O;
          if (d.vtp_useIframe) {
          } else d.vtp_supportDocumentWrite ? c(g, l, e) : a(F.body, Db(g), l, e)();
        } else
          mr(function () {
            b(d);
          }, 200);
      }
      Z.__html = b;
      Z.__html.s = 'html';
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
    })();

  var hx = {};
  (hx.macro = function (a) {
    if (rc.Te.hasOwnProperty(a)) return rc.Te[a];
  }),
    (hx.onHtmlSuccess = rc.eh(!0)),
    (hx.onHtmlFailure = rc.eh(!1));
  hx.dataLayer = we;
  hx.callback = function (a) {
    ne.hasOwnProperty(a) && oa(ne[a]) && ne[a]();
    delete ne[a];
  };
  hx.bootstrap = 0;
  hx._spx = !1;
  function ix() {
    Wd[Qg.M] = Wd[Qg.M] || hx;
    Qg.Hb && (Wd['ctid_' + Qg.Hb] = hx);
    Wg();
    Yg() ||
      k(Zg(), function (a, b) {
        Dn(a, b.transportUrl, b.context);
        P(92);
      });
    Ga(oe, Z.o);
    sc();
    tc = Bc;
  }
  (function (a) {
    function b() {
      m = F.documentElement.getAttribute('data-tag-assistant-present');
      Kq(m) && (l = g.vi);
    }
    if (!E['__TAGGY_INSTALLED']) {
      var c = !1;
      if (F.referrer) {
        var d = Ve(F.referrer);
        c = 'cct.google' === Se(d, 'host');
      }
      if (!c) {
        var e = pg('googTaggyReferrer');
        c = e.length && e[0].length;
      }
      c && ((E['__TAGGY_INSTALLED'] = !0), vb('https://cct.google/taggy/agent.js'));
    }
    if (ie) a();
    else {
      var f = function (r) {
          var v = 'GTM',
            w = 'GTM';
          ce ? ((v = 'OGT'), (w = 'GTAG')) : ie && (w = v = 'OPT');
          var y = E['google.tagmanager.debugui2.queue'];
          y ||
            ((y = []),
            (E['google.tagmanager.debugui2.queue'] = y),
            vb(
              'https://' +
                Vd.rd +
                '/debug/bootstrap?id=' +
                Qg.M +
                '&src=' +
                w +
                '&cond=' +
                r +
                '&gtm=' +
                bh(),
            ));
          var x = {
            messageType: 'CONTAINER_STARTING',
            data: { scriptSource: pb, containerProduct: v, debug: !1, id: Qg.M, isGte: be },
          };
          x.data.resume = function () {
            a();
          };
          Vd.Nh && (x.data.initialPublish = !0);
          y.push(x);
        },
        g = { sk: 1, wi: 2, Ii: 3, Ph: 4, vi: 5 },
        l = void 0,
        m = void 0,
        n = Te(E.location, 'query', !1, void 0, 'gtm_debug');
      Kq(n) && (l = g.wi);
      if (!l && F.referrer) {
        var p = Ve(F.referrer);
        'tagassistant.google.com' === Se(p, 'host') && (l = g.Ii);
      }
      if (!l) {
        var q = pg('__TAG_ASSISTANT');
        q.length && q[0].length && (l = g.Ph);
      }
      l || b();
      if (!l && Fc(54) && Lq(m)) {
        var t = function () {
            if (u) return !0;
            u = !0;
            b();
            l && pb ? f(l) : a();
          },
          u = !1;
        zb(
          F,
          'TADebugSignal',
          function () {
            t();
          },
          !1,
        );
        E.setTimeout(function () {
          t();
        }, 200);
      } else l && pb ? f(l) : a();
    }
  })(function () {
    var a = !1;
    a && ho('INIT');
    Gf().m();
    Lh();
    zi.enable_gbraid_cookie_write = !0;
    if (Qg.Hb ? Wd['ctid_' + Qg.Hb] : Wd[Qg.M]) {
      var b = Wd.zones;
      b && b.unregisterChild(Sg());
    } else {
      (Fc(11) || Fc(13) || Fc(48)) && Wl();
      for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) jc.push(d[e]);
      for (var f = c.tags || [], g = 0; g < f.length; g++) mc.push(f[g]);
      for (var l = c.predicates || [], m = 0; m < l.length; m++) lc.push(l[m]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], t = {}, u = 0; u < q.length; u++)
          t[q[u][0]] = Array.prototype.slice.call(q[u], 1);
        kc.push(t);
      }
      oc = Z;
      pc = bs;
      ix();
      Jq();
      Rn = !1;
      Sn = 0;
      if (('interactive' == F.readyState && !F.createEventObject) || 'complete' == F.readyState)
        Un();
      else {
        zb(F, 'DOMContentLoaded', Un);
        zb(F, 'readystatechange', Un);
        if (F.createEventObject && F.documentElement.doScroll) {
          var r = !0;
          try {
            r = !E.frameElement;
          } catch (A) {}
          r && Vn();
        }
        zb(E, 'load', Un);
      }
      Zp = !1;
      'complete' === F.readyState ? aq() : zb(E, 'load', aq);
      rl();
      Fc(46) && P(111);
      Fc(47) && P(112);
      me = z();
      hx.bootstrap = me;
      if (a) {
        var x = io('INIT');
      }
    }
  });
})();

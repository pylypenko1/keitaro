!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e(require('jquery')))
    : 'function' == typeof define && define.amd
    ? define(['jquery'], e)
    : ((t = t || self).Util = e(t.jQuery));
})(this, function (t) {
  'use strict';
  t = t && t.hasOwnProperty('default') ? t.default : t;
  var e = 'transitionend';
  function n(e) {
    var n = this,
      o = !1;
    return (
      t(this).one(r.TRANSITION_END, function () {
        o = !0;
      }),
      setTimeout(function () {
        o || r.triggerTransitionEnd(n);
      }, e),
      this
    );
  }
  var r = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (e) {
      if (!e) return 0;
      var n = t(e).css('transition-duration'),
        r = t(e).css('transition-delay'),
        o = parseFloat(n),
        i = parseFloat(r);
      return o || i
        ? ((n = n.split(',')[0]), (r = r.split(',')[0]), 1e3 * (parseFloat(n) + parseFloat(r)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (n) {
      t(n).trigger(e);
    },
    supportsTransitionEnd: function () {
      return Boolean(e);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var o in n)
        if (Object.prototype.hasOwnProperty.call(n, o)) {
          var i = n[o],
            a = e[o],
            u =
              a && r.isElement(a)
                ? 'element'
                : ((s = a),
                  {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(i).test(u))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                o +
                '" provided type "' +
                u +
                '" but expected type "' +
                i +
                '".',
            );
        }
      var s;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? r.findShadowRoot(t.parentNode) : null;
    },
    jQueryDetection: function () {
      if (void 0 === t)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
        );
      var e = t.fn.jquery.split(' ')[0].split('.');
      if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4)
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
        );
    },
  };
  return (
    r.jQueryDetection(),
    (t.fn.emulateTransitionEnd = n),
    (t.event.special[r.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function (e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      },
    }),
    r
  );
});

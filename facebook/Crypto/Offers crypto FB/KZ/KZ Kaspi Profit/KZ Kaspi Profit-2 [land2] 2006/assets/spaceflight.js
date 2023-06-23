/*! For license information please see spaceflight.js.LICENSE.txt */
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function (e, t, n) {
    n(1), n(2), (e.exports = n(3));
  },
  function (e, t, n) {
    !(function (e) {
      'use strict';
      function t() {
        return 'undefined' != typeof window;
      }
      function n() {
        return u || (t() && (u = window.gsap) && u.registerPlugin && u);
      }
      function r(e) {
        return 'string' == typeof e;
      }
      function o(e, t) {
        var n = 'x' === t ? 'Width' : 'Height',
          r = 'scroll' + n,
          o = 'client' + n;
        return e === f || e === d || e === p
          ? Math.max(d[r], p[r]) - (f['inner' + n] || d[o] || p[o])
          : e[r] - e['offset' + n];
      }
      function i(e, t) {
        var n = 'scroll' + ('x' === t ? 'Left' : 'Top');
        return (
          e === f &&
            (null != e.pageXOffset
              ? (n = 'page' + t.toUpperCase() + 'Offset')
              : (e = null != d[n] ? d : p)),
          function () {
            return e[n];
          }
        );
      }
      function s(e, t) {
        var n = h(e)[0].getBoundingClientRect(),
          r = !t || t === f || t === p,
          o = r
            ? {
                top: d.clientTop - (f.pageYOffset || d.scrollTop || p.scrollTop || 0),
                left: d.clientLeft - (f.pageXOffset || d.scrollLeft || p.scrollLeft || 0),
              }
            : t.getBoundingClientRect(),
          s = { x: n.left - o.left, y: n.top - o.top };
        return !r && t && ((s.x += i(t, 'x')()), (s.y += i(t, 'y')())), s;
      }
      function a(e, t, n, i, a) {
        return isNaN(e) || 'object' == typeof e
          ? r(e) && '=' === e.charAt(1)
            ? parseFloat(e.substr(2)) * ('-' === e.charAt(0) ? -1 : 1) + i - a
            : 'max' === e
            ? o(t, n) - a
            : Math.min(o(t, n), s(e, t)[n] - a)
          : parseFloat(e) - a;
      }
      function l() {
        (u = n()),
          t() &&
            u &&
            document.body &&
            ((f = window),
            (p = document.body),
            (d = document.documentElement),
            (h = u.utils.toArray),
            u.config({ autoKillThreshold: 7 }),
            (g = u.config()),
            (c = 1));
      }
      var u,
        c,
        f,
        d,
        p,
        h,
        g,
        v = {
          version: '3.5.1',
          name: 'scrollTo',
          rawVars: 1,
          register: function (e) {
            (u = e), l();
          },
          init: function (e, t, n, o, s) {
            c || l();
            var u = this;
            (u.isWin = e === f),
              (u.target = e),
              (u.tween = n),
              'object' != typeof t
                ? r((t = { y: t }).y) && 'max' !== t.y && '=' !== t.y.charAt(1) && (t.x = t.y)
                : t.nodeType && (t = { y: t, x: t }),
              (u.vars = t),
              (u.autoKill = !!t.autoKill),
              (u.getX = i(e, 'x')),
              (u.getY = i(e, 'y')),
              (u.x = u.xPrev = u.getX()),
              (u.y = u.yPrev = u.getY()),
              null != t.x
                ? (u.add(u, 'x', u.x, a(t.x, e, 'x', u.x, t.offsetX || 0), o, s, Math.round),
                  u._props.push('scrollTo_x'))
                : (u.skipX = 1),
              null != t.y
                ? (u.add(u, 'y', u.y, a(t.y, e, 'y', u.y, t.offsetY || 0), o, s, Math.round),
                  u._props.push('scrollTo_y'))
                : (u.skipY = 1);
          },
          render: function (e, t) {
            for (
              var n,
                r,
                i,
                s,
                a,
                l = t._pt,
                u = t.target,
                c = t.tween,
                d = t.autoKill,
                p = t.xPrev,
                h = t.yPrev,
                v = t.isWin;
              l;

            )
              l.r(e, l.d), (l = l._next);
            (n = v || !t.skipX ? t.getX() : p),
              (i = (r = v || !t.skipY ? t.getY() : h) - h),
              (s = n - p),
              (a = g.autoKillThreshold),
              t.x < 0 && (t.x = 0),
              t.y < 0 && (t.y = 0),
              d &&
                (!t.skipX && (a < s || s < -a) && n < o(u, 'x') && (t.skipX = 1),
                !t.skipY && (a < i || i < -a) && r < o(u, 'y') && (t.skipY = 1),
                t.skipX &&
                  t.skipY &&
                  (c.kill(),
                  t.vars.onAutoKill && t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))),
              v
                ? f.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y)
                : (t.skipY || (u.scrollTop = t.y), t.skipX || (u.scrollLeft = t.x)),
              (t.xPrev = t.x),
              (t.yPrev = t.y);
          },
          kill: function (e) {
            var t = 'scrollTo' === e;
            (!t && 'scrollTo_x' !== e) || (this.skipX = 1),
              (!t && 'scrollTo_y' !== e) || (this.skipY = 1);
          },
        };
      (v.max = o),
        (v.getOffset = s),
        (v.buildGetter = i),
        n() && u.registerPlugin(v),
        (e.ScrollToPlugin = v),
        (e.default = v),
        'undefined' == typeof window || window !== e
          ? Object.defineProperty(e, '__esModule', { value: !0 })
          : delete e.default;
    })(t);
  },
  function (e, t, n) {
    !(function (e) {
      'use strict';
      function t(e) {
        return e;
      }
      function n(e) {
        return Q(e)[0] || (we(e) ? console.warn('Element not found:', e) : null);
      }
      function r(e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      }
      function o() {
        return 'undefined' != typeof window;
      }
      function i() {
        return B || (o() && (B = window.gsap) && B.registerPlugin && B);
      }
      function s(e) {
        return !!~Y.indexOf(e);
      }
      function a(e, t) {
        return ~ge.indexOf(e) && ge[ge.indexOf(e) + 1][t];
      }
      function l(e, t) {
        var n = t.s,
          r = t.sc,
          o = ve.indexOf(e),
          i = r === Be.sc ? 1 : 2;
        return (
          ~o || (o = ve.push(e) - 1),
          ve[o + i] ||
            (ve[o + i] =
              a(e, n) ||
              (s(e)
                ? r
                : function (t) {
                    return arguments.length ? (e[n] = t) : e[n];
                  }))
        );
      }
      function u(e) {
        return (
          a(e, 'getBoundingClientRect') ||
          (s(e)
            ? function () {
                return (ut.width = F.innerWidth), (ut.height = F.innerHeight), ut;
              }
            : function () {
                return We(e);
              })
        );
      }
      function c(e, t) {
        var n = t.s,
          r = t.d2,
          o = t.d,
          i = t.a;
        return (n = 'scroll' + r) && (i = a(e, n))
          ? i() - u(e)()[o]
          : s(e)
          ? (X[n] || z[n]) - (F['inner' + r] || z['client' + r] || X['client' + r])
          : e[n] - e['offset' + r];
      }
      function f(e, t) {
        for (var n = 0; n < se.length; n += 3)
          (t && !~t.indexOf(se[n + 1])) || e(se[n], se[n + 1], se[n + 2]);
      }
      function d(e) {
        return 'function' == typeof e;
      }
      function p(e) {
        return 'number' == typeof e;
      }
      function h(e) {
        return 'object' == typeof e;
      }
      function g(e) {
        return d(e) && e();
      }
      function v(e, t) {
        return function () {
          var n = g(e),
            r = g(t);
          return function () {
            g(n), g(r);
          };
        };
      }
      function m(e, t, n) {
        return e && e.progress(t ? 0 : 1) && n && e.pause();
      }
      function y(e, t) {
        var n = t(e);
        n && n.totalTime && (e.callbackAnimation = n);
      }
      function x(e) {
        return F.getComputedStyle(e);
      }
      function b(e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      }
      function w(e, t) {
        var n = t.d2;
        return e['offset' + n] || e['client' + n] || 0;
      }
      function T(e) {
        var t,
          n = [],
          r = e.labels,
          o = e.duration();
        for (t in r) n.push(r[t] / o);
        return n;
      }
      function C(e) {
        var t = B.utils.snap(e),
          n =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return n
          ? function (e, r) {
              var o;
              if (!r) return t(e);
              if (0 < r) {
                for (e -= 1e-4, o = 0; o < n.length; o++) if (n[o] >= e) return n[o];
                return n[o - 1];
              }
              for (o = n.length, e += 1e-4; o--; ) if (n[o] <= e) return n[o];
              return n[0];
            }
          : function (n, r) {
              var o = t(n);
              return !r || Math.abs(o - n) < 0.001 || o - n < 0 == r < 0
                ? o
                : t(r < 0 ? n - e : n + e);
            };
      }
      function E(e, t, n, r) {
        return n.split(',').forEach(function (n) {
          return e(t, n, r);
        });
      }
      function S(e, t, n) {
        return e.addEventListener(t, n, { passive: !0 });
      }
      function k(e, t, n) {
        return e.removeEventListener(t, n);
      }
      function A(e, t) {
        if (we(e)) {
          var n = e.indexOf('='),
            r = ~n ? (e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
          ~n && (e.indexOf('%') > n && (r *= t / 100), (e = e.substr(0, n - 1))),
            (e =
              r +
              (e in ze
                ? ze[e] * t
                : ~e.indexOf('%')
                ? (parseFloat(e) * t) / 100
                : parseFloat(e) || 0));
        }
        return e;
      }
      function N(e, t, n, r, o, i, l, u) {
        var c = o.startColor,
          f = o.endColor,
          d = o.fontSize,
          p = o.indent,
          h = o.fontWeight,
          g = $.createElement('div'),
          v = s(n) || 'fixed' === a(n, 'pinType'),
          m = -1 !== e.indexOf('scroller'),
          y = v ? X : n,
          x = -1 !== e.indexOf('start'),
          b = x ? c : f,
          w =
            'border-color:' +
            b +
            ';font-size:' +
            d +
            ';color:' +
            b +
            ';font-weight:' +
            h +
            ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
        return (
          (w += 'position:' + ((m || u) && v ? 'fixed;' : 'absolute;')),
          (!m && !u && v) || (w += (r === Be ? ke : Ae) + ':' + (i + parseFloat(p)) + 'px;'),
          l && (w += 'box-sizing:border-box;text-align:left;width:' + l.offsetWidth + 'px;'),
          (g._isStart = x),
          g.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')),
          (g.style.cssText = w),
          (g.innerText = t || 0 === t ? e + '-' + t : e),
          y.children[0] ? y.insertBefore(g, y.children[0]) : y.appendChild(g),
          (g._offset = g['offset' + r.op.d2]),
          Xe(g, 0, r, x),
          g
        );
      }
      function D() {
        return 20 < me() - xe && ot();
      }
      function j() {
        var e = me();
        xe !== e ? (ot(), xe || Ge('scrollStart'), (xe = e)) : (K = K || V(ot));
      }
      function L() {
        return !ee && !ue && !$.fullscreenElement && U.restart(!0);
      }
      function O(e) {
        var t,
          n = B.ticker.frame,
          r = [],
          o = 0;
        if (de !== n || he) {
          for (et(); o < Qe.length; o += 4)
            (t = F.matchMedia(Qe[o]).matches) !== Qe[o + 3] &&
              ((Qe[o + 3] = t) ? r.push(o) : et(1, Qe[o]) || (d(Qe[o + 2]) && Qe[o + 2]()));
          for (Ze(), o = 0; o < r.length; o++) (t = r[o]), (fe = Qe[t]), (Qe[t + 2] = Qe[t + 1](e));
          (fe = 0), W && tt(0, 1), (de = n), Ge('matchMedia');
        }
      }
      function P() {
        return k(ft, 'scrollEnd', P) || tt(!0);
      }
      function q() {
        return ve.forEach(function (e) {
          return 'function' == typeof e && (e.rec = 0);
        });
      }
      function M(e, t, n, r) {
        if (e.parentNode !== t) {
          for (var o, i = it.length, s = t.style, a = e.style; i--; ) s[(o = it[i])] = n[o];
          (s.position = 'absolute' === n.position ? 'absolute' : 'relative'),
            'inline' === n.display && (s.display = 'inline-block'),
            (a[Ae] = a[ke] = 'auto'),
            (s.overflow = 'visible'),
            (s.boxSizing = 'border-box'),
            (s[Ne] = w(e, Re) + _e),
            (s[De] = w(e, Be) + _e),
            (s[qe] = a[Me] = a.top = a[Se] = '0'),
            lt(r),
            (a[Ne] = a.maxWidth = n[Ne]),
            (a[De] = a.maxHeight = n[De]),
            (a[qe] = n[qe]),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e);
        }
      }
      function H(e) {
        for (var t = st.length, n = e.style, r = [], o = 0; o < t; o++) r.push(st[o], n[st[o]]);
        return (r.t = e), r;
      }
      function I(e, t, r, o, i, s, a, l, u, c, f, h, g) {
        d(e) && (e = e(l)),
          we(e) &&
            'max' === e.substr(0, 3) &&
            (e = h + ('=' === e.charAt(4) ? A('0' + e.substr(3), r) : 0));
        var v,
          m,
          y,
          b = g ? g.time() : 0;
        if ((g && g.seek(0), p(e))) a && Xe(a, r, o, !0);
        else {
          d(t) && (t = t(l));
          var w,
            T,
            C,
            E,
            S = e.split(' ');
          (y = n(t) || X),
            ((w = We(y) || {}) && (w.left || w.top)) ||
              'none' !== x(y).display ||
              ((E = y.style.display),
              (y.style.display = 'block'),
              (w = We(y)),
              E ? (y.style.display = E) : y.style.removeProperty('display')),
            (T = A(S[0], w[o.d])),
            (C = A(S[1] || '0', r)),
            (e = w[o.p] - u[o.p] - c + T + i - C),
            a && Xe(a, C, o, r - C < 20 || (a._isStart && 20 < C)),
            (r -= r - C);
        }
        if (s) {
          var k = e + r,
            N = s._isStart;
          (v = 'scroll' + o.d2),
            Xe(
              s,
              k,
              o,
              (N && 20 < k) || (!N && (f ? Math.max(X[v], z[v]) : s.parentNode[v]) <= k + 1),
            ),
            f && ((u = We(a)), f && (s.style[o.op.p] = u[o.op.p] - o.op.m - s._offset + _e));
        }
        return (
          g &&
            y &&
            ((v = We(y)),
            g.seek(h),
            (m = We(y)),
            (g._caScrollDist = v[o.p] - m[o.p]),
            (e = (e / g._caScrollDist) * h)),
          g && g.seek(b),
          g ? e : Math.round(e)
        );
      }
      function _(e, t, n, r) {
        if (e.parentNode !== t) {
          var o,
            i,
            s = e.style;
          if (t === X) {
            for (o in ((e._stOrig = s.cssText), (i = x(e))))
              +o || ct.test(o) || !i[o] || 'string' != typeof s[o] || '0' === o || (s[o] = i[o]);
            (s.top = n), (s.left = r);
          } else s.cssText = e._stOrig;
          (B.core.getCache(e).uncache = 1), t.appendChild(e);
        }
      }
      function R(e, t) {
        function n(t, l, u, c, f) {
          var d = n.tween,
            p = l.onComplete;
          return (
            d && d.kill(),
            (o = Math.round(u)),
            (l[a] = t),
            ((l.modifiers = {})[a] = function (e) {
              return (
                (e = r(s())) !== o && e !== i && 2 < Math.abs(e - o)
                  ? (d.kill(), (n.tween = 0))
                  : (e = u + c * d.ratio + f * d.ratio * d.ratio),
                (i = o),
                (o = r(e))
              );
            }),
            (l.onComplete = function () {
              (n.tween = 0), p && p.call(d);
            }),
            (d = n.tween = B.to(e, l))
          );
        }
        var o,
          i,
          s = l(e, t),
          a = '_scroll' + t.p2;
        return (
          (e[a] = s),
          e.addEventListener(
            'wheel',
            function () {
              return n.tween && n.tween.kill() && (n.tween = 0);
            },
            { passive: !0 },
          ),
          n
        );
      }
      var B,
        W,
        F,
        $,
        z,
        X,
        Y,
        U,
        V,
        K,
        Q,
        G,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ie,
        se,
        ae,
        le,
        ue,
        ce,
        fe,
        de,
        pe,
        he = 1,
        ge = [],
        ve = [],
        me = Date.now,
        ye = me(),
        xe = 0,
        be = 1,
        we = function (e) {
          return 'string' == typeof e;
        },
        Te = Math.abs,
        Ce = 'scrollLeft',
        Ee = 'scrollTop',
        Se = 'left',
        ke = 'right',
        Ae = 'bottom',
        Ne = 'width',
        De = 'height',
        je = 'Right',
        Le = 'Left',
        Oe = 'Top',
        Pe = 'Bottom',
        qe = 'padding',
        Me = 'margin',
        He = 'Width',
        Ie = 'Height',
        _e = 'px',
        Re = {
          s: Ce,
          p: Se,
          p2: Le,
          os: ke,
          os2: je,
          d: Ne,
          d2: He,
          a: 'x',
          sc: function (e) {
            return arguments.length
              ? F.scrollTo(e, Be.sc())
              : F.pageXOffset || $[Ce] || z[Ce] || X[Ce] || 0;
          },
        },
        Be = {
          s: Ee,
          p: 'top',
          p2: Oe,
          os: Ae,
          os2: Pe,
          d: De,
          d2: Ie,
          a: 'y',
          op: Re,
          sc: function (e) {
            return arguments.length
              ? F.scrollTo(Re.sc(), e)
              : F.pageYOffset || $[Ee] || z[Ee] || X[Ee] || 0;
          },
        },
        We = function (e, t) {
          var n =
              t &&
              'matrix(1, 0, 0, 1, 0, 0)' !== x(e)[ne] &&
              B.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            r = e.getBoundingClientRect();
          return n && n.progress(0).kill(), r;
        },
        Fe = {
          startColor: 'green',
          endColor: 'red',
          indent: 0,
          fontSize: '16px',
          fontWeight: 'normal',
        },
        $e = { toggleActions: 'play', anticipatePin: 0 },
        ze = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        Xe = function (e, t, n, r) {
          var o = { display: 'block' },
            i = n[r ? 'os2' : 'p2'],
            s = n[r ? 'p2' : 'os2'];
          (e._isFlipped = r),
            (o[n.a + 'Percent'] = r ? -100 : 0),
            (o[n.a] = r ? '1px' : 0),
            (o['border' + i + He] = 1),
            (o['border' + s + He] = 0),
            (o[n.p] = t + 'px'),
            B.set(e, o);
        },
        Ye = [],
        Ue = {},
        Ve = {},
        Ke = [],
        Qe = [],
        Ge = function (e) {
          return (
            (Ve[e] &&
              Ve[e].map(function (e) {
                return e();
              })) ||
            Ke
          );
        },
        Je = [],
        Ze = function (e) {
          for (var t = 0; t < Je.length; t += 5)
            (e && Je[t + 4] !== e) ||
              ((Je[t].style.cssText = Je[t + 1]),
              Je[t].getBBox && Je[t].setAttribute('transform', Je[t + 2] || ''),
              (Je[t + 3].uncache = 1));
        },
        et = function (e, t) {
          var n;
          for (re = 0; re < Ye.length; re++)
            (n = Ye[re]), (t && n.media !== t) || (e ? n.kill(1) : n.revert());
          t && Ze(t), t || Ge('revert');
        },
        tt = function (e, t) {
          if (!xe || e) {
            pe = !0;
            var n = Ge('refreshInit');
            ae && ft.sort(),
              t || et(),
              Ye.forEach(function (e) {
                return e.refresh();
              }),
              n.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              q(),
              U.pause(),
              (pe = !1),
              Ge('refresh');
          } else S(ft, 'scrollEnd', P);
        },
        nt = 0,
        rt = 1,
        ot = function () {
          if (!pe) {
            var e = Ye.length,
              t = me(),
              n = 50 <= t - ye,
              r = e && Ye[0].scroll();
            if (
              ((rt = r < nt ? -1 : 1),
              (nt = r),
              n && (xe && !te && 200 < t - xe && ((xe = 0), Ge('scrollEnd')), (J = ye), (ye = t)),
              rt < 0)
            ) {
              for (re = e; 0 < re--; ) Ye[re] && Ye[re].update(0, n);
              rt = 1;
            } else for (re = 0; re < e; re++) Ye[re] && Ye[re].update(0, n);
            K = 0;
          }
        },
        it = [
          Se,
          'top',
          Ae,
          ke,
          Me + Pe,
          Me + je,
          Me + Oe,
          Me + Le,
          'display',
          'flexShrink',
          'float',
          'zIndex',
          'grid-column-start',
          'grid-column-end',
          'grid-row-start',
          'grid-row-end',
          'grid-area',
          'justify-self',
          'align-self',
          'place-self',
        ],
        st = it.concat([
          Ne,
          De,
          'boxSizing',
          'max' + He,
          'max' + Ie,
          'position',
          Me,
          qe,
          qe + Oe,
          qe + je,
          qe + Pe,
          qe + Le,
        ]),
        at = /([A-Z])/g,
        lt = function (e) {
          if (e) {
            var t,
              n,
              r = e.t.style,
              o = e.length,
              i = 0;
            for ((e.t._gsap || B.core.getCache(e.t)).uncache = 1; i < o; i += 2)
              (n = e[i + 1]),
                (t = e[i]),
                n ? (r[t] = n) : r[t] && r.removeProperty(t.replace(at, '-$1').toLowerCase());
          }
        },
        ut = { left: 0, top: 0 },
        ct = /(?:webkit|moz|length|cssText|inset)/i;
      Re.op = Be;
      var ft =
        ((dt.prototype.init = function (e, r) {
          if (((this.progress = this.start = 0), this.vars && this.kill(1), be)) {
            var o,
              i,
              f,
              g,
              v,
              E,
              D,
              O,
              q,
              W,
              Y,
              U,
              V,
              K,
              Z,
              ne,
              oe,
              ie,
              se,
              ue,
              de,
              pe,
              ve,
              ye,
              Ce,
              Ee,
              Se,
              ke,
              Ae,
              Ie,
              ze,
              Xe,
              Ve,
              Ke,
              Qe,
              Ge,
              Je,
              Ze = (e = b(we(e) || p(e) || e.nodeType ? { trigger: e } : e, $e)).onUpdate,
              et = e.toggleClass,
              tt = e.id,
              nt = e.onToggle,
              ot = e.onRefresh,
              it = e.scrub,
              st = e.trigger,
              at = e.pin,
              ct = e.pinSpacing,
              ft = e.invalidateOnRefresh,
              pt = e.anticipatePin,
              ht = e.onScrubComplete,
              gt = e.onSnapComplete,
              vt = e.once,
              mt = e.snap,
              yt = e.pinReparent,
              xt = e.pinSpacer,
              bt = e.containerAnimation,
              wt = e.fastScrollEnd,
              Tt = e.preventOverlaps,
              Ct = e.horizontal || (e.containerAnimation && !1 !== e.horizontal) ? Re : Be,
              Et = !it && 0 !== it,
              St = n(e.scroller || F),
              kt = B.core.getCache(St),
              At = s(St),
              Nt = 'fixed' === ('pinType' in e ? e.pinType : a(St, 'pinType') || (At && 'fixed')),
              Dt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              jt = Et && e.toggleActions.split(' '),
              Lt = 'markers' in e ? e.markers : $e.markers,
              Ot = At ? 0 : parseFloat(x(St)['border' + Ct.p2 + He]) || 0,
              Pt = this,
              qt =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(Pt);
                },
              Mt = (function (e, t, n) {
                var r = n.d,
                  o = n.d2,
                  i = n.a;
                return (i = a(e, 'getBoundingClientRect'))
                  ? function () {
                      return i()[r];
                    }
                  : function () {
                      return (t ? F['inner' + o] : e['client' + o]) || 0;
                    };
              })(St, At, Ct),
              Ht = (function (e, t) {
                return !t || ~ge.indexOf(e)
                  ? u(e)
                  : function () {
                      return ut;
                    };
              })(St, At),
              It = 0,
              _t = l(St, Ct);
            if (
              ((Pt.media = fe),
              (pt *= 45),
              (Pt.scroller = St),
              (Pt.scroll = bt ? bt.time.bind(bt) : _t),
              (g = _t()),
              (Pt.vars = e),
              (r = r || e.animation),
              'refreshPriority' in e && (ae = 1),
              (kt.tweenScroll = kt.tweenScroll || { top: R(St, Be), left: R(St, Re) }),
              (Pt.tweenTo = o = kt.tweenScroll[Ct.p]),
              r &&
                ((r.vars.lazy = !1),
                r._initted ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    r.render(0, !0, !0)),
                (Pt.animation = r.pause()),
                (r.scrollTrigger = Pt),
                (ze = p(it) && it) &&
                  (Ie = B.to(r, {
                    ease: 'power3',
                    duration: ze,
                    onComplete: function () {
                      return ht && ht(Pt);
                    },
                  })),
                (ke = 0),
                (tt = tt || r.vars.id)),
              Ye.push(Pt),
              mt &&
                ((h(mt) && !mt.push) || (mt = { snapTo: mt }),
                'scrollBehavior' in X.style && B.set(At ? [X, z] : St, { scrollBehavior: 'auto' }),
                (f = d(mt.snapTo)
                  ? mt.snapTo
                  : 'labels' === mt.snapTo
                  ? (function (e) {
                      return function (t) {
                        return B.utils.snap(T(e), t);
                      };
                    })(r)
                  : 'labelsDirectional' === mt.snapTo
                  ? (function (e) {
                      return function (t, n) {
                        return C(T(e))(t, n.direction);
                      };
                    })(r)
                  : !1 !== mt.directional
                  ? function (e, t) {
                      return C(mt.snapTo)(e, t.direction);
                    }
                  : B.utils.snap(mt.snapTo)),
                (Xe = h((Xe = mt.duration || { min: 0.1, max: 2 }))
                  ? G(Xe.min, Xe.max)
                  : G(Xe, Xe)),
                (Ve = B.delayedCall(mt.delay || ze / 2 || 0.1, function () {
                  if (Math.abs(Pt.getVelocity()) < 10 && !te && It !== _t()) {
                    var e = r && !Et ? r.totalProgress() : Pt.progress,
                      t = ((e - Ae) / (me() - J)) * 1e3 || 0,
                      n = B.utils.clamp(-Pt.progress, 1 - Pt.progress, (Te(t / 2) * t) / 0.185),
                      i = Pt.progress + (!1 === mt.inertia ? 0 : n),
                      s = G(0, 1, f(i, Pt)),
                      a = _t(),
                      l = Math.round(E + s * V),
                      u = mt.onStart,
                      c = mt.onInterrupt,
                      d = mt.onComplete,
                      p = o.tween;
                    if (a <= D && E <= a && l !== a) {
                      if (p && !p._initted && p.data <= Te(l - a)) return;
                      !1 === mt.inertia && (n = s - Pt.progress),
                        o(
                          l,
                          {
                            duration: Xe(
                              Te((0.185 * Math.max(Te(i - e), Te(s - e))) / t / 0.05 || 0),
                            ),
                            ease: mt.ease || 'power3',
                            data: Te(l - a),
                            onInterrupt: function () {
                              return Ve.restart(!0) && c && c(Pt);
                            },
                            onComplete: function () {
                              (It = _t()),
                                (ke = Ae = r && !Et ? r.totalProgress() : Pt.progress),
                                gt && gt(Pt),
                                d && d(Pt);
                            },
                          },
                          a,
                          n * V,
                          l - a - n * V,
                        ),
                        u && u(Pt, o.tween);
                    }
                  } else Pt.isActive && Ve.restart(!0);
                }).pause())),
              tt && (Ue[tt] = Pt),
              (st = Pt.trigger = n(st || at)),
              (at = !0 === at ? st : n(at)),
              we(et) && (et = { targets: st, className: et }),
              at &&
                (!1 === ct ||
                  ct === Me ||
                  (ct = !(!ct && 'flex' === x(at.parentNode).display) && qe),
                (Pt.pin = at),
                !1 !== e.force3D && B.set(at, { force3D: !0 }),
                (i = B.core.getCache(at)).spacer
                  ? (K = i.pinState)
                  : (xt &&
                      ((xt = n(xt)) && !xt.nodeType && (xt = xt.current || xt.nativeElement),
                      (i.spacerIsNative = !!xt),
                      xt && (i.spacerState = H(xt))),
                    (i.spacer = oe = xt || $.createElement('div')),
                    oe.classList.add('pin-spacer'),
                    tt && oe.classList.add('pin-spacer-' + tt),
                    (i.pinState = K = H(at))),
                (Pt.spacer = oe = i.spacer),
                (Se = x(at)),
                (ve = Se[ct + Ct.os2]),
                (se = B.getProperty(at)),
                (ue = B.quickSetter(at, Ct.a, _e)),
                M(at, oe, Se),
                (ne = H(at))),
              Lt &&
                ((U = h(Lt) ? b(Lt, Fe) : Fe),
                (W = N('scroller-start', tt, St, Ct, U, 0)),
                (Y = N('scroller-end', tt, St, Ct, U, 0, W)),
                (ie = W['offset' + Ct.op.d2]),
                (O = N('start', tt, St, Ct, U, ie, 0, bt)),
                (q = N('end', tt, St, Ct, U, ie, 0, bt)),
                bt && (Je = B.quickSetter([O, q], Ct.a, _e)),
                Nt ||
                  (ge.length && !0 === a(St, 'fixedMarkers')) ||
                  ((function (e) {
                    var t = x(e).position;
                    e.style.position = 'absolute' === t || 'fixed' === t ? t : 'relative';
                  })(At ? X : St),
                  B.set([W, Y], { force3D: !0 }),
                  (Ce = B.quickSetter(W, Ct.a, _e)),
                  (Ee = B.quickSetter(Y, Ct.a, _e)))),
              bt)
            ) {
              var Rt = bt.vars.onUpdate,
                Bt = bt.vars.onUpdateParams;
              bt.eventCallback('onUpdate', function () {
                Pt.update(0, 0, 1), Rt && Rt.apply(Bt || []);
              });
            }
            (Pt.previous = function () {
              return Ye[Ye.indexOf(Pt) - 1];
            }),
              (Pt.next = function () {
                return Ye[Ye.indexOf(Pt) + 1];
              }),
              (Pt.revert = function (e) {
                var t = !1 !== e || !Pt.enabled,
                  n = ee;
                t !== Pt.isReverted &&
                  (t &&
                    (Pt.scroll.rec || (Pt.scroll.rec = _t()),
                    (Qe = Math.max(_t(), Pt.scroll.rec || 0)),
                    (Ke = Pt.progress),
                    (Ge = r && r.progress())),
                  O &&
                    [O, q, W, Y].forEach(function (e) {
                      return (e.style.display = t ? 'none' : 'block');
                    }),
                  t && (ee = 1),
                  Pt.update(t),
                  (ee = n),
                  at &&
                    (t
                      ? (function (e, t, n) {
                          lt(n);
                          var r = e._gsap;
                          if (r.spacerIsNative) lt(r.spacerState);
                          else if (e.parentNode === t) {
                            var o = t.parentNode;
                            o && (o.insertBefore(e, t), o.removeChild(t));
                          }
                        })(at, oe, K)
                      : (yt && Pt.isActive) || M(at, oe, x(at), ye)),
                  (Pt.isReverted = t));
              }),
              (Pt.refresh = function (t, o) {
                if ((!ee && Pt.enabled) || o)
                  if (at && t && xe) S(dt, 'scrollEnd', P);
                  else {
                    (ee = 1),
                      Ie && Ie.pause(),
                      ft && r && r.progress(0).invalidate(),
                      Pt.isReverted || Pt.revert();
                    for (
                      var i,
                        s,
                        a,
                        u,
                        f,
                        h,
                        m,
                        y,
                        b,
                        T,
                        C = Mt(),
                        k = Ht(),
                        N = bt ? bt.duration() : c(St, Ct),
                        j = 0,
                        L = 0,
                        _ = e.end,
                        R = e.endTrigger || st,
                        F = e.start || (0 !== e.start && st ? (at ? '0 0' : '0 100%') : 0),
                        $ = e.pinnedContainer && n(e.pinnedContainer),
                        z = (st && Math.max(0, Ye.indexOf(Pt))) || 0,
                        U = z;
                      U--;

                    )
                      (h = Ye[U]).end || h.refresh(0, 1) || (ee = 1),
                        !(m = h.pin) ||
                          (m !== st && m !== at) ||
                          h.isReverted ||
                          ((T = T || []).unshift(h), h.revert());
                    for (
                      d(F) && (F = F(Pt)),
                        E = I(F, st, C, Ct, _t(), O, W, Pt, k, Ot, Nt, N, bt) || (at ? -0.001 : 0),
                        d(_) && (_ = _(Pt)),
                        we(_) &&
                          !_.indexOf('+=') &&
                          (~_.indexOf(' ')
                            ? (_ = (we(F) ? F.split(' ')[0] : '') + _)
                            : ((j = A(_.substr(2), C)), (_ = we(F) ? F : E + j), (R = st))),
                        D =
                          Math.max(
                            E,
                            I(
                              _ || (R ? '100% 0' : N),
                              R,
                              C,
                              Ct,
                              _t() + j,
                              q,
                              Y,
                              Pt,
                              k,
                              Ot,
                              Nt,
                              N,
                              bt,
                            ),
                          ) || -0.001,
                        V = D - E || ((E -= 0.01) && 0.001),
                        j = 0,
                        U = z;
                      U--;

                    )
                      (m = (h = Ye[U]).pin) &&
                        h.start - h._pinPush < E &&
                        !bt &&
                        ((i = h.end - h.start),
                        (m !== st && m !== $) || p(F) || (j += i),
                        m === at && (L += i));
                    if (
                      ((E += j),
                      (D += j),
                      (Pt._pinPush = L),
                      O &&
                        j &&
                        (((i = {})[Ct.a] = '+=' + j),
                        $ && (i[Ct.p] = '-=' + _t()),
                        B.set([O, q], i)),
                      at)
                    )
                      (i = x(at)),
                        (u = Ct === Be),
                        (a = _t()),
                        (de = parseFloat(se(Ct.a)) + L),
                        !N && 1 < D && ((At ? X : St).style['overflow-' + Ct.a] = 'scroll'),
                        M(at, oe, i),
                        (ne = H(at)),
                        (s = We(at, !0)),
                        (y = Nt && l(St, u ? Re : Be)()),
                        ct &&
                          (((ye = [ct + Ct.os2, V + L + _e]).t = oe),
                          (U = ct === qe ? w(at, Ct) + V + L : 0) && ye.push(Ct.d, U + _e),
                          lt(ye),
                          Nt && _t(Qe)),
                        Nt &&
                          (((f = {
                            top: s.top + (u ? a - E : y) + _e,
                            left: s.left + (u ? y : a - E) + _e,
                            boxSizing: 'border-box',
                            position: 'fixed',
                          })[Ne] = f.maxWidth =
                            Math.ceil(s.width) + _e),
                          (f[De] = f.maxHeight = Math.ceil(s.height) + _e),
                          (f[Me] = f[Me + Oe] = f[Me + je] = f[Me + Pe] = f[Me + Le] = '0'),
                          (f[qe] = i[qe]),
                          (f[qe + Oe] = i[qe + Oe]),
                          (f[qe + je] = i[qe + je]),
                          (f[qe + Pe] = i[qe + Pe]),
                          (f[qe + Le] = i[qe + Le]),
                          (Z = (function (e, t, n) {
                            for (var r, o = [], i = e.length, s = n ? 8 : 0; s < i; s += 2)
                              (r = e[s]), o.push(r, r in t ? t[r] : e[s + 1]);
                            return (o.t = e.t), o;
                          })(K, f, yt))),
                        r
                          ? ((b = r._initted),
                            le(1),
                            r.render(r.duration(), !0, !0),
                            (pe = se(Ct.a) - de + V + L),
                            V !== pe && Z.splice(Z.length - 2, 2),
                            r.render(0, !0, !0),
                            b || r.invalidate(),
                            le(0))
                          : (pe = V);
                    else if (st && _t() && !bt)
                      for (s = st.parentNode; s && s !== X; )
                        s._pinOffset && ((E -= s._pinOffset), (D -= s._pinOffset)),
                          (s = s.parentNode);
                    T &&
                      T.forEach(function (e) {
                        return e.revert(!1);
                      }),
                      (Pt.start = E),
                      (Pt.end = D),
                      (g = v = _t()),
                      bt || (g < Qe && _t(Qe), (Pt.scroll.rec = 0)),
                      Pt.revert(!1),
                      (ee = 0),
                      r &&
                        Et &&
                        r._initted &&
                        r.progress() !== Ge &&
                        r.progress(Ge, !0).render(r.time(), !0, !0),
                      Ke !== Pt.progress &&
                        (r && !Et && r.totalProgress(Ke, !0),
                        (Pt.progress = Ke),
                        Pt.update(0, 0, 1)),
                      at && ct && (oe._pinOffset = Math.round(Pt.progress * pe)),
                      ot && ot(Pt);
                  }
              }),
              (Pt.getVelocity = function () {
                return ((_t() - v) / (me() - J)) * 1e3 || 0;
              }),
              (Pt.endAnimation = function () {
                m(Pt.callbackAnimation),
                  r &&
                    (Ie
                      ? Ie.progress(1)
                      : r.paused()
                      ? Et || m(r, Pt.direction < 0, 1)
                      : m(r, r.reversed()));
              }),
              (Pt.getTrailing = function (e) {
                var t = Ye.indexOf(Pt),
                  n = 0 < Pt.direction ? Ye.slice(0, t).reverse() : Ye.slice(t + 1);
                return we(e)
                  ? n.filter(function (t) {
                      return t.vars.preventOverlaps === e;
                    })
                  : n;
              }),
              (Pt.update = function (e, t, n) {
                if (!bt || n || e) {
                  var i,
                    s,
                    a,
                    l,
                    u,
                    f,
                    h,
                    x = Pt.scroll(),
                    b = e ? 0 : (x - E) / V,
                    w = b < 0 ? 0 : 1 < b ? 1 : b || 0,
                    T = Pt.progress;
                  if (
                    (t &&
                      ((v = g),
                      (g = bt ? _t() : x),
                      mt && ((Ae = ke), (ke = r && !Et ? r.totalProgress() : w))),
                    pt &&
                      !w &&
                      at &&
                      !ee &&
                      !he &&
                      xe &&
                      E < x + ((x - v) / (me() - J)) * pt &&
                      (w = 1e-4),
                    w !== T && Pt.enabled)
                  ) {
                    if (
                      ((l = (u = (i = Pt.isActive = !!w && w < 1) != (!!T && T < 1)) || !!w != !!T),
                      (Pt.direction = T < w ? 1 : -1),
                      (Pt.progress = w),
                      l &&
                        !ee &&
                        ((s = w && !T ? 0 : 1 === w ? 1 : 1 === T ? 2 : 3),
                        Et &&
                          ((a = (!u && 'none' !== jt[s + 1] && jt[s + 1]) || jt[s]),
                          (h = r && ('complete' === a || 'reset' === a || a in r)))),
                      Tt &&
                        u &&
                        (h || it || !r) &&
                        (d(Tt)
                          ? Tt(Pt)
                          : Pt.getTrailing(Tt).forEach(function (e) {
                              return e.endAnimation();
                            })),
                      Et ||
                        (!Ie || ee || he
                          ? r && r.totalProgress(w, !!ee)
                          : ((Ie.vars.totalProgress = w), Ie.invalidate().restart())),
                      at)
                    )
                      if ((e && ct && (oe.style[ct + Ct.os2] = ve), Nt)) {
                        if (l) {
                          if (((f = !e && T < w && x < D + 1 && x + 1 >= c(St, Ct)), yt))
                            if (e || (!i && !f)) _(at, oe);
                            else {
                              var C = We(at, !0),
                                S = x - E;
                              _(
                                at,
                                X,
                                C.top + (Ct === Be ? S : 0) + _e,
                                C.left + (Ct === Be ? 0 : S) + _e,
                              );
                            }
                          lt(i || f ? Z : ne),
                            (pe !== V && w < 1 && i) || ue(de + (1 !== w || f ? 0 : pe));
                        }
                      } else ue(de + pe * w);
                    !mt || o.tween || ee || he || Ve.restart(!0),
                      et &&
                        (u || (vt && w && (w < 1 || !ce))) &&
                        Q(et.targets).forEach(function (e) {
                          return e.classList[i || vt ? 'add' : 'remove'](et.className);
                        }),
                      !Ze || Et || e || Ze(Pt),
                      l && !ee
                        ? (Et &&
                            (h &&
                              ('complete' === a
                                ? r.pause().totalProgress(1)
                                : 'reset' === a
                                ? r.restart(!0).pause()
                                : 'restart' === a
                                ? r.restart(!0)
                                : r[a]()),
                            Ze && Ze(Pt)),
                          (!u && ce) ||
                            (nt && u && y(Pt, nt),
                            Dt[s] && y(Pt, Dt[s]),
                            vt && (1 === w ? Pt.kill(!1, 1) : (Dt[s] = 0)),
                            u || (Dt[(s = 1 === w ? 1 : 3)] && y(Pt, Dt[s]))),
                          wt &&
                            !i &&
                            Math.abs(Pt.getVelocity()) > (p(wt) ? wt : 2500) &&
                            (m(Pt.callbackAnimation), Ie ? Ie.progress(1) : m(r, !w, 1)))
                        : Et && Ze && !ee && Ze(Pt);
                  }
                  if (Ee) {
                    var k = bt ? (x / bt.duration()) * (bt._caScrollDist || 0) : x;
                    Ce(k + (W._isFlipped ? 1 : 0)), Ee(k);
                  }
                  Je && Je((-x / bt.duration()) * (bt._caScrollDist || 0));
                }
              }),
              (Pt.enable = function (e, t) {
                Pt.enabled ||
                  ((Pt.enabled = !0),
                  S(St, 'resize', L),
                  S(St, 'scroll', j),
                  qt && S(dt, 'refreshInit', qt),
                  !1 !== e && ((Pt.progress = Ke = 0), (g = v = It = _t())),
                  !1 !== t && Pt.refresh());
              }),
              (Pt.getTween = function (e) {
                return e && o ? o.tween : Ie;
              }),
              (Pt.disable = function (e, t) {
                if (
                  Pt.enabled &&
                  (!1 !== e && Pt.revert(),
                  (Pt.enabled = Pt.isActive = !1),
                  t || (Ie && Ie.pause()),
                  (Qe = 0),
                  i && (i.uncache = 1),
                  qt && k(dt, 'refreshInit', qt),
                  Ve && (Ve.pause(), o.tween && o.tween.kill() && (o.tween = 0)),
                  !At)
                ) {
                  for (var n = Ye.length; n--; ) if (Ye[n].scroller === St && Ye[n] !== Pt) return;
                  k(St, 'resize', L), k(St, 'scroll', j);
                }
              }),
              (Pt.kill = function (e, t) {
                Pt.disable(e, t), Ie && Ie.kill(), tt && delete Ue[tt];
                var n = Ye.indexOf(Pt);
                Ye.splice(n, 1),
                  n === re && 0 < rt && re--,
                  (n = 0),
                  Ye.forEach(function (e) {
                    return e.scroller === Pt.scroller && (n = 1);
                  }),
                  n || (Pt.scroll.rec = 0),
                  r && ((r.scrollTrigger = null), e && r.render(-1), t || r.kill()),
                  O &&
                    [O, q, W, Y].forEach(function (e) {
                      return e.parentNode && e.parentNode.removeChild(e);
                    }),
                  at &&
                    (i && (i.uncache = 1),
                    (n = 0),
                    Ye.forEach(function (e) {
                      return e.pin === at && n++;
                    }),
                    n || (i.spacer = 0));
              }),
              Pt.enable(!1, !1),
              r && r.add && !V
                ? B.delayedCall(0.01, function () {
                    return E || D || Pt.refresh();
                  }) &&
                  (V = 0.01) &&
                  (E = D = 0)
                : Pt.refresh();
          } else this.update = this.refresh = this.kill = t;
        }),
        (dt.register = function (e) {
          if (
            !W &&
            ((B = e || i()),
            o() &&
              window.document &&
              ((F = window), ($ = document), (z = $.documentElement), (X = $.body)),
            B &&
              ((Q = B.utils.toArray),
              (G = B.utils.clamp),
              (le = B.core.suppressOverwrites || t),
              B.core.globals('ScrollTrigger', dt),
              X))
          ) {
            (V =
              F.requestAnimationFrame ||
              function (e) {
                return setTimeout(e, 16);
              }),
              S(F, 'wheel', j),
              (Y = [F, $, z, X]),
              S($, 'scroll', j);
            var n,
              r = X.style,
              s = r.borderTopStyle;
            (r.borderTopStyle = 'solid'),
              (n = We(X)),
              (Be.m = Math.round(n.top + Be.sc()) || 0),
              (Re.m = Math.round(n.left + Re.sc()) || 0),
              s ? (r.borderTopStyle = s) : r.removeProperty('border-top-style'),
              (Z = setInterval(D, 200)),
              B.delayedCall(0.5, function () {
                return (he = 0);
              }),
              S($, 'touchcancel', t),
              S(X, 'touchstart', t),
              E(S, $, 'pointerdown,touchstart,mousedown', function () {
                return (te = 1);
              }),
              E(S, $, 'pointerup,touchend,mouseup', function () {
                return (te = 0);
              }),
              (ne = B.utils.checkPrefix('transform')),
              st.push(ne),
              (W = me()),
              (U = B.delayedCall(0.2, tt).pause()),
              (se = [
                $,
                'visibilitychange',
                function () {
                  var e = F.innerWidth,
                    t = F.innerHeight;
                  $.hidden ? ((oe = e), (ie = t)) : (oe === e && ie === t) || L();
                },
                $,
                'DOMContentLoaded',
                tt,
                F,
                'load',
                function () {
                  return xe || tt();
                },
                F,
                'resize',
                L,
              ]),
              f(S);
          }
          return W;
        }),
        (dt.defaults = function (e) {
          for (var t in e) $e[t] = e[t];
        }),
        (dt.kill = function () {
          (be = 0),
            Ye.slice(0).forEach(function (e) {
              return e.kill(1);
            });
        }),
        (dt.config = function (e) {
          'limitCallbacks' in e && (ce = !!e.limitCallbacks);
          var t = e.syncInterval;
          (t && clearInterval(Z)) || ((Z = t) && setInterval(D, t)),
            'autoRefreshEvents' in e &&
              (f(k) || f(S, e.autoRefreshEvents || 'none'),
              (ue = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
        }),
        (dt.scrollerProxy = function (e, t) {
          var r = n(e),
            o = ve.indexOf(r),
            i = s(r);
          ~o && ve.splice(o, i ? 6 : 2), i ? ge.unshift(F, t, X, t, z, t) : ge.unshift(r, t);
        }),
        (dt.matchMedia = function (e) {
          var t, n, r, o, i;
          for (n in e)
            (r = Qe.indexOf(n)),
              (o = e[n]),
              'all' === (fe = n)
                ? o()
                : (t = F.matchMedia(n)) &&
                  (t.matches && (i = o()),
                  ~r
                    ? ((Qe[r + 1] = v(Qe[r + 1], o)), (Qe[r + 2] = v(Qe[r + 2], i)))
                    : ((r = Qe.length),
                      Qe.push(n, o, i),
                      t.addListener ? t.addListener(O) : t.addEventListener('change', O)),
                  (Qe[r + 3] = t.matches)),
              (fe = 0);
          return Qe;
        }),
        (dt.clearMatchMedia = function (e) {
          e || (Qe.length = 0), 0 <= (e = Qe.indexOf(e)) && Qe.splice(e, 4);
        }),
        (dt.isInViewport = function (e, t, r) {
          var o = (we(e) ? n(e) : e).getBoundingClientRect(),
            i = o[r ? Ne : De] * t || 0;
          return r
            ? 0 < o.right - i && o.left + i < F.innerWidth
            : 0 < o.bottom - i && o.top + i < F.innerHeight;
        }),
        (dt.positionInViewport = function (e, t, r) {
          we(e) && (e = n(e));
          var o = e.getBoundingClientRect(),
            i = o[r ? Ne : De],
            s =
              null == t
                ? i / 2
                : t in ze
                ? ze[t] * i
                : ~t.indexOf('%')
                ? (parseFloat(t) * i) / 100
                : parseFloat(t) || 0;
          return r ? (o.left + s) / F.innerWidth : (o.top + s) / F.innerHeight;
        }),
        dt);
      function dt(e, t) {
        W || dt.register(B) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
          this.init(e, t);
      }
      (ft.version = '3.8.0'),
        (ft.saveStyles = function (e) {
          return e
            ? Q(e).forEach(function (e) {
                if (e && e.style) {
                  var t = Je.indexOf(e);
                  0 <= t && Je.splice(t, 5),
                    Je.push(
                      e,
                      e.style.cssText,
                      e.getBBox && e.getAttribute('transform'),
                      B.core.getCache(e),
                      fe,
                    );
                }
              })
            : Je;
        }),
        (ft.revert = function (e, t) {
          return et(!e, t);
        }),
        (ft.create = function (e, t) {
          return new ft(e, t);
        }),
        (ft.refresh = function (e) {
          return e ? L() : (W || ft.register()) && tt(!0);
        }),
        (ft.update = ot),
        (ft.clearScrollMemory = q),
        (ft.maxScroll = function (e, t) {
          return c(e, t ? Re : Be);
        }),
        (ft.getScrollFunc = function (e, t) {
          return l(n(e), t ? Re : Be);
        }),
        (ft.getById = function (e) {
          return Ue[e];
        }),
        (ft.getAll = function () {
          return Ye.slice(0);
        }),
        (ft.isScrolling = function () {
          return !!xe;
        }),
        (ft.snapDirectional = C),
        (ft.addEventListener = function (e, t) {
          var n = Ve[e] || (Ve[e] = []);
          ~n.indexOf(t) || n.push(t);
        }),
        (ft.removeEventListener = function (e, t) {
          var n = Ve[e],
            r = n && n.indexOf(t);
          0 <= r && n.splice(r, 1);
        }),
        (ft.batch = function (e, t) {
          function n(e, t) {
            var n = [],
              r = [],
              o = B.delayedCall(s, function () {
                t(n, r), (n = []), (r = []);
              }).pause();
            return function (e) {
              n.length || o.restart(!0),
                n.push(e.trigger),
                r.push(e),
                a <= n.length && o.progress(1);
            };
          }
          var r,
            o = [],
            i = {},
            s = t.interval || 0.016,
            a = t.batchMax || 1e9;
          for (r in t)
            i[r] = 'on' === r.substr(0, 2) && d(t[r]) && 'onRefreshInit' !== r ? n(0, t[r]) : t[r];
          return (
            d(a) &&
              ((a = a()),
              S(ft, 'refresh', function () {
                return (a = t.batchMax());
              })),
            Q(e).forEach(function (e) {
              var t = {};
              for (r in i) t[r] = i[r];
              (t.trigger = e), o.push(ft.create(t));
            }),
            o
          );
        }),
        (ft.sort = function (e) {
          return Ye.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              },
          );
        }),
        i() && B.registerPlugin(ft),
        (e.ScrollTrigger = ft),
        (e.default = ft),
        'undefined' == typeof window || window !== e
          ? Object.defineProperty(e, '__esModule', { value: !0 })
          : delete e.default;
    })(t);
  },
  function (e, t, n) {
    'use strict';
    {
      gsap.registerPlugin('scrollToPlugin'), gsap.registerPlugin('scrollTrigger');
      const e = n(4),
        t = n(5),
        r = n(6),
        o = n(7),
        i = n(8);
      new e(), new t(), new r(), new o(), new i();
    }
  },
  function (e, t, n) {
    'use strict';
    e.exports = class {
      constructor(e) {
        document.body.classList.add('ready');
        document.getElementById('header'), window;
        var t = document.body,
          n = 0;
        document.addEventListener(
          'scroll',
          function () {
            window.pageYOffset >= 120
              ? t.classList.add('is-sticky')
              : t.classList.remove('is-sticky');
            var e = window.pageYOffset || document.documentElement.scrollTop;
            e > n
              ? t.classList.contains('scrolling-up') && t.classList.remove('scrolling-up')
              : n > e + 20 &&
                (t.classList.contains('scrolling-up') || t.classList.add('scrolling-up')),
              (n = e <= 0 ? 0 : e);
          },
          !1,
        );
        new Swiper('#sliders', {
          slidesPerView: 1.2,
          spaceBetween: 16,
          slideToClickedSlide: !0,
          loop: !0,
          speed: 1500,
          centeredSlides: !0,
          pagination: { el: '.swiper-dots--slider', type: 'bullets', clickable: !0 },
          navigation: { prevEl: '#sliders .gallery-prev', nextEl: '#sliders .gallery-next' },
          breakpoints: {
            920: { slidesPerView: 1.4, spaceBetween: 16 },
            1400: { slidesPerView: 1.9, spaceBetween: 16 },
          },
        }),
          document.querySelectorAll('#swiper-timeline .swiper-slide').length,
          new Swiper('#swiper-timeline', {
            slidesPerView: 1.2,
            spaceBetween: 16,
            slideToClickedSlide: !0,
            speed: 1500,
            centeredSlides: !0,
            loop: !0,
            pagination: { el: '.swiper-dots--timeline', type: 'bullets', clickable: !0 },
            navigation: { prevEl: '#timeline .gallery-prev', nextEl: '#timeline .gallery-next' },
            breakpoints: {
              900: { slidesPerView: 2.4, loop: !0, centeredSlides: !1 },
              1400: { slidesPerView: 3.4, loop: !0, centeredSlides: !1 },
            },
          });
          new Swiper('#swiper-licence', {
            slidesPerView: 1.2,
            spaceBetween: 5,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        const r = document.getElementById('starship-render');
        gsap.set(r, { y: '40px', autoAlpha: 0.2 }),
          gsap.to(r, {
            y: '0',
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: { trigger: '#starship', start: 'top bottom', end: 'top -100', scrub: 1 },
            duration: 0.1,
          });
        const o = document.getElementById('heavy-render');
        gsap.set(o, { y: '40px', autoAlpha: 0.2 }),
          gsap.to(o, {
            y: '0',
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#super-heavy',
              start: 'top bottom',
              end: 'top -100',
              scrub: 1,
            },
            duration: 0.1,
          });
        const i = document.getElementById('horizon-img');
        gsap.set(i, { scale: 1, autoAlpha: 0 }),
          gsap.to(i, {
            scale: 1.1,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#horizon-img',
              start: 'top bottom',
              end: 'top 200',
              scrub: 1,
            },
            duration: 0.1,
          });
      }
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = class {
      constructor(e) {
        (this.defaults = {}), document.querySelector('.video-trigger') && this.events();
      }
      events() {
        document.getElementById('video-trigger');
        const e = document.getElementById('sliders'),
          // t = (document.getElementById('ply-vd'), document.getElementById('modal')),
          // n = document.querySelectorAll('.js-close-modal'),
          r = document.getElementById('player'),
          o = document.querySelectorAll('[data-video-id]');
        for (var i = 0; i < o.length; i++) {
          let n = o[i],
            s = n.getAttribute('data-video-id');
          n.onclick = function () {
            let n =
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
              s +
              '?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            // t.classList.add('modal-is-open'),
              gsap.set(t, { y: '100%' }),
              gsap.to(e, 1.25, { y: -0.25 * innerHeight, ease: Quint.easeInOut }),
              gsap.to(t, 1.25, {
                y: 0,
                ease: Quint.easeInOut,
                onComplete: function () {
                  r.innerHTML = n;
                },
              });
          };
        }
        for (var s = 0; s < n.length; s++) n[s].addEventListener('click', a, !1);
        function a(n) {
          n.preventDefault(),
            gsap.to(t, 1, { y: '-100%', ease: Quint.easeInOut }),
            gsap.set(e, { y: '25%' }),
            gsap.to(e, 1, { y: '0%', ease: Quint.easeInOut, clearProps: 'transform' }),
            // document.body.classList.remove('modal-is-open'),
            (r.innerHTML = '');
        }
      }
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = class {
      constructor(e) {
        (this.defaults = {}), document.getElementById('suit') && this.events();
      }
      events() {
        document.getElementById('suit'),
          document.querySelectorAll('.location-img'),
          document.getElementById('selected-location');
        const e = document.querySelectorAll('*[data-callout]');
        document.querySelectorAll('*[data-callouts]');
        for (var t = 0; t < e.length; t++) {
          let n = e[t];
          n.onclick = function () {
            Array.from(document.querySelectorAll('*[data-callout]')).forEach((e) =>
              e.classList.remove('is-active'),
            );
            let e = n.getAttribute('data-callout');
            Array.from(document.querySelectorAll('*[data-callout="' + e + '"]')).forEach((e) =>
              e.classList.add('is-active'),
            );
          };
        }
        function n() {
          for (var e = document.getElementsByClassName('suit-callout'), t = 0; t < e.length; t++)
            e[t].style.height = null;
          var n = e.length,
            r = [];
          for (t = 0; t < n; t++) r.push(e[t].offsetHeight);
          var o = Math.max(...r);
          for (t = 0; t < e.length; t++) e[t].style.height = o + 'px';
          document.getElementById('suit-callouts').style.height = o + 'px';
        }
        n(), window.addEventListener('resize', n);
      }
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = class {
      constructor(e) {
        (this.defaults = {}), document.getElementById('destinations') && this.events();
      }
      events() {
        document.addEventListener(
          'DOMContentLoaded',
          function () {
            const e = document.getElementById('uses-iss');
            gsap.set(e, { rotate: '25deg' }),
              gsap.to(e, {
                rotate: '50deg',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#destinations',
                  start: 'top bottom',
                  end: 'top top',
                  scrub: 1,
                },
                duration: 0.1,
              }),
              gsap.set('.iss__inner', { xPercent: 15, rotate: '-25deg' }),
              gsap.to('.iss__inner', {
                xPercent: 0,
                rotate: '-50deg',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#destinations',
                  start: 'top bottom',
                  end: 'top top',
                  scrub: 1,
                },
                duration: 0.1,
              });
            const t = document.getElementById('uses-dragon');
            gsap.set(t, { rotate: '50deg' }),
              gsap.to(t, {
                rotate: '70deg',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#destinations',
                  start: 'top bottom',
                  end: 'top top',
                  scrub: 1,
                },
                duration: 0.1,
              }),
              gsap.set('.dragon__inner', { xPercent: 15, rotate: '-71deg' }),
              gsap.to('.dragon__inner', {
                xPercent: 0,
                rotate: '-71deg',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#destinations',
                  start: 'top bottom',
                  end: 'top top',
                  scrub: 1,
                },
                duration: 0.1,
              });
            const n = document.getElementById('uses-moon');
            gsap.set(n, { rotate: '-20deg' }),
              gsap.to(n, {
                rotate: '0',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#destinations',
                  start: 'top bottom',
                  end: 'top top',
                  scrub: 1,
                },
                duration: 0.1,
              }),
              gsap.set('.moon__inner', { xPercent: 0, rotate: '20deg' }),
              gsap.to('.moon__inner', {
                xPercent: 0,
                rotate: '0',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#destinations',
                  start: 'top bottom',
                  end: 'top top',
                  scrub: 1,
                },
                duration: 0.1,
              });
            const r = document.getElementById('uses-mars');
            gsap.set(r, { rotate: '5deg' }),
              gsap.to(r, {
                rotate: '10deg',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#destinations',
                  start: 'top bottom',
                  end: 'top top',
                  scrub: 1,
                },
                duration: 0.1,
              }),
              gsap.set('.mars__inner', { xPercent: 0, rotate: '-5%' }),
              gsap.to('.mars__inner', {
                xPercent: 0,
                rotate: '-10deg',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#destinations',
                  start: 'top bottom',
                  end: 'top top',
                  scrub: 1,
                },
                duration: 0.1,
              });
          },
          !1,
        );
      }
    };
  },
  function (e, t, n) {
    'use strict';
    const r = n(9);
    e.exports = class {
      constructor(e) {
        (this.defaults = {}),
          (this.settings = r.extend(!0, {}, this.defaults, e)),
          r('.tabs').length && this.events();
      }
      events() {
        const e = document.querySelectorAll('*[data-tab]'),
          t = document.querySelectorAll('*[data-tab-bd]');
        for (var n = 0; n < e.length; n++) {
          e[n].onclick = function () {
            for (
              var e = document.querySelector('*[data-tab].is-active'),
                n = this.getAttribute('data-tab'),
                r = 0;
              r < t.length;
              r++
            )
              t[r].getAttribute('data-tab-bd') == n
                ? t[r].classList.add('is-active')
                : t[r].classList.remove('is-active');
            e.classList.remove('is-active'), this.classList.add('is-active');
          };
        }
        function r() {
          for (var e = document.getElementsByClassName('tab'), t = 0; t < e.length; t++)
            e[t].style.height = null;
          var n = e.length,
            r = [];
          for (t = 0; t < n; t++) r.push(e[t].offsetHeight);
          var o = Math.max(...r);
          for (t = 0; t < e.length; t++) e[t].style.height = o + 'px';
          document.getElementById('tabs-cotent').style.height = o + 'px';
        }
        r(), window.addEventListener('resize', r);
      }
    };
  },
  function (e, t, n) {
    var r;
    !(function (t, n) {
      'use strict';
      'object' == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document) throw new Error('jQuery requires a window with a document');
                return n(e);
              })
        : n(t);
    })('undefined' != typeof window ? window : this, function (n, o) {
      'use strict';
      var i = [],
        s = Object.getPrototypeOf,
        a = i.slice,
        l = i.flat
          ? function (e) {
              return i.flat.call(e);
            }
          : function (e) {
              return i.concat.apply([], e);
            },
        u = i.push,
        c = i.indexOf,
        f = {},
        d = f.toString,
        p = f.hasOwnProperty,
        h = p.toString,
        g = h.call(Object),
        v = {},
        m = function (e) {
          return (
            'function' == typeof e && 'number' != typeof e.nodeType && 'function' != typeof e.item
          );
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        x = n.document,
        b = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          o,
          i = (n = n || x).createElement('script');
        if (((i.text = e), t))
          for (r in b) (o = t[r] || (t.getAttribute && t.getAttribute(r))) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i);
      }
      function T(e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? f[d.call(e)] || 'object'
          : typeof e;
      }
      var C = function (e, t) {
        return new C.fn.init(e, t);
      };
      function E(e) {
        var t = !!e && 'length' in e && e.length,
          n = T(e);
        return (
          !m(e) &&
          !y(e) &&
          ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e))
        );
      }
      (C.fn = C.prototype =
        {
          jquery: '3.6.0',
          constructor: C,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return C.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              C.map(this, function (t, n) {
                return e.call(t, n, t);
              }),
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return (t + 1) % 2;
              }),
            );
          },
          odd: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return t % 2;
              }),
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: u,
          sort: i.sort,
          splice: i.splice,
        }),
        (C.extend = C.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              o,
              i,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              u = !1;
            for (
              'boolean' == typeof s && ((u = s), (s = arguments[a] || {}), a++),
                'object' == typeof s || m(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (r = e[t]),
                    '__proto__' !== t &&
                      s !== r &&
                      (u && r && (C.isPlainObject(r) || (o = Array.isArray(r)))
                        ? ((n = s[t]),
                          (i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}),
                          (o = !1),
                          (s[t] = C.extend(u, i, r)))
                        : void 0 !== r && (s[t] = r));
            return s;
          }),
        C.extend({
          expando: 'jQuery' + ('3.6.0' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || '[object Object]' !== d.call(e)) &&
              (!(t = s(e)) ||
                ('function' == typeof (n = p.call(t, 'constructor') && t.constructor) &&
                  h.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (E(Object(e)) ? C.merge(n, 'string' == typeof e ? [e] : e) : u.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var r = [], o = 0, i = e.length, s = !n; o < i; o++)
              !t(e[o], o) !== s && r.push(e[o]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              o,
              i = 0,
              s = [];
            if (E(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o);
            else for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
            return l(s);
          },
          guid: 1,
          support: v,
        }),
        'function' == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]),
        C.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
          function (e, t) {
            f['[object ' + t + ']'] = t.toLowerCase();
          },
        );
      var S = (function (e) {
        var t,
          n,
          r,
          o,
          i,
          s,
          a,
          l,
          u,
          c,
          f,
          d,
          p,
          h,
          g,
          v,
          m,
          y,
          x,
          b = 'sizzle' + 1 * new Date(),
          w = e.document,
          T = 0,
          C = 0,
          E = le(),
          S = le(),
          k = le(),
          A = le(),
          N = function (e, t) {
            return e === t && (f = !0), 0;
          },
          D = {}.hasOwnProperty,
          j = [],
          L = j.pop,
          O = j.push,
          P = j.push,
          q = j.slice,
          M = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          H =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          I = '[\\x20\\t\\r\\n\\f]',
          _ = '(?:\\\\[\\da-fA-F]{1,6}' + I + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
          R =
            '\\[' +
            I +
            '*(' +
            _ +
            ')(?:' +
            I +
            '*([*^$|!~]?=)' +
            I +
            '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
            _ +
            '))|)' +
            I +
            '*\\]',
          B =
            ':(' +
            _ +
            ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
            R +
            ')*)|.*)\\)|)',
          W = new RegExp(I + '+', 'g'),
          F = new RegExp('^' + I + '+|((?:^|[^\\\\])(?:\\\\.)*)' + I + '+$', 'g'),
          $ = new RegExp('^' + I + '*,' + I + '*'),
          z = new RegExp('^' + I + '*([>+~]|' + I + ')' + I + '*'),
          X = new RegExp(I + '|>'),
          Y = new RegExp(B),
          U = new RegExp('^' + _ + '$'),
          V = {
            ID: new RegExp('^#(' + _ + ')'),
            CLASS: new RegExp('^\\.(' + _ + ')'),
            TAG: new RegExp('^(' + _ + '|[*])'),
            ATTR: new RegExp('^' + R),
            PSEUDO: new RegExp('^' + B),
            CHILD: new RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                I +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                I +
                '*(?:([+-]|)' +
                I +
                '*(\\d+)|))' +
                I +
                '*\\)|)',
              'i',
            ),
            bool: new RegExp('^(?:' + H + ')$', 'i'),
            needsContext: new RegExp(
              '^' +
                I +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                I +
                '*((?:-\\d)?\\d*)' +
                I +
                '*\\)|)(?=[^-]|$)',
              'i',
            ),
          },
          K = /HTML$/i,
          Q = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp('\\\\[\\da-fA-F]{1,6}' + I + '?|\\\\([^\\r\\n\\f])', 'g'),
          ne = function (e, t) {
            var n = '0x' + e.slice(1) - 65536;
            return (
              t ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          oe = function (e, t) {
            return t
              ? '\0' === e
                ? '�'
                : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
              : '\\' + e;
          },
          ie = function () {
            d();
          },
          se = be(
            function (e) {
              return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
            },
            { dir: 'parentNode', next: 'legend' },
          );
        try {
          P.apply((j = q.call(w.childNodes)), w.childNodes), j[w.childNodes.length].nodeType;
        } catch (e) {
          P = {
            apply: j.length
              ? function (e, t) {
                  O.apply(e, q.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                },
          };
        }
        function ae(e, t, r, o) {
          var i,
            a,
            u,
            c,
            f,
            h,
            m,
            y = t && t.ownerDocument,
            w = t ? t.nodeType : 9;
          if (((r = r || []), 'string' != typeof e || !e || (1 !== w && 9 !== w && 11 !== w)))
            return r;
          if (!o && (d(t), (t = t || p), g)) {
            if (11 !== w && (f = Z.exec(e)))
              if ((i = f[1])) {
                if (9 === w) {
                  if (!(u = t.getElementById(i))) return r;
                  if (u.id === i) return r.push(u), r;
                } else if (y && (u = y.getElementById(i)) && x(t, u) && u.id === i)
                  return r.push(u), r;
              } else {
                if (f[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                  return P.apply(r, t.getElementsByClassName(i)), r;
              }
            if (
              n.qsa &&
              !A[e + ' '] &&
              (!v || !v.test(e)) &&
              (1 !== w || 'object' !== t.nodeName.toLowerCase())
            ) {
              if (((m = e), (y = t), 1 === w && (X.test(e) || z.test(e)))) {
                for (
                  ((y = (ee.test(e) && me(t.parentNode)) || t) === t && n.scope) ||
                    ((c = t.getAttribute('id'))
                      ? (c = c.replace(re, oe))
                      : t.setAttribute('id', (c = b))),
                    a = (h = s(e)).length;
                  a--;

                )
                  h[a] = (c ? '#' + c : ':scope') + ' ' + xe(h[a]);
                m = h.join(',');
              }
              try {
                return P.apply(r, y.querySelectorAll(m)), r;
              } catch (t) {
                A(e, !0);
              } finally {
                c === b && t.removeAttribute('id');
              }
            }
          }
          return l(e.replace(F, '$1'), t, r, o);
        }
        function le() {
          var e = [];
          return function t(n, o) {
            return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], (t[n + ' '] = o);
          };
        }
        function ue(e) {
          return (e[b] = !0), e;
        }
        function ce(e) {
          var t = p.createElement('fieldset');
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function fe(e, t) {
          for (var n = e.split('|'), o = n.length; o--; ) r.attrHandle[n[o]] = t;
        }
        function de(e, t) {
          var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function pe(e) {
          return function (t) {
            return 'input' === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function he(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ('input' === n || 'button' === n) && t.type === e;
          };
        }
        function ge(e) {
          return function (t) {
            return 'form' in t
              ? t.parentNode && !1 === t.disabled
                ? 'label' in t
                  ? 'label' in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                : t.disabled === e
              : 'label' in t && t.disabled === e;
          };
        }
        function ve(e) {
          return ue(function (t) {
            return (
              (t = +t),
              ue(function (n, r) {
                for (var o, i = e([], n.length, t), s = i.length; s--; )
                  n[(o = i[s])] && (n[o] = !(r[o] = n[o]));
              })
            );
          });
        }
        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = ae.support = {}),
        (i = ae.isXML =
          function (e) {
            var t = e && e.namespaceURI,
              n = e && (e.ownerDocument || e).documentElement;
            return !K.test(t || (n && n.nodeName) || 'HTML');
          }),
        (d = ae.setDocument =
          function (e) {
            var t,
              o,
              s = e ? e.ownerDocument || e : w;
            return s != p && 9 === s.nodeType && s.documentElement
              ? ((h = (p = s).documentElement),
                (g = !i(p)),
                w != p &&
                  (o = p.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener('unload', ie, !1)
                    : o.attachEvent && o.attachEvent('onunload', ie)),
                (n.scope = ce(function (e) {
                  return (
                    h.appendChild(e).appendChild(p.createElement('div')),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(':scope fieldset div').length
                  );
                })),
                (n.attributes = ce(function (e) {
                  return (e.className = 'i'), !e.getAttribute('className');
                })),
                (n.getElementsByTagName = ce(function (e) {
                  return e.appendChild(p.createComment('')), !e.getElementsByTagName('*').length;
                })),
                (n.getElementsByClassName = J.test(p.getElementsByClassName)),
                (n.getById = ce(function (e) {
                  return (
                    (h.appendChild(e).id = b),
                    !p.getElementsByName || !p.getElementsByName(b).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute('id') === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          r,
                          o,
                          i = t.getElementById(e);
                        if (i) {
                          if ((n = i.getAttributeNode('id')) && n.value === e) return [i];
                          for (o = t.getElementsByName(e), r = 0; (i = o[r++]); )
                            if ((n = i.getAttributeNode('id')) && n.value === e) return [i];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                      if ('*' === e) {
                        for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return i;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (m = []),
                (v = []),
                (n.qsa = J.test(p.querySelectorAll)) &&
                  (ce(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      b +
                      "'></a><select id='" +
                      b +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        v.push('[*^$]=' + I + '*(?:\'\'|"")'),
                      e.querySelectorAll('[selected]').length ||
                        v.push('\\[' + I + '*(?:value|' + H + ')'),
                      e.querySelectorAll('[id~=' + b + '-]').length || v.push('~='),
                      (t = p.createElement('input')).setAttribute('name', ''),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        v.push('\\[' + I + '*name' + I + '*=' + I + '*(?:\'\'|"")'),
                      e.querySelectorAll(':checked').length || v.push(':checked'),
                      e.querySelectorAll('a#' + b + '+*').length || v.push('.#.+[+~]'),
                      e.querySelectorAll('\\\f'),
                      v.push('[\\r\\n\\f]');
                  }),
                  ce(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement('input');
                    t.setAttribute('type', 'hidden'),
                      e.appendChild(t).setAttribute('name', 'D'),
                      e.querySelectorAll('[name=d]').length && v.push('name' + I + '*[*^$|!~]?='),
                      2 !== e.querySelectorAll(':enabled').length &&
                        v.push(':enabled', ':disabled'),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(':disabled').length &&
                        v.push(':enabled', ':disabled'),
                      e.querySelectorAll('*,:x'),
                      v.push(',.*:');
                  })),
                (n.matchesSelector = J.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector),
                )) &&
                  ce(function (e) {
                    (n.disconnectedMatch = y.call(e, '*')), y.call(e, "[s!='']:x"), m.push('!=', B);
                  }),
                (v = v.length && new RegExp(v.join('|'))),
                (m = m.length && new RegExp(m.join('|'))),
                (t = J.test(h.compareDocumentPosition)),
                (x =
                  t || J.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (N = t
                  ? function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e == p || (e.ownerDocument == w && x(w, e))
                            ? -1
                            : t == p || (t.ownerDocument == w && x(w, t))
                            ? 1
                            : c
                            ? M(c, e) - M(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        s = [e],
                        a = [t];
                      if (!o || !i)
                        return e == p
                          ? -1
                          : t == p
                          ? 1
                          : o
                          ? -1
                          : i
                          ? 1
                          : c
                          ? M(c, e) - M(c, t)
                          : 0;
                      if (o === i) return de(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; s[r] === a[r]; ) r++;
                      return r ? de(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0;
                    }),
                p)
              : p;
          }),
        (ae.matches = function (e, t) {
          return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function (e, t) {
          if (
            (d(e),
            n.matchesSelector && g && !A[t + ' '] && (!m || !m.test(t)) && (!v || !v.test(t)))
          )
            try {
              var r = y.call(e, t);
              if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
            } catch (e) {
              A(t, !0);
            }
          return ae(t, p, null, [e]).length > 0;
        }),
        (ae.contains = function (e, t) {
          return (e.ownerDocument || e) != p && d(e), x(e, t);
        }),
        (ae.attr = function (e, t) {
          (e.ownerDocument || e) != p && d(e);
          var o = r.attrHandle[t.toLowerCase()],
            i = o && D.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
          return void 0 !== i
            ? i
            : n.attributes || !g
            ? e.getAttribute(t)
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
        (ae.escape = function (e) {
          return (e + '').replace(re, oe);
        }),
        (ae.error = function (e) {
          throw new Error('Syntax error, unrecognized expression: ' + e);
        }),
        (ae.uniqueSort = function (e) {
          var t,
            r = [],
            o = 0,
            i = 0;
          if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(N), f)) {
            for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
            for (; o--; ) e.splice(r[o], 1);
          }
          return (c = null), e;
        }),
        (o = ae.getText =
          function (e) {
            var t,
              n = '',
              r = 0,
              i = e.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ('string' == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += o(t);
            return n;
          }),
        ((r = ae.selectors =
          {
            cacheLength: 50,
            createPseudo: ue,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                  '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  'nth' === e[1].slice(0, 3)
                    ? (e[3] || ae.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ('even' === e[3] || 'odd' === e[3]))),
                      (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                    : e[3] && ae.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return V.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || '')
                      : n &&
                        Y.test(n) &&
                        (t = s(n, !0)) &&
                        (t = n.indexOf(')', n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return '*' === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = E[e + ' '];
                return (
                  t ||
                  ((t = new RegExp('(^|' + I + ')' + e + '(' + I + '|$)')) &&
                    E(e, function (e) {
                      return t.test(
                        ('string' == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                          '',
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var o = ae.attr(r, e);
                  return null == o
                    ? '!=' === t
                    : !t ||
                        ((o += ''),
                        '=' === t
                          ? o === n
                          : '!=' === t
                          ? o !== n
                          : '^=' === t
                          ? n && 0 === o.indexOf(n)
                          : '*=' === t
                          ? n && o.indexOf(n) > -1
                          : '$=' === t
                          ? n && o.slice(-n.length) === n
                          : '~=' === t
                          ? (' ' + o.replace(W, ' ') + ' ').indexOf(n) > -1
                          : '|=' === t && (o === n || o.slice(0, n.length + 1) === n + '-'));
                };
              },
              CHILD: function (e, t, n, r, o) {
                var i = 'nth' !== e.slice(0, 3),
                  s = 'last' !== e.slice(-4),
                  a = 'of-type' === t;
                return 1 === r && 0 === o
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var u,
                        c,
                        f,
                        d,
                        p,
                        h,
                        g = i !== s ? 'nextSibling' : 'previousSibling',
                        v = t.parentNode,
                        m = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        x = !1;
                      if (v) {
                        if (i) {
                          for (; g; ) {
                            for (d = t; (d = d[g]); )
                              if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                            h = g = 'only' === e && !h && 'nextSibling';
                          }
                          return !0;
                        }
                        if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                          for (
                            x =
                              (p =
                                (u =
                                  (c =
                                    (f = (d = v)[b] || (d[b] = {}))[d.uniqueID] ||
                                    (f[d.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2],
                              d = p && v.childNodes[p];
                            (d = (++p && d && d[g]) || (x = p = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++x && d === t) {
                              c[e] = [T, p, x];
                              break;
                            }
                        } else if (
                          (y &&
                            (x = p =
                              (u =
                                (c =
                                  (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === T && u[1]),
                          !1 === x)
                        )
                          for (
                            ;
                            (d = (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                            ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) ||
                              !++x ||
                              (y &&
                                ((c =
                                  (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[
                                  e
                                ] = [T, x]),
                              d !== t));

                          );
                        return (x -= o) === r || (x % r == 0 && x / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  o =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    ae.error('unsupported pseudo: ' + e);
                return o[b]
                  ? o(t)
                  : o.length > 1
                  ? ((n = [e, e, '', t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ue(function (e, n) {
                          for (var r, i = o(e, t), s = i.length; s--; )
                            e[(r = M(e, i[s]))] = !(n[r] = i[s]);
                        })
                      : function (e) {
                          return o(e, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: ue(function (e) {
                var t = [],
                  n = [],
                  r = a(e.replace(F, '$1'));
                return r[b]
                  ? ue(function (e, t, n, o) {
                      for (var i, s = r(e, null, o, []), a = e.length; a--; )
                        (i = s[a]) && (e[a] = !(t[a] = i));
                    })
                  : function (e, o, i) {
                      return (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop();
                    };
              }),
              has: ue(function (e) {
                return function (t) {
                  return ae(e, t).length > 0;
                };
              }),
              contains: ue(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || o(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ue(function (e) {
                return (
                  U.test(e || '') || ae.error('unsupported lang: ' + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === h;
              },
              focus: function (e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
              },
              selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !r.pseudos.empty(e);
              },
              header: function (e) {
                return G.test(e.nodeName);
              },
              input: function (e) {
                return Q.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t && 'button' === e.type) || 'button' === t;
              },
              text: function (e) {
                var t;
                return (
                  'input' === e.nodeName.toLowerCase() &&
                  'text' === e.type &&
                  (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                );
              },
              first: ve(function () {
                return [0];
              }),
              last: ve(function (e, t) {
                return [t - 1];
              }),
              eq: ve(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ve(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ve(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          r.pseudos[t] = pe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
        function ye() {}
        function xe(e) {
          for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
          return r;
        }
        function be(e, t, n) {
          var r = t.dir,
            o = t.next,
            i = o || r,
            s = n && 'parentNode' === i,
            a = C++;
          return t.first
            ? function (t, n, o) {
                for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, o);
                return !1;
              }
            : function (t, n, l) {
                var u,
                  c,
                  f,
                  d = [T, a];
                if (l) {
                  for (; (t = t[r]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
                        o && o === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((u = c[i]) && u[0] === T && u[1] === a) return (d[2] = u[2]);
                        if (((c[i] = d), (d[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function we(e) {
          return e.length > 1
            ? function (t, n, r) {
                for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function Te(e, t, n, r, o) {
          for (var i, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
            (i = e[a]) && ((n && !n(i, r, o)) || (s.push(i), u && t.push(a)));
          return s;
        }
        function Ce(e, t, n, r, o, i) {
          return (
            r && !r[b] && (r = Ce(r)),
            o && !o[b] && (o = Ce(o, i)),
            ue(function (i, s, a, l) {
              var u,
                c,
                f,
                d = [],
                p = [],
                h = s.length,
                g =
                  i ||
                  (function (e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) ae(e, t[r], n);
                    return n;
                  })(t || '*', a.nodeType ? [a] : a, []),
                v = !e || (!i && t) ? g : Te(g, d, e, a, l),
                m = n ? (o || (i ? e : h || r) ? [] : s) : v;
              if ((n && n(v, m, a, l), r))
                for (u = Te(m, p), r(u, [], a, l), c = u.length; c--; )
                  (f = u[c]) && (m[p[c]] = !(v[p[c]] = f));
              if (i) {
                if (o || e) {
                  if (o) {
                    for (u = [], c = m.length; c--; ) (f = m[c]) && u.push((v[c] = f));
                    o(null, (m = []), u, l);
                  }
                  for (c = m.length; c--; )
                    (f = m[c]) && (u = o ? M(i, f) : d[c]) > -1 && (i[u] = !(s[u] = f));
                }
              } else (m = Te(m === s ? m.splice(h, m.length) : m)), o ? o(null, s, m, l) : P.apply(s, m);
            })
          );
        }
        function Ee(e) {
          for (
            var t,
              n,
              o,
              i = e.length,
              s = r.relative[e[0].type],
              a = s || r.relative[' '],
              l = s ? 1 : 0,
              c = be(
                function (e) {
                  return e === t;
                },
                a,
                !0,
              ),
              f = be(
                function (e) {
                  return M(t, e) > -1;
                },
                a,
                !0,
              ),
              d = [
                function (e, n, r) {
                  var o = (!s && (r || n !== u)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                  return (t = null), o;
                },
              ];
            l < i;
            l++
          )
            if ((n = r.relative[e[l].type])) d = [be(we(d), n)];
            else {
              if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
                for (o = ++l; o < i && !r.relative[e[o].type]; o++);
                return Ce(
                  l > 1 && we(d),
                  l > 1 &&
                    xe(
                      e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' }),
                    ).replace(F, '$1'),
                  n,
                  l < o && Ee(e.slice(l, o)),
                  o < i && Ee((e = e.slice(o))),
                  o < i && xe(e),
                );
              }
              d.push(n);
            }
          return we(d);
        }
        return (
          (ye.prototype = r.filters = r.pseudos),
          (r.setFilters = new ye()),
          (s = ae.tokenize =
            function (e, t) {
              var n,
                o,
                i,
                s,
                a,
                l,
                u,
                c = S[e + ' '];
              if (c) return t ? 0 : c.slice(0);
              for (a = e, l = [], u = r.preFilter; a; ) {
                for (s in ((n && !(o = $.exec(a))) ||
                  (o && (a = a.slice(o[0].length) || a), l.push((i = []))),
                (n = !1),
                (o = z.exec(a)) &&
                  ((n = o.shift()),
                  i.push({ value: n, type: o[0].replace(F, ' ') }),
                  (a = a.slice(n.length))),
                r.filter))
                  !(o = V[s].exec(a)) ||
                    (u[s] && !(o = u[s](o))) ||
                    ((n = o.shift()),
                    i.push({ value: n, type: s, matches: o }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? ae.error(e) : S(e, l).slice(0);
            }),
          (a = ae.compile =
            function (e, t) {
              var n,
                o = [],
                i = [],
                a = k[e + ' '];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--; )
                  (a = Ee(t[n]))[b] ? o.push(a) : i.push(a);
                (a = k(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      i = function (i, s, a, l, c) {
                        var f,
                          h,
                          v,
                          m = 0,
                          y = '0',
                          x = i && [],
                          b = [],
                          w = u,
                          C = i || (o && r.find.TAG('*', c)),
                          E = (T += null == w ? 1 : Math.random() || 0.1),
                          S = C.length;
                        for (c && (u = s == p || s || c); y !== S && null != (f = C[y]); y++) {
                          if (o && f) {
                            for (
                              h = 0, s || f.ownerDocument == p || (d(f), (a = !g));
                              (v = e[h++]);

                            )
                              if (v(f, s || p, a)) {
                                l.push(f);
                                break;
                              }
                            c && (T = E);
                          }
                          n && ((f = !v && f) && m--, i && x.push(f));
                        }
                        if (((m += y), n && y !== m)) {
                          for (h = 0; (v = t[h++]); ) v(x, b, s, a);
                          if (i) {
                            if (m > 0) for (; y--; ) x[y] || b[y] || (b[y] = L.call(l));
                            b = Te(b);
                          }
                          P.apply(l, b),
                            c && !i && b.length > 0 && m + t.length > 1 && ae.uniqueSort(l);
                        }
                        return c && ((T = E), (u = w)), x;
                      };
                    return n ? ue(i) : i;
                  })(i, o),
                )).selector = e;
              }
              return a;
            }),
          (l = ae.select =
            function (e, t, n, o) {
              var i,
                l,
                u,
                c,
                f,
                d = 'function' == typeof e && e,
                p = !o && s((e = d.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (l = p[0] = p[0].slice(0)).length > 2 &&
                  'ID' === (u = l[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[l[1].type]
                ) {
                  if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                  d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                }
                for (
                  i = V.needsContext.test(e) ? 0 : l.length;
                  i-- && ((u = l[i]), !r.relative[(c = u.type)]);

                )
                  if (
                    (f = r.find[c]) &&
                    (o = f(
                      u.matches[0].replace(te, ne),
                      (ee.test(l[0].type) && me(t.parentNode)) || t,
                    ))
                  ) {
                    if ((l.splice(i, 1), !(e = o.length && xe(l)))) return P.apply(n, o), n;
                    break;
                  }
              }
              return (d || a(e, p))(o, t, !g, n, !t || (ee.test(e) && me(t.parentNode)) || t), n;
            }),
          (n.sortStable = b.split('').sort(N).join('') === b),
          (n.detectDuplicates = !!f),
          d(),
          (n.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement('fieldset'));
          })),
          ce(function (e) {
            return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
          }) ||
            fe('type|href|height|width', function (e, t, n) {
              if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            ce(function (e) {
              return (
                (e.innerHTML = '<input/>'),
                e.firstChild.setAttribute('value', ''),
                '' === e.firstChild.getAttribute('value')
              );
            })) ||
            fe('value', function (e, t, n) {
              if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
          ce(function (e) {
            return null == e.getAttribute('disabled');
          }) ||
            fe(H, function (e, t, n) {
              var r;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
            }),
          ae
        );
      })(n);
      (C.find = S),
        (C.expr = S.selectors),
        (C.expr[':'] = C.expr.pseudos),
        (C.uniqueSort = C.unique = S.uniqueSort),
        (C.text = S.getText),
        (C.isXMLDoc = S.isXML),
        (C.contains = S.contains),
        (C.escapeSelector = S.escape);
      var k = function (e, t, n) {
          for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && C(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        A = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        N = C.expr.match.needsContext;
      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return m(t)
          ? C.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? C.grep(e, function (e) {
              return (e === t) !== n;
            })
          : 'string' != typeof t
          ? C.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : C.filter(t, e, n);
      }
      (C.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ':not(' + e + ')'),
          1 === t.length && 1 === r.nodeType
            ? C.find.matchesSelector(r, e)
              ? [r]
              : []
            : C.find.matches(
                e,
                C.grep(t, function (e) {
                  return 1 === e.nodeType;
                }),
              )
        );
      }),
        C.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              o = this;
            if ('string' != typeof e)
              return this.pushStack(
                C(e).filter(function () {
                  for (t = 0; t < r; t++) if (C.contains(o[t], this)) return !0;
                }),
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
            return r > 1 ? C.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is: function (e) {
            return !!L(this, 'string' == typeof e && N.test(e) ? C(e) : e || [], !1).length;
          },
        });
      var O,
        P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((C.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || O), 'string' == typeof e)) {
          if (
            !(r =
              '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : P.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof C ? t[0] : t),
              C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
              j.test(r[1]) && C.isPlainObject(t))
            )
              for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (o = x.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(C)
          : C.makeArray(e, this);
      }).prototype = C.fn),
        (O = C(x));
      var q = /^(?:parents|prev(?:Until|All))/,
        M = { children: !0, contents: !0, next: !0, prev: !0 };
      function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      C.fn.extend({
        has: function (e) {
          var t = C(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            o = this.length,
            i = [],
            s = 'string' != typeof e && C(e);
          if (!N.test(e))
            for (; r < o; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))
                ) {
                  i.push(n);
                  break;
                }
          return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i);
        },
        index: function (e) {
          return e
            ? 'string' == typeof e
              ? c.call(C(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
      }),
        C.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return k(e, 'parentNode');
            },
            parentsUntil: function (e, t, n) {
              return k(e, 'parentNode', n);
            },
            next: function (e) {
              return H(e, 'nextSibling');
            },
            prev: function (e) {
              return H(e, 'previousSibling');
            },
            nextAll: function (e) {
              return k(e, 'nextSibling');
            },
            prevAll: function (e) {
              return k(e, 'previousSibling');
            },
            nextUntil: function (e, t, n) {
              return k(e, 'nextSibling', n);
            },
            prevUntil: function (e, t, n) {
              return k(e, 'previousSibling', n);
            },
            siblings: function (e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return A(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument)
                ? e.contentDocument
                : (D(e, 'template') && (e = e.content || e), C.merge([], e.childNodes));
            },
          },
          function (e, t) {
            C.fn[e] = function (n, r) {
              var o = C.map(this, t, n);
              return (
                'Until' !== e.slice(-5) && (r = n),
                r && 'string' == typeof r && (o = C.filter(r, o)),
                this.length > 1 && (M[e] || C.uniqueSort(o), q.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          },
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function _(e) {
        return e;
      }
      function R(e) {
        throw e;
      }
      function B(e, t, n, r) {
        var o;
        try {
          e && m((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && m((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (C.Callbacks = function (e) {
        e =
          'string' == typeof e
            ? (function (e) {
                var t = {};
                return (
                  C.each(e.match(I) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : C.extend({}, e);
        var t,
          n,
          r,
          o,
          i = [],
          s = [],
          a = -1,
          l = function () {
            for (o = o || e.once, r = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < i.length; )
                !1 === i[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = i.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (i = n ? [] : '');
          },
          u = {
            add: function () {
              return (
                i &&
                  (n && !t && ((a = i.length - 1), s.push(n)),
                  (function t(n) {
                    C.each(n, function (n, r) {
                      m(r)
                        ? (e.unique && u.has(r)) || i.push(r)
                        : r && r.length && 'string' !== T(r) && t(r);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                C.each(arguments, function (e, t) {
                  for (var n; (n = C.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? C.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (o = s = []), (i = n = ''), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (o = s = []), n || t || (i = n = ''), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return u;
      }),
        C.extend({
          Deferred: function (e) {
            var t = [
                ['notify', 'progress', C.Callbacks('memory'), C.Callbacks('memory'), 2],
                [
                  'resolve',
                  'done',
                  C.Callbacks('once memory'),
                  C.Callbacks('once memory'),
                  0,
                  'resolved',
                ],
                [
                  'reject',
                  'fail',
                  C.Callbacks('once memory'),
                  C.Callbacks('once memory'),
                  1,
                  'rejected',
                ],
              ],
              r = 'pending',
              o = {
                state: function () {
                  return r;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return C.Deferred(function (n) {
                    C.each(t, function (t, r) {
                      var o = m(e[r[4]]) && e[r[4]];
                      i[r[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && m(e.promise)
                          ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                          : n[r[0] + 'With'](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, o) {
                  var i = 0;
                  function s(e, t, r, o) {
                    return function () {
                      var a = this,
                        l = arguments,
                        u = function () {
                          var n, u;
                          if (!(e < i)) {
                            if ((n = r.apply(a, l)) === t.promise())
                              throw new TypeError('Thenable self-resolution');
                            (u = n && ('object' == typeof n || 'function' == typeof n) && n.then),
                              m(u)
                                ? o
                                  ? u.call(n, s(i, t, _, o), s(i, t, R, o))
                                  : (i++,
                                    u.call(
                                      n,
                                      s(i, t, _, o),
                                      s(i, t, R, o),
                                      s(i, t, _, t.notifyWith),
                                    ))
                                : (r !== _ && ((a = void 0), (l = [n])),
                                  (o || t.resolveWith)(a, l));
                          }
                        },
                        c = o
                          ? u
                          : function () {
                              try {
                                u();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= i &&
                                    (r !== R && ((a = void 0), (l = [n])), t.rejectWith(a, l));
                              }
                            };
                      e
                        ? c()
                        : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return C.Deferred(function (n) {
                    t[0][3].add(s(0, n, m(o) ? o : _, n.notifyWith)),
                      t[1][3].add(s(0, n, m(e) ? e : _)),
                      t[2][3].add(s(0, n, m(r) ? r : R));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? C.extend(e, o) : o;
                },
              },
              i = {};
            return (
              C.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (o[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        r = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock,
                    ),
                  s.add(n[3].fire),
                  (i[n[0]] = function () {
                    return i[n[0] + 'With'](this === i ? void 0 : this, arguments), this;
                  }),
                  (i[n[0] + 'With'] = s.fireWith);
              }),
              o.promise(i),
              e && e.call(i, i),
              i
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              o = a.call(arguments),
              i = C.Deferred(),
              s = function (e) {
                return function (n) {
                  (r[e] = this),
                    (o[e] = arguments.length > 1 ? a.call(arguments) : n),
                    --t || i.resolveWith(r, o);
                };
              };
            if (
              t <= 1 &&
              (B(e, i.done(s(n)).resolve, i.reject, !t),
              'pending' === i.state() || m(o[n] && o[n].then))
            )
              return i.then();
            for (; n--; ) B(o[n], s(n), i.reject);
            return i.promise();
          },
        });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          W.test(e.name) &&
          n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
      }),
        (C.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var F = C.Deferred();
      function $() {
        x.removeEventListener('DOMContentLoaded', $), n.removeEventListener('load', $), C.ready();
      }
      (C.fn.ready = function (e) {
        return (
          F.then(e).catch(function (e) {
            C.readyException(e);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0), (!0 !== e && --C.readyWait > 0) || F.resolveWith(x, [C]));
          },
        }),
        (C.ready.then = F.then),
        'complete' === x.readyState || ('loading' !== x.readyState && !x.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (x.addEventListener('DOMContentLoaded', $), n.addEventListener('load', $));
      var z = function (e, t, n, r, o, i, s) {
          var a = 0,
            l = e.length,
            u = null == n;
          if ('object' === T(n)) for (a in ((o = !0), n)) z(e, t, a, n[a], !0, i, s);
          else if (
            void 0 !== r &&
            ((o = !0),
            m(r) || (s = !0),
            u &&
              (s
                ? (t.call(e, r), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(C(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
          return o ? e : u ? t.call(e) : l ? t(e[0], n) : i;
        },
        X = /^-ms-/,
        Y = /-([a-z])/g;
      function U(e, t) {
        return t.toUpperCase();
      }
      function V(e) {
        return e.replace(X, 'ms-').replace(Y, U);
      }
      var K = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Q() {
        this.expando = C.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                K(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              o = this.cache(e);
            if ('string' == typeof t) o[V(t)] = n;
            else for (r in t) o[V(r)] = t[r];
            return o;
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && 'string' == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(I) || [])
                  .length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || C.isEmptyObject(r)) &&
                (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t);
          },
        });
      var G = new Q(),
        J = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = 'data-' + t.replace(ee, '-$&').toLowerCase()),
            'string' == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  'true' === e ||
                  ('false' !== e &&
                    ('null' === e ? null : e === +e + '' ? +e : Z.test(e) ? JSON.parse(e) : e))
                );
              })(n);
            } catch (e) {}
            J.set(e, t, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function (e) {
          return J.hasData(e) || G.hasData(e);
        },
        data: function (e, t, n) {
          return J.access(e, t, n);
        },
        removeData: function (e, t) {
          J.remove(e, t);
        },
        _data: function (e, t, n) {
          return G.access(e, t, n);
        },
        _removeData: function (e, t) {
          G.remove(e, t);
        },
      }),
        C.fn.extend({
          data: function (e, t) {
            var n,
              r,
              o,
              i = this[0],
              s = i && i.attributes;
            if (void 0 === e) {
              if (this.length && ((o = J.get(i)), 1 === i.nodeType && !G.get(i, 'hasDataAttrs'))) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (r = s[n].name).indexOf('data-') &&
                    ((r = V(r.slice(5))), te(i, r, o[r]));
                G.set(i, 'hasDataAttrs', !0);
              }
              return o;
            }
            return 'object' == typeof e
              ? this.each(function () {
                  J.set(this, e);
                })
              : z(
                  this,
                  function (t) {
                    var n;
                    if (i && void 0 === t)
                      return void 0 !== (n = J.get(i, e)) || void 0 !== (n = te(i, e)) ? n : void 0;
                    this.each(function () {
                      J.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0,
                );
          },
          removeData: function (e) {
            return this.each(function () {
              J.remove(this, e);
            });
          },
        }),
        C.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (r = G.get(e, t)),
                n && (!r || Array.isArray(n) ? (r = G.access(e, t, C.makeArray(n))) : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || 'fx';
            var n = C.queue(e, t),
              r = n.length,
              o = n.shift(),
              i = C._queueHooks(e, t);
            'inprogress' === o && ((o = n.shift()), r--),
              o &&
                ('fx' === t && n.unshift('inprogress'),
                delete i.stop,
                o.call(
                  e,
                  function () {
                    C.dequeue(e, t);
                  },
                  i,
                )),
              !r && i && i.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return (
              G.get(e, n) ||
              G.access(e, n, {
                empty: C.Callbacks('once memory').add(function () {
                  G.remove(e, [t + 'queue', n]);
                }),
              })
            );
          },
        }),
        C.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? C.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e),
                      'fx' === e && 'inprogress' !== n[0] && C.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              C.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || 'fx', []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              o = C.Deferred(),
              i = this,
              s = this.length,
              a = function () {
                --r || o.resolveWith(i, [i]);
              };
            for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; s--; )
              (n = G.get(i[s], e + 'queueHooks')) && n.empty && (r++, n.empty.add(a));
            return a(), o.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp('^(?:([+-])=|)(' + ne + ')([a-z%]*)$', 'i'),
        oe = ['Top', 'Right', 'Bottom', 'Left'],
        ie = x.documentElement,
        se = function (e) {
          return C.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
      ie.getRootNode &&
        (se = function (e) {
          return C.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
        });
      var le = function (e, t) {
        return (
          'none' === (e = t || e).style.display ||
          ('' === e.style.display && se(e) && 'none' === C.css(e, 'display'))
        );
      };
      function ue(e, t, n, r) {
        var o,
          i,
          s = 20,
          a = r
            ? function () {
                return r.cur();
              }
            : function () {
                return C.css(e, t, '');
              },
          l = a(),
          u = (n && n[3]) || (C.cssNumber[t] ? '' : 'px'),
          c = e.nodeType && (C.cssNumber[t] || ('px' !== u && +l)) && re.exec(C.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; s--; )
            C.style(e, t, c + u), (1 - i) * (1 - (i = a() / l || 0.5)) <= 0 && (s = 0), (c /= i);
          (c *= 2), C.style(e, t, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = u), (r.start = c), (r.end = o))),
          o
        );
      }
      var ce = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = ce[r];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(r))),
          (o = C.css(t, 'display')),
          t.parentNode.removeChild(t),
          'none' === o && (o = 'block'),
          (ce[r] = o),
          o)
        );
      }
      function de(e, t) {
        for (var n, r, o = [], i = 0, s = e.length; i < s; i++)
          (r = e[i]).style &&
            ((n = r.style.display),
            t
              ? ('none' === n &&
                  ((o[i] = G.get(r, 'display') || null), o[i] || (r.style.display = '')),
                '' === r.style.display && le(r) && (o[i] = fe(r)))
              : 'none' !== n && ((o[i] = 'none'), G.set(r, 'display', n)));
        for (i = 0; i < s; i++) null != o[i] && (e[i].style.display = o[i]);
        return e;
      }
      C.fn.extend({
        show: function () {
          return de(this, !0);
        },
        hide: function () {
          return de(this);
        },
        toggle: function (e) {
          return 'boolean' == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? C(this).show() : C(this).hide();
              });
        },
      });
      var pe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = x.createDocumentFragment().appendChild(x.createElement('div'))),
        (he = x.createElement('input')).setAttribute('type', 'radio'),
        he.setAttribute('checked', 'checked'),
        he.setAttribute('name', 't'),
        pe.appendChild(he),
        (v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = '<textarea>x</textarea>'),
        (v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = '<option></option>'),
        (v.option = !!pe.lastChild);
      var ye = {
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      };
      function xe(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
          void 0 === t || (t && D(e, t)) ? C.merge([e], n) : n
        );
      }
      function be(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          G.set(e[n], 'globalEval', !t || G.get(t[n], 'globalEval'));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        v.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", '</select>']);
      var we = /<|&#?\w+;/;
      function Te(e, t, n, r, o) {
        for (
          var i, s, a, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length;
          p < h;
          p++
        )
          if ((i = e[p]) || 0 === i)
            if ('object' === T(i)) C.merge(d, i.nodeType ? [i] : i);
            else if (we.test(i)) {
              for (
                s = s || f.appendChild(t.createElement('div')),
                  a = (ve.exec(i) || ['', ''])[1].toLowerCase(),
                  l = ye[a] || ye._default,
                  s.innerHTML = l[1] + C.htmlPrefilter(i) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              C.merge(d, s.childNodes), ((s = f.firstChild).textContent = '');
            } else d.push(t.createTextNode(i));
        for (f.textContent = '', p = 0; (i = d[p++]); )
          if (r && C.inArray(i, r) > -1) o && o.push(i);
          else if (((u = se(i)), (s = xe(f.appendChild(i), 'script')), u && be(s), n))
            for (c = 0; (i = s[c++]); ) me.test(i.type || '') && n.push(i);
        return f;
      }
      var Ce = /^([^.]*)(?:\.(.+)|)/;
      function Ee() {
        return !0;
      }
      function Se() {
        return !1;
      }
      function ke(e, t) {
        return (
          (e ===
            (function () {
              try {
                return x.activeElement;
              } catch (e) {}
            })()) ==
          ('focus' === t)
        );
      }
      function Ae(e, t, n, r, o, i) {
        var s, a;
        if ('object' == typeof t) {
          for (a in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
            Ae(e, a, n, r, t[a], i);
          return e;
        }
        if (
          (null == r && null == o
            ? ((o = n), (r = n = void 0))
            : null == o &&
              ('string' == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))),
          !1 === o)
        )
          o = Se;
        else if (!o) return e;
        return (
          1 === i &&
            ((s = o),
            ((o = function (e) {
              return C().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = C.guid++))),
          e.each(function () {
            C.event.add(this, t, o, r, n);
          })
        );
      }
      function Ne(e, t, n) {
        n
          ? (G.set(e, t, !1),
            C.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  o,
                  i = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i.length) (C.event.special[t] || {}).delegateType && e.stopPropagation();
                  else if (
                    ((i = a.call(arguments)),
                    G.set(this, t, i),
                    (r = n(this, t)),
                    this[t](),
                    i !== (o = G.get(this, t)) || r ? G.set(this, t, !1) : (o = {}),
                    i !== o)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), o && o.value;
                } else
                  i.length &&
                    (G.set(this, t, {
                      value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === G.get(e, t) && C.event.add(e, t, Ee);
      }
      (C.event = {
        global: {},
        add: function (e, t, n, r, o) {
          var i,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            g,
            v = G.get(e);
          if (K(e))
            for (
              n.handler && ((n = (i = n).handler), (o = i.selector)),
                o && C.find.matchesSelector(ie, o),
                n.guid || (n.guid = C.guid++),
                (l = v.events) || (l = v.events = Object.create(null)),
                (s = v.handle) ||
                  (s = v.handle =
                    function (t) {
                      return void 0 !== C && C.event.triggered !== t.type
                        ? C.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                u = (t = (t || '').match(I) || ['']).length;
              u--;

            )
              (p = g = (a = Ce.exec(t[u]) || [])[1]),
                (h = (a[2] || '').split('.').sort()),
                p &&
                  ((f = C.event.special[p] || {}),
                  (p = (o ? f.delegateType : f.bindType) || p),
                  (f = C.event.special[p] || {}),
                  (c = C.extend(
                    {
                      type: p,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && C.expr.match.needsContext.test(o),
                      namespace: h.join('.'),
                    },
                    i,
                  )),
                  (d = l[p]) ||
                    (((d = l[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                      (e.addEventListener && e.addEventListener(p, s))),
                  f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                  o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (C.event.global[p] = !0));
        },
        remove: function (e, t, n, r, o) {
          var i,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            g,
            v = G.hasData(e) && G.get(e);
          if (v && (l = v.events)) {
            for (u = (t = (t || '').match(I) || ['']).length; u--; )
              if (
                ((p = g = (a = Ce.exec(t[u]) || [])[1]), (h = (a[2] || '').split('.').sort()), p)
              ) {
                for (
                  f = C.event.special[p] || {},
                    d = l[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    a = a[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                    s = i = d.length;
                  i--;

                )
                  (c = d[i]),
                    (!o && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                      (d.splice(i, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                s &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    C.removeEvent(e, p, v.handle),
                  delete l[p]);
              } else for (p in l) C.event.remove(e, p + t[u], n, r, !0);
            C.isEmptyObject(l) && G.remove(e, 'handle events');
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            o,
            i,
            s,
            a = new Array(arguments.length),
            l = C.event.fix(e),
            u = (G.get(this, 'events') || Object.create(null))[l.type] || [],
            c = C.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
            for (
              s = C.event.handlers.call(this, l, u), t = 0;
              (o = s[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = o.elem, n = 0;
                (i = o.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace && !1 !== i.namespace && !l.rnamespace.test(i.namespace)) ||
                  ((l.handleObj = i),
                  (l.data = i.data),
                  void 0 !==
                    (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(
                      o.elem,
                      a,
                    )) &&
                    !1 === (l.result = r) &&
                    (l.preventDefault(), l.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            o,
            i,
            s,
            a = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !('click' === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
                for (i = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(o = (r = t[n]).selector + ' ')] &&
                    (s[o] = r.needsContext
                      ? C(o, this).index(u) > -1
                      : C.find(o, this, null, [u]).length),
                    s[o] && i.push(r);
                i.length && a.push({ elem: u, handlers: i });
              }
          return (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a;
        },
        addProp: function (e, t) {
          Object.defineProperty(C.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[C.expando] ? e : new C.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return ge.test(t.type) && t.click && D(t, 'input') && Ne(t, 'click', Ee), !1;
            },
            trigger: function (e) {
              var t = this || e;
              return ge.test(t.type) && t.click && D(t, 'input') && Ne(t, 'click'), !0;
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) && t.click && D(t, 'input') && G.get(t, 'click')) || D(t, 'a')
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (C.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (C.Event = function (e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ee
                  : Se),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && C.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: Se,
          isPropagationStopped: Se,
          isImmediatePropagationStopped: Se,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ee),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          C.event.addProp,
        ),
        C.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
          C.event.special[e] = {
            setup: function () {
              return Ne(this, e, ke), !1;
            },
            trigger: function () {
              return Ne(this, e), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: t,
          };
        }),
        C.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function (e, t) {
            C.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  o = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (o && (o === r || C.contains(r, o))) ||
                    ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
                  n
                );
              },
            };
          },
        ),
        C.fn.extend({
          on: function (e, t, n, r) {
            return Ae(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                C(e.delegateTarget).off(
                  r.namespace ? r.origType + '.' + r.namespace : r.origType,
                  r.selector,
                  r.handler,
                ),
                this
              );
            if ('object' == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Se),
              this.each(function () {
                C.event.remove(this, e, n, t);
              })
            );
          },
        });
      var De = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Oe(e, t) {
        return (
          (D(e, 'table') &&
            D(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
            C(e).children('tbody')[0]) ||
          e
        );
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
      }
      function qe(e) {
        return (
          'true/' === (e.type || '').slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute('type'),
          e
        );
      }
      function Me(e, t) {
        var n, r, o, i, s, a;
        if (1 === t.nodeType) {
          if (G.hasData(e) && (a = G.get(e).events))
            for (o in (G.remove(t, 'handle events'), a))
              for (n = 0, r = a[o].length; n < r; n++) C.event.add(t, o, a[o][n]);
          J.hasData(e) && ((i = J.access(e)), (s = C.extend({}, i)), J.set(t, s));
        }
      }
      function He(e, t) {
        var n = t.nodeName.toLowerCase();
        'input' === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
      }
      function Ie(e, t, n, r) {
        t = l(t);
        var o,
          i,
          s,
          a,
          u,
          c,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          g = m(h);
        if (g || (d > 1 && 'string' == typeof h && !v.checkClone && je.test(h)))
          return e.each(function (o) {
            var i = e.eq(o);
            g && (t[0] = h.call(this, o, i.html())), Ie(i, t, n, r);
          });
        if (
          d &&
          ((i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === o.childNodes.length && (o = i),
          i || r)
        ) {
          for (a = (s = C.map(xe(o, 'script'), Pe)).length; f < d; f++)
            (u = o),
              f !== p && ((u = C.clone(u, !0, !0)), a && C.merge(s, xe(u, 'script'))),
              n.call(e[f], u, f);
          if (a)
            for (c = s[s.length - 1].ownerDocument, C.map(s, qe), f = 0; f < a; f++)
              (u = s[f]),
                me.test(u.type || '') &&
                  !G.access(u, 'globalEval') &&
                  C.contains(c, u) &&
                  (u.src && 'module' !== (u.type || '').toLowerCase()
                    ? C._evalUrl &&
                      !u.noModule &&
                      C._evalUrl(u.src, { nonce: u.nonce || u.getAttribute('nonce') }, c)
                    : w(u.textContent.replace(Le, ''), u, c));
        }
        return e;
      }
      function _e(e, t, n) {
        for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
          n || 1 !== r.nodeType || C.cleanData(xe(r)),
            r.parentNode && (n && se(r) && be(xe(r, 'script')), r.parentNode.removeChild(r));
        return e;
      }
      C.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            o,
            i,
            s,
            a = e.cloneNode(!0),
            l = se(e);
          if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || C.isXMLDoc(e)))
            for (s = xe(a), r = 0, o = (i = xe(e)).length; r < o; r++) He(i[r], s[r]);
          if (t)
            if (n)
              for (i = i || xe(e), s = s || xe(a), r = 0, o = i.length; r < o; r++) Me(i[r], s[r]);
            else Me(e, a);
          return (s = xe(a, 'script')).length > 0 && be(s, !l && xe(e, 'script')), a;
        },
        cleanData: function (e) {
          for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
            if (K(n)) {
              if ((t = n[G.expando])) {
                if (t.events)
                  for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                n[G.expando] = void 0;
              }
              n[J.expando] && (n[J.expando] = void 0);
            }
        },
      }),
        C.fn.extend({
          detach: function (e) {
            return _e(this, e, !0);
          },
          remove: function (e) {
            return _e(this, e);
          },
          text: function (e) {
            return z(
              this,
              function (e) {
                return void 0 === e
                  ? C.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length,
            );
          },
          append: function () {
            return Ie(this, arguments, function (e) {
              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                Oe(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Ie(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Oe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Ie(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Ie(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (C.cleanData(xe(e, !1)), (e.textContent = ''));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return C.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return z(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  'string' == typeof e &&
                  !De.test(e) &&
                  !ye[(ve.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = C.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (C.cleanData(xe(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length,
            );
          },
          replaceWith: function () {
            var e = [];
            return Ie(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this));
              },
              e,
            );
          },
        }),
        C.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (e, t) {
            C.fn[e] = function (e) {
              for (var n, r = [], o = C(e), i = o.length - 1, s = 0; s <= i; s++)
                (n = s === i ? this : this.clone(!0)), C(o[s])[t](n), u.apply(r, n.get());
              return this.pushStack(r);
            };
          },
        );
      var Re = new RegExp('^(' + ne + ')(?!px)[a-z%]+$', 'i'),
        Be = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        We = function (e, t, n) {
          var r,
            o,
            i = {};
          for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
          return r;
        },
        Fe = new RegExp(oe.join('|'), 'i');
      function $e(e, t, n) {
        var r,
          o,
          i,
          s,
          a = e.style;
        return (
          (n = n || Be(e)) &&
            ('' !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = C.style(e, t)),
            !v.pixelBoxStyles() &&
              Re.test(s) &&
              Fe.test(t) &&
              ((r = a.width),
              (o = a.minWidth),
              (i = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = r),
              (a.minWidth = o),
              (a.maxWidth = i))),
          void 0 !== s ? s + '' : s
        );
      }
      function ze(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (c) {
            (u.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              ie.appendChild(u).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = '1%' !== e.top),
              (l = 12 === t(e.marginLeft)),
              (c.style.right = '60%'),
              (s = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (c.style.position = 'absolute'),
              (i = 12 === t(c.offsetWidth / 3)),
              ie.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          o,
          i,
          s,
          a,
          l,
          u = x.createElement('div'),
          c = x.createElement('div');
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (v.clearCloneStyle = 'content-box' === c.style.backgroundClip),
          C.extend(v, {
            boxSizingReliable: function () {
              return e(), o;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), i;
            },
            reliableTrDimensions: function () {
              var e, t, r, o;
              return (
                null == a &&
                  ((e = x.createElement('table')),
                  (t = x.createElement('tr')),
                  (r = x.createElement('div')),
                  (e.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
                  (t.style.cssText = 'border:1px solid'),
                  (t.style.height = '1px'),
                  (r.style.height = '9px'),
                  (r.style.display = 'block'),
                  ie.appendChild(e).appendChild(t).appendChild(r),
                  (o = n.getComputedStyle(t)),
                  (a =
                    parseInt(o.height, 10) +
                      parseInt(o.borderTopWidth, 10) +
                      parseInt(o.borderBottomWidth, 10) ===
                    t.offsetHeight),
                  ie.removeChild(e)),
                a
              );
            },
          }));
      })();
      var Xe = ['Webkit', 'Moz', 'ms'],
        Ye = x.createElement('div').style,
        Ue = {};
      function Ve(e) {
        var t = C.cssProps[e] || Ue[e];
        return (
          t ||
          (e in Ye
            ? e
            : (Ue[e] =
                (function (e) {
                  for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; )
                    if ((e = Xe[n] + t) in Ye) return e;
                })(e) || e))
        );
      }
      var Ke = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Ge = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Je = { letterSpacing: '0', fontWeight: '400' };
      function Ze(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
      }
      function et(e, t, n, r, o, i) {
        var s = 'width' === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; s < 4; s += 2)
          'margin' === n && (l += C.css(e, n + oe[s], !0, o)),
            r
              ? ('content' === n && (l -= C.css(e, 'padding' + oe[s], !0, o)),
                'margin' !== n && (l -= C.css(e, 'border' + oe[s] + 'Width', !0, o)))
              : ((l += C.css(e, 'padding' + oe[s], !0, o)),
                'padding' !== n
                  ? (l += C.css(e, 'border' + oe[s] + 'Width', !0, o))
                  : (a += C.css(e, 'border' + oe[s] + 'Width', !0, o)));
        return (
          !r &&
            i >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - i - l - a - 0.5),
              ) || 0),
          l
        );
      }
      function tt(e, t, n) {
        var r = Be(e),
          o = (!v.boxSizingReliable() || n) && 'border-box' === C.css(e, 'boxSizing', !1, r),
          i = o,
          s = $e(e, t, r),
          a = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (Re.test(s)) {
          if (!n) return s;
          s = 'auto';
        }
        return (
          ((!v.boxSizingReliable() && o) ||
            (!v.reliableTrDimensions() && D(e, 'tr')) ||
            'auto' === s ||
            (!parseFloat(s) && 'inline' === C.css(e, 'display', !1, r))) &&
            e.getClientRects().length &&
            ((o = 'border-box' === C.css(e, 'boxSizing', !1, r)), (i = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) + et(e, t, n || (o ? 'border' : 'content'), i, r, s) + 'px'
        );
      }
      function nt(e, t, n, r, o) {
        return new nt.prototype.init(e, t, n, r, o);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = $e(e, 'opacity');
                return '' === n ? '1' : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              i,
              s,
              a = V(t),
              l = Qe.test(t),
              u = e.style;
            if ((l || (t = Ve(a)), (s = C.cssHooks[t] || C.cssHooks[a]), void 0 === n))
              return s && 'get' in s && void 0 !== (o = s.get(e, !1, r)) ? o : u[t];
            'string' === (i = typeof n) &&
              (o = re.exec(n)) &&
              o[1] &&
              ((n = ue(e, t, o)), (i = 'number')),
              null != n &&
                n == n &&
                ('number' !== i || l || (n += (o && o[3]) || (C.cssNumber[a] ? '' : 'px')),
                v.clearCloneStyle ||
                  '' !== n ||
                  0 !== t.indexOf('background') ||
                  (u[t] = 'inherit'),
                (s && 'set' in s && void 0 === (n = s.set(e, n, r))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var o,
            i,
            s,
            a = V(t);
          return (
            Qe.test(t) || (t = Ve(a)),
            (s = C.cssHooks[t] || C.cssHooks[a]) && 'get' in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = $e(e, t, r)),
            'normal' === o && t in Je && (o = Je[t]),
            '' === n || n ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o) : o
          );
        },
      }),
        C.each(['height', 'width'], function (e, t) {
          C.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ke.test(C.css(e, 'display')) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? tt(e, t, r)
                  : We(e, Ge, function () {
                      return tt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var o,
                i = Be(e),
                s = !v.scrollboxSize() && 'absolute' === i.position,
                a = (s || r) && 'border-box' === C.css(e, 'boxSizing', !1, i),
                l = r ? et(e, t, r, a, i) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e['offset' + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(i[t]) -
                      et(e, t, 'border', !1, i) -
                      0.5,
                  )),
                l &&
                  (o = re.exec(n)) &&
                  'px' !== (o[3] || 'px') &&
                  ((e.style[t] = n), (n = C.css(e, t))),
                Ze(0, n, l)
              );
            },
          };
        }),
        (C.cssHooks.marginLeft = ze(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat($e(e, 'marginLeft')) ||
                e.getBoundingClientRect().left -
                  We(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        C.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
          (C.cssHooks[e + t] = {
            expand: function (n) {
              for (var r = 0, o = {}, i = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
                o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
              return o;
            },
          }),
            'margin' !== e && (C.cssHooks[e + t].set = Ze);
        }),
        C.fn.extend({
          css: function (e, t) {
            return z(
              this,
              function (e, t, n) {
                var r,
                  o,
                  i = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (r = Be(e), o = t.length; s < o; s++) i[t[s]] = C.css(e, t[s], !1, r);
                  return i;
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
              },
              e,
              t,
              arguments.length > 1,
            );
          },
        }),
        (C.Tween = nt),
        (nt.prototype = {
          constructor: nt,
          init: function (e, t, n, r, o, i) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || C.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = i || (C.cssNumber[n] ? '' : 'px'));
          },
          cur: function () {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = nt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    C.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration,
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : nt.propHooks._default.set(this),
              this
            );
          },
        }),
        (nt.prototype.init.prototype = nt.prototype),
        (nt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = C.css(e.elem, e.prop, '')) && 'auto' !== t
                ? t
                : 0;
            },
            set: function (e) {
              C.fx.step[e.prop]
                ? C.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType || (!C.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : C.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (C.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: 'swing',
        }),
        (C.fx = nt.prototype.init),
        (C.fx.step = {});
      var rt,
        ot,
        it = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
      function at() {
        ot &&
          (!1 === x.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(at)
            : n.setTimeout(at, C.fx.interval),
          C.fx.tick());
      }
      function lt() {
        return (
          n.setTimeout(function () {
            rt = void 0;
          }),
          (rt = Date.now())
        );
      }
      function ut(e, t) {
        var n,
          r = 0,
          o = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o['margin' + (n = oe[r])] = o['padding' + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function ct(e, t, n) {
        for (
          var r, o = (ft.tweeners[t] || []).concat(ft.tweeners['*']), i = 0, s = o.length;
          i < s;
          i++
        )
          if ((r = o[i].call(n, t, e))) return r;
      }
      function ft(e, t, n) {
        var r,
          o,
          i = 0,
          s = ft.prefilters.length,
          a = C.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (
              var t = rt || lt(),
                n = Math.max(0, u.startTime + u.duration - t),
                r = 1 - (n / u.duration || 0),
                i = 0,
                s = u.tweens.length;
              i < s;
              i++
            )
              u.tweens[i].run(r);
            return (
              a.notifyWith(e, [u, r, n]),
              r < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            );
          },
          u = a.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || lt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
              return u.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? u.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < r; n++) u.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                  : a.rejectWith(e, [u, t]),
                this
              );
            },
          }),
          c = u.props;
        for (
          !(function (e, t) {
            var n, r, o, i, s;
            for (n in e)
              if (
                ((o = t[(r = V(n))]),
                (i = e[n]),
                Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                n !== r && ((e[r] = i), delete e[n]),
                (s = C.cssHooks[r]) && ('expand' in s))
              )
                for (n in ((i = s.expand(i)), delete e[r], i))
                  (n in e) || ((e[n] = i[n]), (t[n] = o));
              else t[r] = o;
          })(c, u.opts.specialEasing);
          i < s;
          i++
        )
          if ((r = ft.prefilters[i].call(u, e, c, u.opts)))
            return m(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
        return (
          C.map(c, ct, u),
          m(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          C.fx.timer(C.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (C.Animation = C.extend(ft, {
        tweeners: {
          '*': [
            function (e, t) {
              var n = this.createTween(e, t);
              return ue(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ['*'])) : (e = e.match(I));
          for (var n, r = 0, o = e.length; r < o; r++)
            (n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              o,
              i,
              s,
              a,
              l,
              u,
              c,
              f = 'width' in t || 'height' in t,
              d = this,
              p = {},
              h = e.style,
              g = e.nodeType && le(e),
              v = G.get(e, 'fxshow');
            for (r in (n.queue ||
              (null == (s = C._queueHooks(e, 'fx')).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              d.always(function () {
                d.always(function () {
                  s.unqueued--, C.queue(e, 'fx').length || s.empty.fire();
                });
              })),
            t))
              if (((o = t[r]), it.test(o))) {
                if ((delete t[r], (i = i || 'toggle' === o), o === (g ? 'hide' : 'show'))) {
                  if ('show' !== o || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                p[r] = (v && v[r]) || C.style(e, r);
              }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (u = v && v.display) && (u = G.get(e, 'display')),
                'none' === (c = C.css(e, 'display')) &&
                  (u
                    ? (c = u)
                    : (de([e], !0),
                      (u = e.style.display || u),
                      (c = C.css(e, 'display')),
                      de([e]))),
                ('inline' === c || ('inline-block' === c && null != u)) &&
                  'none' === C.css(e, 'float') &&
                  (l ||
                    (d.done(function () {
                      h.display = u;
                    }),
                    null == u && ((c = h.display), (u = 'none' === c ? '' : c))),
                  (h.display = 'inline-block'))),
              n.overflow &&
                ((h.overflow = 'hidden'),
                d.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              p))
                l ||
                  (v
                    ? 'hidden' in v && (g = v.hidden)
                    : (v = G.access(e, 'fxshow', { display: u })),
                  i && (v.hidden = !g),
                  g && de([e], !0),
                  d.done(function () {
                    for (r in (g || de([e]), G.remove(e, 'fxshow'), p)) C.style(e, r, p[r]);
                  })),
                  (l = ct(g ? v[r] : 0, r, d)),
                  r in v || ((v[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
      })),
        (C.speed = function (e, t, n) {
          var r =
            e && 'object' == typeof e
              ? C.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            C.fx.off
              ? (r.duration = 0)
              : 'number' != typeof r.duration &&
                (r.duration in C.fx.speeds
                  ? (r.duration = C.fx.speeds[r.duration])
                  : (r.duration = C.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
            (r.old = r.complete),
            (r.complete = function () {
              m(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
            }),
            r
          );
        }),
        C.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(le).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var o = C.isEmptyObject(e),
              i = C.speed(t, n, r),
              s = function () {
                var t = ft(this, C.extend({}, e), i);
                (o || G.get(this, 'finish')) && t.stop(!0);
              };
            return (s.finish = s), o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s);
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              'string' != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || 'fx', []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + 'queueHooks',
                  i = C.timers,
                  s = G.get(this);
                if (o) s[o] && s[o].stop && r(s[o]);
                else for (o in s) s[o] && s[o].stop && st.test(o) && r(s[o]);
                for (o = i.length; o--; )
                  i[o].elem !== this ||
                    (null != e && i[o].queue !== e) ||
                    (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                (!t && n) || C.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function () {
                var t,
                  n = G.get(this),
                  r = n[e + 'queue'],
                  o = n[e + 'queueHooks'],
                  i = C.timers,
                  s = r ? r.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = i.length;
                  t--;

                )
                  i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        C.each(['toggle', 'show', 'hide'], function (e, t) {
          var n = C.fn[t];
          C.fn[t] = function (e, r, o) {
            return null == e || 'boolean' == typeof e
              ? n.apply(this, arguments)
              : this.animate(ut(t, !0), e, r, o);
          };
        }),
        C.each(
          {
            slideDown: ut('show'),
            slideUp: ut('hide'),
            slideToggle: ut('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (e, t) {
            C.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          },
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var e,
            t = 0,
            n = C.timers;
          for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || C.fx.stop(), (rt = void 0);
        }),
        (C.fx.timer = function (e) {
          C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          ot || ((ot = !0), at());
        }),
        (C.fx.stop = function () {
          ot = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (e, t) {
          return (
            (e = (C.fx && C.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function (t, r) {
              var o = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = x.createElement('input'),
            t = x.createElement('select').appendChild(x.createElement('option'));
          (e.type = 'checkbox'),
            (v.checkOn = '' !== e.value),
            (v.optSelected = t.selected),
            ((e = x.createElement('input')).value = 't'),
            (e.type = 'radio'),
            (v.radioValue = 't' === e.value);
        })();
      var dt,
        pt = C.expr.attrHandle;
      C.fn.extend({
        attr: function (e, t) {
          return z(this, C.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e);
          });
        },
      }),
        C.extend({
          attr: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === e.getAttribute
                ? C.prop(e, t, n)
                : ((1 === i && C.isXMLDoc(e)) ||
                    (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? dt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(e, t)
                      : o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ''), n)
                    : o && 'get' in o && null !== (r = o.get(e, t))
                    ? r
                    : null == (r = C.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && 'radio' === t && D(e, 'input')) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              o = t && t.match(I);
            if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
          },
        }),
        (dt = {
          set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = pt[t] || C.find.attr;
          pt[t] = function (e, t, r) {
            var o,
              i,
              s = t.toLowerCase();
            return (
              r || ((i = pt[s]), (pt[s] = o), (o = null != n(e, t, r) ? s : null), (pt[s] = i)), o
            );
          };
        });
      var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
      function vt(e) {
        return (e.match(I) || []).join(' ');
      }
      function mt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
      }
      function yt(e) {
        return Array.isArray(e) ? e : ('string' == typeof e && e.match(I)) || [];
      }
      C.fn.extend({
        prop: function (e, t) {
          return z(this, C.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[C.propFix[e] || e];
          });
        },
      }),
        C.extend({
          prop: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && C.isXMLDoc(e)) || ((t = C.propFix[t] || t), (o = C.propHooks[t])),
                void 0 !== n
                  ? o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : o && 'get' in o && null !== (r = o.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = C.find.attr(e, 'tabindex');
                return t
                  ? parseInt(t, 10)
                  : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        v.optSelected ||
          (C.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        C.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function () {
            C.propFix[this.toLowerCase()] = this;
          },
        ),
        C.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              o,
              i,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                C(this).addClass(e.call(this, t, mt(this)));
              });
            if ((t = yt(e)).length)
              for (; (n = this[l++]); )
                if (((o = mt(n)), (r = 1 === n.nodeType && ' ' + vt(o) + ' '))) {
                  for (s = 0; (i = t[s++]); ) r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
                  o !== (a = vt(r)) && n.setAttribute('class', a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              o,
              i,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                C(this).removeClass(e.call(this, t, mt(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((t = yt(e)).length)
              for (; (n = this[l++]); )
                if (((o = mt(n)), (r = 1 === n.nodeType && ' ' + vt(o) + ' '))) {
                  for (s = 0; (i = t[s++]); )
                    for (; r.indexOf(' ' + i + ' ') > -1; ) r = r.replace(' ' + i + ' ', ' ');
                  o !== (a = vt(r)) && n.setAttribute('class', a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function (n) {
                  C(this).toggleClass(e.call(this, n, mt(this), t), t);
                })
              : this.each(function () {
                  var t, o, i, s;
                  if (r)
                    for (o = 0, i = C(this), s = yt(e); (t = s[o++]); )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (void 0 !== e && 'boolean' !== n) ||
                      ((t = mt(this)) && G.set(this, '__className__', t),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          t || !1 === e ? '' : G.get(this, '__className__') || '',
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = ' ' + e + ' '; (n = this[r++]); )
              if (1 === n.nodeType && (' ' + vt(mt(n)) + ' ').indexOf(t) > -1) return !0;
            return !1;
          },
        });
      var xt = /\r/g;
      C.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            o = this[0];
          return arguments.length
            ? ((r = m(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = r ? e.call(this, n, C(this).val()) : e)
                    ? (o = '')
                    : 'number' == typeof o
                    ? (o += '')
                    : Array.isArray(o) &&
                      (o = C.map(o, function (e) {
                        return null == e ? '' : e + '';
                      })),
                  ((t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, o, 'value')) ||
                    (this.value = o));
              }))
            : o
            ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(o, 'value'))
              ? n
              : 'string' == typeof (n = o.value)
              ? n.replace(xt, '')
              : null == n
              ? ''
              : n
            : void 0;
        },
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = C.find.attr(e, 'value');
                return null != t ? t : vt(C.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  o = e.options,
                  i = e.selectedIndex,
                  s = 'select-one' === e.type,
                  a = s ? null : [],
                  l = s ? i + 1 : o.length;
                for (r = i < 0 ? l : s ? i : 0; r < l; r++)
                  if (
                    ((n = o[r]).selected || r === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !D(n.parentNode, 'optgroup'))
                  ) {
                    if (((t = C(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (var n, r, o = e.options, i = C.makeArray(t), s = o.length; s--; )
                  ((r = o[s]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), i;
              },
            },
          },
        }),
        C.each(['radio', 'checkbox'], function () {
          (C.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return (e.checked = C.inArray(C(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (C.valHooks[this].get = function (e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              });
        }),
        (v.focusin = 'onfocusin' in n);
      var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
          e.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function (e, t, r, o) {
          var i,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            h = [r || x],
            g = p.call(e, 'type') ? e.type : e,
            v = p.call(e, 'namespace') ? e.namespace.split('.') : [];
          if (
            ((s = d = a = r = r || x),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !bt.test(g + C.event.triggered) &&
              (g.indexOf('.') > -1 && ((v = g.split('.')), (g = v.shift()), v.sort()),
              (u = g.indexOf(':') < 0 && 'on' + g),
              ((e = e[C.expando] ? e : new C.Event(g, 'object' == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = v.join('.')),
              (e.rnamespace = e.namespace
                ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : C.makeArray(t, [e])),
              (f = C.event.special[g] || {}),
              o || !f.trigger || !1 !== f.trigger.apply(r, t)))
          ) {
            if (!o && !f.noBubble && !y(r)) {
              for (
                l = f.delegateType || g, bt.test(l + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                h.push(s), (a = s);
              a === (r.ownerDocument || x) && h.push(a.defaultView || a.parentWindow || n);
            }
            for (i = 0; (s = h[i++]) && !e.isPropagationStopped(); )
              (d = s),
                (e.type = i > 1 ? l : f.bindType || g),
                (c = (G.get(s, 'events') || Object.create(null))[e.type] && G.get(s, 'handle')) &&
                  c.apply(s, t),
                (c = u && s[u]) &&
                  c.apply &&
                  K(s) &&
                  ((e.result = c.apply(s, t)), !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              o ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !K(r) ||
                (u &&
                  m(r[g]) &&
                  !y(r) &&
                  ((a = r[u]) && (r[u] = null),
                  (C.event.triggered = g),
                  e.isPropagationStopped() && d.addEventListener(g, wt),
                  r[g](),
                  e.isPropagationStopped() && d.removeEventListener(g, wt),
                  (C.event.triggered = void 0),
                  a && (r[u] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
          C.event.trigger(r, null, t);
        },
      }),
        C.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              C.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          C.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            var n = function (e) {
              C.event.simulate(t, e.target, C.event.fix(e));
            };
            C.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  o = G.access(r, t);
                o || r.addEventListener(e, n, !0), G.access(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  o = G.access(r, t) - 1;
                o ? G.access(r, t, o) : (r.removeEventListener(e, n, !0), G.remove(r, t));
              },
            };
          });
      var Tt = n.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
      C.parseXML = function (e) {
        var t, r;
        if (!e || 'string' != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {}
        return (
          (r = t && t.getElementsByTagName('parsererror')[0]),
          (t && !r) ||
            C.error(
              'Invalid XML: ' +
                (r
                  ? C.map(r.childNodes, function (e) {
                      return e.textContent;
                    }).join('\n')
                  : e),
            ),
          t
        );
      };
      var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
      function Dt(e, t, n, r) {
        var o;
        if (Array.isArray(t))
          C.each(t, function (t, o) {
            n || St.test(e)
              ? r(e, o)
              : Dt(e + '[' + ('object' == typeof o && null != o ? t : '') + ']', o, n, r);
          });
        else if (n || 'object' !== T(t)) r(e, t);
        else for (o in t) Dt(e + '[' + o + ']', t[o], n, r);
      }
      (C.param = function (e, t) {
        var n,
          r = [],
          o = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
          };
        if (null == e) return '';
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
          C.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) Dt(n, e[n], t, o);
        return r.join('&');
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = C.prop(this, 'elements');
              return e ? C.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !C(this).is(':disabled') &&
                  Nt.test(this.nodeName) &&
                  !At.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (e) {
                      return { name: t.name, value: e.replace(kt, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(kt, '\r\n') };
              })
              .get();
          },
        });
      var jt = /%20/g,
        Lt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        Ht = {},
        It = {},
        _t = '*/'.concat('*'),
        Rt = x.createElement('a');
      function Bt(e) {
        return function (t, n) {
          'string' != typeof t && ((n = t), (t = '*'));
          var r,
            o = 0,
            i = t.toLowerCase().match(I) || [];
          if (m(n))
            for (; (r = i[o++]); )
              '+' === r[0]
                ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Wt(e, t, n, r) {
        var o = {},
          i = e === It;
        function s(a) {
          var l;
          return (
            (o[a] = !0),
            C.each(e[a] || [], function (e, a) {
              var u = a(t, n, r);
              return 'string' != typeof u || i || o[u]
                ? i
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!o['*'] && s('*'));
      }
      function Ft(e, t) {
        var n,
          r,
          o = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && C.extend(!0, e, r), e;
      }
      (Rt.href = Tt.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Tt.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': _t,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': JSON.parse,
              'text xml': C.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Ft(Ft(e, C.ajaxSettings), t) : Ft(C.ajaxSettings, e);
          },
          ajaxPrefilter: Bt(Ht),
          ajaxTransport: Bt(It),
          ajax: function (e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              o,
              i,
              s,
              a,
              l,
              u,
              c,
              f,
              d,
              p = C.ajaxSetup({}, t),
              h = p.context || p,
              g = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
              v = C.Deferred(),
              m = C.Callbacks('once memory'),
              y = p.statusCode || {},
              b = {},
              w = {},
              T = 'canceled',
              E = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!s)
                      for (s = {}; (t = Pt.exec(i)); )
                        s[t[1].toLowerCase() + ' '] = (s[t[1].toLowerCase() + ' '] || []).concat(
                          t[2],
                        );
                    t = s[e.toLowerCase() + ' '];
                  }
                  return null == t ? null : t.join(', ');
                },
                getAllResponseHeaders: function () {
                  return u ? i : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == u && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (b[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == u && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (u) E.always(e[E.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return r && r.abort(t), S(0, t), this;
                },
              };
            if (
              (v.promise(E),
              (p.url = ((e || p.url || Tt.href) + '').replace(Mt, Tt.protocol + '//')),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || '*').toLowerCase().match(I) || ['']),
              null == p.crossDomain)
            ) {
              l = x.createElement('a');
              try {
                (l.href = p.url),
                  (l.href = l.href),
                  (p.crossDomain = Rt.protocol + '//' + Rt.host != l.protocol + '//' + l.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                'string' != typeof p.data &&
                (p.data = C.param(p.data, p.traditional)),
              Wt(Ht, p, t, E),
              u)
            )
              return E;
            for (f in ((c = C.event && p.global) && 0 == C.active++ && C.event.trigger('ajaxStart'),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !qt.test(p.type)),
            (o = p.url.replace(Lt, '')),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 === (p.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                (p.data = p.data.replace(jt, '+'))
              : ((d = p.url.slice(o.length)),
                p.data &&
                  (p.processData || 'string' == typeof p.data) &&
                  ((o += (Et.test(o) ? '&' : '?') + p.data), delete p.data),
                !1 === p.cache &&
                  ((o = o.replace(Ot, '$1')),
                  (d = (Et.test(o) ? '&' : '?') + '_=' + Ct.guid++ + d)),
                (p.url = o + d)),
            p.ifModified &&
              (C.lastModified[o] && E.setRequestHeader('If-Modified-Since', C.lastModified[o]),
              C.etag[o] && E.setRequestHeader('If-None-Match', C.etag[o])),
            ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) &&
              E.setRequestHeader('Content-Type', p.contentType),
            E.setRequestHeader(
              'Accept',
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + _t + '; q=0.01' : '')
                : p.accepts['*'],
            ),
            p.headers))
              E.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, E, p) || u)) return E.abort();
            if (
              ((T = 'abort'),
              m.add(p.complete),
              E.done(p.success),
              E.fail(p.error),
              (r = Wt(It, p, t, E)))
            ) {
              if (((E.readyState = 1), c && g.trigger('ajaxSend', [E, p]), u)) return E;
              p.async &&
                p.timeout > 0 &&
                (a = n.setTimeout(function () {
                  E.abort('timeout');
                }, p.timeout));
              try {
                (u = !1), r.send(b, S);
              } catch (e) {
                if (u) throw e;
                S(-1, e);
              }
            } else S(-1, 'No Transport');
            function S(e, t, s, l) {
              var f,
                d,
                x,
                b,
                w,
                T = t;
              u ||
                ((u = !0),
                a && n.clearTimeout(a),
                (r = void 0),
                (i = l || ''),
                (E.readyState = e > 0 ? 4 : 0),
                (f = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (b = (function (e, t, n) {
                    for (var r, o, i, s, a = e.contents, l = e.dataTypes; '*' === l[0]; )
                      l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                    if (r)
                      for (o in a)
                        if (a[o] && a[o].test(r)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) i = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || e.converters[o + ' ' + l[0]]) {
                          i = o;
                          break;
                        }
                        s || (s = o);
                      }
                      i = i || s;
                    }
                    if (i) return i !== l[0] && l.unshift(i), n[i];
                  })(p, E, s)),
                !f &&
                  C.inArray('script', p.dataTypes) > -1 &&
                  C.inArray('json', p.dataTypes) < 0 &&
                  (p.converters['text script'] = function () {}),
                (b = (function (e, t, n, r) {
                  var o,
                    i,
                    s,
                    a,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                  if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                  for (i = c.shift(); i; )
                    if (
                      (e.responseFields[i] && (n[e.responseFields[i]] = t),
                      !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      (l = i),
                      (i = c.shift()))
                    )
                      if ('*' === i) i = l;
                      else if ('*' !== l && l !== i) {
                        if (!(s = u[l + ' ' + i] || u['* ' + i]))
                          for (o in u)
                            if (
                              (a = o.split(' '))[1] === i &&
                              (s = u[l + ' ' + a[0]] || u['* ' + a[0]])
                            ) {
                              !0 === s ? (s = u[o]) : !0 !== u[o] && ((i = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: 'parsererror',
                                error: s ? e : 'No conversion from ' + l + ' to ' + i,
                              };
                            }
                      }
                  return { state: 'success', data: t };
                })(p, b, E, f)),
                f
                  ? (p.ifModified &&
                      ((w = E.getResponseHeader('Last-Modified')) && (C.lastModified[o] = w),
                      (w = E.getResponseHeader('etag')) && (C.etag[o] = w)),
                    204 === e || 'HEAD' === p.type
                      ? (T = 'nocontent')
                      : 304 === e
                      ? (T = 'notmodified')
                      : ((T = b.state), (d = b.data), (f = !(x = b.error))))
                  : ((x = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                (E.status = e),
                (E.statusText = (t || T) + ''),
                f ? v.resolveWith(h, [d, T, E]) : v.rejectWith(h, [E, T, x]),
                E.statusCode(y),
                (y = void 0),
                c && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [E, p, f ? d : x]),
                m.fireWith(h, [E, T]),
                c &&
                  (g.trigger('ajaxComplete', [E, p]), --C.active || C.event.trigger('ajaxStop')));
            }
            return E;
          },
          getJSON: function (e, t, n) {
            return C.get(e, t, n, 'json');
          },
          getScript: function (e, t) {
            return C.get(e, void 0, t, 'script');
          },
        }),
        C.each(['get', 'post'], function (e, t) {
          C[t] = function (e, n, r, o) {
            return (
              m(n) && ((o = o || r), (r = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: e, type: t, dataType: o, data: n, success: r },
                  C.isPlainObject(e) && e,
                ),
              )
            );
          };
        }),
        C.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
        }),
        (C._evalUrl = function (e, t, n) {
          return C.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function () {} },
            dataFilter: function (e) {
              C.globalEval(e, t, n);
            },
          });
        }),
        C.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
              ? this.each(function (t) {
                  C(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = C(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              C(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not('body')
                .each(function () {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (C.expr.pseudos.hidden = function (e) {
          return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var $t = { 0: 200, 1223: 204 },
        zt = C.ajaxSettings.xhr();
      (v.cors = !!zt && 'withCredentials' in zt),
        (v.ajax = zt = !!zt),
        C.ajaxTransport(function (e) {
          var t, r;
          if (v.cors || (zt && !e.crossDomain))
            return {
              send: function (o, i) {
                var s,
                  a = e.xhr();
                if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o['X-Requested-With'] ||
                  (o['X-Requested-With'] = 'XMLHttpRequest'),
                o))
                  a.setRequestHeader(s, o[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      'abort' === e
                        ? a.abort()
                        : 'error' === e
                        ? 'number' != typeof a.status
                          ? i(0, 'error')
                          : i(a.status, a.statusText)
                        : i(
                            $t[a.status] || a.status,
                            a.statusText,
                            'text' !== (a.responseType || 'text') ||
                              'string' != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (a.onload = t()),
                  (r = a.onerror = a.ontimeout = t('error')),
                  void 0 !== a.onabort
                    ? (a.onabort = r)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t('abort'));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        C.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (e) {
              return C.globalEval(e), e;
            },
          },
        }),
        C.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
        }),
        C.ajaxTransport('script', function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, o) {
                (t = C('<script>')
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (n = function (e) {
                      t.remove(), (n = null), e && o('error' === e.type ? 404 : 200, e.type);
                    }),
                  )),
                  x.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Xt,
        Yt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var e = Yt.pop() || C.expando + '_' + Ct.guid++;
          return (this[e] = !0), e;
        },
      }),
        C.ajaxPrefilter('json jsonp', function (e, t, r) {
          var o,
            i,
            s,
            a =
              !1 !== e.jsonp &&
              (Ut.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  Ut.test(e.data) &&
                  'data');
          if (a || 'jsonp' === e.dataTypes[0])
            return (
              (o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Ut, '$1' + o))
                : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? '&' : '?') + e.jsonp + '=' + o),
              (e.converters['script json'] = function () {
                return s || C.error(o + ' was not called'), s[0];
              }),
              (e.dataTypes[0] = 'json'),
              (i = n[o]),
              (n[o] = function () {
                s = arguments;
              }),
              r.always(function () {
                void 0 === i ? C(n).removeProp(o) : (n[o] = i),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(o)),
                  s && m(i) && i(s[0]),
                  (s = i = void 0);
              }),
              'script'
            );
        }),
        (v.createHTMLDocument =
          (((Xt = x.implementation.createHTMLDocument('').body).innerHTML =
            '<form></form><form></form>'),
          2 === Xt.childNodes.length)),
        (C.parseHTML = function (e, t, n) {
          return 'string' != typeof e
            ? []
            : ('boolean' == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t = x.implementation.createHTMLDocument('')).createElement(
                      'base',
                    )).href = x.location.href),
                    t.head.appendChild(r))
                  : (t = x)),
              (i = !n && []),
              (o = j.exec(e))
                ? [t.createElement(o[1])]
                : ((o = Te([e], t, i)), i && i.length && C(i).remove(), C.merge([], o.childNodes)));
          var r, o, i;
        }),
        (C.fn.load = function (e, t, n) {
          var r,
            o,
            i,
            s = this,
            a = e.indexOf(' ');
          return (
            a > -1 && ((r = vt(e.slice(a))), (e = e.slice(0, a))),
            m(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (o = 'POST'),
            s.length > 0 &&
              C.ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
                .done(function (e) {
                  (i = arguments), s.html(r ? C('<div>').append(C.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, i || [e.responseText, t, e]);
                      });
                    },
                ),
            this
          );
        }),
        (C.expr.pseudos.animated = function (e) {
          return C.grep(C.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function (e, t, n) {
            var r,
              o,
              i,
              s,
              a,
              l,
              u = C.css(e, 'position'),
              c = C(e),
              f = {};
            'static' === u && (e.style.position = 'relative'),
              (a = c.offset()),
              (i = C.css(e, 'top')),
              (l = C.css(e, 'left')),
              ('absolute' === u || 'fixed' === u) && (i + l).indexOf('auto') > -1
                ? ((s = (r = c.position()).top), (o = r.left))
                : ((s = parseFloat(i) || 0), (o = parseFloat(l) || 0)),
              m(t) && (t = t.call(e, n, C.extend({}, a))),
              null != t.top && (f.top = t.top - a.top + s),
              null != t.left && (f.left = t.left - a.left + o),
              'using' in t ? t.using.call(e, f) : c.css(f);
          },
        }),
        C.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    C.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                o = { top: 0, left: 0 };
              if ('fixed' === C.css(r, 'position')) t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  'static' === C.css(e, 'position');

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((o = C(e).offset()).top += C.css(e, 'borderTopWidth', !0)),
                  (o.left += C.css(e, 'borderLeftWidth', !0)));
              }
              return {
                top: t.top - o.top - C.css(r, 'marginTop', !0),
                left: t.left - o.left - C.css(r, 'marginLeft', !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && 'static' === C.css(e, 'position'); )
                e = e.offsetParent;
              return e || ie;
            });
          },
        }),
        C.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
          var n = 'pageYOffset' === t;
          C.fn[e] = function (r) {
            return z(
              this,
              function (e, r, o) {
                var i;
                if ((y(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === o))
                  return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (e[r] = o);
              },
              e,
              r,
              arguments.length,
            );
          };
        }),
        C.each(['top', 'left'], function (e, t) {
          C.cssHooks[t] = ze(v.pixelPosition, function (e, n) {
            if (n) return (n = $e(e, t)), Re.test(n) ? C(e).position()[t] + 'px' : n;
          });
        }),
        C.each({ Height: 'height', Width: 'width' }, function (e, t) {
          C.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, r) {
            C.fn[r] = function (o, i) {
              var s = arguments.length && (n || 'boolean' != typeof o),
                a = n || (!0 === o || !0 === i ? 'margin' : 'border');
              return z(
                this,
                function (t, n, o) {
                  var i;
                  return y(t)
                    ? 0 === r.indexOf('outer')
                      ? t['inner' + e]
                      : t.document.documentElement['client' + e]
                    : 9 === t.nodeType
                    ? ((i = t.documentElement),
                      Math.max(
                        t.body['scroll' + e],
                        i['scroll' + e],
                        t.body['offset' + e],
                        i['offset' + e],
                        i['client' + e],
                      ))
                    : void 0 === o
                    ? C.css(t, n, a)
                    : C.style(t, n, o, a);
                },
                t,
                s ? o : void 0,
                s,
              );
            };
          });
        }),
        C.each(
          ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
          function (e, t) {
            C.fn[t] = function (e) {
              return this.on(t, e);
            };
          },
        ),
        C.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        C.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' ',
          ),
          function (e, t) {
            C.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          },
        );
      var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (C.proxy = function (e, t) {
        var n, r, o;
        if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (r = a.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, r.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || C.guid++),
            o
          );
      }),
        (C.holdReady = function (e) {
          e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = D),
        (C.isFunction = m),
        (C.isWindow = y),
        (C.camelCase = V),
        (C.type = T),
        (C.now = Date.now),
        (C.isNumeric = function (e) {
          var t = C.type(e);
          return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
        }),
        (C.trim = function (e) {
          return null == e ? '' : (e + '').replace(Vt, '');
        }),
        void 0 ===
          (r = function () {
            return C;
          }.apply(t, [])) || (e.exports = r);
      var Kt = n.jQuery,
        Qt = n.$;
      return (
        (C.noConflict = function (e) {
          return n.$ === C && (n.$ = Qt), e && n.jQuery === C && (n.jQuery = Kt), C;
        }),
        void 0 === o && (n.jQuery = n.$ = C),
        C
      );
    });
  },
]);

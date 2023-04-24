!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
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
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r),
          );
      return o;
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
    (n.p = '/'),
    n((n.s = 1));
})([
  function (e, t, n) {
    var o;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */ !(function (t, n) {
      'use strict';
      'object' == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document) throw new Error('jQuery requires a window with a document');
                return n(e);
              })
        : n(t);
    })('undefined' != typeof window ? window : this, function (n, r) {
      'use strict';
      var i = [],
        a = n.document,
        s = Object.getPrototypeOf,
        l = i.slice,
        c = i.concat,
        d = i.push,
        u = i.indexOf,
        p = {},
        f = p.toString,
        h = p.hasOwnProperty,
        m = h.toString,
        g = m.call(Object),
        b = {},
        x = function (e) {
          return 'function' == typeof e && 'number' != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var o,
          r,
          i = (n = n || a).createElement('script');
        if (((i.text = e), t))
          for (o in v) (r = t[o] || (t.getAttribute && t.getAttribute(o))) && i.setAttribute(o, r);
        n.head.appendChild(i).parentNode.removeChild(i);
      }
      function k(e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? p[f.call(e)] || 'object'
          : typeof e;
      }
      var T = function (e, t) {
          return new T.fn.init(e, t);
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function S(e) {
        var t = !!e && 'length' in e && e.length,
          n = k(e);
        return (
          !x(e) &&
          !y(e) &&
          ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype =
        {
          jquery: '3.4.1',
          constructor: T,
          length: 0,
          toArray: function () {
            return l.call(this);
          },
          get: function (e) {
            return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = T.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return T.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              T.map(this, function (t, n) {
                return e.call(t, n, t);
              }),
            );
          },
          slice: function () {
            return this.pushStack(l.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: d,
          sort: i.sort,
          splice: i.splice,
        }),
        (T.extend = T.fn.extend =
          function () {
            var e,
              t,
              n,
              o,
              r,
              i,
              a = arguments[0] || {},
              s = 1,
              l = arguments.length,
              c = !1;
            for (
              'boolean' == typeof a && ((c = a), (a = arguments[s] || {}), s++),
                'object' == typeof a || x(a) || (a = {}),
                s === l && ((a = this), s--);
              s < l;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (o = e[t]),
                    '__proto__' !== t &&
                      a !== o &&
                      (c && o && (T.isPlainObject(o) || (r = Array.isArray(o)))
                        ? ((n = a[t]),
                          (i = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}),
                          (r = !1),
                          (a[t] = T.extend(c, i, o)))
                        : void 0 !== o && (a[t] = o));
            return a;
          }),
        T.extend({
          expando: 'jQuery' + ('3.4.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || '[object Object]' !== f.call(e)) &&
              (!(t = s(e)) ||
                ('function' == typeof (n = h.call(t, 'constructor') && t.constructor) &&
                  m.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t) {
            w(e, { nonce: t && t.nonce });
          },
          each: function (e, t) {
            var n,
              o = 0;
            if (S(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? '' : (e + '').replace(C, '');
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (S(Object(e)) ? T.merge(n, 'string' == typeof e ? [e] : e) : d.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, o = 0, r = e.length; o < n; o++) e[r++] = t[o];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var o = [], r = 0, i = e.length, a = !n; r < i; r++)
              !t(e[r], r) !== a && o.push(e[r]);
            return o;
          },
          map: function (e, t, n) {
            var o,
              r,
              i = 0,
              a = [];
            if (S(e)) for (o = e.length; i < o; i++) null != (r = t(e[i], i, n)) && a.push(r);
            else for (i in e) null != (r = t(e[i], i, n)) && a.push(r);
            return c.apply([], a);
          },
          guid: 1,
          support: b,
        }),
        'function' == typeof Symbol && (T.fn[Symbol.iterator] = i[Symbol.iterator]),
        T.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
          function (e, t) {
            p['[object ' + t + ']'] = t.toLowerCase();
          },
        );
      var j =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function (e) {
          var t,
            n,
            o,
            r,
            i,
            a,
            s,
            l,
            c,
            d,
            u,
            p,
            f,
            h,
            m,
            g,
            b,
            x,
            y,
            v = 'sizzle' + 1 * new Date(),
            w = e.document,
            k = 0,
            T = 0,
            C = le(),
            S = le(),
            j = le(),
            E = le(),
            N = function (e, t) {
              return e === t && (u = !0), 0;
            },
            A = {}.hasOwnProperty,
            D = [],
            q = D.pop,
            L = D.push,
            z = D.push,
            H = D.slice,
            M = function (e, t) {
              for (var n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
              return -1;
            },
            O =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            U = '[\\x20\\t\\r\\n\\f]',
            P = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
            R =
              '\\[' +
              U +
              '*(' +
              P +
              ')(?:' +
              U +
              '*([*^$|!~]?=)' +
              U +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              P +
              '))|)' +
              U +
              '*\\]',
            I =
              ':(' +
              P +
              ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
              R +
              ')*)|.*)\\)|)',
            B = new RegExp(U + '+', 'g'),
            F = new RegExp('^' + U + '+|((?:^|[^\\\\])(?:\\\\.)*)' + U + '+$', 'g'),
            W = new RegExp('^' + U + '*,' + U + '*'),
            _ = new RegExp('^' + U + '*([>+~]|' + U + ')' + U + '*'),
            $ = new RegExp(U + '|>'),
            X = new RegExp(I),
            V = new RegExp('^' + P + '$'),
            G = {
              ID: new RegExp('^#(' + P + ')'),
              CLASS: new RegExp('^\\.(' + P + ')'),
              TAG: new RegExp('^(' + P + '|[*])'),
              ATTR: new RegExp('^' + R),
              PSEUDO: new RegExp('^' + I),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                  U +
                  '*(even|odd|(([+-]|)(\\d*)n|)' +
                  U +
                  '*(?:([+-]|)' +
                  U +
                  '*(\\d+)|))' +
                  U +
                  '*\\)|)',
                'i',
              ),
              bool: new RegExp('^(?:' + O + ')$', 'i'),
              needsContext: new RegExp(
                '^' +
                  U +
                  '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                  U +
                  '*((?:-\\d)?\\d*)' +
                  U +
                  '*\\)|)(?=[^-]|$)',
                'i',
              ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp('\\\\([\\da-f]{1,6}' + U + '?|(' + U + ')|.)', 'ig'),
            ne = function (e, t, n) {
              var o = '0x' + t - 65536;
              return o != o || n
                ? t
                : o < 0
                ? String.fromCharCode(o + 65536)
                : String.fromCharCode((o >> 10) | 55296, (1023 & o) | 56320);
            },
            oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
              return t
                ? '\0' === e
                  ? '�'
                  : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
                : '\\' + e;
            },
            ie = function () {
              p();
            },
            ae = ve(
              function (e) {
                return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
              },
              { dir: 'parentNode', next: 'legend' },
            );
          try {
            z.apply((D = H.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
          } catch (e) {
            z = {
              apply: D.length
                ? function (e, t) {
                    L.apply(e, H.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, o, r) {
            var i,
              s,
              c,
              d,
              u,
              h,
              b,
              x = t && t.ownerDocument,
              k = t ? t.nodeType : 9;
            if (((o = o || []), 'string' != typeof e || !e || (1 !== k && 9 !== k && 11 !== k)))
              return o;
            if (!r && ((t ? t.ownerDocument || t : w) !== f && p(t), (t = t || f), m)) {
              if (11 !== k && (u = Z.exec(e)))
                if ((i = u[1])) {
                  if (9 === k) {
                    if (!(c = t.getElementById(i))) return o;
                    if (c.id === i) return o.push(c), o;
                  } else if (x && (c = x.getElementById(i)) && y(t, c) && c.id === i)
                    return o.push(c), o;
                } else {
                  if (u[2]) return z.apply(o, t.getElementsByTagName(e)), o;
                  if ((i = u[3]) && n.getElementsByClassName && t.getElementsByClassName)
                    return z.apply(o, t.getElementsByClassName(i)), o;
                }
              if (
                n.qsa &&
                !E[e + ' '] &&
                (!g || !g.test(e)) &&
                (1 !== k || 'object' !== t.nodeName.toLowerCase())
              ) {
                if (((b = e), (x = t), 1 === k && $.test(e))) {
                  for (
                    (d = t.getAttribute('id'))
                      ? (d = d.replace(oe, re))
                      : t.setAttribute('id', (d = v)),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = '#' + d + ' ' + ye(h[s]);
                  (b = h.join(',')), (x = (ee.test(e) && be(t.parentNode)) || t);
                }
                try {
                  return z.apply(o, x.querySelectorAll(b)), o;
                } catch (t) {
                  E(e, !0);
                } finally {
                  d === v && t.removeAttribute('id');
                }
              }
            }
            return l(e.replace(F, '$1'), t, o, r);
          }
          function le() {
            var e = [];
            return function t(n, r) {
              return e.push(n + ' ') > o.cacheLength && delete t[e.shift()], (t[n + ' '] = r);
            };
          }
          function ce(e) {
            return (e[v] = !0), e;
          }
          function de(e) {
            var t = f.createElement('fieldset');
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ue(e, t) {
            for (var n = e.split('|'), r = n.length; r--; ) o.attrHandle[n[r]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (o) return o;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
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
          function me(e) {
            return function (t) {
              return 'form' in t
                ? t.parentNode && !1 === t.disabled
                  ? 'label' in t
                    ? 'label' in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : 'label' in t && t.disabled === e;
            };
          }
          function ge(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, o) {
                  for (var r, i = e([], n.length, t), a = i.length; a--; )
                    n[(r = i[a])] && (n[r] = !(o[r] = n[r]));
                })
              );
            });
          }
          function be(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (i = se.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !Y.test(t || (n && n.nodeName) || 'HTML');
            }),
          (p = se.setDocument =
            function (e) {
              var t,
                r,
                a = e ? e.ownerDocument || e : w;
              return a !== f && 9 === a.nodeType && a.documentElement
                ? ((h = (f = a).documentElement),
                  (m = !i(f)),
                  w !== f &&
                    (r = f.defaultView) &&
                    r.top !== r &&
                    (r.addEventListener
                      ? r.addEventListener('unload', ie, !1)
                      : r.attachEvent && r.attachEvent('onunload', ie)),
                  (n.attributes = de(function (e) {
                    return (e.className = 'i'), !e.getAttribute('className');
                  })),
                  (n.getElementsByTagName = de(function (e) {
                    return e.appendChild(f.createComment('')), !e.getElementsByTagName('*').length;
                  })),
                  (n.getElementsByClassName = K.test(f.getElementsByClassName)),
                  (n.getById = de(function (e) {
                    return (
                      (h.appendChild(e).id = v),
                      !f.getElementsByName || !f.getElementsByName(v).length
                    );
                  })),
                  n.getById
                    ? ((o.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute('id') === t;
                        };
                      }),
                      (o.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((o.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                          return n && n.value === t;
                        };
                      }),
                      (o.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n,
                            o,
                            r,
                            i = t.getElementById(e);
                          if (i) {
                            if ((n = i.getAttributeNode('id')) && n.value === e) return [i];
                            for (r = t.getElementsByName(e), o = 0; (i = r[o++]); )
                              if ((n = i.getAttributeNode('id')) && n.value === e) return [i];
                          }
                          return [];
                        }
                      })),
                  (o.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          o = [],
                          r = 0,
                          i = t.getElementsByTagName(e);
                        if ('*' === e) {
                          for (; (n = i[r++]); ) 1 === n.nodeType && o.push(n);
                          return o;
                        }
                        return i;
                      }),
                  (o.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && m)
                        return t.getElementsByClassName(e);
                    }),
                  (b = []),
                  (g = []),
                  (n.qsa = K.test(f.querySelectorAll)) &&
                    (de(function (e) {
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        v +
                        "'></a><select id='" +
                        v +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          g.push('[*^$]=' + U + '*(?:\'\'|"")'),
                        e.querySelectorAll('[selected]').length ||
                          g.push('\\[' + U + '*(?:value|' + O + ')'),
                        e.querySelectorAll('[id~=' + v + '-]').length || g.push('~='),
                        e.querySelectorAll(':checked').length || g.push(':checked'),
                        e.querySelectorAll('a#' + v + '+*').length || g.push('.#.+[+~]');
                    }),
                    de(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = f.createElement('input');
                      t.setAttribute('type', 'hidden'),
                        e.appendChild(t).setAttribute('name', 'D'),
                        e.querySelectorAll('[name=d]').length && g.push('name' + U + '*[*^$|!~]?='),
                        2 !== e.querySelectorAll(':enabled').length &&
                          g.push(':enabled', ':disabled'),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(':disabled').length &&
                          g.push(':enabled', ':disabled'),
                        e.querySelectorAll('*,:x'),
                        g.push(',.*:');
                    })),
                  (n.matchesSelector = K.test(
                    (x =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector),
                  )) &&
                    de(function (e) {
                      (n.disconnectedMatch = x.call(e, '*')),
                        x.call(e, "[s!='']:x"),
                        b.push('!=', I);
                    }),
                  (g = g.length && new RegExp(g.join('|'))),
                  (b = b.length && new RegExp(b.join('|'))),
                  (t = K.test(h.compareDocumentPosition)),
                  (y =
                    t || K.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            o = t && t.parentNode;
                          return (
                            e === o ||
                            !(
                              !o ||
                              1 !== o.nodeType ||
                              !(n.contains
                                ? n.contains(o)
                                : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (N = t
                    ? function (e, t) {
                        if (e === t) return (u = !0), 0;
                        var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return (
                          o ||
                          (1 &
                            (o =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached && t.compareDocumentPosition(e) === o)
                            ? e === f || (e.ownerDocument === w && y(w, e))
                              ? -1
                              : t === f || (t.ownerDocument === w && y(w, t))
                              ? 1
                              : d
                              ? M(d, e) - M(d, t)
                              : 0
                            : 4 & o
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (u = !0), 0;
                        var n,
                          o = 0,
                          r = e.parentNode,
                          i = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!r || !i)
                          return e === f
                            ? -1
                            : t === f
                            ? 1
                            : r
                            ? -1
                            : i
                            ? 1
                            : d
                            ? M(d, e) - M(d, t)
                            : 0;
                        if (r === i) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[o] === s[o]; ) o++;
                        return o ? pe(a[o], s[o]) : a[o] === w ? -1 : s[o] === w ? 1 : 0;
                      }),
                  f)
                : f;
            }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== f && p(e),
              n.matchesSelector && m && !E[t + ' '] && (!b || !b.test(t)) && (!g || !g.test(t)))
            )
              try {
                var o = x.call(e, t);
                if (o || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType))
                  return o;
              } catch (e) {
                E(t, !0);
              }
            return se(t, f, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), y(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) !== f && p(e);
            var r = o.attrHandle[t.toLowerCase()],
              i = r && A.call(o.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
            return void 0 !== i
              ? i
              : n.attributes || !m
              ? e.getAttribute(t)
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + '').replace(oe, re);
          }),
          (se.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              o = [],
              r = 0,
              i = 0;
            if (((u = !n.detectDuplicates), (d = !n.sortStable && e.slice(0)), e.sort(N), u)) {
              for (; (t = e[i++]); ) t === e[i] && (r = o.push(i));
              for (; r--; ) e.splice(o[r], 1);
            }
            return (d = null), e;
          }),
          (r = se.getText =
            function (e) {
              var t,
                n = '',
                o = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ('string' == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[o++]); ) n += r(t);
              return n;
            }),
          ((o = se.selectors =
            {
              cacheLength: 50,
              createPseudo: ce,
              match: G,
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
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ('even' === e[3] || 'odd' === e[3]))),
                        (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || '')
                        : n &&
                          X.test(n) &&
                          (t = a(n, !0)) &&
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
                  var t = C[e + ' '];
                  return (
                    t ||
                    ((t = new RegExp('(^|' + U + ')' + e + '(' + U + '|$)')) &&
                      C(e, function (e) {
                        return t.test(
                          ('string' == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                            '',
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (o) {
                    var r = se.attr(o, e);
                    return null == r
                      ? '!=' === t
                      : !t ||
                          ((r += ''),
                          '=' === t
                            ? r === n
                            : '!=' === t
                            ? r !== n
                            : '^=' === t
                            ? n && 0 === r.indexOf(n)
                            : '*=' === t
                            ? n && r.indexOf(n) > -1
                            : '$=' === t
                            ? n && r.slice(-n.length) === n
                            : '~=' === t
                            ? (' ' + r.replace(B, ' ') + ' ').indexOf(n) > -1
                            : '|=' === t && (r === n || r.slice(0, n.length + 1) === n + '-'));
                  };
                },
                CHILD: function (e, t, n, o, r) {
                  var i = 'nth' !== e.slice(0, 3),
                    a = 'last' !== e.slice(-4),
                    s = 'of-type' === t;
                  return 1 === o && 0 === r
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var c,
                          d,
                          u,
                          p,
                          f,
                          h,
                          m = i !== a ? 'nextSibling' : 'previousSibling',
                          g = t.parentNode,
                          b = s && t.nodeName.toLowerCase(),
                          x = !l && !s,
                          y = !1;
                        if (g) {
                          if (i) {
                            for (; m; ) {
                              for (p = t; (p = p[m]); )
                                if (s ? p.nodeName.toLowerCase() === b : 1 === p.nodeType)
                                  return !1;
                              h = m = 'only' === e && !h && 'nextSibling';
                            }
                            return !0;
                          }
                          if (((h = [a ? g.firstChild : g.lastChild]), a && x)) {
                            for (
                              y =
                                (f =
                                  (c =
                                    (d =
                                      (u = (p = g)[v] || (p[v] = {}))[p.uniqueID] ||
                                      (u[p.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2],
                                p = f && g.childNodes[f];
                              (p = (++f && p && p[m]) || (y = f = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++y && p === t) {
                                d[e] = [k, f, y];
                                break;
                              }
                          } else if (
                            (x &&
                              (y = f =
                                (c =
                                  (d =
                                    (u = (p = t)[v] || (p[v] = {}))[p.uniqueID] ||
                                    (u[p.uniqueID] = {}))[e] || [])[0] === k && c[1]),
                            !1 === y)
                          )
                            for (
                              ;
                              (p = (++f && p && p[m]) || (y = f = 0) || h.pop()) &&
                              ((s ? p.nodeName.toLowerCase() !== b : 1 !== p.nodeType) ||
                                !++y ||
                                (x &&
                                  ((d =
                                    (u = p[v] || (p[v] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[
                                    e
                                  ] = [k, y]),
                                p !== t));

                            );
                          return (y -= r) === o || (y % o == 0 && y / o >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    r =
                      o.pseudos[e] ||
                      o.setFilters[e.toLowerCase()] ||
                      se.error('unsupported pseudo: ' + e);
                  return r[v]
                    ? r(t)
                    : r.length > 1
                    ? ((n = [e, e, '', t]),
                      o.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ce(function (e, n) {
                            for (var o, i = r(e, t), a = i.length; a--; )
                              e[(o = M(e, i[a]))] = !(n[o] = i[a]);
                          })
                        : function (e) {
                            return r(e, 0, n);
                          })
                    : r;
                },
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                    n = [],
                    o = s(e.replace(F, '$1'));
                  return o[v]
                    ? ce(function (e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--; )
                          (i = a[s]) && (e[s] = !(t[s] = i));
                      })
                    : function (e, r, i) {
                        return (t[0] = e), o(t, null, i, n), (t[0] = null), !n.pop();
                      };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: ce(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || r(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ce(function (e) {
                  return (
                    V.test(e || '') || se.error('unsupported lang: ' + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if ((n = m ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
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
                    e === f.activeElement &&
                    (!f.hasFocus || f.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: me(!1),
                disabled: me(!0),
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
                  return !o.pseudos.empty(e);
                },
                header: function (e) {
                  return J.test(e.nodeName);
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
                first: ge(function () {
                  return [0];
                }),
                last: ge(function (e, t) {
                  return [t - 1];
                }),
                eq: ge(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ge(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ge(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ge(function (e, t, n) {
                  for (var o = n < 0 ? n + t : n > t ? t : n; --o >= 0; ) e.push(o);
                  return e;
                }),
                gt: ge(function (e, t, n) {
                  for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
                  return e;
                }),
              },
            }).pseudos.nth = o.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            o.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) o.pseudos[t] = he(t);
          function xe() {}
          function ye(e) {
            for (var t = 0, n = e.length, o = ''; t < n; t++) o += e[t].value;
            return o;
          }
          function ve(e, t, n) {
            var o = t.dir,
              r = t.next,
              i = r || o,
              a = n && 'parentNode' === i,
              s = T++;
            return t.first
              ? function (t, n, r) {
                  for (; (t = t[o]); ) if (1 === t.nodeType || a) return e(t, n, r);
                  return !1;
                }
              : function (t, n, l) {
                  var c,
                    d,
                    u,
                    p = [k, s];
                  if (l) {
                    for (; (t = t[o]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[o]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((d = (u = t[v] || (t[v] = {}))[t.uniqueID] || (u[t.uniqueID] = {})),
                          r && r === t.nodeName.toLowerCase())
                        )
                          t = t[o] || t;
                        else {
                          if ((c = d[i]) && c[0] === k && c[1] === s) return (p[2] = c[2]);
                          if (((d[i] = p), (p[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, o) {
                  for (var r = e.length; r--; ) if (!e[r](t, n, o)) return !1;
                  return !0;
                }
              : e[0];
          }
          function ke(e, t, n, o, r) {
            for (var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
              (i = e[s]) && ((n && !n(i, o, r)) || (a.push(i), c && t.push(s)));
            return a;
          }
          function Te(e, t, n, o, r, i) {
            return (
              o && !o[v] && (o = Te(o)),
              r && !r[v] && (r = Te(r, i)),
              ce(function (i, a, s, l) {
                var c,
                  d,
                  u,
                  p = [],
                  f = [],
                  h = a.length,
                  m =
                    i ||
                    (function (e, t, n) {
                      for (var o = 0, r = t.length; o < r; o++) se(e, t[o], n);
                      return n;
                    })(t || '*', s.nodeType ? [s] : s, []),
                  g = !e || (!i && t) ? m : ke(m, p, e, s, l),
                  b = n ? (r || (i ? e : h || o) ? [] : a) : g;
                if ((n && n(g, b, s, l), o))
                  for (c = ke(b, f), o(c, [], s, l), d = c.length; d--; )
                    (u = c[d]) && (b[f[d]] = !(g[f[d]] = u));
                if (i) {
                  if (r || e) {
                    if (r) {
                      for (c = [], d = b.length; d--; ) (u = b[d]) && c.push((g[d] = u));
                      r(null, (b = []), c, l);
                    }
                    for (d = b.length; d--; )
                      (u = b[d]) && (c = r ? M(i, u) : p[d]) > -1 && (i[c] = !(a[c] = u));
                  }
                } else (b = ke(b === a ? b.splice(h, b.length) : b)), r ? r(null, a, b, l) : z.apply(a, b);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                r,
                i = e.length,
                a = o.relative[e[0].type],
                s = a || o.relative[' '],
                l = a ? 1 : 0,
                d = ve(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0,
                ),
                u = ve(
                  function (e) {
                    return M(t, e) > -1;
                  },
                  s,
                  !0,
                ),
                p = [
                  function (e, n, o) {
                    var r = (!a && (o || n !== c)) || ((t = n).nodeType ? d(e, n, o) : u(e, n, o));
                    return (t = null), r;
                  },
                ];
              l < i;
              l++
            )
              if ((n = o.relative[e[l].type])) p = [ve(we(p), n)];
              else {
                if ((n = o.filter[e[l].type].apply(null, e[l].matches))[v]) {
                  for (r = ++l; r < i && !o.relative[e[r].type]; r++);
                  return Te(
                    l > 1 && we(p),
                    l > 1 &&
                      ye(
                        e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' }),
                      ).replace(F, '$1'),
                    n,
                    l < r && Ce(e.slice(l, r)),
                    r < i && Ce((e = e.slice(r))),
                    r < i && ye(e),
                  );
                }
                p.push(n);
              }
            return we(p);
          }
          return (
            (xe.prototype = o.filters = o.pseudos),
            (o.setFilters = new xe()),
            (a = se.tokenize =
              function (e, t) {
                var n,
                  r,
                  i,
                  a,
                  s,
                  l,
                  c,
                  d = S[e + ' '];
                if (d) return t ? 0 : d.slice(0);
                for (s = e, l = [], c = o.preFilter; s; ) {
                  for (a in ((n && !(r = W.exec(s))) ||
                    (r && (s = s.slice(r[0].length) || s), l.push((i = []))),
                  (n = !1),
                  (r = _.exec(s)) &&
                    ((n = r.shift()),
                    i.push({ value: n, type: r[0].replace(F, ' ') }),
                    (s = s.slice(n.length))),
                  o.filter))
                    !(r = G[a].exec(s)) ||
                      (c[a] && !(r = c[a](r))) ||
                      ((n = r.shift()),
                      i.push({ value: n, type: a, matches: r }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : S(e, l).slice(0);
              }),
            (s = se.compile =
              function (e, t) {
                var n,
                  r = [],
                  i = [],
                  s = j[e + ' '];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = Ce(t[n]))[v] ? r.push(s) : i.push(s);
                  (s = j(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        r = e.length > 0,
                        i = function (i, a, s, l, d) {
                          var u,
                            h,
                            g,
                            b = 0,
                            x = '0',
                            y = i && [],
                            v = [],
                            w = c,
                            T = i || (r && o.find.TAG('*', d)),
                            C = (k += null == w ? 1 : Math.random() || 0.1),
                            S = T.length;
                          for (d && (c = a === f || a || d); x !== S && null != (u = T[x]); x++) {
                            if (r && u) {
                              for (
                                h = 0, a || u.ownerDocument === f || (p(u), (s = !m));
                                (g = e[h++]);

                              )
                                if (g(u, a || f, s)) {
                                  l.push(u);
                                  break;
                                }
                              d && (k = C);
                            }
                            n && ((u = !g && u) && b--, i && y.push(u));
                          }
                          if (((b += x), n && x !== b)) {
                            for (h = 0; (g = t[h++]); ) g(y, v, a, s);
                            if (i) {
                              if (b > 0) for (; x--; ) y[x] || v[x] || (v[x] = q.call(l));
                              v = ke(v);
                            }
                            z.apply(l, v),
                              d && !i && v.length > 0 && b + t.length > 1 && se.uniqueSort(l);
                          }
                          return d && ((k = C), (c = w)), y;
                        };
                      return n ? ce(i) : i;
                    })(i, r),
                  )).selector = e;
                }
                return s;
              }),
            (l = se.select =
              function (e, t, n, r) {
                var i,
                  l,
                  c,
                  d,
                  u,
                  p = 'function' == typeof e && e,
                  f = !r && a((e = p.selector || e));
                if (((n = n || []), 1 === f.length)) {
                  if (
                    (l = f[0] = f[0].slice(0)).length > 2 &&
                    'ID' === (c = l[0]).type &&
                    9 === t.nodeType &&
                    m &&
                    o.relative[l[1].type]
                  ) {
                    if (!(t = (o.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                  }
                  for (
                    i = G.needsContext.test(e) ? 0 : l.length;
                    i-- && ((c = l[i]), !o.relative[(d = c.type)]);

                  )
                    if (
                      (u = o.find[d]) &&
                      (r = u(
                        c.matches[0].replace(te, ne),
                        (ee.test(l[0].type) && be(t.parentNode)) || t,
                      ))
                    ) {
                      if ((l.splice(i, 1), !(e = r.length && ye(l)))) return z.apply(n, r), n;
                      break;
                    }
                }
                return (p || s(e, f))(r, t, !m, n, !t || (ee.test(e) && be(t.parentNode)) || t), n;
              }),
            (n.sortStable = v.split('').sort(N).join('') === v),
            (n.detectDuplicates = !!u),
            p(),
            (n.sortDetached = de(function (e) {
              return 1 & e.compareDocumentPosition(f.createElement('fieldset'));
            })),
            de(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
            }) ||
              ue('type|href|height|width', function (e, t, n) {
                if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              de(function (e) {
                return (
                  (e.innerHTML = '<input/>'),
                  e.firstChild.setAttribute('value', ''),
                  '' === e.firstChild.getAttribute('value')
                );
              })) ||
              ue('value', function (e, t, n) {
                if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
              }),
            de(function (e) {
              return null == e.getAttribute('disabled');
            }) ||
              ue(O, function (e, t, n) {
                var o;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (o = e.getAttributeNode(t)) && o.specified
                    ? o.value
                    : null;
              }),
            se
          );
        })(n);
      (T.find = j),
        (T.expr = j.selectors),
        (T.expr[':'] = T.expr.pseudos),
        (T.uniqueSort = T.unique = j.uniqueSort),
        (T.text = j.getText),
        (T.isXMLDoc = j.isXML),
        (T.contains = j.contains),
        (T.escapeSelector = j.escape);
      var E = function (e, t, n) {
          for (var o = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && T(e).is(n)) break;
              o.push(e);
            }
          return o;
        },
        N = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        A = T.expr.match.needsContext;
      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return x(t)
          ? T.grep(e, function (e, o) {
              return !!t.call(e, o, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : 'string' != typeof t
          ? T.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var o = t[0];
        return (
          n && (e = ':not(' + e + ')'),
          1 === t.length && 1 === o.nodeType
            ? T.find.matchesSelector(o, e)
              ? [o]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                }),
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              o = this.length,
              r = this;
            if ('string' != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < o; t++) if (T.contains(r[t], this)) return !0;
                }),
              );
            for (n = this.pushStack([]), t = 0; t < o; t++) T.find(e, r[t], n);
            return o > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is: function (e) {
            return !!L(this, 'string' == typeof e && A.test(e) ? T(e) : e || [], !1).length;
          },
        });
      var z,
        H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var o, r;
        if (!e) return this;
        if (((n = n || z), 'string' == typeof e)) {
          if (
            !(o =
              '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : H.exec(e)) ||
            (!o[1] && t)
          )
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (o[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(this, T.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : a, !0)),
              q.test(o[1]) && T.isPlainObject(t))
            )
              for (o in t) x(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this;
          }
          return (r = a.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this;
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : x(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (z = T(a));
      var M = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
      function U(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            o = 0,
            r = this.length,
            i = [],
            a = 'string' != typeof e && T(e);
          if (!A.test(e))
            for (; o < r; o++)
              for (n = this[o]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  i.push(n);
                  break;
                }
          return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i);
        },
        index: function (e) {
          return e
            ? 'string' == typeof e
              ? u.call(T(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return E(e, 'parentNode');
            },
            parentsUntil: function (e, t, n) {
              return E(e, 'parentNode', n);
            },
            next: function (e) {
              return U(e, 'nextSibling');
            },
            prev: function (e) {
              return U(e, 'previousSibling');
            },
            nextAll: function (e) {
              return E(e, 'nextSibling');
            },
            prevAll: function (e) {
              return E(e, 'previousSibling');
            },
            nextUntil: function (e, t, n) {
              return E(e, 'nextSibling', n);
            },
            prevUntil: function (e, t, n) {
              return E(e, 'previousSibling', n);
            },
            siblings: function (e) {
              return N((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return N(e.firstChild);
            },
            contents: function (e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (D(e, 'template') && (e = e.content || e), T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, o) {
              var r = T.map(this, t, n);
              return (
                'Until' !== e.slice(-5) && (o = n),
                o && 'string' == typeof o && (r = T.filter(o, r)),
                this.length > 1 && (O[e] || T.uniqueSort(r), M.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          },
        );
      var P = /[^\x20\t\r\n\f]+/g;
      function R(e) {
        return e;
      }
      function I(e) {
        throw e;
      }
      function B(e, t, n, o) {
        var r;
        try {
          e && x((r = e.promise))
            ? r.call(e).done(t).fail(n)
            : e && x((r = e.then))
            ? r.call(e, t, n)
            : t.apply(void 0, [e].slice(o));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          'string' == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(P) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          o,
          r,
          i = [],
          a = [],
          s = -1,
          l = function () {
            for (r = r || e.once, o = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < i.length; )
                !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = i.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (i = n ? [] : '');
          },
          c = {
            add: function () {
              return (
                i &&
                  (n && !t && ((s = i.length - 1), a.push(n)),
                  (function t(n) {
                    T.each(n, function (n, o) {
                      x(o)
                        ? (e.unique && c.has(o)) || i.push(o)
                        : o && o.length && 'string' !== k(o) && t(o);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (r = a = []), (i = n = ''), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (r = a = []), n || t || (i = n = ''), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, n) {
              return (
                r || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || l()), this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!o;
            },
          };
        return c;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                ['notify', 'progress', T.Callbacks('memory'), T.Callbacks('memory'), 2],
                [
                  'resolve',
                  'done',
                  T.Callbacks('once memory'),
                  T.Callbacks('once memory'),
                  0,
                  'resolved',
                ],
                [
                  'reject',
                  'fail',
                  T.Callbacks('once memory'),
                  T.Callbacks('once memory'),
                  1,
                  'rejected',
                ],
              ],
              o = 'pending',
              r = {
                state: function () {
                  return o;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return r.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, o) {
                      var r = x(e[o[4]]) && e[o[4]];
                      i[o[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && x(e.promise)
                          ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                          : n[o[0] + 'With'](this, r ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, o, r) {
                  var i = 0;
                  function a(e, t, o, r) {
                    return function () {
                      var s = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < i)) {
                            if ((n = o.apply(s, l)) === t.promise())
                              throw new TypeError('Thenable self-resolution');
                            (c = n && ('object' == typeof n || 'function' == typeof n) && n.then),
                              x(c)
                                ? r
                                  ? c.call(n, a(i, t, R, r), a(i, t, I, r))
                                  : (i++,
                                    c.call(
                                      n,
                                      a(i, t, R, r),
                                      a(i, t, I, r),
                                      a(i, t, R, t.notifyWith),
                                    ))
                                : (o !== R && ((s = void 0), (l = [n])),
                                  (r || t.resolveWith)(s, l));
                          }
                        },
                        d = r
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, d.stackTrace),
                                  e + 1 >= i &&
                                    (o !== I && ((s = void 0), (l = [n])), t.rejectWith(s, l));
                              }
                            };
                      e
                        ? d()
                        : (T.Deferred.getStackHook && (d.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(d));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(a(0, n, x(r) ? r : R, n.notifyWith)),
                      t[1][3].add(a(0, n, x(e) ? e : R)),
                      t[2][3].add(a(0, n, x(o) ? o : I));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, r) : r;
                },
              },
              i = {};
            return (
              T.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (r[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        o = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock,
                    ),
                  a.add(n[3].fire),
                  (i[n[0]] = function () {
                    return i[n[0] + 'With'](this === i ? void 0 : this, arguments), this;
                  }),
                  (i[n[0] + 'With'] = a.fireWith);
              }),
              r.promise(i),
              e && e.call(i, i),
              i
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              o = Array(n),
              r = l.call(arguments),
              i = T.Deferred(),
              a = function (e) {
                return function (n) {
                  (o[e] = this),
                    (r[e] = arguments.length > 1 ? l.call(arguments) : n),
                    --t || i.resolveWith(o, r);
                };
              };
            if (
              t <= 1 &&
              (B(e, i.done(a(n)).resolve, i.reject, !t),
              'pending' === i.state() || x(r[n] && r[n].then))
            )
              return i.then();
            for (; n--; ) B(r[n], a(n), i.reject);
            return i.promise();
          },
        });
      var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          F.test(e.name) &&
          n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var W = T.Deferred();
      function _() {
        a.removeEventListener('DOMContentLoaded', _), n.removeEventListener('load', _), T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          W.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0), (!0 !== e && --T.readyWait > 0) || W.resolveWith(a, [T]));
          },
        }),
        (T.ready.then = W.then),
        'complete' === a.readyState || ('loading' !== a.readyState && !a.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (a.addEventListener('DOMContentLoaded', _), n.addEventListener('load', _));
      var $ = function (e, t, n, o, r, i, a) {
          var s = 0,
            l = e.length,
            c = null == n;
          if ('object' === k(n)) for (s in ((r = !0), n)) $(e, t, s, n[s], !0, i, a);
          else if (
            void 0 !== o &&
            ((r = !0),
            x(o) || (a = !0),
            c &&
              (a
                ? (t.call(e, o), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(T(e), n);
                  }))),
            t)
          )
            for (; s < l; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
          return r ? e : c ? t.call(e) : l ? t(e[0], n) : i;
        },
        X = /^-ms-/,
        V = /-([a-z])/g;
      function G(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace(X, 'ms-').replace(V, G);
      }
      var Q = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function J() {
        this.expando = T.expando + J.uid++;
      }
      (J.uid = 1),
        (J.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Q(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
              t
            );
          },
          set: function (e, t, n) {
            var o,
              r = this.cache(e);
            if ('string' == typeof t) r[Y(t)] = n;
            else for (o in t) r[Y(o)] = t[o];
            return r;
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && 'string' == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              o = e[this.expando];
            if (void 0 !== o) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in o ? [t] : t.match(P) || [])
                  .length;
                for (; n--; ) delete o[t[n]];
              }
              (void 0 === t || T.isEmptyObject(o)) &&
                (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var K = new J(),
        Z = new J(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((o = 'data-' + t.replace(te, '-$&').toLowerCase()),
            'string' == typeof (n = e.getAttribute(o)))
          ) {
            try {
              n = (function (e) {
                return (
                  'true' === e ||
                  ('false' !== e &&
                    ('null' === e ? null : e === +e + '' ? +e : ee.test(e) ? JSON.parse(e) : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return Z.hasData(e) || K.hasData(e);
        },
        data: function (e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function (e, t) {
          Z.remove(e, t);
        },
        _data: function (e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function (e, t) {
          K.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              o,
              r,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === e) {
              if (this.length && ((r = Z.get(i)), 1 === i.nodeType && !K.get(i, 'hasDataAttrs'))) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (o = a[n].name).indexOf('data-') &&
                    ((o = Y(o.slice(5))), ne(i, o, r[o]));
                K.set(i, 'hasDataAttrs', !0);
              }
              return r;
            }
            return 'object' == typeof e
              ? this.each(function () {
                  Z.set(this, e);
                })
              : $(
                  this,
                  function (t) {
                    var n;
                    if (i && void 0 === t)
                      return void 0 !== (n = Z.get(i, e))
                        ? n
                        : void 0 !== (n = ne(i, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      Z.set(this, e, t);
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
              Z.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var o;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (o = K.get(e, t)),
                n && (!o || Array.isArray(n) ? (o = K.access(e, t, T.makeArray(n))) : o.push(n)),
                o || []
              );
          },
          dequeue: function (e, t) {
            t = t || 'fx';
            var n = T.queue(e, t),
              o = n.length,
              r = n.shift(),
              i = T._queueHooks(e, t);
            'inprogress' === r && ((r = n.shift()), o--),
              r &&
                ('fx' === t && n.unshift('inprogress'),
                delete i.stop,
                r.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  i,
                )),
              !o && i && i.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return (
              K.get(e, n) ||
              K.access(e, n, {
                empty: T.Callbacks('once memory').add(function () {
                  K.remove(e, [t + 'queue', n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      'fx' === e && 'inprogress' !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || 'fx', []);
          },
          promise: function (e, t) {
            var n,
              o = 1,
              r = T.Deferred(),
              i = this,
              a = this.length,
              s = function () {
                --o || r.resolveWith(i, [i]);
              };
            for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; a--; )
              (n = K.get(i[a], e + 'queueHooks')) && n.empty && (o++, n.empty.add(s));
            return s(), r.promise(t);
          },
        });
      var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp('^(?:([+-])=|)(' + oe + ')([a-z%]*)$', 'i'),
        ie = ['Top', 'Right', 'Bottom', 'Left'],
        ae = a.documentElement,
        se = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        le = { composed: !0 };
      ae.getRootNode &&
        (se = function (e) {
          return T.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
        });
      var ce = function (e, t) {
          return (
            'none' === (e = t || e).style.display ||
            ('' === e.style.display && se(e) && 'none' === T.css(e, 'display'))
          );
        },
        de = function (e, t, n, o) {
          var r,
            i,
            a = {};
          for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((r = n.apply(e, o || [])), t)) e.style[i] = a[i];
          return r;
        };
      function ue(e, t, n, o) {
        var r,
          i,
          a = 20,
          s = o
            ? function () {
                return o.cur();
              }
            : function () {
                return T.css(e, t, '');
              },
          l = s(),
          c = (n && n[3]) || (T.cssNumber[t] ? '' : 'px'),
          d = e.nodeType && (T.cssNumber[t] || ('px' !== c && +l)) && re.exec(T.css(e, t));
        if (d && d[3] !== c) {
          for (l /= 2, c = c || d[3], d = +l || 1; a--; )
            T.style(e, t, d + c), (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (a = 0), (d /= i);
          (d *= 2), T.style(e, t, d + c), (n = n || []);
        }
        return (
          n &&
            ((d = +d || +l || 0),
            (r = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
            o && ((o.unit = c), (o.start = d), (o.end = r))),
          r
        );
      }
      var pe = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          o = e.nodeName,
          r = pe[o];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(o))),
          (r = T.css(t, 'display')),
          t.parentNode.removeChild(t),
          'none' === r && (r = 'block'),
          (pe[o] = r),
          r)
        );
      }
      function he(e, t) {
        for (var n, o, r = [], i = 0, a = e.length; i < a; i++)
          (o = e[i]).style &&
            ((n = o.style.display),
            t
              ? ('none' === n &&
                  ((r[i] = K.get(o, 'display') || null), r[i] || (o.style.display = '')),
                '' === o.style.display && ce(o) && (r[i] = fe(o)))
              : 'none' !== n && ((r[i] = 'none'), K.set(o, 'display', n)));
        for (i = 0; i < a; i++) null != r[i] && (e[i].style.display = r[i]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return he(this, !0);
        },
        hide: function () {
          return he(this);
        },
        toggle: function (e) {
          return 'boolean' == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ce(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var me = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        be = /^$|^module$|\/(?:java|ecma)script/i,
        xe = {
          option: [1, "<select multiple='multiple'>", '</select>'],
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', ''],
        };
      function ye(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
          void 0 === t || (t && D(e, t)) ? T.merge([e], n) : n
        );
      }
      function ve(e, t) {
        for (var n = 0, o = e.length; n < o; n++)
          K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'));
      }
      (xe.optgroup = xe.option),
        (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
        (xe.th = xe.td);
      var we,
        ke,
        Te = /<|&#?\w+;/;
      function Ce(e, t, n, o, r) {
        for (
          var i, a, s, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length;
          f < h;
          f++
        )
          if ((i = e[f]) || 0 === i)
            if ('object' === k(i)) T.merge(p, i.nodeType ? [i] : i);
            else if (Te.test(i)) {
              for (
                a = a || u.appendChild(t.createElement('div')),
                  s = (ge.exec(i) || ['', ''])[1].toLowerCase(),
                  l = xe[s] || xe._default,
                  a.innerHTML = l[1] + T.htmlPrefilter(i) + l[2],
                  d = l[0];
                d--;

              )
                a = a.lastChild;
              T.merge(p, a.childNodes), ((a = u.firstChild).textContent = '');
            } else p.push(t.createTextNode(i));
        for (u.textContent = '', f = 0; (i = p[f++]); )
          if (o && T.inArray(i, o) > -1) r && r.push(i);
          else if (((c = se(i)), (a = ye(u.appendChild(i), 'script')), c && ve(a), n))
            for (d = 0; (i = a[d++]); ) be.test(i.type || '') && n.push(i);
        return u;
      }
      (we = a.createDocumentFragment().appendChild(a.createElement('div'))),
        (ke = a.createElement('input')).setAttribute('type', 'radio'),
        ke.setAttribute('checked', 'checked'),
        ke.setAttribute('name', 't'),
        we.appendChild(ke),
        (b.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (we.innerHTML = '<textarea>x</textarea>'),
        (b.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue);
      var Se = /^key/,
        je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;
      function Ne() {
        return !0;
      }
      function Ae() {
        return !1;
      }
      function De(e, t) {
        return (
          (e ===
            (function () {
              try {
                return a.activeElement;
              } catch (e) {}
            })()) ==
          ('focus' === t)
        );
      }
      function qe(e, t, n, o, r, i) {
        var a, s;
        if ('object' == typeof t) {
          for (s in ('string' != typeof n && ((o = o || n), (n = void 0)), t))
            qe(e, s, n, o, t[s], i);
          return e;
        }
        if (
          (null == o && null == r
            ? ((r = n), (o = n = void 0))
            : null == r &&
              ('string' == typeof n ? ((r = o), (o = void 0)) : ((r = o), (o = n), (n = void 0))),
          !1 === r)
        )
          r = Ae;
        else if (!r) return e;
        return (
          1 === i &&
            ((a = r),
            ((r = function (e) {
              return T().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, r, o, n);
          })
        );
      }
      function Le(e, t, n) {
        n
          ? (K.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var o,
                  r,
                  i = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();
                  else if (
                    ((i = l.call(arguments)),
                    K.set(this, t, i),
                    (o = n(this, t)),
                    this[t](),
                    i !== (r = K.get(this, t)) || o ? K.set(this, t, !1) : (r = {}),
                    i !== r)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), r.value;
                } else
                  i.length &&
                    (K.set(this, t, {
                      value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === K.get(e, t) && T.event.add(e, t, Ne);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, o, r) {
          var i,
            a,
            s,
            l,
            c,
            d,
            u,
            p,
            f,
            h,
            m,
            g = K.get(e);
          if (g)
            for (
              n.handler && ((n = (i = n).handler), (r = i.selector)),
                r && T.find.matchesSelector(ae, r),
                n.guid || (n.guid = T.guid++),
                (l = g.events) || (l = g.events = {}),
                (a = g.handle) ||
                  (a = g.handle =
                    function (t) {
                      return void 0 !== T && T.event.triggered !== t.type
                        ? T.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || '').match(P) || ['']).length;
              c--;

            )
              (f = m = (s = Ee.exec(t[c]) || [])[1]),
                (h = (s[2] || '').split('.').sort()),
                f &&
                  ((u = T.event.special[f] || {}),
                  (f = (r ? u.delegateType : u.bindType) || f),
                  (u = T.event.special[f] || {}),
                  (d = T.extend(
                    {
                      type: f,
                      origType: m,
                      data: o,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && T.expr.match.needsContext.test(r),
                      namespace: h.join('.'),
                    },
                    i,
                  )),
                  (p = l[f]) ||
                    (((p = l[f] = []).delegateCount = 0),
                    (u.setup && !1 !== u.setup.call(e, o, h, a)) ||
                      (e.addEventListener && e.addEventListener(f, a))),
                  u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                  r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                  (T.event.global[f] = !0));
        },
        remove: function (e, t, n, o, r) {
          var i,
            a,
            s,
            l,
            c,
            d,
            u,
            p,
            f,
            h,
            m,
            g = K.hasData(e) && K.get(e);
          if (g && (l = g.events)) {
            for (c = (t = (t || '').match(P) || ['']).length; c--; )
              if (
                ((f = m = (s = Ee.exec(t[c]) || [])[1]), (h = (s[2] || '').split('.').sort()), f)
              ) {
                for (
                  u = T.event.special[f] || {},
                    p = l[(f = (o ? u.delegateType : u.bindType) || f)] || [],
                    s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                    a = i = p.length;
                  i--;

                )
                  (d = p[i]),
                    (!r && m !== d.origType) ||
                      (n && n.guid !== d.guid) ||
                      (s && !s.test(d.namespace)) ||
                      (o && o !== d.selector && ('**' !== o || !d.selector)) ||
                      (p.splice(i, 1),
                      d.selector && p.delegateCount--,
                      u.remove && u.remove.call(e, d));
                a &&
                  !p.length &&
                  ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                    T.removeEvent(e, f, g.handle),
                  delete l[f]);
              } else for (f in l) T.event.remove(e, f + t[c], n, o, !0);
            T.isEmptyObject(l) && K.remove(e, 'handle events');
          }
        },
        dispatch: function (e) {
          var t,
            n,
            o,
            r,
            i,
            a,
            s = T.event.fix(e),
            l = new Array(arguments.length),
            c = (K.get(this, 'events') || {})[s.type] || [],
            d = T.event.special[s.type] || {};
          for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (((s.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, s))) {
            for (
              a = T.event.handlers.call(this, s, c), t = 0;
              (r = a[t++]) && !s.isPropagationStopped();

            )
              for (
                s.currentTarget = r.elem, n = 0;
                (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();

              )
                (s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace)) ||
                  ((s.handleObj = i),
                  (s.data = i.data),
                  void 0 !==
                    (o = ((T.event.special[i.origType] || {}).handle || i.handler).apply(
                      r.elem,
                      l,
                    )) &&
                    !1 === (s.result = o) &&
                    (s.preventDefault(), s.stopPropagation()));
            return d.postDispatch && d.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function (e, t) {
          var n,
            o,
            r,
            i,
            a,
            s = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !('click' === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (1 === c.nodeType && ('click' !== e.type || !0 !== c.disabled)) {
                for (i = [], a = {}, n = 0; n < l; n++)
                  void 0 === a[(r = (o = t[n]).selector + ' ')] &&
                    (a[r] = o.needsContext
                      ? T(r, this).index(c) > -1
                      : T.find(r, this, null, [c]).length),
                    a[r] && i.push(o);
                i.length && s.push({ elem: c, handlers: i });
              }
          return (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s;
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: x(t)
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
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return me.test(t.type) && t.click && D(t, 'input') && Le(t, 'click', Ne), !1;
            },
            trigger: function (e) {
              var t = this || e;
              return me.test(t.type) && t.click && D(t, 'input') && Le(t, 'click'), !0;
            },
            _default: function (e) {
              var t = e.target;
              return (
                (me.test(t.type) && t.click && D(t, 'input') && K.get(t, 'click')) || D(t, 'a')
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
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ne
                  : Ae),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Ae,
          isPropagationStopped: Ae,
          isImmediatePropagationStopped: Ae,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ne), e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ne), e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ne),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
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
            which: function (e) {
              var t = e.button;
              return null == e.which && Se.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && je.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          T.event.addProp,
        ),
        T.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return Le(this, e, De), !1;
            },
            trigger: function () {
              return Le(this, e), !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  o = this,
                  r = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (r && (r === o || T.contains(o, r))) ||
                    ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
                  n
                );
              },
            };
          },
        ),
        T.fn.extend({
          on: function (e, t, n, o) {
            return qe(this, e, t, n, o);
          },
          one: function (e, t, n, o) {
            return qe(this, e, t, n, o, 1);
          },
          off: function (e, t, n) {
            var o, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (o = e.handleObj),
                T(e.delegateTarget).off(
                  o.namespace ? o.origType + '.' + o.namespace : o.origType,
                  o.selector,
                  o.handler,
                ),
                this
              );
            if ('object' == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ae),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var ze =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        He = /<script|<style|<link/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Ue(e, t) {
        return (
          (D(e, 'table') &&
            D(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
            T(e).children('tbody')[0]) ||
          e
        );
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
      }
      function Re(e) {
        return (
          'true/' === (e.type || '').slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute('type'),
          e
        );
      }
      function Ie(e, t) {
        var n, o, r, i, a, s, l, c;
        if (1 === t.nodeType) {
          if (K.hasData(e) && ((i = K.access(e)), (a = K.set(t, i)), (c = i.events)))
            for (r in (delete a.handle, (a.events = {}), c))
              for (n = 0, o = c[r].length; n < o; n++) T.event.add(t, r, c[r][n]);
          Z.hasData(e) && ((s = Z.access(e)), (l = T.extend({}, s)), Z.set(t, l));
        }
      }
      function Be(e, t) {
        var n = t.nodeName.toLowerCase();
        'input' === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
      }
      function Fe(e, t, n, o) {
        t = c.apply([], t);
        var r,
          i,
          a,
          s,
          l,
          d,
          u = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          m = x(h);
        if (m || (p > 1 && 'string' == typeof h && !b.checkClone && Me.test(h)))
          return e.each(function (r) {
            var i = e.eq(r);
            m && (t[0] = h.call(this, r, i.html())), Fe(i, t, n, o);
          });
        if (
          p &&
          ((i = (r = Ce(t, e[0].ownerDocument, !1, e, o)).firstChild),
          1 === r.childNodes.length && (r = i),
          i || o)
        ) {
          for (s = (a = T.map(ye(r, 'script'), Pe)).length; u < p; u++)
            (l = r),
              u !== f && ((l = T.clone(l, !0, !0)), s && T.merge(a, ye(l, 'script'))),
              n.call(e[u], l, u);
          if (s)
            for (d = a[a.length - 1].ownerDocument, T.map(a, Re), u = 0; u < s; u++)
              (l = a[u]),
                be.test(l.type || '') &&
                  !K.access(l, 'globalEval') &&
                  T.contains(d, l) &&
                  (l.src && 'module' !== (l.type || '').toLowerCase()
                    ? T._evalUrl &&
                      !l.noModule &&
                      T._evalUrl(l.src, { nonce: l.nonce || l.getAttribute('nonce') })
                    : w(l.textContent.replace(Oe, ''), l, d));
        }
        return e;
      }
      function We(e, t, n) {
        for (var o, r = t ? T.filter(t, e) : e, i = 0; null != (o = r[i]); i++)
          n || 1 !== o.nodeType || T.cleanData(ye(o)),
            o.parentNode && (n && se(o) && ve(ye(o, 'script')), o.parentNode.removeChild(o));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e.replace(ze, '<$1></$2>');
        },
        clone: function (e, t, n) {
          var o,
            r,
            i,
            a,
            s = e.cloneNode(!0),
            l = se(e);
          if (!(b.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || T.isXMLDoc(e)))
            for (a = ye(s), o = 0, r = (i = ye(e)).length; o < r; o++) Be(i[o], a[o]);
          if (t)
            if (n)
              for (i = i || ye(e), a = a || ye(s), o = 0, r = i.length; o < r; o++) Ie(i[o], a[o]);
            else Ie(e, s);
          return (a = ye(s, 'script')).length > 0 && ve(a, !l && ye(e, 'script')), s;
        },
        cleanData: function (e) {
          for (var t, n, o, r = T.event.special, i = 0; void 0 !== (n = e[i]); i++)
            if (Q(n)) {
              if ((t = n[K.expando])) {
                if (t.events)
                  for (o in t.events) r[o] ? T.event.remove(n, o) : T.removeEvent(n, o, t.handle);
                n[K.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return We(this, e, !0);
          },
          remove: function (e) {
            return We(this, e);
          },
          text: function (e) {
            return $(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
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
            return Fe(this, arguments, function (e) {
              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                Ue(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Fe(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Ue(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Fe(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Fe(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (T.cleanData(ye(e, !1)), (e.textContent = ''));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return $(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  'string' == typeof e &&
                  !He.test(e) &&
                  !xe[(ge.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < o; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(ye(t, !1)), (t.innerHTML = e));
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
            return Fe(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 && (T.cleanData(ye(this)), n && n.replaceChild(t, this));
              },
              e,
            );
          },
        }),
        T.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (var n, o = [], r = T(e), i = r.length - 1, a = 0; a <= i; a++)
                (n = a === i ? this : this.clone(!0)), T(r[a])[t](n), d.apply(o, n.get());
              return this.pushStack(o);
            };
          },
        );
      var _e = new RegExp('^(' + oe + ')(?!px)[a-z%]+$', 'i'),
        $e = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Xe = new RegExp(ie.join('|'), 'i');
      function Ve(e, t, n) {
        var o,
          r,
          i,
          a,
          s = e.style;
        return (
          (n = n || $e(e)) &&
            ('' !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = T.style(e, t)),
            !b.pixelBoxStyles() &&
              _e.test(a) &&
              Xe.test(t) &&
              ((o = s.width),
              (r = s.minWidth),
              (i = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = o),
              (s.minWidth = r),
              (s.maxWidth = i))),
          void 0 !== a ? a + '' : a
        );
      }
      function Ge(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (d) {
            (c.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (d.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              ae.appendChild(c).appendChild(d);
            var e = n.getComputedStyle(d);
            (o = '1%' !== e.top),
              (l = 12 === t(e.marginLeft)),
              (d.style.right = '60%'),
              (s = 36 === t(e.right)),
              (r = 36 === t(e.width)),
              (d.style.position = 'absolute'),
              (i = 12 === t(d.offsetWidth / 3)),
              ae.removeChild(c),
              (d = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var o,
          r,
          i,
          s,
          l,
          c = a.createElement('div'),
          d = a.createElement('div');
        d.style &&
          ((d.style.backgroundClip = 'content-box'),
          (d.cloneNode(!0).style.backgroundClip = ''),
          (b.clearCloneStyle = 'content-box' === d.style.backgroundClip),
          T.extend(b, {
            boxSizingReliable: function () {
              return e(), r;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), o;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), i;
            },
          }));
      })();
      var Ye = ['Webkit', 'Moz', 'ms'],
        Qe = a.createElement('div').style,
        Je = {};
      function Ke(e) {
        var t = T.cssProps[e] || Je[e];
        return (
          t ||
          (e in Qe
            ? e
            : (Je[e] =
                (function (e) {
                  for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                    if ((e = Ye[n] + t) in Qe) return e;
                })(e) || e))
        );
      }
      var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: 'absolute', visibility: 'hidden', display: 'block' },
        nt = { letterSpacing: '0', fontWeight: '400' };
      function ot(e, t, n) {
        var o = re.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || 'px') : t;
      }
      function rt(e, t, n, o, r, i) {
        var a = 'width' === t ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (o ? 'border' : 'content')) return 0;
        for (; a < 4; a += 2)
          'margin' === n && (l += T.css(e, n + ie[a], !0, r)),
            o
              ? ('content' === n && (l -= T.css(e, 'padding' + ie[a], !0, r)),
                'margin' !== n && (l -= T.css(e, 'border' + ie[a] + 'Width', !0, r)))
              : ((l += T.css(e, 'padding' + ie[a], !0, r)),
                'padding' !== n
                  ? (l += T.css(e, 'border' + ie[a] + 'Width', !0, r))
                  : (s += T.css(e, 'border' + ie[a] + 'Width', !0, r)));
        return (
          !o &&
            i >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - i - l - s - 0.5),
              ) || 0),
          l
        );
      }
      function it(e, t, n) {
        var o = $e(e),
          r = (!b.boxSizingReliable() || n) && 'border-box' === T.css(e, 'boxSizing', !1, o),
          i = r,
          a = Ve(e, t, o),
          s = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
          if (!n) return a;
          a = 'auto';
        }
        return (
          ((!b.boxSizingReliable() && r) ||
            'auto' === a ||
            (!parseFloat(a) && 'inline' === T.css(e, 'display', !1, o))) &&
            e.getClientRects().length &&
            ((r = 'border-box' === T.css(e, 'boxSizing', !1, o)), (i = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) + rt(e, t, n || (r ? 'border' : 'content'), i, o, a) + 'px'
        );
      }
      function at(e, t, n, o, r) {
        return new at.prototype.init(e, t, n, o, r);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ve(e, 'opacity');
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
        style: function (e, t, n, o) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              i,
              a,
              s = Y(t),
              l = et.test(t),
              c = e.style;
            if ((l || (t = Ke(s)), (a = T.cssHooks[t] || T.cssHooks[s]), void 0 === n))
              return a && 'get' in a && void 0 !== (r = a.get(e, !1, o)) ? r : c[t];
            'string' === (i = typeof n) &&
              (r = re.exec(n)) &&
              r[1] &&
              ((n = ue(e, t, r)), (i = 'number')),
              null != n &&
                n == n &&
                ('number' !== i || l || (n += (r && r[3]) || (T.cssNumber[s] ? '' : 'px')),
                b.clearCloneStyle ||
                  '' !== n ||
                  0 !== t.indexOf('background') ||
                  (c[t] = 'inherit'),
                (a && 'set' in a && void 0 === (n = a.set(e, n, o))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, o) {
          var r,
            i,
            a,
            s = Y(t);
          return (
            et.test(t) || (t = Ke(s)),
            (a = T.cssHooks[t] || T.cssHooks[s]) && 'get' in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = Ve(e, t, o)),
            'normal' === r && t in nt && (r = nt[t]),
            '' === n || n ? ((i = parseFloat(r)), !0 === n || isFinite(i) ? i || 0 : r) : r
          );
        },
      }),
        T.each(['height', 'width'], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, o) {
              if (n)
                return !Ze.test(T.css(e, 'display')) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? it(e, t, o)
                  : de(e, tt, function () {
                      return it(e, t, o);
                    });
            },
            set: function (e, n, o) {
              var r,
                i = $e(e),
                a = !b.scrollboxSize() && 'absolute' === i.position,
                s = (a || o) && 'border-box' === T.css(e, 'boxSizing', !1, i),
                l = o ? rt(e, t, o, s, i) : 0;
              return (
                s &&
                  a &&
                  (l -= Math.ceil(
                    e['offset' + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(i[t]) -
                      rt(e, t, 'border', !1, i) -
                      0.5,
                  )),
                l &&
                  (r = re.exec(n)) &&
                  'px' !== (r[3] || 'px') &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                ot(0, n, l)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Ge(b.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ve(e, 'marginLeft')) ||
                e.getBoundingClientRect().left -
                  de(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        T.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (var o = 0, r = {}, i = 'string' == typeof n ? n.split(' ') : [n]; o < 4; o++)
                r[e + ie[o] + t] = i[o] || i[o - 2] || i[0];
              return r;
            },
          }),
            'margin' !== e && (T.cssHooks[e + t].set = ot);
        }),
        T.fn.extend({
          css: function (e, t) {
            return $(
              this,
              function (e, t, n) {
                var o,
                  r,
                  i = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (o = $e(e), r = t.length; a < r; a++) i[t[a]] = T.css(e, t[a], !1, o);
                  return i;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1,
            );
          },
        }),
        (T.Tween = at),
        (at.prototype = {
          constructor: at,
          init: function (e, t, n, o, r, i) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = o),
              (this.unit = i || (T.cssNumber[n] ? '' : 'px'));
          },
          cur: function () {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = at.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    T.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration,
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : at.propHooks._default.set(this),
              this
            );
          },
        }),
        (at.prototype.init.prototype = at.prototype),
        (at.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, '')) && 'auto' !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType || (!T.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (at.propHooks.scrollTop = at.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: 'swing',
        }),
        (T.fx = at.prototype.init),
        (T.fx.step = {});
      var st,
        lt,
        ct = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;
      function ut() {
        lt &&
          (!1 === a.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ut)
            : n.setTimeout(ut, T.fx.interval),
          T.fx.tick());
      }
      function pt() {
        return (
          n.setTimeout(function () {
            st = void 0;
          }),
          (st = Date.now())
        );
      }
      function ft(e, t) {
        var n,
          o = 0,
          r = { height: e };
        for (t = t ? 1 : 0; o < 4; o += 2 - t) r['margin' + (n = ie[o])] = r['padding' + n] = e;
        return t && (r.opacity = r.width = e), r;
      }
      function ht(e, t, n) {
        for (
          var o, r = (mt.tweeners[t] || []).concat(mt.tweeners['*']), i = 0, a = r.length;
          i < a;
          i++
        )
          if ((o = r[i].call(n, t, e))) return o;
      }
      function mt(e, t, n) {
        var o,
          r,
          i = 0,
          a = mt.prefilters.length,
          s = T.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var t = st || pt(),
                n = Math.max(0, c.startTime + c.duration - t),
                o = 1 - (n / c.duration || 0),
                i = 0,
                a = c.tweens.length;
              i < a;
              i++
            )
              c.tweens[i].run(o);
            return (
              s.notifyWith(e, [c, o, n]),
              o < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            );
          },
          c = s.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: st || pt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var o = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
              return c.tweens.push(o), o;
            },
            stop: function (t) {
              var n = 0,
                o = t ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < o; n++) c.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                  : s.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          d = c.props;
        for (
          !(function (e, t) {
            var n, o, r, i, a;
            for (n in e)
              if (
                ((r = t[(o = Y(n))]),
                (i = e[n]),
                Array.isArray(i) && ((r = i[1]), (i = e[n] = i[0])),
                n !== o && ((e[o] = i), delete e[n]),
                (a = T.cssHooks[o]) && ('expand' in a))
              )
                for (n in ((i = a.expand(i)), delete e[o], i))
                  (n in e) || ((e[n] = i[n]), (t[n] = r));
              else t[o] = r;
          })(d, c.opts.specialEasing);
          i < a;
          i++
        )
          if ((o = mt.prefilters[i].call(c, e, d, c.opts)))
            return x(o.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)), o;
        return (
          T.map(d, ht, c),
          x(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          T.fx.timer(T.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (T.Animation = T.extend(mt, {
        tweeners: {
          '*': [
            function (e, t) {
              var n = this.createTween(e, t);
              return ue(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          x(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
          for (var n, o = 0, r = e.length; o < r; o++)
            (n = e[o]), (mt.tweeners[n] = mt.tweeners[n] || []), mt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var o,
              r,
              i,
              a,
              s,
              l,
              c,
              d,
              u = 'width' in t || 'height' in t,
              p = this,
              f = {},
              h = e.style,
              m = e.nodeType && ce(e),
              g = K.get(e, 'fxshow');
            for (o in (n.queue ||
              (null == (a = T._queueHooks(e, 'fx')).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              p.always(function () {
                p.always(function () {
                  a.unqueued--, T.queue(e, 'fx').length || a.empty.fire();
                });
              })),
            t))
              if (((r = t[o]), ct.test(r))) {
                if ((delete t[o], (i = i || 'toggle' === r), r === (m ? 'hide' : 'show'))) {
                  if ('show' !== r || !g || void 0 === g[o]) continue;
                  m = !0;
                }
                f[o] = (g && g[o]) || T.style(e, o);
              }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
              for (o in (u &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = g && g.display) && (c = K.get(e, 'display')),
                'none' === (d = T.css(e, 'display')) &&
                  (c
                    ? (d = c)
                    : (he([e], !0),
                      (c = e.style.display || c),
                      (d = T.css(e, 'display')),
                      he([e]))),
                ('inline' === d || ('inline-block' === d && null != c)) &&
                  'none' === T.css(e, 'float') &&
                  (l ||
                    (p.done(function () {
                      h.display = c;
                    }),
                    null == c && ((d = h.display), (c = 'none' === d ? '' : d))),
                  (h.display = 'inline-block'))),
              n.overflow &&
                ((h.overflow = 'hidden'),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (g
                    ? 'hidden' in g && (m = g.hidden)
                    : (g = K.access(e, 'fxshow', { display: c })),
                  i && (g.hidden = !m),
                  m && he([e], !0),
                  p.done(function () {
                    for (o in (m || he([e]), K.remove(e, 'fxshow'), f)) T.style(e, o, f[o]);
                  })),
                  (l = ht(m ? g[o] : 0, o, p)),
                  o in g || ((g[o] = l.start), m && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var o =
            e && 'object' == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (x(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !x(t) && t),
                };
          return (
            T.fx.off
              ? (o.duration = 0)
              : 'number' != typeof o.duration &&
                (o.duration in T.fx.speeds
                  ? (o.duration = T.fx.speeds[o.duration])
                  : (o.duration = T.fx.speeds._default)),
            (null != o.queue && !0 !== o.queue) || (o.queue = 'fx'),
            (o.old = o.complete),
            (o.complete = function () {
              x(o.old) && o.old.call(this), o.queue && T.dequeue(this, o.queue);
            }),
            o
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, o) {
            return this.filter(ce).css('opacity', 0).show().end().animate({ opacity: t }, e, n, o);
          },
          animate: function (e, t, n, o) {
            var r = T.isEmptyObject(e),
              i = T.speed(t, n, o),
              a = function () {
                var t = mt(this, T.extend({}, e), i);
                (r || K.get(this, 'finish')) && t.stop(!0);
              };
            return (a.finish = a), r || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
          },
          stop: function (e, t, n) {
            var o = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              'string' != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || 'fx', []),
              this.each(function () {
                var t = !0,
                  r = null != e && e + 'queueHooks',
                  i = T.timers,
                  a = K.get(this);
                if (r) a[r] && a[r].stop && o(a[r]);
                else for (r in a) a[r] && a[r].stop && dt.test(r) && o(a[r]);
                for (r = i.length; r--; )
                  i[r].elem !== this ||
                    (null != e && i[r].queue !== e) ||
                    (i[r].anim.stop(n), (t = !1), i.splice(r, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function () {
                var t,
                  n = K.get(this),
                  o = n[e + 'queue'],
                  r = n[e + 'queueHooks'],
                  i = T.timers,
                  a = o ? o.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = i.length;
                  t--;

                )
                  i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < a; t++) o[t] && o[t].finish && o[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(['toggle', 'show', 'hide'], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, o, r) {
            return null == e || 'boolean' == typeof e
              ? n.apply(this, arguments)
              : this.animate(ft(t, !0), e, o, r);
          };
        }),
        T.each(
          {
            slideDown: ft('show'),
            slideUp: ft('hide'),
            slideToggle: ft('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (e, t) {
            T.fn[e] = function (e, n, o) {
              return this.animate(t, e, n, o);
            };
          },
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (st = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          lt || ((lt = !0), ut());
        }),
        (T.fx.stop = function () {
          lt = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function (t, o) {
              var r = n.setTimeout(t, e);
              o.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var e = a.createElement('input'),
            t = a.createElement('select').appendChild(a.createElement('option'));
          (e.type = 'checkbox'),
            (b.checkOn = '' !== e.value),
            (b.optSelected = t.selected),
            ((e = a.createElement('input')).value = 't'),
            (e.type = 'radio'),
            (b.radioValue = 't' === e.value);
        })();
      var gt,
        bt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return $(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var o,
              r,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === i && T.isXMLDoc(e)) ||
                    (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? gt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : r && 'set' in r && void 0 !== (o = r.set(e, n, t))
                      ? o
                      : (e.setAttribute(t, n + ''), n)
                    : r && 'get' in r && null !== (o = r.get(e, t))
                    ? o
                    : null == (o = T.find.attr(e, t))
                    ? void 0
                    : o);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!b.radioValue && 'radio' === t && D(e, 'input')) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              o = 0,
              r = t && t.match(P);
            if (r && 1 === e.nodeType) for (; (n = r[o++]); ) e.removeAttribute(n);
          },
        }),
        (gt = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = bt[t] || T.find.attr;
          bt[t] = function (e, t, o) {
            var r,
              i,
              a = t.toLowerCase();
            return (
              o || ((i = bt[a]), (bt[a] = r), (r = null != n(e, t, o) ? a : null), (bt[a] = i)), r
            );
          };
        });
      var xt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
      function vt(e) {
        return (e.match(P) || []).join(' ');
      }
      function wt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
      }
      function kt(e) {
        return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return $(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var o,
              r,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && T.isXMLDoc(e)) || ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                void 0 !== n
                  ? r && 'set' in r && void 0 !== (o = r.set(e, n, t))
                    ? o
                    : (e[t] = n)
                  : r && 'get' in r && null !== (o = r.get(e, t))
                  ? o
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, 'tabindex');
                return t
                  ? parseInt(t, 10)
                  : xt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        b.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
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
            T.propFix[this.toLowerCase()] = this;
          },
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              n,
              o,
              r,
              i,
              a,
              s,
              l = 0;
            if (x(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, wt(this)));
              });
            if ((t = kt(e)).length)
              for (; (n = this[l++]); )
                if (((r = wt(n)), (o = 1 === n.nodeType && ' ' + vt(r) + ' '))) {
                  for (a = 0; (i = t[a++]); ) o.indexOf(' ' + i + ' ') < 0 && (o += i + ' ');
                  r !== (s = vt(o)) && n.setAttribute('class', s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              o,
              r,
              i,
              a,
              s,
              l = 0;
            if (x(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, wt(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((t = kt(e)).length)
              for (; (n = this[l++]); )
                if (((r = wt(n)), (o = 1 === n.nodeType && ' ' + vt(r) + ' '))) {
                  for (a = 0; (i = t[a++]); )
                    for (; o.indexOf(' ' + i + ' ') > -1; ) o = o.replace(' ' + i + ' ', ' ');
                  r !== (s = vt(o)) && n.setAttribute('class', s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              o = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && o
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : x(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, wt(this), t), t);
                })
              : this.each(function () {
                  var t, r, i, a;
                  if (o)
                    for (r = 0, i = T(this), a = kt(e); (t = a[r++]); )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (void 0 !== e && 'boolean' !== n) ||
                      ((t = wt(this)) && K.set(this, '__className__', t),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          t || !1 === e ? '' : K.get(this, '__className__') || '',
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              o = 0;
            for (t = ' ' + e + ' '; (n = this[o++]); )
              if (1 === n.nodeType && (' ' + vt(wt(n)) + ' ').indexOf(t) > -1) return !0;
            return !1;
          },
        });
      var Tt = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            o,
            r = this[0];
          return arguments.length
            ? ((o = x(e)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = o ? e.call(this, n, T(this).val()) : e)
                    ? (r = '')
                    : 'number' == typeof r
                    ? (r += '')
                    : Array.isArray(r) &&
                      (r = T.map(r, function (e) {
                        return null == e ? '' : e + '';
                      })),
                  ((t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, r, 'value')) ||
                    (this.value = r));
              }))
            : r
            ? (t = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(r, 'value'))
              ? n
              : 'string' == typeof (n = r.value)
              ? n.replace(Tt, '')
              : null == n
              ? ''
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, 'value');
                return null != t ? t : vt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  o,
                  r = e.options,
                  i = e.selectedIndex,
                  a = 'select-one' === e.type,
                  s = a ? null : [],
                  l = a ? i + 1 : r.length;
                for (o = i < 0 ? l : a ? i : 0; o < l; o++)
                  if (
                    ((n = r[o]).selected || o === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !D(n.parentNode, 'optgroup'))
                  ) {
                    if (((t = T(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (var n, o, r = e.options, i = T.makeArray(t), a = r.length; a--; )
                  ((o = r[a]).selected = T.inArray(T.valHooks.option.get(o), i) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), i;
              },
            },
          },
        }),
        T.each(['radio', 'checkbox'], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            b.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              });
        }),
        (b.focusin = 'onfocusin' in n);
      var Ct = /^(?:focusinfocus|focusoutblur)$/,
        St = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, o, r) {
          var i,
            s,
            l,
            c,
            d,
            u,
            p,
            f,
            m = [o || a],
            g = h.call(e, 'type') ? e.type : e,
            b = h.call(e, 'namespace') ? e.namespace.split('.') : [];
          if (
            ((s = f = l = o = o || a),
            3 !== o.nodeType &&
              8 !== o.nodeType &&
              !Ct.test(g + T.event.triggered) &&
              (g.indexOf('.') > -1 && ((b = g.split('.')), (g = b.shift()), b.sort()),
              (d = g.indexOf(':') < 0 && 'on' + g),
              ((e = e[T.expando] ? e : new T.Event(g, 'object' == typeof e && e)).isTrigger = r
                ? 2
                : 3),
              (e.namespace = b.join('.')),
              (e.rnamespace = e.namespace
                ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (e.result = void 0),
              e.target || (e.target = o),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (p = T.event.special[g] || {}),
              r || !p.trigger || !1 !== p.trigger.apply(o, t)))
          ) {
            if (!r && !p.noBubble && !y(o)) {
              for (
                c = p.delegateType || g, Ct.test(c + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                m.push(s), (l = s);
              l === (o.ownerDocument || a) && m.push(l.defaultView || l.parentWindow || n);
            }
            for (i = 0; (s = m[i++]) && !e.isPropagationStopped(); )
              (f = s),
                (e.type = i > 1 ? c : p.bindType || g),
                (u = (K.get(s, 'events') || {})[e.type] && K.get(s, 'handle')) && u.apply(s, t),
                (u = d && s[d]) &&
                  u.apply &&
                  Q(s) &&
                  ((e.result = u.apply(s, t)), !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              r ||
                e.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(m.pop(), t)) ||
                !Q(o) ||
                (d &&
                  x(o[g]) &&
                  !y(o) &&
                  ((l = o[d]) && (o[d] = null),
                  (T.event.triggered = g),
                  e.isPropagationStopped() && f.addEventListener(g, St),
                  o[g](),
                  e.isPropagationStopped() && f.removeEventListener(g, St),
                  (T.event.triggered = void 0),
                  l && (o[d] = l))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var o = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(o, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        b.focusin ||
          T.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var o = this.ownerDocument || this,
                  r = K.access(o, t);
                r || o.addEventListener(e, n, !0), K.access(o, t, (r || 0) + 1);
              },
              teardown: function () {
                var o = this.ownerDocument || this,
                  r = K.access(o, t) - 1;
                r ? K.access(o, t, r) : (o.removeEventListener(e, n, !0), K.remove(o, t));
              },
            };
          });
      var jt = n.location,
        Et = Date.now(),
        Nt = /\?/;
      T.parseXML = function (e) {
        var t;
        if (!e || 'string' != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName('parsererror').length) || T.error('Invalid XML: ' + e), t
        );
      };
      var At = /\[\]$/,
        Dt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
      function zt(e, t, n, o) {
        var r;
        if (Array.isArray(t))
          T.each(t, function (t, r) {
            n || At.test(e)
              ? o(e, r)
              : zt(e + '[' + ('object' == typeof r && null != r ? t : '') + ']', r, n, o);
          });
        else if (n || 'object' !== k(t)) o(e, t);
        else for (r in t) zt(e + '[' + r + ']', t[r], n, o);
      }
      (T.param = function (e, t) {
        var n,
          o = [],
          r = function (e, t) {
            var n = x(t) ? t() : t;
            o[o.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
          };
        if (null == e) return '';
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            r(this.name, this.value);
          });
        else for (n in e) zt(n, e[n], t, r);
        return o.join('&');
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, 'elements');
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(':disabled') &&
                  Lt.test(this.nodeName) &&
                  !qt.test(e) &&
                  (this.checked || !me.test(e))
                );
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(Dt, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(Dt, '\r\n') };
              })
              .get();
          },
        });
      var Ht = /%20/g,
        Mt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Bt = {},
        Ft = '*/'.concat('*'),
        Wt = a.createElement('a');
      function _t(e) {
        return function (t, n) {
          'string' != typeof t && ((n = t), (t = '*'));
          var o,
            r = 0,
            i = t.toLowerCase().match(P) || [];
          if (x(n))
            for (; (o = i[r++]); )
              '+' === o[0]
                ? ((o = o.slice(1) || '*'), (e[o] = e[o] || []).unshift(n))
                : (e[o] = e[o] || []).push(n);
        };
      }
      function $t(e, t, n, o) {
        var r = {},
          i = e === Bt;
        function a(s) {
          var l;
          return (
            (r[s] = !0),
            T.each(e[s] || [], function (e, s) {
              var c = s(t, n, o);
              return 'string' != typeof c || i || r[c]
                ? i
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), a(c), !1);
            }),
            l
          );
        }
        return a(t.dataTypes[0]) || (!r['*'] && a('*'));
      }
      function Xt(e, t) {
        var n,
          o,
          r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : o || (o = {}))[n] = t[n]);
        return o && T.extend(!0, e, o), e;
      }
      (Wt.href = jt.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: jt.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': Ft,
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
              'text xml': T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Xt(Xt(e, T.ajaxSettings), t) : Xt(T.ajaxSettings, e);
          },
          ajaxPrefilter: _t(It),
          ajaxTransport: _t(Bt),
          ajax: function (e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var o,
              r,
              i,
              s,
              l,
              c,
              d,
              u,
              p,
              f,
              h = T.ajaxSetup({}, t),
              m = h.context || h,
              g = h.context && (m.nodeType || m.jquery) ? T(m) : T.event,
              b = T.Deferred(),
              x = T.Callbacks('once memory'),
              y = h.statusCode || {},
              v = {},
              w = {},
              k = 'canceled',
              C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (d) {
                    if (!s)
                      for (s = {}; (t = Ut.exec(i)); )
                        s[t[1].toLowerCase() + ' '] = (s[t[1].toLowerCase() + ' '] || []).concat(
                          t[2],
                        );
                    t = s[e.toLowerCase() + ' '];
                  }
                  return null == t ? null : t.join(', ');
                },
                getAllResponseHeaders: function () {
                  return d ? i : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == d && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (v[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == d && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (d) C.always(e[C.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || k;
                  return o && o.abort(t), S(0, t), this;
                },
              };
            if (
              (b.promise(C),
              (h.url = ((e || h.url || jt.href) + '').replace(Rt, jt.protocol + '//')),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || '*').toLowerCase().match(P) || ['']),
              null == h.crossDomain)
            ) {
              c = a.createElement('a');
              try {
                (c.href = h.url),
                  (c.href = c.href),
                  (h.crossDomain = Wt.protocol + '//' + Wt.host != c.protocol + '//' + c.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                'string' != typeof h.data &&
                (h.data = T.param(h.data, h.traditional)),
              $t(It, h, t, C),
              d)
            )
              return C;
            for (p in ((u = T.event && h.global) && 0 == T.active++ && T.event.trigger('ajaxStart'),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Pt.test(h.type)),
            (r = h.url.replace(Mt, '')),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                (h.data = h.data.replace(Ht, '+'))
              : ((f = h.url.slice(r.length)),
                h.data &&
                  (h.processData || 'string' == typeof h.data) &&
                  ((r += (Nt.test(r) ? '&' : '?') + h.data), delete h.data),
                !1 === h.cache &&
                  ((r = r.replace(Ot, '$1')), (f = (Nt.test(r) ? '&' : '?') + '_=' + Et++ + f)),
                (h.url = r + f)),
            h.ifModified &&
              (T.lastModified[r] && C.setRequestHeader('If-Modified-Since', T.lastModified[r]),
              T.etag[r] && C.setRequestHeader('If-None-Match', T.etag[r])),
            ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
              C.setRequestHeader('Content-Type', h.contentType),
            C.setRequestHeader(
              'Accept',
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + Ft + '; q=0.01' : '')
                : h.accepts['*'],
            ),
            h.headers))
              C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || d)) return C.abort();
            if (
              ((k = 'abort'),
              x.add(h.complete),
              C.done(h.success),
              C.fail(h.error),
              (o = $t(Bt, h, t, C)))
            ) {
              if (((C.readyState = 1), u && g.trigger('ajaxSend', [C, h]), d)) return C;
              h.async &&
                h.timeout > 0 &&
                (l = n.setTimeout(function () {
                  C.abort('timeout');
                }, h.timeout));
              try {
                (d = !1), o.send(v, S);
              } catch (e) {
                if (d) throw e;
                S(-1, e);
              }
            } else S(-1, 'No Transport');
            function S(e, t, a, s) {
              var c,
                p,
                f,
                v,
                w,
                k = t;
              d ||
                ((d = !0),
                l && n.clearTimeout(l),
                (o = void 0),
                (i = s || ''),
                (C.readyState = e > 0 ? 4 : 0),
                (c = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (v = (function (e, t, n) {
                    for (var o, r, i, a, s = e.contents, l = e.dataTypes; '*' === l[0]; )
                      l.shift(),
                        void 0 === o && (o = e.mimeType || t.getResponseHeader('Content-Type'));
                    if (o)
                      for (r in s)
                        if (s[r] && s[r].test(o)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) i = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || e.converters[r + ' ' + l[0]]) {
                          i = r;
                          break;
                        }
                        a || (a = r);
                      }
                      i = i || a;
                    }
                    if (i) return i !== l[0] && l.unshift(i), n[i];
                  })(h, C, a)),
                (v = (function (e, t, n, o) {
                  var r,
                    i,
                    a,
                    s,
                    l,
                    c = {},
                    d = e.dataTypes.slice();
                  if (d[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                  for (i = d.shift(); i; )
                    if (
                      (e.responseFields[i] && (n[e.responseFields[i]] = t),
                      !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      (l = i),
                      (i = d.shift()))
                    )
                      if ('*' === i) i = l;
                      else if ('*' !== l && l !== i) {
                        if (!(a = c[l + ' ' + i] || c['* ' + i]))
                          for (r in c)
                            if (
                              (s = r.split(' '))[1] === i &&
                              (a = c[l + ' ' + s[0]] || c['* ' + s[0]])
                            ) {
                              !0 === a ? (a = c[r]) : !0 !== c[r] && ((i = s[0]), d.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: 'parsererror',
                                error: a ? e : 'No conversion from ' + l + ' to ' + i,
                              };
                            }
                      }
                  return { state: 'success', data: t };
                })(h, v, C, c)),
                c
                  ? (h.ifModified &&
                      ((w = C.getResponseHeader('Last-Modified')) && (T.lastModified[r] = w),
                      (w = C.getResponseHeader('etag')) && (T.etag[r] = w)),
                    204 === e || 'HEAD' === h.type
                      ? (k = 'nocontent')
                      : 304 === e
                      ? (k = 'notmodified')
                      : ((k = v.state), (p = v.data), (c = !(f = v.error))))
                  : ((f = k), (!e && k) || ((k = 'error'), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || k) + ''),
                c ? b.resolveWith(m, [p, k, C]) : b.rejectWith(m, [C, k, f]),
                C.statusCode(y),
                (y = void 0),
                u && g.trigger(c ? 'ajaxSuccess' : 'ajaxError', [C, h, c ? p : f]),
                x.fireWith(m, [C, k]),
                u &&
                  (g.trigger('ajaxComplete', [C, h]), --T.active || T.event.trigger('ajaxStop')));
            }
            return C;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, 'json');
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, 'script');
          },
        }),
        T.each(['get', 'post'], function (e, t) {
          T[t] = function (e, n, o, r) {
            return (
              x(n) && ((r = r || o), (o = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: r, data: n, success: o },
                  T.isPlainObject(e) && e,
                ),
              )
            );
          };
        }),
        (T._evalUrl = function (e, t) {
          return T.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (x(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
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
            return x(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = x(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not('body')
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Vt = { 0: 200, 1223: 204 },
        Gt = T.ajaxSettings.xhr();
      (b.cors = !!Gt && 'withCredentials' in Gt),
        (b.ajax = Gt = !!Gt),
        T.ajaxTransport(function (e) {
          var t, o;
          if (b.cors || (Gt && !e.crossDomain))
            return {
              send: function (r, i) {
                var a,
                  s = e.xhr();
                if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  r['X-Requested-With'] ||
                  (r['X-Requested-With'] = 'XMLHttpRequest'),
                r))
                  s.setRequestHeader(a, r[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        o =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      'abort' === e
                        ? s.abort()
                        : 'error' === e
                        ? 'number' != typeof s.status
                          ? i(0, 'error')
                          : i(s.status, s.statusText)
                        : i(
                            Vt[s.status] || s.status,
                            s.statusText,
                            'text' !== (s.responseType || 'text') ||
                              'string' != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (s.onload = t()),
                  (o = s.onerror = s.ontimeout = t('error')),
                  void 0 !== s.onabort
                    ? (s.onabort = o)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && o();
                          });
                      }),
                  (t = t('abort'));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
        }),
        T.ajaxTransport('script', function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (o, r) {
                (t = T('<script>')
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (n = function (e) {
                      t.remove(), (n = null), e && r('error' === e.type ? 404 : 200, e.type);
                    }),
                  )),
                  a.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Yt,
        Qt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var e = Qt.pop() || T.expando + '_' + Et++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter('json jsonp', function (e, t, o) {
          var r,
            i,
            a,
            s =
              !1 !== e.jsonp &&
              (Jt.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  Jt.test(e.data) &&
                  'data');
          if (s || 'jsonp' === e.dataTypes[0])
            return (
              (r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Jt, '$1' + r))
                : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
              (e.converters['script json'] = function () {
                return a || T.error(r + ' was not called'), a[0];
              }),
              (e.dataTypes[0] = 'json'),
              (i = n[r]),
              (n[r] = function () {
                a = arguments;
              }),
              o.always(function () {
                void 0 === i ? T(n).removeProp(r) : (n[r] = i),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(r)),
                  a && x(i) && i(a[0]),
                  (a = i = void 0);
              }),
              'script'
            );
        }),
        (b.createHTMLDocument =
          (((Yt = a.implementation.createHTMLDocument('').body).innerHTML =
            '<form></form><form></form>'),
          2 === Yt.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return 'string' != typeof e
            ? []
            : ('boolean' == typeof t && ((n = t), (t = !1)),
              t ||
                (b.createHTMLDocument
                  ? (((o = (t = a.implementation.createHTMLDocument('')).createElement(
                      'base',
                    )).href = a.location.href),
                    t.head.appendChild(o))
                  : (t = a)),
              (i = !n && []),
              (r = q.exec(e))
                ? [t.createElement(r[1])]
                : ((r = Ce([e], t, i)), i && i.length && T(i).remove(), T.merge([], r.childNodes)));
          var o, r, i;
        }),
        (T.fn.load = function (e, t, n) {
          var o,
            r,
            i,
            a = this,
            s = e.indexOf(' ');
          return (
            s > -1 && ((o = vt(e.slice(s))), (e = e.slice(0, s))),
            x(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (r = 'POST'),
            a.length > 0 &&
              T.ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
                .done(function (e) {
                  (i = arguments), a.html(o ? T('<div>').append(T.parseHTML(e)).find(o) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, i || [e.responseText, t, e]);
                      });
                    },
                ),
            this
          );
        }),
        T.each(
          ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          },
        ),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var o,
              r,
              i,
              a,
              s,
              l,
              c = T.css(e, 'position'),
              d = T(e),
              u = {};
            'static' === c && (e.style.position = 'relative'),
              (s = d.offset()),
              (i = T.css(e, 'top')),
              (l = T.css(e, 'left')),
              ('absolute' === c || 'fixed' === c) && (i + l).indexOf('auto') > -1
                ? ((a = (o = d.position()).top), (r = o.left))
                : ((a = parseFloat(i) || 0), (r = parseFloat(l) || 0)),
              x(t) && (t = t.call(e, n, T.extend({}, s))),
              null != t.top && (u.top = t.top - s.top + a),
              null != t.left && (u.left = t.left - s.left + r),
              'using' in t ? t.using.call(e, u) : d.css(u);
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              o = this[0];
            return o
              ? o.getClientRects().length
                ? ((t = o.getBoundingClientRect()),
                  (n = o.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                o = this[0],
                r = { top: 0, left: 0 };
              if ('fixed' === T.css(o, 'position')) t = o.getBoundingClientRect();
              else {
                for (
                  t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  'static' === T.css(e, 'position');

                )
                  e = e.parentNode;
                e &&
                  e !== o &&
                  1 === e.nodeType &&
                  (((r = T(e).offset()).top += T.css(e, 'borderTopWidth', !0)),
                  (r.left += T.css(e, 'borderLeftWidth', !0)));
              }
              return {
                top: t.top - r.top - T.css(o, 'marginTop', !0),
                left: t.left - r.left - T.css(o, 'marginLeft', !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && 'static' === T.css(e, 'position'); )
                e = e.offsetParent;
              return e || ae;
            });
          },
        }),
        T.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
          var n = 'pageYOffset' === t;
          T.fn[e] = function (o) {
            return $(
              this,
              function (e, o, r) {
                var i;
                if ((y(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === r))
                  return i ? i[t] : e[o];
                i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : (e[o] = r);
              },
              e,
              o,
              arguments.length,
            );
          };
        }),
        T.each(['top', 'left'], function (e, t) {
          T.cssHooks[t] = Ge(b.pixelPosition, function (e, n) {
            if (n) return (n = Ve(e, t)), _e.test(n) ? T(e).position()[t] + 'px' : n;
          });
        }),
        T.each({ Height: 'height', Width: 'width' }, function (e, t) {
          T.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, o) {
            T.fn[o] = function (r, i) {
              var a = arguments.length && (n || 'boolean' != typeof r),
                s = n || (!0 === r || !0 === i ? 'margin' : 'border');
              return $(
                this,
                function (t, n, r) {
                  var i;
                  return y(t)
                    ? 0 === o.indexOf('outer')
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
                    : void 0 === r
                    ? T.css(t, n, s)
                    : T.style(t, n, r, s);
                },
                t,
                a ? r : void 0,
                a,
              );
            };
          });
        }),
        T.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' ',
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          },
        ),
        T.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, o) {
            return this.on(t, e, n, o);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
          },
        }),
        (T.proxy = function (e, t) {
          var n, o, r;
          if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), x(e)))
            return (
              (o = l.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, o.concat(l.call(arguments)));
              }).guid = e.guid =
                e.guid || T.guid++),
              r
            );
        }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = D),
        (T.isFunction = x),
        (T.isWindow = y),
        (T.camelCase = Y),
        (T.type = k),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
        }),
        void 0 ===
          (o = function () {
            return T;
          }.apply(t, [])) || (e.exports = o);
      var Kt = n.jQuery,
        Zt = n.$;
      return (
        (T.noConflict = function (e) {
          return n.$ === T && (n.$ = Zt), e && n.jQuery === T && (n.jQuery = Kt), T;
        }),
        r || (n.jQuery = n.$ = T),
        T
      );
    });
  },
  function (e, t, n) {
    e.exports = n(2);
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      function (e) {
        n(3), n(7), n(8), n(9), n(10);
        e('.togle-info-title').on('click', function () {
          e(this).closest('.togle-info').toggleClass('open');
        }),
          e('.step-readmore').on('click', function () {
            e(this).addClass('hidden').closest('.step').toggleClass('open');
          }),
          e('.faq-item-title').on('click', function () {
            e(this).closest('.faq-item').toggleClass('open');
          }),
          e('.group-text-more').on('click', function () {
            e(this).closest('.group-text').addClass('open');
          }),
          e('.scroll-top-btn').on('click', function (t) {
            t.preventDefault(),
              e([document.documentElement, document.body]).animate(
                { scrollTop: e(e(this).attr('href')).offset().top },
                1e3,
              );
          }),
          e('input.password-random').length &&
            e('input.password-random').val(
              (function () {
                var e = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789'],
                  t = e[0].charAt(Math.floor(Math.random() * e[0].length));
                (t += e[1].charAt(Math.floor(Math.random() * e[1].length))),
                  (t += e[2].charAt(Math.floor(Math.random() * e[2].length)));
                for (var n = 0; n < 5; n++)
                  t += e[0].charAt(Math.floor(Math.random() * e[0].length));
                return (t = t
                  .split('')
                  .sort(function () {
                    return 0.5 - Math.random();
                  })
                  .join(''));
              })(),
            );
      }.call(this, n(0));
  },
  function (e, t, n) {
    var o = n(4);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    n(6)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    (e.exports = n(5)(!1)).push([
      e.i,
      '/*!\n * Bootstrap v4.5.3 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}figcaption,footer,header,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus:not(:focus-visible){outline:0!important}h1,h2,h3{margin-bottom:.5rem}h1,h2,h3,p{margin-top:0}address,p{margin-bottom:1rem}address{font-style:normal;line-height:inherit}dl,ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}b,strong{font-weight:bolder}small{font-size:80%}sub{position:relative;font-size:75%;line-height:0;vertical-align:baseline;bottom:-.25em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}img{vertical-align:middle;border-style:none}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}[role=button]{cursor:pointer}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}[hidden]{display:none!important}.h1,.h2,.h3,h1,h2,h3{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.small,small{font-size:80%;font-weight:400}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width:576px){.container{max-width:540px}}@media(min-width:768px){.container{max-width:720px}}@media(min-width:992px){.container{max-width:960px}}@media(min-width:1200px){.container{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col,.col-7,.col-12,.col-lg-3,.col-lg-4,.col-lg-8,.col-lg-9,.col-md-3,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-12{flex:0 0 100%;max-width:100%}@media(min-width:768px){.col-md-3{flex:0 0 25%;max-width:25%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.offset-md-4{margin-left:33.3333333333%}}@media(min-width:992px){.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:focus,.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.card{display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.alert,.card{position:relative}.alert{padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.media{display:flex;align-items:flex-start}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media(prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:""}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media(min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media(min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media(min-width:1200px){.modal-xl{max-width:1140px}}@-webkit-keyframes spinner-border{to{transform:rotate(1turn)}}@keyframes spinner-border{to{transform:rotate(1turn)}}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.d-flex{display:flex!important}.flex-wrap{flex-wrap:wrap!important}.justify-content-end{justify-content:flex-end!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.mt-3{margin-top:1rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.pl-3{padding-left:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}@media(min-width:768px){.mt-md-5{margin-top:3rem!important}.mb-md-5{margin-bottom:3rem!important}}.text-center{text-align:center!important}@media(min-width:768px){.text-md-left{text-align:left!important}}.text-uppercase{text-transform:uppercase!important}.visible{visibility:visible!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}}@font-face{font-family:Lato;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Lato;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Lato;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Lato;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.modalDialog{height:0;opacity:0;display:none}.modalDialog.open{display:flex;justify-content:center;align-items:center;height:100vh;position:fixed;font-family:Arial,Helvetica,sans-serif;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.8);z-index:99999;opacity:1;transition:opacity .4s ease-in;pointer-events:none}.modalDialog.open .loading-text{padding-top:20px;font-weight:700;text-align:center;color:#fff}.modalDialog.open>div{width:100%;position:relative}.loading-spinner{position:absolute;top:50%;right:0;bottom:0;left:50%;margin:-35px 0;text-align:center;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:rotate-forever;animation-name:rotate-forever;-webkit-animation-timing-function:linear;animation-timing-function:linear;display:inline-block}@-webkit-keyframes rotate-forever{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}*{box-sizing:border-box}body{font-family:Lato;overflow-x:hidden;padding:0;font-size:18px;color:#151515;line-height:1.25}@media screen and (max-width:767px){body{font-size:16px}}.video,img{max-width:100%;height:auto}p{font-size:18px;line-height:1.5}@media screen and (max-width:767px){p{font-size:16px}}.hidden{display:none}.container{max-width:1450px}.header{box-shadow:.3px 4px 13.8px 2.2px rgba(20,22,25,.15);padding:20px 0}@media screen and (max-width:767px){.header{padding:10px 0}}.header-menu{display:flex;padding:0;margin:0;list-style:none;font-size:16px}@media screen and (max-width:767px){.header-menu{font-size:15px}}.header-menu a{display:inline-flex;justify-content:center;align-items:center;text-align:center;padding:10px 20px;text-transform:uppercase;border-radius:5px;color:#151515!important;font-weight:600}@media screen and (max-width:991px){.header-menu a{padding:5px 10px}}@media screen and (max-width:767px){.header-menu a{padding:5px 8px}}.header-menu li{padding:0 5px}@media screen and (max-width:767px){.header-menu li{padding:0}}.header-menu li:last-child a{color:#fff!important;background-color:#1e3485;text-decoration:none!important}.white{color:#fff!important}input{width:100%;height:50px;padding:15px;border:0}.contact-us-form-section input{border:1px solid #bdbdbd}.video-form-section{background-color:rgba(233,235,240,.4);background-image:url(./assets/main-bg.webp);background-position:50% calc(100% - 110px);background-size:cover;background-repeat:no-repeat;padding:50px 0;color:#fff}@media screen and (max-width:767px){.video-form-section{padding:30px 0;background:linear-gradient(180deg,#44291e,#44291e 80%,#fff 0,#fff)}}.video-header{font-size:48px;font-weight:bolder;margin-bottom:15px}@media screen and (max-width:767px){.video-header{font-size:30px}}.video-subheader{font-size:36px;font-weight:400;margin-bottom:30px}@media screen and (max-width:767px){.video-subheader{font-size:26px}}.video-wrapper{box-shadow:.3px 4px 29px 0 rgba(50,35,65,.29);max-width:860px}@media screen and (max-width:767px){.video-wrapper{margin-bottom:15px}}.video-wrapper img{width:100%}.form-control{border-radius:0;border:0;height:46px}.form-footer{margin-bottom:0;font-size:10px;text-align:center}.form-footer a{color:#ffba00;text-decoration:underline;font-weight:700}.form-container{border-radius:20px;background-color:#171313;padding:20px 20px 10px;position:relative;box-shadow:.3px 4px 29px 0 rgba(50,35,65,.29)}.form-title{color:#fff;font-size:30px;font-weight:600;text-align:center;margin-bottom:25px;line-height:1.25}@media screen and (max-width:767px){.form-title{font-size:20px}}.form-btn{font-size:24px;font-weight:700;display:inline-flex;justify-content:center;align-items:center;text-decoration:none!important;color:#fff!important;text-transform:uppercase;text-align:center;border:0;width:100%;min-height:68px;border-radius:5px;box-shadow:0 2px 7.2px 1.8px rgba(208,108,9,.51);background-color:#d46422}@media screen and (max-width:767px){.form-btn{font-size:20px;min-height:60px}}.form-btn:hover{box-shadow:.3px 4px 29px 0 rgba(50,35,65,.49)}.btn-blue{text-transform:uppercase;display:inline-block;border-radius:7px;box-shadow:.3px 4px 29px 0 rgba(50,35,65,.29);background-color:#1e3485;font-size:24px;font-weight:600;text-align:center;color:#fff;padding:20px 15px;width:100%;max-width:370px;text-decoration:none!important}@media screen and (max-width:767px){.btn-blue{font-size:20px;padding:15px 10px}}.btn-blue--red{background-color:#c80000}.btn-blue:hover{color:#fff;box-shadow:.3px 4px 29px 0 rgba(50,35,65,.69)}.title{color:#181b33;font-size:40px;margin-bottom:25px;font-weight:800}@media screen and (max-width:767px){.title{font-size:26px;margin-bottom:15px;text-align:center}}.line-title{font-size:25px;font-weight:700;color:#321470;margin-bottom:20px}@media screen and (max-width:767px){.line-title{font-size:20px;margin-bottom:10px}}.line-title:before{content:"";display:inline-block;width:45px;height:3px;background-color:#010003;margin-right:13px;vertical-align:middle;margin-top:-4px}@media screen and (max-width:767px){.line-title:before{width:35px}}.padding-60{padding:60px 0}@media screen and (max-width:767px){.padding-60{padding:30px 0}}.fs-22{font-size:22px}@media screen and (max-width:767px){.fs-22{font-size:18px}}.step{border-radius:10px;background-color:#fff;border-bottom:8px solid #c80000;padding:40px 20px;color:#151515;height:100%;overflow:hidden;position:relative}.step-row{counter-reset:list}.step:after{counter-increment:list;content:"0" counter(list);display:block;position:absolute;left:-15px;top:-10px;color:#e9ebf2;font-size:72px;font-weight:700}.step-inner{position:relative;z-index:2}.step-title{font-size:25px;font-weight:700;color:#321470;margin-bottom:15px}@media screen and (max-width:767px){.step-title{font-size:22px}}.step-text p:last-child{margin-bottom:0}.faq-item{margin-bottom:20px;transition:all .5s}.faq-item-title{cursor:pointer;font-size:18px;font-weight:600;text-transform:uppercase;color:#fff;display:flex;align-items:center;padding:5px 60px 5px 20px;border-radius:7px;box-shadow:.3px 4px 29px 0 rgba(50,35,65,.29);background-color:#0e1124;position:relative;min-height:91px;margin-bottom:0}@media screen and (max-width:767px){.faq-item-title{font-size:17px;min-height:71px;padding:10px 40px 10px 10px}}.faq-item-title:after{display:inline-flex;align-items:center;justify-content:center;color:#fff;width:30px;height:30px;background-color:transparent;border-radius:50%;content:"▾";font-weight:900;font-family:Font Awesome\\ 5 Free;-webkit-font-smoothing:antialiased;line-height:1;position:absolute;right:20px;top:50%;transform:translateY(-50%);transition:all .3s;font-size:24px}@media screen and (max-width:767px){.faq-item-title:after{right:10px;width:27px;height:27px;font-size:20px}}.faq-item-text{padding:0 20px;transition:all .5s;max-height:0;overflow:hidden}.faq-item.open{margin-bottom:0}.faq-item.open .faq-item-text{max-height:999px;padding:20px}.faq-item.open .faq-item-title:after{transform:translateY(-50%) rotate(180deg)}.footer{background-color:#0e1124;padding:30px 0}.footer-image{margin-bottom:15px}.footer-image img{width:100%;height:auto}.footer-image-mobile{display:none}@media(max-width:767px){.footer-image-mobile{display:inline-block;max-width:400px}}.footer-image-desktop{display:inline-block}@media(max-width:767px){.footer-image-desktop{display:none}}.footer-menu{padding:0;margin:0;display:flex;align-items:center;justify-content:flex-end;width:100%;list-style:none}@media screen and (max-width:767px){.footer-menu{flex-direction:column;margin-top:15px;align-items:flex-start}}.footer-menu li{padding:0 15px}@media screen and (max-width:767px){.footer-menu li{padding:0}}.footer-menu a{color:#fff!important;font-size:18px}@media screen and (max-width:767px){.footer-menu a{font-size:16px}}.copyright{text-align:center;color:#fff;font-size:16px;padding:15px 0;background-color:#1a1257;border-top:1px solid #362c82}textarea{width:100%;border-radius:7px;padding:15px}.input-wrapper{position:relative;margin-bottom:15px}.input-wrapper i{position:absolute;left:10px;top:15px}.input-wrapper input{padding-left:35px}.login-title{font-size:48px;text-transform:uppercase}@media screen and (max-width:767px){.login-title{font-size:28px}}.login-main{background-image:url(./assets/main-bg.webp);background-repeat:no-repeat;background-size:cover;background-position:50%;padding:60px 0;color:#fff}.login-form-title{font-size:24px;font-weight:700}@media screen and (max-width:767px){.login-form-title{font-size:20px}}.login-form-subtitle{font-size:18px}@media screen and (max-width:767px){.login-form-subtitle{font-size:16px}}.login-form-top{background-color:#04164b;color:#fff;text-align:center;margin-bottom:15px}.about_page .header{margin-bottom:0}.about-main{background-image:url(./assets/about-bg.webp);background-size:cover;background-repeat:no-repeat;color:#fff;padding:60px 0}@media(max-width:768px){.about-main{padding:30px 0}}.bg-image-1{background-image:url(./assets/bg-image-1.webp);background-repeat:no-repeat;background-size:cover;background-position:50%;color:#fff;padding:60px 0}@media(max-width:767px){.bg-image-1{padding:30px 0}}.half-1{background-color:rgba(233,235,240,.4);padding:60px 0;background-image:url(./assets/half-1.webp);background-repeat:no-repeat;background-size:29%;background-position:96% 50%}@media(max-width:768px){.half-1{padding-top:30px;padding-bottom:195px;background-size:320px;background-position:50% calc(100% - 20px)}}.half-2{padding:60px 0;background-image:url(./assets/half-2.webp);background-repeat:no-repeat;background-size:33%;background-position:0 50%}@media(max-width:768px){.half-2{padding-top:30px;padding-bottom:210px;background-size:320px;background-position:50% 100%}}.half-3{padding:60px 0;background-image:url(./assets/half-3.webp);background-repeat:no-repeat;background-size:33%;background-position:100% 50%}@media(max-width:768px){.half-3{padding-top:30px;padding-bottom:195px;background-size:320px;background-position:bottom}}.about-half-1{padding:60px 0;background-image:url(./assets/about-half-1.webp);background-repeat:no-repeat;background-size:33%;background-position:100% 50%}@media(max-width:768px){.about-half-1{padding-top:30px;padding-bottom:230px;background-size:320px;background-position:50% 100%}}.about-half-2{padding:60px 0;background-image:url(./assets/about-half-2.webp);background-repeat:no-repeat;background-size:32%;background-position:1% 50%}@media(max-width:768px){.about-half-2{padding-top:30px;padding-bottom:270px;background-size:320px;background-position:50% calc(100% - 20px)}}@media(-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-image:url(./assets/flags@2x.webp)!important}}.form-header-p{font-size:18px}.language{position:relative;display:inline-flex;align-items:center;color:#000;font-size:16px;z-index:9999;align-self:center;margin-bottom:10px;margin-top:10px}@media(max-width:767px){.language{font-size:16px;margin-right:15px}}.language img{margin-right:10px;width:21px}.language span{cursor:pointer;display:flex;align-items:center;padding:3px 5px;background:transparent}.language span i{margin-left:5px;vertical-align:middle;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #000}.iti,.modal.show .modal-dialog{color:#000}',
      '',
    ]);
  },
  function (e, t, n) {
    'use strict';
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || '',
                o = e[3];
              if (!o) return n;
              if (t && 'function' == typeof btoa) {
                var r =
                    ((a = o),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (l = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(s)),
                    '/*# '.concat(l, ' */')),
                  i = o.sources.map(function (e) {
                    return '/*# sourceURL='.concat(o.sourceRoot).concat(e, ' */');
                  });
                return [n].concat(i).concat([r]).join('\n');
              }
              var a, s, l;
              return [n].join('\n');
            })(t, e);
            return t[2] ? '@media '.concat(t[2], '{').concat(n, '}') : n;
          }).join('');
        }),
        (t.i = function (e, n) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var o = {}, r = 0; r < this.length; r++) {
            var i = this[r][0];
            null != i && (o[i] = !0);
          }
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            (null != s[0] && o[s[0]]) ||
              (n && !s[2] ? (s[2] = n) : n && (s[2] = '('.concat(s[2], ') and (').concat(n, ')')),
              t.push(s));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    'use strict';
    var o,
      r = {},
      i = function () {
        return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
      },
      a = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })();
    function s(e, t) {
      for (var n = [], o = {}, r = 0; r < e.length; r++) {
        var i = e[r],
          a = t.base ? i[0] + t.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] };
        o[a] ? o[a].parts.push(s) : n.push((o[a] = { id: a, parts: [s] }));
      }
      return n;
    }
    function l(e, t) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n],
          i = r[o.id],
          a = 0;
        if (i) {
          for (i.refs++; a < i.parts.length; a++) i.parts[a](o.parts[a]);
          for (; a < o.parts.length; a++) i.parts.push(g(o.parts[a], t));
        } else {
          for (var s = []; a < o.parts.length; a++) s.push(g(o.parts[a], t));
          r[o.id] = { id: o.id, refs: 1, parts: s };
        }
      }
    }
    function c(e) {
      var t = document.createElement('style');
      if (void 0 === e.attributes.nonce) {
        var o = n.nc;
        o && (e.attributes.nonce = o);
      }
      if (
        (Object.keys(e.attributes).forEach(function (n) {
          t.setAttribute(n, e.attributes[n]);
        }),
        'function' == typeof e.insert)
      )
        e.insert(t);
      else {
        var r = a(e.insert || 'head');
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        r.appendChild(t);
      }
      return t;
    }
    var d,
      u =
        ((d = []),
        function (e, t) {
          return (d[e] = t), d.filter(Boolean).join('\n');
        });
    function p(e, t, n, o) {
      var r = n ? '' : o.css;
      if (e.styleSheet) e.styleSheet.cssText = u(t, r);
      else {
        var i = document.createTextNode(r),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function f(e, t, n) {
      var o = n.css,
        r = n.media,
        i = n.sourceMap;
      if (
        (r && e.setAttribute('media', r),
        i &&
          btoa &&
          (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */',
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var h = null,
      m = 0;
    function g(e, t) {
      var n, o, r;
      if (t.singleton) {
        var i = m++;
        (n = h || (h = c(t))), (o = p.bind(null, n, i, !1)), (r = p.bind(null, n, i, !0));
      } else
        (n = c(t)),
          (o = f.bind(null, n, t)),
          (r = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(e),
        function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            o((e = t));
          } else r();
        }
      );
    }
    e.exports = function (e, t) {
      ((t = t || {}).attributes = 'object' == typeof t.attributes ? t.attributes : {}),
        t.singleton || 'boolean' == typeof t.singleton || (t.singleton = i());
      var n = s(e, t);
      return (
        l(n, t),
        function (e) {
          for (var o = [], i = 0; i < n.length; i++) {
            var a = n[i],
              c = r[a.id];
            c && (c.refs--, o.push(c));
          }
          e && l(s(e, t), t);
          for (var d = 0; d < o.length; d++) {
            var u = o[d];
            if (0 === u.refs) {
              for (var p = 0; p < u.parts.length; p++) u.parts[p]();
              delete r[u.id];
            }
          }
        }
      );
    };
  },
  function (e, t, n) {
    (function (e) {
      e('.to_top').click(function () {
        e([document.documentElement, document.body]).animate(
          { scrollTop: e('.formwrap-outer').offset().top },
          1e3,
        );
      });
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (e) {
      e('.question').on('click', function (t) {
        var n = e(this).closest('.media').find('.media-body p'),
          o = e(this).find('span');
        'none' === n.css('display')
          ? (n.slideDown(300), o.text('-'))
          : (n.slideUp(300), o.text('+'));
      });
    }.call(this, n(0)));
  },
  function (e, t) {
    var n = !1;
    function o(e) {
      if (!n) {
        var t = document.createElement('script');
        return (
          (t.src = e),
          (t.className = 'phone-script'),
          document.body.appendChild(t),
          new Promise(function (e, n) {
            (t.onload = function () {
              e();
            }),
              (t.onerror = function () {
                n();
              });
          })
        );
      }
    }
    setTimeout(function () {
      o('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/js/intlTelInput.min.js')
        .then(function () {
          o('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/js/utils.js')
            .then(function () {
              !(function () {
                for (
                  var e = document.head.querySelector('[name~=isoCode][content]').content,
                    t = document.getElementsByClassName('phone'),
                    o = document.getElementsByClassName('area_code'),
                    r = document.getElementsByClassName('iti'),
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  var a = intlTelInput(t[i], { initialCountry: e });
                  (r[i].style.width = '100%'),
                    (o[i].value = '+' + a.getSelectedCountryData().dialCode);
                }
                n = !0;
              })();
            })
            .catch(function () {
              console.error('Script utils.js loading failed! Handle this error');
            });
        })
        .catch(function () {
          console.error('Script intlTelInput.min.js loading failed! Handle this error');
        });
      var e = document.createElement('link');
      (e.rel = 'stylesheet'),
        (e.href =
          'data:text/css,' +
          escape(
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/css/intlTelInput.css');",
          )),
        document.getElementsByTagName('head')[0].appendChild(e);
    }, 800);
  },
  function (e, t, n) {
    (function (e) {
      var t = document.head.querySelector('[name~=isoCode][content]').content;
      e('[data-id=form]').submit(function (n) {
        var o = e(this);
        e(this).find('.register-btn').text('SENDING...').addClass('disabled_bttn'),
          e('#openModalLoading').addClass('open'),
          e('.alert').addClass('hidden');
        e(this).attr('data-lang') && e(this).attr('data-lang');
        var r = e(this).serializeArray(),
          i = e(this).find('.register-btn').text();
        return (
          r.push({ name: 'lang', value: e(this).attr('data-lang') }, { name: 'isoCode', value: t }),
          e(this).attr('data-lang'),
          e.ajax({
            url: '/api/',
            type: 'POST',
            data: r,
            success: function (e) {
              o.find('.alert').text('').addClass('hidden'),
                (window.location.href = JSON.parse(e).extras.redirect.url);
            },
            error: function (t) {
              setTimeout(function () {
                e('.register-btn').text(i).removeClass('disabled_bttn'),
                  e('#openModalLoading').removeClass('open'),
                  o.find('.alert').text('').removeClass('hidden'),
                  e.each(JSON.parse(t.responseText).errors, function (e, t) {
                    o.find('.alert').append(
                      (function (e) {
                        switch (e) {
                          case 'The email field is required.':
                            e = 'Le champ "email" est obligatoire.';
                            break;
                          case 'The first name field is required.':
                            e = 'Le champ "prénom" est obligatoire.';
                            break;
                          case 'The last name field is required.':
                            e = 'Le champ du "nom" est obligatoire.';
                            break;
                          case 'The phone field is required.':
                            e = 'Le champ du "téléphone" est obligatoire.';
                        }
                        return e;
                      })(t) + '<br />',
                    );
                  });
              }, 1200);
            },
          }),
          !1
        );
      });
    }.call(this, n(0)));
  },
]);

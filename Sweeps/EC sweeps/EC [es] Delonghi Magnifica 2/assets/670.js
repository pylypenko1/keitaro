'use strict';
(self.webpackChunkus_sams_new = self.webpackChunkus_sams_new || []).push([
  [670],
  {
    670: (e, n, t) => {
      t.r(n),
        t.d(n, {
          default: () => B,
        });
      var r = t(294),
        i = t(788);
      const c = t.p + 'f8c5d499aeb170384df1d28a40ba0824.svg',
        l = t.p + 'pngwing.com-2.png';
      var a,
        o,
        s,
        u,
        f,
        m,
        d,
        p,
        h,
        g,
        x,
        b = t(390);
      function v(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != t) {
              var r,
                i,
                c,
                l,
                a = [],
                o = !0,
                s = !1;
              try {
                if (((c = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  o = !1;
                } else
                  for (; !(o = (r = c.call(t)).done) && (a.push(r.value), a.length !== n); o = !0);
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  if (!o && null != t.return && ((l = t.return()), Object(l) !== l)) return;
                } finally {
                  if (s) throw i;
                }
              }
              return a;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ('string' == typeof e) return y(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === t && e.constructor && (t = e.constructor.name);
            if ('Map' === t || 'Set' === t) return Array.from(e);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return y(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function y(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function w(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, {
              raw: {
                value: Object.freeze(n),
              },
            }),
          )
        );
      }
      var E = i.ZP.div(
          a ||
            (a = w([
              '\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  max-width: ',
              ';\n  height: 100%;\n  z-index: 999;\n  background: #ece9e4;\n  overflow-y: auto;\n  transition: max-width 0.6s 0.1s;\n',
            ])),
          function (e) {
            return e.isShow ? '100%' : '0';
          },
        ),
        z = i.ZP.div(o || (o = w(['\n  padding: 10px;\n']))),
        P = i.ZP.div(
          s ||
            (s = w([
              '\n  width: 35px;\n  height: 35px;\n  margin-left: auto;\n  margin-right: 10px;\n  fill: #000000;\n  cursor: pointer;\n',
            ])),
        ),
        S = i.ZP.ul(
          u ||
            (u = w([
              '\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 400px;\n  padding: 10px;\n  margin: 0;\n',
            ])),
        ),
        Z = i.ZP.li(
          f ||
            (f = w([
              '\n  border-bottom: 2px solid #000000;\n  transition: all 1s linear;\n  padding: 10px 7px 0 7px;\n  min-width: 300px;\n',
            ])),
        ),
        j = i.ZP.div(
          m ||
            (m = w([
              '\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  cursor: pointer;\n',
            ])),
        ),
        A = i.ZP.div(
          d || (d = w(['\n  margin-right: 7px;\n  font-family: Roboto;\n  font-size: 14px;\n'])),
        ),
        C = i.ZP.div(p || (p = w(['']))),
        k = i.ZP.img(
          h ||
            (h = w([
              '\n  vertical-align: middle;\n  border-style: none;\n  transform: rotate(',
              ');\n  transition: 0.3s;\n',
            ])),
          function (e) {
            return e.isActive ? '180deg' : '0deg';
          },
        ),
        M = i.ZP.div(
          g ||
            (g = w([
              '\n  max-height: ',
              ';\n  overflow: hidden;\n  transition: max-height 0.3s linear;\n  font-family: Roboto;\n  font-size: 16px;\n  line-height: 1.5;\n',
            ])),
          function (e) {
            return e.isActive ? '100%' : '0';
          },
        ),
        O = i.ZP.svg(
          x ||
            (x = w([
              '\n  width: 60px;\n  height: 60px;\n  position: fixed;\n  bottom: 10%;\n  right: 1%;\n  z-index: 999;\n  cursor: pointer;\n  fill: #000000;\n',
            ])),
        );
      const B = function (e) {
        var n = e.questions,
          t = v((0, r.useState)(!1), 2),
          i = t[0],
          a = t[1];
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            O,
            {
              src: l,
              onClick: function () {
                return a(!0);
              },
              viewBox: '0 0 48 48',
            },
            r.createElement('path', {
              fill: '#3B2B2F',
              d: 'M23.957,0c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S37.212,0,23.957,0z M24.663,36.56  c-0.451,0.486-1.091,0.729-1.924,0.729c-0.832,0-1.471-0.237-1.916-0.712s-0.668-1.14-0.668-1.995c0-1.77,0.861-2.654,2.584-2.654  c0.844,0,1.488,0.231,1.934,0.694s0.668,1.116,0.668,1.96C25.341,35.414,25.114,36.073,24.663,36.56z M30.931,19.403  c-0.258,0.686-0.648,1.339-1.17,1.96s-1.42,1.43-2.697,2.426c-1.09,0.855-1.82,1.564-2.189,2.127  c-0.312,0.475-0.483,1.096-0.531,1.847c-0.003,0.016-0.008,0.021-0.011,0.037c-0.21,1.183-1.584,1.175-1.584,1.175h-0.722  c0,0-1.195-0.188-1.15-1.125c0-1.289,0.234-2.361,0.703-3.217s1.29-1.74,2.461-2.654c1.395-1.102,2.293-1.957,2.697-2.566  s0.607-1.336,0.607-2.18c0-0.984-0.328-1.74-0.984-2.268s-1.6-0.791-2.83-0.791c-1.114,0-2.145,0.158-3.094,0.475  c-0.518,0.173-1.027,0.369-1.532,0.58c-0.011,0.004-0.015,0.002-0.027,0.007c-1.166,0.451-1.707-0.466-1.707-0.466l-0.458-0.959  c-0.002-0.006-0.516-1.177,0.63-1.692c2.043-0.934,4.204-1.406,6.486-1.406c2.296,0,4.119,0.563,5.466,1.688  s2.021,2.678,2.021,4.658C31.317,17.936,31.188,18.718,30.931,19.403z',
            }),
          ),
          r.createElement(
            E,
            {
              isShow: i,
            },
            r.createElement(
              z,
              null,
              r.createElement(
                P,
                {
                  onClick: function () {
                    return a(!1);
                  },
                },
                r.createElement(
                  'svg',
                  {
                    x: '0px',
                    y: '0px',
                    viewBox: '0 0 512 512',
                    width: '35px',
                    height: '35px',
                  },
                  r.createElement(
                    'g',
                    {
                      transform: 'translate(1 1)',
                    },
                    r.createElement(
                      'g',
                      null,
                      r.createElement(
                        'g',
                        null,
                        r.createElement('path', {
                          d: 'M436.016,73.984c-99.979-99.979-262.075-99.979-362.033,0.002c-99.978,99.978-99.978,262.073,0.004,362.031 c99.954,99.978,262.05,99.978,362.029-0.002C535.995,336.059,535.995,173.964,436.016,73.984z M405.848,405.844 c-83.318,83.318-218.396,83.318-301.691,0.004c-83.318-83.299-83.318-218.377-0.002-301.693 c83.297-83.317,218.375-83.317,301.691,0S489.162,322.549,405.848,405.844z',
                        }),
                        r.createElement('path', {
                          d: 'M360.592,149.408c-8.331-8.331-21.839-8.331-30.17,0l-75.425,75.425l-75.425-75.425c-8.331-8.331-21.839-8.331-30.17,0 s-8.331,21.839,0,30.17l75.425,75.425L149.43,330.4c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0 l75.397-75.397l75.419,75.419c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17l-75.419-75.419l75.425-75.425 C368.923,171.247,368.923,157.74,360.592,149.408z',
                        }),
                      ),
                    ),
                  ),
                ),
              ),
              r.createElement(
                S,
                null,
                n.map(function (e) {
                  var n = v((0, r.useState)(!1), 2),
                    t = n[0],
                    i = n[1];
                  return r.createElement(
                    Z,
                    {
                      key: (0, b.x)(1, 1e3),
                    },
                    r.createElement(
                      j,
                      {
                        onClick: function () {
                          return i(!t);
                        },
                      },
                      r.createElement(A, null, e.text),
                      r.createElement(
                        C,
                        null,
                        r.createElement(k, {
                          src: c,
                          isActive: t,
                        }),
                      ),
                    ),
                    r.createElement(
                      M,
                      {
                        isActive: t,
                      },
                      r.createElement(
                        'p',
                        {
                          style: {
                            marginTop: 0,
                            marginBottom: '1rem',
                          },
                        },
                        e.answer,
                      ),
                    ),
                  );
                }),
              ),
            ),
          ),
        );
      };
    },
  },
]);

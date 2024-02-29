"use strict";
(self.webpackChunkus_sams_new = self.webpackChunkus_sams_new || []).push([[146], {
    146: (n,e,t)=>{
        t.r(e),
        t.d(e, {
            default: ()=>A
        });
        var r, i, o = t(294), a = t(788);
        function l(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        var u = a.ZP.div(r || (r = l(['\n    display: block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    color: #3B2B2F;\n\n    width: 124px;\n    height: 124px;\n    margin-top: -62px;\n    margin-left: -62px;\n\n    &:before {\n        font-size: 1.2rem;\n        padding: 10px;\n        text-align: center;\n        content: "DeLonghi®";\n\n        position: absolute;\n        top: 33%;\n        left: 7%;\n        text-align: center;\n        font-family: strata-icons !important;\n        font-style: normal;\n        font-weight: normal !important;\n        vertical-align: top;\n    }\n\n    &:after {     \n        content: "";\n        height: 124px;\n        width: 124px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        -webkit-animation: spinnerRotation .6s linear infinite;\n        animation: spinnerRotation .6s linear infinite;\n        border-radius: 100%;\n        text-indent: -9999px;\n        margin-top: 7%;\n        border: 12px solid rgba(40,50,90,.15);\n        border-top-color: #3B2B2F;\n    }\n'])))
          , c = a.ZP.div(i || (i = l(["\n    position: relative;\n    min-height: 124px;\n"])));
        const f = function(n) {
            return o.createElement(c, null, o.createElement(u, null))
        };
        var s, m, p, d, h;
        function b(n) {
            return function(n) {
                if (Array.isArray(n))
                    return v(n)
            }(n) || function(n) {
                if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"])
                    return Array.from(n)
            }(n) || g(n) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null != t) {
                    var r, i, o, a, l = [], u = !0, c = !1;
                    try {
                        if (o = (t = t.call(n)).next,
                        0 === e) {
                            if (Object(t) !== t)
                                return;
                            u = !1
                        } else
                            for (; !(u = (r = o.call(t)).done) && (l.push(r.value),
                            l.length !== e); u = !0)
                                ;
                    } catch (n) {
                        c = !0,
                        i = n
                    } finally {
                        try {
                            if (!u && null != t.return && (a = t.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (c)
                                throw i
                        }
                    }
                    return l
                }
            }(n, e) || g(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(n, e) {
            if (n) {
                if ("string" == typeof n)
                    return v(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                return "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? v(n, e) : void 0
            }
        }
        function v(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, r = new Array(e); t < e; t++)
                r[t] = n[t];
            return r
        }
        function x(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        var w = a.ZP.div(s || (s = x(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 62vh;\n    @media only screen and (max-width: 800px) {\n        height: 74vh;\n    }\n"])))
          , j = a.ZP.ul(m || (m = x(["\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n"])))
          , E = a.ZP.li(p || (p = x(["\n    font-size: 14px;\n    line-height: 18px;\n    padding: 0.25rem;\n    display: flex;\n    justify-content: center;\n    font-weight: 700;\n"])))
          , O = a.ZP.div(d || (d = x(["\n    display: flex;\n    justify-content: center;\n    padding: 1.5rem;\n"])))
          , P = a.ZP.h2(h || (h = x(["\n    font-weight: 700;\n    font-family: Tahoma, Geneva, sans-serif;\n    line-height: 1.2;\n    font-size: 1.5rem;\n    text-align: center;\n    margin-top: 1rem;\n"])));
        const A = function(n) {
            var e = n.onValidationFinish
              , t = y((0,
            o.useState)([]), 2)
              , r = t[0]
              , i = t[1];
            return (0,
            o.useEffect)((function() {
                setTimeout((function() {
                    return i(["Ha respondido a 3/3 de las preguntas!"])
                }
                ), 500),
                setTimeout((function() {
                    return i((function(n) {
                        return [].concat(b(n), ["No hay preselección de su IP"])
                    }
                    ))
                }
                ), 1500),
                setTimeout((function() {
                    i((function(n) {
                        return [].concat(b(n), ["los regalos estan cargados..."])
                    }
                    )),
                    setTimeout(e, 700)
                }
                ), 2500)
            }
            ), []),
            o.createElement(w, null, o.createElement(P, null, "Tus respuestas serán revisadas"), o.createElement(O, null, o.createElement(f, null)), o.createElement(j, null, r.map((function(n) {
                return o.createElement(E, null, n)
            }
            ))))
        }
    }
}]);

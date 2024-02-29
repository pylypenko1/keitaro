"use strict";
(self.webpackChunkus_sams_new = self.webpackChunkus_sams_new || []).push([[568], {
    568: (e,t,n)=>{
        n.r(t),
        n.d(t, {
            default: ()=>X
        });
        var r = n(294);
        function s() {
            return s = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            s.apply(this, arguments)
        }
        function a(e, t) {
            if (null == e)
                return {};
            var n, r, s = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (s[n] = e[n]);
            return s
        }
        function o(e, t) {
            return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            o(e, t)
        }
        function i(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            o(e, t)
        }
        function l(e, t) {
            return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)","g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
        }
        var u = n(935);
        const c = !1
          , p = r.createContext(null);
        var f = function(e) {
            return e.scrollTop
        }
          , d = "unmounted"
          , m = "exited"
          , h = "entering"
          , E = "entered"
          , x = "exiting"
          , v = function(e) {
            function t(t, n) {
                var r;
                r = e.call(this, t, n) || this;
                var s, a = n && !n.isMounting ? t.enter : t.appear;
                return r.appearStatus = null,
                t.in ? a ? (s = m,
                r.appearStatus = h) : s = E : s = t.unmountOnExit || t.mountOnEnter ? d : m,
                r.state = {
                    status: s
                },
                r.nextCallback = null,
                r
            }
            i(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                return e.in && t.status === d ? {
                    status: m
                } : null
            }
            ;
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }
            ,
            n.componentDidUpdate = function(e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== h && n !== E && (t = h) : n !== h && n !== E || (t = x)
                }
                this.updateStatus(!1, t)
            }
            ,
            n.componentWillUnmount = function() {
                this.cancelNextCallback()
            }
            ,
            n.getTimeouts = function() {
                var e, t, n, r = this.props.timeout;
                return e = t = n = r,
                null != r && "number" != typeof r && (e = r.exit,
                t = r.enter,
                n = void 0 !== r.appear ? r.appear : t),
                {
                    exit: e,
                    enter: t,
                    appear: n
                }
            }
            ,
            n.updateStatus = function(e, t) {
                if (void 0 === e && (e = !1),
                null !== t)
                    if (this.cancelNextCallback(),
                    t === h) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var n = this.props.nodeRef ? this.props.nodeRef.current : u.findDOMNode(this);
                            n && f(n)
                        }
                        this.performEnter(e)
                    } else
                        this.performExit();
                else
                    this.props.unmountOnExit && this.state.status === m && this.setState({
                        status: d
                    })
            }
            ,
            n.performEnter = function(e) {
                var t = this
                  , n = this.props.enter
                  , r = this.context ? this.context.isMounting : e
                  , s = this.props.nodeRef ? [r] : [u.findDOMNode(this), r]
                  , a = s[0]
                  , o = s[1]
                  , i = this.getTimeouts()
                  , l = r ? i.appear : i.enter;
                !e && !n || c ? this.safeSetState({
                    status: E
                }, (function() {
                    t.props.onEntered(a)
                }
                )) : (this.props.onEnter(a, o),
                this.safeSetState({
                    status: h
                }, (function() {
                    t.props.onEntering(a, o),
                    t.onTransitionEnd(l, (function() {
                        t.safeSetState({
                            status: E
                        }, (function() {
                            t.props.onEntered(a, o)
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ,
            n.performExit = function() {
                var e = this
                  , t = this.props.exit
                  , n = this.getTimeouts()
                  , r = this.props.nodeRef ? void 0 : u.findDOMNode(this);
                t && !c ? (this.props.onExit(r),
                this.safeSetState({
                    status: x
                }, (function() {
                    e.props.onExiting(r),
                    e.onTransitionEnd(n.exit, (function() {
                        e.safeSetState({
                            status: m
                        }, (function() {
                            e.props.onExited(r)
                        }
                        ))
                    }
                    ))
                }
                ))) : this.safeSetState({
                    status: m
                }, (function() {
                    e.props.onExited(r)
                }
                ))
            }
            ,
            n.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(),
                this.nextCallback = null)
            }
            ,
            n.safeSetState = function(e, t) {
                t = this.setNextCallback(t),
                this.setState(e, t)
            }
            ,
            n.setNextCallback = function(e) {
                var t = this
                  , n = !0;
                return this.nextCallback = function(r) {
                    n && (n = !1,
                    t.nextCallback = null,
                    e(r))
                }
                ,
                this.nextCallback.cancel = function() {
                    n = !1
                }
                ,
                this.nextCallback
            }
            ,
            n.onTransitionEnd = function(e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : u.findDOMNode(this)
                  , r = null == e && !this.props.addEndListener;
                if (n && !r) {
                    if (this.props.addEndListener) {
                        var s = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback]
                          , a = s[0]
                          , o = s[1];
                        this.props.addEndListener(a, o)
                    }
                    null != e && setTimeout(this.nextCallback, e)
                } else
                    setTimeout(this.nextCallback, 0)
            }
            ,
            n.render = function() {
                var e = this.state.status;
                if (e === d)
                    return null;
                var t = this.props
                  , n = t.children
                  , s = (t.in,
                t.mountOnEnter,
                t.unmountOnExit,
                t.appear,
                t.enter,
                t.exit,
                t.timeout,
                t.addEndListener,
                t.onEnter,
                t.onEntering,
                t.onEntered,
                t.onExit,
                t.onExiting,
                t.onExited,
                t.nodeRef,
                a(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return r.createElement(p.Provider, {
                    value: null
                }, "function" == typeof n ? n(e, s) : r.cloneElement(r.Children.only(n), s))
            }
            ,
            t
        }(r.Component);
        function g() {}
        v.contextType = p,
        v.propTypes = {},
        v.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: g,
            onEntering: g,
            onEntered: g,
            onExit: g,
            onExiting: g,
            onExited: g
        },
        v.UNMOUNTED = d,
        v.EXITED = m,
        v.ENTERING = h,
        v.ENTERED = E,
        v.EXITING = x;
        const b = v;
        var y = function(e, t) {
            return e && t && t.split(" ").forEach((function(t) {
                return r = t,
                void ((n = e).classList ? n.classList.remove(r) : "string" == typeof n.className ? n.className = l(n.className, r) : n.setAttribute("class", l(n.className && n.className.baseVal || "", r)));
                var n, r
            }
            ))
        }
          , C = function(e) {
            function t() {
                for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++)
                    r[s] = arguments[s];
                return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                },
                t.onEnter = function(e, n) {
                    var r = t.resolveArguments(e, n)
                      , s = r[0]
                      , a = r[1];
                    t.removeClasses(s, "exit"),
                    t.addClass(s, a ? "appear" : "enter", "base"),
                    t.props.onEnter && t.props.onEnter(e, n)
                }
                ,
                t.onEntering = function(e, n) {
                    var r = t.resolveArguments(e, n)
                      , s = r[0]
                      , a = r[1] ? "appear" : "enter";
                    t.addClass(s, a, "active"),
                    t.props.onEntering && t.props.onEntering(e, n)
                }
                ,
                t.onEntered = function(e, n) {
                    var r = t.resolveArguments(e, n)
                      , s = r[0]
                      , a = r[1] ? "appear" : "enter";
                    t.removeClasses(s, a),
                    t.addClass(s, a, "done"),
                    t.props.onEntered && t.props.onEntered(e, n)
                }
                ,
                t.onExit = function(e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "appear"),
                    t.removeClasses(n, "enter"),
                    t.addClass(n, "exit", "base"),
                    t.props.onExit && t.props.onExit(e)
                }
                ,
                t.onExiting = function(e) {
                    var n = t.resolveArguments(e)[0];
                    t.addClass(n, "exit", "active"),
                    t.props.onExiting && t.props.onExiting(e)
                }
                ,
                t.onExited = function(e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "exit"),
                    t.addClass(n, "exit", "done"),
                    t.props.onExited && t.props.onExited(e)
                }
                ,
                t.resolveArguments = function(e, n) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
                }
                ,
                t.getClassNames = function(e) {
                    var n = t.props.classNames
                      , r = "string" == typeof n
                      , s = r ? "" + (r && n ? n + "-" : "") + e : n[e];
                    return {
                        baseClassName: s,
                        activeClassName: r ? s + "-active" : n[e + "Active"],
                        doneClassName: r ? s + "-done" : n[e + "Done"]
                    }
                }
                ,
                t
            }
            i(t, e);
            var n = t.prototype;
            return n.addClass = function(e, t, n) {
                var r = this.getClassNames(t)[n + "ClassName"]
                  , s = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === n && s && (r += " " + s),
                "active" === n && e && f(e),
                r && (this.appliedClasses[t][n] = r,
                function(e, t) {
                    e && t && t.split(" ").forEach((function(t) {
                        return r = t,
                        void ((n = e).classList ? n.classList.add(r) : function(e, t) {
                            return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                        }(n, r) || ("string" == typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
                        var n, r
                    }
                    ))
                }(e, r))
            }
            ,
            n.removeClasses = function(e, t) {
                var n = this.appliedClasses[t]
                  , r = n.base
                  , s = n.active
                  , a = n.done;
                this.appliedClasses[t] = {},
                r && y(e, r),
                s && y(e, s),
                a && y(e, a)
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = (e.classNames,
                a(e, ["classNames"]));
                return r.createElement(b, s({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }))
            }
            ,
            t
        }(r.Component);
        C.defaultProps = {
            classNames: ""
        },
        C.propTypes = {};
        const N = C;
        var S, O, k, A, P, T, w, R, j, I = n(788);
        function L(e, t) {
            return t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        var D = I.ZP.div(S || (S = L(["\n    padding: 0 1rem;\n"])))
          , M = I.ZP.div(O || (O = L(["\n    box-shadow: 0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);\n    border-radius: 1rem;\n    border: solid #f8f9fa 1px;\n    background-color: #f8f9fa;\n"])))
          , U = I.ZP.div(k || (k = L(["\n    padding: 0.75rem 0.75rem 0.5rem 0.75rem;\n"])))
          , Z = I.ZP.div(A || (A = L(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 0.5rem;\n    \n"])))
          , _ = I.ZP.div(P || (P = L(["\n    display: flex;\n    width: 100%;\n    margin-bottom: 0.5rem;\n"])))
          , q = I.ZP.div(T || (T = L(["\n"])))
          , z = I.ZP.span(w || (w = L(["\n    font-size: 1.25rem;\n    line-height: 1.25;\n    color: #000;\n    font-family: Ubuntu,Verdana,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Cantarell,Helvetica Neue,sans-serif;\n    font-weight: 700;\n"])))
          , B = I.ZP.div(R || (R = L(["\n    display: flex;\n    margin: 1rem 0 0.75rem 0;\n    padding-left: 0.5rem;\n"])))
          , F = I.ZP.span(j || (j = L(["\n    font-family: Open Sans,Arial,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;\n    font-weight: 400;\n    color: #212529;\n    font-size: 1rem;\n"])))
          , V = n(799);
        function $(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, s, a, o, i = [], l = !0, u = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            l = !1
                        } else
                            for (; !(l = (r = a.call(n)).done) && (i.push(r.value),
                            i.length !== t); l = !0)
                                ;
                    } catch (e) {
                        u = !0,
                        s = e
                    } finally {
                        try {
                            if (!l && null != n.return && (o = n.return(),
                            Object(o) !== o))
                                return
                        } finally {
                            if (u)
                                throw s
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return G(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return G(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function G(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var H = function(e) {
            var t = e.questionNumber
              , n = e.questions
              , s = e.onAnyButtonClick
              , a = e.getImage
              , o = e.getInfo
              , i = n[t];
            return r.createElement(U, null, r.createElement(q, null, r.createElement(z, null, "Cuestión ", t + 1, " of ", n.length)), r.createElement(B, null, r.createElement(F, null, i.text)), r.createElement(Z, null, (i.answers || []).map((function(e, t) {
                return r.createElement(_, {
                    key: e
                }, " ", r.createElement(V.z, {
                    text: e,
                    onClick: function() {
                        var n, r;
                        i.f ? s(t) : s(),
                        i.f && (o("product", e),
                        a(t),
                        n = document.querySelector("#text"),
                        r = document.querySelector("#banner"),
                        n.classList.add("hidden"),
                        r.classList.add("hidden"))
                    }
                }))
            }
            ))))
        };
        const X = function(e) {
            var t = e.questions
              , n = void 0 === t ? [] : t
              , s = e.onSurveyFinish
              , a = e.setPrize
              , o = e.getInfo
              , i = e.getImage
              , l = $((0,
            r.useState)(0), 2)
              , u = l[0]
              , c = l[1]
              , p = $((0,
            r.useState)(!0), 2)
              , f = p[0]
              , d = p[1];
            return r.createElement(D, null, r.createElement(M, null, r.createElement(N, {
                in: f,
                timeout: 400,
                classNames: "my-node",
                onExited: function() {
                    u < n.length - 1 ? c(u + 1) : u === n.length - 1 && s(),
                    d(!0)
                }
            }, r.createElement(H, {
                questionNumber: u,
                questions: n,
                getInfo: o,
                getImage: i,
                onAnyButtonClick: function(e) {
                    d(!1),
                    e && a(e)
                }
            }))))
        }
    }
}]);

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var e, t, i, n, r, a, o, s, l, p, m, h, d, c;
    _gsScope._gsDefine(
        "TweenMax",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (e, t, i) {
            var n = function (e) {
                    var t,
                        i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i;
                },
                r = function (e, t, i) {
                    var n,
                        r,
                        a = e.cycle;
                    for (n in a) e[n] = "function" == typeof (r = a[n]) ? r(i, t[i], t) : r[i % r.length];
                    delete e.cycle;
                },
                a = function (e) {
                    if ("function" == typeof e) return e;
                    var t = "object" == typeof e ? e : { each: e },
                        i = t.ease,
                        n = t.from || 0,
                        r = t.base || 0,
                        a = {},
                        o = isNaN(n),
                        s = t.axis,
                        l = { center: 0.5, end: 1 }[n] || 0;
                    return function (e, p, m) {
                        var h,
                            d,
                            c,
                            u,
                            f,
                            g,
                            y,
                            _,
                            v,
                            b = (m || t).length,
                            w = a[b];
                        if (!w) {
                            if (!(v = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                for (y = -1 / 0; y < (y = m[v++].getBoundingClientRect().left) && v < b; );
                                v--;
                            }
                            for (w = a[b] = [], h = o ? Math.min(v, b) * l - 0.5 : n % v, d = o ? (b * l) / v - 0.5 : (n / v) | 0, y = 0, _ = 1 / 0, g = 0; g < b; g++)
                                (c = (g % v) - h), (u = d - ((g / v) | 0)), (w[g] = f = s ? Math.abs("y" === s ? u : c) : Math.sqrt(c * c + u * u)), f > y && (y = f), f < _ && (_ = f);
                            (w.max = y - _), (w.min = _), (w.v = b = t.amount || t.each * (v > b ? b - 1 : s ? ("y" === s ? b / v : v) : Math.max(v, b / v)) || 0), (w.b = b < 0 ? r - b : r);
                        }
                        return (b = (w[e] - w.min) / w.max), w.b + (i ? i.getRatio(b) : b) * w.v;
                    };
                },
                o = function (e, t, n) {
                    i.call(this, e, t, n),
                        (this._cycle = 0),
                        (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        this._repeat && this._uncache(!0),
                        (this.render = o.prototype.render);
                },
                s = i._internals,
                l = s.isSelector,
                p = s.isArray,
                m = (o.prototype = i.to({}, 0.1, {})),
                h = [];
            (o.version = "2.1.3"),
                (m.constructor = o),
                (m.kill()._gc = !1),
                (o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf),
                (o.getTweensOf = i.getTweensOf),
                (o.lagSmoothing = i.lagSmoothing),
                (o.ticker = i.ticker),
                (o.render = i.render),
                (o.distribute = a),
                (m.invalidate = function () {
                    return (
                        (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        (this._yoyoEase = null),
                        this._uncache(!0),
                        i.prototype.invalidate.call(this)
                    );
                }),
                (m.updateTo = function (e, t) {
                    var n,
                        r = this.ratio,
                        a = this.vars.immediateRender || e.immediateRender;
                    for (n in (t && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e))
                        this.vars[n] = e[n];
                    if (this._initted || a)
                        if (t) (this._initted = !1), a && this.render(0, !0, !0);
                        else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
                            var o = this._totalTime;
                            this.render(0, !0, !1), (this._initted = !1), this.render(o, !0, !1);
                        } else if (((this._initted = !1), this._init(), this._time > 0 || a)) for (var s, l = 1 / (1 - r), p = this._firstPT; p; ) (s = p.s + p.c), (p.c *= l), (p.s = s - p.c), (p = p._next);
                    return this;
                }),
                (m.render = function (e, t, n) {
                    this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                    var r,
                        a,
                        o,
                        l,
                        p,
                        m,
                        h,
                        d,
                        c,
                        u = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        g = this._totalTime,
                        y = this._cycle,
                        _ = this._duration,
                        v = this._rawPrevTime;
                    if (
                        (e >= u - 1e-8 && e >= 0
                            ? ((this._totalTime = u),
                              (this._cycle = this._repeat),
                              this._yoyo && 0 != (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = _), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                              this._reversed || ((r = !0), (a = "onComplete"), (n = n || this._timeline.autoRemoveChildren)),
                              0 === _ &&
                                  (this._initted || !this.vars.lazy || n) &&
                                  (this._startTime === this._timeline._duration && (e = 0),
                                  (v < 0 || (e <= 0 && e >= -1e-8) || (1e-8 === v && "isPause" !== this.data)) && v !== e && ((n = !0), v > 1e-8 && (a = "onReverseComplete")),
                                  (this._rawPrevTime = d = !t || e || v === e ? e : 1e-8)))
                            : e < 1e-8
                            ? ((this._totalTime = this._time = this._cycle = 0),
                              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                              (0 !== g || (0 === _ && v > 0)) && ((a = "onReverseComplete"), (r = this._reversed)),
                              e > -1e-8 ? (e = 0) : e < 0 && ((this._active = !1), 0 === _ && (this._initted || !this.vars.lazy || n) && (v >= 0 && (n = !0), (this._rawPrevTime = d = !t || e || v === e ? e : 1e-8))),
                              this._initted || (n = !0))
                            : ((this._totalTime = this._time = e),
                              0 !== this._repeat &&
                                  ((this._cycle = (this._totalTime / (l = _ + this._repeatDelay)) >> 0),
                                  0 !== this._cycle && this._cycle === this._totalTime / l && g <= e && this._cycle--,
                                  (this._time = this._totalTime - this._cycle * l),
                                  this._yoyo &&
                                      0 != (1 & this._cycle) &&
                                      ((this._time = _ - this._time),
                                      (c = this._yoyoEase || this.vars.yoyoEase) &&
                                          (this._yoyoEase ||
                                              (this._yoyoEase = c =
                                                  !0 !== c || this._initted
                                                      ? !0 === c
                                                          ? this._ease
                                                          : c instanceof Ease
                                                          ? c
                                                          : Ease.map[c]
                                                      : (c = this.vars.ease)
                                                      ? c instanceof Ease
                                                          ? c
                                                          : "function" == typeof c
                                                          ? new Ease(c, this.vars.easeParams)
                                                          : Ease.map[c] || i.defaultEase
                                                      : i.defaultEase),
                                          (this.ratio = c ? 1 - c.getRatio((_ - this._time) / _) : 0))),
                                  this._time > _ ? (this._time = _) : this._time < 0 && (this._time = 0)),
                              this._easeType && !c
                                  ? ((p = this._time / _),
                                    (1 === (m = this._easeType) || (3 === m && p >= 0.5)) && (p = 1 - p),
                                    3 === m && (p *= 2),
                                    1 === (h = this._easePower) ? (p *= p) : 2 === h ? (p *= p * p) : 3 === h ? (p *= p * p * p) : 4 === h && (p *= p * p * p * p),
                                    (this.ratio = 1 === m ? 1 - p : 2 === m ? p : this._time / _ < 0.5 ? p / 2 : 1 - p / 2))
                                  : c || (this.ratio = this._ease.getRatio(this._time / _))),
                        f !== this._time || n || y !== this._cycle)
                    ) {
                        if (!this._initted) {
                            if ((this._init(), !this._initted || this._gc)) return;
                            if (!n && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                                return (this._time = f), (this._totalTime = g), (this._rawPrevTime = v), (this._cycle = y), s.lazyTweens.push(this), void (this._lazy = [e, t]);
                            !this._time || r || c ? r && this._ease._calcEnd && !c && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : (this.ratio = this._ease.getRatio(this._time / _));
                        }
                        for (
                            !1 !== this._lazy && (this._lazy = !1),
                                this._active || (!this._paused && this._time !== f && e >= 0 && (this._active = !0)),
                                0 === g &&
                                    (2 === this._initted && e > 0 && this._init(),
                                    this._startAt && (e >= 0 ? this._startAt.render(e, !0, n) : a || (a = "_dummyGS")),
                                    this.vars.onStart && ((0 === this._totalTime && 0 !== _) || t || this._callback("onStart"))),
                                o = this._firstPT;
                            o;

                        )
                            o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
                        this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, !0, n), t || ((this._totalTime !== g || a) && this._callback("onUpdate"))),
                            this._cycle !== y && (t || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                            a &&
                                ((this._gc && !n) ||
                                    (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, !0, n),
                                    r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                    !t && this.vars[a] && this._callback(a),
                                    0 === _ && 1e-8 === this._rawPrevTime && 1e-8 !== d && (this._rawPrevTime = 0)));
                    } else g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"));
                }),
                (o.to = function (e, t, i) {
                    return new o(e, t, i);
                }),
                (o.from = function (e, t, i) {
                    return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new o(e, t, i);
                }),
                (o.fromTo = function (e, t, i, n) {
                    return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new o(e, t, n);
                }),
                (o.staggerTo = o.allTo = function (e, t, s, m, d, c, u) {
                    var f,
                        g,
                        y,
                        _,
                        v = [],
                        b = a(s.stagger || m),
                        w = s.cycle,
                        x = (s.startAt || h).cycle;
                    for (p(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e))), f = (e = e || []).length - 1, y = 0; y <= f; y++) {
                        for (_ in ((g = {}), s)) g[_] = s[_];
                        if ((w && (r(g, e, y), null != g.duration && ((t = g.duration), delete g.duration)), x)) {
                            for (_ in ((x = g.startAt = {}), s.startAt)) x[_] = s.startAt[_];
                            r(g.startAt, e, y);
                        }
                        (g.delay = b(y, e[y], e) + (g.delay || 0)),
                            y === f &&
                                d &&
                                (g.onComplete = function () {
                                    s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), d.apply(u || s.callbackScope || this, c || h);
                                }),
                            (v[y] = new o(e[y], t, g));
                    }
                    return v;
                }),
                (o.staggerFrom = o.allFrom = function (e, t, i, n, r, a, s) {
                    return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), o.staggerTo(e, t, i, n, r, a, s);
                }),
                (o.staggerFromTo = o.allFromTo = function (e, t, i, n, r, a, s, l) {
                    return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), o.staggerTo(e, t, n, r, a, s, l);
                }),
                (o.delayedCall = function (e, t, i, n, r) {
                    return new o(t, 0, { delay: e, onComplete: t, onCompleteParams: i, callbackScope: n, onReverseComplete: t, onReverseCompleteParams: i, immediateRender: !1, useFrames: r, overwrite: 0 });
                }),
                (o.set = function (e, t) {
                    return new o(e, 0, t);
                }),
                (o.isTweening = function (e) {
                    return i.getTweensOf(e, !0).length > 0;
                });
            var d = function (e, t) {
                    for (var n = [], r = 0, a = e._first; a; ) a instanceof i ? (n[r++] = a) : (t && (n[r++] = a), (r = (n = n.concat(d(a, t))).length)), (a = a._next);
                    return n;
                },
                c = (o.getAllTweens = function (t) {
                    return d(e._rootTimeline, t).concat(d(e._rootFramesTimeline, t));
                });
            (o.killAll = function (e, i, n, r) {
                null == i && (i = !0), null == n && (n = !0);
                var a,
                    o,
                    s,
                    l = c(0 != r),
                    p = l.length,
                    m = i && n && r;
                for (s = 0; s < p; s++) (o = l[s]), (m || o instanceof t || ((a = o.target === o.vars.onComplete) && n) || (i && !a)) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1));
            }),
                (o.killChildTweensOf = function (e, t) {
                    if (null != e) {
                        var r,
                            a,
                            m,
                            h,
                            d,
                            c = s.tweenLookup;
                        if (("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e)), p(e))) for (h = e.length; --h > -1; ) o.killChildTweensOf(e[h], t);
                        else {
                            for (m in ((r = []), c)) for (a = c[m].target.parentNode; a; ) a === e && (r = r.concat(c[m].tweens)), (a = a.parentNode);
                            for (d = r.length, h = 0; h < d; h++) t && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1);
                        }
                    }
                });
            var u = function (e, i, n, r) {
                (i = !1 !== i), (n = !1 !== n);
                for (var a, o, s = c((r = !1 !== r)), l = i && n && r, p = s.length; --p > -1; ) (o = s[p]), (l || o instanceof t || ((a = o.target === o.vars.onComplete) && n) || (i && !a)) && o.paused(e);
            };
            return (
                (o.pauseAll = function (e, t, i) {
                    u(!0, e, t, i);
                }),
                (o.resumeAll = function (e, t, i) {
                    u(!1, e, t, i);
                }),
                (o.globalTimeScale = function (t) {
                    var n = e._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length
                        ? ((n._startTime = r - ((r - n._startTime) * n._timeScale) / (t = t || 1e-8)),
                          ((n = e._rootFramesTimeline)._startTime = (r = i.ticker.frame) - ((r - n._startTime) * n._timeScale) / t),
                          (n._timeScale = e._rootTimeline._timeScale = t),
                          t)
                        : n._timeScale;
                }),
                (m.progress = function (e, t) {
                    return arguments.length
                        ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t)
                        : this.duration()
                        ? this._time / this._duration
                        : this.ratio;
                }),
                (m.totalProgress = function (e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration();
                }),
                (m.time = function (e, t) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var i = this._duration,
                        n = this._cycle,
                        r = n * (i + this._repeatDelay);
                    return e > i && (e = i), this.totalTime(this._yoyo && 1 & n ? i - e + r : this._repeat ? e + r : e, t);
                }),
                (m.duration = function (t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration;
                }),
                (m.totalDuration = function (e) {
                    return arguments.length
                        ? -1 === this._repeat
                            ? this
                            : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
                        : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
                }),
                (m.repeat = function (e) {
                    return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat;
                }),
                (m.repeatDelay = function (e) {
                    return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay;
                }),
                (m.yoyo = function (e) {
                    return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
                }),
                o
            );
        },
        !0
    ),
        _gsScope._gsDefine(
            "TimelineLite",
            ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function (e, t, i) {
                var n = function (e) {
                        t.call(this, e);
                        var i,
                            n,
                            r = this.vars;
                        for (n in ((this._labels = {}), (this.autoRemoveChildren = !!r.autoRemoveChildren), (this.smoothChildTiming = !!r.smoothChildTiming), (this._sortChildren = !0), (this._onUpdate = r.onUpdate), r))
                            s((i = r[n])) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        s(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
                    },
                    r = i._internals,
                    a = (n._internals = {}),
                    o = r.isSelector,
                    s = r.isArray,
                    l = r.lazyTweens,
                    p = r.lazyRender,
                    m = _gsScope._gsDefine.globals,
                    h = function (e) {
                        var t,
                            i = {};
                        for (t in e) i[t] = e[t];
                        return i;
                    },
                    d = function (e, t, i) {
                        var n,
                            r,
                            a = e.cycle;
                        for (n in a) e[n] = "function" == typeof (r = a[n]) ? r(i, t[i], t) : r[i % r.length];
                        delete e.cycle;
                    },
                    c = (a.pauseCallback = function () {}),
                    u = function (e, t, i, n) {
                        var r = "immediateRender";
                        return r in t || (t[r] = !((i && !1 === i[r]) || n)), t;
                    },
                    f = function (e) {
                        if ("function" == typeof e) return e;
                        var t = "object" == typeof e ? e : { each: e },
                            i = t.ease,
                            n = t.from || 0,
                            r = t.base || 0,
                            a = {},
                            o = isNaN(n),
                            s = t.axis,
                            l = { center: 0.5, end: 1 }[n] || 0;
                        return function (e, p, m) {
                            var h,
                                d,
                                c,
                                u,
                                f,
                                g,
                                y,
                                _,
                                v,
                                b = (m || t).length,
                                w = a[b];
                            if (!w) {
                                if (!(v = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                    for (y = -1 / 0; y < (y = m[v++].getBoundingClientRect().left) && v < b; );
                                    v--;
                                }
                                for (w = a[b] = [], h = o ? Math.min(v, b) * l - 0.5 : n % v, d = o ? (b * l) / v - 0.5 : (n / v) | 0, y = 0, _ = 1 / 0, g = 0; g < b; g++)
                                    (c = (g % v) - h), (u = d - ((g / v) | 0)), (w[g] = f = s ? Math.abs("y" === s ? u : c) : Math.sqrt(c * c + u * u)), f > y && (y = f), f < _ && (_ = f);
                                (w.max = y - _), (w.min = _), (w.v = b = t.amount || t.each * (v > b ? b - 1 : s ? ("y" === s ? b / v : v) : Math.max(v, b / v)) || 0), (w.b = b < 0 ? r - b : r);
                            }
                            return (b = (w[e] - w.min) / w.max), w.b + (i ? i.getRatio(b) : b) * w.v;
                        };
                    },
                    g = (n.prototype = new t());
                return (
                    (n.version = "2.1.3"),
                    (n.distribute = f),
                    (g.constructor = n),
                    (g.kill()._gc = g._forcingPlayhead = g._hasPause = !1),
                    (g.to = function (e, t, n, r) {
                        return t ? this.add(new ((n.repeat && m.TweenMax) || i)(e, t, n), r) : this.set(e, n, r);
                    }),
                    (g.from = function (e, t, n, r) {
                        return this.add(((n.repeat && m.TweenMax) || i).from(e, t, u(0, n)), r);
                    }),
                    (g.fromTo = function (e, t, n, r, a) {
                        var o = (r.repeat && m.TweenMax) || i;
                        return (r = u(0, r, n)), t ? this.add(o.fromTo(e, t, n, r), a) : this.set(e, r, a);
                    }),
                    (g.staggerTo = function (e, t, r, a, s, l, p, m) {
                        var c,
                            u,
                            g = new n({ onComplete: l, onCompleteParams: p, callbackScope: m, smoothChildTiming: this.smoothChildTiming }),
                            y = f(r.stagger || a),
                            _ = r.startAt,
                            v = r.cycle;
                        for (
                            "string" == typeof e && (e = i.selector(e) || e),
                                o((e = e || [])) &&
                                    (e = (function (e) {
                                        var t,
                                            i = [],
                                            n = e.length;
                                        for (t = 0; t !== n; i.push(e[t++]));
                                        return i;
                                    })(e)),
                                u = 0;
                            u < e.length;
                            u++
                        )
                            (c = h(r)), _ && ((c.startAt = h(_)), _.cycle && d(c.startAt, e, u)), v && (d(c, e, u), null != c.duration && ((t = c.duration), delete c.duration)), g.to(e[u], t, c, y(u, e[u], e));
                        return this.add(g, s);
                    }),
                    (g.staggerFrom = function (e, t, i, n, r, a, o, s) {
                        return (i.runBackwards = !0), this.staggerTo(e, t, u(0, i), n, r, a, o, s);
                    }),
                    (g.staggerFromTo = function (e, t, i, n, r, a, o, s, l) {
                        return (n.startAt = i), this.staggerTo(e, t, u(0, n, i), r, a, o, s, l);
                    }),
                    (g.call = function (e, t, n, r) {
                        return this.add(i.delayedCall(0, e, t, n), r);
                    }),
                    (g.set = function (e, t, n) {
                        return this.add(new i(e, 0, u(0, t, null, !0)), n);
                    }),
                    (n.exportRoot = function (e, t) {
                        null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                        var r,
                            a,
                            o,
                            s,
                            l = new n(e),
                            p = l._timeline;
                        for (null == t && (t = !0), p._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = p._time, o = p._first; o; )
                            (s = o._next), (t && o instanceof i && o.target === o.vars.onComplete) || ((a = o._startTime - o._delay) < 0 && (r = 1), l.add(o, a)), (o = s);
                        return p.add(l, 0), r && l.totalDuration(), l;
                    }),
                    (g.add = function (r, a, o, l) {
                        var p, m, h, d, c, u;
                        if (("number" != typeof a && (a = this._parseTimeOrLabel(a, 0, !0, r)), !(r instanceof e))) {
                            if (r instanceof Array || (r && r.push && s(r))) {
                                for (o = o || "normal", l = l || 0, p = a, m = r.length, h = 0; h < m; h++)
                                    s((d = r[h])) && (d = new n({ tweens: d })),
                                        this.add(d, p),
                                        "string" != typeof d && "function" != typeof d && ("sequence" === o ? (p = d._startTime + d.totalDuration() / d._timeScale) : "start" === o && (d._startTime -= d.delay())),
                                        (p += l);
                                return this._uncache(!0);
                            }
                            if ("string" == typeof r) return this.addLabel(r, a);
                            if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                            r = i.delayedCall(0, r);
                        }
                        if (
                            (t.prototype.add.call(this, r, a),
                            (r._time || (!r._duration && r._initted)) &&
                                ((p = (this.rawTime() - r._startTime) * r._timeScale), (!r._duration || Math.abs(Math.max(0, Math.min(r.totalDuration(), p))) - r._totalTime > 1e-5) && r.render(p, !1, !1)),
                            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        )
                            for (u = (c = this).rawTime() > r._startTime; c._timeline; ) u && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), (c = c._timeline);
                        return this;
                    }),
                    (g.remove = function (t) {
                        if (t instanceof e) {
                            this._remove(t, !1);
                            var i = (t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline);
                            return (t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale), this;
                        }
                        if (t instanceof Array || (t && t.push && s(t))) {
                            for (var n = t.length; --n > -1; ) this.remove(t[n]);
                            return this;
                        }
                        return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t);
                    }),
                    (g._remove = function (e, i) {
                        return (
                            t.prototype._remove.call(this, e, i),
                            this._last ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                            this
                        );
                    }),
                    (g.append = function (e, t) {
                        return this.add(e, this._parseTimeOrLabel(null, t, !0, e));
                    }),
                    (g.insert = g.insertMultiple = function (e, t, i, n) {
                        return this.add(e, t || 0, i, n);
                    }),
                    (g.appendMultiple = function (e, t, i, n) {
                        return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n);
                    }),
                    (g.addLabel = function (e, t) {
                        return (this._labels[e] = this._parseTimeOrLabel(t)), this;
                    }),
                    (g.addPause = function (e, t, n, r) {
                        var a = i.delayedCall(0, c, n, r || this);
                        return (a.vars.onComplete = a.vars.onReverseComplete = t), (a.data = "isPause"), (this._hasPause = !0), this.add(a, e);
                    }),
                    (g.removeLabel = function (e) {
                        return delete this._labels[e], this;
                    }),
                    (g.getLabelTime = function (e) {
                        return null != this._labels[e] ? this._labels[e] : -1;
                    }),
                    (g._parseTimeOrLabel = function (t, i, n, r) {
                        var a, o;
                        if (r instanceof e && r.timeline === this) this.remove(r);
                        else if (r && (r instanceof Array || (r.push && s(r)))) for (o = r.length; --o > -1; ) r[o] instanceof e && r[o].timeline === this && this.remove(r[o]);
                        if (((a = "number" != typeof t || i ? (this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof i))
                            return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - a : 0, n);
                        if (((i = i || 0), "string" != typeof t || (!isNaN(t) && null == this._labels[t]))) null == t && (t = a);
                        else {
                            if (-1 === (o = t.indexOf("="))) return null == this._labels[t] ? (n ? (this._labels[t] = a + i) : i) : this._labels[t] + i;
                            (i = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1))), (t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, n) : a);
                        }
                        return Number(t) + i;
                    }),
                    (g.seek = function (e, t) {
                        return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t);
                    }),
                    (g.stop = function () {
                        return this.paused(!0);
                    }),
                    (g.gotoAndPlay = function (e, t) {
                        return this.play(e, t);
                    }),
                    (g.gotoAndStop = function (e, t) {
                        return this.pause(e, t);
                    }),
                    (g.render = function (e, t, i) {
                        this._gc && this._enabled(!0, !1);
                        var n,
                            r,
                            a,
                            o,
                            s,
                            m,
                            h,
                            d,
                            c = this._time,
                            u = this._dirty ? this.totalDuration() : this._totalDuration,
                            f = this._startTime,
                            g = this._timeScale,
                            y = this._paused;
                        if ((c !== this._time && (e += this._time - c), this._hasPause && !this._forcingPlayhead && !t)) {
                            if (e > c) for (n = this._first; n && n._startTime <= e && !m; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (m = n), (n = n._next);
                            else for (n = this._last; n && n._startTime >= e && !m; ) n._duration || ("isPause" === n.data && n._rawPrevTime > 0 && (m = n)), (n = n._prev);
                            m && ((this._time = this._totalTime = e = m._startTime), (d = this._startTime + (this._reversed ? this._duration - e : e) / this._timeScale));
                        }
                        if (e >= u - 1e-8 && e >= 0)
                            (this._totalTime = this._time = u),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((r = !0),
                                    (o = "onComplete"),
                                    (s = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration &&
                                        ((e <= 0 && e >= -1e-8) || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) &&
                                        this._rawPrevTime !== e &&
                                        this._first &&
                                        ((s = !0), this._rawPrevTime > 1e-8 && (o = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8),
                                (e = u + 1e-4);
                        else if (e < 1e-8)
                            if (
                                ((this._totalTime = this._time = 0),
                                e > -1e-8 && (e = 0),
                                (0 !== c || (0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || (e < 0 && this._rawPrevTime >= 0)))) && ((o = "onReverseComplete"), (r = this._reversed)),
                                e < 0)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((s = r = !0), (o = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (s = !0), (this._rawPrevTime = e);
                            else {
                                if (((this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8), 0 === e && r)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (r = !1), (n = n._next);
                                (e = 0), this._initted || (s = !0);
                            }
                        else this._totalTime = this._time = this._rawPrevTime = e;
                        if ((this._time !== c && this._first) || i || s || m) {
                            if (
                                (this._initted || (this._initted = !0),
                                this._active || (!this._paused && this._time !== c && e > 0 && (this._active = !0)),
                                0 === c && this.vars.onStart && ((0 === this._time && this._duration) || t || this._callback("onStart")),
                                (h = this._time) >= c)
                            )
                                for (n = this._first; n && ((a = n._next), h === this._time && (!this._paused || y)); )
                                    (n._active || (n._startTime <= h && !n._paused && !n._gc)) &&
                                        (m === n && (this.pause(), (this._pauseTime = d)),
                                        n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale : (e - n._startTime) * n._timeScale, t, i)),
                                        (n = a);
                            else
                                for (n = this._last; n && ((a = n._prev), h === this._time && (!this._paused || y)); ) {
                                    if (n._active || (n._startTime <= c && !n._paused && !n._gc)) {
                                        if (m === n) {
                                            for (m = n._prev; m && m.endTime() > this._time; ) m.render(m._reversed ? m.totalDuration() - (e - m._startTime) * m._timeScale : (e - m._startTime) * m._timeScale, t, i), (m = m._prev);
                                            (m = null), this.pause(), (this._pauseTime = d);
                                        }
                                        n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale : (e - n._startTime) * n._timeScale, t, i);
                                    }
                                    n = a;
                                }
                            this._onUpdate && (t || (l.length && p(), this._callback("onUpdate"))),
                                o &&
                                    (this._gc ||
                                        (f !== this._startTime && g === this._timeScale) ||
                                        ((0 === this._time || u >= this.totalDuration()) &&
                                            (r && (l.length && p(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !t && this.vars[o] && this._callback(o))));
                        }
                    }),
                    (g._hasPausedChild = function () {
                        for (var e = this._first; e; ) {
                            if (e._paused || (e instanceof n && e._hasPausedChild())) return !0;
                            e = e._next;
                        }
                        return !1;
                    }),
                    (g.getChildren = function (e, t, n, r) {
                        r = r || -9999999999;
                        for (var a = [], o = this._first, s = 0; o; )
                            o._startTime < r || (o instanceof i ? !1 !== t && (a[s++] = o) : (!1 !== n && (a[s++] = o), !1 !== e && (s = (a = a.concat(o.getChildren(!0, t, n))).length))), (o = o._next);
                        return a;
                    }),
                    (g.getTweensOf = function (e, t) {
                        var n,
                            r,
                            a = this._gc,
                            o = [],
                            s = 0;
                        for (a && this._enabled(!0, !0), r = (n = i.getTweensOf(e)).length; --r > -1; ) (n[r].timeline === this || (t && this._contains(n[r]))) && (o[s++] = n[r]);
                        return a && this._enabled(!1, !0), o;
                    }),
                    (g.recent = function () {
                        return this._recent;
                    }),
                    (g._contains = function (e) {
                        for (var t = e.timeline; t; ) {
                            if (t === this) return !0;
                            t = t.timeline;
                        }
                        return !1;
                    }),
                    (g.shiftChildren = function (e, t, i) {
                        i = i || 0;
                        for (var n, r = this._first, a = this._labels; r; ) r._startTime >= i && (r._startTime += e), (r = r._next);
                        if (t) for (n in a) a[n] >= i && (a[n] += e);
                        return this._uncache(!0);
                    }),
                    (g._kill = function (e, t) {
                        if (!e && !t) return this._enabled(!1, !1);
                        for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; ) i[n]._kill(e, t) && (r = !0);
                        return r;
                    }),
                    (g.clear = function (e) {
                        var t = this.getChildren(!1, !0, !0),
                            i = t.length;
                        for (this._time = this._totalTime = 0; --i > -1; ) t[i]._enabled(!1, !1);
                        return !1 !== e && (this._labels = {}), this._uncache(!0);
                    }),
                    (g.invalidate = function () {
                        for (var t = this._first; t; ) t.invalidate(), (t = t._next);
                        return e.prototype.invalidate.call(this);
                    }),
                    (g._enabled = function (e, i) {
                        if (e === this._gc) for (var n = this._first; n; ) n._enabled(e, !0), (n = n._next);
                        return t.prototype._enabled.call(this, e, i);
                    }),
                    (g.totalTime = function (t, i, n) {
                        this._forcingPlayhead = !0;
                        var r = e.prototype.totalTime.apply(this, arguments);
                        return (this._forcingPlayhead = !1), r;
                    }),
                    (g.duration = function (e) {
                        return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration);
                    }),
                    (g.totalDuration = function (e) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var t, i, n = 0, r = this, a = r._last, o = 999999999999; a; )
                                    (t = a._prev),
                                        a._dirty && a.totalDuration(),
                                        a._startTime > o && r._sortChildren && !a._paused && !r._calculatingDuration ? ((r._calculatingDuration = 1), r.add(a, a._startTime - a._delay), (r._calculatingDuration = 0)) : (o = a._startTime),
                                        a._startTime < 0 &&
                                            !a._paused &&
                                            ((n -= a._startTime),
                                            r._timeline.smoothChildTiming && ((r._startTime += a._startTime / r._timeScale), (r._time -= a._startTime), (r._totalTime -= a._startTime), (r._rawPrevTime -= a._startTime)),
                                            r.shiftChildren(-a._startTime, !1, -9999999999),
                                            (o = 0)),
                                        (i = a._startTime + a._totalDuration / a._timeScale) > n && (n = i),
                                        (a = t);
                                (r._duration = r._totalDuration = n), (r._dirty = !1);
                            }
                            return this._totalDuration;
                        }
                        return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
                    }),
                    (g.paused = function (t) {
                        if (!1 === t && this._paused) for (var i = this._first; i; ) i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0), (i = i._next);
                        return e.prototype.paused.apply(this, arguments);
                    }),
                    (g.usesFrames = function () {
                        for (var t = this._timeline; t._timeline; ) t = t._timeline;
                        return t === e._rootFramesTimeline;
                    }),
                    (g.rawTime = function (e) {
                        return e && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                            ? this._totalTime % (this._duration + this._repeatDelay)
                            : this._paused
                            ? this._totalTime
                            : (this._timeline.rawTime(e) - this._startTime) * this._timeScale;
                    }),
                    n
                );
            },
            !0
        ),
        _gsScope._gsDefine(
            "TimelineMax",
            ["TimelineLite", "TweenLite", "easing.Ease"],
            function (e, t, i) {
                var n = function (t) {
                        e.call(this, t), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !!this.vars.yoyo), (this._dirty = !0);
                    },
                    r = t._internals,
                    a = r.lazyTweens,
                    o = r.lazyRender,
                    s = _gsScope._gsDefine.globals,
                    l = new i(null, null, 1, 0),
                    p = (n.prototype = new e());
                return (
                    (p.constructor = n),
                    (p.kill()._gc = !1),
                    (n.version = "2.1.3"),
                    (p.invalidate = function () {
                        return (this._yoyo = !!this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), e.prototype.invalidate.call(this);
                    }),
                    (p.addCallback = function (e, i, n, r) {
                        return this.add(t.delayedCall(0, e, n, r), i);
                    }),
                    (p.removeCallback = function (e, t) {
                        if (e)
                            if (null == t) this._kill(null, e);
                            else for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1; ) i[n]._startTime === r && i[n]._enabled(!1, !1);
                        return this;
                    }),
                    (p.removePause = function (t) {
                        return this.removeCallback(e._internals.pauseCallback, t);
                    }),
                    (p.tweenTo = function (e, i) {
                        i = i || {};
                        var n,
                            r,
                            a,
                            o = { ease: l, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                            p = (i.repeat && s.TweenMax) || t;
                        for (r in i) o[r] = i[r];
                        return (
                            (o.time = this._parseTimeOrLabel(e)),
                            (n = Math.abs(Number(o.time) - this._time) / this._timeScale || 0.001),
                            (a = new p(this, n, o)),
                            (o.onStart = function () {
                                a.target.paused(!0),
                                    a.vars.time === a.target.time() || n !== a.duration() || a.isFromTo || a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale).render(a.time(), !0, !0),
                                    i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || a, i.onStartParams || []);
                            }),
                            a
                        );
                    }),
                    (p.tweenFromTo = function (e, t, i) {
                        (i = i || {}), (e = this._parseTimeOrLabel(e)), (i.startAt = { onComplete: this.seek, onCompleteParams: [e], callbackScope: this }), (i.immediateRender = !1 !== i.immediateRender);
                        var n = this.tweenTo(t, i);
                        return (n.isFromTo = 1), n.duration(Math.abs(n.vars.time - e) / this._timeScale || 0.001);
                    }),
                    (p.render = function (e, t, i) {
                        this._gc && this._enabled(!0, !1);
                        var n,
                            r,
                            s,
                            l,
                            p,
                            m,
                            h,
                            d,
                            c,
                            u = this._time,
                            f = this._dirty ? this.totalDuration() : this._totalDuration,
                            g = this._duration,
                            y = this._totalTime,
                            _ = this._startTime,
                            v = this._timeScale,
                            b = this._rawPrevTime,
                            w = this._paused,
                            x = this._cycle;
                        if ((u !== this._time && (e += this._time - u), e >= f - 1e-8 && e >= 0))
                            this._locked || ((this._totalTime = f), (this._cycle = this._repeat)),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((r = !0),
                                    (l = "onComplete"),
                                    (p = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration && ((e <= 0 && e >= -1e-8) || b < 0 || 1e-8 === b) && b !== e && this._first && ((p = !0), b > 1e-8 && (l = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8),
                                this._yoyo && 1 & this._cycle ? (this._time = e = 0) : ((this._time = g), (e = g + 1e-4));
                        else if (e < 1e-8)
                            if (
                                (this._locked || (this._totalTime = this._cycle = 0),
                                (this._time = 0),
                                e > -1e-8 && (e = 0),
                                (0 !== u || (0 === g && 1e-8 !== b && (b > 0 || (e < 0 && b >= 0)) && !this._locked)) && ((l = "onReverseComplete"), (r = this._reversed)),
                                e < 0)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((p = r = !0), (l = "onReverseComplete")) : b >= 0 && this._first && (p = !0), (this._rawPrevTime = e);
                            else {
                                if (((this._rawPrevTime = g || !t || e || this._rawPrevTime === e ? e : 1e-8), 0 === e && r)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (r = !1), (n = n._next);
                                (e = 0), this._initted || (p = !0);
                            }
                        else
                            0 === g && b < 0 && (p = !0),
                                (this._time = this._rawPrevTime = e),
                                this._locked ||
                                    ((this._totalTime = e),
                                    0 !== this._repeat &&
                                        ((this._cycle = (this._totalTime / (m = g + this._repeatDelay)) >> 0),
                                        this._cycle && this._cycle === this._totalTime / m && y <= e && this._cycle--,
                                        (this._time = this._totalTime - this._cycle * m),
                                        this._yoyo && 1 & this._cycle && (this._time = g - this._time),
                                        this._time > g ? ((this._time = g), (e = g + 1e-4)) : this._time < 0 ? (this._time = e = 0) : (e = this._time)));
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if ((e = this._time) > u || (this._repeat && x !== this._cycle))
                                for (n = this._first; n && n._startTime <= e && !h; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (h = n), (n = n._next);
                            else for (n = this._last; n && n._startTime >= e && !h; ) n._duration || ("isPause" === n.data && n._rawPrevTime > 0 && (h = n)), (n = n._prev);
                            h &&
                                ((c = this._startTime + (this._reversed ? this._duration - h._startTime : h._startTime) / this._timeScale),
                                h._startTime < g && ((this._time = this._rawPrevTime = e = h._startTime), (this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))));
                        }
                        if (this._cycle !== x && !this._locked) {
                            var T = this._yoyo && 0 != (1 & x),
                                k = T === (this._yoyo && 0 != (1 & this._cycle)),
                                S = this._totalTime,
                                j = this._cycle,
                                C = this._rawPrevTime,
                                P = this._time;
                            if (
                                ((this._totalTime = x * g),
                                this._cycle < x ? (T = !T) : (this._totalTime += g),
                                (this._time = u),
                                (this._rawPrevTime = 0 === g ? b - 1e-4 : b),
                                (this._cycle = x),
                                (this._locked = !0),
                                this.render((u = T ? 0 : g), t, 0 === g),
                                t || this._gc || (this.vars.onRepeat && ((this._cycle = j), (this._locked = !1), this._callback("onRepeat"))),
                                u !== this._time)
                            )
                                return;
                            if ((k && ((this._cycle = x), (this._locked = !0), this.render((u = T ? g + 1e-4 : -1e-4), !0, !1)), (this._locked = !1), this._paused && !w)) return;
                            (this._time = P), (this._totalTime = S), (this._cycle = j), (this._rawPrevTime = C);
                        }
                        if ((this._time !== u && this._first) || i || p || h) {
                            if (
                                (this._initted || (this._initted = !0),
                                this._active || (!this._paused && this._totalTime !== y && e > 0 && (this._active = !0)),
                                0 === y && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || t || this._callback("onStart")),
                                (d = this._time) >= u)
                            )
                                for (n = this._first; n && ((s = n._next), d === this._time && (!this._paused || w)); )
                                    (n._active || (n._startTime <= this._time && !n._paused && !n._gc)) &&
                                        (h === n && (this.pause(), (this._pauseTime = c)),
                                        n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale : (e - n._startTime) * n._timeScale, t, i)),
                                        (n = s);
                            else
                                for (n = this._last; n && ((s = n._prev), d === this._time && (!this._paused || w)); ) {
                                    if (n._active || (n._startTime <= u && !n._paused && !n._gc)) {
                                        if (h === n) {
                                            for (h = n._prev; h && h.endTime() > this._time; ) h.render(h._reversed ? h.totalDuration() - (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, i), (h = h._prev);
                                            (h = null), this.pause(), (this._pauseTime = c);
                                        }
                                        n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale : (e - n._startTime) * n._timeScale, t, i);
                                    }
                                    n = s;
                                }
                            this._onUpdate && (t || (a.length && o(), this._callback("onUpdate"))),
                                l &&
                                    (this._locked ||
                                        this._gc ||
                                        (_ !== this._startTime && v === this._timeScale) ||
                                        ((0 === this._time || f >= this.totalDuration()) &&
                                            (r && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !t && this.vars[l] && this._callback(l))));
                        } else y !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"));
                    }),
                    (p.getActive = function (e, t, i) {
                        var n,
                            r,
                            a = [],
                            o = this.getChildren(e || null == e, t || null == e, !!i),
                            s = 0,
                            l = o.length;
                        for (n = 0; n < l; n++) (r = o[n]).isActive() && (a[s++] = r);
                        return a;
                    }),
                    (p.getLabelAfter = function (e) {
                        e || (0 !== e && (e = this._time));
                        var t,
                            i = this.getLabelsArray(),
                            n = i.length;
                        for (t = 0; t < n; t++) if (i[t].time > e) return i[t].name;
                        return null;
                    }),
                    (p.getLabelBefore = function (e) {
                        null == e && (e = this._time);
                        for (var t = this.getLabelsArray(), i = t.length; --i > -1; ) if (t[i].time < e) return t[i].name;
                        return null;
                    }),
                    (p.getLabelsArray = function () {
                        var e,
                            t = [],
                            i = 0;
                        for (e in this._labels) t[i++] = { time: this._labels[e], name: e };
                        return (
                            t.sort(function (e, t) {
                                return e.time - t.time;
                            }),
                            t
                        );
                    }),
                    (p.invalidate = function () {
                        return (this._locked = !1), e.prototype.invalidate.call(this);
                    }),
                    (p.progress = function (e, t) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0;
                    }),
                    (p.totalProgress = function (e, t) {
                        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0;
                    }),
                    (p.totalDuration = function (t) {
                        return arguments.length
                            ? -1 !== this._repeat && t
                                ? this.timeScale(this.totalDuration() / t)
                                : this
                            : (this._dirty && (e.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
                    }),
                    (p.time = function (e, t) {
                        if (!arguments.length) return this._time;
                        this._dirty && this.totalDuration();
                        var i = this._duration,
                            n = this._cycle,
                            r = n * (i + this._repeatDelay);
                        return e > i && (e = i), this.totalTime(this._yoyo && 1 & n ? i - e + r : this._repeat ? e + r : e, t);
                    }),
                    (p.repeat = function (e) {
                        return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat;
                    }),
                    (p.repeatDelay = function (e) {
                        return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay;
                    }),
                    (p.yoyo = function (e) {
                        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
                    }),
                    (p.currentLabel = function (e) {
                        return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8);
                    }),
                    n
                );
            },
            !0
        ),
        (e = 180 / Math.PI),
        (t = []),
        (i = []),
        (n = []),
        (r = {}),
        (a = _gsScope._gsDefine.globals),
        (o = function (e, t, i, n) {
            i === n && (i = n - (n - t) / 1e6), e === t && (t = e + (i - e) / 1e6), (this.a = e), (this.b = t), (this.c = i), (this.d = n), (this.da = n - e), (this.ca = i - e), (this.ba = t - e);
        }),
        (s = function (e, t, i, n) {
            var r = { a: e },
                a = {},
                o = {},
                s = { c: n },
                l = (e + t) / 2,
                p = (t + i) / 2,
                m = (i + n) / 2,
                h = (l + p) / 2,
                d = (p + m) / 2,
                c = (d - h) / 8;
            return (r.b = l + (e - l) / 4), (a.b = h + c), (r.c = a.a = (r.b + a.b) / 2), (a.c = o.a = (h + d) / 2), (o.b = d - c), (s.b = m + (n - m) / 4), (o.c = s.a = (o.b + s.b) / 2), [r, a, o, s];
        }),
        (l = function (e, r, a, o, l) {
            var p,
                m,
                h,
                d,
                c,
                u,
                f,
                g,
                y,
                _,
                v,
                b,
                w,
                x = e.length - 1,
                T = 0,
                k = e[0].a;
            for (p = 0; p < x; p++)
                (m = (c = e[T]).a),
                    (h = c.d),
                    (d = e[T + 1].d),
                    l
                        ? ((w = (((b = i[p]) + (v = t[p])) * r * 0.25) / (o ? 0.5 : n[p] || 0.5)),
                          (g = h - ((u = h - (h - m) * (o ? 0.5 * r : 0 !== v ? w / v : 0)) + ((((f = h + (d - h) * (o ? 0.5 * r : 0 !== b ? w / b : 0)) - u) * ((3 * v) / (v + b) + 0.5)) / 4 || 0))))
                        : (g = h - ((u = h - (h - m) * r * 0.5) + (f = h + (d - h) * r * 0.5)) / 2),
                    (f += g),
                    (c.c = y = u += g),
                    (c.b = 0 !== p ? k : (k = c.a + 0.6 * (c.c - c.a))),
                    (c.da = h - m),
                    (c.ca = y - m),
                    (c.ba = k - m),
                    a ? ((_ = s(m, k, y, h)), e.splice(T, 1, _[0], _[1], _[2], _[3]), (T += 4)) : T++,
                    (k = f);
            ((c = e[T]).b = k), (c.c = k + 0.4 * (c.d - k)), (c.da = c.d - c.a), (c.ca = c.c - c.a), (c.ba = k - c.a), a && ((_ = s(c.a, k, c.c, c.d)), e.splice(T, 1, _[0], _[1], _[2], _[3]));
        }),
        (p = function (e, n, r, a) {
            var s,
                l,
                p,
                m,
                h,
                d,
                c = [];
            if (a) for (l = (e = [a].concat(e)).length; --l > -1; ) "string" == typeof (d = e[l][n]) && "=" === d.charAt(1) && (e[l][n] = a[n] + Number(d.charAt(0) + d.substr(2)));
            if ((s = e.length - 2) < 0) return (c[0] = new o(e[0][n], 0, 0, e[0][n])), c;
            for (l = 0; l < s; l++) (c[l] = new o((p = e[l][n]), 0, 0, (m = e[l + 1][n]))), r && ((h = e[l + 2][n]), (t[l] = (t[l] || 0) + (m - p) * (m - p)), (i[l] = (i[l] || 0) + (h - m) * (h - m)));
            return (c[l] = new o(e[l][n], 0, 0, e[l + 1][n])), c;
        }),
        (m = function (e, a, o, s, m, h) {
            var d,
                c,
                u,
                f,
                g,
                y,
                _,
                v,
                b = {},
                w = [],
                x = h || e[0];
            for (c in ((m = "string" == typeof m ? "," + m + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
            null == a && (a = 1),
            e[0]))
                w.push(c);
            if (e.length > 1) {
                for (v = e[e.length - 1], _ = !0, d = w.length; --d > -1; )
                    if (((c = w[d]), Math.abs(x[c] - v[c]) > 0.05)) {
                        _ = !1;
                        break;
                    }
                _ && ((e = e.concat()), h && e.unshift(h), e.push(e[1]), (h = e[e.length - 3]));
            }
            for (t.length = i.length = n.length = 0, d = w.length; --d > -1; ) (r[(c = w[d])] = -1 !== m.indexOf("," + c + ",")), (b[c] = p(e, c, r[c], h));
            for (d = t.length; --d > -1; ) (t[d] = Math.sqrt(t[d])), (i[d] = Math.sqrt(i[d]));
            if (!s) {
                for (d = w.length; --d > -1; ) if (r[c]) for (y = (u = b[w[d]]).length - 1, f = 0; f < y; f++) n[f] = (n[f] || 0) + (g = u[f + 1].da / i[f] + u[f].da / t[f] || 0) * g;
                for (d = n.length; --d > -1; ) n[d] = Math.sqrt(n[d]);
            }
            for (d = w.length, f = o ? 4 : 1; --d > -1; ) l((u = b[(c = w[d])]), a, o, s, r[c]), _ && (u.splice(0, f), u.splice(u.length - f, f));
            return b;
        }),
        (h = function (e, t, i) {
            for (var n, r, a, o, s, l, p, m, h, d, c, u = 1 / i, f = e.length; --f > -1; )
                for (o = (d = e[f]).d - (a = d.a), s = d.c - a, l = d.b - a, n = r = 0, m = 1; m <= i; m++) (n = r - (r = ((p = u * m) * p * o + 3 * (h = 1 - p) * (p * s + h * l)) * p)), (t[(c = f * i + m - 1)] = (t[c] || 0) + n * n);
        }),
        (d = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.9",
            API: 2,
            global: !0,
            init: function (e, t, i) {
                (this._target = e), t instanceof Array && (t = { values: t }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10));
                var n,
                    r,
                    a,
                    s,
                    l,
                    p = t.values || [],
                    d = {},
                    c = p[0],
                    u = t.autoRotate || i.vars.orientToBezier;
                for (n in ((this._autoRotate = u ? (u instanceof Array ? u : [["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]]) : null), c)) this._props.push(n);
                for (a = this._props.length; --a > -1; )
                    this._overwriteProps.push((n = this._props[a])),
                        (r = this._func[n] = "function" == typeof e[n]),
                        (d[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n])),
                        l || (d[n] !== p[0][n] && (l = d));
                if (
                    ((this._beziers =
                        "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type
                            ? m(p, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, l)
                            : (function (e, t, i) {
                                  var n,
                                      r,
                                      a,
                                      s,
                                      l,
                                      p,
                                      m,
                                      h,
                                      d,
                                      c,
                                      u = {},
                                      f = "cubic" === (t = t || "soft") ? 3 : 2,
                                      g = "soft" === t,
                                      y = [];
                                  if ((g && i && (e = [i].concat(e)), null == e || e.length < f + 1)) throw "invalid Bezier data";
                                  for (h in e[0]) y.push(h);
                                  for (l = y.length; --l > -1; ) {
                                      for (u[(h = y[l])] = s = [], d = 0, m = e.length, p = 0; p < m; p++)
                                          (n = null == i ? e[p][h] : "string" == typeof (c = e[p][h]) && "=" === c.charAt(1) ? i[h] + Number(c.charAt(0) + c.substr(2)) : Number(c)),
                                              g && p > 1 && p < m - 1 && (s[d++] = (n + s[d - 2]) / 2),
                                              (s[d++] = n);
                                      for (m = d - f + 1, d = 0, p = 0; p < m; p += f)
                                          (n = s[p]), (r = s[p + 1]), (a = s[p + 2]), (s[d++] = c = 3 === f ? new o(n, r, a, 2 === f ? 0 : s[p + 3]) : new o(n, (2 * r + n) / 3, (2 * r + a) / 3, a));
                                      s.length = d;
                                  }
                                  return u;
                              })(p, t.type, d)),
                    (this._segCount = this._beziers[n].length),
                    this._timeRes)
                ) {
                    var f = (function (e, t) {
                        var i,
                            n,
                            r,
                            a,
                            o = [],
                            s = [],
                            l = 0,
                            p = 0,
                            m = (t = t >> 0 || 6) - 1,
                            d = [],
                            c = [];
                        for (i in e) h(e[i], o, t);
                        for (r = o.length, n = 0; n < r; n++) (l += Math.sqrt(o[n])), (c[(a = n % t)] = l), a === m && ((p += l), (d[(a = (n / t) >> 0)] = c), (s[a] = p), (l = 0), (c = []));
                        return { length: p, lengths: s, segments: d };
                    })(this._beziers, this._timeRes);
                    (this._length = f.length),
                        (this._lengths = f.lengths),
                        (this._segments = f.segments),
                        (this._l1 = this._li = this._s1 = this._si = 0),
                        (this._l2 = this._lengths[0]),
                        (this._curSeg = this._segments[0]),
                        (this._s2 = this._curSeg[0]),
                        (this._prec = 1 / this._curSeg.length);
                }
                if ((u = this._autoRotate))
                    for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), a = u.length; --a > -1; ) {
                        for (s = 0; s < 3; s++) this._func[(n = u[a][s])] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        (this._initialRotations[a] = (this._func[(n = u[a][2])] ? this._func[n].call(this._target) : this._target[n]) || 0), this._overwriteProps.push(n);
                    }
                return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
            },
            set: function (t) {
                var i,
                    n,
                    r,
                    a,
                    o,
                    s,
                    l,
                    p,
                    m,
                    h,
                    d,
                    c = this._segCount,
                    u = this._func,
                    f = this._target,
                    g = t !== this._startRatio;
                if (this._timeRes) {
                    if (((m = this._lengths), (h = this._curSeg), (r = this._li), (d = t * this._length) > this._l2 && r < c - 1)) {
                        for (p = c - 1; r < p && (this._l2 = m[++r]) <= d; );
                        (this._l1 = m[r - 1]), (this._li = r), (this._curSeg = h = this._segments[r]), (this._s2 = h[(this._s1 = this._si = 0)]);
                    } else if (d < this._l1 && r > 0) {
                        for (; r > 0 && (this._l1 = m[--r]) >= d; );
                        0 === r && d < this._l1 ? (this._l1 = 0) : r++, (this._l2 = m[r]), (this._li = r), (this._curSeg = h = this._segments[r]), (this._s1 = h[(this._si = h.length - 1) - 1] || 0), (this._s2 = h[this._si]);
                    }
                    if (((i = r), (r = this._si), (d -= this._l1) > this._s2 && r < h.length - 1)) {
                        for (p = h.length - 1; r < p && (this._s2 = h[++r]) <= d; );
                        (this._s1 = h[r - 1]), (this._si = r);
                    } else if (d < this._s1 && r > 0) {
                        for (; r > 0 && (this._s1 = h[--r]) >= d; );
                        0 === r && d < this._s1 ? (this._s1 = 0) : r++, (this._s2 = h[r]), (this._si = r);
                    }
                    s = 1 === t ? 1 : (r + (d - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                } else s = (t - (i = t < 0 ? 0 : t >= 1 ? c - 1 : (c * t) >> 0) * (1 / c)) * c;
                for (n = 1 - s, r = this._props.length; --r > -1; )
                    (l = (s * s * (o = this._beziers[(a = this._props[r])][i]).da + 3 * n * (s * o.ca + n * o.ba)) * s + o.a), this._mod[a] && (l = this._mod[a](l, f)), u[a] ? f[a](l) : (f[a] = l);
                if (this._autoRotate) {
                    var y,
                        _,
                        v,
                        b,
                        w,
                        x,
                        T,
                        k = this._autoRotate;
                    for (r = k.length; --r > -1; )
                        (a = k[r][2]),
                            (x = k[r][3] || 0),
                            (T = !0 === k[r][4] ? 1 : e),
                            (y = this._beziers[k[r][1]]),
                            (o = this._beziers[k[r][0]]) &&
                                y &&
                                ((_ = (o = o[i]).a + (o.b - o.a) * s),
                                (_ += ((b = o.b + (o.c - o.b) * s) - _) * s),
                                (b += (o.c + (o.d - o.c) * s - b) * s),
                                (v = (y = y[i]).a + (y.b - y.a) * s),
                                (v += ((w = y.b + (y.c - y.b) * s) - v) * s),
                                (w += (y.c + (y.d - y.c) * s - w) * s),
                                (l = g ? Math.atan2(w - v, b - _) * T + x : this._initialRotations[r]),
                                this._mod[a] && (l = this._mod[a](l, f)),
                                u[a] ? f[a](l) : (f[a] = l));
                }
            },
        })),
        (c = d.prototype),
        (d.bezierThrough = m),
        (d.cubicToQuadratic = s),
        (d._autoCSS = !0),
        (d.quadraticToCubic = function (e, t, i) {
            return new o(e, (2 * t + e) / 3, (2 * t + i) / 3, i);
        }),
        (d._cssRegister = function () {
            var e = a.CSSPlugin;
            if (e) {
                var t = e._internals,
                    i = t._parseToProxy,
                    n = t._setPluginRatio,
                    r = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function (e, t, a, o, s, l) {
                        t instanceof Array && (t = { values: t }), (l = new d());
                        var p,
                            m,
                            h,
                            c = t.values,
                            u = c.length - 1,
                            f = [],
                            g = {};
                        if (u < 0) return s;
                        for (p = 0; p <= u; p++) (h = i(e, c[p], o, s, l, u !== p)), (f[p] = h.end);
                        for (m in t) g[m] = t[m];
                        return (
                            (g.values = f),
                            ((s = new r(e, "bezier", 0, 0, h.pt, 2)).data = h),
                            (s.plugin = l),
                            (s.setRatio = n),
                            0 === g.autoRotate && (g.autoRotate = !0),
                            !g.autoRotate ||
                                g.autoRotate instanceof Array ||
                                ((p = !0 === g.autoRotate ? 0 : Number(g.autoRotate)), (g.autoRotate = null != h.end.left ? [["left", "top", "rotation", p, !1]] : null != h.end.x && [["x", "y", "rotation", p, !1]])),
                            g.autoRotate && (o._transform || o._enableTransforms(!1), (h.autoRotate = o._target._gsTransform), (h.proxy.rotation = h.autoRotate.rotation || 0), o._overwriteProps.push("rotation")),
                            l._onInitTween(h.proxy, g, o._tween),
                            s
                        );
                    },
                });
            }
        }),
        (c._mod = function (e) {
            for (var t, i = this._overwriteProps, n = i.length; --n > -1; ) (t = e[i[n]]) && "function" == typeof t && (this._mod[i[n]] = t);
        }),
        (c._kill = function (e) {
            var t,
                i,
                n = this._props;
            for (t in this._beziers) if (t in e) for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1; ) n[i] === t && n.splice(i, 1);
            if ((n = this._autoRotate)) for (i = n.length; --i > -1; ) e[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, e);
        }),
        _gsScope._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function (e, t) {
                var i,
                    n,
                    r,
                    a,
                    o = function () {
                        e.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = o.prototype.setRatio);
                    },
                    s = _gsScope._gsDefine.globals,
                    l = {},
                    p = (o.prototype = new e("css"));
                (p.constructor = o),
                    (o.version = "2.1.3"),
                    (o.API = 2),
                    (o.defaultTransformPerspective = 0),
                    (o.defaultSkewType = "compensated"),
                    (o.defaultSmoothOrigin = !0),
                    (o.suffixMap = { top: (p = "px"), right: p, bottom: p, left: p, width: p, height: p, fontSize: p, padding: p, margin: p, perspective: p, lineHeight: "" });
                var m,
                    h,
                    d,
                    c,
                    u,
                    f,
                    g,
                    y,
                    _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                    x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    k = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    j = /alpha\(opacity *=.+?\)/i,
                    C = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    D = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function (e, t) {
                        return t.toUpperCase();
                    },
                    O = /(?:Left|Right|Width)/i,
                    R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    $ = /,(?=[^\)]*(?:\(|$))/gi,
                    N = /[\s,\(]/i,
                    L = Math.PI / 180,
                    I = 180 / Math.PI,
                    z = {},
                    F = { style: {} },
                    B = _gsScope.document || {
                        createElement: function () {
                            return F;
                        },
                    },
                    H = function (e, t) {
                        var i = B.createElementNS ? B.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : B.createElement(e);
                        return i.style ? i : B.createElement(e);
                    },
                    q = H("div"),
                    U = H("img"),
                    W = (o._internals = { _specialProps: l }),
                    X = (_gsScope.navigator || {}).userAgent || "",
                    V = (function () {
                        var e = X.indexOf("Android"),
                            t = H("a");
                        return (
                            (d = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || parseFloat(X.substr(e + 8, 2)) > 3)),
                            (u = d && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6),
                            (c = -1 !== X.indexOf("Firefox")),
                            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (f = parseFloat(RegExp.$1)),
                            !!t && ((t.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(t.style.opacity))
                        );
                    })(),
                    G = function (e) {
                        return k.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                    },
                    Y = function (e) {
                        _gsScope.console && console.log(e);
                    },
                    K = "",
                    J = "",
                    Q = function (e, t) {
                        var i,
                            n,
                            r = (t = t || q).style;
                        if (void 0 !== r[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + e]; );
                        return n >= 0 ? ((K = "-" + (J = 3 === n ? "ms" : i[n]).toLowerCase() + "-"), J + e) : null;
                    },
                    Z = "undefined" != typeof window ? window : B.defaultView || { getComputedStyle: function () {} },
                    ee = function (e) {
                        return Z.getComputedStyle(e);
                    },
                    te = (o.getStyle = function (e, t, i, n, r) {
                        var a;
                        return V || "opacity" !== t
                            ? (!n && e.style[t] ? (a = e.style[t]) : (i = i || ee(e)) ? (a = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(P, "-$1").toLowerCase())) : e.currentStyle && (a = e.currentStyle[t]),
                              null == r || (a && "none" !== a && "auto" !== a && "auto auto" !== a) ? a : r)
                            : G(e);
                    }),
                    ie = (W.convertToPixels = function (e, i, n, r, a) {
                        if ("px" === r || (!r && "lineHeight" !== i)) return n;
                        if ("auto" === r || !n) return 0;
                        var s,
                            l,
                            p,
                            m = O.test(i),
                            h = e,
                            d = q.style,
                            c = n < 0,
                            u = 1 === n;
                        if ((c && (n = -n), u && (n *= 100), "lineHeight" !== i || r))
                            if ("%" === r && -1 !== i.indexOf("border")) s = (n / 100) * (m ? e.clientWidth : e.clientHeight);
                            else {
                                if (((d.cssText = "border:0 solid red;position:" + te(e, "position") + ";line-height:0;"), "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r))
                                    d[m ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if ((-1 !== te((h = e.parentNode || B.body), "display").indexOf("flex") && (d.position = "absolute"), (p = t.ticker.frame), (l = h._gsCache) && m && l.time === p)) return (l.width * n) / 100;
                                    d[m ? "width" : "height"] = n + r;
                                }
                                h.appendChild(q),
                                    (s = parseFloat(q[m ? "offsetWidth" : "offsetHeight"])),
                                    h.removeChild(q),
                                    m && "%" === r && !1 !== o.cacheWidths && (((l = h._gsCache = h._gsCache || {}).time = p), (l.width = (s / n) * 100)),
                                    0 !== s || a || (s = ie(e, i, n, r, !0));
                            }
                        else (l = ee(e).lineHeight), (e.style.lineHeight = n), (s = parseFloat(ee(e).lineHeight)), (e.style.lineHeight = l);
                        return u && (s /= 100), c ? -s : s;
                    }),
                    ne = (W.calculateOffset = function (e, t, i) {
                        if ("absolute" !== te(e, "position", i)) return 0;
                        var n = "left" === t ? "Left" : "Top",
                            r = te(e, "margin" + n, i);
                        return e["offset" + n] - (ie(e, t, parseFloat(r), r.replace(T, "")) || 0);
                    }),
                    re = function (e, t) {
                        var i,
                            n,
                            r,
                            a = {};
                        if ((t = t || ee(e)))
                            if ((i = t.length)) for (; --i > -1; ) (-1 !== (r = t[i]).indexOf("-transform") && $e !== r) || (a[r.replace(D, E)] = t.getPropertyValue(r));
                            else for (i in t) (-1 !== i.indexOf("Transform") && Me !== i) || (a[i] = t[i]);
                        else if ((t = e.currentStyle || e.style)) for (i in t) "string" == typeof i && void 0 === a[i] && (a[i.replace(D, E)] = t[i]);
                        return (
                            V || (a.opacity = G(e)),
                            (n = Ge(e, t, !1)),
                            (a.rotation = n.rotation),
                            (a.skewX = n.skewX),
                            (a.scaleX = n.scaleX),
                            (a.scaleY = n.scaleY),
                            (a.x = n.x),
                            (a.y = n.y),
                            Le && ((a.z = n.z), (a.rotationX = n.rotationX), (a.rotationY = n.rotationY), (a.scaleZ = n.scaleZ)),
                            a.filters && delete a.filters,
                            a
                        );
                    },
                    ae = function (e, t, i, n, r) {
                        var a,
                            o,
                            s,
                            l = {},
                            p = e.style;
                        for (o in i)
                            "cssText" !== o &&
                                "length" !== o &&
                                isNaN(o) &&
                                (t[o] !== (a = i[o]) || (r && r[o])) &&
                                -1 === o.indexOf("Origin") &&
                                (("number" != typeof a && "string" != typeof a) ||
                                    ((l[o] = "auto" !== a || ("left" !== o && "top" !== o) ? (("" !== a && "auto" !== a && "none" !== a) || "string" != typeof t[o] || "" === t[o].replace(x, "") ? a : 0) : ne(e, o)),
                                    void 0 !== p[o] && (s = new be(p, o, p[o], s))));
                        if (n) for (o in n) "className" !== o && (l[o] = n[o]);
                        return { difs: l, firstMPT: s };
                    },
                    oe = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    se = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    le = function (e, t, i) {
                        if ("svg" === (e.nodeName + "").toLowerCase()) return (i || ee(e))[t] || 0;
                        if (e.getCTM && We(e)) return e.getBBox()[t] || 0;
                        var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            r = oe[t],
                            a = r.length;
                        for (i = i || ee(e); --a > -1; ) (n -= parseFloat(te(e, "padding" + r[a], i, !0)) || 0), (n -= parseFloat(te(e, "border" + r[a] + "Width", i, !0)) || 0);
                        return n;
                    },
                    pe = function (e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        (null != e && "" !== e) || (e = "0 0");
                        var i,
                            n = e.split(" "),
                            r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                            a = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !t) {
                            for (n = e.split(", ").join(",").split(","), e = [], i = 0; i < n.length; i++) e.push(pe(n[i]));
                            return e.join(",");
                        }
                        return (
                            null == a ? (a = "center" === r ? "50%" : "0") : "center" === a && (a = "50%"),
                            ("center" === r || (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) && (r = "50%"),
                            (e = r + " " + a + (n.length > 2 ? " " + n[2] : "")),
                            t &&
                                ((t.oxp = -1 !== r.indexOf("%")),
                                (t.oyp = -1 !== a.indexOf("%")),
                                (t.oxr = "=" === r.charAt(1)),
                                (t.oyr = "=" === a.charAt(1)),
                                (t.ox = parseFloat(r.replace(x, ""))),
                                (t.oy = parseFloat(a.replace(x, ""))),
                                (t.v = e)),
                            t || e
                        );
                    },
                    me = function (e, t) {
                        return "function" == typeof e && (e = e(y, g)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0;
                    },
                    he = function (e, t) {
                        "function" == typeof e && (e = e(y, g));
                        var i = "string" == typeof e && "=" === e.charAt(1);
                        return (
                            "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (i ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? e.substr(2) : e) / 100)),
                            null == e ? t : i ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                        );
                    },
                    de = function (e, t, i, n) {
                        var r, a, o, s;
                        return (
                            "function" == typeof e && (e = e(y, g)),
                            null == e
                                ? (o = t)
                                : "number" == typeof e
                                ? (o = e)
                                : ((r = e.split("_")),
                                  (a = ((s = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === e.indexOf("rad") ? 1 : I) - (s ? 0 : t)),
                                  r.length &&
                                      (n && (n[i] = t + a),
                                      -1 !== e.indexOf("short") && (a %= 360) != a % 180 && (a = a < 0 ? a + 360 : a - 360),
                                      -1 !== e.indexOf("_cw") && a < 0 ? (a = ((a + 3599999999640) % 360) - 360 * ((a / 360) | 0)) : -1 !== e.indexOf("ccw") && a > 0 && (a = ((a - 3599999999640) % 360) - 360 * ((a / 360) | 0))),
                                  (o = t + a)),
                            o < 1e-6 && o > -1e-6 && (o = 0),
                            o
                        );
                    },
                    ce = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0],
                    },
                    ue = function (e, t, i) {
                        return (255 * (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < 0.5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + 0.5) | 0;
                    },
                    fe = (o.parseColor = function (e, t) {
                        var i, n, r, a, o, s, l, p, m, h, d;
                        if (e)
                            if ("number" == typeof e) i = [e >> 16, (e >> 8) & 255, 255 & e];
                            else {
                                if (("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ce[e])) i = ce[e];
                                else if ("#" === e.charAt(0))
                                    4 === e.length && ((n = e.charAt(1)), (r = e.charAt(2)), (a = e.charAt(3)), (e = "#" + n + n + r + r + a + a)), (i = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & 255, 255 & e]);
                                else if ("hsl" === e.substr(0, 3))
                                    if (((i = d = e.match(_)), t)) {
                                        if (-1 !== e.indexOf("=")) return e.match(v);
                                    } else
                                        (o = (Number(i[0]) % 360) / 360),
                                            (s = Number(i[1]) / 100),
                                            (n = 2 * (l = Number(i[2]) / 100) - (r = l <= 0.5 ? l * (s + 1) : l + s - l * s)),
                                            i.length > 3 && (i[3] = Number(i[3])),
                                            (i[0] = ue(o + 1 / 3, n, r)),
                                            (i[1] = ue(o, n, r)),
                                            (i[2] = ue(o - 1 / 3, n, r));
                                else i = e.match(_) || ce.transparent;
                                (i[0] = Number(i[0])), (i[1] = Number(i[1])), (i[2] = Number(i[2])), i.length > 3 && (i[3] = Number(i[3]));
                            }
                        else i = ce.black;
                        return (
                            t &&
                                !d &&
                                ((n = i[0] / 255),
                                (r = i[1] / 255),
                                (a = i[2] / 255),
                                (l = ((p = Math.max(n, r, a)) + (m = Math.min(n, r, a))) / 2),
                                p === m ? (o = s = 0) : ((h = p - m), (s = l > 0.5 ? h / (2 - p - m) : h / (p + m)), (o = p === n ? (r - a) / h + (r < a ? 6 : 0) : p === r ? (a - n) / h + 2 : (n - r) / h + 4), (o *= 60)),
                                (i[0] = (o + 0.5) | 0),
                                (i[1] = (100 * s + 0.5) | 0),
                                (i[2] = (100 * l + 0.5) | 0)),
                            i
                        );
                    }),
                    ge = function (e, t) {
                        var i,
                            n,
                            r,
                            a = e.match(ye) || [],
                            o = 0,
                            s = "";
                        if (!a.length) return e;
                        for (i = 0; i < a.length; i++)
                            (o += (r = e.substr(o, e.indexOf((n = a[i]), o) - o)).length + n.length),
                                3 === (n = fe(n, t)).length && n.push(1),
                                (s += r + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")");
                        return s + e.substr(o);
                    },
                    ye = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (p in ce) ye += "|" + p + "\\b";
                (ye = new RegExp(ye + ")", "gi")),
                    (o.colorStringFilter = function (e) {
                        var t,
                            i = e[0] + " " + e[1];
                        ye.test(i) && ((t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")), (e[0] = ge(e[0], t)), (e[1] = ge(e[1], t))), (ye.lastIndex = 0);
                    }),
                    t.defaultStringFilter || (t.defaultStringFilter = o.colorStringFilter);
                var _e = function (e, t, i, n) {
                        if (null == e)
                            return function (e) {
                                return e;
                            };
                        var r,
                            a = t ? (e.match(ye) || [""])[0] : "",
                            o = e.split(a).join("").match(b) || [],
                            s = e.substr(0, e.indexOf(o[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            p = -1 !== e.indexOf(" ") ? " " : ",",
                            m = o.length,
                            h = m > 0 ? o[0].replace(_, "") : "";
                        return m
                            ? (r = t
                                  ? function (e) {
                                        var t, d, c, u;
                                        if ("number" == typeof e) e += h;
                                        else if (n && $.test(e)) {
                                            for (u = e.replace($, "|").split("|"), c = 0; c < u.length; c++) u[c] = r(u[c]);
                                            return u.join(",");
                                        }
                                        if (((t = (e.match(ye) || [a])[0]), (c = (d = e.split(t).join("").match(b) || []).length), m > c--)) for (; ++c < m; ) d[c] = i ? d[((c - 1) / 2) | 0] : o[c];
                                        return s + d.join(p) + p + t + l + (-1 !== e.indexOf("inset") ? " inset" : "");
                                    }
                                  : function (e) {
                                        var t, a, d;
                                        if ("number" == typeof e) e += h;
                                        else if (n && $.test(e)) {
                                            for (a = e.replace($, "|").split("|"), d = 0; d < a.length; d++) a[d] = r(a[d]);
                                            return a.join(",");
                                        }
                                        if (((d = (t = e.match("," === p ? b : w) || []).length), m > d--)) for (; ++d < m; ) t[d] = i ? t[((d - 1) / 2) | 0] : o[d];
                                        return ((s && "none" !== e && e.substr(0, e.indexOf(t[0]))) || s) + t.join(p) + l;
                                    })
                            : function (e) {
                                  return e;
                              };
                    },
                    ve = function (e) {
                        return (
                            (e = e.split(",")),
                            function (t, i, n, r, a, o, s) {
                                var l,
                                    p = (i + "").split(" ");
                                for (s = {}, l = 0; l < 4; l++) s[e[l]] = p[l] = p[l] || p[((l - 1) / 2) >> 0];
                                return r.parse(t, s, a, o);
                            }
                        );
                    },
                    be =
                        ((W._setPluginRatio = function (e) {
                            this.plugin.setRatio(e);
                            for (var t, i, n, r, a, o = this.data, s = o.proxy, l = o.firstMPT; l; ) (t = s[l.v]), l.r ? (t = l.r(t)) : t < 1e-6 && t > -1e-6 && (t = 0), (l.t[l.p] = t), (l = l._next);
                            if ((o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, s.rotation, this.t, this._tween) : s.rotation), 1 === e || 0 === e))
                                for (l = o.firstMPT, a = 1 === e ? "e" : "b"; l; ) {
                                    if ((i = l.t).type) {
                                        if (1 === i.type) {
                                            for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                            i[a] = r;
                                        }
                                    } else i[a] = i.s + i.xs0;
                                    l = l._next;
                                }
                        }),
                        function (e, t, i, n, r) {
                            (this.t = e), (this.p = t), (this.v = i), (this.r = r), n && ((n._prev = this), (this._next = n));
                        }),
                    we =
                        ((W._parseToProxy = function (e, t, i, n, r, a) {
                            var o,
                                s,
                                l,
                                p,
                                m,
                                h = n,
                                d = {},
                                c = {},
                                u = i._transform,
                                f = z;
                            for (i._transform = null, z = t, n = m = i.parse(e, t, n, r), z = f, a && ((i._transform = u), h && ((h._prev = null), h._prev && (h._prev._next = null))); n && n !== h; ) {
                                if (n.type <= 1 && ((c[(s = n.p)] = n.s + n.c), (d[s] = n.s), a || ((p = new be(n, "s", s, p, n.r)), (n.c = 0)), 1 === n.type))
                                    for (o = n.l; --o > 0; ) (c[(s = n.p + "_" + (l = "xn" + o))] = n.data[l]), (d[s] = n[l]), a || (p = new be(n, l, s, p, n.rxp[l]));
                                n = n._next;
                            }
                            return { proxy: d, end: c, firstMPT: p, pt: m };
                        }),
                        (W.CSSPropTween = function (e, t, n, r, o, s, l, p, m, h, d) {
                            (this.t = e),
                                (this.p = t),
                                (this.s = n),
                                (this.c = r),
                                (this.n = l || t),
                                e instanceof we || a.push(this.n),
                                (this.r = p ? ("function" == typeof p ? p : Math.round) : p),
                                (this.type = s || 0),
                                m && ((this.pr = m), (i = !0)),
                                (this.b = void 0 === h ? n : h),
                                (this.e = void 0 === d ? n + r : d),
                                o && ((this._next = o), (o._prev = this));
                        })),
                    xe = function (e, t, i, n, r, a) {
                        var o = new we(e, t, i, n - i, r, -1, a);
                        return (o.b = i), (o.e = o.xs0 = n), o;
                    },
                    Te = (o.parseComplex = function (e, t, i, n, r, a, s, l, p, h) {
                        (i = i || a || ""), "function" == typeof n && (n = n(y, g)), (s = new we(e, t, 0, 0, s, h ? 2 : 1, null, !1, l, i, n)), (n += ""), r && ye.test(n + i) && (o.colorStringFilter((n = [i, n])), (i = n[0]), (n = n[1]));
                        var d,
                            c,
                            u,
                            f,
                            b,
                            w,
                            x,
                            T,
                            k,
                            S,
                            j,
                            C,
                            P,
                            D = i.split(", ").join(",").split(" "),
                            A = n.split(", ").join(",").split(" "),
                            E = D.length,
                            O = !1 !== m;
                        for (
                            (-1 === n.indexOf(",") && -1 === i.indexOf(",")) ||
                                (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl")
                                    ? ((D = D.join(" ").replace($, ", ").split(" ")), (A = A.join(" ").replace($, ", ").split(" ")))
                                    : ((D = D.join(" ").split(",").join(", ").split(" ")), (A = A.join(" ").split(",").join(", ").split(" "))),
                                (E = D.length)),
                                E !== A.length && (E = (D = (a || "").split(" ")).length),
                                s.plugin = p,
                                s.setRatio = h,
                                ye.lastIndex = 0,
                                d = 0;
                            d < E;
                            d++
                        )
                            if (((f = D[d]), (b = A[d] + ""), (T = parseFloat(f)) || 0 === T)) s.appendXtra("", T, me(b, T), b.replace(v, ""), !(!O || -1 === b.indexOf("px")) && Math.round, !0);
                            else if (r && ye.test(f))
                                (C = ")" + ((C = b.indexOf(")") + 1) ? b.substr(C) : "")),
                                    (P = -1 !== b.indexOf("hsl") && V),
                                    (S = b),
                                    (f = fe(f, P)),
                                    (b = fe(b, P)),
                                    (k = f.length + b.length > 6) && !V && 0 === b[3]
                                        ? ((s["xs" + s.l] += s.l ? " transparent" : "transparent"), (s.e = s.e.split(A[d]).join("transparent")))
                                        : (V || (k = !1),
                                          P
                                              ? s
                                                    .appendXtra(S.substr(0, S.indexOf("hsl")) + (k ? "hsla(" : "hsl("), f[0], me(b[0], f[0]), ",", !1, !0)
                                                    .appendXtra("", f[1], me(b[1], f[1]), "%,", !1)
                                                    .appendXtra("", f[2], me(b[2], f[2]), k ? "%," : "%" + C, !1)
                                              : s
                                                    .appendXtra(S.substr(0, S.indexOf("rgb")) + (k ? "rgba(" : "rgb("), f[0], b[0] - f[0], ",", Math.round, !0)
                                                    .appendXtra("", f[1], b[1] - f[1], ",", Math.round)
                                                    .appendXtra("", f[2], b[2] - f[2], k ? "," : C, Math.round),
                                          k && s.appendXtra("", (f = f.length < 4 ? 1 : f[3]), (b.length < 4 ? 1 : b[3]) - f, C, !1)),
                                    (ye.lastIndex = 0);
                            else if ((w = f.match(_))) {
                                if (!(x = b.match(v)) || x.length !== w.length) return s;
                                for (u = 0, c = 0; c < w.length; c++)
                                    (S = f.indexOf((j = w[c]), u)), s.appendXtra(f.substr(u, S - u), Number(j), me(x[c], j), "", !(!O || "px" !== f.substr(S + j.length, 2)) && Math.round, 0 === c), (u = S + j.length);
                                s["xs" + s.l] += f.substr(u);
                            } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + b : b;
                        if (-1 !== n.indexOf("=") && s.data) {
                            for (C = s.xs0 + s.data.s, d = 1; d < s.l; d++) C += s["xs" + d] + s.data["xn" + d];
                            s.e = C + s["xs" + d];
                        }
                        return s.l || ((s.type = -1), (s.xs0 = s.e)), s.xfirst || s;
                    }),
                    ke = 9;
                for ((p = we.prototype).l = p.pr = 0; --ke > 0; ) (p["xn" + ke] = 0), (p["xs" + ke] = "");
                (p.xs0 = ""),
                    (p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null),
                    (p.appendXtra = function (e, t, i, n, r, a) {
                        var o = this,
                            s = o.l;
                        return (
                            (o["xs" + s] += a && (s || o["xs" + s]) ? " " + e : e || ""),
                            i || 0 === s || o.plugin
                                ? (o.l++,
                                  (o.type = o.setRatio ? 2 : 1),
                                  (o["xs" + o.l] = n || ""),
                                  s > 0
                                      ? ((o.data["xn" + s] = t + i), (o.rxp["xn" + s] = r), (o["xn" + s] = t), o.plugin || ((o.xfirst = new we(o, "xn" + s, t, i, o.xfirst || o, 0, o.n, r, o.pr)), (o.xfirst.xs0 = 0)), o)
                                      : ((o.data = { s: t + i }), (o.rxp = {}), (o.s = t), (o.c = i), (o.r = r), o))
                                : ((o["xs" + s] += t + (n || "")), o)
                        );
                    });
                var Se = function (e, t) {
                        (this.p = ((t = t || {}).prefix && Q(e)) || e),
                            (l[e] = l[this.p] = this),
                            (this.format = t.formatter || _e(t.defaultValue, t.color, t.collapsible, t.multi)),
                            t.parser && (this.parse = t.parser),
                            (this.clrs = t.color),
                            (this.multi = t.multi),
                            (this.keyword = t.keyword),
                            (this.dflt = t.defaultValue),
                            (this.allowFunc = t.allowFunc),
                            (this.pr = t.priority || 0);
                    },
                    je = (W._registerComplexSpecialProp = function (e, t, i) {
                        "object" != typeof t && (t = { parser: i });
                        var n,
                            r = e.split(","),
                            a = t.defaultValue;
                        for (i = i || [a], n = 0; n < r.length; n++) (t.prefix = 0 === n && t.prefix), (t.defaultValue = i[n] || a), new Se(r[n], t);
                    }),
                    Ce = (W._registerPluginProp = function (e) {
                        if (!l[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            je(e, {
                                parser: function (e, i, n, r, a, o, p) {
                                    var m = s.com.greensock.plugins[t];
                                    return m ? (m._cssRegister(), l[n].parse(e, i, n, r, a, o, p)) : (Y("Error: " + t + " js file not loaded."), a);
                                },
                            });
                        }
                    });
                ((p = Se.prototype).parseComplex = function (e, t, i, n, r, a) {
                    var o,
                        s,
                        l,
                        p,
                        m,
                        h,
                        d = this.keyword;
                    if ((this.multi && ($.test(i) || $.test(t) ? ((s = t.replace($, "|").split("|")), (l = i.replace($, "|").split("|"))) : d && ((s = [t]), (l = [i]))), l)) {
                        for (p = l.length > s.length ? l.length : s.length, o = 0; o < p; o++)
                            (t = s[o] = s[o] || this.dflt), (i = l[o] = l[o] || this.dflt), d && (m = t.indexOf(d)) !== (h = i.indexOf(d)) && (-1 === h ? (s[o] = s[o].split(d).join("")) : -1 === m && (s[o] += " " + d));
                        (t = s.join(", ")), (i = l.join(", "));
                    }
                    return Te(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, a);
                }),
                    (p.parse = function (e, t, i, n, a, o, s) {
                        return this.parseComplex(e.style, this.format(te(e, this.p, r, !1, this.dflt)), this.format(t), a, o);
                    }),
                    (o.registerSpecialProp = function (e, t, i) {
                        je(e, {
                            parser: function (e, n, r, a, o, s, l) {
                                var p = new we(e, r, 0, 0, o, 2, r, !1, i);
                                return (p.plugin = s), (p.setRatio = t(e, n, a._tween, r)), p;
                            },
                            priority: i,
                        });
                    }),
                    (o.useSVGTransformAttr = !0);
                var Pe,
                    De,
                    Ae,
                    Ee,
                    Oe,
                    Re = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Me = Q("transform"),
                    $e = K + "transform",
                    Ne = Q("transformOrigin"),
                    Le = null !== Q("perspective"),
                    Ie = (W.Transform = function () {
                        (this.perspective = parseFloat(o.defaultTransformPerspective) || 0), (this.force3D = !(!1 === o.defaultForce3D || !Le) && (o.defaultForce3D || "auto"));
                    }),
                    ze = _gsScope.SVGElement,
                    Fe = function (e, t, i) {
                        var n,
                            r = B.createElementNS("http://www.w3.org/2000/svg", e),
                            a = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(a, "$1-$2").toLowerCase(), i[n]);
                        return t.appendChild(r), r;
                    },
                    Be = B.documentElement || {},
                    He =
                        ((Oe = f || (/Android/i.test(X) && !_gsScope.chrome)),
                        B.createElementNS &&
                            Be.appendChild &&
                            !Oe &&
                            ((De = Fe("svg", Be)),
                            (Ee = (Ae = Fe("rect", De, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                            (Ae.style[Ne] = "50% 50%"),
                            (Ae.style[Me] = "scaleX(0.5)"),
                            (Oe = Ee === Ae.getBoundingClientRect().width && !(c && Le)),
                            Be.removeChild(De)),
                        Oe),
                    qe = function (e, t, i, n, r, a) {
                        var s,
                            l,
                            p,
                            m,
                            h,
                            d,
                            c,
                            u,
                            f,
                            g,
                            y,
                            _,
                            v,
                            b,
                            w = e._gsTransform,
                            x = Ve(e, !0);
                        w && ((v = w.xOrigin), (b = w.yOrigin)),
                            (!n || (s = n.split(" ")).length < 2) &&
                                (0 === (c = e.getBBox()).x &&
                                    0 === c.y &&
                                    c.width + c.height === 0 &&
                                    (c = {
                                        x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                                        y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                                        width: 0,
                                        height: 0,
                                    }),
                                (s = [
                                    (-1 !== (t = pe(t).split(" "))[0].indexOf("%") ? (parseFloat(t[0]) / 100) * c.width : parseFloat(t[0])) + c.x,
                                    (-1 !== t[1].indexOf("%") ? (parseFloat(t[1]) / 100) * c.height : parseFloat(t[1])) + c.y,
                                ])),
                            (i.xOrigin = m = parseFloat(s[0])),
                            (i.yOrigin = h = parseFloat(s[1])),
                            n &&
                                x !== Xe &&
                                ((g = x[4]),
                                (y = x[5]),
                                (_ = (d = x[0]) * (f = x[3]) - (c = x[1]) * (u = x[2])) &&
                                    ((p = m * (-c / _) + h * (d / _) - (d * y - c * g) / _), (m = i.xOrigin = s[0] = l = m * (f / _) + h * (-u / _) + (u * y - f * g) / _), (h = i.yOrigin = s[1] = p))),
                            w &&
                                (a && ((i.xOffset = w.xOffset), (i.yOffset = w.yOffset), (w = i)),
                                r || (!1 !== r && !1 !== o.defaultSmoothOrigin) ? ((w.xOffset += (l = m - v) * x[0] + (p = h - b) * x[2] - l), (w.yOffset += l * x[1] + p * x[3] - p)) : (w.xOffset = w.yOffset = 0)),
                            a || e.setAttribute("data-svg-origin", s.join(" "));
                    },
                    Ue = function (e) {
                        var t,
                            i = H("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            r = this.nextSibling,
                            a = this.style.cssText;
                        if ((Be.appendChild(i), i.appendChild(this), (this.style.display = "block"), e))
                            try {
                                (t = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = Ue);
                            } catch (o) {}
                        else this._originalGetBBox && (t = this._originalGetBBox());
                        return r ? n.insertBefore(this, r) : n.appendChild(this), Be.removeChild(i), (this.style.cssText = a), t;
                    },
                    We = function (e) {
                        return !(
                            !ze ||
                            !e.getCTM ||
                            (e.parentNode && !e.ownerSVGElement) ||
                            !(function (e) {
                                try {
                                    return e.getBBox();
                                } catch (t) {
                                    return Ue.call(e, !0);
                                }
                            })(e)
                        );
                    },
                    Xe = [1, 0, 0, 1, 0, 0],
                    Ve = function (e, t) {
                        var i,
                            n,
                            r,
                            a,
                            o,
                            s,
                            l,
                            p = e._gsTransform || new Ie(),
                            m = e.style;
                        if (
                            (Me
                                ? (n = te(e, $e, null, !0))
                                : e.currentStyle && (n = (n = e.currentStyle.filter.match(R)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), p.x || 0, p.y || 0].join(",") : ""),
                            (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                            Me &&
                                i &&
                                !e.offsetParent &&
                                e !== Be &&
                                ((a = m.display),
                                (m.display = "block"),
                                ((l = e.parentNode) && e.offsetParent) || ((o = 1), (s = e.nextSibling), Be.appendChild(e)),
                                (i = !(n = te(e, $e, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                                a ? (m.display = a) : Qe(m, "display"),
                                o && (s ? l.insertBefore(e, s) : l ? l.appendChild(e) : Be.removeChild(e))),
                            (p.svg || (e.getCTM && We(e))) &&
                                (i && -1 !== (m[Me] + "").indexOf("matrix") && ((n = m[Me]), (i = 0)),
                                (r = e.getAttribute("transform")),
                                i && r && ((n = "matrix(" + (r = e.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")"), (i = 0))),
                            i)
                        )
                            return Xe;
                        for (r = (n || "").match(_) || [], ke = r.length; --ke > -1; ) (a = Number(r[ke])), (r[ke] = (o = a - (a |= 0)) ? ((1e5 * o + (o < 0 ? -0.5 : 0.5)) | 0) / 1e5 + a : a);
                        return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
                    },
                    Ge = (W.getTransform = function (e, i, n, r) {
                        if (e._gsTransform && n && !r) return e._gsTransform;
                        var a,
                            s,
                            l,
                            p,
                            m,
                            h,
                            d = (n && e._gsTransform) || new Ie(),
                            c = d.scaleX < 0,
                            u = 1e5,
                            f = (Le && (parseFloat(te(e, Ne, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin)) || 0,
                            g = parseFloat(o.defaultTransformPerspective) || 0;
                        if (((d.svg = !(!e.getCTM || !We(e))), d.svg && (qe(e, te(e, Ne, i, !1, "50% 50%") + "", d, e.getAttribute("data-svg-origin")), (Pe = o.useSVGTransformAttr || He)), (a = Ve(e)) !== Xe)) {
                            if (16 === a.length) {
                                var y,
                                    _,
                                    v,
                                    b,
                                    w,
                                    x = a[0],
                                    T = a[1],
                                    k = a[2],
                                    S = a[3],
                                    j = a[4],
                                    C = a[5],
                                    P = a[6],
                                    D = a[7],
                                    A = a[8],
                                    E = a[9],
                                    O = a[10],
                                    R = a[12],
                                    M = a[13],
                                    $ = a[14],
                                    N = a[11],
                                    L = Math.atan2(P, O);
                                d.zOrigin && ((R = A * ($ = -d.zOrigin) - a[12]), (M = E * $ - a[13]), ($ = O * $ + d.zOrigin - a[14])),
                                    (d.rotationX = L * I),
                                    L &&
                                        ((y = j * (b = Math.cos(-L)) + A * (w = Math.sin(-L))),
                                        (_ = C * b + E * w),
                                        (v = P * b + O * w),
                                        (A = j * -w + A * b),
                                        (E = C * -w + E * b),
                                        (O = P * -w + O * b),
                                        (N = D * -w + N * b),
                                        (j = y),
                                        (C = _),
                                        (P = v)),
                                    (L = Math.atan2(-k, O)),
                                    (d.rotationY = L * I),
                                    L && ((_ = T * (b = Math.cos(-L)) - E * (w = Math.sin(-L))), (v = k * b - O * w), (E = T * w + E * b), (O = k * w + O * b), (N = S * w + N * b), (x = y = x * b - A * w), (T = _), (k = v)),
                                    (L = Math.atan2(T, x)),
                                    (d.rotation = L * I),
                                    L && ((y = x * (b = Math.cos(L)) + T * (w = Math.sin(L))), (_ = j * b + C * w), (v = A * b + E * w), (T = T * b - x * w), (C = C * b - j * w), (E = E * b - A * w), (x = y), (j = _), (A = v)),
                                    d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && ((d.rotationX = d.rotation = 0), (d.rotationY = 180 - d.rotationY)),
                                    (L = Math.atan2(j, C)),
                                    (d.scaleX = ((Math.sqrt(x * x + T * T + k * k) * u + 0.5) | 0) / u),
                                    (d.scaleY = ((Math.sqrt(C * C + P * P) * u + 0.5) | 0) / u),
                                    (d.scaleZ = ((Math.sqrt(A * A + E * E + O * O) * u + 0.5) | 0) / u),
                                    (x /= d.scaleX),
                                    (j /= d.scaleY),
                                    (T /= d.scaleX),
                                    (C /= d.scaleY),
                                    Math.abs(L) > 2e-5 ? ((d.skewX = L * I), (j = 0), "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(L))) : (d.skewX = 0),
                                    (d.perspective = N ? 1 / (N < 0 ? -N : N) : 0),
                                    (d.x = R),
                                    (d.y = M),
                                    (d.z = $),
                                    d.svg && ((d.x -= d.xOrigin - (d.xOrigin * x - d.yOrigin * j)), (d.y -= d.yOrigin - (d.yOrigin * T - d.xOrigin * C)));
                            } else if (!Le || r || !a.length || d.x !== a[4] || d.y !== a[5] || (!d.rotationX && !d.rotationY)) {
                                var z = a.length >= 6,
                                    F = z ? a[0] : 1,
                                    B = a[1] || 0,
                                    H = a[2] || 0,
                                    q = z ? a[3] : 1;
                                (d.x = a[4] || 0),
                                    (d.y = a[5] || 0),
                                    (l = Math.sqrt(F * F + B * B)),
                                    (p = Math.sqrt(q * q + H * H)),
                                    (m = F || B ? Math.atan2(B, F) * I : d.rotation || 0),
                                    (h = H || q ? Math.atan2(H, q) * I + m : d.skewX || 0),
                                    (d.scaleX = l),
                                    (d.scaleY = p),
                                    (d.rotation = m),
                                    (d.skewX = h),
                                    Le && ((d.rotationX = d.rotationY = d.z = 0), (d.perspective = g), (d.scaleZ = 1)),
                                    d.svg && ((d.x -= d.xOrigin - (d.xOrigin * F + d.yOrigin * H)), (d.y -= d.yOrigin - (d.xOrigin * B + d.yOrigin * q)));
                            }
                            for (s in (Math.abs(d.skewX) > 90 &&
                                Math.abs(d.skewX) < 270 &&
                                (c ? ((d.scaleX *= -1), (d.skewX += d.rotation <= 0 ? 180 : -180), (d.rotation += d.rotation <= 0 ? 180 : -180)) : ((d.scaleY *= -1), (d.skewX += d.skewX <= 0 ? 180 : -180))),
                            (d.zOrigin = f),
                            d))
                                d[s] < 2e-5 && d[s] > -2e-5 && (d[s] = 0);
                        }
                        return (
                            n &&
                                ((e._gsTransform = d),
                                d.svg &&
                                    (Pe && e.style[Me]
                                        ? t.delayedCall(0.001, function () {
                                              Qe(e.style, Me);
                                          })
                                        : !Pe &&
                                          e.getAttribute("transform") &&
                                          t.delayedCall(0.001, function () {
                                              e.removeAttribute("transform");
                                          }))),
                            d
                        );
                    }),
                    Ye = function (e) {
                        var t,
                            i,
                            n = this.data,
                            r = -n.rotation * L,
                            a = r + n.skewX * L,
                            o = 1e5,
                            s = ((Math.cos(r) * n.scaleX * o) | 0) / o,
                            l = ((Math.sin(r) * n.scaleX * o) | 0) / o,
                            p = ((Math.sin(a) * -n.scaleY * o) | 0) / o,
                            m = ((Math.cos(a) * n.scaleY * o) | 0) / o,
                            h = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            (i = l), (l = -p), (p = -i), (t = d.filter), (h.filter = "");
                            var c,
                                u,
                                g = this.t.offsetWidth,
                                y = this.t.offsetHeight,
                                _ = "absolute" !== d.position,
                                v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + p + ", M22=" + m,
                                b = n.x + (g * n.xPercent) / 100,
                                w = n.y + (y * n.yPercent) / 100;
                            if (
                                (null != n.ox && ((b += (c = (n.oxp ? g * n.ox * 0.01 : n.ox) - g / 2) - (c * s + (u = (n.oyp ? y * n.oy * 0.01 : n.oy) - y / 2) * l)), (w += u - (c * p + u * m))),
                                (v += _ ? ", Dx=" + ((c = g / 2) - (c * s + (u = y / 2) * l) + b) + ", Dy=" + (u - (c * p + u * m) + w) + ")" : ", sizingMethod='auto expand')"),
                                (h.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(M, v) : v + " " + t),
                                (0 !== e && 1 !== e) ||
                                    (1 === s &&
                                        0 === l &&
                                        0 === p &&
                                        1 === m &&
                                        ((_ && -1 === v.indexOf("Dx=0, Dy=0")) || (k.test(t) && 100 !== parseFloat(RegExp.$1)) || (-1 === t.indexOf(t.indexOf("Alpha")) && h.removeAttribute("filter")))),
                                !_)
                            ) {
                                var x,
                                    S,
                                    j,
                                    C = f < 8 ? 1 : -1;
                                for (
                                    c = n.ieOffsetX || 0,
                                        u = n.ieOffsetY || 0,
                                        n.ieOffsetX = Math.round((g - ((s < 0 ? -s : s) * g + (l < 0 ? -l : l) * y)) / 2 + b),
                                        n.ieOffsetY = Math.round((y - ((m < 0 ? -m : m) * y + (p < 0 ? -p : p) * g)) / 2 + w),
                                        ke = 0;
                                    ke < 4;
                                    ke++
                                )
                                    (j =
                                        (i = -1 !== (x = d[(S = se[ke])]).indexOf("px") ? parseFloat(x) : ie(this.t, S, parseFloat(x), x.replace(T, "")) || 0) !== n[S]
                                            ? ke < 2
                                                ? -n.ieOffsetX
                                                : -n.ieOffsetY
                                            : ke < 2
                                            ? c - n.ieOffsetX
                                            : u - n.ieOffsetY),
                                        (h[S] = (n[S] = Math.round(i - j * (0 === ke || 2 === ke ? 1 : C))) + "px");
                            }
                        }
                    },
                    Ke = (W.set3DTransformRatio = W.setTransformRatio = function (e) {
                        var t,
                            i,
                            n,
                            r,
                            a,
                            o,
                            s,
                            l,
                            p,
                            m,
                            h,
                            d,
                            u,
                            f,
                            g,
                            y,
                            _,
                            v,
                            b,
                            w,
                            x,
                            T = this.data,
                            k = this.t.style,
                            S = T.rotation,
                            j = T.rotationX,
                            C = T.rotationY,
                            P = T.scaleX,
                            D = T.scaleY,
                            A = T.scaleZ,
                            E = T.x,
                            O = T.y,
                            R = T.z,
                            M = T.svg,
                            $ = T.perspective,
                            N = T.force3D,
                            I = T.skewY,
                            z = T.skewX;
                        if ((I && ((z += I), (S += I)), !((((1 !== e && 0 !== e) || "auto" !== N || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && N) || R || $ || C || j || 1 !== A) || (Pe && M) || !Le))
                            S || z || M
                                ? ((S *= L),
                                  (w = z * L),
                                  (x = 1e5),
                                  (i = Math.cos(S) * P),
                                  (a = Math.sin(S) * P),
                                  (n = Math.sin(S - w) * -D),
                                  (o = Math.cos(S - w) * D),
                                  w && "simple" === T.skewType && ((t = Math.tan(w - I * L)), (n *= t = Math.sqrt(1 + t * t)), (o *= t), I && ((t = Math.tan(I * L)), (i *= t = Math.sqrt(1 + t * t)), (a *= t))),
                                  M &&
                                      ((E += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset),
                                      (O += T.yOrigin - (T.xOrigin * a + T.yOrigin * o) + T.yOffset),
                                      Pe && (T.xPercent || T.yPercent) && ((g = this.t.getBBox()), (E += 0.01 * T.xPercent * g.width), (O += 0.01 * T.yPercent * g.height)),
                                      E < (g = 1e-6) && E > -g && (E = 0),
                                      O < g && O > -g && (O = 0)),
                                  (b = ((i * x) | 0) / x + "," + ((a * x) | 0) / x + "," + ((n * x) | 0) / x + "," + ((o * x) | 0) / x + "," + E + "," + O + ")"),
                                  M && Pe ? this.t.setAttribute("transform", "matrix(" + b) : (k[Me] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + b))
                                : (k[Me] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + D + "," + E + "," + O + ")");
                        else {
                            if ((c && (P < (g = 1e-4) && P > -g && (P = A = 2e-5), D < g && D > -g && (D = A = 2e-5), !$ || T.z || T.rotationX || T.rotationY || ($ = 0)), S || z))
                                (S *= L),
                                    (y = i = Math.cos(S)),
                                    (_ = a = Math.sin(S)),
                                    z &&
                                        ((S -= z * L),
                                        (y = Math.cos(S)),
                                        (_ = Math.sin(S)),
                                        "simple" === T.skewType && ((t = Math.tan((z - I) * L)), (y *= t = Math.sqrt(1 + t * t)), (_ *= t), T.skewY && ((t = Math.tan(I * L)), (i *= t = Math.sqrt(1 + t * t)), (a *= t)))),
                                    (n = -_),
                                    (o = y);
                            else {
                                if (!(C || j || 1 !== A || $ || M))
                                    return void (k[Me] =
                                        (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") +
                                        E +
                                        "px," +
                                        O +
                                        "px," +
                                        R +
                                        "px)" +
                                        (1 !== P || 1 !== D ? " scale(" + P + "," + D + ")" : ""));
                                (i = o = 1), (n = a = 0);
                            }
                            (m = 1),
                                (r = s = l = p = h = d = 0),
                                (u = $ ? -1 / $ : 0),
                                (f = T.zOrigin),
                                (g = 1e-6),
                                (S = C * L) && ((y = Math.cos(S)), (l = -(_ = Math.sin(S))), (h = u * -_), (r = i * _), (s = a * _), (m = y), (u *= y), (i *= y), (a *= y)),
                                (S = j * L) && ((t = n * (y = Math.cos(S)) + r * (_ = Math.sin(S))), (v = o * y + s * _), (p = m * _), (d = u * _), (r = n * -_ + r * y), (s = o * -_ + s * y), (m *= y), (u *= y), (n = t), (o = v)),
                                1 !== A && ((r *= A), (s *= A), (m *= A), (u *= A)),
                                1 !== D && ((n *= D), (o *= D), (p *= D), (d *= D)),
                                1 !== P && ((i *= P), (a *= P), (l *= P), (h *= P)),
                                (f || M) &&
                                    (f && ((E += r * -f), (O += s * -f), (R += m * -f + f)),
                                    M && ((E += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset), (O += T.yOrigin - (T.xOrigin * a + T.yOrigin * o) + T.yOffset)),
                                    E < g && E > -g && (E = "0"),
                                    O < g && O > -g && (O = "0"),
                                    R < g && R > -g && (R = 0)),
                                (b = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d("),
                                (b += (i < g && i > -g ? "0" : i) + "," + (a < g && a > -g ? "0" : a) + "," + (l < g && l > -g ? "0" : l)),
                                (b += "," + (h < g && h > -g ? "0" : h) + "," + (n < g && n > -g ? "0" : n) + "," + (o < g && o > -g ? "0" : o)),
                                j || C || 1 !== A
                                    ? ((b += "," + (p < g && p > -g ? "0" : p) + "," + (d < g && d > -g ? "0" : d) + "," + (r < g && r > -g ? "0" : r)),
                                      (b += "," + (s < g && s > -g ? "0" : s) + "," + (m < g && m > -g ? "0" : m) + "," + (u < g && u > -g ? "0" : u) + ","))
                                    : (b += ",0,0,0,0,1,0,"),
                                (k[Me] = b += E + "," + O + "," + R + "," + ($ ? 1 + -R / $ : 1) + ")");
                        }
                    });
                ((p = Ie.prototype).x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0),
                    (p.scaleX = p.scaleY = p.scaleZ = 1),
                    je(
                        "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                        {
                            parser: function (e, t, i, n, a, s, l) {
                                if (n._lastParsedTransform === l) return a;
                                n._lastParsedTransform = l;
                                var p = l.scale && "function" == typeof l.scale ? l.scale : 0;
                                p && (l.scale = p(y, e));
                                var m,
                                    h,
                                    d,
                                    c,
                                    u,
                                    f,
                                    _,
                                    v,
                                    b,
                                    w = e._gsTransform,
                                    x = e.style,
                                    T = Re.length,
                                    k = l,
                                    S = {},
                                    j = Ge(e, r, !0, k.parseTransform),
                                    C = k.transform && ("function" == typeof k.transform ? k.transform(y, g) : k.transform);
                                if (((j.skewType = k.skewType || j.skewType || o.defaultSkewType), (n._transform = j), "rotationZ" in k && (k.rotation = k.rotationZ), C && "string" == typeof C && Me))
                                    ((h = q.style)[Me] = C),
                                        (h.display = "block"),
                                        (h.position = "absolute"),
                                        -1 !== C.indexOf("%") && ((h.width = te(e, "width")), (h.height = te(e, "height"))),
                                        B.body.appendChild(q),
                                        (m = Ge(q, null, !1)),
                                        "simple" === j.skewType && (m.scaleY *= Math.cos(m.skewX * L)),
                                        j.svg &&
                                            ((f = j.xOrigin),
                                            (_ = j.yOrigin),
                                            (m.x -= j.xOffset),
                                            (m.y -= j.yOffset),
                                            (k.transformOrigin || k.svgOrigin) &&
                                                ((C = {}), qe(e, pe(k.transformOrigin), C, k.svgOrigin, k.smoothOrigin, !0), (f = C.xOrigin), (_ = C.yOrigin), (m.x -= C.xOffset - j.xOffset), (m.y -= C.yOffset - j.yOffset)),
                                            (f || _) && ((v = Ve(q, !0)), (m.x -= f - (f * v[0] + _ * v[2])), (m.y -= _ - (f * v[1] + _ * v[3])))),
                                        B.body.removeChild(q),
                                        m.perspective || (m.perspective = j.perspective),
                                        null != k.xPercent && (m.xPercent = he(k.xPercent, j.xPercent)),
                                        null != k.yPercent && (m.yPercent = he(k.yPercent, j.yPercent));
                                else if ("object" == typeof k) {
                                    if (
                                        ((m = {
                                            scaleX: he(null != k.scaleX ? k.scaleX : k.scale, j.scaleX),
                                            scaleY: he(null != k.scaleY ? k.scaleY : k.scale, j.scaleY),
                                            scaleZ: he(k.scaleZ, j.scaleZ),
                                            x: he(k.x, j.x),
                                            y: he(k.y, j.y),
                                            z: he(k.z, j.z),
                                            xPercent: he(k.xPercent, j.xPercent),
                                            yPercent: he(k.yPercent, j.yPercent),
                                            perspective: he(k.transformPerspective, j.perspective),
                                        }),
                                        null != (u = k.directionalRotation))
                                    )
                                        if ("object" == typeof u) for (h in u) k[h] = u[h];
                                        else k.rotation = u;
                                    "string" == typeof k.x && -1 !== k.x.indexOf("%") && ((m.x = 0), (m.xPercent = he(k.x, j.xPercent))),
                                        "string" == typeof k.y && -1 !== k.y.indexOf("%") && ((m.y = 0), (m.yPercent = he(k.y, j.yPercent))),
                                        (m.rotation = de("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : j.rotation, j.rotation, "rotation", S)),
                                        Le &&
                                            ((m.rotationX = de("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : j.rotationX || 0, j.rotationX, "rotationX", S)),
                                            (m.rotationY = de("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : j.rotationY || 0, j.rotationY, "rotationY", S))),
                                        (m.skewX = de(k.skewX, j.skewX)),
                                        (m.skewY = de(k.skewY, j.skewY));
                                }
                                for (
                                    Le && null != k.force3D && ((j.force3D = k.force3D), (c = !0)),
                                        (d = j.force3D || j.z || j.rotationX || j.rotationY || m.z || m.rotationX || m.rotationY || m.perspective) || null == k.scale || (m.scaleZ = 1);
                                    --T > -1;

                                )
                                    ((C = m[(b = Re[T])] - j[b]) > 1e-6 || C < -1e-6 || null != k[b] || null != z[b]) &&
                                        ((c = !0), (a = new we(j, b, j[b], C, a)), b in S && (a.e = S[b]), (a.xs0 = 0), (a.plugin = s), n._overwriteProps.push(a.n));
                                return (
                                    (C = "function" == typeof k.transformOrigin ? k.transformOrigin(y, g) : k.transformOrigin),
                                    j.svg &&
                                        (C || k.svgOrigin) &&
                                        ((f = j.xOffset),
                                        (_ = j.yOffset),
                                        qe(e, pe(C), m, k.svgOrigin, k.smoothOrigin),
                                        (a = xe(j, "xOrigin", (w ? j : m).xOrigin, m.xOrigin, a, "transformOrigin")),
                                        (a = xe(j, "yOrigin", (w ? j : m).yOrigin, m.yOrigin, a, "transformOrigin")),
                                        (f === j.xOffset && _ === j.yOffset) || ((a = xe(j, "xOffset", w ? f : j.xOffset, j.xOffset, a, "transformOrigin")), (a = xe(j, "yOffset", w ? _ : j.yOffset, j.yOffset, a, "transformOrigin"))),
                                        (C = "0px 0px")),
                                    (C || (Le && d && j.zOrigin)) &&
                                        (Me
                                            ? ((c = !0),
                                              (b = Ne),
                                              C || (C = (C = (te(e, b, r, !1, "50% 50%") + "").split(" "))[0] + " " + C[1] + " " + j.zOrigin + "px"),
                                              (C += ""),
                                              ((a = new we(x, b, 0, 0, a, -1, "transformOrigin")).b = x[b]),
                                              (a.plugin = s),
                                              Le
                                                  ? ((h = j.zOrigin),
                                                    (C = C.split(" ")),
                                                    (j.zOrigin = (C.length > 2 ? parseFloat(C[2]) : h) || 0),
                                                    (a.xs0 = a.e = C[0] + " " + (C[1] || "50%") + " 0px"),
                                                    ((a = new we(j, "zOrigin", 0, 0, a, -1, a.n)).b = h),
                                                    (a.xs0 = a.e = j.zOrigin))
                                                  : (a.xs0 = a.e = C))
                                            : pe(C + "", j)),
                                    c && (n._transformType = (j.svg && Pe) || (!d && 3 !== this._transformType) ? 2 : 3),
                                    p && (l.scale = p),
                                    a
                                );
                            },
                            allowFunc: !0,
                            prefix: !0,
                        }
                    ),
                    je("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                    je("clipPath", { defaultValue: "inset(0%)", prefix: !0, multi: !0, formatter: _e("inset(0% 0% 0% 0%)", !1, !0) }),
                    je("borderRadius", {
                        defaultValue: "0px",
                        parser: function (e, t, i, a, o, s) {
                            t = this.format(t);
                            var l,
                                p,
                                m,
                                h,
                                d,
                                c,
                                u,
                                f,
                                g,
                                y,
                                _,
                                v,
                                b,
                                w,
                                x,
                                T,
                                k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                S = e.style;
                            for (g = parseFloat(e.offsetWidth), y = parseFloat(e.offsetHeight), l = t.split(" "), p = 0; p < k.length; p++)
                                this.p.indexOf("border") && (k[p] = Q(k[p])),
                                    -1 !== (d = h = te(e, k[p], r, !1, "0px")).indexOf(" ") && ((h = d.split(" ")), (d = h[0]), (h = h[1])),
                                    (c = m = l[p]),
                                    (u = parseFloat(d)),
                                    (v = d.substr((u + "").length)),
                                    (b = "=" === c.charAt(1))
                                        ? ((f = parseInt(c.charAt(0) + "1", 10)), (c = c.substr(2)), (f *= parseFloat(c)), (_ = c.substr((f + "").length - (f < 0 ? 1 : 0)) || ""))
                                        : ((f = parseFloat(c)), (_ = c.substr((f + "").length))),
                                    "" === _ && (_ = n[i] || v),
                                    _ !== v &&
                                        ((w = ie(e, "borderLeft", u, v)),
                                        (x = ie(e, "borderTop", u, v)),
                                        "%" === _ ? ((d = (w / g) * 100 + "%"), (h = (x / y) * 100 + "%")) : "em" === _ ? ((d = w / (T = ie(e, "borderLeft", 1, "em")) + "em"), (h = x / T + "em")) : ((d = w + "px"), (h = x + "px")),
                                        b && ((c = parseFloat(d) + f + _), (m = parseFloat(h) + f + _))),
                                    (o = Te(S, k[p], d + " " + h, c + " " + m, !1, "0px", o));
                            return o;
                        },
                        prefix: !0,
                        formatter: _e("0px 0px 0px 0px", !1, !0),
                    }),
                    je("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function (e, t, i, n, a, o) {
                            return Te(e.style, i, this.format(te(e, i, r, !1, "0px 0px")), this.format(t), !1, "0px", a);
                        },
                        prefix: !0,
                        formatter: _e("0px 0px", !1, !0),
                    }),
                    je("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (e, t, i, n, a, o) {
                            var s,
                                l,
                                p,
                                m,
                                h,
                                d,
                                c = "background-position",
                                u = r || ee(e),
                                g = this.format((u ? (f ? u.getPropertyValue(c + "-x") + " " + u.getPropertyValue(c + "-y") : u.getPropertyValue(c)) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                                y = this.format(t);
                            if ((-1 !== g.indexOf("%")) != (-1 !== y.indexOf("%")) && y.split(",").length < 2 && (d = te(e, "backgroundImage").replace(A, "")) && "none" !== d) {
                                for (s = g.split(" "), l = y.split(" "), U.setAttribute("src", d), p = 2; --p > -1; )
                                    (m = -1 !== (g = s[p]).indexOf("%")) != (-1 !== l[p].indexOf("%")) &&
                                        ((h = 0 === p ? e.offsetWidth - U.width : e.offsetHeight - U.height), (s[p] = m ? (parseFloat(g) / 100) * h + "px" : (parseFloat(g) / h) * 100 + "%"));
                                g = s.join(" ");
                            }
                            return this.parseComplex(e.style, g, y, a, o);
                        },
                        formatter: pe,
                    }),
                    je("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function (e) {
                            return "co" === (e += "").substr(0, 2) ? e : pe(-1 === e.indexOf(" ") ? e + " " + e : e);
                        },
                    }),
                    je("perspective", { defaultValue: "0px", prefix: !0 }),
                    je("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                    je("transformStyle", { prefix: !0 }),
                    je("backfaceVisibility", { prefix: !0 }),
                    je("userSelect", { prefix: !0 }),
                    je("margin", { parser: ve("marginTop,marginRight,marginBottom,marginLeft") }),
                    je("padding", { parser: ve("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                    je("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (e, t, i, n, a, o) {
                            var s, l, p;
                            return (
                                f < 9
                                    ? ((s = "rect(" + (l = e.currentStyle).clipTop + (p = f < 8 ? " " : ",") + l.clipRight + p + l.clipBottom + p + l.clipLeft + ")"), (t = this.format(t).split(",").join(p)))
                                    : ((s = this.format(te(e, this.p, r, !1, this.dflt))), (t = this.format(t))),
                                this.parseComplex(e.style, s, t, a, o)
                            );
                        },
                    }),
                    je("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                    je("autoRound,strictUnits", {
                        parser: function (e, t, i, n, r) {
                            return r;
                        },
                    }),
                    je("border", {
                        defaultValue: "0px solid #000",
                        parser: function (e, t, i, n, a, o) {
                            var s = te(e, "borderTopWidth", r, !1, "0px"),
                                l = this.format(t).split(" "),
                                p = l[0].replace(T, "");
                            return (
                                "px" !== p && (s = parseFloat(s) / ie(e, "borderTopWidth", 1, p) + p),
                                this.parseComplex(e.style, this.format(s + " " + te(e, "borderTopStyle", r, !1, "solid") + " " + te(e, "borderTopColor", r, !1, "#000")), l.join(" "), a, o)
                            );
                        },
                        color: !0,
                        formatter: function (e) {
                            var t = e.split(" ");
                            return t[0] + " " + (t[1] || "solid") + " " + (e.match(ye) || ["#000"])[0];
                        },
                    }),
                    je("borderWidth", { parser: ve("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                    je("float,cssFloat,styleFloat", {
                        parser: function (e, t, i, n, r, a) {
                            var o = e.style,
                                s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                            return new we(o, s, 0, 0, r, -1, i, !1, 0, o[s], t);
                        },
                    });
                var Je = function (e) {
                    var t,
                        i = this.t,
                        n = i.filter || te(this.data, "filter") || "",
                        r = (this.s + this.c * e) | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), (t = !te(this.data, "filter"))) : ((i.filter = n.replace(j, "")), (t = !0))),
                        t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? (0 === r && this.xn1) || (i.filter = n + " alpha(opacity=" + r + ")") : (i.filter = n.replace(k, "opacity=" + r)));
                };
                je("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (e, t, i, n, a, o) {
                        var s = parseFloat(te(e, "opacity", r, !1, "1")),
                            l = e.style,
                            p = "autoAlpha" === i;
                        return (
                            "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s),
                            p && 1 === s && "hidden" === te(e, "visibility", r) && 0 !== t && (s = 0),
                            V
                                ? (a = new we(l, "opacity", s, t - s, a))
                                : (((a = new we(l, "opacity", 100 * s, 100 * (t - s), a)).xn1 = p ? 1 : 0),
                                  (l.zoom = 1),
                                  (a.type = 2),
                                  (a.b = "alpha(opacity=" + a.s + ")"),
                                  (a.e = "alpha(opacity=" + (a.s + a.c) + ")"),
                                  (a.data = e),
                                  (a.plugin = o),
                                  (a.setRatio = Je)),
                            p && (((a = new we(l, "visibility", 0, 0, a, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit"), n._overwriteProps.push(a.n), n._overwriteProps.push(i)),
                            a
                        );
                    },
                });
                var Qe = function (e, t) {
                        t && (e.removeProperty ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) || (t = "-" + t), e.removeProperty(t.replace(P, "-$1").toLowerCase())) : e.removeAttribute(t));
                    },
                    Ze = function (e) {
                        if (((this.t._gsClassPT = this), 1 === e || 0 === e)) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, i = this.t.style; t; ) t.v ? (i[t.p] = t.v) : Qe(i, t.p), (t = t._next);
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                    };
                je("className", {
                    parser: function (e, t, n, a, o, s, l) {
                        var p,
                            m,
                            h,
                            d,
                            c,
                            u = e.getAttribute("class") || "",
                            f = e.style.cssText;
                        if ((((o = a._classNamePT = new we(e, n, 0, 0, o, 2)).setRatio = Ze), (o.pr = -11), (i = !0), (o.b = u), (m = re(e, r)), (h = e._gsClassPT))) {
                            for (d = {}, c = h.data; c; ) (d[c.p] = 1), (c = c._next);
                            h.setRatio(1);
                        }
                        return (
                            (e._gsClassPT = o),
                            (o.e = "=" !== t.charAt(1) ? t : u.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "")),
                            e.setAttribute("class", o.e),
                            (p = ae(e, m, re(e), l, d)),
                            e.setAttribute("class", u),
                            (o.data = p.firstMPT),
                            e.style.cssText !== f && (e.style.cssText = f),
                            (o.xfirst = a.parse(e, p.difs, o, s))
                        );
                    },
                });
                var et = function (e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t,
                            i,
                            n,
                            r,
                            a,
                            o = this.t.style,
                            s = l.transform.parse;
                        if ("all" === this.e) (o.cssText = ""), (r = !0);
                        else for (n = (t = this.e.split(" ").join("").split(",")).length; --n > -1; ) l[(i = t[n])] && (l[i].parse === s ? (r = !0) : (i = "transformOrigin" === i ? Ne : l[i].p)), Qe(o, i);
                        r && (Qe(o, Me), (a = this.t._gsTransform) && (a.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                    }
                };
                for (
                    je("clearProps", {
                        parser: function (e, t, n, r, a) {
                            return ((a = new we(e, n, 0, 0, a, 2)).setRatio = et), (a.e = t), (a.pr = -10), (a.data = r._tween), (i = !0), a;
                        },
                    }),
                        p = "bezier,throwProps,physicsProps,physics2D".split(","),
                        ke = p.length;
                    ke--;

                )
                    Ce(p[ke]);
                ((p = o.prototype)._firstPT = p._lastParsedTransform = p._transform = null),
                    (p._onInitTween = function (e, t, s, p) {
                        if (!e.nodeType) return !1;
                        (this._target = g = e), (this._tween = s), (this._vars = t), (y = p), (m = t.autoRound), (i = !1), (n = t.suffixMap || o.suffixMap), (r = ee(e)), (a = this._overwriteProps);
                        var c,
                            f,
                            _,
                            v,
                            b,
                            w,
                            x,
                            T,
                            k,
                            j = e.style;
                        if (
                            (h && "" === j.zIndex && (("auto" !== (c = te(e, "zIndex", r)) && "" !== c) || this._addLazySet(j, "zIndex", 0)),
                            "string" == typeof t && ((v = j.cssText), (c = re(e, r)), (j.cssText = v + ";" + t), (c = ae(e, c, re(e)).difs), !V && S.test(t) && (c.opacity = parseFloat(RegExp.$1)), (t = c), (j.cssText = v)),
                            (this._firstPT = f = t.className ? l.className.parse(e, t.className, "className", this, null, null, t) : this.parse(e, t, null)),
                            this._transformType)
                        ) {
                            for (
                                k = 3 === this._transformType,
                                    Me
                                        ? d &&
                                          ((h = !0),
                                          "" === j.zIndex && (("auto" !== (x = te(e, "zIndex", r)) && "" !== x) || this._addLazySet(j, "zIndex", 0)),
                                          u && this._addLazySet(j, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden")))
                                        : (j.zoom = 1),
                                    _ = f;
                                _ && _._next;

                            )
                                _ = _._next;
                            (T = new we(e, "transform", 0, 0, null, 2)), this._linkCSSP(T, null, _), (T.setRatio = Me ? Ke : Ye), (T.data = this._transform || Ge(e, r, !0)), (T.tween = s), (T.pr = -1), a.pop();
                        }
                        if (i) {
                            for (; f; ) {
                                for (w = f._next, _ = v; _ && _.pr > f.pr; ) _ = _._next;
                                (f._prev = _ ? _._prev : b) ? (f._prev._next = f) : (v = f), (f._next = _) ? (_._prev = f) : (b = f), (f = w);
                            }
                            this._firstPT = v;
                        }
                        return !0;
                    }),
                    (p.parse = function (e, t, i, a) {
                        var o,
                            s,
                            p,
                            h,
                            d,
                            c,
                            u,
                            f,
                            _,
                            v,
                            b = e.style;
                        for (o in t) {
                            if (((s = l[o]), "function" != typeof (c = t[o]) || (s && s.allowFunc) || (c = c(y, g)), s)) i = s.parse(e, c, o, this, i, a, t);
                            else {
                                if ("--" === o.substr(0, 2)) {
                                    this._tween._propLookup[o] = this._addTween.call(this._tween, e.style, "setProperty", ee(e).getPropertyValue(o) + "", c + "", o, !1, o);
                                    continue;
                                }
                                (d = te(e, o, r) + ""),
                                    (_ = "string" == typeof c),
                                    "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || (_ && C.test(c))
                                        ? (_ || (c = ((c = fe(c)).length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), (i = Te(b, o, d, c, !0, "transparent", i, 0, a)))
                                        : _ && N.test(c)
                                        ? (i = Te(b, o, d, c, !0, null, i, 0, a))
                                        : ((u = (p = parseFloat(d)) || 0 === p ? d.substr((p + "").length) : ""),
                                          ("" !== d && "auto" !== d) ||
                                              ("width" === o || "height" === o ? ((p = le(e, o, r)), (u = "px")) : "left" === o || "top" === o ? ((p = ne(e, o, r)), (u = "px")) : ((p = "opacity" !== o ? 0 : 1), (u = ""))),
                                          (v = _ && "=" === c.charAt(1)) ? ((h = parseInt(c.charAt(0) + "1", 10)), (c = c.substr(2)), (h *= parseFloat(c)), (f = c.replace(T, ""))) : ((h = parseFloat(c)), (f = _ ? c.replace(T, "") : "")),
                                          "" === f && (f = o in n ? n[o] : u),
                                          (c = h || 0 === h ? (v ? h + p : h) + f : t[o]),
                                          u !== f &&
                                              (("" === f && "lineHeight" !== o) ||
                                                  ((h || 0 === h) &&
                                                      p &&
                                                      ((p = ie(e, o, p, u)),
                                                      "%" === f
                                                          ? ((p /= ie(e, o, 100, "%") / 100), !0 !== t.strictUnits && (d = p + "%"))
                                                          : "em" === f || "rem" === f || "vw" === f || "vh" === f
                                                          ? (p /= ie(e, o, 1, f))
                                                          : "px" !== f && ((h = ie(e, o, h, f)), (f = "px")),
                                                      v && (h || 0 === h) && (c = h + p + f)))),
                                          v && (h += p),
                                          (!p && 0 !== p) || (!h && 0 !== h)
                                              ? void 0 !== b[o] && (c || (c + "" != "NaN" && null != c))
                                                  ? ((i = new we(b, o, h || p || 0, 0, i, -1, o, !1, 0, d, c)).xs0 = "none" !== c || ("display" !== o && -1 === o.indexOf("Style")) ? c : d)
                                                  : Y("invalid " + o + " tween value: " + t[o])
                                              : ((i = new we(b, o, p, h - p, i, 0, o, !1 !== m && ("px" === f || "zIndex" === o), 0, d, c)).xs0 = f));
                            }
                            a && i && !i.plugin && (i.plugin = a);
                        }
                        return i;
                    }),
                    (p.setRatio = function (e) {
                        var t,
                            i,
                            n,
                            r = this._firstPT;
                        if (1 !== e || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                            if (e || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                                for (; r; ) {
                                    if (((t = r.c * e + r.s), r.r ? (t = r.r(t)) : t < 1e-6 && t > -1e-6 && (t = 0), r.type))
                                        if (1 === r.type)
                                            if (2 === (n = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                            else if (3 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i;
                                            }
                                        else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(e);
                                    else r.t[r.p] = t + r.xs0;
                                    r = r._next;
                                }
                            else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(e), (r = r._next);
                        else
                            for (; r; ) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (((t = r.r(r.s + r.c)), r.type)) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i;
                                            }
                                        } else r.t[r.p] = t + r.xs0;
                                    else r.t[r.p] = r.e;
                                else r.setRatio(e);
                                r = r._next;
                            }
                    }),
                    (p._enableTransforms = function (e) {
                        (this._transform = this._transform || Ge(this._target, r, !0)), (this._transformType = (this._transform.svg && Pe) || (!e && 3 !== this._transformType) ? 2 : 3);
                    });
                var tt = function (e) {
                    (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
                };
                (p._addLazySet = function (e, t, i) {
                    var n = (this._firstPT = new we(e, t, 0, 0, this._firstPT, 2));
                    (n.e = i), (n.setRatio = tt), (n.data = this);
                }),
                    (p._linkCSSP = function (e, t, i, n) {
                        return (
                            e &&
                                (t && (t._prev = e),
                                e._next && (e._next._prev = e._prev),
                                e._prev ? (e._prev._next = e._next) : this._firstPT === e && ((this._firstPT = e._next), (n = !0)),
                                i ? (i._next = e) : n || null !== this._firstPT || (this._firstPT = e),
                                (e._next = t),
                                (e._prev = i)),
                            e
                        );
                    }),
                    (p._mod = function (e) {
                        for (var t = this._firstPT; t; ) "function" == typeof e[t.p] && (t.r = e[t.p]), (t = t._next);
                    }),
                    (p._kill = function (t) {
                        var i,
                            n,
                            r,
                            a = t;
                        if (t.autoAlpha || t.alpha) {
                            for (n in ((a = {}), t)) a[n] = t[n];
                            (a.opacity = 1), a.autoAlpha && (a.visibility = 1);
                        }
                        for (
                            t.className &&
                                (i = this._classNamePT) &&
                                ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
                                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                                (this._classNamePT = null)),
                                i = this._firstPT;
                            i;

                        )
                            i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(t), (n = i.plugin)), (i = i._next);
                        return e.prototype._kill.call(this, a);
                    });
                var it = function (e, t, i) {
                    var n, r, a, o;
                    if (e.slice) for (r = e.length; --r > -1; ) it(e[r], t, i);
                    else for (r = (n = e.childNodes).length; --r > -1; ) (o = (a = n[r]).type), a.style && (t.push(re(a)), i && i.push(a)), (1 !== o && 9 !== o && 11 !== o) || !a.childNodes.length || it(a, t, i);
                };
                return (
                    (o.cascadeTo = function (e, i, n) {
                        var r,
                            a,
                            o,
                            s,
                            l = t.to(e, i, n),
                            p = [l],
                            m = [],
                            h = [],
                            d = [],
                            c = t._internals.reservedProps;
                        for (it((e = l._targets || l.target), m, d), l.render(i, !0, !0), it(e, h), l.render(0, !0, !0), l._enabled(!0), r = d.length; --r > -1; )
                            if ((a = ae(d[r], m[r], h[r])).firstMPT) {
                                for (o in ((a = a.difs), n)) c[o] && (a[o] = n[o]);
                                for (o in ((s = {}), a)) s[o] = m[r][o];
                                p.push(t.fromTo(d[r], i, s, a));
                            }
                        return p;
                    }),
                    e.activate([o]),
                    o
                );
            },
            !0
        ),
        (function () {
            var e = _gsScope._gsDefine.plugin({
                    propName: "roundProps",
                    version: "1.7.0",
                    priority: -1,
                    API: 2,
                    init: function (e, t, i) {
                        return (this._tween = i), !0;
                    },
                }),
                t = function (e) {
                    var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
                    return function (i) {
                        return ((Math.round(i / e) * e * t) | 0) / t;
                    };
                },
                i = function (e, t) {
                    for (; e; ) e.f || e.blob || (e.m = t || Math.round), (e = e._next);
                },
                n = e.prototype;
            (n._onInitAllProps = function () {
                var e,
                    n,
                    r,
                    a,
                    o = this._tween,
                    s = o.vars.roundProps,
                    l = {},
                    p = o._propLookup.roundProps;
                if ("object" != typeof s || s.push) for ("string" == typeof s && (s = s.split(",")), r = s.length; --r > -1; ) l[s[r]] = Math.round;
                else for (a in s) l[a] = t(s[a]);
                for (a in l)
                    for (e = o._firstPT; e; )
                        (n = e._next),
                            e.pg
                                ? e.t._mod(l)
                                : e.n === a &&
                                  (2 === e.f && e.t
                                      ? i(e.t._firstPT, l[a])
                                      : (this._add(e.t, a, e.s, e.c, l[a]), n && (n._prev = e._prev), e._prev ? (e._prev._next = n) : o._firstPT === e && (o._firstPT = n), (e._next = e._prev = null), (o._propLookup[a] = p))),
                            (e = n);
                return !1;
            }),
                (n._add = function (e, t, i, n, r) {
                    this._addTween(e, t, i, i + n, t, r || Math.round), this._overwriteProps.push(t);
                });
        })(),
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function (e, t, i, n) {
                var r, a;
                if ("function" != typeof e.setAttribute) return !1;
                for (r in t) "function" == typeof (a = t[r]) && (a = a(n, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", a + "", r, !1, r), this._overwriteProps.push(r);
                return !0;
            },
        }),
        (_gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (e, t, i, n) {
                "object" != typeof t && (t = { rotation: t }), (this.finals = {});
                var r,
                    a,
                    o,
                    s,
                    l,
                    p,
                    m = !0 === t.useRadians ? 2 * Math.PI : 360;
                for (r in t)
                    "useRadians" !== r &&
                        ("function" == typeof (s = t[r]) && (s = s(n, e)),
                        (a = (p = (s + "").split("_"))[0]),
                        (o = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]())),
                        (l = (s = this.finals[r] = "string" == typeof a && "=" === a.charAt(1) ? o + parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) : Number(a) || 0) - o),
                        p.length &&
                            (-1 !== (a = p.join("_")).indexOf("short") && (l %= m) != l % (m / 2) && (l = l < 0 ? l + m : l - m),
                            -1 !== a.indexOf("_cw") && l < 0 ? (l = ((l + 9999999999 * m) % m) - ((l / m) | 0) * m) : -1 !== a.indexOf("ccw") && l > 0 && (l = ((l - 9999999999 * m) % m) - ((l / m) | 0) * m)),
                        (l > 1e-6 || l < -1e-6) && (this._addTween(e, r, o, o + l, r), this._overwriteProps.push(r)));
                return !0;
            },
            set: function (e) {
                var t;
                if (1 !== e) this._super.setRatio.call(this, e);
                else for (t = this._firstPT; t; ) t.f ? t.t[t.p](this.finals[t.p]) : (t.t[t.p] = this.finals[t.p]), (t = t._next);
            },
        })._autoCSS = !0),
        _gsScope._gsDefine(
            "easing.Back",
            ["easing.Ease"],
            function (e) {
                var t,
                    i,
                    n,
                    r,
                    a = _gsScope.GreenSockGlobals || _gsScope,
                    o = 2 * Math.PI,
                    s = Math.PI / 2,
                    l = a.com.greensock._class,
                    p = function (t, i) {
                        var n = l("easing." + t, function () {}, !0),
                            r = (n.prototype = new e());
                        return (r.constructor = n), (r.getRatio = i), n;
                    },
                    m = e.register || function () {},
                    h = function (e, t, i, n, r) {
                        var a = l("easing." + e, { easeOut: new t(), easeIn: new i(), easeInOut: new n() }, !0);
                        return m(a, e), a;
                    },
                    d = function (e, t, i) {
                        (this.t = e), (this.v = t), i && ((this.next = i), (i.prev = this), (this.c = i.v - t), (this.gap = i.t - e));
                    },
                    c = function (t, i) {
                        var n = l(
                                "easing." + t,
                                function (e) {
                                    (this._p1 = e || 0 === e ? e : 1.70158), (this._p2 = 1.525 * this._p1);
                                },
                                !0
                            ),
                            r = (n.prototype = new e());
                        return (
                            (r.constructor = n),
                            (r.getRatio = i),
                            (r.config = function (e) {
                                return new n(e);
                            }),
                            n
                        );
                    },
                    u = h(
                        "Back",
                        c("BackOut", function (e) {
                            return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1;
                        }),
                        c("BackIn", function (e) {
                            return e * e * ((this._p1 + 1) * e - this._p1);
                        }),
                        c("BackInOut", function (e) {
                            return (e *= 2) < 1 ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2) : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2);
                        })
                    ),
                    f = l(
                        "easing.SlowMo",
                        function (e, t, i) {
                            (t = t || 0 === t ? t : 0.7), null == e ? (e = 0.7) : e > 1 && (e = 1), (this._p = 1 !== e ? t : 0), (this._p1 = (1 - e) / 2), (this._p2 = e), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === i);
                        },
                        !0
                    ),
                    g = (f.prototype = new e());
                return (
                    (g.constructor = f),
                    (g.getRatio = function (e) {
                        var t = e + (0.5 - e) * this._p;
                        return e < this._p1
                            ? this._calcEnd
                                ? 1 - (e = 1 - e / this._p1) * e
                                : t - (e = 1 - e / this._p1) * e * e * e * t
                            : e > this._p3
                            ? this._calcEnd
                                ? 1 === e
                                    ? 0
                                    : 1 - (e = (e - this._p3) / this._p1) * e
                                : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
                            : this._calcEnd
                            ? 1
                            : t;
                    }),
                    (f.ease = new f(0.7, 0.7)),
                    (g.config = f.config = function (e, t, i) {
                        return new f(e, t, i);
                    }),
                    ((g = (t = l(
                        "easing.SteppedEase",
                        function (e, t) {
                            (this._p1 = 1 / (e = e || 1)), (this._p2 = e + (t ? 0 : 1)), (this._p3 = t ? 1 : 0);
                        },
                        !0
                    )).prototype = new e()).constructor = t),
                    (g.getRatio = function (e) {
                        return e < 0 ? (e = 0) : e >= 1 && (e = 0.999999999), (((this._p2 * e) | 0) + this._p3) * this._p1;
                    }),
                    (g.config = t.config = function (e, i) {
                        return new t(e, i);
                    }),
                    ((g = (i = l(
                        "easing.ExpoScaleEase",
                        function (e, t, i) {
                            (this._p1 = Math.log(t / e)), (this._p2 = t - e), (this._p3 = e), (this._ease = i);
                        },
                        !0
                    )).prototype = new e()).constructor = i),
                    (g.getRatio = function (e) {
                        return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2;
                    }),
                    (g.config = i.config = function (e, t, n) {
                        return new i(e, t, n);
                    }),
                    ((g = (n = l(
                        "easing.RoughEase",
                        function (t) {
                            for (
                                var i,
                                    n,
                                    r,
                                    a,
                                    o,
                                    s,
                                    l = (t = t || {}).taper || "none",
                                    p = [],
                                    m = 0,
                                    h = 0 | (t.points || 20),
                                    c = h,
                                    u = !1 !== t.randomize,
                                    f = !0 === t.clamp,
                                    g = t.template instanceof e ? t.template : null,
                                    y = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                                --c > -1;

                            )
                                (i = u ? Math.random() : (1 / h) * c),
                                    (n = g ? g.getRatio(i) : i),
                                    (r = "none" === l ? y : "out" === l ? (a = 1 - i) * a * y : "in" === l ? i * i * y : i < 0.5 ? (a = 2 * i) * a * 0.5 * y : (a = 2 * (1 - i)) * a * 0.5 * y),
                                    u ? (n += Math.random() * r - 0.5 * r) : c % 2 ? (n += 0.5 * r) : (n -= 0.5 * r),
                                    f && (n > 1 ? (n = 1) : n < 0 && (n = 0)),
                                    (p[m++] = { x: i, y: n });
                            for (
                                p.sort(function (e, t) {
                                    return e.x - t.x;
                                }),
                                    s = new d(1, 1, null),
                                    c = h;
                                --c > -1;

                            )
                                s = new d((o = p[c]).x, o.y, s);
                            this._prev = new d(0, 0, 0 !== s.t ? s : s.next);
                        },
                        !0
                    )).prototype = new e()).constructor = n),
                    (g.getRatio = function (e) {
                        var t = this._prev;
                        if (e > t.t) {
                            for (; t.next && e >= t.t; ) t = t.next;
                            t = t.prev;
                        } else for (; t.prev && e <= t.t; ) t = t.prev;
                        return (this._prev = t), t.v + ((e - t.t) / t.gap) * t.c;
                    }),
                    (g.config = function (e) {
                        return new n(e);
                    }),
                    (n.ease = new n()),
                    h(
                        "Bounce",
                        p("BounceOut", function (e) {
                            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                        }),
                        p("BounceIn", function (e) {
                            return (e = 1 - e) < 1 / 2.75
                                ? 1 - 7.5625 * e * e
                                : e < 2 / 2.75
                                ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                                : e < 2.5 / 2.75
                                ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                                : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
                        }),
                        p("BounceInOut", function (e) {
                            var t = e < 0.5;
                            return (
                                (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75
                                    ? (e *= 7.5625 * e)
                                    : (e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375),
                                t ? 0.5 * (1 - e) : 0.5 * e + 0.5
                            );
                        })
                    ),
                    h(
                        "Circ",
                        p("CircOut", function (e) {
                            return Math.sqrt(1 - (e -= 1) * e);
                        }),
                        p("CircIn", function (e) {
                            return -(Math.sqrt(1 - e * e) - 1);
                        }),
                        p("CircInOut", function (e) {
                            return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                        })
                    ),
                    h(
                        "Elastic",
                        (r = function (t, i, n) {
                            var r = l(
                                    "easing." + t,
                                    function (e, t) {
                                        (this._p1 = e >= 1 ? e : 1), (this._p2 = (t || n) / (e < 1 ? e : 1)), (this._p3 = (this._p2 / o) * (Math.asin(1 / this._p1) || 0)), (this._p2 = o / this._p2);
                                    },
                                    !0
                                ),
                                a = (r.prototype = new e());
                            return (
                                (a.constructor = r),
                                (a.getRatio = i),
                                (a.config = function (e, t) {
                                    return new r(e, t);
                                }),
                                r
                            );
                        })(
                            "ElasticOut",
                            function (e) {
                                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1;
                            },
                            0.3
                        ),
                        r(
                            "ElasticIn",
                            function (e) {
                                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2);
                            },
                            0.3
                        ),
                        r(
                            "ElasticInOut",
                            function (e) {
                                return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * 0.5 + 1;
                            },
                            0.45
                        )
                    ),
                    h(
                        "Expo",
                        p("ExpoOut", function (e) {
                            return 1 - Math.pow(2, -10 * e);
                        }),
                        p("ExpoIn", function (e) {
                            return Math.pow(2, 10 * (e - 1)) - 0.001;
                        }),
                        p("ExpoInOut", function (e) {
                            return (e *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
                        })
                    ),
                    h(
                        "Sine",
                        p("SineOut", function (e) {
                            return Math.sin(e * s);
                        }),
                        p("SineIn", function (e) {
                            return 1 - Math.cos(e * s);
                        }),
                        p("SineInOut", function (e) {
                            return -0.5 * (Math.cos(Math.PI * e) - 1);
                        })
                    ),
                    l(
                        "easing.EaseLookup",
                        {
                            find: function (t) {
                                return e.map[t];
                            },
                        },
                        !0
                    ),
                    m(a.SlowMo, "SlowMo", "ease,"),
                    m(n, "RoughEase", "ease,"),
                    m(t, "SteppedEase", "ease,"),
                    u
                );
            },
            !0
        );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (e, t) {
        "use strict";
        var i = {},
            n = e.document,
            r = (e.GreenSockGlobals = e.GreenSockGlobals || e),
            a = r.TweenMax;
        if (a) return "undefined" != typeof module && module.exports && (module.exports = a), a;
        var o,
            s,
            l,
            p,
            m,
            h,
            d,
            c = function (e) {
                var t,
                    i = e.split("."),
                    n = r;
                for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
                return n;
            },
            u = c("com.greensock"),
            f = function (e) {
                var t,
                    i = [],
                    n = e.length;
                for (t = 0; t !== n; i.push(e[t++]));
                return i;
            },
            g = function () {},
            y =
                ((d = (h = Object.prototype.toString).call([])),
                function (e) {
                    return null != e && (e instanceof Array || ("object" == typeof e && !!e.push && h.call(e) === d));
                }),
            _ = {},
            v = function (t, n, a, o) {
                (this.sc = _[t] ? _[t].sc : []), (_[t] = this), (this.gsClass = null), (this.func = a);
                var s = [];
                (this.check = function (l) {
                    for (var p, m, h, d, u = n.length, f = u; --u > -1; ) (p = _[n[u]] || new v(n[u], [])).gsClass ? ((s[u] = p.gsClass), f--) : l && p.sc.push(this);
                    if (0 === f && a) {
                        if (((h = (m = ("com.greensock." + t).split(".")).pop()), (d = c(m.join("."))[h] = this.gsClass = a.apply(a, s)), o))
                            if (((r[h] = i[h] = d), "undefined" != typeof module && module.exports))
                                if ("TweenMax" === t) for (u in ((module.exports = i.TweenMax = d), i)) d[u] = i[u];
                                else i.TweenMax && (i.TweenMax[h] = d);
                            else
                                "function" == typeof define &&
                                    define.amd &&
                                    define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + t.split(".").pop(), [], function () {
                                        return d;
                                    });
                        for (u = 0; u < this.sc.length; u++) this.sc[u].check();
                    }
                }),
                    this.check(!0);
            },
            b = (e._gsDefine = function (e, t, i, n) {
                return new v(e, t, i, n);
            }),
            w = (u._class = function (e, t, i) {
                return (
                    (t = t || function () {}),
                    b(
                        e,
                        [],
                        function () {
                            return t;
                        },
                        i
                    ),
                    t
                );
            });
        b.globals = r;
        var x = [0, 0, 1, 1],
            T = w(
                "easing.Ease",
                function (e, t, i, n) {
                    (this._func = e), (this._type = i || 0), (this._power = n || 0), (this._params = t ? x.concat(t) : x);
                },
                !0
            ),
            k = (T.map = {}),
            S = (T.register = function (e, t, i, n) {
                for (var r, a, o, s, l = t.split(","), p = l.length, m = (i || "easeIn,easeOut,easeInOut").split(","); --p > -1; )
                    for (a = l[p], r = n ? w("easing." + a, null, !0) : u.easing[a] || {}, o = m.length; --o > -1; ) k[a + "." + (s = m[o])] = k[s + a] = r[s] = e.getRatio ? e : e[s] || new e();
            });
        for (
            (l = T.prototype)._calcEnd = !1,
                l.getRatio = function (e) {
                    if (this._func) return (this._params[0] = e), this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : e < 0.5 ? 2 * e : 2 * (1 - e);
                    return 1 === i ? (n *= n) : 2 === i ? (n *= n * n) : 3 === i ? (n *= n * n * n) : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : e < 0.5 ? n / 2 : 1 - n / 2;
                },
                s = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
            --s > -1;

        )
            (l = o[s] + ",Power" + s), S(new T(null, null, 1, s), l, "easeOut", !0), S(new T(null, null, 2, s), l, "easeIn" + (0 === s ? ",easeNone" : "")), S(new T(null, null, 3, s), l, "easeInOut");
        (k.linear = u.easing.Linear.easeIn), (k.swing = u.easing.Quad.easeInOut);
        var j = w("events.EventDispatcher", function (e) {
            (this._listeners = {}), (this._eventTarget = e || this);
        });
        ((l = j.prototype).addEventListener = function (e, t, i, n, r) {
            r = r || 0;
            var a,
                o,
                s = this._listeners[e],
                l = 0;
            for (this !== p || m || p.wake(), null == s && (this._listeners[e] = s = []), o = s.length; --o > -1; ) (a = s[o]).c === t && a.s === i ? s.splice(o, 1) : 0 === l && a.pr < r && (l = o + 1);
            s.splice(l, 0, { c: t, s: i, up: n, pr: r });
        }),
            (l.removeEventListener = function (e, t) {
                var i,
                    n = this._listeners[e];
                if (n) for (i = n.length; --i > -1; ) if (n[i].c === t) return void n.splice(i, 1);
            }),
            (l.dispatchEvent = function (e) {
                var t,
                    i,
                    n,
                    r = this._listeners[e];
                if (r) for ((t = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --t > -1; ) (n = r[t]) && (n.up ? n.c.call(n.s || i, { type: e, target: i }) : n.c.call(n.s || i));
            });
        var C = e.requestAnimationFrame,
            P = e.cancelAnimationFrame,
            D =
                Date.now ||
                function () {
                    return new Date().getTime();
                },
            A = D();
        for (s = (o = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !C; ) (C = e[o[s] + "RequestAnimationFrame"]), (P = e[o[s] + "CancelAnimationFrame"] || e[o[s] + "CancelRequestAnimationFrame"]);
        w("Ticker", function (e, t) {
            var i,
                r,
                a,
                o,
                s,
                l = this,
                h = D(),
                d = !(!1 === t || !C) && "auto",
                c = 500,
                u = 33,
                f = function (e) {
                    var t,
                        n,
                        p = D() - A;
                    p > c && (h += p - u), (l.time = ((A += p) - h) / 1e3), (t = l.time - s), (!i || t > 0 || !0 === e) && (l.frame++, (s += t + (t >= o ? 0.004 : o - t)), (n = !0)), !0 !== e && (a = r(f)), n && l.dispatchEvent("tick");
                };
            j.call(l),
                (l.time = l.frame = 0),
                (l.tick = function () {
                    f(!0);
                }),
                (l.lagSmoothing = function (e, t) {
                    if (!arguments.length) return c < 1 / 1e-8;
                    (c = e || 1 / 1e-8), (u = Math.min(t, c, 0));
                }),
                (l.sleep = function () {
                    null != a && (d && P ? P(a) : clearTimeout(a), (r = g), (a = null), l === p && (m = !1));
                }),
                (l.wake = function (e) {
                    null !== a ? l.sleep() : e ? (h += -A + (A = D())) : l.frame > 10 && (A = D() - c + 5),
                        (r =
                            0 === i
                                ? g
                                : d && C
                                ? C
                                : function (e) {
                                      return setTimeout(e, (1e3 * (s - l.time) + 1) | 0);
                                  }),
                        l === p && (m = !0),
                        f(2);
                }),
                (l.fps = function (e) {
                    if (!arguments.length) return i;
                    (s = this.time + (o = 1 / ((i = e) || 60))), l.wake();
                }),
                (l.useRAF = function (e) {
                    if (!arguments.length) return d;
                    l.sleep(), (d = e), l.fps(i);
                }),
                l.fps(e),
                setTimeout(function () {
                    "auto" === d && l.frame < 5 && "hidden" !== (n || {}).visibilityState && l.useRAF(!1);
                }, 1500);
        }),
            ((l = u.Ticker.prototype = new u.events.EventDispatcher()).constructor = u.Ticker);
        var E = w("core.Animation", function (e, t) {
            if (
                ((this.vars = t = t || {}),
                (this._duration = this._totalDuration = e || 0),
                (this._delay = Number(t.delay) || 0),
                (this._timeScale = 1),
                (this._active = !!t.immediateRender),
                (this.data = t.data),
                (this._reversed = !!t.reversed),
                J)
            ) {
                m || p.wake();
                var i = this.vars.useFrames ? K : J;
                i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
        });
        (p = E.ticker = new u.Ticker()),
            ((l = E.prototype)._dirty = l._gc = l._initted = l._paused = !1),
            (l._totalTime = l._time = 0),
            (l._rawPrevTime = -1),
            (l._next = l._last = l._onUpdate = l._timeline = l.timeline = null),
            (l._paused = !1);
        var O = function () {
            m && D() - A > 2e3 && ("hidden" !== (n || {}).visibilityState || !p.lagSmoothing()) && p.wake();
            var e = setTimeout(O, 2e3);
            e.unref && e.unref();
        };
        O(),
            (l.play = function (e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
            }),
            (l.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0);
            }),
            (l.resume = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!1);
            }),
            (l.seek = function (e, t) {
                return this.totalTime(Number(e), !1 !== t);
            }),
            (l.restart = function (e, t) {
                return this.reversed(!1)
                    .paused(!1)
                    .totalTime(e ? -this._delay : 0, !1 !== t, !0);
            }),
            (l.reverse = function (e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
            }),
            (l.render = function (e, t, i) {}),
            (l.invalidate = function () {
                return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this;
            }),
            (l.isActive = function () {
                var e,
                    t = this._timeline,
                    i = this._startTime;
                return !t || (!this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - 1e-8);
            }),
            (l._enabled = function (e, t) {
                return (
                    m || p.wake(), (this._gc = !e), (this._active = this.isActive()), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                );
            }),
            (l._kill = function (e, t) {
                return this._enabled(!1, !1);
            }),
            (l.kill = function (e, t) {
                return this._kill(e, t), this;
            }),
            (l._uncache = function (e) {
                for (var t = e ? this : this.timeline; t; ) (t._dirty = !0), (t = t.timeline);
                return this;
            }),
            (l._swapSelfInParams = function (e) {
                for (var t = e.length, i = e.concat(); --t > -1; ) "{self}" === e[t] && (i[t] = this);
                return i;
            }),
            (l._callback = function (e) {
                var t = this.vars,
                    i = t[e],
                    n = t[e + "Params"],
                    r = t[e + "Scope"] || t.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, n[0]);
                        break;
                    case 2:
                        i.call(r, n[0], n[1]);
                        break;
                    default:
                        i.apply(r, n);
                }
            }),
            (l.eventCallback = function (e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[e];
                    null == t ? delete r[e] : ((r[e] = t), (r[e + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (r[e + "Scope"] = n)), "onUpdate" === e && (this._onUpdate = t);
                }
                return this;
            }),
            (l.delay = function (e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), (this._delay = e), this) : this._delay;
            }),
            (l.duration = function (e) {
                return arguments.length
                    ? ((this._duration = this._totalDuration = e),
                      this._uncache(!0),
                      this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
                      this)
                    : ((this._dirty = !1), this._duration);
            }),
            (l.totalDuration = function (e) {
                return (this._dirty = !1), arguments.length ? this.duration(e) : this._totalDuration;
            }),
            (l.time = function (e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time;
            }),
            (l.totalTime = function (e, t, i) {
                if ((m || p.wake(), !arguments.length)) return this._totalTime;
                if (this._timeline) {
                    if ((e < 0 && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming)) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if ((e > n && !i && (e = n), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                            for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime === e && 0 !== this._duration) || (N.length && Z(), this.render(e, t, !1), N.length && Z());
                }
                return this;
            }),
            (l.progress = l.totalProgress = function (e, t) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio;
            }),
            (l.startTime = function (e) {
                return arguments.length ? (e !== this._startTime && ((this._startTime = e), this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime;
            }),
            (l.endTime = function (e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale;
            }),
            (l.timeScale = function (e) {
                if (!arguments.length) return this._timeScale;
                var t, i;
                for (
                    e = e || 1e-8,
                        this._timeline && this._timeline.smoothChildTiming && ((i = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime()), (this._startTime = i - ((i - this._startTime) * this._timeScale) / e)),
                        this._timeScale = e,
                        i = this.timeline;
                    i && i.timeline;

                )
                    (i._dirty = !0), i.totalDuration(), (i = i.timeline);
                return this;
            }),
            (l.reversed = function (e) {
                return arguments.length
                    ? (e != this._reversed && ((this._reversed = e), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                    : this._reversed;
            }),
            (l.paused = function (e) {
                if (!arguments.length) return this._paused;
                var t,
                    i,
                    n = this._timeline;
                return (
                    e != this._paused &&
                        n &&
                        (m || e || p.wake(),
                        (i = (t = n.rawTime()) - this._pauseTime),
                        !e && n.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
                        (this._pauseTime = e ? t : null),
                        (this._paused = e),
                        (this._active = this.isActive()),
                        !e && 0 !== i && this._initted && this.duration() && this.render((t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale), t === this._totalTime, !0)),
                    this._gc && !e && this._enabled(!0, !1),
                    this
                );
            });
        var R = w("core.SimpleTimeline", function (e) {
            E.call(this, 0, e), (this.autoRemoveChildren = this.smoothChildTiming = !0);
        });
        ((l = R.prototype = new E()).constructor = R),
            (l.kill()._gc = !1),
            (l._first = l._last = l._recent = null),
            (l._sortChildren = !1),
            (l.add = l.insert = function (e, t, i, n) {
                var r, a;
                if (
                    ((e._startTime = Number(t || 0) + e._delay),
                    e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)),
                    e.timeline && e.timeline._remove(e, !0),
                    (e.timeline = e._timeline = this),
                    e._gc && e._enabled(!0, !0),
                    (r = this._last),
                    this._sortChildren)
                )
                    for (a = e._startTime; r && r._startTime > a; ) r = r._prev;
                return r ? ((e._next = r._next), (r._next = e)) : ((e._next = this._first), (this._first = e)), e._next ? (e._next._prev = e) : (this._last = e), (e._prev = r), (this._recent = e), this._timeline && this._uncache(!0), this;
            }),
            (l._remove = function (e, t) {
                return (
                    e.timeline === this &&
                        (t || e._enabled(!1, !0),
                        e._prev ? (e._prev._next = e._next) : this._first === e && (this._first = e._next),
                        e._next ? (e._next._prev = e._prev) : this._last === e && (this._last = e._prev),
                        (e._next = e._prev = e.timeline = null),
                        e === this._recent && (this._recent = this._last),
                        this._timeline && this._uncache(!0)),
                    this
                );
            }),
            (l.render = function (e, t, i) {
                var n,
                    r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; r; )
                    (n = r._next),
                        (r._active || (e >= r._startTime && !r._paused && !r._gc)) && r.render(r._reversed ? (r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale : (e - r._startTime) * r._timeScale, t, i),
                        (r = n);
            }),
            (l.rawTime = function () {
                return m || p.wake(), this._totalTime;
            });
        var M = w(
                "TweenLite",
                function (t, i, n) {
                    if ((E.call(this, i, n), (this.render = M.prototype.render), null == t)) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : M.selector(t) || t;
                    var r,
                        a,
                        o,
                        s = t.jquery || (t.length && t !== e && t[0] && (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType))),
                        l = this.vars.overwrite;
                    if (((this._overwrite = l = null == l ? Y[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l]), (s || t instanceof Array || (t.push && y(t))) && "number" != typeof t[0]))
                        for (this._targets = o = f(t), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)
                            (a = o[r])
                                ? "string" != typeof a
                                    ? a.length && a !== e && a[0] && (a[0] === e || (a[0].nodeType && a[0].style && !a.nodeType))
                                        ? (o.splice(r--, 1), (this._targets = o = o.concat(f(a))))
                                        : ((this._siblings[r] = ee(a, this, !1)), 1 === l && this._siblings[r].length > 1 && ie(a, this, null, 1, this._siblings[r]))
                                    : "string" == typeof (a = o[r--] = M.selector(a)) && o.splice(r + 1, 1)
                                : o.splice(r--, 1);
                    else (this._propLookup = {}), (this._siblings = ee(t, this, !1)), 1 === l && this._siblings.length > 1 && ie(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || (0 === i && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -1e-8), this.render(Math.min(0, -this._delay)));
                },
                !0
            ),
            $ = function (t) {
                return t && t.length && t !== e && t[0] && (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType));
            };
        ((l = M.prototype = new E()).constructor = M),
            (l.kill()._gc = !1),
            (l.ratio = 0),
            (l._firstPT = l._targets = l._overwrittenProps = l._startAt = null),
            (l._notifyPluginsOfEnabled = l._lazy = !1),
            (M.version = "2.1.3"),
            (M.defaultEase = l._ease = new T(null, null, 1, 1)),
            (M.defaultOverwrite = "auto"),
            (M.ticker = p),
            (M.autoSleep = 120),
            (M.lagSmoothing = function (e, t) {
                p.lagSmoothing(e, t);
            }),
            (M.selector =
                e.$ ||
                e.jQuery ||
                function (t) {
                    var i = e.$ || e.jQuery;
                    return i ? ((M.selector = i), i(t)) : (n || (n = e.document), n ? (n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t)) : t);
                });
        var N = [],
            L = {},
            I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            z = /[\+-]=-?[\.\d]/,
            F = function (e) {
                for (var t, i = this._firstPT; i; )
                    (t = i.blob ? (1 === e && null != this.end ? this.end : e ? this.join("") : this.start) : i.c * e + i.s),
                        i.m ? (t = i.m.call(this._tween, t, this._target || i.t, this._tween)) : t < 1e-6 && t > -1e-6 && !i.blob && (t = 0),
                        i.f ? (i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t)) : (i.t[i.p] = t),
                        (i = i._next);
            },
            B = function (e) {
                return ((1e3 * e) | 0) / 1e3 + "";
            },
            H = function (e, t, i, n) {
                var r,
                    a,
                    o,
                    s,
                    l,
                    p,
                    m,
                    h = [],
                    d = 0,
                    c = "",
                    u = 0;
                for (
                    h.start = e,
                        h.end = t,
                        e = h[0] = e + "",
                        t = h[1] = t + "",
                        i && (i(h), (e = h[0]), (t = h[1])),
                        h.length = 0,
                        r = e.match(I) || [],
                        a = t.match(I) || [],
                        n && ((n._next = null), (n.blob = 1), (h._firstPT = h._applyPT = n)),
                        l = a.length,
                        s = 0;
                    s < l;
                    s++
                )
                    (c += (p = t.substr(d, t.indexOf((m = a[s]), d) - d)) || !s ? p : ","),
                        (d += p.length),
                        u ? (u = (u + 1) % 5) : "rgba(" === p.substr(-5) && (u = 1),
                        m === r[s] || r.length <= s
                            ? (c += m)
                            : (c && (h.push(c), (c = "")),
                              (o = parseFloat(r[s])),
                              h.push(o),
                              (h._firstPT = {
                                  _next: h._firstPT,
                                  t: h,
                                  p: h.length - 1,
                                  s: o,
                                  c: ("=" === m.charAt(1) ? parseInt(m.charAt(0) + "1", 10) * parseFloat(m.substr(2)) : parseFloat(m) - o) || 0,
                                  f: 0,
                                  m: u && u < 4 ? Math.round : B,
                              })),
                        (d += m.length);
                return (c += t.substr(d)) && h.push(c), (h.setRatio = F), z.test(t) && (h.end = null), h;
            },
            q = function (e, t, i, n, r, a, o, s, l) {
                "function" == typeof n && (n = n(l || 0, e));
                var p = typeof e[t],
                    m = "function" !== p ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                    h = "get" !== i ? i : m ? (o ? e[m](o) : e[m]()) : e[t],
                    d = "string" == typeof n && "=" === n.charAt(1),
                    c = { t: e, p: t, s: h, f: "function" === p, pg: 0, n: r || t, m: a ? ("function" == typeof a ? a : Math.round) : 0, pr: 0, c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0 };
                if (
                    (("number" != typeof h || ("number" != typeof n && !d)) &&
                        (o || isNaN(h) || (!d && isNaN(n)) || "boolean" == typeof h || "boolean" == typeof n
                            ? ((c.fp = o), (c = { t: H(h, d ? parseFloat(c.s) + c.c + (c.s + "").replace(/[0-9\-\.]/g, "") : n, s || M.defaultStringFilter, c), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || t, pr: 0, m: 0 }))
                            : ((c.s = parseFloat(h)), d || (c.c = parseFloat(n) - c.s || 0))),
                    c.c)
                )
                    return (c._next = this._firstPT) && (c._next._prev = c), (this._firstPT = c), c;
            },
            U = (M._internals = { isArray: y, isSelector: $, lazyTweens: N, blobDif: H }),
            W = (M._plugins = {}),
            X = (U.tweenLookup = {}),
            V = 0,
            G = (U.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1,
            }),
            Y = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
            K = (E._rootFramesTimeline = new R()),
            J = (E._rootTimeline = new R()),
            Q = 30,
            Z = (U.lazyRender = function () {
                var e,
                    t,
                    i = N.length;
                for (L = {}, e = 0; e < i; e++) (t = N[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                N.length = 0;
            });
        (J._startTime = p.time),
            (K._startTime = p.frame),
            (J._active = K._active = !0),
            setTimeout(Z, 1),
            (E._updateRoot = M.render = function () {
                var e, t, i;
                if ((N.length && Z(), J.render((p.time - J._startTime) * J._timeScale, !1, !1), K.render((p.frame - K._startTime) * K._timeScale, !1, !1), N.length && Z(), p.frame >= Q)) {
                    for (i in ((Q = p.frame + (parseInt(M.autoSleep, 10) || 120)), X)) {
                        for (e = (t = X[i].tweens).length; --e > -1; ) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete X[i];
                    }
                    if ((!(i = J._first) || i._paused) && M.autoSleep && !K._first && 1 === p._listeners.tick.length) {
                        for (; i && i._paused; ) i = i._next;
                        i || p.sleep();
                    }
                }
            }),
            p.addEventListener("tick", E._updateRoot);
        var ee = function (e, t, i) {
                var n,
                    r,
                    a = e._gsTweenID;
                if ((X[a || (e._gsTweenID = a = "t" + V++)] || (X[a] = { target: e, tweens: [] }), t && (((n = X[a].tweens)[(r = n.length)] = t), i))) for (; --r > -1; ) n[r] === t && n.splice(r, 1);
                return X[a].tweens;
            },
            te = function (e, t, i, n) {
                var r,
                    a,
                    o = e.vars.onOverwrite;
                return o && (r = o(e, t, i, n)), (o = M.onOverwrite) && (a = o(e, t, i, n)), !1 !== r && !1 !== a;
            },
            ie = function (e, t, i, n, r) {
                var a, o, s, l;
                if (1 === n || n >= 4) {
                    for (l = r.length, a = 0; a < l; a++)
                        if ((s = r[a]) !== t) s._gc || (s._kill(null, e, t) && (o = !0));
                        else if (5 === n) break;
                    return o;
                }
                var p,
                    m = t._startTime + 1e-8,
                    h = [],
                    d = 0,
                    c = 0 === t._duration;
                for (a = r.length; --a > -1; )
                    (s = r[a]) === t ||
                        s._gc ||
                        s._paused ||
                        (s._timeline !== t._timeline
                            ? ((p = p || ne(t, 0, c)), 0 === ne(s, p, c) && (h[d++] = s))
                            : s._startTime <= m && s._startTime + s.totalDuration() / s._timeScale > m && (((c || !s._initted) && m - s._startTime <= 2e-8) || (h[d++] = s)));
                for (a = d; --a > -1; )
                    if (((l = (s = h[a])._firstPT), 2 === n && s._kill(i, e, t) && (o = !0), 2 !== n || (!s._firstPT && s._initted && l))) {
                        if (2 !== n && !te(s, t)) continue;
                        s._enabled(!1, !1) && (o = !0);
                    }
                return o;
            },
            ne = function (e, t, i) {
                for (var n = e._timeline, r = n._timeScale, a = e._startTime; n._timeline; ) {
                    if (((a += n._startTime), (r *= n._timeScale), n._paused)) return -100;
                    n = n._timeline;
                }
                return (a /= r) > t ? a - t : (i && a === t) || (!e._initted && a - t < 2e-8) ? 1e-8 : (a += e.totalDuration() / e._timeScale / r) > t + 1e-8 ? 0 : a - t - 1e-8;
            };
        (l._init = function () {
            var e,
                t,
                i,
                n,
                r,
                a,
                o = this.vars,
                s = this._overwrittenProps,
                l = this._duration,
                p = !!o.immediateRender,
                m = o.ease,
                h = this._startAt;
            if (o.startAt) {
                for (n in (h && (h.render(-1, !0), h.kill()), (r = {}), o.startAt)) r[n] = o.startAt[n];
                if (
                    ((r.data = "isStart"),
                    (r.overwrite = !1),
                    (r.immediateRender = !0),
                    (r.lazy = p && !1 !== o.lazy),
                    (r.startAt = r.delay = null),
                    (r.onUpdate = o.onUpdate),
                    (r.onUpdateParams = o.onUpdateParams),
                    (r.onUpdateScope = o.onUpdateScope || o.callbackScope || this),
                    (this._startAt = M.to(this.target || {}, 0, r)),
                    p)
                )
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return;
            } else if (o.runBackwards && 0 !== l)
                if (h) h.render(-1, !0), h.kill(), (this._startAt = null);
                else {
                    for (n in (0 !== this._time && (p = !1), (i = {}), o)) (G[n] && "autoCSS" !== n) || (i[n] = o[n]);
                    if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = p && !1 !== o.lazy), (i.immediateRender = p), (this._startAt = M.to(this.target, 0, i)), p)) {
                        if (0 === this._time) return;
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                }
            if (
                ((this._ease = m = m ? (m instanceof T ? m : "function" == typeof m ? new T(m, o.easeParams) : k[m] || M.defaultEase) : M.defaultEase),
                o.easeParams instanceof Array && m.config && (this._ease = m.config.apply(m, o.easeParams)),
                (this._easeType = this._ease._type),
                (this._easePower = this._ease._power),
                (this._firstPT = null),
                this._targets)
            )
                for (a = this._targets.length, e = 0; e < a; e++) this._initProps(this._targets[e], (this._propLookup[e] = {}), this._siblings[e], s ? s[e] : null, e) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
            if ((t && M._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), o.runBackwards)) for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = o.onUpdate), (this._initted = !0);
        }),
            (l._initProps = function (t, i, n, r, a) {
                var o, s, l, p, m, h;
                if (null == t) return !1;
                for (o in (L[t._gsTweenID] && Z(),
                this.vars.css ||
                    (t.style &&
                        t !== e &&
                        t.nodeType &&
                        W.css &&
                        !1 !== this.vars.autoCSS &&
                        (function (e, t) {
                            var i,
                                n = {};
                            for (i in e)
                                G[i] ||
                                    (i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) ||
                                    !(!W[i] || (W[i] && W[i]._autoCSS)) ||
                                    ((n[i] = e[i]), delete e[i]);
                            e.css = n;
                        })(this.vars, t)),
                this.vars))
                    if (((h = this.vars[o]), G[o])) h && (h instanceof Array || (h.push && y(h))) && -1 !== h.join("").indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
                    else if (W[o] && (p = new W[o]())._onInitTween(t, this.vars[o], this, a)) {
                        for (this._firstPT = m = { _next: this._firstPT, t: p, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: p._priority, m: 0 }, s = p._overwriteProps.length; --s > -1; ) i[p._overwriteProps[s]] = this._firstPT;
                        (p._priority || p._onInitAllProps) && (l = !0), (p._onDisable || p._onEnable) && (this._notifyPluginsOfEnabled = !0), m._next && (m._next._prev = m);
                    } else i[o] = q.call(this, t, o, "get", h, o, 0, null, this.vars.stringFilter, a);
                return r && this._kill(r, t)
                    ? this._initProps(t, i, n, r, a)
                    : this._overwrite > 1 && this._firstPT && n.length > 1 && ie(t, this, i, this._overwrite, n)
                    ? (this._kill(i, t), this._initProps(t, i, n, r, a))
                    : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (L[t._gsTweenID] = !0), l);
            }),
            (l.render = function (e, t, i) {
                var n,
                    r,
                    a,
                    o,
                    s = this._time,
                    l = this._duration,
                    p = this._rawPrevTime;
                if (e >= l - 1e-8 && e >= 0)
                    (this._totalTime = this._time = l),
                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                        this._reversed || ((n = !0), (r = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                        0 === l &&
                            (this._initted || !this.vars.lazy || i) &&
                            (this._startTime === this._timeline._duration && (e = 0),
                            (p < 0 || (e <= 0 && e >= -1e-8) || (1e-8 === p && "isPause" !== this.data)) && p !== e && ((i = !0), p > 1e-8 && (r = "onReverseComplete")),
                            (this._rawPrevTime = o = !t || e || p === e ? e : 1e-8));
                else if (e < 1e-8)
                    (this._totalTime = this._time = 0),
                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                        (0 !== s || (0 === l && p > 0)) && ((r = "onReverseComplete"), (n = this._reversed)),
                        e > -1e-8
                            ? (e = 0)
                            : e < 0 && ((this._active = !1), 0 === l && (this._initted || !this.vars.lazy || i) && (p >= 0 && (1e-8 !== p || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = o = !t || e || p === e ? e : 1e-8))),
                        (!this._initted || (this._startAt && this._startAt.progress())) && (i = !0);
                else if (((this._totalTime = this._time = e), this._easeType)) {
                    var m = e / l,
                        h = this._easeType,
                        d = this._easePower;
                    (1 === h || (3 === h && m >= 0.5)) && (m = 1 - m),
                        3 === h && (m *= 2),
                        1 === d ? (m *= m) : 2 === d ? (m *= m * m) : 3 === d ? (m *= m * m * m) : 4 === d && (m *= m * m * m * m),
                        (this.ratio = 1 === h ? 1 - m : 2 === h ? m : e / l < 0.5 ? m / 2 : 1 - m / 2);
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== s || i) {
                    if (!this._initted) {
                        if ((this._init(), !this._initted || this._gc)) return;
                        if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                            return (this._time = this._totalTime = s), (this._rawPrevTime = p), N.push(this), void (this._lazy = [e, t]);
                        this._time && !n ? (this.ratio = this._ease.getRatio(this._time / l)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (
                        !1 !== this._lazy && (this._lazy = !1),
                            this._active || (!this._paused && this._time !== s && e >= 0 && (this._active = !0)),
                            0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== l) || t || this._callback("onStart"))),
                            a = this._firstPT;
                        a;

                    )
                        a.f ? a.t[a.p](a.c * this.ratio + a.s) : (a.t[a.p] = a.c * this.ratio + a.s), (a = a._next);
                    this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, !0, i), t || ((this._time !== s || n || i) && this._callback("onUpdate"))),
                        r &&
                            ((this._gc && !i) ||
                                (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, !0, i),
                                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                !t && this.vars[r] && this._callback(r),
                                0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== o && (this._rawPrevTime = 0)));
                }
            }),
            (l._kill = function (e, t, i) {
                if (("all" === e && (e = null), null == e && (null == t || t === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : M.selector(t) || t;
                var n,
                    r,
                    a,
                    o,
                    s,
                    l,
                    p,
                    m,
                    h,
                    d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                    c = this._firstPT;
                if ((y(t) || $(t)) && "number" != typeof t[0]) for (n = t.length; --n > -1; ) this._kill(e, t[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1; )
                            if (t === this._targets[n]) {
                                (s = this._propLookup[n] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all");
                                break;
                            }
                    } else {
                        if (t !== this.target) return !1;
                        (s = this._propLookup), (r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all");
                    }
                    if (s) {
                        if (((p = e || s), (m = e !== r && "all" !== r && e !== s && ("object" != typeof e || !e._tempKill)), i && (M.onOverwrite || this.vars.onOverwrite))) {
                            for (a in p) s[a] && (h || (h = []), h.push(a));
                            if ((h || !e) && !te(this, i, t, h)) return !1;
                        }
                        for (a in p)
                            (o = s[a]) &&
                                (d && (o.f ? o.t[o.p](o.s) : (o.t[o.p] = o.s), (l = !0)),
                                o.pg && o.t._kill(p) && (l = !0),
                                (o.pg && 0 !== o.t._overwriteProps.length) || (o._prev ? (o._prev._next = o._next) : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), (o._next = o._prev = null)),
                                delete s[a]),
                                m && (r[a] = 1);
                        !this._firstPT && this._initted && c && this._enabled(!1, !1);
                    }
                }
                return l;
            }),
            (l.invalidate = function () {
                this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this);
                var e = this._time;
                return (
                    (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                    (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                    (this._propLookup = this._targets ? {} : []),
                    E.prototype.invalidate.call(this),
                    this.vars.immediateRender && ((this._time = -1e-8), this.render(e, !1, !1 !== this.vars.lazy)),
                    this
                );
            }),
            (l._enabled = function (e, t) {
                if ((m || p.wake(), e && this._gc)) {
                    var i,
                        n = this._targets;
                    if (n) for (i = n.length; --i > -1; ) this._siblings[i] = ee(n[i], this, !0);
                    else this._siblings = ee(this.target, this, !0);
                }
                return E.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(e ? "_onEnable" : "_onDisable", this);
            }),
            (M.to = function (e, t, i) {
                return new M(e, t, i);
            }),
            (M.from = function (e, t, i) {
                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new M(e, t, i);
            }),
            (M.fromTo = function (e, t, i, n) {
                return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new M(e, t, n);
            }),
            (M.delayedCall = function (e, t, i, n, r) {
                return new M(t, 0, { delay: e, onComplete: t, onCompleteParams: i, callbackScope: n, onReverseComplete: t, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 });
            }),
            (M.set = function (e, t) {
                return new M(e, 0, t);
            }),
            (M.getTweensOf = function (e, t) {
                if (null == e) return [];
                var i, n, r, a;
                if (((e = "string" != typeof e ? e : M.selector(e) || e), (y(e) || $(e)) && "number" != typeof e[0])) {
                    for (i = e.length, n = []; --i > -1; ) n = n.concat(M.getTweensOf(e[i], t));
                    for (i = n.length; --i > -1; ) for (a = n[i], r = i; --r > -1; ) a === n[r] && n.splice(i, 1);
                } else if (e._gsTweenID) for (i = (n = ee(e).concat()).length; --i > -1; ) (n[i]._gc || (t && !n[i].isActive())) && n.splice(i, 1);
                return n || [];
            }),
            (M.killTweensOf = M.killDelayedCallsTo = function (e, t, i) {
                "object" == typeof t && ((i = t), (t = !1));
                for (var n = M.getTweensOf(e, t), r = n.length; --r > -1; ) n[r]._kill(i, e);
            });
        var re = w(
            "plugins.TweenPlugin",
            function (e, t) {
                (this._overwriteProps = (e || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = t || 0), (this._super = re.prototype);
            },
            !0
        );
        if (
            ((l = re.prototype),
            (re.version = "1.19.0"),
            (re.API = 2),
            (l._firstPT = null),
            (l._addTween = q),
            (l.setRatio = F),
            (l._kill = function (e) {
                var t,
                    i = this._overwriteProps,
                    n = this._firstPT;
                if (null != e[this._propName]) this._overwriteProps = [];
                else for (t = i.length; --t > -1; ) null != e[i[t]] && i.splice(t, 1);
                for (; n; ) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)), (n = n._next);
                return !1;
            }),
            (l._mod = l._roundProps = function (e) {
                for (var t, i = this._firstPT; i; ) (t = e[this._propName] || (null != i.n && e[i.n.split(this._propName + "_").join("")])) && "function" == typeof t && (2 === i.f ? (i.t._applyPT.m = t) : (i.m = t)), (i = i._next);
            }),
            (M._onPluginEvent = function (e, t) {
                var i,
                    n,
                    r,
                    a,
                    o,
                    s = t._firstPT;
                if ("_onInitAllProps" === e) {
                    for (; s; ) {
                        for (o = s._next, n = r; n && n.pr > s.pr; ) n = n._next;
                        (s._prev = n ? n._prev : a) ? (s._prev._next = s) : (r = s), (s._next = n) ? (n._prev = s) : (a = s), (s = o);
                    }
                    s = t._firstPT = r;
                }
                for (; s; ) s.pg && "function" == typeof s.t[e] && s.t[e]() && (i = !0), (s = s._next);
                return i;
            }),
            (re.activate = function (e) {
                for (var t = e.length; --t > -1; ) e[t].API === re.API && (W[new e[t]()._propName] = e[t]);
                return !0;
            }),
            (b.plugin = function (e) {
                if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                var t,
                    i = e.propName,
                    n = e.priority || 0,
                    r = e.overwriteProps,
                    a = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    o = w(
                        "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                        function () {
                            re.call(this, i, n), (this._overwriteProps = r || []);
                        },
                        !0 === e.global
                    ),
                    s = (o.prototype = new re(i));
                for (t in ((s.constructor = o), (o.API = e.API), a)) "function" == typeof e[t] && (s[a[t]] = e[t]);
                return (o.version = e.version), re.activate([o]), o;
            }),
            (o = e._gsQueue))
        ) {
            for (s = 0; s < o.length; s++) o[s]();
            for (l in _) _[l].func || e.console.log("GSAP encountered missing dependency: " + l);
        }
        m = !1;
    })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
if (
    ((_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        var e = (_gsScope.document || {}).documentElement,
            t = _gsScope,
            i = function (i, n) {
                var r = "x" === n ? "Width" : "Height",
                    a = "scroll" + r,
                    o = "client" + r,
                    s = document.body;
                return i === t || i === e || i === s ? Math.max(e[a], s[a]) - (t["inner" + r] || e[o] || s[o]) : i[a] - i["offset" + r];
            },
            n = function (i, n) {
                var r = "scroll" + ("x" === n ? "Left" : "Top");
                return (
                    i === t && (null != i.pageXOffset ? (r = "page" + n.toUpperCase() + "Offset") : (i = null != e[r] ? e : document.body)),
                    function () {
                        return i[r];
                    }
                );
            },
            r = function (i, r) {
                var a,
                    o = ((a = i), "string" == typeof a && (a = TweenLite.selector(a)), a.length && a !== t && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === t || (a.nodeType && a.style) ? a : null).getBoundingClientRect(),
                    s = document.body,
                    l = !r || r === t || r === s,
                    p = l ? { top: e.clientTop - (window.pageYOffset || e.scrollTop || s.scrollTop || 0), left: e.clientLeft - (window.pageXOffset || e.scrollLeft || s.scrollLeft || 0) } : r.getBoundingClientRect(),
                    m = { x: o.left - p.left, y: o.top - p.top };
                return !l && r && ((m.x += n(r, "x")()), (m.y += n(r, "y")())), m;
            },
            a = function (e, t, n, a) {
                var o = typeof e;
                return isNaN(e) ? ("string" === o && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + a : "max" === e ? i(t, n) : Math.min(i(t, n), r(e, t)[n])) : parseFloat(e);
            },
            o = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                global: !0,
                version: "1.9.2",
                init: function (e, i, r) {
                    return (
                        (this._wdw = e === t),
                        (this._target = e),
                        (this._tween = r),
                        "object" != typeof i ? "string" == typeof (i = { y: i }).y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y) : i.nodeType && (i = { y: i, x: i }),
                        (this.vars = i),
                        (this._autoKill = !1 !== i.autoKill),
                        (this.getX = n(e, "x")),
                        (this.getY = n(e, "y")),
                        (this.x = this.xPrev = this.getX()),
                        (this.y = this.yPrev = this.getY()),
                        null != i.x ? (this._addTween(this, "x", this.x, a(i.x, e, "x", this.x) - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : (this.skipX = !0),
                        null != i.y ? (this._addTween(this, "y", this.y, a(i.y, e, "y", this.y) - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : (this.skipY = !0),
                        !0
                    );
                },
                set: function (e) {
                    this._super.setRatio.call(this, e);
                    var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        a = r - this.yPrev,
                        s = n - this.xPrev,
                        l = o.autoKillThreshold;
                    this.x < 0 && (this.x = 0),
                        this.y < 0 && (this.y = 0),
                        this._autoKill &&
                            (!this.skipX && (s > l || s < -l) && n < i(this._target, "x") && (this.skipX = !0),
                            !this.skipY && (a > l || a < -l) && r < i(this._target, "y") && (this.skipY = !0),
                            this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
                        this._wdw ? t.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
                        (this.xPrev = this.x),
                        (this.yPrev = this.y);
                },
            }),
            s = o.prototype;
        (o.max = i),
            (o.getOffset = r),
            (o.buildGetter = n),
            (o.autoKillThreshold = 7),
            (s._kill = function (e) {
                return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e);
            });
    }),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (e) {
        "use strict";
        var t = function () {
            return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin;
        };
        "undefined" != typeof module && module.exports ? (require("gsap/umd/TweenLite"), (module.exports = t())) : "function" == typeof define && define.amd && define(["gsap/umd/TweenLite"], t);
    })(),
    (function (e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = e.document
                  ? t(e, !0)
                  : function (e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return t(e);
                    })
            : t(e);
    })("undefined" != typeof window ? window : this, function (e, t) {
        "use strict";
        var i = [],
            n = e.document,
            r = Object.getPrototypeOf,
            a = i.slice,
            o = i.concat,
            s = i.push,
            l = i.indexOf,
            p = {},
            m = p.toString,
            h = p.hasOwnProperty,
            d = h.toString,
            c = d.call(Object),
            u = {},
            f = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType;
            },
            g = function (e) {
                return null != e && e === e.window;
            },
            y = { type: !0, src: !0, noModule: !0 };
        function _(e, t, i) {
            var r,
                a = (t = t || n).createElement("script");
            if (((a.text = e), i)) for (r in y) i[r] && (a[r] = i[r]);
            t.head.appendChild(a).parentNode.removeChild(a);
        }
        function v(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[m.call(e)] || "object" : typeof e;
        }
        var b = function (e, t) {
                return new b.fn.init(e, t);
            },
            w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function x(e) {
            var t = !!e && "length" in e && e.length,
                i = v(e);
            return !f(e) && !g(e) && ("array" === i || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
        }
        (b.fn = b.prototype = {
            jquery: "3.3.1",
            constructor: b,
            length: 0,
            toArray: function () {
                return a.call(this);
            },
            get: function (e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function (e) {
                var t = b.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return b.each(this, e);
            },
            map: function (e) {
                return this.pushStack(
                    b.map(this, function (t, i) {
                        return e.call(t, i, t);
                    })
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
            eq: function (e) {
                var t = this.length,
                    i = +e + (e < 0 ? t : 0);
                return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: s,
            sort: i.sort,
            splice: i.splice,
        }),
            (b.extend = b.fn.extend = function () {
                var e,
                    t,
                    i,
                    n,
                    r,
                    a,
                    o = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    p = !1;
                for ("boolean" == typeof o && ((p = o), (o = arguments[s] || {}), s++), "object" == typeof o || f(o) || (o = {}), s === l && ((o = this), s--); s < l; s++)
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (i = o[t]),
                                o !== (n = e[t]) &&
                                    (p && n && (b.isPlainObject(n) || (r = Array.isArray(n)))
                                        ? (r ? ((r = !1), (a = i && Array.isArray(i) ? i : [])) : (a = i && b.isPlainObject(i) ? i : {}), (o[t] = b.extend(p, a, n)))
                                        : void 0 !== n && (o[t] = n));
                return o;
            }),
            b.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var t, i;
                    return !(!e || "[object Object]" !== m.call(e) || ((t = r(e)) && ("function" != typeof (i = h.call(t, "constructor") && t.constructor) || d.call(i) !== c)));
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                globalEval: function (e) {
                    _(e);
                },
                each: function (e, t) {
                    var i,
                        n = 0;
                    if (x(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
                    else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
                    return e;
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(w, "");
                },
                makeArray: function (e, t) {
                    var i = t || [];
                    return null != e && (x(Object(e)) ? b.merge(i, "string" == typeof e ? [e] : e) : s.call(i, e)), i;
                },
                inArray: function (e, t, i) {
                    return null == t ? -1 : l.call(t, e, i);
                },
                merge: function (e, t) {
                    for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
                    return (e.length = r), e;
                },
                grep: function (e, t, i) {
                    for (var n = [], r = 0, a = e.length, o = !i; r < a; r++) !t(e[r], r) !== o && n.push(e[r]);
                    return n;
                },
                map: function (e, t, i) {
                    var n,
                        r,
                        a = 0,
                        s = [];
                    if (x(e)) for (n = e.length; a < n; a++) null != (r = t(e[a], a, i)) && s.push(r);
                    else for (a in e) null != (r = t(e[a], a, i)) && s.push(r);
                    return o.apply([], s);
                },
                guid: 1,
                support: u,
            }),
            "function" == typeof Symbol && (b.fn[Symbol.iterator] = i[Symbol.iterator]),
            b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                p["[object " + t + "]"] = t.toLowerCase();
            });
        var T = (function (e) {
            var t,
                i,
                n,
                r,
                a,
                o,
                s,
                l,
                p,
                m,
                h,
                d,
                c,
                u,
                f,
                g,
                y,
                _,
                v,
                b = "sizzle" + 1 * new Date(),
                w = e.document,
                x = 0,
                T = 0,
                k = oe(),
                S = oe(),
                j = oe(),
                C = function (e, t) {
                    return e === t && (h = !0), 0;
                },
                P = {}.hasOwnProperty,
                D = [],
                A = D.pop,
                E = D.push,
                O = D.push,
                R = D.slice,
                M = function (e, t) {
                    for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                    return -1;
                },
                $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                N = "[\\x20\\t\\r\\n\\f]",
                L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                I = "\\[" + N + "*(" + L + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + N + "*\\]",
                z = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                F = new RegExp(N + "+", "g"),
                B = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                H = new RegExp("^" + N + "*," + N + "*"),
                q = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                U = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
                W = new RegExp(z),
                X = new RegExp("^" + L + "$"),
                V = {
                    ID: new RegExp("^#(" + L + ")"),
                    CLASS: new RegExp("^\\.(" + L + ")"),
                    TAG: new RegExp("^(" + L + "|[*])"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + $ + ")$", "i"),
                    needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i"),
                },
                G = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Q = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
                ee = function (e, t, i) {
                    var n = "0x" + t - 65536;
                    return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function (e, t) {
                    return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                },
                ne = function () {
                    d();
                },
                re = _e(
                    function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e);
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                O.apply((D = R.call(w.childNodes)), w.childNodes);
            } catch (e) {
                O = {
                    apply: D.length
                        ? function (e, t) {
                              E.apply(e, R.call(t));
                          }
                        : function (e, t) {
                              for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                              e.length = i - 1;
                          },
                };
            }
            function ae(e, t, n, r) {
                var a,
                    s,
                    p,
                    m,
                    h,
                    u,
                    y,
                    _ = t && t.ownerDocument,
                    x = t ? t.nodeType : 9;
                if (((n = n || []), "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))) return n;
                if (!r && ((t ? t.ownerDocument || t : w) !== c && d(t), (t = t || c), f)) {
                    if (11 !== x && (h = J.exec(e)))
                        if ((a = h[1])) {
                            if (9 === x) {
                                if (!(p = t.getElementById(a))) return n;
                                if (p.id === a) return n.push(p), n;
                            } else if (_ && (p = _.getElementById(a)) && v(t, p) && p.id === a) return n.push(p), n;
                        } else {
                            if (h[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = h[3]) && i.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(a)), n;
                        }
                    if (i.qsa && !j[e + " "] && (!g || !g.test(e))) {
                        if (1 !== x) (_ = t), (y = e);
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((m = t.getAttribute("id")) ? (m = m.replace(te, ie)) : t.setAttribute("id", (m = b)), s = (u = o(e)).length; s--; ) u[s] = "#" + m + " " + ye(u[s]);
                            (y = u.join(",")), (_ = (Q.test(e) && fe(t.parentNode)) || t);
                        }
                        if (y)
                            try {
                                return O.apply(n, _.querySelectorAll(y)), n;
                            } catch (e) {
                            } finally {
                                m === b && t.removeAttribute("id");
                            }
                    }
                }
                return l(e.replace(B, "$1"), t, n, r);
            }
            function oe() {
                var e = [];
                return function t(i, r) {
                    return e.push(i + " ") > n.cacheLength && delete t[e.shift()], (t[i + " "] = r);
                };
            }
            function se(e) {
                return (e[b] = !0), e;
            }
            function le(e) {
                var t = c.createElement("fieldset");
                try {
                    return !!e(t);
                } catch (e) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
            }
            function pe(e, t) {
                for (var i = e.split("|"), r = i.length; r--; ) n.attrHandle[i[r]] = t;
            }
            function me(e, t) {
                var i = t && e,
                    n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (n) return n;
                if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
                return e ? 1 : -1;
            }
            function he(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
            }
            function de(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === e;
                };
            }
            function ce(e) {
                return function (t) {
                    return "form" in t
                        ? t.parentNode && !1 === t.disabled
                            ? "label" in t
                                ? "label" in t.parentNode
                                    ? t.parentNode.disabled === e
                                    : t.disabled === e
                                : t.isDisabled === e || (t.isDisabled !== !e && re(t) === e)
                            : t.disabled === e
                        : "label" in t && t.disabled === e;
                };
            }
            function ue(e) {
                return se(function (t) {
                    return (
                        (t = +t),
                        se(function (i, n) {
                            for (var r, a = e([], i.length, t), o = a.length; o--; ) i[(r = a[o])] && (i[r] = !(n[r] = i[r]));
                        })
                    );
                });
            }
            function fe(e) {
                return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((i = ae.support = {}),
            (a = ae.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (d = ae.setDocument = function (e) {
                var t,
                    r,
                    o = e ? e.ownerDocument || e : w;
                return o !== c && 9 === o.nodeType && o.documentElement
                    ? ((u = (c = o).documentElement),
                      (f = !a(c)),
                      w !== c && (r = c.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ne, !1) : r.attachEvent && r.attachEvent("onunload", ne)),
                      (i.attributes = le(function (e) {
                          return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (i.getElementsByTagName = le(function (e) {
                          return e.appendChild(c.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (i.getElementsByClassName = K.test(c.getElementsByClassName)),
                      (i.getById = le(function (e) {
                          return (u.appendChild(e).id = b), !c.getElementsByName || !c.getElementsByName(b).length;
                      })),
                      i.getById
                          ? ((n.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                            (n.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && f) {
                                    var i = t.getElementById(e);
                                    return i ? [i] : [];
                                }
                            }))
                          : ((n.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return i && i.value === t;
                                };
                            }),
                            (n.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && f) {
                                    var i,
                                        n,
                                        r,
                                        a = t.getElementById(e);
                                    if (a) {
                                        if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                                        for (r = t.getElementsByName(e), n = 0; (a = r[n++]); ) if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                                    }
                                    return [];
                                }
                            })),
                      (n.find.TAG = i.getElementsByTagName
                          ? function (e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0;
                            }
                          : function (e, t) {
                                var i,
                                    n = [],
                                    r = 0,
                                    a = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; (i = a[r++]); ) 1 === i.nodeType && n.push(i);
                                    return n;
                                }
                                return a;
                            }),
                      (n.find.CLASS =
                          i.getElementsByClassName &&
                          function (e, t) {
                              if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e);
                          }),
                      (y = []),
                      (g = []),
                      (i.qsa = K.test(c.querySelectorAll)) &&
                          (le(function (e) {
                              (u.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + $ + ")"),
                                  e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                                  e.querySelectorAll(":checked").length || g.push(":checked"),
                                  e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]");
                          }),
                          le(function (e) {
                              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = c.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="),
                                  2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                  (u.appendChild(e).disabled = !0),
                                  2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  g.push(",.*:");
                          })),
                      (i.matchesSelector = K.test((_ = u.matches || u.webkitMatchesSelector || u.mozMatchesSelector || u.oMatchesSelector || u.msMatchesSelector))) &&
                          le(function (e) {
                              (i.disconnectedMatch = _.call(e, "*")), _.call(e, "[s!='']:x"), y.push("!=", z);
                          }),
                      (g = g.length && new RegExp(g.join("|"))),
                      (y = y.length && new RegExp(y.join("|"))),
                      (t = K.test(u.compareDocumentPosition)),
                      (v =
                          t || K.test(u.contains)
                              ? function (e, t) {
                                    var i = 9 === e.nodeType ? e.documentElement : e,
                                        n = t && t.parentNode;
                                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                                }
                              : function (e, t) {
                                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                    return !1;
                                }),
                      (C = t
                          ? function (e, t) {
                                if (e === t) return (h = !0), 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    n ||
                                    (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!i.sortDetached && t.compareDocumentPosition(e) === n)
                                        ? e === c || (e.ownerDocument === w && v(w, e))
                                            ? -1
                                            : t === c || (t.ownerDocument === w && v(w, t))
                                            ? 1
                                            : m
                                            ? M(m, e) - M(m, t)
                                            : 0
                                        : 4 & n
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (h = !0), 0;
                                var i,
                                    n = 0,
                                    r = e.parentNode,
                                    a = t.parentNode,
                                    o = [e],
                                    s = [t];
                                if (!r || !a) return e === c ? -1 : t === c ? 1 : r ? -1 : a ? 1 : m ? M(m, e) - M(m, t) : 0;
                                if (r === a) return me(e, t);
                                for (i = e; (i = i.parentNode); ) o.unshift(i);
                                for (i = t; (i = i.parentNode); ) s.unshift(i);
                                for (; o[n] === s[n]; ) n++;
                                return n ? me(o[n], s[n]) : o[n] === w ? -1 : s[n] === w ? 1 : 0;
                            }),
                      c)
                    : c;
            }),
            (ae.matches = function (e, t) {
                return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
                if (((e.ownerDocument || e) !== c && d(e), (t = t.replace(U, "='$1']")), i.matchesSelector && f && !j[t + " "] && (!y || !y.test(t)) && (!g || !g.test(t))))
                    try {
                        var n = _.call(e, t);
                        if (n || i.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                    } catch (e) {}
                return ae(t, c, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
                return (e.ownerDocument || e) !== c && d(e), v(e, t);
            }),
            (ae.attr = function (e, t) {
                (e.ownerDocument || e) !== c && d(e);
                var r = n.attrHandle[t.toLowerCase()],
                    a = r && P.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !f) : void 0;
                return void 0 !== a ? a : i.attributes || !f ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
            }),
            (ae.escape = function (e) {
                return (e + "").replace(te, ie);
            }),
            (ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    a = 0;
                if (((h = !i.detectDuplicates), (m = !i.sortStable && e.slice(0)), e.sort(C), h)) {
                    for (; (t = e[a++]); ) t === e[a] && (r = n.push(a));
                    for (; r--; ) e.splice(n[r], 1);
                }
                return (m = null), e;
            }),
            (r = ae.getText = function (e) {
                var t,
                    i = "",
                    n = 0,
                    a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += r(e);
                    } else if (3 === a || 4 === a) return e.nodeValue;
                } else for (; (t = e[n++]); ) i += r(t);
                return i;
            }),
            ((n = ae.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            i = !e[6] && e[2];
                        return V.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : i && W.test(i) && (t = o(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = k[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) &&
                                k(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, t, i) {
                        return function (n) {
                            var r = ae.attr(n, e);
                            return null == r
                                ? "!=" === t
                                : !t ||
                                      ((r += ""),
                                      "=" === t
                                          ? r === i
                                          : "!=" === t
                                          ? r !== i
                                          : "^=" === t
                                          ? i && 0 === r.indexOf(i)
                                          : "*=" === t
                                          ? i && r.indexOf(i) > -1
                                          : "$=" === t
                                          ? i && r.slice(-i.length) === i
                                          : "~=" === t
                                          ? (" " + r.replace(F, " ") + " ").indexOf(i) > -1
                                          : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"));
                        };
                    },
                    CHILD: function (e, t, i, n, r) {
                        var a = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === n && 0 === r
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, i, l) {
                                  var p,
                                      m,
                                      h,
                                      d,
                                      c,
                                      u,
                                      f = a !== o ? "nextSibling" : "previousSibling",
                                      g = t.parentNode,
                                      y = s && t.nodeName.toLowerCase(),
                                      _ = !l && !s,
                                      v = !1;
                                  if (g) {
                                      if (a) {
                                          for (; f; ) {
                                              for (d = t; (d = d[f]); ) if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                              u = f = "only" === e && !u && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((u = [o ? g.firstChild : g.lastChild]), o && _)) {
                                          for (
                                              v = (c = (p = (m = (h = (d = g)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x && p[1]) && p[2], d = c && g.childNodes[c];
                                              (d = (++c && d && d[f]) || (v = c = 0) || u.pop());

                                          )
                                              if (1 === d.nodeType && ++v && d === t) {
                                                  m[e] = [x, c, v];
                                                  break;
                                              }
                                      } else if ((_ && (v = c = (p = (m = (h = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x && p[1]), !1 === v))
                                          for (
                                              ;
                                              (d = (++c && d && d[f]) || (v = c = 0) || u.pop()) &&
                                              ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++v || (_ && ((m = (h = d[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [x, v]), d !== t));

                                          );
                                      return (v -= r) === n || (v % n == 0 && v / n >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (e, t) {
                        var i,
                            r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return r[b]
                            ? r(t)
                            : r.length > 1
                            ? ((i = [e, e, "", t]),
                              n.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? se(function (e, i) {
                                        for (var n, a = r(e, t), o = a.length; o--; ) e[(n = M(e, a[o]))] = !(i[n] = a[o]);
                                    })
                                  : function (e) {
                                        return r(e, 0, i);
                                    })
                            : r;
                    },
                },
                pseudos: {
                    not: se(function (e) {
                        var t = [],
                            i = [],
                            n = s(e.replace(B, "$1"));
                        return n[b]
                            ? se(function (e, t, i, r) {
                                  for (var a, o = n(e, null, r, []), s = e.length; s--; ) (a = o[s]) && (e[s] = !(t[s] = a));
                              })
                            : function (e, r, a) {
                                  return (t[0] = e), n(t, null, a, i), (t[0] = null), !i.pop();
                              };
                    }),
                    has: se(function (e) {
                        return function (t) {
                            return ae(e, t).length > 0;
                        };
                    }),
                    contains: se(function (e) {
                        return (
                            (e = e.replace(Z, ee)),
                            function (t) {
                                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: se(function (e) {
                        return (
                            X.test(e || "") || ae.error("unsupported lang: " + e),
                            (e = e.replace(Z, ee).toLowerCase()),
                            function (t) {
                                var i;
                                do {
                                    if ((i = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === u;
                    },
                    focus: function (e) {
                        return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: ce(!1),
                    disabled: ce(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !n.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Y.test(e.nodeName);
                    },
                    input: function (e) {
                        return G.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: ue(function () {
                        return [0];
                    }),
                    last: ue(function (e, t) {
                        return [t - 1];
                    }),
                    eq: ue(function (e, t, i) {
                        return [i < 0 ? i + t : i];
                    }),
                    even: ue(function (e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e;
                    }),
                    odd: ue(function (e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e;
                    }),
                    lt: ue(function (e, t, i) {
                        for (var n = i < 0 ? i + t : i; --n >= 0; ) e.push(n);
                        return e;
                    }),
                    gt: ue(function (e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
                        return e;
                    }),
                },
            }).pseudos.nth = n.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                n.pseudos[t] = he(t);
            for (t in { submit: !0, reset: !0 }) n.pseudos[t] = de(t);
            function ge() {}
            function ye(e) {
                for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
                return n;
            }
            function _e(e, t, i) {
                var n = t.dir,
                    r = t.next,
                    a = r || n,
                    o = i && "parentNode" === a,
                    s = T++;
                return t.first
                    ? function (t, i, r) {
                          for (; (t = t[n]); ) if (1 === t.nodeType || o) return e(t, i, r);
                          return !1;
                      }
                    : function (t, i, l) {
                          var p,
                              m,
                              h,
                              d = [x, s];
                          if (l) {
                              for (; (t = t[n]); ) if ((1 === t.nodeType || o) && e(t, i, l)) return !0;
                          } else
                              for (; (t = t[n]); )
                                  if (1 === t.nodeType || o)
                                      if (((m = (h = t[b] || (t[b] = {}))[t.uniqueID] || (h[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[n] || t;
                                      else {
                                          if ((p = m[a]) && p[0] === x && p[1] === s) return (d[2] = p[2]);
                                          if (((m[a] = d), (d[2] = e(t, i, l)))) return !0;
                                      }
                          return !1;
                      };
            }
            function ve(e) {
                return e.length > 1
                    ? function (t, i, n) {
                          for (var r = e.length; r--; ) if (!e[r](t, i, n)) return !1;
                          return !0;
                      }
                    : e[0];
            }
            function be(e, t, i, n, r) {
                for (var a, o = [], s = 0, l = e.length, p = null != t; s < l; s++) (a = e[s]) && ((i && !i(a, n, r)) || (o.push(a), p && t.push(s)));
                return o;
            }
            function we(e, t, i, n, r, a) {
                return (
                    n && !n[b] && (n = we(n)),
                    r && !r[b] && (r = we(r, a)),
                    se(function (a, o, s, l) {
                        var p,
                            m,
                            h,
                            d = [],
                            c = [],
                            u = o.length,
                            f =
                                a ||
                                (function (e, t, i) {
                                    for (var n = 0, r = t.length; n < r; n++) ae(e, t[n], i);
                                    return i;
                                })(t || "*", s.nodeType ? [s] : s, []),
                            g = !e || (!a && t) ? f : be(f, d, e, s, l),
                            y = i ? (r || (a ? e : u || n) ? [] : o) : g;
                        if ((i && i(g, y, s, l), n)) for (p = be(y, c), n(p, [], s, l), m = p.length; m--; ) (h = p[m]) && (y[c[m]] = !(g[c[m]] = h));
                        if (a) {
                            if (r || e) {
                                if (r) {
                                    for (p = [], m = y.length; m--; ) (h = y[m]) && p.push((g[m] = h));
                                    r(null, (y = []), p, l);
                                }
                                for (m = y.length; m--; ) (h = y[m]) && (p = r ? M(a, h) : d[m]) > -1 && (a[p] = !(o[p] = h));
                            }
                        } else (y = be(y === o ? y.splice(u, y.length) : y)), r ? r(null, o, y, l) : O.apply(o, y);
                    })
                );
            }
            function xe(e) {
                for (
                    var t,
                        i,
                        r,
                        a = e.length,
                        o = n.relative[e[0].type],
                        s = o || n.relative[" "],
                        l = o ? 1 : 0,
                        m = _e(
                            function (e) {
                                return e === t;
                            },
                            s,
                            !0
                        ),
                        h = _e(
                            function (e) {
                                return M(t, e) > -1;
                            },
                            s,
                            !0
                        ),
                        d = [
                            function (e, i, n) {
                                var r = (!o && (n || i !== p)) || ((t = i).nodeType ? m(e, i, n) : h(e, i, n));
                                return (t = null), r;
                            },
                        ];
                    l < a;
                    l++
                )
                    if ((i = n.relative[e[l].type])) d = [_e(ve(d), i)];
                    else {
                        if ((i = n.filter[e[l].type].apply(null, e[l].matches))[b]) {
                            for (r = ++l; r < a && !n.relative[e[r].type]; r++);
                            return we(l > 1 && ve(d), l > 1 && ye(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(B, "$1"), i, l < r && xe(e.slice(l, r)), r < a && xe((e = e.slice(r))), r < a && ye(e));
                        }
                        d.push(i);
                    }
                return ve(d);
            }
            function Te(e, t) {
                var i = t.length > 0,
                    r = e.length > 0,
                    a = function (a, o, s, l, m) {
                        var h,
                            u,
                            g,
                            y = 0,
                            _ = "0",
                            v = a && [],
                            b = [],
                            w = p,
                            T = a || (r && n.find.TAG("*", m)),
                            k = (x += null == w ? 1 : Math.random() || 0.1),
                            S = T.length;
                        for (m && (p = o === c || o || m); _ !== S && null != (h = T[_]); _++) {
                            if (r && h) {
                                for (u = 0, o || h.ownerDocument === c || (d(h), (s = !f)); (g = e[u++]); )
                                    if (g(h, o || c, s)) {
                                        l.push(h);
                                        break;
                                    }
                                m && (x = k);
                            }
                            i && ((h = !g && h) && y--, a && v.push(h));
                        }
                        if (((y += _), i && _ !== y)) {
                            for (u = 0; (g = t[u++]); ) g(v, b, o, s);
                            if (a) {
                                if (y > 0) for (; _--; ) v[_] || b[_] || (b[_] = A.call(l));
                                b = be(b);
                            }
                            O.apply(l, b), m && !a && b.length > 0 && y + t.length > 1 && ae.uniqueSort(l);
                        }
                        return m && ((x = k), (p = w)), v;
                    };
                return i ? se(a) : a;
            }
            return (
                (ge.prototype = n.filters = n.pseudos),
                (n.setFilters = new ge()),
                (o = ae.tokenize = function (e, t) {
                    var i,
                        r,
                        a,
                        o,
                        s,
                        l,
                        p,
                        m = S[e + " "];
                    if (m) return t ? 0 : m.slice(0);
                    for (s = e, l = [], p = n.preFilter; s; ) {
                        for (o in ((i && !(r = H.exec(s))) || (r && (s = s.slice(r[0].length) || s), l.push((a = []))),
                        (i = !1),
                        (r = q.exec(s)) && ((i = r.shift()), a.push({ value: i, type: r[0].replace(B, " ") }), (s = s.slice(i.length))),
                        n.filter))
                            !(r = V[o].exec(s)) || (p[o] && !(r = p[o](r))) || ((i = r.shift()), a.push({ value: i, type: o, matches: r }), (s = s.slice(i.length)));
                        if (!i) break;
                    }
                    return t ? s.length : s ? ae.error(e) : S(e, l).slice(0);
                }),
                (s = ae.compile = function (e, t) {
                    var i,
                        n = [],
                        r = [],
                        a = j[e + " "];
                    if (!a) {
                        for (t || (t = o(e)), i = t.length; i--; ) (a = xe(t[i]))[b] ? n.push(a) : r.push(a);
                        (a = j(e, Te(r, n))).selector = e;
                    }
                    return a;
                }),
                (l = ae.select = function (e, t, i, r) {
                    var a,
                        l,
                        p,
                        m,
                        h,
                        d = "function" == typeof e && e,
                        c = !r && o((e = d.selector || e));
                    if (((i = i || []), 1 === c.length)) {
                        if ((l = c[0] = c[0].slice(0)).length > 2 && "ID" === (p = l[0]).type && 9 === t.nodeType && f && n.relative[l[1].type]) {
                            if (!(t = (n.find.ID(p.matches[0].replace(Z, ee), t) || [])[0])) return i;
                            d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                        }
                        for (a = V.needsContext.test(e) ? 0 : l.length; a-- && !n.relative[(m = (p = l[a]).type)]; )
                            if ((h = n.find[m]) && (r = h(p.matches[0].replace(Z, ee), (Q.test(l[0].type) && fe(t.parentNode)) || t))) {
                                if ((l.splice(a, 1), !(e = r.length && ye(l)))) return O.apply(i, r), i;
                                break;
                            }
                    }
                    return (d || s(e, c))(r, t, !f, i, !t || (Q.test(e) && fe(t.parentNode)) || t), i;
                }),
                (i.sortStable = b.split("").sort(C).join("") === b),
                (i.detectDuplicates = !!h),
                d(),
                (i.sortDetached = le(function (e) {
                    return 1 & e.compareDocumentPosition(c.createElement("fieldset"));
                })),
                le(function (e) {
                    return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                }) ||
                    pe("type|href|height|width", function (e, t, i) {
                        if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                    }),
                (i.attributes &&
                    le(function (e) {
                        return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                    })) ||
                    pe("value", function (e, t, i) {
                        if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                    }),
                le(function (e) {
                    return null == e.getAttribute("disabled");
                }) ||
                    pe($, function (e, t, i) {
                        var n;
                        if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                    }),
                ae
            );
        })(e);
        (b.find = T), (b.expr = T.selectors), (b.expr[":"] = b.expr.pseudos), (b.uniqueSort = b.unique = T.uniqueSort), (b.text = T.getText), (b.isXMLDoc = T.isXML), (b.contains = T.contains), (b.escapeSelector = T.escape);
        var k = function (e, t, i) {
                for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (r && b(e).is(i)) break;
                        n.push(e);
                    }
                return n;
            },
            S = function (e, t) {
                for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
                return i;
            },
            j = b.expr.match.needsContext;
        function C(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function D(e, t, i) {
            return f(t)
                ? b.grep(e, function (e, n) {
                      return !!t.call(e, n, e) !== i;
                  })
                : t.nodeType
                ? b.grep(e, function (e) {
                      return (e === t) !== i;
                  })
                : "string" != typeof t
                ? b.grep(e, function (e) {
                      return l.call(t, e) > -1 !== i;
                  })
                : b.filter(t, e, i);
        }
        (b.filter = function (e, t, i) {
            var n = t[0];
            return (
                i && (e = ":not(" + e + ")"),
                1 === t.length && 1 === n.nodeType
                    ? b.find.matchesSelector(n, e)
                        ? [n]
                        : []
                    : b.find.matches(
                          e,
                          b.grep(t, function (e) {
                              return 1 === e.nodeType;
                          })
                      )
            );
        }),
            b.fn.extend({
                find: function (e) {
                    var t,
                        i,
                        n = this.length,
                        r = this;
                    if ("string" != typeof e)
                        return this.pushStack(
                            b(e).filter(function () {
                                for (t = 0; t < n; t++) if (b.contains(r[t], this)) return !0;
                            })
                        );
                    for (i = this.pushStack([]), t = 0; t < n; t++) b.find(e, r[t], i);
                    return n > 1 ? b.uniqueSort(i) : i;
                },
                filter: function (e) {
                    return this.pushStack(D(this, e || [], !1));
                },
                not: function (e) {
                    return this.pushStack(D(this, e || [], !0));
                },
                is: function (e) {
                    return !!D(this, "string" == typeof e && j.test(e) ? b(e) : e || [], !1).length;
                },
            });
        var A,
            E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((b.fn.init = function (e, t, i) {
            var r, a;
            if (!e) return this;
            if (((i = i || A), "string" == typeof e)) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : E.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if ((b.merge(this, b.parseHTML(r[1], (t = t instanceof b ? t[0] : t) && t.nodeType ? t.ownerDocument || t : n, !0)), P.test(r[1]) && b.isPlainObject(t))) for (r in t) f(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                }
                return (a = n.getElementById(r[2])) && ((this[0] = a), (this.length = 1)), this;
            }
            return e.nodeType ? ((this[0] = e), (this.length = 1), this) : f(e) ? (void 0 !== i.ready ? i.ready(e) : e(b)) : b.makeArray(e, this);
        }).prototype = b.fn),
            (A = b(n));
        var O = /^(?:parents|prev(?:Until|All))/,
            R = { children: !0, contents: !0, next: !0, prev: !0 };
        function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
        }
        b.fn.extend({
            has: function (e) {
                var t = b(e, this),
                    i = t.length;
                return this.filter(function () {
                    for (var e = 0; e < i; e++) if (b.contains(this, t[e])) return !0;
                });
            },
            closest: function (e, t) {
                var i,
                    n = 0,
                    r = this.length,
                    a = [],
                    o = "string" != typeof e && b(e);
                if (!j.test(e))
                    for (; n < r; n++)
                        for (i = this[n]; i && i !== t; i = i.parentNode)
                            if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && b.find.matchesSelector(i, e))) {
                                a.push(i);
                                break;
                            }
                return this.pushStack(a.length > 1 ? b.uniqueSort(a) : a);
            },
            index: function (e) {
                return e ? ("string" == typeof e ? l.call(b(e), this[0]) : l.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
                return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
            b.each(
                {
                    parent: function (e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null;
                    },
                    parents: function (e) {
                        return k(e, "parentNode");
                    },
                    parentsUntil: function (e, t, i) {
                        return k(e, "parentNode", i);
                    },
                    next: function (e) {
                        return M(e, "nextSibling");
                    },
                    prev: function (e) {
                        return M(e, "previousSibling");
                    },
                    nextAll: function (e) {
                        return k(e, "nextSibling");
                    },
                    prevAll: function (e) {
                        return k(e, "previousSibling");
                    },
                    nextUntil: function (e, t, i) {
                        return k(e, "nextSibling", i);
                    },
                    prevUntil: function (e, t, i) {
                        return k(e, "previousSibling", i);
                    },
                    siblings: function (e) {
                        return S((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                        return S(e.firstChild);
                    },
                    contents: function (e) {
                        return C(e, "iframe") ? e.contentDocument : (C(e, "template") && (e = e.content || e), b.merge([], e.childNodes));
                    },
                },
                function (e, t) {
                    b.fn[e] = function (i, n) {
                        var r = b.map(this, t, i);
                        return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = b.filter(n, r)), this.length > 1 && (R[e] || b.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r);
                    };
                }
            );
        var $ = /[^\x20\t\r\n\f]+/g;
        function N(e) {
            return e;
        }
        function L(e) {
            throw e;
        }
        function I(e, t, i, n) {
            var r;
            try {
                e && f((r = e.promise)) ? r.call(e).done(t).fail(i) : e && f((r = e.then)) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n));
            } catch (e) {
                i.apply(void 0, [e]);
            }
        }
        (b.Callbacks = function (e) {
            e =
                "string" == typeof e
                    ? (function (e) {
                          var t = {};
                          return (
                              b.each(e.match($) || [], function (e, i) {
                                  t[i] = !0;
                              }),
                              t
                          );
                      })(e)
                    : b.extend({}, e);
            var t,
                i,
                n,
                r,
                a = [],
                o = [],
                s = -1,
                l = function () {
                    for (r = r || e.once, n = t = !0; o.length; s = -1) for (i = o.shift(); ++s < a.length; ) !1 === a[s].apply(i[0], i[1]) && e.stopOnFalse && ((s = a.length), (i = !1));
                    e.memory || (i = !1), (t = !1), r && (a = i ? [] : "");
                },
                p = {
                    add: function () {
                        return (
                            a &&
                                (i && !t && ((s = a.length - 1), o.push(i)),
                                (function t(i) {
                                    b.each(i, function (i, n) {
                                        f(n) ? (e.unique && p.has(n)) || a.push(n) : n && n.length && "string" !== v(n) && t(n);
                                    });
                                })(arguments),
                                i && !t && l()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            b.each(arguments, function (e, t) {
                                for (var i; (i = b.inArray(t, a, i)) > -1; ) a.splice(i, 1), i <= s && s--;
                            }),
                            this
                        );
                    },
                    has: function (e) {
                        return e ? b.inArray(e, a) > -1 : a.length > 0;
                    },
                    empty: function () {
                        return a && (a = []), this;
                    },
                    disable: function () {
                        return (r = o = []), (a = i = ""), this;
                    },
                    disabled: function () {
                        return !a;
                    },
                    lock: function () {
                        return (r = o = []), i || t || (a = i = ""), this;
                    },
                    locked: function () {
                        return !!r;
                    },
                    fireWith: function (e, i) {
                        return r || ((i = [e, (i = i || []).slice ? i.slice() : i]), o.push(i), t || l()), this;
                    },
                    fire: function () {
                        return p.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!n;
                    },
                };
            return p;
        }),
            b.extend({
                Deferred: function (t) {
                    var i = [
                            ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                            ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"],
                        ],
                        n = "pending",
                        r = {
                            state: function () {
                                return n;
                            },
                            always: function () {
                                return a.done(arguments).fail(arguments), this;
                            },
                            catch: function (e) {
                                return r.then(null, e);
                            },
                            pipe: function () {
                                var e = arguments;
                                return b
                                    .Deferred(function (t) {
                                        b.each(i, function (i, n) {
                                            var r = f(e[n[4]]) && e[n[4]];
                                            a[n[1]](function () {
                                                var e = r && r.apply(this, arguments);
                                                e && f(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments);
                                            });
                                        }),
                                            (e = null);
                                    })
                                    .promise();
                            },
                            then: function (t, n, r) {
                                var a = 0;
                                function o(t, i, n, r) {
                                    return function () {
                                        var s = this,
                                            l = arguments,
                                            p = function () {
                                                var e, p;
                                                if (!(t < a)) {
                                                    if ((e = n.apply(s, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                    f((p = e && ("object" == typeof e || "function" == typeof e) && e.then))
                                                        ? r
                                                            ? p.call(e, o(a, i, N, r), o(a, i, L, r))
                                                            : (a++, p.call(e, o(a, i, N, r), o(a, i, L, r), o(a, i, N, i.notifyWith)))
                                                        : (n !== N && ((s = void 0), (l = [e])), (r || i.resolveWith)(s, l));
                                                }
                                            },
                                            m = r
                                                ? p
                                                : function () {
                                                      try {
                                                          p();
                                                      } catch (e) {
                                                          b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, m.stackTrace), t + 1 >= a && (n !== L && ((s = void 0), (l = [e])), i.rejectWith(s, l));
                                                      }
                                                  };
                                        t ? m() : (b.Deferred.getStackHook && (m.stackTrace = b.Deferred.getStackHook()), e.setTimeout(m));
                                    };
                                }
                                return b
                                    .Deferred(function (e) {
                                        i[0][3].add(o(0, e, f(r) ? r : N, e.notifyWith)), i[1][3].add(o(0, e, f(t) ? t : N)), i[2][3].add(o(0, e, f(n) ? n : L));
                                    })
                                    .promise();
                            },
                            promise: function (e) {
                                return null != e ? b.extend(e, r) : r;
                            },
                        },
                        a = {};
                    return (
                        b.each(i, function (e, t) {
                            var o = t[2],
                                s = t[5];
                            (r[t[1]] = o.add),
                                s &&
                                    o.add(
                                        function () {
                                            n = s;
                                        },
                                        i[3 - e][2].disable,
                                        i[3 - e][3].disable,
                                        i[0][2].lock,
                                        i[0][3].lock
                                    ),
                                o.add(t[3].fire),
                                (a[t[0]] = function () {
                                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
                                }),
                                (a[t[0] + "With"] = o.fireWith);
                        }),
                        r.promise(a),
                        t && t.call(a, a),
                        a
                    );
                },
                when: function (e) {
                    var t = arguments.length,
                        i = t,
                        n = Array(i),
                        r = a.call(arguments),
                        o = b.Deferred(),
                        s = function (e) {
                            return function (i) {
                                (n[e] = this), (r[e] = arguments.length > 1 ? a.call(arguments) : i), --t || o.resolveWith(n, r);
                            };
                        };
                    if (t <= 1 && (I(e, o.done(s(i)).resolve, o.reject, !t), "pending" === o.state() || f(r[i] && r[i].then))) return o.then();
                    for (; i--; ) I(r[i], s(i), o.reject);
                    return o.promise();
                },
            });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (b.Deferred.exceptionHook = function (t, i) {
            e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
        }),
            (b.readyException = function (t) {
                e.setTimeout(function () {
                    throw t;
                });
            });
        var F = b.Deferred();
        function B() {
            n.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), b.ready();
        }
        (b.fn.ready = function (e) {
            return (
                F.then(e).catch(function (e) {
                    b.readyException(e);
                }),
                this
            );
        }),
            b.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --b.readyWait : b.isReady) || ((b.isReady = !0), (!0 !== e && --b.readyWait > 0) || F.resolveWith(n, [b]));
                },
            }),
            (b.ready.then = F.then),
            "complete" === n.readyState || ("loading" !== n.readyState && !n.documentElement.doScroll) ? e.setTimeout(b.ready) : (n.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
        var H = function (e, t, i, n, r, a, o) {
                var s = 0,
                    l = e.length,
                    p = null == i;
                if ("object" === v(i)) for (s in ((r = !0), i)) H(e, t, s, i[s], !0, a, o);
                else if (
                    void 0 !== n &&
                    ((r = !0),
                    f(n) || (o = !0),
                    p &&
                        (o
                            ? (t.call(e, n), (t = null))
                            : ((p = t),
                              (t = function (e, t, i) {
                                  return p.call(b(e), i);
                              }))),
                    t)
                )
                    for (; s < l; s++) t(e[s], i, o ? n : n.call(e[s], s, t(e[s], i)));
                return r ? e : p ? t.call(e) : l ? t(e[0], i) : a;
            },
            q = /^-ms-/,
            U = /-([a-z])/g;
        function W(e, t) {
            return t.toUpperCase();
        }
        function X(e) {
            return e.replace(q, "ms-").replace(U, W);
        }
        var V = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function G() {
            this.expando = b.expando + G.uid++;
        }
        (G.uid = 1),
            (G.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                },
                set: function (e, t, i) {
                    var n,
                        r = this.cache(e);
                    if ("string" == typeof t) r[X(t)] = i;
                    else for (n in t) r[X(n)] = t[n];
                    return r;
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
                },
                access: function (e, t, i) {
                    return void 0 === t || (t && "string" == typeof t && void 0 === i) ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t);
                },
                remove: function (e, t) {
                    var i,
                        n = e[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== t) {
                            i = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in n ? [t] : t.match($) || []).length;
                            for (; i--; ) delete n[t[i]];
                        }
                        (void 0 === t || b.isEmptyObject(n)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !b.isEmptyObject(t);
                },
            });
        var Y = new G(),
            K = new G(),
            J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Q = /[A-Z]/g;
        function Z(e, t, i) {
            var n;
            if (void 0 === i && 1 === e.nodeType)
                if (((n = "data-" + t.replace(Q, "-$&").toLowerCase()), "string" == typeof (i = e.getAttribute(n)))) {
                    try {
                        i = (function (e) {
                            return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e));
                        })(i);
                    } catch (e) {}
                    K.set(e, t, i);
                } else i = void 0;
            return i;
        }
        b.extend({
            hasData: function (e) {
                return K.hasData(e) || Y.hasData(e);
            },
            data: function (e, t, i) {
                return K.access(e, t, i);
            },
            removeData: function (e, t) {
                K.remove(e, t);
            },
            _data: function (e, t, i) {
                return Y.access(e, t, i);
            },
            _removeData: function (e, t) {
                Y.remove(e, t);
            },
        }),
            b.fn.extend({
                data: function (e, t) {
                    var i,
                        n,
                        r,
                        a = this[0],
                        o = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && ((r = K.get(a)), 1 === a.nodeType && !Y.get(a, "hasDataAttrs"))) {
                            for (i = o.length; i--; ) o[i] && 0 === (n = o[i].name).indexOf("data-") && ((n = X(n.slice(5))), Z(a, n, r[n]));
                            Y.set(a, "hasDataAttrs", !0);
                        }
                        return r;
                    }
                    return "object" == typeof e
                        ? this.each(function () {
                              K.set(this, e);
                          })
                        : H(
                              this,
                              function (t) {
                                  var i;
                                  if (a && void 0 === t) {
                                      if (void 0 !== (i = K.get(a, e))) return i;
                                      if (void 0 !== (i = Z(a, e))) return i;
                                  } else
                                      this.each(function () {
                                          K.set(this, e, t);
                                      });
                              },
                              null,
                              t,
                              arguments.length > 1,
                              null,
                              !0
                          );
                },
                removeData: function (e) {
                    return this.each(function () {
                        K.remove(this, e);
                    });
                },
            }),
            b.extend({
                queue: function (e, t, i) {
                    var n;
                    if (e) return (n = Y.get(e, (t = (t || "fx") + "queue"))), i && (!n || Array.isArray(i) ? (n = Y.access(e, t, b.makeArray(i))) : n.push(i)), n || [];
                },
                dequeue: function (e, t) {
                    var i = b.queue(e, (t = t || "fx")),
                        n = i.length,
                        r = i.shift(),
                        a = b._queueHooks(e, t);
                    "inprogress" === r && ((r = i.shift()), n--),
                        r &&
                            ("fx" === t && i.unshift("inprogress"),
                            delete a.stop,
                            r.call(
                                e,
                                function () {
                                    b.dequeue(e, t);
                                },
                                a
                            )),
                        !n && a && a.empty.fire();
                },
                _queueHooks: function (e, t) {
                    var i = t + "queueHooks";
                    return (
                        Y.get(e, i) ||
                        Y.access(e, i, {
                            empty: b.Callbacks("once memory").add(function () {
                                Y.remove(e, [t + "queue", i]);
                            }),
                        })
                    );
                },
            }),
            b.fn.extend({
                queue: function (e, t) {
                    var i = 2;
                    return (
                        "string" != typeof e && ((t = e), (e = "fx"), i--),
                        arguments.length < i
                            ? b.queue(this[0], e)
                            : void 0 === t
                            ? this
                            : this.each(function () {
                                  var i = b.queue(this, e, t);
                                  b._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && b.dequeue(this, e);
                              })
                    );
                },
                dequeue: function (e) {
                    return this.each(function () {
                        b.dequeue(this, e);
                    });
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                    var i,
                        n = 1,
                        r = b.Deferred(),
                        a = this,
                        o = this.length,
                        s = function () {
                            --n || r.resolveWith(a, [a]);
                        };
                    for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; ) (i = Y.get(a[o], e + "queueHooks")) && i.empty && (n++, i.empty.add(s));
                    return s(), r.promise(t);
                },
            });
        var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            ne = function (e, t) {
                return "none" === (e = t || e).style.display || ("" === e.style.display && b.contains(e.ownerDocument, e) && "none" === b.css(e, "display"));
            },
            re = function (e, t, i, n) {
                var r,
                    a,
                    o = {};
                for (a in t) (o[a] = e.style[a]), (e.style[a] = t[a]);
                for (a in ((r = i.apply(e, n || [])), t)) e.style[a] = o[a];
                return r;
            };
        function ae(e, t, i, n) {
            var r,
                a,
                o = 20,
                s = n
                    ? function () {
                          return n.cur();
                      }
                    : function () {
                          return b.css(e, t, "");
                      },
                l = s(),
                p = (i && i[3]) || (b.cssNumber[t] ? "" : "px"),
                m = (b.cssNumber[t] || ("px" !== p && +l)) && te.exec(b.css(e, t));
            if (m && m[3] !== p) {
                for (p = p || m[3], m = +(l /= 2) || 1; o--; ) b.style(e, t, m + p), (1 - a) * (1 - (a = s() / l || 0.5)) <= 0 && (o = 0), (m /= a);
                b.style(e, t, (m *= 2) + p), (i = i || []);
            }
            return i && ((m = +m || +l || 0), (r = i[1] ? m + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = p), (n.start = m), (n.end = r))), r;
        }
        var oe = {};
        function se(e) {
            var t,
                i = e.ownerDocument,
                n = e.nodeName,
                r = oe[n];
            return r || ((t = i.body.appendChild(i.createElement(n))), (r = b.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (oe[n] = r), r);
        }
        function le(e, t) {
            for (var i, n, r = [], a = 0, o = e.length; a < o; a++)
                (n = e[a]).style &&
                    ((i = n.style.display),
                    t ? ("none" === i && ((r[a] = Y.get(n, "display") || null), r[a] || (n.style.display = "")), "" === n.style.display && ne(n) && (r[a] = se(n))) : "none" !== i && ((r[a] = "none"), Y.set(n, "display", i)));
            for (a = 0; a < o; a++) null != r[a] && (e[a].style.display = r[a]);
            return e;
        }
        b.fn.extend({
            show: function () {
                return le(this, !0);
            },
            hide: function () {
                return le(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          ne(this) ? b(this).show() : b(this).hide();
                      });
            },
        });
        var pe = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            he = /^$|^module$|\/(?:java|ecma)script/i,
            de = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
        function ce(e, t) {
            var i;
            return (i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && C(e, t)) ? b.merge([e], i) : i;
        }
        function ue(e, t) {
            for (var i = 0, n = e.length; i < n; i++) Y.set(e[i], "globalEval", !t || Y.get(t[i], "globalEval"));
        }
        (de.optgroup = de.option), (de.tbody = de.tfoot = de.colgroup = de.caption = de.thead), (de.th = de.td);
        var fe = /<|&#?\w+;/;
        function ge(e, t, i, n, r) {
            for (var a, o, s, l, p, m, h = t.createDocumentFragment(), d = [], c = 0, u = e.length; c < u; c++)
                if ((a = e[c]) || 0 === a)
                    if ("object" === v(a)) b.merge(d, a.nodeType ? [a] : a);
                    else if (fe.test(a)) {
                        for (o = o || h.appendChild(t.createElement("div")), s = (me.exec(a) || ["", ""])[1].toLowerCase(), o.innerHTML = (l = de[s] || de._default)[1] + b.htmlPrefilter(a) + l[2], m = l[0]; m--; ) o = o.lastChild;
                        b.merge(d, o.childNodes), ((o = h.firstChild).textContent = "");
                    } else d.push(t.createTextNode(a));
            for (h.textContent = "", c = 0; (a = d[c++]); )
                if (n && b.inArray(a, n) > -1) r && r.push(a);
                else if (((p = b.contains(a.ownerDocument, a)), (o = ce(h.appendChild(a), "script")), p && ue(o), i)) for (m = 0; (a = o[m++]); ) he.test(a.type || "") && i.push(a);
            return h;
        }
        !(function () {
            var e = n.createDocumentFragment().appendChild(n.createElement("div")),
                t = n.createElement("input");
            t.setAttribute("type", "radio"),
                t.setAttribute("checked", "checked"),
                t.setAttribute("name", "t"),
                e.appendChild(t),
                (u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (e.innerHTML = "<textarea>x</textarea>"),
                (u.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
        })();
        var ye = n.documentElement,
            _e = /^key/,
            ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            be = /^([^.]*)(?:\.(.+)|)/;
        function we() {
            return !0;
        }
        function xe() {
            return !1;
        }
        function Te() {
            try {
                return n.activeElement;
            } catch (e) {}
        }
        function ke(e, t, i, n, r, a) {
            var o, s;
            if ("object" == typeof t) {
                for (s in ("string" != typeof i && ((n = n || i), (i = void 0)), t)) ke(e, s, i, n, t[s], a);
                return e;
            }
            if ((null == n && null == r ? ((r = i), (n = i = void 0)) : null == r && ("string" == typeof i ? ((r = n), (n = void 0)) : ((r = n), (n = i), (i = void 0))), !1 === r)) r = xe;
            else if (!r) return e;
            return (
                1 === a &&
                    ((o = r),
                    ((r = function (e) {
                        return b().off(e), o.apply(this, arguments);
                    }).guid = o.guid || (o.guid = b.guid++))),
                e.each(function () {
                    b.event.add(this, t, r, n, i);
                })
            );
        }
        (b.event = {
            global: {},
            add: function (e, t, i, n, r) {
                var a,
                    o,
                    s,
                    l,
                    p,
                    m,
                    h,
                    d,
                    c,
                    u,
                    f,
                    g = Y.get(e);
                if (g)
                    for (
                        i.handler && ((i = (a = i).handler), (r = a.selector)),
                            r && b.find.matchesSelector(ye, r),
                            i.guid || (i.guid = b.guid++),
                            (l = g.events) || (l = g.events = {}),
                            (o = g.handle) ||
                                (o = g.handle = function (t) {
                                    return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0;
                                }),
                            p = (t = (t || "").match($) || [""]).length;
                        p--;

                    )
                        (c = f = (s = be.exec(t[p]) || [])[1]),
                            (u = (s[2] || "").split(".").sort()),
                            c &&
                                ((h = b.event.special[c] || {}),
                                (h = b.event.special[(c = (r ? h.delegateType : h.bindType) || c)] || {}),
                                (m = b.extend({ type: c, origType: f, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && b.expr.match.needsContext.test(r), namespace: u.join(".") }, a)),
                                (d = l[c]) || (((d = l[c] = []).delegateCount = 0), (h.setup && !1 !== h.setup.call(e, n, u, o)) || (e.addEventListener && e.addEventListener(c, o))),
                                h.add && (h.add.call(e, m), m.handler.guid || (m.handler.guid = i.guid)),
                                r ? d.splice(d.delegateCount++, 0, m) : d.push(m),
                                (b.event.global[c] = !0));
            },
            remove: function (e, t, i, n, r) {
                var a,
                    o,
                    s,
                    l,
                    p,
                    m,
                    h,
                    d,
                    c,
                    u,
                    f,
                    g = Y.hasData(e) && Y.get(e);
                if (g && (l = g.events)) {
                    for (p = (t = (t || "").match($) || [""]).length; p--; )
                        if (((c = f = (s = be.exec(t[p]) || [])[1]), (u = (s[2] || "").split(".").sort()), c)) {
                            for (h = b.event.special[c] || {}, d = l[(c = (n ? h.delegateType : h.bindType) || c)] || [], s = s[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = d.length; a--; )
                                (m = d[a]),
                                    (!r && f !== m.origType) ||
                                        (i && i.guid !== m.guid) ||
                                        (s && !s.test(m.namespace)) ||
                                        (n && n !== m.selector && ("**" !== n || !m.selector)) ||
                                        (d.splice(a, 1), m.selector && d.delegateCount--, h.remove && h.remove.call(e, m));
                            o && !d.length && ((h.teardown && !1 !== h.teardown.call(e, u, g.handle)) || b.removeEvent(e, c, g.handle), delete l[c]);
                        } else for (c in l) b.event.remove(e, c + t[p], i, n, !0);
                    b.isEmptyObject(l) && Y.remove(e, "handle events");
                }
            },
            dispatch: function (e) {
                var t,
                    i,
                    n,
                    r,
                    a,
                    o,
                    s = b.event.fix(e),
                    l = new Array(arguments.length),
                    p = (Y.get(this, "events") || {})[s.type] || [],
                    m = b.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (((s.delegateTarget = this), !m.preDispatch || !1 !== m.preDispatch.call(this, s))) {
                    for (o = b.event.handlers.call(this, s, p), t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
                        for (s.currentTarget = r.elem, i = 0; (a = r.handlers[i++]) && !s.isImmediatePropagationStopped(); )
                            (s.rnamespace && !s.rnamespace.test(a.namespace)) ||
                                ((s.handleObj = a), (s.data = a.data), void 0 !== (n = ((b.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (s.result = n) && (s.preventDefault(), s.stopPropagation()));
                    return m.postDispatch && m.postDispatch.call(this, s), s.result;
                }
            },
            handlers: function (e, t) {
                var i,
                    n,
                    r,
                    a,
                    o,
                    s = [],
                    l = t.delegateCount,
                    p = e.target;
                if (l && p.nodeType && !("click" === e.type && e.button >= 1))
                    for (; p !== this; p = p.parentNode || this)
                        if (1 === p.nodeType && ("click" !== e.type || !0 !== p.disabled)) {
                            for (a = [], o = {}, i = 0; i < l; i++) void 0 === o[(r = (n = t[i]).selector + " ")] && (o[r] = n.needsContext ? b(r, this).index(p) > -1 : b.find(r, this, null, [p]).length), o[r] && a.push(n);
                            a.length && s.push({ elem: p, handlers: a });
                        }
                return (p = this), l < t.length && s.push({ elem: p, handlers: t.slice(l) }), s;
            },
            addProp: function (e, t) {
                Object.defineProperty(b.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: f(t)
                        ? function () {
                              if (this.originalEvent) return t(this.originalEvent);
                          }
                        : function () {
                              if (this.originalEvent) return this.originalEvent[e];
                          },
                    set: function (t) {
                        Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                    },
                });
            },
            fix: function (e) {
                return e[b.expando] ? e : new b.Event(e);
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function () {
                        if (this !== Te() && this.focus) return this.focus(), !1;
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function () {
                        if (this === Te() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && C(this, "input")) return this.click(), !1;
                    },
                    _default: function (e) {
                        return C(e.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                    },
                },
            },
        }),
            (b.removeEvent = function (e, t, i) {
                e.removeEventListener && e.removeEventListener(t, i);
            }),
            (b.Event = function (e, t) {
                if (!(this instanceof b.Event)) return new b.Event(e, t);
                e && e.type
                    ? ((this.originalEvent = e),
                      (this.type = e.type),
                      (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : xe),
                      (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                      (this.currentTarget = e.currentTarget),
                      (this.relatedTarget = e.relatedTarget))
                    : (this.type = e),
                    t && b.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                    (this[b.expando] = !0);
            }),
            (b.Event.prototype = {
                constructor: b.Event,
                isDefaultPrevented: xe,
                isPropagationStopped: xe,
                isImmediatePropagationStopped: xe,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                },
            }),
            b.each(
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
                        return null == e.which && _e.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && ve.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                    },
                },
                b.event.addProp
            ),
            b.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                b.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var i,
                            n = this,
                            r = e.relatedTarget,
                            a = e.handleObj;
                        return (r && (r === n || b.contains(n, r))) || ((e.type = a.origType), (i = a.handler.apply(this, arguments)), (e.type = t)), i;
                    },
                };
            }),
            b.fn.extend({
                on: function (e, t, i, n) {
                    return ke(this, e, t, i, n);
                },
                one: function (e, t, i, n) {
                    return ke(this, e, t, i, n, 1);
                },
                off: function (e, t, i) {
                    var n, r;
                    if (e && e.preventDefault && e.handleObj) return (n = e.handleObj), b(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this;
                    }
                    return (
                        (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
                        !1 === i && (i = xe),
                        this.each(function () {
                            b.event.remove(this, e, i, t);
                        })
                    );
                },
            });
        var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            je = /<script|<style|<link/i,
            Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function De(e, t) {
            return (C(e, "table") && C(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0]) || e;
        }
        function Ae(e) {
            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Ee(e) {
            return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
        }
        function Oe(e, t) {
            var i, n, r, a, o, s, l, p;
            if (1 === t.nodeType) {
                if (Y.hasData(e) && ((a = Y.access(e)), (o = Y.set(t, a)), (p = a.events))) for (r in (delete o.handle, (o.events = {}), p)) for (i = 0, n = p[r].length; i < n; i++) b.event.add(t, r, p[r][i]);
                K.hasData(e) && ((s = K.access(e)), (l = b.extend({}, s)), K.set(t, l));
            }
        }
        function Re(e, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && pe.test(e.type) ? (t.checked = e.checked) : ("input" !== i && "textarea" !== i) || (t.defaultValue = e.defaultValue);
        }
        function Me(e, t, i, n) {
            t = o.apply([], t);
            var r,
                a,
                s,
                l,
                p,
                m,
                h = 0,
                d = e.length,
                c = d - 1,
                g = t[0],
                y = f(g);
            if (y || (d > 1 && "string" == typeof g && !u.checkClone && Ce.test(g)))
                return e.each(function (r) {
                    var a = e.eq(r);
                    y && (t[0] = g.call(this, r, a.html())), Me(a, t, i, n);
                });
            if (d && ((a = (r = ge(t, e[0].ownerDocument, !1, e, n)).firstChild), 1 === r.childNodes.length && (r = a), a || n)) {
                for (l = (s = b.map(ce(r, "script"), Ae)).length; h < d; h++) (p = r), h !== c && ((p = b.clone(p, !0, !0)), l && b.merge(s, ce(p, "script"))), i.call(e[h], p, h);
                if (l)
                    for (m = s[s.length - 1].ownerDocument, b.map(s, Ee), h = 0; h < l; h++)
                        he.test((p = s[h]).type || "") && !Y.access(p, "globalEval") && b.contains(m, p) && (p.src && "module" !== (p.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(p.src) : _(p.textContent.replace(Pe, ""), m, p));
            }
            return e;
        }
        function $e(e, t, i) {
            for (var n, r = t ? b.filter(t, e) : e, a = 0; null != (n = r[a]); a++) i || 1 !== n.nodeType || b.cleanData(ce(n)), n.parentNode && (i && b.contains(n.ownerDocument, n) && ue(ce(n, "script")), n.parentNode.removeChild(n));
            return e;
        }
        b.extend({
            htmlPrefilter: function (e) {
                return e.replace(Se, "<$1></$2>");
            },
            clone: function (e, t, i) {
                var n,
                    r,
                    a,
                    o,
                    s = e.cloneNode(!0),
                    l = b.contains(e.ownerDocument, e);
                if (!(u.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || b.isXMLDoc(e))) for (o = ce(s), n = 0, r = (a = ce(e)).length; n < r; n++) Re(a[n], o[n]);
                if (t)
                    if (i) for (a = a || ce(e), o = o || ce(s), n = 0, r = a.length; n < r; n++) Oe(a[n], o[n]);
                    else Oe(e, s);
                return (o = ce(s, "script")).length > 0 && ue(o, !l && ce(e, "script")), s;
            },
            cleanData: function (e) {
                for (var t, i, n, r = b.event.special, a = 0; void 0 !== (i = e[a]); a++)
                    if (V(i)) {
                        if ((t = i[Y.expando])) {
                            if (t.events) for (n in t.events) r[n] ? b.event.remove(i, n) : b.removeEvent(i, n, t.handle);
                            i[Y.expando] = void 0;
                        }
                        i[K.expando] && (i[K.expando] = void 0);
                    }
            },
        }),
            b.fn.extend({
                detach: function (e) {
                    return $e(this, e, !0);
                },
                remove: function (e) {
                    return $e(this, e);
                },
                text: function (e) {
                    return H(
                        this,
                        function (e) {
                            return void 0 === e
                                ? b.text(this)
                                : this.empty().each(function () {
                                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                  });
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                append: function () {
                    return Me(this, arguments, function (e) {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || De(this, e).appendChild(e);
                    });
                },
                prepend: function () {
                    return Me(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = De(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    });
                },
                before: function () {
                    return Me(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                },
                after: function () {
                    return Me(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(ce(e, !1)), (e.textContent = ""));
                    return this;
                },
                clone: function (e, t) {
                    return (
                        (e = null != e && e),
                        (t = null == t ? e : t),
                        this.map(function () {
                            return b.clone(this, e, t);
                        })
                    );
                },
                html: function (e) {
                    return H(
                        this,
                        function (e) {
                            var t = this[0] || {},
                                i = 0,
                                n = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !je.test(e) && !de[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = b.htmlPrefilter(e);
                                try {
                                    for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (b.cleanData(ce(t, !1)), (t.innerHTML = e));
                                    t = 0;
                                } catch (e) {}
                            }
                            t && this.empty().append(e);
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var e = [];
                    return Me(
                        this,
                        arguments,
                        function (t) {
                            var i = this.parentNode;
                            b.inArray(this, e) < 0 && (b.cleanData(ce(this)), i && i.replaceChild(t, this));
                        },
                        e
                    );
                },
            }),
            b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                b.fn[e] = function (e) {
                    for (var i, n = [], r = b(e), a = r.length - 1, o = 0; o <= a; o++) (i = o === a ? this : this.clone(!0)), b(r[o])[t](i), s.apply(n, i.get());
                    return this.pushStack(n);
                };
            });
        var Ne = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
            Le = function (t) {
                var i = t.ownerDocument.defaultView;
                return (i && i.opener) || (i = e), i.getComputedStyle(t);
            },
            Ie = new RegExp(ie.join("|"), "i");
        function ze(e, t, i) {
            var n,
                r,
                a,
                o,
                s = e.style;
            return (
                (i = i || Le(e)) &&
                    ("" !== (o = i.getPropertyValue(t) || i[t]) || b.contains(e.ownerDocument, e) || (o = b.style(e, t)),
                    !u.pixelBoxStyles() && Ne.test(o) && Ie.test(t) && ((n = s.width), (r = s.minWidth), (a = s.maxWidth), (s.minWidth = s.maxWidth = s.width = o), (o = i.width), (s.width = n), (s.minWidth = r), (s.maxWidth = a))),
                void 0 !== o ? o + "" : o
            );
        }
        function Fe(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get;
                },
            };
        }
        !(function () {
            function t() {
                if (m) {
                    (p.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                        (m.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                        ye.appendChild(p).appendChild(m);
                    var t = e.getComputedStyle(m);
                    (r = "1%" !== t.top),
                        (l = 12 === i(t.marginLeft)),
                        (m.style.right = "60%"),
                        (s = 36 === i(t.right)),
                        (a = 36 === i(t.width)),
                        (m.style.position = "absolute"),
                        (o = 36 === m.offsetWidth || "absolute"),
                        ye.removeChild(p),
                        (m = null);
                }
            }
            function i(e) {
                return Math.round(parseFloat(e));
            }
            var r,
                a,
                o,
                s,
                l,
                p = n.createElement("div"),
                m = n.createElement("div");
            m.style &&
                ((m.style.backgroundClip = "content-box"),
                (m.cloneNode(!0).style.backgroundClip = ""),
                (u.clearCloneStyle = "content-box" === m.style.backgroundClip),
                b.extend(u, {
                    boxSizingReliable: function () {
                        return t(), a;
                    },
                    pixelBoxStyles: function () {
                        return t(), s;
                    },
                    pixelPosition: function () {
                        return t(), r;
                    },
                    reliableMarginLeft: function () {
                        return t(), l;
                    },
                    scrollboxSize: function () {
                        return t(), o;
                    },
                }));
        })();
        var Be = /^(none|table(?!-c[ea]).+)/,
            He = /^--/,
            qe = { position: "absolute", visibility: "hidden", display: "block" },
            Ue = { letterSpacing: "0", fontWeight: "400" },
            We = ["Webkit", "Moz", "ms"],
            Xe = n.createElement("div").style;
        function Ve(e) {
            var t = b.cssProps[e];
            return (
                t ||
                    (t = b.cssProps[e] =
                        (function (e) {
                            if (e in Xe) return e;
                            for (var t = e[0].toUpperCase() + e.slice(1), i = We.length; i--; ) if ((e = We[i] + t) in Xe) return e;
                        })(e) || e),
                t
            );
        }
        function Ge(e, t, i) {
            var n = te.exec(t);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
        }
        function Ye(e, t, i, n, r, a) {
            var o = "width" === t ? 1 : 0,
                s = 0,
                l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
                "margin" === i && (l += b.css(e, i + ie[o], !0, r)),
                    n
                        ? ("content" === i && (l -= b.css(e, "padding" + ie[o], !0, r)), "margin" !== i && (l -= b.css(e, "border" + ie[o] + "Width", !0, r)))
                        : ((l += b.css(e, "padding" + ie[o], !0, r)), "padding" !== i ? (l += b.css(e, "border" + ie[o] + "Width", !0, r)) : (s += b.css(e, "border" + ie[o] + "Width", !0, r)));
            return !n && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - 0.5))), l;
        }
        function Ke(e, t, i) {
            var n = Le(e),
                r = ze(e, t, n),
                a = "border-box" === b.css(e, "boxSizing", !1, n),
                o = a;
            if (Ne.test(r)) {
                if (!i) return r;
                r = "auto";
            }
            return (
                (o = o && (u.boxSizingReliable() || r === e.style[t])),
                ("auto" === r || (!parseFloat(r) && "inline" === b.css(e, "display", !1, n))) && ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = !0)),
                (r = parseFloat(r) || 0) + Ye(e, t, i || (a ? "border" : "content"), o, n, r) + "px"
            );
        }
        function Je(e, t, i, n, r) {
            return new Je.prototype.init(e, t, i, n, r);
        }
        b.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var i = ze(e, "opacity");
                            return "" === i ? "1" : i;
                        }
                    },
                },
            },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: {},
            style: function (e, t, i, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r,
                        a,
                        o,
                        s = X(t),
                        l = He.test(t),
                        p = e.style;
                    if ((l || (t = Ve(s)), (o = b.cssHooks[t] || b.cssHooks[s]), void 0 === i)) return o && "get" in o && void 0 !== (r = o.get(e, !1, n)) ? r : p[t];
                    "string" == (a = typeof i) && (r = te.exec(i)) && r[1] && ((i = ae(e, t, r)), (a = "number")),
                        null != i &&
                            i == i &&
                            ("number" === a && (i += (r && r[3]) || (b.cssNumber[s] ? "" : "px")),
                            u.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (p[t] = "inherit"),
                            (o && "set" in o && void 0 === (i = o.set(e, i, n))) || (l ? p.setProperty(t, i) : (p[t] = i)));
                }
            },
            css: function (e, t, i, n) {
                var r,
                    a,
                    o,
                    s = X(t);
                return (
                    He.test(t) || (t = Ve(s)),
                    (o = b.cssHooks[t] || b.cssHooks[s]) && "get" in o && (r = o.get(e, !0, i)),
                    void 0 === r && (r = ze(e, t, n)),
                    "normal" === r && t in Ue && (r = Ue[t]),
                    "" === i || i ? ((a = parseFloat(r)), !0 === i || isFinite(a) ? a || 0 : r) : r
                );
            },
        }),
            b.each(["height", "width"], function (e, t) {
                b.cssHooks[t] = {
                    get: function (e, i, n) {
                        if (i)
                            return !Be.test(b.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                ? Ke(e, t, n)
                                : re(e, qe, function () {
                                      return Ke(e, t, n);
                                  });
                    },
                    set: function (e, i, n) {
                        var r,
                            a = Le(e),
                            o = "border-box" === b.css(e, "boxSizing", !1, a),
                            s = n && Ye(e, t, n, o, a);
                        return (
                            o && u.scrollboxSize() === a.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Ye(e, t, "border", !1, a) - 0.5)),
                            s && (r = te.exec(i)) && "px" !== (r[3] || "px") && ((e.style[t] = i), (i = b.css(e, t))),
                            Ge(0, i, s)
                        );
                    },
                };
            }),
            (b.cssHooks.marginLeft = Fe(u.reliableMarginLeft, function (e, t) {
                if (t)
                    return (
                        (parseFloat(ze(e, "marginLeft")) ||
                            e.getBoundingClientRect().left -
                                re(e, { marginLeft: 0 }, function () {
                                    return e.getBoundingClientRect().left;
                                })) + "px"
                    );
            })),
            b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                (b.cssHooks[e + t] = {
                    expand: function (i) {
                        for (var n = 0, r = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + ie[n] + t] = a[n] || a[n - 2] || a[0];
                        return r;
                    },
                }),
                    "margin" !== e && (b.cssHooks[e + t].set = Ge);
            }),
            b.fn.extend({
                css: function (e, t) {
                    return H(
                        this,
                        function (e, t, i) {
                            var n,
                                r,
                                a = {},
                                o = 0;
                            if (Array.isArray(t)) {
                                for (n = Le(e), r = t.length; o < r; o++) a[t[o]] = b.css(e, t[o], !1, n);
                                return a;
                            }
                            return void 0 !== i ? b.style(e, t, i) : b.css(e, t);
                        },
                        e,
                        t,
                        arguments.length > 1
                    );
                },
            }),
            (b.Tween = Je),
            ((Je.prototype = {
                constructor: Je,
                init: function (e, t, i, n, r, a) {
                    (this.elem = e), (this.prop = i), (this.easing = r || b.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = n), (this.unit = a || (b.cssNumber[i] ? "" : "px"));
                },
                cur: function () {
                    var e = Je.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
                },
                run: function (e) {
                    var t,
                        i = Je.propHooks[this.prop];
                    return (
                        (this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e),
                        (this.now = (this.end - this.start) * t + this.start),
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        i && i.set ? i.set(this) : Je.propHooks._default.set(this),
                        this
                    );
                },
            }).init.prototype = Je.prototype),
            ((Je.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                    },
                    set: function (e) {
                        b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : b.style(e.elem, e.prop, e.now + e.unit);
                    },
                },
            }).scrollTop = Je.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
            }),
            (b.easing = {
                linear: function (e) {
                    return e;
                },
                swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing",
            }),
            (b.fx = Je.prototype.init),
            (b.fx.step = {});
        var Qe,
            Ze,
            et = /^(?:toggle|show|hide)$/,
            tt = /queueHooks$/;
        function it() {
            Ze && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, b.fx.interval), b.fx.tick());
        }
        function nt() {
            return (
                e.setTimeout(function () {
                    Qe = void 0;
                }),
                (Qe = Date.now())
            );
        }
        function rt(e, t) {
            var i,
                n = 0,
                r = { height: e };
            for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = ie[n])] = r["padding" + i] = e;
            return t && (r.opacity = r.width = e), r;
        }
        function at(e, t, i) {
            for (var n, r = (ot.tweeners[t] || []).concat(ot.tweeners["*"]), a = 0, o = r.length; a < o; a++) if ((n = r[a].call(i, t, e))) return n;
        }
        function ot(e, t, i) {
            var n,
                r,
                a = 0,
                o = ot.prefilters.length,
                s = b.Deferred().always(function () {
                    delete l.elem;
                }),
                l = function () {
                    if (r) return !1;
                    for (var t = Qe || nt(), i = Math.max(0, p.startTime + p.duration - t), n = 1 - (i / p.duration || 0), a = 0, o = p.tweens.length; a < o; a++) p.tweens[a].run(n);
                    return s.notifyWith(e, [p, n, i]), n < 1 && o ? i : (o || s.notifyWith(e, [p, 1, 0]), s.resolveWith(e, [p]), !1);
                },
                p = s.promise({
                    elem: e,
                    props: b.extend({}, t),
                    opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, i),
                    originalProperties: t,
                    originalOptions: i,
                    startTime: Qe || nt(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (t, i) {
                        var n = b.Tween(e, p.opts, t, i, p.opts.specialEasing[t] || p.opts.easing);
                        return p.tweens.push(n), n;
                    },
                    stop: function (t) {
                        var i = 0,
                            n = t ? p.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i < n; i++) p.tweens[i].run(1);
                        return t ? (s.notifyWith(e, [p, 1, 0]), s.resolveWith(e, [p, t])) : s.rejectWith(e, [p, t]), this;
                    },
                }),
                m = p.props;
            for (
                (function (e, t) {
                    var i, n, r, a, o;
                    for (i in e)
                        if (((r = t[(n = X(i))]), (a = e[i]), Array.isArray(a) && ((r = a[1]), (a = e[i] = a[0])), i !== n && ((e[n] = a), delete e[i]), (o = b.cssHooks[n]) && ("expand" in o)))
                            for (i in ((a = o.expand(a)), delete e[n], a)) (i in e) || ((e[i] = a[i]), (t[i] = r));
                        else t[n] = r;
                })(m, p.opts.specialEasing);
                a < o;
                a++
            )
                if ((n = ot.prefilters[a].call(p, e, m, p.opts))) return f(n.stop) && (b._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)), n;
            return (
                b.map(m, at, p),
                f(p.opts.start) && p.opts.start.call(e, p),
                p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always),
                b.fx.timer(b.extend(l, { elem: e, anim: p, queue: p.opts.queue })),
                p
            );
        }
        (b.Animation = b.extend(ot, {
            tweeners: {
                "*": [
                    function (e, t) {
                        var i = this.createTween(e, t);
                        return ae(i.elem, e, te.exec(t), i), i;
                    },
                ],
            },
            tweener: function (e, t) {
                f(e) ? ((t = e), (e = ["*"])) : (e = e.match($));
                for (var i, n = 0, r = e.length; n < r; n++) (ot.tweeners[(i = e[n])] = ot.tweeners[i] || []).unshift(t);
            },
            prefilters: [
                function (e, t, i) {
                    var n,
                        r,
                        a,
                        o,
                        s,
                        l,
                        p,
                        m,
                        h = "width" in t || "height" in t,
                        d = this,
                        c = {},
                        u = e.style,
                        f = e.nodeType && ne(e),
                        g = Y.get(e, "fxshow");
                    for (n in (i.queue ||
                        (null == (o = b._queueHooks(e, "fx")).unqueued &&
                            ((o.unqueued = 0),
                            (s = o.empty.fire),
                            (o.empty.fire = function () {
                                o.unqueued || s();
                            })),
                        o.unqueued++,
                        d.always(function () {
                            d.always(function () {
                                o.unqueued--, b.queue(e, "fx").length || o.empty.fire();
                            });
                        })),
                    t))
                        if (et.test((r = t[n]))) {
                            if ((delete t[n], (a = a || "toggle" === r), r === (f ? "hide" : "show"))) {
                                if ("show" !== r || !g || void 0 === g[n]) continue;
                                f = !0;
                            }
                            c[n] = (g && g[n]) || b.style(e, n);
                        }
                    if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(c))
                        for (n in (h &&
                            1 === e.nodeType &&
                            ((i.overflow = [u.overflow, u.overflowX, u.overflowY]),
                            null == (p = g && g.display) && (p = Y.get(e, "display")),
                            "none" === (m = b.css(e, "display")) && (p ? (m = p) : (le([e], !0), (p = e.style.display || p), (m = b.css(e, "display")), le([e]))),
                            ("inline" === m || ("inline-block" === m && null != p)) &&
                                "none" === b.css(e, "float") &&
                                (l ||
                                    (d.done(function () {
                                        u.display = p;
                                    }),
                                    null == p && (p = "none" === (m = u.display) ? "" : m)),
                                (u.display = "inline-block"))),
                        i.overflow &&
                            ((u.overflow = "hidden"),
                            d.always(function () {
                                (u.overflow = i.overflow[0]), (u.overflowX = i.overflow[1]), (u.overflowY = i.overflow[2]);
                            })),
                        (l = !1),
                        c))
                            l ||
                                (g ? "hidden" in g && (f = g.hidden) : (g = Y.access(e, "fxshow", { display: p })),
                                a && (g.hidden = !f),
                                f && le([e], !0),
                                d.done(function () {
                                    for (n in (f || le([e]), Y.remove(e, "fxshow"), c)) b.style(e, n, c[n]);
                                })),
                                (l = at(f ? g[n] : 0, n, d)),
                                n in g || ((g[n] = l.start), f && ((l.end = l.start), (l.start = 0)));
                },
            ],
            prefilter: function (e, t) {
                t ? ot.prefilters.unshift(e) : ot.prefilters.push(e);
            },
        })),
            (b.speed = function (e, t, i) {
                var n = e && "object" == typeof e ? b.extend({}, e) : { complete: i || (!i && t) || (f(e) && e), duration: e, easing: (i && t) || (t && !f(t) && t) };
                return (
                    b.fx.off ? (n.duration = 0) : "number" != typeof n.duration && (n.duration = n.duration in b.fx.speeds ? b.fx.speeds[n.duration] : b.fx.speeds._default),
                    (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                    (n.old = n.complete),
                    (n.complete = function () {
                        f(n.old) && n.old.call(this), n.queue && b.dequeue(this, n.queue);
                    }),
                    n
                );
            }),
            b.fn.extend({
                fadeTo: function (e, t, i, n) {
                    return this.filter(ne).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n);
                },
                animate: function (e, t, i, n) {
                    var r = b.isEmptyObject(e),
                        a = b.speed(t, i, n),
                        o = function () {
                            var t = ot(this, b.extend({}, e), a);
                            (r || Y.get(this, "finish")) && t.stop(!0);
                        };
                    return (o.finish = o), r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o);
                },
                stop: function (e, t, i) {
                    var n = function (e) {
                        var t = e.stop;
                        delete e.stop, t(i);
                    };
                    return (
                        "string" != typeof e && ((i = t), (t = e), (e = void 0)),
                        t && !1 !== e && this.queue(e || "fx", []),
                        this.each(function () {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                a = b.timers,
                                o = Y.get(this);
                            if (r) o[r] && o[r].stop && n(o[r]);
                            else for (r in o) o[r] && o[r].stop && tt.test(r) && n(o[r]);
                            for (r = a.length; r--; ) a[r].elem !== this || (null != e && a[r].queue !== e) || (a[r].anim.stop(i), (t = !1), a.splice(r, 1));
                            (!t && i) || b.dequeue(this, e);
                        })
                    );
                },
                finish: function (e) {
                    return (
                        !1 !== e && (e = e || "fx"),
                        this.each(function () {
                            var t,
                                i = Y.get(this),
                                n = i[e + "queue"],
                                r = i[e + "queueHooks"],
                                a = b.timers,
                                o = n ? n.length : 0;
                            for (i.finish = !0, b.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--; ) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                            for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                            delete i.finish;
                        })
                    );
                },
            }),
            b.each(["toggle", "show", "hide"], function (e, t) {
                var i = b.fn[t];
                b.fn[t] = function (e, n, r) {
                    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(rt(t, !0), e, n, r);
                };
            }),
            b.each({ slideDown: rt("show"), slideUp: rt("hide"), slideToggle: rt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                b.fn[e] = function (e, i, n) {
                    return this.animate(t, e, i, n);
                };
            }),
            (b.timers = []),
            (b.fx.tick = function () {
                var e,
                    t = 0,
                    i = b.timers;
                for (Qe = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
                i.length || b.fx.stop(), (Qe = void 0);
            }),
            (b.fx.timer = function (e) {
                b.timers.push(e), b.fx.start();
            }),
            (b.fx.interval = 13),
            (b.fx.start = function () {
                Ze || ((Ze = !0), it());
            }),
            (b.fx.stop = function () {
                Ze = null;
            }),
            (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (b.fn.delay = function (t, i) {
                return (
                    (t = (b.fx && b.fx.speeds[t]) || t),
                    this.queue((i = i || "fx"), function (i, n) {
                        var r = e.setTimeout(i, t);
                        n.stop = function () {
                            e.clearTimeout(r);
                        };
                    })
                );
            }),
            (function () {
                var e = n.createElement("input"),
                    t = n.createElement("select").appendChild(n.createElement("option"));
                (e.type = "checkbox"), (u.checkOn = "" !== e.value), (u.optSelected = t.selected), ((e = n.createElement("input")).value = "t"), (e.type = "radio"), (u.radioValue = "t" === e.value);
            })();
        var st,
            lt = b.expr.attrHandle;
        b.fn.extend({
            attr: function (e, t) {
                return H(this, b.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
                return this.each(function () {
                    b.removeAttr(this, e);
                });
            },
        }),
            b.extend({
                attr: function (e, t, i) {
                    var n,
                        r,
                        a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a)
                        return void 0 === e.getAttribute
                            ? b.prop(e, t, i)
                            : ((1 === a && b.isXMLDoc(e)) || (r = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? st : void 0)),
                              void 0 !== i
                                  ? null === i
                                      ? void b.removeAttr(e, t)
                                      : r && "set" in r && void 0 !== (n = r.set(e, i, t))
                                      ? n
                                      : (e.setAttribute(t, i + ""), i)
                                  : r && "get" in r && null !== (n = r.get(e, t))
                                  ? n
                                  : null == (n = b.find.attr(e, t))
                                  ? void 0
                                  : n);
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!u.radioValue && "radio" === t && C(e, "input")) {
                                var i = e.value;
                                return e.setAttribute("type", t), i && (e.value = i), t;
                            }
                        },
                    },
                },
                removeAttr: function (e, t) {
                    var i,
                        n = 0,
                        r = t && t.match($);
                    if (r && 1 === e.nodeType) for (; (i = r[n++]); ) e.removeAttribute(i);
                },
            }),
            (st = {
                set: function (e, t, i) {
                    return !1 === t ? b.removeAttr(e, i) : e.setAttribute(i, i), i;
                },
            }),
            b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var i = lt[t] || b.find.attr;
                lt[t] = function (e, t, n) {
                    var r,
                        a,
                        o = t.toLowerCase();
                    return n || ((a = lt[o]), (lt[o] = r), (r = null != i(e, t, n) ? o : null), (lt[o] = a)), r;
                };
            });
        var pt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
        function ht(e) {
            return (e.match($) || []).join(" ");
        }
        function dt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function ct(e) {
            return Array.isArray(e) ? e : ("string" == typeof e && e.match($)) || [];
        }
        b.fn.extend({
            prop: function (e, t) {
                return H(this, b.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[b.propFix[e] || e];
                });
            },
        }),
            b.extend({
                prop: function (e, t, i) {
                    var n,
                        r,
                        a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a)
                        return (
                            (1 === a && b.isXMLDoc(e)) || (r = b.propHooks[(t = b.propFix[t] || t)]),
                            void 0 !== i ? (r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e[t] = i)) : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = b.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : pt.test(e.nodeName) || (mt.test(e.nodeName) && e.href) ? 0 : -1;
                        },
                    },
                },
                propFix: { for: "htmlFor", class: "className" },
            }),
            u.optSelected ||
                (b.propHooks.selected = {
                    get: function (e) {
                        return null;
                    },
                    set: function (e) {},
                }),
            b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                b.propFix[this.toLowerCase()] = this;
            }),
            b.fn.extend({
                addClass: function (e) {
                    var t,
                        i,
                        n,
                        r,
                        a,
                        o,
                        s,
                        l = 0;
                    if (f(e))
                        return this.each(function (t) {
                            b(this).addClass(e.call(this, t, dt(this)));
                        });
                    if ((t = ct(e)).length)
                        for (; (i = this[l++]); )
                            if (((r = dt(i)), (n = 1 === i.nodeType && " " + ht(r) + " "))) {
                                for (o = 0; (a = t[o++]); ) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                                r !== (s = ht(n)) && i.setAttribute("class", s);
                            }
                    return this;
                },
                removeClass: function (e) {
                    var t,
                        i,
                        n,
                        r,
                        a,
                        o,
                        s,
                        l = 0;
                    if (f(e))
                        return this.each(function (t) {
                            b(this).removeClass(e.call(this, t, dt(this)));
                        });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = ct(e)).length)
                        for (; (i = this[l++]); )
                            if (((r = dt(i)), (n = 1 === i.nodeType && " " + ht(r) + " "))) {
                                for (o = 0; (a = t[o++]); ) for (; n.indexOf(" " + a + " ") > -1; ) n = n.replace(" " + a + " ", " ");
                                r !== (s = ht(n)) && i.setAttribute("class", s);
                            }
                    return this;
                },
                toggleClass: function (e, t) {
                    var i = typeof e,
                        n = "string" === i || Array.isArray(e);
                    return "boolean" == typeof t && n
                        ? t
                            ? this.addClass(e)
                            : this.removeClass(e)
                        : f(e)
                        ? this.each(function (i) {
                              b(this).toggleClass(e.call(this, i, dt(this), t), t);
                          })
                        : this.each(function () {
                              var t, r, a, o;
                              if (n) for (r = 0, a = b(this), o = ct(e); (t = o[r++]); ) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                              else (void 0 !== e && "boolean" !== i) || ((t = dt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""));
                          });
                },
                hasClass: function (e) {
                    var t,
                        i,
                        n = 0;
                    for (t = " " + e + " "; (i = this[n++]); ) if (1 === i.nodeType && (" " + ht(dt(i)) + " ").indexOf(t) > -1) return !0;
                    return !1;
                },
            });
        var ut = /\r/g;
        b.fn.extend({
            val: function (e) {
                var t,
                    i,
                    n,
                    r = this[0];
                return arguments.length
                    ? ((n = f(e)),
                      this.each(function (i) {
                          var r;
                          1 === this.nodeType &&
                              (null == (r = n ? e.call(this, i, b(this).val()) : e)
                                  ? (r = "")
                                  : "number" == typeof r
                                  ? (r += "")
                                  : Array.isArray(r) &&
                                    (r = b.map(r, function (e) {
                                        return null == e ? "" : e + "";
                                    })),
                              ((t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                      }))
                    : r
                    ? (t = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value"))
                        ? i
                        : "string" == typeof (i = r.value)
                        ? i.replace(ut, "")
                        : null == i
                        ? ""
                        : i
                    : void 0;
            },
        }),
            b.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = b.find.attr(e, "value");
                            return null != t ? t : ht(b.text(e));
                        },
                    },
                    select: {
                        get: function (e) {
                            var t,
                                i,
                                n,
                                r = e.options,
                                a = e.selectedIndex,
                                o = "select-one" === e.type,
                                s = o ? null : [],
                                l = o ? a + 1 : r.length;
                            for (n = a < 0 ? l : o ? a : 0; n < l; n++)
                                if (((i = r[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !C(i.parentNode, "optgroup"))) {
                                    if (((t = b(i).val()), o)) return t;
                                    s.push(t);
                                }
                            return s;
                        },
                        set: function (e, t) {
                            for (var i, n, r = e.options, a = b.makeArray(t), o = r.length; o--; ) ((n = r[o]).selected = b.inArray(b.valHooks.option.get(n), a) > -1) && (i = !0);
                            return i || (e.selectedIndex = -1), a;
                        },
                    },
                },
            }),
            b.each(["radio", "checkbox"], function () {
                (b.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return (e.checked = b.inArray(b(e).val(), t) > -1);
                    },
                }),
                    u.checkOn ||
                        (b.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value;
                        });
            }),
            (u.focusin = "onfocusin" in e);
        var ft = /^(?:focusinfocus|focusoutblur)$/,
            gt = function (e) {
                e.stopPropagation();
            };
        b.extend(b.event, {
            trigger: function (t, i, r, a) {
                var o,
                    s,
                    l,
                    p,
                    m,
                    d,
                    c,
                    u,
                    y = [r || n],
                    _ = h.call(t, "type") ? t.type : t,
                    v = h.call(t, "namespace") ? t.namespace.split(".") : [];
                if (
                    ((s = u = l = r = r || n),
                    3 !== r.nodeType &&
                        8 !== r.nodeType &&
                        !ft.test(_ + b.event.triggered) &&
                        (_.indexOf(".") > -1 && ((_ = (v = _.split(".")).shift()), v.sort()),
                        (m = _.indexOf(":") < 0 && "on" + _),
                        ((t = t[b.expando] ? t : new b.Event(_, "object" == typeof t && t)).isTrigger = a ? 2 : 3),
                        (t.namespace = v.join(".")),
                        (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (t.result = void 0),
                        t.target || (t.target = r),
                        (i = null == i ? [t] : b.makeArray(i, [t])),
                        (c = b.event.special[_] || {}),
                        a || !c.trigger || !1 !== c.trigger.apply(r, i)))
                ) {
                    if (!a && !c.noBubble && !g(r)) {
                        for (ft.test((p = c.delegateType || _) + _) || (s = s.parentNode); s; s = s.parentNode) y.push(s), (l = s);
                        l === (r.ownerDocument || n) && y.push(l.defaultView || l.parentWindow || e);
                    }
                    for (o = 0; (s = y[o++]) && !t.isPropagationStopped(); )
                        (u = s),
                            (t.type = o > 1 ? p : c.bindType || _),
                            (d = (Y.get(s, "events") || {})[t.type] && Y.get(s, "handle")) && d.apply(s, i),
                            (d = m && s[m]) && d.apply && V(s) && ((t.result = d.apply(s, i)), !1 === t.result && t.preventDefault());
                    return (
                        (t.type = _),
                        a ||
                            t.isDefaultPrevented() ||
                            (c._default && !1 !== c._default.apply(y.pop(), i)) ||
                            !V(r) ||
                            (m &&
                                f(r[_]) &&
                                !g(r) &&
                                ((l = r[m]) && (r[m] = null),
                                (b.event.triggered = _),
                                t.isPropagationStopped() && u.addEventListener(_, gt),
                                r[_](),
                                t.isPropagationStopped() && u.removeEventListener(_, gt),
                                (b.event.triggered = void 0),
                                l && (r[m] = l))),
                        t.result
                    );
                }
            },
            simulate: function (e, t, i) {
                var n = b.extend(new b.Event(), i, { type: e, isSimulated: !0 });
                b.event.trigger(n, null, t);
            },
        }),
            b.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        b.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var i = this[0];
                    if (i) return b.event.trigger(e, t, i, !0);
                },
            }),
            u.focusin ||
                b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                    var i = function (e) {
                        b.event.simulate(t, e.target, b.event.fix(e));
                    };
                    b.event.special[t] = {
                        setup: function () {
                            var n = this.ownerDocument || this,
                                r = Y.access(n, t);
                            r || n.addEventListener(e, i, !0), Y.access(n, t, (r || 0) + 1);
                        },
                        teardown: function () {
                            var n = this.ownerDocument || this,
                                r = Y.access(n, t) - 1;
                            r ? Y.access(n, t, r) : (n.removeEventListener(e, i, !0), Y.remove(n, t));
                        },
                    };
                });
        var yt = e.location,
            _t = Date.now(),
            vt = /\?/;
        b.parseXML = function (t) {
            var i;
            if (!t || "string" != typeof t) return null;
            try {
                i = new e.DOMParser().parseFromString(t, "text/xml");
            } catch (e) {
                i = void 0;
            }
            return (i && !i.getElementsByTagName("parsererror").length) || b.error("Invalid XML: " + t), i;
        };
        var bt = /\[\]$/,
            wt = /\r?\n/g,
            xt = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;
        function kt(e, t, i, n) {
            var r;
            if (Array.isArray(t))
                b.each(t, function (t, r) {
                    i || bt.test(e) ? n(e, r) : kt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n);
                });
            else if (i || "object" !== v(t)) n(e, t);
            else for (r in t) kt(e + "[" + r + "]", t[r], i, n);
        }
        (b.param = function (e, t) {
            var i,
                n = [],
                r = function (e, t) {
                    var i = f(t) ? t() : t;
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
                };
            if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
                b.each(e, function () {
                    r(this.name, this.value);
                });
            else for (i in e) kt(i, e[i], t, r);
            return n.join("&");
        }),
            b.fn.extend({
                serialize: function () {
                    return b.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = b.prop(this, "elements");
                        return e ? b.makeArray(e) : this;
                    })
                        .filter(function () {
                            var e = this.type;
                            return this.name && !b(this).is(":disabled") && Tt.test(this.nodeName) && !xt.test(e) && (this.checked || !pe.test(e));
                        })
                        .map(function (e, t) {
                            var i = b(this).val();
                            return null == i
                                ? null
                                : Array.isArray(i)
                                ? b.map(i, function (e) {
                                      return { name: t.name, value: e.replace(wt, "\r\n") };
                                  })
                                : { name: t.name, value: i.replace(wt, "\r\n") };
                        })
                        .get();
                },
            });
        var St = /%20/g,
            jt = /#.*$/,
            Ct = /([?&])_=[^&]*/,
            Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Dt = /^(?:GET|HEAD)$/,
            At = /^\/\//,
            Et = {},
            Ot = {},
            Rt = "*/".concat("*"),
            Mt = n.createElement("a");
        function $t(e) {
            return function (t, i) {
                "string" != typeof t && ((i = t), (t = "*"));
                var n,
                    r = 0,
                    a = t.toLowerCase().match($) || [];
                if (f(i)) for (; (n = a[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
            };
        }
        function Nt(e, t, i, n) {
            var r = {},
                a = e === Ot;
            function o(s) {
                var l;
                return (
                    (r[s] = !0),
                    b.each(e[s] || [], function (e, s) {
                        var p = s(t, i, n);
                        return "string" != typeof p || a || r[p] ? (a ? !(l = p) : void 0) : (t.dataTypes.unshift(p), o(p), !1);
                    }),
                    l
                );
            }
            return o(t.dataTypes[0]) || (!r["*"] && o("*"));
        }
        function Lt(e, t) {
            var i,
                n,
                r = b.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && b.extend(!0, e, n), e;
        }
        (Mt.href = yt.href),
            b.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: yt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": b.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (e, t) {
                    return t ? Lt(Lt(e, b.ajaxSettings), t) : Lt(b.ajaxSettings, e);
                },
                ajaxPrefilter: $t(Et),
                ajaxTransport: $t(Ot),
                ajax: function (t, i) {
                    "object" == typeof t && ((i = t), (t = void 0));
                    var r,
                        a,
                        o,
                        s,
                        l,
                        p,
                        m,
                        h,
                        d,
                        c,
                        u = b.ajaxSetup({}, (i = i || {})),
                        f = u.context || u,
                        g = u.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                        y = b.Deferred(),
                        _ = b.Callbacks("once memory"),
                        v = u.statusCode || {},
                        w = {},
                        x = {},
                        T = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (m) {
                                    if (!s) for (s = {}; (t = Pt.exec(o)); ) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()];
                                }
                                return null == t ? null : t;
                            },
                            getAllResponseHeaders: function () {
                                return m ? o : null;
                            },
                            setRequestHeader: function (e, t) {
                                return null == m && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
                            },
                            overrideMimeType: function (e) {
                                return null == m && (u.mimeType = e), this;
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (m) k.always(e[k.status]);
                                    else for (t in e) v[t] = [v[t], e[t]];
                                return this;
                            },
                            abort: function (e) {
                                var t = e || T;
                                return r && r.abort(t), S(0, t), this;
                            },
                        };
                    if (
                        (y.promise(k),
                        (u.url = ((t || u.url || yt.href) + "").replace(At, yt.protocol + "//")),
                        (u.type = i.method || i.type || u.method || u.type),
                        (u.dataTypes = (u.dataType || "*").toLowerCase().match($) || [""]),
                        null == u.crossDomain)
                    ) {
                        p = n.createElement("a");
                        try {
                            (p.href = u.url), (p.href = p.href), (u.crossDomain = Mt.protocol + "//" + Mt.host != p.protocol + "//" + p.host);
                        } catch (e) {
                            u.crossDomain = !0;
                        }
                    }
                    if ((u.data && u.processData && "string" != typeof u.data && (u.data = b.param(u.data, u.traditional)), Nt(Et, u, i, k), m)) return k;
                    for (d in ((h = b.event && u.global) && 0 == b.active++ && b.event.trigger("ajaxStart"),
                    (u.type = u.type.toUpperCase()),
                    (u.hasContent = !Dt.test(u.type)),
                    (a = u.url.replace(jt, "")),
                    u.hasContent
                        ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(St, "+"))
                        : ((c = u.url.slice(a.length)),
                          u.data && (u.processData || "string" == typeof u.data) && ((a += (vt.test(a) ? "&" : "?") + u.data), delete u.data),
                          !1 === u.cache && ((a = a.replace(Ct, "$1")), (c = (vt.test(a) ? "&" : "?") + "_=" + _t++ + c)),
                          (u.url = a + c)),
                    u.ifModified && (b.lastModified[a] && k.setRequestHeader("If-Modified-Since", b.lastModified[a]), b.etag[a] && k.setRequestHeader("If-None-Match", b.etag[a])),
                    ((u.data && u.hasContent && !1 !== u.contentType) || i.contentType) && k.setRequestHeader("Content-Type", u.contentType),
                    k.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : u.accepts["*"]),
                    u.headers))
                        k.setRequestHeader(d, u.headers[d]);
                    if (u.beforeSend && (!1 === u.beforeSend.call(f, k, u) || m)) return k.abort();
                    if (((T = "abort"), _.add(u.complete), k.done(u.success), k.fail(u.error), (r = Nt(Ot, u, i, k)))) {
                        if (((k.readyState = 1), h && g.trigger("ajaxSend", [k, u]), m)) return k;
                        u.async &&
                            u.timeout > 0 &&
                            (l = e.setTimeout(function () {
                                k.abort("timeout");
                            }, u.timeout));
                        try {
                            (m = !1), r.send(w, S);
                        } catch (e) {
                            if (m) throw e;
                            S(-1, e);
                        }
                    } else S(-1, "No Transport");
                    function S(t, i, n, s) {
                        var p,
                            d,
                            c,
                            w,
                            x,
                            T = i;
                        m ||
                            ((m = !0),
                            l && e.clearTimeout(l),
                            (r = void 0),
                            (o = s || ""),
                            (k.readyState = t > 0 ? 4 : 0),
                            (p = (t >= 200 && t < 300) || 304 === t),
                            n &&
                                (w = (function (e, t, i) {
                                    for (var n, r, a, o, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (n)
                                        for (r in s)
                                            if (s[r] && s[r].test(n)) {
                                                l.unshift(r);
                                                break;
                                            }
                                    if (l[0] in i) a = l[0];
                                    else {
                                        for (r in i) {
                                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                                a = r;
                                                break;
                                            }
                                            o || (o = r);
                                        }
                                        a = a || o;
                                    }
                                    if (a) return a !== l[0] && l.unshift(a), i[a];
                                })(u, k, n)),
                            (w = (function (e, t, i, n) {
                                var r,
                                    a,
                                    o,
                                    s,
                                    l,
                                    p = {},
                                    m = e.dataTypes.slice();
                                if (m[1]) for (o in e.converters) p[o.toLowerCase()] = e.converters[o];
                                for (a = m.shift(); a; )
                                    if ((e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = a), (a = m.shift())))
                                        if ("*" === a) a = l;
                                        else if ("*" !== l && l !== a) {
                                            if (!(o = p[l + " " + a] || p["* " + a]))
                                                for (r in p)
                                                    if ((s = r.split(" "))[1] === a && (o = p[l + " " + s[0]] || p["* " + s[0]])) {
                                                        !0 === o ? (o = p[r]) : !0 !== p[r] && ((a = s[0]), m.unshift(s[1]));
                                                        break;
                                                    }
                                            if (!0 !== o)
                                                if (o && e.throws) t = o(t);
                                                else
                                                    try {
                                                        t = o(t);
                                                    } catch (e) {
                                                        return { state: "parsererror", error: o ? e : "No conversion from " + l + " to " + a };
                                                    }
                                        }
                                return { state: "success", data: t };
                            })(u, w, k, p)),
                            p
                                ? (u.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (b.lastModified[a] = x), (x = k.getResponseHeader("etag")) && (b.etag[a] = x)),
                                  204 === t || "HEAD" === u.type ? (T = "nocontent") : 304 === t ? (T = "notmodified") : ((T = w.state), (d = w.data), (p = !(c = w.error))))
                                : ((c = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                            (k.status = t),
                            (k.statusText = (i || T) + ""),
                            p ? y.resolveWith(f, [d, T, k]) : y.rejectWith(f, [k, T, c]),
                            k.statusCode(v),
                            (v = void 0),
                            h && g.trigger(p ? "ajaxSuccess" : "ajaxError", [k, u, p ? d : c]),
                            _.fireWith(f, [k, T]),
                            h && (g.trigger("ajaxComplete", [k, u]), --b.active || b.event.trigger("ajaxStop")));
                    }
                    return k;
                },
                getJSON: function (e, t, i) {
                    return b.get(e, t, i, "json");
                },
                getScript: function (e, t) {
                    return b.get(e, void 0, t, "script");
                },
            }),
            b.each(["get", "post"], function (e, t) {
                b[t] = function (e, i, n, r) {
                    return f(i) && ((r = r || n), (n = i), (i = void 0)), b.ajax(b.extend({ url: e, type: t, dataType: r, data: i, success: n }, b.isPlainObject(e) && e));
                };
            }),
            (b._evalUrl = function (e) {
                return b.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
            }),
            b.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return (
                        this[0] &&
                            (f(e) && (e = e.call(this[0])),
                            (t = b(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                    return f(e)
                        ? this.each(function (t) {
                              b(this).wrapInner(e.call(this, t));
                          })
                        : this.each(function () {
                              var t = b(this),
                                  i = t.contents();
                              i.length ? i.wrapAll(e) : t.append(e);
                          });
                },
                wrap: function (e) {
                    var t = f(e);
                    return this.each(function (i) {
                        b(this).wrapAll(t ? e.call(this, i) : e);
                    });
                },
                unwrap: function (e) {
                    return (
                        this.parent(e)
                            .not("body")
                            .each(function () {
                                b(this).replaceWith(this.childNodes);
                            }),
                        this
                    );
                },
            }),
            (b.expr.pseudos.hidden = function (e) {
                return !b.expr.pseudos.visible(e);
            }),
            (b.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }),
            (b.ajaxSettings.xhr = function () {
                try {
                    return new e.XMLHttpRequest();
                } catch (e) {}
            });
        var It = { 0: 200, 1223: 204 },
            zt = b.ajaxSettings.xhr();
        (u.cors = !!zt && "withCredentials" in zt),
            (u.ajax = zt = !!zt),
            b.ajaxTransport(function (t) {
                var i, n;
                if (u.cors || (zt && !t.crossDomain))
                    return {
                        send: function (r, a) {
                            var o,
                                s = t.xhr();
                            if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (o in t.xhrFields) s[o] = t.xhrFields[o];
                            for (o in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) s.setRequestHeader(o, r[o]);
                            (i = function (e) {
                                return function () {
                                    i &&
                                        ((i = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                        "abort" === e
                                            ? s.abort()
                                            : "error" === e
                                            ? "number" != typeof s.status
                                                ? a(0, "error")
                                                : a(s.status, s.statusText)
                                            : a(
                                                  It[s.status] || s.status,
                                                  s.statusText,
                                                  "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                  s.getAllResponseHeaders()
                                              ));
                                };
                            }),
                                (s.onload = i()),
                                (n = s.onerror = s.ontimeout = i("error")),
                                void 0 !== s.onabort
                                    ? (s.onabort = n)
                                    : (s.onreadystatechange = function () {
                                          4 === s.readyState &&
                                              e.setTimeout(function () {
                                                  i && n();
                                              });
                                      }),
                                (i = i("abort"));
                            try {
                                s.send((t.hasContent && t.data) || null);
                            } catch (e) {
                                if (i) throw e;
                            }
                        },
                        abort: function () {
                            i && i();
                        },
                    };
            }),
            b.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
            }),
            b.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (e) {
                        return b.globalEval(e), e;
                    },
                },
            }),
            b.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            b.ajaxTransport("script", function (e) {
                var t, i;
                if (e.crossDomain)
                    return {
                        send: function (r, a) {
                            (t = b("<script>")
                                .prop({ charset: e.scriptCharset, src: e.url })
                                .on(
                                    "load error",
                                    (i = function (e) {
                                        t.remove(), (i = null), e && a("error" === e.type ? 404 : 200, e.type);
                                    })
                                )),
                                n.head.appendChild(t[0]);
                        },
                        abort: function () {
                            i && i();
                        },
                    };
            });
        var Ft = [],
            Bt = /(=)\?(?=&|$)|\?\?/;
        b.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Ft.pop() || b.expando + "_" + _t++;
                return (this[e] = !0), e;
            },
        }),
            b.ajaxPrefilter("json jsonp", function (t, i, n) {
                var r,
                    a,
                    o,
                    s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0])
                    return (
                        (r = t.jsonpCallback = f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                        s ? (t[s] = t[s].replace(Bt, "$1" + r)) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                        (t.converters["script json"] = function () {
                            return o || b.error(r + " was not called"), o[0];
                        }),
                        (t.dataTypes[0] = "json"),
                        (a = e[r]),
                        (e[r] = function () {
                            o = arguments;
                        }),
                        n.always(function () {
                            void 0 === a ? b(e).removeProp(r) : (e[r] = a), t[r] && ((t.jsonpCallback = i.jsonpCallback), Ft.push(r)), o && f(a) && a(o[0]), (o = a = void 0);
                        }),
                        "script"
                    );
            }),
            (u.createHTMLDocument = (function () {
                var e = n.implementation.createHTMLDocument("").body;
                return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
            })()),
            (b.parseHTML = function (e, t, i) {
                return "string" != typeof e
                    ? []
                    : ("boolean" == typeof t && ((i = t), (t = !1)),
                      t || (u.createHTMLDocument ? (((r = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href), t.head.appendChild(r)) : (t = n)),
                      (o = !i && []),
                      (a = P.exec(e)) ? [t.createElement(a[1])] : ((a = ge([e], t, o)), o && o.length && b(o).remove(), b.merge([], a.childNodes)));
                var r, a, o;
            }),
            (b.fn.load = function (e, t, i) {
                var n,
                    r,
                    a,
                    o = this,
                    s = e.indexOf(" ");
                return (
                    s > -1 && ((n = ht(e.slice(s))), (e = e.slice(0, s))),
                    f(t) ? ((i = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                    o.length > 0 &&
                        b
                            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                            .done(function (e) {
                                (a = arguments), o.html(n ? b("<div>").append(b.parseHTML(e)).find(n) : e);
                            })
                            .always(
                                i &&
                                    function (e, t) {
                                        o.each(function () {
                                            i.apply(this, a || [e.responseText, t, e]);
                                        });
                                    }
                            ),
                    this
                );
            }),
            b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                b.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }),
            (b.expr.pseudos.animated = function (e) {
                return b.grep(b.timers, function (t) {
                    return e === t.elem;
                }).length;
            }),
            (b.offset = {
                setOffset: function (e, t, i) {
                    var n,
                        r,
                        a,
                        o,
                        s,
                        l,
                        p = b.css(e, "position"),
                        m = b(e),
                        h = {};
                    "static" === p && (e.style.position = "relative"),
                        (s = m.offset()),
                        (a = b.css(e, "top")),
                        (l = b.css(e, "left")),
                        ("absolute" === p || "fixed" === p) && (a + l).indexOf("auto") > -1 ? ((o = (n = m.position()).top), (r = n.left)) : ((o = parseFloat(a) || 0), (r = parseFloat(l) || 0)),
                        f(t) && (t = t.call(e, i, b.extend({}, s))),
                        null != t.top && (h.top = t.top - s.top + o),
                        null != t.left && (h.left = t.left - s.left + r),
                        "using" in t ? t.using.call(e, h) : m.css(h);
                },
            }),
            b.fn.extend({
                offset: function (e) {
                    if (arguments.length)
                        return void 0 === e
                            ? this
                            : this.each(function (t) {
                                  b.offset.setOffset(this, e, t);
                              });
                    var t,
                        i,
                        n = this[0];
                    return n ? (n.getClientRects().length ? { top: (t = n.getBoundingClientRect()).top + (i = n.ownerDocument.defaultView).pageYOffset, left: t.left + i.pageXOffset } : { top: 0, left: 0 }) : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            i,
                            n = this[0],
                            r = { top: 0, left: 0 };
                        if ("fixed" === b.css(n, "position")) t = n.getBoundingClientRect();
                        else {
                            for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === b.css(e, "position"); ) e = e.parentNode;
                            e && e !== n && 1 === e.nodeType && (((r = b(e).offset()).top += b.css(e, "borderTopWidth", !0)), (r.left += b.css(e, "borderLeftWidth", !0)));
                        }
                        return { top: t.top - r.top - b.css(n, "marginTop", !0), left: t.left - r.left - b.css(n, "marginLeft", !0) };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === b.css(e, "position"); ) e = e.offsetParent;
                        return e || ye;
                    });
                },
            }),
            b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                var i = "pageYOffset" === t;
                b.fn[e] = function (n) {
                    return H(
                        this,
                        function (e, n, r) {
                            var a;
                            if ((g(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView), void 0 === r)) return a ? a[t] : e[n];
                            a ? a.scrollTo(i ? a.pageXOffset : r, i ? r : a.pageYOffset) : (e[n] = r);
                        },
                        e,
                        n,
                        arguments.length
                    );
                };
            }),
            b.each(["top", "left"], function (e, t) {
                b.cssHooks[t] = Fe(u.pixelPosition, function (e, i) {
                    if (i) return (i = ze(e, t)), Ne.test(i) ? b(e).position()[t] + "px" : i;
                });
            }),
            b.each({ Height: "height", Width: "width" }, function (e, t) {
                b.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (i, n) {
                    b.fn[n] = function (r, a) {
                        var o = arguments.length && (i || "boolean" != typeof r),
                            s = i || (!0 === r || !0 === a ? "margin" : "border");
                        return H(
                            this,
                            function (t, i, r) {
                                var a;
                                return g(t)
                                    ? 0 === n.indexOf("outer")
                                        ? t["inner" + e]
                                        : t.document.documentElement["client" + e]
                                    : 9 === t.nodeType
                                    ? ((a = t.documentElement), Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e]))
                                    : void 0 === r
                                    ? b.css(t, i, s)
                                    : b.style(t, i, r, s);
                            },
                            t,
                            o ? r : void 0,
                            o
                        );
                    };
                });
            }),
            b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                b.fn[t] = function (e, i) {
                    return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);
                };
            }),
            b.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            }),
            b.fn.extend({
                bind: function (e, t, i) {
                    return this.on(e, null, t, i);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, i, n) {
                    return this.on(t, e, i, n);
                },
                undelegate: function (e, t, i) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
                },
            }),
            (b.proxy = function (e, t) {
                var i, n, r;
                if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), f(e)))
                    return (
                        (n = a.call(arguments, 2)),
                        ((r = function () {
                            return e.apply(t || this, n.concat(a.call(arguments)));
                        }).guid = e.guid = e.guid || b.guid++),
                        r
                    );
            }),
            (b.holdReady = function (e) {
                e ? b.readyWait++ : b.ready(!0);
            }),
            (b.isArray = Array.isArray),
            (b.parseJSON = JSON.parse),
            (b.nodeName = C),
            (b.isFunction = f),
            (b.isWindow = g),
            (b.camelCase = X),
            (b.type = v),
            (b.now = Date.now),
            (b.isNumeric = function (e) {
                var t = b.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return b;
                });
        var Ht = e.jQuery,
            qt = e.$;
        return (
            (b.noConflict = function (t) {
                return e.$ === b && (e.$ = qt), t && e.jQuery === b && (e.jQuery = Ht), b;
            }),
            t || (e.jQuery = e.$ = b),
            b
        );
    }),
    "undefined" == typeof jQuery)
)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!(function (e) {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if ((t[0] < 2 && t[1] < 9) || (1 == t[0] && 9 == t[1] && t[2] < 1) || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
})(),
    (function (e) {
        "use strict";
        (e.fn.emulateTransitionEnd = function (t) {
            var i = !1,
                n = this;
            return (
                e(this).one("bsTransitionEnd", function () {
                    i = !0;
                }),
                setTimeout(function () {
                    i || e(n).trigger(e.support.transition.end);
                }, t),
                this
            );
        }),
            e(function () {
                (e.support.transition = (function () {
                    var e = document.createElement("bootstrap"),
                        t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                    for (var i in t) if (void 0 !== e.style[i]) return { end: t[i] };
                    return !1;
                })()),
                    e.support.transition &&
                        (e.event.special.bsTransitionEnd = {
                            bindType: e.support.transition.end,
                            delegateType: e.support.transition.end,
                            handle: function (t) {
                                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                            },
                        });
            });
    })(jQuery),
    (function (e) {
        "use strict";
        var t = '[data-dismiss="alert"]',
            i = function (i) {
                e(i).on("click", t, this.close);
            };
        (i.VERSION = "3.3.7"),
            (i.TRANSITION_DURATION = 150),
            (i.prototype.close = function (t) {
                function n() {
                    o.detach().trigger("closed.bs.alert").remove();
                }
                var r = e(this),
                    a = r.attr("data-target");
                a || (a = (a = r.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, ""));
                var o = e("#" === a ? [] : a);
                t && t.preventDefault(),
                    o.length || (o = r.closest(".alert")),
                    o.trigger((t = e.Event("close.bs.alert"))),
                    t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n());
            });
        var n = e.fn.alert;
        (e.fn.alert = function (t) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.alert");
                r || n.data("bs.alert", (r = new i(this))), "string" == typeof t && r[t].call(n);
            });
        }),
            (e.fn.alert.Constructor = i),
            (e.fn.alert.noConflict = function () {
                return (e.fn.alert = n), this;
            }),
            e(document).on("click.bs.alert.data-api", t, i.prototype.close);
    })(jQuery),
    (function (e) {
        "use strict";
        function t(t) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.button");
                r || n.data("bs.button", (r = new i(this, "object" == typeof t && t))), "toggle" == t ? r.toggle() : t && r.setState(t);
            });
        }
        var i = function (t, n) {
            (this.$element = e(t)), (this.options = e.extend({}, i.DEFAULTS, n)), (this.isLoading = !1);
        };
        (i.VERSION = "3.3.7"),
            (i.DEFAULTS = { loadingText: "loading..." }),
            (i.prototype.setState = function (t) {
                var i = "disabled",
                    n = this.$element,
                    r = n.is("input") ? "val" : "html",
                    a = n.data();
                (t += "Text"),
                    null == a.resetText && n.data("resetText", n[r]()),
                    setTimeout(
                        e.proxy(function () {
                            n[r](null == a[t] ? this.options[t] : a[t]),
                                "loadingText" == t ? ((this.isLoading = !0), n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && ((this.isLoading = !1), n.removeClass(i).removeAttr(i).prop(i, !1));
                        }, this),
                        0
                    );
            }),
            (i.prototype.toggle = function () {
                var e = !0,
                    t = this.$element.closest('[data-toggle="buttons"]');
                if (t.length) {
                    var i = this.$element.find("input");
                    "radio" == i.prop("type")
                        ? (i.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active"))
                        : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")),
                        i.prop("checked", this.$element.hasClass("active")),
                        e && i.trigger("change");
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
            });
        var n = e.fn.button;
        (e.fn.button = t),
            (e.fn.button.Constructor = i),
            (e.fn.button.noConflict = function () {
                return (e.fn.button = n), this;
            }),
            e(document)
                .on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
                    var n = e(i.target).closest(".btn");
                    t.call(n, "toggle"), e(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"));
                })
                .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
                    e(t.target)
                        .closest(".btn")
                        .toggleClass("focus", /^focus(in)?$/.test(t.type));
                });
    })(jQuery),
    (function (e) {
        "use strict";
        function t(t) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.carousel"),
                    a = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t),
                    o = "string" == typeof t ? t : a.slide;
                r || n.data("bs.carousel", (r = new i(this, a))), "number" == typeof t ? r.to(t) : o ? r[o]() : a.interval && r.pause().cycle();
            });
        }
        var i = function (t, i) {
            (this.$element = e(t)),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = i),
                (this.paused = null),
                (this.sliding = null),
                (this.interval = null),
                (this.$active = null),
                (this.$items = null),
                this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this));
        };
        (i.VERSION = "3.3.7"),
            (i.TRANSITION_DURATION = 600),
            (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
            (i.prototype.keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) {
                    switch (e.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return;
                    }
                    e.preventDefault();
                }
            }),
            (i.prototype.cycle = function (t) {
                return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this;
            }),
            (i.prototype.getItemIndex = function (e) {
                return (this.$items = e.parent().children(".item")), this.$items.index(e || this.$active);
            }),
            (i.prototype.getItemForDirection = function (e, t) {
                var i = this.getItemIndex(t);
                return (("prev" == e && 0 === i) || ("next" == e && i == this.$items.length - 1)) && !this.options.wrap ? t : this.$items.eq((i + ("prev" == e ? -1 : 1)) % this.$items.length);
            }),
            (i.prototype.to = function (e) {
                var t = this,
                    i = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                if (!(e > this.$items.length - 1 || e < 0))
                    return this.sliding
                        ? this.$element.one("slid.bs.carousel", function () {
                              t.to(e);
                          })
                        : i == e
                        ? this.pause().cycle()
                        : this.slide(e > i ? "next" : "prev", this.$items.eq(e));
            }),
            (i.prototype.pause = function (t) {
                return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
            }),
            (i.prototype.next = function () {
                if (!this.sliding) return this.slide("next");
            }),
            (i.prototype.prev = function () {
                if (!this.sliding) return this.slide("prev");
            }),
            (i.prototype.slide = function (t, n) {
                var r = this.$element.find(".item.active"),
                    a = n || this.getItemForDirection(t, r),
                    o = this.interval,
                    s = "next" == t ? "left" : "right",
                    l = this;
                if (a.hasClass("active")) return (this.sliding = !1);
                var p = a[0],
                    m = e.Event("slide.bs.carousel", { relatedTarget: p, direction: s });
                if ((this.$element.trigger(m), !m.isDefaultPrevented())) {
                    if (((this.sliding = !0), o && this.pause(), this.$indicators.length)) {
                        this.$indicators.find(".active").removeClass("active");
                        var h = e(this.$indicators.children()[this.getItemIndex(a)]);
                        h && h.addClass("active");
                    }
                    var d = e.Event("slid.bs.carousel", { relatedTarget: p, direction: s });
                    return (
                        e.support.transition && this.$element.hasClass("slide")
                            ? (a.addClass(t),
                              r.addClass(s),
                              a.addClass(s),
                              r
                                  .one("bsTransitionEnd", function () {
                                      a.removeClass([t, s].join(" ")).addClass("active"),
                                          r.removeClass(["active", s].join(" ")),
                                          (l.sliding = !1),
                                          setTimeout(function () {
                                              l.$element.trigger(d);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(i.TRANSITION_DURATION))
                            : (r.removeClass("active"), a.addClass("active"), (this.sliding = !1), this.$element.trigger(d)),
                        o && this.cycle(),
                        this
                    );
                }
            });
        var n = e.fn.carousel;
        (e.fn.carousel = t),
            (e.fn.carousel.Constructor = i),
            (e.fn.carousel.noConflict = function () {
                return (e.fn.carousel = n), this;
            });
        var r = function (i) {
            var n,
                r = e(this),
                a = e(r.attr("data-target") || ((n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")));
            if (a.hasClass("carousel")) {
                var o = e.extend({}, a.data(), r.data()),
                    s = r.attr("data-slide-to");
                s && (o.interval = !1), t.call(a, o), s && a.data("bs.carousel").to(s), i.preventDefault();
            }
        };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r),
            e(window).on("load", function () {
                e('[data-ride="carousel"]').each(function () {
                    var i = e(this);
                    t.call(i, i.data());
                });
            });
    })(jQuery),
    (function (e) {
        "use strict";
        function t(t) {
            var i,
                n = t.attr("data-target") || ((i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            return e(n);
        }
        function i(t) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("bs.collapse"),
                    a = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
                !r && a.toggle && /show|hide/.test(t) && (a.toggle = !1), r || i.data("bs.collapse", (r = new n(this, a))), "string" == typeof t && r[t]();
            });
        }
        var n = function (t, i) {
            (this.$element = e(t)),
                (this.options = e.extend({}, n.DEFAULTS, i)),
                (this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')),
                (this.transitioning = null),
                this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle();
        };
        (n.VERSION = "3.3.7"),
            (n.TRANSITION_DURATION = 350),
            (n.DEFAULTS = { toggle: !0 }),
            (n.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height";
            }),
            (n.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var t,
                        r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(r && r.length && ((t = r.data("bs.collapse")), t && t.transitioning))) {
                        var a = e.Event("show.bs.collapse");
                        if ((this.$element.trigger(a), !a.isDefaultPrevented())) {
                            r && r.length && (i.call(r, "hide"), t || r.data("bs.collapse", null));
                            var o = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                            var s = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[o](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                            };
                            if (!e.support.transition) return s.call(this);
                            var l = e.camelCase(["scroll", o].join("-"));
                            this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l]);
                        }
                    }
                }
            }),
            (n.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var t = e.Event("hide.bs.collapse");
                    if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
                        var i = this.dimension();
                        this.$element[i](this.$element[i]()),
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            (this.transitioning = 1);
                        var r = function () {
                            (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };
                        return e.support.transition ? void this.$element[i](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : r.call(this);
                    }
                }
            }),
            (n.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (n.prototype.getParent = function () {
                return e(this.options.parent)
                    .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                    .each(
                        e.proxy(function (i, n) {
                            var r = e(n);
                            this.addAriaAndCollapsedClass(t(r), r);
                        }, this)
                    )
                    .end();
            }),
            (n.prototype.addAriaAndCollapsedClass = function (e, t) {
                var i = e.hasClass("in");
                e.attr("aria-expanded", i), t.toggleClass("collapsed", !i).attr("aria-expanded", i);
            });
        var r = e.fn.collapse;
        (e.fn.collapse = i),
            (e.fn.collapse.Constructor = n),
            (e.fn.collapse.noConflict = function () {
                return (e.fn.collapse = r), this;
            }),
            e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
                var r = e(this);
                r.attr("data-target") || n.preventDefault();
                var a = t(r),
                    o = a.data("bs.collapse") ? "toggle" : r.data();
                i.call(a, o);
            });
    })(jQuery),
    (function (e) {
        "use strict";
        function t(t) {
            var i = t.attr("data-target");
            i || (i = (i = t.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && e(i);
            return n && n.length ? n : t.parent();
        }
        function i(i) {
            (i && 3 === i.which) ||
                (e(n).remove(),
                e(r).each(function () {
                    var n = e(this),
                        r = t(n),
                        a = { relatedTarget: this };
                    r.hasClass("open") &&
                        ((i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && e.contains(r[0], i.target)) ||
                            (r.trigger((i = e.Event("hide.bs.dropdown", a))), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", a)))));
                }));
        }
        var n = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            a = function (t) {
                e(t).on("click.bs.dropdown", this.toggle);
            };
        (a.VERSION = "3.3.7"),
            (a.prototype.toggle = function (n) {
                var r = e(this);
                if (!r.is(".disabled, :disabled")) {
                    var a = t(r),
                        o = a.hasClass("open");
                    if ((i(), !o)) {
                        "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", i);
                        var s = { relatedTarget: this };
                        if ((a.trigger((n = e.Event("show.bs.dropdown", s))), n.isDefaultPrevented())) return;
                        r.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s));
                    }
                    return !1;
                }
            }),
            (a.prototype.keydown = function (i) {
                if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                    var n = e(this);
                    if ((i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled"))) {
                        var a = t(n),
                            o = a.hasClass("open");
                        if ((!o && 27 != i.which) || (o && 27 == i.which)) return 27 == i.which && a.find(r).trigger("focus"), n.trigger("click");
                        var s = a.find(".dropdown-menu li:not(.disabled):visible a");
                        if (s.length) {
                            var l = s.index(i.target);
                            38 == i.which && l > 0 && l--, 40 == i.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus");
                        }
                    }
                }
            });
        var o = e.fn.dropdown;
        (e.fn.dropdown = function (t) {
            return this.each(function () {
                var i = e(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", (n = new a(this))), "string" == typeof t && n[t].call(i);
            });
        }),
            (e.fn.dropdown.Constructor = a),
            (e.fn.dropdown.noConflict = function () {
                return (e.fn.dropdown = o), this;
            }),
            e(document)
                .on("click.bs.dropdown.data-api", i)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
                    e.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", r, a.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", r, a.prototype.keydown)
                .on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown);
    })(jQuery),
    (function (e) {
        "use strict";
        function t(t, n) {
            return this.each(function () {
                var r = e(this),
                    a = r.data("bs.modal"),
                    o = e.extend({}, i.DEFAULTS, r.data(), "object" == typeof t && t);
                a || r.data("bs.modal", (a = new i(this, o))), "string" == typeof t ? a[t](n) : o.show && a.show(n);
            });
        }
        var i = function (t, i) {
            (this.options = i),
                (this.$body = e(document.body)),
                (this.$element = e(t)),
                (this.$dialog = this.$element.find(".modal-dialog")),
                (this.$backdrop = null),
                (this.isShown = null),
                (this.originalBodyPad = null),
                (this.scrollbarWidth = 0),
                (this.ignoreBackdropClick = !1),
                this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        e.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
        };
        (i.VERSION = "3.3.7"),
            (i.TRANSITION_DURATION = 300),
            (i.BACKDROP_TRANSITION_DURATION = 150),
            (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (i.prototype.toggle = function (e) {
                return this.isShown ? this.hide() : this.show(e);
            }),
            (i.prototype.show = function (t) {
                var n = this,
                    r = e.Event("show.bs.modal", { relatedTarget: t });
                this.$element.trigger(r),
                    this.isShown ||
                        r.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
                        this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                            n.$element.one("mouseup.dismiss.bs.modal", function (t) {
                                e(t.target).is(n.$element) && (n.ignoreBackdropClick = !0);
                            });
                        }),
                        this.backdrop(function () {
                            var r = e.support.transition && n.$element.hasClass("fade");
                            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), n.$element.addClass("in"), n.enforceFocus();
                            var a = e.Event("shown.bs.modal", { relatedTarget: t });
                            r
                                ? n.$dialog
                                      .one("bsTransitionEnd", function () {
                                          n.$element.trigger("focus").trigger(a);
                                      })
                                      .emulateTransitionEnd(i.TRANSITION_DURATION)
                                : n.$element.trigger("focus").trigger(a);
                        }));
            }),
            (i.prototype.hide = function (t) {
                t && t.preventDefault(),
                    (t = e.Event("hide.bs.modal")),
                    this.$element.trigger(t),
                    this.isShown &&
                        !t.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        e(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                        this.$dialog.off("mousedown.dismiss.bs.modal"),
                        e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
            }),
            (i.prototype.enforceFocus = function () {
                e(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        e.proxy(function (e) {
                            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (i.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keydown.dismiss.bs.modal",
                          e.proxy(function (e) {
                              27 == e.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }),
            (i.prototype.resize = function () {
                this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal");
            }),
            (i.prototype.hideModal = function () {
                var e = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal");
                    });
            }),
            (i.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (i.prototype.backdrop = function (t) {
                var n = this,
                    r = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var a = e.support.transition && r;
                    if (
                        ((this.$backdrop = e(document.createElement("div"))
                            .addClass("modal-backdrop " + r)
                            .appendTo(this.$body)),
                        this.$element.on(
                            "click.dismiss.bs.modal",
                            e.proxy(function (e) {
                                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                            }, this)
                        ),
                        this.$backdrop.addClass("in"),
                        !t)
                    )
                        return;
                    a ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : t();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var o = function () {
                        n.removeBackdrop(), t && t();
                    };
                    e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o();
                } else t && t();
            }),
            (i.prototype.handleUpdate = function () {
                this.adjustDialog();
            }),
            (i.prototype.adjustDialog = function () {
                var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({ paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "" });
            }),
            (i.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (i.prototype.checkScrollbar = function () {
                var e = window.innerWidth;
                if (!e) {
                    var t = document.documentElement.getBoundingClientRect();
                    e = t.right - Math.abs(t.left);
                }
                (this.bodyIsOverflowing = document.body.clientWidth < e), (this.scrollbarWidth = this.measureScrollbar());
            }),
            (i.prototype.setScrollbar = function () {
                var e = parseInt(this.$body.css("padding-right") || 0, 10);
                (this.originalBodyPad = document.body.style.paddingRight || ""), this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth);
            }),
            (i.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad);
            }),
            (i.prototype.measureScrollbar = function () {
                var e = document.createElement("div");
                (e.className = "modal-scrollbar-measure"), this.$body.append(e);
                var t = e.offsetWidth - e.clientWidth;
                return this.$body[0].removeChild(e), t;
            });
        var n = e.fn.modal;
        (e.fn.modal = t),
            (e.fn.modal.Constructor = i),
            (e.fn.modal.noConflict = function () {
                return (e.fn.modal = n), this;
            }),
            e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
                var n = e(this),
                    r = n.attr("href"),
                    a = e(n.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, ""))),
                    o = a.data("bs.modal") ? "toggle" : e.extend({ remote: !/#/.test(r) && r }, a.data(), n.data());
                n.is("a") && i.preventDefault(),
                    a.one("show.bs.modal", function (e) {
                        e.isDefaultPrevented() ||
                            a.one("hidden.bs.modal", function () {
                                n.is(":visible") && n.trigger("focus");
                            });
                    }),
                    t.call(a, o, this);
            });
    })(jQuery),
    (function (e) {
        "use strict";
        var t = function (e, t) {
            (this.type = null), (this.options = null), (this.enabled = null), (this.timeout = null), (this.hoverState = null), (this.$element = null), (this.inState = null), this.init("tooltip", e, t);
        };
        (t.VERSION = "3.3.7"),
            (t.TRANSITION_DURATION = 150),
            (t.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: "body", padding: 0 },
            }),
            (t.prototype.init = function (t, i, n) {
                if (
                    ((this.enabled = !0),
                    (this.type = t),
                    (this.$element = e(i)),
                    (this.options = this.getOptions(n)),
                    (this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport)),
                    (this.inState = { click: !1, hover: !1, focus: !1 }),
                    this.$element[0] instanceof document.constructor && !this.options.selector)
                )
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var r = this.options.trigger.split(" "), a = r.length; a--; ) {
                    var o = r[a];
                    if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                    else if ("manual" != o) {
                        var s = "hover" == o ? "mouseleave" : "focusout";
                        this.$element.on(("hover" == o ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                            this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this));
                    }
                }
                this.options.selector ? (this._options = e.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
            }),
            (t.prototype.getDefaults = function () {
                return t.DEFAULTS;
            }),
            (t.prototype.getOptions = function (t) {
                return (t = e.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t;
            }),
            (t.prototype.getDelegateOptions = function () {
                var t = {},
                    i = this.getDefaults();
                return (
                    this._options &&
                        e.each(this._options, function (e, n) {
                            i[e] != n && (t[e] = n);
                        }),
                    t
                );
            }),
            (t.prototype.enter = function (t) {
                var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
                return (
                    i || ((i = new this.constructor(t.currentTarget, this.getDelegateOptions())), e(t.currentTarget).data("bs." + this.type, i)),
                    t instanceof e.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0),
                    i.tip().hasClass("in") || "in" == i.hoverState
                        ? void (i.hoverState = "in")
                        : (clearTimeout(i.timeout),
                          (i.hoverState = "in"),
                          i.options.delay && i.options.delay.show
                              ? void (i.timeout = setTimeout(function () {
                                    "in" == i.hoverState && i.show();
                                }, i.options.delay.show))
                              : i.show())
                );
            }),
            (t.prototype.isInStateTrue = function () {
                for (var e in this.inState) if (this.inState[e]) return !0;
                return !1;
            }),
            (t.prototype.leave = function (t) {
                var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
                if (
                    (i || ((i = new this.constructor(t.currentTarget, this.getDelegateOptions())), e(t.currentTarget).data("bs." + this.type, i)),
                    t instanceof e.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1),
                    !i.isInStateTrue())
                )
                    return (
                        clearTimeout(i.timeout),
                        (i.hoverState = "out"),
                        i.options.delay && i.options.delay.hide
                            ? void (i.timeout = setTimeout(function () {
                                  "out" == i.hoverState && i.hide();
                              }, i.options.delay.hide))
                            : i.hide()
                    );
            }),
            (t.prototype.show = function () {
                var i = e.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(i);
                    var n = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (i.isDefaultPrevented() || !n) return;
                    var r = this,
                        a = this.tip(),
                        o = this.getUID(this.type);
                    this.setContent(), a.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && a.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                        l = /\s?auto?\s?/i,
                        p = l.test(s);
                    p && (s = s.replace(l, "") || "top"),
                        a
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(s)
                            .data("bs." + this.type, this),
                        this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var m = this.getPosition(),
                        h = a[0].offsetWidth,
                        d = a[0].offsetHeight;
                    if (p) {
                        var c = s,
                            u = this.getPosition(this.$viewport);
                        (s = "bottom" == s && m.bottom + d > u.bottom ? "top" : "top" == s && m.top - d < u.top ? "bottom" : "right" == s && m.right + h > u.width ? "left" : "left" == s && m.left - h < u.left ? "right" : s),
                            a.removeClass(c).addClass(s);
                    }
                    var f = this.getCalculatedOffset(s, m, h, d);
                    this.applyPlacement(f, s);
                    var g = function () {
                        var e = r.hoverState;
                        r.$element.trigger("shown.bs." + r.type), (r.hoverState = null), "out" == e && r.leave(r);
                    };
                    e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", g).emulateTransitionEnd(t.TRANSITION_DURATION) : g();
                }
            }),
            (t.prototype.applyPlacement = function (t, i) {
                var n = this.tip(),
                    r = n[0].offsetWidth,
                    a = n[0].offsetHeight,
                    o = parseInt(n.css("margin-top"), 10),
                    s = parseInt(n.css("margin-left"), 10);
                isNaN(o) && (o = 0),
                    isNaN(s) && (s = 0),
                    (t.top += o),
                    (t.left += s),
                    e.offset.setOffset(
                        n[0],
                        e.extend(
                            {
                                using: function (e) {
                                    n.css({ top: Math.round(e.top), left: Math.round(e.left) });
                                },
                            },
                            t
                        ),
                        0
                    ),
                    n.addClass("in");
                var l = n[0].offsetWidth,
                    p = n[0].offsetHeight;
                "top" == i && p != a && (t.top = t.top + a - p);
                var m = this.getViewportAdjustedDelta(i, t, l, p);
                m.left ? (t.left += m.left) : (t.top += m.top);
                var h = /top|bottom/.test(i),
                    d = h ? 2 * m.left - r + l : 2 * m.top - a + p,
                    c = h ? "offsetWidth" : "offsetHeight";
                n.offset(t), this.replaceArrow(d, n[0][c], h);
            }),
            (t.prototype.replaceArrow = function (e, t, i) {
                this.arrow()
                    .css(i ? "left" : "top", 50 * (1 - e / t) + "%")
                    .css(i ? "top" : "left", "");
            }),
            (t.prototype.setContent = function () {
                var e = this.tip(),
                    t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right");
            }),
            (t.prototype.hide = function (i) {
                function n() {
                    "in" != r.hoverState && a.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), i && i();
                }
                var r = this,
                    a = e(this.$tip),
                    o = e.Event("hide.bs." + this.type);
                if ((this.$element.trigger(o), !o.isDefaultPrevented()))
                    return a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(t.TRANSITION_DURATION) : n(), (this.hoverState = null), this;
            }),
            (t.prototype.fixTitle = function () {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "");
            }),
            (t.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (t.prototype.getPosition = function (t) {
                var i = (t = t || this.$element)[0],
                    n = "BODY" == i.tagName,
                    r = i.getBoundingClientRect();
                null == r.width && (r = e.extend({}, r, { width: r.right - r.left, height: r.bottom - r.top }));
                var a = window.SVGElement && i instanceof window.SVGElement,
                    o = n ? { top: 0, left: 0 } : a ? null : t.offset(),
                    s = { scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
                    l = n ? { width: e(window).width(), height: e(window).height() } : null;
                return e.extend({}, r, s, l, o);
            }),
            (t.prototype.getCalculatedOffset = function (e, t, i, n) {
                return "bottom" == e
                    ? { top: t.top + t.height, left: t.left + t.width / 2 - i / 2 }
                    : "top" == e
                    ? { top: t.top - n, left: t.left + t.width / 2 - i / 2 }
                    : "left" == e
                    ? { top: t.top + t.height / 2 - n / 2, left: t.left - i }
                    : { top: t.top + t.height / 2 - n / 2, left: t.left + t.width };
            }),
            (t.prototype.getViewportAdjustedDelta = function (e, t, i, n) {
                var r = { top: 0, left: 0 };
                if (!this.$viewport) return r;
                var a = (this.options.viewport && this.options.viewport.padding) || 0,
                    o = this.getPosition(this.$viewport);
                if (/right|left/.test(e)) {
                    var s = t.top - a - o.scroll,
                        l = t.top + a - o.scroll + n;
                    s < o.top ? (r.top = o.top - s) : l > o.top + o.height && (r.top = o.top + o.height - l);
                } else {
                    var p = t.left - a,
                        m = t.left + a + i;
                    p < o.left ? (r.left = o.left - p) : m > o.right && (r.left = o.left + o.width - m);
                }
                return r;
            }),
            (t.prototype.getTitle = function () {
                var e = this.$element,
                    t = this.options;
                return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title);
            }),
            (t.prototype.getUID = function (e) {
                do {
                    e += ~~(1e6 * Math.random());
                } while (document.getElementById(e));
                return e;
            }),
            (t.prototype.tip = function () {
                if (!this.$tip && ((this.$tip = e(this.options.template)), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip;
            }),
            (t.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (t.prototype.enable = function () {
                this.enabled = !0;
            }),
            (t.prototype.disable = function () {
                this.enabled = !1;
            }),
            (t.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (t.prototype.toggle = function (t) {
                var i = this;
                t && ((i = e(t.currentTarget).data("bs." + this.type)) || ((i = new this.constructor(t.currentTarget, this.getDelegateOptions())), e(t.currentTarget).data("bs." + this.type, i))),
                    t ? ((i.inState.click = !i.inState.click), i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
            }),
            (t.prototype.destroy = function () {
                var e = this;
                clearTimeout(this.timeout),
                    this.hide(function () {
                        e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), (e.$tip = null), (e.$arrow = null), (e.$viewport = null), (e.$element = null);
                    });
            });
        var i = e.fn.tooltip;
        (e.fn.tooltip = function (i) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.tooltip"),
                    a = "object" == typeof i && i;
                (!r && /destroy|hide/.test(i)) || (r || n.data("bs.tooltip", (r = new t(this, a))), "string" == typeof i && r[i]());
            });
        }),
            (e.fn.tooltip.Constructor = t),
            (e.fn.tooltip.noConflict = function () {
                return (e.fn.tooltip = i), this;
            });
    })(jQuery),
    (function (e) {
        "use strict";
        var t = function (e, t) {
            this.init("popover", e, t);
        };
        if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (t.VERSION = "3.3.7"),
            (t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            ((t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)).constructor = t),
            (t.prototype.getDefaults = function () {
                return t.DEFAULTS;
            }),
            (t.prototype.setContent = function () {
                var e = this.tip(),
                    t = this.getTitle(),
                    i = this.getContent();
                e.find(".popover-title")[this.options.html ? "html" : "text"](t),
                    e.find(".popover-content").children().detach().end()[this.options.html ? ("string" == typeof i ? "html" : "append") : "text"](i),
                    e.removeClass("fade top bottom left right in"),
                    e.find(".popover-title").html() || e.find(".popover-title").hide();
            }),
            (t.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (t.prototype.getContent = function () {
                var e = this.$element,
                    t = this.options;
                return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content);
            }),
            (t.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            });
        var i = e.fn.popover;
        (e.fn.popover = function (i) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.popover"),
                    a = "object" == typeof i && i;
                (!r && /destroy|hide/.test(i)) || (r || n.data("bs.popover", (r = new t(this, a))), "string" == typeof i && r[i]());
            });
        }),
            (e.fn.popover.Constructor = t),
            (e.fn.popover.noConflict = function () {
                return (e.fn.popover = i), this;
            });
    })(jQuery),
    (function (e) {
        "use strict";
        function t(i, n) {
            (this.$body = e(document.body)),
                (this.$scrollElement = e(e(i).is(document.body) ? window : i)),
                (this.options = e.extend({}, t.DEFAULTS, n)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)),
                this.refresh(),
                this.process();
        }
        function i(i) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.scrollspy");
                r || n.data("bs.scrollspy", (r = new t(this, "object" == typeof i && i))), "string" == typeof i && r[i]();
            });
        }
        (t.VERSION = "3.3.7"),
            (t.DEFAULTS = { offset: 10 }),
            (t.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }),
            (t.prototype.refresh = function () {
                var t = this,
                    i = "offset",
                    n = 0;
                (this.offsets = []),
                    (this.targets = []),
                    (this.scrollHeight = this.getScrollHeight()),
                    e.isWindow(this.$scrollElement[0]) || ((i = "position"), (n = this.$scrollElement.scrollTop())),
                    this.$body
                        .find(this.selector)
                        .map(function () {
                            var t = e(this),
                                r = t.data("target") || t.attr("href"),
                                a = /^#./.test(r) && e(r);
                            return (a && a.length && a.is(":visible") && [[a[i]().top + n, r]]) || null;
                        })
                        .sort(function (e, t) {
                            return e[0] - t[0];
                        })
                        .each(function () {
                            t.offsets.push(this[0]), t.targets.push(this[1]);
                        });
            }),
            (t.prototype.process = function () {
                var e,
                    t = this.$scrollElement.scrollTop() + this.options.offset,
                    i = this.getScrollHeight(),
                    n = this.options.offset + i - this.$scrollElement.height(),
                    r = this.offsets,
                    a = this.targets,
                    o = this.activeTarget;
                if ((this.scrollHeight != i && this.refresh(), t >= n)) return o != (e = a[a.length - 1]) && this.activate(e);
                if (o && t < r[0]) return (this.activeTarget = null), this.clear();
                for (e = r.length; e--; ) o != a[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(a[e]);
            }),
            (t.prototype.activate = function (t) {
                (this.activeTarget = t), this.clear();
                var i = e(this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]')
                    .parents("li")
                    .addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy");
            }),
            (t.prototype.clear = function () {
                e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            });
        var n = e.fn.scrollspy;
        (e.fn.scrollspy = i),
            (e.fn.scrollspy.Constructor = t),
            (e.fn.scrollspy.noConflict = function () {
                return (e.fn.scrollspy = n), this;
            }),
            e(window).on("load.bs.scrollspy.data-api", function () {
                e('[data-spy="scroll"]').each(function () {
                    var t = e(this);
                    i.call(t, t.data());
                });
            });
    })(jQuery),
    (function (e) {
        "use strict";
        function t(t) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.tab");
                r || n.data("bs.tab", (r = new i(this))), "string" == typeof t && r[t]();
            });
        }
        var i = function (t) {
            this.element = e(t);
        };
        (i.VERSION = "3.3.7"),
            (i.TRANSITION_DURATION = 150),
            (i.prototype.show = function () {
                var t = this.element,
                    i = t.closest("ul:not(.dropdown-menu)"),
                    n = t.data("target");
                if ((n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active"))) {
                    var r = i.find(".active:last a"),
                        a = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
                        o = e.Event("show.bs.tab", { relatedTarget: r[0] });
                    if ((r.trigger(a), t.trigger(o), !o.isDefaultPrevented() && !a.isDefaultPrevented())) {
                        var s = e(n);
                        this.activate(t.closest("li"), i),
                            this.activate(s, s.parent(), function () {
                                r.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: r[0] });
                            });
                    }
                }
            }),
            (i.prototype.activate = function (t, n, r) {
                function a() {
                    o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        s ? t.addClass("in") : t.removeClass("fade"),
                        t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        r && r();
                }
                var o = n.find("> .active"),
                    s = r && e.support.transition && ((o.length && o.hasClass("fade")) || !!n.find("> .fade").length);
                o.length && s ? o.one("bsTransitionEnd", a).emulateTransitionEnd(i.TRANSITION_DURATION) : a(), o.removeClass("in");
            });
        var n = e.fn.tab;
        (e.fn.tab = t),
            (e.fn.tab.Constructor = i),
            (e.fn.tab.noConflict = function () {
                return (e.fn.tab = n), this;
            });
        var r = function (i) {
            i.preventDefault(), t.call(e(this), "show");
        };
        e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r);
    })(jQuery),
    (function (e) {
        "use strict";
        function t(t) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.affix");
                r || n.data("bs.affix", (r = new i(this, "object" == typeof t && t))), "string" == typeof t && r[t]();
            });
        }
        var i = function (t, n) {
            (this.options = e.extend({}, i.DEFAULTS, n)),
                (this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = e(t)),
                (this.affixed = null),
                (this.unpin = null),
                (this.pinnedOffset = null),
                this.checkPosition();
        };
        (i.VERSION = "3.3.7"),
            (i.RESET = "affix affix-top affix-bottom"),
            (i.DEFAULTS = { offset: 0, target: window }),
            (i.prototype.getState = function (e, t, i, n) {
                var r = this.$target.scrollTop(),
                    a = this.$element.offset(),
                    o = this.$target.height();
                if (null != i && "top" == this.affixed) return r < i && "top";
                if ("bottom" == this.affixed) return null != i ? !(r + this.unpin <= a.top) && "bottom" : !(r + o <= e - n) && "bottom";
                var s = null == this.affixed;
                return null != i && r <= i ? "top" : null != n && (s ? r : a.top) + (s ? o : t) >= e - n && "bottom";
            }),
            (i.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(i.RESET).addClass("affix");
                var e = this.$target.scrollTop(),
                    t = this.$element.offset();
                return (this.pinnedOffset = t.top - e);
            }),
            (i.prototype.checkPositionWithEventLoop = function () {
                setTimeout(e.proxy(this.checkPosition, this), 1);
            }),
            (i.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var t = this.$element.height(),
                        n = this.options.offset,
                        r = n.top,
                        a = n.bottom,
                        o = Math.max(e(document).height(), e(document.body).height());
                    "object" != typeof n && (a = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof a && (a = n.bottom(this.$element));
                    var s = this.getState(o, t, r, a);
                    if (this.affixed != s) {
                        null != this.unpin && this.$element.css("top", "");
                        var l = "affix" + (s ? "-" + s : ""),
                            p = e.Event(l + ".bs.affix");
                        if ((this.$element.trigger(p), p.isDefaultPrevented())) return;
                        (this.affixed = s),
                            (this.unpin = "bottom" == s ? this.getPinnedOffset() : null),
                            this.$element
                                .removeClass(i.RESET)
                                .addClass(l)
                                .trigger(l.replace("affix", "affixed") + ".bs.affix");
                    }
                    "bottom" == s && this.$element.offset({ top: o - t - a });
                }
            });
        var n = e.fn.affix;
        (e.fn.affix = t),
            (e.fn.affix.Constructor = i),
            (e.fn.affix.noConflict = function () {
                return (e.fn.affix = n), this;
            }),
            e(window).on("load", function () {
                e('[data-spy="affix"]').each(function () {
                    var i = e(this),
                        n = i.data();
                    (n.offset = n.offset || {}), null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), t.call(i, n);
                });
            });
    })(jQuery),
    (function () {
        "use strict";
        var e = !1;
        (window.JQClass = function () {}),
            (JQClass.classes = {}),
            (JQClass.extend = function t(i) {
                function n() {
                    !e && this._init && this._init.apply(this, arguments);
                }
                var r = this.prototype;
                e = !0;
                var a = new this();
                for (var o in ((e = !1), i))
                    if ("function" == typeof i[o] && "function" == typeof r[o])
                        a[o] = (function (e, t) {
                            return function () {
                                var i = this._super;
                                this._super = function (t) {
                                    return r[e].apply(this, t || []);
                                };
                                var n = t.apply(this, arguments);
                                return (this._super = i), n;
                            };
                        })(o, i[o]);
                    else if ("object" == typeof i[o] && "object" == typeof r[o] && "defaultOptions" === o) {
                        var s,
                            l = r[o],
                            p = i[o],
                            m = {};
                        for (s in l) m[s] = l[s];
                        for (s in p) m[s] = p[s];
                        a[o] = m;
                    } else a[o] = i[o];
                return ((n.prototype = a).constructor = n), (n.extend = t), n;
            });
    })(),
    (function ($) {
        "use strict";
        function camelCase(e) {
            return e.replace(/-([a-z])/g, function (e, t) {
                return t.toUpperCase();
            });
        }
        (JQClass.classes.JQPlugin = JQClass.extend({
            name: "plugin",
            defaultOptions: {},
            regionalOptions: {},
            deepMerge: !0,
            _getMarker: function () {
                return "is-" + this.name;
            },
            _init: function () {
                $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions[""]) || {});
                var e = camelCase(this.name);
                ($[e] = this),
                    ($.fn[e] = function (t) {
                        var i = Array.prototype.slice.call(arguments, 1),
                            n = this,
                            r = this;
                        return (
                            this.each(function () {
                                if ("string" == typeof t) {
                                    if ("_" === t[0] || !$[e][t]) throw "Unknown method: " + t;
                                    var a = $[e][t].apply($[e], [this].concat(i));
                                    if (a !== n && void 0 !== a) return (r = a), !1;
                                } else $[e]._attach(this, t);
                            }),
                            r
                        );
                    });
            },
            setDefaults: function (e) {
                $.extend(this.defaultOptions, e || {});
            },
            _attach: function (e, t) {
                if (!(e = $(e)).hasClass(this._getMarker())) {
                    e.addClass(this._getMarker()), (t = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(e), t || {}));
                    var i = $.extend({ name: this.name, elem: e, options: t }, this._instSettings(e, t));
                    e.data(this.name, i), this._postAttach(e, i), this.option(e, t);
                }
            },
            _instSettings: function (e, t) {
                return {};
            },
            _postAttach: function (e, t) {},
            _getMetadata: function (elem) {
                try {
                    var data = elem.data(this.name.toLowerCase()) || "";
                    for (var key in ((data = data
                        .replace(/(\\?)'/g, function (e, t) {
                            return t ? "'" : '"';
                        })
                        .replace(/([a-zA-Z0-9]+):/g, function (e, t, i) {
                            var n = data.substring(0, i).match(/"/g);
                            return n && n.length % 2 != 0 ? t + ":" : '"' + t + '":';
                        })
                        .replace(/\\:/g, ":")),
                    (data = $.parseJSON("{" + data + "}")),
                    data))
                        if (data.hasOwnProperty(key)) {
                            var value = data[key];
                            "string" == typeof value && value.match(/^new Date\(([-0-9,\s]*)\)$/) && (data[key] = eval(value));
                        }
                    return data;
                } catch (a) {
                    return {};
                }
            },
            _getInst: function (e) {
                return $(e).data(this.name) || {};
            },
            option: function (e, t, i) {
                var n = (e = $(e)).data(this.name),
                    r = t || {};
                return !t || ("string" == typeof t && void 0 === i)
                    ? (r = (n || {}).options) && t
                        ? r[t]
                        : r
                    : void (e.hasClass(this._getMarker()) && ("string" == typeof t && ((r = {}), (r[t] = i)), this._optionsChanged(e, n, r), $.extend(n.options, r)));
            },
            _optionsChanged: function (e, t, i) {},
            destroy: function (e) {
                (e = $(e)).hasClass(this._getMarker()) && (this._preDestroy(e, this._getInst(e)), e.removeData(this.name).removeClass(this._getMarker()));
            },
            _preDestroy: function (e, t) {},
        })),
            ($.JQPlugin = {
                createPlugin: function (e, t) {
                    "object" == typeof e && ((t = e), (e = "JQPlugin")), (e = camelCase(e));
                    var i = camelCase(t.name);
                    (JQClass.classes[i] = JQClass.classes[e].extend(t)), new JQClass.classes[i]();
                },
            });
    })(jQuery),
    (function (e) {
        "use strict";
        var t = "countdown";
        e.JQPlugin.createPlugin({
            name: t,
            defaultOptions: {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: "dHMS",
                layout: "",
                compact: !1,
                padZeroes: !1,
                significant: 0,
                description: "",
                expiryUrl: "",
                expiryText: "",
                alwaysExpire: !1,
                onExpiry: null,
                onTick: null,
                tickInterval: 1,
            },
            regionalOptions: {
                "": {
                    labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                    labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                    compactLabels: ["y", "m", "w", "d"],
                    whichLabels: null,
                    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    timeSeparator: ":",
                    isRTL: !1,
                },
            },
            _rtlClass: t + "-rtl",
            _sectionClass: t + "-section",
            _amountClass: t + "-amount",
            _periodClass: t + "-period",
            _rowClass: t + "-row",
            _holdingClass: t + "-holding",
            _showClass: t + "-show",
            _descrClass: t + "-descr",
            _timerElems: [],
            _init: function () {
                var t = this;
                this._super(), (this._serverSyncs = []);
                var i =
                        "function" == typeof Date.now
                            ? Date.now
                            : function () {
                                  return new Date().getTime();
                              },
                    n = window.performance && "function" == typeof window.performance.now,
                    r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                    a = 0;
                !r || e.noRequestAnimationFrame
                    ? ((e.noRequestAnimationFrame = null),
                      (e.countdown._timer = setInterval(function () {
                          t._updateElems();
                      }, 1e3)))
                    : ((a = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || i()),
                      r(function e(o) {
                          var s = o < 1e12 ? (n ? window.performance.now() + window.performance.timing.navigationStart : i()) : o || i();
                          s - a >= 1e3 && (t._updateElems(), (a = s)), r(e);
                      }));
            },
            UTCDate: function (e, t, i, n, r, a, o, s) {
                "object" == typeof t && t instanceof Date && ((s = t.getMilliseconds()), (o = t.getSeconds()), (a = t.getMinutes()), (r = t.getHours()), (n = t.getDate()), (i = t.getMonth()), (t = t.getFullYear()));
                var l = new Date();
                return (
                    l.setUTCFullYear(t),
                    l.setUTCDate(1),
                    l.setUTCMonth(i || 0),
                    l.setUTCDate(n || 1),
                    l.setUTCHours(r || 0),
                    l.setUTCMinutes((a || 0) - (Math.abs(e) < 30 ? 60 * e : e)),
                    l.setUTCSeconds(o || 0),
                    l.setUTCMilliseconds(s || 0),
                    l
                );
            },
            periodsToSeconds: function (e) {
                return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6];
            },
            resync: function () {
                var t = this;
                e("." + this._getMarker()).each(function () {
                    var i = e.data(this, t.name);
                    if (i.options.serverSync) {
                        for (var n = null, r = 0; r < t._serverSyncs.length; r++)
                            if (t._serverSyncs[r][0] === i.options.serverSync) {
                                n = t._serverSyncs[r];
                                break;
                            }
                        if (t._eqNull(n[2])) {
                            var a = e.isFunction(i.options.serverSync) ? i.options.serverSync.apply(this, []) : null;
                            n[2] = (a ? new Date().getTime() - a.getTime() : 0) - n[1];
                        }
                        i._since && i._since.setMilliseconds(i._since.getMilliseconds() + n[2]), i._until.setMilliseconds(i._until.getMilliseconds() + n[2]);
                    }
                });
                for (var i = 0; i < t._serverSyncs.length; i++) t._eqNull(t._serverSyncs[i][2]) || ((t._serverSyncs[i][1] += t._serverSyncs[i][2]), delete t._serverSyncs[i][2]);
            },
            _instSettings: function (e, t) {
                return { _periods: [0, 0, 0, 0, 0, 0, 0] };
            },
            _addElem: function (e) {
                this._hasElem(e) || this._timerElems.push(e);
            },
            _hasElem: function (t) {
                return e.inArray(t, this._timerElems) > -1;
            },
            _removeElem: function (t) {
                this._timerElems = e.map(this._timerElems, function (e) {
                    return e === t ? null : e;
                });
            },
            _updateElems: function () {
                for (var e = this._timerElems.length - 1; e >= 0; e--) this._updateCountdown(this._timerElems[e]);
            },
            _optionsChanged: function (t, i, n) {
                n.layout && (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(i.options, n);
                var r = i.options.timezone !== n.timezone;
                e.extend(i.options, n), this._adjustSettings(t, i, !this._eqNull(n.until) || !this._eqNull(n.since) || r);
                var a = new Date();
                ((i._since && i._since < a) || (i._until && i._until > a)) && this._addElem(t[0]), this._updateCountdown(t, i);
            },
            _updateCountdown: function (t, i) {
                if (((t = t.jquery ? t : e(t)), (i = i || this._getInst(t)))) {
                    if ((t.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), "pause" !== i._hold && e.isFunction(i.options.onTick))) {
                        var n = "lap" !== i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date());
                        (1 !== i.options.tickInterval && this.periodsToSeconds(n) % i.options.tickInterval != 0) || i.options.onTick.apply(t[0], [n]);
                    }
                    if ("pause" !== i._hold && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime()) && !i._expiring) {
                        if (((i._expiring = !0), this._hasElem(t[0]) || i.options.alwaysExpire)) {
                            if ((this._removeElem(t[0]), e.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(t[0], []), i.options.expiryText)) {
                                var r = i.options.layout;
                                (i.options.layout = i.options.expiryText), this._updateCountdown(t[0], i), (i.options.layout = r);
                            }
                            i.options.expiryUrl && (window.location = i.options.expiryUrl);
                        }
                        i._expiring = !1;
                    } else "pause" === i._hold && this._removeElem(t[0]);
                }
            },
            _resetExtraLabels: function (e, t) {
                var i = null;
                for (i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && (e[i] = t[i]);
                for (i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && void 0 === t[i] && (e[i] = null);
            },
            _eqNull: function (e) {
                return null == e;
            },
            _adjustSettings: function (t, i, n) {
                for (var r = null, a = 0; a < this._serverSyncs.length; a++)
                    if (this._serverSyncs[a][0] === i.options.serverSync) {
                        r = this._serverSyncs[a][1];
                        break;
                    }
                var o = null,
                    s = null;
                if (this._eqNull(r)) {
                    var l = e.isFunction(i.options.serverSync) ? i.options.serverSync.apply(t[0], []) : null;
                    (o = new Date()), (s = l ? o.getTime() - l.getTime() : 0), this._serverSyncs.push([i.options.serverSync, s]);
                } else (o = new Date()), (s = i.options.serverSync ? r : 0);
                var p = i.options.timezone;
                (p = this._eqNull(p) ? -o.getTimezoneOffset() : p),
                    (n || (!n && this._eqNull(i._until) && this._eqNull(i._since))) &&
                        ((i._since = i.options.since),
                        this._eqNull(i._since) || ((i._since = this.UTCDate(p, this._determineTime(i._since, null))), i._since && s && i._since.setMilliseconds(i._since.getMilliseconds() + s)),
                        (i._until = this.UTCDate(p, this._determineTime(i.options.until, o))),
                        s && i._until.setMilliseconds(i._until.getMilliseconds() + s)),
                    (i._show = this._determineShow(i));
            },
            _preDestroy: function (e, t) {
                this._removeElem(e[0]), e.empty();
            },
            pause: function (e) {
                this._hold(e, "pause");
            },
            lap: function (e) {
                this._hold(e, "lap");
            },
            resume: function (e) {
                this._hold(e, null);
            },
            toggle: function (t) {
                this[(e.data(t, this.name) || {})._hold ? "resume" : "pause"](t);
            },
            toggleLap: function (t) {
                this[(e.data(t, this.name) || {})._hold ? "resume" : "lap"](t);
            },
            _hold: function (t, i) {
                var n = e.data(t, this.name);
                if (n) {
                    if ("pause" === n._hold && !i) {
                        n._periods = n._savePeriods;
                        var r = n._since ? "-" : "+";
                        (n[n._since ? "_since" : "_until"] = this._determineTime(
                            r + n._periods[0] + "y" + r + n._periods[1] + "o" + r + n._periods[2] + "w" + r + n._periods[3] + "d" + r + n._periods[4] + "h" + r + n._periods[5] + "m" + r + n._periods[6] + "s"
                        )),
                            this._addElem(t);
                    }
                    (n._hold = i), (n._savePeriods = "pause" === i ? n._periods : null), e.data(t, this.name, n), this._updateCountdown(t, n);
                }
            },
            getTimes: function (t) {
                var i = e.data(t, this.name);
                return i ? ("pause" === i._hold ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date()) : i._periods) : null;
            },
            _determineTime: function (e, t) {
                var i = this,
                    n = this._eqNull(e)
                        ? t
                        : "string" == typeof e
                        ? (function (e) {
                              e = e.toLowerCase();
                              for (var t = new Date(), n = t.getFullYear(), r = t.getMonth(), a = t.getDate(), o = t.getHours(), s = t.getMinutes(), l = t.getSeconds(), p = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, m = p.exec(e); m; ) {
                                  switch (m[2] || "s") {
                                      case "s":
                                          l += parseInt(m[1], 10);
                                          break;
                                      case "m":
                                          s += parseInt(m[1], 10);
                                          break;
                                      case "h":
                                          o += parseInt(m[1], 10);
                                          break;
                                      case "d":
                                          a += parseInt(m[1], 10);
                                          break;
                                      case "w":
                                          a += 7 * parseInt(m[1], 10);
                                          break;
                                      case "o":
                                          (r += parseInt(m[1], 10)), (a = Math.min(a, i._getDaysInMonth(n, r)));
                                          break;
                                      case "y":
                                          (n += parseInt(m[1], 10)), (a = Math.min(a, i._getDaysInMonth(n, r)));
                                  }
                                  m = p.exec(e);
                              }
                              return new Date(n, r, a, o, s, l, 0);
                          })(e)
                        : "number" == typeof e
                        ? (function (e) {
                              var t = new Date();
                              return t.setTime(t.getTime() + 1e3 * e), t;
                          })(e)
                        : e;
                return n && n.setMilliseconds(0), n;
            },
            _getDaysInMonth: function (e, t) {
                return 32 - new Date(e, t, 32).getDate();
            },
            _normalLabels: function (e) {
                return e;
            },
            _generateHTML: function (t) {
                var i = this;
                t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date());
                var n = !1,
                    r = 0,
                    a = t.options.significant,
                    o = e.extend({}, t._show),
                    s = null;
                for (s = 0; s <= 6; s++) (n = n || ("?" === t._show[s] && t._periods[s] > 0)), (o[s] = "?" !== t._show[s] || n ? t._show[s] : null), (r += o[s] ? 1 : 0), (a -= t._periods[s] > 0 ? 1 : 0);
                var l = [!1, !1, !1, !1, !1, !1, !1];
                for (s = 6; s >= 0; s--) t._show[s] && (t._periods[s] ? (l[s] = !0) : ((l[s] = a > 0), a--));
                var p = t.options.compact ? t.options.compactLabels : t.options.labels,
                    m = t.options.whichLabels || this._normalLabels,
                    h = function (e) {
                        var n = t.options["compactLabels" + m(t._periods[e])];
                        return o[e] ? i._translateDigits(t, t._periods[e]) + (n ? n[e] : p[e]) + " " : "";
                    },
                    d = t.options.padZeroes ? 2 : 1,
                    c = function (e) {
                        var n = t.options["labels" + m(t._periods[e])];
                        return (!t.options.significant && o[e]) || (t.options.significant && l[e])
                            ? '<span class="' + i._sectionClass + '"><span class="' + i._amountClass + '">' + i._minDigits(t, t._periods[e], d) + '</span><span class="' + i._periodClass + '">' + (n ? n[e] : p[e]) + "</span></span>"
                            : "";
                    };
                return t.options.layout
                    ? this._buildLayout(t, o, t.options.layout, t.options.compact, t.options.significant, l)
                    : (t.options.compact
                          ? '<span class="' +
                            this._rowClass +
                            " " +
                            this._amountClass +
                            (t._hold ? " " + this._holdingClass : "") +
                            '">' +
                            h(0) +
                            h(1) +
                            h(2) +
                            h(3) +
                            (o[4] ? this._minDigits(t, t._periods[4], 2) : "") +
                            (o[5] ? (o[4] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[5], 2) : "") +
                            (o[6] ? (o[4] || o[5] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[6], 2) : "")
                          : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || r) + (t._hold ? " " + this._holdingClass : "") + '">' + c(0) + c(1) + c(2) + c(3) + c(4) + c(5) + c(6)) +
                          "</span>" +
                          (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "");
            },
            _buildLayout: function (t, i, n, r, a, o) {
                for (
                    var s = t.options[r ? "compactLabels" : "labels"],
                        l = t.options.whichLabels || this._normalLabels,
                        p = function (e) {
                            return (t.options[(r ? "compactLabels" : "labels") + l(t._periods[e])] || s)[e];
                        },
                        m = function (e, i) {
                            return t.options.digits[Math.floor(e / i) % 10];
                        },
                        h = {
                            desc: t.options.description,
                            sep: t.options.timeSeparator,
                            yl: p(0),
                            yn: this._minDigits(t, t._periods[0], 1),
                            ynn: this._minDigits(t, t._periods[0], 2),
                            ynnn: this._minDigits(t, t._periods[0], 3),
                            y1: m(t._periods[0], 1),
                            y10: m(t._periods[0], 10),
                            y100: m(t._periods[0], 100),
                            y1000: m(t._periods[0], 1e3),
                            ol: p(1),
                            on: this._minDigits(t, t._periods[1], 1),
                            onn: this._minDigits(t, t._periods[1], 2),
                            onnn: this._minDigits(t, t._periods[1], 3),
                            o1: m(t._periods[1], 1),
                            o10: m(t._periods[1], 10),
                            o100: m(t._periods[1], 100),
                            o1000: m(t._periods[1], 1e3),
                            wl: p(2),
                            wn: this._minDigits(t, t._periods[2], 1),
                            wnn: this._minDigits(t, t._periods[2], 2),
                            wnnn: this._minDigits(t, t._periods[2], 3),
                            w1: m(t._periods[2], 1),
                            w10: m(t._periods[2], 10),
                            w100: m(t._periods[2], 100),
                            w1000: m(t._periods[2], 1e3),
                            dl: p(3),
                            dn: this._minDigits(t, t._periods[3], 1),
                            dnn: this._minDigits(t, t._periods[3], 2),
                            dnnn: this._minDigits(t, t._periods[3], 3),
                            d1: m(t._periods[3], 1),
                            d10: m(t._periods[3], 10),
                            d100: m(t._periods[3], 100),
                            d1000: m(t._periods[3], 1e3),
                            hl: p(4),
                            hn: this._minDigits(t, t._periods[4], 1),
                            hnn: this._minDigits(t, t._periods[4], 2),
                            hnnn: this._minDigits(t, t._periods[4], 3),
                            h1: m(t._periods[4], 1),
                            h10: m(t._periods[4], 10),
                            h100: m(t._periods[4], 100),
                            h1000: m(t._periods[4], 1e3),
                            ml: p(5),
                            mn: this._minDigits(t, t._periods[5], 1),
                            mnn: this._minDigits(t, t._periods[5], 2),
                            mnnn: this._minDigits(t, t._periods[5], 3),
                            m1: m(t._periods[5], 1),
                            m10: m(t._periods[5], 10),
                            m100: m(t._periods[5], 100),
                            m1000: m(t._periods[5], 1e3),
                            sl: p(6),
                            sn: this._minDigits(t, t._periods[6], 1),
                            snn: this._minDigits(t, t._periods[6], 2),
                            snnn: this._minDigits(t, t._periods[6], 3),
                            s1: m(t._periods[6], 1),
                            s10: m(t._periods[6], 10),
                            s100: m(t._periods[6], 100),
                            s1000: m(t._periods[6], 1e3),
                        },
                        d = n,
                        c = 0;
                    c <= 6;
                    c++
                ) {
                    var u = "yowdhms".charAt(c),
                        f = new RegExp("\\{" + u + "<\\}([\\s\\S]*)\\{" + u + ">\\}", "g");
                    d = d.replace(f, (!a && i[c]) || (a && o[c]) ? "$1" : "");
                }
                return (
                    e.each(h, function (e, t) {
                        var i = new RegExp("\\{" + e + "\\}", "g");
                        d = d.replace(i, t);
                    }),
                    d
                );
            },
            _minDigits: function (e, t, i) {
                return (t = "" + t).length >= i ? this._translateDigits(e, t) : this._translateDigits(e, (t = "0000000000" + t).substr(t.length - i));
            },
            _translateDigits: function (e, t) {
                return ("" + t).replace(/[0-9]/g, function (t) {
                    return e.options.digits[t];
                });
            },
            _determineShow: function (e) {
                var t = e.options.format,
                    i = [];
                return (
                    (i[0] = t.match("y") ? "?" : t.match("Y") ? "!" : null),
                    (i[1] = t.match("o") ? "?" : t.match("O") ? "!" : null),
                    (i[2] = t.match("w") ? "?" : t.match("W") ? "!" : null),
                    (i[3] = t.match("d") ? "?" : t.match("D") ? "!" : null),
                    (i[4] = t.match("h") ? "?" : t.match("H") ? "!" : null),
                    (i[5] = t.match("m") ? "?" : t.match("M") ? "!" : null),
                    (i[6] = t.match("s") ? "?" : t.match("S") ? "!" : null),
                    i
                );
            },
            _calculatePeriods: function (e, t, i, n) {
                (e._now = n), e._now.setMilliseconds(0);
                var r = new Date(e._now.getTime());
                e._since ? (n.getTime() < e._since.getTime() ? (e._now = n = r) : (n = e._since)) : (r.setTime(e._until.getTime()), n.getTime() > e._until.getTime() && (e._now = n = r));
                var a = [0, 0, 0, 0, 0, 0, 0];
                if (t[0] || t[1]) {
                    var o = this._getDaysInMonth(n.getFullYear(), n.getMonth()),
                        s = this._getDaysInMonth(r.getFullYear(), r.getMonth()),
                        l = r.getDate() === n.getDate() || (r.getDate() >= Math.min(o, s) && n.getDate() >= Math.min(o, s)),
                        p = function (e) {
                            return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds();
                        },
                        m = Math.max(0, 12 * (r.getFullYear() - n.getFullYear()) + r.getMonth() - n.getMonth() + ((r.getDate() < n.getDate() && !l) || (l && p(r) < p(n)) ? -1 : 0));
                    (a[0] = t[0] ? Math.floor(m / 12) : 0), (a[1] = t[1] ? m - 12 * a[0] : 0);
                    var h = (n = new Date(n.getTime())).getDate() === o,
                        d = this._getDaysInMonth(n.getFullYear() + a[0], n.getMonth() + a[1]);
                    n.getDate() > d && n.setDate(d), n.setFullYear(n.getFullYear() + a[0]), n.setMonth(n.getMonth() + a[1]), h && n.setDate(d);
                }
                var c = Math.floor((r.getTime() - n.getTime()) / 1e3),
                    u = null,
                    f = function (e, i) {
                        (a[e] = t[e] ? Math.floor(c / i) : 0), (c -= a[e] * i);
                    };
                if ((f(2, 604800), f(3, 86400), f(4, 3600), f(5, 60), f(6, 1), c > 0 && !e._since)) {
                    var g = [1, 12, 4.3482, 7, 24, 60, 60],
                        y = 6,
                        _ = 1;
                    for (u = 6; u >= 0; u--) t[u] && (a[y] >= _ && ((a[y] = 0), (c = 1)), c > 0 && (a[u]++, (c = 0), (y = u), (_ = 1))), (_ *= g[u]);
                }
                if (i) for (u = 0; u <= 6; u++) i && a[u] ? i-- : i || (a[u] = 0);
                return a;
            },
        });
    })(jQuery);
var winPos = 0,
    winH = $(window).height();
function showMenu() {
    $("#mainnav").show();
}
function hideMenu() {
    $("#mainnav").hide().removeClass("shown"), $(".menu-trigger").removeClass("shown");
}
function openMenu() {
    $("#mainnav").slideDown().addClass("shown"), $(".menu-trigger").addClass("shown");
}
function closeMenu() {
    $("#mainnav").slideUp().removeClass("shown"), $(".menu-trigger").removeClass("shown");
}
function scaleTitles() {
    $(".trim-spaces").each(function () {
        var e = $(this),
            t = e.find(".scalable"),
            i = 1;
        t.width() > e.width() && (i = e.width() / t.width()), t.css("transform", "scale(" + i + ")"), e.is(".keep-height") || e.height(t.height() * i);
    });
}
function scrollTrigger() {
    var e = $(".scroll-target"),
        t = $(".scroll-trigger");
    if (e.length && t.length) {
        var i = $(window),
            n = i.scrollTop(),
            r = t.offset().top + t.height() - 50;
        i.width() > 991 ? (e.show(), n > r ? e.addClass("shown") : e.removeClass("shown")) : e.hide();
    }
}
function regWidgetCalc() {
    if ($("#scrollForm").length && $(".scroll-trigger").length) {
        var e = $("#scrollForm"),
            t = $(".scroll-trigger"),
            i = $(window),
            n = i.scrollTop(),
            r = t.offset().top + t.height() - 0;
        i.width() > 767 ? (e.show(), n > r ? e.addClass("open") : e.removeClass("open")) : e.hide();
    }
}
function calcList() {
    $(".calc-list").each(function () {
        var e = $(this),
            t = 0;
        e.find("li").height("auto"),
            e.find("li").each(function () {
                $(this).height() > t && (t = $(this).height());
            }),
            $(window).width() > 767 && e.find("li").height(t);
    });
}
function calcHeight(e, t) {
    $(e).each(function () {
        var e = $(this),
            i = 0;
        e.find(t).height("auto"),
            e.find(t).each(function () {
                $(this).height() > i && (i = $(this).height());
            }),
            $(window).width() > 767 && e.find(t).height(i);
    });
}
setTimeout(() => {
    $(window).trigger("resize");
}, 500),
    $(document).ready(function () {
        $(".menu-trigger").click(function (e) {
            e.preventDefault(), $(this).is(".shown") ? closeMenu() : openMenu();
        }),
            $(window).trigger("resize"),
            $(window).trigger("scroll");
    }),
    $(window).scroll(function () {
        (winPos = $(window).scrollTop()),
            scrollTrigger(),
            regWidgetCalc(),
            $(".collapsed-section").each(function () {
                var e = $(this),
                    t = e.offset().top,
                    i = winPos + winH - 0.7 * winH,
                    n = e.find(".target-container"),
                    r = e.find(".target-height").outerHeight();
                i > t && n.css({ "margin-top": "10px", height: r + "px", opacity: 1 });
            });
    }),
    $(window).on("load", function () {
        $(window).trigger("resize");
    }),
    $(window).resize(function () {
        (winH = $(window).height()),
            $(window).width() > 991 ? showMenu() : hideMenu(),
            calcList(),
            calcHeight(".not-need-list", ".description"),
            calcHeight(".not-need-list", ".list-container"),
            calcHeight(".advantage-list", ".list-container"),
            scaleTitles();
    }),
    $(document).ready(function () {
        var e = new Date(),
            t = e.getDate(),
            i = e.getMonth() + 1,
            n = e.getFullYear();
        t < 10 && (t = "0" + t),
            i < 10 && (i = "0" + i),
            (e = i + "/" + t + "/" + n),
            $("#today").text(e),
            setTimeout(() => {
                $("#topWidgetCountdown").countdown({ until: 660, compact: !0, format: "MS" });
            }, 1e3);
    });
var mousebottom = 0,
    pu = 1;
function scrollTrigger() {
    var e = $(".video"),
        t = $(".scroll-trigger");
    if (e.length && t.length) {
        var i = $(window),
            n = i.scrollTop(),
            r = t.offset().top + t.height() - 50;
        i.width() > 600 && n > r ? e.addClass("shown") : e.removeClass("shown");
    }
}
setTimeout(function () {
    pu = 1;
}, 5e3),
    $(document).mousemove(function (e) {
        var t = e.pageY;
        t - $(window).scrollTop() > 200 && (mousebottom = 1),
            t - $(window).scrollTop() < 15 && 1 == mousebottom && 1 == pu && ((mousebottom = 0), (pu = 0)),
            $("a").click(function () {
                yesyoucan = 0;
            });
    }),
    (yesyoucan = 0),
    $(window).scroll(function () {
        scrollTrigger(), $(window).scrollTop() > 100 ? $(".to_top_button").fadeIn(300) : $(".to_top_button").fadeOut(300);
    });

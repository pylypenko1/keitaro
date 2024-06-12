(self["webpackChunkmarquiz_quiz"] = self["webpackChunkmarquiz_quiz"] || []).push([[5308], {
    89736: function(t, e, s) {
        "use strict";
        s.d(e, {
            A: function() {
                return T
            }
        });
        var i = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "address-input"
            }, [e("b-autocomplete", {
                ref: "addressInput",
                attrs: {
                    type: "text",
                    icon: t.icon,
                    size: t.size,
                    data: t.addressList,
                    required: t.required,
                    openOnFocus: !0,
                    placeholder: t.placeholder
                },
                on: {
                    typing: function(e) {
                        return t.search(e)
                    },
                    input: function(e) {
                        return t.$emit("input", e)
                    }
                }
            })], 1)
        }
          , n = []
          , a = s(38221)
          , o = s.n(a)
          , r = s(51103)
          , l = s(72722)
          , c = s(60409)
          , u = s(66608)
          , d = s(32734)
          , h = {
            name: "BAutocomplete",
            components: (0,
            r._)({}, u.I.name, u.I),
            mixins: [c.F],
            inheritAttrs: !1,
            props: {
                value: [Number, String],
                data: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                field: {
                    type: String,
                    default: "value"
                },
                keepFirst: Boolean,
                clearOnSelect: Boolean,
                openOnFocus: Boolean,
                customFormatter: Function,
                checkInfiniteScroll: Boolean,
                keepOpen: Boolean,
                selectOnClickOutside: Boolean,
                clearable: Boolean,
                maxHeight: [String, Number],
                dropdownPosition: {
                    type: String,
                    default: "auto"
                },
                groupField: String,
                groupOptions: String,
                iconRight: String,
                iconRightClickable: Boolean,
                appendToBody: Boolean,
                type: {
                    type: String,
                    default: "text"
                },
                confirmKeys: {
                    type: Array,
                    default: function() {
                        return ["Tab", "Enter"]
                    }
                },
                selectableHeader: Boolean,
                selectableFooter: Boolean
            },
            data: function() {
                return {
                    selected: null,
                    hovered: null,
                    headerHovered: null,
                    footerHovered: null,
                    isActive: !1,
                    newValue: this.value,
                    newAutocomplete: this.autocomplete || "off",
                    ariaAutocomplete: this.keepFirst ? "both" : "list",
                    isListInViewportVertically: !0,
                    hasFocus: !1,
                    style: {},
                    _isAutocomplete: !0,
                    _elementRef: "input",
                    _bodyEl: void 0,
                    timeOutID: null
                }
            },
            computed: {
                computedData: function() {
                    var t = this;
                    if (this.groupField) {
                        if (this.groupOptions) {
                            var e = [];
                            return this.data.forEach((function(s) {
                                var i = (0,
                                l.Em)(s, t.groupField)
                                  , n = (0,
                                l.Em)(s, t.groupOptions);
                                e.push({
                                    group: i,
                                    items: n
                                })
                            }
                            )),
                            e
                        }
                        var s = {};
                        this.data.forEach((function(e) {
                            var i = (0,
                            l.Em)(e, t.groupField);
                            s[i] || (s[i] = []),
                            s[i].push(e)
                        }
                        ));
                        var i = [];
                        return Object.keys(s).forEach((function(t) {
                            i.push({
                                group: t,
                                items: s[t]
                            })
                        }
                        )),
                        i
                    }
                    return [{
                        items: this.data
                    }]
                },
                isEmpty: function() {
                    return !this.computedData || !this.computedData.some((function(t) {
                        return t.items && t.items.length
                    }
                    ))
                },
                whiteList: function() {
                    var t = [];
                    if (t.push(this.$refs.input.$el.querySelector("input")),
                    t.push(this.$refs.dropdown),
                    void 0 !== this.$refs.dropdown) {
                        var e, s = this.$refs.dropdown.querySelectorAll("*"), i = (0,
                        r.l)(s);
                        try {
                            for (i.s(); !(e = i.n()).done; ) {
                                var n = e.value;
                                t.push(n)
                            }
                        } catch (u) {
                            i.e(u)
                        } finally {
                            i.f()
                        }
                    }
                    if (this.$parent.$data._isTaginput) {
                        t.push(this.$parent.$el);
                        var a, o = this.$parent.$el.querySelectorAll("*"), l = (0,
                        r.l)(o);
                        try {
                            for (l.s(); !(a = l.n()).done; ) {
                                var c = a.value;
                                t.push(c)
                            }
                        } catch (u) {
                            l.e(u)
                        } finally {
                            l.f()
                        }
                    }
                    return t
                },
                hasDefaultSlot: function() {
                    return !!this.$scopedSlots.default
                },
                hasGroupSlot: function() {
                    return !!this.$scopedSlots.group
                },
                hasEmptySlot: function() {
                    return !!this.$slots.empty
                },
                hasHeaderSlot: function() {
                    return !!this.$slots.header
                },
                hasFooterSlot: function() {
                    return !!this.$slots.footer
                },
                isOpenedTop: function() {
                    return "top" === this.dropdownPosition || "auto" === this.dropdownPosition && !this.isListInViewportVertically
                },
                newIconRight: function() {
                    return this.clearable && this.newValue ? "close-circle" : this.iconRight
                },
                newIconRightClickable: function() {
                    return !!this.clearable || this.iconRightClickable
                },
                contentStyle: function() {
                    return {
                        maxHeight: (0,
                        l.Bw)(this.maxHeight)
                    }
                }
            },
            watch: {
                isActive: function(t) {
                    var e = this;
                    "auto" === this.dropdownPosition && (t ? this.calcDropdownInViewportVertical() : this.timeOutID = setTimeout((function() {
                        e.calcDropdownInViewportVertical()
                    }
                    ), 100)),
                    this.$nextTick((function() {
                        e.$emit("active", t)
                    }
                    ))
                },
                checkInfiniteScroll: function(t) {
                    if (!1 !== (this.$refs.dropdown && this.$refs.dropdown.querySelector(".dropdown-content"))) {
                        var e = this.$refs.dropdown.querySelector(".dropdown-content");
                        !0 !== t ? e.removeEventListener("scroll", this.checkIfReachedTheEndOfScroll) : e.addEventListener("scroll", this.checkIfReachedTheEndOfScroll)
                    }
                },
                newValue: function(t) {
                    this.$emit("input", t);
                    var e = this.getValue(this.selected);
                    e && e !== t && this.setSelected(null, !1),
                    !this.hasFocus || this.openOnFocus && !t || (this.isActive = !!t)
                },
                value: function(t) {
                    this.newValue = t
                },
                data: function() {
                    var t = this;
                    if (this.keepFirst)
                        this.$nextTick((function() {
                            t.isActive ? t.selectFirstOption(t.computedData) : t.setHovered(null)
                        }
                        ));
                    else if (this.hovered) {
                        var e = this.getValue(this.hovered)
                          , s = this.computedData.map((function(t) {
                            return t.items
                        }
                        )).reduce((function(t, e) {
                            return [].concat((0,
                            r.e)(t), (0,
                            r.e)(e))
                        }
                        ), []);
                        s.some((function(s) {
                            return t.getValue(s) === e
                        }
                        )) || this.setHovered(null)
                    }
                }
            },
            methods: {
                setHovered: function(t) {
                    void 0 !== t && (this.hovered = t)
                },
                setSelected: function(t) {
                    var e = this
                      , s = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    if (void 0 !== t) {
                        if (this.selected = t,
                        this.$emit("select", this.selected, i),
                        null !== this.selected) {
                            if (this.clearOnSelect) {
                                var n = this.$refs.input;
                                n.newValue = "",
                                n.$refs.input.value = ""
                            } else
                                this.newValue = this.getValue(this.selected);
                            this.setHovered(null)
                        }
                        s && this.$nextTick((function() {
                            e.isActive = !1
                        }
                        )),
                        this.checkValidity()
                    }
                },
                selectFirstOption: function(t) {
                    var e = this;
                    this.$nextTick((function() {
                        var s = t.filter((function(t) {
                            return t.items && t.items.length
                        }
                        ));
                        if (s.length) {
                            var i = s[0].items[0];
                            e.setHovered(i)
                        } else
                            e.setHovered(null)
                    }
                    ))
                },
                keydown: function(t) {
                    var e = t.key;
                    if ("Enter" === e && t.preventDefault(),
                    "Escape" !== e && "Tab" !== e || (this.isActive = !1),
                    this.confirmKeys.indexOf(e) >= 0) {
                        "," === e && t.preventDefault();
                        var s = !this.keepOpen || "Tab" === e;
                        if (null === this.hovered)
                            return void this.checkIfHeaderOrFooterSelected(t, null, s);
                        this.setSelected(this.hovered, s, t)
                    }
                },
                selectHeaderOrFoterByClick: function(t, e) {
                    this.checkIfHeaderOrFooterSelected(t, {
                        origin: e
                    })
                },
                checkIfHeaderOrFooterSelected: function(t, e) {
                    var s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.selectableHeader && (this.headerHovered || e && "header" === e.origin) && (this.$emit("select-header", t),
                    this.headerHovered = !1,
                    e && this.setHovered(null),
                    s && (this.isActive = !1)),
                    this.selectableFooter && (this.footerHovered || e && "footer" === e.origin) && (this.$emit("select-footer", t),
                    this.footerHovered = !1,
                    e && this.setHovered(null),
                    s && (this.isActive = !1))
                },
                clickedOutside: function(t) {
                    var e = (0,
                    l.Gl)(this) ? t.composedPath()[0] : t.target;
                    !this.hasFocus && this.whiteList.indexOf(e) < 0 && (this.keepFirst && this.hovered && this.selectOnClickOutside ? this.setSelected(this.hovered, !0) : this.isActive = !1)
                },
                getValue: function(t) {
                    if (null !== t)
                        return "undefined" !== typeof this.customFormatter ? this.customFormatter(t) : "object" === (0,
                        r.b)(t) ? (0,
                        l.Em)(t, this.field) : t
                },
                checkIfReachedTheEndOfScroll: function() {
                    var t = this.$refs.dropdown.querySelector(".dropdown-content")
                      , e = this.hasFooterSlot ? t.querySelectorAll("div.dropdown-footer")[0].clientHeight : 0;
                    t.clientHeight !== t.scrollHeight && t.scrollTop + t.parentElement.clientHeight + e >= t.scrollHeight && this.$emit("infinite-scroll")
                },
                calcDropdownInViewportVertical: function() {
                    var t = this;
                    this.$nextTick((function() {
                        if (void 0 !== t.$refs.dropdown) {
                            var e = t.$refs.dropdown.getBoundingClientRect();
                            t.isListInViewportVertically = e.top >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight),
                            t.appendToBody && t.updateAppendToBody()
                        }
                    }
                    ))
                },
                keyArrows: function(t) {
                    var e = "down" === t ? 1 : -1;
                    if (this.isActive) {
                        var s, i = this.computedData.map((function(t) {
                            return t.items
                        }
                        )).reduce((function(t, e) {
                            return [].concat((0,
                            r.e)(t), (0,
                            r.e)(e))
                        }
                        ), []);
                        this.hasHeaderSlot && this.selectableHeader && i.unshift(void 0),
                        this.hasFooterSlot && this.selectableFooter && i.push(void 0),
                        s = this.headerHovered ? 0 + e : this.footerHovered ? i.length - 1 + e : i.indexOf(this.hovered) + e,
                        s = s > i.length - 1 ? i.length - 1 : s,
                        s = s < 0 ? 0 : s,
                        this.footerHovered = !1,
                        this.headerHovered = !1,
                        this.setHovered(void 0 !== i[s] ? i[s] : null),
                        this.hasFooterSlot && this.selectableFooter && s === i.length - 1 && (this.footerHovered = !0),
                        this.hasHeaderSlot && this.selectableHeader && 0 === s && (this.headerHovered = !0);
                        var n = this.$refs.dropdown.querySelector(".dropdown-content")
                          , a = "a.dropdown-item:not(.is-disabled)";
                        this.hasHeaderSlot && this.selectableHeader && (a += ",div.dropdown-header"),
                        this.hasFooterSlot && this.selectableFooter && (a += ",div.dropdown-footer");
                        var o = n.querySelectorAll(a)[s];
                        if (!o)
                            return;
                        var l = n.scrollTop
                          , c = n.scrollTop + n.clientHeight - o.clientHeight;
                        o.offsetTop < l ? n.scrollTop = o.offsetTop : o.offsetTop >= c && (n.scrollTop = o.offsetTop - n.clientHeight + o.clientHeight)
                    } else
                        this.isActive = !0
                },
                focused: function(t) {
                    this.getValue(this.selected) === this.newValue && this.$el.querySelector("input").select(),
                    this.openOnFocus && (this.isActive = !0,
                    this.keepFirst && this.selectFirstOption(this.computedData)),
                    this.hasFocus = !0,
                    this.$emit("focus", t)
                },
                onBlur: function(t) {
                    this.hasFocus = !1,
                    this.$emit("blur", t)
                },
                onInput: function() {
                    var t = this.getValue(this.selected);
                    t && t === this.newValue || (this.$emit("typing", this.newValue),
                    this.checkValidity())
                },
                rightIconClick: function(t) {
                    this.clearable ? (this.newValue = "",
                    this.setSelected(null, !1),
                    this.openOnFocus && this.$refs.input.$el.focus()) : this.$emit("icon-right-click", t)
                },
                checkValidity: function() {
                    var t = this;
                    this.useHtml5Validation && this.$nextTick((function() {
                        t.checkHtml5Validity()
                    }
                    ))
                },
                updateAppendToBody: function() {
                    var t = this.$refs.dropdown
                      , e = this.$parent.$data._isTaginput ? this.$parent.$el : this.$refs.input.$el;
                    if (t && e) {
                        var s = this.$data._bodyEl;
                        s.classList.forEach((function(t) {
                            return s.classList.remove(t)
                        }
                        )),
                        s.classList.add("autocomplete"),
                        s.classList.add("control"),
                        this.expandend && s.classList.add("is-expandend");
                        var i = e.getBoundingClientRect()
                          , n = i.top + window.scrollY
                          , a = i.left + window.scrollX;
                        this.isOpenedTop ? n -= t.clientHeight : n += e.clientHeight,
                        this.style = {
                            position: "absolute",
                            top: "".concat(n, "px"),
                            left: "".concat(a, "px"),
                            width: "".concat(e.clientWidth, "px"),
                            maxWidth: "".concat(e.clientWidth, "px"),
                            zIndex: "99"
                        }
                    }
                }
            },
            created: function() {
                "undefined" !== typeof window && (document.addEventListener("click", this.clickedOutside),
                "auto" === this.dropdownPosition && window.addEventListener("resize", this.calcDropdownInViewportVertical))
            },
            mounted: function() {
                if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector(".dropdown-content")) {
                    var t = this.$refs.dropdown.querySelector(".dropdown-content");
                    t.addEventListener("scroll", this.checkIfReachedTheEndOfScroll)
                }
                this.appendToBody && (this.$data._bodyEl = (0,
                l.GM)(this.$refs.dropdown),
                this.updateAppendToBody())
            },
            beforeDestroy: function() {
                if ("undefined" !== typeof window && (document.removeEventListener("click", this.clickedOutside),
                "auto" === this.dropdownPosition && window.removeEventListener("resize", this.calcDropdownInViewportVertical)),
                this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector(".dropdown-content")) {
                    var t = this.$refs.dropdown.querySelector(".dropdown-content");
                    t.removeEventListener("scroll", this.checkIfReachedTheEndOfScroll)
                }
                this.appendToBody && (0,
                l.Nz)(this.$data._bodyEl),
                clearTimeout(this.timeOutID)
            }
        };
        const p = h;
        var m = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "autocomplete control",
                class: {
                    "is-expanded": t.expanded
                }
            }, [s("b-input", t._b({
                ref: "input",
                attrs: {
                    type: t.type,
                    size: t.size,
                    loading: t.loading,
                    rounded: t.rounded,
                    icon: t.icon,
                    "icon-right": t.newIconRight,
                    "icon-right-clickable": t.newIconRightClickable,
                    "icon-pack": t.iconPack,
                    maxlength: t.maxlength,
                    autocomplete: t.newAutocomplete,
                    "use-html5-validation": !1,
                    "aria-autocomplete": t.ariaAutocomplete
                },
                on: {
                    input: t.onInput,
                    focus: t.focused,
                    blur: t.onBlur,
                    "icon-right-click": t.rightIconClick,
                    "icon-click": function(e) {
                        return t.$emit("icon-click", e)
                    }
                },
                nativeOn: {
                    keydown: [function(e) {
                        return t.keydown(e)
                    }
                    , function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.preventDefault(),
                        t.keyArrows("up"))
                    }
                    , function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(),
                        t.keyArrows("down"))
                    }
                    ]
                },
                model: {
                    value: t.newValue,
                    callback: function(e) {
                        t.newValue = e
                    },
                    expression: "newValue"
                }
            }, "b-input", t.$attrs, !1)), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isActive && (!t.isEmpty || t.hasEmptySlot || t.hasHeaderSlot || t.hasFooterSlot),
                    expression: "isActive && (!isEmpty || hasEmptySlot || hasHeaderSlot || hasFooterSlot)"
                }],
                ref: "dropdown",
                staticClass: "dropdown-menu",
                class: {
                    "is-opened-top": t.isOpenedTop && !t.appendToBody
                },
                style: t.style
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isActive,
                    expression: "isActive"
                }],
                staticClass: "dropdown-content",
                style: t.contentStyle
            }, [t.hasHeaderSlot ? s("div", {
                staticClass: "dropdown-item dropdown-header",
                class: {
                    "is-hovered": t.headerHovered
                },
                attrs: {
                    role: "button",
                    tabindex: "0"
                },
                on: {
                    click: function(e) {
                        return t.selectHeaderOrFoterByClick(e, "header")
                    }
                }
            }, [t._t("header")], 2) : t._e(), t._l(t.computedData, (function(e, i) {
                return [e.group ? s("div", {
                    key: i + "group",
                    staticClass: "dropdown-item"
                }, [t.hasGroupSlot ? t._t("group", null, {
                    group: e.group,
                    index: i
                }) : s("span", {
                    staticClass: "has-text-weight-bold"
                }, [t._v(" " + t._s(e.group) + " ")])], 2) : t._e(), t._l(e.items, (function(e, n) {
                    return s("a", {
                        key: i + ":" + n,
                        staticClass: "dropdown-item",
                        class: {
                            "is-hovered": e === t.hovered
                        },
                        attrs: {
                            role: "button",
                            tabindex: "0"
                        },
                        on: {
                            click: function(s) {
                                return s.stopPropagation(),
                                t.setSelected(e, !t.keepOpen, s)
                            }
                        }
                    }, [t.hasDefaultSlot ? t._t("default", null, {
                        option: e,
                        index: n
                    }) : s("span", [t._v(" " + t._s(t.getValue(e, !0)) + " ")])], 2)
                }
                ))]
            }
            )), t.isEmpty && t.hasEmptySlot ? s("div", {
                staticClass: "dropdown-item is-disabled"
            }, [t._t("empty")], 2) : t._e(), t.hasFooterSlot ? s("div", {
                staticClass: "dropdown-item dropdown-footer",
                class: {
                    "is-hovered": t.footerHovered
                },
                attrs: {
                    role: "button",
                    tabindex: "0"
                },
                on: {
                    click: function(e) {
                        return t.selectHeaderOrFoterByClick(e, "footer")
                    }
                }
            }, [t._t("footer")], 2) : t._e()], 2)])])], 1)
        }
          , f = [];
        const v = void 0
          , _ = void 0
          , b = void 0
          , g = !1
          , y = (0,
        d.n)({
            render: m,
            staticRenderFns: f
        }, v, p, _, g, b, !1, void 0, void 0, void 0);
        var k = y
          , w = s(72505)
          , C = s.n(w);
        const S = C().create({
            baseURL: "https://gs96tqye41.execute-api.eu-west-1.amazonaws.com/default/searchAddress"
        });
        async function q(t, e, s="ru") {
            try {
                const {data: i} = await S.get(`/${e}`, {
                    params: {
                        query: t,
                        language: s
                    }
                });
                return i
            } catch (i) {
                return []
            }
        }
        var x = s(95353)
          , $ = {
            components: {
                "b-autocomplete": k
            },
            props: {
                value: String,
                icon: String,
                size: String,
                required: Boolean,
                placeholder: String
            },
            data() {
                return {
                    addressList: []
                }
            },
            computed: {
                ...(0,
                x.aH)("quiz", ["id"])
            },
            methods: {
                search: o()((function(t) {
                    t && q(t, this.id, this.$store.getters.baseLang).then((t=>{
                        this.addressList = t
                    }
                    ))
                }
                ), 300)
            },
            watch: {
                value(t) {
                    this.search(t),
                    this.$refs.addressInput.newValue = t
                }
            }
        }
          , P = $
          , A = s(81656)
          , z = (0,
        A.A)(P, i, n, !1, null, null, null)
          , T = z.exports
    },
    87331: function(t, e, s) {
        "use strict";
        s.d(e, {
            A: function() {
                return C
            }
        });
        var i = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "discount"
            }, [e("div", {
                staticClass: "discount__label"
            }, [e("div", {
                staticClass: "discount__label-text"
            }, [t._v(" " + t._s(t.discountSettings.title || t.$t("Your discount")) + ":  ")])]), e("div", {
                staticClass: "discount__price"
            }, [t._l(t.filteredBubbles, (function(s, i) {
                return e("div", {
                    key: i,
                    staticClass: "discount__bubble discount__bubble"
                }, [t._v(" " + t._s("+" + t.$format.number(t.increasingStep)) + " ")])
            }
            )), e("div", {
                staticClass: "discount__value",
                domProps: {
                    innerHTML: t._s(t.discountLabel)
                }
            }), t.discountSettings.effect ? e("DiscountArrow", {
                staticClass: "discount__arrows",
                attrs: {
                    down: "melting" === t.discountSettings.effect
                }
            }) : t._e()], 2)])
        }
          , n = []
          , a = s(36944)
          , o = s.n(a)
          , r = s(87612)
          , l = s.n(r)
          , c = s(58156)
          , u = s.n(c)
          , d = s(55378)
          , h = s.n(d)
          , p = s(94506)
          , m = s.n(p)
          , f = s(69843)
          , v = s.n(f)
          , _ = s(38570)
          , b = s(95353)
          , g = {
            components: {
                DiscountArrow: _.A
            },
            data() {
                return {
                    interval: null,
                    bubbleShown: !1,
                    increasingStep: null
                }
            },
            computed: {
                ...(0,
                b.aH)(["lang"]),
                ...(0,
                b.aH)("quiz", ["discount", "currency"]),
                ...(0,
                b.L8)("quiz", ["questionNumber", "suitableResults", "discountSettings", "activeQuestions", "countQuestions"]),
                discountLabel() {
                    let t = this.discount;
                    if (!v()(t) && this.discountSettings.effect || (t = this.discountSettings.value),
                    v()(t))
                        return;
                    const e = this.$format.as("percent" === this.discountSettings.type ? "percent" : "currency", t, this.currency, this.lang)
                      , s = {
                        count: `<b>${e}</b>`,
                        interpolation: {
                            escapeValue: !1
                        }
                    };
                    if ("melting" !== this.discountSettings.effect && t) {
                        if (this.resultsMaxDiscount > this.discountSettings.value)
                            return this.$t("from {count}", s);
                        if (this.resultsMaxDiscount < this.discountSettings.value)
                            return this.$t("up to {count}", s)
                    }
                    return `<b>${e}</b>`
                },
                resultsMaxDiscount() {
                    return m()(h()(this.suitableResults, (t=>{
                        const e = u()(t, "discount")
                          , s = "range" === t.costType ? t.maxCost || t.minCost : Number(t.cost);
                        if (e && e.value && s) {
                            if ("number" === this.discountSettings.type)
                                return "number" === e.type ? e.value : Math.floor(s * e.value / 100);
                            if ("percent" === this.discountSettings.type)
                                return "percent" === e.type ? e.value : Math.floor(e.value / s * 100)
                        }
                    }
                    )))
                },
                filteredBubbles() {
                    return l()(this.countQuestions, (t=>this.bubbleShown && this.questionNumber === t + 1 && "increasing" === this.discountSettings.effect))
                }
            },
            watch: {
                questionNumber(t, e) {
                    this.bubbleShown = t > e
                },
                discount(t, e) {
                    this.increasingStep = o()(Math.abs(t - e), "percent" === this.discountSettings.type ? 1 : 0)
                }
            }
        }
          , y = g
          , k = s(81656)
          , w = (0,
        k.A)(y, i, n, !1, null, null, null)
          , C = w.exports
    },
    98007: function(t, e, s) {
        "use strict";
        s.d(e, {
            A: function() {
                return u
            }
        });
        var i = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "bonuses bonuses_mobile",
                class: t.bonusesClasses,
                style: {
                    "--bonus-height": `${t.height}px`,
                    "--bonus-width": `${t.width}px`
                }
            }, t._l(t.bonuses, (function(s, i) {
                return e("Bonus", {
                    key: `bonus_${i}`,
                    staticClass: "bonuses__bonus",
                    attrs: {
                        bonus: s,
                        isLocked: t.isLock(s),
                        expanded: t.expanded,
                        unexpanded: t.unexpanded,
                        single: t.single
                    }
                })
            }
            )), 1)
        }
          , n = []
          , a = s(97210)
          , o = {
            extends: a.A,
            props: {
                hasDiscount: Boolean,
                width: {
                    type: Number,
                    default: 40
                },
                expanded: {
                    type: Boolean,
                    default: !1
                },
                unexpanded: {
                    type: Boolean,
                    default: !1
                },
                single: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                bonusesClasses() {
                    return [`bonuses_count_${this.bonuses.length}`, {
                        bonuses_column: this.expanded || this.single,
                        bonuses_row: this.unexpanded && !this.single,
                        "bonuses_has-discount": this.hasDiscount,
                        bonuses_single: this.single
                    }]
                }
            }
        }
          , r = o
          , l = s(81656)
          , c = (0,
        l.A)(r, i, n, !1, null, null, null)
          , u = c.exports
    },
    73573: function(t, e, s) {
        "use strict";
        s.d(e, {
            A: function() {
                return d
            }
        });
        var i = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "progress-bar-linear",
                class: t.classes
            }, ["progress-bar" === t.type ? e("div", {
                staticClass: "progress-bar-linear__label"
            }, [t._v(" " + t._s(t.$t("Done")) + ": "), e("span", [t._v(t._s(`${t.percent}%`))])]) : t._e(), e("div", {
                staticClass: "progress-bar-linear__field"
            }, [e("span", {
                style: `width: ${t.percent}%`
            }), t.hasMark ? e("div", {
                staticClass: "progress-bar-linear__field-mark",
                style: t.markPosition
            }, [e("div", {
                staticClass: "progress-bar-linear__field-percent"
            }, [t._v(" " + t._s(`${t.percent}%`) + " ")]), e("div", {
                staticClass: "progress-bar-linear__field-pointer"
            })]) : t._e()])])
        }
          , n = []
          , a = s(79859)
          , o = s.n(a)
          , r = {
            name: "ProgressBarLinear",
            props: {
                type: {
                    type: String,
                    default: "progress-bar"
                },
                percent: Number,
                darkColor: Boolean
            },
            computed: {
                classes() {
                    return {
                        "progress-bar-linear_dynamic": "dynamic-progress-bar" === this.type,
                        "progress-bar-linear_dark": this.darkColor,
                        "progress-bar-linear_mobile": "mobile" === this.type
                    }
                },
                hasMark() {
                    return o()(["dynamic-progress-bar", "final"], this.type)
                },
                isRtl() {
                    return "rtl" === this.$i18n.i18next.dir()
                },
                markPosition() {
                    return this.isRtl ? {
                        right: `calc(${this.percent}% - 15px)`
                    } : {
                        left: `${this.percent}%`
                    }
                }
            }
        }
          , l = r
          , c = s(81656)
          , u = (0,
        c.A)(l, i, n, !1, null, null, null)
          , d = u.exports
    },
    91001: function(t, e, s) {
        "use strict";
        s.r(e),
        s.d(e, {
            default: function() {
                return Un
            }
        });
        var i = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "quiz",
                staticClass: "quiz-container",
                class: t.containerClasses
            }, [e("transition", {
                attrs: {
                    appear: "",
                    mode: "out-in",
                    name: t.quizAnimation
                },
                on: {
                    "after-leave": t.afterLeave
                }
            }, [t.page === t.$const.page.QUESTIONS ? e("div", {
                key: "quiz",
                staticClass: "quiz",
                class: {
                    quiz_sidebar_on: t.sidebarShown,
                    "quiz_has-cookie-notice": t.cookieNotice,
                    "quiz_has-mobile-video": t.hasVideoOnSlide && "mobile" === t.$mq && !t.isWidgetMode
                }
            }, [t.currentQuestion ? e("div", {
                staticClass: "quiz__questions",
                style: t.questionsStyle
            }, [t.hasVideoOnSlide && "mobile" === t.$mq && !t.isWidgetMode ? e("CustomVideoPlayer", {
                key: t.questionVideo.link,
                staticClass: "quiz__mobile-video",
                attrs: {
                    video: t.questionVideo,
                    autoplay: t.autoplayVideo,
                    muted: !1,
                    paused: !t.isModalOpen
                },
                on: {
                    paused: function(e) {
                        t.autoplayVideo = !e
                    }
                }
            }) : t._e(), e("div", {
                staticClass: "quiz__questions-header"
            }, [t.hasTitle ? [t.isFullScreen ? e("div", {
                staticClass: "quiz__title"
            }, [e("h3", [t._v(t._s(t.quizTitle))]), t.discount && !t.sidebarShown ? e("Discount", {
                staticClass: "quiz__discount"
            }) : t._e()], 1) : e("h3", {
                staticClass: "quiz__title"
            }, [e("b-icon", {
                staticClass: "quiz__title-icon",
                attrs: {
                    icon: "file-document-box-check-outline"
                }
            }), t._v(" " + t._s(t.quizTitle) + " ")], 1)] : t._e(), t.hasTitle ? e("hr", {
                staticClass: "quiz__title-separator"
            }) : t._e(), e("div", {
                staticClass: "title quiz__question-title",
                class: [{
                    "quiz__question-title_without-title": !t.hasTitle
                }]
            }, [e("transition", {
                attrs: {
                    appear: "",
                    mode: "out-in",
                    name: t.animationType
                }
            }, [e("span", {
                key: t.currentQuestion.id,
                staticClass: "is-block"
            }, [t._v(t._s(t.currentQuestion.title))])]), e("transition", {
                attrs: {
                    name: t.animationType,
                    appear: "",
                    mode: "out-in"
                }
            }, [t.canManyTag || t.canSkipTag ? e("div", {
                key: t.currentQuestion.id,
                staticClass: "quiz__tags"
            }, [t.canManyTag ? e("b-tag", {
                staticClass: "quiz__tag quiz__tag_primary quiz__tag_many"
            }, [e("div", {
                staticClass: "quiz__tag-icon"
            }, [e("b-icon", {
                attrs: {
                    icon: "check-circle",
                    customSize: "mdi-16px"
                }
            })], 1), e("span", {
                staticClass: "quiz__tag-text"
            }, [t._v(t._s(t.$t("select one or more")))])]) : t._e(), t.canSkipTag ? e("b-tag", {
                staticClass: "quiz__tag quiz__tag_skip"
            }, [t._v(" " + t._s(t.$t("can skip")) + " ")]) : t._e()], 1) : t._e()])], 1), t.sidebarShown ? e("div", {
                staticClass: "quiz__sidebar-inner"
            }, [e("transition", {
                attrs: {
                    appear: "",
                    mode: "out-in",
                    name: "quiz__assistant-mobile_animation"
                }
            }, [t.hasAssistantOnSlide && !t.isWidgetMode ? e("AssistantMobile", {
                staticClass: "quiz__assistant",
                attrs: {
                    text: t.questionHint,
                    assistant: t.info.assistant
                }
            }) : t._e()], 1)], 1) : t._e()], 2), e("transition", {
                attrs: {
                    appear: "",
                    mode: "out-in",
                    name: t.animationType
                },
                on: {
                    "after-enter": t.questionEntered,
                    "after-leave": t.questionLeaved,
                    "before-enter": t.checkAssistantOnSlide,
                    "before-leave": t.resetAssistantOnSlide
                }
            }, [e("keep-alive", [e("QuestionWrapper", {
                key: t.currentQuestion.id,
                ref: "question",
                staticClass: "quiz__question",
                attrs: {
                    id: t.currentQuestion.id,
                    question: t.currentQuestion,
                    hasHint: t.hasHintOnSlide && (!t.hasAssistant || t.isWidgetMode)
                },
                scopedSlots: t._u([{
                    key: "whitelabel",
                    fn: function() {
                        return [t.isFullScreen && t.isWhiteLabelShown ? e("div", {
                            staticClass: "quiz__whitelabel"
                        }, [e("WhiteLabel", {
                            style: t.labelStyle
                        })], 1) : t._e()]
                    },
                    proxy: !0
                }], null, !1, 3400290898)
            })], 1)], 1), t.isWhiteLabelActive ? t._e() : e("div", {
                staticClass: "quiz__whitelabel quiz__whitelabel_mobile",
                style: t.labelStyle
            }, ["desktop" !== t.$mq ? e("WhiteLabel", {
                style: t.labelStyle,
                attrs: {
                    mobile: ""
                }
            }) : t._e()], 1), e("div", {
                staticClass: "quiz__navbar"
            }, [e("QuizNavbar", {
                attrs: {
                    passedPercent: t.getPassedPercent,
                    activeQuestion: t.activeQuestion,
                    discount: t.discount,
                    notRequired: t.isQuestionNotRequired,
                    isLast: t.isLastQuestion,
                    filled: t.isQuestionFilled,
                    whiteLabel: !t.sidebarShown,
                    buttonStyle: t.buttonStyle,
                    isBonusesEnabled: t.isBonusesEnabled
                },
                on: {
                    previous: t.prevQuestion,
                    next: t.nextQuestion,
                    "show-lead": t.nextQuestion
                }
            }), e("CookieNotice", {
                staticClass: "quiz__cookie-notice"
            })], 1), t.hasVideoOnSlide && "desktop" === t.$mq && !t.sidebarShown ? e("CircleVideoPlayer", {
                key: t.questionVideo.link,
                staticClass: "quiz__video-circle",
                attrs: {
                    video: t.questionVideo,
                    autoplay: t.autoplayVideo,
                    muted: !1,
                    paused: !t.isModalOpen,
                    playRadius: t.isFullScreen ? 110 : 68
                },
                on: {
                    paused: function(e) {
                        t.autoplayVideo = !e
                    }
                }
            }) : t._e()], 1) : t._e(), e("transition", {
                attrs: {
                    appear: "",
                    mode: "out-in",
                    name: "quiz__sidebar_animation"
                }
            }, [t.sidebarShown ? e("div", {
                staticClass: "quiz__sidebar"
            }, [t.discount ? e("Discount", {
                staticClass: "quiz__discount"
            }) : t._e(), t.hasAssistantOnSlide ? e("Assistant", {
                staticClass: "quiz__assistant",
                attrs: {
                    text: t.questionHint,
                    assistant: t.info.assistant
                }
            }) : t._e(), t.hasVideoOnSlide && "desktop" === t.$mq ? e("CustomVideoPlayer", {
                key: t.questionVideo.link,
                staticClass: "mb-4",
                attrs: {
                    video: t.questionVideo,
                    autoplay: t.autoplayVideo,
                    muted: !1,
                    paused: !t.isModalOpen,
                    rounded: ""
                },
                on: {
                    paused: function(e) {
                        t.autoplayVideo = !e
                    }
                }
            }) : t._e(), t.isBonusesEnabled ? e("Bonuses", {
                staticClass: "quiz__bonuses",
                class: [{
                    quiz__bonuses_bottom: t.hasAssistantOnSlide
                }],
                attrs: {
                    height: t.isFullScreen ? 74 : 64
                }
            }) : t._e(), t.isWhiteLabelActive ? t._e() : e("div", {
                staticClass: "quiz__whitelabel quiz__whitelabel_sidebar",
                style: t.labelStyle
            }, ["mobile" !== t.$mq ? e("WhiteLabel", {
                style: t.labelStyle
            }) : t._e()], 1)], 1) : t._e()])], 1) : t.page === t.$const.page.RESULTS ? e("div", {
                key: "quiz__results",
                staticClass: "quiz__results"
            }, [e("transition", {
                attrs: {
                    name: "quiz__result-loader_animation_slide"
                },
                on: {
                    "after-leave": function(e) {
                        return t.$store.commit("quiz/setPageActive")
                    }
                }
            }, [t.isLoaderShown ? e("div", {
                key: "quiz__result-loader",
                staticClass: "quiz__result-loader"
            }, [e("ResultLoader", {
                on: {
                    finished: function(e) {
                        t.isLoaderShown = !1
                    }
                }
            })], 1) : t._e()]), e("Results")], 1) : t.page === t.$const.page.RESULT || t.page === t.$const.page.PAYMENT ? e("div", {
                key: "quiz__result",
                staticClass: "quiz__result"
            }, [e("transition", {
                attrs: {
                    name: "quiz__result-loader_animation_slide"
                },
                on: {
                    "after-leave": function(e) {
                        return t.$store.commit("quiz/setPageActive")
                    }
                }
            }, [t.isLoaderShown ? e("div", {
                key: "quiz__result-loader",
                staticClass: "quiz__result-loader"
            }, [e("ResultLoader", {
                on: {
                    finished: function(e) {
                        t.isLoaderShown = !1
                    }
                }
            })], 1) : t._e()]), t.page === t.$const.page.PAYMENT ? e("Payment") : e("Result", {
                on: {
                    hasScroll: e=>t.resultHasScroll = e
                }
            })], 1) : t.page === t.$const.page.LEADFORM ? e("div", {
                key: "quiz__leadform'",
                staticClass: "quiz__lead-form"
            }, [e("transition", {
                attrs: {
                    name: "quiz__result-loader_animation_slide"
                },
                on: {
                    "after-leave": function(e) {
                        return t.$store.commit("quiz/setPageActive")
                    }
                }
            }, [t.isLoaderShown ? e("div", {
                key: "quiz__result-loader",
                staticClass: "quiz__result-loader"
            }, [e("ResultLoader", {
                on: {
                    finished: function(e) {
                        t.isLoaderShown = !1
                    }
                }
            })], 1) : t._e()]), e("FinalPage")], 1) : t.page === t.$const.page.THANKS ? e("div", {
                key: "quiz__thanks",
                staticClass: "quiz__thanks"
            }, [e("ThankPage")], 1) : t._e()]), t.redirectUrl ? e("div", {
                staticClass: "quiz__redirect"
            }, [e("Loading", {
                attrs: {
                    isFullPage: "",
                    active: !0
                }
            }, [t._v(" " + t._s(t.redirectMessage) + " ")])], 1) : t._e()], 1)
        }
          , n = []
          , a = s(62216)
          , o = s.n(a)
          , r = s(42426)
          , l = s.n(r)
          , c = s(58156)
          , u = s.n(c)
          , d = s(85471)
          , h = s(19194)
          , p = s(32734)
          , m = {
            name: "BTag",
            props: {
                attached: Boolean,
                closable: Boolean,
                type: [String, Object],
                size: String,
                rounded: Boolean,
                disabled: Boolean,
                ellipsis: Boolean,
                tabstop: {
                    type: Boolean,
                    default: !0
                },
                ariaCloseLabel: String,
                icon: String,
                iconType: String,
                iconPack: String,
                closeType: String,
                closeIcon: String,
                closeIconPack: String,
                closeIconType: String
            },
            methods: {
                close: function(t) {
                    this.disabled || this.$emit("close", t)
                },
                click: function(t) {
                    this.disabled || this.$emit("click", t)
                }
            }
        };
        const f = m;
        var v = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.attached && t.closable ? s("div", {
                staticClass: "tags has-addons inline-tags"
            }, [s("span", {
                staticClass: "tag",
                class: [t.type, t.size, {
                    "is-rounded": t.rounded
                }]
            }, [t.icon ? s("b-icon", {
                attrs: {
                    icon: t.icon,
                    size: t.size,
                    type: t.iconType,
                    pack: t.iconPack
                }
            }) : t._e(), s("span", {
                class: {
                    "has-ellipsis": t.ellipsis
                },
                on: {
                    click: t.click
                }
            }, [t._t("default")], 2)], 1), s("a", {
                staticClass: "tag",
                class: [t.size, t.closeType, {
                    "is-rounded": t.rounded
                }, t.closeIcon ? "has-delete-icon" : "is-delete"],
                attrs: {
                    role: "button",
                    "aria-label": t.ariaCloseLabel,
                    tabindex: !!t.tabstop && 0,
                    disabled: t.disabled
                },
                on: {
                    click: t.close,
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "delete", [8, 46], e.key, ["Backspace", "Delete", "Del"]) ? null : (e.preventDefault(),
                        t.close(e))
                    }
                }
            }, [t.closeIcon ? s("b-icon", {
                attrs: {
                    "custom-class": "",
                    icon: t.closeIcon,
                    size: t.size,
                    type: t.closeIconType,
                    pack: t.closeIconPack
                }
            }) : t._e()], 1)]) : s("span", {
                staticClass: "tag",
                class: [t.type, t.size, {
                    "is-rounded": t.rounded
                }]
            }, [t.icon ? s("b-icon", {
                attrs: {
                    icon: t.icon,
                    size: t.size,
                    type: t.iconType,
                    pack: t.iconPack
                }
            }) : t._e(), s("span", {
                class: {
                    "has-ellipsis": t.ellipsis
                },
                on: {
                    click: t.click
                }
            }, [t._t("default")], 2), t.closable ? s("a", {
                staticClass: "delete is-small",
                class: t.closeType,
                attrs: {
                    role: "button",
                    "aria-label": t.ariaCloseLabel,
                    disabled: t.disabled,
                    tabindex: !!t.tabstop && 0
                },
                on: {
                    click: t.close,
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "delete", [8, 46], e.key, ["Backspace", "Delete", "Del"]) ? null : (e.preventDefault(),
                        t.close(e))
                    }
                }
            }) : t._e()], 1)
        }
          , _ = [];
        const b = void 0
          , g = void 0
          , y = void 0
          , k = !1
          , w = (0,
        p.n)({
            render: v,
            staticRenderFns: _
        }, b, f, g, k, y, !1, void 0, void 0, void 0);
        var C = w
          , S = {
            name: "BTaglist",
            props: {
                attached: Boolean
            }
        };
        const q = S;
        var x = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "tags",
                class: {
                    "has-addons": t.attached
                }
            }, [t._t("default")], 2)
        }
          , $ = [];
        const P = void 0
          , A = void 0
          , z = void 0
          , T = !1
          , E = (0,
        p.n)({
            render: x,
            staticRenderFns: $
        }, P, q, A, T, z, !1, void 0, void 0, void 0);
        var L = E
          , V = {
            install: function(t) {
                (0,
                p.a)(t, C),
                (0,
                p.a)(t, L)
            }
        };
        (0,
        p.u)(V);
        var B = s(95931)
          , H = {
            props: {
                value: [String, Number, Boolean, Function, Object, Array],
                nativeValue: [String, Number, Boolean, Function, Object, Array],
                type: String,
                disabled: Boolean,
                required: Boolean,
                name: String,
                size: String
            },
            data: function() {
                return {
                    newValue: this.value
                }
            },
            computed: {
                computedValue: {
                    get: function() {
                        return this.newValue
                    },
                    set: function(t) {
                        this.newValue = t,
                        this.$emit("input", t)
                    }
                }
            },
            watch: {
                value: function(t) {
                    this.newValue = t
                }
            },
            methods: {
                focus: function() {
                    this.$refs.input.focus()
                }
            }
        }
          , F = {
            name: "BCheckbox",
            mixins: [H],
            props: {
                indeterminate: Boolean,
                ariaLabelledby: String,
                trueValue: {
                    type: [String, Number, Boolean, Function, Object, Array],
                    default: !0
                },
                falseValue: {
                    type: [String, Number, Boolean, Function, Object, Array],
                    default: !1
                },
                autocomplete: {
                    type: String,
                    default: "on"
                },
                inputId: {
                    type: String,
                    default: ""
                }
            }
        };
        const O = F;
        var R = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("label", {
                ref: "label",
                staticClass: "b-checkbox checkbox",
                class: [t.size, {
                    "is-disabled": t.disabled
                }],
                attrs: {
                    disabled: t.disabled
                },
                on: {
                    click: t.focus,
                    keydown: [function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(),
                        t.$refs.label.click())
                    }
                    , function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) ? null : (e.preventDefault(),
                        t.$refs.label.click())
                    }
                    ]
                }
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.computedValue,
                    expression: "computedValue"
                }],
                ref: "input",
                attrs: {
                    id: t.inputId,
                    type: "checkbox",
                    autocomplete: t.autocomplete,
                    disabled: t.disabled,
                    required: t.required,
                    name: t.name,
                    "true-value": t.trueValue,
                    "false-value": t.falseValue,
                    "aria-labelledby": t.ariaLabelledby
                },
                domProps: {
                    indeterminate: t.indeterminate,
                    value: t.nativeValue,
                    checked: Array.isArray(t.computedValue) ? t._i(t.computedValue, t.nativeValue) > -1 : t._q(t.computedValue, t.trueValue)
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    change: function(e) {
                        var s = t.computedValue
                          , i = e.target
                          , n = i.checked ? t.trueValue : t.falseValue;
                        if (Array.isArray(s)) {
                            var a = t.nativeValue
                              , o = t._i(s, a);
                            i.checked ? o < 0 && (t.computedValue = s.concat([a])) : o > -1 && (t.computedValue = s.slice(0, o).concat(s.slice(o + 1)))
                        } else
                            t.computedValue = n
                    }
                }
            }), s("span", {
                staticClass: "check",
                class: t.type
            }), s("span", {
                staticClass: "control-label",
                attrs: {
                    id: t.ariaLabelledby
                }
            }, [t._t("default")], 2)])
        }
          , I = [];
        const M = void 0
          , N = void 0
          , Q = void 0
          , D = !1
          , j = (0,
        p.n)({
            render: R,
            staticRenderFns: I
        }, M, O, N, D, Q, !1, void 0, void 0, void 0);
        var W = j
          , U = {
            name: "BCheckboxButton",
            mixins: [H],
            props: {
                type: {
                    type: String,
                    default: "is-primary"
                },
                expanded: Boolean
            },
            data: function() {
                return {
                    isFocused: !1
                }
            },
            computed: {
                checked: function() {
                    return Array.isArray(this.newValue) ? this.newValue.indexOf(this.nativeValue) >= 0 : this.newValue === this.nativeValue
                }
            }
        };
        const Y = U;
        var X = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "control",
                class: {
                    "is-expanded": t.expanded
                }
            }, [s("label", {
                ref: "label",
                staticClass: "b-checkbox checkbox button",
                class: [t.checked ? t.type : null, t.size, {
                    "is-disabled": t.disabled,
                    "is-focused": t.isFocused
                }],
                attrs: {
                    disabled: t.disabled
                },
                on: {
                    click: t.focus,
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(),
                        t.$refs.label.click())
                    }
                }
            }, [t._t("default"), s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.computedValue,
                    expression: "computedValue"
                }],
                ref: "input",
                attrs: {
                    type: "checkbox",
                    disabled: t.disabled,
                    required: t.required,
                    name: t.name
                },
                domProps: {
                    value: t.nativeValue,
                    checked: Array.isArray(t.computedValue) ? t._i(t.computedValue, t.nativeValue) > -1 : t.computedValue
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    focus: function(e) {
                        t.isFocused = !0
                    },
                    blur: function(e) {
                        t.isFocused = !1
                    },
                    change: function(e) {
                        var s = t.computedValue
                          , i = e.target
                          , n = !!i.checked;
                        if (Array.isArray(s)) {
                            var a = t.nativeValue
                              , o = t._i(s, a);
                            i.checked ? o < 0 && (t.computedValue = s.concat([a])) : o > -1 && (t.computedValue = s.slice(0, o).concat(s.slice(o + 1)))
                        } else
                            t.computedValue = n
                    }
                }
            })], 2)])
        }
          , K = [];
        const Z = void 0
          , G = void 0
          , J = void 0
          , tt = !1
          , et = (0,
        p.n)({
            render: X,
            staticRenderFns: K
        }, Z, Y, G, tt, J, !1, void 0, void 0, void 0);
        var st = et
          , it = {
            install: function(t) {
                (0,
                p.a)(t, W),
                (0,
                p.a)(t, st)
            }
        };
        (0,
        p.u)(it);
        var nt = {
            name: "BRadio",
            mixins: [H]
        };
        const at = nt;
        var ot = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("label", {
                ref: "label",
                staticClass: "b-radio radio",
                class: [t.size, {
                    "is-disabled": t.disabled
                }],
                attrs: {
                    disabled: t.disabled
                },
                on: {
                    click: t.focus,
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(),
                        t.$refs.label.click())
                    }
                }
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.computedValue,
                    expression: "computedValue"
                }],
                ref: "input",
                attrs: {
                    type: "radio",
                    disabled: t.disabled,
                    required: t.required,
                    name: t.name
                },
                domProps: {
                    value: t.nativeValue,
                    checked: t._q(t.computedValue, t.nativeValue)
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    change: function(e) {
                        t.computedValue = t.nativeValue
                    }
                }
            }), s("span", {
                staticClass: "check",
                class: t.type
            }), s("span", {
                staticClass: "control-label"
            }, [t._t("default")], 2)])
        }
          , rt = [];
        const lt = void 0
          , ct = void 0
          , ut = void 0
          , dt = !1
          , ht = (0,
        p.n)({
            render: ot,
            staticRenderFns: rt
        }, lt, at, ct, dt, ut, !1, void 0, void 0, void 0);
        var pt = ht
          , mt = {
            name: "BRadioButton",
            mixins: [H],
            props: {
                type: {
                    type: String,
                    default: "is-primary"
                },
                expanded: Boolean
            },
            data: function() {
                return {
                    isFocused: !1
                }
            },
            computed: {
                isSelected: function() {
                    return this.newValue === this.nativeValue
                },
                labelClass: function() {
                    return [this.isSelected ? this.type : null, this.size, {
                        "is-selected": this.isSelected,
                        "is-disabled": this.disabled,
                        "is-focused": this.isFocused
                    }]
                }
            }
        };
        const ft = mt;
        var vt = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "control",
                class: {
                    "is-expanded": t.expanded
                }
            }, [s("label", {
                ref: "label",
                staticClass: "b-radio radio button",
                class: t.labelClass,
                attrs: {
                    disabled: t.disabled
                },
                on: {
                    click: t.focus,
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(),
                        t.$refs.label.click())
                    }
                }
            }, [t._t("default"), s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.computedValue,
                    expression: "computedValue"
                }],
                ref: "input",
                attrs: {
                    type: "radio",
                    disabled: t.disabled,
                    required: t.required,
                    name: t.name
                },
                domProps: {
                    value: t.nativeValue,
                    checked: t._q(t.computedValue, t.nativeValue)
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    focus: function(e) {
                        t.isFocused = !0
                    },
                    blur: function(e) {
                        t.isFocused = !1
                    },
                    change: function(e) {
                        t.computedValue = t.nativeValue
                    }
                }
            })], 2)])
        }
          , _t = [];
        const bt = void 0
          , gt = void 0
          , yt = void 0
          , kt = !1
          , wt = (0,
        p.n)({
            render: vt,
            staticRenderFns: _t
        }, bt, ft, gt, kt, yt, !1, void 0, void 0, void 0);
        var Ct = wt
          , St = {
            install: function(t) {
                (0,
                p.a)(t, pt),
                (0,
                p.a)(t, Ct)
            }
        };
        (0,
        p.u)(St);
        var qt = s(29739)
          , xt = s(12605)
          , $t = {
            install: function(t) {
                (0,
                p.a)(t, xt.S)
            }
        };
        (0,
        p.u)($t);
        var Pt = s(51103)
          , At = s(21796)
          , zt = s(73154)
          , Tt = {
            name: "BButton",
            components: (0,
            Pt._)({}, At.I.name, At.I),
            inheritAttrs: !1,
            props: {
                type: [String, Object],
                size: String,
                label: String,
                iconPack: String,
                iconLeft: String,
                iconRight: String,
                rounded: {
                    type: Boolean,
                    default: function() {
                        return zt.c.defaultButtonRounded
                    }
                },
                loading: Boolean,
                outlined: Boolean,
                expanded: Boolean,
                inverted: Boolean,
                focused: Boolean,
                active: Boolean,
                hovered: Boolean,
                selected: Boolean,
                nativeType: {
                    type: String,
                    default: "button",
                    validator: function(t) {
                        return ["button", "submit", "reset"].indexOf(t) >= 0
                    }
                },
                tag: {
                    type: String,
                    default: "button",
                    validator: function(t) {
                        return zt.c.defaultLinkTags.indexOf(t) >= 0
                    }
                }
            },
            computed: {
                computedTag: function() {
                    return void 0 !== this.$attrs.disabled && !1 !== this.$attrs.disabled ? "button" : this.tag
                },
                iconSize: function() {
                    return this.size && "is-medium" !== this.size ? "is-large" === this.size ? "is-medium" : this.size : "is-small"
                }
            }
        };
        const Et = Tt;
        var Lt = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s(t.computedTag, t._g(t._b({
                tag: "component",
                staticClass: "button",
                class: [t.size, t.type, {
                    "is-rounded": t.rounded,
                    "is-loading": t.loading,
                    "is-outlined": t.outlined,
                    "is-fullwidth": t.expanded,
                    "is-inverted": t.inverted,
                    "is-focused": t.focused,
                    "is-active": t.active,
                    "is-hovered": t.hovered,
                    "is-selected": t.selected
                }],
                attrs: {
                    type: ["button", "input"].includes(t.computedTag) ? t.nativeType : void 0
                }
            }, "component", t.$attrs, !1), t.$listeners), [t.iconLeft ? s("b-icon", {
                attrs: {
                    pack: t.iconPack,
                    icon: t.iconLeft,
                    size: t.iconSize
                }
            }) : t._e(), t.label ? s("span", [t._v(t._s(t.label))]) : t.$slots.default ? s("span", [t._t("default")], 2) : t._e(), t.iconRight ? s("b-icon", {
                attrs: {
                    pack: t.iconPack,
                    icon: t.iconRight,
                    size: t.iconSize
                }
            }) : t._e()], 1)
        }
          , Vt = [];
        const Bt = void 0
          , Ht = void 0
          , Ft = void 0
          , Ot = !1
          , Rt = (0,
        p.n)({
            render: Lt,
            staticRenderFns: Vt
        }, Bt, Et, Ht, Ot, Ft, !1, void 0, void 0, void 0);
        var It = Rt
          , Mt = {
            install: function(t) {
                (0,
                p.a)(t, It)
            }
        };
        (0,
        p.u)(Mt);
        var Nt = s(46950)
          , Qt = s(90250)
          , Dt = s(97210)
          , jt = s(95353)
          , Wt = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "question-wrapper",
                class: t.classes
            }, [t.hasHint ? e("div", {
                staticClass: "question-wrapper__hint html-content mb-4",
                domProps: {
                    innerHTML: t._s(t.hint)
                }
            }) : t._e(), "multiple" !== t.question.type ? e("Question", {
                staticClass: "question-wrapper__question",
                attrs: {
                    question: t.question,
                    contained: t.hasHint && "mobile" !== t.$mq
                },
                on: {
                    input: function(e) {
                        return t.onInput(t.question, e)
                    },
                    next: t.autoSkipQuestion
                }
            }) : t._l(t.question.questions, (function(s) {
                return e("Question", {
                    key: s.id,
                    staticClass: "question-wrapper__question",
                    class: t.getQuestionClasses(s),
                    attrs: {
                        question: s,
                        showTitle: !0,
                        autofocus: !1,
                        contained: !0
                    },
                    on: {
                        input: function(e) {
                            return t.onInput(s, e)
                        },
                        next: t.autoSkipQuestion
                    }
                })
            }
            )), t._t("whitelabel")], 2)
        }
          , Ut = []
          , Yt = s(83602)
          , Xt = s.n(Yt)
          , Kt = s(62193)
          , Zt = s.n(Kt)
          , Gt = s(98023)
          , Jt = s.n(Gt)
          , te = s(55378)
          , ee = s.n(te)
          , se = s(79859)
          , ie = s.n(se)
          , ne = s(19747)
          , ae = s.n(ne)
          , oe = s(40372)
          , re = s(89154)
          , le = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "question"
            }, [t.showTitle && t.question.title ? e("div", {
                staticClass: "question__title"
            }, [t._v(" " + t._s(t.question.title) + " ")]) : t._e(), e(t.component, {
                key: t.key,
                tag: "component",
                attrs: {
                    question: t.question,
                    autofocus: "inline" !== t.mode && "input" === t.question.type,
                    contained: t.contained
                },
                on: {
                    next: function(e) {
                        return t.$emit("next")
                    }
                },
                model: {
                    value: t.value,
                    callback: function(e) {
                        t.value = e
                    },
                    expression: "value"
                }
            })], 1)
        }
          , ce = []
          , ue = s(12550)
          , de = s.n(ue)
          , he = s(82128)
          , pe = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "answers",
                staticClass: "answer-one-image"
            }, [e("SlideAnimation", {
                staticClass: "answer-one-image__group",
                attrs: {
                    isGroup: !0
                }
            }, [t._l(t.answers, (function(s, i) {
                return e("div", {
                    key: s.id,
                    ref: "answer",
                    refInFor: !0,
                    staticClass: "answer-one-image__variant",
                    class: t.oneImgClasses(s),
                    attrs: {
                        "data-element-index": i
                    }
                }, [e("b-radio", {
                    attrs: {
                        nativeValue: s.id
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [e("Answer", {
                    attrs: {
                        answer: s
                    }
                })], 1)], 1)
            }
            )), t.hasOther ? e("div", {
                key: "other",
                staticClass: "answer-one-image__variant answer-one-image__other",
                class: {
                    "answer_verifying-end": t.isVerifyingEnd
                },
                attrs: {
                    "data-element-index": t.answers.length
                }
            }, [e("OtherInput", {
                attrs: {
                    placeholder: t.otherPlaceholder
                },
                model: {
                    value: t.other,
                    callback: function(e) {
                        t.other = e
                    },
                    expression: "other"
                }
            })], 1) : t._e()], 2), e("SlideAnimation", [e("div", {
                key: t.imageUrl,
                staticClass: "answer-one-image__image"
            }, [t.imageUrl ? e("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.imgLoaded,
                    expression: "imgLoaded"
                }],
                staticClass: "answer-image__img",
                attrs: {
                    src: t.imageUrl,
                    alt: "Answer image"
                },
                on: {
                    load: function(e) {
                        t.imgLoaded = !0
                    }
                }
            }) : e("div", {
                staticClass: "answer-one-image__dummy"
            }, [t._v(" " + t._s(t.dummyText) + " ")]), t.imageUrl && !t.imgLoaded ? e("div", {
                staticClass: "answer-one-image__dummy-loading"
            }) : t._e()])])], 1)
        }
          , me = []
          , fe = s(2404)
          , ve = s.n(fe)
          , _e = s(7309)
          , be = s.n(_e)
          , ge = {
            extends: he.A,
            data() {
                return {
                    imgLoaded: !1
                }
            },
            computed: {
                val: {
                    get() {
                        return this.id
                    },
                    set(t) {
                        this.id = t
                    }
                },
                defaultImage() {
                    return u()(this.question, "options.defaultImage", {})
                },
                activeImage() {
                    const t = !Zt()(this.defaultImage);
                    if (this.other)
                        return null;
                    if (!this.id && t)
                        return this.defaultImage;
                    if (!this.id)
                        return null;
                    const e = be()(this.answers, {
                        id: this.id
                    });
                    return e ? Zt()(e.image) && t ? this.defaultImage : e.image : null
                },
                imageUrl() {
                    return this.activeImage ? this.$image.url(this.activeImage, {
                        width: 380,
                        height: 307,
                        crop: "fill"
                    }) : null
                },
                startText() {
                    return u()(this.question, "options.startText", "")
                },
                dummyText() {
                    return this.other ? this.other : !this.id && this.startText ? this.startText : !this.id && document.body.clientWidth <= 767 ? this.$t("Select option below") : this.id ? u()(be()(this.answers, {
                        id: this.id
                    }), "title", "") : this.$t("Select answer option on the left")
                }
            },
            methods: {
                oneImgClasses(t) {
                    return [{
                        "answer-one-image__variant_selected": this.isChecked(t.id),
                        "answer-one-image__variant_has-hint": !!t.hint
                    }, this.getVerifyingState(t.id)]
                }
            },
            watch: {
                activeImage(t, e) {
                    ve()(t, e) || (this.imgLoaded = !1)
                }
            }
        }
          , ye = ge
          , ke = s(81656)
          , we = (0,
        ke.A)(ye, pe, me, !1, null, null, null)
          , Ce = we.exports
          , Se = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "input-question"
            }, [e("b-field", ["number" === t.type ? e("b-input", {
                ref: "input",
                attrs: {
                    placeholder: t.placeholder || t.$t("Enter only numbers"),
                    size: t.size,
                    validationMessage: t.$t("Enter a number"),
                    type: "number",
                    step: "any",
                    dir: "auto"
                },
                nativeOn: {
                    keydown: function(e) {
                        return t.filterKey.apply(null, arguments)
                    },
                    paste: function(e) {
                        return t.onPaste.apply(null, arguments)
                    }
                },
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            }) : "address" === t.type ? e("div", {
                staticClass: "input-question__address"
            }, [e("AddressInput", {
                ref: "input",
                attrs: {
                    placeholder: t.placeholder,
                    size: t.size
                },
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            })], 1) : e("b-input", {
                ref: "input",
                attrs: {
                    placeholder: t.placeholder,
                    size: t.size,
                    type: t.type,
                    maxlength: "textarea" === t.type ? "1000" : ""
                },
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            })], 1)], 1)
        }
          , qe = []
          , xe = s(99374)
          , $e = s.n(xe)
          , Pe = s(89736)
          , Ae = {
            components: {
                AddressInput: Pe.A
            },
            mounted() {
                !this.autofocus || "inline" === this.mode && 0 === this.activeQuestion || ("address" === this.type ? this.$focusInput(this.$refs.input.$el.querySelector("input")) : this.$focusInput(this.$refs.input))
            },
            props: {
                value: [String, Number],
                question: Object,
                autofocus: {
                    type: Boolean,
                    default: !0
                }
            },
            data() {
                return {
                    val: this.value
                }
            },
            computed: {
                ...(0,
                jt.aH)("quiz", ["mode", "activeQuestion"]),
                ...(0,
                jt.L8)("quiz", ["isWidgetMode"]),
                type() {
                    return u()(this.question, "options.inputType", "text")
                },
                placeholder() {
                    return u()(this.question, "options.placeholder", "")
                },
                size() {
                    return this.isWidgetMode ? "" : "mobile" === this.$mq ? "is-medium" : "is-large"
                }
            },
            methods: {
                filterKey(t) {
                    const e = t.keyCode || t.charCode;
                    ie()([46, 8, 37, 38, 39, 40], e) || ie()([",", ".", "-"], t.key) || t.key.trim() && !isNaN(t.key) || t.preventDefault(),
                    "." !== t.key && "," !== t.key || this.val || (this.val = $e()("0."))
                },
                onPaste(t) {
                    t.preventDefault()
                }
            },
            watch: {
                val(t) {
                    this.$emit("input", t)
                }
            }
        }
          , ze = Ae
          , Te = (0,
        ke.A)(ze, Se, qe, !1, null, null, null)
          , Ee = Te.exports
          , Le = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "answer-select"
            }, [e("b-field", {
                staticClass: "answer-select__field"
            }, [e("b-select", {
                class: t.answerSelectClasses,
                attrs: {
                    size: "is-large",
                    multiple: "many" === t.select,
                    placeholder: t.placeholder
                },
                on: {
                    blur: function(e) {
                        t.focused = !1
                    },
                    focus: function(e) {
                        t.focused = !0
                    }
                },
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            }, t._l(t.answers, (function(s) {
                return e("option", {
                    key: s.id,
                    class: t.getVerifyingState(s.id),
                    domProps: {
                        value: s.id
                    }
                }, [t._v(" " + t._s(s.title) + " ")])
            }
            )), 0)], 1), t.hasHint ? e("div", {
                staticClass: "answer-select__hint",
                class: [{
                    "answer-select__hint_mac": t.isMac
                }],
                domProps: {
                    innerHTML: t._s(t.hint)
                }
            }) : t._e()], 1)
        }
          , Ve = []
          , Be = s(42173)
          , He = s(34247)
          , Fe = s.n(He)
          , Oe = {
            extends: he.A,
            data() {
                return {
                    focused: !1
                }
            },
            computed: {
                isMac: Be.c,
                hasHint() {
                    return !Fe()() && "many" === this.select
                },
                hint() {
                    const t = `<span class="answer-select__hint-key">${this.isMac ? "CMD" : "CTRL"}</span>`;
                    return this.$t("Hold {key} to multiple select", {
                        key: t,
                        interpolation: {
                            escapeValue: !1
                        }
                    })
                },
                answerSelectClasses() {
                    return "mobile" !== this.$mq || this.focused ? {} : {
                        "answer-select__verifying-correct": this.isVerified && !this.isVerifyingEnd,
                        "answer-select__verifying-wrong": this.isVerifyingEnd
                    }
                },
                placeholder() {
                    return u()(this.question, "options.placeholder", "")
                }
            }
        }
          , Re = Oe
          , Ie = (0,
        ke.A)(Re, Le, Ve, !1, null, null, null)
          , Me = Ie.exports
          , Ne = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "answer-statement"
            }, [e("div", {
                staticClass: "answer-statement__text html-content mb-4",
                domProps: {
                    innerHTML: t._s(t.content)
                }
            }), "image" === t.mediaType && t.bgUrl ? e("div", {
                staticClass: "answer-statement__image"
            }, [t.imgLoaded ? t._e() : e("div", {
                staticClass: "answer-statement__image-dummy-loading"
            }), e("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.imgLoaded,
                    expression: "imgLoaded"
                }],
                attrs: {
                    src: t.bgUrl,
                    alt: "Dynamic content"
                },
                on: {
                    load: function(e) {
                        t.imgLoaded = !0
                    }
                }
            })]) : "video" === t.mediaType && t.video ? e("VideoPlayer", {
                staticClass: "answer-statement__video mb-4",
                attrs: {
                    video: t.video,
                    autoplay: t.video.autoplay,
                    muted: !1,
                    paused: !t.isModalOpen
                }
            }) : t._e()], 1)
        }
          , Qe = []
          , De = s(61592)
          , je = {
            components: {
                VideoPlayer: De.A
            },
            created() {
                this.content.length && !this.leadFormDisabled && (this.content = this.content.replace(/<(a+).*?>|<\/a>/g, ""))
            },
            props: {
                question: Object
            },
            data() {
                return {
                    video: this.$video.parse(u()(this.question, "options.video", {})),
                    defaultImage: u()(this.question, "options.defaultImage"),
                    content: u()(this.question, "options.content", ""),
                    mediaType: u()(this.question, "options.mediaType", "image"),
                    imgLoaded: !1
                }
            },
            computed: {
                ...(0,
                jt.aH)("quiz", ["isModalOpen", "leadFormDisabled"]),
                bgUrl() {
                    const t = u()(this.defaultImage, "url");
                    if (t)
                        return this.$image.url(this.defaultImage, {
                            width: 1708,
                            crop: "lfill"
                        })
                }
            }
        }
          , We = je
          , Ue = (0,
        ke.A)(We, Ne, Qe, !1, null, null, null)
          , Ye = Ue.exports
          , Xe = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "verifying-result",
                class: {
                    "verifying-result_verified": t.isVerified
                }
            }, [e("div", {
                staticClass: "verifying-result__state mb-4"
            }, [t._m(0), t._l(t.verifiedAnswers, (function(s) {
                return e("div", {
                    key: s.id,
                    staticClass: "verifying-result__answer"
                }, [e("div", [t._v(t._s(s.title || s.longText))]), e("b-icon", {
                    attrs: {
                        icon: "check"
                    }
                })], 1)
            }
            ))], 2), e("div", {
                staticClass: "verifying-result__explanation html-content",
                domProps: {
                    innerHTML: t._s(t.content)
                }
            })])
        }
          , Ke = [function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "verifying-result__phrase"
            }, [t._v(" " + t._s(t.phrase) + " ")])
        }
        ]
          , Ze = s(58253)
          , Ge = s.n(Ze)
          , Je = s(33031)
          , ts = s.n(Je)
          , es = s(87612)
          , ss = s.n(es)
          , is = s(83472)
          , ns = s.n(is)
          , as = s(18325)
          , os = {
            extends: Ye,
            mixins: [as.A],
            props: {
                question: Object
            },
            computed: {
                ...(0,
                jt.aH)("quiz", ["answers"]),
                ...(0,
                jt.L8)("quiz", ["flatQuestions", "allCorrectAnswers"]),
                parentQuestion() {
                    const t = ns()(u()(this.question, "id"), "_explanation", "");
                    return be()(this.flatQuestions, {
                        id: t
                    })
                },
                selectedAnswers() {
                    return this.answers[u()(this.parentQuestion, "id")]
                },
                correctAnswers() {
                    return this.allCorrectAnswers[u()(this.parentQuestion, "id")]
                },
                verifiedAnswers() {
                    return ss()(u()(this.parentQuestion, "answers"), (t=>ie()(this.correctAnswers, t.id)))
                },
                isVerified() {
                    return "one" === u()(this.parentQuestion, "select") ? ie()(this.correctAnswers, this.selectedAnswers) : ve()(ts()(this.correctAnswers), ts()(this.selectedAnswers))
                },
                phrase() {
                    const t = {
                        correct: [this.getPhrase("correctMessage1"), this.getPhrase("correctMessage2"), this.getPhrase("correctMessage3"), this.getPhrase("correctMessage4"), this.getPhrase("correctMessage5"), this.getPhrase("correctMessage6"), this.getPhrase("correctMessage7")],
                        wrong: [this.getPhrase("wrongMessage")]
                    }
                      , e = t["" + (this.isVerified ? "correct" : "wrong")]
                      , s = e[Ge()(0, e.length - 1)];
                    return s
                }
            }
        }
          , rs = os
          , ls = (0,
        ke.A)(rs, Xe, Ke, !1, null, null, null)
          , cs = ls.exports
          , us = {
            activated() {
                this.value = this.answers[this.question.id],
                this.activated && (this.key = de()(),
                this.activated = !1),
                this.hasConditions && (this.activated = !0)
            },
            props: {
                question: Object,
                showTitle: Boolean,
                contained: Boolean
            },
            data() {
                return {
                    value: null,
                    activated: !1,
                    key: de()()
                }
            },
            computed: {
                ...(0,
                jt.aH)("quiz", ["answers", "mode"]),
                ...(0,
                jt.L8)("quiz", ["hasConditions"]),
                hasImages() {
                    return l()(u()(this.question, "answers", []), (t=>t.image))
                },
                component() {
                    switch (u()(this.question, "type", "variants")) {
                    case "answers":
                        return this.hasImages ? ()=>Promise.all([s.e(5908), s.e(7337), s.e(9506), s.e(6979)]).then(s.bind(s, 84331)) : he.A;
                    case "variants":
                        return he.A;
                    case "images":
                        return ()=>Promise.all([s.e(5908), s.e(7337), s.e(9506), s.e(6979)]).then(s.bind(s, 84331));
                    case "one-image":
                        return Ce;
                    case "emoji":
                        return ()=>s.e(3271).then(s.bind(s, 30692));
                    case "select":
                        return Me;
                    case "input":
                        return Ee;
                    case "date":
                        return ()=>Promise.all([s.e(2487), s.e(7531)]).then(s.bind(s, 88154));
                    case "slider":
                        return ()=>s.e(2436).then(s.bind(s, 17833));
                    case "file":
                        return ()=>s.e(9561).then(s.bind(s, 16761));
                    case "rating":
                        return ()=>s.e(752).then(s.bind(s, 72246));
                    case "statement":
                        return u()(this.question, "isExplanation") ? cs : Ye;
                    case "address":
                        return ()=>s.e(4409).then(s.bind(s, 86141));
                    default:
                        return he.A
                    }
                }
            },
            watch: {
                value(t) {
                    this.$emit("input", t)
                }
            }
        }
          , ds = us
          , hs = (0,
        ke.A)(ds, le, ce, !1, null, null, null)
          , ps = hs.exports
          , ms = {
            name: "QuestionWrapper",
            components: {
                Question: ps
            },
            activated() {
                this.$store.commit("quiz/savePercent", {
                    id: this.question.id,
                    percent: this.getPassedPercent
                })
            },
            props: {
                question: Object,
                hasHint: Boolean
            },
            data() {
                return {
                    lastEditedQuestionType: null
                }
            },
            computed: {
                ...(0,
                jt.aH)("quiz", ["answers"]),
                ...(0,
                jt.L8)("quiz", ["isVerifyingEnabled", "isQuestionFilled", "points"]),
                ...(0,
                jt.L8)("quiz/progress", ["getPassedPercent"]),
                classes() {
                    return [`question-wrapper_${this.question.type}`, {
                        "question-wrapper_has-hint": this.hasHint,
                        "question-wrapper_has-inner-scroll": this.hasInnerScroll,
                        "question-wrapper_has-whitelabel": this.hasWhitelabel
                    }]
                },
                hint() {
                    return u()(this.question, "hint.text")
                },
                canAutoSkip() {
                    return "multiple" === this.question.type ? ae()(u()(this.question, "questions", []), this.canAutoSkipQuestion) : this.canAutoSkipQuestion(this.question)
                },
                hasInnerScroll() {
                    return "one-image" === this.question.type || "variants" === this.question.type && u()(this.question, "options.variantsImage") && !u()(this.question, "options.isLong")
                },
                hasWhitelabel() {
                    return !!this.$slots.whitelabel
                }
            },
            methods: {
                ...(0,
                jt.i0)("quiz", ["nextQuestion"]),
                isAddressQuestion(t) {
                    return "input" === u()(t, "type") && "address" === u()(t, "options.inputType")
                },
                getQuestionClasses(t) {
                    return [`question-wrapper__question_${u()(t, "type")}`, {
                        "question-wrapper__question_address": this.isAddressQuestion(t)
                    }]
                },
                canAutoSkipQuestion(t) {
                    return (0,
                    oe.xh)(t) ? "address" !== t.type && ("one-image" !== t.type && "one" === t.select && ie()(ee()(t.answers, (t=>t.id)), this.answers[t.id])) : "date" === t.type ? "multiple" === u()(this.question, "type") && this.isQuestionFilled && "date" !== this.lastEditedQuestionType : "rating" === t.type && this.isQuestionFilled
                },
                onInput(t, e) {
                    this.lastEditedQuestionType = u()(t, "type"),
                    this.setAnswer(t.id, e),
                    this.canAutoSkip && this.autoSkipQuestion(t, e)
                },
                autoSkipQuestion(t, e) {
                    if (!this.isQuestionFilled)
                        return;
                    let s = 400;
                    if (this.isVerifyingEnabled && t) {
                        const i = (0,
                        re.g)(t, this.points);
                        s = ie()(i, e) ? 500 : 1200
                    }
                    setTimeout((()=>{
                        this.nextQuestion()
                    }
                    ), s)
                },
                setAnswer(t, e) {
                    Jt()(e) || !Zt()(e) || Xt()(e) ? this.$store.commit("quiz/setAnswer", {
                        questionId: t,
                        value: e
                    }) : this.$store.commit("quiz/resetAnswer", t)
                }
            }
        }
          , fs = ms
          , vs = (0,
        ke.A)(fs, Wt, Ut, !1, null, null, null)
          , _s = vs.exports
          , bs = s(87331)
          , gs = s(16622)
          , ys = function() {
            var t = this
              , e = t._self._c;
            return e("transition", {
                attrs: {
                    appear: "",
                    mode: "out-in",
                    name: t.animationName
                },
                on: {
                    "after-enter": function(e) {
                        t.slided = !0
                    }
                }
            }, [e("div", {
                key: "loader",
                staticClass: "result-loader"
            }, [e("transition", {
                attrs: {
                    name: "result-loader__slide-emoji",
                    mode: "out-in",
                    type: "transition"
                },
                on: {
                    "after-leave": function(e) {
                        t.isEmoji2 = !0
                    }
                }
            }, [e("Emoji1", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.slided,
                    expression: "!slided"
                }],
                staticClass: "result-loader__emoji"
            })], 1), e("transition", {
                attrs: {
                    name: "result-loader__slide-emoji",
                    mode: "out-in",
                    type: "transition"
                },
                on: {
                    "after-enter": function(e) {
                        t.isEmoji2 = !1
                    },
                    "after-leave": function(e) {
                        t.isEmoji3 = !0
                    }
                }
            }, [e("Emoji2", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isEmoji2,
                    expression: "isEmoji2"
                }],
                staticClass: "result-loader__emoji"
            })], 1), e("transition", {
                attrs: {
                    name: "result-loader__slide-emoji",
                    mode: "out-in",
                    type: "transition"
                },
                on: {
                    "after-enter": function(e) {
                        return t.$emit("finished")
                    }
                }
            }, [e("Emoji3", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isEmoji3,
                    expression: "isEmoji3"
                }],
                staticClass: "result-loader__emoji"
            })], 1), e("div", {
                staticClass: "result-loader__text"
            }, [t._v(" " + t._s(t.getPhrase("calculation")) + " ")])], 1)])
        }
          , ks = []
          , ws = function() {
            var t = this
              , e = t._self._c;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 64 64",
                    "enable-background": "new 0 0 64 64"
                }
            }, [e("path", {
                attrs: {
                    d: "m37.3 31.9c-.5 2.2.9 4.5 3.2 5 2.3.5 4.6-.9 5.1-3.1l6.1-26.2c.5-2.2-.9-4.5-3.2-5-2.3-.5-4.6.9-5.1 3.1l-6.1 26.2",
                    fill: "#ffdd67"
                }
            }), e("path", {
                attrs: {
                    d: "m38.9 35.6c2.4.5 4.6-.9 5.2-3.1l6.1-26.2c.3-1.2 0-2.4-.7-3.3 2.1.9 2.8 2.7 2.4 4.7l-6.1 26.2c-.5 2.2-2.8 3.7-5.1 3.1-1.1-.2-1.9-.8-2.5-1.6.1 0 .4.1.7.2",
                    fill: "#eba352"
                }
            }), e("g", {
                attrs: {
                    fill: "#ffdd67"
                }
            }, [e("path", {
                attrs: {
                    d: "m45.2 34.5c0 0-8.7-8.6-24.1-4.3 0 0-9.1 1.6-8.6 6.2 0 0-.3 11.4 3.6 18.2 5.9 10.1 28.6 11.7 34.3-7 1.2-3.7.3-13.7-5.2-13.1"
                }
            }), e("path", {
                attrs: {
                    d: "m29.7 33.4c.4 2.3 2.7 3.7 5 3.3 2.3-.4 3.9-2.6 3.5-4.9l-5-26.4c-.4-2.3-2.7-3.7-5-3.3-2.3.4-3.9 2.6-3.4 4.9l4.9 26.4"
                }
            })]), e("path", {
                attrs: {
                    d: "m32.6 36.1c2.4-.4 3.9-2.6 3.5-4.9l-5-26.4c-.3-1.2-1.1-2.2-2.1-2.8 2.2 0 3.8 1.4 4.2 3.4l5 26.4c.4 2.3-1.1 4.5-3.4 4.9-1.1.2-2.1 0-3-.5.2 0 .5 0 .8-.1",
                    fill: "#eba352"
                }
            }), e("g", {
                attrs: {
                    fill: "#ffdd67"
                }
            }, [e("path", {
                attrs: {
                    d: "m12 32.1c-.3-2.3 1.4-4.4 3.8-4.7h.1c2.3-.2 4.5 1.4 4.7 3.8l.7 6.5c.3 2.3-1.4 4.4-3.8 4.7h-.1c-2.4.2-4.5-1.4-4.7-3.8l-.7-6.5"
                }
            }), e("path", {
                attrs: {
                    d: "m20.1 27.4c-.3-2.3 1.4-4.4 3.8-4.7h.1c2.4-.2 4.5 1.4 4.7 3.8l.7 6.5c.3 2.3-1.4 4.4-3.8 4.7h-.1c-2.4.2-4.5-1.4-4.7-3.8l-.7-6.5"
                }
            })]), e("g", {
                attrs: {
                    fill: "#eba352"
                }
            }, [e("path", {
                attrs: {
                    d: "m16.1 41c2.4-.3 4-2.3 3.8-4.7l-.7-6.5c-.1-.6-.4-1.3-.7-1.9 1.5.7 2 1.9 2.2 3.3l.7 6.5c.3 2.3-1.4 4.4-3.7 4.6-1.7.2-3.3-.7-4.1-2 .6.5 1.5.8 2.5.7"
                }
            }), e("path", {
                attrs: {
                    d: "m24.1 36.3c2.4-.3 4.1-2.3 3.8-4.6l-.7-6.5c-.1-.6-.4-1.4-.7-1.9 1.4.8 2 2 2.2 3.4l.7 6.5c.3 2.3-1.4 4.3-3.8 4.6h-.1c-1.7.2-3.3-.7-4.1-2 .8.4 1.7.6 2.7.5"
                }
            }), e("path", {
                attrs: {
                    d: "m41.4 40.8c-4.8-2.3-15.7 1.7-13.5 11.7 0-10.4 9.4-12.2 13.5-11.7"
                }
            }), e("path", {
                attrs: {
                    d: "m39.6 30.5c-3.5-2.1-4.1 1.2-10 1.4-2.6.1-3.7 5.4.2 7.3 5.4 2.7 5.8-1.1 7.2.4 1.4 1.6 2.7 1.9 3.9 3.7.9 1.3 7.6-.7 8.3-3.4 1.3-5.3-4.2-6.1-9.6-9.4"
                }
            })]), e("path", {
                attrs: {
                    d: "m40 31.4c-3.6-2.1-4.3 1.2-10.4 1.4-2.7.1-3.9 5.6.2 7.6 5.6 2.8 6.1-1.2 7.4.4 1.5 1.6 2.8 2 4.1 3.9.9 1.4-1.5 6.6-1.5 6.6s6.9 4.9 8.3 2.1c2.6-5.2 1.9-9.2 1.8-12.2-.2-7.1-4.2-6.4-9.9-9.8",
                    fill: "#ffdd67"
                }
            }), e("g", {
                attrs: {
                    fill: "#eba352"
                }
            }, [e("path", {
                attrs: {
                    d: "m46.9 34.9c3.8 1.8 3.6 11.7.8 16.5-7.1 11.9-22.7 11.7-30 5.3 6.8 7.3 23.4 8 31.1-4.3 3.1-4.9 4.1-16.3-1.9-17.5"
                }
            }), e("path", {
                attrs: {
                    d: "m40.5 44.8c.3.4.2 1.2.1 2.1.4-1.4.7-2.8.3-3.4-1.2-1.9-1.9-2.3-3.4-3.9-1.4-1.5-1.8 2.4-7.4-.4-2.1-1-2.8-3-2.6-4.7-.8 1.8-.4 4.6 2.3 6 5.6 2.8 6.1-1.2 7.4.4 1.4 1.6 2.1 2 3.3 3.9"
                }
            })])])
        }
          , Cs = []
          , Ss = {}
          , qs = (0,
        ke.A)(Ss, ws, Cs, !1, null, null, null)
          , xs = qs.exports
          , $s = function() {
            var t = this
              , e = t._self._c;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 64 64",
                    "enable-background": "new 0 0 64 64"
                }
            }, [e("g", {
                attrs: {
                    fill: "#ffdd67"
                }
            }, [e("path", {
                attrs: {
                    d: "m44.8 34.5c0 0-31.9-2.5-31.4 2.1 0 0-1.6 11.2 2.3 18 5.9 10.1 28.6 11.7 34.3-7 1.2-3.7.3-13.7-5.2-13.1"
                }
            }), e("path", {
                attrs: {
                    d: "m38.7 39.1c0 2.3 1.9 4.2 4.2 4.2 2.3 0 4.2-1.9 4.2-4.2v-32.9c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2v32.9"
                }
            })]), e("path", {
                attrs: {
                    d: "m41 42.3c2.4 0 4.3-1.9 4.3-4.2v-32.9c0-1.2-.6-2.4-1.4-3.1 1.9.4 3.4 2.1 3.4 4.1v32.9c0 2.3-1.9 4.2-4.2 4.2-1.1 0-2-.4-2.8-1 .1 0 .4 0 .7 0",
                    fill: "#eba352"
                }
            }), e("g", {
                attrs: {
                    fill: "#ffdd67"
                }
            }, [e("path", {
                attrs: {
                    d: "m13.4 30c0-2.4 1.9-4.3 4.2-4.3h.1c2.3 0 4.2 1.9 4.2 4.3v6.6c0 2.4-1.9 4.3-4.2 4.3h-.1c-2.3 0-4.2-1.9-4.2-4.3v-6.6"
                }
            }), e("path", {
                attrs: {
                    d: "m21.9 26.2c0-2.4 1.9-4.3 4.2-4.3h.1c2.3 0 4.2 1.9 4.2 4.3v6.6c0 2.4-1.9 4.3-4.2 4.3h-.1c-2.3 0-4.2-1.9-4.2-4.3v-6.6"
                }
            }), e("path", {
                attrs: {
                    d: "m30.4 25.7c0-2.4 1.9-4.3 4.2-4.3h.1c2.3 0 4.2 1.9 4.2 4.3v6.6c0 2.4-1.9 4.3-4.2 4.3h-.1c-2.3 0-4.2-1.9-4.2-4.3v-6.6"
                }
            })]), e("g", {
                attrs: {
                    fill: "#eba352"
                }
            }, [e("path", {
                attrs: {
                    d: "m16.5 39.3c2.4 0 4.2-1.9 4.2-4.2v-6.6c0-.6-.1-1.2-.4-1.8 1 .8 1.7 2 1.7 3.4v6.6c0 2.4-1.8 4.2-4.2 4.2h-.1c-1.7 0-3.2-1-3.8-2.5.7.6 1.6.9 2.6.9"
                }
            }), e("path", {
                attrs: {
                    d: "m24.9 35.5c2.4 0 4.2-1.9 4.2-4.2v-6.6c0-.6-.1-1.2-.4-1.8 1 .8 1.7 2 1.7 3.4v6.6c0 2.4-1.9 4.2-4.2 4.2h-.1c-1.7 0-3.2-1-3.8-2.5.7.6 1.6.9 2.6.9"
                }
            }), e("path", {
                attrs: {
                    d: "m33.3 35c2.4 0 4.2-1.9 4.2-4.2v-6.6c0-.6-.1-1.2-.4-1.8 1 .8 1.7 2 1.7 3.4v6.6c0 2.4-1.9 4.2-4.2 4.2h-.1c-1.7 0-3.2-1-3.8-2.5.8.6 1.7.9 2.6.9"
                }
            }), e("path", {
                attrs: {
                    d: "m41 40.8c-4.8-2.3-15.7 1.7-13.5 11.7 0-10.4 9.4-12.2 13.5-11.7"
                }
            }), e("path", {
                attrs: {
                    d: "m39.2 30.5c-3.5-2.1-4.1 1.2-10 1.4-2.6.1-3.7 5.4.2 7.3 5.4 2.7 5.8-1.1 7.2.4 1.4 1.6 2.7 1.9 3.9 3.7.9 1.3 7.6-.7 8.3-3.4 1.3-5.3-4.1-6.1-9.6-9.4"
                }
            })]), e("path", {
                attrs: {
                    d: "m39.6 31.4c-3.6-2.1-4.3 1.2-10.4 1.4-2.7.1-3.9 5.6.2 7.6 5.6 2.8 6.1-1.2 7.4.4 1.5 1.6 2.8 2 4.1 3.9.9 1.4-1.5 6.6-1.5 6.6s6.9 4.9 8.3 2.1c2.6-5.2 1.9-9.2 1.8-12.2-.2-7.1-4.2-6.4-9.9-9.8",
                    fill: "#ffdd67"
                }
            }), e("g", {
                attrs: {
                    fill: "#eba352"
                }
            }, [e("path", {
                attrs: {
                    d: "m46.6 34.9c3.8 1.8 3.6 11.7.8 16.5-7.1 11.9-22.7 11.7-30 5.3 6.8 7.3 23.4 8 31.1-4.3 3-4.9 4-16.3-1.9-17.5"
                }
            }), e("path", {
                attrs: {
                    d: "m40.1 44.8c.3.4.2 1.2.1 2.1.4-1.4.7-2.8.3-3.4-1.2-1.9-1.9-2.3-3.4-3.9-1.4-1.5-1.8 2.4-7.4-.4-2.1-1-2.8-3-2.6-4.7-.8 1.8-.4 4.6 2.3 6 5.6 2.8 6.1-1.2 7.4.4 1.4 1.6 2.1 2 3.3 3.9"
                }
            })])])
        }
          , Ps = []
          , As = {}
          , zs = (0,
        ke.A)(As, $s, Ps, !1, null, null, null)
          , Ts = zs.exports
          , Es = function() {
            var t = this
              , e = t._self._c;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 64 64",
                    "enable-background": "new 0 0 64 64"
                }
            }, [e("g", {
                attrs: {
                    fill: "#ffdd67"
                }
            }, [e("path", {
                attrs: {
                    d: "m48.6 32.8l-6.6 4.7c0 0-3.3-9.2-5.8-15.1-1-2.4-4.2-3.2-5.7-6.6-2.6-5.8.5-10.8 3.5-7.2 3.5 4.2 8.7 7.3 9.8 9.7 1.7 4 4.8 14.5 4.8 14.5"
                }
            }), e("path", {
                attrs: {
                    d: "m53.8 36.6c.5 3.2.1 8.1-2.7 13.9 0 0-5.7-6.8-6.4-10 0 0-1.6-11.9-3.3-19.5-.7-3.1-4.3-4.9-5.2-9.3-1.6-7.6 3.2-12.9 6-7.8 3.2 5.9 8.6 10.9 9.3 14 1.2 5.3 1.7 14.1 2.3 18.7"
                }
            })]), e("path", {
                attrs: {
                    d: "m45.4 30.6c0 0-.5-4.5-2.2-12.1-.7-3.1-4.3-4.9-5.2-9.3-.6-2.6-.4-5 .3-6.7-1.7 1.3-3.1 4.9-2.2 9.3.9 4.4 4.6 6.2 5.2 9.3.7 3.3 1.3 6.7 1.3 6.7l-5-1.9 7.8 4.7",
                    fill: "#eba352"
                }
            }), e("path", {
                attrs: {
                    d: "m51.4 35.4c-6.6-6-14-9.7-18.8-12-7.1-3.5-5.2 1.3-17.3 4.5-1.6.4-3.5 1.6-2 4.6 1.4 2.9 12.8.7 14.6-1 0 0 4.8 5.9 9.6 5.7 0 0-.8 3.9.3 5.8 0 0-6.8 3.5-9.7 6.6l-8-5.4c-.6-8.3-2.1-10.8-6.2-10.4-3.8.4-3.4 4-3.3 6.9.1 5.3-1.3 6.2 0 8.3 4.9 8 11.2 13 22.8 13 4.3 0 7.1-.1 9.8-1.4 4.4-2.3 15.5-18.5 8.2-25.2",
                    fill: "#ffdd67"
                }
            }), e("g", {
                attrs: {
                    fill: "#eba352"
                }
            }, [e("path", {
                attrs: {
                    d: "m52.7 37c2.5 7.6-6.4 20.1-10.3 22-2.7 1.3-5.4 1.4-9.8 1.4-11.5 0-17.7-4.9-22.6-12.8.1.4.3.9.5 1.3 5 8.1 11.3 13.1 22.9 13.1 4.3 0 7.1-.1 9.8-1.4 4.1-2.1 14-16.2 9.5-23.6"
                }
            }), e("path", {
                attrs: {
                    d: "m18.6 44.4c0 0 7.5 4.8 9.3 5.1l-7.9-5.3c.3-8.4-2.1-11.1-6.2-10.4-.3.1-.6.1-.9.2 4.1-.5 6 2.2 5.7 10.4"
                }
            }), e("path", {
                attrs: {
                    d: "m27.9 31.5c0 0 4.8 5.8 9.6 5.7v-1.1c-4.8.1-9.6-5.7-9.6-5.7-1.8 1.8-13.2 4-14.6 1-.2-.5-.4-1-.5-1.4-.1.6 0 1.4.5 2.5 1.4 2.9 12.8.7 14.6-1"
                }
            })])])
        }
          , Ls = []
          , Vs = {}
          , Bs = (0,
        ke.A)(Vs, Es, Ls, !1, null, null, null)
          , Hs = Bs.exports
          , Fs = {
            mixins: [as.A],
            components: {
                Emoji1: xs,
                Emoji2: Ts,
                Emoji3: Hs
            },
            data() {
                return {
                    slided: !1,
                    isEmoji2: !1,
                    isEmoji3: !1
                }
            },
            computed: {
                ...(0,
                jt.L8)("quiz", ["animationStyle"]),
                animationName() {
                    return "bottomTop" === this.animationStyle ? "result-loader__slide_bottom-top" : "result-loader__slide"
                }
            }
        }
          , Os = Fs
          , Rs = (0,
        ke.A)(Os, ys, ks, !1, null, null, null)
          , Is = Rs.exports
          , Ms = s(88860)
          , Ns = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "quiz-navbar",
                class: t.classes
            }, [t.hasMobilePromotionsBar ? e("div", {
                staticClass: "quiz-navbar__mobile-promotions-bar"
            }, [e("MobilePromotionsBar", {
                attrs: {
                    countQuestions: t.countQuestions,
                    discount: t.discount,
                    autoshow: t.autoshowMobilePromotionsBar,
                    isBonusesEnabled: t.isBonusesEnabled
                }
            })], 1) : t._e(), t.progressEnabled ? e("div", {
                staticClass: "quiz-navbar__progress",
                class: [`quiz-navbar__progress_${t.progressType}`]
            }, [e("ProgressBar", {
                attrs: {
                    percent: Math.round(t.passedPercent),
                    type: t.progressType,
                    number: t.questionNumber,
                    count: t.countQuestions,
                    darkColor: !t.buttonStyle.outline
                }
            })], 1) : t._e(), t.whiteLabel ? e("div", {
                staticClass: "quiz-navbar__whitelabel"
            }, [e("WhiteLabel", {
                style: t.labelStyle
            })], 1) : t._e(), e("div", {
                staticClass: "quiz-navbar__buttons"
            }, [t.isVerifyingEnabled ? t._e() : e("button", {
                ref: "previous",
                staticClass: "button is-link quiz-navbar__button quiz-navbar__button_prev",
                class: {
                    "is-square": t.buttonStyle.square,
                    "is-outline": t.buttonStyle.outline
                },
                attrs: {
                    disabled: 0 === t.activeQuestion
                },
                on: {
                    click: t.goToPrevious
                }
            }, [e("b-icon", {
                attrs: {
                    icon: t.isRtl ? "arrow-right" : "arrow-left"
                }
            })], 1), t.isLast ? t._e() : e("button", {
                staticClass: "button quiz-navbar__button quiz-navbar__button_next",
                class: {
                    "is-blicked": t.filled,
                    "is-square": t.buttonStyle.square,
                    "is-outline": t.buttonStyle.outline
                },
                attrs: {
                    disabled: !t.filled && !t.notRequired
                },
                on: {
                    click: function(e) {
                        return t.$emit("next")
                    }
                }
            }, [e("span", {
                staticClass: "quiz-navbar__button_next-text"
            }, [t._v(t._s(t.getPhrase("questionsNextButton")))]), e("b-icon", {
                staticClass: "quiz-navbar__next-icon",
                attrs: {
                    icon: t.isRtl ? "arrow-left" : "arrow-right"
                }
            })], 1), t.isLast ? e("button", {
                staticClass: "button button_color_theme quiz-navbar__button quiz-navbar__button_next quiz-navbar__button_last-step",
                class: {
                    "is-blicked": t.filled,
                    "is-square": t.buttonStyle.square,
                    "is-outline": t.buttonStyle.outline
                },
                attrs: {
                    disabled: !t.filled && !t.notRequired
                },
                on: {
                    click: function(e) {
                        return t.$emit("show-lead")
                    }
                }
            }, ["mobile" !== t.$mq ? [e("span", {
                staticClass: "quiz-navbar__button_next-text"
            }, [t._v(t._s(t.getPhrase("lastStepButton")))])] : e("span", {
                staticClass: "quiz-navbar__button_next-text"
            }, [t._v(t._s(t.getPhrase("questionsNextButton")))])], 2) : t._e()]), e("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.nextByEnterEnabled ? e("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.hasHint(),
                    expression: "hasHint()"
                }],
                staticClass: "quiz-navbar__hint",
                domProps: {
                    innerHTML: t._s(t.hintText)
                }
            }) : t._e()])], 1)
        }
          , Qs = []
          , Ds = s(5187)
          , js = s.n(Ds)
          , Ws = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "mobile-promotions-bar",
                class: {
                    "is-expanded": t.discountExpanded || t.bonusesExpanded,
                    "hide-navbar": t.isNavbarHidden,
                    "show-navbar": !t.isNavbarHidden
                },
                on: {
                    click: t.turnOnVisibility
                }
            }, [e("div", {
                staticClass: "mobile-promotions-bar__stick"
            }), t.isBonusesEnabled ? e("div", {
                staticClass: "mobile-promotions-bar__bonuses",
                class: {
                    "is-expanded": t.bonusesExpanded
                }
            }, [e("div", {
                staticClass: "mobile-promotions-bar__bonuses"
            }, [e("div", {
                staticClass: "mobile-promotions-bar__bonuses-wrap",
                class: {
                    "is-expanded": t.bonusesExpanded
                }
            }, [e("MobileBonuses", {
                attrs: {
                    height: t.isSwiperEnabled ? 40 : 43,
                    single: !t.isSwiperEnabled,
                    unexpanded: !t.bonusesExpanded,
                    hasDiscount: !!t.discount
                }
            })], 1), t.bonusesExpanded ? e("div", {
                staticClass: "mobile-promotions-bar__bonuses-list",
                class: {
                    "is-expanded": t.bonusesExpanded
                }
            }, [e("MobileBonuses", {
                attrs: {
                    height: 53,
                    expanded: t.bonusesExpanded
                }
            })], 1) : t._e()])]) : t._e(), t.discount ? e("div", {
                staticClass: "mobile-promotions-bar__discount-container",
                class: {
                    "is-expanded": t.discountExpanded
                }
            }, [e("MobileDiscount", {
                staticClass: "mobile-promotions-bar__discount",
                class: {
                    "is-expanded": t.discountExpanded
                },
                attrs: {
                    unexpanded: !t.discountExpanded
                }
            })], 1) : t._e()])
        }
          , Us = []
          , Ys = function() {
            var t = this
              , e = t._self._c;
            return t.discountSettings ? e("div", {
                staticClass: "discount discount_mobile"
            }, [t._l(t.filteredBubbles, (function(s, i) {
                return e("div", {
                    key: i,
                    staticClass: "discount__bubble"
                }, [t._v(" " + t._s("+ " + t.$format.number(t.increasingStep)) + " ")])
            }
            )), e("div", {
                staticClass: "discount__wrap"
            }, [e("div", {
                staticClass: "discount__label"
            }, [e("div", {
                staticClass: "discount__label-text"
            }, [t._v(" " + t._s(t.discountSettings.title || t.$t("Your discount")) + " ")]), t.discountSettings.effect ? e("DiscountArrow", {
                staticClass: "discount__arrows",
                attrs: {
                    down: "melting" === t.discountSettings.effect
                }
            }) : t._e()], 1), e("div", {
                staticClass: "discount__price"
            }, [e("div", {
                staticClass: "discount__value",
                domProps: {
                    innerHTML: t._s(t.discountLabel)
                }
            })])])], 2) : t._e()
        }
          , Xs = []
          , Ks = {
            name: "MobileDiscount",
            extends: bs.A
        }
          , Zs = Ks
          , Gs = (0,
        ke.A)(Zs, Ys, Xs, !1, null, null, null)
          , Js = Gs.exports
          , ti = s(98007)
          , ei = s(2296)
          , si = s.n(ei)
          , ii = s(7350)
          , ni = s.n(ii);
        class ai {
            constructor(t, e, {direction: s="bottom", tapAdditionalSizes: i, distance: n="50%", minDistance: a=20, speed: o="500", vibration: r=!0, cbStart: l=function() {}
            , cbFinish: c=function() {}
            , cbMoving: u=function() {}
            , cbReadyToClose: d=function() {}
            , cbNotReadyToClose: h=function() {}
            , cbBack: p=function() {}
            , isRtl: m=!1}) {
                t && e && (this.target = t,
                this.direction = s,
                this.tapTarget = this._createTapElement(e, i),
                this.maxSpeed = o,
                this.distance = n,
                this.minDistance = a,
                this.vibration = r,
                this.cbStart = l,
                this.cbFinish = c,
                this.cbMoving = u,
                this.cbReadyToClose = d,
                this.cbNotReadyToClose = h,
                this.cbBack = p,
                this.isRtl = m,
                this._init())
            }
            back(t, e, s) {
                this.moving || (this.target.style.transition = "300ms ease-out",
                this.target.style.transform = "translate3d(0, 0, 0)",
                setTimeout((()=>{
                    this.target.style.transition = "",
                    this.cbBack(t, e, s)
                }
                ), 300))
            }
            close(t, e=300, s) {
                this.moving || (this.target.style.transition = `${e}ms ease-out`,
                this.target.style.transform = "translate3d(0, 110%, 0)",
                setTimeout((()=>{
                    this.target.style.transition = "",
                    this.target.style.transform = "translate3d(0, 0, 0)",
                    this.cbFinish(t, e, s)
                }
                ), e))
            }
            _createTapElement(t, e) {
                const s = window.getComputedStyle(t).position;
                "static" === s && (t.style.position = "relative");
                const i = document.createElement("span");
                i.classList.add("tap-target"),
                i.setAttribute("style", "position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000; overscroll-behavior: none;"),
                t.append(i);
                const {top: n=0, bottom: a=0, right: o=0, left: r=0} = e;
                return i.style.top = `-${n}`,
                i.style.height = `calc(${i.style.height} + ${n})`,
                i.style.bottom = a,
                i.style.height = `calc(${i.style.height} + ${a})`,
                i.style.right = this.isRtl ? o : 2 * o,
                i.style.width = `calc(${i.style.width} + ${o})`,
                i.style.left = `-${r}`,
                i.style.width = `calc(${i.style.width} + ${r})`,
                i
            }
            _init() {
                this.moving = !1,
                this._isTouchDevice() || this.tapTarget.addEventListener("click", this.close.bind(this)),
                this.tapTarget.addEventListener("touchstart", this._start.bind(this)),
                this.tapTarget.addEventListener("touchmove", ni()(this._move, 25).bind(this)),
                this.tapTarget.addEventListener("touchend", this._finish.bind(this))
            }
            _start(t) {
                this.moving = !0;
                const e = t.changedTouches[0];
                this.startPosY = e.pageY,
                this.startPosX = e.pageX,
                this.startTime = t.timeStamp,
                this.cbStart(t)
            }
            _move(t) {
                if (this.moving) {
                    const e = t.changedTouches[0]
                      , s = this._getDistanceForClosing()
                      , i = this._getDistance(e)
                      , n = 100 * i / s;
                    this._translate(e),
                    this._borderPassingHandler(t, i, n, s),
                    this.cbMoving(t, i, n)
                }
            }
            _finish(t) {
                this.moving = !1;
                const e = t.changedTouches[0]
                  , s = this._getDistance(e)
                  , i = this._getDistanceForClosing()
                  , n = t.timeStamp - this.startTime;
                n <= this.maxSpeed && s >= this.minDistance ? this.close(t, n, s) : s > i ? this.close(t, 300, s) : this.back(t, n, s)
            }
            _translate(t) {
                switch (this.direction) {
                case "bottom":
                    t.pageY >= this.startPosY ? this.target.style.transform = `translate3d(0, ${t.pageY - this.startPosY}px, 0)` : this.target.style.transform = "translate3d(0, 0, 0)";
                    break;
                case "top":
                    t.pageY <= this.startPosY ? this.target.style.transform = `translate3d(0, ${t.pageY - this.startPosY}px, 0)` : this.target.style.transform = "translate3d(0, 0, 0)";
                    break;
                case "right":
                    t.pageX >= this.startPosX ? this.target.style.transform = `translate3d(${t.pageX - this.startPosX}px, 0, 0)` : this.target.style.transform = "translate3d(0, 0, 0)";
                    break;
                case "left":
                    t.pageX <= this.startPosX ? this.target.style.transform = `translate3d(${t.pageX - this.startPosX}px, 0, 0)` : this.target.style.transform = "translate3d(0, 0, 0)";
                    break
                }
            }
            _borderPassingHandler(t, e, s, i) {
                e > i ? this.borderHasPassed || (this.cbReadyToClose(t, e, s),
                this.borderHasPassed = !0,
                this.vibration && this._vibrate()) : this.borderHasPassed && (this.borderHasPassed = !1,
                this.cbNotReadyToClose(t, e, s))
            }
            _getDistanceForClosing() {
                const t = this.target.clientHeight;
                return si()(this.distance, "%") ? t * parseFloat(this.distance) / 100 : si()(this.distance, "px") ? parseFloat(this.distance) : t / 2
            }
            _getDistance(t) {
                return "bottom" === this.direction || "top" === this.direction ? t.pageY - this.startPosY : t.pageX - this.startPosX
            }
            _vibrate(t=35) {
                if (u()(window, "navigator.vibrate"))
                    try {
                        window.navigator.vibrate(t)
                    } catch (e) {
                        console.log(e)
                    }
            }
            _isTouchDevice() {
                return "ontouchstart"in window || navigator.maxTouchPoints
            }
        }
        var oi, ri, li = ai, ci = {
            name: "MobilePromotionsBar",
            components: {
                MobileBonuses: ti.A,
                MobileDiscount: Js
            },
            mounted() {
                this.isSwiperEnabled && (this.addSwipeEventToClose(),
                this.autoshow && (this.discountExpanded = !0,
                this.bonusesExpanded = !0,
                setTimeout((()=>{
                    this.alreadyClosed || this.swiper.close()
                }
                ), 2e3)))
            },
            props: {
                countQuestions: Number,
                discount: [Number, String],
                isBonusesEnabled: Boolean,
                autoshow: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    discountExpanded: !1,
                    bonusesExpanded: !1,
                    isNavbarHidden: null,
                    alreadyClosed: !1,
                    swiper: null
                }
            },
            computed: {
                isSwiperEnabled() {
                    const t = u()(this.$store, "state.quiz.info.marketing.bonuses", []).length;
                    return t > 1 || 1 === t && !!this.discount
                }
            },
            methods: {
                turnOnVisibility() {
                    !this.isSwiperEnabled || this.bonusesExpanded || this.discountExpanded || (this.isNavbarHidden = !0,
                    setTimeout((()=>{
                        this.discountExpanded = !0,
                        this.bonusesExpanded = !0,
                        this.isNavbarHidden = !1
                    }
                    ), 290))
                },
                addSwipeEventToClose() {
                    const t = this.$el
                      , e = this.$el.querySelector(".mobile-promotions-bar__stick");
                    this.swiper = new li(t,e,{
                        tapAdditionalSizes: {
                            top: "30px",
                            bottom: "50px",
                            left: "100px",
                            right: "100px"
                        },
                        distance: "40%",
                        speed: "200",
                        cbFinish: ()=>{
                            this.discountExpanded = !1,
                            this.bonusesExpanded = !1,
                            this.alreadyClosed = !0
                        }
                        ,
                        isRtl: "rtl" === this.$i18n.i18next.dir()
                    })
                }
            }
        }, ui = ci, di = (0,
        ke.A)(ui, Ws, Us, !1, null, null, null), hi = di.exports, pi = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "progress-bar",
                class: {
                    "progress-bar_dark": t.darkColor
                }
            }, [t.isLinearType ? e("ProgressBarLinear", {
                attrs: {
                    type: t.type,
                    percent: t.percent,
                    darkColor: t.darkColor
                }
            }) : "steps" === t.type ? e("div", {
                staticClass: "progress-bar__steps",
                domProps: {
                    innerHTML: t._s(t.stepsText)
                }
            }) : "text" === t.type ? e("div", {
                staticClass: "progress-bar__text",
                domProps: {
                    innerHTML: t._s(t.text)
                }
            }) : "gradient-text" === t.type ? e("div", {
                staticClass: "progress-bar__gradient",
                style: {
                    "--percent": `${t.percent}%`
                }
            }, [t._v(" " + t._s(t.$t("Questions left: {number}", {
                number: t.count - t.number
            })) + " ")]) : "circular" === t.type ? e("ProgressBarCircular", {
                attrs: {
                    percent: t.percent,
                    darkColor: t.darkColor
                }
            }) : "circular-steps" === t.type ? e("ProgressBarCircularSteps", {
                attrs: {
                    number: t.number,
                    count: t.count,
                    darkColor: t.darkColor
                }
            }) : t._e()], 1)
        }, mi = [], fi = s(73573), vi = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "progress-bar-circular",
                class: {
                    "progress-bar-circular_dark": t.darkColor
                }
            }, [e("div", {
                staticClass: "progress-bar-circular__circle"
            }, [e("svg", [e("circle", {
                attrs: {
                    cx: "14",
                    cy: "14",
                    r: "13"
                }
            }), e("circle", {
                attrs: {
                    cx: "14",
                    cy: "14",
                    r: "13",
                    "stroke-dashoffset": t.dashoffset
                }
            })])]), e("div", {
                staticClass: "progress-bar-circular__label"
            }, [e("div", {
                staticClass: "progress-bar-circular__frase"
            }, [t._v(" " + t._s(t.$t("Done")) + " ")]), e("div", {
                staticClass: "progress-bar-circular__percent"
            }, [t._v(" " + t._s(t.percent) + "% ")])])])
        }, _i = [], bi = {
            name: "ProgressBarCircular",
            props: {
                percent: Number,
                darkColor: Boolean
            },
            computed: {
                dashoffset() {
                    const t = 26 * Math.PI;
                    return (100 - this.percent) / 100 * t
                }
            }
        }, gi = bi, yi = (0,
        ke.A)(gi, vi, _i, !1, null, null, null), ki = yi.exports, wi = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "progress-bar-circular-steps",
                class: {
                    "progress-bar-circular-steps_dark": t.darkColor
                }
            }, [e("div", {
                staticClass: "progress-bar-circular-steps__label"
            }, [t._v(" " + t._s(t.$t("Steps {number} of {count}", {
                number: t.number,
                count: t.count
            })) + " ")]), e("div", {
                staticClass: "progress-bar-circular-steps__gradient-wrapp",
                style: {
                    "--left-percent": `${t.percent}%`,
                    "--right-percent": 50 - t.percent + "%"
                }
            }, [e("div", {
                staticClass: "progress-bar-circular-steps__steps",
                style: {
                    ...t.offset
                }
            }, t._l(t.count, (function(s, i) {
                return e("div", {
                    key: i,
                    staticClass: "progress-bar-circular-steps__step",
                    class: {
                        "progress-bar-circular-steps__step_active": s <= t.number
                    }
                })
            }
            )), 0)])])
        }, Ci = [], Si = {
            name: "ProgressBarCircularSteps",
            props: {
                number: Number,
                count: Number,
                darkColor: Boolean
            },
            data() {
                return {
                    maxPoints: 8
                }
            },
            computed: {
                isRtl() {
                    return "rtl" === this.$i18n.i18next.dir()
                },
                percent() {
                    return 100 / (this.count - 1) * (this.number - 1) / 2
                },
                offset() {
                    const t = Math.round(this.number - this.maxPoints / 2)
                      , e = Math.round(this.count - this.maxPoints)
                      , s = `-${this.number > this.maxPoints / 2 ? 12 * Math.min(t, e) : "0"}px`;
                    return this.isRtl ? {
                        right: s
                    } : {
                        left: s
                    }
                }
            }
        }, qi = Si, xi = (0,
        ke.A)(qi, wi, Ci, !1, null, null, null), $i = xi.exports, Pi = {
            name: "ProgressBar",
            components: {
                ProgressBarCircular: ki,
                ProgressBarLinear: fi.A,
                ProgressBarCircularSteps: $i
            },
            props: {
                type: {
                    type: String,
                    default: "progress-bar"
                },
                percent: Number,
                number: Number,
                count: Number,
                darkColor: Boolean
            },
            computed: {
                isLinearType() {
                    return ie()(["progress-bar", "dynamic-progress-bar", "final", "mobile"], this.type)
                },
                stepsText() {
                    return this.$t("Steps {number} of {count}", {
                        number: `<span>${this.number}</span>`,
                        count: this.count,
                        interpolation: {
                            escapeValue: !1
                        }
                    })
                },
                text() {
                    return this.$t("Question {number} of {count}", {
                        number: `<span>${this.number}</span>`,
                        count: this.count,
                        interpolation: {
                            escapeValue: !1
                        }
                    })
                }
            }
        }, Ai = Pi, zi = (0,
        ke.A)(Ai, pi, mi, !1, null, null, null), Ti = zi.exports, Ei = {
            name: "QuizNavbar",
            mixins: [as.A],
            components: {
                ProgressBar: Ti,
                WhiteLabel: gs.A,
                MobilePromotionsBar: hi
            },
            mounted() {
                window.addEventListener("keyup", this.keyUp, !0)
            },
            beforeDestroy() {
                window.removeEventListener("keyup", this.keyUp, !0)
            },
            props: {
                passedPercent: Number,
                activeQuestion: Number,
                discount: Number,
                isLast: Boolean,
                filled: Boolean,
                notRequired: Boolean,
                whiteLabel: Boolean,
                isBonusesEnabled: Boolean,
                buttonStyle: {
                    type: Object,
                    default: ()=>({
                        square: !1,
                        outline: !1
                    })
                }
            },
            data() {
                return {
                    pressedEnter: !1,
                    keepHideHint: !1,
                    labelStyle: "display: block !important; visibility: visible !important; opacity: 1 !important",
                    isRtl: "rtl" === this.$i18n.i18next.dir()
                }
            },
            computed: {
                ...(0,
                jt.aH)("quiz", ["info"]),
                ...(0,
                jt.L8)("quiz", ["hasConditions", "questionNumber", "countQuestions", "currentQuestion", "isVerifyingEnabled"]),
                classes() {
                    return {
                        "is-outline": this.buttonStyle.outline,
                        "mobile-promotions-bar_on": this.hasMobilePromotionsBar,
                        "quiz-navbar_no-background": this.hasMobilePromotionsBar,
                        "quiz-navbar_has-progress": this.progressEnabled
                    }
                },
                hintText() {
                    return this.$t("or press {key}", {
                        key: "<b>Enter</b>",
                        interpolation: {
                            escapeValue: !1
                        }
                    })
                },
                nextByEnterEnabled() {
                    const t = u()(this.currentQuestion, "options.inputType");
                    return "input" !== u()(this.currentQuestion, "type") || "textarea" !== t && "address" !== t
                },
                progressEnabled() {
                    return u()(this.$store.state.quiz.progress, "enabled", !0)
                },
                progressType() {
                    if (this.hasMobilePromotionsBar && "mobile" === this.$mq)
                        return "mobile";
                    const t = u()(this.$store.state.quiz.progress, "type") || "progress-bar";
                    return this.hasConditions && ie()(["steps", "text", "circular-steps", "gradient-text"], t) ? "progress-bar" : t
                },
                hasMobilePromotionsBar() {
                    return Boolean(this.isBonusesEnabled || this.discount)
                },
                autoshowMobilePromotionsBar() {
                    return js()(u()(this.info, "startPageType"))
                }
            },
            methods: {
                hasHint() {
                    return !this.keepHideHint && (!(this.questionNumber > 3 && !this.pressedEnter) || (this.keepHideHint = !0,
                    !1))
                },
                goToPrevious() {
                    this.$refs.previous.blur(),
                    this.$emit("previous")
                },
                keyUp(t) {
                    if ("Enter" === t.key && this.nextByEnterEnabled && (this.filled || this.notRequired) && (this.pressedEnter = !0,
                    this.$emit("next")),
                    39 === t.keyCode || 37 === t.keyCode) {
                        const e = document.activeElement && ie()(["input", "textarea"], document.activeElement.tagName.toLowerCase());
                        if (e)
                            return;
                        39 === t.keyCode && (this.filled || this.notRequired) && (this.pressedEnter = !0,
                        this.$emit("next")),
                        37 !== t.keyCode || this.isVerifyingEnabled || this.goToPrevious()
                    }
                }
            }
        }, Li = Ei, Vi = (0,
        ke.A)(Li, Ns, Qs, !1, null, null, null), Bi = Vi.exports, Hi = function() {
            var t = this
              , e = t._self._c;
            return e("article", {
                staticClass: "thank-page",
                class: {
                    "thank-page_content-over": t.hasOverContent,
                    "thank-page_assistant": t.isWidgetOpen && t.hasAssistant
                }
            }, [e("div", {
                ref: "content",
                staticClass: "thank-page__content",
                class: {
                    "thank-page__content_row": t.contentSize > 170 && "desktop" === t.$mq
                }
            }, [e("div", {
                staticClass: "thank-page__col thank-page__col_left"
            }, [e("p", {
                staticClass: "title thank-page__title"
            }, [t._v(" " + t._s(t.thanks.header) + " ")]), e("p", {
                ref: "subtitle",
                staticClass: "subtitle thank-page__subtitle",
                domProps: {
                    innerHTML: t._s(t.thanks.content)
                }
            }), t.thanks.buttons.length ? e("div", {
                staticClass: "thank-page__buttons"
            }, t._l(t.thanks.buttons, (function(s, i) {
                return e("a", {
                    key: i,
                    staticClass: "thank-page__button",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return t.redirect(s.link)
                        }
                    }
                }, [t._v(" " + t._s(s.text || t.$t("Visit our site")) + " "), e("div", {
                    staticClass: "thank-page__arrow"
                }, [e("icon", {
                    attrs: {
                        icon: ["mdi", "mdi-arrow-right"]
                    }
                })], 1)])
            }
            )), 0) : t._e(), t.thanks.socials.length ? e("div", {
                staticClass: "thank-page__socials"
            }, [t._l(t.thanks.socials, (function(s, i) {
                return [e("a", {
                    key: i,
                    staticClass: "thank-page__social",
                    attrs: {
                        href: "email" !== s.name ? "#" : s.link,
                        target: "_blank"
                    },
                    on: {
                        click: function(e) {
                            return t.redirect("email" !== s.name ? s.link : null)
                        }
                    }
                }, [e("icon", {
                    attrs: {
                        icon: ["mdi", `mdi-${s.name}`]
                    }
                })], 1)]
            }
            ))], 2) : t._e()]), e("div", {
                staticClass: "thank-page__col thank-page__col_right thank-page__col"
            }, [e("DiscountBadge", {
                staticClass: "thank-page__discount"
            }), t.isBonusesEnabled ? [e("div", {
                staticClass: "thank-page__bonuses-title"
            }, [t._v(" " + t._s(t.bonusesTitle || t.$t("Your bonuses") + ":") + " ")]), e("Bonuses", {
                staticClass: "thank-page__bonuses",
                attrs: {
                    direction: t.isFullScreen ? "row" : "column",
                    height: t.isFullScreen ? 74 : 64,
                    width: t.isFullScreen ? 260 : 195
                }
            })] : t._e()], 2), e("div", {
                staticClass: "thank-page__white-label"
            }, ["desktop" === t.$mq && "en" === t.lang ? e("WhiteLabel") : t._e()], 1)])])
        }, Fi = [], Oi = s(47091), Ri = s.n(Oi), Ii = s(78238), Mi = s(65797), Ni = s(64033), Qi = {
            mixins: [Ni.A],
            components: {
                Bonuses: Dt.A,
                DiscountBadge: Ii.A,
                Icon: Mi.A,
                WhiteLabel: gs.A
            },
            mounted() {
                this.hasOverContent = u()(this.$refs.content, "clientHeight", 0) > document.documentElement.clientHeight,
                this.isLeadWithoutContacts && (this.$store.dispatch("quiz/form/saveLead", this.data),
                Ri()(this.uploadedFileKeys) && this.$store.dispatch("quiz/transferFiles"))
            },
            data() {
                return {
                    hasOverContent: !1
                }
            },
            computed: {
                ...(0,
                jt.aH)(["lang"]),
                ...(0,
                jt.aH)("quiz", ["info", "isWidgetOpen"]),
                ...(0,
                jt.aH)("quiz/form", ["contacts"]),
                ...(0,
                jt.L8)(["isFullScreen"]),
                ...(0,
                jt.L8)("quiz", ["bonusesTitle", "isBonusesEnabled", "data", "isLeadWithoutContacts", "uploadedFileKeys"]),
                ...(0,
                jt.L8)("quiz/form", ["form"]),
                thanks() {
                    const t = u()(this.form, "thanks", {});
                    return {
                        header: t.header || `${this.$t("Thank you")}! 👏`,
                        content: t.content,
                        buttons: ee()(u()(t, "buttons", []), (t=>({
                            link: this.formatLink(t),
                            text: t.text
                        }))),
                        socials: ee()(u()(t, "socials", []), (t=>({
                            link: this.formatLink(t),
                            name: t.name
                        })))
                    }
                },
                contentSize() {
                    return Ri()(u()(this.thanks, "content", ""))
                },
                hasAssistant() {
                    const t = u()(this.info, "assistant.name");
                    return !(!u()(this.info, "assistant.enabled", !!t) || !t)
                }
            },
            methods: {
                formatLink(t) {
                    const e = u()(t, "link", "");
                    return this.isEmailValid(e) ? `mailto:${e}` : e.match(/^(http|https):\/\//) ? e : `//${e}`
                },
                redirect(t) {
                    t && this.$redirect(t, {
                        contacts: this.contacts
                    }, !1, !0)
                }
            }
        }, Di = Qi, ji = (0,
        ke.A)(Di, Hi, Fi, !1, null, null, null), Wi = ji.exports, Ui = function() {
            var t = this
              , e = t._self._c;
            return e("transition", {
                attrs: {
                    name: t.animation
                }
            }, [t.isActive ? e("div", {
                staticClass: "loading"
            }, [e("div", {
                staticClass: "loading-overlay is-active",
                class: {
                    "is-full-page": t.isFullPage
                }
            }, [e("div", {
                staticClass: "loading-background",
                on: {
                    click: t.cancel
                }
            }, [e("SvgIcon", {
                staticClass: "loading-icon2",
                attrs: {
                    name: "loading",
                    color: "var(--color)"
                }
            }), t._t("default")], 2)])]) : t._e()])
        }, Yi = [], Xi = s(14673), Ki = {
            extends: Xi.L
        }, Zi = Ki, Gi = (0,
        ke.A)(Zi, Ui, Yi, !1, null, null, null), Ji = Gi.exports, tn = s(33078), en = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "payment"
            }, ["cloudpayments" === t.service ? e("Cloudpayments", {
                attrs: {
                    amount: t.amount,
                    description: t.description
                },
                on: {
                    success: t.onSuccess,
                    fail: t.onFail
                }
            }) : "tinkoff" === t.service ? e("Tinkoff", {
                attrs: {
                    amount: t.amount,
                    description: t.description
                },
                on: {
                    success: t.onSuccess,
                    fail: t.onFail
                }
            }) : "sberbank" === t.service ? e("Sberbank", {
                attrs: {
                    amount: t.amount,
                    description: t.description
                },
                on: {
                    success: t.onSuccess,
                    fail: t.onFail
                }
            }) : "stripe" === t.service ? e("Stripe", {
                attrs: {
                    amount: t.amount,
                    description: t.description
                },
                on: {
                    success: t.onSuccess,
                    fail: t.onFail
                }
            }) : t._e()], 1)
        }, sn = [], nn = s(39754), an = s.n(nn), on = (s(44114),
        function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "payment-cloudpayments"
            })
        }
        ), rn = [], ln = s(63560), cn = s.n(ln), un = s(81508), dn = s.n(un), hn = {
            mounted() {
                window.marquizPay = this.pay
            },
            props: {
                amount: Number,
                description: String
            },
            computed: {
                ...(0,
                jt.aH)(["lang"]),
                ...(0,
                jt.aH)("quiz", ["info", "currency"]),
                ...(0,
                jt.aH)("quiz/form", ["contacts", "answerId"]),
                payment() {
                    return u()(this.info, "payment", {})
                },
                invoiceId() {
                    return this.answerId
                }
            },
            methods: {
                pay() {},
                onSuccess(t) {
                    this.$emit("success", t)
                },
                onFail(t) {
                    this.$emit("fail", t)
                }
            }
        }, pn = hn, mn = (0,
        ke.A)(pn, oi, ri, !1, null, null, null), fn = mn.exports, vn = {
            extends: fn,
            async mounted() {
                dn()("https://widget.cloudpayments.ru/bundles/cloudpayments", this.pay)
            },
            computed: {
                settings() {
                    return u()(this.payment, "cloudpayments", {})
                },
                language() {
                    return u()({
                        ru: "ru-RU",
                        en: "en-US",
                        de: "de-DE",
                        kk: "kk-KZ",
                        cs: "cs-CZ",
                        vi: "vi-VN",
                        tr: "tr-TR",
                        es: "es-ES"
                    }, this.lang, this.lang)
                }
            },
            methods: {
                pay() {
                    const t = new window.cp.CloudPayments({
                        language: this.language
                    })
                      , e = {};
                    u()(this.settings, "receipt") && cn()(e, "cloudPayments.CustomerReceipt", {
                        Items: [{
                            label: u()(this.settings, "description") || this.description,
                            price: this.amount,
                            amount: this.amount,
                            quantity: 1,
                            vat: u()(this.settings, "vat"),
                            method: u()(this.settings, "method"),
                            object: u()(this.settings, "object"),
                            measurementUnit: u()(this.settings, "unit")
                        }],
                        email: this.contacts.email,
                        phone: this.contacts.phone,
                        customerInfo: this.contacts.name,
                        isBso: !1,
                        amounts: {
                            electronic: this.amount
                        }
                    }),
                    t.pay("charge", {
                        publicId: u()(this.settings, "publicId"),
                        description: u()(this.settings, "description") || this.description,
                        amount: Number(this.amount),
                        currency: this.currency,
                        accountId: this.contacts.email,
                        invoiceId: this.invoiceId,
                        skin: u()(this.settings, "skin"),
                        requireEmail: u()(this.settings, "emailRequired"),
                        data: e
                    }, {
                        onComplete: (t,e)=>{
                            const s = {
                                invoiceId: u()(e, "invoiceId"),
                                amount: u()(e, "amount"),
                                response: t
                            };
                            t.success ? this.onSuccess(s) : this.onFail(s)
                        }
                    })
                }
            }
        }, _n = vn, bn = (0,
        ke.A)(_n, on, rn, !1, null, null, null), gn = bn.exports, yn = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "payment-tinkoff"
            }, [e("form", {
                attrs: {
                    id: "payment-tinkoff",
                    name: "TinkoffPayForm"
                }
            }, [e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "terminalkey"
                },
                domProps: {
                    value: t.settings.terminalkey
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "frame",
                    value: "true"
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "language"
                },
                domProps: {
                    value: t.lang
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "reccurentPayment",
                    value: "false"
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "customerKey",
                    value: ""
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "amount"
                },
                domProps: {
                    value: t.amount
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "order"
                },
                domProps: {
                    value: t.answerId
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "description"
                },
                domProps: {
                    value: t.description
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "name"
                },
                domProps: {
                    value: t.contacts.name
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "email"
                },
                domProps: {
                    value: t.contacts.email
                }
            }), e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "phone"
                },
                domProps: {
                    value: t.contacts.phone
                }
            }), t.settings.receipt ? e("input", {
                staticClass: "tinkoffPayRow",
                attrs: {
                    type: "hidden",
                    name: "receipt"
                },
                domProps: {
                    value: t.receipt
                }
            }) : t._e()])])
        }, kn = [], wn = {
            extends: fn,
            async mounted() {
                dn()("https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js", this.pay)
            },
            computed: {
                settings() {
                    return u()(this.payment, "tinkoff", {})
                },
                receipt() {
                    return JSON.stringify({
                        Email: this.contacts.email,
                        Phone: this.contacts.phone,
                        EmailCompany: this.settings.emailCompany,
                        Taxation: this.settings.taxation,
                        Items: [{
                            Name: u()(this.settings, "description") || this.description,
                            Price: 100 * this.amount,
                            Quantity: 1,
                            Amount: 100 * this.amount,
                            PaymentMethod: "full_prepayment",
                            PaymentObject: this.settings.paymentObject,
                            Tax: this.settings.tax
                        }]
                    })
                }
            },
            methods: {
                pay() {
                    window.pay(document.querySelector("#payment-tinkoff"))
                }
            }
        }, Cn = wn, Sn = (0,
        ke.A)(Cn, yn, kn, !1, null, null, null), qn = Sn.exports, xn = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "payment-sberbank"
            })
        }, $n = [], Pn = {
            extends: fn,
            async mounted() {
                dn()("https://securepayments.sberbank.ru/payment/docsite/assets/js/ipay.js", this.pay)
            },
            computed: {
                settings() {
                    return u()(this.payment, "sberbank", {})
                }
            },
            methods: {
                pay() {
                    new IPAY({
                        api_token: this.settings.apiToken
                    }),
                    window.ipayCheckout({
                        amount: this.amount,
                        currency: this.currency,
                        order_number: this.answerId,
                        description: u()(this.settings, "description") || this.description
                    }, this.$emit("success"), this.$emit("fail"))
                }
            }
        }, An = Pn, zn = (0,
        ke.A)(An, xn, $n, !1, null, null, null), Tn = zn.exports, En = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "payment-stripe"
            }, [e("b-modal", {
                attrs: {
                    canCancel: ["escape"],
                    customClass: "payment-stripe__modal"
                },
                on: {
                    close: t.closeModal
                },
                model: {
                    value: t.modalShow,
                    callback: function(e) {
                        t.modalShow = e
                    },
                    expression: "modalShow"
                }
            }, [e("div", {
                staticClass: "payment-stripe__body",
                style: {
                    backgroundColor: t.isNightTheme ? "#30313d" : ""
                }
            }, [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.loading,
                    expression: "!loading"
                }],
                staticClass: "payment-stripe__form"
            }, [t.elements ? e("div", {
                staticClass: "payment-stripe__description",
                style: t.textColor
            }, [t._v(" " + t._s(t.settings.description || t.description) + " ")]) : t._e(), e("form", {
                attrs: {
                    id: "stripe-payment"
                }
            }), t.elements ? e("b-checkbox", {
                staticClass: "payment-stripe__checkbox",
                model: {
                    value: t.emailCheckbox,
                    callback: function(e) {
                        t.emailCheckbox = e
                    },
                    expression: "emailCheckbox"
                }
            }, [e("span", {
                style: t.textColor
            }, [t._v("Send an email receipt")])]) : t._e(), t.emailCheckbox ? e("b-input", {
                staticClass: "payment-stripe__email",
                class: `payment-stripe__email_${t.settings.theme}`,
                attrs: {
                    placeholder: t.$t("mail@example.com"),
                    required: !1,
                    type: "text"
                },
                model: {
                    value: t.contacts.email,
                    callback: function(e) {
                        t.$set(t.contacts, "email", "string" === typeof e ? e.trim() : e)
                    },
                    expression: "contacts.email"
                }
            }) : t._e(), t.elements ? e("button", {
                staticClass: "payment-stripe__button button is-primary result__button",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.onPay.apply(null, arguments)
                    }
                }
            }, [t._v(" Pay now " + t._s(t.$format.currency(t.amount, t.currency)) + " ")]) : t._e(), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.errorMessage,
                    expression: "errorMessage"
                }],
                staticClass: "payment-stripe__error"
            }, [t._v(" " + t._s(t.errorMessage) + " ")])], 1), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.loading,
                    expression: "loading"
                }],
                staticClass: "payment-stripe__loading"
            }), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.loading,
                    expression: "!loading"
                }],
                staticClass: "payment-stripe__close",
                on: {
                    click: t.closeModal
                }
            }, [e("div", {
                staticClass: "payment-stripe__text",
                style: t.textColor
            }, [t._v(" Close ")]), e("b-icon", {
                staticClass: "payment-stripe__icon",
                attrs: {
                    icon: "close",
                    size: "is-medium",
                    type: "is-light"
                }
            })], 1)])])], 1)
        }, Ln = [], Vn = {
            extends: fn,
            async mounted() {
                dn()("https://js.stripe.com/v3/", this.pay)
            },
            data() {
                return {
                    stripe: null,
                    clientSecret: null,
                    elements: null,
                    errorMessage: null,
                    loading: !0,
                    modalShow: !0,
                    emailCheckbox: !1
                }
            },
            computed: {
                settings() {
                    return u()(this.payment, "stripe", {})
                },
                isNightTheme() {
                    return "night" === u()(this.settings, "theme", "stripe")
                },
                textColor() {
                    return {
                        color: this.isNightTheme ? "#ffffff" : "#4A4A4A"
                    }
                }
            },
            methods: {
                async pay() {
                    try {
                        this.stripe = Stripe(u()(this.settings, "publishableKey"));
                        const t = await this.$axios.post("integrations/stripe/create-payment-intent", {
                            secretKey: u()(this.settings, "secretKey"),
                            amount: this.amount,
                            currency: this.currency,
                            description: u()(this.settings, "description") || this.description,
                            receipt_email: this.emailCheckbox ? u()(this.contacts, "email") : null
                        });
                        this.clientSecret = u()(t, "data.clientSecret"),
                        this.elements = this.stripe.elements({
                            appearance: {
                                theme: u()(this.settings, "theme", "stripe")
                            },
                            clientSecret: this.clientSecret
                        });
                        const e = this.elements.create("payment");
                        e.mount("#stripe-payment"),
                        this.loading = !1
                    } catch (t) {
                        this.loading = !1,
                        this.errorMessage = u()(t, "message", "Something goes wrong, please try again.")
                    }
                },
                async onPay() {
                    try {
                        this.loading = !0;
                        const {error: t} = await this.stripe.confirmPayment({
                            elements: this.elements,
                            confirmParams: {
                                return_url: u()(this.info, "form.redirect") || "https://marquiz.io/",
                                receipt_email: this.emailCheckbox ? u()(this.contacts, "email") : null
                            },
                            redirect: "if_required"
                        });
                        if (t)
                            throw t;
                        setTimeout((()=>this.checkPaymentStatus()), 2e3)
                    } catch (t) {
                        this.loading = !1,
                        this.errorMessage = u()(t, "message", "An unexpected error occurred.")
                    }
                },
                async checkPaymentStatus() {
                    const {paymentIntent: t} = await this.stripe.retrievePaymentIntent(this.clientSecret);
                    switch (t.status) {
                    case "succeeded":
                        this.loading = !1,
                        this.$emit("success", t);
                        break;
                    case "processing":
                        setTimeout((()=>this.checkPaymentStatus), 1e3);
                        break;
                    default:
                        this.errorMessage = u()(t, "last_payment_error.message", "Your payment was not successful, please try again."),
                        this.loading = !1,
                        this.$emit("fail", t);
                        break
                    }
                },
                closeModal() {
                    this.modalShow = !1,
                    this.$store.dispatch("quiz/showResult")
                }
            }
        }, Bn = Vn, Hn = (0,
        ke.A)(Bn, En, Ln, !1, null, null, null), Fn = Hn.exports, On = {
            components: {
                Cloudpayments: gn,
                Tinkoff: qn,
                Sberbank: Tn,
                Stripe: Fn
            },
            created() {
                const t = [];
                an()(this.payment, ((e,s)=>{
                    e.enabled && t.push(s)
                }
                )),
                t.length && (this.service = t[0])
            },
            data() {
                return {
                    service: null
                }
            },
            computed: {
                ...(0,
                jt.aH)("quiz", ["info", "leadFormDisabled"]),
                ...(0,
                jt.L8)("quiz", ["result", "resultAmount", "data"]),
                payment() {
                    return u()(this.info, "payment", {})
                },
                amount() {
                    return this.resultAmount(this.result).cost
                },
                description() {
                    return u()(this.result, "internalName") || u()(this.result, "title")
                }
            },
            methods: {
                onSuccess(t) {
                    this.$store.dispatch("quiz/analyticEvent", "marquiz-payment-success"),
                    this.updateLead(!0, t),
                    this.result.link ? this.$redirect(this.result.link) : u()(this.info, "form.redirect") ? this.$redirect(this.info.form.redirect) : this.$store.commit("quiz/showPage", this.$const.page.THANKS)
                },
                onFail(t) {
                    this.$store.dispatch("quiz/analyticEvent", "marquiz-payment-fail"),
                    this.updateLead(!1, t)
                },
                updateLead(t, e) {
                    if (this.leadFormDisabled)
                        return;
                    const s = {
                        ...this.data
                    };
                    s.extra.payment = {
                        paid: t,
                        provider: this.service,
                        ...e
                    },
                    this.$store.dispatch("quiz/form/saveLead", s)
                }
            }
        }, Rn = On, In = (0,
        ke.A)(Rn, en, sn, !1, null, null, null), Mn = In.exports, Nn = s(47159), Qn = s(88605);
        d["default"].use(h.A),
        d["default"].use(V),
        d["default"].use(B.A),
        d["default"].use(it),
        d["default"].use(St),
        d["default"].use(qt.A),
        d["default"].use($t),
        d["default"].use(Mt);
        var Dn = {
            mixins: [as.A],
            components: {
                ResultLoader: Is,
                FinalPage: ()=>Promise.all([s.e(2487), s.e(2335)]).then(s.bind(s, 43345)),
                QuizNavbar: Bi,
                Assistant: Nt.A,
                AssistantMobile: Qt.A,
                Discount: bs.A,
                QuestionWrapper: _s,
                Bonuses: Dt.A,
                WhiteLabel: gs.A,
                Results: ()=>Promise.all([s.e(7337), s.e(9477)]).then(s.bind(s, 89477)),
                Result: Ms.A,
                ThankPage: Wi,
                Payment: Mn,
                Loading: Ji,
                CookieNotice: tn.A,
                CustomVideoPlayer: Nn.A,
                CircleVideoPlayer: Qn.A
            },
            mounted() {
                this.changeHeight(),
                this.animationType = this.slideAnimations?.forward ?? "quiz__question_animation_forward"
            },
            data() {
                return {
                    animationType: "",
                    frameHeight: null,
                    isLoaderShown: !1,
                    resultHasScroll: !1,
                    hasAssistantOnSlide: !1,
                    autoplayVideo: !0,
                    page: this.$store.state.quiz.page
                }
            },
            computed: {
                ...(0,
                jt.aH)(["cookieNotice"]),
                ...(0,
                jt.L8)(["isFullScreen"]),
                ...(0,
                jt.aH)("quiz", {
                    storePage: "page"
                }),
                ...(0,
                jt.aH)("quiz", ["activeQuestion", "info", "id", "activePage", "redirectUrl", "isModalOpen", "resultLoaderShown", "results"]),
                ...(0,
                jt.L8)("quiz", ["questions", "currentQuestion", "isLastQuestion", "isQuestionFilled", "isQuestionNotRequired", "isWhiteLabelActive", "result", "isBonusesEnabled", "buttonStyle", "isWidgetMode", "animationStyle", "resultsPosition", "quizTitle", "hasQuestions", "hasResults"]),
                ...(0,
                jt.L8)("quiz/progress", ["getPassedPercent"]),
                discount() {
                    return u()(this.info, "marketing.discount.value") || u()(this.info, "marketing.discount.percent")
                },
                quizAnimation() {
                    const t = this.$const.page;
                    if (!this.resultLoaderShown) {
                        if (this.storePage === t.RESULTS && "afterForm" !== this.resultsPosition)
                            return "quiz_animation_slide";
                        if (this.storePage === t.LEADFORM && "beforeForm" !== this.resultsPosition)
                            return "quiz_animation_slide";
                        if ("mobile" === this.$mq && this.storePage === t.RESULT)
                            return "quiz_animation_slide"
                    }
                    return "quiz_animation_fade"
                },
                sidebarShown() {
                    return this.discount && !this.isFullScreen || this.discount && !this.hasTitle || this.hasAssistantOnSlide || this.isBonusesEnabled
                },
                bonuses() {
                    return u()(this.info, "marketing.bonuses", [])
                },
                questionType() {
                    return u()(this.currentQuestion, "type")
                },
                canManyTag() {
                    return "multiple" !== this.questionType ? (0,
                    oe.C7)(this.currentQuestion) : l()(u()(this.currentQuestion, "questions", []), oe.C7)
                },
                canSkipTag() {
                    return this.isQuestionNotRequired && "statement" !== this.currentQuestion.type && !("owner" === this.currentQuestion?.address?.addressBy && !this.currentQuestion?.address?.hasSelection)
                },
                hasTitle() {
                    return !!u()(this.info, "title") && !this.isWidgetMode && !(this.hasVideoOnSlide && "mobile" === this.$mq)
                },
                containerClasses() {
                    return {
                        "quiz-container_result-has_scroll": this.resultHasScroll,
                        "quiz-container_has_widget": this.isWidgetMode,
                        "hide-scrollbar": this.isWidgetMode,
                        "quiz-container_animation-direction_bt": this.animationStyle === this.$const.animation.BOTTOM_TOP,
                        "quiz-container_rtl": "rtl" === this.$i18n.i18next.dir()
                    }
                },
                questionsStyle() {
                    const t = this.isWidgetMode && this.page === this.$const.page.QUESTIONS && this.hasAssistant;
                    let e = "0";
                    t && (e = this.hasVideoOnSlide ? "220px" : "calc(1rem + 50px)");
                    const s = this.cookieNotice ? "137px" : "67px";
                    return "desktop" !== this.$mq ? `padding: ${e} 0 ${s} !important` : ""
                },
                slideAnimations() {
                    const t = {
                        rightLeft: {
                            forward: "quiz__question_animation_forward",
                            back: "quiz__question_animation_back"
                        },
                        bottomTop: {
                            forward: "quiz__question_animation_up"
                        }
                    };
                    return u()(t, this.animationStyle, t.rightLeft)
                },
                hasAssistant() {
                    const t = u()(this.info, "assistant.name");
                    return u()(this.info, "assistant.enabled", !!t) && t
                },
                hasVideoOnSlide() {
                    return "video" === u()(this.currentQuestion, "hint.type") && !!this.questionVideo
                },
                hasHintOnSlide() {
                    return "text" === u()(this.currentQuestion, "hint.type") && !!u()(this.currentQuestion, "hint.text")
                },
                questionHint() {
                    if (this.hasHintOnSlide)
                        return u()(this.currentQuestion, "hint.text")
                },
                questionVideo() {
                    return this.$video.parse(u()(this.currentQuestion, "hint.video"), !0)
                },
                labelStyle() {
                    return this.animationStyle === this.$const.animation.BOTTOM_TOP && "mobile" === this.$mq ? "display: block !important; visibility: visible !important;" : "display: block !important; visibility: visible !important; opacity: 1 !important"
                },
                resultLayoutType() {
                    return u()(this.results, "layoutType", "slider")
                },
                isWhiteLabelShown() {
                    return this.page === this.$const.page.QUESTIONS && !this.sidebarShown && !this.isWhiteLabelActive || this.page === this.$const.page.RESULTS && !this.isWhiteLabelActive && "scroll" === this.resultLayoutType
                },
                redirectMessage() {
                    return this.getPhrase("redirectToMessenger") || this.$t("Redirecting to {-url}", {
                        url: this.$format.site(this.redirectUrl)
                    })
                }
            },
            methods: {
                ...(0,
                jt.i0)("quiz", ["prevQuestion", "nextQuestion"]),
                questionEntered() {
                    this.changeHeight()
                },
                questionLeaved() {
                    this.$el.scrollTop = 0
                },
                checkAssistantOnSlide() {
                    this.hasAssistantOnSlide = this.hasAssistant && this.hasHintOnSlide
                },
                changeHeight() {
                    o()(this.$refs.quiz) || this.$nextTick((()=>{
                        let t;
                        const e = this.$refs.quiz.clientHeight;
                        if ("images" === this.questionType) {
                            const s = u()(this.$refs, "question.0.$el");
                            if (!s)
                                return;
                            t = e - s.clientHeight + s.scrollHeight + 15,
                            t > 650 && (t = 650),
                            t < e && (t = e),
                            t && this.$quizFrame.changeHeight(this.id, t)
                        }
                    }
                    ))
                },
                afterLeave() {
                    this.isLoaderShown || this.$store.commit("quiz/setPageActive"),
                    this.resultHasScroll = !1
                },
                resetAssistantOnSlide() {
                    "bottomTop" === this.animationStyle && "mobile" === this.$mq && (this.hasAssistantOnSlide = !1)
                }
            },
            watch: {
                activeQuestion(t, e) {
                    const s = u()(this.slideAnimations, "forward", "quiz__question_animation_forward")
                      , i = u()(this.slideAnimations, "back", s);
                    this.animationType = t < e ? i : s
                },
                async storePage(t, e) {
                    const s = this.$const.page;
                    e !== s.RESULTS && e !== s.RESULT || t !== s.QUESTIONS ? (await this.$nextTick(),
                    !this.resultLoaderShown && this.hasQuestions && this.hasResults && (t !== s.LEADFORM && t !== s.RESULTS && t !== s.RESULT || (this.isLoaderShown = !0)),
                    this.page = t,
                    await this.$nextTick(),
                    this.changeHeight()) : this.page = t
                },
                isLoaderShown() {
                    this.$store.commit("quiz/setResultLoaderShown")
                }
            }
        }
          , jn = Dn
          , Wn = (0,
        ke.A)(jn, i, n, !1, null, null, null)
          , Un = Wn.exports
    },
    88605: function(t, e, s) {
        "use strict";
        s.d(e, {
            A: function() {
                return p
            }
        });
        var i = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "video-circle-player video-player",
                class: {
                    "video-circle-player_paused": t.isPause || t.isEnd
                },
                style: {
                    "--play-radius": `${t.playRadius}px`,
                    "--stop-radius": `${t.stopRadius}px`
                },
                attrs: {
                    tabindex: "0"
                },
                on: {
                    keydown: [function(e) {
                        if (!e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]))
                            return null;
                        t.isPause = !0
                    }
                    , function(e) {
                        if (!e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]))
                            return null;
                        t.isEnd ? t.play() : t.isPause = !t.isPause
                    }
                    , function(e) {
                        if (!e.type.indexOf("key") && 77 !== e.keyCode)
                            return null;
                        t.isMuted = !t.isMuted
                    }
                    ]
                }
            }, [t.isLoading || t.isThumbnailLoading ? e("div", {
                staticClass: "video-player__loading"
            }) : t._e(), !t.thumbnail || t.autoplay || t.isStarted ? t._e() : e("div", {
                staticClass: "video-player__thumbnail"
            }, [e("img", {
                attrs: {
                    src: t.thumbnail,
                    alt: "Video thumbnail"
                },
                on: {
                    load: t.onThumbnailLoaded
                }
            })]), t.isStub || "coub" === t.video.provider ? e("div", {
                staticClass: "video-player__stub"
            }) : e("div", {
                staticClass: "video-circle-player__video"
            }, [e(t.player, {
                tag: "component",
                attrs: {
                    link: t.video.link,
                    videoId: t.video.id,
                    muted: t.isMuted,
                    loop: t.loop,
                    controls: !1,
                    autoplay: t.autoplay,
                    paused: t.isPause,
                    progress: ""
                },
                on: {
                    "update:muted": function(e) {
                        t.isMuted = e
                    },
                    loaded: t.loaded,
                    ended: t.ended,
                    started: function(e) {
                        return t.$emit("started")
                    },
                    paused: function(e) {
                        return t.$emit("paused", e)
                    },
                    timeChanged: function(e) {
                        t.currentTime = e
                    }
                }
            })], 1), t.isLoading || t.isThumbnailLoading ? t._e() : e("div", {
                staticClass: "video-circle-player__controllers custom-controllers",
                class: {
                    "custom-controllers_centered": t.controllersButtonsCentered
                },
                on: {
                    click: t.onControllersClick
                }
            }, [t.isEnd ? t._e() : [t.isPause ? t._e() : e("div", {
                staticClass: "custom-controllers__button custom-controllers__close",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.isPause = !0
                    }
                }
            }, [e("b-icon", {
                attrs: {
                    icon: "close"
                }
            })], 1), t.isPause ? e("div", {
                staticClass: "custom-controllers__button custom-controllers__play",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.isPause = !1
                    }
                }
            }, [e("b-icon", {
                attrs: {
                    icon: "play"
                }
            })], 1) : t._e(), t.isPause ? t._e() : e("div", {
                staticClass: "custom-controllers__button custom-controllers__mute",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.isMuted = !t.isMuted
                    }
                }
            }, [t.isMuted ? e("b-icon", {
                attrs: {
                    icon: "volume-off"
                }
            }) : e("b-icon", {
                attrs: {
                    icon: "volume-high"
                }
            })], 1)], !t.loop && t.isEnd ? e("div", {
                staticClass: "custom-controllers__button custom-controllers__replay",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.play.apply(null, arguments)
                    }
                }
            }, [e("b-icon", {
                attrs: {
                    icon: "replay"
                }
            })], 1) : t._e(), e("transition", {
                attrs: {
                    name: "custom-controllers__progress-bar-animation"
                }
            }, [!t.duration || t.isEnd || t.isPause ? t._e() : e("div", {
                key: t.playRadius,
                staticClass: "custom-controllers__progress-bar"
            }, [e("svg", {
                ref: "progress",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.setNewTime.apply(null, arguments)
                    }
                }
            }, [e("circle", {
                attrs: {
                    cx: t.playRadius,
                    cy: t.playRadius,
                    r: t.playRadius
                }
            }), e("circle", {
                attrs: {
                    cx: t.playRadius,
                    cy: t.playRadius,
                    r: t.playRadius,
                    "stroke-dashoffset": t.dashoffset
                }
            })]), e("div", {
                staticClass: "custom-controllers__progress-bar-overlay"
            })])])], 2)])
        }
          , n = []
          , a = s(36944)
          , o = s.n(a)
          , r = s(95353)
          , l = s(47159)
          , c = {
            extends: l.A,
            props: {
                playRadius: {
                    type: Number,
                    default: 68
                },
                stopRadius: {
                    type: Number,
                    default: 26
                },
                controllersButtonsCentered: Boolean
            },
            computed: {
                ...(0,
                r.L8)(["isFullScreen"]),
                dashoffset() {
                    const t = Math.PI * (2 * this.playRadius);
                    return o()((100 - this.progress) / 100 * t, 2)
                }
            },
            methods: {
                onControllersClick() {
                    this.isEnd ? this.play() : this.isPause = !this.isPause
                },
                setNewTime(t) {
                    if (!this.$refs.progress)
                        return;
                    const {width: e, height: s} = this.$refs.progress.getBoundingClientRect()
                      , i = e / 2
                      , n = s / 2
                      , a = e
                      , o = s / 2
                      , r = t.offsetX
                      , l = t.offsetY;
                    let c = 180 * (Math.atan2(l - n, r - i) - Math.atan2(o - n, a - i)) / Math.PI;
                    l < this.playRadius && (c = 180 + c + 180),
                    this.$emit("seekTo", c / 360 * this.duration)
                }
            }
        }
          , u = c
          , d = s(81656)
          , h = (0,
        d.A)(u, i, n, !1, null, null, null)
          , p = h.exports
    },
    64033: function(t, e, s) {
        "use strict";
        var i = s(39754)
          , n = s.n(i)
          , a = s(56449)
          , o = s.n(a)
          , r = s(62216)
          , l = s.n(r);
        e.A = {
            methods: {
                isRequiredField(t) {
                    return !!l()(t.required) || t.required
                },
                isPhoneValid(t) {
                    if (!t)
                        return !1;
                    const e = t.replace(/^[- +()0-9]+$/, "");
                    return /^\d*$/.test(e)
                },
                isEmailValid(t) {
                    return !!t && /[A-Za-zа-яА-ЯёЁ0-9._%+-]{1,}@[a-zA-Zа-яА-ЯёЁ0-9._-]{1,}([.]{1}[a-zA-Zа-яА-ЯёЁ0-9._]{2,}|[.]{1}[a-zA-Zа-яА-ЯёЁ0-9]{2,}[.]{1}[a-zA-Zа-яА-ЯёЁ0-9]{2,})/.test(t)
                },
                blurCheckbox(t) {
                    if (l()(this.$refs[t]))
                        return !1;
                    o()(this.$refs[t]) ? n()(this.$refs[t], (t=>{
                        t.$el.children[0].blur()
                    }
                    )) : this.$refs[t].$el.children[0].blur()
                }
            }
        }
    },
    14673: function(t, e, s) {
        "use strict";
        s.d(e, {
            L: function() {
                return f
            }
        });
        var i = s(72722)
          , n = s(41586)
          , a = s(32734)
          , o = {
            name: "BLoading",
            model: {
                prop: "active",
                event: "update:active"
            },
            props: {
                active: Boolean,
                programmatic: Boolean,
                container: [Object, Function, n.H],
                isFullPage: {
                    type: Boolean,
                    default: !0
                },
                animation: {
                    type: String,
                    default: "fade"
                },
                canCancel: {
                    type: Boolean,
                    default: !1
                },
                onCancel: {
                    type: Function,
                    default: function() {}
                }
            },
            data: function() {
                return {
                    isActive: this.active || !1,
                    displayInFullPage: this.isFullPage
                }
            },
            watch: {
                active: function(t) {
                    this.isActive = t
                },
                isFullPage: function(t) {
                    this.displayInFullPage = t
                }
            },
            methods: {
                cancel: function() {
                    this.canCancel && this.isActive && this.close()
                },
                close: function() {
                    var t = this;
                    this.onCancel.apply(null, arguments),
                    this.$emit("close"),
                    this.$emit("update:active", !1),
                    this.programmatic && (this.isActive = !1,
                    setTimeout((function() {
                        t.$destroy(),
                        (0,
                        i.Nz)(t.$el)
                    }
                    ), 150))
                },
                keyPress: function(t) {
                    var e = t.key;
                    "Escape" !== e && "Esc" !== e || this.cancel()
                }
            },
            created: function() {
                "undefined" !== typeof window && document.addEventListener("keyup", this.keyPress)
            },
            beforeMount: function() {
                this.programmatic && (this.container ? (this.displayInFullPage = !1,
                this.$emit("update:is-full-page", !1),
                this.container.appendChild(this.$el)) : document.body.appendChild(this.$el))
            },
            mounted: function() {
                this.programmatic && (this.isActive = !0)
            },
            beforeDestroy: function() {
                "undefined" !== typeof window && document.removeEventListener("keyup", this.keyPress)
            }
        };
        const r = o;
        var l = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("transition", {
                attrs: {
                    name: t.animation
                }
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isActive,
                    expression: "isActive"
                }],
                staticClass: "loading-overlay is-active",
                class: {
                    "is-full-page": t.displayInFullPage
                }
            }, [s("div", {
                staticClass: "loading-background",
                on: {
                    click: t.cancel
                }
            }), t._t("default", [s("div", {
                staticClass: "loading-icon"
            })])], 2)])
        }
          , c = [];
        const u = void 0
          , d = void 0
          , h = void 0
          , p = !1
          , m = (0,
        a.n)({
            render: l,
            staticRenderFns: c
        }, u, r, d, p, h, !1, void 0, void 0, void 0);
        var f = m
    },
    12605: function(t, e, s) {
        "use strict";
        s.d(e, {
            S: function() {
                return v
            }
        });
        var i = s(51103)
          , n = s(21796)
          , a = s(60409)
          , o = s(32734)
          , r = {
            name: "BSelect",
            components: (0,
            i._)({}, n.I.name, n.I),
            mixins: [a.F],
            inheritAttrs: !1,
            props: {
                value: {
                    type: [String, Number, Boolean, Object, Array, Function, Date],
                    default: null
                },
                placeholder: String,
                multiple: Boolean,
                nativeSize: [String, Number]
            },
            data: function() {
                return {
                    selected: this.value,
                    _elementRef: "select"
                }
            },
            computed: {
                computedValue: {
                    get: function() {
                        return this.selected
                    },
                    set: function(t) {
                        this.selected = t,
                        this.$emit("input", t),
                        !this.isValid && this.checkHtml5Validity()
                    }
                },
                spanClasses: function() {
                    return [this.size, this.statusType, {
                        "is-fullwidth": this.expanded,
                        "is-loading": this.loading,
                        "is-multiple": this.multiple,
                        "is-rounded": this.rounded,
                        "is-empty": null === this.selected
                    }]
                }
            },
            watch: {
                value: function(t) {
                    this.selected = t,
                    !this.isValid && this.checkHtml5Validity()
                }
            }
        };
        const l = r;
        var c = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "control",
                class: {
                    "is-expanded": t.expanded,
                    "has-icons-left": t.icon
                }
            }, [s("span", {
                staticClass: "select",
                class: t.spanClasses
            }, [s("select", t._b({
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.computedValue,
                    expression: "computedValue"
                }],
                ref: "select",
                attrs: {
                    multiple: t.multiple,
                    size: t.nativeSize
                },
                on: {
                    blur: function(e) {
                        t.$emit("blur", e) && t.checkHtml5Validity()
                    },
                    focus: function(e) {
                        return t.$emit("focus", e)
                    },
                    change: function(e) {
                        var s = Array.prototype.filter.call(e.target.options, (function(t) {
                            return t.selected
                        }
                        )).map((function(t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        }
                        ));
                        t.computedValue = e.target.multiple ? s : s[0]
                    }
                }
            }, "select", t.$attrs, !1), [t.placeholder ? [null == t.computedValue ? s("option", {
                attrs: {
                    disabled: "",
                    hidden: ""
                },
                domProps: {
                    value: null
                }
            }, [t._v(" " + t._s(t.placeholder) + " ")]) : t._e()] : t._e(), t._t("default")], 2)]), t.icon ? s("b-icon", {
                staticClass: "is-left",
                attrs: {
                    icon: t.icon,
                    pack: t.iconPack,
                    size: t.iconSize
                }
            }) : t._e()], 1)
        }
          , u = [];
        const d = void 0
          , h = void 0
          , p = void 0
          , m = !1
          , f = (0,
        o.n)({
            render: c,
            staticRenderFns: u
        }, d, l, h, m, p, !1, void 0, void 0, void 0);
        var v = f
    },
    41586: function(t, e, s) {
        "use strict";
        s.d(e, {
            F: function() {
                return a
            },
            H: function() {
                return n
            }
        });
        var i = "undefined" === typeof window
          , n = i ? Object : window.HTMLElement
          , a = i ? Object : window.File
    },
    2296: function(t, e, s) {
        var i = s(87133)
          , n = s(77556)
          , a = s(61489)
          , o = s(13222);
        function r(t, e, s) {
            t = o(t),
            e = n(e);
            var r = t.length;
            s = void 0 === s ? r : i(a(s), 0, r);
            var l = s;
            return s -= e.length,
            s >= 0 && t.slice(s, l) == e
        }
        t.exports = r
    },
    33031: function(t, e, s) {
        var i = s(83120)
          , n = s(46155)
          , a = s(69302)
          , o = s(36800)
          , r = a((function(t, e) {
            if (null == t)
                return [];
            var s = e.length;
            return s > 1 && o(t, e[0], e[1]) ? e = [] : s > 2 && o(e[0], e[1], e[2]) && (e = [e[0]]),
            n(t, i(e, 1), [])
        }
        ));
        t.exports = r
    }
}]);
console.log('test');
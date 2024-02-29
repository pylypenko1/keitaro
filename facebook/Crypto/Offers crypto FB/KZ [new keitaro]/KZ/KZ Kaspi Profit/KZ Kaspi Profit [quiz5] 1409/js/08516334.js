flexbe_cli.entity.setClientJs('element', 'media01', { components: ['image', 'video', 'slider'] });

!(function () {
  const t = new WeakMap(),
    e = (e) => {
      const { is: i, component: s } = e;
      t.has(s) || t.set(s, Math.floor(999999999 * Math.random()));
      return `.component-${i}-${t.get(s)}`;
    };
  class i {
    get is() {
      return this.constructor.is;
    }
    constructor({ component: t, core: e, reason: i }) {
      (this.require = []),
        (this.core = null),
        (this.owner = null),
        (this.root = null),
        (this.component = null),
        (this.$component = null),
        (this.componentWidth = null),
        (this.componentHeight = null),
        (this.isPageLoaded = !1),
        (this.isInited = !1),
        (this.isLoaded = !1),
        (this.isUpdated = !1),
        (this.isOpen = null),
        (this.isVisible = null),
        (this.inScreen = !1),
        (this.inBeside = !1),
        (this.inView = !1),
        (this.inFocus = !1),
        (this.wasVisible = null),
        (this.wasScreen = !1),
        (this.wasBeside = !1),
        (this.wasView = !1),
        (this.wasFocus = !1),
        (this.core = e),
        (this.owner = e.area),
        (this.root = e.root),
        (this.component = t),
        (this.$component = $(t)),
        (this.isPageLoaded = 'complete' === document.readyState),
        (this.isUpdated = 'update' === i);
    }
    onInit() {}
    onLoad() {}
    onVisible(t) {}
    onScreen(t) {}
    onBeside(t) {}
    onView(t) {}
    onFocus(t) {}
    onResize(t) {}
    onOpen(t) {}
    onClose(t) {}
    onHideShowUI(t) {}
    onPageLoad() {}
    onWindowResize() {}
    onDestroy() {}
    _inheritEvents() {
      this._clearEvents();
      const t = e(this);
      this.core.$area.on(`tween${t}`, (t) => this._syncStates(t.detail)),
        this.core.$area.on(`open${t}`, (t) => this._onOpen(t.detail)),
        this.core.$area.on(`close${t}`, (t) => this._onClose(t.detail));
    }
    _clearEvents() {
      const t = e(this);
      this.core.$area.off(t);
    }
    _syncStates({ force: t = !1 } = {}) {
      const e = this.component.offsetWidth,
        i = this.component.offsetHeight,
        s = null == this.componentWidth || null == this.componentHeight,
        n = this.core.isVisible && !(!e && !i),
        a = this.core.inBeside && n,
        r = this.core.inScreen && n,
        o = this.core.inView && n,
        u = this.core.inFocus && n,
        l = this.componentWidth !== e,
        h = this.componentHeight !== i,
        c = t || (n && !s && (l || h));
      n && ((this.componentWidth = e), (this.componentHeight = i)),
        n !== this.isVisible && this._onVisible({ state: n }),
        c && this._onResize({ force: t }),
        a !== this.inBeside && this._onBeside({ state: a }),
        r !== this.inScreen && this._onScreen({ state: r }),
        o !== this.inView && this._onView({ state: o }),
        u !== this.inFocus && this._onFocus({ state: u });
    }
    _onInit() {
      (this.isInited = !0),
        this._inheritEvents(),
        this._syncStates(),
        'function' == typeof this.onInit && this.onInit(),
        flexbe_cli.require(this.require, () => this._onLoad());
    }
    _onLoad() {
      (this.isLoaded = !0), 'function' == typeof this.onLoad && this.onLoad();
    }
    _onVisible({ state: t }) {
      if (null == this.isVisible) return (this.isVisible = t), void (this.wasVisible = t);
      const e = t && !this.wasVisible;
      (this.isVisible = t), this.onVisible({ state: t, first: e }), t && (this.wasVisible = !0);
    }
    _onScreen({ state: t }) {
      const e = t && !this.wasScreen;
      (this.inScreen = t), this.onScreen({ state: t, first: e }), t && (this.wasScreen = !0);
    }
    _onView({ state: t }) {
      const e = t && !this.wasView;
      (this.inView = t), this.onView({ state: t, first: e }), t && (this.wasView = !0);
    }
    _onBeside({ state: t }) {
      const e = t && !this.wasBeside;
      (this.inBeside = t), this.onBeside({ state: t, first: e }), t && (this.wasBeside = !0);
    }
    _onFocus({ state: t }) {
      const e = t && !this.wasFocus;
      (this.inFocus = t), this.onFocus({ state: t, first: e }), t && (this.wasFocus = !0);
    }
    _onResize(t) {
      this.onResize(t);
    }
    _onOpen(t) {
      (this.isOpen = !0), this._syncStates(), this.onOpen(t);
    }
    _onClose(t) {
      (this.isOpen = !1), this._syncStates(), this.onClose(t);
    }
    _onPageLoad() {
      (this.isPageLoaded = !0), this.onPageLoad();
    }
    _onWindowResize() {
      this._syncStates(), this.onWindowResize();
    }
    _onHideShowUI(t) {
      this.onHideShowUI(t);
    }
    destroy() {
      this._clearEvents(), this.onDestroy();
    }
  }
  i.is = null;
  class s {
    static getRecaptchaSettings() {
      const t = {
        env: {},
        ...((flexbe_cli.vars._group.flood && flexbe_cli.vars._group.flood.captcha) || {}),
      };
      return !t.visible && flexbe_cli.is_admin && (t.enabled = 0), t;
    }
    constructor(t, e = s.getRecaptchaSettings()) {
      (this.id = t.id),
        (this.options = t),
        (this.$form = t.$form),
        (this.enabled = e.enabled),
        (this.isOptional = e.ttl > 0),
        (this.isVisible = e.visible),
        (this.isInvisible = !e.visible),
        (this.inModal = !(!this.isVisible || (!this.isOptional && !t.inModal))),
        (this._widgetId = null),
        (this._token = null);
    }
    get loaded() {
      return 'undefined' != typeof grecaptcha;
    }
    get recaptchaSiteKey() {
      const { env: t } = s.getRecaptchaSettings();
      return this.isVisible ? t.RECAPTCHA_VISIBLE_SITE_KEY : t.RECAPTCHA_INVISIBLE_SITE_KEY;
    }
    init() {
      if (!this.enabled || !this.loaded || this._inited) return;
      this._inited = !0;
      const t = this.$form.find('.g-recaptcha-' + (this.isVisible ? 'visible' : 'invisible'));
      t[0] && this.render(t[0]);
    }
    getToken() {
      return this._token;
    }
    render(t) {
      if (!this.enabled || !this.loaded) return;
      let e = flexbe_cli.run.is_screen_mobile_s ? 'compact' : 'normal';
      this.isInvisible && (e = 'invisible');
      const i = {
        size: e,
        sitekey: this.recaptchaSiteKey,
        callback: (t) => {
          (this._token = t), this.closeModal(), this._onSuccess(t);
        },
        'expired-callback': () => {
          this.reset(), this._onExpired();
        },
        'error-callback': () => {
          this.reset(), this._onError();
        },
      };
      grecaptcha.ready(() => {
        try {
          this._widgetId = grecaptcha.render(t, i);
        } catch (t) {}
        'function' == typeof this.options.onRecaptchaRendered &&
          this.options.onRecaptchaRendered(this);
      });
    }
    runModalCaptcha() {
      const t = `captcha-${this.id}`;
      if (!this._modal) {
        const e = $(
          `\n                <div class="m_modal m_${t}" data-is="modal" data-id="${t}" data-m-id="CAPTCHA">\n                    <div class="modal-data">\n                        <div class="component-bg" data-type="color" data-component="background">\n                            <div class="layer2 overlay"></div>\n                        </div>\n\n                        <div class="modal-content" data-contrast="dark" data-v="1" data-as="1">\n                            <div class="close close-times"></div>\n\n                            <div class="recaptcha-title">\n                                ${flexbe_cli.locale.tr(
            'quiz::captcha_label',
          )}\n                            </div>\n\n                            <div id="recaptcha-${
            this.id
          }" class="g-recaptcha g-recaptcha-visible"></div>\n                        </div>\n                    </div>\n                </div>\n            `,
        );
        flexbe_cli.modal.$list.append(e), (this._modal = flexbe_cli.entity.initArea(e));
      }
      flexbe_cli.events.trigger('ui_modal_open', {
        id: t,
        options: {
          hash: !1,
          rise: !0,
          onClose: () => {
            this._token || this._onError();
          },
        },
      });
      const e = this._modal.$area.find('.g-recaptcha');
      null != this._widgetId ? this.reset() : this.render(e[0]);
    }
    closeModal() {
      this._modal && flexbe_cli.events.trigger('ui_modal_close', { id: this._modal.id });
    }
    runInvisibleChallenge() {
      this.enabled &&
        this.loaded &&
        !this.isVisible &&
        (grecaptcha.ready(() => grecaptcha.execute(this._widgetId)),
        $('iframe[title="recaptcha challenge"]').parent().parent().css('z-index', 2e3));
    }
    reset() {
      this.enabled &&
        this.loaded &&
        ((this._token = null),
        null != this._widgetId && grecaptcha.ready(() => grecaptcha.reset(this._widgetId)),
        'function' == typeof this.options.onReset && this.options.onReset(this));
    }
    _onError(...t) {
      'function' == typeof this.options.onError && this.options.onError(this, ...t);
    }
    _onSuccess(...t) {
      'function' == typeof this.options.onSuccess && this.options.onSuccess(this, ...t);
    }
    _onExpired(...t) {
      'function' == typeof this.options.onExpired && this.options.onExpired(this, ...t);
    }
  }
  const n = {
    selectClass: '',
    dropdownClass: '',
    selectedClass: 'selected',
    optionSelector: 'option',
    attrValue: 'value',
    position: 'over',
    padding: 10,
    title: !1,
  };
  class a {
    static create(t) {
      return new this(t);
    }
    constructor(t) {
      (this.opts = t),
        (this.config = { ...n, ...t.config }),
        (this.element = t.element),
        (this.$select = $(this.element)),
        (this.isNativeSelect = this.$select.is('select')),
        (this.selectAllDevice = 'select' === this.$select.data('type')),
        (this.blurTimeOut = !1),
        (this.blurListTimeOut = !1),
        (this.focused = !1),
        (this.active = !1),
        this.createSelect();
    }
    createSelect() {
      (this.$customSelect = $(
        `\n            <div class="dropdown-container ${this.config.selectClass}">\n                <div tabindex="0" class="dropdown-select">\n                    <span class="dropdown-select__content selected"></span>\n\n                    <span class="arrow">\n                        <svg viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">\n                            <path fill="currentColor" d="M 1.4 6.99441e-15L 0 1.34043L 5 6L 10 1.34043L 8.6 0L 5 3.34998L 1.4 6.99441e-15Z"/>\n                        </svg>\n                    </span>\n                </div>\n            </div>\n        `,
      )),
        (this.$customSelect__content = this.$customSelect.find('.dropdown-select__content')),
        this.$select.after(this.$customSelect),
        this.syncSelect(),
        this.selectAllDevice || flexbe_cli.run.is_screen_desktop || !flexbe_cli.responsive
          ? (this.$customSelect
              .off('click.selected')
              .on('click.selected', '.dropdown-select', () => {
                clearTimeout(this.blurListTimeOut), this.active ? this.collapse() : this.activate();
              }),
            this.$customSelect
              .off('focus.selectFocus')
              .on('focus.selectFocus', '.dropdown-select', () => {
                (this.focused = !0), this.$listWrapper || this.createList();
              }),
            this.isNativeSelect &&
              this.$select.off('change.changeSelect').on('change.changeSelect', (t) => {
                const e = this.$listWrapper.find('.dropdown-select-ul li'),
                  i = t.currentTarget.value;
                e.removeClass(this.config.selectedClass),
                  e
                    .filter((t, e) => e.getAttribute(this.config.attrValue) === i)
                    .addClass(this.config.selectedClass),
                  this.$customSelect__content.text(i),
                  'function' == typeof this.opts.onChange && this.opts.onChange(t);
              }),
            this.$customSelect
              .off('keydown.selectKeydown')
              .on('keydown.selectKeydown', '.dropdown-select', (t) => {
                if (this.focused && [13, 27, 32, 38, 40].includes(t.keyCode)) {
                  t.preventDefault();
                  const e = this.$list
                    .find(`.option-e.${this.config.selectedClass}`)
                    .filter((t) => !$(t).attr('disabled'));
                  if (40 === t.keyCode)
                    t.preventDefault(), this.select(e.next(), !1), this.scrollToSelected();
                  else if (38 === t.keyCode)
                    t.preventDefault(), this.select(e.prev(), !1), this.scrollToSelected();
                  else if (this.active || 32 !== t.keyCode) {
                    if (this.active && [13, 27, 32].includes(t.keyCode))
                      return t.preventDefault(), this.collapse(), !1;
                  } else t.preventDefault(), this.activate();
                }
              }))
          : this.$select.off('change.selected').on('change.selected', (t) => {
              const e = t.target.value;
              this.$customSelect__content.text(e);
            });
    }
    syncSelect() {
      const t = this.$select
          .children(this.config.optionSelector)
          .filter((t, e) => {
            var i;
            return (
              (null != (i = e.selected) ? i : $(e).attr('selected')) ||
              $(e).hasClass(this.config.selectedClass)
            );
          })
          .eq(0),
        e = t.html() || '—';
      this.$customSelect__content.attr(this.config.attrValue, t.attr(this.config.attrValue)),
        this.$customSelect__content.html(e);
    }
    createList() {
      const t = this.$select.children(this.config.optionSelector);
      (this.$listWrapper = $(
        `\n            <div class="select-container-in-body">\n                <div class="overlay"></div>\n                <ul class="dropdown-select-ul scrollable ${this.config.dropdownClass}" tabindex="0"></ul>\n            </div>\n        `,
      )),
        (this.$list = this.$listWrapper.find('.dropdown-select-ul')),
        t.each((t, e) => {
          var i, s, n;
          const a = $(e),
            r =
              (null != (i = e.selected) ? i : a.attr('selected')) ||
              a.hasClass(this.config.selectedClass),
            o = (null != (s = e.disabled) ? s : a.attr('asd')) || a.hasClass('asd'),
            u = (null != (n = e.locked) ? n : a.attr('asd')) || a.hasClass('locked'),
            l = this.isNativeSelect ? a.val() : a.attr(this.config.attrValue),
            h = a.html().trim() || '—';
          let c = '';
          this.config.title && (c = a.attr('data-title'));
          const d = $(`<li title='${c}' class="option-e"></li>`);
          r && !o && d.addClass(this.config.selectedClass),
            u && d.attr('asd', 'asd'),
            d.attr(this.config.attrValue, l),
            d.html(h),
            this.$list.append(d);
        });
    }
    select(t, e) {
      if (!t[0]) return;
      if (t.attr('disabled'))
        return (
          clearTimeout(this.blurTimeOut),
          void this.$list.off('blur.listBlur').on('blur.listBlur', () => {
            (this.focused = !1),
              (this.blurListTimeOut = setTimeout(() => {
                this.$listWrapper && this.collapse();
              }, 200));
          })
        );
      const i = t.attr(this.config.attrValue);
      if (
        (t.siblings('li').removeClass(this.config.selectedClass),
        t.addClass(this.config.selectedClass),
        this.isNativeSelect)
      )
        this.$select.val(i);
      else {
        const t = this.$select.children(this.config.optionSelector);
        t.removeAttr('selected').removeClass(this.config.selectedClass),
          t
            .filter(`[${this.config.attrValue}=${i}]`)
            .addClass(this.config.selectedClass)
            .attr('selected', 'selected');
      }
      this.syncSelect(), e && this.collapse();
    }
    scrollToSelected() {
      const t = this.$list[0].offsetHeight;
      if (this.$list[0].scrollHeight <= t) return !1;
      const e = this.$list.children('.option-e').find(`.${this.config.selectedClass}`)[0];
      e && e.scrollIntoView();
    }
    collapse() {
      clearTimeout(this.blurTimeOut),
        (this.active = !1),
        this.$listWrapper.removeClass('active rise'),
        this.$listWrapper.detach(),
        'function' == typeof this.opts.onCollapse && this.opts.onCollapse();
    }
    activate() {
      if (this.active) return !1;
      (this.active = !0), this.createList();
      const t = this.config.padding || 0,
        e = {
          ...flexbe_cli.helpers.dom.getElOffset(this.$customSelect[0]),
          width: this.$customSelect.width(),
          height: this.$customSelect.height(),
        };
      'under' === this.config.position && (e.top = e.top + e.height + t),
        this.$listWrapper.off('click.closeSelect').on('click.closeSelect', '.overlay', (t) => {
          this.collapse();
          const e = document.elementFromPoint(t.clientX, t.clientY);
          e && e.focus();
        }),
        this.$listWrapper
          .off('click.selectLi')
          .on('click.selectLi', '.dropdown-select-ul li', (t) => {
            const e = $(t.currentTarget);
            this.select(e, !0), 'function' == typeof this.opts.onSelect && this.opts.onSelect(t);
          }),
        this.$listWrapper
          .off('mousewheel.selectUl')
          .on('mousewheel.selectUl', '.dropdown-select-ul', (t) => {
            const e = t.currentTarget.scrollHeight,
              i = t.currentTarget.clientHeight;
            return !(
              (t.currentTarget.scrollTop === e - i && t.deltaY > 0) ||
              (0 === t.currentTarget.scrollTop && t.deltaY < 0)
            );
          }),
        $('body').append(this.$listWrapper),
        clearTimeout(this.blurTimeOut),
        this.$list.css({ left: `${e.left}px`, top: `${e.top}px`, width: `${e.width}px` }),
        this.$listWrapper.outerWidth(),
        this.$listWrapper.toggleClass('rise', !!this.$select.closest('.m_modal, .w_widget').length),
        this.$listWrapper.addClass('active'),
        this.scrollToSelected(),
        'function' == typeof this.opts.onActivate && this.opts.onActivate();
    }
  }
  class r {
    constructor(t) {
      if (
        ((this.$legend = t.find('.range-legend')),
        (this.$component = t.find('.range-outer')),
        (this.$input = t.find('input')),
        (this.startEdge = this.$component.data('start')),
        (this.isDouble = !!this.$component.data('double')),
        (this.endEdge = this.$component.data('end')),
        (this.range = this.endEdge - this.startEdge),
        (this.barWidth = this.$component.width()),
        (this.step = this.$component.data('step') || 1),
        (this.steps = Math.round(this.range / this.step)),
        (this.legendType = this.$legend.data('type')),
        (this.legendText = 1 == +this.$legend.data('text')),
        (this.animated = !0),
        (this.duration = this.steps < 10 && (1 / this.steps) * 300),
        (this.fractExponent = Math.max(
          this.getFract(this.startEdge),
          this.getFract(this.endEdge),
          this.getFract(this.step),
        )),
        (this.fractDevider = 10 ** this.fractExponent),
        (this.$value = $('.range-value', this.$component)),
        (this.$endRunner = $('.range-runner-right', this.$component)),
        (this.$endRunnerTip = $('.runner-tip', this.$endRunner)),
        (this.$endRunnerValue = $('.value', this.$endRunner)),
        (this.endRunnerWidth = this.$endRunner.width()),
        (this.$startRunner = $('.range-runner-left', this.$component)),
        (this.$startRunnerValue = $('.value', this.$startRunner)),
        (this.$startRunnerTip = $('.runner-tip', this.$startRunner)),
        (this.startRunnerWidth = this.$startRunner.width()),
        (this.maxAllowedLeft = 20),
        (this.maxAllowedRight = flexbe_cli.resize.viewportWidth - 20),
        (this.defaultShift = this.$endRunner.width() / 2),
        (this.activeRunner = !1),
        this.isDouble)
      ) {
        const t = this.$input.data('value').split(' — ');
        (this.startValue = +t[0]), (this.endValue = +t[1]);
      } else (this.endValue = +this.$input.data('value')), (this.startValue = +this.startEdge);
      (this.endParams = {}),
        this.drawLegend(),
        this.updateTooltip(this.$startRunnerTip),
        this.updateTooltip(this.$endRunnerTip),
        this.setEvents(),
        this.setRunnersValue();
    }
    formatN(t) {
      return `${t < 0 ? '-' : ''}${flexbe_cli.locale.formatNumber(t, this.fractExponent)}`;
    }
    getFract(t) {
      const e = `${t}`.split('.');
      return (e[1] && e[1].length) || 0;
    }
    drawLegend() {
      if (this.legendText) return !1;
      const t = this.$legend.find('.from'),
        e = this.$legend.find('.to');
      if (
        (t.text(this.formatN(this.startEdge)),
        e.text(this.formatN(this.endEdge)),
        'complex' !== this.legendType)
      )
        return !1;
      this.$legend.find('.legend-point:not(.from, .to)').off('click').remove(),
        this.$legend.removeClass('complex').addClass('limits');
      const i = [
          `${this.formatN(this.startEdge)}`.length,
          `${this.formatN(this.endEdge)}`.length,
          `${this.formatN(this.step)}`.length,
        ],
        s = (i[0] + i[1] + i[2]) / 3,
        n = Math.max(this.startEdge, this.endEdge),
        a = [(5 * this.step * this.fractDevider) / this.fractDevider];
      for (let t = 1; t <= 12; t++) {
        const e = 10 ** t * this.step;
        e < n && d(a, e, this.fractDevider);
      }
      let r;
      const o = Math.ceil(
          this.$legend.find(i[0] > i[1] ? '.from' : '.to').width() / Math.max(i[1], i[0]),
        ),
        u = Math.round((0.83 * this.barWidth) / (o * s)),
        l = this.range > 0 ? 1 : -1;
      for (let t = Math.min(u, 10); t >= 3; t--) {
        const e = c(this.step, Math.abs(this.steps), t, a);
        if (e && Number.isInteger(e / this.step) && Number.isInteger(this.range / e)) {
          r = e;
          break;
        }
      }
      if (!r || !Number.isInteger(this.range / (r * l)) || this.range / (r * l) < 3)
        for (let t = Math.min(Math.round(this.range / this.step), u, 10); t >= 2; t -= 1) {
          const e = this.roundFraction(this.range / t);
          if (e % this.step == 0) {
            r = e * l;
            break;
          }
        }
      const h = this.roundFraction(this.range / (r * l));
      if (r && Number.isInteger(h)) {
        const t = [];
        for (let e = 1; e < h; e += 1) {
          const i =
            Math.round((this.startEdge + r * e * l) * this.fractDevider) / this.fractDevider;
          t.push(`<div class="legend-point" data-value="${i}">${this.formatN(i)}</div>`);
        }
        h > 2 &&
          (this.$legend.attr('data-count', h),
          this.$legend.removeClass('limits').addClass('complex'));
        const e = $(t.join(''));
        this.$legend.find('.from').after(e);
      } else this.$legend.removeClass('complex').addClass('limits');
      function c(t, e, i, s) {
        return s.includes((e / i) * t)
          ? (e / i) * t
          : s.includes(((e + 1) / i) * t)
          ? ((e + 1) / i) * t
          : s.includes(((e + 2) / i) * t)
          ? ((e + 2) / i) * t
          : s.includes(((e + 3) / i) * t)
          ? ((e + 3) / i) * t
          : s.includes(((e + 4) / i) * t)
          ? ((e + 4) / i) * t
          : s.includes(((e + 5) / i) * t)
          ? ((e + 5) / i) * t
          : s.includes(((e + 6) / i) * t)
          ? ((e + 6) / i) * t
          : s.includes(((e + 7) / i) * t)
          ? ((e + 7) / i) * t
          : s.includes(((e + 8) / i) * t)
          ? ((e + 8) / i) * t
          : !!s.includes(((e + 9) / i) * t) && ((e + 9) / i) * t;
      }
      function d(t, e, i) {
        for (let s = 1; s < 10; s += 1)
          t.push(Math.round(e * s * i) / i), t.push(Math.round(e * s * i + e / 2) / i);
      }
      this.$legend.find('.legend-point:not(.to), .legend-point:not(.from)').each((t, e) => {
        $(e).on('click', () => {
          if ((this.updateBarWidth(), this.isDouble)) {
            const t = (this.startValue + this.endValue) / 2,
              i = +$(e).data('value'),
              s = this.startEdge < this.endEdge ? 1 : -1;
            i * s >= t * s ? (this.endValue = i) : (this.startValue = i);
          } else this.endValue = $(e).data('value');
          this.setRunnersValue();
        });
      });
    }
    roundFraction(t) {
      return Math.round(1e10 * t) / 1e10;
    }
    setRunnersValue(t = !1) {
      if (
        !Number.isFinite(this.endValue) ||
        !Number.isFinite(this.range) ||
        (this.isDouble && !Number.isFinite(this.startValue))
      )
        return !1;
      const e = this.startEdge < this.endEdge ? 1 : -1;
      'start' === this.activeRunner
        ? this.startValue * e <= this.startEdge * e
          ? (this.startValue = this.startEdge)
          : this.startValue * e >= this.endValue * e && (this.startValue = this.endValue)
        : this.endValue * e >= this.endEdge * e
        ? (this.endValue = this.endEdge)
        : this.endValue * e <= this.startValue * e && (this.endValue = this.startValue);
      const i = this.isDouble ? this.startValue : this.startEdge,
        s = this.isDouble ? (this.startValue - this.startEdge) / (this.range / 100) : 0,
        n = (this.endValue - i) / (this.range / 100);
      (this.endValue = Math.round(this.endValue * this.fractDevider) / this.fractDevider),
        (this.startValue = Math.round(this.startValue * this.fractDevider) / this.fractDevider),
        requestAnimationFrame(() => {
          this.$endRunnerValue.text(this.formatN(this.endValue)),
            this.$startRunnerValue.text(this.formatN(this.startValue));
        }),
        'end' === this.activeRunner
          ? this.updateTooltip(this.$endRunnerTip)
          : this.updateTooltip(this.$startRunnerTip),
        this.$value.css({ width: `${n}%`, marginLeft: `${s}%` }),
        t ||
          (this.isDouble
            ? this.$input.val(`${this.startValue} — ${this.endValue}`)
            : this.$input.val(this.endValue));
    }
    updateTooltip(t) {
      const e = t.closest('.range-runner');
      if (e && e.length) {
        const e = t.innerWidth(),
          i =
            t.closest('.range-runner')[0].getBoundingClientRect().left + this.startRunnerWidth / 2;
        let s;
        (s =
          e / 2 > i + this.maxAllowedLeft
            ? e / 2 - (i - this.maxAllowedLeft)
            : e / 2 + i > this.maxAllowedRight
            ? this.maxAllowedRight - i - e / 2
            : 0),
          t.css({ transform: `translateX(${s}px)` });
      }
    }
    getValueFromLength(t) {
      const e = this.range / (this.barWidth / t);
      return (Math.round(e / this.step) + this.startEdge / this.step) * this.step;
    }
    applyEndPosition(t) {
      return (
        (this['start' === this.activeRunner ? 'startValue' : 'endValue'] =
          this.getValueFromLength(t)),
        this.setRunnersValue(),
        !0
      );
    }
    touchHendler(t) {
      if (!this.endParams.active || 1 !== t.touches.length)
        return $('body')[0].removeEventListener('touchmove', this.touchHendler), !1;
      this.toggleAnimation(!1), t.preventDefault(), t.stopPropagation();
      const e = t.touches[0].pageX - this.endParams.left - this.endParams.shift;
      this.applyEndPosition(e);
    }
    startWatchingEvents(t = this.defaultShift) {
      (this.endParams = { active: !0, left: this.$component.offset().left, shift: t }),
        clearTimeout(this.calmRunnersTimeout),
        'end' === this.activeRunner
          ? this.$endRunner.addClass('active')
          : this.$startRunner.addClass('active');
    }
    toggleAnimation(t) {
      t
        ? Math.abs(this.barWidth / this.steps) < 15
          ? this.$component.addClass('animated')
          : (this.$component.removeClass('active-animation'),
            this.duration &&
              this.$component.removeClass(
                'animation-speed-' + (12 - Math.abs(Math.round(this.steps))),
              ))
        : Math.abs(this.barWidth / this.steps) < 15
        ? this.$component.removeClass('animated')
        : (this.$component.addClass('active-animation'),
          this.duration &&
            this.$component.addClass('animation-speed-' + (12 - Math.abs(Math.round(this.steps)))));
    }
    afterRunnerReleased() {
      this.endParams.active &&
        ('start' === this.activeRunner ? this.$startRunner.focus() : this.$endRunner.focus()),
        (this.endParams.active = !1),
        this.debounceActive(),
        this.barWidth / this.steps < 15
          ? this.$component.addClass('animated')
          : this.$component.removeClass('active-animation'),
        this.toggleAnimation(!0);
    }
    updateBarWidth() {
      const t = this.$component.width();
      t !== this.barWidth &&
        ((this.barWidth = t), 'complex' === this.legendType && this.drawLegend());
    }
    setEvents() {
      const t = $(window),
        e = this;
      function i(i) {
        if (!e.endParams.active) return t.off('mousemove.dragRange'), !1;
        e.toggleAnimation(!1);
        const s = i.pageX - e.endParams.left - e.endParams.shift;
        return e.applyEndPosition(s), !0;
      }
      this.$component.on('resize', () => {
        this.updateBarWidth();
      }),
        this.$component.on('touchstart', (e) => {
          if (1 !== e.touches.length) return !1;
          if (this.isDouble) {
            const t = (this.$endRunner.offset().left + this.$startRunner.offset().left) / 2;
            (this.activeRunner = e.touches[0].pageX >= t ? 'end' : 'start'),
              'start' === this.activeRunner
                ? (this.$startRunner.addClass('upper-runner'),
                  this.$endRunner.removeClass('upper-runner'))
                : (this.$endRunner.addClass('upper-runner'),
                  this.$startRunner.removeClass('upper-runner'));
          } else this.activeRunner = 'end';
          e.stopPropagation(), this.updateBarWidth();
          const i = e.touches[0].pageX - this.$value.offset().left;
          this.startWatchingEvents(),
            this.applyEndPosition(i - this.defaultShift),
            t[0].addEventListener('touchmove', this.touchHendler.bind(this), { passive: !1 }),
            t.on('touchend.range', () => {
              this.afterRunnerReleased(),
                t[0].removeEventListener('touchmove', this.touchHendler),
                t.off('touchend.range');
            });
        }),
        this.$component.on('mousedown', (e) => {
          const s = e.pageX - this.$component.offset().left;
          if (this.isDouble) {
            const t = (this.$endRunner.offset().left + this.$startRunner.offset().left) / 2;
            (this.activeRunner = e.pageX >= t ? 'end' : 'start'),
              'start' === this.activeRunner
                ? (this.$startRunner.addClass('upper-runner'),
                  this.$endRunner.removeClass('upper-runner'))
                : (this.$endRunner.addClass('upper-runner'),
                  this.$startRunner.removeClass('upper-runner'));
          }
          this.updateBarWidth(),
            this.startWatchingEvents(),
            this.applyEndPosition(s - this.defaultShift),
            'start' === this.activeRunner ? this.$startRunner.focus() : this.$endRunner.focus(),
            t.on('mousemove.dragRange', i),
            t.on('mouseup.range', () => {
              this.afterRunnerReleased(), t.off('mousemove.dragRange'), t.off('mouseup.range');
            });
        }),
        this.$endRunner.on('touchstart', (e) => {
          if (1 !== e.touches.length) return !1;
          e.stopPropagation(),
            this.updateBarWidth(),
            (this.activeRunner = 'end'),
            this.$startRunner.removeClass('upper-runner'),
            this.$endRunner.addClass('upper-runner'),
            e.stopPropagation(),
            this.startWatchingEvents(e.touches[0].pageX - this.$endRunner.offset().left),
            this.toggleAnimation(!1),
            t[0].addEventListener('touchmove', this.touchHendler.bind(this), { passive: !1 }),
            t.on('touchend.range', () => {
              this.afterRunnerReleased(),
                t[0].removeEventListener('touchmove', this.touchHendler),
                t.off('touchend.range');
            });
        }),
        this.$startRunner.on('touchstart', (e) => {
          if (1 !== e.touches.length) return !1;
          e.stopPropagation(),
            this.updateBarWidth(),
            (this.activeRunner = 'start'),
            this.$startRunner.addClass('upper-runner'),
            this.$endRunner.removeClass('upper-runner'),
            e.stopPropagation(),
            this.startWatchingEvents(e.touches[0].pageX - this.$startRunner.offset().left),
            this.toggleAnimation(!1),
            t[0].addEventListener('touchmove', this.touchHendler.bind(this), { passive: !1 }),
            t.on('touchend.range', () => {
              this.afterRunnerReleased(),
                t[0].removeEventListener('touchmove', this.touchHendler),
                t.off('touchend.range');
            });
        }),
        this.$endRunner.on('mousedown', (e) => {
          e.stopPropagation(),
            (this.activeRunner = 'end'),
            this.$startRunner.removeClass('upper-runner'),
            this.$endRunner.addClass('upper-runner'),
            this.updateBarWidth(),
            this.$endRunner.focus(),
            this.startWatchingEvents(e.pageX - this.$endRunner.offset().left),
            this.toggleAnimation(!1),
            t.on('mousemove.dragRange', i),
            t.on('mouseup.range', () => {
              this.afterRunnerReleased(), t.off('mousemove.dragRange'), t.off('mouseup.range');
            });
        }),
        this.$startRunner.on('mousedown', (e) => {
          e.stopPropagation(),
            (this.activeRunner = 'start'),
            this.$startRunner.addClass('upper-runner'),
            this.$endRunner.removeClass('upper-runner'),
            this.updateBarWidth(),
            this.$startRunner.focus(),
            this.startWatchingEvents(e.pageX - this.$startRunner.offset().left),
            this.toggleAnimation(!1),
            t.on('mousemove.dragRange', i),
            t.on('mouseup.range', () => {
              this.afterRunnerReleased(), t.off('mousemove.dragRange'), t.off('mouseup.range');
            });
        }),
        this.$legend.find('.legend-point.to, .legend-point.from').each((t, e) => {
          $(e).on('click', () => {
            if ((this.updateBarWidth(), this.isDouble)) {
              const t = this.startEdge < this.endEdge ? 1 : -1,
                i = (this.startValue + this.endValue) / 2,
                s = +$(e).data('value');
              s * t >= i * t ? (this.endValue = s) : (this.startValue = s);
            } else this.endValue = $(e).data('value');
            this.setRunnersValue();
          });
        }),
        this.$input.on('change', () => {
          if (this.isDouble) {
            const t = this.$input.val().split(' — ');
            (this.startValue = +t[0]), (this.endValue = +t[1]);
          } else this.endValue = +this.$input.val();
          this.setRunnersValue(!0);
        }),
        this.$startRunner.on('keyup', (t) => {
          t.preventDefault(),
            (this.activeRunner = 'start'),
            this.handleKeydown(t, this.$startRunner);
        }),
        this.$endRunner.on('keyup', (t) => {
          t.preventDefault(), (this.activeRunner = 'end'), this.handleKeydown(t, this.$endRunner);
        }),
        this.$startRunner.on('keydown', (t) => {
          (this.activeRunner = 'start'), this.handleKeyup(t, this.$startRunner);
        }),
        this.$endRunner.on('keydown', (t) => {
          (this.activeRunner = 'end'), this.handleKeyup(t, this.$endRunner);
        }),
        this.$startRunner.on('blur', () => {
          this.handleBlur();
        });
    }
    handleBlur() {
      this.movingInterval && (clearInterval(this.movingInterval), (this.movingInterval = !1)),
        this.movingDebounceTimeout &&
          (clearTimeout(this.movingDebounceTimeout), (this.movingDebounceTimeout = !1));
    }
    handleKeydown(t, e) {
      if (
        (this.movingInterval && (clearInterval(this.movingInterval), (this.movingInterval = !1)),
        this.movingDebounceTimeout &&
          (clearTimeout(this.movingDebounceTimeout), (this.movingDebounceTimeout = !1)),
        [37, 38, 39, 40].includes(t.keyCode))
      ) {
        const i = t.shiftKey ? 10 : 1,
          s = 'start' === this.activeRunner ? 'startValue' : 'endValue';
        38 === t.keyCode || 39 === t.keyCode
          ? (this[s] = (this[s] / this.step + i) * this.step)
          : (37 !== t.keyCode && 40 !== t.keyCode) ||
            (this[s] = (this[s] / this.step - i) * this.step),
          e.addClass('active'),
          this.debounceActive(),
          this.setRunnersValue();
      }
    }
    handleKeyup(t, e) {
      9 !== t.keyCode &&
        [37, 38, 39, 40].includes(t.keyCode) &&
        (t.preventDefault(),
        e.addClass('active'),
        this.debounceActive(),
        this.startDebouncedMove(t));
    }
    startDebouncedMove(t) {
      this.movingDebounceTimeout &&
        (clearTimeout(this.movingDebounceTimeout), (this.movingDebounceTimeout = !1)),
        (this.movingDebounceTimeout = setTimeout(() => {
          this.movingInterval = setInterval(() => {
            this.debounceActive();
            const e = t.shiftKey ? 10 : 1,
              i = 'start' === this.activeRunner ? 'startValue' : 'endValue';
            38 === t.keyCode || 39 === t.keyCode
              ? (this[i] = (Math.round(this[i] / this.step) + e) * this.step)
              : (37 !== t.keyCode && 40 !== t.keyCode) ||
                (this[i] = (Math.round(this[i] / this.step) - e) * this.step),
              this.setRunnersValue();
          }, 50);
        }, 300));
    }
    debounceActive() {
      this.calmRunnersTimeout && clearTimeout(this.calmRunnersTimeout),
        (this.calmRunnersTimeout = setTimeout(() => {
          this.$endRunner.removeClass('active'), this.$startRunner.removeClass('active');
        }, 500));
    }
  }
  const o = {
    phone: {
      RU: ['+7 (***) ***-**-**', '8 (***) ***-**-**'],
      KZ: ['+7 (***) ***-**-**', '8 (***) ***-**-**'],
      UA: ['+38 (***) ***-****'],
      BY: ['+375 ** *******'],
      US: ['+1 (***) ***-****'],
    },
  };
  function u(t) {
    if (void 0) return;
    const e = {
        signed: !0,
        lazy: !0,
        padFractionalZeros: !0,
      },
      i = t.getAttribute('data-required');
    let s = t.getAttribute('data-mask');
    s =
      s && !/[ #()*@{}]/.test(s)
        ? (function (t) {
            const e = String(t).toLowerCase(),
              i = flexbe_cli.locale.country;
            let s = o[e] && o[e][i];
            return s && 'string' == typeof s && (s = [s]), Object.assign([], s);
          })(s)
        : [s];
    try {
      if (
        ((s = s.filter((t) => /[ #()*@_{}]/.test(t))),
        (s = s.map((t) => t.replace(/0/g, '\\0'))),
        0 === s.length)
      )
        throw { message: 'Mask is empty' };
      s = 1 === s.length ? String(s[0]) : s.map((t) => ({ ...e, mask: t }));
      const n = new window(t, {
          ...e,
          mask: s,
          dispatch: (t, e) => {
            const i = e.compiledMasks;
            if (1 === i.length) return i[0];
            const s = (e.value + t).replace(/\W/g, '');
            return (
              i.find((t) => {
                const e = t.mask.replace(/\W/g, '')[0];
                return s[0] === e;
              }) || i[0]
            );
          },
        }),
        a = () => {
          n.masked.isComplete || (!i && !n.value)
            ? t.setAttribute('data-mask-complete', !0)
            : t.removeAttribute('data-mask-complete'),
            t.setAttribute('value', n.value);
        };
      t.value && a(),
        n.on('accept', a),
        $(t).on('focus', (e) => {
          requestAnimationFrame(() => {
            $(t).trigger('click');
          });
        }),
        (t._mask = n);
    } catch (e) {
      e instanceof Error && console.error('MASK ERROR:', { masks: s, errorMessage: e.message }),
        t.removeAttribute('data-mask');
    }
  }
  let l;
  !(function (t) {
    (t.BORDER_BOX = 'border-box'),
      (t.CONTENT_BOX = 'content-box'),
      (t.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
  })(l || (l = {}));
  const h = (function () {
      function t(t, e, i, s) {
        return (
          (this.x = t),
          (this.y = e),
          (this.width = i),
          (this.height = s),
          (this.top = this.y),
          (this.left = this.x),
          (this.bottom = this.top + this.height),
          (this.right = this.left + this.width),
          Object.freeze(this)
        );
      }
      return (
        (t.prototype.toJSON = function () {
          let t = this;
          return {
            x: t.x,
            y: t.y,
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            width: t.width,
            height: t.height,
          };
        }),
        (t.fromRect = function (e) {
          return new t(e.x, e.y, e.width, e.height);
        }),
        t
      );
    })(),
    c = 'undefined' != typeof window ? window : {};
  /msie|trident/i.test(c.navigator && c.navigator.userAgent);
  const d = function (t, e, i) {
    return (
      void 0 === t && (t = 0),
      void 0 === e && (e = 0),
      void 0 === i && (i = !1),
      Object.freeze({ inlineSize: (i ? e : t) || 0, blockSize: (i ? t : e) || 0 })
    );
  };
  Object.freeze({
    devicePixelContentBoxSize: d(),
    borderBoxSize: d(),
    contentBoxSize: d(),
    contentRect: new h(0, 0, 0, 0),
  });
  class p {
    on(t, e) {
      return this;
    }
    one(t, e) {
      return this;
    }
    off(t, e) {
      return this;
    }
    trigger(t, ...e) {
      return this;
    }
    emit(t, ...e) {
      return this;
    }
    constructor() {
      !(function (t) {
        const e = '*',
          i = $({}),
          s = new WeakMap();
        null == t && (t = {});
        const n = (t, e) => (i, n) => {
            const a = (t, ...i) => n.call(e, ...i, ...i);
            return s.set(n, a), t.on(i, a), e;
          },
          a = (t, e) => (i, n) => {
            const a = (t, ...i) => n.call(e, ...i, ...i);
            return s.set(n, a), t.one(i, a), e;
          },
          r =
            (t, i) =>
            (n = e, a) => (n === e ? t.off() : t.off(n, s.get(a)), i),
          o =
            (t, i) =>
            (s, ...n) => (t.triggerHandler(s, n), t.triggerHandler(e, [s, ...n]), i),
          u = o;
        Object.defineProperties(
          t,
          Object.entries({ on: n, off: r, one: a, emit: u, trigger: o }).reduce(
            (e, [s, n]) => (
              (e[s] = { value: n(i, t), enumerable: !1, writable: !1, configurable: !1 }), e
            ),
            {},
          ),
        );
      })(this);
    }
  }
  new p();
  const f = 0,
    m = 1,
    g = 2,
    v = 3,
    A = 4;
  class b extends p {
    static async getFileHash(t) {
      const e = t.name,
        i = await (async function (t) {
          return new Promise((e) => {
            const i = new FileReader();
            i.addEventListener('load', (t) => {
              e(t.target.result);
            }),
              i.readAsBinaryString(t);
          });
        })(t);
      return (
        (s = e + i.slice(0, 4194304)),
        String(s)
          .split('')
          .reduce((t, e) => (t = (t << 5) - t + e.charCodeAt(0)) & t, 0)
          .toString(16)
          .replace('-', 'a')
      );
      var s;
    }
    constructor(t) {
      super(),
        (this.request = void 0),
        (this.id = void 0),
        (this.file = void 0),
        (this.status = f),
        (this.name = void 0),
        (this.uri = void 0),
        (this.progress = 0),
        (this.file = t),
        (this.name = t.name);
    }
    async init() {
      this.id = await b.getFileHash(this.file);
    }
    upload() {
      this.emit('start');
      const t = flexbe_cli.helpers.upload(this.file, {
        onProgress: (t, e) => {
          e.lengthComputable && (this.progress = e.loaded / e.total),
            this.emit('progress', { jqXhr: t, progress: this.progress });
        },
        onSuccess: (t, e) => {
          (this.uri = t.fileUri),
            (this.status = g),
            this.emit('success', { jqXHR: t, textStatus: e });
        },
        onError: (t, e) => {
          (this.progress = 1),
            (this.status = 'abort' === e ? A : v),
            this.emit('error', { jqXHR: t, textStatus: e });
        },
        onComplete: (t, e) => {
          this.emit('complete', { jqXHR: t, textStatus: e });
        },
      });
      return (this.request = t), (this.status = m), t;
    }
    async abort() {
      this.request && this.status === m && ((this.status = A), this.request.abort());
    }
  }
  let C = {};
  function F(t, e, i) {
    const s = (t, e, i) => {
      const s = t.find('.form-field-hidden'),
        n = Array.from(e)
          .map((t) => t.uri)
          .filter((t) => t);
      $(`input[name="fields[${i}][value][]"]`).remove(),
        n.forEach((t) =>
          s.append(
            $(`<input class="value" type="hidden" name="fields[${i}][value][]" value="${t}">`),
          ),
        );
    };
    t.on(`change${e}`, '.file-input--original', async (t) => {
      const e = Object.values(t.currentTarget.files);
      if (!e.length) return;
      const n = $(t.currentTarget),
        a = n.closest('.form-field'),
        r = a.find('.file-list'),
        o = a.attr('data-field-id'),
        u = (t, e) =>
          (function (t, e = {}) {
            const i = Object.keys(e),
              s = Object.values(e);
            return new Function(...i, `return \`${t}\`;`)(...s);
          })(i, { id: e, fileName: t });
      C[o] || (C[o] = []);
      let l = e.map((t) => new b(t));
      await Promise.all(l.map((t) => t.init())),
        (l = l.filter((t) => !C[o].find((e) => e.id === t.id))),
        l.forEach((t) => {
          const e = $(u(t.name, t.id));
          t.on('start', () => {
            a.addClass('loading'), a.removeClass('is_error'), r.append(e);
          }),
            t.on('progress', ({ progress: t }) => {
              const i = 124.853 - 124.853 * t;
              e.find('.circular-loader--path').css({ 'stroke-dashoffset': `${i}` });
            }),
            t.on('success', () => {
              s(a, C[o], o);
            }),
            t.on('error', (t, i) => {
              'abort' !== i.textStatus &&
                (e.addClass('is-error'),
                a.addClass('is_error'),
                a.find('.error-text').text(flexbe_cli.locale.tr('form::error_file')));
            }),
            t.on('complete', () => {
              e.removeClass('loading'),
                C[o].every((t) => 1 === t.progress) && a.removeClass('loading');
            }),
            t.upload();
        }),
        C[o].push(...l),
        n.val('');
    }),
      t.on(`click${e}`, '.clear-files', (t) => {
        const e = $(t.currentTarget).parents('.file-item'),
          i = $(t.currentTarget).closest('.form-field'),
          n = i.attr('data-field-id'),
          a = e.attr('data-id'),
          r = C[n].find((t) => t.id === a);
        i.removeClass('is_error'),
          (C[n] = C[n].filter((t) => t !== r)),
          e.remove(),
          r.abort(),
          s(i, C[n], n);
      });
  }
  const y = 'next',
    _ = 'result';
  class x extends i {
    constructor(...t) {
      super(...t),
        (this.id = this.core.id),
        (this.eventId = `.quiz${this.id}`),
        (this.products = null),
        (this.pay = null),
        this.createQuiz();
    }
    onInit() {
      (this.$masked = this.$form.find('[data-mask]')),
        (this.$file = this.$component.find('.form-field-file')),
        (this.require = []),
        this.$masked.length;
      this.$file.length &&
        (this.$itemTemplateFile = this.$itemTemplateFile || this.$file.find('template').clone()),
        this.$calendars,
        this.$calendars;
    }
    onLoad() {
      (this.core.wasScreen || this.core.wasBeside) &&
        (this.needInitMasks && this.initFieldMask(), this.needInitCalendar && this.initFieldDate()),
        (this.isLoaded = !0);
    }
    onScreen({ state: t }) {
      if (!t) return !1;
      this.initQuiz();
    }
    onBeside({ state: t }) {
      if (!t) return !1;
      this.initQuiz();
    }
    onOpen(t = {}) {
      this.initQuiz(), this.started || this.startQuiz(), t && t.data && this.setData(t.data);
    }
    onResize() {
      this.$component.find('.range-outer').trigger('resize');
    }
    createQuiz() {
      (this.timeouts = []),
        (this.history = []),
        (this.swiper = []),
        (this.$area = this.core.$area),
        (this.$root = this.core.$root),
        (this.$form = this.$component.find('form')),
        (this.$steps = this.$component.find('.quiz-steps')),
        (this.$actions = this.$component.find('.quiz-actions')),
        (this.$progress = this.$component.find('.quiz-progress')),
        (this.$scroller = this.$root.find('.scroller')),
        (this.$stepsWrapper = this.$steps.find('.steps-wrapper')),
        (this.$outerWrapper = this.$area.find('[data-quiz-part="wrapper"]')),
        (this.$welcomeScreen = this.$outerWrapper.find('[data-quiz-part="welcome"]')),
        this.$progress.length || (this.$progress = this.$area.find('[data-quiz-part="progress"]')),
        (this.rootModal = 'modal' === this.core.is && this.core),
        (this.hasWelcome = !!this.rootModal || this.$welcomeScreen.length > 0),
        (this.autoNextEnabled = +this.$steps.attr('data-autonext') || 0),
        (this.currentId = null),
        (this.currentIndex = -1),
        (this.total = parseInt(this.$component.attr('data-total-steps'), 10));
    }
    initQuiz() {
      if (this.inited) return;
      (this.inited = !0),
        // this.$form.attr('action', `/mod/project/${flexbe_cli.group_id}/lead/send/`),
        this.resetForm(),
        this.bindEvents(),
        this.initFields(),
        this.initControls(),
        this.initCaptcha();
      const t = flexbe_cli.is_admin && this.$area.data('initialQuizStepId'),
        e = flexbe_cli.is_admin && this.$area.data('initialQuizStepIndex');
      t
        ? this.toStep({ id: t, index: e, animated: !1 })
        : this.hasWelcome || this.startQuiz({ animated: !1 });
    }
    onHideShowUI() {
      this.resetForm(), this.toWelcome({ scrl: !1 });
    }
    bindEvents() {
      flexbe_cli.events.off(this.eventId),
        this.$form.off(this.eventId),
        this.$scroller.off(this.eventId),
        flexbe_cli.events.on(`quiz_command${this.eventId}`, (t) => {
          this.id === t.id &&
            ('welcome' === t.command
              ? this.toWelcome()
              : 'start' === t.command
              ? this.startQuiz()
              : 'step' === t.command &&
                this.toStep({
                  id: t.stepId,
                  index: t.stepIndex,
                  force: t.force,
                  animated: t.animated,
                  scrl: t.scroll,
                }));
        }),
        this.$form.on(`change${this.eventId}`, '.policy-data-warning__input', (t) => {
          this.$form.find('.policy-data-warning__input').prop('checked', t.target.checked);
        }),
        this.$form.on(`input${this.eventId} change${this.eventId}`, 'input, textarea', (t) => {
          const e = t.currentTarget,
            i = e.value,
            s = $(e);
          s.attr('value', i), s.closest('.is_error').removeClass('is_error');
        }),
        this.$form.on(`keydown${this.eventId}`, 'input, textarea', (t) => {
          const e = t.currentTarget,
            i = e.getAttribute('data-check'),
            s = t.key || '',
            n = t.ctrlKey || t.metaKey;
          return (
            !('phone' === i && !e._mask && !n && 1 === s.length && /[^\d ()+-]/.test(s)) &&
            ('email' !== i || !/[\s,]/.test(s)) &&
            void 0
          );
        }),
        this.needInitCalendar &&
          'modal' === this.core.is &&
          setTimeout(() => {
            this.$calendars.toArray().forEach((t) => {
              const e = $(t).data('calendar');
              this.$scroller.on(`scroll${this.eventId}`, () => {
                e.main.toPosition();
              });
            });
          }, 150),
        this.$form.on(`submit${this.eventId}`, () => this.onSubmit());
    }
    initControls() {
      $('body')
        .off(`keydown${this.eventId}`)
        .on(`keydown${this.eventId}`, (t) => {
          const e = 9 === t.keyCode,
            i = 13 === t.keyCode;
          if (!i && !e) return;
          const s = this.inFocus,
            n = t.metaKey || t.ctrlKey,
            a = t.shiftKey;
          if (s && ('TEXTAREA' !== t.target.tagName || !i || n)) {
            if (a && e) this.toPrevStep();
            else if (!a && !n) {
              const t = this.$currentStep.find(':focus').closest('.field').next('.field');
              this.focusField(t) || this.toNextStep();
            }
            return t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), !1;
          }
        }),
        this.$component.off('click.control').on('click.control', '[data-quiz-action]', (t) => {
          const e = t.currentTarget.getAttribute('data-quiz-action');
          'welcome' === e
            ? this.toWelcome()
            : 'prev' === e
            ? this.toPrevStep()
            : 'next' === e && this.toNextStep();
        });
    }
    setProgress() {
      const t = this.$progress.find('.progress-loader-bar .current'),
        e = this.total,
        i = t.data('unit');
      let s = this.realIndex + 1;
      if (flexbe_cli.is_admin && -1 === this.realIndex && 'welcome' !== this.currentId) {
        s =
          (+this.$currentStep.prevAll('[data-linked="linked"]').first().attr('data-real-index') +
            1 || 0) + 1;
      }
      let n = parseInt((100 * s) / e, 10) || 0;
      if (((s = Math.max(0, Math.min(e, s))), (n = Math.max(0, Math.min(100, n))), t.length && i)) {
        let a = `${n}%`;
        'step' === i ? (a = `${s} / ${e}`) : 'none' === i && (a = ''), t.attr('data-value', a);
      }
      this.$progress.attr('data-current-progress', n),
        this.$progress.attr('data-current', s),
        this.$progress.attr('data-total', e),
        this.$progress.find('.progress-text .current').text(s),
        this.$progress.find('.progress-text .total').text(e),
        this.$progress.find('.progress-percent .current').text(n),
        this.$progress.find('.progress-loader-bar .current').css('width', `${n}%`),
        this.$progress
          .find('.progress-loader-circle .current')
          .attr('stroke-dashoffset', `${Math.abs(100 - n)}`);
    }
    setActionButtons() {
      let t =
        this.hasWelcome ||
        this.history.length > 1 ||
        !!(flexbe_cli.is_admin && 0 !== this.realIndex && this.currentIndex > 0);
      !flexbe_cli.is_admin || !this.rootModal || (this.realIndex && this.currentIndex) || (t = !1),
        this.$actions.toggleClass('show-prev', t);
    }
    toWelcome({ scrl: t = !0 } = {}) {
      if (!this.hasWelcome) return this.startQuiz({ scrl: t }), !0;
      if (
        ((this.started = !1),
        (this.currentIndex = -1),
        (this.realIndex = -1),
        (this.currentId = 'welcome'),
        this.$area.data('initialQuizStepId', this.currentId),
        this.$area.data('initialQuizStepIndex', this.currentIndex),
        this.$outerWrapper.attr('data-active-step', this.currentId),
        this.$outerWrapper.attr('data-active-index', this.currentIndex),
        this.$outerWrapper.toggleClass('quiz-state-welcome', !0),
        this.$outerWrapper.toggleClass('quiz-state-started', !1),
        this.rootModal)
      )
        flexbe_cli.run.is_preview &&
          flexbe_cli.events.trigger('ui_modal_close', { id: this.rootModal.id });
      else if (this.$outerWrapper.length) {
        const t = this.$welcomeScreen.outerHeight() || 0;
        this.$outerWrapper.css('minHeight', t);
      }
      return (
        this.setProgress(),
        this.setActionButtons(),
        t &&
          'block' === this.core.is &&
          flexbe_cli.run.is_preview &&
          flexbe_cli.scroll.toElement(this.$area),
        flexbe_cli.events.trigger('quiz_event', { event: 'welcome', sender: 'core', quiz: this }),
        !0
      );
    }
    startQuiz({ animated: t, scrl: e } = {}) {
      this.sessionId = parseInt(Date.now() / 1e3, 10);
      const i = this.$stepsWrapper.find('.step[data-type="root"][data-linked="linked"]').first();
      i.length && this.toStep({ $step: i, force: !0, animated: t, scrl: e });
    }
    autoNextStep() {
      !this.autoNextEnabled ||
        this.$currentStep.find('.quiz-fields').data('count') > 1 ||
        setTimeout(() => {
          this.toNextStep();
        }, 150);
    }
    toPrevStep() {
      const t = this.history[this.history.length - 2];
      if (!t) {
        const t = this.$currentStep
          .prevAll('.step[data-type="root"][data-linked="linked"]')
          .first();
        return t.length ? this.toStep({ $step: t }) : this.hasWelcome && this.toWelcome(), !1;
      }
      return this.toStep(t), !0;
    }
    toNextStep({ force: t } = {}) {
      if (!(t || this.validateStep())) return !1;
      const e = this.$currentStep.attr('data-goto'),
        i = this.$currentStep.attr('data-goal'),
        s = this.$currentStep.attr('data-html-goal'),
        n = this.history.find((t) => t.id === this.currentId) || {},
        a = this.$currentStep
          .find('[data-field-id]')
          .map((t, e) => {
            const i = $(e),
              s = i.attr('data-field-id'),
              n = i.find('textarea').not('[type="hidden"]'),
              a = i.find('[data-goto]'),
              r = i.attr('data-type'),
              o = i.find(`[name="vars[${s}]"]`).val();
            let u = n.attr('type'),
              l = a,
              h = n.val();
            ['checkbox', 'radio', 'image'].includes(r)
              ? (l = a.filter(':checked'))
              : 'select' === r
              ? ((l = l.filter((t, e) => e.selected)), (u = 'select'))
              : 'file' === r && (h = Array.from(n[0].files));
            const c = l.toArray(),
              d = c.map((t) => t.getAttribute('data-goto')).filter((t) => t);
            return {
              id: s,
              title: o,
              type: r,
              inputType: u,
              value: h,
              variants: c
                .map((t) => ({ id: t.getAttribute('data-id'), value: t.value }))
                .filter((t) => t.id),
              goto: d,
            };
          })
          .toArray(),
        r = a.map((t) => {
          const e = { id: t.id, title: t.title, type: t.type };
          return (
            ['radio', 'checkbox', 'select', 'image'].includes(t.inputType)
              ? (e.variants = t.variants)
              : (e.value = t.value),
            e
          );
        }),
        o = a.reduce((t, e) => t.concat(e.goto), []),
        u = this.getNextStep({ gotoId: o[0] || e || y });
      n && ((n.fields = a), (n.answers = r), (n.toId = u), (n.goal = i), (n.htmlGoal = s)),
        this.toStep({ id: u, historyItem: n });
    }
    getNextStep({ gotoId: t, $current: e = this.$currentStep } = {}) {
      if (t === _) {
        const t = this.history.map((t) => t.$step[0]),
          e = this.$stepsWrapper
            .find('[data-type="root"][data-linked="linked"][data-required]')
            .filter((e, i) => !t.includes(i));
        return e.length ? e.eq(0).attr('data-id') : _;
      }
      let i = t;
      if (t === y || !this.$stepsWrapper.find(`.step[data-id="${i}"]`).length) {
        i = e.nextAll('.step[data-type="root"][data-linked="linked"]').first().attr('data-id');
      }
      if (t === y && !i) return this.getNextStep({ gotoId: _, $current: e });
      if (!this.checkStepCondition({ id: i })) {
        const t = e.nextAll('.step[data-type="root"][data-linked="linked"]').first();
        return this.getNextStep({ gotoId: y, $current: t });
      }
      return i;
    }
    toStep({
      id: t,
      index: e,
      $step: i,
      force: s,
      scrl: n = !0,
      animated: a = !0,
      historyItem: r,
    }) {
      var o, u;
      if (this.inStepAnimation) return !1;
      if ((null == r && (r = this.history.find((t) => t.id === this.currentId)), t === _))
        return void this.toResult({ historyItem: r });
      if (
        ((i && i.length) || null == t || (i = this.$stepsWrapper.find(`.step[data-id="${t}"]`)),
        (i && i.length) || null == e || (i = this.$stepsWrapper.find(`.step[data-index="${e}"]`)),
        !i || !i.length)
      )
        return !1;
      if (
        ((t = null != (o = t) ? o : i.attr('data-id')),
        (e = parseInt(null != (u = e) ? u : i.attr('data-index'), 10)),
        t === this.currentId)
      )
        return this.enableStep(i), !1;
      const l = flexbe_cli.is_admin ? parseInt(i.attr('data-real-index'), 10) : e,
        h = e > this.currentIndex;
      a || this.$area.addClass('noanimate'), i.find('.is_error').removeClass('is_error');
      const c = i.outerHeight(),
        d = {
          $step: i,
          id: t,
          title: i.find('.step-title').text().trim(),
          index: e,
          realIndex: l,
          fields: [],
          answers: [],
        };
      let p = [];
      s
        ? ((p = this.history), (this.history = []))
        : ((p = this.history.filter((t) => t.index >= d.index)),
          (this.history = this.history.filter((t) => !p.includes(t)))),
        p.forEach((t) => {
          this.disableStep(t.$step);
        }),
        this.enableStep(i),
        (this.started = !0),
        this.history.push(d),
        this.$component.addClass('quiz-started'),
        a && this.$component.addClass('step-change-animation');
      const f = window.scrollParent(this.$component[0]) || document.scrollingElement,
        m = (f && f.scrollTop) || 0,
        g = this.$stepsWrapper.outerHeight();
      if (
        (this.$area.data('initialQuizStepId', t),
        this.$area.data('initialQuizStepIndex', e),
        this.$outerWrapper.attr('data-active-step', t),
        this.$outerWrapper.attr('data-active-index', e),
        this.$outerWrapper.toggleClass('quiz-state-welcome', !1),
        this.$outerWrapper.toggleClass('quiz-state-started', !0),
        i.toggleClass('higher', c > g),
        a && this.$stepsWrapper.css('height', `${g}px`),
        this.$outerWrapper.css('minHeight', `${g}px`),
        i.prevAll().removeClass('active next').addClass('prev'),
        i.nextAll().removeClass('active prev').addClass('next'),
        i.removeClass('next prev').addClass('active'),
        (this.currentId = t),
        (this.currentIndex = e),
        (this.realIndex = l),
        (this.$currentStep = i),
        this.core.updateTween(),
        this.setProgress(),
        this.setActionButtons(),
        this.initImages(),
        2 === flexbe_cli.theme_id)
      ) {
        const t = this.$area.find('.b_head');
        t.length && flexbe_cli.header.fixHeaderHeight(this.$area, t);
      }
      return (
        (this.timeouts = this.timeouts.filter((t) => clearTimeout(t))),
        this.timeouts.push(
          setTimeout(() => {
            a || this.$area.removeClass('noanimate');
          }, 20),
        ),
        a
          ? ((this.inStepAnimation = !0),
            this.timeouts.push(
              setTimeout(() => {
                this.$stepsWrapper.css('height', ''),
                  this.$component.removeClass('step-change-animation'),
                  i.find('.range-outer').trigger('resize'),
                  (this.inStepAnimation = !1);
              }, 250),
            ),
            n &&
              (this.timeouts.push(
                setTimeout(() => {
                  const t = this.$area.get(0).getBoundingClientRect();
                  this.$stepsWrapper.css('height', `${c}px`);
                  const e = f.scrollTop,
                    i = this.$area.get(0).getBoundingClientRect().bottom - t.bottom - (m - e);
                  i && f.scrollTo(0, e + i);
                }, 150),
              ),
              flexbe_cli.run.is_preview &&
                this.timeouts.push(
                  setTimeout(() => {
                    let t = this.$component;
                    this.$area.outerHeight() <= flexbe_cli.resize.viewportHeight &&
                      (t = this.$area),
                      flexbe_cli.scroll.toElement(t, {
                        centered: !0,
                        force: !1,
                        complete: () => {
                          flexbe_cli.run.is_mobile || this.focusField(i);
                        },
                      });
                  }, 450),
                )))
          : i.find('.range-outer').trigger('resize'),
        (r = r || {}),
        (this.lastHistoryItem = r),
        flexbe_cli.events.trigger('quiz_event', {
          event: 'step',
          sender: 'core',
          quiz: this,
          payload: {
            fromId: r.id,
            fromTitle: r.title,
            fromAnswers: r.answers,
            toNext: h,
            toId: t,
            sessionId: this.sessionId,
          },
          answerGoals: { goal: r.goal, htmlGoal: r.htmlGoal },
        }),
        !0
      );
    }
    toResult({ force: t, historyItem: e } = {}) {
      const i = t || this.validateStep();
      return (
        !!(t || (!this.busy && i)) &&
        (null == e && (e = this.history[this.history.length - 1]),
        (this.result = this.getResult()),
        (this.lastHistoryItem = e),
        !0)
      );
    }
    validateStep() {
      let t = !0;
      if (!this.$currentStep || !this.$currentStep.length) return !0;
      const e = this.$currentStep.find('.policy-data-warning--checkbox'),
        i = e.find('input')[0];
      return (
        i && !i.checked && ((t = !1), e.addClass('is_error animate')),
        this.$currentStep.find('.field[data-type]').each((e, i) => {
          const s = $(i),
            n = s.attr('data-type');
          let a;
          if ((s.removeClass('is_error'), 'captcha' === n)) {
            if (!this.captcha) return;
            a = !this.captcha.getToken() && flexbe_cli.locale.tr('form::captcha_not_checked');
          } else a = this.checkField(s);
          a &&
            (s.outerWidth(),
            s.addClass('is_error animate'),
            setTimeout(() => {
              s.removeClass('animate');
            }, 500),
            'file' === n ? s.find('.error-text').text(a) : s.find('.error').text(a),
            t && this.focusField(s, 500),
            (t = !1));
        }),
        t
      );
    }
    getResult() {
      const t = this.$form.find('span[name=results]').data('vl') || [];
      let e = t.filter((t) => 'default' !== t.id).find((t) => this.checkResultCondition(t));
      return e || (e = t.find((t) => 'default' === t.id) || t[0]), 'object' != typeof e;
    }
    checkStepCondition() {
      return !0;
    }
    checkResultCondition(t) {
      const e = t.conditions || {},
        i = e.union,
        s = e.list || [],
        n = this.history.reduce((t, e) => t.concat(e.fields), []);
      let a = s.map((t) => {
        const e = n.find((e) => String(e.id) === String(t.field));
        return { condition: t, field: e };
      });
      return (
        !!a.length &&
        ((a = a['and' === i ? 'every' : 'some'](({ condition: t, field: e }) => {
          let i = !0;
          if (!e) return !1;
          if ('vars' === t.type) {
            const s = e.variants || [],
              n = (t.variants || []).map((t) => `${t}`);
            if (!s.length) return !!t.emptyVariant;
            if ((t.unionExtra || (i = s.every((t) => n.includes(`${t.id}`))), i)) {
              let a = t.union;
              ('radio' !== e.inputType && 'select' !== e.inputType) || (a = 'or'),
                (i = n['and' === a ? 'every' : 'some']((t) => s.find((e) => e.id === t)));
            }
          } else if ('range' === t.type) {
            const s = `${e.value}`
                .replace(/\s+/g, '')
                .split(/\s[—-]\s/)
                .map((t) => +t)
                .filter((t) => 'number' == typeof t && !Number.isNaN(t)),
              n = Math.min.apply(null, s),
              a = Math.max.apply(null, s),
              o = n !== a;
            let u = +t.rangeLimitFrom,
              l = +t.rangeLimitTo;
            if ('equal' === t.operator) return o ? n <= u && u <= a : u === n;
            r(u) &&
              r(l) &&
              ((u = Math.min(t.rangeLimitFrom, t.rangeLimitTo)),
              (l = Math.max(t.rangeLimitTo, t.rangeLimitFrom))),
              i && r(u) && (i = u <= n),
              i && r(l) && (i = a <= l);
          } else if ('text' === t.type) {
            const i = t.fill,
              s = (e.value || '').trim().replace(/ +/g, ' ').replace(/\+/g, '∔'),
              n = t.answers.map((t) => `${t}`.toLowerCase().replace(/\+/g, '∔')).filter((t) => t);
            if ('fill' === i) return !!s;
            if ('empty' === i) return !s;
            if ('include' === i) return n.some((t) => new RegExp(`^${t}|\\s${t}`, 'i').test(s));
            if ('exclude' === i) return n.every((t) => !new RegExp(`^${t}|\\s${t}`, 'i').test(s));
          } else if ('file' === t.type) {
            const i = t.fill,
              s = e.value;
            if ('fill' === i) return !!s.length;
            if ('empty' === i) return !s.length;
          }
          return i;
        })),
        a)
      );
      function r(t) {
        return !Number.isNaN(+t) && null != t && '' !== t;
      }
    }
    checkField(t) {
      const e = t.find('input, textarea, select').not('[type="hidden"]'),
        i = e[0],
        s = t[0];
      if (!i) return;
      const n = s.getAttribute('data-type'),
        a = [!0, 1, 'true', '1'].includes(s.getAttribute('data-is-required')),
        r = i.getAttribute('data-check') || !1,
        o = (i._mask && i.getAttribute('data-mask')) || !1;
      let u;
      u = ['checkbox', 'radio', 'image'].includes(n)
        ? !!e.closest(':checked').length
        : 'file' === n
        ? t.find('input.value')
        : i.value;
      let l = !(!a || u) && 'form.required';
      if (o) {
        (!a && !u) ||
          i.getAttribute('data-mask-complete') ||
          (l =
            'phone' === n && u ? 'form.phone' : 'text' === n && u ? 'form.text' : 'form.required');
      } else if (r)
        if (u.length && 'email' === n) {
          /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\wЁА-яё-]+\.)+[A-Za-zЁА-яё]{2,}))$/.test(
            u,
          ) || (l = 'form.email');
        } else if (u.length && 'phone' === n)
          if (/[^\d\s()+-]/.test(u)) l = 'form.digits';
          else {
            u.replace(/\D/g, '').length < 5 && (l = 'form.minlength');
          }
        else if ('file' === n)
          l = a && !u.length ? 'form.required' : !!t.hasClass('loading') && 'form.loading';
        else if ('date' === n || 'datetime' === n) {
          const t = $(i).data('calendar'),
            e = t && t.input.checkError();
          e && (l = e);
        }
      return (l = (l && flexbe_cli.locale.tr(l)) || !1), l;
    }
    disableStep(t) {
      t.find(' textarea, select').prop('disabled', !0);
    }
    enableStep(t) {
      t.find('input, textarea, select').prop('disabled', !1);
    }
    focusField(t, e = 200) {
      if (!t || !t.length) return !1;
      if (flexbe_cli.run.is_ios) return !1;
      const i = t.find('.form-field-text, .dropdown-select').not('.form-field-date__input').first();
      return !!i.length && (e ? setTimeout(() => i.focus(), e) : i.focus(), !0);
    }
    initImages() {
      setTimeout(() => {
        const t = $(this.component).find('.step.active');
        $(t).find('.component-image').length &&
          (function (t, e, i, s = {}) {
            const n = $(t),
              a = e ? `[data-component="${e}"]` : '[data-component]';
            n.is(a) && n.trigger(i, s),
              $(t)
                .find(a)
                .each((t, e) => {
                  $(e).trigger(i, s);
                });
          })(t, 'image', 'setImage');
      }, 100);
    }
    initFields() {
      this.initFieldImage(),
        this.initFieldCheckbox(),
        this.initFieldRadio(),
        this.initFieldSelect(),
        this.initFieldTextarea(),
        this.initFieldFile(),
        this.initFieldRange(),
        this.isLoaded &&
          (this.needInitMasks && this.initFieldMask(),
          this.needInitCalendar && this.initFieldDate());
    }
    initFieldImage() {
      this.$component
        .off('click.fieldImages')
        .on('click.fieldImages', '.form-field-image-item', (t) => {
          const e = t.currentTarget.querySelector('input'),
            i = !e.checked;
          (e.checked = i), i && 'radio' === e.type && this.autoNextStep();
        });
    }
    initFieldFile() {
      var t;
      F(this.$component, this.eventId, null == (t = this.$itemTemplateFile) ? void 0 : t.html());
    }
    initFieldCheckbox() {}
    initFieldRadio() {
      this.autoNextEnabled &&
        this.$component
          .off('change.initRadio')
          .on('change.initRadio', '.form-field-radio-item', () => {
            this.autoNextStep();
          });
    }
    initFieldSelect() {
      this.$component.find('.dropdown-container').remove();
      const t = this.$component.find('select.atom-custom-select'),
        e = {
          position: 'under',
          dropdownClass: this.$component.hasClass('style-underlined')
            ? 'sharp size--large'
            : 'size--large',
        };
      t.each((t, i) => {
        const s = $(i).closest('[data-type="select"]');
        a.create({
          element: i,
          config: e,
          onChange: this.autoNextStep.bind(this),
          onSelect: this.autoNextStep.bind(this),
          onCollapse: () => {
            s.removeClass('active');
          },
          onActivate: () => {
            s.addClass('active'), s.siblings('[data-type="select"]').removeClass('active');
          },
        });
      });
    }
    initFieldTextarea() {
      this.$component.find('textarea.autosize').each((t, e) => {
        const i = e.offsetHeight - e.clientHeight,
          s = $(e);
        s.removeAttr('data-autoresize'),
          s.off('keyup input').on('keyup input', function (t) {
            (t.currentTarget.style.height = 'auto'),
              (t.currentTarget.style.height = `${t.currentTarget.scrollHeight + i}px`);
          });
      });
    }
    initFieldRange() {
      this.$component.find('.form-field-range').each((t, e) => new r($(e)));
    }
    addSubmitting() {
      (this.busy = +Date.now()),
        this.$component.addClass('submitting'),
        this.$form.addClass('submitting');
    }
    clearSubmitting(t = !1) {
      this.busy &&
        (this.$component.removeClass('submitting'),
        this.$form.removeClass('submitting'),
        t
          ? (this.$component.addClass('success'),
            this.$component.find('.file-list').empty(),
            this.$component.find('input.value').remove(),
            setTimeout(() => {
              (this.busy = !1), this.$component.removeClass('success');
            }, 1e3))
          : (this.busy = !1));
    }
    onSubmit() {
      const t = {
        pageId: flexbe_cli.p_id,
        id: this.core.id,
      };

      return Object.entries(t).forEach(([t, e]) => {
        null != e && this.addFields([{ name: t, value: e, type: 'hidden' }], !1);
      });
    }
    async sendForm() {
      const t = this.captcha && this.captcha.getToken();
      if (this.captcha && this.captcha.enabled && !this.captcha.isOptional && !t)
        return void (this.captcha.isVisible
          ? this.toStep({ id: 'captcha' })
          : this.captchaInvisibleRun());
      this.addSubmitting();
      const e = new FormData(this.$form.get(0));
      const i = flexbe_cli.stat.AB.getCookie();
      if (
        (e.append('abTest', JSON.stringify(i)),
        e.delete('g-recaptcha-response'),
        t && e.append('captcha-token', t),
        flexbe_cli.run.is_OSX && 'function' == typeof e.entries)
      )
        for (const t of e.entries()) {
          const [i, s] = t;
          'object' == typeof s &&
            s instanceof File &&
            0 === s.size &&
            'function' == typeof e.delete &&
            e.delete(i);
        }
      try {
        const t = await flexbe_cli.helpers.fetch(this.$form.attr('action'), {
          type: 'POST',
          dataType: 'json',
          processData: !1,
          contentType: !1,
          data: e,
        });
        void 0 !== t.pay && (this.pay = t.pay), this.showDone(), this.captchaRemoveError();
      } catch (e) {
        const i = e.data;
        if (i.captcha)
          return (
            this.captcha ||
              (await this.initCaptcha({
                ...s.getRecaptchaSettings(),
                enabled: !0,
                visible: 'visible' === i.captcha,
                ttl: 1,
              })),
            void (t
              ? this.captchaAddError()
              : this.captcha.isVisible
              ? ((this.captcha.isOptional = !1),
                (this.total = parseInt(this.$component.attr('data-total-steps'), 10) + 1),
                this.clearSubmitting(!1),
                this.toStep({ id: 'captcha' }))
              : this.captcha.isInvisible && this.captchaInvisibleRun())
          );
      }
    }
    showDone() {
      const t = () => {
          setTimeout(() => {
            this.resetForm(), this.toWelcome({ scrl: !1 });
          }, 500);
        },
        e = this.result.action.name,
        i = this.lastHistoryItem;
      if (i) {
        const t = i.answers,
          e = i.id,
          s = i.title,
          n = this.result.goals || {};
        flexbe_cli.events.trigger('quiz_event', {
          sender: 'core',
          quiz: this,
          payload: { fromAnswers: t, fromId: e, fromTitle: s, sessionId: this.sessionId },
          answerGoals: { goal: i.goal, htmlGoal: i.htmlGoal },
          resultGoals: {
            mainGoal: flexbe_cli.stat.getGoal('order_done'),
            goal: n.goal,
            htmlGoal: n.goal_html,
          },
        });
      }
      if (
        ('function' == typeof this.afterSent && this.afterSent(),
        'pay' === e && void 0 !== this.pay && null !== this.pay && this.pay.pay_link.length > 0)
      ) {
        const e = `${
          window.location.origin +
          window.location.pathname +
          (window.location.search ? `${window.location.search}&` : '?')
        }pay_id=${this.pay.pay_id}&h=${this.pay.pay_hash}`;
        try {
          window.history.pushState(null, null, e),
            setTimeout(() => {
              flexbe_cli.events.trigger('pay', { action: 'init' });
            }, 200);
        } catch (t) {
          setTimeout(() => {
            document.location = e;
          }, 500);
        }
        this.clearSubmitting(!0), t();
      } else if (['redirect', 'anchor'].includes(e)) {
        const e = this.result.action.action_redirect,
          i = this.result.action.action_link;
        if (e)
          flexbe_cli.helpers.links.gotoLink(e),
            setTimeout(() => {
              t();
            }, 1e3);
        else if (i) {
          const e = $(`div[data-id="${i.replace('#', '')}"]`);
          e.length > 0 && flexbe_cli.scroll.toElement(e), this.clearSubmitting(!0), t();
        } else this.clearSubmitting(!0), t();
      } else {
        const e = this.result.action.modal_id;
        flexbe_cli.events.trigger('ui_modal_open', { id: e }), this.clearSubmitting(!0), t();
      }
    }
    resetForm() {
      this.$form.find('.form-field-file, .file-input-outer').removeClass('active');
      const t = this.$stepsWrapper.find('input, textarea, select'),
        e = t.not('select').not('[type="hidden"]').not('.form-fie'),
        i = t.filter('select'),
        s = t.filter('.form-fiet');
      t.prop('asd', !0),
        i.each((t, e) => {
          const i = e.querySelector('option'),
            s = (i && i.value) || '';
          e.value !== s && ((e.value = s), e.dispatchEvent(new Event('change')));
        }),
        s.each((t, e) => {
          (e.value = e.getAttribute('data-value')), e.dispatchEvent(new Event('change'));
        }),
        e.each((t, e) => {
          const i = e.defaultChecked;
          ['radio', 'checkbox'].includes(e.type)
            ? (e.checked = i)
            : (e.removeAttribute('value'),
              (e.value = ''),
              e.removeAttribute('data-mask-complete'),
              e._mask && e._mask.updateValue()),
            e.dispatchEvent(new Event('change'));
        }),
        this.captcha && this.captcha.enabled && (this.captcha.reset(), this.captchaRemoveError()),
        (C = {}),
        this.$form[0].reset();
    }
    async initCaptcha(t) {
      return (
        null == t && (t = s.getRecaptchaSettings()),
        new Promise((e, i) => {
          !this.captcha &&
            t.enabled &&
            ((this.captcha = new s(
              {
                id: this.id,
                $form: this.$component,
                onSuccess: () => {
                  this.captchaRemoveError(), this.toResult({ force: !0 });
                },
                onError: () => {
                  this.captchaAddError();
                },
              },
              t,
            )),
            flexbe_cli.require(
              `https://www.google.com/recaptcha/api.js?render=explicit&hl=${flexbe_cli.vars._group.language}`,
              () => {
                let t = 150;
                const s = setInterval(() => {
                  (t -= 1),
                    this.captcha.loaded
                      ? (this.captcha.init(), clearInterval(s), e())
                      : 0 === t && i(new Error('Can not load grecaptcha'));
                }, 10);
              },
            ));
        })
      );
    }
    captchaAddError(t) {
      if (!this.captcha || !this.captcha.enabled) return;
      null == t && (t = flexbe_cli.locale.tr('form::captcha_error'));
      const e = this.$component.find('.captcha-global-error');
      e.find('.error-text').text(t), e.addClass('show'), this.busy && this.clearSubmitting();
    }
    captchaRemoveError() {
      if (!this.captcha || !this.captcha.enabled) return;
      const t = this.$component.find('.field[data-type="captcha"]'),
        e = this.$component.find('.captcha-global-error');
      t.removeClass('is_error'), e.removeClass('show');
    }
    captchaInvisibleRun() {
      if (!this.captcha || !this.captcha.enabled || !this.captcha.loaded || this.captcha.isVisible)
        return;
      this.addSubmitting(), this.captcha.runInvisibleChallenge();
      const t = this.busy;
      setTimeout(() => {
        t === this.busy && this.clearSubmitting();
      }, 2500);
    }
    setData(t) {
      if (!t) return !1;
      t && t.fields && this.addFields(t.fields), t && t.items && this.addItems(t.items);
    }
    addFields(t, e = !0) {
      const i = this.$component.find('.form-fields-advanced');
      t.length &&
        i[0] &&
        (e && this.resetFields(),
        t.forEach((t) => {
          i.find(`input[name="${t.name}"]`).remove();
          const e = $('<input>').attr('type', t.type).attr('name', t.name).attr('value', t.value);
          i.append(e);
        }));
    }
    resetFields() {
      const t = this.$component.find('.form-fields-advanced');
      t[0] && t.empty();
    }
    addItems(t = []) {
      if (!t || !t.length) return;
      let e = 0,
        i = '';
      const s = [];
      t = t.map((t) =>
        'object' != typeof t
          ? {}
          : ((t.price = parseFloat(t.price) || 0),
            (t.title = ('string' == typeof t.title && t.title.trim()) || t.title || ''),
            (e += t.price * t.count || 0),
            t),
      );
      try {
        i = JSON.stringify(t);
      } catch (t) {}
      let n = { products: i };
      e && (n = { ...n, 'pay[price]': e, 'pay[desc]': '' }),
        Object.entries(n).forEach(([t, e]) => {
          s.push({ type: 'hidden', name: t, value: e });
        }),
        this.addFields(s);
    }
    initFieldDate() {
      this.needInitCalendar = !1;
      const t = this.$component.closest('.scroller')[0];
      return (
        this.$calendars.each((e, i) => {
          !(function (t, e) {
            const i = $(t),
              s = i.closest('[data-type]').attr('data-type'),
              n = i.attr('data-date-range') || 'any',
              a = i.attr('data-date-work-days') || '0,1,2,3,4,5,6';
            let r = new Date().getFullYear() + 3;
            'datetime' === s &&
              (r =
                new Date().getMonth() >= 8
                  ? new Date().getFullYear() + 1
                  : new Date().getFullYear());
            let o = new Date(new Date().getFullYear() - 100, 0, 1),
              u = new Date(r, 11, 31);
            ('datetime' !== s && 'future' !== n) || (o = new Date()),
              'date' === s && 'past' === n && (u = new Date());
            const l = {
              type: s,
              lowerLimit: o,
              upperLimit: u,
              dateRange: n,
              locale: flexbe_cli.locale.translation.calendar,
              dateFormat: flexbe_cli.locale.date_format,
              showDateSelector: 'date' === s && 'future' !== n,
              insertTo: e,
              workDays: a.split(','),
              workTime: null,
            };
            if ('datetime' === s) {
              const t = i.attr('data-date-time-interval') || 30,
                e = i.attr('data-date-time-start') || '00:00',
                s = i.attr('data-date-time-finish') || '00:00';
              l.workTime = {
                interval: t,
                start: { hour: +e.substring(0, 2), minute: +e.substring(3, 5) },
                finish: { hour: +s.substring(0, 2), minute: +s.substring(3, 5) },
              };
            }
            i.calendar(l);
          })(i, t);
        }),
        !0
      );
    }
  }
  x.is = 'quiz';
  flexbe_cli.entity.setClientJs('modal', 'QUIZ', {
    components: [
      'background',
      'image',
      class extends x {
        setProgress() {
          const t = this.$progress.find('.progress-loader-bar .current'),
            e = 'step' === this.$progress.attr('data-text-style'),
            i = t.attr('data-unit'),
            s = this.total;
          let n = this.realIndex;
          if (flexbe_cli.is_admin && -1 === this.realIndex && 'welcome' !== this.currentId) {
            n =
              +this.$currentStep.prevAll('[data-linked="linked"]').first().attr('data-real-index') +
                1 || 0;
          }
          n = Math.max(0, Math.min(s - 1, n));
          const a = e ? n + 1 : n,
            r = parseInt((100 * a) / s, 10);
          if (
            (this.$progress.attr('data-current', a),
            this.$progress.attr('data-total', s),
            this.$progress.attr('data-current-progress', r > 0 ? r : 0),
            t && i)
          ) {
            const e = t.find('.progress-runner');
            let n = `${r}%`;
            'step' === i ? (n = `${a} / ${s}`) : 'none' === i && (n = ''), e.attr('data-value', n);
          }
          this.$progress.find('.progress-text .current').text(a),
            this.$progress.find('.progress-text .total').text(s),
            this.$progress.find('.progress-percent .current').text(r),
            this.$progress.find('.progress-loader-bar .current').css('width', `${r}%`),
            this.$progress
              .find('.progress-loader-circle .current')
              .attr('stroke-dashoffset', `${Math.abs(100 - r)}`);
        }
      },
    ],
  });
})();

flexbe_cli.entity.setClientJs('block', 'FREE', { components: ['background'] });

flexbe_cli.entity.setClientJs('element', 'button01', { components: ['icon', 'button'] });

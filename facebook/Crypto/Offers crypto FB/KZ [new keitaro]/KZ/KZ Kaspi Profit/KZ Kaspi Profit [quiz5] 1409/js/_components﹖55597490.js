!(function () {
  'use strict';
  const t =
      (t, e = 0) =>
      (...i) =>
        setTimeout(t, e, ...i),
    e = (e, i = 0, ...s) => t(e, i)(...s),
    i = (t, e = 0) => (flexbe_cli.is_admin ? (...e) => t(...e) : (...i) => setTimeout(t, e, ...i));
  const s = document,
    n = 'a[href], [data-action]',
    o = '[data-action-target]';
  let a, r;
  class l {
    static create() {
      return a || ((a = new l()), a);
    }
    constructor() {
      this.bindEvents();
    }
    bindEvents() {
      const t = (t) => !!t.target.closest('[data-prevent-action], [data-flexbe-events="off"]');
      $(s)
        .off('mousedown.component-links-fake', o)
        .on(
          'mousedown.component-links-fake',
          o,
          (t) => (2 !== t.which && 1 !== t.button) || (t.preventDefault(), !1),
        ),
        $(s)
          .off('click.component-links-fake auxclick.component-links-fake')
          .on('click.component-links-fake auxclick.component-links-fake', o, (e) => {
            const i = e.originalEvent;
            return (
              !(i && i.isTrusted && !e.target.closest(n) && !t(e)) ||
              (e.stopPropagation(),
              e.stopImmediatePropagation(),
              (function (t, e = {}) {
                if (!t) return;
                const i = new MouseEvent(e.type || 'click', {
                  bubbles: e.bubbles,
                  cancelable: e.cancelable,
                  composed: e.composed,
                  screenX: e.screenX,
                  screenY: e.screenY,
                  clientX: e.clientX,
                  clientY: e.clientY,
                  ctrlKey: e.ctrlKey,
                  shiftKey: e.shiftKey,
                  altKey: e.altKey,
                  metaKey: e.metaKey,
                  button: e.button,
                  buttons: e.buttons,
                  relatedTarget: e.relatedTarget,
                });
                t.dispatchEvent(i);
              })($(e.currentTarget).children(n).get(0), i),
              !1)
            );
          }),
        $(s)
          .off('click.component-links auxclick.component-links', n)
          .on('click.component-links auxclick.component-links', n, (e) => {
            const i = e.currentTarget,
              s = $(i);
            if (t(e)) return !0;
            if (
              !flexbe_cli.run.is_preview &&
              !i.closest('.editor-focus, .b_block--global, .component-menu-dropdown')
            )
              return e.preventDefault(), !0;
            const n =
              s.closest('[data-action]').data('action') || ('A' === i.tagName ? 'link' : 'none');
            return (
              this.reachGoals(e),
              ['link', 'app_link', 'mail', 'anchor'].includes(n)
                ? this.actionLink(e)
                : 'file' === n
                ? this.actionFile()
                : 'popup' === n
                ? this.actionPopup(e)
                : 'button' === n
                ? this.actionButton(e)
                : 'modal' === n
                ? this.actionModal(e)
                : 'cart' === n
                ? this.actionCart(e)
                : 'quiz' === n
                ? this.actionQuiz(e)
                : 'close' === n
                ? this.actionClose(e)
                : 'code' === n
                ? this.actionCode(e)
                : void 0
            );
          });
    }
    actionCode(t) {
      if (flexbe_cli.is_admin && !flexbe_cli.run.is_preview) return;
      const e = t.currentTarget;
      return new (0, async function () {}.constructor)('event', e.getAttribute('data-code') || '')(
        t.originalEvent,
      );
    }
    actionPopup(t) {
      return t.preventDefault(), !1;
    }
    actionFile() {
      return !0;
    }
    actionLink(t) {
      const e = t.currentTarget,
        i = e.hasAttribute('href'),
        s = i ? e.getAttribute('href') : '',
        n = 2 === t.button || 3 === t.which,
        o = 1 === t.button || 2 === t.which,
        a = t.metaKey || t.ctrlKey || o || '_blank' === e.getAttribute('target') || !1,
        l = e.hasAttribute('download');
      n || l || (a && !o)
        ? flexbe_cli.is_admin && i && '' === s && (e.href = './')
        : (t.preventDefault(),
          clearTimeout(r),
          (r = setTimeout(() => {
            flexbe_cli.helpers.links.gotoLink(s, { blank: a });
          }, 15)));
    }
    actionButton(t) {
      t.stopPropagation();
      const e = $(t.currentTarget)
        .closest('.content-zone, [data-item-id]')
        .first()
        .find('.component-button')
        .not('.form-field-submit')
        .find(n);
      e[0] && e[0].click();
    }
    actionModal(t) {
      const e = $(t.currentTarget),
        i = this.getProductInfo(e[0]);
      let s = e.attr('data-modal-id');
      if (!flexbe_cli.modal.find(s)) {
        s =
          flexbe_cli.modal.$list
            .find(`._anchor[name="${s}"]`)
            .closest('.m_modal')
            .attr('data-id') || s;
      }
      if (/^(form|done)$/.test(s) && !flexbe_cli.modal.find(s)) {
        s = `${e.closest('[data-id]').attr('data-id').split('_')[0]}_${s}`;
      }
      flexbe_cli.events.trigger('ui_mobilemenu_close'),
        flexbe_cli.events.trigger('ui_modal_open', { id: s, data: { items: i ? [i] : [] } });
    }
    actionCart(t) {
      const e = $(t.currentTarget),
        i = $(t.currentTarget).closest(o),
        s = e.closest('.m_modal').length,
        n = e.closest('.disabled').length,
        a = this.getProductInfo(e[0]);
      a &&
        !n &&
        (i.addClass('animate-add-to-cart'),
        setTimeout(
          () => {
            i.removeClass('animate-add-to-cart'),
              s &&
                (flexbe_cli.events.trigger('ui_modal_close'),
                flexbe_cli.ecommerce.cartStore.dispatch('addItem', a));
          },
          s ? 450 : 1600,
        ),
        s || flexbe_cli.ecommerce.cartStore.dispatch('addItem', a));
    }
    actionQuiz(t) {
      const e = $(t.currentTarget).closest('[data-id]').attr('data-id');
      flexbe_cli.events.trigger('quiz_command', { command: 'start', id: e });
    }
    actionClose(t) {
      t.preventDefault(), flexbe_cli.events.trigger('ui_modal_close');
    }
    reachGoals(t) {
      const e = $(t.currentTarget),
        i = e.attr('data-action'),
        s = 'modal' === i ? e.attr('data-modal-id') : e.attr('href'),
        n = flexbe_cli.stat.getGoal(i, s),
        o = e.attr('data-goal'),
        a = e.attr('data-html-goal');
      flexbe_cli.stat.reachGoals({ mainGoal: n, goal: o, htmlGoal: a });
    }
    getProductInfo(t) {
      let e = flexbe_cli.ecommerce.getProductInfo(t) || {};
      return (e && e.title && '-' !== e.title && null !== e.price) || (e = null), e;
    }
  }
  const h = '--elementHeightPx',
    d = new ResizeObserver((t) => {
      t.forEach(({ target: t, contentRect: e }) => {
        const i = t && t.offsetParent;
        if (!i) return;
        const s = getComputedStyle(i),
          n = `${e.height}px`;
        s.getPropertyValue(h) !== n &&
          requestAnimationFrame(() => {
            i.style.setProperty(h, n);
          });
      });
    });
  const c = Math.min(2, window.devicePixelRatio),
    u = new ResizeObserver((t) => {
      t.filter((t) => t.contentRect.width || t.contentRect.height).forEach((t) =>
        (function (t) {
          const e = t.dataset.inlineSrc || t.dataset.lazySrc,
            i = t.dataset.inlineBg || t.dataset.lazyBg,
            s = e || i,
            n = [...t.children].filter((t) => 'svg' === t.tagName);
          if (n.length) {
            const t = n[0].querySelector('use'),
              e = t && (t.dataset.inlineHref || t.dataset.lazyHref);
            return (
              e &&
                (function (t, e) {
                  t.setAttribute('href', e),
                    t.removeAttribute('data-inline-href'),
                    t.removeAttribute('data-lazy-href');
                })(t, e),
              !0
            );
          }
          if (!s) return !0;
          if (!/%optimalWidth%/gi.test(s)) return m(t, s, !!i), u.unobserve(t), !0;
          const o = t.parentElement,
            a = 'fixed' === o.dataset.imgAttachment,
            r = t.dataset.imgProportion || 100,
            l = a ? window.innerWidth : o.offsetWidth,
            h = a ? window.innerHeight : o.offsetHeight;
          if (!l && !h) return !1;
          const d = r / 100;
          let p;
          p = (e ? d : h / l) <= d ? l : h / d;
          return (
            (p = Math.max(150, Math.min(p * c, 2560))),
            (p = Math.round(p)),
            m(t, s.replace(/%optimalWidth%/gi, `${p}`), !!i),
            u.unobserve(t),
            !0
          );
        })(t.target),
      );
    });
  function p(t) {
    t.length && t.forEach((t) => u.observe(t));
  }
  function m(t, e, i) {
    if (i) {
      const i = t.parentElement.querySelector('img'),
        s = getComputedStyle(t).getPropertyValue('background-image');
      (t.style.backgroundImage = [`url(${e})`, s].filter((t) => t).join(',')),
        i && i.setAttribute('src', e);
    } else t.setAttribute('src', e);
    t.removeAttribute('data-inline-src'),
      t.removeAttribute('data-inline-bg'),
      t.removeAttribute('data-lazy-src'),
      t.removeAttribute('data-lazy-bg');
  }
  let g,
    f = { x: 0, y: 0 };
  const v = '.lightbox-container, .b_block, .m_modal, .w_widget',
    y = '[data-lightbox]';
  function w(t) {
    const e = window.history.state;
    (flexbe_cli.lockPopstate = !0),
      e && e.lg
        ? window.history.replaceState({ lg: t }, null, `#image-${t.index + 1}`)
        : window.history.pushState({ lg: t }, null, `#image-${t.index + 1}`),
      (flexbe_cli.lockPopstate = !1);
  }
  let b;
  class S {
    static create() {
      return b || ((b = new S()), b);
    }
    constructor() {
      this.bindEvents();
    }
    bindEvents() {
      const t = (t) => {
        var e;
        return null == (e = $(t).find('.swiper')[0]) ? void 0 : e.swiper;
      };
      $('body').on('click', 'a[href^="#prev"], a[href^="#next"]', (e) => {
        let i;
        const s = String(e.currentTarget.href).match('.*#(.*)')[1],
          [n, o] = s.split(':');
        if (o) i = t(`[data-id="${o}"]`);
        else {
          $(e.currentTarget)
            .parents('[data-id]')
            .toArray()
            .some((e) => ((i = t(e)), i));
        }
        i &&
          ('prev' === n ? i.slidePrev() : i.slideNext(), e.preventDefault(), e.stopPropagation());
      });
    }
  }
  const x = new Map(),
    C = (t, e, i) => Math.max(t, Math.min(e, i)),
    A = (t, [e, i]) => Math.min(e, i) <= t && Math.max(e, i) >= t,
    _ = (t, e = document, i) =>
      t
        ? 'string' == typeof t
          ? /%closest%/.test(t) && i
            ? [i.closest(t.replace(/%closest%/, ''))]
            : [...e.querySelectorAll(t)]
          : [t]
        : [],
    I = (t) => +String(t).replace(/[^.\-\d]/g, ''),
    E = (t, e) => {
      const i = I(t);
      return e ? (i / e) * 100 : i;
    },
    P = (t, e) => {
      const i = I(t);
      return e ? (e * i) / 100 : i;
    },
    F = (t) => ['%', 'vw', 'vh'].includes(t.toLowerCase()),
    k = (t, e, i) => {
      t = String(t);
      const s = I(t);
      return 'number' == typeof e && t.includes(i) ? P(s, e) : s;
    },
    R = (t, e, i) => t * (1 - i) + e * i,
    T = (t = 6, { exclude: e = [], prefix: i = '', suffix: s = '', radix: n = 10 } = {}) => {
      let o = '';
      for (let e = 0; e < t; e++) {
        const t = ((a = 0 === e ? 1 : 0), (r = n - 1), Math.floor(Math.random() * (r - a + 1) + a));
        o += t.toString(n).toUpperCase();
      }
      var a, r;
      return (
        (o = i + o + s),
        e.find((t) => t == o) ? T(t, { exclude: e, prefix: i, suffix: s, radix: n }) : o
      );
    },
    D = (t) => {
      var e, i, s;
      const n = null == (e = t.style) ? void 0 : e.position;
      n && t.style.removeProperty('position');
      const o = null == (i = t.style) ? void 0 : i.top;
      o && t.style.removeProperty('top');
      const a = null == (s = t.style) ? void 0 : s.left;
      a && t.style.removeProperty('left');
      let r = t,
        l = 0,
        h = 0;
      const d = r.offsetWidth,
        c = r.offsetHeight;
      do {
        (l += r.offsetLeft), (h += r.offsetTop), (r = r.offsetParent);
      } while (r);
      return (
        (t.style.position = n),
        (t.style.top = o),
        (t.style.left = a),
        { top: h, left: l, width: d, height: c }
      );
    },
    z = (t) => !!t.offsetParent || !t.parentElement;
  class M {
    get unitsValues() {
      return {};
    }
    get endFrame() {
      return this.iterationsMap[this.iterationsMap.length - 1].frames[1];
    }
    static async loadLibs() {
      return new Promise((t) => {
        (async (t, e) => {
          const i = t.map(async (t) => {
              if (!x.has(t)) {
                const e = new Promise((e, i) => {
                  $.ajax({ url: t, dataType: 'script', cache: !0 }).done(e).fail(i);
                });
                x.set(t, e);
              }
              return x.get(t);
            }),
            s = await Promise.all(i);
          'function' == typeof e && e(s);
        })(this.libs, () => {
          (this.libsLoaded = !0), t(!0);
        });
      });
    }
    constructor(t) {
      var e;
      (this.defaultAnimationParams = { playMode: 'normal' }),
        (this.animationParams = void 0),
        (this.iterationsMap = []),
        (this.pureIterationsMap = []),
        (this.progress = 0),
        (this.element = void 0),
        (this.frames = []),
        (this.onChange = void 0),
        (this.initialAnimationFrame = void 0),
        (this.animationParams = { ...this.defaultAnimationParams, ...t.animationParams }),
        (this.element = t.element),
        (this.onChange = null != (e = t.onChange) ? e : () => {}),
        (this.initialAnimationFrame = t.initialAnimationFrame);
    }
    static create(t) {
      return new this(t);
    }
    buildIterationsMap() {
      const { playMode: t, loop: e } = this.animationParams;
      let [i, s] = this.frames;
      const n = 'bounce' === t,
        o = +e * (n ? 2 : 1),
        a = new Array(o).fill(null);
      a.reduce((t, e, r) => {
        const l = r + 1,
          h = (l / o) * 100,
          d = l % 2 == 0 && n ? [s, i] : [i, s];
        return (
          (a[r] = { iterationIndex: r, progressRange: [t, h], frames: d.filter((t) => null != t) }),
          h
        );
      }, 0),
        (this.pureIterationsMap = a),
        (this.iterationsMap = this.convertInteractionsToMainUnit(a));
    }
    buildIteractions([t, e]) {
      const i = t > e;
      let s = [];
      const n = C(0, Math.min(t, e), 100),
        o = C(0, Math.max(t, e), 100);
      if (0 === n && 100 === o) s = this.iterationsMap;
      else {
        const t = this.percentToIteration(n),
          e = this.percentToIteration(o),
          i = t.iterationIndex,
          a = e.iterationIndex;
        s = this.iterationsMap
          .map((s, r) =>
            r < i || r > a
              ? null
              : r > i && r < a
              ? s
              : r === i
              ? {
                  iterationIndex: r,
                  progressRange: [n, s.progressRange[1]],
                  frames: [t.frame, s.frames[1]],
                }
              : r === a
              ? {
                  iterationIndex: r,
                  progressRange: [s.progressRange[0], o],
                  frames: [s.frames[0], e.frame],
                }
              : null,
          )
          .filter((t) => t);
      }
      if (i) {
        const t = JSON.parse(JSON.stringify(s));
        return (
          t.reverse(),
          t.forEach((t) => {
            Object.values(t).forEach((t) => {
              Array.isArray(t) && t.reverse();
            });
          }),
          t
        );
      }
      return this.convertInteractionsToMainUnit(s);
    }
    percentToIteration(t, e = this.iterationsMap) {
      var i;
      if (0 === (t = C(0, t, 100)))
        return {
          iteration: e[0],
          iterationIndex: e[0].iterationIndex,
          progressInIteration: 0,
          frame: e[0].frames[0],
        };
      if (100 === t) {
        const t = e.length - 1;
        return {
          iteration: e[t],
          iterationIndex: e[t].iterationIndex,
          progressInIteration: 100,
          frame: e[t].frames[1],
        };
      }
      const s = null != (i = e.findIndex((e) => A(t, e.progressRange))) ? i : 0;
      if (-1 === s)
        throw new Error(
          `It is impossible to determine iteration for ${t}% of progress. Probably the iterationsMap was builded incorrectly.`,
        );
      const n = e[s];
      let o = 0;
      const { frames: a, progressRange: r } = n;
      let l = a[0];
      if (a && r)
        if (1 === a.length) l = a[0];
        else if ('object' == typeof a[0])
          (l = {}),
            Object.keys(a[0]).forEach((e) => {
              let i = a[0][e],
                s = a[1][e];
              const n = Math.abs(r[1] - r[0]);
              o = ((t - r[0]) / n) * 100;
              let h = this.percentToFrame({
                frameField: e,
                fromFrame: i,
                toFrame: s,
                progressInIteration: o,
              });
              if (null != h) l[e] = h;
              else {
                const t = Object.keys(this.unitsValues[e] || {}),
                  n = t.find((t) => String(i).includes(t)),
                  a = t.find((t) => String(s).includes(t)),
                  r = a || n;
                (i = n ? k(i, this.unitsValues[e][n], n) : +String(i).replace(/[^.\-\d]/g, '')),
                  (s = n ? k(s, this.unitsValues[e][a], a) : +String(s).replace(/[^.\-\d]/g, ''));
                const d = Math.abs(s - i),
                  c = (o * d) / 100;
                (h = i < s ? i + c : i - c), (l[e] = r ? `${E(h, this.unitsValues[e][r])}${r}` : h);
              }
            });
        else {
          const e = Math.abs(a[1] - a[0]),
            i = Math.abs(r[1] - r[0]);
          o = ((t - r[0]) / i) * 100;
          let s = this.percentToFrame({
            frameField: null,
            fromFrame: a[0],
            toFrame: a[0],
            progressInIteration: o,
          });
          if (null != s) l = s;
          else {
            const t = (o * e) / 100;
            l = a[0] < a[1] ? a[0] + t : a[0] - t;
          }
        }
      return { iteration: n, iterationIndex: s, progressInIteration: o, frame: l };
    }
    convertFrameToUnit(t, e, i) {
      const s = Object.keys(this.unitsValues[e] || {}),
        n = I(t);
      if (s.length) {
        const o = s.find((e) => String(t).includes(e)),
          a = this.unitsValues[e][o],
          r = this.unitsValues[e][i];
        if (a && r) {
          const t = ((n * a) / 100 / r) * 100;
          return { value: `${t}${i}`, cleanValue: t };
        }
      }
      return { value: t, cleanValue: n };
    }
    convertInteractionsToMainUnit(t) {
      return t.map((t) => {
        const e = t.frames[0],
          i = t.frames[1];
        return (
          'object' == typeof i &&
            Object.keys(i).map((t) => {
              const s = Object.keys(this.unitsValues[t] || {}),
                n =
                  s.length && String(i[t]).includes('px')
                    ? 'px'
                    : s.find((e) => String(i[t]).includes(e));
              if (n) {
                const { value: i } = this.convertFrameToUnit(e[t], t, n);
                e[t] = i;
              }
            }),
          { ...t, frames: [e, i] }
        );
      });
    }
    init() {}
    activateAnimation({ fromSnapshot: t }) {}
    destroy() {}
    play(t) {}
    seek(t, e = 0) {}
    stop() {}
    percentToFrame(t) {}
  }
  (M.libsLoaded = !1), (M.libs = []);
  class B extends M {}
  B.libs = ['/_s/lib/lottie-player/lottie-player.min.js'];
  const L = 180 / Math.PI;
  function V(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  }
  function O(t, e) {
    return [t[0] / e, t[1] / e, t[2] / e];
  }
  function H(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
  }
  function W(t, e, i, s) {
    return [t[0] * i + e[0] * s, t[1] * i + e[1] * s, t[2] * i + e[2] * s];
  }
  function q(t) {
    const e = t.toString().split('e');
    return 0.001 * Math.round(e[0] + 'e' + (e[1] ? +e[1] - 3 : 3));
  }
  function N(t) {
    const e = new Array(4),
      i = new Array(3),
      s = new Array(3),
      n = new Array(3);
    for (let e = 0; e < 3; e++) n[e] = t[3][e];
    const o = new Array(3);
    for (let e = 0; e < 3; e++) o[e] = t[e].slice(0, 3);
    (i[0] = V(o[0])),
      (o[0] = O(o[0], i[0])),
      (s[0] = H(o[0], o[1])),
      (o[1] = W(o[1], o[0], 1, -s[0])),
      (i[1] = V(o[1])),
      (o[1] = O(o[1], i[1])),
      (s[0] /= i[1]),
      (s[1] = H(o[0], o[2])),
      (o[2] = W(o[2], o[0], 1, -s[1])),
      (s[2] = H(o[1], o[2])),
      (o[2] = W(o[2], o[1], 1, -s[2])),
      (i[2] = V(o[2])),
      (o[2] = O(o[2], i[2])),
      (s[1] /= i[2]),
      (s[2] /= i[2]);
    const a =
      ((r = o[1]),
      (l = o[2]),
      [r[1] * l[2] - r[2] * l[1], r[2] * l[0] - r[0] * l[2], r[0] * l[1] - r[1] * l[0]]);
    var r, l;
    if (H(o[0], a) < 0)
      for (let t = 0; t < 3; t++) (i[t] *= -1), (o[t][0] *= -1), (o[t][1] *= -1), (o[t][2] *= -1);
    let h;
    return (
      (e[0] = 0.5 * Math.sqrt(Math.max(1 + o[0][0] - o[1][1] - o[2][2], 0))),
      (e[1] = 0.5 * Math.sqrt(Math.max(1 - o[0][0] + o[1][1] - o[2][2], 0))),
      (e[2] = 0.5 * Math.sqrt(Math.max(1 - o[0][0] - o[1][1] + o[2][2], 0))),
      (e[3] = 0.5 * Math.sqrt(Math.max(1 + o[0][0] + o[1][1] + o[2][2], 0))),
      o[2][1] > o[1][2] && (e[0] = -e[0]),
      o[0][2] > o[2][0] && (e[1] = -e[1]),
      o[1][0] > o[0][1] && (e[2] = -e[2]),
      (h =
        e[0] < 0.001 && e[0] >= 0 && e[1] < 0.001 && e[1] >= 0
          ? [0, 0, q((180 * Math.atan2(o[0][1], o[0][0])) / Math.PI)]
          : (function (t) {
              const [e, i, s, n] = t,
                o = e * e,
                a = i * i,
                r = s * s,
                l = e * i + s * n,
                h = n * n + o + a + r;
              return l > 0.49999 * h
                ? [0, 2 * Math.atan2(e, n) * L, 90]
                : l < -0.49999 * h
                ? [0, -2 * Math.atan2(e, n) * L, -90]
                : [
                    q(Math.atan2(2 * e * n - 2 * i * s, 1 - 2 * o - 2 * r) * L),
                    q(Math.atan2(2 * i * n - 2 * e * s, 1 - 2 * a - 2 * r) * L),
                    q(Math.asin(2 * e * i + 2 * s * n) * L),
                  ];
            })(e)),
      {
        rotateX: h[0],
        rotateY: h[1],
        rotateZ: h[2],
        scaleX: q(i[0]),
        scaleY: q(i[1]),
        scaleZ: q(i[2]),
        translateX: n[0],
        translateY: n[1],
        translateZ: n[2],
        skewXY: q(s[0]) * L,
        skewXZ: q(s[1]) * L,
        skewYZ: q(s[2] * L),
      }
    );
  }
  function Y(t) {
    if (!t) return null;
    const e = getComputedStyle(t),
      i = new DOMMatrix(e.getPropertyValue('transform')),
      s = new Array(4);
    for (let t = 1; t < 5; t++) {
      const e = (s[t - 1] = new Array(4));
      for (let s = 1; s < 5; s++) e[s - 1] = i[`m${t}${s}`];
    }
    return N(s);
  }
  class j extends M {
    get valueForProgressFartor() {
      return this.animationParams.duration * this.iterationsMap.length;
    }
    get unitsValues() {
      return {
        translateX: {
          px: 100,
          '%': this.element.offsetWidth,
          vh: this.element.ownerDocument.documentElement.clientHeight,
          vw: this.element.ownerDocument.documentElement.clientWidth,
        },
        translateY: {
          px: 100,
          '%': this.element.offsetHeight,
          vh: this.element.ownerDocument.documentElement.clientHeight,
          vw: this.element.ownerDocument.documentElement.clientWidth,
        },
      };
    }
    constructor(t) {
      super(t),
        (this.initialDomMatrix = void 0),
        (this._delayTimeout = void 0),
        (this.initialDomMatrix = t.initialDomMatrix),
        (this.animationParams = this.normalizeAnimationParams(this.animationParams));
      const e = this.getFrame(this.initialAnimationFrame);
      (this.frames = [e, this.getFrame()]), this.buildIterationsMap();
    }
    async activateAnimation({ fromSnapshot: t } = { fromSnapshot: !1 }) {
      if (t) {
        const t = this.getSnapshotFrame(),
          e = this.getFrame();
        (this.frames = [t, e]), this.buildIterationsMap();
      }
    }
    async play({
      resetProgress: t,
      reverse: e,
      animationParams: i,
      onStart: s,
      onComplete: n,
      onLoopStart: o,
      onLoopComplete: a,
    }) {
      this.stop();
      const { duration: r, delay: l, easing: h, loop: d } = { ...this.animationParams, ...i },
        c = t ? (e ? 100 : 0) : this.progress,
        u = this.buildIteractions(e ? [c, 0] : [c, 100]);
      let p = 0;
      const m = !0 === d,
        g = 1e3 * r,
        f = 1e3 * (l || 0);
      for (
        f &&
          (await new Promise((t) => {
            this._delayTimeout = setTimeout(t, f);
          })),
          s(),
          o();
        ;

      ) {
        if (p >= u.length || p < 0) {
          if (!m) break;
          p = 0;
        }
        const t = 'bounce' === this.animationParams.playMode && (p + 1) % 2 == 0;
        t || o();
        const e = u[p],
          {
            translateX: i,
            translateY: s,
            translateZ: n,
            scaleX: r,
            scaleY: l,
            skewX: d,
            skewY: c,
            clipPath: f,
            ...v
          } = this.buildAnimeParams(e.frames);
        this.frames[0].clipPath || this.frames[1].clipPath
          ? (v.clipPath = f.map((t) => t || 'inset(0% 0% 0% 0%)'))
          : this.element.style.removeProperty('clip-path'),
          await new Promise((t) => {
            anime({
              targets: this.element,
              translateX: i,
              translateY: s,
              translateZ: n,
              ...v,
              scaleX: [this.normalizeScale(r[0]), this.normalizeScale(r[1])],
              scaleY: [this.normalizeScale(l[0]), this.normalizeScale(l[1])],
              skewX: d,
              skewY: c,
              duration: g,
              easing: h,
              update: (t) => {
                (this.progress = R(e.progressRange[0], e.progressRange[1], t.progress / 100)),
                  this.onChange();
              },
              complete: () => {
                t(!0);
              },
            });
          }),
          (p += 1),
          t || a();
      }
      n();
    }
    seek(t, e = 0) {
      t = C(0, t, 100);
      const { frame: i } = this.percentToIteration(t);
      let {
        translateX: s,
        translateY: n,
        translateZ: o,
        scaleX: a,
        scaleY: r,
        skewX: l,
        skewY: h,
        clipPath: d,
        ...c
      } = i;
      if (e) {
        n = `${(
          ((t, e, i, s) => {
            let n = I(t);
            if (isNaN(n)) return 0;
            const o = F(e),
              a = F(i);
            if (o) {
              const t = s[e];
              n = P(n, t);
            }
            if (a) {
              const t = s[i];
              n = E(n, t);
            }
            return n;
          })(
            n,
            ((t, e = '') => {
              const i = String(t)
                .trim()
                .match(/\d+(\D+)$/);
              return i && i[1] ? i[1].trim() : e;
            })(n),
            'px',
            this.unitsValues.translateY,
          ) + e
        ).toFixed(3)}px`;
      }
      this.frames[0].clipPath || this.frames[1].clipPath
        ? (c.clipPath = null != d ? d : 'inset(0% 0% 0% 0%)')
        : this.element.style.removeProperty('clip-path'),
        this.element.style.setProperty(
          'transform',
          `\n            translateX(${s})\n            translateY(${n})\n            rotateX(${
            c.rotateX
          }deg)\n            rotateY(${c.rotateY}deg)\n            rotateZ(${
            c.rotateZ
          }deg)\n            scaleX(${this.normalizeScale(
            a,
          )})\n            scaleY(${this.normalizeScale(r)})\n            scaleZ(${
            c.scaleZ
          })\n            skewX(${l}deg)\n            skewY(${h}deg)\n        `,
        ),
        this.element.style.setProperty('opacity', `${c.opacity}`),
        this.element.style.setProperty('clip-path', `${c.clipPath}`),
        this.element.style.setProperty('transform-origin', `${c.transformOrigin}`),
        (this.progress = t),
        this.onChange();
    }
    stop() {
      anime.remove(this.element), clearTimeout(this._delayTimeout);
    }
    buildAnimeParams(t) {
      const e = {};
      return (
        Object.keys(t[0]).forEach((i) => {
          e[i] = [t[0][i], t[1][i]];
        }),
        e
      );
    }
    getSnapshotFrame() {
      const t = getComputedStyle(this.element),
        e = +t.getPropertyValue('opacity'),
        i = t.getPropertyValue('clip-path'),
        s = this.element.style.getPropertyValue('transform-origin'),
        {
          rotateZ: n,
          translateX: o,
          translateY: a,
          scaleX: r,
          scaleY: l,
          skewXY: h,
          skewYZ: d,
        } = Y(this.element);
      return this.getFrame({
        opacity: e,
        rotateZ: n,
        translateX: o,
        translateY: a,
        scaleX: r,
        scaleY: l,
        skewX: h,
        skewY: d,
        clipPath: i,
        transformOrigin: s,
      });
    }
    getFrame(t = null) {
      var e, i, s, n, o;
      const {
          opacity: a,
          rotateZ: r,
          rotate: l,
          scale: h,
          scaleX: d,
          scaleY: c,
          skew: u,
          skewX: p,
          skewY: m,
          translateX: g,
          translateY: f,
          clipPath: v,
          transformOrigin: y,
        } = null != t ? t : this.animationParams,
        w = ((t) => {
          let e = { type: 'unknown', value: t, sourceValue: t, clipPathValues: [], unitValues: [] };
          if (/inset/.test(t)) {
            let i = t.match(/[+-]?([0-9]*[.])?[0-9]+/g).map((t) => +t);
            i.length && 1 === i.length && (i = new Array(4).fill(i[0]));
            const s = i.map((t) => `${t}%`);
            e = {
              type: 'inset',
              value: `inset(${s.join(' ')})`,
              sourceValue: t,
              unitValues: s,
              clipPathValues: i,
            };
          }
          return e;
        })(v);
      let b = null != (e = null != l ? l : r) ? e : 0;
      return (
        'auto' === b && (b = this.initialDomMatrix.rotateZ || 0),
        {
          opacity: null != a ? a : 1,
          rotateX: 0,
          rotateY: 0,
          rotateZ: +String(b).replace(/[^-.\d]/g, ''),
          scaleX: null != (i = null != h ? h : d) ? i : 1,
          scaleY: null != (s = null != h ? h : c) ? s : 1,
          skewX: +String(null != (n = null != u ? u : p) ? n : 0).replace(/[^-.\d]/g, ''),
          skewY: +String(null != (o = null != u ? u : m) ? o : 0).replace(/[^-.\d]/g, ''),
          scaleZ: 1,
          translateX: null != g ? g : '0px',
          translateY: null != f ? f : '0px',
          translateZ: '0px',
          clipPath: w.value,
          transformOrigin: y || '50% 50%',
        }
      );
    }
    normalizeEasing(t) {
      return t
        ? t.replace('cubic-bezier', 'cubicBezier')
        : 'cubicBezier(0.455, 0.03, 0.515, 0.955)';
    }
    normalizeScale(t) {
      return Math.max(t, 1e-6);
    }
    normalizeAnimationParams(t) {
      return {
        loop: 1,
        playMode: 'normal',
        opacity: 1,
        rotate: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skewX: 0,
        skewY: 0,
        duration: 0.3,
        translateX: '0px',
        translateY: '0px',
        translateZ: '0px',
        clipPath: null,
        transformOrigin: '50% 50%',
        ...t,
        easing: this.normalizeEasing(t.easing),
      };
    }
    percentToFrame({ progressInIteration: t, fromFrame: e, toFrame: i, frameField: s }) {
      if ('clipPath' === s) {
        i = i && 'none' !== i ? i : 'inset(0% 0% 0% 0%)';
        const s = (e = e && 'none' !== e ? e : 'inset(0% 0% 0% 0%)')
            .match(/[+-]?([0-9]*[.])?[0-9]+/g)
            .map((t) => +t),
          n = i.match(/[+-]?([0-9]*[.])?[0-9]+/g).map((t) => +t);
        return `inset(${s.map((e, i) => `${R(s[i], n[i], t / 100)}%`).join(' ')})`;
      }
      if ('transformOrigin' === s) {
        const s = e.match(/[+-]?([0-9]*[.])?[0-9]+/g).map((t) => +t),
          n = i.match(/[+-]?([0-9]*[.])?[0-9]+/g).map((t) => +t);
        return s.map((e, i) => `${R(s[i], n[i], t / 100)}%`).join(' ');
      }
      return null;
    }
    destroy() {
      this.element.style.removeProperty('opacity'),
        this.element.style.removeProperty('clip-path'),
        this.element.style.removeProperty('transform'),
        this.element.style.removeProperty('transform-origin');
    }
  }
  j.libs = ['/_s/lib/anime/anime.min.js'];
  class X {
    static get activeInteractions() {
      return this.list.filter((t) => !t.hasInteractivityState('isSuspended'));
    }
    static expectIntersection(t) {
      this.checkIntersection(t), this.pendingIntersections.push(t);
    }
    static checkIntersection(t) {
      if (null == t.intersectionLinePosition || !t.hasInteractivityState('scrollContainerInShow'))
        return;
      const { triggerElementOffsetBound: e, scrollContainer: i, intersectionLinePosition: s } = t,
        n = t.hasInteractivityState('wasIntersection');
      !n && s >= e.top - i.scrollTop
        ? (t.setInteractivityState({ wasIntersection: !0 }), t.triggerIntersection('in'))
        : n &&
          s < e.top - i.scrollTop &&
          (t.setInteractivityState({ wasIntersection: !1 }), t.triggerIntersection('out'));
    }
    static async init() {
      if (this.inited) return;
      (this.inited = !0),
        document.addEventListener('documentresized', this.resizeHandler),
        window.addEventListener('resize', this.resizeHandler);
      const t = document.createElement('style');
      (t.innerHTML =
        '.interactivity-pointerless, .interactivity-pointerless * { pointer-events: none !important; user-select: none !important; } .interactivity-cursor-pointer { cursor: pointer !important; }'),
        document.head.appendChild(t),
        (this.intersectionObserver = new IntersectionObserver(
          (t) => {
            t.forEach((t) => {
              const e = z(t.target);
              this.getInstances({ scrollContainer: t.target }).forEach(async (t) => {
                if (
                  !(
                    'none' === t.interactionType ||
                    (t.hasInteractivityState('scrollContainerInShow') && e)
                  )
                ) {
                  if ((t.setInteractivityState({ scrollContainerInShow: e }), e))
                    return (
                      await new Promise((t) => setTimeout(t, 120)),
                      t.updateOffsetBound(),
                      t.updateInsectionLinePosition(),
                      await t.createSteps(),
                      t.updateActivityDistanceRanges(),
                      t.startAnimation(!0),
                      await new Promise((t) => setTimeout(t, 20)),
                      this.checkIntersection(t)
                    );
                  t.setInteractivityState({ wasIntersection: !1 }), t.stopAnimation();
                }
              });
            });
          },
          { rootMargin: '0px', threshold: 1 },
        ));
    }
    static listenScroll(t) {
      let e = t;
      this.scrollContainers.includes(t) ||
        (this.scrollContainers.push(t),
        'HTML' === e.nodeName && (e = e.ownerDocument),
        e.addEventListener('scroll', () => {
          this.pendingIntersections.forEach((e) => {
            e.scrollContainer === t && this.checkIntersection(e);
          }),
            this.activeInteractions.forEach((e) => {
              e.scrollContainer === t &&
                'scroll' === e.interactionType &&
                e.scrollInteractionHandler();
            });
        }),
        this.intersectionObserver.observe(t));
    }
    static async create(t, e = {}) {
      this.inited || this.init();
      const i = new Z(t);
      return await i.init(e), this.list.push(i), i;
    }
    static remove({ interaction: t, id: e }) {
      var i, s, n;
      return (
        !(!t && !e) &&
        ((e = null != (i = e) ? i : t.id),
        (t = null != (s = t) ? s : this.getInstances({ id: e })[0]).stopAnimation(),
        t.removePointerLess(),
        t.element.style.removeProperty('position'),
        t.element.style.removeProperty('top'),
        t.element.style.removeProperty('left'),
        t.element.style.removeProperty('width'),
        t.element.style.removeProperty('height'),
        null == (n = t.fixedReplacementElement) || n.remove(),
        t.steps.forEach((t) => t.animation.destroy()),
        this.list.splice(
          this.list.findIndex((t) => t.id === e),
          1,
        ),
        !0)
      );
    }
    static getInstances({ id: t, element: e, scrollContainer: i }) {
      return t
        ? this.list.filter((e) => e.id === t) || []
        : e
        ? this.list.filter((t) => t.element === e) || []
        : (i && this.list.filter((t) => t.scrollContainer === i)) || [];
    }
  }
  (X.inited = !1),
    (X._resizeTimeout = null),
    (X.scrollContainers = []),
    (X.list = []),
    (X.pendingIntersections = []),
    (X.intersectionObserver = void 0),
    (X.resizeHandler = ((t, e) => {
      let i,
        s,
        n = !1;
      return function o() {
        if (n) return (i = arguments), void (s = this);
        t.apply(this, arguments),
          (n = !0),
          setTimeout(function () {
            (n = !1), i && (o.apply(s, i), (i = s = null));
          }, e);
      };
    })(() => {
      clearTimeout(X._resizeTimeout),
        (X._resizeTimeout = setTimeout(() => {
          X.activeInteractions.forEach((t) => {
            t.updateOffsetBound(),
              t.interactionSettings.intersectionLine &&
                (t.updateInsectionLinePosition(),
                'scroll' === t.interactionType && t.scrollInteractionHandler());
          });
        }, 100));
    }, 50));
  const G = { lottie: B, css: j };
  let U = null;
  class Z extends X {
    get skewIsNotAvailable() {
      return (
        'css' === this.animationType &&
        'scroll' === this.interactionType &&
        'play' === this.interactionSettings.seekMode &&
        'reverse' === this.interactionSettings.retriggerBehavior
      );
    }
    get isSeekInteractionType() {
      return ['cursor', 'scroll'].includes(this.interactionType);
    }
    get progressMap() {
      return this.steps.map((t) => {
        var e;
        return (null == t || null == (e = t.progressRange) ? void 0 : e[1]) || 0;
      });
    }
    get allowFixed() {
      return 'scroll' === this.interactionType && 'seek' === this.interactionSettings.seekMode;
    }
    constructor(t) {
      super(),
        (this.id = void 0),
        (this.options = void 0),
        (this.element = void 0),
        (this.fixedReplacementElement = void 0),
        (this.elementOffsetBound = void 0),
        (this.triggerElementOffsetBound = void 0),
        (this.scrollContainer = void 0),
        (this.interactionType = void 0),
        (this.interactionSettings = void 0),
        (this.animationType = void 0),
        (this.steps = []),
        (this.animationModule = void 0),
        (this.activeStep = void 0),
        (this.activeStepIndex = void 0),
        (this.state = {
          inPlay: !1,
          inSeek: !1,
          isInited: !1,
          inFixed: !1,
          isCompleted: !1,
          isSuspended: !1,
          inReverse: !1,
          scrollContainerInShow: !1,
          wasIntersection: !1,
          preventCursorPointer: !1,
        }),
        (this.eventsAbortController = void 0),
        (this.intersectionLinePosition = void 0),
        (this.initialDomMatrix = void 0),
        (this.progress = 0),
        (this.normalizeOptions = void 0),
        (this.normalizeOptions = t.normalizeOptions || ((t) => t)),
        (this.options = this.normalizeOptions(t) || t),
        (this.id = this.options.id || T(6)),
        this.updateInteractivityFields();
    }
    suspend() {
      this.hasInteractivityState('isSuspended') ||
        (this.stopAnimation(), this.setInteractivityState({ isSuspended: !0 }));
    }
    go() {
      this.hasInteractivityState('isSuspended') &&
        (this.updateOptions(this.options),
        this.setInteractivityState({ isSuspended: !1 }),
        this.startAnimation());
    }
    updateInteractivityFields() {
      (this.element = _(this.options.element)[0]),
        (this.scrollContainer = ((t) => {
          const e = (t, i = []) => (null == t.parentNode ? i : e(t.parentNode, i.concat([t]))),
            i = (t) => {
              const e = /(auto|scroll)/,
                i = getComputedStyle(t, null);
              return ['overflow', 'overflow-y', 'overflow-x'].some((t) =>
                e.test(i.getPropertyValue(t)),
              );
            };
          if (!(t = $(t)[0]) || !t.parentNode) return;
          const s = e(t.parentNode, []);
          for (let t = 0; t < s.length; t++) if (i(s[t])) return s[t];
          const n = t.ownerDocument || document;
          return n.scrollingElement || n.documentElement;
        })(this.element)),
        (this.interactionType = this.options.interactionType),
        (this.interactionSettings = {
          seekAxis: 'x',
          seekMode: 'seek',
          retriggerBehavior: 'restart',
          intersectionLineOffset: 0,
          ...this.options.interactionSettings,
        }),
        (this.animationType = this.options.animationType),
        (this.animationModule = G[this.animationType]);
    }
    async updateOptions(t, e = !1) {
      let i =
        'object' == typeof t.steps &&
        JSON.stringify(t.steps) !== JSON.stringify(this.options.steps);
      const s =
          'object' == typeof t.interactionSettings &&
          JSON.stringify(t.interactionSettings) !==
            JSON.stringify(this.options.interactionSettings),
        n = { ...this.options, ...t };
      return (
        (this.options.interactionSettings.seekMode === n.interactionSettings.seekMode &&
          this.options.interactionSettings.retriggerBehavior ===
            n.interactionSettings.retriggerBehavior &&
          this.options.interactionType === n.interactionType) ||
          (i = !0),
        (this.options = this.normalizeOptions(n) || n),
        this.updateInteractivityFields(),
        await this.createInteractivitySettings(),
        (s || e) && (this.updateOffsetBound(), this.updateInsectionLinePosition()),
        (i || e) && (await this.createSteps(), this.updateActivityDistanceRanges()),
        this.toggleFixed(A(this.progress, [0, 100]) && this.interactionSettings.fixed),
        this.updateScrollPosition(),
        this.updatePointerLess(),
        this.updateCursorPointer(),
        this.updateProgressRanges(),
        this.triggerChange(),
        this
      );
    }
    async activateStep(t) {
      if (this.steps && this.steps.length && this.steps[t]) {
        const { animation: e, progressRange: i } = this.steps[t],
          { animationParams: s, iterationsMap: n } = e;
        let o = i[1];
        if ('bounce' === s.playMode) {
          const t = n[n.length - 1];
          o -= ((i[1] - i[0]) * (t.progressRange[1] - t.progressRange[0])) / 100;
        }
        return this.setProgress(o);
      }
      return (
        this.activeStep && this.activeStep.animation.destroy(),
        (this.activeStepIndex = -1),
        (this.activeStep = null),
        (this.progress = -1),
        this.triggerChange(),
        {
          progress: this.progress,
          progressInStep: 0,
          step: this.activeStep,
          stepIndex: this.activeStepIndex,
        }
      );
    }
    async setProgress(t) {
      this.stopAnimationStep(), (t = C(0, t, 100));
      const e = this.steps.findIndex((e) => A(t, e.progressRange));
      if (-1 !== e) {
        const { progressRange: i } = this.steps[e],
          s = ((t - i[0]) / (i[1] - i[0] || 1)) * 100;
        return (
          (this.progress = t),
          await this.setActiveStep(e),
          this.activeStep.animation.seek(s),
          this.toggleFixed(A(t, [0, 100]) && this.interactionSettings.fixed),
          this.updateScrollPosition(),
          this.triggerChange(),
          { progress: t, progressInStep: s, step: this.steps[e], stepIndex: e }
        );
      }
      return null;
    }
    async startPreview() {
      this.hasInteractivityState('isSuspended') &&
        ((U = this.options.interactionSettings.retriggerBehavior),
        this.updateOptions(
          {
            ...this.options,
            interactionSettings: {
              ...this.options.interactionSettings,
              retriggerBehavior: 'reverse',
            },
          },
          !0,
        ),
        this.setInteractivityState({ isSuspended: !1 }),
        await this.startAnimation(),
        this.seek(0),
        this.updateScrollPosition(),
        this.triggerStartPreview());
    }
    stopPreview() {
      this.hasInteractivityState('isSuspended') ||
        (this.toggleFixed(!1),
        this.stopAnimation(),
        U &&
          (this.updateOptions(
            {
              ...this.options,
              interactionSettings: { ...this.options.interactionSettings, retriggerBehavior: U },
            },
            !0,
          ),
          (U = null)),
        this.setInteractivityState({ isSuspended: !0 }),
        this.triggerStopPreview());
    }
    async playStep({ skipDelay: t } = {}) {
      this.activeStep &&
        (await this.activateStep(this.activeStepIndex),
        await this.play({
          forceRestart: !0,
          resetProgress: !0,
          animationParams: t ? { delay: 0 } : null,
        }));
    }
    async playAll() {
      this.stopAnimation(), await this.setProgress(0), await this.chainedInteractionHandler();
    }
    stopAnimationStep(t = !0) {
      this.activeStep &&
        (this.activeStep.animation.stop(),
        this.hasStepState('inPlay') &&
          (this.triggerStepLoopComplete(),
          this.triggerStepComplete(),
          this.setStepState({ inPlay: !1 })),
        t && this.setInteractivityState({ inPlay: !1 }),
        this.updatePointerLess());
    }
    stopAnimation() {
      var t;
      this.stopAnimationStep(),
        this.setInteractivityState({ inPlay: !1, inReverse: !1 }),
        this.stopSmooting(),
        null == (t = this.eventsAbortController) || t.abort();
    }
    async init({ suspended: t } = {}) {
      var e;
      (t = null != (e = t) && e),
        this.createInteractivitySettings(),
        this.updateOffsetBound(),
        this.animationModule.libsLoaded || (await this.animationModule.loadLibs()),
        Z.listenScroll(this.scrollContainer),
        await this.createSteps(),
        this.updateInsectionLinePosition(),
        this.updateCursorPointer(),
        this.setInteractivityState({
          isInited: !0,
          isSuspended: t,
          scrollContainerInShow: z(this.scrollContainer),
        }),
        this.triggerInited(),
        t || this.startAnimation(!0);
    }
    async createSteps() {
      this.updateInitialDomMatrix(),
        (this.steps = this.options.steps.map(({ animationParams: t, ...e }) => ({
          pointerEvents: !0,
          distance: 0,
          ...e,
          id: e.id || T(),
          state: { inSeek: !1, inPlay: !1, isCompleted: !1, isLoopCompleted: !1, isActive: !1 },
        }))),
        this.steps.reduce((t, e, i) => {
          const s = { ...this.options.steps[i].animationParams };
          return (
            s && this.skewIsNotAvailable && ((s.skewX = 0), (s.skewY = 0)),
            'scroll' === this.interactionType &&
              'play' === this.interactionSettings.seekMode &&
              ((s.loop = 1), (s.delay = 0), (s.playMode = 'normal')),
            (e.animation = this.animationModule.create({
              element: this.element,
              animationParams: s,
              initialAnimationFrame: null != t && t.animation ? t.animation.endFrame : null,
              initialDomMatrix: this.initialDomMatrix,
              onChange: () => {
                this.updateTotalProgress(), this.triggerChange();
              },
            })),
            e
          );
        }, null),
        await Promise.all(
          this.steps.map(
            (t) =>
              new Promise(async (e, i) => {
                try {
                  await t.animation.init(), e(!0);
                } catch (t) {
                  i(t);
                }
              }),
          ),
        ),
        this.updateProgressRanges();
    }
    createInteractivitySettings() {
      var t, e;
      let i = [];
      null != (t = this.interactionSettings.triggerElements) &&
        t.length &&
        (i = ((t) => {
          const e = new Map(),
            i = [],
            s = t.length;
          let n = 0;
          for (let o = 0; o < s; o++) {
            const s = t[o];
            e.has(s) || (e.set(s, 1), (i[n++] = s));
          }
          return e.clear(), i;
        })(
          this.interactionSettings.triggerElements
            .map((t) => {
              return '%current%' === t
                ? this.element
                : (e = t) instanceof Element || e instanceof HTMLDocument
                ? t
                : _(t, this.scrollContainer, this.element);
              var e;
            })
            .flat()
            .filter((t) => t),
        )),
        (null != (e = this.interactionSettings.triggerElements) && e.length && i.length) ||
          (i = [this.element]),
        (this.interactionSettings.triggerElements = i);
    }
    async startAnimation(t = !0) {
      this.hasInteractivityState('isSuspended') ||
        (this.stopAnimation(),
        this.updatePointerLess(),
        (this.eventsAbortController = new AbortController()),
        t && (await this.setActiveStep(0)),
        'none' === this.interactionType
          ? this.chainedInteractionHandler()
          : 'click' === this.interactionType
          ? this.startOnClick()
          : 'hold' === this.interactionType
          ? this.startOnHold()
          : 'hover' === this.interactionType
          ? this.startOnHover()
          : 'screen' === this.interactionType
          ? this.startOnScreen()
          : 'scroll' === this.interactionType
          ? this.startOnScroll()
          : 'cursor' === this.interactionType
          ? this.startOnCursor()
          : 'trigger' === this.interactionType && this.startOnTrigger());
    }
    async setActiveStep(t, { fromSnapshot: e, force: i } = {}) {
      if (A(t, [0, this.steps.length - 1])) {
        const s = this.steps[t];
        return (
          (i || this.activeStepIndex !== t) &&
            (this.activeStep &&
              (this.stopAnimationStep(!1),
              this.setStepState({
                inSeek: !1,
                inPlay: !1,
                isCompleted: !0,
                isLoopCompleted: !0,
                isActive: !1,
              })),
            await s.animation.activateAnimation({ fromSnapshot: e })),
          (this.activeStepIndex = t),
          (this.activeStep = s),
          this.setStepState({
            inSeek: !1,
            inPlay: !1,
            isCompleted: !1,
            isLoopCompleted: !1,
            isActive: !0,
          }),
          !0
        );
      }
      return !1;
    }
    triggerHandler(t, e = null, i = {}) {
      e = e || t;
      const { triggerElements: s, retriggerBehavior: n } = this.interactionSettings,
        o = t === e;
      i = {
        listenReverseOnDocument: !1,
        reverseTriggerRestart: !0,
        waitComplete: 'reverse' === n,
        elements: s,
        ...i,
      };
      let a = !1,
        r = !1,
        l = !0,
        h = !0;
      const d = () => {
        const t = !this.hasInteractivityState('inReverse');
        l || 'restart' === n
          ? (null == i.onStartHandler || i.onStartHandler(), this.chainedInteractionHandler())
          : 'reverse' === n
          ? !t && a
            ? (this.setInteractivityState({ inReverse: !1 }),
              null == i.onStartHandler || i.onStartHandler(),
              this.chainedInteractionHandler())
            : t &&
              !a &&
              (this.setInteractivityState({ inReverse: !0 }),
              null == i.onReverseHandler || i.onReverseHandler(),
              this.chainedInteractionHandler())
          : 'reset' === n &&
            (this.hasInteractivityState('inPlay') || 0 !== this.progress
              ? (this.stopAnimationStep(),
                this.activateStep(0),
                this.setInteractivityState({ inReverse: !1 }))
              : (null == i.onStartHandler || i.onStartHandler(), this.chainedInteractionHandler()));
      };
      i.waitComplete &&
        this.element.addEventListener(
          `${this.id}:complete`,
          () => {
            r && (d(), (r = !1));
          },
          { signal: this.eventsAbortController.signal },
        ),
        i.elements.forEach((s) => {
          if (
            (s.addEventListener(
              t,
              async (t) => {
                (!t.isTrusted && (t instanceof MouseEvent || t instanceof PointerEvent)) ||
                  ((a = !o || !a),
                  this.hasInteractivityState('inPlay') && i.waitComplete
                    ? (r = !0)
                    : (d(), (l = !1), (h = !1)));
              },
              { signal: this.eventsAbortController.signal },
            ),
            !o)
          ) {
            (i.listenReverseOnDocument ? document : s).addEventListener(
              e,
              async (t) => {
                (!t.isTrusted && (t instanceof MouseEvent || t instanceof PointerEvent)) ||
                  h ||
                  (!i.reverseTriggerRestart && 'restart' === n) ||
                  ((a = !1),
                  this.hasInteractivityState('inPlay') && i.waitComplete
                    ? (r = !0)
                    : setTimeout(() => {
                        d();
                      }, 1));
              },
              { signal: this.eventsAbortController.signal },
            );
          }
        });
    }
    startOnClick() {
      const t = 'none' === this.interactionSettings.retriggerBehavior;
      this.triggerHandler('click', 'click', {
        onStartHandler: () => {
          t &&
            !this.hasInteractivityState('preventCursorPointer') &&
            (this.setInteractivityState({ preventCursorPointer: !0 }), this.updateCursorPointer());
        },
      });
    }
    startOnHold() {
      const t = 'none' === this.interactionSettings.retriggerBehavior;
      this.triggerHandler('pointerdown', 'pointerup', {
        listenReverseOnDocument: !0,
        reverseTriggerRestart: !1,
        onStartHandler: () => {
          t &&
            !this.hasInteractivityState('preventCursorPointer') &&
            (this.setInteractivityState({ preventCursorPointer: !0 }), this.updateCursorPointer());
        },
      });
    }
    startOnHover() {
      this.triggerHandler('pointerenter', 'pointerleave', { reverseTriggerRestart: !1 });
    }
    startOnTrigger() {
      let { triggerEvent: t, triggerAnimationItem: e } = this.interactionSettings;
      e && (t = `${e}:${t}`), this.triggerHandler(t, t);
    }
    async startOnScreen() {
      this.triggerHandler('intersection-in', 'intersection-out', { elements: [this.element] }),
        this.hasInteractivityState('wasIntersection')
          ? this.chainedInteractionHandler()
          : Z.expectIntersection(this);
    }
    async startOnScroll() {
      await this.setActiveStep(0),
        this.scrollInteractionHandler(),
        setTimeout(() => {
          this.startSmooting();
        }, 20);
    }
    async startOnCursor() {
      this.cursorInteractionHandler(),
        this.element.ownerDocument.addEventListener(
          'pointermove',
          (t) => this.cursorInteractionHandler(t),
          { signal: this.eventsAbortController.signal },
        ),
        setTimeout(() => {
          this.startSmooting();
        }, 20);
    }
    async cursorInteractionHandler(t = { clientX: 0, clientY: 0 }) {
      const { seekAxis: e, seekMode: i } = this.interactionSettings,
        { left: s } = this.triggerElementOffsetBound,
        n = this.triggerElementOffsetBound.top,
        o = 'x' === e ? t.clientX - s : t.clientY - n;
      let a = this.steps.findIndex((t) => A(o, t.activityDistanceRange));
      if ((a !== this.activeStepIndex && (await this.setActiveStep(a)), 'seek' === i)) {
        const { activityDistanceRange: t } = this.activeStep,
          e = o - Math.min(...t),
          i = Math.abs(t[0] - t[1]),
          s = C(0, 100 * (e / i || 0), 100);
        this.seek(s);
      }
    }
    async chainedInteractionHandler() {
      this.stopAnimationStep(),
        this.triggerAnimationStart(),
        this.setInteractivityState({ inPlay: !0 });
      const { retriggerBehavior: t, loop: e, playMode: i } = this.interactionSettings;
      let s = 0,
        n = this.hasInteractivityState('inReverse'),
        o = e && 'number' == typeof e ? e : 1 / 0;
      const a = 'reverse' === t;
      for (; s < o; ) {
        this.triggerAnimationLoopStart();
        let t = 0,
          e = 'bounce' !== i || a ? this.steps.length : 2 * this.steps.length - 1;
        for (await this.setActiveStep(n ? this.steps.length - 1 : 0); t < e; ) {
          (n = this.hasInteractivityState('inReverse')),
            await this.play({ reverse: n, forceRestart: !0, resetProgress: !0 });
          const e = await this.setActiveStep(this.activeStepIndex + (n ? -1 : 1));
          if (!e && ('normal' === i || a)) break;
          e && 'bounce' === i
            ? (t += 1)
            : a || 'bounce' !== i || this.toggleInteractivityState('inReverse');
        }
        this.triggerAnimationLoopComplete(), (s += 1);
      }
      this.setInteractivityState({ inPlay: !1 }), this.triggerAnimationComplete();
    }
    async scrollInteractionHandler() {
      setTimeout(async () => {
        const t = this.triggerElementOffsetBound.top - this.scrollContainer.scrollTop;
        if (!this.steps[0].activityDistanceRange || !this.steps[0].activityDistanceRange.length)
          return;
        const e = this.steps[0].activityDistanceRange[0],
          i = this.steps[this.steps.length - 1].activityDistanceRange[1];
        let s = this.steps.findIndex((e) => A(t, e.activityDistanceRange));
        const n = this.activeStep,
          o = s < this.activeStepIndex ? n.animation.animationParams : {},
          { seekMode: a, fixed: r } = this.interactionSettings;
        if (
          (-1 === s
            ? (this.setInteractivityState({ inSeek: !1 }),
              t < i
                ? ((s = this.steps.length - 1),
                  this.hasInteractivityState('isCompleted') ||
                    (this.triggerAnimationLoopComplete(),
                    this.triggerAnimationComplete(),
                    this.setInteractivityState({ isCompleted: !0 })),
                  'seek' === a &&
                    (this.hasStepState('isCompleted') ||
                      (this.triggerStepComplete(), this.setStepState({ isCompleted: !0 })),
                    this.hasStepState('isLoopCompleted') ||
                      (this.triggerStepLoopComplete(), this.setStepState({ isLoopCompleted: !0 }))))
                : t > e && (s = 0))
            : this.hasInteractivityState('inSeek') ||
              (this.setInteractivityState({ inSeek: !0, isCompleted: !1 }),
              s > this.activeStepIndex &&
                (this.triggerAnimationStart(), this.triggerAnimationLoopStart())),
          s === this.activeStepIndex)
        ) {
          if ('play' === a) return;
        } else
          'seek' === a &&
            s > this.activeStepIndex &&
            (this.hasStepState('isLoopCompleted') ||
              (this.triggerStepLoopComplete(), this.setStepState({ isLoopCompleted: !0 })),
            this.hasStepState('isCompleted') ||
              (this.triggerStepComplete(), this.setStepState({ isCompleted: !0 }))),
            await this.setActiveStep(s, { fromSnapshot: 'play' === a }),
            'seek' !== a ||
              this.hasStepState('inSeek') ||
              (this.triggerStepLoopStart(), this.triggerStepStart()),
            this.updatePointerLess();
        if ((this.stopAnimationStep(), 'seek' === a)) {
          const { activityDistanceRange: e } = this.activeStep,
            i = 100 - 100 * ((t - Math.min(...e)) / Math.max(Math.abs(e[0] - e[1]), 1) || 0),
            s = A(i, [1e-7, 100]) && r;
          this.toggleFixed(s),
            this.seek(
              i,
              (!s && this.allowFixed) || this.interactionSettings.seekSmoothing
                ? this.getFixedOffsetTop(i)
                : 0,
            );
        } else
          'play' === a &&
            this.play({
              resetProgress: !0,
              forceRestart: !0,
              animationParams: {
                ...this.activeStep.animation.animationParams,
                ...o,
                transformOrigin: 'center',
              },
            });
      }, 4);
    }
    toggleFixed(t) {
      if (this.hasInteractivityState('isSuspended')) return;
      const e = 0 === this.interactionSettings.seekSmoothing;
      if (t && this.allowFixed) {
        this.hasInteractivityState('inFixed') ||
          (this.setInteractivityState({ inFixed: !0 }), this.triggerFixed());
        const t = this.elementOffsetBound.top - this.triggerElementOffsetBound.top;
        if (e) {
          const e = ['relative', 'static'].includes(getComputedStyle(this.element).position);
          this.element.style.setProperty('position', 'fixed'),
            this.element.style.setProperty(
              'top',
              `${k(this.intersectionLinePosition, this.scrollContainer.clientHeight, '%') + t}px`,
            ),
            this.element.style.setProperty('left', `${this.elementOffsetBound.left}px`),
            !this.fixedReplacementElement &&
              e &&
              ((this.fixedReplacementElement = document.createElement('div')),
              this.fixedReplacementElement.style.setProperty('visibility', 'hidden'),
              this.fixedReplacementElement.style.setProperty('pointer-events', 'none'),
              this.element.before(this.fixedReplacementElement)),
            this.fixedReplacementElement &&
              (this.element.style.setProperty('width', `${this.elementOffsetBound.width}px`),
              this.element.style.setProperty('height', `${this.elementOffsetBound.height}px`),
              this.fixedReplacementElement.style.setProperty(
                'width',
                `${this.elementOffsetBound.width}px`,
              ),
              this.fixedReplacementElement.style.setProperty(
                'height',
                `${this.elementOffsetBound.height}px`,
              ));
        }
      } else {
        var i;
        if (
          (this.hasInteractivityState('inFixed') &&
            (this.setInteractivityState({ inFixed: !1 }), this.triggerUnfixed()),
          this.element.style.removeProperty('position'),
          this.element.style.removeProperty('top'),
          this.element.style.removeProperty('left'),
          this.element.style.removeProperty('width'),
          this.element.style.removeProperty('height'),
          this.fixedReplacementElement)
        )
          null == (i = this.fixedReplacementElement) || i.remove(),
            (this.fixedReplacementElement = null);
      }
    }
    startSmooting(t = 'ease-out') {
      const { seekSmoothing: e, seekMode: i } = this.interactionSettings;
      'seek' === i &&
        this.element.style.setProperty(
          'transition',
          `transform ${e}s ${t}, opacity ${e}s ${t}, clip-path ${e}s ${t}`,
        );
    }
    stopSmooting() {
      this.element.style.removeProperty('transition');
    }
    getFixedOffsetTop(t) {
      const { activityDistanceRange: e } = this.activeStep || {},
        { fixed: i } = this.interactionSettings;
      return i && e ? -R(e[0], e[1], C(0, t / 100, 1)) + this.intersectionLinePosition : 0;
    }
    getWindowClientHeight() {
      return this.scrollContainer.closest('html').clientHeight;
    }
    async play({ forceRestart: t, resetProgress: e, reverse: i, animationParams: s } = {}) {
      return (
        !(!t && this.hasStepState('inPlay')) &&
        (await this.activeStep.animation.play({
          resetProgress: e,
          reverse: i,
          animationParams: s,
          onStart: () => {
            this.setStepState({ inPlay: !0, isCompleted: !1 }),
              this.updatePointerLess(),
              this.triggerStepStart();
          },
          onLoopStart: () => {
            this.setStepState({ isLoopCompleted: !1 }), this.triggerStepLoopStart();
          },
          onLoopComplete: () => {
            this.setStepState({ isLoopCompleted: !0 }), this.triggerStepLoopComplete();
          },
          onComplete: () => {
            this.setStepState({ inPlay: !1, isCompleted: !0 }), this.triggerStepComplete();
          },
        }),
        !0)
      );
    }
    async seek(t, e = 0) {
      requestAnimationFrame(() => {
        this.setStepState({ inSeek: !0 }), this.activeStep.animation.seek(t, e);
      });
    }
    updateProgressRanges() {
      const { seekMode: t } = this.interactionSettings,
        e = ['scroll'].includes(this.interactionType) && 'seek' === t,
        i = this.getWindowClientHeight(),
        s = this.steps.reduce((t, s) => {
          if (e) {
            const { height: e } = this.elementOffsetBound;
            return t + k(s.distance || 1, i + e, '%');
          }
          return t + s.animation.valueForProgressFartor;
        }, 0);
      this.steps.reduce((t, i, n) => {
        let o = ((n + 1) / this.steps.length) * (100 + t),
          a = i.animation.valueForProgressFartor;
        const r = this.getWindowClientHeight();
        if (e) {
          const { height: t } = this.elementOffsetBound;
          a = k(i.distance || 1, r + t, '%');
        }
        return (
          s && (o = C(0, t + (a / s) * 100, 100)),
          this.steps.length - 1 === n && (o = Math.round(o)),
          (i.progressRange = [t, o]),
          o
        );
      }, 0);
    }
    updateInsectionLinePosition() {
      const { intersectionLine: t, intersectionLineOffset: e } = this.interactionSettings,
        i = this.getWindowClientHeight(),
        s = k(e, i, '%');
      t &&
        ((this.intersectionLinePosition =
          this.scrollContainer.clientHeight * { top: 0, center: 0.5, bottom: 1 }[t] + s),
        this.updateActivityDistanceRanges());
    }
    updateActivityDistanceRanges() {
      if ('scroll' === this.interactionType || 'screen' === this.interactionType) {
        const { height: t } = this.elementOffsetBound,
          e = this.getWindowClientHeight();
        this.steps.forEach((i, s, n) => {
          const o = n[s - 1];
          let a = this.intersectionLinePosition;
          const r = k(i.distance, e + t, '%');
          o && o.activityDistanceRange && (a = o.activityDistanceRange[1]),
            (i.activityDistanceRange = [a, a - r]);
        });
      } else if ('cursor' === this.interactionType) {
        const { seekAxis: t } = this.interactionSettings,
          { height: e, width: i } = this.triggerElementOffsetBound,
          s = 'x' === t ? i : e;
        this.steps.forEach((t, e, i) => {
          const n = i[e - 1];
          let o = 0;
          const a = k(t.distance, s, '%');
          n && n.activityDistanceRange && (o = n.activityDistanceRange[1]),
            (t.activityDistanceRange = [o, o + a]);
        });
      }
    }
    updateInitialDomMatrix() {
      this.initialDomMatrix = (function (t) {
        var e;
        if (!t) return null;
        const i = null == (e = t.style) ? void 0 : e.transform;
        i && t.style.removeProperty('transform');
        const s = Y(t);
        return (t.style.transform = i), s;
      })(this.element);
    }
    updateScrollPosition() {
      if ('scroll' !== this.interactionType || this.hasInteractivityState('isSuspended')) return;
      const t = this.activeStep.animation.progress,
        { activityDistanceRange: e } = this.activeStep;
      if (!e) return;
      const i = -R(e[0], e[1], t / 100),
        s = this.triggerElementOffsetBound.top + i;
      s > 0 &&
        requestAnimationFrame(() => {
          this.scrollContainer.scrollTop = s;
        });
    }
    updateOffsetBound() {
      this.fixedReplacementElement &&
        this.fixedReplacementElement.style.setProperty('display', 'none');
      const t = this.interactionSettings.triggerElements[0],
        e = D(this.element),
        i = t && t !== this.element ? D(t) : e;
      (this.elementOffsetBound = e),
        (this.triggerElementOffsetBound = i),
        this.fixedReplacementElement &&
          this.fixedReplacementElement.style.removeProperty('display');
    }
    updatePointerLess() {
      this.activeStep &&
        this.element.classList.toggle('interactivity-pointerless', !this.activeStep.pointerEvents);
    }
    removePointerLess() {
      this.element.classList.remove('interactivity-pointerless');
    }
    updateCursorPointer() {
      const t =
        ['click', 'hold'].includes(this.interactionType) &&
        !this.hasInteractivityState('preventCursorPointer');
      this.interactionSettings.triggerElements.forEach((e) => {
        e.classList.toggle('interactivity-cursor-pointer', t);
      });
    }
    updateTotalProgress() {
      if (!this.activeStep) return;
      const { progressRange: t, animation: e } = this.activeStep;
      this.progress = R(t[0], t[1], e.progress / 100);
    }
    setStepState(t, e = this.activeStep) {
      e.state = { ...e.state, ...t };
    }
    hasStepState(t, e = this.activeStep) {
      return e.state[t];
    }
    setInteractivityState(t) {
      this.state = { ...this.state, ...t };
    }
    hasInteractivityState(t) {
      return this.state[t];
    }
    toggleInteractivityState(t) {
      this.state[t] = !this.state[t];
    }
    triggerChange() {
      var t, e, i, s;
      null == (t = (e = this.options).onChange) ||
        t.call(e, {
          progress: this.progress,
          progressInStep:
            null == (i = this.activeStep) || null == (s = i.animation) ? void 0 : s.progress,
          step: this.activeStep,
          stepIndex: this.activeStepIndex,
          elementOffsetBound: this.elementOffsetBound,
        }),
        this.element.dispatchEvent(new Event('interactivity_change'));
    }
    triggerStartPreview() {
      var t, e;
      null == (t = (e = this.options).onStartPreview) || t.call(e),
        this.element.dispatchEvent(new Event('interactivity_start_preview'));
    }
    triggerStopPreview() {
      var t, e;
      null == (t = (e = this.options).onStopPreview) || t.call(e),
        this.element.dispatchEvent(new Event('interactivity_stop_preview'));
    }
    triggerStepStart() {
      var t, e;
      this.activeStep &&
        (null == (t = (e = this.options).onStepStart) ||
          t.call(e, {
            progress: this.progress,
            progressInStep: this.activeStep.animation.progress,
            step: this.activeStep,
            stepIndex: this.activeStepIndex,
          }),
        this.element.dispatchEvent(
          new Event(`${this.id}:${this.activeStep.id}:start`, { bubbles: !0 }),
        ));
    }
    triggerStepLoopStart() {
      var t, e;
      this.activeStep &&
        (null == (t = (e = this.options).onStepLoopStart) ||
          t.call(e, {
            progress: this.progress,
            progressInStep: this.activeStep.animation.progress,
            step: this.activeStep,
            stepIndex: this.activeStepIndex,
          }),
        this.element.dispatchEvent(
          new Event(`${this.id}:${this.activeStep.id}:loopstart`, { bubbles: !0 }),
        ));
    }
    triggerStepComplete() {
      var t, e;
      this.activeStep &&
        (null == (t = (e = this.options).onStepComplete) ||
          t.call(e, {
            progress: this.progress,
            progressInStep: this.activeStep.animation.progress,
            step: this.activeStep,
            stepIndex: this.activeStepIndex,
          }),
        this.element.dispatchEvent(
          new Event(`${this.id}:${this.activeStep.id}:complete`, { bubbles: !0 }),
        ));
    }
    triggerStepLoopComplete() {
      var t, e;
      this.activeStep &&
        (null == (t = (e = this.options).onStepLoopComplete) ||
          t.call(e, {
            progress: this.progress,
            progressInStep: this.activeStep.animation.progress,
            step: this.activeStep,
            stepIndex: this.activeStepIndex,
          }),
        this.element.dispatchEvent(
          new Event(`${this.id}:${this.activeStep.id}:loopcomplete`, { bubbles: !0 }),
        ));
    }
    triggerAnimationStart() {
      var t, e;
      null == (t = (e = this.options).onAnimationStart) ||
        t.call(e, {
          progress: this.progress,
          progressInStep: this.activeStep.animation.progress,
          step: this.activeStep,
          stepIndex: this.activeStepIndex,
        }),
        this.element.dispatchEvent(new Event(`${this.id}:start`, { bubbles: !0 }));
    }
    triggerAnimationLoopStart() {
      var t, e;
      null == (t = (e = this.options).onAnimationLoopStart) ||
        t.call(e, {
          progress: this.progress,
          progressInStep: this.activeStep.animation.progress,
          step: this.activeStep,
          stepIndex: this.activeStepIndex,
        }),
        this.element.dispatchEvent(new Event(`${this.id}:loopstart`, { bubbles: !0 }));
    }
    triggerAnimationComplete() {
      var t, e;
      null == (t = (e = this.options).onAnimationComplete) ||
        t.call(e, {
          progress: this.progress,
          progressInStep: this.activeStep.animation.progress,
          step: this.activeStep,
          stepIndex: this.activeStepIndex,
        }),
        this.element.dispatchEvent(new Event(`${this.id}:complete`, { bubbles: !0 }));
    }
    triggerAnimationLoopComplete() {
      var t, e;
      null == (t = (e = this.options).onAnimationLoopComplete) ||
        t.call(e, {
          progress: this.progress,
          progressInStep: this.activeStep.animation.progress,
          step: this.activeStep,
          stepIndex: this.activeStepIndex,
        }),
        this.element.dispatchEvent(new Event(`${this.id}:loopcomplete`, { bubbles: !0 }));
    }
    triggerFixed() {
      var t, e;
      null == (t = (e = this.options).onFixed) || t.call(e),
        this.element.dispatchEvent(new Event(`${this.id}:fixed`, { bubbles: !0 }));
    }
    triggerUnfixed() {
      var t, e;
      null == (t = (e = this.options).onUnfixed) || t.call(e),
        this.element.dispatchEvent(new Event(`${this.id}:unfixed`, { bubbles: !0 }));
    }
    triggerInited() {
      var t, e;
      null == (t = (e = this.options).onInited) || t.call(e),
        this.element.dispatchEvent(new Event(`${this.id}:inited`, { bubbles: !0 }));
    }
    triggerIntersection(t = 'in') {
      var e, i;
      null == (e = (i = this.options).onIntersection) || e.call(i, t),
        this.element.dispatchEvent(new Event('intersection', { bubbles: !0 })),
        this.element.dispatchEvent(new Event(`intersection-${t}`, { bubbles: !0 }));
    }
  }
  window.Interactivity = Z;
  const K = [
      '.layout-type-header',
      '.layout-type-tabs',
      '.layout-type-column',
      '.layout-type-product',
      '.flexbe-cards-container.mode-slider',
      '.content-zone--vertical.bg-element',
      '.content-zone--vertical:not(.bg-element) .element-item--static',
      '.flexbe-card:not(.swiper-slide)',
      '.quiz-progress',
      '.step-title',
      '.quiz-fields',
    ].join(','),
    J = ['.free-area .element-item'].join(',');
  var Q = {
    startTransitions(t) {
      const e = $(t);
      if (flexbe_cli.is_admin) return e.addClass('was-view'), void e.removeClass('wait-animation');
      const i = e.find(J);
      let s = e.find(K);
      s = s.filter((t, e) => 0 === $(e).find(s).length);
      const n = Math.min(80, 1e3 / s.length),
        o = 1e3 + s.length * n;
      s.css('--transitionDelay', (t) => t * n + 'ms'),
        s.addClass('transition-target'),
        i.addClass('transition-target'),
        setTimeout(() => {
          e.addClass('was-view');
        }, 200),
        setTimeout(() => {
          this.stopTransition(e, s);
        }, 200 + o);
    },
    stopTransition(t, e) {
      const i = $(t);
      let s = $(e);
      s.length || ((s = i.find(e)), (s = s.filter((t, e) => 0 === $(e).find(s).length))),
        i.removeClass('wait-animation'),
        s.removeClass('transition-target'),
        s.css('--transitionDelay', ''),
        i.trigger('flexbe-transition-end');
    },
  };
  const tt = {},
    et = {},
    it = {},
    st = (t) => (t.isClone ? `${t.id}_clone${t.isClone}` : t.id),
    nt = (t, e) => {
      const i = st(t);
      et[i] || (et[i] = []), et[i].includes(e) || et[i].push(e);
    },
    ot = {
      registerComponent(t) {
        tt[t.is] = t;
      },
      getComponentClass: (t) => tt[t],
      getGlobalInstance: (t) => it[t],
      setGlobalInstance(t, e) {
        it[t] = e;
      },
      init() {
        this.setGlobalInstance(
          'autoWidth',
          class {
            static create() {
              return new this();
            }
            constructor() {
              flexbe_cli.events
                .off('entity_event.autoWidth')
                .on('entity_event.autoWidth', ({ type: t, core: e, params: i }) => {
                  const s =
                      'screen' === t && e && e.area && 'element' !== e.is && i.state && i.first,
                    n = flexbe_cli.is_admin && 'update' === t;
                  (s || n) && this.initArea(e.area);
                });
            }
            initArea(t = document) {
              const e = t.querySelectorAll(
                '.autowidth-desktop:not(.autoheight-desktop) > .element-content, .autowidth-mobile:not(.autoheight-mobile) > .element-content',
              );
              Array.from(e).forEach((t) => d.observe(t));
            }
          }.create(),
        ),
          this.setGlobalInstance(
            'lazyLoading',
            class {
              static create() {
                return new this();
              }
              constructor() {
                (this.imageOptions = void 0),
                  (this.imageOptions = {
                    lazy: !0,
                    lazy_priority: !1,
                    ...(flexbe_cli.vars._group.images || {}),
                  }),
                  this.loadInArea(),
                  this.initLazyLoading(),
                  this.initLazyPriority();
              }
              initLazyLoading() {
                flexbe_cli.events
                  .off('entity_event.lazyLoading')
                  .on('entity_event.lazyLoading', ({ type: t, core: e, params: i }) => {
                    const s =
                        'screen' === t && e && e.area && 'element' !== e.is && i.state && i.first,
                      n = flexbe_cli.is_admin && 'update' === t;
                    (s || n) && this.loadInArea(e.area);
                  });
              }
              initLazyPriority() {
                const t = this.imageOptions.lazy,
                  e = this.imageOptions.lazy_priority;
                t &&
                  e &&
                  $(window).one('load.lazyPriority', () => {
                    const t = [
                      '.component-bg',
                      '.bg-element__fill--image',
                      '.component-image',
                      '.component-icon',
                    ].join(',');
                    this.loadInArea(document),
                      Array.from(document.querySelectorAll(t)).forEach((t) =>
                        t.dispatchEvent(
                          new CustomEvent('setImage', { detail: { reason: 'lazyPriority' } }),
                        ),
                      );
                  });
              }
              loadInArea(t = document) {
                const e = Array.from(t.querySelectorAll('[data-inline-src], [data-inline-bg]'));
                p(
                  Array.from(t.querySelectorAll('[data-inline-href]'))
                    .map((t) => {
                      var e;
                      return null == (e = t.closest('svg')) ? void 0 : e.parentElement;
                    })
                    .filter(Boolean),
                ),
                  p(e);
                const i = Array.from(t.querySelectorAll('[data-lazy-src], [data-lazy-bg]'));
                p(
                  Array.from(t.querySelectorAll('[data-lazy-href]'))
                    .map((t) => {
                      var e;
                      return null == (e = t.closest('svg')) ? void 0 : e.parentElement;
                    })
                    .filter(Boolean),
                ),
                  p(i);
              }
            }.create(),
          ),
          this.setGlobalInstance('links', l.create()),
          this.setGlobalInstance(
            'lightbox',
            class {
              static create() {
                return new this();
              }
              constructor() {
                (this.loaded = !1),
                  (this.isOpen = !1),
                  (this.isOpened = !1),
                  (this.$lg = void 0),
                  this.bindEvents(),
                  window.history.state &&
                    window.history.state.lg &&
                    this.openGallery(window.history.state.lg);
              }
              require(t) {
                this.loaded
                  ? 'function' == typeof t && t()
                  : flexbe_cli.require(
                      [
                        '/_s/lib/jquery/lightGallery/css/lightgallery.min.css',
                        '/_s/lib/jquery/lightGallery/js/lightgallery.min.js',
                      ],
                      () => {
                        (this.loaded = !0),
                          $(document).off('click.beforeLoadedLg'),
                          'function' == typeof t && t();
                      },
                    );
              }
              bindEvents() {
                $(window).one('load.lightbox', () => {
                  $(y).length && this.require();
                }),
                  $(document).on('click.lightbox', y, (t) => {
                    t.preventDefault();
                  }),
                  $(document).on('touchstart.lightbox pointerdown.lightbox', y, (t) => {
                    var e, i;
                    flexbe_cli.is_admin ||
                      (t.preventDefault(),
                      t.stopPropagation(),
                      (g = t.target),
                      (f = {
                        x: null != (e = t.clientX) ? e : t.touches[0].clientX,
                        y: null != (i = t.clientY) ? i : t.touches[0].clientY,
                      }));
                  }),
                  $(document).on('touchend.lightbox pointerup.lightbox', y, (t) => {
                    var e, i;
                    const s = g === t.target,
                      n = null != (e = t.clientX) ? e : t.changedTouches[0].clientX,
                      o = null != (i = t.clientY) ? i : t.changedTouches[0].clientY,
                      a = Math.sqrt((f.x - n) ** 2 + (f.y - o) ** 2) < 5;
                    if (!s || !a) return;
                    const r = $(t.currentTarget),
                      l = r.closest(v),
                      h = r.attr('data-lightbox'),
                      d = '1' === r.closest('[data-loop]').attr('data-loop'),
                      c = !l.attr('data-lightbox-single'),
                      u = l
                        .find(y)
                        .filter((t, e) => {
                          const i = $(e).closest(v),
                            s = i.is(l),
                            n = i.closest('.swiper-slide-duplicate').length;
                          return s && !n;
                        })
                        .toArray()
                        .map((t) => {
                          let e;
                          const i = $(t),
                            s = i.attr('data-lightbox') || i.attr('src') || i.attr('href'),
                            n = i.attr('data-sub-html');
                          return (
                            (e = n
                              ? i.find(n).html()
                              : i.attr('alt') || i.find('img').attr('alt') || ''),
                            d && i.closest('[data-cloned]').length ? null : { src: s, subHtml: e }
                          );
                        })
                        .filter((t) => t && t.src),
                      p = u.findIndex((t) => t.src === h) || 0;
                    this.openGallery({ index: p, dynamicEl: u, enableSlide: c, loop: d });
                  }),
                  $(window).on('popstate.lightbox', () => {
                    const t = window.history.state || {};
                    t.lg ? this.openGallery(t.lg) : this.closeGallery();
                  });
              }
              openGallery(t = {}) {
                if (0 === t.dynamicEl.length || this.isOpened) return;
                (this.isOpened = !0), (this.$lg = $('<div/>'));
                const e = this.$lg,
                  i = {
                    index: 0,
                    dynamicEl: [],
                    dynamic: !0,
                    subHtmlSelectorRelative: !0,
                    getCaptionFromTitleOrAlt: !0,
                    slideEndAnimation: !1,
                    swipeThreshold: 30,
                    counter: !0,
                    closable: !0,
                    download: !1,
                    easing: 'ease-out',
                    hideBarsDelay: 1e3,
                    zoomIcons: !1,
                    actualSize: !1,
                    enableSlide: !0,
                    loop: !0,
                    ...t,
                  };
                i.index <= 0 && (i.index = 0),
                  this.require(() => e.lightGallery(i)),
                  e.on('onBeforeOpen.lg', () => {
                    (this.isOpen = !0), w(i);
                  }),
                  e.on('onBeforeSlide.lg', (t, e, s) => {
                    (i.index = s), w(i);
                  }),
                  e.on('onBeforeClose.lg', () => {
                    window.history.state &&
                      window.history.state.lg &&
                      ((flexbe_cli.lockPopstate = !0),
                      window.history.back(),
                      setTimeout(() => {
                        flexbe_cli.lockPopstate = !1;
                      }, 20)),
                      (this.isOpen = !1);
                  });
              }
              closeGallery() {
                this.isOpened = !1;
                const t = this.$lg && this.$lg.data('lightGallery');
                t && t.destroy();
              }
            }.create(),
          ),
          this.setGlobalInstance('sliderControl', S.create()),
          this.setGlobalInstance(
            'animation',
            class {
              static create() {
                return new this();
              }
              constructor() {
                (this.animationsData = []),
                  (this.interactionInstances = []),
                  (this.responsiveMode = flexbe_cli.resize.responsiveMode),
                  this.init();
              }
              async init() {
                this.findAnimations(),
                  this.animationsData.length &&
                    (await this.require(), this.findAnimations(), this.createAnimations()),
                  this.bindEvents();
              }
              bindEvents() {
                window.addEventListener('resized', () => {
                  const t = flexbe_cli.resize.responsiveMode;
                  t !== this.responsiveMode && ((this.responsiveMode = t), this.updateAnimations());
                }),
                  flexbe_cli.is_admin &&
                    flexbe_cli.events.on('hideShowUI', (t) => {
                      'preview' === t
                        ? (this.findAnimations(), this.createAnimations())
                        : this.destroyAnimations();
                    });
              }
              findAnimations() {
                (this.animationsData = []),
                  $('[data-flexbe-animations]').each((t, e) => {
                    const i = JSON.parse(e.getAttribute('data-flexbe-animations'));
                    i.forEach((t) => {
                      t.element = e;
                    }),
                      i && i.length && this.animationsData.push(...i),
                      flexbe_cli.is_admin && e.removeAttribute('data-flexbe-animations');
                  });
              }
              async require() {
                await new Promise((t) =>
                  flexbe_cli.require(['/_s/lib/interactivity/index.min.js'], () => t(!0)),
                );
              }
              createAnimations() {
                flexbe_cli.run.is_preview &&
                  this.animationsData.forEach(async (t) => {
                    var e;
                    const i =
                      null == t || null == (e = t.responsive) ? void 0 : e[this.responsiveMode];
                    if (i && i.enabled) {
                      var s;
                      const e =
                          (null == t || null == (s = t.responsive) ? void 0 : s[i.inherit]) || i,
                        n = t.element.closest('.wait-animation'),
                        o = t.element.closest('.animation--slide_up'),
                        a = 'scroll' === e.interactionType && e.interactionSettings.fixed;
                      o && a && Q.stopTransition(n);
                      const r = await Z.create({
                        id: t.id,
                        element: t.element,
                        ...e,
                        normalizeOptions: (t) => ({
                          ...t,
                          steps: t.steps.map((t) => {
                            const e = { ...t };
                            return (
                              t.animationParams.skewEnabled ||
                                (delete e.animationParams.skewX, delete e.animationParams.skewY),
                              t.animationParams.clipPathEnabled ||
                                delete e.animationParams.clipPath,
                              e
                            );
                          }),
                        }),
                      });
                      this.interactionInstances.push(r),
                        $(n)
                          .off('flexbe-transition-end')
                          .one('flexbe-transition-end', async () => {
                            r.updateOffsetBound();
                          });
                    }
                  });
              }
              updateAnimations() {
                flexbe_cli.run.is_preview && (this.destroyAnimations(), this.createAnimations());
              }
              destroyAnimations() {
                this.interactionInstances.forEach((t) => Z.remove(t)),
                  (this.interactionInstances = []);
              }
            }.create(),
          ),
          flexbe_cli.events.on('entity_event.componentsInit', (t) => {
            if (!(t && t.type && t.core && t.core.id)) return;
            const e = t.core;
            'init' === t.type || ('update' === t.type && t.params.templateRendered)
              ? this.initComponents({ core: e, reason: t.type })
              : 'onDestroy' === t.type &&
                Array.isArray(et[e.id]) &&
                (et[e.id].forEach((t) => t.destroy()), (et[e.id] = []));
          }),
          $(window)
            .off('load.core_components')
            .one('load.core_components', () => {
              (Object.values(et) || []).forEach((t) => {
                t.forEach((t) => t._onPageLoad());
              });
            }),
          $(window)
            .off('resized.core_components')
            .on('resized.core_components', () => {
              (Object.values(et) || []).forEach((t) => {
                t.forEach((t) => t._onWindowResize());
              });
            }),
          flexbe_cli.events
            .off('hideShowUI.core_components')
            .on('hideShowUI.core_components', (t) => {
              (Object.values(et) || []).forEach((e) => {
                e.forEach((e) => e._onHideShowUI(t));
              });
            });
      },
      getInstances: (t) => et[st(t)] || [],
      initComponents({ core: t, reason: e }) {
        const { $area: s, components: n } = t,
          o = st(t);
        'update' === e && Array.isArray(et[o]) && et[o].forEach((t) => t.destroy()), (et[o] = []);
        const a = n.map((t) => `[data-component="${t.is}"]`).join(', ');
        if (a) {
          s.find(a)
            .addBack(a)
            .toArray()
            .forEach(
              i((i) => {
                this.initComponent(i, t, e);
              }),
            );
        }
      },
      initComponent(t, e, i = 'init') {
        e = e || t.closest('[data-id]')._core;
        let s = t.componentInstance;
        if ((s && 'update' === i && s.destroy(), s)) {
          if ('init' === i) return nt(e, s), s;
          'update' === i && s.destroy();
        }
        const n = String(t.getAttribute('data-component')).trim(),
          o = e.components.find((t) => t.is === n) || this.getComponentClass(n);
        return (
          'function' == typeof o &&
            ((s = new o({ component: t, core: e, reason: i })),
            (t.componentInstance = s),
            s._onInit(),
            nt(e, s)),
          s
        );
      },
    };
  flexbe_cli.components = ot;
  const at = 2560;
  function rt() {
    var t;
    const e =
      ('object' == typeof flexbe_cli &&
        (null == (t = flexbe_cli.vars) ? void 0 : t._group.images)) ||
      {};
    return {
      lazy: !0,
      lazy_priority: !1,
      avif: !1,
      webp: !1,
      avif_support: e.avif_support,
      webp_support: e.webp_support,
      slow_network: !1,
      quality_map: { jpg: 70, webp: 70, avif: 55 },
    };
  }
  async function lt(t) {
    return new Promise((e, i) => {
      const s = new Image(),
        n = () => {
          e(s),
            setTimeout(() => {
              'function' == typeof s.remove && s.remove();
            }, 10);
        };
      'decode' in s && !/\.svg/.test(t)
        ? ((s.src = t), s.decode().then(n).catch(i))
        : ((s.onerror = i), (s.onload = n), (s.src = t));
    });
  }
  function ht(t, e) {
    const i = e.avif_support,
      s = e.webp_support,
      n = e.avif,
      o = e.webp;
    let a = t.ext;
    return (
      i && n
        ? (a = 'avif')
        : s && o
        ? (a = 'webp')
        : 'webp' === t.ext && (a = s ? 'webp' : t.transparent ? 'png' : 'jpg'),
      a
    );
  }
  function dt(t) {
    if (
      ('string' == typeof t &&
        (t = (function (t) {
          if ('string' != typeof t) return t;
          t = t.replace(/(\/img\/[\d_q]+)\/[\w-]+(\.\w{3,4})/i, '$1$2');
          let [, e, i, s, n] = t.match(/\/img\/(\d+)_?(\d+)?_?q?(\d+)?\.(\w{3,4})/i) || [];
          return (
            (i = i ? +i : 0),
            (s = s ? +s : 'none'),
            { id: e, ext: n, name: `${e}.${n}`, size: i, quality: s }
          );
        })(t)),
      !t || 'object' != typeof t)
    )
      return {};
    let e = t.img_ext || t.ext;
    const i = t.img_id || t.id,
      s = t.img_name || t.name;
    (e && 'false' !== e) ||
      (e = s
        ? (function (t) {
            const e = String(t).match(/\.(jpg|jpeg|png|gif|svg|bmp|webp)$/i);
            return e && e[1] ? e[1] : '';
          })(s)
        : 'jpg');
    const n = t.img_border || t.border;
    return {
      id: i,
      ext: e,
      average: (function (t) {
        return 'transparent' !== t ? t : '#000000';
      })(t.img_average || t.average),
      preview: t.img_preview || t.preview || '',
      width: t.img_width || t.width || 0,
      height: t.img_height || t.height || 0,
      proportion: +(+t.img_proportion || +t.proportion || 0).toFixed(2),
      border: n,
      animated: t.img_animated || t.animated || 'gif' === e,
      transparent: t.img_transparent || t.transparent || 0,
    };
  }
  function ct(t, e = 0, i) {
    return (function (t, e = null, i = null) {
      var s;
      i = { ...rt(), ...i };
      const { id: n, ext: o } = t;
      if (!n) return '';
      e || 'webp' !== t.ext || i.webp_support || (e = Math.min(t.width || at, at));
      const a = null != (s = t.animated) ? s : 'gif' === o,
        r = `/img/${n}.${o}`;
      if (!e || a || 'svg' === o) return r;
      const l = ht(t, i),
        h = i.slow_network && pt();
      let d = i.quality_map;
      switch ((h && (d = { jpg: 50, webp: 50, avif: 45 }), l)) {
        case 'png':
          return `/img/${n}_${e}.png`;
        case 'avif':
        case 'webp':
        case 'jpg':
          return `/img/${n}_${e}_q${d[l]}.${l}`;
        case 'gif':
        default:
          return r;
      }
    })(dt(t), 'number' == typeof e ? Math.round(e) : e, i);
  }
  async function ut(t) {
    let e = t,
      i = +t.proportion;
    if ((i && (i < 2 || (i < 5 && i % 1 > 0)) && (i *= 100), 'string' == typeof e || !i)) {
      'object' == typeof e && (e = ct(t, 50));
      const s = await lt(e);
      i = (s.naturalHeight / s.naturalWidth) * 100;
    }
    return i;
  }
  function pt() {
    var t;
    return '4g' !== ((null == (t = navigator.connection) ? void 0 : t.effectiveType) || '4g');
  }
  async function mt(t, e, i) {
    i = { ...rt(), ...i };
    const s = t.width || 0,
      n = t.img_scale || t.scale || 'cover',
      o = t.img_type || t.type || 'background',
      a = e.height / e.width,
      r = (await ut(t)) / 100,
      l =
        i.slow_network && pt()
          ? Math.min(1.5, window.devicePixelRatio)
          : Math.min(2, window.devicePixelRatio),
      h = ht(t, i);
    let d, c;
    return (
      'image' === o || (a > r && 'contain' === n) || (a < r && 'cover' === n)
        ? ((d = e.width), (c = d * r))
        : ((c = e.height), (d = c / r)),
      l > 1 && ((d *= l), (c *= l)),
      i.sizes &&
        ((d = (function (t, e) {
          let i = (e = e.sort((t, e) => e - t))[0];
          return (
            e.forEach((e) => {
              t < i && t <= e && (i = e);
            }),
            i
          );
        })(d, i.sizes)),
        (c = d * r)),
      d <= 150 && /webp|jpg/.test(h) && ((d = (d / l) * 2), (c = d * r)),
      s && d > s && ((d = s), (c = d * r)),
      d > at && ((d = at), (c = d * r)),
      { width: Math.ceil(d), height: Math.ceil(c) }
    );
  }
  const gt = new WeakMap(),
    ft = (t) => {
      const { is: e, component: i } = t;
      gt.has(i) || gt.set(i, Math.floor(999999999 * Math.random()));
      return `.component-${e}-${gt.get(i)}`;
    };
  class vt {
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
      const t = ft(this);
      this.core.$area.on(`tween${t}`, (t) => this._syncStates(t.detail)),
        this.core.$area.on(`open${t}`, (t) => this._onOpen(t.detail)),
        this.core.$area.on(`close${t}`, (t) => this._onClose(t.detail));
    }
    _clearEvents() {
      const t = ft(this);
      this.core.$area.off(t);
    }
    _syncStates({ force: t = !1 } = {}) {
      const e = this.component.offsetWidth,
        i = this.component.offsetHeight,
        s = null == this.componentWidth || null == this.componentHeight,
        n = this.core.isVisible && !(!e && !i),
        o = this.core.inBeside && n,
        a = this.core.inScreen && n,
        r = this.core.inView && n,
        l = this.core.inFocus && n,
        h = this.componentWidth !== e,
        d = this.componentHeight !== i,
        c = t || (n && !s && (h || d));
      n && ((this.componentWidth = e), (this.componentHeight = i)),
        n !== this.isVisible && this._onVisible({ state: n }),
        c && this._onResize({ force: t }),
        o !== this.inBeside && this._onBeside({ state: o }),
        a !== this.inScreen && this._onScreen({ state: a }),
        r !== this.inView && this._onView({ state: r }),
        l !== this.inFocus && this._onFocus({ state: l });
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
  vt.is = null;
  class yt {
    constructor(t, e, i = 'parallax', s = null) {
      (this.id = t),
        (this.pending = !1),
        (this.visible = !1),
        (this.imgSize = { w: 0, h: 0 }),
        (this.overlay = $('.overlay', e).get(0)),
        (this.canvas = $('canvas', e).get(0)),
        (this.offScreen = document.createElement('canvas')),
        (this.offCtx = this.offScreen.getContext('2d', { alpha: !1 })),
        (this.ctx = this.canvas.getContext('2d', { alpha: !1 })),
        (this.img = document.createElement('img')),
        (this.overlayOpacity = +this.overlay.getAttribute('data-opacity')),
        (this.factor = 'parallax' === i || 'parallax-fade' === i ? 0.3 : 0),
        (this.zoomRatio = 'zoom' === i || 'zoom-return' === i ? 0.2 : 0),
        (this.zoomType = 'zoom' === i || 'zoom-return' === i ? 2 : 0),
        (this.zoomD = 'zoom' === i ? 0.5 : 'zoom-return' === i ? 1 : 0),
        (this.fadeout = 'parallax-fade' === i ? 1 : 0),
        this.dispatchEvents(),
        (this.position = { x: +s.x.replace('%', '') / 100, y: +s.y.replace('%', '') / 100 }),
        (this.img.onload = () => {
          (this.loaded = !0),
            (this.imgSize = {
              w: this.img.width,
              h: this.img.height,
              r: this.img.height / this.img.width,
            }),
            this.render(),
            setTimeout(() => {
              $(this.canvas).addClass('ready');
            }, 30);
        }),
        (this.img.src = s.url);
    }
    dispatchEvents() {
      $(window)
        .off(`scroll.bg_${this.id}`)
        .on(`scroll.bg_${this.id}`, () => {
          this.pending || flexbe_cli.scroll.skip || this.updateView();
        }),
        $(window)
          .off(`resized.bg_${this.id}`)
          .on(`resized.bg_${this.id}`, () => {
            this.render();
          }),
        flexbe_cli.events
          .off(`entity_render.bg_${this.id}`)
          .on(`entity_render.bg_${this.id}`, (t) => {
            t.styleRendered &&
              t.entity &&
              t.entity.id === this.id &&
              ((this.overlayOpacity = t.entity.data.background.opacity / 100),
              this.pending || this.updateView());
          }),
        flexbe_cli.events
          .off(`layout_change.bg_${this.id}`)
          .on(`layout_change.bg_${this.id}`, () => {
            this.render();
          });
    }
    toggleRendering(t) {
      if ('boolean' != typeof t) return !1;
      t !== this.visible && (this.visible = t);
    }
    getCosPoint(t, e, i = 1) {
      return 1 - t > i && (t = i), (1 - Math.cos(Math.PI * t * e)) / 2;
    }
    getZoomCoords(t) {
      let e = 0;
      1 === this.zoomType
        ? (e = t)
        : -1 === this.zoomType
        ? (e = 100 - t)
        : 2 === this.zoomType && (e = 100 - 100 * this.getCosPoint(0.01 * t, 2, this.zoomD));
      const i = { ratio: (this.zoomRatio / 100) * e };
      return (
        (i.w = this.blSize.w * (1 + i.ratio)),
        (i.h = this.blSize.h * (1 + i.ratio)),
        (i.x = (i.w - this.canvas.width) / 2),
        (i.y = (i.h - this.blSize.h) / 2),
        i
      );
    }
    draw(t, e) {
      let i;
      if (
        (this.fadeout &&
          (i = 1 - (1 - this.overlayOpacity) * this.getCosPoint(0.01 * e, 2, this.fadeout)),
        this.zoomRatio)
      ) {
        const s = this.getZoomCoords(e);
        requestAnimationFrame(() => {
          this.overlay.style.opacity = i;
          try {
            this.ctx.drawImage(
              this.offScreen,
              Math.ceil(-1 * s.x),
              Math.ceil(t * this.factor - this.winSize.h * this.factor - s.y),
              s.w,
              s.h,
            );
          } catch (t) {}
          this.pending = !1;
        });
      } else {
        const e = Math.ceil((t - this.winSize.h) * this.factor);
        requestAnimationFrame(() => {
          this.overlay.style.opacity = i;
          try {
            this.ctx.drawImage(this.offScreen, 0, e);
          } catch (t) {}
          this.pending = !1;
        });
      }
    }
    updateView() {
      if (this.loaded)
        if (
          ((this.pending = !0),
          (this.winSize.y = flexbe_cli.scroll.latest * this.blSize.r),
          this.winSize.y + this.winSize.h > this.blSize.y - 200 &&
            this.winSize.y < this.blSize.y + this.blSize.h + 200)
        ) {
          this.toggleRendering(!0);
          const t = this.winSize.y + this.winSize.h - this.blSize.y,
            e = 100 - (t / (this.blSize.h + this.winSize.h)) * 100;
          this.draw(t, e);
        } else this.toggleRendering(!1), (this.pending = !1);
    }
    render() {
      this.loaded &&
        (this.fitToOuter(),
        this.drawOffscreenImage(this.position.x, this.position.y),
        this.updateView());
    }
    drawOffscreenImage(t, e) {
      (t = 'number' == typeof t ? t : 0.5) < 0 && (t = 0),
        (e = 'number' == typeof e ? e : 0.5) < 0 && (e = 0),
        t > 1 && (t = 1),
        e > 1 && (e = 1);
      const i = this.offCtx.canvas.width,
        s = this.offCtx.canvas.height;
      let n, o, a, r;
      s / i <= this.imgSize.r
        ? ((a = i), (r = i * this.imgSize.r), (n = 0), (o = (r - s) * e * -1))
        : ((r = s), (a = s / this.imgSize.r), (o = 0), (n = (a - i) * t * -1)),
        this.offCtx.drawImage(this.img, n, o, a, r);
    }
    fitToOuter() {
      const t = flexbe_cli.run.is_mobile ? 1 : window.devicePixelRatio,
        e = t >= 1.5 ? 1960 * t : 1960,
        i = this.canvas.getBoundingClientRect(),
        s = i.width,
        n = s <= e ? e : s,
        o = n / s,
        a = o * i.height,
        r = o * (i.top + flexbe_cli.scroll.latest),
        l = flexbe_cli.resize.viewportWidth * o,
        h = flexbe_cli.resize.viewportHeight * o,
        d = Math.max(h, a),
        c = d - (d - Math.min(h, a)) * (a > h ? this.factor : 1 - this.factor);
      (this.blSize = { w: n, h: a, r: o, y: r }),
        (this.winSize = { w: l, h: h }),
        (this.canvas.width = n),
        (this.canvas.height = a),
        (this.offScreen.width = n),
        (this.offScreen.height = this.zoomRatio ? a : Math.ceil(c));
    }
    destroy() {
      (this.destroyed = !0),
        $(window).off(`resized.${this.id}`),
        $(window).off(`scroll.bg_${this.id}`),
        flexbe_cli.events.off(`entity_render.bg_${this.id}`),
        flexbe_cli.events.off(`layout_change.bg_${this.id}`),
        $(this.canvas).removeClass('ready'),
        this.offScreen.remove(),
        this.img.remove();
    }
  }
  class wt {
    constructor(t, e, i) {
      (this.background = t),
        (this.$component = t.$component),
        (this.video = e),
        (this.sectionSize = {
          width: t.owner._core.tween.width,
          height: t.owner._core.tween.height,
        }),
        (this.sectionSize.res = this.sectionSize.width / this.sectionSize.height),
        'function' == typeof i && (this.onStructured = i),
        (this.parallax = this.$component[0].getAttribute('data-parallax')),
        (this.fixed = 'fixed' === this.parallax || 'modal' === this.background.owner._core.id),
        (this.isDesktop = flexbe_cli.run.is_desktop),
        this.initVideo();
    }
    initVideo() {
      (this.$container = $(`<div class="layer0 video-holder ${this.video.type}"/>`)),
        'vimeo' === this.video.type
          ? this.createVimeo()
          : 'youtube' === this.video.type
          ? this.createYoutube()
          : this.createMP4(),
        document.addEventListener('visibilitychange', () => {
          this.background.onscreen &&
            !document.hidden &&
            setTimeout(() => {
              this.play();
            }, 50);
        });
    }
    createVimeo() {
      flexbe_cli.require(['https://player.vimeo.com/api/player.js'], () => {
        (this.$videoElement = $(
          `<iframe src="https://player.vimeo.com/video/${this.video.id}?muted=1&controls=0&autopause=0&loop=1&autoplay=1&background=1" width="640" height="360" frameborder="0"></iframe>`,
        )),
          this.insertVideo(),
          (this.vPlayer = new window.Vimeo.Player(this.$videoElement[0])),
          this.getVimeoResolution()
            .then((t) => ((this.video.size = { res: t.width / t.height, ...t }), this.resize(), !0))
            .catch(() => {}),
          this.play();
      });
    }
    createYoutube() {
      const t = {
        videoId: this.video.id,
        playerVars: {
          cc_load_policy: 0,
          iv_load_policy: 3,
          autoplay: 1,
          modestbranding: 1,
          branding: 0,
          wmode: 'opaque',
          rel: 0,
          mute: 1,
          disablekb: 1,
          color: 'white',
          controls: 0,
          showinfo: 0,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            (this.$videoElement = this.$container.find('iframe')),
              this.youtubeGetResolution(),
              this.resize(),
              this.play();
          },
          onStateChange: (t) => {
            1 !== t.data || this.videoIsLoaded
              ? 0 === t.data && this.play()
              : ((this.videoIsLoaded = !0),
                this.videoIsResized &&
                  (this.$component.delay(100).addClass('video-loaded'), (this.executed = !0)));
          },
        },
      };
      if (window.YT || window.onYouTubeIframeAPIReady)
        if (window.onYouTubeIframeAPIReady)
          window.youtubeBGQuae.push(() => {
            const e = $('<div></div>');
            this.insertVideo(e), (this.yPlayer = new window.YT.Player(e[0], t));
          });
        else {
          const e = $('<div></div>');
          this.insertVideo(e), (this.yPlayer = new window.YT.Player(e[0], t));
        }
      else
        (window.onYouTubeIframeAPIReady = () => {
          window.youtubeBGQuae.forEach((t) => {
            t();
          }),
            (window.youtubeBGQuae = null),
            (window.onYouTubeIframeAPIReady = null);
        }),
          (window.youtubeBGQuae = []),
          window.youtubeBGQuae.push(() => {
            const e = $('<div></div>');
            this.insertVideo(e), (this.yPlayer = new window.YT.Player(e[0], t));
          }),
          flexbe_cli.require(['https://www.youtube.com/iframe_api']);
    }
    createMP4() {
      (this.$videoElement = $(
        `\n            <video src="${
          flexbe_cli.is_screenshoter ? '' : this.video.url
        }"\n                   controlslist="nodownload"\n                   loop="true"\n                   muted="true"\n                   autoplay="true"\n                   playsinline="true"\n                   disablePictureInPicture\n                   pip="false"\n            ></video>\n        `,
      )),
        (this.$videoElement[0].disablePictureInPicture = !0),
        this.insertVideo(),
        (this.$videoElement[0].oncanplay = () => {
          setInterval(() => {
            (this.videoIsLoaded = !0),
              this.videoIsResized && this.$component.delay(100).addClass('video-loaded');
          }, 50);
        }),
        this.$videoElement.on('loadeddata', () => {
          (this.video.size = { res: this.$videoElement.width() / this.$videoElement.height() }),
            this.resize();
        });
    }
    getVimeoResolution() {
      const t = this.vPlayer;
      let e = 0;
      return (function i() {
        return Promise.all([t.getVideoWidth(), t.getVideoHeight()]).then((t) => {
          const [s, n] = t;
          return (s / n < 2.5 && s / n > 0.4) || 3 === e
            ? { width: s, height: n }
            : ((e += 1), i());
        });
      })();
    }
    youtubeGetResolution() {
      const t = this.$videoElement.attr('width'),
        e = this.$videoElement.attr('height');
      return (this.video.size = { width: t, height: e, res: t / e }), this.video.size;
    }
    insertVideo(t) {
      this.$container.append(t || this.$videoElement),
        this.$component.prepend(this.$container),
        this.onStructured && this.onStructured(this.$container);
    }
    resize() {
      if (this.video && this.video.size)
        if (
          (this.$videoElement.width(this.$videoElement.height() * this.video.size.res), this.fixed)
        ) {
          const t = {
            width: flexbe_cli.resize.viewportWidth,
            height: flexbe_cli.resize.viewportHeight,
          };
          this.isDesktop || ((t.height += 60), (t.width += 60)),
            (t.res = t.width / t.height),
            this.video.size.res > t.res
              ? (this.$videoElement.css({ height: `${t.height}px` }),
                this.$videoElement.css({ width: t.height * this.video.size.res + 'px' }))
              : (this.$videoElement.css({ width: `${t.width}px` }),
                this.$videoElement.css({ height: t.width / this.video.size.res + 'px' }));
        } else {
          (this.sectionSize = { width: this.$component.width(), height: this.$component.height() }),
            (this.sectionSize.res = this.sectionSize.width / this.sectionSize.height);
          const t = flexbe_cli.resize.viewportWidth / flexbe_cli.resize.viewportHeight;
          if (
            this.video.size.res > this.sectionSize.res ||
            (t < this.video.size.res && this.parallax)
          ) {
            const t = this.$container.height();
            this.$videoElement.css({ height: `${t}px` }),
              this.$videoElement.css({ width: t * this.video.size.res + 'px' });
          } else {
            const t = this.$container.width();
            this.$videoElement.css({ width: `${t}px` }),
              this.$videoElement.css({ height: t / this.video.size.res + 'px' });
          }
        }
      (this.videoIsResized = !0),
        this.videoIsLoaded && this.$component.delay(100).addClass('video-loaded');
    }
    play() {
      if ('vimeo' === this.video.type) {
        const t = setInterval(() => {
          this.vPlayer &&
            this.vPlayer.play &&
            (setTimeout(() => {
              this.vPlayer.play(),
                (this.videoIsLoaded = !0),
                this.videoIsResized && this.$component.delay(100).addClass('video-loaded');
            }, 50),
            clearInterval(t));
        }, 10);
      } else if ('youtube' === this.video.type) {
        const t = setInterval(() => {
          this.yPlayer && this.yPlayer.playVideo && (this.yPlayer.playVideo(), clearInterval(t));
        }, 10);
      } else
        this.$videoElement &&
          this.$videoElement[0] &&
          this.$videoElement[0].pause &&
          (this.$videoElement[0].play(),
          $(document).one('touchstart.video-bg', () => {
            this.$videoElement[0].play();
          }));
    }
    pause() {
      'vimeo' === this.video.type && this.vPlayer
        ? this.vPlayer.pause()
        : 'youtube' === this.video.type && this.yPlayer && this.yPlayer.pauseVideo
        ? this.yPlayer.pauseVideo()
        : this.$videoElement &&
          this.$videoElement[0] &&
          this.$videoElement[0].pause &&
          this.$videoElement[0].pause();
    }
  }
  const bt = [800, 1366, 1920, 2560];
  class $t extends vt {
    constructor(...t) {
      var e;
      super(...t);
      const { $component: i } = this,
        s = i.data();
      (this.data = {
        type: s.type || 'color',
        parallax: s.parallax || 0,
        video: s.video || !1,
        videoType: s.videoType || 'color',
        infinityVideo: null != (e = s.infinityVideo) && e,
        mobileVideoEnabled: s.mobileVideoEnabled || !1,
        videoParallaxFactor: 0.6,
        hasImagePlaceholder: !!s.hasPlaceholder,
        imageLoadingOptions: flexbe_cli.vars._group.images,
        isLazyLoading: !!s.lazy,
        isImgLoaded: !!s.loaded,
      }),
        (this.image = {
          url: null,
          id: s.imgId,
          ext: s.imgExt,
          x: s.imgX,
          y: s.imgY,
          proportion: s.imgProportion,
          width: s.imgWidth,
          animated: s.imgAnimated,
          transparent: s.imgTransparent,
          scale: 'cover',
          type: 'background',
          original: !!s.imgOriginal,
        });
    }
    async onInit() {
      this.$component.on('setImage', async () => {
        if (this.isVisible && !this.isImgLoading && !this.data.isImgLoaded) {
          ('image' === this.data.type ||
            ('video' === this.data.type && 'image' === this.data.videoType)) &&
            (await this.loadImage());
        }
      });
    }
    onScreen({ state: t }) {
      this.videoInstance &&
        (this.data.infinityVideo || (t ? this.videoInstance.play() : this.videoInstance.pause())),
        (this.onscreen = t),
        t && !this.played && this.playVideo();
    }

    onResize() {
      this.bgEffect && setTimeout(() => this.bgEffect.render(), 100),
        'video' === this.data.type &&
          (this.videoInstance
            ? (this.videoInstance.resize(),
              setTimeout(() => {
                this.videoInstance.resize();
              }, 150),
              this.data.parallax &&
                this.fixHolder &&
                this.setParallax &&
                setTimeout(() => {
                  this.fixHolder(), this.setParallax();
                }, 100))
            : this.fixHolder && this.fixHolder());
    }
    async loadImage() {
      this.isImgLoading = !0;
      const t = { width: this.componentWidth, height: this.componentHeight },
        { width: e } = this.image.original
          ? { width: 0 }
          : await mt(this.image, t, { ...this.data.imageLoadingOptions, sizes: bt });
      (this.image.url = ct(this.image, e, this.data.imageLoadingOptions)),
        this.data.hasImagePlaceholder && (await lt(this.image.url)),
        this.setImage(this.image.url);
    }
    setImage(t) {
      this.$component.find('.image-holder__image').css('background-image', `url(${t})`),
        this.$component.addClass('image-loaded'),
        (this.isImgLoading = !1),
        (this.data.isImgLoaded = !0);
    }
    imageParallaxInit() {
      if ('image' !== this.data.type || !this.data.parallax || flexbe_cli.is_service) return;
      const { owner: t, $component: e, data: i, image: s } = this,
        n = (t._core && t._core.id) || t.getAttribute('data-id');
      'object' == typeof t._bgEffects && t._bgEffects.destroy(),
        'fixed' !== this.data.parallax &&
          ((t._bgEffects = new yt(n, e, i.parallax, s)), (this.bgEffect = t._bgEffects));
    }
    videoParallaxInit() {
      if (
        'video' !== this.data.type ||
        'parallax' !== this.data.parallax ||
        !this.owner._core ||
        flexbe_cli.is_service
      )
        return;
      const t = $('.image-holder, .video-holder', this.$component),
        e = this.owner._core;
      let i = !1;
      const s = () => Math.max(flexbe_cli.resize.viewportHeight, e.tween.height) + 60,
        n = () => {
          t.css('height', `${s()}px`);
        },
        o = () => {
          const i = e.tween.start;
          let n =
            1 - (1 - this.data.videoParallaxFactor) * (s() / flexbe_cli.resize.viewportHeight);
          n < 0.1 && (n = this.data.videoParallaxFactor / 2);
          const o = parseInt((flexbe_cli.scroll.latest - i) * n * -1, 10) || 0;
          t.css('transform', `translate3d(0, ${o}px, 0)`);
        };
      n(),
        o(),
        e.$area.off('fixHeaderHeight.component-bg').on('fixHeaderHeight.component-bg', () => {
          o();
        }),
        $(window)
          .off(`scroll.component-bg-${e.id}`)
          .on(`scroll.component-bg-${e.id}`, () => {
            !i &&
              this.onscreen &&
              ((i = !0),
              requestAnimationFrame(() => {
                o(), (i = !1);
              }));
          }),
        (this.fixHolder = n),
        (this.setParallax = o);
    }
    playVideo() {
      if (flexbe_cli.run.is_screen_mobile && !this.data.mobileVideoEnabled) return !1;
      this.played = !0;
      const { data: t } = this,
        { video: e } = t;
      return (
        !('video' !== t.type || !e) &&
        !('custom' !== e.type && !e.id) &&
        ((this.videoInstance = new wt(this, e, () => {
          this.videoParallaxInit();
        })),
        !0)
      );
    }
  }
  $t.is = 'background';
  class St extends vt {
    constructor(...t) {
      super(...t),
        (this.$bgElement = this.$component.find('.bg-element__fill').eq(0)),
        (this.$hoverElement = this.$component.find('.bg-element__fill_hover').eq(0)),
        (this.lazy = this.$bgElement.data('lazy')),
        (this.isImgLoaded = this.$bgElement.data('loaded')),
        (this.bgType = this.$bgElement.data('type')),
        (this.hoverType = this.$hoverElement.data('hover-type')),
        (this.hasImagePlaceholder = !!this.$bgElement.data('has-placeholder')),
        (this.imageLoadingOptions = flexbe_cli.vars._group.images);
    }
    async onInit() {
      this.$bgElement.on('setImage', async () => {
        !this.isVisible ||
          this.isImgLoading ||
          this.isImgLoaded ||
          (this.setImageParams(), await this.loadImage());
      });
    }
    async onBeside({ state: t, first: e }) {
      t &&
        e &&
        (this.lazy &&
          'image' === this.bgType &&
          !this.isImgLoaded &&
          (this.setImageParams(), await this.loadImage()),
        'image' === this.hoverType && (this.setHoverImageParams(), await this.loadHoverImage()),
        this.dispatchEffects());
    }
    onWindowResize() {
      this.dispatchEffects();
    }
    getComponentSize() {
      return { width: this.componentWidth, height: this.componentHeight };
    }
    dispatchEffects() {
      var t, e;
      const i = (t) => [!0, 1, 'true', '1'].includes(t),
        s = 'mobile' === flexbe_cli.resize.responsiveMode,
        n = i(null == (t = this.$component.data('effects-desktop')) || t),
        o = i(null == (e = this.$component.data('effects-mobile')) || e),
        a = s ? o : n;
      this.$component.toggleClass('bg-element--hover', a);
    }
    async loadImage() {
      this.isImgLoading = !0;
      const { width: t } = await mt(this.image, this.getComponentSize(), this.imageLoadingOptions),
        e = ct(this.image, t, this.imageLoadingOptions);
      this.hasImagePlaceholder && (await lt(e)),
        this.setImage(this.$bgElement, e),
        (this.isImgLoading = !1),
        (this.isImgLoaded = !0);
    }
    async loadHoverImage() {
      const { width: t } = await mt(
          this.hoverImage,
          this.getComponentSize(),
          this.imageLoadingOptions,
        ),
        e = ct(this.hoverImage, t, this.imageLoadingOptions);
      this.setImage(this.$hoverElement, e);
    }
    setImage(t, e) {
      t.css('background-image', `url(${e})`), this.$component.addClass('image-loaded');
    }
    setImageParams() {
      const { $bgElement: t } = this;
      this.image = {
        id: t.data('id'),
        ext: t.data('ext'),
        width: t.data('width'),
        animated: t.data('animated'),
        transparent: t.data('transparent'),
        proportion: t.data('proportion'),
        type: 'background',
        scale: 'cover',
      };
    }
    setHoverImageParams() {
      const { $hoverElement: t } = this;
      this.hoverImage = {
        id: t.data('id'),
        ext: t.data('ext'),
        width: t.data('width'),
        animated: t.data('animated'),
        transparent: t.data('transparent'),
        proportion: t.data('proportion'),
        type: 'background',
        scale: 'cover',
      };
    }
  }
  St.is = 'backgroundElement';
  class xt {
    constructor(t, e) {
      (e = { init: !0, targets: 'span', ...e }),
        (this.options = e),
        (this.pagination = t),
        (this.tag = this.options.tag),
        (this.filled = !1),
        (this.states = ['hidden', 'prev-prev', 'prev', 'main', 'next', 'next-next', 'hidden']),
        this.init();
    }
    init() {
      this.bindEvents(), this.options.init && this.render({ states: this.states, force: !0 });
    }
    bindEvents() {
      const { tag: t, pagination: e, options: i } = this,
        s = $(e);
      'function' == typeof i.onClick &&
        s.off('click').on('click', t, (t) => {
          const e = $(t.currentTarget),
            s = +e.siblings('[data-state="main"]').attr('data-index'),
            n = +e.attr('data-index') - s;
          i.onClick(n);
        });
    }
    move(t) {
      const e = this.states,
        i = this.filled && t;
      if ((!i || this.inAnimate !== t) && (this.render({ states: e, force: !0 }), i)) {
        const i = e.map((i, s) => e[s + ('prev' === t ? 1 : -1)] || 'hidden');
        (this.inAnimate = t),
          clearTimeout(this._anim),
          (this._anim = setTimeout(() => {
            this.inAnimate = !1;
          }, 200)),
          requestAnimationFrame(() => {
            this.render({ states: i });
          });
      }
    }
    render({ states: t, force: e } = {}) {
      const i = $(this.pagination),
        s = this.tag;
      if (((this.filled = !0), e)) {
        const e = t.reduce((t) => `${t}<${s}></${s}>`, '');
        i.html(e);
      }
      i.addClass('swiper-pagination-bullets-dynamic'),
        i.find(s).each((e, i) => {
          const s = $(i),
            n = t[e] || 'hidden',
            o = ['swiper-pagination-bullet'];
          'main' === n && o.push('swiper-pagination-bullet-active'),
            'hidden' === n
              ? o.push('swiper-pagination-bullet-hidden')
              : o.push(`swiper-pagination-bullet-active-${n}`),
            s.attr('class', o.join(' ')),
            s.attr('data-state', n),
            s.attr('data-index', e);
        });
    }
  }
  const Ct = Symbol('ref'),
    At = 'detached';
  function _t(t, e, i, s = {}) {
    const n = $(t),
      o = e ? `[data-component="${e}"]` : '[data-component]';
    n.is(o) && n.trigger(i, s),
      $(t)
        .find(o)
        .each((t, e) => {
          $(e).trigger(i, s);
        });
  }
  function It(e = []) {
    e.forEach(
      t((t) => {
        _t(t, 'image', 'setImage');
      }),
    );
  }
  function Et(e) {
    (e.params.virtualTranslate = !0),
      (e.params.cssMode = !1),
      (e.params.slidesPerGroup = 1),
      (e.params.spaceBetween = 0),
      e.on(
        'init',
        t(() => {
          $(e.el).addClass('swiper-effect-fade');
        }),
      ),
      e.on('setTranslate', (t, e) => {
        const { slides: i, size: s } = t;
        if ('fade' !== t.params.effect || Number.isNaN(e)) return;
        $(t.wrapperEl).css('transform', '');
        for (let n = 0; n < i.length; n += 1) {
          const i = t.slides.eq(n),
            o = -(n * s + e) / s,
            a = Math.min(Math.max(1 - Math.abs(o), 0), 1),
            r = `-${100 * n}%`;
          i.css({ left: r, opacity: a });
        }
        let n = !1;
        t.slides.transitionEnd(() => {
          n ||
            !t ||
            t.destroyed ||
            ((n = !0), (t.animating = !1), $(t.wrapperEl).trigger('transitionend'));
        });
      });
  }
  class Pt extends vt {
    constructor(...t) {
      super(...t);
      const { component: e, $component: i } = this;
      (this.mode = e.getAttribute('data-mode')),
        'slider' === this.mode &&
          ((this.require = ['/_s/lib/swiper8/dist/swiper-bundle.min.js?v847']),
          (this.$cardsRoot = i.closest('.flexbe-cards-root')),
          (this.$slider = this.$cardsRoot.find('.swiper')),
          (this.$pagination = this.$cardsRoot.find('.slider-pagination--cards')),
          (this.$navigation = this.$cardsRoot.find('.slider-button--cards')),
          (this.$swiperHelper = this.$cardsRoot.find('.swiper-mobile-helper')),
          (this.$flexbeCardsSlider = this.$cardsRoot.find('.flexbe-cards-slider')),
          (this.$flexbeCards = this.$cardsRoot.find('.flexbe-cards')),
          (this.$flexbeCard = this.$cardsRoot.find('.flexbe-card')),
          (this.sliderResponsive = this.$slider.attr('data-slider-responsive-mode')));
    }
    onLoad() {
      this.sliderDisposer(), this.core.inView && this.initSwipeAnimation();
    }
    onBeside({ state: t }) {
      t && this.sliderDisposer();
    }
    onScreen({ state: t }) {
      t ? this.sliderDisposer() : this.destroySwipeAnimation();
    }
    onView({ state: t }) {
      t &&
        !this.wasView &&
        this.swiper &&
        this.swiper.inited &&
        (this.swiper.update(), this.checkSlidesVisibility(), this.checkNavigationState()),
        this.toggleAutoplay(t),
        t && this.isLoaded && this.initSwipeAnimation();
    }
    onResize() {
      if ((this.sliderDisposer(), this.swiper)) {
        const t = this.getAdaptiveSwiperSettings();
        (this.settings = { ...this.settings, ...t }),
          (this.swiper.params = { ...this.swiper.params, ...t }),
          setTimeout(() => {
            this.swiper.update(), this.checkSlidesVisibility();
          }, 10);
      }
    }
    onHideShowUI() {
      this.destroySlider(), this.initSlider();
    }
    sliderDisposer() {
      if ('slider' !== this.mode || !this.isLoaded || !this.core.isVisible) return;
      this.responsiveMode = flexbe_cli.resize.responsiveMode;
      const t = 'mobile' === flexbe_cli.resize.responsiveMode,
        e = this.sliderResponsive,
        i = t ? 'desktop' !== e : 'mobile' !== e;
      i && !this.swiper ? this.initSlider() : !i && this.swiper && this.destroySlider();
    }
    initSlider() {
      if ('slider' === this.mode && !this.swiper && 'undefined' != typeof Swiper) {
        e(() => {
          this.$cardsRoot.addClass('slider-active slider-inited slider-enabled'),
            this.$cardsRoot.removeClass('slider-disabled'),
            this.$flexbeCardsSlider.addClass('swiper-active'),
            this.$flexbeCards.addClass('swiper-wrapper');
        });
        try {
          this.savePropsFromAttributes(),
            this.createSwiperSettings(),
            this.createSwiperInstance(),
            this.createSwiperNavigation(),
            this.createSwiperLoopPagination(),
            this.createSwiperEditorFixes(),
            e(() => {
              this.swiper.init(), e(() => this.toggleAutoplay(this.core.inView));
            });
        } catch (t) {
          console.warn(t);
        }
      }
    }
    destroySlider() {
      'slider' === this.mode &&
        (this.swiper && this.swiper.destroy(),
        (this.swiper = null),
        this.$cardsRoot.removeClass('slider-active slider-inited slider-enabled'),
        this.$cardsRoot.addClass('slider-disabled'),
        this.$flexbeCardsSlider.removeClass('swiper-active'),
        this.$flexbeCards.removeClass('swiper-wrapper'),
        this.$flexbeCard.removeClass('swiper-slide-hidden'));
    }
    initSwipeAnimation() {
      if ('slider' !== this.mode) return;
      'mobile' === flexbe_cli.resize.responsiveMode &&
        'desktop' !== this.sliderResponsive &&
        !this.$swiperHelper.hasClass('show') &&
        setTimeout(() => {
          this.core.inView &&
            (this.$swiperHelper.addClass('show'),
            this.swiper.once('sliderMove', () => {
              this.destroySwipeAnimation();
            }));
        }, 500);
    }
    destroySwipeAnimation() {
      'slider' === this.mode &&
        this.$swiperHelper.hasClass('show') &&
        this.$swiperHelper.removeClass('show');
    }
    savePropsFromAttributes() {
      this.props = {
        totalSlides: +this.$slider.attr('data-count'),
        isOverflow: +this.$slider.attr('data-overflow'),
        autoplayDelay:
          (flexbe_cli.run.is_preview && Math.floor(1e3 * +this.$slider.attr('data-autoplay'))) || 0,
        pagination: this.$pagination.attr('data-type') || !1,
        loop: flexbe_cli.run.is_preview && !!+this.$slider.attr('data-loop'),
        effectDesktop: this.$slider.attr('data-effect'),
        effectMobile: this.$slider.attr('data-effect-mobile'),
        inRowDesktop: +this.$slider.attr('data-cards'),
        inRowMobile: +this.$slider.attr('data-cards-mobile') || 1,
      };
    }
    createSwiperSettings() {
      const t = this.getAdaptiveSwiperSettings(),
        { totalSlides: e, isOverflow: i, autoplayDelay: s, pagination: n } = this.props,
        o = !(e <= t.slidesPerView) && this.props.loop;
      let a = 0;
      if (
        (flexbe_cli.is_admin &&
          ((a = Math.floor($(this.root).data('slide-move')) || 0),
          (a = Math.max(0, Math.min(e - 1, a)))),
        (this.freeSlides = 0),
        o && !i)
      ) {
        const e = this.$slider[0].offsetWidth,
          i = e / t.slidesPerView,
          s = (flexbe_cli.resize.viewportWidth - e) / 2;
        this.freeSlides = Math.ceil(s / i);
      }
      this.settings = {
        autoHeight: !1,
        preloadImages: !1,
        allowClick: !0,
        preventClicks: !1,
        preventClicksPropagation: !1,
        touchStartPreventDefault: !1,
        touchMoveStopPropagation: !1,
        passiveListeners: !0,
        longSwipes: !0,
        longSwipesMs: 150,
        longSwipesRatio: 0.2,
        shortSwipes: !0,
        threshold: 10,
        touchReleaseOnEdges: !0,
        preventInteractionOnTransition: !1,
        loopPreventsSlide: !1,
        simulateTouch: !flexbe_cli.run.isTouch && !flexbe_cli.is_admin,
        maxBackfaceHiddenSlides: 0,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 0,
        resistanceRatio: 0.65,
        initialSlide: a,
        loop: o,
        freeMode: {
          enabled: !0,
          sticky: !0,
          momentum: !0,
          momentumRatio: 1,
          momentumVelocityRatio: 0.1,
        },
        autoplay: !!s && {
          delay: s,
          stopOnLastSlide: !o,
          disableOnInteraction: !0,
          waitForTransition: !0,
        },
        navigation: {},
        pagination: {
          clickable: !0,
          type: o && 'bullets' === n ? 'custom' : n,
          el: this.$pagination[0],
          dynamicBullets: this.$flexbeCard.length > 7,
          dynamicMainBullets: 5,
          renderCustom: () => {},
          formatFractionCurrent: () => this.getGroupIndex() + 1,
          formatFractionTotal: () =>
            Math.ceil(this.props.totalSlides / this.swiper.params.slidesPerView),
        },
        watchSlidesProgress: !0,
        loopedSlides: t.slidesPerView + this.freeSlides,
        ...t,
      };
    }
    getAdaptiveSwiperSettings() {
      const t = 'mobile' === flexbe_cli.resize.responsiveMode,
        e = t ? this.props.inRowMobile : this.props.inRowDesktop;
      let i = t ? this.props.effectMobile : this.props.effectDesktop;
      return (
        e > 1 && (i = 'slide'), { effect: i, speed: 'fade' === i ? 450 : 300, slidesPerView: e }
      );
    }
    createSwiperInstance() {
      this.swiper && (this.swiper.destroy(), (this.swiper = null));
      let e,
        i = !1;
      const s = new Swiper(this.$slider[0], {
        init: !1,
        wrapperClass: 'flexbe-cards',
        slideClass: 'flexbe-card',
        ...this.settings,
      });
      var n;
      'fade' === s.params.effect
        ? Et(s)
        : (((n = s).params.virtualTranslate = !0),
          (n.params.cssMode = !1),
          n.on(
            'init',
            t(() => {
              $(n.el).addClass('swiper-effect-slide');
            }),
          ),
          n.on('setTranslate', (t, e) => {
            if ('slide' !== t.params.effect || Number.isNaN(e)) return;
            const i = $(t.wrapperEl),
              s = $(t.slides),
              n = t.isHorizontal(),
              o = n ? e : 0,
              a = n ? 0 : e;
            flexbe_cli.is_admin
              ? i.css({ position: 'relative', top: `${a}px`, left: `${o}px`, transform: '' })
              : i.css({ transform: `translate3d(${o}px, ${a}px, 0px)` }),
              s.css({ opacity: '', transform: '' });
          }));
      const o = () => {
          const t = this.props.totalSlides > s.params.slidesPerView;
          i ||
            ((i = !0),
            this.$cardsRoot.addClass('slider-inited'),
            this.$slider.addClass('swiper-inited')),
            e !== t &&
              ((e = t),
              this.$cardsRoot.toggleClass('slider-active', t),
              this.$slider.toggleClass('swiper-active', t),
              s.update());
        },
        a = () => {
          if (s.loopedSlides) {
            const t = $(s.slides).filter(`.${s.params.slideDuplicateClass}`),
              e = {};
            t.each((t, i) => {
              const n = $(i),
                o = n.attr('data-swiper-slide-index'),
                a = $(s.slides).eq(s.loopedSlides + +o);
              (e[o] = e[o] ? e[o] + 1 : 1), n.attr('data-cloned', e[o]);
              const r = a.find('[data-action]'),
                l = n.find('[data-action]');
              r.each((t, e) => {
                const i = $(e).data();
                l.eq(t).data(i);
              });
            }),
              flexbe_cli.entity.initArea(t),
              flexbe_cli.components.initComponents({ core: this.core });
          }
        };
      flexbe_cli.is_admin ||
        (s.on('beforeInit', () => {
          !(function (t) {
            const e = flexbe_cli.resize.responsiveMode;
            $(t)
              .find(`[data-hidden="all"], [data-hidden="${e}"]`)
              .toArray()
              .forEach((t) => {
                const e = $('\x3c!--detached--\x3e')[0];
                (e[Ct] = t), $(t).before(e).detach();
              });
          })(this.swiper.el);
        }),
        s.on('destroy', () => {
          !(function (t) {
            const e = document.createNodeIterator(t, NodeFilter.SHOW_COMMENT),
              i = [];
            for (; e.nextNode(); ) {
              const t = e.referenceNode;
              t.textContent === At && t[Ct] && i.push(t);
            }
            i.forEach((t) => {
              const e = t[Ct];
              t.parentNode.replaceChild(e, t);
            });
          })(this.swiper.el);
        })),
        s.on(
          'init',
          t(() => {
            o(), a(), this.checkSlidesVisibility();
          }),
        ),
        s.on(
          'slideChange',
          t(() => {
            this.checkSlidesVisibility();
          }),
        ),
        s.on(
          'resize',
          $.debounce(() => {
            this.swiper && (o(), this.checkSlidesVisibility());
          }, 50),
        );
      let r = !1;
      const l = () => {
          this.$cardsRoot.addClass('swiper-in-interacting'), this.checkSlidesVisibility();
        },
        h = () => {
          this.$cardsRoot.removeClass('swiper-in-interacting'), this.checkSlidesVisibility();
        };
      s.on('sliderFirstMove', () => {
        (r = !0), l();
      }),
        s.on('touchEnd', () => {
          (r = !1), h();
        }),
        s.on('transitionStart', () => {
          r || l();
        }),
        s.on('transitionEnd', () => {
          r || h(), s.realIndex + s.loopedSlides !== s.activeIndex && s.loopFix();
        }),
        this.$slider.on('reduceSliderControls', (t, { state: e = !0 }) => {
          (this.preventAutoplay = !!e),
            this.preventAutoplay && this.toggleAutoplay({ state: !1 }),
            this.$cardsRoot.toggleClass('swiper-reduce-controls', !!e);
        }),
        this.$slider.on('preventSliderMove', (t, { state: e = !0 }) => {
          s.allowTouchMove = !e;
        }),
        (this.swiper = s);
    }
    createSwiperNavigation() {
      const t = this.swiper;
      t.on('init', () => {
        this.checkNavigationState();
      }),
        t.on(
          'resize',
          $.debounce(() => {
            this.swiper && this.checkNavigationState();
          }, 50),
        ),
        t.on('slideChange', () => {
          this._skipSlide || this.checkNavigationState();
        }),
        this.$navigation.on('click', (t) => {
          this[
            'prev' === t.currentTarget.getAttribute('data-direction') ? 'prevSlide' : 'nextSlide'
          ]();
        }),
        this.$slider.on('click.swiper-hidden', '.swiper-slide-hidden', (e) => {
          e.preventDefault(), e.stopPropagation();
          const i = e.currentTarget,
            s = Array.from(t.slides || []).findIndex((t) => t === i),
            n = t.activeIndex,
            o = n - s,
            a = s - (n + t.params.slidesPerView - 1);
          o > 0 ? this.prevSlide(o) : a > 0 && this.nextSlide(a);
        });
    }
    createSwiperLoopPagination() {
      const t = this.swiper;
      let e = !1;
      t.on('paginationRender', () => {
        if (
          (this.$pagination.toggleClass(
            'disabled',
            this.props.totalSlides <= t.params.slidesPerView,
          ),
          this._skipSlide || 'custom' !== t.params.pagination.type)
        )
          return;
        this.customPagination ||
          (this.customPagination = new xt(this.$pagination[0], {
            init: !1,
            tag: 'span',
            onClick: (t) => {
              t < 0 ? this.prevSlide() : t > 0 && this.nextSlide();
            },
          }));
        const i = t.previousIndex,
          s = t.activeIndex,
          n = this.props.totalSlides,
          o = i < s ? 'next' : 'prev';
        (!!(i === s || ('next' === o && i === s - n) || ('prev' === o && i === s + n)) && e) ||
          this.customPagination.move(o),
          (e = !0);
      });
    }
    createSwiperEditorFixes() {
      if (!flexbe_cli.is_admin) return;
      const t = this.swiper;
      t.on('slideChange', () => {
        $(this.root).data('slide-move', t.realIndex);
      });
    }
    checkSlidesVisibility() {
      const t = this.swiper;
      t.updateSlides();
      const e = $(t.slides),
        i = e.slice(t.activeIndex, t.activeIndex + t.params.slidesPerView),
        s = e.not(i);
      s.removeClass('swiper-slide-visible').addClass('swiper-slide-hidden'),
        i.removeClass('swiper-slide-hidden').addClass('swiper-slide-visible'),
        _t(s, !1, 'sliderDeactivate'),
        _t(i, !1, 'sliderActivate');
    }
    checkNavigationState() {
      const t = this.swiper,
        e = t.params.navigation.disabledClass,
        i = this.$navigation,
        s = i.eq(0),
        n = i.eq(1);
      let { isBeginning: o, isEnd: a } = t;
      t.loopedSlides && ((o = !1), (a = !1)),
        i.toggleClass('disabled', this.props.totalSlides <= t.params.slidesPerView),
        s.toggleClass(e, o),
        n.toggleClass(e, a);
    }
    getGroupIndex(t, e, i = !0) {
      const s = this.swiper;
      null == t && (t = s.realIndex),
        e || (e = s.params.slidesPerView || 1),
        i && (s.loopedSlides || e <= 1) && (i = !1);
      const n = Math.ceil(this.props.totalSlides / e);
      let o = Math.floor(t / e);
      if (i) {
        const i = o * e,
          s = t - i > i + e - 1 - t,
          n = t % e != 0 && t + e >= this.props.totalSlides;
        (s || n) && (o += 1);
      }
      return Math.max(0, Math.min(n, o));
    }
    getSlideIndex(t, e) {
      return null == e && (e = this.swiper.params.slidesPerView || 1), t * e;
    }
    toSlide(t, e) {
      const i = this.swiper,
        s = this.getSlideIndex(t, e);
      return i.loopedSlides ? i.slideToLoop(s) : i.slideTo(s);
    }
    prevSlide(t) {
      let e;
      const i = this.swiper;
      t = t ? Math.abs(t) : 1;
      const s = i.activeIndex;
      if (i.loopedSlides) {
        const n = s >= (this.props.isOverflow ? t : t + this.freeSlides);
        s + this.props.totalSlides <= i.slides.length &&
          !n &&
          (this.toggleSkip(!0), i.slideTo(s + this.props.totalSlides, 0)),
          (e = i.activeIndex - t);
      } else e = i.activeIndex - t;
      setTimeout(() => {
        this.toggleSkip(!1), i.slideTo(e);
      }, 5);
    }
    nextSlide(t) {
      let e;
      const i = this.swiper,
        s = i.params.slidesPerView;
      t = t ? Math.abs(t) : 1;
      const n = i.activeIndex,
        o = n + s - 1;
      if (i.loopedSlides) {
        const s = i.slides.length - o - 1 >= (this.props.isOverflow ? t : t + this.freeSlides);
        n - this.props.totalSlides >= 0 &&
          !s &&
          (this.toggleSkip(!0), i.slideTo(n - this.props.totalSlides, 0)),
          (e = i.activeIndex + t);
      } else e = i.activeIndex + t;
      setTimeout(() => {
        this.toggleSkip(!1), i.slideTo(e);
      }, 5);
    }
    toggleSkip(t = !this._skipSlide) {
      (this._skipSlide = !!t), this.$slider.toggleClass('noanimate', this._skipSlide);
    }
    toggleAutoplay(t) {
      if (!this.swiper) return;
      this.preventAutoplay && (t = !1);
      const e = this.swiper,
        i = e.autoplay,
        s = e.params.autoplay || {};
      i && s.enabled && (t && !i.running ? i.start() : t || i.stop());
    }
  }
  Pt.is = 'cards';
  class Ft {
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
        o = [(5 * this.step * this.fractDevider) / this.fractDevider];
      for (let t = 1; t <= 12; t++) {
        const e = 10 ** t * this.step;
        e < n && u(o, e, this.fractDevider);
      }
      let a;
      const r = Math.ceil(
          this.$legend.find(i[0] > i[1] ? '.from' : '.to').width() / Math.max(i[1], i[0]),
        ),
        l = Math.round((0.83 * this.barWidth) / (r * s)),
        h = this.range > 0 ? 1 : -1;
      for (let t = Math.min(l, 10); t >= 3; t--) {
        const e = c(this.step, Math.abs(this.steps), t, o);
        if (e && Number.isInteger(e / this.step) && Number.isInteger(this.range / e)) {
          a = e;
          break;
        }
      }
      if (!a || !Number.isInteger(this.range / (a * h)) || this.range / (a * h) < 3)
        for (let t = Math.min(Math.round(this.range / this.step), l, 10); t >= 2; t -= 1) {
          const e = this.roundFraction(this.range / t);
          if (e % this.step == 0) {
            a = e * h;
            break;
          }
        }
      const d = this.roundFraction(this.range / (a * h));
      if (a && Number.isInteger(d)) {
        const t = [];
        for (let e = 1; e < d; e += 1) {
          const i =
            Math.round((this.startEdge + a * e * h) * this.fractDevider) / this.fractDevider;
          t.push(`<div class="legend-point" data-value="${i}">${this.formatN(i)}</div>`);
        }
        d > 2 &&
          (this.$legend.attr('data-count', d),
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
      function u(t, e, i) {
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
  const kt = {
    selectClass: '',
    dropdownClass: '',
    selectedClass: 'selected',
    optionSelector: 'option',
    attrValue: 'value',
    position: 'over',
    padding: 10,
    title: !1,
  };
  class Rt {
    static create(t) {
      return new this(t);
    }
    constructor(t) {
      (this.opts = t),
        (this.config = { ...kt, ...t.config }),
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
          const o = $(e),
            a =
              (null != (i = e.selected) ? i : o.attr('selected')) ||
              o.hasClass(this.config.selectedClass),
            r = (null != (s = e.disabled) ? s : o.attr('disabled')) || o.hasClass('disabled'),
            l = (null != (n = e.locked) ? n : o.attr('locked')) || o.hasClass('locked'),
            h = this.isNativeSelect ? o.val() : o.attr(this.config.attrValue),
            d = o.html().trim() || '—';
          let c = '';
          this.config.title && (c = o.attr('data-title'));
          const u = $(`<li title='${c}' class="option-e"></li>`);
          a && !r && u.addClass(this.config.selectedClass),
            r && u.attr('disabled', 'disabled'),
            l && u.attr('locked', 'locked'),
            u.attr(this.config.attrValue, h),
            u.html(d),
            this.$list.append(u);
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
  class Tt {
    static getRecaptchaSettings() {
      const t = {
        env: {},
        ...((flexbe_cli.vars._group.flood && flexbe_cli.vars._group.flood.captcha) || {}),
      };
      return !t.visible && flexbe_cli.is_admin && (t.enabled = 0), t;
    }
    constructor(t, e = Tt.getRecaptchaSettings()) {
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
      const { env: t } = Tt.getRecaptchaSettings();
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
  function zt(t) {
    if (void 0 === window) return;
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
            let s = Dt[e] && Dt[e][i];
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
        o = () => {};
      t.value && o(),
        n.on('accept', o),
        $(t).on('focus', (e) => {
          requestAnimationFrame(() => {
            $(t).trigger('click');
          });
        }),
        (t._mask = n);
    } catch (e) {
      console.log(e);
    }
  }
  let Mt;
  !(function (t) {
    (t.BORDER_BOX = 'border-box'),
      (t.CONTENT_BOX = 'content-box'),
      (t.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
  })(Mt || (Mt = {}));
  const Bt = (function () {
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
    Lt = 'undefined' != typeof window ? window : {};
  /msie|trident/i.test(Lt.navigator && Lt.navigator.userAgent);
  const Vt = function (t, e, i) {
    return (
      void 0 === t && (t = 0),
      void 0 === e && (e = 0),
      void 0 === i && (i = !1),
      Object.freeze({ inlineSize: (i ? e : t) || 0, blockSize: (i ? t : e) || 0 })
    );
  };
  Object.freeze({
    devicePixelContentBoxSize: Vt(),
    borderBoxSize: Vt(),
    contentBoxSize: Vt(),
    contentRect: new Bt(0, 0, 0, 0),
  });
  class Ot {
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
            const o = (t, ...i) => n.call(e, ...i, ...i);
            return s.set(n, o), t.on(i, o), e;
          },
          o = (t, e) => (i, n) => {
            const o = (t, ...i) => n.call(e, ...i, ...i);
            return s.set(n, o), t.one(i, o), e;
          },
          a =
            (t, i) =>
            (n = e, o) => (n === e ? t.off() : t.off(n, s.get(o)), i),
          r =
            (t, i) =>
            (s, ...n) => (t.triggerHandler(s, n), t.triggerHandler(e, [s, ...n]), i),
          l = r;
        Object.defineProperties(
          t,
          Object.entries({ on: n, off: a, one: o, emit: l, trigger: r }).reduce(
            (e, [s, n]) => (
              (e[s] = { value: n(i, t), enumerable: !1, writable: !1, configurable: !1 }), e
            ),
            {},
          ),
        );
      })(this);
    }
  }
  new Ot();
  const Ht = 0,
    Wt = 1,
    qt = 2,
    Nt = 3,
    Yt = 4;
  class jt extends Ot {
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
        (this.status = Ht),
        (this.name = void 0),
        (this.uri = void 0),
        (this.progress = 0),
        (this.file = t),
        (this.name = t.name);
    }
    async init() {
      this.id = await jt.getFileHash(this.file);
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
            (this.status = qt),
            this.emit('success', { jqXHR: t, textStatus: e });
        },
        onError: (t, e) => {
          (this.progress = 1),
            (this.status = 'abort' === e ? Yt : Nt),
            this.emit('error', { jqXHR: t, textStatus: e });
        },
        onComplete: (t, e) => {
          this.emit('complete', { jqXHR: t, textStatus: e });
        },
      });
      return (this.request = t), (this.status = Wt), t;
    }
    async abort() {
      this.request && this.status === Wt && ((this.status = Yt), this.request.abort());
    }
  }
  let Xt = {};
  class Ut extends vt {
    constructor(...t) {
      super(...t),
        (this.id = this.core.id),
        (this.eventId = `.${this.id}`),
        (this.$form = this.$component.is('form') ? this.$component : this.$component.find('form')),
        (this.$button = this.$component.find('.form-submit')),
        (this.$fields = this.$component.find('.form-fields')),
        (this.action = this.$component.find('input[name="action"]').val()),
        (this.isInline = this.$component.attr('data-inline') ? 1 : 0),
        (this.inCart = this.$component.closest('.w_widget').length > 0),
        (this.inModal = this.$component.closest('.m_modal').length > 0),
        (this.busy = !1),
        (this.submitDisabled = !1),
        (this.submitDisabledMessage = ''),
        (this.products = null),
        (this.pay = null);
    }
    onInit() {
      (this.formInited = !1),
        (this.$masked = this.$component.find('[data-mask]')),
        (this.$calendars = this.$component.find('')),
        (this.$file = this.$component.find('.file-input-outer')),
        this.$file.length &&
          (this.$itemTemplateFile = this.$itemTemplateFile || this.$file.find('template').clone()),
        this.$masked.length;
      this.$calendars.length &&
        ((this.hasCalendarField = !0),
        // this.require.push('/_s/lib/scroll-lock/scroll-lock.min.js'),
        this.require.push(
          '/_s/lib/calendar/dist/js/calendar.js?v2.3.4',
          '/_s/lib/calendar/dist/css/calendar.min.css?v2.3.4',
        ));
    }
    onLoad() {
      (this.core.wasScreen || this.core.wasBeside) &&
        (this.hasMaskedField && this.inputMask(), this.hasCalendarField && this.inputDate());
    }
    onScreen({ state: t }) {
      if (!t) return !1;
      this.formInit();
    }
    onBeside({ state: t }) {
      if (!t) return !1;
      this.formInit();
    }
    onOpen(t = {}) {
      const { top: e } = this.component.getBoundingClientRect();
      !flexbe_cli.run.is_screen_mobile &&
        flexbe_cli.run.is_preview &&
        flexbe_cli.resize.viewportHeight > e + 100 &&
        this.$component.find('.form-field').eq(0).find('input, textarea').eq(0).focus(),
        t && t.data && this.setData(t.data);
    }
    onResize() {
      this.$component.find('.range-outer').trigger('resize');
    }
    setData(t) {
      if (!t) return !1;
      t && t.fields && this.addFields(t.fields), t && t.items && this.addItems(t.items);
    }
    defineBeforeSend(t) {
      'function' == typeof t && (this.beforeSend = t);
    }
    defineAfterSent(t) {
      'function' == typeof t && (this.afterSent = t);
    }
    defineOnRequestError(t) {
      'function' == typeof t && (this.onRequestError = t);
    }
    resetFields() {
      const t = this.$component.find('.form-fields-advanced');
      t[0] && t.empty();
    }
    addItems(t = []) {
      if (!t || !t.length) return;
      let e = 0;
      (t = t.map((t) =>
        'object' != typeof t
          ? {}
          : ((t.price = parseFloat(t.price) || 0),
            (t.title = ('string' == typeof t.title && t.title.trim()) || t.title || ''),
            (e += t.price * t.count || 0),
            t),
      )),
        (this.products = t || []),
        e && (this.pays = { price: e, desc: '' });
    }
    async sendForm() {
      if (this.submitDisabled)
        return void setTimeout(() => {
          this.$button.addClass('shake'),
            setTimeout(() => {
              this.$button.removeClass('shake');
            }, 500);
        }, 30);
      if (this.busy) return !1;
      const t = this.captcha && this.captcha.getToken();
      if (this.captcha && this.captcha.enabled && !this.captcha.isOptional && !t) {
        if (this.captcha.inModal) return void this.captchaModalRun();
        if (this.captcha.isInvisible) return void this.captchaInvisibleRun();
      }
      this.addSubmitting();
      const e = new FormData(this.$form.get(0));
      e.append('true'),
        e.delete('fileOriginal'),
        this.products && e.append('products', JSON.stringify(this.products)),
        this.pays &&
          (e.append('pay[price]', this.pays.price), e.append('pay[desc]', this.pays.desc)),
        e.append('pageId', flexbe_cli.p_id),
        e.append('jsform', JSON.stringify(parseInt(448312, 10))),
        flexbe_cli.stat.u_id && e.append('userId', flexbe_cli.stat.u_id);
      const i = flexbe_cli.stat.AB.getCookie();
      e.append('abTest', JSON.stringify(i)),
        e.delete('g-recaptcha-response'),
        t && e.append('captcha-token', t),
        flexbe_cli.run.is_OSX &&
          'function' == typeof e.entries &&
          e.forEach((t, i) => {
            'object' == typeof t &&
              t instanceof File &&
              0 === t.size &&
              'function' == typeof e.delete &&
              e.delete(i);
          });
      const s = this.$form.attr('action'),
        n = { type: 'POST', dataType: 'json', processData: !1, contentType: !1, data: e };
      try {
        const t = await flexbe_cli.helpers.fetch(s, n);
        (t.send_formdata = !0),
          null != t.pay && (this.pay = t.pay),
          this.showDone(),
          this.captchaRemoveError(),
          'redirect' !== this.action && this.clearSubmitting(!0);
      } catch (e) {
        const i = e.data;
        if (i && i.captcha) {
          if (this.captcha)
            t
              ? this.captchaAddError()
              : this.captcha.inModal
              ? this.captchaModalRun()
              : this.captcha.isInvisible &&
                ((this.captcha.isOptional = !1), this.captchaInvisibleRun());
          else {
            const t = 'visible' === i.captcha;
            await this.initCaptcha({
              ...Tt.getRecaptchaSettings(),
              enabled: !0,
              visible: t,
              ttl: 1,
            }),
              t
                ? this.captchaModalRun()
                : ((this.captcha.isOptional = !1), this.captchaInvisibleRun());
          }
          return;
        }
        await this.sendFormError(e);
      }
    }
    async sendFormError(t) {
      this.clearSubmitting(),
        console.error('sendForm error: ', t),
        'function' == typeof this.onRequestError
          ? await this.onRequestError(t, this)
          : t.status && 500 === t.status && alert('Network error');
    }
    showDone() {
      if (
        ('function' == typeof this.afterSent && this.afterSent(),
        flexbe_cli.stat.reachGoals({
          mainGoal: flexbe_cli.stat.getGoal('order_done'),
          goal: this.$component.find('input[name="goal"]').val(),
          htmlGoal: this.$component.find('textarea[name="goal_html"]').val(),
        }),
        'pay' === this.action)
      )
        if (void 0 !== this.pay && null !== this.pay) {
          if (this.pay.pay_link.length > 0) {
            const t = `${
              window.location.origin +
              window.location.pathname +
              (window.location.search ? `${window.location.search}&` : '?')
            }pay_id=${this.pay.pay_id}&h=${this.pay.pay_hash}`;
            try {
              window.history.pushState(null, null, t),
                setTimeout(() => {
                  flexbe_cli.events.trigger('pay', { action: 'init' });
                }, 200);
            } catch (e) {
              setTimeout(() => {
                document.location = t;
              }, 500);
            }
          }
        } else
          (window.location.hash = 'pay'),
            flexbe_cli.events.trigger('pay', { action: 'success', withoutPay: !0 });
      else if ('redirect' === this.action) {
        const t = this.$component.find('input[name="action_redirect"]');
        let e;
        t && t.length && (e = t.val()),
          e &&
            setTimeout(() => {
              flexbe_cli.helpers.links.gotoLink(e);
            }, 500);
      } else {
        let t = this.$component.find('[data-modal-id]').attr('data-modal-id');
        if (/^(form|done)$/.test(t) && !flexbe_cli.modal.find(t)) {
          t = `${String(this.id).split('_')[0]}_${t}`;
        }
        flexbe_cli.events.trigger('ui_modal_open', { id: t });
      }
      this.resetForm();
    }
    checkField(t, e) {
      if (e.disabled || e.hidden) return !1;
      const i = e.type,
        s = 'checkbox' === i ? e.checked : 'file' === i ? t.find('input.value') : e.value,
        n = e.getAttribute('data-required') || !1,
        o = e.getAttribute('data-check') || !1;
      let a = !(!n || s) && 'form.required';
      if ((e._mask && e.getAttribute('data-mask')) || !1) {
        !n && !s;
      } else if (o)
        if ('date' === o || 'datetime' === o) {
          const t = $(e).data('calendar'),
            i = t && t.input.checkError();
          i && (a = i);
        } else if (s.length && 'email' === i) {
          /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\wЁА-яё-]+\.)+[A-Za-zЁА-яё]{2,}))$/.test(
            s,
          ) || (a = 'form.email');
        } else if (s.length && 'tel' === i)
          if (/[^\d\s()+-]/.test(s)) a = 'form.digits';
          else {
            s.replace(/\D/g, '').length < 5 && (a = 'form.minlength');
          }
        else
          'file' === i &&
            (a = n && !s.length ? 'form.required' : !!t.hasClass('loading') && 'form.loading');
      return (a = (a && flexbe_cli.locale.tr(a)) || !1), a;
    }
    removeFieldsErrors() {
      this.$fields.removeClass('has-error'),
        this.$component.find('.is_error').removeClass('is_error animate'),
        this.$fields.outerWidth();
    }
    disableSubmit(t) {
      (this.submitDisabled = !0),
        (this.submitDisableMessage = t),
        this.$button.attr('data-tip', t || ''),
        this.$button.find('.component-button').attr('disabled', 'disabled'),
        flexbe_cli.tip.init(this.$button);
    }
    enableSubmit() {
      (this.submitDisabled = !1),
        (this.submitDisableMessage = ''),
        this.$button.removeAttr('data-tip'),
        this.$button.find('.component-button').removeAttr('disabled'),
        flexbe_cli.tip.destroy(this.$button);
    }
    async initCaptcha(t) {
      return (
        null == t && (t = Tt.getRecaptchaSettings()),
        new Promise((e, i) => {
          !this.captcha &&
            t.enabled &&
            ((this.captcha = new Tt(
              {
                id: this.id,
                $form: this.$component,
                inModal: this.isInline,
                onSuccess: (t) => {
                  this.captchaRemoveError(),
                    this.clearSubmitting(),
                    (t.inModal || t.isInvisible) && this.sendForm();
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
      const t = this.$component.find('.form-field[data-type="captcha"]'),
        e = this.$component.find('.captcha-global-error');
      t.removeClass('is_error'), e.removeClass('show');
    }
    captchaModalRun() {
      this.captcha && this.captcha.enabled && this.captcha.loaded && this.captcha.runModalCaptcha();
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
    fileInput() {
      var t;
      Gt(this.$component, this.eventId, null == (t = this.$itemTemplateFile) ? void 0 : t.html());
    }
    textResize() {
      this.$component.find('.autosize').each((t, e) => {
        const i = e.offsetHeight - e.clientHeight,
          s = $(e),
          n = getComputedStyle(e),
          o = +s.attr('rows') || 0,
          a = parseInt(n.borderTop, 10) + parseInt(n.borderBottom, 10),
          r = parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10);
        let l = Math.round(+n.lineHeight.split('px')[0]);
        if (flexbe_cli.run.is_ios) {
          l /= parseInt(n.textSizeAdjust || n.webkitTextSizeAdjust || '120%', 10) / 100;
        }
        s.removeAttr('data-autoresize'),
          s.off('.autoresize').on('keyup.autoresize input.autoresize', function (t) {
            const e = t.currentTarget;
            e.style.height = `${e.scrollHeight + i}px`;
          }),
          s.css('minHeight', `${a + r + l * o}px`);
      });
    }
    customSelect() {
      this.$component.find('.dropdown-container').remove();
      const t = this.$component.find('select.atom-custom-select'),
        e = {
          dropdownClass: this.$component.hasClass('style-underlined')
            ? 'sharp size--medium '
            : 'size--medium ',
        };
      t.each((t, i) => {
        const s = $(i).closest('[data-type="select"]');
        Rt.create({
          element: i,
          config: e,
          onCollapse: () => {
            s.removeClass('active');
          },
          onActivate: () => {
            s.addClass('active'), s.siblings('[data-type="select"]').removeClass('active');
          },
        });
      });
    }
    deliveryField() {
      if (
        ((this.$delivery = this.$component.find('[data-type="delivery"]')), !this.$delivery.length)
      )
        return;
      const { promotionStore: t, cartStore: e, deliveryStore: i } = flexbe_cli.ecommerce,
        s = () => {
          const t = i.activeMethod;
          if (!t) return;
          const e = this.$delivery,
            s = e.find('.form-field-delivery-item'),
            n = e.find('.form-field-delivery-fields'),
            o = s.filter(`[data-delivery="${t.id}"]`),
            a = n.filter(`[data-delivery="${t.id}"]`);
          s.removeClass('form-field-delivery-item--active'),
            o.addClass('form-field-delivery-item--active'),
            n.removeClass('form-field-delivery-fields--active'),
            a.addClass('form-field-delivery-fields--active'),
            n.find('input, textarea, select').prop('disabled', !0),
            a.find('input, textarea, select').prop('disabled', !1),
            s.find('input[type=radio]').prop('checked', !1),
            o.find('input[type=radio]').prop('checked', !0);
        },
        n = () => {
          this.$delivery.find('.form-field-delivery-item').each((t, e) => {
            const s = e.getAttribute('data-delivery'),
              n = $(e).find('.item-price'),
              o = $(e).find('.delimiter'),
              a = $(e).find('.min-total'),
              r = i.getPrice(s),
              l = `${flexbe_cli.locale.tr('form.min_total_tip')} ${r.minTotalFormatted}`;
            r.notHasFree || (r.untilFree && r.notFixedPrice)
              ? (n.text(''), o.text(''))
              : (n.text(r.currentFormatted), o.text('–')),
              a.text(flexbe_cli.locale.tr(l));
          });
        };
      s(),
        n(),
        setTimeout(() => {
          i &&
            i.on(`dispatch.form-component-${this.id}`, ({ name: t }) => {
              'selectMethod' === t && s();
            }),
            e &&
              e.on(`dispatch.form-component-${this.id}`, () => {
                n();
              }),
            t &&
              t.on(`dispatch.form-component-${this.id}`, () => {
                n();
              });
        }, 10),
        this.$delivery.on('change', '.form-field-delivery-item input', (t) => {
          if (t.currentTarget.checked) {
            const e = t.currentTarget.closest('[data-delivery]').getAttribute('data-delivery');
            i.dispatch('selectMethod', e);
          }
        });
    }
  }
  Ut.is = 'form';
  function Zt(t, e = []) {
    return null == t.parentNode ? e : Zt(t.parentNode, [...e, t]);
  }
  function Kt(t) {
    const e = /(auto|scroll)/,
      i = getComputedStyle(t, null);
    return ['overflow', 'overflow-y', 'overflow-x'].some((t) => e.test(i.getPropertyValue(t)));
  }
  function Jt(t) {
    if (!t || !t.parentNode) return;
    const e = t.ownerDocument || document,
      i = Zt(t.parentNode, []);
    for (let t = 0; t < i.length; t++) if (Kt(i[t])) return i[t];
    return e.scrollingElement || e.documentElement;
  }
  class Qt extends vt {
    get showOnClick() {
      return (
        'click' === this.showType ||
        'mobile' === flexbe_cli.resize.responsiveMode ||
        flexbe_cli.run.is_touch
      );
    }
    get showOnHover() {
      return (
        'hover' === this.showType &&
        'desktop' === flexbe_cli.resize.responsiveMode &&
        flexbe_cli.run.is_pointer
      );
    }
    get actualDirection() {
      return 'desktop' === flexbe_cli.resize.responsiveMode
        ? this.direction
        : this.directionAdaptive;
    }
    get showAsRollup() {
      return (
        'mobile' === flexbe_cli.resize.responsiveMode &&
        'true' === this.$component.attr('data-rollup-adaptive')
      );
    }
    constructor(...t) {
      super(...t),
        (this.eventId = this.owner._core.id),
        (this.rootModal = 'modal' === this.core.is && this.core),
        (this.$menuList = this.$component.find('.component-menu-list--root')),
        (this.showType = this.$component.attr('data-type')),
        (this.direction = this.$component.attr('data-direction')),
        (this.directionAdaptive = this.$component.attr('data-direction-adaptive')),
        (this.allowShowMore = 'true' === this.$component.attr('data-show_more')),
        (this.isNested = !!this.$menuList.find('.folder-item').length),
        (this.openFolders = []),
        this.$component.css('width', () => {
          const t = this.$component.width();
          return t ? t + 1 : 'auto';
        });
    }
    onBeside({ state: t, first: e }) {
      t &&
        e &&
        (this.bindEvents(),
        this.dispatchShowMore(),
        (this.$button = this.$component.find('.folder-item')),
        (this.$header = this.$button.closest('.floating-header')),
        this.$header.length &&
          this.$header.off('sticky_header').on('sticky_header', () => {
            this._closeFolder();
          }));
    }
    onResize(t = {}) {
      ['bottom', 'top'].includes(t.type) ||
        (this.dispatchShowMore(),
        this.openFolders.forEach((t) => {
          t.$dropdown ? this.setDropdownPosition(t) : this.showAsRollup || this._closeFolder(t);
        }));
    }
    onWindowResize() {
      this.onResize();
    }
    onHideShowUI() {
      this._closeFolder();
    }
    onClose() {
      this.toggleFolder(null, !1);
    }
    bindEvents() {
      $(window).off(`.${this.eventId}`),
        this.$component.off('.core'),
        flexbe_cli.is_admin &&
          this.$component.on('mouseup.core.prevent click.core.prevent', '.folder-item', (t) => {
            t.stopPropagation();
          }),
        $(window).on(`blur.${this.eventId}`, () => {
          this.showAsRollup || this._closeFolder();
        }),
        this.$component.on('pointerenter.core.item pointerleave.core.item', '.menu-item', (t) => {
          if ('desktop' === flexbe_cli.resize.responsiveMode) {
            const e = 'pointerenter' === t.type;
            this.$component.toggleClass('in-hover', e), $(t.currentTarget).toggleClass('hover', e);
          }
        }),
        this.$component.on('pointerenter.core.folder', '.folder-item', (t) => {
          this.showOnHover &&
            (clearTimeout(this._dropdownTimer),
            $(t.currentTarget).hasClass('show') ||
              (this._dropdownTimer = setTimeout(() => {
                flexbe_cli.events.trigger('component_menu:closeAll'),
                  this.toggleFolder(t.currentTarget, !0);
              }, 50)));
        }),
        this.$component.on('pointerleave.core.folder', '.folder-item', () => {
          this.showOnHover &&
            (clearTimeout(this._dropdownTimer),
            (this._dropdownTimer = setTimeout(() => {
              flexbe_cli.events.trigger('component_menu:closeAll');
            }, 100)));
        }),
        this.$component.on('click.core', '.folder-item', (t) => {
          if (!this.showOnClick) return;
          const e = t.currentTarget;
          return ('mobile' !== flexbe_cli.resize.responsiveMode ||
            t.target.closest('.folder-item-text')) &&
            e
            ? (this.toggleFolder(e), !1)
            : void 0;
        }),
        flexbe_cli.events
          .off(`component_menu:closeAll.${this.eventId}`)
          .on(`component_menu:closeAll.${this.eventId}`, () => {
            this.openFolders.forEach((t) => this.toggleFolder(t, !1));
          });
    }
    observeItems() {
      let t,
        e = !0;
      const i = this.$component.find('li.root-item')[0];
      this.unobserveItems(),
        (this._resizeObserver = new ResizeObserver(() => {
          e
            ? (e = !1)
            : (clearTimeout(t),
              (t = setTimeout(() => {
                this.onResize({});
              }, 30)));
        })),
        this._resizeObserver.observe(i);
    }
    unobserveItems() {
      this._resizeObserver && (this._resizeObserver.disconnect(), (this._resizeObserver = null));
    }
    dispatchShowMore() {
      if (
        !this.allowShowMore ||
        'mobile' === flexbe_cli.resize.responsiveMode ||
        'column' === this.actualDirection
      )
        return void this.restoreMenuItems();
      this.$componentCopy
        ? this.restoreMenuItems()
        : (this.$componentCopy = this.$component.clone());
      const t = getComputedStyle(this.$component[0]),
        e = this.$component.innerWidth(),
        i = this.$menuList.innerWidth(),
        s = parseInt(t.getPropertyValue('--gapX'), 10) || 0,
        n = e + 2 * s;
      if (i <= n) return this.observeItems(), !1;
      const o = this.$menuList.find('li.root-item');
      this.$menuList.append(
        '\n            <li class="menu-item root-item folder-item show-more">\n                <svg viewBox="0 0 18 4">\n                    <path transform="rotate(-90 2 2)" d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>\n                </svg>\n\n                <ul class="component-menu-list component-menu-list--nested"></ul>\n            </li>\n        ',
      );
      const a = this.$menuList.find('.show-more .component-menu-list--nested');
      let r = 18 + 2 * s;
      o.toArray().forEach((t) => {
        const e = t.offsetWidth;
        r + e > n && (a.append(t), $(t).removeClass('root-item')), (r += e);
      }),
        this.observeItems();
    }
    restoreMenuItems() {
      const t = this.$menuList.find('.show-more');
      if (t.length) {
        if (this.$componentCopy) {
          const t = this.$componentCopy.find('.component-menu-list--root').clone();
          this.$menuList.html(t.html());
        } else {
          const e = t.find('.component-menu-list').eq(0).children();
          e.addClass('root-item'), t.replaceWith(e);
        }
        this.$menuList.css({ position: '', top: '', left: '' }), this.unobserveItems();
      }
    }
    toggleFolder(t, e) {
      null == e && (e = !$(t).hasClass('show')), this[e ? '_openFolder' : '_closeFolder'](t);
    }
    toggleNestedFolder(t, e) {
      null == e && (e = !$(t).hasClass('show')),
        this[e ? '_openNestedDropdown' : '_closeNestedDropdown'](t);
    }
    _openFolder(t) {
      const e = $(t);
      if (!e.length || e.hasClass('show')) return;
      const i =
          !flexbe_cli.run.is_preview &&
          !!this.$component.closest('[data-editor*=menu]:not(.editor-focus)').length,
        s = !flexbe_cli.run.is_preview && !!this.$component.closest('.editor-focus').length;
      if (!i) {
        if (this.showAsRollup)
          e.find('.component-menu-list--nested').eq(0).slideDown(350), e.addClass('show');
        else {
          flexbe_cli.events.trigger('component_menu:closeAll');
          const i = $('body'),
            n = e.find('.component-menu-list--nested').eq(0).clone(),
            o = $(`<div class="component-menu-dropdown ${s ? 'editor-focus' : ''}"></div>`);
          t.$dropdown = o;
          const a = getComputedStyle(t),
            r = [
              '--gapY',
              '--fontSize',
              '--lineHeight',
              '--fontWeight',
              '--letterSpacing',
              '--itemFontStyle',
              '--itemTextDecoration',
            ].reduce((t, e) => ({ ...t, [e]: a.getPropertyValue(e) }), {});
          if (
            (o.css(r),
            this.$component.addClass('in-show'),
            e.addClass('show'),
            o.append(n).appendTo(i),
            this.setDropdownPosition(t),
            this.component.closest('.m_modal, .floating-header'))
          ) {
            let e = Jt(this.component);
            e === document.documentElement && (e = document),
              $(e).one(`scroll.${this.eventId}`, () => {
                this.setDropdownPosition(t);
              });
          }
          o.off('pointerenter').on('pointerenter', () => {
            clearTimeout(this._dropdownTimer);
          }),
            i.on(`keydown.dropdown-${this.eventId}`, (t) => {
              'Escape' === t.code && this._closeFolder();
            }),
            i.on(`click.dropdown-${this.eventId}`, (t) => {
              t.target.closest('.folder-item') || this._closeFolder();
            }),
            o.off('pointerleave').on('pointerleave', () => {
              clearTimeout(this._dropdownTimer),
                this.toggleNestedFolder(null, !1),
                this.showOnHover &&
                  (this._dropdownTimer = setTimeout(() => {
                    this.toggleFolder(t, !1);
                  }, 100));
            }),
            o.on('pointerenter.core.folder pointerleave.core.folder', '.menu-item', (t) => {
              $(t.currentTarget).toggleClass('hover', 'pointerenter' === t.type);
            }),
            flexbe_cli.run.is_touch
              ? o.on('click.core.folder', '.folder-item', (t) => {
                  this.toggleNestedFolder(t.currentTarget);
                })
              : (o.on('pointerenter.core.folder', '.folder-item', (t) => {
                  this.toggleNestedFolder(t.currentTarget, !0);
                }),
                o.on('pointerleave.core.folder', '.folder-item', (t) => {
                  this.toggleNestedFolder(t.currentTarget, !1);
                }));
        }
        this.openFolders.push(t);
      }
    }
    _closeFolder(t) {
      const e = t ? $(t) : this.$menuList.find('.folder-item.show');
      let i = Jt(this.component);
      i === document.documentElement && (i = document),
        $('body').off(`.dropdown-${this.eventId}`),
        this.$component.removeClass('in-show'),
        $(i).off(`.${this.eventId}`),
        this.showAsRollup
          ? e.find('.component-menu-list--nested').slideUp(350)
          : (e.find('.component-menu-list--nested').css('display', ''),
            e.each((t, e) => {
              e.$dropdown && e.$dropdown.remove();
            })),
        e.removeClass('show'),
        e.find('.show').removeClass('show'),
        (this.openFolders = this.openFolders.filter((t) => !e.is(t)));
    }
    _openNestedDropdown(t) {
      const { viewportWidth: e, documentHeight: i } = flexbe_cli.resize,
        s = $(t),
        n = s.siblings('.nested-item.show'),
        o = s.find('.component-menu-list--nested').eq(0),
        a = s.offset(),
        r = s.innerWidth(),
        l = s.innerHeight(),
        h = a.left,
        d = h + r,
        c = a.top,
        u = c + l,
        p = o.innerWidth(),
        m = o.innerHeight(),
        g = h > p,
        f = e - d > p,
        v = c > m,
        y = i - u > m;
      if (
        (n.each((t, e) => this._closeNestedDropdown(e)),
        s.addClass('show'),
        o.addClass('show-dropdown'),
        f)
      )
        o.addClass('in-right');
      else if (g) o.addClass('in-left');
      else {
        const t = e > p ? p : r;
        o.addClass('in-right'),
          o.css({
            maxWidth: `${r}px`,
            marginTop: '15px',
            marginLeft: `-${Math.floor(t - (e - d) + 10)}px`,
          });
      }
      y ? o.addClass('in-bottom') : v ? o.addClass('in-top') : o.addClass('in-bottom');
    }
    _closeNestedDropdown(t) {
      const e = $(t),
        i = e.find('.component-menu-list--nested').eq(0);
      e.removeClass('show'), i.removeClass('show-dropdown in-left in-right in-bottom in-top');
    }
    setDropdownPosition(t) {
      if (!t || !t.$dropdown) return;
      const { documentHeight: e, viewportHeight: i, viewportWidth: s } = flexbe_cli.resize,
        n = $(t),
        o = t.$dropdown,
        a = o.find('.component-menu-list--nested').eq(0),
        r = n.hasClass('show-more'),
        l = r ? n.find('svg') : n.children().first().find('span'),
        h = this.$header.closest('.position-fixed').length,
        d = l[0].getBoundingClientRect(),
        c = l.offset(),
        u = c.top,
        p = u + d.height,
        m = c.left,
        g = parseInt(a.find('.menu-item-text').css('paddingLeft'), 10) || 10,
        f = {
          position: 'absolute',
          width: a.innerWidth(),
          height: a.innerHeight(),
          top: p,
          left: m - g,
        };
      f.width < d.width && ((f.width = d.width + 2 * g), a.css('width', '100%')),
        r && (f.left = m + d.width / 2 - f.width / 2);
      const v = Math.max(0, -1 * f.left + 7),
        y = Math.max(0, f.left + f.width + 7 - s);
      v ? (f.left += v) : y && (f.left -= y);
      const w = p + f.height > e && u > f.height,
        b = p + f.height > flexbe_cli.scroll.latest + i;
      h && f.height + d.bottom < i
        ? ((f.position = 'fixed'), (f.top = d.bottom))
        : (w || (this.rootModal && b)) && (f.top = u - f.height),
        o.toggleClass('rise', h),
        o.css(f);
    }
  }
  Qt.is = 'menu';
  class te extends St {}
  te.is = 'button';
  class ee extends vt {
    constructor(...t) {
      super(...t),
        (this.type = this.$component.data('type')),
        (this.autoplay = !!+this.$component.data('autoplay')),
        (this.$preview = this.$component.find('.video-preview')),
        (this.$iframe = this.$component.find('iframe')),
        (this.$video = this.$component.find('.custom-video')),
        (this.hasPreview = this.$preview.length),
        (this.frameLoaded = !1),
        (this.autoSet = !this.hasPreview),
        this.hasPreview && this.$preview.removeAttr('hidden'),
        this.$preview.on('click', () => {
          this.set(), this.play(!0);
        }),
        this.$component.off('sliderActivate').on('sliderActivate', () => {
          (this.preventAutoplay = !1),
            this.inScreen && this.autoSet && (this.set(), this.autoplay && this.play());
        }),
        this.$component.off('sliderDeactivate').on('sliderDeactivate', () => {
          (this.preventAutoplay = !0), this.pause();
        });
    }
    onHideShowUI() {
      this.pause();
    }
    onScreen({ state: t }) {
      t
        ? ((this.autoplay || this.autoSet) && this.set(),
          this.autoplay && !this.preventAutoplay && this.play())
        : this.pause();
    }
    set() {
      this.isSet ||
        ((this.isSet = !0),
        'youtube' === this.type
          ? this.initYoutube()
          : 'vimeo' === this.type
          ? this.initVimeo()
          : this.initCustom());
    }
    initCustom() {
      this.$component.addClass('loading');
      const t = this.$video[0],
        e = t.getAttribute('data-src'),
        i = t.getAttribute('src');
      if (e && !i) {
        const i = document.createElement('source');
        t.addEventListener('error', console.error),
          t.addEventListener('playing', () => this.onPlay()),
          t.addEventListener('pause', () => this.onPause()),
          i.addEventListener('error', console.error),
          i.setAttribute('type', 'video/mp4'),
          i.setAttribute('src', e),
          t.appendChild(i),
          t.load();
      }
    }
    initVimeo() {
      this.$component.addClass('loading');
      const t = this.$iframe[0],
        e = t.getAttribute('data-src'),
        i = t.getAttribute('src');
      e && !i && (t.src = e),
        flexbe_cli.require(['https://player.vimeo.com/api/player.js'], () => {
          (this.vPlayer = new window.Vimeo.Player(t)),
            this.onFrameLoaded(() => {
              this.$component.removeClass('loading'), this.$component.addClass('loaded');
            }),
            this.vPlayer.on('bufferstart', () => {
              this.vPlayer.off('bufferstart'), this.$component.addClass('started');
            }),
            this.vPlayer.on('play', () => {
              this.onPlay();
            }),
            this.vPlayer.on('pause', () => {
              this.onPause();
            });
        });
    }
    initYoutube() {
      this.$component.addClass('loading');
      const t = this.$iframe[0],
        e = t.getAttribute('data-src'),
        i = t.getAttribute('src');
      this.onFrameLoaded(() => {
        this.$component.removeClass('loading'), this.$component.addClass('loaded');
        const e = (t) => {
          (t !== window.YT.PlayerState.BUFFERING && t !== window.YT.PlayerState.PLAYING) ||
            this.$component.addClass('started'),
            t === window.YT.PlayerState.PLAYING
              ? this.onPlay()
              : (t !== window.YT.PlayerState.PAUSED && t !== window.YT.PlayerState.ENDED) ||
                this.onPause();
        };
        flexbe_cli.require(
          [`https://www.youtube.com/iframe_api?origin=${window.location.host}`],
          () => {
            ((t, e) => {
              if ('function' != typeof e || 'function' != typeof t) return !1;
              if (t()) e();
              else {
                const i = setInterval(() => {
                  t() && (clearInterval(i), e());
                }, 10);
              }
            })(
              () => window.YT && window.YT.Player,
              () => {
                this.ytVideo = new window.YT.Player(t, {
                  events: {
                    onStateChange: (t) => {
                      e(t.data);
                    },
                    onReady: () => {
                      e(this.ytVideo.getPlayerState());
                    },
                  },
                });
              },
            );
          },
        );
      }),
        e && !i && (t.src = e);
    }
    play(t = !1) {
      (this.isAutoplayed = !t),
        (this.isPaused = !1),
        this.onFrameLoaded(async () => {
          if ('custom' === this.type)
            try {
              await this.$video[0].play();
            } catch (t) {
              const e = this.$video.attr('data-image');
              this.$video.attr('poster', e);
            }
          else if ('vimeo' === this.type && this.vPlayer) this.vPlayer.play();
          else if ('youtube' === this.type) {
            const t = this.$iframe[0];
            (t && t.contentWindow).postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              '*',
            );
          }
          this.hasPreview &&
            this.$preview.fadeOut(150, () => {
              this.$preview.remove();
            });
        }),
        this.hasPreview && this.$preview.off('click').addClass('preloading');
    }
    pause() {
      (this.isAutoplayed = !1),
        (this.isPaused = !0),
        this.onFrameLoaded(() => {
          try {
            if ('custom' === this.type) this.$video[0].pause();
            else if ('vimeo' === this.type && this.vPlayer) this.vPlayer.pause();
            else if ('youtube' === this.type) {
              const t = this.$iframe[0];
              (t && t.contentWindow).postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                '*',
              );
            }
          } catch (t) {}
        });
    }
    onFrameLoaded(t = () => {}) {
      if (this.frameLoaded) t();
      else if ('custom' === this.type) (this.frameLoaded = !0), t();
      else {
        let e = !1;
        setTimeout(() => {
          (this.frameLoaded = !0), e || ((e = !0), t());
        }, 1e3),
          this.$iframe.one('load', () => {
            (this.frameLoaded = !0), e || ((e = !0), t());
          });
      }
    }
    onPlay() {
      !flexbe_cli.is_admin &&
        'mobile' === flexbe_cli.resize.responsiveMode &&
        this.component.closest('[data-hidden="desktop"]') &&
        flexbe_cli.resize.lockMode(!0),
        (this.autoplay && this.isAutoplayed) ||
          ((this._sliderAutoplayPrevented = !0),
          this.$component.trigger('reduceSliderControls', { state: !0 }));
    }
    onPause() {
      this._sliderAutoplayPrevented &&
        ((this._sliderAutoplayPrevented = !1),
        this.$component.trigger('reduceSliderControls', { state: !1 }));
    }
  }
  ee.is = 'video';
  const ie = {};
  class se extends vt {
    async onInit() {
      this.$component.off('.componentImage'),
        this.$component.on(
          'setImage.componentImage',
          $.debounce(async (t) => {
            var e;
            ('lazyPriority' !== (null == (e = t.detail) ? void 0 : e.reason) || this.autoLoad) &&
              ((this.autoLoad = !0),
              (this.lazyLoad = !0),
              !this.isVisible || this.isImgLoading || this.isImgLoaded || (await this.loadImage()));
          }, 10),
        );
    }
    async onBeside({ state: t }) {
      if (!t) return !1;
      this.isCreated || (await this.create()),
        !this.isImgLoaded && this.autoLoad && this.lazyLoad && (await this.loadImage());
    }
    async onResize() {
      (this.isImgLoaded || (this.isCreated && this.autoLoad && this.lazyLoad)) &&
        (await this.loadImage(!0));
    }
    async create() {
      (this.isCreated = !0),
        (this.imageLoadingOptions = flexbe_cli.vars._group.images),
        (this.lazyLoad = this.component.hasAttribute('data-img-lazy')),
        (this.autoLoad = this.component.hasAttribute('data-img-autoload')),
        (this.hasImagePlaceholder = this.component.hasAttribute('data-has-placeholder')),
        (this.isImgLoaded = !this.$component.hasClass('loading')),
        (this.imageLayer =
          this.$component.find('.component-image__image').get(0) || this.component),
        (this.overlay = this.$component.find('.overlay-container').get(0)),
        this.setParams(),
        this.isImgLoaded || !this.autoLoad || this.lazyLoad || (await this.loadImage());
    }
    async loadImage(t = !1) {
      if ((this.isCreated || (await this.create()), !t && (this.isImgLoaded || this.isImgLoading)))
        return;
      (this.isImgLoading = !0), this.setOverlay();
      const e = this.params;
      let i;
      e.original_resolution ||
        ((i = await this.getOptimalSize()),
        i &&
          ie[this.params.id].sizes &&
          !ie[this.params.id].sizes.includes(i) &&
          ie[this.params.id].sizes.push(i));
      const s = ct(e, i, this.imageLoadingOptions);
      this.hasImagePlaceholder && (await lt(s)), this.setImage(s), (this.isImgLoading = !1);
    }
    async getOptimalSize() {
      const t = this.params,
        e = await ut(t);
      (t.proportion = e), ie[this.params.id] && (ie[this.params.id].params.proportion = e);
      const i = this.componentWidth,
        s = this.componentHeight;
      let { width: n } = await mt(this.params, { width: i, height: s }, this.imageLoadingOptions);
      const o = n - 2,
        a = Math.max(50, 1.2 * n);
      return (n = this.getClosestSize(n, o, a)), n;
    }
    setImage(t) {
      const { $component: e, params: i } = this;
      'image' === i.type
        ? (this.imageLayer.src = t)
        : 'background' === i.type && (this.imageLayer.style.backgroundImage = `url(${t})`),
        this.isImgLoaded || (e.removeClass('loading'), (this.isImgLoaded = !0)),
        e.trigger('load');
    }
    setOverlay() {
      const { overlay: t, componentWidth: e, componentHeight: i } = this;
      if (!t) return;
      let s = 'medium';
      e <= 200 || i <= 150
        ? (s = 'xsmall')
        : e <= 400 || i <= 250
        ? (s = 'small')
        : e >= 650 && i >= 400 && (s = 'large'),
        t.setAttribute('data-size', s),
        'hover' === t.getAttribute('data-type') &&
          $(t).on('mouseenter mouseleave touchstart touchend', (e) => {
            const i = /enter|start/.test(e.type);
            $(t).toggleClass('hover', i);
          });
    }
    setParams() {
      var t;
      const e = this.component,
        i = $(e);
      let s = {};
      const n = i.attr('data-img-id');
      if (null != (t = ie[n]) && t.params) s = { ...ie[n].params };
      else {
        (s.id = n),
          (s.ext = i.attr('data-img-ext')),
          (s.proportion = +i.attr('data-img-proportion'));
        const t = i.attr('data-img-name');
        if (!s.ext && t) {
          const e = t.match(/\.(\D{2,4})$/i) || [];
          e[1] && s.ext !== e[1] && (s.ext = e[1] || !1);
        }
      }
      (s.type = i.attr('data-img-type')),
        (s.action = i.attr('data-action')),
        s.proportion || (s.proportion = 100),
        (s.scale = i.attr('data-img-scale') || 'cover'),
        (s.original_resolution = e.hasAttribute('data-img-original')),
        (s.uploding_url = i.attr('data-uploding-url')),
        ie[s.id] || (ie[s.id] = { params: { ...s }, sizes: [] }),
        (s.animated = e.hasAttribute('data-img-animated')),
        (s.transparent = e.hasAttribute('data-img-transparent')),
        (this.params = s);
    }
    getClosestSize(t, e = t, i = t + 10) {
      var s;
      const n = ie[this.params.id].sizes || [];
      let o,
        a = 1 / 0;
      return (
        n.forEach((s) => {
          const n = Math.abs(s - t);
          s >= e && s <= i && n < a && ((o = s), (a = n));
        }),
        null != (s = o) ? s : t
      );
    }
  }
  se.is = 'image';
  const ne = new Array(70).fill(1).map((t, e) => 50 + 50 * e);
  class oe extends vt {
    constructor(...t) {
      super(...t),
        (this.isCreated = void 0),
        (this.isImgLoaded = void 0),
        (this.isLazyLoading = void 0),
        (this.svgUrl = void 0),
        (this.image = void 0),
        (this.imageLoadingOptions = void 0);
    }
    async onInit() {
      this.$component.on('setImage', async () => {
        this.isVisible &&
          !this.isImgLoaded &&
          (this.isCreated || this.create(), await this.loadImage());
      });
    }
    async onBeside({ state: t }) {
      t &&
        (this.isCreated || this.create(),
        this.isLazyLoading && !this.isImgLoaded && (await this.loadImage()));
    }
    async onResize() {
      this.isCreated && (await this.loadImage());
    }
    create() {
      const t = this.$component.data();
      (this.imageLoadingOptions = flexbe_cli.vars._group.images),
        (this.svgUrl = t.svgUrl),
        (this.isLazyLoading = !!t.imgLazy),
        (this.image = {
          id: t.imgId,
          ext: t.imgExt,
          proportion: t.imgProportion,
          width: t.imgWidth,
          animated: t.imgAnimated,
          transparent: t.imgTransparent,
          scale: t.imgScale,
          type: 'background',
        }),
        (this.isCreated = !0);
    }
    async loadImage() {
      const t = this.$component.find('.vector-icon use'),
        e = this.$component.find('.raster-icon');
      if ((t.length && t.attr('href', this.svgUrl), e.length)) {
        const t = { width: this.componentWidth, height: this.componentHeight },
          { width: i } = await mt(this.image, t, { ...this.imageLoadingOptions, sizes: ne }),
          s = ct(this.image, i, this.imageLoadingOptions);
        e.css('background-image', `url(${s})`);
      }
      this.isImgLoaded = !0;
    }
  }
  oe.is = 'icon';
  class ae extends vt {
    constructor(...t) {
      super(...t), (this.require = ['/_s/lib/swiper8/dist/swiper-bundle.min.js?v847']);
      const { component: e } = this;
      (this.swiper = null),
        (this.initialSlide = 0),
        (this.index = $(e).closest('[data-item-id]').attr('data-item-id')),
        (this.sliderEl = e.classList.contains('swiper') ? e : e.querySelector('.swiper')),
        (this.paginationEl = e.querySelector('.slider-pagination')),
        (this.prevEl = e.querySelector('.slider-prev, [data-direction="prev"]')),
        (this.nextEl = e.querySelector('.slider-next, [data-direction="next"]')),
        this.setSwiperOptions();
    }
    onLoad() {
      this.inScreen && !this.swiper && this.initSwiper();
    }
    onScreen({ state: t }) {
      t && this.isLoaded && !this.swiper && this.initSwiper();
    }
    onView({ state: t }) {
      this.isLoaded &&
        (t && !this.swiper && this.initSwiper(), this.swiper && this.toggleAutoplay({ state: t }));
    }
    onResize() {
      this.swiper &&
        (this.setSliderSize(),
        this.setThumbnailsSize(),
        this.swiper && this.swiper.initialized && this.swiper.update());
    }
    onDestroy() {
      this.destroySwiper();
    }
    onHideShowUI(t) {
      this.setSwiperOptions('preview' === t), this.destroySwiper(), this.initSwiper();
    }
    setSwiperOptions(t = flexbe_cli.run.is_preview) {
      const e = (this.paginationEl && this.paginationEl.getAttribute('data-type')) || 'bullets',
        i = !!Number(this.$component.attr('data-loop')),
        s = Number(this.$component.attr('data-autoplay'));
      this.options = {
        paginationType: e,
        count: this.$component.attr('data-count'),
        loop: t && i,
        autoplay: (t && s) || !1,
        effect: this.$component.attr('data-effect') || 'slide',
      };
    }
    initSwiper() {
      if (this.swiper || 'undefined' == typeof Swiper) return !1;
      const {
          options: t,
          component: e,
          core: s,
          root: n,
          index: o,
          sliderEl: a,
          paginationEl: r,
          prevEl: l,
          nextEl: h,
        } = this,
        d = `${(s && s.id) || '-'}:${o}`,
        { count: c, loop: u, paginationType: p, effect: m } = t,
        g = 4 === flexbe_cli.theme_id,
        f = this.owner.closest('.swiper-inited'),
        v = !!t.autoplay && {
          delay: 1e3 * t.autoplay,
          stopOnLastSlide: !u,
          disableOnInteraction: !1,
          waitForTransition: !1,
        };
      let y = this.initialSlide;
      flexbe_cli.run.is_preview ||
        (n._sliderState
          ? n._sliderState[d] && (y = Math.max(0, Math.min(c - 1, n._sliderState[d]) || 0))
          : (n._sliderState = {}),
        (n._sliderState[d] = y));
      const w = { el: r, type: p, clickable: !0, dynamicBullets: g, dynamicMainBullets: 3 };
      'thumbs' === p &&
        ((w.type = !1),
        (w.el = null),
        (this.thumbsSwiper = new Swiper(r, {
          cssMode: !0,
          loop: !1,
          slidesPerView: 'auto',
          normalizeSlideIndex: !1,
        })));
      const b = new Swiper(a, {
        init: !1,
        speed: 350,
        nested: f,
        slideClass: 'swiper-slide',
        initialSlide: y,
        autoplay: v,
        pagination: w,
        thumbs: { swiper: this.thumbsSwiper },
        navigation: { prevEl: l, nextEl: h },
        effect: m,
        rewind: u,
        roundLengths: !0,
        preventInteractionOnTransition: !0,
        updateOnWindowResize: !1,
        maxBackfaceHiddenSlides: 0,
        longSwipesMs: 150,
        longSwipesRatio: 0.2,
        threshold: 1,
        preloadImages: !1,
        touchReleaseOnEdges: !1,
        runCallbacksOnInit: !1,
      });
      if (
        ((this.swiper = b),
        'fade' === m
          ? Et(b)
          : g &&
            (function (t) {
              if (
                ((t.params.virtualTranslate = !0),
                (t.params.cssMode = !0),
                flexbe_cli.run.is_chrome && !flexbe_cli.run.is_ios)
              ) {
                let i,
                  s = !1;
                t.on('touchStart', () => {
                  s = !0;
                }),
                  t.on('touchEnd', () => {
                    (s = !1), i || e();
                  }),
                  t.on('setTranslate', () => {
                    clearTimeout(i),
                      (i = setTimeout(() => {
                        (i = null), s || e();
                      }, 40));
                  });
              }
              function e() {
                t.wrapperEl && (t.wrapperEl.scrollLeft = t.wrapperEl.scrollLeft);
              }
            })(b),
        b.on('init', () => {
          if (!b.slides) return;
          this.setSliderSize(),
            this.setThumbnailsSize(),
            null != this.swiper && this.swiper.$el.addClass('swiper-inited'),
            $(l).add(h).add(r).removeClass('disabled');
          const t = b.slides[y],
            e = b.visibleSlides || [b.slides[y]];
          this.thumbsSwiper && e.push(...this.thumbsSwiper.visibleSlides),
            It(e),
            t && _t(t, !1, 'sliderActivate'),
            this.toggleAutoplay({ state: this.inView });
        }),
        this.thumbsSwiper &&
          this.thumbsSwiper.on(
            'slideChange',
            $.debounce((t) => {
              It(t.visibleSlides);
            }, 50),
          ),
        b.on(
          'slideChange',
          $.debounce(() => {
            if (!b.initialized) return;
            flexbe_cli.run.is_preview || (n._sliderState[d] = b.realIndex);
            const t = b.slides[b.previousIndex],
              i = b.slides[b.activeIndex],
              s = i && i.getAttribute('data-type'),
              o =
                b.previousIndex < b.activeIndex
                  ? Array.from(b.slides).slice(b.activeIndex, b.activeIndex + 2)
                  : Array.from(b.slides).slice(b.activeIndex - 2, b.activeIndex);
            e.setAttribute('data-current-content', s),
              _t(t, null, 'sliderDeactivate'),
              _t(i, null, 'sliderActivate'),
              It(o);
          }, 50),
        ),
        b.on('touchStart', () => {
          $(a).addClass('swiper-in-interacting');
        }),
        b.on('touchEnd', () => {
          $(a).removeClass('swiper-in-interacting');
        }),
        b.params.cssMode)
      ) {
        let t;
        b.on('slideChange', () => {
          clearTimeout(t),
            (b.animating = !0),
            (b.allowSlidePrev = !1),
            (b.allowSlideNext = !1),
            (t = setTimeout(() => {
              (b.animating = !1), (b.allowSlidePrev = !0), (b.allowSlideNext = !0);
            }, 150));
        });
      }
      this.$component
        .off('reduceSliderControls')
        .on('reduceSliderControls', (t, { state: e = !0 }) => {
          (this.preventAutoplay = !!e), this.preventAutoplay && this.toggleAutoplay({ state: !1 });
        }),
        this.$component.off('pointerenter').one('pointerenter', () => {
          const t = Array.from(b.slides);
          It([b.activeIndex - 1, b.activeIndex + 1].map((e) => t.at(e)));
        }),
        this.$component.off('pointerdown wheel').on('pointerdown wheel', () => {
          this.toggleAutoplay({ state: !1 });
        }),
        ((t, e = 0, ...s) => {
          i(t, e)(...s);
        })(() => b.init());
    }
    destroySwiper() {
      if (this.swiper)
        try {
          this.swiper.destroy();
        } catch (t) {
        } finally {
          this.swiper = null;
        }
    }
    toggleAutoplay({ state: t }) {
      const { swiper: e, options: i } = this;
      if (!e || !i.autoplay || !e.autoplay) return !1;
      this.preventAutoplay && (t = !1);
      const s = e.autoplay.running;
      t && !s && e.autoplay.start(), !t && s && e.autoplay.stop();
    }
    slideTo(t, e = !0) {
      if (!this.swiper) return void (this.initialSlide = t);
      const i = this.swiper.params.loop;
      void 0 !== this.swiper.realIndex &&
        this.swiper.realIndex !== t &&
        (i
          ? this.swiper.slideToLoop(t, e ? null : 0)
          : this.swiper.slideTo(t, e ? this.swiper.params.speed : 0));
    }
    setSliderSize() {
      const t = this.$component.find('.swiper');
      if (!t.length) return;
      const e = t[0];
      e.style.width = '';
      const i = e.getBoundingClientRect().width,
        s = e.offsetWidth;
      if (i % 1 > 0 && Math.abs(s - i) < 2) {
        e.style.width = `${Math.round(i)}px`;
        try {
          this.swiper.update();
        } catch (t) {}
      }
    }
    setThumbnailsSize() {
      if (!this.thumbsSwiper || 'thumbs' !== this.options.paginationType) return;
      const t = $(this.paginationEl),
        e = t.find('.thumb-item'),
        i = e.length,
        s = this.thumbsSwiper.params.slidesPerView;
      t.css('width', ''), e.css('width', '');
      const n = parseInt(e.css('--thumbPad'), 10),
        o = t[0].offsetWidth,
        a = e[0].offsetWidth;
      let r = Math.max(4, Math.round(o / (a + n)));
      i >= 4 && (i === r + 1 || i === r - 1)
        ? (r = i)
        : !s || (s !== r + 1 && s !== r - 1) || (r = s),
        t.toggleClass('is-filled', i >= r),
        (this.thumbsSwiper.params.slidesPerView = r),
        (this.thumbsSwiper.params.spaceBetween = n),
        this.thumbsSwiper.update();
    }
  }
  ae.is = 'slider';
  [$t, St, ee, se, ae, Pt, oe, Qt, class extends Ut {}, te].forEach((t) => {
    ot.registerComponent(t);
  });
})();

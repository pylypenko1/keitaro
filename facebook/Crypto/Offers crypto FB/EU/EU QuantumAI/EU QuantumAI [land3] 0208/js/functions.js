!(function (e) {
  'use strict';
  e.fn.ctPreloader = function (t) {
    e(this).each(function () {
      var a = e(this);
      if (
        (a.prev('.preloader').length || e('<div class="preloader">').insertBefore(a),
        a.data('ctPreloader', e('img, iframe', a).add(a.filter('img, iframe')).length),
        0 == a.data('ctPreloader'))
      )
        return a.prev('.preloader').remove(), t(), void a.trigger('ct-preloader-loaded');
      e('img, iframe', a)
        .add(a.filter('img, iframe'))
        .each(function () {
          var i = e('<img>');
          'iframe' == e(this).prop('tagName').toLowerCase() && (i = e(this)),
            i.attr('src', e(this).attr('src')),
            i.on('load error', function () {
              a.data('ctPreloader', a.data('ctPreloader') - 1),
                0 == a.data('ctPreloader') &&
                  (a.prev('.preloader').remove(), t(), a.trigger('ct-preloader-loaded'));
            });
        });
    });
  };
})(jQuery),
  (function (e) {
    'use strict';
    var t = e.fn.width;
    e.fn.width = function (e) {
      if (0 == arguments.length && 1 == this.length && this[0] === window) {
        if (-1 != window.ctOptions.innerWidth) return window.ctOptions.innerWidth;
        var a = t.apply(this, arguments);
        return window.updateCTInnerSize(a), a;
      }
      return t.apply(this, arguments);
    };
    var a = e('#page');
    e(window).load(function () {
      var t = e('#page-preloader');
      t.length && !t.hasClass('preloader-loaded') && t.addClass('preloader-loaded');
    }),
      e('#site-header.animated-header').headerAnimation(),
      window.ctSettings.lasyDisabled ||
        (e('.wpb_text_column.wpb_animate_when_almost_visible.wpb_fade').each(function () {
          e(this)
            .wrap('<div class="lazy-loading"></div>')
            .addClass('lazy-loading-item')
            .data('ll-effect', 'fading');
        }),
        e('.ct-list.lazy-loading').each(function () {
          e(this).data('ll-item-delay', '200'),
            e('li', this).addClass('lazy-loading-item').data('ll-effect', 'slide-right');
        }),
        e.lazyLoading()),
      (e.fn.updateTabs = function () {
        jQuery('.ct-tabs', this).each(function (t) {
          var a = e(this);
          a.ctPreloader(function () {
            a.easyResponsiveTabs({
              type: 'default',
              width: 'auto',
              fit: !1,
              activate: function (t, a) {
                var i = e(t.target),
                  o = i.attr('aria-controls');
                i.closest('.ui-tabs')
                  .find('.ct_tab[aria-labelledby="' + o + '"]')
                  .trigger('tab-update');
              },
            });
          });
        }),
          jQuery('.ct-tour', this).each(function (t) {
            var a = e(this);
            a.ctPreloader(function () {
              a.easyResponsiveTabs({
                type: 'vertical',
                width: 'auto',
                fit: !1,
                activate: function (t, a) {
                  var i = e(t.target),
                    o = i.attr('aria-controls');
                  i.closest('.ui-tabs')
                    .find('.ct_tab[aria-labelledby="' + o + '"]')
                    .trigger('tab-update');
                },
              });
            });
          });
      });
    var i = [],
      o = [];
    function r(t, r) {
      var n = [];
      if (
        ((t ? i : o).forEach(function (e) {
          n.push(e);
        }),
        n.length > 0)
      ) {
        var s = a.offset(),
          l = a.css('padding-left'),
          c = a.width();
        n.forEach(function (t) {
          !(function (t, a, i, o, r) {
            var n = t.prev(),
              s = 0;
            (0 == n.length || n.hasClass('fullwidth-block')) &&
              ((n = t.parent()), (s = parseInt(n.css('padding-left'))));
            var l = { width: o };
            (l[window.ctSettings.isRTL ? 'right' : 'left'] =
              a.left - (n.length ? n.offset().left : 0) + parseInt(i) - s),
              t.css(l),
              r ||
                (function (t) {
                  t.trigger('updateTestimonialsCarousel'),
                    t.trigger('updateClientsCarousel'),
                    t.trigger('fullwidthUpdate'),
                    e('.marker-wave svg', t).hide(),
                    setTimeout(function () {
                      e('.marker-wave svg', t).show();
                    }, 50);
                })(t);
          })(e(t), s, l, c);
        });
      }
    }
    e('.fullwidth-block').each(function () {
      var t = e(this).parents('.vc_row'),
        a = { isInline: !1 };
      t.each(function () {
        if (this.hasAttribute('data-vc-full-width')) return (a.isInline = !0), !1;
      }),
        a.isInline ? i.push(this) : o.push(this);
    }),
      window.disableCTSlideshowPreloaderHandle ||
        jQuery('.ct-slideshow').each(function () {
          e(this).ctPreloader(function () {});
        }),
      e(function () {
        function t(t) {
          if (0 != jQuery('.ct-counter-odometer', t).size()) {
            var a = jQuery('.ct-counter-odometer', t).get(0),
              i = jQuery(t).closest('.ct-counter-box').data('number-format');
            (i = i || '(ddd).ddd'),
              new Odometer({ el: a, value: e(a).text(), format: i }).update(e(a).data('to'));
          }
        }
        function a(e) {
          return window.pageYOffset || document.documentElement.scrollTop;
        }
        e('#ct-icons-loading-hide').remove(),
          e('#ct-preloader-inline-css').remove(),
          jQuery('iframe')
            .not('.ct-video-background iframe')
            .each(function () {
              e(this).ctPreloader(function () {});
            }),
          jQuery('.ct-video-background').each(function () {
            var t = e(this),
              a = e('.ct-video-background-inner', this),
              i = t.data('aspect-ratio') ? t.data('aspect-ratio') : '16:9',
              o = t.closest('.fullwidth-block');
            function r() {
              a.removeAttr('style'),
                a.width() / a.height() > i
                  ? a.css({
                      height: a.width() / i + 'px',
                      marginTop: -(a.width() / i - t.height()) / 2 + 'px',
                    })
                  : a.css({
                      width: a.height() * i + 'px',
                      marginLeft: -(a.height() * i - t.width()) / 2 + 'px',
                    });
            }
            (i =
              (i = /(\d+):(\d+)/.exec(i)) && 0 != parseInt(i[1]) && 0 != parseInt(i[2])
                ? parseInt(i[1]) / parseInt(i[2])
                : 16 / 9),
              t.closest('.page-title-block').length > 0 && r(),
              o.length ? o.on('fullwidthUpdate', r) : e(window).resize(r);
          }),
          r(!1),
          window.ctSettings.parallaxDisabled ||
            e('.fullwidth-block').each(function () {
              var t = e(this),
                a = t.data('mobile-parallax-enable') || '0';
              window.ctSettings.isTouch && '1' != a
                ? e('.fullwidth-block-background', t).css({ backgroundAttachment: 'scroll' })
                : t.hasClass('fullwidth-block-parallax-vertical')
                ? e('.fullwidth-block-background', t).parallaxVertical('50%')
                : t.hasClass('fullwidth-block-parallax-horizontal') &&
                  e('.fullwidth-block-background', t).parallaxHorizontal();
            }),
          e(window).resize(function () {
            r(!1);
          }),
          jQuery(
            'select.ct-combobox, .ct-combobox select, .widget_archive select, .widget_product_categories select, .widget_layered_nav select, .widget_categories select',
          ).each(function (t) {
            e(this).combobox();
          }),
          jQuery('input.ct-checkbox, .ct-checkbox input').checkbox(),
          'function' == typeof e.fn.ReStable &&
            jQuery('.ct-table-responsive').each(function (t) {
              e('> table', this).ReStable({
                maxWidth: 768,
                rowHeaders: e(this).hasClass('row-headers'),
              });
            }),
          jQuery('.fancybox').each(function () {
            e(this).fancybox();
          }),
          (window.ct_init_odometer = t),
          jQuery('.ct-counter').each(function (e) {
            if (
              jQuery(this).closest('.ct-counter-box').size() > 0 &&
              jQuery(this).closest('.ct-counter-box').hasClass('lazy-loading') &&
              !window.ctSettings.lasyDisabled
            )
              return (
                jQuery(this)
                  .addClass('lazy-loading-item')
                  .data('ll-effect', 'action')
                  .data('item-delay', '0')
                  .data('ll-action-func', 'ct_init_odometer'),
                jQuery('.ct-icon', this)
                  .addClass('lazy-loading-item')
                  .data('ll-effect', 'fading')
                  .data('item-delay', '0'),
                void jQuery('.ct-counter-text', this)
                  .addClass('lazy-loading-item')
                  .data('ll-effect', 'fading')
                  .data('item-delay', '0')
              );
            t(this);
          }),
          jQuery('.panel-sidebar-sticky > .sidebar').scSticky(),
          jQuery('iframe + .map-locker').each(function () {
            var t = e(this);
            t.click(function (e) {
              e.preventDefault(),
                t.hasClass('disabled')
                  ? t.prev('iframe').css({ 'pointer-events': 'none' })
                  : t.prev('iframe').css({ 'pointer-events': 'auto' }),
                t.toggleClass('disabled');
            });
          }),
          e(
            '.primary-navigation a, .footer-navigation a, .scroll-top-button, .scroll-to-anchor, .scroll-to-anchor a, .top-area-menu a',
          ).each(function () {
            var t = e(this),
              i = t.attr('href');
            i &&
              ((i = i.split('#')),
              e('#' + i[1]).length &&
                (t.closest('li').removeClass('menu-item-active current-menu-item'),
                t.closest('li').parents('li').removeClass('menu-item-current'),
                e(window).scroll(function () {
                  if (t.closest('li.menu-item').length) {
                    var o = 0;
                    e('#page').hasClass('vertical-header') ||
                      (o = e('#site-header').outerHeight() + e('#site-header').position().top);
                    var r = e('#' + i[1]).offset().top - o;
                    a() >= r && a() <= r + e('#' + i[1]).outerHeight()
                      ? (t.closest('li').addClass('menu-item-active'),
                        t.closest('li').parents('li').addClass('menu-item-current'))
                      : (t.closest('li').removeClass('menu-item-active'),
                        t
                          .closest('li')
                          .parents('li.menu-item-current')
                          .each(function () {
                            e('.menu-item-active', this).length ||
                              e(this).removeClass('menu-item-current');
                          }));
                  }
                }),
                t.click(function (t) {
                  t.preventDefault();
                  var a = 0;
                  if (e('#site-header.animated-header').length) {
                    var o = e('#site-header').hasClass('shrink');
                    e('#site-header').addClass('scroll-counting'),
                      e('#site-header').addClass('fixed shrink'),
                      (a = e('#site-header').outerHeight() + e('#site-header').position().top),
                      o ||
                        !e('#top-area').length ||
                        e('#site-header').find('#top-area').length ||
                        (a -= e('#top-area').outerHeight()),
                      o || e('#site-header').removeClass('fixed shrink'),
                      setTimeout(function () {
                        e('#site-header').removeClass('scroll-counting');
                      }, 50);
                  }
                  var r = e('#' + i[1]).offset().top - a + 1;
                  e('html, body').stop(!0, !0).animate({ scrollTop: r }, 200, 'easeInOutQuint');
                })),
              e(window).load(function () {
                window.location.href == t.attr('href') && t.click();
              }));
          }),
          e('body').on('click', '.post-footer-sharing .ct-button', function (t) {
            t.preventDefault(),
              e(this).closest('.post-footer-sharing').find('.sharing-popup').toggleClass('active');
          }),
          e(window)
            .scroll(function () {
              a() > 0
                ? e('.scroll-top-button').addClass('visible')
                : e('.scroll-top-button').removeClass('visible');
            })
            .scroll(),
          e('a.hidden-email').each(function () {
            e(this).attr('href', 'mailto:' + e(this).data('name') + '@' + e(this).data('domain'));
          }),
          e('body').updateTabs();
      }),
      e(document).on('show.vc.accordion', '[data-vc-accordion]', function () {
        var t = e(this).data('vc.accordion').getContainer(),
          a = 0;
        if (!t.find('.vc_tta-tabs').length || e(this).is(':visible')) {
          if (e('#site-header.animated-header').length && e('#site-header').hasClass('fixed')) {
            var i = e('#site-header').hasClass('shrink');
            e('#site-header').addClass('scroll-counting'),
              e('#site-header').addClass('fixed shrink'),
              (a = e('#site-header').outerHeight() + e('#site-header').position().top),
              i || e('#site-header').removeClass('fixed shrink'),
              e('#site-header').removeClass('scroll-counting');
          }
          var o = t.offset().top - a - 100 + 1;
          e('html, body').stop(!0, !0).animate({ scrollTop: o }, 10, 'easeInOutQuint');
        }
      }),
      e(document).on('vc-full-width-row', function (t) {
        if (window.ctOptions.clientWidth - a.width() > 25 || window.ctSettings.isRTL)
          for (var i = 1; i < arguments.length; i++) {
            var o = e(arguments[i]);
            o.addClass('vc_hidden');
            var n = o.next('.vc_row-full-width');
            n.length || (n = o.parent().next('.vc_row-full-width'));
            var s = parseInt(o.css('margin-left'), 10),
              l = parseInt(o.css('margin-right'), 10),
              c =
                0 -
                n.offset().left -
                s +
                e('#page').offset().left +
                parseInt(e('#page').css('padding-left')),
              d = e('#page').width(),
              h = window.ctSettings.isRTL ? 'right' : 'left',
              u = {
                position: 'relative',
                left: c,
                'box-sizing': 'border-box',
                width: e('#page').width(),
              };
            if (((u[h] = c), o.css(u), !o.data('vcStretchContent'))) {
              var f = -1 * c;
              0 > f && (f = 0);
              var p = d - f - n.width() + s + l;
              0 > p && (p = 0), o.css({ 'padding-left': f + 'px', 'padding-right': p + 'px' });
            }
            o.attr('data-vc-full-width-init', 'true'), o.removeClass('vc_hidden');
          }
        r(!0);
      });
  })(jQuery),
  (function (e) {
    'use strict';
    e('.menu-item-search a').on('click', function (t) {
      t.preventDefault(), e('.menu-item-search').toggleClass('active');
    });
  })(jQuery);

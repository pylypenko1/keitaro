
  con = document.querySelector(' .header .header-mobile-menu');

  $(document).ready(function () {
    let e = $('.open-modal'),
      t = $('.modal-fixed'),
      o = $('.modal-credit'),
      i = $('.modal-detail-info'),
      s = $('.closeBut'),
      n = $('body'),
      c = $('.open-modal-credit'),
      a = $('.open-detail-info');
    e.click(function () {
      t.addClass('show'), n.addClass('overflow-hidden');
    }),
      c.click(function () {
        o.addClass('show'), n.addClass('overflow-hidden');
      }),
      a.click(function () {
        i.addClass('show'), n.addClass('overflow-hidden');
      }),
      s.click(function () {
        t.removeClass('show'),
          o.removeClass('show'),
          i.removeClass('show'),
          n.removeClass('overflow-hidden');
      });
  }),
  $('.open-dropdown').click(function () {
    $(this).toggleClass('active'), $(this).siblings('.content-dropdown').slideToggle();
  }),
  $('select').each(function () {
    var e = $(this),
      t = $(this).children('option').length;
    e.addClass('s-hidden'),
      e.wrap('<div class="select"></div>'),
      e.after('<div class="styledSelect"></div>');
    var o = e.next('div.styledSelect');
    o.text(e.children('option').eq(0).text());
    for (var i = $('<ul />', { class: 'options' }).insertAfter(o), s = 0; s < t; s++)
      $('<li />', {
        text: e.children('option').eq(s).text(),
        rel: e.children('option').eq(s).val(),
      }).appendTo(i);
    var n = i.children('li');
    o.click(function (e) {
      e.stopPropagation(),
        $('div.styledSelect.active').each(function () {
          $(this).removeClass('active').next('ul.options').hide();
        }),
        $(this).toggleClass('active').next('ul.options').toggle();
    }),
      n.click(function (t) {
        t.stopPropagation(),
          o.text($(this).text()).removeClass('active'),
          e.val($(this).attr('rel')),
          i.hide();
      }),
      $(document).click(function () {
        o.removeClass('active'), i.hide();
      });
  }),
  $(document).ready(function () {
    let e = $('.tabs-button-js'),
      t = $('.tabs-content-js'),
      o = function (o) {
        t.each(function (e, t) {
          e === o ? $(t).css('display', 'block') : $(t).css('display', 'none');
        }),
          e.each(function (e, t) {
            e === o ? $(t).addClass('active') : $(t).removeClass('active');
          });
      };
    o(0),
      e.each(function (i, s) {
        $(s).click(function () {
          $(s).hasClass('active')
            ? (t.each(function (e, t) {
                $(t).css('display', 'none');
              }),
              e.each(function (e, t) {
                $(t).removeClass('active');
              }))
            : o(i);
        });
      });
  }),
  (hide = !0),
  $('body').on('click', function () {
    hide && $('.dropdown').removeClass('active'), (hide = !0);
  }),
  $('body').on('click', '.dropdown', function () {
    var e = $(this);
    e.hasClass('active') && $('.dropdown').removeClass('active'),
      $('.dropdown').removeClass('active'),
      e.toggleClass('active'),
      (hide = !1);
  });

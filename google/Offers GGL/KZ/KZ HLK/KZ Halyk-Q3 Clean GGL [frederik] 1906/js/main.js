$(document).ready(function () {
  new WOW().init(),
    $('.popup-wrapper, .close').on('click', function (i) {
      i.target == this && $(this).closest('.popup').fadeOut();
    }),
    jQuery('img.svg').each(function () {
      var i = jQuery(this),
        t = i.attr('id'),
        e = i.attr('class'),
        n = i.attr('src');
      jQuery.get(
        n,
        function (n) {
          var a = jQuery(n).find('svg');
          void 0 !== t && (a = a.attr('id', t)),
            void 0 !== e && (a = a.attr('class', e + ' replaced-svg')),
            !(a = a.removeAttr('xmlns:a')).attr('viewBox') &&
              a.attr('height') &&
              a.attr('width') &&
              a.attr('viewBox', '0 0 ' + a.attr('height') + ' ' + a.attr('width')),
            i.replaceWith(a);
        },
        'xml',
      );
    }),
    $('.quiz__question input[type="radio"]').on('change', function () {
      var e = $(this).closest('.quiz__question'),
        n = $(e).find('.quiz__btn-next');
      $(n).prop('disabled', !1);
      var a = $(this).closest('.quiz__question'),
        o = Number($(a).data('question'));
      (o += 1),
        window.setTimeout(function () {
          o <= i
            ? ($('.quiz__question').removeClass('active'),
              $('.quiz__question[data-question="' + o + '"]').addClass('active'),
              t(o))
            : ($('.quiz__question').removeClass('active'),
              $('.quiz__last').addClass('active'),
              $('.quiz__left--side').hide(),
              $('.quiz__general').hide(),
              window.setTimeout(function () {
                $('.quiz__load').fadeOut();
              }, 2e3));
        }, 500);
    }),
    $('.quiz__question input[type="checkbox"]').on('change', function () {
      var i = $(this).closest('.quiz__question'),
        t = $(i).find('.quiz__btn-next');
      $(i).find('input[type=checkbox]:checked').length > 0
        ? $(t).prop('disabled', !1)
        : $(t).prop('disabled', !0);
    });
  var i = $('.quiz__general').find('.quiz__question').length;
  function t(t) {
    $('#quiz-percent').html(Math.round((t / i) * 100)),
      $('#quiz-bar-prg').css('width', (t / i) * 100 + '%'),
      $('.quiz__help p').html($('#hint_' + t).html());
  }
  $('.quiz__btn-next').on('click', function () {
    var e = $(this).closest('.quiz__question'),
      n = Number($(e).data('question'));
    (n += 1) <= i
      ? ($('.quiz__question').removeClass('active'),
        $('.quiz__question[data-question="' + n + '"]').addClass('active'),
        t(n))
      : ($('.quiz__question').removeClass('active'),
        $('.quiz__last').addClass('active'),
        $('.quiz__left--side').hide(),
        $('.quiz__general').hide(),
        window.setTimeout(function () {
          $('.quiz__load').fadeOut();
        }, 2e3));
  }),
    $('.quiz__btn-prev').on('click', function () {
      var i = $(this).closest('.quiz__question'),
        e = Number($(i).data('question'));
      (e -= 1),
        $('.quiz__question').removeClass('active'),
        $('.quiz__question[data-question="' + e + '"]').addClass('active'),
        t(e);
    }),
    $('.quiz__last input[name="contact"]').on('change', function () {
      'E-mail' == $(this).val()
        ? $('#q_mail').prop('required', !0).removeClass('visible-hidden')
        : $('#q_mail').prop('required', !1).addClass('visible-hidden');
    }),
    t(1),
    $('.quiz__inputs-block input').on('keyup', function () {
      var i = $(this).closest('.quiz__question'),
        t = $(i).find('.quiz__btn-next'),
        e = $(i).find('.quiz__inputs-block input'),
        n = !0;
      e.each(function () {
        0 == $(this).val().length && (n = !1);
      }),
        n ? $(t).prop('disabled', !1) : $(t).prop('disabled', !0);
    }),
    $('.footer__btn').on('click', function () {
      $('.footer').slideToggle(), $(this).toggleClass('active');
    }),
    $('.widget-close').on('click', function () {
      $('.widget').toggleClass('closed'), $(this).toggleClass('active');
    }),
    $('.quiz__contact__item input').on('change', function () {
      'Email' == $(this).val()
        ? ($('#inp-mail').prop('required', !0),
          $('#inp-mail').removeClass('visible-hidden'),
          $('#inp-phone').attr('placeholder', 'Ваш телефон'))
        : ($('#inp-phone').attr('placeholder', 'Ваш телефон в ' + $(this).val()),
          $('#inp-mail').prop('required', !1),
          $('#inp-mail').addClass('visible-hidden'));
    }),
    $('a[href="#popup-policy"]').on('click', function (i) {
      i.preventDefault(), $('#popup-policy').fadeIn();
    });
});

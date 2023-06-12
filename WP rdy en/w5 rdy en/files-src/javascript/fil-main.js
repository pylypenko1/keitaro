$(document).ready(function () {
  $('.fanboxy').each(function () {
    $(this).attr('href', $(this).children('img').attr('src'));
  });
  $('.fanboxy').fancybox();

  $(function () {
    let head = $('.head-box');
    let hederHeight = head.height(); // вычисляем высоту шапки

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        head.addClass('head_fixed');
        $('body').css({
          paddingTop: hederHeight + 'px', // делаем отступ у body, равный высоте шапки
        });
      } else {
        head.removeClass('head_fixed');
        $('body').css({
          paddingTop: 0, // удаляю отступ у body, равный высоте шапки
        });
      }
    });
  });

  if ($('.maincont').hasClass('flex-column') || $('.maincont').hasClass('flex-column-reverse')) {
    $('.contbl').css('flex-direction', 'row');
    $('.contbl--item').css('width', '25%');
    $('.maincont iframe').css('height', '400px');
  }

  let myHeight = $('.mpic').prop('naturalHeight');
  let myWidth = $('.mpic').prop('naturalWidth');

  if (myHeight == myWidth) {
    if (myWidth > 600) {
      $('.mpic').css({ width: '50%' });
    }
  }
  if (myHeight > myWidth) {
    if (myHeight < 2000 && myHeight > 700) {
      $('.mpic').css({ width: '25%' });
    }
    if (myHeight < 700 && myHeight > 500) {
      $('.mpic').css({ width: '50%' });
    }
  }
  if (myHeight < myWidth) {
    if (myWidth < 600) {
      $('.mpic').css({ width: '500px' });
    }
  }
});

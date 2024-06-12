let currentColor = '';

document.querySelectorAll('.answer a').forEach(function (element) {
  element.addEventListener('click', function () {
    currentColor = element.getAttribute('data-color');
    changeImage(currentColor);
  });
});

function changeImage(color) {
  let imagePath = '';

  switch (color) {
    case 'mat-black':
      imagePath = 'assets/black.png';
      break;
    case 'shiny-steel-blue':
      imagePath = 'assets/blue.png';
      break;
    case 'shiny-white':
      imagePath = 'assets/white.png';
      break;
  }

  document.getElementById('color-image').src = imagePath;
}

$('.boxes .box').click(function (e) {
  e.preventDefault();
  let curentBox = $(this);
  if (curentBox.hasClass('active')) {
    console.log('has active');
  } else {
    curentBox.addClass('active');
    curentBox.addClass('noclick');
    curentBox.find('.box__front').css('background-image', "url('./assets/box-lid-ios.png')");
    setTimeout(function () {
      $('.two_modal_icon').fadeIn();
      $('.boxes .box').addClass('second-step');
      $('.boxes .box.active').removeClass('second-step');
    }, 1000);
  }
  if (curentBox.hasClass('second-step')) {
    curentBox.addClass('active');
    curentBox.addClass('noclick');
    let innerImagePath = '';

    switch (currentColor) {
      case 'mat-black':
        innerImagePath = './assets/5Korobka_black.png';
        break;
      case 'shiny-steel-blue':
        innerImagePath = './assets/5Korobka_blue.png'; // Убедитесь, что путь к файлу правильный
        break;
      case 'shiny-white':
        innerImagePath = './assets/5Korobka_white.png'; // Убедитесь, что путь к файлу правильный
        break;
      default:
        innerImagePath = './assets/5Korobka_black.png'; // Убедитесь, что путь к файлу правильный
    }

    curentBox.find('.box__inner').css('background-image', `url(${innerImagePath})`);
    curentBox.find('.box__front').css('background-image', "url('./assets/box-lid-ios.png')");
    setTimeout(function () {
      $('.two_modal_icon_Two').fadeIn();
      $('.two_modal_icon').remove();
    }, 1000);
  }
});

$('.click_me_pidor').click(function (e) {
  e.preventDefault();
  $('.two_modal_icon').fadeOut();
});

$('.js-pickup').click(function (e) {
  e.preventDefault();
  $('.loader-wrp').fadeIn();
  $('#game').fadeOut();
  $('#comments_display_one').hide();
  $('#page_two').hide();
  setTimeout(function () {
    $('.order-data-wrp').removeClass('hidden');
    $('.order-data-wrp').show();
    $('.loader-wrp').fadeOut();
    $('.cart-content').css('z-index', '9');
  }, 2000);
});

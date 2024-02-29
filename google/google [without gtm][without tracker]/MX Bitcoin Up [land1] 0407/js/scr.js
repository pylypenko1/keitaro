$('.winner-click').on('click', function () {
  var e = $(this).find('.winners-info-hide').css('display'),
    n = $(this).find('.winners-info-hide'),
    i = $(this).find('.more-info').hide();
  'none' === e
    ? (console.log(e),
      $(this).find('.winners-info-hide').show(),
      $(this).find('.more-info').hide(),
      $(this).css({ border: '3px solid #E6AE5C' }))
    : ($(this).find('.winners-info-hide').hide(),
      $(this).find('.more-info').show(),
      $(this).css({ 'background-color': '#001132' }),
      console.log(e)),
    $('.winner-click .winners-info-hide')
      .not(n)
      .hide()
      .parent()
      .css({ 'background-color': '#001132', border: '3px solid #FFFFFF' }),
    $('.more-info').not(i).show('.more-info');
});

$('.faq-click').on('click', function () {
  var e = $(this).find('.winners-info-hide').css('display'),
    n = $(this).find('.winners-info-hide'),
    i = $(this).find('.more-info').hide();
  'none' === e
    ? (console.log(e),
      $(this).find('.winners-info-hide').show(),
      $(this).find('.winners-info span').css({ color: '#E6AE5C' }),
      $(this).find('.more-info').hide(),
      $(this).css({
        border: '2px solid #E6AE5C',
        'background-image': 'url(images/arrow-hide-up.png)',
      }))
    : ($(this).find('.winners-info span').css({ color: '#FFFFF' }),
      $(this).find('.winners-info-hide').hide(),
      $(this).find('.more-info').show(),
      $(this).css({ 'background-image': 'url(images/arrow-hide.png)' }),
      console.log(e)),
    $('.arow-mob')
      .not(n)
      .hide()
      .parent()
      .css({ border: '2px solid #FFFFFF', 'background-image': 'url(images/arrow-hide.png)' }),
    $('.more-info').not(i).show('.more-info');
});

// Обработчик события клика по ссылке
document.getElementById('scroll-link').addEventListener('click', function (e) {
  e.preventDefault(); // Предотвращаем переход по ссылке

  // Получаем целевой элемент для скролла (в данном случае форму)
  let targetElement = document.getElementById('block');

  // Вычисляем позицию элемента на странице
  let targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

  // Плавно прокручиваем страницу к целевой позиции
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });

  // Удалить якорь из адресной строки
  history.replaceState({}, document.title, window.location.pathname);
});

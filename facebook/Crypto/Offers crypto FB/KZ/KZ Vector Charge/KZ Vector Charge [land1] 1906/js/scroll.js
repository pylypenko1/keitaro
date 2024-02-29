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
    behavior: 'smooth'
  });

  // Удалить якорь из адресной строки
  history.replaceState({}, document.title, window.location.pathname);
});

document.getElementById('scroll-link2').addEventListener('click', function (e) {
  e.preventDefault(); // Предотвращаем переход по ссылке

  // Получаем целевой элемент для скролла (в данном случае форму)
  let targetElement = document.getElementById('block');

  // Вычисляем позицию элемента на странице
  let targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

  // Плавно прокручиваем страницу к целевой позиции
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });

  // Удалить якорь из адресной строки
  history.replaceState({}, document.title, window.location.pathname);
});
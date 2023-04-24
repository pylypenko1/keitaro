// Запускаем функцию, когда страница загружается
window.onload = function () {
  // Получаем элементы DOM для баннера и кнопок "Принять" и "Отказаться"
  var cookieBanner = document.getElementById('cookie-banner');
  var acceptButton = document.getElementById('accept-cookies');
  var declineButton = document.getElementById('decline-cookies');

  // Проверяем, есть ли cookie-файл с предыдущими настройками
  var cookieAccepted = getCookie('cookieAccepted');
  if (cookieAccepted == 'true') {
    // Если пользователь уже принял использование cookie-файлов, скрываем баннер
    cookieBanner.style.display = 'none';
  } else {
    // Иначе, показываем баннер
    cookieBanner.style.display = 'block';
  }

  // Обрабатываем клик на кнопке "Принять"
  if (acceptButton) {
    acceptButton.onclick = function () {
      // Сохраняем настройки в cookie-файл
      setCookie('cookieAccepted', 'true', 365);
      // Скрываем баннер
      cookieBanner.style.display = 'none';
    };
  }

  // Обрабатываем клик на кнопке "Отказаться"
  if (declineButton) {
    declineButton.onclick = function () {
      // Удаляем cookie-файл с предыдущими настройками
      deleteCookie('cookieAccepted');
      // Скрываем баннер
      cookieBanner.style.display = 'none';
    };
  }
};

// Функция для сохранения cookie-файла
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

// Функция для получения значения cookie-файла
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Функция для удаления cookie-файла
function deleteCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

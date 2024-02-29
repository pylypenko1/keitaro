document.addEventListener('DOMContentLoaded', () => {
  !(function (e, t, s) {
    const o = document.body,
      c = document.querySelectorAll('[data-menu]'),
      n = document.querySelector(e),
      l = document.querySelector(t),
      r = document.querySelector('#menuclose');
    n.addEventListener('click', () => {
      n.classList.toggle(s), l.classList.toggle(s), o.classList.toggle(s);
    });
  })('#menubtn', '.header__list', 'active');
});

// Получаем ссылки на кнопку и элемент, которому хотим изменять класс
const myButton = document.getElementById('menuclose');
const myElement = document.getElementById('list');

// Добавляем обработчик события для клика на кнопку
myButton.addEventListener('click', function() {
    // Проверяем, содержит ли элемент класс 'new-class'
    if (myElement.classList.contains('active')) {
        // Если содержит, удаляем класс 'new-class'
        myElement.classList.remove('active');
    } else {
        // Если не содержит, добавляем класс 'new-class'
        myElement.classList.add('active');
    }
});


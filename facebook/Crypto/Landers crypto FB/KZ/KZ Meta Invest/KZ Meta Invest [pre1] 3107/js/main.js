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


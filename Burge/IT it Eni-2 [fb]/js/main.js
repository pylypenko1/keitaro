(function () {
  /**
   *  This loader connected in app.html for loading first of all.
   *  When APP trigger 'app:loaded' event on documentElement - loader hide
   */
  window.document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let loaderNode = document.querySelector('.preloader');

  if (!loaderNode) {
    console.error('No preloader HTML element');
    return;
  }

  // subscribe to global event
  window.addEventListener('load', hide, false);

  function hide() {
    loaderNode.classList.add('preloader_hide');
    document.documentElement.removeEventListener('app:loaded', hide);

    setTimeout(function () {
      loaderNode.style.display = 'none';
    }, 2000);
  }

  let headerEl = document.querySelector('.header');
  let previousScrollPosition;

  document.addEventListener('scroll', (e) => {
    let currentScrollPosition = window.scrollY + window.innerHeight;

    if (currentScrollPosition > previousScrollPosition) {
      headerEl.classList.add('header__hidden');
    } else if (currentScrollPosition < previousScrollPosition) {
      headerEl.classList.remove('header__hidden');
      headerEl.classList.add('header__top-color');
    }
    if (window.scrollY === 0) {
      headerEl.classList.remove('header__top-color');
    }
    previousScrollPosition = currentScrollPosition;
  });

  $('.to-form').on('click', function (event) {
    let anchor = $(this);
    $('html, body').animate(
      {
        scrollTop: $(anchor.data('url')).offset().top - 100,
      },
      1000,
    );
    event.preventDefault();
  });
})();

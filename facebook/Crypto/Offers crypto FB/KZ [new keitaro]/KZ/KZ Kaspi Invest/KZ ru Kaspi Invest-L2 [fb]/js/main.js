document.addEventListener('DOMContentLoaded', () => {
  /*counter for header*/
  setInterval(() => {
    let currentVisitors = document.getElementsByClassName('users')[0];
    let startCurrentVisitors = 329;
    currentVisitors.textContent = 329 + Math.floor(Math.random() * 10);
  }, '5000');
  /*anchor scroller*/
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementsByName(blockID)[0].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
  /*swiper for screens*/
  let swiper = new Swiper('.swiper-news-desktop', {
    initialSlide: 1,
    pagination: {
      el: '.swiper-news-pagination',
    },
  });
  let faq = document.getElementsByClassName('question');
  let i;
  /*faq*/
  for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener('click', function () {
      let answer = this.getElementsByClassName('answer')[0];
      let toggler = this.getElementsByClassName('toggler')[0];
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        toggler.classList.remove('rotated');
      } else {
        answer.style.display = 'block';
        toggler.classList.add('rotated');
      }
    });
  }
  /*counter*/
  let startValue = 100000; /*number as seconds*/
  let seconds = startValue;
  setInterval(() => {
    seconds -= 1;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let convertedMin = minutes % 60;
    let convertedSeconds = seconds % 60;
    let convertedH = hours % 24;
    if (convertedH < 10) convertedH = '0' + convertedH;
    if (convertedMin < 10) convertedMin = '0' + convertedMin;
    if (convertedSeconds < 10) convertedSeconds = '0' + convertedSeconds;
    if (days < 10) days = '0' + days;
    //console.log("days ", days, "hours ", hours, "minutes ", minutes, "seconds ", convertedSeconds);
    document.getElementsByClassName('numbers')[0].getElementsByClassName('days')[0].textContent =
      days;
    document.getElementsByClassName('numbers')[0].getElementsByClassName('hours')[0].textContent =
      convertedH;
    document.getElementsByClassName('numbers')[0].getElementsByClassName('minutes')[0].textContent =
      convertedMin;
    document.getElementsByClassName('numbers')[0].getElementsByClassName('seconds')[0].textContent =
      convertedSeconds;
  }, '1000');
});

// RANGE SLIDER
$(function () {
  $('.js-range-slider').ionRangeSlider({
    skin: 'round',
    min: 300,
    max: 1000000,
    from: 1000,
    max_postfix: '+',
    postfix: 'BYN.',
    grid: !0,
    onStart: function (o) {
      $('#calcResult').text(Math.round(0.9 * o.from + o.from) + ' BYN.');
    },
    onChange: function (o) {
      $('#calcResult').text(Math.round(0.9 * o.from + o.from) + ' BYN.');
    },
  });
}),
  $('#currentYear').html(new Date().getFullYear());
// NAVIGATION
const scrollToForm = () => {
  document.querySelector('#registration').scrollIntoView({
    behavior: 'smooth',
  });
};
// RANDOM INT
const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
document.querySelector('#rand_man').innerHTML = randomInt(115, 285);
document.querySelector('#rand_places').innerHTML = randomInt(7, 18);

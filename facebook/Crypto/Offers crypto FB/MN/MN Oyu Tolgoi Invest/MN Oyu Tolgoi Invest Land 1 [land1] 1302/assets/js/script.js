$(function () {
  $('.js-range-slider').ionRangeSlider({
    skin: 'round',
    min: 550000,
    max: 45000000,
    from: 550000,
    max_postfix: '+',
    postfix: ' ₮',
    grid: true,
    onStart: function (data) {
      $('#calcResult').text(Math.round(data.from * 0.32 + data.from) + ' ₮');
    },
    onChange: function (data) {
      $('#calcResult').text(Math.round(data.from * 0.32 + data.from) + ' ₮');
    },
  });
});
$('#currentYear').html(new Date().getFullYear());
const scrollToForm = () => {
  document.querySelector('#registration').scrollIntoView({ behavior: 'smooth' });
};

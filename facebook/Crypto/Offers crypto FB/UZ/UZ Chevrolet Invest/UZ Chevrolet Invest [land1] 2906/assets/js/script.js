$(function () {
  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    min: 1800000,
    max: 2690922,
    from: 500,
    max_postfix: "",
    postfix: " сум",
    grid: true,
    onStart: function (data) {
      var formattedResult = formatNumber((data.from * 0.5) + data.from);
      $("#calcResult").text(formattedResult + ' сум');
    },
    onChange: function (data) {
      var formattedResult = formatNumber((data.from * 0.5) + data.from);
      $("#calcResult").text(formattedResult + ' сум');
    },
  });

  // Функция для форматирования числа с разделителем пробела
  function formatNumber(number) {
    return number.toLocaleString('ru-RU');
  }
});
$('#currentYear').html(new Date().getFullYear());
const scrollToForm = () => {
    document.querySelector('#registration').scrollIntoView({ behavior: "smooth" });
}
$(document).ready(function(){

    $(".btn-modal-reg").on("click", function(){
       console.log($(".t-popup"));
       $($(".t-popup")).addClass("t-popup_show").css("display","block");
    });

   //  ionRangeSlider
   $(function() {
      $('.js-range-slider').ionRangeSlider({
         skin: 'round',
         min: 150,
         max: 200000,
         from: 150,
         max_postfix: '+',
         postfix: ' долл.',
         grid: true,
         onStart: function(data) {
         $('#calcResult').text(Math.round((data.from * 0.48) + data.from) + ' долл.');
         },
         onChange: function(data) {
         $('#calcResult').text(Math.round((data.from * 0.48) + data.from) + ' долл.');
         },
      });
   });



    // Timer
    let timeMinut = 15*60*60;
    let spanHours = document.getElementById("hours");
    let spanMinutes = document.getElementById("minutes");
    let spanSeconds = document.getElementById("seconds");



    let timer = setInterval(function () {
      let seconds = timeMinut%60 // Получаем секунды
      let minutes = timeMinut/60%60 // Получаем минуты
      let hour = timeMinut/60/60%60 // Получаем часы
      // Условие если время закончилось то...
      if (timeMinut <= 0) {
          // Таймер обнуляется
          timeMinut = 15*60*60;
      } else { // Иначе
          // Создаём переменные с выводом времени
          let vueSeconds = seconds;
          let vueMinutes = Math.trunc(minutes);
          let vueHours = Math.trunc(hour);

          // Выводим строку в блок для показа таймера
          spanSeconds.innerHTML = vueSeconds;
          spanMinutes.innerHTML = vueMinutes;
          spanHours.innerHTML = vueHours;
      }
      --timeMinut; // Уменьшаем таймер
  }, 1000)

});





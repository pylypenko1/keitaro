function getRandomArbitrary(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}

setInterval(function () {
   let number = getRandomArbitrary(160, 299);
   $('.register-now__count-number').html(number);
}, 5000);

$(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   }, 500);
});


$(document).ready(function () {



   //  ionRangeSlider
   $(function () {
      $('.js-range-slider').ionRangeSlider({
         skin: 'round',
         min: 150,
         max: 200000,
         from: 150,
         max_postfix: '+',
         postfix: ' долл.',
         grid: true,
         onStart: function (data) {
            $('#calcResult').text(Math.round((data.from * 2.666) + data.from) + ' долл.');
         },
         onChange: function (data) {
            $('#calcResult').text(Math.round((data.from * 2.666) + data.from) + ' долл.');
         },
      });
   });

   let number1 = Math.floor(Math.random() * (749 - 194) + 194);
   let number2 = Math.floor(Math.random() * (73 - 30) + 30);

   count1 = $("#register-count1")
   count2 = $("#register-count2")

   count1.html(number1)
   count2.html(number2)

   let flag1 = 1
   let flag2 = -1


   setInterval(function () {
      let change = Math.floor(Math.random() * (13 - 1) + 1);
      change *= flag1
      number1 += change
      flag1 *= -1
      if (number1 >= 749) {
         number1 -= 60;
      } else if (number1 <= 194) {
         number1 += 60;
      } else {
         count1.html(number1);
      }
   }, 5000)

   setInterval(function () {
      let change = Math.floor(Math.random() * (7 - 1) + 1);
      change *= flag2
      number2 += change
      if (number2 >= 73) {
         number2 -= 11;
      } else if (number2 <= 3) {
         number2 += 11;
      } else {
         count2.html(number2);
      }
   }, 6000)

   let now = new Date()
   let yesterday = new Date()
   yesterday.setDate(yesterday.getDate() - 1);

   let selectDateMob = $(".signals__col_mobile3").find("span");
   let selectTimeMob = $(".signals__col_mobile3").find("pop");


   let selectDateDesctop = $(".dim-date")
   let selectTimeDesctop = $(".dim-time")

   let arrRandomTime = []

   for (let i = 0; i < selectDateMob.length; i++) {
      let randomClode = getRandomArbitrary(10, 90)
      let pastClose = new Date()

      arrRandomTime.push(pastClose.setMinutes(pastClose.getMinutes() - randomClode))
   }

   arrRandomTime.sort((a, b) => b - a);


   for (let i = 0; i < selectDateMob.length; i++) {
      let randomOpen = getRandomArbitrary(91, 300)
      let pastClose = new Date(arrRandomTime[i])
      let pastOpen = new Date()
      pastOpen.setMinutes(pastOpen.getMinutes() - randomOpen)

      if (i % 2 == 0) {
         let time = getTimeGenerator(pastOpen.getHours(), pastOpen.getMinutes())

         $(selectDateMob[i]).html(pastOpen.toLocaleDateString())
         $(selectTimeMob[i]).html(time)

         $(selectDateDesctop[i]).html(pastOpen.toLocaleDateString())
         $(selectTimeDesctop[i]).html(time)

      } else {
         let time = getTimeGenerator(pastClose.getHours(), pastClose.getMinutes())

         $(selectDateMob[i]).html(pastClose.toLocaleDateString())
         $(selectTimeMob[i]).html(time)

         $(selectDateDesctop[i]).html(pastClose.toLocaleDateString())
         $(selectTimeDesctop[i]).html(time)
      }
   }

   $("#popuping").on("click", function () {
      $(".t-popup").css("display", "block");
   })

   $(".btn-modal").on("click", function () {
      $(".t-popup").css("display", "block");
   })

   $(".t-popup__close-icon").on("click", function () {
      $(".t-popup").css("display", "none");
   })

   // Timer
   let timeMinut = 15 * 60 * 60;
   let spanHours = document.getElementById("hours");
   let spanMinutes = document.getElementById("minutes");
   let spanSeconds = document.getElementById("seconds");



   setInterval(function () {
      let seconds = timeMinut % 60 // Получаем секунды
      let minutes = timeMinut / 60 % 60 // Получаем минуты
      let hour = timeMinut / 60 / 60 % 60 // Получаем часы
      // Условие если время закончилось то...
      if (timeMinut <= 0) {
         // Таймер обнуляется
         timeMinut = 15 * 60 * 60;
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

function getTimeGenerator(hours, minutes) {

   var res = [hours, minutes].map(function (x) {
      return x < 10 ? "0" + x : x
   }).join(":")

   return res
}


$(document).ready(function () {

    // $(".btn-modal-reg").on("click", function () {
    //     console.log($(".t-popup"));
    //     $($(".t-popup")).addClass("t-popup_show").css("display", "block");
    // });

    // //  ionRangeSlider
    // $(function () {
    //     $('.js-range-slider').ionRangeSlider({
    //         skin: 'round',
    //         min: 150,
    //         max: 200000,
    //         from: 150,
    //         max_postfix: '+',
    //         postfix: ' долл.',
    //         grid: true,
    //         onStart: function (data) {
    //             $('#calcResult').text(Math.round((data.from * 0.48) + data.from) + ' долл.');
    //         },
    //         onChange: function (data) {
    //             $('#calcResult').text(Math.round((data.from * 0.48) + data.from) + ' долл.');
    //         },
    //     });
    // });

    //  ionRangeSlider
    $(function () {
        $(".js-range-slider").ionRangeSlider({
            skin: "round",
            min: 120e3,
            max: 5e6,
            from: 120e3,
            max_postfix: "+",
            postfix: " сум",
            grid: !0,
            onStart: function (t) {
                $("#calcResult").text(Math.round(0.32 * t.from + t.from) + " сум");
            },
            onChange: function (t) {
                $("#calcResult").text(Math.round(0.32 * t.from + t.from) + " сум");
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



    // Timer
    let timeMinut = 15 * 60 * 60;
    let spanHours = document.getElementById("hours");
    let spanMinutes = document.getElementById("minutes");
    let spanSeconds = document.getElementById("seconds");



    let timer = setInterval(function () {
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





const answersArray = document.querySelectorAll('.answers-item');
function answersArrayStart() {
    const answersArray = document.getElementById('questionAnswer').value = `
    (Могу ли я рассчитать ваш средний доход за день? - ${data1}), 
    (Так как платформа доступна не для всех, должен у вас уточнить являетесь ли вы жителем: страны Европейского Союза / Великобритании / Норвегии / Исландии / Швейцарии? -  ${data2}),
    (Почему вы ищите дополнительный источник дохода ? - ${data3}),
    (Сколько часов в день вы уделяете работе? - ${data4}),
    (Есть ли у вас источник пассивного дохода? - ${data5}),
    (Средний месячный доход пользователей составляет от 4 000 $),
    (В котором часу вам было бы удобно ответить на звонок менеджера, чтобы активировать личный кабинет? - ${data6})`;
}
document.addEventListener('DOMContentLoaded', () => {
    setTimeout("$('.body').css('transform','translateY(0)');", 1e3),
        setTimeout("$('.main-desc').addClass('b-show')", 1500),
        setTimeout("$('body').addClass('add-scroll')", 3e3),
        setTimeout("$('html').addClass('add-scroll')", 3e3),
        $(".glow-button").on("click", function () {
            $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show");
        });
    let choiceArray = [];
    let now = new Date(),
        mm = now.getMonth() + 1,
        day = now.getDate(),
        year = now.getFullYear(),
        date = day + "." + mm + "." + year;
    const massange = [
        {
            m: `Здравствуйте! Рады вас приветствовать на официальной платформе для заработка Tesla X! Я автоматический робот созданный Илоном Маском для работы на финансовом рынке! `,
        },
        {
            m: `Моя работа заключается в том, что я провожу анализ финансового рынка и заключаю прибыльные сделки на акциях мировых компаний. Это позволяет вам получать стабильный доход от 200 $ в день без опыта! `,
        },
        {
            m: `Могу ли я рассчитать ваш средний доход за день? `,
        },
        {
            m: `Так как платформа доступна не для всех, должен у вас уточнить являетесь ли вы жителем Казахстана? `,
        },
        {
            m: `Почему вы ищите дополнительный источник дохода ? `
        },
        {
            m: `Сколько часов в день вы уделяете работе? `,
        },
        {
            m: `Есть ли у вас источник пассивного дохода? `
        },
        {
            m: `Отлично `
        },
        {
            m: `Перейдем к следующему вопросу) `
        },
        {
            m: `Средний месячный доход пользователей составляет от 4 000 $.<br> 
            'В котором часу вам было бы удобно ответить на звонок менеджера, чтобы активировать личный кабинет? `
        },
        {
            m: `Спасибо за прохождение опроса! Пару секунд, анализирую ваши ответы…. `
        },
        {
            m: `Вам потенциально одобрен доступ к программе Tesla X. `
        },
        {
            m: `В течении дня с вами свяжется живой человек-специалист Tesla X и активирует ваш личный аккаунт! Удачи! `
        }
    ];
    var mass_id = 0,
        length_mass = 0,
        lengt_num_mas = 0,
        text = "",
        speedtext = 18,
        process = !0;
    function app() {
        var e = new Date(),
            s = ("0" + e.getMinutes()).slice(-2),
            t = ("0" + e.getHours()).slice(-2) + ":" + s;
        if ($(".chat").height() + 100 > $(".content").height()) {
            $("#scroll_id").removeClass("hide");
            var n = $(".inp").val();
            $(".inp").val(++n);
        }
        const c =
            `<div class="chat-content-item manager ">
            <div class="chat-content-desc">
                <div class="chat-content-desc-item manager">
                    <p class="message-time" id="time"> ${t} </p>
                    <p class="text" id="mass${mass_id}"></p>
                </div>
            </div>
        </div>`;
        $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba");
    }
    function myMassange(e) {
        var s = new Date(),
            t = ("0" + s.getMinutes()).slice(-2);
        let n =
            `<div class="chat-content-item user item-active">
            <div class="chat-content-desc">
                <div class="chat-content-desc-item user">
                    <p class="message-time" id="time"> 
                        ${(("0" + s.getHours()).slice(-2) + ":" + t)}
                    </p>
                    <p class="text"> 
                        ${e}
                    </p>
                </div>
            </div>
        </div>`;
        $(".chat-content-list").append(n), $(".content").animate({ scrollTop: $(".chat-content-list").height() }, 700), $("#scroll_id").addClass("hide");
    }
    const answers = document.querySelectorAll('.inputAsnswers');
    function question1() {
        $(".chat-content-list").append(
            `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span id="answer1_1" class="question1M">
                        Да 
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span id="answer1_2" class="question1W">
                        Нет    
                    </span>
                </div>
            </div>`
        );
    }
    function choise1() {
        $(".question1M").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Да"),
                choiceArray.push("Да"),
                answersArray[0].value = "Да",
                data1 = "Да",
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question1W").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Нет"),
                choiceArray.push("Нет"),
                answersArray[0].value = "Нет",
                data1 = "Нет",
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
    }

    function question2() {
        $(".chat-content-list").append(
            `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question2M">
                        Да, я являюсь жителем Казахстана
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block show__invalid__form">
                    <span class="question2W">
                        Нет, у меня паспорт другой страны
                    </span>
                </div>
            </div>`
        );
    }


    function question3() {
        $(".chat-content-list").append(
            `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question3M">
                        Кредиты
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question3W">
                        Здоровье
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question3P">
                        Семья
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question3H">
                        Автомобиль
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question3R">
                        Недвижимость
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question3O">
                        Другие
                    </span>
                </div>
            </div>`
        );
    }
    function choise3() {
        $(".question3M").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Кредиты"),
                choiceArray.push("Кредиты"),
                answersArray[2].value = "Кредиты",
                data3 = "Кредиты",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question3W").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Здоровье"),
                choiceArray.push("Здоровье"),
                answersArray[2].value = "Здоровье",
                data3 = "Здоровье",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question3P").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Семья"),
                choiceArray.push("Семья"),
                answersArray[2].value = "Семья",
                data3 = "Семья",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
        $(".question3H").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Автомобиль"),
                choiceArray.push("Автомобиль"),
                answersArray[2].value = "Автомобиль",
                data3 = "Автомобиль",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
        $(".question3R").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Недвижимость"),
                choiceArray.push("Недвижимость"),
                answersArray[2].value = "Недвижимость",
                data3 = "Недвижимость",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
        $(".question3O").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Другие"),
                choiceArray.push("Другие"),
                answersArray[2].value = "Другие",
                data3 = "Другие",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
    }

    function question4() {
        $(".chat-content-list").append(
            `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question4M">
                        2-5 часов
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question4W">
                        5-8 часов
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question4P">
                        Больше 8 часов в день
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question4Q">
                        Не работаю
                    </span>
                </div>
            </div>`
        );
    }
    function choise4() {
        $(".question4M").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("2-5 часов"),
                choiceArray.push("2-5 часов"),
                answersArray[3].value = "2-5 часов",
                data4 = "2-5 часов",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question4W").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("5-8 часов"),
                choiceArray.push("5-8 часов"),
                answersArray[3].value = "5-8 часов",
                data4 = "5-8 часов",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question4P").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Больше 8 часов в день"),
                choiceArray.push("Больше 8 часов в день"),
                answersArray[3].value = "Больше 8 часов в день",
                data4 = "Больше 8 часов в день",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question4Q").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Не работаю"),
                choiceArray.push("Не работаю"),
                answersArray[3].value = "Не работаю",
                data4 = "Не работаю",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
    }

    function question5() {
        $(".chat-content-list").append(
            `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question5M">
                        Да, есть
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question5W">
                        Нет, но хочу иметь
                    </span>
                </div>
            </div>`
        );
    }
    function choise5() {
        $(".question5M").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Да, есть"),
                choiceArray.push("Да, есть"),
                answersArray[4].value = "Да, есть",
                data5 = "Да, есть",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question5W").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("Нет, но хочу иметь"),
                choiceArray.push("Нет, но хочу иметь"),
                answersArray[4].value = "Нет, но хочу иметь",
                data5 = "Нет, но хочу иметь",
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
    }

    function question6() {
        $(".chat-content-list").append(
            `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question6M">
                        В любое время 
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question6W">
                        9:00-13:00
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question6P">
                        13:00-16:00
                    </span>
                </div><div class="chat-content-buttons-gender-block">
                <span class="question6N">
                    16:00-19:00
                </span>
            </div>
            </div>`
        );
    }
    function choise6() {
        $(".question6M").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("В любое время "),
                choiceArray.push("В любое время "),
                answersArray[5].value = "В любое время",
                data6 = "В любое время",
                answersArrayStart(),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question6W").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("9:00-13:00"),
                choiceArray.push("9:00-13:00"),
                answersArray[5].value = "9:00-13:00",
                data6 = "9:00-13:00",
                answersArrayStart(),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        })
        $(".question6P").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("13:00 - 16:00"),
                choiceArray.push("13:00 - 16:00"),
                answersArray[5].value = "13:00 - 16:00",
                data6 = "13:00 - 16:00",
                answersArrayStart(),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
        $(".question6N").click(() => {
            (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                myMassange("16:00 - 19:00"),
                choiceArray.push("16:00 - 19:00"),
                answersArray[5].value = "16:00 - 19:00",
                data6 = "16:00 - 19:00",
                answersArrayStart(),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(() => {
                    process = !0;
                }, 500);
        });
    }



    setTimeout(() => {
        var e = new Date(),
            s = ("0" + e.getMinutes()).slice(-2);
        const t =
            `<div class="chat-content-item manager ">
            <div class="chat-content-desc">
                <div class="chat-content-desc-item manager">
                    <p class="message-time" id="time"> ${(("0" + e.getHours()).slice(-2) + ":" + s)} </p>
                    <p class="text" id="mass${mass_id}"></p>
                </div>
            </div>
        </div>`;
        $(".chat-content-list").append(t),
            $("#scroll_id").click(function (e) {
                $(this).removeClass("hide-q"), $(".content").animate({ scrollTop: $(".chat").height() }, 700);
            });
        // $('.question2W').click(function (e) {
        //     clearInterval(n)

        // })
        const n = setInterval(function () {

            if (1 == process)
                if (lengt_num_mas != massange.length) {

                    if (
                        ((text += massange[lengt_num_mas].m[length_mass]),
                            length_mass++,
                            $("#mass" + lengt_num_mas).html(text),
                            2 === lengt_num_mas &&
                            length_mass === massange[lengt_num_mas].m.length - 1 &&
                            (question1(), (process = !1), choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({ scrollTop: $(".chat").height() }, 700), $("#scroll_id").removeClass("hide-q")),

                            3 === lengt_num_mas &&
                            length_mass === massange[lengt_num_mas].m.length - 1 &&
                            (question2(), (process = !1), choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({ scrollTop: $(".chat").height() }, 700), $("#scroll_id").removeClass("hide-q")),
                            4 === lengt_num_mas &&
                            length_mass === massange[lengt_num_mas].m.length - 1 &&
                            (question3(), (process = !1), choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({ scrollTop: $(".chat").height() }, 700), $("#scroll_id").removeClass("hide-q")),
                            5 === lengt_num_mas &&
                            length_mass === massange[lengt_num_mas].m.length - 1 &&
                            (question4(), (process = !1), choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({ scrollTop: $(".chat").height() }, 700), $("#scroll_id").removeClass("hide-q")),
                            6 === lengt_num_mas &&
                            length_mass === massange[lengt_num_mas].m.length - 1 &&
                            (question5(), (process = !1), choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({ scrollTop: $(".chat").height() }, 700), $("#scroll_id").removeClass("hide-q")),
                            9 === lengt_num_mas &&
                            length_mass === massange[lengt_num_mas].m.length - 1 &&
                            (question6(), (process = !1), choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({ scrollTop: $(".chat").height() }, 700), $("#scroll_id").removeClass("hide-q")),
                            length_mass == massange[lengt_num_mas].m.length)
                    ) {
                        lengt_num_mas++, mass_id++, (length_mass = 0), (text = ""), app();
                    }
                } else
                    clearInterval(n),
                        $("#mass" + lengt_num_mas)
                            .parent()
                            .parent()
                            .css("display", "none"),
                        $(".iframe-form").addClass("show"),
                        $(".btn-top").addClass("show"),
                        $(".reviews").removeClass("hide");
        }, speedtext);
        function choise2() {
            $(".question2M").click(() => {
                (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                    myMassange("Да, я являюсь гражданином этой страны"),
                    choiceArray.push("Да, я являюсь гражданином этой страны"),
                    answersArray[1].value = "Да, я являюсь гражданином этой страны",
                    data2 = "Да, я являюсь гражданином этой страны",
                    $(".chat-content-buttons-gender").css("display", "none"),
                    setTimeout(() => {
                        process = !0;
                    }, 500);
            })
            $(".question2W").click(() => {
                (document.querySelector(".chat-content-buttons-gender").style.display = "none"),
                    myMassange("Нет, у меня паспорт другой страны"),
                    choiceArray.push("Нет, у меня паспорт другой страны"),
                    answersArray[1].value = "Нет, у меня паспорт другой страны",
                    data2 = "Нет, у меня паспорт другой страны",
                    $(".chat-content-buttons-gender").css("display", "none"),
                    setTimeout(() => {
                        process = !0;
                    }, 500);
            })
        }
    }, 1e3),
        $(".content").scroll(function () {
            "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba");
        });
    var $marker = $("#down-box");
    $(".content").scroll(function () {
        $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? ((document.getElementById("res").value = "0"), $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide");
    });



    // var _0x4b68 = [
    //     "\x61",
    //     "\x6C\x65\x6E\x67\x74\x68",
    //     "\x68\x61\x73\x68",
    //     "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
    //     "\x74\x6F\x70",
    //     "\x6F\x66\x66\x73\x65\x74",
    //     "\x61\x6E\x69\x6D\x61\x74\x65",
    //     "\x68\x74\x6D\x6C\x2C\x20\x62\x6F\x64\x79",
    //     "\x63\x6C\x69\x63\x6B",
    //     "\x65\x61\x63\x68",
    // ];
    // $[_0x4b68[9]]($(_0x4b68[0]), function (_0x5eadx1, _0x5eadx2) {
    //     if (_0x5eadx2[_0x4b68[2]][_0x4b68[1]] == 0) {
    //         return;
    //     }
    //     $(_0x5eadx2)[_0x4b68[8]](function (_0x5eadx3) {
    //         _0x5eadx3[_0x4b68[3]]();
    //         $(_0x4b68[7])[_0x4b68[6]]({ scrollTop: $(_0x5eadx2[_0x4b68[2]])[_0x4b68[5]]()[_0x4b68[4]] }, 2000);
    //     });
    // });

    // var _0x95cc = [
    //     "\x61",
    //     "\x6C\x65\x6E\x67\x74\x68",
    //     "\x68\x61\x73\x68",
    //     "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
    //     "\x74\x6F\x70",
    //     "\x6F\x66\x66\x73\x65\x74",
    //     "\x61\x6E\x69\x6D\x61\x74\x65",
    //     "\x68\x74\x6D\x6C\x2C\x20\x62\x6F\x64\x79",
    //     "\x63\x6C\x69\x63\x6B",
    //     "\x65\x61\x63\x68",
    // ];
    // $[_0x95cc[9]]($(_0x95cc[0]), function (_0x95cex1, _0x95cex2) {
    //     if (_0x95cex2[_0x95cc[2]][_0x95cc[1]] == 0) {
    //         return;
    //     }
    //     $(_0x95cex2)[_0x95cc[8]](function (_0x95cex3) {
    //         _0x95cex3[_0x95cc[3]]();
    //         $(_0x95cc[7])[_0x95cc[6]]({ scrollTop: $(_0x95cex2[_0x95cc[2]])[_0x95cc[5]]()[_0x95cc[4]] }, 2000);
    //     });
    // });

    // var _0xaf39 = [
    //     "\x6F\x6E\x6C\x6F\x61\x64",
    //     "\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75",
    //     "\x62\x6F\x64\x79",
    //     "\x73\x65\x6C\x65\x63\x74\x73\x74\x61\x72\x74",
    //     "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
    //     "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72",
    //     "\x6B\x65\x79\x64\x6F\x77\x6E",
    //     "\x6B\x65\x79\x43\x6F\x64\x65",
    //     "\x4D\x61\x63",
    //     "\x6D\x61\x74\x63\x68",
    //     "\x70\x6C\x61\x74\x66\x6F\x72\x6D",
    //     "\x6D\x65\x74\x61\x4B\x65\x79",
    //     "\x63\x74\x72\x6C\x4B\x65\x79",
    //     "\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E",
    // ];
    // window[_0xaf39[0]] = function () {
    //     document[_0xaf39[2]][_0xaf39[1]] = function () {
    //         return false;
    //     };
    //     window[_0xaf39[5]](_0xaf39[3], function (_0x8685x1) {
    //         _0x8685x1[_0xaf39[4]]();
    //     });
    //     document[_0xaf39[5]](
    //         _0xaf39[6],
    //         function (_0x8685x1) {
    //             if (_0x8685x1[_0xaf39[7]] == 83 && (navigator[_0xaf39[10]][_0xaf39[9]](_0xaf39[8]) ? _0x8685x1[_0xaf39[11]] : _0x8685x1[_0xaf39[12]])) {
    //                 _0x8685x1[_0xaf39[4]]();
    //                 _0x8685x1[_0xaf39[13]]();
    //             }
    //         },
    //         false
    //     );
    // };
})
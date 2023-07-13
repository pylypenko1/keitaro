document.addEventListener('DOMContentLoaded', () => {
  // chats
  function showChats() {
    let choiceArray = [];

    const massange = [
      {
        m: `Здравствуйте! Добро пожаловать на платформу "All Solar". Меня зовут Азиз, я здесь, чтобы помочь Вам ознакомиться с нашим проектом и ответить на все ваши вопросы. Готовы начать?`,
      },
      {
        m: ` Не секрет что в Узбекистане есть проблемы с электричеством в регионах. В 2023 году не каждая семья может наслаждаться благами цивилизации! Наша платформа даёт возможность заработать на развитии энергетической сферы Узбекистана.  `,
      },
      {
        m: ` Компания All Solar смогла снизить дефицит электричества в регионах и принесла прибыль в <b style="color: black;">размере 150 000 000 сум</b> инвесторам. С развитием энергетического кластера и увеличением производства электроэнергии, дивиденды будут расти. `,
      },
      {
        m: `Наша команда предлагает возможность получать прибыль без опыта в привлечении пассивного дохода. Средний месячный заработок пользователя - <b style="color: black;">23 000 000 сум</b>. Требуется всего 1-2 часа в день! Сколько времени вы готовы вкладывать? `,
      },
      {
        m: `Не упустите возможность заработать на дивидендах от инвестиций в перспективный сектор энергетики. Зарегистрируйтесь на нашей платформе прямо сейчас и начните получать доход от развития новой энергетической отрасли Узбекистана `,
      },
      {
        m: `Вам открыт доступ к платформе для заработка. Ваш расчетный ежедневный доход будет составлять <b style="color: black;">от 988 320 сум в день</b>! Со временем сумма Вашего дохода будет становиться еще больше! `,
      },
    ];
    var mass_id = 0,
      length_mass = 0,
      lengt_num_mas = 0,
      text = '',
      speedtext = 14,
      process = !0;

    function app() {
      var e = new Date(),
        s = ('0' + e.getMinutes()).slice(-2),
        t = ('0' + e.getHours()).slice(-2) + ':' + s;
      if ($('.chat').height() + 100 > $('.content').height()) {
        $('#scroll_id').removeClass('hide');
        var n = $('.inp').val();
        $('.inp').val(++n);
      }
      const c = `<div class="chat-content-item manager ">
                            <div class="chat-content-desc">
                                <div class="chat-content-desc-item manager">
                                    <p class="message-time" id="time"> ${t} </p>
                                    <p class="text" id="mass${mass_id}"></p>
                                </div>
                            </div>
                        </div>`;
      $('.chat-content-list').append(c),
        '0' == document.getElementById('res').value
          ? $('#scroll_id').addClass('aba')
          : $('#scroll_id').removeClass('aba');
      $('.content').animate(
        {
          scrollTop: $('.chat-content-list').height(),
        },
        200,
      ),
        $('#scroll_id').addClass('hide');
    }

    function myMassange(e) {
      var s = new Date(),
        t = ('0' + s.getMinutes()).slice(-2);
      let n = `<div class="chat-content-item user item-active">
                            <div class="chat-content-desc">
                                <div class="chat-content-desc-item user">
                                    <p class="message-time" id="time"> 
                                        ${('0' + s.getHours()).slice(-2) + ':' + t}
                                    </p>
                                    <p class="text"> 
                                        ${e}
                                    </p>
                                </div>
                            </div>
                        </div>`;
      $('.chat-content-list').append(n),
        $('.content').animate(
          {
            scrollTop: $('.chat-content-list').height(),
          },
          700,
        ),
        $('#scroll_id').addClass('hide');
    }

    function question1() {
      $('.chat-content-list').append(
        `<div class="chat-content-buttons-gender">
                            <div class="chat-content-buttons-gender-block">
                                <span class="question1M">
                                Да, я готов(а) начать!
                                </span>
                            </div>
                             <div class="chat-content-buttons-gender-block">
                                <span class="question1B">
                                У меня есть несколько вопросов перед тем, как начать.
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question1C">
                                Нет, я хотел(а) бы узнать больше информации.
                                </span>
                            </div>
                        </div>`,
      );
    }

    function choise1() {
      $('.question1M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('Да, я готов(а) начать!'),
          choiceArray.push('Да, я готов(а) начать!'),
          setTimeout(() => {
            process = !0;
          }, 500);
      });
      $('.question1B').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('У меня есть несколько вопросов перед тем, как начать.'),
          choiceArray.push('У меня есть несколько вопросов перед тем, как начать.'),
          setTimeout(() => {
            process = !0;
          }, 500);
      });
      $('.question1C').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('Нет, я хотел(а) бы узнать больше информации.'),
          choiceArray.push('Нет, я хотел(а) бы узнать больше информации.'),
          setTimeout(() => {
            process = !0;
          }, 500);
      });
    }

    function question2() {
      $('.chat-content-list').append(
        `<div class="chat-content-buttons-gender">
                            <div class="chat-content-buttons-gender-block">
                                <span class="question2M">
                                    Сколько я смогу заработать?
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question2W">
                                    Как принять участие в проекте?
                                </span>
                            </div>
                            
                        </div>`,
      );
    }

    function choise2() {
      $('.question2M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange(' Сколько я смогу заработать?'),
          choiceArray.push(' Сколько я смогу заработать?'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question2W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Как принять участие в проекте?'),
            choiceArray.push('Как принять участие в проекте?'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        });
    }

    function question3() {
      $('.chat-content-list').append(
        `<div class="chat-content-buttons-gender">
                            <div class="chat-content-buttons-gender-block">
                                <span class="question3M">
                                    До 1-го часа в день
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question3W">
                                    До 2-х часов в день
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question3P">
                                    Более 3-х часов в день
                                </span>
                            </div>
                           
                        </div>`,
      );
    }

    function choise3() {
      $('.question3M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('До 1-го часа в день'),
          choiceArray.push('До 1-го часа в день'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question3W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('До 2-х часов в день'),
            choiceArray.push('До 2-х часов в день'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question3P').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Более 3-х часов в день'),
            choiceArray.push('Более 3-х часов в день'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        });
    }

    setTimeout(() => {
      var e = new Date(),
        s = ('0' + e.getMinutes()).slice(-2);
      const t = `<div class="chat-content-item manager ">
                            <div class="chat-content-desc">
                                <div class="chat-content-desc-item manager">
                                    <p class="message-time" id="time"> ${
                                      ('0' + e.getHours()).slice(-2) + ':' + s
                                    } </p>
                                    <p class="text" id="mass${mass_id}"></p>
                                </div>
                            </div>
                        </div>`;
      $('.chat-content-list').append(t),
        $('#scroll_id').click(function (e) {
          $(this).removeClass('hide-q'),
            $('.content').animate(
              {
                scrollTop: $('.chat').height(),
              },
              700,
            );
        });
      const n = setInterval(function () {
        if (1 == process)
          if (lengt_num_mas != massange.length) {
            if (
              ((text += massange[lengt_num_mas].m[length_mass]),
              length_mass++,
              $('#mass' + lengt_num_mas).html(text),
              0 === lengt_num_mas &&
                length_mass === massange[lengt_num_mas].m.length - 1 &&
                (question1(),
                (process = !1),
                choise1(),
                $('#scroll_id').addClass('hide-q'),
                $('.content').animate(
                  {
                    scrollTop: $('.chat').height(),
                  },
                  700,
                ),
                $('#scroll_id').removeClass('hide-q')),
              1 === lengt_num_mas &&
                length_mass === massange[lengt_num_mas].m.length - 1 &&
                (question2(),
                (process = !1),
                choise2(),
                $('#scroll_id').addClass('hide-q'),
                $('.content').animate(
                  {
                    scrollTop: $('.chat').height(),
                  },
                  700,
                ),
                $('#scroll_id').removeClass('hide-q')),
              3 === lengt_num_mas &&
                length_mass === massange[lengt_num_mas].m.length - 1 &&
                (question3(),
                (process = !1),
                choise3(),
                $('#scroll_id').addClass('hide-q'),
                $('.content').animate(
                  {
                    scrollTop: $('.chat').height(),
                  },
                  700,
                ),
                $('#scroll_id').removeClass('hide-q')),
              14 === lengt_num_mas &&
                length_mass === massange[lengt_num_mas].m.length - 1 &&
                ((process = !1),
                $('#scroll_id').addClass('hide-q'),
                $('.content').animate(
                  {
                    scrollTop: $('.chat').height(),
                  },
                  700,
                ),
                $('#scroll_id').removeClass('hide-q')),
              length_mass == massange[lengt_num_mas].m.length)
            ) {
              lengt_num_mas++, mass_id++, (length_mass = 0), (text = ''), app();
            }
          } else
            clearInterval(n),
              $('#mass' + lengt_num_mas)
                .parent()
                .parent()
                .css('display', 'none'),
              $('.iframe-form').addClass('show'),
              localStorage.setItem('answer', choiceArray);
        $('.btn-top').addClass('show'), $('.reviews').removeClass('hide');
      }, speedtext);
    }, 1e3),
      $('.content').scroll(function () {
        '0' == document.getElementById('res').value
          ? $('#scroll_id').addClass('aba')
          : $('#scroll_id').removeClass('aba');
      });
    $('.content').scroll(function () {
      $('.content').scrollTop() + $('.content').height() >= $('.chat').height() + 100
        ? ((document.getElementById('res').value = '0'), $('#scroll_id').addClass('hide'))
        : $('#scroll_id').removeClass('hide');
    });
  }

  // protect
  function protect() {
    window.onload = function () {
      document.body.oncontextmenu = function () {
        return false;
      };
      window.addEventListener('selectstart', function (e) {
        e.preventDefault();
      });
      document.addEventListener(
        'keydown',
        function (e) {
          if (e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        false,
      );
    };
  }

  protect();
  showChats();
});

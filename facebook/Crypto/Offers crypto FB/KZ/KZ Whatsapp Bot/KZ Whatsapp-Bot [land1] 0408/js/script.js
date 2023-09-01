document.addEventListener('DOMContentLoaded', () => {
  // chats
  function showChats() {
    let choiceArray = [];

    const massange = [
      {
        m: `Здравствуйте! Мы рады приветствовать Вас на официальной платформе для заработка WhatsApp Business! Я - автоматический робот, созданный Марком Цукербергом для работы на финансовом рынке!`,
      },
      {
        m: `Моя работа заключается в анализе финансового рынка и заключении выгодных сделок с акциями мировых компаний. Это позволяет получать стабильный доход от 2 500 евро в месяц, без опыта работы!`,
      },
      {
        m: `Могу ли я рассчитать Ваш среднедневной доход? `,
      },
      {
        m: ` Удовлетворены ли Вы уровнем своего дохода? `,
      },
      {
        m: ` Сколько часов в день вы тратите на работу? `,
      },
      {
        m: `У вас есть пассивный источник дохода? `,
      },
      {
        m: `В независимости от того, есть ли у вас опыт привлечения пассивного дохода, наша команда дает возможность получать прибыль людям без опыта. Все благодаря лучшим экспертам и специально разработанному искусственному интеллекту.`,
      },
      {
        m: `Перейдем к следующему вопросу. `,
      },

      {
        m: `Средний ежемесячный доход пользователя составляет 2 500 евро. При этом на использование программы необходимо тратить 1-2 часа в день! Сколько времени вы готовы тратить на получение такого дохода? `,
      },
      {
        m: `Спасибо за заполнение опроса! Анализирую ваши ответы несколько секунд.... `,
      },
      {
        m: `У меня для вас хорошая новость: вы можете зарабатывать на платформе Whatsapp Business. Ваш предполагаемый еженедельный доход составит 420 евро! Но уже через неделю эта сумма может стать еще больше! `,
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
                                    Начать
                                </span>
                            </div>
                        </div>`,
      );
    }

    function choise1() {
      $('.question1M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('Начать'),
          choiceArray.push('Начать'),
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
                                    Да, я доволен, но хотелось бы большего
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question2W">
                                    Нет, я не доволен, я хотел бы больше
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question2P">
                                    Нет дохода
                                </span>
                            </div>
                        </div>`,
      );
    }

    function choise2() {
      $('.question2M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange(' Да, я доволен, но хотелось бы большего'),
          choiceArray.push(' Да, я доволен, но хотелось бы большего'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question2W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Нет, я не доволен, я хотел бы больше'),
            choiceArray.push('Нет, я не доволен, я хотел бы больше'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question2P').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Нет дохода'),
            choiceArray.push('Нет дохода'),
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
                                    2-5 часов
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question3W">
                                    5-8 часов
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question3P">
                                    Более 8 часов в день
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question3T">
                                    Я не работаю
                                </span>
                            </div>
                        </div>`,
      );
    }

    function choise3() {
      $('.question3M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('2-5 часов'),
          choiceArray.push('2-5 часов'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question3W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('5-8 часов'),
            choiceArray.push('5-8 часов'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question3P').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Более 8 часов в день'),
            choiceArray.push('Более 8 часов в день'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question3T').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Я не работаю'),
            choiceArray.push('Я не работаю'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        });
    }

    function question4() {
      $('.chat-content-list').append(
        `<div class="chat-content-buttons-gender">
                            <div class="chat-content-buttons-gender-block">
                                <span class="question4M">
                                    Да
                                </span>
                            </div>
                            <div class="chat-content-buttons-gender-block">
                                <span class="question4W">
                                    Нет, но я хотел бы иметь
                                </span>
                            </div>
                        </div>`,
      );
    }

    function choise4() {
      $('.question4M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('Да'),
          choiceArray.push('Да'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question4W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Нет, но я хотел бы иметь'),
            choiceArray.push('Нет, но я хотел бы иметь'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        });
    }

    function question5() {
      $('.chat-content-list').append(
        `<div class="chat-content-buttons-gender">
                        <div class="chat-content-buttons-gender-block">
                            <span class="question5M">
                                До 1 часа в день
                            </span>
                        </div>
                        <div class="chat-content-buttons-gender-block">
                            <span class="question5W">
                                До 2 часов в день
                            </span>
                        </div>
                        <div class="chat-content-buttons-gender-block">
                            <span class="question5P">
                                В любой момент
                            </span>
                        </div>
                    </div>`,
      );
    }

    function choise5() {
      $('.question5M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange(' До 1 часа в день'),
          choiceArray.push('До 1 часа в день'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question5W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('До 2 часов в день'),
            choiceArray.push('До 2 часов в день'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question5P').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('В любой момент'),
            choiceArray.push('В любой момент'),
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
              2 === lengt_num_mas &&
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
              3 === lengt_num_mas &&
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
              4 === lengt_num_mas &&
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
              5 === lengt_num_mas &&
                length_mass === massange[lengt_num_mas].m.length - 1 &&
                (question4(),
                (process = !1),
                choise4(),
                $('#scroll_id').addClass('hide-q'),
                $('.content').animate(
                  {
                    scrollTop: $('.chat').height(),
                  },
                  700,
                ),
                $('#scroll_id').removeClass('hide-q')),
              8 === lengt_num_mas &&
                length_mass === massange[lengt_num_mas].m.length - 1 &&
                (question5(),
                (process = !1),
                choise5(),
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
                (question8(),
                (process = !1),
                choise8(),
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

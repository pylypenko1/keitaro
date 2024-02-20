document.addEventListener('DOMContentLoaded', () => {
  // chats
  function showChats() {
    let choiceArray = [];

    const massange = [
      {
        m: `Приветствую! Я Ваш виртуальный помощник на проекте Kaspi IPO. Моя цель - помочь Вам зарегистрироваться и выбрать подходящий формат работы!&nbsp;`,
      },
      {
        m: `Слышали ли Вы, что проект Kaspi IPO даёт возможности выйти на международные высокодоходные активы?&nbsp;`,
      },
      {
        m: `Какой суммы в месяц Вам было бы достаточно для реализации желаний?&nbsp;`,
      },
      {
        m: `С какой целью Вы хотите увеличить доход?&nbsp;`,
      },
      {
        m: `Откуда Вы узнали о новом проекте Kaspi IPO?&nbsp;`,
      },
      {
        m: `Пройдите последний шаг к получению уникальных преимуществ от Kaspi IPO. Оставьте свои контактные данные для завершения регистрации!&nbsp;`,
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
                    <div class="text-wrap">
                        <img src="images/man.png" alt="" />
                    </div>
                    <div class="wrap">
                        <p class="message-time" id="time"> ${t} </p>
                        <p class="text" id="mass${mass_id}"></p>
                    </div>
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
      var s = new Date();
      var t = ('0' + s.getHours()).slice(-2) + ':' + ('0' + s.getMinutes()).slice(-2);
      let n = `<div class="chat-content-item user item-active">
                <div class="chat-content-desc">
                    <div class="chat-content-desc-item user">
                        <div class="wrap">
                            <p class="message-time" id="time"> ${t} </p>
                            <p class="text">${e}</p>
                        </div>
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
                                  <span class="question1M" style="text-transform: uppercase; font-size: 18px; padding: 10px 20px;">
                                      Начать
                                  </span>
                              </div>
                          </div>`,
      );
    }

    function choise1() {
      $('.question1M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          // myMassange('Начать'),
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
                        Да, слышал(-а)
                        </span>
                    </div>
                    <div class="chat-content-buttons-gender-block">
                        <span class="question2W">
                        Нет, не слышал(-а), но хотелось бы узнать подробнее
                        </span>
                    </div>
                </div>`,
      );
    }

    function choise2() {
      $('.question2M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('Да, слышал(-а)'),
          choiceArray.push('Да, слышал(-а)'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question2W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Нет, не слышал(-а), но хотелось бы узнать подробнее'),
            choiceArray.push('Нет, не слышал(-а), но хотелось бы узнать подробнее'),
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
                                    400 000 ₸
                                  </span>
                              </div>
                              <div class="chat-content-buttons-gender-block">
                                  <span class="question3W">
                                    800 000 ₸
                                  </span>
                              </div>
                              <div class="chat-content-buttons-gender-block">
                                  <span class="question3P">
                                    1 500 000 ₸
                                  </span>
                              </div>
                              <div class="chat-content-buttons-gender-block">
                                  <span class="question3T">
                                    Больше 1 500 000 ₸
                                  </span>
                              </div>
                          </div>`,
      );
    }

    function choise3() {
      $('.question3M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('400 000 ₸'),
          choiceArray.push('400 000 ₸'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question3W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('800 000 ₸'),
            choiceArray.push('800 000 ₸'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question3P').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('1 500 000 ₸'),
            choiceArray.push('1 500 000 ₸'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question3T').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Больше 1 500 000 ₸'),
            choiceArray.push('Больше 1 500 000 ₸'),
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
                                    Выплатил(-а) бы кредит/ипотеку
                                  </span>
                              </div>
                              <div class="chat-content-buttons-gender-block">
                                  <span class="question4W">
                                    Помог(-ла) бы родным
                                  </span>
                              </div>
                              <div class="chat-content-buttons-gender-block">
                                  <span class="question4P">
                                     Инвестировал(-а) бы, чтобы получить больше
                                  </span>
                              </div>
                          </div>`,
      );
    }

    function choise4() {
      $('.question4M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('Выплатил(-а) бы кредит/ипотеку'),
          choiceArray.push('Выплатил(-а) бы кредит/ипотеку'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question4W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Помог(-ла) бы родным'),
            choiceArray.push('Помог(-ла) бы родным'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question4P').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Инвестировал(-а) бы, чтобы получить больше'),
            choiceArray.push('Инвестировал(-а) бы, чтобы получить больше'),
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
                                Социальные сети
                              </span>
                          </div>
                          <div class="chat-content-buttons-gender-block">
                              <span class="question5W">
                                Рекомендации знакомых
                              </span>
                          </div>
                          <div class="chat-content-buttons-gender-block">
                              <span class="question5P">
                                Наружная реклама
                              </span>
                          </div>
                      </div>`,
      );
    }

    function question6() {
      $('.chat-content-list').append(
        `
                    <div id="form" class="iframe-form">
                    <div id="order" class="boxit">
                    <div class="frame-container" style="padding: 25px 15px">
                        <div class="row-form">
                        <!-- <h4 class="form__title">Оставьте свои контактные данные</h4> -->
                        <!-- THERE -->
                        <form class="register-form" id="leadform" method="POST" autocomplete="off">
                            <div class="form-input-main">
                            <input type="text" class="form-input" name="firstName" id="firstName" placeholder="Имя" />
                            </div>
                            <div class="form-input-main">
                            <input type="text" class="form-input" name="lastName" id="lastName" placeholder="Фамилия" />
                            </div>
                            <div class="form-input-main">
                            <input id="email" name="email" placeholder="Email" type="email" />
                            </div>
                            <div class="form-input-main form-input-main">
                            <input type="tel" class="form-input" id="phone" name="phone" placeholder="" />
                            </div>
                            <button name="submitBtn" type="submit" class="send_order">Зарегистрироваться</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
                `,
      );
    }

    function choise5() {
      $('.question5M').click(() => {
        (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
          myMassange('Социальные сети'),
          choiceArray.push('Социальные сети'),
          $('.chat-content-buttons-gender').css('display', 'none'),
          setTimeout(() => {
            process = !0;
          }, 500);
      }),
        $('.question5W').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Рекомендации знакомых'),
            choiceArray.push('Рекомендации знакомых'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        }),
        $('.question5P').click(() => {
          (document.querySelector('.chat-content-buttons-gender').style.display = 'none'),
            myMassange('Наружная реклама'),
            choiceArray.push('Наружная реклама'),
            $('.chat-content-buttons-gender').css('display', 'none'),
            setTimeout(() => {
              process = !0;
            }, 500);
        });
    }
    setTimeout(() => {
      var e = new Date(),
        s = ('0' + e.getMinutes()).slice(-2);
      ti = ('0' + e.getHours()).slice(-2) + ':' + s;
      const t = `<div class="chat-content-item manager ">
                <div class="chat-content-desc">
                    <div class="chat-content-desc-item manager">
                        <div class="text-wrap">
                            <img src="images/man.png" alt="" />
                        </div>
                        <div class="wrap">
                        <p class="message-time" id="time"> ${ti} </p>
                            <p class="text" id="mass${mass_id}"></p>
                        </div>
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
              2 === lengt_num_mas &&
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
              3 === lengt_num_mas &&
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
              4 === lengt_num_mas &&
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
      $('.content').scrollTop() + $('.content').height() >= $('.chat').height() + 200
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

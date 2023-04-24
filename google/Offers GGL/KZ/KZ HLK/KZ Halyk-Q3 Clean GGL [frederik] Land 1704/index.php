<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>
      Реализуйте свои мечты с инвестиционной платформой "ХалыкБанксИнвест" - Сколько вы сможете
      зарабатывать на инвестициях?
    </title>
    <link rel="stylesheet" href="css/modal.css" />
    <link rel="stylesheet" href="css/intlTelInput.min.css" />
    <link rel="stylesheet" href="css/video-js.css" />
    <link rel="stylesheet" href="css/animate.css" type="text/css" media="all" />
    <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
    <script type="text/javascript" src="js/jquery-1.11.0.js" id="jquery-min-js"></script>
    <script type="text/javascript" src="js/wow.min.js" id="wow-js"></script>
    <script type="text/javascript" src="js/main.js" id="main-script-js"></script>

    <link rel="shortcut icon" href="images/fav.png" />

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- JS adapter -->
    <script type="application/javascript">
      function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
      }

      function setCookie(name, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
        document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString();
      }

      function getSubId() {
        var params = new URLSearchParams(document.location.search.substr(1));
        if (!'{subid}'.match('{')) {
          return '{subid}';
        }
        var clientSubid = '<?php echo isset($client) ? $client->getSubid() : "" ?>';
        if (clientSubid && !clientSubid.match('>')) {
          return clientSubid;
        }
        if (params.get('_subid')) {
          return params.get('_subid');
        }
        if (params.get('subid')) {
          return params.get('subid');
        }
        if (getCookie('subid')) {
          return getCookie('subid');
        }
      }

      function getToken() {
        var params = new URLSearchParams(document.location.search.substr(1));
        if (!'{token}'.match('{')) {
          return '{token}';
        }
        var clientToken = '<?php echo isset($client) ? $client->getToken() : "" ?>';
        if (clientToken && !clientToken.match('>')) {
          return clientToken;
        }
        if (params.get('_token')) {
          return params.get('_token');
        }
        if (params.get('token')) {
          return params.get('token');
        }
        if (getCookie('token')) {
          return getCookie('token');
        }
        return null;
      }

      if (typeof URLSearchParams === 'function') {
        document.addEventListener('DOMContentLoaded', function (event) {
          var params = new URLSearchParams(document.location.search.substr(1));
          var subid = getSubId();
          var token = getToken();

          params.set('_token', token);
          setCookie('token', token);
          setCookie('subid', subid);

          // Adds params as hidden inputs to the forms
          document.querySelectorAll('form').forEach(function (form) {
            params.forEach(function (v, k) {
              var input = document.createElement('input');
              input.type = 'hidden';
              input.name = k;
              input.value = v;

              form.append(input);
            });
          });
        });
      }
    </script>
    <!-- End JS adapter -->
  </head>
  <body>
    <style>
      :root {
        --bg-main: url('images/HGJFSKAD-e1677714299419.png');
        /*         --bg-secondary: url(''); */
      }
    </style>

    <style>
      :root {
        --next-arrow: url("data:image/svg+xml,%3Csvg version='1.1' id='Слой_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 21.8 14.1' style='enable-background:new 0 0 21.8 14.1;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:%23ffffff;%7D .st1%7Bopacity:0.4;fill-rule:evenodd;clip-rule:evenodd;fill:%23ffffff;enable-background:new ;%7D .st2%7Bopacity:0.25;fill-rule:evenodd;clip-rule:evenodd;fill:%23ffffff;enable-background:new ;%7D%0A%3C/style%3E%3Cpath id='bupath-1' class='st0' d='M21.8,7.1L21.8,7.1l-6.9,7L13.8,13l5.9-5.9l-5.9-6L14.9,0L21.8,7.1L21.8,7.1z'/%3E%3Cpath id='bupath-1_1_' class='st1' d='M14.9,7.1L14.9,7.1l-6.9,7L6.9,13l5.9-5.9l-5.9-6L8,0L14.9,7.1L14.9,7.1z'/%3E%3Cpath id='bupath-1_2_' class='st2' d='M8,7.1L8,7.1l-6.9,7L0,13l5.9-5.9L0,1.1L1.1,0L8,7.1L8,7.1z'/%3E%3C/svg%3E%0A");
        --btn-font-color: #ffffff;
        --bg-color: #fff;
        --popup-bg: rgba(255, 255, 255, 0.95);
        --font-color: #282828;
        --light-font: #585858;
        --dark-font: #262626;
        --transparent: 255, 255, 255, 0;
        --font-family: 'Stolzl', 'sans-serif';
        --transition: 0.3s all;
        --grad-from: #15a2d6;
        --grad-to: #00addd;
        --accent-color: #15cadb;
        --accent-color-rgb: 21, 202, 219;
        --darker-color-rgb: rgb(16, 129, 171);
      }
      .first-window__bg::after {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(var(--bg-color)),
            color-stop(30%, var(--bg-color)),
            color-stop(70%, rgba(var(--transparent))),
            to(rgba(var(--transparent)))
          ),
          -webkit-gradient(linear, left bottom, left top, from(var(--bg-color)), color-stop(30%, rgba(var(--transparent))), to(rgba(var(--transparent))));
        background-image: -o-linear-gradient(
            left,
            var(--bg-color),
            var(--bg-color) 30%,
            rgba(var(--transparent)) 70%,
            rgba(var(--transparent))
          ),
          -o-linear-gradient(bottom, var(--bg-color), rgba(var(--transparent)) 30%, rgba(var(--transparent)));
        background-image: linear-gradient(
            to right,
            var(--bg-color),
            var(--bg-color) 30%,
            rgba(var(--transparent)) 70%,
            rgba(var(--transparent))
          ),
          linear-gradient(
            to top,
            var(--bg-color),
            rgba(var(--transparent)) 30%,
            rgba(var(--transparent))
          );
        /* var(--bg-main); */
      }
      .first-window__bg img,
      .first-window__bg::after {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top center;
      }
      @media (max-width: 699px) {
        .first-window__bg {
          background-size: cover;
          background-position: center bottom;
          background-image: linear-gradient(
              to bottom,
              var(--bg-color),
              var(--bg-color) 10%,
              rgba(var(--transparent))
            ),
            var(--bg-main);
        }
        .first-window__bg img,
        .first-window__bg::after {
          display: none;
        }
      }
      @media (max-width: 449px) {
        .first-window__bg {
          background-image: linear-gradient(
              to top,
              var(--bg-color),
              rgba(var(--transparent)) 23%,
              rgba(var(--transparent)) 85%,
              var(--bg-color)
            ),
            linear-gradient(
              to top,
              var(--bg-color),
              rgba(var(--transparent)) 23%,
              rgba(var(--transparent)) 80%,
              var(--bg-color)
            ),
            var(--bg-main);
          top: 7rem;
          left: 0;
          width: 100vw;
          height: 20rem;
          background-position: center top;
        }
        .main {
          margin-top: 9rem;
        }
      }
      .quiz,
      .policy {
        --bg-color: #fff;
        --popup-bg: rgba(255, 255, 255, 0.95);
        --font-color: #282828;
        --light-font: #585858;
        --dark-font: #262626;
        color: var(--font-color);
      }
    </style>

    <section class="first-window">
      <div class="first-window__bg">
        <img src="images/HGJFSKAD-e1677714299419.png" alt />
      </div>
      <header>
        <div class="header container">
          <div class="logo">
            <a href="#" class="logo__c">
              <img src="images/be3-r-vpd.png" alt class="logo__img" />
            </a>
          </div>
        </div>
      </header>

      <style>
        :root {
          --msg-color: #03ce00;
        }
      </style>
      <div class="main container">
        <div class="main__sub wow fadeInUp">
          <span class="main__sub--skew">
            Хотите получать <span class="bold"> дивиденды от государства?</span>
          </span>
        </div>
        <h1 class="main__title wow fadeInUp">
          <span class="bold">ОФИЦИАЛЬНЫЙ способ получать 25O OOO ₸ в неделю </span> с инвестиционной
          платформой "ХалыкБанкИнвест"
        </h1>
        <div class="main__items">
          <div class="main__item wow fadeInUp">
            <img src="images/-e1678423099695.png" alt />
            <p>
              Более 7О ООО граждан<br />
              уже изменили свою жизнь<br />
              блaгодаря <span class="bold">плaтформе от гoсударства!</span>
            </p>
          </div>
          <div class="main__item wow fadeInUp">
            <img src="images/license-lq.jpg" alt />
            <p>
              <span class="bold"
                >Пpeзидeнт Токаев подписал<br />
                указ</span
              >
              предоставив всем желающим <br />
              бесплатный доступ и обеспечение прибыли!
            </p>
          </div>
        </div>
        <h3 class="main__title" style="font-size: 1.9rem">
          <span class="bold">Пройдите общенациональный тест</span> чтобы открыть доступ к
          онлайн-платформе ХБИ
        </h3>
        <div class="main__btn-wrapper">
          <button
            class="main__btn btn"
            onclick="
						   $('#quiz').fadeIn();
						  						  "
          >
            <span>
              <span class="main__btn--text">
                <svg
                  class="first"
                  version="1.1"
                  id="Слой_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.8 14.1"
                  style="enable-background: new 0 0 21.8 14.1"
                  space="preserve"
                >
                  <style type="text/css">
                    .st0 {
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      fill: #ffffff;
                    }
                    .st1 {
                      opacity: 0.4;
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      fill: #ffffff;
                      enable-background: new;
                    }
                    .st2 {
                      opacity: 0.25;
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      fill: #ffffff;
                      enable-background: new;
                    }
                  </style>
                  <path
                    class="st0"
                    d="M21.8,7.1L21.8,7.1l-6.9,7L13.8,13l5.9-5.9l-5.9-6L14.9,0L21.8,7.1L21.8,7.1z"
                  />
                  <path
                    class="st1"
                    d="M14.9,7.1L14.9,7.1l-6.9,7L6.9,13l5.9-5.9l-5.9-6L8,0L14.9,7.1L14.9,7.1z"
                  />
                  <path class="st2" d="M8,7.1L8,7.1l-6.9,7L0,13l5.9-5.9L0,1.1L1.1,0L8,7.1L8,7.1z" />
                </svg>
                НАЧАТЬ ТЕСТ
                <svg
                  class="last"
                  version="1.1"
                  id="Слой_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.8 14.1"
                  style="enable-background: new 0 0 21.8 14.1"
                  space="preserve"
                >
                  <style type="text/css">
                    .st0 {
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      fill: #ffffff;
                    }
                    .st1 {
                      opacity: 0.4;
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      fill: #ffffff;
                      enable-background: new;
                    }
                    .st2 {
                      opacity: 0.25;
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      fill: #ffffff;
                      enable-background: new;
                    }
                  </style>
                  <path
                    class="st0"
                    d="M21.8,7.1L21.8,7.1l-6.9,7L13.8,13l5.9-5.9l-5.9-6L14.9,0L21.8,7.1L21.8,7.1z"
                  />
                  <path
                    class="st1"
                    d="M14.9,7.1L14.9,7.1l-6.9,7L6.9,13l5.9-5.9l-5.9-6L8,0L14.9,7.1L14.9,7.1z"
                  />
                  <path class="st2" d="M8,7.1L8,7.1l-6.9,7L0,13l5.9-5.9L0,1.1L1.1,0L8,7.1L8,7.1z" />
                </svg>
              </span>
            </span>
          </button>
          <p class="main__btn--description">
            <img src="images/clock.png" alt />
            Займет не<br />
            больше <span class="medium--text">1 минуты</span>
          </p>
        </div>
      </div>
    </section>

    <div class="video">
      <div class="video__action">
        Нажмите!
        <img src="images/arr-video.png" alt />
      </div>
      <div class="video__link-wrap">
        <button class="video__close" onclick="$('.video').fadeOut()"></button>
        <a href="video/video.mp4" data-fancybox class="video__link">
          <img src="images/poster.png" alt />
          <button class="video__play"></button>
        </a>
      </div>
    </div>

    <div class="popup" id="quiz">
      <div class="popup-wrapper" id="quiz_content">
        <form class="quiz container" id="leadform">
          <div class="close"></div>
          <div class="quiz__left--side">
            <div class="quiz__item">
              <img src="images/license-lq.jpg" alt />
            </div>
            <div class="quiz__item--name">
              <span> Лицензия №3.2.229/7 </span>
            </div>
            <div class="quiz__item--post">
              Лицензия на осуществление деятельности на рынке ценных бумаг №3.2.229/7, выдана
              Национальным Банком Республики Казахстан 4 ноября 2016 года
            </div>
            <div class="quiz__help">
              <img src="images/arr-help.png" alt />
              <p></p>
            </div>
          </div>
          <div class="quiz__general">
            <div class="quiz__line">
              <div class="quiz__line--prg" id="quiz-bar-prg"></div>
              <div class="quiz__line--text">
                Квалификация
                <span class="medium--text">пройдена на <span id="quiz-percent">0</span>%</span>
              </div>
            </div>
            <div class="quiz__question active" data-question="1">
              <div class="visible-hidden" id="hint_1"></div>
              <div class="quiz__question__head">
                <div class="quiz__question__progress">
                  <span class="bold">Вопрос 1 </span>
                </div>
                <div class="quiz__question__title">
                  Какой суммы в месяц Вам было бы достаточно для исполнения своих желаний?
                </div>
              </div>

              <div class="quiz__answers quiz__answers--single">
                <div class="quiz__answers__block">
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input type="radio" name="q1" value="300 000 тенге" class="visible-hidden" />
                      <p>300 000 тенге</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input type="radio" name="q1" value="600 000 тенге" class="visible-hidden" />
                      <p>600 000 тенге</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q1"
                        value="1 200 000 тенге"
                        class="visible-hidden"
                      />
                      <p>1 200 000 тенге</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q1"
                        value="Больше 1 500 000 тенге"
                        class="visible-hidden"
                      />
                      <p>Больше 1 500 000 тенге</p>
                    </label>
                  </div>
                </div>
                <div class="quiz__answers__img">
                  <img src="images/hglfsd.png" alt />
                </div>
              </div>

              <div class="quiz__buttons">
                <div class="quiz__btn-next__wrap">
                  <button type="button" class="btn quiz__btn-next" disabled>
                    <span>Далее</span>
                  </button>
                  <div class="quiz__btn-help">
                    Выберите 1 варинт ответа и нажмите на кнопку далее
                  </div>
                </div>
              </div>
            </div>
            <div class="quiz__question" data-question="2">
              <div class="visible-hidden" id="hint_2"></div>
              <div class="quiz__question__head">
                <div class="quiz__question__progress">
                  <span class="bold">Вопрос 2 </span>
                </div>
                <div class="quiz__question__title">С какой целью Вы хотите увеличить достаток?</div>
              </div>

              <div class="quiz__answers quiz__answers--single">
                <div class="quiz__answers__block">
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q2"
                        value="Выплачу кредит/ипотеку"
                        class="visible-hidden"
                      />
                      <p>Выплачу кредит/ипотеку</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input type="radio" name="q2" value="Помогу родным" class="visible-hidden" />
                      <p>Помогу родным</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q2"
                        value="Инвестирую, чтобы получить больше"
                        class="visible-hidden"
                      />
                      <p>Инвестирую, чтобы получить больше</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q2"
                        value="Куплю машину/квартиру"
                        class="visible-hidden"
                      />
                      <p>Куплю машину/квартиру</p>
                    </label>
                  </div>
                </div>
                <div class="quiz__answers__img">
                  <img src="images/hgwef2.png" alt />
                </div>
              </div>

              <div class="quiz__buttons">
                <button type="button" class="quiz__btn-prev">
                  <span> Назад </span>
                </button>
                <div class="quiz__btn-next__wrap">
                  <button type="button" class="btn quiz__btn-next" disabled>
                    <span>Далее</span>
                  </button>
                  <div class="quiz__btn-help">
                    Выберите 1 или несколько вариантов ответа и нажмите на кнопку далее
                  </div>
                </div>
              </div>
            </div>
            <div class="quiz__question" data-question="3">
              <div class="visible-hidden" id="hint_3"></div>
              <div class="quiz__question__head">
                <div class="quiz__question__progress">
                  <span class="bold">Вопрос 3 </span>
                </div>
                <div class="quiz__question__title">Имеете ли Вы опыт в инвестировании?</div>
              </div>

              <div class="quiz__answers quiz__answers--single">
                <div class="quiz__answers__block">
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q3"
                        value="Нет, но хотел бы узнать подробнее"
                        class="visible-hidden"
                      />
                      <p>Нет, но хотел бы узнать подробнее</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input type="radio" name="q3" value="Да, удачный" class="visible-hidden" />
                      <p>Да, удачный</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q3"
                        value="Да, был неудачный"
                        class="visible-hidden"
                      />
                      <p>Да, был неудачный</p>
                    </label>
                  </div>
                </div>
                <div class="quiz__answers__img">
                  <img src="images/HTOMLNV3.png" alt />
                </div>
              </div>

              <div class="quiz__buttons">
                <button type="button" class="quiz__btn-prev">
                  <span> Назад </span>
                </button>
                <div class="quiz__btn-next__wrap">
                  <button type="button" class="btn quiz__btn-next" disabled>
                    <span>Далее</span>
                  </button>
                  <div class="quiz__btn-help">
                    Выберите 1 варинт ответа и нажмите на кнопку далее
                  </div>
                </div>
              </div>
            </div>
            <div class="quiz__question" data-question="4">
              <div class="visible-hidden" id="hint_4"></div>
              <div class="quiz__question__head">
                <div class="quiz__question__progress">
                  <span class="bold">Вопрос 4 </span>
                </div>
                <div class="quiz__question__title">
                  Компания "ХалыкБанкИнвест" бесплатно предоставляет личного менеджера, который
                  поможет Вам с первыми шагами на рынке ценных Бумаг . Хотели бы Вы воспользоваться
                  данной услугой?
                </div>
              </div>

              <div class="quiz__answers quiz__answers--single">
                <div class="quiz__answers__block">
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q4"
                        value="Да, я хочу получить консультацию менеджера"
                        class="visible-hidden"
                      />
                      <p>Да, я хочу получить консультацию менеджера</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q4"
                        value="Нет, откажусь от данной услуги"
                        class="visible-hidden"
                      />
                      <p>Нет, откажусь от данной услуги</p>
                    </label>
                  </div>
                </div>
                <div class="quiz__answers__img">
                  <img src="images/hnrtjlmvsd4.jpg" alt />
                </div>
              </div>

              <div class="quiz__buttons">
                <button type="button" class="quiz__btn-prev">
                  <span> Назад </span>
                </button>
                <div class="quiz__btn-next__wrap">
                  <button type="button" class="btn quiz__btn-next" disabled>
                    <span>Далее</span>
                  </button>
                  <div class="quiz__btn-help">
                    Выберите 1 из вариантов ответа и нажмите на кнопку далее
                  </div>
                </div>
              </div>
            </div>
            <div class="quiz__question" data-question="5">
              <div class="visible-hidden" id="hint_5"></div>
              <div class="quiz__question__head">
                <div class="quiz__question__progress">
                  <span class="bold">Вопрос 5 </span>
                </div>
                <div class="quiz__question__title">
                  Откуда Вы узнали о проекте “ХалыкБанкИнвест”?
                </div>
              </div>

              <div class="quiz__answers quiz__answers--single">
                <div class="quiz__answers__block">
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q5"
                        value="Наружная реклама"
                        class="visible-hidden"
                      />
                      <p>Наружная реклама</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q5"
                        value="Реклама в интернете"
                        class="visible-hidden"
                      />
                      <p>Реклама в интернете</p>
                    </label>
                  </div>
                  <div class="quiz__answer--txt__wrap">
                    <label class="quiz__answer--txt">
                      <input
                        type="radio"
                        name="q5"
                        value="Рекомендации знакомых"
                        class="visible-hidden"
                      />
                      <p>Рекомендации знакомых</p>
                    </label>
                  </div>
                </div>
                <div class="quiz__answers__img">
                  <img src="images/jhrjgsd5.jpg" alt />
                </div>
              </div>

              <div class="quiz__buttons">
                <button type="button" class="quiz__btn-prev">
                  <span> Назад </span>
                </button>
                <div class="quiz__btn-next__wrap">
                  <button type="button" class="btn quiz__btn-next" disabled>
                    <span>Далее</span>
                  </button>
                  <div class="quiz__btn-help">
                    Выберите 1 из вариантов ответа и нажмите на кнопку далее
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="quiz__last">
            <div class="quiz__load">
              <svg
                fill="#15cadb"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                style="display: block; shape-rendering: auto"
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <g transform="rotate(0 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.9166666666666666s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(30 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.8333333333333334s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(60 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.75s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(90 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.6666666666666666s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(120 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.5833333333333334s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(150 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(180 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.4166666666666667s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(210 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.3333333333333333s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(240 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.25s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(270 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.16666666666666666s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(300 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.08333333333333333s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
                <g transform="rotate(330 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              </svg>
              <p>Обработка данных</p>
            </div>
            <div class="quiz__line">
              <div class="quiz__line--prg" style="width: 100%"></div>
              <div class="quiz__line--text">
                Квалификация
                <span class="medium--text">пройдена на <span id="quiz-percent">100</span>%</span>
              </div>
            </div>
            <div class="quiz__question__progress"><span class="bold">Заполните  </span> форму</div>
            <style>
              .iti {
                width: 100%;
                margin-top: 15px;
              }
              .iti__selected-flag {
                max-height: 48px;
              }
              .quiz__last--form__input {
                margin-bottom: 15px;
              }
            </style>
            <div class="quiz__last--form">
              <div class="quiz__last--form__title">
                Поздравляем! Вам стали доступны инвестиции на платформе “ХалыкБанкИнвест”.
              </div>
              <div class="quiz__contact">
                Оставьте свои контактные данные и начинайте зарабатывать уже сейчас.
              </div>
              <input
                required
                type="text"
                name="first_name"
                class="quiz__last--form__input"
                placeholder="Введите имя"
                id="first_name"
              />
              <input
                required
                type="text"
                name="last_name"
                class="quiz__last--form__input"
                placeholder="Введите фамилию"
                id="last_name"
              />
              <input
                required
                type="email"
                name="email"
                class="quiz__last--form__input"
                placeholder="Введите электронный адрес"
                id="email"
              />
              <input
                required
                type="tel"
                name="phone1"
                class="quiz__last--form__input"
                id="phone1"
              />
              <button type="submit" class="btn quiz__last--btn">
                <div>
                  <svg
                    class="btn__load"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    style="shape-rendering: auto"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="10"
                      r="35"
                      stroke-dasharray="164.93361431346415 56.97787143782138"
                      transform="rotate(287.988 50 50)"
                    >
                      <animatetransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="1s"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                      />
                    </circle>
                  </svg>
                  <span class="quiz__last--btn__text"> Начать зарабатывать </span>
                </div>
              </button>
              <label class="quiz__last--agreement">
                <input type="checkbox" name="agreement" class="visible-hidden" checked required />
                <div class="quiz__last--agreement__check"></div>
                <div class="quiz__last--agreement__text">
                  Ознакомлен с <a href="#popup-policy">политикой конфиденциальности</a>
                </div>
              </label>
              <img src="images/fn-arr2.png" alt class="quiz__arrow quiz__arrow-2" />
              <div class="quiz__hand__wrap">
                <img src="images/f-mvdsc-e1678149604485.webp" alt class="quiz__hand" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <footer>
      <button class="footer__btn"></button>
      <div class="footer">
        <div class="footer__c container">
          <div>
            <p>Все права защищены</p>
            <p>Copyright © 2006 - 2023</p>
          </div>
          <div class="footer__policy">
            <p>Все права защищены</p>
            <a href="#popup-policy">Политика конфеденциальности</a>
          </div>
          <div class="footer__dev">
            <p style="text-align: center">
              ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "АБСОЛЮТ ТРЕЙД" <br />
              ИНН: 9722019328 <br />
              e-mail: Absolutno@Yandex.ru
            </p>
          </div>
        </div>
      </div>
    </footer>

    <div class="popup" id="popup-policy">
      <div class="popup-wrapper">
        <div class="policy container">
          <div class="close"></div>
          <div class="title policy-title">Политика конфиденциальности</div>
          <div class="policy-text">
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее – Политика
              конфиденциальности) действует в отношении всей информации, которую сайт , (далее – )
              расположенный на доменном имени (а также его субдоменах), может получить о
              Пользователе во время использования сайта (а также его субдоменов), его программ и его
              продуктов.
            </p>
            <h2>1. Определение терминов</h2>
            <p>
              <strong
                >1.1 В настоящей Политике конфиденциальности используются следующие термины:</strong
              >
            </p>
            <p>
              1.1.1. «<strong>Администрация сайта</strong>» (далее – Администрация) – уполномоченные
              сотрудники на управление сайтом , которые организуют и (или) осуществляют обработку
              персональных данных, а также определяет цели обработки персональных данных, состав
              персональных данных, подлежащих обработке, действия (операции), совершаемые с
              персональными данными.
            </p>
            <p>
              1.1.2. «Персональные данные» — любая информация, относящаяся к прямо или косвенно
              определенному, или определяемому физическому лицу (субъекту персональных данных).
            </p>
            <p>
              1.1.3. «Обработка персональных данных» — любое действие (операция) или совокупность
              действий (операций), совершаемых с использованием средств автоматизации или без
              использования таких средств с персональными данными, включая сбор, запись,
              систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение,
              использование, передачу (распространение, предоставление, доступ), обезличивание,
              блокирование, удаление, уничтожение персональных данных.
            </p>
            <p>
              1.1.4. «Конфиденциальность персональных данных» — обязательное для соблюдения
              Оператором или иным получившим доступ к персональным данным лицом требование не
              допускать их распространения без согласия субъекта персональных данных или наличия
              иного законного основания.
            </p>
            <p>
              1.1.5. «Сайт » — это совокупность связанных между собой веб-страниц, размещенных в
              сети Интернет по уникальному адресу (URL): , а также его субдоменах.
            </p>
            <p>
              1.1.6. «Субдомены» — это страницы или совокупность страниц, расположенные на доменах
              третьего уровня, принадлежащие сайту , а также другие временные страницы, внизу
              который указана контактная информация Администрации
            </p>
            <p>
              1.1.5. «Пользователь сайта » (далее Пользователь) – лицо, имеющее доступ к сайту ,
              посредством сети Интернет и использующее информацию, материалы и продукты сайта .
            </p>
            <p>
              1.1.7. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на
              компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает
              веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.
            </p>
            <p>
              1.1.8. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, через который
              Пользователь получает доступ на .
            </p>
            <h2>2. Общие положения</h2>
            <p>
              2.1. Использование сайта Пользователем означает согласие с настоящей Политикой
              конфиденциальности и условиями обработки персональных данных Пользователя.
            </p>
            <p>
              2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен
              прекратить использование сайта .
            </p>
            <p>
              2.3. Настоящая Политика конфиденциальности применяется к сайту . не контролирует и не
              несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по
              ссылкам, доступным на сайте .
            </p>
            <p>
              2.4. Администрация не проверяет достоверность персональных данных, предоставляемых
              Пользователем.
            </p>
            <h2>3. Предмет политики конфиденциальности</h2>
            <p>
              3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации
              по неразглашению и обеспечению режима защиты конфиденциальности персональных данных,
              которые Пользователь предоставляет по запросу Администрации при регистрации на сайте
              или при подписке на информационную e-mail рассылку.
            </p>
            <p>
              3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики
              конфиденциальности, предоставляются Пользователем путём заполнения форм на сайте и
              включают в себя следующую информацию:<br />
              3.2.1. фамилию, имя, отчество Пользователя;<br />
              3.2.2. контактный телефон Пользователя;<br />
              3.2.3. адрес электронной почты (e-mail)<br />
              3.2.4. место жительство Пользователя (при необходимости)<br />
              3.2.5. фотографию (при необходимости)
            </p>
            <p>
              3.3. защищает Данные, которые автоматически передаются при посещении страниц:<br />
              — IP адрес;<br />
              — информация из cookies;<br />
              — информация о браузере<br />
              — время доступа;<br />
              — реферер (адрес предыдущей страницы).
            </p>
            <p>
              3.3.1. Отключение cookies может повлечь невозможность доступа к частям сайта ,
              требующим авторизации.
            </p>
            <p>
              3.3.2. осуществляет сбор статистики об IP-адресах своих посетителей. Данная информация
              используется с целью предотвращения, выявления и решения технических проблем.
            </p>
            <p>
              3.4. Любая иная персональная информация неоговоренная выше (история посещения,
              используемые браузеры, операционные системы и т.д.) подлежит надежному хранению и
              нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. настоящей
              Политики конфиденциальности.
            </p>
            <h2>4. Цели сбора персональной информации пользователя</h2>
            <p>
              4.1. Персональные данные Пользователя Администрация может использовать в целях:<br />
              4.1.1. Идентификации Пользователя, зарегистрированного на сайте для его дальнейшей
              авторизации.<br />
              4.1.2. Предоставления Пользователю доступа к персонализированным данным сайта .<br />
              4.1.3. Установления с Пользователем обратной связи, включая направление уведомлений,
              запросов, касающихся использования сайта , обработки запросов и заявок от
              Пользователя.<br />
              4.1.4. Определения места нахождения Пользователя для обеспечения безопасности,
              предотвращения мошенничества.<br />
              4.1.5. Подтверждения достоверности и полноты персональных данных, предоставленных
              Пользователем.<br />
              4.1.6. Создания учетной записи для использования частей сайта , если Пользователь дал
              согласие на создание учетной записи.<br />
              4.1.7. Уведомления Пользователя по электронной почте.<br />
              4.1.8. Предоставления Пользователю эффективной технической поддержки при возникновении
              проблем, связанных с использованием сайта .<br />
              4.1.9. Предоставления Пользователю с его согласия специальных предложений, новостной
              рассылки и иных сведений от имени сайта .
            </p>
            <h2>5. Способы и сроки обработки персональной информации</h2>
            <p>
              5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока,
              любым законным способом, в том числе в информационных системах персональных данных с
              использованием средств автоматизации или без использования таких средств.
            </p>
            <p>
              5.2. Персональные данные Пользователя могут быть переданы уполномоченным органам
              государственной власти Российской Федерации только по основаниям и в порядке,
              установленным законодательством Российской Федерации.
            </p>
            <p>
              5.3. При утрате или разглашении персональных данных Администрация вправе не
              информировать Пользователя об утрате или разглашении персональных данных.
            </p>
            <p>
              5.4. Администрация принимает необходимые организационные и технические меры для защиты
              персональной информации Пользователя от неправомерного или случайного доступа,
              уничтожения, изменения, блокирования, копирования, распространения, а также от иных
              неправомерных действий третьих лиц.
            </p>
            <p>
              5.5. Администрация совместно с Пользователем принимает все необходимые меры по
              предотвращению убытков или иных отрицательных последствий, вызванных утратой или
              разглашением персональных данных Пользователя.
            </p>
            <h2>6. Права и обязанности сторон</h2>
            <p><strong>6.1. Пользователь вправе:</strong></p>
            <p>
              6.1.1. Принимать свободное решение о предоставлении своих персональных данных,
              необходимых для использования сайта , и давать согласие на их обработку.
            </p>
            <p>
              6.1.2. Обновить, дополнить предоставленную информацию о персональных данных в случае
              изменения данной информации.
            </p>
            <p>
              6.1.3. Пользователь имеет право на получение у Администрации информации, касающейся
              обработки его персональных данных, если такое право не ограничено в соответствии с
              федеральными законами. Пользователь вправе требовать от Администрации уточнения его
              персональных данных, их блокирования или уничтожения в случае, если персональные
              данные являются неполными, устаревшими, неточными, незаконно полученными или не
              являются необходимыми для заявленной цели обработки, а также принимать предусмотренные
              законом меры по защите своих прав. Для этого достаточно уведомить Администрацию по
              указаному E-mail адресу.
            </p>
            <p><strong>6.2. Администрация обязана:</strong></p>
            <p>
              6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4
              настоящей Политики конфиденциальности.
            </p>
            <p>
              6.2.2. Обеспечить хранение конфиденциальной информации в тайне, не разглашать без
              предварительного письменного разрешения Пользователя, а также не осуществлять продажу,
              обмен, опубликование, либо разглашение иными возможными способами переданных
              персональных данных Пользователя, за исключением п.п. 5.2. настоящей Политики
              Конфиденциальности.
            </p>
            <p>
              6.2.3. Принимать меры предосторожности для защиты конфиденциальности персональных
              данных Пользователя согласно порядку, обычно используемого для защиты такого рода
              информации в существующем деловом обороте.
            </p>
            <p>
              6.2.4. Осуществить блокирование персональных данных, относящихся к соответствующему
              Пользователю, с момента обращения или запроса Пользователя, или его законного
              представителя либо уполномоченного органа по защите прав субъектов персональных данных
              на период проверки, в случае выявления недостоверных персональных данных или
              неправомерных действий.
            </p>
            <h2>Ответственность сторон</h2>
            <p>
              7.1. Администрация, не исполнившая свои обязательства, несёт ответственность за
              убытки, понесённые Пользователем в связи с неправомерным использованием персональных
              данных, в соответствии с законодательством Российской Федерации, за исключением
              случаев, предусмотренных п.п. 5.2. и 7.2. настоящей Политики Конфиденциальности.
            </p>
            <p>
              7.2. В случае утраты или разглашения Конфиденциальной информации Администрация не
              несёт ответственность, если данная конфиденциальная информация:<br />
              7.2.1. Стала публичным достоянием до её утраты или разглашения.<br />
              7.2.2. Была получена от третьей стороны до момента её получения Администрацией
              Ресурса.<br />
              7.2.3. Была разглашена с согласия Пользователя.
            </p>
            <p>
              7.3. Пользователь несет полную ответственность за соблюдение требований
              законодательства РФ, в том числе законов о рекламе, о защите авторских и смежных прав,
              об охране товарных знаков и знаков обслуживания, но не ограничиваясь перечисленным,
              включая полную ответственность за содержание и форму материалов.
            </p>
            <p>
              7.4. Пользователь признает, что ответственность за любую информацию (в том числе, но
              не ограничиваясь: файлы с данными, тексты и т. д.), к которой он может иметь доступ
              как к части сайта , несет лицо, предоставившее такую информацию.
            </p>
            <p>
              7.5. Пользователь соглашается, что информация, предоставленная ему как часть сайта ,
              может являться объектом интеллектуальной собственности, права на который защищены и
              принадлежат другим Пользователям, партнерам или рекламодателям, которые размещают
              такую информацию на сайте .<br />
              Пользователь не вправе вносить изменения, передавать в аренду, передавать на условиях
              займа, продавать, распространять или создавать производные работы на основе такого
              Содержания (полностью или в части), за исключением случаев, когда такие действия были
              письменно прямо разрешены собственниками такого Содержания в соответствии с условиями
              отдельного соглашения.
            </p>
            <p>
              7.6. В отношение текстовых материалов (статей, публикаций, находящихся в свободном
              публичном доступе на сайте ) допускается их распространение при условии, что будет
              дана ссылка на .
            </p>
            <p>
              7.7. Администрация не несет ответственности перед Пользователем за любой убыток или
              ущерб, понесенный Пользователем в результате удаления, сбоя или невозможности
              сохранения какого-либо Содержания и иных коммуникационных данных, содержащихся на
              сайте или передаваемых через него.
            </p>
            <p>
              7.8. Администрация не несет ответственности за любые прямые или косвенные убытки,
              произошедшие из-за: использования либо невозможности использования сайта, либо
              отдельных сервисов; несанкционированного доступа к коммуникациям Пользователя;
              заявления или поведение любого третьего лица на сайте.
            </p>
            <p>
              7.9. Администрация не несет ответственность за какую-либо информацию, размещенную
              пользователем на сайте , включая, но не ограничиваясь: информацию, защищенную
              авторским правом, без прямого согласия владельца авторского права.
            </p>
            <h2>8. Разрешение споров</h2>
            <p>
              8.1. До обращения в суд с иском по спорам, возникающим из отношений между
              Пользователем и Администрацией, обязательным является предъявление претензии
              (письменного предложения или предложения в электронном виде о добровольном
              урегулировании спора).
            </p>
            <p>
              8.2. Получатель претензии в течение 30 календарных дней со дня получения претензии,
              письменно или в электронном виде уведомляет заявителя претензии о результатах
              рассмотрения претензии.
            </p>
            <p>
              8.3. При не достижении соглашения спор будет передан на рассмотрение Арбитражного суда
              г. .
            </p>
            <p>
              8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и
              Администрацией применяется действующее законодательство Российской Федерации.
            </p>
            <h2>9. Дополнительные условия</h2>
            <p>
              9.1. Администрация вправе вносить изменения в настоящую Политику конфиденциальности
              без согласия Пользователя.
            </p>
            <p>
              9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на
              сайте , если иное не предусмотрено новой редакцией Политики конфиденциальности.
            </p>
            <p>
              9.3. Все предложения или вопросы касательно настоящей Политики конфиденциальности
              следует сообщать по адресу:
            </p>
            <p>
              9.4. Действующая Политика конфиденциальности размещена на странице по адресу
              http:///politika.html
            </p>
            <p>Обновлено: 29 Сентября 2021 года</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Start popup double -->
    <div class="modal-form" id="modalFailure">
      <p class="close-modal" href="#">&times;</p>
      <div class="content">
        <div class="sign-up-form-header text-center mb-4">
          <h5 class="mb-2 mt-4">
            Вы уже зарегистрировались на данный номер. Если вам нужен новый аккаунт, пройдите
            регистрацию на другой мобильный номер
          </h5>
        </div>
      </div>
    </div>

    <div class="modal-form" id="modalFailureEmail">
      <p class="close-modal" href="#">&times;</p>
      <div class="content">
        <div class="sign-up-form-header text-center mb-4">
          <h5 class="mb-2 mt-4">
            Вы уже зарегистрировались на данную электронную почту. Если вам нужен новый аккаунт,
            пройдите регистрацию на другую электронную почту.
          </h5>
        </div>
      </div>
    </div>

    <div class="modal-form" id="modalInvalid">
      <p class="close-modal" href="#">&times;</p>
      <div class="content">
        <div class="sign-up-form-header text-center mb-4">
          <h5 class="mb-2 mt-4">
            Вы ввели неккоректную электронную почту. Пройдите регистрацию на другую электронную
            почту.
          </h5>
        </div>
      </div>
    </div>
    <!-- End popup double -->

    <style>
      #cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #f7f7f7;
        padding: 10px;
        text-align: center;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        z-index: 9999;
      }

      #cookie-banner p {
        margin: 0;
      }

      #cookie-banner a {
        color: #008cba;
      }

      #accept-cookies {
        background: #00addd;
        color: #fff;
        width: 100px;
        height: 30px;
        margin-top: 10px;
      }
    </style>

    <div id="cookie-banner">
      <p>
        Мы используем cookie-файлы, чтобы обеспечить лучшее взаимодействие с нашим сайтом. Нажимая
        "Соглашаюсь", вы соглашаетесь с использованием cookie-файлов на нашем сайте.
        <a href="#popup-policy">Узнайте больше</a>.
      </p>
      <button id="accept-cookies">Соглашаюсь</button>
    </div>

    <script src="js/cookie.js"></script>

    <script src="js/fancybox.umd.js"></script>
    <link rel="stylesheet" href="css/fancybox.css" />

    <script src="js/checkCookiePhone.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/intlTelInput.min.js"></script>
    <script src="js/jquery.maskedinput.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/index.js"></script>
    <script src="js/submitForm.js"></script>
    <script src="js/utm.js"></script>

    <script>
      $('.quiz__btn-prev, .quiz__btn-next').on('click', function () {
        $('.popup-wrapper').animate({ scrollTop: 50 }, 1000);
      });
    </script>
  </body>
</html>

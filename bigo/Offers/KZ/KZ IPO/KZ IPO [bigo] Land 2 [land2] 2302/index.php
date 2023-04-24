<!DOCTYPE html>
<!--[if lt IE 7]><html class="ie ie6" lang="ru" prefix="og: http://ogp.me/ns#" > <![endif]-->
<!--[if IE 7]><html class="ie ie7" lang="ru" prefix="og: http://ogp.me/ns#" > <![endif]-->
<!--[if IE 8]><html class="ie ie8" lang="ru" prefix="og: http://ogp.me/ns#" > <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="ru" prefix="og: http://ogp.me/ns#">
  <!--<![endif]-->

  <head>
    <meta charset="UTF-8" />
    <title>Народное IPO</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <link rel="stylesheet" href="themes/2017-09/css/main%EF%B9%96v=1676897939.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    <link rel="stylesheet" href="css/all_app.bundle.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/intlTelInput.min.css" />
    <link rel="stylesheet" href="css/modal.css" />
    <link rel="stylesheet" href="css/timer.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css"
    />

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

    <script
      async
      src="https://api.imotech.video/ad/events.js?pixel_id=<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>"
    ></script>
    <script>
      window.bgdataLayer = window.bgdataLayer || [];

      function bge() {
        bgdataLayer.push(arguments);
      }
      bge('init', "<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>");
    </script>
  </head>

  <body class="home ru-lang">
    <style>
      .main-slider__in {
        height: 400px;
      }

      .main-slider__title,
      .main-slider__desc p {
        color: #000;
        text-align: center;
      }

      .main-slider__btn-container {
        text-align: center;
      }

      .main-slider__bg img {
        height: 400px;
      }

      .header {
        padding-top: 10px;
        padding-bottom: 10px;
      }

      /* .header img {
        width: 250px;
      } */

      .main-slider {
        margin-top: 60px;
      }

      .header {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        box-shadow: 3px 4px 14px -3px #000000;
      }

      .header .left {
        width: 100px;
        height: 90px;
      }

      .header .right {
        width: 140px;
        height: 90px;
      }
    </style>

    <div class="layout">
      <main>
        <div class="header">
          <a href="#scroll"><img class="right" src="images/a-aifc-logo-2.svg" alt="" /></a>
        </div>
        <section class="section main-slider">
          <div class="container main-slider__container">
            <div class="main-slider__bg bg">
              <img src="images/2.png" alt="" />
              <div class="bg__item bg__item_gradient"></div>
            </div>
            <div class="content main-slider__content">
              <div class="main-slider__in"></div>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <h1 class="main-slider__title">
              "<a href="#scroll" class="blue">Народное IPO</a> В КАЗАХСТАНЕ: СТАБИЛЬНЫЙ ИСТОЧНИК
              ДОХОДА ДЛЯ ВСЕХ ИНВЕСТОРОВ"
            </h1>
            <div class="main-slider__desc">
              <p class="main-slider__desc_bold">Касым-Жомарт Токаев</p>
              <p>Президент Республики Казахстан</p>
            </div>
            <div class="main-slider__btn-container">
              <a href="#scroll" class="btn btn_blue-gradient main-slider__btn"
                >Регистрация на платформе</a
              >
            </div>
          </div>
        </section>

        <style>
          .phone-img {
            display: none;
          }

          .phone-img img {
            width: 440px;
          }

          .blue {
            color: #002ed9;
          }

          .conditions__in h2 {
            color: #000;
          }

          .conditions__in p {
            text-align: center;
            color: #000;
          }
          a {
            text-decoration: none !important;
          }

          .register-form__text-input input {
            background-color: #04294b !important;
          }

          .register-form__text-input input::placeholder {
            color: #fff !important;
          }
        </style>

        <section class="section section_light conditions" id="conditions">
          <div class="container">
            <div class="content">
              <div class="conditions__in">
                <!-- <h2>Размещайте торговые ордера на лучших условиях</h2> -->
                <!-- <ul class="conditions__list">
                                <li class="conditions__item">
                                    <p class="conditions__num">$<i data-from="0" data-to="5">0</i>
                                        <span class="conditions__star">*</span>
                                    </p>
                                    <span class="conditions__subtitle">Минимальная сумма инвестиции</span>
                                </li>
                                <li class="conditions__item">
                                    <p class="conditions__num">$<i data-from="0" data-to="1">0</i>
                                    </p>
                                    <span class="conditions__subtitle">Минимальная сумма сделки</span>
                                </li>
                                <li class="conditions__item">
                                    <p class="conditions__num">$<i data-from="0" data-to="10000">0</i></p>
                                    <span class="conditions__subtitle">Виртуальных средств на вашем счете</span>
                                </li>
                                <li class="conditions__item">
                                    <p class="conditions__num"><i data-from="0" data-to="50">0</i>+</p>
                                    <span class="conditions__subtitle">платежных методов</span>
                                </li>
                                <li class="conditions__item conditions__item_nomargin">
                                    <p class="conditions__num">$0</p>
                                    <span class="conditions__subtitle">Нет комиссий на пополнения и выводы</span>
                                </li>
                                <li class="conditions__item conditions__item_nomargin">
                                    <p class="conditions__num"><i data-from="0" data-to="100">0</i>+</p>
                                    <span class="conditions__subtitle">Торговых активов</span>
                                </li>
                            </ul> -->

                <h2>Что такое <a href="#scroll" class="blue">Народное IPO?</a></h2>

                <p>
                  <a href="#scroll" class="blue">Народное IPO</a> — платформа, на которой каждый
                  сможет
                  <a href="#scroll" class="blue">
                    инвестировать от $150 и зарабатывать от $4 500 в месяц </a
                  >. Теперь национальные ресурсы в ваших руках! Компания, размещающая свои акции на
                  бирже, тем самым привлекает капитал, а покупатели акций становятся совладельцами
                  бизнеса компании, влияя на ее политику, участвуя в принятии решений, а также будет
                  иметь возможность получения дохода.
                </p>
                <div class="phone-img">
                  <img src="images/4.png" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section_light why-we">
          <div class="container">
            <div class="content why-we__in">
              <h2>Почему выгодно инвестировать в госкомпании?</h2>
              <ul class="why-list">
                <li class="why-list__item">
                  <a
                    class="why-list__link why-list__link--diverse-trading-instruments"
                    href="ru/cabinet/demo-quick-high-low.html"
                  >
                    <img
                      src="themes/2017-09/img/why-we/3.svg"
                      alt="Icon 3"
                      class="lazy"
                      loading="lazy"
                    />
                    <p class="why-list__title">
                      <a href="#scroll" class="blue">Низкий порог входа</a>
                    </p>
                    <p class="why-list__sub-title">Минимальная инвестиция всего $150</p>
                  </a>
                </li>
                <li class="why-list__item">
                  <a
                    class="why-list__link why-list__link--education"
                    href="ru/cabinet/platform-guide/index.html"
                  >
                    <img
                      src="themes/2017-09/img/why-we/2.svg"
                      alt="Icon 2"
                      class="lazy"
                      loading="lazy"
                    />
                    <p class="why-list__title">
                      <a href="#scroll" class="blue">ДОСТУПНЫЕ КОНСУЛЬТАЦИИ</a>
                    </p>
                    <p class="why-list__sub-title">
                      С вами свяжется менеджер компании, который расскажет вам все подробности
                      работы на инвестиционной платформе
                    </p>
                  </a>
                </li>
                <li class="why-list__item">
                  <a
                    class="why-list__link why-list__link--demo-account"
                    href="ru/cabinet/demo-quick-high-low.html"
                  >
                    <img
                      src="themes/2017-09/img/why-we/4.svg"
                      alt="Icon 4"
                      class="lazy"
                      loading="lazy"
                    />
                    <p class="why-list__title"><a href="#scroll" class="blue">Регистрация</a></p>
                    <p class="why-list__sub-title">
                      Персональный менеджер поможет вам зарегистрироваться и пройдет с вами путь
                      первой инвестиции
                    </p>
                  </a>
                </li>
                <li class="why-list__item_start-trading start-trading">
                  <div class="start-trading__inn">
                    <a href="#scroll" class="btn btn_blue-gradient">Зарегистрироваться</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <style>
          .swiper__item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .item-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #0e487d;
            padding: 30px;
            border-radius: 20px;
            height: 500px;
          }

          .item-wrap img,
          .item-wrap span {
            margin-bottom: 15px;
          }

          .item-wrap span {
            background: #04294b;
            padding: 7px 25px;
            border-radius: 5px;
          }

          .item-wrap div {
            text-align: center;
          }

          .swiper__item img {
            height: 200px;
            width: 200px;
          }

          .swiper-button-next,
          .swiper-button-prev {
            top: 40%;
          }

          .offers {
            padding-bottom: 0;
            background-color: #eef2f9;
            overflow-y: hidden;
          }

          .offers .container {
            display: flex;
            justify-content: center;
          }

          .item-wrap {
            margin-right: 5px;
          }
        </style>

        <section class="section slider offers">
          <div class="container">
            <div class="swiper mySwiper">
              <div class="swaper__items swiper-wrapper">
                <div class="swiper__item swiper-slide">
                  <div class="item-wrap">
                    <img src="images/reviews/photo_2023-02-21 17.17.06.jpeg" alt="" />
                    <span>Саят Шайжанов</span>
                    <div class="review__text">
                      Когда я наткнулся на рекламу в Facebook, я решил рискнуть и сделал свою первую
                      инвестицию в размере 150$, и с тех пор моя жизнь изменилась.
                    </div>
                  </div>
                </div>
                <div class="swiper__item swiper-slide">
                  <div class="item-wrap">
                    <img src="images/reviews/photo_2023-02-21 17.17.07.jpeg" alt="" />
                    <span>Мырзабек Тусупбеков</span>
                    <div class="review__text">
                      Я никогда не думал стать инвестором, потому что ничего в этом не понимал, для
                      меня пользователи из них просто оставили заявку на сайте, и теперь я могу
                      смело отправляться в отпуск на любая страна мира и возможность обзавестись
                      собственным домом.
                    </div>
                  </div>
                </div>
                <div class="swiper__item swiper-slide">
                  <div class="item-wrap">
                    <img src="images/reviews/photo_2023-02-21 17.17.08.jpeg" alt="" />
                    <span>Аскар Базарбеков</span>
                    <div class="review__text">
                      Еще год назад я не мог представить, что у меня будет ежемесячно на карте более
                      6 000$, от нечего делать. Еще год назад я не мог представить, что у меня будет
                      ежемесячно на карте более 6 000$, от нечего делать. Когда я наткнулся на
                      рекламу в Facebook, я решил рискнуть и сделал свою первую инвестицию в размере
                      150$, и с тех пор моя жизнь изменилась.
                    </div>
                  </div>
                </div>
                <div class="swiper__item swiper-slide">
                  <div class="item-wrap">
                    <img src="images/reviews/photo_2023-02-21 17.17.09.jpeg" alt="" />
                    <span>Айтуар Дюсупов</span>
                    <div class="review__text">
                      Самое невероятное открытие, которое я когда-либо делал. Это буквально приносит
                      мне деньги каждый день, и мне не нужно ничего для этого делать.
                    </div>
                  </div>
                </div>
                <div class="swiper__item swiper-slide">
                  <div class="item-wrap">
                    <img src="images/reviews/photo_2023-02-21 17.17.10.jpeg" alt="" />
                    <span>Жумабек Кулмановв</span>
                    <div class="review__text">
                      Платформа безумно проста в использовании, а бесплатные советы экспертов о том,
                      как заработать больше, помогают мне сейчас зарабатывать более $1000.
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </section>
        <br id="scroll" />
        <br />
        <br />

        <section class="polygon">
          <div class="t-container index-z">
            <h2 style="font-size: 30px">
              Количество пользователей платформы <a href="#scroll">лимитировано</a>
            </h2>
            <p class="form-section__subhead">До конца регистрации осталось:</p>
            <div class="t-width t-width_12 t415__mainblock">
              <div class="t-cover__wrapper t-valign_middle">
                <div class="t415__content column" data-hook-content="covercontent">
                  <div id="t415__timer210558841" class="t415__timer">
                    <div class="t415__col">
                      <span class="t415__days t-title t-title_lg t415__number"> 0 </span>
                      <div class="t415__text t-descr t-descr_xxs">Дней</div>
                    </div>
                    <div class="t415__col">
                      <span class="t415__hours t-title t-title_lg t415__number" id="hours">14</span>
                      <div class="t415__text t-descr t-descr_xxs">Часов</div>
                    </div>
                    <div class="t415__col">
                      <span class="t415__minutes t-title t-title_lg t415__number" id="minutes"
                        >43</span
                      >
                      <div class="t415__text t-descr t-descr_xxs">Минут</div>
                    </div>
                    <div class="t415__col">
                      <span class="t415__seconds t-title t-title_lg t415__number" id="seconds"
                        >25</span
                      >
                      <div class="t415__text t-descr t-descr_xxs">Секунд</div>
                    </div>
                    <div class="form-wrap">
                      <div class="form-section__form">
                        <div
                          class="block__form-reg-login-update"
                          data-test="block__form-reg-login-update"
                        >
                          <div
                            class="login-form-check login-form-check--1 forms--dark"
                            style="display: none"
                            data-test="login-form_check"
                            hidden
                          ></div>
                          <div
                            data-test-component="form-reg-login-update"
                            id="forms_1"
                            class="forms forms--pt forms_1 forms--dark"
                          >
                            <div class="form-reg-login-component"></div>
                            <!-- FORM SWITCHER -->
                            <div class="forms__controls">
                              <!-- <button
                                type="button"
                                class="forms__control forms__control--reg forms__control--active"
                                style="font-size: 30px; color: #fff"
                              >
                                Регистрация
                              </button> -->
                            </div>
                            <div class="forms__reg" id="forms__reg__1">
                              <!-- REGISTRATION -->

                              <style>
                                .form-control {
                                  margin-bottom: 22px;
                                }

                                .form-control.error {
                                  margin-bottom: 0px;
                                }

                                .register-form__text-input label {
                                  font-size: 14px;
                                }

                                .forms__control--reg {
                                  position: relative;
                                  overflow: hidden;
                                  color: linear-gradient(79deg, #0099fa, #002ed9);
                                  background-size: 115% auto;
                                  transition: 0.5s;
                                }

                                .register-form__button {
                                  position: relative;
                                  overflow: hidden;
                                  background: linear-gradient(79deg, #0099fa, #002ed9);
                                  background-size: 115% auto;
                                  transition: 0.5s;
                                }
                              </style>

                              <form method="POST" autocomplete="off" id="formTop">
                                <div class="register-form__text-input register-form__email">
                                  <input
                                    class="input-email--validate register-form__input register-form__email__input form-control"
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="Введите имя"
                                  />
                                </div>

                                <div class="register-form__text-input register-form__email">
                                  <input
                                    class="input-email--validate register-form__input register-form__email__input form-control"
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder="Введите фамилию"
                                  />
                                </div>

                                <div class="register-form__text-input register-form__email">
                                  <input
                                    class="input-email--validate register-form__input form-control register-form__email__input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Введите электронный адрес"
                                    required
                                  />
                                </div>

                                <div class="register-form__text-input register-form__password">
                                  <input
                                    class="form-control register-form__input"
                                    type="tel"
                                    autocomplete="on"
                                    id="phone"
                                    name="phone"
                                    required
                                    tabindex="0"
                                  />
                                </div>

                                <div
                                  class="register-form__agreement"
                                  data-test="register-form_agreement"
                                >
                                  <style>
                                    /* .block__form-reg-login-update {
                                      width: 360px !important;
                                    } */

                                    .iti {
                                      width: 100% !important;
                                    }

                                    /* @media (max-width: 400px) {
                                      .block__form-reg-login-update {
                                        width: 305px !important;
                                      }
                                    } */
                                  </style>
                                </div>

                                <button type="submit" class="form--submit register-form__button">
                                  Получить доступ к платформе
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>
          .polygon {
            width: 100%;
            padding-bottom: 10px;
            padding-top: 30px;
          }
          .form-wrap {
            background: #fff;
          }

          .t415__buttons {
            margin-bottom: 15px;
          }

          .main-slider__title {
            font-size: 18px;
          }
        </style>

        <div class="license">
          <div class="container">
            <h2 class="main-slider__title">
              Лицензия Агентства РК по регулированию и развитию финансового рынка на осуществление
              деятельности на рынке ценных бумаг
            </h2>

            <a href="images/lisense.jpg" data-fancybox="gallery">
              <img
                style="width: 300px; display: block; margin: 0 auto"
                src="images/lisense.jpg"
                alt="Изображение"
              />
            </a>
          </div>
        </div>

        <div class="your-earnings modal">
          <div class="your-earnings__bg modal__bg"></div>
          <div class="modal__wrap">
            <div class="modal__container modal__header your-earnings__header">
              <div class="your-earnings__logo">
                <svg
                  width="224"
                  height="33"
                  viewBox="0 0 224 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M221.389 16.9109C221.389 13.8782 219.794 11.5537 216.986 11.5537C214.675 11.5537 211.94 12.8917 211.94 16.9096V23.8192H209.713V9.98832H211.94V11.7275C213.31 10.0602 215.391 9.60547 217.148 9.60547C221.109 9.60547 223.697 12.0633 223.661 16.4915C223.659 16.6039 223.651 16.8325 223.642 17.0534V23.8192H221.389V16.9109Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M199.959 9.60547C204.007 9.60547 207.293 12.8786 207.293 16.9109C207.293 20.9432 204.007 24.2177 199.959 24.2177C195.911 24.2177 192.623 20.9432 192.623 16.9109C192.623 12.8786 195.911 9.60547 199.959 9.60547ZM199.959 11.4152C202.829 11.4152 205.158 13.8782 205.158 16.9109C205.158 19.945 202.829 22.408 199.959 22.408C197.089 22.408 194.759 19.945 194.759 16.9109C194.759 13.8782 197.089 11.4152 199.959 11.4152Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M190.21 9.98316H187.933V23.814H190.21V9.98316ZM189.071 5.02051C189.941 5.02051 190.647 5.72349 190.647 6.5898C190.647 7.4561 189.941 8.15909 189.071 8.15909C188.202 8.15909 187.496 7.4561 187.496 6.5898C187.496 5.72349 188.202 5.02051 189.071 5.02051Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M185.453 23.0771L184.962 23.3371C181.443 25.2762 177.621 24.125 177.451 19.6341H177.446V11.998H174.801V9.99883H177.446V5.02051H179.724V9.99883H183.789V11.998H179.724V19.2055C179.724 22.6929 182.59 22.4251 183.758 21.3889L185.453 23.0771Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M161.942 11.6216C163.258 10.3725 165.039 9.60547 166.999 9.60547C171.047 9.60547 174.334 12.8786 174.334 16.9109C174.334 20.9432 171.047 24.2177 166.999 24.2177C165.039 24.2177 163.258 23.4507 161.942 22.2015V28.9177H159.665V9.98832H161.942V11.6216ZM166.999 11.4152C169.869 11.4152 172.199 13.8782 172.199 16.9109C172.199 19.945 169.869 22.408 166.999 22.408C164.129 22.408 161.799 19.945 161.799 16.9109C161.799 13.8782 164.129 11.4152 166.999 11.4152Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M147.367 4.82959C152.706 4.82959 157.04 9.14806 157.04 14.4661C157.04 19.7842 152.706 24.1013 147.367 24.1013C142.027 24.1013 137.693 19.7842 137.693 14.4661C137.693 9.14806 142.027 4.82959 147.367 4.82959ZM147.367 6.83267C151.352 6.83267 154.587 10.2535 154.587 14.4661C154.587 18.6787 151.352 22.0995 147.367 22.0995C143.38 22.0995 140.146 18.6787 140.146 14.4661C140.146 10.2535 143.38 6.83267 147.367 6.83267Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M136.325 22.8579L135.833 23.1179C132.369 25.0269 127.741 24.2599 127.551 19.6344L127.522 18.7341V12.7797H125.242V9.94297H127.616L127.88 5.1123H130.948V9.94297H134.506V12.7797H130.948V18.985H130.959C130.943 21.397 132.874 21.1279 133.925 20.4667L136.325 22.8579Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M117.33 24.1073C113.327 24.0315 110.105 20.8198 110.105 16.8476C110.105 12.8754 113.343 9.65186 117.33 9.65186C121.317 9.65186 124.554 12.8754 124.554 16.8476C124.554 17.25 124.521 17.6433 124.457 18.0275H113.677C114.135 19.6974 115.662 20.9139 117.379 20.957C119 20.9544 120.347 20.5676 121.419 19.6333L123.565 21.8507C123.447 21.9775 123.324 22.0977 123.198 22.2127C121.736 23.5311 119.735 24.1099 117.33 24.1073ZM120.938 15.6677C120.48 13.9978 118.987 12.7264 117.33 12.7264C115.674 12.7264 114.135 13.9978 113.677 15.6677H120.938Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M99.905 15.6687L101.85 13.2344L105.125 9.9273H109.868L103.342 16.5925L110.421 23.8222H105.678L100.97 19.0137L100.215 19.6096L100.205 23.8222H96.6781V5.1123H100.205V11.7749L99.905 15.6687Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M92.4534 23.0345C91.3738 23.6761 90.112 24.0433 88.7648 24.0433C84.7771 24.0433 81.541 20.8198 81.541 16.8476C81.541 12.8754 84.7771 9.65186 88.7648 9.65186C90.1054 9.65186 91.3621 10.0164 92.439 10.6515C92.8837 10.9115 93.7573 11.5844 94.2912 12.4938L91.8959 14.8249C91.261 13.6032 90.1277 12.7813 88.7648 12.7813C86.7368 12.7813 85.244 14.6027 85.244 16.8476C85.244 19.0924 86.7368 20.9139 88.7648 20.9139C90.1277 20.9139 91.261 20.0907 91.8959 18.8703L94.2886 21.1974C93.7534 22.1029 92.8837 22.7745 92.439 23.0345H92.4534Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M72.6537 9.65186C76.6401 9.65186 79.8775 12.8754 79.8775 16.8476C79.8775 20.8198 76.6401 24.0433 72.6537 24.0433C68.666 24.0433 65.4286 20.8198 65.4286 16.8476C65.4286 12.8754 68.666 9.65186 72.6537 9.65186ZM72.6537 12.7813C74.6804 12.7813 76.1312 14.6027 76.1312 16.8476C76.1312 19.0924 74.6804 20.9139 72.6537 20.9139C70.6258 20.9139 69.1081 19.0924 69.1081 16.8476C69.1081 14.6027 70.6258 12.7813 72.6537 12.7813Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M56.5876 5.1123C60.6068 5.1123 63.8652 8.71866 63.8652 12.7222V12.7274C63.8652 16.731 60.6068 20.4968 56.5876 20.4968H53.3306V23.8222H49.3153V5.1123H56.5876ZM59.8815 12.7222C59.8815 10.7335 58.3992 8.76177 56.4027 8.76177H53.3306V16.8486H56.4027C58.3992 16.8486 59.8815 15.0872 59.8815 12.7261V12.7222Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.9611 27.532C18.214 28.3687 16.2595 28.8171 14.1978 28.8171H5.81708L2.04836 32.646C1.70697 32.9941 1.19158 33.0944 0.74309 32.907C0.294601 32.7196 0 32.2711 0 31.7825V1.86092C0 0.836753 0.816643 0 1.83411 0H14.2445C16.246 0.00669387 18.1471 0.435167 19.8541 1.23843C19.8541 1.23843 19.8608 1.23844 19.8675 1.24513C24.9012 3.49427 28.4155 8.54139 28.4155 14.4052C28.4155 20.0147 25.2092 24.8744 20.5302 27.2574L19.9611 27.532ZM22.4847 0.669387C23.8168 0.227592 25.2359 0 26.7153 0C34.5471 0 40.9129 6.4596 40.9129 14.4052C40.9129 22.3575 34.5471 28.8171 26.7153 28.8171C25.2158 28.8171 23.7699 28.5761 22.4177 28.1277L22.4045 28.121C27.1036 25.343 30.2563 20.2222 30.2563 14.3717C30.2563 8.55475 27.1369 3.46073 22.4847 0.669387ZM18.234 2.8918C14.7599 5.49571 12.5176 9.68604 12.5176 14.4052C12.5176 19.1579 14.7801 23.3683 18.2877 25.9656C18.3077 25.9722 18.3212 25.979 18.3413 25.9991C18.8634 26.4275 20.0616 25.5439 19.8474 25.1824C19.8474 25.1757 19.8407 25.169 19.834 25.1623C16.467 22.545 14.2914 18.696 14.2914 14.4119C14.2914 10.1212 16.467 6.26543 19.834 3.64813C19.8541 3.63474 19.8675 3.61477 19.8742 3.59469C19.9143 3.27338 19.1646 2.69099 18.629 2.73785C18.4885 2.75124 18.3545 2.79808 18.234 2.8918Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                </svg>
              </div>

              <div class="modal__cross">
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="your-earnings__container modal__container">
              <div class="your-earnings__in your-earnings__in_top">
                <h2>Пока вы смотрели сайт</h2>

                <div class="rw">
                  <div class="l">
                    <div class="kv">
                      <p class="js-user-timer">00:00</p>
                      <span>Время посещения</span>
                    </div>
                  </div>
                  <div class="r">
                    <div class="kv">
                      <p>$0</p>
                      <span>Ваш заработок</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="your-earnings__in your-earnings__in_bottom">
                <div class="divider">За это время</div>
                <div class="rw">
                  <div class="l">
                    <div class="kv">
                      <p class="js-ye-traders">0</p>
                      <span>
                        <div class="status status--on"></div>
                        Трейдеров онлайн
                      </span>
                    </div>
                  </div>
                  <div class="r">
                    <div class="kv">
                      <p class="js-ye-profit">$0</p>
                      <span> Трейдеры заработали </span>
                    </div>
                  </div>
                </div>
                <a
                  href="ru/cabinet/demo-quick-high-low.html"
                  class="btn btn_blue-gradient your-earnings__btn"
                >
                  Начать торговлю в один клик
                </a>
              </div>
            </div>
            <div
              class="modal__container modal__footer your-earnings__info-text your-earnings__footer"
            >
              <span> * Данные обновляются каждые 30 секунд </span>
            </div>
          </div>
        </div>
      </main>

      <style>
        .socket__logo img {
          width: 200px;
        }

        .footer p {
          text-align: center;
        }

        .footer .socket {
          padding-top: 1.5rem;
        }

        .polygon-w-bg {
          height: 0;
          margin-bottom: 0;
          padding-top: 0;
        }

        .register-now__label {
          border: none;
          background: linear-gradient(79deg, #0099fa, #002ed9);
        }

        .register-now__count {
          background: linear-gradient(79deg, #0099fa, #002ed9);
        }

        .socket {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }

        .form-reg-login-update {
          width: 360px !important;
        }
      </style>

      <div class="polygon polygon-w-bg">
        <div class="t-container index-z">
          <div class="t-width t-width_12 t415__mainblock">
            <div class="t-cover__wrapper t-valign_middle">
              <div style="display: none" class="t415__content" data-hook-content="covercontent">
                <div class="t415__textwrapper t-width t-width_12">
                  <div class="t415__title t-title t-title_md" field="title">
                    Количество пользователей платформы лимитировано
                  </div>
                  <div class="t415__descr t-descr t-descr_md" field="descr">
                    Успейте зарегистрироваться и начать зарабатывать на выгодных инвестициях.
                    <br />
                    До закрытия регистрации осталось...
                  </div>
                </div>

                <div class="t415__buttons">
                  <button
                    name="btn"
                    id="popuping"
                    type="submit"
                    value="Начать зарабатывать"
                    class="btn btn-gradient"
                  >
                    Зарегистрироваться
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Динамические числа -->
        <div class="container">
          <a class="register-now__border" href="#scroll">
            <div class="register-now__count">
              <span class="register-now__count" id="register-count1">173</span>
            </div>
            <div class="register-now__label" style="font-size: 12px">
              Пользователей<br />на странице
            </div>
          </a>
          <a class="register-now__border" href="#scroll">
            <div class="register-now__label" style="font-size: 12px">
              Количество мест <br />
              для регистрации
            </div>
            <div class="register-now__count">
              <span class="register-now__count" id="register-count2">173</span>
            </div>
          </a>
        </div>
      </div>

      <footer class="section footer">
        <div class="container">
          <div class="content footer__in">
            <style>
              @media screen and (max-width: 600px) {
                .footer .container {
                  padding: 1.9rem 1.938rem 2rem;
                }
              }
              .socket a {
                display: flex;
                justify-content: space-between;
              }

              .socket__logo img {
                width: 145px;
              }

              .socket__logo .left {
                margin-right: 40px;
              }
            </style>

            <div class="socket">
              <a href="#scroll" class="socket__logo logo">
                <img src="images/a-aifc-logo-2.svg" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

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

    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->

    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
    <script src="js/slider.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/intlTelInput.min.js"></script>
    <script src="js/jquery.maskedinput.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/timer.js"></script>
    <script src="js/main.js"></script>
    <script src="js/submitForm.js"></script>
    <script src="js/utm.js"></script>
  </body>
</html>

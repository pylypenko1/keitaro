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

      // function getPixel() {
      //     var params = new URLSearchParams(document.location.search.substr(1));
      //     if (!'{pixel}'.match('{')) {
      //         return '{pixel}';
      //     }
      //     if (params.get('pixel')) {
      //         return params.get('pixel')
      //     }

      //     if (getCookie('pixel')) {
      //         return getCookie('pixel');
      //     }

      //     return null;
      // }

      function getPixel() {
        var params = new URLSearchParams(document.location.search.substr(1));
        if (!'{idpxl}'.match('{')) {
          return '{idpxl}';
        }
        if (params.get('idpxl')) {
          return params.get('idpxl');
        }

        if (getCookie('idpxl')) {
          return getCookie('idpxl');
        }

        return null;
      }

      if (typeof URLSearchParams === 'function') {
        document.addEventListener('DOMContentLoaded', function (event) {
          var params = new URLSearchParams(document.location.search.substr(1));
          var subid = getSubId();
          var token = getToken();
          var pixel = getPixel();

          params.set('_token', token);
          setCookie('idpxl', pixel);
          setCookie('token', token);
          setCookie('subid', subid);

          // Adds params to the links
          document.querySelectorAll('a').forEach(function (link) {
            var url = new URL(link.href);
            params.forEach(function (v, k) {
              url.searchParams.append(k, v);
            });
            link.href = url.toString();
          });

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
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0e487d;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .header img {
        width: 250px;
      }

      .main-slider {
        margin-top: 60px;
      }
    </style>

    <div class="layout">
      <main>
        <div class="header">
          <a href="#scroll"><img src="images/uzipo.png" alt="" /></a>
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
              "<a href="#scroll" class="blue">Народное IPO</a> в Узбекистане: как начать
              зарабатывать на росте местной экономики"
            </h1>
            <div class="main-slider__desc">
              <p class="main-slider__desc_bold">Шавкат Мирзиёев</p>
              <p>Президент Узбекистана</p>
            </div>
            <div class="main-slider__btn-container">
              <a href="#scroll" class="btn btn_blue-gradient main-slider__btn"
                >Получить доступ к платформе</a
              >
            </div>
          </div>
        </section>

        <style>
          .phone-img {
            display: flex;
            justify-content: center;
            align-items: center;
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
              <h2><span>Почему</span> выбирают нас?</h2>
              <ul class="why-list">
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
                      <a href="#scroll" class="blue">Бесплатная консультация</a>
                    </p>
                    <p class="why-list__sub-title">
                      Получите телефонный звонок от финансового эксперта для подтверждения
                      регистрации.
                    </p>
                  </a>
                </li>
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
                      <a href="#scroll" class="blue">Вносите депозит и получайте прибыль</a>
                    </p>
                    <p class="why-list__sub-title">Минимальный депозит $150.</p>
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
                      Откройте счет бесплатно всего за несколько минут
                    </p>
                  </a>
                </li>
                <li class="why-list__item_start-trading start-trading">
                  <div class="start-trading__inn">
                    <a href="#scroll" class="btn btn_blue-gradient">Регистрация</a>
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
                    <span>Мурат Хачбеков</span>
                    <div class="review__text">
                      Когда я наткнулся на рекламу в Facebook, я решил рискнуть и сделал свою первую
                      инвестицию в размере 150$, и с тех пор моя жизнь изменилась.
                    </div>
                  </div>
                </div>
                <div class="swiper__item swiper-slide">
                  <div class="item-wrap">
                    <img src="images/reviews/photo_2023-02-21 17.17.07.jpeg" alt="" />
                    <span>Тамир Гудбеков</span>
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
                    <span>Азис Максаков</span>
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
                    <span>Шерзод Парманов</span>
                    <div class="review__text">
                      Самое невероятное открытие, которое я когда-либо делал. Это буквально приносит
                      мне деньги каждый день, и мне не нужно ничего для этого делать.
                    </div>
                  </div>
                </div>
                <div class="swiper__item swiper-slide">
                  <div class="item-wrap">
                    <img src="images/reviews/photo_2023-02-21 17.17.10.jpeg" alt="" />
                    <span>Эркин Раджабов</span>
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

        <section class="polygon">
          <div class="t-container index-z">
            <h2 style="font-size: 30px">
              Количество пользователей платформы <a href="#scroll">лимитировано</a>
            </h2>
            <p class="form-section__subhead" id="scroll">До конца регистрации осталось:</p>
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
                  </div>
                  <div class="t415__buttons">
                    <a href="#scroll" style="text-decoration: none">
                      <a href="#scroll" class="btn btn_blue-gradient"> Зарегистрироваться </a>
                    </a>
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
            padding-bottom: 40px;
          }

          .t415__buttons {
            margin-bottom: 15px;
          }
        </style>

        <div class="form-wrap">
          <div class="form-section__form">
            <div class="block__form-reg-login-update" data-test="block__form-reg-login-update">
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
                  <button
                    type="button"
                    class="forms__control forms__control--reg forms__control--active"
                    style="font-size: 30px; color: #fff"
                  >
                    Регистрация
                  </button>
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

                    <div class="register-form__agreement" data-test="register-form_agreement">
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

        <!-- <section class="section section_light check-your-luck">
                <div class="container container__no-padding">
                    <div class="content check-your-luck__in">
                        <div class="check-your-luck__left">
                            <h2>Испытайте удачу!</h2>
                            <p class="title-desc">
                                Укажите ваш адрес электронной почты и получите специальное предложение от Pocket Option. Если удача на вашей стороне, вы получите бесплатный подарок! </p>
                        </div>
                        <div class="check-your-luck__right">
                            <div class="alert alert--danger"></div>
                            <div class="form-wrap">
                                <form action="ru/check-your-luck/index.json" method="post">
                                    <input type="email" name="email" placeholder="Укажите ваш эл. адрес" />
                                    <button type="submit" class="btn btn_blue-gradient" data-fancybox data-src="#check-your-luck-captcha-modal">
                            Проверить                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->

        <!-- <div class="check-your-luck-captcha-modal" id="check-your-luck-captcha-modal" style="display: none">
                <div class="captcha-block js-recaptcha-block">
                    <div class="g-recaptcha" data-sitekey="6LcU2hgUAAAAAPHmrOrfTDy6DnROjq7Mr8LNwhNF" data-theme="light" data-type="image" data-size="normal"></div>
                    <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=onload&amp;hl=ru" async defer></script>
                    <style>
                        .g-recaptcha {
                            transform: scale(1);
                            transform-origin: 0 0 !important;
                            display: none;
                            margin: 0 20%;
                        }
                    </style>



                    <script type="text/javascript">
                        function refreshCaptcha(button) {
                            button.setAttribute('disabled', 'disabled');
                            button.classList.add('animate-rotate');
                            fetch('https://m.pocketoption.com/ru/refresh-captcha/')
                                .then(response => response.json())
                                .then(data => {
                                    if (!data.html) return;

                                    button.classList.remove('animate-rotate');
                                    const elems = document.querySelectorAll('.js-recaptcha-block');
                                    elems.forEach(ele => {
                                        ele.innerHTML = data.html;
                                    })
                                    const inputs = document.querySelectorAll('.js-recaptcha-input');
                                    inputs.forEach(ele => {
                                        ele.addEventListener('input', function() {
                                            if (ele.value) {
                                                ele.classList.add('form-control_filled');
                                            } else {
                                                ele.classList.remove('form-control_filled');
                                            }
                                        })
                                    })
                                }).catch(() => {});
                        }
                    </script>

                    <style>
                        .animate-rotate {
                            animation: capchaRotate linear 1s infinite;
                            transform-origin: center;
                        }
                        
                        @keyframes capchaRotate {
                            0% {
                                transform: rotate(0);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }
                    </style>
                </div>
                <button type="submit" class="btn btn_blue-gradient confirm-btn">Подтвердить</button>
            </div> -->

        <!-- <section class="section section_light applications">
                <div class="container">
                    <div class="content applications__in">
                        <h2>
                            Веб-приложение для всех устройств </h2>
                        <ul class="devices">
                            <li class="devices__item">
                                <a href="https://apps.apple.com/ru/app/po-trade-broker/id1627207617" target="_blank" class="devices__btn devices__btn_ios">
                                    <div class="devices__top">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="app-icon-stroke" d="M45.7878 55.3731C42.7369 58.334 39.3707 57.8724 36.1621 56.4764C32.7509 55.0522 29.6323 54.9621 26.0297 56.4764C21.5433 58.4128 19.1622 57.8499 16.4603 55.3731C1.20546 39.6679 3.45709 15.7443 20.7947 14.8437C24.9996 15.0688 27.9436 17.1685 30.4204 17.343C34.1018 16.5943 37.6256 14.4496 41.566 14.7311C46.3001 15.1138 49.8408 16.9827 52.205 20.3433C42.4667 26.1975 44.7746 39.0318 53.7192 42.6344C51.9291 47.3347 49.6325 51.9787 45.7822 55.4125L45.7878 55.3731ZM30.0827 14.6748C29.6267 7.69471 35.2839 1.95305 41.7912 1.39014C42.6862 9.43973 34.4734 15.4629 30.0827 14.6748Z" stroke-width="2" stroke-miterlimit="2" stroke-linejoin="round"/>
</svg>
                                        <p class="devices__title">IOS</p>
                                    </div>
                                    <div class="devices__link">Скачать</div>
                                </a>
                            </li>
                            <li class="devices__item">
                                <a rel="noopener" href="https://play.google.com/store/apps/details?id=com.potradeweb" target="_blank" class="devices__btn devices__btn_android">
                                    <div class="devices__top">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.6196 21.5973C46.6196 13.6461 40.1753 7.19971 32.2218 7.19971C30.748 7.19971 29.2525 7.19971 27.776 7.19971C19.8252 7.19971 13.3781 13.6461 13.3781 21.5973C13.3781 28.9693 13.3781 37.4664 13.3781 42.6763C13.3781 45.3749 15.567 47.5632 18.2671 47.5632C24.5619 47.5632 35.4385 47.5632 41.7333 47.5632C44.4334 47.5632 46.6196 45.3749 46.6196 42.6763C46.6196 37.4664 46.6196 28.9693 46.6196 21.5973Z" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5"/>
<path d="M13.379 24.0632H46.6208" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5"/>
<path d="M22.8769 47.561V57.3054" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round"/>
<path d="M37.1234 47.561V57.3054" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round"/>
<path d="M52 24.062V38.5557" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round"/>
<path d="M7.99286 24.062V38.5557" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round"/>
<path d="M38.7584 8.18183L44.247 2.69459" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round"/>
<path d="M21.2415 8.18183L15.753 2.69459" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round"/>
</svg>
                                        <p class="devices__title">Android</p>
                                    </div>
                                    <div class="devices__link">Скачать</div>
                                </a>
                            </li>
                            <li class="devices__item">
                                <a href="ru/cabinet/demo-quick-high-low.html" class="devices__btn devices__btn_web">
                                    <div class="devices__top">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.7969 12.9715C56.7969 11.0126 56.0185 9.13224 54.6309 7.74576C53.2461 6.35927 51.365 5.58057 49.4048 5.58057C39.1812 5.58057 20.8265 5.58057 10.6028 5.58057C8.64271 5.58057 6.76156 6.35927 5.37678 7.74576C3.98918 9.13224 3.21075 11.0126 3.21075 12.9715C3.21075 22.1804 3.21075 37.8198 3.21075 47.0287C3.21075 48.9877 3.98918 50.868 5.37678 52.2545C6.76156 53.6409 8.64271 54.4196 10.6028 54.4196C20.8265 54.4196 39.1812 54.4196 49.4048 54.4196C51.365 54.4196 53.2461 53.6409 54.6309 52.2545C56.0185 50.868 56.7969 48.9877 56.7969 47.0287C56.7969 37.8198 56.7969 22.1804 56.7969 12.9715Z" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.20721 18.6665H56.7927" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round"/>
<path d="M10.4264 14.5148C11.6639 14.5148 12.6672 13.5115 12.6672 12.274C12.6672 11.0364 11.6639 10.0332 10.4264 10.0332C9.18884 10.0332 8.18561 11.0364 8.18561 12.274C8.18561 13.5115 9.18884 14.5148 10.4264 14.5148Z" class="app-icon-fill"/>
<path d="M17.1488 14.5148C18.3864 14.5148 19.3896 13.5115 19.3896 12.274C19.3896 11.0364 18.3864 10.0332 17.1488 10.0332C15.9113 10.0332 14.908 11.0364 14.908 12.274C14.908 13.5115 15.9113 14.5148 17.1488 14.5148Z" class="app-icon-fill"/>
<path d="M23.871 14.5148C25.1085 14.5148 26.1118 13.5115 26.1118 12.274C26.1118 11.0364 25.1085 10.0332 23.871 10.0332C22.6334 10.0332 21.6302 11.0364 21.6302 12.274C21.6302 13.5115 22.6334 14.5148 23.871 14.5148Z" class="app-icon-fill"/>
</svg>
                                        <p class="devices__title">Веб-версия</p>
                                    </div>
                                    <div class="devices__link">Открыть</div>
                                </a>
                            </li>
                            <li class="devices__item">
                                <a href="fr/login.html" target="_blank" class="devices__btn devices__btn_tg">
                                    <div class="devices__top">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7205 30.5304C11.4164 30.6551 11.2202 30.9535 11.2266 31.2817C11.2322 31.6106 11.4397 31.9018 11.7486 32.0144C13.1458 32.5252 15.0464 33.2201 16.5634 33.7743C18.1601 34.3583 19.9352 34.187 21.3911 33.3086C24.7541 31.2793 30.9548 27.5383 34.1327 25.6207C34.2783 25.533 34.4666 25.5652 34.5743 25.6963C34.6829 25.8274 34.6781 26.018 34.5639 26.1443C32.3978 28.5397 28.5072 32.8405 26.3885 35.1819C26.0201 35.5897 25.848 36.1375 25.9172 36.6828C25.9871 37.2274 26.2912 37.7148 26.7497 38.0173C29.1201 39.5769 33.3027 42.3285 36.3375 44.3257C37.1418 44.8542 38.1593 44.9387 39.0401 44.5493C39.9208 44.16 40.5426 43.3501 40.6922 42.3985C41.6534 36.2718 43.3835 25.2531 44.208 19.9967C44.3021 19.3967 44.0664 18.7934 43.5902 18.417C43.1141 18.0405 42.4722 17.9504 41.9108 18.1797C35.0835 20.9732 17.5343 28.1519 11.7205 30.5304Z" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.0001 56.9142C44.8643 56.9142 56.9141 44.8644 56.9141 30.0002C56.9141 15.136 44.8643 3.08618 30.0001 3.08618C15.1359 3.08618 3.08606 15.136 3.08606 30.0002C3.08606 44.8644 15.1359 56.9142 30.0001 56.9142Z" class="app-icon-stroke" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                        <p class="devices__title">Telegram bot</p>
                                    </div>
                                    <div class="devices__link">Подписаться</div>
                                </a>
                            </li>
                        </ul>
                        <div class="phone-container">
                            <picture class="phone phone_android">
                                <source srcset="themes/2017-09/img/apps/android-img.webp 1x, themes/2017-09/img/apps/android-img@2x.webp 2x" type="image/webp">
                                <source srcset="themes/2017-09/img/apps/android-img.png 1x, themes/2017-09/img/apps/android-img@2x.png 2x" type="image/png">
                                <img src="themes/2017-09/img/apps/android-img.png" data-src="themes/2017-09/img/apps/android-img.png" data-srcset="themes/2017-09/img/apps/android-img.png 1x, themes/2017-09/img/apps/android-img@2x.png 2x" alt="Android" loading="lazy">
                            </picture>
                            <picture class="phone phone_iphone">
                                <source srcset="themes/2017-09/img/apps/iphone-img.webp 1x, themes/2017-09/img/apps/iphone-img@2x.webp 2x" type="image/webp">
                                <source srcset="themes/2017-09/img/apps/iphone-img.png 1x, themes/2017-09/img/apps/iphone-img@2x.png 2x" type="image/png">
                                <img src="themes/2017-09/img/apps/iphone-img.png" data-src="themes/2017-09/img/apps/iphone-img.png" data-srcset="themes/2017-09/img/apps/iphone-img.png 1x, themes/2017-09/img/apps/iphone-img@2x.png 2x" alt="Iphone" loading="lazy">
                            </picture>
                        </div>
                    </div>
                </div>
            </section> -->

        <!-- <section class="section section_light reviews-slider">
                <div class="container reviews-slider__container">
                    <div class="content reviews-slider__in">
                        <h2 class="reviews-slider__title">
                            Что люди говорят о нас </h2>
                        <p class="reviews-slider__title-desc">Нам доверяют и ежедневно зарабатывают более 10 миллионов клиентов по всему миру.</p>
                        <div class="js-reviews-slider slider">
                            <div class="slider__left">
                                <div class="slider__in">
                                    <div class="rv-slider">
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-02-21 14:08:23</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Платформа отличная, торгую недавно, очень все</span><span class="js-review-text-next"> понятно!
Крутая идея с вознаграждениями за торговлю, хочу попробовать купить безрисковую сделку)</span><span class="js-review-dots">...</span></br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Artur A.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 45515309</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-02-20 18:20:29</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Никаких проблем с пополнением или выводом нет. В</span><span class="js-review-text-next"> случае чего, поддержка всегда оперативно подскажет и поможет. Быстрый и интуитивный интерфейс. Однозначно 5</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_kg">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Aslan N.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 36752988</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-02-10 12:28:38</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Отличный брокер, торгую почти год. Никаких</span><span class="js-review-text-next"> проблем с пополнением или выводом нет. В случае чего, поддержка всегда оперативно подскажет и поможет. Быстрый и интуитивный интерфейс. Однозначно 5</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ua">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Levan C.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 30502466</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-02-09 03:49:04</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Удобная навигация и работать в Покете одно</span><span class="js-review-text-next"> удовольствие, все на уровне. Отличный брокер!</span><span class="js-review-dots">...</span></br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Aleksandr K.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 26876160</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-02-05 13:22:33</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Платформа удобная, нравится на ней торговать,</span><span class="js-review-text-next"> хороший интерфейс и люди.</span><span class="js-review-dots">...</span></br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_by">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Vadim K.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 30025397</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-02-03 17:01:45</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Отличная платформа! Удобная во всём. Оперативная</span><span class="js-review-text-next"> служба поддержки. Это лучшее, что я встречал.</span><span class="js-review-dots">...</span></br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Yan P.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 33024975</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-02-03 12:30:48</div>
                                            </div>
                                            <div class="review-item__text">
                                                Лучшая платформа среди имеющихся в РФ </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Roman U.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 27722829</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-01-30 14:42:46</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Очень хорошая платформа, много того, что</span><span class="js-review-text-next"> запрещено на других платформах, Мартингейл, хеджирование. А главное, вывод средств, такой оперативности нигде нету. Главное, понимание, что это РАБОТА, а не игра)))</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ua">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Lyudmila  T.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 19305791</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-01-14 21:34:43</div>
                                            </div>
                                            <div class="review-item__text">
                                                Лучшие бинарные опционы в СНГ! </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Valery B.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 39648920</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2023-01-12 10:47:22</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Здравствуйте! Хотел поделиться,о компании PO</span><span class="js-review-text-next"> TRADE,своим отзывом,во первых-мне устраивает валютные пары где есть доходность 92%,во вторых-быстро решают любые вопросы,если возникают,в третих-это быстрый вывод,я доволен этой компании,добавлю на мой взгляд эта самая лучшая компания,где реально можно зарабатывать,если думать головой.Спасибо,что она есть,и надеюсь в новых развитии в будущем!!! Спасибо! Я очень доволен.Спасибо! Что Вы есть.</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Roman F.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 37319297</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-30 21:42:14</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Отличная платформа, честный брокер, с выплатами</span><span class="js-review-text-next"> 100%, и большим выбором вариантов пополнения депозита!!!! Советую всем.</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Maksim O.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 33272305</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-28 11:14:13</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Реально самая удобная торговая площадка. Много</span><span class="js-review-text-next"> подарков и дополнительных бонусов, которые очень помогают в торговле. Надеюсь, что и с выводом проблем не будет. Пока только лучшие впечатления от брокера</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ua">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Vadim P.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 38629064</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-27 21:33:45</div>
                                            </div>
                                            <div class="review-item__text">
                                                Классная платформа. Выводы моментальные. </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Ivan G.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 37666366</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-26 19:00:38</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Довольно не плохая платформа!!!Перед тем как </span><span class="js-review-text-next"> сюда зайти перепробовал около 7 разных платформ,сдесь удобно делать анализ,удобно росположены доп.инструменты,да и в целом как для меня оч удобно))+ бонусы))которые не так уж и долго себя окупают)))Вывод занял около 20 минут))выводил на криптокошелек!!хотя как было указано что до нескольких дней нужно ждать ,я был очень удивлен быстротой перевода с учетом того что в празничный день выводил средства))</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_pl">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Ihor M.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 38600446</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-26 10:15:30</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Брокер которому доверяю! Удобная платформа и</span><span class="js-review-text-next"> нструменты, быстрое пополнение и вывод средст и в добавок ко всему турниры и всякие достижения!</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Anton T.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 4279320</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-25 02:14:29</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Самый честный брокер. Проверенный временем,</span><span class="js-review-text-next"> торгую уже два года, никаких проблем не было. Много разных активов, замечательный интерфейс, множество различных индикаторов. Быстрый вывод денежных средств, система наград и поощрений. Сделки от 5 секунд, самый красивый график. За достижения дают кристаллы , их можно потратить на безрисковые сделки. Всем доволен, мне все нравится.</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Evgeny S.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 26699780</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-23 16:10:58</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Лучший брокер в данное время . Учитесь</span><span class="js-review-text-next"> добивайтесь успеха и будьте уверены в себе</span><span class="js-review-dots">...</span></br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Ruslan K.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 33362335</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-14 11:18:09</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Удобный интерфейс, быстрые выплаты, служба</span><span class="js-review-text-next"> поддержки готова помочь</span><span class="js-review-dots">...</span></br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Egor L.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 34518583</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-06 14:58:43</div>
                                            </div>
                                            <div class="review-item__text">
                                                Лучшая платформа!!!! </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Eltun I.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 29925464</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item__top">
                                                <div class="review-item__stars" style="cursor: default; user-select: none; display: block; white-space: nowrap;">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
                                                <div class="review-item__date">2022-12-06 13:45:38</div>
                                            </div>
                                            <div class="review-item__text">

                                                <span class="js-review-text-prev">Крутая платформа. Всё просто и доступно. Есть</span><span class="js-review-text-next"> демо счет, где можно потренировать разные стратегии. Есть социальная торговля, где можно копировать профессионалов. А самое главное , что платформа выводит деньги. Рекомендую!</span>
                                                <span class="js-review-dots">...</span>
                                                </br>
                                                <a href="#" class="review-item__more-btn js-show-full-review-btn">Показать полный отзыв</a>
                                                <a href="#" class="review-item__more-btn js-hide-full-review-btn">Скрыть полный отзыв</a>

                                            </div>
                                            <div class="review-item__footer">
                                                <div class="review-item__flag languages__flag flag_r_50x50 flag_r_50x50_ru">
                                                </div>
                                                <div class="review-item__user-data">
                                                    <div class="review-item__fio">

                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">
                                                    Mihail R.                                                </a>
                                                    </div>
                                                    <div class="review-item__uid">
                                                        <a href="ru/login.html" class="js-link-with-get-param" target="_blank">UID 37664842</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider__arrows">
                                    <a class="slider__arrow arrow arrow-left"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1L2 11L12 21" stroke="#96AEC1" stroke-width="2" class="slider-arrow-stroke"/>
</svg>
</a>
                                    <a class="slider__arrow arrow arrow-right"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L11 11L1 21" stroke="#0099FA" stroke-width="2" class="slider-arrow-stroke"/>
</svg>
</a>
                                </div>
                            </div>
                            <div class="slider__right">
                                <div class="slider__footer slider-footer">
                                    <a href="ru/reviews/index.html" class="slider-footer__link-all slider__link-all">Все отзывы</a>
                                    <p class="slider-footer__text">
                                        Ваши отзывы помогают нам улучшать обслуживание и обеспечивать комфортную торговлю, разработанную специально под ваши нужды </p>
                                    <a href="ru/reviews/index.html" class="btn btn_light-blue slider-footer__btn">
                            Оставить отзыв                        </a>
                                    <div class="slider__info-text slider-footer__desc">
                                        отзывы публикуются без изменений исходного текста </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
        <!-- <section class="section mt100pm">
    <div class="container">
        <div class="content">
            
<div class="payment-methods">
    <ul class="payment-methods-list">
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/master_visa_maestro.webp 1x, images/payments/logo-white/master_visa_maestro@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/master_visa_maestro.png 1x,images/payments/logo-white/master_visa_maestro@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/master_visa_maestro.png"
                         data-src="images/payments/logo-white/master_visa_maestro.png"
                         data-srcset="images/payments/logo-white/master_visa_maestro.png 1x, images/payments/logo-white/master_visa_maestro@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/vload.webp 1x, images/payments/logo-white/vload@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/vload.png 1x,images/payments/logo-white/vload@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/vload.png"
                         data-src="images/payments/logo-white/vload.png"
                         data-srcset="images/payments/logo-white/vload.png 1x, images/payments/logo-white/vload@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/wm.webp 1x, images/payments/logo-white/wm@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/wm.png 1x,images/payments/logo-white/wm@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/wm.png"
                         data-src="images/payments/logo-white/wm.png"
                         data-srcset="images/payments/logo-white/wm.png 1x, images/payments/logo-white/wm@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/btc.webp 1x, images/payments/logo-white/btc@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/btc.png 1x,images/payments/logo-white/btc@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/btc.png"
                         data-src="images/payments/logo-white/btc.png"
                         data-srcset="images/payments/logo-white/btc.png 1x, images/payments/logo-white/btc@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/ltc.webp 1x, images/payments/logo-white/ltc@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/ltc.png 1x,images/payments/logo-white/ltc@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/ltc.png"
                         data-src="images/payments/logo-white/ltc.png"
                         data-srcset="images/payments/logo-white/ltc.png 1x, images/payments/logo-white/ltc@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/ethereum.webp 1x, images/payments/logo-white/ethereum@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/ethereum.png 1x,images/payments/logo-white/ethereum@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/ethereum.png"
                         data-src="images/payments/logo-white/ethereum.png"
                         data-srcset="images/payments/logo-white/ethereum.png 1x, images/payments/logo-white/ethereum@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/stellar.webp 1x, images/payments/logo-white/stellar@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/stellar.png 1x,images/payments/logo-white/stellar@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/stellar.png"
                         data-src="images/payments/logo-white/stellar.png"
                         data-srcset="images/payments/logo-white/stellar.png 1x, images/payments/logo-white/stellar@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/usdt.webp 1x, images/payments/logo-white/usdt@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/usdt.png 1x,images/payments/logo-white/usdt@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/usdt.png"
                         data-src="images/payments/logo-white/usdt.png"
                         data-srcset="images/payments/logo-white/usdt.png 1x, images/payments/logo-white/usdt@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/ripple.webp 1x, images/payments/logo-white/ripple@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/ripple.png 1x,images/payments/logo-white/ripple@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/ripple.png"
                         data-src="images/payments/logo-white/ripple.png"
                         data-srcset="images/payments/logo-white/ripple.png 1x, images/payments/logo-white/ripple@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/jeton.webp 1x, images/payments/logo-white/jeton@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/jeton.png 1x,images/payments/logo-white/jeton@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/jeton.png"
                         data-src="images/payments/logo-white/jeton.png"
                         data-srcset="images/payments/logo-white/jeton.png 1x, images/payments/logo-white/jeton@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/advcash.webp 1x, images/payments/logo-white/advcash@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/advcash.png 1x,images/payments/logo-white/advcash@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/advcash.png"
                         data-src="images/payments/logo-white/advcash.png"
                         data-srcset="images/payments/logo-white/advcash.png 1x, images/payments/logo-white/advcash@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                    <li class="payment-methods-list__item">
                <picture class="payment-methods-list__img">
                    <source srcset="images/payments/logo-white/pm.webp 1x, images/payments/logo-white/pm@2x.webp 2x" type="image/webp">
                    <source srcset="images/payments/logo-white/pm.png 1x,images/payments/logo-white/pm@2x.png 2x" type="image/png">
                    <img src="images/payments/logo-white/pm.png"
                         data-src="images/payments/logo-white/pm.png"
                         data-srcset="images/payments/logo-white/pm.png 1x, images/payments/logo-white/pm@2x.png 2x"
                         alt="" loading="lazy">
                </picture>
            </li>
                <li class="payment-methods-list__item payment-methods-list__item_last">
            <a href="ru/payment-methods/index.html" class="payment-methods-list__link">Подробнее</a>
        </li>
            </ul>
</div>
        </div>
    </div>
</section> -->

        <!-- <section class="section risk-disclosure">
    <div class="container">
        <div class="content risk-disclosure__in">
            <p class="risk-disclosure__title">Предупреждение о рисках:</p>
            <p>Торговля на финансовых рынках сопряжена с риском. Forex и другие финансовые контракты являются сложными финансовыми инструментами, используемыми для маржинальной торговли. Торговля имеет высокий уровень риска, так как кредитное плечо может работать как в Вашу пользу, так и против Вас. Вследствие этого торговля подходит не всем инвесторам из-за высокого риска потери инвестированного капитала. Вы не должны рисковать большими средствами, чем Вы готовы потерять. Перед началом торговли Вы должны убедиться, что Вы понимаете все риски и учитываете их в совокупности с уровнем Вашего опыта при постановке Ваших инвестиционных целей.</p>
            <p class="risk-disclosure__link-title">
                <a href="ru/riskdisclosure/index.html" target="_blank" class="risk-disclosure__link link link_light">
                    Предупреждение о рисках                </a>
            </p>
        </div>
    </div>
</section> -->

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
            <div class="footer__info">
              <p>
                Транзакции, предлагаемые на этом сайте, могут выполняться только полностью
                дееспособными взрослыми. Прежде чем принять решение об инициировании, вам следует
                ознакомиться с Соглашением об оказании услуг и Информацией о раскрытии рисков.
                Услуги на сайте предоставляются и регулируются Министерство цифровых технологий
                Республики Узбекистан
              </p>
            </div>

            <div class="socket">
              <a href="ru/index.html" class="socket__logo logo">
                <img src="images/3.png" alt="" />
              </a>
              <div class="socket__copyright">
                <div class="plus-21">
                  <p>
                    Copyright &copy;IPO Национальных Компаний Узбекистана <br />
                    2006-2023. Ташкент, 100000, проспект Амира Темура, 8.
                  </p>
                </div>
              </div>
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

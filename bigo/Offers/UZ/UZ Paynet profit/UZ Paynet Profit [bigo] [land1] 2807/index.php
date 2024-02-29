<!DOCTYPE html>
<html lang="ru">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>Paynet Profit</title>
  <link rel="icon" type="image/png" href="Favicon.png" />
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/form.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/intlTelInput.min.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/timer.css" />
  <link rel="stylesheet" href="css/modal.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

  <!-- JS adapter -->
  <script type="application/javascript">
        function getCookie(name) {
            var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return v ? v[2] : null;
        }

        function setCookie(name, value, days) {
            var d = new Date;
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
            document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
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
                return params.get('_subid')
            }
            if (params.get('subid')) {
                return params.get('subid')
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
                return params.get('_token')
            }
            if (params.get('token')) {
                return params.get('token')
            }
            if (getCookie('token')) {
                return getCookie('token');
            }
            return null;
        }

        if (typeof URLSearchParams === 'function') {
            document.addEventListener("DOMContentLoaded", function (event) {
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
            })
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

<style>
  .count-wrap {
    display: flex;
    align-items: center;
  }

  .dateBox {
    font-size: 12px;
  }

  .heroRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 999999;
    background: white;
    width: 100%;
    height: 60px;
    background: #fff;
  }

  #heroSection .container {
    margin-top: 75px !important;
  }

  .heroHeadline {
    margin-top: 0;
    margin-bottom: 15px;
  }

  input[type='range'] {
    writing-mode: horizontal-tb !important;
  }

  .t415__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .topBarCTA {
    background: #000;
    border-radius: 20px;
  }

  .dateBox {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 14px;
  }

  .heroRow {
    padding-left: 10px;
    padding-right: 10px;
  }

  .countdownTime {
    font-size: 15px;
  }

  .count-flex {
    display: flex;
  }

  .fa-warning:before,
  .fa-exclamation-triangle:before {
    font-size: 13px !important;
  }

  .section-form {
    margin-top: 15px;
    background-image: url(images/2.png);
    background-position: center;
    background-color: #dafbed;
    background-size: cover;
  }
</style>

<body data-target="#mainNavbar" class="" style="position: relative">
  <div class="heroRow">
    <img class="heroLogo" alt="Paynet Profit" src="./images/logo Paynet.png" />
    <div class="topBarCTA">
      <div class="dateBox">
        <div class="count-wrap">
          <span class="countdownTime" id="register-count2">15</span>
          <div class="count-flex">
            <i class="fa fa-arrow-left"></i>
            <span><span class="fa fa-exclamation-triangle"></span></span>
          </div>
        </div>
        Мест осталось
      </div>
    </div>
  </div>
  <section id="heroSection">
    <div class="container">
      <h1 class="heroHeadline">
        Paynet Profit - зарабатывай от $2250 на своих инвестициях ежемесячно
      </h1>
      <div class="row hero-block">
        <div id="block" style="
              text-align: center;
              color: #fff;
              margin: 10px 0;
              font-size: 18px;
              line-height: 20px;
              background: #21cc6d;
              font-weight: bold;
              border-radius: 20px;
              padding-left: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 auto;
              margin-bottom: 20px;
              max-width: 350px;
              padding: 5px;
            ">
          Посмотрите это видео, <br />
          чтобы чтобы узнать о нас больше!
        </div>

        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 hero-video">
          <div class="videoOuterWrap">
            <div class="video-container">
              <video controls poster="video/poster.png">
                <source src="video/video.mp4" type="video/mp4" />
              </video>

              <style>
                .video-container {
                  position: relative;
                  width: 100%;
                  padding-bottom: 56.25%;
                  /* 16:9 соотношение сторон */
                  overflow: hidden;
                }

                .video-container video {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  /* border-radius: 20px; */
                }
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-form">
    <div class="container">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 hero-form">
        <div class="contactForm top_form">
          <form method="POST" id="leadform" class="register-form contact_form content_inner flex">
            <h3>
              Оставьте ваш актуальный номер телефона, на который вы получите доступ к платформе
            </h3>
            <div class="input_group input_name shadow">
              <input type="text" placeholder="Имя" class="form-control required form-input" name="first_name"
                id="first_name" required autocomplete="off" />
            </div>
            <div class="input_group input_last_name shadow">
              <input type="text" placeholder="Фамилия" class="form-control required form-input" name="last_name"
                id="last_name" required autocomplete="off" />
            </div>
            <div class="input_group input_email shadow">
              <input type="email" placeholder="Email" class="form-control required" name="email" id="email" required
                autocomplete="off" />
            </div>
            <div class="input_group intl-tel-input shadow">
              <input type="tel" id="phone1" name="phone1" placeholder="" autocomplete="off" required=""
                class="form-control" />
              <input type="hidden" id="realPhone" name="realPhone" class="hidden-phone" value="" />
              <input type="hidden" id="country" name="country" value="" />
            </div>
            <div class="input_group">
              <button type="submit" class="btn btn-submit btn-get-robot text-uppercase redBtn">
                <span>Начать зарабатывать</span>
              </button>
            </div>
          </form>

          <style>
            #leadform h3,
            .form-title {
              font-size: 18px;
              margin: 15px 0;
              color: #0dd16f;
            }

            input.form-control {
              width: 100%;
              margin-bottom: 5px;
              padding: 10px;
              border-radius: 6px;
              border: 1px solid gray;
            }

            button.redBtn {
              text-align: center;
              width: 100%;
              display: block;
              background: #0dd16f;
              color: #000;
              border: 0;
              padding: 15px;
              border-radius: 7px;
              font-weight: 700;
              cursor: pointer;
              text-transform: uppercase;
            }
          </style>
        </div>
      </div>
    </div>
  </section>

  <section id="heroLogos">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="flex-row">
            <img src="images/gerb.png" alt="" class="img-responsive" />
            <img src="images/Visa.png" alt="" class="img-responsive" style="height: 25px" />
            <img src="images/MasterCard.png" alt="" class="img-responsive" />
            <img src="images/ucell.png" alt="" class="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <style>
    .fond__inner {
      display: flex;
      flex-direction: column;
    }

    .fond__body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .fond__left img {
      width: 300px;
      margin: 10px auto;
    }

    .fond__left {
      /* margin-right: 100px; */
      margin-bottom: 40px;
    }

    a.zoomBtn {
      text-align: center;
      width: fit-content;
      margin: 15px auto;
      display: block;
      background: #fff;
      color: #23527c;
      border: 0;
      padding: 15px;
      border-radius: 7px;
      font-weight: 700;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration: none;
    }

    .swiper-dots {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .calculator-section {
      padding-bottom: 50px;
    }

    .calc__container {
      position: relative;
    }

    .calc__content {
      position: relative;
      max-width: 382px;
      width: 100%;
      margin: 0 auto;
      height: 754px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      z-index: 5;
      padding: 10px;
    }

    .calc-content__header {
      border-radius: 30px 30px 0 0;
      padding: 116px 25px 25px;
      background: #dbdbdb;
    }

    .c-content-header__value {
      font-weight: 700;
      font-size: 18px;
      color: #0dd16f;
    }

    .c-content-header__title {
      margin-bottom: 50px;
      font-weight: 500;
      font-size: 20px;
    }

    .c-content-body__title {
      font-size: 22px;
    }

    .c-content-header__description {
      font-size: 16px;
    }

    .c-content-body-row__title,
    .c-content-body-row__value {
      font-size: 15px;
    }

    .c-content-header__input {
      position: relative;
      margin-bottom: 25px;
      z-index: 1;
    }

    .slider-input-range {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      width: 100%;
      height: 20px;
      -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
      border-radius: 5px;
      cursor: pointer;
      outline: 0;
    }

    .slider-input-range::before {
      position: absolute;
      content: '';
      display: block;
      height: 100%;
      background: #0dd16f;
      -webkit-box-shadow: inherit;
      box-shadow: inherit;
      border-radius: inherit;
      width: var(--range);
    }

    .webp .calc__content::after {
      background: url(images/iphone.webp) no-repeat;
      background-size: 100% 100%;
    }

    .calc__content::after {
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      background: url(images/iphone.webp) no-repeat;
      background-size: 100% 100%;
      z-index: 0;
    }

    .swiper-dots .swiper-pagination-bullet .swiper-pagination-bullet-active {
      color: black !important;
    }

    .c-content-header__input {
      position: relative;
      margin-bottom: 25px;
      z-index: 1;
    }

    @media only screen and (max-width: 768px) {
      .calc__content {
        margin-bottom: 25px;
      }
    }

    @media only screen and (max-width: 576px) {
      .calc__content {
        height: 660px;
      }
    }

    @media only screen and (max-width: 576px) {
      .slider-input-range {
        height: 12px;
      }
    }

    @media only screen and (max-width: 576px) {
      .calc-content__header {
        padding: 70px 25px 20px;
      }
    }

    .swiper-pagination-bullet .swiper-pagination-bullet-active {
      background: #0dd16f !important;
    }
  </style>

  <section id="cryptoMedia">
    <div class="container">
      <h1 class="sectionHeadline text-center" style="margin: 10px auto 20px">Лицензия</h1>
      <p style="text-align: center; font-size: 1.1em; color: #000">
        Министерство финансов Узбекистана № 2СФ 13980 - 02000 От 15.04.2019 Профессиональной и
        биржевой деятельности по ценным бумагам ПАО “Государственная платформа Paynet Profit”
      </p>
      <div class="fond__inner">
        <div class="fond__body">
          <div class="fond__left">
            <img src="images/PaynetLic.png" alt="License" />
            <!-- <a href="images/licence.jpg" class="fancybox btn btn-submit btn-get-robot zoomBtn">
                   <span>Увеличить фото</span>
                </a> -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="userReviews">
    <div class="container">
      <h1 class="sectionHeadline text-center">Отзывы</h1>
      <div class="reviews-swiper swiper">
        <div class="swiper-wrapper">
          <div class="col-md-4 col-sm-6 col-xs-12 swiper-slide">
            <div class="user-review">
              <div class="user-profile">
                <div class="user-picture">
                  <img src="images/aynura.jpg" alt="" />
                </div>
                <h2 class="user-name">Айнура Каримова</h2>
              </div>
              <div class="user-rating">
                <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
              </div>
              <div class="user-quote">
                Я с удовольствием поделюсь своим опытом использования <b>Paynet Profit</b>! Это
                было одно из лучших решений в моей финансовой жизни. Здесь я нашла простой и
                интуитивно понятный интерфейс, что особенно важно для новичков.
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 swiper-slide">
            <div class="user-review">
              <div class="user-profile">
                <div class="user-picture">
                  <img src="images/Madindra.jpg" alt="" />
                </div>
                <h2 class="user-name">Мадина Асхатовна</h2>
              </div>
              <div class="user-rating">
                <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
              </div>
              <div class="user-quote">
                Я просто в восторге от этой инвестиционной платформы! Она дала мне возможность
                войти в мир инвестирования без огромных знаний и опыта. Благодаря
                <b>Paynet Profit</b> я быстро освоилась и начала инвестировать. Теперь я чувствую,
                что мои финансы работают на меня.
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 swiper-slide">
            <div class="user-review">
              <div class="user-profile">
                <div class="user-picture">
                  <img src="images/ashat.jpg" alt="" />
                </div>
                <h2 class="user-name">Асхат Салькин</h2>
              </div>
              <div class="user-rating">
                <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
              </div>
              <div class="user-quote">
                Как финансовый консультант, я всегда ищу надежные и эффективные инвестиционные
                инструменты для своих клиентов. И я нашел идеальный вариант на этой платформе! Мне
                очень нравится, как она комбинирует передовые технологии с профессиональным
                подходом к обслуживанию клиентов.
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-dots"></div>
      </div>
    </div>
  </section>

  <section class="calculator-section">
    <div class="container">
      <div class="calc__container">
        <div class="calc__content calc-content">
          <div class="calc-content__header c-content-header">
            <div class="c-content-header__title">
              Стартовый капитал: <span class="c-content-header__value">$ 4775</span>
            </div>
            <input class="c-content-header__input slider-input-range" type="range" min="150" max="10000" value="150" />
            <div class="c-content-header__description">
              Выберите в слайдере сумму инвестиции, что бы моментально посчитать будущую прибыль
            </div>
          </div>
          <div class="calc-content__body c-content-body">
            <div class="c-content-body__title">Предполагаемый доход:</div>
            <div class="c-content-body__row c-content-body-row">
              <div class="c-content-body-row__title">Сколько я заработаю за неделю:</div>
              <div class="c-content-body-row__value">$ 7162</div>
            </div>
            <div class="c-content-body__row c-content-body-row">
              <div class="c-content-body-row__title">Сколько я заработаю за месяц:</div>
              <div class="c-content-body-row__value">$ 71625</div>
            </div>
            <div class="c-content-body__row c-content-body-row">
              <div class="c-content-body-row__title">Сколько я заработаю за год:</div>
              <div class="c-content-body-row__value">$ 811750</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="polygon">
    <div class="t-container index-z">
      <div class="t-width t-width_12 t415__mainblock">
        <div class="t-cover__wrapper t-valign_middle">
          <div class="t415__content" data-hook-content="covercontent">
            <img class="" data-tu-max-width="800" data-tu-max-height="800" style="max-width: 250px; margin-bottom: 20px"
              src="./images/logo Paynet.png" imgfield="img2" data-hook-clogo="coverlogo" />
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
                <span class="t415__minutes t-title t-title_lg t415__number" id="minutes">45</span>
                <div class="t415__text t-descr t-descr_xxs">Минут</div>
              </div>
              <div class="t415__col">
                <span class="t415__seconds t-title t-title_lg t415__number" id="seconds">1</span>
                <div class="t415__text t-descr t-descr_xxs">Секунд</div>
              </div>
            </div>

            <style>
              .form-wrap {
                margin-top: 15px;
              }
            </style>
            <div class="hero-form">
              <div class="contactForm top_form form-wrap">
                <form method="POST" id="leadformModal" class="register-form contact_form content_inner flex">
                  <h3 class="form-title">
                    Зарегистрируйтесь и наш финансовый эксперт свяжется с Вами в ближайшее время!
                  </h3>
                  <div class="input_group input_name shadow">
                    <input type="text" placeholder="Имя" class="form-control required form-input" name="first_name"
                      id="first_name" required autocomplete="off" />
                  </div>
                  <div class="input_group input_last_name shadow">
                    <input type="text" placeholder="Фамилия" class="form-control required form-input" name="last_name"
                      id="last_name" required autocomplete="off" />
                  </div>
                  <div class="input_group input_email shadow">
                    <input type="email" placeholder="Email" class="form-control required" name="email" id="email"
                      required autocomplete="off" />
                  </div>
                  <div class="input_group intl-tel-input shadow">
                    <input type="tel" id="phoneModal" name="phoneModal" placeholder="" autocomplete="off" required=""
                      class="form-control" />
                    <input type="hidden" id="realPhone" name="realPhone" class="hidden-phone" value="" />
                    <input type="hidden" id="country" name="country" value="" />
                  </div>
                  <div class="input_group">
                    <button type="submit" class="btn btn-submit btn-get-robot text-uppercase redBtn">
                      <span>Оставить заявку</span>
                    </button>
                  </div>
                </form>

                <style>
                  .form-title {
                    font-size: 18px;
                    margin: 15px 0;
                  }

                  input.form-control {
                    width: 100%;
                    margin-bottom: 5px;
                    padding: 10px;
                    border-radius: 6px;
                    border: 1px solid gray;
                  }

                  button.redBtn {
                    text-align: center;
                    width: 100%;
                    display: block;
                    background: #097cff;
                    color: #000;
                    border: 0;
                    padding: 15px;
                    border-radius: 7px;
                    font-weight: 700;
                    cursor: pointer;
                    text-transform: uppercase;
                  }

                  #heroSection {
                    border-radius: 0% 100% 40% 40%/0% 0% 10% 10%;
                  }
                </style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <img src="images/logo Paynet.png" alt="" />
      Copyright 2023 Paynet Profit
    </div>
  </footer>

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

  <script src="js/jquery.min.js"></script>
  <script src="js/timer.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/checkCookiePhone.js"></script>
  <script src="js/jquery.validate.js"></script>
  <script src="js/intlTelInput.min.js"></script>
  <script src="js/jquery.maskedinput.js"></script>
  <script src="js/modal.js"></script>
  <script src="js/main.js"></script>
  <script src="js/submitForm.js"></script>
  <script src="js/time-table.js"></script>
  <script src="js/utm.js"></script>
  <!-- <script src="js/scroll.js"></script> -->
  <script src="js/app.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
  <script>
    var swiper = new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: '.swiper-dots',
        clickable: true,
      },
    });
  </script>
</body>

</html>
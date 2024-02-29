<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <title>Обучающий курс для трейдеров «Перезагрузка» — торгуй, как топовый трейдер</title>
    <meta
      name="description"
      content="Курс обучения трейдингу. Перезагрузка от Александра Герчика, самого безубыточного трейдера в секторе day trading. Переходи и забирай курс!"
    />

    <link rel="icon" type="image/png" href="images/favicon.png" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="css/intlTelInput.min.css" />
    <link rel="stylesheet" href="css/modal.css" />
    <script src="js/jquery.min.js"></script>

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
  <body>
    <header class="main-header">
      <div class="header-flex">
        <div class="logo-wrp">
          <a class="logo-link" href="#form_header">
            <img class="logo-src" src="fonts/logo.svg" alt="logo" />
          </a>
        </div>

        <nav class="page-nav">
          <ul class="nav-list">
            <li class="nav-list__item">
              <a class="nav-list__link" href="#about">О Курсе</a>
            </li>
            <li class="nav-list__item">
              <a class="nav-list__link" href="#problem-solving">Решение Проблем</a>
            </li>
            <li class="nav-list__item">
              <a class="nav-list__link" href="#format">Формат Курса</a>
            </li>
            <li class="nav-list__item">
              <a class="nav-list__link" href="#price">Цена</a>
            </li>
          </ul>
        </nav>

        <button class="hamburger hamburger--squeeze" type="button">
          <span class="hamburger-box" id="hamburger">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <div class="overlay-wrp">
          <div class="overlay-nav sidenav" id="mySidenav" >
            <div class="overlay-flex">
              <div class="overlay-flex__left"></div>
              <div class="overlay-flex__right">
                <ul class="overlay-nav__list">
                  <li class="overlay-nav__item">
                    <a class="overlay-nav__link" href="#about">О Курсе</a>
                  </li>
                  <li class="overlay-nav__item">
                    <a class="overlay-nav__link" href="#problem-solving">Решение Проблем</a>
                  </li>
                  <li class="overlay-nav__item">
                    <a class="overlay-nav__link" href="#format">Формат Курса</a>
                  </li>
                  <li class="overlay-nav__item">
                    <a class="overlay-nav__link" href="#price">Цена</a>
                  </li>
                </ul>
                <div class="overlay-flex__text">
                  <div class="overlay-flex__text-quote">
                    <img class="overlay-flex__text-quoteImage" src="fonts/quotes.svg" alt />
                  </div>
                  <div class="overlay-flex__text-para">
                    Теперь мои секреты эффективной торговли стали доступны вам!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main id="main">
      <div id="p_prldr">
        <div class="contpre">
          <span class="svg_anm"></span><br />Подождите<br /><small>идет загрузка</small>
        </div>
      </div>

      <div class="main-first">
        <div class="container-main">
          <div class="first-text__wrp">
            <div class="first-text__title">
              <b>Как перейти</b> от хаотичной торговли <br /><b>к</b>
              <div class="first-text__title-list">
                <span class="first-text__title-item">прибыльному</span>
                <span class="first-text__title-item">выгодному</span>
              </div>
              <br /><b>трейдингу?</b>
            </div>
            <div class="first-text__para">
              Пройдите курс <b>«Перезагрузка»</b>, основанный на опыте<br />
              <b>Александра Герчика!</b>
            </div>
          </div>

          <div class="first-btn__wrp">
            <a href="#form_header"
              ><button class="first-btn" type="button">Получить курс</button></a
            >
          </div>

          <div class="first-photo__wrp">
            <picture>
              <source
                srcset="images/ger-mob.png"
                media="(min-width: 320px) and (max-width: 699px)"
              />
              <source
                srcset="images/ger-desk.png"
                media="(min-width: 700px) and (max-width: 1139px)"
              />
              <source srcset="images/ger-desk-large.png" media="(min-width: 1140px)" />
              <img src="images/ger-desk.png" alt />
            </picture>
          </div>

          <div class="first-background__wrp">
            <div class="first-background__left"></div>
            <div class="first-background__middle">
              <div class="first-background__middle-text">
                <div class="first-background__middle-quote">
                  <img class="first-background__middle-quoteImage" src="fonts/quotes.svg" alt />
                </div>
                <div class="first-background__middle-para">
                  Теперь мои секреты эффективной торговли стали доступны вам!
                </div>
              </div>
            </div>
            <div class="first-background__right"></div>
          </div>
        </div>
        <div class="first-marquee__wrp">
          <h2 class="first-marquee"><span>Перезагрузка</span></h2>
        </div>
      </div>

      <div class="main-second">
        <div class="second-flex__wrp">
          <div class="second-flex__img-wrp">
            <picture>
              <source
                srcset="images/second-mob.png"
                media="(min-width: 320px) and (max-width: 699px)"
              />
              <source srcset="images/second-desk.jpg" media="(min-width: 700px)" />
              <img src="images/second-mob.png" alt />
            </picture>
            <div class="second-flex__square"></div>
          </div>

          <div class="second-flex__text">
            Взгляните на рынок глазами трейдера с Уолл-стрит и
            <span> начните зарабатывать, как профессионал! </span>
          </div>
        </div>
        <div class="second-text__wrp">
          <div class="second-text__letter-wrp">
            <picture>
              <source
                srcset="images/letterA-mob.png"
                media="(min-width: 320px) and (max-width: 699px)"
              />
              <source srcset="images/letterA-desk.png" media="(min-width: 700px)" />
              <img src="images/letterA-mob.png" alt />
            </picture>
          </div>
          <div class="second-text__paras">
            <div class="second-text__para1">
              <b> Александр Герчик </b> — трейдер, который заработал миллионы долларов на финансовом
              рынке.
            </div>
            <div class="second-text__para2">
              В 2006 году он был признан самым безопасным дейтрейдером по версии проекта
              <b> Mojo Wall Street Warriors </b>
            </div>
          </div>
        </div>
      </div>

      <div class="main-third" id="about">
        <div class="third-marquee__wrp">
          <h3 class="third-marquee">
            <span>Все задания в одном месте         Готовая стратегия         Без воды</span>
          </h3>
        </div>

        <div class="third-text__wrp">
          <div class="third-text__letter-wrp">
            <picture>
              <source
                srcset="images/letterK-mob.png"
                media="(min-width: 320px) and (max-width: 699px)"
              />
              <source srcset="images/letterK-desk.png" media="(min-width: 700px)" />
              <img src="images/letterK-mob.png" alt />
            </picture>
          </div>
          <div class="third-text__para-wrp">
            <div class="third-text__para"><b>Курс «Перезагрузка» </b>— это</div>
          </div>
        </div>

        <div class="container">
          <!-- Container for all sliders, and pagination -->
          <div class="sliders-container">
            <!-- Here will be injected sliders for images, numbers, titles and links -->

            <!-- Simple pagination for the slider -->
            <ul class="pagination">
              <li class="pagination__item"><a class="pagination__button"></a></li>
              <li class="pagination__item"><a class="pagination__button"></a></li>
              <li class="pagination__item"><a class="pagination__button"></a></li>
              <li class="pagination__item"><a class="pagination__button"></a></li>
              <li class="pagination__item"><a class="pagination__button"></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main-fourth">
        <div class="fourth-image__wrp">
          <picture>
            <source
              srcset="images/steps-mob.png"
              media="(min-width: 320px) and (max-width: 699px)"
            />
            <source srcset="fonts/steps.svg" media="(min-width: 700px)" />
            <img src="fonts/steps.svg" alt />
          </picture>
        </div>
        <div class="fourth-text__wrp">
          <div class="container-main">
            <div class="fourth-text__heading">С «Перезагрузкой» вы научитесь:</div>
            <ul class="fourth-text__list">
              <li class="fourth-text__list-item">
                <img class="fourth-text__list-icon" src="fonts/icon.svg" alt />
                <span>Зарабатывать на трендах, разворотах, гэпах и ложных пробоях.</span>
              </li>
              <li class="fourth-text__list-item">
                <img class="fourth-text__list-icon" src="fonts/icon.svg" alt />
                <span>Находить прибыльные точки входа.</span>
              </li>
              <li class="fourth-text__list-item">
                <img class="fourth-text__list-icon" src="fonts/icon.svg" alt />
                <span>Грамотно ставить стоп-лосс.</span>
              </li>
              <li class="fourth-text__list-item">
                <img class="fourth-text__list-icon" src="fonts/icon.svg" alt />
                <span>Добавляться в профитные позиции.</span>
              </li>
            </ul>
            <div class="fourth-text__para">И все это на примерах от топового трейдера!</div>
            <div class="fourth-text__btn-wrp">
              <a href="#form_header"
                ><button class="first-btn" type="button">Получить курс</button></a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="main-fifth" id="problem-solving">
        <div class="fifth-text__wrp">
          <div class="fifth-text__letter-wrp">
            <picture>
              <source
                srcset="fonts/letterT-mob.svg"
                media="(min-width: 320px) and (max-width: 699px)"
              />
              <source srcset="images/letterT-desk.png" media="(min-width: 700px)" />
              <img src="images/letterT-desk.png" alt />
            </picture>
          </div>
          <div class="fifth-text">
            <b>Топ-7</b> проблем, которые <b>решает</b> <span>«Перезагрузка»</span>:
          </div>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <span>1.</span>
              <div class="swiper-slide__text"><i>Много</i> слитых депозитов</div>
            </div>
            <div class="swiper-slide">
              <span>2.</span>
              <div class="swiper-slide__text">
                Путаница в голове от книг и пройденных курсов по трейдингу
              </div>
            </div>
            <div class="swiper-slide">
              <span>3.</span>
              <div class="swiper-slide__text">Ошибки при открытии и закрытии сделок</div>
            </div>
            <div class="swiper-slide">
              <span>4.</span>
              <div class="swiper-slide__text">В торговле больше потерь, чем прибыли</div>
            </div>
            <div class="swiper-slide">
              <span>5.</span>
              <div class="swiper-slide__text">Неправильное управление рисками</div>
            </div>
            <div class="swiper-slide">
              <span>6.</span>
              <div class="swiper-slide__text">Потеря возможностей для прибыльных сделок</div>
            </div>
            <div class="swiper-slide">
              <span>7.</span>
              <div class="swiper-slide__text">Доход от трейдинга недостаточно высокий</div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <div class="fifth-slider__wrapper">
          <div class="fifth-slider__slide">
            <span>1.</span>
            <div class="fifth-slider__slide-text">Много слитых депозитов</div>
          </div>
          <div class="fifth-slider__slide">
            <span>2.</span>
            <div class="fifth-slider__slide-text">
              Путаница в голове от книг и пройденных курсов по трейдингу
            </div>
          </div>
          <div class="fifth-slider__slide">
            <span>3.</span>
            <div class="fifth-slider__slide-text">Ошибки при открытии и закрытии сделок</div>
          </div>
          <div class="fifth-slider__slide">
            <span>4.</span>
            <div class="fifth-slider__slide-text">В торговле больше потерь, чем прибыли</div>
          </div>
          <div class="fifth-slider__slide">
            <span>5.</span>
            <div class="fifth-slider__slide-text">Неправильное управление рисками</div>
          </div>
          <div class="fifth-slider__slide">
            <span>6.</span>
            <div class="fifth-slider__slide-text">Потеря возможностей для прибыльных сделок</div>
          </div>
          <div class="fifth-slider__slide">
            <span>7.</span>
            <div class="fifth-slider__slide-text">Доход от трейдинга недостаточно высокий</div>
          </div>
        </div>

        <div class="fifth-text__btn-wrp">
          <a href="#form_header"><button class="first-btn" type="button">Получить курс</button></a>
        </div>
      </div>

      <div class="main-sixth" id="format">
        <div class="sixth-background__wrp">
          <div class="sixth-text__wrp">
            <div class="sixth-text__letter-wrp">
              <picture>
                <source
                  srcset="images/letterF-mob.png"
                  media="(min-width: 320px) and (max-width: 699px)"
                />
                <source srcset="images/letterF-desk.png" media="(min-width: 700px)" />
                <img src="images/letterF-desk.png" alt />
              </picture>
            </div>
            <div class="sixth-text">Формат курса</div>
          </div>

          <div class="sixth-flex__wrp">
            <div class="sixth-flex">
              <div class="sixth-flex__img">
                <img src="fonts/11.svg" />
              </div>
              <div class="sixth-flex__text">Тематических блоков</div>
            </div>

            <div class="sixth-flex">
              <div class="sixth-flex__img">
                <img src="fonts/80.svg" />
              </div>
              <div class="sixth-flex__text">Практики в каждом уроке</div>
            </div>

            <div class="sixth-flex">
              <div class="sixth-flex__img">
                <img src="fonts/video.svg" />
              </div>
              <div class="sixth-flex__text">Видео и анимированные графики</div>
            </div>

            <div class="sixth-flex">
              <div class="sixth-flex__img">
                <img src="fonts/task.svg" />
              </div>
              <div class="sixth-flex__text">Домашние задания с проверкой</div>
            </div>
          </div>

          <div class="sixth-icon__wrp">
            <img class="sixth-icon" src="images/gerchik-icon.png" alt />
            <div class="sixth-icon__text-wrp">
              <img src="fonts/quotes.svg" alt />
              <div class="sixth-icon__text">
                Весь <b>20-летний опыт</b> профитной торговли <b>Александра Герчика</b> для удобства
                <b>упакован в один курс</b>
              </div>
            </div>
          </div>

          <div class="sixth-absolute__wrp">
            <div class="sixth-absolute__item">
              <img src="fonts/check-red.svg" alt />
              <div class="sixth-absolute__item-text">
                Вам больше не нужно искать знания в интернете и учиться трейдингу на своих ошибках.
              </div>
            </div>

            <div class="sixth-absolute__item">
              <img src="fonts/check-red.svg" alt />
              <div class="sixth-absolute__item-text">
                С курсом «Перезагрузка» вы получаете комплекс решений, проверенных практикой.
              </div>
            </div>

            <div class="sixth-absolute__item">
              <img src="fonts/check-red.svg" alt />
              <div class="sixth-absolute__item-text">
                Заработайте прямо сейчас свой капитал и продолжайте дальше зарабатывать без потерь.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-seventh">
        <div class="seventh-img__wrp">
          <picture>
            <source
              srcset="images/seventh-image.png"
              media="(min-width: 320px) and (max-width: 699px)"
            />
            <source srcset="images/seventh-image-desk.png" media="(min-width: 700px)" />
            <img src="images/seventh-image-desk.png" class="seventh-img" alt />
          </picture>
          <div class="seventh-img__wrp-text">Оставьте нестабильную торговлю в прошлом!</div>
        </div>

        <div class="third-marquee__wrp" id="form">
          <h3 class="third-marquee">
            <span>Сделайте шаг!</span>
          </h3>
        </div>

        <div id="form_header" class="seventh-heading__wrp">
          Шаг к <span>прибыльному</span> и комфортному трейдингу
        </div>

        <div class="seventh-form__wrp">
          <div class="seventh-form__text container-main">
            «Перезагрузка» доступна только клиентам компании Gerchik & Co. Чтобы получить доступ к
            урокам и дополнительным материалам, пройдите регистрацию в компании.
          </div>

          <!-- Registation form -->
          <div class="seventh-form__flexible">
            <div class="flexible-registration-perezagruzka">
              <div class="flex-register-form">
                <form method="POST" autocomplete="off" id="formTop">
                  <div class="flex-container">
                    <div class="field">
                      <div class="input">
                        <label
                          ><div class="label">Имя*</div>
                          <input
                            class="form-control"
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="Имя"
                            required
                        /></label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="input">
                        <label
                          ><div class="label">Фамилия*</div>
                          <input
                            class="form-control"
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="Фамилия"
                            required
                        /></label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="input">
                        <label
                          ><div class="label">E-mail*</div>
                          <input
                            class="form-control"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                        /></label>
                      </div>
                    </div>
                    <style>
                      .iti {
                        width: 100%;
                      }
                      .iti__selected-flag {
                        height: 58px;
                      }

                      .flex-register-form .flex-container {
                        padding: 30px 30px 20px !important;
                      }

                      .flex-register-form .flex-container .field {
                        padding-bottom: 5px;
                        padding-top: 5px;
                      }

                      @media (max-width: 400px) {
                        .flexible-registration-perezagruzka {
                          display: flex;
                          justify-content: center;
                        }
                        .seventh-form__flexible
                          .flexible-registration-perezagruzka
                          .flex-register-form {
                          width: 365px !important;
                        }
                        .flex-register-form .flex-container {
                          padding: 15px 18px 12px !important;
                        }

                        form {
                          width: 365px;
                        }

                        a:link {
                          color: #fff;
                        }
                      }
                    </style>
                    <div class="field">
                      <div class="select">
                        <div class="label">Мобильный телефон*</div>
                        <div class="fields">
                          <input class="form-control" type="tel" id="phone" name="phone" required />
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <button type="submit" class="reg-btn active">Зарегистрироваться</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-eights">
        <div class="eights-flex">
          <div class="eights-text__wrp">
            <div class="eights-text__letter-wrp">
              <picture>
                <source
                  srcset="images/letterB-mob.png"
                  media="(min-width: 320px) and (max-width: 699px)"
                />
                <source srcset="images/letterB.png" media="(min-width: 700px)" />
                <img src="images/letterB.png" alt />
              </picture>
            </div>
            <div class="eights-text"><b>Выберите свой вариант обучения</b> прямо сейчас</div>
          </div>
          <div class="eights-titles">
            <span>Получите уроки Герчика Бесплатно! </span>
            <br />Для этого достаточно быть клиентом компании Gerchik & Co и пополнить свой торговый
            счет от $500
          </div>
        </div>

        <div class="eights-mob">
          <div class="eights-mob__buttons">
            <button class="eights-mob__btn is-opened" type="button">Базовый</button>
            <button class="eights-mob__btn" type="button">Комфорт</button>
          </div>

          <div class="eights-mob__content">
            <div class="eights-mob__1 open">
              <ul class="eights-mob__list">
                <li class="eights-mob__list-item">
                  <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                  <span><b>5 из 11 уроков</b> по основным темам</span>
                </li>
                <li class="eights-mob__list-item">
                  <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                  <span><b>2 месяца доступа</b> к платформе обучения</span>
                </li>
                <li class="eights-mob__list-item">
                  <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                  <span
                    >Самостоятельное изучение материала<b> без проверки домашнего задания</b></span
                  >
                </li>
              </ul>
            </div>

            <div class="eights-mob__2">
              <ul class="eights-mob__list">
                <li class="eights-mob__list-item">
                  <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                  <span><b>Полный курс</b> из 11 уроков</span>
                </li>
                <li class="eights-mob__list-item">
                  <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                  <span><b>4 месяца доступа</b> к платформе обучения</span>
                </li>
                <li class="eights-mob__list-item">
                  <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                  <span>Проверка домашних заданий <b>для закрепления изученного</b></span>
                </li>
                <li class="eights-mob__list-item">
                  <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                  <span>Чек-листы, торговые <b>рекомендации от Александра Герчика</b></span>
                </li>
              </ul>
            </div>

            <div class="eights-mob__getbtn-wrp">
              <a href="#form_header"
                ><button class="eights-mob__getbtn" type="button">Получить курс</button></a
              >
            </div>
          </div>
        </div>

        <div id="price" class="eights-desk">
          <div class="eights-desk__block">
            <div class="eights-desk__title">Пакет <br /><span>"Базовый"</span></div>
            <ul class="eights-mob__list">
              <li class="eights-mob__list-item">
                <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                <span><b>5 из 11 уроков</b> по основным темам</span>
              </li>
              <li class="eights-mob__list-item">
                <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                <span><b>2 месяца доступа</b> к платформе обучения</span>
              </li>
              <li class="eights-mob__list-item">
                <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                <span
                  >Самостоятельное изучение материала<b> без проверки домашнего задания</b></span
                >
              </li>
            </ul>
            <div class="eights-mob__getbtn-wrp">
              <a href="#form_header"
                ><button class="eights-mob__getbtn" type="button">Получить курс</button></a
              >
            </div>
          </div>
          <div class="eights-desk__block">
            <div class="eights-desk__title">
              Пакет<br />
              <span>"Комфорт"</span>
            </div>
            <ul class="eights-mob__list">
              <li class="eights-mob__list-item">
                <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                <span><b>Полный курс</b> из 11 уроков</span>
              </li>
              <li class="eights-mob__list-item">
                <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                <span><b>4 месяца доступа</b> к платформе обучения</span>
              </li>
              <li class="eights-mob__list-item">
                <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                <span>Проверка домашних заданий <b>для закрепления изученного</b></span>
              </li>
              <li class="eights-mob__list-item">
                <img class="eights-mob__list-icon" src="images/check_1.png" alt />
                <span>Чек-листы, торговые <b>рекомендации от Александра Герчика</b></span>
              </li>
            </ul>
            <div class="eights-mob__getbtn-wrp">
              <a href="#form_header"
                ><button class="eights-mob__getbtn" type="button">Получить курс</button></a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="popup-wrp">
        <div class="popup" id="popup">
          <div class="modal">
            <div class="modal__close">
              <img class="modal__close-img" src="images/close.png" alt />
            </div>
            <div class="modal__text">
              <div class="modal__text-heading">
                Остался один шаг — и вы клиент компании Gerchik & Co.
                <br />Чтобы завершить регистрацию, нужно подтвердить почту.
              </div>

              <div>Для этого:</div>
              <ol>
                <li>Войдите на почту, указанную при регистрации</li>
                <li>Найдите письмо от Gerchik & Co</li>
                <li>Перейдите по ссылке в нем</li>
              </ol>
              <br />
              <div>Если его нет во «Входящих», проверьте «Промоакции» и «Спам»</div>

              <div>
                После перехода по ссылке из письма <b>Вы сразу попадете в свой Личный кабинет</b>, в
                котором сможете связаться с менеджером и узнать о доступах к курсу.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="footer-flex">
        <div class="footer-flex__social">
          <a href="#form_header"><img src="fonts/facebook.svg" alt="social icon" /></a>
          <a href="#form_header"><img src="fonts/instagram.svg" alt="social icon" /></a>
        </div>
        <div class="footer-flex__rights">Gerchik&Co © 2023. Все права защищены.</div>
      </div>
      <div class="footer-background"></div>
    </footer>

     <!-- Start popup double -->
     <div class='modal-form' id='modalFailure'>
        <p class='close-modal' href="#">&times;</p>
        <div class='content'>
            <div class="sign-up-form-header text-center mb-4">
                <h5 class="mb-2">Вы уже зарегистрировались на данный номер. Если вам нужен новый аккаунт, пройдите
                    регистрацию на другой мобильный номер</h5>
            </div>
        </div>
    </div>

    <div class='modal-form' id='modalFailureEmail'>
        <p class='close-modal' href="#">&times;</p>
        <div class='content'>
            <div class="sign-up-form-header text-center mb-4">
                <h5 class="mb-2">Вы уже зарегистрировались на данную электронную почту. Если вам нужен новый
                    аккаунт, пройдите
                    регистрацию на другую электронную почту.</h5>
            </div>
        </div>
    </div>

    <div class='modal-form' id='modalInvalid'>
        <p class='close-modal' href="#">&times;</p>
        <div class='content'>
            <div class="sign-up-form-header text-center mb-4">
                <h5 class="mb-2">Вы ввели неккоректную электронную почту. Пройдите
                    регистрацию на другую электронную почту.</h5>
            </div>
        </div>
    </div>
    <!-- End popup double -->
    <script src="js/app.js"></script>
    <script src="js/momentum-slider.js"></script>
    <script src="js/swiper-bundle.js"></script>
    <script src="js/slider.js"></script>
    <script src="js/swiper.js"></script>
    <script src="js/header-scroll.js"></script>

    <script src="js/modal.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/intlTelInput.min.js"></script>
    <script src="js/jquery.maskedinput.js"></script>
    <script src="js/main.js"></script>
    <script src="js/submitForm.js"></script>
    <script src="js/utm.js"></script>
  </body>
</html>

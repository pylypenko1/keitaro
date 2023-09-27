<!DOCTYPE html>
<html lang="ru_RU">
  <head>
    <meta name="facebook-domain-verification" content />
    <meta name="robots" content="noindex, nofollow" />

    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta http-equiv="Cache-Control" content="no-cache" />

    <title>Kaspi Profit-Bot</title>

    <link rel="shortcut icon" href="images/pn1.png" type="image/x-icon" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />

    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/form.css" />
    <link rel="stylesheet" href="css/intlTelInput.min.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
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

  <body class="add-scroll">
    <div class="main-desc b-show">
      <div class="main-desc__img"></div>
      <div class="main-desc__body"></div>
    </div>
    <div class="body" style="transform: translateY(0px)">
      <h1 class="main__title">
        Зарабатывайте от 3 500 000 тенге в месяц на уникальной платформе “Kaspi Profit”
      </h1>
      <div class="content">
        <div class="header">
          <div class="header__body">
            <div class="header__name">
              <div class="header__avatar">
                <img src="images/pn1.png" alt />
              </div>
              <div class="header__desc">
                <p>Kaspi Profit bot</p>
              </div>
            </div>
          </div>
        </div>
        <div class="chat">
          <div class="chat__time">
            <p>Сегодня</p>
          </div>
          <div class="chat-content-list"></div>

          <input type="text" class="inp" id="res" value="0" readonly />

          <!-- /scroll -->

          <div id="form" class="iframe-form">
            <div id="order" class="boxit">
              <div class="frame-container" style="padding: 30px">
                <div class="row-form">
                  <h4 class="form__title">
                    Заполните поля ниже и с вами свяжется ваш финансовый эксперт
                  </h4>
                  <!-- THERE -->
                  <form class="register-form" id="formTop" method="post">
                    <div class="form-input-main">
                      <input
                        type="text"
                        class="form-input"
                        name="first_name"
                        id="first_name"
                        placeholder="Имя"
                        required
                      />
                    </div>
                    <div class="form-input-main">
                      <input
                        type="text"
                        class="form-input"
                        name="last_name"
                        id="last_name"
                        placeholder="Фамилия"
                        required
                      />
                    </div>
                    <div class="form-input-main">
                      <input id="email" name="email" placeholder="E-mail" required type="email" />
                    </div>
                    <div class="form-input-main form-input-main">
                      <input
                        type="tel"
                        class="form-input"
                        id="phone1"
                        name="phone1"
                        placeholder=""
                        required
                      />
                    </div>
                    <button name="submitBtn" type="submit" class="send_order">
                      Начать зарабатывать
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start popup double -->
    <div class="modal-form" id="modalFailure">
      <p class="close-modal" href="#">&times;</p>
      <div class="modal-contents">
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
      <div class="modal-contents">
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
      <div class="modal-contents">
        <div class="sign-up-form-header text-center mb-4">
          <h5 class="mb-2 mt-4">
            Вы ввели неккоректную электронную почту. Пройдите регистрацию на другую электронную
            почту.
          </h5>
        </div>
      </div>
    </div>
    <!-- End popup double -->

    <!-- intlTelInput -->
    <link rel="stylesheet" href="css/intlTelInput.min.css" />

    <!-- main_js -->
    <script src="js/script.js"></script>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <script src="js/checkCookiePhone.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/intlTelInput.min.js"></script>
    <script src="js/jquery.maskedinput.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/main.js"></script>
    <script src="js/submitForm.js"></script>
    <script src="js/utm.js"></script>

    <style>
      label.error {
        padding-left: 5px;
        padding-right: 5px;
        background-color: rgba(255, 0, 0, 0.6) !important;
        color: #fff !important;
      }

      .header__desc p {
        font-size: 27px;
        margin-bottom: 0;
      }

      /* .error::placeholder {
        color: #fff !important;
      } */

      .iti {
        height: 54px !important;
      }

      /* .modal_phone {
        opacity: 1;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 99999;
        display: none;
        outline: 0;
        padding-right: 15px;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.4);
        overflow-x: hidden;
        overflow-y: auto;
        color: #000;
      }

      .modal_phone.open_phone {
        display: flex;
      }

      .modal-open_phone {
        overflow: hidden;
      }

      .modal-dialog_phone {
        position: relative;
        width: 100%;
        max-width: 32rem;
        padding: 1rem;
        box-sizing: border-box;
      }

      .modal-content_phone {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.3rem;
        outline: 0;
      }

      .modal-header_phone {
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
      }

      .modal-header_phone {
        justify-content: space-between;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
      }

      .modal-body_phone {
        position: relative;
        flex: 1 1 auto;
        padding: 1rem;
      }

      .modal-title_phone {
        font-size: 1.25rem;
        font-weight: 600;
      }

      .close-button_phone {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        opacity: 0.5;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        padding: 1rem 1rem;
        margin: -1rem -1rem -1rem auto;
      } */
    </style>
  </body>
</html>

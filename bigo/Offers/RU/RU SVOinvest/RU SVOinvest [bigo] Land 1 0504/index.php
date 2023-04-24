<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Государственная инвестиционная программа "ГОС ИНВЕСТ"</title>
  <link rel="icon" href="img/logo.svg">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.cdnfonts.com/css/proxima-nova-2" rel="stylesheet">
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> -->
  <script src="js/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
  <link rel="stylesheet" href="css/intlTelInput.min.css">
  <link rel="stylesheet" href="css/modal.css">
  <!-- <script src="js/inputRange.js" type="text/javascript" ></script> -->

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
      document.addEventListener("DOMContentLoaded", function(event) {
        var params = new URLSearchParams(document.location.search.substr(1));
        var subid = getSubId();
        var token = getToken();

        params.set('_token', token);
        setCookie('token', token);
        setCookie('subid', subid);

        // Adds params as hidden inputs to the forms
        document.querySelectorAll('form').forEach(function(form) {
          params.forEach(function(v, k) {
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

  <script async src="https://api.imotech.video/ad/events.js?pixel_id=<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>">
  </script>
  <script>
    window.bgdataLayer = window.bgdataLayer || [];

    function bge() {
      bgdataLayer.push(arguments);
    }
    bge('init', "<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>");
  </script>
</head>

<body>
  <header class="header">
    <div class="header_container">
      <div class="landing">
        <img src="./img/logo.svg" alt="logo">
        <span>ГОС<br />ИНВЕСТ</span>
      </div>
      <button onclick="window.location.href = '#contact_form'">Оставить заявку</button>
    </div>
  </header>
  <style>
    label.error {
      color: #9c9c9c;
    }

    .iti__selected-flag {
      max-height: 42px;
    }

    .contacts .iti__selected-flag {
      color: #fff;
    }

    .input_val {
      width: 100%;
      color: #fff;
    }

    .input_val.error {
      margin-top: 9px;
      margin-bottom: 9px;
    }

    .input_val_bottom.error {
      margin-top: 9px;
      margin-bottom: 9px;
    }
  </style>
  <!-- /.header -->
  <div class="hero">
    <div class="contacts_container">
      <form method="post" class="contacts" id="leadform" autocomplete="off">
        <h2>Государственная инвестиционная программа для участников</h2>
        <h1>Специальной Военной Операции</h1>
        <input class="input_val" placeholder="Ваше имя" type="text" id="first_name" name="first_name">
        <input class="input_val" placeholder="Ваша фамилия" type="text" id="last_name" name="last_name">
        <input class="input_val" placeholder="Ваш email" type="email" id="email" name="email">
        <input class="input_val" type="tel" class="art-stranger" id="phone1" name="phone1">
        <button style="margin-top: 8px;" type="submit">Оставить заявку</button>
      </form>


      <!-- <img src="./img/president.jpg" alt="president"> -->
      <video id="video-cl" controls loop preload="auto" poster="video/poster.png">
        <source src="video/video.mp4" type="video/mp4" />
      </video>

      <style>
        video::-webkit-media-controls-overflow-menu,
        video::-webkit-media-controls-panel {
          display: none !important;
        }
      </style>

    </div>
    <!-- /.contacts_container -->
    <div class="statistic">
      <div class="paid">
        <h3 class="statistic_title">Уже выплачено:</h3>
        <h3 class="statistic_value">73 000 000</h3>
        <h3 class="statistic_subTitle">рублей</h3>
      </div>
      <div class="participants">
        <h3 class="statistic_title">Уже участвует:</h3>
        <h3 class="statistic_value">21 000</h3>
        <h3 class="statistic_subTitle">россиян</h3>
      </div>
      <div class="regions">
        <h3 class="statistic_title">Россияне из:</h3>
        <h3 class="statistic_value">35</h3>
        <h3 class="statistic_subTitle">регионов</h3>
      </div>
    </div>
    <!-- /.statistic -->
    <h3 class="description">Владимир Владимирович Путин подписал законопроект о начале государственной микроинвестиционной
      программы, обязывающий государственные компании открыть возможность для инвестирования в ценные бумаги участникам
      специальной военной операции
    </h3>
    <!-- /.text -->
    <div class="swiper mySwiper" id="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./img/swiper/sber.png" alt="СБЕР БАНК"></div>
        <div class="swiper-slide"><img src="./img/swiper/gazProm.png" alt="ГАЗПРОМ"></div>
        <div class="swiper-slide"><img src="./img/swiper/rosneft.png" alt="РОСНЕФТЬ"></div>
        <div class="swiper-slide"><img src="./img/swiper/vtb.png" alt="ВТБ"></div>
        <div class="swiper-slide"><img src="./img/swiper/aeroflot.png" alt="АЭРОФЛОТ"></div>
        <div class="swiper-slide"><img src="./img/swiper/transneft.png" alt="ТРАНСНЕФТЬ"></div>
        <div class="swiper-slide"><img src="./img/swiper/alrosa.png" alt="АЛРОСА"></div>
      </div>
    </div>
    <div class="companies">
      <div class="swiper-slide"><img src="./img/swiper/sber.png" alt="СБЕР БАНК"></div>
      <div class="swiper-slide"><img src="./img/swiper/gazProm.png" alt="ГАЗПРОМ"></div>
      <div class="swiper-slide"><img src="./img/swiper/rosneft.png" alt="РОСНЕФТЬ"></div>
      <div class="swiper-slide"><img src="./img/swiper/vtb.png" alt="ВТБ"></div>
      <div class="swiper-slide"><img src="./img/swiper/aeroflot.png" alt="АЭРОФЛОТ"></div>
      <div class="swiper-slide"><img src="./img/swiper/transneft.png" alt="ТРАНСНЕФТЬ"></div>
      <div class="swiper-slide"><img src="./img/swiper/alrosa.png" alt="АЛРОСА"></div>
    </div>
    <!-- /.swiper -->
    <div class="conditions">
      <div class="conditions_text">
        <h2>Гарантированный плюс!</h2>
        <h3>Ранее данная возможность была только у квалифицированных инвесторов и игроков с большим капиталом</h3>
        <h3><strong>Сейчас это доступно всем участникам специальной военной операции с капиталом от</strong></h3>
      </div>
      <div class="conditions_value">
        <span class="conditions_value_number">7 000</span>
        <span class="conditions_value_text">рублей</span>
      </div>
    </div>
    <!-- /.conditions -->
    <div class="yieldCalculator">
      <h2>Калькулятор доходности</h2>
      <div class="calculatorContainer">
        <div class="arguments">
          <div class="input_wrapper chrome">
            <span class="range_input_placeholder">Сумма</span>
            <span class="range_input_value" id="range_money_value">15000 ₽</span>
            <input class="range_money" id="myinput_money" type="range" value="15000" max="1000000" min="10000" step="5000">
            <div class="extreme_values">
              <span class="range_input_subtext">10 000 ₽</span>
              <span class="range_input_subtext">1 000 000 ₽</span>
            </div>
          </div>
          <div class="input_wrapper input_period_wrapper chrome">
            <span class="range_input_placeholder">Термин</span>
            <span class="range_input_value" id="range_period_value">12 месяцев</span>
            <input class="range_period" id="myinput_period" type="range" value="12" max="36" min="3" step="1">
            <div class="extreme_values">
              <span class="range_input_subtext">3 месяца</span>
              <span class="range_input_subtext">36 месяцев</span>
            </div>
          </div>
        </div>
        <div class="result">
          <div class="balance">
            <span class="final_balance">Итоговый баланс</span>
            <span class="final_balance_value" id="final_balance_value">823 115 ₽</span>
          </div>
          <div class="total_balance">
            <div class="balance">
              <span class="total_balance_text">Всего пополнений</span>
              <span class="final_balance" id="final_refill">120 000 ₽</span>
            </div>
            <div class="percent">
              <span class="total_balance_text">Всего процентов</span>
              <span class="final_balance" id="final_percent">693 115 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.yieldCalculator -->
    <div class="contact_form" id="contact_form">
      <div class="contact_form_left">
        <h2>Оставьте свои контакты</h2>
        <h3>Чтобы начать инвестировать</h3>
      </div>
      <form method="post" class="contact_form_right" id="leadformModal" autocomplete="off">
        <h2>Оставьте заявку</h2>
        <h3>Чтобы начать инвестировать, оставьте свои контакты и дождитесь звонка финансового советника</h3>
        <input class="input_val_bottom" placeholder="Ваше имя" type="text" id="first_name" name="first_name" required></input>
        <input class="input_val_bottom" placeholder="Ваша фамилия" type="text" id="last_name" name="last_name" required></input>
        <input class="input_email input_val_bottom" type="email" placeholder="Ваш email" id="email" name="email" required></input>
        <input class="input_phone_number input_val_bottom" type="tel" id="phoneModal" name="phoneModal" required></input>
        <div class="form_acception">
          <label class="checkbox-button">
            <input type="checkbox" class="checkbox-button_input" id="choice1-1" name="choice1" checked required>
            <span class="checkbox-button_control" required></span>
            <span class="checkbox-button_label">Я принимаю условия передачи информации</span>
          </label>
        </div>
        <button id="form_upload_submit" type="submit">Отправить</button>
      </form>
      <!-- /.contact_form -->
    </div>
  </div>
  <!-- /.hero -->
  <div class="footer">
    1. 100% защита вложений доступна только при полном соблюдении условий продукта. Форвардный контракт заключается на
    внебиржевом рынке. Расторжение форвардного контракта в отсутствие согласия противоположной стороны может быть
    недоступно. В случае досрочного расторжения инвестор может не только не получить доходность, но и потерять до 100%
    инвестированных средств.<br>
    2. Продукт «Государственная инвестиционная программа для участников СВО» — это структурный продукт или форвардный
    контракт. Срок инвестирования — до 36 месяцев, в зависимости от даты подачи поручения. Точный срок определяется при
    подаче поручения. Минимальная сумма вложений — 10 000 рублей, максимальная — 1 000 000 рублей.<br>
    Приобрести этот инвестиционный продукт могут только физические лица, которые принимали участие в специальной военной
    операции.<br>
    3. Оформить налоговый вычет по ИИС и получить до 13% от внесенной на счет суммы могут только физические лица —
    налоговые резиденты РФ, получающие доход, облагаемый НДФЛ по ставке 13% (ст. 219.1 Налогового кодекса РФ), если
    заключат договор на открытие и ведение индивидуального инвестиционного счета (ИИС) и выберут вычет на внесенные
    денежные средства на ИИС (вычет типа А). Налоговый вычет предоставляется ФНС по окончании налогового периода —
    календарного года.<br>
    Информация в этом разделе, не является индивидуальной инвестиционной рекомендацией. Финансовые инструменты и
    операции, упомянутые здесь, могут не подходить вам, не соответствовать вашему инвестиционному профилю, финансовому
    положению, опыту инвестиций, знаниям, инвестиционным целям, отношению к риску и доходности. Определение соответствия
    финансового инструмента и операций инвестиционным целям, горизонту и толерантности к риску — это задача
    инвестора.<br>
    ООО «Компания Гос Инвест», лицензия № 154-04434-100000 от 10.01.2001 на осуществление брокерской деятельности.
    Выдана ФСФР. Без ограничения срока действия.<br>
    129110, Москва, Проспект Мира, 69, стр. 1, 3 подъезд
  </div>
  <!-- /.footer -->

  <!-- Start popup double -->
  <div class='modal-form' id='modalFailure'>
    <p class='close-modal' href="#">&times;</p>
    <div class='content'>
      <div class="sign-up-form-header text-center mb-4">
        <h5 class="mb-2 mt-4">Вы уже зарегистрировались на данный номер. Если вам нужен новый аккаунт, пройдите
          регистрацию на другой мобильный номер</h5>
      </div>
    </div>
  </div>

  <div class='modal-form' id='modalFailureEmail'>
    <p class='close-modal' href="#">&times;</p>
    <div class='content'>
      <div class="sign-up-form-header text-center mb-4">
        <h5 class="mb-2 mt-4">Вы уже зарегистрировались на данную электронную почту. Если вам нужен новый
          аккаунт, пройдите
          регистрацию на другую электронную почту.</h5>
      </div>
    </div>
  </div>

  <div class='modal-form' id='modalInvalid'>
    <p class='close-modal' href="#">&times;</p>
    <div class='content'>
      <div class="sign-up-form-header text-center mb-4">
        <h5 class="mb-2 mt-4">Вы ввели неккоректную электронную почту. Пройдите
          регистрацию на другую электронную почту.</h5>
      </div>
    </div>
  </div>
  <!-- End popup double -->

  <script src="js/jquery.validate.js"></script>
  <script src="js/intlTelInput.min.js"></script>
  <script src="js/jquery.maskedinput.js"></script>
  <script src="js/modal.js"></script>
  <script src="js/main.js"></script>
  <script src="js/submitForm.js"></script>
  <script src="js/utm.js"></script>

  <script src="js/inputRange.js" type="text/javascript"></script>
  <script src="js/checkboxChecker.js" type="text/javascript"></script>
  <script src="js/swiper.js" type="text/javascript"></script>
  <script src="js/persentCalc.js" type="text/javascript"></script>

</body>

</html>
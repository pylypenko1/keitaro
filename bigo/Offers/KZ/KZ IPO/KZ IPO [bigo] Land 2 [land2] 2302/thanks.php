<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex,nofollow" />
    <title>Поздравляем!</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&amp;display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&amp;display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/thanks.css" />

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
    <script>
      // Track a conversion with BigoAds
      BigoAds.trackConversion();
    </script>

    <img id="pb" height="1" width="1" style="display: none" src="" />
    <script>
      var matches = document.cookie.match(new RegExp('(?:^|; )' + 'subid' + '=([^;]*)'));
      var subId = matches ? decodeURIComponent(matches[1]) : undefined;
      document.getElementById('pb').src =
        'https://keitaro-leadar.ink/f6c793a/postback?subid=' + subId + '&status=lead';
    </script>
  </head>

  <body>
    <div class="main-wrapper">
      <header class="header">
        <img src="images/uzipo.png" alt="logotype" class="logo-img" />
      </header>
      <main class="main">
        <div class="container">
          <div class="main-content">
            <!-- <img src="assets/img/checked.png" class="completed-img-desk" alt="completed">
                    <img src="assets/img/like.png" class="completed-img-mob" alt="completed"> -->
            <h1 class="main-heading">
              <span class="main-heading-1st">Вы успешно зарегистрировались!</span> <br />
              <!-- <span class="main-heading-2nd">Ваша заявка принята</span> -->
            </h1>
            <p class="thnx-text">
              <span class="thnx-text-1st"
                >Для получения полного доступа к работе с платформой необходимо дождаться звонка
                персонального консультанта.</span
              >
              <br /><br />
              <span class="thnx-text-2nd">Ваш персональный консультант свяжется с вами через:</span>
            </p>
            <div class="counter-wrapper">
              <div class="numbers-wrapper">
                <div class="numbers-block-outer">
                  <div class="numbers-block-inner">
                    <span class="current-number hours">23</span>
                  </div>
                </div>
                <span class="time-measure hours-span">часов</span>
              </div>
              <div class="numbers-wrapper">
                <div class="numbers-block-outer">
                  <div class="numbers-block-inner">
                    <span class="current-number minutes">51</span>
                  </div>
                </div>
                <span class="time-measure minutes-span">минут</span>
              </div>
              <div class="numbers-wrapper">
                <div class="numbers-block-outer">
                  <div class="numbers-block-inner">
                    <span class="current-number seconds">23</span>
                  </div>
                </div>
                <span class="time-measure seconds-span">секунд</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.4/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
      /* COUNTER */

      var localStorage = window.localStorage,
        startDate;

      if (localStorage.getItem('startDate')) {
        startDate = localStorage.getItem('startDate');
      } else {
        startDate = new Date();
        localStorage.setItem('startDate', startDate);
      }
      setTimer(startDate);

      function setTimer(startDate) {
        var deadline = new Date(Date.parse(startDate) + 01 * 24 * 60 * 60 * 1000);
        initializeClock('countdown', deadline);
      }

      // Countdown
      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        return {
          total: t,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };
      }

      function initializeClock(id, endtime) {
        var clock = document.querySelector('.counter-wrapper');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
          var t = getTimeRemaining(endtime);

          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            startDate = new Date();
            localStorage.setItem('startDate', startDate);
            var deadline = new Date(Date.parse(startDate) + 24 * 60 * 60 * 1000);
            initializeClock('countdown', deadline);
            clearInterval(timeinterval);
          }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
    </script>
  </body>
</html>

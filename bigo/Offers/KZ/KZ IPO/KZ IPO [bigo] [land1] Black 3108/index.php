<!DOCTYPE html>
<html lang="ru">

<head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta charset="UTF-8">
   <title>Народное IPO</title>
   <link rel="shortcut icon" href="img/icon-logo.png" type="image/x-icon">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
   <!-- <link rel="stylesheet" href="css/intlTelInput.css"> -->
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
      integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
   <link rel="stylesheet" href="css/style.css">

   <link rel="stylesheet" href="./slick/slick-theme.css">
   <link rel="stylesheet" href="./slick/slick.css">

   <link rel="stylesheet" href="./css/loader.css">

   <link rel="stylesheet" href="css/ion.rangeSlider.min.css">
   <link rel="stylesheet" href="css/jquery.fancybox.min.css">
   <link rel="stylesheet" href="adict/intlTelInput.css">
   <link rel="stylesheet" href="adict/adict.css">
   <link rel="stylesheet" href="./css/myCss.css">

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

<body>

   <div class="loader">
      <div class="l_main">
         <div class="l_square"><span></span><span></span><span></span></div>
         <div class="l_square"><span></span><span></span><span></span></div>
         <div class="l_square"><span></span><span></span><span></span></div>
         <div class="l_square"><span></span><span></span><span></span></div>
      </div>
   </div>

   <header class="some-logos">
      <div class="container">
         <div class="d-flex justify-content-center flex-wrap align-items-center pt-2 pb-2">
            <img id="master-logo" src="./img/logos/MasterCard.png" alt="MasterCard">
            <img id="telegram-logo" src="./img/img-main-ipo1.png" alt="telegram">
            <img id="wire-logo" src="./img/logos/wire-transfer.png" alt="wire-transfer">
            <img id="visa-logo" src="./img/logos/visa.png" alt="visa">
            <img id="halyk-logo" src="./img/logos/Halik-Bank.svg" alt="sberbank">
            <img id="london-logo" src="./img/logos/kaspi-bank.png" alt="LONDON STOCK EXCHANGE">
         </div>
      </div>
   </header>
   <section class="hero">
      <div class="container overflow-hidden">

         <div id="stars"></div>
         <div id="stars2"></div>
         <div id="stars3"></div>

         <div class="text-center">
            <h1 class="h2 mt-5 title-main" field="title">
               IPO Halyk – платформа, на которой каждый сможет вкладывать
               от <span style="font-weight: 600;">$ 150</span> и зарабатывать
               от <span style="font-weight: 600;">$ 4 500</span> в месяц
            </h1>
            <h2 class="h2 mt-4 title-main" field="title">
               Теперь национальные ресурсы в ваших руках!
            </h2>
            <p class="mt-4 sub-title-main" field="descr">
               Посмотрите это видео и узнайте как зарабатывать более <span style="font-weight: 600;">$ 4 500</span>
               каждый месяц на автопилоте
            </p>
         </div>
         <div class="d-flex flex-column flex-lg-row  justify-content-between mt-5">
            <div class="col-12 col-lg-7 video-gaz">
               <div class="hero__video pt-2 ">
                  <div id="ytplayer"></div>
                  <!-- <iframe class="img-fluid" src="https://www.youtube.com/embed/1Y1lox7aTpE?autoplay=1" controls autoplay frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                  <!-- <video class="img-fluid" src="https://wtcprojects.com/video/v6.mp4" controls autoplay></video> -->
               </div>
            </div>
            <div class="col-12 col-lg-5 mt-lg-0 mt-4">
               <div class="text-center">
                  Оставьте ваш актуальный номер телефона, на который вы получите доступ к платформе инвесторов
               </div>
               <form id="0" class="mt-3" method="POST" name="application">
                  <div class="container">
                     <div class="row justify-content-end">
                        <div class="w-100 form-group">
                           <input type="text" name="f_name" id="applicationName" class="form-control" placeholder="Имя"
                              autocomplete="off" required>
                           <div class="help-block help-block-error"></div>
                        </div>
                        <div class="w-100  form-group">
                           <input type="text" name="l_name" id="applicationLName" class="form-control"
                              placeholder="Фамилия" autocomplete="off" required>
                           <div class="help-block help-block-error"></div>
                        </div>
                        <div class="w-100  form-group">
                           <input type="email" name="email" id="applicationEmail" class="form-control"
                              placeholder="Email" autocomplete="off" required>
                           <div class="help-block help-block-error"></div>
                        </div>
                        <div class="w-100  form-group">
                           <input type="tel" name="phone" class="form-control phone-mask">
                           <input type="hidden" class="phone-hidden" id="phone1-hidden">
                           <div class="help-block help-block-error" id="phone1-error"></div>
                        </div>
                     </div>
                     <div class=" form-group" style="margin-bottom: 20px;">
                        <label for="i-agree-1" class="text-white text-sm" required><input name="conditions"
                              type="checkbox" id="i-agree-1" required checked> Я согласен с <a href="#"
                              data-toggle="modal" data-target="#user-rules-modal">Пользовательским
                              соглашением</a></label>
                        <label for="i-agree-2" class="text-white  text-sm"><input name="age" type="checkbox"
                              id="i-agree-2" required checked> Я согласен на обработку персональных данных</label>
                     </div>
                     <div>
                        <button name="btn" type="submit" value="Начать зарабатывать" class="btn btn-gradient">Начать
                           зарабатывать</button>
                     </div>
                  </div>
            </div>
            </form>
         </div>
      </div>
      </div>
   </section>
   <div class="mt-5 pt-5 pb-5 calc-slider-wrapper">
      <section class="container mx-auto">
         <div class="">
            <form action="" class="block calc-slider-block  text-main overflow-hidden w-full  pb-4   ">
               <h3 class="text-2xl text-center font-bold font-ubuntu mt-5 mb-6 sm:mb-10">
                  Просчитайте свой прогнозируемый ежемесячный доход – выберите вашу инвестицию:
               </h3>
               <div class="flex flex-col text-center font-bold mb-4 sm:mb-10 px-5">
                  <label class="block text-center font-bold mb-2">Инвесторы оценивают проект в 30 млрд долларов</label>
                  <input type="text" class="js-range-slider" name="my_range" value="" />
               </div>
               <div class="flex flex-col text-center mb-5">
                  <label class="block text-center font-bold ">Ваша прибыль</label>
                  <h3 class="text-2xl text-center font-bold font-ubuntu mt-5 font-weight-bold" id="calcResult">121560
                     руб.</h3>
               </div>
            </form>
         </div>
      </section>
   </div>
   <section>
      <div class="container mt-5 pt-5 mb-5 pb-5 overflow-hidden">

         <div id="stars"></div>
         <div id="stars2"></div>
         <div id="stars3"></div>

         <div class="table-mobile desktop-hide">
            <div class="signals__header">
               <div class="signals__title signals__title_mobile signals__title_mobile1">
                  Актив</div>
               <div class="signals__title signals__title_mobile signals__title_mobile2">
                  Цена открытия&nbsp;/
                  <br>закрытия
               </div>
               <div class="signals__title signals__title_mobile signals__title_mobile3">
                  Дата открытия&nbsp;/
                  <br>закрытия
               </div>
               <div class="signals__title signals__title_mobile signals__title_mobile4">
                  Прибыль</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">CAD/JPY<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">82.0499/
                  <br><b>81.5532</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$121.81</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">EUR/USD<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">1.21632/
                  <br><b>1.21133</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$82.39</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">CAD/JPY<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">82.1101/
                  <br><b>81.5665</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$133.29</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">NZD/USD<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">0.721467/
                  <br><b>0.715977</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$153.36</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">AUD/JPY<i class="icon-up"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">80.1989/
                  <br><b>80.1075</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="red-txt signals__col signals__col_mobile signals__col_mobile4">-$22.82</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">NZD/JPY<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">74.8133/
                  <br><b>74.3134</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$134.54</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">EUR/USD<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">1.21839/
                  <br><b>1.21191</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$106.94</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">AUD/USD<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">0.77784/
                  <br><b>0.772819</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$129.94</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">AUD/JPY<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">80.7777/
                  <br><b>80.1811</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$148.81</div>
            </div>
            <div class="signals__row signals__row_mobile">
               <div class="signals__col signals__col_mobile signals__col_mobile1">GBP/USD<i class="icon-down"></i></div>
               <div class="signals__col signals__col_mobile signals__col_mobile2">1.3682/
                  <br><b>1.36316</b>
               </div>
               <div class="signals__col signals__col_mobile signals__col_mobile3">
                  <pop>04:34</pop> <span>15.01.21</span>/
                  <br><b>
                     <pop>04:34</pop> <span>15.01.21</span>
                  </b>
               </div>
               <div class="green-txt signals__col signals__col_mobile signals__col_mobile4">+$73.95</div>
            </div>
         </div>
         <div class="table mobile-hide">
            <div class="signals__header">
               <div class="signals__title">Актив</div>
               <div class="signals__title">Позиция</div>
               <div class="signals__title">Цена открытия</div>
               <div class="signals__title">Цена закрытия</div>
               <div class="signals__title">Дата открытия</div>
               <div class="signals__title">Дата закрытия</div>
               <div class="signals__title">Прибыль</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">CAD/JPY</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">82.0499</div>
               <div class="signals__col">81.5532</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$121.81</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">EUR/USD</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">1.21632</div>
               <div class="signals__col">1.21133</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$82.39</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">CAD/JPY</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">82.1101</div>
               <div class="signals__col">81.5665</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$133.29</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">NZD/USD</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">0.721467</div>
               <div class="signals__col">0.715977</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$153.36</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">AUD/JPY</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-up"></i> длинная</span></div>
               <div class="signals__col">80.1989</div>
               <div class="signals__col">80.1075</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="red-txt signals__col">-$22.82</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">NZD/JPY</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">74.8133</div>
               <div class="signals__col">74.3134</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$134.54</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">EUR/USD</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">1.21839</div>
               <div class="signals__col">1.21191</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$106.94</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">AUD/USD</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">0.77784</div>
               <div class="signals__col">0.772819</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$129.94</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">AUD/JPY</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">80.7777</div>
               <div class="signals__col">80.1811</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$148.81</div>
            </div>
            <div class="signals__row">
               <div class="signals__col">GBP/USD</div>
               <div class="signals__col"><span class="signals__direction"><i class="icon-down"></i> короткая</span>
               </div>
               <div class="signals__col">1.3682</div>
               <div class="signals__col">1.36316</div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="signals__col"><span class="dim-time">04:34</span> <span class="dim-date">15.01.21</span>
               </div>
               <div class="green-txt signals__col">+$73.95</div>
            </div>
         </div>
      </div>

   </section>



   <section class="background-video-section">
      <div class="video-section-wrap index-z" style="position: relative;">
         <div class="gradient-overlay ptb-100">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-md-9 col-lg-8">
                     <div class="app-business-content text-center text-white pt-5 pb-5">
                        <h2 class="text-white">
                           Используйте свой смартфон!
                        </h2>
                        <p class="lead">
                           Современный проект IPO Halyk доступен на смартфонах, планшетах и компьютерах.
                           Следите за своим доходом где и когда Вам удобно, в любой точке мира.
                        </p>
                        <div class="action-btns ">
                           <ul class="list-inline app-download-list">
                              <li class="list-inline-item mt-4 ">
                                 <div class="d-flex align-items-center border rounded py-1 px-2 btn-modal">
                                    <span class="fab fa-windows icon-sm mr-3">
                                    </span>
                                    <div class="download-text text-left">
                                       <span>
                                          Download form
                                       </span>
                                       <h5 class="mb-0">
                                          Windows
                                       </h5>
                                    </div>
                                 </div>
                              </li>
                              <li class="list-inline-item mt-4">
                                 <div class="d-flex align-items-center border rounded py-1 px-2  btn-modal">
                                    <span class="fab fa-apple icon-sm mr-3">
                                    </span>
                                    <div class="download-text text-left">
                                       <span>
                                          Download form
                                       </span>
                                       <h5 class="mb-0">
                                          App Store
                                       </h5>
                                    </div>
                                 </div>
                              </li>
                              <li class="list-inline-item mt-4">
                                 <div class="d-flex align-items-center border rounded py-1 px-2  btn-modal">
                                    <span class="fab fa-google-play icon-sm mr-3">
                                    </span>
                                    <div class="download-text text-left">
                                       <span>
                                          Download form
                                       </span>
                                       <h5 class="mb-0">
                                          Google Play
                                       </h5>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="hero  pt-5 pb-5" id="section-phone">

      <div class="container">
         <h1 class="text-center font-weight-bold">Почему это выгодно для обычных граждан?</h1>
         <div class="block-phone d-flex justify-content-between mt-5">
            <div class="col-lg-3 col-12 mt-5 wrap-ph">
               <div class="wrap-teg">
                  <div class="icon-img"><i class="far fa-star"></i></div>
                  <div class="phone-title h5 font-weight-bold">Актив</div>
                  <p>Один из самых доходных активов</p>
               </div>
               <div class="wrap-teg mt-5">
                  <div class="icon-img"><i class="far fa-clock"></i></div>
                  <div class="phone-title h5 font-weight-bold">Минимум времени</div>
                  <p>Вам достаточно тратить от получаса в день, лишь для того, чтобы контролировать работу робота</p>
               </div>
               <div class="wrap-teg mt-5">
                  <div class="icon-img"><i class="fas fa-wifi"></i></div>
                  <div class="phone-title h5 font-weight-bold">Простота</div>
                  <p>Для работы вам нужен только телефон и доступ к интернету</p>
               </div>
            </div>
            <div class="col-lg-5 col-12 text-center mt-5">
               <img src="./img/phone/iphone_4.gif" alt="">
            </div>
            <div class="col-lg-3 col-12 mt-5 wrap-ph">
               <div class="wrap-teg ">
                  <div class="icon-img"><i class="far fa-envelope"></i></div>
                  <div class="phone-title h5 font-weight-bold">Поддержка 24/7</div>
                  <p>Наши менеджеры всегда помогут вам решить ваш вопрос</p>
               </div>
               <div class="wrap-teg mt-5">
                  <div class="icon-img"><i class="fas fa-users"></i></div>
                  <div class="phone-title h5 font-weight-bold">Удобство</div>
                  <p>Возможность вывести средства любым удобным способом</p>
               </div>
               <div class="wrap-teg mt-5">
                  <div class="icon-img"><i class="fas fa-gift"></i></div>
                  <div class="phone-title h5 font-weight-bold">Соинвестиции</div>
                  <p>В связи с выходом на рынок мы дарим каждому пользователю 50% соинвестицию на первое пополнение</p>
               </div>
            </div>
         </div>
      </div>
      <div class="waveWrapper waveAnimation">
         <div class="waveWrapperInner bgTop">
            <div class="wave waveTop" style="background-image: url('img/wave1.png')"></div>
         </div>
         <div class="waveWrapperInner bgMiddle">
            <div class="wave waveMiddle" style="background-image: url('img/wave2.png')"></div>
         </div>
         <div class="waveWrapperInner bgBottom">
            <div class="wave waveBottom" style="background-image: url('img/wave3.png')"></div>
         </div>
      </div>

   </section>
   <section class="video-slider-section">
      <h3 class="title-video">
         Просто</br> о «Народном IPO»
      </h3>
      <div class="prev-slick-btn"><i class="fas fa-chevron-left"></i></div>
      <div class="slider-wrapper-video">
         <div class="sliderMain">
            <div class="slider-video-block" id="slider-video1">

            </div>
            <div class="slider-video-block" id="slider-video2">

            </div>
            <div class="slider-video-block" id="slider-video3">

            </div>
            <div class="slider-video-block" id="slider-video4">

            </div>
         </div>
      </div>
      <div class="next-slick-btn"><i class="fas fa-chevron-right"></i></div>
   </section>

   <section class="polygon">
      <div class="t-container index-z">
         <div class="t-width t-width_12 t415__mainblock">
            <div class="t-cover__wrapper t-valign_middle">
               <div class="t415__content" data-hook-content="covercontent">
                  <img class="" data-tu-max-width="800" data-tu-max-height="800" style="max-width:250px;"
                     src="./img/img-main-ipo1.png" imgfield="img2" data-hook-clogo="coverlogo">
                  <div class="t415__textwrapper t-width t-width_12">
                     <div class="t415__title t-title t-title_md" field="title" style="">
                        Количество пользователей платформы лимитировано
                     </div>
                     <div class="t415__descr t-descr t-descr_md" field="descr" style="">
                        Успейте зарегистрироваться и начать зарабатывать на выгодных инвестициях.
                        <br>
                        До закрытия регистрации осталось...
                     </div>
                  </div>
                  <div id="t415__timer210558841" class="t415__timer">
                     <div class="t415__col ">
                        <span class="t415__days t-title t-title_lg t415__number">
                           0
                        </span>
                        <div class="t415__text t-descr t-descr_xxs">
                           Дней
                        </div>
                     </div>
                     <div class="t415__col">
                        <span class="t415__hours t-title t-title_lg t415__number" id="hours">14</span>
                        <div class="t415__text t-descr t-descr_xxs">
                           Часов
                        </div>
                     </div>
                     <div class="t415__col">
                        <span class="t415__minutes t-title t-title_lg t415__number" id="minutes">59</span>
                        <div class="t415__text t-descr t-descr_xxs">
                           Минут
                        </div>
                     </div>
                     <div class="t415__col">
                        <span class="t415__seconds t-title t-title_lg t415__number" id="seconds">36</span>
                        <div class="t415__text t-descr t-descr_xxs">
                           Секунд
                        </div>
                     </div>
                  </div>
                  <div class="t415__buttons">
                     <button name="btn" id="popuping" type="submit" value="Начать зарабатывать"
                        class="btn btn-gradient">Зарегистрироваться</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Динамические числа -->
      <div class="container">
         <div class="register-now__border">
            <div class="register-now__count">
               <span class="register-now__count" id="register-count1">173</span>
            </div>
            <div class="register-now__label">Пользователей сейчас<br>на странице</div>
         </div>
         <div class="register-now__border">
            <div class="register-now__label">Количество свободных мест<br> регистрацию</div>
            <div class="register-now__count">
               <span class="register-now__count" id="register-count2">173</span>
            </div>
         </div>
      </div>
   </section>

   <!-- Modal -->
   <div class="modal fade" id="user-rules-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLongTitle">Пользовательское соглашение</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Закрыть">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div class="terms__text">
                  <p>
                     Эти Условия регулируют использование Клиентом Интернет-сайта Компании и всех приложений,
                     программного обеспечения и Услуг (в совокупности «Услуги»), доступных на этом Веб-сайте.
                  </p>
                  <span class="terms__subtitle"><b>1. Использование веб-сайта</b></span>
                  <p>
                     1.1. Получая доступ к этому Веб-сайту, клиент подтверждает свое согласие и понимание следующих
                     Условий использования.
                  </p>
                  <p>
                     1.2. Клиент гарантирует и представляет Компании, что он имеет законное право посещать Веб-сайт и
                     использовать информацию, доступную через Веб-сайт.
                  </p>
                  <p>
                     1.3. Компания оставляет за собой право по собственному усмотрению изменять, добавлять или удалять
                     любую часть данного Веб-сайта или настоящих Условий использования в любое время и по любой причине
                     без уведомления клиента.
                  </p>
                  <p>
                     1.4. Изменения настоящих Условий использования будут эффективны после публикации. Дальнейшее
                     использование этого Веб-сайта после любых таких изменений должно означать принятие клиентом этих
                     изменений.
                  </p>
                  <span class="terms__subtitle"><b>2. Доступ</b></span>
                  <p>
                     2.1. Настоящий Веб-сайт и информация, инструменты и материалы, содержащиеся в нем, не имеют своей
                     целью или предназначены для распространения или использования каким-либо лицом или организацией,
                     которые являются гражданами или резидентами или находятся под какой-либо юрисдикцией, где такое
                     распространение, публикация, или использование будет противоречить закону или постановлению, или
                     которое подведет Компанию или ее аффилированные лица к какой-либо регистрации или лицензированию в
                     такой юрисдикции. При доступе к какой-либо части Веб-сайта Клиент соглашается не использовать этот
                     Веб-сайт таким образом, чтобы нарушать, препятствовать или ограничивать использование этого
                     Веб-сайта другими пользователями; Не загружать, не отображать и не передавать через этот сайт
                     какие-либо ложные, оскорбительные, дискредитирующие, угрожающие, непристойные, незаконные
                     материалы, или материалы, которые нарушают права любого другого человека в любой точке мира.
                  </p>
                  <span class="terms__subtitle"><b>3. Отказ от гарантий</b></span>
                  <p>
                     3.1 Компания не дает никаких сведений о результатах, полученных от использования этого Веб-сайта,
                     Услуг, информации или его контента.
                  </p>
                  <p>
                     3.2. Любое использование данного сайта, клиент осуществляет на свой страх и риск. Информация на
                     этом веб-сайте предоставляется «как есть» и «как доступно».
                  </p>
                  <p>
                     3.3 Компания не гарантирует точность, полноту, безопасность или своевременность подготовки данных,
                     информации или Услуг, предоставляемых на или через использование Веб-сайта, прямо или подразумевая,
                     для какой-либо конкретной цели.
                  </p>
                  <p>
                     3.4. Компания, ее лицензиар и ее поставщики, в пределах, разрешенных законодательством, не признает
                     гарантии любого рода, явные или подразумеваемые, установленные законом или иным образом, включая,
                     но не ограничивая, подразумеваемые гарантии коммерческого качества, несоблюдения прав третьих лиц и
                     соответствия определенной цели.
                  </p>
                  <span class="terms__subtitle"><b>4. Конфиденциальность</b></span>
                  <p>
                     4.1. Политика конфиденциальности Компании устанавливает правила использования информации, собранной
                     или предоставленной Клиентом на этом веб-сайте.
                  </p>
                  <span class="terms__subtitle"><b>5. Ограничение ответственности</b></span>
                  <p>
                     5.1 Компания не несет никакой ответственности и отказывается от обязательств за любые убытки,
                     гражданскую ответственность, ущерб (прямой, косвенный или сопутствующий), телесные повреждения или
                     расходы любого характера, которые могут быть понесены Клиентом или любой третьей стороной, в
                     результате или которые прямо или косвенно связаны с доступом и использованием Веб-сайта, любой
                     информацией, содержащейся на Сайте, личной информацией Клиента или материалами и информацией,
                     передаваемой через систему Компании. В частности, ни Компания, ни какая-либо третья сторона,
                     поставщик данных или контента не несет никакой ответственности перед Клиентом или любым другим
                     лицом, фирмой или корпорацией за любые потери, гражданскую ответственность, ущерб (прямой или
                     косвенный или сопутствующий), телесные повреждения, или расходы любого характера, возникшие из-за
                     каких-либо задержек, неточностей, ошибок или упущения какой-либо информации или любых действий,
                     предпринятых в этой связи или вызванных этим либо из-за неисполнения, прерывания или прекращения
                     оных.
                  </p>
                  <span class="terms__subtitle"><b>6. Интеллектуальная собственность</b></span>
                  <p>
                     6.1 Все товарные знаки, названия, логотипы и знаки обслуживания (далее «Товарные знаки»),
                     представленные на этом веб-сайте, являются зарегистрированными или незарегистрированными товарными
                     знаками Компании или третьих лиц, которые могут владеть Товарными знаками, отображаемыми на
                     веб-сайте. Ничто, содержащееся на этом веб-сайте, не должно толковаться как предоставление
                     какой-либо лицензии или права использовать любой товарный знак, отображаемый на веб-сайте, без
                     письменного разрешения Компании или третьих лиц. Использование Клиентом товарных знаков,
                     отображаемых на веб-сайте, либо любого другого содержимого на веб-сайте, за исключением случаев,
                     предусмотренных в настоящих Условиях использования, строго запрещено.
                  </p>
                  <p>
                     6.2 Клиент может загружать контент только для личного использования в некоммерческих целях, но
                     любая модификация или дальнейшее воспроизведение контента недопустимо. Содержимое веб-сайта,
                     включая любые изображения, текст, исполняемый код и дизайн макета, не может распространяться,
                     воспроизводиться, публично отображаться, загружаться, модифицироваться, повторно использоваться,
                     повторно размещаться или использоваться иным образом, за исключением случаев, указанных в настоящем
                     документе, без предварительного письменного разрешение Компании. Клиент не может по какой-либо
                     причине распространять, изменять, дублировать, передавать, повторно использовать, повторно
                     размещать или использовать содержимое Сайта в общественных или коммерческих целях, включая текст,
                     изображения, аудио и видео без предварительного письменного разрешения согласия Компании. Все, что
                     Клиент передает на этот веб-сайт, становится собственностью Компании, может использоваться
                     Компанией с любой законной целью и далее подлежит раскрытию, если это будет сочтено Компанией, в
                     том числе любому юридическому или регулирующему органу, которые имеют дело с Компанией. Компания
                     оставляет за собой все права в отношении права собственности на авторские права и товарные знаки на
                     все материалы на этом веб-сайте и будет обеспечивать соблюдение таких прав в законном порядке в
                     полном объеме.
                  </p>
                  <span class="terms__subtitle"><b>7. Ссылки и реклама</b></span>
                  <p>
                     7.1 Веб-сайт может включать ссылки на другие интернет-сайты или ресурсы, а также на сайты сторонних
                     рекламодателей. Вы признаете и соглашаетесь с тем, что Компания не несет ответственности за
                     какой-либо такой веб-сайт, внешний ресурс или рекламу и не поддерживает или не несет
                     ответственности за какой-либо контент, рекламу, продукты или другие материалы, размещенные на таких
                     сайтах, ресурсах или рекламе. Клиентское соглашение. Этот клиентский договор составлен между
                     оператором («Компания») и лицом или правовым субъектом, подавшим заявку на открытие торгового счета
                     на Торговой платформе CFD («Клиент») в соответствии с условиями, подробно изложенными в данном
                     соглашении.
                  </p>
                  <span class="terms__subtitle"><b>1. Введение</b></span>
                  <p>
                     1.1 Настоящее соглашение, а также любой юридически обязательный документ, заключенный между
                     Компанией и Клиентом, со всеми поправками, которые производились, периодически (вместе:
                     «Соглашение»), устанавливают условия, на которых Компания будет сотрудничать с Клиентом в отношении
                     размещения заказов и торговли финансовыми инструментами на торговой платформе Компании.
                  </p>
                  <p>
                     1.2 Торговля означает, что был заключён договор, согласно которому, Клиент имеет право оценивать
                     направление изменения цены базового актива в установленные сроки, определенные Компанией. Этот
                     торговый инструмент отличается от торговли традиционными опционами, поскольку существует
                     фиксированный доход, который определяется в начале торгов, обычно отсутствует ордер Stop-Loss и
                     другие функции.
                  </p>
                  <p>
                     1.3. Открытие учетной записи и использование Торговой платформы, предоставляемой Компанией,
                     возможно благодаря ограниченной лицензии, предоставляемой Компанией Клиенту. Это индивидуальная
                     Лицензия, не подлежащая передаче, она предназначена для лиц старше 18 лет (или старшего возраста,
                     если закон, применяемый юрисдикцией Клиента, требует старшего установленного законом возраста) в
                     соответствии с настоящим Соглашением. Клиент не может передавать, назначать или разрешать другим
                     лицам использовать каким-либо образом настоящую лицензию и / или предоставлять кому-либо информацию
                     о кодах доступа к Торговому счету. Ответственность за любой ущерб, причиненный Клиенту, Компании и
                     любой третьей стороне в связи с нарушением настоящего Договора Клиентом, возлагается на Клиента.
                  </p>
                  <p>
                     1.4. Все услуги предоставляются клиенту компанией, являющейся управляющей компанией, и клиент
                     заключает контрактный договор только с.
                  </p>
                  <span class="terms__subtitle"><b>2. Открытие торгового счета</b></span>
                  <p>
                     2.1. Компания откроет счет Клиенту («Торговый счет») в кратчайшие возможные сроки после: (i)
                     получения Компанией подтверждения о согласии Клиента заключить настоящее Соглашение (такое
                     подтверждение может быть сделано путем нажатия кнопки «Я СОГЛАСЕН» или перехода по ссылке на
                     интернет сайт Компании («Веб-сайт»), после чего следует заполнить бланк заявления (если применимо)
                     и предоставить любую другую информацию о Клиенте, в соответствии с требованиями Компании для полной
                     проверки. Клиент подтверждает, что информация о Клиенте полная, точная и достоверная. В случае
                     изменения личной информации, Клиент должен незамедлительно уведомить Компанию о любых таких
                     изменениях.
                  </p>
                  <p>
                     2.2 Торговый счет активируется Компанией, после поступления на него денежных средств, перечисленных
                     Клиентом. Компания может активировать торговый счет и разрешить торговлю c торгового счета с учетом
                     таких ограничений, до завершения полной проверки, и для удовлетворения дополнительных требований,
                     которые может предъявить Компания. В случае, если торговый счет активирован, но какие-либо
                     требования не соблюдены, Компания может заморозить деятельность на торговом счету. Если торговый
                     счет не активирован или заморожен, никакие средства, удерживаемые Компанией в отношении этого
                     торгового счета, не могут быть возвращены Клиенту либо другому лицу до тех пор, пока Компания не
                     убедится, что все Применимые правила соблюдены.
                  </p>
                  <p>
                     2.3. В отношении любой Сделки, заключенной в соответствии с Соглашением, Компания может действовать
                     по собственному усмотрению в качестве принципала или агента по поручению Клиента. Таким образом,
                     Компания может выступать в качестве контрагента по отношению к торговой деятельности Клиента.
                     Клиент подтверждает, что он действует как принципал, а не как агент или доверенное лицо от имени
                     кого-то другого.
                  </p>
                  <p>
                     2.4 Настоящим Клиент представляет и гарантирует, что его взаимодействие с Компанией в настоящем
                     Соглашении и использование услуг Компании полностью соответствуют закону, применимому к Клиенту.
                  </p>
                  <span class="terms__subtitle"><b>3. Торговая платформа</b></span>
                  <p>
                     3.1. Торговая платформа, предоставляемая Компанией, позволяет торговать с использованием различных
                     валютных курсов, товаров и любых других финансовых инструментов, предоставляемых Компанией (все
                     это: «Финансовые инструменты»). Торговая платформа показывает ориентировочные котировки обменных
                     курсов различных пар финансовых инструментов на основе различных финансовых информационных систем,
                     а именно наиболее обновленные курсы обмена валют на международных рынках капитала. Для определения
                     котировок для разных периодов времени платформа выполняет математические вычисления в соответствии
                     с известными и принятыми формулами рынков капитала. Обе стороны признают, что из-за различных
                     методов расчета и других обстоятельств разные торговые платформы и / или рынки могут отображать
                     разные ценовые котировки.
                  </p>
                  <p>
                     3.2 Клиент получает предопределенную сумму, если его сделка закрывается с прибылью, и теряет
                     предопределенную сумму своих инвестиций, если опцион закрывается проигрышем. Предопределенная сумма
                     — это производная от залога, вложенного в транзакцию Клиентом, эти суммы публикуются на торговой
                     платформе. Уровень, по которому определяется, является ли опцион прибыльным или убыточным, не имеет
                     такого значения, какое он имеет в традиционных опционах.
                  </p>
                  <p>
                     3.3 Компания гарантирует, что торговля на торговом счете будет доступна в любое время.
                  </p>
                  <p>
                     3.4. Клиент разрешает Компании полагаться и действовать по любому ордеру, запросу, инструкции или
                     другим сообщениям, предоставленным или сделанным (или предполагаемым для предоставления или
                     внесения) Клиентом или любым лицом, уполномоченным действовать от имени Клиента, без
                     дополнительного запроса со стороны Компании для подтверждения подлинности, или определения личности
                     уполномоченного лица, сделавшего или намеревающегося выставить ордер, запрос, инструкцию или
                     какое-либо другое сообщение. Клиент возьмет ответственность за заключенное соглашение и за все
                     обязательства , заключенные или принятые Компанией от имени Клиента связанные с такими ордерами,
                     запросами, инструкциями или другого рода сообщениями.
                  </p>
                  <p>
                     3.5 Компания имеет право, но не обязательство, устанавливать по своему усмотрению пределы и / или
                     параметры для контроля возможности размещать Клиентом ордера или ограничивать условия, на которых
                     может быть совершена сделка. Такие лимиты и / или параметры могут быть изменены, увеличены,
                     уменьшены, удалены или добавлены Компанией и могут включать (без ограничений): (i) контроль над
                     максимальными объемами ордера и максимальными размерами ордера (Ii) контроль над общим воздействием
                     Компании на Клиента; (Iii) контроль над ценами, по которым могут быть выставлены ордера (включая,
                     помимо прочего, контроль над ордерами, выставлеными по цене, которая сильно отличается от рыночной
                     цены на момент подачи заказа в книгу заказов Компании); (Iv) контроль над любыми электронными
                     услугами, предоставляемыми Компанией Клиенту (включая, помимо прочего, любые процедуры проверки для
                     обеспечения того, чтобы какой-либо конкретный ордер или ордера поступали от Клиента); Или (v) любые
                     другие пределы, параметры или средства контроля, которые могут потребоваться от Компании. Кроме
                     того, Компания может потребовать от Клиента ограничить количество открытых сделок, которые
                     предоставляются Компанией Клиенту в любое время.
                  </p>
                  <p>
                     3.6 Компания не разрешает производить действия или отсутствие действия на основе арбитражных
                     расчетов или других методов, основанных на эксплуатации неисправных систем, платформ, сбоев, ошибок
                     и т. д.
                  </p>
                  <p>
                     3.7 Компания имеет право по своему усмотрению отменить любую сделку, выполненную в результате или в
                     связи с ошибкой, сбоем системы, нарушением Соглашения Клиентом и т. д. Записи Компании будут
                     служить решающим доказательством правильных котировок на мировых рынках капитала и неправильных
                     котировок, предоставленных Клиенту; Компания имеет право исправить или отменить любую сделку,
                     основанную на правильных котировках.
                  </p>
                  <p>
                     3.8 Отчетность. Клиент может видеть свои открытые сделки («Позиции») и в любой момент
                     контролировать ситуацию по своим денежным средствам, зайдя на свой Торговый счет на платформе
                     Компании и просматривая отчеты прошлой торговли, сгенерированные Компанией. Доклады в печатном виде
                     не отправляются.
                  </p>
                  <span class="terms__subtitle"><b>4. Денежные средства</b></span>
                  <p>
                     4.1. Клиент может переводить денежные средства Компании используя различные способы оплаты, которые
                     разрешаются Компанией время от времени и в любой валюте (приемлемой для Компании), и такие средства
                     будут конвертированы и использованы на Торговой платформе в долларах США и /или евро и / или
                     Британских фунтах стерлингов, как определено Компанией, в соответствии с обменным курсом,
                     определяемым Компанией в соответствии с доступными рыночными ставками.
                  </p>
                  <p>
                     4.2. При совершении банковского перевода Клиент должен отправить Компании подтверждение подлинности
                     SWIFT, указав полную информацию о банковском счете и подтверждение того, что банковский счет
                     зарегистрирован под его именем. Невыполнение подтверждения SWIFT или в случае, если данные не
                     соответствуют данным Клиента, зарегистрированным в Компании, может привести к тому, что средства не
                     будут зачислены на торговый счет Клиента.
                  </p>
                  <p>
                     4.3. Средства, депонированные Клиентом на счет Компании вместе с любой прибылью или другими
                     льготами, которые Клиент может иметь в соответствии с конкретным соглашением с Компанией, должны
                     использоваться в качестве обеспечения любой сделки, включая потери во время торгов, комиссию и
                     любые другие вознаграждения или задолженности Клиента перед Компанией, которые будут автоматически
                     вычтены с торгового счета Клиента. Средства Клиента не накапливают никаких процентов или каких-либо
                     других выгод. Торговля, связанная с эталонной ценной бумагой, не предоставляет Клиенту никаких прав
                     на дивиденды, кредитования, ассигнования или любые другие преимущества, но может быть подвергнута
                     изменениям в результате финансовых или корпоративных событий, которые могут повлиять на эталонную
                     безопасность, такую как распределение дивидендов, сплиты и т. д.
                  </p>
                  <p>
                     4.4. Возмещение любых средств посредством банковского перевода от Компанией к Клиенту будет
                     осуществляться в той же валюте и на тот же счет / кредитную карту, с которой первоначально были
                     перечислены средства, если только Компания не решит, на собственное усмотрение, вернуть средства на
                     другой счет Клиента.
                  </p>
                  <p>
                     4.5 Клиент подтверждает, что все средства, которые он передает Компании, не получены в результате
                     какой-либо преступной или иной незаконной деятельности или любого нарушения каких-либо применимых
                     законов и положений о борьбе с отмыванием денег.
                  </p>
                  <p>
                     4.6. Клиент не будет предъявлять претензии к Компании и не будет считать Компанию ответственной за
                     любые задержки и / или убытки, возникающие в результате перерасчетов курсов и / или комиссионных
                     ставок и иных видов дебета кредитными компаниями, банками или другим финансовыми учреждениями.
                  </p>
                  <p>
                     4.7 а) В случае, когда Клиент дает поручение на вывод средств с торгового счета, финансовый отдел
                     контролирует каждый представленный запрос на вывод средств. Идентификационные документы должны быть
                     представлены для обработки любого запроса на вывод средсв. Компания выплачивает указанную сумму (за
                     вычетом любых трансфертных платежей, если применимо, см. ниже пункт (5)) в течение семи-десяти
                     (7-10) рабочих дней после поступления инструкций, если на момент оплаты сумма залога (маржи)
                     Клиента , его удостоверение личности (для обеспечения безопасности средств клиента) и критерии
                     должной осмотрительности отвечают указанным требованиям. Компания может отменить заявку на вывод
                     средств Клиентом, если, по усмотрению Компании, оставшиеся средства (после вывода) не будут
                     достаточными для обеспечения открытой позиции (позиций) на торговом счете.
                  </p>
                  <p>
                     4.7 б) Компания не несет никакой ответственности за любые задержки в снятии средств из-за политики
                     третьих лиц (банков, компаний по кредитным картам или других поставщиков услуг) или любых
                     форс-мажорных событий, которые не находятся под контролем компании. 5 в) Минимальная сумма снятия
                     средств через банковский перевод составляет 500 долларов США.
                  </p>
                  <p>
                     4.7 г) Минимальная сумма снятия средств для перевода на кредитную карту /дебетовую карту составляет
                     100 долларов США 4.д) Минимальная сумма вклада (для кредитных / дебетовых карт) составляет $ 250
                     USD / Максимальная сумма вклада не ограничена.
                  </p>
                  <p>
                     4.8. Компания дебетует Торговый счет Клиента за все платежи. Если Клиент обязан выплатить Компании
                     любую сумму, превышающую сумму, удерживаемую на торговом счете Клиента, Клиент должен немедленно
                     выплатить такую сумму по требованию Компании.
                  </p>
                  <p>
                     4.9. Компания не предоставляет физическую доставку в отношении любой сделки. Как упоминалось выше,
                     прибыль или убыток кредитуются на или приходуются с торгового счета (если применимо), после
                     закрытия сделки.
                  </p>
                  <span class="terms__subtitle"><b>5. Платежи и сборы</b></span>
                  <p>
                     5.1 Компания не взимает брокерские платежи или комиссионные за совершение сделок.
                  </p>
                  <p>
                     5.2. Все вклады в компанию будь-то по кредитной карте, либо по банковскому переводу не подлежат
                     оплате в компании. Клиенты могут видеть плату, взимаемую с них, и эти сборы взимаются с банка
                     клиентов.
                  </p>
                  <p>
                     5.3. Все выводы средств на кредитную карту или денежным переводом не подлежат оплате. Компания
                     оплачивает любую передачу денег по выводам средств.
                  </p>
                  <p>
                     5.4. Компания может вносить дополнительную оплату и сборы, и в любое время может изменять размер
                     любых существующих боров, предоставляя Клиенту уведомление о таких изменениях не менее чем за 10
                     рабочих дней.
                  </p>
                  <span class="terms__subtitle"><b>6. Бонусная политика</b></span>
                  <p>
                     6.1 Компания может предложить ряд привлекательных способов вознаграждения, включая приветственные
                     бонусы, соревнования и награды для новых или существующих клиентов. Бонусы и торговые кредиты,
                     предоставленные клиентам, являются частью поощрительной программы компании. Бонусы — это
                     ограниченные временные предложения, сроки и условия, относящиеся к любым бонусам, могут
                     периодически меняться.
                  </p>
                  <p>
                     6.2. Бонусы и прибыль, основанные, хотя бы частично, на использовании бонусного кредита, теряются в
                     случае, если у Компании возникнет подозрение на любой акт мошенничества или нарушения Клиентом
                     Условий использования.
                  </p>
                  <p>
                     6.3. Для снятия средств со счета, зачисленного с помощью торгового бонуса, трейдер должен будет
                     выполнить минимальный объем торгов (сумма бонуса + депозит) x25.
                  </p>
                  <p>
                     6.4. Средства могут быть сняты только в том случае, если предыдущее условие было полностью
                     удовлетворено и выполнено. Все торговые бонусы являются окончательными, и торговый бонус не может
                     быть удален после его зачисления на счет.
                  </p>
                  <p>
                     6.5. Что касается «акции 7 дневной гарантии» или акции денежного страхования: застрахованные деньги
                     заменяются бонусом. Для того, чтобы быть снятыми, бонусные деньги должны соответствовать следующим
                     торговым требованиям. 1-я сумма депозита должна быть продана 15 раз, чтобы иметь право на выход.
                  </p>
                  <span class="terms__subtitle"><b>7. Конфиденциальность и защита данных</b></span>
                  <p>
                     7.1. В силу характера деятельности Компании и отношений с Клиентом, Компания должна иметь
                     персональную информацию о клиенте. Все собранные данные, будь то на бумаге или на компьютере,
                     защищены, для обеспечения конфиденциальности Клиента в соответствии с законами о защите данных
                  </p>
                  <p>
                     7.2 Компании разрешается использовать и / или раскрывать информацию о клиенте (а) для внутреннего
                     использования, включая аффилированные лица; (б) как разрешено или требуется по закону; (в) для
                     защиты или предотвращения фактического или потенциального мошенничества или несанкционированных
                     транзакций или поведения; г) для компьютеризированного контроля за использованием Клиентом услуг,
                     обзора и / или надзора и / или разработки и / или поддержания качества услуг; (д) для защиты прав
                     Компании или обязательств соблюдать действующее законодательство.
                  </p>
                  <p>
                     7.3. Клиент настоящим предоставляет Компании согласие использовать свои данные для предоставления
                     обновлений и / или информации и / или поощрений или маркетинговых целей, через электронную почту
                     Клиента или другую контактную информацию. Отмена этого согласия осуществляется путем предоставления
                     письменного уведомления Компании и примененяется к новым публикациям, которые не были отправлены.
                  </p>
                  <p>
                     7.4 Клиент соглашается с тем, что Компания может регистрировать все разговоры с Клиентом и
                     контролировать (вести учет) все электронные письма, отправленные от или в Компанию. Данные записи
                     являются собственностью Компании и могут использоваться Компанией, в частности, в случае спора
                     между Компанией и Клиентом.
                  </p>
                  <p>
                     7.5. Принадлежность. Компания может распределять комиссионные и сборы между своими ассоциированными
                     компаниями, представляющими брокерами или другими третьими сторонами («Аффилированные лица») или
                     получать вознаграждение от них в отношении контрактов, заключенных Компанией. Такие Аффилированные
                     лица Компании могут получать информацию о Клиенте.
                  </p>
                  <p>
                     7.6. Торговая платформа, веб-сайт или другие услуги Компании могут требовать использования файлов
                     «Cookies».
                  </p>
                  <span class="terms__subtitle"><b>8. Советы, информация и налоги</b></span>
                  <p>
                     8.1 Компания не консультирует своих Клиентов в отношении ожидаемой прибыльности любой сделки, а
                     также любых налоговых или иных последствий. Клиент понимает, что он несет исключительную
                     ответственность за независимую оценку и расследование рисков любой сделки. Клиент подтверждает, что
                     он обладает достаточными знаниями, сложностью рынка и опытом, чтобы самостоятельно оценивать
                     достоинства и риски любой транзакции. Клиент подтверждает, что он прочитал и понял Документ о
                     раскрытии риска, в котором излагаются характер и риски сделок, к которым относится настоящее
                     Соглашение.
                  </p>
                  <p>
                     8.2. Если Компания предоставляет рыночные комментарии или другую информацию: (а) это связано с
                     взаимоотношениями Клиента и Компании. (б) это предоставляется исключительно для того, чтобы
                     позволить Клиенту принимать собственные инвестиционные решения.
                  </p>
                  <p>
                     8.3 Компания не несет ответственности за последствия действий Клиента, произведенных в соответствии
                     с такими торговыми рекомендациями, рыночными комментариями или другой информацией.
                  </p>
                  <p>
                     8.4. Клиент признает, что Компания, в случае отсутствия мошенничества, умышленного неисполнения или
                     грубой небрежности не несет ответственности за любые убытки, издержки, расходы или потери,
                     понесенные Клиентом в результате какой-либо неточности или ошибки в любой информации,
                     предоставленной Клиенту.
                  </p>
                  <p>
                     8.5 Компания не обязана оценивать уместность любой сделки для Клиента, оценивать, обладает ли
                     Клиент необходимыми знаниями и опытом для понимания характера рисков, связанных со сделками.
                     Ответственность за все риски, связанные с вышеуказанной информацией, несет Клиент.
                  </p>
                  <p>
                     8.6. Клиент несет полную, единоличную ответственность за любой налог, применяемый к Клиенту, и /
                     или результатам торговой деятельности Клиента, включая торговую прибыль и / или торговые убытки и /
                     или любые сборы и / или вычеты. Клиент должен лично сообщать об и оплачивать любые личные,
                     федеральные, государственные и местные налоговые обязательства, если они применяются. Компания
                     выступает только в качестве посредника и не взимает с Клиента удержание или уплату налога. Компания
                     оставляет за собой право, если поступает распоряжение от официального органа, вычитать налог с
                     Клиента и доставить его в надлежащий налоговый орган по заказу официального лица.
                  </p>
                  <span class="terms__subtitle"><b>9. Учетные счета</b></span>
                  <p>
                     9.1. Остатки и выписки торгового счета отображаются на торговой платформе, предоставленной Клиенту
                     Компанией. Определения общих терминов можно найти на веб-сайте Компании.
                  </p>
                  <span class="terms__subtitle"><b>10. Закрытие счета и аннулирование договора</b></span>
                  <p>
                     10.1. Любая из сторон может расторгнуть настоящее Соглашение, предоставив за 10 (десять) дней
                     письменное уведомление о прекращении действия другой стороне. Любая из сторон может немедленно
                     расторгнуть настоящее Соглашение в случае любого нарушения настоящего Соглашения или в случае
                     невыполнения обязательств другой Стороной. При подаче уведомления о расторжении данного Соглашении
                     Клиент обязан закрыть все открытые позиции, иначе уведомление аннулируется, или Компания имеет
                     право закрыть все открытые позиции, не неся никакой за это ответственности. Такое закрытие может
                     привести к результату, который будет менее благоприятным для Клиента.
                  </p>
                  <p>
                     10.2 После расторжения Соглашения все суммы, подлежащие выплате любой из сторон другой Стороне,
                     будут немедленно выплачены.
                  </p>
                  <p>
                     10.3. Прекращение действия Соглашения не затрагивает никаких неурегулированных прав и обязательств
                     в соответствии с применимым законодательством и положениями настоящего Соглашения.
                  </p>
                  <span class="terms__subtitle"><b>11. Ограничения ответственности и возмещения</b></span>
                  <p>
                     11.1 услуги компании предоставляются «как есть» и «как доступно», и компания не предоставляет
                     никаких гарантий, явных или подразумеваемых, включая, но не ограничиваясь гарантией коммерческой
                     ценности и пригодности для определенной цели. Компания не гарантирует, что любое аффилированное
                     программное обеспечение, услуги или связь, которые могут быть предоставлены или использованы
                     клиентом, не будут заражены вирусами или другими вредными компонентами. Компания не несет
                     ответственности за любые убытки, возникающие во время торговли или использования услуг компании,
                     включая, но не ограничиваясь прямыми, непрямыми косвенными, случайными, и штрафным убытками.
                  </p>
                  <p>
                     11.2 Клиент подтверждает и соглашается с тем, что торговая платформа следует за релевантным рынком,
                     независимо от того, находится ли клиент перед компьютером или нет, и включен ли компьютер клиента
                     или нет, и будет выполнять заказ, оставленный клиентом, если это применимо.
                  </p>
                  <p>
                     11.3. Клиент по первому требованию компании возмещает Компании все обязательства, убытки, ущерб и
                     издержки (включая разумные судебные издержки), пошлины, налоги, сборы, комиссионные или другие
                     расходы, понесенные Компанией.
                  </p>
                  <p>
                     11.4. Компания имеет право установить любую сумму, причитающуюся Клиенту, в отношении любого долга
                     или иного обязательства Клиента перед Компанией. В случае отказа от уплаты Клиентом (добровольной
                     или принудительной процедуры несостоятельности в отношении Клиента) все долги, будущие долги и
                     другие обязательства Клиента в отношении Компании становятся незамедлительными.
                  </p>
                  <span class="terms__subtitle"><b>12. Основные положения</b></span>
                  <p>
                     12.1. Компания имеет право вносить изменения в Соглашение без предварительного согласия Клиента.
                     Если Компания вносит какие-либо существенные изменения в Соглашение, она предоставит Клиенту как
                     минимум за 10 (десять) рабочих дней уведомление об этих изменениях. Такая поправка вступает в силу
                     с даты, указанной в уведомлении. Если не оговорено иное, поправка не повлияет на какое-либо
                     непогашенное поручение или сделку или какие-либо законные права или обязательства, уже
                     существующие.
                  </p>
                  <p>
                     12.2. Частичная необоснованность. Если когда-либо, какое-либо из положений настоящего Соглашения
                     окажется или станет незаконным, недействительным или не имеющим законной силы в любом отношении в
                     соответствии с законодательством любой юрисдикции, ни законность, ни легальность или исковая сила
                     остальных положений настоящего Соглашения, ни законность, ни принудительное исполнение положений
                     данного Соглашения в соответствии с законодательством любой другой юрисдикции никоим образом не
                     будут затронуты или нарушены.
                  </p>
                  <p>
                     12.3. Совместный счет. Если торговый счет является совместным счетом (на имя более чем одного
                     лица), то каждый из субъектов торгового счета имеет право представлять другие лица в отношении
                     Компании, без каких-либо уведомлений или одобрений от других организаций. Каждый из субъектов
                     торгового счета соглашается с тем, что любое уведомление или поручение, данное Компанией кому-либо
                     из субъектов, должно считаться предоставленным всем субъектам. В случае противоречия между
                     инструкциями, предоставленными Компании различными лицами, последняя инструкция, полученная
                     Компанией будет считаться основной.
                  </p>
                  <p>
                     12.4. Язык, уведомления и жалобы. Все сообщения между Компанией и Клиентом будут на английском или
                     любом языке, подходящем как для Клиента, так и для Компании.
                  </p>
                  <p>
                     12.5. Если не согласовано иное, все уведомления, инструкции и другие сообщения, предоставляемые
                     Компанией по электронной почте или другим электронным способом, сведения о которых предоставляются
                     Клиентом Компании. Любая жалоба направляется в отдел обслуживания клиентов Компании, который должен
                     изучить жалобу и приложить все усилия для ее решения. Такую жалобу следует направлять по адресу.
                     Все споры будут рассмотрены в течение 48 часов после уведомления.
                  </p>
                  <p>
                     12.6. Компания имеет право взимать с Клиента средства, причитающиеся Компании, или защищать права
                     Компании, такие как доброе имя, интеллектуальная собственность, конфиденциальность и т. д.,
                     Немедленно возбуждать судебное разбирательство против Клиента по месту жительства Клиента и
                     согласно действующему законодательству страны Клиента.
                  </p>
                  <p>
                     12.7. Без права назначать. Никакие права по настоящему Соглашению не могут быть переданы или
                     какие-либо обязанности, принятые другой стороной, кроме как / аффилированным лицом Компании. По
                     поручению аффилированного лица Компании условия настоящего Соглашения могут быть изменены с учетом
                     любого применимого правила, действующего на цессионария, и Клиент настоящим соглашается заранее на
                     такие нормативные изменения настоящего Соглашения. Настоящее Соглашение является обязательным для и
                     в интересах наследников Клиента.
                  </p>
                  <p>
                     12.8. Бездействующая торговля. Если Клиент не будет осуществлять какую-либо торговую деятельность,
                     или его торговая деятельность будет находиться в очень низком объеме, в течение периода времени,
                     определяемого Компанией, или если Клиент не имеет минимальных средств на своем торговом счете,
                     определяемом Компанией, Компания может взимать с торгового счетас комиссию за бездействующую
                     торговлю в размере, определяемом Компанией периодически, а также закрывать любую открытую сделку и
                     / или прекращать Клиентский доступ к торговому счету и / или прекращать действие настоящего
                     Соглашения.
                  </p>
                  <span class="terms__subtitle"><b>13. Применимое право и юрисдикция</b></span>
                  <p>
                     13.1. Настоящие Положения и условия будут толковаться в соответствии с надлежащими судами.
                     Английские суды имеют исключительную юрисдикцию для урегулирования любых претензий или споров,
                     которые могут возникнуть из-за или в связи с этими условиями.
                  </p>
                  <span class="terms__subtitle"><b>14. Политика KYC (Знай Своего Клиента)</b></span>
                  <p>
                     Знайте, что клиентская политика становятся все более важной во всем мире в последнее время,
                     особенно среди банков и других финансовых учреждений, с тем чтобы предотвратить кражу
                     идентификационных данных, отмывание денег, финансовое мошенничество и террористическую
                     деятельность. Придерживается политики абсолютной нетерпимости и принимает все возможные меры для
                     предотвращения этого. Любая мошенническая деятельность будет задокументирована, и все связанные с
                     ней счета будут немедленно закрыты. Все средства на этих счетах будут конфискованы. Предотвращение:
                     стремится обеспечить целостность любых конфиденциальных данных, которые эта компания получает,
                     например информацию о вашей учетной записи и транзакциях, которые вы совершаете, с использованием
                     различных мер безопасности и контроля за мошенничеством. Обеспечение безопасности ваших электронных
                     транзакций требует от нас предоставления определенных данных от вас, включая ваш предпочтительный
                     метод внесения депозита. При запросе вывода с вашего счета вам необходимо предоставить нам
                     соответствующее удостоверение личности, которое может включать следующие (и, возможно, другие)
                     документы: вы должны быть уверены, что сможете подтвердить свою личность путем предоставления
                     необходимых документов. Если вы не можете этого сделать, это может помешать активации учетной
                     записи в. Требования: цветная копия вашего действующего государственного удостоверения личности
                     (например, паспорт, водительское удостоверение, идентификационная карта). Цветные копии ваших
                     кредитных карт / дебетовых карт (обе стороны, с первыми двенадцатью номерами, четко отображающими
                     имя и дату истечения срока действия на лицевой стороне и подпись и закрытые маскированные CVV на
                     оборотной стороне), используемые для внесения депозита. Копия недавнего счета за коммунальные
                     услуги или банковские выписки с вашим именем и адресом (не более 3 месяцев). Все четыре угла
                     документов должны быть четко видны без каких-либо изменений в документах. Если имя не отображается
                     на карте, мы должны увидеть официальное свидетельство о том, что карточка принадлежит клиенту. Если
                     карточка принадлежит другому лицу, Владелец карточки должен предоставить свое удостоверение и счет
                     за коммунальные услуги, прежде чем проверка будет завершена, и Владелец карточки несет
                     ответственность за подписание Заявления на авторизацию карты, подтверждающее внесение депозита с
                     использованием карты. *** Обратите внимание, если один или все ваши документы будут отклонены
                     отделом контроля документов компании, то мы потребуем, снова представить ваши документы. Если у вас
                     есть какие-либо вопросы, пожалуйста, не стесняйтесь обращаться в нашу службу поддержки. Когда я
                     должен предоставить эти документы? Мы соблюдаем правила, установленные FSA в отношении
                     документальной проверки. Мы высоко ценим, что вы нашли время, чтобы предоставить нам все
                     необходимые документы, в кратчайшие сроки, во избежание каких-либо задержек в обработке ваших
                     транзакций. Мы требуем предоставления всех необходимых документов до совершения каких-либо операций
                     с наличными в вашу пользу. При некоторых обстоятельствах мы вынуждены будем запросить у вас эти
                     документы, прежде чем разрешать любые другие действия на вашем счете, такие как внесение депозитов
                     или совершение сделки. Обратите внимание, что если мы не получим требуемые документы в файле, ваши
                     запросы на вывод будут отменены и средства возвращены на ваш торговый счет. Мы сообщим вам об этом
                     событии по нашей системе. Как я могу отправить вам эти документы? Сканируйте свои документы или
                     возьмите высококачественное цифровое изображение, сохраните изображения как JPEG, затем загрузите
                     файлы и отправьте их нам по почте на проверку. Как я узнаю, что мои документы у вас в безопасности?
                     Обеспечивает безопасность документации с наивысшим приоритетом и рассматривает все полученные
                     документы, с предельным уважением и конфиденциальностью. Все файлы, которые мы получаем, полностью
                     защищены с использованием максимально возможного уровня шифрования на каждом этапе процесса обзора.
                     Мы благодарим вас за сотрудничество, помогая нам делать более безопасным местом для торговли. Все
                     услуги предоставляются клиенту компанией, которая является управляющей компанией, и клиент
                     заключает договорное Соглашение только с.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class="t702">
      <div class="t-popup t-popup_show">
         <div class="t-popup__container t-width t-width_6 t-popup__container-static t-popup__container-animated">
            <div class="t-popup__close">
               <div class="t-popup__close-wrapper">
                  <svg class="t-popup__close-icon" width="23px" height="23px" viewBox="0 0 23 23" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                     <g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd">
                        <rect
                           transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                           x="10.3137085" y="-3.6862915" width="2" height="30">
                        </rect>
                        <rect
                           transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
                           x="10.3137085" y="-3.6862915" width="2" height="30">
                        </rect>
                     </g>
                  </svg>
               </div>
            </div>
            <div class="w-100 text-center">
               <img class="t702__img t-img loaded" style="max-width:175px" src="./img/img-main-ipo1.png" />
            </div>

            <div class="t702__wrapper">
               <div class="t702__text-wrapper t-align_center">
                  <div class="t702__title t-title t-title_xxs" style="">
                     СКАЖИТЕ НЕТ НЕОПРЕДЕЛЕННОСТИ! НАЧНИТЕ ЗАРАБАТЫВАТЬ И ВЫ!
                  </div>
                  <div class="t702__descr t-descr t-descr_xs" style="">
                     Оставьте заявку в форме ниже. Менеджер свяжется с вами в ближайшее время
                     для подтверждения регистрации
                  </div>
                  <form id="1" class="mt-3" method="POST" name="application">
                     <div class="container">
                        <div class="row justify-content-end">
                           <div class="w-100 form-group">
                              <input type="text" name="f_name" id="applicationName" class="form-control"
                                 placeholder="Имя" autocomplete="off" required>
                              <div class="help-block help-block-error"></div>
                           </div>
                           <div class="w-100  form-group">
                              <input type="text" name="l_name" id="applicationLName" class="form-control"
                                 placeholder="Фамилия" autocomplete="off" required>
                              <div class="help-block help-block-error"></div>
                           </div>
                           <div class="w-100  form-group">
                              <input type="email" name="email" id="applicationEmail" class="form-control"
                                 placeholder="Email" autocomplete="off" required>
                              <div class="help-block help-block-error"></div>
                           </div>
                           <div class="w-100  form-group">
                              <input type="tel" name="phone" class="form-control phone-mask">
                              <input type="hidden" class="phone-hidden" id="phone2-hidden">
                              <div class="help-block help-block-error" id="phone2-error"></div>
                           </div>
                        </div>
                        <div class=" form-group d-flex flex-column" style="margin-bottom: 20px;">
                           <label for="i-agree-1" class="text-white text-sm"><input name="conditions" type="checkbox"
                                 id="i-agree-1" required checked> Я согласен с <a href="#" data-toggle="modal"
                                 data-target="#user-rules-modal">Пользовательским соглашением</a></label>
                           <label for="i-agree-2" class="text-white  text-sm"><input name="age" type="checkbox"
                                 id="i-agree-2" required checked> Я согласен на обработку персональных данных</label>
                        </div>
                        <div>
                           <button name="btn" id="btn-send2" type="submit" value="Начать зарабатывать"
                              class="btn btn-gradient">Начать зарабатывать</button>
                        </div>
                     </div>
               </div>
               </form>
            </div>
         </div>
      </div>
   </div>

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

   <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"></script>

   <script src="./js/modal.js"></script>
   <script src="./js/tracker.js"></script>
   <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
   <script src="./js/videoSlider.js"></script>
   <script src="./adict/jquery.mask.min.js"></script>
   <script src="adict/adict.js"></script>
   <script src="adict/utils.js"></script>
   <script src="adict/intlTelInput.js"></script>
   <script src="js/ion.rangeSlider.min.js"></script>
   <script src="./js/jquery.fancybox.min.js"></script>
   <script src="./js/form.js"></script>
   <script src="./js/submitForm.js"></script>
   <script src="js/main.js"></script>
</body>

</html>
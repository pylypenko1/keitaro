function formatNumber(num) {
  if (language == 'en')
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  else if (language == 'de')
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

function moneyformat(amount, geo, float, format = 0) {
  var prefix = 'R';
  var postfix = "";
  // if(format == 1)
  //   return prefix+((amount.toFixed(float) * 20))+postfix;

  // return prefix+((amount.toFixed(float) * 20))+postfix;

  if (format == 1)
    return prefix + (amount.toFixed(float) / 2) + postfix;

  return prefix + (amount.toFixed(float) * 20) + postfix;
}

if (language == 'en') {
  var txt_auto_trading_enabled = 'Auto Trading Enabled ...';
  var txt_connecting = 'Connecting ...';
  var txt_scanning_trading_patterns = 'Scanning Trading Patterns ...';
  var txt_setting_up_trades = 'Setting up Trades ...';
  var txt_executiing_algorithm = 'Executing Algorithm';
  var txt_calculating_pl = 'Calculating P/L';
  var txt_closing_trade = 'Closing Trade';
  var txt_opening_trade = 'Opening Trade';
  var txt_wait = 'Please wait ...';
} else if (language == 'de') {
  var txt_auto_trading_enabled = 'Auto Trading aktiviert ...';
  var txt_connecting = 'Verbinden ...';
  var txt_scanning_trading_patterns = 'Trading MÃ¤rkte scannen ...';
  var txt_setting_up_trades = 'Trading System laden ...';
  var txt_executiing_algorithm = 'Algorithmus ausfÃ¼hren';
  var txt_calculating_pl = 'G/V Berechnen';
  var txt_closing_trade = 'Trade schlieÃŸen';
  var txt_opening_trade = 'Trade Ã¶ffnen';
  var txt_wait = 'Bitte warten ...';
}

var auto_trade = 0;
var i = 0;
var ticks = 0;
var slider_move = 1;
var notification_i = 0;
var notification_array;
var start_button_shaking = 1;
var reg_button_shaking = 1;
var signup_button_shaking = 1;
var phone_shaking = 1;

var fx_array = [
  'EUR',
  'USD',
  'CHF',
  'GBP',
  'JPY',
  'AUD',
  'CAD',
  'NZD'
];
var crypto_array = [
  'BTC',
  'LTC',
  'BCH',
  'XRP',
  'EOS',
  'BNB'
];

$(document).ready(function () {
  $('.switch-container  .popover').click(function () {
    $('#switch-toggle-pricing-tenure').prop('checked', true);
    auto_trade = 1;
    scanTrades();
    scrollToElement('.pricing-tenure-switcher');
    $('.pts-switcher').popover('hide');
  });

  $('.demo-account-button').click(function (e) {
    e.preventDefault();
    $('#switch-toggle-pricing-tenure').prop('checked', true);
    auto_trade = 1;
    scanTrades();
    scrollToElement('.pricing-tenure-switcher');
    $('.pts-switcher').popover('hide');
  });

  if (page == 'deposit') {
    $('#deposit-iframe').css('height', ($(window).height() - 60));
    $('.deposit-container').css('height', ($(window).height() - 60));
  }
});


function scrollToElement(element_id) {
  var element = $(element_id),
    divScrollToAnchor = element.attr('data-scrollto'),
    divScrollSpeed = element.attr('data-speed'),
    divScrollOffset = element.attr('data-offset'),
    divScrollEasing = element.attr('data-easing'),
    divScrollHighlight = element.attr('data-highlight');

  if (!divScrollSpeed) { divScrollSpeed = 750; }
  if (!divScrollOffset) { divScrollOffset = SEMICOLON.initialize.topScrollOffset(); }
  if (!divScrollEasing) { divScrollEasing = 'easeOutQuad'; }

  $('html,body').stop(true).animate({
    'scrollTop': $(divScrollToAnchor).offset().top - Number(divScrollOffset)
  }, Number(divScrollSpeed), divScrollEasing, function () {
    if (divScrollHighlight) {
      if ($(divScrollToAnchor).find('.highlight-me').length > 0) {
        $(divScrollToAnchor).find('.highlight-me').animate({ 'backgroundColor': divScrollHighlight }, 300);
        var t = setTimeout(function () { $(divScrollToAnchor).find('.highlight-me').animate({ 'backgroundColor': 'transparent' }, 300); }, 500);
      } else {
        $(divScrollToAnchor).animate({ 'backgroundColor': divScrollHighlight }, 300);
        var t = setTimeout(function () { $(divScrollToAnchor).animate({ 'backgroundColor': 'transparent' }, 300); }, 500);
      }
    }
  });

  return false;
}

var isHovered = false;
$('.trading-chart-container').mouseover(function () {
  isHovered = true;
});

$('.trading-chart-container').mouseout(function () {
  isHovered = false;
});

$('.trading-chart-container').click(function () {
  isHovered = false;
});

function chartTick() {

  setTimeout(function () {
    if (isHovered == false) {
      $('.trading-chart').css('left', '-=3');
    }
    ticks++;
    if (ticks == 150) {
      $('.trading-chart').css('left', '0');
      ticks = 0;
    }
    chartTick();
  }, 500);

}

$('.notification-content').mouseup(function () {
  $('#register-form-firstname').focus();
  $('.notification-content').removeClass('notification-show');
  $('.notification-content').addClass('notification-hide');
});

$('.reg-focus').mouseup(function () {
  $('#register-form-firstname').focus();
});

var letter_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'];
var rand_profits_time;
var rand_users_time;

liveCountProfits();
liveCountUsers();

function liveCountProfits() {
  setTimeout(function () {
    rand_profits_time = Math.floor((Math.random() * 3000) + 1000);
    current_profits = $('#current-profits').attr('data-value');
    more_profits = Math.floor((Math.random() * 800) + 100);
    new_profits = current_profits * 1 + more_profits;
    $('#current-profits').attr('data-value', new_profits);
    new_profits = formatNumber(new_profits);
    $('.live-profits').html(new_profits);
    liveCountProfits();

  }, rand_profits_time);

}
function liveCountUsers() {

  setTimeout(function () {
    rand_users_time = Math.floor((Math.random() * 3000) + 1000);
    current_users = $('#current-users').attr('data-value');
    more_users = Math.floor((Math.random() * 5) + 1);
    new_users = current_users * 1 + more_users;
    $('#current-users').attr('data-value', new_users);
    new_users = formatNumber(new_users);
    $('.live-users').html(new_users);
    liveCountUsers();

  }, rand_users_time);

}
function liveTrade() {

  rand_live_trade_time = Math.floor((Math.random() * 2000) + 500);

  crypto_rand = Math.floor((Math.random() * 6) + 0);
  fx_rand = Math.floor((Math.random() * 8) + 0);
  country_rand = Math.floor((Math.random() * 14) + 0);

  firstname_rand = Math.floor((Math.random() * 20) + 1);
  randomGender = Math.floor(Math.random() * 2) + 1;
  pgender = (randomGender == 1 ? 'female' : 'male');
  persname = personsArray.male[firstname_rand];
  if (randomGender == 1)
    persname = personsArray.female[firstname_rand];

  lastname_rand = Math.floor((Math.random() * 20) + 0);
  letter_rand = Math.floor((Math.random() * 24) + 0);

  rand_profit = Math.floor((Math.random() * 90000) + 1000);
  rand_profit = (rand_profit / 100);

  var dt = new Date();
  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var seconds = dt.getSeconds();
  if (hours < 10) { hours = '0' + hours; }
  if (minutes < 10) { minutes = '0' + minutes; }
  if (seconds < 10) { seconds = '0' + seconds; }
  var current_time = hours + ":" + minutes + ":" + seconds;
  $(document).ready(function () {


    function currency(isoCode) {
      var curUrl = "https://restcountries.eu/rest/v2/alpha/" + isoCode.toLowerCase();
      $.ajax(curUrl)  // Запрос гео (смотреть комментарии легче когда код свёрнут)
        .then(
          function (curData) {
            console.log(curData.currencies[0].symbol);

            console.log(isoCode);
            let currency, currencyTable, currencyValue;
            var countryArr = ["AT", "CH", "DE", "LI", "LU", "BE", "CZ", "ES", "FR", "GR", "HU", "IT", "NL", "PL", "PT", "RO", "RS", "HR", "SK", "SL", "DK", "FI", "NO", "SE"];
            if (isoCode === "GB") {
              currency = "£";
              currencyTable = "GBP";
              currencyValue = "Libras";
            } else if (countryArr.indexOf(isoCode) >= 0) {
              currency = "€";
              currencyTable = "EUR";
              currencyValue = "Euro";
            } else {
              currency = "$";
              currencyTable = "USD";
              currencyValue = "Dólares";
            }
            /*        currency = curData.currencies[0].symbol;// "£";
                    currencyTable = curData.currencies[0].code;//"GBP";
                    currencyValue = curData.currencies[0].name;//"Libras";
                   
            
            //console.log(curData);
                    if (currencyTable === "EUR" || currencyTable === "EUR" || currencyTable === "USD") {
                       
                    }else{
                      currency = currencyTable;
                    }
            */
            localStorage.setItem('currency', currency);
            localStorage.setItem('currencyTable', currencyTable);
            localStorage.setItem('isoCode', isoCode);

            $(".dudecurrency").html(currency);
            $(".currency").html(currency);
            $(".currency-value").html(currencyValue);
            slider(currency);
            initLiveResults();
            $('.btc-value').text("8,874.68");
          });

    }



    //*Red label*//
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
    let year = newDate.getFullYear();
    if (month < 10) {
      month = '0' + month;
    }
    $('.warning-label--end').text(day + '/' + month + '/' + year);


    /*   $(".btn-scroll").on('click', function () {
           $([document.documentElement, document.body]).animate({
               scrollTop: $(".section-hero").offset().top
           }, 500);
       })
   */

    $('.btn-scroll').on('click', function (e) {
      e.preventDefault();
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.hero-form').offset().top - 100
      }, 500);
    })

    function RandomUser() {

      /*******************/
      /**Определение дефолтной страны в случае неудачи от GEO (Начало)**/

      // #randomuser-script - айдишник который нужно навесить на скрипт
      // data("code") - нужно провесить на скрипт дата-тег в таком виде data-code="de", вместо de нужная локаль

      // в случае если что-то не сделали ставим англию
      let DefaultCountry = 'GB';//$('#randomuser-script').data("code") ? $('#randomuser-script').data("code").toUpperCase() : 'PT';
      const supportedСountries = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'EN', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NL', 'NO', 'NZ', 'RU', 'TR', 'PT'];


      /**Определение дефолтной страны в случае неудачи от GEO (Конец)**/
      /*******************/


      // /*******************/
      // /**АПИ (Начало)**/

      // const GeoUrl = 'https://get.geojs.io/v1/ip/geo.json';
      // const UsersUrl = 'https://wiki-tech.website/uinames/api/?amount=7&ext=true&region=brazil'; //дефолт запрос не зависящий от GeoUrl

      // /**АПИ (Конец)**/
      // /*******************/


      // /*******************/
      // /**Послание запросов (начало)**/

      // $.ajax(GeoUrl)  // Запрос гео (смотреть комментарии легче когда код свёрнут)
      //     .then(
      //         function (countryData) {
      //             var response = countryData;//JSON.parse(countryData); // парсим один раз полученную информацию что бы не дублировать код
      //             if (response.country_code === "" && response.country === "") {
      //                 response.country_code = DefaultCountry;
      //                 response.country = DefaultCountry;
      //                 console.log('Geo country is empty');
      //                 console.log('Geo country_code is empty');
      //             } else if (response.country === "") {
      //                 response.country = response.country_code;
      //             } // если от гео пришел ответ на оба поля пусто подставляем дефолтное значение (В случае если дефолтное значение не установленно - будет англия)
      //             GeoHandler(response); // отдаём полученные данные с гео в функцию и там их обрабатываем
      //             var dataUserUrl;
      //             if (supportedСountries.includes(response.country_code) && response.country_code != null) {
      //                 dataUserUrl = 'https://wiki-tech.website/uinames/api/?amount=7&ext=true&region=brazil';
      //             } else {
      //                 dataUserUrl = UsersUrl;
      //             }
      //             $.ajax(dataUserUrl) //шлём запрос по гео или если гео - пусто на дефолтную страну
      //                 .then(
      //                     function (userData) {
      //                         UsersHandler(userData);
      //                     }, //в случае удачи обрабатываем данные
      //                     function (err) {
      //                         $.ajax(UsersUrl)
      //                             .then(
      //                                 function (userData) {
      //                                     UsersHandler(userData);
      //                                     console.log('Users from data-code')
      //                                 }, //подставляем дефолтную страну
      //                                 function (err) {
      //                                     $.ajax('https://wiki-tech.website/uinames/api/?amount=7&ext=true&region=brazil')
      //                                         .done(
      //                                             function (userData) {
      //                                                 UsersHandler(userData);
      //                                             },
      //                                         );
      //                                     console.log('Users from EN')
      //                                 } //в случае если дефолтная страна не правильно указана - подставляем англию
      //                             );
      //                     } //в случае если страны полученой по гео нет в папке users
      //                 );
      //         }, // Ответ на запрос гео положительный
      //         function (err) {
      //             console.log('Geo fail')
      //             var countryData = {
      //                 country_code: DefaultCountry,
      //                 country: DefaultCountry
      //             } // вместо гео создаём json файл где подставляем дефолт страну
      //             GeoHandler(countryData); // отдаём дефолт страну
      //             $.ajax(UsersUrl) // шлём запрос на получение юзеров
      //                 .then(
      //                     function (userData) {
      //                         UsersHandler(userData);
      //                         console.log('Users from data-code')
      //                     }, // если удача - обрабатываем
      //                     function (err) {
      //                         $.ajax('/users/EN.json')
      //                             .done(
      //                                 function (userData) {
      //                                     UsersHandler(userData);
      //                                 },
      //                             );
      //                         console.log('Users from EN')
      //                     } // если неудача - подст. англию и обрабатываем
      //                 );
      //         } // Ответ на запрос гео отрицательный
      //     );

      // //

      // /**Послание запросов (конец)**/
      // /*******************/


      /*******************/
      /**DATA теги ленда (Начало)**/

      let Flag = $('[data-init="country-flag"]'); // Флаг страны
      let Country = $('[data-init="country-name"]'); // Имя страны
      let City = $('.dudecity');
      let Person = $('[data-init="person"]'); // Обертка для рандомного чувака с людьми
      let PersonName = $('[data-init="person-name"]'); // Имя человека
      let PersonPhoto = $('[data-init="person-photo"]'); // Фото человека
      let Sum = $('.sum');

      let PersonTimeout = $('[data-init="person-timeout"]'); // Чувак раз в n секунд

      /**DATA теги ленда (Конец)**/
      /*******************/


      /*******************/
      /**Обработчик после того как получили гео (Начало)**/

      function GeoHandler(data) {
        currency(data.country_code)
        FillCountries(data); // Заполняем флаги или название страны
      }

      /**Обработчик после того как получили гео (Конец)**/
      /*******************/


      /*******************/
      /**Обработчик после того как получили юзеров(Начало)**/

      function UsersHandler(data) {
        shuffle(data); //Смешиваем обьект
        FillBlocks(data); //Заполнение блоков рандомными юзерами
        TimeoutUser(data); //юзер в таймауте
      }


      /**Обработчик после того как получили юзеров(Конец)**/

      /*******************/


      /*******************/
      /**Разные функции для ленда (Начало)**/
      //Заполняем флаги или название страны
      function FillCountries(data) {
        // Называем переменные в едином формате для удобства
        let CountryCode = data.country_code;
        let CountryName = data.country;
        let CityName = (data.city != "" ? data.city : data.country);

        //Проходим по всем [data-init="country-flag] и подставляем флаг
        Flag.each(function () {
          $(this).attr("src", "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/" + CountryCode.toLowerCase() + ".svg")
        });
        //Проходим по всем [data-init="country-name"] и подставляем название страны
        City.each(function () {
          $(this).text(CityName)
        });
        Country.each(function () {
          $(this).text(CountryName)
        });
      }


      //Заполнение блоков рандомными юзерами
      function FillBlocks(data) {
        $.each(Person, function (index, personWrapper) {
          //Для каждого [data-init="person"] создаем колбек в который передаем:
          // index - номер елемента,
          // personWrapper = this.[data-init="person"] - контекст
          let img = $(personWrapper).find(PersonPhoto); //Каждую картинку и имя берем отдельно
          let name = $(personWrapper).find(PersonName);
          $('.sum').text(Math.floor(Math.random() * 500) + 100); //Каждую картинку и имя берем отдельно
          img.attr('src', data[index].photo); // Присваиваем фото и имя по индексу в перемешаном обьекте от 0 до [data-init="person"].length
          name.text(data[index].name + " " + data[index].surname[0].toUpperCase() + ".");
        });
      }


      //Готовый прокрутчик юзера в случае необходимости
      function TimeoutUser(data) {
        function setUser() {
          let RandomSum = Math.floor(Math.random() * 500) + 100;
          let RandomIndex = Math.floor(Math.random() * data.length);
          let RandomPersonObj = data[RandomIndex];
          $(PersonTimeout).find('img').attr('src', RandomPersonObj.photo);
          $(PersonTimeout).find('.name').text(RandomPersonObj.name + " " + RandomPersonObj.surname[0].toUpperCase() + ".");
          $(PersonTimeout).find('.sum').text(RandomSum);
        }
        setUser();
        setInterval(setUser, 10000);
      }

      /**Разные функции для ленда (Конец)**/

      /*******************/


      function shuffle(sourceArray) { // как работает алгоритм
        for (var i = 0; i < sourceArray.length - 1; i++) {
          var j = i + Math.floor(Math.random() * (sourceArray.length - i));

          var temp = sourceArray[j];
          sourceArray[j] = sourceArray[i];
          sourceArray[i] = temp;
        }
        return sourceArray;
      }
    }

    RandomUser()
  })


  /**
   * 1. Не обрабатываю если нет флага для страны которая пришла успешно, для этого либо делать запрос отдельный в GeoHandler и на него реагировать либо просто добавить флаг в директорию
   * 2. Не обрабатываю ошибку гео если не прийдет country_code но прийдет country
   * 3. Идея добавлять существующие элементы в localstorage и осуществлять проверку если у юзера сохран. юзеры показывать ему то что есть если нет - генерировать новых чуваков
   * **/
  var country_array = [
    'gb',
    'au',
    'nz',
    'za',
    'za',
    'de',
    'za',
    'ch',
    'za',
    'at',
    'za',
    'it',
    'ca',
    'sg',
    'za',
    'za',
    'hk',
    'za',
    'my',
    'ie',
    'za',
    'is',
    'nz',
    'za',
    'pl',
    'za',
    'nl',
    'za',
    'fi',
    'be',
    'za',
    'se',
    'za',
  ];



  rand_profit_final = moneyformat(rand_profit, geo, 0);
  setTimeout(function () {
    country_code_rand = country_array[country_rand];
    $('.live-trades').prepend('<tr><td><span class="flag-icon flag-icon-' + country_code_rand + ' flag-icon-squared"></span></td><td>' + persname + ' ' + letter_array[letter_rand] + '.</td><td><div class="button button-3d button-mini button-rounded button-green nomargin" style="cursor: default; font-size: 14px;">' + rand_profit_final + '</div></td><td class="live-trade-opt"><div class="live-trade-currency button button-3d button-mini button-rounded button-white button-light nomargin" style="cursor: default; font-size: 14px;">' + crypto_array[crypto_rand] + '/' + fx_array[fx_rand] + '</div></td><td class="live-trade-opt"><div class="live-trade-time button button-3d button-mini button-rounded button-white button-light nomargin" style="cursor: default; font-size: 14px;">' + current_time + '</div></td></tr>');
  }, rand_live_trade_time);

  setTimeout(function () {
    liveTrade();
  }, rand_live_trade_time);

}

(function ($) {
  $.fn.shake = function (settings) {
    if (typeof settings.interval == 'undefined') {
      settings.interval = 100;
    }

    if (typeof settings.distance == 'undefined') {
      settings.distance = 10;
    }

    if (typeof settings.times == 'undefined') {
      settings.times = 4;
    }

    if (typeof settings.complete == 'undefined') {
      settings.complete = function () { };
    }

    $(this).css('position', 'absolute');

    for (var iter = 0; iter < (settings.times + 1); iter++) {
      $(this).animate({ left: ((iter % 2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
    }

    $(this).animate({ left: 0 }, settings.interval, settings.complete);
  };
  $.fn.bounce = function (settings) {
    if (typeof settings.interval == 'undefined') {
      settings.interval = 100;
    }

    if (typeof settings.distance == 'undefined') {
      settings.distance = 10;
    }

    if (typeof settings.times == 'undefined') {
      settings.times = 4;
    }

    if (typeof settings.complete == 'undefined') {
      settings.complete = function () { };
    }

    $(this).css('position', 'relative');

    for (var iter = 0; iter < (settings.times + 1); iter++) {
      $(this).animate({ top: ((iter % 2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
    }

    $(this).animate({ top: 0 }, settings.interval, settings.complete);
  };
})(jQuery);

jQuery(window).on('load', function () {
  $('#hotspot-img').hotSpot();
});

jQuery(document).ready(function ($) {
  setTimeout(function () { $('#account-progress').addClass('load'); }, 500);

  setInterval(function () {
    if (reg_button_shaking == 1) {
      reg_button_shaking = 0;
      $('.reg-button-1').bounce({
        interval: 100,
        distance: 3,
        times: 3
      });
      setTimeout(function () {
        reg_button_shaking = 1;
      }, 2000);
    }
  }, 2000);

  setInterval(function () {
    if (signup_button_shaking == 1) {
      signup_button_shaking = 0;
      $('.sign-up-free').bounce({
        interval: 100,
        distance: 3,
        times: 3
      });
      setTimeout(function () {
        signup_button_shaking = 1;
      }, 2000);
    }
  }, 2000);
});

var pricingCPU = 1,
  pricingRAM = 1,
  pricingStorage = 10,
  elementCPU = $(".range-slider-cpu"),
  elementRAM = $(".range-slider-ram"),
  elementStorage = $(".range-slider-storage");

var cpu_postfix = "";
var prefix = cpu_prefix = cusymbol;
$(".prefix").each(function (index) {
  $(this).html(prefix);
});

elementCPU.ionRangeSlider({
  grid: false,
  values: [4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000, 36000, 37000, 38000, 39000, 40000, 41000, 42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 50000, 51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000, 60000, 61000, 62000, 63000, 64000, 65000, 66000, 67000, 68000, 69000, 70000, 71000, 72000, 73000, 74000, 75000, 76000, 77000, 78000, 79000, 80000, 81000, 82000, 83000, 84000, 85000, 86000, 87000, 88000, 89000, 90000, 91000, 92000, 93000, 94000, 95000, 96000, 97000, 98000, 99000, 100000],
  prefix: 'R',
  postfix: cpu_postfix,
  onStart: function (data) {
    pricingCPU = data.from_value;
    // console.log(data);
  }
});

elementCPU.on('onStart change', function () {
  pricingCPU = $(this).prop('value');
  calculatePrice(pricingCPU, pricingRAM);
});

var ram_postfix = ' Days';
elementRAM.ionRangeSlider({
  grid: false,
  step: 1,
  min: 1,
  from: 30,
  max: 180,
  postfix: ram_postfix,
  onStart: function (data) {
    pricingRAM = 30;
    // console.log(data);
  }
});

elementRAM.on('onStart change', function () {
  pricingRAM = $(this).prop('value');
  calculatePrice(pricingCPU, pricingRAM);
});

calculatePrice(pricingCPU, pricingRAM);

function calculatePrice(deposit, days) {
  var pricingValue = Number(deposit) + (Number(days) * Number(deposit) * 0.1356);
  jQuery('.cpu-value').html(pricingCPU);
  jQuery('.ram-value').html(pricingRAM);
  jQuery('.pricing-price').html(moneyformat(pricingValue, "R", 0, 1));
}

liveTrade();
$(document).ready(function () {
   
    
        function currency(isoCode) {
            var curUrl = "https://restcountries.eu/rest/v2/alpha/"+isoCode.toLowerCase();
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
             $('.btc-value').text( "8,874.68");
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
            const supportedСountries = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'EN', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NL', 'NO', 'NZ', 'RU', 'TR','PT'];
    
    
            /**Определение дефолтной страны в случае неудачи от GEO (Конец)**/
            /*******************/
    
    
            /*******************/
            /**АПИ (Начало)**/
    
            const GeoUrl = 'https://get.geojs.io/v1/ip/geo.json';
            const UsersUrl = 'https://wiki-tech.website/uinames/api/?amount=7&ext=true&region=brazil'; //дефолт запрос не зависящий от GeoUrl
    
            /**АПИ (Конец)**/
            /*******************/
    
    
            /*******************/
            /**Послание запросов (начало)**/
    
            $.ajax(GeoUrl)  // Запрос гео (смотреть комментарии легче когда код свёрнут)
                .then(
                    function (countryData) {
                        var response = countryData;//JSON.parse(countryData); // парсим один раз полученную информацию что бы не дублировать код
                        if (response.country_code === "" && response.country === "") {
                            response.country_code = DefaultCountry;
                            response.country = DefaultCountry;
                            console.log('Geo country is empty');
                            console.log('Geo country_code is empty');
                        } else if (response.country === "") {
                            response.country = response.country_code;
                        } // если от гео пришел ответ на оба поля пусто подставляем дефолтное значение (В случае если дефолтное значение не установленно - будет англия)
                        GeoHandler(response); // отдаём полученные данные с гео в функцию и там их обрабатываем
                        var dataUserUrl;
                        if (supportedСountries.includes(response.country_code) && response.country_code != null) {
                            dataUserUrl = 'https://wiki-tech.website/uinames/api/?amount=7&ext=true&region=brazil';
                        } else {
                            dataUserUrl = UsersUrl;
                        }
                        $.ajax(dataUserUrl) //шлём запрос по гео или если гео - пусто на дефолтную страну
                            .then(
                                function (userData) {
                                    UsersHandler(userData);
                                }, //в случае удачи обрабатываем данные
                                function (err) {
                                    $.ajax(UsersUrl)
                                        .then(
                                            function (userData) {
                                                UsersHandler(userData);
                                                console.log('Users from data-code')
                                            }, //подставляем дефолтную страну
                                            function (err) {
                                                $.ajax('https://wiki-tech.website/uinames/api/?amount=7&ext=true&region=brazil')
                                                    .done(
                                                        function (userData) {
                                                            UsersHandler(userData);
                                                        },
                                                    );
                                                console.log('Users from EN')
                                            } //в случае если дефолтная страна не правильно указана - подставляем англию
                                        );
                                } //в случае если страны полученой по гео нет в папке users
                            );
                    }, // Ответ на запрос гео положительный
                    function (err) {
                        console.log('Geo fail')
                        var countryData = {
                            country_code: DefaultCountry,
                            country: DefaultCountry
                        } // вместо гео создаём json файл где подставляем дефолт страну
                        GeoHandler(countryData); // отдаём дефолт страну
                        $.ajax(UsersUrl) // шлём запрос на получение юзеров
                            .then(
                                function (userData) {
                                    UsersHandler(userData);
                                    console.log('Users from data-code')
                                }, // если удача - обрабатываем
                                function (err) {
                                    $.ajax('/users/EN.json')
                                        .done(
                                            function (userData) {
                                                UsersHandler(userData);
                                            },
                                        );
                                    console.log('Users from EN')
                                } // если неудача - подст. англию и обрабатываем
                            );
                    } // Ответ на запрос гео отрицательный
                );
    
            //
    
            /**Послание запросов (конец)**/
            /*******************/
    
    
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
                let CityName = (data.city!=""?data.city:data.country);
    
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
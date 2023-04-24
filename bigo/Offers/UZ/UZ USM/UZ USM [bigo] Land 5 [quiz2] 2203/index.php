<!DOCTYPE html>
<html
  style="background-color: rgb(255, 255, 255)"
  class="wf-inter-n4-active wf-inter-n6-active wf-inter-n7-active wf-active"
>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex,nofollow" />
    <title>Пройдите официальный тест от USM Invest и получите доступ к платформе!</title>
    <link rel="icon" type="image/png" href="images/favicon.png" />
    <link
      rel="preload"
      as="font"
      type="font/woff2"
      href="https://cdn.mrqz.me/static/fonts/Gilroy/Regular.woff2"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      as="font"
      type="font/woff2"
      href="https://cdn.mrqz.me/static/fonts/Gilroy/Medium.woff2"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      as="font"
      type="font/woff2"
      href="https://cdn.mrqz.me/static/fonts/Gilroy/SemiBold.woff2"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/chunk-vendors.css" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="css/final-page.css" />
    <link rel="stylesheet" href="css/plus4.css" />
    <link rel="stylesheet" href="css/head-style.css" />
    <link rel="stylesheet" href="css/css_002.css" />
    <link rel="stylesheet" href="css/css.css" media="all" />
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

  <body style="background-color: white" class="iti-mobile">
    <span id="warning-container"><i data-reactroot=""></i></span>
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
        background: #ffa9a933 !important;
        border: 3px solid #eb162b !important;
      }

      input.valid {
        background: #90ff903b !important;
        border: 3px solid #41ad48 !important;
      }

      label.error {
        display: inline-block;
        width: 100%;
        font-weight: 400;
        margin-top: 0.25rem;
        margin-bottom: 0 !important;
        padding: 2px 5px;
        color: #fff;
        background-color: #eb162b;
        font-size: 12px;
        border-radius: 0.25rem !important;
        text-align: left;
      }
    </style>

    <!-- <div class="header1 active"></div> -->
    <div
      class="app-wrapper light-blue"
      style="
        --color: #d54b44;
        --color-lighten: #4290fc;
        --color-lighten10: #4290fc;
        --color-lighten2: #4290fc;
        --color-darken: #002d75;
        --color-darken10: #0041a8;
        --color-alpha: rgba(0, 84, 221, 0.5);
        --color-alpha2: rgba(0, 84, 221, 0.2);
        --color-alpha3: rgba(0, 84, 221, 0.05);
        --color-text: #ffffff;
        --color-text2: #0054dd;
        --gradient-main: 331deg, rgb(0, 45, 117), rgb(66, 139, 255);
        --color-primary-text-button: #fff;
        --color-bg-sidebar: #f7f7f7;
        --color-bg-1: #ededed;
        --color-bg-2: #e6e6e6;
        --color-bg-3: #cccccc;
        --color-bg-4: #b3b3b3;
        --color-bg-5: #999999;
        --color-bg-6: rgba(0, 0, 0, 0.7);
        --color-bg-7: #ededed;
        --color-bg-8: #d9d9d9;
        --color-bg-9: #363636;
        --color-bg-text: #000000;
        --color-bg-quiz: #ffffff;
        --color-bg-alpha0: rgba(255, 255, 255, 0);
        --color-bg-alpha2: rgba(0, 0, 0, 0.2);
        --color-bg-alpha7: rgba(0, 0, 0, 0.7);
        --color-white-label: #ffffff;
        --color-bg-sub-text: #a6a6a6;
        --font: Inter;
      "
    >
      <div id="app" class="app">
        <form id="leadform" method="POST" class="lead-form" autocomplete="off">
          <div class="layout">
            <div class="app__start-page test-step active">
              <div
                class="start-page columns is-desktop-modal start-page_has_bg start-page_position_right start-page_mode_start start-page_theme_expanded"
              >
                <img class="start-page__bg" src="images/main.png" id="myVideo" />
                <!-- <source src="video/kz2.mp4" type="video/mp4"> -->
                <!-- </video> -->
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

                <div class="start-page__content column is-5" style="z-index: 100">
                  <div class="start-page__body">
                    <div class="start-page__line"></div>
                    <!-- <img src="images/logo.svg" style="margin: 20px auto 30px;width:200px" alt="Логотип"> -->
                    <h1 class="start-page__header">
                      Как участвовать в новой инвестиционной платформе от “USM Invest”?
                    </h1>
                    <h2 class="start-page__subheader">
                      Пройдите официальный тест от <strong>“USM Invest”</strong>, чтобы получить
                      доступ к платформе и получать выплаты от <br />
                      25 000 000 СУМ уже через неделю!
                    </h2>
                    <button
                      class="start-page__button button is-primary is-blicked has-light-shadow next-btn"
                      style="background-color: #d54b44 !important"
                    >
                      <span class="icon">
                        <svg viewBox="0 0 24 24" class="mdi-icon mdi-24px">
                          <title>mdi-checkbox-marked-circle-outline</title>
                          <path
                            d="M20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            stroke-width="0"
                            fill-rule="nonzero"
                          ></path>
                        </svg>
                      </span>
                      &nbsp; Начать тест
                    </button>
                  </div>
                </div>
                <div class="start-page__layer"></div>
              </div>
            </div>
            <!-- QUIZ 1 -->
            <div class="quiz-container test-step">
              <div class="quiz">
                <div class="quiz__questions">
                  <div class="quiz__questions-header">
                    <div class="title quiz__question-title quiz__question-title_without-title">
                      <span class="is-block">
                        <b
                          >Какой суммы в месяц Вам было бы достаточно для реализации своих
                          желаний?</b
                        >
                      </span>
                    </div>
                  </div>
                  <div class="question quiz__question question_variants" id="DJ17A5860g">
                    <div class="answer-variants answer-variants_has_image">
                      <div class="answer-variants__group">
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input tabindex="-1" type="radio" name="step1" value="6 000 000 СУМ" />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">6 000 000 СУМ</div>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input tabindex="-1" type="radio" name="step1" value="14 000 000 СУМ" />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">14 000 000 СУМ</div>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input tabindex="-1" type="radio" name="step1" value="35 000 000 СУМ" />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">35 000 000 СУМ</div>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step1"
                              value="Больше 50 000 000 СУМ"
                            />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">Больше 50 000 000 СУМ</div>
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>

                      <div class="answer-variants__image">
                        <img src="images/number1.png" alt="" class="answer-variants__image-img" />
                      </div>
                    </div>
                  </div>
                  <div class="quiz__buttons">
                    <div class="quiz-buttons is-outline">
                      <div class="quiz-buttons__progress">
                        <div class="progress-bar">
                          <div class="progress-bar-circular-steps">
                            <div class="progress-bar-circular-steps__label">Шаг 1 из 6</div>
                            <div class="progress-bar-circular-steps__gradient-wrapp">
                              <div class="progress-bar-circular-steps__steps" style="left: 0px">
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
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

            <!-- QUIZ 2 -->
            <div class="quiz-container test-step">
              <div class="quiz">
                <div class="quiz__questions">
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
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step2"
                              value="Выплачу кредит/ипотеку"
                            />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">Выплачу кредит/ипотеку</div>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input tabindex="-1" type="radio" name="step2" value="Помогу родным" />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">Помогу родным</div>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step2"
                              value="Инвестирую, чтобы получить больше"
                            />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">Инвестирую, чтобы получить больше</div>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step2"
                              value="Куплю машину/квартиру"
                            />
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
                        <img src="images/number2.png" alt="" class="answer-variants__image-img" />
                      </div>
                    </div>
                  </div>

                  <div class="quiz__buttons">
                    <div class="quiz-buttons is-outline">
                      <div class="quiz-buttons__progress">
                        <div class="progress-bar">
                          <div class="progress-bar-circular-steps">
                            <div class="progress-bar-circular-steps__label">Шаг 2 из 6</div>
                            <div class="progress-bar-circular-steps__gradient-wrapp">
                              <div class="progress-bar-circular-steps__steps" style="left: 0px">
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
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

            <!-- QUIZ 3 -->
            <div class="quiz-container test-step">
              <div class="quiz">
                <div class="quiz__questions">
                  <div class="quiz__questions-header">
                    <div class="title quiz__question-title quiz__question-title_without-title">
                      <span class="is-block">
                        <b
                          >Проект USM Invest был разработан совместно с российскими разработчиками,
                          поэтому проект сейчас доступен на русском языке.</b
                        >
                      </span>
                    </div>
                  </div>
                  <div class="question quiz__question question_variants" id="DJ17A5860g">
                    <div class="answer-variants answer-variants_has_image">
                      <div class="answer-variants__group">
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step3"
                              value="Хорошо владею русским языком"
                            />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">Хорошо владею русским языком</div>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step3"
                              value="Не понимаю русский язык
                                                  "
                            />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">Не понимаю русский язык</div>
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>

                      <div class="answer-variants__image">
                        <img src="images/image1.png" alt="" class="answer-variants__image-img" />
                      </div>
                    </div>
                  </div>

                  <div class="quiz__buttons">
                    <div class="quiz-buttons is-outline">
                      <div class="quiz-buttons__progress">
                        <div class="progress-bar">
                          <div class="progress-bar-circular-steps">
                            <div class="progress-bar-circular-steps__label">Шаг 3 из 6</div>
                            <div class="progress-bar-circular-steps__gradient-wrapp">
                              <div class="progress-bar-circular-steps__steps" style="left: 0px">
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
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

            <!-- QUIZ 4 -->
            <div class="quiz-container test-step">
              <div class="quiz">
                <div class="quiz__questions">
                  <div class="quiz__questions-header">
                    <div class="title quiz__question-title quiz__question-title_without-title">
                      <span class="is-block">
                        <b
                          >Вы готовы внести минимальную первоначальную инвестицию, для участия в
                          новой платформе от “USM Invest” и получения дальнейших выплат от 25 000
                          000 СУМ?</b
                        >
                      </span>
                    </div>
                  </div>
                  <div class="question quiz__question question_variants" id="DJ17A5860g">
                    <div class="answer-variants answer-variants_has_image">
                      <div class="answer-variants__group">
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input tabindex="-1" type="radio" name="step3" value="Да" />
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
                            <input tabindex="-1" type="radio" name="step3" value="Не уверен" />
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
                        <img src="images/number3.png" alt="" class="answer-variants__image-img" />
                      </div>
                    </div>
                  </div>

                  <div class="quiz__buttons">
                    <div class="quiz-buttons is-outline">
                      <div class="quiz-buttons__progress">
                        <div class="progress-bar">
                          <div class="progress-bar-circular-steps">
                            <div class="progress-bar-circular-steps__label">Шаг 4 из 6</div>
                            <div class="progress-bar-circular-steps__gradient-wrapp">
                              <div class="progress-bar-circular-steps__steps" style="left: 0px">
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"></div>
                                <div class="progress-bar-circular-steps__step"></div>
                                <div class="progress-bar-circular-steps__step"></div>
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

            <!-- QUIZ 5 -->
            <div class="quiz-container test-step">
              <div class="quiz">
                <div class="quiz__questions">
                  <div class="quiz__questions-header">
                    <div class="title quiz__question-title quiz__question-title_without-title">
                      <span class="is-block">
                        <b>Откуда Вы узнали о новой платформе от “USM Invest”?</b>
                      </span>
                    </div>
                  </div>
                  <div class="question quiz__question question_variants" id="DJ17A5860g">
                    <div class="answer-variants answer-variants_has_image">
                      <div class="answer-variants__group">
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step4"
                              value="Через социальные сети"
                            />
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
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step4"
                              value="Рекомендации знакомых"
                            />
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
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step4"
                              value="От операторов “USM Invest”"
                            />
                            <span class="check"></span>
                            <span class="control-label">
                              <div class="answer">
                                <div class="answer__title">От операторов “USM Invest”</div>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div data-element-index="0" class="answer-variants__variant-text">
                          <label tabindex="0" class="b-radio _js-input radio">
                            <input
                              tabindex="-1"
                              type="radio"
                              name="step4"
                              value="Наружная реклама"
                            />
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
                        <img src="images/number4.png" alt="" class="answer-variants__image-img" />
                      </div>
                    </div>
                  </div>

                  <div class="quiz__buttons">
                    <div class="quiz-buttons is-outline">
                      <div class="quiz-buttons__progress">
                        <div class="progress-bar">
                          <div class="progress-bar-circular-steps">
                            <div class="progress-bar-circular-steps__label">Шаг 5 из 6</div>
                            <div class="progress-bar-circular-steps__gradient-wrapp">
                              <div class="progress-bar-circular-steps__steps" style="left: 0px">
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div
                                  class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"
                                ></div>
                                <div class="progress-bar-circular-steps__step progress-bar-circular-steps__step_active"></div>
                                <div class="progress-bar-circular-steps__step"></div>
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

            <!-- FORM SECTION -->
            <div class="quiz-container quiz-container_has_results test-step">
              <div class="quiz__lead-form">
                <div class="final-page final-page_horizontal">
                  <div class="final-page__content-container">
                    <div class="final-page__header-container">
                      <img
                        src="images/logo.png"
                        width="200px"
                        alt="Логотип"
                        style="margin: 20px auto 30px"
                      />
                      <div class="final-page__header" style="text-align: center">
                        <b>
                          Поздравляем! Вам стали доступны инвестиции на новой платформе от “USM
                          Invest”.
                        </b>
                      </div>
                      <div class="final-page__content" style="text-align: center">
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
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="Введите имя"
                          />
                          <span class="icon is-left is-medium posspan">
                            <svg viewBox="0 0 24 24" class="mdi-icon mdi-36px">
                              <title>mdi-account</title>
                              <path
                                d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                                stroke-width="0"
                                fill-rule="nonzero"
                              ></path>
                            </svg>
                          </span>
                          <div class="help-block help-block-error"></div>
                        </div>
                        <label class="label toplabel">Введите фамилию</label>
                        <div class="input-wrap control has-icons-left has-icons-right is-large">
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Введите фамилию"
                          />
                          <span class="icon is-left is-medium posspan">
                            <svg viewBox="0 0 24 24" class="mdi-icon mdi-36px">
                              <title>mdi-account</title>
                              <path
                                d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                                stroke-width="0"
                                fill-rule="nonzero"
                              ></path>
                            </svg>
                          </span>
                          <div class="help-block help-block-error"></div>
                        </div>
                        <label class="label toplabel">Введите E-Mail</label>
                        <div class="input-wrap control has-icons-left has-icons-right is-large">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Введите электронный адрес"
                          />
                          <span class="icon is-left is-medium posspan">
                            <svg viewBox="0 0 24 24" class="mdi-icon mdi-36px">
                              <title>mdi-account</title>
                              <path
                                d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                                stroke-width="0"
                                fill-rule="nonzero"
                              ></path>
                            </svg>
                          </span>
                          <div class="help-block help-block-error"></div>
                        </div>
                      </div>
                      <div class="step">
                        <label class="label toplabel">Введите телефон</label>
                        <div class="input-wrap">
                          <input id="phone1" type="tel" class="vti__input" name="phone1" />
                          <input
                            type="hidden"
                            id="realPhone"
                            name="realPhone"
                            class="hidden-phone"
                            value=""
                          />
                          <input type="hidden" id="country" name="country" value="" />
                        </div>
                        <span class="focus-border"><i></i></span>
                      </div>
                      <div class="input-wrap" style="padding-top: 0px">
                        <button
                          type="submit"
                          class="lead-form__button button button_color_theme is-medium is-outline"
                        >
                          Зарегистрироваться
                        </button>
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
        background-color: #d54b44;
        max-width: 250px;
        width: 100%;
        padding: 1rem;
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
          padding-top: 60px;
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
        var el = document.getElementById('user-num');
        var randomNum = parseInt(el.innerText) - 7;
        if (randomNum < 5) {
          el.innerHTML = '5';
        } else {
          el.innerHTML = randomNum;
        }
      }, 7500);
    </script>

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

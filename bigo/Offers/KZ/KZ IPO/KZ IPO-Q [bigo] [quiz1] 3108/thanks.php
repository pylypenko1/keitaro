﻿<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Народное IPO</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="images/favicon.png" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/thanks.css" />
    <link rel="stylesheet" href="css/video-js.css" />
    <style>
      body {
        background-color: #f6f9fe;
        padding-bottom: 20px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        background-color: #fff;
        width: 100%;
        box-shadow: 2px 2px 2px 2px rgba(25, 25, 25, 0.6);
      }

      .header-text {
        font-size: 1.2rem;
        color: #05aff3;
        margin-top: 10px;
        text-align: center;
      }

      .logo-item {
        width: 120px;
      }

      .sub-title {
        opacity: 0.4;
      }

      .text-block {
        width: 90%;
        display: flex;
        justify-content: flex-start;
      }

      .text-block .section_text {
        width: 100%;
        text-align: left;
        margin-left: 8px;
      }

      .main__number {
        display: inline-block;
        padding: 4px 9px;
        background: #0d356d;
        border-radius: 4px;
        font-family: Raleway;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 15px;
        color: #fff;
        height: 25px;
      }

      .vivideo {
        width: 100%;
        height: 400px;
      }

      @media all and (max-width: 790px) {
        .block_alert {
          width: 90%;
        }

        .header {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .section_text.down_title {
          width: 100% !important;
        }

        .down_section {
          padding-top: 25px;
          padding-bottom: 25px;
          padding-left: 7px !important;
          padding-right: 7px !important;
        }

        .vivideo {
          margin-top: 56px;
        }
      }
    </style>

    <script>
      window.bgdataLayer = window.bgdataLayer || [];

      function bge() {
        bgdataLayer.push(arguments);
      }
      bge('init', "<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>");
    </script>
    <script
      async
      src="https://api.imotech.video/ad/events.js?pixel_id=<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>"
    ></script>
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
    <div class="page">
      <div class="header">
        <div class="logo">
          <img src="images/logo_ipo.png" class="logo-item" alt="logo" />
        </div>
        <div>
          <p class="header-text">
            <span style="font-weight: bold">18 912 721 тенге</span>
            выплачено <br />
            пользователям платформы Народное IPO сегодня
          </p>
        </div>
        <div class="min-logo"></div>
      </div>
      <div class="modal_section">
        <div class="up_section">
          <div
            id="video"
            data-setup='{ "controls": true, "autoplay": true, "preload": "auto", "controlBar": false, "fluid": true }'
            class="video-js vjs-show-big-play-button-on-pause vjs-big-play-centered vjs-paused vjs-fluid video-dimensions vjs-controls-enabled vjs-workinghover vjs-v7 vjs-user-active"
            lang="de"
            role="region"
            aria-label="Video Player"
          >
            <video
              class="vjs-tech"
              data-setup='{ "controls": true, "autoplay": true, "preload": "auto", "controlBar": false, "fluid": true }'
              id="video_html5_api"
              tabindex="-1"
              preload="auto"
              autoplay=""
              src="video/video.mp4"
              poster="video/poster.png"
            >
              <source src="video/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="down_section">
          <h1 class="section_title green_text">
            Поздравляем! Вам стали доступны инвестиции на платформе
          </h1>
          <p class="section_text sub-title">Регистрация почти завершена ...</p>

          <!-- <p class="section_text down_title">Еще несколько шагов, и вы сможете заработать свои первые деньги
                    вместе с Народное IPO.</p> -->

          <div class="text-block">
            <!--<span class="main__number">2</span>-->
            <p class="section_text">
              Еще несколько шагов, и вы сможете заработать свои первые деньги вместе с Народное IPO.
            </p>
          </div>
          <!--<br> Для этого нужно: </p>-->

          <div class="text-block">
            <!--<span class="main__number">2</span>-->
            <p class="section_text">
              Каждый пятый казахстанец считает, что заниматься инвестициями — очень сложная задача,
              но у вас будет возможность работать под сопровождением профессионалов. Ожидайте звонка
              нашего эксперта с 09:00 до 20:00 для детального ознакомления и резервации места.
              Станьте частью команды Народное IPO!
            </p>
          </div>
          <div class="text-block">
            <!--<span class="main__number">1</span>-->
            <p class="section_text" style="font-weight: bold">
              Пожалуйста, оставайтесь на связи в течение следующих 2 часов
            </p>
          </div>
          <!--<div class="block-container">-->
          <!--    <div class="block_alert">-->
          <!--        <p class="section_text" id="section_alert">-->
          <!--            Мы <span class="green_text">категорически не рекомендуем</span> Вам переходить и регистрироваться на сайтах других инвестиционных платформ в связи с высокой активностью мошенников, которые недобросовестно используют наш бренд.-->
          <!--        </p>-->
          <!--    </div>-->
          <!--</div>-->
        </div>
      </div>
    </div>

    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/video.js"></script>
  </body>
</html>

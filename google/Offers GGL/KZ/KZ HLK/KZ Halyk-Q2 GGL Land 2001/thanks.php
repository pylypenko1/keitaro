<!DOCTYPE html>
<html lang="ru">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halyk Bank</title>
    <link rel="icon" type="image/png" href="images/favicon.png">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/thanks.css">
    <link rel="stylesheet" href="css/video-js.css">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo (isset($_GET['idpxl'])) ? explode('/', $_GET['idpxl'])[0] : ''; ?>"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', '<?php echo (isset($_GET['idpxl'])) ? explode('/', $_GET['idpxl'])[0] : ''; ?>');
    </script>
    <!-- Google tag (gtag.js) -->
    <!-- Event snippet for success_form conversion page -->
    <script>
        gtag('event', 'conversion', {
            'send_to': '<?php echo (isset($_GET['idpxl'])) ? $_GET['idpxl'] : ''; ?>'
        });
    </script>
    <!-- Event snippet for success_form conversion page -->

    <img id="pb" height="1" width="1" style="display:none" src="" />
    <script>
        var matches = document.cookie.match(new RegExp("(?:^|; )" + 'subid' + "=([^;]*)"));
        var subId = matches ? decodeURIComponent(matches[1]) : undefined;
        document.getElementById("pb").src = "https://keitaro-leadar.ink/f6c793a/postback?subid=" + subId +
            "&status=lead";
    </script>
</head>

<body>

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
            color: #00805f;
            margin-top: 10px;
            text-align: center;
        }

        .logo-item {
            width: 200px;
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

            .logo-item {
                width: 50%;
                display: block;
                margin: 0 auto;
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

            .vjs-tech,
            .vjs-big-play-button {
                outline: none;
            }
        }
    </style>

    <div class="page">
        <div class="header">
            <div class="logo">
                <img src="images/logo.svg" class="logo-item" alt="logo">
            </div>
            <div>
                <p class="header-text">
                    <span style="font-weight: bold;" id="money">136 058 510</span>
                    <span style="font-weight: bold;"> тенге</span>
                    выплачено пользователям платформы HalykBank сегодня.
                </p>
            </div>
            <div class="min-logo"></div>
        </div>
        <div class="modal_section">
            <div class="up_section">
                <div id="video" data-setup="{ &quot;controls&quot;: true, &quot;autoplay&quot;: true, &quot;preload&quot;: &quot;auto&quot;, &quot;controlBar&quot;: false, &quot;fluid&quot;: true }" class="video-js vjs-show-big-play-button-on-pause vjs-big-play-centered vjs-paused vjs-fluid video-dimensions vjs-controls-enabled vjs-workinghover vjs-v7 vjs-user-active" lang="de" role="region" aria-label="Video Player">
                    <video class="vjs-tech" data-setup="{ &quot;controls&quot;: true, &quot;autoplay&quot;: true, &quot;preload&quot;: &quot;auto&quot;, &quot;controlBar&quot;: false, &quot;fluid&quot;: true }" id="video_html5_api" tabindex="-1" preload="auto" autoplay="" src="video/thanks.mp4">
                        <source src="video/thanks.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="down_section">
                <h1 class="section_title green_text">Поздравляем! Вам стала доступна новая платформа от “Halyk Bank”
                </h1>
                <p class="section_text sub-title">Регистрация почти завершена ...</p>
                <p class="section_text down_title">Еще несколько шагов и вы сможете заработать свою первую выплату</p>

                <div class="text-block">
                    <div style="display: flex; flex-direction: column; align-items: flex-start;">
                        <p class="section_text">
                            Для получения первоначальной выплаты в 250 000 ₸ Вам нужно:
                        </p>
                        <p class="section_text">
                            1) Дождаться звонка нашего эксперта.
                            <br>
                            2) Выслушать детальное ознакомление с новой платформой от “Halyk Bank”.
                            <br>
                            3) Провести с ним первый минимальный депозит.
                            <br>
                            4) Получать еженедельную выплату!
                        </p>
                    </div>
                </div>
                <div class="text-block">
                    <p class="section_text" style="font-weight: bold;">
                        Пожалуйста, оставайтесь на связи в течении суток, наш эксперт свяжется с Вами.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/video.js"></script>
    <script>
        setInterval(function generate() {
            var el = document.getElementById("money");
            var randomNum = parseInt(el.innerText.replace(/ /g, "")) + 346789;
            el.innerHTML = prettify(randomNum);
        }, 7500);

        function prettify(num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
        }
    </script>


</body>

</html>
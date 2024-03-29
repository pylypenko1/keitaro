<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320">
    <meta name="MobileOptimized" content="width=320">
    <title>Спасибо! Ваш заказ принят!</title>
    <link href="" rel="stylesheet" type="text/css">
    <link href="" rel="stylesheet" type="text/css">
    <link media="all" rel="stylesheet" type="text/css" href="./assets/cdn/success/css/order-style.css">


    <script src=""></script>
    <script src=""></script>
    <script src=""></script>
    <script src=""></script>

    <!-- Meta Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '<?php echo $_SESSION['idpxl']; ?>');
        fbq('track', 'Lead');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?php echo $_SESSION['idpxl']; ?>&ev=Lead&noscript=1" /></noscript>
    <!-- End Meta Pixel Code -->


</head>

<body>
    <div id="wrapper">
        <div class="order-block">
            <div class="text-holder">
                <h2><span>Спасибо!</span> Ваш заказ принят!</h2>
                <p>Наш оператор свяжется с вами для подтверждения заказа. <br><br> Доставка осуществляется курьером или почтой. Оплата - при получении!</p>
            </div>


            <div class="text-box">
                <h2>Участвуйте <span>в акции!</span></h2>
                <p>Для того, чтобы принять участие в акции и следить за статусом вашего заказа, введите E-mail и нажмите "Сохранить"!</p>
                <form class="mail_form" action="#" id="email_form">
                    <fieldset>
                        <div class="text">
                            <input type="email" id="email" placeholder="Введите ваш e-mail..." name="email">
                        </div>
                        <input data-error="Введите ваш e-mail" data-success="Спасибо за участие! Ваш E-mail сохранен!" class="btn" type="submit" value="Сохранить">
                    </fieldset>
                </form>
            </div>

        </div>
    </div>

</body>

</html>
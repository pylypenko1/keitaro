<?php
   $name=$_GET['name'];
   $phone=$_GET['phone'];
?>
<!doctype html>
<html lang="it" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Grazie per il tuo ordine!</title>

        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="confirm/css/fonts.css">
        <link rel="stylesheet" href="confirm/css/style.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <body>
      <script>
        function $_GET(key) {
            var s = window.location.search;
            s = s.match(new RegExp(key + '=([^&=]+)'));
            return s ? s[1] : '';
        }

        var site = $_GET('version')

        if (site.replace(/(v\d{1,3}\w{0,2})$/, '') === 'it39') {
            document.write('<scr' + 'ipt src="39/counter.js"></scr' + 'ipt>');
        }
        if (site.replace(/(v\d{1,3}\w{0,2})$/, '') === 'it39prelp') {
            document.write('<scr' + 'ipt src="39/prelp/counter.js"></scr' + 'ipt>');
        }
        if (site.replace(/(v\d{1,3}\w{0,2})$/, '') === 'it1') {
            document.write('<scr' + 'ipt src="1/counter.js"></scr' + 'ipt>');
        }
        if (site.replace(/(v\d{1,3}\w{0,2})$/, '') === 'it1prelp') {
            document.write('<scr' + 'ipt src="1/prelp/counter.js"></scr' + 'ipt>');
        }
    </script>
        <div class="wrapper">
            <div class="thank">
                <div class="thank__logo">
                    <img src="confirm/images/land-icon.png" alt=""><h1>Potencialex </h1>
                </div><div class="thank__body">
                    <div class="thank__content">
                        <div class="thank__info">
                            <div class="thank__order">
                                <p>Grazie per il tuo ordine!</p>
                            </div><div class="thank__status">
                                <p> La tua richiesta &#232; stata accettata ed &#232; in elaborazione!</p>
                            </div><div class="thank__about">
                                <ul>
                                    <li> <font>Prodotto:</font> <span class="tovar">Potencialex</span> </li><li>
                                        <font>Il tuo nome:</font>  <?php echo $name ?> <span id="leadprofit-name" class="name"></span>
                                    </li><li>
                                        <font>Il tuo numero di telefono:</font>  <?php echo $phone ?> <span id="leadprofit-phone" class="phone"></span>
                                    </li>
                                </ul>
                            </div><div class="thank__call">
                                <p>Al pi&#249; presto, un nostro specialista ti contatter&#224; per fornirti tutti i dettagli </p>
                            </div>
                        </div><div class="thank__product">
                            <div class="thank__pack">
                                <img src="confirm/images/thank-pack.png" alt="">
                            </div><div class="thank__glass">
                                <img src="confirm/images/thank-glass.png" alt="">
                            </div>
                        </div>
                    </div><div class="thank__atten">
                        <div class="thank__atten-desc">
                            <p>Se hai commesso un errore durante l&#39;inserimento dei dati, puoi ancora modificarli</p>
                        </div><div class="thank__atten-btn">
                            <a id="leadprofit-returnurl" href="{url}"><button>Modificare i dati</button></a>
                        </div>
                    </div>
                </div>
            </div><div class="warrning">
                <div class="warrning__title">
                    <p>Sono rimaste meno di 50 confezioni a prezzo scontato. Il programma promozionale non sar&#224; ripetuto quest&#39;anno</p>
                </div><div class="warrning__desc">
                    <p> 
                    </p>
                </div><div class="warrning__product">
                    <ul>
                        <li>
                            <img src="confirm/images/warrning-pack.png" alt="">
                        </li><li>
                            <img src="confirm/images/warrning-pack.png" alt="">
                        </li><li>
                            <img src="confirm/images/warrning-pack.png" alt="">
                        </li><li>
                            <img src="confirm/images/warrning-flower.png" alt="">
                        </li>
                    </ul>
                </div>
            </div><div class="question">
                <div class="question__body">
                    <div class="question__doctor">
                        <div class="question__doctor-img">
                            <img src="confirm/images/doctor-img.png" class="dec" alt="">
                            <img src="confirm/images/mob/doctor-img.png" class="mob" alt="">
                        </div><div class="question__doctor-content">
                            <div class="question__title">
                                <h2>Domande frequenti</h2>
                            </div><div class="question__doctor-answer">
                                <p>Il nostro consulente medico sessuologo risponde alle tue domande </p>
                            </div><div class="question__doctor-name">
                                <p>Massimiliano Zarillo</p>
                            </div>
                        </div>
                    </div><div class="question__info">
                        <div class="question__item">
                            <div class="question__ask">
                                <p>— Con quale velocit&#224; agisce il prodotto?</p>
                            </div><div class="question__answer">
                                <p><span>Massimiliano Zarillo:</span>I primi effetti si notano subito dopo l&#39;assunzione. In pochi minuti, grazie alla potente azione degli ingredienti, aumenta l&#39;afflusso del sangue ai genitali, di conseguenza si manifesta un&#39;erezione forte e stabile. Tuttavia, se vuoi avere un effetto duraturo e ottenere un&#39;erezione stabile per un lungo periodo di tempo, si consiglia di completare il trattamento completo. La durata del trattamento viene calcolata dal nostro specialista durante una consulenza telefonica in base ai tuoi dati - et&#224;, peso e caratteristiche individuali.</p>
                            </div>
                       
                        </div><div class="question__item">
                            <div class="question__ask">
                                <p>— Potencialex aiuta a risolvere il problema della potenza debole fisiologica o anche emersa a causa delle malattie?</p>
                            </div><div class="question__answer">
                                <p><span>Massimiliano Zarillo:</span>Questo trattamento funziona in entrambi i casi. Ha un effetto completo sul corpo, tonifica e migliora il funzionamento dei genitali. Inoltre, grazie ad esso, viene normalizzata la microcircolazione sanguigna, vengono eliminati i processi di ristagno negli organi pelvici. Pu&#242; essere assunto sia per la cura sia per la prevenzione dei disturbi legati alla salute maschile. </p>
                            </div>
                        </div><div class="question__item">
                            <div class="question__ask">
                                <p>- Crea la dipendenza?</p>
                            </div><div class="question__answer">
                                <p><span>Massimiliano Zarillo:</span>No, un rischio del genere &#232; fuori discussione. Il prodotto non crea dipendenza, neanche nei casi di un uso prolungato. Nessuna sindrome da astinenza. </p>
                            </div>
                        </div><div class="question__item">
                            <div class="question__ask">
                                <p>— In che modo questo prodotto pu&#242; migliorare i rapporti sessuali? </p>
                            </div><div class="question__answer">
                                <p><span>Massimiliano Zarillo:</span>Potencialex aumenta la sensibilit&#224;, rende le sensazioni pi&#249; vive e piacevoli. La durata del rapporto aumenta notevolmente fino a durare diverse ore. </p>
                            </div>
                        </div><div class="question__item">
                            <div class="question__ask">
                                <p>— A che et&#224; si pu&#242; assumere questo prodotto? </p>
                            </div><div class="question__answer">
                                <p><span>Massimiliano Zarillo:</span>Potencialex non ha nessun limite d&#39;et&#224;. Non &#232; consigliabile utilizzare il prodotto se hai meno di 18 anni. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div class="prefer">
                <div class="prefer__border"></div>
                <div class="prefer__body">
                    <div class="prefer__list">
                        <ul>
                            <li>
                                <div class="prefer__list-desc">
                                    <p>Approvato dalle autorit&#224; di regolamentazione.</p>
                                </div>
                            </li><li>
                                <div class="prefer__list-desc">
                                    <p>Garanzia di qualit&#224; al 100%.</p>
                                </div>
                            </li><li>
                                <p>Potencialex rispetta tutte le normative di registrazione e controllo in conformit&#224; con la legislazione vigente.</p>
                            </li>
                        </ul>
                    </div><div class="prefer__info">
                        <div class="prefer__award">
                            <img src="confirm/images/prefer-award.png" alt="">
                        </div><div class="prefer__pack">
                            <img src="confirm/images/prefer-pack.png" alt="">
                        </div><div class="prefer__sert">
                            <img src="confirm/images/prefer-sert.png" alt="">
                        </div>
                    </div>
                </div>
            </div><div class="feed">
                <div class="feed__title">
                    <h2>Durante l&#39;elaborazione del tuo ordine, leggi le opinioni di chi ha gi&#224; provato <span>Potencialex:</span></h2>
                </div><div class="feed__gif">
                    <ul class="dwadawdawd">
                        <li>
                            <img src="confirm/images/gif1.gif" alt="Foto">
                        </li><li>
                            <img src="confirm/images/gif2.gif" alt="Foto">
                        </li><li>
                            <img src="confirm/images/gif3.gif" alt="Foto">
                        </li>
                    </ul>
                </div><div class="feed__content">
                    <div class="feed__item">
                        <div class="feed__img">
                            <img src="confirm/images/feed-img1.png" alt="">
                        </div><div class="feed__info">
                            <div class="feed__desc">
                                <p><span>Michele Franceschini</span> Potencialex mi ha aiutato a ritrovare la fiducia nelle mie capacit&#224;. Non avevo bisogno di nessun aiuto quando ero giovane. Ma purtroppo, l&#39;et&#224; fa il suo lavoro. Potencialex mi ha aiutato di nuovo avere una sicurezza a letto. Riesco a fare il sesso anche pi&#249; volte durante la notte! </p>
                            </div><div class="feed__bottom">
                                <img src="confirm/images/feed-bottom1.png" alt=""><p>10</p><p><script type="text/javascript">
                                    var appendNull = function (num) {
                                        return num < 10 ? 0 + num.toString() : num;
                                    };
                                    d = new Date();
                                    p = new Date(d.getTime() - 3 * 86400000);
                                    monthb = 'Ianuarie, februarie, martie, aprilie, mai, iunie, iulie, august, septembrie, octombrie, noiembrie, decembrie'.split(',');
                                    document.write(appendNull(p.getDate()) + '  ' + monthb[p.getMonth()] + '  ' + p.getFullYear());
                                    </script></p>
                            </div>
                        </div>
                    </div><div class="feed__item">
                        <div class="feed__img">
                            <img src="confirm/images/feed-img2.png" alt="">
                        </div><div class="feed__info">
                            <div class="feed__desc">
                                <p><span>Irene Dorelli</span> Pure mio marito ha iniziato ad avere problemi. Va tutto bene nella nostra relazione, ma a volte si stanca molto velocemente durante i rapporti. Ha un lavoro importante con tanta responsabilit&#224; e tanto stress. Ho ordinato Potencialex per cercare di rafforzare la sua potenza. Non gli ho detto la verit&#224; sul prodotto, ma vedo che funziona, &#232; molto meno nervoso, si sente pi&#249; sicuro a letto... E anche io ora mi sento molto meglio.&quot;</p>
                            </div><div class="feed__bottom">
                                <img src="confirm/images/feed-bottom4.png" alt=""><p>1</p><p><script type="text/javascript">
                                    var appendNull = function (num) {
                                        return num < 10 ? 0 + num.toString() : num;
                                    };
                                    d = new Date();
                                    p = new Date(d.getTime() - 1 * 86400000);
                                    monthb = 'Ianuarie, februarie, martie, aprilie, mai, iunie, iulie, august, septembrie, octombrie, noiembrie, decembrie'.split(',');
                                    document.write(appendNull(p.getDate()) + '  ' + monthb[p.getMonth()] + '  ' + p.getFullYear());
                                    </script></p>
                            </div>
                        </div>
                    </div><div class="feed__item">
                        <div class="feed__img">
                            <img src="confirm/images/nophoto.png" alt="">
                        </div><div class="feed__info">
                            <div class="feed__desc">
                                <p><span>Valerio De Luca</span> Mi  sono vergognato molto ad ammettere che ho avuto problemi di erezione a 20 anni. Non l&#39;ho detto nemmeno a mio fratello. La prima volta che sono andato a letto con una ragazza e non sono riuscito a fare il sesso, volevo impiccarmi. La ragazza mi ha fatto calmare, ma quella sensazione spiacevole &#232; rimasta per tanto tempo. Potencialex mi ha aiutato molto, ora ho di nuovo fiducia in me stesso. A dire la verit&#224;, non dico a nessuno che sto usando questo prodotto. Ora il sesso &#232; fantastico... sono diventato una vera pornostar!</p>
                            </div><div class="feed__bottom">
                                <img src="confirm/images/feed-bottom2.png" alt=""><p>2</p><p><script type="text/javascript">
                                    var appendNull = function (num) {
                                        return num < 10 ? 0 + num.toString() : num;
                                    };
                                    d = new Date();
                                    p = new Date(d.getTime() - 2 * 86400000);
                                    monthb = 'Ianuarie, februarie, martie, aprilie, mai, iunie, iulie, august, septembrie, octombrie, noiembrie, decembrie'.split(',');
                                    document.write(appendNull(p.getDate()) + '  ' + monthb[p.getMonth()] + '  ' + p.getFullYear());
                                    </script></p>
                            </div>
                        </div>
                    </div><div class="feed__item">
                        <div class="feed__img">
                            <img src="confirm/images/feed-img3.png" alt="">
                        </div><div class="feed__info">
                            <div class="feed__desc">
                                <p><span>Giovanni Zampetti e Marinella Cherubini</span> Quando Giovanni aveva problemi con la potenza, era molto preoccupata. Sognavamo di avere un bambino, ma con la sua diagnosi non potevamo nemmeno avere un rapporto sessuale completo... Un ottimo medico ci ha consigliato Potencialex. Dopo la prima assunzione, Giovanni ha finalmente avuto un&#39;erezione normale e, dopo un trattamento completo, tutti i problemi sono scomparsi completamente. Siamo riusciti a concepire un bimbo meraviglioso e non abbiamo pi&#249; problemi a letto. Grazie mille al dottore che ci ha raccontato di Potencialex! </p>
                            </div><div class="feed__bottom">
                                <img src="confirm/images/feed-bottom3.png" alt=""><p>5</p><p><script type="text/javascript">
                                    var appendNull = function (num) {
                                        return num < 10 ? 0 + num.toString() : num;
                                    };
                                    d = new Date();
                                    p = new Date(d.getTime() - 2 * 86400000);
                                    monthb = 'Ianuarie, februarie, martie, aprilie, mai, iunie, iulie, august, septembrie, octombrie, noiembrie, decembrie'.split(',');
                                    document.write(appendNull(p.getDate()) + '  ' + monthb[p.getMonth()] + '  ' + p.getFullYear());
                                    </script></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><footer>
            <div class="footer__body">
                <div class="footer__logo">
                    <img src="confirm/images/land-icon.png" alt=""><h3>Potencialex</h3>
                </div><div class="footer__phone">
                    <p>
                </div><div class="footer__mail">
                    <p>
                </div>
            </div>
        </footer>
        <script src="confirm/js/main.js"></script>

        <!-- new resend lead form. Place it outside main wrapper/container to make styles work properly -->
	<style>
		/* default styles for form */
		#resend-lead-popup {
			display: none;
			position: fixed;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			align-items: center;
			justify-content: center;
		}

		.resend-lead-popup--active {
			display: flex !important;
			z-index: 400;
			background: rgba(0, 0, 0, .5);
		}

		#resend-lead-popup .resend-lead-popup__body {
			width: 90%;
			max-width: 560px;
			min-height: 300px;
			padding: 25px 20px 15px 20px;
			border: 2px solid #4283b7;
			border-radius: 20px;
			background: #fff;
			/* default font family */
			font-family: 'Roboto', sans-serif;
			z-index: 500;
			position: relative;
		}

		#resend-lead-popup .resend-lead-popup__body .resend-lead-popup__close {
			position: absolute;
			border-radius: 50%;
			top: -15px;
			right: -15px;
			width: 30px;
			height: 30px;
			border-color: #000;
			cursor: pointer;
		}

		#resend-lead-popup .resend-lead-popup__body .resend-lead-popup__close:hover {
			background-color: #4283b7;
		}

		#resend-lead-popup .resend-lead-form .resend-lead-form__title {
			text-align: center;
			margin-top: 0;
			margin-bottom: 20px;
			font-size: 30px;
		}

		#resend-lead-popup .resend-lead-form .notification {
			display: none;
			color: #fff;
			text-align: center;
			padding: 5px;
		}

		#resend-lead-popup .resend-lead-form .notification.success {
			background: green;
		}

		#resend-lead-popup .resend-lead-form .notification.error {
			background: red;
            margin-bottom: 10px;
		}

		#resend-lead-popup .resend-lead-form .notification.active {
			display: block;
            margin-bottom: 10px;
		}

		#resend-lead-popup .resend-lead-form input {
			display: block;
			width: 90%;
			max-width: 300px;
			height: 40px;
			margin: 0 auto 20px auto;
			border: 2px solid #4283b7;
			padding: 5px 10px;
			border-radius: 5px;
		}

		#resend-lead-popup .resend-lead-form input::-webkit-outer-spin-button,
		#resend-lead-popup .resend-lead-form input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		#resend-lead-popup .resend-lead-form input[type=number] {
			-moz-appearance: textfield;
		}

		#resend-lead-popup .resend-lead-form .resend-lead__submit {
			display: block;
			width: 200px;
			color: #fff;
			background: -webkit-linear-gradient(298.88deg, #72bcfa 49.07%, #124c7a 130.88%);
            background: linear-gradient(151.12deg, #72bcfa 49.07%, #124c7a 130.88%);
            -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, .4), inset 0 4px 4px rgba(255, 255, 255, .25);
            box-shadow: 0 4px 4px rgba(0, 0, 0, .4), inset 0 4px 4px rgba(255, 255, 255, .25);
            border: 2px solid rgba(255, 255, 255, .3);
			height: 40px;
			margin: 10px auto 0 auto;
			cursor: pointer;
            background-size: 400% 400%;
            -webkit-animation: animate_gradient 5s ease infinite;
            animation: animate_gradient 5s ease infinite;
            -webkit-transition: .5s;
            transition: .5s
		}

        #resend-lead-popup .resend-lead-form .resend-lead__submit:hover {
            background: -webkit-linear-gradient(233.91deg, #71bbf8 12.4%, #2172b3 32.39%, #71bbf8 49.87%, #2172b2 69.85%, #71bbf8 87.34%);
            background: linear-gradient(216.09deg, #71bbf8 12.4%, #2172b3 32.39%, #71bbf8 49.87%, #2172b2 69.85%, #71bbf8 87.34%);
            -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, .4), inset 0 4px 4px rgba(255, 255, 255, .25);
            box-shadow: 0 4px 4px rgba(0, 0, 0, .4), inset 0 4px 4px rgba(255, 255, 255, .25);
            background-size: 400% 400%;
            -webkit-animation: animate_gradient2 5s ease infinite;
            animation: animate_gradient2 5s ease infinite
        }
	</style>

	<div id="resend-lead-popup">
		<div class="resend-lead-popup__body">
			<button type="button" class="resend-lead-popup__close">
				<svg width="14px" height="14px" viewbox="0 0 311 311.07733" xmlns="http://www.w3.org/2000/svg">
					<path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"></path>
					<path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"></path>
				</svg>
			</button>
			<form class="resend-lead-form">
				<!-- Тут нужно перевести контент на язык ленда  -->
				<h3 class="resend-lead-form__title">Modificare il tuo ordine</h3>
				<!-- Две ошибки, тк сервер текст ошибок не возвращает, тем более под нужный язык не переводит -->
				<p class="notification success">La tua richiesta &#232; stata aggiornata con successo!</p>
				<p class="notification error">Si &#232; verificato un errore durante l&#39;invio del modulo. Prova a inviare la tua richiesta dalla pagina principale </p>
				<!-- форма -->
				<input id="resend-lead-name" placeholder="Il tuo nome" name="name" type="text" required class="ym-record-keys" autocomplete="disabled">
                
				<input id="resend-lead-phone" placeholder="Il tuo numero di telefono" name="phone" required class="ym-record-keys" autocomplete="disabled">
<!--                <script>-->
<!--                    // REMOVE number="number" fom input above to make it work-->
<!--                    // script to work with masked phone number -->
<!--                    var re = /[^\d\+\s()]/-->
<!--                    var phoneInputPopup = document.getElementById('resend-lead-phone')-->

<!--                    phoneInputPopup.addEventListener('input', function(e) {-->
<!--                        e.target.value = e.target.value.replace(re, '')-->
<!--                    })-->
<!--                </script>-->
				<button type="submit" class="resend-lead__submit"> Modificare i dati </button>
			</form>
		</div>
	</div>
	<!-- end of new form -->

        <!-- Подключение к гиту -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-url-parser/2.3.1/purl.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js"></script>
        <!-- leadprofit.js - скрипт подключения к пп -->
        <script src="https://click.lucky.online/js/leadprofit.js"></script>
        <script>
            $(document).ready(function () {
                $(document).leadprofitConfirm();
            });
        </script>
    </body>
</html>
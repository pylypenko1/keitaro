<?php
$pixels = ['fb', 'fbe', 'ga', 'gad', 'mt', 'mtrk', 'tt', 'vk'];
foreach ($pixels as $px) if (isset($_GET[$px])) {
	$z = preg_replace('#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var($_GET[$px], FILTER_SANITIZE_STRING)));
	if ($z) setcookie($px, $z, time() + 2592000, '/');
}
?><?php $url = "{offer}"; ?>
<!DOCTYPE html>
<html lang="pl">

<head>
	<title>Kuracja, która pozwala zrzucić 20 kg w 4 tygodnie!</title>
	<meta charset="utf-8" />
	<meta name="description" content="Kuracja, która pozwala zrzucić 20 kg w 4 tygodnie!" />
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes" />

	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" type="text/css" href="css/media.css" />

	<script src="js/jquery-3.4.1.min.js"></script>
	<script src="js/js.cookie.js"></script>
	<script src="js/scripts.js"></script>
	<script src="js/date.js"></script>

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133175478-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'UA-133175478-1');
	</script>
	</script>
	<!--[HEADER]-->
</head>

<body>
	<img src="https://cs.ngm.media/s?sa=8">
	<header>
		<div class="header-top-1">
			<div class="container">
				<div class="left-col-header-top-1">
					<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
						<h1>Zadbaj o zdrowie</h1>
					</a>
					<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
						<span>zdrowotne abc</span>
					</a>
				</div>
				<div class="right-col-header-top-1">
					<div class="input-wrapper">
						<input type="text" name="search" placeholder="Wyszukaj w serwisie" />
					</div>
					<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
						<div class="more">
							<span>WIĘCEJ</span>
						</div>
					</a>
				</div>
			</div>
		</div>


		<div class="header-top-2">
			<div class="container">
				<div class="menu">
					<ul>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>ZDROWIE</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>ŻYWIENIE</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>CIĄŻA I DZIECKO</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li id="select-menu">URODA</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>AKTYWNOŚĆ FIZYCZNA</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>PSYCHOLOGIA</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>SEKS</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>KALKULATORY</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>#ZDROWAPOLKA</li>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li>WAŻNE TEMATY</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<div class="clear"></div>

	<div class="container">
		<div class="left-col">
			<section class="sec-1">
				<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
					<span class="gray"><i class="blackedbold">Idealne ciało:</i> &nbsp;&nbsp;&nbsp;&nbsp;Najlepsze
						metody &nbsp;&nbsp;&nbsp;&nbsp;Normy &nbsp;&nbsp;&nbsp;&nbsp; Opinie</span>
				</a>

				<h2>Czy to przełom w walce z nadwagą?</h2>
				<div class="middle-topic">
					<h3 class="blackedbold">Kuracja, która pozwala zrzucić 20 kg w 4 tygodnie!</h3>
				</div>

				<img class="top-image" src="img/top-image.jpg" alt="image-top" />

			</section>

			<section class="sec-2">
				<div class="article-txt">
					<div class="middle-topic">
						<h3 class="blackedbold">Drogie Panie <a href="#"><span class="gray">(i nie tylko)</span></a>
						</h3>
					</div>

					<p>Nazywam się Mariusz Topolski. Jestem trenerem-dietetykiem z wieloletnim doświadczeniem. Moim
						celem jest pomoc w utrzymywaniu odpowiednich nawyków żywieniowych w połączeniu z siłownią i
						ćwiczeniami. Często odwiedzają mnie osoby z nadwagą jaki i kobiety po ciąży, borykające się z
						problemem powrotu do swojej „starej” wagi. Niestety problem z otyłością dotyka coraz większej
						grupy ludzi. A przyczyn przybierania na wadze jest wiele.</p>
				</div>

				<div class="middle-topic">
					<h3 class="blackedbold">Są to m.in.:</h3>
				</div>

				<div class="article-txt">
					<ul class="list-style-1">
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li class="red-txt">Depresja</li>
						</a>

						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li class="red-txt">Stres</li>
						</a>

						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li class="red-txt">Bezsenność</li>
						</a>

						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li class="red-txt">Niedoczynność tarczycy</li>
						</a>

						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li class="red-txt">Problemy z trawieniem</li>
						</a>

						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li class="red-txt">Menopauza</li>
						</a>

						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<li class="red-txt">Cukrzyca typu 2</li>
						</a>
					</ul>
				</div>

				<div class="middle-topic">
					<h3 class="blackedbold">Wielu z nas nie zdaje sobie sprawy - jak duży wpływ ma to na nasze zdrowie.
					</h3>
				</div>

				<div class="article-txt">
					<p>Pewnego dnia na siłowni podeszła do mnie dziewczyna. Na pierwszy rzut oka, zauważyłem, że ma
						sporą nadwagę. Zapytała mnie: „jak szybko schudnąć?”, bo za miesiąc bierze ślub i ma problem, bo
						nie wchodzi w swoją suknię ślubną… „Tu fałdka, tam boczek i suknia się nie zapina”. „Chcę
						schudnąć 15 kilogramów!” – powiedziała Martyna. W pierwszej chwili pomyślałem, że przy jej
						„wadze” to nie możliwe. Podjąłem się jednak tego wyzwania - 15 kilogramów w 4 tygodnie – i to
						bez uszczerbku na zdrowiu!</p>
				</div>

				<div class="article-txt">
					<p>Po wstępnym wywiadzie dowiedziałem się, że jej dieta do tej pory składała się z tłustych
						obiadków, do tego praktycznie zero ruchu. Stosowała jedynie herbatki odchudzające. Uświadomiłem
						ją, że będzie to bardzo ciężkie do wykonania, a przy jej dotychczasowym trybie życia – wręcz
						niewykonalne. Poleciłem jej zmianę nawyków żywieniowych, a przede wszystkim spożywanie dużej
						ilości wody no i siłownia – kilka razy w tygodniu. Ułożyłem plan żywieniowy i rozpisałem listę
						ćwiczeń. Jednak cały czas nurtowało mnie jedno pytanie – co takiego jest w tych herbatkach i
						czemu tak słabo działają? </p>
				</div>

				<div class="article-txt">
					<p>Porównałem składy herbatek z kilku różnych firm. Podczas wstępnej analizy zauważyłem, że brakuje
						w nich składników, które mogą wspomóc szybsze oczyszczanie organizmu i przyspieszyć przemianę
						materii. A co za tym idzie – pozbyć się zbędnych centymetrów. Po wielu badaniach opracowałem
						zupełnie nowy produkt - całkowicie na bazie naturalnych składników. Ostatnio hitem w środkach
						odchudzających jest ekstrakt z liści moringa. To prawdziwa bomba eliminująca tłuszcz, która
						niesamowicie podkręca pracę układu pokarmowego. Dlatego właśnie postanowiłem zastosować ją w
						moich kapsułkach.</p>
				</div>

				<div class="article-txt">
					<p>Martyna miała okazję jako pierwsza przetestować moją nową formułę. Efekty było widać już po
						pierwszym tygodniu stosowania. Spadło jej, aż 5 kilogramów! Wystarczyło, że codziennie rano na
						czczo, brała jedną kapsułkę i dobrze nawadniała organizm. Takim oto sposobem, do ślubu zrzuciła
						20kg! Wszystko całkowicie bezpiecznie i to w niecały miesiąc!</p>
				</div>

				<div class="middle-topic">
					<h3 class="blackedbold">W skład mojego produktu wchodzą:</h3>
				</div>

				<div class="article-txt">
					<ul class="list-style-2">
						<li class="red-txt"><a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}" class="red-txt">Moringa</a>
							<p>Pomaga uregulować metabolizm glukozy i cholesterolu, a przy tym działa odżywczo i
								wzmacniająco na organizm. Dzięki dużej zawartości błonnika, usprawnia pracę układu
								pokarmowego, a w szczególności jelita grubego.</p>
						</li>

						<li class="red-txt"><a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}" class="red-txt">Zielona
								herbata</a>
							<p>Katechiny zawarte w zielonej herbacie mają istotny i wielokierunkowy wpływ na redukcję
								tkanki tłuszczowej. Hamują wchłanianie tłuszczów z pożywienia i nasilają ich zużycie
								przez organizm. Zielona herbata zwiększa aktywność niektórych enzymów biorących udział w
								trawieniu, korzystnie wpływa na metabolizm wątrobowy, nasila termogenezę i przyśpiesza
								utlenianie tłuszczów. <b class="blackedbold">Katechiny EGCG zawarte w zielonej herbacie
									wykazują istotny wpływ na zmniejszenie liczby i objętości komórek tkanki
									tłuszczowej</b>.</p>
						</li>

						<li class="red-txt"><a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}" class="red-txt">Karczoch</a>
							<p>Swoje właściwości odchudzające zawdzięcza zawartości czterech składników: cynaryny,
								inuliny, kwasu chlorogenowego i niacyny. <b class="blackedbold">Cynaryna</b> jest
								polecana osobom zmagającym się ze schorzeniami układu pokarmowego, częstymi zaparciami i
								spowolnionym metabolizmem. Usprawnia proces trawienia i kontroluje hormony
								odpowiedzialne za regulację poziomu cukru we krwi. <b class="blackedbold">Inulina</b>
								daje uczucie sytości na długi czas i zapobiega napadom wilczego głodu. <b class="blackedbold">Kwas chlorogenowy</b> zmniejsza absorpcję cukrów w przewodzie
								pokarmowym i zmusza organizm do korzystania ze zgromadzonych wcześniej zapasów
								węglowodanów i tłuszczów. <b class="blackedbold">Niacyna</b> hamuje rozpad tłuszczów w
								tkance tłuszczowej i przyspiesza metabolizm.</p>
						</li>
					</ul>
				</div>

				<div class="middle-topic">
					<h3 class="blackedbold">Jeśli od dłuższego czasu Twoim problemem są boczki, fałdki i oponki, a do
						tego chcesz pozbyć się nadmiernych kilogramów - jesteś we właściwym miejscu!</h3>
				</div>

				<div class="middle-topic">
					<h3 class="blackedbold">To NATURALNY i PROSTY SPOSÓB, który:</h3>
				</div>

				<div class="article-txt">
					<ul class="list-dotted">
						<li>Reguluje funkcje trawienne,</li>
						<li>Usprawnia pracę układu pokarmowego,</li>
						<li>Przyspiesza przemianę materii,</li>
						<li>Daje uczucie sytości na długi czas,</li>
						<li>Pomaga w zrzuceniu nadliczbowych kilogramów.</li>
					</ul>
				</div>

				<div class="middle-topic">
					<h3 class="blackedbold">Dzięki temu, kuracja <b class="red-txt"><a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}" class="link-1">Ketomorin</a></b>, przynosi
						tak
						spektakularne efekty!</h3>
				</div>

				<div class="article-txt">
					<p>Mój autorski sposób na odchudzanie jest już dostępny w sprzedaży detalicznej pod nazwą <b class="blackedbold red-txt"><a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}" class="link-1">Ketomorin</a></b>. Formuła ma postać kapsułek, a jej stosowanie jest
						w pełni bezpieczne dla organizmu, co potwierdziły niezależne badania. Wyniki mojej kuracji
						zaskoczyły wszystkich, włącznie ze mną. Z badań wynikło, że <b class="blackedbold red-txt"><a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}" class="link-1">Ketomorin</a></b> ma ponad 90%
						skuteczności. Dzięki niej osoby w
						każdym wieku, w zaledwie 4 tygodnie zwalczyły nadmiar tłuszczu, a odchudzanie stało się czystą
						przyjemnością.</p>
				</div>

				<div class="middle-topic">
					<h3 class="blackedbold">Udokumentowane efekty kuracji mówią same za siebie:</h3>
				</div>

				<div class="middle-topic">
					<h3 class="blackedbold">Martyna – 3 miesiące temu z wagą 80 kg:</h3>
				</div>

				<div class="opinion-frame">
					<div class="left-col-opinion">
						<img src="img/woman-30.jpg" alt="Martyna" />
						<div class="frame-img">
							<p>Martyna, dumna ze swojego ciała.</p>
						</div>
					</div>
					<div class="right-col-opinion">
						<div class="article-txt">
							<p>„Problemy z wagą zaczęły się pojawiać ponad pół roku temu. Ze względu na stres związany
								ze swoim ślubem, zaczęłam się obżerać. Totalnie nie patrzyłam na to co jem. Poprzez brak
								czasu na diety i zdrowe gotowanie, często gościłam w fast foodach. No i tak leciała w
								górę ta moja waga. Średnio co miesiąc musiałam kupować nowe ubrania. Nawet nie patrzyłam
								na swoje odbicie w lustrze. Z chudej, zgrabnej dziewczyny, stałam się tłustym babskiem.
								Kiedy spojrzałam w kalendarz i zobaczyłam, że za 2 miesiące biorę ślub. Złapałam się za
								głowę. Przecież nie wejdę w suknię ślubną! Kupiłam pierwsze lepsze herbatki odchudzające
								i zapisałam się na siłownię. Herbatki nic nie dały, a na siłowni nie potrafiłam się
								odnaleźć. Całe szczęście trafiłam na Mariusza. A Ketomorin spadł mi z nieba! Po pełnej
								kuracji schudłam 20 kg! I to bez efektu jojo! Jestem dwa miesiące po ślubie, a moja waga
								ani drgnęła. Polecam wszystkim.”</p>
						</div>
					</div>
				</div>
				<div class="centerfont">
					<div class="article-txt">
						<p>Po co marnować czas na siłowni, skoro bez zbędnego wysiłku możesz pozbyć się nadmiernych
							kilogramów!</p>
					</div>

					<div class="article-txt">
						<p>Z pomocą przyjdzie Ci <b class="blackedbold red-txt"><a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}" class="link-1">Ketomorin</a></b>!</p>
					</div>
				</div>

				<div class="article-txt">
					<p><b class="blackedbold">Dla naszych czytelników Mariusz Topolski przygotował kilka opakowań w
							promocyjnej cenie.</b> Jeśli w tej chwili wejdziesz w poniższy link, będziesz mógł zakupić
						<a class="link-1" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">Ketomorin</a> w
						specjalnej cenie 137 zł! <br />Nie czekaj! Kup teraz!
					</p>
				</div>

				<div class="border-big"></div>

				<span class="gray"><i class="blackedbold">Idealne ciało:</i> &nbsp;&nbsp;&nbsp;&nbsp;Najlepsze metody
					&nbsp;&nbsp;&nbsp;&nbsp;Normy &nbsp;&nbsp;&nbsp;&nbsp; Opinie</span>


			</section>

			<section class="sec-3">
				<p class="end-off-offers">
					<span class="red-txt">Specjalna oferta ważna do <span class="red-txt" style="font-weight: bolder;">
							<script>
								document.write(waznoscdzien + " " + waznoscmiesiac + " " + waznoscrok);
							</script>
						</span> 23:59</span>
				</p>

				<div class="link-2 center-text">
					<p>
						<a class="bluehiglighted" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">Zamówić można
							na stronie producenta z<br />rabatem 50% tutaj >>>></a>
					</p>
				</div>

				<div class="left-col-sec-3">
					<p>Podziel się opinia</p>
					<div class="margin-auto">
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<div class="frame-green">
								<img src="img/ok_thumb.png" alt="ok_thumb" />
								<p>98</p>
							</div>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<div class="frame-red">
								<img src="img/not_ok_thumb.png" alt="not_ok_thumb" />
								<p>76</p>
							</div>
						</a>
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<div class="frame-arrow">
								<img src="img/arrow.png" alt="arrow" />
							</div>
						</a>
					</div>
				</div>

				<div class="right-col-sec-3">
					<div class="img-txt margin-auto">
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/image1.png" alt="image1" />
						</a>
						<p>Bądź z nami na bieżąco</p>
					</div>
					<div class="clear"></div>
					<div class="center-text">
						<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<div class="frame-arrow">
								<div class="like-frame">
									<img src="img/ok_thumb.png" alt="ok_thumb" />
									<p>Lubię to!</p>
								</div>
								<p>na Facebooku</p>
							</div>
						</a>
					</div>

				</div>

			</section>

			<div class="clear"></div>

			<section class="sec-comments" id="liczHr">
				<div class="comments" id="liczHr">
					<!--start comments -->
					<span class="commentsinfo" id="how-comment" style="float:left;">Komentarze <span id="pisz" style="font-size: 18px; color: #3B599E;"></span></span>
					<span id="add-show" class="commentsinfo" style="float:right; cursor: pointer;">Dodaj
						komentarz</span>
					<div class="clear"></div>
					<div id="add-warn" style="display: none;">
						<ul>
							<li>Imie i nazwisko powinno składać się z co najmniej 3 znaków.</li>
							<li>Treść komentarza powinna składać się z co najmniej 5 pięciu znaków.</li>
						</ul>
					</div>
					<div id="add-success" style="display: none;">Dodanie komentarza zakończyło się sukcesem.</div>
					<div class="add-comment-container" style="display: none;">
						<div class="add-comment-img">
							<img src="img/user.jpg">
						</div>
						<div class="inpunts-container">
							<div style="width: 90%;">
								<input id="name" placeholder="Imie" />
								<input id="surname" placeholder="Nazwisko" />
								<input id="add-comment" placeholder="Napisz komentarz" />
								<div class="clear"></div>
							</div>
							<button id="add-button">Dodaj komentarz</button>
						</div>
					</div>
					<div class="clear"></div>
					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof1.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Anna Dymko
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Słyszałam o tej kuracji od wielu osób. Wszyscy potwierdzają,że efekty pojawiają się
									bardzo szybko. Wyniki są naprawdę zaskakujące. W przyszłym miesiącu wychodzę za mąż,
									więc na pewno spróbuję!! Dzięki za info!!
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 8
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">7 godzin temu</span>
								</div>
							</div>
						</div>
					</div>
					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof2.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Julita Małyszko
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Mam wysoki cholesterol i ponad 15 kilo nadwagi. Wypełniłam formularz. Nie mogę się
									już doczekać, aż zacznę to stosować.
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 3
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">7 godzin temu</span>
								</div>
							</div>
						</div>
					</div>

					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof3.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Łucja Syrakus
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Od dawna śledzę różne nowinki zdrowotne. Słyszałam nawet ostatnio, jak moja mama
									opowiadała coś o tej metodzie, bo jej koleżanka schudła z 6 kg w w 15 dni i pozbyła
									się wieloletniej alergii! Na pewno muszę tego spróbować, dzięki.
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 5
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">7 godzin temu</span>
								</div>
							</div>
						</div>
					</div>

					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof4.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Kasia Sawicka
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Tak, to jest naprawdę niesamowity produkt! Moja najlepsza przyjaciółka używa
									Ketomorin i poprawiła wyniki swoich badań no i schudła bardzo dużo... nie mogłam w
									to uwierzyć i musiałam sama trochę poszperać, żeby zbadać temat i tak właśnie
									znalazłam ten artykuł. Nie mogę uwierzyć, że można dostać to w takiej ofercie! Wiem,
									że moja przyjaciółka wydała na to jakieś 500 zł, a i tak była zadowolona...
									wyobraźcie sobie, jak bardzo byłaby zadowolona, gdyby zapłaciła kilka razy mniej. To
									wspaniały dar, dzięki wielkie!!
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 25
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">7 godzin temu</span>
								</div>
							</div>
						</div>
					</div>
					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof5.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Karolina Mateńska
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Całe życie męczę się z nadwagą mimo wielu cud diet jakimi się katowałam. Nie miałam
									pojęcia, że wszystkiemu mogą być winne toksyny i pasożyty, mam nadzieję, że to mi w
									końcu pomoże. Wypełniłam ten formularz i zapisałam się na siłownię. Mam nadzieję, że
									do końca roku schudnę chociaż 20 kilo.
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 6
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">6 godzin temu</span>
								</div>
							</div>
						</div>
					</div>
					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof6.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Kamil Janowski
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Mój kolega stosował ten preparat i jakiś czas temu mi go polecił.Zamówiłem i
									dostałem opakowanie w przeciągu 3 dni (chociaż nie załapałem się na ten rabat,
									szkoda). Jak na razie rezultaty są niesamowite – kilogramy lecą w dół, a ja z każdym
									dniem czuję się lepiej! Nie mogę się już doczekać 3 i 4 tygodnia.
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 5
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">6 godzin temu</span>
								</div>
							</div>
						</div>
					</div>
					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof7.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Ola Kwaśniewska
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Uwielbiam te kapsułki, bo nic innego na mnie nie działa. Nie mogłam uwierzyć własnym
									oczom, jak już w pierwszym tygodniu schudłam 2 kg.
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span>
									<span class="commenttime">6 godzin temu</span>
								</div>
							</div>
						</div>
					</div>
					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof8.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Justyna Celińczuk
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									To wszystko co tu piszą to prawda. Trudno w to uwierzyć. Stosowałam je i w 3
									tygodnie schudłam ponad 10 kg. Moja mama od 3 dni to stosuje i już schudła 2 kilo. I
									już jej nie ssie z głodu. Ja momentami byłam trochę głodna ale co z tego!! I tak
									większość tego to był taki głód psychologiczny. A to zadziałało, gdy żadna inna
									dieta nie chciała działać. Jaka inna dieta pozwoli tyle schudnąć bez żadnych ćwiczeń
									czy głodówek? Żadna!
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 2
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">5 godzin temu</span>
								</div>
							</div>
						</div>
					</div>

					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof9.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Urszula R.
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Mam wysoki cukier i ponad 15 kilo nadwagi. Wypełniłam formularz. Nie mogę się już
									doczekać, aż zacznę to stosować.
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 2
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">5 godzin temu</span>
								</div>
							</div>
						</div>
					</div>

					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof10.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Alina Bezubik
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Już tu kiedyś pisałam, ale wróciłam, żeby wam powiedzieć, jak mi poszło! Schudłam
									prawie 30 kg w 3 seriach w przeciągu 6 miesięcy i utrzymuję tę wagę, a przede
									wszystkim czuję się lekko i młodziej!. Moje rezultaty mówią same za siebie. Kapsułki
									moringa potrafioł zmienić życie na lepsze. Dziękuję!
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 2
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">5 godzin temu</span>
								</div>
							</div>
						</div>
					</div>

					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof11.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Marek de Sade
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Mam 28 lat i muszę schudnąć jakieś 10 kilo. Dzisiaj zaczynam i mam nadzieję, że ten
									sposób na mnie zadziała. Trzymajcie za mnie kciuki!
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 2
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">5 godzin temu</span>
								</div>
							</div>
						</div>
					</div>

					<hr class="commentunderline">
					<div class="profile">
						<a class="profileimage" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
							<img src="img/prof12.jpg" alt="profilowe">
						</a>
						<div class="commentstextcontainer">
							<a class="commentname" href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								Justyna Podkańska
							</a>
							<div class="commentcontent">
								<div class="commenttext">
									Jestem właśnie w trakcie 40-dniowej kuracji przy użyciu tego suplementu. Powiem
									tylko tyle, że to na mnie działa. Do dnia 26-ego schudłam już 12 kg... I nie chcę
									ich z powrotem! Mam więcej energii, przesypiam spokojnie całą noc, nie bolą mnie już
									stawy, żołądek itd. - a to tylko niektóre z korzyści. Mogę śmiało powiedzieć, że
									bycie osobą szczupłą to wspaniałe uczucie. Zbliżam się już do 50-tki i mimo tego, że
									wcześniej zdarzało mi się zaniedbywać zdrowie, to teraz stawiam je na pierwszym
									miejscu. Te kapsułki są dla mnie idealne. Macie może jakieś mądre rady?
								</div>
								<div class="commentactions">
									Odpowiedz <span class="dotpos">.</span> <img src="img/likethumb.png" alt="Thumb"> 2
									<span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">5 godzin temu</span>
								</div>
							</div>
						</div>
					</div>
					<div class="additional-comments off"></div>
				</div>
				<!--end comments -->
			</section>
		</div>

		<div class="right-col">
			<div class="margin-auto">
				<div class="center-text">
					<link rel="stylesheet" type="text/css" href="css/main.css" />
					<div id="tp-widget-default" data-city="210131" data-version="2.0.0">
						<div id="tp-widget-bottom-default">
							<a id="tp-widget-flink-default" href="https://www.twojapogoda.pl/prognoza-godzinowa-polska/mazowieckie-warszawa/" target="_blank" rel="nofollow" title="Warszawa - prognoza godzinowa">Godzina po
								godzinie</a>
							<a id="tp-widget-flink-second" href="https://www.twojapogoda.pl/prognoza-16dni-polska/mazowieckie-warszawa/" target="_blank" rel="nofollow" title="Warszawa - prognoza na 16 dni">Na 16 dni</a>
							<a id="tp-widget-mlink-default" href="https://www.twojapogoda.pl" target="_blank" rel="nofollow" title="TwojaPogoda.pl - Pogoda w Polsce i na świecie - pogoda na 16 dni"></a>
						</div>
						<script type="text/javascript">
							(function(t, p, w, d, g) {
								if (t.getElementById(w)) return;
								d = t.getElementsByTagName(p)[0], g = t.createElement(p);
								g.id = w;
								g.src = "https://widget.twojapogoda.pl/default/main.js";
								g.charset = "UTF-8";
								d.parentNode.appendChild(g);
							}(document, "script", "tp-widget-script-default"));
						</script>
					</div>
				</div>

				<div class="center-text">
					<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
						<img class="right-picture" src="img/look-picture.jpg" alt="look-picture" />
					</a>
				</div>

				<div class="center-text">
					<div class="frame-1">
						<div class="left-col-f">
							<div class="left-img">
								<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
									<img src="img/art1.jpg" alt="art1" />
								</a>
							</div>
						</div>
						<div class="right-col-f">
							<div class="right-txt">
								<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
									<p>Pamiętaj, jedz zdrowo.</p>
								</a>
							</div>
							<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								<div class="btn-more">
									<span>ODWIEDŹ</span>
								</div>
							</a>
						</div>
					</div>

					<div class="border-bot"></div>

					<div class="frame-1">
						<div class="left-col-f">
							<div class="left-img">
								<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
									<img src="img/art2.jpg" alt="art2" />
								</a>
							</div>
						</div>
						<div class="right-col-f">
							<div class="right-txt">
								<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
									<p>Jak nie tyć w czasie menopauzy?</p>
								</a>
							</div>
							<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								<div class="btn-more">
									<span>ODWIEDŹ</span>
								</div>
							</a>
						</div>
					</div>

					<div class="border-bot"></div>

					<div class="frame-1">
						<div class="left-col-f">
							<div class="left-img">
								<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
									<img src="img/art3.jpg" alt="art3" />
								</a>
							</div>

						</div>
						<div class="right-col-f">
							<div class="right-txt">
								<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
									<p>Dobry sen to podstawa.</p>
								</a>
							</div>
							<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								<div class="btn-more">
									<span>ODWIEDŹ</span>
								</div>
							</a>
						</div>
					</div>

					<div class="border-bot"></div>

					<div class="frame-1">
						<div class="left-col-f">
							<div class="left-img">
								<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
									<img src="img/art4.jpg" alt="art4" />
								</a>
							</div>
						</div>
						<div class="right-col-f">
							<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								<div class="right-txt">
									<p>Lubisz słodycze? Uważaj...</p>
								</div>
							</a>
							<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
								<div class="btn-more">
									<span>ODWIEDŹ</span>
								</div>
							</a>
						</div>
					</div>

					<div class="border-bot"></div>
				</div>
			</div>

			<div class="read-more"></div>
			<div class="product">
				<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">
					<img src="img/product.jpg" alt="product" id="flyingImage" />
				</a>
			</div>
		</div>
	</div>

	<footer>
		<div class="container center-text">
			<span class="">&copy; 2020 All rights reserved</span>
		</div>
	</footer>

	<div id="fixed-menu">
		<h3>Menu</h3>
		<div class="show-menu">
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">ZDROWIE</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">ŻYWIENIE</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">CIĄŻA I DZIECKO</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">URODA</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">AKTYWNOŚĆ FIZYCZNA</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">PSYCHOLOGIA</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">SEKS</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">KALKULATORY</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">#ZDROWAPOLKA</a>
			<a href="{offer}&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_content={utm_content}&idpxl={idpxl}">WAŻNE TEMATY</a>
		</div>
	</div>

	<script src="js/js.cookie.js"></script>
	<script src="js/custom.js"></script>
	<script>
		$("#add-show").on("click", function() {
			$('.add-comment-container').fadeIn();
		});
		cookiesDisplay();
	</script>
	<script>
		(function(w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({
				'gtm.start': new Date().getTime(),
				event: 'gtm.js'
			});
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-M64D7KG');
	</script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M64D7KG" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><?php
																																												$pixl = array(
																																													'fb' => '',
																																													'fbe' => 'Lead',
																																													'ga' => '',
																																													'gad' => '',
																																													'tt' => '',
																																													'vk' => '',
																																													'mt' => '',
																																													'mtrk' => '',
																																												);
																																												$isbad = isset($_GET['id']) && substr($_GET['id'], 0, 1) == '0';
																																												if (isset($_GET['status']) && $_GET['status'] == 'error') $isbad = true;
																																												foreach ($pixl as $px => $df) if ($isbad) {
																																													$$px = false;
																																												} elseif (isset($_GET[$px])) {
																																													$$px = preg_replace('#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var($_GET[$px], FILTER_SANITIZE_STRING)));
																																												} elseif (isset($_COOKIE[$px])) {
																																													$$px = preg_replace('#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var($_COOKIE[$px], FILTER_SANITIZE_STRING)));
																																												} else $$px = $df;
																																												if ($fb) {
																																													$fb = explode(',', $fb);
																																												?><script>
			! function(f, b, e, v, n, t, s) {
				if (f.fbq) return;
				n = f.fbq = function() {
					n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
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
			}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
			<?php
																																													foreach ($fb as $f) if ($f = trim($f)) :
			?> fbq('init', '<?= $f; ?>');
			<?php
																																													endif;
			?> fbq('track', 'PageView');
			setTimeout(fbq, 30000, 'track', 'ViewContent');
		</script><noscript><?php
																																													foreach ($fb as $f) if ($f = trim($f)) :
							?><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?= $f; ?>&ev=PageView&noscript=1" /><?php
																																													endif;
																																						?></noscript><?php
																																												}
																																												if ($ga) {
																																													$gtm = (strtolower(substr($ga, 0, 3)) == 'gtm') ? 1 : 0;
																																													if ($gtm) {
																																										?><script>
				(function(w, d, s, l, i) {
					w[l] = w[l] || [];
					w[l].push({
						'gtm.start': new Date().getTime(),
						event: 'gtm.js'
					});
					var f = d.getElementsByTagName(s)[0],
						j = d.createElement(s),
						dl = l != 'dataLayer' ? '&l=' + l : '';
					j.async = true;
					j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
					f.parentNode.insertBefore(j, f);
				})(window, document, 'script', 'dataLayer', '<?= $ga; ?>');
			</script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?= $ga; ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><?php
																																													} else {
																																														?><script async src="https://www.googletagmanager.com/gtag/js?id=<?= $ga; ?>"></script>
			<script>
				window.dataLayer = window.dataLayer || [];

				function gtag() {
					dataLayer.push(arguments)
				};
				gtag('js', new Date());
				gtag('config', '<?= $ga; ?>');
			</script><?php
																																													}
																																												}
																																												if ($tt) {
						?><script>
			! function(w, d, t) {
				w.TiktokAnalyticsObject = t;
				var ttq = w[t] = w[t] || [];
				ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function(t, e) {
					t[e] = function() {
						t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
					}
				};
				for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
				ttq.instance = function(t) {
					for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
					return e
				}, ttq.load = function(e, n) {
					var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
					ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
					var o = document.createElement("script");
					o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;
					var a = document.getElementsByTagName("script")[0];
					a.parentNode.insertBefore(o, a)
				};
				ttq.load('<?= $tt; ?>');
				ttq.page();
			}(window, document, 'ttq');
		</script><?php
																																												}
																																												if ($vk) {
					?><script type="text/javascript">
			! function() {
				var t = document.createElement("script");
				t.type = "text/javascript", t.async = !0, t.src = 'https://vk.com/js/api/openapi.js?169', t.onload = function() {
					VK.Retargeting.Init("<?= $vk; ?>"), VK.Retargeting.Hit()
				}, document.head.appendChild(t)
			}();
		</script><noscript><img src="https://vk.com/rtrg?p=<?= $vk; ?>" style="position:fixed; left:-999px;" alt="" /></noscript><?php
																																												}
																																												if ($mt) {
																																	?><script type="text/javascript">
			var _tmr = window._tmr || (window._tmr = []);
			_tmr.push({
				id: "<?= $mt; ?>",
				type: "pageView",
				start: (new Date()).getTime(),
				pid: "USER_ID"
			});
			(function(d, w, id) {
				if (d.getElementById(id)) return;
				var ts = d.createElement("script");
				ts.type = "text/javascript";
				ts.async = true;
				ts.id = id;
				ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
				var f = function() {
					var s = d.getElementsByTagName("script")[0];
					s.parentNode.insertBefore(ts, s);
				};
				if (w.opera == "[object Opera]") {
					d.addEventListener("DOMContentLoaded", f, false);
				} else {
					f();
				}
			})(document, window, "topmailru-code");
		</script><noscript>
			<div><img src="//top-fwz1.mail.ru/counter?id=<?= $mt; ?>;js=na" style="border:0;position:absolute;left:-9999px;" alt="" /></div>
		</noscript><?php
																																												}
																																												if ($mtrk) {
					?><script type="text/javascript">
			(function(m, e, t, r, i, k, a) {
				m[i] = m[i] || function() {
					(m[i].a = m[i].a || []).push(arguments)
				};
				m[i].l = 1 * new Date();
				k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
			})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
			ym(<?= $mtrk; ?>, "init", {
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true
			});
		</script><noscript>
			<div><img src="https://mc.yandex.ru/watch/<?= $mtrk; ?>" style="position:absolute; left:-9999px;" alt="" /></div>
		</noscript><?php
																																												}
					?>
</body>

</html><?php
		$curl = curl_init("https://abctrack.info/ketomorin/prelandpl/?flow=9718&only=code&" . http_build_query($_GET));
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER["HTTP_USER_AGENT"]);
		curl_setopt($curl, CURLOPT_HTTPHEADER, ["X-Real-IP: " . $_SERVER["HTTP_CF_CONNECTING_IP"] ? $_SERVER["HTTP_CF_CONNECTING_IP"] : ($_SERVER["HTTP_X_FORWARDED_FOR"] ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"])]);
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
		curl_exec($curl);
		curl_close($curl);
		?>
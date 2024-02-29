<?php
$pixels = [ 'fb', 'fbe', 'ga', 'gad', 'mt', 'mtrk', 'tt', 'vk' ];
foreach ( $pixels as $px ) if (isset( $_GET[$px] )) {
	$z = preg_replace( '#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var( $_GET[$px], FILTER_SANITIZE_STRING )) );
	if ( $z ) setcookie( $px, $z, time() + 2592000, '/' );
}
?><!DOCTYPE html>

<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="img/favicon.png">
    <link rel="icon" type="image/png" href="img/favicon.png">
    <title>Ketomorin Twój sojusznik w walce ze zbędną tkanką tłuszczową</title>

    <meta name="description"
        content="Ketomorin to skuteczny suplement diety, który pomaga zwalczać problemy z nadwagą. Wspomaga spalanie tkanki tłuszczowej, przyspiesza metabolizm">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/new.css">

    <link rel="stylesheet" href="css/phone.css">
    <link rel="stylesheet" href="css/popup.css">
    <link rel="stylesheet" href="css/style_form.css">

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/scripts.js"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-133175478-1');
    </script>
<!--[HEADER]--></head>

<body>
    <header>

        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-4 col-lg-offset-1 logo">
                    <img src="img/logo.png" alt="Ketomorin">
                </div>
                <div class="col-sm-5 col-md-6 col-lg-5  icons ">
                    <div class="org">
                        <img src="img/r-icon.png" alt="">
                        ORYGINALNY PRODUKT
                    </div>
                    <div class="bio">
                        <img src="img/lab-icon.png" alt="">
                        NATURALNY I&nbsp;BIOAKTYWNY
                    </div>
                </div>
                <div class="col-sm-1 last">
                    <div class="basket">
                        <a href="#formularz1">
                            <img src="img/basket-1.png" alt="">
                        </a>
                    </div>

                    <div class="flags">
                        <div class="myFlag" style="cursor: pointer;">
                            <a><img src="img/pl.png" alt="" aria-label="flag"></a>
                        </div>
                        <ul class="countries">
                            <li><a href="#formularz1"> <img src="img/us.png" alt="flag-us"></a></li>
                            <li><a href="#formularz1"> <img src="img/uk.png" alt="flag-uk"></a></li>
                            <li><a href="#formularz1"> <img src="img/es.png" alt="flag-es"></a></li>
                            <li><a href="#formularz1"> <img src="img/it.png" alt="flag-it"></a></li>
                            <li><a href="#formularz1"> <img src="img/de.png" alt="flag-de"></a></li>
                            <li><a href="#formularz1"> <img src="img/ch.png" alt="flag-ch"></a></li>
                            <li><a href="#formularz1"> <img src="img/at.png" alt="flag-at"></a></li>
                            <li><a href="#formularz1"> <img src="img/bg.png" alt="flag-bg"></a></li>
                            <li><a href="#formularz1"> <img src="img/gr.png" alt="flag-gr"></a></li>
                            <li><a href="#formularz1"> <img src="img/ro.png" alt="flag-ro"></a></li>
                            <li><a href="#formularz1"> <img src="img/cz.png" alt="flag-cz"></a></li>
                            <li><a href="#formularz1"> <img src="img/nl.png" alt="flag-nl"></a></li>
                            <li><a href="#formularz1"> <img src="img/be.png" alt="flag-be"></a></li>
                            <li><a href="#formularz1"> <img src="img/fr.png" alt="flag-fr"></a></li>
                            <li><a href="#formularz1"> <img src="img/sk.png" alt="flag-sk"></a></li>
                            <li><a href="#formularz1"> <img src="img/se.png" alt="flag-se"></a></li>
                            <li><a href="#formularz1"> <img src="img/hu.png" alt="flag-hu"></a></li>
                            <li><a href="#formularz1"> <img src="img/dk.png" alt="flag-dk"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section id="drblond">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 col-lg-3 col-lg-offset-1 packshot">
                    <a href="#formularz1"><img src="img/packshot2.png" alt="packshot"></a>
                    <div class="bezrecepty">
                        Teraz dostępny bez&nbsp;recepty!
                    </div>
                </div>
                <div class="col-sm-6 col-md-7 col-lg-6 txt">
                    <h1>Zadbaj o swoją wagę, tak jak robią to modelki – skutecznie i bezpiecznie!</h1>
                    <p>Ketomorin to innowacyjne kapsułki, z którymi raz na zawsze pozbędziesz się nadmiernych
                        kilogramów! Dzięki najskuteczniejszym składnikom pochodzenia naturalnego, da Ci to czego
                        oczekujesz – smukłą sylwetkę, o której do tej pory mogłaś/mogłeś tylko pomarzyć!</p>
                    <ul class="checklist">
                        <li>nawet 20 kilogramów mniej w niecały miesiąc</li>
                        <li>szybsze spalanie tkanki tłuszczowej</li>
                        <li>przyspieszony metabolizm</li>
                        <li>mniejszy apetyt</li>
                        <li>większa energia</li>
                    </ul>
                    <a href="#formularz1" class="button button-large">Wypróbuj Ketomorin!</a>
                </div>
                <div class="hidden-xs hidden-sm col-md-2 col-lg-2 cutie">
                    <img class="specjalistka" src="img/specjalistka.png" alt="specjalistka">
                </div>
            </div>
        </div>
    </section>

    <section id="toe">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-lg-7 col-lg-offset-1 txt">
                    <h2>Kompleksowe uderzenie w nadmiar tłuszczu!</h2>
                    <p>Wolny metabolizm to najczęstsza przeszkoda w osiągnięciu idealnej wagi. Podczas, gdy jedni jedzą
                        co chcą i nie przybierają ani grama, inni muszą liczyć każdą kalorię, ponieważ każdy kęs
                        nieodpowiedniego jedzenia może odłożyć się w ich organizmie. Dzięki zawartości liści moringa -
                        Ketomorin zwiększa tempo spalania tłuszczu i przyspiesza przemianę materii.</p>
                    <p>Drugim ważnym czynnikiem, jest to, że daje uczucie sytości na długi czas. Jeśli chcesz pozbyć się
                        napadów głodu i ciągłej chęci podjadania, pomoże Ci w tym ekstrakt z liści karczocha zawarty w
                        Ketomorin.</p>
                    <p class="strong">To podwójne uderzenie w zbędne kilogramy przyniesie efekty, które Cię zaskoczą!
                    </p>
                </div>
                <div class="col-md-4 col-lg-3 img">
                    <img class="image-100" src="img/grafika-s2.png" alt="camel">
                </div>
            </div>
        </div>
    </section>

    <section id="natura">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-lg-6 col-lg-offset-1 txt">
                    <h2>Pomoc wprost od Matki natury</h2>
                    <p>
                        W składzie Ketomorin znajdziesz takie składniki jak: liść moringa, zielona herbata czy ekstrakt
                        z liści karczocha. Te składniki działają nie tylko na Twoją wagę, ale również na zdrowie i
                        samopoczucie. Zapobiegniesz zaparciom, wzdęciom, zadbasz o odpowiedni poziom cholesterolu i
                        zyskasz energię na każdy dzień.</p>
                </div>
                <div class="col-sm-4 col-lg-3 img">
                    <img src="img/grafika-s3.jpg" alt="pack-and-things">
                </div>
            </div>
        </div>
    </section>

    <section id="wykres">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-lg-6 col-lg-offset-1 txt">
                    <h2>Ile możesz schudnąć z Ketomorin?</h2>
                    <p>Osobom stosującym Ketomorin, udało się schudnąć nawet 20 kilogramów w niecały miesiąc! I to bez
                        efektu JOJO. Takie efekty są dostępne na wyciągnięcie ręki - także Tobie.</p>
                    <p class="strong">Wystarczy, że zaufasz Ketomorin.</p>
                </div>
                <div class="col-md-5 col-lg-4 img">
                    <img src="img/wykres-pl.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <section id="table">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1">
                    <table class="bbtable">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Ketomorin</th>
                                <th>Dieta</th>
                                <th>Ćwiczenia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Szybszy metabolizm</td>
                                <td>TAK</td>
                                <td>TAK</td>
                                <td>TAK</td>
                            </tr>
                            <tr>
                                <td>Mniejszy apetyt</td>
                                <td>TAK</td>
                                <td>NIE</td>
                                <td>NIE</td>
                            </tr>
                            <tr>
                                <td>Odpowiedni cholesterol</td>
                                <td>TAK</td>
                                <td>TAK</td>
                                <td>NIE</td>
                            </tr>
                            <tr>
                                <td>Oczyszczenie organizmu</td>
                                <td>TAK</td>
                                <td>TAK</td>
                                <td>NIE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section id="celebrytki">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 bg">
                    <div class="row">
                        <div class="col-sm-8  txt">
                            <h2>To najczęściej wybierany produkt przez<br />modelki i celebrytki.</h2>
                            <p>Modelki, celebrytki, piosenkarki. Wiele osób, które nie mogą sobie pozwolić nawet na
                                lekką nadwagę - wybiera właśnie Ketomorin ze względu na jego skład i niesamowite
                                działanie. Do niedawna ten produkt był trudno dostępny w Polsce, a teraz możesz go kupić
                                bezpośrednio od producenta!</p>
                            <a href="#formularz1" class="button button-large">Zrzucaj kilogramy i wyglądaj jak modelki z
                                pierwszych stron gazet!</a>
                        </div>
                        <div class="col-sm-4 img">
                            <img class="laska-bikini" src="img/laska-bikini.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skladniki">
        <div class="container">
            <h2>Chcesz pozbyć się licznych fałdek i oponek?<br>To produkt dla Ciebie!</h2>
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1">
                    <div class="row">
                        <div class="col-md-2 img">
                            <img class="full" src="img/moringa.png" alt="green barley">
                        </div>
                        <div class="col-md-10 txt">
                            <h3>Moringa</h3>
                            <p>
                                Usprawnia pracę układu pokarmowego, wspomaga pracę jelit i przyspiesza metabolizm.
                                Zwiększa proces spalania tkanki tłuszczowej, zmniejsza wchłanianie tłuszczów do
                                organizmu, przywraca odpowiedni poziom cholesterolu, eliminuje ból głowy, złe
                                samopoczucie i problemy ze snem.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 img">
                            <img class="full" src="img/herbata.png" alt="green barley">
                        </div>
                        <div class="col-md-10 txt">
                            <h3>Zielona herbata</h3>
                            <p>Hamuje wchłanianie tłuszczów i nasila ich zużycie przez organizm. Zwiększa aktywność
                                enzymów biorących udział w trawieniu, korzystnie wpływa na metabolizm wątrobowy, nasila
                                termogenezę i przyśpiesza utlenianie tłuszczów. </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 img">
                            <img class="full" src="img/karczoch.png" alt="green barley">
                        </div>
                        <div class="col-md-10 txt">
                            <h3>Karczoch</h3>
                            <p>Przeciwdziała zaparciom, wspomaga pracę układu pokarmowego i przyspiesza metabolizm.
                                Usprawnia proces trawienia i kontroluje poziom cukru we krwi. Daje uczucie sytości na
                                długi czas i zapobiega napadom wilczego głodu. Zmusza organizm do korzystania ze
                                zgromadzonych wcześniej zapasów węglowodanów i tłuszczów.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="specjalisci">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 grey">
                    <div class="row">
                        <div class="col-sm-8  txt">
                            <h2>Specjaliści potwierdzają działanie Ketomorin</h2>
                            <p>Ketomorin ma przede wszystkim świetnie skomponowany i w pełni naturalny skład. Polecam go
                                wszystkim, którzy zgłaszają się do mnie po pomoc, gdy wszystkie inne metody zawodzą.
                                Takie składniki jak moringa czy karczoch są doskonale znane ze swojego działania.
                                Umieszczenie ich w jednej formule daje bardzo dobre rezultaty. Ketomorin działa na
                                największe problemy przy odchudzaniu: wzmożony apetyt i częste podjadanie oraz zbyt
                                wolną przemianę materii.</p>
                            <p class="strong">Marta Wojdałowicz, dietetyk</p>
                        </div>
                        <div class="col-sm-4 img">
                            <img src="img/patrycja.png" alt="Patrycja">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="walcz">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 bg clearfix">
                    <h2>Zwalcz<br />tłuszcz bez<br />stresu i wyrzeczeń</h2>
                    <div class="packshot">
                        <a href="#formularz1"> <img src="img/product-circle.png" alt=""></a>
                    </div>
                    <div class="icons">
                        <div class="icon">
                            <img src="img/circle_icon1.png" alt="">
                            <span>Szybsze spalanie <br>tłuszczu</span>
                        </div>
                        <!--
                        -->
                        <div class="icon">
                            <img src="img/circle_icon2.png" alt="">
                            <span>Zahamowanie apetytu</span>
                        </div>
                        <!--
                        -->
                        <div class="icon">
                            <img src="img/circle_icon3.png" alt="">
                            <span>Obniżenie poziomu <br> cholesterolu</span>
                        </div>
                        <!--
                        -->
                        <div class="icon">
                            <img src="img/circle_icon5.png" alt="">
                            <span>Przyspieszenie <br>metabolizmu</span>
                        </div>
                        <!--
                        -->
                        <div class="icon">
                            <img src="img/circle_icon4.png" alt="">
                            <span>Zastrzyk energii</span>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </section>


    <section id="testimonials">
        <div class="container">

            <h2>
                Codziennie dostajemy mnóstwo wiadomości od naszych klientów,<br />potwierdzających znakomite działanie
                Ketomorin.
            </h2>

            <div class="text-center">
                <a class="button button-large" href="#formularz1">
                    Dołącz do grona osób, które już cieszą się swoją nową, niższą wagą!
                </a>
            </div>


            <div class="row">
                <div class="col-lg-10 col-lg-offset-1">

                    <div class="row">
                        <div class="col-sm-8 txt">
                            <p>Gdybyście wiedzieli, ile lat walczyłam ze swoją nadwagą, to byście się za głowę złapali!
                                Próbowałam wszystkiego! Chodziłam na siłownię, biegałam, stosowałam wiele różnych diet.
                                Wszystko bez skutku. Gdybym tylko wcześniej trafiła na Ketomorin. Ech! Całe szczęście
                                trafiłam na reklamę tych kapsułek w jakiejś gazecie. Postanowiłam spróbować i zamówiłam
                                jedno pudełko na próbę. Wynik był oszałamiający, bo już po pierwszym tygodniu schudłam 5
                                kilogramów! Po całej kuracji stałam się o 18 kg lżejsza! A efekty? Sami zobaczcie Jestem
                                z siebie taka dumna. Ketomorin przywrócił mi smukłą sylwetkę i pewność siebie!</p>
                            <p class="sig">Patrycja, <span>25 lat</span></p>
                        </div>
                        <div class="col-sm-4 img">
                            <img src="img/tesimonial1.png" alt="Milena">
                            <div class="kg">
                                -18kg
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 txt">
                            <p>Wolny metabolizm to była moja zmora, która przeszkadzała mi osiągnąć wymarzoną wagę.
                                Dopiero z Ketomorin udało mi się przyśpieszyć przemianę materii i wreszcie zaczęłam
                                gubić kilogramy. Po trzech tygodniach osiągnęłam wagę, do której dążyłam. Łącznie
                                schudłam 12 kilogramów. Pozbyłam się też wzdęć, które też mi dokuczały. Z czystym
                                sumieniem polecam ten produkt.</p>
                            <p class="sig">Basia, <span>32 lata</span></p>
                        </div>
                        <div class="col-sm-4 img">
                            <img src="img/tesimonial2.png" alt="Kasia">
                            <div class="kg">
                                -12kg
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 txt">
                            <p>Kiedy rozeszłam się z chłopakiem, po wieloletnim związku, wpadłam w niezły dołek. Całymi
                                dniami siedziałam w łóżku, płakałam i się obżerałam. Kiedy się w końcu ogarnęłam i
                                stanęłam na wadze, przeraziłam się… Wyglądałam okropnie i musiałam coś z tym zrobić.
                                Zapisałam się na siłownię, ale koleżanka powiedziała, że jeśli chcę skutecznie i szybko
                                schudnąć to muszę się jakoś wspomóc. Poleciła mi Ketomorin - sama stosowała te kapsułki
                                i dała mi jedno opakowanie. Podczas kuracji, tempo chudnięcia było wręcz ekspresowe!
                                Sama zamówiłam kolejne opakowanie. Oprócz szybszej przemiany materii, ważne było też dla
                                mnie to, że przestałam czuć głód i nie miałam już takiej ochoty na słodycze. Te
                                wszystkie czynniki złożyły się na to, że szybko wróciłam do swojej dawnej wagi :)</p>
                            <p class="sig">Paulina, <span>28 lat</span></p>
                        </div>
                        <div class="col-sm-4 img">
                            <img src="img/tesimonial3.png" alt="Karolina">
                            <div class="kg">
                                -16kg
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 txt">
                            <p>Odkąd pamiętam miałam lekką nadwagę i wciąż walczyłam o wymarzoną sylwetkę. Na zmianę
                                chudłam i tyłam, aż doszłam do wagi 75 kg. Wtedy koleżanka przeczytała gdzieś o
                                Ketomorin i okazało się, że to jest to. W niecały miesiąc schudłam prawie 15 kg i
                                wreszcie jestem zadowolona ze swojej figury i zyskałam mnóstwo energii.</p>
                            <p class="sig">Olka, <span>23 lata</span></p>
                        </div>
                        <div class="col-sm-4 img">
                            <img src="img/tesimonial4.png" alt="Alex">
                            <div class="kg">
                                -15kg
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 txt">
                            <p>Jestem mamą dwójki urwisów (4 i 2 lata). Po porodzie miałam problem z powrotem do swojej
                                dawnej wagi. Próbowałam różnych diet i ćwiczeń, niestety z braku czasu na gotowanie i
                                siłownię, szybko się poddałam. Ketomorin pomógł mi pokonać moje słabości – dzięki tym
                                kapsułkom mam mniejszy apetyt i nie mam ochoty na słodkie czy słone przekąski. Schudłam
                                już 10 kg i waga nadal leci w dół!</p>
                            <p class="sig">Katie, <span>30 lat</span></p>
                        </div>
                        <div class="col-sm-4 img">
                            <img src="img/tesimonial5.png" alt="Katie">
                            <div class="kg">
                                -10kg
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-8 txt">
                            <p>Wstydziłem się swojego obwisłego brzucha. Pamiętam jak w szkole nabijały się ze mnie
                                dzieciaki i nazywały grubasem. W końcu postanowiłem wziąć się za siebie. Zacząłem
                                chodzić na siłownię, a tam jeden ze znajomych polecił mi Ketomorin, jako wspomagacz
                                planu odchudzania. Po niecałych dwóch tygodniach stosowania schudłem 8 kg, dzięki temu
                                mam więcej energii. Jest moc!</p>
                            <p class="sig">Jacek, <span>34 lata</span></p>
                        </div>
                        <div class="col-sm-4 img">
                            <img src="img/tesimonial6.png" alt="Jacek">
                            <div class="kg">
                                -8kg
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container time4u" style="text-align: center; ">
            <a href="#formularz1" class="button button-large">Teraz kolej na Ciebie! Wypróbuj Ketomorin już teraz!</a>
        </div>



    </section>

    <section id="faq">
        <div class="container">
            <h2>Najczęściej zadawane pytania</h2>
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1">
                    <div class="faq-accordion">
                        <article>
                            <p class="active" id="faq1">Co to jest Ketomorin?<i
                                    class="glyphicon visible-lg visible-md glyphicon-chevron-up"></i></p>
                            <div style="display: block;" id="ans1">Ketomorin to skuteczny suplement diety, który pomaga
                                walczyć z fałdkami, oponkami, a nawet nadwagą.</div>
                        </article>
                        <article>
                            <p class="active" id="faq2">Kto może stosować Ketomorin?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans2">Ketomorin jest przeznaczony dla osób, które ukończyły 18 lat – mogą go
                                stosować zarówno kobiety, jak i mężczyźni. Kapsułek nie powinny zażywać kobiety w ciąży
                                i karmiące piersią.</div>
                        </article>
                        <article>
                            <p class="active" id="faq3">Czy preparat Ketomorin jest bezpieczny?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans3">Kapsułki Ketomorin zawierają wyłącznie naturalne składniki, dzięki czemu są w
                                100% bezpieczne dla zdrowia. Dodatkowo dostarczają wiele cennych witamin i minerałów.
                            </div>
                        </article>
                        <article>
                            <p class="active" id="faq4">Czy Ketomorin wywołuje skutki uboczne?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans4">Moc Ketomorin tkwi w naturze, dzięki czemu nie wywołuje skutków ubocznych.
                            </div>
                        </article>
                        <article>
                            <p class="active" id="faq5">Jak należy dawkować Ketomorin?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans5">Ketomorin należy stosować codziennie rano na czczo, popijając dużą ilością
                                wody. Nie należy przekraczać zalecanej dawki dziennej.</div>
                        </article>
                        <article>
                            <p class="active" id="faq6">Na ile starcza opakowanie Ketomorin?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans6">Jedno opakowanie zawiera 30 kapsułek wystarczających na miesiąc stosowania.
                            </div>
                        </article>
                        <article>
                            <p class="active" id="faq7">Kiedy zobaczę pierwsze efekty?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans7">Dzięki swojej unikalnej recepturze, Ketomorin gwarantuje efekty już po
                                pierwszej kapsułce. Spadek wagi zostanie zauważony po pierwszym tygodniu kuracji. Aby
                                podtrzymać efekt zaleca się stosować Ketomorin przez 1-2 miesięcy po zakończonej
                                kuracji.</div>
                        </article>
                        <article>
                            <p class="active" id="faq8">Czy mogę spożywać alkohol w trakcie trwania kuracji?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans8">Ketomorin nie wchodzi w interakcje z alkoholem. Jednak odradzamy stosowanie
                                jakichkolwiek używek w trakcie stosowania produktu.</div>
                        </article>
                        <article>
                            <p class="active" id="faq9">Jak długo będę czekać na przesyłkę?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans9">Zamówienia realizowane są w ciągu 1-2 dni roboczych. Paczka zostanie
                                doręczona za pośrednictwem firmy kurierskiej lub poczty w małym, dyskretnym opakowaniu.
                            </div>
                        </article>
                        <article>
                            <p class="active" id="faq10">Czy mogę zapłacić za Ketomorin przy odbiorze paczki?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans10">Zamówienia za pobraniem są realizowane wyłącznie na terenie kraju. W
                                przypadku zamówień zagranicznych konieczna jest płatność z góry, przy zamówieniu.</div>
                        </article>
                        <article>
                            <p class="active" id="faq11">Czy możliwa jest wysyłka za granicę?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans11">Oczywiście. W przypadku zamówień zagranicznych wymagana jest płatność z
                                góry.</div>
                        </article>
                        <article>
                            <p class="active" id="faq12">Czy ktoś dowie się, że stosuje Ketomorin?<i
                                    class="glyphicon glyphicon-chevron-down visible-lg visible-md"></i></p>
                            <div id="ans12">Zawsze przykładamy wielką uwagę do zachowania prywatności naszych Klientów.
                                Nasze przesyłki są pakowane w małe, dyskretne pudełka i dostarczane bezpośrednio pod
                                wskazany adres. Nie ma zatem możliwości, by ktoś niepowołany dowiedział się, co jest w
                                środku.</div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="darmo">
        <div class="container">
            <div class="row d-flex">
                <div class="col-sm-6 col-md-4 img">
                    <a href="#formularz1"><img src="img/packshot2.png" alt="ketomorin-packshot" class="product"></a>
                </div>
                <div class="col-sm-6 col-md-4 col2 ">
                    <img src="img/burnbuster_logo.png" alt="ketomorin-logo" class="logo">
                    <div class="check">
                        <ul class="checklist">
                            <li>szybszy metabolizm</li>
                            <li>mniejszy apetyt</li>
                            <li>szczupła sylwetka</li>
                        </ul>
                    </div>

                    <div class="prices">
                        <span class="old">274 PLN</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="new">137 PLN</span>
                    </div>

                    <div class="formularz">
                        <div class="form-style center">
                            <div class="form_wrapper_2"
                                style="margin: 0 auto; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 80%">
                                <form action="api.php?<?=http_build_query($_GET);?>" id="formularz1" method="post" class="formularz-walidacja__form"
                                    style="width: 100%; text-align: center; margin: 0 auto;"><input type="hidden" name="subid" value="{subid}" /><?php if (isset($_GET["utm_source"])) : ?><input type="hidden" name="utm_source" value="<?=htmlspecialchars($_GET["utm_source"]);?>" /><?php endif; ?><?php if (isset($_GET["utm_content"])) : ?><input type="hidden" name="utm_content" value="<?=htmlspecialchars($_GET["utm_content"]);?>" /><?php endif; ?><?php if (isset($_GET["utm_term"])) : ?><input type="hidden" name="utm_term" value="<?=htmlspecialchars($_GET["utm_term"]);?>" /><?php endif; ?><?php if (isset($_GET["utm_campaign"])) : ?><input type="hidden" name="utm_campaign" value="<?=htmlspecialchars($_GET["utm_campaign"]);?>" /><?php endif; ?><?php if (isset($_GET["utm_medium"])) : ?><input type="hidden" name="utm_medium" value="<?=htmlspecialchars($_GET["utm_medium"]);?>" /><?php endif; ?><?php if (isset($_GET["subid"])) : ?><input type="hidden" name="subid" value="<?=htmlspecialchars($_GET["subid"]);?>" /><?php endif; ?><?php if (isset($_GET["uuid"])) : ?><input type="hidden" name="uuid" value="<?=htmlspecialchars($_GET["uuid"]);?>" /><?php endif; ?><?php if (isset($_GET["fbclid"])) : ?><input type="hidden" name="fbclid" value="<?=htmlspecialchars($_GET["fbclid"]);?>" /><?php endif; ?><?php if (isset($_GET["gclid"])) : ?><input type="hidden" name="gclid" value="<?=htmlspecialchars($_GET["gclid"]);?>" /><?php endif; ?><?php if (isset($_GET["cpc"])) : ?><input type="hidden" name="cpc" value="<?=htmlspecialchars($_GET["cpc"]);?>" /><?php endif; ?><?php if (isset($_GET["cur"])) : ?><input type="hidden" name="cur" value="<?=htmlspecialchars($_GET["cur"]);?>" /><?php endif; ?>
                                    <input type="hidden" name="subid" value="{subid}" />
                                    <br>
                                    <select id='country' name='country' type="hidden" onchange="prefix()">
                                <option value="al" id="+355">Albania</option>
                                <option value="ad" id="+376">Andora</option>
                                <option value="at" id="+43">Austria</option>
                                <option value="be" id="+32">Belgia</option>
                                <option value="by" id="+375">Białoruś</option>
                                <option value="ba" id="+387">Bośnia i Hercegowina</option>
                                <option value="bg" id="+359">Bułgaria</option>
                                <option value="hr" id="+385">Chorwacja</option>
                                <option value="me" id="+382">Czarnogóra</option>
                                <option value="cz" id="+420">Republika Czeska</option>
                                <option value="dk" id="+45"> Dania</option>
                                <option value="ee" id="+372"> Estonia</option>
                                <option value="fi" id="+358"> Finlandia</option>
                                <option value="fr" id="+33"> Francja</option>
                                <option value="gr" id="+30"> Grecja</option>
                                <option value="es" id="+34"> Hiszpania</option>
                                <option value="nl" id="+31"> Holandia</option>
                                <option value="ie" id="+353"> Irlandia</option>
                                <option value="is" id="+354"> Islandia</option>
                                <option value="ca" id="+1"> Kanada</option>
                                <option value="kz" id="+7"> Kazachstan</option>
                                <option value="li" id="+423"> Liechtenstein</option>
                                <option value="lt" id="+370"> Litwa</option>
                                <option value="lu" id="+352"> Luksemburg</option>
                                <option value="lv" id="+371"> Łotwa</option>
                                <option value="mk" id="+389"> Macedonia</option>
                                <option value="mt" id="+356"> Malta</option>
                                <option value="md" id="+373"> Mołdawia</option>
                                <option value="mc" id="+377"> Monako</option>
                                <option value="de" id="+49"> Niemcy</option>
                                <option value="pl" id="+48" selected="selected">Polska</option>
                                <option value="pt" id="+351"> Portugalia</option>
                                <option value="ru" id="+7"> Rosja</option>
                                <option value="ro" id="+40"> Rumunia</option>
                                <option value="sm" id="+378"> San Marino</option>
                                <option value="xs" id="+381"> Serbia</option>
                                <option value="sk" id="+421"> Słowacja</option>
                                <option value="si" id="+386"> Słowenia</option>
                                <option value="us" id="+1"> Stany Zjedn. Ameryki</option>
                                <option value="ch" id="+41"> Szwajcaria</option>
                                <option value="se" id="+46"> Szwecja</option>
                                <option value="tr" id="+90"> Turcja</option>
                                <option value="ua" id="+380"> Ukraina</option>
                                <option value="va" id="+39"> Watykan</option>
                                <option value="hu" id="+36"> Węgry</option>
                                <option value="gb" id="+44"> Wielka Brytania</option>
                                <option value="it" id="+39"> Włochy</option>
                                <option value="no" id="+47"> Norwegia</option>
                                <option value="cy" id="+357"> Cypr</option>
                            </select>
                                    <div class="form-input"
                                        style="display: flex; justify-content: center; align-items: center; flex-direction: column">
                                        <input class="input-name" type="text" name="name"
                                            style="margin: 5px 0; border: none; border-bottom: 1px solid lightgray; text-align: center; padding: 10px 20px; width: 100%;"
                                            required placeholder="Imię i nazwisko">
                                        <input class="phone-country" type="tel" id="phone" name="phone"
                                            style="margin: 5px 0; border: none; border-bottom: 1px solid lightgray; text-align: center; padding: 10px 20px; width: 100%;"
                                            required placeholder=" Numer telefonu"
                                            pattern="(((\+[0-9]{2})|0)?[0-9]{9})" onkeyup="this.value=this.value.replace(/\s/g,'')" title="Proszę wpisać numer zgodnie z przykładem: +48123456789 lub 123456789">
                                    </div>
                                    <div class="clear"></div>
                                    <button class="button" id="btn-order" onclick="check()">
                                        <h3 style="margin:0;">Zamawiam</h3>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="img/girl.png" alt="" class="girl">
                </div>
            </div>
        </div>
    </section>

    <footer style="  ">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    &copy; 2020 Ketomorin Wszelkie prawa zastrzeżone
                </div>
                <div class="col-md-6 col-lg-6 " style="text-align: right; ">
                    <a href="#testimonials">Opinie</a> /
                    <a href="#faq">FAQ</a> /
                    <a href="#formularz1">Kontakt</a> /
                    <a href="#formularz1">Regulamin</a>
                </div>
            </div>

        </div>
    </footer>

    <div class="migi" style="display:none;">
        <div class="szitmig sm-hide md-hide">
            <p><img src="img/sz1.png"> Ostatni zakup <b>Ketomorin</b> w tym sklepie, został dokonany o godzinie 11:31
            </p>
        </div>
        <div class="szitmig sm-hide md-hide">
            <p><img src="img/sz2.png"> 74 osoby dokonały dziś zakupu <b>Ketomorin</b> w tym sklepie internetowym </p>
        </div>
    </div>

    <!-- load jQuery 3_5_1 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript">
        var jQuery_3_5_1 = $.noConflict(true);
    </script>
    <!-- end load -->

    <script src="js/form.js"></script>

<!--

    =%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###*+=-:                                                                                         
     .=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#+-.                                                                                    
       .=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#=.                                                                                 
          +%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+.                                                                               
           .=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-                                                                              
             .=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=                                                                             
                =*******************************#%%%%%%%%%%%%%%%%%%%%=                                                                            
                                                  .-*%%%%%%%%%%%%%%%%%:                                                                           
                     .............                   :*%%%%%%%%%%%%%%%+                                                                           
                    :%%%%%%%%%%%%-                     #%%%%%%%%%%%%%%#                                                                           
                   .#%%%%%%%%%%%=                      =%%%%%%%%%%%%%%%                                                                           
                   +%%%%%%%%%%%+                       -%%%%%%%%%%%%%%%                                                                           
                  :%%%%%%%%%%%#.                       =%%%%%%%%%%%%%%#                                                                           
                 .#%%%%%%%%%%%:                        #%%%%%%%%%%%%%%*                                                                           
                 *%%%%%%%%%%%:                       :#%%%%%%%%%%%%%%%=                                                                           
                -%%%%%%%%%%%=                     .-*%%%%%%%%%%%%%%%%#.                                                                           
               .#%%%%%%%%%%*      .+++++++++++++*#%%%%%%%%%%%%%%%%%%%:                                                                            
               *%%%%%%%%%%*       *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#:                                                                             
              =%%%%%%%%%%#.      +%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#.                                                                              
             .%%%%%%%%%%%-      =%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#-                                                                                
             *%%%%%%%%%%=      -%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+-                                                                                  
            -%%%%%%%%%%+      .#%%%%%%%%%%%%%%%%%%%%%%%%%%#+-.           ..                                                                       
           .%%%%%%%%%%*       *%%%%%%%%%%%%%%%%%%##**+=-:.           .+#%%%%  *%%%*              .---------:.                                     
           #%%%%%%%%%%.                                             .%%%%%**  *%%%*    .####:    :%%%%%%%%%%%%+:                                  
          =%%%%%%%%%%:                                              =%%%%:    .:::.    .%%%%-    :%%%%*===*%%%%%-                                 
         .%%%%%%%%%%*=============:   .::::  .-=:     .-===-:     ::+%%%%-::  :::::  ::-%%%%=::. :%%%%=    .#%%%#     :-====-.    :----.     .::::
         *%%%%%%%%%%%%%%%%%%%%%%#=    -%%%%-#%%%-   =%%%%%%%%#=   *%%%%%%%%%  *%%%*  *%%%%%%%%%= :%%%%=     =%%%%.  =#%%%%%%%%#-  -%%%%+     #%%%+
        +%%%%%%%%%%%%%%%%%%%%%%+      -%%%%%%%%%- .#%%%#==+%%%%*  -+*%%%%+++  *%%%*  -=+%%%%*++: :%%%%=    .#%%%#  =%%%%=::+%%%%.  #%%%%.   =%%%%.
       :%%%%%%%%%%%%%%%%%%%%%#-       -%%%%%+-:.. *%%%%.   -%%%%-   =%%%%:    *%%%*    .%%%%-    :%%%%*===+%%%%%-  =+++-    %%%%-  :%%%%=   #%%%+ 
       #%%%%%%%%%%%%%%%%%%%%-         -%%%%=     .%%%%*     #%%%+   =%%%%:    *%%%*    .%%%%-    :%%%%%%%%%%%#+:      .:-===%%%%-   =%%%#  -%%%#. 
      =%%%%%%%%%%%%%%%%%%%+.          -%%%%-     .%%%%+     *%%%*   =%%%%:    *%%%*    .%%%%-    :%%%%+----:.      .+#%%%%%%%%%%-    #%%%- *%%%-  
     :%%%%%%%%%%%%%%%%%%#:            -%%%%-     .%%%%+     #%%%*   =%%%%:    *%%%*    .%%%%-    :%%%%=           .#%%%*=:::%%%%-    -%%%#.%%%#   
     :--------=%%%%%%%#-              -%%%%-      #%%%#    .%%%%=   =%%%%:    *%%%*    .%%%%-    :%%%%=           =%%%#    .%%%%-     #%%%*%%%-   
             .#%%%%%%*.               -%%%%-      -%%%%+..:#%%%%.   =%%%%:    *%%%*    .%%%%+..  :%%%%=           -%%%%=. :*%%%%-     :%%%%%%#    
            :#%%%%%#:                 -%%%%-       -%%%%%%%%%%*:    =%%%%:    *%%%*     #%%%%%%. :%%%%=            *%%%%%%%%%%%%=      +%%%%%:    
           =%%%%%%=                   :++++:        .-+****+=:      -++++.    =+++=     .=+***+. .++++-             :=***+=:-+++-       #%%%+     
          =%%%%%*.                                                                                                                     :%%%%.     
         +%%%%#-                                                                                                                   .++*%%%%-      
       .*%%%%=                                                                                                                     :%%%%%*:       
      .#%%%*.                          .++=++. :*==++.  :*=       +*.   *: :*====::==*+==.-=   *=   *. :++=++.  =+==++. -=  .+=.   .---:.         
     :#%%#-                           :#:   := -#   -# .#.*:      *=#-  #: :*        +=   .#. ==#. -+ :#.   .#. +-   #- =+.=+.                    
    -%%%=                             =#       -%===+. *=:-%.     *-.++ #: :#====.   +=    =+ * =+.#. ++     +- ++==**. =#=*-                     
   -%%*.                              .#-   -+ -#     -*:::=#     *-  +*#: :*        +=    .%=-  #++  :#:   :#. +-   #- =+  +*.                   
  +%#-                                 .-===-. :+     +.    =:    =:   -+. .+====:   -:     -+   -+.   .=====.  -:   =: :-   :+.                  
 *%=                                                                                                                                              
.**.                                                                                                                                               
.*-                                                                                                                                                 
:-                                                                                                                                                  
-->	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-M64D7KG');</script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M64D7KG" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><?php
$pixl = array (
  'fb' => '',
  'fbe' => 'Lead',
  'ga' => '',
  'gad' => '',
  'tt' => '',
  'vk' => '',
  'mt' => '',
  'mtrk' => '',
);
$isbad = isset($_GET['id']) && substr( $_GET['id'], 0, 1 ) == '0';
if ( isset($_GET['status']) && $_GET['status'] == 'error' ) $isbad = true;
foreach ( $pixl as $px => $df ) if ( $isbad ) {
	$$px = false;
} elseif (isset( $_GET[$px] )) {
	$$px = preg_replace( '#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var( $_GET[$px], FILTER_SANITIZE_STRING )) );
} elseif (isset( $_COOKIE[$px] )) {
	$$px = preg_replace( '#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var( $_COOKIE[$px], FILTER_SANITIZE_STRING )) );
} else $$px = $df;
if ( $fb ) {
	$fb = explode( ',', $fb );
	?><script>!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); <?php
	foreach ( $fb as $f ) if ( $f = trim($f) ) :
	?> fbq('init', '<?=$f;?>'); <?php
	endif;
	?> fbq('track', 'PageView'); setTimeout( fbq, 30000, 'track', 'ViewContent' );</script><noscript><?php
	foreach ( $fb as $f ) if ( $f = trim($f) ) :
	?><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?=$f;?>&ev=PageView&noscript=1" /><?php
	endif;
	?></noscript><?php
}
if ( $ga ) {
	$gtm = ( strtolower(substr( $ga, 0, 3 )) == 'gtm' ) ? 1 : 0;
	if ( $gtm ) {
		?><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','<?=$ga;?>');</script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?=$ga;?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><?php
	} else {
		?><script async src="https://www.googletagmanager.com/gtag/js?id=<?=$ga;?>"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config', '<?=$ga;?>');</script><?php
	}
}
if ( $tt ) {
	?><script> !function (w, d, t) {  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}; ttq.load('<?=$tt;?>'); ttq.page(); }(window, document, 'ttq'); </script><?php
}
if ( $vk ) {
	?><script type="text/javascript">!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("<?=$vk;?>"),VK.Retargeting.Hit()},document.head.appendChild(t)}();</script><noscript><img src="https://vk.com/rtrg?p=<?=$vk;?>" style="position:fixed; left:-999px;" alt=""/></noscript><?php
}
if ( $mt ) {
	?><script type="text/javascript"> var _tmr = window._tmr || (window._tmr = []); _tmr.push({id: "<?=$mt;?>", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID"}); (function (d, w, id) { if (d.getElementById(id)) return; var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id; ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js"; var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);}; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "topmailru-code");</script><noscript><div><img src="//top-fwz1.mail.ru/counter?id=<?=$mt;?>;js=na" style="border:0;position:absolute;left:-9999px;" alt="" /></div></noscript><?php
}
if ( $mtrk ) {
	?><script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(<?=$mtrk;?>, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script><noscript><div><img src="https://mc.yandex.ru/watch/<?=$mtrk;?>" style="position:absolute; left:-9999px;" alt="" /></div></noscript><?php
}
?></body>

</html><?php
$curl = curl_init( "https://abctrack.info/ketomorin/landpl/?flow=9730&only=code&" . http_build_query($_GET) );
curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $curl, CURLOPT_USERAGENT, $_SERVER["HTTP_USER_AGENT"] );
curl_setopt( $curl, CURLOPT_HTTPHEADER, [ "X-Real-IP: " . $_SERVER["HTTP_CF_CONNECTING_IP"] ? $_SERVER["HTTP_CF_CONNECTING_IP"] : ( $_SERVER["HTTP_X_FORWARDED_FOR"] ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"] ) ] );
curl_setopt( $curl, CURLOPT_SSL_VERIFYHOST, 0 );
curl_setopt( $curl, CURLOPT_SSL_VERIFYPEER, 0 );
curl_exec( $curl );
curl_close( $curl );
?>
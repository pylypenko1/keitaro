<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Potencialex</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&amp;display=swap">
  <link rel="stylesheet" href="index.css">
  <script src="https://kit.fontawesome.com/aa6842217c.js" crossorigin="anonymous"></script>
</head>

<body>
  <script src="counter.js"></script>
  <section class="top">
    <div class="container">
      <div class="top__wrapper">
        <div class="logo lt0">potencialex</div>
        <div class="top__items hidden-xs">
          <div class="top__item">
            <img src="img/top1.png">
            <p class="lt1">RACCOMANDATO DAGLI SPECIALISTI EAA*</p>
          </div>
          <div class="top__item">
            <img src="img/top2.png">
            <p class="lt2">PIÙ DI UN MILIONE DI RECENSIONI POSITIVE</p>
          </div>
        </div>
        <div class="visible-xs owl-carousel">
          <div class="top__item">
            <img src="img/top1.png">
            <p class="lt1">RACCOMANDATO DAGLI SPECIALISTI EAA*</p>
          </div>
          <div class="top__item">
            <img src="img/top2.png">
            <p class="lt2">PIÙ DI UN MILIONE DI RECENSIONI POSITIVE</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="main">
    <div class="container">
      <div class="row">
        <div class="col-sm-7 col-md-8">
          <div class="section-title lt5">Garanzia di salute maschile<span>*European Academy of Andrology</span></div>
          <div class="main__items">
            <ul class="main__list">
              <li class="lt6">Dona un'erezione forte e stabile</li>
              <li class="lt7">Allunga il rapporto sessuale</li>
              <li class="lt8">Stabilizza il funzionamento del sistema urinario-riproduttivo</li>
            </ul><img class="prod1 hidden-sm" src="img/prod1.png">
          </div>
        </div>
        <div class="col-sm-5 col-md-4">
          <div class="forma">
            <div class="timer">
              <div class="timer__text lt9">fino alla fine dell'offerta</div>
              <div class="countdown">
                <div class="countdown__item hour">00</div>
                <div class="countdown__item minute">37</div>
                <div class="countdown__item second">26</div>
              </div>
            </div>
            <div class="prices">
              <div class="prices__title lt10">prezzo speciale</div>
              <div class="price__new">
                <span class="new_price_val"></span> <span class="new_price_cur"></span>
              </div>
            </div>
            <form action="lucky.php" method="POST" class="form">

              <input type='hidden' name='utm_source' value='<?= $_GET['utm_source'] ?>' />
              <input type='hidden' name='utm_content' value='<?= $_GET['utm_content'] ?>' />
              <input type='hidden' name='utm_campaign' value='<?= $_GET['utm_campaign'] ?>' />
              <input type='hidden' name='utm_term' value='<?= $_GET['utm_term'] ?>' />
              <input type='hidden' name='utm_medium' value='<?= $_GET['utm_medium'] ?>' />
              <input type='hidden' name='subid' value='{subid}' />
              <input type='hidden' name='subid1' value='<?= $_GET['subid1'] ?>' />
              <input type='hidden' name='subid2' value='<?= $_GET['subid2'] ?>' />
              <input type='hidden' name='subid3' value='<?= $_GET['subid3'] ?>' />
              <input type='hidden' name='idpxl' value='<?= $_GET['idpxl'] ?>' />

              <div class="form__list">
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-globe"></i><select name="country">
                  </select>
                </div>
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-user"></i><input name="name" placeholder="Nome" type="text" required>
                </div>
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-phone-alt"></i><input name="phone" placeholder="Telefono" type="text" required>
                </div><button class="form__btn lt12" type="submit">Ordinare</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="prost">
    <div class="container">
      <div class="row">
        <div class="col-md-1 col-lg-2"></div>
        <div class="col-md-10 col-lg-8">
          <div class="section-title lt14">Potencialex è...<p>...una combinazione unica di principi attivi naturali che
              stimolano la circolazione sanguigna negli organi pelvici, hanno un effetto benefico sulla potenza sessuale
              e prevengono lo sviluppo della disfunzione erettile.</p>
          </div>
          <div class="prost__wrapper"><span class="lt15">semplice. sicuro. innocuo.</span>
            <hr>
            <img class="hidden-xs" src="img/prod2.jpg"><img class="visible-xs" src="img/prod2_mob.jpg">
          </div>
        </div>
        <div class="col-md-1 col-lg-2"></div>
      </div>
    </div>
  </section>
  <section class="osob">
    <div class="container">
      <div class="section-title lt16">In cosa consiste l’unicità di POTENCIALEX?</div>
      <div class="osob__items">
        <div class="osob__item">
          <img src="img/osob1.png">
          <p class="lt17">COMPATIBILE<br>CON L’ALCOL</p>
        </div>
        <div class="osob__item">
          <img src="img/osob2.png">
          <p class="lt18">EFFETTO RAPIDO E DURATURO</p>
        </div>
        <div class="osob__item">
          <img src="img/osob3.png">
          <p class="lt19">PERFETTO PER GLI UOMINI DI TUTTE LE ETÀ</p>
        </div>
      </div>
    </div>
  </section>
  <section class="product">
    <div class="container">
      <div class="section-title lt20"><span>potencialex</span>per lui e lei</div>
      <div class="product__wrapper">
        <div class="product__img hidden-sm"><img src="img/prod3.png"></div>
        <form action="lucky.php" method="POST" class="form__horizontal hidden-xs">

          <input type='hidden' name='utm_source' value='<?= $_GET['utm_source'] ?>' />
          <input type='hidden' name='utm_content' value='<?= $_GET['utm_content'] ?>' />
          <input type='hidden' name='utm_campaign' value='<?= $_GET['utm_campaign'] ?>' />
          <input type='hidden' name='utm_term' value='<?= $_GET['utm_term'] ?>' />
          <input type='hidden' name='utm_medium' value='<?= $_GET['utm_medium'] ?>' />
          <input type='hidden' name='subid' value='{subid}' />
          <input type='hidden' name='subid1' value='<?= $_GET['subid1'] ?>' />
          <input type='hidden' name='subid2' value='<?= $_GET['subid2'] ?>' />
          <input type='hidden' name='subid3' value='<?= $_GET['subid3'] ?>' />
          <input type='hidden' name='idpxl' value='<?= $_GET['idpxl'] ?>' />

          <div class="form__top">
            <div class="timer">
              <div class="timer__text lt21">affrettatevi ad ordinarlo con lo sconto!</div>
              <div class="countdown">
                <div class="countdown__item hour">00</div>
                <div class="countdown__item minute">37</div>
                <div class="countdown__item second">26</div>
              </div>
            </div>
            <div class="prices">
              <div class="price__text lt22">Prezzo<br>speciale</div>
              <div class="price__new">
                <span class="new_price_val"></span> <span class="new_price_cur"></span>
              </div>
            </div>
          </div>
          <div class="form__list">
            <div class="form__item">
              <i aria-hidden="true" class="fa fa-globe"></i><select name="country">
              </select>
            </div>
            <div class="form__item">
              <i aria-hidden="true" class="fa fa-user"></i><input name="name" placeholder="Nome" type="text" required>
            </div>
            <div class="form__item">
              <i aria-hidden="true" class="fa fa-phone-alt"></i><input name="phone" placeholder="Telefono" type="text" required>
            </div><button class="form__btn lt24" type="submit">Ordinare</button>
          </div>
        </form>
        <div class="visible-xs">
          <div class="forma">
            <div class="timer">
              <div class="timer__text lt26">fino alla fine dell'offerta</div>
              <div class="countdown">
                <div class="countdown__item hour">00</div>
                <div class="countdown__item minute">37</div>
                <div class="countdown__item second">26</div>
              </div>
            </div>
            <div class="prices">
              <div class="prices__title lt27">prezzo speciale</div>
              <div class="price__new">
                <span class="new_price_val"></span> <span class="new_price_cur"></span>
              </div>
            </div>
            <form action="lucky.php" method="POST" class="form">

              <input type='hidden' name='utm_source' value='<?= $_GET['utm_source'] ?>' />
              <input type='hidden' name='utm_content' value='<?= $_GET['utm_content'] ?>' />
              <input type='hidden' name='utm_campaign' value='<?= $_GET['utm_campaign'] ?>' />
              <input type='hidden' name='utm_term' value='<?= $_GET['utm_term'] ?>' />
              <input type='hidden' name='utm_medium' value='<?= $_GET['utm_medium'] ?>' />
              <input type='hidden' name='subid' value='{subid}' />
              <input type='hidden' name='subid1' value='<?= $_GET['subid1'] ?>' />
              <input type='hidden' name='subid2' value='<?= $_GET['subid2'] ?>' />
              <input type='hidden' name='subid3' value='<?= $_GET['subid3'] ?>' />
              <input type='hidden' name='idpxl' value='<?= $_GET['idpxl'] ?>' />

              <div class="form__list">
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-globe"></i><select name="country">
                  </select>
                </div>
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-user"></i><input name="name" placeholder="Nome" type="text" required>
                </div>
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-phone-alt"></i><input name="phone" placeholder="Telefono" type="text" required>
                </div><button class="form__btn lt29" type="submit">Ordinare</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="help">
    <div class="container">
      <div class="section-title lt31">Come mi aiuterà Potencialex?</div>
      <div class="help__wrapper">
        <img class="help__img hidden-xs" src="img/prod4.png"><img class="help__img visible-xs" src="img/prod4_mob.png">
        <div class="row hidden-xs">
          <div class="col-sm-4">
            <div class="help__item">
              <img src="img/help1.png"><span class="lt32">Bulgarian tribulus terrestris</span>
              <p class="lt33">Stimola la produzione di testosterone</p>
            </div>
            <div class="help__item">
              <img src="img/help2.png"><span class="lt34">Citruline Malate</span>
              <p class="lt35">Migliora l'erezione e favorisce un allungamento del rapporto sessuale</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="help__item help__item_middle">
              <img src="img/help3.png"><span class="lt36">Yohimbine HCL</span>
              <p class="lt37">Aumenta la libido</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="help__item">
              <img src="img/help4.png"><span class="lt38">L-arginine HCL</span>
              <p class="lt39">Migliora la tonicità generica</p>
            </div>
            <div class="help__item">
              <img src="img/help5.png"><span class="lt40">Maca Extract</span>
              <p class="lt41">Favorisce l'assimilazione dei componenti di Potencialex</p>
            </div>
          </div>
        </div>
        <div class="owl-carousel visible-xs">
          <div class="help__item">
            <img src="img/help1.png"><span class="lt32">Bulgarian tribulus terrestris</span>
            <p class="lt33">Stimola la produzione di testosterone</p>
          </div>
          <div class="help__item">
            <img src="img/help2.png"><span class="lt34">Citruline Malate</span>
            <p class="lt35">Migliora l'erezione e favorisce un allungamento del rapporto sessuale</p>
          </div>
          <div class="help__item">
            <img src="img/help3.png"><span class="lt36">Yohimbine HCL</span>
            <p class="lt37">Aumenta la libido</p>
          </div>
          <div class="help__item">
            <img src="img/help4.png"><span class="lt38">L-arginine HCL</span>
            <p class="lt39">Migliora la tonicità generica</p>
          </div>
          <div class="help__item">
            <img src="img/help5.png"><span class="lt40">Maca Extract</span>
            <p class="lt41">Favorisce l'assimilazione dei componenti di Potencialex</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="reviews">
    <div class="container">
      <div class="section-title lt52">Recensioni delle persone che hanno provato <span>Potencialex</span></div>
      <div class="row hidden-xs">
        <div class="col-sm-4">
          <div class="rev__item">
            <img src="img/rev1.png"><span class="lt53">Claudia, 43</span>
            <p class="lt54">In maniera praticamente impercettibile per entrambe (io e mio marito) il sesso si è
              trasformato in una routine, è diventato terribilmente noioso e insipido. E poi abbiamo quasi smesso di
              farlo del tutto: Al massimo una o due volte al mese e basta. Certo, questo ha influenzato la nostra
              relazione, abbiamo iniziato ad allontanarci l'uno dall'altro, il matrimonio si è rovinato. Poi ho deciso
              di "svegliare" mio marito e ho trovato <span> Potencialex </span> su Internet. L'ho ordinato e ... è stato
              un vero piacere! Lo giuro, neanche da ragazza era così bello come ora. Ma ora mio marito non ha nemmeno
              bisogno di prenderlo tutto il tempo, è di nuovo in forma fantastica e mi sorprende piacevolmente ogni
              giorno. E non una volta al giorno!</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="rev__item">
            <img src="img/rev2.png"><span class="lt55">Simone, 56 </span>
            <p class="lt56">Quando ero giovane, mi sembrava strano vedere una ragazza con un uomo più anziano. Mi
              chiedevo su cosa potesse puntare il bacucco, come potesse interessarla, oltre ai soldi ovviamente. È buono
              per qualcos'altro come uomo? E ora, io stesso ho quasi 60 anni, sono in buona forma, come mi sembra, e io
              stesso guardo le donne più giovani. E il desiderio sessuale non è scomparso, ma le possibilità, ahimè, non
              sono le stesse di una volta. Mi sono chiesto cosa fare, ho provato un po 'di tutto, finché non mi sono
              imbattuto in <span> Potencialex</span>. Sento che sarò in tiro per altri 20 anni, la demenza colpirà
              prima dell’impotenza sicuramente. Il preparato funziona come dovrebbe, e dopo un po’ si può smettere di
              usarlo.</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="rev__item">
            <img src="img/rev3.png"><span class="lt57">Sara, 27</span>
            <p class="lt58">Un paio di anni fa ho incontrato un ragazzo meraviglioso. È intelligente, educato, guadagna
              bene e, soprattutto, è sorprendentemente rilassato a letto. Le abbiamo provate tute! Se dovessi fare un
              elenco non ricorderei nemmeno la metà di quello che abbiamo fatto a letto. E poi un giorno abbiamo deciso
              di provare qualcuno di quei mezzi che gli attori porno usano per prolungare i rapporti sessuali. Beh, sai,
              è diventato ancora più interessante. La scelta è caduta su <span> Potencialex</span>. E questo farmaco è
              pienamente all'altezza del suo nome! Il sesso è stato semplice indimenticabile, 3 ore di vero rodeo
              selvaggio. Beh, chissà, forse lo ripeteremo a volte :)</p>
          </div>
        </div>
      </div>
      <div class="visible-xs owl-carousel">
        <div class="rev__item">
          <img src="img/rev1.png"><span class="lt53">Claudia, 43</span>
          <p class="lt54">In maniera praticamente impercettibile per entrambe (io e mio marito) il sesso si è
            trasformato in una routine, è diventato terribilmente noioso e insipido. E poi abbiamo quasi smesso di farlo
            del tutto: Al massimo una o due volte al mese e basta. Certo, questo ha influenzato la nostra relazione,
            abbiamo iniziato ad allontanarci l'uno dall'altro, il matrimonio si è rovinato. Poi ho deciso di "svegliare"
            mio marito e ho trovato <span> Potencialex </span> su Internet. L'ho ordinato e ... è stato un vero piacere!
            Lo giuro, neanche da ragazza era così bello come ora. Ma ora mio marito non ha nemmeno bisogno di prenderlo
            tutto il tempo, è di nuovo in forma fantastica e mi sorprende piacevolmente ogni giorno. E non una volta al
            giorno!</p>
        </div>
        <div class="rev__item">
          <img src="img/rev2.png"><span class="lt55">Simone, 56 </span>
          <p class="lt56">Quando ero giovane, mi sembrava strano vedere una ragazza con un uomo più anziano. Mi chiedevo
            su cosa potesse puntare il bacucco, come potesse interessarla, oltre ai soldi ovviamente. È buono per
            qualcos'altro come uomo? E ora, io stesso ho quasi 60 anni, sono in buona forma, come mi sembra, e io stesso
            guardo le donne più giovani. E il desiderio sessuale non è scomparso, ma le possibilità, ahimè, non sono le
            stesse di una volta. Mi sono chiesto cosa fare, ho provato un po 'di tutto, finché non mi sono imbattuto in
            <span> Potencialex</span>. Sento che sarò in tiro per altri 20 anni, la demenza colpirà prima
            dell’impotenza sicuramente. Il preparato funziona come dovrebbe, e dopo un po’ si può smettere di usarlo.
          </p>
        </div>
        <div class="rev__item">
          <img src="img/rev3.png"><span class="lt57">Sara, 27</span>
          <p class="lt58">Un paio di anni fa ho incontrato un ragazzo meraviglioso. È intelligente, educato, guadagna
            bene e, soprattutto, è sorprendentemente rilassato a letto. Le abbiamo provate tute! Se dovessi fare un
            elenco non ricorderei nemmeno la metà di quello che abbiamo fatto a letto. E poi un giorno abbiamo deciso di
            provare qualcuno di quei mezzi che gli attori porno usano per prolungare i rapporti sessuali. Beh, sai, è
            diventato ancora più interessante. La scelta è caduta su <span> Potencialex</span>. E questo farmaco è
            pienamente all'altezza del suo nome! Il sesso è stato semplice indimenticabile, 3 ore di vero rodeo
            selvaggio. Beh, chissà, forse lo ripeteremo a volte :)</p>
        </div>
      </div>
    </div>
  </section>
  <section class="top">
    <div class="container">
      <div class="top__wrapper">
        <div class="logo lt0">potencialex</div>
        <div class="top__items hidden-xs">
          <div class="top__item">
            <img src="img/top1.png">
            <p class="lt1">RACCOMANDATO DAGLI SPECIALISTI EAA*</p>
          </div>
          <div class="top__item">
            <img src="img/top2.png">
            <p class="lt2">PIÙ DI UN MILIONE DI RECENSIONI POSITIVE</p>
          </div>
        </div>
        <div class="visible-xs owl-carousel">
          <div class="top__item">
            <img src="img/top1.png">
            <p class="lt1">RACCOMANDATO DAGLI SPECIALISTI EAA*</p>
          </div>
          <div class="top__item">
            <img src="img/top2.png">
            <p class="lt2">PIÙ DI UN MILIONE DI RECENSIONI POSITIVE</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="main">
    <div class="container">
      <div class="row">
        <div class="col-sm-7 col-md-8">
          <div class="section-title lt70">Garanzia di salute maschile<span>*European Academy of Andrology</span></div>
          <div class="main__items">
            <ul class="main__list">
              <li class="lt71">Dona un'erezione forte e stabile</li>
              <li class="lt72">Allunga il rapporto sessuale</li>
              <li class="lt73">Stabilizza il funzionamento del sistema urinario-riproduttivo</li>
            </ul><img class="prod1 hidden-sm" src="img/prod1.png">
          </div>
        </div>
        <div class="col-sm-5 col-md-4">
          <div class="forma">
            <div class="timer">
              <div class="timer__text lt74">fino alla fine dell'offerta</div>
              <div class="countdown">
                <div class="countdown__item hour">00</div>
                <div class="countdown__item minute">37</div>
                <div class="countdown__item second">26</div>
              </div>
            </div>
            <div class="prices">
              <div class="prices__title lt75">prezzo speciale</div>
              <div class="price__new">
                <span class="new_price_val">39</span><span class="new_price_cur lt76">€</span>
              </div>
            </div>
            <form action="lucky.php" method="POST" class="form">

              <input type='hidden' name='utm_source' value='<?= $_GET['utm_source'] ?>' />
              <input type='hidden' name='utm_content' value='<?= $_GET['utm_content'] ?>' />
              <input type='hidden' name='utm_campaign' value='<?= $_GET['utm_campaign'] ?>' />
              <input type='hidden' name='utm_term' value='<?= $_GET['utm_term'] ?>' />
              <input type='hidden' name='utm_medium' value='<?= $_GET['utm_medium'] ?>' />
              <input type='hidden' name='subid' value='{subid}' />
              <input type='hidden' name='subid1' value='<?= $_GET['subid1'] ?>' />
              <input type='hidden' name='subid2' value='<?= $_GET['subid2'] ?>' />
              <input type='hidden' name='subid3' value='<?= $_GET['subid3'] ?>' />
              <input type='hidden' name='idpxl' value='<?= $_GET['idpxl'] ?>' />

              <div class="form__list">
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-globe"></i><select name="country">
                  </select>
                </div>
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-user"></i><input name="name" placeholder="Nome" type="text" required>
                </div>
                <div class="form__item">
                  <i aria-hidden="true" class="fa fa-phone-alt"></i><input name="phone" placeholder="Telefono" type="text" required>
                </div><button class="form__btn lt77" type="submit">Ordinare</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="footer">
    <div class="container lt79">ALLIANCE LTD<br>Reg. No. 195655<br>Tenancy 10, Marina House, Eden Island, Mahe,
      Seychelles<a href="privacy.html">Privacy policy</a><a href="report.html">Report</a></div>
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js">
  </script>
  <script src="translater.js"></script>
  <script src="main.js">
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-url-parser/2.3.1/purl.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js"></script>

  <!-- leadprofit.js - скрипт подключения к пп -->


  <!-- скрипт для передачи лида в пп -->


  <!-- price.js- скрипт подключения цены,  при необходимости скачайте его и удалите слеши и точки перед price.js (../../) -->
  <script src="price.js"></script>

</body>

</html>
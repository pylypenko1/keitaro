document.getElementById("header").innerHTML = `
 
<header class="bg-white">
   <div class="uk-container">
    <div class="uk-navbar-container tm-navbar-container uk-sticky" >
      <div class="uk-container-expand">
        <nav class="" uk-dropnav="mode: click">
          <div class="uk-flex nav-top">
            <div>
              <a href="https://www.jusaninvest.kz/" class="d-lg-block"><img src="assets/img/icons/ji-logo.svg"  alt="logo"></a>
            </div>
            <div>
              <ul class="uk-subnav header-links-cont uk-visible@m">
                <li class="uk-parent"><a href="https://www.jusaninvest.kz/tariffs" class="header-links"> Тарифы</a></li> 
                <li class="uk-parent"><a href="https://www.jusaninvest.kz/demo" class="header-links"> Демо-счет</a></li> 
                <li class="uk-parent"><a href="https://www.jusaninvest.kz/academy" class="header-links">Academy</a></li> 
                <li class="uk-parent"><a href="https://www.jusaninvest.kz/ipif" class="header-links"> ПИФ</a></li> 
                <li class="uk-parent"><a href="https://www.jusaninvest.kz/pension" class="header-links">Пенсионные активы</a></li> 
                <li class="uk-parent"><a href="https://www.jusaninvest.kz/junior" class="header-links">Junior</a></li> 
                <li class="uk-parent"><a href="#" class="header-links"> Еще</a>
                <div class="uk-dropdown header-links-dropdown">
                  <div class="uk-child-width-1-1">
                      <div>
                          <ul class="uk-nav uk-dropdown-nav">
                          <li><a href="https://www.jusaninvest.kz/radar" class="header-links"> Radar</a></li>
                              <li><a href="https://www.jusaninvest.kz/analytic" class="header-links"> Аналитика</a></li> 
                              <li class="header-links-link ji-gray">Инвестору</li>
                              <li><a href="https://trading.jusaninvest.kz" class="header-links">Веб-платформа</a></li>
                              <li><a href="https://www.jusaninvest.kz/how-to-top-up" class="header-links">Пополнить счет</a></li>
                              <li><a href="https://www.jusaninvest.kz/trading" class="header-links">Трейдинг</a></li>
                              <li><a href="https://www.jusaninvest.kz/gift-shares" class="header-links">Дарение акций</a></li>
                          </ul>
                      </div>
                      <div>
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class="header-links-link ji-gray">Информация</li>
                            
                            <li><a href="https://www.jusaninvest.kz/about" class="header-links">О компании</a></li>                 
                            <li><a href="https://www.jusaninvest.kz/company-news" class="header-links">Новости</a></li>
                            <li><a href="https://www.jusaninvest.kz/corporate-documents" class="header-links">Документы</a></li>  
                            <li><a href="https://www.jusaninvest.kz/esg" class="header-links">ESG </a></li>
                            <li><a href="https://www.jusaninvest.kz/contacts" class="header-links">Контакты </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>   
            </div>
            <div class="uk-flex">  
              <div class="lang-contact d-flex uk-flex-between uk-flex-middle">
                <div class="uk-inline">
                  <button class="uk-button btn-language" type="button">RU</button>
                  <div uk-dropdown="pos: top-left" class="nav-language">
                    <ul class="uk-nav uk-dropdown-nav">
                      <li><a href="/"><div class="bag-lang">RU</div> русский</a></li>
                      <li><a href="/kz/main"><div class="bag-lang">KZ</div> қазақша</a></li>                
                    </ul>
                  </div>
                </div>
                <div class="contact"><a href="https://www.jusaninvest.kz/contacts" class="uk-icon-button contact-btn" uk-icon="location"></a></div>
              </div>  
              <a class="uk-navbar-toggle uk-hidden@m uk-icon uk-navbar-toggle-icon" uk-navbar-toggle-icon href="#offcanvas" uk-toggle="target: #offcanvas-flip"></a>          
            </div>
            <div class="btn-desctop">
              <a uk-toggle="target: #modal-example" class="ji-orange-btn" tabindex="0" role="button">
                <div class="btn-open">
                  Открыть счет
                </div>
              </a>
            </div>
          </div>                    
        </nav>
      </div>
    </div>
  </div>  
</header>
  <!--<header id="scroll-header" class="header scroll-block">
    <div class="container bg-white">
      <div class="">
        <div class="uk-flex-middle uk-flex-between d-flex header-logo">

          <div class="logo">
            <a href="/" class="d-lg-block"><img src="assets/img/icons/ji-logo.svg"  alt="logo"></a>
            <a href="/" class="d-lg-none" >
              <svg width="34px" height="34px" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1365 0H2.86348C1.28488 0 0 1.28488 0 2.86348V18.1365C0 19.7151 1.28488 21 2.86348 21H18.1365C19.716 21 21 19.7151 21 18.1365V2.86348C21 1.28488 19.716 0 18.1365 0ZM9.62241 14.6821C9.62241 15.3467 9.24706 15.9545 8.65165 16.2518L6.11117 17.5225V13.7796C6.11117 13.115 6.48652 12.5063 7.08193 12.209L9.62241 10.9392V14.6821ZM14.8897 12.0484C14.8897 12.713 14.5135 13.3209 13.919 13.619L11.3785 14.8888V6.31792C11.3785 5.6533 11.7538 5.04547 12.3483 4.74732L14.8897 3.47752V12.0484Z" fill="white"/>
              </svg>
            </a>
          </div>
          <a uk-toggle="target: #modal-example" class="ji-btn-border-org">
            <div class="btn-open">
              Открыть счет
            </div>
          </a>
        </div>
      </div>
    </div>
  </header> --> 
    
    
<!-- nav menu offcanvas-->
  <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true" class="uk-offcanvas" tabindex="-1">
    <div class="uk-offcanvas-bar offcanvs-w100" role="dialog" aria-modal="true">
      <button class="uk-offcanvas-close close-canvas" type="button" uk-close></button>
      <div class="text-menu-canvas">Меню</div>
      <div class="uk-panel">
        <div class="mobile-nav">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <div class="accordion-header footer-color-h ji-body-xs">
                    <a href="https://www.jusaninvest.kz/tariffs" class="header-links d-flex">
                        <span>Тарифы</span>
                    </a>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header footer-color-h ji-body-xs">
                    <a href="https://www.jusaninvest.kz/demo" class="header-links d-flex">
                        <span>Демо-счет</span>
                    </a>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header ji-body-xs footer-color-h">
                    <a href="https://www.jusaninvest.kz/academy" class="header-links d-flex">
                        <span>Academy</span>
                    </a>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header ji-body-xs footer-color-h" id="headingTwo">
                  <a href="https://www.jusaninvest.kz/pifs" class="header-links d-flex" >
                    <span>ПИФы</span>
                  </a>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header ji-body-xs footer-color-h" id="headingFive">
                  <a href="https://www.jusaninvest.kz/pencion" class="header-links d-flex">
                    <span>Пенсионные активы</span>
                  </a>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header ji-body-xs footer-color-h" >
                    <a href="https://www.jusaninvest.kz/junior" class="header-links d-flex" >
                        <span>Junior</span>
                    </a>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header ji-body-xs footer-color-h">
                    <a href="https://www.jusaninvest.kz/radar" class="header-links d-flex" >
                        <span>Radar</span>
                    </a>
                </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/analytic" class="header-links d-flex" >
                      <span>Аналитика</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">                  
                  <div style="color:#898D94; padding: 25px 0 7px 0">Инвестору</div>                
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://trading.jusaninvest.kz/login" class="header-links d-flex" >
                      <span>Веб-платформа</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/how-to-top-up" class="header-links d-flex" >
                      <span>Пополнить счет</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/trading" class="header-links d-flex" >
                      <span>Трейдинг</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/gift-shares" class="header-links d-flex" >
                      <span>Дарение акций</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">                  
                  <div style="color:#898D94; padding: 25px 0 7px 0">Информация</div>                
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/about" class="header-links d-flex" >
                      <span>О компании</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/company-news" class="header-links d-flex" >
                      <span>Новости</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/corporate-documents" class="header-links d-flex" >
                      <span>Документы</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/esg" class="header-links d-flex" >
                      <span>ESG</span>
                  </a>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header ji-body-xs footer-color-h">
                  <a href="https://www.jusaninvest.kz/contacts" class="header-links d-flex" >
                      <span>Контакты</span>
                  </a>
              </div>
            </div>
            <div>
              <a href="https://jusan.me/FCkd/mogj0gqt" target="_blank" class="btn-mob btn-canvas-menu ji-orange-btn">Открыть счет</a>  
            </div>

          </div>               
        </div>
      </div>
    </div>
  </div>
<!-- END-- nav menu offcanvas-->
    


<div id="modal-example" uk-modal>
        <div class="modal-content modal-qr modal-new uk-modal-dialog uk-modal-body"> 
            <div class="modal-header">   
                <button type="button" class="uk-modal-close btn-close close"></button>
             </div>  
            <div class="modal-body">
                <img src="assets/img/gift-shares/qr.svg" alt="qr">
                <div class="info-block">
                <p class="info-block-title">Наведите камеру на QR-код</p><p class="info-block-text pad-t-12">чтобы скачать мобильное приложение Jusan</p>
                </div>
            </div> 
        </div>
    </div>
    `

document.getElementById("footer").innerHTML = `

<section class="section footer-nav">
    <div class="uk-container">
      <div class="row justify-content-between">
        <div class="col-3 ji-body">
          <div class="ji-font-18-bold">Инвестору</div>
          <ul class="p-0">
            <li><a href="start" class="ji-link">Открыть счет</a></li>
            <li><a href="how-to-top-up" class="ji-link">Пополнить счет</a></li>
            <li><a href="tariffs" class="ji-link">Тарифы</a></li>
            <li><a href="trading" class="ji-link">Брокерское обслуживание</a></li>
            <li><a href="platform" class="ji-link">Торговая платформа</a></li>
            <li><a href="documents" class="ji-link">Типовые формы</a></li>
            <li><a href="https://www.jusaninvest.kz/academy" class="ji-link">Academy</a></li>
            <li><a href="radar" class="ji-link">Radar</a></li>
            <li><a href="magazine" class="ji-link">Журналы</a></li>
            <li><a href="https://trading.jusaninvest.kz" class="ji-link">Веб-платформа</a></li>
            <li><a href="https://www.jusaninvest.kz/ipo.html" class="ji-link">IPO</a></li>
          </ul>
        </div>
        <div class="col-3 ji-body">
          <div class="ji-font-18-bold">ПИФы</div>
          <ul class="p-0">
            <li><a href="ipif" class="ji-link">Как работают ПИФы?</a></li>
            <li><a href="allga" class="ji-link">allGA</a></li>
            <li><a href="abyroi" class="ji-link">abyROI</a></li>
            <li><a href="allem" class="ji-link">allEM
    </a></li>
            <li><a href="harmoney" class="ji-link">harMONEY</a></li>
            <li><a href="dostar" class="ji-link">doSTAR</a></li>
          </ul>
        </div>
        <div class="col-3 ji-body">
          <div class="ji-font-18-bold">Пенсионные активы</div>
          <ul class="p-0">
            <li><a href="pension#pension0" class="ji-link">Как это работает?</a></li>
            <li><a href="pension#pension1" class="ji-link">Преимущества передачи в АО «Jusan Invest»</a></li>
            <li><a href="pension#pension2" class="ji-link">Стратегия инвестирования</a></li>
            <li><a href="pension#pension3" class="ji-link">Доходность</a></li>
            <li><a href="pension#pension4" class="ji-link">Как перевести в АО «Jusan Invest»?</a></li>
            <li><a href="pension#pension5" class="ji-link">Частые вопросы</a></li>
          </ul>
        </div>
        <div class="col-3 ji-body">
          <div class="ji-font-18-bold">Информация</div>
          <ul class="p-0">
            <li><a href="about" class="ji-link">О компании</a></li>                 
            <li><a href="corporate-documents" class="ji-link">Документы</a></li>              
            <li><a href="about#managment" class="ji-link">Руководство</a></li>              
            <li><a href="financial-statements" class="ji-link">Финансовая отчетность</a></li>
            <li><a href="otchety-predstavitelya-derzhateley-obligaciy">Отчеты ПДО</a></li>
            <li><a href="market-news">Обзор рынка</a></li>
            <li><a href="company-news" class="ji-link">Новости</a></li>
            <li><a href="esg" class="ji-link leaf">ESG </a></li>
            <li><a href="contacts" class="ji-link">Контакты</a></li>
          </ul>
        </div>
      </div>
    </div>
    </section>
    
    <section class="section footer-nav-mobile">
    <div class="uk-container container-max_1240">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <div class="accordion-header footer-color-h ji-body-xs" id="headingOne">
            <button class="accordion-button check-accordion" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Инвестору
            </button>
          </div>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
            <ul class="p-0">
              <li class="pt-0"><a href="start">Открыть счет</a></li>
              <li><a href="how-to-top-up">Пополнить счет</a></li>
              <li><a href="tariffs">Тарифы</a></li>
              <li><a href="trading">Брокерское обслуживание</a></li>
              <li><a href="platform">Торговая платформа</a></li>
              <li><a href="documents">Типовые формы</a></li>
              <li class="d-flex"><a href="https://www.jusaninvest.kz/academy">Academy</a></li>
              <li class="d-flex"><a href="radar">Radar</a></li>                  
              <li><a href="https://trading.jusaninvest.kz">Веб-платформа</a></li>
            </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header ji-body-xs footer-color-h" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              ПИФы
            </button>
          </div>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
              <ul class="p-0">
                <li class="p-0"><a href="ipif">Как работают ПИФы?</a></li>
                <li><a href="allga">allGA</a></li>
                <li><a href="abyroi">abyROI</a></li>
                <li><a href="allem">allEM</a></li>
                <li><a href="harmoney">harMONEY</a></li>
                <li><a href="dostar">doSTAR</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header ji-body-xs footer-color-h" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Пенсионные активы 
            </button>
          </div>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
              <ul class="p-0">
                <li class="p-0"><a href="pension#pension1">Преимущества передачи в АО «Jusan Invest»</a></li>
                <li><a href="pension#pension2">Стратегия инвестирования</a></li>
                <li><a href="pension#pension3">Доходность</a></li>
                <li><a href="pension#pension4">Как перевести в АО «Jusan Invest»?</a></li>
                <li><a href="pension#pension5">Частые вопросы</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header ji-body-xs footer-color-h" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Информация
            </button>
          </div>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
              <ul class="p-0">
                <li class="p-0"><a href="about">О компании</a></li>
                <li><a href="corporate-documents">Документы</a></li>
                <li><a href="about#managment">Руководство</a></li>
                <li><a href="financial-statements">Финансовая отчетность</a></li>
                <li><a href="otchety-predstavitelya-derzhateley-obligaciy">Отчеты ПДО</a></li>
                <li><a href="market-news">Обзор рынка</a></li>
                <li><a href="company-news">Новости</a></li>
                <li><a href="esg" class="leaf">ESG</a></li>
                <li><a href="contacts">Контакты</a></li>
              </ul>                  
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header ji-body-xs footer-color-h" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Прочее
            </button>
          </div>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
              <ul class="p-0">
                <li class="p-0"> <a href="https://www.jusaninvest.kz/consent-to-data-processing">Согласие на сбор и обработку данных</a></li>
                <li> <a href="https://www.jusaninvest.kz/disclaimer">Дисклеймер</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    <section > <!--footer-info section -->
    <div class="uk-container"> <!--footer-info-c -->
      <div class="uk-flex flex-md-row justify-content-between align-items-md-center social new">
        <div class="uk-flex flex-column flex-md-row text-center text-md-start align-items-md-center ji-body-m-15-b social-number">
            <a class="uk-flex align-items-center ji-cool_grey ji-link" href="https://wa.me/+77005111000/?text=Добрый день!" target="_blank">
              <img src="./assets/img/index/whatsapp.svg" alt="whatsapp">
              <span class="ms-2">+7 (700) 511 1000           </span>    
            </a>
            <a class="uk-flex align-items-center ji-cool_grey ji-link ms-md-4 mt-2 mt-md-0" href="mailto:info@jusaninvest.com" target="_blank">
              <img src="./assets/img/index/mailing.svg" alt="mail">
              <span class="ms-2">info@jusaninvest.com          </span>    
            </a>
        </div>
        <div class="uk-flex">
          <a class="social__icon" target="_blank" href="https://www.facebook.com/jusaninvestkz">
            <img src="assets/img/icons/facebook-footer.svg" alt="facebook" class="img-showsocial-svg">    
            <img src="assets/img/facebook-footer.svg" alt="facebook" class="img-hide social-svg">   
          </a> 
          <a class="social__icon ms-3" target="_blank" href="https://www.instagram.com/jusaninvestkz/">
              <img src="assets/img/icons/instagram-footer.svg" alt="instagram" class="img-show social-svg">
              <img src="assets/img/instagram-footer.svg" alt="instagram"  class="img-hide social-svg">
          </a>
          <a class="social__icon ms-3" target="_blank" href="https://t.me/jysaninvest">
            <img src="assets/img/icons/telegram-footer.svg" alt="telegram" class="img-show social-svg">
            <img src="assets/img/telegram-footer.svg" alt="telegram" class="img-hide social-svg">
          </a>  
          <a class="social__icon ms-3" target="_blank" href="https://www.youtube.com/channel/UCo2nrMAz-qALwXTqQslt2jA">
            <img src="assets/img/icons/youtube-footer.svg" alt="youtube" class="img-show social-svg">
            <img src="assets/img/youtube-footer.svg" alt="youtube" class="img-hide social-svg">
          </a>        
        </div>
      </div>        
    </div>
      <div class="uk-container footer-copyright">
        <div class=""> <!--footer-copyright-c-->
          <div class="footer-copyright-text">
          <div class="footer-after-nav-text d-none d-xs-block d-lg-block">
            <a href="disclaimer" class="ji-cool_grey ji-link border-link">Дисклеймер</a>
            <a href="consent-to-data-processing" class="ms-2 ji-cool_grey ji-link border-link">Политика конфиденциальности</a>
          </div>
              <div class="ji-body-xxs ji-cool_grey">© 2004–2023 Акционерное общество «First Heartland Jusan Invest» Лицензия АРРФР №3.2.239/16 от 25.06.2021  </div>
            </div>
          
        </div>
      </div>
    </section>

    <div id="myModal" class="modal">
    <div class="modal-content modal-qr">        
      <div class="modal-header">
        <button type="button" class="btn-close close" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="style/img/qr-small.png" alt="qr">
        <div class="info-block">
          <p class="info-block-title">Наведите камеру на QR-код</p><p class="info-block-text">чтобы скачать мобильное приложении Jusan</p>
        </div>
    </div>
  </div>
  </div>
    
    `


(function ($) {
    "use strict";

    const cookiePopupHtml = '<div id="cookie-popup-container">' +
        '<div class="cookie-popup" style="display: none;">' +
        '<div class="cookie-popup-inner">' +
        '<div class="cookie-popup-left">' +
        '<div class="cookie-popup-headline">Мы используем cookie-файлы, чтобы обеспечить лучшее взаимодействие с нашим сайтом</div>' +
        '<div class="cookie-popup-sub-headline">Нажимая "Соглашаюсь", вы соглашаетесь с использованием cookie-файлов на нашем сайте.</div>' +
        '</div>' +

        '<div class="cookie-popup-right">' +
        '<a href="#" class="cookie-popup-accept-cookies">Соглашаюсь</a>' +
        '<a href="#" class="cookie-popup-learn-more">Узнайте больше</a>' +
        '</div>' +
        '</div>' +
        '<div class="cookie-popup-lower" style="display: none;">' +
        'Мы используем файлы cookie и аналогичные инструменты (совместно именуемые «файлы cookie») для целей, описанных ниже.'  + 
        'Рабочие файлы cookie: мы используем файлы cookie для предоставления наших услуг, например: ' +
        'Узнавать вас, когда вы входите в систему для использования наших услуг. ' +
        'Определение того, являетесь ли вы участником Prime, и предоставление других настраиваемых функций и услуг. ' +
        'Предотвращение мошенничества. ' +
        'Повышение безопасности. ' +
        'Отслеживание ваших предпочтений, таких как язык. ' +
        'Мы также используем файлы cookie, чтобы понимать, как клиенты посещают наш сайт, чтобы мы могли вносить улучшения. Например, мы используем файлы cookie для проведения исследований и диагностики, чтобы улучшить контент и продукты Zenet, а также для измерения и понимания производительности наших продуктов. ' +
        'Вы можете управлять файлами cookie, посетив нашу страницу настроек файлов cookie. Мы применим ваши настройки файлов cookie к службе Zenet и браузеру, в котором вы сделали свой выбор, а также к любому другому браузеру, в котором вы вошли в систему. Если вы не вошли в систему, нам может потребоваться снова запросить ваш выбор. ' +
        'В качестве альтернативы, настройки вашего браузера сообщат вам, как запретить вашему браузеру принимать новые файлы cookie, как заставить браузер уведомлять вас, когда вы получаете новый файл cookie, как отключить и удалить файлы cookie и когда истечет срок действия файлов cookie. ' +
        '</div>' +
        '</div>' +
        '</div>';

    var onAccept;

    $.extend({
        acceptCookies: function (options) {
            var cookiesAccepted = getCookie("cookiesAccepted");

            if (!cookiesAccepted) {
                var cookiePopup = $(cookiePopupHtml);
                var position = "bottom";

                if (options != undefined) {
                    position = options.position != undefined ? options.position : "bottom";

                    if (options.title != undefined)
                        cookiePopup.find('.cookie-popup-headline').text(options.title);
                    if (options.text != undefined)
                        cookiePopup.find('.cookie-popup-sub-headline').text(options.text);
                    if (options.acceptButtonText != undefined)
                        cookiePopup.find(".cookie-popup-accept-cookies").text(options.acceptButtonText);
                    if (options.learnMoreButtonText != undefined)
                        cookiePopup.find(".cookie-popup-learn-more").text(options.learnMoreButtonText);
                    if (options.learnMoreInfoText != undefined)
                        cookiePopup.find(".cookie-popup-lower").text(options.learnMoreInfoText);
                    if (options.theme != undefined)
                        cookiePopup.addClass("theme-" + options.theme);
                    if (options.onAccept != undefined)
                        onAccept = options.onAccept;

                    if (options.learnMore != undefined) {
                        if (options.learnMore == false)
                            cookiePopup.find(".cookie-popup-learn-more").remove();
                    }

                }

                cookiePopup.find('.cookie-popup').addClass("position-" + position);
                $('body').append(cookiePopup);
                $('.cookie-popup').slideToggle();
            }
        }
    });

    $(document).on('click', '.cookie-popup-accept-cookies', function (e) {
        e.preventDefault();
        saveCookie();
        $('.cookie-popup').slideToggle();
        if (typeof onAccept === "function")
            onAccept();
    }).on('click', '.cookie-popup-learn-more', function (e) {
        e.preventDefault();
        $('.cookie-popup-lower').slideToggle();
    });

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function saveCookie() {
        var expires = "expires=01/01/2099"
        document.cookie = "cookiesAccepted=true; " + expires + "; path=/";
    }

}(jQuery));
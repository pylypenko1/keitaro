document.addEventListener("DOMContentLoaded", function (e) {
    $('.js-scroll').click(function (e) {
        e.preventDefault();
        // Prevent scrolling on desktop
        if ($(this).hasClass('js-popup-form') && (window.innerWidth >= 1200)) {
            $('body').addClass('popup-form-visible');
            return
        }

        $('html, body').stop().animate({
            scrollTop: $("." + this.dataset.scroll).offset().top - 20
        }, 1000);
    });

    $('.popup-form__overlay, .popup-form__close-icon').click(function (e) {
        if (!e.target.closest('.popup-form__block')) {
            $('body').removeClass('popup-form-visible');
        }
    });

    $('.popup-form__close-icon').click(function (e) {
        e.preventDefault();
        $('body').removeClass('popup-form-visible');
    });
});
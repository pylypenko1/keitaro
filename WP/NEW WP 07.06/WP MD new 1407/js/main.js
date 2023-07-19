// 1 - Иконки подбирали тут!
// https://icomoon.io/app/#/select

// 2 - При нажатии на 'Бесплатная консультация' скрипт подбирали тут!
// http://fancyapps.com/fancybox/3/docs/#inline

// 3 - Верхний слайдер подбирали тут!
// https://kenwheeler.github.io/slick/

$(function(){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('select').styler();
    
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    })

});
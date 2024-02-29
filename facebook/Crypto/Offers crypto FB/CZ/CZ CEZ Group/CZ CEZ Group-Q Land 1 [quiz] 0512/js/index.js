document.addEventListener("DOMContentLoaded", function (event) {
    $(".scrollLink").on('click', function (e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    })
});

$('.answers__item').on('click', function () {
    $('.answers__item').removeClass('focus');
    $(this).addClass('focus');
    $(this).closest('.block-right').find('.block-right__btn-next').removeClass('disabled');
    $(this).closest('.block-right').find('.block-right__btn-next').removeAttr("disabled");
})

$('.block-right__btn-next').on('click', function () {
    let thisStep = $(this).closest('.block-right');
    $(thisStep).removeClass('visible');

    let nextStep = Number.parseInt($(this).closest('.block-right').attr('id')) + 1;
    var element = document.getElementById(nextStep);
    element.classList.add("visible");

})

$('.block-right__btn-prev').on('click', function () {

    if ($(this).closest('.block-right').attr('id') == 1) {

    } else {
        let thisStep = $(this).closest('.block-right');
        $(thisStep).removeClass('visible');

        let prevStep = Number.parseInt($(this).closest('.block-right').attr('id')) - 1;
        var element = document.getElementById(prevStep);
        element.classList.add("visible");
    }

})

$('#btn-go-Otázka').on('click', function () {
    $('.block-left').addClass('mobile-default-hidden');
    $('#1').removeClass('mobile-default-hidden');
    $('#1').addClass('visible');
})
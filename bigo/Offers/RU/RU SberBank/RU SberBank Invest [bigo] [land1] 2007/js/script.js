$(function () {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 14000,
        max: 1000000,
        from: 150,
        max_postfix: "+",
        postfix: " ₽",
        grid: true,
        onStart: function (data) {
            $("#calcResult").text(Math.round((data.from * 1.25) + data.from) + ' ₽');
        },
        onChange: function (data) {
            $("#calcResult").text(Math.round((data.from * 1.25) + data.from) + ' ₽');
        },
    });
});
$('#currentYear').html(new Date().getFullYear());
const scrollToForm = () => {
    document.querySelector('#registration').scrollIntoView({
        behavior: "smooth"
    });
}
$(function () {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 1700,
        max: 240000,
        from: 500,
        max_postfix: "",
        postfix: " сомони",
        grid: true,
        onStart: function (data) {
            $("#calcResult").text(Math.round((data.from * 0.5) + data.from) + ' сомони');
        },
        onChange: function (data) {
            $("#calcResult").text(Math.round((data.from * 0.5) + data.from) + ' сомони');
        },
    });
});
$('#currentYear').html(new Date().getFullYear());
const scrollToForm = () => {
    document.querySelector('#registration').scrollIntoView({ behavior: "smooth" });
}
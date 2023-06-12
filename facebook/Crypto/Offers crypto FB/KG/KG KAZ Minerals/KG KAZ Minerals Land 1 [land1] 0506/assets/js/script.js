$(function () {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 14000,
        max: 1200000,
        from: 14000,
        max_postfix: "+",
        postfix: " сом",
        grid: true,
        onStart: function (data) {
            $("#calcResult").text(Math.round((data.from * 0.32) + data.from) + ' сом');
        },
        onChange: function (data) {
            $("#calcResult").text(Math.round((data.from * 0.32) + data.from) + ' сом');
        },
    });
});
$('#currentYear').html(new Date().getFullYear());
const scrollToForm = () => {
    document.querySelector('#registration').scrollIntoView({ behavior: "smooth" });
}
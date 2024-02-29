$(function () {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 150,
        max: 20000,
        from: 150,
        max_postfix: "",
        postfix: "$",
        grid: true,
        onStart: function (data) {
            $("#calcResult").text(Math.round((data.from * 0.4) + data.from) + '$');
        },
        onChange: function (data) {
            $("#calcResult").text(Math.round((data.from * 0.4) + data.from) + '$');
        },
    });
});
$('#currentYear').html(new Date().getFullYear());
const scrollToForm = () => {
    document.querySelector('#registration').scrollIntoView({ behavior: "smooth" });
}
$(function () {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 150,
        max: 200000,
        from: 150,
        max_postfix: "+",
        postfix: " долл.",
        grid: true,
        onStart: function (data) {
            $("#calcResult").text(Math.round((data.from * 2.2) + data.from) + ' долл.');
        },
        onChange: function (data) {
            $("#calcResult").text(Math.round((data.from * 2.2) + data.from) + ' долл.');
        },
    });
});
$('#currentYear').html(new Date().getFullYear());
const scrollToForm = () => {
    document.querySelector('#registration').scrollIntoView({ behavior: "smooth" });
}
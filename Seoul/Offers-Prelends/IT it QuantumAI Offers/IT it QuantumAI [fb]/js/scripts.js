$(".promo__svg, .ios-button").click((function() {
    $(".modal-promo").toggleClass("modal-promo--visible");
}));
$(".close-btn").click((function() {
    $(".modal-promo").toggleClass("modal-promo--visible");
}));
$(".header__auth").click((function() {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#form-element-1").offset().top - 200 }, 2e3);
}));
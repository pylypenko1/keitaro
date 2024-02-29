var $frame = $('iframe');
var vidsrc = $frame.attr('src');

$(".promo__svg, .ios-button").click(function() {
    $(".modal-promo").toggleClass("modal-promo--visible");
    $frame.attr('src', 'https://player.vimeo.com/video/344812637');
})
$(".close-btn").click(function() {
    $(".modal-promo").toggleClass("modal-promo--visible");
    $frame.attr('src', '');
});

$(".header__auth").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form-element-1").offset().top - 200
    }, 2000);
});

function stopVideo() {

}
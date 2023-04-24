const randMan = document.getElementById("rand_man");
const randPlaces = document.getElementById("rand_places");

function randomPlace(count) {
    let refreshIntervalId = setInterval(() => {
        if (count === 1) {
            clearInterval(refreshIntervalId);
        }
        randPlaces.innerText = count--;
    }, 7000);
}
randomPlace(13);

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
randMan.innerText = randomInteger(100, 200);

$(".s-carousel").slick({
    dots: false,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 6000,
    arrows: true,
    // prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><img src='#' alt=''></button>",
    // nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><img src='#' alt=''></button>"
});

      // $(function () {
      //   $(".js-range-slider").ionRangeSlider({
      //     skin: "round",
      //     min: 200,
      //     max: 1000000,
      //     from: 200,
      //     max_postfix: "+",
      //     postfix: " €",
      //     grid: true,
      //     onStart: function (data) {
      //       $("#calcResult").text(
      //         Math.round(data.from * 0.32 + data.from) + " €"
      //       );
      //     },
      //     onChange: function (data) {
      //       $("#calcResult").text(
      //         Math.round(data.from * 0.32 + data.from) + " €"
      //       );
      //     },
      //   });
      // });
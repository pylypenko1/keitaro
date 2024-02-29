$(document).ready(function () {
  $(".accordion-param__header_item").on("click", function (e) {
    e.preventDefault();
    let that = $(this);
    if (!$(".accordion-param").hasClass("accordion-param__show")) {
      $(".accordion-param").removeClass("accordion-param__show");
    }
    that
      .closest(".accordion-param")
      .find(".accordion-param__body")
      .slideToggle();
    that.closest(".accordion-param").toggleClass("accordion-param__show");
  });

  let textLink = $(".accordion-param__body_link");
  textLink.on("click", function (e) {
    e.preventDefault();
    let blockValue = $(this).text();
    $(this)
      .closest(".accordion-param")
      .find(".accordion-param__header_item p")
      .html(blockValue);

    if (!$(".accordion-param").hasClass("accordion-param__show")) {
      $(".accordion-param").removeClass("accordion-param__show");
    }
    $(this).closest(".accordion-param__body").slideToggle();
    $(this).closest(".accordion-param").toggleClass("accordion-param__show");
  });

  $(".accordion__header").on("click", function (e) {
    e.preventDefault();
    var that = $(this);
    if (!$(".accordion__item").hasClass("accordion__item_show")) {
      that.closest(".accordion__body").slideUp();
      $(".accordion__item").removeClass("accordion__item_show");
    }
    that.closest(".accordion__item").toggleClass("accordion__item_show");
    that.next().slideToggle();
  });

  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var fiveHours = 17427,
    display = $(".sectionTimer__blockTimer_timer")[0];
  startTimer(fiveHours, display);

  $(".footer__info_btn").on("click", function (e) {
    e.preventDefault();
    if ($(".footer__info_text").hasClass("show")) {
      $(".footer__info_btn").html("Read more");
      $(this)
        .closest(".footer__info")
        .find(".footer__info_text")
        .removeClass("show");
    } else {
      $(".footer__info_btn").html("Read less");
      $(this)
        .closest(".footer__info")
        .find(".footer__info_text")
        .addClass("show");
    }
  });
});

$(".chooseCard a").on("click", function (e) {
  e.preventDefault();
  $(".chooseCard a").removeClass("hide");
  $(this).toggleClass("hide");
});

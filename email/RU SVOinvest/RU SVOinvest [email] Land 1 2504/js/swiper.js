var swiper = new Swiper(".mySwiper", {
  spaceBetween: 36,
  centeredSlides: false,
  slidesPerView: 5,
  initialSlide: 3,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {},
});
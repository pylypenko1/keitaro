var navMain = document.querySelector(".main-nav"),
    navToggle = document.querySelector(".main-nav__toggle");
navMain.classList.remove("main-nav--nojs"),
    navToggle.addEventListener("click", function () {
        navMain.classList.contains("main-nav--closed") ? (navMain.classList.remove("main-nav--closed"), navMain.classList.add("main-nav--opened")) : (navMain.classList.add("main-nav--closed"), navMain.classList.remove("main-nav--opened"));
    });
const links = document.querySelectorAll(".main-nav__item"),
    navLinckHandleClick = () => {
        navMain.classList.add("main-nav--closed"), navMain.classList.remove("main-nav--opened");
    };
links.forEach((e) => {
    e.addEventListener("click", navLinckHandleClick);
});
const showButns = document.querySelectorAll(".why-to-invest__item-more-btn"),
    onItemMouseOver = (e) => {
        window.screen.width > 1023 && e.classList.add("why-to-invest__item--active");
    },
    onItemMouseOut = (e) => {
        window.screen.width > 1023 && e.classList.remove("why-to-invest__item--active");
    };
showButns.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.target.parentElement.classList.toggle("why-to-invest__item--active");
    });
});
const video = document.querySelector("#video"),
    playButton = document.querySelector("#play-btn"),
    handlePlayClick = () => {
        (playButton.style.display = "none"), video.setAttribute("controls", "controls"), video.play();
    };
$(document).ready(function () {
    $("#slider-revolution").slick({ dots: !0, autoplay: !0, autoplaySpeed: 2e3 }),
        $("#why-to-invest-slider").slick({ infinite: !1, dots: !1, arrows: !1, swipe: !1, responsive: [{ breakpoint: 1024, settings: { infinite: !0, arrows: !0, swipe: !0, autoplay: !0, autoplaySpeed: 2e3 } }] }),
        $("#slider-rewiews").slick({ dots: !0, slidesToShow: 3, autoplay: !0, autoplaySpeed: 4e3, responsive: [{ breakpoint: 1024, settings: { arrows: !1, slidesToShow: 1 } }] }),
        $("#slider-smartphone").slick({ infinite: !1, responsive: [{ breakpoint: 1024, settings: { initialSlide: 1, arrows: !0 } }] });
});

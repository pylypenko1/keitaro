$(document).ready((function(){$(".main-roduct-slider-for").on("init",(function(i,s){$(this).css("visibility","visible")})),$(".main-roduct-slider-for").length>0&&$(".main-roduct-slider-for").slick({slidesToShow:1,slidesToScroll:1,speed:500,arrows:!0,dots:!1,infinite:!0,fade:!0,swipe:!0,asNavFor:".main-product-slider-nav"}),$(".main-product-slider-nav").on("init",(function(i,s){$(this).css("visibility","visible")})),$(".main-product-slider-nav").length>0&&$(".main-product-slider-nav").slick({slidesToShow:4,slidesToScroll:1,speed:500,arrows:!1,dots:!1,infinite:!0,fade:!1,swipe:!0,swipeToSlide:!0,focusOnSelect:!0,asNavFor:".main-roduct-slider-for"})}));
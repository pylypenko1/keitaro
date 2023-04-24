document.addEventListener('DOMContentLoaded', function () {
  let browserWindowWidth = document.documentElement.clientWidth;
  let numCenterSlides = 1;

  if (browserWindowWidth >= 1024 && browserWindowWidth < 1440) {
    numCenterSlides = 2;
    setTimeout(() => {
      $('.slick-center').addClass('slick-center-first');
      $('.slick-center').prev().addClass('slick-center-first');
    }, 100);
  } else if (browserWindowWidth >= 1440) {
    numCenterSlides = 3;
    setTimeout(() => {
      $('.slick-center').addClass('slick-center-first');
      $('.slick-center').addClass('slick-center-last');
      $('.slick-center').prev().addClass('slick-center-first');
      $('.slick-center').next().addClass('slick-center-last');
    }, 100);
  }

  //Первая версия слайдера
  $('.social-network__slik-1').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: false,
    focusOnSelect: true,
    responsive: [
      {
        infinite: true,
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        infinite: true,
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        infinite: true,
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  function setCenterSlides(num = 1) {
    if (num === 2) {
      let activeList = document.querySelectorAll('.slick-center-first');
      for (let key of activeList) {
        key.classList.remove('slick-center-first');
      }
      $('.slick-center').addClass('slick-center-first');
      $('.slick-center').prev().addClass('slick-center-first');
    } else if (num === 3) {
      let centerFirst = document.querySelectorAll('.slick-center-first');
      let centerLast = document.querySelectorAll('.slick-center-last');
      for (let key of centerFirst) {
        key.classList.remove('slick-center-first');
      }
      for (let key of centerLast) {
        key.classList.remove('slick-center-last');
      }
      $('.slick-center').addClass('slick-center-first');
      $('.slick-center').addClass('slick-center-last');
      $('.slick-center').prev().addClass('slick-center-first');
      $('.slick-center').next().addClass('slick-center-last');
    }
  }
  $('.social-network__slik-1').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    setCenterSlides(numCenterSlides);
  });
  var countElements = 0;

  //Вторая версия слайдера
  $('.social-network__slik-2').slick({
    infinite: true,
    slidesToShow: countElements <= 10 ? countElements : 10,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: false,
    focusOnSelect: true,
    responsive: [
      {
        infinite: true,
        breakpoint: 1440,
        settings: {
          slidesToShow: countElements <= 7 ? countElements : 7,
          slidesToScroll: 1,
        },
      },
      {
        infinite: true,
        breakpoint: 1024,
        settings: {
          slidesToShow: countElements <= 5 ? countElements : 5,
          slidesToScroll: 1,
        },
      },
      {
        infinite: true,
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // // Прометка
  // function setSocialNetworkEvents() {
  //   $(".social-network__slik-1").on("swipe", function () {
  //     dataLayerActtion({
  //       eAction: `swipe`,
  //       eLabel: `social-network-section/slider`,
  //     });
  //   });
  // }
  // function setSocialNetworkPrev() {
  //   $(".social-network__slik-1").on('click', '.slick-next', function () {
  //     dataLayerActtion({
  //       eAction: `click`,
  //       eLabel: `social-network-section/next-slide`,
  //     });
  //   });
  // }
  // function setSocialNetworkNext() {
  //   $(".social-network__slik-1").on('click', '.slick-prev', function () {
  //     dataLayerActtion({
  //       eAction: `click`,
  //       eLabel: `social-network-section/prev-slide`,
  //     });
  //   });
  // }
  // function setSocialNetworkDots() {
  //   $(".social-network__slik-1").on('click', '.slick-dots li', function () {
  //     dataLayerActtion({
  //       eAction: `click`,
  //       eLabel: `social-network-section/dots`,
  //     });
  //   });
  // }
  // const socialCarts = document.querySelectorAll('.social-network__slik-1 .social-network__article');
  // GTMClickHandler({ location: "SocialNetworkSection", interactiveElements: socialCarts });

  // setSocialNetworkEvents();
  // setSocialNetworkPrev();
  // setSocialNetworkNext();
  // setSocialNetworkDots();
});

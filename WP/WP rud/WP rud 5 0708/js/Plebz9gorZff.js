var $body = $("body"),
  $header = $("#header"),
  flagHeader,
  $mainNav = $("#mainNav"),
  $win = $(window),
  $videoWrap = $("#player"),
  $video = $videoWrap.find("video");

var loadJS = function (url, implementationCode, location) {
  var scriptTag = document.createElement("script");
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};

$win.on("load", function () {
  var restartAnim;
  $body.removeClass("loaded");

  /* lazy video */
  if ($(".js-lazy").length) {
    $(".js-lazy").Lazy({
      effect: "fadeIn",
      effectTime: 400,
    });
  }
  if ($(".lazy").length) {
    $(".lazy").Lazy({
      effect: "fadeIn",
      effectTime: 400,
    });
  }

  $(".js-bg").each(function () {
    $(this).css("background-image", "url(" + $(this).data("preload") + ")");
  });
  $(".js-img").each(function () {
    $(this).attr("src", $(this).data("src"));
  });
  /* animation  numbers*/
  $(".js-number").each(function () {
    var $el = $(this),
      $val = $el.attr("data-val");
    $el.animateNumber({ number: +$val, easing: "easeInQuad" }, 1000);
  });
  var $timeSet = 2500;
  if ($body.is(".web")) {
    $timeSet = 100;
  }
  // setTimeout(function() {

  //     $("head").append( '<link rel="stylesheet" href="https://verstkovo.ru/wp-content/themes/verstkovo/assets/css/lkdfoAiavfn0.css">' );
  // },$timeSet)
  if ($(".adaptive-sait .h1 .letter").length) {
    anime.timeline({ loop: false }).add({
      targets: ".adaptive-sait .h1 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: function (el, i) {
        return 500 + 30 * i;
      },
    });
    $(".adaptive-sait .h1 .letter").on("mouseenter", function (e) {
      var $el = $(this);
      anime({
        targets: e.target,
        easing: "easeOutExpo",
        delay: 0,
        duration: 1800,
        translateY: [0, -15, 0],
      });
    });
  }
  if ($("#animLogo").length) {
    restartAnim = anime({
      targets: "#animLogo",
      backgroundColor: "#F2F2F2",
      easing: "easeInOutCubic",
      duration: 400,
      delay: 200,
      complete: function (anim) {
        anime({
          targets: "#circle",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutCubic",
          duration: 500,
          delay: 200,
          complete: function (anim) {
            anime({
              targets: "#circle",
              fill: ["rgba(219,219,219,0)", "#dbdbdb"],
              easing: "easeInOutCubic",
              duration: 300,
              delay: 100,

              complete: function (anim) {
                anime({
                  targets: "#animLogo",
                  backgroundColor: "#fff",
                  easing: "easeInOutCubic",
                  duration: 400,
                  delay: 200,
                });

                anime({
                  targets: "#circle",
                  stroke: "#dbdbdb",
                  easing: "easeInOutCubic",
                  duration: 400,
                  delay: 200,
                  complete: function () {
                    anime({
                      targets: "#orange-circle-color",
                      strokeDashoffset: [anime.setDashoffset, 0],
                      easing: "easeInOutCubic",
                      duration: 700,
                      delay: 200,
                      complete: function () {
                        anime({
                          targets: "#green-circle-color",
                          strokeDashoffset: [anime.setDashoffset, 0],
                          easing: "easeInOutCubic",
                          duration: 700,
                          delay: 200,

                          complete: function () {
                            anime({
                              targets: "#circle",
                              fill: "#ffffff",
                              stroke: "#ffffff",
                              easing: "easeInOutCubic",
                              duration: 300,
                              delay: 100,

                              complete: function () {
                                anime({
                                  targets: "#svgDark",
                                  width: "100%",
                                  easing: "easeInOutCubic",
                                  duration: 300,
                                  delay: 100,

                                  complete: function () {
                                    anime({
                                      targets: "#svgLigthDark",
                                      width: "100%",
                                      easing: "easeInOutCubic",
                                      duration: 300,
                                      delay: 100,

                                      complete: function () {
                                        anime({
                                          targets: "#green-circle-color, #orange-circle-color",
                                          stroke: "#ffffff",
                                          opacity: 0,
                                          easing: "easeInOutCubic",
                                          duration: 1,
                                          delay: 0,
                                        });
                                        anime({
                                          targets: "#svgLigthDark, #svgDark",
                                          opacity: 0,
                                          stroke: "#ffffff",
                                          easing: "easeInOutCubic",
                                          duration: 700,
                                          delay: 700,
                                        });
                                        anime({
                                          targets: "#green-circle-color",
                                          opacity: 1,
                                          fill: ["#B3B3B3", "#FBB216"],
                                          easing: "easeInOutCubic",
                                          duration: 700,
                                          delay: 700,
                                        });
                                        anime({
                                          targets: "#orange-circle-color",
                                          opacity: 1,
                                          fill: ["#666666", "#7ACCC8"],
                                          easing: "easeInOutCubic",
                                          duration: 700,
                                          delay: 700,
                                        });
                                      },
                                    });
                                  },
                                });
                              },
                            });
                          },
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });

    function cleanAnim() {
      $("#animLogo").css("background-color", "");
      $(".svg-dark, #orange-circle-color, #green-circle-color, #circle").removeAttr("style");
      $("#circle").attr({ fill: "none", stroke: "#BBBBBB", "stroke-dashoffset": "812.235" });
      $("#orange-circle-color").attr({
        fill: "transparent",
        stroke: "#909090",
        "stroke-dashoffset": "1467.653564453125",
      });
      $("#green-circle-color").attr({
        fill: "transparent",
        stroke: "#909090",
        "stroke-dashoffset": "1175.861572265625",
      });
    }
    restartAnim.pause();
    var flag = false;
    if (!$(".ios").length) {
      if (
        $win.scrollTop() >= $("#animLogo").offset().top - window.innerHeight / 3 &&
        $win.scrollTop() <= $("#animLogo").offset().top + window.innerHeight
      ) {
        flag = true;
        restartAnim.play();
        setInterval(function () {
          cleanAnim();
          restartAnim.restart();
        }, 15000);
      }
    }
    $win.scroll(function () {
      if (!$(".ios").length && !flag) {
        if ($win.scrollTop() >= $("#animLogo").offset().top - window.innerHeight / 3) {
          restartAnim.play();
          setInterval(function () {
            cleanAnim();
            restartAnim.restart();
          }, 15000);
        }
      }
    });
  }
  if ($body.is(".web")) {
    var parallaxBox4 = $("#mainBox");
    if (parallaxBox4.length) {
      parallaxBox4.on("mousemove", function (event) {
        event = event || window.event;
        var elms = $("#mainBgWrap");
        var divisor = 3;
        var startX = elms.outerWidth() / 400;
        var startY = elms.outerHeight() / 800;
        var $x = startX - (event.screenX / divisor - event.clientX) / 30,
          $y = startY - (event.screenY / divisor - event.clientY) / 30;
        elms.css({
          transform: "translate(" + $x + "px, " + $y + "px)",
        });
        $("#mainBgInner").css({
          transform: "translate(" + -$x + "px, " + -$y + "px)",
        });
      });
    }
  }

  var $mainBox = $("#mainBox"),
    $mainImg = $("#mainBg");
  function mainBg() {
    $mainImg.css({
      height: $mainBox.outerHeight(),
      width: $mainBox.outerWidth(),
    });
  }
  if ($mainImg.length) {
    mainBg();
    $win.resize(function () {
      mainBg();
    });
  }

  /* lazy video */
  function videoLazy() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.video-lazy"));

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.video;
              }
            }

            video.target.load();
            video.target.classList.remove("video-lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
    $("#videoLazy").css({
      opacity: 1,
      "-webkit-filter": "blur(0)",
      filter: "blur(0)",
    });
  }
  if ($("#videoLazy").length) {
    if ($("#videoLazy").length && window.innerWidth > 1040) {
      videoLazy();
    }
  }

  $win.resize(function () {
    if (window.innerWidth > 991 && $mainNav.is(".active") && $mainNav.length) {
      $("#mainNav, .js-button-nav").removeClass("active");
      $mainNav.css("height", "");
      unlockScroll();
    }
  });
  // lazy vimeo
  //   var iframe = document.querySelector('iframe');

  //   function handleLazyLoad() {
  //     if (iframe.classList.contains('lazyload')) {
  //       var storeSRC = iframe.dataset.src;
  //      		iframe.src = storeSRC;
  //      		iframe.classList.remove("lazyload");
  //        // initPlayer();
  //     }
  //   }
  //   if ($('.lazyload').length && window.innerWidth > 1040 && $win.scrollTop() > $('#video').offset().top - window.innerWidth) {
  //   		handleLazyLoad();
  //   }

  // $win.scroll(function() {
  // 	if ($('.lazyload').length && window.innerWidth > 1040) {
  // 		if ($win.scrollTop() > $('.lazyload').offset().top - window.innerWidth) {
  // 			handleLazyLoad();
  // 		}
  // 	}
  // });
  $win.resize(function () {
    // if ($('.lazyload').length && window.innerWidth > 1040) {
    // 	if ($win.scrollTop() > $('.lazyload').offset().top - window.innerWidth) {
    // 		handleLazyLoad();
    // 	}
    // }

    if ($("#videoLazy").length && window.innerWidth > 1040) {
      videoLazy();
    }
  });

  // if ($('.js-iframe-container').length) {
  // 	setTimeout(function() {

  // 	$('.js-iframe-container').each(function() {
  // 		var $src = $(this).attr('data-src')
  // 		$(this).append('<iframe src="'+$src+'" class="popup-iframe" height="540"></iframe>')
  // 	})
  // },1500)
  // }
  $(".js-anchor").on("click", function () {
    var $el = $(this),
      $top = $($($el).attr("href")).offset().top;
    $("body,html").animate(
      {
        scrollTop: $top,
      },
      400
    );
    return false;
  });
  // setTimeout(function () {
  //   //width dropdown
  //   if ($(".js-phone-tel").length > 0) {
  //     loadJS("/wp-content/themes/verstkovo/assets/js/intlTelInput/intlTelInput.min.js", initCode, document.body);
  //     function initCode() {
  //       /* phone code */
  //       $("input[name='phone']").each(function (indx1, element) {
  //         $(element).intlTelInput({
  //           allowDropdown: true,
  //           autoPlaceholder: "aggressive",
  //           nationalMode: true,
  //           preferredCountries: ["ua", "ru", "by", "kz"],
  //           separateDialCode: true,
  //         });
  //       });
  //       /* phone code */
  //       $(".js-phone-tel").each(function () {
  //         var $el = $(this);
  //         $el.intlTelInput().done(function (e) {
  //           $el
  //             .closest(".intl-tel-input")
  //             .find(".country-list")
  //             .css({ width: $el.closest(".intl-tel-input").outerWidth() });
  //         });
  //       });
  //     }
  //   }
  // }, 2000);

  // stickyfloat
  var $stickaside = $(".js-stickyfloat");
  if ($stickaside.length) {
    loadJS("/wp-content/themes/verstkovo/assets/js/components/stickyfloat.js", initStickly, document.body);
    function initStickly() {
      heightAside();

      $stickaside.stick_in_parent();
      $stickaside.css({
        top: 0,
      });
      $win.scroll(function () {
        heightAside();
        $(document.body).trigger("sticky_kit:recalc");
      });

      if (window.innerWidth < 1040) {
        $(".content-filters.js-scroll").mCustomScrollbar("destroy");
      }
      $win.resize(function () {
        heightAside();
        $(document.body).trigger("sticky_kit:recalc");
        if (window.innerWidth < 1040) {
          $(".content-filters.js-scroll").mCustomScrollbar("destroy");

          if ($(".js-wrap-aside-left").is(".open") || $(".js-wrap-aside-right").is(".open")) {
            unlockScroll();
          }
        } else {
          if ($(".content-filters.js-scroll").is(".mCS_destroyed")) {
            $(".js-scroll").mCustomScrollbar({
              axis: "y",
              theme: "dark-thin",
              autoExpandScrollbar: true,
              advanced: {
                autoExpandHorizontalScroll: true,
              },
            });
          } else {
            $stickaside.find(".js-scroll").mCustomScrollbar("update");
          }

          if ($(".js-wrap-aside-left").is(".open") || $(".js-wrap-aside-right").is(".open")) {
            lockScroll();
          }
        }
      });
    }

    function heightAside() {
      if (window.innerWidth > 1039) {
        var $windowScroll = $win.scrollTop(),
          $headrHeight = $header.outerHeight();
        var $heightAside = window.innerHeight - $headrHeight - 1;
        if ($windowScroll > 0) {
          $heightAside = window.innerHeight - $headrHeight + $windowScroll;
          if ($windowScroll > $headrHeight) {
            $heightAside = window.innerHeight;
          }
        }
      } else {
        $heightAside = "auto";
      }
      $stickaside.css({
        height: $heightAside,
      });
    }
    // stickyfloat
    /* blog aside*/
  }
});

$(function () {
  $body.addClass("loaded-content");
  //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  // $body.addClass('ios');
  //} else {
  // $body.addClass('web');
  //};
  /* animation  numbers*/
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 50,
    mobile: false,
    live: true,
    callback: function (box) {
      $(box).addClass("anim-eyt");
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window
  });
  if ($(".wow").length) {
    wow.init();
  }
  // height video
  function heightVideo() {
    if ($("#boxMain").length) {
      $("#boxMain").css("min-height", window.innerHeight);
      $video.each(function () {
        var heightWrap = $videoWrap.outerHeight(),
          heightVideo = $videoWrap.outerWidth() * 0.5625;
        if (heightVideo > heightWrap) {
          $("#player").css({
            height: heightVideo,
            width: "100%",
          });
          $video.css({
            height: heightVideo,
            width: "100%",
          });
        } else {
          $("#player").css({
            height: heightWrap,
            width: heightWrap * 1.78,
          });
          $video.css({
            height: heightWrap,
            width: heightWrap * 1.78,
          });
        }
      });
    }
  }
  heightVideo();
  $win.resize(function () {
    heightVideo();
  });

  $(".js-img").each(function () {});

  // height video
  $(".js-button-nav").on("click", function () {
    if ($(".header-new").is(".fixed")) {
      flagHeader = true;
    }
    if (!$(this).is(".active")) {
      $mainNav.css("height", window.innerHeight);
      lockScroll();
      $(this).addClass("active");
    } else {
      unlockScroll();
      $(this).removeClass("active");
      flagHeader = false;
    }
    setTimeout(function () {
      $mainNav.toggleClass("active");
    }, 100);
    return false;
  });
  $win.resize(function () {
    if ($mainNav.is(".active")) {
      $mainNav.css("height", window.innerHeight);
    }
  });
  $body.on("touchstart click", function (e) {
    if ($mainNav.is(".active")) {
      if ($(e.target).closest(".js-button-nav").length || $(e.target).closest("#mainNav ul").length) {
        return;
      } else {
        unlockScroll();
        $(".js-button-nav").removeClass("active");
        flagHeader = false;
        setTimeout(function () {
          $mainNav.removeClass("active");
        }, 100);
      }
    }
    if (window.innerWidth > 1039) {
      if ($(".js-wrap-aside-left").is(".open")) {
        if ($(e.target).closest(".js-wrap-aside-left").length) {
          return;
        } else {
          $(".js-nav-aside-left").trigger("click");
        }
      }
      if ($(".js-wrap-aside-right").is(".open")) {
        if ($(e.target).closest(".js-wrap-aside-right").length) {
          return;
        } else {
          $(".js-nav-aside-right").trigger("click");
        }
      }
    }
  });
  var y_offsetWhenScrollDisabled, offset;

  $win.scroll(function () {
    y_offsetWhenScrollDisabled = $win.scrollTop();
  });

  function lockScroll() {
    if ($(".header-new").is(".fixed")) {
      flagHeader = true;
    }
    offset = y_offsetWhenScrollDisabled;
    $body.addClass("scrollDisabled");
    $("html").css("margin-top", -y_offsetWhenScrollDisabled);

    if (flagHeader && !$(".header-new").is(".fixed")) {
      $(".header-new").addClass("fixed");
    }
  }

  function unlockScroll() {
    $body.removeClass("scrollDisabled");
    $("html").css("margin-top", 0);
    $("html, body").animate(
      {
        scrollTop: offset,
      },
      0
    );
  }

  /* sliders */
  if ($(".js-slider").length) {
    $(".js-slider").slick({
      dots: true,
      infinite: true,
      fade: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<button class="slick-prev slick-arrow"><span>Предыдущий</span><i class="icon-arrow-prev-big"></i></button>',
      nextArrow:
        '<button class="slick-next slick-arrow"><i class="icon-arrow-next-big"></i><span>Следующий</span></button>',
    });
  }
  if ($(".js-slider-1").length) {
    $(".js-slider-1").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      prevArrow:
        '<button class="slick-prev slick-arrow"><span>Предыдущий</span><i class="icon-arrow-prev-big"></i></button>',
      nextArrow:
        '<button class="slick-next slick-arrow"><i class="icon-arrow-next-big"></i><span>Следующий</span></button>',

      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
      ],
    });
  }
  /* sliders */

  /* sliders */
  if ($(".js-sliders-1").length) {
    $(".js-sliders-1").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      variableWidth: true,
      prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-arrow-prev-big"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow"><i class="icon-arrow-next-big"></i></button>',

      responsive: [
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
      ],
    });
  }
  if ($(".js-sliders-2").length) {
    $(".js-sliders-2").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-arrow-prev-big"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow"><i class="icon-arrow-next-big"></i></button>',

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
      ],
    });
  }
  /* sliders */

  /* custom  scroll */
  if ($(".js-scroll").length) {
    $(".js-scroll").mCustomScrollbar({
      axis: "y",
      theme: "dark-thin",
      autoExpandScrollbar: true,
      advanced: {
        autoExpandHorizontalScroll: true,
      },
    });
  }

  if ($(".js-scroll-case").length) {
    $(".js-scroll-case").mCustomScrollbar({
      axis: "y",
      theme: "dark-thin",
      autoDraggerLength: false,
      autoExpandScrollbar: true,
      advanced: { autoExpandHorizontalScroll: true },
    });
  }

  $win.resize(function () {
    $(".country-list").each(function () {
      var $el = $(this);
      $el.css({ width: $el.closest(".intl-tel-input").outerWidth() });
    });
  });

  /* placeholder*/
  $("input, textarea").each(function () {
    var $el = $(this),
      placeholder = $(this).attr("placeholder");
    $el.focus(function () {
      $el.attr("placeholder", "");
    });
    $el.focusout(function () {
      $el.attr("placeholder", placeholder);
    });
  });

  $(".input-cov .t-inp, .form-control").each(function () {
    if ($(this).val() == "") {
      $(this).closest(".input-cov, .box-field").removeClass("filled");
    } else {
      $(this).closest(".input-cov, .box-field").addClass("filled");
    }
  });
  $(".input-cov .t-inp, .form-control").focus(function () {
    $(this).closest(".input-cov, .box-field").addClass("filled");
  });
  $(".input-cov .t-inp, .form-control").blur(function () {
    if ($(this).val() == "") {
      $(this).closest(".input-cov, .box-field").removeClass("filled");
    }
  });
  /* placeholder*/

  /* tooltip */
  if ($(".js-tooltip").length) {
    var $action = "hover";
    if ($body.is(".ios")) {
      $action = "click";
    }
    for (i = 0; i < $(".js-tooltip").length; i++) {
      var trigger = document.getElementsByClassName("js-tooltip")[i];
      var instance = new Tooltip(trigger, {
        title: trigger.getAttribute("data-tooltip"),
        trigger: $action,
        placement: "top",
        closeOnClickOutside: true,
        html: true,
      });
    }
  }
  /* tooltip */

  /* phone code */

  if ($body.is(".fixed-header")) {
    if ($win.scrollTop() >= window.innerHeight) {
      $(".header-new").addClass("fixed");
    } else {
      $(".header-new").removeClass("fixed");
    }
    $win.scroll(function () {
      if ($win.scrollTop() >= window.innerHeight) {
        $(".header-new").addClass("fixed");
      } else {
        if (!flagHeader) {
          $(".header-new").removeClass("fixed");
        }
      }
    });
  }

  /* tabs */

  /* accordion packets */
  $(".js-accordion-head").on("click", function () {
    var $el = $(this),
      $line = $el.attr("data-line");
    if (!$el.closest(".js-accordion-wrap").is(".active")) {
      $(".js-accordion-wrap.active").removeClass("active").find(".js-accordion-body").slideUp(200);
      $("[data-line*=" + $line + "]")
        .closest(".js-accordion-wrap")
        .toggleClass("active")
        .find(".js-accordion-body")
        .slideDown(200);
    }
  });
  /* accordion packets */

  /* accordion packets */
  $(".js-accordion-title").on("click", function () {
    var $el = $(this);
    $el
      .closest(".js-accordion-wrap")
      .siblings(".js-accordion-wrap.active")
      .removeClass("active")
      .find(".js-accordion-body")
      .slideUp(200);
    $el.closest(".js-accordion-wrap").toggleClass("active").find(".js-accordion-body").slideToggle(200);
  });
  /* accordion packets */

  $(".js-tab-nav").on("click", function () {
    var $el = $(this),
      $href = $el.attr("href");
    $(".js-tab-nav").removeClass("active");
    $el.addClass("active").closest(".js-tab-wrap").find(".js-tab").removeClass("active");
    $($href).addClass("active");
    if ($el.is(".nav-portfolio__link") && window.innerWidth > 1140) {
      var $index = $el.closest(".nav-portfolio__item").index();
      $("#bgNav").css("top", $index * 51);
      $("#arrowNav").css("top", $index * 51 + 25.5);
    }
    return false;
  });

  if ($("#bgNav").length && window.innerWidth > 1140) {
    var $index = $(".js-tab-nav.active").closest(".nav-portfolio__item").index();
    $("#bgNav").css("top", $index * 51);
    $("#arrowNav").css("top", $index * 51 + 25.5);
  }
  /* tabs */

  /* switch seo*/
  $(".js-switch").on("click", function () {
    var $el = $(this);
    $el.closest(".js-cost-wrap").find(".js-cost-seo").toggleClass("cost-seo");
  });
  /* switch seo*/

  if (
    navigator.appVersion.toUpperCase().indexOf("MSIE") != -1 ||
    navigator.appVersion.toUpperCase().indexOf("TRIDENT") != -1
  ) {
    $("body").addClass("ie");
  }

  /*scroll id*/
  $(".js-scroll-id").click(function () {
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - $header.outerHeight(),
      },
      1000
    );
    return false;
  });
  /*scroll id*/

  /*slider begin*/

  // 		})

  /* fancybox */
  if ($(".js-fancybox").length) {
    $(".js-fancybox").fancybox({
      padding: 0,
      margin: 20,
      touch: false,
      animationEffect: "zoom",
      transitionEffect: "zoom-in-out",
      speed: 350,
      buttons: [],
      transitionDuration: 300,
      smallBtn: true,
      backFocus: false,
      btnTpl: {
        smallBtn:
          '<a title="закрыть" data-fancybox-close class="fancybox-item fancybox-close fancybox-close_popup"></a>',
      },
      afterShow: function () {
        lockScroll();

        $(".country-list").each(function () {
          var $el = $(this);
          $el.css({ width: $el.closest(".intl-tel-input").outerWidth() });
        });
        $body.addClass("popup-open");
      },
      afterClose: function () {
        unlockScroll();
      },
    });
  }

  $(".js-fancybox-portfolio").on("click", function () {
    var $href = $(this).attr("href");
    $.fancybox.open({
      src: $href,
      type: "inline",
      padding: 0,
      margin: 20,
      touch: false,
      animationEffect: "zoom",
      transitionEffect: "zoom-in-out",
      speed: 350,
      buttons: [],
      transitionDuration: 300,
      smallBtn: true,
      baseClass: "fancybox-popup",
      backFocus: false,
      btnTpl: {
        smallBtn:
          '<a title="закрыть" data-fancybox-close class="fancybox-item fancybox-close fancybox-close_popup"></a>',
      },
      afterShow: function () {
        lockScroll();
        if ($(".fancybox-popup").find(".popup-iframe").length) {
          $(".fancybox-popup")
            .find(".js-iframe-container")
            .css("max-height", Math.ceil($(".fancybox-popup").outerHeight()) - 20);

          $(".fancybox-popup")
            .find(".popup-iframe")
            .load(function () {
              var $heightContent = Math.ceil($(".fancybox-popup").find(".popup-iframe").contents().outerHeight());
              $(".popup-iframe").attr({ height: "" + $heightContent + "px" });

              $(".fancybox-popup")
                .find(".js-iframe-container")
                .mCustomScrollbar({
                  axis: "y",
                  theme: "light-thick",
                  callbacks: {
                    onScrollStart: function () {
                      $(".fancybox-popup")
                        .find(".popup-project")
                        .animate(
                          {
                            scrollTop: $(".fancybox-popup").find(".js-iframe-container").position().top - 10,
                          },
                          300
                        );
                    },
                  },
                })
                .on("mouseenter", function () {
                  //cross-domain iframe mousewheel hack
                  $(this).find("iframe").css("pointer-events", "none");
                })
                .on("mouseup", function () {
                  if (!$(this).find(".mCSB_scrollTools_onDrag").length) return;
                  setTimeout(function () {
                    $(".fancybox-popup").find(".js-iframe-container").trigger("mouseenter");
                  }, 1);
                });
              $win
                .on("blur", function () {
                  $(".fancybox-popup").find(".js-iframe-container iframe").css("pointer-events", "auto");
                })
                .on("focus", function () {
                  $(".fancybox-popup").find(".js-iframe-container").trigger("mouseenter");
                });
              $win.resize(function () {
                $(".popup-iframe").attr({
                  height: "" + Math.ceil($(".fancybox-popup").find(".popup-iframe").contents().outerHeight()) + "px",
                });
                $(".fancybox-popup")
                  .find(".js-iframe-container")
                  .css("max-height", $(".fancybox-popup").outerHeight()) - 20;
              });
            });
        }

        $body.addClass("popup-open");
        if ($(".fancybox-popup").find(".popup-iframe").length) {
          //$('.web .fancybox-popup').find('.popup-iframe').css({'margin-right': '', 'padding-right': ''})
          //$('.fancybox-popup').find('.popup-iframe').load(function () {
          $(".fancybox-popup").addClass("anim");
          //});
        }
        $(".fancybox-close").on("click", function () {
          $body.removeClass("popup-open");
        });
      },
      beforeClose: function () {
        if ($(".fancybox-popup").find(".popup-iframe").length) {
          $(".fancybox-popup").find(".js-iframe-container").css("max-height", "");

          $(".popup-iframe").attr({ height: "" + 540 + "px" });
        }
      },
      afterClose: function () {
        $body.removeClass("popup-open");
        unlockScroll();
      },
    });

    return false;
  });

  if ($(".js-fancybox-showreel").length) {
    $(".js-fancybox-showreel").fancybox({
      padding: 0,
      margin: 20,
      touch: false,
      animationEffect: "zoom",
      transitionEffect: "zoom-in-out",
      speed: 350,
      transitionDuration: 300,
      smallBtn: false,

      backFocus: false,

      afterShow: function () {
        lockScroll();

        $("body").addClass("popup-open");
        if ($("#showreel").find("iframe").length == 0) {
          $href = $("#showreel").attr("data-path");
          $("#showreel").append(
            "<iframe src=" + $href + ' webkitallowfullscreen mozallowfullscreen allowfullscreen id="video"></iframe>'
          );
        } else {
          $("#showreel")
            .find("iframe")[0]
            .contentWindow.postMessage('{"event":"command","func":"' + "playVideo" + '","args":""}', "*");
        }
      },
      afterClose: function () {
        $("body").removeClass("popup-open");
        $("#showreel").empty();
        unlockScroll();
      },
    });
  }
  if ($(".js-fancybox-showreel").length) {
    $(".js-fancybox-showreel")
      .on("mouseenter", function () {
        if ($body.is(".web")) {
          $("#showreelImg").attr("src", "index_files/img/showreel.gif");
        }
      })
      .on("mouseleave", function () {
        displayImg();
      });
  }
  var imgArr = [
    "showreel_1.jpg",
    "showreel_2.jpg",
    "showreel_3.jpg",
    "showreel_4.jpg",
    "showreel_5.jpg",
    "showreel_6.jpg",
    "showreel_7.jpg",
  ];

  function displayImg() {
    var num = Math.floor(Math.random() * imgArr.length);
    $("#showreelImg").attr(
      "src",
      "https://verstkovo.ru/wp-content/themes/verstkovo/assets/img/showreel/" + imgArr[num]
    );
  }
  $(".js-fancybox-change-price_form").on("click", function () {
    var js_fancybox_main_data = $(this).attr("data-title");
    var js_fancybox_main_id = $(this).attr("href");
    var js_fancybox_main_id_form = $(js_fancybox_main_id).find("form");
    $(js_fancybox_main_id + "_value").html(js_fancybox_main_data);
    js_fancybox_main_id_form.find("input.name_price_all_form_hidden").val(js_fancybox_main_data);
    js_fancybox_main_id_form.find('[name="subject"]').val(js_fancybox_main_data);
  });
  /* fancybox*/

  /* blog aside*/
  $(".js-nav-aside-left").on("click", function () {
    var $parent = $(this).closest(".js-wrap-aside-left"),
      $width = $parent.outerWidth();
    if ($parent.is(".open")) {
      $parent.animate(
        {
          left: -$width,
        },
        150
      );
      unlockScroll();
    } else {
      lockScroll();
      if ((window.innerWidth - $(".wrapper").width()) / 2 < $width) {
        $parent.animate(
          {
            left: -($width - ($width - (window.innerWidth - $(".wrapper").width()) / 2)),
          },
          150
        );
      }
    }
    $parent.toggleClass("open");
    return false;
  });
  $(".js-nav-aside-right").on("click", function () {
    var $parent = $(this).closest(".js-wrap-aside-right"),
      $width = $parent.outerWidth();
    if ($parent.is(".open")) {
      $parent.animate(
        {
          right: -($width + 1),
        },
        150
      );
    } else {
      if ((window.innerWidth - $(".wrapper").width()) / 2 < $width) {
        $parent.animate(
          {
            right: -($width - ($width - (window.innerWidth - $(".wrapper").width()) / 2)),
          },
          150
        );
      }
    }
    $parent.toggleClass("open");
    return false;
  });
  $(".js-close-aside").on("click", function () {
    $(this)
      .closest(".js-wrap-aside-left, .js-wrap-aside-right")
      .find(".js-nav-aside-right, .js-nav-aside-left")
      .trigger("click");
    return false;
  });
});

/*
 * START
 * FOR WORDPRESS
 */

// var articleCat = $('.blog-articles .articles__item');
//
// function boxAnchor()
// {
//
//     let anchor = $('[id ^= "anchor-"]');
//     let content = $('.anchor-list');
//
//     anchor.each(function(i) {
//
//         let li = document.createElement('li');
//         li.className = 'anchor-list__item';
//
//         let a = document.createElement('a');
//         a.href = '#' + $(this).attr('id');
//         a.className = 'anchor-list__link js-scroll-id';
//         a.innerHTML = i+1 + '. ' + $(this).data('name');
//
//         li.append(a);
//
//         content.append(li);
//
//     });
//
// }
//
// boxAnchor();

function blogActivateFilter() {
  let filterCat = $(".filters-blog .filters-blog__item");

  filterCat = filterCat.find("input");

  filterCat.change(function () {
    if (this.checked) {
      //Do stuff
      let inputName = $(this).parent().parent().attr("data-category-name");

      articleCat.hide();

      articleCat.each(function () {
        if ($(this).attr("data-category-name") === inputName) $(this).show();
      });
    }

    paginationBlog();
  });
}

blogActivateFilter();

if ($(".js-parallax").length) {
  window.onload = function () {
    var parallaxBox1 = document.getElementById("mainImgBox"),
      parallaxBox2 = document.getElementById("offerBox"),
      parallaxBox3 = document.getElementById("servicesBox"),
      c2left = document.getElementById("mainImg").offsetLeft,
      c2top = document.getElementById("mainImg").offsetTop,
      c3left = document.getElementById("offerImg").offsetLeft,
      c3top = document.getElementById("offerImg").offsetTop,
      c4left = document.getElementById("servicesImg").offsetLeft,
      c4top = parallaxBox3.offsetTop;

    parallaxBox1.onmousemove = function (event) {
      event = event || window.event;
      var x1 = event.clientX - parallaxBox1.offsetLeft,
        y1 = event.clientY - parallaxBox1.offsetTop;

      mouseParallax("mainImg", "mainImgBox", c2left, c2top, x1, y1, 15);

      //parallaxBox.style.backgroundPosition = '' + 0 - ( ( ( x - ( parseInt( parallaxBox.offsetWidth ) / 2  ) ) / containerWidth ) * 50 ) + '%';
      //document.getElementById( 'l3' ).style.backgroundPosition = '' + 0 - ( ( ( x - ( parseInt( parallaxBox.offsetWidth ) / 2  ) ) / containerWidth ) * 75 ) + '%';
    };
    parallaxBox2.onmousemove = function (event) {
      event = event || window.event;
      var x2 = event.clientX - parallaxBox2.offsetLeft,
        y2 = event.clientY - parallaxBox2.offsetTop;

      mouseParallax("offerImg", "offerBox", c3left, c3top, x2, y2, 15);
    };
    parallaxBox3.onmousemove = function (event) {
      event = event || window.event;
      var x3 = event.clientX - parallaxBox3.offsetLeft,
        y3 = event.clientY - parallaxBox3.offsetTop;

      mouseParallax("servicesImg", "servicesBox", c4left, c4top, x3, y3, 15);

      //parallaxBox.style.backgroundPosition = '' + 0 - ( ( ( x - ( parseInt( parallaxBox.offsetWidth ) / 2  ) ) / containerWidth ) * 50 ) + '%';
      //document.getElementById( 'l3' ).style.backgroundPosition = '' + 0 - ( ( ( x - ( parseInt( parallaxBox.offsetWidth ) / 2  ) ) / containerWidth ) * 75 ) + '%';
    };
  };

  function mouseParallax(id, parent, left, top, mouseX, mouseY, speed) {
    var obj = document.getElementById(id);
    var parentObj = document.getElementById(parent),
      containerWidth = parseInt(parentObj.offsetWidth),
      containerHeight = parseInt(parentObj.offsetHeight);

    obj.style.left = left - ((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed + "px";
    obj.style.top = ((mouseY - top) * speed) / 2000 + containerHeight / (4 * speed) + "px";
  }
}

/*
 * START
 * FOR WORDPRESS
 */

var articleCat = $(".blog-articles .articles__item");

function boxAnchor() {
  let anchor = $(".single-content h2");
  let content = $(".anchor-list");
  $index = 1;
  anchor.each(function (i) {
    $id_title = "anchor-title-" + $index;
    $title = $(this).html();
    if ($title == "" || $title == "Содержание") {
      return;
    }
    let li = document.createElement("li");
    li.className = "anchor-list__item";

    let a = document.createElement("a");
    a.href = "#" + $id_title;
    a.className = "anchor-list__link js-scroll-id";
    a.innerHTML = $index + ". " + $(this).html();

    li.append(a);

    $(this).attr("id", $id_title);
    content.append(li);
    $index++;
  });
}

boxAnchor();

function blogActivateFilter() {
  let filterCat = $(".filters-blog .filters-blog__item");

  // var articleArr = [];
  // var filterArr = [];

  // get all data name category from article
  // articleCat.each(function() {

  // 	articleArr.push( $(this).attr('data-category-name') );
  // 	// console.log( cat );

  // });

  // // get all categories from filter

  // filterCat.each(function() {

  // 	filterArr.push( $(this).attr('data-category-name') );
  // 	// console.log( {cat} );

  // });

  filterCat = filterCat.find("input");

  // articleCat.hide();

  filterCat.change(function () {
    if (this.checked) {
      //Do stuff
      let inputName = $(this).parent().parent().attr("data-category-name");

      articleCat.hide();

      articleCat.each(function () {
        if ($(this).attr("data-category-name") === inputName) $(this).show();
      });
    }

    paginationBlog();
  });
}

blogActivateFilter();

function paginationBlog() {
  articleCat.each(function (i, el) {
    // if( i == 0 || i > 9 )
    // {
    // 	$(this).hide();
    // }
    // console.log( $(this).is(':visible') );
  });
}

paginationBlog();

/*
 * FOR WORDPRESS
 * END
 */

// var count = articleCat.length;
// // var count = 10; //всего записей
// var cnt = 9; //сколько отображаем сначала
// var cnt_page = Math.ceil(count / cnt); //кол-во страниц

// //выводим список страниц
// var paginator = document.querySelector(".paginator");
// var page = "";
// for (var i = 0; i < cnt_page; i++) {
//   page += "<span class='counts-page__current' data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";

// 	// page += '<div class="counts-page" data-page=' + i * cnt + ' id=\'page' + (i + 1) + '\'>';
// 	// 	page += '<span class="counts-page__current">01</span>|<span class="counts-page__total">05</span>';
// 	// page += '</div>';
// 	// page += '<div class="padination-blog__navs">';
// 	// 	page += '<a href="#" class="padination-blog__arrows"><i class="icon-arrow-prev-big"></i></a>';
// 	// 	page += '<a href="#" class="padination-blog__arrows"><i class="icon-arrow-next-big"></i></a>';
// 	// page += '</div>';

// }
// paginator.innerHTML = page;

// //выводим первые записи {cnt}
// var div_num = document.querySelectorAll(".num");
// for (var i = 0; i < div_num.length; i++) {
//   if (i < cnt) {
//     div_num[i].style.display = "block";
//   }
// }

// var main_page = document.getElementById("page1");
// main_page.classList.add("paginator_active");

// //листаем
// function pagination(event) {
//   var e = event || window.event;
//   var target = e.target;
//   var id = target.id;

//   if (target.tagName.toLowerCase() != "span") return;

//   var num_ = id.substr(4);
//   var data_page = +target.dataset.page;
//   main_page.classList.remove("paginator_active");
//   main_page = document.getElementById(id);
//   main_page.classList.add("paginator_active");

//   var j = 0;
//   for (var i = 0; i < div_num.length; i++) {
//     var data_num = div_num[i].dataset.num;
//     if (data_num <= data_page || data_num >= data_page)
//       div_num[i].style.display = "none";

//   }
//   for (var i = data_page; i < div_num.length; i++) {
//     if (j >= cnt) break;
//     div_num[i].style.display = "block";
//     j++;
//   }
// }

/*Adding nofollow for other links*/
var domainName = location.hostname;
$(".elementor-section-wrap a:not([href*='" + domainName + "'])").attr("rel", "noopener nofollow");

$(document).animateScroll();

// var youtube_api = false;

$(document).ready(function() {
    // if (youtube_api === false) {
    //     setTimeout(function () { onYouTubeIframeAPIReady(); }, 1000);
    // }

    // function onYouTubeIframeAPIReady() {
    //     youtube_api = true;
    //     if ($('#main-video').length) {
    //         var vid1 = new YT.Player($('#main-video')[0]);
    //         console.log($('#main-video').parent().find('.yt_over').length);
    //         $('#main-video').parent().find('.yt_over').click(function () {
    //             if (vid1.getPlayerState() === YT.PlayerState.PLAYING) {
    //                 vid1.pauseVideo();
    //             } else {
    //                 if ($('#main-video2').length) {
    //                     jQuery('#main-video2')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    //                 }
    //                 vid1.playVideo();
    //             }
    //         });
    //         $('#unmuteBtn,#unmuteTxt').click(function (e) {
    //             vid1.unMute();
    //             $(this).parent().hide(1000);
    //             e.preventDefault();
    //         });
    //     }

    //     if ($('#main-video2').length) {
    //         var vid2 = new YT.Player($('#main-video2')[0]);
    //         console.log($('#main-video2').parent().find('.yt_over').length);
    //         $('#main-video2').parent().find('.yt_over').click(function () {
    //             if (vid2.getPlayerState() === YT.PlayerState.PLAYING) {
    //                 vid2.pauseVideo();
    //             } else {
    //                 vid2.playVideo();
    //                 jQuery('#main-video')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    //             }
    //         });
    //     }

    //     if ($('#reg-video1').length) {
    //         var vid3 = new YT.Player($('#reg-video1')[0]);
    //         console.log($('#reg-video1').parent().find('.yt_over').length);
    //         $('#reg-video1').parent().find('.yt_over').click(function () {
    //             $('.yt_over').css('background-image', 'url()');
    //             if (vid3.getPlayerState() === YT.PlayerState.PLAYING) {
    //                 vid3.pauseVideo();
    //             } else {
    //                 vid3.playVideo();
    //             }
    //         });
    //     }

    //     if ($('#reg-video2').length) {
    //         var vid4 = new YT.Player($('#reg-video2')[0]);
    //         console.log($('#reg-video2').parent().find('.yt_over').length);
    //         $('#reg-video2').parent().find('.yt_over').click(function () {
    //             $('.yt_over').css('background-image', 'url()');
    //             if (vid4.getPlayerState() === YT.PlayerState.PLAYING) {
    //                 vid4.pauseVideo();
    //             } else {
    //                 vid4.playVideo();
    //             }
    //         });
    //     }
    // }
});

$('[data-animate-scroll]').parent().css('overflow', 'hidden');

$(document).ready(function() {

    var today = 4113419;
    var ever = 2139021984;

    setInterval(function() {
        var inc1 = getRandom(0, 78000);
        var inc2 = getRandom(0, 78000);
        today = today + inc1;
        ever = ever + inc2;
        $('.today .m').text('$' + ((today / 100).toFixed(2)));
        $('.ever .m').text('$' + ((ever / 100).toFixed(2)));

    }, 3000);

    $('.posts').not('.slick-initialized').slick({
        infinite: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: false
    });

    $('.users').slick({
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });

    $('.video-review').click(function() {
        $('#VideoModal iframe').attr('src', $(this).data("url"));
        $('#VideoModal').modal('show');
    });

    $('#VideoModal').on('hidden.bs.modal', function() {
        $('#VideoModal iframe').attr('src', '');
    })

    $(".nav span").click(function() {
        var selector = $(this).data("scroll");
        scrollTo(selector);
    });

    $(".scroll").click(function() {
        var selector = $(this).data("scroll");
        scrollTo(selector);
    });

    $(".user").click(function() {
        var selector = $(this).data("section");
        var selector = '#' + selector;
        $('.user').removeClass('active');
        $(this).addClass('active');
        $('.user-info').css('display', 'none');
        $(selector).css('display', 'block');


    });

    $('.question').click(function() {
        if ($(this).hasClass('collapsed')) {
            $('.collapse').removeClass('in');
        }

        $(".question").not(this).removeClass('selected');
        $(this).toggleClass('selected');
    });


    setTimeout(function() {
        equalHeights('.review');
    }, 1000);

});


$(window).on('resize', function() {
    equalHeights('.review');
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function scrollTo(selector) {
    selector = '#' + selector;
    padding = 60;
    if (selector == "#main") { padding = 70; }
    $('html, body').animate({
        scrollTop: $(selector).offset().top - padding
    }, 1000);
}


function equalHeights(selector) {
    $(selector).height('auto');
    var biggestHeight = 0;
    $(selector).each(function() {
        if ($(this).height() > biggestHeight) {
            biggestHeight = $(this).height();
        }
    });
    $(selector).height(biggestHeight);
}

$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();

    if (scroll > 70) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }

});
$(document).ready(function () {
    'use strict';
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    if ($('iframe').hasClass('video-iframe')){
        $('iframe').wrap('<div class="wrap-iframe"></div>')
            .after('  <div class="unmute-wrapper bgc-dark">\n' +
            '                                                <div class="unmute d-f">\n' +
            '                                                    <div id="unmute-button" class="button-img xl"\n' +
            '                                                         style="background-image: url(/turn-sound/png/bx-volume-full.png);"\n' +
            '                                                    ></div>\n' +
            '                                                    <span style="font-size: 12px">TURN ON THE SOUND!</span>\n' +
            '                                                </div>\n' +
            '                                                <div class="player-menu d-f none">\n' +
            '                                                    <div id="mute-button" class="button-img"\n' +
            '                                                         style="background-image: url(/turn-sound/png/bx-volume-mute.png);"\n' +
            '                                                    ></div>\n' +
            '                                                    <div id="stop-button" class="button-img"\n' +
            '                                                         style="background-image: url(/turn-sound/png/bx-pause-circle.png);"\n' +
            '                                                    ></div>\n' +
            '                                                    <div id="play-button" class="button-img"\n' +
            '                                                         style="background-image: url(/turn-sound/png/bx-play-circle.png);"\n' +
            '                                                    ></div>\n' +
            '                                                </div>\n' +
            '                                            </div>');


    }


    $('#stop-button').on('click', function () {
        player.pause()
    })
    $('#play-button').on('click', function () {
        player.play()
    })
    $('#mute-button').on('click', function () {
        player.setMuted(true)
        $('.unmute').removeClass('none')
        $('.player-menu').addClass('none')
        $('.unmute-wrapper').addClass('bgc-dark')
    })
    $('#unmute-button').on('click', function () {
        player.setMuted(false)
        player.play()
        $('.unmute').addClass('none')
        $('.player-menu').removeClass('none')
        $('.unmute-wrapper').removeClass('bgc-dark')
    })
})

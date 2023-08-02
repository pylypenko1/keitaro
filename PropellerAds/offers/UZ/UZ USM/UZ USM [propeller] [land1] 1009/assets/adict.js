$(document).ready(function () {

    $('.video-insert').each(function () {
        let vid = $(this).attr('data-video');
        let video = $('<video/>');
        let poster = $(this).attr('data-poster');
        video.attr('src', vid);
        video.attr('playsinline', true);
        video.attr('controls', true);
        video.attr('preload', 'none');
        video.attr('allowfullscreen', 'true');
        poster ? video.attr('poster', poster) : '';
        video.css({
            width: '100%',
            height: '100%'
        });
        $(this).append(video);
        let playBtn = $('<div/>');
        playBtn.addClass('play-btn');
        $(this).append(playBtn);
    })

    let playBtns = document.querySelectorAll('.play-btn');

    for (var i = 0; i < playBtns.length; i++) {
        playBtns[i].addEventListener('click', function () {
            let videoEl = this.parentNode.querySelector('video');
            if (videoEl.paused) {
                videoEl.play();
                this.parentNode.classList.add('play')
            } else {
                videoEl.pause();
                this.parentNode.classList.remove('play')
            }
        })
    }

})


if ($('#youtube-insert').length) {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-insert', {
            height: '360',
            width: '640',
            videoId: $('#youtube-insert').attr('data-video'),
            events: {
                'onReady': onPlayerReady,
            },
            playerVars: {
                controls: 0,
                loop: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0
            }
        });
    }

    function onPlayerReady(event) {
        $('.over').click(function () {
            console.log(player, player.getPlayerState());
            if (player.getPlayerState() != 1) {
                player.playVideo();
            } else {
                player.pauseVideo();

            }
        })
    }
}
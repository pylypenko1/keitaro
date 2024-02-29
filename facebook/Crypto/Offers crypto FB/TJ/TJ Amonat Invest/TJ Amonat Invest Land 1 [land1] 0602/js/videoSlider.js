// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

var player1;
var player2;
var player3;
var player4;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '220',
    width: '100%',
    controls: 0,
    origin: 'http://localhost:8888',
    videoId: '1Y1lox7aTpE',
    playerVars: { 'autoplay': 1, 'controls': 0 },
  });

  player1 = new YT.Player('slider-video1', {
    height: '500',
    width: '100%',
    controls: 0,
    videoId: '7_0-7JlslzA',
    origin: 'http://localhost:8888'
  });

  player2 = new YT.Player('slider-video2', {
    height: '500',
    width: '100%',
    controls: 0,
    videoId: '80KhsOSica0',
    origin: 'http://localhost:8888'
  });

  player3 = new YT.Player('slider-video3', {
    height: '500',
    width: '100%',
    controls: 0,
    videoId: 'Bzz9ik6zkQg',
    origin: 'http://localhost:8888'
  });

  player4 = new YT.Player('slider-video4', {
    height: '500',
    width: '100%',
    controls: 0,
    videoId: 'MJOoK_fTd8E',
    origin: 'http://localhost:8888',
    events: {
      'onReady': onPlayerReadySlider,
    }
    
  });
}



let once = true;

// 4. The API will call this function when the video player is ready.
function onPlayerReadySlider(event) {

  if(once){
    $('.sliderMain').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });

    
    
    $('.sliderMain').on('afterChange', function(event, slick, currentSlide){
      player1.stopVideo();
      player2.stopVideo();
      player3.stopVideo();
      player4.stopVideo();
      if (currentSlide == 0) {
        $('.sliderMain').slick('slickPause');
        player1.playVideo();
      }
      if (currentSlide == 1) {
        $('.sliderMain').slick('slickPause');
        player2.playVideo();
      }
      if (currentSlide == 2) {
        $('.sliderMain').slick('slickPause');
        player3.playVideo();
      }
      if (currentSlide == 3) {
        $('.sliderMain').slick('slickPause');
        player4.playVideo();
      }
    });
    // event.target.playVideo();
    once = false;
  }
  
  
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


$(document).ready(function(){
  $('.next-slick-btn').on('click', function() {
    $('.sliderMain').slick('slickNext');
  });

  $('.prev-slick-btn').on('click', function() {
    $('.sliderMain').slick('slickPrev');
  });
});
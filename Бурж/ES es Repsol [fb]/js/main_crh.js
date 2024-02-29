$(document).ready(function(){
	console.log("test")
	  $(".cookienator .cerrar").css("cursor","pointer");
	  $(".cookienator").click(function(){
	    $(".cookienator").slideToggle();
	  });

	  $('.info').mouseover(function(){
		console.log("evento!!")
	  	$('.vsg-tooltip-standard ').css('visibility','visible')
	  })
	  $('.info').mouseout(function(){
	  	$('.vsg-tooltip-standard ').css('visibility','hidden')
	  })


	  $(window).scroll(function(){
		  var scroll = $(window).scrollTop();

		  if (scroll >= 80){
		  	$('header').addClass('fixed');
		  	$('#callHeader').removeClass('hidden');
		  }else {
		  	$('header').removeClass('fixed');
		  	$('#callHeader').addClass('hidden');
			}
		});

	   var cookieValue = 0;


	  $("#OpenGurrumino").click(function() {
	  	$('.modal-open').css('padding-right','0');
	  });

	  setTimeout(function(){
		var links=document.getElementsByClassName('drp-phone');
		// var phone=(links[0].href).substring(4);

	  $("html").click(function() {
	  	if(cookieValue == 0){
	  		
	   		cookieValue = 1;
	  	}
	  });

	  $(window).scroll(function() {
	  	if(cookieValue == 0){
	  		
	  		cookieValue = 1;
	  	}

	  });

	  $(window).bind('touchmove', function(e) {
	  	if(cookieValue == 0){
	  		
 		cookieValue = 1;
	  	}
	  });

	  }, 2500);
});



$(function(){

              // Stop and pause
              setInterval(function(){

              	$(".waker").toggleClass("ringing");


              }, 2000);

              // Movement
              setInterval(function(){

              	$(".waker.ringing").toggleClass("rotate");


              }, 100);


          });


setInterval(function(){

	$(".view").toggleClass("shake");
	$(".loading-clock").toggleClass("ticking");

}, 1000);


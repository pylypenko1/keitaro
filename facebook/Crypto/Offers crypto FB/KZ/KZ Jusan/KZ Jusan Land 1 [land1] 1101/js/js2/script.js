// form
// var phoneInput = document.querySelector('.ji-form__input')
// phoneInput.addEventListener('keydown', function(event) {
//    if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
//     var mask = '+7 (111) 111-11-11'; // Задаем маску
 
//     if (/[0-9\+\ \-\(\)]/.test(event.key)) {
//         // Здесь начинаем сравнивать this.value и mask
//         // к примеру опять же
//         var currentString = this.value;
//         var currentLength = currentString.length;
//         if (/[0-9]/.test(event.key)) {
//             if (mask[currentLength] == '1') {
//                 this.value = currentString + event.key;
//             } else {
//                 for (var i=currentLength; i<mask.length; i++) {
//                 if (mask[i] == '1') {
//                     this.value = currentString + event.key;
//                     break;
//                 }
//                 currentString += mask[i];
//                 }
//             }
//         }
//     } 
// });

/*!
 * GRT Responsive Menu - jQuery Plugin
*/
// Create a function for mobile version
(function( $ ){
	$.fn.grtmobile = function () {
		$('.grt-mobile-button').on('click', function(){
			$(this).toggleClass("grt-mobile-button-open");
			$("ul.grt-menu").toggleClass("open-grt-menu ");
			$("html, body").toggleClass("body-overflow");
		});
        $("ul.grt-menu a").on("click", function () {
            $(".grt-menu").removeClass("open-grt-menu");
			$("html, body").removeClass("body-overflow");
            $(".grt-mobile-button").removeClass("grt-mobile-button-open");
          });
	}
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();

// // Add fixed class on scroll after 60px
// $(window).scroll(function(e){
//    if ($(this).scrollTop() > 90){
//        $('header').addClass('scrolled');
//    } else {
//        $('header').removeClass('scrolled');
//    }
// });
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});


// Add fixed class on scroll after 60px
$(window).scroll(function(e){
    if ($(this).scrollTop() > 60){
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
 });
 
// nav.find('a').on('click', function () {
//   var $el = $(this)
//     , id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);
  
//   return false;
// });

$('.ji-more-btn').click(function(){
    $(this).text(function(i,old){
        return old == 'Скрыть' ? 'Еще вопросы' : 'Скрыть';
    });
});


var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 10,
loop: false,
autoplay:false,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
breakpoints: {
    640: {
    slidesPerView: 2,
    spaceBetween: 0,
    },
    768: {
    slidesPerView: 3,
    spaceBetween: 0,
    },
    1024: {
    slidesPerView: 4,
    spaceBetween: 0,
    },
},
});
var swiper2 = new Swiper(".mySwiper2", {
slidesPerView: 2,
spaceBetween: 10,
loop: true,
autoplay: {
    delay: 3500,
    disableOnInteraction: false,
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
breakpoints: {
    640: {
    slidesPerView: 2,
    spaceBetween: 0,
    },
    768: {
    slidesPerView: 3,
    spaceBetween: 0,
    },
    1024: {
    slidesPerView: 5,
    spaceBetween: 0,
    },
},
});
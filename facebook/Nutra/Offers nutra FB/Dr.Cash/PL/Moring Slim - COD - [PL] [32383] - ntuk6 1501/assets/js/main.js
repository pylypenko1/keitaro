$(function () {
    
   var wheel = document.querySelector('.wheel-img');
   var resultWrapper = document.querySelector('.spin-result-wrapper');
   $('.cursor-text').click(function () {
      $('.cursor-text').css('pointer-events', 'none');
      if (wheel.classList.contains('rotated')) {
         resultWrapper.style.display = "block";
      } else {
         wheel.classList.add('super-rotation');
         setTimeout(function () {
            resultWrapper.style.display = "block";
         }, 8000);
         setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.form').slideDown();
         }, 10000);
         wheel.classList.add('rotated');
      }
   });

   $('.pop-up-button').click(function (e) {
      e.preventDefault();
      $('.spin-result-wrapper').fadeOut();
      var top = $('#toform').offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 800);
   });

   $(function () {
      $('a').not('#cert, #link_offer, .pop-up-button, .footer a').click(function () { // ".scrollto" - class on links
         $("html, body").animate({
            scrollTop: $('#toform').offset().top // "#order_form0" block where animation scrolls
         }, 800);
      });
   });

});
// $('.flag-icon').css("background-image", `url(${RAND_URL})`);

// $.getScript(absroot+"/js/trades1.js", function () {});

jQuery(window).on('load', function () {
  $('#hotspot-img').hotSpot();

  $('#gotoTop').click(function () {
    $('body,html').animate({scrollTop: 0}, 500);
  });
});

// ===== Scroll to Top ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
    $('#gotoTop').fadeIn(200);    // Fade in the arrow
  } else {
    $('#gotoTop').fadeOut(200);   // Else fade out the arrow
  }
});

$('a[data-scrollto^="#section-sign-up"], a[data-scrollto^="#bottom-form-div"]').click(function (event) {
  var current_id = $(this).attr("data-scrollto");
  event.preventDefault();
  $('html, body').animate({scrollTop: $(current_id).offset().top}, 1000);
});
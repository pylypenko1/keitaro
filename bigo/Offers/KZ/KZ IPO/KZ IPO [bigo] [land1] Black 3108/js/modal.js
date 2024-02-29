$(document).on("ready", function () {

  $(".modal-form").each(function () {
      $(this).wrap('<div class="overlay"></div>')
  });

  $(".close-modal").on('click', function (e) {
      e.preventDefault();

      target = $(this)

      overlay = target.parents(".overlay")

      if (target.parents(".overlay").length) {
          overlay.find(".modal-form").removeClass("open");
          setTimeout(function () {
              overlay.removeClass("open");
          }, 350);
      }

  });

  $(document).on('click', function (e) {
      var target = $(e.target);

      if ($(target).hasClass("overlay")) {
          $(target).find(".modal-form").each(function () {
              $(this).removeClass("open");
          });
          setTimeout(function () {
              $(target).removeClass("open");
          }, 350);
      }

  });
  
});
$(".modal-form_f").each(function () {
  $(this).wrap('<div class="overlay_form"></div>');
});

$(".close-modal_f").on("click", function (e) {
  e.preventDefault();

  target = $(this);

  overlay = target.parents(".overlay_form");

  if (target.parents(".overlay_form").length) {
    overlay.find(".modal-form_f").removeClass("open");
    setTimeout(function () {
      overlay.removeClass("open");
    }, 350);
  }
});

$(document).on("click", function (e) {
  var target = $(e.target);
  if ($(target).hasClass("overlay")) {
    $(target)
      .find(".modal-form_f")
      .each(function () {
        $(this).removeClass("open");
      });
    setTimeout(function () {
      $(target).removeClass("open");
    }, 350);
  }
});

function closeModal(modal) {
  modal.parents(".overlay_form").removeClass("open");

  setTimeout(function () {
    modal.removeClass("open");
  }, 350);
}

function openModal(modal) {
  modal.parents(".overlay_form").addClass("open");

  setTimeout(function () {
    modal.addClass("open");
  }, 350);
}

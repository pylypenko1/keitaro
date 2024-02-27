document.addEventListener("DOMContentLoaded", () => {
  $(".faqToggle").on("click", function () {
    $(this).removeClass("collapsed");
    $(".faqToggle").not(this).addClass("collapsed");
    $(this).siblings(".collapse").slideDown();
    $(".collapse").not($(this).siblings(".collapse")).slideUp();
  });

  const btns = document.querySelectorAll('.scroll-to-form');

  const scrollToElem = (elem) => {
    document.querySelector(elem).scrollIntoView({behavior:"smooth"});
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      scrollToElem('#main-form');
    })
  })

  document.querySelector(".year").innerHTML = new Date().getFullYear();
});

const scrollToForm = () => {
    document.querySelector('#formwork').scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}

$(".history-item-title").on("click", function () {
    $(this).closest(".history-item").toggleClass("active");
});

$(".faq-item-title").on("click", function () {
    $(this).closest(".faq-item").toggleClass("active");
});

$(".header-hamburger").on("click", function () {
    $(this).toggleClass("active"),
        $(this).closest(".header").find(".header-menu").slideToggle(300);
})

$(".header-menu-item").on("click", () => {
    $(".header-hamburger").toggleClass("active"),
        $(".header-menu").slideToggle(300);
})


let yearOutput = document.querySelectorAll('.year');

yearOutput.forEach(element => {
    element.innerText = new Date().getFullYear();
});
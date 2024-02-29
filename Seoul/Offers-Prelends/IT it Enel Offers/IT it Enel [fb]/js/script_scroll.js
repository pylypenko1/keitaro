const domain = document.querySelector('.domain');
domain.textContent = window.location.hostname;

$("[data-scroll]").on("click", function (e) {
    e.preventDefault();
    const $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top - 150;
    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});

// const tl = gsap.timeline({defaults: {duration: .7}});
// tl.from('.navbar', {y: -100})
//     .from('.title.shading', {opacity: 0})
//     .from('.intro .copy', {opacity: 0})
//     .from('.video', {opacity: 0, x: -100})
//     .from('.form-container', {opacity: 0, x: 100})

ScrollTrigger.create({
    trigger: '.stocks',
    start: 'top center',
    onEnter: () => {
        counter()
    },
})

function counter() {
    let time = 1,
        cc = 1;
    $('.calc__item-num-count').each(function () {
        let i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function () {
                if (i <= num) {
                    that.html(i + '00');
                } else {
                    cc = cc + 2;
                    clearInterval(int)
                }
                i++

            }, step)
    })
}

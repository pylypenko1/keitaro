let count = document.querySelector('#count')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let xxx = setInterval(() => {
    --count.textContent
    if (count.textContent < 2) clearInterval(xxx)
}, getRandomInt(3000, 7000))

// -----------
$('.scroll_top').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('#register__form').offset().top
    }, 300);
});

const spanYear = document.querySelector('.current__year');
let date = new Date();

spanYear.innerHTML = date.getFullYear();

// COUNTDOWN                    
document.getElementById('timer').innerHTML = 06 + ":" + 44;
startTimer();

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
        m = m - 1
    }
    if (m < 0) {
        return
    }
    document.getElementById('timer').innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec
    };
    // add zero in front of numbers < 10                               
    if (sec < 0) {
        sec = "59"
    };
    return sec;
}

// STICKY WIDGET                        
const stickyElement = document.querySelector(".countdown-widget-wrapper");
let stop = stickyElement.offsetTop;
let docBody = document.documentElement || document.body.parentNode || document.body;
let hasOffset = window.pageYOffset !== undefined;
let scrollTop;
window.addEventListener('scroll', (e) => {
    scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;
    scrollTop >= stop ? stickyElement.classList.add('sticky') : stickyElement.classList.remove('sticky');
})

// PLACES LEFT                  
const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let placesLeft = randomInt(4, 8);
document.querySelectorAll('.places-left').forEach((el) => {
    el.innerText = placesLeft;
})

// NAVIGATION                   
const scrollToElem = (elem) => {
    document.querySelector(elem).scrollIntoView({
        behavior: "smooth"
    });
}

// REVIEWS CAROUSEL                     
var splide = new Splide('.splide', {
    perPage: 1,
    type: 'loop',
    autoplay: 'pause',
    perMove: 1,
});
splide.mount();

// YEAR                 
document.querySelectorAll('.year').forEach((el) => {
    el.innerText = new Date().getFullYear();
})
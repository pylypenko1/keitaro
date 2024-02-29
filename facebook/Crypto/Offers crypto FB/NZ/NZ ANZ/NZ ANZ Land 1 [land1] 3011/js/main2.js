const randMane = document.getElementById('rand_man'),
    randPlaces = document.getElementById('rand_places'),
    customDate = document.querySelectorAll('.customDate');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


const randomManeInterval = setInterval(() => {
    randMane.innerHTML = getRandomInt(90, 960);

}, 8000)


let count = 27;

const timer = (count) => {
    randPlaces.innerHTML = count;

}

const intervalTimer = setInterval(function () {
    count--
    timer(count)
    if (count <= 22) {
        clearInterval(intervalTimer)
        const int = setInterval(() => {
            count--
            timer(count);
            if (count === 0) {
                clearInterval(int)
                timer(0)
            }
        }, 30000);
    }
}, 10000);


const newDate = new Date()

const formatDate = () => {
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();

    const formatMonth = month < 10 ? `0${month}` : month;
    const formatdate = date < 10 ? `0${date}` : date;


    return `${year}/${formatMonth}/${formatdate}`

}

customDate.forEach(item => {
    item.innerHTML = formatDate()
})




// next js file (js slider)
$('.partners-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    draggable: false,
    infinite: true,
    speed: 8000,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    swipe: false,
    pauseOnHover: false
});


// next js file (random number)
start = new Date(2001, 0, 1)
end = new Date()

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

date = new Date();
timezone = new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1]
y = date.getFullYear();
m = date.getMonth() + 1;
d = date.getDate();

document.getElementById("date").innerHTML = y + "/" + m + "/" + d;

function showTime() {
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();

// next js file (js range slider)
$(function () {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 300,
        max: 20000,
        from: 300,
        max_postfix: "",
        postfix: " $",
        grid: true,
        onStart: function (data) {
            $("#calcResult").text(Math.round((data.from * 0.4) + data.from) + ' $');
        },
        onChange: function (data) {
            $("#calcResult").text(Math.round((data.from * 0.4) + data.from) + ' $');
        },
    });
});
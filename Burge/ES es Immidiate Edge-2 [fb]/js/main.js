const cout = document.getElementById('cout');
let coutdown = 71;


const cId = setInterval(() => {
    coutdown--
    if (coutdown === 1) {
        clearInterval(cId);
    }
    cout.innerHTML = coutdown;
}, 5000);


const dateResul = document.querySelectorAll('.dateResul');
const dateResulO = document.querySelector('.dateResulO');

dateResul.forEach(element => {

});

let date = new Date();
date.setDate(date.getDate());
var x = new Date()
x.setHours(x.getHours() - 1);
let nsec2 = x.getSeconds();
let nhour2 = x.getHours();
let nmin = date.getMinutes();
if (nmin <= 9)
    nmin = "0" + nmin;


dateResul.forEach(element => {
    element.innerHTML = date.toISOString().split('T')[0] + ' ' + nhour2 + ":" + nmin + ":" + nsec2;
});

dateResulO.innerHTML = date.toISOString().split('T')[0]


setInterval(() => {
    let date = new Date();
    date.setDate(date.getDate());
    var x = new Date()
    x.setHours(x.getHours() - 1);
    let nsec2 = x.getSeconds();
    let nhour2 = x.getHours();
    let nmin = date.getMinutes();
    if (nmin <= 9)
        nmin = "0" + nmin;
    dateResul.forEach(element => {
        element.innerHTML = date.toISOString().split('T')[0] + ' ' + nhour2 + ":" + nmin + ":" + nsec2;
    });
}, 1000);



$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
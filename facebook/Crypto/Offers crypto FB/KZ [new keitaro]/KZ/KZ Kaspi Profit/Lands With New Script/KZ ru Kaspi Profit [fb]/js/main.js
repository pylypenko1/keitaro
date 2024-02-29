const foo = async () => {
  const response = await $.ajax({
    url: 'https://get.geojs.io/v1/ip/geo.js',
    dataType: 'jsonp',
    jsonpCallback: 'geoip',
  });

  return response.ip;
};

setInterval(function () {
  let number = getRandomArbitrary(160, 299);
  $('.register-now__count-number').html(number);
}, 5000);

$(document).ready(function () {
  let number1 = Math.floor(Math.random() * (320 - 75) + 75);
  let number2 = Math.floor(Math.random() * (54 - 22) + 22);

  count1 = $('#register-count1');
  count2 = $('#register-count2');

  count1.html(number1);
  count2.html(number2);

  let flag1 = 1;
  let flag2 = -1;

  setInterval(function () {
    let change = Math.floor(Math.random() * (13 - 1) + 1);
    change *= flag1;
    number1 += change;
    flag1 *= -1;
    if (number1 >= 450) {
      number1 -= 60;
    } else if (number1 <= 194) {
      number1 += 60;
    } else {
      count1.html(number1);
    }
  }, 5000);

  setInterval(function () {
    let change = Math.floor(Math.random() * (7 - 1) + 1);
    change *= flag2;
    number2 += change;
    if (number2 >= 55) {
      number2 -= 1;
    } else if (number2 <= 10) {
      number2 += 1;
    } else {
      count2.html(number2);
    }
  }, 6000);
});

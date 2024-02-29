function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function moneyformat(amount, geo, float, format = 0) {
  var prefix = ' дин.';
  var postfix = '';
  if (format == 1) return amount.toFixed(float) + postfix + prefix;

  return amount.toFixed(float) + postfix + prefix;
}

var rand_profits_time;
var rand_users_time;

liveCountProfits();
liveCountUsers();

function liveCountProfits() {
  setTimeout(function () {
    rand_profits_time = Math.floor(Math.random() * 3000 + 1000);
    current_profits = $('#current-profits').attr('data-value');
    more_profits = Math.floor(Math.random() * 800 + 100);
    new_profits = current_profits * 1 + more_profits;
    $('#current-profits').attr('data-value', new_profits);
    new_profits = formatNumber(new_profits);
    $('.live-profits').html(new_profits);
    liveCountProfits();
  }, rand_profits_time);
}
function liveCountUsers() {
  setTimeout(function () {
    rand_users_time = Math.floor(Math.random() * 3000 + 1000);
    current_users = $('#current-users').attr('data-value');
    more_users = Math.floor(Math.random() * 5 + 1);
    new_users = current_users * 1 + more_users;
    $('#current-users').attr('data-value', new_users);
    new_users = formatNumber(new_users);
    $('.live-users').html(new_users);
    liveCountUsers();
  }, rand_users_time);
}

/////////////////////////////////////////////////////////////////////////////////

jQuery(window).on('load', function () {
  $('#hotspot-img').hotSpot();
});

/////////////////////////////////////////////////////////////////////////////////

var pricingCPU = 1,
  pricingRAM = 1,
  pricingStorage = 10,
  elementCPU = $('.range-slider-cpu'),
  elementRAM = $('.range-slider-ram'),
  elementStorage = $('.range-slider-storage');

var cpu_postfix = '';
var cusymbol = '&#8356;';
var prefix = (cpu_prefix = cusymbol);
$('.prefix').each(function (index) {
  $(this).html(prefix);
});

var ram_prefix = ' дин.';
elementCPU.ionRangeSlider({
  grid: false,
  // values: [
  //   150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050,
  //   1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850,
  //   1900, 1950, 2000, 2050, 2100, 2150, 2200, 2250, 2300, 2350, 2400, 2450, 2500, 2550, 2600, 2650,
  //   2700, 2750, 2800, 2850, 2900, 2950, 3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350, 3400, 3450,
  //   3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850, 3900, 3950, 4000, 4050, 4100, 4150, 4200, 4250,
  //   4300, 4350, 4400, 4450, 4500, 4550, 4600, 4650, 4700, 4750, 4800, 4850, 4900, 4950, 5000,
  // ],
  // prefix: ram_prefix,
  values: [
    16350, 21800, 27250, 32700, 38150, 43600, 49050, 54500, 59950, 65400, 70850, 76300, 81750,
    87200, 92650, 98100, 103550, 109000, 114450, 119900, 125350, 130800, 136250, 141700, 147150,
    152600, 158050, 163500, 168950, 174400, 179850, 185300, 190750, 196200, 201650, 207100, 212550,
    218000, 223450, 228900, 234350, 239800, 245250, 250700, 256150, 261600, 267050, 272500, 277950,
    283400, 288850, 294300, 299750, 305200, 310650, 316100, 321550, 327000, 332450, 337900, 343350,
    348800, 354250, 359700, 365150, 370600, 376050, 381500, 386950, 392400, 397850, 403300, 408750,
    414200, 419650, 425100, 430550, 436000, 441450, 446900, 452350, 457800, 463250, 468700, 474150,
    479600, 485050, 490500, 495950, 501400, 506850, 512300, 517750, 523200, 528650, 534100, 539550,
    545000,
  ],
  // postfix: cpu_postfix,
  postfix: ram_prefix,
  onStart: function (data) {
    pricingCPU = data.from_value;
    console.log(data);
  },
});

elementCPU.on('onStart change', function () {
  pricingCPU = $(this).prop('value');
  calculatePrice(pricingCPU, pricingRAM);
});
console.log(pricingCPU, pricingRAM);

var ram_postfix = ' дней';
elementRAM.ionRangeSlider({
  grid: false,
  step: 1,
  min: 1,
  from: 30,
  max: 180,
  postfix: ram_postfix,
  onStart: function (data) {
    pricingRAM = 30;
    // console.log(data);
  },
});

elementRAM.on('onStart change', function () {
  pricingRAM = $(this).prop('value');
  calculatePrice(pricingCPU, pricingRAM);
});

calculatePrice(pricingCPU, pricingRAM);

function calculatePrice(deposit, days) {
  // let pricingValue = Number(deposit) + (Number(days) * Number(deposit) * 0.1356);
  let pricingValue = Number(deposit) + Number(days) * Number(deposit) * 0.0556;
  jQuery('.cpu-value').html(pricingCPU);
  jQuery('.ram-value').html(pricingRAM);
  jQuery('.pricing-price').html(moneyformat(pricingValue, ' дин.'));
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function moneyformat(amount, geo, float, format = 0) {
    var prefix = '$';
    var postfix = "";
    if (format == 1)
        return prefix + (amount.toFixed(float)) + postfix;

    return prefix + amount.toFixed(float) + postfix;
}

var rand_profits_time;
var rand_users_time;

liveCountProfits();
liveCountUsers();

function liveCountProfits() {
    setTimeout(function () {
        rand_profits_time = Math.floor((Math.random() * 3000) + 1000);
        current_profits = $('#current-profits').attr('data-value');
        more_profits = Math.floor((Math.random() * 800) + 100);
        new_profits = current_profits * 1 + more_profits;
        $('#current-profits').attr('data-value', new_profits);
        new_profits = formatNumber(new_profits);
        $('.live-profits').html(new_profits);
        liveCountProfits();

    }, rand_profits_time);

}
function liveCountUsers() {

    setTimeout(function () {
        rand_users_time = Math.floor((Math.random() * 3000) + 1000);
        current_users = $('#current-users').attr('data-value');
        more_users = Math.floor((Math.random() * 5) + 1);
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
    elementCPU = $(".range-slider-cpu"),
    elementRAM = $(".range-slider-ram"),
    elementStorage = $(".range-slider-storage");

var cpu_postfix = "";
var cusymbol = "&#8356;";
var prefix = cpu_prefix = cusymbol;
$(".prefix").each(function (index) {
    $(this).html(prefix);
});

elementCPU.ionRangeSlider({
    grid: false,
    values: [150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000, 2050, 2100, 2150, 2200, 2250, 2300, 2350, 2400, 2450, 2500, 2550, 2600, 2650, 2700, 2750, 2800, 2850, 2900, 2950, 3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850, 3900, 3950, 4000, 4050, 4100, 4150, 4200, 4250, 4300, 4350, 4400, 4450, 4500, 4550, 4600, 4650, 4700, 4750, 4800, 4850, 4900, 4950, 5000],
    prefix: '$',
    postfix: cpu_postfix,
    onStart: function (data) {
        pricingCPU = data.from_value;
        // console.log(data);
    }
});

elementCPU.on('onStart change', function () {
    pricingCPU = $(this).prop('value');
    calculatePrice(pricingCPU, pricingRAM);
});

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
    }
});

elementRAM.on('onStart change', function () {
    pricingRAM = $(this).prop('value');
    calculatePrice(pricingCPU, pricingRAM);
});

calculatePrice(pricingCPU, pricingRAM);

function calculatePrice(deposit, days) {
    let pricingValue = Number(deposit) + (Number(days) * Number(deposit) * 0.0756);
    // let pricingValue = Number(deposit) + (Number(days) * Number(deposit) * 0.1356);
    jQuery('.cpu-value').html(pricingCPU);
    jQuery('.ram-value').html(pricingRAM);
    jQuery('.pricing-price').html(moneyformat(pricingValue, "$", 0, 1));

}
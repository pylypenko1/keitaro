$('.menuBtn').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('menuToggled');
    $('.menuContainer').toggleClass('menuToggled');
});
var closeMenu = function () {
    $('.menuBtn').removeClass('menuToggled');
    $('.menuContainer').removeClass('menuToggled');
};
$('.menuContainer li a, .menuClose').on('click', function () {
    closeMenu();
});
$(document).on('click', function (event) {
    $target = $(event.target);
    if (!$target.closest('.menuContainer').length && !$target.closest('.menuBtn').length && $('.menuContainer').hasClass('menuToggled')) {
        closeMenu();
    }
});
$(document).on('keyup', function (event) {
    if (event.keyCode == 27 && $('.menuContainer').hasClass('menuToggled')) {
        closeMenu();
    }
});
$('a[href^="#"]').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 750, function () {
            window.location.hash = hash;
        });
    }
});

document.addEventListener("DOMContentLoaded", function (event) {

    var divs = document.querySelectorAll('.phone'), i;
    for (i = 0; i < divs.length; ++i) {
        window.intlTelInput(divs[i], {
            utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.min.js',
            nationalMode: true,
            defaultCountry: 'auto',
            separateDialCode: true,
            initialCountry: "auto",
            geoIpLookup: function (callback) {
                $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=8b89ec03c3214360aa2696a3cad1e0f7&ip=', function (data) {
                    JSON.stringify(data, null, 2);
                    country = data.country_code2;
                    calling_code = data.calling_code;
                }).always(function (resp) {
                    var countryCode = (resp && resp.country_code2) ? resp.country_code2 : "us";
                    callback(countryCode);
                });
            }
        });
    }



    $('form input').on("focus blur select", function () {
        if ($(this).hasClass('error') === true) {
            $('form label.error').hide();
            $(this).parent().find("label.error").show();
        }
    })

    function forceNumeric() {
        var $input = $(this);
        $input.val($input.val().replace(/[^\d -]+/g, ''));
    }

    $('.phone').on('input', forceNumeric);
    const isChromium = Boolean(window.chrome);
    const mailInputs = document.getElementsByName("email");
    mailInputs.forEach(mailInput => {
        if (isChromium) {
            mailInput.addEventListener('focus', function (e) {
                this.setAttribute('type', 'text');
                this.setAttribute('inputmode', 'email');
                this.setAttribute('autocomplete', 'email');
            });
            mailInput.addEventListener('blur', function (e) {
                this.setAttribute('type', 'email')
            });
        }
        mailInput.addEventListener('input', function (e) {
            let val = this.value.replaceAll(/[^/[\w-@.]/g, '');
            this.value = val;
        })
    });


})
document.querySelectorAll('.currentYear').forEach(function (el) {
    el.innerHTML = new Date().getFullYear()
})

$(".hover-modal").hover((function () {
    $(".popup_custom").show()
}
)),
    $(".close_button").click((function () {
        $(".popup_custom").hide()
    }
    ))

/////////////open modal without action on page
let timeout = 20000;
let lastActiveTimestamp = 0;
let userIsActive = false;

window.addEventListener('mousemove', active);
window.addEventListener('keypress', active);
window.addEventListener('click', active);
window.addEventListener('scroll', active);

setInterval(checkUserIsActive, 1000)
active();

function checkUserIsActive() {
    if (userIsActive && new Date().getTime() - lastActiveTimestamp > timeout) {

        $(".popup_custom").show()
        userIsActive = false;
    }
}

function active() {
    lastActiveTimestamp = new Date().getTime();
    if (!userIsActive) { userIsActive = true; }
}


//////////////////privacy policy//////////////
$('.privacyPolicy_modal_open').on('click', function () {
    $('#privacy_police').show();
    $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
    $('#privacy_police').hide();
    $('html').css('overflow', 'auto');
});
//////////////////terms//////////////
$('.terms_modal_open').on('click', function () {
    $('#terms').show();
    $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
    $('#terms').hide();
    $('html').css('overflow', 'auto');
});
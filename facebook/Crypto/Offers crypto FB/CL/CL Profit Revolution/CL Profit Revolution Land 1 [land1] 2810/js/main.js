const foo = async () => {

    const response = await $.ajax({
        url: "https://get.geojs.io/v1/ip/geo.js",
        dataType: "jsonp",
        jsonpCallback: "geoip",
    });

    return response;

}

// form 1
var input1 = document.querySelector("#phone1");
var phoneInput1 = intlTelInput(input1, {
    separateDialCode: true,
    utilsScript: "js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
            var countryCode = resp.country ? resp.country : "CL";
            $("#country").val(resp.countryCode);
            success(countryCode);
        });
    },
});

// form 
var input2 = document.querySelector("#phone2");
var phoneInput2 = intlTelInput(input2, {
    separateDialCode: true,
    utilsScript: "js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
            var countryCode = resp.country ? resp.country : "CL";
            $("#country").val(resp.countryCode);
            success(countryCode);
        });
    },
});

// form 1
var input3 = document.querySelector("#phone3");
var phoneInput3 = intlTelInput(input3, {
    separateDialCode: true,
    utilsScript: "js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
            var countryCode = resp.country ? resp.country : "CL";
            $("#country").val(resp.countryCode);
            success(countryCode);
        });
    },
});

const formValidate1 = $("#myform1").validate({
    rules: {
        phone1: {
            required: true,
            validNumber: {
                object: phoneInput1,
            },
        },
        first_name: {
            required: true,
            alphanumeric: true,
        },
        last_name: {
            required: true,
            alphanumeric: true,
        },
        email: {
            emailExt: true,
            required: true,
        },
    },
    messages: {
        phone1: {
            required: "Este campo es obligatorio",
        },
        first_name: {
            required: "Este campo es obligatorio",
        },
        last_name: {
            required: "Este campo es obligatorio",
        },
        email: {
            email: "Por favor, introduzca el correo electrónico correcto",
            required: "Este campo es obligatorio",
        },
    },
});

const formValidate2 = $("#myform2").validate({
    rules: {
        phone2: {
            required: true,
            validNumber: {
                object: phoneInput2,
            },
        },
        first_name: {
            required: true,
            alphanumeric: true,
        },
        last_name: {
            required: true,
            alphanumeric: true,
        },
        email: {
            emailExt: true,
            required: true,
        },
    },
    messages: {
        phone2: {
            required: "Este campo es obligatorio",
        },
        first_name: {
            required: "Este campo es obligatorio",
        },
        last_name: {
            required: "Este campo es obligatorio",
        },
        email: {
            email: "Por favor, introduzca el correo electrónico correcto",
            required: "Este campo es obligatorio",
        },
    },
});

const formValidate3 = $("#myform3").validate({
    rules: {
        phone3: {
            required: true,
            validNumber: {
                object: phoneInput3,
            },
        },
        first_name: {
            required: true,
            alphanumeric: true,
        },
        last_name: {
            required: true,
            alphanumeric: true,
        },
        email: {
            emailExt: true,
            required: true,
        },
    },
    messages: {
        phone3: {
            required: "Este campo es obligatorio",
        },
        first_name: {
            required: "Este campo es obligatorio",
        },
        last_name: {
            required: "Este campo es obligatorio",
        },
        email: {
            email: "Por favor, introduzca el correo electrónico correcto",
            required: "Este campo es obligatorio",
        },
    },
});

$(window).on("load", function () {
    setTimeout(function () {
        var mask = jQuery("#phone1").attr("placeholder").replace(/[0-9]/g, 9);
        $(document).ready(function () {
            jQuery("#phone1").mask(mask);
        });
        jQuery("#phone1").on("countrychange", function (e, countryData) {
            jQuery("#phone1").val("");
            var mask = $("#phone1").attr("placeholder").replace(/[0-9]/g, 9);
            jQuery("#phone1").mask(mask);
        });
    }, 1000);

    setTimeout(function () {
        var mask = jQuery("#phone2").attr("placeholder").replace(/[0-9]/g, 9);
        $(document).ready(function () {
            jQuery("#phone2").mask(mask);
        });
        jQuery("#phone2").on("countrychange", function (e, countryData) {
            jQuery("#phone2").val("");
            var mask = $("#phone2").attr("placeholder").replace(/[0-9]/g, 9);
            jQuery("#phone2").mask(mask);
        });
    }, 1000);

    setTimeout(function () {
        var mask = jQuery("#phone3").attr("placeholder").replace(/[0-9]/g, 9);
        $(document).ready(function () {
            jQuery("#phone3").mask(mask);
        });
        jQuery("#phone3").on("countrychange", function (e, countryData) {
            jQuery("#phone3").val("");
            var mask = $("#phone3").attr("placeholder").replace(/[0-9]/g, 9);
            jQuery("#phone3").mask(mask);
        });
    }, 1000);
});

$.validator.addMethod(
    "alphanumeric",
    function (value, element) {
        return this.optional(element) || /^[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ\s]+$/.test(value); //RU
    },
    "El nombre de usuario debe contener sólo letras"
);

$.validator.addMethod(
    "validNumber",
    function (value, element, params) {
        var obj = params.object;
        if (obj.isValidNumber()) {
            var num = obj.getNumber().replace("+", "");
            $(element)
                .closest("form")
                .find(".hidden-phone")
                .val("+" + num);
        }
        return obj.isValidNumber();
    },
    "¡Introduzca un número correcto!"
);


$.validator.addMethod(
    "emailExt",
    function (value, element, param) {
        return value.match(/^[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ0-9_\.%\+\-]+@[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ0-9\.\-]+\.[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ]{2,}$/);
    },
    'Por favor, introduzca el correo electrónico correcto'
);


$("#myform1").on("submit", function (e) {
    e.preventDefault();
    if ($("#myform1").valid()) {
        setDataForm($(e.currentTarget), phoneInput1, objUTM, arrPixelID);
    }
});

$("#myform2").on("submit", function (e) {
    e.preventDefault();
    if ($("#myform2").valid()) {
        setDataForm($(e.currentTarget), phoneInput2, objUTM, arrPixelID);
    }
});

$("#myform3").on("submit", function (e) {
    e.preventDefault();
    if ($("#myform3").valid()) {
        setDataForm($(e.currentTarget), phoneInput3, objUTM, arrPixelID);
    }
});

function setDataForm(form, phoneIti, objUTM, arrPixelID) {

    const dataLead = {
        first: form.serializeArray()[0].value,
        last: form.serializeArray()[1].value,
        email: form.serializeArray()[2].value,
        phone: phoneIti.getNumber().replace(/\D/g, ""),
        creo: objUTM.creo,
        buyer: objUTM.buyer,
        offer: objUTM.offer,
        target: objUTM.target
    }

    foo(dataLead, arrPixelID).then(result => {
        dataLead.country = result.country_code.toLowerCase();
        dataLead.ip = result.ip;
        submitForm(dataLead, arrPixelID);
    });

}
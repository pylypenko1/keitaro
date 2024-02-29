const foo = async () => {

    const response = await $.ajax({
        url: "https://get.geojs.io/v1/ip/geo.js",
        dataType: "jsonp",
        jsonpCallback: "geoip",
    });

    return response;

}

// main form
var input = document.querySelector("#phone1");
var phoneInput = intlTelInput(input, {
    separateDialCode: true,
    utilsScript: "js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
            var countryCode = resp.country ? resp.country : "DE";
            var countryCode = "DE";
            $("#country").val(resp.countryCode);
            success(countryCode);
        });
    },
});

// modal form
var input2 = document.querySelector("#phone2");
var phoneInput2 = intlTelInput(input2, {
    separateDialCode: true,
    utilsScript: "js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
            var countryCode = resp.country ? resp.country : "DE";
            var countryCode = "DE";
            $("#country").val(resp.countryCode);
            success(countryCode);
        });
    },
});


const formTopValidate = $("#formTop").validate({
    rules: {
        phone1: {
            required: true,
            validNumber: {
                object: phoneInput,
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
            required: "Dieses Feld ist obligatorisch",
        },
        first_name: {
            required: "Dieses Feld ist obligatorisch",
        },
        last_name: {
            required: "Dieses Feld ist obligatorisch",
        },
        email: {
            email: "Geben Sie eine gültige E-Mail Adresse ein",
            required: "Dieses Feld ist obligatorisch",
        },
    },
});

const form2Validate = $("#formTop2").validate({
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
            required: "Dieses Feld ist obligatorisch",
        },
        first_name: {
            required: "Dieses Feld ist obligatorisch",
        },
        last_name: {
            required: "Dieses Feld ist obligatorisch",
        },
        email: {
            email: "Geben Sie eine gültige E-Mail Adresse ein",
            required: "Dieses Feld ist obligatorisch",
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
});

$.validator.addMethod(
    "alphanumeric",
    function (value, element) {
        // return this.optional(element) || /^[a-zA-Zа-яА-ЯЁё\s]+$/.test(value);
        return this.optional(element) || /[a-zA-ZäöüßÄÖÜẞ]+/g.test(value);
    },
    "Ein Name kann nur Buchstaben enthalten"
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
    "Geben Sie die richtige Zahl ein"
);


$.validator.addMethod(
    "emailExt",
    function (value, element, param) {
        return value.match(/^[a-zA-ZäöüßÄÖÜẞ0-9_\.%\+\-]+@[a-zA-ZäöüßÄÖÜẞ0-9\.\-]+\.[a-zA-ZäöüßÄÖÜẞ]{2,}$/);
    },
    "Geben Sie eine gültige E-Mail Adresse ein"
);


$("#formTop").on("submit", function (e) {
    e.preventDefault();
    if ($("#formTop").valid()) {
        setDataForm($(e.currentTarget), phoneInput, objUTM, arrPixelID);
    }
});

$("#formTop2").on("submit", function (e) {
    e.preventDefault();
    if ($("#formTop2").valid()) {
        setDataForm($(e.currentTarget), phoneInput, objUTM, arrPixelID);
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
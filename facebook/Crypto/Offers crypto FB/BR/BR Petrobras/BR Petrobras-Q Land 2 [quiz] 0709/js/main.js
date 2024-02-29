const foo = async () => {

    const response = await $.ajax({
        url: "https://get.geojs.io/v1/ip/geo.js",
        dataType: "jsonp",
        jsonpCallback: "geoip",
    });

    return response.ip;

}

// main form
var input = document.querySelector("#phone1");
var phoneInput = intlTelInput(input, {
    separateDialCode: true,
    utilsScript: "js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
            var countryCode = resp.country ? resp.country : "BR";
            var countryCode = "BR";
            $("#country").val(resp.countryCode);
            success(countryCode);
        });
    },
});

const leadFormValidate = $("#leadform").validate({
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
        // politics: {
        //     required: true,
        //     alphanumeric: true,
        // }
    },
    messages: {
        phone1: {
            required: "Esta caixa de texto deve ser preenchida",
        },
        first_name: {
            required: "Esta caixa de texto deve ser preenchida",
        },
        last_name: {
            required: "Esta caixa de texto deve ser preenchida",
        },
        email: {
            email: "Digite um e-mail válido!",
            required: "Esta caixa de texto deve ser preenchida",
        },
        // politics: {
        //     required: "Esta caixa de texto deve ser preenchida",
        // }
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
});

$.validator.addMethod(
    "alphanumeric",
    function (value, element) {
        return this.optional(element) || /^[a-zA-ZáéíóúàâêôãõüçÁÉÍÓÚÀÂÊÔÃÕÜÇ\s]+$/.test(value); //RU
    },
    "O nome só pode conter letras!"
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
    "Digite o número correto!"
);


$.validator.addMethod(
    "emailExt",
    function (value, element, param) {
        return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
    },
    'Digite um e-mail válido!'
);


$("#leadform").submit(function (e) {
    e.preventDefault();

    if ($("#leadform").valid()) {
        setDataForm($(e.currentTarget), phoneInput, objUTM, arrPixelID);
    }
});

function setDataForm(form, phoneIti, objUTM, arrPixelID) {

    const dataLead = {
        first: form.serializeArray()[5].value,
        last: form.serializeArray()[6].value,
        email: form.serializeArray()[7].value,
        phone: phoneIti.getNumber().replace(/\D/g, ""),
        creo: objUTM.creo,
        buyer: objUTM.buyer,
        offer: objUTM.offer,
        target: objUTM.target,
        country: objUTM.country,
        quiz1: form.serializeArray()[0].value,
        quiz2: form.serializeArray()[1].value,
        quiz3: form.serializeArray()[2].value,
        quiz4: form.serializeArray()[3].value,
        quiz5: form.serializeArray()[4].value
    }

    foo(dataLead, arrPixelID).then(result => {
        dataLead.ip = result;
        submitForm(dataLead, arrPixelID);
    });
}
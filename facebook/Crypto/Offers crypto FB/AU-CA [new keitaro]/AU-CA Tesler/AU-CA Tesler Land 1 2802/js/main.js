const leadFormValidate = $("#leadform").validate({
    rules: {
        first_name: {
            required: true,
            alphanumeric: true,
        },
        email: {
            emailExt: true,
            required: true,
        },
    },
    messages: {
        first_name: {
            required: "This field is required",
        },
        email: {
            required: "This field is required",
        },
    },
});


$.validator.addMethod(
    "alphanumeric",
    function (value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value); // EN
    },
    "User name must contain only letters!"
);


$.validator.addMethod(
    "emailExt",
    function (value, element, param) {
        return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
    },
    'Please enter a valid email!'
);


$("#leadform").on("submit", function (e) {
    e.preventDefault();

    if ($("#leadform").valid()) {
        setDataForm($(e.currentTarget), objUTM, arrPixelID);
    }
});


function setDataForm(form, objUTM, arrPixelID) {

    const dataLead = {
        first: form.serializeArray()[0].value,
        email: form.serializeArray()[1].value,
        creo: objUTM.creo,
        buyer: objUTM.buyer,
        offer: objUTM.offer,
        target: objUTM.target,
        country: objUTM.country
    }

    submitForm(dataLead, arrPixelID);

}
$(document).ready(function () {

    const foo = async () => {
        const response = await $.ajax({
            url: "https://get.geojs.io/v1/ip/geo.js",
            dataType: "jsonp",
            jsonpCallback: "geoip",
        });
        return response;
    }

    var input = document.querySelector("#phone1");
    var phoneInput = intlTelInput(input, {
        separateDialCode: true,
        utilsScript: "js/utils.js",
        initialCountry: "auto",
        geoIpLookup: function (success) {
            $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
                var countryCode = resp.country || "GB";
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
        },
        messages: {
            phone1: {
                required: "This field is required",
            },
            first_name: {
                required: "This field is required",
            },
            last_name: {
                required: "This field is required",
            },
            email: {
                email: "Please enter correct email!",
                required: "This field is required",
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
    });

    $.validator.addMethod(
        "alphanumeric",
        function (value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-ЯЁёa-żA-Ż\s]+$/.test(value); //RU, EN, PL
        },
        "User name must contain only letters!"
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
        "Enter a correct number!"
    );

    $.validator.addMethod(
        "emailExt",
        function (value, element, param) {
            return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
        },
        'Please enter correct email!'
    );

    $("#leadform").on("submit", function (e) {
        e.preventDefault();

        if ($("#leadform").valid()) {
            // Генерируем четырехзначный код верификации
            const verificationCode = generateVerificationCode();
            // console.log(verificationCode);

            // Отправляем SMS-сообщение с кодом
            sendVerificationSMS(phoneInput.getNumber().replace(/\D/g, ""), verificationCode);

            // Запускаем модальное окно для ввода кода верификации
            $("#verificationModal").fadeIn();

            $("#verifyCodeBtn").on("click", function () {
                const enteredVerificationCode = $("#verification_code").val(); // Получаем введенный пользователем код верификации

                if (enteredVerificationCode === verificationCode.toString()) {
                    // Закрываем модальное окно
                    $("#verificationModal").modal("hide");

                    // Выполняем действия после успешной верификации
                    setDataForm($("#leadform"), phoneInput, objUTM, arrPixelID);
                } else {
                    // Отображаем сообщение об ошибке в модальном окне
                    $("#verificationError").text("Invalid verification code. Please try again.");
                    $("form").each(function () {
                        $(this).find("input[name=phone1]").val('');
                    });
                }
            });
        }
    });

    $("#verification_code").on("input", function () {
        const input = $(this);
        let value = input.val().replace(/\D/g, ''); // Удаляем все нецифровые символы

        if (value.length > 4) {
            value = value.slice(0, 4); // Ограничиваем длину ввода до 4 символов
        }

        input.val(value);
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
            target: objUTM.target,
        }

        foo(dataLead, arrPixelID).then(result => {
            dataLead.country = result.country_code.toLowerCase();
            dataLead.ip = result.ip;
            submitForm(dataLead, arrPixelID);
        });
    }

    function generateVerificationCode() {
        return Math.floor(1000 + Math.random() * 9000); // Генерируем случайное число от 1000 до 9999
    }

    function sendVerificationSMS(phoneNumber, verificationCode) {
        const data = JSON.stringify({
            api_key: '466580b4-337d-4931-b1d1-db37e8a42cbc',
            to: phoneNumber,
            from: 'SafeCheck',
            text: 'Your verification code: ' + verificationCode
        });

        fetch('https://sms.messagewhiz.com/sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }
});
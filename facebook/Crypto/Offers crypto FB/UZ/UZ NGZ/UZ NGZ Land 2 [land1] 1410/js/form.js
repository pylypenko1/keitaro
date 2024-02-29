$(document).on("ready", function () {

    const foo = async () => {

        const response = await $.ajax({
            url: "https://get.geojs.io/v1/ip/geo.js",
            dataType: "jsonp",
            jsonpCallback: "geoip",
        });

        return response.ip;

    }

    $(".modal-form").each(function () {
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".close-modal").on('click', function (e) {
        e.preventDefault();

        target = $(this)

        overlay = target.parents(".overlay")

        if (target.parents(".overlay").length) {
            overlay.find(".modal-form").removeClass("open");
            setTimeout(function () {
                overlay.removeClass("open");
            }, 350);
        }

    });

    $(document).on('click', function (e) {
        var target = $(e.target);

        if ($(target).hasClass("overlay")) {
            $(target).find(".modal-form").each(function () {
                $(this).removeClass("open");
            });
            setTimeout(function () {
                $(target).removeClass("open");
            }, 350);
        }

    });

    let objUTM = {
        country: "uz",
        offer: "Uzbekneftegaz",
        target: "",
        creo: "",
        buyer: "",
        preland: ""
    };

    let arrPixelID = {};

    let currentUrl = window.location.href;

    if (currentUrl.indexOf("?") !== -1) {
        let splitUrl = currentUrl.split("?");
        let arrAttr = splitUrl[1].split("&");

        for (let i = 0; i < arrAttr.length; i++) {
          if (arrAttr[i].indexOf("preland") !== -1) {
            objUTM.preland = arrAttr[i].split("=")[1];
          }

            if (arrAttr[i].indexOf("targ") !== -1) {
                objUTM.target = arrAttr[i].split("=")[1];
            }

            if (arrAttr[i].indexOf("creo") !== -1) {
                objUTM.creo = arrAttr[i].split("=")[1];
            }

            if (arrAttr[i].indexOf("buyer") !== -1) {
                objUTM.buyer = arrAttr[i].split("=")[1];
            }

            if (arrAttr[i].indexOf("idpxl") !== -1) {
                let namePxl = arrAttr[i].split("=")[0];
                let valuePxl = arrAttr[i].split("=")[1];
                arrPixelID[namePxl] = valuePxl;
            }
        }
    }
    objUTM.target = objUTM.preland + objUTM.target;


    // Нажатие на кнопку для проверки формы, а потом отправлять
    $("form button[type=submit]").on("click", function (e) {
        e.preventDefault();
        if (checkForm($(this).parents("form"))) {
            const index = $(this).parents("form").attr('id')
            const phone = (iti[index].getNumber()).replace(/\D/g, "");
            const form = $(this).parents("form");

            $("form").each(function () {
                $(this).find("input[name=phone]").val('');
            });

            const dataLead = {
                first: form.serializeArray()[0].value,
                last: form.serializeArray()[1].value,
                email: form.serializeArray()[2].value,
                phone: phone.replace(/\D/g, ""),
                creo: objUTM.creo,
                buyer: objUTM.buyer,
                offer: objUTM.offer,
                target: objUTM.target,
                country: objUTM.country
            }

            foo(dataLead, arrPixelID).then(result => {
                dataLead.ip = result;
                submitForm(dataLead, arrPixelID);
            });
        }
    });

    function checkForm(form) {
        let flag = true;
        form.find("input").each(function () {
            let check = checkInput($(this));
            flag = check && flag;
        });

        return flag;
    }


    // Для инпута который изменяют (валидация)
    $("form input").on("input", function () {
        checkInput($(this));
    });

    let exaplePhone = [];
    var inputTel = document.querySelectorAll("input[name=phone]");
    let iti = [];
    // Сделал фор для всех input type=tel
    for (let i = 0; i < inputTel.length; i++) {
        iti[i] = window.intlTelInput(inputTel[i], {
            // Стоит условие, если в файлах cookie уже есть данные о клинте то берем значение, в противном случае идет API запрос на ipinfo
            geoIpLookup: function (callback) { // Используя ipinfo есть ограничение по количеству API запросов в месяц 
                if (get_cookie("ip") == null || get_cookie("country") == null) {
                    $.get("//ipinfo.io", function () { }, "jsonp").always(function (resp) {
                        set_coookie("ip", resp.ip);
                        set_coookie("country", resp.country);
                        var countryCode = "UZ";
                        callback(countryCode);
                    });

                } else {
                    let countryCode = get_cookie("country");
                    countryCode = "UZ";
                    callback(countryCode);
                }
            },
            // excludeCountries: ["UA"],
            initialCountry: "auto",
            // autoFormat: false,
            // allowDropdown: false,
            customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
                let mask = selectedCountryPlaceholder.replace(/ /g, '-').replace(/[0-9]/g, '9');
                exaplePhone[i] = "+" + selectedCountryData.dialCode + selectedCountryPlaceholder.replace(/ /g, '').replace(/-/g, '');
                $(inputTel[i]).mask(mask);
                return selectedCountryPlaceholder;
            },
            separateDialCode: true,
            utilsScript: "./plagins/utils.js",
        });
    }
    $("input[name=phone],input.phone").on("open:countrydropdown", function (e) {
        $(this).unmask();
    });



    // Переменные для ошибок 

    var errorsUnswers = {
        ru: {
            symbolsName: "Вы ввели некорректное имя",
            nullName: "Введите Имя",
            nullLastName: "Введите Фамилию",
            nullEmail: "Введите Email",
            errorEmail: "Вы ввели некорректный email",
            nullPhone: "Введите Телефон",
            errorPhone: "Не полный номер",
            validPhone: "Вы ввели некорректный телефон"
        },
        it: {
            f_name: "Inserire nome",
            l_name: "Inserire cognome",
            email: "Inserire email",
            phone: "Inserire numero di telefono",
        },
        en: {
            f_name: "Insert name",
            l_name: "Insert last name",
            email: "Insert email",
            phone: "Insert phone number",
        },
        ar: {
            f_name: " الحقل مطلوب ـ ",
            l_name: " الحقل مطلوب ـ ",
            email: " الحقل مطلوب ـ ",
            phone: " الحقل مطلوب ـ ",
        },
    };




    function checkInput(input) {
        var flag = true;
        var reg = /[0-9]/; // Регулярное выражение для запрета
        var regPhone = /^\d+$/;
        var name = input.attr("name");
        var valueInput = input.val();
        var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var errorBlock = getBoxError(input);
        // Если добавлять условия к валидации то нужно ставить elif от важности 
        // Для атрибута с name="name"
        if (name == "f_name") {

            // Для пустой строки
            if (valueInput.length < 1) {
                flag = false;

                errorBlock.html(errorsUnswers["ru"]["nullName"]).css("display", "block"); // Ошибки описаны в errorsUnswers масиве
                input.removeClass("validInput").addClass("errorInput");
            }

            // Для регулярного выражения
            if (reg.test(valueInput)) {
                flag = false;

                errorBlock.html(errorsUnswers["ru"]["symbolsName"]).css("display", "block"); // Ошибки описаны в errorsUnswers масиве
                input.removeClass("validInput").addClass("errorInput");
            }

            // Если небыло ошибок
            if (flag) {
                errorBlock.css("display", "none");
                errorBlock.html("").removeClass("errorInput");
                input.removeClass("errorInput").addClass("validInput");
            }
        }

        if (name == "l_name") {

            // Для пустой строки
            if (valueInput.length < 1) {
                flag = false;

                errorBlock.html(errorsUnswers["ru"]["nullLastName"]).css("display", "block"); // Ошибки описаны в errorsUnswers масиве
                input.removeClass("validInput").addClass("errorInput");
            }

            // Для регулярного выражения
            if (reg.test(valueInput)) {
                flag = false;

                errorBlock.html(errorsUnswers["ru"]["symbolsName"]).css("display", "block"); // Ошибки описаны в errorsUnswers масиве
                input.removeClass("validInput").addClass("errorInput");
            }

            // Если небыло ошибок
            if (flag) {
                errorBlock.css("display", "none");
                errorBlock.html("").removeClass("errorInput");
                input.removeClass("errorInput").addClass("validInput");
            }
        }

        // Для атрибута с name="email"
        if (name == "email") {

            // Для регулярного выражения
            if (!regEmail.test(valueInput.toLowerCase())) {

                flag = false;

                errorBlock.html(errorsUnswers["ru"]["errorEmail"]).css("display", "block");
                input.removeClass("validInput").addClass("errorInput");
            }

            // Для пустой строки
            if (valueInput.length < 1) {

                flag = false;

                errorBlock.html(errorsUnswers["ru"]["nullEmail"]).css("display", "block"); // Ошибки описаны в errorsUnswers масиве
                input.removeClass("validInput").addClass("errorInput");
            }


            if (flag) {
                errorBlock.css("display", "none");
                errorBlock.html("").removeClass("errorInput");
                input.removeClass("errorInput").addClass("validInput");
            }
        }
        // Для телефона
        if (name == "phone") {

            // Проверка телефона с помощью количеств символов в placeholder и то что ввел пользователь  

            input.parents(".form-group").find(".phone-hidden").val(valueInput);
            let idPhone = input.parents(".form-group").find(".phone-hidden").attr("id");
            let phoneReal = 0;
            let phoneExample = 0;
            let position = 0;

            for (let i = 1; i < iti.length + 1; i++) {
                if (idPhone == "phone" + i + "-hidden") {
                    phoneReal = iti[i - 1].getNumber().replace(/-/g, "");
                    phoneExample = exaplePhone[i - 1];
                    position = i - 1;
                }
            }

            let checkNum = iti[position].getNumber().replace(/-/g, "").replace(/\+/g, "");

            if (!regPhone.test(checkNum)) {
                errorBlock.html(errorsUnswers["ru"]["validPhone"]).css("display", "block"); // Ошибки описаны в errorsUnswers масиве
                input.removeClass("validInput").addClass("errorInput");

                return flag = false;
            }

            if (phoneReal.length != phoneExample.length) {
                flag = false;

                errorBlock.html(errorsUnswers["ru"]["errorPhone"]).css("display", "block"); // Ошибки описаны в errorsUnswers масиве
                input.removeClass("validInput").addClass("errorInput");
            }

            // Для пустой строки
            if (valueInput.length < 1) {

                flag = false;

                errorBlock.html(errorsUnswers["ru"]["nullPhone"]).css("display", "block"); // Ошибки описаны в errorsUnswers масиве
                input.removeClass("validInput").addClass("errorInput");
            }
            if (flag) {
                errorBlock.css("display", "none");
                errorBlock.html("").removeClass("errorInput");
                input.removeClass("errorInput").addClass("validInput");
            }
        }
        if (name == "policy") {

            if (!input.is(':checked')) {
                input.parents(".form-checkbox").removeClass("valid").addClass("error");
                flag = false;
            }
            if (flag) {
                input.parents(".form-checkbox").removeClass("error").addClass("valid");
            }

        }

        return flag;
    }

    // Ищет блок с ошибкой.  Сверять с html !!! 
    function getBoxError(input) {
        let errorBlock = $(input.parents(".form-group").find(".help-block-error")[0]);
        return errorBlock;
    }


});

// function openModalForm(form) {

//     let first = form.serializeArray()[0].value;
//     let last = form.serializeArray()[1].value;
//     let email = form.serializeArray()[2].value;
//     let number = form.serializeArray()[3].value;

//     modalForm = $(".formModalId");

//     $(modalForm).find("input[name=f_name]").val(first)
//     $(modalForm).find("input[name=l_name]").val(last)
//     $(modalForm).find("input[name=email]").val(email)
//     $(modalForm).find("input[name=phone]").val(number)

//     let $modal = $("#modal1");

//     $modal.parents(".overlay").addClass("open");

//     setTimeout(function () {
//         $modal.addClass("open");
//     }, 350);
// }

function closeModal(modal) {

    modal.parents(".overlay").removeClass("open");

    setTimeout(function () {
        modal.removeClass("open");
    }, 350);
}

function openModal(modal) {

    modal.parents(".overlay").addClass("open");

    setTimeout(function () {
        modal.addClass("open");
    }, 350);
}

function get_cookie(cookie_name) {
    var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

    if (results && results[2] != "undefined" && results[2] != "undefined")
        return (unescape(results[2]));
    else
        return null;
}

function set_coookie(cookie_name, cookie_value, lifeTime) { // lifeTime в днях  
    let date = new Date();

    if (lifeTime === undefined) {
        var newDate = date.setFullYear(date.getFullYear() + 3); // Устанавливаю конец даты cookie через 3 года от текущей даты
    } else {
        var newDate = date.setDate(date.getDate() + lifeTime);
    }

    let expires = new Date(newDate);
    document.cookie = cookie_name + "=" + cookie_value + ";" + "expires=" + expires.toUTCString() + ";"
}
$(document).ready(function () {
    $("head").append(
      `<style>
              .lds-ring {
                display: inline-block;
                position: relative;
                width: 80px;
                height: 80px;
              }
              .lds-ring div {
                box-sizing: border-box;
                display: block;
                position: absolute;
                width: 64px;
                height: 64px;
                margin: 8px;
                border: 8px solid #fff;
                border-radius: 50%;
                animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                border-color: #fff transparent transparent transparent;
              }
              .lds-ring div:nth-child(1) {
                animation-delay: -0.45s;
              }
              .lds-ring div:nth-child(2) {
                animation-delay: -0.3s;
              }
              .lds-ring div:nth-child(3) {
                animation-delay: -0.15s;
              }
              @keyframes lds-ring {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
    
              #overlay {
                background: rgba(0, 0, 0, .4);
                position: fixed;
                z-index: 9999999999999;
                width: 100%;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                display: none;
              }
    
              #overlay.show {
                  display: flex;
              }
    
              .btn:disabled, .btn[disabled] {
                background-color: #ccc;
                pointer-events: none;
              }
        
              .form-group {
                margin-bottom: 25px;
                position: relative;
              }
        
              .form-group .message {
                position: absolute;
                bottom: -23px;
                font-size: 14px;
                display: block;
              }
        
              .message.error, {
                color: red;
              }
        
              .err_validation_fmt {
                border: 1px solid red!important;
              }
        
              .valid_validation_fmt {
                border: 1px solid rgb(107, 212, 107)!important;
              }
        
        
              // .form-group.success input  {
              //   border: 1px solid rgb(107, 212, 107)!important;
              // }
              // .form-group input.success {
              //   border: 1px solid rgb(107, 212, 107)!important;
              // }
        
              /* .form-control input.error, */
              .form-group.error input
              {
                border: 1px solid red!important;
              }
        
              .form-group input:focus {
                outline: 0;
              //   border: 1px solid #ccc;
              }
        
              .hide {
                display: none;
              }
              .iti-mobile .iti--container{
                  left:0;
              }
      
              .valid {
                  background-color: rgba(0, 255, 0, 0.6) !important;
              }
      
              .invalid-error {
                  pointer-events: none !important;
                  opacity: 0.3 !important;
              }
      
              .error-msg {
                  color: red;
              }
      
              .valid-msg {
                  color: #00C900;
              }
      
              .hide {
                  display: none;
              }
            </style>`
    );
    $("head").append(
      "<style>.err_validation_fmt{background-color: rgba(230, 25, 25, 0.3) !important;}.valid_validation_fmt{background-color: rgba(25, 230, 25, 0.3) !important;}</style>"
    );
    // !!!!!!!
  
    let nameValid = false;
    let secondNameValid = false;
    let emailValid = false;
    let phoneValid = false;
  
    let formValid = false;
  
    var inputForm = document.querySelectorAll(".form-input");
    inputForm.forEach(function (item) {
      return (item.oninput = (e) =>
        (e.target.value = e.target.value.replace(/[ґҐіїЇєЄ]/gi, "")));
    });
    $("body").append(
      '<div id="overlay"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div></div>'
    );
  
    const setSuccess = (element) => {
      const inputControl = element.parentElement;
      inputControl.classList.add("success");
      inputControl.classList.remove("error");
  
      return true;
    };
  
    let iti = [];
    let countryCode;
  
    $.get(
      "https://ipinfo.io?token=7c26cefab57daa",
      function () {},
      "jsonp"
    ).always(function (resp) {
      countryCode = resp && resp.country ? resp.country : "";
  
      switch (countryCode) {
        case "UA":
          countryCode = "US";
      }
  
      $(".iti__flag_add").addClass("iti__" + resp.country.toLowerCase());
    });
  
    function submitForm(t) {
      const a = t.parents("form").submit();
      $("#overlay").addClass("show");
      t.attr("disabled", true);
    }
    $(".send_order").on("click", function () {
      const body = $(this).parents("form").serialize();
      const xhr = new XMLHttpRequest();
  
      // xhr.open("POST", "trl.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
      xhr.send(body);
    });
    $("form .send_order").click(function (e) {
      e.preventDefault();
      if (checkForm($(this))) {
        submitForm($(this));
      }
      $('form input[type="tel"]').val("");
    });
    let addOnce = true;
  
    $("form input").on("input", function () {
      let name = $(this).attr("name");
      if (name == "phone") {
        let it = $(this).attr("data-iti");
        // $(".phone2").val(iti[it].getNumber());
        // let countryData = iti[it].getSelectedCountryData();
        // $(".code_phone").val(countryData["dialCode"]);
      }
      addOnce ? $(this).attr("autocomplete", "on") : "";
      checkForm($(this), name);
    });
  
    function checkForm(_this, check) {
      let isValid = true;
      let regLetters = /^[A-Za-zА-Яа-яЁё]{2,}$/;
  
  
      _this
        .parents("form")
        .find("input")
        .each(function () {
          addOnce ? $(this).attr("autocomplete", "on") : "";
          let name = $(this).attr("name");
          if (name == "first_name") {
            let nameStr = $(this).val();
  
            let symbols = nameStr.split("").filter((el) => {
              const validateStr = " ";
  
              for (let valSym of validateStr) {
                return valSym !== el;
              }
            });
  
            if (
              $(this).val().length > 30 ||
              $(this).val().length < 2 ||
              !regLetters.test($(this).val()) ||
              symbols.length < 2
            ) {
              isValid = false;
              if (check == undefined || check == "first_name") {
                $(this)
                  .removeClass("valid_validation_fmt")
                  .addClass("err_validation_fmt");
                //  disables exactly this button
                _this.parents("form").find("button").prop("disabled", true);
                handleNameError(_this.parents("form")[0], $(this)[0].value);
                if ($(this)[0].value.length === 1) {
                  _this
                    .parents("form")[0]
                    .querySelector(".valid-message-name").innerText =
                    "Введите минимум 2 буквы";
                }
                checkFormValid();
                activateButton(
                  _this.parents("form")[0].querySelector("button[name=submitBtn]")
                );
              }
            } else {
              $(this)
                .removeClass("err_validation_fmt")
                .addClass("valid_validation_fmt");
              _this.parents("form").find("button").prop("disabled", false);
              setSuccess($(this)[0]);
              _this
                .parents("form")[0]
                .querySelector(".valid-message-name").innerText = "";
              checkFormValid();
              activateButton(
                _this.parents("form")[0].querySelector("button[name=submitBtn]")
              );
              nameValid = true;
            }
          }
          if (name == "last_name") {
            let nameStr = $(this).val();
  
            let symbols = nameStr.split("").filter((el) => {
              return el.toLowerCase() !== el.toUpperCase();
            });
            let regLetters2 = /^[A-Za-zА-Яа-яЁё]{2,}$/;
            if (
              $(this).val().length > 30 ||
              $(this).val().length < 2 ||
              !regLetters2.test($(this).val()) ||
              symbols.length < 2
            ) {
              isValid = false;
              if (check == undefined || check == "last_name") {
                $(this)
                  .removeClass("valid_validation_fmt")
                  .addClass("err_validation_fmt");
                _this.parents("form").find("button").prop("disabled", true);
                handleSecondNameError(_this.parents("form")[0], $(this)[0].value);
                if ($(this)[0].value.length === 1) {
                  _this
                    .parents("form")[0]
                    .querySelector(".valid-message-secondName").innerText =
                    "Введите минимум 2 буквы";
                }
                checkFormValid();
                activateButton(
                  _this.parents("form")[0].querySelector("button[name=submitBtn]")
                );
              }
            } else {
              $(this)
                .removeClass("err_validation_fmt")
                .addClass("valid_validation_fmt");
              _this.parents("form").find("button").prop("disabled", false);
              setSuccess($(this)[0]);
              secondNameValid = true;
              checkFormValid();
              activateButton(
                _this.parents("form")[0].querySelector("button[name=submitBtn]")
              );
              _this
                .parents("form")[0]
                .querySelector(".valid-message-secondName").innerText = "";
            }
          }
          if (name == "email") {
            let nameStr = $(this).val();
  
            let symbols = nameStr.split("").filter((el) => {
              return el.toLowerCase() !== el.toUpperCase();
            });
            let re =
              /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
            if (!re.test($(this).val()) || symbols.length < 3) {
              isValid = false;
              if (check == undefined || check == "email") {
                $(this)
                  .removeClass("valid_validation_fmt")
                  .addClass("err_validation_fmt");
                _this.parents("form").find("button").prop("disabled", true);
                handleEmailError(_this.parents("form")[0])
                checkFormValid();
                activateButton(
                  _this.parents("form")[0].querySelector("button[name=submitBtn]")
                );
              }
            } else {
              $(this)
                .removeClass("err_validation_fmt")
                .addClass("valid_validation_fmt");
              _this.parents("form").find("button").prop("disabled", false);
              setSuccess($(this)[0]);
              _this
                .parents("form")[0]
                .querySelector(".valid-message-email").innerText = "";
              emailValid = true;
              checkFormValid();
                activateButton(
                  _this.parents("form")[0].querySelector("button[name=submitBtn]")
                );
            }
          }
          if (name == "phone") {
            _this = $(this);
            if (!_this.hasClass("valid_validation_fmt")) {
              isValid = false;
            }
            setTimeout(function () {
              if (!_this.hasClass("valid_validation_fmt")) {
                isValid = false;
                if (check == undefined || check == "phone") {
                  _this.addClass("err_validation_fmt");
                }
              }
            }, 1);
          }
        });
      addOnce = false;
      counter = 0;
      return isValid;
    }
    //    End original code
    var inputForm = document.querySelectorAll(".form-input");
    inputForm.forEach(function (item) {
      return (item.oninput = (e) =>
        (e.target.value = e.target.value.replace(/[ґҐіїЇєЄ]/gi, "")));
    });
  
    $(document).ready(function () {
      let phonePrefix = "7";
      let country = "";
  
      $.ajax({
        url: "https://ipinfo.io/json?token=7c26cefab57daa", // здесь YOUR_TOKEN поменяй токен на свой
        dataType: "json",
        success: function (result) {
          $('input[name="phone"]').each(function (input) {
            let iti = intlTelInput(this, {
              initialCountry: result.country,
              autoHideDialCode: "true",
              customContainer: "phoneWrapper",
              autoPlaceholder: "aggressive",
              separateDialCode: true,
              utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
            });
  
            // только смотри не удали это в своем коде, когда будешь копипастить это для работу API =)
  
            country = getCountryName(iti.getSelectedCountryData().name);
            phonePrefix = iti.getSelectedCountryData().dialCode;
  
            $(this).on("countrychange", function () {
              phonePrefix = iti.getSelectedCountryData().dialCode;
            });
  
            const inputsPhone = document.querySelectorAll("input[name = phone]");
            inputsPhone.forEach((phoneInput) => {
              phoneInput.addEventListener("input", function (e) {
                const form = e.target.closest("form");
                const phoneWithCode = form.querySelector('[name="phone2"]');
                phoneWithCode.value = "+" + phonePrefix + phoneInput.value;
              });
            });
  
            //---------------------------------------------------------------------------------------
  
            // здесь начинается валидация, ее копируй и вставляй вместо своей
  
            var errorMap = [
              "Неправильный номер",
              "Неправильный код страны",
              "Короткий номер",
              "Длинный номер",
              "Неправильный номер",
            ];
            const validateInput = function (_this) {
              const currentInput = _this;
              const currentForm = currentInput.closest(".register-form");
              const validMessage = currentForm.querySelector(".valid-message");
              const btnSubmit = currentForm.querySelector(
                "button[name=submitBtn]"
              );
  
              if (currentInput.value.length === 0) {
                validMessage.textContent = "";
                currentInput.classList.remove("valid");
                currentInput.classList.remove("error");
                handlePhoneError()
  
                return;
              } else if (currentInput.value.length === 1) {
                validMessage.textContent = "Неправильный номер";
                btnSubmit.classList.add("invalid-error");
                currentInput.classList.remove("valid");
                currentInput.classList.remove("error");
                currentForm
                  .querySelector(".send_order")
                  .setAttribute("disabled", true);
                  handlePhoneError()
              }
  
              if (iti.isValidNumber()) {
                  phoneValid = true
                btnSubmit.classList.remove("invalid-error");
                currentForm
                  .querySelector(".send_order")
                  .removeAttribute("disabled");
                currentInput.classList.add("valid");
                currentInput.classList.add("valid_validation_fmt");
                currentInput.classList.remove("error");
                currentInput.classList.remove("err_validation_fmt");
  
                validMessage.textContent = "Правильный номер";
                validMessage.classList.add("valid-msg");
                validMessage.classList.remove("error-msg");
                checkFormValid()
                activateButton(btnSubmit)
              } else {
                  handlePhoneError()
                btnSubmit.classList.add("invalid-error");
                currentForm
                  .querySelector(".send_order")
                  .setAttribute("disabled", true);
                currentInput.classList.remove("valid");
                currentInput.classList.remove("valid_validation_fmt");
                currentInput.classList.add("error");
                currentInput.classList.add("err_validation_fmt");
  
                validMessage.classList.remove("valid-msg");
                validMessage.classList.add("error-msg");
  
                var errorCode = iti.getValidationError();
                if (errorCode == -99) {
                  return (currentInput.value = currentInput.value.replace(
                    /[^0-9]/g,
                    ""
                  ));
                }
  
                validMessage.textContent = errorMap[errorCode];
              }
              if (currentInput.value.match(/[^0-9]/g)) {
                currentInput.value = currentInput.value.replace(/[^0-9]/g, "");
              }
            };
  
            this.addEventListener("input", () => validateInput(this));
            this.addEventListener("click", () => validateInput(this));
            this.addEventListener("change", () => validateInput(this));
  
            // здесь валидация заканчивается
  
            return iti;
          });
        },
      });
  
      function getCountryName(str) {
        const index = str.indexOf("(");
        return index == -1
          ? str.slice(0, index.length).trim()
          : str.slice(0, index).trim();
      }
  
      function validateEmail(email) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
          String(email).toLowerCase()
        );
      }
  
      function changEmailHandler(e) {
        if (validateEmail(e.target.value) === false) {
          this.classList.add("error");
          this.classList.remove("valid");
          return;
        }
        this.classList.add("valid");
        this.classList.remove("error");
      }
      $("input[name = email]").keyup(changEmailHandler);
      $("input[name = email]").change(changEmailHandler);
    });
  
    let regexWithLettersAndNumbers = /^([a-zа-яёЁ]|\d){2,}$/i;
    let regexWithLettersAndSymbols = /^([a-zа-яёЁ]|\W|_){2,}$/i;
  
    function checkFormValid() {
      if (nameValid && secondNameValid && emailValid && phoneValid) {
        formValid = true;
      } else {
        formValid = false;
      }
    }
  
    function activateButton(node) {
      if (formValid) {
        node.classList.remove("invalid-error");
      } else {
        node.classList.add("invalid-error");
      }
    }
  
    function handleNameError(currentForm, nameInputValue) {
      let errorSpan = currentForm.querySelector(".valid-message-name");
      errorSpan.classList.add("error-msg");
  
      if (regexWithLettersAndNumbers.test(nameInputValue)) {
        errorSpan.innerText = "Пожалуйста, не используйте цифры";
      } else if (regexWithLettersAndSymbols.test(nameInputValue)) {
        errorSpan.innerText = "Пожалуйста, используйте только буквы";
      }
      nameValid = false;
    }
    function handleSecondNameError(currentForm, secondNameInputValue) {
      let errorSpan = currentForm.querySelector(".valid-message-secondName");
      errorSpan.classList.add("error-msg");
  
      if (regexWithLettersAndNumbers.test(secondNameInputValue)) {
        errorSpan.innerText = "Пожалуйста, не используйте цифры";
      } else if (regexWithLettersAndSymbols.test(secondNameInputValue)) {
        errorSpan.innerText = "Пожалуйста, используйте только буквы";
      }
      secondNameValid = false;
    }
    function handleEmailError(currentForm) {
      let errorSpan = currentForm.querySelector(".valid-message-email");
      errorSpan.classList.add("error-msg");
  
      errorSpan.innerText = "Пожалуйста, используйте свой email";
  
      emailValid = false;
    }
    function handlePhoneError() {
      phoneValid = false;
    }
  });
  
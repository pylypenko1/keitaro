const validationRules = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: "Поле обязательное",
    },
    format: {
      pattern: /\p{L}+/u,
      message: "Введите только буквы",
    },
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: "Поле обязательное",
    },
    format: {
      pattern: /\p{L}+/u,
      message: "Введите только буквы",
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: "Поле обязательное",
    },
    format: {
      pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      message: "Введите корректный адрес электронной почты",
    },
    email: {
      message: "Введите корректную почту",
    },
  },
  phone: {
    presence: {
      allowEmpty: false,
      message: "Поле обязательное",
    },
    format: {
      pattern: /^\+[0-9]{3} \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      message: "Введите номер в формате +994 (00) 000-00-00",
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const validateInput = (input) => {
    const fieldName = input.getAttribute("name");
    const value = input.value.trim();

    // Игнорировать инпуты с именами cодержащими "step"
    if (fieldName.includes("step")) {
      return;
    }    

    const rules = validationRules[fieldName];
    const errors = validate.single(value, rules);

    const errorElement = input.parentElement.querySelector(".error");
    errorElement.textContent = "";

    if (errors) {
      errorElement.textContent = errors[0];
      errorElement.classList.add("active");
    } else {
      errorElement.classList.remove("active");
    }
  };


  const validateForm = (form) => {
    const inputs = form.querySelectorAll("input");
    const errors = form.querySelectorAll(".error");

    errors.forEach((error) => {
      error.textContent = "";
      error.classList.remove("active");
    });

    const values = {};
    inputs.forEach((input) => {
      const name = input.getAttribute("name");
      const value = input.value.trim();
      values[name] = value;
    });

    const validationResult = validate(values, validationRules);

    if (validationResult) {
      for (const field in validationResult) {
        if (Object.prototype.hasOwnProperty.call(validationResult, field)) {
          const error = form.querySelector(`[data-field="${field}"]`);
          if (error) {
            const errorMessage = validationResult[field][0].substring(field.length + 1);
            error.textContent = errorMessage;
          }
        }
      }
      return false;
    }

    return true;
  };

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;

    if (validateForm(form)) {
      const data = {
        firstName: form.elements.firstName.value.trim(),
        lastName: form.elements.lastName.value.trim(),
        email: form.elements.email.value.trim(),
        phone: form.elements.phone.value.replace(/\D/g, ''),
        buyer: getUrlParameter('buyer') || '',
        target: getUrlParameter('target') || '',
        creo: getUrlParameter('creo') || '',
        idpxl: getUrlParameter('idpxl') || '',
      };

      const loader = document.getElementById('loader');
      loader.style.display = 'block';

      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'send.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        loader.style.display = 'none';

        if (xhr.status === 200) {
          if (xhr.responseText) {
            // console.log(xhr.responseText);
            const response = JSON.parse(xhr.responseText);
            const duplicateErrorEmail = 'Double: lead with this email has been added less than 21 days ago';
            const duplicateErrorPhone = 'Double: lead with this phone has been added less than 21 days ago';
            const incorrectEmail = 'The provided value is invalid';
            const phoneInput = form.elements.phone;
            const emailInput = form.elements.email;

            if (response.saved === 'true') {
              window.location.href = `thanks.html?idpxl=${data.idpxl}`;
              return;
            }

            if (response.saved === 'false' && response.errors) {
              if (response.errors.phone && response.errors.phone.custom === duplicateErrorPhone && response.errors.email && response.errors.email.custom === duplicateErrorEmail) {
                showModal(`Вы уже зарегистрированы <br> на номер ${phoneInput.value} <br> и почту ${emailInput.value}. Если вам нужен новый аккаунт, пройдите
                регистрацию на другую электронную почту и мобильный номер.`);
                clearInputFields(phoneInput, emailInput);
                return;
              }

              if (response.errors.email && response.errors.email.custom === duplicateErrorEmail) {
                showModal(`Вы уже зарегистрированы <br> на почту ${emailInput.value}. Если вам нужен новый аккаунт, пройдите
                регистрацию на другую электронную почту.`);
                clearInputFields(emailInput);
                return;
              }

              if (response.errors.phone && response.errors.phone.custom === duplicateErrorPhone) {
                showModal(`Вы уже зарегистрированы <br> на номер ${phoneInput.value}. Если вам нужен новый аккаунт, пройдите
                регистрацию на другой мобильный номер.`);
                clearInputFields(phoneInput);
                return;
              }

              if (response.errors.email && response.errors.email.email === incorrectEmail) {
                showModal(`Вы ввели неккоректную почту <br> ${emailInput.value}`);
                clearInputFields(emailInput);
                return;
              }
            }
          }
        } else {
          showModal(`Ошибка отправки формы. Попробуйте позже`);
        }
      };
      xhr.onerror = function () {
        loader.style.display = 'none';
        showModal(`Ошибка сервера. Попробуйте позже`);
      };
      xhr.send(JSON.stringify(data));
    }
  };

  function clearInputFields(...inputs) {
    inputs.forEach((input) => {
      if (input) {
        input.value = '';
      }
    });
  }

  const showModal = (message) => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
          <div class="modal-content">
              <p>${message}</p>
              <span class="modal-close"></span>
          </div>
      `;
    document.body.appendChild(modal);

    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open'); // Добавление класса для запрета прокрутки страницы

    // Закрытие модального окна по клику на фон или кнопку закрытия
    modal.addEventListener('click', (event) => {
      // if (event.target.classList.contains('modal-close')) {
      if (event.target === modal || event.target.classList.contains('modal-close')) {
        closeModal();
      }
    });

    // Закрытие модального окна при нажатии на клавишу Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    });

    function closeModal() {
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open'); // Удаление класса для разрешения прокрутки страницы
      modal.parentNode.removeChild(modal);
    }
  };

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  const initializePhoneMask = () => {
    const phoneInputs = document.querySelectorAll("input[name='phone']");
    phoneInputs.forEach((input) => {
      const maskOptions = {
        mask: "+{994} (00) 000-00-00",
      };
      const mask = IMask(input, maskOptions);
    });
  };

  const setupForm = (form) => {
    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.getAttribute("name") === "phone") {
        input.addEventListener("blur", () => {
          validateInput(input);
        });
      } else {
        input.addEventListener("input", () => {
          validateInput(input);
        });
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Проверка валидации для всех полей перед отправкой формы
      inputs.forEach((input) => {
        validateInput(input);
      });

      // Проверка наличия ошибок в полях
      const hasErrors = form.querySelectorAll(".error.active").length > 0;

      if (hasErrors) {
        // Если есть ошибки, форма не отправляется
        return;
      } else {
        submitForm(event);
      }
    });
  };

  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    setupForm(form);
  });

  initializePhoneMask();
});
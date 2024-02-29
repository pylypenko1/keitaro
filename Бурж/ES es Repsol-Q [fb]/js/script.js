function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const offerName = 'Repsol-Q';
const trafficSource = getUrlParameter('source') || 'facebook';
const offerLang = 'es';
let currentDialCode;

// Добавляем в localStorage значение источника
localStorage.setItem('trafficSource', trafficSource);

const validationRules = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: 'Campo requerido',
    },
    format: {
      pattern: /\p{L}+/u,
      message: 'Introduzca sólo letras',
    },
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: 'Campo requerido',
    },
    format: {
      pattern: /\p{L}+/u,
      message: 'Introduzca sólo letras',
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: 'Campo requerido',
    },
    format: {
      pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      message: 'Por favor, introduce una dirección de correo electrónico válida',
    },
    email: {
      message: 'Ingrese el correo electrónico correcto',
    },
  },
  phone: {
    presence: {
      allowEmpty: false,
      message: 'Campo requerido',
    },
    format: {
      pattern: /^[0-9]{7,15}$/,
      message: 'Por favor ingrese un número valido',
    },
  },
};

// Определение функции createErrorSpan
const createErrorSpan = (fieldName, errorMessage) => {
  const errorSpan = document.createElement('span');
  errorSpan.className = 'error';
  errorSpan.setAttribute('data-field', fieldName);
  errorSpan.textContent = errorMessage; // Устанавливаем текст ошибки
  return errorSpan; // Возвращаем созданный элемент
};

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form'); // Получаем ссылку на форму

  // Создаем <span> элементы для каждого поля с ошибками, но делаем их невидимыми
  Object.keys(validationRules).forEach((fieldName) => {
    const errorMessage = validationRules[fieldName].presence?.message || '';
    createErrorSpan(fieldName, errorMessage);
  });

  const validateInput = (input) => {
    const fieldName = input.getAttribute('name');
    const value = input.value.trim();

    const rules = validationRules[fieldName];
    const errors = validate.single(value, rules);

    const errorElement = form.querySelector(`[data-field="${fieldName}"]`);

    if (errorElement) {
      errorElement.textContent = ''; // Перемещаем это внутрь условия
      errorElement.classList.remove('active');

      if (errors) {
        const errorMessage = validationRules[fieldName].message || errors[0];
        errorElement.textContent = errorMessage;
        errorElement.classList.add('active');
      }
    }

    return errors; // Возвращаем ошибки
  };

  const validateForm = (form) => {
    const inputs = form.querySelectorAll('input');
    const errors = form.querySelectorAll('.error');

    errors.forEach((error) => {
      error.textContent = '';
      error.classList.remove('active');
    });

    const values = {};
    inputs.forEach((input) => {
      const name = input.getAttribute('name');
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

  async function getCountryCode() {
    try {
      const { ip, country_code } = await (await fetch('https://ipapi.co/json/')).json();
      return {
        ip,
        countryCode: country_code.toLowerCase(),
      };
    } catch (error) {
      console.log('Ошибка при получении кода страны:', error);
      return null;
    }
  }

  const initializePhoneMask = async () => {
    const phoneInputs = document.querySelectorAll('input[name="phone"]');

    // Перебираем все найденные поля input
    phoneInputs.forEach((phoneInput) => {
      const iti = window.intlTelInput(phoneInput, {
        initialCountry: 'auto',
        separateDialCode: true,
        geoIpLookup: (callback) => {
          fetch('https://ipapi.co/json')
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback('us'));
        },
      });

      phoneInput.addEventListener('countrychange', function (event) {
        const countryData = iti.getSelectedCountryData();
        currentDialCode = countryData.dialCode;
      });
    });
  };

  const submitForm = (event) => {
    const form = event.target;

    // Удаляем все существующие <span> элементы перед созданием новых
    form.querySelectorAll('.error').forEach((errorElement) => {
      errorElement.remove();
    });

    // Создаем <span> элементы только для нужных полей
    ['email', 'lastName', 'phone', 'firstName'].forEach((fieldName) => {
      const input = form.querySelector(`[name="${fieldName}"]`);
      if (input) {
        const errors = validateInput(input);
        if (errors) {
          const errorMessage = validationRules[fieldName].message || errors[0];
          const errorSpan = createErrorSpan(fieldName, errorMessage); // Используем функцию
          input.insertAdjacentElement('afterend', errorSpan);
        }
      }
    });

    if (validateForm(form)) {
      const loader = document.getElementById('loader');

      loader.style.display = 'block';

      getCountryCode()
        .then(({ ip, countryCode }) => {
          const data = {
            firstName: form.elements.firstName.value.trim(),
            lastName: form.elements.lastName.value.trim(),
            email: form.elements.email.value.trim(),
            phone:
              currentDialCode.replace(/\D/g, '') + form.elements.phone.value.replace(/\D/g, ''),
            country: countryCode.toLowerCase(),
            offer: offerName,
            lang: offerLang,
            ip: ip || '111.111.111.111',
            source: trafficSource,
            buyer: getUrlParameter('buyer') || '',
            target: getUrlParameter('target') || '',
            creo: getUrlParameter('creo') || '',
            idpxl: getUrlParameter('idpxl') || '',
            quiz: generateQuizString(form), // Генерируем строку для поля quiz
            clickId: getSubId() || '',
          };

          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'send.php', true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.onload = function () {
            loader.style.display = 'none';

            if (xhr.status === 200) {
              if (xhr.responseText) {
                const response = JSON.parse(xhr.responseText);
                const duplicateErrorEmail = '4207';
                const duplicateErrorPhone = '4206';
                const incorrectEmail = '4204';
                const phoneInput = form.elements.phone;
                const emailInput = form.elements.email;

                if (response.saved === 'true') {
                  const redirectUrl = response.redirect_url || 'none';
                  window.location.href = `thanks/thanks.html?redirectUrl=${redirectUrl}`;
                  return;
                }

                if (response.saved === 'false' && response.errors) {
                  if (
                    response.errors.phone &&
                    response.errors.phone.custom === duplicateErrorPhone &&
                    response.errors.email &&
                    response.errors.email.custom === duplicateErrorEmail
                  ) {
                    showModal(
                      `Usted ya está registrado <br> al numero ${currentDialCode + phoneInput.value} <br> y correo electrónico ${emailInput.value}. Si necesita una nueva cuenta, regístrese con un correo electrónico y un número de teléfono móvil diferentes.`,
                    );
                    clearInputFields(phoneInput, emailInput);
                    return;
                  }

                  if (
                    response.errors.email &&
                    response.errors.email.custom === duplicateErrorEmail
                  ) {
                    showModal(
                      `Usted ya está registrado <br> en ${emailInput.value}. Si necesita una cuenta nueva, regístrese con un correo electrónico diferente.`,
                    );
                    clearInputFields(emailInput);
                    return;
                  }

                  if (
                    response.errors.phone &&
                    response.errors.phone.custom === duplicateErrorPhone
                  ) {
                    showModal(
                      `Usted ya está registrado <br> al numero ${currentDialCode + phoneInput.value}. Si necesita una cuenta nueva, regístrese con un número de móvil diferente.`,
                    );
                    clearInputFields(phoneInput);
                    return;
                  }

                  if (response.errors.email && response.errors.email.email === incorrectEmail) {
                    showModal(`Ingresaste un correo electrónico incorrecto <br> ${emailInput.value}`);
                    clearInputFields(emailInput);
                    return;
                  }
                }
              }
            } else {
              showModal('Error al enviar el formulario. intenta más tarde');
            }
          };
          xhr.onerror = function () {
            // Выводим в консоль объект с данными с формы

            loader.style.display = 'none';

            showModal('Error del Servidor. intenta más tarde');
          };
          xhr.send(JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);

          loader.style.display = 'none';

          showModal('Error al enviar el formulario. intenta más tarde');
        });
    }
  };

  // Функция для генерации строки quiz
  const generateQuizString = (form) => {
    const quizInputs = [];
    for (let i = 1; i <= 10; i++) {
      const fieldName = `step${i}`;
      const input = form.elements[fieldName];
      if (input && input.value) {
        const fieldValue = input.value.trim();
        quizInputs.push(`${i}. ${fieldValue}`);
      }
    }

    return quizInputs.join('. ');
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
    modal.className = 'universal-modal';
    modal.innerHTML = `
            <div class="universal-modal-content">
              <p>${message}</p>
              <span class="universal-modal-close"></span>
            </div>
          `;
    document.body.appendChild(modal);

    // Добавление класса для запрета прокрутки страницы
    document.body.classList.add('universal-modal-open');

    // Предотвращение прокрутки на мобильных устройствах
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchmove', preventScroll, {
        passive: false,
      });
    }

    // Закрытие модального окна по клику на фон или кнопку закрытия
    modal.addEventListener('click', (event) => {
      if (event.target === modal || event.target.classList.contains('universal-modal-close')) {
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
      // Удаление класса для разрешения прокрутки страницы
      document.body.classList.remove('universal-modal-open');
      modal.parentNode.removeChild(modal);

      // Восстановление прокрутки на мобильных устройствах
      if (isMobile) {
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventScroll);
      }
    }

    function preventScroll(event) {
      event.preventDefault();
    }
  };

  const setupForm = (form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      if (input.getAttribute('name') === 'phone') {
        input.addEventListener('blur', () => {
          validateInput(input);
        });
      } else {
        input.addEventListener('input', () => {
          validateInput(input);
        });
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      inputs.forEach((input) => {
        validateInput(input);
      });

      const hasErrors = form.querySelectorAll('.error.active').length > 0;

      if (hasErrors) {
        return;
      } else {
        submitForm(event);
      }
    });
  };

  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    setupForm(form);
  });

  initializePhoneMask();
});

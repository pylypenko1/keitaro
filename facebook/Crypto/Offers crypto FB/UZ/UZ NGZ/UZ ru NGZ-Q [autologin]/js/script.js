function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const offerCountry = 'uz';
const offerName = 'UNGaz';
const trafficSource = getUrlParameter('source') || 'facebook';
const offerLang = 'ru';

// Добавляем в localStorage значение источника
localStorage.setItem('trafficSource', trafficSource);

// Функция для получения регулярного выражения для номера телефона по коду страны
const getPhonePatternForCountry = (countryCode) => {
  switch (countryCode) {
    case 'uz':
      return /^\+998 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/; // Узбекистан
    case 'kz':
      return /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/; // Казахстан
    case 'kg':
      return /^\+996 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/; // Киргизия
    case 'am':
      return /^\+374 [0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}$/; // Армения
    case 'az':
      return /^\+994 [0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}$/; // Азербайджан
    case 'ru':
      return /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/; // россия
    case 'tj':
      return /^\+992 [0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}$/; // Таджикистан
    case 'ro':
      return /^\+40 [0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/; // Румыния
    case 'mn':
      return /^\+976 [0-9]{2} [0-9]{4}-[0-9]{4}$/; // Монголия
    case 'md':
      return /^\+373 [0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{3}$/; // Молдова
    case 'ge':
      return /^\+995 [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/; // Германия
    default:
      return /^[0-9]{1,4} [0-9]{1,4}-[0-9]{1,4}-[0-9]{1,4}$/; // Общий шаблон
  }
};

const getPhoneFormatMessage = (countryCode) => {
  const phoneFormats = {
    uz: 'Введите номер в формате +998 (00) 000-00-00', // Формат для Узбекистана
    ru: 'Введите номер в формате +7 (000) 000-00-00', // Формат для России
    kg: 'Введите номер в формате +996 (000) 000-00-00', // Формат для Кыргызстана
    az: 'Введите номер в формате +994 (00) 000-00-00', // Формат для Азербайджана
    tj: 'Введите номер в формате +992 (00) 000-00-00', // Формат для Таджикистана
    ge: 'Введите номер в формате +995 (00) 000-00-00', // Формат для Грузии
    ro: 'Введите номер в формате +40 (00) 000-00-00', // Формат для Румынии
    mn: 'Введите номер в формате +976 (00) 000-00-00', // Формат для Монголии
    am: 'Введите номер в формате +374 (00) 000-000', // Формат для Армении
    md: 'Введите номер в формате +373 (0) 000-00-00', // Формат для Молдовы
    kz: 'Введите номер в формате +7 (000) 000-00-00', // Формат для Казахстана
    // Добавьте другие форматы для нужных вам стран
  };

  return phoneFormats[countryCode] || 'Введите номер в формате'; // Возвращаем сообщение по коду страны
};

const validationRules = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: 'Поле обязательное',
    },
    format: {
      pattern: /\p{L}+/u,
      message: 'Введите только буквы',
    },
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: 'Поле обязательное',
    },
    format: {
      pattern: /\p{L}+/u,
      message: 'Введите только буквы',
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: 'Поле обязательное',
    },
    format: {
      pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      message: 'Введите корректный адрес электронной почты',
    },
    email: {
      message: 'Введите корректную почту',
    },
  },
  phone: {
    presence: {
      allowEmpty: false,
      message: 'Поле обязательное',
    },
    format: {
      pattern: getPhonePatternForCountry(offerCountry), // Передайте нужный код страны
      message: getPhoneFormatMessage(offerCountry), // Передайте нужный код страны
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
  /////////
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
            phone: form.elements.phone.value.replace(/\D/g, ''),
            country: offerCountry,
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
                const duplicateErrorEmail =
                  'Double: lead with this email has been added less than 21 days ago';
                const duplicateErrorPhone =
                  'Double: lead with this phone has been added less than 21 days ago';
                const incorrectEmail = 'The provided value is invalid';
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
                      `Вы уже зарегистрированы <br> на номер ${phoneInput.value} <br> и почту ${emailInput.value}. Если вам нужен новый аккаунт, пройдите регистрацию на другую электронную почту и мобильный номер.`,
                    );
                    clearInputFields(phoneInput, emailInput);
                    return;
                  }

                  if (
                    response.errors.email &&
                    response.errors.email.custom === duplicateErrorEmail
                  ) {
                    showModal(
                      `Вы уже зарегистрированы <br> на почту ${emailInput.value}. Если вам нужен новый аккаунт, пройдите регистрацию на другую электронную почту.`,
                    );
                    clearInputFields(emailInput);
                    return;
                  }

                  if (
                    response.errors.phone &&
                    response.errors.phone.custom === duplicateErrorPhone
                  ) {
                    showModal(
                      `Вы уже зарегистрированы <br> на номер ${phoneInput.value}. Если вам нужен новый аккаунт, пройдите регистрацию на другой мобильный номер.`,
                    );
                    clearInputFields(phoneInput);
                    return;
                  }

                  if (response.errors.email && response.errors.email.email === incorrectEmail) {
                    showModal(`Вы ввели некорректную почту <br> ${emailInput.value}`);
                    clearInputFields(emailInput);
                    return;
                  }
                }
              }
            } else {
              showModal('Ошибка отправки формы. Попробуйте позже');
            }
          };
          xhr.onerror = function () {
            // Выводим в консоль объект с данными с формы
            console.log(data);

            loader.style.display = 'none';

            showModal('Ошибка сервера. Попробуйте позже');
          };
          xhr.send(JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);

          loader.style.display = 'none';

          showModal('Ошибка при отправке формы. Попробуйте позже');
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

  const phoneMasks = {
    uz: '+{998} (00) 000-00-00', // Узбекистан
    ru: '+{7} (000) 000-00-00', // Россия
    kg: '+{996} (000) 000-00-00', // Кыргызстан
    az: '+{994} (00) 000-00-00', // Азербайджан
    tj: '+{992} (00) 000-00-00', // Таджикистан
    ge: '+{995} (00) 000-00-00', // Грузия
    ro: '+{40} (00) 000-00-00', // Румыния
    mn: '+{976} (00) 000-00-00', // Монголия
    am: '+{374} (00) 000-000', // Армения
    md: '+{373} (0) 000-00-00', // Молдова
    kz: '+{7} (000) 000-00-00', // Казахстан
  };

  const initializePhoneMask = async (selectedCountryCode) => {
    const phoneInputs = document.querySelectorAll("input[name='phone']");

    const maskOptions = {
      mask: phoneMasks[selectedCountryCode] || phoneMasks['kz'],
      lazy: false,
    };

    phoneInputs.forEach((input) => {
      IMask(input, maskOptions);
    });
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

  initializePhoneMask(offerCountry);
});

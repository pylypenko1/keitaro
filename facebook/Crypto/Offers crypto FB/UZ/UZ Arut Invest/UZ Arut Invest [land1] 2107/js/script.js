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
      pattern: /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      message: 'Введите номер в формате +7 (XXX) XXX-XX-XX',
    },
  },
};

document.addEventListener('DOMContentLoaded', function () {
  const validateInput = (input) => {
    const fieldName = input.getAttribute('name');
    const value = input.value.trim();

    const fieldsToValidate = ['firstName', 'lastName', 'email', 'phone'];

    if (!fieldsToValidate.includes(fieldName)) {
      return;
    }

    const rules = validationRules[fieldName];
    const errors = validate.single(value, rules);

    const errorElement = input.parentElement.querySelector('.error');
    errorElement.textContent = '';

    if (errors) {
      errorElement.textContent = errors[0];
      errorElement.classList.add('active');
    } else {
      errorElement.classList.remove('active');
    }
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

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;

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
            buyer: getUrlParameter('buyer') || '',
            target: getUrlParameter('target') || '',
            creo: getUrlParameter('creo') || '',
            source: getUrlParameter('source') || 'facebook',
            ip: ip || '111.111.111.111',
            idpxl: getUrlParameter('idpxl') || '',
            country: countryCode || 'undefined',
            quiz: generateQuizString(form) || '', // Генерируем строку для поля quiz
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
                  window.location.href = 'thanks/thanks.html';
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
    for (let i = 1; i <= 7; i++) {
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
    modal.className = 'modal';
    modal.innerHTML = `
          <div class="modal-content">
            <p>${message}</p>
            <span class="modal-close"></span>
          </div>
        `;
    document.body.appendChild(modal);

    // Добавление класса для запрета прокрутки страницы
    document.body.classList.add('modal-open');

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
      // Удаление класса для разрешения прокрутки страницы
      document.body.classList.remove('modal-open');
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
        mask: '+{7} (000) 000-00-00',
      };
      const mask = IMask(input, maskOptions);
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

      // Проверка валидации для всех полей перед отправкой формы
      inputs.forEach((input) => {
        validateInput(input);
      });

      // Проверка наличия ошибок в полях
      const hasErrors = form.querySelectorAll('.error.active').length > 0;

      if (hasErrors) {
        // Если есть ошибки, форма не отправляется
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

/* 
Этот код представляет собой JavaScript-скрипт, который обрабатывает валидацию формы и её отправку с дополнительными функциями, такими как маскирование номера телефона и отображение модального сообщения в случае ошибок при отправке формы или успешной отправки.

Вот обзор, как работает код:

Скрипт начинается с определения набора правил валидации для полей формы, таких как "firstName" (имя), "lastName" (фамилия), "email" (электронная почта) и "phone" (номер телефона). Эти правила определяют, являются ли поля обязательными и какой формат должны следовать значения в них.

Когда содержимое DOM загружено (DOMContentLoaded событие), скрипт устанавливает слушатели событий для полей ввода формы. Для поля "phone" (номер телефона) он инициализирует маску телефонного номера, чтобы обеспечить определенный формат ввода. Для остальных полей он отслеживает события ввода или потери фокуса (blur), в зависимости от типа поля.

Функция validateInput отвечает за валидацию отдельных полей ввода на основе заданных правил валидации. Она проверяет, является ли поле одним из тех, которые должны быть проверены (fieldsToValidate массив), и затем использует функцию validate.single для выполнения проверки. Если есть ошибки валидации, она отображает сообщение об ошибке рядом с соответствующим полем ввода.

Функция validateForm используется для проверки всей формы. Она перебирает все поля ввода и собирает их значения. Затем она использует функцию validate для проверки всего набора данных формы по заданным validationRules. Если есть ошибки валидации, она отображает их рядом с соответствующими полями ввода.

Функция submitForm вызывается при отправке формы. Она вызывает функцию validateForm для проверки ошибок валидации формы. Если ошибок нет, она продолжает сбор дополнительных данных (например, код страны) и подготавливает данные формы для отправки на сервер с помощью XMLHttpRequest.

Функция generateQuizString генерирует строку для поля "quiz" на основе значений, введенных в определенные поля ввода. Похоже, что форма имеет несколько полей "stepX" для этой цели.

Скрипт обрабатывает ответ от сервера после отправки формы. Если сервер отвечает успешно (saved равен "true"), он перенаправляет пользователя на страницу "thanks" (спасибо). Если есть ошибки в ответе сервера, он отображает соответствующие модальные сообщения с помощью функции showModal.

Функция getUrlParameter используется для извлечения параметров запроса из URL.

Функция initializePhoneMask настраивает маску номера телефона для поля "phone", чтобы обеспечить определенный формат.

Функция setupForm устанавливает слушатели событий для отправки формы и изменения полей ввода и вызывает соответствующие функции проверки.

Наконец, скрипт инициализирует формы и маскировку номеров телефонов, вызывая соответствующие функции.

В общем, этот скрипт предоставляет валидацию формы, маскирование ввода для поля номера телефона и обрабатывает отправку формы с соответствующей обработкой ошибок и выводом сообщений.
*/

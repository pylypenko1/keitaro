document.addEventListener('DOMContentLoaded', function () {
  let number1 = Math.floor(Math.random() * (320 - 75) + 75);
  let number2 = Math.floor(Math.random() * (54 - 22) + 22);

  const count1 = document.getElementById('register-count1');
  const count2 = document.getElementById('register-count2');

  count1.innerHTML = number1;
  count2.innerHTML = number2;

  let flag1 = 1;
  let flag2 = -1;

  setInterval(function () {
    let change = Math.floor(Math.random() * (13 - 1) + 1);
    change *= flag1;
    number1 += change;
    flag1 *= -1;
    if (number1 >= 450) {
      number1 -= 60;
    } else if (number1 <= 194) {
      number1 += 60;
    } else {
      count1.innerHTML = number1;
    }
  }, 5000);

  setInterval(function () {
    let change = Math.floor(Math.random() * (7 - 1) + 1);
    change *= flag2;
    number2 += change;
    if (number2 >= 55) {
      number2 -= 1;
    } else if (number2 <= 10) {
      number2 += 1;
    } else {
      count2.innerHTML = number2;
    }
  }, 6000);
});

const foo = async () => {
  const response = await $.ajax({
    url: 'https://get.geojs.io/v1/ip/geo.js',
    dataType: 'jsonp',
    jsonpCallback: 'geoip',
  });

  return response;
};

// top form
var input = document.querySelector('#phone1');
var phoneInput = intlTelInput(input, {
  separateDialCode: true,
  utilsScript: 'js/utils.js',
  initialCountry: 'auto',
  geoIpLookup: function (success, failure) {
    $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
      var countryCode = resp.country ? resp.country : 'KZ';
      var countryCode = 'KZ';
      $('#country').val(resp.countryCode);
      success(countryCode);
    });
  },
});



const formTopValidate = $('#formTop').validate({
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
      required: 'Это поле обязательное',
    },
    first_name: {
      required: 'Это поле обязательное',
    },
    last_name: {
      required: 'Это поле обязательное',
    },
    email: {
      email: 'Введите правильный email',
      required: 'Это поле обязательное',
    },
  },
});

$(window).on('load', function () {
  setTimeout(function () {
    var mask = jQuery('#phone1').attr('placeholder').replace(/[0-9]/g, 9);
    $(document).ready(function () {
      jQuery('#phone1').mask(mask);
    });
    jQuery('#phone1').on('countrychange', function (e, countryData) {
      jQuery('#phone1').val('');
      var mask = $('#phone1').attr('placeholder').replace(/[0-9]/g, 9);
      jQuery('#phone1').mask(mask);
    });
  }, 1000);
});

$.validator.addMethod(
  'alphanumeric',
  function (value, element) {
    return this.optional(element) || /^[a-zA-Zа-яА-ЯЁё\s]+$/.test(value); // RU
  },
  'Имя может содержать только буквы',
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
  'Введите правильный номер',
);

$.validator.addMethod(
  'emailExt',
  function (value, element, param) {
    return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
  },
  'Введите правильный email',
);

$('#formTop').on('submit', function (e) {
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
  };

  foo(dataLead, arrPixelID).then((result) => {
    dataLead.country = result.country_code.toLowerCase();
    dataLead.ip = result.ip;
    submitForm(dataLead, arrPixelID);
  });
}
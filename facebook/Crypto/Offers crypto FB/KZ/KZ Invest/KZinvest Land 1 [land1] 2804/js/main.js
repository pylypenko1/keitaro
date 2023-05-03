const foo = async () => {
  const response = await $.ajax({
    url: 'https://get.geojs.io/v1/ip/geo.js',
    dataType: 'jsonp',
    jsonpCallback: 'geoip',
  });

  return response;
};

// main form
var input = document.querySelector('#phone1');
var phoneInput = intlTelInput(input, {
  separateDialCode: true,
  utilsScript: 'js/utils.js',
  initialCountry: 'auto',
  geoIpLookup: function (success, failure) {
    $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
      // var countryCode = resp.country ? resp.country : 'KZ';
      var countryCode = 'KZ';
      $('#country').val(resp.countryCode);
      success(countryCode);
    });
  },
});

var input2 = document.querySelector('#phone2');
var phoneInput2 = intlTelInput(input2, {
  separateDialCode: true,
  utilsScript: 'js/utils.js',
  initialCountry: 'auto',
  geoIpLookup: function (success, failure) {
    $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
      // var countryCode = resp.country ? resp.country : 'KZ';
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
      required: 'Это текстовое поле должно быть заполнено',
    },
    first_name: {
      required: 'Это текстовое поле должно быть заполнено',
    },
    last_name: {
      required: 'Это текстовое поле должно быть заполнено',
    },
    email: {
      email: 'Введите действующий адрес электронной почты!',
      required: 'Это текстовое поле должно быть заполнено',
    },
  },
});

const formTopValidateSecond = $('#formTop-2').validate({
  rules: {
    phone2: {
      required: true,
      validNumber: {
        object: phoneInput2,
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
      required: 'Это текстовое поле должно быть заполнено',
    },
    first_name: {
      required: 'Это текстовое поле должно быть заполнено',
    },
    last_name: {
      required: 'Это текстовое поле должно быть заполнено',
    },
    email: {
      email: 'Введите действующий адрес электронной почты!',
      required: 'Это текстовое поле должно быть заполнено',
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

$(window).on('load', function () {
  setTimeout(function () {
    var mask = jQuery('#phone2').attr('placeholder').replace(/[0-9]/g, 9);
    $(document).ready(function () {
      jQuery('#phone2').mask(mask);
    });
    jQuery('#phone2').on('countrychange', function (e, countryData) {
      jQuery('#phone2').val('');
      var mask = $('#phone2').attr('placeholder').replace(/[0-9]/g, 9);
      jQuery('#phone2').mask(mask);
    });
  }, 1000);
});

$.validator.addMethod(
  'alphanumeric',
  function (value, element) {
    return this.optional(element) || /^[a-zA-ZáéíóúàâêôãõüçÁÉÍÓÚÀÂÊÔÃÕÜÇ\s]+$/.test(value);
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
  'Введите правильный номер!',
);

$.validator.addMethod(
  'emailExt',
  function (value, element, param) {
    return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
  },
  'Введите действующий адрес электронной почты!',
);

$('#formTop').on('submit', function (e) {
  e.preventDefault();
  if ($('#formTop').valid()) {
    setDataForm($(e.currentTarget), phoneInput, objUTM, arrPixelID);
  }
});

$('#formTop-2').on('submit', function (e) {
  e.preventDefault();
  if ($('#formTop-2').valid()) {
    setDataForm($(e.currentTarget), phoneInput2, objUTM, arrPixelID);
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
    dataLead.ip = result.ip;
    submitForm(dataLead, arrPixelID);
  });
}

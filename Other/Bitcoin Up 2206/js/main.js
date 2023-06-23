const foo = async () => {
  const response = await $.ajax({
    url: 'https://get.geojs.io/v1/ip/geo.js',
    dataType: 'jsonp',
    jsonpCallback: 'geoip',
  });

  return response.ip;
};

// main form
var input = document.querySelector('#phone1');
var phoneInput = intlTelInput(input, {
  separateDialCode: true,
  utilsScript: 'js/utils.js',
  initialCountry: 'auto',
  geoIpLookup: function (success, failure) {
    $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
      var countryCode = resp.country ? resp.country : 'CL';
      $('#country').val(resp.countryCode);
      success(countryCode);
    });
  },
});

// modal form
var inputModal = document.querySelector('#phoneModal');
var phoneInputModal = intlTelInput(inputModal, {
  separateDialCode: true,
  utilsScript: 'js/utils.js',
  initialCountry: 'auto',
  geoIpLookup: function (success, failure) {
    $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
      var countryCode = resp.country ? resp.country : 'CL';
      $('#countryModal').val(resp.countryCode);
      success(countryCode);
    });
  },
});

const leadFormValidate = $('#leadform').validate({
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
      required: 'Este campo es obligatorio',
    },
    first_name: {
      required: 'Este campo es obligatorio',
    },
    last_name: {
      required: 'Este campo es obligatorio',
    },
    email: {
      email: 'Introduzca una dirección de correo electrónico válida',
      required: 'Este campo es obligatorio',
    },
  },
});

const leadFormModalValidate = $('#leadformModal').validate({
  rules: {
    phoneModal: {
      required: true,
      validNumber: {
        object: phoneInputModal,
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
    phoneModal: {
      required: 'Este campo es obligatorio',
    },
    first_name: {
      required: 'Este campo es obligatorio',
    },
    last_name: {
      required: 'Este campo es obligatorio',
    },
    email: {
      email: 'Introduzca una dirección de correo electrónico válida',
      required: 'Este campo es obligatorio',
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

  setTimeout(function () {
    var mask = jQuery('#phoneModal').attr('placeholder').replace(/[0-9]/g, 9);
    $(document).ready(function () {
      jQuery('#phoneModal').mask(mask);
    });
    jQuery('#phoneModal').on('countrychange', function (e, countryData) {
      jQuery('#phoneModal').val('');
      var mask = $('#phoneModal').attr('placeholder').replace(/[0-9]/g, 9);
      jQuery('#phoneModal').mask(mask);
    });
  }, 1000);
});

$.validator.addMethod(
  'alphanumeric',
  function (value, element) {
    return this.optional(element) || /^[a-zA-Zа-яА-ЯЁё\s]+$/.test(value); //RU
  },
  'Имя может содержать только буквы!',
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
  'Introduzca una dirección de correo electrónico válida',
);

$('#leadform').on('submit', function (e) {
  e.preventDefault();
  if ($('#leadform').valid()) {
    setDataForm($(e.currentTarget), phoneInput, objUTM);
  }
});

$('#leadformModal').on('submit', function (e) {
  e.preventDefault();
  if ($('#leadformModal').valid()) {
    setDataForm($(e.currentTarget), phoneInputModal, objUTM);
  }
});

function setDataForm(form, phoneIti, objUTM) {
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

  foo(dataLead).then((result) => {
    dataLead.ip = result;
    submitForm(dataLead);
  });
}

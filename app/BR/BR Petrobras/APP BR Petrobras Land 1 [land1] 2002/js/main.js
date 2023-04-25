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
    setDataForm($(e.currentTarget), phoneInput, objUTM);
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
    source: objUTM.source,
    target: objUTM.target,
    country: objUTM.country,
  };

  foo(dataLead).then((result) => {
    dataLead.ip = result;
    submitForm(dataLead);
  });
}

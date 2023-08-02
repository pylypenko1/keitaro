function submitForm(dataLead, arrPixelID) {
  $.ajax({
    type: 'POST',
    url: './proxy.php',
    data: {
      first_name: dataLead.first,
      last_name: dataLead.last,
      email: dataLead.email,
      phone: dataLead.phone,
      creo: dataLead.creo,
      buyer: dataLead.buyer,
      offer: dataLead.offer,
      target: dataLead.target,
      country: dataLead.country,
      ip: dataLead.ip,
    },
    complete: function (data) {
      if (data.responseText === 'success') {
        let urlAttr = '';
        for (var key in arrPixelID) {
          urlAttr += key + '=' + arrPixelID[key] + '&';
        }
        document.location.href = './thanks.php?' + urlAttr;
      } else if (data.responseText === 'double_email') {
        $('form').each(function () {
          $(this).find('input[type=email]').val('');
        });
        let modalFailureEmail = $('#modalFailureEmail');
        openModal(modalFailureEmail);
      } else if (data.responseText === 'double_phone') {
        $('form').each(function () {
          $(this).find('input[type=tel]').val('');
        });
        let modalFailure = $('#modalFailure');
        openModal(modalFailure);
      } else if (data.responseText === 'invalid') {
        $('form').each(function () {
          $(this).find('input[type=email]').val('');
        });
        let modalInvalid = $('#modalInvalid');
        openModal(modalInvalid);
      }
    },
  });
}
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
      quiz1: dataLead.quiz1,
      quiz2: dataLead.quiz2,
      quiz3: dataLead.quiz3,
      quiz4: dataLead.quiz4,
      quiz5: dataLead.quiz5,
      quiz6: dataLead.quiz6,
      quiz7: dataLead.quiz7,
      quiz8: dataLead.quiz8,
      ip: dataLead.ip,
    },
    complete: function (data) {
      if (data.responseText === 'success') {
        let urlAttr = '';
        for (var key in arrPixelID) {
          urlAttr += key + '=' + arrPixelID[key] + '&';
        }
        document.location.href = './thanks.html?' + urlAttr;
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
      } else {
        let urlAttr = '';
        for (var key in arrPixelID) {
          urlAttr += key + '=' + arrPixelID[key] + '&';
        }
        document.location.href = './thanks.html?' + urlAttr;
      }
    },
  });
}

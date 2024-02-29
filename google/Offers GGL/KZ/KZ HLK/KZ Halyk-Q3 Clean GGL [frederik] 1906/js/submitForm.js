function submitForm(dataLead) {
  $.ajax({
    type: 'POST',
    url: './proxy.php',
    data: {
      first_name: dataLead.first,
      last_name: dataLead.last,
      email: dataLead.email,
      phone: dataLead.phone,
      creo: dataLead.creo,
      offer: dataLead.offer,
      target: dataLead.target,
      country: dataLead.country,
      quiz1: dataLead.quiz1,
      quiz2: dataLead.quiz2,
      quiz3: dataLead.quiz3,
      quiz4: dataLead.quiz4,
      quiz5: dataLead.quiz5,
      ip: dataLead.ip,
    },
    complete: function (data) {
      if (data.responseText === 'success') {
        document.location.href = './thanks.php';
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
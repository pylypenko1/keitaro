function submitForm(dataLead) {

  $.ajax({
    type: "POST",
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
      source: dataLead.source,
      country: dataLead.country,
      ip: dataLead.ip
    },
    complete: function (data) {
      if (data.responseText === 'success') {

        document.location.href = "./thanks.html";

      } else if (data.responseText === 'double_email') {

        $("form").each(function () {
          $(this).find("input[type=email]").val('');
        });
        let modalFailureEmail = $("#modalFailureEmail");
        openModal(modalFailureEmail);

      } else if (data.responseText === 'double_phone') {

        $("form").each(function () {
          $(this).find("input[type=tel]").val('');
        });
        let modalFailure = $("#modalFailure");
        openModal(modalFailure);

      } else if (data.responseText === 'invalid') {

        $("form").each(function () {
          $(this).find("input[type=email]").val('');
        });
        let modalInvalid = $("#modalInvalid");
        openModal(modalInvalid);

      }
    }
  });
}
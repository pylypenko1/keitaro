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
      country: dataLead.country,
      ip: dataLead.ip,
      source: dataLead.source
    },
    complete: function (data) {
      console.log(data.responseText);
      if (data.responseText === 'success') {

        document.location.href = "./thanks.html";

      } else if (data.responseText === "double_email") {

        $("form").each(function () {
          $(this).find("input[type=email]").val('');
        });
        let modalFailureEmail = $("#modalFailureEmail");
        openModalForm(modalFailureEmail);

      } else if (data.responseText === "double_phone") {

        $("form").each(function () {
          $(this).find("input[type=tel]").val('');
        });
        let modalFailure = $("#modalFailure");
        openModalForm(modalFailure);

      } else if (data.responseText === "invalid") {

        $("form").each(function () {
          $(this).find("input[type=email]").val('');
        });
        let modalInvalid = $("#modalInvalid");
        openModalForm(modalInvalid);

      }
    }
  });
}
function submitForm(dataLead) {

  utmUrl = "?" + "buyer=" + dataLead.buyer +
    "&" + "targ=" + dataLead.target +
    "&" + "creo=" + dataLead.creo +
    "&" + "first=" + dataLead.first +
    "&" + "source=" + dataLead.source +
    "&" + "email=" + dataLead.email + "&";

  document.location.href = "./offer.html" + utmUrl;

}
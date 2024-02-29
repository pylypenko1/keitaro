function submitForm(dataLead, arrPixelID) {

  utmUrl = "?" + "buyer=" + dataLead.buyer +
    "&" + "targ=" + dataLead.target +
    "&" + "creo=" + dataLead.creo +
    "&" + "first=" + dataLead.first +
    "&" + "email=" + dataLead.email + "&";

  let urlAttr = '';
  for (key in arrPixelID) {
    urlAttr += key + '=' + arrPixelID[key] + '&'
  }

  document.location.href = "./offer.html" + utmUrl + urlAttr;

}
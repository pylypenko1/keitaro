function checkCookiesPhone(phone) {
  if (get_cookie("phone") === phone) {
    let $modalFailure = $("#modalFailure");
    openModal($modalFailure);
  }else{
    return true
  }
}

function get_cookie(cookie_name) {
  var results = document.cookie.match(
    "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
  );

  if (results && results[2] != "undefined" && results[2] != "undefined")
    return unescape(results[2]);
  else return null;
}

function set_coookie(cookie_name, cookie_value, lifeTime) {
  // lifeTime в днях
  let date = new Date();

  if (lifeTime === undefined) {
    var newDate = date.setFullYear(date.getFullYear() + 3); // Устанавливаю конец даты cookie через 3 года от текущей даты
  } else {
    var newDate = date.setDate(date.getDate() + lifeTime);
  }

  let expires = new Date(newDate);
  document.cookie =
    cookie_name +
    "=" +
    cookie_value +
    ";" +
    "expires=" +
    expires.toUTCString() +
    ";";
}

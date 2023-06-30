function setFormattedDate() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  // Добавляем ведущий ноль, если число меньше 10
  if (day < 10) {
    day = '0' + day;
  }

  // Добавляем ведущий ноль, если месяц меньше 10
  if (month < 10) {
    month = '0' + month;
  }

  var formattedDate = day + '/' + month + '/' + year;
  document.getElementById('landingDate').innerText = formattedDate;
}

function setFormattedTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  // Добавляем ведущий ноль, если часы или минуты меньше 10
  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  var formattedTime = hours + ':' + minutes;
  document.getElementById('landingTime').innerText = formattedTime;
}

// var day = document.querySelectorAll('day');
// var numberDay = document.querySelectorAll('numberDay');
// var month = document.querySelectorAll('months');

// var objToday = new Date(),
//   dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
//   months = new Array(
//     'янв',
//     'фев',
//     'мар',
//     'апр',
//     'май',
//     'июн',
//     'июл',
//     'авг',
//     'сен',
//     'окт',
//     'ноя',
//     'дек',
//   ),
//   curMonth = months[objToday.getMonth()];

// var today = ' ' + dayOfMonth + ' ' + curMonth;

// document.getElementsByClassName('date-today')[0].textContent = today;

var objToday = new Date(),
  dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
  months = new Array(
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ),
  weekday = new Array(
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ),
  dayOfWeek = weekday[objToday.getDay()],
  curMonth = months[objToday.getMonth()];

var today = dayOfMonth;

document.getElementsByClassName('numberDay')[0].textContent = today;
document.getElementsByClassName('month')[0].textContent = curMonth;
document.getElementsByClassName('day')[0].textContent = dayOfWeek;

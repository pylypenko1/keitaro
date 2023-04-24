var objToday = new Date(),
  dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
  months = new Array(
    'January',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ),
  curMonth = months[objToday.getMonth()];

var today = dayOfMonth + ' ' + curMonth;
document.getElementsByClassName('date')[0].textContent = today;

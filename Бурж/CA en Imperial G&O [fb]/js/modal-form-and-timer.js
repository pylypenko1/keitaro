function showModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function () {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
};

setTimeout(showModal, 15000);

var startDate;

if (localStorage.getItem('startDate')) {
  startDate = new Date(localStorage.getItem('startDate'));
} else {
  startDate = new Date();
  startDate.setHours(startDate.getHours() + 1); // Начнем отсчет с 1 часа вперед от текущего времени
  localStorage.setItem('startDate', startDate);
}
setTimer(startDate);

function setTimer(startDate) {
  var deadline = new Date(startDate.getTime() + 1 * 60 * 60 * 1000); // Устанавливаем дедлайн на 1 час вперед от startDate
  initializeClock('timer', deadline);
}

// Получение оставшегося времени
function getTimeRemaining(endtime) {
  var t = endtime - new Date();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

// Инициализация таймера
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      startDate = new Date();
      startDate.setHours(startDate.getHours() + 1); // Устанавливаем новое начальное время через 1 час от текущего времени
      localStorage.setItem('startDate', startDate);
      var deadline = new Date(startDate.getTime() + 1 * 60 * 60 * 1000); // Устанавливаем новый дедлайн на 1 час вперед от новой startDate
      initializeClock('timer', deadline);
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

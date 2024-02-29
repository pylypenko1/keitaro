let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
let currentDate = document.querySelectorAll('.full_date');
for (let i = 0; i < currentDate.length; i++) { currentDate[i].innerHTML = today; }

// COUNTDOWN========================================================================================
$(document).ready(function() {

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            //    'days': days,
            //    'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        //  var daysSpan = clock.querySelector('.days');
        //  var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);
            //    hoursSpan.innerHTML = t.hours;
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var now = Date.parse(new Date());
    var seconds = Math.floor((now / 1000) % 60);
    var minutes = Math.floor((now / 1000 / 60) % 60);
    var left_to_hour = 60 * 60 * 1000 - (minutes * 60 + seconds) * 1000;
    // add an hour if 15 minutes or less
    if (left_to_hour < (15 * 60000)) {
        left_to_hour += 3600000
    }
    // add 100 days
    var deadline = new Date(now + left_to_hour + 100 * 24 * 60 * 60 * 1000);
    initializeClock('upComingTime', deadline);

});

$('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({ scrollTop: $(aid).offset().top - 200 }, 'slow');
});

let yearOutputEl = document.querySelector('.year-output');

yearOutputEl.innerHTML = new Date().getFullYear();
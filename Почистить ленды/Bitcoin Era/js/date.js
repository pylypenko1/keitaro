var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var today = new Date();
var lastWeek = new Date(today.getMonth())
function getNextWeek() {
    var nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return nextWeek;
}
var nextWeek = getNextWeek();
var nextWeekWord = monthNames[nextWeek.getMonth()];
var nextWeekDate = nextWeek.getDate();
var nextWeekMonth = nextWeek.getMonth() + 1;
var nextWeekYear = nextWeek.getFullYear();
var nextWeekDisplayPadded = ("00" + nextWeekDate.toString()).slice(-2) + ", " + ("0000" + nextWeekYear.toString()).slice(-4);
$('.next-day').text(weekday[today.getDay()])
$('.next-week').text(nextWeekWord + ' ' + nextWeekDisplayPadded)
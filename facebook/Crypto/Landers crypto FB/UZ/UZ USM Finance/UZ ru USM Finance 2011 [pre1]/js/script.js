// Local Storage Date Post
function formatDateTime(date) {
    const months = [
        "янв", "фев", "мар", "апр", "май", "июн",
        "июл", "авг", "сен", "окт", "ноя", "дек"
    ];

    const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${formatTime(date)}`;
    return formattedDate;
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}

function updateDateTime() {
    let storedDateTime = localStorage.getItem('storedDateTime');

    if (!storedDateTime) {
        // Если данные еще не сохранены в localStorage, то устанавливаем текущее время на 124 минуты назад
        const now = new Date();
        now.setMinutes(now.getMinutes() - 124); // 124 минуты назад
        storedDateTime = formatDateTime(now);
        localStorage.setItem('storedDateTime', storedDateTime);
    }

    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = storedDateTime;
}
updateDateTime();

// Yesterday Date
function getYesterdayDate() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const months = [
        "янв", "фев", "мар", "апр", "май", "июн",
        "июл", "авг", "сен", "окт", "ноя", "дек"
    ];

    const day = yesterday.getDate();
    const month = months[yesterday.getMonth()];

    return day + ' ' + month;
}

// Функция, которая будет вызываться для отображения даты на странице
function displayYesterdayDate() {
    const yesterdayDateElements = document.querySelectorAll('.yesterdayDate');
    if (yesterdayDateElements) {
        yesterdayDateElements.forEach(element => {
            element.textContent = getYesterdayDate();
        });
    }
}

// Вызов функции при загрузке страницы
displayYesterdayDate();
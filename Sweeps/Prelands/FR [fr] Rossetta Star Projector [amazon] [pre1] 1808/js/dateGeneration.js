function addDates() {
    const dateElements = document.querySelectorAll('.date');
    const currentDate = new Date();

    // Массив с количеством дней назад для каждого элемента
    const daysAgoArray = [1, 2, 4, 4, 5, 6, 8, 8, 9, 10];

    // Добавляем даты согласно указанным правилам
    for (let i = 0; i < dateElements.length; i++) {
        const daysAgo = daysAgoArray[i];
        const targetDate = new Date(currentDate);
        targetDate.setDate(currentDate.getDate() - daysAgo);

        const day = targetDate.getDate().toString().padStart(2, '0');
        const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
        const year = targetDate.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        dateElements[i].textContent = formattedDate;
    }
}

window.onload = addDates;
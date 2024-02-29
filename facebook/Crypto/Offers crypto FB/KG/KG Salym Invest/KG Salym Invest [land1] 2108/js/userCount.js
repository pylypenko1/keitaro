// Получаем элементы счетчиков
const userCountElement = document.getElementById('userCount') || '';
const freeSpaceElement = document.getElementById('freeSpace') || '';

// Получаем сохраненные значения из localStorage или устанавливаем значения по умолчанию
let userCount = parseInt(localStorage.getItem('userCount')) || getRandomNumber(130, 260);
let freeSpace = parseInt(localStorage.getItem('freeSpace')) || 20;

// Обновляем значения счетчиков
userCountElement.textContent = userCount;
freeSpaceElement.textContent = freeSpace;

// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для обновления значения счетчика пользователей
function updateUserCount() {
    const newCount = getRandomNumber(150, 300); // Генерируем случайное число от 150 до 300

    // Обновляем значение счетчика и сохраняем в localStorage
    userCount = newCount;
    userCountElement.textContent = userCount;
    localStorage.setItem('userCount', userCount);

    // Вызываем функцию обновления счетчика через 3-5 секунд
    setTimeout(updateUserCount, getRandomNumber(3000, 5000));
}

// Функция для обновления значения счетчика свободных мест
function updateFreeSpace() {
    if (freeSpace > 3) {
        freeSpace--; // Уменьшаем значение на 1
    } else if (freeSpace <= 3) {
        freeSpace = getRandomNumber(2, 6); // Генерируем случайное число от 2 до 6
    }

    freeSpaceElement.textContent = freeSpace;
    localStorage.setItem('freeSpace', freeSpace);

    // Вызываем функцию обновления счетчика через 20 секунд
    setTimeout(updateFreeSpace, 20000);
}

// Запускаем обновление счетчиков
updateUserCount();
updateFreeSpace();
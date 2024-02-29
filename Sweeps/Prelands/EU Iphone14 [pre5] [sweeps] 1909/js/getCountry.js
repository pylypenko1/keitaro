// Функция для обновления информации о стране и валюте
function updateCountryAndCurrencyInfo() {
  // Получаем информацию о стране по IP-адресу с использованием сервиса GeoJS.io
  fetch('https://get.geojs.io/v1/ip/geo.json')
    .then((response) => response.json())
    .then((data) => {
      const countryName = data.country; // Получаем название страны

      const countryInfoElements = document.querySelectorAll('.countryInfo');
      const currencySymbolElements = document.querySelectorAll('.currencySymbol');

      // Обновляем информацию о стране на странице
      countryInfoElements.forEach((element) => {
        element.textContent = `${countryName}`;
      });

      // Получаем информацию о валюте по названию страны
      getCurrencySymbolForCountry(countryName);
    })
    .catch((error) => {
      console.error('Ошибка при определении страны по IP-адресу:', error);
    });
}

// Функция для получения информации о валюте по названию страны
function getCurrencySymbolForCountry(countryName) {
  // Отправляем запрос к API для получения информации о стране
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty('currencies')) {
        const currencies = data[0].currencies;
        const currencyCode = Object.keys(currencies)[0]; // Получаем код валюты
        const currencySymbol = currencies[currencyCode].symbol; // Получаем знак валюты
        
        // Обновляем информацию о валюте на странице
        const currencySymbolElements = document.querySelectorAll('.currencySymbol');
        currencySymbolElements.forEach((element) => {
          element.textContent = `${currencySymbol}`;
        });
      } else {
        console.error('Информация о валюте не найдена');
      }
    })
    .catch((error) => {
      console.error('Ошибка при получении информации о валюте:', error);
    });
}

// Вызываем функцию для обновления информации о стране и валюте при загрузке страницы
updateCountryAndCurrencyInfo();


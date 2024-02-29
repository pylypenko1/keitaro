// Функция для отслеживания события Initiate Checkout при заполнении любого инпута
function initiateCheckoutEvent() {
  fbq('track', 'InitiateCheckout'); // Отправляем событие Initiate Checkout на Facebook пиксель
}

// Получаем все инпуты внутри формы
var formInputs = document.querySelectorAll('form input');

// Применяем обработчик события для каждого инпута
formInputs.forEach(function (input) {
  input.addEventListener('input', initiateCheckoutEvent);
});

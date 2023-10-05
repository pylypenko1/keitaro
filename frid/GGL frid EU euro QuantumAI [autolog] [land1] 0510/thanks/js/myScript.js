 // Отключаем скролл body
 document.body.style.overflow = 'hidden';

 // Закрываем модальное окно при клике на затемненный фон или кнопку "Close"
 function closeModal() {
   document.getElementById('modal-overlay').style.display = 'none';
   document.body.style.overflow = 'auto';
 }

 document.getElementById('modal-overlay').addEventListener('click', function (event) {
   if (event.target === this) {
     closeModal();
   }
 });

 var closeButtons = document.getElementsByClassName('close-btn');
 for (var i = 0; i < closeButtons.length; i++) {
   closeButtons[i].addEventListener('click', closeModal);
 }

 setInterval(function generate() {
   var el = document.getElementById('user-num');
   var randomNum = parseInt(el.innerText) - 1;
   if (randomNum < 5) {
     el.innerHTML = '5';
   } else {
     el.innerHTML = randomNum;
   }
 }, 7500);

 // Вы можете добавить другую логику, чтобы модальное окно закрывалось по другим действиям пользователя
// Открытие модального окна
var openModalButtons = document.querySelectorAll('.openModal');
openModalButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
  });
});

// Закрытие модального окна
document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('myModal').style.display = 'none';
});

// Закрытие модального окна при клике за его пределами
window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = 'none';
  }
});

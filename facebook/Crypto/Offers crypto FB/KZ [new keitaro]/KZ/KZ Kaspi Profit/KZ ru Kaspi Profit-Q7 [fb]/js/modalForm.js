document.addEventListener("DOMContentLoaded", function () {
    // MODAL FORM
    // Отображение модального окна по нажатию на кнопку
    const getFormButtons = document.querySelectorAll(".get-form");
    if (getFormButtons) {
        getFormButtons.forEach((button) => {
            button.addEventListener("click", () => {
                displayModal();
                disableScroll();
            });
        });
    }

    // // Отображение модального окна через 65 секунд
    // setTimeout(() => {
    //     displayModal();
    //     disableScroll();
    // }, 65000);

    // Функция для отображения модального окна
    function displayModal() {
        // Показать модальное окно, установив его стиль display в "flex"
        const modal = document.querySelector(".modal-form");
        if (modal) {
            modal.style.display = "flex";
        }
    }

    // Закрытие модального окна при нажатии на элемент с классом ".modal-close"
    const modalCloseButtons = document.querySelectorAll(".modal-close");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (modalCloseButtons) {
        modalCloseButtons.forEach((button) => {
            button.addEventListener("click", () => {
                closeModal();
                enableScroll();
            });
        });
    }

    // Функция для закрытия модального окна
    function closeModal() {
        // Скрыть модальное окно, установив его стиль display в "none"
        const modal = document.querySelector(".modal-form");
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Функция для запрета прокрутки страницы
    function disableScroll() {
        // Предотвращение прокрутки на мобильных устройствах
        if (isMobile) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('touchmove', preventScroll, {
                passive: false
            });
        }
    }

    // Функция для разрешения прокрутки страницы
    function enableScroll() {
        // Восстановление прокрутки на мобильных устройствах
        if (isMobile) {
            document.body.style.overflow = '';
            document.removeEventListener('touchmove', preventScroll);
        }
    }

    function preventScroll(event) {
        event.preventDefault();
    }
});
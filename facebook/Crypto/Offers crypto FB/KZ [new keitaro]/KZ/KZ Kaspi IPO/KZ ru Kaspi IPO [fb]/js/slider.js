// Функция инициализации слайдера
function initSlider(sliderContainer) {
    const slidesContainer = sliderContainer.querySelector('.sliders-block');
    const slides = Array.from(slidesContainer.getElementsByClassName('slide'));
    const sliderPrev = sliderContainer.querySelector('.slider-prev');
    const sliderNext = sliderContainer.querySelector('.slider-next');

    // Переключение на предыдущий слайд
    sliderPrev.addEventListener('click', () => {
        const currentIndex = slides.findIndex((slide) => slide.classList.contains('active'));
        const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        activateSlide(slides, prevIndex);
    });

    // Переключение на следующий слайд
    sliderNext.addEventListener('click', () => {
        const currentIndex = slides.findIndex((slide) => slide.classList.contains('active'));
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        activateSlide(slides, nextIndex);
    });

    // Функция для активации текущего слайда
    function activateSlide(slides, index) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');

        // Прокручиваем контейнер слайдов, чтобы активный слайд был видимым
        slidesContainer.scrollLeft = slides[index].offsetLeft;
    }

    // По умолчанию активируем первый слайд
    activateSlide(slides, 0);
}

// Получаем все контейнеры слайдеров на странице
const sliderContainers = Array.from(document.getElementsByClassName('slider-container'));

// Инициализируем каждый слайдер отдельно
sliderContainers.forEach((sliderContainer) => {
    initSlider(sliderContainer);
});
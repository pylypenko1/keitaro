var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //     delay: 4500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



const
    range = document.getElementById('range'),
    tooltip = document.getElementById('tooltip'),
    setValue = () => {
        const
            newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
            newPosition = 16 - (newValue * 0.32),
            rangeValue = parseInt(range.value),
            calculatedValue = rangeValue * 5,
            percentageValue = Math.round((newValue + Number.EPSILON) * 100) / 100; // Rounded to 2 decimal places
        tooltip.innerHTML = `<span>При вложении  ${rangeValue} € </span>
                         <span class="mainRange">${calculatedValue}€/нд</span>
                         <span>Ваш доход</span>`;
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);




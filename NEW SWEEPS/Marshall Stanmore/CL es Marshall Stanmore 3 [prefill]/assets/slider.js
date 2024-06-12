'use strict';

const mainSlider = new Swiper('.main-s', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 0,
	effect: 'fade',
	speed: 400,
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: '.main-s__next',
		prevEl: '.main-s__prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const subSlides = document.querySelectorAll('.first__btn');
const firstColors = document.querySelectorAll('.first__color');

subSlides.forEach(function (subSlide, index) {
	subSlide.addEventListener('click', function () {
		const selectedProduct = this.getAttribute('data-product');
		const mainSlides = document.querySelectorAll('.main-s__slide');

		subSlides.forEach(function (btn) {
			btn.classList.remove('active');
		});

		firstColors.forEach(function (firstColor) {
			firstColor.classList.remove('active');
		});

		this.classList.add('active');

		firstColors[index].classList.add('active');

		mainSlides.forEach(function (mainSlide) {
			if (mainSlide.getAttribute('data-product') === selectedProduct) {
				mainSlide.style.display = 'block';
			} else {
				mainSlide.style.display = 'none';
			}
		});

		mainSlider.update();
		mainSlider.slideTo(0);
	});
});

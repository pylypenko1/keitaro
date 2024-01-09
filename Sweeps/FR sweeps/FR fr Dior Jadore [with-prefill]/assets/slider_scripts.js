$(document).ready(function () {
	setTimeout(function () {
		$('.loader-wrp').fadeOut();
	}, 2000);

	$('.product-slider-nav__item').click(function (e) {
		e.preventDefault();
		let currentProduct = $(this);
		let currentProductName = currentProduct.attr('data-product-name')
		currentProduct.siblings().removeClass('active');
		currentProduct.addClass('active');
		$('.product-name-block__value').text(currentProductName);
		let currentProductIndex = currentProduct.index();
		$('.product-descript-list').find('.product-descript-list__item').removeClass('active');
		$('.product-descript-list').find('.product-descript-list__item').eq(currentProductIndex).addClass('active');
		$('.main-roduct-slider-for').find('.main-roduct-slider-for__item').removeClass('active');
		$('.main-roduct-slider-for').find('.main-roduct-slider-for__item').eq(currentProductIndex).addClass('active');
		$('.main-roduct-slider-for__item').slick('setPosition');

		$('.win-text').text(currentProductName);
		let winImage = currentProduct.find('.product-slider-nav__image').attr('src');
		$('.win-image').attr('src', winImage);
	});


	//Слайдер с продуктом

	$window = $(window);
	$slick_slider = $('.main-roduct-slider-for__item');
	settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		arrows: true,
		dots: false,
		infinite: true,
		fade: true,
		swipe: true,
	};
	$slick_slider.slick(settings);

	$window.on('resize', function () {
		if ($window.width() > 768) {
			if ($slick_slider.hasClass('slick-initialized'))
				$slick_slider.slick('unslick');
			return
		}
		if (!$slick_slider.hasClass('slick-initialized'))
			return $slick_slider.slick(settings);
	});

	if ($window.width() > 768) {
		if ($slick_slider.hasClass('slick-initialized'))
			$slick_slider.slick('unslick');
		return
	}





});

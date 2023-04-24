document.getElementById("timer").innerHTML = 05 + ":" + 00;
startTimer();

function startTimer() {
	var presentTime = document.getElementById("timer").innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1] - 1);
	if (s == 59) {
		m = m - 1;
	}
	//if(m<0){alert('timer completed')}

	document.getElementById("timer").innerHTML = m + ":" + s;
	setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
	if (sec < 10 && sec >= 0) {
		sec = "0" + sec;
	} // add zero in front of numbers < 10
	if (sec < 0) {
		sec = "59";
	}
	return sec;
}

/////////////////

$(".elementor-tab-title").click(function (e) {
	$(".elementor-tab-title").removeClass("elementor-active");
	$(".elementor-tab-content").removeClass("elementor-active");
	$(this).toggleClass("elementor-active");
	$(this).next(".elementor-tab-content").toggleClass("elementor-active");
});

///////////////////////////////

$(".scrl").on("click", function () {
	$("html, body").animate(
		{
			scrollTop: $("#reg-form-bot").offset().top,
		},
		1000,
	);
});

//////////////////////////

document.getElementById("year").innerHTML = new Date().getFullYear();

////////////////////////////////

new Swiper(".swiper-2", {
	loop: true,
	nextButton: ".elementor-swiper-button-next",
	prevButton: ".elementor-swiper-button-prev",
	slidesPerView: 1,
	paginationClickable: true,
	// speed: 3000,
	// // autoplay
	// autoplay: true,
});

new Swiper(".swiper-1", {
	loop: true,
	slidesPerView: 1,
	paginationClickable: true,
	speed: 2000,
	// autoplay
	autoplay: 4000,
	pagination: {
		el: ".swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets",
		clickable: true,
	},
});
new Swiper(".swiper-3", {
	loop: true,
	slidesPerView: 3,
	// paginationClickable: true,
	speed: 3000,
	// autoplay
	autoplay: true,
});
new Swiper(".swiper-4", {
	loop: true,

	slidesPerView: 3,
	// paginationClickable: true,
	speed: 3000,
	// autoplay
	autoplay: true,
});
new Swiper(".swiper-5", {
	loop: true,
	slidesPerView: 1,
	paginationClickable: true,
	speed: 2000,
	// // autoplay
	autoplay: 4000,
});
/////////////////////////

var myFix = document.getElementById("fixfoot");

var myLoadFix = function () {
	var top = window.pageYOffset || document.documentElement.scrollTop;
	if (top >= 500) {
		myFix.className = "sticky-foot show-foot";
	} else {
		myFix.className = "sticky-foot hide-foot";
	}
};

var myScrollFunc = function () {
	var y = window.scrollY;
	if (y >= 500) {
		myFix.className = "sticky-foot show-foot";
	} else {
		myFix.className = "sticky-foot hide-foot";
	}
};

window.addEventListener("load", myLoadFix);

window.addEventListener("scroll", myScrollFunc, 1000);

$(document).ready(function () {
	$(".scroll_f").on("click", function (event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(".block_form").offset().top}, 500);
	})
})
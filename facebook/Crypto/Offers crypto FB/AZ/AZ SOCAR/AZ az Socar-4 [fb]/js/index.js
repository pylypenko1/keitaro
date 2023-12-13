$(function () {
	$(".js-range-slider").ionRangeSlider({
		skin: "round",
		min: 200,
		max: 100000,
		from: 250,
		max_postfix: "+",
		postfix: "₼",
		grid: true,
		onStart: function (data) {
			$("#calcResult").text(
				Math.round(data.from * 0.85 + data.from) + " ₼",
			);
		},
		onChange: function (data) {
			$("#calcResult").text(
				Math.round(data.from * 0.85 + data.from) + " ₼",
			);
		},
	});
});

////////////////////////////////////

$(".scrl-top").on("click", function (e) {
	document
		.querySelector("#registration")
		.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////////////////

document.getElementById("year").innerHTML = new Date().getFullYear();

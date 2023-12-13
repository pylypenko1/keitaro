$(document).ready(function () {
	$(".bq1").click(function () {
		// bq - button question, q1 - question

		$("#q1").fadeOut("slow", function () {
			$("#q2").fadeIn("slow");
		});
	}),
		$(".bq2").click(function () {
			$("#q2").fadeOut("slow", function () {
				$("#q3").fadeIn("slow");
			});
		}),
		$(".bq3").click(function () {
			$("#q3").fadeOut("slow", function () {
				$(".questions").remove();

				$([document.documentElement, document.body]).animate(
					{
						scrollTop: $(".header").offset().top,
					},

					500
				);
			}),
				$("#content1").fadeOut("slow", function () {
					$("#content1").remove(),
						$("#comments_display_one").remove(),
						$("#content2").fadeIn(),
						setTimeout(function () {
							$("#result1").fadeIn(1e3);
						}, 3e3),
						setTimeout(function () {
							$("#result2").fadeIn(1e3);
						}, 4100),
						setTimeout(function () {
							$("#result3").fadeIn(1e3);
						}, 6e3);

					setTimeout(function () {
						$("#content2").fadeOut("slow", function () {
							$("#content2").remove(),
								"undefined" != typeof roulette_ini
									? rouletteRoot._init()
									: "undefined" != typeof box_ini && boxRoot._init(),
								$("#content3").fadeIn();
						});
					}, 7100);
				});
		});
});

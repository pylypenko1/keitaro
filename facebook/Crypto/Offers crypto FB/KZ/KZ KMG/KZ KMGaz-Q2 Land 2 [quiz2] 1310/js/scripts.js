
$('.next-step').click(function(){
	$('#first').hide();
	$('#question-1').show();
});

$('input[type="radio"]').click(function(){
	let index = parseInt($(this).parents('.questions').index());
	let answer = ';' + $(this).val();

	let answers = $('input[name="answers"]').val();
	answers += answer;

	$('input[name="answers"]').val(answers);

	$('.btn-continue').prop('disabled', false);
	setTimeout(function(){
		$('.btn-continue').prop('disabled', true);
		$('#question-' + index).hide();
		$('#question-' + (++index)).show();
	}, 600);
});

$('.btn-back').click(function(){
	let index = parseInt($(this).parents('.questions').index());

	if (index !== 1) {
		$('#question-' + index).hide();
		$('#question-' + (--index)).show();
	}
	else {
		window.location.reload();
	}
});
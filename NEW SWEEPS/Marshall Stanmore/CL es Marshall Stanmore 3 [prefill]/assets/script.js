document.addEventListener('DOMContentLoaded', function () {
	const modals = document.querySelectorAll('.p_modal');
	const question = document.querySelector('#q4');
	const boxesWrapper = document.querySelector('#boxes');
	const commentsContent = document.querySelector('#comments');
	const okModalButton = document.querySelector('.p_modal_button');

	const modal1 = document.querySelector('#p_modal1');
	const bq3Btn = document.querySelectorAll('[data-answer]');
	const giftImg = document.querySelectorAll('.caja_gift-img');
	const giftImgModal = document.querySelector('.gift-img-modal');
	const giftImgWin = document.querySelector('.img_gift');
	const orderItemImage = document.querySelector('.order-item__image');

	function displayGift(event) {
		let answer = event.target.dataset.answer;
		const images = {
			black: 'black.webp',
			cream: 'cream.webp',
			brown: 'brown.webp',
		};
		let imgPath;

		if (answer) {
			imgPath = `assets/${images[answer]}`;
		} else {
			imgPath = `assets/black.webp`;
		}
		let imgItems = Object.values(giftImg);

		imgItems.map((item) => {
			item.src = imgPath;
		});
		giftImgModal.src = imgPath;
		orderItemImage.src = imgPath;
		giftImgWin.src = imgPath;
		// return imgPath;
	}
	question.addEventListener('click', (e) => displayGift(e));

	function hideBoxes() {
		boxesWrapper.style.display = 'none';
		// commentsContent.style.display = 'none';
		// footer.style.display = "none";
	}

	const showBoxes = () => {
		boxesWrapper.style.display = 'block';
		// commentsContent.style.display = 'block';
		// footer.style.display = "block";
	};

	question.addEventListener('click', hideBoxes);
	okModalButton.addEventListener('click', showBoxes);

	document.querySelectorAll('.survey_button, .question__btn').forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});
});

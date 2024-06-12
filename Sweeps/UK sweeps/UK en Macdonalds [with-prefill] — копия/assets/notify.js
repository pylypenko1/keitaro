class Notify {
	constructor(container) {
		this.lang = {
			from: '',
		};

		this.container = document.querySelector(container);
		this.items = document.createElement('ul');
		this.items.classList.add('notifications__items');
		this.container.appendChild(this.items);
	}

	create({ title, desc, img }) {
		const html = `
								<div class="notifications__item-box">
								<div class="notifications__content">
									<h3>${title}</h3>
									<p>${desc}</p>
								</div>
								<div class="notifications__img">
									<img src="${img}" loading="eager" />
								</div>
								</div>
								<div class="notifications__btn">
								<img
									class="notifications__btn-close"
									src="assets/notifications-close.svg" />
								</div>
                `;
		const item = document.createElement('li');
		item.classList.add('notifications__item', 'showNoty');
		item.innerHTML = html;
		item.addEventListener('click', (e) => e.currentTarget.remove());
		return item;
	}
	send(obj) {
		const item = this.create(obj);
		this.items.prepend(item);
		return item;
	}

	hide(element) {
		setTimeout(() => {
			element.classList.remove('showNoty');
			element.classList.add('hiddenNoty');
			setTimeout(() => {
				element.remove();
			}, 1000);
		}, 7000);
	}
}

const data = [
	{
		title: 'Hurry up!',
		desc: 'Marshall Stanmore III - stock balance is (10) units',
		img: 'assets/black.webp',
	},
	{
		title: 'Hurry up!',
		desc: 'Marshall Stanmore III - stock balance is (7) units',
		img: 'assets/black.webp',
	},
];

const notify = new Notify('.notifications');
const timer = (ms) => {
	return new Promise((res, rej) => {
		setTimeout(() => res(), ms);
	});
};

const random = (min, max) => {
	return Math.round(min + Math.random() * (max - min));
};

const timeoutMs = 14000;

data.forEach((el, i) => {
	timer(i ? random(40000, 70000) : timeoutMs).then(() => {
		const item = notify.send(el);
		notify.hide(item);
	});
});

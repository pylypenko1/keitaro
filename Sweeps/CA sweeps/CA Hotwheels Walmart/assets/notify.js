class Notify {
	constructor(i) {
		(this.lang = {
			from: "it",
		}),
			(this.container = document.querySelector(".root")),
			(this.items = document.createElement("div")),
			this.items.classList.add("notifications"),
			this.container.appendChild(this.items);
	}

	create({ name: i, address: t, desc: e, img: n }) {
		const getRandomNumber = (min, max) => {
			return Math.round(Math.random() * (max - min) + min);
		};

		const o = `\n

      <div class="notification__wrapper">\n

        <div class="notification__body">\n

          <img class="notification__img" src="${n}" />\n



          <div class="notification__info">\n

            <div class="notification__subtitle">\n

              <b class="notification__name">${i}</b> from\n

              <span class="notification__city">${t}</span>\n

            </div>\n

            <div class="notification__title">\n

            won ${e}\n

            </div>\n

            <div class="notification__subtitle">\n

              <span>${getRandomNumber(10, 59)} seconds ago</span>\n

              <img class="notification__checkmark" src="./assets/notification-ok.svg" alt="">\n

            </div>\n

          </div>\n

        </div>\n



        <button class="notification__close">\n

          <img class="notification__closeIcon" src="./assets/notifications-close.svg" height="15px" width="15px" alt="">\n

        </button>\n

      </div>\n`,
			a = document.createElement("div");

		return (
			a.classList.add("notification", "notification_showed"),
			(a.innerHTML = o),
			a.addEventListener("click", (i) => i.currentTarget.remove()),
			a
		);
	}

	send(i) {
		const t = this.create(i);

		return this.items.prepend(t), t;
	}

	hide(i) {
		setTimeout(() => {
			i.classList.remove("notification_showed"),
				i.classList.add("notification_hidden"),
				setTimeout(() => {
					i.remove();
				}, 1500);
		}, 7500);
	}
}

const prodImg = "./assets/prod-transparent.png";

const prodName = "Set of Hot Wheels cars";

const data = [
	{
		name: "Christopher Campbell",

		address: "Canada",

		desc: `${prodName}`,

		img: `${prodImg}`,
	},

	{
		name: "James Murphy",

		address: "Canada",

		desc: `${prodName}`,

		img: `${prodImg}`,
	},

	{
		name: "Daniel Roberts",

		address: "Canada",

		desc: `${prodName}`,

		img: `${prodImg}`,
	},

	{
		name: "Matthew Turner",

		address: "Canada",

		desc: `${prodName}`,

		img: `${prodImg}`,
	},

	{
		name: "Ethan Wilson",

		address: "Canada",

		desc: `${prodName}`,

		img: `${prodImg}`,
	},
],
	notify = new Notify(".notifications"),
	timer = (i) =>
		new Promise((t, e) => {
			setTimeout(() => t(), i);
		}),
	random = (i, t) => Math.round(i + Math.random() * (t - i)),
	timeoutMs = 2e4;

data.forEach((i, t) => {
	var e;

	((e = t ? (6e4, 18e4, Math.round(6e4 + 12e4 * Math.random())) : 2e4),
		new Promise((i, t) => {
			setTimeout(() => i(), e);
		})).then(() => {
			const t = notify.send(i);

			notify.hide(t);
		});
});

// date

jQuery(document).ready(function () {
	function d(h) {
		var j,
			k,
			i = h,
			g = setInterval(function () {
				(j = parseInt(i / 60, 10)),
					(k = parseInt(i % 60, 10)),
					(k = 10 > k ? "0" + k : k),
					$("#timerr").text(j + " " + minutos_y + k + " " + segundos),
					--i < 0 && clearInterval(g);
			}, 1000);
	}

	if (jQuery("#timerr").length >= 1) {
		d(2 * 60 + 10);
	}

	function f(g) {
		if (g < 10) {
			g = "0" + g;
		}

		return g;
	}

	var b = new Date();

	var a = f(b.getHours()) + ":" + f(b.getMinutes());

	jQuery(".p_var-dia").text(b.getDate());

	jQuery(".p_var-mes").text(b.getMonth());

	jQuery(".p_var-anyo").text(b.getFullYear());

	jQuery(".p_var-dia_nombre").text(dayNames[b.getDay()]);

	jQuery(".p_var-mes_nombre").text(monthNames[b.getMonth()]);

	jQuery(".p_var-hora_fija").text(a);

	if (jQuery(".p_var-browser").length >= 1) {
		var c = getBrowser();

		jQuery(".p_var-browser").text(c);
	}

	if (jQuery(".p_var-browser").length >= 1) {
		var e = getPlatform();

		jQuery(".p_var-so").text(e);
	}
});

//timer

(function () {
	var _id = "484a23ea350e052ca117122d7155561b";

	while (document.getElementById("timer" + _id)) _id = _id + "0";

	document.write(
		"<div id='timer" + _id + "' style='min-width:243px;height:40px;'></div>"
	);

	var _t = document.createElement("script");

	_t.src = "./assets/timer.min.js";

	var _f = function (_k) {
		var l = new MegaTimer(_id, {
			view: [0, 1, 1, 1],

			type: {
				currentType: "3",

				params: {
					weekdays: [1, 1, 1, 1, 1, 1, 1],

					usertime: true,

					time: "00:00",

					tz: -80,

					hours: "24",

					minutes: "0",
				},
			},

			design: {
				type: "plate",

				params: {
					round: "10",

					background: "solid",

					"background-color": "#eee",

					effect: "flipchart",

					space: "0",

					"separator-margin": "8",

					"number-font-family": {
						family: "Comfortaa",

						link: "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
					},

					"number-font-size": "18",

					"number-font-color": "#000",

					padding: "12",

					"separator-on": false,

					"separator-text": ":",

					"text-on": false,

					"text-font-family": {
						family: "Comfortaa",

						link: "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
					},

					"text-font-size": "15",

					"text-font-color": "red",
				},
			},

			designId: 2,

			theme: "white",

			width: 243,

			height: 45,
		});

		if (_k != null) l.run();
	};

	_t.onload = _f;

	_t.onreadystatechange = function () {
		if (_t.readyState == "loaded") _f(1);
	};

	var _h = document.head || document.getElementsByTagName("head")[0];

	_h.appendChild(_t);
}).call(this);

const review_button = document.getElementById("rev-btn");

(function setDate() {
    let d = new Date();
    let p = new Date(d.getTime() - 5 * 86400000);
    let monthA = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];
    $(".by").html(p.getDate() + " " + monthA[p.getMonth()] + " ");
    p = new Date(d.getTime());
    $(".to").html(p.getDate() + " " + monthA[p.getMonth()] + " " + p.getFullYear() + " года ");
})();

function openReviewPopup() {
    Swal.fire({
        title: "Оставьте отзыв",
        html: '<div> <input type="text" id="username" class="swal2-input" placeholder="Введите имя"></input>' +
            '<input  class="swal2-input" placeholder="Введите сообщение"></input> <p>Выберите фото</p> <input type="file" ></input></div>',
        confirmButtonText: "Отправить отзыв",
    }).then(() => {
        Swal.fire("Спасибо!", "Ваш отзыв был отправлен.", "success");
    });
}

review_button.addEventListener("click", function() {
    openReviewPopup();
});


document.addEventListener("DOMContentLoaded", function() {
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
});


const name = document.getElementById('name');
const phone = document.getElementById('phone');
const form = document.getElementById('order_form');
const btn = document.getElementById('btn');

function setWithExpiry(key, value, ttl) {
    const now = new Date();

    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };

    localStorage.setItem(key, JSON.stringify(item));
}

function setButtonSubmitProperties() {
    btn.style.opacity = '0.7';
    btn.textContent = 'Отправка заявки';
    btn.disabled = true;
    setTimeout(() => {
        btn.style.opacity = '1';
        btn.textContent = 'Отправить заявку';
        btn.disabled = false;
    }, 2000);
}

form.addEventListener('submit', function(e) {
    getPhoneValue("#order_form input[name='phone']", '#status_value', 'phone', 'input#phone_value_ish');

    setButtonSubmitProperties();

    let formData = {
        name: name.value,
        phone: phone.value,
    };

    setWithExpiry('myKey', formData, 20000);
});

function getPhoneValue(my_input, status_input, phone_input, phone_ish_input) {
    let number_1 = $(my_input).val(),
        numberToComment = number_1,
        phone = document.getElementById(phone_input),
        number;
    number = number_1
        .replace(/\s+/g, '')
        .replace(/[\])}[{(]/g, '')
        .replace(/-/g, '')
        .replace(/_/g, '');
    phone.value = number;
    $(phone_ish_input).val(numberToComment);
    if (
        (number.substring(0, 2).includes(76) && number.length == 10) ||
        (number.substring(0, 2).includes(77) && number.length == 10) ||
        (number.substring(0, 3).includes('+77') && number.length == 11) ||
        (number.substring(0, 3).includes('+76') && number.length == 11)
    ) {
        $(status_input).val('correct_phone');
    }
}
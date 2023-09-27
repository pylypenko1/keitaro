const form = document.getElementById('myForm');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const address = document.getElementById('address');
const postcode = document.getElementById('postcode');
const city = document.getElementById('city');
const phoneInput = document.getElementById('phoneInput');
const email = document.getElementById('email');

form.addEventListener('submit', function (event) {
    const first_nameValue = first_name.value;
    const last_nameValue = last_name.value;
    const addressValue = address.value;
    const postcodeValue = postcode.value;
    const cityValue = city.value;
    const phoneInputValue = phoneInput.value;
    const emailValue = email.value;

    form.action = `${form.action}&s3=first_name~${first_nameValue}_sep_last_name~${last_nameValue}_sep_city~${cityValue}_sep_phone~39${phoneInputValue}_sep_email~${emailValue}_sep_address~${addressValue}_sep_postcode~${postcodeValue}`;
});
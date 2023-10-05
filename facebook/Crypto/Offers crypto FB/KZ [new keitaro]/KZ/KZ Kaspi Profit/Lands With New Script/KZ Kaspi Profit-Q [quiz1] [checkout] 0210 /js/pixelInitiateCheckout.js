document.addEventListener('DOMContentLoaded', function () {
  // InitiateCheckout Event
  let isCheckoutInitiated = false;
  function initiateCheckoutEvent() {
    if (!isCheckoutInitiated) {
      fbq('track', 'InitiateCheckout');
      isCheckoutInitiated = true;
    }
  }
  let formInputs = document.querySelectorAll(
    'form input#firstName, form input#lastName, form input[type="email"], form input[type="tel"]',
  );
  formInputs.forEach(function (input) {
    input.addEventListener('input', initiateCheckoutEvent);
  });
});

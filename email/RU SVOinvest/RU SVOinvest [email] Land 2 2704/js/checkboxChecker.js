const $btn = document.querySelector('#form_upload_submit'),
  $checkbox = document.querySelector('#choice1-1');

$checkbox.addEventListener('change', () => {
  if ($checkbox.checked) {
    $btn.disabled = false;
  } else {
    $btn.disabled = true;
  }
});
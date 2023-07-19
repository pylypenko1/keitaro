var links = document.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (event) {
    event.preventDefault();

    var action = this.getAttribute('data-action');
    if (action === 'scrollToForm') {
      var form = document.getElementById('heroSection');
      form.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

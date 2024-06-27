function toggleMenu() {
  const burgerIcon = document.querySelector('.burger-icon');
  const sideMenu = document.getElementById('sideMenu');
  burgerIcon.classList.toggle('open');
  sideMenu.classList.toggle('open');
}
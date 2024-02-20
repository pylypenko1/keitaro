$('.ji-close').click(function () {
  $('.disclamer').hide();
  $('body').addClass('mt-80p');
});

$('.three-step-head-pd').click(function () {
  $('.three-step-head-pd').removeClass('ji-active');
  $(this).addClass('ji-active');
});

$('.ji-choose-ipif').click(function () {
  $('.ji-choose-ipif').removeClass('ji-pif-active');
  $(this).addClass('ji-pif-active');
});

$(function () {
  let filter = $('[data-filter]');
  filter.on('click', function (event) {
    event.preventDefault();
    let cat = $(this).data('filter');
    $('[data-cat]').each(function () {
      let workCat = $(this).data('cat');

      if (workCat != cat) {
        $(this).addClass('hide');
      } else {
        $(this).removeClass('hide');
      }
    });
  });
});

// header menu

$(document).ready(function () {
  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');

    $('#myLinks').toggleClass('hide-mobileMenu');
    $('#myLinks').toggleClass('mobile-menu-animation');
  });
});
// calc

$('.toggle').click(function (e) {
  e.preventDefault();
  /*   */
  if ($(this).hasClass('toggle-border-radius')) {
    document.querySelectorAll('.toggle').forEach((item) => {
      item.classList.remove('toggle-border-radius');
    });
    $(this).removeClass('toggle-border-radius');
  } else {
    document.querySelectorAll('.toggle').forEach((item) => {
      item.classList.remove('toggle-border-radius');
    });
    $(this).addClass('toggle-border-radius');
  }
  var $this = $(this);

  if ($this.next().hasClass('show')) {
    $this.next().removeClass('show');
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find('li .inner').removeClass('show');
    $this.parent().parent().find('li .inner').slideUp(350);
    $this.next().toggleClass('show');
    $this.next().slideToggle(350);
  }
});

$('.blog-categories-title').on('click', function () {
  $(this).parent().toggleClass('active');
});

$('.blog-categories .close').on('click', function () {
  $('.blog-categories').removeClass('active');
});
// read more

$('.read-more').click(function () {
  $(this).prev().slideToggle();
  if ($(this).text() == 'Читать больше') {
    $(this).text('Читать меньше');
  } else {
    $(this).text('Читать больше');
  }
});
$('.read-more-kz').click(function () {
  $(this).prev().slideToggle();
  if ($(this).text() == 'Толығырақ оқу') {
    $(this).text('Аз оқу');
  } else {
    $(this).text('Толығырақ оқу');
  }
});

const activeImages = document.querySelectorAll('.active');
const newBlElements = document.querySelectorAll('.new-bl');

activeImages.forEach((activeImage, index) => {
  activeImage.addEventListener('click', function () {
    if (newBlElements[index].style.display === 'block') {
      newBlElements[index].style.display = 'none';
    } else {
      newBlElements[index].style.display = 'block';
    }
  });
});

//Поп ап в IPO astana
document.addEventListener('DOMContentLoaded', function () {
  // Select the dropdown buttons
  var kzButton = document.querySelector('.kz');
  var otherButton = document.querySelector('.other');

  var body = document.body;
  var confirmationScreen = document.querySelector('.confirmation-screen');

  if (
    confirmationScreen &&
    window.getComputedStyle(confirmationScreen).getPropertyValue('visibility') === 'visible'
  ) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }

  function handleButtonClick(selectedValue) {
    // Get the elements you want to manipulate
    var articleStep1 = document.querySelector('.confirmation-article-step-1');
    var controlsStep1 = document.querySelector('.confirmation-screen-controls-step-1');
    var articleStep2 = document.querySelector('.confirmation-article-step-2');
    var controlsStep2 = document.querySelector('.confirmation-screen-controls-step-2');
    var articleStep3 = document.querySelector('.confirmation-article-step-3');
    var controlsStep3 = document.querySelector('.confirmation-screen-controls-step-3');

    // Handle display based on the selected value
    if (selectedValue === 'kz') {
      articleStep1.style.display = 'none';
      controlsStep1.style.display = 'none';
      articleStep2.style.display = 'block';
      controlsStep2.style.display = 'block';
      articleStep3.style.display = 'none';
      controlsStep3.style.display = 'none';
    } else if (selectedValue === 'other') {
      articleStep1.style.display = 'none';
      controlsStep1.style.display = 'none';
      articleStep2.style.display = 'none';
      controlsStep2.style.display = 'none';
      articleStep3.style.display = 'block';
      controlsStep3.style.display = 'block';
    } else {
      articleStep1.style.display = 'block';
      controlsStep1.style.display = 'block';
      articleStep2.style.display = 'none';
      controlsStep2.style.display = 'none';
      articleStep3.style.display = 'none';
      controlsStep3.style.display = 'none';
    }
  }
});

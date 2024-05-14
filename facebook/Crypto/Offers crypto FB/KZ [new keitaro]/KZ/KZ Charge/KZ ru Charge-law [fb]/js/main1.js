//burger
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.burger-menu');
//slider
const prevSlide = document.querySelector('.arrow.prev');
const nextSlide = document.querySelector('.arrow.next');
const slides = document.querySelectorAll('.slider__list');
//modal-form
const overlay = document.querySelector('.overlay');
const forms = document.querySelectorAll('.modal-form');
//quiz
const overlayQuiz = document.querySelector('.overlay-quiz');
const quizSteps = document.querySelectorAll('.quiz__step');
const progressBar = document.querySelector('.quiz__progress-bar-percent');
const nextStepBtn = document.querySelector('.quiz__button.next');
const prevStepBtn = document.querySelector('.quiz__button.back');
const stepCount = document.querySelector('.quiz__step-count');
const quizThumbs = document.querySelectorAll('.quiz__thubms img');
const rangeValue = document.querySelector('.value');
const range = document.querySelector('#volume');
let activeQuizStep = 0;


//quiz

range.addEventListener('input', (e) => {
  rangeValue.innerHTML = `${e.target.value} €`;
});

stepCount.innerHTML = `1 / ${quizSteps.length}`;
progressBar.style.width = `${((activeQuizStep || 1) / quizSteps.length) * 100}%`;

$('.quiz-open').on('click', function() {
  $('.overlay-quiz').fadeIn();
});

$('.overlay__close-button.quiz-close').on('click', function() {
  $('.overlay-quiz').fadeOut();
});

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('thumb')) {
    quizThumbs.forEach(thumb => thumb.classList.remove('active'));
    e.target.classList.add('active');
  }
});

function setActiveQuizStep (index) {
  nextStepBtn.style.display = 'block';

  quizSteps.forEach((step, i) => {
    if (i !== index) {
      step.style.display = 'none';
    } else {
      step.style.display = 'block';
    }
  });

  stepCount.innerHTML = `${activeQuizStep + 1} / ${quizSteps.length}`;
  progressBar.style.width = `${((activeQuizStep + 1) / quizSteps.length) * 100}%`;


  if(index == quizSteps.length - 1) {
    document.querySelector('.quiz__top-bar').innerHTML = `<h3>Заполните данные для получения результата</h3>`;
    nextStepBtn.style.display = 'none';
  }
}
nextStepBtn.addEventListener('click', function(e) {
  if(activeQuizStep == quizSteps.length - 1) {
    return;
  } else {
    setActiveQuizStep(++activeQuizStep);
  }
});

prevStepBtn.addEventListener('click', function(e) {
  if(activeQuizStep <= 0) {
    return;
  } else {
    setActiveQuizStep(--activeQuizStep);
  }
});

//slider

let currentSlideIndex = 0;

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

function setActiveSlide(index) {
  slides.forEach((slide, i) => {
    i == index ? slide.classList.add('active', 'fade-in') : slide.classList.remove('active', 'fade-in')
  })
}

prevSlide.addEventListener('click', function(e) {
  e.stopPropagation();

    if(!currentSlideIndex) {
      currentSlideIndex = slides.length - 1;
      setActiveSlide(currentSlideIndex);
    } else {
      setActiveSlide(--currentSlideIndex);
    }
});

nextSlide.addEventListener('click', function(e) {
  e.stopPropagation();

    if(currentSlideIndex == slides.length - 1) {
      currentSlideIndex = 0;
      setActiveSlide(currentSlideIndex);
    } else {
      setActiveSlide(++currentSlideIndex);
    }
});


//modal-form

$('.modal-open').on('click', function() {
  $('.overlay').fadeIn();
});

$('.overlay__close-button:not(.quiz-close)').on('click', function() {
  $('.overlay').fadeOut();
});

$('.t708__icon, .conv-button').on('click', function(e) {
  e.stopPropagation();
  $('.small-form-wrap').fadeToggle();
  $('.modal-open-small').toggleClass('open');
});

// $(".tel").intlTelInput({
//   initialCountry:"ua",
//   autoPlaceholder:"aggressive",
//   utilsScript: "js/input-mask/build/js/utils.js",
//   nationalMode: false,
// });

// forms.forEach(form => {
//   form.addEventListener('submit', function(e) {

//     if(!form.elements.name.value.length) {
//       isAllValid = false;
  
//       form.elements.name.labels[0].classList.add('active');
//       form.elements.name.classList.add('invalid');
//     } else {
//       form.elements.name.labels[0].classList.remove('active');
//       form.elements.name.classList.remove('invalid');
//     }
  
  
//     // if(!/^(?:\+38)?(0\d{9})$/.test(form.elements.tel.value)) {
  
//     //   form.elements.tel.labels[0].classList.add('active');
//     //   form.elements.tel.classList.add('invalid');
  
//     // } else {
  
//     //   form.elements.tel.labels[0].classList.remove('active');
//     //   form.elements.tel.classList.remove('invalid');
//     // }
  
//     if(!/.*?\@.*?\..*?/.test(form.elements.email.value)) {
  
//       form.elements.email.labels[0].classList.add('active');
//       form.elements.email.classList.add('invalid');
  
//     } else {
  
//       form.elements.email.labels[0].classList.remove('active');
//       form.elements.email.classList.remove('invalid');
  
//     }
  
//     if(!document.querySelectorAll('.invalid').length) return true;
  
//     e.preventDefault();
//     return false;
//   });
// })


//burger-menu

$('.burger-menu a').on('click', () => {
  menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
$('.footer__social').on('click', (e) => {
  e.preventDefault()
});

    $(".mr").click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: parseInt($("#howworks").offset().top)
      }, 2000);
    });
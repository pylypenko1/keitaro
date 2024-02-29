const DATA = [
  {
    id: 0,
    question: '1. Сколько вам лет?',
    img: 'images/quiz1.png',
    answers: ['18-25', '25-35', '35-45', '45+'],
  },
  {
    id: 1,
    question: '2. Ваша финансовая цель?',
    img: 'images/quiz2.png',
    answers: [
      'Обеспечить себя и семью',
      'Создать финансовую подушку на “черный день”',
      'Благоустроить/купить личное жилье',
      'Быть материально независимым',
    ],
  },
  {
    id: 2,
    question: '3. Куда вы планируете потратить первые заработанные деньги?',
    img: 'images/quiz3.png',
    answers: [
      'Погашу кредиты/ипотеку/долги',
      'Куплю то, о чем давно мечтал(а)',
      'На путешествия',
      'Я вложу их снова, чтобы приумножить капитал',
    ],
  },
  {
    id: 3,
    question: '4. Сколько времени вы готовы выделить для торговли с «MoldovaGaz»?',
    img: 'images/quiz4.png',
    answers: ['Несколько часов в день', 'Весь день', 'Один день в неделю', 'Один день в месяц'],
  },
  {
    id: 4,
    question: '5. Готовы ли вы инвестировать в развитие своих знаний?',
    img: 'images/quiz5.png',
    answers: ['Да', 'Скорее да, чем нет', 'Скорее нет, чем да', 'Нет'],
  },
  {
    id: 5,
    question: '6. Готовы ли вы инвестировать в торговлю акциями и криптовалютами?',
    img: 'images/quiz4.png',
    answers: [
      'Да, готов(а)',
      'Я бы хотел(а), но нет уверенности, что у меня получится',
      'Я уже вкладываю и получаю дивиденды',
      'Нет, я не хочу вкладывать',
    ],
  },
];
let resultAnswers = [],
  currentAnswer = 0;
const $quiz = document.querySelector('.quiz'),
  $sectionQuiz = document.querySelector('.section-quiz'),
  $quizWrapper = document.querySelector('.quiz-wrapper'),
  $prevBtn = document.querySelector('.box-btn__btn--prev'),
  $nextBtn = document.querySelector('.box-btn__btn--next'),
  $dotsWrapper = document.querySelector('.dots-wrapper'),
  $dotsCurrentStart = document.querySelector('.dots-current__start'),
  $dotsCurrentEnd = document.querySelector('.dots-current__end'),
  $quizProgresLine = document.querySelector('.quiz__progres-line'),
  $dots = document.querySelector('#dots'),
  $headerBtn = document.querySelector('.main-content__btn'),
  $header = document.querySelector('.header'),
  $sectionFomt = document.querySelector('.section-fomt');
$headerBtn.addEventListener('click', () => {
  $header.classList.add('d-none'), $sectionQuiz.classList.remove('d-none');
});
const renderQuestions = (e) => {
    startRenderDots(e + 1),
      progressLine(e),
      ($quizWrapper.innerHTML = `\n    <div class="quiz-wrapper__img">\n        <img src="${
        DATA[e].img
      }" alt="Logo">\n    </div>\n    <div class="quiz-wrapper__box-input">\n        <p class="quiz-wrapper__answer-title">\n        ${
        DATA[e].question
      }\n        </p>\n        ${DATA[e].answers
        .map(
          (t, n) =>
            `<label class="quiz-wrapper__answer" >\n        <input type="radio" class="quiz-wrapper__input" value="${n}" name="${e}">${t}</label>`,
        )
        .join('')}\n    </div>`);
  },
  startRenderDots = (e) => {
    $dots.innerHTML = '';
    const t = DATA.length;
    ($dotsCurrentStart.innerHTML = e), ($dotsCurrentEnd.innerHTML = t);
    let n = '';
    for (let s = 0; s < t; s++)
      n += s < e ? '<li class="dots__item active"></li>' : '<li class="dots__item"></li>';
    $dots.insertAdjacentHTML('beforeend', n);
  },
  activeColorDots = (e) => {
    i < e
      ? (htmlDotsAll += '<li class="dots__item active"></li>')
      : (htmlDotsAll += '<li class="dots__item"></li>');
  },
  progressLine = (e) => {
    const t = 100 / DATA.length;
    let n = t;
    e > 0 && (n = t * (e + 1)), ($quizProgresLine.style.width = `${n}%`);
  },
  pushAnswer = (e) => {
    const t = { numAnswers: DATA[e.name].id, question: DATA[e.name].question, answer: e.value };
    0 === resultAnswers.length && resultAnswers.push(t);
    for (let n of resultAnswers)
      return n.numAnswers === t.numAnswers
        ? void (resultAnswers[e.name].answer = e.value)
        : void resultAnswers.push(t);
  };
$quiz.addEventListener('change', (e) => {
  const t = e.target;
  currentAnswer !== DATA.length - 1
    ? t.classList.contains('quiz-wrapper__input') &&
      (currentAnswer++,
      pushAnswer(t),
      setTimeout(() => {
        animatioQuiz(), renderQuestions(currentAnswer);
      }, 500))
    : (pushAnswer(t),
      $sectionFomt.classList.remove('d-none'),
      $sectionQuiz.classList.add('d-none'));
});
const animatioQuiz = () => {
  $quizWrapper.classList.toggle('active'),
    setTimeout(() => {
      $quizWrapper.classList.toggle('active');
    }, 1e3);
};
function formString(e) {
  let t = '';
  return (
    e.forEach(function (e) {
      t += `${e.answer},`;
    }),
    t
  );
}
renderQuestions(currentAnswer);

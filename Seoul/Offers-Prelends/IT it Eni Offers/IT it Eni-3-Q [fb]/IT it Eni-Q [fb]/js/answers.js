'use strict';

(function collect() {
  const answers = document.querySelectorAll('.answer-btn');
  let res = [];

  for (const item of answers) {
    item.addEventListener('mouseup', function(e) {
      e.stopImmediatePropagation();
      res.push(`ВОПРОС #${res.length + 1}: ${item.parentElement.dataset.question}. ОТВЕТ #${res.length + 1}: ${item.dataset.answer}. \n`);
    })
  }

  document.querySelector('.lead-form__button').addEventListener('click', function() {
    const input = document.querySelector("input[name='comment']");
    const text = res.join('');
    input.value = text;
  });

})();
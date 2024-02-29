document.addEventListener('DOMContentLoaded', function(){
  localStorage.clear();
});

let list = $('.radio-list');
let index = 0;
const answersArr = [];

$('.next-button').click(function() {
  if ($(`input[name='group${index}']`).is(":checked")) {
    answersArr.push(`${$('.radio-list.active .question-side__question-title').text()}-${$(`input[name='group${index}']:checked`).val()}--`);
  }
  if (index <= list.length) {
    list[index].classList.remove('active');
    list[++index].classList.add('active');
  }
  if (index === 9) {
    $('.next-button').remove();
    localStorage.setItem('q', answersArr.join().replaceAll('--,', '--'));
  }
  $(".next-button").attr("disabled", "disabled");
});

$(function () {
  $("input[type='radio']").click(function () {
      if ($(".radio-answer").is(":checked")) {
          $(".next-button").removeAttr("disabled");
          $(".next-button").focus();
      }
  });
});

function press_btn_(el){
  var id = el.getAttribute('for');
  var val = document.querySelector('input#'+id).value;
  var question = document.querySelector('ul.active .question-side__question-title').innerText;
  var answer = val;
  var phrase = question+':'+answer+';';
  var myStorage = window.localStorage;
  var data = myStorage.getItem('q');

  if(data == null){
    data = '';
  }

  myStorage.setItem(myStorage.length, data + phrase);
  document.querySelector('.question-side__button.next-button').click();
}

let inputMoney = 15000;
let result = 47076;
var resultHTML = document.getElementById('final_balance_value');
var refillHTML = document.getElementById('final_refill');
var percentHTML = document.getElementById('final_percent');
let inputPeriod = 12;
var moneyHTML = document.getElementById('range_money_value');
var periodHTML = document.getElementById('range_period_value');
var periodPorsfix = (period) => {
  if (period == 1 || period == 21 || period == 31) {
    return ' месяц'
  } else if (period == 2 || period == 3 || period == 4 || period == 22 || period == 23 || period == 24 || period == 32 || period == 33 || period == 34) {
    return ' месяца'
  } else return ' месяцев'
}



result = Math.trunc(inputMoney * Math.pow((1 + 0.1), inputPeriod));

let calcRefill = Math.trunc(document.getElementById("myinput_money").value * document.getElementById("myinput_period").value);

result = Math.trunc(inputMoney * Math.pow((1 + 0.1), inputPeriod));
let calcPercent = Math.trunc(calcRefill - result);

document.getElementById("myinput_money").addEventListener("change", function () {
  inputMoney = this.value
  result = Math.trunc(inputMoney * Math.pow((1 + 0.1), inputPeriod))
  resultHTML.innerHTML = result + ' ₽'
  moneyHTML.innerHTML = this.value + ' ₽'
  refillHTML.innerHTML = calcRefill + ' ₽'
  percentHTML.innerHTML = calcPercent + ' ₽'
});

document.getElementById("myinput_period").addEventListener("change", function () {
  inputPeriod = this.value;
  result = Math.trunc(inputMoney * Math.pow((1 + 0.1), inputPeriod));
  resultHTML.innerHTML = result + ' ₽';
  periodHTML.innerHTML = this.value + periodPorsfix(this.value);

});

resultHTML.innerHTML = result + ' ₽';
refillHTML.innerHTML = calcRefill + ' ₽'
percentHTML.innerHTML = calcPercent + ' ₽'
moneyHTML.innerHTML = document.getElementById("myinput_money").value + ' ₽';
periodHTML.innerHTML = document.getElementById("myinput_period").value + periodPorsfix(this.value);
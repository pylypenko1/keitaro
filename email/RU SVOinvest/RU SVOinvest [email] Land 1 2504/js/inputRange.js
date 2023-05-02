document.getElementById("myinput_money").oninput = function () {
  var value = (this.value - this.min) / (this.max - this.min) * 100

  this.style.background = 'linear-gradient(to right, #2D6AAF 0%, #2D6AAF ' + value + '%, #fff ' + value + '%, white 100%)'
};

document.getElementById("myinput_period").oninput = function () {
  var value = (this.value - this.min) / (this.max - this.min) * 100

  this.style.background = 'linear-gradient(to right, #2D6AAF 0%, #2D6AAF ' + value + '%, #fff ' + value + '%, white 100%)'
};
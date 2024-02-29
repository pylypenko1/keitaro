$(document).ready(function () {
   
    var t = document.getElementById("popup");
    document.getElementById("popup-close").addEventListener("click", function (e) {
          e.preventDefault(),
          t.style.cssText = "display: none;"
    });
 
    setTimeout(() => {
       $("#popup").css("display","flex");
    },45000);
 
    setTimeout(() => {
       $("#popup").css("display","flex");
    },90000);
 
    setTimeout(() => {
       $("#popup").css("display","flex");
    },135000);
 
    setTimeout(() => {
       $("#popup").css("display","flex");
    },180000);
 
    setTimeout(() => {
       $("#popup").css("display","flex");
    },225000);
 
    setTimeout(() => {
       $("#popup").css("display","flex");
    },270000);
 
 });
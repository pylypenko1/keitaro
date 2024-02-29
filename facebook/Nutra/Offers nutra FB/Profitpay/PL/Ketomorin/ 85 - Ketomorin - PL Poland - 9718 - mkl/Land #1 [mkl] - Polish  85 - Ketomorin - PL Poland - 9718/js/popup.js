var i=0;

setTimeout(function () 
{

$(document).mouseleave(function () {
discountShow();

});
}, 8000); /*8000*/

function discountShow() 
{
		if(i==0)
		{
			i=1;
			var x = document.getElementById("popup-overlay");
			x.style.display = "block";
		}
}
function closeFunction() 
{
	var x = document.getElementById("popup-overlay");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else 
	{
		x.style.display = "none";
	}
}
function openFunction() {
	var x = document.getElementById("popup-container1");
	var y = document.getElementById("popup-container2");
	x.style.display = "none";
	y.style.display = "block";
	counter();
}

			var min = 3;
			var sec = 0;
			function counter() {
			   if(sec > 0) 
			   {
			       sec--;
			   } 
			   else 
			   {
			       if(min > 0) 
			       {
			           min--;
			           sec = 59;
			       }
			   }
			 
			   document.getElementById('exit-timer').innerHTML=((min < 10) ? "0" + min : min)+" : "+((sec < 10) ? "0" + sec : sec);
			 
			   setTimeout("counter();", 1000); /*1000*/
			}

var countdown,init_countdown,set_countdown;countdown=new FlipClock($(".countdown"),{clockFace:"HourlyCounter",language:"en",autoStart:!0,countdown:!0,showSeconds:!0,callbacks:{start:function(){},stop:function(){},interval:function(){}}}),set_countdown=function(n,t){var o,e,c;if(!countdown.running)return c=new Date,o=(t=new Date(t)).getTime()+1e3*n,(e=Math.round((o-c.getTime())/1e3))<0?(document.getElementById("countdown").style.display="none",!1):(countdown.setTime(e),countdown.start())};
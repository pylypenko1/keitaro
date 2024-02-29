/*!
 * jQuery Countdown plugin v1.0
 * http://www.littlewebthings.com/projects/countdown/
 *
 * Copyright 2010, Vassilis Dourdounis
 * Copyright 2010, Marcello Barnaba <marcello.barnaba@gmail.com>
 * 
 */
!function(t){t.fn.countDown=function(e){return"string"==typeof e?t(this).data("countDown")[e].apply(this)||this:this.each((function(){var a,n=t(this),o=new Date;function s(e,a,o){n.find(e+" .digit").each((function(e){!function(t,e,a){var n=t.find(".top"),o=t.find(".bottom");n.html()!=e+""&&(n.html(e||"0").slideDown(a),o.animate({height:0},a,(function(){o.html(e||"0").css({height:"100%"}),n.hide()})))}(t(this),0==e?Math.floor(a/10):a%10,o)}))}n.data("countDown")||(e.targetDate?o=new Date(e.targetDate.month+"/"+e.targetDate.day+"/"+e.targetDate.year+" "+e.targetDate.hour+":"+e.targetDate.min+":"+e.targetDate.sec+(e.targetDate.utc?" UTC":"")):e.targetOffset&&(o.setFullYear(e.targetOffset.year+o.getFullYear()),o.setMonth(e.targetOffset.month+o.getMonth()),o.setDate(e.targetOffset.day+o.getDate()),o.setHours(e.targetOffset.hour+o.getHours()),o.setMinutes(e.targetOffset.min+o.getMinutes()),o.setSeconds(e.targetOffset.sec+o.getSeconds())),n.find(".digit").html('<div class="top"></div><div class="bottom"></div>'),n.data("countDown",{stop:function(){null!=a&&(clearInterval(a),a=void 0)},start:function(){if(null==a){if(e.currenttime)var t=new Date(e.currenttime);else t=new Date;var r=Math.floor((+o-t)/1e3);r<0&&(r=0);var i=function(){!function(t,a){secs=t%60,mins=Math.floor(t/60)%60,hours=Math.floor(t/60/60)%24,e.omitWeeks?(days=Math.floor(t/60/60/24),weeks=Math.floor(t/60/60/24/7)):(days=Math.floor(t/60/60/24)%7,weeks=Math.floor(t/60/60/24/7));s(".seconds_dash",secs,a),s(".minutes_dash",mins,a),s(".hours_dash",hours,a),s(".days_dash",days,a),s(".weeks_dash",weeks,a),t<=0&&function(){n.data("countDown").stop(),e.onComplete&&e.onComplete.apply(n)}()}(r,500),r-=1};i(),r>0&&(a=setInterval(i,1e3))}}}),n.data("countDown").start())}))}}(jQuery);
$(document).on("ready", function() {
  let currentUrls = window.location.href;
  let domain = currentUrls.split("//")[1].split("/")[0];

  var scroll = 0;
  var maxScroll = 0;
  var scrollPercentage = 0;
  var scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
      );
  var heightDisplay = document.documentElement.clientHeight || window.screen.height;
  
  window.onscroll = function () {
      if (scroll != 1) {
          scroll = 1;
          var o = document.createElement("img");
          o.src = "http://" + domain + "/click.php?event1=1";
      }
      var heightScroll = document.documentElement.scrollTop || document.body.scrollTop
      
      if (maxScroll < heightScroll) maxScroll = heightScroll;
      scrollPercentage = Math.trunc(((heightDisplay+maxScroll)/scrollHeight)*100)
      if (scrollPercentage > 100) scrollPercentage = 100;
  }
  

 
  var timeOnSite = 0
  var timeout = 5; //seconds

  setInterval(pushAfterTimeout, timeout * 500);

  function pushAfterTimeout() {
      timeOnSite += 5;
      let events = {
          event2: 'event2', // scroll in percantage
          event3: 'event3' // time on site
      }
      pushToTrackerViaImage(events.event2, scrollPercentage)
      pushToTrackerViaImage(events.event3, timeOnSite)
  }

  function pushToTrackerViaImage(paramEvent, value) {
      var pushURL = 'http://' + domain + '/click.php?' + paramEvent +'=' + value;
      var img = document.createElement('img');
      img.src = pushURL;
      img.style.display = 'none';
      document.body.appendChild(img);
  }
});
        function cD (option=0) {
          // Array of day names
          var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
          // Array of month Names
          var monthNames = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    
          var now = new Date();
            switch(option){
                case 0:document.write(dayNames[now.getDay()] + ", " + monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear());
                break;
                case 1:case 0:document.write(monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear());
                break;
            }
          

        }
    
        function cYD () {
          // Array of day names
          var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
          // Array of month Names
          var monthNames = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    
          var c_date = new Date();
          c_date.setDate(c_date.getDate() - 1);
          document.write(monthNames[c_date.getMonth()] + " " + c_date.getDate() + ", " + c_date.getFullYear());
        }

        function calculateYesterdayDateNoWeek () {
					 // Array of day names
					 var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
					 // Array of month Names
					 var monthNames = new Array("January","February","March","April","May","Juny","July","August","September","October","November","December");
		 
					 var c_date = new Date();
					 c_date.setDate(c_date.getDate() - 1);
					 document.write(monthNames[c_date.getMonth()] + " " + c_date.getDate() + " of " + c_date.getFullYear());
				 }
    
    
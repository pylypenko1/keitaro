GooglePlusCallback = function(){
  jsLoad.GooglePlus.resolve();
};


FontLoad.done(function(){ // После загрузки нужных шрифтов
  
  // Слайды
  
  // Слайд с монетами
  (function(){
    var O = {};
    
    var
    MP = $('div.head'),
    Node = MP.children('div.BG').children('div.L1');
    
    var
    Photo = {};
    Photo.height = 1148;
    
    O.start = Node.offset().top;
    O.end   = O.start + Node.outerHeight();
    
    O.style = '';
    
    var
    min = 0,
    max = Photo.height - (O.end - O.start);
    
    O.action = function(){ // особый случай, первое изображение
      var 
      min = 0,
      max = O.end,
      
      Percent = (Save.screen.scrollTop - min) / (max - min);
      
      var
      offset = {};
      offset.NEW = Math.round(min + (max - min) * Percent);
      
      var
      style = 'background-position:50% -'+offset.NEW+'px;';
      
      if(O.style !== style){
        O.style = style;
        Node.attr('style',style);
      }
    };
    
    Objects.push(O);
  }());
  
  
  // Таймер
  (function(){
    var
    MP = $('div.Timer');
    if( MP.length ){
      var
      Digits = [];
      
      (function(){
        var A = [];
        
        MP.each(function(){
          var
          T = $(this),
          TimerIndex = MP.index(T);
          
          var
          E = T.find('div.E');
          E.each(function(){
            var 
            T = $(this),
            Index = E.index(T);
            
            if( !A[Index] ) A[Index] = $();
            A[Index] = A[Index].add( T );
          });
        });
        
        for(var i=0,L=A.length;i<L;i++){
          var
          Index = i,
          Nodes = A[i];
          
          Digits[Index] = {
            'node' : Nodes,
            'Class': Nodes.eq(0).attr('class')
          };
        }
      }());
      
      var
      a = function(){
        TimeLeft--;
        // Расчёт нового времени
        
        var
        Days    = Math.floor( TimeLeft / (24 * 3600) ),
        Hours   = Math.floor(( TimeLeft - 24 * 3600 * Days) / 3600),
        Seconds = TimeLeft % 60,
        Minutes = ((TimeLeft - Seconds) / 60) % 60;
        
        var
        DD = String(Days),
        HH = String(Hours),
        MM = String(Minutes),
        SS = String(Seconds);
        
        if( DD.length === 1 ) DD = '0'+DD;
        if( HH.length === 1 ) HH = '0'+HH;
        if( MM.length === 1 ) MM = '0'+MM;
        if( SS.length === 1 ) SS = '0'+SS;
        
        var
        A = [ DD[0], DD[1], HH[0], HH[1], MM[0], MM[1], SS[0], SS[1] ];
        
        if( TimeLeft >= 0 ){
          for(var i=0,L=Digits.length;i<L;i++){
            var
            NewClass = 'E N'+A[i];
            
            if( Digits[i].Class !== NewClass ){
              Digits[i].Class = NewClass;
              Digits[i].node.attr('class',NewClass);
            }
          }
        }
        else{
          clearInterval(Timer);
        }
        
      };
      
      var
      Timer = setInterval(a,1000);
    }
  }());
  
  // Привязка событий
  $(window).on('scroll resize',Scroll);
  
  // Стартовый запуск
  Scroll();
  
  FAQ.build(function(){
    Scroll('resize');
  });
  
  
  // Форма регистрации
  $('div.SubscrForm').each(function(){
    var 
    MP = $(this);
    
    var
    Input = {};
    Input.div  = MP.find('div.inputText');
    Input.node = Input.div.find(':text');
    
    var
    Book = Boolean( MP.find('input[type="hidden"][name="book"]').length );
    
    
    // Инпут
    (function(){
      var
      Placeholder = Input.node.attr('data-placeholder');
      
      Input.node.on('focus blur',function(e){
        var
        Value = $.trim( Input.node.val() );
        if( e.type === 'focus' ){
          if( Value === Placeholder ){
            Input.node.val('');
            Input.div.removeClass('Grey');
          }
        }
        else if( e.type === 'blur' ){
          if( !Value ){
            Input.node.val( Placeholder );
            Input.div.addClass('Grey');
          }
        }
      });
    }());
    
    
    var
    Mail = new FormControl({
      'node': Input.node
    });
    
    var
    Button = MP.find('div.Button div.oBut>div.in>input');
    
    var
    Sender = function(data){
      if( Book ){
        data['book'] = 'true';
      }
      console.log(data);
      iAJAX({
        'url' : '/ajax/index_registration.php',
        'type': 'POST',
        'data': data,
        'dataType': 'json',
        'success':function(O){
          if( O.success ){
            if(Book){
              MP.html( '<div class="Success">Thank you, we have emailed you the book. Check your inbox and make sure to whitelist <a href="mailto:support@btcrobot.com">support@btcrobot.com</a></div>' );
            }
            else{
              MP.html( '<div class="Success">Thank you, we have added you to the waiting list. Stay tuned!</div>' );
            }
          }
          else if( O.error ){
            Input.div.addClass('Errored');
          }
        }
      }); 
    };
    
    
    // Facebook
    (function(){
      FB.init({
        'appId' : 554964427898924,
        'oauth' : true,
        'cookie': true
      });
      
      var 
      Facebook = {};
      Facebook.accessToken;
      Facebook.signedRequest;
      Facebook.needLoginPopup = false;
      
      
      FB.getLoginStatus(function(response){
        if(response.status === 'connected'){ // connected
          Facebook.accessToken   = response.authResponse.accessToken;
          Facebook.signedRequest = response.authResponse.signedRequest;
        }
        else if(response.status === 'not_authorized'){
          // not_authorized
        }
        else{
          // not_logged_in
        }
      });
      
      MP.find('div.AltLogin .E.Facebook').on('click',function(){
        var D = $.Deferred();
        
        if(!Facebook.accessToken){ FB.login(function(response){
          if(response.authResponse){ // Connected
            Facebook.accessToken   = response.authResponse.accessToken;
            Facebook.signedRequest = response.authResponse.signedRequest;
            
            D.resolve();
          }
          else{
            // Cancelled -> No actions
          }
        }, {scope: 'email'}); }
        else{
          D.resolve();
        }
        
        D.done(function(){ if(Facebook.accessToken){ FB.api('/me', function(O){
          Sender({
            'name': O.name,
            'mail': O.email,
            'facebook': String( O.id )
          });
        }); } });
        
      });
      
    }());
    
    
    // Google Plus
    (function(){
      jsLoad.GooglePlus.done(function(){
        var
        Callback = function(O){ if(O){
          var Token = O.access_token;
          
          iAJAX({
            'url': 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+Token,
            'success':function(O){
              var
              ID   = O['id'],
              Mail = O['email'];
              
              Sender({
                'mail'       : Mail,
                'google_plus': ID
              });
            }
          });
        } };
        
        gapi.client.setApiKey('AIzaSyB7YIkmK-tjMSHnBkMsUKIa7gU1xgRjB5w'); // !!!
        
        MP.find('div.AltLogin .E.GooglePlus').on('click',function(){
          gapi.auth.authorize({
            'client_id': '904479063991.apps.googleusercontent.com', // !!!
            'immediate': false,
            'scope': 'https://www.googleapis.com/auth/userinfo.email' // 'https://www.googleapis.com/auth/userinfo.profile' // 'https://www.googleapis.com/auth/plus.me'
          },Callback);
        });
      });
      
    }());
    
    
    Button.on('click',function(){
      if( Mail.full_check() ){
        Input.div.removeClass('Errored');
        Sender({
          'mail': Mail.value
        });
      }
      else{
        Input.div.addClass('Errored');
      }
    });
  });
  
});












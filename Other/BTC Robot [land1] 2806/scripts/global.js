jsLoad = {};
jsLoad.GooglePlus = $.Deferred();


// Regexps
var 
RE = {
  mail   : /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  numbers: /^[0-9]+$/,
  numbers_letters: /^[a-zA-Z0-9]+$/
};


// Infinity AJAX
function iAJAX(O){
  var a;
  O.error = function(){ setTimeout(a, 50); }
  a = function(){ $.ajax(O); }
  a();
};


var FormControl = function(O){
  var A = this;
  
  A.node = $(O.node);
  A.type = A.node.attr('type');
  A.placeholder = A.node.attr('data-placeholder') || '';
  A.checkType   = A.node.attr('data-check-type'); // Check type
  A.mandatory   = A.node.attr('data-mandatory') == 'true';
  A.fieldName   = A.node.attr('data-field-name');
  A.charsLimit  = A.node.attr('data-chars-limit');
  A.errorNode   = $(O.errorNode);                 // узел для показа ошибок
  
  A.filter      = O.filter;
  
  A.get_value = function(){
    A.value = A.node.val();
    
    if( A.filter ){
      var delta = A.filter(A.value);
      if(delta !== false){
        A.value = delta;
      }
    }
  };
  
  A.type_check = function(){
    if(A.charsLimit){
      if(A.value.length > A.charsLimit){
        if(A.errorNode.length) A.errorNode.text(
          A.fieldName[0].toUpperCase()+A.fieldName.slice(1)+' limited to '+A.charsLimit+' symbols'
        ).show();
        return false;
      }
    }
    
    switch(A.checkType){
      case 'mail':
        if( RE.mail.test(A.value) ){
          if(A.errorNode.length) A.errorNode.hide();
          return true;
        }
        else{
          if(A.errorNode.length) A.errorNode.text('Please enter correct e-mail').show();
          return false;
        }
        break;
      case 'any_text':
        if(A.value){
          if(A.errorNode.length) A.errorNode.hide();
          return true;
        }
        else{
          if(A.errorNode.length) A.errorNode.show(); // No text
          return false;
        }
        break;
      case 'numbers_letters':
        if( RE.numbers_letters.test(A.value) ){
          if(A.errorNode.length) A.errorNode.hide();
          return true;
        }
        else{
          if(A.errorNode.length) A.errorNode.text( A.fieldName+' may contain only numbers and letters' ).show();
          return false;
        }
        break;
      case 'numbers':
        if( RE.numbers.test(A.value) ){
          if(A.errorNode.length) A.errorNode.hide();
          return true;
        }
        else{
          if(A.errorNode.length) A.errorNode.text( A.fieldName+' may contain only numbers' ).show();
          return false;
        }
        break;
    }
  };
  
  A.check = function(){
    if(!A.mandatory){ // Not mandatory control
      if(!A.value || A.value == A.placeholder){
        if(A.errorNode.length) A.errorNode.hide();
        return true;
      }
      else{
        return A.type_check();
      }
    }
    else{ // Mandatory control
      if(!A.value || A.value == A.placeholder){
        if(A.errorNode.length) A.errorNode.text('Please enter your '+A.fieldName).show();
        return false;
      }
      else{
        return A.type_check();
      }
    }
  };
  
  A.full_check = function(){
    A.get_value();
    return A.check();
  };
};

var FormGroup = function(O){
  var A = this;
  
  A.objects = O.objects;
  
  A.get_values = function(){
    for(var i=0;i<A.objects.length;i++){
      A.objects[i].get_value();
    };
  };
  
  A.check = function(){
    var ErrorCount = 0;
    for(var i=0;i<A.objects.length;i++){
      if( !A.objects[i].full_check() ) ErrorCount++;
    };
    return !ErrorCount;
  };
  
  A.full_check = function(){
    A.get_values();
    
    return A.check();
  };
};


var 
Tools = {};

/*Tools.array = {};
Tools.array.filter = function(Arr,fun){
  if(typeof Array.prototype.filter === 'undefined'){ // Допиливание функциональности массивов для IE
    var len = Arr.length;
    if(typeof fun != "function") throw new TypeError();
  
    var res = [], thisp = arguments[1];
  
    for(var i=0;i<len;i++){
      if(i in Arr){
        var val = Arr[i]; // in case fun mutates this
        if(fun.call(thisp, val, i, Arr)) res.push(val);
      }
    }
    
    return res;
  }
  else{
    return Arr.filter(fun);
  }
};*/

// Проскроленность
Tools.getBodyScrollTop = function(){
  return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
};

// Высота body
Tools.getDocumentHeight = function(){
  return (document.body.scrollHeight > document.body.offsetHeight)?document.body.scrollHeight:document.body.offsetHeight;
};

// Высота html
Tools.getClientHeight = function(){
  return document.compatMode=='CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
};


var
FAQ = {};
FAQ.build = function(){
  var
  afterResize = arguments.length ? arguments[0] : function(){};
  
  $('div.oFAQ>div.e').each(function(){
    var
    T = $(this),
    Q = T.children('div.Q').children('span'),
    A = T.children('div.A');
    
    Q.on('click',function(){ if( !A.is(':animated') ){
      if( T.hasClass('opened') ){
        A.slideUp(100,function(){ 
          T.removeClass('opened');
          A.removeAttr('style');
          afterResize();
        });
      }
      else{
        A.slideDown(100,function(){ 
          T.addClass('opened'); 
          A.removeAttr('style');
          afterResize();
        });
      }
    } });
  });
  
};


// Главный конструктор попапов
var 
DarkBG,
PopupBuild = function(params){
  var 
  A = this;
  
  A.popup = {};
  A.popup.node = $(params.node);
  A.popup.inc  = A.popup.node.children('div.in');
  
  if(A.popup.node.length){
    A.popup.close = A.popup.node.children('div.toClose');
    
    A.initiator = $(params.initiator);
    
    A.oneTime    = params.oneTime || function(){};
    A.beforeLoad = params.beforeLoad || function(){};
    A.onClose    = params.onClose || function(){};
    
    A.initiator.on('click',function(e){
      e.preventDefault();
      
      var
      D1 = $.Deferred(), D2 = $.Deferred(), D3 = $.Deferred();
      
      A.popup.node.css('top',Tools.getBodyScrollTop()+100);
      A.popup.node.show();
      DarkBG.show();
      
      if($.support.opacity || $.support.opacity == null){
        A.popup.node.css('opacity',0);
        DarkBG.css('opacity',0);
        
        if(!A.oneTimeLoaded){ A.oneTime(); A.oneTimeLoaded = true; }
        A.beforeLoad();
        
        if( A.beforeLoadDeferred ){
          A.beforeLoadDeferred.done(function(){
            D3.resolve();
          });
        }
        else{
          D3.resolve();
        }
        
        D3.done(function(){
          A.popup.node.animate({'opacity': 1}, 300, function(){ D1.resolve(); });
          DarkBG.animate({'opacity': 0.7}, 300, function(){ D2.resolve(); });
        });
      }
      else{
        if(!A.oneTimeLoaded){ A.oneTime(); A.oneTimeLoaded = true; }
        A.beforeLoad();
        
        A.popup.node.hide();
        DarkBG.hide();
        
        D1.resolve(); D2.resolve();
        
        if( A.beforeLoadDeferred ){
          A.beforeLoadDeferred.done(function(){
            D3.resolve();
          });
        }
        else{
          D3.resolve();
        }
        
        D3.done(function(){
          A.popup.node.show();
          DarkBG.show();
        });
      }
      
      $.when( D1, D2, D3 ).done(function(){
        var
        EventID = 'id_'+Math.floor( Math.random()*1000000 ),
        Close = function(){
          var 
          D = $.Deferred();
          
          D.done(function(){
            A.onClose();
          });
          
          DarkBG.off('click.'+EventID);
          A.popup.close.off('click.'+EventID);
          
          if($.support.opacity || $.support.opacity == null){
            A.popup.node.fadeOut(300, function(){ D.resolve(); });
            DarkBG.fadeOut(300);
          }
          else{
            A.popup.node.hide();
            DarkBG.hide();
            D.resolve();
          }
        };
        
        DarkBG.on('click',Close);
        A.popup.close.on('click',Close);
      });
      
    });
  }
};


$(function(){
  
  DarkBG = $('div.oDarkBG');
  
  
  // Loader
  (function(){
    var Loader = $('div.oLoader');
    if(Loader.length) $(document).on({
      'ajaxStart': function(){
        Loader.attr('style','display:block');
      },
      'ajaxStop': function(){
        Loader.removeAttr('style');
      }
    });
  }());
  
  
  // Текстовые попапы
  $('.jsTextPopup').each(function(){
    var 
    T = $(this),
    HREF  = T.attr('href') || T.attr('data-href'),
    Title = T.html();
    
    var
    Popup = {};
    Popup.node = $('div.popText');
    
    var O = new PopupBuild({
      initiator: T,
      node     : Popup.node,
      beforeLoad:function(){
        O.beforeLoadDeferred = $.Deferred();
        
        iAJAX({
          'url' : '/ajax/page_popup.php',
          'data': {
            'page': HREF.split('/')[1]
          },
          'cache': true,
          'type' : 'POST',
          'success':function(data){
            
            O.popup.inc.html(
              '<div class="PopupTitle">'+Title+'</div>'+
              '<div class="Text manual">'+data+'</div>'
            );
            
            O.beforeLoadDeferred.resolve()
          }
        });
        
      }
    });
  });
  
  
  $('.jsAnchor').each(function(){
    var
    T = $(this),
    HREF = T.attr('href'),
    Goal = $('a[name="' + ( HREF.split('#')[1] ) + '"]');
    
    T.on('click',function(e){
      e.preventDefault();
      
      $('html,body').animate({ 'scrollTop': Goal.offset().top - 50 }, 500);
    });
  });
  
  
});




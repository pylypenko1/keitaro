// Событие загрузки нужных загружаемых шрифтов
(function($){ $.fn.font_load = function(
  FontsArray // Массив шрифтов
){
  // Преобразование строки в массив
  if(!$.isArray(FontsArray)){
    FontsArray = [ FontsArray ];
  }
  
  // Функция после загрузки
  var Func = arguments.length >= 2 ? arguments[1] : null;        
  
  var 
  RefreshDelay = 50,
  RefreshVAR,
  
  D  = $.Deferred(),
  D1 = $.Deferred(),
  D2 = $.Deferred(),
  
  MP;
  
  $(function(){
    D1.resolve();
    
    var 
    TotalCount  = FontsArray.length,
    SettedFonts = 0;
    
    // Создаем общий див
    var ID = 'Random_'+Math.floor( Math.random()*1000000 );
    $('body').prepend('<div id="'+ID+'" style="font-size:50px;height:0px;overflow:hidden;white-space:nowrap;"></div>');
    MP = $('#'+ID);
    
    // Узлы спанов
    var SPAN = [],
    
    // Состояния загрузки по i-му шрифту
    Loaded = (function(){
      var A = [];
      for(var i=0;i<FontsArray.length;i++) A[i] = false;
      return A;
    }()),
    
    // Тестовая надпись
    Text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ligula ac nunc ultrices dictum. Praesent tempor porttitor erat et tincidunt. Proin sodales adipiscing urna, id bibendum tellus pretium et.';
    
    // Создаем узлы для сравнения
    for(var i=0;i<FontsArray.length;i++){
      // Создаем 2 дива со спанами
      MP.append(
      '<div>'+
        // Одному даем шрифт monospace
        '<div><span style="font-family:monospace;">'+Text+'</span></div>'+
        
        // Другому даем шрифт 'font'+',monospace'
        '<div><span style="font-family:\''+FontsArray[i]+'\',monospace;">'+Text+'</span></div>'+
      '</div>'
      );
      
      // Устанавливаем узлы спанов в переменную
      SPAN[i] = [
        MP.children('div').eq(i).find('span').eq(0),
        MP.children('div').eq(i).find('span').eq(1)
      ];
    }
    
    // В цикле:
    (function(){
      var a = function(){
        var DoAgain = false;
        
        for(var i=0;i<FontsArray.length;i++){
          if(!Loaded[i]){ // Если шрифт ещё не загружен
            // Сравниваем их ширины
            if(Math.abs(SPAN[i][0].outerWidth() - SPAN[i][1].outerWidth()) < 1){ // Ширины не отличаются
              DoAgain = true;
            }
            else{ // Ширины отличаются
              Loaded[i] = true;
            }
          }
          // Если шрифт загружен -> ничего не делаем
        }
        if(DoAgain) RefreshVAR = setTimeout( a, RefreshDelay );
        else D2.resolve();
      }
      RefreshVAR = setTimeout( a, RefreshDelay );
    }());
  });
  
  // Момент, когда действительно загрузились нужные шрифты
  $.when( D1, D2 ).done(function(){ 
    clearTimeout(RefreshVAR); // Очистка цикла (на всякий случай)
    MP.remove();
  });
  // Ветвление в зависимости от того, что выдается
  if(Func){ // Метод ипользуется, когда нацепляемая функция всего одна
    $.when( D1, D2 ).done(function(){ Func(); });
  }
  else{ // Метод используется, когда нацепляемых функций несколько -> они все цепляются об D
    $.when( D1, D2 ).done(function(){ D.resolve(); });
    return D;
  };
  
}; })(jQuery);
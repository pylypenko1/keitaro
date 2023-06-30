FontLoad.done(function(){ // После загрузки нужных шрифтов
  
  Language = $('html').attr('lang') || 'en';
  
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
  
  
  // Новости -> газета
  (function(){
    var O = {};
    
    var 
    MP   = $('div.conNewCurrency'),
    Node = MP.children('div.BG');
    
    O.start = Node.offset().top;
    O.end   = O.start + Node.outerHeight();
    O.start += 50;
    
    O.style = '';
    
    O.action = function( Percent ){
      Percent *= 1.55;
      if(Percent > 1) Percent = 1;
      
      var
      Scale = Math.round( Percent * 1000 ) / 1000,
      Angle = Math.round( Percent * 720 ) % 360;
      
      var 
      style = '';
      
      var
      A = [ '-moz-', '-o-', '-webkit-', '' ];
      for(var i=0,L=A.length;i<L;i++){
        style += A[i]+'transform:scale('+Scale+', '+Scale+') rotate('+Angle+'deg);';
      }
      
      if(O.style !== style){
        O.style = style;
        Node.attr('style',style);
      }
    };
    
    Objects.push(O);
  }());
  
  
  // Карта
  (function(){
    var 
    O = {};
    
    var
    MP = $('div.conOverWorld div.Map'),
    E  = MP.find('div.E');
    
    var
    Es = [];
    
    var i = 0;
    E.each(function(){
      Es.push({
        'node' : $(this),
        'class': 'E hidden'
      });
      i++;
    });
    
    O.start = MP.offset().top;
    O.end   = O.start + MP.outerHeight();
    
    O.start += 100;
    
    O.action = function(Percent){
      var
      Visible = Math.round( (E.length-1) * Percent ),
      Class;
      
      for(var i=0,L=E.length;i<L;i++){
        Class = 'E';
        if( i > Visible ) Class += ' hidden';
        
        if(Es[i]['class'] !== Class){
          Es[i]['class'] = Class;
          Es[i]['node'].attr('class',Class);
        }
      }
    };
    
    Objects.push(O);
  }());
  
  
  // Банкомат
  (function(){
    var
    O = {};
    
    var 
    MP   = $('div.conATM'),
    Node = MP.children('div.BG').children('b');
    
    O.start = MP.offset().top;
    O.end   = O.start + MP.outerHeight();
    
    O.style = '';
    
    var
    min = -1500,
    max = -490;
    
    O.action = function( Percent ){
      // Окончание на середине
      Percent *= 1.8;
      if(Percent > 1) Percent = 1;
      
      var
      marginLeft = Math.round(min + Percent * (max - min));
      
      var
      style = 'margin-left:'+marginLeft+'px;';
      
      if(O.style !== style){
        O.style = style;
        Node.attr('style',style);
      }
    };
    
    Objects.push(O);
  }());
  
  
  // веритас монета
  (function(){
    var
    O = {};
    
    var
    MP   = $('div.conBigCoin'),
    Node = MP.children('div.BG');
    
    var
    Photo = {};
    Photo.height = 600;
    
    O.start = MP.offset().top;
    O.end   = O.start + MP.outerHeight();
    
    var
    min = 0,
    max = Photo.height - (O.end - O.start);
    
    O.style = '';
    
    O.action = function(Percent){
      var
      bgp = Math.round( min + (max - min) * Percent );
      
      var
      style = 'background-position:50% -'+bgp+'px';
      
      if(O.style !== style){
        O.style = style;
        Node.attr('style',style);
      }
    };
    
    Objects.push(O);
  }());
  
  
  // Форекс мёртв
  (function(){
    var O = {};
    
    var
    MP   = $('div.conForexDead'),
    Node = MP.find('div.Img img');
    
    O.start = Node.offset().top;
    O.end   = O.start + Node.outerHeight();
    O.start += 50;
    
    O.action = function(Percent){
      Percent *= 1.5;
      if(Percent > 1) Percent = 1;
      
      var
      Scale = Math.round( Percent * 1000 ) / 1000;
      
      var 
      style = '';
      
      var
      A = [ '-moz-', '-o-', '-webkit-', '' ];
      for(var i=0,L=A.length;i<L;i++){
        style += A[i]+'transform:scale('+Scale+', '+Scale+');';
      }
      
      if(O.style !== style){
        O.style = style;
        Node.attr('style',style);
      }
    };
    
    Objects.push(O);
  }());
  
  
  
  
  // How Does It Work?
  (function(){
    var 
    O = {};
    
    var
    MP   = $('div.conHowWork'),
    Node = MP.children('div.BG');
    
    O.start = MP.offset().top;
    O.end   = O.start + MP.outerHeight();
    
    O.style = '';
    
    O.action = function(Percent){
      var
      bgp = Math.round(10000 * Percent) % 2500;
      
      var
      style = 'background-position:'+bgp+'px 0;';
      
      if(O.style !== style){
        O.style = style;
        Node.attr('style',style);
      }
    };
    
    Objects.push(O);
  }());
  
  
  // What's behind
  (function(){
    var
    O = {};
    
    var
    MP = $('div.conWhatsBehind div.Circles');
    
    O.start = MP.offset().top;
    O.end   = O.start + MP.outerHeight();
    
    // Установка узлов
    var
    Circles = MP.find('div.Circle,div.ProfitCircle'),
    Dots    = MP.find('div.Dot');
    
    
    var
    E = [];
    
    var
    Crawler = function(P){
      var Node = P.children();
      E.push({
        'parent': P,
        'node'  : Node,
        'height': P.height(),
        'state' : 0,
        'start' : Math.round( P.offset().top + Number( P.css('padding-top').split('px')[0] ) )
      });
    };
    
    // Crawler( Circles.eq(0) );
    Crawler( Dots.eq(0) ); Crawler( Dots.eq(1) ); Crawler( Dots.eq(2) );
    Crawler( Circles.eq(1) );
    Crawler( Dots.eq(3) ); Crawler( Dots.eq(4) ); Crawler( Dots.eq(5) );
    Crawler( Circles.eq(2) );
    Crawler( Dots.eq(6) ); Crawler( Dots.eq(7) ); Crawler( Dots.eq(8) );
    Crawler( Circles.eq(3) );
    
    
    O.action = function(Percent){
      for(var i=0,L=E.length;i<L;i++){
        var OO = E[i];
        
        var N;
        
        var
        min = OO.start - Save.screen.H,
        max = OO.start,
        
        MX = (Save.screen.scrollTop - min) / (max - min);
        MX *= 1.8;
        if( MX > 1 ) MX = 1;
        
        if(MX < 1){
          N = Math.round( (1 - MX) * 1000 * (1 + i*0.2) );
        }
        else{
          N = 0;
        }
        
        OO.node.attr('style','top:'+N+'px;');
      }
    };
    
    Objects.push(O);
  }());
  
  
  // Привязка событий
  $(window).on('scroll resize',Scroll);
  
  // Стартовый запуск
  Scroll();
  

  
  
  // Публичный аккаунт
  (function(){
    var
    DisableAll = false; 
    
    var 
    MP = $('div.DemoAcc'),
    GraphDIVs = MP.find('div.Graph');
    
    var
    Sel = MP.find('div.Sel>div.e');
    
    var
    Operations  = MP.find('div.Operations div.Table'),
    MonthProfit = MP.find('.jsMonthProfit'),
    MtgoxPrice  = MP.find('.jsMtgoxPrice'),
    BtcePrice   = MP.find('.jsBtcePrice');
    
    var
    InProcess = false;
    
    var CreateChartObj = function(O){
      var BaseO = {
        chart: {
          borderRadius: 0,
          plotBorderColor: '#000000',
          plotBorderWidth: 2,
          spacingTop: 5,
          spacingRight: 1,
          spacingBottom: 5,
          spacingLeft: 0,
          style: {
            fontFamily: 'Arial, Helvetica, sans-serif'
          }
        },
        xAxis: {
          type: 'datetime',
          gridLineWidth: 1,
          startOnTick: true,
          endOnTick: true,
          dateTimeLabelFormats: {
            week: '%e %b'
          },
          labels: {
            overflow: 'justify'
          },
          tickLength: 0
        },
        credits:{
          enabled: false
        },
        title: {
          text: null
        },
        tooltip:{
          animation: false
        }
      };
      
      return $.extend(true, BaseO, O); 
    };
    
    var
    Funds = {};
    Funds.div  = GraphDIVs.eq(0);
    Funds.text = MP.find('.jsFundsTitle');
    
    if( !Funds.div.find('input').val() ){
      DisableAll = true;
    }
    
    if(!DisableAll){
      (function(){
        var BaseData = $.parseJSON( Funds.div.find('input').val() );
        
        if(BaseData){
          var
          Totals = [];
          for(var i=0,L=BaseData.length;i<L;i++){
            Totals[i] = [ BaseData[i].time, BaseData[i].total ];
          }
          
          Funds.div.html( '<div id="FundsGraph" style="height:100%"></div>' );
          Funds.node = $('#FundsGraph');
          
          Funds.chart = new Highcharts.Chart( CreateChartObj({
            chart: {
              renderTo: Funds.node[0]
            },
            series: [{
              name: Language === 'en' ? 'Funds' : 'Средства',
              data: Totals,
              marker:{
                enabled: false,
                radius: 0
              },
              states: {
                hover: {
                  enabled: false
                }
              },
              color: '#edc240',
              shadow: true
            }],
            yAxis: {
              title: {
                text: null
              },
              tickPixelInterval: 45
            },
            xAxis: {
              tickPixelInterval: 80
            },
            legend: {
              enabled: false
            }
          }));
        }
          
      }());
      
      var
      Prices = {};
      Prices.div = GraphDIVs.eq(1);
      
      (function(){
        var BaseData = $.parseJSON( Prices.div.find('input').val() );
        
        if(BaseData){
          var
          BTCE = [],
          StartI = Math.round( BaseData.length * 3 / 4);
          for(var i=0,j=StartI,L=BaseData.length;j<L;i++,j++){
            BTCE[i] = [ BaseData[j].time, BaseData[j].btce ];
          }
          
          var
          MTGOX = [];
          for(var i=0,L=BaseData.length;i<L;i++){
            MTGOX[i] = [ BaseData[i].time, BaseData[i].mtgox ];
          }
          
          Prices.div.html( '<div id="PricesGraph" style="height:100%"></div>' );
          Prices.node = $('#PricesGraph');
          
          Prices.chart = new Highcharts.Chart( CreateChartObj({
            chart: {
              renderTo: Prices.node[0]
            },
            series: [
              { name: Language === 'en' ? 'BTC-e Price' : 'Курс на BTC-e',
                data: BTCE,
                marker:{
                  enabled: false,
                  radius: 0
                },
                states: {
                  hover: {
                    enabled: false
                  }
                },
                color: '#edc240',
                shadow: true
              }
            ],
            yAxis: {
              title: {
                text: null
              },
              tickPixelInterval: 40
            },
            xAxis: {
              tickPixelInterval: 120
            },
            legend: {
              enabled: false
            },
            plotOptions: {
              line: {
                events: {
                  legendItemClick:function(){
                    return false; 
                  }
                }
              }
            }
          }) );
        }
        
        
      }());
        
      Sel.on('click',function(){
        var 
        T = $(this);
        
        if( !InProcess && !T.hasClass('active') ){
          InProcess = true;
          
          var 
          Index = Sel.index(T);
          
          Sel.removeClass('active');
          T.addClass('active');
          
          var
          TimeInterval = (function(){
            var a; 
            switch(Index){
              case 0: a = 'day'; break;
              case 1: a = 'week'; break;
              case 2: a = 'month'; break;
            }
            return a;
          }());
          
          iAJAX({
            'url' : '/ajax/public_account.php',
            'type': 'POST',
            'data': { 'time': TimeInterval },
            'dataType': 'json',
            'success':function(O){
              console.log( O );
              
              // Обновляем данные
              var
              Totals = [];
              for(var i=0,L=O.funds.length;i<L;i++){
                Totals[i] = [ O.funds[i].time, O.funds[i].total ];
              }
              
              var
              BTCE = [];
              for(var i=0,L=O.price.length;i<L;i++){
                BTCE[i] = [ O.price[i].time, O.price[i].btce ];
              }
              
              var
              MTGOX = [];
              for(var i=0,L=O.price.length;i<L;i++){
                MTGOX[i] = [ O.price[i].time, O.price[i].mtgox ];
              }
              
              // Графы
              Funds.chart.series[0].setData( Totals );
              Prices.chart.series[0].setData( BTCE );
              // Prices.chart.series[1].setData( MTGOX );
              
              // Узлы
              Operations.html( O.operations );
              MonthProfit.html( O.profit );
              MtgoxPrice.html( O.mtgox_price );
              BtcePrice.html( O.btce_price );
              Funds.text.html( O.funds_text );
              
              InProcess = false;
            }
          });
        }
      });
    }
  }());
  
  
  (function(){
    var
    Goal = $('a[name="Plans"]'),
    Initiator = $('div.PlanCorner');
    
    Initiator.on('click',function(){
      var
      Top = Goal.offset().top - 50;
      
      $('html,body').animate({ 'scrollTop': Top }, 500);
    });
  }());
  
  
  if( $('input[type="hidden"][name="exit_splash"]').length ) ExitSplash({
    'message': '***************************************\n  \n        > > > W A I T < < <\n \n    CLICK THE *CANCEL* BUTTON RIGHT NOW\n   & Get FREE 33 Page Insider Secrets Bitcoin Trading Ebook\n  \n      > CLAIM YOUR FREE BOOK RIGHT NOW! <   \n \n  ***************************************',
    'iframe_url': '/exit_splash.php?language='+Language
  });
  
  
  // Скрытый кусок, который меняется
  (function(){
    var
    Plate = $('div.ProfitMonitor');
    
    var
    Change = {};
    Change.node = Plate.find('div.Change');
    Change.inc  = Change.node.children('div.in');
    Change.node.css( 'min-height', Change.inc.height() );
    
    Change.name = Change.inc.find('.Name');
    Change.mail = Change.inc.find('.Mail');
    Change.profit = Change.inc.find('.Profit');
    Change.date = Change.inc.find('.Date');
    Change.plan = Change.inc.find('.License b');
    
    setTimeout( function(){
      var A = [];
      $('div.ProfitPlates div.Plate>div.in').each(function(){
        var 
        T = $(this);
        
        var O = {};
        
        O['name'] = $.trim( T.find('div.NameMail .Name').html() );
        O['mail'] = $.trim( T.find('div.NameMail div.Mail>div.in').html() );
        O['profit'] = $.trim( T.find('div.Profit .Value').html() );
        
        if( Language === 'en' ){
          O['plan'] = $.trim( T.find('div.Plan').html().split('Bitcoin Robot')[0] );
          O['date'] = $.trim( T.find('div.Date').html().split('Joined')[1] );
        }
        else{
          O['plan'] = $.trim( T.find('div.Plan').html().split('Тариф')[1] );
          O['date'] = $.trim( T.find('div.Date').html().split('С нами с')[1] );
        }
        
        
        
        A.push(O);
      });
      
      var SetData = function(){
        var 
        Index = Math.floor( Math.random() * A.length ),
        O = A[Index];
        
        Change.name.html( O['name'] );
        Change.mail.html( O['mail'] );
        Change.profit.html( O['profit'] );
        Change.profit.attr('title', O['profit']);
        Change.date.html( O['date'] );
        Change.plan.html( O['plan'] );
      };
      
      SetData();
      
      if( $.support.opacity || $.support.opacity == null ){
        Plate.fadeIn(500);
      }
      else{
        Plate.show();
      }
      
      var 
      Timeout,
      a = function(){
        Change.inc.fadeOut(500,function(){
          SetData();
          Change.inc.fadeIn(500,function(){
            Timeout = setTimeout(a, 20000);
          });
        });
      };
      Timeout = setTimeout(a, 20000);
      
      Plate.find('div.toClose').on('click',function(){
        clearTimeout(Timeout);
        if( $.support.opacity || $.support.opacity == null ){
          Plate.fadeOut(500);
        }
        else{
          Plate.hide();
        }
      });
    }, 20000);
    
  }());
  
});

 // Currencies flow into BTC
$(function(){
    
    flying_coins = function (options) {
        this.settings = options;
        
        this.random = function (min, max) {
            //return random (2*max)-max + min;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }    
       
        this.node = $(this.settings.node);
        this.sum_node = $(this.settings.sum_node);
	this.sum_node.text('+' + this.random(900, 1100));
        this.in_progress_count = 0;
        
        this.coins = [];
        for (var i=0; i<this.settings.flags_count; i++){
            var coin_name = 'flying_coins_coin_'+i;
            this.node.append($('<div class="coin" style="display: none;" id="'+coin_name+'"></div>'));
            this.coins.push( {idx: i, left: this.settings.flags_left + i*(this.settings.flags_width+this.settings.flags_space), node: $('#'+coin_name)} );
        }
        
        this._move_coin = function(idx, complete_callback){
            this.in_progress_count ++;
            
            this.coins[idx].sum = this.random(this.settings.sum_low_bound, this.settings.sum_hi_bound);
            this.coins[idx].node.text('+' + this.coins[idx].sum + ' BTC');
            this.coins[idx].node.css({left: this.coins[idx].left, top: this.settings.flags_top})
            //this.coins[idx].node.show();
            this.coins[idx].node.fadeIn(1000);
            
            var _this = this;
            
            this.coins[idx].node.animate({
                left: this.settings.target_left,
                top: this.settings.target_top
                },
                this.settings.coin_duration,
                'swing',
                function(){
                    var sum = parseInt(_this.sum_node.text());
                    sum += _this.coins[idx].sum;
                    _this.sum_node.text((sum>0?'+':'')+sum);
                    _this.coins[idx].node.fadeOut(1000);
                    //_this.coins[idx].node.hide();
                    
                    _this.in_progress_count --;
                    
                    if (complete_callback) complete_callback(idx);
                    _this.move_coin(idx);
                }
                );
        }
        
        this.move_coin = function(idx, tmo, complete_callback){
            
            if (typeof(tmo)=='undefined') tmo = this.random(this.settings.min_wait_timeout, this.settings.max_wait_timeout);
            
            var 
                _this = this;
                
            setTimeout(function(){
                if (_this.in_progress_count>2) {
                    // retry after small interval
                    _this.move_coin(idx, 500);
                }
                else
                    _this._move_coin(idx, complete_callback)
                }, tmo);
        }
        
        this.start = function() {
            var start_order = [];
            for (var i=0; i<this.coins.length; i++) start_order.push(i);
            
            // Knuth Shuffle(aka the Fisher-Yates shuffle) Algorithm.
            for (var i = start_order.length-1; i > 1  ; i--){
                var r = Math.floor(Math.random()*i);
                var t = start_order[i];
                start_order[i] = start_order[r];
                start_order[r] = t;
            }            
            
            var tm_total = 0;
            for (var i=0; i<this.coins.length; i++) {
               
                if (i==0) {
                    this._move_coin(start_order[i]);
                }
                else {
                    var tm = this.random(500 /* fadein-out*/, this.settings.coin_duration);
                    if (i==1) tm = 500;
                        
                    //tm = 1000;
                    
                    tm_total += tm;
                    this.move_coin(start_order[i], tm_total);
                }
                
            }
        }
        
        return this;
    }
    
    FlyingCoins = new flying_coins({
                        node: '.FlowC>.in',
                        sum_node: '.FlowC>.in .TotalSum>span',
                        sum_low_bound: 1,
                        sum_hi_bound: 64,
                        coin_duration: 3000,
                        flags_left: 83, flags_top: 644-30, flags_space: 40, flags_width: 24, flags_count: 14,
                        min_wait_timeout: 5000, max_wait_timeout: 20000,
                        target_left: 402-8, target_top: 170
                    });
    
    FlyingCoins.start();
    
});


function ExitSplash(params){
  params = params || {};
  params.message = params.message || '';
  params.iframe_url;
  params.url_type = params.url_type || 'static';
  params.extra_desctruction = params.extra_desctruction || function(){};
  
  PreventExitSplash = false;
  
  if(params.url_type == 'static'){
    $('a[target!="_blank"]').on('click',function(){
      PreventExitSplash = true;
    });
  }
  else{
    $(document).on('click','a[target!="blank"]',function(){
      PreventExitSplash = true;
    });
  }
  
  
  // Disabling forms
  (function(){
    var f = document.getElementsByTagName('form');
    for (var i=0;i<f.length;i++){
      if(!f[i].onclick){ f[i].onclick=function(){ PreventExitSplash=true; }}
      else if (!f[i].onsubmit){ f[i].onsubmit=function(){ PreventExitSplash=true; }}
    }
  }());
  
  
  $(window).off('beforeunload');
  $(window).on('beforeunload',function(){
    if(!PreventExitSplash){
      var 
      BODY = $('body');
      
      params.extra_desctruction();
      
      BODY.children('div,table').remove();
      $('html,body').scrollTop(0);
      BODY.append(
        '<div id="mainIframeOuterTrue" style="position:fixed;top:0;left:0;width:100%;height:100%;display:none;"><iframe style="width:100%;height:100%;display:block" scrolling="auto" frameborder="0" src="'+params.iframe_url+'"></iframe></div>'
      );
      $("#mainIframeOuterTrue").show();
      
      PreventExitSplash = true; // For idiot browsers

      return params.message;
    }
  });
};
function isTouchEnabled() {
 	return (('ontouchstart' in window)
      	|| (navigator.MaxTouchPoints > 0)
      	|| (navigator.msMaxTouchPoints > 0));
}
jQuery(function(){
	jQuery("path[id^=\"ro_\"]").each(function (i, e) {
		addEvent( jQuery(e).attr('id') );
	});
})
function addEvent(id,relationId){
	var _obj = jQuery('#'+id);
	var _Textobj = jQuery('#'+id+','+'#'+ro_config[id]['visnames']);
	var _h = jQuery('#map').height();

	jQuery('#'+['visnames']).attr({'fill':ro_config['default']['visnames']});

		_obj.attr({'fill':ro_config[id]['upclr'],'stroke':ro_config['default']['borderclr']});
		_Textobj.attr({'cursor':'default'});
		if(ro_config[id]['enbl'] == true){
			if (isTouchEnabled()) {
				_Textobj.on('touchstart', function(e){
					var touch = e.originalEvent.touches[0];
					var x=touch.pageX-10, y=touch.pageY+(-15);
					var maptipw=jQuery('#tipro').outerWidth(), maptiph=jQuery('#tipro').outerHeight(), 
					x=(x+maptipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-maptipw-(20*2) : x
					y=(y+maptiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-maptiph-10 : y
					if(ro_config[id]['targt'] != 'none'){
						jQuery('#'+id).css({'fill':ro_config[id]['dwnclr']});
					}
					jQuery('#tipro').show().html(ro_config[id]['hover']);
					jQuery('#tipro').css({left:x, top:y})
				})
				_Textobj.on('touchend', function(){
					jQuery('#'+id).css({'fill':ro_config[id]['upclr']});
					if(ro_config[id]['targt'] == '_blank'){
						window.open(ro_config[id]['url']);	
					}else if(ro_config[id]['targt'] == '_self'){
						window.parent.location.href=ro_config[id]['url'];
					}
					jQuery('#tipro').hide();
				})
			}
			_Textobj.attr({'cursor':'pointer'});
			_Textobj.hover(function(){
				//moving in/out effect
				jQuery('#tipro').show().html(ro_config[id]['hover']);
				_obj.css({'fill':ro_config[id]['ovrclr']})
			},function(){
				jQuery('#tipro').hide();
				jQuery('#'+id).css({'fill':ro_config[id]['upclr']});
			})
			if(ro_config[id]['targt'] != 'none'){
				//clicking effect
				_Textobj.mousedown(function(){
					jQuery('#'+id).css({'fill':ro_config[id]['dwnclr']});
				})
			}
			_Textobj.mouseup(function(){
				jQuery('#'+id).css({'fill':ro_config[id]['ovrclr']});
				if(ro_config[id]['targt'] == '_blank'){
					window.open(ro_config[id]['url']);	
				}else if(ro_config[id]['targt'] == '_self'){
					window.parent.location.href=ro_config[id]['url'];
				}
			})
			_Textobj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var maptipw=jQuery('#tipro').outerWidth(), maptiph=jQuery('#tipro').outerHeight(), 
				x=(x+maptipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-maptipw-(20*2) : x
				y=(y+maptiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-maptiph-10 : y
				jQuery('#tipro').css({left:x, top:y})
			})
		}	
}
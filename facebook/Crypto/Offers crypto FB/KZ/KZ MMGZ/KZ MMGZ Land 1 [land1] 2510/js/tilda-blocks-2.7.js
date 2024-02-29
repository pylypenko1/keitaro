function t396_init(b){var c="";var a=t396_detectResolution();t396_initTNobj();t396_switchResolution(a);t396_updateTNobj();t396_artboard_build(c,b);window.tn_window_width=$(window).width();$(window).resize(function(){tn_console(">>>> t396: Window on Resize event >>>>");t396_waitForFinalEvent(function(){if($isMobile){var e=$(window).width();if(e!=window.tn_window_width){t396_doResize(b)}}else{t396_doResize(b)}},500,"resizeruniqueid"+b)});$(window).on("orientationchange",function(){tn_console(">>>> t396: Orient change event >>>>");t396_waitForFinalEvent(function(){t396_doResize(b)},600,"orientationuniqueid"+b)});$(window).load(function(){var e=$("#rec"+b).find(".t396__artboard");t396_allelems__renderView(e)});var d=$("#rec"+b);if(d.attr("data-connect-with-tab")=="yes"){d.find(".t396").bind("displayChanged",function(){var e=d.find(".t396__artboard");t396_allelems__renderView(e)})}}function t396_doResize(b){var d=$(window).width();window.tn_window_width=d;var a=t396_detectResolution();var c=$("#rec"+b).find(".t396__artboard");t396_switchResolution(a);t396_updateTNobj();t396_ab__renderView(c);t396_allelems__renderView(c)}function t396_detectResolution(){var b=$(window).width();var a;a=1200;if(b<1200){a=960}if(b<960){a=640}if(b<640){a=480}if(b<480){a=320}return(a)}function t396_initTNobj(){tn_console("func: initTNobj");window.tn={};window.tn.canvas_min_sizes=["320","480","640","960","1200"];window.tn.canvas_max_sizes=["480","640","960","1200",""];window.tn.ab_fields=["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"]}function t396_updateTNobj(){tn_console("func: updateTNobj");if(typeof window.zero_window_width_hook!="undefined"&&window.zero_window_width_hook=="allrecords"&&$("#allrecords").length){window.tn.window_width=parseInt($("#allrecords").width())}else{window.tn.window_width=parseInt($(window).width())}window.tn.window_height=parseInt($(window).height());if(window.tn.curResolution==1200){window.tn.canvas_min_width=1200;window.tn.canvas_max_width=window.tn.window_width}if(window.tn.curResolution==960){window.tn.canvas_min_width=960;window.tn.canvas_max_width=1200}if(window.tn.curResolution==640){window.tn.canvas_min_width=640;window.tn.canvas_max_width=960}if(window.tn.curResolution==480){window.tn.canvas_min_width=480;window.tn.canvas_max_width=640}if(window.tn.curResolution==320){window.tn.canvas_min_width=320;window.tn.canvas_max_width=480}window.tn.grid_width=window.tn.canvas_min_width;window.tn.grid_offset_left=parseFloat((window.tn.window_width-window.tn.grid_width)/2)}var t396_waitForFinalEvent=(function(){var a={};return function(d,b,c){if(!c){c="Don't call this twice without a uniqueId"}if(a[c]){clearTimeout(a[c])}a[c]=setTimeout(d,b)}})();function t396_switchResolution(a,b){tn_console("func: switchResolution");if(typeof b=="undefined"){if(a==1200){b=""}if(a==960){b=1200}if(a==640){b=960}if(a==480){b=640}if(a==320){b=480}}window.tn.curResolution=a;window.tn.curResolution_max=b}function t396_artboard_build(c,a){tn_console("func: t396_artboard_build. Recid:"+a);tn_console(c);var b=$("#rec"+a).find(".t396__artboard");t396_ab__renderView(b);b.find(".tn-elem").each(function(){var d=$(this);if(d.attr("data-elem-type")=="text"){t396_addText(b,d)}if(d.attr("data-elem-type")=="image"){t396_addImage(b,d)}if(d.attr("data-elem-type")=="shape"){t396_addShape(b,d)}if(d.attr("data-elem-type")=="button"){t396_addButton(b,d)}if(d.attr("data-elem-type")=="video"){t396_addVideo(b,d)}if(d.attr("data-elem-type")=="html"){t396_addHtml(b,d)}if(d.attr("data-elem-type")=="tooltip"){t396_addTooltip(b,d)}if(d.attr("data-elem-type")=="form"){t396_addForm(b,d)}if(d.attr("data-elem-type")=="gallery"){t396_addGallery(b,d)}});$("#rec"+a).find(".t396__artboard").removeClass("rendering").addClass("rendered");if(b.attr("data-artboard-ovrflw")=="visible"){$("#allrecords").css("overflow","hidden")}if($isMobile){$("#rec"+a).append("<style>@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}</style>")}}function t396_ab__renderView(f){var b=window.tn.ab_fields;for(var e=0;e<b.length;e++){t396_ab__renderViewOneField(f,b[e])}var g=t396_ab__getFieldValue(f,"height");var c=t396_ab__getHeight(f);var a=0;if(g==c){a=0}else{var d=t396_ab__getFieldValue(f,"valign");if(d=="top"){a=0}else{if(d=="center"){a=parseFloat((c-g)/2).toFixed(1)}else{if(d=="bottom"){a=parseFloat((c-g)).toFixed(1)}else{if(d=="stretch"){a=0;g=c}else{a=0}}}}}f.attr("data-artboard-proxy-min-offset-top",a);f.attr("data-artboard-proxy-min-height",g);f.attr("data-artboard-proxy-max-height",c)}function t396_addText(d,c){tn_console("func: addText");var b="top,left,width,container,axisx,axisy,widthunits,leftunits,topunits";var a=b.split(",");c.attr("data-fields",b);t396_elem__renderView(c)}function t396_addImage(d,c){tn_console("func: addImage");var b="img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits";var a=b.split(",");c.attr("data-fields",b);t396_elem__renderView(c);c.find("img").on("load",function(){t396_elem__renderViewOneField(c,"top");if(typeof $(this).attr("src")!="undefined"&&$(this).attr("src")!=""){setTimeout(function(){t396_elem__renderViewOneField(c,"top")},2000)}}).each(function(){if(this.complete){$(this).load()}});c.find("img").on("tuwidget_done",function(g,f){t396_elem__renderViewOneField(c,"top")})}function t396_addShape(d,c){tn_console("func: addShape");var b="width,height,top,left,";b+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits";var a=b.split(",");c.attr("data-fields",b);t396_elem__renderView(c)}function t396_addButton(d,c){tn_console("func: addButton");var b="top,left,width,height,container,axisx,axisy,caption,leftunits,topunits";var a=b.split(",");c.attr("data-fields",b);t396_elem__renderView(c);return(c)}function t396_addVideo(q,e){tn_console("func: addVideo");var k="width,height,top,left,";k+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits";var m=k.split(",");e.attr("data-fields",k);t396_elem__renderView(e);var g=e.find(".tn-atom__videoiframe");var d=e.find(".tn-atom");d.css("background-color","#000");var a=d.attr("data-atom-video-has-cover");if(typeof a=="undefined"){a=""}if(a=="y"){d.click(function(){var r=g.find("iframe");if(r.length){var s=r.attr("data-original");r.attr("src",s)}d.css("background-image","none");d.find(".tn-atom__video-play-link").css("display","none")})}var f=t396_elem__getFieldValue(e,"autoplay");var n=t396_elem__getFieldValue(e,"showinfo");var l=t396_elem__getFieldValue(e,"loop");var h=t396_elem__getFieldValue(e,"mute");var i=t396_elem__getFieldValue(e,"startsec");var p=t396_elem__getFieldValue(e,"endsec");var j=$("#allrecords").attr("data-tilda-mode");var b="";var o=g.attr("data-youtubeid");if(typeof o!="undefined"&&o!=""){b="//www.youtube.com/embed/";b+=o+"?rel=0&fmt=18&html5=1";b+="&showinfo="+(n=="y"?"1":"0");if(l=="y"){b+="&loop=1&playlist="+o}if(i>0){b+="&start="+i}if(p>0){b+="&end="+p}if(h=="y"){b+="&mute=1"}if(a=="y"){b+="&autoplay=1";g.html('<iframe id="youtubeiframe" width="100%" height="100%" data-original="'+b+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>')}else{if(typeof j!="undefined"&&j=="edit"){}else{if(f=="y"){b+="&autoplay=1"}}if(window.lazy=="y"){g.html('<iframe id="youtubeiframe" class="t-iframe" width="100%" height="100%" data-original="'+b+'" frameborder="0" allowfullscreen data-flag-inst="lazy"></iframe>');e.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});<\/script>')}else{g.html('<iframe id="youtubeiframe" width="100%" height="100%" src="'+b+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>')}}}var c=g.attr("data-vimeoid");if(typeof c!="undefined"&&c>0){b="//player.vimeo.com/video/";b+=c+"?color=ffffff&badge=0";if(n=="y"){b+="&title=1&byline=1&portrait=1"}else{b+="&title=0&byline=0&portrait=0"}if(l=="y"){b+="&loop=1"}if(h=="y"){b+="&muted=1"}if(a=="y"){b+="&autoplay=1";g.html('<iframe data-original="'+b+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')}else{if(typeof j!="undefined"&&j=="edit"){}else{if(f=="y"){b+="&autoplay=1"}}if(window.lazy=="y"){g.html('<iframe class="t-iframe" data-original="'+b+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');e.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});<\/script>')}else{g.html('<iframe src="'+b+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')}}}}function t396_addHtml(d,c){tn_console("func: addHtml");var b="width,height,top,left,";b+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits";var a=b.split(",");c.attr("data-fields",b);t396_elem__renderView(c)}function t396_addTooltip(f,d){tn_console("func: addTooltip");var c="width,height,top,left,";c+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition";var a=c.split(",");d.attr("data-fields",c);t396_elem__renderView(d);var b=d.find(".tn-atom__pin");var e=d.find(".tn-atom__tip");var g=d.attr("data-field-tipopen-value");if(isMobile||(typeof g!="undefined"&&g=="click")){t396_setUpTooltip_mobile(d,b,e)}else{t396_setUpTooltip_desktop(d,b,e)}setTimeout(function(){$(".tn-atom__tip-img").each(function(){var h=$(this).attr("data-tipimg-original");if(typeof h!="undefined"&&h!=""){$(this).attr("src",h)}})},3000)}function t396_addForm(d,c){tn_console("func: addForm");var b="width,top,left,";b+="inputs,container,axisx,axisy,widthunits,leftunits,topunits";var a=b.split(",");c.attr("data-fields",b);t396_elem__renderView(c)}function t396_addGallery(d,c){tn_console("func: addForm");var b="width,height,top,left,";b+="imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits";var a=b.split(",");c.attr("data-fields",b);t396_elem__renderView(c)}function t396_elem__setFieldValue(c,f,d,a,e,b){if(b==""){b=window.tn.curResolution}if(b<1200&&f!="zindex"){c.attr("data-field-"+f+"-res-"+b+"-value",d)}else{c.attr("data-field-"+f+"-value",d)}if(a=="render"){elem__renderViewOneField(c,f)}if(e=="updateui"){panelSettings__updateUi(c,f,d)}}function t396_elem__getFieldValue(b,d){var a=window.tn.curResolution;var c;if(a<1200){if(a==960){c=b.attr("data-field-"+d+"-res-960-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-value")}}if(a==640){c=b.attr("data-field-"+d+"-res-640-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-res-960-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-value")}}}if(a==480){c=b.attr("data-field-"+d+"-res-480-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-res-640-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-res-960-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-value")}}}}if(a==320){c=b.attr("data-field-"+d+"-res-320-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-res-480-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-res-640-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-res-960-value");if(typeof c=="undefined"){c=b.attr("data-field-"+d+"-value")}}}}}}else{c=b.attr("data-field-"+d+"-value")}return(c)}function t396_elem__renderView(c){tn_console("func: elem__renderView");var a=c.attr("data-fields");if(!a){return !1}a=a.split(",");for(var b=0;b<a.length;b++){t396_elem__renderViewOneField(c,a[b])}}function t396_elem__renderViewOneField(c,g){var h=t396_elem__getFieldValue(c,g);if(g=="left"){h=t396_elem__convertPosition__Local__toAbsolute(c,g,h);c.css("left",parseFloat(h).toFixed(1)+"px")}if(g=="top"){h=t396_elem__convertPosition__Local__toAbsolute(c,g,h);c.css("top",parseFloat(h).toFixed(1)+"px")}if(g=="width"){h=t396_elem__getWidth(c,h);c.css("width",parseFloat(h).toFixed(1)+"px");var d=c.attr("data-elem-type");if(d=="tooltip"){var a=c.find(".tn-atom__pin-icon");if(a.length>0){var f=parseFloat(h).toFixed(1)+"px";a.css({width:f,height:f})}c.css("height",parseInt(h).toFixed(1)+"px")}if(d=="gallery"){var b=t396_elem__getFieldValue(c,"borderwidth");var i=t396_elem__getFieldValue(c,"borderstyle");if(i=="none"||typeof i=="undefined"||typeof b=="undefined"||b==""){b=0}h=h*1-b*2;c.css("width",parseFloat(h).toFixed(1)+"px");c.find(".t-slds__main").css("width",parseFloat(h).toFixed(1)+"px");c.find(".tn-atom__slds-img").css("width",parseFloat(h).toFixed(1)+"px")}}if(g=="height"){var d=c.attr("data-elem-type");if(d=="tooltip"){return}h=t396_elem__getHeight(c,h);c.css("height",parseFloat(h).toFixed(1)+"px");if(d==="gallery"){var b=t396_elem__getFieldValue(c,"borderwidth");var i=t396_elem__getFieldValue(c,"borderstyle");if(i=="none"||typeof i=="undefined"||typeof b=="undefined"||b==""){b=0}h=h*1-b*2;c.css("height",parseFloat(h).toFixed(1)+"px");c.find(".tn-atom__slds-img").css("height",parseFloat(h).toFixed(1)+"px");c.find(".t-slds__main").css("height",parseFloat(h).toFixed(1)+"px")}}if(g=="container"){t396_elem__renderViewOneField(c,"left");t396_elem__renderViewOneField(c,"top")}if(g=="width"||g=="height"||g=="fontsize"||g=="fontfamily"||g=="letterspacing"||g=="fontweight"||g=="img"){t396_elem__renderViewOneField(c,"left");t396_elem__renderViewOneField(c,"top")}if(g=="inputs"){h=c.find(".tn-atom__inputs-textarea").val();try{t_zeroForms__renderForm(c,h)}catch(e){}}}function t396_elem__convertPosition__Local__toAbsolute(c,m,n){n=parseInt(n);if(m=="left"){var e,k,b,j;var a=t396_elem__getFieldValue(c,"container");if(a=="grid"){e="grid";k=window.tn.grid_offset_left;b=window.tn.grid_width}else{e="window";k=0;b=window.tn.window_width}var d=t396_elem__getFieldValue(c,"leftunits");if(d=="%"){n=t396_roundFloat(b*n/100)}n=k+n;var g=t396_elem__getFieldValue(c,"axisx");if(g=="center"){j=t396_elem__getWidth(c);n=b/2-j/2+n}if(g=="right"){j=t396_elem__getWidth(c);n=b-j+n}}if(m=="top"){var p=c.parent();var e,i,o,l;var a=t396_elem__getFieldValue(c,"container");if(a=="grid"){e="grid";i=parseFloat(p.attr("data-artboard-proxy-min-offset-top"));o=parseFloat(p.attr("data-artboard-proxy-min-height"))}else{e="window";i=0;o=parseFloat(p.attr("data-artboard-proxy-max-height"))}var h=t396_elem__getFieldValue(c,"topunits");if(h=="%"){n=(o*(n/100))}n=i+n;var f=t396_elem__getFieldValue(c,"axisy");if(f=="center"){l=t396_elem__getHeight(c);n=o/2-l/2+n}if(f=="bottom"){l=t396_elem__getHeight(c);n=o-l+n}}return(n)}function t396_ab__setFieldValue(b,d,c,a){if(a==""){a=window.tn.curResolution}if(a<1200){b.attr("data-artboard-"+d+"-res-"+a,c)}else{b.attr("data-artboard-"+d,c)}}function t396_ab__getFieldValue(c,d){var a=window.tn.curResolution;var b;if(a<1200){if(a==960){b=c.attr("data-artboard-"+d+"-res-960");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"")}}if(a==640){b=c.attr("data-artboard-"+d+"-res-640");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"-res-960");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"")}}}if(a==480){b=c.attr("data-artboard-"+d+"-res-480");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"-res-640");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"-res-960");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"")}}}}if(a==320){b=c.attr("data-artboard-"+d+"-res-320");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"-res-480");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"-res-640");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"-res-960");if(typeof b=="undefined"){b=c.attr("data-artboard-"+d+"")}}}}}}else{b=c.attr("data-artboard-"+d)}return(b)}function t396_ab__renderViewOneField(b,c){var a=t396_ab__getFieldValue(b,c)}function t396_allelems__renderView(a){tn_console("func: allelems__renderView: abid:"+a.attr("data-artboard-recid"));a.find(".tn-elem").each(function(){t396_elem__renderView($(this))})}function t396_ab__filterUpdate(f){var c=f.find(".t396__filter");var b=c.attr("data-filtercolor-rgb");var a=c.attr("data-filtercolor2-rgb");var e=c.attr("data-filteropacity");var d=c.attr("data-filteropacity2");if((typeof a=="undefined"||a=="")&&(typeof b!="undefined"&&b!="")){c.css("background-color","rgba("+b+","+e+")")}else{if((typeof b=="undefined"||b=="")&&(typeof a!="undefined"&&a!="")){c.css("background-color","rgba("+a+","+d+")")}else{if(typeof b!="undefined"&&typeof a!="undefined"&&b!=""&&a!=""){c.css({background:"-webkit-gradient(linear, left top, left bottom, from(rgba("+b+","+e+")), to(rgba("+a+","+d+")) )"})}else{c.css("background-color","transparent")}}}}function t396_ab__getHeight(c,a){if(typeof a=="undefined"){a=t396_ab__getFieldValue(c,"height")}a=parseFloat(a);var b=t396_ab__getFieldValue(c,"height_vh");if(b!=""){b=parseFloat(b);if(isNaN(b)===!1){var d=parseFloat(window.tn.window_height*parseFloat(b/100));if(a<d){a=d}}}return(a)}function t396_hex2rgb(f){var e=parseInt(f.substring(1),16);var d=(e&16711680)>>16;var c=(e&65280)>>8;var a=e&255;return[d,c,a]}String.prototype.t396_replaceAll=function(a,b){var c=this;return c.replace(new RegExp(a,"g"),b)};function t396_elem__getWidth(a,d){if(typeof d=="undefined"){d=parseFloat(t396_elem__getFieldValue(a,"width"))}var b=t396_elem__getFieldValue(a,"widthunits");if(b=="%"){var c=t396_elem__getFieldValue(a,"container");if(c=="window"){d=parseFloat(window.tn.window_width*parseFloat(parseInt(d)/100))}else{d=parseFloat(window.tn.grid_width*parseFloat(parseInt(d)/100))}}return(d)}function t396_elem__getHeight(b,e){if(typeof e=="undefined"){e=t396_elem__getFieldValue(b,"height")}e=parseFloat(e);if(b.attr("data-elem-type")=="shape"||b.attr("data-elem-type")=="video"||b.attr("data-elem-type")=="html"||b.attr("data-elem-type")=="gallery"){var f=t396_elem__getFieldValue(b,"heightunits");if(f=="%"){var d=b.parent();var g=parseFloat(d.attr("data-artboard-proxy-min-height"));var a=parseFloat(d.attr("data-artboard-proxy-max-height"));var c=t396_elem__getFieldValue(b,"container");if(c=="window"){e=parseFloat(a*parseFloat(e/100))}else{e=parseFloat(g*parseFloat(e/100))}}}else{if(b.attr("data-elem-type")=="button"){e=e}else{e=parseFloat(b.innerHeight())}}return(e)}function t396_roundFloat(a){a=Math.round(a*100)/100;return(a)}function tn_console(a){if(window.tn_comments==1){console.log(a)}}function t396_setUpTooltip_desktop(b,a,c){var d;a.mouseover(function(){$(".tn-atom__tip_visible").each(function(){var e=$(this).parents(".t396__elem");if(e.attr("data-elem-id")!=b.attr("data-elem-id")){t396_hideTooltip(e,$(this))}});clearTimeout(d);if(c.css("display")=="block"){return}t396_showTooltip(b,c)});a.mouseout(function(){d=setTimeout(function(){t396_hideTooltip(b,c)},300)})}function t396_setUpTooltip_mobile(b,a,c){a.on("click",function(f){if(c.css("display")=="block"&&$(f.target).hasClass("tn-atom__pin")){t396_hideTooltip(b,c)}else{t396_showTooltip(b,c)}});var d=b.attr("data-elem-id");$(document).click(function(f){var h=($(f.target).hasClass("tn-atom__pin")||$(f.target).parents(".tn-atom__pin").length>0);if(h){var g=$(f.target).parents(".t396__elem").attr("data-elem-id");if(g==d){return}}t396_hideTooltip(b,c)})}function t396_hideTooltip(a,b){b.css("display","");b.css({left:"",transform:"",right:""});b.removeClass("tn-atom__tip_visible");a.css("z-index","")}function t396_showTooltip(b,i){var g=b.attr("data-field-tipposition-value");if(typeof g=="undefined"||g==""){g="top"}var q=b.height();var e=b.offset().top;var f=e+q;var l=b.offset().left;var s=b.offset().left+q;var p=$(window).scrollTop();var o=$(window).width();var t=p+$(window).height();var a=i.outerHeight();var c=i.outerWidth();var d=15;if(g=="right"||g=="left"){var h=s+d+c;var j=l-d-c;if((g=="right"&&h>o)||(g=="left"&&j<0)){g="top"}}if(g=="top"||g=="bottom"){var h=s+(c/2-q/2);var j=l-(c/2-q/2);if(h>o){var n=-(o-s-d);i.css({left:"auto",transform:"none",right:n+"px"})}if(j<0){var m=-(l-d);i.css({left:m+"px",transform:"none"})}}if(g=="top"){var k=e-d-a;if(p>k){g="bottom"}}if(g=="bottom"){var r=f+d+a;if(t<r){g="top"}}i.attr("data-tip-pos",g);i.css("display","block");i.addClass("tn-atom__tip_visible");b.css("z-index","1000")}function t396_hex2rgba(h,c){var f=parseInt(h.substring(1),16);var e=(f&16711680)>>16;var d=(f&65280)>>8;var a=f&255;return[e,d,a,parseFloat(c)]}function t702_initPopup(c){$("#rec"+c).attr("data-animationappear","off");$("#rec"+c).css("opacity","1");var b=$("#rec"+c).find(".t-popup"),d=b.attr("data-tooltip-hook"),a=b.attr("data-track-popup");b.bind("scroll",t_throttle(function(){if(window.lazy=="y"){t_lazyload_update()}}));if(d!==""){$(".r").on("click",'a[href="'+d+'"]',function(g){t702_showPopup(c);t702_resizePopup(c);g.preventDefault();if(window.lazy=="y"){t_lazyload_update()}if(a>""){var f=d;if(f.substring(0,7)=="#popup:"){f=f.substring(7)}Tilda.sendEventToStatistics(a,f)}})}}function t702_onSuccess(a){var c=a.find(".t-form__inputsbox");var f=c.height();var d=c.offset().top;var g=f+d;var b=a.find(".t-form__successbox").offset().top;if($(window).width()>960){var e=b-200}else{var e=b-100}if(b>$(window).scrollTop()||($(document).height()-g)<($(window).height()-100)){c.addClass("t702__inputsbox_hidden");setTimeout(function(){if($(window).height()>$(".t-body").height()){$(".t-tildalabel").animate({opacity:0},50)}},300)}else{$("html, body").animate({scrollTop:e},400);setTimeout(function(){c.addClass("t702__inputsbox_hidden")},400)}var h=a.data("success-url");if(h&&h.length>0){setTimeout(function(){window.location.href=h},500)}}function t702_lockScroll(){var a=$("body");if(!a.hasClass("t-body_scroll-locked")){var b=(typeof window.pageYOffset!=="undefined")?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;a.addClass("t-body_scroll-locked");a.css("top","-"+b+"px");a.attr("data-popup-scrolltop",b)}}function t702_unlockScroll(){var a=$("body");if(a.hasClass("t-body_scroll-locked")){var b=$("body").attr("data-popup-scrolltop");a.removeClass("t-body_scroll-locked");a.css("top","");a.removeAttr("data-popup-scrolltop");window.scrollTo(0,b)}}function t702_showPopup(c){var b=$("#rec"+c),a=b.find(".t-popup");a.css("display","block");b.find(".t-range").trigger("popupOpened");if(window.lazy=="y"){t_lazyload_update()}setTimeout(function(){a.find(".t-popup__container").addClass("t-popup__container-animated");a.addClass("t-popup_show")},50);$("body").addClass("t-body_popupshowed t702__body_popupshowed");if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream){setTimeout(function(){t702_lockScroll()},500)}b.find(".t-popup").mousedown(function(h){var f=$(window).width();var g=17;var d=f-g;if(h.clientX>d){return}if(h.target==this){t702_closePopup(c)}});b.find(".t-popup__close").click(function(d){t702_closePopup(c)});b.find('a[href*="#"]').click(function(f){var d=$(this).attr("href");if(!d||d.substring(0,7)!="#price:"){t702_closePopup(c);if(!d||d.substring(0,7)=="#popup:"){setTimeout(function(){$("body").addClass("t-body_popupshowed")},300)}}});$(document).keydown(function(d){if(d.keyCode==27){t702_closePopup(c)}})}function t702_closePopup(a){$("body").removeClass("t-body_popupshowed t702__body_popupshowed");$("#rec"+a+" .t-popup").removeClass("t-popup_show");if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream){t702_unlockScroll()}setTimeout(function(){$(".t-popup").not(".t-popup_show").css("display","none")},300)}function t702_resizePopup(c){var b=$("#rec"+c),e=b.find(".t-popup__container").height(),d=$(window).height()-120,a=b.find(".t-popup__container");if(e>d){a.addClass("t-popup__container-static")}else{a.removeClass("t-popup__container-static")}}function t702_sendPopupEventToStatistics(c){var b="/tilda/popup/";var a="Popup: ";if(c.substring(0,7)=="#popup:"){c=c.substring(7)}b+=c;a+=c;if(window.Tilda&&typeof Tilda.sendEventToStatistics=="function"){Tilda.sendEventToStatistics(b,a,"",0)}else{if(ga){if(window.mainTracker!="tilda"){ga("send",{hitType:"pageview",page:b,title:a})}}if(window.mainMetrika>""&&window[window.mainMetrika]){window[window.mainMetrika].hit(b,{title:a,referer:window.location.href})}}}function t813_init(c,a){t813_setYoutubeUrl(c);t813__setHeight(c,a);var b;$(window).resize(function(){clearTimeout(b);b=setTimeout(function(){t813__setHeight(c)},200)});$(".t813").bind("displayChanged",function(){t813__setHeight(c)})}function t813_setYoutubeUrl(b){var c=$("#rec"+b);var a=c.find(".t813__iframe");if(a.hasClass("t813__iframe-youtube")){a.attr("src","//www.youtube.com/embed/"+a.attr("data-youtube-id")+"?rel=0&fmt=18&html5=1&showinfo=0")}}function t813__setHeight(c,a){if(a==""||typeof a=="undefined"){var b=$("#rec"+c),d=b.find(".t813__contentwrapper"),a=d.width()*0.5625;d.height(a);d.parent().height(a)}}function t813_onSuccess(c){var d=c.find(".t-form__inputsbox");var a=d.height();var h=d.offset().top;var b=a+h;var f=c.find(".t-form__successbox").offset().top;if($(window).width()>960){var e=f-200}else{var e=f-100}if(f>$(window).scrollTop()||($(document).height()-b)<($(window).height()-100)){d.addClass("t813__inputsbox_hidden");setTimeout(function(){if($(window).height()>$(".t-body").height()){$(".t-tildalabel").animate({opacity:0},50)}},300)}else{$("html, body").animate({scrollTop:e},400);setTimeout(function(){d.addClass("t813__inputsbox_hidden")},400)}var g=c.data("success-url");if(g&&g.length>0){setTimeout(function(){window.location.href=g},500)}};
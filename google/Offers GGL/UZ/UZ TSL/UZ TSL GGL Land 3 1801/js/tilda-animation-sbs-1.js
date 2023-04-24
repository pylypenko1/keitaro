function t_animateSbs__wrapAnimatedAtomEls(){$("[data-animate-sbs-event]").each(function(){var t=$(this).find(".tn-atom");-1==navigator.userAgent.indexOf("Chrome")&&t.css("backface-visibility","hidden"),0==t.parents(".tn-atom__sbs-anim-wrapper").length&&t_animateSbs__getOptsPublishMode($(this))&&t.wrap("<div class='tn-atom__sbs-anim-wrapper' style='display:table; width:inherit; height:inherit;'></div>")})}function t_animateSbs__initAllRes(){var t={els:$("[data-animate-sbs-event]"),scrollTop:window.pageYOffset,stop:!1,needUpdate:!0};if(t.mode=void 0!==$(t.els[0]).attr("data-field-sbsevent-value")?"edit":"publish",0!=t.els.length){t_animateSbs__cashElsData(t);var e,a=t_animateSbs__generateKeyframes(t);""!=a&&$("head").append('<style class="sbs-anim-keyframes">'+a+"</style>"),"y"!==window.lazy&&"yes"!==$("#allrecords").attr("data-tilda-lazy")||t_animateSbs__onFuncLoad("t_lazyload_update",function(){t_lazyload_update()}),$(window).resize(s),$(".t396").bind("displayChanged",s),t_animateSbs__triggerTimeAnim(t),$("[data-animate-sbs-event=scroll]").length>0&&(t_animateSbs__triggerScrollAnim(t),t_animateSbs__checkFrame(t)),$(window).on("load",function(){t_animateSbs__rereadElsValues(t)}),setTimeout(function(){t_animateSbs__rereadElsValues(t)},3e3)}function s(){clearTimeout(e),e=setTimeout(function(){t.stop=!1,t_animateSbs__cashElsData(t),t_animateSbs__triggerScrollAnim(t);var e=t_animateSbs__generateKeyframes(t),a=$("head").find("style.sbs-anim-keyframes").text();""!=e&&e!==a&&($("head").find("style.sbs-anim-keyframes").remove(),$("head").append('<style class="sbs-anim-keyframes">'+e+"</style>"))},500)}}function t_animateSbs__rereadElsValues(t){for(var e=0;e<t.els.length;e++){var a=t.els[e];t_animateSbs__cashElsTopOffset(a,t),"scroll"==a.changeType&&t_animateSbs__updateStepsStartValues(a)}}function t_animateSbs__checkFrame(t){t.needUpdate=t_animateSbs__checkChanges(t),t.needUpdate&&!1===t.stop&&t_animateSbs__triggerScrollAnim(t),requestAnimationFrame(function(){t_animateSbs__checkFrame(t)})}function t_animateSbs__checkChanges(t){var e=t.scrollTop;return t.scrollTop=window.pageYOffset,e!=t.scrollTop&&!1===t.stop}function t_animateSbs__triggerScrollAnim(t){for(var e=t.els,a=0;a<e.length;a++){var s=e[a];if("time"!==s.changeType){var i={opacity:1,blur:0,fix:!1,fix__shiftY:0,translateX:0,translateY:0,scaleX:1,scaleY:1,rotate:0};t_animateSbs__triggerScrollAnim__checkElSteps(t,s,i),t_animateSbs__triggerScrollAnim__changeEl(s,i,t)}}}function t_animateSbs__triggerScrollAnim__checkElSteps(t,e,a){for(var s=0;s<e.steps.length;s++){var i=e.steps[s];i.index=s;var n=t.scrollTop+e.triggerOffset,r=n>=i.start,o=n<i.start,_=i.end<=n,l=i.end>n;if(r&&l){i.state="started",e.wrapperEl.css("will-change","transform");var m=n-i.start,d=0==i.dist?1:m/i.dist;a.prevUnfixedDist=i.prevUnfixedDist,t_animateSbs__triggerScrollAnim__calcStyle(e,a,i,d)}_&&(i.state="finished",e.wrapperEl.css("will-change",""),t_animateSbs__triggerScrollAnim__calcStyle(e,a,i,1)),!o||"started"!=i.state&&"finished"!=i.state||(i.state="unactive",e.wrapperEl.css("will-change",""),t_animateSbs__triggerScrollAnim__calcStyle(e,a,i,0))}e.steps[1]&&"unactive"===e.steps[1].state&&0===e.steps[1].styles.opacity&&0===e.steps[1].dist&&(a.opacity=0)}function t_animateSbs__generateKeyframes(t){for(var e="",a=0;a<t.els.length;a++){var s=t.els[a];if("time"===s.changeType){var i={timeDuration:0},n=[];t_animateSbs__generateKeyframes__combineObjects(s.steps,n,i),t_animateSbs__generateKeyframes__correctFrames(n),t_animateSbs__generateKeyframes__countPercent(n,i),t_animateSbs__generateKeyframes__correctOpacityOnFirstStep(s,n);var r=t_animateSbs__generateKeyframes__getTxtStyles(n);i.timeDuration/=1e3,""!==r&&(e+=t_animateSbs__generateKeyframes__getFinalCss(s,i,r),"loop"===s.loop||"noreverse"===s.loop||"hover"!==s.animType&&"click"!==s.animType||(e+=t_animateSbs__generateKeyframes__getReverseAnim(s)))}}return e}function t_animateSbs__generateKeyframes__getReverseAnim(t){var e=t.getAttribute("data-elem-id"),a="";return a+="#"+$(t).parents(".t-rec").attr("id")+" ",a+='[data-elem-id="'+e+'"].t-sbs-anim_started.t-sbs-anim_reversed .tn-atom__sbs-anim-wrapper',a+="{\n-webkit-animation-direction: reverse;\nanimation-direction: reverse;\n}\n\n"}function t_animateSbs__generateKeyframes__getFinalCss(t,e,a){var s="",i=$(t).attr("data-elem-id"),n="sbs-anim-"+i,r=$(t).parents(".t-rec").attr("id");if(t.timeDuration=e.timeDuration,void 0!==r&&(s+="#"+r+" ",n="sbs-anim-"+r+"-"+i,!0===e.reverse&&(n+="_reverse")),!0===e.hover)var o='[data-elem-id="'+i+'"].t-sbs-anim_started:hover .tn-atom__sbs-anim-wrapper';else o='[data-elem-id="'+i+'"].t-sbs-anim_started .tn-atom__sbs-anim-wrapper';return s+=o+" {\nanimation: "+n+" "+(0===e.timeDuration?1e-5:e.timeDuration)+"s","loop"===t.loop&&(s+=" infinite"),s+=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?" linear 0.000001s":" linear","loop"!==t.loop&&(s+=" forwards"),s+=";\nbackface-visibility: hidden;\n}\n\n@keyframes "+n+" {\n"+a+"}\n\n"}function t_animateSbs__generateKeyframes__combineObjects(t,e,a){for(var s=0;s<t.length;s++){var i=t[s],n={};n.styles=i.styles,n.time=1*i.time||0,s!==t.length-1&&(n.ease=t[s+1].ease),e.push(n),a.timeDuration+=n.time}}function t_animateSbs__generateKeyframes__correctFrames(t){for(var e=0;e<t.length;e++){var a=t[e],s=e===t.length-1,i=0===e;if(!s)var n=t[e+1];if(!i)var r=t[e-1];for(var o in a.styles)i||o in r.styles||t_animateSbs__generateKeyframes__addStyleToKeyframe(a,r,o,0),s||(o in n.styles?"moveX"!==o&&"moveY"!==o&&"rotate"!==o||t_animateSbs__generateKeyframes__recalculateValue(a,n,o):t_animateSbs__generateKeyframes__addStyleToKeyframe(a,n,o,"1"))}}function t_animateSbs__generateKeyframes__addStyleToKeyframe(t,e,a,s){"blur"!==a&&"rotate"!==a&&"moveX"!==a&&"moveY"!==a||(e.styles[a]=0===s?0:t.styles[a]),"opacity"!==a&&"scaleX"!==a&&"scaleY"!==a||(e.styles[a]=0===s?1:t.styles[a])}function t_animateSbs__generateKeyframes__recalculateValue(t,e,a){"rotate"===a&&(e.styles.rotate=1*t.styles.rotate+1*e.styles.rotate),"moveX"===a&&(e.styles.moveX=1*t.styles.moveX+1*e.styles.moveX),"moveY"===a&&(e.styles.moveY=1*t.styles.moveY+1*e.styles.moveY)}function t_animateSbs__generateKeyframes__countPercent(t,e){for(var a=0;a<t.length;a++){var s=t[a];if(0===a)s.percent=0==e.timeDuration?0:parseFloat(parseFloat(s.time/e.timeDuration*100).toFixed(2));else if(a===t.length-1)s.percent=100;else{var i=t[a-1].percent;s.percent=0==e.timeDuration?0:parseFloat(parseFloat(s.time/e.timeDuration*100+i).toFixed(2)),s.percent==i&&(s.percent+=1),s.percent>100&&(s.percent=99)}}}function t_animateSbs__generateKeyframes__correctOpacityOnFirstStep(t,e){var a=e[1];void 0!==a&&0===a.time&&0===a.styles.opacity&&($(t).find(".tn-atom__sbs-anim-wrapper").css("opacity",0),e[0].styles.opacity=0)}function t_animateSbs__generateKeyframes__getTxtStyles(t){for(var e="",a=0;a<t.length;a++)void 0===t[a].changes&&(t[a].changes=t_animateSbs__generateKeyframes__getFrameChanges(t[a])),e+=t[a].percent+"% {"+t[a].changes+"}\n";return e}function t_animateSbs__generateKeyframes__getFrameChanges(t){var e="",a="",s={x:1,y:1,changed:!1};for(var i in t.styles)"opacity"===i&&(e+="opacity:"+t.styles.opacity+";"),"scaleX"===i&&(s.x=t.styles.scaleX,s.changed=!0),"scaleY"===i&&(s.y=t.styles.scaleY,s.changed=!0),"moveX"===i&&(a+="translateX("+t.styles.moveX+"px)"),"moveY"===i&&(a+="translateY("+t.styles.moveY+"px)"),"rotate"==i&&(a+="rotate("+t.styles.rotate+"deg)");if(!0===s.changed&&(a+="scale("+s.x+","+s.y+")"),""!=a&&(e+="transform:"+a+";"),void 0!==t.ease)switch(e+="animation-timing-function:",t.ease){case"easeIn":e+="ease-in;";break;case"easeOut":e+="ease-out;";break;case"easeInOut":e+="ease-in-out;";break;case"bounceFin":e+="cubic-bezier(0.34,1.61,0.7,1);";break;default:e+="linear;"}return e}function t_animateSbs__generateKeyframes__reverseObj(t){for(var e=[],a=t.length-1;a>=0;a--){var s={percent:100-t[a].percent,changes:t[a].changes};e.push(s)}return e}function t_animateSbs__triggerScrollAnim__changeEl(t,e){var a=t_animation_sbs__getZoom(t);if(t_animation_sbs__isFirefox()&&(a=1/a),!0===e.fix&&"fixed"!=t.wrapperEl.css("position")){var s=t.triggerOffset-e.prevUnfixedDist;t.wrapperEl.css({top:s+"px",position:"fixed"}),t.zIndexVal&&t.wrapperEl.css("z-index",t.zIndexVal)}!1===e.fix&&"fixed"==t.wrapperEl.css("position")&&(t.wrapperEl.css({position:"",top:"","z-index":""}),t.zIndexVal&&$(t).css("z-index",t.zIndexVal)),null!==e.opacity&&t.wrapperEl.css("opacity",e.opacity);var i="";if(e.translateX){var n=e.translateX;t_animation_sbs__isFirefox()&&(n/=a),i+="translateX("+n+"px)"}0===e.translateY&&0===e.fix__shiftY||(t_animation_sbs__isFirefox()?i+="translateY("+(e.translateY+e.fix__shiftY)+"px)":i+="translateY("+(e.translateY/a+e.fix__shiftY/a)+"px)"),1===e.scaleX&&1===e.scaleY||(i+="scale("+e.scaleX+","+e.scaleY+")"),0!==e.rotate&&(i+="rotate("+e.rotate+"deg)"),t.wrapperEl.css("transform",i),""!==i?t.wrapperEl.css("transform",i):t.wrapperEl.css("transform","scale(1)")}function t_animateSbs__triggerScrollAnim__calcStyle(t,e,a,s){if(!0===a.styles.fix&&"started"==a.state&&(e.fix=!0,e.fix__shiftY=0),!0===a.styles.fix&&"finished"==a.state&&(e.fix=!1,e.fix__shiftY+=1*a.dist),!0===a.styles.fix&&"unactive"==a.state){if(a.index>0&&!0===e.fix)return;e.fix=!1}e.opacity+=s*(a.styles.opacity-e.opacity),e.blur+=s*(a.styles.blur-e.blur),e.translateX+=s*a.styles.moveX,e.translateY+=s*a.styles.moveY,e.scaleX+=s*(a.styles.scaleX-e.scaleX),e.scaleY+=s*(a.styles.scaleY-e.scaleY),e.rotate+=s*a.styles.rotate}function t_animateSbs__getOptsPublishMode(t){var e,a=$(window).width(),s=$(t);return a>=1200?s.attr("data-animate-sbs-opts"):"y"==s.attr("data-animate-mobile")?a>=960?((e=s.attr("data-animate-sbs-opts-res-960"))||(e=s.attr("data-animate-sbs-opts")),e):a>=640?((e=s.attr("data-animate-sbs-opts-res-640"))||(e=s.attr("data-animate-sbs-opts-res-960")),e||(e=s.attr("data-animate-sbs-opts")),e):a>=480?((e=s.attr("data-animate-sbs-opts-res-480"))||(e=s.attr("data-animate-sbs-opts-res-640")),e||(e=s.attr("data-animate-sbs-opts-res-960")),e||(e=s.attr("data-animate-sbs-opts")),e):a>=320?((e=s.attr("data-animate-sbs-opts-res-320"))||(e=s.attr("data-animate-sbs-opts-res-480")),e||(e=s.attr("data-animate-sbs-opts-res-640")),e||(e=s.attr("data-animate-sbs-opts-res-960")),e||(e=s.attr("data-animate-sbs-opts")),e):void 0:void 0}function t_animateSbs__getOptsEditMode(t){var e,a=window.tn.curResolution,s=$(t);return a>=1200?s.attr("data-field-sbsopts-value"):a>=960?((e=s.attr("data-field-sbsopts-res-960-value"))||(e=s.attr("data-field-sbsopts-value")),e):a>=640?((e=s.attr("data-field-sbsopts-res-640-value"))||(e=s.attr("data-field-sbsopts-res-960-value")),e||(e=s.attr("data-field-sbsopts-value")),e):a>=480?((e=s.attr("data-field-sbsopts-res-480-value"))||(e=s.attr("data-field-sbsopts-res-640-value")),e||(e=s.attr("data-field-sbsopts-res-960-value")),e||(e=s.attr("data-field-sbsopts-value")),e):a>=320?((e=s.attr("data-field-sbsopts-res-320-value"))||(e=s.attr("data-field-sbsopts-res-480-value")),e||(e=s.attr("data-field-sbsopts-res-640-value")),e||(e=s.attr("data-field-sbsopts-res-960-value")),e||(e=s.attr("data-field-sbsopts-value")),e):void 0}function t_animateSbs__getTriggetElems(t){var e,a=$(window).width(),s=$(t);return a>=1200?s.attr("data-animate-sbs-trgels"):a>=960?((e=s.attr("data-animate-sbs-trgels-res-960"))||(e=s.attr("data-animate-sbs-trgels")),e):a>=640?((e=s.attr("data-animate-sbs-trgels-res-640"))||(e=s.attr("data-animate-sbs-trgels-res-960")),e||(e=s.attr("data-animate-sbs-trgels")),e):a>=480?((e=s.attr("data-animate-sbs-trgels-res-480"))||(e=s.attr("data-animate-sbs-trgels-res-640")),e||(e=s.attr("data-animate-sbs-trgels-res-960")),e||(e=s.attr("data-animate-sbs-trgels")),e):a>=320?((e=s.attr("data-animate-sbs-trgels-res-320"))||(e=s.attr("data-animate-sbs-trgels-res-480")),e||(e=s.attr("data-animate-sbs-trgels-res-640")),e||(e=s.attr("data-animate-sbs-trgels-res-960")),e||(e=s.attr("data-animate-sbs-trgels")),e):void 0}function t_animateSbs__cashElsData(t){var e=t.els;t.triggerElemsAttrName="edit"===t.mode?"data-field-sbstrgels-value":"data-animate-sbs-trgels";for(var a=0;a<e.length;a++){var s,i=e[a],n=t_animation_sbs__getZoom(i);if(i.state="unactive",i.animType="edit"===t.mode?$(i).attr("data-field-sbsevent-value"):$(i).attr("data-animate-sbs-event"),i.changeType="scroll"===i.animType?"scroll":"time",i.trigger="edit"===t.mode?$(i).attr("data-field-sbstrg-value"):$(i).attr("data-animate-sbs-trg"),i.trigger=void 0===i.trigger?1:i.trigger,i.triggerElems=t_animateSbs__getTriggetElems(i),i.wrapperEl=$(i).find(".tn-atom__sbs-anim-wrapper"),i.steps=[],void 0!==(s="edit"===t.mode?t_animateSbs__getOptsEditMode(i):t_animateSbs__getOptsPublishMode(i))){-1!=s.indexOf("fixed")&&(i.zIndexVal=window.getComputedStyle(i).getPropertyValue("z-index")),s=s.replace(/'/g,'"');var r=JSON.parse(s);t_animateSbs__addDelayStepsToStepsArr(r),i.loop="edit"===t.mode?$(i).attr("data-field-sbsloop-value"):$(i).attr("data-animate-sbs-loop"),t_animateSbs__cashElsTopOffset(i,t);for(var o=0,_=0;_<r.length;_++){var l={state:"unactive"};l.styles=t_animateSbs__getStylesObj(r[_]),"scroll"==i.changeType?(l.prevUnfixedDist=o,l.dist=r[_].di*n,!1===l.styles.fix&&(o+=Number(l.dist)),l.start=0==_?i.topOffset:i.steps[_-1].end,l.end=l.start+1*l.dist):(l.time=r[_].ti,l.ease=r[_].ea),i.steps.push(l)}t_animateSbs__updateInfoOnImgLoad(i,t),t_animateSbs__recalcStepsStylesDiff(i.steps)}}}function t_animateSbs__updateInfoOnImgLoad(t,e){$(t).find("img").on("load",function(){t_animateSbs__cashElsTopOffset(t,e),"scroll"==t.changeType&&t_animateSbs__updateStepsStartValues(t)}).each(function(){this.complete&&$(this).trigger("load")})}function t_animateSbs__updateStepsStartValues(t){for(var e=0;e<t.steps.length;e++){var a=t.steps[e];a.start=0==e?t.topOffset:t.steps[e-1].end,a.end=a.start+1*a.dist}}function t_animateSbs__cashElsTopOffset(t,e){if(("scroll"==t.animType||"intoview"==t.animType||"blockintoview"==t.animType)&&"publish"===e.mode){var a=1*$(t).css("top").replace("px",""),s=$(t).parents(".r"),i=s.offset().top+1*s.css("padding-top").replace("px","");t.blockTopOffset=i,t.topOffset=i+a,t_animateSbs__getElTrigger(t)}}function t_animateSbs__addDelayStepsToStepsArr(t){for(var e=0;e<t.length;e++){var a=t[e];if(void 0!==a.dd&&""!==a.dd&&0!=a.dd||void 0!==a.dt&&""!==a.dt&&0!=a.dt){var s=0!==e?t_animateSbs__cloneStep(t[e-1]):{mx:"0",my:"0",sx:"1",sy:"1",op:"1",ro:"0",bl:"0",ea:""};void 0!==a.dt?s.ti=a.dt:s.di=a.dd,t.splice(e,0,s),e++}}}function t_animateSbs__cloneStep(t){return{mx:t.mx,my:t.my,sx:t.sx,sy:t.sy,op:t.op,ro:t.ro,bl:t.bl,ea:t.ea}}function t_animateSbs__recalcStepsStylesDiff(t){for(var e=t[0].styles.moveX,a=t[0].styles.moveY,s=t[0].styles.rotate,i=1;i<t.length;i++){var n=t[i].styles;t[i-1].styles;n.moveX=n.moveX-e,e+=n.moveX,n.moveY=n.moveY-a,a+=n.moveY,n.rotate=n.rotate-s,s+=n.rotate}}function t_animateSbs__getStylesObj(t){var e={};return e.moveX=void 0!==t.mx?1*t.mx:0,e.moveY=void 0!==t.my?1*t.my:0,e.scaleX=void 0!==t.sx?1*t.sx:1,e.scaleY=void 0!==t.sy?1*t.sy:1,e.opacity=void 0!==t.op?1*t.op:1,e.rotate=void 0!==t.ro?1*t.ro:0,e.blur=void 0!==t.bl?1*t.bl:0,e.fix=void 0!==t.fi&&"fixed"===t.fi,e}function t_animateSbs__getElTrigger(t){var e=$(window).height(),a=1;t_animation_sbs__isFirefox()&&(a=t_animation_sbs__getZoom(t)),t.triggerOffset=$(t).attr("data-animate-sbs-trgofst")*a,t.triggerOffset=void 0===t.triggerOffset?0:1*t.triggerOffset,"0.5"==t.trigger&&(t.triggerOffset+=e/2,("intoview"===t.animType||"scroll"===t.animType)&&t.triggerOffset>t.topOffset&&t.triggerOffset<=e/2&&(t.triggerOffset=t.topOffset),"blockintoview"===t.animType&&t.triggerOffset>t.blockTopOffset&&t.triggerOffset<=e/2&&(t.triggerOffset=t.blockTopOffset)),"1"==t.trigger&&(t.triggerOffset+=e,("intoview"===t.animType||"scroll"===t.animType)&&t.triggerOffset>t.topOffset&&t.triggerOffset<=e&&(t.triggerOffset=t.topOffset),"blockintoview"===t.animType&&t.triggerOffset>t.blockTopOffset&&t.triggerOffset<=e&&(t.triggerOffset=t.blockTopOffset))}function t_animateSbs__triggerTimeAnim(t){var e=t.els.filter('[data-animate-sbs-event="intoview"], [data-animate-sbs-event="blockintoview"]');t_animateSbs__checkIntoviewEls(t,e),$(window).bind("scroll",t_throttle(function(){t_animateSbs__checkIntoviewEls(t,e)},200)),t_animateSbs__onActions__initClick(t),t_animateSbs__onActions__initHover(t)}function t_animateSbs__onActions__initClick(t){t_animateSbs__onActions__connectTrgrsWithAnimatedEls(t.els.filter('[data-animate-sbs-event="click"]'),{},"click"),$(".js-sbs-anim-trigger_click").css("cursor","pointer");var e=function(){var t=$(this).data("els-to-animate-on-click");$(window).width()<1200&&(t=t.filter('[data-animate-mobile="y"]')),$(t[0]).hasClass("t-sbs-anim_started")&&!$(t[0]).hasClass("t-sbs-anim_reversed")?t_animateSbs__onActions__end(t):t_animateSbs__onActions__start(t)};$(".js-sbs-anim-trigger_click").off("click",e),$(".js-sbs-anim-trigger_click").on("click",e)}function t_animateSbs__onActions__initHover(t){t_animateSbs__onActions__connectTrgrsWithAnimatedEls(t.els.filter('[data-animate-sbs-event="hover"]'),{},"hover");var e=function(){t_animateSbs__onActions__start($(this).data("els-to-animate-on-hover"))},a=function(){t_animateSbs__onActions__end($(this).data("els-to-animate-on-hover"))};$(".js-sbs-anim-trigger_hover").off("mouseenter",e).off("mouseleave",a).on("mouseenter",e).on("mouseleave",a)}function t_animateSbs__onActions__connectTrgrsWithAnimatedEls(t,e,a){t.each(function(){var t=this,s=t.triggerElems;if(s){var i=s?s.split(","):[],n=$(t).parents(".t396__artboard").attr("data-artboard-recid");i.forEach(function(s){var i=n+s,r=$(".tn-elem__"+n+s);if(0!==r.length)if(e[i]&&e[i].data("els-to-animate-on-"+a)){var o=e[i].data("els-to-animate-on-"+a).add(t);e[i].data("els-to-animate-on-"+a,o)}else e[i]=r,e[i].addClass("js-sbs-anim-trigger_"+a).data("els-to-animate-on-"+a,$(t))})}else{$(t).find(".tn-atom__sbs-anim-wrapper").data("els-to-animate-on-"+a,$(t)).addClass("js-sbs-anim-trigger_"+a)}})}function t_animateSbs__onActions__start(t){t.each(function(){var t=$(this);t.hasClass("t-sbs-anim_playing")?t.data("planned-dir","play"):t_animateSbs__onActions__play(t)})}function t_animateSbs__onActions__end(t){t.each(function(){var t=$(this);if("loop"===t.attr("data-animate-sbs-loop"))t.on("animationiteration",function e(){t.removeClass("t-sbs-anim_started t-sbs-anim_playing"),t.off("animationiteration",e)});else{if(t.hasClass("t-sbs-anim_playing"))return void t.data("planned-dir","reverse");t_animateSbs__onActions__playReverse(t)}})}function t_animateSbs__onActions__onAnimationEnd(t){var e=function(){t.removeClass("t-sbs-anim_playing"),t.off("animationend",t.data("callback-dep-anim")),t.data("planned-dir")&&"play"===t.data("planned-dir")&&t.hasClass("t-sbs-anim_reversed")?t_animateSbs__onActions__play(t):t.data("planned-dir")&&"reverse"===t.data("planned-dir")&&!t.hasClass("t-sbs-anim_reversed")&&t_animateSbs__onActions__playReverse(t),t.data("planned-dir","")};t.off("animationend",e),t.on("animationend",e),t.data("callback-dep-anim",e)}function t_animateSbs__getAnimationTime(t){for(var e=JSON.parse(t.data().animateSbsOpts.split("'").join('"')),a=0,s=0;s<e.length;s++){var i=e[s];a+=parseInt(i.ti)}return a}function t_animateSbs__onActions__play(t){t.removeClass("t-sbs-anim_started t-sbs-anim_reversed"),t_animateSbs__forceRepaint(t[0]);var e=t_animateSbs__getAnimationTime(t);t.addClass("t-sbs-anim_started"+(e>0?" t-sbs-anim_playing":"")),t_animateSbs__onActions__onAnimationEnd(t)}function t_animateSbs__onActions__playReverse(t){t.removeClass("t-sbs-anim_started"),t_animateSbs__forceRepaint(t[0]);var e=t_animateSbs__getAnimationTime(t);t.addClass("t-sbs-anim_started t-sbs-anim_reversed"+(e>0?" t-sbs-anim_playing":"")),t_animateSbs__onActions__onAnimationEnd(t)}function t_animateSbs__forceRepaint(t){t.offsetWidth}function t_animateSbs__checkIntoviewEls(t,e){if(0!==e.length){t.scrollTop=window.pageYOffset;for(var a=0;a<e.length;a++){var s=e[a],i=t.scrollTop+s.triggerOffset;if("blockintoview"===s.animType)var n=i>=s.blockTopOffset;else n=i>=s.topOffset;n&&!1===$(s).hasClass("t-sbs-anim_started")&&($(s).addClass("t-sbs-anim_started"),e.splice(a,1),a--)}}}function t_animateParallax__checkOldIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE"),a="",s=!1;return e>0&&(8!=(a=parseInt(t.substring(e+5,t.indexOf(".",e))))&&9!=a||(s=!0)),s}function t_animation_sbs__isFirefox(){return-1!==navigator.userAgent.search("Firefox")}function t_animation_sbs__getZoom(t){var e=1,a=$(t);if(a.hasClass("t396__elem")||(a=a.closest(".t396__elem")),a.length&&a.hasClass("t396__elem"))if(t_animation_sbs__isFirefox()){var s=$(t).find(".tn-atom").css("transform"),i=s.split("(")[1];if(s&&i){var n=(i=(i=i.split(")")[0]).split(","))[0],r=i[1];e=Math.round(100*Math.sqrt(n*n+r*r))/100}}else e=parseFloat(a.css("zoom"))||1;return e}function t_animateSbs__wrapAtomEls(){$("[data-animate-sbs-event]").each(function(){var t=$(this).find(".tn-atom");0==t.parents(".tn-atom__sbs-anim-wrapper").length&&t.wrap("<div class='tn-atom__sbs-anim-wrapper' style='display:table; width:inherit; height:inherit;'></div>")})}function t_animateSbs__cashElsInfo(t){var e=t.els;t.triggerElemsAttrName="edit"===t.mode?"data-field-sbstrgels-value":"data-animate-sbs-trgels";for(var a=0;a<e.length;a++){var s=e[a];s.state="unactive",s.animType="edit"===t.mode?$(s).attr("data-field-sbsevent-value"):$(s).attr("data-animate-sbs-event"),s.changeType="scroll"===s.animType?"scroll":"time",s.trigger="edit"===t.mode?$(s).attr("data-field-sbstrg-value"):$(s).attr("data-animate-sbs-trg"),s.trigger=void 0===s.trigger?1:s.trigger,s.triggerElems=$(s).attr(t.triggerElemsAttrName),s.wrapperEl=$(s).find(".tn-atom__sbs-anim-wrapper"),s.steps=[];var i="edit"===t.mode?$(s).attr("data-field-sbsopts-value"):$(s).attr("data-animate-sbs-opts");if(void 0!==i){-1!=i.indexOf("fixed")&&(s.zIndexVal=window.getComputedStyle(s).getPropertyValue("z-index")),i=i.replace(/'/g,'"');var n=JSON.parse(i);t_animateSbs__addDelayStepsToStepsArr(n),s.loop="edit"===t.mode?$(s).attr("data-field-sbsloop-value"):$(s).attr("data-animate-sbs-loop"),t_animateSbs__cashElsTopOffset(s,t);for(var r=0,o=0;o<n.length;o++){var _={state:"unactive"};_.styles=t_animateSbs__getStylesObj(n[o]),"scroll"==s.changeType?(_.prevUnfixedDist=r,_.dist=n[o].di,!1===_.styles.fix&&(r+=Number(_.dist)),_.start=0==o?s.topOffset:s.steps[o-1].end,_.end=_.start+1*_.dist):(_.time=n[o].ti,_.ease=n[o].ea),s.steps.push(_)}t_animateSbs__updateInfoOnImgLoad(s,t),t_animateSbs__recalcStepsStylesDiff(s.steps)}}}function t_animateSbs__reset(t){for(var e=t.els,a=0;a<e.length;a++){var s=e[a].animType;if("intoview"===s||"blockintoview"===s||"click"===s||"hover"===s)$(e[a]).removeClass("t-sbs-anim_started"),$(e[a]).find(".tn-atom__sbs-anim-wrapper").css("opacity","");else{e[a].state="reseted";var i=e[a].wrapperEl;$(i).css({transform:"",position:"",top:"",opacity:""})}}}function t_animateSbs__onFuncLoad(t,e,a){"function"==typeof window[t]?e():setTimeout(function s(){if("function"!=typeof window[t]){if("complete"===document.readyState&&"function"!=typeof window[t])throw new Error(t+" is undefined");setTimeout(s,a||100)}else e()})}$(document).ready(function(){1==window.isSearchBot||t_animateParallax__checkOldIE()||"edit"==$(".t-records").attr("data-tilda-mode")||($('[data-animate-sbs-event="scroll"]').length>0&&$(".t-records#allrecords").css("overflow-x","hidden"),t_animateSbs__wrapAnimatedAtomEls(),setTimeout(function(){t_animateSbs__initAllRes()},50))});
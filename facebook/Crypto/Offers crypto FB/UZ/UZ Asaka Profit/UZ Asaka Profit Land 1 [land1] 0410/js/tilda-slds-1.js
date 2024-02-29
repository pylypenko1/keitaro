function t_sldsInit(rec,sliderOptions){var el="object"==typeof rec?rec:$("#rec"+rec);if(0===el.length)return!1;var sliderItem=el.find(".t-slds__item:not(.t-slds__item_dummy)"),totalSlides=sliderItem.length,firstSlide=sliderItem.filter(":first"),lastSlide=sliderItem.filter(":last"),windowWidth=$(window).width(),sliderWrapper=el.find(".t-slds__items-wrapper"),itemsInRow=sliderWrapper.attr("data-slider-items-in-row")||0,sliderWithCycle=sliderWrapper.attr("data-slider-with-cycle"),sliderTransition=parseFloat(sliderWrapper.attr("data-slider-transition")),stopSlider;if("true"==sliderWrapper.attr("data-slider-stop"))return!1;isNaN(sliderTransition)&&sliderWrapper.attr("data-slider-transition","300"),sliderWrapper.hasClass("t-slds_animated-fast")||sliderWrapper.hasClass("t-slds_animated-slow")||sliderWrapper.hasClass("t-slds_animated-none")||sliderWrapper.addClass("t-slds_animated-fast");var defaultCountItemsInRow=itemsInRow;t_slds_setItemsInRow(rec),t_slds_changeImageUrl(rec);var sAgent=window.navigator.userAgent,Idx=sAgent.indexOf("MSIE"),ieVersion="",oldIE=!1;Idx>0&&(8!=(ieVersion=parseInt(sAgent.substring(Idx+5,sAgent.indexOf(".",Idx))))&&9!=ieVersion||(oldIE=!0)),!0===oldIE&&(sliderWrapper.removeClass("t-slds_animated-fast").removeClass("t-slds_animated-slow").addClass("t-slds_animated-none t-slds_ie").attr("data-slider-correct-height","true"),sliderWrapper.attr("data-slider-items-in-row",1)),"true"==sliderWrapper.attr("data-slider-initialized")&&(totalSlides-=2),sliderWrapper.attr("data-slider-initialized","true"),sliderWrapper.attr("data-slider-totalslides",totalSlides),sliderWrapper.attr("data-slider-pos",1),sliderWrapper.attr("data-slider-curr-pos",1),sliderWrapper.attr("data-slider-cycle",""),sliderWrapper.attr("data-slider-animated","");var pos=1;if(0==el.find(".t-slds__item[data-slide-index=0]").length&&(firstSlide.before(lastSlide.clone(!0).attr("data-slide-index","0")),firstSlide.parent().find("[data-slide-index=0]").find("[field]").removeAttr("field"),el.find(".t-slds__item[data-slide-index=0]").find(".t-zoomable").removeClass("t-zoomable")),0==el.find(".t-slds__item[data-slide-index="+(totalSlides+1)+"]").length){if(lastSlide.after(firstSlide.clone(!0).attr("data-slide-index",totalSlides+1).removeClass("t-slds__item_active")).addClass("t-slds__item-loaded"),itemsInRow>0&&"true"===sliderWithCycle)for(var beginningSlide=firstSlide,endSlide=lastSlide,i=0;i<itemsInRow-1;i++){var newSlide=beginningSlide.next().clone(!0).attr("data-slide-index",totalSlides+i+1);endSlide.next().after(newSlide),endSlide=endSlide.next(),beginningSlide=beginningSlide.next()}el.find(".t-slds__item[data-slide-index="+(totalSlides+1)+"]").find(".t-zoomable").removeClass("t-zoomable")}itemsInRow=sliderWrapper.attr("data-slider-items-in-row")||0,"false"===sliderWithCycle&&totalSlides-itemsInRow<=0?el.find(".t-slds__arrow_wrapper-right").css("display","none"):el.find(".t-slds__arrow_wrapper-right").css("display",""),t_slds_SliderWidth(rec),"true"==sliderWrapper.attr("data-slider-correct-height")&&t_slds_SliderHeight(rec),t_slds_SliderArrowsHeight(rec),t_slds_ActiveSlide(rec,1,totalSlides,sliderOptions),t_slds_initSliderControls(rec,sliderOptions),t_slds_ActiveCaption(rec,1,totalSlides),sliderWrapper.attr("data-slider-timeout")>0&&t_slds_initAutoPlay(rec,1,totalSlides,sliderOptions),el.find(".t-slds__item-loaded").length<totalSlides+2&&t_slds_UpdateImages(rec,1),"yes"==sliderWrapper.attr("data-slider-arrows-nearpic")&&t_slds_positionArrows(rec),!0!==oldIE&&t_slds_onHammerLoad("Hammer",(function(){t_slds_initSliderSwipe(rec,totalSlides,windowWidth)})),el.find(".t-slds").css("visibility",""),el.on("displayChanged",t_throttle((function(){t_slds_setItemsInRow(rec,defaultCountItemsInRow),t_slds_updateSlider(rec),t_slds_positionArrows(rec)}))),$(window).bind("resize",t_throttle((function(){setTimeout((function(){t_slds_setItemsInRow(rec,defaultCountItemsInRow),t_slds_updateSlider(rec),t_slds_positionArrows(rec)}),100)}))),$(window).on("load",(function(){"true"==sliderWrapper.attr("data-slider-correct-height")&&t_slds_UpdateSliderHeight(rec),t_slds_UpdateSliderArrowsHeight(rec)}))}function t_slds_setItemsInRow(rec,defaultCountItemsInRow){var el,sliderWrapper=("object"==typeof rec?rec:$("#rec"+rec)).find(".t-slds__items-wrapper"),itemsInRow,updatedItemsInRow;(sliderWrapper.attr("data-slider-items-in-row")||0)&&(window.innerWidth<=960&&(updatedItemsInRow=2),window.innerWidth<=640&&(updatedItemsInRow=1),window.innerWidth>960&&(updatedItemsInRow=defaultCountItemsInRow)),updatedItemsInRow&&sliderWrapper.attr("data-slider-items-in-row",updatedItemsInRow)}function t_slds_initSliderControls(rec,sliderOptions){var el="object"==typeof rec?rec:$("#rec"+rec),sliderWrapper=el.find(".t-slds__items-wrapper"),itemsInRow,sliderWidth=(sliderWrapper.attr("data-slider-items-in-row")||0)>0?el.find(".t-slds__container .t-slds__item").width():el.find(".t-slds__container").width(),sliderNotAnimated=el.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none"),stopSlider;if("true"==sliderWrapper.attr("data-slider-stop"))return!1;sliderWrapper.css({transform:"translateX(-"+sliderWidth+"px)"}),el.find(".t-slds__arrow_wrapper").click((function(){var currentTranslate=t_slds_getCurrentTranslate(el),animated=sliderWrapper.attr("data-slider-animated"),pos=parseFloat(sliderWrapper.attr("data-slider-pos")),totalSlides=parseFloat(sliderWrapper.attr("data-slider-totalslides")),cycle="",direction;""==animated&&(sliderWrapper.attr("data-slider-animated","yes"),"left"===$(this).attr("data-slide-direction")?"false"==sliderWrapper.attr("data-slider-with-cycle")&&1==pos?pos=1:pos--:"false"==sliderWrapper.attr("data-slider-with-cycle")&&pos==totalSlides?pos=totalSlides:pos++,sliderWrapper.attr("data-slider-pos",pos),pos!=totalSlides+1&&0!=pos||(cycle="yes"),sliderWrapper.attr("data-slider-cycle",cycle),t_slideMoveWithoutAnimation(rec,!1,sliderOptions,currentTranslate));t_slds_updateSlider(el)})),el.find(".t-slds__bullet").click((function(){var currentTranslate=t_slds_getCurrentTranslate(el),pos=parseFloat($(this).attr("data-slide-bullet-for"));sliderWrapper.attr("data-slider-pos",pos),t_slideMoveWithoutAnimation(rec,!1,sliderOptions,currentTranslate),t_slds_updateSlider(el)}))}function t_slds_animate(timing,draw,duration){var start=performance.now();requestAnimationFrame((function t_slds_animate(time){var timeFraction=(time-start)/duration;timeFraction>1&&(timeFraction=1);var progress=timing(timeFraction);draw(progress),timeFraction<1?requestAnimationFrame(t_slds_animate):"y"!==window.lazy&&"yes"!==$("#allrecords").attr("data-tilda-lazy")||t_slds_onHammerLoad("t_lazyload_update",(function(){t_lazyload_update()}))}))}function t_slide_MoveAnimation(sliderWrapper,pos,sliderWidth,animateDuration){if(sliderWrapper[0]){sliderWrapper[0].style.transition="height ease-in-out .5s, transform ease-in-out 0s";var translateValue=-Math.abs(pos*sliderWidth),currentTranslate=-parseInt(sliderWrapper[0].style.transform.match(/\d+/)[0]),nextTransformValue=currentTranslate-translateValue;0!==nextTransformValue&&t_slds_animate((function(t){return t}),(function(progress){sliderWrapper[0].style.transform="translateX("+(currentTranslate-nextTransformValue*progress)+"px)"}),animateDuration)}}function t_slideMoveWithoutAnimation(rec,withoutNewInterval,sliderOptions){var el="object"==typeof rec?rec:$("#rec"+rec),sliderWrapper=el.find(".t-slds__items-wrapper"),pos=parseFloat(sliderWrapper.attr("data-slider-pos")),itemsInRow,sliderWidth=(sliderWrapper.attr("data-slider-items-in-row")||0)>0?el.find(".t-slds__container .t-slds__item").width():el.find(".t-slds__container").width(),totalSlides=parseFloat(sliderWrapper.attr("data-slider-totalslides")),sliderNotAnimated=el.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");if(pos>totalSlides+1&&(pos=1),sliderNotAnimated){var active=el.find(".t-slds__item_active");0===el.find(".t-slds__item_dummy").length&&active.clone().addClass("t-slds__item_dummy").css({position:"absolute",left:sliderWidth*pos+"px"}).appendTo(sliderWrapper).fadeOut("normal",(function(){$(this).remove()})),sliderWrapper.addClass("t-slds_animated-cancel")}t_slideMove(rec,withoutNewInterval,sliderOptions),sliderNotAnimated&&sliderWrapper.removeClass("t-slds_animated-cancel")}function t_slideMoveInstantly(rec,withoutNewInterval,sliderOptions){var el="object"==typeof rec?rec:$("#rec"+rec),sliderWrapper=el.find(".t-slds__items-wrapper"),pos=parseFloat(sliderWrapper.attr("data-slider-pos")),itemsInRow,sliderWidth=(sliderWrapper.attr("data-slider-items-in-row")||0)>0?el.find(".t-slds__container .t-slds__item").width():el.find(".t-slds__container").width(),totalSlides=parseFloat(sliderWrapper.attr("data-slider-totalslides")),sliderNotAnimated=el.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");if(pos>totalSlides+1&&(pos=1),sliderNotAnimated){var active=el.find(".t-slds__item_active");0===el.find(".t-slds__item_dummy").length&&active.clone().addClass("t-slds__item_dummy").css({position:"absolute",left:sliderWidth*pos+"px"}).appendTo(sliderWrapper).fadeOut("normal",(function(){$(this).remove()})),sliderWrapper.addClass("t-slds_animated").addClass("t-slds_animated-cancel")}else sliderWrapper.addClass("t-slds_animated").addClass("t-slds_animated-cancel");t_slideMove(rec,withoutNewInterval,sliderOptions),sliderWrapper.removeClass("t-slds_animated").removeClass("t-slds_animated-cancel")}function t_slideMove(rec,withoutNewInterval,sliderOptions){var el="object"==typeof rec?rec:$("#rec"+rec),sliderWrapper=el.find(".t-slds__items-wrapper"),itemsInRow=sliderWrapper.attr("data-slider-items-in-row")||0,sliderWidth=itemsInRow>0?el.find(".t-slds__container .t-slds__item").width():el.find(".t-slds__container").width(),sliderTransition=parseFloat(sliderWrapper.attr("data-slider-transition")),pos=parseFloat(sliderWrapper.attr("data-slider-pos")),totalSlides=parseFloat(sliderWrapper.attr("data-slider-totalslides")),cycle=sliderWrapper.attr("data-slider-cycle"),sliderNotAnimated=el.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none"),sliderAutoPlay=sliderWrapper.attr("data-slider-timeout")>0,stopSlider=sliderWrapper.attr("data-slider-stop");if(pos>totalSlides+1&&(pos=1,sliderWrapper.attr("data-slider-pos",1)),"true"==stopSlider)return!1;"false"==sliderWrapper.attr("data-slider-with-cycle")&&(pos==totalSlides||itemsInRow>1&&pos==totalSlides-itemsInRow+1)?el.find(".t-slds__arrow_wrapper-right").fadeOut(300):el.find(".t-slds__arrow_wrapper-right").fadeIn(300),"false"==sliderWrapper.attr("data-slider-with-cycle")&&1==pos?el.find(".t-slds__arrow_wrapper-left").fadeOut(300):el.find(".t-slds__arrow_wrapper-left").fadeIn(300),sliderWrapper.addClass("t-slds_animated"),window.isSafariVersion&&window.isSafariVersion[0]>=13&&window.isiOSChrome&&!sliderNotAnimated?t_slide_MoveAnimation(sliderWrapper,pos,sliderWidth,sliderTransition):sliderWrapper.css({transform:"translateX(-"+sliderWidth*pos+"px)"}),setTimeout((function(){sliderWrapper.removeClass("t-slds_animated"),sliderWrapper.attr("data-slider-animated",""),"yes"==(cycle=sliderWrapper.attr("data-slider-cycle"))&&(pos==totalSlides+1&&(pos=1),0==pos&&(pos=totalSlides),window.isSafariVersion&&window.isSafariVersion[0]>=13&&window.isiOSChrome&&!sliderNotAnimated?t_slide_MoveAnimation(sliderWrapper,pos,sliderWidth,0):sliderWrapper.css({transform:"translateX(-"+sliderWidth*pos+"px)"}),!0!==sliderNotAnimated&&t_slds_ActiveSlide(rec,pos,totalSlides,sliderOptions),sliderWrapper.attr("data-slider-pos",pos)),"y"!==window.lazy&&"yes"!==$("#allrecords").attr("data-tilda-lazy")||t_slds_onHammerLoad("t_lazyload_update",(function(){t_lazyload_update()})),!withoutNewInterval&&sliderAutoPlay&&t_slds_initAutoPlay(rec,pos,totalSlides,sliderOptions)}),sliderTransition),t_slds_ActiveBullet(rec,pos,totalSlides,sliderOptions),t_slds_ActiveSlide(rec,pos,totalSlides),"true"==sliderWrapper.attr("data-slider-correct-height")&&t_slds_SliderHeight(rec),t_slds_SliderArrowsHeight(rec),t_slds_ActiveCaption(rec,pos,totalSlides),el.find(".t-slds__item-loaded").length<totalSlides+2&&t_slds_UpdateImages(rec,pos),sliderWrapper.attr("data-slider-curr-pos",pos)}function t_slds_updateSlider(rec){var el="object"==typeof rec?rec:$("#rec"+rec);t_slds_SliderWidth(rec);var sliderWrapper=el.find(".t-slds__items-wrapper"),itemsInRow=sliderWrapper.attr("data-slider-items-in-row")||0,sliderWidth=itemsInRow>0?el.find(".t-slds__container .t-slds__item").width():el.find(".t-slds__container").width(),pos=parseFloat(sliderWrapper.attr("data-slider-pos")),totalSlides=parseFloat(sliderWrapper.attr("data-slider-totalslides")),sliderWithCycle=sliderWrapper.attr("data-slider-with-cycle");pos>totalSlides+1&&(pos=1,sliderWrapper.attr("data-slider-pos",1)),"false"===sliderWithCycle&&totalSlides-itemsInRow<=0?el.find(".t-slds__arrow_wrapper-right").css("display","none"):el.find(".t-slds__arrow_wrapper-right").css("display",""),sliderWrapper.css({transform:"translateX(-"+sliderWidth*pos+"px)"}),"true"==sliderWrapper.attr("data-slider-correct-height")&&t_slds_UpdateSliderHeight(rec),t_slds_UpdateSliderArrowsHeight(rec)}function t_slds_UpdateImages(rec,pos){var el,item=("object"==typeof rec?rec:$("#rec"+rec)).find('.t-slds__item[data-slide-index="'+pos+'"]');item.addClass("t-slds__item-loaded"),item.next().addClass("t-slds__item-loaded"),item.prev().addClass("t-slds__item-loaded")}function t_slds_ActiveCaption(rec,pos,totalSlides){var el="object"==typeof rec?rec:$("#rec"+rec),caption=el.find(".t-slds__caption"),captionActive=el.find('.t-slds__caption[data-slide-caption="'+pos+'"]');caption.removeClass("t-slds__caption-active"),0==pos?captionActive=el.find('.t-slds__caption[data-slide-caption="'+totalSlides+'"]'):pos==totalSlides+1&&(captionActive=el.find('.t-slds__caption[data-slide-caption="1"]')),captionActive.addClass("t-slds__caption-active")}function t_slds_scrollImages(rec,distance){var el="object"==typeof rec?rec:$("#rec"+rec),value=(distance<0?"":"-")+Math.abs(distance).toString();el.find(".t-slds__items-wrapper").css("transform","translateX("+value+"px)")}function t_slds_ActiveBullet(rec,pos,totalSlides,sliderOptions){var maxThumbsCount;if(sliderOptions&&sliderOptions.thumbsbulletGallery){var columnSizeForMainImage=parseInt(sliderOptions.storeOptions.popup_opts.columns),galleryImageAspectRatio=+sliderOptions.storeOptions.slider_slidesOpts.ratio;maxThumbsCount=t_store_prodPopup_gallery_calcMaxThumbsCount(columnSizeForMainImage,galleryImageAspectRatio,60,10)}var el="object"==typeof rec?rec:$("#rec"+rec),bullet=el.find(".t-slds__bullet"),bulletActive=el.find('.t-slds__bullet[data-slide-bullet-for="'+pos+'"]');bullet.removeClass("t-slds__bullet_active"),sliderOptions&&sliderOptions.thumbsbulletGallery&&pos>=maxThumbsCount&&pos!=totalSlides+1||totalSlides>=maxThumbsCount&&0==pos?bulletActive=el.find('.t-slds__bullet[data-slide-bullet-for="'+maxThumbsCount+'"]'):0==pos?bulletActive=el.find('.t-slds__bullet[data-slide-bullet-for="'+totalSlides+'"]'):pos==totalSlides+1&&(bulletActive=el.find('.t-slds__bullet[data-slide-bullet-for="1"]')),bulletActive.addClass("t-slds__bullet_active")}function t_slds_ActiveSlide(rec,pos,totalSlides){var el="object"==typeof rec?rec:$("#rec"+rec),slide=el.find(".t-slds__item"),slideActive=el.find('.t-slds__item[data-slide-index="'+pos+'"]'),sliderNotAnimated=el.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");slide.removeClass("t-slds__item_active"),0==pos&&!1===sliderNotAnimated?el.find('.t-slds__item[data-slide-index="'+totalSlides+'"]').addClass("t-slds__item_active"):0==pos&&!0===sliderNotAnimated?slideActive=el.find('.t-slds__item[data-slide-index="'+totalSlides+'"]'):pos==totalSlides+1&&!1===sliderNotAnimated?el.find('.t-slds__item[data-slide-index="1"]').addClass("t-slds__item_active"):pos==totalSlides+1&&!0===sliderNotAnimated&&(slideActive=el.find('.t-slds__item[data-slide-index="1"]')),slideActive.addClass("t-slds__item_active")}function t_slds_SliderWidth(rec){var el="object"==typeof rec?rec:$("#rec"+rec),sliderContainerWidth=el.find(".t-slds__container").width(),totalSlides=el.find(".t-slds__item:not(.t-slds__item_dummy)").length;if(sliderWrapper=el.find(".t-slds__items-wrapper"),stopSlider=sliderWrapper.attr("data-slider-stop"),itemsInRow=sliderWrapper.attr("data-slider-items-in-row")||0,"true"==stopSlider)return!1;el.find(".t-slds__items-wrapper").width(sliderContainerWidth*totalSlides),window.innerWidth<=640?itemsInRow=1:window.innerWidth<=960&&itemsInRow>1&&(itemsInRow=2);var itemWidth=itemsInRow>1?sliderContainerWidth/itemsInRow:sliderContainerWidth;itemWidth>0&&el.find(".t-slds__item").width(itemWidth)}function t_slds_SliderHeight(rec){var el="object"==typeof rec?rec:$("#rec"+rec),sliderWrapper=el.find(".t-slds__items-wrapper").not('[data-slider-correct-height="false"]'),height=el.find(".t-slds__item_active").height();0!==height&&sliderWrapper.css("height",height)}function t_slds_UpdateSliderHeight(rec){var el="object"==typeof rec?rec:$("#rec"+rec),sliderWrapper=el.find(".t-slds__items-wrapper").not('[data-slider-correct-height="false"]'),height=el.find(".t-slds__item_active").height();0!==height&&sliderWrapper.css("height",height)}function t_slds_SliderArrowsHeight(rec){var el="object"==typeof rec?rec:$("#rec"+rec),height=el.find(".t-slds__item_active").height();0!==height&&el.find(".t-slds__arrow_wrapper").css("height",height)}function t_slds_UpdateSliderArrowsHeight(rec){var el="object"==typeof rec?rec:$("#rec"+rec),height=el.find(".t-slds__item_active").height();0!==height&&el.find(".t-slds__arrow_wrapper").css("height",height)}function t_slds_initAutoPlay(rec,pos,totalSlides,sliderOptions){var isZB="object"==typeof rec,el=isZB?rec:$("#rec"+rec),sliderContainer=el.find(".t-slds"),sliderWrapper=el.find(".t-slds__items-wrapper"),sliderTimeOut=parseFloat(sliderWrapper.attr("data-slider-timeout")),cycle="",stopSlider=sliderWrapper.attr("data-slider-stop"),sliderNotAnimated=el.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none"),galleryIntervalIdAttr=sliderWrapper.attr("data-slider-interval-id");if(galleryIntervalIdAttr&&clearInterval(galleryIntervalIdAttr),"true"==stopSlider)return!1;window.isMobile||sliderContainer.hover((function(){sliderWrapper.attr("data-slider-stopped","yes")}),(function(){sliderWrapper.attr("data-slider-stopped","")}));var elementTop=el.offset().top,elementBottom=elementTop+el.outerHeight(),hidden,visibilityChange;$(window).resize(t_throttle((function(){elementTop=el.offset().top,elementBottom=elementTop+el.outerHeight()}))),void 0!==document.hidden?(hidden="hidden",visibilityChange="visibilitychange"):void 0!==document.msHidden?(hidden="msHidden",visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(hidden="webkitHidden",visibilityChange="webkitvisibilitychange"),document.addEventListener(visibilityChange,(function(){if(document[hidden])sliderWrapper.attr("data-slider-stopped","yes");else{var display=el.css("display"),viewportTop=$(window).scrollTop(),viewportBottom=viewportTop+$(window).height();elementTop=el.offset().top,(elementBottom=elementTop+el.outerHeight())>viewportTop&&elementTop<viewportBottom&&"none"!==display&&sliderWrapper.attr("data-slider-stopped","")}}),!1),1===el.length&&$(window).bind("scroll",t_throttle((function(){var display=el.css("display"),viewportTop=$(window).scrollTop(),viewportBottom=viewportTop+$(window).height();"none"!==display?(elementTop=el.offset().top,(elementBottom=elementTop+el.outerHeight())>viewportTop&&elementTop<viewportBottom?sliderWrapper.attr("data-slider-stopped",""):""===sliderWrapper.attr("data-slider-stopped")&&sliderWrapper.attr("data-slider-stopped","yes")):isZB||sliderWrapper.attr("data-slider-stopped","yes")})));var galleryIntervalId=setInterval((function(){var stopped=sliderWrapper.attr("data-slider-stopped"),ignorehover=sliderWrapper.attr("data-slider-autoplay-ignore-hover"),isSliderTouch=sliderWrapper.attr("data-slider-touch"),currentTranslate=t_slds_getCurrentTranslate(el);"yes"!=stopped&&"yes"!=ignorehover&&"yes"!=isSliderTouch&&("false"==sliderWrapper.attr("data-slider-with-cycle")&&pos==totalSlides?pos=totalSlides:pos++,sliderWrapper.attr("data-slider-pos",pos),pos!=totalSlides+1&&0!=pos||(cycle="yes"),t_slideMoveWithoutAnimation(rec,!0,sliderOptions,currentTranslate),t_slds_updateSlider(rec),"yes"==cycle&&(pos==totalSlides+1&&(pos=1),0==pos&&(pos=totalSlides),sliderWrapper.attr("data-slider-pos",pos)),sliderWrapper.attr("data-slider-cycle",cycle))}),sliderTimeOut);sliderWrapper.attr("data-slider-interval-id",galleryIntervalId)}function t_slds_positionArrows(rec){var el="object"==typeof rec?rec:$("#rec"+rec),container=el.find(".t-slds__arrow_container-outside"),inner=el.find(".t-slds__item").width(),arrowleft=el.find(".t-slds__arrow-left").width(),arrowright=el.find(".t-slds__arrow-right").width();container.css({"max-width":arrowleft+arrowright+inner+120+"px"})}function t_slds_initSliderSwipe(rec,totalSlides,windowWidth,sliderOptions){var el="object"==typeof rec?rec:$("#rec"+rec),sliderWrapper=el.find(".t-slds__items-wrapper"),stopSlider=sliderWrapper.attr("data-slider-stop"),timeout,isScrolling=!1;if("true"==stopSlider)return!1;if(delete Hammer.defaults.cssProps.userSelect,sliderWrapper.length>0){if(hammer=new Hammer(sliderWrapper[0],{domEvents:!0,inputClass:Hammer.TouchInput,recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]}),$(window).bind("scroll",(function(){isScrolling=!0,clearTimeout(timeout),timeout=setTimeout((function(){isScrolling=!1}),250)})),1==totalSlides)return!1;hammer.on("pan",(function(event){if(isScrolling)return!1;var sliderWrapper=el.find(".t-slds__items-wrapper"),itemsInRow=sliderWrapper.attr("data-slider-items-in-row")||0,withSingleMove=itemsInRow>1,sliderWidth=withSingleMove?el.find(".t-slds__container .t-slds__item").width():el.find(".t-slds__container").width(),pos=parseFloat(sliderWrapper.attr("data-slider-pos")),totalSlides=parseFloat(sliderWrapper.attr("data-slider-totalslides")),cycle="",distance=event.deltaX,percentage=100/totalSlides*event.deltaX/$(window).innerWidth(),sensitivity=30,stopSlider;if("true"==sliderWrapper.attr("data-slider-stop"))return!1;sliderWrapper.attr("data-slider-touch","yes"),t_slds_scrollImages(rec,sliderWidth*pos-distance),event.isFinal&&(event.velocityX>.4?("false"==sliderWrapper.attr("data-slider-with-cycle")&&1==pos?pos=1:pos--,sliderWrapper.attr("data-slider-pos",pos),0==pos&&(cycle="yes"),sliderWrapper.attr("data-slider-cycle",cycle),t_slideMove(rec,!1,sliderOptions)):event.velocityX<-.4?("false"==sliderWrapper.attr("data-slider-with-cycle")&&(pos==totalSlides||withSingleMove&&pos==totalSlides-itemsInRow+1)?pos=withSingleMove?totalSlides-itemsInRow:totalSlides:pos++,sliderWrapper.attr("data-slider-pos",pos),pos==totalSlides+1&&(cycle="yes"),sliderWrapper.attr("data-slider-cycle",cycle),t_slideMove(rec,!1,sliderOptions)):percentage<=-30/totalSlides?("false"==sliderWrapper.attr("data-slider-with-cycle")&&(pos==totalSlides||withSingleMove&&pos==totalSlides-itemsInRow+1)?pos=withSingleMove?totalSlides-itemsInRow:totalSlides:pos++,sliderWrapper.attr("data-slider-pos",pos),pos==totalSlides+1&&(cycle="yes"),sliderWrapper.attr("data-slider-cycle",cycle),t_slideMove(rec,!1,sliderOptions)):percentage>=30/totalSlides?("false"==sliderWrapper.attr("data-slider-with-cycle")&&1==pos?pos=1:pos--,sliderWrapper.attr("data-slider-pos",pos),0==pos&&(cycle="yes"),sliderWrapper.attr("data-slider-cycle",cycle),t_slideMove(rec,!1,sliderOptions)):t_slideMove(rec,!1,sliderOptions),sliderWrapper.attr("data-slider-touch",""))})),hammer.on("panend",(function(){t_slideMove(rec,!1,sliderOptions)}))}}function t_slds_getCurrentTranslate(el){var sliderWrapper=el.find(".t-slds__items-wrapper");if(sliderWrapper.length>0){var transform=sliderWrapper[0].style.transform;if(sliderWrapper&&void 0!==transform&&""!==transform){var match=transform.match(/\d+/g);if(null!==match)return parseInt(match[0],10)}}}function t_slds_changeImageUrl(rec){var el;("object"==typeof rec?rec:$("#rec"+rec)).find(".t-slds__img").each((function(){var $this=$(this);void 0!==$this.attr("data-src")&&(($this=$(this)).attr("src",$this.attr("data-src")),$this.removeAttr("data-src"))}))}function t_slds_onHammerLoad(funcName,okFunc,time){if("function"==typeof window[funcName])okFunc();else var startTime=Date.now(),timerId=setTimeout((function checkFuncExist(){var currentTime=Date.now();if("function"!=typeof window[funcName]){if(currentTime-startTime>7e3)throw new Error(funcName+" is undefined");timerId=setTimeout(checkFuncExist,time||100)}else okFunc()}))}
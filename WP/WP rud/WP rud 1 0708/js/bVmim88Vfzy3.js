var version;function t_initZoom(){var t,e,o,r,n;document.querySelector(".t-zoomer__wrapper")||(window.tzoominited=!0,window.tzoomopenonce=!1,window.isDoubletapScaleAdded=!1,r=document.querySelectorAll("[data-zoomable]"),n=Array.prototype.slice.call(r).filter((function(t){return"yes"===t.getAttribute("data-zoomable")&&!t.classList.contains("t-slds__thumbs_gallery")&&""!==t.getAttribute("data-img-zoom-url")})),Array.prototype.forEach.call(n,(function(t){t.classList.add("t-zoomable")})),(t=document.createElement("div")).classList.add("t-zoomer__wrapper"),(e=document.createElement("div")).classList.add("t-zoomer__container"),(o=document.createElement("div")).classList.add("t-zoomer__bg"),r=t_zoom__createCloseBtn(),n=t_zoom__createScaleBtn(),t.appendChild(e),t.appendChild(o),t.appendChild(r),t.appendChild(n),document.body&&document.body.insertAdjacentElement("beforeend",t),t_zoom__initFullScreenImgOnClick(),t_zoom__closeAndSlideCarousel())}function t_zoom__createCloseBtn(){var t=document.createElement("div");return t.classList.add("t-zoomer__close"),t.style.display="none",t.insertAdjacentHTML("beforeend",'<svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41421 -0.000151038L0 1.41406L21.2132 22.6273L22.6274 21.2131L1.41421 -0.000151038Z" fill="black"/><path d="M22.6291 1.41421L21.2148 0L0.00164068 21.2132L1.41585 22.6274L22.6291 1.41421Z" fill="black"/></svg>'),t}function t_zoom__createScaleBtn(){var t=document.createElement("div");return t.classList.add("t-zoomer__scale"),t.classList.add("showed"),t.insertAdjacentHTML("beforeend",'<svg class="icon-increase" width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.832 22L17.8592 17.0273" stroke="black" stroke-width="2" stroke-linecap="square"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.58591 3.7511C0.917768 7.41924 0.917768 13.367 4.58591 17.0352C8.25405 20.7033 14.2019 20.7033 17.87 17.0352C21.5381 13.367 21.5381 7.41924 17.87 3.7511C14.2019 0.0829653 8.25405 0.0829653 4.58591 3.7511Z" stroke="black" stroke-width="2"/><path d="M6.25781 10.3931H16.2035" stroke="black" stroke-width="2"/><path d="M11.2305 15.3662V5.42053" stroke="black" stroke-width="2"/></svg><svg class="icon-decrease" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9961 22L17.0233 17.0273" stroke="black" stroke-width="2" stroke-linecap="square"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.74997 3.7511C0.0818308 7.41924 0.0818308 13.367 3.74997 17.0352C7.41811 20.7033 13.3659 20.7033 17.0341 17.0352C20.7022 13.367 20.7022 7.41924 17.0341 3.7511C13.3659 0.0829653 7.41811 0.0829653 3.74997 3.7511Z" stroke="black" stroke-width="2"/><path d="M5.41797 10.3931H15.3637" stroke="black" stroke-width="2"/></svg>'),t}function t_zoom__initFullScreenImgOnClick(){document.addEventListener("click",(function(t){(t=t.target.closest('.t-zoomable:not([data-img-zoom-url=""]), .t-slds__thumbs_gallery-zoomable'))&&t_zoomHandler(t)}));var t=window.t_zoom__isMobile?"orientationchange":"resize";window.addEventListener(t,(function(){document.body.classList.contains("t-zoomer__show")&&t_zoom_checkForScale()}))}function t_zoom__closeAndSlideCarousel(){var t=document.querySelector(".t-zoomer__close");t&&(t.addEventListener("click",(function(){t_zoom_close()})),document.addEventListener("keydown",(function(t){if(document.body.classList.contains("t-zoomer__show"))switch(t.keyCode){case 27:t.preventDefault(),t_zoom_close();break;case 37:t_zoom__setEventOnBtn("prev");break;case 39:t_zoom__setEventOnBtn("next")}})))}function t_zoomHandler(t){document.body.classList.add("t-zoomer__show"),document.querySelector(".t-popup_show")&&document.body.classList.add("t-zoomer__active");var e=document.querySelector(".t-zoomer__container"),o=document.createElement("div");o.classList.add("t-carousel__zoomed");var r=document.createElement("div");r.classList.add("t-carousel__zoomer__slides");var n=document.createElement("div");n.classList.add("t-carousel__zoomer__inner"),(i=document.createElement("div")).classList.add("t-carousel__zoomer__track"),n.appendChild(i);var a=t_zoom_createSliderArrow("left"),i=t_zoom_createSliderArrow("right");if(r.appendChild(a),r.appendChild(i),r.appendChild(n),o.appendChild(r),e&&(e.innerHTML=""),e&&e.appendChild(o),e=t.closest(".r"),!document.querySelector(".t-carousel__zoomer__track")||!e)return!1;t_zoom__addingImgsIntoCarousel(t),(o=document.querySelector(".t-zoomer__close"))&&(o.style.display="flex"),t_zoom_setModalColor(e),t_zoom__createAndLoopSlider(t),t_zoom__getEventOnBtn(),document.body.classList.add("t-zoomer__show_fixed"),t_zoom__initSingleZoom(),t_zoom_checkForScale(),t_zoom_lockScroll(),window.t_zoom__isMobile?(t_zoom_initSwipe(),t_zoom_initCloseSwipe(),window.addEventListener("orientationchange",t_zoom__updateActiveSlidePos)):window.addEventListener("resize",t_zoom__updateActiveSlidePos),window.tzoomopenonce=!0,t_zoom__initEventsonMobile()}function t_zoom__updateActiveSlidePos(){setTimeout((function(){var t,e=document.querySelector(".t-carousel__zoomer__track");e&&(t=e.querySelector(".t-carousel__zoomer__item.active").offsetLeft,e.style.transform="translateX("+-t+"px)")}),300)}function t_zoom_createSliderArrow(t){var e=document.createElement("div");e.classList.add("t-carousel__zoomer__control"),e.classList.add("t-carousel__zoomer__control_"+t),e.setAttribute("data-zoomer-slide","left"===t?"prev":"next");var o=document.createElement("div");o.classList.add("t-carousel__zoomer__arrow__wrapper"),o.classList.add("t-carousel__zoomer__arrow__wrapper_"+t);var r=document.createElement("div");return r.classList.add("t-carousel__zoomer__arrow"),r.classList.add("t-carousel__zoomer__arrow_"+t),r.classList.add("t-carousel__zoomer__arrow_small"),o.appendChild(r),e.appendChild(o),e}function t_zoom_initSwipe(){var t,e,o,r=document.querySelectorAll(".t-carousel__zoomer__item"),n=document.querySelector(".t-zoomer__wrapper");1<r.length&&(t=new Hammer(n,{domEvents:!0,inputClass:Hammer.TouchInput,cssProps:{touchCollout:"default"},recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]}),e=null,o=!1,window.tzoomopenonce||(t.on("panstart",(function(){var t=document.querySelector(".t-carousel__zoomer__track");"y"!==t.getAttribute("data-on-transition")?t&&(e=t.getBoundingClientRect().left,t.style.transition="none"):e=null,o=t_zoom__isScaled(n)})),t.on("panmove",(function(t){var r=document.querySelector(".t-carousel__zoomer__track"),a=r.getAttribute("data-on-transition"),i=n.getAttribute("data-on-drag");"y"===a||"y"===i||1!==t.maxPointers||o||(40<Math.abs(t.deltaX)&&r.setAttribute("data-on-drag","y"),e&&(t=e+t.deltaX,r.style.transform="translateX("+t+"px)"))})),t.on("panend",(function(t){var e=document.querySelector(".t-carousel__zoomer__track");e.setAttribute("data-on-drag","");var a,i,l=e.getAttribute("data-on-transition"),c=n.getAttribute("data-on-drag");"y"===l||"y"===c||1!==t.maxPointers||o||(e.style.transition="",i=Math.abs(t.velocityX),a=e.offsetLeft,l=r[0].offsetWidth,c=e.querySelector(".t-carousel__zoomer__item.active").offsetLeft,.6<(i=(l-Math.abs(a+c))/i/1e3)?i=.6:i<.2&&(i=.2),e.style.transitionDuration=i+"s",t.velocityX<-.5||t.deltaX<-80?(t_zoom_unscale(),t_zoom_showSlide("next"),t_zoom_checkForScale()):.5<t.velocityX||80<t.deltaX?(t_zoom_unscale(),t_zoom_showSlide("prev"),t_zoom_checkForScale()):t_zoom_showSlide())}))))}function t_zoom__initEventsonMobile(){var t;window.t_zoom__isMobile&&(t_zoom_setHideControlsTimer(),t=document.querySelector(".t-zoomer__wrapper"),["touchstart","touchmove","touchend","mousemove"].forEach((function(e){t.addEventListener(e,t_zoom_setHideControlsTimer)})),window.addEventListener("orientationchange",t_zoom__updateSlidesHeight))}function t_zoom__updateSlidesHeight(){var t,e=document.querySelectorAll(".t-carousel__zoomer__item .t-carousel__zoomer__img"),o=document.querySelector(".t-zoomer__wrapper");o&&e.length&&(t=o.getAttribute("data-max-comment-height"),t=parseInt(t,10),isNaN(t)||setTimeout((function(){var r,n=document.querySelector(".t-carousel__zoomer__item.active");n&&(n=o.offsetHeight-n.offsetHeight+t,r=document.documentElement.clientHeight-n,Array.prototype.forEach.call(e,(function(t){t.style.maxHeight=r+"px"})))}),300))}function t_zoom__initSingleZoom(){var t;1===document.querySelectorAll(".t-carousel__zoomer__item").length&&(t=document.querySelectorAll(".t-carousel__zoomer__control"),Array.prototype.forEach.call(t,(function(t){t.style.display="none"})))}function t_zoom__getEventOnBtn(){[{name:"right",direction:"next"},{name:"left",direction:"prev"}].forEach((function(t){document.querySelector(".t-carousel__zoomer__control_"+t.name).addEventListener("click",(function(){t_zoom__setEventOnBtn(t.direction)}))}))}function t_zoom__setEventOnBtn(t){var e=document.querySelector(".t-carousel__zoomer__track"),o=document.querySelector(".t-zoomer__wrapper");e=e.getAttribute("data-on-transition"),o=o.getAttribute("data-on-drag"),"y"!==e&&"y"!==o&&(t_zoom_unscale(),setTimeout((function(){t_zoom_showSlide(t),t_zoom_checkForScale()})))}function t_zoom__addingImgsIntoCarousel(t){var e=t.closest(".r"),o=e?e.querySelectorAll(".t-zoomable:not(.t-slds__thumbs_gallery):not(.tn-atom__slds-img)"):[];e&&e.querySelector(".t-slds")&&((r=t.closest(".t-slds"))&&(o=r.querySelectorAll(".t-zoomable:not(.t-slds__thumbs_gallery)")),r&&r.querySelector(".tn-elem__gallery__video-wrapper")&&(o=Array.prototype.slice.call(o)).splice(-1,1));var r,n,a,i="827"===e.getAttribute("data-record-type");i&&(r=e.querySelector(".t827__overlay-title"),e=e.querySelector(".t827__overlay-descr"),n=r?r.style.fontFamily:"",a=e?e.style.fontFamily:"");var l=document.querySelector(".t-carousel__zoomer__track"),c="y"===window.lazy;Array.prototype.forEach.call(o,(function(t,e){var r,s,_=t.getAttribute("data-img-zoom-url"),d="",m="",u=_?_.split(","):"";"IMG"!==t.nodeName&&"DIV"!==t.nodeName||(d=t.getAttribute("title")||"",m=t.getAttribute("data-img-zoom-descr")||""),d&&((r=document.createElement("div")).classList.add("t-zoomer__title"),r.classList.add("t-descr"),r.classList.add("t-descr_xxs"),i&&n&&(r.style.fontFamily=n),r.textContent=d),m&&((s=document.createElement("div")).classList.add("t-zoomer__descr"),s.classList.add("t-descr"),s.classList.add("t-descr_xxs"),i&&a&&(s.style.fontFamily=a),s.textContent=m);var p=document.createElement("div");p.classList.add("t-carousel__zoomer__item"),(_=document.createElement("div")).classList.add("t-carousel__zoomer__wrapper"),(t=document.createElement("img")).classList.add("t-carousel__zoomer__img"),c?(t.classList.add("t-img"),t.setAttribute("data-original",u),0!==e&&e!==o.length-1||t.setAttribute("data-lazy-rule","skip")):t.src=u,p.appendChild(_),_.appendChild(t),(d||m||window.t_zoom__isMobile)&&((t=document.createElement("div")).classList.add("t-zoomer__comments"),d&&t.appendChild(r),m&&t.appendChild(s),p.appendChild(t)),l.appendChild(p)}))}function t_zoom__createAndLoopSlider(t){var e,o,r,n=document.querySelector(".t-carousel__zoomer__track"),a=document.querySelector(".t-zoomer__wrapper"),i=document.querySelectorAll(".t-carousel__zoomer__item");a&&i.length&&(e=a.offsetHeight-i[0].offsetHeight,window.t_zoom__isMobile&&(o=Array.prototype.reduce.call(i,(function(t,e){return t<(e=(e=e.querySelector(".t-zoomer__comments"))?e.offsetHeight:0)&&(t=e),t}),0),a.setAttribute("data-max-comment-height",o)),r="y"===window.lazy,Array.prototype.forEach.call(i,(function(t){var n=t.querySelector(".t-carousel__zoomer__img"),a=r?"data-original":"src",i=n.getAttribute(a),l=(a=t.querySelector(".t-zoomer__comments"))?a.offsetHeight:0;window.t_zoom__isMobile&&(l=o),t=e+l,a&&(a.style.height=l+"px"),n.style.maxHeight=document.documentElement.clientHeight-t+"px",i&&-1!==i.indexOf(".svg")&&(n.style.width=window.innerWidth+"px"),n=document.querySelectorAll(".t-carousel__zoomer__arrow__wrapper"),Array.prototype.forEach.call(n,(function(t){t.style.top=l?"calc(50% - "+l/2+"px)":"50%"}))})),Array.prototype.forEach.call(i,(function(t,e){t.setAttribute("data-zoomer-slide-number",e)})),1<i.length&&t_zoom_loopSlider(),i=t.getAttribute("data-img-zoom-url"),t=".t-carousel__zoomer__img["+(r?"data-original":"src")+'="'+i+'"]',(t=(i=i?document.querySelector(t):null)?i.closest(".t-carousel__zoomer__item"):null)&&(i=!!t&&t.offsetLeft,t.classList.add("active"),n.style.transition="none",n.style.transform="translateX("+-i+"px)",setTimeout((function(){n.style.transition=""}),200)),r&&t_onFuncLoad("t_lazyload_update",t_lazyload_update))}function t_zoom_showSlide(t){var e=document.querySelector(".t-carousel__zoomer__track"),o=e.querySelectorAll(".t-carousel__zoomer__item"),r=e.querySelector(".t-carousel__zoomer__item.active"),n=0,a="y"===e.getAttribute("data-cached-zoom");Array.prototype.forEach.call(o,(function(t,e){t===r&&(n=e)})),"next"!==t&&"prev"!==t||(n=("next"===t?n+1:o.length+(n-1))%o.length,e.setAttribute("data-on-transition","y"),window.t_zoom__isMobile&&"0s"===getComputedStyle(e).transitionDuration&&!a&&(e.style.transition="")),t=o[n].offsetLeft,r.classList.remove("active"),o[n].classList.add("active"),e.style.transform="translateX("+-t+"px)",a&&(e.removeAttribute("data-cached-zoom"),a=new Event("transitionend"),e.dispatchEvent(a)),"y"===window.lazy&&(t_onFuncLoad("t_lazyload_update",t_lazyload_update),(o=o[n].querySelector("img"))&&!o.src&&setTimeout((function(){t_onFuncLoad("t_lazyload_update",t_lazyload_update)}),200))}function t_zoom_transitForLoop(t){var e,o=document.querySelector(".t-carousel__zoomer__track"),r=document.querySelectorAll(".t-carousel__zoomer__item");if(!t)return 1;"start"===t&&(e=r.length-2),"end"===t&&(e=1),t=r[e].offsetLeft,Array.prototype.forEach.call(r,(function(t,o){o===e?t.classList.add("active"):t.classList.remove("active")})),o.style.transition="none",o.style.transform="translateX("+-t+"px)",setTimeout((function(){o.style.transition="","y"===window.lazy&&t_onFuncLoad("t_lazyload_update",t_lazyload_update)}))}function t_zoom_loopSlider(){var t=document.querySelector(".t-carousel__zoomer__track"),e=t.querySelectorAll(".t-carousel__zoomer__item"),o=e[0].cloneNode(!0),r=e[e.length-1].cloneNode(!0);o.classList.remove("active"),r.classList.remove("active"),t_zoom__updateClonedImgSrc(e[0],e[e.length-1],o,r),t.insertBefore(r,t.firstChild),t.appendChild(o);var n=(e=t.querySelectorAll(".t-carousel__zoomer__item")).length;["transitionend","webkitTransitionEnd","oTransitionEnd"].forEach((function(o){t.addEventListener(o,(function(){var o=0;Array.prototype.forEach.call(e,(function(t,e){t.classList.contains("active")&&(o=e)})),0===o&&t_zoom_transitForLoop("start"),o===n-1&&t_zoom_transitForLoop("end"),t.setAttribute("data-on-transition","")}))}))}function t_zoom__updateClonedImgSrc(t,e,o,r){var n,a,i,l,c;"y"===window.lazy&&(n=t.querySelector("img"),a=e.querySelector("img"),i=o.querySelector("img"),l=r.querySelector("img"),(r=[n,a,i,l]).some((function(t){return!t}))||"MutationObserver"in window&&(c=new MutationObserver((function(t){t.forEach((function(t){var e;"attributes"===t.type&&"src"===t.attributeName&&(t.target===n&&(e=i),t.target===a&&(e=l),t.target===i&&(e=n),t.target===l&&(e=a),t.target.src&&!e.src&&(e.src=t.target.src))}))})),r.forEach((function(t){c.observe(t,{attributes:!0})}))))}function t_zoom_initCloseSwipe(){var t,e=document.querySelector(".t-zoomer__wrapper"),o=document.querySelector(".t-carousel__zoomer__track"),r=!1,n=new Hammer(e,{domEvents:!0,inputClass:Hammer.TouchInput,cssProps:{touchCollout:"default"},recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_VERTICAL}]]});n.on("panstart",(function(){t=e.offsetTop,e.style.position="none",r=t_zoom__isScaled(e)})),n.on("panmove",(function(n){var a=Math.abs(n.deltaY);"y"===o.getAttribute("data-on-drag")&&"y"!==e.getAttribute("data-on-drag")||!(-120<n.angle&&n.angle<-60||n.angle<120&&60<n.angle)||1!==n.maxPointers||r||(40<a&&e.setAttribute("data-on-drag","y"),n=t+n.deltaY,e.style.transform="translateY("+n+"px)")})),n.on("panend",t_zoom_closeSwipeHandler)}function t_zoom_closeSwipeHandler(t){var e=document.querySelector(".t-zoomer__wrapper"),o=t_zoom__isScaled(e);e.style.transition="transform 300ms ease-out",Math.abs(t.deltaY)<40&&(e.style.transform=""),"y"!==e.getAttribute("data-on-drag")||1!==t.maxPointers||o||(t.deltaY<-200||t.velocityY<-.3?(e.style.transform="translateY(-100vh)",setTimeout((function(){t_zoom_close(),e.style.transform=""}),300)):200<t.deltaY||.3<t.velocityY?(e.style.transform="translateY(100vh)",setTimeout((function(){t_zoom_close(),e.style.transform=""}),300)):e.style.transform=""),e.setAttribute("data-on-drag","")}function t_zoom_checkForScale(){var t,e=document.querySelector(".t-carousel__zoomer__item.active .t-carousel__zoomer__img:not(.loaded)");e&&(t=!!(t=document.getElementById("allrecords"))&&"yes"===t.getAttribute("data-tilda-lazy"),"y"===window.lazy||t?(t=Date.now(),t_zoom__waitImgForScale(e,t,(function(){t_zoom_checkToScaleInit(e)}))):e.complete?t_zoom_checkToScaleInit(e):e.onload=function(){t_zoom_checkToScaleInit(e)})}function t_zoom__waitImgForScale(t,e,o){t.src&&t.naturalWidth&&t.naturalHeight?o():Date.now()-e<3e3?setTimeout((function(){t_zoom__waitImgForScale(t,e,o)}),500):(console.warn("zoomed image isn't complete, natural width: "+t.naturalWidth+", natural height: "+t.naturalHeight),o())}function t_zoom_checkToScaleInit(t){var e=window.innerWidth,o=window.innerHeight,r=document.querySelector(".t-zoomer__wrapper");r.classList.remove("zoomer-no-scale");var n=t.hasAttribute("data-original-svg-height")||t.hasAttribute("data-original-svg-width");-1===t.src.indexOf(".svg")||window.isIE||n?o<t.naturalHeight||e<t.naturalWidth?(!window.isDoubletapScaleAdded&&window.t_zoom__isMobile&&t_zoom_doubletapScaleInit(),t_zoom_scale_init()):(document.querySelector(".t-zoomer__scale").style.display="",r.classList.add("zoomer-no-scale")):t_zoom_fetchSVG(t,o,e)}function t_zoom_fetchSVG(t,e,o){var r=t.src;fetch(r).then((function(t){return t.text()})).then((function(r){var n=document.createElement("div");document.body.insertAdjacentElement("beforeend",n),n.innerHTML=r,r=n.querySelector("svg"),t.setAttribute("data-original-svg-height",r.getBBox().height.toString()),t.setAttribute("data-original-svg-width",r.getBBox().width.toString()),t.style.width=r.getBBox().width+"px",t.style.height=r.getBBox().height+"px",e<r.getBBox().height||o<r.getBBox().width?(!window.isDoubletapScaleAdded&&window.t_zoom__isMobile&&t_zoom_doubletapScaleInit(),t_zoom_scale_init()):document.querySelector(".t-zoomer__scale").style.display="",document.body.removeChild(n)}))}function t_zoom_scale_init(){var t=document.querySelector(".t-zoomer__wrapper"),e=document.querySelector(".t-zoomer__scale");e.style.display="block","y"!==e.getAttribute("data-zoom-scale-init")&&(e.setAttribute("data-zoom-scale-init","y"),t.addEventListener("click",(function(e){var o=document.querySelector(".t-carousel__zoomer__item.active .t-carousel__zoomer__img"),r=document.querySelector(".t-carousel__zoomer__track"),n=document.querySelector(".t-carousel__zoomer__inner"),a=!t.classList.contains("zoomer-no-scale");(window.t_zoom__isMobile&&e.target.closest(".t-zoomer__scale")&&a||!window.t_zoom__isMobile&&a&&!e.target.closest(".t-zoomer__close, .t-carousel__zoomer__control"))&&(r.setAttribute("data-on-transition",""),r.style.transition="none",r.style.transform="none",o.style.maxHeight="",t.classList.contains("scale-active")?t_zoom_unscale():(t.classList.add("scale-active"),n.classList.add("scale-active"),window.t_zoom__isMobile?t_zoom_mobileZoomPositioningInit(o):t_zoom_desktopZoomPositioningInit(o,e)))}),!1))}function t_zoom_doubletapScaleInit(){window.isDoubletapScaleAdded=!0;var t=document.querySelector(".t-zoomer__wrapper");new Hammer(t,{domEvents:!0,inputClass:Hammer.TouchInput,cssProps:{touchCollout:"default"},recognizers:[[Hammer.Tap]]}).on("tap",(function(e){var o,r;2===e.tapCount&&document.body.classList.contains("t-zoomer__show")&&!e.target.closest(".t-carousel__zoomer__control")&&(o=document.querySelector(".t-carousel__zoomer__item.active .t-carousel__zoomer__img"),r=document.querySelector(".t-carousel__zoomer__inner"),e=document.querySelector(".t-carousel__zoomer__track"),o.style.maxHeight="",e.style.transition="none",e.style.transform="none",t.classList.contains("scale-active")?t_zoom_unscale():(t.classList.add("scale-active"),r.classList.add("scale-active"),t_zoom_mobileZoomPositioningInit(o)))}))}function t_zoom_desktopZoomPositioningInit(t,e){var o,r,n,a,i=(window.innerWidth-t.offsetWidth)/2,l=(window.innerHeight-t.offsetHeight)/2,c=t.getAttribute("data-original-svg-width")||t.naturalWidth,s=t.getAttribute("data-original-svg-height")||t.naturalHeight;function _(t,e){n=100*(void 0!==t.touches?t.touches[0]:t).clientX/window.innerWidth,a=-n*(e.offsetWidth-window.innerWidth)/100,e.style.left=a+"px"}function d(t,e){o=100*(void 0!==t.touches?t.touches[0]:t).clientY/window.innerHeight,r=-o*(e.offsetHeight-window.innerHeight)/100,e.style.top=r+"px"}t.style.left=i+"px",t.style.top=l+"px",window.innerWidth<c&&window.innerHeight<s?(n=100*e.clientX/window.innerWidth,a=-n*(c-window.innerWidth)/100,o=100*e.clientY/window.innerHeight,r=-o*(s-window.innerHeight)/100,t.style.left=a+"px",t.style.top=r+"px",window.t_zoom__isMobile?t.ontouchmove=function(e){_(e,t),d(e,t)}:t.onmousemove=function(e){_(e,t),d(e,t)}):window.innerWidth<c?(n=100*e.clientX/window.innerWidth,a=-n*(c-window.innerWidth)/100,t.style.left=a+"px",window.t_zoom__isMobile?t.ontouchmove=function(e){_(e,t)}:t.onmousemove=function(e){_(e,t)}):window.innerHeight<s&&(o=100*e.clientY/window.innerHeight,r=-o*(s-window.innerHeight)/100,t.style.top=r+"px",window.t_zoom__isMobile?t.ontouchmove=function(e){d(e,t)}:t.onmousemove=function(e){d(e,t)})}function t_zoom_mobileZoomPositioningInit(t){var e=(window.innerWidth-t.offsetWidth)/2,o=(window.innerHeight-t.offsetHeight)/2;t.style.left=e+"px",t.style.top=o+"px";var r={x:0,y:0},n={},a={};t.ontouchstart=function(t){n=t_zoom_getTouchEventXY(t)},t.ontouchmove=function(i){i=1.5*((l=t_zoom_getTouchEventXY(i)).x-n.x);var l=1.5*(l.y-n.y);a.x=r.x+i,a.y=r.y+l,a.x>-e&&(a.x=-e),a.x<e&&(a.x=e),a.y>-o&&(a.y=-o),a.y<o&&(a.y=o),t.offsetHeight<window.innerHeight&&(a.y=0),t.style.transform="translate("+a.x+"px, "+a.y+"px)"},t.ontouchend=function(){r.x=a.x,r.y=a.y},t.ontouchcancel=function(){r.x=a.x,r.y=a.y}}function t_zoom_getTouchEventXY(t){var e={x:0,y:0};return"touchstart"!==t.type&&"touchmove"!==t.type&&"touchend"!==t.type&&"touchcancel"!==t.type||(t=t.touches[0]||t.changedTouches[0],e.x=t.pageX,e.y=t.pageY),e}function t_zoom_close(){t_zoom_unscale(),document.body.classList.remove("t-zoomer__show"),document.body.classList.remove("t-zoomer__show_fixed");var t=document.querySelector(".t-zoomer__container");t&&(t.innerHTML=""),setTimeout((function(){document.body.classList.remove("t-zoomer__active")}),200),t_zoom_unlockScroll(),window.t_zoom__isMobile?(window.removeEventListener("orientationchange",t_zoom__updateSlidesHeight),window.removeEventListener("orientationchange",t_zoom__updateActiveSlidePos)):window.removeEventListener("resize",t_zoom__updateActiveSlidePos)}function t_zoom_unscale(){var t=document.querySelectorAll(".t-zoomer__wrapper.scale-active, .t-carousel__zoomer__inner.scale-active");Array.prototype.forEach.call(t,(function(t){t.classList.remove("scale-active")}));var e,o,r,n=document.querySelector(".t-carousel__zoomer__item.active"),a=document.querySelector(".t-carousel__zoomer__track"),i=document.querySelector(".t-zoomer__wrapper");n&&(e=n.querySelector(".t-carousel__zoomer__img"),r=n.querySelector(".t-zoomer__comments"),i&&(o=i.offsetHeight-n.offsetHeight,r=r?r.offsetHeight:0,window.t_zoom__isMobile&&(r=i.getAttribute("data-max-comment-height")||r),r=o+r,e.onmousemove=null,e.ontouchmove=null,e.style.transform="",e.style.left="",e.style.top="",e.style.maxHeight=document.documentElement.clientHeight-r+"px")),void 0!==n.offsetLeft&&void 0!==n.offsetTop&&(n=n.offsetLeft,a.style.transform="translateX("+-n+"px)"),t.length&&a.setAttribute("data-cached-zoom","y"),setTimeout((function(){a.style.transition=""}),100)}function t_zoom_lockScroll(){var t=/(android)/i.test(navigator.userAgent);(window.t_zoom__isiOS&&11===window.t_zoom__iOSMajorVersion&&!window.MSStream||t)&&!document.body.classList.contains("t-body_scroll-locked")&&(t=window.pageYOffset,document.body.classList.add("t-body_scroll-locked"),document.body.style.top="-"+t+"px",document.body.setAttribute("data-popup-scrolltop",t.toString()))}function t_zoom_unlockScroll(){var t=/(android)/i.test(navigator.userAgent);(window.t_zoom__isiOS&&11===window.t_zoom__iOSMajorVersion&&!window.MSStream||t)&&document.body.classList.contains("t-body_scroll-locked")&&(t=document.body.getAttribute("data-popup-scrolltop"),document.body.classList.remove("t-body_scroll-locked"),document.body.style.top="",document.body.removeAttribute("data-popup-scrolltop"),window.scrollTo(0,Number(t)))}function t_zoom_setModalColor(t){var e="#ffffff",o="#000000",r=t_zoom_hexToRgb(r=t.getAttribute("data-bg-color")||e);document.getElementById("allrecords")!==document.querySelector(".t-store__product-snippet")&&document.getElementById("allrecords").contains(document.querySelector(".t-store__product-snippet"))&&t&&(r=t.style.backgroundColor);var n,a,i=document.querySelector(".t-zoomer__container"),l=document.querySelectorAll(".t-zoomer__wrapper svg"),c=document.querySelectorAll(".t-zoomer__close, .t-zoomer__scale"),s=i.querySelectorAll(".t-carousel__zoomer__arrow__wrapper");t=document.querySelectorAll(".t-zoomer__title, .t-zoomer__descr"),(r="black"===t_zoom_luma_rgb(r)?o:e)==o?(n=e,a="rgba(1, 1, 1, 0.3)",Array.prototype.forEach.call(s,(function(t){t.classList.add("t-carousel__zoomer__arrow__wrapper_dark")}))):(n=o,a="rgba(255, 255, 255, 0.3)",Array.prototype.forEach.call(s,(function(t){t.classList.remove("t-carousel__zoomer__arrow__wrapper_dark")}))),Array.prototype.forEach.call(c,(function(t){t.style.background=a})),i.style.backgroundColor=r,i.style.color=n,Array.prototype.forEach.call(l,(function(t){"none"===t.getAttribute("fill")?t.setAttribute("fill","none"):t.setAttribute("fill",n),0<(t=t.querySelectorAll("path")).length&&Array.prototype.forEach.call(t,(function(t){t.getAttribute("stroke")&&t.setAttribute("stroke",n),t.getAttribute("fill")&&t.setAttribute("fill",n)}))})),Array.prototype.forEach.call(t,(function(t){t.style.color=n}))}function t_zoom_luma_rgb(t){var e=Array.isArray(t);return void 0===t?"black":0===t.indexOf("rgb")||e?(t=e?t:t.split("(")[1].split(")")[0].split(",")).length<3||.2126*t[0]+.7152*t[1]+.0722*t[2]<128?"black":"white":"black"}function t_zoom_hexToRgb(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,o,r){return e+e+o+o+r+r}));var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return t=e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null,e?[t.r,t.g,t.b]:null}function t_zoom_setHideControlsTimer(){var t=document.querySelectorAll(".t-carousel__zoomer__arrow__wrapper, .t-zoomer__scale");Array.prototype.forEach.call(t,(function(t){t.classList.remove("t-zoomer__hide-animation")})),setTimeout((function(){Array.prototype.forEach.call(t,(function(t){t.classList.add("t-zoomer__hide-animation")}))}))}function t_zoom__isScaled(t){return window.visualViewport&&1!==window.visualViewport.scale||t.classList.contains("scale-active")}window.t_zoom__isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),window.t_zoom__isMobile||(window.t_zoom__isMobile=navigator.userAgent.indexOf("Macintosh")&&"ontouchend"in document),window.t_zoom__isiOS=/iPhone|iPad|iPod/i.test(navigator.userAgent),window.t_zoom__iOSMajorVersion=0,!window.t_zoom__isiOS||null!==(version=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))&&(window.t_zoom__iOSMajorVersion=parseInt(version[1],10)),t_onReady((function(){window.tzoominited||t_initZoom()})),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(Element.prototype.matches.call(e,t))return e;e=e.parentElement||e.parentNode}return null});
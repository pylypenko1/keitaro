!function(t){"use strict";var i={clip:{show:function(i){t(i.el).animate({transform:"scale(1.1)"},{duration:200}).animate({transform:"scale(1)"},{duration:200,complete:function(){"sync"==i.options.queueType&&i.finishAnimation()}})}},fading:{show:function(i){t(i.el).css({opacity:0}).animate({opacity:1},{duration:400,complete:function(){"sync"==i.options.queueType&&i.finishAnimation()}})}},"drop-right":{show:function(i){var e=parseInt(t(i.el).width()/15);t(i.el).wrapInner('<div style="position: relative; left: '+e+'px;"></div>').css({opacity:1}),t(i.el).find("> div").css({opacity:0}).animate({opacity:1,left:0},{duration:700,complete:function(){var e=t(i.el).find("> div");t(i.el).append(e.find("> *")),e.remove(),"sync"==i.options.queueType&&i.finishAnimation()}})}},"drop-right-without-wrap":{show:function(i){var e=parseInt(t(i.el).outerWidth()/15);t(i.el).css({opacity:0,position:"relative",left:e,transition:"none"}).animate({opacity:1,left:0},{duration:700,complete:function(){t(i.el).css({transition:""}),"sync"==i.options.queueType&&i.finishAnimation()}})}},"drop-right-unwrap":{show:function(i){var e=parseInt(t(i.el).width()/15);t(i.el).wrapInner('<div style="position: relative; left: '+e+'px;"></div>').css({opacity:1}),t(i.el).find("> div").css({opacity:0}).animate({opacity:1,left:0},{duration:700,complete:function(){"sync"==i.options.queueType&&i.finishAnimation()}})}},"drop-left":{show:function(i){var e=parseInt(t(i.el).width()/15);t(i.el).wrapInner('<div style="position: relative; right: '+e+'px;"></div>').css({opacity:1}),t(i.el).find("> div").css({opacity:0}).animate({opacity:1,right:0},{duration:700,complete:function(){t(i.el).html(t(i.el).find("> div").html()),"sync"==i.options.queueType&&i.finishAnimation()}})}},"drop-bottom":{show:function(i){var e=parseInt(t(i.el).height()/15);t(i.el).wrapInner('<div style="position: relative; top: '+e+'px;"></div>').css({opacity:1}),t(i.el).find("> div").css({opacity:0}).animate({opacity:1,top:0},{duration:700,complete:function(){var e=t(i.el).find("> div");t(i.el).append(e.find("> *")),e.remove(),"sync"==i.options.queueType&&i.finishAnimation()}})}},"drop-top":{show:function(i){var e=t(i.el).data("ll-step")||.07;e=parseFloat(e);var n=parseInt(t(i.el).height()*e);t(i.el).wrapInner('<div style="position: relative; bottom: '+n+'px;"></div>').css({opacity:1}),t(i.el).find("> div").css({opacity:0}).animate({opacity:1,bottom:0},{duration:700,complete:function(){t(i.el).html(t(i.el).find("> div").html()),"sync"==i.options.queueType&&i.finishAnimation()}})}},"slide-right":{show:function(i){i.options.firstGroupElement&&t(i.el).parent().css({overflow:"hidden"}),t(i.el).css({opacity:0,position:"relative",left:"100%"}).animate({left:0,opacity:1},100).animate({left:-15},100).animate({left:0},100,(function(){i.options.lastGroupElement&&t(i.el).parent().css({overflow:"visible"}),"sync"==i.options.queueType&&i.finishAnimation()}))}},"move-up":{show:function(i){t(i.el).css({opacity:0,transform:"translateY(40px)"}).animate({opacity:1,transform:"translateY(0px)"},{duration:1e3,complete:function(){"sync"==i.options.queueType&&i.finishAnimation()}})}},action:{show:function(i){var e=t(i.el).data("ll-action-func")||"";e&&null!=window[e]&&null!=window[e]&&window[e](i.el)}}};function e(i,e){this.el=i,this.options={offset:1,delay:-1},t.extend(this.options,e),null!=this.options.delay&&null!=this.options.delay||(this.options.delay=-1),this.options.queueType=-1==this.options.delay?"sync":"async"}function n(i,e){this.el=i,this.queue=new o(this),this.options={offset:.7,delay:-1,queueType:"sync",isFirst:!1,force:!1,firstGroupElement:!1,lastGroupElement:!1},t.extend(this.options,e),null!=this.options.itemDelay&&null!=this.options.itemDelay||(this.options.itemDelay=-1),this.options.itemQueueType=-1==this.options.itemDelay?"sync":"async",this.options.finishDelay=this.options.finishDelay||300}function o(t){this.object=t,this.queue=[],this.is_exec=!1}function s(i){this.options={},t.extend(this.options,i),this.initialize()}function a(t){if(t.getBoundingClientRect&&"ios"!=window.ctBrowser.platform.name){var i=t.getBoundingClientRect(),e=t.ownerDocument.documentElement,n={x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop},o=function(t){for(var i=t.parentNode,e={x:0,y:0};i&&!p(i);)e.x+=i.scrollLeft,e.y+=i.scrollTop,i=i.parentNode;return e}(t),s="fixed"==l(t,"position");return{x:parseInt(i.left)+o.x+(s?0:n.x)-e.clientLeft,y:parseInt(i.top)+o.y+(s?0:n.y)-e.clientTop}}var a=t,r={x:0,y:0};if(p(t))return r;for(;a&&!p(a);){if(r.x+=a.offsetLeft,r.y+=a.offsetTop,"firefox"==window.ctBrowser.name){u(a)||(r.x+=c(a),r.y+=f(a));var h=a.parentNode;h&&"visible"!=l(h,"overflow")&&(r.x+=c(h),r.y+=f(h))}else a!=t&&"safari"==window.ctBrowser.name&&(r.x+=c(a),r.y+=f(a));a=a.offsetParent}return"firefox"!=window.ctBrowser.name||u(t)||(r.x-=c(t),r.y-=f(t)),r}function l(i,e){return t(i).css(e)}function r(t,i){return parseInt(l(t,i))||0}function u(t){return"border-box"==l(t,"-moz-box-sizing")}function f(t){return r(t,"border-top-width")}function c(t){return r(t,"border-left-width")}function p(t){return/^(?:body|html)$/i.test(t.tagName)}t.fn.reverse=[].reverse,String.prototype.startsWith=function(t){return 0==this.indexOf(t)},t.lazyLoading=function(t){return new s(t)},s.prototype={initialize:function(){this.animated=!1,this.groups=[],this.queue=new o(this),this.init=!0,this.hasHeaderVisuals=t(".ls-wp-container").size()>0,t(document).find(".lazy-loading:first").addClass("lazy-loading-first"),t(document).find(".lazy-loading").not(".lazy-loading-not-hide").css({visibility:"hidden"}),t(document).ready((function(){i.rebuild(),t(window).resize((function(){i.resizeTimeout&&clearTimeout(i.resizeTimeout),i.rebuild()}))}));var i=this;t(window).scroll((function(){i.animated||(i.init&&i.buildList(),i.init=!1,setTimeout((function(){i.scrollPageHandler()}),100),i.animated=!0)})),t(window).on("lazy-loading-start",(function(){i.rebuild()}))},rebuild:function(){this.buildList(),this.scrollPageHandler()},scrollPageHandler:function(){var i=[],e=t(window).scrollTop()+t(window).height();t.each(this.groups,(function(t,n){n.is_visible(e)?n.show():i.push(n)})),this.queue.next(),this.groups=i,this.animated=!1},buildList:function(){var i=this;this.groups=[],t(document).find(".lazy-loading").not(".lazy-loading-showed").each((function(){var o=new n(this,{offset:t(this).data("ll-offset")||.7,lazyLoading:i,itemDelay:t(this).data("ll-item-delay"),isFirst:i.hasHeaderVisuals&&t(this).hasClass("lazy-loading-first"),finishDelay:t(this).data("ll-finish-delay"),force:null!=t(this).data("ll-force-start")&&null!=t(this).data("ll-force-start")}),s=[];t(this).find(".lazy-loading-item").not(".lazy-loading-showed").each((function(){var n=i.getEffect(this);if(""!=n){var a=o.options.itemDelay,l=t(this).data("ll-item-delay");null!=l&&null!=l&&(a=l);var r=new e(this,{effect:n,group:o,delay:a});s.push(r)}else t(this).css({opacity:1})})),s.length>0&&(o.setElements(s),i.groups.push(o))}))},getEffect:function(i){return t(i).data("ll-effect")||""},finishAnimation:function(){}},n.prototype={is_visible:function(t){return!!this.options.force||a(this.el).y+parseFloat(this.options.offset)*this.el.offsetHeight<=t},show:function(){this.options.lazyLoading.queue.add(this),t(this.el).addClass("lazy-loading-showed")},setElements:function(t){this.elements=t},startAnimation:function(){var i=this;t(this.el).css({visibility:"visible"}),t.each(this.elements,(function(e,n){"action"!=i.elements[e].options.effect&&("clip"!=i.elements[e].options.effect?t(i.elements[e].el).css({opacity:0}):t(i.elements[e].el).css({position:"relative",transform:"scale(0)"})),0==e&&(i.elements[e].options.firstGroupElement=!0),e==i.elements.length-1&&(i.elements[e].options.lastGroupElement=!0,i.elements[e].options.queueType="sync"),i.elements[e].show()})),this.options.isFirst?setTimeout((function(){i.queue.next()}),500):this.queue.next(),setTimeout((function(){i.finishAnimation()}),this.options.finishDelay)},finishAnimation:function(){this.options.lazyLoading.queue.finishPosition()}},e.prototype={is_visible:function(t){var e=(i[this.options.effect]||{}).offset||this.options.offset;return a(this.el).y+e*this.el.offsetHeight<=t},show:function(){this.options.group.queue.add(this),t(this.el).addClass("lazy-loading-showed")},startAnimation:function(){var t=this;((i[this.options.effect]||{}).show||function(){})(this),this.options.delay>=0&&"async"==this.options.queueType&&(this.options.delay>0?setTimeout((function(){t.finishAnimation()}),this.options.delay):t.finishAnimation())},finishAnimation:function(){this.options.group.queue.finishPosition()}},o.prototype={add:function(t){this.queue.push(t)},next:function(){if(this.is_exec||0==this.queue.length)return!1;this.is_exec=!0,this.queue.shift().startAnimation()},finishPosition:function(){this.is_exec=!1,this.queue.length>0&&this.next()}}}(jQuery);
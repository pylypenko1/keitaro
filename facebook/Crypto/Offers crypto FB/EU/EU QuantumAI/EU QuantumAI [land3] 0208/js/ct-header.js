!function(t){"use strict";function e(e,i){this.el=e,this.$el=t(e),this.options={startTop:1},t.extend(this.options,i),this.initialize()}e.prototype={initialize:function(){var e=this;this.$wrapper=t("#site-header-wrapper"),this.$topArea=t("#top-area"),this.topAreaInSiteHeader=t("#site-header #top-area").length>0,this.$headerMain=t(".header-main",this.$el),this.hasAdminBar=-1!=document.body.className.indexOf("admin-bar"),this.htmlOffset=this.hasAdminBar?parseInt(t("html").css("margin-top")):0,this.scrollTop=0,this.topOffset=0,this.settedWrapperHeight=!1,this.initedForDesktop=!1,this.hideWrapper=this.$wrapper.hasClass("site-header-wrapper-transparent"),this.videoBackground=t(".page-title-block .ct-video-background").length&&t(".page-title-block .ct-video-background").data("headerup"),this.$el.hasClass("header-on-slideshow")&&t("#main-content > *").first().is(".ct-slideshow, .block-slideshow")&&this.$wrapper.css({position:"absolute"}),this.$el.hasClass("header-on-slideshow")&&t("#main-content > *").first().is(".ct-slideshow, .block-slideshow")?this.$wrapper.addClass("header-on-slideshow"):this.$el.removeClass("header-on-slideshow"),this.videoBackground&&(this.$el.addClass("header-on-slideshow"),this.$wrapper.addClass("header-on-slideshow")),this.initForDesktop(),t(window).scroll((function(){e.scrollHandler()})),t(window).resize((function(){e.initForDesktop(),e.scrollHandler(),setTimeout((function(){e.initializeHeight()}),10)}))},initForDesktop:function(){if(window.isResponsiveMenuVisible()||this.initedForDesktop)return!1;this.initializeHeight(),this.initializeStyles(),this.$topArea.length&&!this.topAreaInSiteHeader&&(this.options.startTop=this.$topArea.outerHeight())},setMargin:function(t){var e=t.siblings("img.small"),i=0;if(this.$headerMain.hasClass("logo-position-right"))i=e.width();else if(this.$headerMain.hasClass("logo-position-center")||this.$headerMain.hasClass("logo-position-menu_center")){i=t.width();var n=e.width(),o=(i-n)/2;i=n+o,e.css("margin-right",o+"px")}i||(i=t.width()),e.css("margin-left","-"+i+"px"),t.parent().css("min-width",i+"px"),e.show()},initializeStyles:function(){var e=this;if(this.$headerMain.hasClass("logo-position-menu_center"))var i=t("#primary-navigation .menu-item-logo a .logo img.default",this.$el);else i=t(".site-title a .logo img.default",this.$el);i.length&&i.is(":visible")&&i[0].complete?(e.setMargin(i),e.initializeHeight()):i.on("load error",(function(){e.setMargin(i),e.initializeHeight()}))},initializeHeight:function(){if(window.isResponsiveMenuVisible())return this.$el.removeClass("shrink fixed"),this.settedWrapperHeight&&this.$wrapper.css({height:""}),!1;if(this.hideWrapper)return!1;var t=this;setTimeout((function(){var e=t.$el.hasClass("shrink");t.$el.removeClass("shrink");var i=t.$el.outerHeight();t.$wrapper.height(i),t.settedWrapperHeight=!0,e&&t.$el.addClass("shrink")}),50)},updateTopOffset:function(){var t=this.htmlOffset;if(this.$wrapper.hasClass("header-on-slideshow")&&!this.$el.hasClass("fixed")&&(t=0),this.$topArea.length&&!this.topAreaInSiteHeader&&window.isTopAreaVisible()){var e=this.$topArea.outerHeight();this.options.startTop=e,this.scrollTop<e&&(t+=e-this.scrollTop)}this.topOffset!=t&&(this.topOffset=t,this.$el.css("top",t+"px"))},scrollHandler:function(){if(window.isResponsiveMenuVisible())return!1;if(this.getScrollY()>=this.options.startTop){if(!this.$el.hasClass("shrink")){var t="shrink fixed";window.ctSettings.fillTopArea&&(t+=" fill"),this.$el.addClass(t),this.hasAdminBar&&this.$el.css({top:this.htmlOffset})}}else this.$el.hasClass("shrink")&&(this.$el.removeClass("shrink fixed"),this.hasAdminBar&&this.$el.css({top:""}))},updateScrollTop:function(){this.scrollTop=t(window).scrollTop()},getScrollY:function(){return window.pageYOffset||document.documentElement.scrollTop}},t.fn.headerAnimation=function(t){return t=t||{},new e(this.get(0),t)}}(jQuery),function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Clipboard=t()}((function(){return function t(e,i,n){function o(s,a){if(!i[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[s]={exports:{}};e[s][0].call(u.exports,(function(t){return o(e[s][1][t]||t)}),u,u.exports,t,e,i,n)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,i){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(t,e){for(;t&&9!==t.nodeType;){if(t.matches(e))return t;t=t.parentNode}}},{}],2:[function(t,e,i){function n(t,e,i,n){return function(i){i.delegateTarget=o(i.target,e),i.delegateTarget&&n.call(t,i)}}var o=t("./closest");e.exports=function(t,e,i,o,r){var s=n.apply(this,arguments);return t.addEventListener(i,s,r),{destroy:function(){t.removeEventListener(i,s,r)}}}},{"./closest":1}],3:[function(t,e,i){i.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},i.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||i.node(t[0]))},i.string=function(t){return"string"==typeof t||t instanceof String},i.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,i){var n=t("./is"),o=t("delegate");e.exports=function(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!n.string(e))throw new TypeError("Second argument must be a String");if(!n.fn(i))throw new TypeError("Third argument must be a Function");if(n.node(t))return function(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}(t,e,i);if(n.nodeList(t))return function(t,e,i){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,i)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,i)}))}}}(t,e,i);if(n.string(t))return function(t,e,i){return o(document.body,t,e,i)}(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},{"./is":3,delegate:2}],5:[function(t,e,i){e.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}},{}],6:[function(t,e,i){function n(){}n.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){function n(){o.off(t,n),e.apply(i,arguments)}var o=this;return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=i.length;n<o;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],o=[];if(n&&e)for(var r=0,s=n.length;r<s;r++)n[r].fn!==e&&n[r].fn._!==e&&o.push(n[r]);return o.length?i[t]=o:delete i[t],this}},e.exports=n},{}],7:[function(t,e,i){!function(n,o){if(void 0!==i)o(e,t("select"));else{var r={exports:{}};o(r,n.select),n.clipboardAction=r.exports}}(this,(function(t,e){"use strict";var i=function(t){return t&&t.__esModule?t:{default:t}}(e),n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":n(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=r}))},{select:5}],8:[function(t,e,i){!function(n,o){if(void 0!==i)o(e,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var r={exports:{}};o(r,n.clipboardAction,n.tinyEmitter,n.goodListener),n.clipboard=r.exports}}(this,(function(t,e,i,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var i="data-clipboard-"+t;if(e.hasAttribute(i))return e.getAttribute(i)}var s=o(e),a=o(i),l=o(n),c=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(t){function e(t,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.resolveOptions(i),n.listenClick(t),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),c(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,l.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(e),target:this.target(e),text:this.text(e),trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return r("action",t)}},{key:"defaultTarget",value:function(t){var e=r("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return r("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach((function(t){i=i&&!!document.queryCommandSupported(t)})),i}}]),e}(a.default);t.exports=u}))},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)})),jQuery,document.getElementById("clip-link")&&new Clipboard(".btn-clipboard"),function(t){t((function(){t(".fancybox-popup a").each((function(){t(this).fancybox({title:!1,wrapCSS:"custom-popup",width:600,autoResize:!1,autoSize:!1,autoHeight:!0})}))}))}(jQuery);
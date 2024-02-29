!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):(e=e||self).Modal=t(e.jQuery,e.Util)}(this,function(e,t){"use strict";function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach(function(t){n(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t;var r="modal",a=".bs.modal",l=e.fn.modal,d={backdrop:!0,keyboard:!0,focus:!0,show:!0},h={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide.bs.modal",HIDE_PREVENTED:"hidePrevented.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},_="modal-dialog-scrollable",u="modal-scrollbar-measure",m="modal-backdrop",f="modal-open",g="fade",p="show",b="modal-static",S={DIALOG:".modal-dialog",MODAL_BODY:".modal-body",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top"},v=function(){function n(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(S.DIALOG),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var o,l,v,E=n.prototype;return E.toggle=function(e){return this._isShown?this.hide():this.show(e)},E.show=function(t){var i=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass(g)&&(this._isTransitioning=!0);var n=e.Event(c.SHOW,{relatedTarget:t});e(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(c.CLICK_DISMISS,S.DATA_DISMISS,function(e){return i.hide(e)}),e(this._dialog).on(c.MOUSEDOWN_DISMISS,function(){e(i._element).one(c.MOUSEUP_DISMISS,function(t){e(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(t)}))}},E.hide=function(i){var n=this;if(i&&i.preventDefault(),this._isShown&&!this._isTransitioning){var o=e.Event(c.HIDE);if(e(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()){this._isShown=!1;var s=e(this._element).hasClass(g);if(s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(c.FOCUSIN),e(this._element).removeClass(p),e(this._element).off(c.CLICK_DISMISS),e(this._dialog).off(c.MOUSEDOWN_DISMISS),s){var r=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(r)}else this._hideModal()}}},E.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return e(t).off(a)}),e(document).off(c.FOCUSIN),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},E.handleUpdate=function(){this._adjustDialog()},E._getConfig=function(e){return e=s({},d,{},e),t.typeCheckConfig(r,e,h),e},E._triggerBackdropTransition=function(){var i=this;if("static"===this._config.backdrop){var n=e.Event(c.HIDE_PREVENTED);if(e(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add(b);var o=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,function(){i._element.classList.remove(b)}).emulateTransitionEnd(o),this._element.focus()}else this.hide()},E._showElement=function(i){var n=this,o=e(this._element).hasClass(g),s=this._dialog?this._dialog.querySelector(S.MODAL_BODY):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass(_)&&s?s.scrollTop=0:this._element.scrollTop=0,o&&t.reflow(this._element),e(this._element).addClass(p),this._config.focus&&this._enforceFocus();var r=e.Event(c.SHOWN,{relatedTarget:i}),a=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)};if(o){var l=t.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(t.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},E._enforceFocus=function(){var t=this;e(document).off(c.FOCUSIN).on(c.FOCUSIN,function(i){document!==i.target&&t._element!==i.target&&0===e(t._element).has(i.target).length&&t._element.focus()})},E._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(c.KEYDOWN_DISMISS,function(e){27===e.which&&t._triggerBackdropTransition()}):this._isShown||e(this._element).off(c.KEYDOWN_DISMISS)},E._setResizeEvent=function(){var t=this;this._isShown?e(window).on(c.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(c.RESIZE)},E._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(f),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(c.HIDDEN)})},E._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},E._showBackdrop=function(i){var n=this,o=e(this._element).hasClass(g)?g:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=m,o&&this._backdrop.classList.add(o),e(this._backdrop).appendTo(document.body),e(this._element).on(c.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&n._triggerBackdropTransition()}),o&&t.reflow(this._backdrop),e(this._backdrop).addClass(p),!i)return;if(!o)return void i();var s=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,i).emulateTransitionEnd(s)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(p);var r=function(){n._removeBackdrop(),i&&i()};if(e(this._element).hasClass(g)){var a=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else i&&i()},E._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},E._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},E._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},E._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var i=[].slice.call(document.querySelectorAll(S.FIXED_CONTENT)),n=[].slice.call(document.querySelectorAll(S.STICKY_CONTENT));e(i).each(function(i,n){var o=n.style.paddingRight,s=e(n).css("padding-right");e(n).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")}),e(n).each(function(i,n){var o=n.style.marginRight,s=e(n).css("margin-right");e(n).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")});var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass(f)},E._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(S.FIXED_CONTENT));e(t).each(function(t,i){var n=e(i).data("padding-right");e(i).removeData("padding-right"),i.style.paddingRight=n||""});var i=[].slice.call(document.querySelectorAll(""+S.STICKY_CONTENT));e(i).each(function(t,i){var n=e(i).data("margin-right");void 0!==n&&e(i).css("margin-right",n).removeData("margin-right")});var n=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},E._getScrollbarWidth=function(){var e=document.createElement("div");e.className=u,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},n._jQueryInterface=function(t,i){return this.each(function(){var o=e(this).data("bs.modal"),r=s({},d,{},e(this).data(),{},"object"==typeof t&&t?t:{});if(o||(o=new n(this,r),e(this).data("bs.modal",o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t](i)}else r.show&&o.show(i)})},o=n,v=[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return d}}],(l=null)&&i(o.prototype,l),v&&i(o,v),n}();return e(document).on(c.CLICK_DATA_API,S.DATA_TOGGLE,function(i){var n,o=this,r=t.getSelectorFromElement(this);r&&(n=document.querySelector(r));var a=e(n).data("bs.modal")?"toggle":s({},e(n).data(),{},e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||i.preventDefault();var l=e(n).one(c.SHOW,function(t){t.isDefaultPrevented()||l.one(c.HIDDEN,function(){e(o).is(":visible")&&o.focus()})});v._jQueryInterface.call(e(n),a,this)}),e.fn.modal=v._jQueryInterface,e.fn.modal.Constructor=v,e.fn.modal.noConflict=function(){return e.fn.modal=l,v._jQueryInterface},v});
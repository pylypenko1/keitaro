!function(){var e={page:null,pageWidth:0,pageOffset:{},fixVcRow:!0,pagePaddingLeft:0};if(window.ct_fix_fullwidth_position=function(t){if(null==t)return!1;if(null==e.page&&(e.page=document.getElementById("page"),e.pageOffset=e.page.getBoundingClientRect(),e.pageWidth=parseFloat(e.pageOffset.width),e.pagePaddingLeft=0,-1!=e.page.className.indexOf("vertical-header")&&(e.pagePaddingLeft=45,e.pageWidth>=1600&&(e.pagePaddingLeft=360),e.pageWidth<980&&(e.pagePaddingLeft=0))),e.pageWidth<1170)return!1;if(!e.fixVcRow)return!1;if(null!=t.previousElementSibling&&null!=t.previousElementSibling&&-1==t.previousElementSibling.className.indexOf("fullwidth-block"))var i=t.previousElementSibling.getBoundingClientRect();else i=t.parentNode.getBoundingClientRect();if(i.top>window.ctOptions.clientHeight)return e.fixVcRow=!1,!1;if(-1!=t.className.indexOf("vc_row"))var a=-21,l=-21;else a=0,l=0;var n=parseInt(e.pageOffset.left+.5)-parseInt((i.left<0?0:i.left)+.5)-a+e.pagePaddingLeft,d=window.ctSettings.isRTL?"right":"left";if(t.style.position="relative",t.style[d]=n+"px",t.style.width=e.pageWidth-e.pagePaddingLeft+"px",-1==t.className.indexOf("vc_row")&&t.setAttribute("data-fullwidth-updated",1),-1!=t.className.indexOf("vc_row")&&!t.hasAttribute("data-vc-stretch-content")){var s=t.parentNode.querySelector(".vc_row-full-width-before"),c=-1*n;0>c&&(c=0);var o=e.pageWidth-c-s.offsetWidth+a+l;0>o&&(o=0),t.style.paddingLeft=c+"px",t.style.paddingRight=o+"px"}},window.ctSettings.isTouch&&setTimeout((function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=window.ctSettings.themePath+"/css/ct-touch.css",e.appendChild(t)}),1e3),window.ctSettings.lasyDisabled&&!window.ctSettings.forcedLasyDisabled&&setTimeout((function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=window.ctSettings.themePath+"/css/ct-effects-disabled.css",e.appendChild(t)}),1e3),window.ctSettings.parallaxDisabled){var t=document.getElementsByTagName("head")[0],i=document.createElement("style");i.rel="stylesheet",i.type="text/css",i.innerHTML=".fullwidth-block.fullwidth-block-parallax-vertical .fullwidth-block-background, .fullwidth-block.fullwidth-block-parallax-fixed .fullwidth-block-background { background-attachment: scroll !important; }",t.appendChild(i)}}(),setTimeout((function(){var e=document.getElementById("page-preloader");null!=e&&null!=e&&(e.className+=" preloader-loaded")}),window.pagePreloaderHideTime||1e3);
!function(){var t,e=void 0,n=!0,i=null,a=!1,o=this;function r(t,e){function n(){}n.prototype=e.prototype,t.M=e.prototype,t.prototype=new n,t.prototype.constructor=t}function s(){}function c(t,e,n){switch(typeof e){case"string":f(e,n);break;case"number":n.push(isFinite(e)&&!isNaN(e)?e:"null");break;case"boolean":n.push(e);break;case"undefined":n.push("null");break;case"object":if(e==i){n.push("null");break}if("array"==function(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object";return e}(e)){var a=e.length;n.push("[");for(var o="",r=0;r<a;r++)n.push(o),c(t,e[r],n),o=",";n.push("]");break}for(o in n.push("{"),a="",e)Object.prototype.hasOwnProperty.call(e,o)&&("function"!=typeof(r=e[o])&&(n.push(a),f(o,n),n.push(":"),c(t,r,n),a=","));n.push("}");break;case"function":break;default:throw Error("Unknown type: "+typeof e)}}var h={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},u=/\uffff/.test("￿")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function f(t,e){e.push('"',t.replace(u,(function(t){if(t in h)return h[t];var e=t.charCodeAt(0),n="\\u";return e<16?n+="000":e<256?n+="00":e<4096&&(n+="0"),h[t]=n+e.toString(16)})),'"')}var p={scroll:5e3,keydown:5e3,mousemove:5e3,resize:5e3,mousedown:5e3,focus:5e3,pageload:5e3};function l(){for(var t="",e=0;e<16;e++)t+=Math.random();return t}function d(t,e){var n="",i=m(encodeURIComponent(t));return i.splice(e||5,i.length),B(i,(function(t){if(0==t)t="A";else{t>>>=0;for(var e="";t>0;)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(t%64)+e,t>>>=6;t=e}n+=t})),n}function m(t){t+=String.fromCharCode(128);for(var e,n,i,a,o,r,s=[1518500249,1859775393,2400959708,3395469782],c=1732584193,h=4023233417,u=2562383102,f=271733878,p=3285377520,l=[],d=Math.ceil((t.length/4+2)/16),m=[d],b=0;b<d;b++)for(m[b]=[],e=0;e<16;e++)m[b][e]=t.charCodeAt(64*b+4*e)<<24|t.charCodeAt(64*b+4*e+1)<<16|t.charCodeAt(64*b+4*e+2)<<8|t.charCodeAt(64*b+4*e+3);for(b=8*(t.length-1),m[t=d-1][14]=Math.floor(b/Math.pow(2,32)),m[t][15]=4294967295&b,b=0;b<d;b++){for(r=0;r<16;r++)l[r]=m[b][r];for(r=16;r<80;r++)l[r]=(l[r-3]^l[r-8]^l[r-14]^l[r-16])<<1|(l[r-3]^l[r-8]^l[r-14]^l[r-16])>>>31;for(t=c,e=h,n=u,i=f,a=p,r=0;r<80;r++)o=(t<<5|t>>>27)+(0==(o=Math.floor(r/20))?e&n^~e&i:1==o?e^n^i:2==o?e&n^e&i^n&i:e^n^i)+a+s[o]+l[r]&4294967295,a=i,i=n,n=e<<30|e>>>2,e=t,t=o;c=c+t&4294967295,h=h+e&4294967295,u=u+n&4294967295,f=f+i&4294967295,p=p+a&4294967295}return[c,h,u,f,p]}function b(t,e,n){var i=Array.prototype.slice,a=i.call(arguments,2);return function(){return t.apply(e,a.concat(i.call(arguments)))}}function v(t){return void 0!==t}function g(t){return t&&t.replace(/^www\./,"")}function y(){var t=o.location.hostname;return t&&t.replace(/^www[0-9]*\./,"")}var _=/^((https?\:)?(\/\/))/i;function w(t){return t&&t.replace(_,"")}var C=/^((https?\:)?(\/\/))?[^\/]*/;function I(t){return t.replace(C,"")}var E=/\#.*/;function k(t){return t.replace(E,"")}var x=/\?[^\#]*/;function S(t){return t.toLowerCase()}var U,R=/\/+((\?|\#).*)?$/;function A(t){return t.replace(R,"$1")}function L(t){return t&&t.replace(x,"")}function O(t){var e=t.match(/\?(.*)$/gi)?t.match(/\?(.*)$/gi)[0].slice(1).replace(/#(.*)?/gi,"").split("&"):[],n=t.match(/#(.*)$/gi)?t.match(/#(.*)$/gi)[0]:"";t=t.match(/[#|\?](.*)?/gi)?t.slice(0,t.search(/[#|\?](.*)?/gi)):t;return(e=function(t,e){var n=[];return B(t,(function(t){e(t)&&n.push(t)})),n}(e,(function(t){return 0!==t.search("utm")}))).length>0&&(t+="?"+e.join("&")),t+n}function j(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!!i):t.attachEvent&&t.attachEvent("on"+e,n)}function D(t,e){var n=o;n.removeEventListener?n.removeEventListener(t,e,a):n.detachEvent&&n.detachEvent("on"+t,e)}function M(t){return"number"==typeof t}function T(t){return"string"==typeof t}function N(t){return"[object Array]"===Object.prototype.toString.call(t)}function F(t){return t=new Date(+t),Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())}function P(){return(new Date).getTime()}function q(){return"http:"===o.location.protocol?"http:":"https:"}function B(t,e){if((!!t&&t.constructor===Object)===n){for(var i in t)if(t.hasOwnProperty(i)&&e(t[i],i)===a)break}else{i=0;for(var o=t.length;i<o&&e(t[i],i)!==a;i++);}}function H(t,e){for(var n=0,i=t.length;n<i;n++)if(e(t[n]))return n;return-1}function Y(t){if(t){var e=[];c(new s,t,e),t=encodeURIComponent(e.join(""))}else t="";return t}function G(){if(U!==e)return U;var t=o.navigator.userAgent;return U=t.indexOf("AppleWebKit")>0&&t.indexOf("FBIOS")>0}function z(){}var $=o.setInterval,J=o.clearInterval,Q=o.setTimeout,X=o.clearTimeout;function Z(t){switch(t){case e:return"undefined";case"":return"empty";default:return t}}function K(){for(var t=document.domain,e=t.split("."),n="https:"===window.location.protocol?"; Secure":"",i=0;i<e.length-1&&-1==document.cookie.indexOf("_cbt=_cbt");)t=e.slice(-1-++i).join("."),document.cookie="_cbt=_cbt; domain="+t+n;return document.cookie="_cbt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+t+n,t}var V=n;function W(t,e,n){return n?t:e&&e[Ht]&&V&&(n=K(),e[Ht]!==n)?t+"_"+y().split(".")[0]:t}function tt(t){var e={};return t&&("?"==t.charAt(0)&&(t=t.substring(1)),B((t=t.replace(/\+/g," ")).split(/[&;]/g),(function(t){t=t.split("="),e[decodeURIComponent(t[0])]=decodeURIComponent(t[1])}))),e}function et(t,e){var n="";if(i=o.location.href.match(/[^?]+[?]([^#]+).*/)){var i,a=e||t;(i=tt(i[1]))[a]&&(n=i[a])}return encodeURIComponent(n)}function nt(t,e){return e?"http:"===t&&"80"===e||"https:"===t&&"443"===e:n}function it(t){var e={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!t)return e;var n=document.createElement("a"),i=o.location;if(!/^https?:/.test(t)&&0!==t.indexOf("javascript:")&&t.indexOf("app:")<0)if(0===t.indexOf("//"))t=i.protocol+t;else if(0===t.indexOf("/")){var a=nt(i.protocol,i.port)?"":i.port;t=i.protocol+"//"+i.hostname+(a?":"+a:"")+t}else{var r=(a=document.baseURI||i.href).indexOf("?");-1===r&&(r=a.indexOf("#")),-1===r&&(r=a.length),t=-1===(r=a.lastIndexOf("/",r))?"/"+t:a.substr(0,r)+"/"+t}return n.href=t,e.hostname=n.hostname,e.pathname=n.pathname,e.search=n.search,e.protocol=n.protocol,e.port=n.port,e.hash=n.hash,"/"!==e.pathname.charAt(0)&&(e.pathname="/"+e.pathname),""===e.hostname&&(e.hostname=i.hostname),""===e.protocol&&(e.protocol=i.protocol),"javascript:"===e.protocol&&(e.pathname="",e.hostname="",e.port="",e.hash=""),(nt(e.protocol,e.port)||"0"===e.port)&&(e.port=""),e}function at(t){var e=t.protocol;return t.hostname&&(e+="//"+t.hostname,t.port&&(e+=":"+t.port)),e+t.pathname+t.search+t.hash}function ot(t,e,n,i){if(e=e||"*","querySelectorAll"in(n=n||document))return n.querySelectorAll(e+"["+t+(i?'="'+i+'"':"")+"]");for(var a=[],o=(n=(e=n.getElementsByTagName(e)).length,"");n--;)(o=e[n].getAttribute(t))&&(!i||o===i)&&a.push(e[n]);return a}function rt(t,n,i){var o;(i=i||"",t===e)?t=a:((o=""===i&&t.getAttribute(n))||(o=t.getAttribute(n))&&(o=t.getAttribute(n)===i),t=o?t:t===document.body?a:rt(t.parentNode,n,i));return t}function st(t,e,n){return t="page"+t+"Offset",e="scroll"+e,n&&(n=ot("data-cb-scroll-element"))&&n.length?n[0][e]:M(o[t])?o[t]:document.body&&document.body[e]?document.body[e]:document.documentElement[e]?document.documentElement[e]:0}function ct(t){var e=(e=document)["CSS1Compat"===e.compatMode?"documentElement":"body"]["client"+t]||0;return window["inner"+t]&&(e=Math.min(window["inner"+t],e)),e}function ht(t){return t="scroll"+t,Math.max(document.body[t],document.documentElement[t])||0}function ut(t,e,n){if(t.ownerDocument||(t=t.correspondingUseElement),!t||!t.ownerDocument)return i;var a=t.ownerDocument.documentElement,o=0,r=v(n)?n+1:-1;for(T(e)?(e=e.toLowerCase(),n=function(t){return(t=t.nodeName)&&t.toLowerCase()===e}):n=e;t&&t!==a&&o!==r;){if(n(t))return t;t=t.parentNode,o++}return i}function ft(t){return t.nodeName&&"a"===t.nodeName.toLowerCase()&&(!t.namespaceURI||"http://www.w3.org/1999/xhtml"===t.namespaceURI)}function pt(t){return(t=t||window.event)?ut(t.target||t.srcElement,ft,10):i}function lt(t,e){var n=document.createElement(t);return B(e,(function(t,e){n.setAttribute(e,t)})),n}function dt(){return"complete"===o.document.readyState||"loading"!==o.document.readyState&&!o.document.documentElement.doScroll}function mt(t){function e(){(o.document.addEventListener||"load"===o.event.type||"complete"===o.document.readyState)&&(o.document.addEventListener?(o.document.removeEventListener("DOMContentLoaded",e,a),o.removeEventListener("load",e,a)):(o.document.detachEvent("onreadystatechange",e),o.detachEvent("onload",e)),t())}dt()?t():o.document.addEventListener?(o.document.addEventListener("DOMContentLoaded",e,a),o.addEventListener("load",e,a)):(o.document.attachEvent("onreadystatechange",e),o.attachEvent("onload",e))}function bt(){this.G={},this.ab=1}function vt(t,e,n,i){return t.ab++,t.G[e]=t.G[e]||{},t.G[e][t.ab]=[n,i],t.ab}function gt(t,i){if(T(i))t.G[i]=e,delete t.G[i];else if(M(i)){var o=n;B(t.G,(function(t){return B(t,(function(n,r){if(parseInt(r,10)===i)return t[r]=e,delete t[r],o=a})),o}))}}bt.prototype.Q=function(t,e){if(this.G[t]){var n=arguments.length>1?Array.prototype.slice.call(arguments,1):[];B(this.G[t],(function(t){var e;t&&2===t.length&&(e=t[0],t=t[1],e.apply(t,n))}))}},bt.prototype.addEventListener=function(t,e){var n=vt(this,t,e);e._cbEventId=n},bt.prototype.removeEventListener=function(t,e){this.G[t]&&this.G[t][e._cbEventId]&&this.G[t][e._cbEventId][0]===e&&gt(this,e._cbEventId)};var yt,_t,wt,Ct,It,Et,kt,xt=new bt,St={};St.D=function(){St.La?St.wa("pageload"):(St.Db=[{target:o,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:o,event:"resize"},{target:document.body,event:"mousedown"}],St.Da=i,St.aa=i,St.Ka={},St.pb={},B(St.Db,(function(t){var e=t.event;j(t.target,e,(function(t){St.wa.call(St,e,t)}))})),vt(xt,"f",(function(){St.wa("focus")})),St.wa("pageload"),j(document.body,"click",(function(t){(t=pt(t))&&xt.Q("c",t)}),n),j(document.body,"contextmenu",(function(t){(t=pt(t))&&xt.Q("r",t)})),St.La=n)},St.Ib=function(){var t=St.pb.keydown;return t===e?a:(t=P()-t)<=15e3&&t>=0},St.eb=100,St.wa=function(t,e){if(e||(e=window.event),e&&"keydown"===t){var n=e.keyCode?e.keyCode:e.which;(32===n||n>36&&n<41)&&(t="scroll")}St.tc(t),St.Da===i?St.wb(t):(!St.aa||p[St.aa]<p[t])&&(St.aa=t)},St.tc=function(t){St.pb[t]=P()},St.wb=function(t){St.Da=Q(St.Nb,St.eb),xt.Q("a"),St.Ka[t]!==i&&X(St.Ka[t]),St.jc(t)},St.jc=function(t){var e=St.Ka;e[t]=Q((function(){X(e[t]),delete e[t];var i=a;B(e,(function(){return i=n,a})),i||xt.Q("i")}),p[t]+St.eb)},St.Nb=function(){X(St.Da),St.Da=i,St.aa&&(St.wb(St.aa),St.aa=i)},B(["","moz","o","ms","webkit"],(function(t){if(Et=(t+"Hidden").charAt(0).toLowerCase()+(t+"Hidden").slice(1),"boolean"==typeof o.document[Et])return kt=t,a})),kt!==e&&(Ct=Et,It=(kt+"VisibilityState").charAt(0).toLowerCase()+(kt+"VisibilityState").slice(1),wt=kt+"visibilitychange");var Ut=a;function Rt(){Ut=It&&"prerender"===o.document[It]?n:a}function At(){_t=n,xt.Q("f")}function Lt(){_t=a,xt.Q("b")}function Ot(t,e,n){o.addEventListener?o.addEventListener(t,n,a):o.document.attachEvent&&o.document.attachEvent(e,n)}function jt(){var t=n;!G()&&o.document.hasFocus&&(t=o.document.hasFocus());var e=a;return Ct&&(e=o.document[Ct]),t&&!e}function Dt(){jt()?At():Lt()}function Mt(){this.a=o._sf_async_config||{},this.kb=b(this.sb,this)}Mt.prototype.D=function(){this.ka=0},Mt.prototype.sb=function(){},Mt.prototype.Aa=function(t){if(!Ut){var e,n=this.kb;e=new Image(1,1),n&&(e.onerror=n),e.src=t}},Mt.prototype.pa=function(){this.kb=i};var Tt="path",Nt="domain",Ft="useCanonical",Pt="useCanonicalDomain",qt="title",Bt="virtualReferrer",Ht="cookieDomain";function Yt(t,e,n){t[e]=t[e]||n}function Gt(t,e){for(var n=o[t]||[];n.length;)e(n.shift());o[t]={push:e}}function zt(t){B(document.getElementsByTagName("script"),(function(e){if("string"==typeof e.src&&e.src.match(/chartbeat.js/))return e=tt(e.src.split("?")[1]),Yt(t,"uid",e.uid),Yt(t,Nt,e.domain),a}))}function $t(t,e){return t[e]?encodeURIComponent(t[e]):""}function Jt(t){if(Qt(t))return"";t=t[Ht];var e=K();return t&&t!==y()&&t!==e&&(V=a,o.console.warn("Invalid cookieDomain (must be set to current domain or root domain), defaulting to root domain.")),t&&V?t:e}function Qt(t){return t&&t.noCookies?n:a}var Xt={Lb:function(t,e){try{Xt.create("_cb_test","1",1,t,e);var n=Xt.q("_cb_test");return Xt.remove("_cb_test",t,e),"1"===n}catch(t){return a}},q:function(t,e){var n=o._sf_async_config;if(Qt(n))return"";t=W(t,n,e)+"=";var i="";return B(document.cookie.split(";"),(function(e){for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t))return i=e.substring(t.length,e.length),a})),i},create:function(t,e,n,i,a,r){var s=o._sf_async_config;return Qt(s)?"":(t=W(t,s,r),(r=new Date).setTime(P()+1e3*n),t=t+"="+e+"; expires="+r.toUTCString()+"; path="+i+("https:"===window.location.protocol?"; Secure":"")+(a?"; domain="+a:""),document.cookie=t)},remove:function(t,e,n,i){return Xt.q(t,i)?Xt.create(t,"",-86400,e,n,i):""}},Zt={};function Kt(t,e,n,o){this.za=t||"",this.S=e||"/",this.hb=o||{},this.da=(this.Oa=Qt(this.hb))?"":n||K(),this.Ob=Zt.B()!==i||Xt.Lb(this.S,this.da),this.zb=a}function Vt(t){var e=i;if(t&&(e=(e=te())?ae(e.pathname)+oe(e.search)+e.hash:e))return e;var n=o.location,a=(e=ae(n.pathname),t=(t=n.search||"").replace(/PHPSESSID=[^&]+/,""),/&utm_[^=]+=[^&]+/gi);return(n=a.exec(n.search))&&(t=t.replace(a,"")),(n=(a=/\?utm_[^=]+=[^&]+(.*)/i).exec(t))&&(t=t.replace(a,""!=n[1]?"?"+n[1]:"")),e+(t=ae(t=oe(t)))}function Wt(t){return t&&(t=(t=te())?t.hostname:t)?t:o.location.hostname}function te(){var t=function(){var t=i;return B(document.getElementsByTagName("link"),(function(e){if("canonical"==e.rel)return t=e,a})),t}();return t?it(t.href):t}Zt.B=function(t){var n=o._sf_async_config;if(!t&&n&&n.noCookies)return i;if(Zt.B.Ha!==e)return Zt.B.Ha;var a,r;t=P()+"";try{if((r=o.localStorage).setItem("_cb_ls_test",t),a=r.getItem("_cb_ls_test")===t,r.removeItem("_cb_ls_test"),a)return Zt.B.Ha=r}catch(t){}return Zt.B.Ha=i},Zt.q=function(t){var e=Zt.B();if(!e)return"";var n=e.getItem(t+"_expires");return n&&(n=+n,!isNaN(n)&&P()>n)?(Zt.remove(t),""):e.getItem(t)||""},Zt.create=function(t,e,n){var i=Zt.B();if(i){var a=new Date;a.setTime(P()+1e3*n);try{i.setItem(t,e),i.setItem(t+"_expires",a.getTime())}catch(t){}}},Zt.remove=function(t){var e=Zt.B();e&&(e.removeItem(t),e.removeItem(t+"_expires"))},(t=Kt.prototype).isSupported=function(){return this.Ob},t.create=function(t,e,n,i){this.Oa||(t=i?t:this.za+t,(Zt.B()?Zt:Xt).create(t,e,n,this.S,this.da),Zt.B()&&Xt.create(t,e,n,this.S,this.da))},t.update=function(t,e,i,a,o,r,s){if(t=a?t:this.za+t,o=T(o)?o:"::",a=(a=this.q(t,n))?a.split(o):[],s&&a.length){var c=s(e),h=H(a,(function(t){return s(t)===c}));-1!==h&&a.splice(h,1)}for(a.push(e),M(r)&&a.length>r&&a.splice(0,a.length-r);a.length>1&&a.join(o).length>4e3;)a.shift();this.create(t,a.join(o),i,n)},t.q=function(t,e){if(this.Oa)return"";t=e?t:this.za+t;var i=(Zt.B()?Zt:Xt).q(t);if(!i&&Zt.B()&&(i=Xt.q(t)),i){this.remove(t,e,"",n);var o=Xt.q(t),r=this.hb[Ht]&&V,s=y();r=r&&s!==K();if(i===o&&!r)return o;if((s="_chartbeat2"===t&&o&&+o.split(".")[2]<1647357868e3?n:a)&&Xt.remove(t,this.S,this.da),r)return o?s?i:o:i!==(o=Xt.q(t,n))?i:"";if(o)return s?i:o}return i},t.remove=function(t,e,n,i){""!==n&&(n=this.da),t=e?t:this.za+t,(Zt.B()?Zt:Xt).remove(t,this.S,n),Zt.B()&&Xt.remove(t,this.S,n,i)};for(var ee={},ne=0;ne<81;ne++)ee["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(ne)]=n;function ie(t,e){if("%"===t)return"%25";var n=parseInt(e,16);return ee[n]?String.fromCharCode(n):"%"+e.toUpperCase()}function ae(t){return T(t)?(t=(t=t.replace(/%([0-9A-Fa-f]{2})?/g,ie)).replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)).replace(/[A-Za-z0-9-_.'+]+(@|%40)\w+([-.]\w+)*\.\w+([-.]\w+)*/g,""):t}function oe(t){var e="fbclid,gclid,gbraid,wbraid,msclkid,lcid,_gl,_ga,pure360.trackingid,cb_rec".split(","),n="";if(t.length>1){"?"===t[0]&&(t=t.replace("?","")),"&"===t[0]&&(t=t.replace("&",""));t=t.split("&");for(var i=0;i<t.length;i++){var a=t[i].split("=");a[0].length&&-1===e.indexOf(a[0].toLowerCase())&&(n+=n.length?"&":"?",n+=t[i])}}return n}function re(t){if(t){var e=t.split("?");return e.length>1?(t=oe(e[1]))&&t.length?ae(e[0]+t):ae(e[0]):ae(t)}return i}function se(t,e){var n=ce();return v(e)&&!v(n[t])?e:n[t]}function ce(){return v(o._cb_shared)||(o._cb_shared={}),o._cb_shared}var he={Fb:{IDLE:0,Ec:1,xc:2,Eb:3},J:0};function ue(t,n){this.Ja=t||e,this.Qa=n||e,this.ga=this.ca=0,this.$b=b(this.ac,this),this.yb=this.ba=i}function fe(){Mt.call(this),this.T=[],this.k=new Kt(this.pc,this.a.cookiePath||"/",Jt(this.a),this.a),this.k.remove("_SUPERFLY_nosample"),this.F=new ue,this.Sa=b(this.ya,this),j(o,"pagehide",this.Sa),this.ua=a,function(t){mt((function(){!function(t){if(Rt(),Ut){var e=a,i=function(){e||(Rt(),Ut||(e=n,t(),o.window.setTimeout((function(){o.document.removeEventListener(wt,i,a)}),100)))};o.document.addEventListener(wt,i,a)}else t()}(t)}))}(b(this.D,this))}function pe(t){return Math.floor(st("Y","Top",!!t.a.scrollElement))}function le(t){var e=(e=t.X)?Math.min(2*e,16):1;t.X=e}function de(t){return t.a[Bt]?n:me(t)?a:-1!=(t=document.referrer.indexOf("://"+o.location.hostname+"/"))&&t<9}function me(t){var e=t.a.referrerOverrideQueryParam,n="";return B(window.location.search.substr(1).split("&"),(function(t){if(2==(t=t.split("=")).length&&t[0]==e&&t[1])return n=decodeURIComponent(t[1]).replace(/\+/g," "),a})),n&&-1==n.indexOf("::")&&(n="external::"+n),n}function be(t){if(!(t=t.a[Bt]||me(t))&&(t=document.referrer||"")&&!/^(android-)?app:/.test(t)){var e=it(t);"http:"!==e.protocol&&"https:"!==e.protocol||(e.pathname=ae(e.pathname),t=at(e))}return encodeURIComponent(t)}function ve(t){return t=t.a[qt].slice(0,100),encodeURIComponent(t)}function ge(t){return function(t){var e=o.navigator,n=o.window.screen,i=[e.userAgent,e.platform,(new Date).getTimezoneOffset(),n.width+n.height+n.colorDepth];return B(e.plugins,(function(t){i.push(t.name+t.description+t.filename+t[0].type)})),e=o.performance,(i=i.concat([e&&e.now?e.now():"",document.title,o.location.href,P(),l()])).concat(t||[]).join()}(t=[be(t),ht("Width"),ht("Height")])}function ye(t){return"null"===(t=t.k.q("_cb_svref",n)||be(t)||"null")&&(t=""),t.substr(0,128).replace(/%.?$/,"")}function _e(t){return(t=t.match(/^https?:\/\/([^\/]*)/))?t[1]:i}function we(){if(!(e=o.performance&&o.performance.timing)||0==e.navigationStart)return-1;var t=e.navigationStart,e=e.loadEventStart;return M(t)&&t?M(e)&&e>t?e-t:P()-t:-1}function Ce(t,e){var n,a,r={};return o.getComputedStyle?n=o.getComputedStyle(t,i):t.currentStyle?a="currentStyle":t.style&&(a="style"),B(e,(function(e){r[e]=n?n[e]||n.getPropertyValue(e):t[a][e]})),r}he.D=function(){he.La||(vt(xt,"a",he.Ub,he),vt(xt,"i",he.Xb,he),vt(xt,"f",he.Wb,he),vt(xt,"b",he.Vb,he),he.La=n)},he.Sb=function(){return he.J},he.Ub=function(){1===he.J?he.P(3):0===he.J&&he.P(2)},he.Xb=function(){3===he.J?he.P(1):2===he.J&&he.P(0)},he.Wb=function(){(0===he.J||2===he.J)&&he.P(3)},he.Vb=function(){3===he.J?he.P(2):1===he.J&&he.P(0)},he.P=function(t){he.J=t,xt.Q("s",t)},(t=ue.prototype).D=function(){this.ga=this.ca=0,this.ba=i,this.yb=vt(xt,"s",this.nb,this),this.nb(he.Sb())},t.nb=function(t){J(this.ba),this.ba=i,t===he.Fb.Eb&&(this.ba=$(this.$b,1e3))},t.ac=function(){(this.Ja===e||this.Ja())&&(this.ca++,this.ga++,this.Qa&&this.Qa())},t.terminate=function(){J(this.ba),this.ba=i,gt(xt,this.yb)},t.pa=function(){this.terminate(),this.Qa=this.Ja=e},r(fe,Mt),(t=fe.prototype).Xa=n,t.Ua=a,t.D=function(){if(fe.M.D.call(this),this.sa=this.X=0,this.la=P(),this.Wa=d(ge(this)),this.Va=n,this.Ma=72e5,this.Xa){var t=+this.a.sessionLength;isNaN(t)||(this.Ma=6e4*t)}if(!(t=se("d"))){t=[];(e=this.k.q("_chartbeat2",n)).length>0&&(t=e.split(".")),t.length>6&&(t=[]);var e=P(),r=this.k.q("_cb",n);r.length>0?t[1]=t[1]||e:r=t[0],t[0]="";var s=e-+(t[1]||0),c=e-+(t[2]||0);ce().n=r&&s>18e5&&c<2592e6?0:1;s=t[4];var h=parseInt(t[5],10)||0;if(!(c=c>18e5))if(de(this))c=a;else{var u;c=be(this),c=_e(c=decodeURIComponent(c))||c;u=ye(this),c=c!==(u=_e(u=decodeURIComponent(u))||u)}if(!s||c?(s=d(ge(this)),t[4]=s,h=1,this.k.remove("_cb_svref",n)):h+=1,t[5]=h,h="1",c=t&&+t[2],s=t&&t[3],t&&c&&s)if(h=Math.abs((F(e)-F(c))/864e5)){for(h=Math.min(h,16)-1,c="";h--;)c+=0;h=(s+c+"1").slice(-16)}else h=s;s=h,r||(r=this.a.utoken||d(ge(this),3),t[1]=e),t[2]=e,t[3]=s,this.a.utoken=this.na,this.k.create("_cb",r,34128e3,n),this.k.create("_chartbeat2",t.join("."),34128e3,n),t[0]=r,ce().d=t}var f;this.Hc=t.join("."),r=+t[1],s=+t[2],(e=t[3])&&r&&s&&(f=(Math.min((Math.abs((F(s)-F(r))/864e5)||0)+1,16,e.length)-1).toString(16),f+=("0000"+parseInt(e,2).toString(16)).slice(-4)),this.mb=f,this.dc=se("n",1),this.na=t[0],this.oc=t[4],this.lc=t[5],this.mc=ye(this),this.k.create("_cb_svref",ye(this)||"null",1800,n),this.F.D(),he.D(),St.D(),yt||(_t=jt(),wt&&o.document.addEventListener&&o.document.addEventListener(wt,Dt,a),Ot("focus","onfocusin",At),Ot("blur","onfocusout",Lt),_t&&At(),yt=n),this.ha=0,this.Hb=vt(xt,"a",this.fc,this),this.Ua=n,this.Ra&&(Q(this.Ra,0),this.Ra=i)},t.Ea=function(){this.k.q("_SUPERFLY_lockout")||(this.Ua?dt()||this.ua?this.$a():(this.xa=b(this.$a,this),j(o,"load",this.xa)):this.Ra=b(this.Ea,this))},t.$a=function(){this.Ta=we(),St.D();var t=b(this.ia,this);this.ob=$(t,15e3),this.ia()},t.ia=function(){var t=this.F.ga;t=this.a.reading&&+this.a.reading||t>0;this.sa<this.X&&!t||G()&&!t?this.sa++:(t?this.X=0:le(this),this.sa=0,this.T.push(0),this.T.length>18&&this.T.shift(),this.Xa&&P()-this.la>=this.Ma?this.terminate():this.Z())},t.sb=function(){this.T.push(1);var t=0;B(this.T,(function(e){t+=e})),t<3?(this.Va=n,le(this)):(this.terminate(),this.k.create("_SUPERFLY_lockout","1",600))},t.ya=function(){},t.fc=function(){var t=pe(this);this.ha=Math.max(this.ha,t)},t.qa=function(){this.ya(),this.terminate()},t.Ba=function(){this.ua=n,this.Ua=a,this.D(),this.Ea()},t.terminate=function(){this.F.terminate(),gt(xt,this.Hb),this.xa!==e&&D("load",this.xa),J(this.ob),ce().d=e,ce().n=e},t.pa=function(){this.terminate(),D("pagehide",this.Sa),this.Sa=this.xa=this.k=this.T=this.a=i,this.F.pa(),this.F=i,fe.M.pa.call(this)};var Ie=/matrix(3d)?\((.*)\)/;function Ee(t){var e={x:0,y:0};if(!T(t=Ce(t,["transform"]).transform))return e;var n=t.match(Ie);if(!n)return e;var i;t=n[2].split(", ");return v(n[1])?(n=12,i=13):(n=4,i=5),e.x=parseInt(t[n],10),e.y=parseInt(t[i],10),e}function ke(t){var n,r;if(!(h=Xt.q("_chartbeat6")))return i;if(1===(h=h.split("::")).length)n=h[0].split(","),r=0;else{var s,c=at(u=function(){var t;return(t=it(t=(t=o.location.href).replace(/-{2,}/g,"-"))).pathname=ae(t.pathname),t}());B(h,(function(t,i){var o=t.split(","),h=function(t,e){if(t===e)return 0;if(0===t.length)return e.length;if(0===e.length)return t.length;for(var n=[],i=0,a=e.length;i<=a;i++)n[i]=[i];for(var o=0,r=t.length;o<=r;o++)n[0][o]=o;var s,c,h;for(i=1;i<=a;i++)for(o=1;o<=r;o++)c=o-1,h=n[s=i-1][c],e.charAt(s)==t.charAt(c)?n[i][o]=h:(c=n[i][c]+1,s=n[s][o]+1,h+=2,n[i][o]=Math.min(c,s,h));return n[e.length][t.length]}(c,decodeURIComponent(o[0]));if(0===h)return n=o,r=i,a;(s===e||h<s)&&(s=h,n=o,r=i)}))}h.splice(r,1),Xt.create("_chartbeat6",h.join("::"),60,t.path?t.path:"/",t.domain?t.domain:"");t=[];var h=decodeURIComponent(n[0]),u=decodeURIComponent(n[1]),f=n[2];n.splice(0,3);for(var p=n.length/3,l=0;l<p;l++){var d=3*l+2;t.push({Fc:h,origin:u,N:f,$:d<n.length?n[d]:"",Pb:n[3*l],uc:n[3*l+1]})}return t}function xe(t){var e=t.topStorageDomain,i=(t=t[Nt],o.location.hostname);return e||(function(t,e){if(t===e)return n;for(var i=e.split("."),o=t.split(".");i.length;){if(0===o.length)return a;if(i.pop()!==o.pop())return a}return n}(i,t)?t:i.replace(/^www\./,""))}function Se(t,e,n,i,a){this.Rb=t,this.Qb=e,this.vc=n,this.N=i,this.$=a}function Ue(t,e){for(var n,a,o,r,s,c,h=e||document.documentElement,u=[],f=i,p=t;p&&p!==h;){if(n=p.nodeName.toLowerCase(),a=(f=p).nodeName,(p=p.parentNode)&&p!==document.documentElement)for(r=0,s=0,c=(o=p.children).length;s<c;s++){if(f===o[s]){n+="["+(1+s-r)+"]";break}o[s].nodeName!==a&&r++}u.unshift(n)}return u.join("/")}function Re(){this.pc="_t_",this.jb=this.xb=z,fe.call(this)}function Ae(t){var e=t.a;return q()+"//"+e.mabServer+"/ping/mab?h="+encodeURIComponent(e[Nt])+"&p="+encodeURIComponent(e[Tt])+"&d="+encodeURIComponent(t.fa)+"&u="+t.na+"&c="+Math.round((P()-t.la)/600)/100+"&V=140"}function Le(t,e){var n=Ae(t),a=e.status,o=e.data;if("s"==a&&o!==i){var r=b(t.Aa,t);o.Ya&&o.Ya.constructor===Object&&B(o.Ya,(function(t,e){r(n+"&x="+e+"&v="+t.gb+"&ml="+o.N+"&sl="+t.$+"&e=-1")})),N(o.qb)?B(o.qb,(function(t){r(n+"&me=3&ml="+o.N+"&x="+t)})):N(o.cc)&&B(o.cc,(function(t){r(n+"&me=5&ml="+o.N+"&x="+t)}))}else"e"==a&&t.Aa(n+"&me="+e.code)}if(r(Re,fe),(t=Re.prototype).D=function(){Re.M.D.call(this),zt(this.a);var t=!!this.a[Ft],e=Wt(!!this.a[Pt]&&t);Yt(this.a,"mabServer","mabping.chartbeat.net"),Yt(this.a,qt,document.title),Yt(this.a,Nt,e),this.a[Tt]=this.a[Tt]?re(this.a[Tt]):Vt(t),this.fa=g(e),this.a[Nt]=g(this.a[Nt]),this.sc=xe(this.a),this.ea=this.ta=a,this.lb=[];var o=this;(t=ke({domain:"."+this.sc,path:this.a.cookiePath||"/"}))!==i&&(this.ta=n,B(t,(function(t){o.lb.push(new Se(t.origin,t.Pb,t.uc,t.N,t.$))}))),this.rb=0,this.Ca=i,function(t){for(var e=se("m")||[];e.length;)t(e.shift());t={push:t},ce().m=t}(b(this.Zb,this))},t.Z=function(){var t,e=this.F.ca,i=Ae(this),a=this;this.ta&&B(this.lb,(function(n){t=i+"&x="+n.Qb+"&v="+n.vc+"&ml="+n.N+"&xo="+n.Rb+"&e="+e+"&sl="+n.$,a.Aa(t)})),!this.ea&&this.Ca&&Le(this,this.Ca),this.ea=n},t.$a=function(){if(this.Ta=we(),St.D(),this.ta){var t=b(this.ia,this);this.ob=$(t,500)}this.ia()},t.ia=function(){var t;this.ea?((t=this.F.ca)-15*this.rb>=15&&(this.Z(),this.rb+=1),t>=45&&this.terminate()):this.Z()},t.ya=function(){},t.qc=function(t){t=function(t){var e=t.d,n=i;if(e!==i){var a={};e.s&&B(e.s,(function(t,e){a[e]="string"==typeof t?{gb:t,$:""}:{gb:t.chosenVariant,$:t.specificLocation}})),n={Ya:a,N:e.g,qb:e.m}}return{status:t.s,data:n,code:t.c,message:t.m}}(t),this.ea?Le(this,t):this.Ca=t},t.Zb=function(t,e){for(var n=0,i=arguments.length;n<i;n++){var a=(t=arguments[n]).shift();"t"===a?this.qc.apply(this,t):"v"===a?this.vb.apply(this,t):"sv"===a?this.kc.apply(this,t):"ev"===a&&this.vb.apply(this,t)}},t.qa=function(){this.jb(),Re.M.qa.call(this)},t.Ba=function(){ce().m=[],this.xb(),Re.M.Ba.call(this)},t.kc=function(t){this.xb=t},t.vb=function(t){this.jb=t},t.terminate=function(){this.Gc=e,this.Ca=i,this.ea=this.ta=e,Re.M.terminate.call(this)},Jt(o._sf_async_config||{}),!Xt.q("cb_optout")&&!o.pSUPERFLY_mab){var Oe=new Re,je={};je.evps=b(Oe.qa,Oe),je.svps=b(Oe.Ba,Oe),o.pSUPERFLY_mab=je,Oe.Ea()}var De,Me,Te;function Ne(t){if("https://chartbeat.com"===t.origin&&0===(t=String(t.data)).indexOf("_cb_hud_version=")){var n=t.substr(16);Fe(),"NONE"!==n&&(t="https://static.chartbeat.com/js/inpage.js","OLD"!==(n=0===n.indexOf("HUD2.")?n.substr(5):"OLD")&&(t="https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-"+n+".js"),(n=v(e)?e:{}).src=t,(t=lt("script",n)).setAttribute("type","text/javascript"),n=document.head||document.getElementsByTagName("head")[0],v(e)?e.appendChild(t):n&&n.appendChild(t))}}function Fe(){X(Me),Me=e,D("message",Ne),Te&&Te.parentNode&&Te.parentNode.removeChild(Te),Te=e}function Pe(){var t=o._sf_async_config&&o._sf_async_config.domain;if(t&&!De){De=n,t="https://chartbeat.com/publishing/hud2/versioninfo/?host="+encodeURIComponent(t),j(o,"message",Ne),Me=Q(Fe,1e4);var i=v(e)?e:{};i.src=t,(t=lt("iframe",i)).style.display="none",v(e)?e.appendChild(t):document.body&&document.body.appendChild(t),Te=t}}function qe(){var t=Zt.B(n);return t?(t.setItem("_cb_ip","1"),t.removeItem("_cb_hud_collapsed"),n):a}function Be(t,n){this.Cb=n,this.Bb=t[Ft],this.Ab=t[Pt],this.O=t[Tt],this.rc=t[qt],this.ib=t[Nt],this.wc=t[Bt],this.fb=(this.H=te())?this.H.hostname:"",this.oa=this.H?ae(this.H.pathname)+this.H.search+this.H.hash:"",this.ub=Vt(a),this.ic=Wt(a);var o,r,s=ot("property","meta",i,"og:url");this.ja=(this.Y=s&&s.length?it(s[0].content):i)?ae(this.Y.pathname)+this.Y.search+this.Y.hash:"",this.ec=this.Y?this.Y.hostname:"",this.Ia=document.title||"",(s=ot("property","meta",i,"og:title"))&&s.length&&(o=s[0].content),this.va=o,(o=ot("property","meta",i,"twitter:title"))&&o.length&&(r=o[0].content),this.ma=r,r=!!this.Bb,o=this.Bb!==e;s=!!this.Ab;var c,h=this.Ab!==e,u=!!this.H;c=(c=g(this.fb))===(p=g(this.ic));var f,p=!!this.ja,l=this.H?this.oa===this.ja:a,d=this.oa===this.ub;f=(f=this.oa)===(b=L(this.ub));var m,b=!!this.Ia,v=!!this.va,y=!!this.ma,_=this.Ia===this.va,w=this.ma?this.Ia===this.ma:a,C=this.va&&this.ma?this.va===this.ma:a,I=!!this.rc,E=!!this.O,k=this.O?"/"!==this.O.charAt(0):a,x=this.H?this.O===this.oa:a,S=this.ja?this.O===this.ja:a,U=this.H?this.ib===g(this.fb):a,R=this.ja?this.ib===g(this.ec):a,A=!!this.Cb,j=this.Cb?a:!!this.wc,D="https:"===q(),M=!!XMLHttpRequest;for(this.O?m=(m=O(this.O))!==L(m):m=a,r=[r,o,s,h,u,c,p,l,d,f,b,v,y,_,w,C,I,E,k,x,S,U,R,A,j,D,M,m],o=1,h=s=0;h<r.length;h++)s|=r[h]&&o,o<<=1;this.Mb=("00000000"+s.toString(16)).slice(-8)}function He(){"postMessage"in window&&j(o,"message",b(this.Yb,this)),fe.call(this),Gt("_cbq",b(this.tb,this))}r(He,fe),He.prototype.D=function(){He.M.D.call(this);var t=this.na;ce().u=t,t=this.Wa,ce().t=t,this.bc=new Be(this.a,this.ua),this.Ga=i,zt(this.a);t=!!this.a[Ft];var e=Wt(!!this.a[Pt]&&t);Yt(this.a,"pingServer","ping.chartbeat.net"),Yt(this.a,qt,document.title),Yt(this.a,Nt,e),this.a[Tt]=this.a[Tt]?re(this.a[Tt]):Vt(t),this.fa=g(e),this.a[Nt]=g(this.a[Nt]),this.Jb=vt(xt,"c",this.gc,this),this.Kb=vt(xt,"r",this.hc,this),this.U=i},He.prototype.Gb=function(t){this.Ga=t},He.prototype.ya=function(){this.k.update("_chartbeat4",["t="+this.Wa,"E="+this.F.ca,"x="+pe(this),"c="+Math.round((P()-this.la)/600)/100,"y="+ht("Height"),"w="+ct("Height")].join("&"),60,e,e,1)};var Ye="h,p,u,d,g,g0,g1,g5,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,sv,sr,sd,im".split(",");function Ge(t){return(t=it(t=t.replace(/-{2,}/g,"-"))).pathname=ae(t.pathname),t}function ze(t,i,r){if(t.Xa&&P()-t.la>=t.Ma)t.terminate();else if(0===(c=Ge(c=i.href||"")).protocol.indexOf("http")){var s=c.hostname!==o.location.hostname,c=at(c),h=ut(i,(function(t){return t.id})),u=Ue(i,h),f="";t.a.moduleAttribute&&(f=(f=(f=rt(i,t.a.moduleAttribute))?f.getAttribute(t.a.moduleAttribute):"").replace(/::/g,"-").substr(0,40)),h?(u&&(u="/"+u),u="*[@id='"+h.id+"']"+u,h=Ue(i)):h=u,u=d(u),h=d(h),r={left:(i=function(t,i,o){var r=t.offsetLeft,s=t.offsetTop;r+=(f=Ee(t)).x,s+=f.y;for(var c=a,h=o?0:Math.floor(st("X","Left",e)),u=o?0:Math.floor(st("Y","Top",e)),f=t.offsetParent;t&&t!==i&&t!==document.body;){if(t===f&&(f=Ee(t),r+=t.offsetLeft+f.x,s+=t.offsetTop+f.y,f=t.offsetParent),o||(r-=t.scrollLeft,s-=t.scrollTop),"fixed"===Ce(t,["position"]).position){c=n;break}t=t.parentElement}return o||(r-=i?i.scrollLeft:h,s-=i?i.scrollTop:u),c&&(r+=h,s+=u),{x:r,y:s}}(i,e,n)).x,top:i.y,path:t.a[Tt],href:c,cb:u,Fa:h,bb:"",Za:r,Pa:0,Tb:t.a[Nt],Na:f},t.Z(r),s||t.k.update("_chartbeat5",function(t){var e;return(e=(e=encodeURIComponent(t.bb)).replace(/-/g,"%2D")).length>512&&(e=""),[t.left,t.top,encodeURIComponent(t.path),encodeURIComponent(t.href),t.cb,e,t.Za,t.Fa,encodeURIComponent(t.Tb),t.Na].join("|")}(r),60,a,e,3,(function(t){return(t=t.split("|"))[2]+"|"+t[3]}))}}function $e(t){return[t.left,t.top,t.cb,encodeURIComponent(t.bb),t.Za,encodeURIComponent(t.href),t.Fa,t.Na].join("::")}if((t=He.prototype).Z=function(t){this.ka++;var r={};r.g=this.a.uid,r.g0=$t(this.a,"sections")||"No%20Section",r.g1=$t(this.a,"authors")||"No%20Author",r.g2=$t(this.a,"zone"),r.g3=$t(this.a,"sponsorName"),r.g4=$t(this.a,"type"),!this.a.noCookies&&this.k.isSupported()?r.n=this.dc:r.nc=1,r.c=Math.round((P()-this.la)/600)/100,r.E=this.F.ca;var s=pe(this);if(this.ha=Math.max(this.ha,s),r.x=s,r.m=this.ha,r.y=ht("Height"),r.o=ht("Width"),r.w=ct("Height"),r.b=this.Ta>0?this.Ta:"",this.mb&&!this.a.noCookies&&this.k.isSupported()&&(r.f=this.mb),r[""]=function(t){var e={};return B(t,(function(t,n){"_"==n.charAt(0)&&(e[n]=t)})),e}(this.a),r.t=this.Wa,r.V=140,r.tz=(new Date).getTimezoneOffset(),r.sn=this.ka,r.sv=this.oc,r.sr=this.mc,r.sd=this.lc,s=this.F.ga,r.h=encodeURIComponent(this.a[Nt]),r.p=encodeURIComponent(this.a[Tt]),r.u=this.na,r.d=encodeURIComponent(this.fa),r.j=Math.round(15e3*(this.X+2)/1e3),r.R=0,r.W=0,r.I=0,St.Ib()?r.W=1:this.a.reading&&+this.a.reading||s>0||r.c<.09?r.R=1:r.I=1,r.e=s,s=de(this),this.Va){this.Va=a,s&&(this.U=function(t){if(!(h=t.k.q("_chartbeat5")))return i;var r,s,c=h.split("::"),h=c.length,u=i,f=at(Ge(o.location.href));return B(c,(function(t,o){var c=t.split("|"),h=decodeURIComponent(c[3]);if(h){if(0===(h=function(t,e){if(t===e)return 0;var n=i;return B([S,A,w,I,k,L],(function(i,o){if(t=i(t),e=i(e),t===e)return n=o+1,a})),n}(f,h)))return r=c,u=o,a;if(h===i)return n;(s===e||h<s)&&(s=h,r=c,u=o)}})),u===i?i:(c.splice(u,1),t.k.create("_chartbeat5",c.join("::"),60),(t=r[5])?(t=t.replace(/%2D/g,"-"),t=decodeURIComponent(t)):t="",{left:r[0],top:r[1],path:decodeURIComponent(r[2]),href:decodeURIComponent(r[3]),cb:r[4]||"",bb:"",Fa:r.length>7?r[7]:"",Za:r.length>6?r[6]:"c",Pa:h,Na:r[9]?r[9]:""})}(this)),r.i=ve(this);var c=this.a.hudTrackable;c!==e&&(r.L=c?"1":"0")}s?(this.U?(r.v=encodeURIComponent(this.U.path),r.K=$e(this.U),this.U.Pa>1&&(r.l1=this.U.Pa)):r.v=be(this),this.ua&&(r.vp=1)):r.r=be(this),s=Z(r.v),ce().v=s,s=Z(r.r),ce().r=s,r.A=this.Ga?this.Ga:"",r._c=et("utm_campaign",this.a.campaignTag),r._m=et("utm_medium",this.a.mediumTag),r._x=et("utm_source",this.a.sourceTag),r._y=et("utm_content",this.a.contentTag),r._z=et("utm_term",this.a.termTag),r.im=this.bc.Mb,s=(c=this.a).idSync,m(c[Nt]).toString()!==[-2029634429,-1659526092,-2053164062,-1348054445,1670716250].toString()?s=s?Y(s):"":((c=window.OBR&&window.OBR.extern&&window.OBR.extern.pvId)&&((s=s||{}).obr=c),s=Y(s)),r._s=s,r.z=function(t){var e=[],n=t.k.q("_chartbeat4");return n&&(B(n.split("::"),(function(t){e.push(encodeURIComponent(t))})),t.k.remove("_chartbeat4")),e}(this),r.C=this.a.mobileApp?1:"",r.KK=t?$e(t):"",s=(t=this.k).zb,t.zb=a,r.l=s?1:"",this.F.ga=0,this.a.alias?r.PA=encodeURIComponent(this.a.alias):(t=Ge(o.location.href),r.PA=encodeURIComponent(at(t))),(t=o.location.href.match(/[^?]+[?]([^#]+).*/))&&((t=tt(t[1])).cb_rec&&(r.g5=encodeURIComponent(t.cb_rec))),this.Aa(q()+"//"+this.a.pingServer+"/ping?"+function(t){var e=[];return B(Ye,(function(n){var i=t[n];v(i)&&(N(i)?B(i,(function(t){e.push(n+"="+t)})):i&&i.constructor===Object?B(i,(function(t,n){e.push(n+"="+t)})):((i+"").length||"r"==n)&&e.push(n+"="+i))})),e.push("_"),e.join("&")}(r))},t.Yb=function(t){var e=(o=this.a).playerdomain||this.fa;if(w(t.origin)===w(e))if(T(e=t.data)&&0===e.indexOf("cbqpush::"))3==(t=e.split("::")).length&&(0===(t=t.slice(1))[0].indexOf("_")&&this.tb(t));else if("cbdata?"==e){e="&u="+se("u");var n="&t="+se("t"),i="&v="+se("v"),a="&r="+se("r"),o="domain="+encodeURIComponent(o[Nt])+"&uid="+encodeURIComponent(o.uid)+"&path="+encodeURIComponent(o[Tt])+"&title="+ve(this)+"&referrer="+be(this)+"&internal="+(de(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.fa)+e+n+i+a+"&utoken="+this.na;t.source.postMessage(o,"*")}},t.tb=function(t){var e=t[0];t=t[1];if("_demo"===e&&this.a._demo)this.a._demo=this.a._demo+"%2C"+t;else if(t!==this.a[e]&&(this.a[e]=t,this.X=0,this.ka>0&&!this.ra)){var n=this.ka,a=this;this.ra=Q((function(){a.ra=i,a.ka===n&&a.Z()}),1e3)}},t.gc=function(t){ze(this,t,"c")},t.hc=function(t){ze(this,t,"r")},t.terminate=function(){gt(xt,this.Jb),gt(xt,this.Kb),X(this.ra),this.ra=i,He.M.terminate.call(this)},!Xt.q("cb_optout")&&!o.pSUPERFLY){var Je=new He,Qe={};o.pSUPERFLY=Qe;var Xe=o.pSUPERFLY_mab,Ze=o.pSUPERFLY_pub,Ke=[];Xe&&Ke.push(Xe),Ze&&(Ke.push(Ze),Ze.addEngagedAdFilter&&(Qe.addEngagedAdFilter=Ze.addEngagedAdFilter),Ze.refreshAd&&(Qe.refreshAd=Ze.refreshAd),Ze.registerGptSlot&&(Qe.registerGptSlot=Ze.registerGptSlot),Gt("_cba",(function(t){t()}))),Qe.virtualPage=function(t,e){return function(n,i){if(!Ut){t();var a=o._sf_async_config,r="",s=w(s=a[Tt]);if(/^\//.test(s)&&(r=g(o.location.hostname)),a[Bt]=q()+"//"+r+s,T(n))a[Tt]=ae(n),i&&(a[qt]=i);else if(n&&n.constructor===Object){var c=["authors","sections",qt,Tt,Bt];B(n,(function(t,e){-1===H(c,(function(t){return t===e}))&&0!==e.indexOf("_")||(a[e]=e===Tt?ae(t):t)}))}e()}}}((function(){Je.qa(),B(Ke,(function(t){t.evps()}))}),(function(){Je.Ba(),B(Ke,(function(t){t.svps()}))})),Qe.activity=b(Je.Gb,Je),Je.Ea(),/^https?:\/\/([^/]*\.)?chartbeat\.com\/publishing\/hud2\/launch\//.exec(document.referrer)&&qe();var Ve=Zt.B(n);if(Ve&&Ve.getItem("_cb_ip")){var We=o.location;/^(.+[.])?chartbeat\.com$/.test(We.hostname)&&/^\/publishing\/(overlay|hud|mab)\//.test(We.pathname)||mt(Pe)}else j(o,"message",(function t(e){/[\/.]chartbeat\.com$/.test(e.origin)&&0==String(e.data).indexOf("_cb_ip")&&qe()&&(e.source.postMessage(1,e.origin),mt(Pe),D("message",t))}))}}();
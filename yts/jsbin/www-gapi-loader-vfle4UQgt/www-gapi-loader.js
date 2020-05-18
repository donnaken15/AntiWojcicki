(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ba(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var ca=ba(this);function da(a,b){if(b){for(var c=ca,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
var ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
da("Object.assign",function(a){return a||ea});
var k=this||self;function l(a,b){var c=a.split("."),d=k;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
;function fa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=n(d);if("array"==e||"object"==e&&"number"==typeof d.length){e=a.length||0;var f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function u(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<p.length;f++)c=p[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var A=window,B=document,ha=A.location;function ia(){}
var ja=/\[native code\]/;function E(a,b,c){return a[b]=a[b]||c}
function ka(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function F(){var a;if((a=Object.create)&&ja.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var G=E(A,"gapi",{});var H;H=E(A,"___jsl",F());E(H,"I",0);E(H,"hel",10);function I(){var a=ha.href;if(H.dpo)var b=H.h;else{b=H.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function la(a){var b=E(H,"PQ",[]);H.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function J(a){return E(E(H,"H",F()),a,F())}
;var M=E(H,"perf",F());E(M,"g",F());var ma=E(M,"i",F());E(M,"r",[]);F();F();function N(a,b,c){b&&0<b.length&&(b=O(b),c&&0<c.length&&(b+="___"+O(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=E(ma,"_p",F()),E(b,c,F())[a]=(new Date).getTime(),b=M.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function O(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Q=F(),R=[];function S(a){throw Error("Bad hint"+(a?": "+a:""));}
R.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?H[b]=E(H,b,[]).concat(c):E(H,b,c)}if(b=a.u)a=E(H,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var na=/^(\/[a-zA-Z0-9_\-]+)+$/,T=[/\/amp\//,/\/amp$/,/^\/amp$/],oa=/^[a-zA-Z0-9\-_\.,!]+$/,pa=/^gapi\.loaded_[0-9]+$/,qa=/^[a-zA-Z0-9,._-]+$/;function ra(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Q[f],h=null;g?h=g(e,b,c,d):S("no hint processor for: "+f);h||S("failed to generate load url");b=h;c=b.match(sa);(d=b.match(ta))&&1===d.length&&ua.test(b)&&c&&1===c.length||S("failed sanity: "+a);return h}
function va(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=wa(a);pa.test(c)||S("invalid_callback");b=U(b);d=d&&d.length?U(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.f?"/rs="+e(a.f):"",a.g?"/t="+e(a.g):"","/cb=",e(c)].join("")}
function wa(a){"/"!==a.charAt(0)&&S("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))S("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");na.test(b)||S("invalid_prefix");c=0;for(d=T.length;c<d;++c)T[c].test(b)&&S("invalid_prefix");c=V(a,"k",
!0);d=V(a,"am");e=V(a,"rs");a=V(a,"t");return{pathPrefix:b,version:c,a:d,f:e,g:a}}
function U(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");qa.test(e)&&b.push(e)}return b.join(",")}
function V(a,b,c){a=a[b];!a&&c&&S("missing: "+b);if(a){if(oa.test(a))return a;S("invalid: "+b)}return null}
var ua=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ta=/\/cb=/g,sa=/\/\//g;function xa(){var a=I();if(!a)throw Error("Bad hint");return a}
Q.m=function(a,b,c,d){(a=a[0])||S("missing_hint");return"https://apis.google.com"+va(a,b,c,d)};
var W=decodeURI("%73cript"),ya=/^[-+_0-9\/A-Za-z]+={0,2}$/;function za(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Aa(){var a=H.nonce;return void 0!==a?a&&a===String(a)&&a.match(ya)?a:H.nonce=null:B.querySelector?(a=B.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(ya)?H.nonce=a:H.nonce=null):null:null}
function Ba(a){if("loading"!=B.readyState)Ca(a);else{var b=Aa(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+W+' src="'+encodeURI(a)+'"'+c+"></"+W+">";B.write(a)}}
function Ca(a){var b=B.createElement(W);b.setAttribute("src",a);a=Aa();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=B.getElementsByTagName(W)[0])?a.parentNode.insertBefore(b,a):(B.head||B.body||B.documentElement).appendChild(b)}
function Da(a,b){var c=b&&b._c;if(c)for(var d=0;d<R.length;d++){var e=R[d][0],f=R[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ea(a,b,c){Fa(function(){var d=b===I()?E(G,"_",F()):F();d=E(J(b),"_",d);a(d)},c)}
function X(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Da(a,c);var d=a?a.split(":"):[],e=c.h||xa(),f=E(H,"ah",F());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var m=h.split(".");m=f[h]||f[m[1]&&"ns:"+m[0]||""]||e;var r=g.length&&g[g.length-1]||null,q=r;r&&r.hint==m||(q={hint:m,b:[]},g.push(q));q.b.push(h)}var v=g.length;if(1<v){var y=c.callback;y&&(c.callback=function(){0==--v&&y()})}for(;d=g.shift();)Ga(d.b,c,d.hint)}else Ga(d||[],c,e)}
function Ga(a,b,c){function d(z,C){if(v)return 0;A.clearTimeout(q);y.push.apply(y,t);var D=((G||{}).config||{}).update;D?D(f):f&&E(H,"cu",[]).push(f);if(C){N("me0",z,K);try{Ea(C,c,r)}finally{N("me1",z,K)}}return 1}
a=ka(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,r=void 0;"function"==typeof m&&(r=m);var q=null,v=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";m=E(J(c),"r",[]).sort();var y=E(J(c),"L",[]).sort(),K=[].concat(m);0<g&&(q=A.setTimeout(function(){v=!0;h()},g));
var t=za(a,y);if(t.length){t=za(a,m);var w=E(H,"CP",[]),x=w.length;w[x]=function(z){function C(){var L=w[x+1];L&&L()}
function D(L){w[x]=null;d(t,z)&&la(function(){e&&e();L()})}
if(!z)return 0;N("ml1",t,K);0<x&&w[x-1]?w[x]=function(){D(C)}:D(C)};
if(t.length){var P="loaded_"+H.I++;G[P]=function(z){w[x](z);G[P]=null};
a=ra(c,t,"gapi."+P,m);m.push.apply(m,t);N("ml0",t,K);b.sync||A.___gapisync?Ba(a):Ca(a)}else w[x](ia)}else d(t)&&e&&e()}
function Fa(a,b){if(H.hee&&0<H.hel)try{return a()}catch(c){b&&b(c),H.hel--,X("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
G.load=function(a,b){return Fa(function(){return X(a,b)})};var Y=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};l("yt.config_",Y);function Ha(a){var b=arguments;1<b.length?Y[b[0]]=b[1]:1===b.length&&Object.assign(Y,b[0])}
function Z(a,b){return a in Y?Y[a]:b}
;l("yt.gapi.load",function(a,b,c){b=void 0===b?{}:b;"function"==n(b)&&(b={callback:b});c||b._c&&b._c.jsl&&b._c.jsl.h||u(b,{_c:{jsl:{h:Z("GAPI_HINT_PARAMS",void 0)}}});if(b.gapiHintOverride||Z("GAPI_HINT_OVERRIDE")){c=document.location.href;if(-1!=c.indexOf("?")){c=(c||"").split("#")[0];c=c.split("?",2);c=1<c.length?c[1]:c[0];"?"==c.charAt(0)&&(c=c.substr(1));c=c.split("&");for(var d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=decodeURIComponent((g[0]||
"").replace(/\+/g," "));var m=decodeURIComponent((g[1]||"").replace(/\+/g," "));h in d?"array"==n(d[h])?fa(d[h],m):d[h]=[d[h],m]:d[h]=m}catch(y){if("q"!=g[0]){var r=Error("Error decoding URL component");r.params={key:g[0],value:g[1]};b:{g=["yt","logging","errors","log"];for(var q=k,v=0;v<g.length;v++)if(q=q[g[v]],null==q){g=null;break b}g=q}g?g(r,"ERROR",void 0,void 0,void 0):(g=Z("ERRORS",[]),g.push([r,"ERROR",void 0,void 0,void 0]),Ha("ERRORS",g))}}}h=d}else h={};(h=h.gapi_jsh)&&u(b,{_c:{jsl:{h:h}}})}X(a,
b)});}).call(this);

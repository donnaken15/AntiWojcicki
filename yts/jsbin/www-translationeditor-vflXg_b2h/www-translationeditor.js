(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ka(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var la=ka(this);function ma(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ma("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ma("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=na(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&h<e;)if(d[h++]!=b[g++])return!1;return g>=f}});
function oa(){oa=function(){};
la.Symbol||(la.Symbol=pa)}
function qa(a,b){this.f=a;ja(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var pa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){oa();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function ta(a,b){ra();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
ma("Array.prototype.keys",function(a){return a?a:function(){return ta(this,function(b){return b})}});
ma("Array.prototype.values",function(a){return a?a:function(){return ta(this,function(b,c){return c})}});
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||va});
var wa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ma("Reflect.construct",function(){return wa});
ma("WeakMap",function(a){function b(k){this.f=(g+=Math.random()+1).toString();if(k){k=ba(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ua(k,h)){var m=new c;ja(k,h,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q["delete"](k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(p){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,h))throw Error("WeakMap key fail: "+k);k[h][this.f]=m;return this};
b.prototype.get=function(k){return d(k)&&ua(k,h)?k[h][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,h)&&ua(k[h],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ua(k,h)&&ua(k[h],this.f)?delete k[h][this.f]:!1};
return b});
ma("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,k){var m=g.f;return sa(function(){if(m){for(;m.head!=g.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(g,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++h,f.set(k,m)):m="p_"+k;var q=g.g[m];if(q&&ua(g.g,m))for(var p=0;p<q.length;p++){var t=q[p];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:q,index:p,A:t}}return{id:m,list:q,index:-1,A:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=ba(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),k=new a(ba([[g,"s"]]));if("s"!=k.get(g)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=g||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(p){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(g,k){g=0===g?0:g;var m=d(this,g);m.list||(m.list=this.g[m.id]=[]);m.A?m.A.value=k:(m.A={next:this.f,previous:this.f.previous,head:this.f,key:g,value:k},m.list.push(m.A),this.f.previous.next=m.A,this.f.previous=m.A,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.A&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.A.previous.next=g.A.next,g.A.next.previous=g.A.previous,g.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).A};
e.prototype.get=function(g){return(g=d(this,g).A)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,g.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
ma("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ma("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==na(this,b,"includes").indexOf(b,c||0)}});
var n=this||self;function w(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.U=void 0;a.u=function(){return a.U?a.U:a.U=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Ha:x=Ia;return x.apply(null,arguments)}
function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Ka=Date.now||function(){return+new Date};
function y(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function z(a,b){function c(){}
c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var La;var Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,h=0;h<c;h++)if(h in f){var g=f[h];
b.call(void 0,g,h,a)&&(d[e++]=g)}return d},Oa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
A(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Qa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},Ra=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Sa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ta(a,b){return 0<=Ma(a,b)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Wa(a,b,c,d){Array.prototype.splice.apply(a,Xa(arguments,1))}
function Xa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ya(a,b){a.sort(b||Za)}
function $a(a,b){var c=Za;Ya(a,function(d,e){return c(b(d),b(e))})}
function ab(a){$a(a,function(b){return b.name})}
function Za(a,b){return a>b?1:a<b?-1:0}
function bb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Aa(d))for(var e=0;e<d.length;e+=8192)for(var f=bb.apply(null,Xa(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
;var cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function db(a,b){for(var c=0,d=cb(String(a)).split("."),e=cb(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var g=d[h]||"",k=e[h]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;c=eb(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||eb(0==g[2].length,0==k[2].length)||eb(g[2],k[2]);g=g[3];k=k[3]}while(0==c)}return c}
function eb(a,b){return a<b?-1:a>b?1:0}
;var fb;a:{var gb=n.navigator;if(gb){var hb=gb.userAgent;if(hb){fb=hb;break a}}fb=""}function B(a){return-1!=fb.indexOf(a)}
;function ib(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function jb(a){var b=0,c;for(c in a)b++;return b}
function kb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function lb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=qb(a[c]);return b}return a}
var rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rb.length;f++)c=rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function tb(){return B("Firefox")||B("FxiOS")}
function ub(){return B("Safari")&&!(wb()||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||tb()||B("Silk")||B("Android"))}
function wb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
function xb(){return B("Android")&&!(wb()||tb()||B("Opera")||B("Silk"))}
;function yb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function zb(a,b){this.f=a===Ab&&b||"";this.g=Bb}
zb.prototype.L=!0;zb.prototype.K=function(){return this.f};
var Bb={},Ab={},Cb=new zb(Ab,"");function Db(a,b){this.f=a===Eb&&b||"";this.g=Fb}
Db.prototype.L=!0;Db.prototype.K=function(){return this.f.toString()};
var Fb={},Eb={};function Gb(a,b){this.f=a===Hb&&b||"";this.g=Ib}
Gb.prototype.L=!0;Gb.prototype.K=function(){return this.f.toString()};
var Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ib={},Hb={};function Kb(){this.f="";this.g=Lb}
Kb.prototype.L=!0;Kb.prototype.K=function(){return this.f.toString()};
function Mb(a){return a instanceof Kb&&a.constructor===Kb&&a.g===Lb?a.f:"type_error:SafeHtml"}
var Lb={};function Nb(a){var b=new Kb;b.f=a;return b}
Nb("<!DOCTYPE html>");var Ob=Nb("");Nb("<br>");var Pb=yb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Mb(Ob);return!b.parentElement});
function Qb(a,b){if(Pb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Mb(b)}
function Rb(a){var b=new Db(Eb,Cb instanceof zb&&Cb.constructor===zb&&Cb.g===Bb?Cb.f:"type_error:Const");a.src=(b instanceof Db&&b.constructor===Db&&b.g===Fb?b.f:"type_error:TrustedResourceUrl").toString()}
;function Sb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Tb(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()}
function Ub(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function Vb(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
function Wb(){return Vb()||B("iPad")||B("iPod")}
;function Xb(a){Xb[" "](a);return a}
Xb[" "]=xa;function Yb(a,b){var c=Zb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var $b=B("Opera"),C=B("Trident")||B("MSIE"),ac=B("Edge"),bc=ac||C,cc=B("Gecko")&&!(-1!=fb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),dc=-1!=fb.toLowerCase().indexOf("webkit")&&!B("Edge"),ec=B("Macintosh"),fc=B("Windows"),gc=B("Android"),hc=Vb(),ic=B("iPad"),jc=B("iPod"),kc=Wb();function lc(){var a=n.document;return a?a.documentMode:void 0}
var mc;a:{var nc="",oc=function(){var a=fb;if(cc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ac)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(dc)return/WebKit\/(\S+)/.exec(a);if($b)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
oc&&(nc=oc?oc[1]:"");if(C){var pc=lc();if(null!=pc&&pc>parseFloat(nc)){mc=String(pc);break a}}mc=nc}var qc=mc,Zb={};function rc(a){return Yb(a,function(){return 0<=db(qc,a)})}
var sc;sc=n.document&&C?lc():void 0;var tc=tb(),uc=Vb()||B("iPod"),vc=B("iPad"),wc=xb(),xc=wb(),yc=ub()&&!Wb();function zc(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var h=a[c++],g=a[c++];e=((e&7)<<18|(f&63)<<12|(h&63)<<6|g&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],h=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|h&63)}return b.join("")}
;var Cc={},Dc=null;function Ec(a){var b=[];Fc(a,function(c){b.push(c)});
return b}
function Fc(a,b){function c(k){for(;d<a.length;){var m=a.charAt(d++),q=Dc[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}
Gc();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),g=c(64);if(64===g&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=g&&b(h<<6&192|g))}}
function Gc(){if(!Dc){Dc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Cc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Dc[f]&&(Dc[f]=e)}}}}
;var D=window;function Hc(a){this.f=a||{cookie:""}}
l=Hc.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ib;d=c.secure||!1;var f=c.domain||void 0;var h=c.path||void 0;var g=c.ka}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===g&&(g=-1);c=f?";domain="+f:"";h=h?";path="+h:"";d=d?";secure":"";g=0>g?"":0==g?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ka()+1E3*g)).toUTCString();this.f.cookie=a+"="+b+c+h+g+d+(null!=e?";samesite="+e:
"")};
l.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=cb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ka:0,path:b,domain:c});return d};
l.I=function(){return Ic(this).keys};
l.G=function(){return Ic(this).values};
l.isEmpty=function(){return!this.f.cookie};
l.B=function(){return this.f.cookie?(this.f.cookie||"").split(";").length:0};
l.O=function(a){for(var b=Ic(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
l.clear=function(){for(var a=Ic(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ic(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=cb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Jc=new Hc("undefined"==typeof document?null:document);var Kc=!cc&&!C||C&&9<=Number(sc)||cc&&rc("1.9.1"),Lc=C&&!rc("9");function E(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=E.prototype;l.clone=function(){return new E(this.x,this.y)};
l.equals=function(a){return a instanceof E&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Mc(a,b){return new E(a.x-b.x,a.y-b.y)}
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Nc(a,b){this.width=a;this.height=b}
l=Nc.prototype;l.clone=function(){return new Nc(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Oc(a){return a?new Pc(Qc(a)):La||(La=new Pc)}
function F(a){return"string"===typeof a?document.getElementById(a):a}
function Rc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Sc(document,"*",a,b)}
function G(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Sc(c,"*",a,b)[0]||null}return c||null}
function Sc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&Ta(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a}
function Tc(a,b){ib(b,function(c,d){c&&"object"==typeof c&&c.L&&(c=c.K());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Uc.hasOwnProperty(d)?a.setAttribute(Uc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Uc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Vc(a){a=a.document;a=Wc(a)?a.documentElement:a.body;return new Nc(a.clientWidth,a.clientHeight)}
function Xc(a){var b=Yc(a);a=Zc(a);return C&&rc("10")&&a.pageYOffset!=b.scrollTop?new E(b.scrollLeft,b.scrollTop):new E(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Yc(a){return a.scrollingElement?a.scrollingElement:!dc&&Wc(a)?a.documentElement:a.body||a.documentElement}
function Zc(a){return a.parentWindow||a.defaultView}
function $c(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=1;e<c.length;e++){var f=c[e];if(!Ba(f)||Da(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Da(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if(Ca(f)){h="function"==typeof f.item;break a}}h=!1}A(h?Ua(f):f,d)}}}
function ad(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Wc(a){return"CSS1Compat"==a.compatMode}
function bd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function cd(a){return Kc&&void 0!=a.children?a.children:Na(a.childNodes,function(b){return 1==b.nodeType})}
function dd(a){for(;a&&1!=a.nodeType;)a=a.nextSibling;return a}
function ed(a){return Da(a)&&1==a.nodeType}
function fd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Qc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function gd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Qc(a).createTextNode(String(b)))}}
function hd(a,b){var c=[];return id(a,b,c,!0)?c[0]:void 0}
function id(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||id(a,b,c,d))return!0;a=a.nextSibling}return!1}
var jd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},kd={IMG:" ",BR:"\n"};function ld(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!md(a)||nd(a)):md(a)&&nd(a))&&C){var c;!Ca(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function md(a){return C&&!rc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function nd(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function od(a){if(Lc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];pd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Lc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function pd(a,b,c){if(!(a.nodeName in jd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in kd)b.push(kd[a.nodeName]);else for(a=a.firstChild;a;)pd(a,b,c),a=a.nextSibling}
function qd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return rd(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&Ta(f.className.split(/\s+/),c))},d)}
function H(a,b){return qd(a,null,b,void 0)}
function rd(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Pc(a){this.f=a||n.document||document}
l=Pc.prototype;l.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
l.createElement=function(a){return ad(this.f,a)};
l.appendChild=function(a,b){a.appendChild(b)};
l.append=function(a,b){$c(Qc(a),a,arguments)};
l.isElement=ed;l.contains=fd;var sd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function td(a){return a.match(sd)}
function ud(a){return a?decodeURI(a):a}
function vd(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)vd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function wd(a){var b=[],c;for(c in a)vd(c,a[c],b);return b.join("&")}
function xd(a,b){var c=wd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function yd(a){var b=zd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ad(){var a=[];yd(function(b){a.push(b)});
return a}
var zd={nb:"allow-forms",ob:"allow-modals",pb:"allow-orientation-lock",qb:"allow-pointer-lock",rb:"allow-popups",sb:"allow-popups-to-escape-sandbox",tb:"allow-presentation",ub:"allow-same-origin",vb:"allow-scripts",wb:"allow-top-navigation",xb:"allow-top-navigation-by-user-activation"},Bd=yb(function(){return Ad()});
function Cd(){var a=ad(document,"IFRAME"),b={};A(Bd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Dd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
l=Dd.prototype;l.getHeight=function(){return this.bottom-this.top};
l.clone=function(){return new Dd(this.top,this.right,this.bottom,this.left)};
l.contains=function(a){return this&&a?a instanceof Dd?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Ed(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
l=Ed.prototype;l.clone=function(){return new Ed(this.left,this.top,this.width,this.height)};
l.contains=function(a){return a instanceof E?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
l.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fd(a,b,c){if("string"===typeof b)(b=Gd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Gd(c,d);f&&(c.style[f]=e)}}
var Hd={};function Gd(a,b){var c=Hd[b];if(!c){var d=Sb(b);c=d;void 0===a.style[d]&&(d=(dc?"Webkit":cc?"Moz":C?"ms":$b?"O":null)+Ub(d),void 0!==a.style[d]&&(c=d));Hd[b]=c}return c}
function Id(a,b){var c=Qc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Jd(a,b){return Id(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Kd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Ld(a){if(C&&!(8<=Number(sc)))return a.offsetParent;var b=Qc(a),c=Jd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Jd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Md(a){for(var b=new Dd(0,Infinity,Infinity,0),c=Oc(a),d=c.f.body,e=c.f.documentElement,f=Yc(c.f);a=Ld(a);)if(!(C&&0==a.clientWidth||dc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Jd(a,"overflow")){var h=Nd(a),g=new E(a.clientLeft,a.clientTop);h.x+=g.x;h.y+=g.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Vc(Zc(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Nd(a){var b=Qc(a),c=new E(0,0);var d=b?Qc(b):document;d=!C||9<=Number(sc)||Wc(Oc(d).f)?d.documentElement:d.body;if(a==d)return c;a=Kd(a);b=Xc(Oc(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Od(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Pd(a){var b=Qd;if("none"!=Jd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Qd(a){var b=a.offsetWidth,c=a.offsetHeight,d=dc&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Kd(a),new Nc(a.right-a.left,a.bottom-a.top)):new Nc(b,c)}
function Rd(a){var b=Nd(a);a=Pd(a);return new Ed(b.x,b.y,a.width,a.height)}
function Sd(a){return"rtl"==Jd(a,"direction")}
function Td(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Ud(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Td(a,c):0}
var Vd={thin:2,medium:4,thick:6};function Wd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Vd?Vd[c]:Td(a,c)}
;var Xd=(new Date).getTime();function Yd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Zd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(p){for(var t=h,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var u=e[1],O=e[2],v=e[3],Ac=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var vb=v^u&(O^v);var Bc=1518500249}else vb=u^O^v,Bc=1859775393;else 60>r?(vb=u&O|v&(u|O),Bc=2400959708):(vb=u^O^v,Bc=3395469782);vb=((p<<5|p>>>27)&4294967295)+vb+Ac+Bc+t[r]&4294967295;Ac=v;v=O;O=(u<<30|u>>>2)&4294967295;u=p;p=vb}e[0]=e[0]+p&4294967295;e[1]=e[1]+
u&4294967295;e[2]=e[2]+O&4294967295;e[3]=e[3]+v&4294967295;e[4]=e[4]+Ac&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],u=0,O=p.length;u<O;++u)r.push(p.charCodeAt(u));p=r}t||(t=p.length);r=0;if(0==m)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,q+=64;for(;r<t;)if(f[m++]=p[r++],q++,64==m)for(m=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,q+=64}
function d(){var p=[],t=8*q;56>m?c(g,56-m):c(g,64-(m-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var u=24;0<=u;u-=8)p[t++]=e[r]>>u&255;return p}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Ga:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function $d(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],A(d,function(g){e.push(g)}),ae(e.join(" "));
var f=[],h=[];A(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];A(d,function(g){e.push(g)});
a=ae(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function ae(a){var b=Zd();b.update(a);return b.Ga().toLowerCase()}
;function be(a){var b=Yd(String(n.location.href)),c;(c=n.__SAPISID||n.__APISID||n.__OVERRIDE_SID)?c=!0:(c=new Hc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,c||(c=new Hc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&c&&b?[b,$d(Yd(d),c,a||null)].join(" "):null}return null}
;function ce(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function de(a){return a.classList?a.classList:ce(a).match(/\S+/g)||[]}
function ee(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function I(a,b){return a.classList?a.classList.contains(b):Ta(de(a),b)}
function J(a,b){if(a.classList)a.classList.add(b);else if(!I(a,b)){var c=ce(a);ee(a,c+(0<c.length?" "+b:b))}}
function fe(a,b){if(a.classList)A(b,function(f){J(a,f)});
else{var c={};A(de(a),function(f){c[f]=!0});
A(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;ee(a,d)}}
function K(a,b){a.classList?a.classList.remove(b):I(a,b)&&ee(a,Na(de(a),function(c){return c!=b}).join(" "))}
function ge(a,b){a.classList?A(b,function(c){K(a,c)}):ee(a,Na(de(a),function(c){return!Ta(b,c)}).join(" "))}
function he(a,b,c){c?J(a,b):K(a,b)}
function ie(a,b,c){I(a,b)&&(K(a,b),J(a,c))}
function je(a,b){var c=!I(a,b);he(a,b,c)}
;var ke=!C&&!ub();function le(a,b){if(/-[a-z]/.test(b))return null;if(ke&&a.dataset){if(xb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+Tb(b))}
function me(a){return/-[a-z]/.test("value")?!1:ke&&a.dataset?"value"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+Tb("value")):!!a.getAttribute("data-"+Tb("value"))}
;var ne="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function oe(){}
oe.prototype.next=function(){throw ne;};
oe.prototype.D=function(){return this};
function pe(a){if(a instanceof oe)return a;if("function"==typeof a.D)return a.D(!1);if(Ba(a)){var b=0,c=new oe;c.next=function(){for(;;){if(b>=a.length)throw ne;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function qe(a,b){if(Ba(a))try{A(a,b,void 0)}catch(c){if(c!==ne)throw c;}else{a=pe(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ne)throw c;}}}
function re(a){if(Ba(a))return Ua(a);a=pe(a);var b=[];qe(a,function(c){b.push(c)});
return b}
;function se(a,b){this.g={};this.f=[];this.i=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof se)for(c=a.I(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=se.prototype;l.B=function(){return this.h};
l.G=function(){te(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
l.I=function(){te(this);return this.f.concat()};
l.O=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b];if(ue(this.g,c)&&this.g[c]==a)return!0}return!1};
l.equals=function(a,b){if(this===a)return!0;if(this.h!=a.B())return!1;var c=b||ve;te(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ve(a,b){return a===b}
l.isEmpty=function(){return 0==this.h};
l.clear=function(){this.g={};this.i=this.h=this.f.length=0};
l.remove=function(a){return ue(this.g,a)?(delete this.g[a],this.h--,this.i++,this.f.length>2*this.h&&te(this),!0):!1};
function te(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];ue(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],ue(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
l.get=function(a,b){return ue(this.g,a)?this.g[a]:b};
l.set=function(a,b){ue(this.g,a)||(this.h++,this.f.push(a),this.i++);this.g[a]=b};
l.forEach=function(a,b){for(var c=this.I(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new se(this)};
l.D=function(a){te(this);var b=0,c=this.i,d=this,e=new oe;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw ne;var f=d.f[b++];return a?f:d.g[f]};
return e};
function ue(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var we=function(){if(fc){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(fb))?a[1]:"0"}return ec?(a=/10[_.][0-9_.]+/,(a=a.exec(fb))?a[0].replace(/_/g,"."):"10"):gc?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(fb))?a[1]:""):hc||ic||jc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(fb))?a[1].replace(/_/g,"."):""):""}();function xe(a){return(a=a.exec(fb))?a[1]:""}
var ye=function(){if(tc)return xe(/Firefox\/([0-9.]+)/);if(C||ac||$b)return qc;if(xc)return Wb()?xe(/CriOS\/([0-9.]+)/):xe(/Chrome\/([0-9.]+)/);if(yc&&!Wb())return xe(/Version\/([0-9.]+)/);if(uc||vc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(fb);if(a)return a[1]+"."+a[2]}else if(wc)return(a=xe(/Android\s+([0-9.]+)/))?a:xe(/Version\/([0-9.]+)/);return""}();function ze(){this.g=[];this.f=-1}
ze.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
ze.prototype.get=function(a){return!!this.g[a]};
function Ae(a){-1==a.f&&(a.f=Pa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Be(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Be.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};function Ce(a){n.setTimeout(function(){throw a;},0)}
var De;
function Ee(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=ad(document,"IFRAME");e.style.display="none";Rb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Mb(Ob));e.close();var h="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=x(function(k){if(("*"==g||k.origin==g)&&k.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,g)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.W;c.W=null;e()}};
return function(e){d.next={W:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in ad(document,"SCRIPT")?function(e){var f=ad(document,"SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){n.setTimeout(e,0)}}
;function Fe(){this.g=this.f=null}
var He=new Be(function(){return new Ge},function(a){a.reset()});
Fe.prototype.add=function(a,b){var c=He.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Fe.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Ge(){this.next=this.scope=this.f=null}
Ge.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Ge.prototype.reset=function(){this.next=this.scope=this.f=null};function Ie(a){Je||Ke();Le||(Je(),Le=!0);Me.add(a,void 0)}
var Je;function Ke(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Je=function(){a.then(Ne)}}else Je=function(){var b=Ne;
!Ca(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(De||(De=Ee()),De(b)):n.setImmediate(b)}}
var Le=!1,Me=new Fe;function Ne(){for(var a;a=Me.remove();){try{a.f.call(a.scope)}catch(c){Ce(c)}var b=He;b.i(a);100>b.g&&(b.g++,a.next=b.f,b.f=a)}Le=!1}
;function Oe(){this.g=-1}
;function Pe(){this.g=64;this.f=[];this.m=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
z(Pe,Oe);Pe.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.h=0};
function Qe(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var h=a.f[2],g=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(h^g);var m=1518500249}else f=c^h^g,m=1859775393;else 60>e?(f=c&h|g&(c|h),m=2400959708):
(f=c^h^g,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=g;g=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+h&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+k&4294967295}
Pe.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.m,f=this.h;d<b;){if(0==f)for(;d<=c;)Qe(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Qe(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Qe(this,e);f=0;break}}this.h=f;this.l+=b}};
Pe.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.m[c]=b&255,b/=256;Qe(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Re(){this.i=this.i;this.h=this.h}
Re.prototype.i=!1;Re.prototype.R=function(){return this.i};
Re.prototype.dispose=function(){this.i||(this.i=!0,this.T())};
Re.prototype.T=function(){if(this.h)for(;this.h.length;)this.h.shift()()};
function Se(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Te(a){var b=[];Ue(new Ve,a,b);return b.join("")}
function Ve(){}
function Ue(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ue(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),We(d,c),c.push(":"),Ue(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":We(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Xe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ye=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function We(a,b){b.push('"',a.replace(Ye,function(c){var d=Xe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Xe[c]=d);return d}),'"')}
;function Ze(a,b,c,d,e,f,h){var g;if(g=c.offsetParent){var k="HTML"==g.tagName||"BODY"==g.tagName;if(!k||"static"!=Jd(g,"position")){var m=Nd(g);if(!k){k=Sd(g);var q;if(q=k){if(q=yc)q=0<=db(ye,10);var p;if(p=kc)p=0<=db(we,10);q=cc||q||p}k=q?-g.scrollLeft:!k||bc&&rc("8")||"visible"==Jd(g,"overflowX")?g.scrollLeft:g.scrollWidth-g.clientWidth-g.scrollLeft;m=Mc(m,new E(k,g.scrollTop))}}}g=m||new E;m=Rd(a);if(k=Md(a)){var t=new Ed(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(m.left,t.left);q=
Math.min(m.left+m.width,t.left+t.width);k<=q&&(p=Math.max(m.top,t.top),t=Math.min(m.top+m.height,t.top+t.height),p<=t&&(m.left=k,m.top=p,m.width=q-k,m.height=t-p))}k=Oc(a);p=Oc(c);if(k.f!=p.f){q=k.f.body;p=Zc(p.f);t=new E(0,0);var r=(r=Qc(q))?Zc(r):window;b:{try{Xb(r.parent);var u=!0;break b}catch(Ac){}u=!1}if(u){u=q;do{if(r==p)var O=Nd(u);else O=Kd(u),O=new E(O.left,O.top);t.x+=O.x;t.y+=O.y}while(r&&r!=p&&r!=r.parent&&(u=r.frameElement)&&(r=r.parent))}u=Mc(t,Nd(q));!C||9<=Number(sc)||Wc(k.f)||(u=
Mc(u,Xc(k.f)));m.left+=u.x;m.top+=u.y}a=$e(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new E(b,m.top+(a&1?m.height:0));b=Mc(b,g);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var v;h&&(v=Md(c))&&(v.top-=g.y,v.right-=g.x,v.bottom-=g.y,v.left-=g.x);e=v;v=b.clone();b=$e(c,d);d=Pd(c);a=d.clone();v=v.clone();a=a.clone();u=0;if(f||0!=b)b&4?v.x-=a.width+(f?f.right:0):b&2?v.x-=a.width/2:f&&(v.x+=f.left),b&1?v.y-=a.height+(f?f.bottom:0):f&&(v.y+=f.top);h&&(e?(f=v,b=a,u=0,65==(h&65)&&(f.x<e.left||f.x>=
e.right)&&(h&=-2),132==(h&132)&&(f.y<e.top||f.y>=e.bottom)&&(h&=-5),f.x<e.left&&h&1&&(f.x=e.left,u|=1),h&16&&(g=f.x,f.x<e.left&&(f.x=e.left,u|=4),f.x+b.width>e.right&&(b.width=Math.min(e.right-f.x,g+b.width-e.left),b.width=Math.max(b.width,0),u|=4)),f.x+b.width>e.right&&h&1&&(f.x=Math.max(e.right-b.width,e.left),u|=1),h&2&&(u|=(f.x<e.left?16:0)|(f.x+b.width>e.right?32:0)),f.y<e.top&&h&4&&(f.y=e.top,u|=2),h&32&&(g=f.y,f.y<e.top&&(f.y=e.top,u|=8),f.y+b.height>e.bottom&&(b.height=Math.min(e.bottom-f.y,
g+b.height-e.top),b.height=Math.max(b.height,0),u|=8)),f.y+b.height>e.bottom&&h&4&&(f.y=Math.max(e.bottom-b.height,e.top),u|=2),h&8&&(u|=(f.y<e.top?64:0)|(f.y+b.height>e.bottom?128:0)),h=u):h=256,u=h);f=new Ed(0,0,0,0);f.left=v.x;f.top=v.y;f.width=a.width;f.height=a.height;h=u;h&496||(v=new E(f.left,f.top),v instanceof E?(e=v.x,v=v.y):(e=v,v=void 0),c.style.left=Od(e,!1),c.style.top=Od(v,!1),a=new Nc(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,e=Wc(Oc(Qc(c)).f),!C||rc("10")||
e&&rc("8")?(c=c.style,cc?c.MozBoxSizing="border-box":dc?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,e?(C?(e=Ud(c,"paddingLeft"),v=Ud(c,"paddingRight"),a=Ud(c,"paddingTop"),b=Ud(c,"paddingBottom"),e=new Dd(a,v,b,e)):(e=Id(c,"paddingLeft"),v=Id(c,"paddingRight"),a=Id(c,"paddingTop"),b=Id(c,"paddingBottom"),e=new Dd(parseFloat(a),parseFloat(v),parseFloat(b),parseFloat(e))),!C||9<=Number(sc)?(v=Id(c,"borderLeftWidth"),
a=Id(c,"borderRightWidth"),b=Id(c,"borderTopWidth"),c=Id(c,"borderBottomWidth"),c=new Dd(parseFloat(b),parseFloat(a),parseFloat(c),parseFloat(v))):(v=Wd(c,"borderLeft"),a=Wd(c,"borderRight"),b=Wd(c,"borderTop"),c=Wd(c,"borderBottom"),c=new Dd(b,a,c,v)),d.pixelWidth=f.width-c.left-e.left-e.right-c.right,d.pixelHeight=f.height-c.top-e.top-e.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return h}
function $e(a,b){return(b&8&&Sd(a)?b^4:b)&-9}
;function L(a){Re.call(this);this.s=1;this.l=[];this.m=0;this.f=[];this.g={};this.C=!!a}
z(L,Re);l=L.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.s;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.s=e+3;d.push(e);return e};
function af(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.J(d),b.apply(void 0,arguments))},a)}
function bf(a,b,c){if(b=a.g[b]){var d=a.f;(b=Sa(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.J(b)}}
l.J=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.m)this.l.push(a),this.f[a+1]=xa;else{if(c){var d=Ma(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
l.F=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var h=c[e];cf(this.f[h+1],this.f[h+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.J(c)}}return 0!=e}return!1};
function cf(a,b,c){Ie(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(A(b,this.J,this),delete this.g[a])}else this.f.length=0,this.g={}};
l.B=function(a){if(a){var b=this.g[a];return b?b.length:0}a=0;for(b in this.g)a+=this.B(b);return a};
l.T=function(){L.w.T.call(this);this.clear();this.l.length=0};function df(a){this.f=a}
df.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Te(b))};
df.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
df.prototype.remove=function(a){this.f.remove(a)};function ef(a){this.f=a}
z(ef,df);function ff(a){this.data=a}
function gf(a){return void 0===a||a instanceof ff?a:new ff(a)}
ef.prototype.set=function(a,b){ef.w.set.call(this,a,gf(b))};
ef.prototype.g=function(a){a=ef.w.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ef.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function hf(a){this.f=a}
z(hf,ef);hf.prototype.set=function(a,b,c){if(b=gf(b)){if(c){if(c<Ka()){hf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ka()}hf.w.set.call(this,a,b)};
hf.prototype.g=function(a){var b=hf.w.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ka()||c&&c>Ka())hf.prototype.remove.call(this,a);else return b}};function jf(){}
;function kf(){}
z(kf,jf);kf.prototype.B=function(){var a=0;qe(this.D(!0),function(){a++});
return a};
kf.prototype.clear=function(){var a=re(this.D(!0)),b=this;A(a,function(c){b.remove(c)})};function lf(a){this.f=a}
z(lf,kf);l=lf.prototype;l.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.f.removeItem(a)};
l.B=function(){return this.f.length};
l.D=function(a){var b=0,c=this.f,d=new oe;d.next=function(){if(b>=c.length)throw ne;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
l.clear=function(){this.f.clear()};
l.key=function(a){return this.f.key(a)};function mf(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
z(mf,lf);function nf(a,b){this.g=a;this.f=null;if(C&&!(9<=Number(sc))){of||(of=new se);this.f=of.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),of.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
z(nf,kf);var pf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},of=null;function qf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return pf[b]})}
l=nf.prototype;l.isAvailable=function(){return!!this.f};
l.set=function(a,b){this.f.setAttribute(qf(a),b);rf(this)};
l.get=function(a){a=this.f.getAttribute(qf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.f.removeAttribute(qf(a));rf(this)};
l.B=function(){return sf(this).attributes.length};
l.D=function(a){var b=0,c=sf(this).attributes,d=new oe;d.next=function(){if(b>=c.length)throw ne;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
l.clear=function(){for(var a=sf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);rf(this)};
function rf(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
function sf(a){return a.f.XMLDocument.documentElement}
;function tf(a,b){this.g=a;this.f=b+"::"}
z(tf,kf);tf.prototype.set=function(a,b){this.g.set(this.f+a,b)};
tf.prototype.get=function(a){return this.g.get(this.f+a)};
tf.prototype.remove=function(a){this.g.remove(this.f+a)};
tf.prototype.D=function(a){var b=this.g.D(!0),c=this,d=new oe;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function uf(a){return a.B&&"function"==typeof a.B?a.B():Ba(a)||"string"===typeof a?a.length:jb(a)}
function vf(a){if(a.G&&"function"==typeof a.G)return a.G();if("string"===typeof a)return a.split("");if(Ba(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return kb(a)}
function wf(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(Ba(a)||"string"===typeof a)return Ra(a,b,void 0);if(a.I&&"function"==typeof a.I)var c=a.I();else if(a.G&&"function"==typeof a.G)c=void 0;else if(Ba(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=lb(a);d=vf(a);e=d.length;for(var f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function xf(a){this.f=new se;if(a){a=vf(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])}}
function yf(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+Ea(a):b.substr(0,1)+a}
l=xf.prototype;l.B=function(){return this.f.B()};
l.add=function(a){this.f.set(yf(a),a)};
l.remove=function(a){return this.f.remove(yf(a))};
l.clear=function(){this.f.clear()};
l.isEmpty=function(){return this.f.isEmpty()};
l.contains=function(a){a=yf(a);return ue(this.f.g,a)};
l.G=function(){return this.f.G()};
l.clone=function(){return new xf(this)};
l.equals=function(a){return this.B()==uf(a)&&zf(this,a)};
function zf(a,b){var c=uf(b);if(a.B()>c)return!1;!(b instanceof xf)&&5<c&&(b=new xf(b));return wf(a,function(d){var e=b;if(e.contains&&"function"==typeof e.contains)d=e.contains(d);else if(e.O&&"function"==typeof e.O)d=e.O(d);else if(Ba(e)||"string"===typeof e)d=Ta(e,d);else a:{for(var f in e)if(e[f]==d){d=!0;break a}d=!1}return d})}
l.D=function(){return this.f.D(!1)};function Af(a,b,c){a&&(a.dataset?a.dataset[Bf(b)]=String(c):a.setAttribute("data-"+b,c))}
function Cf(a,b){return a?a.dataset?a.dataset[Bf(b)]:a.getAttribute("data-"+b):null}
var Df={};function Bf(a){return Df[a]||(Df[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ef=0;function Ff(a){var b=a.__yt_uid_key;b||(b=Gf(),a.__yt_uid_key=b);return b}
function Hf(a,b){a=F(a);b=F(b);return!!rd(a,function(c){return c===b},void 0)}
function If(a,b){var c=Sc(document,a,null,b);return c.length?c[0]:null}
function Jf(){he(document.body,"hide-players",!1);A(Rc("preserve-players"),function(a){K(a,"preserve-players")})}
var Gf=w("ytDomDomGetNextId")||function(){return++Ef};
y("ytDomDomGetNextId",Gf);var Kf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",Kf);function Lf(a){var b=arguments;1<b.length?Kf[b[0]]=b[1]:1===b.length&&Object.assign(Kf,b[0])}
function M(a,b){return a in Kf?Kf[a]:b}
function Mf(a){return M(a,void 0)}
function Nf(){return M("CREATOR_CONTEXT",Of)}
;var Pf=[];function Qf(a){Pf.forEach(function(b){return b(a)})}
function Rf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Sf(b),Qf(b)}}:a}
function Sf(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Lf("ERRORS",b))}
function Tf(a){var b=w("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Lf("ERRORS",b))}
;var Uf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Vf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Uf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Vf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Vf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Vf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=w("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",nb);var Wf=w("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Wf);
function Xf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=Da(e[4])&&Da(d)&&pb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
function N(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Xf(a,b,c,d);if(e)return e;e=++Wf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(g){g=new Vf(g);if(!rd(g.relatedTarget,function(k){return k==a}))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new Vf(g);
g.currentTarget=a;return c.call(a,g)};
h=Rf(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Yf()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);nb[e]=[a,b,c,h,d];return e}
function Zf(a,b,c){var d=a||document;return N(d,"click",function(e){var f=rd(e.target,function(h){return h===d||c(h)});
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function $f(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Yf=yb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ag(a,b){return Zf(a,b,function(c){return I(c,"yt-dialog-dismiss")})}
function bg(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function P(a){a&&("string"==typeof a&&(a=[a]),A(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Yf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;function Q(a,b){Ca(a)&&(a=Rf(a));return window.setTimeout(a,b)}
;var cg=w("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.J;L.prototype.publish=L.prototype.F;L.prototype.clear=L.prototype.clear;y("ytPubsubPubsubInstance",cg);var dg=w("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",dg);var eg=w("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",eg);var fg=w("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",fg);
function gg(a,b,c){var d=hg();if(d){var e=d.subscribe(a,function(){var f=arguments;var h=function(){dg[e]&&b.apply(c||window,f)};
try{fg[a]?h():Q(h,0)}catch(g){Sf(g)}},c);
dg[e]=!0;eg[a]||(eg[a]=[]);eg[a].push(e);return e}return 0}
function ig(a){var b=hg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),A(a,function(c){b.unsubscribeByKey(c);delete dg[c]}))}
function R(a,b){var c=hg();c&&c.publish.apply(c,arguments)}
function jg(a,b){fg[a]=!0;var c=hg();c&&c.publish.apply(c,arguments);fg[a]=!1}
function hg(){return w("ytPubsubPubsubInstance")}
;function kg(a,b){(a=F(a))&&a.style&&(a.style.display=b?"":"none",he(a,"hid",!b))}
function lg(a){return(a=F(a))?"none"!=a.style.display&&!I(a,"hid"):!1}
function mg(a){A(arguments,function(b){!Ba(b)||b instanceof Element?kg(b,!0):A(b,function(c){mg(c)})})}
function ng(a){A(arguments,function(b){!Ba(b)||b instanceof Element?kg(b,!1):A(b,function(c){ng(c)})})}
;function og(a){var b=5E3;isNaN(b)&&(b=void 0);var c=w("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():Q(a,b||0)}
;function pg(){}
function qg(){}
pg.prototype=ca(qg.prototype);pg.prototype.constructor=pg;if(ia)ia(pg,qg);else for(var rg in qg)if("prototype"!=rg)if(Object.defineProperties){var sg=Object.getOwnPropertyDescriptor(qg,rg);sg&&Object.defineProperty(pg,rg,sg)}else pg[rg]=qg[rg];pg.w=qg.prototype;pg.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
ya(pg);pg.u();var tg=w("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.J;L.prototype.publish=L.prototype.F;L.prototype.clear=L.prototype.clear;y("ytPubsub2Pubsub2Instance",tg);var ug=w("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",ug);y("ytPubsub2Pubsub2TopicToKeys",w("ytPubsub2Pubsub2TopicToKeys")||{});y("ytPubsub2Pubsub2IsAsync",w("ytPubsub2Pubsub2IsAsync")||{});y("ytPubsub2Pubsub2SkipSubKey",null);
function vg(a){var b=w("ytPubsub2Pubsub2Instance");b&&("number"===typeof a&&(a=[a]),A(a,function(c){b.unsubscribeByKey(c);delete ug[c]}))}
;var wg={},xg="ontouchstart"in document;function yg(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return rd(c,function(e){return I(e,b)},d)}
function S(a){var b="mouseover"==a.type&&"mouseenter"in wg||"mouseout"==a.type&&"mouseleave"in wg,c=a.type in wg||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=wg[b];for(var d in c.g){var e=yg(b,d,a.target);e&&!rd(a.relatedTarget,function(f){return f==e})&&c.F(d,e,b,a)}}if(b=wg[a.type])for(d in b.g)(e=yg(a.type,d,a.target))&&b.F(d,e,a.type,a)}}
N(document,"blur",S,!0);N(document,"change",S,!0);N(document,"click",S);N(document,"focus",S,!0);N(document,"mouseover",S);N(document,"mouseout",S);N(document,"mousedown",S);N(document,"keydown",S);N(document,"keyup",S);N(document,"keypress",S);N(document,"cut",S);N(document,"paste",S);xg&&(N(document,"touchstart",S),N(document,"touchend",S),N(document,"touchcancel",S));function zg(a){this.l=a;this.s={};this.C=[];this.H=[]}
l=zg.prototype;l.v=function(a){return H(a,T(this))};
function T(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
l.unregister=function(){ig(this.C);this.C.length=0;vg(this.H);this.H.length=0};
l.init=xa;l.dispose=xa;function Ag(a,b,c){a.C.push(gg(b,c,a))}
function U(a,b,c,d){d=T(a,d);var e=x(c,a);b in wg||(wg[b]=new L);wg[b].subscribe(d,e);a.s[c]=e}
function V(a,b,c,d){if(b in wg){var e=wg[b];bf(e,T(a,d),a.s[c]);0>=e.B()&&(e.dispose(),delete wg[b])}delete a.s[c]}
l.N=function(a,b,c){var d=this.j(a,b);if(d&&(d=w(d))){var e=Xa(arguments,2);Wa(e,0,0,a);d.apply(null,e)}};
l.j=function(a,b){return Cf(a,b)};function W(a){a=Bg(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Cg(a,b){var c=Bg(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Bg(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
;var Dg=window,Eg=Dg.ytcsi&&Dg.ytcsi.now?Dg.ytcsi.now:Dg.performance&&Dg.performance.timing&&Dg.performance.now?function(){return Dg.performance.timing.navigationStart+Dg.performance.now()}:function(){return(new Date).getTime()};var Fg=Cg("initial_gel_batch_timeout",1E3),Gg=Math.pow(2,16)-1,Hg=null,Ig=0,Jg={log_event:"events",log_interaction:"interactions"},Kg=Object.create(null);Kg.log_event="GENERIC_EVENT_LOGGING";Kg.log_interaction="INTERACTION_LOGGING";var Lg=new Set(["log_event"]),Mg={},Ng=0,Og=0,Pg=0,Qg=!0,Rg=w("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",Rg);var Sg=w("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",Sg);
var Tg=w("ytLoggingTransportDispatchedStats_")||{};y("ytLoggingTransportDispatchedStats_",Tg);y("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{});function Ug(){window.clearTimeout(Ng);window.clearTimeout(Og);Og=0;if(!ob(Rg)){for(var a in Rg){var b=Mg[a];b&&b.isReady()&&(Vg(a,b),delete Rg[a],Qg=!1)}ob(Rg)||Wg()}}
function Wg(){W("web_gel_timeout_cap")&&!Og&&(Og=Q(Ug,6E4));window.clearTimeout(Ng);var a=M("LOGGING_BATCH_TIMEOUT",Cg("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&Qg&&(a=Fg);Ng=Q(Ug,a)}
function Xg(a,b){b=void 0===b?"":b;Rg[a]=Rg[a]||{};Rg[a][b]=Rg[a][b]||[];return Rg[a][b]}
function Vg(a,b){var c=Jg[a],d=Tg[a]||{};Tg[a]=d;var e=Math.round(Eg());for(p in Rg[a]){var f=qb,h=b.f||Yg();h={client:{hl:h.Va,gl:h.Ua,clientName:h.Ta,clientVersion:h.innertubeContextClientVersion,configInfo:h.Sa}};var g=window.devicePixelRatio;g&&1!=g&&(h.client.screenDensityFloat=String(g));g=M("EXPERIMENTS_TOKEN","");""!==g&&(h.client.experimentsToken=g);var k=g=void 0,m=[],q=M("EXPERIMENTS_FORCED_FLAGS",{});for(k in q)m.push({key:k,value:String(q[k])});k=M("EXPERIMENT_FLAGS",{});for(g in k)g.startsWith("force_")&&
void 0===q[g]&&m.push({key:g,value:String(k[g])});g=m;0<g.length&&(h.request={internalExperimentFlags:g});M("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(h.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});f=f({context:h});f[c]=Xg(a,p);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(h=Sg[p])a:{m=p;if(h.videoId)g="VIDEO";else if(h.playlistId)g="PLAYLIST";else break a;f.credentialTransferTokenTargetId=h;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:m,scope:g}]}delete Sg[p];f.requestTimeMs=e;W("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(h=Mf("EVENT_ID"))g=M("BATCH_CLIENT_COUNTER",void 0)||0,!g&&W("web_client_counter_random_seed")&&(g=Math.floor(Math.random()*Gg/2)),g++,g>Gg&&(g=1),Lf("BATCH_CLIENT_COUNTER",g),h={serializedEventId:h,clientCounter:g},f.serializedClientEventId=h,Hg&&Ig&&W("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Hg,roundtripMs:Ig}),
Hg=h,Ig=0;Zg(b,a,f,{retry:Lg.has(a),onSuccess:x($g,this,Eg())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var p=d.diffCount||0;d.averageTimeBetweenDispatchesMs=p?(d.averageTimeBetweenDispatchesMs*p+c)/(p+1):c;d.diffCount=p+1}d.previousDispatchMs=e}
function $g(a){Ig=Math.round(Eg()-a)}
;var ah=w("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",ah);function bh(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];A(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function ch(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Va(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(k){if("q"!=e[0]){var g=Error("Error decoding URL component");g.params={key:e[0],value:e[1]};Sf(g)}}}return b}
function dh(a,b){return eh(a,b||{},!0)}
function eh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ch(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return xd(a,e)+d}
;function fh(a){var b=gh;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(hh(b),ih(b));b.ca_type="image";a&&(b.bid=a);return b}
function hh(a){var b={};b.dt=Xd;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?D:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!D.navigator&&"unknown"!==typeof D.navigator.javaEnabled&&!!D.navigator.javaEnabled&&D.navigator.javaEnabled();D.screen&&(b.u_h=D.screen.height,b.u_w=D.screen.width,b.u_ah=D.screen.availHeight,b.u_aw=D.screen.availWidth,b.u_cd=D.screen.colorDepth);
D.navigator&&D.navigator.plugins&&(b.u_nplug=D.navigator.plugins.length);D.navigator&&D.navigator.mimeTypes&&(b.u_nmime=D.navigator.mimeTypes.length);return b}
function ih(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var h=b.innerWidth;var g=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,g];c=a.f.top;try{var k=Vc(c||window).round()}catch(m){k=new Nc(-12245933,-12245933)}c=k;k={};d=new ze;n.SVGElement&&n.document.createElementNS&&d.set(0);e=Cd();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);n.TextDecoder&&n.TextEncoder&&d.set(4);d=Ae(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!D.WebGLRenderingContext,k}
var gh=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return bh(fh(a))});Ka();var jh=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function kh(){if(!jh)return null;var a=jh();return"open"in a?a:null}
;var lh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},mh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
nh=!1;
function oh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=td(a)[1]||null,e=ud(td(a)[3]||null);d&&e?(d=c,c=td(a),d=td(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ud(td(c)[3]||null)==e&&(Number(td(c)[4]||null)||null)==(Number(td(a)[4]||null)||null):!0;d=W("web_ajax_ignore_global_headers_if_set");for(var f in lh)e=M(lh[f]),!e||!c&&!ph(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||ph(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||ph(a,"X-YouTube-Time-Zone"))&&(f=
"undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||ph(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=bh(fh(void 0));return b}
function qh(a){var b=window.location.search,c=ud(td(a)[3]||null),d=ud(td(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ch(b),f={};A(mh,function(h){e[h]&&(f[h]=e[h])});
return eh(a,f||{},!1)}
function ph(a,b){var c=M("CORS_HEADER_WHITELIST")||{},d=ud(td(a)[3]||null);return d?(c=c[d])?Ta(c,b):!1:!0}
function rh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=sh(a,b);var d=th(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&window.clearTimeout(f);var g=h.ok,k=function(m){m=m||{};var q=b.context||n;g?b.onSuccess&&b.onSuccess.call(q,m,h):b.onError&&b.onError.call(q,m,h);b.V&&b.V.call(q,m,h)};
"JSON"==(b.format||"JSON")&&(g||400<=h.status&&500>h.status)?h.json().then(k,function(){k(null)}):k(null)}});
b.ib&&0<b.timeout&&(f=Q(function(){e||(e=!0,window.clearTimeout(f))},b.timeout))}else uh(a,b)}
function uh(a,b){var c=b.format||"JSON";a=sh(a,b);var d=th(a,b),e=!1,f,h=vh(a,function(g){if(!e){e=!0;f&&window.clearTimeout(f);a:switch(g&&"status"in g?g.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,q=400<=g.status&&500>g.status,p=500<=g.status&&600>g.status;if(k||q||p)m=wh(c,g,b.Cb);if(k)a:if(g&&204==g.status)k=!0;else{switch(c){case "XML":k=0==parseInt(m&&m.return_code,10);break a;case "RAW":k=!0;break a}k=!!m}m=m||
{};q=b.context||n;k?b.onSuccess&&b.onSuccess.call(q,g,m):b.onError&&b.onError.call(q,g,m);b.V&&b.V.call(q,g,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.sa&&0<b.timeout&&(f=Q(function(){e||(e=!0,h.abort(),window.clearTimeout(f))},b.timeout))}
function sh(a,b){b.Gb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Mf("XSRF_FIELD_NAME"),d=b.Jb;d&&(d[c]&&delete d[c],a=dh(a,d));return a}
function th(a,b){var c=Mf("XSRF_FIELD_NAME"),d=Mf("XSRF_TOKEN"),e=b.postBody||"",f=b.M,h=Mf("XSRF_FIELD_NAME"),g;b.headers&&(g=b.headers["Content-Type"]);b.Fb||ud(td(a)[3]||null)&&!b.withCredentials&&ud(td(a)[3]||null)!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.M&&b.M[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ch(e),sb(e,f),e=b.ta&&"JSON"==b.ta?JSON.stringify(e):wd(e));f=e||f&&!ob(f);!nh&&f&&"POST"!=b.method&&(nh=!0,Sf(Error("AJAX request with postData should use POST")));
return e}
function wh(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?xh(b):null)d={},A(b.getElementsByTagName("*"),function(e){d[e.tagName]=yh(e)})}c&&zh(d);
return d}
function zh(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Nb(a[b]);a[c]=d}else zh(a[b])}}
function xh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function yh(a){var b="";A(a.childNodes,function(c){b+=c.nodeValue});
return b}
function vh(a,b,c,d,e,f,h){function g(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Rf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=kh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",g,!1):k.onreadystatechange=g;W("debug_forward_web_query_parameters")&&(a=qh(a));k.open(c,a,!0);f&&(k.responseType=f);h&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=oh(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Ah(){return"INNERTUBE_API_KEY"in Kf&&"INNERTUBE_API_VERSION"in Kf}
function Yg(){return{innertubeApiKey:Mf("INNERTUBE_API_KEY"),innertubeApiVersion:Mf("INNERTUBE_API_VERSION"),Sa:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ta:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Mf("INNERTUBE_CONTEXT_CLIENT_VERSION"),Va:Mf("INNERTUBE_CONTEXT_HL"),Ua:Mf("INNERTUBE_CONTEXT_GL"),Wa:Mf("INNERTUBE_HOST_OVERRIDE")||"",Xa:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Bh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Bb||M("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().Ab:b=be([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=M("SESSION_INDEX",0),W("pageid_as_header_web")&&(d["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return d}
function Ch(a){a=Object.assign({},a);delete a.Authorization;var b=be();if(b){var c=new Pe;c.update(Mf("INNERTUBE_API_KEY"));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);Gc();c=Cc[c];for(var d=[],e=0;e<b.length;e+=3){var f=b[e],h=e+1<b.length,g=h?b[e+1]:0,k=e+2<b.length,m=k?b[e+2]:0,q=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<2|m>>6;m&=63;k||(m=64,h||(g=64));d.push(c[q],c[f],c[g]||"",c[m]||"")}a.hash=d.join("")}return a}
;function Dh(){var a=new mf;(a=a.isAvailable()?new tf(a,"yt.innertube"):null)||(a=new nf("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new hf(a):null;this.g=document.domain||window.location.hostname}
Dh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Ka()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Te(b))}catch(f){return}else e=escape(b);b=this.g;Jc.set(""+a,e,{ka:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Dh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Jc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Dh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Jc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Eh=new Dh;function Fh(a,b,c,d){if(d)return null;d=Eh.get("nextId",!0)||1;var e=Eh.get("requests",!0)||{};e[d]={method:a,request:b,authState:Ch(c),requestTime:Math.round(Eg())};Eh.set("nextId",d+1,86400,!0);Eh.set("requests",e,86400,!0);return d}
function Gh(a){var b=Eh.get("requests",!0)||{};delete b[a];Eh.set("requests",b,86400,!0)}
function Hh(a){var b=Eh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Eg())-d.requestTime)){var e=d.authState,f=Ch(Bh(!1));pb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Eg())),Zg(a,d.method,e,{}));delete b[c]}}Eh.set("requests",b,86400,!0)}}
;function Ih(a){var b=this;this.f=null;a?this.f=a:W("delay_gel_until_config_ready")?Ah()&&(this.f=Yg()):this.f=Yg();og(function(){Hh(b)})}
Ih.prototype.isReady=function(){!this.f&&Ah()&&(this.f=Yg());return!!this.f};
function Zg(a,b,c,d){!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Tf(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",M:c,ta:"JSON",sa:function(){},
ib:d.sa,onSuccess:function(t,r){if(d.onSuccess)d.onSuccess(r)},
ra:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,r){if(d.onError)d.onError(r)},
Hb:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",h=a.f.Wa;h&&(f=h);h=a.f.Xa||!1;var g=Bh(h,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=dh(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),m;if(d.retry&&W("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Fh(b,c,g,h))){var q=e.onSuccess,p=e.ra;e.onSuccess=function(t,r){Gh(m);q(t,r)};
c.ra=function(t,r){Gh(m);p(t,r)}}try{W("use_fetch_for_op_xhr")?rh(k,e):(e.method="POST",e.M||(e.M={}),uh(k,e))}catch(t){if("InvalidAccessError"==t)m&&(Gh(m),m=0),Tf(Error("An extension is blocking network request."));
else throw t;}m&&og(function(){Hh(a)})}
;var Jh=Ka().toString();var Kh;
if(!(Kh=w("ytLoggingTimeDocumentNonce_"))){var Lh;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Mh=Array(16),Nh=new Uint8Array(16);window.crypto.getRandomValues(Nh);for(var Oh=0;Oh<Mh.length;Oh++)Mh[Oh]=Nh[Oh];Lh=Mh;break a}catch(a){}for(var Ph=Array(16),Qh=0;16>Qh;Qh++){for(var Rh=Ka(),Sh=0;Sh<Rh%23;Sh++)Ph[Qh]=Math.random();Ph[Qh]=Math.floor(256*Math.random())}if(Jh)for(var Th=1,Uh=0;Uh<Jh.length;Uh++)Ph[Th%16]=Ph[Th%16]^Ph[(Th-1)%16]/4^Jh.charCodeAt(Uh),Th++;Lh=Ph}for(var Vh=Lh,Wh=
[],Xh=0;Xh<Vh.length;Xh++)Wh.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Vh[Xh]&63));Kh=Wh.join("")}var Yh=Kh;y("ytLoggingTimeDocumentNonce_",Yh);function Zh(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function $h(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
y("yt_logging_screen.getRootVeType",function(a){return M($h(void 0===a?0:a),void 0)});
function ai(){var a=M("csn-to-ctt-auth-info");a||(a={},Lf("csn-to-ctt-auth-info",a));return a}
function bi(a){a=void 0===a?0:a;var b=M(Zh(a));b||0!=a||(W("kevlar_client_side_screens")||W("c3_client_side_screens")?b="UNDEFINED_CSN":b=M("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",bi);function ci(a,b,c){var d=ai();(c=bi(c))&&delete d[c];b&&(d[a]=b)}
y("yt_logging_screen.getCttAuthInfo",function(a){return ai()[a]});
y("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==M(Zh(c))||b!==M($h(c)))ci(a,d,c),Lf(Zh(c),a),Lf($h(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:Yh,clientScreenNonce:a};var f=void 0===f?{}:f;var h={};h.eventTimeMs=Math.round(f.timestamp||Eg());h.foregroundHeartbeatScreenAssociated=e;e=String;if(f.timestamp)var g=-1;else g=w("_lact",window),g=null==g?-1:Math.max(Ka()-g,0);h.context={lastActivityMs:e(g)};W("log_sequence_info_on_gel_web")&&
f.va&&(e=h.context,g=f.va,ah[g]=g in ah?ah[g]+1:0,e.sequence={index:ah[g],groupKey:g},f.Eb&&delete ah[f.va]);(f=f.Db)?(e={},f.videoId?e.videoId=f.videoId:f.playlistId&&(e.playlistId=f.playlistId),Sg[f.token]=e,f=Xg("log_event",f.token)):f=Xg("log_event");f.push(h);Ih&&(Mg.log_event=new Ih);h=Cg("web_logging_max_batch")||100;e=Eg();f.length>=h?Ug():10<=e-Pg&&(Wg(),Pg=e)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function di(){zg.call(this,"button");this.f=null;this.h=[];this.g={}}
z(di,zg);ya(di);l=di.prototype;l.register=function(){U(this,"click",this.X);U(this,"keydown",this.ia);U(this,"keypress",this.ja);Ag(this,"page-scroll",this.Pa)};
l.unregister=function(){V(this,"click",this.X);V(this,"keydown",this.ia);V(this,"keypress",this.ja);ei(this);this.g={};di.w.unregister.call(this)};
l.X=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
l.ia=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=X(this,a))){var d=function(h){var g="";h.tagName&&(g=h.tagName.toLowerCase());return"ul"==g||"table"==g},e;
d(b)?e=b:e=hd(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.cb;else"table"==e&&(f=this.bb);f&&fi(this,a,b,c,x(f,this))}}};
l.Pa=function(){var a=this.g;if(0!=jb(a))for(var b in a){var c=a[b],d=gi(this,c);if(void 0==d||void 0==c)break;hi(this,d,c,!0)}};
function fi(a,b,c,d,e){var f=lg(c),h=9==d.keyCode;if(h||32==d.keyCode||13==d.keyCode)if(d=ii(a,c))if(a=void 0!==d.firstElementChild?d.firstElementChild:dd(d.firstChild),"a"==a.tagName.toLowerCase()){var g=void 0===g?{}:g;var k=void 0===k?"":k;var m=void 0===m?window:m;b=m.location;g=xd(a.href,g)+k;g instanceof Gb||g instanceof Gb||(g="object"==typeof g&&g.L?g.K():String(g),Jb.test(g)||(g="about:invalid#zClosurez"),g=new Gb(Hb,g));b.href=g instanceof Gb&&g.constructor===Gb&&g.g===Ib?g.f:"type_error:SafeUrl"}else bg(a,
"click");else h&&ji(a,b);else f?27==d.keyCode?(ii(a,c),ji(a,b)):e(b,c,d):(g=I(b,T(a,"reverse"))?38:40,d.keyCode==g&&(bg(b,"click"),d.preventDefault()))}
l.ja=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=X(this,a),lg(a)&&c.preventDefault())};
function ii(a,b){var c=T(a,"menu-item-highlight"),d=G(c,b);d&&K(d,c);return d}
function ki(a,b,c){J(c,T(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=T(a,"item-id-"+Ea(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
l.bb=function(a,b,c){var d=ii(this,b),e=If("table",b);b=Sc(document,"td",null,e);d=li(d,b,Sc(document,"td",null,If("tr",e)).length,c);-1!=d&&(ki(this,a,b[d]),c.preventDefault())};
l.cb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=ii(this,b);b=Na(Sc(document,"li",null,b),lg);ki(this,a,b[li(d,b,1,c)]);c.preventDefault()}};
function li(a,b,c,d){var e=b.length;a=Ma(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function mi(a,b){var c=b.iframeMask;c||(c=ad(document,"IFRAME"),c.src='javascript:""',ee(c,T(a,"menu-mask")),ng(c),b.iframeMask=c);return c}
function hi(a,b,c,d){var e=H(b,T(a,"group")),f=!!a.j(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var h=8,g=Rd(b);if(I(b,T(a,"reverse"))){f=8;h=9;g=g.top+"px";try{c.style.maxHeight=g}catch(q){}}I(b,"flip")&&(I(b,T(a,"reverse"))?(f=12,h=13):(f=13,h=12));var k;a.j(b,"button-has-sibling-menu")?k=Ld(e):a.j(b,"button-menu-root-container")&&(k=ni(a,b));C&&!rc("8")&&(k=null);if(k){var m=Rd(k);m=new Dd(-m.top,m.left,m.top,-m.left)}k=new E(0,1);I(b,T(a,"center-menu"))&&(k.x-=Math.round((Pd(c).width-Pd(b).width)/
2));d&&(k.y+=Xc(document).y);if(a=mi(a,b))b=Pd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Ze(e,f,a,h,k,m,197),d&&Fd(a,"position","fixed");Ze(e,f,c,h,k,m,197)}
function ni(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return H(b,c)}return document.body}
l.za=function(a){if(a){var b=X(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=ni(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=mi(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.g[Ff(a).toString()]=b);hi(this,a,b,c);jg("yt-uix-button-menu-before-show",a,b);mg(b);d&&mg(d);
this.N(a,"button-menu-action",!0);J(a,T(this,"active"));b=x(this.ya,this,a,!1);d=x(this.ya,this,a,!0);c=x(this.lb,this,a,void 0);this.f&&X(this,this.f)==X(this,a)||ei(this);R("yt-uix-button-menu-show",a);P(this.h);this.h=[N(document,"click",d),N(document,"contextmenu",b),N(window,"resize",c)];this.f=a}}};
function ji(a,b){if(b){var c=X(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");ng(c);a.N(b,"button-menu-action",!1);var d=mi(a,b),e=Ff(c).toString();delete a.g[e];Q(function(){d&&d.parentNode&&(ng(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=H(b,T(a,"group"));
var f=[T(a,"active")];e&&f.push(T(a,"group-active"));ge(b,f);R("yt-uix-button-menu-hide",b);P(a.h);a.h.length=0}}
l.lb=function(a,b){var c=X(this,a);if(c){b&&(b instanceof Kb?Qb(c,b):gd(c,b));var d=!!this.j(a,"button-menu-fixed");hi(this,a,c,d)}};
function gi(a,b){return H(b.activeButtonNode||b.parentNode,T(a))}
l.ya=function(a,b,c){c=$f(c);var d=H(c,T(this));if(d){d=X(this,d);var e=X(this,a);if(d==e)return}d=H(c,T(this,"menu"));e=d==X(this,a);var f=I(c,T(this,"menu-item")),h=I(c,T(this,"menu-close"));if(!d||e&&(f||h))ji(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=G(T(this,"content"),a))&&gd(a,od(c)),oi(this,d,c))};
function oi(a,b,c){var d=T(a,"menu-item-selected");A(Rc(d,b),function(e){K(e,d)});
J(c.parentNode,d)}
function X(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id");c=c&&F(c);var d=T(a,"menu");c?fe(c,[d,T(a,"menu-external")]):c=G(d,b);b.widgetMenu=c}return b.widgetMenu}
l.isToggled=function(a){return I(a,T(this,"toggled"))};
l.toggle=function(a){if(this.j(a,"button-toggle")){var b=H(a,T(this,"group")),c=T(this,"toggled"),d=I(a,c);if(b&&this.j(b,"button-toggle-group")){var e=this.j(b,"button-toggle-group");A(Rc(T(this),b),function(f){f!=a||"optional"==e&&d?(K(f,c),f.removeAttribute("aria-pressed")):(J(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),je(a,c)}};
l.click=function(a){if(X(this,a)){var b=X(this,a);if(b){var c=gi(this,b);c&&c!=a?(ji(this,c),Q(x(this.za,this,a),1)):lg(b)?ji(this,a):this.za(a)}a.focus()}this.N(a,"button-action")};
function ei(a){a.f&&ji(a,a.f)}
;function pi(a){zg.call(this,a);this.h=null}
z(pi,zg);l=pi.prototype;l.v=function(a){var b=zg.prototype.v.call(this,a);return b?b:a};
l.register=function(){Ag(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
l.dispose=function(){qi(this);pi.w.dispose.call(this)};
l.j=function(a,b){var c=pi.w.j.call(this,a,b);return c?c:(c=pi.w.j.call(this,a,"card-config"))&&(c=w(c))&&c[b]?c[b]:null};
l.show=function(a){var b=this.v(a);if(b){J(b,T(this,"active"));var c=ri(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;si(this,a,c);var d=T(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.N(b,"card-action",a);this.h=a;ng(c);Q(x(function(){e||(mg(c),R("yt-uix-card-show",b,a,c));ti(c);J(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function ri(a,b,c){var d=c||b,e=T(a,"card");c=ui(a,d);var f=F(T(a,"card")+Ff(d));if(f)return a=G(T(a,"card-body"),f),fd(a,c)||(bd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=T(a,"card")+Ff(d);ee(f,e);(d=a.j(d,"card-class"))&&fe(f,d.split(/\s+/));d=document.createElement("div");d.className=T(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");h.className=
T(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;bd(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function si(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=G(T(a,"anchor"),b)||b,f=a.j(b,"position"),h=!!a.j(b,"force-position"),g=a.j(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&k){var q=13;var p=8}else m&&!k?(q=12,p=9):!m&&k?(q=9,p=12):(q=8,p=13);var t=Sd(document.body);f=Sd(b);t!=f&&(q^=4);if(d){f=b.offsetHeight/2-12;var r=new E(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new E(b.offsetWidth+6,-12);var u=Pd(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);u=null;h||(u=10);b=T(a,"card-flip");a=T(a,"card-reverse");he(c,b,m);he(c,a,k);u=Ze(e,q,c,p,r,null,u);!h&&u&&(u&48&&(m=!m,q^=4,p^=4),u&192&&(k=!k,q^=1,p^=1),he(c,b,m),he(c,a,k),Ze(e,q,c,p,r));g&&(e=parseInt(c.style.top,10),h=Xc(document).y,Fd(c,"position","fixed"),Fd(c,"top",e-h+"px"));t&&(c.style.right="",e=Rd(c),e.left=e.left||parseInt(c.style.left,10),h=Vc(window),c.style.left="",c.style.right=h.width-
e.left-e.width+"px");e=G("yt-uix-card-body-arrow",c);h=G("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!t&&m||t&&!m?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";k=G("yt-uix-card-arrow",c);m=G("yt-uix-card-arrow-background",c);k&&m&&(c="right"==d?Pd(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
l.hide=function(a){if(a=this.v(a)){var b=F(T(this,"card")+Ff(a));b&&(K(a,T(this,"active")),K(b,T(this,"card-visible")),ng(b),this.h=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(bd(b.cardMask),b.cardMask=null))}};
function qi(a){a.h&&a.hide(a.h)}
l.kb=function(a,b){var c=this.v(a);if(c){if(b){var d=ui(this,c);if(!d)return;b instanceof Kb?Qb(d,b):gd(d,b)}I(c,T(this,"active"))&&(c=ri(this,a,c),si(this,a,c),mg(c),ti(c))}};
l.isActive=function(a){return(a=this.v(a))?I(a,T(this,"active")):!1};
function ui(a,b){var c=b.cardContentNode;if(!c){var d=T(a,"content"),e=T(a,"card-content");(c=(c=a.j(b,"card-id"))?F(c):G(d,b))||(c=document.createElement("div"));var f=c;K(f,d);J(f,e);b.cardContentNode=c}return c}
function ti(a){var b=a.cardMask;b||(b=ad(document,"IFRAME"),b.src='javascript:""',fe(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function vi(){zg.call(this,"kbd-nav")}
var wi;z(vi,zg);ya(vi);l=vi.prototype;l.register=function(){U(this,"keydown",this.da);Ag(this,"yt-uix-kbd-nav-move-in",this.pa);Ag(this,"yt-uix-kbd-nav-move-in-to",this.eb);Ag(this,"yt-uix-kbd-move-next",this.qa);Ag(this,"yt-uix-kbd-nav-move-to",this.P)};
l.unregister=function(){V(this,"keydown",this.da);P(wi)};
l.da=function(a,b,c){var d=c.keyCode;if(a=H(a,T(this)))switch(d){case 13:case 32:this.pa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=le(a,"kbdNavMoveOut");!c;){c=H(a.parentElement,T(this));if(!c)break a;c=le(c,"kbdNavMoveOut")}c=F(c);this.P(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&I(a,T(this,"list")))switch(d){case 40:this.qa(b,a);break;case 38:d=document.activeElement==a,a=xi(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),yi(this,a[b]))}c.preventDefault()}};
l.pa=function(a){var b=le(a,"kbdNavMoveIn");b=F(b);zi(this,a,b);this.P(b)};
l.eb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}zi(this,d,a);this.P(a)};
l.P=function(a){if(a)if(ld(a))a.focus();else{var b=hd(a,function(c){return ed(c)?ld(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function zi(a,b,c){if(b&&c)if(J(c,T(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,ke&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+Tb("kbdNavMoveOut"),b)}}
l.qa=function(a,b){var c=document.activeElement==b,d=xi(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),yi(this,d[c]))};
function yi(a,b){if(b){var c=qd(b,"LI");c&&(J(c,T(a,"highlight")),wi=N(b,"blur",x(function(d){K(d,T(this,"highlight"));P(wi)},a,c)))}}
function xi(a){if("UL"!=a.tagName.toUpperCase())return[];a=Na(cd(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Na(Oa(a,function(b){return lg(b)?hd(b,function(c){return ed(c)?ld(c):!1}):!1}),function(b){return!!b})}
;function Ai(){zg.call(this,"menu");this.g=this.f=null;this.h={};this.m={};this.i=null}
z(Ai,zg);ya(Ai);function Bi(a){return(a=Ci(a))?Di(Ai.u(),a):null}
function Ci(a){var b=Ai.u();if(I(a,T(b)))return a;var c=b.v(a);return c?c:H(a,T(b,"content"))==b.f?b.g:null}
l=Ai.prototype;l.register=function(){U(this,"click",this.ba);U(this,"mouseenter",this.Na);Ag(this,"page-scroll",this.Qa);Ag(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.v(a);Ei(this,a)});
this.i=new L};
l.unregister=function(){V(this,"click",this.ba);this.g=this.f=null;P(bb(kb(this.h)));this.h={};ib(this.m,function(a){bd(a)},this);
this.m={};Se(this.i);this.i=null;Ai.w.unregister.call(this)};
l.ba=function(a,b,c){a&&(b=Fi(this,a),!b.disabled&&Hf(c.target,b)&&Gi(this,a))};
l.Na=function(a,b,c){a&&I(a,T(this,"hover"))&&Hf(c.target,Fi(this,a))&&Gi(this,a,!0)};
l.Qa=function(){this.f&&this.g&&Hi(this,this.g,this.f)};
function Hi(a,b,c){var d=Ii(a,b);if(d){var e=Pd(c);if(e instanceof Nc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Od(e,!0);d.style.height=Od(f,!0)}c==a.f&&(e=9,f=8,I(b,T(a,"reversed"))&&(e^=1,f^=1),I(b,T(a,"flipped"))&&(e^=4,f^=4),a=new E(0,1),d&&Ze(b,e,d,f,a,null,197),Ze(b,e,c,f,a,null,197))}
function Gi(a,b,c){Ji(a,b)&&!c?Ei(a,b):(Ki(a,b),!a.f||Hf(b,a.f)?a.Aa(b):af(a.i,x(a.Aa,a,b)))}
l.Aa=function(a){if(a){var b=Di(this,a);if(b){jg("yt-uix-menu-before-show",a,b);this.f?Hf(a,this.f)||Ei(this,this.g):(this.g=a,this.f=b,I(a,T(this,"sibling-content"))||(bd(b),document.body.appendChild(b)),b.style.minWidth=Fi(this,a).offsetWidth-2+"px");var c=Ii(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);K(b,T(this,"content-hidden"));Hi(this,a,b);fe(Fi(this,a),[T(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);Li(b);Mi(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=x(this.mb,this,a),e=x(this.Za,this,a);c=Ea(a).toString();this.h[c]=[N(b,"click",e),N(document,"click",d)];I(a,T(this,"indicate-selected"))&&(d=x(this.ab,this,a),this.h[c].push(N(b,"click",d)));I(a,T(this,"hover"))&&(a=x(this.Oa,this,a),this.h[c].push(N(document,"mousemove",a)))}}};
l.Oa=function(a,b){var c=$f(b);c&&(Hf(c,Fi(this,a))||Ni(this,c)||Oi(this,a))};
l.mb=function(a,b){var c=$f(b);if(c){if(Ni(this,c)){var d=H(c,T(this,"content")),e=qd(c,"LI");e&&d&&fd(d,e)&&jg("yt-uix-menu-item-clicked",c);c=H(c,T(this,"close-on-select"));if(!c)return;d=Ci(c)}Ei(this,d||a)}};
function Ki(a,b){if(b){var c=H(b,T(a,"content"));c&&A(Rc(T(a),c),function(d){!Hf(d,b)&&Ji(this,d)&&Oi(this,d)},a)}}
function Ei(a,b){if(b){var c=[];c.push(b);var d=Di(a,b);d&&(d=Rc(T(a),d),d=Ua(d),c=c.concat(d),A(c,function(e){Ji(this,e)&&Oi(this,e)},a))}}
function Oi(a,b){if(b){var c=Di(a,b);ge(Fi(a,b),[T(a,"trigger-selected"),"yt-uix-button-toggled"]);J(c,T(a,"content-hidden"));var d=Di(a,b);d&&Tc(d,{"aria-expanded":"false"});(d=Ii(a,b))&&d.parentNode&&bd(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.i&&a.i.F("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=Ea(b).toString();P(a.h[c]);delete a.h[c]}}
l.Za=function(a,b){var c=$f(b);c&&Pi(this,a,c)};
l.ab=function(a,b){var c=$f(b);if(c){var d=Fi(this,a);if(d&&(c=qd(c,"LI")))if(c=od(c).trim(),d.hasChildNodes()){var e=di.u();(d=G(T(e,"content"),d))&&gd(d,c)}else gd(d,c)}};
function Mi(a,b){var c=Di(a,b);if(c){A(c.children,function(e){"LI"==e.tagName&&Tc(e,{role:"menuitem"})});
Tc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ea(c),c.id=d);(c=Fi(a,b))&&Tc(c,{"aria-controls":d})}}
function Pi(a,b,c){var d=Di(a,b);d&&I(b,T(a,"checked"))&&(a=qd(c,"LI"))&&(a=G("yt-ui-menu-item-checked-hid",a))&&(A(Rc("yt-ui-menu-item-checked",d),function(e){ie(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),ie(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Ji(a,b){var c=Di(a,b);return c?!I(c,T(a,"content-hidden")):!1}
function Li(a){A(Sc(document,"UL",null,a),function(b){b.tabIndex=0;var c=vi.u();fe(b,[T(c),T(c,"list")])})}
function Di(a,b){var c=Cf(b,"menu-content-id");return c&&(c=F(c))?(fe(c,[T(a,"content"),T(a,"content-external")]),c):b==a.g?a.f:G(T(a,"content"),b)}
function Ii(a,b){var c=Ea(b).toString(),d=a.m[c];if(!d){d=ad(document,"IFRAME");d.src='javascript:""';var e=[T(a,"mask")];A(de(b),function(f){e.push(f+"-mask")});
fe(d,e);a.m[c]=d}return d||null}
function Fi(a,b){return G(T(a,"trigger"),b)}
function Ni(a,b){return Hf(b,a.f)||Hf(b,a.g)}
;function Qi(){pi.call(this,"clickcard");this.f={};this.g={}}
z(Qi,pi);ya(Qi);l=Qi.prototype;l.register=function(){Qi.w.register.call(this);U(this,"click",this.Z,"target");U(this,"click",this.Y,"close")};
l.unregister=function(){Qi.w.unregister.call(this);V(this,"click",this.Z,"target");V(this,"click",this.Y,"close");for(var a in this.f)P(this.f[a]);this.f={};for(a in this.g)P(this.g[a]);this.g={}};
l.Z=function(a,b,c){c.preventDefault();b=qd(c.target,"button");if(!b||!b.disabled){if(b=this.j(a,"card-target"))a=document,a="string"===typeof b?a.getElementById(b):b;b=this.v(a);this.j(b,"disabled")||(I(b,T(this,"active"))?(this.hide(a),K(b,T(this,"active"))):(this.show(a),J(b,T(this,"active"))))}};
l.show=function(a){Qi.w.show.call(this,a);var b=this.v(a),c=Ea(a).toString();if(!Cf(b,"click-outside-persists")){if(this.f[c])return;b=N(document,"click",x(this.aa,this,a));var d=N(window,"blur",x(this.aa,this,a));this.f[c]=[b,d]}a=N(window,"resize",x(this.kb,this,a,void 0));this.g[c]=a};
l.hide=function(a){Qi.w.hide.call(this,a);a=Ea(a).toString();var b=this.f[a];b&&(P(b),this.f[a]=null);if(b=this.g[a])P(b),delete this.g[a]};
l.aa=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=H(b.target,c)||H(Ci(b.target),c));(d=d||H(document.activeElement,c)||(document.activeElement?H(Ci(document.activeElement),c):null))||this.hide(a)};
l.Y=function(a){(a=H(a,T(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Ri(){pi.call(this,"hovercard")}
z(Ri,pi);ya(Ri);l=Ri.prototype;l.register=function(){U(this,"mouseenter",this.la,"target");U(this,"mouseleave",this.na,"target");U(this,"mouseenter",this.ma,"card");U(this,"mouseleave",this.oa,"card")};
l.unregister=function(){V(this,"mouseenter",this.la,"target");V(this,"mouseleave",this.na,"target");V(this,"mouseenter",this.ma,"card");V(this,"mouseleave",this.oa,"card")};
l.la=function(a){if(Si!=a){Si&&(this.hide(Si),Si=null);var b=x(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10);b=Q(b,-1<c?c:200);Af(a,"card-timer",b.toString());Si=a;a.alt&&(Af(a,"card-alt",a.alt),a.alt="");a.title&&(Af(a,"card-title",a.title),a.title="")}};
l.na=function(a){var b=parseInt(this.j(a,"card-timer"),10);window.clearTimeout(b);this.v(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;Q(x(this.Ra,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
l.Ra=function(a){this.v(a).isCardHidable&&(this.hide(a),Si=null)};
l.ma=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
l.oa=function(a){a&&this.hide(a.cardTargetNode)};
var Si=null;function Ti(a,b,c,d,e,f){this.f=a;this.s=null;this.h=G("yt-dialog-fg",this.f)||this.f;if(a=G("yt-dialog-title",this.h)){var h="yt-dialog-title-"+Ea(this.h);a.setAttribute("id",h);this.h.setAttribute("aria-labelledby",h)}this.h.setAttribute("tabindex","-1");this.wa=G("yt-dialog-focus-trap",this.f);this.xa=!1;this.i=new L;this.C=[];this.C.push(ag(this.f,x(this.gb,this)));this.C.push(N(this.wa,"focus",x(this.Ha,this),!0));Ui(this);this.Ba=b;this.Da=c;this.Ca=d;this.H=e;this.Ea=f;this.m=this.l=null}
var Vi={LOADING:"loading",yb:"content",zb:"working"};function Wi(a,b){a.R()||a.i.subscribe("pre-all",b)}
function Ui(a){a=G("yt-dialog-fg-content",a.f);var b=[];ib(Vi,function(c){b.push("yt-dialog-show-"+c)});
ge(a,b);J(a,"yt-dialog-show-content")}
l=Ti.prototype;
l.show=function(){if(!this.R()){this.s=document.activeElement;if(!this.Ca){this.g||(this.g=F("yt-dialog-bg"),this.g||(this.g=ad(document,"div"),this.g.id="yt-dialog-bg",ee(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Vc(a).height,Wc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";mg(this.g)}this.ha();c=Xi(this);Yi(c);this.l=N(document,"keydown",x(this.Ya,this));c=this.f;d=gg("player-added",this.ha,this);Af(c,"player-ready-pubsub-key",d);this.Da&&(this.m=N(document,"click",x(this.jb,this)));mg(this.f);this.h.setAttribute("tabindex","0");Zi(this);this.H||J(document.body,"yt-dialog-active");ei(di.u());qi(Qi.u());qi(Ri.u());R("yt-ui-dialog-show-complete",this)}};
function $i(){return Qa(Rc("yt-dialog"),function(a){return lg(a)})}
l.ha=function(){if(!this.Ea){var a=this.f;he(document.body,"hide-players",!0);a&&he(a,"preserve-players",!0)}};
function Xi(a){var b=Sc(document,"iframe",null,a.f);A(b,function(c){var d=Cf(c,"onload");d&&(d=w(d))&&N(c,"load",d);if(d=Cf(c,"src"))c.src=d},a);
return Ua(b)}
function Yi(a){A(document.getElementsByTagName("iframe"),function(b){-1==Ma(a,b)&&J(b,"iframe-hid")})}
function aj(){A(Rc("iframe-hid"),function(a){K(a,"iframe-hid")})}
l.gb=function(a){a=a.currentTarget;a.disabled||(a=Cf(a,"action")||"",this.dismiss(a))};
l.dismiss=function(a){if(!this.R()){this.i.F("pre-all");this.i.F("pre-"+a);ng(this.f);qi(Qi.u());qi(Ri.u());this.h.setAttribute("tabindex","-1");$i()||(ng(this.g),this.H||K(document.body,"yt-dialog-active"),Jf(),aj());this.l&&(P(this.l),this.l=null);this.m&&(P(this.m),this.m=null);var b=this.f;if(b){var c=Cf(b,"player-ready-pubsub-key");c&&(ig(c),b&&(b.dataset?delete b.dataset[Bf("player-ready-pubsub-key")]:b.removeAttribute("data-player-ready-pubsub-key")))}this.i.F("post-all");R("yt-ui-dialog-hide-complete",
this);"cancel"==a&&R("yt-ui-dialog-cancelled",this);this.i&&this.i.F("post-"+a);this.s&&this.s.focus()}};
l.setTitle=function(a){gd(G("yt-dialog-title",this.f),a)};
l.Ya=function(a){Q(x(function(){this.Ba||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&I(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
l.jb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
l.R=function(){return this.xa};
l.dispose=function(){lg(this.f)&&this.dismiss("dispose");P(this.C);this.C.length=0;Q(x(function(){this.s=null},this),0);
this.wa=this.h=null;this.i.dispose();this.i=null;this.xa=!0};
l.Ha=function(a){a.stopPropagation();Zi(this)};
function Zi(a){Q(x(function(){this.h&&this.h.focus()},a),0)}
y("yt.ui.Dialog",Ti);function bj(a,b,c,d,e,f){this.g=a;this.h=b;this.m=c;this.i=d;this.s=e;this.l=f;this.f=null}
bj.$inject="$compile $controller $http $q $rootScope $templateCache".split(" ");function cj(a,b,c){this.l=a;this.g=b;this.i=c;this.f=null;this.h=!1}
cj.prototype.show=function(){Sc(document,"body",void 0,void 0)[0].appendChild(this.g);this.f=new Ti(this.g,!1);Wi(this.f,x(function(){this.h||(this.f=null,this.dismiss("dialogclosed"))},this));
this.f.show()};
function dj(a){a.h||(a.h=!0,a.f&&(a.f.dispose(),a.f=null),a.i&&(a.i.$destroy(),a.i=null),a.g&&(bd(a.g),a.g=null))}
cj.prototype.close=function(a){dj(this);this.l.resolve(a)};
cj.prototype.dismiss=function(a){dj(this);this.l.reject(a)};
function ej(a,b){return a.m.get(b,{cache:a.l}).then(function(c){return c.data})}
bj.prototype.create=function(a,b,c){var d=this.i.defer(),e={result:d.promise,close:x(d.resolve,d),dismiss:x(d.reject,d)};ej(this,a).then(x(function(f){this.f&&(this.f.dismiss("overridden"),this.f=null);var h=this.s.$new();c&&sb(h,c);this.h(b,{$scope:h,dialogInstance:e});f=angular.element(f);f=this.g(f)(h)[0];h=new cj(d,f,h);e.close=x(h.close,h);e.dismiss=x(h.dismiss,h);h.show();this.f=h},this),function(f){d.reject(f)});
return e};function fj(a){Re.call(this);a=x(a.$apply,a,x(a.$destroy,a));this.i?a():(this.h||(this.h=[]),this.h.push(a))}
z(fj,Re);fj.$inject=["$rootScope"];function gj(){return{request:function(a){a.data=a.data||{};a.params&&sb(a.data,a.params);var b=M("XSRF_FIELD_NAME");a.data[b]||(a.data[b]=M("XSRF_TOKEN"));return a}}}
;function hj(a){if(window.angular)return a()}
function ij(a){a.interceptors.push(gj)}
ij.$inject=["$httpProvider"];hj(function(){return angular.module("util",[]).config(ij).service("DisposeService",fj)});function jj(){zg.call(this,"languagepicker");this.f={}}
z(jj,zg);ya(jj);l=jj.prototype;l.register=function(){U(this,"click",this.ea,"menu-item");U(this,"keyup",this.ua,"search-input");U(this,"keydown",this.ga,"search-input");U(this,"blur",this.fa,"search-input");U(this,"focus",this.ca);Ag(this,"yt-uix-button-menu-before-show",this.Ma);Ag(this,"yt-uix-button-menu-hide",this.La)};
l.unregister=function(){V(this,"click",this.ea,"menu-item");V(this,"keyup",this.ua,"search-input");V(this,"keydown",this.ga,"search-input");V(this,"blur",this.fa,"search-input");V(this,"focus",this.ca);P(kb(this.f));this.f={};jj.w.unregister.call(this)};
l.Ma=function(a){if(I(a,"yt-languagepicker-button")){var b=Ea(a);a=N(a,"keydown",x(this.Ka,this));this.f[b]=a}};
l.La=function(a){I(a,"yt-languagepicker-button")&&(a=Ea(a),P(this.f[a]),delete this.f[a])};
function kj(a,b){return Ra(b,function(c){return!Ra(a,function(d){return 0!=d.lastIndexOf(c,0)})})}
function lj(a,b,c){A(a,function(d){var e=le(d,"value"),f=mj(d);kg(d,e!=c&&f&&kj(f,b))})}
function mj(a){if("undefined"===typeof a.f){var b=le(a,"searchTerms");b?(a.f=[],A(b.split(";"),function(c){Va(a.f,nj(c))})):a.f=nj(od(a))}return a.f}
function nj(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function oj(a,b){var c=di.u(),d=gi(c,a);ii(c,a);ki(c,d,b)}
l.ua=function(a){var b=this.v(a),c=G(T(this,"search-result"),b),d=nj(a.value);if(d){var e=cd(c);a=le(b,"fallbackOption");lj(e,d,a);d=Sa(e,lg);a=c.querySelector('li[data-value="'+a+'"]');kg(c,!(!d&&!a));d?oj(b,d):a&&(mg(a),oj(b,a))}else kg(c,!1)};
l.ga=function(a,b,c){b=di.u();a=this.v(a);var d=gi(b,a);switch(c.keyCode){case 13:case 9:(b=ii(b,a))&&bg(void 0!==b.firstElementChild?b.firstElementChild:dd(b.firstChild),"click");c.preventDefault();break;case 27:ii(b,a);ji(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
l.ea=function(a){var b=le(a,"value"),c=this.v(a),d=le(c,"languagepickerInputId");d=F(d);d.value=b;bg(d,"change");(d=G(T(this,"suggestions"),c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=G(T(this,"selected"),c))&&bd(b),a=a.cloneNode(!0),J(a,T(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function pj(a,b){var c=di.u(),d=a.v(b);gi(c,d).focus()}
l.fa=function(a){pj(this,a)};
l.ca=function(a,b,c){"INPUT"!=c.target.tagName&&pj(this,a)};
l.Ka=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=di.u();b=X(c,b);b=G(T(this,"search-input"),b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var qj=jj.u(),rj=di.u();function sj(){return{require:"ngModel",link:function(a,b,c,d){d.$render=function(){d.$viewValue&&a.$evalAsync(Ja(tj,a,b,d.$viewValue))};
a.select=function(e){d.$setViewValue(e.code)};
a.menuId=Ea(b[0])},
scope:{suggestedValues:"=",allowedValues:"="},templateUrl:"language_picker.html"}}
function tj(a,b,c){a=G(T(rj,"content"),b[0]);var d=G(T(rj,"menu-item"),G(T(qj,"menu-item-"+c),b[0]));G(T(qj,"hidden-input"),b[0]).value=c;d=od(d);gd(a,d);a=G(T(qj,"suggestions"),b[0]);b=T(rj,"menu-item-selected");(d=G(b,a))&&K(d,b);(c=G(T(qj,"menu-item-"+c),a))&&J(c,b)}
var uj=hj(function(){var a=angular.module("yt.www.creator.angular.directives.languagePicker",[]);a.directive("languagePicker",sj);return a});function vj(a,b){this.f=b;this.translationLanguage=a.translationLanguage;this.originalLanguage=a.originalLanguage;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];a.dialogCtrl=this}
y("yt.www.translationeditor.angular.AddTranslationDialogCtrl",vj);vj.$inject=["$scope","dialogInstance"];vj.prototype.cancel=function(){this.f.dismiss("cancel")};
vj.prototype.save=function(){this.f.close({translationLanguage:this.translationLanguage})};
vj.prototype.cancel=vj.prototype.cancel;vj.prototype.save=vj.prototype.save;function wj(a,b){this.f=b;this.originalLanguage=a.originalLanguage;this.showDefaultLanguageForNewUploadsCheckbox=a.showDefaultLanguageForNewUploadsCheckbox;this.defaultForNewUploads=!1;this.translationLanguage=null;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];a.dialogCtrl=this}
y("yt.www.translationeditor.angular.SetOriginalLanguageAndAddTranslationDialogCtrl",wj);wj.$inject=["$scope","dialogInstance"];wj.prototype.g=function(){return null!=this.originalLanguage&&null!=this.translationLanguage&&this.originalLanguage!=this.translationLanguage};
wj.prototype.cancel=function(){this.f.dismiss("cancel")};
wj.prototype.save=function(){this.f.close({originalLanguage:this.originalLanguage,translationLanguage:this.translationLanguage,defaultForNewUploads:this.defaultForNewUploads})};
wj.prototype.canSave=wj.prototype.g;wj.prototype.cancel=wj.prototype.cancel;wj.prototype.save=wj.prototype.save;function xj(a,b){this.f=b;this.originalLanguage=a.originalLanguage;this.showDefaultLanguageForNewUploadsCheckbox=a.showDefaultLanguageForNewUploadsCheckbox;this.defaultForNewUploads=!1;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];this.g=a.existingTranslationLanguages||{};a.dialogCtrl=this}
y("yt.www.translationeditor.angular.SetOriginalLanguageDialogCtrl",xj);xj.$inject=["$scope","dialogInstance"];xj.prototype.h=function(){return this.originalLanguage in this.g};
xj.prototype.cancel=function(){this.f.dismiss("cancel")};
xj.prototype.save=function(){this.f.close({originalLanguage:this.originalLanguage,defaultForNewUploads:this.defaultForNewUploads})};
xj.prototype.languageCollidesWithTranslation=xj.prototype.h;xj.prototype.cancel=xj.prototype.cancel;xj.prototype.save=xj.prototype.save;var yj=Date.now(),zj=Date.now();function Aj(){var a=yj+(Date.now()-zj);return""+(a-100*Math.floor(a%1E3/100)-1E5*Math.floor(a%1E6/1E5))}
var Of={o:"U"},Bj=Nf().earst;void 0!==Bj&&(yj=Bj,zj=Date.now());function Cj(a){this.URL="/upload_defaults_ajax";this.f=a}
Cj.$inject=["$http"];function Dj(a,b){var c={action_set_metadata_language:"1",ch:M("userExternalId"),metadata_language:b},d={};void 0!==(void 0!==Nf().earst?Aj():Nf().ar)&&(d.ar=void 0!==Nf().earst?Aj():Nf().ar);void 0!==Nf().nv&&(d.nv=Nf().nv);Object.assign(c,d);c.o=Nf().o;a.f.post(a.URL,c)}
;function Y(a,b,c,d,e){this.C=b;this.h=c;this.l=d;this.s=e;this.original=this.creatorTranslationSource=null;this.translations={};this.language=null;this.translatedLanguageList=[];this.errors=null;this.g=[];this.f=[];this.S={};this.m=new xf;if(d.f)throw Error("You can only have one TranslationEditorCtrl per app!");d.f=this;b.$on("$destroy",function(){d.f=null});
b.$watch("transEditor.translations",x(function(f,h){null!=this.language&&this.m.add(this.language);!h||angular.equals(h,{})||angular.equals(f,h)||(Ej(this),Fj(this.l))},this),!0);
b.$watch("transEditor.original.language",x(function(f,h){h&&!angular.equals(f,h)&&Fj(this.l)},this),!0)}
y("yt.www.translationeditor.angular.TranslationEditorCtrl",Y);Y.$inject=["$controller","$scope","DialogService","TranslationEditorService","UploadDefaultsAjaxService"];l=Y.prototype;l.Ja=function(){return this.original&&this.original.language?this.i(this.original.language):""};
l.hb=function(){var a={},b;for(b in this.translations)a[b]=!0;this.h.create("set_original_language_dialog.html","SetOriginalLanguageDialogCtrl",{showDefaultLanguageForNewUploadsCheckbox:this.C.showDefaultLanguageForNewUploadsCheckbox,originalLanguage:this.original.language,languagePickerSuggestions:this.g,languagePickerAllowedValues:this.f,existingTranslationLanguages:a}).result.then(x(function(c){c.originalLanguage in this.translations&&(delete this.translations[c.originalLanguage],this.language==
c.originalLanguage&&(this.language=null));this.original.language=c.originalLanguage;R("translation-editor-original-language-selected",c.originalLanguage);c.defaultForNewUploads&&Dj(this.s,c.originalLanguage)},this))};
l.fb=function(){if(this.original.language){var a=this.h.create("add_translation_dialog.html","AddTranslationDialogCtrl",{originalLanguage:this.original.language,languagePickerSuggestions:this.g,languagePickerAllowedValues:this.f});a.result.then(x(function(b){Gj(this,b.translationLanguage)},this))}else a=this.h.create("set_original_and_add_translation_dialog.html","SetOriginalLanguageAndAddTranslationDialogCtrl",{showDefaultLanguageForNewUploadsCheckbox:this.C.showDefaultLanguageForNewUploadsCheckbox,
originalLanguage:this.original.language,languagePickerSuggestions:this.g,languagePickerAllowedValues:this.f}),a.result.then(x(function(b){this.original.language=b.originalLanguage;R("translation-editor-original-language-selected",b.originalLanguage);Gj(this,b.translationLanguage);b.defaultForNewUploads&&Dj(this.s,b.originalLanguage)},this))};
function Gj(a,b){b in a.translations||(a.translations[b]={language:"",title:null,description:""},null!=a.creatorTranslationSource&&(a.translations[b].source=a.creatorTranslationSource),Ej(a),Fj(a.l));a.language=b}
l.Fa=function(){this.language&&(delete this.translations[this.language],R("translation-editor-translated-language-deleted",this.language),this.language=null)};
l.Ia=function(){if(null==this.errors||angular.equals(this.errors,{}))return"";var a=Oa(lb(this.errors),x(this.i,this));Ya(a);return a.join(", ")};
Y.prototype.getLanguagesWithErrorsAsString=Y.prototype.Ia;function Ej(a){a.translatedLanguageList=[];for(var b in a.translations)a.translatedLanguageList.push({code:b,name:a.i(b)});ab(a.translatedLanguageList)}
Y.prototype.i=function(a){return a&&a in this.S?this.S[a]:""};
function Hj(a,b){b.creator_translation_source&&(a.creatorTranslationSource=b.creator_translation_source);b.original?a.original=b.original:a.original={language:"",title:null,description:null};a.translations={};angular.forEach(b.translation,function(c){this.translations[c.language]=c},a);
a.f=b.allowed_language;a.g=b.suggested_language;a.S={};angular.forEach(b.allowed_language,function(c){this.S[c.code]=c.name},a);
Ej(a)}
Y.prototype.H=function(){return this.language&&this.translations&&this.creatorTranslationSource&&this.translations[this.language].source!=this.creatorTranslationSource&&this.m.contains(this.language)?!0:!1};
Y.prototype.getOriginalLanguageName=Y.prototype.Ja;Y.prototype.onClickOriginalLanguage=Y.prototype.hb;Y.prototype.onClickAddTranslation=Y.prototype.fb;Y.prototype.deleteTranslation=Y.prototype.Fa;Y.prototype.getSourceWarningVisibility=Y.prototype.H;function Ij(){return{controller:Y,templateUrl:"translation_editor.html",controllerAs:"transEditor",require:"?ngModel",transclude:!0,scope:{initFromBase64Json:"@",initFromYtConfig:"@",showDefaultLanguageForNewUploadsCheckbox:"@"},link:function(a,b,c,d,e){var f=a.transEditor;a.$watch("transEditor.language",function(){R("translation-editor-translated-language-selected",f.language)});
a.initFromYtConfig?(c=M(a.initFromYtConfig),Hj(f,c)):a.initFromBase64Json&&(c=angular.fromJson(zc(Ec(a.initFromBase64Json))),Hj(f,c));d&&a.$watch("[transEditor.original.language, transEditor.translations]",function(){var h=angular.copy({metadata_language:f.original.language,translations:f.translations});angular.forEach(h.translations,function(g){delete g.source});
d.$setViewValue(h)},!0);
e(a,function(h){b.append(h)})}}}
;function Z(a,b){this.s=a;this.m=b;this.g=this.f=null}
Z.$inject=["$rootScope","$timeout"];Z.prototype.C=function(){return this.f?{original:this.f.original,translations:this.f.translations}:null};
Z.prototype.h=function(){return this.f?this.f.language:null};
Z.prototype.i=function(a){this.f&&this.s.$apply(x(function(){this.f.errors=a},this))};
Z.prototype.l=function(a){this.g=a};
function Fj(a){a.g&&a.m(x(a.g,a),0,!1)}
;function Jj(a){return{templateUrl:"translation_menu.html",scope:{defaultText:"@",languageList:"=",errors:"=",onAddTranslation:"&"},require:"ngModel",link:function(b,c,d,e){function f(){g();a(h)}
function h(){var p=m.querySelector('li[data-value="'+e.$viewValue+'"]');k&&p&&Pi(Ai.u(),k,p)}
function g(){e.$viewValue?(b.selectedText="Invalid value: "+e.$viewValue,b.languageList&&angular.forEach(b.languageList,function(p){p.code==e.$viewValue&&(b.selectedText=p.name)})):b.selectedText=d.defaultText}
var k=Ci(G("translation-editor-translation-menu-button",c[0])),m=Bi(k);b.$watch("languageList",f);e.$render=f;var q=[];q.push(gg("yt-uix-menu-item-clicked",function(p){if((p=qd(p,"LI"))&&fd(m,p)&&me(p)){var t=le(p,"value");b.$apply(function(){e.$setViewValue(t);g()})}},this));
c.on("$destroy",function(){ig(q)})}}}
Jj.$inject=["$timeout"];var Kj=hj(function(){var a=angular.module("yt.www.translationeditor.angular.translationeditor",[uj.name]);a.directive("translationEditor",Ij);a.directive("translationMenu",Jj);a.controller("TranslationEditorCtrl",Y);a.controller("SetOriginalLanguageDialogCtrl",xj);a.controller("AddTranslationDialogCtrl",vj);a.controller("SetOriginalLanguageAndAddTranslationDialogCtrl",wj);a.service("TranslationEditorService",Z);a.service("UploadDefaultsAjaxService",Cj);a.service("DialogService",bj);return a});y("yt.www.translationeditor.angular.bootstrap",function(a){var b=[Kj.name],c=angular.element(a).injector();c||(c=angular.bootstrap(a,b));return c.get("TranslationEditorService")});
y("yt.www.translationeditor.angular.TranslationEditorService",Z);Z.prototype.getSelectedLanguage=Z.prototype.h;Z.prototype.setOnChangeCallback=Z.prototype.l;Z.prototype.setErrors=Z.prototype.i;Z.prototype.getData=Z.prototype.C;}).call(this);

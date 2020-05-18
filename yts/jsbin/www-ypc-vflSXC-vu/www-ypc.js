(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ca(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function la(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}
var ma="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function na(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var oa=na(this);function pa(a,b){if(b){for(var c=oa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ma(c,d,{configurable:!0,writable:!0,value:f})}}
function qa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
pa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
pa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function ra(){ra=function(){};
oa.Symbol||(oa.Symbol=sa)}
function ta(a,b){this.f=a;ma(this,"description",{configurable:!0,writable:!0,value:b})}
ta.prototype.toString=function(){return this.f};
var sa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ta("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ua(){ra();var a=oa.Symbol.iterator;a||(a=oa.Symbol.iterator=oa.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ma(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return va(aa(this))}});
ua=function(){}}
function va(a){ua();a={next:a};a[oa.Symbol.iterator]=function(){return this};
return a}
function wa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)wa(d,e)&&(a[e]=d[e])}return a};
pa("Object.assign",function(a){return a||xa});
pa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
pa("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!wa(k,g)){var l=new c;ma(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p["delete"](k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!wa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&wa(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&wa(k,g)&&wa(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&wa(k,g)&&wa(k[g],this.f)?delete k[g][this.f]:!1};
return b});
var ya=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=da(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
pa("Reflect.construct",function(){return ya});
pa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==qa(this,b,"includes").indexOf(b,c||0)}});
pa("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return va(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var p=h.g[l];if(p&&wa(h.g,l))for(var q=0;q<p.length;q++){var t=p[q];if(k!==k&&t.key!==t.key||k===t.key)return{id:l,list:p,index:q,M:t}}return{id:l,list:p,index:-1,M:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=ba(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(ba([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
ua();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.M?l.M.value=k:(l.M={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.M),this.f.previous.next=l.M,this.f.previous=l.M,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.M&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.M.previous.next=h.M.next,h.M.next.previous=h.M.previous,h.M.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).M};
e.prototype.get=function(h){return(h=d(this,h).M)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
pa("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ua();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var r=this||self;function za(a){if(a&&a!=r)return Aa(a.document);null===Ba&&(Ba=Aa(r.document));return Ba}
var Da=/^[\w+/_-]+[=]{0,2}$/,Ba=null;function Aa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Da.test(a)?a:""}
function w(a,b){for(var c=a.split("."),d=b||r,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ea(){}
function Fa(a){a.Ba=void 0;a.v=function(){return a.Ba?a.Ba:a.Ba=new a}}
function Ga(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ha(a){return"array"==Ga(a)}
function Ia(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ja(a){return"function"==Ga(a)}
function Ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function La(a){return Object.prototype.hasOwnProperty.call(a,Ma)&&a[Ma]||(a[Ma]=++Na)}
var Ma="closure_uid_"+(1E9*Math.random()>>>0),Na=0;function Oa(a,b,c){return a.call.apply(a.bind,arguments)}
function Pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Oa:x=Pa;return x.apply(null,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Ra=Date.now||function(){return+new Date};
function y(a,b){var c=a.split("."),d=r;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function z(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var Sa;function Ta(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(Ta,Error);Ta.prototype.name="CustomError";function Ua(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Ta.call(this,d+c[e])}
z(Ua,Ta);Ua.prototype.name="AssertionError";var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Xa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Ya=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
A(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Za=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function $a(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function ab(a,b){return 0<=Va(a,b)}
function bb(a,b){var c=Va(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function cb(a){return Array.prototype.concat.apply([],arguments)}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ia(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function fb(a,b,c,d){Array.prototype.splice.apply(a,gb(arguments,1))}
function gb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function hb(a,b){return a>b?1:a<b?-1:0}
function ib(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Ha(d))for(var e=0;e<d.length;e+=8192)for(var f=ib.apply(null,gb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
function jb(a,b){return cb.apply([],Xa(a,b,void 0))}
;var kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},lb=/&/g,mb=/</g,nb=/>/g,ob=/"/g,pb=/'/g,qb=/\x00/g,rb=/[\x00&<>"']/;
function sb(a,b){for(var c=0,d=kb(String(a)).split("."),e=kb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=tb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||tb(0==h[2].length,0==k[2].length)||tb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function tb(a,b){return a<b?-1:a>b?1:0}
;var ub;a:{var vb=r.navigator;if(vb){var wb=vb.userAgent;if(wb){ub=wb;break a}}ub=""}function B(a){return-1!=ub.indexOf(a)}
;function xb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function yb(a){var b=0,c;for(c in a)b++;return b}
function zb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ab(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Bb(a){var b=Cb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Db(a){for(var b in a)return!1;return!0}
function Eb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Fb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Gb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Hb(a){var b=Ga(a);if("object"==b||"array"==b){if(Ja(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Hb(a[c]);return b}return a}
var Ib="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ib.length;f++)c=Ib[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Kb(){return B("Firefox")||B("FxiOS")}
function Lb(){return B("Safari")&&!(Mb()||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||Kb()||B("Silk")||B("Android"))}
function Mb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
function Nb(){return B("Android")&&!(Mb()||Kb()||B("Opera")||B("Silk"))}
;function Ob(){return null}
function Pb(a){return a}
function Qb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Rb(a,b){this.f=a===Sb&&b||"";this.g=Tb}
Rb.prototype.fa=!0;Rb.prototype.Y=function(){return this.f};
function Ub(a){return a instanceof Rb&&a.constructor===Rb&&a.g===Tb?a.f:"type_error:Const"}
var Tb={},Sb={},Vb=new Rb(Sb,"");function Wb(a,b){this.f=a===Xb&&b||"";this.g=Yb}
Wb.prototype.fa=!0;Wb.prototype.Y=function(){return this.f.toString()};
function Zb(a){if(a instanceof Wb&&a.constructor===Wb&&a.g===Yb)return a.f;Ga(a);return"type_error:TrustedResourceUrl"}
var Yb={},Xb={};function $b(a,b){this.f=a===ac&&b||"";this.g=bc}
$b.prototype.fa=!0;$b.prototype.Y=function(){return this.f.toString()};
function cc(a){if(a instanceof $b&&a.constructor===$b&&a.g===bc)return a.f;Ga(a);return"type_error:SafeUrl"}
var dc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function ec(a){if(a instanceof $b)return a;a="object"==typeof a&&a.fa?a.Y():String(a);dc.test(a)||(a="about:invalid#zClosurez");return new $b(ac,a)}
function fc(a){if(a instanceof $b)return a;a="object"==typeof a&&a.fa?a.Y():String(a);dc.test(a)||(a="about:invalid#zClosurez");return new $b(ac,a)}
var bc={},ac={};function gc(){this.f="";this.g=hc}
gc.prototype.fa=!0;var hc={};gc.prototype.Y=function(){return this.f};
function ic(a){if(a instanceof gc&&a.constructor===gc&&a.g===hc)return a.f;Ga(a);return"type_error:SafeStyle"}
function jc(a){var b=new gc;b.f=a;return b}
var kc=jc("");function lc(a){if(a instanceof $b)return'url("'+cc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof Rb)a=Ub(a);else{a=String(a);var b=a.replace(mc,"$1").replace(mc,"$1").replace(nc,"url");if(oc.test(b)){if(b=!pc.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&qc(a)}a=b?rc(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Ua("Value does not allow [{;}], got: %s.",[a]);return a}
function qc(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var oc=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,nc=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),mc=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),pc=/\/\*/;function rc(a){return a.replace(nc,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=ec(d).Y();return c+f+b+f+e})}
;function sc(){this.f="";this.g=tc}
sc.prototype.fa=!0;var tc={};
function uc(a,b){if(-1!=a.indexOf("<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);a:{for(var d={"(":")","[":"]"},e=[],f=0;f<c.length;f++){var g=c[f];if(d[g])e.push(d[g]);else{b:{var h=void 0;for(h in d)if(d[h]==g){h=!0;break b}h=!1}if(h&&e.pop()!=g){c=!1;break a}}}c=0==e.length}if(!c)throw Error("() and [] in selector must be balanced, got: "+
a);if(!(b instanceof gc)){c=b;d="";for(var k in c){if(!/^[-_a-zA-Z0-9]+$/.test(k))throw Error("Name allows only [-_a-zA-Z0-9], got: "+k);e=c[k];null!=e&&(e=Ha(e)?Xa(e,lc).join(" "):lc(e),d+=k+":"+e+";")}b=d?jc(d):kc}k=a+"{"+ic(b).replace(/</g,"\\3C ")+"}";return vc(k)}
function wc(a){function b(d){Ha(d)?A(d,b):c+=xc(d)}
var c="";A(arguments,b);return vc(c)}
sc.prototype.Y=function(){return this.f};
function xc(a){if(a instanceof sc&&a.constructor===sc&&a.g===tc)return a.f;Ga(a);return"type_error:SafeStyleSheet"}
function vc(a){var b=new sc;b.f=a;return b}
var yc=vc("");function zc(){this.f="";this.g=Ac;this.i=null}
zc.prototype.fa=!0;zc.prototype.Y=function(){return this.f.toString()};
function Bc(a){if(a instanceof zc&&a.constructor===zc&&a.g===Ac)return a.f;Ga(a);return"type_error:SafeHtml"}
var Ac={};function Cc(a,b){var c=new zc;c.f=a;c.i=b;return c}
Cc("<!DOCTYPE html>",0);var Dc=Cc("",0);Cc("<br>",0);var Ec=Qb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Bc(Dc);return!b.parentElement});
function Fc(a,b){if(Ec())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Bc(b)}
function Gc(a,b){var c=b instanceof $b?b:fc(b);a.href=cc(c)}
function Hc(a,b){a.src=Zb(b);var c=za();c&&a.setAttribute("nonce",c)}
;function Ic(a){rb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(lb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(mb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(nb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(ob,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(pb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(qb,"&#0;")));return a}
function Jc(a){return-1!=a.indexOf("&")?"document"in r?Kc(a):Lc(a):a}
function Kc(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=r.document.createElement("div");return a.replace(Mc,function(d,e){var f=b[d];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(f=Cc(d+" ",null),Fc(c,f),f=c.firstChild.nodeValue.slice(0,-1));return b[d]=f})}
function Lc(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})}
var Mc=/&([^;\s<&]+);?/g;function Nc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Oc(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Pc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function Qc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
function Rc(){return Qc()||B("iPad")||B("iPod")}
;function Sc(a){Sc[" "](a);return a}
Sc[" "]=Ea;function Tc(a,b){var c=Vc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Wc=B("Opera"),C=B("Trident")||B("MSIE"),Xc=B("Edge"),Yc=Xc||C,Zc=B("Gecko")&&!(-1!=ub.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),$c=-1!=ub.toLowerCase().indexOf("webkit")&&!B("Edge"),ad=B("Macintosh"),bd=B("Windows"),cd=B("Android"),dd=Qc(),ed=B("iPad"),fd=B("iPod"),gd=Rc();function hd(){var a=r.document;return a?a.documentMode:void 0}
var id;a:{var jd="",kd=function(){var a=ub;if(Zc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Xc)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($c)return/WebKit\/(\S+)/.exec(a);if(Wc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kd&&(jd=kd?kd[1]:"");if(C){var ld=hd();if(null!=ld&&ld>parseFloat(jd)){id=String(ld);break a}}id=jd}var md=id,Vc={};function nd(a){return Tc(a,function(){return 0<=sb(md,a)})}
var od;od=r.document&&C?hd():void 0;var pd=Kb(),qd=Qc()||B("iPod"),rd=B("iPad"),sd=Nb(),td=Mb(),ud=Lb()&&!Rc();var vd={},wd=null;var D=window;function xd(a){this.f=a||{cookie:""}}
m=xd.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.kd;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ra}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ra()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=kb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ra:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var yd=new xd("undefined"==typeof document?null:document);var zd=!C||9<=Number(od),Ad=!Zc&&!C||C&&9<=Number(od)||Zc&&nd("1.9.1"),Bd=C&&!nd("9");function E(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=E.prototype;m.clone=function(){return new E(this.x,this.y)};
m.equals=function(a){return a instanceof E&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Cd(a,b){return new E(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Dd(a,b){this.width=a;this.height=b}
m=Dd.prototype;m.clone=function(){return new Dd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ed(a){return a?new Fd(Gd(a)):Sa||(Sa=new Fd)}
function F(a){return"string"===typeof a?document.getElementById(a):a}
function Hd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function G(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Id(document,"*",a,b)}
function H(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Id(c,"*",a,b)[0]||null}return c||null}
function Id(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&ab(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Jd(a,b){xb(b,function(c,d){c&&"object"==typeof c&&c.fa&&(c=c.Y());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Kd.hasOwnProperty(d)?a.setAttribute(Kd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Kd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Ld(a){a=a.document;a=Md(a)?a.documentElement:a.body;return new Dd(a.clientWidth,a.clientHeight)}
function Nd(a){var b=Od(a);a=Pd(a);return C&&nd("10")&&a.pageYOffset!=b.scrollTop?new E(b.scrollLeft,b.scrollTop):new E(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Od(a){return a.scrollingElement?a.scrollingElement:!$c&&Md(a)?a.documentElement:a.body||a.documentElement}
function Pd(a){return a.parentWindow||a.defaultView}
function Qd(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!zd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ic(g.name),'"');if(g.type){f.push(' type="',Ic(g.type),'"');var h={};Jb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Sd(e,f);g&&("string"===typeof g?f.className=g:Ha(g)?f.className=g.join(" "):Jd(f,g));2<d.length&&Td(e,f,d);return f}
function Td(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ia(f)||Ka(f)&&0<f.nodeType?d(f):A(Ud(f)?db(f):f,d)}}
function Vd(a){return Sd(document,a)}
function Sd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Md(a){return"CSS1Compat"==a.compatMode}
function Wd(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Xd(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function Yd(a){return Ad&&void 0!=a.children?a.children:Wa(a.childNodes,function(b){return 1==b.nodeType})}
function Zd(a){for(;a&&1!=a.nodeType;)a=a.nextSibling;return a}
function $d(a){return Ka(a)&&1==a.nodeType}
function ae(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Gd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function be(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else Wd(a),a.appendChild(Gd(a).createTextNode(String(b)))}
function ce(a,b){var c=[];return de(a,b,c,!0)?c[0]:void 0}
function de(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||de(a,b,c,d))return!0;a=a.nextSibling}return!1}
var ee={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},fe={IMG:" ",BR:"\n"};function ge(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!he(a)||ie(a)):he(a)&&ie(a))&&C){var c;!Ja(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function he(a){return C&&!nd("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function ie(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function je(a){if(Bd&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ke(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Bd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ke(a,b,c){if(!(a.nodeName in ee))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in fe)b.push(fe[a.nodeName]);else for(a=a.firstChild;a;)ke(a,b,c),a=a.nextSibling}
function Ud(a){if(a&&"number"==typeof a.length){if(Ka(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ja(a))return"function"==typeof a.item}return!1}
function le(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return me(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&ab(f.className.split(/\s+/),c))},d)}
function J(a,b){return le(a,null,b,void 0)}
function me(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Fd(a){this.f=a||r.document||document}
Fd.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
Fd.prototype.createElement=function(a){return Sd(this.f,a)};
Fd.prototype.appendChild=function(a,b){a.appendChild(b)};
Fd.prototype.isElement=$d;function ne(a){oe();return new Wb(Xb,a)}
var oe=Ea;var pe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qe(a){return a?decodeURI(a):a}
function re(a,b){return b.match(pe)[a]||null}
function se(a,b,c){if(Ha(b))for(var d=0;d<b.length;d++)se(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function te(a){var b=[],c;for(c in a)se(c,a[c],b);return b.join("&")}
function ue(a,b){var c=te(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ve=/#|$/;function we(a,b){var c=a.search(ve);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function xe(a){var b=ye;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function ze(){var a=[];xe(function(b){a.push(b)});
return a}
var ye={wc:"allow-forms",xc:"allow-modals",yc:"allow-orientation-lock",zc:"allow-pointer-lock",Ac:"allow-popups",Bc:"allow-popups-to-escape-sandbox",Cc:"allow-presentation",Dc:"allow-same-origin",Ec:"allow-scripts",Fc:"allow-top-navigation",Gc:"allow-top-navigation-by-user-activation"},Ae=Qb(function(){return ze()});
function Be(){var a=Vd("IFRAME"),b={};A(Ae(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ce(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=Ce.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new Ce(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function De(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
De.prototype.clone=function(){return new De(this.left,this.top,this.width,this.height)};
De.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
De.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
De.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ee(a,b,c){if("string"===typeof b)(b=Fe(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Fe(c,d);f&&(c.style[f]=e)}}
var Ge={};function Fe(a,b){var c=Ge[b];if(!c){var d=Oc(b);c=d;void 0===a.style[d]&&(d=($c?"Webkit":Zc?"Moz":C?"ms":Wc?"O":null)+Pc(d),void 0!==a.style[d]&&(c=d));Ge[b]=c}return c}
function He(a,b){var c=Gd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Ie(a,b){return He(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Je(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Ke(a){if(C&&!(8<=Number(od)))return a.offsetParent;var b=Gd(a),c=Ie(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Ie(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Le(a){for(var b=new Ce(0,Infinity,Infinity,0),c=Ed(a),d=c.f.body,e=c.f.documentElement,f=Od(c.f);a=Ke(a);)if(!(C&&0==a.clientWidth||$c&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Ie(a,"overflow")){var g=Me(a),h=new E(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Ld(Pd(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Me(a){var b=Gd(a),c=new E(0,0);var d=b?Gd(b):document;d=!C||9<=Number(od)||Md(Ed(d).f)?d.documentElement:d.body;if(a==d)return c;a=Je(a);b=Nd(Ed(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Ne(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Oe(a){var b=Pe;if("none"!=Ie(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Pe(a){var b=a.offsetWidth,c=a.offsetHeight,d=$c&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Je(a),new Dd(a.right-a.left,a.bottom-a.top)):new Dd(b,c)}
function Qe(a){var b=Me(a);a=Oe(a);return new De(b.x,b.y,a.width,a.height)}
function Re(a){return"rtl"==Ie(a,"direction")}
function Se(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Te(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Se(a,c):0}
var Ue={thin:2,medium:4,thick:6};function Ve(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Ue?Ue[c]:Se(a,c)}
;var We=(new Date).getTime();function Xe(a,b){this.i=a;this.j=b;this.g=0;this.f=null}
Xe.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Ye(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Ze(a){r.setTimeout(function(){throw a;},0)}
var $e;
function af(){var a=r.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=Vd("IFRAME");e.style.display="none";e.src=Zb(new Wb(Xb,Ub(Vb))).toString();document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Bc(Dc));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=x(function(k){if(("*"==h||k.origin==
h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ha;c.Ha=null;e()}};
return function(e){d.next={Ha:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in Vd("SCRIPT")?function(e){var f=Vd("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){r.setTimeout(e,0)}}
;function bf(){this.g=this.f=null}
var df=new Xe(function(){return new cf},function(a){a.reset()});
bf.prototype.add=function(a,b){var c=df.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
bf.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function cf(){this.next=this.scope=this.f=null}
cf.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
cf.prototype.reset=function(){this.next=this.scope=this.f=null};function ef(a,b){ff||gf();hf||(ff(),hf=!0);jf.add(a,b)}
var ff;function gf(){if(r.Promise&&r.Promise.resolve){var a=r.Promise.resolve(void 0);ff=function(){a.then(kf)}}else ff=function(){var b=kf;
!Ja(r.setImmediate)||r.Window&&r.Window.prototype&&!B("Edge")&&r.Window.prototype.setImmediate==r.setImmediate?($e||($e=af()),$e(b)):r.setImmediate(b)}}
var hf=!1,jf=new bf;function kf(){for(var a;a=jf.remove();){try{a.f.call(a.scope)}catch(b){Ze(b)}Ye(df,a)}hf=!1}
;function lf(a){this.f=0;this.F=void 0;this.j=this.g=this.i=null;this.l=this.o=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){mf(b,2,c)},function(c){mf(b,3,c)})}catch(c){mf(this,3,c)}}
function nf(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
nf.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var of=new Xe(function(){return new nf},function(a){a.reset()});
function pf(a,b,c){var d=of.get();d.g=a;d.onRejected=b;d.context=c;return d}
function qf(a){if(a instanceof lf)return a;var b=new lf(Ea);mf(b,2,a);return b}
lf.prototype.then=function(a,b,c){return rf(this,Ja(a)?a:null,Ja(b)?b:null,c)};
lf.prototype.$goog_Thenable=!0;lf.prototype.cancel=function(a){if(0==this.f){var b=new sf(a);ef(function(){tf(this,b)},this)}};
function tf(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?tf(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):uf(c),vf(c,e,3,b)))}a.i=null}else mf(a,3,b)}
function wf(a,b){a.g||2!=a.f&&3!=a.f||xf(a);a.j?a.j.next=b:a.g=b;a.j=b}
function rf(a,b,c,d){var e=pf(null,null,null);e.f=new lf(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof sf?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;wf(a,e);return e.f}
lf.prototype.w=function(a){this.f=0;mf(this,2,a)};
lf.prototype.L=function(a){this.f=0;mf(this,3,a)};
function mf(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.w,f=a.L;if(d instanceof lf){wf(d,pf(e||Ea,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ka(d))try{var k=d.then;if(Ja(k)){yf(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.F=c,a.f=b,a.i=null,xf(a),3!=b||c instanceof sf||zf(a,c))}}
function yf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function xf(a){a.o||(a.o=!0,ef(a.K,a))}
function uf(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}
lf.prototype.K=function(){for(var a;a=uf(this);)vf(this,a,this.f,this.F);this.o=!1};
function vf(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,Af(b,c,d);else try{b.i?b.g.call(b.context):Af(b,c,d)}catch(e){Bf.call(null,e)}Ye(of,b)}
function Af(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function zf(a,b){a.l=!0;ef(function(){a.l&&Bf.call(null,b)})}
var Bf=Ze;function sf(a){Ta.call(this,a)}
z(sf,Ta);sf.prototype.name="cancel";function Cf(a){this.f=a;a.then(x(function(){},this))}
function Df(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=Ef(a,b).then(function(f){return f.apply(null,d)});
return new Cf(e)}
var Ff={};function Ef(a,b){var c=Ff[b];if(c)return c;c=(c=w(b))?qf(c):(new lf(function(d,e){var f=(new Fd(document)).createElement("SCRIPT");f.async=!0;Hc(f,new Wb(Xb,Ub(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};
f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){var d=w(b);
if(!d)throw Error("Failed to load "+b+" from "+a);return d});
return Ff[b]=c}
function Gf(a,b,c){a.f.then(function(d){var e=d[b];if(!e)throw Error("Method not found: "+b);return e.apply(d,c)})}
;function Hf(a){this.f=a}
var If=new Rb(Sb,"https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");Hf.prototype.i=function(a){Gf(this.f,"startHelp",arguments)};
Hf.prototype.g=function(a){Gf(this.f,"loadChatSupport",arguments)};function Jf(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Kf=window,Lf=document,Mf=Kf.location;function Nf(){}
var Of=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}
function Pf(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Qf(){var a;if((a=Object.create)&&Of.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Rf=K(Kf,"gapi",{});var L;L=K(Kf,"___jsl",Qf());K(L,"I",0);K(L,"hel",10);function Sf(){var a=Mf.href;if(L.dpo)var b=L.h;else{b=L.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Tf(a){var b=K(L,"PQ",[]);L.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Uf(a){return K(K(L,"H",Qf()),a,Qf())}
;function Vf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(q){for(var t=g,n=0;64>n;n+=4)t[n/4]=q[n]<<24|q[n+1]<<16|q[n+2]<<8|q[n+3];for(n=16;80>n;n++)q=t[n-3]^t[n-8]^t[n-14]^t[n-16],t[n]=(q<<1|q>>>31)&4294967295;q=e[0];var u=e[1],I=e[2],v=e[3],Ca=e[4];for(n=0;80>n;n++){if(40>n)if(20>n){var X=v^u&(I^v);var ka=1518500249}else X=u^I^v,ka=1859775393;else 60>n?(X=u&I|v&(u|I),ka=2400959708):(X=u^I^v,ka=3395469782);X=((q<<5|q>>>27)&4294967295)+X+Ca+ka+t[n]&4294967295;Ca=v;v=I;I=(u<<30|u>>>2)&4294967295;u=q;q=X}e[0]=e[0]+q&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+I&4294967295;e[3]=e[3]+v&4294967295;e[4]=e[4]+Ca&4294967295}
function c(q,t){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var n=[],u=0,I=q.length;u<I;++u)n.push(q.charCodeAt(u));q=n}t||(t=q.length);n=0;if(0==l)for(;n+64<t;)b(q.slice(n,n+64)),n+=64,p+=64;for(;n<t;)if(f[l++]=q[n++],p++,64==l)for(l=0,b(f);n+64<t;)b(q.slice(n,n+64)),n+=64,p+=64}
function d(){var q=[],t=8*p;56>l?c(h,56-l):c(h,64-(l-56));for(var n=63;56<=n;n--)f[n]=t&255,t>>>=8;b(f);for(n=t=0;5>n;n++)for(var u=24;0<=u;u-=8)q[t++]=e[n]>>u&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,qb:function(){for(var q=d(),t="",n=0;n<q.length;n++)t+="0123456789ABCDEF".charAt(Math.floor(q[n]/16))+"0123456789ABCDEF".charAt(q[n]%16);return t}}}
;function Wf(a,b,c){var d=[],e=[];if(1==(Ha(c)?2:1))return e=[b,a],A(d,function(h){e.push(h)}),Xf(e.join(" "));
var f=[],g=[];A(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];A(d,function(h){e.push(h)});
a=Xf(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Xf(a){var b=Vf();b.update(a);return b.qb().toLowerCase()}
;function Yf(a){var b=Jf(String(r.location.href)),c;(c=r.__SAPISID||r.__APISID||r.__OVERRIDE_SID)?c=!0:(c=new xd(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?r.__SAPISID:r.__APISID,c||(c=new xd(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(r.location.href);return d&&c&&b?[b,Wf(Jf(d),c,a||null)].join(" "):null}return null}
;var Zf=K(L,"perf",Qf());K(Zf,"g",Qf());var $f=K(Zf,"i",Qf());K(Zf,"r",[]);Qf();Qf();function ag(a,b,c){b&&0<b.length&&(b=bg(b),c&&0<c.length&&(b+="___"+bg(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K($f,"_p",Qf()),K(b,c,Qf())[a]=(new Date).getTime(),b=Zf.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function bg(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var cg=Qf(),dg=[];function eg(a){throw Error("Bad hint"+(a?": "+a:""));}
dg.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?L[b]=K(L,b,[]).concat(c):K(L,b,c)}if(b=a.u)a=K(L,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var fg=/^(\/[a-zA-Z0-9_\-]+)+$/,gg=[/\/amp\//,/\/amp$/,/^\/amp$/],hg=/^[a-zA-Z0-9\-_\.,!]+$/,ig=/^gapi\.loaded_[0-9]+$/,jg=/^[a-zA-Z0-9,._-]+$/;function kg(a,b,c,d){var e=a.split(";"),f=e.shift(),g=cg[f],h=null;g?h=g(e,b,c,d):eg("no hint processor for: "+f);h||eg("failed to generate load url");b=h;c=b.match(lg);(d=b.match(mg))&&1===d.length&&ng.test(b)&&c&&1===c.length||eg("failed sanity: "+a);return h}
function og(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=pg(a);ig.test(c)||eg("invalid_callback");b=qg(b);d=d&&d.length?qg(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Fa?"/am="+e(a.Fa):"",a.bb?"/rs="+e(a.bb):"",a.kb?"/t="+e(a.kb):"","/cb=",e(c)].join("")}
function pg(a){"/"!==a.charAt(0)&&eg("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))eg("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");fg.test(b)||eg("invalid_prefix");c=0;for(d=gg.length;c<d;++c)gg[c].test(b)&&eg("invalid_prefix");c=rg(a,
"k",!0);d=rg(a,"am");e=rg(a,"rs");a=rg(a,"t");return{pathPrefix:b,version:c,Fa:d,bb:e,kb:a}}
function qg(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");jg.test(e)&&b.push(e)}return b.join(",")}
function rg(a,b,c){a=a[b];!a&&c&&eg("missing: "+b);if(a){if(hg.test(a))return a;eg("invalid: "+b)}return null}
var ng=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,mg=/\/cb=/g,lg=/\/\//g;function sg(){var a=Sf();if(!a)throw Error("Bad hint");return a}
cg.m=function(a,b,c,d){(a=a[0])||eg("missing_hint");return"https://apis.google.com"+og(a,b,c,d)};
var tg=decodeURI("%73cript"),ug=/^[-+_0-9\/A-Za-z]+={0,2}$/;function vg(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function wg(){var a=L.nonce;return void 0!==a?a&&a===String(a)&&a.match(ug)?a:L.nonce=null:Lf.querySelector?(a=Lf.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(ug)?L.nonce=a:L.nonce=null):null:null}
function xg(a){if("loading"!=Lf.readyState)yg(a);else{var b=wg(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+tg+' src="'+encodeURI(a)+'"'+c+"></"+tg+">";Lf.write(a)}}
function yg(a){var b=Lf.createElement(tg);b.setAttribute("src",a);a=wg();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Lf.getElementsByTagName(tg)[0])?a.parentNode.insertBefore(b,a):(Lf.head||Lf.body||Lf.documentElement).appendChild(b)}
function zg(a,b){var c=b&&b._c;if(c)for(var d=0;d<dg.length;d++){var e=dg[d][0],f=dg[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ag(a,b,c){Bg(function(){var d=b===Sf()?K(Rf,"_",Qf()):Qf();d=K(Uf(b),"_",d);a(d)},c)}
function Cg(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);zg(a,c);var d=a?a.split(":"):[],e=c.h||sg(),f=K(L,"ah",Qf());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,p=l;l&&l.hint==k||(p={hint:k,features:[]},g.push(p));p.features.push(h)}var q=g.length;if(1<q){var t=c.callback;t&&(c.callback=function(){0==--q&&t()})}for(;d=g.shift();)Dg(d.features,c,d.hint)}else Dg(d||[],c,e)}
function Dg(a,b,c){function d(X,ka){if(q)return 0;Kf.clearTimeout(p);t.push.apply(t,u);var Uc=((Rf||{}).config||{}).update;Uc?Uc(f):f&&K(L,"cu",[]).push(f);if(ka){ag("me0",X,n);try{Ag(ka,c,l)}finally{ag("me1",X,n)}}return 1}
a=Pf(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var p=null,q=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=K(Uf(c),"r",[]).sort();var t=K(Uf(c),"L",[]).sort(),n=[].concat(k);0<g&&(p=Kf.setTimeout(function(){q=!0;h()},g));
var u=vg(a,t);if(u.length){u=vg(a,k);var I=K(L,"CP",[]),v=I.length;I[v]=function(X){function ka(){var Rd=I[v+1];Rd&&Rd()}
function Uc(Rd){I[v]=null;d(u,X)&&Tf(function(){e&&e();Rd()})}
if(!X)return 0;ag("ml1",u,n);0<v&&I[v-1]?I[v]=function(){Uc(ka)}:Uc(ka)};
if(u.length){var Ca="loaded_"+L.I++;Rf[Ca]=function(X){I[v](X);Rf[Ca]=null};
a=kg(c,u,"gapi."+Ca,k);k.push.apply(k,u);ag("ml0",u,n);b.sync||Kf.___gapisync?xg(a):yg(a)}else I[v](Nf)}else d(u)&&e&&e()}
function Bg(a,b){if(L.hee&&0<L.hel)try{return a()}catch(c){b&&b(c),L.hel--,Cg("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Rf.load=function(a,b){return Bg(function(){return Cg(a,b)})};function Eg(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Fg(a){return a.classList?a.classList:Eg(a).match(/\S+/g)||[]}
function Gg(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function M(a,b){return a.classList?a.classList.contains(b):ab(Fg(a),b)}
function N(a,b){if(a.classList)a.classList.add(b);else if(!M(a,b)){var c=Eg(a);Gg(a,c+(0<c.length?" "+b:b))}}
function Hg(a,b){if(a.classList)A(b,function(f){N(a,f)});
else{var c={};A(Fg(a),function(f){c[f]=!0});
A(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Gg(a,d)}}
function O(a,b){a.classList?a.classList.remove(b):M(a,b)&&Gg(a,Wa(Fg(a),function(c){return c!=b}).join(" "))}
function Ig(a,b){a.classList?A(b,function(c){O(a,c)}):Gg(a,Wa(Fg(a),function(c){return!ab(b,c)}).join(" "))}
function Jg(a,b,c){c?N(a,b):O(a,b)}
function Kg(a,b,c){M(a,b)&&(O(a,b),N(a,c))}
function Lg(a,b){var c=!M(a,b);Jg(a,b,c)}
;var Mg=!C&&!Lb();function Ng(a,b){if(/-[a-z]/.test(b))return null;if(Mg&&a.dataset){if(Nb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Og="StopIteration"in r?r.StopIteration:{message:"StopIteration",stack:""};function Pg(){}
Pg.prototype.next=function(){throw Og;};
Pg.prototype.da=function(){return this};
function Qg(a){if(a instanceof Pg)return a;if("function"==typeof a.da)return a.da(!1);if(Ia(a)){var b=0,c=new Pg;c.next=function(){for(;;){if(b>=a.length)throw Og;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Rg(a,b){if(Ia(a))try{A(a,b,void 0)}catch(c){if(c!==Og)throw c;}else{a=Qg(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Og)throw c;}}}
function Sg(a){if(Ia(a))return db(a);a=Qg(a);var b=[];Rg(a,function(c){b.push(c)});
return b}
;function Tg(a,b){this.i={};this.f=[];this.ha=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Tg)for(c=Ug(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ug(a){Vg(a);return a.f.concat()}
m=Tg.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Wg;Vg(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Wg(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.i={};this.ha=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.ha++,this.f.length>2*this.g&&Vg(this),!0):!1};
function Vg(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.ha++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Ug(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Tg(this)};
m.da=function(a){Vg(this);var b=0,c=this.ha,d=this,e=new Pg;e.next=function(){if(c!=d.ha)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Og;var f=d.f[b++];return a?f:d.i[f]};
return e};var Xg=function(){if(bd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(ub))?a[1]:"0"}return ad?(a=/10[_.][0-9_.]+/,(a=a.exec(ub))?a[0].replace(/_/g,"."):"10"):cd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(ub))?a[1]:""):dd||ed||fd?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(ub))?a[1].replace(/_/g,"."):""):""}();function Yg(a){return(a=a.exec(ub))?a[1]:""}
var Zg=function(){if(pd)return Yg(/Firefox\/([0-9.]+)/);if(C||Xc||Wc)return md;if(td)return Rc()?Yg(/CriOS\/([0-9.]+)/):Yg(/Chrome\/([0-9.]+)/);if(ud&&!Rc())return Yg(/Version\/([0-9.]+)/);if(qd||rd){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(ub);if(a)return a[1]+"."+a[2]}else if(sd)return(a=Yg(/Android\s+([0-9.]+)/))?a:Yg(/Version\/([0-9.]+)/);return""}();function $g(){this.g=[];this.f=-1}
$g.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
$g.prototype.get=function(a){return!!this.g[a]};
function ah(a){-1==a.f&&(a.f=Ya(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function bh(){this.g=-1}
;function ch(){this.g=64;this.f=[];this.o=[];this.F=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
z(ch,bh);ch.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function dh(a,b,c){c||(c=0);var d=a.F;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
ch.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)dh(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){dh(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){dh(this,e);f=0;break}}this.i=f;this.l+=b}};
ch.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.o[c]=b&255,b/=256;dh(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function P(){this.K=this.K;this.F=this.F}
P.prototype.K=!1;P.prototype.R=function(){return this.K};
P.prototype.dispose=function(){this.K||(this.K=!0,this.H())};
function eh(a,b){a.K?b():(a.F||(a.F=[]),a.F.push(b))}
P.prototype.H=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function fh(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var gh={};
function hh(a){if(C&&!nd(9))return[0,0,0,0];var b=gh.hasOwnProperty(a)?gh[a]:null;if(b)return b;65536<Object.keys(gh).length&&(gh={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=ih(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=ih(b,d);b=ih(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=jh(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=jh(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=jh(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);b=
jh(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=jh(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=jh(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");jh(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return gh[a]=b}
function jh(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}
function ih(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})}
;var kh={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,
"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,
"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},lh={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,"* CLASS":!0,"* ID":!0,"* STYLE":!0};var mh={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},nh=/[\n\f\r"'()*<>]/g,oh={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function ph(a){return oh[a]}
function qh(a,b,c){b=kb(b);if(""==b)return null;var d=String(b.substr(0,4)).toLowerCase();if(0==("url("<d?-1:"url("==d?0:1)){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:for(b=b.substring(4,b.length-1),d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=cc(a)?'url("'+cc(a).replace(nh,ph)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;
for(a=/([\-\w]+)\(/g;c=a.exec(b);)if(!(c[1]in mh))return null}return b}
;function rh(a,b){var c=r[a];return c&&c.prototype?(c=Object.getOwnPropertyDescriptor(c.prototype,b))&&c.get||null:null}
function sh(a,b){var c=r[a];return c&&c.prototype&&c.prototype[b]||null}
var th=rh("Element","attributes")||rh("Node","attributes"),uh=sh("Element","hasAttribute"),vh=sh("Element","getAttribute"),wh=sh("Element","setAttribute"),xh=sh("Element","removeAttribute"),yh=sh("Element","getElementsByTagName"),zh=sh("Element","matches")||sh("Element","msMatchesSelector"),Ah=rh("Node","nodeName"),Bh=rh("Node","nodeType"),Ch=rh("Node","parentNode"),Dh=rh("HTMLElement","style")||rh("Element","style"),Eh=rh("HTMLStyleElement","sheet"),Fh=sh("CSSStyleDeclaration","getPropertyValue"),
Gh=sh("CSSStyleDeclaration","setProperty");function Hh(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}
function Ih(a,b,c,d){if(a)return a.apply(b,d);if(C&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}
function Jh(a){return Hh(th,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Kh(a,b,c){try{Ih(wh,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}
function Lh(a){return Hh(Dh,a,"style",function(b){return b instanceof CSSStyleDeclaration})}
function Mh(a){return Hh(Eh,a,"sheet",function(b){return b instanceof CSSStyleSheet})}
function Nh(a){return Hh(Ah,a,"nodeName",function(b){return"string"==typeof b})}
function Oh(a){return Hh(Bh,a,"nodeType",function(b){return"number"==typeof b})}
function Ph(a){return Hh(Ch,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}
function Qh(a,b){return Ih(Fh,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}
function Rh(a,b,c){Ih(Gh,a,a.setProperty?"setProperty":"setAttribute",[b,c])}
;var Sh=C&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g"),Th={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};
function Uh(a,b,c){var d=[];a=Vh(db(a.cssRules));A(a,function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&C&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(Sh,"#"+b+" $1"):e.selectorText;d.push(uc(f,Wh(e.style,c)))}});
return wc(d)}
function Vh(a){return Wa(a,function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})}
function Xh(a,b,c){a=Yh("<style>"+a+"</style>");return null==a||null==a.sheet?yc:Uh(a.sheet,void 0!=b?b:null,c)}
function Yh(a){if(C&&!nd(10)||"function"!=typeof r.DOMParser)return null;a=Cc("<html><head></head><body>"+a+"</body></html>",null);return(new DOMParser).parseFromString(Bc(a),"text/html").body.children[0]}
function Wh(a,b){if(!a)return kc;var c=document.createElement("div").style,d=Zh(a);A(d,function(e){var f=$c&&e in Th?e:e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");0!=f.lastIndexOf("--",0)&&0!=f.lastIndexOf("var",0)&&(e=Qh(a,e),e=qh(f,e,b),null!=e&&Rh(c,f,e))});
return jc(c.cssText||"")}
function $h(a){var b=Array.from(Ih(yh,a,"getElementsByTagName",["STYLE"])),c=jb(b,function(e){return db(Mh(e).cssRules)});
c=Vh(c);c.sort(function(e,f){var g=hh(e.selectorText);a:{for(var h=hh(f.selectorText),k=Math.min(g.length,h.length),l=0;l<k;l++){var p=hb(g[l],h[l]);if(0!=p){g=p;break a}}g=hb(g.length,h.length)}return-g});
a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var d;d=a.nextNode();)A(c,function(e){Ih(zh,d,d.matches?"matches":"msMatchesSelector",[e.selectorText])&&e.style&&ai(d,e.style)});
A(b,Xd)}
function ai(a,b){var c=Zh(a.style),d=Zh(b);A(d,function(e){if(!(0<=c.indexOf(e))){var f=Qh(b,e);Rh(a.style,e,f)}})}
function Zh(a){Ia(a)?a=db(a):(a=Ab(a),bb(a,"cssText"));return a}
;var bi="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),ci=0;function di(){this.i=[];this.g=[];this.f="data-elementweakmap-index-"+ci++}
di.prototype.set=function(a,b){if(Ih(uh,a,"hasAttribute",[this.f])){var c=parseInt(Ih(vh,a,"getAttribute",[this.f])||null,10);this.g[c]=b}else c=this.g.push(b)-1,Kh(a,this.f,c.toString()),this.i.push(a);return this};
di.prototype.get=function(a){if(Ih(uh,a,"hasAttribute",[this.f]))return a=parseInt(Ih(vh,a,"getAttribute",[this.f])||null,10),this.g[a]};
di.prototype.clear=function(){this.i.forEach(function(a){Ih(xh,a,"removeAttribute",[this.f])},this);
this.i=[];this.g=[]};var ei=!C||10<=Number(od),fi=!C||null==document.documentMode;function gi(){}
;var hi={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var ii={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var ji={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0};
function ki(a){a=a||new li;mi(a);this.f=Gb(a.f);this.l=Gb(a.X);this.i=Gb(a.aa);this.K=a.o;A(a.l,function(b){if(0!=b.lastIndexOf("data-",0))throw new Ua('Only "data-" attributes allowed, got: %s.',[b]);if(0==b.lastIndexOf("data-sanitizer-",0))throw new Ua('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.f["* "+b.toUpperCase()]=ni},this);
A(a.w,function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||ji[b])throw new Ua("Only valid custom element tag names allowed, got: %s.",[b]);this.i[b]=!0},this);
this.F=a.i;this.j=a.V;this.g=null;this.o=a.L}
z(ki,gi);function oi(a){return function(b,c){var d=a(kb(b),c);return d&&"about:invalid#zClosurez"!=cc(d)?cc(d):null}}
function li(){this.f={};A([kh,lh],function(a){A(Ab(a),function(b){this.f[b]=ni},this)},this);
this.g={};this.l=[];this.w=[];this.X=Gb(hi);this.aa=Gb(ii);this.o=!1;this.ca=ec;this.K=this.j=this.ba=this.i=Ob;this.V=null;this.F=this.L=!1}
function pi(){var a=qi();eb(a.l,ri);return a}
function qi(){var a=new li;a.o=!0;a.K=si;return a}
function ti(a){a.i=ec;return a}
function ui(a,b){a.j=b;return a}
function vi(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}
function wi(a,b,c,d){a[c]&&!b[c]&&(a[c]=vi(a[c],d))}
function mi(a){if(a.F)throw Error("HtmlSanitizer.Builder.build() can only be used once.");wi(a.f,a.g,"* USEMAP",xi);var b=oi(a.ca);A(["* ACTION","* CITE","* HREF"],function(d){wi(this.f,this.g,d,b)},a);
var c=oi(a.i);A(["* LONGDESC","* SRC","LINK HREF"],function(d){wi(this.f,this.g,d,c)},a);
A(["* FOR","* HEADERS","* NAME"],function(d){wi(this.f,this.g,d,Qa(yi,this.ba))},a);
wi(a.f,a.g,"A TARGET",Qa(zi,["_blank","_self"]));wi(a.f,a.g,"* CLASS",Qa(Ai,a.j));wi(a.f,a.g,"* ID",Qa(Bi,a.j));wi(a.f,a.g,"* STYLE",Qa(a.K,c));a.F=!0}
function Ci(a,b){a||(a="*");return(a+" "+b).toUpperCase()}
function si(a,b,c,d){if(!d.za)return null;b=ic(Wh(d.za,function(e,f){c.pb=f;var g=a(e,c);return null==g?null:new $b(ac,g)}));
return""==b?null:b}
function ni(a){return kb(a)}
function zi(a,b){var c=kb(b);return ab(a,c.toLowerCase())?c:null}
function xi(a){return(a=kb(a))&&"#"==a.charAt(0)?a:null}
function yi(a,b,c){return a(kb(b),c)}
function Ai(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}
function Bi(a,b,c){return a(kb(b),c)}
function Di(a,b){var c=!("STYLE"in a.l)&&"STYLE"in a.i;c="*"==a.j&&c?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Ra()).toString(36)):a.j;a.g=c;if(ei){var d=b;if(ei){c=Vd("SPAN");a.g&&"*"==a.j&&(c.id=a.g);a.o&&(d=Yh("<div>"+d+"</div>"),$h(d),d=d.innerHTML);d=Cc(d,null);var e=document.createElement("template");if(fi&&"content"in e)Fc(e,d),e=e.content;else{var f=document.implementation.createHTMLDocument("x");e=f.body;Fc(f.body,d)}d=document.createTreeWalker(e,
NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(e=bi?new WeakMap:new di;f=d.nextNode();){c:{var g=a;var h=f;switch(Oh(h)){case 3:g=Ei(g,h);break c;case 1:if("TEMPLATE"==Nh(h).toUpperCase())g=null;else{var k=Nh(h).toUpperCase();if(k in g.l)var l=null;else g.i[k]?l=document.createElement(k):(l=Vd("SPAN"),g.K&&Kh(l,"data-sanitizer-original-tag",k.toLowerCase()));if(l){var p=l,q=Jh(h);if(null!=q)for(var t=0;k=q[t];t++)if(k.specified){var n=g;var u=h,I=k,v=I.name;if(0==v.lastIndexOf("data-sanitizer-",
0))n=null;else{var Ca=Nh(u);I=I.value;var X={tagName:kb(Ca).toLowerCase(),attributeName:kb(v).toLowerCase()},ka={za:void 0};"style"==X.attributeName&&(ka.za=Lh(u));u=Ci(Ca,v);u in n.f?(n=n.f[u],n=n(I,X,ka)):(v=Ci(null,v),v in n.f?(n=n.f[v],n=n(I,X,ka)):n=null)}null!==n&&Kh(p,k.name,n)}g=l}else g=null}break c;default:g=null}}if(g){if(1==Oh(g)&&e.set(f,g),f=Ph(f),h=!1,f)k=Oh(f),l=Nh(f).toLowerCase(),p=Ph(f),11!=k||p?"body"==l&&p&&(k=Ph(p))&&!Ph(k)&&(h=!0):h=!0,k=null,h||!f?k=c:1==Oh(f)&&(k=e.get(f)),
k.content&&(k=k.content),k.appendChild(g)}else Wd(f)}e.clear&&e.clear()}else c=Vd("SPAN");0<Jh(c).length&&(d=Vd("SPAN"),d.appendChild(c),c=d);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"))}else c="";return Cc(c,null)}
function Ei(a,b){var c=b.data,d=Ph(b);d&&"style"==Nh(d).toLowerCase()&&!("STYLE"in a.l)&&"STYLE"in a.i&&(c=xc(Xh(c,a.g,x(function(e,f){return this.F(e,{pb:f})},a))));
return document.createTextNode(c)}
;function Fi(a){var b=[];Gi(new Hi,a,b);return b.join("")}
function Hi(){}
function Gi(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Ha(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Gi(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Ii(d,c),c.push(":"),Gi(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Ii(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ji={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ki=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ii(a,b){b.push('"',a.replace(Ki,function(c){var d=Ji[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ji[c]=d);return d}),'"')}
;function Li(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=Ie(h,"position")){var l=Me(h);if(!k){k=Re(h);var p;if(p=k){p=ud&&0<=sb(Zg,10);var q;if(q=gd)q=0<=sb(Xg,10);p=Zc||p||q}k=p?-h.scrollLeft:!k||Yc&&nd("8")||"visible"==Ie(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;l=Cd(l,new E(k,h.scrollTop))}}}h=l||new E;l=Qe(a);if(k=Le(a)){var t=new De(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(l.left,t.left);p=Math.min(l.left+
l.width,t.left+t.width);k<=p&&(q=Math.max(l.top,t.top),t=Math.min(l.top+l.height,t.top+t.height),q<=t&&(l.left=k,l.top=q,l.width=p-k,l.height=t-q))}k=Ed(a);q=Ed(c);if(k.f!=q.f){p=k.f.body;q=Pd(q.f);t=new E(0,0);var n=(n=Gd(p))?Pd(n):window;b:{try{Sc(n.parent);var u=!0;break b}catch(Ca){}u=!1}if(u){u=p;do{if(n==q)var I=Me(u);else I=Je(u),I=new E(I.left,I.top);t.x+=I.x;t.y+=I.y}while(n&&n!=q&&n!=n.parent&&(u=n.frameElement)&&(n=n.parent))}u=Cd(t,Me(p));!C||9<=Number(od)||Md(k.f)||(u=Cd(u,Nd(k.f)));
l.left+=u.x;l.top+=u.y}a=Mi(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new E(b,l.top+(a&1?l.height:0));b=Cd(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var v;g&&(v=Le(c))&&(v.top-=h.y,v.right-=h.x,v.bottom-=h.y,v.left-=h.x);e=v;v=b.clone();b=Mi(c,d);d=Oe(c);a=d.clone();v=v.clone();a=a.clone();u=0;if(f||0!=b)b&4?v.x-=a.width+(f?f.right:0):b&2?v.x-=a.width/2:f&&(v.x+=f.left),b&1?v.y-=a.height+(f?f.bottom:0):f&&(v.y+=f.top);g&&(e?(f=v,b=a,u=0,65==(g&65)&&(f.x<e.left||f.x>=e.right)&&(g&=
-2),132==(g&132)&&(f.y<e.top||f.y>=e.bottom)&&(g&=-5),f.x<e.left&&g&1&&(f.x=e.left,u|=1),g&16&&(h=f.x,f.x<e.left&&(f.x=e.left,u|=4),f.x+b.width>e.right&&(b.width=Math.min(e.right-f.x,h+b.width-e.left),b.width=Math.max(b.width,0),u|=4)),f.x+b.width>e.right&&g&1&&(f.x=Math.max(e.right-b.width,e.left),u|=1),g&2&&(u|=(f.x<e.left?16:0)|(f.x+b.width>e.right?32:0)),f.y<e.top&&g&4&&(f.y=e.top,u|=2),g&32&&(h=f.y,f.y<e.top&&(f.y=e.top,u|=8),f.y+b.height>e.bottom&&(b.height=Math.min(e.bottom-f.y,h+b.height-
e.top),b.height=Math.max(b.height,0),u|=8)),f.y+b.height>e.bottom&&g&4&&(f.y=Math.max(e.bottom-b.height,e.top),u|=2),g&8&&(u|=(f.y<e.top?64:0)|(f.y+b.height>e.bottom?128:0)),g=u):g=256,u=g);f=new De(0,0,0,0);f.left=v.x;f.top=v.y;f.width=a.width;f.height=a.height;g=u;g&496||(v=new E(f.left,f.top),v instanceof E?(e=v.x,v=v.y):(e=v,v=void 0),c.style.left=Ne(e,!1),c.style.top=Ne(v,!1),a=new Dd(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,e=Md(Ed(Gd(c)).f),!C||nd("10")||e&&
nd("8")?(c=c.style,Zc?c.MozBoxSizing="border-box":$c?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,e?(C?(e=Te(c,"paddingLeft"),v=Te(c,"paddingRight"),a=Te(c,"paddingTop"),b=Te(c,"paddingBottom"),e=new Ce(a,v,b,e)):(e=He(c,"paddingLeft"),v=He(c,"paddingRight"),a=He(c,"paddingTop"),b=He(c,"paddingBottom"),e=new Ce(parseFloat(a),parseFloat(v),parseFloat(b),parseFloat(e))),!C||9<=Number(od)?(v=He(c,"borderLeftWidth"),
a=He(c,"borderRightWidth"),b=He(c,"borderTopWidth"),c=He(c,"borderBottomWidth"),c=new Ce(parseFloat(b),parseFloat(a),parseFloat(c),parseFloat(v))):(v=Ve(c,"borderLeft"),a=Ve(c,"borderRight"),b=Ve(c,"borderTop"),c=Ve(c,"borderBottom"),c=new Ce(b,a,c,v)),d.pixelWidth=f.width-c.left-e.left-e.right-c.right,d.pixelHeight=f.height-c.top-e.top-e.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return g}
function Mi(a,b){return(b&8&&Re(a)?b^4:b)&-9}
;function Q(a){P.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.g={};this.o=!!a}
z(Q,P);m=Q.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Ni(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.ga(d),b.apply(void 0,arguments))},a)}
function Oi(a,b,c){if(b=a.g[b]){var d=a.f;(b=$a(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.ga(b)}}
m.ga=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ea):(c&&bb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.C=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];Pi(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.ga(c)}}return 0!=e}return!1};
function Pi(a,b,c){ef(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(A(b,this.ga,this),delete this.g[a])}else this.f.length=0,this.g={}};
function Qi(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=Qi(a,d);return c}
m.H=function(){Q.D.H.call(this);this.clear();this.i.length=0};function Ri(a){this.f=a}
Ri.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Fi(b))};
Ri.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ri.prototype.remove=function(a){this.f.remove(a)};function Si(a){this.f=a}
z(Si,Ri);function Ti(a){this.data=a}
function Ui(a){return void 0===a||a instanceof Ti?a:new Ti(a)}
Si.prototype.set=function(a,b){Si.D.set.call(this,a,Ui(b))};
Si.prototype.g=function(a){a=Si.D.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Si.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Vi(a){this.f=a}
z(Vi,Si);Vi.prototype.set=function(a,b,c){if(b=Ui(b)){if(c){if(c<Ra()){Vi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ra()}Vi.D.set.call(this,a,b)};
Vi.prototype.g=function(a){var b=Vi.D.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ra()||c&&c>Ra())Vi.prototype.remove.call(this,a);else return b}};function Wi(){}
;function Xi(){}
z(Xi,Wi);Xi.prototype.clear=function(){var a=Sg(this.da(!0)),b=this;A(a,function(c){b.remove(c)})};function Yi(a){this.f=a}
z(Yi,Xi);m=Yi.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.da=function(a){var b=0,c=this.f,d=new Pg;d.next=function(){if(b>=c.length)throw Og;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Zi(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
z(Zi,Yi);function $i(a,b){this.g=a;this.f=null;if(C&&!(9<=Number(od))){aj||(aj=new Tg);this.f=aj.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),aj.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
z($i,Xi);var bj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},aj=null;function cj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return bj[b]})}
m=$i.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(cj(a),b);dj(this)};
m.get=function(a){a=this.f.getAttribute(cj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(cj(a));dj(this)};
m.da=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Pg;d.next=function(){if(b>=c.length)throw Og;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);dj(this)};
function dj(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ej(a,b){this.g=a;this.f=b+"::"}
z(ej,Xi);ej.prototype.set=function(a,b){this.g.set(this.f+a,b)};
ej.prototype.get=function(a){return this.g.get(this.f+a)};
ej.prototype.remove=function(a){this.g.remove(this.f+a)};
ej.prototype.da=function(a){var b=this.g.da(!0),c=this,d=new Pg;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};y("userfeedback.api.startFeedback",function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||r,e=d.document,f=a.nonce||za(d);f&&!a.nonce&&(a.nonce=f);if("help"==a.flow){var g=w("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var h=JSON.stringify(b);(g=1200>=h.length)&&(a.psdJson=h)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,
b);else{d=c+"/load.js?";for(var k in a)b=a[k],null==b||Ka(b)||(d+=encodeURIComponent(k)+"="+encodeURIComponent(b)+"&");a=Ed(e).createElement("SCRIPT");f&&a.setAttribute("nonce",f);Hc(a,ne(d));e.body.appendChild(a)}});y("userfeedback.api.isBrowserSupportedForGenie",function(){return fj()});
function fj(){return C?0<=sb(Zg,"8"):pd?0<=sb(Zg,"15"):ud?0<=sb(Zg,"5"):td||Xc}
y("userfeedback.api.isBrowserSupportedForHelp",fj);var gj=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",gj);function hj(a){var b=arguments;1<b.length?gj[b[0]]=b[1]:1===b.length&&Object.assign(gj,b[0])}
function R(a,b){return a in gj?gj[a]:b}
function S(a){return R(a,void 0)}
;var ij=[];function jj(a){ij.forEach(function(b){return b(a)})}
function kj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){lj(b),jj(b)}}:a}
function lj(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),hj("ERRORS",b))}
function mj(a){var b=w("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),hj("ERRORS",b))}
;function T(a,b){Ja(a)&&(a=kj(a));return window.setTimeout(a,b)}
function nj(a){window.clearTimeout(a)}
;var oj=w("ytPubsubPubsubInstance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.ga;Q.prototype.publish=Q.prototype.C;Q.prototype.clear=Q.prototype.clear;y("ytPubsubPubsubInstance",oj);var pj=w("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",pj);var qj=w("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",qj);var rj=w("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",rj);
function sj(a,b,c){var d=tj();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){pj[e]&&b.apply(c||window,f)};
try{rj[a]?g():T(g,0)}catch(h){lj(h)}},c);
pj[e]=!0;qj[a]||(qj[a]=[]);qj[a].push(e);return e}return 0}
function uj(a){var b=tj();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),A(a,function(c){b.unsubscribeByKey(c);delete pj[c]}))}
function U(a,b){var c=tj();c&&c.publish.apply(c,arguments)}
function vj(a,b){rj[a]=!0;var c=tj();c&&c.publish.apply(c,arguments);rj[a]=!1}
function wj(a){var b=tj();if(b)if(b.clear(a),a)xj(a);else for(var c in qj)xj(c)}
function tj(){return w("ytPubsubPubsubInstance")}
function xj(a){qj[a]&&(a=qj[a],A(a,function(b){pj[b]&&delete pj[b]}),a.length=0)}
;var yj=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",yj);function zj(a){var b=void 0===b?{}:b;a=(a=a in yj?yj[a]:void 0)||"";var c={},d;for(d in b){c.ka=d;var e=function(f){return function(){return String(b[f.ka])}}(c);
a=a.replace(new RegExp("\\$\\{"+c.ka+"\\}","gi"),e);a=a.replace(new RegExp("\\$"+c.ka,"gi"),e);c={ka:c.ka}}return a}
;function Aj(a,b){this.version=a;this.args=b}
;function Bj(a,b){this.topic=a;this.f=b}
Bj.prototype.toString=function(){return this.topic};function Cj(){}
;function Dj(){}
la(Dj,Cj);function Ej(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():T(a,c||0)}
Dj.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
Fa(Dj);Dj.v();var Fj=w("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.ga;Q.prototype.publish=Q.prototype.C;Q.prototype.clear=Q.prototype.clear;y("ytPubsub2Pubsub2Instance",Fj);var Gj=w("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Gj);var Hj=w("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Hj);var Ij=w("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Ij);
y("ytPubsub2Pubsub2SkipSubKey",null);function Jj(a,b){var c=Kj();c&&c.publish.call(c,a.toString(),a,b)}
function Lj(a,b,c){var d=Kj();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=w("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(Gj[e])try{if(g&&a instanceof Bj&&a!=f)try{var k=a.f,l=g;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.ha){var p=new k;k.ha=p.version}var q=k.ha}catch(t){}if(!q||l.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(k,
db(l.args))}catch(t){throw t.message="yt.pubsub2.Data.deserialize(): "+t.message,t;}}catch(t){throw t.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+t.message,t;}b.call(c||window,g)}catch(t){lj(t)}},Ij[a.toString()]?w("yt.scheduler.instance")?Ej(h,1,void 0):T(h,0):h())});
Gj[e]=!0;Hj[a.toString()]||(Hj[a.toString()]=[]);Hj[a.toString()].push(e);return e}
function Mj(a){var b=Kj();b&&("number"===typeof a&&(a=[a]),A(a,function(c){b.unsubscribeByKey(c);delete Gj[c]}))}
function Kj(){return w("ytPubsub2Pubsub2Instance")}
;function Nj(a){Aj.call(this,1,arguments)}
z(Nj,Aj);function Oj(a){Aj.call(this,1,arguments);this.f=a}
z(Oj,Aj);function Pj(a,b,c){Aj.call(this,1,arguments);this.f=a;this.g=c}
z(Pj,Aj);var Qj=new Bj("subscription-batch-subscribe",Nj),Rj=new Bj("subscription-subscribe-success",Pj),Sj=new Bj("subscription-unsubscribe-success",Oj),Tj=new Bj("subscription-disable-ypc",Oj);function Uj(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Ha(b[f])?eb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};lj(h)}}}return b}
function Vj(a){var b=[];xb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Ha(c)?f=c:f=[c];A(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Wj(a){"?"==a.charAt(0)&&(a=a.substr(1));return Uj(a)}
function Xj(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Wj(1<a.length?a[1]:a[0])):{}}
function Yj(a,b){return Zj(a,b||{},!0)}
function Zj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Wj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ue(a,e)+d}
;function ak(a){var b=bk;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ck(b),dk(b));b.ca_type="image";a&&(b.bid=a);return b}
function ck(a){var b={};b.dt=We;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?D:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!D.navigator&&"unknown"!==typeof D.navigator.javaEnabled&&!!D.navigator.javaEnabled&&D.navigator.javaEnabled();D.screen&&(b.u_h=D.screen.height,b.u_w=D.screen.width,b.u_ah=D.screen.availHeight,b.u_aw=D.screen.availWidth,b.u_cd=D.screen.colorDepth);
D.navigator&&D.navigator.plugins&&(b.u_nplug=D.navigator.plugins.length);D.navigator&&D.navigator.mimeTypes&&(b.u_nmime=D.navigator.mimeTypes.length);return b}
function dk(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var g=b.innerWidth;var h=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=Ld(c||window).round()}catch(l){k=new Dd(-12245933,-12245933)}c=k;k={};d=new $g;r.SVGElement&&r.document.createElementNS&&d.set(0);e=Be();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);r.crypto&&r.crypto.subtle&&d.set(3);r.TextDecoder&&r.TextEncoder&&d.set(4);d=ah(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!D.WebGLRenderingContext,k}
var bk=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return Vj(ak(a))});Ra();function V(a){a=ek(a);return"string"===typeof a&&"false"===a?!1:!!a}
function fk(a,b){var c=ek(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function ek(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;var gk=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function hk(){if(!gk)return null;var a=gk();return"open"in a?a:null}
;var ik={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},jk="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
kk=!1;
function lk(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=re(1,a),e=qe(re(3,a));d&&e?(d=c,c=a.match(pe),d=d.match(pe),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?qe(re(3,c))==e&&(Number(re(4,c))||null)==(Number(re(4,a))||null):!0;d=V("web_ajax_ignore_global_headers_if_set");for(var f in ik)e=R(ik[f]),!e||!c&&!mk(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||mk(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||mk(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=
typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||mk(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Vj(ak(void 0));return b}
function nk(a){var b=window.location.search,c=qe(re(3,a)),d=qe(re(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Wj(b),f={};A(jk,function(g){e[g]&&(f[g]=e[g])});
return Zj(a,f||{},!1)}
function mk(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=qe(re(3,a));return d?(c=c[d])?ab(c,b):!1:!0}
function ok(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=pk(a,b);var d=qk(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&nj(f);var h=g.ok,k=function(l){l=l||{};var p=b.context||r;h?b.onSuccess&&b.onSuccess.call(p,l,g):b.onError&&b.onError.call(p,l,g);b.N&&b.N.call(p,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Vb&&0<b.timeout&&(f=T(function(){e||(e=!0,nj(f))},b.timeout))}else rk(a,b)}
function rk(a,b){var c=b.format||"JSON";a=pk(a,b);var d=qk(a,b),e=!1,f,g=sk(a,function(h){if(!e){e=!0;f&&nj(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var l=null,p=400<=h.status&&500>h.status,q=500<=h.status&&600>h.status;if(k||p||q)l=tk(c,h,b.Zc);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};p=b.context||r;
k?b.onSuccess&&b.onSuccess.call(p,h,l):b.onError&&b.onError.call(p,h,l);b.N&&b.N.call(p,h,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Za&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),nj(f))},b.timeout));
return g}
function pk(a,b){b.fd&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME"),d=b.ja;d&&(d[c]&&delete d[c],a=Yj(a,d));return a}
function qk(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.O,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.dd||qe(re(3,a))&&!b.withCredentials&&qe(re(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.O&&b.O[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Wj(e),Jb(e,f),e=b.ab&&"JSON"==b.ab?JSON.stringify(e):te(e));f=e||f&&!Db(f);!kk&&f&&"POST"!=b.method&&(kk=!0,lj(Error("AJAX request with postData should use POST")));
return e}
function tk(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?uk(b):null)d={},A(b.getElementsByTagName("*"),function(e){d[e.tagName]=vk(e)})}c&&wk(d);
return d}
function wk(a){if(Ka(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Cc(a[b],null):wk(a[b])}}
function uk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function vk(a){var b="";A(a.childNodes,function(c){b+=c.nodeValue});
return b}
function sk(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&kj(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=hk();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;V("debug_forward_web_query_parameters")&&(a=nk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=lk(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function xk(){P.call(this);this.f={}}
z(xk,P);Fa(xk);xk.prototype.init=Ea;xk.prototype.H=function(){this.f={}};
xk.prototype.set=function(a,b){this.f[a]=b};
xk.prototype.get=function(a){return this.f[a]||null};function yk(a,b){var c=xk.v(),d=a.onSuccess,e=a.onError,f=a.N;c.set(b,zk([function(g,h){d&&d.call(a.context,g,h);f&&f.call(a.context,g,h)}],[function(g,h){e&&e.call(a.context,g,h);
f&&f.call(a.context,g,h)}]));
a.onSuccess=function(g,h){for(var k=c.get(b),l;l=k.eb.shift();)l(g,h);h&&!h.error?(k.xhr=g,k.Ca=h,k.ma=2,c.set(b,k)):c.f[b]&&delete c.f[b]};
a.onError=function(g,h){for(var k=c.get(b),l;l=k.Ma.shift();)l(g,h);c.f[b]&&delete c.f[b]};
a.N=void 0}
function Ak(a,b){2==b.ma?T(function(){a.onSuccess&&a.onSuccess.call(a.context,b.xhr,b.Ca);a.N&&a.N.call(a.context,b.xhr,b.Ca)},0):1==b.ma&&(b.eb.push(function(c,d){a.onSuccess&&a.onSuccess.call(a.context,c,d);
a.N&&a.N.call(a.context,c,d)}),b.Ma.push(function(c,d){a.onError&&a.onError.call(a.context,c,d);
a.N&&a.N.call(a.context,c,d)}))}
function zk(a,b){return{xhr:new XMLHttpRequest,Ca:{},ma:1,eb:a,Ma:b}}
;function Bk(a,b){var c=a.itemData;c=["/offer_details_ajax",a.flowType,c&&c.itemId,c&&c.itemType,a.offerIdsToMatch,a.innertubeRequestParams,a.couponCode];c.sort(hb);c=c.join("-");b.method="POST";b.O=b.O||{};b.ja={ei:S("EVENT_ID")};var d=b.O,e=a.itemData,f=a.offerIdsToMatch,g=a.innertubeRequestParams,h=a.couponCode;e&&(d.ii=e.itemId,d.it=e.itemType);g&&(d.irp=g);f&&(d.offer_ids=f);h&&(d.cc=h);a:{b.context=b.context||r;d=xk.v();if(c&&d){if((e=d.get(c))&&(2==e.ma||1==e.ma)){Ak(b,e);break a}yk(b,c)}(e=
rk("/offer_details_ajax",b))&&c&&d&&(d.get(c).xhr=e)}}
;function Ck(a,b,c){a&&(a.dataset?a.dataset[Dk(b)]=String(c):a.setAttribute("data-"+b,c))}
function W(a,b){return a?a.dataset?a.dataset[Dk(b)]:a.getAttribute("data-"+b):null}
var Ek={};function Dk(a){return Ek[a]||(Ek[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Fk=0;function Gk(a){var b=a.__yt_uid_key;b||(b=Hk(),a.__yt_uid_key=b);return b}
function Ik(a,b){a=F(a);b=F(b);return!!me(a,function(c){return c===b},void 0)}
function Jk(a,b){var c=Id(document,a,null,b);return c.length?c[0]:null}
function Kk(a){Jg(document.body,"hide-players",!0);a&&Jg(a,"preserve-players",!0)}
function Lk(){Jg(document.body,"hide-players",!1);A(G("preserve-players"),function(a){O(a,"preserve-players")})}
var Hk=w("ytDomDomGetNextId")||function(){return++Fk};
y("ytDomDomGetNextId",Hk);var Mk={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Nk(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Mk||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Nk.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Nk.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Nk.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Cb=w("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",Cb);var Ok=w("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Ok);
function Pk(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Bb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ka(e[4])&&Ka(d)&&Fb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Y(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Pk(a,b,c,d);if(e)return e;e=++Ok.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Nk(h);if(!me(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Nk(h);
h.currentTarget=a;return c.call(a,h)};
g=kj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Qk()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Cb[e]=[a,b,c,g,d];return e}
function Rk(a,b,c,d){var e=a||document;return Y(e,b,function(f){var g=me(f.target,function(h){return h===e||d(h)});
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function Sk(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Qk=Qb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Tk(a,b,c,d){return Rk(a,b,c,function(e){return M(e,d)})}
function Uk(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Vk(a){a&&("string"==typeof a&&(a=[a]),A(a,function(b){if(b in Cb){var c=Cb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Qk()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Cb[b]}}))}
;function Wk(a,b){var c=b;c=void 0===c?{}:c;Ja(c)&&(c={callback:c});c._c&&c._c.jsl&&c._c.jsl.h||Jb(c,{_c:{jsl:{h:S("GAPI_HINT_PARAMS")}}});b=c;(b.gapiHintOverride||R("GAPI_HINT_OVERRIDE"))&&(c=Xj(document.location.href).gapi_jsh)&&Jb(b,{_c:{jsl:{h:c}}});Cg(a,b)}
;function Xk(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Gb(b);this.assets=a.assets||{};this.attrs=a.attrs||Gb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Xk.prototype.clone=function(){var a=new Xk,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=Gb(c):a[b]=c}return a};function Yk(){P.call(this);this.f=[]}
la(Yk,P);Yk.prototype.H=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.callback)}P.prototype.H.call(this)};var Zk=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,$k=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function al(a,b){var c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Zk,""),c=c.replace($k,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else bl(a,b,c)}
function bl(a,b,c){c=void 0===c?null:c;var d=cl(a),e=document.getElementById(d),f=e&&W(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=sj(d,b),b=""+La(b),dl[b]=f),g||(e=el(a,d,function(){W(e,"loaded")||(Ck(e,"loaded","true"),U(d),T(Qa(wj,d),0))},c)))}
function el(a,b,c,d){d=void 0===d?null:d;var e=Vd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Hc(e,ne(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function cl(a){var b=document.createElement("a");Gc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Nc(a)}
var dl={};var fl=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function gl(a){a=a||"";if(window.spf){var b=a.match(fl);spf.style.load(a,b?b[1]:"",void 0)}else hl(a)}
function hl(a){var b=il(a),c=document.getElementById(b),d=c&&W(c,"loaded");d||c&&!d||(c=jl(a,b,function(){W(c,"loaded")||(Ck(c,"loaded","true"),U(b),T(Qa(wj,b),0))}))}
function jl(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ne(a);d.rel="stylesheet";d.href=Zb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function il(a){var b=Vd("A");Gc(b,new $b(ac,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Nc(a)}
;function kl(a,b,c,d){P.call(this);var e=this;this.o=this.ra=a;this.oa=b;this.w=!1;this.api={};this.pa=this.X=null;this.V=new Q;eh(this,Qa(fh,this.V));this.j={};this.ba=this.qa=this.g=this.ya=this.f=null;this.aa=!1;this.l=this.L=null;this.sa={};this.mb=["onReady"];this.xa=null;this.Ea=NaN;this.ca={};this.i=d;ll(this);this.ta("WATCH_LATER_VIDEO_ADDED",this.ac.bind(this));this.ta("WATCH_LATER_VIDEO_REMOVED",this.dc.bind(this));this.ta("onAdAnnounce",this.ob.bind(this));this.nb=new Yk(this);eh(this,Qa(fh,
this.nb));this.na=0;c?this.na=T(function(){e.loadNewVideoConfig(c)},0):d&&(ml(this),nl(this))}
la(kl,P);m=kl.prototype;m.getId=function(){return this.oa};
m.loadNewVideoConfig=function(a){if(!this.R()){this.na&&(nj(this.na),this.na=0);a instanceof Xk||(a=new Xk(a));this.ya=a;this.f=a.clone();ml(this);this.qa||(this.qa=ol(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.o.style.width=Ne(Number(a)||a,!0);if(a=this.f.attrs.height)this.o.style.height=Ne(Number(a)||a,!0);nl(this);this.w&&pl(this)}};
function ml(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.g=b||a.g;"video-player"==a.g&&(a.g=a.oa,a.f.attrs.id=a.oa);a.o.id==a.g&&(a.g+="-player",a.f.attrs.id=a.g)}
m.tb=function(){return this.ya};
function pl(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function ql(a){var b=!0,c=rl(a);c&&a.f&&(a=sl(a),b=W(c,"version")===a);return b&&!!w("yt.player.Application.create")}
function nl(a){if(!a.R()&&!a.aa){var b=ql(a);if(b&&"html5"==(rl(a)?"html5":null))a.ba="html5",a.w||tl(a);else if(ul(a),a.ba="html5",b&&a.l)a.ra.appendChild(a.l),tl(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.L=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==Uj(d||"").player_bootstrap_method?w("yt.player.Application.createAlternate")||w("yt.player.Application.create"):w("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.ra,e,a.i);
tl(a)};
a.aa=!0;b?a.L():(al(sl(a),a.L),gl(a.i?a.i.cssUrl:a.f.assets.css),vl(a)&&!c&&y("yt.player.Application.create",null))}}}
function rl(a){var b=F(a.g);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.g));return b}
function tl(a){if(!a.R()){var b=rl(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.aa=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||wl(a)):a.Ea=T(function(){tl(a)},50)}}
function wl(a){ll(a);a.w=!0;var b=rl(a);b.addEventListener&&(a.X=xl(a,b,"addEventListener"));b.removeEventListener&&(a.pa=xl(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=xl(a,b,e))}for(var f in a.j)a.X(f,a.j[f]);pl(a);a.qa&&a.qa(a.api);a.V.C("onReady",a.api)}
function xl(a,b,c){var d=b[c];return function(){try{return a.xa=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.xa=e,mj(e))}}}
function ll(a){a.w=!1;if(a.pa)for(var b in a.j)a.pa(b,a.j[b]);for(var c in a.ca)nj(parseInt(c,10));a.ca={};a.X=null;a.pa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ta.bind(a);a.api.removeEventListener=a.pc.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ub.bind(a);a.api.getPlayerType=a.vb.bind(a);a.api.getCurrentVideoConfig=a.tb.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Kb.bind(a)}
m.Kb=function(){return this.w};
m.ta=function(a,b){var c=this,d=ol(this,b);if(d){if(!ab(this.mb,a)&&!this.j[a]){var e=yl(this,a);this.X&&this.X(a,e)}this.V.subscribe(a,d);"onReady"==a&&this.w&&T(function(){d(c.api)},0)}};
m.pc=function(a,b){if(!this.R()){var c=ol(this,b);c&&Oi(this.V,a,c)}};
function ol(a,b){var c=b;if("string"==typeof b){if(a.sa[b])return a.sa[b];c=function(){var d=w(b);d&&d.apply(r,arguments)};
a.sa[b]=c}return c?c:null}
function yl(a,b){var c="ytPlayer"+b+a.oa;a.j[b]=c;r[c]=function(d){var e=T(function(){if(!a.R()){a.V.C(b,d);var f=a.ca,g=String(e);g in f&&delete f[g]}},0);
Eb(a.ca,String(e))};
return c}
m.ob=function(a){U("a11y-announce",a)};
m.ac=function(a){U("WATCH_LATER_VIDEO_ADDED",a)};
m.dc=function(a){U("WATCH_LATER_VIDEO_REMOVED",a)};
m.vb=function(){return this.ba||(rl(this)?"html5":null)};
m.ub=function(){return this.xa};
function ul(a){a.cancel();ll(a);a.ba=null;a.f&&(a.f.loaded=!1);var b=rl(a);b&&(ql(a)||!vl(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));Wd(a.ra)}
m.cancel=function(){if(this.L){var a=this.L;sl(this)&&a&&(a=""+La(a),(a=dl[a])&&uj(a))}nj(this.Ea);this.aa=!1};
m.H=function(){ul(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){lj(b)}this.sa=null;for(var a in this.j)r[this.j[a]]=null;this.ya=this.f=this.api=null;delete this.ra;delete this.o;P.prototype.H.call(this)};
function vl(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function sl(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var zl={},Al="player_uid_"+(1E9*Math.random()>>>0);function Bl(a,b){(a=F(a))&&a.style&&(a.style.display=b?"":"none",Jg(a,"hid",!b))}
function Cl(a){return(a=F(a))?"none"!=a.style.display&&!M(a,"hid"):!1}
function Dl(a){A(arguments,function(b){!Ia(b)||b instanceof Element?Bl(b,!0):A(b,function(c){Dl(c)})})}
function El(a){A(arguments,function(b){!Ia(b)||b instanceof Element?Bl(b,!1):A(b,function(c){El(c)})})}
;var Fl={},Gl=!1;function Hl(a){var b=R("FEEDBACK_LOCALE_LANGUAGE");Jb(Fl,R("FEEDBACK_LOCALE_EXTRAS",{}));a&&Jb(Fl,a);try{var c=document.getElementById("player-api");if(c){var d=Al+"_"+La(c),e=zl[d];e||(e=new kl(c,d),zl[d]=e);var f=e.api}else f=null;f&&f.pauseVideo&&f.pauseVideo();f&&(Fl.playback_id=f.getVideoData().cpn,f.getLastError&&(Fl.api_error=f.getLastError()))}catch(g){}return{helpCenterPath:"/youtube",locale:b,productData:Fl}}
function Il(a){a={context:"moo",anchor:a,enableSendFeedback:!1,defaultHelpArticleId:void 0};var b=R("SESSION_INDEX"),c=R("FEEDBACK_BUCKET_ID"),d={abuseLink:"https://support.google.com/youtube/bin/answer.py?answer=140536",customZIndex:"2000000005",allowNonLoggedInFeedback:!0};b&&(d.authuser=b+"");c&&(d.bucket=c);Jb(a,d);return a}
function Jl(a,b,c){var d=(b||"59")+"",e=Hl(c),f=Il(a);Wk("client",function(){var g=e||{};g=Df(If,"help.service.Lazy.create",d,{apiKey:g.apiKey||g.apiKey,environment:g.cd||g.environment,helpCenterPath:g.ed||g.helpCenterPath,locale:g.locale||g.locale||"en".replace(/-/g,"_"),nonce:g.nonce||g.nonce,productData:g.productData||g.productData,receiverUri:g.hd||g.receiverUri,renderApiUri:g.jd||g.renderApiUri,theme:g.theme||g.theme,window:g.window||g.window});g=new Hf(g);if(!Gl)try{g.g(f),Gl=!0}catch(h){}g.i(f)})}
;var Kl=window,Ll=Kl.ytcsi&&Kl.ytcsi.now?Kl.ytcsi.now:Kl.performance&&Kl.performance.timing&&Kl.performance.now?function(){return Kl.performance.timing.navigationStart+Kl.performance.now()}:function(){return(new Date).getTime()};var Ml=fk("initial_gel_batch_timeout",1E3),Nl=Math.pow(2,16)-1,Ol=null,Pl=0,Ql={log_event:"events",log_interaction:"interactions"},Rl=Object.create(null);Rl.log_event="GENERIC_EVENT_LOGGING";Rl.log_interaction="INTERACTION_LOGGING";var Sl=new Set(["log_event"]),Tl={},Ul=0,Vl=0,Wl=0,Xl=!0,Yl=w("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",Yl);var Zl=w("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",Zl);
var $l=w("ytLoggingTransportDispatchedStats_")||{};y("ytLoggingTransportDispatchedStats_",$l);var am=w("ytLoggingTransportCapturedTime_")||{};y("ytytLoggingTransportCapturedTime_",am);function bm(){nj(Ul);nj(Vl);Vl=0;if(!Db(Yl)){for(var a in Yl){var b=Tl[a];b&&b.isReady()&&(cm(a,b),delete Yl[a],Xl=!1)}Db(Yl)||dm()}}
function em(){var a=[];for(e in Yl){var b=$l[e]||{};$l[e]=b;for(var c in Yl[e]){var d=fm(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(Ll());for(var f in $l)b=$l[f],b.eventType=f in Rl?Rl[f]:"UNKNOWN_TYPE",c=am[f],b.metricIntervalMs=c?e-c:e-NaN,a.push(b),am[f]=e,delete $l[f];return a}
function dm(){V("web_gel_timeout_cap")&&!Vl&&(Vl=T(bm,6E4));nj(Ul);var a=R("LOGGING_BATCH_TIMEOUT",fk("web_gel_debounce_ms",1E4));V("shorten_initial_gel_batch_timeout")&&Xl&&(a=Ml);Ul=T(bm,a)}
function fm(a,b){b=void 0===b?"":b;Yl[a]=Yl[a]||{};Yl[a][b]=Yl[a][b]||[];return Yl[a][b]}
function cm(a,b){var c=Ql[a],d=$l[a]||{};$l[a]=d;var e=Math.round(Ll());for(q in Yl[a]){var f=Hb,g=b.f||gm();g={client:{hl:g.Hb,gl:g.Gb,clientName:g.Fb,clientVersion:g.innertubeContextClientVersion,configInfo:g.Eb}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));h=R("EXPERIMENTS_TOKEN","");""!==h&&(g.client.experimentsToken=h);var k=h=void 0,l=[],p=R("EXPERIMENTS_FORCED_FLAGS",{});for(k in p)l.push({key:k,value:String(p[k])});k=R("EXPERIMENT_FLAGS",{});for(h in k)h.startsWith("force_")&&
void 0===p[h]&&l.push({key:h,value:String(k[h])});h=l;0<h.length&&(g.request={internalExperimentFlags:h});R("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&(g.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=fm(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Zl[q])a:{l=q;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:l,scope:h}]}delete Zl[q];f.requestTimeMs=e;V("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(g=S("EVENT_ID"))h=R("BATCH_CLIENT_COUNTER",void 0)||0,!h&&V("web_client_counter_random_seed")&&(h=Math.floor(Math.random()*Nl/2)),h++,h>Nl&&(h=1),hj("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,Ol&&Pl&&V("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Ol,roundtripMs:Pl}),
Ol=g,Pl=0;hm(b,a,f,{retry:Sl.has(a),onSuccess:x(im,this,Ll())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e}
function im(a){Pl=Math.round(Ll()-a)}
;var jm=w("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",jm);
function km(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Ll());e[a]=b;a=String;d.timestamp?b=-1:(b=w("_lact",window),b=null==b?-1:Math.max(Ra()-b,0));e.context={lastActivityMs:a(b)};V("log_sequence_info_on_gel_web")&&d.cb&&(a=e.context,b=d.cb,jm[b]=b in jm?jm[b]+1:0,a.sequence={index:jm[b],groupKey:b},d.bd&&delete jm[d.cb]);(d=d.ad)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Zl[d.token]=a,d=fm("log_event",d.token)):d=fm("log_event");
d.push(e);c&&(Tl.log_event=new c);c=fk("web_logging_max_batch")||100;e=Ll();d.length>=c?bm():10<=e-Wl&&(dm(),Wl=e)}
;function lm(){return"INNERTUBE_API_KEY"in gj&&"INNERTUBE_API_VERSION"in gj}
function gm(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),Eb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Fb:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),Hb:S("INNERTUBE_CONTEXT_HL"),Gb:S("INNERTUBE_CONTEXT_GL"),Ib:S("INNERTUBE_HOST_OVERRIDE")||"",Jb:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function mm(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Yc||R("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().Xc:b=Yf([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),V("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
function nm(a){a=Object.assign({},a);delete a.Authorization;var b=Yf();if(b){var c=new ch;c.update(S("INNERTUBE_API_KEY"));c.update(b);b=c.digest();c=3;Ia(b);void 0===c&&(c=0);if(!wd){wd={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));vd[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===wd[k]&&(wd[k]=h)}}}c=vd[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],p=(f=e+1<b.length)?b[e+1]:
0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|p>>4;p=(p&15)<<2|k>>6;k&=63;g||(k=64,f||(p=64));d.push(c[h],c[l],c[p]||"",c[k]||"")}a.hash=d.join("")}return a}
;function om(){var a=new Zi;(a=a.isAvailable()?new ej(a,"yt.innertube"):null)||(a=new $i("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Vi(a):null;this.g=document.domain||window.location.hostname}
om.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Ra()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Fi(b))}catch(f){return}else e=escape(b);b=this.g;yd.set(""+a,e,{Ra:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
om.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=yd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
om.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;yd.remove(""+a,"/",void 0===b?"youtube.com":b)};var pm=new om;function qm(a,b,c,d){if(d)return null;d=pm.get("nextId",!0)||1;var e=pm.get("requests",!0)||{};e[d]={method:a,request:b,authState:nm(c),requestTime:Math.round(Ll())};pm.set("nextId",d+1,86400,!0);pm.set("requests",e,86400,!0);return d}
function rm(a){var b=pm.get("requests",!0)||{};delete b[a];pm.set("requests",b,86400,!0)}
function sm(a){var b=pm.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Ll())-d.requestTime)){var e=d.authState,f=nm(mm(!1));Fb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Ll())),hm(a,d.method,e,{}));delete b[c]}}pm.set("requests",b,86400,!0)}}
;function tm(a){var b=this;this.f=null;a?this.f=a:V("delay_gel_until_config_ready")?lm()&&(this.f=gm()):this.f=gm();Ej(function(){sm(b)},0,5E3)}
tm.prototype.isReady=function(){!this.f&&lm()&&(this.f=gm());return!!this.f};
function hm(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&mj(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",O:c,ab:"JSON",Za:function(){},
Vb:d.Za,onSuccess:function(t,n){if(d.onSuccess)d.onSuccess(n)},
Ya:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,n){if(d.onError)d.onError(n)},
gd:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ib;g&&(f=g);g=a.f.Jb||!1;var h=mm(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=Yj(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&V("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=qm(b,c,h,g))){var p=e.onSuccess,q=e.Ya;e.onSuccess=function(t,n){rm(l);p(t,n)};
c.Ya=function(t,n){rm(l);q(t,n)}}try{V("use_fetch_for_op_xhr")?ok(k,e):(e.method="POST",e.O||(e.O={}),rk(k,e))}catch(t){if("InvalidAccessError"==t)l&&(rm(l),l=0),mj(Error("An extension is blocking network request."));
else throw t;}l&&Ej(function(){sm(a)},0,5E3)}
;var um=Ra().toString();var vm;
if(!(vm=w("ytLoggingTimeDocumentNonce_"))){var wm;a:{if(window.crypto&&window.crypto.getRandomValues)try{var xm=Array(16),ym=new Uint8Array(16);window.crypto.getRandomValues(ym);for(var zm=0;zm<xm.length;zm++)xm[zm]=ym[zm];wm=xm;break a}catch(a){}for(var Am=Array(16),Bm=0;16>Bm;Bm++){for(var Cm=Ra(),Dm=0;Dm<Cm%23;Dm++)Am[Bm]=Math.random();Am[Bm]=Math.floor(256*Math.random())}if(um)for(var Em=1,Fm=0;Fm<um.length;Fm++)Am[Em%16]=Am[Em%16]^Am[(Em-1)%16]/4^um.charCodeAt(Fm),Em++;wm=Am}for(var Gm=wm,Hm=
[],Im=0;Im<Gm.length;Im++)Hm.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Gm[Im]&63));vm=Hm.join("")}var Jm=vm;y("ytLoggingTimeDocumentNonce_",Jm);function Km(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Lm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
y("yt_logging_screen.getRootVeType",function(a){return R(Lm(void 0===a?0:a),void 0)});
function Mm(){var a=R("csn-to-ctt-auth-info");a||(a={},hj("csn-to-ctt-auth-info",a));return a}
function Nm(a){a=void 0===a?0:a;var b=R(Km(a));b||0!=a||(V("kevlar_client_side_screens")||V("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",Nm);function Om(a,b,c){var d=Mm();(c=Nm(c))&&delete d[c];b&&(d[a]=b)}
y("yt_logging_screen.getCttAuthInfo",function(a){return Mm()[a]});
y("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==R(Km(c))||b!==R(Lm(c)))Om(a,d,c),hj(Km(c),a),hj(Lm(c),b),0==c&&(b=function(){setTimeout(function(){a&&km("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Jm,clientScreenNonce:a},tm)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Pm(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=ue(a,b)+c;a=a instanceof $b?a:fc(a);d.href=cc(a)}
function Qm(a){(window.ytspf||{}).enabled?spf.navigate(a):Pm(a)}
;function Rm(a,b,c,d){c={supressError:!!c};a&&(c.overlayHtml=a);b&&(c.errorHtml=b);d&&(c.screenOverlayHtml=d);return c}
function Sm(a){var b={offersHtml:a.offers_html,channelsToSubscriptionidMap:a.channels_to_subscription_id_map,channelInfoMap:a.channel_info_map,componentChannels:a.component_channels,isPurchaseNotAvailable:a.not_available,messageHtml:a.message_html,isPlusPageDirectLogin:a.is_plus_page_direct_login,shouldSkipOverlay:a.should_skip_overlay};b.shouldSkipOverlay&&(b.skipOverlayConfig={offerId:a.offer_id||""});return b}
;function Tm(a,b){var c=void 0===c?{}:c;var d=tm;R("ytLoggingEventsDefaultDisabled",!1)&&tm==tm&&(d=null);km(a,b,d,c)}
function Um(){V("log_web_meta")&&em().forEach(function(a){Tm("delayedEventMetricCaptured",a)})}
;function Vm(a){a=void 0===a?!1:a;P.call(this);this.g=new Q(a);eh(this,Qa(fh,this.g))}
z(Vm,P);Vm.prototype.subscribe=function(a,b,c){return this.R()?0:this.g.subscribe(a,b,c)};
Vm.prototype.ga=function(a){return this.R()?!1:this.g.ga(a)};
Vm.prototype.C=function(a,b){return this.R()?!1:this.g.C.apply(this.g,arguments)};function Wm(){var a=S("DBLCLK_YPC_ACTIVITY_GROUP");a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+encodeURIComponent(String(R("DBLCLK_ADVERTISER_ID")))+";type="+encodeURIComponent(String(a))+";cat="+encodeURIComponent("brrim580");for(var b in void 0)a+=";"+encodeURIComponent(String(b))+"="+encodeURIComponent(String((void 0)[b]));a+=";num="+Ra();b=Vd("IFRAME");b.src=a;b.style.display="none";document.body.appendChild(b)}
;var Xm={},Ym="ontouchstart"in document;function Zm(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return me(c,function(e){return M(e,b)},d)}
function $m(a){var b="mouseover"==a.type&&"mouseenter"in Xm||"mouseout"==a.type&&"mouseleave"in Xm,c=a.type in Xm||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Xm[b];for(var d in c.g){var e=Zm(b,d,a.target);e&&!me(a.relatedTarget,function(f){return f==e})&&c.C(d,e,b,a)}}if(b=Xm[a.type])for(d in b.g)(e=Zm(a.type,d,a.target))&&b.C(d,e,a.type,a)}}
Y(document,"blur",$m,!0);Y(document,"change",$m,!0);Y(document,"click",$m);Y(document,"focus",$m,!0);Y(document,"mouseover",$m);Y(document,"mouseout",$m);Y(document,"mousedown",$m);Y(document,"keydown",$m);Y(document,"keyup",$m);Y(document,"keypress",$m);Y(document,"cut",$m);Y(document,"paste",$m);Ym&&(Y(document,"touchstart",$m),Y(document,"touchend",$m),Y(document,"touchcancel",$m));function an(a){this.l=a;this.F={};this.K=[];this.w=[]}
m=an.prototype;m.J=function(a){return J(a,Z(this))};
function Z(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
m.unregister=function(){uj(this.K);this.K.length=0;Mj(this.w);this.w.length=0};
m.init=Ea;m.dispose=Ea;function bn(a,b,c){a.K.push(sj(b,c,a))}
function cn(a,b,c,d){d=Z(a,d);var e=x(c,a);b in Xm||(Xm[b]=new Q);Xm[b].subscribe(d,e);a.F[c]=e}
function dn(a,b,c,d){if(b in Xm){var e=Xm[b];Oi(e,Z(a,d),a.F[c]);0>=Qi(e)&&(e.dispose(),delete Xm[b])}delete a.F[c]}
m.ia=function(a,b,c){var d=this.s(a,b);if(d&&(d=w(d))){var e=gb(arguments,2);fb(e,0,0,a);d.apply(null,e)}};
m.s=function(a,b){return W(a,b)};function en(){an.call(this,"button");this.f=null;this.i=[];this.g={}}
z(en,an);Fa(en);m=en.prototype;m.register=function(){cn(this,"click",this.Ia);cn(this,"keydown",this.Pa);cn(this,"keypress",this.Qa);bn(this,"page-scroll",this.yb)};
m.unregister=function(){dn(this,"click",this.Ia);dn(this,"keydown",this.Pa);dn(this,"keypress",this.Qa);fn(this);this.g={};en.D.unregister.call(this)};
m.Ia=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.Pa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=gn(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=ce(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Pb;else"table"==e&&(f=this.Ob);f&&hn(this,a,b,c,x(f,this))}}};
m.yb=function(){var a=this.g;if(0!=yb(a))for(var b in a){var c=a[b],d=J(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;jn(this,d,c,!0)}};
function hn(a,b,c,d,e){var f=Cl(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=kn(a,c))?(b=void 0!==d.firstElementChild?d.firstElementChild:Zd(d.firstChild),"a"==b.tagName.toLowerCase()?Pm(b.href):Uk(b)):g&&ln(a,b):f?27==d.keyCode?(kn(a,c),ln(a,b)):e(b,c,d):(a=M(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(Uk(b),d.preventDefault()))}
m.Qa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=gn(this,a),Cl(a)&&c.preventDefault())};
function kn(a,b){var c=Z(a,"menu-item-highlight"),d=H(c,b);d&&O(d,c);return d}
function mn(a,b,c){N(c,Z(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+La(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.Ob=function(a,b,c){var d=kn(this,b),e=Jk("table",b);b=Id(document,"td",null,e);d=nn(d,b,Id(document,"td",null,Jk("tr",e)).length,c);-1!=d&&(mn(this,a,b[d]),c.preventDefault())};
m.Pb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=kn(this,b);b=Wa(Id(document,"li",null,b),Cl);mn(this,a,b[nn(d,b,1,c)]);c.preventDefault()}};
function nn(a,b,c,d){var e=b.length;a=Va(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function on(a,b){var c=b.iframeMask;c||(c=Vd("IFRAME"),c.src='javascript:""',Gg(c,Z(a,"menu-mask")),El(c),b.iframeMask=c);return c}
function jn(a,b,c,d){var e=J(b,Z(a,"group")),f=!!a.s(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Qe(b);if(M(b,Z(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(p){}}M(b,"flip")&&(M(b,Z(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.s(b,"button-has-sibling-menu")?k=Ke(e):a.s(b,"button-menu-root-container")&&(k=pn(a,b));C&&!nd("8")&&(k=null);if(k){var l=Qe(k);l=new Ce(-l.top,l.left,l.top,-l.left)}k=new E(0,1);M(b,Z(a,"center-menu"))&&(k.x-=Math.round((Oe(c).width-Oe(b).width)/
2));d&&(k.y+=Nd(document).y);if(a=on(a,b))b=Oe(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Li(e,f,a,g,k,l,197),d&&Ee(a,"position","fixed");Li(e,f,c,g,k,l,197)}
function pn(a,b){if(a.s(b,"button-menu-root-container")){var c=a.s(b,"button-menu-root-container");return J(b,c)}return document.body}
m.hb=function(a){if(a){var b=gn(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.s(a,"button-has-sibling-menu")?c=a.parentNode:c=pn(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=on(this,a);d&&c.appendChild(d);(c=!!this.s(a,"button-menu-fixed"))&&(this.g[Gk(a).toString()]=b);jn(this,a,b,c);vj("yt-uix-button-menu-before-show",a,b);Dl(b);d&&Dl(d);
this.ia(a,"button-menu-action",!0);N(a,Z(this,"active"));b=x(this.gb,this,a,!1);d=x(this.gb,this,a,!0);c=x(this.uc,this,a,void 0);this.f&&gn(this,this.f)==gn(this,a)||fn(this);U("yt-uix-button-menu-show",a);Vk(this.i);this.i=[Y(document,"click",d),Y(document,"contextmenu",b),Y(window,"resize",c)];this.f=a}}};
function ln(a,b){if(b){var c=gn(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");El(c);a.ia(b,"button-menu-action",!1);var d=on(a,b),e=Gk(c).toString();delete a.g[e];T(function(){d&&d.parentNode&&(El(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=J(b,Z(a,"group"));
var f=[Z(a,"active")];e&&f.push(Z(a,"group-active"));Ig(b,f);U("yt-uix-button-menu-hide",b);Vk(a.i);a.i.length=0}}
m.uc=function(a,b){var c=gn(this,a);if(c){b&&(b instanceof zc?Fc(c,b):be(c,b));var d=!!this.s(a,"button-menu-fixed");jn(this,a,c,d)}};
m.gb=function(a,b,c){c=Sk(c);var d=J(c,Z(this));if(d){d=gn(this,d);var e=gn(this,a);if(d==e)return}d=J(c,Z(this,"menu"));e=d==gn(this,a);var f=M(c,Z(this,"menu-item")),g=M(c,Z(this,"menu-close"));if(!d||e&&(f||g))ln(this,a),d&&b&&this.s(a,"button-menu-indicate-selected")&&((a=H(Z(this,"content"),a))&&be(a,je(c)),qn(this,d,c))};
function qn(a,b,c){var d=Z(a,"menu-item-selected");A(G(d,b),function(e){O(e,d)});
N(c.parentNode,d)}
function gn(a,b){if(!b.widgetMenu){var c=a.s(b,"button-menu-id");c=c&&F(c);var d=Z(a,"menu");c?Hg(c,[d,Z(a,"menu-external")]):c=H(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return M(a,Z(this,"toggled"))};
m.toggle=function(a){if(this.s(a,"button-toggle")){var b=J(a,Z(this,"group")),c=Z(this,"toggled"),d=M(a,c);if(b&&this.s(b,"button-toggle-group")){var e=this.s(b,"button-toggle-group");A(G(Z(this),b),function(f){f!=a||"optional"==e&&d?(O(f,c),f.removeAttribute("aria-pressed")):(N(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Lg(a,c)}};
m.click=function(a){if(gn(this,a)){var b=gn(this,a);if(b){var c=J(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(ln(this,c),T(x(this.hb,this,a),1)):Cl(b)?ln(this,a):this.hb(a)}a.focus()}this.ia(a,"button-action")};
function fn(a){a.f&&ln(a,a.f)}
;function rn(a){an.call(this,a);this.i=null}
z(rn,an);m=rn.prototype;m.J=function(a){var b=an.prototype.J.call(this,a);return b?b:a};
m.register=function(){bn(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){sn(this);rn.D.dispose.call(this)};
m.s=function(a,b){var c=rn.D.s.call(this,a,b);return c?c:(c=rn.D.s.call(this,a,"card-config"))&&(c=w(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.J(a);if(b){N(b,Z(this,"active"));var c=tn(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;un(this,a,c);var d=Z(this,"card-visible"),e=this.s(a,"card-delegate-show")&&this.s(b,"card-action");this.ia(b,"card-action",a);this.i=a;El(c);T(x(function(){e||(Dl(c),U("yt-uix-card-show",b,a,c));vn(c);N(c,d);U("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function tn(a,b,c){var d=c||b,e=Z(a,"card");c=wn(a,d);var f=F(Z(a,"card")+Gk(d));if(f)return a=H(Z(a,"card-body"),f),ae(a,c)||(Xd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=Z(a,"card")+Gk(d);Gg(f,e);(d=a.s(d,"card-class"))&&Hg(f,d.split(/\s+/));d=document.createElement("div");d.className=Z(a,"card-border");b=a.s(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
Z(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Xd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function un(a,b,c){var d=a.s(b,"orientation")||"horizontal",e=H(Z(a,"anchor"),b)||b,f=a.s(b,"position"),g=!!a.s(b,"force-position"),h=a.s(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var p=13;var q=8}else l&&!k?(p=12,q=9):!l&&k?(p=9,q=12):(p=8,q=13);var t=Re(document.body);f=Re(b);t!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var n=new E(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,n=new E(b.offsetWidth+6,-12);var u=Oe(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?n.y+=12-b.offsetHeight/2:n.x+=12-b.offsetWidth/2);u=null;g||(u=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");Jg(c,b,l);Jg(c,a,k);u=Li(e,p,c,q,n,null,u);!g&&u&&(u&48&&(l=!l,p^=4,q^=4),u&192&&(k=!k,p^=1,q^=1),Jg(c,b,l),Jg(c,a,k),Li(e,p,c,q,n));h&&(e=parseInt(c.style.top,10),g=Nd(document).y,Ee(c,"position","fixed"),Ee(c,"top",e-g+"px"));t&&(c.style.right="",e=Qe(c),e.left=e.left||parseInt(c.style.left,10),g=Ld(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=H("yt-uix-card-body-arrow",c);g=H("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!t&&l||t&&!l?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=H("yt-uix-card-arrow",c);l=H("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?Oe(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.J(a)){var b=F(Z(this,"card")+Gk(a));b&&(O(a,Z(this,"active")),O(b,Z(this,"card-visible")),El(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Xd(b.cardMask),b.cardMask=null))}};
function sn(a){a.i&&a.hide(a.i)}
m.tc=function(a,b){var c=this.J(a);if(c){if(b){var d=wn(this,c);if(!d)return;b instanceof zc?Fc(d,b):be(d,b)}M(c,Z(this,"active"))&&(c=tn(this,a,c),un(this,a,c),Dl(c),vn(c))}};
m.isActive=function(a){return(a=this.J(a))?M(a,Z(this,"active")):!1};
function wn(a,b){var c=b.cardContentNode;if(!c){var d=Z(a,"content"),e=Z(a,"card-content");(c=(c=a.s(b,"card-id"))?F(c):H(d,b))||(c=document.createElement("div"));var f=c;O(f,d);N(f,e);b.cardContentNode=c}return c}
function vn(a){var b=a.cardMask;b||(b=Vd("IFRAME"),b.src='javascript:""',Hg(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function xn(){an.call(this,"kbd-nav")}
var yn;z(xn,an);Fa(xn);m=xn.prototype;m.register=function(){cn(this,"keydown",this.Na);bn(this,"yt-uix-kbd-nav-move-in",this.Wa);bn(this,"yt-uix-kbd-nav-move-in-to",this.Qb);bn(this,"yt-uix-kbd-move-next",this.Xa);bn(this,"yt-uix-kbd-nav-move-to",this.ua)};
m.unregister=function(){dn(this,"keydown",this.Na);Vk(yn)};
m.Na=function(a,b,c){var d=c.keyCode;if(a=J(a,Z(this)))switch(d){case 13:case 32:this.Wa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Ng(a,"kbdNavMoveOut");!c;){c=J(a.parentElement,Z(this));if(!c)break a;c=Ng(c,"kbdNavMoveOut")}c=F(c);this.ua(c);U("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&M(a,Z(this,"list")))switch(d){case 40:this.Xa(b,a);break;case 38:d=document.activeElement==a,a=zn(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),An(this,a[b]))}c.preventDefault()}};
m.Wa=function(a){var b=Ng(a,"kbdNavMoveIn");b=F(b);Bn(this,a,b);this.ua(b)};
m.Qb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Bn(this,d,a);this.ua(a)};
m.ua=function(a){if(a)if(ge(a))a.focus();else{var b=ce(a,function(c){return $d(c)?ge(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Bn(a,b,c){if(b&&c)if(N(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Mg&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.Xa=function(a,b){var c=document.activeElement==b,d=zn(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),An(this,d[c]))};
function An(a,b){if(b){var c=le(b,"LI");c&&(N(c,Z(a,"highlight")),yn=Y(b,"blur",x(function(d){O(d,Z(this,"highlight"));Vk(yn)},a,c)))}}
function zn(a){if("UL"!=a.tagName.toUpperCase())return[];a=Wa(Yd(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Wa(Xa(a,function(b){return Cl(b)?ce(b,function(c){return $d(c)?ge(c):!1}):!1}),function(b){return!!b})}
;function Cn(){an.call(this,"menu");this.g=this.f=null;this.i={};this.o={};this.j=null}
z(Cn,an);Fa(Cn);function Dn(a){var b=Cn.v();if(M(a,Z(b)))return a;var c=b.J(a);return c?c:J(a,Z(b,"content"))==b.f?b.g:null}
m=Cn.prototype;m.register=function(){cn(this,"click",this.ib);cn(this,"mouseenter",this.wb);bn(this,"page-scroll",this.zb);bn(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.J(a);En(this,a)});
this.j=new Q};
m.unregister=function(){dn(this,"click",this.ib);this.g=this.f=null;Vk(ib(zb(this.i)));this.i={};xb(this.o,function(a){Xd(a)},this);
this.o={};fh(this.j);this.j=null;Cn.D.unregister.call(this)};
m.ib=function(a,b,c){a&&(b=Fn(this,a),!b.disabled&&Ik(c.target,b)&&Gn(this,a))};
m.wb=function(a,b,c){a&&M(a,Z(this,"hover"))&&Ik(c.target,Fn(this,a))&&Gn(this,a,!0)};
m.zb=function(){this.f&&this.g&&Hn(this,this.g,this.f)};
function Hn(a,b,c){var d=In(a,b);if(d){var e=Oe(c);if(e instanceof Dd){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Ne(e,!0);d.style.height=Ne(f,!0)}c==a.f&&(e=9,f=8,M(b,Z(a,"reversed"))&&(e^=1,f^=1),M(b,Z(a,"flipped"))&&(e^=4,f^=4),a=new E(0,1),d&&Li(b,e,d,f,a,null,197),Li(b,e,c,f,a,null,197))}
function Gn(a,b,c){Jn(a,b)&&!c?En(a,b):(Kn(a,b),!a.f||Ik(b,a.f)?a.jb(b):Ni(a.j,x(a.jb,a,b)))}
m.jb=function(a){if(a){var b=Ln(this,a);if(b){vj("yt-uix-menu-before-show",a,b);this.f?Ik(a,this.f)||En(this,this.g):(this.g=a,this.f=b,M(a,Z(this,"sibling-content"))||(Xd(b),document.body.appendChild(b)),b.style.minWidth=Fn(this,a).offsetWidth-2+"px");var c=In(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);O(b,Z(this,"content-hidden"));Hn(this,a,b);Hg(Fn(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);U("yt-uix-menu-show",a);Mn(b);Nn(this,a);U("yt-uix-kbd-nav-move-in-to",
b);var d=x(this.vc,this,a),e=x(this.Mb,this,a);c=La(a).toString();this.i[c]=[Y(b,"click",e),Y(document,"click",d)];M(a,Z(this,"indicate-selected"))&&(d=x(this.Nb,this,a),this.i[c].push(Y(b,"click",d)));M(a,Z(this,"hover"))&&(a=x(this.xb,this,a),this.i[c].push(Y(document,"mousemove",a)))}}};
m.xb=function(a,b){var c=Sk(b);c&&(Ik(c,Fn(this,a))||On(this,c)||Pn(this,a))};
m.vc=function(a,b){var c=Sk(b);if(c){if(On(this,c)){var d=J(c,Z(this,"content")),e=le(c,"LI");e&&d&&ae(d,e)&&vj("yt-uix-menu-item-clicked",c);c=J(c,Z(this,"close-on-select"));if(!c)return;d=Dn(c)}En(this,d||a)}};
function Kn(a,b){if(b){var c=J(b,Z(a,"content"));c&&A(G(Z(a),c),function(d){!Ik(d,b)&&Jn(this,d)&&Pn(this,d)},a)}}
function En(a,b){if(b){var c=[];c.push(b);var d=Ln(a,b);d&&(d=G(Z(a),d),d=db(d),c=c.concat(d),A(c,function(e){Jn(this,e)&&Pn(this,e)},a))}}
function Pn(a,b){if(b){var c=Ln(a,b);Ig(Fn(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);N(c,Z(a,"content-hidden"));var d=Ln(a,b);d&&Jd(d,{"aria-expanded":"false"});(d=In(a,b))&&d.parentNode&&Xd(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.j&&a.j.C("ROOT_MENU_REMOVED"));U("yt-uix-menu-hide",b);c=La(b).toString();Vk(a.i[c]);delete a.i[c]}}
m.Mb=function(a,b){var c=Sk(b);c&&Qn(this,a,c)};
m.Nb=function(a,b){var c=Sk(b);if(c){var d=Fn(this,a);if(d&&(c=le(c,"LI")))if(c=je(c).trim(),d.hasChildNodes()){var e=en.v();(d=H(Z(e,"content"),d))&&be(d,c)}else be(d,c)}};
function Nn(a,b){var c=Ln(a,b);if(c){A(c.children,function(e){"LI"==e.tagName&&Jd(e,{role:"menuitem"})});
Jd(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+La(c),c.id=d);(c=Fn(a,b))&&Jd(c,{"aria-controls":d})}}
function Qn(a,b,c){var d=Ln(a,b);d&&M(b,Z(a,"checked"))&&(a=le(c,"LI"))&&(a=H("yt-ui-menu-item-checked-hid",a))&&(A(G("yt-ui-menu-item-checked",d),function(e){Kg(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Kg(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Jn(a,b){var c=Ln(a,b);return c?!M(c,Z(a,"content-hidden")):!1}
function Mn(a){A(Id(document,"UL",null,a),function(b){b.tabIndex=0;var c=xn.v();Hg(b,[Z(c),Z(c,"list")])})}
function Ln(a,b){var c=W(b,"menu-content-id");return c&&(c=F(c))?(Hg(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.g?a.f:H(Z(a,"content"),b)}
function In(a,b){var c=La(b).toString(),d=a.o[c];if(!d){d=Vd("IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];A(Fg(b),function(f){e.push(f+"-mask")});
Hg(d,e);a.o[c]=d}return d||null}
function Fn(a,b){return H(Z(a,"trigger"),b)}
function On(a,b){return Ik(b,a.f)||Ik(b,a.g)}
;function Rn(){rn.call(this,"clickcard");this.f={};this.g={}}
z(Rn,rn);Fa(Rn);m=Rn.prototype;m.register=function(){Rn.D.register.call(this);cn(this,"click",this.Ka,"target");cn(this,"click",this.Ja,"close")};
m.unregister=function(){Rn.D.unregister.call(this);dn(this,"click",this.Ka,"target");dn(this,"click",this.Ja,"close");for(var a in this.f)Vk(this.f[a]);this.f={};for(a in this.g)Vk(this.g[a]);this.g={}};
m.Ka=function(a,b,c){c.preventDefault();b=le(c.target,"button");b&&b.disabled||(a=(b=this.s(a,"card-target"))?Hd(b):a,b=this.J(a),this.s(b,"disabled")||(M(b,Z(this,"active"))?(this.hide(a),O(b,Z(this,"active"))):(this.show(a),N(b,Z(this,"active")))))};
m.show=function(a){Rn.D.show.call(this,a);var b=this.J(a),c=La(a).toString();if(!W(b,"click-outside-persists")){if(this.f[c])return;b=Y(document,"click",x(this.La,this,a));var d=Y(window,"blur",x(this.La,this,a));this.f[c]=[b,d]}a=Y(window,"resize",x(this.tc,this,a,void 0));this.g[c]=a};
m.hide=function(a){Rn.D.hide.call(this,a);a=La(a).toString();var b=this.f[a];b&&(Vk(b),this.f[a]=null);if(b=this.g[a])Vk(b),delete this.g[a]};
m.La=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=J(b.target,c)||J(Dn(b.target),c));(d=d||J(document.activeElement,c)||(document.activeElement?J(Dn(document.activeElement),c):null))||this.hide(a)};
m.Ja=function(a){(a=J(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Sn(){rn.call(this,"hovercard")}
z(Sn,rn);Fa(Sn);m=Sn.prototype;m.register=function(){cn(this,"mouseenter",this.Sa,"target");cn(this,"mouseleave",this.Ua,"target");cn(this,"mouseenter",this.Ta,"card");cn(this,"mouseleave",this.Va,"card")};
m.unregister=function(){dn(this,"mouseenter",this.Sa,"target");dn(this,"mouseleave",this.Ua,"target");dn(this,"mouseenter",this.Ta,"card");dn(this,"mouseleave",this.Va,"card")};
m.Sa=function(a){if(Tn!=a){Tn&&(this.hide(Tn),Tn=null);var b=x(this.show,this,a),c=parseInt(this.s(a,"delay-show"),10);b=T(b,-1<c?c:200);Ck(a,"card-timer",b.toString());Tn=a;a.alt&&(Ck(a,"card-alt",a.alt),a.alt="");a.title&&(Ck(a,"card-title",a.title),a.title="")}};
m.Ua=function(a){var b=parseInt(this.s(a,"card-timer"),10);nj(b);this.J(a).isCardHidable=!0;b=parseInt(this.s(a,"delay-hide"),10);b=-1<b?b:200;T(x(this.Ab,this,a),b);if(b=this.s(a,"card-alt"))a.alt=b;if(b=this.s(a,"card-title"))a.title=b};
m.Ab=function(a){this.J(a).isCardHidable&&(this.hide(a),Tn=null)};
m.Ta=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.Va=function(a){a&&this.hide(a.cardTargetNode)};
var Tn=null;function Un(a,b,c,d,e,f){this.f=a;this.F=null;this.i=H("yt-dialog-fg",this.f)||this.f;if(a=H("yt-dialog-title",this.i)){var g="yt-dialog-title-"+La(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.L=H("yt-dialog-focus-trap",this.f);this.V=!1;this.j=new Q;this.K=[];this.K.push(Tk(this.f,"click",x(this.Sb,this),"yt-dialog-dismiss"));this.K.push(Y(this.L,"focus",x(this.sb,this),!0));Vn(this);this.X=b;this.ba=c;this.aa=d;this.w=e;this.ca=
f;this.o=this.l=null}
var Wn={LOADING:"loading",Ic:"content",Vc:"working"};function Xn(a,b){a.R()||a.j.subscribe("post-all",b)}
function Vn(a){a=H("yt-dialog-fg-content",a.f);var b=[];xb(Wn,function(c){b.push("yt-dialog-show-"+c)});
Ig(a,b);N(a,"yt-dialog-show-content")}
m=Un.prototype;
m.show=function(){if(!this.R()){this.F=document.activeElement;if(!this.aa){this.g||(this.g=F("yt-dialog-bg"),this.g||(this.g=Vd("div"),this.g.id="yt-dialog-bg",Gg(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Ld(a).height,Md(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?
b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";Dl(this.g)}this.Oa();c=Yn(this);Zn(c);this.l=Y(document,"keydown",x(this.Lb,this));c=this.f;d=sj("player-added",this.Oa,this);Ck(c,"player-ready-pubsub-key",d);this.ba&&(this.o=Y(document,"click",x(this.mc,this)));Dl(this.f);this.i.setAttribute("tabindex","0");$n(this);this.w||N(document.body,"yt-dialog-active");fn(en.v());sn(Rn.v());sn(Sn.v());U("yt-ui-dialog-show-complete",this)}};
function ao(){return Za(G("yt-dialog"),function(a){return Cl(a)})}
m.Oa=function(){this.ca||Kk(this.f)};
function Yn(a){var b=Id(document,"iframe",null,a.f);A(b,function(c){var d=W(c,"onload");d&&(d=w(d))&&Y(c,"load",d);if(d=W(c,"src"))c.src=d},a);
return db(b)}
function Zn(a){A(document.getElementsByTagName("iframe"),function(b){-1==Va(a,b)&&N(b,"iframe-hid")})}
function bo(){A(G("iframe-hid"),function(a){O(a,"iframe-hid")})}
m.Sb=function(a){a=a.currentTarget;a.disabled||(a=W(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.R()){this.j.C("pre-all");this.j.C("pre-"+a);El(this.f);sn(Rn.v());sn(Sn.v());this.i.setAttribute("tabindex","-1");ao()||(El(this.g),this.w||O(document.body,"yt-dialog-active"),Lk(),bo());this.l&&(Vk(this.l),this.l=null);this.o&&(Vk(this.o),this.o=null);var b=this.f;if(b){var c=W(b,"player-ready-pubsub-key");c&&(uj(c),b&&(b.dataset?delete b.dataset[Dk("player-ready-pubsub-key")]:b.removeAttribute("data-player-ready-pubsub-key")))}this.j.C("post-all");U("yt-ui-dialog-hide-complete",
this);"cancel"==a&&U("yt-ui-dialog-cancelled",this);this.j&&this.j.C("post-"+a);this.F&&this.F.focus()}};
m.setTitle=function(a){be(H("yt-dialog-title",this.f),a)};
m.Lb=function(a){T(x(function(){this.X||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&M(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.mc=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.R=function(){return this.V};
m.dispose=function(){Cl(this.f)&&this.dismiss("dispose");Vk(this.K);this.K.length=0;T(x(function(){this.F=null},this),0);
this.L=this.i=null;this.j.dispose();this.j=null;this.V=!0};
m.sb=function(a){a.stopPropagation();$n(this)};
function $n(a){T(x(function(){this.i&&this.i.focus()},a),0)}
y("yt.ui.Dialog",Un);function co(a,b,c,d,e){Vm.call(this);this.o=a.config;this.w=a.itemData;this.L=a.offerData;this.G=b;this.f=c;this.i=d;this.l=a.innertubeRequestParams;this.j=e}
la(co,Vm);co.prototype.H=function(){this.G.track("dispose-orderprocessor");this.f=null;Vm.prototype.H.call(this)};
function eo(a){var b=S("YPC_TRANSACTION_URL"),c={oid:a.L.offerId,ps:"C"};a.f&&(c.oc=a.f);a.i&&(c.pp=a.i);var d=S("EVENT_ID");d={flow_uuid:fo(a.G),ei:d};if("U"==a.o.flowType)if(d={action_register_upgrade:1},a.j)c.tp=a.j;else{a.C("ypc-process-order-failure");return}else c.action_register=1,go(a.G,{registerTransactionAction:"action_register"}),c.eiid=a.w.itemId,c.it=a.w.itemType,c.cc=a.o.couponCode,a.l&&(c.irp=a.l);a.G.track("begin-register-transaction");rk(b,{method:"POST",context:a,O:c,ja:d,onSuccess:function(e,
f){switch(f.status){case 0:var g=f.subscription_id,h=null;g&&(h=f.channel_info);g={subscriptionId:g||null,channelInfo:h};f.post_purchase_redirect_url&&hj("YPC_POST_PURCHASE_REDIRECT_URL",f.post_purchase_redirect_url);f.red_theme&&hj("YPC_RED_THEME",f.red_theme);var k;f.post_purchase_screen_overlay_html?k=Rm(null,null,!1,f.post_purchase_screen_overlay_html):f.post_purchase_overlay_html&&(k=Rm(f.post_purchase_overlay_html));this.G.track("purchase-insert-success");this.C("ypc-process-order-success",
g,k);break;case 4:this.G.track("purchase-insert-sync-required");this.C("ypc-process-order-failure");break;case 2:this.G.track("purchase-insert-rejected");this.C("ypc-process-order-failure");break;default:this.G.track("purchase-insert-failure"),this.C("ypc-process-order-failure")}},
onError:function(e,f){ho(this.G,{http_status:e.status,servlet_status:f&&f.status});this.G.track("purchase-insert-failure");this.C("ypc-process-order-failure")}})}
;function io(a,b,c,d){var e={};e.serializedTransactionFlowLoggingParams=b;c&&(e.errorType=c);d&&(e.errorMessage=d);Tm(a,e);Um();bm()}
function jo(a){a&&io("transactionFlowSucceeded",a)}
function ko(a,b,c){b&&io("transactionFlowFailed",b,a,c)}
;var lo={},mo=0;function no(a){var b=new Image,c=""+mo++;lo[c]=b;b.onload=b.onerror=function(){delete lo[c]};
b.src=a}
;function oo(a){a="/gen_204?"+a;var b=void 0===b?"":b;if(a)if(b)sk(a,void 0,"POST",b,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))sk(a,void 0,"GET","",void 0);else{if((b=gj.EXPERIMENT_FLAGS)&&b.web_use_beacon_api_for_ad_click_server_pings)if((b=qe(re(5,a)))&&-1!=b.indexOf("/aclk")&&"1"===we(a,"ae")&&"1"===we(a,"act")){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var c=!0;break b}}catch(d){}c=!1}c=c?!0:!1}else c=!1;else c=!1;c||no(a)}}
;function po(a){P.call(this);this.i=a.flowName;this.g=fo(this);this.f=a.trackingData||{};go(this,{flowid:this.g,pageName:R("PAGE_NAME",null)});this.track("starting-tracking-for-ypc-flow")}
z(po,P);po.prototype.H=function(){this.track("end-of-tracking-for-ypc-flow");po.D.H.call(this);for(var a in this)delete this[a]};
function go(a,b){Jb(a.f,b)}
function ho(a,b){var c={};xb(b,function(d,e){"object"!=typeof d&&"function"!=typeof d&&(c["purchaseInsertFailure-"+e]=d)});
go(a,c)}
po.prototype.track=function(a,b){b=b||{};var c=R("PAGE_NAME",null),d=this.f.jstimestamp||null,e=Ra();d=d?e-d:null;Jb(b,{label:a,pageName:c,jstimestamp:e,previousTimeLoggedAt:this.f.label||null,timeFromLastTrack:d,netFlowTime:(this.f.netFlowTime||null)+d});go(this,b);c=te(this.f);oo("a="+this.i+(c?"&"+c:""))};
function fo(a){if(a.g)return a.g;var b=Ra();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var d=(b+16*Math.random())%16|0;b=Math.floor(b/16);return("x"==c?d:d&3|8).toString(16)})}
;function qo(){var a={};Jb(a,{label:"mb-api-loading",pageName:R("PAGE_NAME")});a=te(a);oo("a=ypc-checkout"+(a?"&"+a:""))}
function ro(){return new po({flowName:"ypc-checkout"})}
function so(a){return{itemType:a.itemData.itemType,itemId:a.itemData.itemId,offerId:a.offerData.offerId}}
;function to(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ca(ba(c)))}
la(to,Error);function uo(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0]),hj("ERRORS",b))}
;function vo(){this.f=null}
Fa(vo);vo.prototype.load=function(a){qo();this.f=S("YPC_MB_URL");al(this.f,x(function(){a&&a()},this))};
function wo(a,b,c,d,e,f,g,h){h&&io("transactionFlowStarted",h);a.load(x(function(){xo(this,b,c,d,e,f,g,h)},a))}
function yo(a,b){var c=b.mashupMode.popup("buyFlowDivId").usingDraggableDialog().usingPreferredWidth(600);V("enable_window_constrained_buy_flow_dialog")&&(c=c.usingPopupStyle(w("payments.business.integration").PopupStyle.WINDOW_CONSTRAINED));b.bootstrap.fromPaymentsUrl(a.f);c=b.bootstrap.asMashupMode(c);var d=R("YPC_GB_LANGUAGE");c.usingGaiaIndex(R("SESSION_INDEX")).usingLocale(d).usingDefaultActivityStatusChangeHandler().usingStyle(":md;pc=#444;ac=#065fd4").usingBaseZIndex(2E9);return c}
function xo(a,b,c,d,e,f,g,h){try{f&&f("orchestration-script-init");var k=w("payments.business.integration"),l=k.standaloneContextAuthId.forUserId(),p=yo(a,k);g&&p.usingServerAnalyticsEventHandler(g);var q=p.inStandaloneContext(l);f&&f("orchestration-script-bootstrapper");var t=q.buyFlow(function(n){!n||n.integratorData&&""!==n.integratorData&&!n.error||(null!=n.error?"-1"===String(n.error)?h&&io("transactionFlowCancelled",h):(ko("TRANSACTION_ERROR_TYPE_YPC_BUYFLOW_COMPLETE_FAILURE",h,n.debugCode),
uo(new to("PAYMENT_ERROR_MESSAGE::"+n.userVisibleErrorMessage,"PAYMENT_ERROR_DETAILS::"+n.internalErrorDetails))):(ko("TRANSACTION_ERROR_TYPE_YPC_BUYFLOW_COMPLETE_EMPTY",h),uo(Error("IntegratorData not present in BuyFlow Complete Callback"))));c&&c(n)}).withEncryptedParameters(b);
f&&f("orchestration-script-buy-flow-enc-params");t.load(d,function(n){ko("TRANSACTION_ERROR_TYPE_LOAD_FAILURE",h,n?n.debugCode:void 0);uo(n);e&&e(n)});
f&&f("orchestration-script-buy-flow-load")}catch(n){throw uo(n),n;}}
;function zo(a,b){Aj.call(this,2,arguments);this.f=b}
z(zo,Aj);function Ao(a){Aj.call(this,1,arguments)}
z(Ao,Aj);function Bo(a,b,c,d){Aj.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
z(Bo,Aj);function Co(a,b){Aj.call(this,1,arguments);this.f=b||null}
z(Co,Aj);function Do(a){Aj.call(this,1,arguments)}
z(Do,Aj);var Eo=new Bj("ypc-guide-sync-success",zo),Fo=new Bj("ypc-purchase-success",Bo),Go=new Bj("ypc-subscription-cancel",Do),Ho=new Bj("ypc-subscription-cancel-success",Co);function Io(a,b,c){Vm.call(this);this.l=a.config;this.o=a.itemData;this.w=a.offerData;this.G=b;this.wa=a;this.f=null;this.i=a.innertubeRequestParams;this.j=a.transactionLoggingParams;this.L=c}
la(Io,Vm);m=Io.prototype;m.H=function(){this.G.track("dispose-offerpurchase");Jo(this);Vm.prototype.H.call(this)};
function Ko(a){var b=S("YPC_TRANSACTION_URL"),c={oid:a.w.offerId},d=S("EVENT_ID");d={flow_uuid:fo(a.G),ei:d};var e=a.l.flowType;c.action_request=1;a.i&&(c.irp=a.i);go(a.G,{requestTransactionAction:"action_request"});a.l.couponCode&&(c.cc=a.l.couponCode);rk(b,{method:"POST",ja:d,O:c,context:a,onSuccess:function(f,g){a.G.track("dynamic-success");if(g.error_confirm_dialog_html){var h=g.error_confirm_dialog_html,k=new ki(ui(ti(qi()),Pb));a.C("ypc-close-offer-overlay");var l=document.createElement("div");
document.body.appendChild(l);h=Di(k,h);Fc(l,h);(l=void 0!==l.firstElementChild?l.firstElementChild:Zd(l.firstChild))&&(new Un(l)).show()}else Tm("buyFlowStarted",{offerParams:a.i}),Lo(a,g.encrypted_purchase_params)},
onError:function(f,g){var h=g.innertube_error_code,k=g.error||null;this.G.track("dynamic-error",{dynamicErrorStatus:g.status});"D"==e&&"start_payment"==this.wa.transactionAction&&"FORBIDDEN"==h?this.C("ypc-direct-purchase-error",{errorMessage:k}):Mo(this,k)}})}
function Lo(a,b){var c=vo.v();a.G.track("mb-start");a.C("ypc-purchase-wallet-start");var d=x(a.L.g,a.L,a.o,a.w);wo(c,b,x(a.Xb,a),x(a.Zb,a),x(a.Yb,a),x(a.Rb,a),d,a.j)}
m.Xb=function(a){this.C("ypc-purchase-wallet-end");a&&a.checkoutOrderId?(a=a.checkoutOrderId,this.G.track("mb-complete",{orderId:a}),No(this,a,null,null)):a&&a.integratorData?No(this,null,a.integratorData,null):(a=a.error,this.G.track("mb-complete-error",{mbCompleteErrorCode:a}),Mo(this,null,"-1"==String(a)))};
m.Zb=function(){this.G.track("mb-ready")};
m.Yb=function(a){this.C("ypc-purchase-wallet-end");this.G.track("mb-error");this.G.track("mb-error",{mbFailureErrorName:a.name,mbFailureErrorMessage:a.message?a.message.substring(0,1400):""});Mo(this,null,!0)};
m.Rb=function(a){this.G.track("mb-"+a)};
function No(a,b,c,d){a.f=new co(a.wa,a.G,b,c,d);a.f&&(a.f.subscribe("ypc-process-order-success",a.hc,a),a.f.subscribe("ypc-process-order-failure",a.fc,a));eo(a.f)}
function Mo(a,b,c){a.C("ypc-post-purchase-init",Rm(null,b,c))}
m.hc=function(a,b){Jo(this);Wm();var c=this.o.itemId,d=this.o.itemType,e={it:d,ii:c};if(b)this.C("ypc-post-purchase-init",b);else{e.oid=this.w.offerId;this.G.track("post-purchase-request");var f=S("YPC_POST_PURCHASE_URL");"YPC_RED_THEME"in gj&&(e.red_theme=S("YPC_RED_THEME"));rk(f,{method:"GET",context:this,ja:e,N:function(g,h){this.C("ypc-post-purchase-init",Rm(h.html,h.error))}})}Jj(Fo,new Bo({itemType:d,
itemId:c},a,d,c));jo(this.j)};
m.fc=function(){Jo(this);this.C("ypc-post-purchase-init",Rm());ko("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE",this.j)};
function Jo(a){a.f&&(a.f.dispose(),a.f=null)}
;function Oo(){this.i=S("YPC_TRANSACTION_URL");this.f=void 0}
Oo.prototype.g=function(a,b,c){a={action_log_payment_server_analytics:1,backend_analytics_event:c,it:a.itemType,ii:a.itemId,oid:b.offerId};this.f&&(a.session_token=this.f);rk(this.i,{method:"POST",O:a,context:this})};function Po(a){P.call(this);this.g=a||window;this.f=[]}
la(Po,P);function Qo(a,b,c,d,e){d=x(d,a.g);b=Tk(b,c,d,e);a.f.push(b)}
function Ro(a){Vk(a.f);a.f.length=0}
Po.prototype.H=function(){Ro(this);P.prototype.H.call(this)};function So(a){P.call(this);this.i=new Po(this);this.g=H("ypc-offer-overlay-container");this.f=a;this.o=[];this.w=[];this.la();this.Aa()}
z(So,P);So.prototype.H=function(){Ro(this.i);uj(this.o);this.o.length=0;Mj(this.w);this.w.length=0;So.D.H.call(this)};
So.prototype.la=function(){Qo(this.i,this.g,"click",this.W,"ypc-offer-overlay-close")};
So.prototype.Aa=function(){this.o.push(sj("dispose",this.W,this))};
So.prototype.W=function(a){a instanceof Nk&&a.preventDefault();this.f&&this.f.hide();this.dispose()};function To(a,b){P.call(this);this.j=H(a);this.i=b;this.f=this.g=null}
la(To,P);m=To.prototype;m.start=function(a,b,c,d,e,f){this.f=T(x(this.abort,this,a),3E5);Wk("family_creation",x(this.qc,this,a,b,c,d,e,f))};
m.abort=function(a){this.f&&(this.f&&(nj(this.f),this.f=null),a.f.showError(),Xd(this.g))};
m.qc=function(a,b,c,d,e,f){var g=R("YTR_FAMILY_CREATION_URL");yb(f)&&(g=Zj(g,f||{},!1));f=w("gapi.config.update");Ja(f)&&f("iframes/family_creation/url",g);a={clientId:3,initialflow:[4,5,6,7],authUser:R("SESSION_INDEX")||0,onFlowComplete:x(this.Wb,this,a,d),OnError:x(this.Ub,this,a,e),onReady:x(this.ic,this,a,c)};b&&(a.hl=b);b=w("gapi.family_creation.render");Ja(b)&&(this.g||(this.g=H(this.i),this.g||(this.g=Qd("div",this.i),this.j.appendChild(this.g))),b(this.g,a))};
m.Wb=function(a,b){a.W(null,!1,b)};
m.Ub=function(a,b){a.W(null,!1,b)};
m.ic=function(a,b){if(this.f){this.f&&(nj(this.f),this.f=null);if(b){var c=w("gapi.family_creation.setConfig");Ja(c)&&c(0,b)}a.f.T("ypc-offer-overlay-show-unicorn-iframe-in-content")}};function Uo(){an.call(this,"overlay");this.j=this.g=this.i=this.f=null}
z(Uo,an);Fa(Uo);m=Uo.prototype;m.register=function(){cn(this,"click",this.Da,"target");cn(this,"click",this.hide,"close");Vo(this)};
m.unregister=function(){Uo.D.unregister.call(this);dn(this,"click",this.Da,"target");dn(this,"click",this.hide,"close");this.j&&(uj(this.j),this.j=null);this.g&&(Vk(this.g),this.g=null)};
m.Da=function(a){if(!this.f||!Cl(this.f.f)){var b=this.J(a);a=Wo(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.s(b,"disable-shortcuts")||!1,d=!!this.s(b,"disable-outside-click-dismiss")||!1;this.f=new Un(a,c);this.i=b;var e=H("yt-dialog-fg",a);if(e){var f=this.s(b,"overlay-class")||"",g=this.s(b,"overlay-style")||"default",h=this.s(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(Z(this,g));f.push(Z(this,h));Hg(e,f)}this.f.show();U("yt-uix-kbd-nav-move-to",e||a);Vo(this);c||
d||(c=x(function(k){M(k.target,"yt-dialog-base")&&Xo(this)},this),this.g=Y(H("yt-dialog-base",a),"click",c));
this.ia(b,"overlay-shown");U("yt-uix-overlay-shown",b)}}};
function Vo(a){a.j||(a.j=sj("yt-uix-overlay-hide",Yo));a.f&&Xn(a.f,function(){var b=Uo.v();b.i=null;b.f.dispose();b.f=null})}
function Xo(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.ia(b,"overlay-hidden");a.i=null;a.g&&(Vk(a.g),a.g=null);a.f=null}}
function Wo(a,b){var c;if(a)if(c=H("yt-dialog",a)){var d=F("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=J(b,"yt-dialog"));return c}
function Zo(){var a=Uo.v();if(a.i)a=H("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=G("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=J(a[b],"yt-dialog");if(Cl(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||U("yt-uix-overlay-hide")};
function Yo(){Xo(Uo.v())}
m.show=function(a){this.Da(a)};function $o(a){var b=document.createElement("div");b.innerHTML=a;document.body.appendChild(b);this.id="ypc-offer-overlay"}
var ap={Pc:"ypc-offer-overlay-show-loading",Oc:"ypc-offer-overlay-show-error",Mc:"ypc-offer-overlay-show-offers-content",Qc:"ypc-offer-overlay-show-not-available-error"};$o.prototype.hide=function(){Uo.v().hide()};
$o.prototype.show=function(a){a=Hd(a);Uo.v().show(a)};
function bp(a){var b=Zo();return b?H(a,b):null}
function cp(a){a&&Jb(ap,a);a=bp("ypc-offer-overlay-container");Ig(a,zb(ap))}
$o.prototype.T=function(a){var b=bp("ypc-offer-overlay-container");N(b,a)};
function dp(a){a.show(a.id);a.T("ypc-offer-overlay-show-loading")}
;function ep(a){So.call(this,a);Qo(this.i,this.g,"click",this.l,"unlimited-family-message-action-button");Qo(this.i,this.g,"click",this.L,"unlimited-family-message-not-now-button")}
la(ep,So);ep.prototype.L=function(a){(a=Ng(a.currentTarget,"come_back_html"))?this.f.Z(Jc(a),!0):(a=this.f,a.f?(a.Z(a.f),a=!0):a=!1,a||this.W(null,!1,null))};
ep.prototype.l=function(a){var b=Ng(a.currentTarget,"is_unicorn_debug_enabled"),c=Ng(a.currentTarget,"hl"),d=Ng(a.currentTarget,"rpcid_params"),e=Ng(a.currentTarget,"success_redirect_url");a=Ng(a.currentTarget,"error_redirect_url");dp(this.f);this.j||(this.j=new To("ypc-offer-overlay-content-wrapper","unlimited-family-message-overlay-container"));a:{if(b&&"true"==b&&(b=Xj(window.location.href).unicorn)){b=Wj(decodeURIComponent(b));break a}b={}}this.j.start(this,c,d,e,a,b)};
ep.prototype.W=function(a,b,c){a instanceof Nk&&a.preventDefault();this.f&&this.f.hide();c?Qm(c):b&&window.location.reload(!0);this.dispose()};function fp(){$o.call(this,zj("YPC_OFFER_OVERLAY"));this.g=gp();this.f=null}
z(fp,$o);Fa(fp);var ri="data-come_back_html data-error_redirect_url data-hl data-is_unicorn_debug_enabled data-rpcid_params data-sessionlink data-success_redirect_url data-url data-visibility-tracking data-ytimg".split(" "),hp={lb:"ypc-offer-overlay-show-unicorn-iframe-in-content"};function gp(){return new ki(ui(ti(pi()),function(a){return a}))}
m=fp.prototype;m.Z=function(a,b){var c=bp("ypc-offer-overlay-content-wrapper");if(a&&c){var d=Di(this.g,a);Fc(c,d);this.T("ypc-offer-overlay-show-offers-content");b||(this.f=a)}};
m.showError=function(a){var b=bp("ypc-offer-overlay-error");O(b,"ypc-offer-overlay-show-custom-error");var c=bp("ypc-offer-overlay-error-custom-content");a&&c&&(N(b,"ypc-offer-overlay-show-custom-error"),a=Di(this.g,a),Fc(c,a));this.T("ypc-offer-overlay-show-error")};
m.hide=function(){var a=bp("ypc-offer-overlay-content-wrapper");a&&Wd(a);fp.D.hide.call(this)};
m.T=function(a){cp(hp);fp.D.T.call(this,a);"ypc-offer-overlay-show-unicorn-iframe-in-content"==a?ip(!0):ip(!1)};
function ip(a){var b=H("ypc-offer-overlay-container"),c=H("yt-dialog-show-content"),d=J(c,"yt-dialog-base");b&&jp(b,a);c&&jp(c,a);d&&jp(d,a)}
function jp(a,b){a&&(b&&!M(a,"ytr-style-unicorn-iframe-container")?N(a,"ytr-style-unicorn-iframe-container"):!b&&M(a,"ytr-style-unicorn-iframe-container")&&O(a,"ytr-style-unicorn-iframe-container"))}
m.ea=function(){return new ep(this)};function kp(a,b,c){So.call(this,a);this.l=b;this.f=a;this.flowType=c;this.j=null}
z(kp,So);m=kp.prototype;m.H=function(){this.l.track("dispose-OfferOverlay-EventsManager");lp(this);this.l.dispose();Ro(this.i);uj(this.o);this.o.length=0;Mj(this.w);this.w.length=0;kp.D.H.call(this)};
m.la=function(){kp.D.la.call(this);Qo(this.i,this.g,"click",this.va,"ypc-offer-overlay-offer-button");Qo(this.i,this.g,"click",this.ec,"ypc-post-purchase-overlay-done-button");Qo(this.i,this.g,"click",this.jc,"ypc-offer-overlay-switch-accounts-button")};
function mp(a,b){b&&(b.subscribe("ypc-purchase-wallet-start",a.lc,a),b.subscribe("ypc-purchase-wallet-end",a.kc,a),b.subscribe("ypc-post-purchase-init",a.nc,a),b.subscribe("ypc-direct-purchase-error",a.rb,a),b.subscribe("ypc-close-offer-overlay",a.Tb,a))}
m.W=function(a){a instanceof Nk&&a.preventDefault();this.f&&this.f.hide();Jj("ypc-purchase-flow-end");this.dispose()};
m.va=function(a){var b=a.currentTarget;if(b){var c=this.flowType;if(b){var d=W(b,"ypc-item-type"),e=W(b,"ypc-item-id"),f=W(b,"ypc-offer-id"),g=W(b,"coupon-code"),h=W(b,"ypc-from-purchase-ids");a=W(b,"ypc-gtm-data");var k=W(b,"ypc-offer-jwt"),l=W(b,"ypc-offer-encrypted-purchase-params"),p=W(b,"ypc-irp"),q=W(b,"ypc-transaction-action"),t=W(b,"ypc-transaction-params");b=W(b,"ypc-serialized-transaction-flow-logging-params");c={config:{couponCode:g,fromPurchaseIds:h,flowType:c},itemData:{itemId:e,itemType:d},
offerData:{offerId:f}};if(k||l)d={},k&&(d.jwt=k),l&&(d.encryptedPurchaseParams=l),c.walletPrefetchdata=d;p&&(c.innertubeRequestParams=p);q&&(c.transactionAction=q);t&&(c.transactionParams=t);b&&(c.transactionLoggingParams=b);a&&(c.gtmData=a);a=c}else a=null;a?(this.l.track("initiate-purchase-from-offeroverlay"),np(this,a)):lj(Error("ypc-offer-overlay-offer-button does not contain purchaseFlowData."))}};
function np(a,b){op();pp(a,b);a.j=new Io(b,a.l,new Oo);mp(a,a.j);var c=a.j,d=c.wa.walletPrefetchdata;d&&d.encryptedPurchaseParams?(Tm("buyFlowStarted",{offerParams:c.i}),Lo(c,d.encryptedPurchaseParams)):Ko(c)}
m.lc=function(){this.f&&this.f.hide();Kk()};
m.kc=function(){Lk();dp(this.f)};
m.nc=function(a){lp(this);var b=a.overlayHtml||null,c=a.screenOverlayHtml||null,d=a.errorHtml||null;a=!!a.supressError;c?(b=fp.v(),dp(b),b.Z(c),b.ea()):b?this.f.Z(b):a?this.W(null):d?this.f.showError(d):this.f.showError()};
m.ec=function(){var a=[];A(G("subscription-list-item",this.g),function(b){M(b,"selected")&&a.push(W(b,"channel-id"))});
a.length?(dp(this.f),Jj(Qj,new Nj(a))):this.W(null)};
function pp(a,b){var c=b.itemData;c={itemType:c.itemType,itemId:c.itemId,offerId:b.offerData.offerId,flowType:a.flowType};var d=b.config.couponCode;d&&(c.couponCode=d);go(a.l,c)}
function lp(a){a.j&&(a.j.dispose(),a.j=null)}
m.jc=function(a){a.preventDefault();Qm(Yj(S("YPC_SWITCH_URL"),{next:window.location.href}))};
m.rb=function(a){lp(this);a=a.errorMessage||"";if(this.f&&a){var b=this.f;b.show(b.id);b.showError(a)}};
m.Tb=function(){this.f&&this.f.hide()};function qp(a,b){kp.call(this,a,b,"D")}
z(qp,kp);m=qp.prototype;m.la=function(){qp.D.la.call(this);Qo(this.i,this.g,"click",Qa(this.fb,!0),"ypc-offer-overlay-show-subscription-offers");Qo(this.i,this.g,"click",Qa(this.fb,!1),"ypc-offer-overlay-show-non-subscription-offers");Qo(this.i,this.g,"click",this.sc,"ypc-google-help");Qo(this.i,this.g,"click",this.Ga,"ypc-offer-overlay-apply-coupon");Qo(this.i,this.g,"keydown",this.Ga,"ypc-offer-overlay-show-coupon-input")};
m.Aa=function(){qp.D.Aa.call(this);this.w.push(Lj("subscription-batch-subscribe-finished",this.W,this),Lj("subscription-batch-subscribe-failure",this.f.showError,this.f))};
m.fb=function(a){Jg(H("ypc-offer-overlay-offers-section",this.g),"show-subscription-offers",!!a)};
m.Ga=function(a){if("keydown"!=a.type||13==a.keyCode){a=kb(H("ypc-offer-overlay-show-coupon-input",this.g).value);var b=[];a&&(A(G("ypc-offer-overlay-offer-button",this.g),function(c){(c=W(c,"ypc-offer-id"))&&b.push(c)}),0!=b.length&&(op(),rk(S("YPC_TRANSACTION_URL"),{method:"POST",
O:{action_apply_coupon:1,cc:a,oids:b.join(",")},context:this,onSuccess:function(c,d){var e=rp(this,d);sp();tp(this,e);e||up(this,d)},
onError:function(c,d){sp();tp(this,!1);up(this,d)}})))}};
function rp(a,b){var c=b.updated_offers,d=b.coupon_code,e=!1;typeof("number"==b.status&&c)&&A(G("ypc-coupon-updatable",a.g),function(f){var g=W(f,"ypc-offer-id");g=c[g];if(g.is_coupon_applied){var h;M(f,"ypc-coupon-updatable-offer-price-text")?h=g.updated_display_price:M(f,"ypc-coupon-updatable-free-trial-text")&&(h=g.updated_free_trial_text);h&&(be(f,h),Ck(f,"coupon-code",d),e=!0)}},a);
return e}
function tp(a,b){var c=H("ypc-offer-overlay-coupon-section",a.g),d=H("ypc-offer-overlay-show-coupon-input",a.g),e=H("ypc-offer-overlay-apply-coupon",a.g);Ig(c,["ypc-valid-coupon","ypc-invalid-coupon"]);b?(N(c,"ypc-valid-coupon"),d.disabled=!0,e.disabled=!0):(N(c,"ypc-invalid-coupon"),d.value="",d.focus())}
function up(a,b){b.error&&be(H("ypc-offer-overlay-show-coupon-error",a.g),b.error)}
m.sc=function(){var a=H("ypc-google-help",this.g),b=H("ypc-offer-overlay-offer-button",this.g);if(b)var c=W(b,"ghelp-product-id"),d=W(b,"ghelp-product-data");c&&d&&(b=JSON.parse(d),Jl(a,c,b))};function vp(){$o.call(this,zj("YPC_OFFER_OVERLAY"))}
z(vp,$o);Fa(vp);var wp={Tc:"ypc-offer-overlay-show-tip-not-available-error",Rc:"ypc-offer-overlay-show-plus-page-not-available-error",lb:"ypc-offer-overlay-show-unicorn-iframe-in-content"},xp={Nc:"ypc-offer-overlay-flow-default",Sc:"ypc-offer-overlay-flow-tip"};m=vp.prototype;m.Z=function(a){a&&(bp("ypc-offer-overlay-content-wrapper").innerHTML=a,this.T("ypc-offer-overlay-show-offers-content"))};
m.showError=function(a){var b=bp("ypc-offer-overlay-error");b&&(O(b,"ypc-offer-overlay-show-custom-error"),a&&(N(b,"ypc-offer-overlay-show-custom-error"),bp("ypc-offer-overlay-error-custom-content").innerHTML=a),this.T("ypc-offer-overlay-show-error"))};
function yp(a,b){var c=b.flowTracker,d=b.itemData,e=b.flowType;c.track("flow-start",{itemType:d&&d.itemType,itemId:d&&d.itemId,flowType:e,innertubeRequestParams:b.innertubeRequestParams,couponCode:b.couponCode});Jj("ypc-purchase-flow-start",new Ao(e));dp(a);zp();Bk(b,{context:a,onSuccess:function(f,g){c.track("flow-offers-load-success");var h=Sm(g),k=h.offersHtml,l=h.channelsToSubscriptionidMap,p=h.componentChannels,q=h.isPurchaseNotAvailable;k?(vo.v().load(),this.Z(k)):l&&!Db(l)?(Jj(Eo,new zo(l,
h.channelInfoMap)),A(p,function(t){Jj(Tj,new Oj(t))}),c.track("flow-offers-already-purchased-error"),this.showError(h.messageHtml)):q?(c.track("flow-offers-not-available-error"),Ap(this,g.message_html,h.isPlusPageDirectLogin)):(c.track("flow-offers-load-error"),this.showError(h.messageHtml))},
onError:function(){c.track("flow-offers-load-error");this.showError()},
N:function(){this.ea(c)}})}
function op(){var a=Bp();A(a,function(b){b.disabled=!0})}
function sp(){var a=Bp();A(a,function(b){b.disabled=!1})}
m.hide=function(){var a=bp("ypc-offer-overlay-content-wrapper");a&&Wd(a);vp.D.hide.call(this)};
function Bp(){var a=[],b=bp("ypc-offer-overlay-container");if(!b)return a;A(Id(document,"button",null,b),function(c){a.push(c)});
A(Id(document,"input",null,b),function(c){a.push(c)});
return a}
m.T=function(a){cp(wp);vp.D.T.call(this,a)};
function zp(){var a=bp("ypc-offer-overlay-container");Ig(a,zb(xp));N(a,"ypc-offer-overlay-flow-default")}
function Ap(a,b,c){b&&(c?(a.T("ypc-offer-overlay-show-plus-page-not-available-error"),a=bp("ypc-offer-plus-page-not-available-content")):(a.T("ypc-offer-overlay-show-not-available-error"),a=bp("ypc-offer-overlay-not-available-content")),a.innerHTML=b)}
m.ea=function(a){return new qp(this,a)};function Cp(a,b){kp.call(this,a,b,"D");Qo(this.i,this.g,"click",this.va,"ypc-offer-button");Qo(this.i,this.g,"click",this.L,"unlimited-family-message-continue-button")}
z(Cp,kp);Cp.prototype.va=function(a){Cp.D.va.call(this,a)};
Cp.prototype.L=function(a){a=Ng(a.currentTarget,"continue_html");this.f&&a?this.f.Z(Jc(a),!0):this.f&&this.f.hide()};function Dp(){vp.call(this)}
z(Dp,vp);Fa(Dp);Dp.prototype.ea=function(a){return new Cp(this,a)};function Ep(a){if(a){var b=Dp.v();dp(b);b.Z(a);b.ea(ro())}}
;var Fp=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};y("yt.uix.widgets_",Fp);function Gp(a){this.f=a}
Gp.prototype.write=function(a,b,c,d){a={action_write_promo:1,method:a,subtype:this.f};var e={};c&&(e.json_data=c);rk(d||"/promo_ajax",{method:"POST",ja:a,O:e,onSuccess:function(){if(b){b.Bb&&El(F(b.Bb));b.Cb&&Dl(F(b.Cb));if(b.onSuccess)b.onSuccess();if(b.redirectUrl)return Pm(b.redirectUrl)}},
onError:function(){b&&b.Db&&Dl(F(b.Db));if(b&&b.onError)b.onError()}})};function Hp(){an.call(this,"promo")}
z(Hp,an);Fa(Hp);Hp.prototype.register=function(){cn(this,"click",this.f)};
Hp.prototype.unregister=function(){dn(this,"click",this.f)};
Hp.prototype.f=function(a){a=this.J(a);a=this.s(a,"promo-id");(new Gp(a)).write("write_dismiss")};function Ip(){P.call(this);this.f=R("PAGE_NAME",null);this.i=R("CHANNEL_TAB",null);this.g=[];var a=Hp.v(),b=Z(a);b in Fp||(a.register(),bn(a,"yt-uix-init-"+b,a.init),bn(a,"yt-uix-dispose-"+b,a.dispose),Fp[b]=a);this.g.push(Lj(Rj,this.j,this),Lj(Sj,this.l,this))}
la(Ip,P);Ip.prototype.H=function(){P.prototype.H.call(this);var a=Hp.v(),b=Z(a);b in Fp&&(a.unregister(),delete Fp[b]);Mj(this.g);this.g.length=0};
Ip.prototype.j=function(a){"channel"==this.f&&(R("CHANNEL_ID")==a.f&&Jp(!1),Kp(a.f,!1),a=F("paid-channel-promo")||F("paid-package-promo"))&&(El(a),a=W(H("ypc-promo-close",a),"promo-id"),(new Gp(a)).write("write_dismiss"));this.dispose()};
Ip.prototype.l=function(a){"channel"==this.f&&"transaction"==this.i?window.location.reload(!0):"channel"==this.f&&(R("CHANNEL_ID")==a.f&&Jp(!0),Kp(a.f,!0));this.dispose()};
function Kp(a,b){if(R("CHANNEL_ID")==a){var c=G("yt-badge-ypc");c=Wa(c,function(d){var e=M(d,"yt-badge-ypc-purchased");d=M(d,"yt-badge-ypc-free");return!e&&!d});
b?Dl.apply(null,c):El.apply(null,c)}}
function Jp(a){var b=H("ypc-channel-offer-card-container",H("primary-header-actions"));b&&Jg(b,"purchased",!a)}
;function Lp(){P.call(this);this.j=R("PAGE_NAME",null);this.f=!1;this.g=null;this.i=[];this.i.push(Lj(Fo,this.o,this),Lj("ypc-purchase-flow-end",this.l,this))}
la(Lp,P);Lp.prototype.H=function(){Mj(this.i);this.i.length=0;this.j=null;this.f=!1;this.g=null;P.prototype.H.call(this)};
Lp.prototype.o=function(a){this.f=!0;var b=R("YTO_GTM_DATA");window.dataLayer=window.dataLayer||[];window.dataLayer.push(b);a.f.subscriptionId&&(this.g=!0)};
Lp.prototype.l=function(){if(this.f){switch(this.j){case "musickey":case "channel":case "unlimited":var a=R("YPC_POST_PURCHASE_REDIRECT_URL");a&&Qm(a);break;case "playlist":window.location.reload(!0);break;case "watch":this.g&&window.location.reload(!0)}this.dispose()}};var Mp=["ypc-checkout-button","ypc-enabled"];function Np(){var a=[];A(Mp,function(b){eb(a,G(b))});
A(a,function(b){var c=W(b,"ypc-item-type"),d=W(b,"ypc-item-id"),e=W(b,"ypc-flow-type");b=W(b,"ypc-irp");e=e||"D";c={itemId:d,itemType:c};var f=ro();f.track("triggering-prefetch");e={itemData:c,flowType:e,flowTracker:f};b&&(e.innertubeRequestParams=b);Bk(e,{onSuccess:function(){f.track("prefetch-triggered")},
onError:function(){f.track("prefetch-trigger-failed")},
N:function(){f.dispose()}})})}
;function Op(){var a=zj("YPC_UNSUBSCRIBE_OVERLAY"),b=document.createElement("div");b.innerHTML=a;document.body.appendChild(b)}
Fa(Op);var Pp={Hc:"ypc-unsubscribe-overlay-confirm",Wc:"ypc-unsubscribe-overlay-xauth",Lc:"ypc-unsubscribe-overlay-plus-page-error",LOADING:"ypc-unsubscribe-overlay-loading",Uc:"ypc-unsubscribe-overlay-success",Jc:"ypc-unsubscribe-overlay-delayed",Kc:"ypc-unsubscribe-overlay-error"};Op.prototype.show=function(){var a=Hd("ypc-unsubscribe-overlay");Uo.v().show(a);Qp(this,"ypc-unsubscribe-overlay-loading")};
Op.prototype.showError=function(){Qp(this,"ypc-unsubscribe-overlay-error")};
Op.prototype.J=function(){var a=Zo();return a?H("ypc-unsubscribe-overlay",a):null};
function Qp(a,b){var c=a.J();if(c){for(var d in Pp)O(c,Pp[d]);N(c,b)}}
;var Rp=[],Sp=!1;function Tp(){Sp||(Sp=!0,Rp.push(Tk(document.documentElement,"click",Up,"ypc-unsubscribe-confirm")))}
function Up(a){var b=a.currentTarget;a=W(b,"ypc-item-type");b=W(b,"ypc-item-id");a&&b&&Vp(a,b)}
function Wp(a,b){var c=Op.v();rk(S("YPC_SUBSCRIPTION_URL"),{method:"GET",ja:{action_pre_cancel_confirm:1,it:a,ii:b},onSuccess:function(d,e){var f=e.header,g=e.html,h=e.confirm_button_text,k=e.keep_button_text,l=e.help_url,p=e.is_plus_page_error;e.is_xauth_subscription?Qp(c,"ypc-unsubscribe-overlay-xauth"):p?Qp(c,"ypc-unsubscribe-overlay-plus-page-error"):(f&&(H("ypc-unsubscribe-overlay-title",c.J()).innerHTML=f),g&&(f=H("ypc-unsubscribe-overlay-confirm-content",c.J()),f.innerHTML=g),l&&(f=H("ypc-unsubscribe-help",
c.J()),Gc(f,l)),h&&(f=H("ypc-unsubscribe-confirm",c.J()),f.innerHTML=h),k&&(f=H("ypc-unsubscribe-keep",c.J()),f.innerHTML=k),Qp(c,"ypc-unsubscribe-overlay-confirm"))},
onError:function(){c.showError()}})}
function Vp(a,b){Op.v().show();rk(S("YPC_TRANSACTION_URL"),{method:"POST",O:{action_cancel:1,it:a,ii:b},onSuccess:function(c,d){var e=d.status,f=d.component_channels,g=d.title,h=d.html;0===e?(e=Op.v(),g&&(H("ypc-unsubscribe-overlay-title-success",e.J()).innerHTML=g),h&&(H("ypc-unsubscribe-overlay-content-success",e.J()).innerHTML=h),Qp(e,"ypc-unsubscribe-overlay-success"),Xp(a,b,f)):3==e?(g=Op.v(),Qp(g,"ypc-unsubscribe-overlay-delayed"),Xp(a,b,f)):Op.v().showError()},
onError:function(){Op.v().showError()}})}
function Xp(a,b,c){var d={itemType:a,itemId:b},e=[];eb(e,G("ypc-unsubscribe-link"),G("ypc-unsubscribe-label"));e=Yp(e,a,b);El.apply(null,e);a=Yp(G("ypc-unsubscribe-complete"),a,b);Dl.apply(null,a);Jj(Ho,new Co(d,c))}
function Yp(a,b,c){return Wa(a,function(d){var e=W(d,"ypc-item-type");d=W(d,"ypc-item-id");return e==b&&d==c})}
;var Zp=[];y("yt.ypc.subscription.init",Tp);y("yt.ypc.checkout.showYpcOverlay",function(a,b,c,d,e){c=c||"D";a={itemId:b,itemType:a};b=ro();c={itemData:a,flowType:c,flowTracker:b,innertubeRequestParams:d,couponCode:e};yp(vp.v(),c)});
y("yt.ypc.checkout.showYpcOverlayForInnertubeRequestParams",function(a,b){a=a||"D";var c=ro();c={flowType:a,flowTracker:c,innertubeRequestParams:b};yp(vp.v(),c)});
y("yt.ypc.checkout.showScreenOverlay",function(a){if(a){var b=fp.v();dp(b);b.Z(a);b.ea()}});
y("yt.ypc.checkout.showPrepurchaseOverlay",Ep);y("yt.ypc.checkout.showPrepurchaseOverlay",Ep);y("yt.ypc.subscription.openUnsubscribeOverlay",function(a,b){var c=Op.v();c.show();Wp(a,b);c=c.J();c=H("ypc-unsubscribe-confirm",c);Ck(c,"ypc-item-type",a);Ck(c,"ypc-item-id",b)});
y("yt.ypc.subscription.requestUnsubscribe",Vp);y("yt.ypc.checkout.offerpurchaser.purchaseOffer",function(a,b){var c=ro();go(c,so(a));Jj("ypc-purchase-flow-start",new Ao(a.config.flowType));var d=vp.v();b||dp(d);np(d.ea(c),a)});
y("yt.ypc.checkout.offerpurchaser.completeTransaction",function(a){var b=ro();go(b,so(a));Jj("ypc-purchase-flow-start",new Ao(a.config.flowType));var c=vp.v();dp(c);b=c.ea(b);pp(b,a);b.j=new Io(a,b.l,new Oo);mp(b,b.j);a=b.j;No(a,null,null,a.wa.transactionParams)});
Tp();Zp.push(Lj("ypc-purchase-flow-start",function(){new Lp;new Ip}),Lj(Go,function(){new Ip}));
xk.v().init();R("PREFETCH_YPC_OFFERS")&&Np();sj("dispose",function(){Sp=!1;Vk(Rp);Rp.length=0;Mj(Zp);Zp.length=0;xk.v().dispose()});}).call(this);

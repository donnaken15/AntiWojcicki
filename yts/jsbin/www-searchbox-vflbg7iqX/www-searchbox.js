(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ca(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}
var da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function ka(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ea=b.prototype}
var la="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ma(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var na=ma(this);function oa(a,b){if(b){for(var c=na,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&la(c,d,{configurable:!0,writable:!0,value:f})}}
function pa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
oa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
oa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function qa(){qa=function(){};
na.Symbol||(na.Symbol=ra)}
function sa(a,b){this.f=a;la(this,"description",{configurable:!0,writable:!0,value:b})}
sa.prototype.toString=function(){return this.f};
var ra=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new sa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ta(){qa();var a=na.Symbol.iterator;a||(a=na.Symbol.iterator=na.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&la(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ua(ba(this))}});
ta=function(){}}
function ua(a){ta();a={next:a};a[na.Symbol.iterator]=function(){return this};
return a}
function va(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var wa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)va(d,e)&&(a[e]=d[e])}return a};
oa("Object.assign",function(a){return a||wa});
oa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
oa("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=ca(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!va(k,g)){var m=new c;la(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n["delete"](k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!va(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=m;return this};
b.prototype.get=function(k){return d(k)&&va(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&va(k,g)&&va(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&va(k,g)&&va(k[g],this.f)?delete k[g][this.f]:!1};
return b});
oa("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.f;return ua(function(){if(m){for(;m.head!=h.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.l[m];if(n&&va(h.l,m))for(var p=0;p<n.length;p++){var t=n[p];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:n,index:p,X:t}}return{id:m,list:n,index:-1,X:void 0}}
function e(h){this.l={};this.f=b();this.size=0;if(h){h=ca(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(ca([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(p){return!1}}())return a;
ta();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.l[m.id]=[]);m.X?m.X.value=k:(m.X={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},m.list.push(m.X),this.f.previous.next=m.X,this.f.previous=m.X,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.X&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.l[h.id],h.X.previous.next=h.X.next,h.X.next.previous=h.X.previous,h.X.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).X};
e.prototype.get=function(h){return(h=d(this,h).X)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
oa("Set",function(a){function b(c){this.f=new Map;if(c){c=ca(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ca([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ta();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
oa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
var r=this||self;function u(a,b){for(var c=a.split("."),d=b||r,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function v(a){return"array"==ya(a)}
function za(a){var b=ya(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ba(a){return"function"==ya(a)}
function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Da(a,b,c){return a.call.apply(a.bind,arguments)}
function Ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Da:w=Ea;return w.apply(null,arguments)}
function Fa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var x=Date.now||function(){return+new Date};
function y(a,b){var c=a.split("."),d=r;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function A(a,b){function c(){}
c.prototype=b.prototype;a.ea=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Ga(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ga);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(Ga,Error);Ga.prototype.name="CustomError";function Ha(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Ga.call(this,d+c[e])}
A(Ha,Ga);Ha.prototype.name="AssertionError";var Ia=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Ka=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},La=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
B(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ma(a,b){var c=Ia(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Na(a){return Array.prototype.concat.apply([],arguments)}
function Oa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Pa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Qa(a,b){return Na.apply([],Ka(a,b,void 0))}
;function Ra(){return null}
function Sa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var C=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ta=/&/g,Ua=/</g,Va=/>/g,Wa=/"/g,Xa=/'/g,Ya=/\x00/g,Za=/[\x00&<>"']/;
function $a(){return-1!=ab.toLowerCase().indexOf("webkit")}
function bb(a,b){for(var c=0,d=C(String(a)).split("."),e=C(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=cb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||cb(0==h[2].length,0==k[2].length)||cb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function cb(a,b){return a<b?-1:a>b?1:0}
;var ab;a:{var db=r.navigator;if(db){var eb=db.userAgent;if(eb){ab=eb;break a}}ab=""}function D(a){return-1!=ab.indexOf(a)}
function fb(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function ib(a,b){return null!==a&&b in a}
function jb(a){for(var b in a)return!1;return!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){var b=ya(a);if("object"==b||"array"==b){if(Ba(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=lb(a[c]);return b}return a}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ob(){return D("Opera")}
function pb(){return D("Trident")||D("MSIE")}
function qb(){return D("Safari")&&!(rb()||D("Coast")||ob()||D("Edge")||D("Edg/")||D("OPR")||D("Firefox")||D("FxiOS")||D("Silk")||D("Android"))}
function rb(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function sb(){function a(e){a:{var f=d;for(var g=e.length,h="string"===typeof e?e.split(""):e,k=0;k<g;k++)if(k in h&&f.call(void 0,h[k],k,e)){f=k;break a}f=-1}return c[0>f?null:"string"===typeof e?e.charAt(f):e[f]]||""}
var b=ab;if(pb())return tb(b);b=fb(b);var c={};B(b,function(e){c[e[0]]=e[1]});
var d=Fa(ib,c);return ob()?a(["Version","Opera"]):D("Edge")?a(["Edge"]):D("Edg/")?a(["Edg"]):rb()?a(["Chrome","CriOS","HeadlessChrome"]):(b=b[2])&&b[1]||""}
function tb(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function ub(a,b){this.f=a===vb&&b||"";this.l=wb}
ub.prototype.ha=!0;ub.prototype.fa=function(){return this.f};
function xb(a){return a instanceof ub&&a.constructor===ub&&a.l===wb?a.f:"type_error:Const"}
var wb={},vb={},yb=new ub(vb,"");function zb(a,b){this.f=a===Ab&&b||"";this.l=Bb}
zb.prototype.ha=!0;zb.prototype.fa=function(){return this.f.toString()};
zb.prototype.hb=!0;zb.prototype.Ha=function(){return 1};
var Bb={},Ab={};function E(a,b){this.f=a===Cb&&b||"";this.l=Db}
E.prototype.ha=!0;E.prototype.fa=function(){return this.f.toString()};
E.prototype.hb=!0;E.prototype.Ha=function(){return 1};
function Eb(a){return a instanceof E&&a.constructor===E&&a.l===Db?a.f:"type_error:SafeUrl"}
var Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Gb(a){if(a instanceof E)return a;a="object"==typeof a&&a.ha?a.fa():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return new E(Cb,a)}
function Hb(a){if(a instanceof E)return a;a="object"==typeof a&&a.ha?a.fa():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return new E(Cb,a)}
var Db={},Cb={};function Ib(){this.f="";this.l=Jb}
Ib.prototype.ha=!0;var Jb={};Ib.prototype.fa=function(){return this.f};
function Kb(a){var b=new Ib;b.f=a;return b}
var Lb=Kb("");function Mb(a){if(a instanceof E)return'url("'+Eb(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof ub)a=xb(a);else{a=String(a);var b=a.replace(Nb,"$1").replace(Nb,"$1").replace(Ob,"url");if(Pb.test(b)){if(b=!Qb.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Rb(a)}a=b?Sb(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Ha("Value does not allow [{;}], got: %s.",[a]);return a}
function Rb(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Pb=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Ob=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Nb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),Qb=/\/\*/;function Sb(a){return a.replace(Ob,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=Gb(d).fa();return c+f+b+f+e})}
;function Tb(){this.f="";this.l=Ub}
Tb.prototype.ha=!0;var Ub={};
function Vb(a,b){if(-1!=a.indexOf("<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);a:{for(var d={"(":")","[":"]"},e=[],f=0;f<c.length;f++){var g=c[f];if(d[g])e.push(d[g]);else{b:{var h=void 0;for(h in d)if(d[h]==g){h=!0;break b}h=!1}if(h&&e.pop()!=g){c=!1;break a}}}c=0==e.length}if(!c)throw Error("() and [] in selector must be balanced, got: "+
a);if(!(b instanceof Ib)){c=b;d="";for(var k in c){if(!/^[-_a-zA-Z0-9]+$/.test(k))throw Error("Name allows only [-_a-zA-Z0-9], got: "+k);e=c[k];null!=e&&(e=v(e)?Ka(e,Mb).join(" "):Mb(e),d+=k+":"+e+";")}b=d?Kb(d):Lb}k=a+"{"+(b instanceof Ib&&b.constructor===Ib&&b.l===Jb?b.f:"type_error:SafeStyle").replace(/</g,"\\3C ")+"}";return Wb(k)}
function Yb(a){function b(d){v(d)?B(d,b):c+=Zb(d)}
var c="";B(arguments,b);return Wb(c)}
Tb.prototype.fa=function(){return this.f};
function Zb(a){return a instanceof Tb&&a.constructor===Tb&&a.l===Ub?a.f:"type_error:SafeStyleSheet"}
function Wb(a){var b=new Tb;b.f=a;return b}
var $b=Wb("");function F(){this.f="";this.g=ac;this.l=null}
F.prototype.hb=!0;F.prototype.Ha=function(){return this.l};
F.prototype.ha=!0;F.prototype.fa=function(){return this.f.toString()};
function bc(a){return a instanceof F&&a.constructor===F&&a.g===ac?a.f:"type_error:SafeHtml"}
var ac={};function G(a,b){var c=new F;c.f=a;c.l=b;return c}
G("<!DOCTYPE html>",0);var cc=G("",0);G("<br>",0);var dc=Sa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=bc(cc);return!b.parentElement});
function ec(a,b){if(dc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=bc(b)}
function fc(a,b){var c=b instanceof E?b:Hb(b);a.href=Eb(c)}
function gc(a){var b=new zb(Ab,xb(yb));a.src=(b instanceof zb&&b.constructor===zb&&b.l===Bb?b.f:"type_error:TrustedResourceUrl").toString()}
;function hc(a){return decodeURIComponent(a.replace(/\+/g," "))}
;function ic(){return D("Gecko")&&!($a()&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge")}
;function jc(a){jc[" "](a);return a}
jc[" "]=xa;function kc(a,b){var c=lc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var mc=ob(),I=pb(),nc=D("Edge"),oc=ic(),pc=$a()&&!D("Edge");function qc(){var a=r.document;return a?a.documentMode:void 0}
var rc;a:{var sc="",tc=function(){var a=ab;if(oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(nc)return/Edge\/([\d\.]+)/.exec(a);if(I)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pc)return/WebKit\/(\S+)/.exec(a);if(mc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tc&&(sc=tc?tc[1]:"");if(I){var uc=qc();if(null!=uc&&uc>parseFloat(sc)){rc=String(uc);break a}}rc=sc}var vc=rc,lc={};function wc(a){return kc(a,function(){return 0<=bb(vc,a)})}
var xc;xc=r.document&&I?qc():void 0;var yc={},zc=null;var J=window;function Ac(a){this.f=a||{cookie:""}}
l=Ac.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Me;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
l.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=C(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Jb:0,path:b,domain:c});return d};
l.isEmpty=function(){return!this.f.cookie};
l.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=C(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Bc=new Ac("undefined"==typeof document?null:document);function Cc(){return!(D("iPad")||D("Android")&&!D("Mobile")||D("Silk"))&&(D("iPod")||D("iPhone")||D("Android")||D("IEMobile"))}
;function Dc(a,b){this.width=a;this.height=b}
l=Dc.prototype;l.clone=function(){return new Dc(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ec(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Fc(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
;var Gc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Hc(a){return a?decodeURI(a):a}
function K(a,b){return b.match(Gc)[a]||null}
function Ic(a,b,c){if(v(b))for(var d=0;d<b.length;d++)Ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Jc(a){var b=[],c;for(c in a)Ic(c,a[c],b);return b.join("&")}
function Kc(a,b){var c=Jc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Lc(a){var b=Mc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Nc(){var a=[];Lc(function(b){a.push(b)});
return a}
var Mc={Zd:"allow-forms",ae:"allow-modals",be:"allow-orientation-lock",ce:"allow-pointer-lock",de:"allow-popups",ee:"allow-popups-to-escape-sandbox",fe:"allow-presentation",ge:"allow-same-origin",he:"allow-scripts",ie:"allow-top-navigation",je:"allow-top-navigation-by-user-activation"},Oc=Sa(function(){return Nc()});
function Pc(){var a=Ec("IFRAME"),b={};B(Oc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Qc(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Rc=(new Date).getTime();function Sc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Tc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],H=e[2],U=e[3],Aa=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var aa=U^z&(H^U);var Xb=1518500249}else aa=z^H^U,Xb=1859775393;else 60>q?(aa=z&H|U&(z|H),Xb=2400959708):(aa=z^H^U,Xb=3395469782);aa=((p<<5|p>>>27)&4294967295)+aa+Aa+Xb+t[q]&4294967295;Aa=U;U=H;H=(z<<30|z>>>2)&4294967295;z=p;p=aa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
z&4294967295;e[2]=e[2]+H&4294967295;e[3]=e[3]+U&4294967295;e[4]=e[4]+Aa&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,H=p.length;z<H;++z)q.push(p.charCodeAt(z));p=q}t||(t=p.length);q=0;if(0==m)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<t;)if(f[m++]=p[q++],n++,64==m)for(m=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],t=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var z=24;0<=z;z-=8)p[t++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,zc:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function Uc(a,b,c){var d=[],e=[];if(1==(v(c)?2:1))return e=[b,a],B(d,function(h){e.push(h)}),Vc(e.join(" "));
var f=[],g=[];B(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(h){e.push(h)});
a=Vc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Vc(a){var b=Tc();b.update(a);return b.zc().toLowerCase()}
;function Wc(a){var b=Sc(String(r.location.href)),c;(c=r.__SAPISID||r.__APISID||r.__OVERRIDE_SID)?c=!0:(c=new Ac(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?r.__SAPISID:r.__APISID,c||(c=new Ac(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(r.location.href);return d&&c&&b?[b,Uc(Sc(d),c,a||null)].join(" "):null}return null}
;function Xc(){}
Xc.prototype.f=null;Xc.prototype.getOptions=function(){var a;(a=this.f)||(a={},Yc(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var Zc;function $c(){}
A($c,Xc);function ad(){var a=Yc(Zc);return a?new ActiveXObject(a):new XMLHttpRequest}
function Yc(a){if(!a.l&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l}
Zc=new $c;function bd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function cd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function dd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:bd(a).match(/\S+/g)||[],c=0<=Ia(c,b);return c}
function ed(a,b){if(a.classList)a.classList.add(b);else if(!dd(a,b)){var c=bd(a);cd(a,c+(0<c.length?" "+b:b))}}
function fd(a,b){a.classList?a.classList.remove(b):dd(a,b)&&cd(a,Ja(a.classList?a.classList:bd(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;var gd="StopIteration"in r?r.StopIteration:{message:"StopIteration",stack:""};function hd(){}
hd.prototype.next=function(){throw gd;};
hd.prototype.ga=function(){return this};
function id(a){if(a instanceof hd)return a;if("function"==typeof a.ga)return a.ga(!1);if(za(a)){var b=0,c=new hd;c.next=function(){for(;;){if(b>=a.length)throw gd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function jd(a,b){if(za(a))try{B(a,b,void 0)}catch(c){if(c!==gd)throw c;}else{a=id(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==gd)throw c;}}}
function kd(a){if(za(a))return Oa(a);a=id(a);var b=[];jd(a,function(c){b.push(c)});
return b}
;var ld={};
function md(a){if(I&&!wc(9))return[0,0,0,0];var b=ld.hasOwnProperty(a)?ld[a]:null;if(b)return b;65536<Object.keys(ld).length&&(ld={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=nd(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=nd(b,d);b=nd(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=od(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=od(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=od(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);b=
od(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=od(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=od(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");od(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return ld[a]=b}
function od(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}
function nd(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})}
;var pd={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},qd=/[\n\f\r"'()*<>]/g,rd={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function sd(a){return rd[a]}
function td(a,b,c){b=C(b);if(""==b)return null;var d=String(b.substr(0,4)).toLowerCase();if(0==("url("<d?-1:"url("==d?0:1)){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:for(b=b.substring(4,b.length-1),d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=Eb(a)?'url("'+Eb(a).replace(qd,sd)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;
for(a=/([\-\w]+)\(/g;c=a.exec(b);)if(!(c[1]in pd))return null}return b}
;function ud(a,b){var c=r[a];return c&&c.prototype?(c=Object.getOwnPropertyDescriptor(c.prototype,b))&&c.get||null:null}
function vd(a,b){var c=r[a];return c&&c.prototype&&c.prototype[b]||null}
var wd=ud("Element","attributes")||ud("Node","attributes"),xd=vd("Element","hasAttribute"),yd=vd("Element","getAttribute"),zd=vd("Element","setAttribute"),Ad=vd("Element","removeAttribute"),Bd=vd("Element","getElementsByTagName"),Cd=vd("Element","matches")||vd("Element","msMatchesSelector"),Dd=ud("Node","nodeName"),Ed=ud("Node","nodeType"),Fd=ud("Node","parentNode"),Gd=ud("HTMLElement","style")||ud("Element","style"),Hd=ud("HTMLStyleElement","sheet"),Id=vd("CSSStyleDeclaration","getPropertyValue"),
Jd=vd("CSSStyleDeclaration","setProperty");function Kd(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}
function Ld(a,b,c,d){if(a)return a.apply(b,d);if(I&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}
function Md(a){return Kd(wd,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Nd(a,b,c){try{Ld(zd,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}
function Od(a){return Kd(Gd,a,"style",function(b){return b instanceof CSSStyleDeclaration})}
function Pd(a){return Kd(Hd,a,"sheet",function(b){return b instanceof CSSStyleSheet})}
function Qd(a){return Kd(Dd,a,"nodeName",function(b){return"string"==typeof b})}
function Rd(a){return Kd(Ed,a,"nodeType",function(b){return"number"==typeof b})}
function Sd(a){return Kd(Fd,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}
function Td(a,b){return Ld(Id,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}
function Ud(a,b,c){Ld(Jd,a,a.setProperty?"setProperty":"setAttribute",[b,c])}
;var Vd=I&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g"),Wd={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};
function Xd(a,b,c){var d=[];a=Yd(Oa(a.cssRules));B(a,function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&I&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(Vd,"#"+b+" $1"):e.selectorText;d.push(Vb(f,Zd(e.style,c)))}});
return Yb(d)}
function Yd(a){return Ja(a,function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})}
function $d(a,b,c){a=ae("<style>"+a+"</style>");return null==a||null==a.sheet?$b:Xd(a.sheet,void 0!=b?b:null,c)}
function ae(a){if(I&&!wc(10)||"function"!=typeof r.DOMParser)return null;a=G("<html><head></head><body>"+a+"</body></html>",null);return(new DOMParser).parseFromString(bc(a),"text/html").body.children[0]}
function Zd(a,b){if(!a)return Lb;var c=document.createElement("div").style,d=be(a);B(d,function(e){var f=pc&&e in Wd?e:e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");0!=f.lastIndexOf("--",0)&&0!=f.lastIndexOf("var",0)&&(e=Td(a,e),e=td(f,e,b),null!=e&&Ud(c,f,e))});
return Kb(c.cssText||"")}
function ce(a){var b=Array.from(Ld(Bd,a,"getElementsByTagName",["STYLE"])),c=Qa(b,function(e){return Oa(Pd(e).cssRules)});
c=Yd(c);c.sort(function(e,f){var g=md(e.selectorText);a:{var h=md(f.selectorText);for(var k=Math.min(g.length,h.length),m=0;m<k;m++){var n=g[m];var p=h[m];n=n>p?1:n<p?-1:0;if(0!=n){h=n;break a}}g=g.length;h=h.length;h=g>h?1:g<h?-1:0}return-h});
a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var d;d=a.nextNode();)B(c,function(e){Ld(Cd,d,d.matches?"matches":"msMatchesSelector",[e.selectorText])&&e.style&&de(d,e.style)});
B(b,Fc)}
function de(a,b){var c=be(a.style),d=be(b);B(d,function(e){if(!(0<=c.indexOf(e))){var f=Td(b,e);Ud(a.style,e,f)}})}
function be(a){za(a)?a=Oa(a):(a=hb(a),Ma(a,"cssText"));return a}
;Ec("DIV");var ee={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,
"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,
"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},fe={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,"* CLASS":!0,"* ID":!0,"* STYLE":!0};var ge="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),he=0;function ie(){this.g=[];this.l=[];this.f="data-elementweakmap-index-"+he++}
ie.prototype.set=function(a,b){if(Ld(xd,a,"hasAttribute",[this.f])){var c=parseInt(Ld(yd,a,"getAttribute",[this.f])||null,10);this.l[c]=b}else c=this.l.push(b)-1,Nd(a,this.f,c.toString()),this.g.push(a);return this};
ie.prototype.get=function(a){if(Ld(xd,a,"hasAttribute",[this.f]))return a=parseInt(Ld(yd,a,"getAttribute",[this.f])||null,10),this.l[a]};
ie.prototype.clear=function(){this.g.forEach(function(a){Ld(Ad,a,"removeAttribute",[this.f])},this);
this.g=[];this.l=[]};var je=!I||10<=Number(xc),ke=!I||null==document.documentMode;function le(){}
;var me={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var ne={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var oe={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0};
function pe(a){a=a||new qe;re(a);this.f=kb(a.f);this.m=kb(a.D);this.g=kb(a.F);this.u=a.w;B(a.s,function(b){if(0!=b.lastIndexOf("data-",0))throw new Ha('Only "data-" attributes allowed, got: %s.',[b]);if(0==b.lastIndexOf("data-sanitizer-",0))throw new Ha('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.f["* "+b.toUpperCase()]=se},this);
B(a.o,function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||oe[b])throw new Ha("Only valid custom element tag names allowed, got: %s.",[b]);this.g[b]=!0},this);
this.s=a.g;this.i=a.C;this.l=null;this.o=a.u}
A(pe,le);function te(a){return function(b,c){var d=a(C(b),c);return d&&"about:invalid#zClosurez"!=Eb(d)?Eb(d):null}}
function qe(){this.f={};B([ee,fe],function(a){B(hb(a),function(b){this.f[b]=se},this)},this);
this.l={};this.s=[];this.o=[];this.D=kb(me);this.F=kb(ne);this.w=!1;this.L=Gb;this.H=this.m=this.G=this.g=Ra;this.C=null;this.i=this.u=!1}
function ue(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}
function ve(a,b,c,d){a[c]&&!b[c]&&(a[c]=ue(a[c],d))}
function re(a){if(a.i)throw Error("HtmlSanitizer.Builder.build() can only be used once.");ve(a.f,a.l,"* USEMAP",we);var b=te(a.L);B(["* ACTION","* CITE","* HREF"],function(d){ve(this.f,this.l,d,b)},a);
var c=te(a.g);B(["* LONGDESC","* SRC","LINK HREF"],function(d){ve(this.f,this.l,d,c)},a);
B(["* FOR","* HEADERS","* NAME"],function(d){ve(this.f,this.l,d,Fa(xe,this.G))},a);
ve(a.f,a.l,"A TARGET",Fa(ye,["_blank","_self"]));ve(a.f,a.l,"* CLASS",Fa(ze,a.m));ve(a.f,a.l,"* ID",Fa(Ae,a.m));ve(a.f,a.l,"* STYLE",Fa(a.H,c));a.i=!0}
function Be(a,b){a||(a="*");return(a+" "+b).toUpperCase()}
function se(a){return C(a)}
function ye(a,b){var c=C(b);return 0<=Ia(a,c.toLowerCase())?c:null}
function we(a){return(a=C(a))&&"#"==a.charAt(0)?a:null}
function xe(a,b,c){return a(C(b),c)}
function ze(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}
function Ae(a,b,c){return a(C(b),c)}
function Ce(a,b){var c=b.data,d=Sd(b);d&&"style"==Qd(d).toLowerCase()&&!("STYLE"in a.m)&&"STYLE"in a.g&&(c=Zb($d(c,a.l,w(function(e,f){return this.s(e,{pe:f})},a))));
return document.createTextNode(c)}
;function De(a){var b=new qe;b=new pe(b);var c=!("STYLE"in b.m)&&"STYLE"in b.g;c="*"==b.i&&c?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36)):b.i;b.l=c;if(je){c=a;if(je){a=Ec("SPAN");b.l&&"*"==b.i&&(a.id=b.l);b.o&&(c=ae("<div>"+c+"</div>"),ce(c),c=c.innerHTML);c=G(c,null);var d=document.createElement("template");if(ke&&"content"in d)ec(d,c),d=d.content;else{var e=document.implementation.createHTMLDocument("x");d=e.body;
ec(e.body,c)}c=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(d=ge?new WeakMap:new ie;e=c.nextNode();){c:{var f=b;var g=e;switch(Rd(g)){case 3:f=Ce(f,g);break c;case 1:if("TEMPLATE"==Qd(g).toUpperCase())f=null;else{var h=Qd(g).toUpperCase();if(h in f.m)var k=null;else f.g[h]?k=document.createElement(h):(k=Ec("SPAN"),f.u&&Nd(k,"data-sanitizer-original-tag",h.toLowerCase()));if(k){var m=k,n=Md(g);if(null!=n)for(var p=0;h=n[p];p++)if(h.specified){var t=f;var q=
g,z=h,H=z.name;if(0==H.lastIndexOf("data-sanitizer-",0))t=null;else{var U=Qd(q);z=z.value;var Aa={tagName:C(U).toLowerCase(),attributeName:C(H).toLowerCase()},aa={xc:void 0};"style"==Aa.attributeName&&(aa.xc=Od(q));q=Be(U,H);q in t.f?(t=t.f[q],t=t(z,Aa,aa)):(H=Be(null,H),H in t.f?(t=t.f[H],t=t(z,Aa,aa)):t=null)}null!==t&&Nd(m,h.name,t)}f=k}else f=null}break c;default:f=null}}if(f){if(1==Rd(f)&&d.set(e,f),e=Sd(e),g=!1,e)h=Rd(e),k=Qd(e).toLowerCase(),m=Sd(e),11!=h||m?"body"==k&&m&&(h=Sd(m))&&!Sd(h)&&
(g=!0):g=!0,h=null,g||!e?h=a:1==Rd(e)&&(h=d.get(e)),h.content&&(h=h.content),h.appendChild(f)}else for(f=e;e=f.firstChild;)f.removeChild(e)}d.clear&&d.clear();b=a}else b=Ec("SPAN");0<Md(b).length&&(a=Ec("SPAN"),a.appendChild(b),b=a);b=(new XMLSerializer).serializeToString(b);b=b.slice(b.indexOf(">")+1,b.lastIndexOf("</"))}else b="";return G(b,null)}
;var Ee=/^[6-9]$/,Fe=/<\/?(?:b|em)>/gi;function Ge(a){this.f=a}
var He=new Ge({});function Ie(a,b,c,d,e,f){var g;a instanceof F?g=a:g=G(a,null);this.u=g;this.f=b;this.l=c;this.o=d;this.g=e;this.m=f||He;this.i=!1;switch(this.o){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.i=!0}}
Ie.prototype.getHtml=function(){return bc(this.u).toString()};
Ie.prototype.s=function(){return this.l};
Ie.prototype.T=function(){return this.o};var Je=/^\s/,Ke=/\s+/,Le=/\s+/g,Me=/^\s+|\s+$/g,Ne=/^\s+$/,Oe=/<[^>]*>/g,Pe=/&nbsp;/g,Qe=/&#x3000;/g,Re=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],Se=document.getElementsByTagName("head")[0],Te=0,Ue=1;function Ve(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function We(a,b){function c(){return b}
void 0===b&&(b=a);return{Ia:c,Eb:function(){return a},
Qc:c,Ce:function(){return a<b},
equals:function(d){return d&&a==d.Eb()&&b==d.Qc()}}}
function L(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Xe(a,b){var c=[],d;for(d in a)L(d,a[d],c,b);return c.join("&")}
function Ye(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Ze(a){return!!a&&!Ne.test(a)}
function $e(a){for(var b=Re.length,c=0;c<b;c+=2)a=a.replace(Re[c],Re[c+1].source);return a}
function af(a){for(var b=Re.length,c=0;c<b;c+=2)a=a.replace(Re[c+1],Re[c].source);a=a.replace(Pe," ");return a.replace(Qe,"\u3000")}
function bf(a,b){return a&&(-1<a.indexOf(" ")||Ke.test(a))?(a=a.replace(Le," "),a.replace(b?Me:Je,"")):a}
function cf(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function df(){}
function ef(a){var b=ff;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function gf(){return 0}
function hf(a){var b={},c;for(c in a)b[c]=a[c];return b}
function jf(a,b){var c=a+"";b.length&&(c+="i"+b.join("i"),c+="k"+(-1!=Ia(b,173)?14:1));return c}
;function kf(a,b,c){this.f=a;this.H=b;this.C=c||"";this.s=(Te++).toString(36);this.w=this.f.toLowerCase();this.l=bf(this.w);this.G={};this.u={};this.m=this.F=this.i=!1;this.D=1}
kf.prototype.getId=function(){return this.s};
function lf(a){a=parseInt(a.s,36);return isNaN(a)?-1:a}
function mf(a,b,c,d){a.i||(a.G[b]=c,d&&(a.u[b]=c))}
;function nf(a,b,c,d,e,f){this.l=a;this.f=b;this.g=c;this.m=d;this.i=e;this.s=f;this.o=!0;this.f?this.f.length&&33==this.f[0].T()&&(this.i=this.o=!1):this.f=[];this.g||(this.g=He)}
nf.prototype.T=function(){return this.o};function of(){}
of.prototype.search=function(){};
of.prototype.redirect=function(){};
of.prototype.ec=function(){return""};
of.prototype.Lb=function(){};function pf(){this.l={};this.f={}}
pf.prototype.set=function(a,b){this.l[a]=b};
pf.prototype.has=function(a){return!!this.l[a]};
function M(a,b,c){b in a.f||(a.f[b]=[]);a.f[b].push(c)}
;function qf(a,b,c,d,e,f){this.u=a;this.w=b;this.C=c;this.m=d;this.g=e;this.o=f;this.s={};this.i={};this.f=[];this.l=!1;a=this.w;d=a.l;for(var g in d)if(b=g,c=d[b])this.s[b]=c,this.f.push(c);a=a.f;for(g in a){b=g;d=c=a[b];e=this.i[b]||[];for(f=0;f<d.length;++f)if(c=d[f])e.push(c),this.f.push(c);this.i[b]=e}this.f.sort(rf);for(g=0;a=this.f[g++];)a.Z(this.C,this.m);this.u.Lb(this.m);this.m.vc();for(g=0;a=this.f[g++];)a.J(this);for(g=0;a=this.f[g++];)a.setup(this.o);for(g=0;a=this.f[g++];)a.la(this.o);
for(g=0;a=this.f[g++];)a.K(this.o);this.l=!0}
var ff=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function sf(a){if(a.l){for(var b=0,c;c=a.f[b++];)c.ca();a.l=!1}}
qf.prototype.isActive=function(){return this.l};
qf.prototype.get=function(a){return this.s[a]};
function N(a,b){return a.i[b]||[]}
function rf(a,b){var c=ef(a.T()),d=ef(b.T());return 0>c?1:0>d?-1:c-d}
;function O(a){this.l=a}
l=O.prototype;l.Z=function(){};
l.J=function(){};
l.setup=function(){};
l.la=function(){};
l.K=function(){};
l.T=function(){return this.l};
l.ca=function(){};function tf(){this.l=149;this.f={};this.g=0}
A(tf,O);l=tf.prototype;l.J=function(a){this.w=a.get(127)};
l.K=function(a){if(a.connectionType==this.va()){this.i=a;var b=this.w.g,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.Da;this.u=b.Na;this.m=b.nc}};
l.ca=function(){uf(this);this.g=0};
l.jc=function(a,b,c){vf(this,a.getId(),a.f,b,c);return!0};
l.va=function(){return 1};
l.bb=function(){return this.g};
l.Xa=function(a){var b=this.f[a];b&&(wf(b),delete this.f[a])};
function vf(a,b,c,d,e){a.i.wb||uf(a);var f=ad();f&&(c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t",f.open("GET",c,!0),f.withCredentials=!0,a.i.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.i.visitorData),f.onreadystatechange=function(){if(4==f.readyState){switch(f.status){case 403:a.g=1E3;break;case 302:case 500:case 502:case 503:++a.g;break;case 200:var g=f.responseText;0==g.lastIndexOf(")]}'\n",0)&&(g=g.substring(5));e(JSON.parse(g));default:a.g=
0}a.Xa(b)}},a.f[b]=f,f.send(null))}
function uf(a){for(var b in a.f)wf(a.f[b]);a.f={}}
function wf(a){a.onreadystatechange=df;var b=a.readyState;0!=b&&4!=b&&a.abort()}
;var xf;function yf(){this.l=153}
ka(yf,O);function zf(a,b){a.length&&b.push({T:function(){return 507},
position:2})}
;function Af(a){this.o=a}
Af.prototype.T=function(){return this.o};
Af.prototype.isSelectable=function(){return!0};function Bf(a){this.l=152;this.m=a}
A(Bf,O);Bf.prototype.Oa=df;var Cf=pb(),Df=Cf&&0<=bb(sb(),10),Ef=ic();Ef&&sb();var Ff=ob(),Gf=$a()&&!D("Edge"),Hf=qb(),If=rb(),Jf=Cc()&&qb(),Kf=D("Android"),Lf=D("Macintosh"),Mf=Cc();var Nf=void 0!=document.documentElement.style.opacity,Of={rtl:"right",ltr:"left"};function Pf(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Qf(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Sa:b,ia:c}}
function Rf(a){try{return Sf(a).activeElement==a}catch(b){}return!1}
function P(a,b){var c=document.createElement(a);b&&(c.className=b);return c}
function Q(a){return P("div",a)}
function Tf(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Of[b])}
function Uf(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Vf(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Uf(a)}
function Wf(a){var b=P("a");fc(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Xf(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{tc:c,Hb:b}}
function Sf(a){return a?a.ownerDocument||a.document:window.document}
function Yf(a){return a?(a=Sf(a),a.defaultView||a.parentWindow):window}
function Zf(){return Nf?"opacity":"filter"}
function $f(a){return Nf?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function ag(){this.o=507;bg(this)}
ka(ag,Af);ag.prototype.f=function(){return this.g};
function cg(a,b,c,d){bg(a,c,d);b=De(b);ec(a.l,b)}
function bg(a,b,c){a.g=Q("sbfl_a");a.l=Q("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.g.appendChild(a.l)}
;var dg=[30,35,33,41],eg=[39,10,21];function fg(a,b){Bf.call(this,507);this.f=a;this.g=b}
ka(fg,Bf);fg.prototype.J=function(a){this.i=a.get(128)};
fg.prototype.Z=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
fg.prototype.Ea=function(){return new ag};
function gg(a){return a.map(function(b){return{label:b.f}})}
fg.prototype.Pa=function(a,b){var c=Ja(this.i.g,function(d){a:if(0<=dg.indexOf(d.T()))d=!1;else{d=d.g||[];for(var e=ca(eg),f=e.next();!f.done;f=e.next())if(0<=d.indexOf(f.value)){d=!1;break a}d=!0}return d},this);
0<c.length?(cg(b,this.f,gg(c),this.g),b.f().style.display=""):b.f().style.display="none"};function hg(a,b,c,d,e,f,g,h){this.o=35;this.N=b;this.M=c;this.F=d;this.w=e;this.G=g;this.O=h;this.u=!0;this.s=!1;this.g=Q("sbpqs_d");this.m=Q();this.H=P("span","sbpqs_a");this.G&&(this.i=P("a"),fc(this.i,"#ps"),this.i.className="sbsb_i",this.C=Q("fr sbpqs_b"),this.m.appendChild(this.C),this.C.appendChild(this.i),this.l=Q("sbpqs_c"),a=De(this.O),ec(this.l,a),this.l.setAttribute("role","alert"));this.m.appendChild(this.H);this.g.appendChild(this.m);this.l&&this.g.appendChild(this.l)}
A(hg,Af);hg.prototype.f=function(){return this.g};
hg.prototype.isSelectable=function(){return this.u};
hg.prototype.L=function(a){this.s=!0;var b=w(this.V,this),c=this.N.g,d=this.R;c.g[d]=b;b=[];"1"===Ye(window.location.search).ssl_dbg&&L("ssl_dbg","1",b);L("delq",d,b);L("client",c.o,b);L("callback","google.sbox.d"+c.m,b);d=c.s;L("tok",c.u,b);c.i&&L("authuser",c.i,b);c.f=P("script");c.f.src=d+b.join("&");Se.appendChild(c.f);return Vf(a)};
hg.prototype.V=function(){if(this.s){var a=this.M;if(a.g){a=a.f;for(var b in a.g)for(var c=a.g[b].f,d=0,e;e=c[d++];)if(35==e.T()){delete a.g[b];break}for(b=0;b<a.f.length;++b)a.f[b].reset()}this.g.onmouseover=this.g.onmouseout=this.g.onclick=null;this.m.style.display="none";this.l.style.display="";this.w.i==this.D&&ig(this.F);this.w.f==this.D&&(jg(this.w),this.F.g.focus());this.u=!1}};function kg(){Bf.call(this,35)}
A(kg,Bf);l=kg.prototype;l.Z=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
l.J=function(a){this.g=a.get(123);this.i=a.get(118);this.o=a.get(189);this.u=a.get(127);this.C=a.get(128)};
l.setup=function(a){this.K(a)};
l.K=function(a){this.w=a.mc;this.f=a.Xb;this.s=a.Wb};
l.Ea=function(a){return new hg(this.u,this.o,this.g,this.i,this.C,a,this.w,this.s)};
l.Pa=function(a,b){var c=a.getHtml(),d=a.f,e=a.l,f=this.f;b.s=!1;b.u=!0;b.R=d;b.D=e;b.m.style.display="";c=De(c);ec(b.H,c);b.G&&(b.l.style.display="none",f=De(f),ec(b.i,f),b.i.onclick=w(b.L,b))};
l.Oa=function(a,b,c){c.search(b.f,1)};function lg(){this.l=134;this.g={}}
A(lg,O);l=lg.prototype;l.J=function(a){this.m=a.g.getId()};
l.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=w(this.Od,this)};
l.K=function(a){this.s="//"+(a.Yb||"clients1."+a.Da)+"/complete/deleteitems?";this.u=a.rb;this.i=a.authuser;this.o=a.clientName};
l.ca=function(){mg(this)};
function mg(a){a.f&&(Se.removeChild(a.f),a.f=null)}
l.Od=function(a){mg(this);a=a[0];var b=this.g[a];b&&(delete this.g[a],b())};function ng(){this.l=189}
A(ng,O);ng.prototype.J=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.w=a.get(553)};
ng.prototype.setup=function(a){this.f=a.Mc};
ng.prototype.K=function(a){this.m=a.rb;this.u=!(!this.g||!this.m);this.f&&(a=this.s.f?3E3:0,window.setTimeout(w(this.o,this),a),this.f=!1)};
ng.prototype.o=function(){var a=og(this.w,"",void 0,void 0,!0);pg(this.i,a);a=this.i;a.m=a.i};function qg(){this.l=156}
A(qg,O);qg.prototype.J=function(a){this.i=a.get(189)};
qg.prototype.g=function(a){var b=this.i,c={};b.u&&(c.tok=b.m);"1"===Ye(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)mf(a,d,c[d]);return 1};
qg.prototype.f=function(){return 12};function rg(){this.l=157}
A(rg,O);function sg(){this.l=156}
A(sg,O);sg.prototype.g=function(a){var b=Ye(hc(window.location.href));b.v&&mf(a,"video_id",b.v,!0);return 1};
sg.prototype.f=function(){return 24};function tg(a,b,c){this.l=598;this.C=b;this.u=c;this.o="";this.g=a;this.s=!1}
A(tg,O);tg.prototype.J=function(a){this.G=a.get(553);this.f=a.get(128);this.F=a.get(118);this.D=a.get(150)};
tg.prototype.setup=function(a){this.m=a.nb;this.w=a.Kc};
function ug(a,b){a.o=b;a.G.ob(a.o)}
function vg(a){if(!a.C||a.f.isVisible())return!1;var b=a.F.f;if(!b||0==b.length)return!1;if(b!=a.m)return"always"==a.u&&a.f&&a.f.g&&0<a.f.g.length&&a.f.show(),!1;if(a.g&&a.g.getRefinementsTuple){var c=a.g.getRefinementsTuple();if(c){var d=c[0];"ClearBySearchbox"==d?a.i=[]:"FromSearchResponse"==d&&a.s&&(a.i=c[1],a.s=!1)}}if(!a.i||0>=a.i.length)return a.f&&a.f.g&&0<a.f.g.length?(a.f.show(),!1):"always"==a.u||"fallback"==a.u;c=[];for(var e=d=0;e<a.i.length&&!(c.length>=a.w);++e){var f=a.i[e];f&&0<f.length&&
c.push(new Ie(a.D.bold(b,f),f,d++,0,[71],null))}0<c.length&&wg(a.f,c,!1);return!1}
;function xg(){this.l=156}
A(xg,O);xg.prototype.J=function(a){this.i=a.get(598)};
xg.prototype.g=function(a){var b=this.i,c;a:{if(b.g&&b.g.getPreviousQuery&&(c=b.g.getPreviousQuery()))break a;c=null}var d;d=(d=Ye(hc(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.s=!0,b.m=c,ug(b,c)):d||""==b.o?d&&""==b.o&&ug(b,b.m):ug(b,"");return"mousedown"!=a.C&&"focus"!=a.C||!vg(this.i)?1:2};
xg.prototype.f=function(){return 46};function yg(){this.l=149;this.g=Se;this.f={}}
A(yg,O);l=yg.prototype;l.J=function(a){this.F=a.get(127);this.u=a.g.getId()};
l.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
l.K=function(a){this.m=a;a.connectionType==this.va()&&(a=this.F.g,this.s=a.protocol,this.o=a.host,this.D=a.Na,this.w=a.nc,this.C="https:"==document.location.protocol,zg(this,w(this.Nd,this)),(new Image).src=this.s+this.o+"/generate_204")};
l.ca=function(){zg(this,null);Ag(this)};
l.jc=function(a,b,c,d){c=a.getId();var e=a.f;this.m.wb||Ag(this);b=this.s+this.o+this.D+"?"+(this.w?this.w+"&":"")+(b?b+"&":"");a=[];L("q",e,a,!0);this.m.sc||L("callback","google.sbox.p"+this.u,a);if(this.C){e="";for(var f=4+Math.floor(32*Math.random()),g=0,h;g<f;++g)h=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),e+=String.fromCharCode(h);L("gs_gbg",e,a)}e=P("script");e.src=b+a.join("&");e.charset="utf-8";this.f[c]=e;this.i=d;this.g.appendChild(e);
return!0};
l.va=function(){return 0};
l.bb=function(){return 0};
l.Xa=function(a){var b=this.f[a];b&&(this.g.removeChild(b),delete this.f[a])};
function Ag(a){for(var b in a.f)a.g.removeChild(a.f[b]);a.f={};a.i=null}
l.Nd=function(a){this.i&&this.i(a)};
function zg(a,b){b||(b=df);var c=window.google;a.m.sc?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Bg(){this.l=115;this.m={}}
A(Bg,O);var Cg={horizontalAlignment:"left",yd:!0,ma:null,marginWidth:0};l=Bg.prototype;l.J=function(a){this.i=a.get(116);if(a=N(a,154))for(var b=0,c;c=a[b++];)this.m[Dg]=c};
l.K=function(){this.f=!1};
l.ca=function(){this.hide()};
l.isVisible=function(){return this.f};
l.getHeight=function(){return this.f?this.i.getHeight():0};
l.show=function(){this.f||(this.i.show(Eg(this)),this.f=!0)};
l.hide=function(){this.f&&(this.i.hide(),this.f=!1)};
function Eg(a){var b=hf(Cg);if(a.g){a=a.g.g;b.ma=a.C;b.marginWidth=a.H;var c=a.w.Ud;c||(c="rtl"==a.C?"right":"left");b.horizontalAlignment=c}return b}
;function Fg(){this.l=118}
A(Fg,O);l=Fg.prototype;l.J=function(a){this.g=a.get(119);this.C=a.get(130);this.R=a.get(145);this.s=a.get(117);this.M=a.get(123);this.D=a.get(374);this.L=a.get(121);this.V=a.get(553);this.i=a.get(128);this.N=a.get(139);this.Y=a.get(173);this.aa=N(a,160)};
l.setup=function(a){this.o=a;this.f=this.m=this.g.f.value||""};
l.K=function(a){this.o=a;this.w=this.G=!1;Gg(this)};
function Hg(a){var b={};R(a.s,11,b);!b.cancel&&a.o.kd&&Ig(a.s,function(){a.i.dismiss()})}
function Jg(a,b){if(0==a.o.Ra||2==a.o.Ra||3==a.o.Ra&&!a.m&&!b)return!1;a:{if(S(a.i)){if(null!=a.i.i)var c=Kg(a.i);else c=a.i,c=S(c)?c.g[0]:null;if(c.i)break a}c=null}var d;if(d=c){if(d=c=c.f)d=a.m,d=!(d||c?d&&c&&d.toLowerCase()==c.toLowerCase():1);d?(a.m=a.f,cf(c,a.f,!0)&&(c=a.f+c.substr(a.f.length)),Lg(a,c,We(c.length),"",!0),Mg(a,c,!0),d=!0):d=!1}return d?(a.D.add(8),!0):!1}
function Lg(a,b,c,d,e){a.o.Cc&&!a.i.isVisible()&&"mousedown"==d&&Ng(a.i,c,d);var f=!1,g=!1;if(b!=a.f||"onremovechip"==d)cf(d,"key")?a.D.add(1):"paste"==d&&a.D.add(2),f=!0,Og(a,b),R(a.s,1,{za:d,ma:a.u}),g=x(),a.F||(a.F=g),a.H=g,Ze(b)&&(e=!0),g=!0;b=og(a.V,b,c,d);switch(b.D){case 3:b.m=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.m&&!f.s&&(f.s=window.setTimeout(w(f.clear,f),f.w.ld))),a.G&&mf(b,"gs_is",1),pg(a.M,b)):g&&(a.i.clear(),f=a.M,f.m=f.i);R(a.s,2,{za:d})}
function Pg(a,b){Og(a,b);a.g.refresh();R(a.s,4,{ma:a.u,input:b})}
function ig(a){a.f!=a.m&&Og(a,a.m);R(a.s,5,{input:a.m,suggestions:a.i.g,ma:a.u});a.g.refresh()}
l.getHeight=function(){return this.g.getHeight()};
function Qg(a){if(a.Y){if(a.o.gb)return!0;for(var b=0,c;c=a.aa[b++];)if(c.isEnabled())return!0}return!1}
l.search=function(a){this.L.search(this.f,a)};
l.clear=function(){this.f&&(Og(this,""),this.g.clear(),R(this.s,1),R(this.s,16),this.i.clear())};
function Rg(a,b){var c=a.g.s.Ia();a.u==b?S(a.i)&&c==a.f.length&&(null!=a.i.i?a.o.Ga&&a.L.search(Kg(a.i).f,6):a.o.Kb&&Jg(a,!0)):a.C&&0==c&&a.C.f()}
function Mg(a,b,c){a.f=b||"";Gg(a);a.g.refresh();c||R(a.s,4,{ma:a.u,input:a.f})}
function Gg(a){var b=Sg(a.R,a.f);if(b!=a.u){var c=a.g;c.C&&(c.C.dir=b);c.f.dir=b;c.u&&(c.u.dir=b);if(c.G){var d=c.G;d.s!=b&&(d.f.dir=d.s=b)}if(c.oa){c=c.f;d=0;var e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.u=b}}
function Og(a,b){a.f=a.m=b||"";Gg(a)}
;function Tg(){this.l=128}
A(Tg,O);l=Tg.prototype;l.J=function(a){this.o=a.get(129);this.M=a.get(145);this.G=a.get(115);this.N=a.get(123);this.u=a.get(118);this.O=a.get(147);this.L=N(a,153);this.V=a.get(553);this.F=a.get(184);this.Y=a.get(157)};
l.setup=function(){this.L.sort(gf)};
l.K=function(a){this.w=a;this.i=this.f=null;this.m=this.D=!1;this.R=!0;this.C="";this.H=0};
l.ca=function(){this.s&&(window.clearTimeout(this.s),this.s=null);this.g=null;this.hide()};
function wg(a,b,c){var d=a.F&&a.F.g(b);a.clear();a.g=b;var e=S(a)?b[0].f:a.u.m;a:{var f=e;if(a.M.f){for(var g=!1,h=!1,k=0,m;k<f.length;++k)if(m=f.charAt(k),!Ug.test(m)&&(Vg.test(m)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.m);a.C=Sg(a.M,e);if(a.w.Hd&&S(a)&&c&&!Mf){a.D=!0;c=a.o;if(c.m){c.D=a.C;Wg(c);e=!1;for(f=0;g=b[f++];)Xg(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.f.a||"";e=af(e);b=a.O;f=0;e&&(b.f||Yg(b),Zg(b),e in b.i?f=b.i[e]:(f=b.f,g=$e(e),f.innerHTML!=g&&(f.innerHTML=g),b.i[e]=f=b.f.offsetWidth,
b=b.f,""!=b.innerHTML&&(b.innerHTML="")));a.H=f}else{a.D=!1;b=a.o;if(a.D||!a.w.Qd&&!S(a))c=[];else{c=[];e=[];for(f=0;a.L[f++]&&!zf(a.g,e););(f=e?e.length:0)&&(f-=$g(e,c,0));for(g=0;g<a.g.length;++g)c.push(a.g[g]);f&&(f-=$g(e,c,1));a.w.gd&&c.push(1);f&&(f-=$g(e,c,2));f&&$g(e,c,3);a.w.Gb&&c.push(2);a.Y&&1<c.length&&5==c[0].T()&&c.splice(1,0,3)}if(b.m){b.D=a.C;Wg(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.s?g.s.style.display="":(h=P("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace=
"nowrap",h.dir=g.F,g.i=Q(),g.i.className="sbsb_g",g.f.Gb&&(g.i.style.paddingBottom="1px"),ah(g,g.f.searchText,g.i,13),g.f.fd?ah(g,g.f.yb,g.i,8):g.f.hd&&ah(g,g.f.Pd,g.i,14),h.appendChild(g.i),h.onmousedown=w(g.mb,g),h.className=g.f.Qa,g.s=h),g.g.appendChild(g.s);else if(2==g)if(g=b,g.o)g.o.style.display="";else{h=Q("sbsb_j "+g.f.Qa);k=P("a");k.id="sbsb_f";fc(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.f.jb+"&answer=106230");var n=g.f.learnMoreText;if(n instanceof F)m=n;else{if(n instanceof
F)m=n;else{var p="object"==typeof n;m=null;p&&n.hb&&(m=n.Ha());n=p&&n.ha?n.fa():String(n);Za.test(n)&&(-1!=n.indexOf("&")&&(n=n.replace(Ta,"&amp;")),-1!=n.indexOf("<")&&(n=n.replace(Ua,"&lt;")),-1!=n.indexOf(">")&&(n=n.replace(Va,"&gt;")),-1!=n.indexOf('"')&&(n=n.replace(Wa,"&quot;")),-1!=n.indexOf("'")&&(n=n.replace(Xa,"&#39;")),-1!=n.indexOf("\x00")&&(n=n.replace(Ya,"&#0;")));m=G(n,m)}n=bc(m).toString().replace(/(\r\n|\r|\n)/g,"<br>");m=G(n,m.Ha())}ec(k,m);h.appendChild(k);h.onmousedown=w(g.mb,
g);g.o=h;g.m.appendChild(g.o)}else 3==g?(g=b,h=g.O.pop(),h||(h=P("li"),h.setAttribute("aria-hidden","true"),h.l=!0,k=P("div","sbsb_e"),h.appendChild(k)),g.g.appendChild(h)):Xg(b,g)&&(e=!0);c=e}else c=!1;a.H=0}d&&(a.i=a.F.l(),bh(a,a.F.f()));c?a.show():a.clear()}
function bh(a,b){if(a.f!=b){var c=a.f;a.f=b;ch(a,c)}}
l.cc=function(){if(S(this))if(this.m){var a=this.f;this.f==this.g.length-1?this.i=this.f=null:null==this.f?this.f=0:++this.f;this.i=this.f;dh(this,a,w(this.cc,this))}else this.show()};
l.dc=function(){if(S(this))if(this.m){var a=this.f;this.g&&0!=this.f?null==this.f?this.f=this.g.length-1:--this.f:this.i=this.f=null;this.i=this.f;dh(this,a,w(this.dc,this))}else this.show()};
l.isVisible=function(){return this.m};
l.isEnabled=function(){return this.R};
function Kg(a){return null!=a.i?a.g[a.i]:null}
function S(a){return!(!a.g||!a.g.length)}
l.show=function(){if(!this.m){a:{var a=this.G,b=Dg;if(b in a.m){if(a.g){if(b==Dg)break a;a.hide();a.g.g.m=!1}a.g=a.m[b];b=a.i;a=a.g;a!=b.u&&(b.u=a,a=a.f.m,b.F?a!=b.F&&b.o.replaceChild(a,b.F):b.o.appendChild(a),b.F=a)}}this.G.show();this.m=!0}};
l.hide=function(){this.m&&(this.s&&(window.clearTimeout(this.s),this.s=null),this.G.hide(),this.m=!1)};
l.clear=function(){this.hide();this.g=null;this.D=!1;null!=this.f&&eh(this.o,this.f);this.i=this.f=null;this.o.clear()};
l.dismiss=function(){var a=this.N;a.m=a.i;this.hide()};
function jg(a){null!=a.f&&eh(a.o,a.f);a.i=a.f=null}
function Ng(a,b,c){if(S(a))a.show();else{var d=a.u.m;d&&(b=og(a.V,d,b||a.u.g.s,c),pg(a.N,b))}}
function $g(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.vd&&f.vd(b)&&++d:(b.push(f),++d));return d}
function dh(a,b,c){null==a.f||a.o.isSelectable(a.f)?(ch(a,b),null==a.f?ig(a.u):Mg(a.u,a.g[a.f].f)):(eh(a.o,b),c())}
function ch(a,b){null!=b&&eh(a.o,b);null!=a.f&&a.o.highlight(a.f)}
var Dg=Ue++;function fh(){this.l=154}
A(fh,O);fh.prototype.J=function(a){this.g=a.get(128);this.f=a.get(129)};function gh(){this.l=145;this.f=Vg.test("x")}
A(gh,O);var Ug=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Vg=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");gh.prototype.Z=function(a){this.g=a.cb()};
function Sg(a,b){var c=a.g;a.f&&(Vg.test(b)?c="ltr":Ug.test(b)||(c="rtl"));return c}
;function hh(){this.l=117;this.g=[];this.i={uc:1}}
A(hh,O);var ih=window.postMessage&&!(Cf||Hf||Ff);hh.prototype.ca=function(){this.f=null};
function T(a,b,c,d,e,f){var g=jh(a,b);g||(g={},a.g.push({element:b,bd:g}));var h=g[c];h||(h=g[c]=[],a=kh(a,c,b.uc?window:Yf(b),h),"string"!==typeof c?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({xd:!!f,kb:!1,priority:e||0,process:d});h.sort(lh);d.Jc=c}
function mh(a,b,c){if(a=jh(a,b))if(a=a[c.Jc]){b=0;for(var d;d=a[b++];)if(d.process==c){d.kb=!0;break}}}
function nh(a,b,c){T(a,a.i,b,c,void 0,void 0)}
function R(a,b,c){c=c||{};(a=a.i[b])&&a(c,c.za)}
function oh(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function Ig(a,b){if(ih){if(!a.f){a.f=[];var c=w(a.m,a);oh(window,"message",c)}a.f.push(b);c=window.location.href;window.postMessage("sbox.df",/HTTPS?:\/\//i.test(c)?c:"*")}else window.setTimeout(b,0)}
hh.prototype.m=function(a){this.f&&a&&a.source==window&&"sbox.df"==a.data&&this.f.length&&(this.f.shift()(),this.f&&this.f.length&&window.postMessage("sbox.df",window.location.href))};
function kh(a,b,c,d){return w(function(e,f){if(d.length){var g;if(!(g=e)){g={};var h=c.event;h&&(h.keyCode&&(g.keyCode=h.keyCode),g.wd=!0)}g.za=f||b;h=g;for(var k,m,n=0,p;p=d[n++];)p.kb?m=!0:k||(p.xd?ph(this,p,h):k=p.process(h));if(m)for(n=0;p=d[n];)p.kb?d.splice(n,1):++n;if(g.La)return delete g.La,g.wd&&(g=c.event||g),Vf(g),g.returnValue=!1}},a)}
function jh(a,b){for(var c=0,d;c<a.g.length;++c)if(d=a.g[c],d.element==b)return d.bd;return null}
function ph(a,b,c){Ig(a,function(){b.process(c)})}
function lh(a,b){return b.priority-a.priority}
;function qh(){this.l=494;this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}}
A(qh,O);qh.prototype.K=function(){this.reset()};
qh.prototype.reset=function(){this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}};function rh(){this.l=374}
A(rh,O);rh.prototype.K=function(){this.reset()};
rh.prototype.add=function(a){this.f||(this.f={});this.f[a]=!0};
rh.prototype.reset=function(){this.f={}};function sh(){this.l=120;this.D=-1}
A(sh,O);var th=/\.+$/,uh=/\./g,vh=/./g,wh=Ve([23]);sh.prototype.J=function(a){this.G=a.get(191);this.f=a.get(123);this.m=a.get(118);this.w=a.get(374);this.g=a.get(494);this.C=a.get(126);this.o=a.get(128);this.F=N(a,311)};
sh.prototype.setup=function(a){this.u=a.Cd};
sh.prototype.K=function(a){this.i=a;this.reset()};
function xh(a,b,c,d){var e=a.m.m;c&&(e=e.replace(vh,"#"));c=[];c[27]=64;c[0]=yh(a.i.clientName);c[28]=yh(a.i.requestIdentifier);c[1]=void 0==b?"":b+"";b=a.w;var f=[];for(g in b.f)f.push(parseInt(g,10));c[26]=f.join("j");var g="";null!=a.o.i?g=a.o.i+"":(b=a.C.g,(10<=b.u||3<=b.w.bb())&&(g="o"));c[2]=g;g="";if(b=a.o.g){for(var h=f=0,k;k=b[h++];){k=jf(k.T(),k.g||[]);if(k!=m){1<f&&(g+="l"+f);g+=(m?"j":"")+k;f=0;var m=k}++f}1<f&&(g+="l"+f)}c[3]=g;m="";g=a.o.g;b=a.g.o;if(g)for(f=0;h=g[f++];){var n=jf(h.T(),
h.g||[]);n in b&&delete b[n]}if(b)for(n in b)m+=(m?"j":"")+n;c[35]=m;n=a.g.g;c[33]=-1<n?String(n):"";c[4]=Math.max(a.m.F-a.s,0);c[5]=Math.max(a.m.H-a.s,0);c[6]=a.D;c[7]=x()-a.s;c[18]=Math.max(a.m.O-a.s,0);c[8]=a.f.aa;m=a.f;m=(n=m.g)?m.f.i:0;c[25]=n?"1"+(a.i.Fc?"a":"")+(a.i.ub?"c":""):"";c[10]=m;n=a.f;c[11]=n.g?n.f.m:0;c[12]=a.f.V;g=a.f;n=g.O;m=g.N;g=g.R;c[9]=n;c[22]=m;c[17]=g;c[13]=a.f.Y;c[14]=a.f.G;c[15]=a.f.L;n=a.f;m=[];for(b=f=0;b<=zh;++b)g=n.H[b],0==g?f++:(f=1==f?"0j":1<f?b+"-":"",m.push(f+g),
f=0);c[16]=m.join("j");c[36]=a.f.M;n=0;for(var p in a.g.f)n++;c[30]=n;c[31]=a.g.s;c[32]=a.g.m;c[19]=yh(a.i.pb);p=a.g;m=a.C.f;n=!1;m&&(n=m.g.f.e||"");m=0;n?(m|=1,1<p.i&&(m|=2)):0<p.i&&(m|=2);p=m;c[20]=0==p?"":p+"";for(p=0;n=a.F[p++];)m=n.l,wh[m]&&(c[m]=void 0==c[m]?yh(n.f()):"");c=c.join(".").replace(th,"");if(a.G&&a.u){p=e+c;b:{n=a.u;m=[];if(n)for(f=b=g=0;f<n.length;++f){h=n.charCodeAt(f);if(32>h||127<h||!Ah[h-32]){n=[];break b}g<<=6;g|=Ah[h-32]-1;b+=6;8<=b&&(m.push(g>>b-8&255),b-=8)}n=m}g=n;n={};
n.W=Array(4);n.buffer=Array(4);n.Yd=Array(4);n.padding=Array(64);n.padding[0]=128;for(m=1;64>m;++m)n.padding[m]=0;Bh(n);m=Array(64);64<g.length&&(Bh(n),Ch(n,g),g=Dh(n));for(b=0;b<g.length;++b)m[b]=g[b]^92;for(b=g.length;64>b;++b)m[b]=92;Bh(n);for(b=0;64>b;++b)n.buffer[b]=m[b]^106;Eh(n,n.buffer);n.total=64;Ch(n,Fh(p));p=Dh(n);Bh(n);Eh(n,m);n.total=64;Ch(n,p);p=Dh(n);p=p.slice(0,8);"string"===typeof p&&(p=Fh(p));n="";if(p){m=p.length;for(f=b=g=0;m--;)for(b<<=8,b|=p[f++],g+=8;6<=g;)n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>
g-6&63),g-=6;g&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>g+8-6&63))}p=n}else p="";e={oq:e,gs_l:c+"."+p};d&&(e.ei=d);a.i.zd&&(e.q=a.m.f);return e}
sh.prototype.reset=function(){this.s=x();++this.D;var a=this.m;a.F=0;a.H=0;a.O=0;this.w.reset();a=this.f;if(a.g){var b=a.f;b.i=0;b.m=0}a.aa=0;a.u=0;a.V=0;a.O=0;a.N=0;a.R=0;a.Y=0;a.G=0;a.L=0;a.M=0;a.H=[];for(b=0;b<=zh;++b)a.H[b]=0;for(a=0;b=this.F[a++];)b.reset();this.g.reset()};
function yh(a){return a?a.replace(uh,"-"):""}
;function Gh(){this.l=121}
A(Gh,O);l=Gh.prototype;l.Z=function(a){this.m=a.Bb()};
l.J=function(a){this.g=a.get(347);this.u=a.get(130);this.F=a.get(117);this.C=a.get(123);this.o=a.get(118);this.G=a.get(120);this.H=a.get(128);this.D=a.get(139);this.w=a.u;this.s=N(a,294)};
l.K=function(a){this.i=a};
l.search=function(a,b){if(this.s){for(var c=!1,d=0,e;e=this.s[d++];)2==e.f(a,b)&&(c=!0);if(c)return}if(Ze(a)||this.i.ka||this.u&&this.u.ka()){if(Ee.test(b)){if(this.m&&!this.f){c=this.m;b:{if(d=c.getElementsByTagName("input")){e=0;for(var f;f=d[e++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){d=f;break b}}d=null}d?c=null:(d=P("input"),d.type="hidden",d.name="btnI",d.value="1",c.appendChild(d),c=d);this.f=c}}else this.f&&(this.m.removeChild(this.f),this.f=null);this.g&&this.i.Ya&&Hh(this.g,
b);this.w.search(a,b);Ih(this);R(this.F,12,{query:a})}};
l.redirect=function(a){this.g&&this.i.Ya&&Hh(this.g,void 0);this.w.redirect(a);Ih(this)};
function Ih(a){var b=a.C;b.m=b.i;a.C.s=null;a.G.reset();a.H.clear();a.o.m!=a.o.f&&(b=a.o,b.m=b.f);a.D&&a.D.clear()}
;function Jh(){this.l=553}
A(Jh,O);Jh.prototype.J=function(a){this.g=N(a,156);a.get(126)};
Jh.prototype.setup=function(){this.g.sort(Kh)};
Jh.prototype.K=function(a){this.f=a;this.i=a.nb};
Jh.prototype.ob=function(a){this.i=a};
function og(a,b,c,d,e){b=new kf(b,c||We(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.g(b),f>c&&(c=f)}b.D=c;null!=a.f.Wa&&mf(b,"ds",a.f.Wa,!0);null!=a.f.lc&&mf(b,"swl",a.f.lc,!0);mf(b,"pq",a.i,!0);e&&!b.i&&(b.F=!0);b.i||(b.o=x(),"cp"in b.u||(a=b.H.Ia(),mf(b,"cp",a,!0)),mf(b,"gs_id",b.s),b.g=Xe(b.u)+":"+b.w,b.i=!0);return b}
function Kh(a,b){return a.f()-b.f()}
;function Lh(){this.l=123;this.C=!1;this.i=-1}
A(Lh,O);var Mh=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],zh=Mh[Mh.length-1]+1,Nh=100*Mh.length-1;l=Lh.prototype;l.J=function(a){this.f=a.get(133);this.qa=a.get(130);this.Aa=a.get(118);this.Lc=a.get(120);this.sa=a.get(494);this.Ec=a.get(124);this.oa=a.get(125);this.pa=a.get(230);this.Pc=a.get(127)};
l.K=function(a){this.w=this.Pc.f;this.ra=a;this.C=!0;this.o={};this.F=0;this.Va=a.Nc;this.yc=a.Ib;this.m=-1;this.g=this.ra.Gc&&!!this.f};
l.ca=function(){this.C=!1;Oh(this);this.o=this.s=null;this.m=this.i};
function pg(a,b){if(!(!a.C||a.yc||a.qa&&a.qa.l())){var c=!0,d=lf(b);d>a.i&&(a.i=d);++a.aa;a.sa.f[b.getId()]=!0;Ze(a.Aa.f)||Ze(b.f)||(d=a.sa,d.g=Math.max(d.g,0));d=x();for(var e in a.o)2500<d-a.o[e].o&&Ph(a,e);a.g&&(e=a.f.get(b))&&((c=a.Va||b.F)&&a.ra.nd&&(b.m=!0),a.oa.process(e),e.m&&++a.V,a.s=null);c&&(a.s=b,a.D||a.Tb())}}
function Qh(a,b){return w(function(c){this.ic(c,b)},a)}
l.Tb=function(){Oh(this);if(!(2<this.w.bb())){var a=this.s;this.s=null;if(a){var b=[],c=a.G;if(c)for(var d in c)L(d,c[d],b);b=this.w.jc(a,b.join("&"),Qh(this,a),w(this.ic,this));a.m||(++this.O,b?(this.o[a.getId()]=a,++this.u):++this.N);a=100;b=(this.u-2)/2;for(c=1;c++<=b;)a*=2;a<this.F&&(a=this.F);this.D=window.setTimeout(w(this.Tb,this),a)}}};
function Oh(a){null!=a.D&&(window.clearTimeout(a.D),a.D=null)}
function Ph(a,b){a.w.Xa(b);delete a.o[b];a.u&&--a.u}
l.ic=function(a,b){if(this.C){if(!b&&(b=this.o[(a[2]||{}).j],!b))return;if(!b.m){var c=this.Ec;var d=b,e=a[0],f=a[1],g={},h=a[2];if(h)for(var k in h){var m=h[k];k in c.f&&(m=c.f[k].parse(m));g[k]=m}var n=m=!1;h=!1;k=0;for(var p;p=f[k++];)if(33==(p[1]||0)?n=!0:m=!0,n&&m){h=!0;break}m=0;n=[];for(k=0;p=f[k++];){var t=p[1]||0;if(!h||33!=t){var q=p[0];c.i&&(q=c.g.bold(e.toLowerCase(),af(q).replace(Oe,"")));n.push(new Ie(q,af(q).replace(Oe,""),m++,t,p[2]||[],Rh(p)))}}c=new nf(d,n,new Ge(g),!1,!0,!1);this.pa&&
(c=this.pa.f(c,this.Aa.f));if(this.g)for(d=this.f,e=c,(e.f&&e.f[0]||""!=e.l.f)&&e&&e.i&&(d.g[e.l.g]=e),f=0;f<d.f.length;++f)d.f[f].update(e);lf(b)<=this.m?!b||b.f||c.m||(d=b,this.M=x()-d.o):(++this.R,this.oa.process(c)||++this.Y,d=b,this.F=c.g.f.d||0,d&&(Ph(this,d.getId()),e=d.o,e=x()-e,d.f?(this.L+=e,this.G=Math.max(e,this.G),++this.H[e>Nh?zh:Mh[Math.floor(e/100)]]):this.M=e));c&&(c=c.g.f.q||"")&&(this.Lc.u=c)}}};function Sh(){this.l=124;this.f={}}
A(Sh,O);Sh.prototype.J=function(a){this.g=a.get(150);if(a=N(a,158))for(var b=0,c;c=a[b++];)this.f[c.ze()]=c};
Sh.prototype.K=function(a){this.i=a.fb};
function Rh(a){return(a=a[3])?new Ge(a):He}
;function Th(){this.l=125}
A(Th,O);Th.prototype.J=function(a){this.m=a.get(117);this.s=a.get(118);this.o=a.get(494);this.f=N(a,122);this.g=a.get(126);this.i=a.get(128);this.f.sort(Uh)};
Th.prototype.process=function(a){var b=a,c=this.s.f.toLowerCase(),d=this.g.f;c=bf(c);var e=b.l;b=e?e.l:bf(b.l.f.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.f)for(e=0;b=this.f[e++];)a=b.edit(a);d=this.g.f=a;a=d.l.f;e=d.f;this.i.isEnabled()&&wg(this.i,e,0==d.T());b=this.o;var g=d.l;f=g.getId();if(f in b.f){var h=d.f.length;0<h&&(Ze(g.f)||(b.g=h),g=g.o,g=x()-g,b.m+=g,++b.s);d.g.f.e&&++b.i;
delete b.f[f]}d=d.f;for(f=0;g=d[f++];)b.o[jf(g.T(),g.g||[])]=!0;R(this.m,3,{input:a,suggestions:e})}return c};
function Uh(a,b){return a.f()-b.f()}
;function Vh(){this.l=126}
A(Vh,O);Vh.prototype.J=function(a){this.g=a.get(123)};
Vh.prototype.K=function(){this.f=null};function Wh(){this.l=127;this.i={}}
A(Wh,O);Wh.prototype.J=function(a){a=N(a,149);for(var b=0,c;c=a[b++];)this.i[c.va()]=c};
Wh.prototype.K=function(a){var b="https:"==document.location.protocol,c=[];L("client",a.clientName,c);L("hl",a.jb,c);L("gl",a.oc,c);L("sugexp",a.pb,c);L("gs_rn",64,c);L("gs_ri",a.requestIdentifier,c);a.authuser&&L("authuser",a.authuser,c);this.g={protocol:"http"+(b?"s":"")+"://",host:a.Yb||"clients1."+a.Da,Na:a.Na||"/complete/search",nc:c.length?c.join("&"):""};this.f&&this.f.va()==a.connectionType||(this.f=this.i[a.connectionType])};function Xh(){this.l=191}
A(Xh,O);
var Ah=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],Yh=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],Zh=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Fh(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Bh(a){a.W[0]=1732584193;a.W[1]=4023233417;a.W[2]=2562383102;a.W[3]=271733878;a.Ba=a.total=0}
function Eh(a,b){for(var c=a.Yd,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.W[0];d=a.W[1];for(var f=a.W[2],g=a.W[3],h,k,m,n=0;64>n;++n)16>n?(h=g^d&(f^g),k=n):32>n?(h=f^g&(d^f),k=5*n+1&15):48>n?(h=d^f^g,k=3*n+5&15):(h=f^(d|~g),k=7*n&15),m=g,g=f,f=d,e=e+h+Zh[n]+c[k]&4294967295,h=Yh[n],d=d+((e<<h|e>>>32-h)&4294967295)&4294967295,e=m;a.W[0]=a.W[0]+e&4294967295;a.W[1]=a.W[1]+d&4294967295;a.W[2]=a.W[2]+f&4294967295;a.W[3]=a.W[3]+g&4294967295}
function Ch(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Ba++]=b[d],64==a.Ba&&(Eh(a,a.buffer),a.Ba=0)}
function Dh(a){var b=Array(16),c=8*a.total,d=a.Ba;Ch(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Eh(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.W[e]>>c&255;return b}
;function $h(){this.l=150}
A($h,O);
$h.prototype.bold=function(a,b){b=$e(b.replace(Fe,""));a=$e(bf(a,!0));if(cf(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)" "==h||"\t"==h?c.length&&(d.push({t:c,ya:g,e:f+1}),c="",g=-1):(c+=h,-1==g?g=f:f==e&&d.push({t:c,ya:g,e:f+1}));c=a.split(/\s+/);f={};for(e=0;g=c[e++];)f[g]=1;h=-1;c=[];var k=d.length-1;for(e=0;g=d[e];++e)f[g.t]?(g=-1==h,e==k?c.push({ya:g?e:h,e:e}):g&&(h=e)):-1<h&&(c.push({ya:h,e:e-1}),h=-1);if(!c.length)return"<b>"+b+
"</b>";e="";for(f=g=0;h=c[f];++f)(k=d[h.ya].ya)&&(e+="<b>"+b.substring(g,k-1)+"</b> "),g=d[h.e].e,e+=b.substring(k,g);g<b.length&&(e+="<b>"+b.substring(g)+"</b> ");return e};function ai(){this.l=146}
A(ai,O);function bi(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
bi("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");bi("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");bi("D1,D4,D7,DA,DD");bi("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");bi("D1__,D4__,D7__,DA__,DD");bi("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");bi("CF,D2,D5,D8,DB");function ci(){this.l=116;this.M=!0}
A(ci,O);l=ci.prototype;
l.Z=function(a,b){this.R=a.cb();b.addRule(".sbdd_a",(Mf?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Mf?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");
b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
l.J=function(a){this.N=a.get(130);a.get(115);this.s=a.get(118);this.H=a.get(117);this.Y=a.g.getId()};
l.setup=function(a){this.f=a};
l.la=function(a){this.g=Q();this.g.className="gstl_"+this.Y+" sbdd_a";di(this.g,!1);this.O=this.g;this.D=Q("fl");this.g.appendChild(this.D);this.w=Q();this.g.appendChild(this.w);this.o=Q("sbdd_b");this.w.appendChild(this.o);this.aa=Q();this.w.appendChild(this.aa);this.f.Fb&&(this.i=P("iframe","gstl_"+this.Y+" sbdd_c"),di(this.i,!1),(this.f.da||document.body).appendChild(this.i));if(this.m=this.f.Dc)"number"===typeof this.m&&(this.m+=this.f.Fa[2],this.m-=ei(this)),fi(this,this.g,this.m);gi(this);(a.da||
document.body).appendChild(this.g);nh(this.H,8,w(this.fc,this))};
l.K=function(a){this.f=a;this.g.style.position=a.ta};
l.getHeight=function(){this.C||(this.C=this.o?Math.max(this.o.offsetHeight,0):0);return this.C};
l.show=function(a){hi(this,a.ma||this.R);var b=a.marginWidth;if(this.V!=b){var c=this.D.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.V=b}this.M=a.yd;this.L=a.horizontalAlignment;ii(this.s.g,!0);di(this.O,!0);di(this.i,!0);R(this.H,14);this.fc()};
l.hide=function(){this.C=0;ii(this.s.g,!1);di(this.O,!1);di(this.i,!1);hi(this,this.R);R(this.H,9)};
l.fc=function(){this.C=0;gi(this);if(this.i){var a=this.f.sb[0],b=this.i.style;"relative"!=this.f.ta&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.D.offsetWidth+"px");a=this.getHeight()+a;this.i.style.height=Math.max(a,0)+"px";fi(this,this.i,this.o.offsetWidth)}this.u&&Wg(this.u.f)};
function gi(a){var b,c;if(c=a.u)c=a.u.f,c=c.f.ed||c.F==c.D?c.V:null;var d=(b=c)?b.offsetWidth:ji(a.s.g);var e=a.m;c=ei(a);e?"string"===typeof e&&(e=null):a.V||!a.M?a.w.style.display="inline-block":(a.w.style.display="",e=d+a.f.Fa[2]-c,fi(a,a.g,e));if("relative"!=a.f.ta){var f="rtl"==Qc()!=("rtl"==a.G),g=a.f.da;var h={ia:0,Sa:0};if(f||!g||g==document.body||a.f.zb)h=Qf(a.s.g.D),b&&(h.ia=Qf(b).ia);b=h;h=e;e=a.f.Fa;g=e[1];e=e[0];e=b.Sa+a.s.getHeight()+e;if("right"==a.L){h="rtl"==Qc()!=("rtl"==a.G);var k=
a.f.da;g=-g;if(h||!k||k==document.body)g+=(Yf(a.g)||window).document.documentElement.clientWidth-d-b.ia;d=g;h=e;b=void 0}else b=b.ia+g,"center"==a.L&&h&&(b+=(d-h)/2),h=e,d=void 0;e={ia:0,Sa:0};"absolute"==a.f.ta&&a.f.da&&a.f.da!=document.body&&(f||a.f.zb)&&(e=Qf(a.f.da));g=a.g.style;g.top=h-e.Sa+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.ia+"px":(b=0,a.f.da&&f&&(b=document.body.clientWidth-(e.ia+a.f.da.offsetWidth)),g.right=d+c-b+"px")}}
function fi(a,b,c){"number"===typeof c?0<c&&(a.f.Xd?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function di(a,b){a&&(a.style.display=b?"":"none")}
function hi(a,b){if(a.G!=b){a.G=b;var c=a.f.da;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");Tf(a.g,b)}}
function ei(a){return a.N&&a.N.g()&&(a=a.s.g.u.offsetWidth,"number"===typeof a)?a:0}
;function ki(){this.g=this.g;this.m=this.m}
ki.prototype.g=!1;ki.prototype.dispose=function(){this.g||(this.g=!0,this.ja())};
ki.prototype.ja=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function li(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.l=!1}
li.prototype.stopPropagation=function(){this.l=!0};
li.prototype.preventDefault=function(){this.defaultPrevented=!0};var mi=!I||9<=Number(xc),ni=I&&!wc("9"),oi=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{r.addEventListener("test",xa,b),r.removeEventListener("test",xa,b)}catch(c){}return a}();function pi(a,b){li.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
A(pi,li);var qi={2:"touch",3:"pen",4:"mouse"};
pi.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(oc){a:{try{jc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:qi[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
pi.prototype.stopPropagation=function(){pi.ea.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
pi.prototype.preventDefault=function(){pi.ea.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ni)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ri="closure_listenable_"+(1E6*Math.random()|0),si=0;function ti(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.Ja=e;this.key=++si;this.na=this.Ca=!1}
function ui(a){a.na=!0;a.listener=null;a.f=null;a.src=null;a.Ja=null}
;function vi(a){this.src=a;this.listeners={};this.f=0}
vi.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=wi(a,b,d,e);-1<g?(b=a[g],c||(b.Ca=!1)):(b=new ti(b,this.src,f,!!d,e),b.Ca=c,a.push(b));return b};
vi.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=wi(e,b,c,d);return-1<b?(ui(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function xi(a,b){var c=b.type;c in a.listeners&&Ma(a.listeners[c],b)&&(ui(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function wi(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.na&&f.listener==b&&f.capture==!!c&&f.Ja==d)return e}return-1}
;var yi="closure_lm_"+(1E6*Math.random()|0),zi={},Ai=0;function Bi(a,b,c,d,e){if(d&&d.once)Ci(a,b,c,d,e);else if(v(b))for(var f=0;f<b.length;f++)Bi(a,b[f],c,d,e);else c=Di(c),a&&a[ri]?a.f.add(String(b),c,!1,Ca(d)?!!d.capture:!!d,e):Ei(a,b,c,!1,d,e)}
function Ei(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ca(e)?!!e.capture:!!e,h=Fi(a);h||(a[yi]=h=new vi(a));c=h.add(b,c,d,g,f);if(!c.f){d=Gi();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)oi||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Hi(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ai++}}
function Gi(){var a=Ii,b=mi?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ci(a,b,c,d,e){if(v(b))for(var f=0;f<b.length;f++)Ci(a,b[f],c,d,e);else c=Di(c),a&&a[ri]?a.f.add(String(b),c,!0,Ca(d)?!!d.capture:!!d,e):Ei(a,b,c,!0,d,e)}
function Ji(a,b,c,d,e){if(v(b))for(var f=0;f<b.length;f++)Ji(a,b[f],c,d,e);else(d=Ca(d)?!!d.capture:!!d,c=Di(c),a&&a[ri])?a.f.remove(String(b),c,d,e):a&&(a=Fi(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=wi(b,c,d,e)),(c=-1<a?b[a]:null)&&Ki(c))}
function Ki(a){if("number"!==typeof a&&a&&!a.na){var b=a.src;if(b&&b[ri])xi(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Hi(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ai--;(c=Fi(b))?(xi(c,a),0==c.f&&(c.src=null,b[yi]=null)):ui(a)}}}
function Hi(a){return a in zi?zi[a]:zi[a]="on"+a}
function Li(a,b,c,d){var e=!0;if(a=Fi(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.na&&(f=Mi(f,d),e=e&&!1!==f)}return e}
function Mi(a,b){var c=a.listener,d=a.Ja||a.src;a.Ca&&Ki(a);return c.call(d,b)}
function Ii(a,b){if(a.na)return!0;if(!mi){var c=b||u("window.event"),d=new pi(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.l&&0<=g;g--){d.f=c[g];var h=Li(c[g],f,!0,d);e=e&&h}for(g=0;!d.l&&g<c.length;g++)d.f=c[g],h=Li(c[g],f,!1,d),e=e&&h}return e}return Mi(a,new pi(b,this))}
function Fi(a){a=a[yi];return a instanceof vi?a:null}
var Ni="__closure_events_fn_"+(1E9*Math.random()>>>0);function Di(a){if(Ba(a))return a;a[Ni]||(a[Ni]=function(b){return a.handleEvent(b)});
return a[Ni]}
;function Oi(){ki.call(this);this.f=new vi(this);this.w=this;this.o=null}
A(Oi,ki);Oi.prototype[ri]=!0;Oi.prototype.addEventListener=function(a,b,c,d){Bi(this,a,b,c,d)};
Oi.prototype.removeEventListener=function(a,b,c,d){Ji(this,a,b,c,d)};
Oi.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.w;d=a.type||a;if("string"===typeof a)a=new li(a,b);else if(a instanceof li)a.target=a.target||b;else{var e=a;a=new li(d,b);nb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.l&&0<=f;f--){var g=a.f=c[f];e=Pi(g,d,!0,a)&&e}a.l||(g=a.f=b,e=Pi(g,d,!0,a)&&e,a.l||(e=Pi(g,d,!1,a)&&e));if(c)for(f=0;!a.l&&f<c.length;f++)g=a.f=c[f],e=Pi(g,d,!1,a)&&e;return e};
Oi.prototype.ja=function(){Oi.ea.ja.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ui(d[e]);delete a.listeners[c];a.f--}}this.o=null};
function Pi(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.na&&g.capture==c){var h=g.listener,k=g.Ja||g.src;g.Ca&&xi(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Qi(a,b){this.g=a;this.i=b;this.l=0;this.f=null}
Qi.prototype.get=function(){if(0<this.l){this.l--;var a=this.f;this.f=a.next;a.next=null}else a=this.g();return a};function Ri(a){r.setTimeout(function(){throw a;},0)}
var Si;
function Ti(){var a=r.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=Ec("IFRAME");e.style.display="none";gc(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(bc(cc));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=w(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!pb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.tb;c.tb=null;e()}};
return function(e){d.next={tb:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in Ec("SCRIPT")?function(e){var f=Ec("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){r.setTimeout(e,0)}}
;function Ui(){this.l=this.f=null}
var Wi=new Qi(function(){return new Vi},function(a){a.reset()});
Ui.prototype.add=function(a,b){var c=Wi.get();c.set(a,b);this.l?this.l.next=c:this.f=c;this.l=c};
Ui.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.l=null),a.next=null);return a};
function Vi(){this.next=this.scope=this.f=null}
Vi.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Vi.prototype.reset=function(){this.next=this.scope=this.f=null};function Xi(a){Yi||Zi();$i||(Yi(),$i=!0);aj.add(a,void 0)}
var Yi;function Zi(){if(r.Promise&&r.Promise.resolve){var a=r.Promise.resolve(void 0);Yi=function(){a.then(bj)}}else Yi=function(){var b=bj;
!Ba(r.setImmediate)||r.Window&&r.Window.prototype&&!D("Edge")&&r.Window.prototype.setImmediate==r.setImmediate?(Si||(Si=Ti()),Si(b)):r.setImmediate(b)}}
var $i=!1,aj=new Ui;function bj(){for(var a;a=aj.remove();){try{a.f.call(a.scope)}catch(c){Ri(c)}var b=Wi;b.i(a);100>b.l&&(b.l++,a.next=b.f,b.f=a)}$i=!1}
;function cj(a,b){Oi.call(this);this.i=a||1;this.l=b||r;this.s=w(this.Wd,this);this.u=x()}
A(cj,Oi);l=cj.prototype;l.enabled=!1;l.ba=null;l.setInterval=function(a){this.i=a;this.ba&&this.enabled?(this.stop(),this.start()):this.ba&&this.stop()};
l.Wd=function(){if(this.enabled){var a=x()-this.u;0<a&&a<.8*this.i?this.ba=this.l.setTimeout(this.s,this.i-a):(this.ba&&(this.l.clearTimeout(this.ba),this.ba=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ba||(this.ba=this.l.setTimeout(this.s,this.i),this.u=x())};
l.stop=function(){this.enabled=!1;this.ba&&(this.l.clearTimeout(this.ba),this.ba=null)};
l.ja=function(){cj.ea.ja.call(this);this.stop();delete this.l};function dj(){this.l=119;this.N=!1;this.s=We(0);this.R=-1;this.V=!1}
A(dj,O);l=dj.prototype;
l.Z=function(a,b){this.H=a;this.f=a.Cb();this.f.setAttribute("aria-haspopup",!1);this.f.setAttribute("role","combobox");this.f.setAttribute("aria-autocomplete","list");if(!a.Ua()){b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;"));var c=Lf&&Gf||Cf?6:5;b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+c+"px 9px 0");b.addRule(".sbib_c[dir=ltr]","float:right");b.addRule(".sbib_c[dir=rtl]","float:left");b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap");b.addRule(".sbib_d[dir=ltr]","float:left");b.addRule(".sbib_d[dir=rtl]","float:right");Df&&b.addRule(".sbib_a input::-ms-clear","display: none");b.addRule(".sbib_a,.sbib_c","vertical-align:top")}};
l.J=function(a){this.g=a.get(118);this.i=a.get(117);this.sa=a.get(128);this.G=a.get(173);this.oa=!!a.get(136);this.Va=a.g.getId()};
l.setup=function(a){this.w=a;this.L=a.wa;this.M=a.ud;this.Aa=a.vb;this.m=Rf(this.f);this.Ta();var b=this;Cf&&T(this.i,this.f,"beforedeactivate",function(c){b.V&&(b.V=!1,c.La=!0)},10);
a=(D("iPhone")&&!D("iPod")&&!D("iPad")||D("iPad")||D("iPod"))&&If;Ef&&ej(this);(Jf||a)&&fj(this);this.D=this.f};
l.la=function(a){var b=!!a.Ic[130];if(this.oa||Qg(this.g)||b||a.Oc)(this.o=this.H.get("gs_id"))?(b&&(this.u=this.H.get("sb_chc")),this.C=this.H.get("sb_ifc")):(this.o=Q("gstl_"+this.Va+" sbib_a"),a=this.o.style,this.M&&(a.width=this.M+"px"),this.L&&(a.height=this.L+"px"),a=this.f.style,a.border="none",a.padding=Ff||Cf?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.f.className=this.w.ib,b&&(this.u=Q("sbib_d"),this.u.id=this.H.getId("sb_chc"),this.o.appendChild(this.u)),Qg(this.g)&&this.G&&
(this.G.f.className+=" sbib_c",this.o.appendChild(this.G.f)),this.C=Q("sbib_b"),this.C.id=this.H.getId("sb_ifc"),this.o.appendChild(this.C),gj(this,this.o,this.C)),this.w.Rd||this.w.Ac||hj(this,this.o),this.D=this.o;this.Aa&&(b=w(this.Rb,this),T(this.i,this.f,"blur",b,10),b=w(this.Zb,this),T(this.i,this.f,"focus",b,10),this.ra=!0);nh(this.i,8,w(this.ad,this));ij(this)};
l.K=function(a){this.w=a;this.f.setAttribute("autocomplete","off");this.f.setAttribute("spellcheck",!1);this.f.style.outline=a.Mb?"":"none";this.pa=this.f.value;this.ra&&this.Zb();jj(this)};
l.ca=function(){this.ra&&this.Rb();kj(this)};
function gj(a,b,c){kj(a);c||(c=b);a.f.parentNode.replaceChild(b,a.f);c.appendChild(a.f);a.m&&a.w.Jd&&(Cf||Ef?Ig(a.i,function(){a.f.focus();Pf(a.f,a.s.Ia())}):a.f.focus());
jj(a)}
l.getHeight=function(){var a=this.D?this.D.offsetHeight:0;this.L>a&&(a=this.L);return a};
function ji(a){return a.M?a.M:a.D?a.D.offsetWidth:0}
l.select=function(){this.f.select();this.Ta()};
l.refresh=function(){Kf&&(this.f.value="");this.f.value=this.g.f;Kf&&(this.f.value=this.f.value);lj(this)};
l.focus=function(){if(!this.m)try{this.f.focus(),this.m=!0,lj(this)}catch(a){}};
l.blur=function(){this.m&&(this.f.blur(),this.m=!1)};
l.isFocused=function(){return this.m};
l.clear=function(){this.f.value=""};
function lj(a){if(a.m){var b=a.f.value.length;a.s=We(b);Pf(a.f,b)}}
function hj(a,b){T(a.i,b,"mouseup",function(){a.f.focus()})}
function ij(a){function b(e){T(a.i,a.f,e,w(a.Vb,a),10,c)}
T(a.i,a.f,"keydown",w(a.Yc,a));(Ff||a.w.wc)&&T(a.i,a.f,"keypress",w(a.Zc,a));T(a.i,a.f,"select",w(a.Ta,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=w(a.Vc,a);T(a.i,a.f,"compositionstart",d);T(a.i,a.f,"compositionend",d)}
l.Vc=function(a){a=a.type;"compositionstart"==a?(a=this.g,1!=a.w&&(a.w=!0)):"compositionend"==a&&(a=this.g,0!=a.w&&(a.w=!1))};
l.Yc=function(a){var b=a.keyCode;this.R=b;var c=(Gf||Ef)&&(38==b||40==b)&&S(this.sa),d=13==b,e=27==b;this.O=!1;9!=b||a.shiftKey||(this.O=Jg(this.g));if(d){var f=this;Ig(this.i,function(){f.sa.u.search(a.shiftKey?4:3)})}if(c||d||e||this.O)a.La=!0};
l.Zc=function(a){var b=a.keyCode,c=9==b&&this.O;if(13==b||27==b||c)a.La=!0};
l.Vb=function(a){if(!this.qa){var b=a.za;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.g;var e=229==a;(d.G=e)&&d.D.add(4);if(c)break a}else if(d=a!=this.R,this.R=-1,!c||d)break a;switch(a){case 27:a=this.g;a.o.Md?a.search(5):(a.i.isVisible()?a.i.dismiss():a.g.blur(),ig(a));break;case 37:Rg(this.g,"rtl");break;case 39:Rg(this.g,"ltr");break;case 38:this.g.i.dc();break;case 40:a=this.g;c=this.s;S(a.i)?
a.i.cc():Ng(a.i,c);break;case 46:a=this.g;a.f&&this.s.Eb()==a.f.length&&(a.N&&a.N.clear(),a.o.Ld&&a.search(2));break;case 8:a=this.g,a.C&&0==this.s.Ia()&&a.C.f()}}this.Ta();Lg(this.g,this.f.value,this.s,b)}};
l.Uc=function(){this.m=!0;R(this.g.s,10)};
l.Sc=function(){this.m=!1;Hg(this.g)};
function jj(a){a.N||(a.N=!0,a.aa=w(a.Uc,a),T(a.i,a.f,"focus",a.aa,99),a.Y=w(a.Sc,a),T(a.i,a.f,"blur",a.Y,99))}
function kj(a){a.N&&(a.N=!1,mh(a.i,a.f,a.aa),mh(a.i,a.f,a.Y))}
l.Zb=function(){this.F||(this.F=new cj(this.w.pollingInterval||50),this.F.f.add("tick",this.Gd,!1,void 0,this),this.F.start())};
l.Rb=function(){this.F&&(this.F.stop(),this.F=null)};
l.Gd=function(){this.Vb({za:"polling"})};
l.ad=function(){if(Ef){var a=this.f,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
l.Ta=function(){if(this.m){a:{var a=this.f;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Sf(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=We(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function ej(a){var b;oh(window,"pagehide",function(){a.qa=!0;b=a.f.value});
oh(window,"pageshow",function(c){a.qa=!1;(c.persisted||void 0!==b)&&Pg(a.g,b)})}
function fj(a){oh(window,"pageshow",function(b){b.persisted&&a.pa&&Pg(a.g,a.pa)})}
function ii(a,b){a.f.setAttribute("aria-haspopup",b);b||a.f.removeAttribute("aria-activedescendant")}
;function mj(){this.l=129;this.H={};this.L=[];this.N=[];this.O=[];this.w=[];this.R=0}
A(mj,O);l=mj.prototype;
l.Z=function(a,b){this.Y=a;this.F=a.cb();Mf||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Mf||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g","text-align:center;padding:8px 0 7px;position:relative");
b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Gf?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");Mf&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),
b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
l.J=function(a){this.C=a.get(128);this.u=a.get(118);this.G=a.get(121);a=N(a,152);var b={};if(a)for(var c=0,d;d=a[c++];)b[d.m]=d;this.aa=b};
l.setup=function(a){this.f=a};
l.la=function(){this.m=Q();this.g=P("ul","sbsb_b");this.g.setAttribute("role","listbox");this.m.appendChild(this.g)};
l.K=function(a){this.f=a;var b=a.Ub;b&&(this.V=this.Y.Ab(b));this.m.className=a.Vd||"sbsb_a";this.M=a.Td||"sbsb_d"};
l.highlight=function(a){(a=this.w[a])&&a.isSelectable()&&ed(a.f().parentNode,this.M)};
function eh(a,b){var c=a.w[b];c&&fd(c.f().parentNode,a.M)}
l.clear=function(){for(var a,b,c;c=this.L.pop();)a=c.T(),(b=this.H[a])||(b=this.H[a]=[]),b.push(c),a=c.f(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.O.push(a):a!=this.s&&a!=this.o&&this.N.push(a);this.s&&(this.s.style.display="none");this.o&&(this.o.style.display="none");this.w=[]};
l.isSelectable=function(a){return(a=this.w[a])?a.isSelectable():!1};
function Xg(a,b){var c=b.T(),d=a.aa[c];if(!d)return!1;c=(c=a.H[c])&&c.pop();if(!c){c=d.Ea(a.G);var e=c.f();ed(e,"sbse");e.id="sbse"+a.R;c.f()&&c.f().setAttribute("role","option");a.R++}d.Pa(b,c);a.L.push(c);e=c.f();var f=nj(a);f.appendChild(e);if(void 0!==b.s){a.w.push(c);var g=a.D;var h=b.l;a.f.md&&(e.onmouseover=function(){bh(a.C,h)},e.onmouseout=function(){jg(a.C)});
var k=c.f();k.onclick=function(m){a.u.g.blur();b.i&&Mg(a.u,b.f);jg(a.C);var n=a.C;n.i=n.f=h;m=m||Yf(k).event;d.Oa(m,b,a.G)}}else g=a.F;
Tf(f,g);return!0}
function ah(a,b,c,d){var e=P("input");e.type="button";e.value=af(b);e.onclick=function(){a.G.search(a.u.f,d)};
if(a.f.dd){b="lsb";var f=P("span");var g=P("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function nj(a){var b=a.N.pop();if(b)return a.g.appendChild(b),b;b=P("li");b.setAttribute("role","presentation");b.className="sbsb_c "+a.f.Qa;b.onmousedown=w(a.mb,a);a.g.appendChild(b);return b}
l.mb=function(a){a=a||Yf(this.m).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):Cf&&!Ff&&(this.u.g.V=!0);return!1};
function Wg(a){if(a.i){var b=0,c=a.u.g.u;c&&(b=c.offsetWidth);b=ji(a.u.g)-b-3;0<b&&(a.i.style.width=b+"px")}}
;function oj(){this.l=147}
A(oj,O);oj.prototype.Z=function(a){this.s=a.Bb()||document.body};
oj.prototype.setup=function(a){this.u=a};
oj.prototype.getHeight=function(){this.f||Yg(this);Zg(this);if(!this.g){var a=this.f;"|"!=a.innerHTML&&(a.innerHTML="|");this.g=this.f.offsetHeight}return this.g};
function Yg(a){var b=Q(a.u.ib),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.f=b;a.f.style.visibility="hidden";a.s.appendChild(a.f)}
function Zg(a){var b=x();if(!a.m||a.m+3E3<b){a.m=b;b=a.f;var c=Yf(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.o&&b==a.o||(a.i={},a.g=null,a.o=b)}}
;function pj(){pf.call(this);this.set(191,new Xh);this.set(150,new $h);this.set(146,new ai);this.set(147,new oj);M(this,149,new yg);this.set(145,new gh);this.set(117,new hh);this.set(494,new qh);this.set(374,new rh);this.set(120,new sh);this.set(121,new Gh);this.set(553,new Jh);this.set(124,new Sh);this.set(125,new Th);this.set(123,new Lh);this.set(126,new Vh);this.set(127,new Wh);this.set(115,new Bg);this.set(118,new Fg);this.set(128,new Tg);M(this,154,new fh);this.set(116,new ci);this.set(119,new dj);
this.set(129,new mj)}
A(pj,pf);function qj(){this.l=347;this.f=[];this.g=0}
A(qj,O);qj.prototype.J=function(a){this.o=a.get(120)};
qj.prototype.K=function(a){this.m="//"+(a.Bd||"www."+a.Da)+"/gen_204?";this.i=a.Sd||{}};
function Hh(a,b){var c=xh(a.o,b,void 0,void 0),d;for(d in a.i)d in c||(c[d]=a.i[d]);c=Xe(c,!0);rj(a,a.m+c)}
function rj(a,b){var c=new Image,d=a.g,e=a.f;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.f[a.g++]=c;c.src=b}
;function sj(){this.l=151;this.g=!0;this.f={}}
A(sj,O);l=sj.prototype;l.J=function(a){this.i=a.get(150)};
l.setup=function(){this.o=Ve([0])};
l.K=function(a){this.m=a.fb;this.g=a.ub};
l.ca=function(){this.g=!1};
l.update=function(a){if(this.g){var b=a.f;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.o[e.T()]){d=-1;break a}e=e.f;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].f;if(cf(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.f;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.f[c]=a;++f}}}}};
l.get=function(a){if(this.g){var b=this.f[a.l];if(b){for(var c=a.w,d=a.l,e=b.g,f=this.m||!e.f.k,g=[],h,k,m=b.f,n=0,p;p=m[n++];)k=p.f,h=f?this.i.bold(c,k):$e(k),g.push(new Ie(h,k,p.l,p.T(),p.g||[],p.m));delete this.f[d];return new nf(a,g,e,!0,b.i,!1)}}return null};
l.reset=function(){this.f={}};function tj(){this.l=133;this.g={};this.f=[];this.m=this.i=0}
A(tj,O);tj.prototype.J=function(a){this.f=N(a,151);this.f.sort(uj)};
tj.prototype.K=function(){this.m=this.i=0};
tj.prototype.get=function(a){var b=this.g[a.g];if(b)++this.i;else if(this.f)for(var c=0;c<this.f.length;++c)if(b=this.f[c].get(a)){b&&b.i&&(this.g[b.l.g]=b);++this.m;break}return b?new nf(a,b.f,b.g,b.m,b.i,b.s):null};
tj.prototype.has=function(a){return!!this.g[a.g]};
function uj(){return 0}
;function vj(a){this.l=a;this.f=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function wj(a,b){b&&!a.f.test(b.className)&&(b.className+=" "+a.l)}
function xj(a,b){b&&(b.className=b.className.replace(a.f," "))}
;function yj(){this.l=570;this.m=!1}
A(yj,O);l=yj.prototype;l.Z=function(a){this.s=a};
l.J=function(a){this.o=a.get(117);this.u=a.get(118)};
l.setup=function(a){var b=a.ua;if(this.f=b?this.s.Ab(b):null)nh(this.o,10,w(this.Tc,this)),nh(this.o,11,w(this.Rc,this)),T(this.o,this.f,"mouseover",w(this.Xc,this)),T(this.o,this.f,"mouseout",w(this.Wc,this)),a.ab&&(this.i=new vj(a.ab)),a.Za&&(this.g=new vj(a.Za))};
l.K=function(){this.m=!0;this.f&&this.u.g.isFocused()&&this.g&&wj(this.g,this.f)};
l.ca=function(){this.m=!1;this.f&&(this.i&&xj(this.i,this.f),this.g&&xj(this.g,this.f))};
l.Xc=function(){this.m&&this.i&&wj(this.i,this.f)};
l.Wc=function(){this.m&&this.i&&xj(this.i,this.f)};
l.Tc=function(){this.m&&this.g&&wj(this.g,this.f)};
l.Rc=function(){this.m&&this.g&&xj(this.g,this.f)};function zj(){this.l=156}
A(zj,O);zj.prototype.g=function(a){var b=1,c=a.C;Ze(a.f)||"focus"!=c&&"input"!=c||(b=2);return b};
zj.prototype.f=function(){return 2};function Aj(){this.l=160}
A(Aj,O);l=Aj.prototype;l.Z=function(a,b){this.i=a;a.Ua()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
l.J=function(a){this.w=a.get(374);this.C=a.get(128)};
l.setup=function(a){this.m=!!a.Ka;this.o=a.Ob;this.u=a.Ma;this.D=a.Fd;this.F=a.Ed};
l.la=function(){(this.g=this.i.get("gs_ok"))?this.f=this.g.firstChild:(this.f=P("img"),this.f.src=this.o+"/tia.png",this.g=P("span","gsok_a gsst_e"),this.g.id=this.i.getId("gs_ok"),this.g.appendChild(this.f));this.f.ds=w(this.Bc,this);this.f.setAttribute("tia_field_name",this.i.Cb().name);this.f.setAttribute("tia_disable_swap",!0)};
l.K=function(a){a.gb&&(this.m=!!a.Ka);this.f.setAttribute("tia_property",a.Pb)};
l.isEnabled=function(){return this.m};
l.Db=function(){return{tooltip:this.F}};
l.hc=function(a){if(!this.s)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+this.D+"/"+this.u+"_tia.js",document.body.appendChild(a),this.s=!0,this.w.add(3);else if(this.f.onclick)this.f.onclick(a)};
l.Bc=function(){this.C.dismiss()};
var Bj=Ue++;function Cj(){this.l=173;this.i={}}
A(Cj,O);l=Cj.prototype;
l.Z=function(a,b){this.m=a;a.Ua()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(Zf()+":"+$f(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",Zf()+":"+$f(.8)+";"),b.addRule(".gsst_a:active .gsst_e",Zf()+":"+
$f(1)+";"))};
l.J=function(a){this.u=a.get(118);this.g=N(a,160)};
l.setup=function(a){this.o=a.gb;this.g.sort(Dj)};
l.la=function(a){this.f=this.m.get("gs_st");if(!this.f){this.f=Q("gsst_b");this.f.id=this.m.getId("gs_st");if(a=a.wa)this.f.style.lineHeight=a+"px";Ej(this)}Fj(this)};
l.K=function(){if(this.o)for(var a=0,b;b=this.g[a++];){var c=!!this.i[Bj];if(b.isEnabled()!=c){for(;this.f.hasChildNodes();)this.f.removeChild(this.f.lastChild);Ej(this);Fj(this);break}}};
function Dj(){return 0}
function Ej(a){for(var b,c=0,d;d=a.g[c++];)if(d.isEnabled()){b=!0;var e=P("a","gsst_a");Gj(a,e,d);e.appendChild(d.g);a.f.appendChild(e)}a.f.style.display=b?"":"none"}
function Fj(a){a.i={};for(var b=0,c;c=a.g[b++];)if(c.isEnabled()){var d=Bj,e=c.g.parentNode;e.onclick=w(c.hc,c);a.i[d]=e;c.Db&&(c=c.Db(),c.Fe&&(d=a.i[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function Gj(a,b,c){b.href="javascript:void(0)";Ff&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(13==e||32==e)c.hc(d),a.u.g.focus(),Vf(d)}}
Ue++;function Hj(){this.o=33;this.l=Q();this.l.className="gspr_a"}
A(Hj,Af);Hj.prototype.f=function(){return this.l};function Ij(){Bf.call(this,33)}
A(Ij,Bf);Ij.prototype.Z=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
Ij.prototype.Ea=function(){return new Hj};
Ij.prototype.Pa=function(a,b){var c=De(a.m.f.b||"");ec(b.l,c)};
Ij.prototype.Oa=function(a,b,c){c.search(b.f,1)};function Jj(a,b){this.o=0;this.m=a;this.w=b;this.i=Q();this.l=Q("sbqs_a");this.i.appendChild(this.l);this.u=Q("sbqs_c");this.i.appendChild(this.u)}
A(Jj,Af);Jj.prototype.f=function(){return this.i};
function Kj(a,b,c,d){a.u.innerHTML=b;a.s=c;d&&!a.g&&(a.g=Wf(a.l),a.g.onclick=w(function(e){this.m.g.blur();Mg(this.m,this.s);this.w.search(this.s,9);return Vf(e)},a));
d?(a.g.innerHTML=d+" &raquo;",a.l.style.display="",a.l.setAttribute("aria-hidden","true")):a.g&&(a.l.style.display="none")}
;function Lj(){Bf.call(this,0)}
A(Lj,Bf);l=Lj.prototype;l.Z=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
l.J=function(a){this.g=a.get(118)};
l.K=function(a){this.f=a.xb?a.yb:""};
l.Ea=function(a){return new Jj(this.g,a)};
l.Pa=function(a,b){Kj(b,a.getHtml(),a.f,this.f)};
l.Oa=function(a,b,c){c.search(b.f,1)};function Mj(a){pj.call(this);M(this,149,new tf);this.set(347,new qj);this.set(133,new tj);M(this,151,new sj);this.set(570,new yj);this.set(134,new lg);this.set(189,new ng);M(this,156,new qg);M(this,152,new kg);M(this,152,new Ij);M(this,152,new Lj);this.set(173,new Cj);M(this,160,new Aj);this.set(157,new rg);M(this,156,new sg);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&M(this,156,new zj);var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&b.SBOX_REPORT_SUGGESTIONS&&(M(this,
153,new yf),M(this,152,new fg(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new tg(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),M(this,156,new xg))}
A(Mj,pj);function Nj(){return{eb:function(){return{clientName:"hp",requestIdentifier:"hp",Da:"google.com",oc:"",jb:"en",Wa:"",nb:"",videoId:"",rb:"",authuser:0,Cd:"",Ue:"",lc:null,pb:"",wb:!1,Yb:"",Na:"",connectionType:0,Se:null,sc:!1,Le:!1,Ib:!1,Gc:!0,Kc:10,ye:10,Fc:!0,ub:!0,se:!1,Nc:!1,zd:!1,Ad:!1,He:!1,kd:!0,Cc:!1,ld:500,gb:!1,cd:!0,De:!0,Oe:!1,Ka:!1,Ma:"",Ob:"//www.google.com/textinputassistant",Pb:"",Fd:7,Ae:!1,Be:!1,gd:!1,fd:!0,hd:!1,Gb:!1,Md:!1,Ld:!1,Ra:1,Kb:!0,Ga:!1,xb:!1,vb:!1,pollingInterval:10,
fb:!1,Jd:!0,da:document.body,jd:!0,pc:null,Ic:{},ue:{},Ke:0,Oc:!1,nd:!0,ka:!1,Mc:!1,Qd:!1,Pe:null,Hc:!1,Bd:null,Sd:null,Ya:!1,md:!0,wc:!1,Re:1,Mb:!1,searchText:"Search",yb:"I'm  Feeling Lucky",Pd:"",learnMoreText:"Learn more",Xb:"Remove",Wb:"This search was removed from your Web History",hintText:"",re:"Did you mean:",Ed:"",Ne:"",Xe:"Search by voice",We:'Listening for "Ok Google"',Ve:'Say "Ok Google"',ne:"Clear Search",wa:0,ud:0,ib:"",Qa:"",isRtl:!1,ta:"absolute",dd:!1,Fb:!1,Ub:null,ed:!0,Fa:[0,0,
0],Dc:null,Ud:null,sb:[0],mc:!0,qc:"",Vd:"",Td:"",ua:null,ab:"",Za:"",me:1,Xd:!1,zb:!1,Ie:0,Rd:!1,Ac:!1,te:!1,Hd:!0}}}}
;function Oj(a,b,c,d,e){var f=Ef?"-moz-":Cf?"-ms-":Ff?"-o-":Gf?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(m,n){if(b){if(c){for(var p=m.split(","),t=[],q=0,z;z=p[q++];)z=h.test(z)?z.replace(h,g+"$1"):g+" "+z,t.push(z);m=t.join(",")}k.push(m,"{",n,"}")}},
vc:function(){if(b&&k.length){b=!1;var m=P("style");m.setAttribute("type","text/css");(a||Se).appendChild(m);var n=k.join("");k=null;m.styleSheet?m.styleSheet.cssText=n:m.appendChild(document.createTextNode(n))}},
prefix:function(m,n){var p=m+(n||"");f&&(p+=n?m+f+n:f+m);return p}}}
;function Pj(a,b,c,d){this.g=a;this.L=b;this.F=c;this.G=d;this.l=-1;this.w=!1}
l=Pj.prototype;l.install=function(a){if(!this.w){a=Qj(a);0>this.l&&(this.l=Rj(a));var b=Sf(this.g),c=Sj(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.qc&&f.push(a.qc);f=Oj(a.pc,a.jd,a.Hc,this.l,f);this.s=a.ka;this.f=new qf(this.F,this.G,{Ua:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Ab:function(g){return b.getElementById(g)},
Bb:function(){return e.L},
cb:function(){return c},
getId:function(g){return g+e.l},
Cb:function(){return e.g}},f,this,a);
this.f.get(347);this.C=this.f.get(130);this.f.get(115);this.H=this.f.get(117);this.f.get(123);this.M=this.f.get(118);this.i=this.f.get(119);this.f.get(374);this.m=this.f.get(120);this.f.get(189);this.N=this.f.get(553);this.f.get(419);this.f.get(126);this.f.get(128);this.f.get(139);this.D=this.f.get(121);a=Yf(this.g);this.o=Xf(a);this.u=w(this.Kd,this);oh(a,"resize",this.u);this.w=!0}};
l.isActive=function(){return!!this.f&&this.f.isActive()};
function Tj(a,b){function c(d){a.D.search(a.M.f,12);return Uf(d)}
oh(b,"keyup",function(d){13!=d.keyCode&&32!=d.keyCode||c(d)});
oh(b,"click",c)}
l.focus=function(){this.i.focus()};
l.blur=function(){this.i.blur()};
l.isFocused=function(){return this.i.isFocused()};
l.getId=function(){return this.l};
l.search=function(a,b){this.D.search(a,b)};
l.ka=function(){return this.s||!!this.C&&this.C.ka()};
l.ob=function(a){this.N.ob(a)};
function Rj(a){a=Yf(a.pc||Se);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function Sj(a){if(a.g)for(a=a.g;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function Qj(a){a=hf(a);var b=a.Ma;b?a.Ma=b.toLowerCase():a.Ka=!1;a.Ga&&!a.xb&&(a.Ga=!1);If||(a.Ad=!1);return a}
l.Kd=function(){var a=Xf(Yf(this.g));if(a.tc!=this.o.tc||a.Hb!=this.o.Hb)this.o=a,R(this.H,8)};function Uj(){this.C=/\/(movie|show)s?($|[?#/])/i;this.D=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i;this.s="sbhcn";this.o="sbfcn";this.i="gsfi";this.m="gsfs";this.w=function(){return!0}}
A(Uj,of);l=Uj.prototype;l.search=function(a,b){this.w(xh(this.f.m,b,void 0))&&this.H.submit()};
l.redirect=function(a){this.F(this.ec(a))};
l.ec=function(a){var b=0<=a.indexOf("?")?"&":"?",c;(c=xh(this.f.m,void 0,void 0))||(c=xh(this.f.m,void 0));c=Xe(c);return a+b+c};
l.Lb=function(a){if(this.g||this.l){if(22<this.u){var b=(this.u-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.G?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}this.g?(a.addRule("."+this.m,"font-size:1.6rem;color:#222"),a.addRule(".sbqs_c b","font-weight:500"),a.addRule(".sbdd_c",
"z-index:2010"),a.addRule(".sbdd_a","z-index:2011"),a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;"),a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)")):(a.addRule("."+this.i,"font-size:16px;height:100% !important"),a.addRule(".sbib_b ."+this.i,"position:relative !important"),a.addRule("."+this.m,"font-size:16px"),a.addRule("a.sbsb_i","font-size:12px;color:#03c"),a.addRule(".sbdd_c","z-index:2000000006"),a.addRule(".sbdd_a","z-index:2000000007"),this.l||(a.addRule(".sbsb_c,.sbsb_c td",
"line-height:20px"),a.addRule(".sbsb_c","padding:0 6px"),a.addRule(".sbsb_d td","background:#eee"),a.addRule(".sbsb_e","margin:2px 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b","padding:2px 6px"),a.addRule(".gsok_a","padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule("."+this.s,"border:1px solid #b9b9b9;border-top-color:#a0a0a0"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);")),a.addRule("."+this.o,"border:1px solid #1c62b9;"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);")+
"outline:none;")))};
l.install=function(a,b,c,d,e,f,g){this.H=a;this.F=f;g&&(this.w=g);f=Nj().eb();f.clientName="youtube";f.requestIdentifier="youtube";f.Wa="yt";f.jb=d.REQUEST_LANGUAGE;f.oc=d.REQUEST_DOMAIN;f.cd=!1;f.Ra=0;f.Kb=!1;f.Ga=!1;f.Mb=!1;f.fb=!0;f.ib=this.i;f.Qa=this.m;f.ab=this.s;f.Za=this.o;f.Ge=!0;g=window.location.href;g=this.C.test(g)||this.D.test(g);f.Ib=g;f.Ka=d.HAS_ON_SCREEN_KEYBOARD;f.Ma=d.REQUEST_LANGUAGE;f.Ob="//www.gstatic.com/inputtools/images";f.Pb="youtube";f.Ya=!0;f.ta="fixed";this.g=d.IS_POLYMER;
this.l=d.IS_FUSION;this.G=d.SEARCHBOX_REPORTING;this.u=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;d.PQ&&(f.nb=d.PQ);f.rb=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.Wb=e.SUGGESTION_DISMISSED_LABEL;f.Xb=e.SUGGESTION_DISMISS_LABEL;f.mc=!d.HIDE_REMOVE_LINK;f.Qe=Ve([0,33,35]);this.g?(f.ua="search-container",f.wa=24):this.l?(f.ua="masthead-search",f.wa=24):(f.ua="masthead-search-terms",f.wa=30);ob()||(f.Fb=!0);f.Ub=f.ua;e=-3;D("Windows")&&pb()&&"8.0"==sb()&&(e=-5);this.l?e=17:this.g&&(e=16);f.Fa=[e,0,0];e=[0];
pb()&&"8.0"==sb()&&(e[0]=-1);f.sb=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.vb=!0);if(e=d.SUGG_EXP_ID)f.pb=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.f){a=this.f;b=f;c=Yf(a.g);d=a.u;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);sf(a.f);b=Qj(b);a.s=b.ka;a=a.f;sf(a);for(c=0;d=a.f[c++];)d.K(b);a.l=!0}else d=new Mj(d),this.f=
new Pj(b,a,this,d),this.f.install(f),c&&(Tj(this.f,c),c.onclick=null)};function Vj(){this.l=[];this.f=-1}
Vj.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.l[a]!=b&&(this.l[a]=b,this.f=-1)};
Vj.prototype.get=function(a){return!!this.l[a]};
function Wj(a){-1==a.f&&(a.f=La(a.l,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Xj(){this.l=-1}
;function Yj(){this.l=64;this.f=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.l;++a)this.i[a]=0;this.m=this.g=0;this.reset()}
A(Yj,Xj);Yj.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.m=this.g=0};
function Zj(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Yj.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.l,d=0,e=this.o,f=this.g;d<b;){if(0==f)for(;d<=c;)Zj(this,a,d),d+=this.l;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.l){Zj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.l){Zj(this,e);f=0;break}}this.g=f;this.m+=b}};
Yj.prototype.digest=function(){var a=[],b=8*this.m;56>this.g?this.update(this.i,56-this.g):this.update(this.i,this.l-(this.g-56));for(var c=this.l-1;56<=c;c--)this.o[c]=b&255,b/=256;Zj(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function ak(a,b){this.g={};this.f=[];this.i=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ak)for(c=bk(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function bk(a){ck(a);return a.f.concat()}
l=ak.prototype;l.equals=function(a,b){if(this===a)return!0;if(this.l!=a.l)return!1;var c=b||dk;ck(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function dk(a,b){return a===b}
l.isEmpty=function(){return 0==this.l};
l.clear=function(){this.g={};this.i=this.l=this.f.length=0};
l.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.l--,this.i++,this.f.length>2*this.l&&ck(this),!0):!1};
function ck(a){if(a.l!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.l!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
l.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
l.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.l++,this.f.push(a),this.i++);this.g[a]=b};
l.forEach=function(a,b){for(var c=bk(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new ak(this)};
l.ga=function(a){ck(this);var b=0,c=this.i,d=this,e=new hd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw gd;var f=d.f[b++];return a?f:d.g[f]};
return e};function ek(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function fk(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function gk(a){var b=[];hk(new ik,a,b);return b.join("")}
function ik(){}
function hk(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(v(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),hk(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),jk(d,c),c.push(":"),hk(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":jk(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var kk={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},lk=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function jk(a,b){b.push('"',a.replace(lk,function(c){var d=kk[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),kk[c]=d);return d}),'"')}
;function V(a){ki.call(this);this.s=1;this.i=[];this.o=0;this.f=[];this.l={};this.u=!!a}
A(V,ki);l=V.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.s=e+3;d.push(e);return e};
l.qb=function(a){var b=this.f[a];if(b){var c=this.l[b];0!=this.o?(this.i.push(a),this.f[a+1]=xa):(c&&Ma(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
l.Id=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];mk(this.f[g+1],this.f[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.qb(c)}}return 0!=e}return!1};
function mk(a,b,c){Xi(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(B(b,this.qb,this),delete this.l[a])}else this.f.length=0,this.l={}};
l.ja=function(){V.ea.ja.call(this);this.clear();this.i.length=0};function nk(a){this.f=a}
nk.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,gk(b))};
nk.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
nk.prototype.remove=function(a){this.f.remove(a)};function ok(a){this.f=a}
A(ok,nk);function pk(a){this.data=a}
function qk(a){return void 0===a||a instanceof pk?a:new pk(a)}
ok.prototype.set=function(a,b){ok.ea.set.call(this,a,qk(b))};
ok.prototype.l=function(a){a=ok.ea.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ok.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rk(a){this.f=a}
A(rk,ok);rk.prototype.set=function(a,b,c){if(b=qk(b)){if(c){if(c<x()){rk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}rk.ea.set.call(this,a,b)};
rk.prototype.l=function(a){var b=rk.ea.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<x()||c&&c>x())rk.prototype.remove.call(this,a);else return b}};function sk(){}
;function tk(){}
A(tk,sk);tk.prototype.clear=function(){var a=kd(this.ga(!0)),b=this;B(a,function(c){b.remove(c)})};function uk(a){this.f=a}
A(uk,tk);l=uk.prototype;l.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.f.removeItem(a)};
l.ga=function(a){var b=0,c=this.f,d=new hd;d.next=function(){if(b>=c.length)throw gd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
l.clear=function(){this.f.clear()};
l.key=function(a){return this.f.key(a)};function vk(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(vk,uk);function wk(a,b){this.l=a;this.f=null;if(I&&!(9<=Number(xc))){xk||(xk=new ak);this.f=xk.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),xk.set(a,this.f));try{this.f.load(this.l)}catch(c){this.f=null}}}
A(wk,tk);var yk={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xk=null;function zk(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yk[b]})}
l=wk.prototype;l.isAvailable=function(){return!!this.f};
l.set=function(a,b){this.f.setAttribute(zk(a),b);Ak(this)};
l.get=function(a){a=this.f.getAttribute(zk(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.f.removeAttribute(zk(a));Ak(this)};
l.ga=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new hd;d.next=function(){if(b>=c.length)throw gd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
l.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ak(this)};
function Ak(a){try{a.f.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bk(a,b){this.l=a;this.f=b+"::"}
A(Bk,tk);Bk.prototype.set=function(a,b){this.l.set(this.f+a,b)};
Bk.prototype.get=function(a){return this.l.get(this.f+a)};
Bk.prototype.remove=function(a){this.l.remove(this.f+a)};
Bk.prototype.ga=function(a){var b=this.l.ga(!0),c=this,d=new hd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.l.get(e)};
return d};var Ck=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",Ck);function Dk(a){var b=arguments;1<b.length?Ck[b[0]]=b[1]:1===b.length&&Object.assign(Ck,b[0])}
function W(a,b){return a in Ck?Ck[a]:b}
function X(a){return W(a,void 0)}
;var Ek={};function Fk(){return Ek.clicktracking||(Ek.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Gk(){}
Gk.prototype.f=function(a,b){return Hk(a,1,b)};var Ik=[];function Jk(a){Ik.forEach(function(b){return b(a)})}
function Kk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Lk(b),Jk(b)}}:a}
function Lk(a){var b=u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=W("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Dk("ERRORS",b))}
function Mk(a){var b=u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=W("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Dk("ERRORS",b))}
;function Nk(a,b){Ba(a)&&(a=Kk(a));return window.setTimeout(a,b)}
;function Ok(){}
ka(Ok,Gk);function Hk(a,b,c){isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Nk(a,c||0)}
Ok.prototype.start=function(){var a=u("yt.scheduler.instance.start");a&&a()};
Ok.f=void 0;Ok.eb=function(){return Ok.f?Ok.f:Ok.f=new Ok};
var Pk=Ok.eb();function Y(a){a=Qk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Rk(a,b){var c=Qk(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Qk(a){var b=W("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:W("EXPERIMENT_FLAGS",{})[a]}
;var Sk=0;y("ytDomDomGetNextId",u("ytDomDomGetNextId")||function(){return++Sk});y("ytEventsEventsListeners",u("ytEventsEventsListeners")||{});y("ytEventsEventsCounter",u("ytEventsEventsCounter")||{count:0});var Tk=u("ytPubsubPubsubInstance")||new V;V.prototype.subscribe=V.prototype.subscribe;V.prototype.unsubscribeByKey=V.prototype.qb;V.prototype.publish=V.prototype.Id;V.prototype.clear=V.prototype.clear;y("ytPubsubPubsubInstance",Tk);y("ytPubsubPubsubSubscribedKeys",u("ytPubsubPubsubSubscribedKeys")||{});y("ytPubsubPubsubTopicToKeys",u("ytPubsubPubsubTopicToKeys")||{});y("ytPubsubPubsubIsSynchronous",u("ytPubsubPubsubIsSynchronous")||{});var Uk=window,Vk=Uk.ytcsi&&Uk.ytcsi.now?Uk.ytcsi.now:Uk.performance&&Uk.performance.timing&&Uk.performance.now?function(){return Uk.performance.timing.navigationStart+Uk.performance.now()}:function(){return(new Date).getTime()};var Wk=Rk("initial_gel_batch_timeout",1E3),Xk=Math.pow(2,16)-1,Yk=null,Zk=0,$k={log_event:"events",log_interaction:"interactions"},al=Object.create(null);al.log_event="GENERIC_EVENT_LOGGING";al.log_interaction="INTERACTION_LOGGING";var bl=new Set(["log_event"]),cl={},dl=0,el=0,fl=0,gl=!0,Z=u("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",Z);var hl=u("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",hl);
var il=u("ytLoggingTransportDispatchedStats_")||{};y("ytLoggingTransportDispatchedStats_",il);y("ytytLoggingTransportCapturedTime_",u("ytLoggingTransportCapturedTime_")||{});function jl(){window.clearTimeout(dl);window.clearTimeout(el);el=0;if(!jb(Z)){for(var a in Z){var b=cl[a];b&&b.isReady()&&(kl(a,b),delete Z[a],gl=!1)}jb(Z)||ll()}}
function ll(){Y("web_gel_timeout_cap")&&!el&&(el=Nk(jl,6E4));window.clearTimeout(dl);var a=W("LOGGING_BATCH_TIMEOUT",Rk("web_gel_debounce_ms",1E4));Y("shorten_initial_gel_batch_timeout")&&gl&&(a=Wk);dl=Nk(jl,a)}
function ml(a,b){b=void 0===b?"":b;Z[a]=Z[a]||{};Z[a][b]=Z[a][b]||[];return Z[a][b]}
function kl(a,b){var c=$k[a],d=il[a]||{};il[a]=d;var e=Math.round(Vk());for(p in Z[a]){var f=lb,g=b.f||nl();g={client:{hl:g.rd,gl:g.qd,clientName:g.pd,clientVersion:g.innertubeContextClientVersion,configInfo:g.od}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));h=W("EXPERIMENTS_TOKEN","");""!==h&&(g.client.experimentsToken=h);var k=h=void 0,m=[],n=W("EXPERIMENTS_FORCED_FLAGS",{});for(k in n)m.push({key:k,value:String(n[k])});k=W("EXPERIMENT_FLAGS",{});for(h in k)h.startsWith("force_")&&
void 0===n[h]&&m.push({key:h,value:String(k[h])});h=m;0<h.length&&(g.request={internalExperimentFlags:h});W("DELEGATED_SESSION_ID")&&!Y("pageid_as_header_web")&&(g.user={onBehalfOfUser:W("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=ml(a,p);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=hl[p])a:{m=p;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:m,scope:h}]}delete hl[p];f.requestTimeMs=e;Y("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(g=X("EVENT_ID"))h=W("BATCH_CLIENT_COUNTER",void 0)||0,!h&&Y("web_client_counter_random_seed")&&(h=Math.floor(Math.random()*Xk/2)),h++,h>Xk&&(h=1),Dk("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,Yk&&Zk&&Y("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Yk,roundtripMs:Zk}),
Yk=g,Zk=0;ol(b,a,f,{retry:bl.has(a),onSuccess:w(pl,this,Vk())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var p=d.diffCount||0;d.averageTimeBetweenDispatchesMs=p?(d.averageTimeBetweenDispatchesMs*p+c)/(p+1):c;d.diffCount=p+1}d.previousDispatchMs=e}
function pl(a){Zk=Math.round(Vk()-a)}
;var ql=u("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",ql);function rl(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;v(c)?f=c:f=[c];B(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function sl(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=hc(e[0]||""),g=hc(e[1]||"");f in b?v(b[f])?Pa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};Lk(h)}}}return b}
function tl(a,b){return ul(a,b||{},!0)}
function ul(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=sl(e[1]||"");for(var f in b)if(c||!ib(e,f))e[f]=b[f];return Kc(a,e)+d}
;function vl(a){var b=wl;a=void 0===a?u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(xl(b),yl(b));b.ca_type="image";a&&(b.bid=a);return b}
function xl(a){var b={};b.dt=Rc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.l.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?J:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(b.u_h=J.screen.height,b.u_w=J.screen.width,b.u_ah=J.screen.availHeight,b.u_aw=J.screen.availWidth,b.u_cd=J.screen.colorDepth);
J.navigator&&J.navigator.plugins&&(b.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(b.u_nmime=J.navigator.mimeTypes.length);return b}
function yl(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,m="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new Dc(m.clientWidth,m.clientHeight)).round()}catch(p){n=new Dc(-12245933,-12245933)}k=n;n={};m=new Vj;r.SVGElement&&
r.document.createElementNS&&m.set(0);c=Pc();c["allow-top-navigation-by-user-activation"]&&m.set(1);c["allow-popups-to-escape-sandbox"]&&m.set(2);r.crypto&&r.crypto.subtle&&m.set(3);r.TextDecoder&&r.TextEncoder&&m.set(4);m=Wj(m);n.bc=m;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.l;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!J.WebGLRenderingContext,n}
var wl=new function(){var a=window.document;this.f=window;this.l=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return rl(vl(a))});x();var zl=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Al(){if(!zl)return null;var a=zl();return"open"in a?a:null}
;var Bl={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Cl="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Dl=!1;
function El(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=Hc(K(3,a));d&&e?(d=c,c=a.match(Gc),d=d.match(Gc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Hc(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;d=Y("web_ajax_ignore_global_headers_if_set");for(var f in Bl)e=W(Bl[f]),!e||!c&&!Fl(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Fl(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Fl(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Fl(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=rl(vl(void 0));return b}
function Gl(a){var b=window.location.search,c=Hc(K(3,a)),d=Hc(K(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=sl(b),f={};B(Cl,function(g){e[g]&&(f[g]=e[g])});
return ul(a,f||{},!1)}
function Fl(a,b){var c=W("CORS_HEADER_WHITELIST")||{},d=Hc(K(3,a));return d?(c=c[d])?0<=Ia(c,b):!1:!0}
function Hl(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Il(a,b);var d=Jl(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(m){m=m||{};var n=b.context||r;h?b.onSuccess&&b.onSuccess.call(n,m,g):b.onError&&b.onError.call(n,m,g);b.lb&&b.lb.call(n,m,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Dd&&0<b.timeout&&(f=Nk(function(){e||(e=!0,window.clearTimeout(f))},b.timeout))}else Kl(a,b)}
function Kl(a,b){var c=b.format||"JSON";a=Il(a,b);var d=Jl(a,b),e=!1,f,g=Ll(a,function(h){if(!e){e=!0;f&&window.clearTimeout(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,n=400<=h.status&&500>h.status,p=500<=h.status&&600>h.status;if(k||n||p)m=Ml(c,h,b.oe);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(m&&m.return_code,10);break a;case "RAW":k=!0;break a}k=!!m}m=m||
{};n=b.context||r;k?b.onSuccess&&b.onSuccess.call(n,h,m):b.onError&&b.onError.call(n,h,m);b.lb&&b.lb.call(n,h,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Qb&&0<b.timeout&&(f=Nk(function(){e||(e=!0,g.abort(),window.clearTimeout(f))},b.timeout))}
function Il(a,b){b.Ee&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=X("XSRF_FIELD_NAME"),d=b.Te;d&&(d[c]&&delete d[c],a=tl(a,d));return a}
function Jl(a,b){var c=X("XSRF_FIELD_NAME"),d=X("XSRF_TOKEN"),e=b.postBody||"",f=b.xa,g=X("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.xe||Hc(K(3,a))&&!b.withCredentials&&Hc(K(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.xa&&b.xa[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=sl(e),nb(e,f),e=b.Sb&&"JSON"==b.Sb?JSON.stringify(e):Jc(e));f=e||f&&!jb(f);!Dl&&f&&"POST"!=b.method&&(Dl=!0,Lk(Error("AJAX request with postData should use POST")));
return e}
function Ml(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Nl(b):null)d={},B(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ol(e)})}c&&Pl(d);
return d}
function Pl(a){if(Ca(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=G(a[b],null):Pl(a[b])}}
function Nl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ol(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ll(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Kk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Al();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Y("debug_forward_web_query_parameters")&&(a=Gl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=El(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Ql(){return"INNERTUBE_API_KEY"in Ck&&"INNERTUBE_API_VERSION"in Ck}
function nl(){return{innertubeApiKey:X("INNERTUBE_API_KEY"),innertubeApiVersion:X("INNERTUBE_API_VERSION"),od:W("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),pd:W("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:X("INNERTUBE_CONTEXT_CLIENT_VERSION"),rd:X("INNERTUBE_CONTEXT_HL"),qd:X("INNERTUBE_CONTEXT_GL"),sd:X("INNERTUBE_HOST_OVERRIDE")||"",td:!!W("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Rl(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||W("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.le||W("AUTHORIZATION"))||(a?b="Bearer "+u("gapi.auth.getToken")().ke:b=Wc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=W("SESSION_INDEX",0),Y("pageid_as_header_web")&&(d["X-Goog-PageId"]=W("DELEGATED_SESSION_ID")));return d}
function Sl(a){a=Object.assign({},a);delete a.Authorization;var b=Wc();if(b){var c=new Yj;c.update(X("INNERTUBE_API_KEY"));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);if(!zc){zc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));yc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===zc[k]&&(zc[k]=h)}}}c=yc[c];d=[];for(e=0;e<b.length;e+=3){var m=b[e],n=(f=e+1<b.length)?b[e+1]:0;k=(g=
e+2<b.length)?b[e+2]:0;h=m>>2;m=(m&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[m],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Tl(a,b,c,d){Bc.set(""+a,b,{Jb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Ul(){var a=new vk;(a=a.isAvailable()?new Bk(a,"yt.innertube"):null)||(a=new wk("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new rk(a):null;this.l=document.domain||window.location.hostname}
Ul.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,x()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(gk(b))}catch(f){return}else e=escape(b);Tl(a,e,c,this.l)};
Ul.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Bc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ul.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.l;Bc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Vl=new Ul;function Wl(a,b,c,d){if(d)return null;d=Vl.get("nextId",!0)||1;var e=Vl.get("requests",!0)||{};e[d]={method:a,request:b,authState:Sl(c),requestTime:Math.round(Vk())};Vl.set("nextId",d+1,86400,!0);Vl.set("requests",e,86400,!0);return d}
function Xl(a){var b=Vl.get("requests",!0)||{};delete b[a];Vl.set("requests",b,86400,!0)}
function Yl(a){var b=Vl.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Vk())-d.requestTime)){var e=d.authState;var f=Sl(Rl(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Vk())),ol(a,d.method,e,{}));delete b[c]}}Vl.set("requests",b,86400,!0)}}
;function Zl(a){var b=this;this.f=null;a?this.f=a:Y("delay_gel_until_config_ready")?Ql()&&(this.f=nl()):this.f=nl();Hk(function(){Yl(b)},0,5E3)}
Zl.prototype.isReady=function(){!this.f&&Ql()&&(this.f=nl());return!!this.f};
function ol(a,b,c,d){!W("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Mk(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",xa:c,Sb:"JSON",Qb:function(){},
Dd:d.Qb,onSuccess:function(t,q){if(d.onSuccess)d.onSuccess(q)},
Nb:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,q){if(d.onError)d.onError(q)},
Je:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.sd;g&&(f=g);g=a.f.td||!1;var h=Rl(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=tl(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),m;if(d.retry&&Y("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Wl(b,c,h,g))){var n=e.onSuccess,p=e.Nb;e.onSuccess=function(t,q){Xl(m);n(t,q)};
c.Nb=function(t,q){Xl(m);p(t,q)}}try{Y("use_fetch_for_op_xhr")?Hl(k,e):(e.method="POST",e.xa||(e.xa={}),Kl(k,e))}catch(t){if("InvalidAccessError"==t)m&&(Xl(m),m=0),Mk(Error("An extension is blocking network request."));
else throw t;}m&&Hk(function(){Yl(a)},0,5E3)}
;var $l=x().toString();var am;
if(!(am=u("ytLoggingTimeDocumentNonce_"))){var bm;a:{if(window.crypto&&window.crypto.getRandomValues)try{var cm=Array(16),dm=new Uint8Array(16);window.crypto.getRandomValues(dm);for(var em=0;em<cm.length;em++)cm[em]=dm[em];bm=cm;break a}catch(a){}for(var fm=Array(16),gm=0;16>gm;gm++){for(var hm=x(),im=0;im<hm%23;im++)fm[gm]=Math.random();fm[gm]=Math.floor(256*Math.random())}if($l)for(var jm=1,km=0;km<$l.length;km++)fm[jm%16]=fm[jm%16]^fm[(jm-1)%16]/4^$l.charCodeAt(km),jm++;bm=fm}for(var lm=bm,mm=
[],nm=0;nm<lm.length;nm++)mm.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(lm[nm]&63));am=mm.join("")}var om=am;y("ytLoggingTimeDocumentNonce_",om);function pm(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function qm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
y("yt_logging_screen.getRootVeType",function(a){return W(qm(void 0===a?0:a),void 0)});
function rm(){var a=W("csn-to-ctt-auth-info");a||(a={},Dk("csn-to-ctt-auth-info",a));return a}
function sm(a){a=void 0===a?0:a;var b=W(pm(a));b||0!=a||(Y("kevlar_client_side_screens")||Y("c3_client_side_screens")?b="UNDEFINED_CSN":b=W("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",sm);function tm(a,b,c){var d=rm();(c=sm(c))&&delete d[c];b&&(d[a]=b)}
y("yt_logging_screen.getCttAuthInfo",function(a){return rm()[a]});
y("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==W(pm(c))||b!==W(qm(c)))tm(a,d,c),Dk(pm(c),a),Dk(qm(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:om,clientScreenNonce:a};var f=void 0===f?{}:f;var g={};g.eventTimeMs=Math.round(f.timestamp||Vk());g.foregroundHeartbeatScreenAssociated=e;e=String;if(f.timestamp)var h=-1;else h=u("_lact",window),h=null==h?-1:Math.max(x()-h,0);g.context={lastActivityMs:e(h)};Y("log_sequence_info_on_gel_web")&&
f.kc&&(e=g.context,h=f.kc,ql[h]=h in ql?ql[h]+1:0,e.sequence={index:ql[h],groupKey:h},f.we&&delete ql[f.kc]);(f=f.qe)?(e={},f.videoId?e.videoId=f.videoId:f.playlistId&&(e.playlistId=f.playlistId),hl[f.token]=e,f=ml("log_event",f.token)):f=ml("log_event");f.push(g);Zl&&(cl.log_event=new Zl);g=Rk("web_logging_max_batch")||100;e=Vk();f.length>=g?jl():10<=e-fl&&(ll(),fl=e)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function um(a,b,c){for(var d=0,e=0;e<a.length;++e)d=31*d+a.charCodeAt(e)>>>0;a="ST-"+d.toString(36);b=b?Jc(b):"";Tl(a,b,c||5)}
;function vm(a,b,c,d,e){if(a&&e){var f=W("SBOX_SETTINGS"),g=W("SBOX_LABELS");f&&g&&(a=u("searchbox.yt.install")(a,b,c,f,g,wm,d))&&e(a,100)}}
function xm(a,b){var c=W("EVENT_ID");if(c){b.ei=c;b.feature="web-masthead-search";c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Fk()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";var d=a;c=b;var e=void 0===e?!0:e;var f=W("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Hc(K(3,window.location.href));g&&f.push(g);g=Hc(K(3,d));if(0<=Ia(f,g)||!g&&0==d.lastIndexOf("/",0))if(Y("autoescape_tempdata_url")&&(f=document.createElement("a"),fc(f,d),d=f.href),d){g=d.match(Gc);d=g[5];f=g[6];
g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!c.csn&&(c.itct||c.ved)&&(c=Object.assign({csn:sm()},c)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&um(d,c,k)}else um(d,c)}}}
function wm(a,b){xm(a,b?{feature:b}:{});var c=u("yt.window.navigate");try{c(a)}catch(g){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;c=f.location;d=Kc(a,d)+e;d=d instanceof E?d:Hb(d);c.href=Eb(d)}}
function ym(a){for(var b=document.getElementById("masthead-search"),c=[],d=b.elements,e,f=0;e=d.item(f);f++)if(e.form==b&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=fk(e);if(null!=e)for(var h,k=0;h=e[k];k++)ek(c,g,h);break;default:h=fk(e),null!=h&&ek(c,g,h)}}d=b.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==b&&"image"==e.type.toLowerCase()&&(g=e.name,ek(c,g,e.value),ek(c,
g+".x","0"),ek(c,g+".y","0"));c=c.join("&").replace(/%20/g,"+");b=b.action+"?"+c;xm(b,a);a=!!W("SPF_SEARCH_BOX");if(!u("ytspf.enabled")||!a)return!0;a=u("yt.window.navigate");try{a(b)}catch(m){return!0}return!1}
;y("searchbox.yt.install",function(a,b,c,d,e,f,g){xf||(xf=new Uj);xf.install(a,b,c,d,e,f,g)});
y("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");vm(a,a.search_query,document.getElementById("search-btn"),ym,window.setTimeout)});
y("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){vm(a,b,c,d,Pk.f)});}).call(this);

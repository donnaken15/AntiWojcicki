(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ca(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function ka(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}
var la="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ma(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var na=ma(this);function oa(a,b){if(b){for(var c=na,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&la(c,d,{configurable:!0,writable:!0,value:f})}}
function pa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
oa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
oa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function qa(){qa=function(){};
na.Symbol||(na.Symbol=ra)}
function sa(a,b){this.f=a;la(this,"description",{configurable:!0,writable:!0,value:b})}
sa.prototype.toString=function(){return this.f};
var ra=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new sa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ta(){qa();var a=na.Symbol.iterator;a||(a=na.Symbol.iterator=na.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&la(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ua(aa(this))}});
ta=function(){}}
function ua(a){ta();a={next:a};a[na.Symbol.iterator]=function(){return this};
return a}
function va(a,b){ta();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
oa("Array.prototype.keys",function(a){return a?a:function(){return va(this,function(b){return b})}});
oa("Array.prototype.values",function(a){return a?a:function(){return va(this,function(b,c){return c})}});
function wa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ya="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)wa(d,e)&&(a[e]=d[e])}return a};
oa("Object.assign",function(a){return a||ya});
var za=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=da(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
oa("Reflect.construct",function(){return za});
oa("WeakMap",function(a){function b(l){this.f=(k+=Math.random()+1).toString();if(l){l=ba(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!wa(l,g)){var m=new c;la(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(p){if(p instanceof c)return p;e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),p=new a([[l,2],[m,3]]);if(2!=p.get(l)||3!=p.get(m))return!1;p["delete"](l);p.set(m,4);return!p.has(l)&&4==p.get(m)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!wa(l,g))throw Error("WeakMap key fail: "+l);l[g][this.f]=m;return this};
b.prototype.get=function(l){return d(l)&&wa(l,g)?l[g][this.f]:void 0};
b.prototype.has=function(l){return d(l)&&wa(l,g)&&wa(l[g],this.f)};
b.prototype["delete"]=function(l){return d(l)&&wa(l,g)&&wa(l[g],this.f)?delete l[g][this.f]:!1};
return b});
oa("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,l){var m=k.f;return ua(function(){if(m){for(;m.head!=k.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(k,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var p=k.g[m];if(p&&wa(k.g,m))for(var q=0;q<p.length;q++){var x=p[q];if(l!==l&&x.key!==x.key||l===x.key)return{id:m,list:p,index:q,V:x}}return{id:m,list:p,index:-1,V:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),l=new a(ba([[k,"s"]]));if("s"!=l.get(k)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),p=m.next();if(p.done||p.value[0]!=k||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(q){return!1}}())return a;
ta();var f=new WeakMap;e.prototype.set=function(k,l){k=0===k?0:k;var m=d(this,k);m.list||(m.list=this.g[m.id]=[]);m.V?m.V.value=l:(m.V={next:this.f,previous:this.f.previous,head:this.f,key:k,value:l},m.list.push(m.V),this.f.previous.next=m.V,this.f.previous=m.V,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.V&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.V.previous.next=k.V.next,k.V.next.previous=k.V.previous,k.V.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).V};
e.prototype.get=function(k){return(k=d(this,k).V)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,l){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,k.call(l,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
oa("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ta();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
oa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
oa("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var k=this.i();try{g(k.resolve,k.reject)}catch(l){k.reject(l)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.h(function(){k.j()})}this.f.push(g)};
var e=na.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var l=g[k];g[k]=null;try{l()}catch(m){this.i(m)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(m){return function(p){l||(l=!0,m.call(k,p))}}
var k=this,l=!1;return{resolve:g(this.A),reject:g(this.j)}};
b.prototype.A=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.F(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.u(g):this.l(g)}};
b.prototype.u=function(g){var k=void 0;try{k=g.then}catch(l){this.j(l);return}"function"==typeof k?this.J(k,g):this.l(g)};
b.prototype.j=function(g){this.C(2,g)};
b.prototype.l=function(g){this.C(1,g)};
b.prototype.C=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.h=k;this.G()};
b.prototype.G=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.F=function(g){var k=this.i();g.tb(k.resolve,k.reject)};
b.prototype.J=function(g,k){var l=this.i();try{g.call(k,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,k){function l(x,r){return"function"==typeof x?function(R){try{m(x(R))}catch(xa){p(xa)}}:r}
var m,p,q=new b(function(x,r){m=x;p=r});
this.tb(l(g,m),l(k,p));return q};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.tb=function(g,k){function l(){switch(m.g){case 1:g(m.h);break;case 2:k(m.h);break;default:throw Error("Unexpected state: "+m.g);}}
var m=this;null==this.f?f.g(l):this.f.push(l)};
b.resolve=d;b.reject=function(g){return new b(function(k,l){l(g)})};
b.race=function(g){return new b(function(k,l){for(var m=ba(g),p=m.next();!p.done;p=m.next())d(p.value).tb(k,l)})};
b.all=function(g){var k=ba(g),l=k.next();return l.done?d([]):new b(function(m,p){function q(R){return function(xa){x[R]=xa;r--;0==r&&m(x)}}
var x=[],r=0;do x.push(void 0),r++,d(l.value).tb(q(x.length-1),p),l=k.next();while(!l.done)})};
return b});
oa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
var Aa=Aa||{},n=this||self,Ba=/^[\w+/_-]+[=]{0,2}$/,Ca=null;function t(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function u(){}
function Da(a){a.W=void 0;a.getInstance=function(){return a.W?a.W:a.W=new a}}
function Ea(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Fa(a){return"array"==Ea(a)}
function Ga(a){var b=Ea(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ha(a){return"function"==Ea(a)}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=Ma:v=Na;return v.apply(null,arguments)}
function w(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var y=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function A(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Oa(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var Pa=Oa("loadCastFramework")||Oa("loadCastApplicationFramework");function Qa(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Ra=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function Sa(a){a.length?Ta(a.shift(),function(){Sa(a)}):Ua()}
function Va(a){return"chrome-extension://"+a+"/cast_sender.js"}
function Ta(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Ua(){var a=Qa();a&&a(!1,"No cast extension found")}
function Wa(){if(Pa){var a=2,b=Qa(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Ta("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Ua,c)}}
function Xa(){Wa();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);Sa(["//www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//www.gstatic.com/eureka/clank/cast_sender.js"])}
;var Ya;var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},$a=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ab=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===
typeof a?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},bb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},cb=Array.prototype.reduce?function(a,b,c,d){d&&(b=v(b,d));
return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
B(a,function(f,g){e=b.call(d,e,f,g,a)});
return e},db=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},eb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function fb(a,b,c){b=gb(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function gb(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function hb(a,b){return 0<=Za(a,b)}
function ib(a,b){hb(a,b)||a.push(b)}
function jb(a,b){var c=Za(a,b),d;(d=0<=c)&&kb(a,c);return d}
function kb(a,b){Array.prototype.splice.call(a,b,1)}
function lb(a,b){var c=gb(a,b,void 0);0<=c&&kb(a,c)}
function mb(a){return Array.prototype.concat.apply([],arguments)}
function nb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ob(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function pb(a,b,c,d){Array.prototype.splice.apply(a,qb(arguments,1))}
function qb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function rb(a,b){return a>b?1:a<b?-1:0}
function sb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Fa(d))for(var e=0;e<d.length;e+=8192)for(var f=sb.apply(null,qb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ub(a,b){if(b)a=a.replace(vb,"&amp;").replace(wb,"&lt;").replace(xb,"&gt;").replace(yb,"&quot;").replace(zb,"&#39;").replace(Ab,"&#0;");else{if(!Bb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;"))}return a}
var vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,Bb=/[\x00&<>"']/;
function Cb(a,b){for(var c=0,d=tb(String(a)).split("."),e=tb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Db(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Db(0==k[2].length,0==l[2].length)||Db(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Db(a,b){return a<b?-1:a>b?1:0}
;var Eb;a:{var Fb=n.navigator;if(Fb){var Gb=Fb.userAgent;if(Gb){Eb=Gb;break a}}Eb=""}function C(a){return-1!=Eb.indexOf(a)}
;function Hb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ib(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function Jb(a){var b=0,c;for(c in a)b++;return b}
function Kb(a,b){a:{for(c in a)if(a[c]==b){var c=!0;break a}c=!1}return c}
function Lb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Mb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Nb(a){var b=Ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Pb(a){for(var b in a)return!1;return!0}
function Qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Tb(a){var b=Ea(a);if("object"==b||"array"==b){if(Ha(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Tb(a[c]);return b}return a}
var Ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ub.length;f++)c=Ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Wb(a){var b=arguments.length;if(1==b&&Fa(arguments[0]))return Wb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;function Xb(){return C("Firefox")||C("FxiOS")}
function Yb(){return C("Safari")&&!(Zb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Xb()||C("Silk")||C("Android"))}
function Zb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
function $b(){return C("Android")&&!(Zb()||Xb()||C("Opera")||C("Silk"))}
;function ac(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}}
function bc(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function cc(a,b){this.f=a===dc&&b||"";this.g=ec}
cc.prototype.Ka=!0;cc.prototype.Aa=function(){return this.f};
function fc(a){return a instanceof cc&&a.constructor===cc&&a.g===ec?a.f:"type_error:Const"}
var ec={},dc={},gc=new cc(dc,"");function hc(a,b){this.g=a===ic&&b||"";this.h=jc}
hc.prototype.Ka=!0;hc.prototype.Aa=function(){return this.g.toString()};
hc.prototype.Qb=!0;hc.prototype.f=function(){return 1};
function kc(a){if(a instanceof hc&&a.constructor===hc&&a.h===jc)return a.g;Ea(a);return"type_error:TrustedResourceUrl"}
var jc={},ic={};function lc(a,b){this.g=a===mc&&b||"";this.h=nc}
lc.prototype.Ka=!0;lc.prototype.Aa=function(){return this.g.toString()};
lc.prototype.Qb=!0;lc.prototype.f=function(){return 1};
function oc(a){if(a instanceof lc&&a.constructor===lc&&a.h===nc)return a.g;Ea(a);return"type_error:SafeUrl"}
var pc=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,qc=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,rc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function sc(a){if(a instanceof lc)return a;a="object"==typeof a&&a.Ka?a.Aa():String(a);rc.test(a)||(a="about:invalid#zClosurez");return new lc(mc,a)}
function tc(a,b){if(a instanceof lc)return a;a="object"==typeof a&&a.Ka?a.Aa():String(a);if(b&&/^data:/i.test(a)){var c=a.replace(/(%0A|%0D)/g,"");var d=c.match(qc);d=d&&pc.test(d[1]);c=new lc(mc,d?c:"about:invalid#zClosurez");if(c.Aa()==a)return c}rc.test(a)||(a="about:invalid#zClosurez");return new lc(mc,a)}
var nc={},mc={};function uc(){this.g="";this.i=vc;this.h=null}
uc.prototype.Qb=!0;uc.prototype.f=function(){return this.h};
uc.prototype.Ka=!0;uc.prototype.Aa=function(){return this.g.toString()};
function wc(a){if(a instanceof uc&&a.constructor===uc&&a.i===vc)return a.g;Ea(a);return"type_error:SafeHtml"}
function xc(a){if(a instanceof uc)return a;var b="object"==typeof a,c=null;b&&a.Qb&&(c=a.f());return yc(ub(b&&a.Ka?a.Aa():String(a)),c)}
function zc(a){function b(f){Fa(f)?B(f,b):(f=xc(f),e.push(wc(f).toString()),f=f.f(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=xc(Ac),d=c.f(),e=[];B(a,b);return yc(e.join(wc(c).toString()),d)}
function Bc(a){return zc(Array.prototype.slice.call(arguments))}
var vc={};function yc(a,b){return Cc(a,b)}
function Cc(a,b){var c=new uc;c.g=a;c.h=b;return c}
Cc("<!DOCTYPE html>",0);var Ac=Cc("",0),Dc=Cc("<br>",0);var Ec=bc(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=wc(Ac);return!b.parentElement});
function Fc(a,b){if(Ec())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=wc(b)}
function Gc(a,b){var c=b instanceof lc?b:tc(b);a.href=oc(c)}
function Hc(a,b){var c=b instanceof lc?b:tc(b,/^data:image\//i.test(b));a.src=oc(c)}
function Ic(a,b){a.src=kc(b).toString()}
function Jc(a,b){a.src=kc(b);if(null===Ca)b:{var c=n.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&Ba.test(c)){Ca=c;break b}Ca=""}c=Ca;c&&a.setAttribute("nonce",c)}
;function Kc(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function Lc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function Mc(a){return a=ub(a,void 0)}
var Nc={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},Oc={"'":"\\'"};function Pc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Qc(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Rc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function Sc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Tc(){return Sc()||C("iPad")||C("iPod")}
;function Uc(a){Uc[" "](a);return a}
Uc[" "]=u;function Vc(a,b){try{return Uc(a[b]),!0}catch(c){}return!1}
function Wc(a,b){var c=Xc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Yc=C("Opera"),D=C("Trident")||C("MSIE"),Zc=C("Edge"),$c=Zc||D,ad=C("Gecko")&&!(-1!=Eb.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),bd=-1!=Eb.toLowerCase().indexOf("webkit")&&!C("Edge"),cd=C("Macintosh"),dd=C("Windows"),ed=C("Android"),fd=Sc(),gd=C("iPad"),hd=C("iPod"),id=Tc();function jd(){var a=n.document;return a?a.documentMode:void 0}
var kd;a:{var ld="",md=function(){var a=Eb;if(ad)return/rv:([^\);]+)(\)|;)/.exec(a);if(Zc)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(bd)return/WebKit\/(\S+)/.exec(a);if(Yc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
md&&(ld=md?md[1]:"");if(D){var nd=jd();if(null!=nd&&nd>parseFloat(ld)){kd=String(nd);break a}}kd=ld}var od=kd,Xc={};function pd(a){return Wc(a,function(){return 0<=Cb(od,a)})}
function qd(a){return Number(rd)>=a}
var sd;sd=n.document&&D?jd():void 0;var rd=sd;var td=Xb(),ud=Sc()||C("iPod"),vd=C("iPad"),wd=$b(),yd=Zb(),zd=Yb()&&!Tc();var Ad={},Bd=null;var Cd=window;var Dd={};function Ed(a){this.f=a||{cookie:""}}
h=Ed.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.lg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.Fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:
"")};
h.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=tb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Fc:0,path:b,domain:c});return d};
h.oa=function(){return Fd(this).keys};
h.ea=function(){return Fd(this).values};
h.isEmpty=function(){return!this.f.cookie};
h.clear=function(){for(var a=Fd(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Fd(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=tb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Gd=new Ed("undefined"==typeof document?null:document);var Hd=!D||qd(9),Id=!ad&&!D||D&&qd(9)||ad&&pd("1.9.1"),Jd=D&&!pd("9"),Kd=D||Yc||bd;function Ld(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
h=Ld.prototype;h.clone=function(){return new Ld(this.x,this.y)};
h.equals=function(a){return a instanceof Ld&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Md(a,b){return new Ld(a.x-b.x,a.y-b.y)}
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Nd(a,b){this.width=a;this.height=b}
h=Nd.prototype;h.clone=function(){return new Nd(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Od(a){return a?new Pd(Qd(a)):Ya||(Ya=new Pd)}
function E(a){return Rd(document,a)}
function Rd(a,b){return"string"===typeof b?a.getElementById(b):b}
function Sd(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Td(document,"*",a,b)}
function F(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Td(c,"*",a,b)[0]||null}return c||null}
function Td(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&hb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Ud(a,b){Hb(b,function(c,d){c&&"object"==typeof c&&c.Ka&&(c=c.Aa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Vd.hasOwnProperty(d)?a.setAttribute(Vd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Vd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Wd(a){a=a.document;a=Xd(a)?a.documentElement:a.body;return new Nd(a.clientWidth,a.clientHeight)}
function Yd(a){var b=Zd(a);a=$d(a);return D&&pd("10")&&a.pageYOffset!=b.scrollTop?new Ld(b.scrollLeft,b.scrollTop):new Ld(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Zd(a){return a.scrollingElement?a.scrollingElement:!bd&&Xd(a)?a.documentElement:a.body||a.documentElement}
function $d(a){return a.parentWindow||a.defaultView}
function ae(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Hd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Mc(g.name),'"');if(g.type){f.push(' type="',Mc(g.type),'"');var k={};Vb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=be(e,f);g&&("string"===typeof g?f.className=g:Fa(g)?f.className=g.join(" "):Ud(f,g));2<d.length&&ce(e,f,d);return f}
function ce(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ga(f)||Ia(f)&&0<f.nodeType?d(f):B(de(f)?nb(f):f,d)}}
function ee(a){return be(document,a)}
function be(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function fe(a){var b=document,c=be(b,"DIV");D?(a=Bc(Dc,a),Fc(c,a),c.removeChild(c.firstChild)):Fc(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function Xd(a){return"CSS1Compat"==a.compatMode}
function ge(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function he(a,b){a.insertBefore(b,a.childNodes[0]||null)}
function ie(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function je(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function ke(a){return Id&&void 0!=a.children?a.children:ab(a.childNodes,function(b){return 1==b.nodeType})}
function le(a){return void 0!==a.firstElementChild?a.firstElementChild:me(a.firstChild,!0)}
function me(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function ne(a){return Ia(a)&&1==a.nodeType}
function oe(){var a=pe,b;if(Kd&&!(D&&pd("9")&&!pd("10")&&n.SVGElement&&a instanceof n.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return ne(b)?b:null}
function qe(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Qd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function re(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else ge(a),a.appendChild(Qd(a).createTextNode(String(b)))}
function se(a,b){var c=[];return te(a,b,c,!0)?c[0]:void 0}
function te(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||te(a,b,c,d))return!0;a=a.nextSibling}return!1}
var ue={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ve={IMG:" ",BR:"\n"};function we(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!xe(a)||ye(a)):xe(a)&&ye(a))&&D){var c;!Ha(a.getBoundingClientRect)||D&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function xe(a){return D&&!pd("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function ye(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function ze(a){if(Jd&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ae(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Jd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ae(a,b,c){if(!(a.nodeName in ue))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ve)b.push(ve[a.nodeName]);else for(a=a.firstChild;a;)Ae(a,b,c),a=a.nextSibling}
function de(a){if(a&&"number"==typeof a.length){if(Ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ha(a))return"function"==typeof a.item}return!1}
function Be(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Ce(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&hb(f.className.split(/\s+/),c))},d)}
function De(a,b){return Be(a,null,b,void 0)}
function Ce(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Pd(a){this.f=a||n.document||document}
h=Pd.prototype;h.na=function(){return Rd(this.f,void 0)};
h.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
h.createElement=function(a){return be(this.f,a)};
h.appendChild=function(a,b){a.appendChild(b)};
h.Jd=ie;h.isElement=ne;function Ee(a){Fe();return Cc(a,null)}
function Ge(a){Fe();return new hc(ic,a)}
var Fe=u;var He=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ie(a){return a.match(He)}
function Je(a){return a?decodeURI(a):a}
function Ke(a){return Je(Ie(a)[3]||null)}
function Le(){var a=window.location.href,b=a.indexOf("#");return 0>b?null:a.substr(b+1)}
function Me(a){var b=Ie(a);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Ne(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?Lc(f):"")}}
function Oe(a,b,c){if(Fa(b))for(var d=0;d<b.length;d++)Oe(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Pe(a){var b=[],c;for(c in a)Oe(c,a[c],b);return b.join("&")}
function Qe(a,b){var c=Pe(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Re=/#|$/;function Se(a,b){var c=a.search(Re);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return Lc(a.substr(d,e-d))}
;function Te(a){var b=Ue;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ve(){var a=[];Te(function(b){a.push(b)});
return a}
var Ue={zf:"allow-forms",Af:"allow-modals",Bf:"allow-orientation-lock",Cf:"allow-pointer-lock",Df:"allow-popups",Ef:"allow-popups-to-escape-sandbox",Ff:"allow-presentation",Gf:"allow-same-origin",Hf:"allow-scripts",If:"allow-top-navigation",Jf:"allow-top-navigation-by-user-activation"},We=bc(function(){return Ve()});
function Xe(){var a=ee("IFRAME"),b={};B(We(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ye(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=Ye.prototype;h.getHeight=function(){return this.bottom-this.top};
h.clone=function(){return new Ye(this.top,this.right,this.bottom,this.left)};
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Ze(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Ze.prototype.clone=function(){return new Ze(this.left,this.top,this.width,this.height)};
Ze.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Ze.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Ze.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function $e(a,b,c){if("string"===typeof b)(b=af(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=af(c,d);f&&(c.style[f]=e)}}
var bf={};function af(a,b){var c=bf[b];if(!c){var d=Qc(b);c=d;void 0===a.style[d]&&(d=(bd?"Webkit":ad?"Moz":D?"ms":Yc?"O":null)+Rc(d),void 0!==a.style[d]&&(c=d));bf[b]=c}return c}
function cf(a,b){var c=Qd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function df(a,b){return cf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function ef(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}D&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ff(a){if(D&&!qd(8))return a.offsetParent;var b=Qd(a),c=df(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=df(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function gf(a){for(var b=new Ye(0,Infinity,Infinity,0),c=Od(a),d=c.f.body,e=c.f.documentElement,f=Zd(c.f);a=ff(a);)if(!(D&&0==a.clientWidth||bd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=df(a,"overflow")){var g=hf(a),k=new Ld(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=Wd($d(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function hf(a){var b=Qd(a),c=new Ld(0,0);var d=b?Qd(b):document;d=!D||qd(9)||Xd(Od(d).f)?d.documentElement:d.body;if(a==d)return c;a=ef(a);b=Yd(Od(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function jf(a){a=ef(a);return new Ld(a.left,a.top)}
function kf(a){if(1==a.nodeType)return jf(a);a=a.changedTouches?a.changedTouches[0]:a;return new Ld(a.clientX,a.clientY)}
function lf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function mf(a){var b=nf;if("none"!=df(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function nf(a){var b=a.offsetWidth,c=a.offsetHeight,d=bd&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=ef(a),new Nd(a.right-a.left,a.bottom-a.top)):new Nd(b,c)}
function of(a){var b=hf(a);a=mf(a);return new Ze(b.x,b.y,a.width,a.height)}
function pf(a){return"rtl"==df(a,"direction")}
function qf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function rf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?qf(a,c):0}
function sf(a){if(D){var b=rf(a,"paddingLeft"),c=rf(a,"paddingRight"),d=rf(a,"paddingTop");a=rf(a,"paddingBottom");return new Ye(d,c,a,b)}b=cf(a,"paddingLeft");c=cf(a,"paddingRight");d=cf(a,"paddingTop");a=cf(a,"paddingBottom");return new Ye(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
var tf={thin:2,medium:4,thick:6};function uf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in tf?tf[c]:qf(a,c)}
function vf(a){if(D&&!qd(9)){var b=uf(a,"borderLeft"),c=uf(a,"borderRight"),d=uf(a,"borderTop");a=uf(a,"borderBottom");return new Ye(d,c,a,b)}b=cf(a,"borderLeftWidth");c=cf(a,"borderRightWidth");d=cf(a,"borderTopWidth");a=cf(a,"borderBottomWidth");return new Ye(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
;var wf=(new Date).getTime();function xf(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function yf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(q){for(var x=g,r=0;64>r;r+=4)x[r/4]=q[r]<<24|q[r+1]<<16|q[r+2]<<8|q[r+3];for(r=16;80>r;r++)q=x[r-3]^x[r-8]^x[r-14]^x[r-16],x[r]=(q<<1|q>>>31)&4294967295;q=e[0];var R=e[1],xa=e[2],L=e[3],zi=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var xd=L^R&(xa^L);var ag=1518500249}else xd=R^xa^L,ag=1859775393;else 60>r?(xd=R&xa|L&(R|xa),ag=2400959708):(xd=R^xa^L,ag=3395469782);xd=((q<<5|q>>>27)&4294967295)+xd+zi+ag+x[r]&4294967295;zi=L;L=xa;xa=(R<<30|R>>>2)&4294967295;R=q;q=xd}e[0]=e[0]+q&4294967295;e[1]=
e[1]+R&4294967295;e[2]=e[2]+xa&4294967295;e[3]=e[3]+L&4294967295;e[4]=e[4]+zi&4294967295}
function c(q,x){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var r=[],R=0,xa=q.length;R<xa;++R)r.push(q.charCodeAt(R));q=r}x||(x=q.length);r=0;if(0==m)for(;r+64<x;)b(q.slice(r,r+64)),r+=64,p+=64;for(;r<x;)if(f[m++]=q[r++],p++,64==m)for(m=0,b(f);r+64<x;)b(q.slice(r,r+64)),r+=64,p+=64}
function d(){var q=[],x=8*p;56>m?c(k,56-m):c(k,64-(m-56));for(var r=63;56<=r;r--)f[r]=x&255,x>>>=8;b(f);for(r=x=0;5>r;r++)for(var R=24;0<=R;R-=8)q[x++]=e[r]>>R&255;return q}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,p;a();return{reset:a,update:c,digest:d,xd:function(){for(var q=d(),x="",r=0;r<q.length;r++)x+="0123456789ABCDEF".charAt(Math.floor(q[r]/16))+"0123456789ABCDEF".charAt(q[r]%16);return x}}}
;function zf(a,b,c){var d=[],e=[];if(1==(Fa(c)?2:1))return e=[b,a],B(d,function(k){e.push(k)}),Af(e.join(" "));
var f=[],g=[];B(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(k){e.push(k)});
a=Af(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Af(a){var b=yf();b.update(a);return b.xd().toLowerCase()}
;function Bf(a){var b=xf(String(n.location.href)),c;(c=n.__SAPISID||n.__APISID||n.__OVERRIDE_SID)?c=!0:(c=new Ed(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,c||(c=new Ed(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&c&&b?[b,zf(xf(d),c,a||null)].join(" "):null}return null}
;Wb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Cf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Df(a){return a.classList?a.classList:Cf(a).match(/\S+/g)||[]}
function Ef(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function G(a,b){return a.classList?a.classList.contains(b):hb(Df(a),b)}
function H(a,b){if(a.classList)a.classList.add(b);else if(!G(a,b)){var c=Cf(a);Ef(a,c+(0<c.length?" "+b:b))}}
function Ff(a,b){if(a.classList)B(b,function(f){H(a,f)});
else{var c={};B(Df(a),function(f){c[f]=!0});
B(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Ef(a,d)}}
function I(a,b){a.classList?a.classList.remove(b):G(a,b)&&Ef(a,ab(Df(a),function(c){return c!=b}).join(" "))}
function Gf(a,b){a.classList?B(b,function(c){I(a,c)}):Ef(a,ab(Df(a),function(c){return!hb(b,c)}).join(" "))}
function Hf(a,b,c){c?H(a,b):I(a,b)}
function If(a,b,c){G(a,b)&&(I(a,b),H(a,c))}
function Jf(a,b){var c=!G(a,b);Hf(a,b,c)}
;var Kf=!D&&!Yb();function Lf(a,b){if(/-[a-z]/.test(b))return null;if(Kf&&a.dataset){if($b()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Mf="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function Nf(){}
Nf.prototype.next=function(){throw Mf;};
Nf.prototype.sa=function(){return this};
function Of(a){if(a instanceof Nf)return a;if("function"==typeof a.sa)return a.sa(!1);if(Ga(a)){var b=0,c=new Nf;c.next=function(){for(;;){if(b>=a.length)throw Mf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Pf(a,b,c){if(Ga(a))try{B(a,b,c)}catch(d){if(d!==Mf)throw d;}else{a=Of(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Mf)throw d;}}}
function Qf(a){if(Ga(a))return nb(a);a=Of(a);var b=[];Pf(a,function(c){b.push(c)});
return b}
;function Rf(a,b){this.g={};this.f=[];this.Da=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Rf)for(c=a.oa(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
h=Rf.prototype;h.ea=function(){Sf(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
h.oa=function(){Sf(this);return this.f.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||Tf;Sf(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Tf(a,b){return a===b}
h.isEmpty=function(){return 0==this.h};
h.clear=function(){this.g={};this.Da=this.h=this.f.length=0};
h.remove=function(a){return Uf(this.g,a)?(delete this.g[a],this.h--,this.Da++,this.f.length>2*this.h&&Sf(this),!0):!1};
function Sf(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Uf(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Uf(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
h.get=function(a,b){return Uf(this.g,a)?this.g[a]:b};
h.set=function(a,b){Uf(this.g,a)||(this.h++,this.f.push(a),this.Da++);this.g[a]=b};
h.forEach=function(a,b){for(var c=this.oa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new Rf(this)};
h.sa=function(a){Sf(this);var b=0,c=this.Da,d=this,e=new Nf;e.next=function(){if(c!=d.Da)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Mf;var f=d.f[b++];return a?f:d.g[f]};
return e};
function Uf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Vf(a,b,c){for(var d=a.elements,e,f=0;e=d.item(f);f++)if(e.form==a&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=Wf(e);if(null!=e)for(var k,l=0;k=e[l];l++)c(b,g,k);break;default:k=Wf(e),null!=k&&c(b,g,k)}}d=a.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==a&&"image"==e.type.toLowerCase()&&(g=e.name,c(b,g,e.value),c(b,g+".x","0"),c(b,g+".y","0"))}
function Xf(a,b,c){var d=a.get(b);d||(d=[],a.set(b,d));d.push(c)}
function Yf(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Wf(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;var Zf=!D||qd(9),$f=D&&!pd("9"),bg=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{n.addEventListener("test",u,b),n.removeEventListener("test",u,b)}catch(c){}return a}();function cg(){this.G=this.G;this.C=this.C}
cg.prototype.G=!1;cg.prototype.K=function(){return this.G};
cg.prototype.dispose=function(){this.G||(this.G=!0,this.B())};
function dg(a,b){a.G?b():(a.C||(a.C=[]),a.C.push(b))}
cg.prototype.B=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function eg(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function fg(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
fg.prototype.stopPropagation=function(){this.f=!0};
fg.prototype.preventDefault=function(){this.defaultPrevented=!0};var gg;gg=bd?"webkitTransitionEnd":Yc?"otransitionend":"transitionend";function hg(a,b){fg.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
A(hg,fg);var ig={2:"touch",3:"pen",4:"mouse"};
hg.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?ad&&(Vc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ig[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
hg.prototype.stopPropagation=function(){hg.H.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
hg.prototype.preventDefault=function(){hg.H.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$f)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var jg="closure_listenable_"+(1E6*Math.random()|0),kg=0;function lg(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.yb=e;this.key=++kg;this.Ua=this.sb=!1}
function mg(a){a.Ua=!0;a.listener=null;a.f=null;a.src=null;a.yb=null}
;function ng(a){this.src=a;this.listeners={};this.f=0}
ng.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=og(a,b,d,e);-1<g?(b=a[g],c||(b.sb=!1)):(b=new lg(b,this.src,f,!!d,e),b.sb=c,a.push(b));return b};
ng.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=og(e,b,c,d);return-1<b?(mg(e[b]),kb(e,b),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function pg(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(mg(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function og(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ua&&f.listener==b&&f.capture==!!c&&f.yb==d)return e}return-1}
;var qg="closure_lm_"+(1E6*Math.random()|0),rg={},sg=0;function tg(a,b,c,d,e){if(d&&d.once)return ug(a,b,c,d,e);if(Fa(b)){for(var f=0;f<b.length;f++)tg(a,b[f],c,d,e);return null}c=vg(c);return a&&a[jg]?a.h.add(String(b),c,!1,Ia(d)?!!d.capture:!!d,e):wg(a,b,c,!1,d,e)}
function wg(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,k=xg(a);k||(a[qg]=k=new ng(a));c=k.add(b,c,d,g,f);if(c.f)return c;d=yg();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)bg||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(zg(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");sg++;return c}
function yg(){var a=Ag,b=Zf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ug(a,b,c,d,e){if(Fa(b)){for(var f=0;f<b.length;f++)ug(a,b[f],c,d,e);return null}c=vg(c);return a&&a[jg]?a.h.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):wg(a,b,c,!0,d,e)}
function Bg(a,b,c,d,e){if(Fa(b))for(var f=0;f<b.length;f++)Bg(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=vg(c),a&&a[jg])?a.h.remove(String(b),c,d,e):a&&(a=xg(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=og(b,c,d,e)),(c=-1<a?b[a]:null)&&Cg(c))}
function Cg(a){if("number"!==typeof a&&a&&!a.Ua){var b=a.src;if(b&&b[jg])pg(b.h,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(zg(c),d):b.addListener&&b.removeListener&&b.removeListener(d);sg--;(c=xg(b))?(pg(c,a),0==c.f&&(c.src=null,b[qg]=null)):mg(a)}}}
function zg(a){return a in rg?rg[a]:rg[a]="on"+a}
function Dg(a,b,c,d){var e=!0;if(a=xg(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Ua&&(f=Eg(f,d),e=e&&!1!==f)}return e}
function Eg(a,b){var c=a.listener,d=a.yb||a.src;a.sb&&Cg(a);return c.call(d,b)}
function Ag(a,b){if(a.Ua)return!0;if(!Zf){var c=b||t("window.event"),d=new hg(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var k=Dg(c[g],f,!0,d);e=e&&k}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],k=Dg(c[g],f,!1,d),e=e&&k}return e}return Eg(a,new hg(b,this))}
function xg(a){a=a[qg];return a instanceof ng?a:null}
var Fg="__closure_events_fn_"+(1E9*Math.random()>>>0);function vg(a){if(Ha(a))return a;a[Fg]||(a[Fg]=function(b){return a.handleEvent(b)});
return a[Fg]}
;function Gg(a){cg.call(this);this.g=a;this.f={}}
A(Gg,cg);var Hg=[];function Ig(a,b,c,d){Fa(c)||(c&&(Hg[0]=c.toString()),c=Hg);for(var e=0;e<c.length;e++){var f=tg(b,c[e],d||a.handleEvent,!1,a.g||a);if(!f)break;a.f[f.key]=f}}
function Jg(a){Hb(a.f,function(b,c){this.f.hasOwnProperty(c)&&Cg(b)},a);
a.f={}}
Gg.prototype.B=function(){Gg.H.B.call(this);Jg(this)};
Gg.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Kg(){cg.call(this);this.h=new ng(this);this.ab=this;this.ra=null}
A(Kg,cg);Kg.prototype[jg]=!0;h=Kg.prototype;h.Yb=function(a){this.ra=a};
h.addEventListener=function(a,b,c,d){tg(this,a,b,c,d)};
h.removeEventListener=function(a,b,c,d){Bg(this,a,b,c,d)};
h.dispatchEvent=function(a){var b=this.ra;if(b){var c=[];for(var d=1;b;b=b.ra)c.push(b),++d}b=this.ab;d=a.type||a;if("string"===typeof a)a=new fg(a,b);else if(a instanceof fg)a.target=a.target||b;else{var e=a;a=new fg(d,b);Vb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=Lg(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=Lg(g,d,!0,a)&&e,a.f||(e=Lg(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=Lg(g,d,!1,a)&&e;return e};
h.B=function(){Kg.H.B.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,mg(d[e]);delete a.listeners[c];a.f--}}this.ra=null};
function Lg(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ua&&g.capture==c){var k=g.listener,l=g.yb||g.src;g.sb&&pg(a.h,g);e=!1!==k.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function Mg(){}
Mg.prototype.f=null;Mg.prototype.getOptions=function(){var a;(a=this.f)||(a={},Ng(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var Og;function Pg(){}
A(Pg,Mg);function Qg(a){return(a=Ng(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ng(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
Og=new Pg;function Rg(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Rg.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};function Sg(a){n.setTimeout(function(){throw a;},0)}
var Tg;
function Ug(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=ee("IFRAME");e.style.display="none";Ic(e,new hc(ic,fc(gc)));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(wc(Ac));e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=v(function(l){if(("*"==k||l.origin==k)&&l.data==g)this.port1.onmessage()},
this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.fc;c.fc=null;e()}};
return function(e){d.next={fc:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in ee("SCRIPT")?function(e){var f=ee("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){n.setTimeout(e,0)}}
;function Vg(){this.g=this.f=null}
var Xg=new Rg(function(){return new Wg},function(a){a.reset()});
Vg.prototype.add=function(a,b){var c=Xg.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Vg.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Wg(){this.next=this.scope=this.f=null}
Wg.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Wg.prototype.reset=function(){this.next=this.scope=this.f=null};function Yg(a){Zg||$g();ah||(Zg(),ah=!0);bh.add(a,void 0)}
var Zg;function $g(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Zg=function(){a.then(ch)}}else Zg=function(){var b=ch;
!Ha(n.setImmediate)||n.Window&&n.Window.prototype&&!C("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Tg||(Tg=Ug()),Tg(b)):n.setImmediate(b)}}
var ah=!1,bh=new Vg;function ch(){for(var a;a=bh.remove();){try{a.f.call(a.scope)}catch(c){Sg(c)}var b=Xg;b.i(a);100>b.g&&(b.g++,a.next=b.f,b.f=a)}ah=!1}
;function dh(a,b){Kg.call(this);this.g=a||1;this.f=b||n;this.i=v(this.jf,this);this.j=y()}
A(dh,Kg);h=dh.prototype;h.enabled=!1;h.ia=null;h.setInterval=function(a){this.g=a;this.ia&&this.enabled?(this.stop(),this.start()):this.ia&&this.stop()};
h.jf=function(){if(this.enabled){var a=y()-this.j;0<a&&a<.8*this.g?this.ia=this.f.setTimeout(this.i,this.g-a):(this.ia&&(this.f.clearTimeout(this.ia),this.ia=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.ia||(this.ia=this.f.setTimeout(this.i,this.g),this.j=y())};
h.stop=function(){this.enabled=!1;this.ia&&(this.f.clearTimeout(this.ia),this.ia=null)};
h.B=function(){dh.H.B.call(this);this.stop();delete this.f};
function eh(a,b,c){if(Ha(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:n.setTimeout(a,b||0)}
;function fh(a,b,c){cg.call(this);this.i=null!=c?v(a,c):a;this.h=b;this.g=v(this.Oe,this);this.f=[]}
A(fh,cg);h=fh.prototype;h.Wa=!1;h.lb=0;h.Ia=null;h.Id=function(a){this.f=arguments;this.Ia||this.lb?this.Wa=!0:gh(this)};
h.stop=function(){this.Ia&&(n.clearTimeout(this.Ia),this.Ia=null,this.Wa=!1,this.f=[])};
h.pause=function(){this.lb++};
h.resume=function(){this.lb--;this.lb||!this.Wa||this.Ia||(this.Wa=!1,gh(this))};
h.B=function(){fh.H.B.call(this);this.stop()};
h.Oe=function(){this.Ia=null;this.Wa&&!this.lb&&(this.Wa=!1,gh(this))};
function gh(a){a.Ia=eh(a.g,a.h);a.i.apply(null,a.f)}
;function hh(a,b,c,d){this.f=a;this.h=b;this.G=c;this.C=d||1;this.j=45E3;this.i=new Gg(this);this.g=new dh;this.g.setInterval(250)}
h=hh.prototype;h.Ja=null;h.la=!1;h.Ya=null;h.cc=null;h.Va=null;h.Xa=null;h.wa=null;h.Ca=null;h.Ma=null;h.S=null;h.pb=0;h.ma=null;h.Ib=null;h.Ba=null;h.ib=-1;h.ed=!0;h.Fa=!1;h.Pb=0;h.Eb=null;var ih={},jh={};h=hh.prototype;h.setTimeout=function(a){this.j=a};
function kh(a,b,c){a.Xa=1;a.wa=lh(b.clone());a.Ma=c;a.l=!0;mh(a,null)}
function nh(a,b,c,d,e){a.Xa=1;a.wa=lh(b.clone());a.Ma=null;a.l=c;e&&(a.ed=!1);mh(a,d)}
function mh(a,b){a.Va=y();oh(a);a.Ca=a.wa.clone();ph(a.Ca,"t",a.C);a.pb=0;a.S=a.f.Lb(a.f.nb()?b:null);0<a.Pb&&(a.Eb=new fh(v(a.ld,a,a.S),a.Pb));Ig(a.i,a.S,"readystatechange",a.Xe);var c=a.Ja?Sb(a.Ja):{};a.Ma?(a.Ib="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.S.send(a.Ca,a.Ib,a.Ma,c)):(a.Ib="GET",a.ed&&!bd&&(c.Connection="close"),a.S.send(a.Ca,a.Ib,null,c));a.f.ja(1)}
h.Xe=function(a){a=a.target;var b=this.Eb;b&&3==qh(a)?b.Id():this.ld(a)};
h.ld=function(a){try{if(a==this.S)a:{var b=qh(this.S),c=this.S.l,d=this.S.getStatus();if(D&&!qd(10)||bd&&!pd("420+")){if(4>b)break a}else if(3>b||3==b&&!Yc&&!rh(this.S))break a;this.Fa||4!=b||7==c||(8==c||0>=d?this.f.ja(3):this.f.ja(2));sh(this);var e=this.S.getStatus();this.ib=e;var f=rh(this.S);(this.la=200==e)?(4==b&&th(this),this.l?(uh(this,b,f),Yc&&this.la&&3==b&&(Ig(this.i,this.g,"tick",this.We),this.g.start())):vh(this,f),this.la&&!this.Fa&&(4==b?this.f.Cb(this):(this.la=!1,oh(this)))):(400==
e&&0<f.indexOf("Unknown SID")?(this.Ba=3,J(13)):(this.Ba=0,J(14)),th(this),wh(this))}}catch(g){}finally{}};
function uh(a,b,c){for(var d=!0;!a.Fa&&a.pb<c.length;){var e=xh(a,c);if(e==jh){4==b&&(a.Ba=4,J(15),d=!1);break}else if(e==ih){a.Ba=4;J(16);d=!1;break}else vh(a,e)}4==b&&0==c.length&&(a.Ba=1,J(17),d=!1);a.la=a.la&&d;d||(th(a),wh(a))}
h.We=function(){var a=qh(this.S),b=rh(this.S);this.pb<b.length&&(sh(this),uh(this,a,b),this.la&&4!=a&&oh(this))};
function xh(a,b){var c=a.pb,d=b.indexOf("\n",c);if(-1==d)return jh;c=Number(b.substring(c,d));if(isNaN(c))return ih;d+=1;if(d+c>b.length)return jh;var e=b.substr(d,c);a.pb=d+c;return e}
function yh(a,b){a.Va=y();oh(a);var c=b?window.location.hostname:"";a.Ca=a.wa.clone();zh(a.Ca,"DOMAIN",c);zh(a.Ca,"t",a.C);try{a.ma=new ActiveXObject("htmlfile")}catch(m){th(a);a.Ba=7;J(22);wh(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var g=c.charAt(f);if("<"==g)e+="\\x3c";else if(">"==g)e+="\\x3e";else{var k=g;if(k in Oc)g=Oc[k];else if(k in Nc)g=Oc[k]=Nc[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)g=k;else{if(256>l){if(g="\\x",16>l||256<l)g+="0"}else g="\\u",4096>l&&
(g+="0");g+=l.toString(16).toUpperCase()}g=Oc[k]=g}e+=g}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=Cc(d+"</body></html>",null);a.ma.open();a.ma.write(wc(c));a.ma.close();a.ma.parentWindow.m=v(a.Re,a);a.ma.parentWindow.d=v(a.Zc,a,!0);a.ma.parentWindow.rpcClose=v(a.Zc,a,!1);c=a.ma.createElement("DIV");a.ma.parentWindow.document.body.appendChild(c);d=sc(a.Ca.toString());d=Mc(oc(d));d=Cc('<iframe src="'+d+'"></iframe>',null);Fc(c,d);a.f.ja(1)}
h.Re=function(a){Ah(v(this.Qe,this,a),0)};
h.Qe=function(a){this.Fa||(sh(this),vh(this,a),oh(this))};
h.Zc=function(a){Ah(v(this.Pe,this,a),0)};
h.Pe=function(a){this.Fa||(th(this),this.la=a,this.f.Cb(this),this.f.ja(4))};
h.cancel=function(){this.Fa=!0;th(this)};
function oh(a){a.cc=y()+a.j;Bh(a,a.j)}
function Bh(a,b){if(null!=a.Ya)throw Error("WatchDog timer not null");a.Ya=Ah(v(a.Se,a),b)}
function sh(a){a.Ya&&(n.clearTimeout(a.Ya),a.Ya=null)}
h.Se=function(){this.Ya=null;var a=y();0<=a-this.cc?(2!=this.Xa&&this.f.ja(3),th(this),this.Ba=2,J(18),wh(this)):Bh(this,this.cc-a)};
function wh(a){a.f.Bc()||a.Fa||a.f.Cb(a)}
function th(a){sh(a);eg(a.Eb);a.Eb=null;a.g.stop();Jg(a.i);if(a.S){var b=a.S;a.S=null;b.abort();b.dispose()}a.ma&&(a.ma=null)}
h.getLastError=function(){return this.Ba};
function vh(a,b){try{a.f.Tc(a,b),a.f.ja(4)}catch(c){}}
;function Ch(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Dh(a){var b=[];Eh(new Fh,a,b);return b.join("")}
function Fh(){}
function Eh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Fa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Eh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Gh(d,c),c.push(":"),Eh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Gh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Hh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ih=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Gh(a,b){b.push('"',a.replace(Ih,function(c){var d=Hh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Hh[c]=d);return d}),'"')}
;function Jh(a){if(a.ea&&"function"==typeof a.ea)return a.ea();if("string"===typeof a)return a.split("");if(Ga(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Lb(a)}
function Kh(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Ga(a)||"string"===typeof a)B(a,b,c);else{if(a.oa&&"function"==typeof a.oa)var d=a.oa();else if(a.ea&&"function"==typeof a.ea)d=void 0;else if(Ga(a)||"string"===typeof a){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=Mb(a);e=Jh(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function Lh(a,b){this.g=this.G=this.i="";this.C=null;this.j=this.f="";this.l=!1;var c;a instanceof Lh?(this.l=void 0!==b?b:a.l,Mh(this,a.i),this.G=a.G,Nh(this,a.g),Oh(this,a.C),this.f=a.f,Ph(this,a.h.clone()),this.j=a.j):a&&(c=Ie(String(a)))?(this.l=!!b,Mh(this,c[1]||"",!0),this.G=Qh(c[2]||""),Nh(this,c[3]||"",!0),Oh(this,c[4]),this.f=Qh(c[5]||"",!0),Ph(this,c[6]||"",!0),this.j=Qh(c[7]||"")):(this.l=!!b,this.h=new Rh(null,this.l))}
Lh.prototype.toString=function(){var a=[],b=this.i;b&&a.push(Sh(b,Th,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.G)&&a.push(Sh(b,Th,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.C,null!=c&&a.push(":",String(c));if(c=this.f)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(Sh(c,"/"==c.charAt(0)?Uh:Vh,!0));(c=this.h.toString())&&a.push("?",c);(c=this.j)&&a.push("#",Sh(c,Wh));return a.join("")};
Lh.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?Mh(b,a.i):c=!!a.G;c?b.G=a.G:c=!!a.g;c?Nh(b,a.g):c=null!=a.C;var d=a.f;if(c)Oh(b,a.C);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.g&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.h.toString();c?Ph(b,a.h.clone()):c=!!a.j;c&&(b.j=a.j);return b};
Lh.prototype.clone=function(){return new Lh(this)};
function Mh(a,b,c){a.i=c?Qh(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function Nh(a,b,c){a.g=c?Qh(b,!0):b}
function Oh(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.C=b}else a.C=null}
function Ph(a,b,c){b instanceof Rh?(a.h=b,Xh(a.h,a.l)):(c||(b=Sh(b,Yh)),a.h=new Rh(b,a.l))}
function zh(a,b,c){a.h.set(b,c)}
function ph(a,b,c){Fa(c)||(c=[String(c)]);Zh(a.h,b,c)}
function lh(a){zh(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^y()).toString(36));return a}
function $h(a){return a instanceof Lh?a.clone():new Lh(a,void 0)}
function ai(a,b,c,d){var e=new Lh(null,void 0);a&&Mh(e,a);b&&Nh(e,b);c&&Oh(e,c);d&&(e.f=d);return e}
function Qh(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Sh(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,bi),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function bi(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Th=/[#\/\?@]/g,Vh=/[#\?:]/g,Uh=/[#\?]/g,Yh=/[#\?@]/g,Wh=/#/g;function Rh(a,b){this.g=this.f=null;this.h=a||null;this.i=!!b}
function ci(a){a.f||(a.f=new Rf,a.g=0,a.h&&Ne(a.h,function(b,c){a.add(Lc(b),c)}))}
h=Rh.prototype;h.add=function(a,b){ci(this);this.h=null;a=di(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
h.remove=function(a){ci(this);a=di(this,a);return Uf(this.f.g,a)?(this.h=null,this.g=this.g-this.f.get(a).length,this.f.remove(a)):!1};
h.clear=function(){this.f=this.h=null;this.g=0};
h.isEmpty=function(){ci(this);return 0==this.g};
function ei(a,b){ci(a);b=di(a,b);return Uf(a.f.g,b)}
h.forEach=function(a,b){ci(this);this.f.forEach(function(c,d){B(c,function(e){a.call(b,e,d,this)},this)},this)};
h.oa=function(){ci(this);for(var a=this.f.ea(),b=this.f.oa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.ea=function(a){ci(this);var b=[];if("string"===typeof a)ei(this,a)&&(b=mb(b,this.f.get(di(this,a))));else{a=this.f.ea();for(var c=0;c<a.length;c++)b=mb(b,a[c])}return b};
h.set=function(a,b){ci(this);this.h=null;a=di(this,a);ei(this,a)&&(this.g=this.g-this.f.get(a).length);this.f.set(a,[b]);this.g=this.g+1;return this};
h.get=function(a,b){if(!a)return b;var c=this.ea(a);return 0<c.length?String(c[0]):b};
function Zh(a,b,c){a.remove(b);0<c.length&&(a.h=null,a.f.set(di(a,b),nb(c)),a.g=a.g+c.length)}
h.toString=function(){if(this.h)return this.h;if(!this.f)return"";for(var a=[],b=this.f.oa(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.ea(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.h=a.join("&")};
h.clone=function(){var a=new Rh;a.h=this.h;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function di(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function Xh(a,b){b&&!a.i&&(ci(a),a.h=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),Zh(this,e,c))},a));
a.i=b}
h.extend=function(a){for(var b=0;b<arguments.length;b++)Kh(arguments[b],function(c,d){this.add(d,c)},this)};function fi(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;gi(a,b,function(g){g?c(!0):n.setTimeout(function(){fi(a,b,c,d,f)},f)})}}
function gi(a,b,c){var d=new Image;d.onload=function(){try{hi(d),c(!0)}catch(e){}};
d.onerror=function(){try{hi(d),c(!1)}catch(e){}};
d.onabort=function(){try{hi(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{hi(d),c(!1)}catch(e){}};
n.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Hc(d,a)}
function hi(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function ii(){}
ii.prototype.stringify=function(a){return n.JSON.stringify(a,void 0)};
ii.prototype.parse=function(a){return n.JSON.parse(a,void 0)};function ji(a){this.f=a;this.g=new ii}
h=ji.prototype;h.Nb=null;h.Y=null;h.Fb=!1;h.jd=null;h.ub=null;h.Sb=null;h.Ob=null;h.fa=null;h.va=-1;h.hb=null;h.bb=null;h.connect=function(a){this.Ob=a;a=ki(this.f,null,this.Ob);J(3);this.jd=y();var b=this.f.G;null!=b?(this.hb=b[0],(this.bb=b[1])?(this.fa=1,li(this)):(this.fa=2,mi(this))):(ph(a,"MODE","init"),this.Y=new hh(this,void 0,void 0,void 0),this.Y.Ja=this.Nb,nh(this.Y,a,!1,null,!0),this.fa=0)};
function li(a){var b=ki(a.f,a.bb,"/mail/images/cleardot.gif");lh(b);fi(b.toString(),5E3,v(a.wd,a),3,2E3);a.ja(1)}
h.wd=function(a){if(a)this.fa=2,mi(this);else{J(4);var b=this.f;b.qa=b.xa.va;ni(b,9)}a&&this.ja(2)};
function mi(a){var b=a.f.u;if(null!=b)J(5),b?(J(11),oi(a.f,a,!1)):(J(12),oi(a.f,a,!0));else if(a.Y=new hh(a,void 0,void 0,void 0),a.Y.Ja=a.Nb,b=a.f,b=ki(b,b.nb()?a.hb:null,a.Ob),J(5),!D||qd(10))ph(b,"TYPE","xmlhttp"),nh(a.Y,b,!1,a.hb,!1);else{ph(b,"TYPE","html");var c=a.Y;a=!!a.hb;c.Xa=3;c.wa=lh(b.clone());yh(c,a)}}
h.Lb=function(a){return this.f.Lb(a)};
h.abort=function(){this.Y&&(this.Y.cancel(),this.Y=null);this.va=-1};
h.Bc=function(){return!1};
h.Tc=function(a,b){this.va=a.ib;if(0==this.fa)if(b){try{var c=this.g.parse(b)}catch(d){c=this.f;c.qa=this.va;ni(c,2);return}this.hb=c[0];this.bb=c[1]}else c=this.f,c.qa=this.va,ni(c,2);else if(2==this.fa)if(this.Fb)J(7),this.Sb=y();else if("11111"==b){if(J(6),this.Fb=!0,this.ub=y(),c=this.ub-this.jd,!D||qd(10)||500>c)this.va=200,this.Y.cancel(),J(12),oi(this.f,this,!0)}else J(8),this.ub=this.Sb=y(),this.Fb=!1};
h.Cb=function(){this.va=this.Y.ib;if(this.Y.la)0==this.fa?this.bb?(this.fa=1,li(this)):(this.fa=2,mi(this)):2==this.fa&&((!D||qd(10)?!this.Fb:200>this.Sb-this.ub)?(J(11),oi(this.f,this,!1)):(J(12),oi(this.f,this,!0)));else{0==this.fa?J(9):2==this.fa&&J(10);var a=this.f;this.Y.getLastError();a.qa=this.va;ni(a,2)}};
h.nb=function(){return this.f.nb()};
h.isActive=function(){return this.f.isActive()};
h.ja=function(a){this.f.ja(a)};function pi(a){if(n.JSON)try{return n.JSON.parse(a)}catch(b){}return Ch(a)}
;function qi(a){Kg.call(this);this.headers=new Rf;this.L=a||null;this.g=!1;this.J=this.f=null;this.R="";this.l=0;this.i="";this.j=this.O=this.u=this.N=!1;this.F=0;this.A=null;this.ha="";this.U=this.ba=!1}
A(qi,Kg);var ri=/^https?$/i,si=["POST","PUT"];h=qi.prototype;
h.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.R+"; newUri="+a);b=b?b.toUpperCase():"GET";this.R=a;this.i="";this.l=0;this.N=!1;this.g=!0;this.f=this.L?Qg(this.L):Qg(Og);this.J=this.L?this.L.getOptions():Og.getOptions();this.f.onreadystatechange=v(this.Sc,this);try{this.getStatus(),this.O=!0,this.f.open(b,String(a),!0),this.O=!1}catch(f){this.getStatus();ti(this,f);return}a=c||"";var e=this.headers.clone();d&&Kh(d,function(f,g){e.set(g,
f)});
d=fb(e.oa(),ui);c=n.FormData&&a instanceof n.FormData;!hb(si,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,g){this.f.setRequestHeader(g,f)},this);
this.ha&&(this.f.responseType=this.ha);"withCredentials"in this.f&&this.f.withCredentials!==this.ba&&(this.f.withCredentials=this.ba);try{vi(this),0<this.F&&(this.U=wi(this.f),this.getStatus(),this.U?(this.f.timeout=this.F,this.f.ontimeout=v(this.xc,this)):this.A=eh(this.xc,this.F,this)),this.getStatus(),this.u=!0,this.f.send(a),this.u=!1}catch(f){this.getStatus(),ti(this,f)}};
function wi(a){return D&&pd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
function ui(a){return"content-type"==a.toLowerCase()}
h.xc=function(){"undefined"!=typeof Aa&&this.f&&(this.i="Timed out after "+this.F+"ms, aborting",this.l=8,this.getStatus(),this.dispatchEvent("timeout"),this.abort(8))};
function ti(a,b){a.g=!1;a.f&&(a.j=!0,a.f.abort(),a.j=!1);a.i=b;a.l=5;xi(a);yi(a)}
function xi(a){a.N||(a.N=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(a){this.f&&this.g&&(this.getStatus(),this.g=!1,this.j=!0,this.f.abort(),this.j=!1,this.l=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),yi(this))};
h.B=function(){this.f&&(this.g&&(this.g=!1,this.j=!0,this.f.abort(),this.j=!1),yi(this,!0));qi.H.B.call(this)};
h.Sc=function(){this.K()||(this.O||this.u||this.j?Ai(this):this.He())};
h.He=function(){Ai(this)};
function Ai(a){if(a.g&&"undefined"!=typeof Aa)if(a.J[1]&&4==qh(a)&&2==a.getStatus())a.getStatus();else if(a.u&&4==qh(a))eh(a.Sc,0,a);else if(a.dispatchEvent("readystatechange"),4==qh(a)){a.getStatus();a.g=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Ie(String(a.R))[1]||null;if(!f&&n.self&&n.self.location){var g=n.self.location.protocol;f=g.substr(0,g.length-1)}e=!ri.test(f?
f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.l=6;try{var k=2<qh(a)?a.f.statusText:""}catch(l){k=""}a.i=k+" ["+a.getStatus()+"]";xi(a)}}finally{yi(a)}}}
function yi(a,b){if(a.f){vi(a);var c=a.f,d=a.J[0]?u:null;a.f=null;a.J=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function vi(a){a.f&&a.U&&(a.f.ontimeout=null);a.A&&(n.clearTimeout(a.A),a.A=null)}
h.isActive=function(){return!!this.f};
function qh(a){return a.f?a.f.readyState:0}
h.getStatus=function(){try{return 2<qh(this)?this.f.status:-1}catch(a){return-1}};
function rh(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
h.getLastError=function(){return"string"===typeof this.i?this.i:String(this.i)};function Bi(a,b,c){this.f=1;this.g=[];this.i=[];this.j=new ii;this.G=a||null;this.u=null!=b?b:null;this.l=c||!1}
function Ci(a,b){this.g=a;this.f=b;this.context=null}
h=Bi.prototype;h.eb=null;h.X=null;h.P=null;h.Mb=null;h.wb=null;h.ec=null;h.xb=null;h.jb=0;h.le=0;h.T=null;h.za=null;h.ta=null;h.Ha=null;h.xa=null;h.Hb=null;h.Sa=-1;h.Ec=-1;h.qa=-1;h.Qa=0;h.Oa=0;h.Ga=8;var Di=new Kg;function Ei(a){fg.call(this,"statevent",a)}
A(Ei,fg);function Fi(a,b){fg.call(this,"timingevent",a);this.size=b}
A(Fi,fg);function Gi(a){fg.call(this,"serverreachability",a)}
A(Gi,fg);h=Bi.prototype;h.connect=function(a,b,c,d,e){J(0);this.Mb=b;this.eb=c||{};d&&void 0!==e&&(this.eb.OSID=d,this.eb.OAID=e);this.l?(Ah(v(this.pc,this,a),100),Hi(this)):this.pc(a)};
function Ii(a){Ji(a);if(3==a.f){var b=a.jb++,c=a.wb.clone();zh(c,"SID",a.h);zh(c,"RID",b);zh(c,"TYPE","terminate");Ki(a,c);b=new hh(a,a.h,b,void 0);b.Xa=2;b.wa=lh(c.clone());Hc(new Image,b.wa.toString());b.Va=y();oh(b)}Li(a)}
h.pc=function(a){this.xa=new ji(this);this.xa.Nb=null;this.xa.g=this.j;this.xa.connect(a)};
function Hi(a){a.yd(1,0);a.wb=ki(a,null,a.Mb);Mi(a)}
function Ji(a){a.xa&&(a.xa.abort(),a.xa=null);a.P&&(a.P.cancel(),a.P=null);a.ta&&(n.clearTimeout(a.ta),a.ta=null);Ni(a);a.X&&(a.X.cancel(),a.X=null);a.za&&(n.clearTimeout(a.za),a.za=null)}
function Oi(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.g.push(new Ci(a.le++,b));2!=a.f&&3!=a.f||Mi(a)}
h.Bc=function(){return 0==this.f};
function Mi(a){a.X||a.za||(a.za=Ah(v(a.Xc,a),0),a.Qa=0)}
h.Xc=function(a){this.za=null;Pi(this,a)};
function Pi(a,b){if(1==a.f){if(!b){a.jb=Math.floor(1E5*Math.random());var c=a.jb++,d=new hh(a,"",c,void 0);d.Ja=null;var e=Qi(a),f=a.wb.clone();zh(f,"RID",c);zh(f,"CVER","1");Ki(a,f);kh(d,f,e);a.X=d;a.f=2}}else 3==a.f&&(b?Ri(a,b):0==a.g.length||a.X||Ri(a))}
function Ri(a,b){if(b)if(6<a.Ga){a.g=a.i.concat(a.g);a.i.length=0;var c=a.jb-1;var d=Qi(a)}else c=b.G,d=b.Ma;else c=a.jb++,d=Qi(a);var e=a.wb.clone();zh(e,"SID",a.h);zh(e,"RID",c);zh(e,"AID",a.Sa);Ki(a,e);c=new hh(a,a.h,c,a.Qa+1);c.Ja=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.X=c;kh(c,e,d)}
function Ki(a,b){if(a.T){var c=a.T.sc();c&&Hb(c,function(d,e){zh(b,e,d)})}}
function Qi(a){var b=Math.min(a.g.length,1E3),c=["count="+b];if(6<a.Ga&&0<b){var d=a.g[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.g[e].g,g=a.g[e].f;f=6>=a.Ga?e:f-d;try{Hb(g,function(k,l){c.push("req"+f+"_"+l+"="+encodeURIComponent(k))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.g.splice(0,b));
return c.join("&")}
function Si(a){a.P||a.ta||(a.C=1,a.ta=Ah(v(a.Wc,a),0),a.Oa=0)}
function Ti(a){if(a.P||a.ta||3<=a.Oa)return!1;a.C++;a.ta=Ah(v(a.Wc,a),Ui(a,a.Oa));a.Oa++;return!0}
h.Wc=function(){this.ta=null;this.P=new hh(this,this.h,"rpc",this.C);this.P.Ja=null;this.P.Pb=0;var a=this.ec.clone();zh(a,"RID","rpc");zh(a,"SID",this.h);zh(a,"CI",this.Hb?"0":"1");zh(a,"AID",this.Sa);Ki(this,a);if(!D||qd(10))zh(a,"TYPE","xmlhttp"),nh(this.P,a,!0,this.xb,!1);else{zh(a,"TYPE","html");var b=this.P,c=!!this.xb;b.Xa=3;b.wa=lh(a.clone());yh(b,c)}};
function oi(a,b,c){a.Hb=c;a.qa=b.va;a.l||Hi(a)}
h.Tc=function(a,b){if(0!=this.f&&(this.P==a||this.X==a))if(this.qa=a.ib,this.X==a&&3==this.f)if(7<this.Ga){try{var c=this.j.parse(b)}catch(f){c=null}if(Fa(c)&&3==c.length)if(0==c[0])a:{if(!this.ta){if(this.P)if(this.P.Va+3E3<this.X.Va)Ni(this),this.P.cancel(),this.P=null;else break a;Ti(this);J(19)}}else this.Ec=c[1],0<this.Ec-this.Sa&&37500>c[2]&&this.Hb&&0==this.Oa&&!this.Ha&&(this.Ha=Ah(v(this.me,this),6E3));else ni(this,11)}else b!=Dd.Mf.f&&ni(this,11);else if(this.P==a&&Ni(this),!/^[\s\xa0]*$/.test(b)){c=
this.j.parse(b);Fa(c);for(var d=0;d<c.length;d++){var e=c[d];this.Sa=e[0];e=e[1];2==this.f?"c"==e[0]?(this.h=e[1],this.xb=e[2],e=e[3],null!=e?this.Ga=e:this.Ga=6,this.f=3,this.T&&this.T.jc(),this.ec=ki(this,this.nb()?this.xb:null,this.Mb),Si(this)):"stop"==e[0]&&ni(this,7):3==this.f&&("stop"==e[0]?ni(this,7):"noop"!=e[0]&&this.T&&this.T.ic(e),this.Oa=0)}}};
h.me=function(){null!=this.Ha&&(this.Ha=null,this.P.cancel(),this.P=null,Ti(this),J(20))};
function Ni(a){null!=a.Ha&&(n.clearTimeout(a.Ha),a.Ha=null)}
h.Cb=function(a){if(this.P==a){Ni(this);this.P=null;var b=2}else if(this.X==a)this.X=null,b=1;else return;this.qa=a.ib;if(0!=this.f)if(a.la)1==b?(b=y()-a.Va,Di.dispatchEvent(new Fi(Di,a.Ma?a.Ma.length:0,b,this.Qa)),Mi(this),this.i.length=0):Si(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.qa)){if(d=1==b)this.X||this.za||1==this.f||2<=this.Qa?d=!1:(this.za=Ah(v(this.Xc,this,a),Ui(this,this.Qa)),this.Qa++,d=!0);d=!(d||2==b&&Ti(this))}if(d)switch(c){case 1:ni(this,5);break;case 4:ni(this,
10);break;case 3:ni(this,6);break;case 7:ni(this,12);break;default:ni(this,2)}}};
function Ui(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
h.yd=function(a){if(!hb(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function ni(a,b){if(2==b||9==b){var c=null;a.T&&(c=null);var d=v(a.hf,a);c||(c=new Lh("//www.google.com/images/cleardot.gif"),lh(c));gi(c.toString(),1E4,d)}else J(2);Vi(a,b)}
h.hf=function(a){a?J(2):(J(1),Vi(this,8))};
function Vi(a,b){a.f=0;a.T&&a.T.hc(b);Li(a);Ji(a)}
function Li(a){a.f=0;a.qa=-1;if(a.T)if(0==a.i.length&&0==a.g.length)a.T.Kb();else{nb(a.i);var b=nb(a.g);a.i.length=0;a.g.length=0;a.T.Kb(b)}}
function ki(a,b,c){var d=$h(c);if(""!=d.g)b&&Nh(d,b+"."+d.g),Oh(d,d.C);else{var e=window.location;d=ai(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.eb&&Hb(a.eb,function(f,g){zh(d,g,f)});
zh(d,"VER",a.Ga);Ki(a,d);return d}
h.Lb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new qi;a.ba=!1;return a};
h.isActive=function(){return!!this.T&&this.T.isActive(this)};
function Ah(a,b){if(!Ha(a))throw Error("Fn must not be null and must be a function");return n.setTimeout(function(){a()},b)}
h.ja=function(a){Di.dispatchEvent(new Gi(Di,a))};
function J(a){Di.dispatchEvent(new Ei(Di,a))}
h.nb=function(){return!(!D||qd(10))};
function Wi(){}
h=Wi.prototype;h.jc=function(){};
h.ic=function(){};
h.hc=function(){};
h.Kb=function(){};
h.sc=function(){return{}};
h.isActive=function(){return!0};var Xi=function(){if(dd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Eb))?a[1]:"0"}return cd?(a=/10[_.][0-9_.]+/,(a=a.exec(Eb))?a[0].replace(/_/g,"."):"10"):ed?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Eb))?a[1]:""):fd||gd||hd?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Eb))?a[1].replace(/_/g,"."):""):""}();function Yi(a){return(a=a.exec(Eb))?a[1]:""}
var Zi=function(){if(td)return Yi(/Firefox\/([0-9.]+)/);if(D||Zc||Yc)return od;if(yd)return Tc()?Yi(/CriOS\/([0-9.]+)/):Yi(/Chrome\/([0-9.]+)/);if(zd&&!Tc())return Yi(/Version\/([0-9.]+)/);if(ud||vd){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Eb);if(a)return a[1]+"."+a[2]}else if(wd)return(a=Yi(/Android\s+([0-9.]+)/))?a:Yi(/Version\/([0-9.]+)/);return""}();function $i(){}
Da($i);$i.prototype.f=0;function aj(a){Kg.call(this);this.R=a||Od();this.Ea=null;this.Ra=!1;this.f=null;this.g=void 0;this.N=this.O=this.U=null;this.Na=!1}
A(aj,Kg);h=aj.prototype;h.Wd=$i.getInstance();h.getId=function(){return this.Ea||(this.Ea=":"+(this.Wd.f++).toString(36))};
h.na=function(){return this.f};
function bj(a,b){return a.f?F(b,a.f||a.R.f):null}
function cj(a){a.g||(a.g=new Gg(a));return a.g}
h.Yb=function(a){if(this.U&&this.U!=a)throw Error("Method not supported");aj.H.Yb.call(this,a)};
function dj(a,b){if(a.Ra)throw Error("Component already rendered");if(b){a.Na=!0;var c=Qd(b);a.R&&a.R.f==c||(a.R=Od(b));a.f=b;a.ya()}else throw Error("Invalid element to decorate");}
h.ya=function(){this.Ra=!0;ej(this,function(a){!a.Ra&&a.na()&&a.ya()})};
h.ua=function(){ej(this,function(a){a.Ra&&a.ua()});
this.g&&Jg(this.g);this.Ra=!1};
h.B=function(){this.Ra&&this.ua();this.g&&(this.g.dispose(),delete this.g);ej(this,function(a){a.dispose()});
!this.Na&&this.f&&ie(this.f);this.U=this.f=this.N=this.O=null;aj.H.B.call(this)};
function ej(a,b){a.O&&B(a.O,b,void 0)}
h.removeChild=function(a,b){if(a){var c="string"===typeof a?a:a.getId();if(this.N&&c){var d=this.N;d=(null!==d&&c in d?d[c]:void 0)||null}else d=null;a=d;if(c&&a){d=this.N;c in d&&delete d[c];jb(this.O,a);b&&(a.ua(),a.f&&ie(a.f));c=a;if(null==c)throw Error("Unable to set parent component");c.U=null;aj.H.Yb.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};function fj(){this.g=[];this.f=-1}
fj.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
fj.prototype.get=function(a){return!!this.g[a]};
function gj(a){-1==a.f&&(a.f=cb(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function hj(a,b,c){cg.call(this);this.f=null;this.i=!1;this.l=a;this.j=c;this.g=b||window;this.h=v(this.Hd,this)}
A(hj,cg);h=hj.prototype;h.start=function(){this.stop();this.i=!1;var a=ij(this),b=jj(this);a&&!b&&this.g.mozRequestAnimationFrame?(this.f=tg(this.g,"MozBeforePaint",this.h),this.g.mozRequestAnimationFrame(null),this.i=!0):this.f=a&&b?a.call(this.g,this.h):this.g.setTimeout(ac(this.h),20)};
h.stop=function(){if(this.isActive()){var a=ij(this),b=jj(this);a&&!b&&this.g.mozRequestAnimationFrame?Cg(this.f):a&&b?b.call(this.g,this.f):this.g.clearTimeout(this.f)}this.f=null};
h.isActive=function(){return null!=this.f};
h.Hd=function(){this.i&&this.f&&Cg(this.f);this.f=null;this.l.call(this.j,y())};
h.B=function(){this.stop();hj.H.B.call(this)};
function ij(a){a=a.g;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null}
function jj(a){a=a.g;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null}
;function kj(a,b,c){cg.call(this);this.f=a;this.i=b||0;this.g=c;this.h=v(this.wc,this)}
A(kj,cg);h=kj.prototype;h.gb=0;h.B=function(){kj.H.B.call(this);this.stop();delete this.f;delete this.g};
h.start=function(a){this.stop();this.gb=eh(this.h,void 0!==a?a:this.i)};
h.stop=function(){this.isActive()&&n.clearTimeout(this.gb);this.gb=0};
h.isActive=function(){return 0!=this.gb};
h.wc=function(){this.gb=0;this.f&&this.f.call(this.g)};function lj(){this.g=-1}
;function mj(){this.g=64;this.f=[];this.l=[];this.C=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
A(mj,lj);mj.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function nj(a,b,c){c||(c=0);var d=a.C;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],l=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):
(f=c^g^k,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+l&4294967295}
mj.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)nj(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){nj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){nj(this,e);f=0;break}}this.h=f;this.j+=b}};
mj.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;nj(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function oj(a,b,c,d,e,f,g){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=df(k,"position")){var m=hf(k);if(!l){l=pf(k);var p;if(p=l){if(p=zd)p=0<=Cb(Zi,10);var q;if(q=id)q=0<=Cb(Xi,10);p=ad||p||q}l=p?-k.scrollLeft:!l||$c&&pd("8")||"visible"==df(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;m=Md(m,new Ld(l,k.scrollTop))}}}k=m||new Ld;m=of(a);if(l=gf(a)){var x=new Ze(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,x.left);
p=Math.min(m.left+m.width,x.left+x.width);l<=p&&(q=Math.max(m.top,x.top),x=Math.min(m.top+m.height,x.top+x.height),q<=x&&(m.left=l,m.top=q,m.width=p-l,m.height=x-q))}l=Od(a);q=Od(c);if(l.f!=q.f){p=l.f.body;q=$d(q.f);x=new Ld(0,0);var r=(r=Qd(p))?$d(r):window;if(Vc(r,"parent")){var R=p;do{var xa=r==q?hf(R):jf(R);x.x+=xa.x;x.y+=xa.y}while(r&&r!=q&&r!=r.parent&&(R=r.frameElement)&&(r=r.parent))}p=Md(x,hf(p));!D||qd(9)||Xd(l.f)||(p=Md(p,Yd(l.f)));m.left+=p.x;m.top+=p.y}a=pj(a,b);b=m.left;a&4?b+=m.width:
a&2&&(b+=m.width/2);b=new Ld(b,m.top+(a&1?m.height:0));b=Md(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var L;g&&(L=gf(c))&&(L.top-=k.y,L.right-=k.x,L.bottom-=k.y,L.left-=k.x);e=L;L=b.clone();b=pj(c,d);d=mf(c);a=d.clone();L=L.clone();a=a.clone();k=0;if(f||0!=b)b&4?L.x-=a.width+(f?f.right:0):b&2?L.x-=a.width/2:f&&(L.x+=f.left),b&1?L.y-=a.height+(f?f.bottom:0):f&&(L.y+=f.top);g&&(e?(f=L,b=a,k=0,65==(g&65)&&(f.x<e.left||f.x>=e.right)&&(g&=-2),132==(g&132)&&(f.y<e.top||f.y>=e.bottom)&&(g&=-5),f.x<
e.left&&g&1&&(f.x=e.left,k|=1),g&16&&(m=f.x,f.x<e.left&&(f.x=e.left,k|=4),f.x+b.width>e.right&&(b.width=Math.min(e.right-f.x,m+b.width-e.left),b.width=Math.max(b.width,0),k|=4)),f.x+b.width>e.right&&g&1&&(f.x=Math.max(e.right-b.width,e.left),k|=1),g&2&&(k|=(f.x<e.left?16:0)|(f.x+b.width>e.right?32:0)),f.y<e.top&&g&4&&(f.y=e.top,k|=2),g&32&&(m=f.y,f.y<e.top&&(f.y=e.top,k|=8),f.y+b.height>e.bottom&&(b.height=Math.min(e.bottom-f.y,m+b.height-e.top),b.height=Math.max(b.height,0),k|=8)),f.y+b.height>e.bottom&&
g&4&&(f.y=Math.max(e.bottom-b.height,e.top),k|=2),g&8&&(k|=(f.y<e.top?64:0)|(f.y+b.height>e.bottom?128:0)),g=k):g=256,k=g);f=new Ze(0,0,0,0);f.left=L.x;f.top=L.y;f.width=a.width;f.height=a.height;g=k;g&496||(L=new Ld(f.left,f.top),L instanceof Ld?(e=L.x,L=L.y):(e=L,L=void 0),c.style.left=lf(e,!1),c.style.top=lf(L,!1),a=new Nd(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,e=Xd(Od(Qd(c)).f),!D||pd("10")||e&&pd("8")?(c=c.style,ad?c.MozBoxSizing="border-box":bd?c.WebkitBoxSizing=
"border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,e?(e=sf(c),c=vf(c),d.pixelWidth=f.width-c.left-e.left-e.right-c.right,d.pixelHeight=f.height-c.top-e.top-e.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return g}
function pj(a,b){return(b&8&&pf(a)?b^4:b)&-9}
;function K(a){cg.call(this);this.j=1;this.h=[];this.i=0;this.f=[];this.g={};this.l=!!a}
A(K,cg);h=K.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.j=e+3;d.push(e);return e};
function qj(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.ga(d),b.apply(void 0,arguments))},a)}
function rj(a,b,c,d){if(b=a.g[b]){var e=a.f;(b=fb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ga(b)}}
h.ga=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.f[a+1]=u):(c&&jb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
h.Z=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];sj(this.f[g+1],this.f[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.ga(c)}}return 0!=e}return!1};
function sj(a,b,c){Yg(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(B(b,this.ga,this),delete this.g[a])}else this.f.length=0,this.g={}};
function tj(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=tj(a,d);return c}
h.B=function(){K.H.B.call(this);this.clear();this.h.length=0};function uj(a){this.f=a}
uj.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Dh(b))};
uj.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
uj.prototype.remove=function(a){this.f.remove(a)};function vj(a){this.f=a}
A(vj,uj);function wj(a){this.data=a}
function xj(a){return void 0===a||a instanceof wj?a:new wj(a)}
vj.prototype.set=function(a,b){vj.H.set.call(this,a,xj(b))};
vj.prototype.g=function(a){a=vj.H.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vj.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yj(a){this.f=a}
A(yj,vj);function zj(a){var b=a.creation;a=a.expiration;return!!a&&a<y()||!!b&&b>y()}
yj.prototype.set=function(a,b,c){if(b=xj(b)){if(c){if(c<y()){yj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}yj.H.set.call(this,a,b)};
yj.prototype.g=function(a,b){var c=yj.H.g.call(this,a);if(c)if(!b&&zj(c))yj.prototype.remove.call(this,a);else return c};function Aj(a){this.f=a}
A(Aj,yj);function Bj(a,b){var c=[];Pf(b,function(d){try{var e=Aj.prototype.g.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):zj(e)&&c.push(d)},a);
return c}
function Cj(a,b){var c=Bj(a,b);B(c,function(d){Aj.prototype.remove.call(this,d)},a)}
;function Dj(){}
;function Ej(){}
A(Ej,Dj);Ej.prototype.clear=function(){var a=Qf(this.sa(!0)),b=this;B(a,function(c){b.remove(c)})};function Fj(a){this.f=a}
A(Fj,Ej);h=Fj.prototype;h.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeItem(a)};
h.sa=function(a){var b=0,c=this.f,d=new Nf;d.next=function(){if(b>=c.length)throw Mf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){this.f.clear()};
h.key=function(a){return this.f.key(a)};function Gj(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(Gj,Fj);function Hj(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
A(Hj,Fj);function Ij(a,b){this.g=a;this.f=null;if(D&&!qd(9)){Jj||(Jj=new Rf);this.f=Jj.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Jj.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
A(Ij,Ej);var Kj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Jj=null;function Lj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Kj[b]})}
h=Ij.prototype;h.isAvailable=function(){return!!this.f};
h.set=function(a,b){this.f.setAttribute(Lj(a),b);Mj(this)};
h.get=function(a){a=this.f.getAttribute(Lj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeAttribute(Lj(a));Mj(this)};
h.sa=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Nf;d.next=function(){if(b>=c.length)throw Mf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Mj(this)};
function Mj(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Nj(a,b){this.g=a;this.f=b+"::"}
A(Nj,Ej);Nj.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Nj.prototype.get=function(a){return this.g.get(this.f+a)};
Nj.prototype.remove=function(a){this.g.remove(this.f+a)};
Nj.prototype.sa=function(a){var b=this.g.sa(!0),c=this,d=new Nf;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Oj(a){var b=new Gj;return b.isAvailable()?a?new Nj(b,a):b:null}
;function Pj(){this.f=[];this.g=[]}
Pj.prototype.isEmpty=function(){return 0==this.f.length&&0==this.g.length};
Pj.prototype.clear=function(){this.f=[];this.g=[]};
Pj.prototype.remove=function(a){var b=this.f;var c=$a(b,a);0<=c?(kb(b,c),b=!0):b=!1;return b||jb(this.g,a)};
Pj.prototype.ea=function(){for(var a=[],b=this.f.length-1;0<=b;--b)a.push(this.f[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};var Qj=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Qj);function Rj(a){var b=arguments;1<b.length?Qj[b[0]]=b[1]:1===b.length&&Object.assign(Qj,b[0])}
function M(a,b){return a in Qj?Qj[a]:b}
function Sj(){return M("ERRORS",[])}
function Tj(){return M("CREATOR_CONTEXT",Uj)}
;function Vj(a){a=Wj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Xj(a,b){var c=Wj(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Wj(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
;function Yj(a,b,c,d,e,f){Gd.set(""+a,b,{Fc:c,path:d,domain:void 0===e?"youtube.com":e,secure:void 0===f?!1:f})}
function Zj(a,b,c){return Gd.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;var ak={"consent.google.com":!0,"consent.youtube.com":!0,"consent-daily-0.sandbox.youtube.com":!0,"consent-daily-1.sandbox.youtube.com":!0,"consent-daily-2.sandbox.youtube.com":!0,"consent-daily-3.sandbox.youtube.com":!0,"consent-daily-4.sandbox.youtube.com":!0,"consent-daily-5.sandbox.youtube.com":!0,"consent-daily-6.sandbox.youtube.com":!0,"consent-autopush.sandbox.youtube.com":!0,"daily-0.consent.corp.youtube.com":!0,"daily-1.consent.corp.youtube.com":!0,"daily-2.consent.corp.youtube.com":!0,"daily-3.consent.corp.youtube.com":!0,
"daily-4.consent.corp.youtube.com":!0,"daily-5.consent.corp.youtube.com":!0,"daily-6.consent.corp.youtube.com":!0,"autopush.consent.corp.youtube.com":!0,"dev.consent.corp.youtube.com":!0,"consent-daily-0.sandbox.google.com":!0,"consent-daily-1.sandbox.google.com":!0,"consent-daily-2.sandbox.google.com":!0,"consent-daily-3.sandbox.google.com":!0,"consent-daily-4.sandbox.google.com":!0,"consent-daily-5.sandbox.google.com":!0,"consent-daily-6.sandbox.google.com":!0,"consent-autopush.sandbox.google.com":!0,
"daily-0.consent.corp.google.com":!0,"daily-1.consent.corp.google.com":!0,"daily-2.consent.corp.google.com":!0,"daily-3.consent.corp.google.com":!0,"daily-4.consent.corp.google.com":!0,"daily-5.consent.corp.google.com":!0,"daily-6.consent.corp.google.com":!0,"autopush.consent.corp.google.com":!0,"dev.consent.corp.google.com":!0};function bk(a,b,c){a&&(a.dataset?a.dataset[ck(b)]=String(c):a.setAttribute("data-"+b,c))}
function N(a,b){return a?a.dataset?a.dataset[ck(b)]:a.getAttribute("data-"+b):null}
function dk(a,b){a&&(a.dataset?delete a.dataset[ck(b)]:a.removeAttribute("data-"+b))}
var ek={};function ck(a){return ek[a]||(ek[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var fk=0;function gk(a){var b=a.__yt_uid_key;b||(b=hk(),a.__yt_uid_key=b);return b}
function ik(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?B(a.childNodes,function(c){b.appendChild(ik(c))}):b.innerHTML=a.innerHTML;
return b}
function jk(a,b){a=E(a);b=E(b);return!!Ce(a,function(c){return c===b},void 0)}
function kk(a,b,c){a=Td(document,a,b,c);return a.length?a[0]:null}
function lk(a,b){"disabled"in a&&(a.disabled=!b);1==a.nodeType&&Hf(a,"disabled",!b);if(a.hasChildNodes())for(var c=0,d;d=a.childNodes[c];++c)d instanceof Element&&lk(d,b)}
function mk(a){a=a.replace(/^[\s\xa0]+/,"");var b=String(a.substr(0,3)).toLowerCase();if(0==("<tr"<b?-1:"<tr"==b?0:1))return a=fe(Ee("<table><tbody>"+a+"</tbody></table>")),kk("tr",null,a);b=document.createElement("div");b.innerHTML=a;return le(b)}
function nk(){Hf(document.body,"hide-players",!1);B(Sd("preserve-players"),function(a){I(a,"preserve-players")})}
var hk=t("ytDomDomGetNextId")||function(){return++fk};
z("ytDomDomGetNextId",hk);var ok=[];function pk(a){ok.forEach(function(b){return b(a)})}
function qk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){rk(b),pk(b)}}:a}
function rk(a){var b=t("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Sj(),b.push([a,"ERROR",void 0,void 0,void 0]),Rj("ERRORS",b))}
function sk(a){var b=t("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Sj(),b.push([a,"WARNING",void 0,void 0,void 0]),Rj("ERRORS",b))}
;var tk={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uk(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tk||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
uk.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uk.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uk.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ob=t("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",Ob);var vk=t("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",vk);
function wk(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&Rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function O(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=wk(a,b,c,d);if(e)return e;e=++vk.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new uk(k);if(!Ce(k.relatedTarget,function(l){return l==a}))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new uk(k);
k.currentTarget=a;return c.call(a,k)};
g=qk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),xk()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ob[e]=[a,b,c,g,d];return e}
function yk(a,b,c,d){var e=a||document;return O(e,b,function(f){var g=Ce(f.target,function(k){return k===e||d(k)});
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function zk(a){a&&("string"==typeof a&&(a=[a]),B(a,function(b){if(b in Ob){var c=Ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?xk()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ob[b]}}))}
function Ak(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var xk=bc(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Bk(a,b,c,d){return yk(a,b,c,function(e){return G(e,d)})}
function Ck(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Dk(a,b,c){var d=void 0===d?{}:d;var e;return e=O(a,b,function(){zk(e);c.apply(a,arguments)},d)}
;function P(a,b){Ha(a)&&(a=qk(a));return window.setTimeout(a,b)}
function Q(a){window.clearTimeout(a)}
;var Ek=t("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ga;K.prototype.publish=K.prototype.Z;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",Ek);var Fk=t("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",Fk);var Gk=t("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",Gk);var Hk=t("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",Hk);
function S(a,b,c){var d=Ik();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){Fk[e]&&b.apply(c||window,f)};
try{Hk[a]?g():P(g,0)}catch(k){rk(k)}},c);
Fk[e]=!0;Gk[a]||(Gk[a]=[]);Gk[a].push(e);return e}return 0}
function Jk(){var a=T.mb,b=T,c=S("yt-ui-dialog-cancelled",function(d){a.apply(b,arguments);Kk(c)},b)}
function Kk(a){var b=Ik();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),B(a,function(c){b.unsubscribeByKey(c);delete Fk[c]}))}
function U(a,b){var c=Ik();c&&c.publish.apply(c,arguments)}
function Lk(a,b){Hk[a]=!0;var c=Ik();c&&c.publish.apply(c,arguments);Hk[a]=!1}
function Mk(a){var b=Ik();if(b)if(b.clear(a),a)Nk(a);else for(var c in Gk)Nk(c)}
function Ik(){return t("ytPubsubPubsubInstance")}
function Nk(a){Gk[a]&&(a=Gk[a],B(a,function(b){Fk[b]&&delete Fk[b]}),a.length=0)}
;function Ok(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=Lc(e[0]||""),g=Lc(e[1]||"");f in b?Fa(b[f])?ob(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};rk(k)}}}return b}
function Pk(a){var b=[];Hb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Fa(c)?f=c:f=[c];B(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Qk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ok(a)}
function Rk(a,b){return Sk(a,b||{},!0)}
function Sk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Qk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Qe(a,e)+d}
;function Tk(a){var b=Uk;a=void 0===a?t("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Vk(b),Wk(b));b.ca_type="image";a&&(b.bid=a);return b}
function Vk(a){var b={};b.dt=wf;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?Cd:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!Cd.navigator&&"unknown"!==typeof Cd.navigator.javaEnabled&&!!Cd.navigator.javaEnabled&&Cd.navigator.javaEnabled();Cd.screen&&(b.u_h=Cd.screen.height,b.u_w=Cd.screen.width,b.u_ah=Cd.screen.availHeight,b.u_aw=Cd.screen.availWidth,b.u_cd=
Cd.screen.colorDepth);Cd.navigator&&Cd.navigator.plugins&&(b.u_nplug=Cd.navigator.plugins.length);Cd.navigator&&Cd.navigator.mimeTypes&&(b.u_nmime=Cd.navigator.mimeTypes.length);return b}
function Wk(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var g=b.innerWidth;var k=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.f.top;try{var l=Wd(c||window).round()}catch(m){l=new Nd(-12245933,-12245933)}c=l;l={};d=new fj;n.SVGElement&&n.document.createElementNS&&d.set(0);e=Xe();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);n.TextDecoder&&n.TextEncoder&&d.set(4);d=gj(d);l.bc=d;l.bih=c.height;l.biw=c.width;l.brdim=b.join();a=a.g;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!Cd.WebGLRenderingContext,l}
var Uk=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Pk(Tk(a))});y();var Xk=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Yk(){if(!Xk)return null;var a=Xk();return"open"in a?a:null}
;var Zk={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},$k="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
al=!1;
function bl(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=Ie(a)[1]||null,e=Ke(a);d&&e?(d=c,c=Ie(a),d=Ie(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ke(c)==e&&(Number(Ie(c)[4]||null)||null)==(Number(Ie(a)[4]||null)||null):!0;d=Vj("web_ajax_ignore_global_headers_if_set");for(var f in Zk)e=M(Zk[f]),!e||!c&&!cl(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||cl(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||cl(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=
typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||cl(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Pk(Tk(void 0));return b}
function dl(a){var b=window.location.search,c=Ke(a),d=Je(Ie(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Qk(b),f={};B($k,function(g){e[g]&&(f[g]=e[g])});
return Sk(a,f||{},!1)}
function cl(a,b){var c=M("CORS_HEADER_WHITELIST")||{},d=Ke(a);return d?(c=c[d])?hb(c,b):!1:!0}
function el(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=fl(a,b);var d=gl(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Q(f);var k=g.ok,l=function(m){m=m||{};var p=b.context||n;k?b.onSuccess&&b.onSuccess.call(p,m,g):b.onError&&b.onError.call(p,m,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.Rc&&0<b.timeout&&(f=P(function(){e||(e=!0,Q(f),b.Rc.call(b.context||n))},b.timeout))}else hl(a,b)}
function hl(a,b){var c=b.format||"JSON";a=fl(a,b);var d=gl(a,b),e=!1,f,g=il(a,function(k){if(!e){e=!0;f&&Q(f);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=jl(c,k,b.dg);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||n;
l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.La&&0<b.timeout&&(f=P(function(){e||(e=!0,g.abort(),Q(f),b.La.call(b.context||n,g))},b.timeout));
return g}
function fl(a,b){b.hg&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME",void 0),d=b.ob;d&&(d[c]&&delete d[c],a=Rk(a,d));return a}
function gl(a,b){var c=M("XSRF_FIELD_NAME",void 0),d=M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ka,g=M("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.gg||Ke(a)&&!b.withCredentials&&Ke(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.ka&&b.ka[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Qk(e),Vb(e,f),e=b.bd&&"JSON"==b.bd?JSON.stringify(e):Pe(e));f=e||f&&!Pb(f);!al&&f&&"POST"!=b.method&&(al=!0,rk(Error("AJAX request with postData should use POST")));
return e}
function jl(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?kl(b):null)d={},B(b.getElementsByTagName("*"),function(e){d[e.tagName]=ll(e)})}c&&ml(d);
return d}
function ml(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Cc(a[b],null):ml(a[b])}}
function kl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ll(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function il(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&qk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Yk();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;Vj("debug_forward_web_query_parameters")&&(a=dl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=bl(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var nl={},ol=0;function pl(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Eb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=oc(sc(a)),"about:invalid#zClosurez"===a?a="":(a=wc(xc(a)).toString(),a=encodeURIComponent(String(Dh(a)))),/^[\s\xa0]*$/.test(a)||(a=ae("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),Qd(a).body.appendChild(a))):e?il(a,b,"POST",e,d):M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?il(a,b,"GET","",d):ql(a,b)||rl(a,b))}
function ql(a,b){var c=Qj.EXPERIMENT_FLAGS;if(!c||!c.web_use_beacon_api_for_ad_click_server_pings)return!1;c=Je(Ie(a)[5]||null);return c&&-1!=c.indexOf("/aclk")&&"1"===Se(a,"ae")&&"1"===Se(a,"act")?sl(a)?(b&&b(),!0):!1:!1}
function sl(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function rl(a,b){var c=new Image,d=""+ol++;nl[d]=c;c.onload=c.onerror=function(){b&&nl[d]&&b();delete nl[d]};
c.src=a}
;function tl(a,b){pl("/gen_204?"+a,b)}
;function ul(a,b){(a=E(a))&&a.style&&(a.style.display=b?"":"none",Hf(a,"hid",!b))}
function vl(a){return(a=E(a))?"none"!=a.style.display&&!G(a,"hid"):!1}
function wl(a){if(a=E(a))vl(a)?(a.style.display="none",H(a,"hid")):(a.style.display="",I(a,"hid"))}
function xl(a){B(arguments,function(b){!Ga(b)||b instanceof Element?ul(b,!0):B(b,function(c){xl(c)})})}
function yl(a){B(arguments,function(b){!Ga(b)||b instanceof Element?ul(b,!1):B(b,function(c){yl(c)})})}
function zl(a){B(arguments,function(b){Ga(b)?B(b,function(c){zl(c)}):wl(b)})}
;function Al(a,b){this.version=a;this.args=b}
;function Bl(a,b){this.topic=a;this.f=b}
Bl.prototype.toString=function(){return this.topic};function Cl(){}
;function Dl(){}
ka(Dl,Cl);function El(a,b,c){isNaN(c)&&(c=void 0);var d=t("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):P(a,c||0)}
Dl.prototype.start=function(){var a=t("yt.scheduler.instance.start");a&&a()};
Dl.prototype.pause=function(){var a=t("yt.scheduler.instance.pause");a&&a()};
Da(Dl);Dl.getInstance();var Fl=t("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ga;K.prototype.publish=K.prototype.Z;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",Fl);var Gl=t("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Gl);var Hl=t("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Hl);var Il=t("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Il);
z("ytPubsub2Pubsub2SkipSubKey",null);function Jl(a,b){var c=Kl();c&&c.publish.call(c,a.toString(),a,b)}
function Ll(a,b){var c=Kl();if(c){var d=c.subscribe(a.toString(),function(e,f){var g=t("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Gl[d])try{if(f&&a instanceof Bl&&a!=e)try{var k=a.f,l=f;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.Da){var m=new k;k.Da=m.version}var p=k.Da}catch(q){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(k,nb(l.args))}catch(q){throw q.message=
"yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(window,f)}catch(q){rk(q)}},Il[a.toString()]?t("yt.scheduler.instance")?El(g,1,void 0):P(g,0):g())});
Gl[d]=!0;Hl[a.toString()]||(Hl[a.toString()]=[]);Hl[a.toString()].push(d)}}
function Ml(a){var b=Kl();b&&("number"===typeof a&&(a=[a]),B(a,function(c){b.unsubscribeByKey(c);delete Gl[c]}))}
function Kl(){return t("ytPubsub2Pubsub2Instance")}
;var Nl={},Ol="ontouchstart"in document;function Pl(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Ce(c,function(e){return G(e,b)},d)}
function Ql(a){var b="mouseover"==a.type&&"mouseenter"in Nl||"mouseout"==a.type&&"mouseleave"in Nl,c=a.type in Nl||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Nl[b];for(var d in c.g){var e=Pl(b,d,a.target);e&&!Ce(a.relatedTarget,function(f){return f==e})&&c.Z(d,e,b,a)}}if(b=Nl[a.type])for(d in b.g)(e=Pl(a.type,d,a.target))&&b.Z(d,e,a.type,a)}}
O(document,"blur",Ql,!0);O(document,"change",Ql,!0);O(document,"click",Ql);O(document,"focus",Ql,!0);O(document,"mouseover",Ql);O(document,"mouseout",Ql);O(document,"mousedown",Ql);O(document,"keydown",Ql);O(document,"keyup",Ql);O(document,"keypress",Ql);O(document,"cut",Ql);O(document,"paste",Ql);Ol&&(O(document,"touchstart",Ql),O(document,"touchend",Ql),O(document,"touchcancel",Ql));function Rl(a){this.j=a;this.C={};this.G=[];this.u=[]}
h=Rl.prototype;h.ca=function(a){return De(a,V(this))};
function V(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
h.unregister=function(){Kk(this.G);this.G.length=0;Ml(this.u);this.u.length=0};
h.init=u;h.dispose=u;function Sl(a,b,c){a.G.push(S(b,c,a))}
function Tl(a,b,c,d){d=V(a,d);var e=v(c,a);b in Nl||(Nl[b]=new K);Nl[b].subscribe(d,e);a.C[c]=e}
function Ul(a,b,c,d){if(b in Nl){var e=Nl[b];rj(e,V(a,d),a.C[c]);0>=tj(e)&&(e.dispose(),delete Nl[b])}delete a.C[c]}
h.cb=function(a,b,c){var d=this.I(a,b);if(d&&(d=t(d))){var e=qb(arguments,2);pb(e,0,0,a);d.apply(null,e)}};
h.I=function(a,b){return N(a,b)};var Vl={Kf:"atp",Sf:"ska",Pf:"que",Of:"mus",Rf:"sus",Nf:"dsp",Qf:"seq"};var Wl=window,Xl=Wl.ytcsi&&Wl.ytcsi.now?Wl.ytcsi.now:Wl.performance&&Wl.performance.timing&&Wl.performance.now?function(){return Wl.performance.timing.navigationStart+Wl.performance.now()}:function(){return(new Date).getTime()};var Yl=Xj("initial_gel_batch_timeout",1E3),Zl=Math.pow(2,16)-1,$l=null,am=0,bm={log_event:"events",log_interaction:"interactions"},cm=Object.create(null);cm.log_event="GENERIC_EVENT_LOGGING";cm.log_interaction="INTERACTION_LOGGING";var dm=new Set(["log_event"]),em={},fm=0,gm=0,hm=0,im=!0,jm=t("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",jm);var km=t("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",km);
var lm=t("ytLoggingTransportDispatchedStats_")||{};z("ytLoggingTransportDispatchedStats_",lm);z("ytytLoggingTransportCapturedTime_",t("ytLoggingTransportCapturedTime_")||{});function mm(){Q(fm);Q(gm);gm=0;if(!Pb(jm)){for(var a in jm){var b=em[a];b&&b.isReady()&&(nm(a,b),delete jm[a],im=!1)}Pb(jm)||om()}}
function om(){Vj("web_gel_timeout_cap")&&!gm&&(gm=P(mm,6E4));Q(fm);var a=M("LOGGING_BATCH_TIMEOUT",Xj("web_gel_debounce_ms",1E4));Vj("shorten_initial_gel_batch_timeout")&&im&&(a=Yl);fm=P(mm,a)}
function pm(a,b){b=void 0===b?"":b;jm[a]=jm[a]||{};jm[a][b]=jm[a][b]||[];return jm[a][b]}
function nm(a,b){var c=bm[a],d=lm[a]||{};lm[a]=d;var e=Math.round(Xl());for(q in jm[a]){var f=Tb,g=b.f||qm();g={client:{hl:g.be,gl:g.ae,clientName:g.Zd,clientVersion:g.innertubeContextClientVersion,configInfo:g.Yd}};var k=window.devicePixelRatio;k&&1!=k&&(g.client.screenDensityFloat=String(k));k=M("EXPERIMENTS_TOKEN","");""!==k&&(g.client.experimentsToken=k);var l=k=void 0,m=[],p=M("EXPERIMENTS_FORCED_FLAGS",{});for(l in p)m.push({key:l,value:String(p[l])});l=M("EXPERIMENT_FLAGS",{});for(k in l)k.startsWith("force_")&&
void 0===p[k]&&m.push({key:k,value:String(l[k])});k=m;0<k.length&&(g.request={internalExperimentFlags:k});M("DELEGATED_SESSION_ID")&&!Vj("pageid_as_header_web")&&(g.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=pm(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=km[q])a:{m=q;if(g.videoId)k="VIDEO";else if(g.playlistId)k="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:m,scope:k}]}delete km[q];f.requestTimeMs=e;Vj("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(g=M("EVENT_ID",void 0))k=M("BATCH_CLIENT_COUNTER",void 0)||0,!k&&Vj("web_client_counter_random_seed")&&(k=Math.floor(Math.random()*Zl/2)),k++,k>Zl&&(k=1),Rj("BATCH_CLIENT_COUNTER",k),g={serializedEventId:g,clientCounter:k},f.serializedClientEventId=g,$l&&am&&Vj("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:$l,roundtripMs:am}),
$l=g,am=0;rm(b,a,f,{retry:dm.has(a),onSuccess:v(sm,this,Xl())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e}
function sm(a){am=Math.round(Xl()-a)}
;var tm=t("ytLoggingGelSequenceIdObj_")||{};z("ytLoggingGelSequenceIdObj_",tm);
function um(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Xl());e[a]=b;a=String;d.timestamp?b=-1:(b=t("_lact",window),b=null==b?-1:Math.max(y()-b,0));e.context={lastActivityMs:a(b)};Vj("log_sequence_info_on_gel_web")&&d.fd&&(a=e.context,b=d.fd,tm[b]=b in tm?tm[b]+1:0,a.sequence={index:tm[b],groupKey:b},d.fg&&delete tm[d.fd]);(d=d.eg)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),km[d.token]=a,d=pm("log_event",d.token)):d=pm("log_event");
d.push(e);c&&(em.log_event=new c);c=Xj("web_logging_max_batch")||100;e=Xl();d.length>=c?mm():10<=e-hm&&(om(),hm=e)}
;function vm(){return"INNERTUBE_API_KEY"in Qj&&"INNERTUBE_API_VERSION"in Qj}
function qm(){return{innertubeApiKey:M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:M("INNERTUBE_API_VERSION",void 0),Yd:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Zd:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),be:M("INNERTUBE_CONTEXT_HL",void 0),ae:M("INNERTUBE_CONTEXT_GL",void 0),ce:M("INNERTUBE_HOST_OVERRIDE",void 0)||"",de:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function wm(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ag||M("AUTHORIZATION"))||(a?b="Bearer "+t("gapi.auth.getToken")().Xf:b=Bf([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=M("SESSION_INDEX",0),Vj("pageid_as_header_web")&&(d["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return d}
function xm(a){a=Object.assign({},a);delete a.Authorization;var b=Bf();if(b){var c=new mj;c.update(M("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ga(b);void 0===c&&(c=0);if(!Bd){Bd={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Ad[f]=g;for(var k=0;k<g.length;k++){var l=g[k];void 0===Bd[l]&&(Bd[l]=k)}}}c=Ad[c];d=[];for(e=0;e<b.length;e+=3){var m=b[e],p=(f=e+1<b.length)?
b[e+1]:0;l=(g=e+2<b.length)?b[e+2]:0;k=m>>2;m=(m&3)<<4|p>>4;p=(p&15)<<2|l>>6;l&=63;g||(l=64,f||(p=64));d.push(c[k],c[m],c[p]||"",c[l]||"")}a.hash=d.join("")}return a}
;function ym(){var a;(a=Oj("yt.innertube"))||(a=new Ij("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new yj(a):null;this.g=document.domain||window.location.hostname}
ym.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,y()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Dh(b))}catch(f){return}else e=escape(b);Yj(a,e,c,"/",this.g)};
ym.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Gd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ym.prototype.remove=function(a){this.f&&this.f.remove(a);Zj(a,"/",this.g)};var zm=new ym;function Am(a,b,c,d){if(d)return null;d=zm.get("nextId",!0)||1;var e=zm.get("requests",!0)||{};e[d]={method:a,request:b,authState:xm(c),requestTime:Math.round(Xl())};zm.set("nextId",d+1,86400,!0);zm.set("requests",e,86400,!0);return d}
function Bm(a){var b=zm.get("requests",!0)||{};delete b[a];zm.set("requests",b,86400,!0)}
function Cm(a){var b=zm.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Xl())-d.requestTime)){var e=d.authState,f=xm(wm(!1));Rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Xl())),rm(a,d.method,e,{}));delete b[c]}}zm.set("requests",b,86400,!0)}}
;function Dm(a){var b=this;this.f=null;a?this.f=a:Vj("delay_gel_until_config_ready")?vm()&&(this.f=qm()):this.f=qm();El(function(){Cm(b)},0,5E3)}
Dm.prototype.isReady=function(){!this.f&&vm()&&(this.f=qm());return!!this.f};
function rm(a,b,c,d){!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&sk(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",ka:c,bd:"JSON",La:function(){d.La()},
Rc:d.La,onSuccess:function(x,r){if(d.onSuccess)d.onSuccess(r)},
Qc:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,r){if(d.onError)d.onError(r)},
jg:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.ce;g&&(f=g);g=a.f.de||!1;var k=wm(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=Rk(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),m;if(d.retry&&Vj("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Am(b,c,k,g))){var p=e.onSuccess,q=e.Qc;e.onSuccess=function(x,r){Bm(m);p(x,r)};
c.Qc=function(x,r){Bm(m);q(x,r)}}try{Vj("use_fetch_for_op_xhr")?el(l,e):(e.method="POST",e.ka||(e.ka={}),hl(l,e))}catch(x){if("InvalidAccessError"==x)m&&(Bm(m),m=0),sk(Error("An extension is blocking network request."));
else throw x;}m&&El(function(){Cm(a)},0,5E3)}
;var Em=y().toString();
function Fm(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=y();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Em)for(a=1,b=0;b<Em.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Em.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Gm=t("ytLoggingTimeDocumentNonce_")||Fm();z("ytLoggingTimeDocumentNonce_",Gm);function Hm(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Im(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt_logging_screen.getRootVeType",function(a){return M(Im(void 0===a?0:a),void 0)});
function Jm(){var a=M("csn-to-ctt-auth-info");a||(a={},Rj("csn-to-ctt-auth-info",a));return a}
function Km(a){a=void 0===a?0:a;var b=M(Hm(a));b||0!=a||(Vj("kevlar_client_side_screens")||Vj("c3_client_side_screens")?b="UNDEFINED_CSN":b=M("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",Km);function Lm(a,b,c){var d=Jm();(c=Km(c))&&delete d[c];b&&(d[a]=b)}
z("yt_logging_screen.getCttAuthInfo",function(a){return Jm()[a]});
z("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==M(Hm(c))||b!==M(Im(c)))Lm(a,d,c),Rj(Hm(c),a),Rj(Im(c),b),0==c&&(b=function(){setTimeout(function(){a&&um("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Gm,clientScreenNonce:a},Dm)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Mm(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=Qe(a,b)+c;a=a instanceof lc?a:tc(a);d.href=oc(a)}
function Nm(a){(window.ytspf||{}).enabled?spf.navigate(a):Mm(a)}
;function Om(){Rl.call(this,"button");this.f=null;this.h=[];this.g={}}
A(Om,Rl);Da(Om);h=Om.prototype;h.register=function(){Tl(this,"click",this.lc);Tl(this,"keydown",this.Cc);Tl(this,"keypress",this.Dc);Sl(this,"page-scroll",this.Rd)};
h.unregister=function(){Ul(this,"click",this.lc);Ul(this,"keydown",this.Cc);Ul(this,"keypress",this.Dc);Pm(this);this.g={};Om.H.unregister.call(this)};
h.lc=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.Cc=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Qm(this,a))){var d=function(g){var k="";g.tagName&&(k=g.tagName.toLowerCase());return"ul"==k||"table"==k},e;
d(b)?e=b:e=se(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ie;else"table"==e&&(f=this.he);f&&Rm(this,a,b,c,v(f,this))}}};
h.Rd=function(){var a=this.g;if(0!=Jb(a))for(var b in a){var c=a[b],d=De(c.activeButtonNode||c.parentNode,V(this));if(void 0==d||void 0==c)break;Sm(this,d,c,!0)}};
function Rm(a,b,c,d,e){var f=vl(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=Tm(a,c))?(b=le(d),"a"==b.tagName.toLowerCase()?Mm(b.href):Ck(b)):g&&Um(a,b):f?27==d.keyCode?(Tm(a,c),Um(a,b)):e(b,c,d):(a=G(b,V(a,"reverse"))?38:40,d.keyCode==a&&(Ck(b),d.preventDefault()))}
h.Dc=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Qm(this,a),vl(a)&&c.preventDefault())};
function Tm(a,b){var c=V(a,"menu-item-highlight"),d=F(c,b);d&&I(d,c);return d}
function Vm(a,b,c){H(c,V(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=V(a,"item-id-"+Ja(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.he=function(a,b,c){var d=Tm(this,b),e=kk("table",null,b);b=Td(document,"td",null,e);d=Wm(d,b,Td(document,"td",null,kk("tr",null,e)).length,c);-1!=d&&(Vm(this,a,b[d]),c.preventDefault())};
h.ie=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Tm(this,b);b=ab(Td(document,"li",null,b),vl);Vm(this,a,b[Wm(d,b,1,c)]);c.preventDefault()}};
function Wm(a,b,c,d){var e=b.length;a=Za(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Xm(a,b){var c=b.iframeMask;c||(c=ee("IFRAME"),c.src='javascript:""',Ef(c,V(a,"menu-mask")),yl(c),b.iframeMask=c);return c}
function Sm(a,b,c,d){var e=De(b,V(a,"group")),f=!!a.I(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=of(b);if(G(b,V(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(p){}}G(b,"flip")&&(G(b,V(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.I(b,"button-has-sibling-menu")?l=ff(e):a.I(b,"button-menu-root-container")&&(l=Ym(a,b));D&&!pd("8")&&(l=null);if(l){var m=of(l);m=new Ye(-m.top,m.left,m.top,-m.left)}l=new Ld(0,1);G(b,V(a,"center-menu"))&&(l.x-=Math.round((mf(c).width-mf(b).width)/
2));d&&(l.y+=Yd(document).y);if(a=Xm(a,b))b=mf(c),a.style.width=b.width+"px",a.style.height=b.height+"px",oj(e,f,a,g,l,m,197),d&&$e(a,"position","fixed");oj(e,f,c,g,l,m,197)}
function Ym(a,b){if(a.I(b,"button-menu-root-container")){var c=a.I(b,"button-menu-root-container");return De(b,c)}return document.body}
h.rd=function(a){if(a){var b=Qm(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.I(a,"button-has-sibling-menu")?c=a.parentNode:c=Ym(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Xm(this,a);d&&c.appendChild(d);(c=!!this.I(a,"button-menu-fixed"))&&(this.g[gk(a).toString()]=b);Sm(this,a,b,c);Lk("yt-uix-button-menu-before-show",a,b);xl(b);d&&xl(d);
this.cb(a,"button-menu-action",!0);H(a,V(this,"active"));b=v(this.qd,this,a,!1);d=v(this.qd,this,a,!0);c=v(this.kf,this,a,void 0);this.f&&Qm(this,this.f)==Qm(this,a)||Pm(this);U("yt-uix-button-menu-show",a);zk(this.h);this.h=[O(document,"click",d),O(document,"contextmenu",b),O(window,"resize",c)];this.f=a}}};
function Um(a,b){if(b){var c=Qm(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");yl(c);a.cb(b,"button-menu-action",!1);var d=Xm(a,b),e=gk(c).toString();delete a.g[e];P(function(){d&&d.parentNode&&(yl(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=De(b,V(a,"group"));
var f=[V(a,"active")];e&&f.push(V(a,"group-active"));Gf(b,f);U("yt-uix-button-menu-hide",b);zk(a.h);a.h.length=0}}
h.kf=function(a,b){var c=Qm(this,a);if(c){b&&(b instanceof uc?Fc(c,b):re(c,b));var d=!!this.I(a,"button-menu-fixed");Sm(this,a,c,d)}};
h.qd=function(a,b,c){c=Ak(c);var d=De(c,V(this));if(d){d=Qm(this,d);var e=Qm(this,a);if(d==e)return}d=De(c,V(this,"menu"));e=d==Qm(this,a);var f=G(c,V(this,"menu-item")),g=G(c,V(this,"menu-close"));if(!d||e&&(f||g))Um(this,a),d&&b&&this.I(a,"button-menu-indicate-selected")&&((a=F(V(this,"content"),a))&&re(a,ze(c)),Zm(this,d,c))};
function Zm(a,b,c){var d=V(a,"menu-item-selected");B(Sd(d,b),function(e){I(e,d)});
H(c.parentNode,d)}
function Qm(a,b){if(!b.widgetMenu){var c=a.I(b,"button-menu-id");c=c&&E(c);var d=V(a,"menu");c?Ff(c,[d,V(a,"menu-external")]):c=F(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return G(a,V(this,"toggled"))};
h.toggle=function(a){if(this.I(a,"button-toggle")){var b=De(a,V(this,"group")),c=V(this,"toggled"),d=G(a,c);if(b&&this.I(b,"button-toggle-group")){var e=this.I(b,"button-toggle-group");B(Sd(V(this),b),function(f){f!=a||"optional"==e&&d?(I(f,c),f.removeAttribute("aria-pressed")):(H(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Jf(a,c)}};
h.click=function(a){if(Qm(this,a)){var b=Qm(this,a);if(b){var c=De(b.activeButtonNode||b.parentNode,V(this));c&&c!=a?(Um(this,c),P(v(this.rd,this,a),1)):vl(b)?Um(this,a):this.rd(a)}a.focus()}this.cb(a,"button-action")};
function Pm(a){a.f&&Um(a,a.f)}
;function $m(a){Rl.call(this,a);this.h=null}
A($m,Rl);h=$m.prototype;h.ca=function(a){var b=Rl.prototype.ca.call(this,a);return b?b:a};
h.register=function(){Sl(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){an(this);$m.H.dispose.call(this)};
h.I=function(a,b){var c=$m.H.I.call(this,a,b);return c?c:(c=$m.H.I.call(this,a,"card-config"))&&(c=t(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.ca(a);if(b){H(b,V(this,"active"));var c=bn(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;cn(this,a,c);var d=V(this,"card-visible"),e=this.I(a,"card-delegate-show")&&this.I(b,"card-action");this.cb(b,"card-action",a);this.h=a;yl(c);P(v(function(){e||(xl(c),U("yt-uix-card-show",b,a,c));dn(c);H(c,d);U("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function bn(a,b,c){var d=c||b,e=V(a,"card");c=en(a,d);var f=E(V(a,"card")+gk(d));if(f)return a=F(V(a,"card-body"),f),qe(a,c)||(ie(c),a.appendChild(c)),f;f=document.createElement("div");f.id=V(a,"card")+gk(d);Ef(f,e);(d=a.I(d,"card-class"))&&Ff(f,d.split(/\s+/));d=document.createElement("div");d.className=V(a,"card-border");b=a.I(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
V(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;ie(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function cn(a,b,c){var d=a.I(b,"orientation")||"horizontal",e=F(V(a,"anchor"),b)||b,f=a.I(b,"position"),g=!!a.I(b,"force-position"),k=a.I(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var p=13;var q=8}else m&&!l?(p=12,q=9):!m&&l?(p=9,q=12):(p=8,q=13);var x=pf(document.body);f=pf(b);x!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var r=new Ld(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new Ld(b.offsetWidth+6,-12);var R=mf(c);
f=Math.min(f,(d?R.height:R.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);R=null;g||(R=10);b=V(a,"card-flip");a=V(a,"card-reverse");Hf(c,b,m);Hf(c,a,l);R=oj(e,p,c,q,r,null,R);!g&&R&&(R&48&&(m=!m,p^=4,q^=4),R&192&&(l=!l,p^=1,q^=1),Hf(c,b,m),Hf(c,a,l),oj(e,p,c,q,r));k&&(e=parseInt(c.style.top,10),g=Yd(document).y,$e(c,"position","fixed"),$e(c,"top",e-g+"px"));x&&(c.style.right="",e=of(c),e.left=e.left||parseInt(c.style.left,10),g=Wd(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=F("yt-uix-card-body-arrow",c);g=F("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!x&&m||x&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=F("yt-uix-card-arrow",c);m=F("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?mf(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.ca(a)){var b=E(V(this,"card")+gk(a));b&&(I(a,V(this,"active")),I(b,V(this,"card-visible")),yl(b),this.h=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(ie(b.cardMask),b.cardMask=null))}};
function an(a){a.h&&a.hide(a.h)}
h.kd=function(a,b){var c=this.ca(a);if(c){if(b){var d=en(this,c);if(!d)return;b instanceof uc?Fc(d,b):re(d,b)}G(c,V(this,"active"))&&(c=bn(this,a,c),cn(this,a,c),xl(c),dn(c))}};
h.isActive=function(a){return(a=this.ca(a))?G(a,V(this,"active")):!1};
function en(a,b){var c=b.cardContentNode;if(!c){var d=V(a,"content"),e=V(a,"card-content");(c=(c=a.I(b,"card-id"))?E(c):F(d,b))||(c=document.createElement("div"));var f=c;I(f,d);H(f,e);b.cardContentNode=c}return c}
function dn(a){var b=a.cardMask;b||(b=ee("IFRAME"),b.src='javascript:""',Ff(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function fn(){Rl.call(this,"kbd-nav")}
var gn;A(fn,Rl);Da(fn);h=fn.prototype;h.register=function(){Tl(this,"keydown",this.zc);Sl(this,"yt-uix-kbd-nav-move-in",this.Mc);Sl(this,"yt-uix-kbd-nav-move-in-to",this.ke);Sl(this,"yt-uix-kbd-move-next",this.Nc);Sl(this,"yt-uix-kbd-nav-move-to",this.vb)};
h.unregister=function(){Ul(this,"keydown",this.zc);zk(gn)};
h.zc=function(a,b,c){var d=c.keyCode;if(a=De(a,V(this)))switch(d){case 13:case 32:this.Mc(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Lf(a,"kbdNavMoveOut");!c;){c=De(a.parentElement,V(this));if(!c)break a;c=Lf(c,"kbdNavMoveOut")}c=E(c);this.vb(c);U("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&G(a,V(this,"list")))switch(d){case 40:this.Nc(b,a);break;case 38:d=document.activeElement==a,a=hn(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),jn(this,a[b]))}c.preventDefault()}};
h.Mc=function(a){var b=Lf(a,"kbdNavMoveIn");b=E(b);kn(this,a,b);this.vb(b)};
h.ke=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}kn(this,d,a);this.vb(a)};
h.vb=function(a){if(a)if(we(a))a.focus();else{var b=se(a,function(c){return ne(c)?we(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function kn(a,b,c){if(b&&c)if(H(c,V(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Kf&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.Nc=function(a,b){var c=document.activeElement==b,d=hn(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),jn(this,d[c]))};
function jn(a,b){if(b){var c=Be(b,"LI");c&&(H(c,V(a,"highlight")),gn=O(b,"blur",v(function(d){I(d,V(this,"highlight"));zk(gn)},a,c)))}}
function hn(a){if("UL"!=a.tagName.toUpperCase())return[];a=ab(ke(a),function(b){return"LI"==b.tagName.toUpperCase()});
return ab(bb(a,function(b){return vl(b)?se(b,function(c){return ne(c)?we(c):!1}):!1}),function(b){return!!b})}
;function ln(){Rl.call(this,"menu");this.g=this.f=null;this.h={};this.l={};this.i=null}
A(ln,Rl);Da(ln);function mn(a){var b=ln.getInstance();if(G(a,V(b)))return a;var c=b.ca(a);return c?c:De(a,V(b,"content"))==b.f?b.g:null}
h=ln.prototype;h.register=function(){Tl(this,"click",this.yc);Tl(this,"mouseenter",this.Od);Sl(this,"page-scroll",this.wf);Sl(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.ca(a);nn(this,a)});
this.i=new K};
h.unregister=function(){Ul(this,"click",this.yc);this.g=this.f=null;zk(sb(Lb(this.h)));this.h={};Hb(this.l,function(a){ie(a)},this);
this.l={};eg(this.i);this.i=null;ln.H.unregister.call(this)};
h.yc=function(a,b,c){a&&(b=on(this,a),!b.disabled&&jk(c.target,b)&&pn(this,a))};
h.Od=function(a,b,c){a&&G(a,V(this,"hover"))&&jk(c.target,on(this,a))&&pn(this,a,!0)};
h.wf=function(){this.f&&this.g&&qn(this,this.g,this.f)};
function qn(a,b,c){var d=rn(a,b);if(d){var e=mf(c);if(e instanceof Nd){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=lf(e,!0);d.style.height=lf(f,!0)}c==a.f&&(e=9,f=8,G(b,V(a,"reversed"))&&(e^=1,f^=1),G(b,V(a,"flipped"))&&(e^=4,f^=4),a=new Ld(0,1),d&&oj(b,e,d,f,a,null,197),oj(b,e,c,f,a,null,197))}
function pn(a,b,c){sn(a,b)&&!c?nn(a,b):(tn(a,b),!a.f||jk(b,a.f)?a.sd(b):qj(a.i,v(a.sd,a,b)))}
h.sd=function(a){if(a){var b=un(this,a);if(b){Lk("yt-uix-menu-before-show",a,b);this.f?jk(a,this.f)||nn(this,this.g):(this.g=a,this.f=b,G(a,V(this,"sibling-content"))||(ie(b),document.body.appendChild(b)),b.style.minWidth=on(this,a).offsetWidth-2+"px");var c=rn(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);I(b,V(this,"content-hidden"));qn(this,a,b);Ff(on(this,a),[V(this,"trigger-selected"),"yt-uix-button-toggled"]);U("yt-uix-menu-show",a);vn(b);wn(this,a);U("yt-uix-kbd-nav-move-in-to",
b);var d=v(this.xf,this,a),e=v(this.fe,this,a);c=Ja(a).toString();this.h[c]=[O(b,"click",e),O(document,"click",d)];G(a,V(this,"indicate-selected"))&&(d=v(this.ge,this,a),this.h[c].push(O(b,"click",d)));G(a,V(this,"hover"))&&(a=v(this.Pd,this,a),this.h[c].push(O(document,"mousemove",a)))}}};
h.Pd=function(a,b){var c=Ak(b);c&&(jk(c,on(this,a))||xn(this,c)||yn(this,a))};
h.xf=function(a,b){var c=Ak(b);if(c){if(xn(this,c)){var d=De(c,V(this,"content")),e=Be(c,"LI");e&&d&&qe(d,e)&&Lk("yt-uix-menu-item-clicked",c);c=De(c,V(this,"close-on-select"));if(!c)return;d=mn(c)}nn(this,d||a)}};
function tn(a,b){if(b){var c=De(b,V(a,"content"));c&&B(Sd(V(a),c),function(d){!jk(d,b)&&sn(this,d)&&yn(this,d)},a)}}
function nn(a,b){if(b){var c=[];c.push(b);var d=un(a,b);d&&(d=Sd(V(a),d),d=nb(d),c=c.concat(d),B(c,function(e){sn(this,e)&&yn(this,e)},a))}}
function yn(a,b){if(b){var c=un(a,b);Gf(on(a,b),[V(a,"trigger-selected"),"yt-uix-button-toggled"]);H(c,V(a,"content-hidden"));var d=un(a,b);d&&Ud(d,{"aria-expanded":"false"});(d=rn(a,b))&&d.parentNode&&ie(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.i&&a.i.Z("ROOT_MENU_REMOVED"));U("yt-uix-menu-hide",b);c=Ja(b).toString();zk(a.h[c]);delete a.h[c]}}
h.fe=function(a,b){var c=Ak(b);c&&zn(this,a,c)};
h.ge=function(a,b){var c=Ak(b);if(c){var d=on(this,a);if(d&&(c=Be(c,"LI")))if(c=ze(c).trim(),d.hasChildNodes()){var e=Om.getInstance();(d=F(V(e,"content"),d))&&re(d,c)}else re(d,c)}};
function wn(a,b){var c=un(a,b);if(c){B(c.children,function(e){"LI"==e.tagName&&Ud(e,{role:"menuitem"})});
Ud(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ja(c),c.id=d);(c=on(a,b))&&Ud(c,{"aria-controls":d})}}
function zn(a,b,c){var d=un(a,b);d&&G(b,V(a,"checked"))&&(a=Be(c,"LI"))&&(a=F("yt-ui-menu-item-checked-hid",a))&&(B(Sd("yt-ui-menu-item-checked",d),function(e){If(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),If(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function sn(a,b){var c=un(a,b);return c?!G(c,V(a,"content-hidden")):!1}
function vn(a){B(Td(document,"UL",null,a),function(b){b.tabIndex=0;var c=fn.getInstance();Ff(b,[V(c),V(c,"list")])})}
function un(a,b){var c=N(b,"menu-content-id");return c&&(c=E(c))?(Ff(c,[V(a,"content"),V(a,"content-external")]),c):b==a.g?a.f:F(V(a,"content"),b)}
function rn(a,b){var c=Ja(b).toString(),d=a.l[c];if(!d){d=ee("IFRAME");d.src='javascript:""';var e=[V(a,"mask")];B(Df(b),function(f){e.push(f+"-mask")});
Ff(d,e);a.l[c]=d}return d||null}
function on(a,b){return F(V(a,"trigger"),b)}
function xn(a,b){return jk(b,a.f)||jk(b,a.g)}
;function An(){$m.call(this,"clickcard");this.f={};this.g={}}
A(An,$m);Da(An);h=An.prototype;h.register=function(){An.H.register.call(this);Tl(this,"click",this.nc,"target");Tl(this,"click",this.mc,"close")};
h.unregister=function(){An.H.unregister.call(this);Ul(this,"click",this.nc,"target");Ul(this,"click",this.mc,"close");for(var a in this.f)zk(this.f[a]);this.f={};for(a in this.g)zk(this.g[a]);this.g={}};
h.nc=function(a,b,c){c.preventDefault();b=Be(c.target,"button");if(!b||!b.disabled){b=this.I(a,"card-target");var d;b?d=Rd(document,b):d=a;a=d;d=this.ca(a);this.I(d,"disabled")||(G(d,V(this,"active"))?(this.hide(a),I(d,V(this,"active"))):(this.show(a),H(d,V(this,"active"))))}};
h.show=function(a){An.H.show.call(this,a);var b=this.ca(a),c=Ja(a).toString();if(!N(b,"click-outside-persists")){if(this.f[c])return;b=O(document,"click",v(this.oc,this,a));var d=O(window,"blur",v(this.oc,this,a));this.f[c]=[b,d]}a=O(window,"resize",v(this.kd,this,a,void 0));this.g[c]=a};
h.hide=function(a){An.H.hide.call(this,a);a=Ja(a).toString();var b=this.f[a];b&&(zk(b),this.f[a]=null);if(b=this.g[a])zk(b),delete this.g[a]};
h.oc=function(a,b){var c="yt-uix"+(this.j?"-"+this.j:"")+"-card",d=null;b.target&&(d=De(b.target,c)||De(mn(b.target),c));(d=d||De(document.activeElement,c)||(document.activeElement?De(mn(document.activeElement),c):null))||this.hide(a)};
h.mc=function(a){(a=De(a,V(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Bn(){$m.call(this,"hovercard")}
A(Bn,$m);Da(Bn);h=Bn.prototype;h.register=function(){Tl(this,"mouseenter",this.Hc,"target");Tl(this,"mouseleave",this.Jc,"target");Tl(this,"mouseenter",this.Ic,"card");Tl(this,"mouseleave",this.Kc,"card")};
h.unregister=function(){Ul(this,"mouseenter",this.Hc,"target");Ul(this,"mouseleave",this.Jc,"target");Ul(this,"mouseenter",this.Ic,"card");Ul(this,"mouseleave",this.Kc,"card")};
h.Hc=function(a){if(Cn!=a){Cn&&(this.hide(Cn),Cn=null);var b=v(this.show,this,a),c=parseInt(this.I(a,"delay-show"),10);b=P(b,-1<c?c:200);bk(a,"card-timer",b.toString());Cn=a;a.alt&&(bk(a,"card-alt",a.alt),a.alt="");a.title&&(bk(a,"card-title",a.title),a.title="")}};
h.Jc=function(a){var b=parseInt(this.I(a,"card-timer"),10);Q(b);this.ca(a).isCardHidable=!0;b=parseInt(this.I(a,"delay-hide"),10);b=-1<b?b:200;P(v(this.Vd,this,a),b);if(b=this.I(a,"card-alt"))a.alt=b;if(b=this.I(a,"card-title"))a.title=b};
h.Vd=function(a){this.ca(a).isCardHidable&&(this.hide(a),Cn=null)};
h.Ic=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.Kc=function(a){a&&this.hide(a.cardTargetNode)};
var Cn=null;function Dn(a,b,c,d,e,f){this.f=a;this.C=null;this.h=F("yt-dialog-fg",this.f)||this.f;if(a=F("yt-dialog-title",this.h)){var g="yt-dialog-title-"+Ja(this.h);a.setAttribute("id",g);this.h.setAttribute("aria-labelledby",g)}this.h.setAttribute("tabindex","-1");this.A=F("yt-dialog-focus-trap",this.f);this.F=!1;this.i=new K;this.G=[];this.G.push(Bk(this.f,"click",v(this.te,this),"yt-dialog-dismiss"));this.G.push(O(this.A,"focus",v(this.zd,this),!0));En(this);this.J=b;this.N=c;this.L=d;this.u=e;this.O=f;
this.l=this.j=null}
var Fn={LOADING:"loading",Lf:"content",Wf:"working"};function En(a){a=F("yt-dialog-fg-content",a.f);var b=[];Hb(Fn,function(c){b.push("yt-dialog-show-"+c)});
Gf(a,b);H(a,"yt-dialog-show-content")}
h=Dn.prototype;
h.show=function(){if(!this.K()){this.C=document.activeElement;if(!this.L){this.g||(this.g=E("yt-dialog-bg"),this.g||(this.g=ee("div"),this.g.id="yt-dialog-bg",Ef(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Wd(a).height,Xd(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:
e:b<e?b:e}else c=0}this.g.style.height=c+"px";xl(this.g)}this.Ac();c=Gn(this);Hn(c);this.j=O(document,"keydown",v(this.ee,this));this.ac(this.f);this.N&&(this.l=O(document,"click",v(this.Ue,this)));xl(this.f);this.h.setAttribute("tabindex","0");In(this);this.u||H(document.body,"yt-dialog-active");Pm(Om.getInstance());an(An.getInstance());an(Bn.getInstance());U("yt-ui-dialog-show-complete",this)}};
function Jn(){return db(Sd("yt-dialog"),function(a){return vl(a)})}
h.Ac=function(){if(!this.O){var a=this.f;Hf(document.body,"hide-players",!0);a&&Hf(a,"preserve-players",!0)}};
function Gn(a){var b=Td(document,"iframe",null,a.f);B(b,function(c){var d=N(c,"onload");d&&(d=t(d))&&O(c,"load",d);if(d=N(c,"src"))c.src=d},a);
return nb(b)}
function Hn(a){B(document.getElementsByTagName("iframe"),function(b){-1==Za(a,b)&&H(b,"iframe-hid")})}
function Kn(){B(Sd("iframe-hid"),function(a){I(a,"iframe-hid")})}
h.te=function(a){a=a.currentTarget;a.disabled||(a=N(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.K()){this.i.Z("pre-all");this.i.Z("pre-"+a);yl(this.f);an(An.getInstance());an(Bn.getInstance());this.h.setAttribute("tabindex","-1");Jn()||(yl(this.g),this.u||I(document.body,"yt-dialog-active"),nk(),Kn());this.j&&(zk(this.j),this.j=null);this.l&&(zk(this.l),this.l=null);var b=this.f;if(b){var c=N(b,"player-ready-pubsub-key");c&&(Kk(c),dk(b,"player-ready-pubsub-key"))}this.i.Z("post-all");U("yt-ui-dialog-hide-complete",this);"cancel"==a&&U("yt-ui-dialog-cancelled",
this);this.i&&this.i.Z("post-"+a);this.C&&this.C.focus()}};
h.setTitle=function(a){re(F("yt-dialog-title",this.f),a)};
h.ee=function(a){P(v(function(){this.J||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&G(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Ue=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.ac=function(a){var b=S("player-added",this.Ac,this);bk(a,"player-ready-pubsub-key",b)};
h.K=function(){return this.F};
h.dispose=function(){vl(this.f)&&this.dismiss("dispose");zk(this.G);this.G.length=0;P(v(function(){this.C=null},this),0);
this.A=this.h=null;this.i.dispose();this.i=null;this.F=!0};
h.zd=function(a){a.stopPropagation();In(this)};
function In(a){P(v(function(){this.h&&this.h.focus()},a),0)}
z("yt.ui.Dialog",Dn);function Ln(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Sb(b);this.assets=a.assets||{};this.attrs=a.attrs||Sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ln.prototype.clone=function(){var a=new Ln,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ea(c)?a[b]=Sb(c):a[b]=c}return a};var Mn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Nn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function On(a,b){var c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Mn,""),c=c.replace(Nn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Pn(a,b,c)}
function Pn(a,b,c){c=void 0===c?null:c;var d=Qn(a),e=document.getElementById(d),f=e&&N(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=S(d,b),b=""+Ja(b),Rn[b]=f),g||(e=Sn(a,d,function(){N(e,"loaded")||(bk(e,"loaded","true"),U(d),P(w(Mk,d),0))},c)))}
function Sn(a,b,c,d){d=void 0===d?null:d;var e=ee("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Jc(e,Ge(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Tn(a,b){if(a&&b){var c=""+Ja(b);(c=Rn[c])&&Kk(c)}}
function Qn(a){var b=document.createElement("a");Gc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Pc(a)}
var Rn={};function Un(){cg.call(this);this.f=[]}
ka(Un,cg);Un.prototype.B=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.cg)}cg.prototype.B.call(this)};var Vn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Wn(a,b){a=a||"";if(window.spf){var c=a.match(Vn);spf.style.load(a,c?c[1]:"",b);return null}return Xn(a,b)}
function Yn(a,b,c){if(a=M(a,void 0)){var d=w(Wn,a,b);if(c)var e=S(c,function(){Kk(e);d()});
else d()}}
function Xn(a,b){var c=Zn(a),d=document.getElementById(c),e=d&&N(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(S(c,b),Ja(b));return f?d:d=$n(a,c,function(){N(d,"loaded")||(bk(d,"loaded","true"),U(c),P(w(Mk,c),0))})}
function $n(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ge(a);d.rel="stylesheet";d.href=kc(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Zn(a){var b=ee("A");Gc(b,new lc(mc,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Pc(a)}
;function ao(a,b,c,d){cg.call(this);var e=this;this.l=this.ha=a;this.U=b;this.u=!1;this.api={};this.ra=this.J=null;this.F=new K;dg(this,w(eg,this.F));this.i={};this.N=this.ba=this.g=this.ab=this.f=null;this.L=!1;this.j=this.A=null;this.Ea={};this.td=["onReady"];this.Na=null;this.qb=NaN;this.O={};this.h=d;bo(this);this.rb("WATCH_LATER_VIDEO_ADDED",this.De.bind(this));this.rb("WATCH_LATER_VIDEO_REMOVED",this.Ee.bind(this));this.rb("onAdAnnounce",this.vd.bind(this));this.ud=new Un(this);dg(this,w(eg,
this.ud));this.R=0;c?this.R=P(function(){e.loadNewVideoConfig(c)},0):d&&(co(this),eo(this))}
ka(ao,cg);h=ao.prototype;h.getId=function(){return this.U};
h.loadNewVideoConfig=function(a){if(!this.K()){this.R&&(Q(this.R),this.R=0);a instanceof Ln||(a=new Ln(a));this.ab=a;this.f=a.clone();co(this);this.ba||(this.ba=fo(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=lf(Number(a)||a,!0);if(a=this.f.attrs.height)this.l.style.height=lf(Number(a)||a,!0);eo(this);this.u&&go(this)}};
function co(a){var b;a.h?b=a.h.rootElementId:b=a.f.attrs.id;a.g=b||a.g;"video-player"==a.g&&(a.g=a.U,a.f.attrs.id=a.U);a.l.id==a.g&&(a.g+="-player",a.f.attrs.id=a.g)}
h.Cd=function(){return this.ab};
function go(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function ho(a){var b=!0,c=io(a);c&&a.f&&(a=jo(a),b=N(c,"version")===a);return b&&!!t("yt.player.Application.create")}
function eo(a){if(!a.K()&&!a.L){var b=ho(a);if(b&&"html5"==(io(a)?"html5":null))a.N="html5",a.u||ko(a);else if(lo(a),a.N="html5",b&&a.j)a.ha.appendChild(a.j),ko(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.A=function(){c=!0;if(a.h)var d=a.h.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==Ok(d||"").player_bootstrap_method?t("yt.player.Application.createAlternate")||t("yt.player.Application.create"):t("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.ha,e,a.h);
ko(a)};
a.L=!0;b?a.A():(On(jo(a),a.A),Wn(a.h?a.h.cssUrl:a.f.assets.css),mo(a)&&!c&&z("yt.player.Application.create",null))}}}
function io(a){var b=E(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
function ko(a){if(!a.K()){var b=io(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.L=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||no(a)):a.qb=P(function(){ko(a)},50)}}
function no(a){bo(a);a.u=!0;var b=io(a);b.addEventListener&&(a.J=oo(a,b,"addEventListener"));b.removeEventListener&&(a.ra=oo(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=oo(a,b,e))}for(var f in a.i)a.J(f,a.i[f]);go(a);a.ba&&a.ba(a.api);a.F.Z("onReady",a.api)}
function oo(a,b,c){var d=b[c];return function(){try{return a.Na=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.Na=e,sk(e))}}}
function bo(a){a.u=!1;if(a.ra)for(var b in a.i)a.ra(b,a.i[b]);for(var c in a.O)Q(parseInt(c,10));a.O={};a.J=null;a.ra=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.rb.bind(a);a.api.removeEventListener=a.Ze.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Dd.bind(a);a.api.getPlayerType=a.Fd.bind(a);a.api.getCurrentVideoConfig=a.Cd.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.je.bind(a)}
h.je=function(){return this.u};
h.rb=function(a,b){var c=this,d=fo(this,b);if(d){if(!hb(this.td,a)&&!this.i[a]){var e=po(this,a);this.J&&this.J(a,e)}this.F.subscribe(a,d);"onReady"==a&&this.u&&P(function(){d(c.api)},0)}};
h.Ze=function(a,b){if(!this.K()){var c=fo(this,b);c&&rj(this.F,a,c)}};
function fo(a,b){var c=b;if("string"==typeof b){if(a.Ea[b])return a.Ea[b];c=function(){var d=t(b);d&&d.apply(n,arguments)};
a.Ea[b]=c}return c?c:null}
function po(a,b){var c="ytPlayer"+b+a.U;a.i[b]=c;n[c]=function(d){var e=P(function(){if(!a.K()){a.F.Z(b,d);var f=a.O,g=String(e);g in f&&delete f[g]}},0);
Qb(a.O,String(e))};
return c}
h.vd=function(a){U("a11y-announce",a)};
h.De=function(a){U("WATCH_LATER_VIDEO_ADDED",a)};
h.Ee=function(a){U("WATCH_LATER_VIDEO_REMOVED",a)};
h.Fd=function(){return this.N||(io(this)?"html5":null)};
h.Dd=function(){return this.Na};
function lo(a){a.cancel();bo(a);a.N=null;a.f&&(a.f.loaded=!1);var b=io(a);b&&(ho(a)||!mo(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));ge(a.ha)}
h.cancel=function(){this.A&&Tn(jo(this),this.A);Q(this.qb);this.L=!1};
h.B=function(){lo(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){rk(b)}this.Ea=null;for(var a in this.i)n[this.i[a]]=null;this.ab=this.f=this.api=null;delete this.ha;delete this.l;cg.prototype.B.call(this)};
function mo(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function jo(a){return a.h?a.h.jsUrl:a.f.assets.js}
;var qo={},ro="player_uid_"+(1E9*Math.random()>>>0);function so(){var a=document.getElementById("player-api");if(!a)return null;var b=ro+"_"+Ja(a),c=qo[b];c||(c=new ao(a,b),qo[b]=c);return c.api}
;function to(){Hf(E("page-container"),"remote-connected",!!W)}
;var uo=!1;function vo(a){Hf(E("player-mole-container"),"watch-mole",a);a=E("player-mole-container");var b=E("player");uo=!b||G(b,"off-screen")||!a||G(a,"watch-mole");(a=so())&&a.isReady()&&a.setMinimized(uo)}
;function wo(a,b,c){c=void 0===c?{}:c;var d=Dm;M("ytLoggingEventsDefaultDisabled",!1)&&Dm==Dm&&(d=null);um(a,b,d,c)}
;function xo(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ca(ba(c)))}
ka(xo,Error);function yo(a){var b=t("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0):(b=Sj(),b.push([a,"ERROR",void 0,void 0,void 0,void 0]),Rj("ERRORS",b))}
function zo(a){var b=t("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0):(b=Sj(),b.push([a,"WARNING",void 0,void 0,void 0,void 0]),Rj("ERRORS",b))}
;var Ao=window,Bo=Ao.performance||Ao.mozPerformance||Ao.msPerformance||Ao.webkitPerformance||{};function Co(a,b){Al.call(this,1,arguments)}
ka(Co,Al);function Do(a,b){Al.call(this,1,arguments)}
ka(Do,Al);var Eo=new Bl("aft-recorded",Co),Fo=new Bl("timing-sent",Do);var Go=!1;function Ho(){var a=Io(void 0);if(a.aft)return a.aft;for(var b=M("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Jo(a){var b;(b=t("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Ko(a){a=Jo(a);a.info||(a.info={});return a.info}
function Io(a){a=Jo(a);a.tick||(a.tick={});return a.tick}
function Lo(a){var b=Jo(a).nonce;b||(b=Fm(),Jo(a).nonce=b);return b}
function Mo(){var a=Io(""),b=Ho();b&&!Go&&(Jl(Eo,new Co(Math.round(b-a._start),void 0)),Go=!0)}
;function No(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Oo(a)||c.some(function(e){return!Oo(e)}))throw Error("Only objects may be merged.");
c=ba(c);for(d=c.next();!d.done;d=c.next())Po(a,d.value);return a}
function Po(a,b){for(var c in b)if(Oo(b[c])){if(c in a&&!Oo(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Po(a[c],b[c])}else if(Qo(b[c])){if(c in a&&!Qo(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ro(a[c],b[c])}else a[c]=b[c];return a}
function Ro(a,b){for(var c=ba(b),d=c.next();!d.done;d=c.next())d=d.value,Oo(d)?a.push(Po({},d)):Qo(d)?a.push(Ro([],d)):a.push(d);return a}
function Oo(a){return"object"===typeof a&&!Array.isArray(a)}
function Qo(a){return"object"===typeof a&&Array.isArray(a)}
;function So(){var a=t("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function To(a){a=a||"";var b=t("ytcsi.reference");b||(So(),b=t("ytcsi.reference"));if(b[a])return b[a];var c=So(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d}
;var Uo=t("ytLoggingLatencyUsageStats_")||{};z("ytLoggingLatencyUsageStats_",Uo);function Vo(){this.f=0}
function Wo(){Vo.f||(Vo.f=new Vo);return Vo.f}
Vo.prototype.tick=function(a,b,c){Xo(this,"tick_"+a+"_"+b)||wo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Vo.prototype.info=function(a,b){var c=Object.keys(a).join("");Xo(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,wo("latencyActionInfo",a))};
function Xo(a,b){Uo[b]=Uo[b]||{count:0};var c=Uo[b];c.count++;c.time=Xl();a.f||(a.f=El(function(){var d=Xl(),e;for(e in Uo)Uo[e]&&6E4<d-Uo[e].time&&delete Uo[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new xo("CSI data exceeded logging limit with key"),c.params={key:b},0===b.indexOf("info")?zo(c):yo(c)),!0):!1}
;var X={},Yo=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.cseg="creatorInfo.creatorSegment",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="getHomeRequestId",X.GetSearch_rid="getSearchRequestId",X.GetPlayer_rid="getPlayerRequestId",X.GetWatchNext_rid="getWatchNextRequestId",X.GetBrowse_rid=
"getBrowseRequestId",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.prev_browse_id="kabukiInfo.prevBrowseId",X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.ncnp="webInfo.nonPreloadedNodeCount",X.prt=
"playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.aq="tvInfo.appQuality",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="mwebInfo.getSettingsRequestId",X.GetTrending_rid="mwebInfo.getTrendingRequestId",X),Zo=
"isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),$o={},ap=($o.mver="MEASUREMENT_VERSION_",$o.pis="PLAYER_INITIALIZED_STATE_",$o.yt_pt="LATENCY_PLAYER_",$o.pa="LATENCY_ACTION_",$o.yt_vst="VIDEO_STREAM_TYPE_",$o),bp="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function cp(a){return!!M("FORCE_CSI_ON_GEL",!1)||Vj("csi_on_gel")||!!Jo(a).useGel}
function dp(a){a=Jo(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function ep(a,b,c){if(null!==b)if(Ko(c)[a]=b,cp(c)){var d=dp(c);if(d.gelInfos)d.gelInfos["info_"+a]=!0;else{var e={};d.gelInfos=(e["info_"+a]=!0,e)}if(a in Yo){d=Yo[a];hb(Zo,d)&&(b=!!b);a in ap&&"string"===typeof b&&(b=ap[a]+b.toUpperCase());a=d.split(".");e=d={};for(var f=0;f<a.length-1;f++){var g=a[f];e[g]={};e=e[g]}e[a[a.length-1]]=b;b=No({},d)}else hb(bp,a)||(b=new xo("Unknown label logged with GEL CSI"),b.params={label:a},sk(b)),b=void 0;b&&cp(c)&&(a=To(c||""),No(a.info,b),a=dp(c),"gelInfos"in
a||(a.gelInfos={}),No(a.gelInfos,b),c=Lo(c),Wo().info(b,c))}else To(c||"").info[a]=b}
if(Vj("overwrite_polyfill_on_logging_lib_loaded")){var fp=window;fp.ytcsi&&(fp.ytcsi.info=ep)};function gp(a){var b=Io(void 0),c;if(c=Vj("use_first_tick"))c=Io(void 0),c=a in c;if(!c&&("_"!=a[0]&&(c=a,Bo.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Bo.mark(c))),c=Xl(),b[a]=c,b=dp(void 0),b.gelTicks&&(b.gelTicks["tick_"+a]=!0),Xl(),cp(void 0)?(To("").tick[a]=Xl(),b=Lo(void 0),"_start"===a?(c=Wo(),Xo(c,"baseline_"+b)||wo("latencyActionBaselined",{clientActionNonce:b},{timestamp:0})):Wo().tick(a,b,0),Mo(),b=!0):b=!1,!b)){if(!t("yt.timing.pingSent_")&&(c=M("TIMING_ACTION",void 0),b=Io(void 0),
t("ytglobal.timingready_")&&c&&b._start&&Ho())){Mo();c=!0;var d=M("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in b)){c=!1;break}if(c&&!cp(void 0)){e=Io(void 0);d=Ko(void 0);f=e._start;var g=M("CSI_SERVICE_NAME","youtube");c={v:2,s:g,action:M("TIMING_ACTION",void 0)};b=d.srt;void 0!==e.srt&&delete d.srt;if(d.h5jse){var k=window.location.protocol+t("ytplayer.config.assets.js");(k=Bo.getEntriesByName?Bo.getEntriesByName(k)[0]:null)?d.h5jse=Math.round(d.h5jse-k.responseEnd):
delete d.h5jse}e.aft=Ho();var l=Io(void 0);k=l.pbr;var m=l.vc;l=l.pbs;if(k=k&&m&&l&&k<m&&m<l)k=!!Ko(void 0).yt_pvis;k&&"youtube"==g&&(ep("yt_lt","hot_bg",void 0),g=e.vc,k=e.pbs,delete e.aft,d.aft=Math.round(k-g));for(var p in d)"_"!=p.charAt(0)&&(c[p]=d[p]);e.ps=Xl();p={};g=[];for(var q in e)"_"!=q.charAt(0)&&(k=Math.round(e[q]-f),p[q]=k,g.push(q+"."+k));c.rt=g.join(",");(q=t("ytdebug.logTiming"))&&q(c,p);q=!!d.ap;Vj("debug_csi_data")&&(d=t("yt.timing.csiData"),d||(d=[],z("yt.timing.csiData",d)),
d.push({page:location.href,time:new Date,args:c}));d="";for(var x in c)c.hasOwnProperty(x)&&(d+="&"+x+"="+c[x]);x="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&q){var r=void 0===r?"":r;sl(x,r)||pl(x,void 0,void 0,void 0,r)}else pl(x);z("yt.timing.pingSent_",!0);Jl(Fo,new Do(p.aft+(b||0),void 0))}}To("").tick[a]=Xl()}}
v(Bo.clearResourceTimings||Bo.webkitClearResourceTimings||Bo.mozClearResourceTimings||Bo.msClearResourceTimings||Bo.oClearResourceTimings||u,Bo);new kj(hp,1E3);function hp(){gp("vptl");gp("vpl")}
;var T={},ip=null;T.Ub=!1;T.init=function(){var a=E("yt-consent");Bk(a,"click",T.Td,"consent-close");Bk(a,"click",T.Ud,"consent-review");O(window,"message",T.Ye);M("CONSENT_SHOW_DIALOG")&&(a=E("yt-consent-dialog-content"),T.ac(a),T.hd(),tl(Pe({a:"consent",consent:"forced"})),Bk(a,"click",T.Ld,"yt-dialog-dismiss"))};
T.Td=function(){I(document.body,"sitewide-consent-visible");Yj("HideTicker","true",86400,"/");tl(Pe({a:"consent",consent:"later"}))};
T.Ud=function(){T.hd();tl(Pe({a:"consent",consent:"review"}))};
T.Ld=function(a){a=a.currentTarget;a.disabled||(a=N(a,"action")||"",Dn.prototype.dismiss(a),tl(Pe({a:"consent",consent:"dismiss"})),T.mb())};
T.hd=function(){var a=E("yt-consent-dialog");if(a){var b=!!M("CONSENT_SHOW_DIALOG");ip=new Dn(a,b,!b);T.Tb();T.gf();ip.show()}};
T.Tb=function(){try{var a=so();a&&(a.isReady()?(1==a.getPlayerState(a.getPresentingPlayerType())&&(T.Ub=!0),a.pauseVideo()):a.addEventListener("onReady",T.Tb))}catch(b){rk(b)}};
T.mb=function(){try{var a=so();a&&a.isReady()&&T.Ub&&(nk(),a.playVideo(),T.Ub=!1)}catch(b){rk(b)}};
T.ac=function(a){var b=S("player-added",T.Tb,T);bk(a,"player-ready-pubsub-key",b)};
T.gf=function(){Jk()};
T.Ye=function(a){var b=a&&a.data,c=a&&a.origin;a=a&&a.source;var d=!1,e=Ke(c);(e=ak[e]&&ak.hasOwnProperty(e))||(e=Wj("consent_url_override"),e=void 0!==e?String(e):"");if(e){switch(b){case "cb-user-closed":ip.dispose();T.Pc();T.mb();break;case "cb-ui-done-early":ip.dismiss("close");T.mb();d=!0;break;case "cb-ui-done":case "cb-already-consented":ip.dismiss("close");T.Pc();T.mb();d=!0;break;case "verify-origin":a.parent==window&&a.postMessage("verify-origin-reply",c)}d&&(I(document.body,"sitewide-consent-visible"),
tl(Pe({a:"consent",consent:"done"})))}};
T.Pc=function(){Ic(E("yt-consent-iframe"),new hc(ic,fc(new cc(dc,"about:blank"))))};var jp,kp,lp;function mp(){var a=Od(),b=a.f,c=a.createElement("div");c.style.backgroundColor="rgb(1, 2, 3)";a.appendChild(b.body,c);b=cf(c,"backgroundColor");b=b.replace(/ /g,"");lp="rgb(0,0,0)"===b?"black":"rgb(255,255,255)"===b?"white":null;a.Jd(c)}
;function np(){bk(op,"target-id","content")}
function pp(){var a=E(N(op,"target-id"));a.setAttribute("tabindex","0");a.focus();a=hf(E("page-container")).y;window.scrollBy(0,-a)}
var op=null;function qp(a){kp&&jp&&(ge(kp),kp.setAttribute("role","alert"),jp.style.clip="auto",kp.appendChild(document.createTextNode(a)),kp.style.display="none",kp.style.display="inline")}
;function rp(a){aj.call(this,a);this.qb=[];this.ha=[]}
A(rp,aj);rp.prototype.ua=function(){B(this.qb,zk);Kk(this.ha);rp.H.ua.call(this)};function sp(){rp.call(this);this.l=this.i=this.j=null;this.A="horizontal";this.u=null}
ka(sp,rp);sp.prototype.ya=function(){rp.prototype.ya.call(this);this.A=N(this.na(),"overflowable-list-orientation")||"horizontal";this.j=bj(this,"parent-list");this.u=bj(this,"overflow-container");this.i=bj(this,"overflow-list");this.l=bj(this,"overflowable-list-more-button")};
function tp(){var a=[];B(Sd("overflowable-list-root",up),function(b){var c=new sp;dj(c,b);a.push(c)});
return a}
function vp(a,b){var c=wp(a),d=wp(b);return c<d?-1:c==d?0:1}
function xp(a,b){var c=nb(Sd("overflowable-list-item",b));return cb(c,function(d,e){return d+yp(this,e)},0,a)}
function yp(a,b){return"vertical"==a.A?mf(b).height:mf(b).width}
function zp(a){var b=F("overflowable-list-item",a.na());return b?yp(a,b):0}
function wp(a){return xp(a,a.j)+xp(a,a.i)}
;function Ap(a,b,c){this.g=a;this.f=null;(a=b||null)||(a=Bp(this.g));a=Kc("__%s__","("+a.join("|")+")");this.f=new RegExp(a,"g");this.h=c||{}}
var Cp=/__([a-z]+(?:_[a-z]+)*)__/g;function Dp(a,b){var c=Ep(E(a));return new Ap(c,b,void 0)}
function Ep(a){a=a.innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");return a=a.replace(/(\s*--\x3e)?\s*$/,"")}
function Bp(a){var b=[],c={};a.replace(Cp,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
function Fp(a,b){var c=v(function(d,e){return Mc(b[e]||this.h[e]||"")},a);
return a.g.replace(a.f,c)}
;var up,Gp,Hp,Ip;var Jp={Tf:"content-snap-width-1",Uf:"content-snap-width-2",Vf:"content-snap-width-3"};function Kp(){var a=[],b;for(b in Jp)a.push(Jp[b]);return a}
;function Lp(){Mp=Td(document,"html",void 0,void 0)[0];Np=E("appbar-guide-button")}
function Op(a,b){var c=b||!1,d=G(Mp,"show-guide");Hf(Mp,"show-guide",a);Np&&Np.setAttribute("aria-expanded",a);a&&!G(document.documentElement,"no-focus-outline")&&c?(c=F("guide-item",E("guide-container")))&&c.focus():U("guide-hidden");if(a&&!d||!a&&d){d="";if(c=E("page"))d=c.className;d=Pe({"module-id":"guide-main",expanded:!0,auto:!1,"page-class":d,notification:!1});tl("a=guide-toggled"+(d?"&"+d:""),void 0)}(d=E("page"))&&zd&&(c=d.style.width,d.style.width="99.99%",Uc(d.offsetWidth),d.style.width=
c)}
function Pp(){return G(Mp,"show-guide")}
function Qp(){return G(document.body,"guide-pinning-enabled")}
function Rp(){return Qp()&&G(Mp,"guide-pinned")}
var Mp=null,Np=null;function Sp(a){Al.call(this,1,arguments);this.f=a}
A(Sp,Al);function Tp(a,b,c){Al.call(this,1,arguments);this.f=c}
A(Tp,Al);var Up=new Bl("subscription-subscribe-success",Tp),Vp=new Bl("subscription-unsubscribe-success",Sp);var Wp;function Xp(){this.f=Yp}
function Zp(){function a(){var c=F("guide-likes-playlist-icon");if(c)return De(c,"guide-notification-item")}
Wp=E("appbar-main-guide-notification-container");$p(function(){return F("guide-item-container",E("behavior-id-guide-playlists-section"))});
aq("yt-uix-playlistlike-unliked","appbar-guide-notification-playlist-unlike");bq("addto-menu-video-added","appbar-guide-notification-playlist-video-added",cq,null,new Xp);aq("addto-menu-video-removed","appbar-guide-notification-playlist-video-removed");var b=w(E,"VLWL-guide-item");bq("WATCH_LATER_VIDEO_ADDED","appbar-guide-notification-watch-later-video-added",b,1);bq("WATCH_LATER_VIDEO_REMOVED","appbar-guide-notification-watch-later-video-removed",b,-1);bq("yt-uix-videolike-liked","appbar-guide-notification-video-like",
a,1);bq("yt-uix-videolike-unliked","appbar-guide-notification-video-unlike",a,-1);Ll(Vp,dq);Ll(Up,eq)}
function Yp(a){if(!a||E(a.id))return null;var b=["ID","URL","TITLE","NOTIFICATION_OVERLAY_MESSAGE"];a=Fp("RD"==a.playlistType?Dp("appbar-guide-item-template-mix",b):Dp("appbar-guide-item-template-playlist",b),{ID:"VL"+a.id,URL:a.url,TITLE:a.title,NOTIFICATION_OVERLAY_MESSAGE:a.title});return mk(a)}
function cq(a){return E("VL"+a.id+"-guide-item")}
function fq(a,b){var c=Ep(E(a));c=mk(c);if(b){var d=F("appbar-guide-notification-text-content",c);if(d){var e=document.createTextNode(String(" "+b));d&&e&&d.appendChild(e)}}return c}
function bq(a,b,c,d,e){S(a,function(f){var g=c.apply(null,arguments);if(d){var k=F("guide-count-value",g);if(k){var l=k.innerHTML;""===l.trim()||isNaN(l)||re(k,parseInt(l,10)+d)}}!g&&e&&(k=e.f(f),(l=F("guide-item-container",E("behavior-id-guide-playlists-section")))&&k&&he(l,k));gq(b,!!g,f?f.title:null)||((k=F("guide-item-update-notification",g))&&ie(k),k=fq(b),H(k,"guide-item-update-notification"),g.appendChild(k),P(w(H,g,"showing-update-notification"),0),P(w(I,g,"showing-update-notification"),2E3))})}
function $p(a){var b=Yp;S("yt-uix-playlistlike-liked",function(){var c=a(),d=b.apply(null,arguments);gq("appbar-guide-notification-playlist-like",!!c)||(he(c,d),U("guide-playlist-section-updated"))})}
function aq(a,b){var c=cq;S(a,function(){var d=c.apply(null,arguments);hq(d,b,"guide-playlist-section-updated")})}
function hq(a,b,c){gq(b,!!a)||(b=fq(b),H(b,"guide-item-removal-notification"),a.appendChild(b),P(w(H,a,"removing-guide-item"),0),P(function(){ie(a);U(c)},2E3))}
function gq(a,b,c){if(b&&Pp())return!1;ge(Wp);Wp.appendChild(fq(a,c));H(document.body,"show-guide-button-notification");P(w(I,document.body,"show-guide-button-notification"),2E3);return!0}
function eq(a){if(E("guide-subscriptions-promo")){U("force-reload-subscriptions");var b=!0}else b=!1;b||(b=E("guide-channels"),a=a.f,a=Fp(Dp("appbar-guide-item-template-channel",["ID","URL","TITLE","THUMBNAIL_URL","NOTIFICATION_OVERLAY_MESSAGE"]),{ID:a.external_id,URL:a.url,TITLE:a.title,THUMBNAIL_URL:a.thumbnail,NOTIFICATION_OVERLAY_MESSAGE:a.title}),a=mk(a),gq("appbar-guide-notification-subscription",!!b)||(he(b,a),U("guide-channel-section-updated")))}
function dq(a){a=a.f;hq(a?E(a+"-guide-item"):null,"appbar-guide-notification-unsubscription","guide-channel-section-updated")}
;function iq(a,b,c){var d=c&&0<c?c:0;c=d?y()+1E3*d:0;if((d=d?jq():kq())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function lq(a){var b=kq(),c=jq();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function mq(a){try{var b=kq(),c=jq();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function nq(){var a=jq();a&&Cj(a,a.f.sa(!0))}
var jq=bc(function(){var a=new Gj;return a.isAvailable()?new Aj(a):null}),kq=bc(function(){var a=new Hj;
return a.isAvailable()?new Aj(a):null});var oq=[];function pq(a){for(var b=0;b<a.length;b++){var c=a[b];if(G(c,"generic-promo-impression-logging")){for(var d=Sd("generic-promo-impression-feedback",c),e=0;e<d.length;e++){var f={feedback_tokens:[N(d[e],"feedback-token")]};hl("/feed_change_ajax?action_give_feedback=1",{method:"POST",ka:f})}I(c,"generic-promo-impression-logging")}}}
;var qq=[];
function rq(){B(Sd("promoted-button-container"),function(a){a:{var b=N(a,"promo-id");var c=parseInt(N(a,"promo-impression-cap"),10)||0;var d=parseInt(N(a,"promo-impression-delay"),10)||0;if(b&&0<c&&0<d){b="yt-hint-"+b;var e=lq(b)||{},f=e.lastSeen;e=e.impressions||0;if(f&&y()-new Date(f)<1E3*d||e>=c){c=!1;break a}e={lastSeen:y(),impressions:e+1};iq(b,e,2592E3)}c=!0}if(c){if("true"===N(a,"promo-visible")&&(c=An.getInstance(),c.kd(a),"hidden"!=window.getComputedStyle(a).visibility&&(c.show(a),G(a,"hide-hint-on-scroll")&&
(c=E(N(a,"scroll-parent"))||window,qq.push(Dk(c,"scroll",v(sq,this,a)))))),a&&(c=t("yt.www.page.visibilitymonitor.delegateByClass")))a=c(a,t("yt.www.page.visibilitymonitor.States.VISIBLE"),pq,"generic-promo-impression-logging"),oq.push(a)}else(a=F("generic-promo-impression-logging",a))&&I(a,"generic-promo-impression-logging")})}
function sq(a){An.getInstance().hide(a)}
;var tq=t("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",tq);function uq(){this.f=M("ALT_PREF_COOKIE_NAME","PREF");var a=Gd.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(tq[d]=c.toString())}}}
h=uq.prototype;h.get=function(a,b){vq(a);wq(a);var c=void 0!==tq[a]?tq[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){vq(a);wq(a);if(null==b)throw Error("ExpectedNotNull");tq[a]=b.toString()};
function xq(a){return!!((yq("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
function zq(a,b){var c="f"+(Math.floor(a/31)+1),d=1<<a%31,e=yq(c)||0;e=b?e|d:e&~d;0==e?delete tq[c]:(d=e.toString(16),tq[c]=d.toString())}
h.remove=function(a){vq(a);wq(a);delete tq[a]};
h.save=function(){Yj(this.f,this.dump(),63072E3,"/")};
h.clear=function(){for(var a in tq)delete tq[a]};
h.dump=function(){var a=[],b;for(b in tq)a.push(b+"="+encodeURIComponent(String(tq[b])));return a.join("&")};
function wq(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function vq(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function yq(a){a=void 0!==tq[a]?tq[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Da(uq);function Aq(a){if(!Bq||a)Bq=Wd(window);return Bq}
var Bq=null;var Cq=[],Dq=[],Eq=[];
function Fq(){up=E("guide");Gp=E("guide-channels");Hp=E("appbar-guide-menu");Ip=E("appbar-guide-iframe-mask");Zp();up&&(Lp(),G(document.body,"exp-scrollable-guide")||Gq(),Cq.push(Bk(up,"click",Hq,"guide-sort-choice")),G(document.body,"exp-scrollable-guide")?(Iq(Aq(!0)),Dq.push(S("page-resize",Iq))):Dq.push(S("page-resize",Jq)),Dq.push(S("guide-channel-section-updated",Kq)),Dq.push(S("guide-playlist-section-updated",w(Jq,w(Aq,!0)))),Dq.push(S("force-reload-subscriptions",Lq)),Dq.push(S("update-guide-subscriptions",
Mq)),Dq.push(S("guide-hidden",Nq)),rq())}
function Oq(a,b){B(Sd("guide-flyout-container",up),function(c){Cq.push(O(c,a,b))})}
function Pq(a){Qq(a.currentTarget)}
function Nq(){B(Sd("guide-flyout-container",up),function(a){Qq(a)})}
function Qq(a){var b=F("guide-flyout-trigger",a),c=F("guide-flyout-iframe-mask",a);I(F("guide-flyout",a),"flyout-shown");c&&I(c,"flyout-shown");I(b,"on-hover")}
function Rq(a){a=a.currentTarget;var b=F("guide-flyout",a),c=F("guide-flyout-trigger",a),d=F("guide-flyout-iframe-mask",a),e=F("guide-flyout",a),f=sf(e),g=F("guide-channels-list",a),k=Aq(!0),l=F("guide-flyout-trigger",a),m=F("guide-flyout-iframe-mask",a),p=k.height-(Hp?Hp.offsetTop:0);g.style.maxHeight=p-f.top-f.bottom+"px";f=mf(e).height;g=mf(l);l=kf(l);p=Math.min(p-f,Math.max(0,k.height-l.y-g.height/2-f/2));g=l.x+g.width;k=k.width-l.x;e.style.bottom=p+"px";m&&(m.style.height=f+"px",m.style.bottom=
p+"px");"rtl"==document.body.getAttribute("dir")?(e.style.right=k+"px",e.style.left="",m&&(m.style.right=k+"px",m.style.left="")):(e.style.left=g+"px",e.style.right="",m&&(m.style.left=g+"px",m.style.right=""));H(b,"flyout-shown");d&&H(d,"flyout-shown");H(c,"on-hover");U("yt-dom-content-change",a)}
function Sq(){Ip&&Hp&&(Ip.style.height=mf(Hp).height+"px",Ip.style.marginTop=Hp.style.marginTop,Ip.style.top=Hp.style.top)}
function Gq(){Gp=E("guide-channels");Eq=tp();Jq(Aq(!0));Oq("mouseenter",Rq);Oq("mouseleave",Pq)}
function Hq(a){var b=F("guide-sort-button"),c=N(b,"guide-sort")||"",d=N(a.currentTarget,"guide-sort")||"";c!=d&&(bk(b,"guide-sort",d),hl("/guide_channels_ajax?action_set_guide_sort=1",{method:"POST",ob:{sort:d},format:"JSON",onSuccess:function(e,f){Mq(f);B(Sd("guide-sort-choice"),function(g){var k=N(g,"guide-sort");Om.getInstance();g=g.parentNode;k=d==k;var l=kk("span","yt-uix-button-icon-wrapper",g);if(!l&&k){var m=ae("SPAN",{"class":"yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"}),p=ae("DIV",
{"class":"yt-uix-button-icon-dropdown-checked"});m.appendChild(p);he(g,m)}ul(l,k)})}}))}
function Mq(a){var b=a.channels;b&&(a=E("guide-subscriptions-section"),b=fe(Ee(b)),je(b,a),Eq=tp(),Tq(),B(Sd("yt-uix-tooltip-tip-visible"),function(c){I(c,"yt-uix-tooltip-tip-visible")}))}
function Tq(){Gq();U("yt-dom-content-change",up)}
function Kq(){Gp&&(Gp.firstElementChild?Tq():Lq())}
function Uq(a){return fb(Sd("guide-item",up),function(b){return N(b,"serialized-endpoint")==a})}
function Iq(a){Hp&&$e(Hp,"max-height",a.height-50+"px")}
function Jq(a){if(Eq&&!G(document.body,"exp-scrollable-guide")){var b=Vq(a),c=Eq.length,d=0;Eq.sort(vp||rb);B(Eq,function(e,f){var g=wp(e)-d;g=Math.min(g,b/(c-f));b-=(c-f)*g;g=d+=g;g-=g>=wp(e)?0:e.l?yp(e,e.l):0;g=Math.max(zp(e),g);var k=xp(e,e.j);if(k>g)for(;k>g;){var l=e.j;if(l=void 0!==l.lastElementChild?l.lastElementChild:me(l.lastChild,!1)){var m=yp(e,l);k-=m;he(e.i,l)}else break}else if(k<g){for(l=document.createDocumentFragment();0!=ke(e.i).length;)if(m=le(e.i)){var p=yp(e,m);if(k+p<=g)k+=p,
l.appendChild(m);else break}else break;e.j.appendChild(l)}Hf(e.u,"empty-overflow-list",0==ke(e.i).length)});
Sq()}}
function Vq(a){var b=Hp,c=E("guide-container");if(!c||!b)return 0;var d=sf(c);d=d.top+d.bottom;c=le(c).clientHeight;var e=0;B(Eq,function(f){e+=f.j?xp(f,f.j):0;e+=0==ke(f.i).length?0:f.l?yp(f,f.l):0});
c=d+c-e;return(Rp()?b.clientHeight:a.height-50)-c}
function Lq(){hl("/guide_channels_ajax?action_load_subs_and_footer=1",{format:"JSON",onSuccess:function(a,b){Mq(b)}})}
;function Wq(){var a={action_get_delegate_accounts:1,owner_picker_redirect_url:M("OWNER_PICKER_REDIRECT_URL")},b={};void 0!==Xq()&&(b.ar=Xq());void 0!==Tj().nv&&(b.nv=Tj().nv);Object.assign(a,b);a.o=Tj().o;return a}
function Xq(){if(void 0!==Tj().earst){var a=Yq+(Date.now()-Zq);a=""+(a-100*Math.floor(a%1E3/100)-1E5*Math.floor(a%1E6/1E5))}else a=Tj().ar;return a}
var Yq=Date.now(),Zq=Date.now(),Uj={o:"U"},$q=Tj().earst;void 0!==$q&&(Yq=$q,Zq=Date.now());var ar=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",ar);function br(a){var b=void 0===b?{}:b;a=(a=a in ar?ar[a]:void 0)||"";var c={},d;for(d in b){c.Za=d;var e=function(f){return function(){return String(b[f.Za])}}(c);
a=a.replace(new RegExp("\\$\\{"+c.Za+"\\}","gi"),e);a=a.replace(new RegExp("\\$"+c.Za,"gi"),e);c={Za:c.Za}}return a}
function cr(a){var b="MASTHEAD_NOTIFICATIONS_LABEL"in ar?ar.MASTHEAD_NOTIFICATIONS_LABEL:{},c=M("I18N_PLURAL_RULES");c||(c=function(d){return 1==d?"one":"other"});
return(b=b["case"+a]||b[c(a)])?b.replace("#",a.toString()):a+""}
;var dr=null;function er(a){var b={key:"HighPriorityNotificationTimestamp"};b.value=a;return fr().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(b);f.onsuccess=function(){d()};
f.onerror=function(){e()}}catch(g){e(g)}})})}
function gr(a){var b=new xo("Error accessing DB");return fr().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var g=f.result;d(g?g.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(g){b.params={key:a,
thrownError:String(g)},e(b)}})},function(){return null})}
function fr(){return dr?Promise.resolve(dr):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))dr=d,a(dr);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),fr()};
c.onupgradeneeded=hr})}
function hr(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;var ir=0,jr="";function kr(a){if(Vj("desktop_notification_set_title_bar")){var b=lr();ir=a;jr=b;document.title=mr()}}
function lr(){if(!ir)return document.title;if(document.title==mr())return jr;var a=ir?"("+ir+") ":"";return 0!=document.title.indexOf(a)?document.title:document.title.substring(a.length)}
function nr(){ir&&0!=document.title.indexOf(mr())&&(jr=document.title,document.title=mr())}
function mr(){return(ir?"("+ir+") ":"")+jr}
;var or="",pr=!1,qr=null,rr=null,sr=null,tr=null,ur=null;function vr(){qr=E("yt-masthead-notifications");rr=E("yt-masthead-notifications-clickcard");sr=E("yt-masthead-notifications-content");(tr=E("yt-masthead-notifications-button"))&&(ur=F("yt-uix-button-content",tr));ur&&wr();jr=document.title;S("init",nr);var a=E("yt-masthead-high-priority-notification-content");a&&O(a,"click",xr)}
function yr(a,b){gr("NotificationsDisabled").then(function(c){return Vj("desktop_notification_high_priority_ignore_push")||!window.Notification||"granted"!=Notification.permission||c?gr("HighPriorityNotificationTimestamp").then(function(d){d||(d=0);if(a<=d)return Promise.resolve();zr(d,b);return er(a)}):Promise.resolve()})}
function wr(){hl("/feed_ajax?action_get_unseen_notification_count=1",{method:"GET",onSuccess:Ar})}
function xr(){G(rr,"yt-high-priority-notification")&&(rr&&I(rr,"yt-high-priority-notification"),tr&&An.getInstance().hide(tr))}
function zr(a,b,c){tr&&((void 0===c?0:c)||!window.document.hasFocus||window.document.hasFocus()?(or&&(zk(or),or=""),c={action_get_high_priority_notification_flyout:1,timestampLowerBound:a},c[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0),spf.load("/feed_ajax",{method:"POST",postData:Pe(c),onDone:function(){G(qr,"yt-uix-clickcard-active")||(pr=!0,tr&&(An.getInstance().hide(tr),H(rr,"yt-high-priority-notification"),An.getInstance().show(tr),dk(sr,"loaded"),I(qr,"yt-uix-clickcard-active")),pr=!1,
P(xr,b))}})):or||(or=Dk(window,"focus",function(){zr(a,b,!0)})))}
function Br(a){(a=F("unread-dot",a.currentTarget))&&yl(a)}
function Ar(a,b){if(ur){yr(b.timestamp_lower_bound||0,b.high_priority_notification_timeout_ms||5E3);var c=b.unseen_notification_count||0,d=String(c);100<=c&&(d=br("MASTHEAD_NOTIFICATIONS_COUNT_99PLUS"));re(ur,d);kr(c);tr&&(0==c?(d=tr,I(d,"sb-notif-on"),H(d,"sb-notif-off")):(d=tr,I(d,"sb-notif-off"),H(d,"sb-notif-on"),dk(sr,"loaded")),c=cr(c),tr.setAttribute("aria-label",c),tr.setAttribute("title",c));(c=b.polling_timeout)&&P(wr,c)}}
;var Cr,Dr,Er="";function Fr(){if("U"==Tj().o){var a=Sd("yt-masthead-account-picker-user-option"),b=Me(window.location.href);B(a,function(e){-1!=e.href.indexOf("action_handle_signin")&&Gc(e,Me(Rk(e.href,{next:b})))})}else{a=Sd("yt-masthead-account-picker-owner-option");
var c=Le();if(c){var d=c.indexOf(";");-1!=d&&(c=c.substring(0,d))}c&&B(a,function(e){var f=e.href;-1!=f.indexOf("?")?(f=(f||"").split("#")[0],f=f.split("?",2),f=Qk(1<f.length?f[1]:f[0])):f={};if(f=f.next){var g=f.indexOf("#");f=(0>g?f:f.substr(0,g))+(c?"#"+c:"");Gc(e,Me(Rk(e.href,{next:f})))}})}}
function Gr(){I(document.body,"sitewide-ticker-visible");U("masthead-ticker-close")}
function Hr(){var a=M("SBOX_JS_URL",Er);if(a){Er=a;var b=t("yt.www.masthead.searchbox.init");b?b():Ir(a,function(){try{var c=t("yt.www.masthead.searchbox.init");c()}catch(d){throw d.message=d.message+' sbox type: "'+Ea(c)+'"',d;}})}}
function Ir(a,b){var c=E("masthead-search-term");if(c){var d=function(){Jr();Dr=b;On(a,b);zk([e,f])};
var e=Dk(c,"mouseover",d);var f=Dk(c,"keypress",d)}}
function Jr(){t("yt.www.masthead.searchbox.init")||(Tn(Er,Dr),Dr=null)}
function Kr(){var a=E("masthead-search-term");a&&a.focus()}
;var Lr=[],Mr="",Nr=[],Or=null,Pr=null,Qr=0,Rr=0,Sr=!1,Tr=!1,Ur=0,Vr=0,Wr=0,Xr=null,Yr=null,Zr=null,$r=!1,as=null,bs=!1,cs=null,ds=!1,es=!1,fs=!1;function gs(){if(E("masthead-appbar")){Pr=E("masthead-positioner");Or=E("masthead-positioner-height-offset");Lp();hs();is();Xr=new hj(js);var a=ks;t("yt.scheduler.instance")&&(a=function(){El(ks,1,void 0)});
Nr.push(S("init",a));Nr.push(S("dispose",ls));Zr=Kp();as=uq.getInstance();ms(xq(128)?xq(129):!0);cs=Td(document,"html",void 0,void 0)[0];Nr.push(S("masthead-ticker-close",ns));Nr.push(S("appbar-guide-delay-load",hs));Nr.push(S("page-resize",os));ds||ks()}}
function ks(){Yr=F("appbar-content-trigger");(fs=G(document.body,"always-autohide-masthead"))?dk(Cr,"position-fixed"):bk(Cr,"position-fixed","true");fs||Yr?Mr=O(window,"scroll",ps):qs();$r=!!E("appbar-guide-menu")&&Qp();ds?($r||(Hf(Mp,"guide-pinned",!1),Op(!1),Hp&&(Hp.scrollTop=0)),os()):ds=!0;var a=-1*kf(Pr).y,b=document.body.scrollHeight,c=a-(b-document.body.clientHeight);0<c&&(document.body.style.minHeight=""+b+c+"px");Zd(document).scrollTop+=a;Qr=Yd(document).y;rs();ss();Sq()}
function ls(){Yr=null;qs()}
function rs(){if(!Yr||es)ul(null,!0);else{var a=mf(Yr).height,b=mf(Pr).height;b=kf(Pr).y+b;a=Math.floor(kf(Yr).y)+a;var c=G(document.body,"appbar-hidden"),d=Zd(document);c&&a<b+40?(d.scrollTop+=40,ul(null,!0),I(document.body,"appbar-hidden"),ts()):!c&&b<a&&(d.scrollTop-=40,H(document.body,"appbar-hidden"),ts())}}
function ts(){es=!0;P(function(){es=!1;G(document.body,"appbar-hidden")&&ul(null,!1)},300)}
function os(){$r&&(Hf(Mp,"guide-pinned",1251<=(window.innerWidth||document.documentElement.clientWidth)),Op(Rp()&&bs));us()}
function us(){if(document.body)if(G(document.body,"flex-width-enabled-snap")){var a=Rp()&&Pp();var b=(window.innerWidth||document.documentElement.clientWidth)-21-50;1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&(b-=230);a=1262<=b?"content-snap-width-3":1056<=b?"content-snap-width-2":"content-snap-width-1";G(cs,a)||(Gf(cs,Zr),H(cs,a),U("yt-dom-content-change"))}else Gf(cs,Zr)}
function vs(){return E("appbar-guide-menu")}
function is(){var a=G(document.body,"appbar-hidden"),b=kf(Pr).y,c=mf(Pr).height;Rr=a?b+c:b+c-40}
function ws(a){Rp()||De(a.target,"appbar-guide-clickable-ancestor")||Op(!1)}
function js(){var a=Math.max(0,Yd(document).y),b=Qr;Qr=a;var c=b-a;0<c&&0==Ur?Ur=b:0>c&&(Ur=0);c=Math.min(0,Math.max(c+Vr,-Rr));var d=fs;if(d){var e=a<Rr;b=a>b&&Math.abs(Vr)<Rr;Pp()&&b?a=!1:(a=d?!1:100<=Ur-a,a=e||b||a)}else a=!1;a&&Vr!=c&&(Pr.style.top=c+"px",Wr=Vr=c,xs());rs()}
function xs(){var a=vs();a&&(a.style.top=Wr+"px");Sq()}
function hs(){if(!Tr){var a=vs();if(!a||F("guide-module-loading",a)){var b=E("appbar-guide-button");if(!b)return;Lr.push(Dk(b,"click",function(){U("appbar-show-guide")}))}xs();
Lr.push(Bk(a,"click",ss,"guide-item"));Lr.push(O(a,"mouseleave",ys));Lr.push(O(document.body,"click",ws));Lr.push(O(F("appbar-guide-toggle"),"click",zs));Tr=!0}}
function ss(){Sr=!Rp()}
function ys(){Sr&&(Op(!1),Sr=!1)}
function zs(){var a=!Pp();Op(a,!0);a&&U("yt-dom-content-change");Rp()&&ms(a);us()}
function ms(a){zq(128,!0);zq(129,a);as.save();bs=a}
function qs(){zk(Mr);Xr&&Xr.stop();Mr=""}
function ps(){Xr.isActive()||Xr.start()}
function ns(){var a=kf(Pr).y,b=mf(Pr).height;Or.style.height=""+a+b+"px";var c=vs();c&&(G(document.body,"appbar-hidden")?c.style.marginTop=""+a+b+"px":c.style.marginTop=a+b-40+"px",Sq());is()}
;var As;function Bs(a){Cs(E("yt-picker-"+a+"-footer"),a,!1,!1,!0);E("footer").scrollIntoView()}
function Cs(a,b,c,d,e){c||(As&&As!=a&&yl(As),As=a,e?xl(a):zl(a));d?F("yt-close",a).focus():(c={},c["action_"+b]=1,c.base_url=window.location.href.split("#",1)[0],hl("/yt/extern/picker_ajax",{format:"JSON",method:"GET",ob:c,onSuccess:v(Ds,null,a),onError:function(){yl(a)}}))}
function Ds(a,b,c){if(c&&c.html){bk(a,"loaded",1);a.innerHTML=c.html;Es(a);c=(b=document.body||Zd(document))||Zd(document);var d=hf(a),e=hf(c),f=vf(c);if(c==Zd(document)){var g=d.x-c.scrollLeft;d=d.y-c.scrollTop;D&&!qd(10)&&(g+=f.left,d+=f.top)}else g=d.x-e.x-f.left,d=d.y-e.y-f.top;f=nf(a);e=c.clientHeight-f.height;var k=c.scrollLeft,l=c.scrollTop;k+=Math.min(g,Math.max(g-(c.clientWidth-f.width),0));l+=Math.min(d,Math.max(d-e,0));c=new Ld(k,l);b.scrollLeft=c.x;b.scrollTop=c.y;F("yt-close",a).focus()}else yl(a)}
function Es(a,b){var c=F("yt-picker-content",a);c?B(Td(document,null,"yt-picker-section",c),v(Fs,null,Math.floor((b||c.offsetWidth)/180))):sk(Error(".yt-picker-content missing"))}
function Fs(a,b){for(var c=Td(document,null,"yt-picker-item",b),d=Math.ceil(c.length/a),e,f=ee("div"),g=0;g<a;g++){e=ee("div");e.className="yt-picker-grid";for(var k=d*g;k<d*(g+1);k++)c[k]&&e.appendChild(c[k]);e.children.length&&f.appendChild(e)}c=ik(f);for(ge(b);0<c.childNodes.length;)b.appendChild(c.childNodes[0])}
;function Gs(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.h=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new Rf;this.f=this.g="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Hs(this,a.capabilities||""),Is(this,a.experiments||""),this.g=
a.remoteControllerUrl||"",this.f=a.localChannelEncryptionKey||"")}
Gs.prototype.copy=function(){var a=new Gs({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.h=this.h;a.g=this.g;a.f=this.f;return a};
Gs.prototype.equals=function(a){return a?this.id==a.id:!1};
function Hs(a,b){a.capabilities.clear();ab(b.split(","),w(Kb,Vl)).forEach(function(c){a.capabilities.add(c)})}
function Is(a,b){a.experiments.clear();b.split(",").forEach(function(c){a.experiments.add(c)})}
;function Js(a,b){this.action=a;this.params=b||{}}
;function Ks(a,b){cg.call(this);this.f=new kj(this.Ne,0,this);dg(this,w(eg,this.f));this.h=5E3;this.g=0;if(Ha(a))b&&(a=v(a,b));else if(a&&Ha(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.i=a}
A(Ks,cg);h=Ks.prototype;h.Ne=function(){this.h=Math.min(3E5,2*this.h);this.i();this.g&&this.start()};
h.start=function(){var a=this.h+15E3*Math.random(),b=this.f;b.isActive()||b.start(a);this.g=y()+a};
h.stop=function(){this.f.stop();this.g=0};
h.isActive=function(){return this.f.isActive()};
h.reset=function(){this.f.stop();this.h=5E3};function Ls(a,b,c){this.F=a;this.l=b;this.h=new K;this.g=new Ks(this.bf,this);this.f=null;this.A=!1;this.j=null;this.u="";this.G=this.i=0;this.C=[];this.J=c||!1}
A(Ls,Wi);h=Ls.prototype;h.subscribe=function(a,b,c){return this.h.subscribe(a,b,c)};
h.Gc=function(a,b){rj(this.h,a,b,void 0)};
h.ga=function(a){return this.h.ga(a)};
h.w=function(a,b){this.h.Z.apply(this.h,arguments)};
h.dispose=function(){this.A||(this.A=!0,eg(this.h),Ms(this),eg(this.g),this.g=null)};
h.K=function(){return this.A};
function Ns(a){return{firstTestResults:[""],secondTestResults:!a.f.Hb,sessionId:a.f.h,arrayId:a.f.Sa}}
h.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.u="";this.g.stop();this.j=a||null;this.i=b||0;a=this.F+"/test";b=this.F+"/bind";var d=new Bi(c?c.firstTestResults:null,c?c.secondTestResults:null,this.J),e=this.f;e&&(e.T=null);d.T=this;this.f=d;e?this.f.connect(a,b,this.l,e.h,e.Sa):c?this.f.connect(a,b,this.l,c.sessionId,c.arrayId):this.f.connect(a,b,this.l)}};
function Ms(a,b){a.G=b||0;a.g.stop();a.f&&(3==a.f.f&&Pi(a.f),Ii(a.f));a.G=0}
h.sendMessage=function(a,b){var c={_sc:a};b&&Vb(c,b);this.g.isActive()||2==(this.f?this.f.f:0)?this.C.push(c):Os(this)&&Oi(this.f,c)};
h.jc=function(){this.g.reset();this.j=null;this.i=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)Oi(this.f,a[b])}this.w("handlerOpened")};
h.hc=function(a){var b=2==a&&401==this.f.qa;4==a||b||this.g.start();this.w("handlerError",a)};
h.Kb=function(a){if(!this.g.isActive())this.w("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].f;d&&this.C.push(d)}};
h.sc=function(){var a={v:2};this.u&&(a.gsessionid=this.u);0!=this.i&&(a.ui=""+this.i);0!=this.G&&(a.ui=""+this.G);this.j&&Vb(a,this.j);return a};
h.ic=function(a){"S"==a[0]?this.u=a[1]:"gracefulReconnect"==a[0]?(this.g.start(),Ii(this.f)):this.w("handlerMessage",new Js(a[0],a[1]))};
function Os(a){return!!a.f&&3==a.f.f}
function Ps(a,b){(a.l.loungeIdToken=b)||a.g.stop()}
h.bf=function(){this.g.isActive();var a=this.f,b=0;a.P&&b++;a.X&&b++;0==b&&this.connect(this.j,this.i)};var Qs=y(),Rs=null,Ss=Array(50),Ts=-1,Us=!1;function Vs(){var a=Ws;Xs();Rs.push(a);Ys(Rs)}
function Zs(a,b){Xs();var c=Rs,d=$s(a,String(b));0==c.length?at(d):(Ys(c),B(c,function(e){e(d)}))}
function bt(a){Zs("CP",a)}
function Xs(){Rs||(Rs=t("yt.mdx.remote.debug.handlers_")||[],z("yt.mdx.remote.debug.handlers_",Rs))}
function at(a){var b=(Ts+1)%50;Ts=b;Ss[b]=a;Us||(Us=49==b)}
function Ys(a){var b=Ss;if(b[0]){var c=Ts,d=Us?c:-1;do{d=(d+1)%50;var e=b[d];B(a,function(f){f(e)})}while(d!=c);
Ss=Array(50);Ts=-1;Us=!1}}
function $s(a,b){var c=(y()-Qs)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function ct(a){this.port=this.domain="";this.f="/api/lounge";this.g=!0;a=a||document.location.href;var b=Number(Ie(a)[4]||null)||"";b&&(this.port=":"+b);this.domain=Ke(a)||"";a=Eb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Cb(a,"10.0")&&(this.g=!1))}
function dt(a,b){var c=a.f;a.g&&(c="https://"+a.domain+a.port+a.f);return Qe(c+b,{})}
function et(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:w(a.i,d,!0),onError:w(a.h,e),La:w(a.j,e)};c&&(a.ka=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return hl(b,a)}
ct.prototype.i=function(a,b,c,d){b?a(d):a({text:c.responseText})};
ct.prototype.h=function(a,b){a(Error("Request error: "+b.status))};
ct.prototype.j=function(a){a(Error("request timed out"))};function ft(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function gt(a,b){return!!b&&(a.id==b||a.uuid==b)}
function ht(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function it(a){return new ft(a)}
function jt(a){return Fa(a)?bb(a,it):[]}
function kt(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function lt(a){return Fa(a)?"["+bb(a,kt).join(",")+"]":"null"}
;function mt(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function nt(a,b){return fb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})}
function ot(a,b){return fb(a,function(c){return gt(c,b)})}
;function pt(a){a=void 0===a?!1:a;cg.call(this);this.l=new K(a);dg(this,w(eg,this.l))}
A(pt,cg);pt.prototype.subscribe=function(a,b,c){return this.K()?0:this.l.subscribe(a,b,c)};
pt.prototype.Gc=function(a,b){this.K()||rj(this.l,a,b,void 0)};
pt.prototype.ga=function(a){return this.K()?!1:this.l.ga(a)};
pt.prototype.w=function(a,b){this.K()||this.l.Z.apply(this.l,arguments)};function qt(a){pt.call(this);this.A=a;this.f=[]}
A(qt,pt);qt.prototype.da=function(){return this.f};
qt.prototype.Jb=function(a){return!!nt(this.f,a)};
qt.prototype.get=function(a){return a?ot(this.f,a):null};
function rt(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.f.push(b);return!0}
function st(a,b){var c=a.f.length!=b.length;a.f=ab(a.f,function(f){return!!nt(b,f)});
for(var d=0,e=b.length;d<e;d++)c=rt(a,b[d])||c;return c}
function tt(a,b){var c=a.f.length;a.f=ab(a.f,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.f.length<c}
qt.prototype.info=function(a){Zs(this.A,a)};function ut(a,b,c,d){pt.call(this);this.A=a;this.u=b;this.i=c;this.j=d;this.h=0;this.f=null;this.g=NaN}
ka(ut,pt);h=ut.prototype;h.start=function(){!this.f&&isNaN(this.g)&&this.ad()};
h.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.g)||(Q(this.g),this.g=NaN)};
h.B=function(){this.stop();pt.prototype.B.call(this)};
h.ad=function(){this.g=NaN;this.f=hl(dt(this.A,"/pairing/get_screen"),{method:"POST",ka:{pairing_code:this.u},timeout:5E3,onSuccess:v(this.nf,this),onError:v(this.mf,this),La:v(this.pf,this)})};
h.nf=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.i;c.name=this.j;this.w("pairingComplete",new ft(c))};
h.mf=function(a){this.f=null;a.status&&404==a.status?this.h>=vt.length?this.w("pairingFailed",Error("DIAL polling timed out")):(a=vt[this.h],this.g=P(v(this.ad,this),a),this.h++):this.w("pairingFailed",Error("Server error "+a.status))};
h.pf=function(){this.f=null;this.w("pairingFailed",Error("Server not responding"))};
var vt=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];var wt;function xt(){var a=zt(),b=At();if(Bt()){var c=a;var d=0;for(var e=c.length,f;d<e;){var g=d+(e-d>>>1);var k=rb(b,c[g]);0<k?d=g+1:(e=g,f=!k)}d=f?d:-d-1;0>d&&pb(c,-(d+1),0,b)}a=Ct(a);if(0==a.length)try{Zj("remote_sid")}catch(l){}else try{Yj("remote_sid",a.join(","),-1,"/")}catch(l){}}
function zt(){var a=lq("yt-remote-connected-devices")||[];a.sort(rb);return a}
function Ct(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return bb(a,function(d,e){return 0==e?d:d.substring(c.length)})}
function Dt(a){iq("yt-remote-connected-devices",a,86400)}
function At(){if(Et)return Et;var a=lq("yt-remote-device-id");a||(a=mt(),iq("yt-remote-device-id",a,31536E3));for(var b=zt(),c=1,d=a;hb(b,d);)c++,d=a+"#"+c;return Et=d}
function Ft(){return lq("yt-remote-session-browser-channel")}
function Bt(){return lq("yt-remote-session-screen-id")}
function Gt(a){5<a.length&&(a=a.slice(a.length-5));var b=bb(Ht(),function(d){return d.loungeToken}),c=bb(a,function(d){return d.loungeToken});
eb(c,function(d){return!hb(b,d)})&&It();
iq("yt-remote-local-screens",a,31536E3)}
function Ht(){return lq("yt-remote-local-screens")||[]}
function It(){iq("yt-remote-lounge-token-expiration",!0,86400)}
function Jt(a,b){iq("yt-remote-session-browser-channel",a);iq("yt-remote-session-screen-id",b);var c=zt(),d=At();hb(c,d)||c.push(d);Dt(c);xt()}
function Kt(a){a||(mq("yt-remote-session-screen-id"),mq("yt-remote-session-video-id"));xt();a=zt();jb(a,At());Dt(a)}
function Lt(){if(!wt){var a=Oj();a&&(wt=new uj(a))}return wt?!!wt.get("yt-remote-use-staging-server"):!1}
var Et="";function Mt(a){qt.call(this,"LocalScreenService");this.h=a;this.g=NaN;Nt(this);this.info("Initializing with "+lt(this.f))}
A(Mt,qt);h=Mt.prototype;h.start=function(){Nt(this)&&this.w("screenChange");!lq("yt-remote-lounge-token-expiration")&&Ot(this);Q(this.g);this.g=P(v(this.start,this),1E4)};
h.add=function(a,b){Nt(this);rt(this,a);Pt(this,!1);this.w("screenChange");b(a);a.token||Ot(this)};
h.remove=function(a,b){var c=Nt(this);tt(this,a)&&(Pt(this,!1),c=!0);b(a);c&&this.w("screenChange")};
h.Gb=function(a,b,c,d){var e=Nt(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Pt(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.w("screenChange")};
h.B=function(){Q(this.g);Mt.H.B.call(this)};
function Ot(a){if(a.f.length){var b=bb(a.f,function(d){return d.id}),c=dt(a.h,"/pairing/get_lounge_token_batch");
et(a.h,c,{screen_ids:b.join(",")},v(a.Nd,a),v(a.Md,a))}}
h.Nd=function(a){Nt(this);var b=this.f.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Pt(this,!b);b&&Zs(this.A,"Missed "+b+" lounge tokens.")};
h.Md=function(a){Zs(this.A,"Requesting lounge tokens failed: "+a)};
function Nt(a){var b=jt(Ht());b=ab(b,function(c){return!c.uuid});
return st(a,b)}
function Pt(a,b){Gt(bb(a.f,ht));b&&It()}
;function Qt(a,b){pt.call(this);this.u=b;var c=lq("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.u(),f=0,g=e.length;f<g;++f){var k=e[f].id;d[k]=hb(c,k)}this.f=d;this.j=a;this.h=this.i=NaN;this.g=null;Rt("Initialized with "+Dh(this.f))}
ka(Qt,pt);h=Qt.prototype;h.start=function(){var a=parseInt(lq("yt-remote-fast-check-period")||"0",10);(this.i=y()-144E5<a?0:a)?St(this):(this.i=y()+3E5,iq("yt-remote-fast-check-period",this.i),this.Vb())};
h.isEmpty=function(){return Pb(this.f)};
h.update=function(){Rt("Updating availability on schedule.");var a=this.u(),b=Ib(this.f,function(c,d){return c&&!!ot(a,d)},this);
Tt(this,b)};
function Ut(a,b,c){var d=dt(a.j,"/pairing/get_screen_availability");et(a.j,d,{lounge_token:b.token},v(function(e){e=e.screens||[];for(var f=0,g=e.length;f<g;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),v(function(){c(!1)},a))}
h.B=function(){Q(this.h);this.h=NaN;this.g&&(this.g.abort(),this.g=null);pt.prototype.B.call(this)};
function Tt(a,b){a:if(Jb(b)!=Jb(a.f))var c=!1;else{c=Mb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(Rt("Updated online screens: "+Dh(a.f)),a.f=b,a.w("screenChange"));Vt(a)}
function St(a){isNaN(a.h)||Q(a.h);a.h=P(v(a.Vb,a),0<a.i&&a.i<y()?2E4:1E4)}
h.Vb=function(){Q(this.h);this.h=NaN;this.g&&this.g.abort();var a=Wt(this);if(Jb(a)){var b=dt(this.j,"/pairing/get_screen_availability");this.g=et(this.j,b,{lounge_token:Mb(a).join(",")},v(this.Le,this,a),v(this.Ke,this))}else Tt(this,{}),St(this)};
h.Le=function(a,b){this.g=null;a:{var c=Mb(Wt(this));var d=Mb(a);if(Ga(c)&&Ga(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Tt(this,d);St(this)}else this.M("Changing Screen set during request."),this.Vb()};
h.Ke=function(a){this.M("Screen availability failed: "+a);this.g=null;St(this)};
function Rt(a){Zs("OnlineScreenService",a)}
h.M=function(a){Zs("OnlineScreenService",a)};
function Wt(a){var b={};B(a.u(),function(c){c.token?b[c.token]=c.id:this.M("Requesting availability of screen w/o lounge token.")});
return b}
function Vt(a){a=Mb(Ib(a.f,function(b){return b}));
a.sort(rb);a.length?iq("yt-remote-online-screen-ids",a.join(","),60):mq("yt-remote-online-screen-ids")}
;function Y(a){qt.call(this,"ScreenService");this.u=a;this.g=this.h=null;this.i=[];this.j={};Xt(this)}
A(Y,qt);h=Y.prototype;h.start=function(){this.h.start();this.g.start();this.f.length&&(this.w("screenChange"),this.g.isEmpty()||this.w("onlineScreenChange"))};
h.add=function(a,b,c){this.h.add(a,b,c)};
h.remove=function(a,b,c){this.h.remove(a,b,c);this.g.update()};
h.Gb=function(a,b,c,d){this.h.Jb(a)?this.h.Gb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Zs(this.A,a),d(Error(a)))};
h.da=function(a){return a?this.f:mb(this.f,ab(this.i,function(b){return!this.Jb(b)},this))};
h.md=function(){return ab(this.da(!0),function(a){return!!this.g.f[a.id]},this)};
function Yt(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.j[b]);var g=a.da();if(g=(c?ot(g,c):null)||ot(g,b)){g.uuid=b;var k=Zt(a,g);Ut(a.g,k,function(l){e(l?k:null)})}else c?$t(a,c,v(function(l){var m=Zt(this,new ft({name:d,
screenId:c,loungeToken:l,dialId:b||""}));Ut(this.g,m,function(p){e(p?m:null)})},a),f):e(null)}
h.nd=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new ut(this.u,a,b,c);f.subscribe("pairingComplete",v(function(g){eg(f);d(Zt(this,g))},this));
f.subscribe("pairingFailed",function(g){eg(f);e(g)});
f.start();return v(f.stop,f)};
function au(a,b){for(var c=0,d=a.f.length;c<d;++c)if(a.f[c].name==b)return a.f[c];return null}
h.rf=function(a,b,c,d){hl(dt(this.u,"/pairing/get_screen"),{method:"POST",ka:{pairing_code:a},timeout:5E3,onSuccess:v(function(e,f){var g=new ft(f.screen||{});if(!g.name||au(this,g.name)){a:{var k=g.name;for(var l=2,m=b(k,l);au(this,m);){l++;if(20<l)break a;m=b(k,l)}k=m}g.name=k}c(Zt(this,g))},this),
onError:v(function(e){d(Error("pairing request failed: "+e.status))},this),
La:v(function(){d(Error("pairing request timed out."))},this)})};
h.B=function(){eg(this.h);eg(this.g);Y.H.B.call(this)};
function $t(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={ka:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,g){var k=g&&g.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
hl(dt(a.u,"/pairing/get_lounge_token_batch"),e)}
function bu(a){a.f=a.h.da();var b=a.j,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.f.length;b<d;++b){var e=a.f[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+lt(a.f))}
h.Sd=function(){bu(this);this.w("screenChange");this.g.update()};
function Xt(a){cu(a);a.h=new Mt(a.u);a.h.subscribe("screenChange",v(a.Sd,a));bu(a);a.i=jt(lq("yt-remote-automatic-screen-cache")||[]);cu(a);a.info("Initializing automatic screens: "+lt(a.i));a.g=new Qt(a.u,v(a.da,a,!0));a.g.subscribe("screenChange",v(function(){this.w("onlineScreenChange")},a))}
function Zt(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=ot(a.i,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.i.push(b),iq("yt-remote-automatic-screen-cache",bb(a.i,ht)));cu(a);a.j[b.uuid]=b.id;iq("yt-remote-device-id-map",a.j,31536E3);return b}
function cu(a){a.j=lq("yt-remote-device-id-map")||{}}
Y.prototype.dispose=Y.prototype.dispose;function du(a,b,c){pt.call(this);this.O=c;this.J=a;this.f=b;this.h=null}
A(du,pt);h=du.prototype;h.Db=function(a){this.h=a;this.w("sessionScreen",this.h)};
h.aa=function(a){this.K()||(a&&eu(this,""+a),this.h=null,this.w("sessionScreen",null))};
h.info=function(a){Zs(this.O,a)};
function eu(a,b){Zs(a.O,b)}
h.pd=function(){return null};
h.Xb=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){eu(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
h.B=function(){this.Xb("");du.H.B.call(this)};function fu(a,b){du.call(this,a,b,"CastSession");this.g=null;this.i=0;this.u=v(this.sf,this);this.j=v(this.Te,this);this.i=P(v(function(){gu(this,null)},this),12E4)}
A(fu,du);h=fu.prototype;h.Wb=function(a){if(this.g){if(this.g==a)return;eu(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.u);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.g=a;this.g.addUpdateListener(this.u);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);hu(this)};
h.Ta=function(a){this.info("launchWithParams no-op for Cast: "+Dh(a))};
h.stop=function(){this.g?this.g.stop(v(function(){this.aa()},this),v(function(){this.aa(Error("Failed to stop receiver app."))},this)):this.aa(Error("Stopping cast device witout session."))};
h.Xb=u;h.B=function(){this.info("disposeInternal");Q(this.i);this.i=0;this.g&&(this.g.removeUpdateListener(this.u),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.g=null;fu.H.B.call(this)};
function hu(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+Dh(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,u,v(function(){eu(this,"Failed to send message: getMdxSessionStatus.")},a)):eu(a,"Sending yt message without session: "+Dh(b))}
h.Te=function(a,b){if(!this.K())if(b){var c=pi(b);if(Ia(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+Dh(c));switch(d){case "mdxSessionStatus":gu(this,c.screenId);break;default:eu(this,"Unknown youtube message: "+d)}}else eu(this,"Unable to parse message.")}else eu(this,"No data in message.")};
function gu(a,b){Q(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.h||a.h.id!=b){var c=v(a.Db,a),d=v(a.aa,a);a.uc(b,c,d,5)}}else a.aa(Error("Waiting for session status timed out."))}
h.uc=function(a,b,c,d){Yt(this.J,this.f.label,a,this.f.friendlyName,v(function(e){e?b(e):0<=d?(eu(this,"Screen "+a+" appears to be offline. "+d+" retries left."),P(v(this.uc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
h.pd=function(){return this.g};
h.sf=function(a){this.K()||a||(eu(this,"Cast session died."),this.aa())};function iu(a,b,c){du.call(this,a,b,"DialSession");this.i=this.F=null;this.L="";this.R=c;this.j=null;this.A=u;this.u=NaN;this.N=v(this.vf,this);this.g=u}
A(iu,du);h=iu.prototype;h.Wb=function(a){this.i=a;this.i.addUpdateListener(this.N)};
h.Ta=function(a){this.j=a;this.A()};
h.stop=function(){this.g();this.g=u;Q(this.u);this.i?this.i.stop(v(this.aa,this,null),v(this.aa,this,"Failed to stop DIAL device.")):this.aa()};
h.B=function(){this.g();this.g=u;Q(this.u);this.i&&this.i.removeUpdateListener(this.N);this.i=null;iu.H.B.call(this)};
function ju(a){a.g=a.J.nd(a.L,a.f.label,a.f.friendlyName,v(function(b){this.g=u;this.Db(b)},a),v(function(b){this.g=u;
this.aa(b)},a))}
h.vf=function(a){this.K()||a||(eu(this,"DIAL session died."),this.g(),this.g=u,this.aa())};
function ku(a){var b={};b.pairingCode=a.L;b.theme=a.R;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}Lt()&&(b.env_useStageMdx=1);return Pe(b)}
h.Rb=function(a){this.L=mt();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,ku(this));a(b);ju(this)}else this.A=v(function(){Q(this.u);this.A=u;this.u=NaN;var c=new chrome.cast.DialLaunchResponse(!0,ku(this));a(c);ju(this)},this),this.u=P(v(function(){this.A()},this),100)};
h.Xd=function(a,b,c){Yt(this.J,this.F.receiver.label,a,this.f.friendlyName,v(function(d){d&&d.token?(this.Db(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Rb(b,c)},this),v(function(d){eu(this,"Failed to get DIAL screen: "+d);
this.Rb(b,c)},this))};function lu(a,b){du.call(this,a,b,"ManualSession");this.g=P(v(this.Ta,this,null),150)}
A(lu,du);lu.prototype.stop=function(){this.aa()};
lu.prototype.Wb=u;lu.prototype.Ta=function(){Q(this.g);this.g=NaN;var a=ot(this.J.da(),this.f.label);a?this.Db(a):this.aa(Error("No such screen"))};
lu.prototype.B=function(){Q(this.g);this.g=NaN;lu.H.B.call(this)};function mu(a,b,c,d){pt.call(this);this.g=a;this.A=b||"233637DE";this.u=c||"cl";this.F=d||!1;this.f=null;this.j=!1;this.h=[];this.i=v(this.Ie,this)}
A(mu,pt);h=mu.prototype;
h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.A);this.F||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=v(this.Je,this);c=new chrome.cast.ApiConfig(c,v(this.Uc,this),f,d,e);c.customDialLaunchCallback=v(this.ye,this);chrome.cast.initialize(c,v(function(){this.K()||(chrome.cast.addReceiverActionListener(this.i),
Vs(),this.g.subscribe("onlineScreenChange",v(this.od,this)),this.h=nu(this),chrome.cast.setCustomReceivers(this.h,u,v(function(g){this.M("Failed to set initial custom receivers: "+Dh(g))},this)),this.w("yt-remote-cast2-availability-change",ou(this)),b(!0))},this),v(function(g){this.M("Failed to initialize API: "+Dh(g));
b(!1)},this))};
h.df=function(a,b){pu("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.h;if(!a||c&&c.id!=a)pu("Unsetting old screen status: "+this.f.f.friendlyName),qu(this,null)}if(a&&b){if(!this.f){c=ot(this.g.da(),a);if(!c){pu("setConnectedScreenStatus: Unknown screen.");return}var d=ru(this,c);d||(pu("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.h.push(d),chrome.cast.setCustomReceivers(this.h,
u,v(function(e){this.M("Failed to set initial custom receivers: "+Dh(e))},this)));
pu("setConnectedScreenStatus: new active receiver: "+d.friendlyName);qu(this,new lu(this.g,d),!0)}this.f.Xb(b)}else pu("setConnectedScreenStatus: no screen.")};
function ru(a,b){return b?fb(a.h,function(c){return gt(b,c.label)},a):null}
h.ef=function(a){this.K()?this.M("Setting connection data on disposed cast v2"):this.f?this.f.Ta(a):this.M("Setting connection data without a session")};
h.uf=function(){this.K()?this.M("Stopping session on disposed cast v2"):this.f?(this.f.stop(),qu(this,null)):pu("Stopping non-existing session")};
h.requestSession=function(){chrome.cast.requestSession(v(this.Uc,this),v(this.Me,this))};
h.B=function(){this.g.Gc("onlineScreenChange",v(this.od,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);jb(t("yt.mdx.remote.debug.handlers_")||[],Ws);eg(this.f);mu.H.B.call(this)};
function pu(a){Zs("Controller",a)}
h.M=function(a){Zs("Controller",a)};
function Ws(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function ou(a){return a.j||!!a.h.length||!!a.f}
function qu(a,b,c){b!=a.f&&(eg(a.f),(a.f=b)?(c?a.w("yt-remote-cast2-receiver-resumed",b.f):a.w("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",v(a.Vc,a,b)),b.h?a.w("yt-remote-cast2-session-change",b.h):c&&a.f.Ta(null)):a.w("yt-remote-cast2-session-change",null))}
h.Vc=function(a,b){this.f==a&&(b||qu(this,null),this.w("yt-remote-cast2-session-change",b))};
h.Ie=function(a,b){if(!this.K())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),pu("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.f.label!=a.label)pu("onReceiverAction_: Stopping active receiver: "+this.f.f.friendlyName),this.f.stop();else{pu("onReceiverAction_: Casting to active receiver.");this.f.h&&this.w("yt-remote-cast2-session-change",this.f.h);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:qu(this,
new lu(this.g,a));break;case chrome.cast.ReceiverType.DIAL:qu(this,new iu(this.g,a,this.u));break;case chrome.cast.ReceiverType.CAST:qu(this,new fu(this.g,a));break;default:this.M("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.f.label==a.label?this.f.stop():this.M("Stopping receiver w/o session: "+a.friendlyName)}else this.M("onReceiverAction_ called without receiver.")};
h.ye=function(a){if(this.K())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.M("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.f:null;if(!c||c.label!=b.label)return this.M("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.h)return pu("Reselecting dial screen."),
this.w("yt-remote-cast2-session-change",this.f.h),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.M('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);qu(this,new iu(this.g,b,this.u))}b=this.f;b.F=a;return b.F.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.Xd,b,(b.F.extraData||{}).screenId||null)):new Promise(v(b.Rb,b))};
h.Uc=function(a){if(!this.K()){pu("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)pu("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),qu(this,new fu(this.g,b),!0);else{this.M("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.f,d=ot(this.g.da(),c.label);d&&gt(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(pu("onSessionEstablished_: manual to cast session change "+b.friendlyName),eg(this.f),this.f=new fu(this.g,b),this.f.subscribe("sessionScreen",v(this.Vc,this,this.f)),this.f.Ta(null));this.f.Wb(a)}}};
h.tf=function(){return this.f?this.f.pd():null};
h.Me=function(a){this.K()||(this.M("Failed to estabilish a session: "+Dh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&qu(this,null))};
h.Je=function(a){pu("Receiver availability updated: "+a);if(!this.K()){var b=ou(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;ou(this)!=b&&this.w("yt-remote-cast2-availability-change",ou(this))}};
function nu(a){var b=a.g.md(),c=a.f&&a.f.f;a=bb(b,function(d){c&&gt(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=ru(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
h.od=function(){this.K()||(this.h=nu(this),pu("Updating custom receivers: "+Dh(this.h)),chrome.cast.setCustomReceivers(this.h,u,v(function(){this.M("Failed to set custom receivers.")},this)),this.w("yt-remote-cast2-availability-change",ou(this)))};
mu.prototype.setLaunchParams=mu.prototype.ef;mu.prototype.setConnectedScreenStatus=mu.prototype.df;mu.prototype.stopSession=mu.prototype.uf;mu.prototype.getCastSession=mu.prototype.tf;mu.prototype.requestSession=mu.prototype.requestSession;mu.prototype.init=mu.prototype.init;mu.prototype.dispose=mu.prototype.dispose;function su(a,b,c,d,e,f){tu()?vu(a,d,e,f)&&(wu(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?xu(b):(window.__onGCastApiAvailable=function(g,k){g?xu(b):(yu("Failed to load cast API: "+k),zu(!1),wu(!1),mq("yt-remote-cast-available"),mq("yt-remote-cast-receiver"),Au(),b(!1))},c?On("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Xa():!window.chrome||!window.navigator.presentation||
0<=window.navigator.userAgent.indexOf("Edge")?Ua():(Wa(),Sa(Ra.map(Va))))):uu("Cannot initialize because not running Chrome")}
function Au(){uu("dispose");var a=Bu();a&&a.dispose();z("yt.mdx.remote.cloudview.instance_",null);Cu(!1);Kk(Du);Du.length=0}
function Eu(){uu("clearCurrentReceiver");mq("yt-remote-cast-receiver")}
function Fu(){return lq("yt-remote-cast-installed")?Bu()?Bu().getCastSession():(yu("getCastSelector: Cast is not initialized."),null):(yu("getCastSelector: Cast API is not installed!"),null)}
function Gu(a,b){Hu()?Bu().setConnectedScreenStatus(a,b):yu("setConnectedScreenStatus called before ready.")}
function tu(){var a=0<=Eb.search(/ (CrMo|Chrome|CriOS)\//);return yd||a}
function vu(a,b,c,d){var e=!1;Bu()||(a=new mu(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){iq("yt-remote-cast-available",f);Lk("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){uu("onReceiverSelected: "+f.friendlyName);
iq("yt-remote-cast-receiver",f);Lk("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){uu("onReceiverResumed: "+f.friendlyName);
iq("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){uu("onSessionChange: "+kt(f));
f||mq("yt-remote-cast-receiver");Lk("yt-remote-cast2-session-change",f)}),z("yt.mdx.remote.cloudview.instance_",a),e=!0);
uu("cloudview.createSingleton_: "+e);return e}
function Bu(){return t("yt.mdx.remote.cloudview.instance_")}
function xu(a){zu(!0);wu(!1);Bu().init(!1,function(b){b?(Cu(!0),U("yt-remote-cast2-api-ready")):(yu("Failed to initialize cast API."),zu(!1),mq("yt-remote-cast-available"),mq("yt-remote-cast-receiver"),Au());a(b)})}
function uu(a){Zs("cloudview",a)}
function yu(a){Zs("cloudview",a)}
function zu(a){uu("setCastInstalled_ "+a);iq("yt-remote-cast-installed",a)}
function Hu(){return!!t("yt.mdx.remote.cloudview.apiReady_")}
function Cu(a){uu("setApiReady_ "+a);z("yt.mdx.remote.cloudview.apiReady_",a)}
function wu(a){z("yt.mdx.remote.cloudview.initializing_",a)}
var Du=[];function Iu(a){this.index=-1;this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.h=this.i=0;this.f=null;this.hasNext=this.l=!1;this.G=this.g=this.u=this.A=0;this.j=NaN;this.C=!1;this.reset(a)}
function Ju(a){a.audioTrackId=null;a.f=null;a.playerState=-1;a.l=!1;a.hasNext=!1;a.i=0;a.h=y();a.A=0;a.u=0;a.g=0;a.G=0;a.j=NaN;a.C=!1}
Iu.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";Ju(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.f=a.trackData,this.l=a.hasPrevious,this.hasNext=a.hasNext,this.i=a.playerTime,this.h=a.playerTimeAt,this.A=a.seekableStart,this.u=a.seekableEnd,this.g=a.duration,this.G=a.loadedTime,this.j=a.liveIngestionTime,this.C=
!isNaN(this.j))};
Iu.prototype.isAdPlaying=function(){return 1081==this.playerState};
function Ku(a,b){a.i=b;a.h=y()}
function Lu(a){switch(a.playerState){case 1:case 1081:return(y()-a.h)/1E3+a.i;case -1E3:return 0}return a.i}
Iu.prototype.getDuration=function(){return this.C?this.g+(1==this.playerState?(y()-this.h)/1E3:0):this.g};
function Mu(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&Ju(a)}
function Nu(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=Tb(a.f);b.hasPrevious=a.l;b.hasNext=a.hasNext;b.playerTime=a.i;b.playerTimeAt=a.h;b.seekableStart=a.A;b.seekableEnd=a.u;b.duration=a.g;b.loadedTime=a.G;b.liveIngestionTime=a.j;return b}
Iu.prototype.clone=function(){return new Iu(Nu(this))};function Ou(a,b){pt.call(this);this.f=0;this.i=a;this.u=[];this.j=new Pj;this.h=this.g=null;this.J=v(this.oe,this);this.A=v(this.kb,this);this.F=v(this.ne,this);this.L=v(this.ue,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Zb,this),Pu(this))):c=3;0!=c&&(b?this.Zb(c):P(v(function(){this.Zb(c)},this),0));
var d=Fu();d&&Qu(this,d);this.subscribe("yt-remote-cast2-session-change",this.L)}
ka(Ou,pt);function Ru(a){return new Iu(a.i.getPlayerContextData())}
h=Ou.prototype;h.play=function(){1==this.f?(this.g?this.g.play(null,u,Su(this,"play")):Tu(this,"play"),Uu(this,1,Lu(Ru(this))),this.w("remotePlayerChange")):Vu(this,this.play)};
h.pause=function(){1==this.f?(this.g?this.g.pause(null,u,Su(this,"pause")):Tu(this,"pause"),Uu(this,2,Lu(Ru(this))),this.w("remotePlayerChange")):Vu(this,this.pause)};
h.seekTo=function(a){if(1==this.f){if(this.g){var b=Ru(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.g.seek(c,u,Su(this,"seekTo",{newTime:a}))}else Tu(this,"seekTo",{newTime:a});Uu(this,3,a);this.w("remotePlayerChange")}else Vu(this,w(this.seekTo,a))};
h.stop=function(){if(1==this.f){this.g?this.g.stop(null,u,Su(this,"stopVideo")):Tu(this,"stopVideo");var a=Ru(this);a.index=-1;a.videoId="";Ju(a);Wu(this,a);this.w("remotePlayerChange")}else Vu(this,this.stop)};
h.setVolume=function(a,b){if(1==this.f){var c=Ru(this);if(this.h){if(c.volume!=a){var d=Math.round(a)/100;this.h.setReceiverVolumeLevel(d,v(function(){bt("set receiver volume: "+d)},this),v(function(){this.M("failed to set receiver volume.")},this))}c.muted!=b&&this.h.setReceiverMuted(b,v(function(){bt("set receiver muted: "+b)},this),v(function(){this.M("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);Tu(this,"setVolume",e)}c.muted=b;c.volume=a;Wu(this,c)}else Vu(this,w(this.setVolume,a,b))};
h.setAudioTrack=function(a,b){if(1==this.f){var c=b.getLanguageInfo().getId();Tu(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=Ru(this);d.audioTrackId=c;Wu(this,d)}else Vu(this,w(this.setAudioTrack,a,b))};
h.dc=function(a){1==this.f?Tu(this,"addVideos",{listId:a}):Vu(this,w(this.dc,a))};
h.dd=function(a){1==this.f?Tu(this,"removeVideo",{videoId:a}):Vu(this,w(this.dd,a))};
h.Oc=function(a,b,c){1==this.f?Tu(this,"moveVideo",{videoId:a,delta:(b>=c?c:c-1)-b}):Vu(this,w(this.Oc,a,b,c))};
h.playVideo=function(a,b,c,d,e,f,g){var k=Ru(this);c=c||0;var l={videoId:a,currentIndex:c};Mu(k,a,c);void 0!==b&&(Ku(k,b),l.currentTime=b);void 0!==d&&(l.listId=d);null!=e&&(l.playerParams=e);null!=f&&(l.clickTrackingParams=f);null!=g&&(l.locationInfo=Dh(g));Tu(this,"setPlaylist",l);d||Wu(this,k)};
h.cd=function(a,b){if(1==this.f){if(a&&b){var c=Ru(this);Mu(c,a,b);Wu(this,c)}Tu(this,"previous")}else Vu(this,w(this.cd,a,b))};
h.nextVideo=function(a,b){if(1==this.f){if(a&&b){var c=Ru(this);Mu(c,a,b);Wu(this,c)}Tu(this,"next")}else Vu(this,w(this.nextVideo,a,b))};
h.kc=function(){if(1==this.f){Tu(this,"clearPlaylist");var a=Ru(this);a.reset();Wu(this,a);this.w("remotePlayerChange")}else Vu(this,this.kc)};
h.qc=function(){1==this.f?Tu(this,"dismissAutoplay"):Vu(this,this.qc)};
h.gd=function(a){1==this.f?a?Tu(this,"setAutoplayMode",{autoplayMode:"ENABLED"}):Tu(this,"setAutoplayMode",{autoplayMode:"DISABLED"}):Vu(this,w(this.gd,a))};
h.dispose=function(){if(3!=this.f){var a=this.f;this.f=3;this.w("proxyStateChange",a,this.f)}pt.prototype.dispose.call(this)};
h.B=function(){Xu(this);this.i=null;this.j.clear();Qu(this,null);pt.prototype.B.call(this)};
function Pu(a){B("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.u.push(this.i.subscribe(b,w(this.Ge,b),this))},a)}
function Xu(a){B(a.u,function(b){this.i.unsubscribeByKey(b)},a);
a.u.length=0}
function Vu(a,b){var c=a.j;50>c.f.length+c.g.length&&a.j.g.push(b)}
function Uu(a,b,c){var d=Ru(a);Ku(d,c);-1E3!=d.playerState&&(d.playerState=b);Wu(a,d)}
function Tu(a,b,c){a.i.sendMessage(b,c)}
function Wu(a,b){Xu(a);a.i.setPlayerContextData(Nu(b));Pu(a)}
h.Zb=function(a){if((a!=this.f||2==a)&&3!=this.f&&0!=a){var b=this.f;this.f=a;this.w("proxyStateChange",b,a);if(1==a)for(;!this.j.isEmpty();)b=a=this.j,0==b.f.length&&(b.f=b.g,b.f.reverse(),b.g=[]),a.f.pop().apply(this);else 3==a&&this.dispose()}};
h.Ge=function(a,b){this.w(a,b)};
function Qu(a,b){a.h&&(a.h.removeUpdateListener(a.J),a.h.removeMediaListener(a.A),a.kb(null));a.h=b;a.h&&(bt("Setting cast session: "+a.h.sessionId),a.h.addUpdateListener(a.J),a.h.addMediaListener(a.A),a.h.media.length&&a.kb(a.h.media[0]))}
h.oe=function(a){if(!a)this.kb(null),Qu(this,null);else if(this.h.receiver.volume){a=this.h.receiver.volume;var b=Ru(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)bt("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,Wu(this,b)}};
h.kb=function(a){bt("Cast media: "+!!a);this.g&&this.g.removeUpdateListener(this.F);if(this.g=a)this.g.addUpdateListener(this.F),Yu(this),this.w("remotePlayerChange")};
function Yu(a){var b=a.g.media,c=a.g.customData;if(b&&c){var d=Ru(a);b.contentId!=d.videoId&&bt("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;Ku(d,a.g.getEstimatedTime());Wu(a,d)}else bt("No cast media video. Ignoring state update.")}
h.ne=function(a){a?(Yu(this),this.w("remotePlayerChange")):this.kb(null)};
h.ue=function(){var a=Fu();a&&Qu(this,a)};
h.M=function(a){Zs("CP",a)};
function Su(a,b,c){return v(function(d){this.M("Failed to "+b+" with cast v2 channel. Error code: "+d.code);d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.M("Retrying "+b+" using MDx browser channel."),Tu(this,b,c))},a)}
;function Z(a,b,c){pt.call(this);this.j=NaN;this.O=!1;this.F=this.A=this.L=this.N=NaN;this.J=[];this.i=this.u=this.h=this.D=this.f=null;this.U=a;this.J.push(O(window,"beforeunload",v(this.Kd,this)));this.g=[];this.D=new Iu;this.R=b.id;this.f=Zu(this,c);this.f.subscribe("handlerOpened",this.se,this);this.f.subscribe("handlerClosed",this.pe,this);this.f.subscribe("handlerError",this.qe,this);this.f.subscribe("handlerMessage",this.re,this);Ps(this.f,b.token);this.subscribe("remoteQueueChange",function(){var d=
this.D.videoId;Bt()&&iq("yt-remote-session-video-id",d)},this)}
ka(Z,pt);h=Z.prototype;
h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,g=b.index,k={videoId:d},l=b.currentTime,m=b.locationInfo;void 0!==l&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);m&&(k.locationInfo=m);f&&(k.clickTrackingParams=f);c&&(k.listId=c);void 0!==g&&(k.currentIndex=g);c&&(this.D.listId=c);this.D.videoId=d;this.D.index=g||0;this.D.state=3;Ku(this.D,l);this.i="UNSUPPORTED";$u("Connecting with setPlaylist and params: "+Dh(k));this.f.connect({method:"setPlaylist",params:Dh(k)},
a,Ft())}else $u("Connecting without params"),this.f.connect({},a,Ft());av(this)};
h.dispose=function(){this.K()||(this.w("beforeDispose"),bv(this,3));pt.prototype.dispose.call(this)};
h.B=function(){cv(this);dv(this);ev(this);Q(this.A);this.A=NaN;Q(this.F);this.F=NaN;this.h=null;zk(this.J);this.J.length=0;this.f.dispose();pt.prototype.B.call(this);this.i=this.u=this.g=this.D=this.f=null};
function $u(a){Zs("conn",a)}
h.Kd=function(){this.Pa(2)};
function Zu(a,b){return new Ls(dt(a.U,"/bc"),b)}
function bv(a,b){a.w("proxyStateChange",b)}
function av(a){a.j=P(v(function(){$u("Connecting timeout");this.Pa(1)},a),2E4)}
function cv(a){Q(a.j);a.j=NaN}
function ev(a){Q(a.N);a.N=NaN}
function fv(a){dv(a);a.L=P(v(function(){gv(this,"getNowPlaying")},a),2E4)}
function dv(a){Q(a.L);a.L=NaN}
h.se=function(){$u("Channel opened");this.O&&(this.O=!1,ev(this),this.N=P(v(function(){$u("Timing out waiting for a screen.");this.Pa(1)},this),15E3));
Jt(Ns(this.f),this.R)};
h.pe=function(){$u("Channel closed");isNaN(this.j)?Kt(!0):Kt();this.dispose()};
h.qe=function(a){Kt();isNaN(this.fb())?($u("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,$u("Channel error: "+a+" with reconnection in "+this.fb()+" ms"),bv(this,2))};
function hv(a,b){b&&(cv(a),ev(a));b==(Os(a.f)&&isNaN(a.j))?b&&(bv(a,1),gv(a,"getSubtitlesTrack")):b?(a.tc()&&a.D.reset(),bv(a,1),gv(a,"getNowPlaying"),iv(a)):a.Pa(1)}
function jv(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.D.videoId&&(Pb(b.params)?a.D.f=null:a.D.f=b.params,a.w("remotePlayerChange"))}
function kv(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.D.listId=b.params.listId||a.D.listId;Mu(a.D,c,d);a.w("remoteQueueChange")}
function lv(a,b){b.params=b.params||{};kv(a,b);mv(a,b);a.w("autoplayDismissed")}
function mv(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);Ku(a.D,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.D.playerState&&(c=-1E3);a.D.playerState=c;c=Number(b.params.loadedTime);a.D.G=isNaN(c)?0:c;c=Number(b.params.duration);a.D.g=isNaN(c)?0:c;c=a.D;var d=Number(b.params.liveIngestionTime);c.j=d;c.C=isNaN(d)?!1:!0;c=a.D;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.D.playerState?
fv(a):dv(a);a.w("remotePlayerChange")}
function nv(a,b){if(-1E3!=a.D.playerState){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.D.playerState=c;c=parseInt(b.params.currentTime,10);Ku(a.D,isNaN(c)?0:c);a.w("remotePlayerChange")}}
function ov(a,b){var c="true"==b.params.muted;a.D.volume=parseInt(b.params.volume,10);a.D.muted=c;a.w("remotePlayerChange")}
function pv(a,b){a.u=b.params.videoId;a.w("nowAutoplaying",parseInt(b.params.timeout,10))}
function qv(a,b){var c="true"==b.params.hasNext;a.D.l="true"==b.params.hasPrevious;a.D.hasNext=c;a.w("previousNextChange")}
h.re=function(a){a.params?$u("Received: action="+a.action+", params="+Dh(a.params)):$u("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=pi(a.params.devices);this.g=bb(a,function(c){return new Gs(c)});
a=!!fb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
hv(this,a);break;case "loungeScreenDisconnected":lb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
hv(this,!1);break;case "remoteConnected":var b=new Gs(pi(a.params.device));fb(this.g,function(c){return c.equals(b)})||ib(this.g,b);
break;case "remoteDisconnected":b=new Gs(pi(a.params.device));lb(this.g,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":kv(this,a);break;case "nowPlaying":lv(this,a);break;case "onStateChange":mv(this,a);break;case "onAdStateChange":nv(this,a);break;case "onVolumeChanged":ov(this,a);break;case "onSubtitlesTrackChanged":jv(this,a);break;case "nowAutoplaying":pv(this,a);break;case "autoplayDismissed":this.w("autoplayDismissed");break;case "autoplayUpNext":this.u=a.params.videoId||null;this.w("autoplayUpNext",this.u);break;case "onAutoplayModeChanged":this.i=
a.params.autoplayMode;this.w("autoplayModeChange",this.i);"DISABLED"==this.i&&this.w("autoplayDismissed");break;case "onHasPreviousNextChanged":qv(this,a);break;case "requestAssistedSignIn":this.w("assistedSignInRequested",a.params.authCode);break;default:$u("Unrecognized action: "+a.action)}};
h.af=function(){if(this.h){var a=this.h;this.h=null;this.D.videoId!=a&&gv(this,"getNowPlaying")}};
h.Gd=function(){var a=3;this.K()||(a=0,isNaN(this.fb())?Os(this.f)&&isNaN(this.j)&&(a=1):a=2);return a};
h.Pa=function(a){$u("Disconnecting with "+a);cv(this);this.w("beforeDisconnect",a);1==a&&Kt();Ms(this.f,a);this.dispose()};
h.Ed=function(){var a=this.D;this.h&&(a=this.D.clone(),Mu(a,this.h,a.index));return Nu(a)};
h.ff=function(a){var b=new Iu(a);b.videoId&&b.videoId!=this.D.videoId&&(this.h=b.videoId,Q(this.A),this.A=P(v(this.af,this),5E3));var c=[];this.D.listId==b.listId&&this.D.videoId==b.videoId&&this.D.index==b.index||c.push("remoteQueueChange");this.D.playerState==b.playerState&&this.D.volume==b.volume&&this.D.muted==b.muted&&Lu(this.D)==Lu(b)&&Dh(this.D.f)==Dh(b.f)||c.push("remotePlayerChange");this.D.reset(a);B(c,function(d){this.w(d)},this)};
h.tc=function(){var a=this.f.l.id,b=fb(this.g,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
h.fb=function(){var a=this.f;return a.g.isActive()?a.g.g-y():NaN};
h.Ad=function(){return this.i||"UNSUPPORTED"};
h.Bd=function(){return this.u||""};
h.lf=function(){if(!isNaN(this.fb())){var a=this.f.g,b=a.f;b.stop();b.wc();a.start()}};
function iv(a){Q(a.F);a.F=P(v(a.Pa,a,1),864E5)}
function gv(a,b,c){c?$u("Sending: action="+b+", params="+Dh(c)):$u("Sending: action="+b);a.f.sendMessage(b,c)}
h.cf=function(a,b){gv(this,a,b);iv(this)};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.ga;Z.prototype.getProxyState=Z.prototype.Gd;Z.prototype.disconnect=Z.prototype.Pa;Z.prototype.getPlayerContextData=Z.prototype.Ed;Z.prototype.setPlayerContextData=Z.prototype.ff;Z.prototype.getOtherConnectedRemoteId=Z.prototype.tc;Z.prototype.getReconnectTimeout=Z.prototype.fb;Z.prototype.getAutoplayMode=Z.prototype.Ad;Z.prototype.getAutoplayVideoId=Z.prototype.Bd;Z.prototype.reconnect=Z.prototype.lf;
Z.prototype.sendMessage=Z.prototype.cf;function rv(a){qt.call(this,"ScreenServiceProxy");this.W=a;this.g=[];this.g.push(this.W.$_s("screenChange",v(this.qf,this)));this.g.push(this.W.$_s("onlineScreenChange",v(this.Ce,this)))}
ka(rv,qt);h=rv.prototype;h.da=function(a){return this.W.$_gs(a)};
h.Jb=function(a){return!!this.W.$_c(a)};
h.get=function(a){return this.W.$_g(a)};
h.start=function(){this.W.$_st()};
h.add=function(a,b,c){this.W.$_a(a,b,c)};
h.remove=function(a,b,c){this.W.$_r(a,b,c)};
h.Gb=function(a,b,c,d){this.W.$_un(a,b,c,d)};
h.B=function(){for(var a=0,b=this.g.length;a<b;++a)this.W.$_ubk(this.g[a]);this.g.length=0;this.W=null;qt.prototype.B.call(this)};
h.qf=function(){this.w("screenChange")};
h.Ce=function(){this.w("onlineScreenChange")};
Y.prototype.$_st=Y.prototype.start;Y.prototype.$_gspc=Y.prototype.rf;Y.prototype.$_gsppc=Y.prototype.nd;Y.prototype.$_c=Y.prototype.Jb;Y.prototype.$_g=Y.prototype.get;Y.prototype.$_a=Y.prototype.add;Y.prototype.$_un=Y.prototype.Gb;Y.prototype.$_r=Y.prototype.remove;Y.prototype.$_gs=Y.prototype.da;Y.prototype.$_gos=Y.prototype.md;Y.prototype.$_s=Y.prototype.subscribe;Y.prototype.$_ubk=Y.prototype.ga;function sv(a){a=M("MDX_CONFIG")||a;nq();xt();tv||(tv=new ct(a?a.loungeApiHost:void 0),Lt()&&(tv.f="/api/loungedev"));uv||(uv=t("yt.mdx.remote.deferredProxies_")||[],z("yt.mdx.remote.deferredProxies_",uv));vv();var b=wv();if(!b){var c=new Y(tv);z("yt.mdx.remote.screenService_",c);b=wv();var d=!1,e=void 0,f=void 0,g=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,g=!!a.disableDial);su(c,function(k){k?xv()&&Gu(xv(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){Lk("yt-remote-receiver-availability-change")})},
d,e,f,g)}a&&!t("yt.mdx.remote.initialized_")&&(z("yt.mdx.remote.initialized_",!0),yv("Initializing: "+Dh(a)),zv.push(S("yt-remote-cast2-availability-change",function(){Lk("yt-remote-receiver-availability-change")})),zv.push(S("yt-remote-cast2-receiver-selected",function(){Av();
Lk("yt-remote-auto-connect","cast-selector-receiver")})),zv.push(S("yt-remote-cast2-receiver-resumed",function(){Lk("yt-remote-receiver-resumed","cast-selector-receiver")})),zv.push(S("yt-remote-cast2-session-change",Bv)),zv.push(S("yt-remote-connection-change",function(k){k?Gu(xv(),"YouTube TV"):Cv()||(Gu(null,null),Eu())})),d=Dv(),a.isAuto&&(d.id+="#dial"),Vj("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),yv(" -- with channel params: "+
Dh(d)),Ev(d),b.start(),xv()||Fv())}
function Gv(){var a=xv();if(!a)return null;var b=wv().da();return ot(b,a)}
function Bv(a){yv("remote.onCastSessionChange_: "+kt(a));if(a){var b=Gv();b&&b.id==a.id?Gu(b.id,"YouTube TV"):(b&&Hv(),Iv(a,1))}else Jv()&&Hv()}
function Hv(){Hu()?Bu().stopSession():yu("stopSession called before API ready.");var a=Jv();a&&(a.disconnect(1),Kv(null))}
function Lv(){var a=Jv();return a&&3!=a.getProxyState()?new Ou(Jv(),void 0):null}
function yv(a){Zs("remote",a)}
function wv(){if(!Mv){var a=t("yt.mdx.remote.screenService_");Mv=a?new rv(a):null}return Mv}
function xv(){return t("yt.mdx.remote.currentScreenId_")}
function Nv(a){z("yt.mdx.remote.currentScreenId_",a)}
function Av(){z("yt.mdx.remote.connectData_",null)}
function Jv(){return t("yt.mdx.remote.connection_")}
function Kv(a){var b=Jv();Av();a||Nv("");z("yt.mdx.remote.connection_",a);uv&&(B(uv,function(c){c(a)}),uv.length=0);
b&&!a?Lk("yt-remote-connection-change",!1):!b&&a&&Lk("yt-remote-connection-change",!0)}
function Cv(){var a=Bt();if(!a)return null;var b=wv().da();return ot(b,a)}
function Iv(a,b){Gv()&&Gv();Nv(a.id);var c=new Z(tv,a,Dv());c.connect(b,t("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(d){Lk("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){Jv()&&Kv(null)});
Kv(c)}
function Fv(){var a=Cv();a?(yv("Resume connection to: "+kt(a)),Iv(a,0)):(Kt(),Eu(),yv("Skipping connecting because no session screen found."))}
var tv=null,uv=null,Mv=null;function vv(){var a=Dv();if(Pb(a)){a=At();var b=lq("yt-remote-session-name")||"",c=lq("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};z("yt.mdx.remote.channelParams_",a)}}
function Dv(){return t("yt.mdx.remote.channelParams_")||{}}
function Ev(a){a?(iq("yt-remote-session-app",a.app),iq("yt-remote-session-name",a.name)):(mq("yt-remote-session-app"),mq("yt-remote-session-name"));z("yt.mdx.remote.channelParams_",a)}
var zv=[];function Ov(){this.f=E("watch-queue-loading-template");Dp(this.f,[])}
;function Pv(a){rp.call(this);this.A=a;this.ba=0;this.l=this.J=this.j=this.F=this.u=this.i=this.L=null}
ka(Pv,rp);h=Pv.prototype;
h.ya=function(){rp.prototype.ya.call(this);this.l=this.na();this.ba=parseInt(N(this.l,"max-title-length"),10)||0;this.F=bj(this,"create-button");this.j=bj(this,"cancel-button");this.u=bj(this,"privacy-button");var a=cj(this);this.i=bj(this,"title-input");Ig(a,this.i,"keyup",this.Yc);Ig(a,this.i,"paste",this.Yc);Ig(a,this.l,"reset",this.Ae);Ig(a,this.l,"submit",this.Be);this.L=bj(this,"create-playlist-widget-privacy-menu");this.J=bj(this,"is-selected");a=S("yt-uix-menu-item-clicked",v(this.Fe,this));
this.ha.push(a)};
h.ua=function(){Qv(this);this.l=this.J=this.j=this.F=this.L=this.u=this.i=null;rp.prototype.ua.call(this)};
h.setVideoIds=function(a){bj(this,"video-ids-input").value=a};
h.Yc=function(){var a=tb(this.i.value).length;lk(this.F,0<a&&(!this.ba||a<=this.ba))};
h.Fe=function(a){qe(this.L,a)&&(a=De(a,"yt-ui-menu-item"),Rv(this,a),a=N(a,"value"),bj(this,"privacy-value-input").value=a)};
function Rv(a,b){var c=Om.getInstance();re(F(V(c,"content"),a.u),tb(ze(b)));I(F("is-selected",a.L),"is-selected");H(b,"is-selected");c=N(b,"privacy-state");bk(a.u,"privacy-state",c)}
function Sv(a,b){lk(a.F,b);a.j&&lk(a.j,b);lk(a.i,b);lk(a.u,b)}
function Qv(a){a.i.value="";var b=bj(a,"title-input-container");I(b,"yt-uix-form-error");ie(F("yt-uix-form-error-message",b));lk(a.u,!0);(b=F("is-selected",a.L))&&a.J&&b!=a.J&&Rv(a,a.J);lk(a.F,!1);a.j&&lk(a.j,!0);lk(a.i,!0)}
h.Be=function(a){a.preventDefault();a=this.l;var b={context:this,onSuccess:this.xe,onError:this.we};b=void 0===b?{}:b;b.method=a.method.toUpperCase();if("POST"==b.method){var c=b,d=[];Vf(a,d,Yf);c.postBody=d.join("&")}else{d=new Rf;Vf(a,d,Xf);Sf(d);c={};for(var e=0;e<d.f.length;e++){var f=d.f[e];c[f]=d.g[f]}d=b.ob||{};Vb(d,c);b.ob=d}hl(a.action,b);Sv(this,!1)};
h.xe=function(a,b){Qv(this);this.A&&Ha(this.A.Bb)&&this.A.Bb({playlistId:b.result.playlistId,playlistName:b.result.playlistName,Ve:b.result.playlistUrl});U("yt-uix-videoactionmenu-hide")};
h.we=function(a,b){if(b&&b.errors&&b.errors.length){var c=bj(this,"title-input-container"),d=b.errors[0];H(c,"yt-uix-form-error");if(d){var e=F("yt-uix-form-error-message",c);e?e.innerHTML=d:(d=ae("SPAN","yt-uix-form-error-message",document.createTextNode(String(d))),d.setAttribute("role","alert"),c.appendChild(d))}Sv(this,!0)}};
h.Ae=function(){Qv(this);this.A&&Ha(this.A.Ab)&&this.A.Ab()};function Tv(a){rp.call(this);this.A={Bb:a.Bb,Ab:v(function(){An.getInstance().hide(this.na());Ha(a.Ab)&&a.Ab()},this)};
this.j=this.i=null}
ka(Tv,rp);Tv.prototype.ya=function(){rp.prototype.ya.call(this);this.i=E(N(this.na(),"dialog-id"));if(!this.i)throw Error("Cannot find create playlist widget dialog.");Ig(cj(this),document,"click",this.l);var a=S("yt-uix-card-show",v(this.u,this));this.ha.push(a);a=F("create-playlist-widget-form",this.i);this.j=new Pv(this.A);dj(this.j,a)};
Tv.prototype.ua=function(){this.i=null;this.j.dispose();this.j=null;rp.prototype.ua.call(this)};
Tv.prototype.l=function(a){qe(this.i,Ak(a))||An.getInstance().hide(this.na())};
Tv.prototype.u=function(a){a==this.na()&&bj(this.j,"title-input").focus()};function Uv(){Rl.call(this,"scroller");this.f={}}
A(Uv,Rl);Da(Uv);h=Uv.prototype;h.register=function(){Tl(this,"mouseenter",this.Lc);Tl(this,"mouseleave",this.zb)};
h.unregister=function(){Ul(this,"mouseenter",this.Lc);Ul(this,"mouseleave",this.zb);for(var a in this.f)this.zb(this.f[a]);this.f={};Uv.H.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.zb(this.f[a]);this.f={}};
h.Lc=function(a){var b=O(a,"mousewheel",v(this.Qd,this,a));bk(a,"scroller-mousewheel-listener",b);b=O(a,"scroll",v(this.yf,this,a));bk(a,"scroller-scroll-listener",b);a&&(b=Ja(a).toString(),this.f[b]=a)};
h.zb=function(a){var b=this.I(a,"scroller-mousewheel-listener")||"";bk(a,"scroller-mousewheel-listener","");var c=this.I(a,"scroller-scroll-listener")||"";bk(a,"scroller-scroll-listener","");zk(b);zk(c);bk(a,"scroller-scroll-listener","");a&&(a=Ja(a).toString(),delete this.f[a])};
h.Qd=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.I(a,"scroller-allow-pagescroll")||b.preventDefault()};
h.yf=function(a){this.cb(a,"scroll-action");U("yt-dom-content-change",a)};function Vv(a){hl("/playlist_video_ajax?action_add_to_playlist=1",{method:"POST",ob:{feature:a.feature||null,authuser:a.Zf||null,pageid:a.pageId||null},ka:{video_ids:a.videoIds||null,source_playlist_id:a.sourcePlaylistId||null,full_list_id:a.fullListId||null,delete_from_playlists:a.kg||null,add_to_playlists:a.Yf||null,plid:M("PLAYBACK_ID")||null},context:a.context,onError:a.onError,onSuccess:function(b,c){a.onSuccess.call(this,b,c)},
ze:a.ze,withCredentials:!1})}
;var Wv,Xv,W,Yv,Zv,$v,aw,bw,cw,dw,ew,fw,gw,hw,iw,pe,jw,kw,lw,mw,nw;var ow;function pw(a,b){this.type=a;this.videoIds=b||[]}
function qw(a){"string"===typeof a&&(a=[a]);var b=new pw(1,a);ow&&rw(function(){B(a,function(c){ow.dd(c)})},b,void 0)}
function sw(a,b,c){var d=new pw(2);ow&&rw(function(){ow.Oc(a,b,c)},d,void 0)}
function tw(a){var b=new pw(2);ow&&rw(function(){ow.dc(a)},b,void 0)}
function uw(a,b,c){b||vw(a,b,c)}
function vw(a,b,c){ow&&rw(function(){b&&ow.playVideo(b,0,0,a)},void 0,c)}
function ww(a,b){var c=[];0==c.length||!hb(c,a)||xw(a,c,b)}
function xw(a,b,c){ow&&rw(function(){var d=ow,e=Ru(d),f=Za(b,a);Tu(d,"setPlaylist",{videoId:a,videoIds:b.join(",")});Mu(e,a,f);Wu(d,e)},void 0,c)}
function yw(){var a=new pw(2);ow&&rw(function(){ow.stop();ow.kc()},a,void 0)}
function zw(a){ow=a;ow.subscribe("remoteQueueChange",function(){U("queue-change",new pw(2))})}
function Aw(){var a=Lv();eg(ow);ow=null;a?zw(a):U("queue-change",new pw(2))}
function rw(a,b,c){ow&&1==ow.f&&(a.call(n),c&&P(function(){c()},0),void 0!==b&&U("queue-change",b))}
var Bw=[];var Cw;function Dw(){if(!Cw){var a=E("watch-queue");if(!a)return[];Cw=F("watch-queue-items-list",a)}if(!Cw)return[];var b=[];a=ke(Cw);B(a,function(c){(c=N(c,"video-id"))&&b.push(c)});
return b}
;function Ew(){U("yt-dom-content-change",iw)}
z("yt.www.watchqueue.loadThumbnails",Ew);
function Fw(){pe=E("watch-queue");bw=F("watch-queue-control-bar",pe);cw=F("watch-queue-count",bw);dw=F("yt-uix-button-dark-overflow-action-menu",bw);ew=F("prev-watch-queue-button",pe);fw=F("next-watch-queue-button",pe);gw=F("play-watch-queue-button",pe);hw=F("pause-watch-queue-button",pe);iw=F("watch-queue-items-list",pe);jw=F("autoplay-control-bar",pe);kw=F("yt-uix-form-input-checkbox-container",jw);lw=F("autoplay-label",jw);mw=F("autoplay-dismiss-bar",pe);nw=F("up-next-item-container",pe);Gw.push(Bk(pe,
"click",Hw,"yt-uix-button"));Gw.push(Bk(pe,"click",Iw,"watch-queue-video"));Gw.push(Bk(pe,"click",Jw,"control-bar-button"));Gw.push(O(iw,gg,Kw));Gw.push(Bk(iw,gg,Lw,"watch-queue-item"));Gw.push(Bk(pe,"click",Mw,"autoplay-control-bar"));Gw.push(Bk(mw,"click",Nw,"autoplay-dismiss-button"));Gw.push(Bk(null,"click",Ow,"watch-queue-video-menu-choice"));Gw.push(Bk(null,"click",Pw,"watch-queue-menu-choice"));aw=new Ap(E("watch-queue-count-msg").textContent,["count","total"]);new Ov;Yv=!1;var a=E("watch-queue-save-as-playlist-widget");
a&&($v=new Tv({Bb:Qw}),dj($v,a));Xv=null;sv({device:"Desktop",app:"youtube-desktop",isSignedIn:M("LOGGED_IN")});sv();Bw.push(S("yt-remote-connection-change",Aw));(a=Lv())&&zw(a);Rw.push(S("init",Sw));Rw.push(S("dispose",Tw));Rw.push(S("yt-remote-before-disconnect",Uw));Rw.push(S("yt-remote-connection-change",Vw));Vw();Sw();Rw.push(S("queue-change",Ww));Rw.push(S("watch-queue-addto-video-added",Xw));Rw.push(S("watch-queue-addto-video-removed",Xw));Rw.push(S("watch-queue-addto-video-play-next",Yw));
Rw.push(S("watch-queue-addto-video-play-now",Zw));Rw.push(S("watch-queue-addto-playlist-added",Xw));Rw.push(S("watch-queue-addto-playlist-removed",Xw));Rw.push(S("watch-queue-addto-playlist-play-next",$w));Rw.push(S("watch-queue-addto-playlist-play-now",ax))}
function bx(){var a=E("player-playlist");return a?oe()==a:!1}
function cx(){var a=!1;if(!W||!vl(Wv)||!M("PAGE_NAME"))return dx(),a;var b=ex(),c=fx();gx()&&c&&b!=c&&(hx(c),b=c);c=!!M("LIST_ID");if(b=gx()&&!!b&&(b==M("VIDEO_ID")||b==Zv)&&!c){var d=E("player-playlist");d&&!bx()&&(I(Wv,"mole-notification"),he(d,pe),U("watch-queue-show",1),ix(),a=!0)}else oe()!=Wv&&(Wv.appendChild(pe),U("watch-queue-show",0),Ew(),a=!0);d=E("placeholder-playlist");b||c?xl(d):yl(d);dx();return a}
function hx(a){if(Xv){var b=!!W,c=b&&!(a&&(a==M("VIDEO_ID")||a==Zv));vo(c);b&&gx()&&(c?U("watch-queue-show",0):U("watch-queue-show",1));if(Xv.isReady())Xv.loadVideoById(a);else{var d=function(){Xv.loadVideoById(a);Xv.removeEventListener("onReady",d)};
Xv.addEventListener("onReady",d)}}}
function ex(){return Xv&&Xv.isReady()?Xv.getVideoData().video_id||"":""}
function fx(){return W?Ru(W).videoId:""}
function jx(a){ex()!=kx()&&lx(ex());mx(1==a);cx()}
function dx(){Xv&&(ex()?Yv||vo(!!W&&(vl(Wv)||nx())&&oe()==Wv):vo(!1))}
function Sw(){I(Wv,"mole-notification");Zv="";to();cx();var a=Xv;a&&a.addEventListener("onStateChange",jx)}
function Tw(){var a=Wv;I(a,"mole-expanded");H(a,"mole-collapsed");(a=Xv)&&a.removeEventListener("onStateChange",jx)}
function gx(){return"watch"==M("PAGE_NAME")}
function ox(a){if(a!=kx()){var b=Dw(),c=b[0];px()&&(c=b[qx()+1]);a!=c&&hb(b,a)&&sw(a,Za(b,a),Za(b,c))}}
function Hw(a){if(a.currentTarget==ew){if(nx()){var b=ke(iw);a=qx();b=b.length;a=(b+a-1)%b;rx(a);ix();(b=kx())&&W&&W.cd(b,a)}}else if(a.currentTarget==fw)nx()&&(a=ke(iw),a=(qx()+1)%a.length,rx(a),ix(),(b=kx())&&W&&W.nextVideo(b,a));else if(a.currentTarget==gw)yl(gw),xl(hw),W?(a=Dw(),!fx()&&a[0]?W.playVideo(a[0]):W.play()):Xv&&Xv.playVideo();else if(a.currentTarget==hw)yl(hw),xl(gw),W?W.pause():Xv&&Xv.pauseVideo();else if(G(a.currentTarget,"remove-item-watch-queue-button")){if(a=Be(a.currentTarget,
null,"watch-queue-item"),b=N(a,"video-id"))H(a,"fade-out"),qw(b)}else G(a.currentTarget,"expand-video-watch-queue-button")&&sx(a.currentTarget)}
function Pw(a){var b=N(a.currentTarget,"action");tx[b](a.currentTarget);a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();Um(Om.getInstance(),dw)}
function Jw(a){oe()==Wv&&a.currentTarget==bw&&(a=Ak(a),a&&G(a,"overflow-menu-choice")||(Jf(Wv,"mole-expanded"),Jf(Wv,"mole-collapsed")))}
function Ow(a){var b=N(a.currentTarget,"action");ux[b](a.currentTarget)}
function Kw(){I(Wv,"mole-notification");G(Wv,"mole-expanded")&&Ew();Um(Om.getInstance(),dw)}
function Lw(a){G(a.currentTarget,"fade-out")&&(ie(a.currentTarget),lx(fx()),vx());Ew()}
function Iw(a){a=Be(a.currentTarget,null,"watch-queue-item");if(!G(a,"currently-playing")){var b=ke(iw);b=Za(b,a);rx(b);(a=N(a,"video-id"))&&W&&W.playVideo(a,0,b)}}
function Mw(){var a=!G(kw,"checked");W&&W.gd(a);wx(a)}
function Nw(){W&&W.qc()}
function Qw(a){var b=a.playlistId,c=a.Ve;b&&c&&(a={videoIds:Dw().join(","),fullListId:b,onSuccess:function(){Nm(c)}},Vv(a))}
function sx(a){G(a,"disabled")||(a=N(a,"video-id"))&&xx(a)}
function px(){return!!F("currently-playing",iw)}
function qx(){var a=F("currently-playing",iw);if(a){var b=ke(iw);return Za(b,a)}return 0}
function kx(){var a=F("currently-playing",iw);return a?N(a,"video-id")||"":""}
function lx(a){a=Za(Dw(),a);0<=a?px()&&qx()==a||(rx(a),ix()):yx()}
function rx(a){if(nx()){yx();var b=ke(iw);b[a]&&H(b[a],"currently-playing");zx()}}
function yx(){if(nx()){var a=F("currently-playing",iw);a&&I(a,"currently-playing");zx()}}
function Yw(a){ox(a);Xw()}
function Zw(a){W&&W.playVideo(a);a!=kx()&&(hx(a),Xw());Zv=a}
function $w(a){Dw();px()&&qx();tw(a);Xw()}
function ax(a,b,c){b&&(c?ww(b,function(){Zv=b}):uw(a,b,function(){Zv=b}),Xw())}
function Xw(){vl(Wv)&&H(Wv,"mole-notification")}
function Ax(){var a=px()?qx()+1:0,b=Dw().length;0<a&&0<b?re(cw,Fp(aw,{count:a,total:b})):ge(cw)}
function mx(a){a?(yl(gw),xl(hw)):(yl(hw),xl(gw))}
function zx(){var a=Dw().length,b=1>=a,c=px()?qx():-1;ew.disabled=b||0==c;fw.disabled=b||c==a-1;Ax();if(0!=a){var d=null;a=ke(iw);B(a,function(e){var f=N(e,"video-id"),g=F("play-next",e);Hf(F("goto-video-page",e),"disabled",gx()&&f==M("VIDEO_ID")&&!M("LIST_ID"));G(e,"currently-playing")?(d=e,yl(g)):d?(d=null,Hf(g,"disabled",!0)):Hf(g,"disabled",!1)})}}
function vx(){zx();0==Dw().length?Bx():(xl(Wv),cx()||U("watch-queue-show",oe()==Wv?0:1));U("watch-queue-update")}
function nx(){var a=le(iw);return!!a&&G(a,"watch-queue-item")}
function ix(){var a=F("currently-playing",iw);if(a){var b=Uv.getInstance(),c=iw;if(c&&a&&(a=Za(Sd(V(b,"scroll-unit"),c),a),0<=a&&!(!c||isNaN(a)||0>a)&&(b=Sd(V(b,"scroll-unit"),c),!(0>=b.length)))){a>=b.length&&(a=b.length-1);if(b.length){var d=b[0];var e=d.offsetHeight;1<b.length&&(e=b[1].offsetTop-d.offsetTop);d=e}else d=0;e=c.offsetHeight;a>Math.max(Math.floor(c.scrollTop/d),0)-1&&(d=Math.floor(e/d),e=b.length,a+d>e&&(a=e-d+1));0>a&&(a=0);a=b[a].offsetTop;c&&!isNaN(a)&&(0>a&&(a=0),c.scrollTop=a,
bk(c,"scroller-offset",a+""),U("yt-dom-content-change",c))}}Ew()}
function xx(a){a=Qe("/watch",{v:a});Nm(a)}
function Cx(a){gx()&&(a!=M("VIDEO_ID")||M("LIST_ID")?(P(function(){xx(a)},100),Zv=a):cx())}
function Uw(a){Dx=a}
function Vw(){var a=Lv();eg(W);W=null;Q(Ex);Ex=NaN;ge(iw);vx();if(a){W=a;W.subscribe("proxyStateChange",Fx);W.subscribe("remotePlayerChange",Gx);W.subscribe("autoplayModeChange",Hx);W.subscribe("autoplayUpNext",Ix);var b=a.i.getAutoplayMode();Hx(b);b=a.i.getAutoplayVideoId();Ix(b);W.subscribe("autoplayDismissed",Jx);W.subscribe("nowAutoplaying",Kx);Dx=null;b=Ru(a).videoId;M("LIST_ID")&&b&&(b=Qe("/watch",{v:b}),Nm(b))}else Bx();2!=Dx&&(to(),U("watch-queue-remote-connection",!!a))}
function Hx(a){"UNSUPPORTED"==a?yl(jw):(a="ENABLED"==a,Hf(kw,"checked",a),wx(a),xl(jw))}
function Ix(a){W&&(a||yl(nw))}
function Jx(){H(mw,"fade-out")}
function Kx(){I(mw,"fade-out")}
function wx(a){a=a?br("MDX_AUTOPLAY_ON"):br("MDX_AUTOPLAY_OFF");re(lw,a)}
function Bx(){oe()==Wv||Wv.appendChild(pe);var a=E("placeholder-playlist");M("LIST_ID")?xl(a):yl(a);a=Wv;I(a,"mole-expanded");H(a,"mole-collapsed");yl(Wv);dx();U("watch-queue-hide",0)}
function Fx(){Q(Ex);Ex=NaN}
function Gx(){var a=Ru(W);mx(1==a.playerState)}
function Ww(){if(W){var a=kx(),b=fx();b&&b!=a&&lx(b);b&&(bx()||Zv==b)&&Cx(b)}}
var tx={"remove-all":function(){yw();ge(iw);vx();U("watch-queue-empty");Bx()},
"save-as-playlist":function(){if(0!=Dw().length){var a=$v;An.getInstance().show(a.na())}},
disconnect:function(){Hv()}},ux={"play-next":function(a){G(a,"disabled")||(a=N(a,"video-id"))&&ox(a)},
"goto-video-page":sx},Gw=[],Rw=[],Ex=NaN,Dx=null;z("yt.www.guide.setup",Fq);z("yt.www.guide.selectGuideItem",function(a){if(up){var b=null,c=F("guide-item-selected",up);c&&(b=N(c,"serialized-endpoint")||"");b!=a&&(b&&I(c,"guide-item-selected"),a&&(a=Uq(a))&&H(a,"guide-item-selected"))}});
z("yt.www.masthead.dismissReturnToMobileMessage",function(){tl("a=NO_MWEB",void 0);yl(E("return-to-mobile"))});
z("yt.www.masthead.dismissChromeAlert",function(){var a=uq.getInstance();zq(169,!0);a.save()});
z("yt.www.masthead.dismissKevlarPromo",function(){var a=uq.getInstance();zq(173,!0);a.save()});
z("yt.www.masthead.dismissTosAlert",function(){var a=uq.getInstance();zq(160,!0);a.save()});
z("yt.www.masthead.handleAccountPickerClick",function(){var a=E("yt-masthead-multilogin");if(N(a,"loaded"))Fr();else{var b=Wq();b[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0);spf.load("/delegate_account_ajax",{method:"POST",postData:Pe(b),onDone:function(){bk(a,"loaded","true");Fr()}})}});
z("yt.www.notifications.inbox.handleNotificationsClick",function(){kr(0);if(!pr&&(G(rr,"yt-high-priority-notification")&&(xr(),qr&&tr&&(An.getInstance().show(tr),H(qr,"yt-uix-clickcard-active"))),!N(sr,"loaded"))){var a={action_get_notifications_flyout:1};a[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0);spf.load("/feed_ajax",{method:"POST",postData:Pe(a),onDone:function(){bk(sr,"loaded","true");var b=tr;I(b,"sb-notif-on");H(b,"sb-notif-off");Bk(sr,"click",Br,"yt-lockup-notification")}})}});
z("yt.www.masthead.loadSearchbox",Hr);z("yt.net.cookies.set",Yj);z("yt.net.cookies.remove",Zj);z("yt.www.picker.load",function(a){var b=N(a,"picker-key"),c=N(a,"picker-position"),d="yt-picker-"+b+"-"+c;if(c=E(d))a=N(a,"button-menu-id")==d,d=N(c,"loaded"),Cs(c,b,!!a,!!d)});
z("yt.www.picker.displayLang",function(){Bs("language")});
z("yt.www.picker.applyGrid",Es);
z("ytbin.www.pageframe.setup",function(){Yn("GUIDE_DELAYLOADED_CSS");Yn("PAGE_FRAME_DELAYLOADED_CSS",w(I,document.body,"delayed-frame-styles-not-in"),M("WAIT_TO_DELAYLOAD_FRAME_CSS")?"yt-www-pageFrameCssNotifications-load":null);jp=E("a11y-announcements-container");kp=E("a11y-announcements-message");S("a11y-announce",qp);S("init",np);if(op=E("a11y-skip-nav"))np(),O(op,"click",pp);null==lp&&mp();lp&&(Ff(document.body,["yt-high-contrast-mode","yt-high-contrast-mode-"+lp]),Yn("HIGH_CONTRAST_MODE_CSS"));
F("guide-module-loading")||Fq();T.init();Cr=F("yt-masthead-user-icon");Bk(E("ticker"),"click",Gr,"yt-uix-close");F("exp-searchbox-redesign")&&O(E("yt-masthead-content"),"click",Kr);Hr();vr();gs();(Wv=E("watch-queue-mole"))?Fw():sv({device:"Desktop",app:"youtube-desktop",isSignedIn:M("LOGGED_IN")});M("YOODLE_IS_ANIMATED")&&On(M("YOODLE_JS_URL",void 0),function(){t("yt.www.masthead.AnimatedYoodle.init")(M("YOODLE_ANIMATION_FRAMES"),M("YOODLE_ANIMATION_DURATION"),M("YOODLE_ANIMATION_DELAY"),M("YOODLE_STOP_ON_LAST_FRAME"))});
M("SAFETY_MODE_PENDING")&&Bs("safetymode")});
z("ytbin.www.pageframe.cancelSetup",function(){Jr()});}).call(this);

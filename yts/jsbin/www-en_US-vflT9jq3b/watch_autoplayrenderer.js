(function(g){var window=this;var cya=function(){var a=g.Kg();return!(!a||"visible"==a)},p9=function(){return!g.Fv(g.Dv.getInstance(),140)},eya=function(){if(g.E("AUTONAV_EXTRA_CHECK")){var a=p9(),b=!dya.get("autonav_disabled"),c="";
a!==b&&(c="Cookie does not match localstorage value cookie: "+a+"\n        LocalStorage: "+b);c&&g.ci(Error(c))}},nya=function(){q9.push(g.ig("player-playback-start",g.w(r9,!0)));
q9.push(g.ig("player-autonav-change-request",fya));q9.push(g.ig("player-autonav-pause-request",gya));(0,g.B)(["check","uncheck","change"],function(b){s9.push(g.I(t9,b,hya))});
q9.push(g.ig("page-scroll",iya));s9.push(g.I(g.z("watch8-secondary-actions"),"click",jya,!0));s9.push(g.I(document.body,"focus",kya,!0));s9.push(g.I(document.body,"blur",lya,!0));q9.push(g.ig("yt-www-comments-sharebox-open",kya));s9.push(g.I(document,"visibilitychange",u9));var a=g.kL();a.addEventListener("onVolumeChange",u9);a.addEventListener("onStateChange",mya)},jya=function(){oya=g.ag(function(){var a=g.z("watch-action-panels");
if(a){for(var b=g.L("pause-resume-autoplay"),c=!1,d=0;d<b.length;d++)if(g.D(b[d],"yt-uix-button-toggled")){c=!0;break}!c&&g.D(a,"hid")?(v9=!1,g.cg(oya)):v9=!0;r9()}},500)},pya=function(){w9=null!=document.activeElement&&"IFRAME"==document.activeElement.tagName.toUpperCase();
r9()},iya=function(){x9=-200>y9.getBoundingClientRect().top;
r9()},qya=function(a){return"INPUT"==a.tagName||"TEXTAREA"==a.tagName||!!a.isContentEditable},kya=function(a){if(a&&qya(a.target)){if("autoplay-checkbox"==a.target.id)return;
z9=!0}r9()},u9=function(){if(rya()){var a=g.kL();
A9=cya()&&(a.isMuted()||0==a.getVolume());r9()}},gya=function(a){B9=a;
r9()},sya=function(){C9=!0;
r9();D9=0},tya=function(){if(E9){var a=g.yi();
a&&g.Zh("youThere",{clientScreenNonce:a,youThereEventType:"YOU_THERE_EVENT_TYPE_AUTOPLAY_RESUMED"})}E9=C9=!1;r9();D9&&g.bg(D9);D9=g.$f(sya,144E5-g.jh())},lya=function(a){cya()||(a&&qya(a.target)&&(z9=!1),r9())},r9=function(a){F9=x9||w9||z9||A9||B9||v9||C9||E9||uya;
var b=p9()?F9?3:2:1;var c=g.kL(),d=rya();d&&!c.setAutonav&&g.Xf(Error("Player is ready but setAutonav is not"));d&&(a||vya!=b)&&(c.setAutonavState(b),vya=b);eya()},rya=function(){var a=g.kL();
return!(!a||!a.isReady())},hya=function(){var a=t9.checked,b=p9();
a!==b&&(b=g.wc({state:a?"enabled":"disabled"}),g.Kr("autoplay",b),b=g.Dv.getInstance(),a||g.Gv(141,!0),g.Gv(140,!a),b.save(),dya.set("autonav_disabled",!a));r9()},fya=function(a){t9.checked=a;
hya()},mya=function(a){if(0==a&&g.E("PREFETCH_AUTONAV")&&p9()&&!F9&&(a=g.M("spf-link",g.M("autoplay-bar")))){var b=g.Az(a);
b.autonav=1;b.feature="related-auto";b.playnext=1;var c=g.jh();0<c&&(b.lact=c);if(c=g.kL())c=c.getVisibilityState(),0!=c&&(b.vis=c);g.zE(a.href,!!g.E("PREBUFFER_AUTONAV"),b)}},dya=new g.Uh("yt.autonav");var s9=[],q9=[],y9=null,t9=null,wya=0,oya=0,D9=0,xya=0,F9=!1,x9=!1,z9=!1,v9=!1,w9=!1,A9=!1,B9=!1,C9=!1,E9=!1,uya=!1,vya=1;g.aj(g.Ar({name:"www/autoplayrenderer",deps:["www/watch"],page:"watch",init:function(){y9=g.z("player");if(t9=g.z("autoplay-checkbox"))g.kL()?(wya=g.ag(pya,500),tya(),q9.push(g.ig("USER_ACTIVE",tya)),t9.checked=p9(),nya(),iya(),u9(),eya()):g.Zf(Error("Autoplay player is missing"))},
dispose:function(){g.Vg(s9);s9.length=0;g.jg(q9);D9&&(g.bg(D9),D9=0);g.bg(xya);xya=0;q9.length=0;t9=y9=null;x9=!1;g.cg(wya);var a=g.kL();a&&(a.removeEventListener("onStateChange",mya),a.removeEventListener("onVolumeChange",u9));uya=E9=C9=B9=A9=v9=w9=z9=x9=F9=!1}}));})(_yt_www);

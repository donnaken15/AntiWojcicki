(function(g){var window=this;var fma,gma,hma,UR,WR,ZR,YR,$R,aS,bS,cS,hS,ima,jma,kma,lma,iS,nS,mma,pS,qS,nma,oma,uS;fma=function(){g.KG()};
g.SR=function(a,b){var c=a.elements[b];if(c){if(c.type)return g.tq(c);for(var d=0;d<c.length;d++){var e=g.tq(c[d]);if(e)return e}}return null};
gma=function(a,b,c){0<c.length||(0,g.B)(g.L(b),function(d){var e=new a;e.Ra(d);c.push(e)})};
hma=function(a){(0,g.B)(a,function(b){b.dispose()});
a.length=0};
g.TR=function(a,b){var c=[];a.init=g.w(gma,a,b,c);a.dispose=g.w(hma,c)};
UR=function(){g.X.apply(this,arguments)};
g.VR=function(){this.D=null;g.X.call(this)};
WR=function(){g.X.call(this);this.D=this.Rh=this.Ki=null;this.J=g.E("CHANNEL_ID",void 0)};
ZR=function(a,b){a.Ki.innerHTML="";a.Rh.innerHTML="";var c=a.R("business-email-button");c&&g.U(a).Va(c,"click",a.G);a.D&&YR(a);a.Rh.innerHTML=b;g.ig("https://www.google.com/recaptcha/api.js");a.D=a.R("captcha-form");a.D&&g.U(a).O(a.D,"submit",a.H)};
YR=function(a){g.U(a).Va(a.D,"submit",a.H);a.D=null};
$R=function(){g.X.call(this)};
aS=function(){g.X.call(this)};
bS=function(){g.X.call(this);this.D=null};
cS=function(){g.X.call(this)};
g.dS=function(){g.X.call(this);this.H=this.D=!1};
hS=function(){g.Qi(eS);eS.length=0;g.dd(fS);gS=fS=null};
ima=function(a){gS==a.C&&hS()};
jma=function(a){iS(!0,a.C)};
kma=function(a){iS(!1,a.C)};
lma=function(){jS&&jS.pauseVideo()};
iS=function(a,b){if(b==kS){if(lS&&(g.fg(lS),lS=0,!a))return;var c;if(c=a&&jS)c=jS,c=!(c.D&&c.D.isReady()&&0==c.D.getPlayerState());c&&(lS=g.dg("yt-ui-videoplayer-ended",g.w(iS,!0,b)))}};
nS=function(a){a=g.z(a);if(!a)return null;var b=new g.VR;b.Ra(a);g.Sd(mS,b);return b};
mma=function(){g.MG.getInstance().Vd()};
g.oS=function(){g.X.call(this);this.G="";this.D=this.Ud=null};
pS=function(a,b){g.V(a);b&&g.V(b)};
qS=function(){g.Xi.call(this,"www/channels",["www/common"],["channel","playlist"],nma,oma)};
nma=function(){g.PG();g.OC(g.dG);if(fS=g.M("subscription-confirmation-dialog"))gS=g.E("CHANNEL_ID",void 0),eS.push(g.Pi(g.jF,ima)),g.NB.getInstance().show(fS);cS.init();UR.init();g.dS.init();var a=g.M("alert-with-button-renderer");a&&(rS=new g.nL,rS.Ra(a));g.KG();sS.push(g.dg("yt-uix-load-more-success",fma));g.pH();a=g.E("CHANNEL_TAB",void 0);if(a in tS)tS[a][0]();uS=a};
oma=function(){g.PC(g.MG);var a=uS;if(a in tS)tS[a][1]();g.uH();g.PC(g.dG);hS();cS.dispose();UR.dispose();g.dS.dispose();g.fg(sS);sS.length=0;rS&&rS.dispose()};
g.n(UR,g.X);UR.prototype.Z=function(){g.X.prototype.Z.call(this);var a=this.K();a&&g.U(this).O(a,"click",this.D)};
UR.prototype.D=function(){function a(){google.payments.inapp.buy({jwt:d,parameters:{locale:g.E("GAPI_LOCALE"),price:e,uiTemplate:"donation",userSessionIndex:g.E("SESSION_INDEX")}})}
var b=g.M("donation-amount-input"),c=this.K(),d=g.F(c,"jwt"),e=b.value;(b=g.F(c,"gb_url"))&&g.ig(b,a)};
g.Cz(UR,"channel-donation-button");g.x(g.VR,g.X);g.h=g.VR.prototype;g.h.Z=function(){g.VR.V.Z.call(this);var a=g.F(this.K(),"swf-config");a&&(a=JSON.parse(g.Kn(a)),this.D=g.Hj(this.F,a),this.D.addEventListener("onStateChange",this.Qo),this.D.addEventListener("onReady",this.Jo))};
g.h.W=function(){this.D.removeEventListener("onStateChange",this.Qo);this.D.removeEventListener("onReady",this.Jo);this.D=null;g.Ar(this.K());g.VR.V.W.call(this)};
g.h.Qo=function(a){0==a&&g.H("yt-ui-videoplayer-ended",this)};
g.h.Jo=function(){g.H("yt-ui-videoplayer-ready",this)};
g.h.pauseVideo=function(){this.D.isReady()?this.D.pauseVideo():g.Fq("yt-ui-videoplayer-ready",(0,g.v)(this.pauseVideo,this))};g.n(WR,g.X);WR.prototype.Z=function(){g.X.prototype.Z.call(this);this.Ki=this.R("business-email-inline");this.Rh=this.R("business-email-captcha-container");var a=this.R("business-email-button");a&&g.U(this).O(a,"click",this.G)};
WR.prototype.G=function(){g.I("/channels_profile_ajax?action_get_business_email_captcha=1",{onSuccess:function(a,b){"CAPTCHA"==b.str_code&&ZR(this,b.html_content)},
context:this})};
WR.prototype.H=function(a){a.preventDefault();g.Lq(this.D,{ia:{channel_id:this.J},onSuccess:function(b,c){if("EMAIL_ADDR"==c.str_code||"ERROR"==c.str_code){var d=c.html_content;this.Ki.innerHTML="";this.Rh.innerHTML="";YR(this);this.Ki.innerHTML=d}},
onError:function(b,c){"CAPTCHA"==c.str_code&&ZR(this,c.html_content)},
context:this})};
g.TR(WR,"business-email-container");g.n($R,g.X);g.h=$R.prototype;
g.h.Z=function(){g.Bz(this,"click","about-action-with-overlay",this.zG,null,document.documentElement);g.Bz(this,"click","abuse-type-radio-input",this.Au,null,document.documentElement);g.Bz(this,"click","continue-flag-channel",this.sF,null,document.documentElement);g.Bz(this,"click","submit-flag-background",g.w(this.Xr,"report_background"),null,document.documentElement);g.Bz(this,"click","submit-flag-profile-image",g.w(this.Xr,"report_profile_image"),null,document.documentElement);g.Bz(this,"click",
"submit-flag-with-action",this.MG,null,document.documentElement)};
g.h.Xr=function(a){var b=g.z("flag-channel-form"),c=g.z("flag-channel-action-input");b&&c&&(c.value=a,b.submit())};
g.h.MG=function(a){var b=a.currentTarget;a=g.F(b,"flagging-action");var c=g.z("flag-service-ajax-form"),d=g.z("flag-service-ajax-action-input");c&&d&&(b.disabled=!0,d.value=a,g.Lq(c,{onSuccess:function(){window.location.reload()},
onError:function(){b.disabled=!1}}))};
g.h.zG=function(a){(a=g.F(a.currentTarget,"overlay-class")+"")&&g.NB.getInstance().show(g.M(a,void 0))};
g.h.Au=function(){var a=g.RB();g.M("continue-flag-channel",a).disabled=!1};
g.h.sF=function(){var a=g.RB();a=g.SR(g.M("flag-channel-abuse-form",a),"next_url");g.NB.getInstance().hide();"string"===typeof a&&""!=a&&g.yr(a)};
g.TR($R,"about-action-report-user");g.n(aS,g.X);aS.prototype.Z=function(){g.X.prototype.Z.call(this);g.SG(this.K());this.ea("feed-item-dismissal-content-replaced",this.D)};
aS.prototype.W=function(){g.TG();g.X.prototype.W.call(this)};
aS.prototype.D=function(a){(a=g.F(a,"dismissal-token"))&&g.I("/channels_feed_ajax?action_remove_channel_post=1",{method:"POST",ia:{dismissal_token:a}})};
g.Cz(aS,"browse-items-primary");g.n(bS,g.X);bS.prototype.Z=function(){var a=g.F(this.K(),"src");if(a){this.D=g.kd(a);g.U(this).O(window,"message",this.G);var b=g.F(this.K(),"append-analytics"),c=g.u("ga");b&&"true"==b.toLowerCase()&&c&&c(function(d){var e=g.u("gaplugins.Linker");e&&(d=new e(d),(d=g.u("decorate",d))&&(a=d(a)))});
this.K().src=a}};
bS.prototype.G=function(a){a=a.zc;g.kd(a.origin)==this.D&&(a=JSON.parse(a.data))&&"height"in a&&(this.K().style.height=a.height)};
g.Cz(bS,"c4-custom-tab-iframe");g.n(cS,g.X);cS.prototype.Z=function(){g.X.prototype.Z.call(this);this.D=this.R("search-field");var a=this.R("search-form");g.U(this).O(a,"submit",this.G);var b=this.K();g.Bz(this,"click","show-search",function(){g.Q(b,"expanded");g.Ye(function(){var c=g.z("channels-search-field"),d=g.z("circled-user-profiles");if(c&&(c.focus(),d)){c=c.getBoundingClientRect();var e=d.getBoundingClientRect();c.right+30>e.left&&(d.style.visibility="hidden")}},200)})};
cS.prototype.G=function(a){a.preventDefault();if(this.D.value.trim()){a=this.R("search-form");var b=g.Km(g.wq(a));a=g.Dg(a.action,b).replace(/%20/g,"+");b={};var c=g.E("EVENT_ID");c&&(b.ei=c,b.feature="web-channel-search");g.qj(a,b)}};
g.Cz(cS,"channel-search");var rS,sS=[];g.n(g.dS,g.X);g.h=g.dS.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);var a=this.R("legal-text");if("false"!=g.F(this.K(),"autoscroll")){var b={start:0};b.end=a.scrollHeight-a.clientHeight;b.duration=b.end/3;b.yh="linear";this.G=new g.Sv(a,b);this.D=!0;g.U(this).O(a,"click",this.gI);g.U(this).O(a,"mouseover",this.iI);g.U(this).O(a,"mouseout",this.fI);g.U(this).O(a,"scroll",this.hI)}};
g.h.hI=function(){this.H||this.D||(this.G.pause(),this.H=!0)};
g.h.gI=function(){this.G.pause();this.D=!1;this.H=!0};
g.h.iI=function(){this.G.pause();this.D=!1};
g.h.fI=function(){this.D||this.H||(this.G.play(),this.D=!0)};
g.Cz(g.dS,"c4-legal-info");var gS,eS=[],fS=null;var mS,kS,jS,lS,vS=[],wS=[];g.n(g.oS,g.X);g.h=g.oS.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);this.G=g.F(this.K(),"full-list-id");var a=g.U(this),b=this.R("playlist-share");b&&a.O(b,"click",this.qE);(b=this.R("addto-playlist-button"))&&a.O(b,"click",this.kA);(b=this.R("report-playlist-button"))&&a.O(b,"click",this.MD);this.ea("yt-uix-videoactionmenu-hide",this.Qx);(a=g.M("pl-join-collaboration"))&&g.U(this).O(a,"click",this.xC)};
g.h.kA=function(a){if(!this.D){a=a.currentTarget;if(a){var b=g.yA(a);b=g.M("playlist-add-to-menu",b)}b&&(a=g.F(a,"src-playlist-id"))&&(this.D=new g.MA({sourcePlaylistId:a}),this.D.Ra(b),g.Sd(this,this.D))}};
g.h.MD=function(){var a=g.M("report-playlist-dialog",void 0);g.Lq(g.z("flag-service-ajax-form"),{onSuccess:function(){g.Q(a,"report-playlist-success")},
eR:function(){g.Q(a,"report-playlist-failure")},
Xa:function(){g.NB.getInstance().show(a)}})};
g.h.qE=function(){var a=g.z("playlist-share-container"),b=g.z("playlist-share-alerts");if(g.mv(a))pS(a,b);else{if(!this.Ud){var c=g.z("playlist-share-loading");g.V(c);this.Ud=new g.pN(a,null,this.G,function(){g.W(c);g.V(a);b&&g.V(b)},"playlist",!1,!0,null,null,null,null,null,null,10,null,null,"playlist")}g.Sd(this,this.Ud);
pS(a,b);g.Er("playlistShare")}};
g.h.Qx=function(){var a=g.M("playlist-menu"),b=g.wA(g.M("playlist-add-to-menu"));a=g.wA(a);g.EA(g.vA.getInstance(),b);g.EA(g.vA.getInstance(),a)};
g.h.xC=function(a){a=g.F(a.currentTarget,"join-collaboration-token");g.I("/playlist_edit_service_ajax/?action_join_collaboration=1",{method:"POST",ia:{playlist_id:this.G,join_collaboration_token:a},onSuccess:function(b,c){c&&c.result&&c.result.redirect_url&&g.qj(c.result.redirect_url)},
context:this})};
g.Cz(g.oS,"pl-header");g.r("yt.www.creator.yoda.tipaction.registerForCard",function(a){var b=g.zB.getInstance();a=g.z(g.Y(b,"card")+g.bh(a));g.F(a,"has-tip-handler")||(g.Eq(a,"has-tip-handler","true"),g.ir(a,g.gG))},void 0);
g.x(qS,g.Xi);qS.prototype.enable=function(){qS.V.enable.call(this);g.OC(g.MG)};
var tS={about:[function(){$R.init();g.fH();WR.init()},
function(){$R.dispose();g.fg(g.dH);g.dH.length=0;WR.dispose()}],
community:[function(){g.NL.init()},
function(){g.NL.dispose()}],
discussion:[function(){g.z("comment-section-renderer")&&g.NL.init()},
function(){g.NL.dispose()}],
feed:[function(){(g.M("activity-feeds-container")||g.z("browse-items-primary"))&&aS.init()},
function(){(g.M("activity-feeds-container")||g.z("browse-items-primary"))&&aS.dispose()}],
featured:[function(){mS=new g.C;kS=g.E("CHANNEL_ID",void 0);(jS=nS("upsell-video"))&&wS.push(g.Pi("ypc-purchase-flow-start",lma));var a=nS("pyv-video-view");kS&&!a&&wS.push(g.Pi(g.jF,jma),g.Pi(g.kF,kma));vS.push(g.dg("yt-uix-load-more-success",mma));g.z("channel-navigation-menu")||$R.init()},
function(){g.fg(vS);vS.length=0;g.Qi(wS);wS.length=0;jS=null;mS.dispose();g.z("channel-navigation-menu")||$R.dispose()}],
custom:[function(){bS.init()},
function(){bS.dispose()}],
playlist:[function(){g.oS.init()},
function(){g.oS.dispose()}]};
g.aj(new qS);})(_yt_www);

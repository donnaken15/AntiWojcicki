(function(g){var window=this;var e0=function(a){g.qI.call(this,"upload");this.C.query=a},f0=function(a){if("youtubebanner"!==a&&"youtube-channel-banner"!==a)throw Error("configurationId must be YOUTUBE_BANNER or YOUTUBE_CHANNEL_BANNER");
e0.call(this,a)},g0=function(a,b,c){a.C.ytRecWidth=b;
a.C.ytRecHeight=c;return a},h0=function(a,b){a.C.ytMaxFileSize=b;
return a},i0=function(a){var b=g.YN(new g.UN);
b.N=g.Fm;b=g.$N(g.aO(b,g.Fm));b.M=g.Pb;b=new g.WN(b);return g.eO(b,a)},k0=function(a,b){if(j0()){var c=dra()?"translate3d(0px,"+b+"px,0px)":"translate(0px,"+b+"px)";
g.wp(a,era(),c)}},l0=function(a){g.X.call(this);
this.J={mh:a.mh,Wi:(0,g.v)(function(){g.yB.getInstance().hide(this.K());g.Da(a.Wi)&&a.Wi()},this)};
this.D=this.kb=null},m0=function(){g.X.call(this);
this.D=0;this.G=this.H=this.J=null},n0=function(a){var b=a.K();
a=a.D?a.size()>=a.D:!1;g.pq(b,"yt-ui-elementlist-has-max-items",a)},fra=function(a){a=a.R("yt-ui-elementlist-list");
if(!a)throw Error("Wrong DOM structure.");return a},o0=function(){g.Iz.call(this,"ajax-form")},p0=function(){g.Iz.call(this,"comboboxinput")},q0=function(a){a=g.wA(a);
g.EA(g.vA.getInstance(),a);g.M("yt-combobox-dropdown-button",a).focus()},r0=function(a,b){return g.Ka(g.L(g.Y(a,"radio"),b),function(c){return c.checked})},s0=function(a,b,c){b=a.Ua(b);
c=c||500;var d=a.ka(b,"search-delay-timer-id");d&&g.Yf(parseInt(d,10));a=g.Wf((0,g.v)(a.iG,a,b),c);g.Eq(b,"search-delay-timer-id",a+"")},t0=function(){g.Iz.call(this,"inlineedit");
this.C=null;this.F=[];this.D={}},v0=function(a,b){u0(a,b,!0,(0,g.v)(function(){var c=g.Mz(this,"form",b);
c&&(g.H("yt-dom-content-change",c),this.rf(c))},a))},u0=function(a,b,c,d){g.pq(b,g.Y(a,"edit-mode"),c);
g.D(b,"yt-uix-flipwidget")?(g.eG(g.dG.getInstance(),b,c),g.sv(b,"transform",a.Tp.bind(a,b,c,d))):a.Tp(b,c,d)},w0=function(a){a.C&&(g.nh(a.F),a.F.length=0,g.H("yt-uix-inlineedit-form-dispose",a.Ua(a.C)),a.C=null)},gra=function(a,b,c){a=g.Mz(a,"view-container",b);
g.H("yt-uix-inlineedit-view-dispose",b);g.En(a,c);g.H("yt-uix-inlineedit-view-init",b)},y0=function(a,b,c,d){var e=g.Mz(a,"form-container",b);
w0(a);g.En(e,c);a.rf(g.Mz(a,"form",e));g.gA();d&&x0(a,b,!0)},x0=function(a,b,c){var d=g.Ga(b);
if(!a.D[d]||c)a.D[d]=g.Mz(a,"form-container",b).innerHTML},z0=function(){g.Iz.call(this,"orderedlist")},B0=function(a){(0,g.B)(g.L(g.Y(a,"auto-managed")),function(b){A0(this,b,"down",!1);
A0(this,b,"up",!1)},a)},hra=function(a,b){var c=b,d=g.Oo(b);
if(d){for(var e=d,f=0,k=0;d&&C0(a,d)&&!(c=d,f=g.M("c4-max-editable-shelves-allowed-above",c).value,e=d=g.Oo(d),0<f););if(0!=f){for(;d&&!C0(a,d);)k++,d=g.Oo(d);var l=function(){D0(this,b,c).then(function(){g.Go(b,c);this.refresh(b);g.D(b,g.Y(this,"bottom"))&&(g.R(b,g.Y(this,"bottom")),A0(this,b,"down",!0));E0(this,b,c)}.bind(this))}.bind(a);
Promise.resolve();f==k?(F0(a,e,c).then(function(){l();this.refresh(b)}.bind(a)),a.refresh(e)):l()}}},C0=function(a,b){return b?g.D(b,g.Y(a,"auto-managed")):!1},F0=function(a,b,c){var d=c,e=0,f=0,k;
c=g.No(d);return new Promise(function(l){for(;c&&C0(this,c);){d=c;e=g.M("c4-max-editable-shelves-allowed-above",c).value;if(0<e)break;k=c=g.No(d)}c||(c=null);if(b&&d){for(;c&&!C0(this,c);)f++,c=g.No(c);D0(this,b,d).then(function(){g.Ho(b,d);this.refresh(b);g.D(b,g.Y(this,"top"))&&(g.R(b,g.Y(this,"top")),A0(this,b,"up",!0));E0(this,b,k).then(l)}.bind(this))}}.bind(a))},D0=function(a,b,c){var d=g.D(a.Ua(b),g.Y(a,"animation")),e=(0,g.rv)();
return new Promise(function(f){g.D(b,g.Y(this,"moving"))&&f();if(d&&e){var k=j0(),l=(0,g.v)(function(){g.R(b,g.Y(this,"moving"));g.R(c,g.Y(this,"moving"));k?(g.wp(b,"transform",""),g.wp(c,"transform","")):(b.style.top="0",c.style.top="0");f()},this),m=g.Mp(c),q=g.Mp(b);
m=m.y>q.y?1:-1;g.Q(b,g.Y(this,"moving"));g.Q(c,g.Y(this,"moving"));k?(k0(b,m*g.Vp(c).height),k0(c,-m*g.Vp(b).height)):(b.style.top=m*g.Vp(c).height+"px",c.style.top=-m*g.Vp(b).height+"px");g.sv(b,"transform",l)}else f()}.bind(a))},ira=function(a,b){var c=g.Ko(b),d=g.Y(a,"item");
if((c=(0,g.Dk)(c,function(f){return g.D(f,d)}))&&c.length){var e=c[0];
g.Q(e,g.Y(a,"top"));A0(a,e,"up",!1);1<c.length&&(e=c[1],g.R(e,g.Y(a,"top")),A0(a,e,"up",!0));e=c[c.length-1];g.Q(e,g.Y(a,"bottom"));A0(a,e,"down",!1);1<c.length&&(c=c[c.length-2],g.R(c,g.Y(a,"bottom")),A0(a,c,"down",!0));B0(a)}},G0=function(a,b){var c=a.Ua(b);
return!g.D(c,g.Y(a,"disabled"))},A0=function(a,b,c,d){if(a=g.M(g.Y(a,c),b))a.disabled=!d},E0=function(a,b,c){return new Promise(function(d){var e=b?this.Ua(b):null;
g.H("yt-uix-orderedlist-order-changed",e,b,c,d)}.bind(a))},H0=function(){g.Iz.call(this,"styleable-checkbox")},I0=function(){g.X.call(this)},J0=function(){g.X.call(this)},jra=function(a){g.Bz(a,"click","open-banner-image-editor",function(){g.wB(g.zB.getInstance());
this.ij.show()},a,document.body)},K0=function(){g.X.call(this)},L0=function(){g.X.call(this)},kra=function(a){g.cd(a.R("yt-dialog-content"));
g.Q(a.K(),"yt-dialog-show-loading");g.I("/channels_settings_ajax?action_get_casual_settings_editor=1",{onSuccess:a.nE,Xa:function(){g.R(this.K(),"yt-dialog-show-loading")},
context:a})},M0=function(){g.X.call(this);
this.D=null;this.G=0},lra=function(a){(a=a.Yq)&&g.pj(a)},N0=function(){g.X.call(this)},O0=function(){g.X.call(this)},P0=function(){g.X.call(this)},Q0=function(a){a.G&&a.G.dispose();
a.D&&a.D.dispose()},R0=function(){g.X.call(this)},T0=function(a,b){if(b){var c={input:b},d=g.F(a.K(),"ajax-servlet"),e=g.F(a.K(),"ajax-lookup-action");
c[e]=1;g.iA(a.R("content-picker-adder"));S0(a);g.I(d,{method:"GET",Ta:c,onSuccess:a.kC,onError:a.jC,context:a})}},S0=function(a){(a=a.R("c4-content-picker-warnings"))&&g.cd(a)},mra=function(a,b){return(0,g.Il)(g.Ao("input","",a.D),function(c){return c.value==b})},U0=function(a,b){g.hA(a.R("content-picker-adder"),b)},V0=function(a){var b=a.D.children.length;
a=a.K();g.pq(a,"has-content-items",0<b)},nra=function(a){var b=[];
(0,g.B)(g.Ao("input","content-picker-input",a.D),function(c){b.push(c.value)});
return b},W0=function(a,b){var c=g.P(a.K(),"yt-dialog-content");
c=g.M("content-picker-save-button",c);g.U(a).O(c,"click",function(){var d=this.R("content-picker-title-input").value;if(d){var e=g.P(this.R("content-picker-title-input"),"yt-uix-form-input-container");g.iA(e);g.NB.getInstance().hide();b(nra(this),d)}else d=g.wr("CP_EMPTY_SECTION_TITLE_ERROR"),e=g.P(this.R("content-picker-title-input"),"yt-uix-form-input-container"),g.hA(e,d)})},X0=function(){g.X.call(this)},Y0=function(a){g.pq(a.Xe(),"c4-content-picker-dialog-loading",!0);
a={method:"POST",ia:g.Km(g.wq(a.R("edit-section-form"))),onSuccess:a.bD,Xa:function(){g.pq(this.Xe(),"c4-content-picker-dialog-loading",!1)},
context:a};g.I("/channels_picker_ajax?action_get_channel_picker_dialog=1",a)},Z0=function(){g.X.call(this);
this.G=!1},$0=function(a){if(!a.G){a.G=!0;
var b=g.F(a.K(),"load-attachments-url");g.I(b,{context:a,onSuccess:a.HF})}},a1=function(){g.X.call(this)},b1=function(a){var b=a.R("related-channels-enable-button");
g.U(a).O(b,"click",g.w(a.D,!0));b=a.R("related-channels-disable-button");g.U(a).O(b,"click",g.w(a.D,!1))},c1=function(){g.X.call(this)},d1=function(a){var b=g.P(a,"c4-shelf-container");
a=g.P(a,"c4-empty-shelf-container");return!!b||!!a},e1=function(a,b){var c=g.U(a),d=g.M("checkbox-on-off");
d&&c.Va(d,"change",a.wo);(d=g.M("c4-shelf-layout-input",b))&&c.Va(d,"change",a.Yg);if(d=g.M("c4-shelf-content-type-input",b))c.Va(d,"change",a.zo),c.Va(d,"change",a.Yg);(d=g.M("c4-shelf-playlist-entry-type-input",b))&&c.Va(d,"change",a.Ko);(d=g.M("c4-shelf-single-show-entry-type-input",b))&&c.Va(d,"change",a.Po)},f1=function(a,b,c,d,e,f,k){var l=g.M(d,b),m="",q=[];
(0,g.B)(g.Ao("input",null,l),function(y){y.name==f&&(m=y.value);y.name==e&&q.push(y.value)});
l=g.M("yt-uix-overlay-target",l);var t=(0,g.v)(a.kw,a,b,d,e,f);g.U(a).O(l,"click",g.w(a.wy,b,c,d,m,q,t,k))},h1=function(a,b){var c=g.Km(g.wq(b));
g1(b);g.I("/channels_picker_ajax?action_get_show_channels=1",{method:"POST",ia:c,onSuccess:(0,g.v)(a.fH,a,b),onError:(0,g.v)(a.wx,a,b)})},g1=function(a){(a=g.M("playlist-url-form-input-container",a))&&g.iA(a)},i1=function(a){var b=[],c=a.wb("c4-shelf-content-type-input");
(0,g.B)(c,function(d){b.push(d.value)},a);
(0,g.B)(c,function(d){(0,g.B)(g.Ao("option",null,d),function(e){var f=g.F(e,"duplicates-allowed");e.disabled=g.Ma(b,e.value)&&!e.selected&&!f})})},j1=function(){g.X.call(this);
this.H=this.G=this.J=null;this.D={}},k1=function(){g.X.call(this)},l1=function(a){(0,g.B)(a.wb(a.H),function(b){g.FC(b)})},m1=function(){g.X.call(this);
this.H=null;this.T=this.G=this.J=this.D=this.M=""},o1=function(a){return a.T!=g.qd(n1(a,a.G))},p1=function(a,b){var c=a.R("c4-translation-editor-save-message-container"),d=g.F(c,b);
g.N(c,d)},n1=function(a,b){return a.H.getData().translations[b]},q1=function(a,b,c){var d=n1(a,b);
delete d.language;var e=a.M+"?action_update_translation=1",f=[],k=[];g.ib(d,function(l,m){f.push(m);k.push(l)});
b={language_id:b,field_keys:f,values:k};a.D&&(b.playlist_id=a.D);p1(a,"saving-message");g.I(e,{method:"POST",ia:b,onSuccess:(0,g.v)(a.bE,a,c),onError:a.aE,context:a})},r1=function(a,b){a.X.disabled=!b;
p1(a,b?"unsaved-message":"saved-message")},ora=function(a){var b=g.E("TRANSLATIONEDITOR_JS",void 0),c=a.R("translation-editor");
g.ig(g.E("ANGULAR_JS",void 0),function(){g.ig(b,function(){a.H=g.u("yt.www.translationeditor.angular.bootstrap")(c);a.H.setOnChangeCallback((0,g.v)(a.qI,a))})})},pra=function(a){a=a.currentTarget;
g.D(a,"seen")||(g.Q(a,"seen"),g.iG(a,"EVENT_SEEN"))},qra=function(a){var b=a.currentTarget;
a.preventDefault();a={action:"channel_checklist_clicked_on_title",name:g.F(b,"name")};g.Nk(g.qd(a))},rra=function(a){a.stopPropagation();
if(a=g.P(a.currentTarget,"checklist-item"))g.dd(a),g.iG(a,"EVENT_DISMISSED"),g.P(a,"c4-checklist-module"),g.L("checklist-item").length||g.V(g.M("c4-checklist-done-message"))},s1=function(){Z0.init()},t1=function(){Z0.dispose()},u1=function(){g.X.call(this);
this.D=null},sra=function(a){g.H("playlist-dispose-header-components");
var b=g.z("pl-header");a=g.Eo(g.kp(a));g.Jo(a,b);g.H("playlist-reinit-header-components")},v1=function(){g.X.call(this);
this.hg=this.D=this.J=this.H=this.Oh=this.G=null},tra=function(a,b,c,d){g.I("/playlist_edit_service_ajax/?action_remove_video=1",{method:"POST",
context:a,ia:{playlist_id:a.G,set_video_id:b,session_token:d},onSuccess:function(e,f){g.dd(c);this.Xg(e,f)}})},ura=function(a,b,c,d){g.I("/like_service_ajax/?action_remove_like=1",{method:"POST",
ia:{video_id:b,session_token:d},context:a,onSuccess:function(e,f){g.dd(c);this.Xg(e,f)}})},w1=function(a,b,c){b=g.P(b,"pl-video");
g.pq(b,"yt-editing-video",c);g.pq(a.K(),"yt-editing-list",c)},x1=function(){g.X.call(this);
this.ab=this.fb=null},y1=function(){g.X.call(this);
this.G="";this.D=null;this.H=!1},z1=function(a,b,c){g.U(a).O(b,"blur",c)},A1=function(a,b){var c=a.R(b);
c&&(c=g.M("c4-module-editor-submit",c))&&c.click()},B1=function(a,b){g.pq(a.R("pl-header-content-container"),"flip",b)},C1=function(){g.X.call(this);
this.ab=this.fb=null},D1=function(){g.X.call(this);
this.J="";this.M=this.D=this.rd=this.G=this.fb=null;this.X=!0;this.H=null;this.T=""},vra=function(a){var b={},c=g.z("open-to-contributions");
c&&c.checked!=a.X&&(b.closed_to_contributions=!c.checked);g.Lq(a.H,{ia:b,onSuccess:a.Jm,onError:a.XD,Xa:function(){this.fb&&this.fb.setState("content")},
context:a})},wra=function(a){(0,g.B)(a.wb("rule-keyword"),(0,g.v)(function(b){var c=g.tq(b);
(0,g.db)(c)||(b=g.P(b,"yt-ui-elementlist-item"),this.D.remove(b))},a))},E1=function(a,b){g.uv(b,a.R("error-message"),a.R("messages"))},F1=function(a){g.U(a).Va(a.R("save-button"),"click",a.Nj);
g.U(a).Va(a.R("settings-form"),"submit",a.Nj);g.U(a).Va(a.R("playlist-video-order-input"),"change",a.Cl);if(a.R("playlist-privacy-input")){g.U(a).Va(a.R("playlist-privacy-input"),"change",a.Bl);var b=g.z("open-to-contributions");b&&g.U(a).Va(b,"change",a.Xp)}a.D&&(a.D.dispose(),a.D=null);a.rd&&(a.rd.dispose(),a.rd=null);a.G&&(a.G.dispose(),a.G=null)},G1=function(a,b){var c=a.R("revoke-all-links-input");
g.xq(c,b);a.lh(c)},H1=function(a){var b=g.Km(g.wq(a.H));
delete b.invite_link;if(a=a.R("collaboration-settings-invite-link"))a=g.D(a,"has-invite-links"),b.has_invite_links=a;return g.qd(b)},I1=function(){g.X.call(this)},J1=function(a,b){var c=[];
c.push(g.dg("playlist-dispose-header-components",b));c.push(g.dg("playlist-reinit-header-components",a));g.Fq("playlist-dispose-header-reresher",function(){g.fg(c)})};
g.qI.prototype.Ab=g.Dm(30,function(a,b){var c=this.C.data||{};c[a]=b;this.C.data=c;return this});
g.rI.prototype.Ab=g.Dm(29,function(a,b){g.rI.V.Ab.call(this,a,b);return this});
g.sI.prototype.Ab=g.Dm(28,function(a,b){g.sI.V.Ab.call(this,a,b);return this});
g.tI.prototype.Ab=g.Dm(27,function(a,b){g.tI.V.Ab.call(this,a,b);return this});
g.uI.prototype.Ab=g.Dm(26,function(a,b){g.uI.V.Ab.call(this,a,b);return this});
g.wI.prototype.Ab=g.Dm(25,function(a,b){g.wI.V.Ab.call(this,a,b);return this});
g.yI.prototype.Ab=g.Dm(24,function(a,b){g.yI.V.Ab.call(this,a,b);return this});
g.qI.prototype.Jb=g.Dm(23,function(a){this.C.mimeTypes=a;return this});
g.rI.prototype.Jb=g.Dm(22,function(a){g.rI.V.Jb.call(this,a);return this});
g.sI.prototype.Jb=g.Dm(21,function(a){g.sI.V.Jb.call(this,a);return this});
g.tI.prototype.Jb=g.Dm(20,function(a){g.tI.V.Jb.call(this,a);return this});
g.uI.prototype.Jb=g.Dm(19,function(a){g.uI.V.Jb.call(this,a);return this});
g.wI.prototype.Jb=g.Dm(18,function(a){g.wI.V.Jb.call(this,a);return this});
g.yI.prototype.Jb=g.Dm(17,function(a){g.yI.V.Jb.call(this,a);return this});
g.qI.prototype.Ib=g.Dm(16,function(a){this.F=a||void 0;return this});
g.rI.prototype.Ib=g.Dm(15,function(a){g.rI.V.Ib.call(this,a);return this});
g.sI.prototype.Ib=g.Dm(14,function(a){g.sI.V.Ib.call(this,a);return this});
g.tI.prototype.Ib=g.Dm(13,function(a){g.tI.V.Ib.call(this,a);return this});
g.uI.prototype.Ib=g.Dm(12,function(a){g.uI.V.Ib.call(this,a);return this});
g.wI.prototype.Ib=g.Dm(11,function(a){g.wI.V.Ib.call(this,a);return this});
g.yI.prototype.Ib=g.Dm(10,function(a){g.yI.V.Ib.call(this,a);return this});
g.x(e0,g.qI);e0.prototype.Ib=function(a){e0.V.Ib.call(this,a);return this};
e0.prototype.Jb=function(a){e0.V.Jb.call(this,a);return this};
e0.prototype.Ab=function(a,b){e0.V.Ab.call(this,a,b);return this};g.x(f0,e0);f0.prototype.Ib=function(a){f0.V.Ib.call(this,a);return this};
f0.prototype.Jb=function(a){f0.V.Jb.call(this,a);return this};
f0.prototype.Ab=function(a,b){f0.V.Ab.call(this,a,b);return this};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.bd("DIV");var j0=g.Sa(function(){return!g.Df||g.cv(9)}),dra=g.Sa(function(){return g.Vl||g.Sl||g.Ul&&g.cv(10)||g.Df&&g.cv(10)}),era=g.Sa(function(){return g.Df&&9==g.tc?"-ms-transform":"transform"});g.n(l0,g.X);l0.prototype.Z=function(){g.X.prototype.Z.call(this);this.kb=g.z(g.F(this.K(),"dialog-id"));if(!this.kb)throw Error("Cannot find create playlist widget dialog.");g.U(this).O(document,"click",this.G);this.ea("yt-uix-card-show",this.H);var a=g.M("create-playlist-widget-form",this.kb);this.D=new g.lA(this.J);this.D.Ra(a)};
l0.prototype.Sa=function(){this.kb=null;this.D.dispose();this.D=null;g.X.prototype.Sa.call(this)};
l0.prototype.G=function(a){g.Ro(this.kb,g.fr(a))||g.yB.getInstance().hide(this.K())};
l0.prototype.H=function(a){a==this.K()&&this.D.R("title-input").focus()};g.n(m0,g.X);g.h=m0.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);var a=g.F(this.K(),"yt-ui-elementlist-max-items");this.D=parseInt(a,10)||0;this.J=(a=this.R("yt-ui-elementlist-template"))?g.xz(a):null;(a=this.R("yt-ui-elementlist-add"))&&g.U(this).O(a,"click",this.jA);g.Bz(this,"click","yt-ui-elementlist-remove",this.MA);n0(this)};
g.h.jA=function(){if(!(this.D&&this.size()>=this.D)&&this.J){var a=g.$q(this.J.xb({}));a&&(this.C.appendChild(fra(this),a),n0(this),g.gA(),this.H&&this.H(a))}};
g.h.MA=function(a){if(a=this.C.rk(a.currentTarget,"yt-ui-elementlist-item"))this.C.Ze(a),n0(this),this.G&&this.G(a)};
g.h.size=function(){return this.wb("yt-ui-elementlist-item").length};
g.h.remove=function(a){this.C.Ze(a);n0(this);this.G&&this.G(a)};g.x(o0,g.Iz);g.ya(o0);g.SC(o0);o0.prototype.register=function(){g.Z(this,"submit",this.C);g.Z(this,"change",this.C,"submit-on-change");g.Z(this,"click",this.C,"submit-button")};
o0.prototype.unregister=function(){g.Lz(this,"submit",this.C);g.Lz(this,"change",this.C,"submit-on-change");g.Lz(this,"click",this.C,"submit-button")};
o0.prototype.C=function(a){var b=this.Ua(a);a=b.method||"POST";g.Q(b,g.Y(this,"submitting"));g.Lq(b,{method:a,context:this,Xa:function(){g.R(b,g.Y(this,"submitting"))}})};g.x(p0,g.Iz);g.ya(p0);g.SC(p0);g.h=p0.prototype;g.h.register=function(){g.Z(this,"click",this.um,"update-and-hide");g.Z(this,"keydown",this.kr,"radio");g.Z(this,"keydown",this.Cr,"search-input");g.Z(this,"paste",this.fj,"search-input");g.Z(this,"cut",this.fj,"search-input");this.ea("yt-uix-menu-show",this.OC,this)};
g.h.unregister=function(){g.Lz(this,"click",this.um,"update-and-hide");g.Lz(this,"keydown",this.kr,"radio");g.Lz(this,"keydown",this.Cr,"search-input");g.Lz(this,"paste",this.fj,"search-input");g.Lz(this,"cut",this.fj,"search-input")};
g.h.OC=function(a){if(g.D(a,g.Y(this,"menu"))){var b=g.yA(a);a=p0.getInstance();b=g.Mz(a,"search-input",b);s0(a,b,0);g.Wf((0,g.v)(b.focus,b),0)}};
g.h.Cr=function(a,b,c){27==c.keyCode?q0(a):g.Yu(c.event)&&9!=c.keyCode&&(13==c.keyCode?c.preventDefault():s0(this,a))};
g.h.kr=function(a,b,c){13==c.keyCode?(this.um(a),c.preventDefault()):27==c.keyCode&&q0(a)};
g.h.um=function(a){g.Wf((0,g.v)(function(){var b=g.wA(a),c=g.M("yt-combobox-dropdown-button",b),d="",e=this.Ua(a),f=r0(this,e);if(f){var k=this.ka(f,"dropdown-button-text");d=g.wA(e);d=g.M("yt-comboboxinput-input",g.P(d,"yt-comboboxinput")).value=f.value}else k=this.ka(c,"default-button-text");g.H("yt-uix-comboboxinput-notification-change",b,k,d);b=g.Xz(g.Nz.getInstance(),c);g.N(b,k);q0(a)},this),0)};
g.h.fj=function(a){s0(this,a)};
g.h.iG=function(a){var b=g.Mz(this,"search-input",a),c=r0(this,a);if(c)var d=c.value;c=this.ka(a,"search-ajax-url")||"";g.I(c,{context:this,method:"get",Ta:{search_query:b.value,selected_item_value:d},onSuccess:function(e,f){g.M("yt-combobox-menu-content",a).innerHTML=f.html_content},
onError:function(e){(e=JSON.parse(e.response).error)&&this.Bf(a,e)},
Xa:function(){g.R(a,"loading")}})};
g.h.Bf=function(a,b){var c=g.Vq(g.M("error-small-template",a));g.uv(b,c,g.M("yt-combobox-menu-notifications",a));g.Wf((0,g.v)(function(){(new g.HG(c,750)).play()},this),8E3)};g.x(t0,g.Iz);g.ya(t0);g.SC(t0);g.h=t0.prototype;g.h.register=function(){g.Z(this,"focus",this.rf,"form");g.Z(this,"click",this.rf,"form");g.Z(this,"click",this.Hn,"edit")};
g.h.unregister=function(){g.Lz(this,"focus",this.rf,"form");g.Lz(this,"click",this.rf,"form");g.Lz(this,"click",this.Hn,"edit");w0(this)};
g.h.Hn=function(a,b,c){g.P(c.target,g.Y(this,"ignore-edit"))||v0(this,this.Ua(a))};
g.h.Tp=function(a,b,c){(a=g.dr(g.Mz(this,b?"form-container":"view-container",a)))&&a.focus();c&&c()};
g.h.rf=function(a){if(this.C!=a){w0(this);var b=this.Ua(a);x0(this,b,!1);this.F.push(g.J(a,"submit",(0,g.v)(this.Ou,this)));this.F.push(g.J(a,"reset",(0,g.v)(this.Nu,this)));this.C=a;g.H("yt-uix-inlineedit-form-init",b)}};
g.h.Nu=function(a){var b=this.Ua(a.currentTarget);u0(this,b,!1,(0,g.v)(function(){w0(this);var c=g.Ga(b);g.Mz(this,"form-container",b).innerHTML=this.D[c];this.rf(g.Mz(this,"form",b));g.gA()},this))};
g.h.Ou=function(a){a.preventDefault();var b=a.currentTarget,c=this.Ua(b);g.Wf((0,g.v)(function(){g.pq(c,g.Y(this,"mode-loading"),!0);g.Lq(b,{method:"POST",onSuccess:(0,g.v)(this.HH,this,c),onError:(0,g.v)(this.Pk,this,c),Oc:(0,g.v)(function(d){this.Pk(c,d,{})},this),
Xa:(0,g.v)(function(){g.pq(c,g.Y(this,"mode-loading"),!1)},this),
nb:!0})},this),0)};
g.h.HH=function(a,b,c){c.form_html?c.view_html?(gra(this,a,c.view_html),u0(this,a,!1,(0,g.v)(function(){g.H("yt-dom-content-change",a);g.H("yt-uix-inlineedit-success",a,c);y0(this,a,c.form_html,!0)},this))):y0(this,a,c.form_html,!1):this.Pk(a,b,c)};
g.h.Pk=function(a,b,c){g.H("yt-uix-inlineedit-error",a,c.errors)};g.x(z0,g.Iz);g.ya(z0);g.SC(z0);g.h=z0.prototype;g.h.register=function(){g.Z(this,"click",this.Ns,"up");g.Z(this,"click",this.Ms,"down");(0,g.B)(g.L(g.Y(this)),function(a){this.refresh(a)},this);
B0(this)};
g.h.unregister=function(){g.Lz(this,"click",this.Ns,"up");g.Lz(this,"click",this.Ms,"down")};
g.h.Ns=function(a){if(G0(this,a)){var b=g.Y(this,"item"),c=g.P(a,b);if(c){var d=g.Oo(c);d&&C0(this,d)?hra(this,c):d&&g.D(d,b)&&D0(this,c,d).then(function(){g.Go(c,d);this.refresh(c);E0(this,c,d)}.bind(this))}}};
g.h.Ms=function(a){if(G0(this,a)){var b=g.Y(this,"item"),c=g.P(a,b);if(c){var d=g.No(c);if(d&&C0(this,d))F0(this,c,d);else{var e=g.No(d);e&&g.D(e,b)||(e=null);d&&D0(this,c,d).then(function(){g.Ho(c,d);this.refresh(c);E0(this,c,e)}.bind(this))}}}};
g.h.refresh=function(a){a&&(a=this.Ua(a),ira(this,a))};
g.h.enable=function(a,b){var c=this.Ua(a);g.pq(c,g.Y(this,"disabled"),!b);B0(this)};g.x(H0,g.Iz);g.ya(H0);g.SC(H0);H0.prototype.register=function(){g.Z(this,"click",this.F,"toggle");g.Z(this,"change",this.C,"checkbox")};
H0.prototype.unregister=function(){g.Lz(this,"click",this.F,"toggle");g.Lz(this,"change",this.C,"checkbox")};
H0.prototype.F=function(a){a=this.Ua(a);a=g.Mz(this,"checkbox",a);a.checked=!a.checked;g.jr(a,"change")};
H0.prototype.C=function(a){var b=this.Ua(a);g.pq(b,g.Y(this,"checked"),a.checked)};var xra=["image/jpeg","image/png"];g.n(I0,g.X);g.h=I0.prototype;g.h.show=function(){this.D&&this.D.dispose();this.D=g.XJ(this.H);this.D.Rb(!0)};
g.h.Z=function(){g.X.prototype.Z.call(this);var a=g.Dq(this.K(),"width")||0,b=g.Dq(this.K(),"height")||0,c=g.Dq(this.K(),"recommended-width")||0,d=g.Dq(this.K(),"recommended-height")||0,e=g.Dq(this.K(),"max-file-size")||0,f=g.F(this.K(),"title")||"",k=g.F(this.K(),"banner-gallery-title")||"",l="f",m=g.E("CHANNEL_ID",void 0),q="true"===g.F(this.K(),"use-channel-storage");g.F(this.K(),"show-banner-preview")&&(l="ytcb");this.H=g.qL("yt-banner");q?g.DI(this.H,g0(h0((new f0("youtube-channel-banner")).Ab("X-YouTube-ChannelId",
m),e),c,d).Jb(xra.join())):g.DI(this.H,g0(h0((new f0("youtubebanner")).Ab("silo_id","19"),e),c,d));c=g.DI(this.H,new g.tI);d=new g.tI;d.C.type="ytbanner";f=g.EI(g.DI(c,d.Ib(k)),(0,g.v)(this.dx,this)).setTitle(f).setSize(1E3);f.C.set("thumbs","orig");if(isNaN(a)||isNaN(b))throw Error("MinSize - Not a number. ("+a+", "+b+")");f.C.set("minSize",a+"x"+b);f.C.set("cropMode",l)};
g.h.Rt=function(a,b){this.G=null;g.H("banner-upload-succeeded",b.url,b.hq_url)};
g.h.Qt=function(a,b){this.G=null;g.H("banner-upload-failed",b.errors)};
g.h.dx=function(a){switch(a.action){case "picked":var b="";a.viewToken&&(b=a.viewToken[2].type);var c=a.docs[0];a=c.thumbnails[0].url;var d=c.id;c=c.crop;g.H("banner-upload-started");var e={};e.channel_id=g.E("CHANNEL_ID");e.fife_url=a;e.photo_id=d;e.is_gallery_image="ytbanner"==b;c&&(e.crop_top=c.top,e.crop_right=c.right,e.crop_bottom=c.bottom,e.crop_left=c.left);b={method:"POST",ia:e,onSuccess:this.Rt,onError:this.Qt,context:this};this.G&&this.G.abort();this.G=g.I("/channels_profile_ajax?action_update_banner_image=1",
b)}};
g.h.W=function(){this.D&&(this.D.dispose(),this.D=null);this.G&&this.G.abort();g.X.prototype.W.call(this)};g.n(J0,g.X);J0.prototype.Z=function(){var a=this.R("c4-branding-upload-button");a&&(this.ij=new I0,this.zb(this.ij),this.ij.Ra(a),this.ea("banner-upload-started",(0,g.v)(this.M,this)),this.ea("banner-upload-succeeded",(0,g.v)(this.T,this)),this.ea("banner-upload-failed",(0,g.v)(this.J,this)),this.D=g.z("c4-banner-uploading-message"),this.H=g.z("c4-banner-upload-success-message"),this.G=g.z("c4-banner-upload-error-message"),jra(this),g.E("CHANNEL_EDITOR_EDIT_BANNER")&&this.ij.show())};
J0.prototype.M=function(){g.R(this.H,"delay-fade-out");g.R(this.G,"delay-fade-out");g.Q(this.D,"visible");var a=this.R("c4-banner-promo");a&&g.W(a)};
J0.prototype.T=function(a,b){g.R(this.D,"visible");g.Q(this.H,"delay-fade-out");g.Q(this.K(),"has-custom-banner");var c={};c["background-image"]=1<(window.devicePixelRatio||1)?"url("+b+")":"url("+a+")";g.wp(this.K(),c);(c=this.R("hd-banner-image"))&&g.wp(c,{"background-image":"url("+b+")"})};
J0.prototype.J=function(a){g.R(this.D,"visible");a&&0!=a.length&&(g.N(g.M("c4-header-bg-message-content",this.G),a[0]),g.Q(this.G,"delay-fade-out"))};
g.Cz(J0,"c4-header-bg-container");g.n(K0,g.X);K0.prototype.Z=function(){g.X.prototype.Z.call(this);this.ea("yt-uix-inlineedit-success",this.G);this.ea("yt-uix-inlineedit-error",this.D)};
K0.prototype.G=function(a){a==this.K()&&(a=(a=this.R("business-email-container"))&&g.cp(a),g.pq(this.K(),"has-text",!!a))};
K0.prototype.D=function(a,b){a==this.K()&&b&&0!=b.length&&g.hA(this.R("yt-uix-form-input-text-container"),b[0])};
g.TR(K0,"about-business-email-editor");g.n(L0,g.X);g.h=L0.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);this.ea("yt-uix-overlay-shown",this.UC);g.Bz(this,"click","channel-settings-dialog-save",this.NG);if(g.E("CHANNEL_EDITOR_EDIT_CHANNEL_SETTINGS")){var a=g.P(this.K(),"yt-uix-overlay");g.NB.getInstance().show(a)}};
g.h.W=function(){g.dd(this.K());g.X.prototype.W.call(this)};
g.h.UC=function(a){g.D(a,"channel-settings-overlay")&&kra(this)};
g.h.nE=function(a,b){var c=g.Zq(b.settings_html);this.R("yt-dialog-content").appendChild(c);g.cA();this.R("yt-dialog-fg").focus();(c=g.z("discussion_tab_enabled"))&&g.U(this).O(c,"click",function(d){g.lv(g.M("comment-moderation-dropdown"),d.currentTarget.checked)})};
g.h.ZE=function(a,b){var c=this.R("channel-settings-error-template"),d=this.R("channel-settings-error");b.errors&&b.errors.length&&(g.cd(d),g.uv(b.errors,c.cloneNode(!0),d),this.R("channel-settings-editor").scrollTop=0)};
g.h.NG=function(){g.Lq(g.z("account-channel-settings-form"),{onSuccess:function(){var a=new g.ks(window.location);a.C.remove("edit_channel_settings");g.pj(a.toString())},
onError:this.ZE,context:this})};
g.Cz(L0,"c4-channel-settings-dialog-content");g.n(M0,g.X);M0.prototype.Z=function(){g.X.prototype.Z.call(this);this.D=this.R("country-selector-select");this.G=this.D.selectedIndex;g.U(this).O(this.D,"change",this.H)};
M0.prototype.H=function(a){a=a.currentTarget;g.I("/channels_profile_ajax?action_update_country=1",{method:"POST",ia:{country:a.options[a.selectedIndex].value},context:this,onSuccess:this.M,onError:this.J})};
M0.prototype.M=function(){this.G=this.D.selectedIndex;g.V(this.R("channel-country-success-template"));g.W(this.R("channel-country-error-template"))};
M0.prototype.J=function(a,b){this.D.selectedIndex=this.G;g.$z.getInstance().uc(this.D);var c=this.R("channel-country-error-template");g.N(g.M("yt-alert-content",c),b.errors[0]);g.V(c);g.W(this.R("channel-country-success-template"))};
g.TR(M0,"country-container");var K1=null;g.n(N0,g.X);N0.prototype.Z=function(){g.X.prototype.Z.call(this);this.ea("yt-uix-inlineedit-success",this.G);this.ea("yt-uix-inlineedit-error",this.D)};
N0.prototype.G=function(a){a==this.K()&&(a=(a=this.R("about-description"))&&g.cp(a),g.pq(this.K(),"has-text",!!a))};
N0.prototype.D=function(a,b){a==this.K()&&b&&0!=b.length&&g.hA(this.R("description-textarea-container"),b[0])};
g.TR(N0,"about-description-editor");g.n(O0,g.X);O0.prototype.Z=function(){this.ea("yt-uix-inlineedit-success",function(a){a==this.K()&&(this.hh&&this.hh.dispose(),this.hh=new g.dS,this.hh.Ra(g.z("c4-legal-info")))});
this.ea("yt-uix-inlineedit-error",function(a,b){a==this.K()&&b&&g.hA(this.R("legal-info-textarea-container"),b[0])})};
O0.prototype.W=function(){this.hh&&this.hh.dispose()};
g.Cz(O0,"c4-legal-info-editor");g.n(P0,g.X);g.h=P0.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);var a=g.z("c4-edit-links-banner-button");a&&g.U(this).O(a,"click",function(){v0(t0.getInstance(),this.K())});
g.E("CHANNEL_EDITOR_EDIT_LINKS")&&v0(t0.getInstance(),this.K());this.ea("yt-uix-inlineedit-form-init",this.bC);this.ea("yt-uix-inlineedit-form-dispose",this.aC);this.ea("yt-uix-inlineedit-success",this.kI);this.ea("yt-uix-inlineedit-error",this.jI)};
g.h.bC=function(a){a==this.K()&&(Q0(this),this.G=new m0,(a=this.C.K("about-metadata-form-network-links"))&&this.G.Ra(a),this.D=new m0,a=this.C.K("about-metadata-form-custom-links"),this.D.Ra(a))};
g.h.aC=function(a){a==this.K()&&Q0(this)};
g.h.kI=function(a,b){if(a==this.K()&&"header_links_html"in b){var c=g.z("header-links"),d=g.Eo(b.header_links_html);g.Jo(d,c);c&&g.H("yt-dom-content-change",c)}};
g.h.jI=function(a,b){if(a==this.K()&&b&&0!=b.length){var c=this.R("c4-module-editor-form-error");g.cd(c);var d=g.z("custom-links-editor-error-template").cloneNode(!0);g.uv(b[0],d,c)}};
g.TR(P0,"about-metadata-editor");g.n(R0,g.X);g.h=R0.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);this.G=this.R("content-picker-text-input");this.D=this.R("c4-content-list");var a=this.K();this.H=Number(g.F(a,"max-item-limit"));V0(this);g.Bz(this,"click","content-picker-add",this.So);g.Bz(this,"click","remove",this.nx);g.U(this).O(this.G,"keydown",function(b){13==b.keyCode&&(b.preventDefault(),this.So(b))});
this.R("yt-comboboxinput")&&this.ea("yt-uix-comboboxinput-notification-change",this.aI)};
g.h.show=function(){g.NB.getInstance().show(this.K())};
g.h.So=function(a){a.preventDefault();T0(this,this.G.value)};
g.h.aI=function(a,b,c){T0(this,c)};
g.h.kC=function(a,b){var c=b.html;if(c&&(c=g.Eo(g.kp(c)),mra(this,g.Xq("input","content-picker-input",c).value)?U0(this,g.wr("CP_DUPLICATE_ITEM_ERROR")):this.D.children.length>=this.H?U0(this,g.wr("CP_MAX_ITEM_ERROR")):(this.D.appendChild(c),this.G.value="",V0(this),S0(this)),c=b.warnings))for(var d=g.xz(this.R("c4-content-picker-warning-template"),["warn"]),e=this.R("c4-content-picker-warnings"),f=0;f<c.length;f++)e.innerHTML+=d.xb({warn:c[f]})};
g.h.jC=function(a,b){b.errors&&0<b.errors.length&&U0(this,b.errors[0])};
g.h.nx=function(a){a.preventDefault();a=g.P(a.target,"content-picker-selector-item");g.dd(a);V0(this);S0(this)};g.n(X0,g.X);g.h=X0.prototype;g.h.Z=function(){this.ea("yt-ui-other-channels-editor-updated",this.fp);this.ea("yt-uix-overlay-shown",this.cD);this.fp();g.E("CHANNEL_EDITOR_EDIT_FEATURED_CHANNELS")&&Y0(this)};
g.h.Za=function(a){g.X.prototype.Za.call(this,a)};
g.h.gx=function(a,b){var c={title:b,other_channel_ids:a};g.cd(this.D.R("c4-content-picker-errors"));g.I("/channels_other_channels_ajax?action_update_featured_channels_section=1",{method:"POST",ia:c,onSuccess:this.Uq,onError:this.Tq,context:this})};
g.h.Uq=function(a,b){var c=g.z("other-channels-sidebar");c&&g.Jo(g.Eo(g.kp(b.sidebar_html)),c);(c=g.z("other-channels-sidebar"))&&g.H("yt-dom-content-change",c);g.H("yt-ui-other-channels-editor-updated")};
g.h.Tq=function(a,b){b.errors&&b.errors.length&&(0,g.B)(b.errors,function(c){var d=this.D;d.show();var e=d.R("c4-content-picker-errors");d=d.R("c4-content-picker-error-template").cloneNode(!0);g.uv(c,d,e)},this)};
g.h.fp=function(){this.H=this.R("yt-uix-overlay");this.G&&g.U(this).Va(this.G,"click",this.Bo);(this.G=this.R("c4-delete-other-channels"))&&g.U(this).O(this.G,"click",this.Bo)};
g.h.cD=function(a){g.D(a,"featured-content-picker-overlay")&&Y0(this)};
g.h.bD=function(a,b){var c=b.header_text,d=g.Zq(b.content_html),e=this.Xe();g.N(g.M("yt-dialog-title",e),c);c=g.M("yt-dialog-content",e);g.cd(c);c.appendChild(d);d=g.M("c4-content-picker",c);this.D&&this.D.dispose();this.D=new R0;this.D.Ra(d);W0(this.D,(0,g.v)(this.gx,this));this.D.show()};
g.h.Xe=function(){var a=g.M("yt-dialog",this.H);a||(a=this.H.overlayContentNode);return a};
g.h.Bo=function(){g.I("/channels_other_channels_ajax?action_disable_featured_channels_section=1",{method:"POST",onSuccess:this.Uq,onError:this.Tq,context:this})};
g.Cz(X0,"other-channels-sidebar-container");g.n(Z0,g.X);g.h=Z0.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);var a=this.K();this.H=this.R("message-container");this.Ig=this.R("add-bulletin-form");g.U(this).O(this.Ig,"submit",this.Qv);(this.D=this.R("attachment-input-selector-select"))&&g.U(this).O(this.D,"change",this.Sv);g.D(a,"yt-uix-expander-collapsed")?this.ea("yt-uix-expander-toggle",this.QB):$0(this);var b=this.R("yt-uix-form-input-textarea");g.U(this).O(b,"focus",function(){g.$B(g.WB.getInstance(),a)})};
g.h.QB=function(a,b){"channels-feeds-posting"==a.getAttribute("id")&&b&&(this.R("yt-uix-form-input-textarea").focus(),$0(this))};
g.h.HF=function(a,b){var c=this.R("attachment-inputs"),d=g.Eo(g.kp(b.attachment_inputs_html));g.Jo(d,c);g.jr(this.D,"change")};
g.h.Sv=function(a){a=a.currentTarget;var b=g.Ko(this.R("attachment-inputs"));(0,g.B)(b,function(c){if(g.mv(c)){var d=g.M("yt-uix-form-input-text",c),e=g.M("yt-uix-form-input-select-element",c);d?g.xq(d,""):e&&(e.selectedIndex=0);g.W(c)}},this);
g.V(b[a.selectedIndex]);g.cA()};
g.h.Qv=function(a){a.preventDefault();g.cd(this.H);g.Q(this.Ig,"loading");g.Lq(this.Ig,{onSuccess:this.Pv,onError:this.Ov,Xa:function(){g.R(this.Ig,"loading")},
context:this})};
g.h.Pv=function(a,b){if("redirect_url"in b)g.qj(b.redirect_url);else if("feed_entry_html"in b){var c=g.Zq(b.feed_entry_html),d=g.M("feed-item-container");d?g.Go(c,d):g.Jo(c,g.Qo(g.M("display-message",void 0)));g.H("yt-dom-content-change",g.M("feed-item-container"));this.D&&(this.D.selectedIndex=0,g.jr(this.D,"change"),g.$z.getInstance().uc(this.D));g.xq(g.z("post-bulletin-message"),"")}};
g.h.Ov=function(a,b){var c=g.F(this.Ig,"generic-error-message");b.errors&&b.errors.length&&(c=b.errors[0]);var d=g.z("bulletin-error-alert-template").cloneNode(!0);g.uv(c,d,this.H)};
g.Cz(Z0,"channels-feeds-posting");g.n(a1,g.X);a1.prototype.Z=function(){b1(this)};
a1.prototype.G=function(a,b){var c=this.R("branded-page-related-channels-list");if(!(c&&0<g.Ko(c).length)&&b.sidebar_html){c=g.z("related-channels-sidebar");var d=this.R("related-channels-enable-button");g.U(this).Va(d,"click",g.w(this.D,!0));d=this.R("related-channels-disable-button");g.U(this).Va(d,"click",g.w(this.D,!1));g.Jo(g.Eo(g.kp(b.sidebar_html)),c);b1(this)}};
a1.prototype.D=function(a){g.pq(this.R("related-channels-editor"),"related-channels-module-disabled",!a);var b=this.R("related-channels-visibility-form"),c={};a&&(c.related_channels_visible=!0);g.Lq(b,{ia:c,onSuccess:this.G,context:this})};
g.Cz(a1,"related-channels-sidebar-container");g.n(c1,g.X);g.h=c1.prototype;
g.h.Z=function(){g.X.prototype.Z.call(this);this.Af=g.z("c4-shelves-container");var a=this.R("c4-empty-shelf-container-template");if(a){var b=g.wz(a);g.$q(b);g.dd(a)}this.ea("yt-uix-inlineedit-success",this.Iw);g.Bz(this,"click","c4-module-editor-delete",this.ow);g.Bz(this,"submit","c4-module-editor-form",this.Ax);g.Bz(this,"keydown","c4-shelf-preview-on-press",this.Yg);g.Bz(this,"click","c4-shelf-playlist-url-button",this.hx);this.ea("yt-uix-comboboxinput-notification-change",this.lI);this.ea("yt-uix-orderedlist-order-changed",
this.tx);this.ea("yt-uix-inlineedit-error",this.Oo);g.E("CHANNEL_EDITOR_ADD_SHELF")&&(a=this.R("c4-empty-shelf-container"))&&(a=g.M("yt-uix-inlineedit",a),v0(t0.getInstance(),a));this.ea("yt-uix-inlineedit-form-init",this.vx);this.ea("yt-uix-inlineedit-form-dispose",this.ux);this.D={};this.G={};i1(this);this.tj()};
g.h.Sa=function(){this.H.length=0};
g.h.tj=function(){this.H=this.wb("c4-shelf-container")};
g.h.vx=function(a){if(d1(a)){f1(this,a,this.D,"c4-shelf-form-multi-channel-inputs","shelf_channel_ids","channels_shelf_title","/channels_picker_ajax?action_get_channel_picker_dialog=1");f1(this,a,this.G,"c4-shelf-form-multi-playlist-inputs","shelf_full_list_ids","playlists_shelf_title","/channels_picker_ajax?action_get_playlist_picker_dialog=1");var b=g.M("c4-shelf-form-single-show-selected",a);b&&h1(this,b);b=g.U(this);var c=g.M("checkbox-on-off");c&&b.O(c,"change",this.wo);(c=g.M("c4-shelf-layout-input",
a))&&b.O(c,"change",this.Yg);if(c=g.M("c4-shelf-content-type-input",a))b.O(c,"change",this.zo),b.O(c,"change",this.Yg);(c=g.M("c4-shelf-playlist-entry-type-input",a))&&b.O(c,"change",this.Ko);(a=g.M("c4-shelf-single-show-entry-type-input",a))&&b.O(a,"change",this.Po)}};
g.h.ux=function(a){d1(a)&&(e1(this,a),a=g.Ga(a),this.D[a]&&(this.D[a].dispose(),delete this.D[a]),this.G[a]&&(this.G[a].dispose(),delete this.G[a]))};
g.h.Oo=function(a,b){if(d1(a)){var c=g.M("shelf-form-error-template",a),d=g.M("c4-module-editor-form-error",a);c&&d&&(g.cd(d),(0,g.B)(b,function(e){var f=c.cloneNode(!0);g.R(f,"shelf-form-error-template");g.uv(e,f,d)}))}};
g.h.Xe=function(a){var b=g.M("yt-dialog",a);b||(b=a.overlayContentNode);return b};
g.h.wy=function(a,b,c,d,e,f,k){var l=g.Ga(a);if(!b[l]){var m=g.M("yt-uix-overlay",g.M(c,a));g.pq(this.Xe(m),"c4-content-picker-dialog-loading",!0);g.I(k,{method:"POST",ia:{section_title:d,item_ids:e},onSuccess:g.w(this.fx,m,b,l,f),Xa:function(){g.pq(this.Xe(m),"c4-content-picker-dialog-loading",!1)},
context:this})}};
g.h.fx=function(a,b,c,d,e,f){e=f.header_text;f=g.Zq(f.content_html);a=this.Xe(a);g.N(g.M("yt-dialog-title",a),e);a=g.M("yt-dialog-content",a);g.cd(a);a.appendChild(f);a=g.M("c4-content-picker",a);e=new R0;e.Ra(a);d&&W0(e,d);b[c]=e};
g.h.lI=function(a){if(g.P(a,"c4-shelf-form")){var b=g.M("yt-comboboxinput-input",g.Qo(a));if(b){var c=g.ep(a,"form");"shelf_playlist_id"==b.name&&(b=g.M("c4-shelf-playlist-url-input",c))&&(b.value="");this.qh(a)}}};
g.h.hx=function(a){a=a.currentTarget;var b=g.P(a,"c4-shelf-form-playlist-inputs");g.M("yt-comboboxinput-input",b).value="";this.qh(a)};
g.h.wo=function(a){a=a.currentTarget;var b=g.ep(a,"form");g.zo("input",void 0,a).checked?(g.M("display-message").removeAttribute("hidden"),g.oq(b,g.qn(L1))):(g.Q(b,"c4-shelf-form-playlist-selected"),g.M("display-message").setAttribute("hidden",""))};
g.h.zo=function(a){var b=a.currentTarget;a=g.ep(b,"form");g.oq(a,g.qn(L1));b=g.Ka(b.getElementsByTagName("option"),function(c){return c.selected});
g.F(b,"single-playlist-shelf")?g.Q(a,"c4-shelf-form-playlist-selected"):g.F(b,"multi-playlist-shelf")?g.Q(a,"c4-shelf-form-multi-playlist-selected"):g.F(b,"multi-channel-shelf")?g.Q(a,"c4-shelf-form-multi-channel-selected"):g.F(b,"single-show-shelf")&&(g.Q(a,"c4-shelf-form-single-show-selected"),a&&h1(this,a));i1(this)};
g.h.Ko=function(a){var b=a.currentTarget;a=g.ep(b,"form");g.oq(a,g.qn(yra));b=g.Ka(b.getElementsByTagName("option"),function(c){return c.selected});
g.F(b,"playlist-dropdown-entry")?g.Q(a,"c4-shelf-form-playlist-dropdown-selected"):g.F(b,"playlist-url-entry")&&g.Q(a,"c4-shelf-form-playlist-url-selected")};
g.h.Po=function(a){this.qh(a.currentTarget)};
g.h.fH=function(a,b,c){b=g.Eo(g.kp(c.entry_options_html));c=g.M("c4-shelf-single-show-entry-type-input",a);g.cd(c);c.appendChild(b);g.MG.getInstance().Vd();g.H("yt-dom-content-change",a)};
g.h.wx=function(a,b,c){c.errors&&this.Oo(a,c.errors)};
g.h.tx=function(a,b,c,d){a=g.M("c4-shelf-id",b).value;b=null;c&&(b=g.M("c4-shelf-id",c).value);z0.getInstance().enable(this.Af,!1);g.H("yt-dom-content-change",this.Af);g.I("/channels_shelves_ajax?action_reorder_shelves=1",{method:"POST",ia:{shelf_id:a,shelf_id_successor:b},context:this,onSuccess:this.tj,onError:this.XF,Xa:function(){d&&d();z0.getInstance().enable(this.Af,!0)}})};
g.h.XF=function(){var a=this.Af;(0,g.B)(this.H,function(b){g.dd(b)});
g.Fo(a,this.H);z0.getInstance().refresh(a)};
g.h.Iw=function(a,b){if(d1(a)){g.MG.getInstance().Vd();g.H("yt-dom-content-change",a);var c=g.P(a,"c4-empty-shelf-container");if(c){g.R(c,"c4-empty-shelf-container");g.nq(c,["c4-shelf-container","yt-uix-orderedlist-item"]);this.Af.appendChild(c);if("creator_html"in b){var d=g.$q(g.$b(b.creator_html));this.K().appendChild(d);g.gA()}z0.getInstance().refresh(c)}i1(this);this.tj()}};
g.h.Ax=function(a){var b=g.M("c4-module-editor-submit",a.currentTarget);b&&(b.disabled=!0,g.Yf(this.M),this.M=g.Wf(function(){b.disabled=!1},1500))};
g.h.ow=function(a){var b=a.currentTarget;b.disabled=!0;if(a=g.P(b,"c4-shelf-container"))b={shelf_id:g.ep(b,"form").shelf_id.value},g.I("/channels_shelves_ajax?action_delete_shelf=1",{method:"POST",ia:b,context:this,onSuccess:g.w(this.mw,a),nb:!0})};
g.h.mw=function(a,b,c){e1(this,a);g.dd(a);"creator_html"in c&&(a=g.$q(g.$b(c.creator_html)),this.K().appendChild(a),g.gA());i1(this);z0.getInstance().refresh(this.Af);g.H("yt-dom-content-change",this.Af);this.tj()};
g.h.Yg=function(a){a=a.currentTarget;g.Yf(this.J);this.J=g.Wf((0,g.v)(this.qh,this,a),500)};
g.h.qh=function(a){a=g.ep(a,"form");var b=g.Km(g.wq(a));g1(a);g.I("/channels_shelves_ajax?action_preview_shelf=1",{method:"POST",ia:b,onSuccess:(0,g.v)(this.mI,this,a),onError:(0,g.v)(this.jx,this,a)})};
g.h.jx=function(a,b,c){g.W(g.M("c4-shelf-preview-container",a));(b=c.playlist_url_error)&&g.hA(g.M("playlist-url-form-input-container",a),b)};
g.h.mI=function(a,b,c){b=g.Eo(g.kp(c.preview_html));g.Jo(b,g.M("c4-shelf-preview",a));g.V(g.M("c4-shelf-preview-container",a));g.MG.getInstance().Vd();g.H("yt-dom-content-change",a)};
g.h.kw=function(a,b,c,d,e,f){var k=g.M(b,a);(0,g.B)(g.Ao("input",null,k),function(l){l.name!=c&&l.name!=d||k.removeChild(l)});
(0,g.B)(e,function(l){var m=g.bd("input");m.name=c;m.type="hidden";m.value=l;k.appendChild(m)});
a=g.bd("input");a.name=d;a.type="hidden";a.value=f;k.appendChild(a);this.qh(k)};
var M1=null,L1={aO:"c4-shelf-form-playlist-selected",SO:"c4-shelf-form-single-show-selected",tN:"c4-shelf-form-multi-channel-selected",uN:"c4-shelf-form-multi-playlist-selected"},yra={dO:"c4-shelf-form-playlist-dropdown-selected",hO:"c4-shelf-form-playlist-url-selected"};g.n(j1,g.X);g.h=j1.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);this.J=[];this.H=[];this.D={};g.Bz(this,"click","open-featured-content-picker",this.ll);g.Bz(this,"click","delete-featured-content",this.bI);this.ea("yt-ui-videopicker-save",this.dI)};
g.h.W=function(){g.ib(this.D,function(a){g.ZO(a);a.dispose()});
this.D={};g.nh(this.J);this.J.length=0;this.G&&(this.G.dispose(),g.nh(this.H),this.H.length=0);g.X.prototype.W.call(this)};
g.h.dI=function(a){g.pn(this.D,a)&&g.I("/channels_spotlight_ajax?action_get_featured_content_confirm_dialog=1",{method:"POST",postBody:g.vq(g.M("c4-welcome-editor-form")),context:this,onSuccess:this.rF,onError:g.w(this.yG,a)})};
g.h.rF=function(a,b){g.ib(this.D,function(e){g.ZO(e)});
var c=g.M("c4-featured-content-confirm-dialog-container");if(b.confirm_dialog_html&&(c.innerHTML=b.confirm_dialog_html,c=g.M("c4-featured-content-confirm-dialog"),this.G&&(this.G.dispose(),g.nh(this.H)),c)){this.G=new g.AB(c);this.G.show();var d=g.S(c,"click",(0,g.v)(this.ll,this),"c4-featured-content-close-confirm-dialog");this.H.push(d);c=g.S(c,"click",(0,g.v)(this.dG,this),"c4-featured-content-save");this.H.push(c)}};
g.h.yG=function(a,b,c){c.errors&&a.Kg(c.errors[0])};
g.h.ll=function(a){a=g.F(a.currentTarget,"ajax-action");g.ib(this.D,function(d){g.ZO(d)});
if(this.D[a])this.D[a].show();else{var b="/video_picker_ajax?action_"+a+"=1",c=this.R("featured-content-video-picker");g.pq(c,"picker-dialog-loading",!0);g.I(b,{method:"GET",onSuccess:g.w(this.cI,c,a),Xa:function(){g.pq(c,"picker-dialog-loading",!1)},
context:this})}};
g.h.cI=function(a,b,c,d){var e=d.header_text,f=g.Zq(d.content_html);d=g.M("yt-video-picker-dialog",a);c=g.M("yt-dialog",d).cloneNode(!0);g.N(g.M("yt-dialog-title",d),e);e=g.M("yt-dialog-content",d);e.appendChild(f);e=g.S(e,"click",(0,g.v)(this.ll,this),"open-content-picker");this.J.push(e);e=new g.XO;e.Ra(a);e.show();this.D[b]=e;d.appendChild(c)};
g.h.dG=function(){var a=g.M("c4-welcome-editor-form");this.G.dismiss("save");g.I("/channels_spotlight_ajax?action_preview_featured_content=1",{method:"POST",postBody:g.vq(a),context:this,onSuccess:this.eI})};
g.h.eI=function(a,b){var c=g.Eo(g.kp(b.preview_html)),d=this.R("c4-featured-content-preview");g.cd(d);d.appendChild(c);g.H("yt-dom-content-change",d);(c=g.M("c4-module-editor-submit",g.z("c4-spotlight-editor")))&&g.qq(c,"yt-uix-button-default","yt-uix-button-primary");d=g.P(d,"c4-featured-content-column");g.Q(d,"preview-column")};
g.h.bI=function(){g.H("yt-www-channels-c4-component-featuredcontenteditor-delete")};g.n(k1,g.X);g.h=k1.prototype;
g.h.Z=function(){g.X.prototype.Z.call(this);this.ea("yt-ui-videopicker-save",this.pI);g.Bz(this,"click","open-upsell-video-picker",this.vp);g.E("CHANNEL_EDITOR_EDIT_TRAILER")&&(this.H="upsell-tab",l1(this),this.vp());g.Bz(this,"click","upsell-delete",this.qu);var a=g.z("upsell-video-edit");a&&(this.D=new g.VR,this.D.Ra(a));this.ea("yt-www-channels-c4-component-featuredcontenteditor-delete",this.nI);g.Bz(this,"click","spotlight-editor-tab",this.Bx);this.H="featured-content-tab";this.ea("yt-uix-inlineedit-form-init",
this.Dw);this.ea("yt-uix-inlineedit-form-dispose",this.Cw)};
g.h.W=function(){this.ad&&(this.ad.dispose(),this.ad=null);this.D&&(this.D.dispose(),this.D=null);this.G&&(this.G.dispose(),this.G=null);g.X.prototype.W.call(this)};
g.h.vp=function(){this.ad?this.ad.show():g.I("/video_picker_ajax?action_get_trailer_picker_dialog=1",{method:"GET",onSuccess:g.w(this.oI,this.R("upsell-video-picker")),context:this})};
g.h.oI=function(a,b,c){b=c.header_text;c=g.Zq(c.content_html);var d=g.M("yt-video-picker-dialog",a);g.N(g.M("yt-dialog-title",d),b);g.M("yt-dialog-content",d).appendChild(c);this.ad=new g.XO;this.ad.Ra(a);this.ad.show()};
g.h.nI=function(){var a=this.R("c4-welcome-editor-form");a.action="/channels_spotlight_ajax?action_delete_featured_content=1";g.jr(a,"submit")};
g.h.qu=function(){g.I("/channels_spotlight_ajax?action_delete_upsell=1",{method:"POST",context:this,onSuccess:this.Wq})};
g.h.pI=function(a){a==this.ad&&g.Lq(this.R("c4-upsell-editor-form"),{context:this,onSuccess:this.Wq,onError:function(b,c){var d=c.errors;d&&d.length&&(this.ad.show(),this.ad.Kg(d[0]))}})};
g.h.Wq=function(a,b){var c=g.Eo(g.kp(b.upsell_editor_html)),d=this.R("c4-upsell-editor-container");g.Jo(c,d);g.H("yt-dom-content-change",d);if(c=g.z("upsell-video-edit"))this.D?this.D.Sa():this.D=new g.VR,this.D.Ra(c);this.ad&&(this.ad.dispose(),this.ad=null)};
g.h.Dw=function(a){if("c4-welcome-editor"==a.id){if(a=g.M("c4-featured-content-editor"))this.G=new j1,this.G.Ra(a);l1(this)}};
g.h.Cw=function(a){"c4-welcome-editor"==a.id&&this.G&&(this.G.dispose(),this.G=null)};
g.h.Bx=function(a){a=a.currentTarget;g.D(a,"featured-content-tab")?this.H="featured-content-tab":g.D(a,"upsell-tab")&&(this.H="upsell-tab");l1(this)};
g.Cz(k1,"c4-spotlight-editor");g.n(m1,g.X);g.h=m1.prototype;
g.h.Z=function(){g.X.prototype.Z.call(this);ora(this);this.X=this.R("save-button");g.U(this).O(this.X,"click",this.rI);var a=this.R("cancel-button");g.U(this).O(a,"click",this.oA);this.M=g.F(this.K(),"ajax-endpoint");this.D=g.F(this.K(),"full-list-id");this.J=g.F(this.K(),"channel-url");this.ea("translation-editor-original-language-selected",this.kE);this.ea("translation-editor-translated-language-selected",this.lE);this.ea("translation-editor-translated-language-deleted",this.EB);g.Do().onbeforeunload=
(0,g.v)(this.iH,this)};
g.h.Sa=function(){g.X.prototype.Sa.call(this);this.X=null;g.Do().onbeforeunload=null};
g.h.iH=function(){if(o1(this))return g.wr("UNSAVED_CHANGES_WARNING")};
g.h.kE=function(a){r1(this,!0);var b=this.M+"?action_set_default_language=1";a={language_id:a};this.D&&(a.playlist_id=this.D);p1(this,"saving-message");g.I(b,{method:"POST",ia:a,onSuccess:this.WD,context:this})};
g.h.WD=function(){r1(this,o1(this))};
g.h.EB=function(a){r1(this,!0);var b=this.M+"?action_delete_translation_language=1";a={language_id:a};this.D&&(a.playlist_id=this.D);p1(this,"saving-message");g.I(b,{method:"POST",ia:a,onSuccess:this.DB,context:this})};
g.h.DB=function(){r1(this,!1)};
g.h.lE=function(a){this.G&&o1(this)&&q1(this,this.G,!1);this.G=a;this.T=g.qd(n1(this,this.G))};
g.h.rI=function(){var a=this.H.getSelectedLanguage();!a&&o1(this)||q1(this,a,!0)};
g.h.oA=function(){this.dispatchEvent("c4-translation-editor-cancel");this.J&&g.pj(this.J)};
g.h.bE=function(a){r1(this,!1);this.T=g.qd(n1(this,this.G));a&&(this.dispatchEvent("c4-translation-editor-save-by-user"),this.J&&g.pj(this.J))};
g.h.aE=function(a,b){var c=this.H.getSelectedLanguage(),d={},e=b.errors[0];g.yq(e)?d[c]=JSON.parse(e):d[c]={};this.H.setErrors(d);p1(this,"unsaved-message")};
g.h.qI=function(){r1(this,o1(this))};
g.TR(m1,"c4-translation-editor");var N1=[];g.n(u1,g.X);u1.prototype.Z=function(){g.X.prototype.Z.call(this);var a=this.R("playlist-add-video-button");g.U(this).O(a,"click",this.H);var b=g.F(a,"picker-title")||"";b=g.DI(g.DI(g.DI(g.qL("yt-addtoplaylist").setTitle(b).setSize(1E3),g.xI()),g.vI()),"youtube");b.C.set("multiselectEnabled","true");a=g.cp(a);b.C.set("selectButtonLabel",a);this.D=g.XJ(g.EI(b,(0,g.v)(this.G,this)))};
u1.prototype.G=function(a){if("picked"==a.action){var b=(0,g.Hl)(a.docs,function(c){return c.id});
b&&b.length&&(this.R("playlist-add-video-form-video-id").value=b.join(","),a=(0,g.Hl)(a.docs,function(c){var d=c.accessToken;return d?c.id+":"+d:""}),this.R("playlist-add-video-form-video-access-token").value=a.join(","),g.Lq(this.K(),{onSuccess:function(){window.location.reload()},
onError:function(c,d){var e=g.z("add-video-failed"),f=i0(d.errors.join(" "));g.En(g.M("yt-alert-content",e),f);g.V(e)}}))}};
u1.prototype.H=function(){this.D.Rb(!0)};
u1.prototype.W=function(){this.D=null;g.X.prototype.W.call(this)};
g.Cz(u1,"playlist-add-video-form");var O1;g.n(v1,g.X);g.h=v1.prototype;
g.h.Z=function(){g.X.prototype.Z.call(this);this.Oh=this.wb("pl-video");this.H=g.F(this.K(),"playlist-edit-xsrf-token");this.J=g.F(this.K(),"like-xsrf-token");this.G=g.F(this.K(),"playlist-id");g.Bz(this,"focusin","pl-video-edit-options",this.Aw);g.Bz(this,"focusout","pl-video-edit-options",this.Bw);g.Bz(this,"click","pl-video-edit-remove",this.mx);g.Bz(this,"click","pl-video-edit-remove-liked-video",this.lx);g.Bz(this,"click","pl-video-edit-move-top",this.Xw);g.Bz(this,"click","pl-video-edit-move-bottom",
this.Ww);g.Bz(this,"click","pl-video-set-thumbnail",this.sx);this.ea("yt-uix-dragdrop-notification-dragend",this.TI);this.ea("yt-uix-menu-before-show",(0,g.v)(this.VI,this));this.ea("yt-uix-menu-hide",(0,g.v)(this.UI,this));var a=g.M("playlist-cleared-of-deleted-videos-alert");a&&g.Bz(this,"click","close",this.GD,this,a)};
g.h.TI=function(a,b){if(a==this.K()&&b){var c=g.F(b,"set-video-id"),d=null,e=g.No(b);e&&(d=g.F(e,"set-video-id"));this.Vh(c,d)}};
g.h.Vh=function(a,b){a&&g.I("/playlist_edit_service_ajax/?action_move_video_before=1",{method:"POST",ia:{playlist_id:this.G,set_video_id:a,moved_set_video_id_successor:b,session_token:this.H},onSuccess:function(c,d){this.Oh=this.wb("pl-video",this.K());this.Xg(c,d)},
onError:g.w(this.KD,a,b),context:this})};
g.h.KD=function(a,b,c,d){if(c=g.z("pl-load-more-destination"))g.cd(c),g.Fo(c,this.Oh);"set-manual-sort-order-dialog"in d&&(this.hg=[a,b],a=i0(d["set-manual-sort-order-dialog"]),g.En(this.R("set-manual-sort-order-container"),a),a=this.R("set-manual-sort-order"),this.D&&this.D.dispose(),this.D=new g.AB(a),this.D.show(),g.BB(this.D,"cancel",(0,g.v)(this.Pz,this)),g.BB(this.D,"save",(0,g.v)(this.aw,this),!0))};
g.h.Pz=function(){this.hg=null};
g.h.aw=function(){this.D.setState("working");var a=this.R("set-manual-sort-order-form");a&&g.Lq(a,{onSuccess:function(b,c){this.hg?this.Vh.apply(this,this.hg):this.Xg(b,c)},
context:this})};
g.h.Aw=function(a){g.D(document.documentElement,"no-focus-outline")||g.Q(a.currentTarget,"pl-video-edit-options-focus")};
g.h.Bw=function(a){g.R(a.currentTarget,"pl-video-edit-options-focus")};
g.h.mx=function(a){a=g.P(a.currentTarget,"pl-video");var b=g.F(a,"set-video-id"),c=this.H;b&&a&&c&&tra(this,b,a,c)};
g.h.lx=function(a){a=g.P(a.currentTarget,"pl-video");var b=g.F(a,"video-id"),c=this.J;b&&a&&c&&ura(this,b,a,c)};
g.h.VI=function(a,b){var c=g.M("pl-video-edit-more",a);c&&(w1(this,c,!0),g.lv(g.M("pl-video-edit-move-top",b),!!g.F(c,"can-move-to-top")),g.lv(g.M("pl-video-edit-move-bottom",b),!!g.F(c,"can-move-to-bottom")),g.lv(g.M("pl-video-edit-notes",b),!!g.F(c,"can-edit-notes")),g.lv(g.M("pl-video-set-thumbnail",b),!!g.F(c,"can-set-playlist-thumbnail")),g.lv(g.M("pl-video-edit-segment",b),!!g.F(c,"can-edit-segment")))};
g.h.UI=function(a){(a=g.M("pl-video-edit-more",a))&&w1(this,a,!1)};
g.h.Xw=function(){var a=g.Xq("tr","pl-video",this.K()),b=this.R("yt-editing-video");a=g.F(a,"set-video-id");var c=g.F(b,"set-video-id");g.Io(g.z("pl-video-table"),b,0);this.Vh(c,a)};
g.h.Ww=function(){var a=this.R("yt-editing-video"),b=g.F(a,"set-video-id");if(this.wb("load-more-button").length)g.dd(a);else{var c=g.z("pl-video-table");g.Io(c,a,c.length)}this.Vh(b,null)};
g.h.sx=function(){var a=g.F(this.R("yt-editing-video"),"video-id");g.I("/playlist_edit_service_ajax/?action_set_playlist_thumbnail=1",{method:"POST",ia:{playlist_id:this.G,thumbnail_video_id:a,session_token:this.H},onSuccess:this.Xg,context:this})};
g.h.Xg=function(a,b){b&&b.header_html&&!this.hg?g.H("playlist-update-header",b.header_html):(this.hg=null,window.location.reload())};
g.h.GD=function(){g.I("/playlist_edit_service_ajax/?action_remove_cleared_of_deleted_videos=1",{method:"POST",ia:{playlist_id:this.G}})};
g.h.W=function(){this.G=this.J=this.H=this.Oh=null;this.D&&(this.D.dispose(),this.D=null);g.X.prototype.W.call(this)};
g.Cz(v1,"pl-video-list");g.n(x1,g.X);g.h=x1.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);var a=new g.AB(this.R("notes-editor-dialog"));g.BB(a,"save",(0,g.v)(this.YI,this));g.BB(a,"cancel",(0,g.v)(this.XI,this));this.fb=a;this.ab=this.R("notes-form");g.Bz(this,"click","pl-video-edit-notes",this.ww)};
g.h.ww=function(a){a=g.P(a.currentTarget,"pl-video");var b=g.F(a,"set-video-id"),c=this.R("notes-editor-input"),d=this.R("notes-editor-set-video-id"),e=g.F(a,"video-annotation")||"";c.value=e;d.value=b;b=this.R("yt-dialog-title");a=g.F(a,"title")||"";c=document.createElement("h3");g.N(c,a);g.Q(c,"notes-editor-subtitle");g.Ho(c,b);this.fb.show()};
g.h.WI=function(){window.location.reload()};
g.h.YI=function(){this.fb.setState("working");g.Lq(this.ab,{onSuccess:this.WI,Xa:function(){this.fb.setState("content")},
context:this})};
g.h.XI=function(){g.dd(this.R("notes-editor-subtitle"))};
g.Cz(x1,"pl-video-list");g.n(y1,g.X);g.h=y1.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);this.G=g.F(this.K(),"full-list-id");var a=g.U(this),b=this.R("remove-watched-button");b&&a.O(b,"click",this.NA);(b=this.R("pl-header-title-editor-input"))&&z1(this,b,function(){A1(this,"pl-header-title-editor-form")});
(b=this.R("pl-header-description-editor-textarea"))&&z1(this,b,function(){A1(this,"pl-header-description-editor-form")});
this.ea("yt-uix-inlineedit-error",this.Hw);this.ea("yt-uix-inlineedit-success",function(){var c=this.R("pl-header-title-editor-input");c&&z1(this,c,function(){A1(this,"pl-header-title-editor-form")})});
this.ea("yt-uix-inlineedit-success",function(){var c=this.R("pl-header-description-editor-textarea");c&&z1(this,c,function(){A1(this,"pl-header-description-editor-form")})});
if(b=this.R("delete-button"))a.O(b,"click",this.ZI),a.O(this.R("confirm-delete-button"),"click",this.sA),a.O(this.R("cancel-delete-button"),"click",this.nA);(b=this.R("translate-playlist-button"))&&a.O(b,"click",this.SE)};
g.h.Hw=function(a,b){if(g.D(a,"pl-header-inlineedit")){if(b&&b[0]){var c=g.M("yt-uix-form-input-container",a);if(c){g.hA(c,b[0]);return}}window.location.reload()}};
g.h.ZI=function(){this.D||(this.D=new g.AB(g.M("delete-confirmation-dialog",void 0)));this.D.show()};
g.h.nA=function(){this.D.dismiss("cancel")};
g.h.sA=function(){this.D.setState("working");g.I("/playlist_ajax?action_delete_playlist=1",{method:"POST",ia:{full_list_id:this.G},onSuccess:this.AB,onError:this.Zp,context:this})};
g.h.AB=function(a,b){b.errors&&this.Zp(a,b);g.H("yt-uix-playlistlike-unliked",{id:this.G});var c=g.F(this.K(),"all-playlists-url");g.pj(c)};
g.h.Zp=function(){this.D.setState("content");this.D.dismiss("cancel")};
g.h.NA=function(){g.Lq(g.Sc("playlist-remove-watched-form"),{onSuccess:function(){window.location.reload()}})};
g.h.SE=function(a){B1(this,!0);this.H||(a={full_list_id:g.F(a.target,"full-list-id")},g.I("/playlist_ajax?action_get_translation_editor=1",{Ta:a,onSuccess:this.lC,context:this,nb:!0}))};
g.h.lC=function(a,b){this.H=!0;g.En(this.R("pl-translation-editor-content"),b.result.editor_html);var c=this.R("pl-translation-editor"),d=new m1;d.Ra(c);g.U(this).O(d,"c4-translation-editor-cancel",this.Fx);g.U(this).O(d,"c4-translation-editor-save-by-user",this.Gx)};
g.h.Fx=function(){B1(this,!1)};
g.h.Gx=function(){B1(this,!1)};
g.Cz(y1,"pl-header");g.n(C1,g.X);g.h=C1.prototype;g.h.Z=function(){g.X.prototype.Z.call(this);var a=new g.AB(this.R("segment-editor-dialog"));g.BB(a,"save",(0,g.v)(this.cJ,this));g.BB(a,"cancel",(0,g.v)(this.bJ,this));this.fb=a;this.ab=this.R("segment-form");g.Bz(this,"click","pl-video-edit-segment",this.xw)};
g.h.xw=function(a){a=g.P(a.currentTarget,"pl-video");var b=g.F(a,"set-video-id"),c=this.R("segment-title-input"),d=this.R("segment-editor-set-video-id"),e=g.F(a,"segment-title")||"";c.value=e;d.value=b;b=this.R("yt-dialog-title");a=g.F(a,"title")||"";c=document.createElement("h3");g.N(c,a);g.Q(c,"segment-editor-subtitle");g.Ho(c,b);this.fb.show()};
g.h.aJ=function(){window.location.reload()};
g.h.cJ=function(){this.fb.setState("working");g.Lq(this.ab,{onSuccess:this.aJ,Xa:function(){this.fb.setState("content")},
context:this})};
g.h.bJ=function(){g.dd(this.R("segment-editor-subtitle"))};
g.Cz(C1,"pl-video-list");g.n(D1,g.X);g.h=D1.prototype;
g.h.Z=function(){g.X.prototype.Z.call(this);this.J=g.F(this.K(),"full-list-id")||"";this.M=this.R("yt-dialog-content");this.fb=new g.AB(this.R("playlist-settings-dialog"));var a=this.R("edit-button");g.U(this).O(a,"click",this.El);g.Bz(this,"click","re-edit-button",this.LA);g.Bz(this,"click","confirm-auto-add-button",this.rA);g.Bz(this,"click","create-invite-link-button",this.An);g.Bz(this,"click","revoke-all-links",this.PA);g.Bz(this,"change","check-form-on-change",this.lh);a=g.M("pl-header-title-icon");
g.U(this).O(a,"click",this.show);this.ea("yt-uix-tabs-after-shown",this.xz);g.E("OPEN_ADVANCED_SETTINGS")&&this.El()};
g.h.dispose=function(){g.X.prototype.dispose.call(this);F1(this);this.fb&&(this.fb.dispose(),this.fb=null)};
g.h.xz=function(a,b){"collaboration-settings"==b.getAttribute("id")&&g.D(this.R("collaboration-settings-invite-link"),"has-invite-links")&&(g.tq(this.R("invite-link"))||this.An())};
g.h.El=function(){this.fb.show();this.fb.setState("loading");g.I("/playlist_ajax?action_get_settings_editor=1",{method:"GET",Ta:{full_list_id:this.J},onSuccess:this.GC,onError:this.FC,context:this})};
g.h.Nj=function(a){a.preventDefault();g.W(this.R("error-message"));this.fb.setState("working");wra(this);vra(this)};
g.h.Jm=function(a,b){if(b.auto_add_confirmation_dialog_html){this.rd&&this.rd.dispose();this.R("auto-add-confirmation-dialog-container").innerHTML=b.auto_add_confirmation_dialog_html;var c=this.R("auto-add-confirmation-dialog");c&&(this.rd=new g.AB(c),this.fb.dismiss("close"),this.rd.show())}else window.location.reload()};
g.h.LA=function(){this.rd.dismiss("cancel");this.fb.show()};
g.h.rA=function(){var a=this.R("auto-add-confirmation-form");g.SR(a,"add_matching_videos")?(this.rd.setState("working"),g.Lq(a,{onSuccess:this.Jm,Xa:function(){this.rd&&this.rd.setState("content")},
context:this})):this.Jm(null,{})};
g.h.Cl=function(){var a=g.M("add-to-top-container");if(a){var b="0"==g.tq(this.R("playlist-video-order-input"));g.lv(a,b)}};
g.h.Bl=function(){var a=g.tq(this.R("playlist-privacy-input")),b=this.R("collaboration-settings-tab-nav");a="0"!=a;g.pq(b,"disabled",!a);a?b.removeAttribute("aria-disabled"):b.setAttribute("aria-disabled","true")};
g.h.XD=function(a,b){b.errors&&b.errors[0]&&E1(this,b.errors[0])};
g.h.show=function(){this.El()};
g.h.GC=function(a,b){F1(this);this.M.innerHTML=b.editor_content;g.gA();g.U(this).O(this.R("save-button"),"click",this.Nj);g.U(this).O(this.R("settings-form"),"submit",this.Nj);g.U(this).O(this.R("playlist-video-order-input"),"change",this.Cl);this.Cl(null);if(this.R("playlist-privacy-input")){g.U(this).O(this.R("playlist-privacy-input"),"change",this.Bl);this.Bl(null);var c=g.z("open-to-contributions");c&&(g.U(this).O(c,"change",this.Xp),this.X=c.checked)}if(c=this.R("auto-add-rule-list"))this.D=
new m0,this.D.Ra(c),c=(0,g.v)(this.lh,this),this.D.H=c,c=(0,g.v)(this.lh,this),this.D.G=c;this.H=this.R("settings-form");this.T=H1(this);this.R("save-button").disabled=!0;this.fb.setState("content")};
g.h.FC=function(a,b){b.errors&&b.errors[0]&&(E1(this,b.errors[0]),this.fb.setState("content"))};
g.h.Xp=function(a){a=a.currentTarget;g.pq(this.R("collaboration-settings-invite-link"),"disabled",!a.checked);g.lv(this.R("collaboration-settings-contributor-list"),a.checked)};
g.h.PA=function(){g.qq(this.R("collaboration-settings-invite-link"),"has-invite-links","no-invite-links");G1(this,!0)};
g.h.An=function(){G1(this,!1);g.I("/playlist_ajax?action_create_collaboration_invite_link=1",{method:"POST",ia:{full_list_id:this.J},onSuccess:this.pB,onError:this.oB,context:this})};
g.h.oB=function(a,b){b.errors&&b.errors[0]&&E1(this,b.errors[0])};
g.h.pB=function(a,b){b.errors&&b.errors[0]?E1(this,b.errors[0]):(g.xq(this.R("invite-link"),b.result.invite_link),g.qq(this.R("collaboration-settings-invite-link"),"no-invite-links","has-invite-links"),this.lh(null))};
g.h.lh=function(){var a=H1(this);this.R("save-button").disabled=a==this.T};
g.Cz(D1,"playlist-settings-editor");g.n(I1,g.X);I1.prototype.Z=function(){g.Bz(this,"click","remove-duplicate-button",this.G)};
I1.prototype.G=function(){g.Lq(this.R("remove-duplicate-form"),{onSuccess:this.D,context:this})};
I1.prototype.D=function(){window.location.reload()};
g.Cz(I1,"pl-suggestions");var P1,Q1={about:[function(){K0.init();M0.init();N0.init();P0.init()},
function(){K0.dispose();M0.dispose();N0.dispose();P0.dispose()}],
feed:[s1,t1],playlists:[function(){var a=g.z("playlists-tab-create-playlist-widget");a&&(K1=new l0({mh:lra}),K1.Ra(a))},
function(){K1&&K1.dispose()}],
playlist:[function(){O1=g.dg("playlist-update-header",sra);u1.init();J1(u1.init,u1.dispose);D1.init();J1(D1.init,D1.dispose);J1(g.oS.init,g.oS.dispose);y1.init();J1(y1.init,y1.dispose);v1.init();x1.init();C1.init();I1.init()},
function(){g.fg(O1);g.H("playlist-dispose-header-reresher");u1.dispose();D1.dispose();y1.dispose();v1.dispose();x1.dispose();C1.dispose();I1.dispose()}],
published_activity:[s1,t1]};
g.aj(g.ur({name:"www/channels_edit",deps:["www/channels"],page:["channel","playlist"],init:function(){if(g.E("CHANNEL_EDITABLE")){o0.init();g.OO.init();t0.init();z0.init();H0.init();p0.init();g.hG(document.body);var a=g.M("c4-checklist-module");a&&(N1.push(g.S(a,"mouseover",g.w(pra),"checklist-item")),N1.push(g.S(a,"click",g.w(qra),"checklist-item")),N1.push(g.S(a,"click",g.w(rra),"yt-close-img")));J0.init();k1.init();if(a=g.z("browse-items-primary"))M1=new c1,M1.Ra(a);L0.init();O0.init();X0.init();
a1.init();m1.init();if(g.E("CHANNEL_EDITOR_EDIT_AVATAR")){a=g.M("settings-dialog-container");var b=g.M("change-profile-photo-dialog-container");a?g.NB.getInstance().show(a):b&&g.NB.getInstance().show(b)}a=g.E("CHANNEL_TAB",void 0);if(a in Q1)Q1[a][0]();P1=a}else P1=null},
dispose:function(){var a=P1;if(a){if(a in Q1)Q1[a][1]();o0.dispose();g.OO.dispose();t0.dispose();z0.dispose();H0.dispose();p0.dispose();g.nh(N1);J0.dispose();k1.dispose();M1&&M1.dispose();L0.dispose();O0.dispose();X0.dispose();a1.dispose();m1.dispose()}}}));})(_yt_www);

(function(g){var window=this;var RR=function(){this.C=g.Ao("li","profile-picture-video-still");dma(this)},dma=function(a){(0,g.B)(g.L("dialog-close-button"),function(b){g.J(b,"click",(0,g.v)(this.F,this))},a);
(0,g.B)(a.C,function(b){g.J(b,"click",(0,g.v)(this.D,this))},a)},ema=function(a){(0,g.B)(a.C,function(b){g.R(b,"selected")},a)};
RR.prototype.D=function(a){ema(this);a=a.currentTarget;g.Q(a,"selected");g.Ao("input",null,a)[0].checked=!0;g.z("profile-picture-option-still").checked=!0};
RR.prototype.F=function(){g.u("yt.www.account.upload",window.parent).closeOverlay()};g.r("yt.www.account.upload.closeOverlay",function(){g.NB.getInstance().hide()},void 0);
g.r("yt.www.account.upload.reload",function(){window.location.reload()},void 0);
g.r("yt.www.account.upload.init",function(){if(g.z("account-upload-dialog")&&(new RR,window!=window.parent&&/success=True/.test(window.location.search))){var a=g.u("yt.www.account.upload",window.parent);a.closeOverlay();a.reload()}},void 0);
g.aj(g.ur({name:"www/channels_accountupload",deps:["www/common"],page:["channel"],init:function(){},
dispose:function(){}}));})(_yt_www);

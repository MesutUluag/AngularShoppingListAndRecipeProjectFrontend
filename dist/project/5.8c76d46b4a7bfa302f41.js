(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,n,e){"use strict";e.r(n),e.d(n,"AuthModule",function(){return m});var i=e("fXoL");let o=(()=>{class t{constructor(){this.close=new i.n}onClose(){this.close.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(i.Lb(0,"div",0),i.Sb("click",function(){return n.onClose()}),i.Kb(),i.Lb(1,"div",1),i.Lb(2,"p"),i.hc(3),i.Kb(),i.Lb(4,"div",2),i.Lb(5,"button",3),i.Sb("click",function(){return n.onClose()}),i.hc(6,"Close"),i.Kb(),i.Kb(),i.Kb()),2&t&&(i.yb(3),i.ic(n.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})(),s=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(n){return new(n||t)(i.Ib(i.P))},t.\u0275dir=i.Db({type:t,selectors:[["","appPlaceHolder",""]]}),t})();var r=e("/WaZ"),a=e("l7P3"),c=e("ofXK");let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-loading-spinner"]],decls:3,vars:0,consts:[[1,"loadingio-spinner-eclipse-p2uqaqn8gdj"],[1,"ldio-yfqhaq4y79a"]],template:function(t,n){1&t&&(i.Lb(0,"div",0),i.Lb(1,"div",1),i.Jb(2,"div"),i.Kb(),i.Kb())},styles:["@keyframes ldio-yfqhaq4y79a{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.ldio-yfqhaq4y79a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;animation:ldio-yfqhaq4y79a 1s linear infinite;width:160px;height:160px;top:20px;left:20px;border-radius:50%;box-shadow:0 4px 0 0 #e15b64;transform-origin:80px 82px}.loadingio-spinner-eclipse-p2uqaqn8gdj[_ngcontent-%COMP%]{width:200px;height:200px;display:inline-block;overflow:hidden;background:#fff}.ldio-yfqhaq4y79a[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;transform:translateZ(0) scale(1);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:0 0}.ldio-yfqhaq4y79a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:initial}"]}),t})();var l=e("3Pt+");function d(t,n){}function p(t,n){1&t&&(i.Lb(0,"div",5),i.Jb(1,"app-loading-spinner"),i.Kb())}function u(t,n){if(1&t){const t=i.Mb();i.Lb(0,"form",6,7),i.Sb("ngSubmit",function(){i.dc(t);const n=i.bc(1);return i.Ub().onSubmit(n)}),i.Lb(2,"div",8),i.Lb(3,"label",9),i.hc(4,"E-Mail"),i.Kb(),i.Jb(5,"input",10),i.Kb(),i.Lb(6,"div",8),i.Lb(7,"label",11),i.hc(8,"Password"),i.Kb(),i.Jb(9,"input",12),i.Kb(),i.Lb(10,"div"),i.Lb(11,"button",13),i.hc(12),i.Kb(),i.Lb(13,"button",14),i.Sb("click",function(){return i.dc(t),i.Ub().onSwitchMode()}),i.hc(14),i.Kb(),i.Kb(),i.Kb()}if(2&t){const t=i.bc(1),n=i.Ub();i.yb(11),i.Xb("disabled",!t.valid),i.yb(1),i.ic(n.isLoginMode?"Login":"Sign Up"),i.yb(2),i.ic(n.isLoginMode?"SignUp":"Login")}}let h=(()=>{class t{constructor(t,n){this.componentFactoryResolver=t,this.store=n,this.isLoginMode=!0,this.isLoading=!1,this.error=null}ngOnInit(){this.storeSub=this.store.select("auth").subscribe(t=>{this.isLoading=t.loading,this.error=t.authError,this.error&&this.showErrorAlert(this.error)})}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(t){if(!t.valid)return;const n=t.value.email,e=t.value.password;this.store.dispatch(this.isLoginMode?new r.k({email:n,password:e}):new r.n({email:n,password:e})),t.reset()}onHandleError(){this.store.dispatch(new r.h)}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe(),this.storeSub&&this.storeSub.unsubscribe()}showErrorAlert(t){const n=this.componentFactoryResolver.resolveComponentFactory(o),e=this.alertHost.viewContainerRef;e.clear();const i=e.createComponent(n);i.instance.message=t,this.closeSub=i.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),e.clear()})}}return t.\u0275fac=function(n){return new(n||t)(i.Ib(i.j),i.Ib(a.h))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-auth"]],viewQuery:function(t,n){if(1&t&&i.lc(s,!0),2&t){let t;i.ac(t=i.Tb())&&(n.alertHost=t.first)}},decls:5,vars:2,consts:[["appPlaceHolder",""],[1,"row"],[1,"col-xs-12","cold-md-6","col-md-offset-3"],["style","text-align: center",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(i.gc(0,d,0,0,"ng-template",0),i.Lb(1,"div",1),i.Lb(2,"div",2),i.gc(3,p,2,0,"div",3),i.gc(4,u,15,3,"form",4),i.Kb(),i.Kb()),2&t&&(i.yb(3),i.Xb("ngIf",n.isLoading),i.yb(1),i.Xb("ngIf",!n.isLoading))},directives:[s,c.j,b,l.u,l.m,l.n,l.a,l.l,l.o,l.s,l.b,l.k],encapsulation:2}),t})();var f=e("tyNb"),g=e("PCNd");let m=(()=>{class t{}return t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({factory:function(n){return new(n||t)},imports:[[c.c,l.j,f.e.forChild([{path:"",component:h}]),g.a]]}),t})()}}]);
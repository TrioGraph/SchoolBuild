"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6260],{6260:(P,g,i)=>{i.r(g),i.d(g,{HomePageModule:()=>f});var a=i(6814),t=i(5548),l=i(95),r=i(2413),o=i(6689),u=i(5466);function d(n,c){if(1&n&&(o.TgZ(0,"ion-row")(1,"ion-col")(2,"ion-text"),o._uU(3),o.qZA()(),o.TgZ(4,"ion-col")(5,"ion-text"),o._uU(6),o.qZA()()()),2&n){const e=c.$implicit;o.xp6(3),o.hij(" ",e.product_name," "),o.xp6(3),o.hij(" ",e.product_price," ")}}const m=[{path:"",component:(()=>{class n{constructor(e){this.songService=e,this.Songs=[]}ngOnInit(){}ionViewDidEnter(){this.songService.getSongList().subscribe(e=>{console.log(e),this.Songs=e})}deleteSong(e,s){window.confirm("Do you want to delete user?")&&this.songService.deleteSong(e._id).subscribe(()=>{this.Songs.splice(s,1),console.log("Song deleted!")})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u.o))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-home"]],decls:13,vars:1,consts:[["vertical","bottom","horizontal","end","slot","fixed","routerLink","/add-song"],["name","add"],[1,"ion-text-center"],[1,"header-row"],[4,"ngFor","ngForOf"]],template:function(e,s){1&e&&(o.TgZ(0,"ion-content")(1,"ion-fab",0)(2,"ion-fab-button"),o._UZ(3,"ion-icon",1),o.qZA()(),o.TgZ(4,"ion-grid",2)(5,"ion-row",3)(6,"ion-col")(7,"ion-text"),o._uU(8,"Name"),o.qZA()(),o.TgZ(9,"ion-col")(10,"ion-text"),o._uU(11,"Price"),o.qZA()()(),o.YNc(12,d,7,2,"ion-row",4),o.qZA()()),2&e&&(o.xp6(12),o.Q6J("ngForOf",s.Songs))},dependencies:[a.sg,t.wI,t.W2,t.IJ,t.W4,t.jY,t.gu,t.Nd,t.yW,t.YI,r.rH],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.header-row[_ngcontent-%COMP%]{background:#7163AA;color:#fff;font-size:18px}ion-col[_ngcontent-%COMP%]{border:1px solid #ECEEEF}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[r.Bz.forChild(m),r.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[a.ez,l.u5,t.Pc,p]}),n})()}}]);
(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},3045:function(e,t,r){e.exports=r.p+"img/kitty_write.93318a13.svg"},"5f47":function(e,t,r){e.exports=r.p+"img/idea-highlighted.83030144.svg"},8665:function(e,t,r){e.exports=r.p+"img/idea.f866aedf.svg"},b64b7:function(e,t,r){e.exports=r.p+"img/kitty_sad.7a6943d5.svg"},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("Header"),r("AddToList"),r("List"),r("Overlay"),r("Error")],1),r("v-footer",[r("v-layout",{attrs:{"text-center":""}},[r("v-flex",{attrs:{"mb-5":""}},[r("div",{staticClass:"font-weight-light body-2"},[e._v("Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[e._v("Freepik")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])])])],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:r("3045"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold text-lowercase mb-3"},[e._v(" Neko chan ")]),n("p",{staticClass:"subheading font-weight-light font-italic"},[e._v(" I love cats and daily lists! ")])])],1)],1)},s=[],c=n["a"].extend({name:"AppHeader"}),u=c,l=r("2877"),d=r("6544"),p=r.n(d),f=r("a523"),v=r("0e8f"),h=r("adda"),m=r("a722"),b=Object(l["a"])(u,i,s,!1,null,null,null),g=b.exports;p()(b,{VContainer:f["a"],VFlex:v["a"],VImg:h["a"],VLayout:m["a"]});var y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[r("v-flex",{attrs:{xs12:"",sm5:"",md4:"","mx-2":""}},[r("v-text-field",{attrs:{label:"Todo item",placeholder:"Description...",maxlength:"100"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}})],1),r("v-flex",{attrs:{xs12:"",sm2:"",md2:"","text-center":""}},[r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{dark:"",color:"#BD4568"},on:{click:e.addItem}},n),[e._v("+ Add item")])]}}])},[r("span",[e._v("You can add 50 items!")])])],1)],1)],1)},O=[],w=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),x=r("2f62");function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){Object(w["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=n["a"].extend({data:function(){return{item:""}},computed:k({},Object(x["c"])("todo",{loading:function(e){return e.loading},error:function(e){return e.error}})),watch:{loading:function(e,t){this.error||!1===e&&!0===t&&(this.item="")}},methods:k({},Object(x["b"])("todo",["add"]),{addItem:function(){this.item&&this.add({description:this.item})}})}),P=_,V=r("8336"),D=r("8654"),L=r("3a2f"),E=Object(l["a"])(P,y,O,!1,null,null,null),T=E.exports;p()(E,{VBtn:V["a"],VContainer:f["a"],VFlex:v["a"],VLayout:m["a"],VTextField:D["a"],VTooltip:L["a"]});var S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600","min-width":"320",tile:""}},[r("v-toolbar",{attrs:{color:"#BD4568",dark:""}},[r("v-toolbar-title",[e._v("Today's list")]),r("v-spacer"),e.hasItemsToDelete?r("v-btn",{attrs:{icon:""},on:{click:e.deleteItems}},[r("v-icon",[e._v("mdi-delete")])],1):e._e()],1),r("v-list",{attrs:{"three-line":""}},[e._l(e.todos,(function(t){return[r("Item",{key:t.id,attrs:{item:t},on:{"toggle-selected":e.UpdateToDeleteList}})]}))],2),e.noTodos?r("v-card-text",{staticClass:"text-center"},[e._v(" You have no todos at the moment. ")]):e._e()],1)],1)],1)},C=[],I=(r("c975"),r("a434"),r("9f12")),R=r("53fe"),A=r("8b83"),F=r("c65a"),$=r("c03e"),B=r("9ab4"),M=r("60a3"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",[n("v-list-item-action",{staticClass:"mr-3"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",{attrs:{elevation:"0",color:"transparent",icon:""},on:{click:e.itemCompleted}},[e.item.done?e._e():n("v-img",e._g({attrs:{src:r("8665"),"max-width":"30"}},a)),e.item.done?n("v-img",e._g({attrs:{src:r("5f47"),"max-width":"30"}},a)):e._e()],1)]}}])},[e.item.done?e._e():n("span",[e._v("Mark as done")]),e.item.done?n("span",[e._v("Unmark")]):e._e()])],1),n("v-list-item-content",[n("v-list-item-subtitle",{class:{"font-italic":e.item.done}},[e._v(e._s(e.item.description))])],1),n("v-list-item-action",[n("v-checkbox",{attrs:{color:"#BD4568",value:e.item.id},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}})],1)],1)},H=[],J=function(e){function t(){var e;return Object(I["a"])(this,t),e=Object(A["a"])(this,Object(F["a"])(t).apply(this,arguments)),e.active=[],e}return Object($["a"])(t,e),Object(R["a"])(t,[{key:"onActiveChanged",value:function(){this.$emit("toggle-selected",{isSelected:this.hasActive,id:this.item.id})}},{key:"itemCompleted",value:function(){this.$store.dispatch("todo/update",{id:this.item.id,done:!this.item.done})}},{key:"hasActive",get:function(){return this.active.length>0}}]),t}(M["c"]);B["a"]([Object(M["b"])()],J.prototype,"item",void 0),B["a"]([Object(M["d"])("active")],J.prototype,"onActiveChanged",null),J=B["a"]([M["a"]],J);var N=J,Y=N,z=r("ac7c"),q=r("da13"),G=r("1800"),K=r("5d23"),Q=Object(l["a"])(Y,U,H,!1,null,null,null),W=Q.exports;p()(Q,{VBtn:V["a"],VCheckbox:z["a"],VImg:h["a"],VListItem:q["a"],VListItemAction:G["a"],VListItemContent:K["a"],VListItemSubtitle:K["b"],VTooltip:L["a"]});var X=function(e){function t(){var e;return Object(I["a"])(this,t),e=Object(A["a"])(this,Object(F["a"])(t).apply(this,arguments)),e.todos=[],e.toDeleteList=[],e}return Object($["a"])(t,e),Object(R["a"])(t,[{key:"onListChange",value:function(e){this.todos=e}},{key:"mounted",value:function(){this.$store.dispatch("todo/fetch")}},{key:"UpdateToDeleteList",value:function(e){if(e.isSelected)this.toDeleteList.push(e.id);else{var t=this.toDeleteList.indexOf(e.id);this.toDeleteList.splice(t,1)}}},{key:"deleteItems",value:function(){this.$store.dispatch("todo/remove",this.toDeleteList)}},{key:"noTodos",get:function(){return 0===this.todos.length}},{key:"hasItemsToDelete",get:function(){return this.toDeleteList.length>0}}]),t}(M["c"]);B["a"]([Object(M["d"])("$store.state.todo.list")],X.prototype,"onListChange",null),X=B["a"]([Object(M["a"])({components:{Item:W}})],X);var Z=X,ee=Z,te=r("b0af"),re=r("99d9"),ne=r("132d"),ae=r("8860"),oe=r("2fa4"),ie=r("71d9"),se=r("2a7f"),ce=Object(l["a"])(ee,S,C,!1,null,null,null),ue=ce.exports;p()(ce,{VBtn:V["a"],VCard:te["a"],VCardText:re["b"],VContainer:f["a"],VIcon:ne["a"],VLayout:m["a"],VList:ae["a"],VSpacer:oe["a"],VToolbar:ie["a"],VToolbarTitle:se["a"]});var le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-overlay",{attrs:{value:e.loading}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)},de=[];function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(r,!0).forEach((function(t){Object(w["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=n["a"].extend({computed:fe({},Object(x["c"])("todo",{loading:function(e){return e.loading}}))}),he=ve,me=r("a797"),be=r("490a"),ge=Object(l["a"])(he,le,de,!1,null,null,null),ye=ge.exports;p()(ge,{VOverlay:me["a"],VProgressCircular:be["a"]});var Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"300px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("v-card",[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{contain:"",src:r("b64b7")}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[e._v("Error")])],1)],1),n("v-card-text",[e._v(" "+e._s(e.errorMessage)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.resetError}},[e._v(" Close ")])],1)],1)],1)},we=[];function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(r,!0).forEach((function(t){Object(w["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ke=n["a"].extend({data:function(){return{show:!1}},computed:je({},Object(x["c"])("todo",{error:function(e){return e.error}}),{isAddErrorType:function(){return"add"===this.error},isUpdateErrorType:function(){return"update"===this.error},isFetchErrorType:function(){return"fetch"===this.error},isRemoveErrorType:function(){return"remove"===this.error},isRefreshErrorType:function(){return"refresh"===this.error},errorMessage:function(){return this.isAddErrorType?"An error occurred adding a new item to the list or you have reached the maximum number of items allowed. Please try again.":this.isRemoveErrorType?"Failed to remove an item from the list. Please try again":this.isUpdateErrorType?"Cannot update the item due to internal error. Please try again":this.isFetchErrorType?"Failed to fetch items.":this.isRefreshErrorType?"Failed to refresh the old list":""}}),watch:{error:function(e){this.show=!!e}},methods:je({},Object(x["b"])("todo",["resetError"]))}),_e=ke,Pe=r("169a"),Ve=r("8270"),De=Object(l["a"])(_e,Oe,we,!1,null,null,null),Le=De.exports;p()(De,{VBtn:V["a"],VCard:te["a"],VCardActions:re["a"],VCardText:re["b"],VDialog:Pe["a"],VImg:h["a"],VListItem:q["a"],VListItemAvatar:Ve["a"],VListItemContent:K["a"],VListItemTitle:K["c"]});var Ee=n["a"].extend({name:"App",components:{Header:g,AddToList:T,List:ue,Overlay:ye,Error:Le}}),Te=Ee,Se=r("7496"),Ce=r("a75b"),Ie=r("553a"),Re=Object(l["a"])(Te,a,o,!1,null,null,null),Ae=Re.exports;p()(Re,{VApp:Se["a"],VContent:Ce["a"],VFlex:v["a"],VFooter:Ie["a"],VLayout:m["a"]});r("7db0"),r("0d03"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf");var Fe=r("2ef0"),$e=r.n(Fe),Be=(r("c740"),r("11c1")),Me=r.n(Be),Ue=function(){var e=function(e,t){try{return window.localStorage.setItem(e,btoa(JSON.stringify(t))),!0}catch(r){return!1}},t=function(e){try{var t=window.localStorage.getItem(e);return t?JSON.parse(atob(t)):t}catch(r){return null}},r=function(e){try{return window.localStorage.removeItem(e),!0}catch(t){return!1}};return{set:e,get:t,remove:r}}(),He=Ue;function Je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Je(r,!0).forEach((function(t){Object(w["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Je(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ye=function(){function e(){Object(I["a"])(this,e)}return Object(R["a"])(e,null,[{key:"get",value:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(Promise.resolve().then((function(){return He.get("neko-todo")})));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return","error");case 10:case"end":return t.stop()}}),null,null,[[0,7]])}},{key:"add",value:function(e){var t,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=Ne({},e),t.id=Me()(),n.prev=2,n.next=5,regeneratorRuntime.awrap(Promise.resolve().then((function(){var e=He.get("neko-todo");return(!e||50!==e.todos.length)&&(e?e.todos.push(t):e={date:(new Date).setHours(24),todos:[t]},He.set("neko-todo",e))})));case 5:return r=n.sent,n.abrupt("return",r);case 9:return n.prev=9,n.t0=n["catch"](2),n.abrupt("return",!1);case 12:case"end":return n.stop()}}),null,null,[[2,9]])}},{key:"update",value:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(Promise.resolve().then((function(){var r=He.get("neko-todo"),n=$e.a.findIndex(r.todos,{id:e});return r.todos[n].done=t,He.set("neko-todo",r)})));case 3:return r=n.sent,n.abrupt("return",r);case 7:return n.prev=7,n.t0=n["catch"](0),n.abrupt("return",!1);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},{key:"remove",value:function(e){var t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(Promise.resolve().then((function(){var t=He.get("neko-todo");return $e.a.remove(t.todos,{id:e}),He.set("neko-todo",t)})));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r["catch"](0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),null,null,[[0,7]])}},{key:"removeAll",value:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(Promise.resolve().then((function(){return He.remove("neko-todo")})));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),null,null,[[0,7]])}}]),e}(),ze=function e(){Object(I["a"])(this,e),this.expiryDate=0,this.list=[],this.loading=!1,this.error=""},qe=new ze,Ge={getById:function(e,t){return $e.a.find(e.list,{id:t})}},Ke={setExpiryDate:function(e,t){e.expiryDate=t},setToDoList:function(e,t){e.list=t},setLoading:function(e,t){e.loading=t},setErrorState:function(e,t){e.error=t}},Qe={resetError:function(e,t){var r=e.commit;r("setErrorState","")},add:function(e,t){var r,n,a;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return r=e.dispatch,n=e.commit,n("setLoading",!0),o.next=4,regeneratorRuntime.awrap(Ye.add(t));case 4:if(a=o.sent,!a){o.next=9;break}return o.next=8,regeneratorRuntime.awrap(r("fetch"));case 8:return o.abrupt("return");case 9:n("setLoading",!1),n("setErrorState",a?"":"add");case 11:case"end":return o.stop()}}))},update:function(e,t){var r,n,a,o,i;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return r=e.dispatch,n=e.commit,a=t.id,o=t.done,n("setLoading",!0),s.next=5,regeneratorRuntime.awrap(Ye.update(a,o));case 5:if(i=s.sent,!i){s.next=10;break}return s.next=9,regeneratorRuntime.awrap(r("fetch"));case 9:return s.abrupt("return");case 10:n("setLoading",!1),n("setErrorState",i?"":"update");case 12:case"end":return s.stop()}}))},remove:function(e,t){var r,n,a,o;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.dispatch,n=e.commit,n("setLoading",!0),a=[],t.forEach((function(e){a.push(Ye.remove(e))})),i.next=6,regeneratorRuntime.awrap(Promise.all(a));case 6:if(o=i.sent,!(o.indexOf(!0)>-1)){i.next=11;break}return i.next=10,regeneratorRuntime.awrap(r("fetch"));case 10:return i.abrupt("return");case 11:n("setLoading",!1),n("setErrorState",o.indexOf(!1)>-1?"remove":"");case 13:case"end":return i.stop()}}))},fetch:function(e){var t,r,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t=e.dispatch,r=e.commit,r("setLoading",!0),a.next=4,regeneratorRuntime.awrap(Ye.get());case 4:if(n=a.sent,!n||"error"===n){a.next=10;break}return r("setExpiryDate",n.date),r("setToDoList",n.todos),t("refresh"),a.abrupt("return");case 10:"error"===n&&r("setErrorState","fetch"),r("setLoading",!1);case 12:case"end":return a.stop()}}))},refresh:function(e){var t,r,n,a,o;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:if(t=e.commit,r=e.state,n=new Date(r.expiryDate),a=new Date>=n,a){i.next=6;break}return t("setLoading",!1),i.abrupt("return");case 6:return t("setLoading",!0),i.next=9,regeneratorRuntime.awrap(Ye.removeAll());case 9:o=i.sent,o&&t("setToDoList",[]),t("setLoading",!1),t("setErrorState",o?"":"refresh");case 13:case"end":return i.stop()}}))}},We={namespaced:!0,state:qe,getters:Ge,mutations:Ke,actions:Qe};n["a"].use(x["a"]);var Xe=!1,Ze=new x["a"].Store({modules:{todo:We},strict:Xe}),et=r("f309");n["a"].use(et["a"]);var tt=new et["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:Ze,vuetify:tt,render:function(e){return e(Ae)}}).$mount("#app")}});
//# sourceMappingURL=app.8de9198c.js.map
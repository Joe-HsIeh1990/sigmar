(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1a1ab0e"],{"1f7e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid my-5",attrs:{id:"costomshop"}},[a("div",{staticClass:"row m-4 justify-content-center"},[a("div",{staticClass:"row col-md-3 justify-content-start align-items-center select-items"},[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center my-3 text-light bod"},[a("div",{attrs:{id:"TheOrderSide"},on:{click:function(t){return t.preventDefault(),e.DwrapDown(t)}}},[e._m(0)]),a("form",{attrs:{action:"",method:"",id:"OrderSide"}},[a("ul",{staticClass:"d-flex flex-column justify-content-center align-items-center p-0"},e._l(e.orderside,(function(t){return a("li",{key:t.zoe,staticClass:"my-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],staticClass:"changeOrder",attrs:{type:"checkbox"},domProps:{value:t.title,checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,t.title)>-1:e.checkedNames},on:{change:function(a){var s=e.checkedNames,i=a.target,c=!!i.checked;if(Array.isArray(s)){var r=t.title,n=e._i(s,r);i.checked?n<0&&(e.checkedNames=s.concat([r])):n>-1&&(e.checkedNames=s.slice(0,n).concat(s.slice(n+1)))}else e.checkedNames=c}}}),a("label",{attrs:{for:t.zoe}},[e._v(e._s(t.name))])])})),0)]),a("div",{attrs:{id:"TheDeathSide"},on:{click:function(t){return t.preventDefault(),e.DwrapDown(t)}}},[e._m(1)]),a("form",{attrs:{action:"",method:"",id:"DeathSide"}},[a("ul",{staticClass:"d-flex flex-column justify-content-center align-items-center p-0"},e._l(e.deathside,(function(t){return a("li",{key:t.zoe,staticClass:"my-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox"},domProps:{value:t.title,checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,t.title)>-1:e.checkedNames},on:{change:function(a){var s=e.checkedNames,i=a.target,c=!!i.checked;if(Array.isArray(s)){var r=t.title,n=e._i(s,r);i.checked?n<0&&(e.checkedNames=s.concat([r])):n>-1&&(e.checkedNames=s.slice(0,n).concat(s.slice(n+1)))}else e.checkedNames=c}}}),a("label",{attrs:{for:t.zoe}},[e._v(e._s(t.name))])])})),0)]),a("div",{attrs:{id:"TheChaosSide"},on:{click:function(t){return t.preventDefault(),e.DwrapDown(t)}}},[e._m(2)]),a("form",{attrs:{action:"",method:"",id:"ChaosSide"}},[a("ul",{staticClass:"d-flex flex-column justify-content-center align-items-center p-0"},e._l(e.chaoseside,(function(t){return a("li",{key:t.zoe,staticClass:"my-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox"},domProps:{value:t.title,checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,t.title)>-1:e.checkedNames},on:{change:function(a){var s=e.checkedNames,i=a.target,c=!!i.checked;if(Array.isArray(s)){var r=t.title,n=e._i(s,r);i.checked?n<0&&(e.checkedNames=s.concat([r])):n>-1&&(e.checkedNames=s.slice(0,n).concat(s.slice(n+1)))}else e.checkedNames=c}}}),a("label",{attrs:{for:t.zoe}},[e._v(e._s(t.name))])])})),0)])])]),a("div",{staticClass:"row col-md-9 justify-content-start align-items-center shop-item"},[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center  my-3 text-light bod-item"},[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center my-5 items-here"},[e._m(3),a("div",{staticClass:"line-of-item"}),a("div",{staticClass:"d-flex flex-wrap my-4 justify-content-center"},e._l(e.filterData[e.currentPage],(function(t){return a("div",{key:t.id,staticClass:"card my-2 mx-1 cart-shadow",attrs:{"data-rou":t.category}},[a("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.imageUrl,alt:"..."}}),a("div",{staticClass:"card-body border-top border-dark bg-dark"},[a("div",[a("p",{staticClass:"card-text"},[e._v(e._s(t.title))])]),a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"mt-3"},[a("span",{staticStyle:{"text-decoration-line":"line-through"}},[e._v("原價 $NT "+e._s(e._f("currency")(t.origin_price))+"元")]),a("br"),a("span",[e._v("現在只要$NT "+e._s(e._f("currency")(t.price))+"元")])]),a("div",{staticClass:"align-self-end mt-3"},[a("button",{staticClass:"text-end",on:{click:function(a){return a.preventDefault(),e.GetProductOnce(t.id)}}},[e._v("詳細內容")])])])])])})),0),e.pagerwd?a("nav",{staticClass:"my-5",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},e._l(e.filterData.length,(function(t){return a("li",{key:t,staticClass:"page-item",class:{active:e.currentPage===t-1}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.currentPage=t-1}}},[e._v(e._s(t))])])})),0)]):e._e(),e.pagemoble?a("div",{staticClass:"drop my-2"},[a("button",{staticClass:"btn btn-dark dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("頁面")]),a("div",{staticClass:"dropdown-menu py-0",attrs:{"aria-labelledby":"dropdownMenuLink"}},e._l(e.filterData.length,(function(t){return a("a",{key:t,staticClass:"dropdown-item dropdown-active",class:{active:e.currentPage===t-1},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.currentPage=t-1}}},[e._v(e._s(t))])})),0)]):e._e()])])])]),a("div",{staticClass:"modal fade",attrs:{id:"ProductModel",showmodal:e.modalshowit,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg madal-md-sm",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(4),a("div",{staticClass:"modal-body d-flex flex-md-row flex-column justify-content-center justify-content-md-between text-dark"},[a("div",{staticClass:"col-md-7 col-12",staticStyle:{height:"100%"}},[a("img",{staticClass:"img-fluid",attrs:{src:e.productone.imageUrl,alt:""}})]),a("div",{staticClass:"col-md-5 col-10 h4 mt-3 d-flex flex-column align-self-center justify-content-md-start"},[a("div",[e._v("品名:")]),a("div",{staticClass:"mb-2"},[e._v(e._s(e.productone.title))]),a("div",[e._v("類型:")]),a("div",{staticClass:"mb-2"},[e._v(e._s(e.productone.description))]),a("div",[e._v("種族:")]),a("div",{staticClass:"mb-2"},[e._v(e._s(e.productone.category))]),a("div",[e._v("售價:")]),a("div",{staticClass:"mb-3"},[e._v(e._s(e._f("currency")(e.productone.price))+"元")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.productone.is_enabled,expression:"productone.is_enabled"}],attrs:{name:"numberitem",id:"selectnum"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.productone,"is_enabled",t.target.multiple?a:a[0])}}},e._l(10,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v("選購: "+e._s(t)+" "+e._s(e.productone.unit))])})),0),a("div",{staticClass:"mt-3"},[e._v("小計總額:")]),a("div",[e._v(e._s(e._f("currency")(e.productone.is_enabled*e.productone.price))+"元")])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger btn-lg",attrs:{type:"button","data-dismiss":"modal"}},[e._v("取消")]),a("button",{staticClass:"btn btn-dark btn-lg",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.addtoCart(e.productone.id,e.productone.is_enabled)}}},[e._v("確認加入購物車")])])])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("a",{staticClass:"text-decoration-none text-light",attrs:{href:"#","data-rol":"order"}},[e._v("+ 秩序陣營")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("a",{staticClass:"text-decoration-none text-light",attrs:{href:"#","data-rol":"death"}},[e._v("+ 死亡陣營")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("a",{staticClass:"text-decoration-none text-light",attrs:{href:"#","data-rol":"chaos"}},[e._v("+ 混沌陣營")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-4"},[a("h2",{staticClass:"text-dark text-center font-weight-bold"},[e._v("商品列表")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header bg-dark"},[a("h5",{staticClass:"modal-title text-white",attrs:{id:"exampleModalCenterTitle"}},[e._v("商品內容")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])])}],c=(a("4160"),a("c975"),a("45fc"),a("159b"),a("5530")),r=a("2f62"),n=a("1157"),o=a.n(n),d={data:function(){return{orderside:[{name:"凱恩之女",zoe:"DaughterOfKhaine",title:"a",checked:!1},{name:"火焰屠夫",zoe:"FyreSlayers",title:"b",checked:!1},{name:"雷鑄神兵",zoe:"StormCast",title:"c",checked:!1},{name:"天空矮人",zoe:"KharadRonOverLords",title:"d",checked:!1}],deathside:[{name:"食屍鬼貴族",zoe:"Flesh-Eater",title:"e",checked:!1}],chaoseside:[{name:"納垢蛆魔",zoe:"MaggotkinOfNurgle",title:"h",checked:!1},{name:"恐虐之刃",zoe:"BladesOfKhorne",title:"i",checked:!1},{name:"混沌野獸人",zoe:"BeastsOfChaos",title:"j",checked:!1}],currentPage:0,checkedNames:[],pagerwd:!0,pagemoble:!1}},methods:{addtoCart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addtoCart",{id:e,qty:t}),o()("#ProductModel").modal("hide")},GetProductsAJAX:function(){this.$store.dispatch("GetProducts")},GetProductOnce:function(e){this.$store.dispatch("GetProductOne",e)},DwrapDown:function(e){var t=e.target.dataset.rol,a=document.getElementById("OrderSide"),s=document.getElementById("DeathSide"),i=document.getElementById("ChaosSide");switch(t){case t="order":o()(a).slideToggle();break;case t="death":o()(s).slideToggle();break;case t="chaos":o()(i).slideToggle()}}},computed:Object(c["a"])({modalshowit:function(){var e=this,t=e.$store.state.productshow;!0===t&&(o()("#ProductModel").modal("show"),e.$store.dispatch("productshowit",!1))}},Object(r["b"])(["products","isLoading","productone","status"]),{filterData:function(){var e=[{king:this.orderside},{king:this.deathside},{king:this.chaoseside}],t=[],a=this,s=a.checkedNames,i=[];return 0!=s?(a.currentPage=0,e.forEach((function(e){e.king.forEach((function(e){function i(t){return-1!=e.title.indexOf(t)}s.some(i)&&a.$store.state.products.forEach((function(a){a.category===e.zoe&&t.push(a)}))}))}))):t=a.$store.state.products,t.forEach((function(e,t){t%8===0&&i.push([]);var a=parseInt(t/8);i[a].push(e)})),i},rwdpage:function(){var e=window.innerWidth,t=this;e<=768?(t.pagerwd=!1,t.pagemoble=!0):(t.pagerwd=!0,t.pagemoble=!1)}}),mounted:function(){o()("#OrderSide").hide(),o()("#DeathSide").hide(),o()("#ChaosSide").hide()},created:function(){this.GetProductsAJAX(),this.rwdpage}},l=d,u=(a("9d08"),a("2877")),m=Object(u["a"])(l,s,i,!1,null,"c52f74b0",null);t["default"]=m.exports},"45fc":function(e,t,a){"use strict";var s=a("23e7"),i=a("b727").some,c=a("a640"),r=a("ae40"),n=c("some"),o=r("some");s({target:"Array",proto:!0,forced:!n||!o},{some:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"66f0":function(e,t,a){},"9d08":function(e,t,a){"use strict";var s=a("66f0"),i=a.n(s);i.a},c975:function(e,t,a){"use strict";var s=a("23e7"),i=a("4d64").indexOf,c=a("a640"),r=a("ae40"),n=[].indexOf,o=!!n&&1/[1].indexOf(1,-0)<0,d=c("indexOf"),l=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:o||!d||!l},{indexOf:function(e){return o?n.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-a1a1ab0e.13e1c1c0.js.map
(function(e){function t(t){for(var o,a,u=t[0],i=t[1],d=t[2],s=0,h=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(h.length)h.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},c={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0e8e8aee":"a0262f69","chunk-19c97ad7":"6a668dcf","chunk-1f0555d6":"7f4e093c","chunk-2d0ab4ad":"5f4666e9","chunk-2d210f6e":"48df5804","chunk-2d222d2a":"3ed3db6e","chunk-4208cc80":"122ff4cf","chunk-57b5d8a2":"a23daa97"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0e8e8aee":1,"chunk-1f0555d6":1,"chunk-4208cc80":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0e8e8aee":"83369285","chunk-19c97ad7":"31d6cfe0","chunk-1f0555d6":"f67de905","chunk-2d0ab4ad":"31d6cfe0","chunk-2d210f6e":"31d6cfe0","chunk-2d222d2a":"31d6cfe0","chunk-4208cc80":"34a68036","chunk-57b5d8a2":"31d6cfe0"}[e]+".css",c=i.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===c))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){d=h[u],s=d.getAttribute("data-href");if(s===o||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],f.parentNode.removeChild(f),n(r)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var h=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",h.name="ChunkLoadError",h.type=o,h.request=a,n[1](h)}c[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var h=0;h<d.length;h++)t(d[h]);var f=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("4160"),n("b64b"),n("159b");var o=n("5530"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),c=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i={name:"App",computed:{isLoading:function(){vm.$store.state.isLoading}}},d=i,s=(n("5c0b"),n("2877")),h=Object(s["a"])(d,r,u,!1,null,null,null),f=h.exports,p=(n("d3b7"),n("8c4f"));a["a"].use(p["a"]);var l=[{path:"/",redirect:"/aboutus",name:"Dashboard",component:function(){return n.e("chunk-1f0555d6").then(n.bind(null,"0c7c"))},children:[{path:"index",name:"Index",component:function(){return n.e("chunk-57b5d8a2").then(n.bind(null,"d504"))}},{path:"aboutus",name:"AboutUs",component:function(){return n.e("chunk-4208cc80").then(n.bind(null,"2664"))}},{path:"costomshop",name:"CostomShop",component:function(){return n.e("chunk-0e8e8aee").then(n.bind(null,"1f7e"))}}]},{path:"/administrator",redirect:"/administrator/adminshop",name:"Administrator",meta:{requiresAuth:!0},component:function(){return n.e("chunk-2d222d2a").then(n.bind(null,"cff7"))},children:[{path:"adminshop",name:"AdminShop",component:function(){return n.e("chunk-2d0ab4ad").then(n.bind(null,"153f"))},meta:{requiresAuth:!0}},{path:"adminorder",name:"AdminOrder",component:function(){return n.e("chunk-2d210f6e").then(n.bind(null,"b9ab"))},meta:{requiresAuth:!0}}]},{path:"/checkorder/:orderId",name:"CheckOrder",component:function(){return n.e("chunk-19c97ad7").then(n.bind(null,"4480"))}}],m=new p["a"]({routes:l}),b=m,g=(n("99af"),n("bc3a")),v=n.n(g);a["a"].use(c["a"]);var O=new c["a"].Store({state:{logShow:!1,isLoading:!1,shopshow:!1,cart:{carts:[]},products:[],productone:{},status:{loadingItem:""},productshow:!1},mutations:{PROUCTSSHOW:function(e,t){e.productshow=t},LOGSHOWED:function(e,t){e.logShow=t},SHOPSHOW:function(e,t){e.shopshow=t},ISLOADING:function(e,t){e.isLoading=t},CARTS:function(e,t){e.cart=t},PRODUCTS:function(e,t){e.products=t},PRODUCTSONE:function(e,t){e.productone=t},STATUS:function(e,t){e.status.loadingItem=t}},actions:{productshowit:function(e,t){e.commit("PROUCTSSHOW",t)},updatelog:function(e,t){e.commit("LOGSHOWED",t)},isLoad:function(e,t){e.commit("ISLOADING",t)},showshop:function(e,t){e.commit("SHOPSHOW",t)},GetProducts:function(e){var t="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/products/all");e.commit("ISLOADING",!0),v.a.get(t).then((function(t){e.commit("PRODUCTS",t.data.products),e.commit("ISLOADING",!1)}))},GetProductOne:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/product/").concat(t);e.commit("ISLOADING",!0),e.commit("STATUS",t),v.a.get(n).then((function(t){t.data.success&&e.commit("PROUCTSSHOW",!0),e.commit("PRODUCTSONE",t.data.product),e.commit("STATUS",""),e.commit("ISLOADING",!1)}))},getCart:function(e){var t="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/cart");e.commit("ISLOADING",!0),v.a.get(t).then((function(t){t.data.data.carts&&e.commit("CARTS",t.data.data),e.commit("ISLOADING",!1)}))},addtoCart:function(e,t){var n=t.id,o=t.qty,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/cart");e.commit("STATUS",n);var c={product_id:n,qty:o};v.a.post(a,{data:c}).then((function(t){t.data.sucess&&e.commit("PROUCTSSHOW",!1),e.commit("STATUS",""),e.dispatch("getCart")}))},removeCart:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/cart/").concat(t);e.commit("ISLOADING",!0),v.a.delete(n).then((function(t){e.dispatch("getCart"),e.commit("ISLOADING",!1)}))}},getters:{products:function(e){return e.products},isLoading:function(e){return e.isLoading},productone:function(e){return e.productone},status:function(e){return e.status.loadingItem}},modules:{}}),S=n("a7fe"),k=n.n(S),w=n("9062"),y=n.n(w),A=(n("e40d"),n("4989"),n("a9e3"),n("b680"),n("ac1f"),n("5319"),function(e){var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,(function(e,t,n){var o=t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return o})))}),T=n("f5af"),I=n.n(T),C=(n("e829"),n("7bb1")),L=n("4c93"),j=n("60d4");a["a"].prototype.$bus=new a["a"],Object(C["e"])("zh_TW",j),a["a"].component("ValidationProvider",C["b"]),v.a.defaults.withCredentials=!0,a["a"].config.productionTip=!1,a["a"].use(k.a,v.a),a["a"].component("Loading",y.a),a["a"].use(c["a"]),a["a"].filter("currency",A),Object(C["d"])("secret",{validate:function(e){return"example"===e},message:"This is not the magic word"}),Object.keys(L).forEach((function(e){Object(C["d"])(e,Object(o["a"])({},L[e],{message:j["messages"][e]}))})),Object(C["d"])("email",L["email"]),Object(C["d"])("required",Object(o["a"])({},L["required"],{message:"請輸入{_field_}"})),Object(C["d"])("phone",{validate:function(e,t){return e.length>=t.length},params:["length"],message:"請輸入正確手機號碼10位數"}),Object(C["d"])("addres",{validate:function(e,t){return e.length>=t.length},params:["length"],message:"請輸入正確地址，如:台北市信義區"}),Object(C["c"])({classes:{valid:"valid",invalid:"invalid"}}),new a["a"]({created:function(){I.a.init({duration:3e3})},router:b,store:O,render:function(e){return e(f)}}).$mount("#app"),b.beforeEach((function(e,t,n){if(e.meta.requiresAuth){console.log("這裡需要驗證");var o="".concat("https://vue-course-api.hexschool.io/","api/user/check");v.a.post(o).then((function(e){e.data.success?n():n({path:"/aboutus"})}))}else n()}))},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.7ca7ef01.js.map
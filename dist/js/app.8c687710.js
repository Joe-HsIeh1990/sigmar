(function(t){function e(e){for(var o,c,u=e[0],i=e[1],d=e[2],s=0,h=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(h.length)h.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},a={app:0},r=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-19c97ad7":"cde8b8c4","chunk-1f0555d6":"23791318","chunk-2d0ab4ad":"5f4666e9","chunk-2d210f6e":"07921643","chunk-2d222d2a":"8d8a1707","chunk-4208cc80":"122ff4cf","chunk-57b5d8a2":"a23daa97","chunk-bcc9d5b4":"d5eeaf60"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-1f0555d6":1,"chunk-4208cc80":1,"chunk-bcc9d5b4":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-19c97ad7":"31d6cfe0","chunk-1f0555d6":"6e52a921","chunk-2d0ab4ad":"31d6cfe0","chunk-2d210f6e":"31d6cfe0","chunk-2d222d2a":"31d6cfe0","chunk-4208cc80":"34a68036","chunk-57b5d8a2":"31d6cfe0","chunk-bcc9d5b4":"4e8874f0"}[t]+".css",a=i.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===a))return e()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){d=h[u],s=d.getAttribute("data-href");if(s===o||s===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[t],f.parentNode.removeChild(f),n(r)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var h=new Error;d=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",h.name="ChunkLoadError",h.type=o,h.request=c,n[1](h)}a[t]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var h=0;h<d.length;h++)e(d[h]);var f=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("4160"),n("b64b"),n("159b");var o=n("5530"),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=n("2f62"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i={name:"App",computed:{isLoading:function(){vm.$store.state.isLoading}}},d=i,s=(n("5c0b"),n("2877")),h=Object(s["a"])(d,r,u,!1,null,null,null),f=h.exports,p=(n("d3b7"),n("8c4f"));c["a"].use(p["a"]);var l=[{path:"/",redirect:"/aboutus",name:"Dashboard",component:function(){return n.e("chunk-1f0555d6").then(n.bind(null,"0c7c"))},children:[{path:"index",name:"Index",component:function(){return n.e("chunk-57b5d8a2").then(n.bind(null,"d504"))}},{path:"aboutus",name:"AboutUs",component:function(){return n.e("chunk-4208cc80").then(n.bind(null,"2664"))}},{path:"costomshop",name:"CostomShop",component:function(){return n.e("chunk-bcc9d5b4").then(n.bind(null,"1f7e"))}}]},{path:"/administrator",redirect:"/administrator/adminshop",name:"Administrator",meta:{requiresAuth:!0},component:function(){return n.e("chunk-2d222d2a").then(n.bind(null,"cff7"))},children:[{path:"adminshop",name:"AdminShop",component:function(){return n.e("chunk-2d0ab4ad").then(n.bind(null,"153f"))},meta:{requiresAuth:!0}},{path:"adminorder",name:"AdminOrder",component:function(){return n.e("chunk-2d210f6e").then(n.bind(null,"b9ab"))},meta:{requiresAuth:!0}}]},{path:"/checkorder/:orderId",name:"CheckOrder",component:function(){return n.e("chunk-19c97ad7").then(n.bind(null,"4480"))}}],m=new p["a"]({routes:l}),b=m,g=(n("99af"),n("bc3a")),v=n.n(g);c["a"].use(a["a"]);var O=new a["a"].Store({state:{logShow:!1,isLoading:!1,shopshow:!1,cart:{carts:[]},products:[],productone:{},status:{loadingItem:""},productshow:!1},mutations:{PROUCTSSHOW:function(t,e){t.productshow=e},LOGSHOWED:function(t,e){t.logShow=e},SHOPSHOW:function(t,e){t.shopshow=e},ISLOADING:function(t,e){t.isLoading=e},CARTS:function(t,e){t.cart=e},PRODUCTS:function(t,e){t.products=e},PRODUCTSONE:function(t,e){t.productone=e},STATUS:function(t,e){t.status.loadingItem=e}},actions:{productshowit:function(t,e){t.commit("PROUCTSSHOW",e)},updatelog:function(t,e){t.commit("LOGSHOWED",e)},isLoad:function(t,e){t.commit("ISLOADING",e)},showshop:function(t,e){t.commit("SHOPSHOW",e)},GetProducts:function(t){var e="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/products/all");t.commit("ISLOADING",!0),v.a.get(e).then((function(e){t.commit("PRODUCTS",e.data.products),t.commit("ISLOADING",!1)}))},GetProductOne:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/product/").concat(e);t.commit("ISLOADING",!0),t.commit("STATUS",e),v.a.get(n).then((function(e){e.data.success&&t.commit("PROUCTSSHOW",!0),t.commit("PRODUCTSONE",e.data.product),t.commit("STATUS",""),t.commit("ISLOADING",!1)}))},getCart:function(t){var e="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/cart");t.commit("ISLOADING",!0),v.a.get(e).then((function(e){e.data.data.carts&&t.commit("CARTS",e.data.data),t.commit("ISLOADING",!1)}))},addtoCart:function(t,e){var n=e.id,o=e.qty,c="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/cart");t.commit("STATUS",n);var a={product_id:n,qty:o};v.a.post(c,{data:a}).then((function(e){e.data.sucess&&t.commit("PROUCTSSHOW",!1),t.commit("STATUS",""),t.dispatch("getCart")}))},removeCart:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/cart/").concat(e);t.commit("ISLOADING",!0),v.a.delete(n).then((function(e){t.dispatch("getCart"),t.commit("ISLOADING",!1)}))}},getters:{products:function(t){return t.products},isLoading:function(t){return t.isLoading},productone:function(t){return t.productone},status:function(t){return t.status.loadingItem}},modules:{}}),S=n("a7fe"),k=n.n(S),w=n("9062"),y=n.n(w),A=(n("e40d"),n("4989"),n("a9e3"),n("b680"),n("ac1f"),n("5319"),function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,(function(t,e,n){var o=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return o})))}),T=n("f5af"),I=n.n(T),C=(n("e829"),n("7bb1")),L=n("4c93"),j=n("60d4");c["a"].prototype.$bus=new c["a"],Object(C["e"])("zh_TW",j),c["a"].component("ValidationProvider",C["b"]),v.a.defaults.withCredentials=!0,c["a"].config.productionTip=!1,c["a"].use(k.a,v.a),c["a"].component("Loading",y.a),c["a"].use(a["a"]),c["a"].filter("currency",A),Object(C["d"])("secret",{validate:function(t){return"example"===t},message:"This is not the magic word"}),Object.keys(L).forEach((function(t){Object(C["d"])(t,Object(o["a"])({},L[t],{message:j["messages"][t]}))})),Object(C["d"])("email",L["email"]),Object(C["d"])("required",Object(o["a"])({},L["required"],{message:"請輸入{_field_}"})),Object(C["d"])("phone",{validate:function(t,e){return t.length>=e.length},params:["length"],message:"請輸入正確手機號碼10位數"}),Object(C["d"])("addres",{validate:function(t,e){return t.length>=e.length},params:["length"],message:"請輸入正確地址，如:台北市信義區"}),Object(C["c"])({classes:{valid:"valid",invalid:"invalid"}}),new c["a"]({created:function(){I.a.init({duration:3e3})},router:b,store:O,render:function(t){return t(f)}}).$mount("#app"),b.beforeEach((function(t,e,n){if(t.meta.requiresAuth){console.log("這裡需要驗證");var o="".concat("https://vue-course-api.hexschool.io/","api/user/check");v.a.post(o).then((function(t){t.data.success?n():n({path:"/aboutus"})}))}else n()}))},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),c=n.n(o);c.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.8c687710.js.map
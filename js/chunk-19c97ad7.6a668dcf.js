(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19c97ad7"],{"3c3e":function(t,s,a){t.exports=a.p+"img/mastercard.db4c8702.png"},4480:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bg-cart container-fluid"},[a("div",{staticClass:" pt-5  row justify-content-center"},[a("form",{staticClass:"col-md-6 py-3 bgmap",on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.order.products,(function(s){return a("tr",{key:s.id,staticClass:" text-white"},[a("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.final_total))])])})),0),a("tfoot",[a("tr",{staticClass:"text-white"},[a("td",{attrs:{colspan:"2"}},[t._v("總計")]),a("td",[t._v(t._s(t.order.total))])])])]),a("table",{staticClass:"table"},[a("tbody",{staticClass:"text-white"},[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("收件人電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("收件人地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])]),t._m(1),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger mr-2",on:{click:function(s){return s.preventDefault(),t.backpages()}}},[t._v("返回上一頁")]),!1===t.order.is_paid?a("button",{staticClass:"btn btn-dark"},[t._v("確認付款去")]):t._e()])])])])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:" text-white"},[a("th",[t._v("品名")]),a("th",[t._v("數量")]),a("th",[t._v("單價")])])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"payimg ml-2 mb-3"},[r("img",{staticClass:"mr-2",attrs:{src:a("3c3e"),alt:""}}),r("img",{staticClass:"mr-2",attrs:{src:a("bb37"),alt:""}}),r("img",{staticClass:"mr-2",attrs:{src:a("e168"),alt:""}}),r("img",{staticClass:"mr-2",attrs:{src:a("ac7b"),alt:""}})])}],i=(a("99af"),{data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/order/").concat(t.orderId);this.$http.get(s).then((function(s){t.order=s.data.order}))},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/pay/").concat(t.orderId);this.$http.post(s).then((function(s){s.data.success&&t.getOrder()}))},backpages:function(){this.$bus.$emit("message:push","將返回上一頁，購物車將清空","danger"),this.$router.push("/costomShop")}},computed:{},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}}),c=i,n=a("2877"),o=Object(n["a"])(c,r,e,!1,null,null,null);s["default"]=o.exports},ac7b:function(t,s,a){t.exports=a.p+"img/paypal.70848447.png"},bb37:function(t,s,a){t.exports=a.p+"img/jcbcard.479b6af6.png"},e168:function(t,s,a){t.exports=a.p+"img/visacard.d385d7ff.png"}}]);
//# sourceMappingURL=chunk-19c97ad7.6a668dcf.js.map
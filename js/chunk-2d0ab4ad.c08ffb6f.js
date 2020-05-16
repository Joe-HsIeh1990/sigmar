(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab4ad"],{"153f":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openModal(!0)}}},[t._v("建立新商品")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.products,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.origin_price)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.price)))]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",[t._v("未啟用")])]),e("td",[e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.openModal(!1,a)}}},[t._v("編輯")])]),e("td",[e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.delmodal(a)}}},[t._v("刪除")])])])})),0)]),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[t.pagination.has_pre?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getProducts(a)}}},[t._v(t._s(a))])])})),t.pagination.has_next?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])]):t._e()],2)]),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"imageUrl",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.status.fileUploading?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),e("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),e("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"category"}},[t._v("分類")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"category",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("單位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"unit",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"origin_price"}},[t._v("原價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"origin_price",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("售價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"price",a.target.value)}}})])]),e("hr"),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("產品描述")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"description",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"content"}},[t._v("說明內容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"content",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":1},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(a){var e=t.tempProduct.is_enabled,o=a.target,s=(o.checked,1);if(Array.isArray(e)){var i=null,r=t._i(e,i);o.checked?r<0&&t.$set(t.tempProduct,"is_enabled",e.concat([i])):r>-1&&t.$set(t.tempProduct,"is_enabled",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",s)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.updateProduct(a)}}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deldataProduct}},[t._v("確認刪除")])])])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("分類")]),e("th",[t._v("產品名稱")]),e("th",{attrs:{width:"120"}},[t._v("原價")]),e("th",{attrs:{width:"120"}},[t._v("售價")]),e("th",{attrs:{width:"100"}},[t._v("是否啟用")]),e("th",{attrs:{width:"80"}},[t._v("編輯")]),e("th",[t._v("刪除")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(e("99af"),e("1157")),r=e.n(i),c={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1}}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/products?page=").concat(t),e=this;e.isLoading=!0,this.$http.get(a).then((function(t){e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination}))},openModal:function(t,a){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},a),this.isNew=!1),r()("#productModal").modal("show")},delmodal:function(t){this.tempProduct=t,r()("#delProductModal").modal("show")},deldataProduct:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/admin/product/").concat(this.tempProduct.id);this.$http.delete(a).then((function(a){a.data.success?(r()("#delProductModal").modal("hide"),t.getProducts()):(r()("#delProductModal").modal("hide"),t.getProducts(),console.log("刪除失敗"))}))},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/admin/product"),a="post",e=this;e.isNew||(t="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/admin/product/").concat(e.tempProduct.id),a="put"),console.log("https://vue-course-api.hexschool.io/","aswork"),this.$http[a](t,{data:e.tempProduct}).then((function(t){console.log(t.data),t.data.success,r()("#productModal").modal("hide"),e.getProducts()}))},uploadFile:function(){var t=this,a=this.$refs.files.files[0],e=this,o=new FormData;o.append("file-to-upload",a);var s="".concat("https://vue-course-api.hexschool.io/","api/").concat("aswork","/admin/upload");e.status.fileUploading=!0,this.$http.post(s,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){console.log(a.data),e.status.fileUploading=!1,a.data.success?e.$set(e.tempProduct,"imageUrl",a.data.imageUrl):t.$bus.$emit("message:push",a.data.message,"danger")}))}},created:function(){this.getProducts()}},l=c,n=e("2877"),d=Object(n["a"])(l,o,s,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0ab4ad.c08ffb6f.js.map
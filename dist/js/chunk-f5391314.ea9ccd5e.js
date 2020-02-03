(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5391314"],{"7cb4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"gap-setting"},[t._m(0),a("div",{staticClass:"cart-frame"},[a("div",{staticClass:"cart-table clear-space"},[t._m(1),t._l(t.cart.carts,(function(e){return a("div",{key:e.id,staticClass:"tb-list"},[a("div",{staticClass:"tb-first"},[a("div",{staticClass:"field tb-img"},[a("div",{staticClass:"product-img",style:{backgroundImage:"url("+e.product.imageUrl+")"}})]),a("div",{staticClass:"field tb-title"},[a("div",[t._v(t._s(e.product.title))]),e.coupon?a("div",{staticClass:"note color-focus"},[t._v("已套用優惠券")]):t._e()])]),a("div",{staticClass:"tb-snd"},[a("div",{staticClass:"field qty"},[a("span",{staticClass:"f-name"},[t._v("數量")]),a("span",{staticClass:"f-txt"},[t._v(t._s(e.qty))])])]),a("div",{staticClass:"tb-thd"},[a("div",{staticClass:"field total"},[a("span",{staticClass:"f-name"},[t._v("小計")]),a("span",{staticClass:"f-txt"},[t._v(t._s(t._f("currency")(e.final_total)))])])])])})),a("div",{staticClass:"tb-foot"},[a("div",{staticClass:"tb-final-title"},[t._v("總計")]),a("div",{staticClass:"tb-price"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.total!=t.cart.final_total?a("div",{staticClass:"tb-foot color-focus"},[a("div",{staticClass:"tb-final-title"},[t._v("折扣價")]),a("div",{staticClass:"tb-price"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]):t._e()],2)]),a("div",{staticClass:"cart-frame"},[a("form",{staticClass:"col-md-12",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("p",{staticClass:"sc-title"},[t._v("收件人資訊")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email",required:""},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.errors.first("email"))+" ")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"5"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(2)])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"process-step clear-space"},[a("div",{staticClass:"step active"},[t._v("1 填寫資訊")]),a("div",{staticClass:"step"},[t._v("2 確認付款")]),a("div",{staticClass:"step"},[t._v("3 完成訂單")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tb-head"},[a("div",{staticClass:"tb-first"},[a("div",{staticClass:"field tb-img"}),a("div",{staticClass:"field tb-title"},[t._v("商品名稱")])]),a("div",{staticClass:"tb-snd"},[a("div",{staticClass:"field qty"},[t._v("數量")])]),a("div",{staticClass:"tb-thd"},[a("div",{staticClass:"field total"},[t._v("小計")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn-sample"},[t._v("送出訂單")])])}],i=(a("99af"),{data:function(){return{cart:{carts:[]},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},created:function(){this.getCart()},methods:{getCart:function(){var t=this,e="".concat("https://vue-course-api.herokuapp.com","/api/").concat("innie","/cart");t.isLoading=!0,this.$http.get(e).then((function(e){t.cart=e.data.data,console.log(e),t.isLoading=!1}))},createOrder:function(){var t=this,e=this,a="".concat("https://vue-course-api.herokuapp.com","/api/").concat("innie","/order");this.$validator.validate().then((function(s){s?t.$http.post(a,{data:e.form}).then((function(t){t.data.success&&(e.$bus.$emit("updateCart"),e.$bus.$emit("message:push",t.data.message,"warning"),e.$router.push("checkout/".concat(t.data.orderId)))})):(e.$bus.$emit("updateCart"),e.$bus.$emit("message:push","欄位不完整","danger"))}))}}}),o=i,l=a("2877"),c=Object(l["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports},8418:function(t,e,a){"use strict";var s=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var o=s(e);o in t?r.f(t,o,i(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),i=a("e8b5"),o=a("861d"),l=a("7b0b"),c=a("50c4"),n=a("8418"),d=a("65f0"),u=a("1dde"),m=a("b622"),v=a("2d00"),f=m("isConcatSpreadable"),p=9007199254740991,C="Maximum allowed index exceeded",_=v>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=u("concat"),h=function(t){if(!o(t))return!1;var e=t[f];return void 0!==e?!!e:i(t)},b=!_||!g;s({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,s,r,i,o=l(this),u=d(o,0),m=0;for(e=-1,s=arguments.length;e<s;e++)if(i=-1===e?o:arguments[e],h(i)){if(r=c(i.length),m+r>p)throw TypeError(C);for(a=0;a<r;a++,m++)a in i&&n(u,m,i[a])}else{if(m>=p)throw TypeError(C);n(u,m++,i)}return u.length=m,u}})}}]);
//# sourceMappingURL=chunk-f5391314.ea9ccd5e.js.map
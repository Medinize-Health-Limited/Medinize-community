(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{461:function(t,e,o){t.exports=o.p+"img/reset-success.646c49e.png"},539:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this._self._c;return t("div",[t("h1",{staticClass:"text-2xl text-[#0A7D08] font-bold text-center"},[this._v("\n          Reset your Password\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"w-full"},[t("button",{staticClass:"text-white bg-[#0A7D08] py-3 w-full rounded-full"},[this._v("\n          Reset Password\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"w-full"},[t("img",{attrs:{src:o(461),alt:""}})])}],n={layout:"auth",data:function(){return{is_password_eye_open:!1,is_confirm_password_eye_open:!1}},computed:{togglePasswordEye:function(){return this.is_password_eye_open?"eye-open":"eye-close"},toggleConfirmPasswordEye:function(){return this.is_confirm_password_eye_open?"eye-open":"eye-close"}}},l=o(19),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"grid place-content-center place-items-center h-screen"},[t.is_email_sent?e("div",{staticClass:"flex justify-center items-center flex-col space-y-8 w-[500px]"},[t._m(2),t._v(" "),e("h1",{staticClass:"text-lg text-gray-950"},[t._v("Congratulations!")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-500"},[t._v("Your password have been reset successfully")]),t._v(" "),e("div",{staticClass:"w-full"},[e("nuxt-link",{staticClass:"text-white bg-[#0A7D08] py-3 w-full rounded-full",attrs:{to:"/login"}},[t._v("\n          Back to Login\n        ")])],1)]):e("div",{staticClass:"flex justify-center items-center flex-col space-y-8 w-[500px]"},[t._m(0),t._v(" "),e("div",{staticClass:"w-full relative"},[e("label",{staticClass:"sr-only",attrs:{for:"password"}}),t._v(" "),e("input",{staticClass:"py-3 rounded-md w-full px-3 border outline-none border-gray-300",attrs:{id:"password",type:t.is_password_eye_open?"text":"password",placeholder:"Password"}}),t._v(" "),e("div",{staticClass:"absolute right-6 top-4"},[e("img",{staticClass:"h-6 w-6 cursor-pointer",attrs:{src:o(136)("./".concat(t.togglePasswordEye,".svg")),alt:""},on:{click:function(e){t.is_password_eye_open=!t.is_password_eye_open}}})])]),t._v(" "),e("div",{staticClass:"w-full relative"},[e("label",{staticClass:"sr-only",attrs:{for:"confirmPassword"}}),t._v(" "),e("input",{staticClass:"py-3 rounded-md w-full px-3 border outline-none border-gray-300",attrs:{id:"confirmPassword",type:t.is_confirm_password_eye_open?"text":"password",placeholder:"Password"}}),t._v(" "),e("div",{staticClass:"absolute right-6 top-4"},[e("img",{staticClass:"h-6 w-6 cursor-pointer",attrs:{src:o(136)("./".concat(t.toggleConfirmPasswordEye,".svg")),alt:""},on:{click:function(e){t.is_confirm_password_eye_open=!t.is_confirm_password_eye_open}}})])]),t._v(" "),t._m(1)])])])}),r,!1,null,null,null);e.default=component.exports}}]);
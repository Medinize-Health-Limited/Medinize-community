(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{540:function(e,t,o){"use strict";o.r(t);o(81),o(50),o(59),o(39),o(16);var r=o(514).countryCodeEmoji,n=o(515),l=o(516);l.registerLocale(o(520));var d={layout:"auth",data:function(){return{is_password_eye_open:!1,is_confirm_password_eye_open:!1,processing:!1,errorMessage:"",showPassword:!1,selected:null,countryFlag:"",options:[],form:{first_name:"",last_name:"",email:"",phone_number:"",password:""}}},computed:{togglePasswordEye:function(){return this.is_password_eye_open?"eye-open":"eye-close"},toggleConfirmPasswordEye:function(){return this.is_confirm_password_eye_open?"eye-open":"eye-close"},countries:function(){var e=l.getNames("en",{select:"alias"});return Object.keys(e).map((function(t){return{value:t,label:e[t]}}))},isFormValid:function(){var e,t,o,r,n;return!!(null!==(e=this.form)&&void 0!==e&&null!==(e=e.first_name)&&void 0!==e&&e.length&&null!==(t=this.form)&&void 0!==t&&null!==(t=t.last_name)&&void 0!==t&&t.length&&null!==(o=this.form)&&void 0!==o&&null!==(o=o.email)&&void 0!==o&&o.length&&null!==(r=this.form)&&void 0!==r&&null!==(r=r.phone_number)&&void 0!==r&&r.length&&null!==(n=this.form)&&void 0!==n&&null!==(n=n.password)&&void 0!==n&&n.length)}},watch:{selected:function(){var e=n.byInternet(this.selected);console.log(e);var t=r(this.selected);this.countryFlag=t}},methods:{handleSignup:function(){var e=this;this.processing=!0,this.$axios.post("https://medinize-apis.onrender.com/signup/",this.form).then((function(t){e.$toastr.s("Signup was successful"),e.$router.push("/")})).catch((function(t){var o;e.errorMessage=t&&(null==t||null===(o=t.response)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.error),e.$toastr.e(e.errorMessage)})).finally((function(){e.processing=!1}))}}},m=o(19),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("main",[t("div",{staticClass:"grid mt-4 md:mt-10 mb-4"},[t("form",{staticClass:"flex justify-center items-center flex-col space-y-8 w-11/12 mx-auto lg:w-[500px]",on:{submit:function(t){return t.preventDefault(),e.handleSignup.apply(null,arguments)}}},[e._m(0),e._v(" "),t("div",{staticClass:"w-full"},[t("label",{staticClass:"sr-only",attrs:{for:"fname"}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.first_name,expression:"form.first_name"}],staticClass:"py-3 rounded-md w-full px-3 border text-sm outline-none border-gray-300",attrs:{id:"fname",type:"text",placeholder:"Enter first name"},domProps:{value:e.form.first_name},on:{input:function(t){t.target.composing||e.$set(e.form,"first_name",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full"},[t("label",{staticClass:"sr-only",attrs:{for:"lname"}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.last_name,expression:"form.last_name"}],staticClass:"py-3 rounded-md w-full px-3 border text-sm outline-none border-gray-300",attrs:{id:"lname",type:"text",placeholder:"Enter last name"},domProps:{value:e.form.last_name},on:{input:function(t){t.target.composing||e.$set(e.form,"last_name",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full"},[t("label",{staticClass:"sr-only",attrs:{for:"email"}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"py-3 rounded-md w-full text-sm px-3 border outline-none border-gray-300",attrs:{id:"email",type:"email",placeholder:"Enter Email address"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full"},[t("label",{staticClass:"sr-only",attrs:{for:"phone"}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_number,expression:"form.phone_number"}],staticClass:"py-3 rounded-md w-full text-sm px-3 border outline-none border-gray-300",attrs:{id:"phone",type:"tel",placeholder:"Enter phone number"},domProps:{value:e.form.phone_number},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_number",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full relative"},[t("label",{staticClass:"sr-only",attrs:{for:"password"}}),e._v(" "),"checkbox"==(e.is_password_eye_open?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"py-3 text-sm rounded-md w-full px-3 border outline-none border-gray-300",attrs:{id:"password",placeholder:"Enter Password",type:"checkbox"},domProps:{checked:Array.isArray(e.form.password)?e._i(e.form.password,null)>-1:e.form.password},on:{change:function(t){var o=e.form.password,r=t.target,n=!!r.checked;if(Array.isArray(o)){var l=e._i(o,null);r.checked?l<0&&e.$set(e.form,"password",o.concat([null])):l>-1&&e.$set(e.form,"password",o.slice(0,l).concat(o.slice(l+1)))}else e.$set(e.form,"password",n)}}}):"radio"==(e.is_password_eye_open?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"py-3 text-sm rounded-md w-full px-3 border outline-none border-gray-300",attrs:{id:"password",placeholder:"Enter Password",type:"radio"},domProps:{checked:e._q(e.form.password,null)},on:{change:function(t){return e.$set(e.form,"password",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"py-3 text-sm rounded-md w-full px-3 border outline-none border-gray-300",attrs:{id:"password",placeholder:"Enter Password",type:e.is_password_eye_open?"text":"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),t("div",{staticClass:"absolute right-6 top-4"},[t("img",{staticClass:"h-6 w-6 cursor-pointer",attrs:{src:o(136)("./".concat(e.togglePasswordEye,".svg")),alt:""},on:{click:function(t){e.is_password_eye_open=!e.is_password_eye_open}}})])]),e._v(" "),t("div",{staticClass:"w-full"},[t("button",{staticClass:"text-white text-xs md:text-sm md:py-3 py-3 rounded-lg text-center w-full bg-[#0A7D08]",class:[!e.isFormValid||e.processing?"cursor-not-allowed opacity-25":""],attrs:{disabled:!e.isFormValid||e.processing}},[e._v("\n          "+e._s(e.processing?"processing...":"Create an Account")+"\n        ")])])])])])}),[function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"text-2xl text-[#0A7D08] font-bold text-center"},[e._v("\n          Create an account with Medinize\n        ")]),e._v(" "),t("p",{staticClass:"text-xs md:text-sm text-gray-500 text-center"},[e._v("\n          Hey! Set up your account to embark on this journey\n        ")])])}],!1,null,null,null);t.default=component.exports}}]);
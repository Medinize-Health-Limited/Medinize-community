(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{508:function(t,e,n){"use strict";n.r(e);n(22),n(39);var o={layout:"dashboardLayout",data:function(){return{showSidebar:!1,user:{},showAppointmentForm:!1,upcomingAppointments:[{id:1,physician:"Dr. Chuks John",physicianPosition:"General Practitioner",appointmentDay:"Tuesday",appointmentDate:"2nd April, 2023",appointmentTime:"8:30 AM"},{id:2,physician:"Dr. Ann Ogwa",physicianPosition:"General Practitioner",appointmentDay:"Tuesday",appointmentDate:"2nd April, 2023",appointmentTime:"8:30 AM"}],pastAppointments:[{id:1,physician:"Dr. Chuks John",physicianPosition:"General Practitioner",appointmentDay:"Tuesday",appointmentDate:"2nd April, 2023",appointmentTime:"8:30 AM"},{id:2,physician:"Dr. Remmy Manny",physicianPosition:"Cardiologist",appointmentDay:"Saturday",appointmentDate:"6th April, 2023",appointmentTime:"11:00 AM"}],notifications:[],currentTab:"Upcoming",appointments:[{name:"Upcoming Appointment",value:"Upcoming"},{name:"Past Appointment",value:"Past"}],homeTabs:["Overview","Messages"],activeHomeTab:"Overview"}},mounted:function(){var t=localStorage.getItem("user");this.user=t?JSON.parse(t):"",this.user?console.log(this.user):this.$router.push("/")},methods:{toggleSidebar:function(){console.log("clicked"),this.showSidebar=!this.showSidebar},toggleAppointmentForm:function(){this.showAppointmentForm=!this.showAppointmentForm}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-[#E6EDFE]"},[e("main",[e("div",{staticClass:"border bg-white rounded-lg"},[e("p",{staticClass:"bg-white py-4 pl-4 rounded-tr-md rounded-tl-md"},[t._v("\n        Appointnment\n      ")]),t._v(" "),"Overview"===t.activeHomeTab?e("div",[e("div",{staticClass:"space-y-6"},[e("div",{},[e("div",{staticClass:"grid grid-cols-2 ring-gray-50 rounded-md bg-white relative"},t._l(t.appointments,(function(n){return e("div",{key:n.value,staticClass:"flex justify-center gap-x-4 items-center h-full border-[0.4px]",class:[t.currentTab!=n.value?"":"bg-gray-50"]},[e("button",{staticClass:"tracking-wide w-full flex justify-center items-center pt-3",class:[t.currentTab===n.value?"border-b-2 border-gray-500":"border-gray-500"],on:{click:function(e){t.currentTab=n.value}}},[e("div",{staticClass:"flex justify-center items-center flex-col"},[e("p",{staticClass:"uppercase text-xs md:text-base"},[t._v("\n                      "+t._s(n.name)+"\n                    ")])])])])})),0),t._v(" "),t.currentTab===t.appointments[0].value?e("section",[t.upcomingAppointments.length?e("main",{},[t._l(t.upcomingAppointments,(function(n){return e("main",{key:n.id,staticClass:"bg-white border-b"},[e("div",{staticClass:"md:p-6 p-3"},[e("div",{staticClass:"flex justify-between md:space-x-6 space-x-3"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"space-y-6 flex-grow"},[e("div",{staticClass:"space-y-1"},[e("h1",{staticClass:"text-gray-700 font-medium text-xs md:text-base tracking-wide"},[t._v("\n                            "+t._s(n.physician)+"\n                          ")]),t._v(" "),e("p",{staticClass:"text-gray-500 text-xs"},[t._v("\n                            "+t._s(n.physicianPosition)+"\n                          ")])])]),t._v(" "),e("div",{staticClass:"flex space-x-2"},[e("p",{staticClass:"text-gray-500 text-xs md:text-sm"},[t._v("\n                          "+t._s(n.appointmentDate)+"\n                        ")])])])])])})),t._v(" "),e("div",{staticClass:"py-3 px-6 flex justify-between items-center",staticStyle:{"background-color":"#FFFF"}},[e("p",{staticClass:"text-xs md:text-sm text-teal-700 tracking-wider"},[t._v("\n                    See all Appointments\n                  ")]),t._v(" "),e("p",{staticClass:"cursor-pointer"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#c7cecb","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M9 18l6-6-6-6"}})])])])],2):e("main",{staticClass:"flex justify-center items-center flex-col space-y-6 bg-white py-20"},[e("p",{staticClass:"tracking-wider",staticStyle:{color:"#353F50"}},[t._v("\n                  ⏱ No upcoming appointments.\n                ")])])]):t._e(),t._v(" "),t.currentTab===t.appointments[1].value?e("section",[t.pastAppointments.length?e("main",{},[t._l(t.pastAppointments,(function(n){return e("main",{key:n.id,staticClass:"bg-white border-b"},[e("div",{staticClass:"md:p-6 p-3"},[e("div",{staticClass:"flex justify-between md:space-x-6 space-x-3"},[t._m(1,!0),t._v(" "),e("div",{staticClass:"space-y-6 flex-grow"},[e("div",{staticClass:"space-y-1"},[e("h1",{staticClass:"text-gray-700 text-xs md:text-base tracking-wide"},[t._v("\n                            "+t._s(n.physician)+"\n                          ")]),t._v(" "),e("p",{staticClass:"text-gray-500 text-xs"},[t._v("\n                            "+t._s(n.physicianPosition)+"\n                          ")])])]),t._v(" "),e("div",{staticClass:"flex space-x-2"},[e("p",{staticClass:"text-gray-500 text-xs md:text-sm"},[t._v("\n                          "+t._s(n.appointmentDate)+"\n                        ")])])])])])})),t._v(" "),e("div",{staticClass:"py-3 px-6 flex justify-between items-center",staticStyle:{"background-color":"#FFFF"}},[e("p",{staticClass:"text-xs md:text-sm text-teal-700 tracking-wider"},[t._v("\n                    See all Appointments\n                  ")]),t._v(" "),e("p",{staticClass:"cursor-pointer"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#c7cecb","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M9 18l6-6-6-6"}})])])])],2):e("main",{staticClass:"flex justify-center items-center flex-col space-y-6 bg-white py-20"},[e("p",{staticClass:"tracking-wider",staticStyle:{color:"#353F50"}},[t._v("\n                  ⏱ No past appointments.\n                ")])])]):t._e()])])]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{},[t("img",{staticClass:"h-16 w-16 rounded-full object-cover shadow-sm",attrs:{alt:"Paul Clapton",src:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"}})])},function(){var t=this._self._c;return t("div",[t("img",{staticClass:"h-16 w-16 rounded-full object-cover shadow-sm",attrs:{alt:"Paul Clapton",src:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"}})])}],!1,null,null,null);e.default=component.exports}}]);
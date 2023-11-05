<template>
  <section>
    <main>
      <div class="border bg-white rounded-lg">
        <p class="bg-[#E6EDFE] py-3.5 pl-4 rounded-tr-md rounded-tl-md">Appointnmant</p>
        <div v-if="activeHomeTab === 'Overview'">
          <div class="space-y-6">
            <div class="">
              <div class="grid grid-cols-2 ring-gray-50 rounded-md bg-white relative">
                <div v-for="appointment in appointments" :key="appointment"
                  :class="[currentTab != appointment ? 'bg-gray-50' : '']"
                  class="flex justify-center items-center h-full p-3">
                  <button :class="[currentTab === appointment ? 'text-gray-600' : 'text-gray-400']" class="tracking-wide"
                    @click="currentTab = appointment">
                    <div class="flex justify-center items-center flex-col">
                      <p class="uppercase text-xs md:text-base">
                        {{ appointment }}
                      </p>
                      <div class="flex justify-center items-center">
                        <p v-if="currentTab === appointment"
                          class="w-6/12 h-0.5 first-letter:  bg-gray-600 absolute bottom-0 flex justify-center items-center" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <section v-if="currentTab === appointments[0]">
                <main v-if="upcomingAppointments.length" class="">
                  <main v-for="upcomingAppointment in upcomingAppointments" :key="upcomingAppointment.id"
                    class="bg-white border-b">
                    <div class="md:p-6 p-3">
                      <div class="flex justify-between md:space-x-6 space-x-3">
                        <div class="">
                          <!-- <img src="@/assets/img/doctorsAvatar.svg" class="h-6 w-6 md:h-full md:w-full" alt=""> -->
                          <img alt="Paul Clapton"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            class="h-16 w-16 rounded-full object-cover shadow-sm " />
                        </div>
                        <div class="space-y-6 flex-grow">
                          <div class="space-y-1">
                            <h1 class="text-gray-700 font-medium text-xs md:text-base tracking-wide">
                              {{ upcomingAppointment.physician }}
                            </h1>
                            <p class="text-gray-500 font-medium text-xs">
                              {{ upcomingAppointment.physicianPosition }}
                            </p>
                          </div>
                        </div>
                        <div class="flex space-x-2">
                          <!-- <div> <img src="@/assets/img/reminder.svg"></div> -->
                          <p class="text-gray-500 text-xs md:text-sm">
                            {{ upcomingAppointment.appointmentDate }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </main>
                  <div style="background-color : #FFFF" class="py-3 px-6 flex justify-between items-center">
                    <p class="text-xs md:text-sm text-teal-700 tracking-wider">
                      See all Appointments
                    </p>
                    <p class="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="#c7cecb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </p>
                  </div>
                </main>
                <main v-else class="flex justify-center items-center flex-col space-y-6 bg-white py-20">
                  <!-- <div><img src="@/assets/img/empty-state.svg" alt="" /></div> -->
                  <p style="color : #353F50" class="tracking-wider">
                    ⏱ No upcoming appointments.
                  </p>
                </main>
              </section>

              <section v-if="currentTab === appointments[1]">
                <main v-if="pastAppointments.length" class="">
                  <main v-for="pastAppointment in pastAppointments" :key="pastAppointment.id" class="bg-white border-b">
                    <div class="md:p-6 p-3">
                      <div class="flex justify-between md:space-x-6 space-x-3">
                        <div>
                          <!-- <img src="@/assets/img/doctorsAvatar.svg" class="h-6 w-6 md:h-full md:w-full" alt=""> -->
                          <img alt="Paul Clapton"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            class="h-16 w-16 rounded-full object-cover shadow-sm " />
                        </div>
                        <div class="space-y-6 flex-grow">
                          <div class="space-y-1">
                            <h1 class="text-gray-700 text-xs md:text-base tracking-wide">
                              {{ pastAppointment.physician }}
                            </h1>
                            <p class="text-gray-500 text-xs">
                              {{ pastAppointment.physicianPosition }}
                            </p>
                          </div>
                        </div>
                        <div class="flex space-x-2">
                          <!-- <div> <img src="@/assets/img/reminder.svg"></div> -->
                          <p class="text-gray-500 text-xs md:text-sm ">
                            {{ pastAppointment.appointmentDate }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </main>
                  <div style="background-color : #FFFF" class="py-3 px-6 flex justify-between items-center">
                    <p class="text-sm text-teal-700 tracking-wider">
                      See all Appointments
                    </p>
                    <p class="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="#c7cecb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </p>
                  </div>
                </main>
                <main v-else class="flex justify-center items-center flex-col space-y-6 bg-white py-20">
                  <!-- <div><img src="@/assets/img/empty-state.svg" alt="" /></div> -->
                  <p style="color : #353F50" class="tracking-wider">
                    ⏱ No past appointments.
                  </p>
                </main>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  layout: 'dashboardLayout',
  data() {
    return {
      showSidebar: false,
      user: {},
      showAppointmentForm: false,
      upcomingAppointments: [
        {
          id: 1,
          physician: 'Dr. Chuks John',
          physicianPosition: 'General Practitioner',
          appointmentDay: 'Tuesday',
          appointmentDate: '2nd April, 2023',
          appointmentTime: '8:30 AM'

        },
        {
          id: 2,
          physician: 'Dr. Ann Ogwa',
          physicianPosition: 'General Practitioner',
          appointmentDay: 'Tuesday',
          appointmentDate: '2nd April, 2023',
          appointmentTime: '8:30 AM'

        }
      ],
      pastAppointments: [
        {
          id: 1,
          physician: 'Dr. Chuks John',
          physicianPosition: 'General Practitioner',
          appointmentDay: 'Tuesday',
          appointmentDate: '2nd April, 2023',
          appointmentTime: '8:30 AM'

        },
        {
          id: 2,
          physician: 'Dr. Remmy Manny',
          physicianPosition: 'Cardiologist',
          appointmentDay: 'Saturday',
          appointmentDate: '6th April, 2023',
          appointmentTime: '11:00 AM'

        }
      ],
      notifications: [
      ],
      currentTab: 'Upcoming',
      appointments: ['Upcoming', 'Past'],
      homeTabs: ['Overview', 'Messages'],
      activeHomeTab: 'Overview'
    }
  },
  mounted() {
    const user = localStorage.getItem('user')
    this.user = user ? JSON.parse(user) : ''
    if (this.user) {
      console.log(this.user)
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    toggleSidebar() {
      console.log('clicked')
      this.showSidebar = !this.showSidebar
    },
    toggleAppointmentForm() {
      this.showAppointmentForm = !this.showAppointmentForm
    }
  }
}
</script>

<style></style>

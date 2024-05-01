<template>
  <div class="mt-10">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 space-y-4 md:space-y-0">
      <div class="rounded-lg lg:col-span-2 top-10 space-y-4">
        <div
          class="hidden bg-[#0A8525FC] space-y-8 md:space-y-6 p-6 lg:flex justify-between items-center relative h-[226px] rounded-3xl">
          <div class="flex flex-col h-full justify-end space-y-16">
            <div class="flex items-center gap-x-3 bg-[#37A850] rounded-lg px-4 py-2.5 z-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.83327 15.2485L4.56432 15.0809L3.83327 15.2485ZM3.83327 9.35323L4.56432 9.52078L3.83327 9.35323ZM20.1667 9.35323L19.4357 9.52079L20.1667 9.35323ZM20.1667 15.2485L19.4357 15.0809L20.1667 15.2485ZM14.8801 20.6589L15.0552 21.3882L14.8801 20.6589ZM9.11986 20.6589L9.29493 19.9296L9.11986 20.6589ZM9.11985 3.94279L9.29493 4.67207L9.11985 3.94279ZM14.8801 3.94279L15.0552 3.21351L14.8801 3.94279ZM8.82008 3C8.82008 2.58579 8.48429 2.25 8.07008 2.25C7.65587 2.25 7.32008 2.58579 7.32008 3H8.82008ZM7.32008 5.51375C7.32008 5.92796 7.65587 6.26375 8.07008 6.26375C8.48429 6.26375 8.82008 5.92796 8.82008 5.51375H7.32008ZM16.6799 3C16.6799 2.58579 16.3441 2.25 15.9299 2.25C15.5157 2.25 15.1799 2.58579 15.1799 3H16.6799ZM15.1799 5.51375C15.1799 5.92796 15.5157 6.26375 15.9299 6.26375C16.3441 6.26375 16.6799 5.92796 16.6799 5.51375H15.1799ZM4.56432 15.0809C4.14523 13.2524 4.14523 11.3493 4.56432 9.52078L3.10223 9.18568C2.63259 11.2347 2.63259 13.367 3.10223 15.416L4.56432 15.0809ZM19.4357 9.52079C19.8548 11.3493 19.8548 13.2524 19.4357 15.0809L20.8978 15.416C21.3674 13.367 21.3674 11.2347 20.8978 9.18568L19.4357 9.52079ZM14.7051 19.9296C12.9258 20.3568 11.0742 20.3568 9.29493 19.9296L8.94478 21.3882C10.9542 21.8706 13.0458 21.8706 15.0552 21.3882L14.7051 19.9296ZM9.29493 4.67207C11.0742 4.24493 12.9258 4.24493 14.7051 4.67207L15.0552 3.21351C13.0458 2.73111 10.9542 2.73111 8.94478 3.21351L9.29493 4.67207ZM9.29493 19.9296C6.95607 19.3682 5.11769 17.4953 4.56432 15.0809L3.10223 15.416C3.77946 18.3708 6.03739 20.6902 8.94478 21.3882L9.29493 19.9296ZM15.0552 21.3882C17.9626 20.6902 20.2205 18.3708 20.8978 15.416L19.4357 15.0809C18.8823 17.4953 17.0439 19.3682 14.7051 19.9296L15.0552 21.3882ZM14.7051 4.67207C17.0439 5.23355 18.8823 7.10642 19.4357 9.52079L20.8978 9.18568C20.2205 6.23089 17.9626 3.91147 15.0552 3.21351L14.7051 4.67207ZM8.94478 3.21351C6.03739 3.91147 3.77946 6.23089 3.10223 9.18568L4.56432 9.52078C5.11769 7.10641 6.95607 5.23355 9.29493 4.67207L8.94478 3.21351ZM4.14016 9.02886H19.8598V7.52886H4.14016V9.02886ZM7.32008 3V5.51375H8.82008V3H7.32008ZM15.1799 3V5.51375H16.6799V3H15.1799Z"
                  fill="white" />
                <path
                  d="M13.4419 13.9239C13.8469 13.6359 14.0989 13.2039 14.0989 12.6189C14.0989 11.4039 13.1629 10.7739 12.0559 10.7739C10.9489 10.7739 10.0039 11.4039 10.0039 12.6189C10.0039 13.2039 10.2649 13.6359 10.6609 13.9239C10.1119 14.2569 9.79688 14.8059 9.79688 15.4449C9.79688 16.6059 10.6519 17.3259 12.0559 17.3259C13.4509 17.3259 14.3149 16.6059 14.3149 15.4449C14.3149 14.8059 13.9999 14.2569 13.4419 13.9239ZM12.0559 11.9439C12.5239 11.9439 12.8659 12.2139 12.8659 12.6819C12.8659 13.1409 12.5239 13.4289 12.0559 13.4289C11.5879 13.4289 11.2459 13.1409 11.2459 12.6819C11.2459 12.2139 11.5879 11.9439 12.0559 11.9439ZM12.0559 16.1559C11.4619 16.1559 11.0299 15.8499 11.0299 15.2829C11.0299 14.7249 11.4619 14.4189 12.0559 14.4189C12.6499 14.4189 13.0819 14.7249 13.0819 15.2829C13.0819 15.8499 12.6499 16.1559 12.0559 16.1559Z"
                  fill="white" />
              </svg>
              <span class="text-gray-200">07/12/2023</span> <span class="text-gray-200">12:00PM</span>
            </div>
            <div class="">
              <h1 class="text-2xl text-white py-0 my-0 leading-snug font-medium">
                Hello Dr Amos!
              </h1>
              <p class="text-white py-0 my-0 font-light">Have a nice day</p>
            </div>
          </div>
          <div> <img src="@/assets/icons/stripe1.svg" class="absolute top-3 right-3" alt=""></div>
          <div> <img src="@/assets/icons/stripe2.svg" class="absolute top-3 left-3" alt=""></div>
          <div class="mt-6">
            <img src="@/assets/icons/tele-doctor.svg" class="absolute -top-4 right-20 h-60" alt="">
          </div>
        </div>
        <div class="lg:hidden bg-[#0A8525FC] rounded-lg relative">
          <h1 class="text-white text-center text-2xl pt-4">
            Medical Tip
          </h1>
          <ssr-carousel show-dots :autoplay-delay="15" :slides-per-page="1" loop
            class="md:w-10/12 w-11/12 mx-auto rounded-lg bg-[#0A8525FC]">
            <div v-for="(itm, idx) in carousels" :key="idx" :index="idx + 1" class="" data-aos="fade-left"
              data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
              <div class="flex justify-center items-center flex-col gap-y-4 p-2 w-10/12 mx-auto">
                <h1 class="md:text-3x font-medium text-2xl text-center text-white">
                  {{ itm.title }} sss
                </h1>
                <p class="text-center leading-loose font-light text-base md:text-lg  text-white">
                  {{ itm.description }}
                </p>
              </div>
            </div>
          </ssr-carousel>
          <div> <img src="@/assets/icons/stripe1.svg" alt="" class="absolute top-0 right-0"></div>
          <div><img src="@/assets/icons/stripe2.svg" alt="" class="absolute bottom-0 left-0"></div>
        </div>

        <appointnment-section />
        <patient-overview />
      </div>
      <div class="space-y-6 sticky top-0 pb-10">
        <div href="#" class="relative block overflow-hidden rounded-lg bg-white border border-gray-100">
          <!-- <calender-section /> -->
          <!-- <client-only><date-picker placeholder="MM/DD/YYYY" format="MM/dd/yyyy" v-model="date_today" /></client-only> -->
          <updated-calendar />
        </div>
        <upcoming-consultations />

        <div href="#" class="relative block overflow-hidden rounded-lg border bg-white border-gray-100">
          <div class="border-b border-gray-100">
            <div class="px-6 flex justify-between items-center pt-4">
              <p class="font-semibold">
                Messages
              </p>
              <p class="text-[#082280] border-b font-semibold border-[#082280] text-sm">See all</p>
            </div>
          </div>
          <div class="p-4 sm:p-6 lg:p-8 space-y-10">
            <div v-for="itm in 3" :key="itm" class="flex justify-between items-center">
              <div class="flex justify-between items-center gap-x-3">
                <img alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="h-10 w-10 rounded-full object-cover shadow-sm">
                <div class="h-10">
                  <p class="text-sm font-medium mb-0">
                    Dr. Chuks
                  </p>
                  <span class="italic text-sm font-light">
                    New Message....
                  </span>
                </div>
              </div>
              <div>
                <img src="@/assets/icons/dropdown.svg" alt="">
              </div>
            </div>
          </div>
        </div>

        <!-- <div
          class="relative block overflow-hidden rounded-lg border space-y-6 bg-white border-gray-100 p-4 sm:p-6 lg:p-8">
          <p class="text-center">
            Medical Tip
          </p>
          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 class="text-[#1E1E1E] font-normal text-center leading-loose text-[14px]">
                <strong>Description:</strong> Proper handwashing, using soap and water for at least 20 seconds, is a
                vital tool in
                preventing infections. Keep your hands clean to protect yourself and others.
              </h3>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel'
// import ssrCarouselCss from 'vue-ssr-carousel/index.css'
// import CalenderSection from '@/components/CalenderSection.vue'
import UpdatedCalendar from '@/components/UpdatedCalender.vue'
export default {
  components: {
    // CalenderSection,
    SsrCarousel, UpdatedCalendar
  },
  data() {
    return {
      date_today: new Date(),
      carousels: [
        {
          title: 'Hand Hygiene Essentials',
          description: 'Description: Proper handwashing, using soap and water for at least 20 seconds, is a vital tool in preventing infections. Keep your hands clean to protect yourself and others.'
        },
        {
          title: 'Tracking Tools',
          description: 'The app will provide tracking tools to help users monitor their pregnancy and postpartum progress, including weight tracking, contraction timing, and breastfeeding tracker.'
        },
        {
          title: 'Educational Resources',
          description: 'The app will provide educational resources to help users learn about maternal health, including articles, videos, and podcasts.'
        },
        {
          title: 'Community Support',
          description: 'The app will provide a community support feature to help users connect with other users, share experiences, and receive support.'
        },
        {
          title: 'Appointment Scheduler',
          description: 'The app will allow users to schedule and manage their appointments with healthcare providers, such as doctors and midwives.'
        }
      ]
    }
  },
  head: {
    title: 'Community | Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home'
      }
    ]
  }
}
</script>

<style></style>

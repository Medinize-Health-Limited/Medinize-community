<template>
  <div class="mt-10">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 space-y-4 md:space-y-0">
      <div class="rounded-lg lg:col-span-2 top-10 space-y-4">
        <div class="rounded-6xl hidden bg-[#0A8525FC] space-y-8 md:space-y-6 p-6 lg:flex justify-between items-center relative h-[390px]">
          <div class="space-y-6">
            <p class="text-white text-base font-medium">
              Urgent!
            </p>
            <div class="text-4xl text-white leading-snug font-medium md:w-7/12">
              Do you need a Doctor
              to attend to you asap?
              Consult our Doctors now
            </div>
            <div>
              <nuxt-link to="/appointments" class="text-[#0A7D08] no-underline mt-6 text-sm rounded-md font-semibold px-3 bg-white py-2.5 w-6/12 md:w-3/12">
                Consult a Doctor
              </nuxt-link>
            </div>
          </div>
          <div> <img src="@/assets/icons/stripe1.svg" class="absolute top-0 right-0" alt=""></div>
          <div> <img src="@/assets/icons/stripe2.svg" class="absolute top-0 left-0" alt=""></div>
          <div class="mt-6">
            <img src="@/assets/icons/tele-doctor.svg" class="absolute -top-16 right-0" alt="">
          </div>
        </div>
        <div class="lg:hidden bg-[#0A8525FC] rounded-lg relative">
          <h1 class="text-white text-center text-2xl pt-4">
            Medical Tip
          </h1>
          <ssr-carousel
            show-dots
            :autoplay-delay="15"
            loop
            class="md:w-10/12 w-11/12 mx-auto rounded-lg bg-[#0A8525FC]"
          >
            <div
              v-for="(itm, idx) in carousels"
              :key="idx"
              :index="idx + 1"
              class=""
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div class="flex justify-center items-center flex-col gap-y-4 p-6 w-10/12 mx-auto">
                <h1 class="md:text-3x font-medium text-2xl text-center text-white">
                  {{ itm.title }}
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
      </div>
      <div class="space-y-6 sticky top-0 pb-10">
        <div href="#" class="relative block overflow-hidden rounded-lg bg-white border border-gray-100">
          <!-- <calender-section /> -->
          <updated-calendar />
        </div>

        <div href="#" class="relative block overflow-hidden rounded-lg border bg-white border-gray-100">
          <p class="border-b py-4 pl-6">
            Messages
          </p>
          <div class="p-4 sm:p-6 lg:p-8 space-y-10">
            <div v-for="itm in 3" :key="itm" class="flex justify-between items-center">
              <div class="flex justify-between items-center gap-x-3">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="h-10 w-10 rounded-full object-cover shadow-sm"
                >
                <div>
                  <p class="font-medium">
                    Dr. Chuks
                  </p>
                  <p class="italic font-light">
                    New Message....
                  </p>
                </div>
              </div>
              <div>
                <img src="@/assets/icons/dropdown.svg" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="relative block overflow-hidden rounded-lg border space-y-6 bg-white border-gray-100 p-4 sm:p-6 lg:p-8">
          <p class="text-center">
            Medical Tip
          </p>
          <!-- <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> -->

          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 class="text-[#1E1E1E] font-normal text-center leading-loose text-[14px]">
                Description: Proper handwashing, using soap and water for at least 20 seconds, is a vital tool in
                preventing infections. Keep your hands clean to protect yourself and others.
              </h3>
            </div>
          </div>
        </div>
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
  data () {
    return {
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

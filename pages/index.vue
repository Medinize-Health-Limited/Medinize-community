<template>
  <div class="mt-10">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 space-y-4 md:space-y-0">
      <div class="rounded-lg lg:col-span-2 top-10 space-y-4">
        <div class="rounded-md bg-[#0A8525FC] space-y-8 md:space-y-6 p-6">
          <h1 class="text-white font-light">
            Urgent!
          </h1>
          <div class="text-xl text-white leading-relaxed font-medium md:w-1/2">
            Do you need a Doctor
            to attend to you asap?
            Consult our Doctors now
          </div>
          <button class="text-[#0A7D08] bg-white text-sm rounded-md py-3 w-6/12 md:w-4/12">
            Consult a Doctor
          </button>
        </div>
        <appointnment-section />
      </div>
      <div class="rounded-lg bg-white space-y-6 sticky top-0 pb-10">
        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100">
          <calender-section />
        </div>

        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100">
          <p class="border-b py-4 pl-6">
            Messages
          </p>
          <div class="p-4 sm:p-6 lg:p-8 space-y-10">
            <div v-for="itm in 3" :key="itm" class="flex justify-between items-center">
              <div class="flex justify-between items-center gap-x-3">
                <img alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="h-10 w-10 rounded-full object-cover shadow-sm">
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

        <div class="relative block overflow-hidden rounded-lg border space-y-6 border-gray-100 p-4 sm:p-6 lg:p-8">
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
import CalenderSection from '../components/CalenderSection.vue'
export default {
  components: { CalenderSection },
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

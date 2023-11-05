<template>
  <main class="md:pr-10 w-11/12 mx-auto md:w-full pb-6 md:pb-0">
    <section class="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-6 items-stretch md:pt-20 pt-10">
      <div class="cursor-pointer">
        <div class="flex justify-center items-center flex-col space-y-4 rounded-lg bg-white p-8 ring-gray-50 h-full">
          <div><img src="@/assets/img/consult.svg" alt=""></div>
          <h3 class="text-center text-gray-800 font-black tracking-tight">
            Consult a Doctor
          </h3>
          <p class="text-xs text-gray-800 text-center font-light">
            Talk about your health concerns and schedule appointments
          </p>
        </div>
      </div>

      <div class="cursor-pointer">
        <div class="flex justify-center items-center flex-col space-y-4 rounded-lg bg-white p-8 ring-gray-50 h-full">
          <div><img src="@/assets/img/locate.svg" alt=""></div>
          <h3 class="text-center text-gray-800 font-black tracking-tight">
            Locate a Medical Facility
          </h3>
          <p class="text-xs text-gray-800 text-center font-light">
            Locate clinics, hospitals, labs, and pharmacies
          </p>
        </div>
      </div>

      <div class="cursor-pointer">
        <div class="flex justify-center items-center flex-col space-y-4 rounded-lg bg-white p-8 ring-gray-50 h-full">
          <div><img src="@/assets/img/book.svg" alt=""></div>
          <h3 class="text-center text-gray-800 font-black tracking-tight">
            Book an Ambulance
          </h3>
          <p class="text-xs text-gray-800 text-center font-light">
            Request an ambulance for delivery of urgent treatment
          </p>
        </div>
      </div>

      <div class="cursor-pointer">
        <div class="flex justify-center items-center flex-col space-y-4 rounded-lg bg-white p-8 ring-gray-50 h-full">
          <div><img src="@/assets/img/dictionary.svg" alt=""></div>
          <h3 class="text-center text-gray-800 font-black tracking-tight">
            Medical Dictionary
          </h3>
          <p class="text-xs text-gray-800 text-center font-light">
            Find the meaning of medical terms
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'dashboardLayout'
}
</script>

<style></style>

<template>
  <main class="md:pr-10 w-11/12 mx-auto md:w-full pb-6 md:pb-0">
    <section class="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-6 items-stretch mt-10">
      <nuxt-link to="/appointments" class="cursor-pointer border-[0.4px] rounded-md shadow-sm bg-white no-underline">
        <div class="flex justify-center items-center flex-col space-y-4 rounded-lg bg-white p-6 ring-gray-50 h-full">
          <div><img class="h-14 w-14" src="@/assets/icons/consult.svg" alt=""></div>
          <h3 class="text-center text-gray-800 font-medium text-lg tracking-tight">
            Consult a Doctor
          </h3>
          <p class="text-sm text-gray-800 text-center font-light">
            Talk about your health concerns and schedule appointments
          </p>
        </div>
      </nuxt-link>

      <nuxt-link to="/locate" class="cursor-pointer border-[0.4px] rounded-md shadow-sm bg-white no-underline">
        <div class="flex justify-center items-center flex-col space-y-4 rounded-lg bg-white p-6 ring-gray-50 h-full">
          <div><img class="h-14 w-14" src="@/assets/icons/locate.svg" alt=""></div>
          <h3 class="text-center text-gray-800 font-medium text-lg tracking-tight">
            Locate a Medical Facility
          </h3>
          <p class="text-sm text-gray-800 text-center font-light">
            Locate clinics, hospitals, labs, and pharmacies
          </p>
        </div>
      </nuxt-link>

      <nuxt-link to="#" class="cursor-pointer border-[0.4px] rounded-md shadow-sm bg-white no-underline">
        <div class="flex justify-center items-center flex-col space-y-4 rounded-lg bg-white p-6 ring-gray-50 h-full">
          <div><img class="h-14 w-14" src="@/assets/icons/book.svg" alt=""></div>
          <h3 class="text-center text-gray-800 font-medium text-lg tracking-tight">
            Book an Ambulance
          </h3>
          <p class="text-sm text-gray-800 text-center font-light">
            Request an ambulance for delivery of urgent treatment
          </p>
        </div>
      </nuxt-link>

      <nuxt-link to="#" class="cursor-pointer border-[0.4px] rounded-md shadow-sm bg-white no-underline">
        <div class="flex justify-center items-center flex-col space-y-4 rounded-lg bg-white p-6 ring-gray-50 h-full">
          <div><img class="h-14 w-14" src="@/assets/icons/dictionary.svg" alt=""></div>
          <h3 class="text-center text-gray-800 font-medium text-lg tracking-tight">
            Medical Dictionary
          </h3>
          <p class="text-sm text-gray-800 text-center font-light">
            Find the meaning of medical terms
          </p>
        </div>
      </nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'dashboardLayout'
}
</script>

<style></style>

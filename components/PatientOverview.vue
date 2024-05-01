<template>
  <main class="border shadow-sm p-6 bg-white rounded-md md:p-10 space-y-3">
    <section class="lg:flex justify-between items-center px-6">
      <h1 class="text-base lg:text-xl font-semibold">Patient Overview</h1>
      <div class="flex justify-between items-center gap-x-6">
        <div class="flex items-center gap-x-2">
          <span class="bg-[#8A7EF0] h-3 w-3 rounded-full"></span>
          <span class="text-sm">Male</span>
        </div>
        <div class="flex items-center gap-x-2">
          <span class="bg-[#7CE5C1] h-3 w-3 rounded-full"></span>
          <span class="text-sm">Female</span>
        </div>
        <div>
          <select class="border px-3 py-2.5 text-sm rounded-md border-gray-100">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
    </section>
    <section>
      <PatientsOverview />
    </section>
  </main>
</template>

<script>
import PatientsOverview from '@/components/charts/ActivitiesChart.vue'
export default {
  components: {
    PatientsOverview
  }
}
</script>

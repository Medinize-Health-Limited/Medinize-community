<template>
  <main>
    <section v-if="!selectedOption" class="lg:pt-32 space-y-6">
      <div class="flex justify-center items-center flex-col lg:gap-y-3 gap-y-2">
        <h1 class="font-semibold text-2xl text-[#0C9609]">
          Join Medinize
        </h1>
        <p class="text-[#7C7C7C] font-medium text-center text-xs lg:text-base">
          Select the category you belong and create an account
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div class="rounded-lg bg-green-500 flex justify-center h-44 lg:h-60 items-center cursor-pointer"
          @click="handleSelectedSignup('patient')">
          <p class="text-white bg-[#077920FC] py-2.5 px-6 rounded-lg border border-white">
            Patient
          </p>
        </div>
        <div class="rounded-lg bg-green-500 flex justify-center h-44 lg:h-60 items-center cursor-pointer"
          @click="handleSelectedSignup('professional')">
          <p class="text-white bg-[#077920FC] py-2.5 px-6 rounded-lg border border-white">
            Professional
          </p>
        </div>
      </div>
    </section>
    <professional-signup v-if="selectedOption === 'professional'" />
    <PatientSignup v-if="selectedOption === 'patient'" />
  </main>
</template>

<script>
import PatientSignup from '@/components/PatientSignup'
export default {
  components: {
    PatientSignup
  },
  layout: 'auth',
  data() {
    return {
      selectedOption: ''
    }
  },
  methods: {
    handleSelectedSignup(itm) {
      this.selectedOption = itm
      this.$router.push({ path: '/signup-options', query: { user: itm } })
    }
  }
}
</script>

<template>
  <main>
    <section v-if="!selectedOption" class="lg:pt-32 space-y-6 max-w-xl mx-auto pt-16">
      <div class="flex justify-center items-center flex-col lg:gap-y-3 gap-y-2">
        <h1 class="font-semibold text-3xl text-[#14011B] tetx-">
          Let’s get you started
        </h1>
        <p class="text-[#7C7C7C] font-medium text-center text-sm lg:text-base">
          Choose the account type that suits your purpose for joining Medinize
        </p>
      </div>
      <div class="space-y-6">
        <div class="group">
          <div
            class="border border-gray-100 rounded-lg p-3 space-y-3 group-hover:bg-[#F5FFF5] cursor-pointer hover:border-[#85CA84] hover:border"
            @click="handleSelectedSignup('patient')">
            <svg width="28" height="28" viewBox="0 0 28 28" stroke="#888888" fill="#888888"
              class="group-hover:fill-[#85CA84]" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.0013 4.00002C15.8346 4.00002 17.3346 5.50002 17.3346 7.33335C17.3346 9.16669 15.8346 10.6667 14.0013 10.6667C12.168 10.6667 10.668 9.16669 10.668 7.33335C10.668 5.50002 12.168 4.00002 14.0013 4.00002ZM14.0013 20.6667C18.5013 20.6667 23.668 22.8167 24.0013 24H4.0013C4.38464 22.8 9.51797 20.6667 14.0013 20.6667ZM14.0013 0.666687C10.318 0.666687 7.33463 3.65002 7.33463 7.33335C7.33463 11.0167 10.318 14 14.0013 14C17.6846 14 20.668 11.0167 20.668 7.33335C20.668 3.65002 17.6846 0.666687 14.0013 0.666687ZM14.0013 17.3334C9.5513 17.3334 0.667969 19.5667 0.667969 24V27.3334H27.3346V24C27.3346 19.5667 18.4513 17.3334 14.0013 17.3334Z"
                fill="#888888" />
            </svg>
            <p class="font-semibold group-hover:text-[#0A7D08]">
              Personal Account
            </p>
            <p class="font-light leading-relaxed text-sm group-hover:text-[#828282]">
              If you're seeking healthcare services, advice, or support from our
              network of professionals, select this option. You'll be able to
              connect with professionals and access resources to support your
              health and wellness journey.
            </p>
          </div>
        </div>
        <div class="group">
          <div
            class="border border-gray-100 rounded-lg p-3 space-y-3 group-hover:bg-[#F5FFF5] cursor-pointer hover:border-[#85CA84] hover:border"
            @click="handleSelectedSignup('professional')">
            <svg width="34" height="32" viewBox="0 0 34 32" stroke="#888888" fill="#888888"
              class="group-hover:fill-[#85CA84]" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.334 6.83335V3.50002H13.6673V6.83335H20.334ZM3.66732 10.1667V28.5H30.334V10.1667H3.66732ZM30.334 6.83335C32.184 6.83335 33.6673 8.31669 33.6673 10.1667V28.5C33.6673 30.35 32.184 31.8334 30.334 31.8334H3.66732C1.81732 31.8334 0.333984 30.35 0.333984 28.5L0.350651 10.1667C0.350651 8.31669 1.81732 6.83335 3.66732 6.83335H10.334V3.50002C10.334 1.65002 11.8173 0.166687 13.6673 0.166687H20.334C22.184 0.166687 23.6673 1.65002 23.6673 3.50002V6.83335H30.334Z"
                fill="#888888" />
            </svg>

            <p class="font-semibold group-hover:text-[#0A7D08]">
              Professional Account
            </p>
            <p class="font-light leading-relaxed text-sm group-hover:text-[#828282]">
              If you're a licensed healthcare provider interested in offering
              medical consultations and services through our platform, select
              this option. You'll gain access to tools and features designed for
              medical professionals to connect with patients online.
            </p>
          </div>
        </div>
        <div class="w-full pt-10">
          <button class="text-white bg-[#064B05] rounded-md py-2.5 w-full">
            Proceed
          </button>
        </div>
        <div class="flex justify-center items-center">
          <p class="font-light">
            Or
            <span class="text-[#064B05] font-semibold"><nuxt-link to="/login">login</nuxt-link></span>
            if you already have an existing account
          </p>
        </div>
        <!-- <div class="rounded-lg bg-green-500 flex justify-center h-44 lg:h-60 items-center cursor-pointer"
          @click="handleSelectedSignup('patient')">
          <p class="text-white bg-[#077920FC] py-2.5 px-6 rounded-lg border border-white">
            Patient
          </p>
        </div> -->
        <!-- <div class="rounded-lg bg-green-500 flex justify-center h-44 lg:h-60 items-center cursor-pointer"
          @click="handleSelectedSignup('professional')">
          <p class="text-white bg-[#077920FC] py-2.5 px-6 rounded-lg border border-white">
            Professional
          </p>
        </div> -->
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

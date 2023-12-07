<template>
  <main>
    <div class="grid mt-4 md:mt-10 mb-4">
      <form class="flex justify-center items-center flex-col space-y-8 w-11/12 mx-auto lg:w-[500px]" @submit.prevent="handleSignup">
        <div>
          <h1 class="text-2xl text-[#0A7D08] font-bold text-center">
            Create an account with Medinize
          </h1>
          <p class="text-xs md:text-sm text-gray-500 text-center">
            Hey! Set up your account to embark on this journey
          </p>
        </div>
        <div class="w-full">
          <label for="fname" class="sr-only" />
          <input id="fname" v-model="form.first_name" type="text" class="py-3 rounded-md w-full px-3 border text-sm outline-none border-gray-300" placeholder="Enter first name">
        </div>
        <div class="w-full">
          <label for="lname" class="sr-only" />
          <input id="lname" v-model="form.last_name" type="text" class="py-3 rounded-md w-full px-3 border text-sm outline-none border-gray-300" placeholder="Enter last name">
        </div>
        <div class="w-full">
          <label for="email" class="sr-only" />
          <input id="email" v-model="form.email" type="email" class="py-3 rounded-md w-full text-sm px-3 border outline-none border-gray-300" placeholder="Enter Email address">
        </div>
        <div class="w-full">
          <label for="phone" class="sr-only" />
          <input id="phone" v-model="form.phone_number" type="tel" class="py-3 rounded-md w-full text-sm px-3 border outline-none border-gray-300" placeholder="Enter phone number">
        </div>
        <div class="w-full relative">
          <label for="password" class="sr-only" />
          <input id="password" v-model="form.password" :type="is_password_eye_open ? 'text' : 'password'" class="py-3 text-sm rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Enter Password">
          <div class="absolute right-6 top-4 ">
            <img :src="require(`@/assets/icons/${togglePasswordEye}.svg`)" alt="" class="h-6 w-6 cursor-pointer" @click="is_password_eye_open = !is_password_eye_open">
          </div>
        </div>
        <div class="w-full">
          <button
            :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
            :disabled="!isFormValid || processing"
            class="text-white text-xs md:text-sm md:py-3 py-3 rounded-lg text-center w-full  bg-[#0A7D08]"
          >
            {{ processing ? 'processing...' : 'Create an Account' }}
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
const { countryCodeEmoji } = require('country-code-emoji')
const lookup = require('country-code-lookup')
const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
export default {
  layout: 'auth',
  data () {
    return {
      is_password_eye_open: false,
      is_confirm_password_eye_open: false,
      processing: false,
      errorMessage: '',
      showPassword: false,
      selected: null,
      countryFlag: '',
      options: [],
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: ''
      }
    }
  },
  computed: {
    togglePasswordEye () {
      return !this.is_password_eye_open ? 'eye-close' : 'eye-open'
    },
    toggleConfirmPasswordEye () {
      return !this.is_confirm_password_eye_open ? 'eye-close' : 'eye-open'
    },
    countries () {
      const list = countries.getNames('en', { select: 'alias' })
      return Object.keys(list).map(key => ({ value: key, label: list[key] }))
    },
    isFormValid () {
      return !!(this.form?.first_name?.length &&
        this.form?.last_name?.length &&
        this.form?.email?.length &&
        this.form?.phone_number?.length &&
        this.form?.password?.length)
    }
  },
  watch: {
    selected () {
      const dialCodeLookUp = lookup.byInternet(this.selected)
      console.log(dialCodeLookUp)
      const response = countryCodeEmoji(this.selected)
      this.countryFlag = response
    }
  },
  methods: {
    handleSignup () {
      this.processing = true
      this.$axios
        .post('https://medinize-apis.onrender.com/signup/', this.form)
        .then((res) => {
          this.$toastr.s('Signup was successful')
          this.$router.push('/')
        })
        .catch((error) => {
          this.errorMessage = error && error?.response?.data?.error
          this.$toastr.e(this.errorMessage)
        })
        .finally(() => {
          this.processing = false
        })
    }
  }
}
</script>

<template>
  <main>
    <div class="grid mt-32 max-w-2xl mx-auto">
      <form class="flex justify-center items-center flex-col space-y-8 w-11/12 mx-auto" @submit.prevent="handleLogin">
        <div>
          <h1 class="text-2xl text-[#0A7D08] font-bold text-center">
            Sign in to Medinize
          </h1>
          <p class="text-sm text-gray-500 text-center">
            Welcome back! Please enter your details.
          </p>
          <div class="flex justify-center items-center">
            <label for="Toggle1" class="inline-flex items-center space-x-4 cursor-pointer text-gray-600">
              <span>Patient</span>
              <span class="relative">
                <input id="Toggle1" type="checkbox" class="hidden peer" @change="handleChange">
                <div class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-[#0A7D08]" />
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-white" />
              </span>
              <span>Professional</span>
            </label>
          </div>
        </div>
        <div class="w-full">
          <input v-model="form.email" type="email"
            class="py-3 text-sm rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Email address">
        </div>
        <div class="w-full relative">
          <input v-model="form.password" :type="is_password_eye_open ? 'text' : 'password'"
            class="py-3 text-sm rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Password">
          <div class="absolute right-6 top-4 ">
            <img :src="require(`@/assets/icons/${togglePasswordEye}.svg`)" alt="" class="h-6 w-6 cursor-pointer"
              @click="is_password_eye_open = !is_password_eye_open">
          </div>
        </div>
        <div class="w-full">
          <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
            :disabled="!isFormValid || processing"
            class="text-white text-sm md:py-3 py-3 rounded-lg text-center w-full  bg-[#0A7D08]">
            {{ processing ? 'processing...' : 'Login' }}
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      is_password_eye_open: false,
      processing: false,
      errorMessage: '',
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(this.form.email && this.form.password)
    },
    togglePasswordEye() {
      return !this.is_password_eye_open ? 'eye-close' : 'eye-open'
    }
  },
  methods: {
    handleChange(e) {
      const status = e.target.checked
      if (status) {
        this.$router.push({ to: this.$route.path, query: { type: 'professional' } })
      } else {
        this.$router.push({ to: this.$route.path, query: { type: 'patient' } })
      }
    },
    handleLogin() {
      this.processing = true
      const lookupUrl = {
        patient: 'https://medinizebackend.onrender.com/patient/login/',
        professional: 'https://medinizebackend.onrender.com/professional/login/'
      }
      this.$axios.post(lookupUrl[this.$route.query.type], this.form).then((res) => {
        if (process.client) {
          localStorage.setItem('user', JSON.stringify(res.data))
        }
        this.$toastr.s('Welcome back')
        this.$router.push('/dashboard')
      }).catch((error) => {
        this.errorMessage = error && error?.response?.data?.error
        this.$toastr.e(this.errorMessage)
      }).finally(() => {
        this.processing = false
      })
    }
  },
  mounted() {
    // Get the current query parameters
    const currentParams = new URLSearchParams(window.location.search);

    // Add or update your desired query parameter
    currentParams.set('type', 'patient');

    // Construct the updated URL with the modified query parameters
    const updatedUrl = `${window.location.pathname}?${currentParams.toString()}`;

    // Replace the current URL with the updated one
    window.history.replaceState({}, '', updatedUrl);
  }
}
</script>

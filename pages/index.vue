<template>
  <main>
    <div class="grid mt-32">
      <form class="flex justify-center items-center flex-col space-y-8 w-11/12 mx-auto" @submit.prevent="handleLogin">
        <div>
          <h1 class="text-2xl text-[#0A7D08] font-bold text-center">
            Sign in to Medinize
          </h1>
          <p class="text-sm text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>
        <div class="w-full">
          <input v-model="form.email" type="email" class="py-3 text-sm rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Email address">
        </div>
        <div class="w-full relative">
          <input v-model="form.password" :type="is_password_eye_open ? 'text' : 'password'" class="py-3 text-sm rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Password">
          <div class="absolute right-6 top-4 ">
            <img :src="require(`@/assets/icons/${togglePasswordEye}.svg`)" alt="" class="h-6 w-6 cursor-pointer" @click="is_password_eye_open = !is_password_eye_open">
          </div>
        </div>
        <div class="w-full">
          <button
            :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
            :disabled="!isFormValid || processing"
            class="text-white text-sm md:py-3 py-3 rounded-lg text-center w-full  bg-[#0A7D08]"
          >
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
  data () {
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
    isFormValid () {
      return !!(this.form.email && this.form.password)
    },
    togglePasswordEye () {
      return !this.is_password_eye_open ? 'eye-close' : 'eye-open'
    }
  },
  methods: {
    handleLogin () {
      this.processing = true
      this.$axios.post('https://geziwmna3v.us-west-2.awsapprunner.com/login/', this.form).then((res) => {
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
  }
}
</script>

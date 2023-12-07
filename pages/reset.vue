<template>
  <main>
    <div class="grid place-content-center place-items-center h-screen">
      <div v-if="!is_email_sent" class="flex justify-center items-center flex-col space-y-8 w-[500px]">
        <div>
          <h1 class="text-2xl text-[#0A7D08] font-bold text-center">
            Reset your Password
          </h1>
        </div>
        <div class="w-full relative">
          <label for="password" class="sr-only" />
          <input id="password" :type="is_password_eye_open ? 'text' : 'password'" class="py-3 rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Password">
          <div class="absolute right-6 top-4 ">
            <img :src="require(`@/assets/icons/${togglePasswordEye}.svg`)" alt="" @click="is_password_eye_open = !is_password_eye_open" class="h-6 w-6 cursor-pointer">
          </div>
        </div>
        <div class="w-full relative">
          <label for="confirmPassword" class="sr-only" />
          <input id="confirmPassword" :type="is_confirm_password_eye_open ? 'text' : 'password'" class="py-3 rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Password">
          <div class="absolute right-6 top-4 ">
            <img :src="require(`@/assets/icons/${toggleConfirmPasswordEye}.svg`)" @click="is_confirm_password_eye_open = !is_confirm_password_eye_open" alt="" class="h-6 w-6 cursor-pointer">
          </div>
        </div>
        <div class="w-full">
          <button class="text-white  bg-[#0A7D08] py-3 w-full rounded-full">
            Reset Password
          </button>
        </div>
      </div>
      <div v-else class="flex justify-center items-center flex-col space-y-8 w-[500px]">
        <div class="w-full">
          <img src="@/assets/img/reset-success.png" alt="">
        </div>
        <h1 class="text-lg text-gray-950">Congratulations!</h1>
        <p class="text-sm text-gray-500">Your password have been reset successfully</p>
        <div class="w-full">
          <nuxt-link to="/login" class="text-white  bg-[#0A7D08] py-3 w-full rounded-full">
            Back to Login
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'auth',
  data () {
    return {
      is_password_eye_open: false,
      is_confirm_password_eye_open: false
    }
  },
  computed: {
    togglePasswordEye () {
      return !this.is_password_eye_open ? 'eye-close' : 'eye-open'
    },
    toggleConfirmPasswordEye () {
      return !this.is_confirm_password_eye_open ? 'eye-close' : 'eye-open'
    }
  }
}
</script>


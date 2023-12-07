<template>
  <main>
    <div class="grid place-content-center place-items-center h-screen">
      <div v-if="!is_email_sent" class="flex justify-center items-center flex-col space-y-8 w-[500px]">
        <div>
          <h1 class="text-2xl text-[#0A7D08] font-bold text-center">
            Forget Password
          </h1>
          <p class="text-sm text-gray-500">
            Enter your email address to recover 😥
          </p>
        </div>
        <div class="w-full">
          <input type="email" class="py-3 rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Email address">
        </div>
        <div class="w-full">
          <button class="text-white  bg-[#0A7D08] py-3 w-full rounded-full">
            Reset Password
          </button>
        </div>
      </div>
      <div v-else class="flex justify-center items-center flex-col space-y-8 w-[500px]">
        <div>
          <h1 class="text-2xl text-[#0A7D08] font-bold text-center">
            Forget Password
          </h1>
          <p class="text-sm text-gray-500">
            We sent a password reset link to kel....@gmail.com. Click on the link in your email to reset your password.
          </p>
        </div>
        <div class="w-full">
          <img src="@/assets/img/success.png" alt="">
        </div>
        <div class="w-full">
          <button class="text-white  bg-[#0A7D08] py-3 w-full rounded-full">
            Reset Password
          </button>
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
      is_email_sent: false
    }
  }
}
</script>

<template>
  <div class="flex justify-end items-end container mx-auto mt-6">
    <div class="flex items-center gap-x-3">
      <div v-if="$route.name === 'signup' || $route.name === 'signup-options'" class="flex items-center gap-x-3">
        <p class="text-gray-500 pt-3">
          Already have an account?
        </p>
        <div>
          <nuxt-link to="/" class="text-white bg-[#0A7D08] no-underline text-sm rounded-full px-6 py-2.5">
            Sign In
          </nuxt-link>
        </div>
      </div>
      <div v-if="$route.name === 'index'" class="flex items-center gap-x-3">
        <p class="text-gray-500 pt-3">
          Don't have an account?
        </p>
        <div>
          <nuxt-link to="/signup-options" class="text-white bg-[#0A7D08] no-underline text-sm rounded-full px-6 py-2.5">
            Sign Up
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

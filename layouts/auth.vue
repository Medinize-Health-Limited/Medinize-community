<template>
  <main class="app">
    <div class="flex justify-end items-end container mx-auto mt-6">
      <div class="flex items-center gap-x-3">
        <div v-if="$route.name === 'signup'" class="flex items-center gap-x-3">
          <p class="text-gray-500">
            Already have an account?
          </p>
          <div>
            <nuxt-link to="/" class="text-white bg-[#0A7D08] no-underline text-sm rounded-full px-6 py-2.5">
              Sign In
            </nuxt-link>
          </div>
        </div>
        <div v-if="$route.name === 'index'" class="flex items-center gap-x-3">
          <p class="text-gray-500">
            Don't have an account?
          </p>
          <div>
            <nuxt-link to="/signup" class="text-white bg-[#0A7D08] no-underline text-sm rounded-full px-6 py-2.5">
              Sign Up
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="w-11/12 lg:w-4/12 mx-auto">
      <Nuxt />
    </div>
  </main>
</template>

<script>
</script>

 <style>
.app {
  font-family: "Oxygen", sans-serif;
}
</style>

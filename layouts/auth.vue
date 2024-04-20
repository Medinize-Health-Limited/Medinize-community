<template>
  <main class="app">
    <AuthHeader />
    <div class="w-11/12 lg:w-4/12 mx-auto">
      <nuxt />
    </div>
  </main>
</template>

<script>
import AuthHeader from '@/components/AuthHeader.vue'
export default {
  components: {
    AuthHeader
  }
}
</script>

<style>
.app {
  font-family: "Oxygen", sans-serif;
}
</style>

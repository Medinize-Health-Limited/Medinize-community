<template>
  <main class="h-screen grid place-items-center bg-white">
    <div class="flex justify-center items-center flex-col space-y-8">
      <img src="@/assets/img/signup-success.png" alt="" class="h-48 w-48" />
      <div class="space-y-3 flex justify-center items-center flex-col">
        <h2 class="font-bold text-4xl">Thank you for signing up!</h2>
        <p class="text-gray-500 py-0 my-0 font-light">Medinize will endeavour to keep your privacy safe always. Welcome
          aboard.</p>
      </div>
      <div class="pt-6">
        <button class="text-white bg-[#064B05]  py-2.5 rounded-md px-6">Proceed to home</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'errorLayout'
}
</script>

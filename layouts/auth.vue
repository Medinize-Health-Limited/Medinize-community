<template>
  <main class="app z-50">
    <AuthHeader class="z-50" />
    <div class="w-11/12 mx-auto z-50">
      <nuxt class="z-50" />
    </div>
    <!-- <div class="z-0">
      <div class="flex justify-center items-center w-full inset-y-0 absolute  z-0">
        <svg width="2540" class="z-0" height="462" viewBox="0 0 2540 462" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1989_4592)">
            <path d="M0 0H2400V119.556L0 419.555V0Z" fill="#F5FFF5" />
            <path d="M2073 194.006L2539.67 135.653V206.764L2073 265.117V194.006Z" fill="#EBFFEB" />
            <path d="M1593 183.787L2273 98.4443V169.555L1593 254.898V183.787Z" fill="#D8FED7" />
            <path d="M1770.78 90.3522L2237.44 32V103.111L1770.78 161.463V90.3522Z" fill="#BCCAFB" />
            <path d="M479 298.463L945.667 240.11V311.221L479 369.574V298.463Z" fill="#EBFFEB" />
            <path d="M310.109 390.672L776.776 332.32V403.431L310.109 461.783V390.672Z" fill="#BCCAFB" />
          </g>
          <defs>
            <clipPath id="clip0_1989_4592">
              <rect width="2540" height="462" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div> -->
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

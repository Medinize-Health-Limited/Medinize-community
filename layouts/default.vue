<template>
  <main>
    <LoadSpinner v-if="showHideSpinner" />
    <div class="relative w-full">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-2.5/12 h-full md:sticky top-0 hidden lg:flex">
          <SidebarSection />
        </div>
        <div class="w-9.5/12 h-full w-full">
          <navigation-bar-section class="" @open="openMobileSidebar" />
          <div class="md:px-10 px-3">
            <nuxt />
          </div>
        </div>
      </div>
      <!-- <mobile-sidebar v-if="toggleSidebar" class="fixed top-0  z-50 w-full md:hidden" @close="closeMobileSidebar" /> -->
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import LoadSpinner from '@/components/LoadSpinner.vue'
import SidebarSection from '@/components/SidebarSection.vue'
import MobileSidebar from '@/components/MobileSidebar.vue'
export const GlobalEventEmitter = new Vue()
export default {
  components: {
    SidebarSection,
    MobileSidebar,
    LoadSpinner
  },
  data () {
    return {
      toggleSidebar: false,
      showHideSpinner: true
    }
  },
  head: {
    title: 'Medinize Community',
    bodyAttrs: {
      class: 'font-sans leading-normal tracking-normal'
    }
  },
  watch: {
    '$route' () {
      this.toggleSidebar = !this.toggleSidebar
    }
  },
  beforeCreate () {
    this.showHideSpinner = true
  },
  mounted () {
    setTimeout(() => {
      this.showHideSpinner = false
    }, 3000)
    const user = window.localStorage.getItem('user')
    if (user === null) {
      this.$router.push('/')
    }
  },
  created () {
    this.$nuxt.$on('toggle', () => {
      this.showHideSpinner = false
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('toggle')
  },
  methods: {
    closeMobileSidebar () {
      this.toggleSidebar = false
    },
    openMobileSidebar () {
      this.toggleSidebar = true
    }
  }
}
</script>

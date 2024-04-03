<template>
  <div class="flex h-screen flex-col justify-between border-e bg-white">
    <div class="">
      <span class="grid place-content-center pb-2">
        <img src="~/assets/img/logo.png" class="-ml-8" alt="logout icon">
      </span>

      <ul class="-mt-4">
        <li v-for="(item, index) in sidebarItems" :key="index" class="pr-6 rounded-md">
          <nuxt-link :to="item.path" :class="[item.path === $route.path ? 'bg-green-100' : '']" href=""
            class="px-4 py-3 text-sm font-light text-gray-700 flex justify-between items-center no-underline">
            <div class="flex items-center gap-x-2 w-[100%]">
              <img :src="require(`~/assets/icons/${item.icon}.svg`)" alt="">
              <span> {{ item.name }}</span>
            </div>
            <div v-if="item.name === 'Communities'" class="relative inline-block text-left">
              <div>
                <button id="menu-button" type="button"
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  aria-expanded="true" aria-haspopup="true">
                  Options
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#CEEACE] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <nuxt-link id="menu-item-0" to="/"
                    class="text-gray-700 space-x-3 no-underline group flex items-center px-4 py-2 text-sm"
                    role="menuitem" tabindex="-1">
                    <img src="~/assets/img/repro-active.png" class="h-6 w-6 mr-3 rounded-full" alt="logout icon">
                    ReproActive
                  </nuxt-link>
                  <nuxt-link id="menu-item-1" to="/"
                    class="text-gray-700 space-x-3 no-underline group flex items-center px-4 py-2 text-sm"
                    role="menuitem" tabindex="-1">
                    <img src="~/assets/img/sweet-life-cycle.png" class="h-6 w-6 mr-3 rounded-full" alt="logout icon">
                    SweetLife Circle
                  </nuxt-link>
                </div>
                <div class="py-1" role="none">
                  <nuxt-link id="menu-item-2" to="/"
                    class="text-gray-700 space-x-3 no-underline group flex items-center px-4 py-2 text-sm"
                    role="menuitem" tabindex="-1">
                    <img src="~/assets/img/brave-heart.png" class="h-6 w-6 mr-3 rounded-full" alt="logout icon">
                    BraveHeart
                  </nuxt-link>
                </div>
              </div>
            </div>

            <!-- <div v-if="item.name === 'Communities'"
              class="relative inline-block text-left w-full z-50 border-2 border-red-500">
              <div>
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="">
                <div
                  class="absolute right-0 left-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-green-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div class="py-1 w-full" role="none">
                    <nuxt-link id="menu-item-0" to="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                      tabindex="-1">
                      ReproActive
                    </nuxt-link>
                    <nuxt-link id="menu-item-1" to="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                      tabindex="-1">
                      SweetLife Circle
                    </nuxt-link>
                    <nuxt-link id="menu-item-2" to="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                      tabindex="-1">
                      BraveHeart
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div> -->
          </nuxt-link>
        </li>
      </ul>

      <div class="ml-14">
        <button class="text-red-500 font-medium flex items-center gap-x-2">
          <img src="~/assets/icons/logout.svg" alt="logout icon">
          <span> Logout </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCommunities } from '@/services/post'
export default {
  data() {
    return {
      user: null,
      loadingCommunities: false,
      communitiesGroups: [],
      sidebarItems: [
        {
          name: 'Home',
          icon: 'home',
          path: '/dashboard'
        },
        {
          name: 'Services',
          icon: 'services',
          path: '/dashboard/services'
        },
        {
          name: 'Appointments',
          icon: 'appointments',
          path: '/dashboard/appointments'
        },
        {
          name: 'Records',
          icon: 'records',
          path: '/dashboard/records'
        },
        {
          name: 'Medical Timeline',
          icon: 'medical-timeline',
          path: '/dashboard/medical-timelines'
        },
        {
          name: 'Order History',
          icon: 'order-history',
          path: '/dashboard/order-history'
        },
        {
          name: 'Wallet',
          icon: 'wallet',
          path: '/dashboard/wallet'
        },
        {
          name: 'Communities',
          icon: 'communities',
          path: '/dashboard/communities'
        },
        {
          name: 'Notifications',
          icon: 'notifications',
          path: '/dashboard/notifications'
        },
        {
          name: 'Settings',
          icon: 'settings',
          path: '/dashboard/settings'
        }
      ]
    }
  },
  mounted() {
    this.user = window.localStorage.getItem('user')
    if (this.user === null) {
      this.$router.push('/')
    }
    // this.fetchUser()
    this.loadCommunities()
  },
  methods: {
    async loadCommunities() {
      this.loadingCommunities = true
      try {
        const response = await getCommunities()
        this.communitiesGroups = response?.data?.community_groups
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingCommunities = false
      }
    }
  }
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: #444444 !important;
  font-weight: 500;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}
</style>

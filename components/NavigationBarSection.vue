<template>
  <main>
    <header class="bg-gray-50 z-50 py-4 flex justify-between items-center px-4">
      <div class="relative w-full">
        <input type="text" placeholder="Search everything"
          class="rounded-lg border pl-10 py-2.5 border-gray-400 lg:w-5/12 text-sm outline-none">
        <img src="@/assets/icons/search.svg" alt="avatar" class="absolute left-4 top-4">
      </div>
      <div>
        <img src="@/assets/img/avatar.png" alt="avatar" class="h-10 w-10 rounded-full hidden lg:block">
        <div v-b-toggle.sidebar-1 class="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </header>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow no-header width="500" backdrop z-index="1000">
      <section class="pr-6">
        <div class="flex justify-between items-center">
          <img src="@/assets/img/logo.png" class="h-20" alt="logo">
          <div v-b-toggle.sidebar-1 class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
        <div>
          <ul class="mt-6 space-y-2">
            <li v-for="(item, index) in sidebarItems" :key="index">
              <nuxt-link :to="item.path" :class="[item.path === $route.path ? 'bg-green-100' : '']" href=""
                class="px-4 py-3 text-sm font-light text-gray-700 rounded-md flex justify-between items-center no-underline">
                <div class="flex items-center gap-x-2">
                  <img :src="require(`~/assets/icons/${item.icon}.svg`)" alt="">
                  <span> {{ item.name }}</span>
                </div>
                <div v-if="item.name === 'Communities'"
                  class="flex justify-center items-center rounded-full bg-red-500 h-6 w-6">
                  <span class="text-white font-light text-center">{{ communitiesGroups ? communitiesGroups.length : '0'
                    }}</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-2 pl-10 hover:bg-gray-50" @click="handleLogout">
          <div> <img src="@/assets/icons/logout.svg" alt=""></div>

          <p class="font-bold text-red-500 mt-2">
            Sign Out
          </p>
        </div>
      </section>
    </b-sidebar>
  </main>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { getCommunities } from '@/services/post'
import 'sweetalert2/src/sweetalert2.scss'
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
          name: 'Communities',
          icon: 'communities',
          path: '/dashboard/communities'
        },
        {
          name: 'Services',
          icon: 'services',
          path: '/dashboard/services'
        },
        {
          name: 'Appointment',
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
    this.fetchUser()
    this.loadCommunities()
  },
  methods: {
    handleLogout() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.value) {
          window.open('https://medinize.netlify.app/', '_self')
        } else {
          this.$swal('Cancelled', "You're still logged in!", 'info')
        }
      })
    },
    fetchUser() {
      this.user = JSON.parse(window.localStorage.getItem('user'))
    },
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

<style></style>

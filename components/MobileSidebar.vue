<template>
  <div class="flex h-screen flex-col justify-between border-e bg-white bborder">
    <div class="px-4 py-6">
      <div class="flex items-center justify-between">
        <span
          class="grid h-10 w-32 place-content-center pb-2"
        >
          <img src="~/assets/icons/logo.svg" alt="logout icon">
        </span>
        <button class="font-bold text-gray-900 text-2xl" @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>

      <ul class="mt-6 space-y-2">
        <li v-for="(item, index) in sidebarItems" :key="index">
          <nuxt-link
            :to="item.path"
            :class="[item.path === $route.path ? 'bg-green-100' : '']"
            href=""
            class="px-4 py-3 text-sm font-light text-gray-700 rounded-md flex justify-between items-center"
          >
            <div class="flex items-center gap-x-2">
              <img :src="require(`~/assets/icons/${item.icon}.svg`)" alt="">
              <span> {{ item.name }}</span>
            </div>
            <div v-if="item.name === 'Communities'" class="flex justify-center items-center rounded-full bg-red-500 h-6 w-6">
              <span class="text-white font-light text-center">{{ communitiesGroups ? communitiesGroups.length : '0' }}</span>
            </div>
          </nuxt-link>
        </li>
      </ul>

      <div class="pt-10 pl-3">
        <button class="text-red-500 font-medium flex items-center gap-x-2" @click="handleLogout">
          <img src="~/assets/icons/logout.svg" class="cursor-pointer" alt="logout icon" @click="handleLogout">
          <span> Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
  data () {
    return {
      user: null,
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
  mounted () {
    this.user = window.localStorage.getItem('user')
    if (this.user === null) {
      this.$router.push('/')
    }
  },
  methods: {
    handleLogout () {
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

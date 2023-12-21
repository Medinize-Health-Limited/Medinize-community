<template>
  <main>
    <header class="bg-gray-50 z-50">
      <div class="px-4 py-2 pb-2 sm:px-6 lg:px-8 hidden md:block">
        <div class="mt-8">
          <p v-if="user" class="font-medium text-gray-900 mb-0!">
            Hi {{ user?.first_name }} {{ user?.last_name }},
          </p>
          <p v-else class="font-medium text-gray-900 mb-0!">
            Hi
          </p>

          <h1 class="text-2xl text-gray-900 font-medium">
            Welcome Back!
          </h1>
        </div>
      </div>
      <div class="flex justify-between items-center w-11/12 mx-auto md:hidden">
        <div>
          <button v-b-toggle.sidebar-1>
            <img src="@/assets/icons/hamburger.svg" class="cursor-pointer" alt="logo">
          </button>
        </div>
        <div>
          <img src="@/assets/img/logo.png" class="h-20" alt="logo">
        </div>
        <div>
          <img src="@/assets/icons/notifications.svg" class="bg-[#53B3DB] p-1 h-9 w-9 rounded-full" alt="logo">
        </div>
      </div>
    </header>
    <b-sidebar
      id="sidebar-1"
      title="Sidebar"
      shadow
      no-header
      width="500"
      backdrop
      z-index="1000"
    >
      <section class="pr-10">
        <div>
          <img src="@/assets/img/logo.png" class="h-20" alt="logo">
        </div>
        <div>
          <ul class="mt-6 space-y-2">
            <li v-for="(item, index) in sidebarItems" :key="index">
              <nuxt-link
                :to="item.path"
                :class="[item.path === $route.path ? 'bg-green-100' : '']"
                href=""
                class="px-4 py-3 text-sm font-light text-gray-700 rounded-md flex justify-between items-center no-underline"
              >
                <div class="flex items-center gap-x-2">
                  <img :src="require(`~/assets/icons/${item.icon}.svg`)" alt="">
                  <span> {{ item.name }}</span>
                </div>
                <div v-if="item.name === 'Communities' || item.name === 'Notifications'" class="flex justify-center items-center rounded-full bg-red-500 h-6 w-6">
                  <span class="text-white font-light text-center">2</span>
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
  mounted () {
    this.fetchUser()
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
    },
    fetchUser () {
      this.user = JSON.parse(window.localStorage.getItem('user'))
    }
  }
}
</script>

<style>

</style>

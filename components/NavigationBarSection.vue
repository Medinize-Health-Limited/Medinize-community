<template>
  <main>
    <header class="bg-gray-50 z-50 py-4 flex justify-between items-center px-4">
      <div class="relative w-full">
        <input type="text" placeholder="Search for anything"
          class="rounded-lg border pl-10 py-2.5 border-gray-400 lg:w-5/12 text-sm outline-none">
        <img src="@/assets/icons/search.svg" alt="avatar" class="absolute left-4 top-4">
      </div>
      <div>
        <!-- <img src="@/assets/img/avatar.png" alt="avatar" class="h-10 w-10 rounded-full hidden lg:block"> -->
        <div class="flex justify-between items-center gap-x-6 hidden lg:block">
          <svg width="81" height="42" viewBox="0 0 81 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="81" height="42" rx="21" fill="white" />
            <g filter="url(#filter0_d_1628_5739)">
              <circle cx="21" cy="21" r="16" fill="#F1F5FF" />
            </g>
            <defs>
              <filter id="filter0_d_1628_5739" x="3.6" y="4.6" width="34.8" height="34.8" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1628_5739" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1628_5739" result="shape" />
              </filter>
            </defs>
          </svg>

          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#53B3DB" />
            <path
              d="M15.5 25.25V18.5C15.5 17.3065 15.9741 16.1619 16.818 15.318C17.6619 14.4741 18.8065 14 20 14C21.1935 14 22.3381 14.4741 23.182 15.318C24.0259 16.1619 24.5 17.3065 24.5 18.5V25.25M15.5 25.25H24.5H15.5ZM15.5 25.25H14H15.5ZM24.5 25.25H26H24.5ZM19.25 27.5H20.75H19.25Z"
              fill="white" />
            <path
              d="M15.5 25.25V18.5C15.5 17.3065 15.9741 16.1619 16.818 15.318C17.6619 14.4741 18.8065 14 20 14C21.1935 14 22.3381 14.4741 23.182 15.318C24.0259 16.1619 24.5 17.3065 24.5 18.5V25.25M15.5 25.25H24.5M15.5 25.25H14M24.5 25.25H26M19.25 27.5H20.75"
              stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M20 14C20.4142 14 20.75 13.6642 20.75 13.25C20.75 12.8358 20.4142 12.5 20 12.5C19.5858 12.5 19.25 12.8358 19.25 13.25C19.25 13.6642 19.5858 14 20 14Z"
              stroke="white" stroke-width="1.5" />
            <circle cx="34.5" cy="6.5" r="4.5" fill="#E74D4D" />
          </svg>
        </div>
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
          name: 'Patients',
          icon: 'patients',
          path: '/dashboard/patients'
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

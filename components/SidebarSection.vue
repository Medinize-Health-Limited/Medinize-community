<template>
  <div class="flex h-screen flex-col justify-between border-e bg-white">
    <div class="">
      <span class="grid place-content-center pb-2">
        <img src="~/assets/img/logo.png" class="-ml-8" alt="logout icon">
      </span>

      <ul class="-mt-4">
        <li v-for="(item, index) in sidebarItems" :key="index" class="pr-6 rounded-md">
          <nuxt-link
            :to="item.path"
            :class="[item.path === $route.path ? 'bg-green-100' : '']"
            href=""
            class="px-4 py-3 text-sm font-light text-gray-700 flex justify-between items-center no-underline"
            @click.native="handleCommunitiesToggle(item)"
          >
            <div class="flex items-center gap-x-2 w-[100%]">
              <img :src="require(`~/assets/icons/${item.icon}.svg`)" alt="">
              <span> {{ item.name }}</span>
            </div>
          </nuxt-link>
          <div v-if="item.name === 'Communities'" class="relative">
            <li>
              <div v-if="showCommunities" class="z-50 absolute right-0 inset-x-0 top-0">
                <ul
                  id="sub-menu-2"
                  class="mt-1 px-2 bg-white shadow-md border-[0.6px] border-gray-100 h-72 overflow-y-auto"
                >
                  <li v-for="itm in communities" class="w-full">
                    <!-- 44px -->
                    <nuxt-link
                      :to="itm.path"
                      class="hover:bg-gray-100 block no-underline w-full rounded-md py-2 px-2 text-xs leading-6 text-gray-700"
                      @click.native="showCommunities = false"
                    >
                      GraphQL
                      {{ itm.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
          </div>
        </li>
      </ul>

      <div class="ml-14">
        <button class="text-red-500 font-medium flex items-center gap-x-2" @click="handleLogout">
          <img src="~/assets/icons/logout.svg" alt="logout icon">
          <span> Logout </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { getCommunities } from '@/services/post'
export default {
  data () {
    return {
      user: null,
      loadingCommunities: false,
      showCommunities: false,
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
          path: ''
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
      ],
      communities: [
        {
          image: 'cardio-connect',
          title: 'CardioConnect',
          path: '/dashboard/communities/cardio-connect'
        },
        {
          image: 'sweet-life-cycle',
          title: 'SweetLife Circle',
          path: '/dashboard/communities/sweet-life-cycle'
        },
        {
          image: 'repro-active',
          title: 'ReproActive',
          path: '/dashboard/communities/repro-active'
        },
        {
          image: 'brave-heart',
          title: 'BraveHeart',
          path: '/dashboard/communities/brave-heart'
        },
        {
          image: 'serene-mind',
          title: 'SereneMind & Wellness',
          path: '/dashboard/communities/serene-mind'
        },
        {
          image: 'fitness',
          title: 'Fit & Shape Network',
          path: '/dashboard/communities/fitness'
        },
        {
          image: 'warrior',
          title: 'Warrior Alliance',
          path: '/dashboard/communities/warrior'
        },
        {
          image: 'eye-power',
          title: 'EyePower Villa',
          path: '/dashboard/communities/eye-power'
        },
        {
          image: 'glow-zone',
          title: 'GlowZone Network',
          path: '/dashboard/communities/glow-zone'
        },
        {
          image: 'pregnancy',
          title: 'Pregnancy & Maternity',
          path: '/dashboard/communities/pregnancy'
        }
      ]
    }
  },
  mounted () {
    this.user = window.localStorage.getItem('user')
    if (this.user === null) {
      this.$router.push('/')
    }
    // this.fetchUser()
    this.loadCommunities()
  },
  methods: {
    async loadCommunities () {
      this.loadingCommunities = true
      try {
        const response = await getCommunities()
        this.communitiesGroups = response?.data?.community_groups
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingCommunities = false
      }
    },
    handleCommunitiesToggle (item) {
      if (item.name === 'Communities') {
        this.showCommunities = !this.showCommunities
      }
    },
    handleLogout () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'Nah, Just Kidding.'
      }).then((result) => {
        if (result.value) {
          this.$router.push('/')
          // window.open('https://medinize.netlify.app/', '_self')
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

<template>
  <main class="space-y-8 pt-6">
    <div>
      <button class="text-white bg-gray-600 rounded-full font-medium text-xs px-3 py-2.5" @click="goBack">
        Go Back
      </button>
    </div>
    <main class="flex justify-between gap-10">
      <div class="w-6/12">
        <div class="space-y-6 bg-orange-100 p-6 rounded-md">
          <div class="flex items-center gap-x-6">
            <div>
              <img src="~/assets/icons/eclipse.svg" alt="laceholder" class="h-12 w-12">
            </div>
            <div>
              <h4 class="font-medium text-3xl">
                {{ communityIdUniqueKey ?? 'N/A' }}
              </h4>
              <p class="text-xs font-light">
                5k members
              </p>
            </div>
            <div class="font-medium text-green-600 text-sm">
              Joined
            </div>
          </div>
          <div class="flex items-center gap-x-3">
            <button class="text-white bg-green-600 py-2 text-xs w-24 rounded-lg">
              All posts
            </button>
            <p class="text-xs font-medium">
              About Community
            </p>
          </div>
        </div>
        <section class="flex items-start gap-x-16 mt-10 w-full">
          <div class="space-y-6 w-full">
            <form class="border rounded-md p-6 space-y-6 w-full bg-white" @submit.prevent="createNewPost">
              <h1 class="font-medium text-lg">
                Create Post
              </h1>
              <div class="w-full">
                <input v-model="form.title" type="text" placeholder="Enter post title" class="border outline-none w-full py-2.5 rounded-md px-3">
              </div>
              <div>  <textarea v-model="form.content" placeholder="Enter post description here" class="border outline-none w-full p-3 rounded-md resize-none" rows="10" cols="10" /></div>
              <div class="flex justify-end items-end py-3 pr-3">
                <button class="text-white bg-green-600 text-base rounded-full py-2.5 w-3/12">
                  Post
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div class="overflow-y-auto space-y-6 w-6/12 h-[700px]">
        <div v-if="posts" class="space-y-6 w-full bg-white p-6 rounded-md">
          <div v-for="(itm, idx) in posts" :key="idx" class="text font-light w-full space-y-4">
            <div class="p-3 rounded-md border-[0.4px]">
              <p class="font-medium">
                {{ itm.title }}
              </p>
              <p class="font-medium">
                {{ itm.content }}
              </p>
              <div class="flex items-center gap-x-3 justify-end">
                <p class="flex items-center font-semibold gap-x-2">
                  {{ itm.likes }}  <img src="~/assets/img/like.png" alt="" class="h-4 w-4 cursor-pointer" @click="handleLikePost(itm)">
                </p>
                <p class="flex items-center font-semibold gap-x-2">
                  {{ itm.views }} <img src="~/assets/icons/view.svg" alt="" class="h-4 w-4 cursor-pointer" @click="handleViewPost(itm)">
                </p>
              </div>
            </div>
            <div v-for="(item, index) in itm.replies" :key="index" class="rounded-md border-[0.4px] p-3">
              <p>{{ item.content }}</p>
              <p class="text-sm flex justify-end items-end">
                {{ formatTimeElapsed(item.created_at) }}
              </p>
            </div>
          </div>
        </div>
        <div v-else-if="errorMessage === 'Network Error'" class="grid place-content-center place-items-center bg-white h-48 w-full py-32">
          <p>  No post available</p>
        </div>
        <div v-if="loadingPosts" class="grid place-content-center place-items-center  h-48 w-full space-y-3 bg-white py-32">
          <api-loader />
          <p class="text-sm text-gray-500 font-medium">
            Loading posts..
          </p>
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import { loadGroupCommunityById, likePost, viewPost } from '@/services/post'
export default {
  data () {
    return {
      loadingPosts: false,
      communityIdUniqueKey: '',
      posts: null,
      form: {
        title: '',
        content: '',
        community_group: ''
      },
      content: '<html>What’s on your Mind?</html>',
      title: 'Cancer Community'
    }
  },
  head: {
    title: 'Medinize Community | Cancer Group',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Community cancer group'
      }
    ]
  },
  mounted () {
    this.$nuxt.$emit('toggle')
    this.loadCommunityById()
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    async loadCommunityById () {
      this.loadingPosts = true
      const communityId = this.$route.params.id
      this.communityIdUniqueKey = this.$route.params.id
      try {
        const response = await loadGroupCommunityById(communityId)
        this.posts = response?.data?.posts
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingPosts = false
      }
    },
    formatTimeElapsed (createdAt) {
      const createdDate = new Date(createdAt)
      const currentDate = new Date()
      const timeDifference = currentDate - createdDate
      const seconds = Math.floor(timeDifference / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      if (days === 0) {
        if (hours === 0) {
          if (minutes === 0) {
            return 'Just now'
          } else {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
          }
        } else {
          return `${hours} hour${hours > 1 ? 's' : ''} ago`
        }
      } else if (days === 1) {
        return 'Yesterday'
      } else {
        return `${days} day${days > 1 ? 's' : ''} ago`
      }
    },
    async handleLikePost (itm) {
      try {
        const response = await likePost(itm.id)
        this.posts = response?.data?.posts
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingPosts = false
      }
    },
    async handleViewPost (itm) {
      try {
        const response = await viewPost(itm.id)
        this.posts = response?.data?.posts
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingPosts = false
      }
    }
  }
}
</script>

<style>

</style>

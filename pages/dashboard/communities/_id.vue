<template>
  <main class="space-y-8 pt-6">
    <div>
      <button class="text-white bg-gray-600 rounded-full font-medium text-xs px-3 py-2.5" @click="goBack">
        Go Back
      </button>
    </div>
    <main class="md:flex md:justify-between md:gap-10">
      <div class="md:w-6/12">
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
            <p class="text-xs font-medium mt-3">
              About Community
            </p>
          </div>
        </div>
        <section class="flex items-start gap-x-16 mt-10 w-full">
          <div class="space-y-6 w-full">
            <form class="space-y-6 w-full bg-white" @submit.prevent="createNewPost">
              <h1 class="font-medium text-lg">
                Create Post
              </h1>
              <div>  <textarea v-model="form.content" placeholder="what would you like to share with the community today?" class="border outline-none w-full p-3 rounded-md resize-none" rows="7" cols="7" /></div>
              <div class="flex justify-end items-end py-3 pr-3">
                <button :disabled="!isFormEmpty" class="text-white disabled:opacity-25 disabled:cursor-not-allowed bg-green-600 text-base rounded-md py-2.5 w-3/12">
                  {{ processing ? 'loading' : 'Post' }}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div class="md:overflow-y-auto space-y-6 md:w-6/12 md:h-[700px] py-3 md:py-0">
        <div v-if="posts" class="space-y-6 w-full bg-white rounded-md">
          <div v-for="(itm, idx) in posts" :key="idx" class="text font-light w-full space-y-4">
            <div class="p-3 rounded-md border-[0.4px]">

              <div class="">
                  <img src="~/assets/img/user.png" class="w-6 h-6"/>
              </div>
              <div class="flex items-center">
                          <p class="font-semibold mt-3">
                            {{ itm.content }} 
                              <span class="">
                                <span class="font-thin text-gray-500">.</span>
                                <small class="font-thin text-gray-500 text-[.8rem]">
                                  {{ formatTimeElapsed(itm.created_at) }}
                                </small>
                              </span>
                          </p> 
                          
                </div>
              <div class="flex justify-between items-center gap-x-6 md:justify-end mt-4">
                          <div v-if="itm.replies" id="reply-count" class="flex items-center gap-x-2 cursor-pointer">
                            <p class="flex items-center gap-x-2">
                              {{ itm.replies.length }} <img src="~/assets/img/comment.png" alt="" class="h-6 w-6 cursor-pointer">
                            </p>
                          </div>

                          <p class="flex items-center gap-x-2">
                            {{ itm.likes }} <img src="~/assets/img/like.png" alt="" class="h-5 w-5 cursor-pointer">
                          </p>

                          <p class="flex items-center gap-x-2">
                            <img src="~/assets/img/bookmark.png" alt="" class="h-5 w-5 cursor-pointer">
                          </p>

                          <p class="flex items-center gap-x-2">
                            <img src="~/assets/img/send.png" alt="" class="h-5 w-5 cursor-pointer">
                          </p>

                        </div>

                        <div v-for="(item, index) in itm.replies" id="replies" :key="index" class="rounded-md border-[0.4px] p-3 mt-3">
                          <div class="">
                            <img src="~/assets/img/user.png" class="mb-2 w-4 h-4"/>
                          </div>
                          <div class="flex items-center">
                          <p class="text-gray-900">{{ item.content }} 
                            <span class="">
                              <span class="text-gray-500">.</span>
                              <small class="text-gray-500 text-[.8rem]">
                                {{ formatTimeElapsed(item.created_at) }}
                              </small>
                            </span>
                          </p>
                          
                        </div>
                      </div>

                      <div class="w-[100%] flex flex-row justify-between items-center mt-3">
                        <input v-model="replies[itm.id]" type="text" placeholder="Type a reply" class="w-[73%] border outline-none w-full py-2.5 rounded-tl-md rounded-bl-md px-3">
                        <button :disabled="processing" class="w-[20%] bg-green-600 text-white rounded-tr-md rounded-br-md text-sm py-[0.8rem] px-3" @click="replyToPost(itm.id)">
                          {{ processing_reply ? 'loading' : 'Reply' }}
                        </button>
                      </div>
            </div>
              <!-- <div v-for="(item, index) in itm.replies" :key="index" class="rounded-md border-[0.4px] p-3">
                <p>{{ item.content }}</p>
                <p class="text-sm flex justify-end items-end">
                  {{ formatTimeElapsed(item.created_at) }}
                </p>
              </div> -->
          </div>
        </div>
        <div v-else-if="errorMessage === 'Network Error'" class="grid place-content-center place-items-center bg-white h-48 w-full py-32">
          <p> No post available</p>
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
import { loadGroupCommunityById, likePost, viewPost, createPost, handlePostReply } from '@/services/post'
// import errorVue from '../../../layouts/error.vue'
export default {
  data () {
    return {
      loadingPosts: false,
      processing: false,
      processing_reply: false,
      communityIdUniqueKey: '',
      replies: {},
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
  computed: {
    isFormEmpty () {
      return !!this.form.content
    }
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
        this.$toastr.s('success!')
        this.loadCommunityById()
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
        this.$toastr.s('success!')
        this.loadCommunityById()
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingPosts = false
      }
    },
    async createNewPost () {
      this.processing = true
      try {
        const payload = {
          ...this.form, community_group: this.communityIdUniqueKey
        }
        await createPost(payload)
        this.$toastr.s('New post was saved successfully.')
        this.form.content = ''
        this.loadCommunityById()
      } catch (err) {
        this.$toastr.e(err)
      } finally {
        this.processing = false
      }
    },
    replyToPost (postId) {
      this.processing_reply = true
      const replyContent = this.replies[postId]
      if (replyContent) {
        const payload = {
          content: replyContent
        }
        handlePostReply(postId, payload).then(() => {
          this.$toastr.s('Reply was saved successfully.')
        }).catch((error) => {
          this.$toastr.e(error)
        }).finally(() => {
          this.replies[postId] = ''
          this.processing_reply = false
        })
      } else {
        this.$toastr.w('Reply content cannot be empty')
      }
    }
  }
}
</script>

<style>

</style>

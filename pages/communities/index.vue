<template>
  <main>
    <section class="pb-20">
      <section class="md:flex items-start gap-x-16 mt-10 space-y-20 md:space-y-0">
        <div class="md:w-6/12 space-y-6">
          <!-- <form class="border rounded-md p-6 space-y-4 bg-white" @submit.prevent="createNewPost">
            <h1 class="font-medium text-lg">
              Create Post
            </h1>
            <div class="w-full">
              <input v-model="form.title" type="text" placeholder="Enter post title" class="border outline-none w-full py-2.5 rounded-md px-3">
            </div>
            <div>  <textarea v-model="form.content" placeholder="Write a post" class="border outline-none w-full p-3 rounded-md resize-none" rows="4" cols="4" /></div>
            <div class="flex justify-end items-end pr-3">
              <button class="text-white bg-green-600 text-base rounded-full py-2.5 w-3/12">
                Post
              </button>
            </div>
          </form> -->
          <div class="overflow-y-auto space-y-6 h-[550px]">
            <div v-if="posts" class="space-y-6 w-full">
              <div v-for="(x, i) in posts" :key="i" class="rounded-md border-[0.4px] bg-white flex p-4 space-x-6 w-full">
                <div class="w-full space-y-6">
                  <h1 class="font-light text-sm">
                    {{ x.name }}
                  </h1>
                  <div v-for="(itm, idx) in x.posts" :key="idx" class="text font-light w-full space-y-4">
                    <div class="rounded-md">
                      <!-- <p class="font-medium">
                        {{ itm.title }}
                      </p> -->
                      <p class="font-medium">
                        {{ itm.content }}
                      </p>
                      <div class="flex items-center gap-x-3 justify-end">
                        <p class="flex items-center font-semibold gap-x-2">
                          {{ itm.likes }}  <img src="~/assets/img/like.png" alt="" class="h-4 w-4">
                        </p>
                        <p class="flex items-center font-semibold gap-x-2">
                          {{ itm.views }} <img src="~/assets/icons/view.svg" alt="" class="h-4 w-4">
                        </p>
                        <p v-if="itm.replies" @click="initApp()" id="reply-count" class="flex items-center font-semibold gap-x-2 cursor-pointer">
                          {{ itm.replies.length }}
                          <span class="-ml-1" v-if="itm.replies.length <= 1">
                            reply
                          </span>
                          <span class="-ml-1 cursor-pointer" v-if="itm.replies.length > 1">
                            replies
                          </span>
                        </p>
                      </div>
                    </div>
                    <div v-for="(item, index) in itm.replies" :key="index" id="replies" class="rounded-md border-[0.4px] p-3">
                      <p>{{ item.content }}</p>
                      <p class="text-sm flex justify-end items-end">
                        {{ formatTimeElapsed(item.created_at) }}
                      </p>
                    </div>
                    <div class="w-[100%] flex flex-row justify-between items-center">
                      <input type="text" placeholder="Type a reply" class="w-[78%] border outline-none w-full py-2.5 rounded-md px-3">
                      <button class="w-[20%] bg-green-600 text-white rounded text-sm py-[0.8rem] px-3">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!posts">
              <p class="text-center">
                No post available
              </p>
            </div>
            <div v-else-if="errorMessage === 'Network Error'" class="grid place-content-center place-items-center bg-white h-48 w-full py-32">
              <p>No post available</p>
            </div>
            <div v-if="loadingPosts" class="grid place-content-center place-items-center  h-48 w-full space-y-3 bg-white py-32">
              <api-loader />
              <p class="text-sm text-gray-500 font-medium">
                Loading posts..
              </p>
            </div>
          </div>
        </div>
        <div class="rounded-md bg-white border  md:w-6/12 space-y-6">
          <div class="flex justify-between items-center px-4 pt-4">
            <h1 class="text-lg tracking-wider">
              Explore  Communities
            </h1>
            <div>
              <button class="bg-yellow-700 py-2.5 md:px-4 px-3 text-sm text-white rounded-md" @click="$bvModal.show('createCommunity')">
                Create Community
              </button>
            </div>
          </div>

          <div class="overflow-y-auto">
            <div v-if="communitiesGroups.length" class="h-[460px]">
              <div v-for="(item, index) in communitiesGroups" :key="index" class="flex border-t justify-between items-center p-6 border-b">
                <div>
                  <h3 class="text-sm font-bold">
                    {{ item?.name }}
                  </h3>
                  <h3 class="text-sm leading-relaxed font-light w-10/12">
                    {{ item?.description.length > 100 ? `${item?.description.slice(140)}...` : item?.description }}
                  </h3>
                  <button class="py-2 rounded-md text-green-500 font-medium text-sm" @click="joinCommunity(item)">
                    {{ processingJoining ? 'processing..' : 'Join Community' }}
                  </button>
                </div>
                <div>
                  <button @click="viewCommunity(item)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-wid7h="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ><path d="M9 18l6-6-6-6" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <div v-else-if="errorMessage === 'Network Error'" class="grid place-content-center place-items-center  h-48 w-full">
              <p>No Communities available</p>
            </div>
            <div v-else class="grid place-content-center place-items-center h-48 w-full space-y-2">
              <api-loader />
              <p class="text-sm text-gray-500 font-medium">
                Fetching communities...
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <b-modal id="createCommunity" hide-footer hide-header>
      <main
        class=""
      >
        <div class="max-w-xl lg:max-w-3xl">
          <a class="block text-blue-600" href="/">
            <span class="sr-only">Home</span>
            <img src="~/assets/icons/logo.svg" alt="logout icon">
          </a>

          <p class="mt-4 leading-relaxed text-gray-500">
            Please Enter The Community namme you wish to create
          </p>

          <form class="w-full space-y-6 pb-6" @submit.prevent="handleCreateCommunity">
            <div class="w-full">
              <label for="Email" class="block text-sm font-medium text-gray-700">
                Community Name
              </label>

              <input
                id="name"
                v-model="communityForm.name"
                type="text"
                placeholder="Enter Community name"
                name="name"
                class="mt-1 w-full rounded-md py-3 px-3 outline-none border border-gray-200 bg-white text-sm text-gray-700"
              >
            </div>

            <div class="w-full">
              <label for="description" class="block text-sm font-medium text-gray-700">
                Community description
              </label>

              <textarea
                id="description"
                v-model="communityForm.description"
                type="text"
                placeholder="Describe the community"
                name="description"
                class="mt-1 w-full rounded-md py-3 px-3 outline-none border border-gray-200 bg-white text-sm text-gray-700 resize-none"
              />
            </div>

            <div class="w-full">
              <button
                type="submit"
                :disabled="!isCommuniesformEmpty || processingCommunity"
                :class="[!isCommuniesformEmpty || processingCommunity ? 'opacity-25 cursor-not-allowed' : '']"
                class="w-full py-2.5 rounded-md text-white  bg-yellow-900"
              >
                {{ processingCommunity ? 'processing...' : ' Proceed' }}
              </button>
            </div>
          </form>
        </div>
      </main>
    </b-modal>
  </main>
</template>

<script>
import { createPost, getPosts, getCommunities, createCommunityGroup, joinGroupCommunity } from '@/services/post'
// import { VueEditor } from 'vue2-editor'
export default {
  components: {
    // VueEditor
  },
  data () {
    return {
      communityForm: {
        name: '',
        description: ''
      },
      form: {
        title: '',
        content: '',
        community_group: ''
      },
      processingJoining: false,
      errorMessage: '',
      processingCommunity: false,
      loadingCommunities: false,
      loadingPosts: false,
      communitiesGroups: [],
      posts: [],
      processing: false,
      editorContent: '<html>What’s on your Mind?</html>',
      content: '<html>What’s on your Mind?</html>'
    }
  },
  head: {
    title: 'Medinize Community | Communities',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Comminities'
      }
    ]
  },
  computed: {
    isCommuniesformEmpty () {
      return !!(this.communityForm.name && this.communityForm.description)
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async createPost () {
      this.processing = true
      try {
        await createPost(this.form)
        this.processing = false
        this.loadPosts()
      } catch (error) {

      } finally {
        this.processing = false
      }
    },
    init () {
      this.loadCommunities()
      this.loadPosts()
    },
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
    async loadPosts () {
      this.loadingPosts = true
      try {
        const response = await getPosts()
        this.posts = response?.data?.community_groups
      } catch (error) {
        if (error.response) {
          this.$toastr.e(`${error?.response?.data?.name[0]}`)
        }
        if (error.message === 'Network Error') {
          this.errorMessage = error.message
          this.$toastr.e('Please check your internt connectivity')
        }
      } finally {
        this.loadingPosts = false
      }
    },
    async handleCreateCommunity () {
      this.processingCommunity = true
      try {
        const payload = {
          name: this.communityForm?.name.toUpperCase(),
          description: this.communityForm?.description
        }
        await createCommunityGroup(payload)
        this.processingCommunity = false
        this.loadCommunities()
        this.$toastr.s(`Community Group ${this.communityForm?.name} was created successfully`)
        this.$bvModal.hide('createCommunity')
      } catch (error) {
        if (error.response) {
          this.$toastr.e(`${error?.response?.data?.name[0]}`)
        }
        if (error.message === 'Network Error') {
          this.errorMessage = error.message
          this.$toastr.e('Please check your internt connectivity')
        }
      } finally {
        this.processingCommunity = false
      }
    },
    // eslint-disable-next-line camelcase
    formatTimeElapsed (created_at) {
      const createdDate = new Date(created_at)
      const currentDate = new Date()

      // Calculate the time difference in milliseconds
      const timeDifference = currentDate - createdDate

      // Convert milliseconds to seconds, minutes, hours, and days
      const seconds = Math.floor(timeDifference / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      // Format the result
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
    async joinCommunity (itm) {
      this.processingJoining = true
      try {
        const payload = {
          group_name: itm.name.toLowerCase()
        }
        const result = await joinGroupCommunity(payload)
        this.$toastr.s(`${result.data.message}`)
        this.processingJoining = false
        this.loadCommunities()
      } catch (error) {
        if (error.response) {
          this.$toastr.e(`${error?.response?.data?.error}`)
        }
      } finally {
        this.processingJoining = false
      }
    },
    viewCommunity (item) {
      this.$router.push(`/communities/${item.unique_id}`)
    },
  
  }
}
</script>

<style>

</style>

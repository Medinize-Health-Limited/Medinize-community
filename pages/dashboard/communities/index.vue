<template>
  <main>
    <!-- <section class="pb-20">
      <section class="lg:flex items-start gap-x-8 mt-10 space-y-20 md:space-y-0">
        <div class="lg:w-8/12 space-y-6">
          <div class="overflow-y-auto space-y-6 h-[550px]">
            <div v-if="posts?.length" class="space-y-6 w-full">
              <div v-for="(x, i) in posts" :key="i" class="rounded-md bg-white flex space-x-6 w-full">
                <div class="w-full space-y-6">
                  <div class="space-y-10">
                    <div v-for="(itm, idx) in x.posts" :key="idx"
                      class="text font-light w-full space-y-4 border border-green-200 py-3 px-3">
                      <div class="rounded-md">
                        <div class="">
                          <img src="~/assets/img/user.png" class="w-6 h-6" />
                        </div>

                        <div class="flex items-center">
                          <p class="font-semibold mt-3 text-[1.3rem]">
                            {{ itm.content }}
                            <span class="">
                              <span class="font-thin text-gray-500">.</span>
                              <small class="font-thin text-gray-500 text-[.8rem]">
                                {{ formatTimeElapsed(itm.created_at) }}
                              </small>
                            </span>
                          </p>

                        </div>

                        <div class="flex justify-items items-center space-x-2">
                          <div class="border rounded-[50%] h-3 w-3 bg-orange-500"></div>
                          <small class="font-regular text-[.7rem]">{{ x.name }}</small>
                        </div>

                        <div class="flex justify-between items-center gap-x-6 md:justify-end mt-4">
                          <div v-if="itm.replies" id="reply-count" class="flex items-center gap-x-2 cursor-pointer">
                            <p class="flex items-center gap-x-2">
                              {{ itm?.replies?.length }} <img src="~/assets/img/comment.png" alt=""
                                class="h-6 w-6 cursor-pointer">
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
                      </div>
                      <div v-for="(item, index) in itm.replies" id="replies" :key="index"
                        class="rounded-md border-[0.4px] p-3">
                        <div class="">
                          <img src="~/assets/img/user.png" class="mb-2 w-4 h-4" />
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

                      <div class="w-[100%] flex flex-row justify-between items-center">
                        <input v-model="replies[itm.id]" type="text" placeholder="Type a reply"
                          class="w-[73%] border outline-none w-full py-2.5 rounded-tl-md rounded-bl-md px-3">
                        <button :disabled="processing"
                          class="w-[20%] bg-green-600 text-white rounded-tr-md rounded-br-md text-sm py-[0.8rem] px-3"
                          @click="replyToPost(itm.id)">
                          {{ processing_reply ? 'loading' : 'Reply' }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="errorMessage === 'Network Error'"
              class="grid place-content-center place-items-center  h-48 w-full">
              <p>No Communities available</p>
            </div>
            <div v-else class="p-6">
              <api-loader />
            </div>
          </div>
        </div>
        <div class="rounded-md bg-white border  lg:w-4/12 space-y-6">
          <div class="flex justify-between items-center px-4 pt-4">
            <h1 class="text-lg tracking-wider">
              Explore Communities
            </h1>
            <div v-if="user?.is_staff || user?.is_superuser">
              <button class="bg-yellow-700 py-2.5 md:px-4 px-3 text-sm text-white rounded-md"
                @click="$bvModal.show('createCommunity')">
                Create Community
              </button>
            </div>
          </div>

          <div class="overflow-y-auto">
            <div v-if="communitiesGroups?.length" class="h-[460px]">
              <div v-for="(item, index) in communitiesGroups" :key="index"
                class="flex border-t justify-between items-center p-6 border-b">
                <div>
                  <h3 class="text-sm font-bold">
                    {{ item?.name }}
                  </h3>
                  <h3 class="text-sm leading-relaxed font-light w-10/12">
                    {{ item?.description }}
                  </h3>
                  <button v-if="item.visibility" class="py-2 rounded-md text-green-500 font-medium text-sm"
                    @click="joinCommunity(item)">
                    {{ processingJoining ? 'processing..' : 'Join Community' }}
                  </button>
                </div>
                <div>
                  <nuxt-link :to="`/dashboard/communities/${item.unique_id}`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none"
                      stroke="#000000" stroke-wid7h="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div v-else-if="errorMessage === 'Network Error'"
              class="grid place-content-center place-items-center  h-48 w-full">
              <p>No Communities available</p>
            </div>
            <div v-else class="p-6">
              <api-loader />
            </div>
          </div>
        </div>
      </section>
    </section> -->
    <main class="">
      <section class="lg:p-[60px] space-y-8 mt-10 lg:mt-10">
        <h1 class="font-semibold text-lg md:text-2xl">
          Medinize Communities
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <nuxt-link v-for="(itm, idx) in communities" :key="idx" :to="itm.path" class="relative">
            <img :src="require(`@/assets/img/${itm.image}.png`)" alt="" class="h-full w-full">
            <p class="text-white z-50 font-medium absolute bottom-4 left-4">
              {{ itm.title }}
            </p>
          </nuxt-link>
        </div>
      </section>
      <TermsModal class="p-4" :is-visible="isModalVisible" @close="isModalVisible = false">
        <template #header>
          <h2 class="md:text-xl text-lg font-bold text-center flex justify-center items-center mt-10">
            Terms & Conditions for Joining a Medinize Community
          </h2>
        </template>
        <template #content>
          <div v-for="(itm, idx) in terms" :key="idx" class="text-gray-800">
            <p class="font-semibold text-gray-800 p-0 m-0 text-sm">
              {{ itm.id }} {{ itm.title }}
            </p>
            <p class="font-extralight p-0 m-0 text-sm text-gray-800">
              {{ itm.description }}
            </p>
          </div>
          <p class="text-sm">
            By joining
            <nuxt-link to="/" class="text-green-500 font-semibold">
              ReproActive
            </nuxt-link>, you acknowledge and agree to abide by these terms and conditions.
            Failure to comply may result in the removal of your membership
            privileges.
          </p>
          <p class="text-sm">
            Thank you for your cooperation in creating a welcoming and inclusive
            community environment.
          </p>
          <div class="flex items-center text-sm gap-x-3">
            <input v-model="isAggrementTicked" type="checkbox">
            <label class="text-xs">By checking this box, I agree to abide by the community guidelines
              and terms of conduct outlined above</label>
          </div>
          <div class="flex justify-center items-center">
            <button :disabled="!isAggrementTicked"
              class="bg-[#064B05] disabled:cursor-not-allowed opacity-25 text-white font-semibold px-6 py-2.5 rounded-md"
              @click="isModalVisible = false">
              Join community
            </button>
          </div>
        </template>
      </TermsModal>
    </main>
  </main>
</template>

<script>
import TermsModal from '@/components/TermsModal.vue'
export default {
  components: {
    TermsModal
  },
  data () {
    return {
      isModalVisible: false,
      isAggrementTicked: false,
      terms: [
        {
          id: 1,
          title: 'Respectful Conduct:',
          description: 'By joining ReproActive, you agree to engage in respectful and courteous behavior towards all members. Any form of harassment, discrimination, or offensive language will not be tolerated.'
        },
        {
          id: 2,
          title: 'Relevance of Content:',
          description: `All posts within ReproActive must be relevant to the theme and purpose of the community.
        Off-topic posts may be removed at the discretion of the community moderators.`
        },
        {
          id: 3,
          title: 'Appropriate Language:',
          description: 'Members are expected to use language that is inclusive, respectful, and appropriate for all audiences. Profanity, hate speech, or derogatory remarks are strictly prohibited.'
        },
        {
          id: 4,
          title: 'Protection of Privacy:',
          description: 'You’re not to share personal details that could compromise your privacy or the privacy of others within ReproActive. Respect the confidentiality of fellow members at all times.'
        },
        {
          id: 5,
          title: 'Mutual Support:',
          description: 'As a member of ReproActive, you are encouraged to offer support, encouragement, and constructive feedback to fellow members. Your contributions should aim to foster a positive and supportive environment for everyone.'
        },
        {
          id: 6,
          title: 'Reporting of Concerns:',
          description: 'If you encounter any behavior within ReproActive that violates these terms and conditions or makes you feel uncomfortable, please report it immediately.'
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
  mounted() {
    this.isModalVisible = true
  }
}
</script>

<template>
  <main>
    <section class="space-y-10 mb-10">
      <section class="relative">
        <div>
          <img src="@/assets/img/SweetLifeCircle.png" alt="">
        </div>
        <div class="lg:absolute left-52 top-64 pt-6 lg:pt-0">
          <div class="lg:flex justify-between items-center">
            <div class="md:flex items-center gap-x-3">
              <h1 class="text-lg lg:text-base font-semibold">
                SWEET LIFE CIRCLE
              </h1>
              <p class="font-thin">
                2.1k members · 812 posts
              </p>
            </div>
            <div>
              <CustomSelect @input="handleSelection" />
            </div>
          </div>
          <div>
            <p class="leading-relaxed lg:pr-32 pt-3 lg:pt-0 font-extralight text-gray-600">
              A supportive community for pregnancy, reproductive issues, and
              fertility
              treatments. Find guidance, support,
              and a safe space to share your journey with individuals from diverse backgrounds and stages of
              reproductive
              health, fostering understanding and solidarity.
            </p>
          </div>
        </div>
      </section>
      <section class="lg:flex justify-start items-start gap-x-10 lg:px-10 space-y-6 lg:space-y-0">
        <div class="lg:w-9/12 space-y-10">
          <div class="rounded-lg bg-white shadow p-3 lg:p-4 flex justify-start items-start gap-x-3 lg:gap-x-4">
            <div class="pt-2.5 ">
              <img src="@/assets/img/avatar.png" class="lg:h-14 h-8 lg:w-14 w-8" alt="">
            </div>
            <div class="space-y-6 w-full">
              <div class="w-full">
                <input placeholder="What would you like to share with the ReproActive community May?" type="text"
                  class="w-full py-3 rounded-full text-xs lg:text-base border bg-gray-100 border-gray-500 px-4">
              </div>
              <div class="flex items-center gap-x-6">
                <div class="flex items-center gap-x-2 text-sm lg:text-base">
                  <img src="@/assets/icons/photo.svg" class="h-6 w-6"> Photos
                </div>
                <div class="flex items-center gap-x-2 text-sm lg:text-base">
                  <img src="@/assets/icons/video.svg" class="h-6 w-6"> Video
                </div>
              </div>
              <div class="flex justify-end items-end">
                <button class="text-white bg-[#064B05] text-sm px-3 py-2 rounded-md" @click="isModalVisible = true">
                  Create post
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p class="w-8/12 lg:w-10/12 border bg-gray-900 border-gray-700 mt-3" />
            <div class="flex items-center gap-x-2 text-sm lg:text-base">
              <span class="text-gray-400 font-light text-sm lg:text-base">Sort by:</span> <select
                class="text-sm lg:text-base">
                <option>Latest</option>
              </select>
            </div>
          </div>
          <div v-for="(itm, idx) in conversations" :key="idx"
            class="bg-white shadow cursor-pointer p-3 rounded-lg  border flex gap-x-8 lg:gap-x-0"
            @click="openChatModal(itm)">
            <div class="w-1/12">
              <div class="h-32 w-32">
                <img :src="require(`@/assets/img/${itm.image}.png`)" alt="avatar" class="h-[50px] w-[50px]">
              </div>
            </div>
            <div class="w-10/12">
              <div class="flex items-center gap-x-2">
                <p class="font-semibold lg:text-xl text-gray-800">
                  {{ itm.name }}
                </p>
                <p class="text-gray-500 text-xs font-light">
                  {{ itm.time }}
                </p>
              </div>
              <div class="">
                <ViewMoreLess class="leading-loose font-light text-sm text-justify" :full-text="itm.content"
                  :preview-length="500" />
              </div>
              <div class="flex justify-between items-center pt-3">
                <div class="flex items-center space-x-6">
                  <button class="flex items-center gap-x-2 cursor-pointer">
                    <img src="@/assets/icons/like.svg" alt="" class="h-4 w-4">
                    <p class="font-medium p-0 m-0">
                      3
                    </p>
                  </button>
                  <button class="flex items-center gap-x-2 cursor-pointer">
                    <img src="@/assets/icons/comment.svg" alt="" class="h-4 w-4">
                    <p class="font-medium p-0 m-0">
                      4
                    </p>
                  </button>
                </div>
                <button class="flex items-center gap-x-2 cursor-pointer">
                  <img src="@/assets/icons/saveAs.svg" alt="" class="h-4 w-4">
                  <p class="font-medium p-0 m-0 text-[15px]">
                    Save
                  </p>
                </button>
              </div>
            </div>
            <div class="w-1/12 flex justify-center items-start">
              <img src="@/assets/icons/more.svg" alt="avatar">
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg p-3 lg:w-3/12 shadow border border-gray-400 space-y-6">
          <h1 class="text-lg uppercase font-semibold pl-6">
            other communities
          </h1>
          <div class="space-y-6">
            <div v-for="(itm, idx) in otherCommunities" :key="idx" class="flex items-start gap-x-3 px-6">
              <div>
                <img :src="require(`@/assets/img/${itm.image}.png`)" alt="" class="h-8 w-8 rounded-full">
              </div>
              <div class="space-y-6">
                <p class="font-semibold text-gray-700 p-0 m-0">
                  {{ itm.name }}
                </p>
                <p class="text-sm text-gray-500 p-0 m-0">
                  {{ itm.members }} . {{ itm.posts }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <TermsModal class="p-4" :is-visible="isModalVisible" @close="isModalVisible = false">
      <template #header>
        <h2 class="text-xl font-bold text-center flex justify-center items-center">
          Create Post
        </h2>
      </template>
      <template #content>
        <div class="bg-[#CEEACE] rounded-md p-6 space-y-3">
          <h1 class="font-semibold text-[#064B05] text-lg">
            Guidelines
          </h1>
          <div class="space-y-1">
            <div v-for="(itm, idx) in guidelines" :key="idx" class="text-gray-800 space-x-2 flex items-center">
              <span class="h-0.5 w-0.5 p-0.5 bg-[#064B05] rounded-full mr-2" />
              <p class="text-sm font-extralight text-[#064B05] p-0 m-0">
                {{ itm }}
              </p>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="flex items-center gap-x-4">
            <img src="@/assets/img/avatar3.png" alt="" class="h-14 w-14 rounded-full">
            <p class="font-semibold text-[#060606] pt-3">
              May Francis
            </p>
          </div>
          <div class="w-full">
            <textarea placeholder="What would you like to share with the ReproActive community May?"
              class="p-0 m-0 outline-none w-full font-extralight text-gray-400 resize-none placeholder:text-gray-300 placeholder:text-sm"
              cols="7" rows="7">
              What would you like to share with the ReproActive community May?
            </textarea>
            <div class="flex items-center justify-end gap-x-6">
              <div class="flex items-center gap-x-2 font-extralight text-gray-600 cursor-pointer">
                <img src="@/assets/icons/green-photo.svg" class="h-[20px] w-[20px]"> Photos
              </div>
              <div class="flex items-center gap-x-2 font-extralight text-gray-600 cursor-pointer">
                <img src="@/assets/icons/blue-video.svg" class="h-[20px] w-[20px]"> Video
              </div>
              <div class="flex items-center gap-x-2 font-extralight text-gray-600 cursor-pointer">
                <img src="@/assets/icons/yellow-feeling.svg" class="h-[20px] w-[20px]"> Feeling
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-300 pt-4 flex justify-end items-end">
          <button class="text-sm text-[#696969] bg-white px-6 py-2.5 font-medium" @click="isModalVisible = false">
            Cancel
          </button>
          <button class="text-sm text-white bg-[#064B05] px-6 py-2.5 rounded-md font-medium">
            Post
          </button>
        </div>
      </template>
    </TermsModal>
    <TermsModal class="p-4" :is-visible="isConversationModalVisible" @close="isConversationModalVisible = false">
      <template #content>
        <section class="">
          <div class="pt-6">
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-x-3">
                <div class="">
                  <img :src="require(`@/assets/img/${selectedConversation.image}.png`)" alt="avatar"
                    class="h-[40px] w-[40px]">
                </div>
                <div class="">
                  <p class="font-semibold text-sm p-0 m-0 text-gray-800">
                    {{ selectedConversation.name }}
                  </p>
                  <p class="text-gray-500 text-xs p-0 m-0 font-light">
                    {{ selectedConversation.time }}
                  </p>
                </div>
              </div>
              <div class="w-1/12 flex justify-center items-start">
                <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 0C1.175 0 0.5 0.675 0.5 1.5C0.5 2.325 1.175 3 2 3C2.825 3 3.5 2.325 3.5 1.5C3.5 0.675 2.825 0 2 0ZM2 15C1.175 15 0.5 15.675 0.5 16.5C0.5 17.325 1.175 18 2 18C2.825 18 3.5 17.325 3.5 16.5C3.5 15.675 2.825 15 2 15ZM2 7.5C1.175 7.5 0.5 8.175 0.5 9C0.5 9.825 1.175 10.5 2 10.5C2.825 10.5 3.5 9.825 3.5 9C3.5 8.175 2.825 7.5 2 7.5Z"
                    fill="#444444" />
                </svg>
              </div>
            </div>
            <div class="leading-loose font-light text-sm text-justify pt-3">
              {{ selectedConversation.content }}
            </div>
            <div class="flex justify-between items-center pt-3">
              <div class="flex items-center space-x-6">
                <button class="flex items-center gap-x-2 cursor-pointer">
                  <img src="@/assets/icons/like.svg" alt="" class="h-4 w-4">
                  <p class="font-medium p-0 m-0 text-sm">
                    3
                  </p>
                </button>
                <button class="flex items-center gap-x-2 cursor-pointer">
                  <img src="@/assets/icons/comment.svg" alt="" class="h-4 w-4">
                  <p class="font-medium p-0 m-0 text-sm">
                    4
                  </p>
                </button>
              </div>
              <button class="flex items-center gap-x-2 cursor-pointer">
                <img src="@/assets/icons/saveAs.svg" alt="" class="h-4 w-4">
                <p class="font-medium p-0 m-0 text-sm">
                  Save
                </p>
              </button>
            </div>
            <div class="lg:flex justify-between items-center gap-x-10 pt-10 space-y-3 lg:space-y-0">
              <div class="flex justify-between items-center gap-x-2 w-full">
                <div>
                  <img src="@/assets/img/avatar2.png" alt="avatar" class="h-12 w-14">
                </div>
                <div class="w-full relative">
                  <input
                    class="w-full rounded-md outline-none text-sm lg:text-base py-2.5 px-3 border bg-gray-200 placeholder:text-[#0A0A0A]"
                    placeholder="Add a comment">
                  <img src="@/assets/icons/emoji.svg" alt="" class="h-6 w-6 absolute right-3 top-3">
                </div>
              </div>
              <div class="flex justify-end items-end lg:justify-start lg:items-start">
                <button class="text-white bg-[#064B05] text-xs lg:text-sm px-3 py-2.5 rounded-md"
                  @click="isModalVisible = true">
                  post
                </button>
              </div>
            </div>
            <div class="flex items-center gap-x-2 text-sm pt-10">
              <span class="text-gray-400 font-light">Sort by:</span> <select class="">
                <option>Top</option>
              </select>
            </div>
          </div>
          <div v-if="selectedConversation?.replies?.length" class="pt-6 space-y-6">
            <div v-for="(itm, idx) in selectedConversation.replies" :key="idx" class="flex gap-x-6 lg:gap-x-0"
              @click="openChatModal(itm)">
              <div class="w-1/12">
                <div class="h-32 w-32">
                  <img :src="require(`@/assets/img/${itm.image}.png`)" alt="avatar" class="h-[40px] w-[40px]">
                </div>
              </div>
              <div class="w-10/12">
                <div class="flex items-center gap-x-2">
                  <p class="font-semibold text-sm text-gray-800">
                    {{ itm.name }}
                  </p>
                  <p class="text-gray-500 text-xs font-light">
                    {{ itm.time }}
                  </p>
                </div>
                <div class="leading-loose font-light text-sm text-justify">
                  {{ itm.content }}
                </div>
                <div class="flex justify-between items-center pt-3">
                  <div class="flex items-center space-x-6">
                    <button class="flex items-center gap-x-2 cursor-pointer">
                      <img src="@/assets/icons/like.svg" alt="" class="h-4 w-4">
                      <p class="font-medium p-0 m-0 text-sm">
                        3
                      </p>
                    </button>
                    <button class="flex items-center gap-x-2 cursor-pointer">
                      <p class="font-medium p-0 m-0 text-blue-700 text-sm flex items-center gap-x-3">
                        Reply <span v-if="itm?.replies?.length" class="text-xs text-gray-400">{{
                `${itm?.replies?.length}
                          replies` }}</span> <img src="@/assets/icons/open-caret.svg" alt="" class="h-2 w-2">
                      </p>
                    </button>
                  </div>
                </div>
                <div v-for="(item, idxx) in itm.replies" :key="idxx" class="pt-6 flex gap-x-2 lg:gap-x-0">
                  <div class="w-1/12">
                    <div class="h-32 w-32">
                      <img :src="require(`@/assets/img/${item.image}.png`)" alt="avatar"
                        class="lg:h-[40px] lg:w-[40px] h-[20px] w-[20px]">
                    </div>
                  </div>
                  <div class="w-10/12">
                    <div class="flex items-center gap-x-2">
                      <p class="font-semibold text-xs lg:text-sm text-gray-800">
                        {{ item.name }}
                      </p>
                      <p class="text-gray-500 text-xs font-light">
                        {{ item.time }}
                      </p>
                    </div>
                    <div class="leading-loose font-light text-xs lg:text-sm text-justify">
                      {{ item.content }}
                    </div>
                    <div class="flex justify-between items-center pt-3">
                      <div class="flex items-center space-x-6">
                        <button class="flex items-center gap-x-2 cursor-pointer">
                          <img src="@/assets/icons/like.svg" alt="" class="h-4 w-4">
                          <p class="font-medium p-0 m-0 text-sm">
                            3
                          </p>
                        </button>
                        <button class="flex items-center gap-x-2 cursor-pointer">
                          <p class="font-medium p-0 m-0 text-blue-700 text-sm flex items-center gap-x-3">
                            Reply
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/12 flex justify-center items-start">
                <img src="@/assets/icons/more.svg" alt="avatar">
              </div>
            </div>
          </div>
        </section>
      </template>
    </TermsModal>
  </main>
</template>

<script>
import ViewMoreLess from '@/components/ViewMoreLess.vue'
import TermsModal from '@/components/TermsModal.vue'
import CustomSelect from '~/components/CustomSelect.vue'
export default {
  components: {
    CustomSelect,
    TermsModal,
    ViewMoreLess
  },
  data() {
    return {
      isModalVisible: false,
      isConversationModalVisible: false,
      selectedConversation: {},
      conversations: [
        {
          image: 'avatar4',
          replies: [
            {
              image: 'avatar5',
              likes: 3,
              replies: [],
              time: '· 2 hr. ago',
              comments: 3,
              name: 'Miriam Muhammad',
              content: 'Your post couldn\'t have come at a better time. It\'s been a mix of highs and lows for me lately, but knowing I can come here and connect with others who understand makes all the difference. One recent highlight was having a heart-to-heart with my partner about our hopes and fears. It brought us closer together amidst the uncertainties. Grateful for this space and looking forward to hearing everyone\'s stories!'
            },
            {
              image: 'avatar7',
              likes: 3,
              time: '·  2 min. ago',
              comments: 3,
              name: 'Kenneth Adigwe',
              content: `I've been quietly following the conversations here for a while, and I just wanted to say how grateful I am for this space. As a guy navigating fertility challenges, it's disheartening to see society often frame it as solely a female issue. But I'm grateful to walk this journey hand in hand with my wife, knowing that fertility struggles affect us both deeply.
To all the guys out there facing similar challenges, let's continue to challenge stereotypes and misconceptions. Our journey towards parenthood is a shared one, and it's okay to lean on each other for support.
Here's to breaking down barriers and fostering a more inclusive dialogue around reproductive health. Together, let's support one another and rewrite the narrative.`
            }
          ],
          likes: 3,
          time: '·  2 min. ago',
          comments: 3,
          name: 'Jade Adetubo',
          content: `Hey wonderful folks of Reproactive,
I hope you're all doing well on your unique journeys. Today, I felt inspired to share a glimpse of my own adventure towards parenthood and reproductive wellness. From unexpected twists to moments of pure joy, it's been a whirlwind of emotions.But one thing I've learned is that sharing our stories and experiences can truly uplift and inspire us all. I'd love to hear from you! What's been the highlight of your journey lately? Whether it's a small victory, a moment of reflection, or even a challenge you're facing, this is a safe space to share. Feel free to drop your thoughts, questions, or even just a friendly hello below. Let's connect, support each other, and continue embracing this journey together! Looking forward to hearing from you all.`
        },
        {
          image: 'avatar1',
          likes: 3,
          time: '·  2 min. ago',
          comments: 3,
          name: 'Simi Chinyere',
          content: 'Just wanted to take a moment to express my gratitude for being part of this incredible community. The support and understanding I\'ve found here have been invaluable as I navigate my journey towards parenthood. Knowing that I\'m not alone in this journey has made all the difference. Here\'s to all of us supporting each other through the ups and downs 💖💖.'
        },
        {
          image: 'avatar2',
          likes: 3,
          time: '·  2 min. ago',
          comments: 3,
          name: 'Kenneth Adigwe',
          content: `I've been quietly following the conversations here for a while, and I just wanted to say how grateful I am for this space. As a guy navigating fertility challenges, it's disheartening to see society often frame it as solely a female issue. But I'm grateful to walk this journey hand in hand with my wife, knowing that fertility struggles affect us both deeply.
To all the guys out there facing similar challenges, let's continue to challenge stereotypes and misconceptions. Our journey towards parenthood is a shared one, and it's okay to lean on each other for support.
Here's to breaking down barriers and fostering a more inclusive dialogue around reproductive health. Together, let's support one another and rewrite the narrative.`
        },
        {
          image: 'avatar3',
          likes: 3,
          time: '·  2 min. ago',
          replies: [
            {
              image: 'avatar3',
              likes: 3,
              replies: [
                {
                  image: 'avatar5',
                  likes: 3,
                  replies: [],
                  time: '· 2 hr. ago',
                  comments: 3,
                  name: 'Miriam Muhammad',
                  content: 'My recent highlight was receiving encouraging test results after weeks of uncertainty. Grateful for the small victories along the way'
                },
                {
                  image: 'avatar7',
                  likes: 3,
                  replies: [],
                  time: '· 2 hr. ago',
                  comments: 3,
                  name: 'Miriam Muhammad',
                  content: 'My recent highlight was receiving encouraging test results after weeks of uncertainty. Grateful for the small victories along the way'
                }
              ],
              time: '· 2 hr. ago',
              comments: 3,
              name: 'Jane Okoro',
              content: 'Lately, my highlight has been feeling the support and understanding from everyone here. It\'s a reminder that we\'re in this together.'
            },
            {
              image: 'avatar2',
              likes: 3,
              time: '·  2 min. ago',
              comments: 3,
              replies: [],
              name: 'Zulaiko Raimah',
              content: 'My recent highlight was receiving encouraging test results after weeks of uncertainty. Grateful for the small victories along the way'
            }
          ],
          comments: 3,
          name: 'Fatimah Abubakar',
          content: 'To all the women here on similar paths, your strength and resilience inspire me every day. Let\'s continue to support each other, share our stories, and find hope in the journey ahead.'
        }
      ],
      otherCommunities: [
        {
          image: 'warrior',
          name: 'WarriorAlliance',
          members: '2.1k members ·',
          posts: '812 posts'
        },
        {
          image: 'cardio-connect',
          name: 'CardioConnect',
          members: '2.1k members ·',
          posts: '812 posts'
        },
        {
          image: 'brave-heart',
          name: 'BraveHeart',
          members: '2.1k members ·',
          posts: '812 posts'
        },
        {
          image: 'sweet-life-cycle',
          name: 'SweetLife Circle',
          members: '2.1k members ·',
          posts: '812 posts'
        },
        {
          image: 'fitness',
          name: 'Fit & Shape Network',
          members: '2.1k members ·',
          posts: '812 posts'
        },
        {
          image: 'serene-mind',
          name: 'SereneMind  & Wellness',
          members: '2.1k members ·',
          posts: '812 posts'
        },
        {
          image: 'eye-power',
          name: 'EyePower Villa',
          members: '2.1k members ·',
          posts: '812 posts'
        },
        {
          image: 'glow-zone',
          name: 'GlowZone Network',
          members: '2.1k members ·',
          posts: '812 posts'
        },
        {
          image: 'pregnancy',
          name: 'Pregnancy & Maternity',
          members: '2.1k members ·',
          posts: '812 posts'
        }
      ],
      guidelines: [
        'Protect personal information and respect the confidentiality of fellow members.',
        'Offer kindness and encouragement to others on their reproductive health journeys.',
        'Acknowledge the emotional nature of topics and communicate with empathy.',
        'Keep discussions focused on pregnancy, reproductive health, and fertility treatments.'
      ]
    }
  },
  methods: {
    handleSelection(selectedOption) {
      console.log(selectedOption) // Process selected option
    },
    openChatModal(itm) {
      this.selectedConversation = itm
      this.isConversationModalVisible = true
    }
  }
}
</script>

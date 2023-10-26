<template>
  <main class="py-10">
    <div class="space-y-6 bg-orange-100 p-6 rounded-md">
      <div class="flex items-center gap-x-6">
        <div>
          <img src="~/assets/icons/eclipse.svg" alt="laceholder" class="h-12 w-12">
        </div>
        <div>
          <h4 class="font-medium text-3xl">
            Cancer
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
    <section class="flex items-start gap-x-16 mt-10">
      <div class="space-y-6">
        <div class="border rounded-md shadow-lg p-3">
          <client-only>
            <vue-editor v-model="content" style="border:none" />
          </client-only>
          <div class="flex justify-end items-end py-3 pr-3">
            <button class="text-white bg-green-600 text-sm rounded-full py-2 w-3/12">
              Post
            </button>
          </div>
        </div>
        <div class="overflow-y-auto space-y-6">
          <div v-for="(item, index) in posts" :key="index" class="rounded-md bg-white border-[0.4px] shadow-lg flex p-4 space-x-6">
            <img alt="" class="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src="https://source.unsplash.com/40x40/?portrait?1">
            <div class="space-y-6">
              <div class="space-y-3">
                <div>
                  <h1 class="font-medium">
                    {{ item.author }}
                  </h1>
                  <p class="text-xs font-light">
                    {{ item.duration }}
                  </p>
                </div>
                <p class="text-xs font-light leading-snug text-justify">
                  {{ item.description }}
                </p>
              </div>
              <div class="flex justify-end items-end">
                <div class="flex items-center gap-x-6">
                  <div class="flex items-center gap-x-2 cursor-pointer">
                    <img src="~/assets/icons/comments.svg" alt="" class="h-4 w-4">
                    <p class="text-xs font-light">
                      {{ item.comments.length }} Comments
                    </p>
                  </div>
                  <div class="flex items-center gap-x-2 cursor-pointer">
                    <img src="~/assets/icons/save.svg" alt="" class="h-4 w-4">
                    <p class="text-xs font-light">
                      Save
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="~/assets/icons/more.svg" class="w-20 cursor-pointer" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      content: '<html>What’s on your Mind?</html>',
      title: 'Cancer Community',
      posts: [
        {
          id: 1,
          author: 'Alfred Seyitan',
          description: 'Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange:',
          duration: '3hrs ago.',
          comments: [
            {
              id: 2,
              author: 'Alade Victoria',
              description: 'Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange: ,Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange: Did yod overall health. Yellow/Orange: ',
              duration: '3hrs ago.'
            },
            {
              id: 3,
              author: 'Alade Victoria',
              description: 'Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange: ,Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange: Did yod overall health. Yellow/Orange: ',
              duration: '3hrs ago.'
            }
          ]
        },
        {
          id: 2,
          author: 'Alfred Seyitan',
          description: 'Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange:',
          duration: '3hrs ago.',
          comments: [
            {
              id: 1,
              author: 'Alade Victoria',
              description: 'Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange: ,Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange: Did yod overall health. Yellow/Orange: ',
              duration: '3hrs ago.'
            },
            {
              id: 1,
              author: 'Alade Victoria',
              description: 'Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange: ,Did you know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like spinach and kale are rich in vitamins A and C, as well as folate and fiber. They support immune function and overall health. Yellow/Orange: Did yod overall health. Yellow/Orange: ',
              duration: '3hrs ago.'
            }
          ]
        }

      ]
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
  }
}
</script>

<style>

</style>

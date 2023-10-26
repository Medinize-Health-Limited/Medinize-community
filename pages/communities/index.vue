<template>
  <main class="pb-20">
    <section class="md:flex items-start gap-x-16 mt-10 space-y-20 md:space-y-0">
      <div class="md:w-6/12 space-y-6">
        <div class="border rounded-md shadow-lg p-3">
          <client-only>
            <vue-editor v-model="content" style="border:none" />
          </client-only>
         <div class="flex justify-end items-end py-3 pr-3">
          <button class="text-white bg-green-600 text-sm rounded-full py-2 w-3/12">Post</button>
         </div>
        </div>
        <div class="overflow-y-auto space-y-6">
          <div v-for="(item, index) in posts" :key="index" class="rounded-md border-[0.4px] bg-white shadow-lg flex p-4 space-x-6">
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

      <div class="rounded-md bg-white border-t shadow-lg md:w-6/12 space-y-6">
        <h1 class="text-lg pl-10 tracking-wider pt-6">
          Explore  Communities
        </h1>

        <div class="">
          <div v-for="(item, index) in explore" :key="index" class="px-10 border-b cursor-pointer hover:bg-gray-50 space-y-2.5 py-3">
            <h3>{{ item.name }}</h3>
            <p class="text-justify font-light text-xs leading-loosed">
              {{ item.body }}
            </p>
           <p>
            <nuxt-link :to="`/communities/${item.id}`" class="text-[#077920FC] font-medium text-xs">
              Join Community
            </nuxt-link>
           </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
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
  components: {
    VueEditor
  },
  data () {
    return {
      content: '<html>What’s on your Mind?</html>',
      explore: [
        {
          id: 1,
          name: 'Cancer',
          body: ' know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like'
        },
        {
          id: 2,
          name: 'Diabetes',
          body: ' know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like'
        },
        {
          id: 3,
          name: 'Malaria',
          body: ' know that the colors of fruits and vegetables can tell us a lot about their nutritional benefits? Eating a variety of colorful foods can help boost your immune system and keep you feeling your best. Green: Leafy greens like'
        }
      ],
      posts: [
        {
          id: 1,
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
        },
        {
          id: 1,
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
  }
}
</script>

<style>

</style>

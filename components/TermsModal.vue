<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
    <div class="bg-white p-4 rounded-lg max-w-2xl w-full space-y-4 overflow-y-auto h-[500px]">
      <div class="flex justify-center items-center relative">
        <slot name="header" class="mt-6" />
        <div class="border-2 border-gray-600 rounded-full p-1 z-50 absolute right-0 top-0">
          <svg class="cursor-pointer" width="6" height="6" viewBox="0 0 6 6" fill="none"
            xmlns="http://www.w3.org/2000/svg" @click="closeModal">
            <path d="M4.76771 1.23218L1.23218 4.76771M4.76771 4.76771L1.23218 1.23218" stroke="#696969"
              stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // isAggrementTicked: false,
      // terms: [
      //   {
      //     id: 1,
      //     title: 'Respectful Conduct:',
      //     description: 'By joining ReproActive, you agree to engage in respectful and courteous behavior towards all members. Any form of harassment, discrimination, or offensive language will not be tolerated.'
      //   },
      //   {
      //     id: 2,
      //     title: 'Relevance of Content:',
      //     description: `All posts within ReproActive must be relevant to the theme and purpose of the community.
      //   Off-topic posts may be removed at the discretion of the community moderators.`
      //   },
      //   {
      //     id: 3,
      //     title: 'Appropriate Language:',
      //     description: 'Members are expected to use language that is inclusive, respectful, and appropriate for all audiences. Profanity, hate speech, or derogatory remarks are strictly prohibited.'
      //   },
      //   {
      //     id: 4,
      //     title: 'Protection of Privacy:',
      //     description: 'You’re not to share personal details that could compromise your privacy or the privacy of others within ReproActive. Respect the confidentiality of fellow members at all times.'
      //   },
      //   {
      //     id: 5,
      //     title: 'Mutual Support:',
      //     description: 'As a member of ReproActive, you are encouraged to offer support, encouragement, and constructive feedback to fellow members. Your contributions should aim to foster a positive and supportive environment for everyone.'
      //   },
      //   {
      //     id: 6,
      //     title: 'Reporting of Concerns:',
      //     description: 'If you encounter any behavior within ReproActive that violates these terms and conditions or makes you feel uncomfortable, please report it immediately.'
      //   }
      // ]
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped></style>

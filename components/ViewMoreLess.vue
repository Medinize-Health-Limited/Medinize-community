<template>
  <div class="space-y-2">
    <div>
      <!-- Show short text or full text based on `isExpanded` state -->
      <p class="text-gray-800">
        {{ isExpanded ? fullText : shortText }}
      </p>
    </div>
    <button
      :class="[fullText.length > previewLength ? 'visible' : 'hidden']"
      class="text-[#696969] hover:text-blue-700 font-medium transition-colors duration-200 ease-in-out text-sm"
      @click="toggleExpand"
    >
      <!-- Toggle button text -->
      {{ isExpanded ? 'View Less' : 'View More' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    fullText: {
      type: String,
      required: true
    },
    previewLength: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    shortText () {
      return this.fullText?.substring(0, this.previewLength) + '...'
    }
  },
  methods: {
    toggleExpand () {
      console.log('you clicked')
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style scoped>
/* Add Tailwind CSS classes or custom styles here */
</style>

<template>
  <div class="calendar">
    <div class="header">
      <span class="text-lg font-bold">{{ currentMonth }}</span>
    </div>
    <div class="days">
      <div v-for="day in daysInMonth" :key="day" :class="{ 'selected': day === currentDay }">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  },
  computed: {
    currentMonth () {
      const options = { month: 'long', year: 'numeric' }
      return this.currentDate.toLocaleDateString('en-US', options)
    },
    currentDay () {
      return this.currentDate.getDate()
    },
    daysInMonth () {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      const lastDay = new Date(year, month + 1, 0).getDate()
      return Array.from({ length: lastDay }, (_, i) => i + 1)
    }
  }
}
</script>

<style scoped>
.calendar {
  max-width: 600px;
  height: 300px;
  margin: 20px auto;
  margin-top: 0px;
  margin-bottom: 0px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.header {
  background-color: #0A8525FC;
  color: #fff;
  text-align: center;
  padding: 8px;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}

.days div {
  text-align: center;
  padding: 8px;
  cursor: pointer;
}

.selected {
  background-color: #0A8525FC;
  color: #fff;
}
</style>

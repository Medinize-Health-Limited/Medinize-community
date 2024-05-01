<template>
  <main class="rounded-lg bg-white border shadow">
    <div class="flex justify-between items-center bg-[#E6EDFE] py-3 px-6">
      <p class="lg:text-lg text-[#1E1E1E] font-semibold">
        Medical Issues
      </p>
      <p class="border-b-2 border-gray-700 font-semibold text-xs lg:text-base">
        See all
      </p>
    </div>
    <section class="p-6 overflow-y-auto h-[470px]">
      <div>
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
          <select id="tabs" name="tabs"
            class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            <option>Latest Issues</option>
            <option>Past Issues</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a href="#" class="pb-2 no-underline"
                :class="[activeTab === 'latest' ? 'border-[#53B3DB] border-b-4 text-gray-800' : 'border-transparent text-gray-500']"
                @click.prevent="activeTab = 'latest'">
                Latest Issues</a>
              <a href="#" class="pb-2 no-underline"
                :class="[activeTab === 'past' ? 'border-[#53B3DB] border-b-4 text-gray-800' : 'border-transparent text-gray-400']"
                @click.prevent="activeTab = 'past'">Past
                Issues</a>
            </nav>
          </div>
        </div>
      </div>

      <div v-for="itm in 6" :key="itm"
        class="flex justify-between items-center border-b border-gray-200 last:border-b-0 py-3">
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <div><img src="@/assets/img/avatar.png" class="lg:h-14 lg:w-14 h-10 w-10" alt=""></div>
          <div class="flex flex-col gap-y-1.5">
            <p class="py-0 my-0 text-xs lg:text-sm">
              Mrs Lawal
            </p>
            <p class="py-0 my-0 text-xs font-light">
              Today, 12:30 am - 01:00pm
            </p>
            <p class="py-0 my-0 font-semibold text-xs lg:text-sm">
              Medical complains - Seizures.....
            </p>
          </div>
        </div>
        <div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none"
              stroke="#4a4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'latest'
    }
  }
}
</script>

<template>
  <main class="space-y-6 my-10">
    <div class="space-y-3">
      <label class="text-gray-700 text-sm">Select the sign/symptoms/observation that best describe you below</label>
      <div class="w-full">
        <input type="text" placeholder="search..."
          class="py-3 pl-3 border-[0.4px] outline-none rounded-md bg-white shadow-sm w-full md:w-1/2">
      </div>
    </div>

    <div class="space-y-3">
      <label class="text-gray-700 text-sm">Express how you feel in the text box below : </label>
      <div>
        <textarea rows="6" cols="20"
          class="py-3 pl-3 border-[0.4px] outline-none rounded-md bg-white shadow-sm w-full md:w-9/12" />
      </div>
    </div>

    <div class="space-y-3">
      <label class="text-gray-700 text-sm">Drugs used if any?</label>
      <div>
        <textarea rows="6" cols="20"
          class="py-3 pl-3 border-[0.4px] outline-none rounded-md bg-white shadow-sm w-full md:w-9/12" />
      </div>
    </div>

    <div class="space-y-3">
      <label class="text-gray-700 text-sm">Select meeting type</label>
      <div>
        <select class="py-3 pl-3 border-[0.4px] outline-none rounded-md bg-white shadow-sm w-full md:w-1/2">
          <option value="">
            Select meeting type
          </option>
          <option value="virtual">
            Virtual
          </option>
          <option value="physical">
            Physical
          </option>
        </select>
      </div>
    </div>
    <div class="flex justify-end items-end">
      <button class="w-full md:w-3/12 bg-[#086406] text-white py-3.5 px-6 rounded-md text-sm">Send request</button>
    </div>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Medinize Community | Appointments',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Community appointments'
      }
    ]
  }
}
</script>

<style></style>

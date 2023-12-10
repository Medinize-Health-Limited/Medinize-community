<template>
  <main class="space-y-6 my-10 lg:w-5/12 bg-white rounded-md p-6 lg:p-10">
    <div class="space-y-3">
      <label class="text-gray-700 text-sm font-medium">Select the sign/symptoms/observation that best describe you below</label>
      <div class="w-full">
        <input
          type="text"
          placeholder="search..."
          class="py-3 pl-3 border-[0.9px] bg-gray-50 outline-none rounded-md shadow-sm w-full"
        >
      </div>
    </div>

    <div class="space-y-3 w-full">
      <label class="text-gray-700 text-sm font-medium">Express how you feel in the text box below : </label>
      <div>
        <textarea
          rows="6"
          cols="20"
          placeholder="please express how you feel below..."
          class="py-3 pl-3 border-[0.9px] bg-gray-50 resize-none outline-none rounded-md shadow-sm w-full"
        />
      </div>
    </div>

    <div class="space-y-3 w-full">
      <label class="text-gray-700 text-sm font-medium">Drugs used if any?</label>
      <div>
        <textarea
          rows="6"
          cols="20"
          placeholder="please enter drug used if any..."
          class="py-3 pl-3 border-[0.9px] bg-gray-50 placeholder-gray-500 resize-none outline-none rounded-md shadow-sm w-full"
        />
      </div>
    </div>

    <div class="space-y-3 w-full">
      <label class="text-gray-700 text-sm font-medium">Select meeting type</label>
      <div>
        <select class="py-3 px-3 border-[0.9px] bg-gray-50 outline-none rounded-md shadow-sm w-full">
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
      <button class="w-full bg-[#086406] text-white py-3.5 px-6 rounded-md text-sm">
        Send request
      </button>
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

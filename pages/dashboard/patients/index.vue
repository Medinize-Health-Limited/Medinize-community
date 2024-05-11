<template>
  <main class="">
    <div class="px-4 sm:px-6 lg:px-8 space-y-8 pt-10">
      <div class="flex">
        <div class="relative w-full flex gap-x-6">
          <input type="text" placeholder="Search for patient"
            class="rounded-lg border pl-10 py-2.5 border-gray-400 lg:w-5/12 outline-none">
          <img src="@/assets/icons/search.svg" alt="avatar" class="absolute left-4 top-4">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="52" rx="10" fill="white" />
            <path d="M30 26H22" stroke="#363853" stroke-width="1.5" stroke-linecap="round" />
            <path d="M32 21L20 21" stroke="#363853" stroke-width="1.5" stroke-linecap="round" />
            <path d="M24 31L28 31" stroke="#363853" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <div class="flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="relative">
              <!-- Selected row actions, only show when rows are selected. -->
              <!-- <div class="absolute top-0 left-14 flex h-12 items-center space-x-3 bg-white sm:left-12"> -->
              <!--   <button type="button" class="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">Bulk edit</button> -->
              <!--   <button type="button" class="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">Delete all</button> -->
              <!-- </div> -->

              <table class="min-w-full table-fixed divide-y divide-gray-300 bg-white rounded-2xl">
                <thead>
                  <tr>
                    <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
                      <input type="checkbox"
                        class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </th>
                    <th scope="col" class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      Patient ID
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Full name
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Issue
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Meeting Type
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                      <span class="">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <!-- Selected: "bg-gray-50" -->
                  <tr v-for="itm in 6" :key="itm">
                    <td class="relative px-7 sm:w-12 sm:px-6">
                      <input type="checkbox"
                        class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </td>
                    <!-- Selected: "text-indigo-600", Not Selected: "text-gray-900" -->
                    <td class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                      0001
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Adewusi Adesannu
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      12-12-2023
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Seizures & 4 more
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Virtual
                    </td>
                    <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <a href="#" class="text-indigo-600 hover:text-indigo-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none"
                          stroke="#4a4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-b-2xl"
          aria-label="Pagination">
          <div class="hidden sm:block">
            <p class="text-sm text-gray-700">
              Showing
              <span class="font-medium">1</span>
              to
              <span class="font-medium">10</span>
              of
              <span class="font-medium">20</span>
              results
            </p>
          </div>
          <div class="flex flex-1 justify-between sm:justify-end">
            <a href="#"
              class="relative inline-flex items-center no-underline rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Previous</a>
            <a href="#"
              class="relative ml-3 inline-flex items-center no-underline rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Next</a>
          </div>
        </nav>
      </div>
    </div>
  </main>
</template>

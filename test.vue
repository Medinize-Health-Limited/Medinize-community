<template>
  <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
    <dt class="font-medium text-gray-900">
      <h1 class="text-base text-[#4D4D4D] font-semibold">Address</h1>
      <p class="text-[#999999] font-light text-sm">We can contact your from here</p>
    </dt>
    <dd class="text-gray-700 sm:col-span-2">
      <div class="flex items-center gap-x-4 w-full">
        <div class="space-y-1 w-full">
          <label class="font-medium text-xs text-[#666666]">Address</label>
          <input v-model="form.address_street" type="text" @input="handleInput" placeholder="Search for an address..."
            @blur="closeDropdown"
            class="w-full focus:border-[#F57921] focus:ring-[0.6px] focus:ring-[#F57921] focus:border-[0.6px] py-3.5 rounded-md px-3 bg-gray-100 border border-[#F57921] focus:outline-none" />
        </div>
      </div>
      <div>
        <ul v-if="showDropdown && !loadingLocations && searchResults?.length"
          class=" z-10 w-full border bg-white border-gray-300 rounded-b shadow-lg pl-0 ml-0">
          <li v-for="address in searchResults" :key="address.id" @click="selectAddress(address)"
            class="p-2 cursor-pointer hover:bg-gray-100">
            {{ address.formatted }}
          </li>
        </ul>
        <div v-else-if="loadingLocations && !searchResults?.length && !showDropdown">
          <div class="h-full bg-red-300">
            <div class="h-10 bg-slate-100 rounded animate-pulse"></div>
          </div>
        </div>
        <!-- <div v-else>
<p class="font-medium text-sm text-center text-gray-600 py-3">No data available for search key {{ form.address_street }}</p>
</div> -->
      </div>
    </dd>
  </div>

  <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
    <dt class="font-medium text-gray-900">
      <h1 class="text-base text-[#4D4D4D] font-semibold">Upload utility bill</h1>
      <p class="text-[#999999] font-light text-sm">Let’s have an idea of your utility bill</p>
    </dt>
    <dd class="text-gray-700 sm:col-span-2">

      <div>
        <label for="utilityBill" class="cursor-pointer">
          <div class="col-span-full" v-if="!selectedUtilityBill">
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd" />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label for=""
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <!-- <input id="file-upload" name="file-upload" type="file" class="sr-only"> -->
                    <input accept=".pdf,.png,.jpg,.jpeg,.gif" id="utilityBill" type="file" class="sr-only"
                      @change="handleUtilityBillUpload">
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <!-- <img v-if="!selectedUtilityBill" src="@/assets/icons/upload-empty-state.svg" alt="" /> -->

        </label>
        <div class="flex gap-x-3 items-center">
          <div v-if="!isPdf && selectedUtilityBill">
            <img :src="selectedUtilityBill" alt="Selected Image"
              class="w-32 h-32 border-dotted p-3 border border-gray-400 rounded-lg">
            <label for="utilityBill" class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-1 font-semibold">
              Edit Utility bill
              <input accept="image/*,.pdf" id="utilityBill" type="file" class="hidden"
                @change="handleUtilityBillUpload">
            </label>
          </div>
          <div v-if="isPdf && selectedUtilityBill">
            <iframe :src="selectedUtilityBill" class="mt-2" style="width: 100%; height: 500px;"></iframe>
            <label for="utilityBill" class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-1 font-semibold">
              Edit Utility bill
              <input accept="image/*,.pdf" id="utilityBill" type="file" class="hidden"
                @change="handleUtilityBillUpload">
            </label>
          </div>
          <div v-if="docfileError" class="error text-red-500 text-xs pt-2 font-medium">
            {{ docfileError }}
          </div>
        </div>
      </div>
    </dd>
  </div>

  <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
    <dt class="font-medium text-gray-900">
      <h1 class="text-base text-[#4D4D4D] font-semibold">Upload document</h1>
      <p class="text-[#999999] font-light text-sm">Let’s have an idea of your document</p>
    </dt>
    <dd class="text-gray-700 sm:col-span-2">

      <div>
        <label for="identityDocument" class="cursor-pointer">
          <div class="col-span-full" v-if="!selectedDocument">
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd" />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label for=""
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <!-- <input id="file-upload" name="file-upload" type="file" class="sr-only"> -->
                    <input accept=".pdf,.png,.jpg,.jpeg,.gif" id="identityDocument" type="file" class="sr-only"
                      @change="handleDocumentUpload">
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <!-- <img v-if="!selectedUtilityBill" src="@/assets/icons/upload-empty-state.svg" alt="" /> -->

        </label>
        <div class="flex gap-x-3 items-center">
          <div v-if="!isPdf && selectedDocument">
            <img :src="selectedDocument" alt="Selected Image"
              class="w-32 h-32 border-dotted p-3 border border-gray-400 rounded-lg">
            <label for="identityDocument"
              class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-1 font-semibold">
              Edit document
              <input accept="image/*,.pdf" id="identityDocument" type="file" class="hidden"
                @change="handleDocumentUpload">
            </label>
          </div>
          <div v-if="isPdf && selectedDocument">
            <iframe :src="selectedDocument" class="mt-2" style="width: 100%; height: 500px;"></iframe>
            <label for="identityDocument"
              class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-1 font-semibold">
              Edit document
              <input accept="image/*,.pdf" id="identityDocument" type="file" class="hidden"
                @change="handleDocumentUpload">
            </label>
          </div>
          <div v-if="docError" class="error text-red-500 text-xs pt-2 font-medium">
            {{ docError }}
          </div>
        </div>
      </div>
    </dd>
  </div>
</template>

<script>
import DashboardPageHeader from '@/components/core/DashboardPageHeader.vue'
export default {
    data() {
        return {
            searchResults: [],
            documentTypes: [],
            loadingLocations: false,
            proccessing: false,
            selectedDocument: null,
            docError: null,
            docfileError: null,
            isImage: false,
            isPdf: false,
            showDropdown: false,
            isUpdateProfile: false,
            selectedImage: null,
            selectedUtilityBill: null,
            debounceTimeout: null,
            loading: false,
            uploading: false,
            newPicture: null,
            form: {
                email: '',
                first_name: '',
                utility_bill_url: '',
                utility_bill_status: '1',
                last_name: '',
                address_street: '',
                address_state_cd: '',
                address_country_cd: '',
                document_type: "",
                document_number: "",
                issue_date: "",
                expiry_date: "",
                document_url: "",
                photo: ""

            },
            pictureForm: {
                picture: ''
            }
        }
    },
    components: {
        DashboardPageHeader
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.form.photo = reader.result;
                    this.newPicture = reader.result;
                    this.selectedImage = reader.result;
                };
            }
        },
        handleUtilityBillUpload(event) {
            const file = event.target.files[0];
            if (file) {
                if (file.size > 5242880) {
                    // 5MB in bytes
                    this.docfileError =
                        "File is too large. Please upload a file smaller than 5MB.";
                    return;
                }
                const fileType = file.type;
                this.isPdf = fileType === "application/pdf";
                if (
                    this.isPdf ||
                    fileType === "image/png" ||
                    fileType === "image/jpeg" ||
                    fileType === "image/gif"
                ) {
                    const reader = new FileReader();

                    reader.onload = () => {
                        this.form.utility_bill_url = reader.result;
                    };
                    reader.readAsDataURL(file);
                    // Generate a URL for the file
                    this.selectedUtilityBill = URL.createObjectURL(file);
                    // this.form.passport = URL.createObjectURL(file);
                } else {
                    this.docfileError =
                        "Unsupported file type. Please upload a PDF, PNG, JPG, or GIF file.";
                }


            }
        },
        handleDocumentUpload(event) {
            const file = event.target.files[0];
            if (file) {
                if (file.size > 5242880) {
                    this.docError =
                        "File is too large. Please upload a file smaller than 5MB.";
                    return;
                }
                const fileType = file.type;
                this.isPdf = fileType === "application/pdf";
                if (
                    this.isPdf ||
                    fileType === "image/png" ||
                    fileType === "image/jpeg" ||
                    fileType === "image/gif"
                ) {
                    const reader = new FileReader();

                    reader.onload = () => {
                        this.form.document_url = reader.result;
                    };
                    reader.readAsDataURL(file);
                    this.selectedDocument = URL.createObjectURL(file);
                } else {
                    this.docError =
                        "Unsupported file type. Please upload a PDF, PNG, JPG, or GIF file.";
                }
            }
        },
        async updateProfileFormInformation() {
            this.loading = true;
            var mydata = this.$wumzee.encrypt(this.form);
            const data = {
                data: mydata,
            };
            this.$axios
                .post("/auth/corporate/details", data)
                .then((response) => {
                    this.$toastr.s(response.data.success.message);
                    this.loading = false;
                })
                .catch((error) => {
                    this.$toastr.e(error.response.data.error.message);
                    this.loading = false;
                }).finally(() => {
                    this.uploading = false;
                })
        },
        async updateCompanyProfile() {
            this.uploading = true;
            let computedForm = {
                picture: ''
            }
            if (!this.newPicture) {
                computedForm.picture = this.companyProfileObj.logo
            } else {
                computedForm.picture = this.newPicture
            }
            var mydata = this.$wumzee.encrypt(computedForm);
            const data = {
                data: mydata,
            };
            if (this.newPicture) {
                this.handleProfileUploadWithNewProfilePicture(data)
            } else {
                await this.updateProfileFormInformation()
            }
        },
        async handleProfileUploadWithNewProfilePicture(data) {
            this.$axios
                .post("/auth/personal-info/submit-pics", data)
                .then(async (response) => {
                    // this.$toastr.s(response.data.success.message);
                    this.uploading = false;
                    await this.updateProfileFormInformation()
                })
                .catch((error) => {
                    this.$toastr.e(error.response.data.error.message);
                }).finally(() => {
                    this.uploading = false;
                })
        },
        async fetchCompanyProfile() {
            await this.$axios.get("/auth/personal-info/details").then((response) => {
                this.companyProfileObj = response.data.success.data;
                this.pictureForm = response.data.success.data.logo
                this.form = response.data.success.data;
            }).catch(() => {
                this.$toastr.e(error.response.data.error.message);
                this.loading = false;
            })
        },
        handleAddressAutocomplete(val) {
            this.loadingLocations = true
            fetch(https://api.geoapify.com/v1/geocode/autocomplete?text=${val}&format=json&apiKey=5be2a6d3ac7d4b9abf876fe91878aa5e)
                .then(response => response.json())
                .then(result => {
                    this.showDropdown = true;
                    console.log(result.results, 'here')
                    this.searchResults = result.results
                })
                .catch(error => this.$toastr.e(error.response.data.error.message)).finally(() => this.loadingLocations = false);
        },
        handleInput() {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(() => {
                this.handleAddressAutocomplete(this.form.address_street)
            }, 500);
        },
        selectAddress(address) {
            this.form.address_city = address.city
            this.form.address_country_cd = address.country_code
            this.form.address_street = address.formatted;
            this.showDropdown = false;
        },
        closeDropdown() {
            // Delay closing the dropdown to handle clicks on dropdown items
            setTimeout(() => {
                this.showDropdown = false;
            }, 200);
        },
        async getDocumentTypes() {
            await this.$axios.get("/lov/GetIdentity").then((response) => {
                console.log(response.data, 'ghfdsfhhdgfdhjfgdfgdfdf')
                this.documentTypes = response.data.result[0].identity.map((item) => item.IDENTIFICATION_CD)
            }).catch(() => {
                this.$toastr.e(error.response.data.error.message);
                this.loading = false;
            })
        },
        createDirector() {
            this.proccessing = true;
            var mydata = this.$wumzee.encrypt(this.form);
            const data = {
                data: mydata,
            };
            this.$axios
                .post("/auth/add-director", data)
                .then((response) => {
                    console.log(response.data.data, 'cities here')
                    this.$toastr.s(response.data.success.message);
                    this.citiesList = response.data.data.map(city => city)
                    this.$router.push('/dashboard/corporate/account-verification/corporate-kyc/directors')
                })
                .catch((error) => {
                    this.$toastr.e(error.response.data.error.message);
                    this.loadingCities = false;
                }).finally(() => {
                    this.proccessing = false;
                })
        }
    },
    beforeDestroy() {
        if (this.selectedUtilityBill) {
            URL.revokeObjectURL(this.selectedUtilityBill);
        }
        if (this.selectedDocument) {
            URL.revokeObjectURL(this.selectedDocument);
        }
        if (this.selectedImage) {
            URL.revokeObjectURL(this.selectedImage);
        }
    },
    mounted() {
        this.getDocumentTypes()
    },
    computed: {
        isFormEmpty() {
            return !!(this.form.last_name && this.form.first_name && this.form.address_street && this.form.address_city && this.form.address_country_cd && this.form.photo && this.form.utility_bill_url && this.form.utility_bill_status && this.form.document_type && this.form.document_number && this.form.issue_date && this.form.expiry_date && this.form.document_url)
        }
    }
}
</script>

<style></style>

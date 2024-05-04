<template>
  <section>
    <div v-if="activeStep === 'base'" class="grid grid-cols-2 gap-x-20 w-10/12 mx-auto pt-20">
      <section class="relative">
        <div class="absolute w-full top-0">
          <img src="@/assets/img/logo.png" class="h-20 w-44" alt="logo">
        </div>
        <img src="@/assets/img/professional.png">
        <div class="absolute w-full bottom-0 p-10">
          <div>
            <div class="pb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="24" y="24" width="24" height="24" rx="4" transform="rotate(180 24 24)" fill="#0C9609" />
                <path d="M18 7H15L13 11V17H19V11H16L18 7ZM10 7H7L5 11V17H11V11H8L10 7Z" fill="white" />
              </svg>
            </div>

            <p class="text-white font-light">
              “Medinize transformed how I connect with patients! Remote consultations and
              a user-friendly platform make
              appointments a breeze for both me and them. Top-notch support ensures a smooth experience. Highly
              recommend
              for expanding your telemedicine options!”
            </p>
            <p class="text-white font-semibold">
              Jumoke Adebowale - Gynecologist
            </p>
          </div>
        </div>
      </section>
      <form class="pt-2 space-y-10" @submit.prevent="handleSignup">
        <div>
          <h1 class="text-3xl text-[#0A0A0A] font-semibold">
            Sign up
          </h1>
          <p class="text-gray-500 font-light max-w-lg leading-relaxed">
            {{ activeStep === 'base' ? `Enter your details below and kindly make sure they match with your certificate
            details` : `Hey! upload this
            necessary document to finish up your sign up` }}
          </p>
        </div>
        <div v-if="activeStep === 'base'" class="space-y-6">
          <div class="flex w-full space-x-10 ">
            <div class="relative w-full">
              <label for="name"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">First
                Name</label>
              <input id="name" v-model="form.first_name" type="text" name="name"
                class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            </div>

            <div class="relative w-full">
              <label for="name"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Last
                Name</label>
              <input id="name" v-model="form.last_name" type="text" name="name"
                class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            </div>
          </div>

          <div class="relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Email</label>
            <input id="name" v-model="form.email" type="email" name="name"
              class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
          </div>

          <div class="relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Phone Number
              Name</label>
            <input id="name" v-model="form.phone_number" name="name" type="tel"
              class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
          </div>

          <div class="flex w-full space-x-10">
            <div class="relative w-full">
              <label for="name"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Gender</label>
              <select id="name" v-model="form.gender" type="text" name="name"
                class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
                <option value="male">
                  Male
                </option>
                <option value="female">
                  Female
                </option>
              </select>
            </div>

            <div class="relative w-full">
              <label for="name"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Date Of
                Birth</label>
              <input id="name" v-model="form.date_of_birth" type="date" name="date"
                class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            </div>
          </div>

          <div class="relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Password</label>
            <input id="name" v-model="form.password" type="text" name="name"
              :type="is_password_eye_open ? 'text' : 'password'"
              class="block w-full rounded-md border border-gray-100 py-3 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            <div class="absolute right-6 top-4 ">
              <img :src="require(`@/assets/icons/${togglePasswordEye}.svg`)" alt="" class="h-6 w-6 cursor-pointer"
                @click="is_password_eye_open = !is_password_eye_open">
            </div>
          </div>

          <!-- <div class="w-full">
            <label for="phone" class="sr-only" />
            <input id="phone" v-model="form.phone_number" type="tel"
              class="py-3 rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Enter phone number">
          </div>
          <div class="w-full">
            <label for="fullname" class="sr-only" />
            <input id="fullname" v-model="form.full_name" type="text"
              class="py-3 rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Enter full name">
          </div>
          <div class="text-gray-700 sm:col-span-2">
            <div class="flex items-center gap-x-4 w-full">
              <div class="space-y-1 w-full">
                <input v-model="form.address_street" type="text" placeholder="Home Address"
                  class="w-full focus:border-[#F57921] focus:ring-[0.6px] focus:ring-[#F57921] focus:border-[0.6px] py-3.5 rounded-md px-3 bg-gray-100 border border-[#F57921] focus:outline-none"
                  @input="handleInput" @blur="closeDropdown">
              </div>
            </div>
            <div>
              <ul v-if="showDropdown && !loadingLocations && searchResults?.length"
                class=" z-10 w-full border bg-white border-gray-300 rounded-b shadow-lg pl-0 ml-0">
                <li v-for="address in searchResults" :key="address.id" class="p-2 cursor-pointer hover:bg-gray-100"
                  @click="selectAddress(address)">
                  {{ address.formatted }}
                </li>
              </ul>
              <div v-else-if="loadingLocations && !searchResults?.length && !showDropdown">
                <div class="h-full bg-red-300">
                  <div class="h-10 bg-slate-100 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <label for="state" class="sr-only" />
            <input id="state" v-model="form.state_of_origin" type="text"
              class="py-3 rounded-md w-full px-3 border outline-none border-gray-300" placeholder="State of origin">
          </div>
          <div class="w-full relative">
            <label for="password" class="sr-only" />
            <input id="password" v-model="form.password" :type="is_password_eye_open ? 'text' : 'password'"
              class="py-3 rounded-md w-full px-3 border outline-none border-gray-300" placeholder="Enter Password">
            <div class="absolute right-6 top-4 ">
              <img :src="require(`@/assets/icons/${togglePasswordEye}.svg`)" alt="" class="h-6 w-6 cursor-pointer"
                @click="is_password_eye_open = !is_password_eye_open">
            </div>
          </div> -->
          <div class="w-full">
            <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']" type="button"
              :disabled="!isFormValid || processing"
              class="text-white text-sm md:text-sm md:py-3 py-2.5 w-4/12 rounded-lg text-center bg-[#064B05]"
              @click="activeStep = 'upload'">
              {{ processing ? 'processing...' : 'Proceed' }}
            </button>
            <p class="font-light text-sm pt-3">
              Not a professional? <nuxt-link to="#" class="text-[#0C9609] font-semibold"
                @click.prevent="handleSelectedSignup('patient')">
                Sign up as a customer
              </nuxt-link>
            </p>
          </div>
        </div>
      </form>
    </div>
    <div v-if="activeStep === 'upload'" class="max-w-2xl mx-auto space-y-8 rounded-lg bg-white p-4 border mt-16">
      <h1 class="py-0 my-0 font-semibold">Almost there!</h1>
      <p class="py-0 my-0">We just need a few more details to get you started.</p>
      <div class="w-full">
        <img src="@/assets/img/upload.png" class="h- w-60 object-cover object-center" alt="">
      </div>
      <div class="flex w-full space-x-10 ">
        <div class="relative w-full">
          <label for="name"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Name of
            Profession</label>
          <input id="name" v-model="form.first_name" type="text" name="name"
            class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
        </div>

        <div class="relative w-full">
          <label for="name"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Expertise</label>
          <input id="name" v-model="form.last_name" type="text" name="name"
            class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
        </div>
      </div>

      <div class="flex w-full space-x-10">
        <div class="relative w-full">
          <label for="name"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Years of
            Practice</label>
          <select id="name" v-model="form.gender" type="text" name="name"
            class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            <option value="male">
              Male
            </option>
            <option value="female">
              Female
            </option>
          </select>
        </div>

        <div class="relative w-full">
          <label for="name"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Nationality</label>
          <select id="name" v-model="form.gender" type="text" name="name"
            class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            <option value="male">
              Male
            </option>
            <option value="female">
              Female
            </option>
          </select>
        </div>
      </div>

      <div class="text-gray-700 sm:col-span-2">
        <div class="flex items-center gap-x-4 w-full">
          <div class="space-y-1 w-full relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Address</label>
            <input v-model="form.address_street" type="text" placeholder="Home Address"
              class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400"
              @input="handleInput" @blur="closeDropdown">
          </div>
        </div>
        <div>
          <ul v-if="showDropdown && !loadingLocations && searchResults?.length"
            class=" z-10 w-full border bg-white border-gray-300 rounded-b shadow-lg pl-0 ml-0">
            <li v-for="address in searchResults" :key="address.id" class="p-2 cursor-pointer hover:bg-gray-100"
              @click="selectAddress(address)">
              {{ address.formatted }}
            </li>
          </ul>
          <div v-else-if="loadingLocations && !searchResults?.length && !showDropdown">
            <div class="h-full bg-red-300">
              <div class="h-10 bg-slate-100 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="">
          <label for="utilityBill" class="cursor-pointer w-full">
            <div v-if="!selectedUtilityBill" class="w-full rounded-md">
              <div class="flex justify-between items-center border rounded-lg border-gray-400 px-6 relative">
                <p class="text-[#676767] pt-3">Practicing License </p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V2M12 2L15 5.5M12 2L9 5.5" stroke="#1E1E1E" stroke-opacity="0.7" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M8 22H16C18.828 22 20.243 22 21.121 21.122C22 20.242 22 18.829 22 16V15C22 12.172 22 10.758 21.121 9.87895C20.353 9.11095 19.175 9.01395 17 9.00195M7 9.00195C4.825 9.01395 3.647 9.11095 2.879 9.87895C2 10.758 2 12.172 2 15V16C2 18.829 2 20.243 2.879 21.122C3.179 21.422 3.541 21.619 4 21.749"
                    stroke="#1E1E1E" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <label for=""
                  class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">
                  <input id="utilityBill" accept=".pdf,.png,.jpg,.jpeg,.gif" type="file"
                    class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400 sr-only"
                    @change="handleProfessionalCertificateUpload">
                </label>
              </div>
            </div>
          </label>
          <div class="flex gap-x-3 items-center">
            <div v-if="!isPdf && selectedUtilityBill" class="w-full">
              <img :src="selectedUtilityBill" alt="Selected Image"
                class="w-full h-44 object-center object-cover border-dotted border border-gray-400 rounded-lg">
              <label for="utilityBill"
                class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-0.5 pt-3 font-semibold">
                Update Practicing License
                <input id="utilityBill" accept="image/*,.pdf" type="file" class="hidden"
                  @change="handleProfessionalCertificateUpload">
              </label>
            </div>
            <div v-if="isPdf && selectedUtilityBill">
              <iframe :src="selectedUtilityBill" class="mt-2" style="width: 100%; height: 500px;" />
              <label for="utilityBill"
                class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-0.5 pt-3 font-semibold">
                Update Practicing License
                <input id="utilityBill" accept="image/*,.pdf" type="file" class="hidden"
                  @change="handleProfessionalCertificateUpload">
              </label>
            </div>
            <div v-if="docfileError" class="error text-red-500 text-xs pt-2 font-medium">
              {{ docfileError }}
            </div>
          </div>
        </div>

        <div class="">
          <label for="identityDocument" class="cursor-pointer w-full">
            <div v-if="!selectedDocument" class="w-full">
              <div class="flex justify-between items-center border rounded-lg border-gray-400 px-6">
                <p class="text-[#676767] pt-3">Professional Certificate</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V2M12 2L15 5.5M12 2L9 5.5" stroke="#1E1E1E" stroke-opacity="0.7" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M8 22H16C18.828 22 20.243 22 21.121 21.122C22 20.242 22 18.829 22 16V15C22 12.172 22 10.758 21.121 9.87895C20.353 9.11095 19.175 9.01395 17 9.00195M7 9.00195C4.825 9.01395 3.647 9.11095 2.879 9.87895C2 10.758 2 12.172 2 15V16C2 18.829 2 20.243 2.879 21.122C3.179 21.422 3.541 21.619 4 21.749"
                    stroke="#1E1E1E" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <label for="" class="relative cursor-pointer hidden rounded-md bg-white font-semibold">
                  <input id="identityDocument" accept=".pdf,.png,.jpg,.jpeg,.gif" type="file" class="sr-only"
                    @change="handlePracticingLicenseUpload">
                </label>
              </div>
            </div>
          </label>
          <div class="flex gap-x-3 items-center">
            <div v-if="!isPdf && selectedDocument" class="w-full">
              <img :src="selectedDocument" alt="Selected Image"
                class="w-full h-44 object-center object-cover border-dotted border border-gray-400 rounded-lg">
              <label for="identityDocument"
                class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-0.5 pt-3 font-semibold">
                Update Professional Certificate
                <input id="identityDocument" accept="image/*,.pdf" type="file" class="hidden"
                  @change="handlePracticingLicenseUpload">
              </label>
            </div>
            <div v-if="isPdf && selectedDocument">
              <iframe :src="selectedDocument" class="mt-2" style="width: 100%; height: 500px;" />
              <label for="identityDocument"
                class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-0.5 pt-3 font-semibold">
                Update Professional Certificate
                <input id="identityDocument" accept="image/*,.pdf" type="file" class="hidden"
                  @change="handlePracticingLicenseUpload">
              </label>
            </div>
            <div v-if="docError" class="error text-red-500 text-xs pt-2 font-medium">
              {{ docError }}
            </div>
          </div>
        </div>
      </div>

      <div class="w-11/12">
        <button :class="[!isUploadFormValid || processing ? 'cursor-not-allowed opacity-25' : '']" type="submit"
          :disabled="!isUploadFormValid || processing"
          class="text-white text-sm md:text-sm font-semibold md:py-3 py-3 rounded-lg text-center w-4/12  bg-[#0A7D08]">
          {{ processing ? 'processing...' : 'Sign up' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
const { countryCodeEmoji } = require('country-code-emoji')
const lookup = require('country-code-lookup')
const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
export default {
  layout: 'auth',
  data() {
    return {
      searchResults: [],
      loadingLocations: false,
      selectedDocument: null,
      isPdf: false,
      is_password_eye_open: false,
      is_confirm_password_eye_open: false,
      selectedUtilityBill: null,
      debounceTimeout: null,
      showDropdown: false,
      processing: false,
      errorMessage: '',
      showPassword: false,
      selected: null,
      countryFlag: '',
      activeStep: 'upload',
      docError: null,
      docfileError: null,
      options: [],
      form: {
        address_street: '',
        full_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        practicing_license: '',
        professional_certificate: '',
        password: '',
        state_of_origin: ''
      }
    }
  },
  computed: {
    togglePasswordEye() {
      return !this.is_password_eye_open ? 'eye-close' : 'eye-open'
    },
    toggleConfirmPasswordEye() {
      return !this.is_confirm_password_eye_open ? 'eye-close' : 'eye-open'
    },
    countries() {
      const list = countries.getNames('en', { select: 'alias' })
      return Object.keys(list).map(key => ({ value: key, label: list[key] }))
    },
    isFormValid() {
      return !!(this.form?.full_name?.length &&
        this.form?.address_street?.length &&
        this.form?.email?.length &&
        this.form?.phone_number?.length &&
        this.form?.password?.length && this.form.state_of_origin)
    },
    isUploadFormValid() {
      return !!(this.form?.practicing_license?.length &&
        this.form?.professional_certificate?.length)
    }

  },
  watch: {
    selected() {
      const dialCodeLookUp = lookup.byInternet(this.selected)
      const response = countryCodeEmoji(this.selected)
      this.countryFlag = response
    }
  },
  methods: {
    handleSelectedSignup() {
      this.$router.push({ path: '/signup-options', query: { user: 'patient' } })
    },
    handleSignup() {
      this.processing = true
      this.$axios
        .post('https://medinizebackend.onrender.com/signup/', this.form)
        .then((res) => {
          this.$toastr.s('Signup was successful')
          this.$router.push('/')
        })
        .catch((error) => {
          this.errorMessage = error && error?.response?.data?.error
          this.$toastr.e(this.errorMessage)
        })
        .finally(() => {
          this.processing = false
        })
    },
    handleAddressAutocomplete(val) {
      this.loadingLocations = true
      fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${val}&format=json&apiKey=5be2a6d3ac7d4b9abf876fe91878aa5e`)
        .then(response => response.json())
        .then((result) => {
          this.showDropdown = true
          this.searchResults = result.results
        })
        .catch(error => this.$toastr.e(error.response.data.error.message)).finally(() => { this.loadingLocations = false })
    },
    handleInput() {
      clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.handleAddressAutocomplete(this.form.address_street)
      }, 500)
    },
    selectAddress(address) {
      this.form.address_city = address.city
      this.form.state_of_origin = address.state + ' ' + address.suburb ? address.suburb : ''
      this.form.address_country_cd = address.country_code
      this.form.address_street = address.formatted
      this.showDropdown = false
    },
    handleImageUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.form.photo = reader.result
          this.newPicture = reader.result
          this.selectedImage = reader.result
        }
      }
    },
    handleProfessionalCertificateUpload(event) {
      const file = event.target.files[0]
      if (file) {
        if (file.size > 5242880) {
          // 5MB in bytes
          this.docfileError =
            'File is too large. Please upload a file smaller than 5MB.'
          return
        }
        const fileType = file.type
        this.isPdf = fileType === 'application/pdf'
        if (
          this.isPdf ||
          fileType === 'image/png' ||
          fileType === 'image/jpeg' ||
          fileType === 'image/gif'
        ) {
          const reader = new FileReader()

          reader.onload = () => {
            this.form.professional_certificate = reader.result
          }
          reader.readAsDataURL(file)
          // Generate a URL for the file
          this.selectedUtilityBill = URL.createObjectURL(file)
          // this.form.passport = URL.createObjectURL(file);
        } else {
          this.docfileError =
            'Unsupported file type. Please upload a PDF, PNG, JPG, or GIF file.'
        }
      }
    },
    handlePracticingLicenseUpload(event) {
      const file = event.target.files[0]
      if (file) {
        if (file.size > 5242880) {
          this.docError =
            'File is too large. Please upload a file smaller than 5MB.'
          return
        }
        const fileType = file.type
        this.isPdf = fileType === 'application/pdf'
        if (
          this.isPdf ||
          fileType === 'image/png' ||
          fileType === 'image/jpeg' ||
          fileType === 'image/gif'
        ) {
          const reader = new FileReader()

          reader.onload = () => {
            this.form.practicing_license = reader.result
          }
          reader.readAsDataURL(file)
          this.selectedDocument = URL.createObjectURL(file)
        } else {
          this.docError =
            'Unsupported file type. Please upload a PDF, PNG, JPG, or GIF file.'
        }
      }
    },
    closeDropdown() {
      // Delay closing the dropdown to handle clicks on dropdown items
      setTimeout(() => {
        this.showDropdown = false
      }, 200)
    }
  }
}
</script>

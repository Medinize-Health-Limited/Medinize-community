<template>
  <form @submit.prevent="handleSignup">
    <div v-show="activeStep === 'base'" class="xl:grid grid-cols-2 gap-x-20 w-10/12 mx-auto pt-20">
      <section class="relative hidden xl:block">
        <div class="absolute w-full top-0">
          <img src="@/assets/img/logo.png" class="h-20 w-44" alt="logo">
        </div>
        <img src="@/assets/img/patients.png">
        <div class="absolute w-full bottom-0 p-10">
          <div>
            <div class="pb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="24" y="24" width="24" height="24" rx="4" transform="rotate(180 24 24)" fill="#0C9609" />
                <path d="M18 7H15L13 11V17H19V11H16L18 7ZM10 7H7L5 11V17H11V11H8L10 7Z" fill="white" />
              </svg>
            </div>

            <p class="text-white font-light">
              "Medinize has revolutionized my approach to healthcare. The seamless booking process and the ability to
              consult with doctors from anywhere have been a lifesaver. The doctors are attentive"
            </p>
            <p class="text-white font-semibold">
              Charis Johnson - Telemedicine user
            </p>
          </div>
        </div>
      </section>
      <div class="pt-2 space-y-10 w-full">
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
        <div v-show="activeStep === 'base'" class="space-y-8 xl:space-y-6">
          <div class="lg:flex w-full lg:space-x-10 space-y-8 xl:space-y-0">
            <div class="relative w-full">
              <label for="fname"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">First
                Name</label>
              <input id="fname" v-model="form.firstname" type="text" name="fname"
                class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            </div>

            <div class="relative w-full">
              <label for="lname"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Last
                Name</label>
              <input id="lname" v-model="form.lastname" type="text" name="lname"
                class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            </div>
          </div>

          <div class="relative">
            <label for="email"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Email</label>
            <input id="email" v-model="form.email" type="email" name="email"
              class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
          </div>

          <div class="relative">
            <label for="phone"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Phone
              Number</label>
            <input id="phone" v-model="form.phone_number" name="phone" type="tel"
              class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
          </div>

          <div class="lg:flex w-full lg:space-x-10 space-y-8 xl:space-y-0">
            <div class="relative w-full">
              <label for="gender"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Gender</label>
              <select id="gender" v-model="form.gender" name="gender"
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
              <label for="dob"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Date Of
                Birth</label>
              <input id="dob" v-model="form.date_of_birth" type="date" name="dob"
                class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            </div>
          </div>

          <div class="relative">
            <label for="password"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Password</label>
            <input id="password" v-model="form.password" name="password"
              :type="is_password_eye_open ? 'text' : 'password'"
              class="block w-full rounded-md border border-gray-100 py-3 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
            <div class="absolute right-6 top-4 ">
              <img :src="require(`@/assets/icons/${togglePasswordEye}.svg`)" alt="" class="h-6 w-6 cursor-pointer"
                @click="is_password_eye_open = !is_password_eye_open">
            </div>
          </div>
          <div class="w-full">
            <button :class="[!isStepOneFormValid || processing ? 'cursor-not-allowed opacity-25' : '']" type="button"
              :disabled="!isStepOneFormValid || processing"
              class="text-white text-sm md:text-sm md:py-3 py-2.5 w-4/12 rounded-lg text-center bg-[#064B05]"
              @click="activeStep = 'upload'">
              {{ processing ? 'processing...' : 'Proceed' }}
            </button>
            <p class="font-light text-sm pt-3">
              Not a professional? <nuxt-link to="/signup-options" class="text-[#0C9609] font-semibold"
                @click.prevent="handleSelectedSignup('professional')">
                Sign up as a professional
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="activeStep === 'upload'" class="max-w-2xl mx-auto space-y-8 rounded-lg bg-white p-4 border mt-16">
      <h2 class="py-0 my-0 font-semibold text-center">
        Almost there!
      </h2>
      <p class="py-0 my-0 text-center">
        We just need a few more details to get you started.
      </p>
      <div v-if="!selectedProfile" class="w-full">
        <label for="profilePicture" class="inline-block bg-white px-1 text-sm font-light text-[#696969]">
          <img src="@/assets/img/upload.png" class="h- w-60 object-cover object-center" alt="">
          <input id="profilePicture" accept=".jpg,.jpeg" type="file"
            class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400 sr-only"
            @change="handleProfileUpload">
        </label>
      </div>

      <div v-if="selectedProfile" class="w-full">
        <img :src="selectedProfile" alt="Selected Image"
          class="h-32 w-32 object-center object-cover border-dotted border border-gray-400 rounded-full">
        <label for="utilityBill"
          class="cursor-pointer border-b text-[#3990E5] border-[#3990E5] pb-0.5 pt-3 font-semibold">
          Update profile picture
          <input id="utilityBill" type="file" accept=".jpg,.jpeg" class="hidden" @change="handleProfileUpload">
        </label>
      </div>

      <div class="text-gray-700 sm:col-span-2">
        <div class="flex items-center gap-x-4 w-full">
          <div class="space-y-1 w-full relative">
            <label for="address"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Address</label>
            <input v-model="form.address" type="text" placeholder="Home Address"
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

      <div class="relative w-full">
        <label for="nationality"
          class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Nationality</label>
        <input id="nationality" v-model="form.nationality" type="text"
          class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
      </div>

      <div class="relative w-full">
        <label for="gender"
          class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Marital
          Status</label>
        <select id="gender" v-model="form.marital_status" name="gender"
          class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
          <option value="single">
            Single
          </option>
          <option value="married">
            Married
          </option>
        </select>
      </div>

      <div class="flex w-full space-x-10 ">
        <div class="relative w-full">
          <label for="weight"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Weight</label>
          <input id="weight" v-model="form.weight" type="tel" name="weight"
            class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
        </div>

        <div class="relative w-full">
          <label for="height"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-light text-[#696969]">Height</label>
          <input id="height" v-model="form.height" type="tel" name="height"
            class="block w-full rounded-md border border-gray-100 py-2.5 text-[#696969]  outline-none px-3 placeholder:font-light placeholder:text-sm placeholder:text-gray-400">
        </div>
      </div>
      <div class="w-11/12">
        <button :class="[!isStepTwoFormValid || processing ? 'cursor-not-allowed opacity-25' : '']" type="submit"
          :disabled="!isStepTwoFormValid || processing"
          class="text-white text-sm md:text-sm font-semibold md:py-3 py-2.5 rounded-lg text-center w-4/12  bg-[#0A7D08]"
          @click="handleSignup">
          {{ processing ? 'processing...' : 'Sign up' }}
        </button>
      </div>
    </div>
  </form>
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
      activeStep: 'base',
      docError: null,
      docfileError: null,
      selectedProfile: null,
      options: [],
      profileObj: null,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        gender: '',
        date_of_birth: '',
        profile_photo: null,
        address: '',
        nationality: '',
        marital_status: '',
        height: '',
        weight: '',
        password: ''
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
      return !!(this.form?.firstname?.length &&
        this.form?.lastname?.length &&
        this.form?.email?.length &&
        this.form?.phone_number?.length && this?.form?.gender?.length && this?.form?.date_of_birth?.length &&
        this.form?.password?.length && this.form.address.length && this.form?.marital_status?.length && this.form?.height?.length && this.form.weight?.length)
    },
    isStepOneFormValid() {
      return !!(this.form?.firstname?.length &&
        this.form?.lastname?.length &&
        this.form?.email?.length &&
        this.form?.phone_number?.length && this?.form?.gender?.length && this?.form?.date_of_birth?.length &&
        this.form?.password?.length)
    },
    isStepTwoFormValid() {
      return !!(this.form?.height?.length &&
        this.form?.weight?.length &&
        this.form?.nationality?.length &&
        this.form?.marital_status?.length && this?.form?.address?.length
        // && this?.form?.profile_photo?.length
      )
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
      this.$router.push({ path: '/signup-options', query: { user: 'professional' } })
    },
    handleSignup() {
      this.processing = true
      const formData = new FormData()
      formData.append('profile_photo', this.profileObj)
      const formObj = {
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        email: this.form.email,
        phone_number: this.form.phone_number,
        gender: this.form.gender,
        date_of_birth: this.form.date_of_birth,
        address: this.form.address,
        nationality: this.form.nationality,
        marital_status: this.form.marital_status,
        height: this.form.height,
        weight: this.form.weight,
        password: this.form.password
      }

      for (const item in formObj) {
        formData.append(item, formObj[item])
      }

      this.$axios
        .post('https://medinizebackend.onrender.com/patient/signup/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          this.$toastr.s('Signup was successful')
          this.$router.push({ path: '/', query: { type: 'patient' } })
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
        this.handleAddressAutocomplete(this.form.address)
      }, 500)
    },
    selectAddress(address) {
      // this.form.address = address.city
      this.form.nationality = address.state
      // this.form.address_country_cd = address.country_code
      this.form.address = address.formatted
      this.showDropdown = false
    },
    handleProfileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.profileObj = file
        // this.form.profile_photo = file
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.form.profile_photo = reader.result
          this.selectedProfile = reader.result
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

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Medinize Community',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Medinize Community, bringing accessible health care to the communities.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' },
      { rel: 'stylesheet', href: 'https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css' }
    ],
    script: [
      {
        src: 'https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js'
      }
      // {
      //   src: 'https://download.agora.io/sdk/release/AgoraRTC_N-4.20.0.js'
      // }
    ]
  },
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/bootstrap-vue.client',
    { src: '~/plugins/toastr.js', mode: 'client' },
    {
      src: '~/plugins/tawk-messenger.client.js',
      mode: 'client'
    },
    // { src: '~/plugins/localstorage.client.js', mode: 'client' },
    // { src: '~/plugins/quillEditor.js', mode: 'client' }
    { src: '~plugins/leaflet.js', ssr: false }
  ],

  bootstrapVue: {
    icons: true,
    bootstrapCSS: true, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: true, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    '@nuxt/postcss8',
    'vue-ssr-carousel/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-leaflet',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-sweetalert2',
      {
        confirmButtonColor: '#FFFFFF'
      }
    ]
    // 'vue2-editor/nuxt'
  ],
  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://geziwmna3v.us-west-2.awsapprunner.com/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Medinize Community',
      author: 'Marquis'
    },
    manifest: {
      name: 'Medinize Community, bringing health care to the community.',
      short_name: 'Medinize Community',
      lang: 'en',
      theme_color: '#8B4E96',
      background_color: '#8B4E96',
      orientation: 'portrait',
      display: 'standalone'
    }
  },
  // or
  layoutTransition: {
    name: 'my-layouts',
    mode: 'out-in'
  },
  generate: {
    fallback: true
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}

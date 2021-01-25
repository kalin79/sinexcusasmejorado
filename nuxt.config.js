const https = require('https');
const axios = require('axios');
export default {
  // mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://allyoucan.cloud/cdn/icofont/1.0.1/icofont.css?display=swap"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/fonts/dinBold/fonts.css',
    '@/assets/fonts/univerLight/fonts.css',
    '@/assets/fonts/universLTStdBold/fonts.css',
    'video.js/dist/video-js.css',
  ],
  styleResources: {
    sass: [
      '@/assets/sass/main.sass',
    ],
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-carousel', ssr: false },
    { src: '@/plugins/vue-video.js', ssr: false },
    { src: '@/plugins/persistedState.client.js', ssr: false},
    { src: '@/plugins/vue-validate.js'},
    { src: '~/plugins/vue-social-sharing.js'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://cms.sinexcusas.pe/api/',
    proxyHeaders: false,
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

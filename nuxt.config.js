const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  router: {
    linkActiveClass: 'active-path'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules '@nuxtjs/pwa',
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
  ],

  icon: {
    iconSrc: './static/app-icon.png',
  },

  manifest: {
    short_name: 'CMC',
    name: 'Cormac McCann',
    start_url: '/',
    theme_color: '#202225'

  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },


  /**
   * Sitemap config
   */

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.cormacmccann.app',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    routes: [
      '/',
      '/about',
      '/portfolio',
      '/resume',
      '/contact',
    ]
  }

}

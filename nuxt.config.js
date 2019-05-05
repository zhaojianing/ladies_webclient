import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: '易山博客',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'keywords',
        content: '易山博客,前端博客,个人博客,前端开发,博客,前端个人博客,源码分享,技术博客，shanYi博客,shanyi博客,博客'
      },
      {
        name: 'description',
        content: '易山博客是一个分享技术教程，共享资源， 前端开发者交流的个人独立博客。游魂博客,Jooger,asdfv1929'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: 'http://ladies.ren:8080/image/titleLogo.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/style/init.styl',
    '~/assets/style/main.styl',
    '~/assets/style/iconfont/iconfont.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    {src: '~/plugins/particles.js',ssr: false},
    {src: '~/plugins/getV',ssr: false}
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
    prefix: '/shanyi', // baseURL
    credentials: true,
  },
  proxy: [
    ['/shanyi', {
      target: 'http://localhost:3000/'
    }]
  ],

  /*
   ** Build configuration
   */
  build: {
    // vendor: ['external_library', 'axios'],
    transpile: [/^element-ui/],
    // extractCSS: {
    //   allChunks: true
    // },
    analyze: false,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}

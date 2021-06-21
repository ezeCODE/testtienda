export default {
   
  head: {
    title: 'tiendaantiguedades',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  css: [
  './assets/styles/reset.css' ,
  './assets/styles/_widget.scss' ,
  './assets/styles/_tools.scss' ,
  './assets/styles/_screen.scss' ,
  './assets/icons/styles.css' ,
  './assets/styles/_paragraph.scss' ,
  './assets/styles/_links.scss' ,
  './assets/styles/_index.scss' ,
  './assets/styles/_footer.scss' ,
  './assets/styles/_products.scss',
  './assets/styles/_icons.scss' ,
  './assets/styles/_cols.scss' ,
  './assets/styles/_colors.scss' ,
  './assets/styles/_forms.scss' ,
  './assets/styles/_buttons.scss' ,
  './assets/styles/_barProfile.scss' ,
  './assets/styles/_headerAction.scss' ,
  './assets/styles/_headerBrand.scss' ,
  './assets/styles/_preguntas.scss' ,
  './assets/styles/_socialsharing.scss' ,
  './assets/styles/_alerts.scss' ,
  

  ],

  
  plugins: [
    { src : './plugins/errors/errorAuthentication.js', srr:false },
    { src : './plugins/errors/errorSigIn.js', srr:false },
    { src : './plugins/errors/mpErrros.js', srr:false },
    { src : './plugins/firebase/config.js', srr:false },
    { src : './plugins/firebase/database.js', srr:false },
    { src : './plugins/shared.js', srr:false }

  ],


  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

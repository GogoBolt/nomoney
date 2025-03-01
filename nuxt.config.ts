// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },
  app: {
    head: {
      title: 'NO-Money Just QR-Code',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Simplifiez la gestion de votre cantine et transport scolaire avec notre solution QR Code innovante.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      nhostSubdomain: process.env.NUXT_NHOST_SUBDOMAIN || 'local',
      nhostRegion: process.env.NUXT_NHOST_REGION || 'local'
    },
    nhostAdminSecret: process.env.NHOST_HASURA_GRAPHQL_ADMIN_SECRET || 'nhost-admin-secret'
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/image'],
  runtimeConfig: {
    public: {
      API_URI: 'https://buddler.com/',
      LOCAL_API_URI: 'http://buddler/',
    },
  },
  shadcn: {
    prefix: 'Ui',
  },
})

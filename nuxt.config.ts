// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
  ],
  runtimeConfig: {
    public: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
},
  devtools: { enabled: true }
})
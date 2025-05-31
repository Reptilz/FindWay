// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  // Configuration pour Pinia
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  // Configuration pour TailwindCSS
  tailwindcss: {
    // Options de configuration si nécessaire
  },
  // Configuration pour Content
  content: {
    // Options de configuration pour le module content
  },
  // Configuration pour Image
  image: {
    // Options de configuration pour le module image
  }
})

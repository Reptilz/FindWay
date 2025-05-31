// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-icon',
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // Configuration pour Pinia
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
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

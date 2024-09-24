import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  alias: {
    '@ui'    : fileURLToPath(new URL('./ui',    import.meta.url)),
    '@utils' : fileURLToPath(new URL('./utils', import.meta.url)),
    '@models': fileURLToPath(new URL('./models',import.meta.url)),
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})

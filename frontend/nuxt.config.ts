import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/test-utils/module'
  ],
  css: [
    '~/assets/css/global.css',
    '~/assets/css/fonts.css',
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  googleFonts: {
    families: {
      Jost: [500, 600, 700],
    }
  },
  imports: {
    dirs: [
      'models/**'
    ]
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY
    }
  },
  routeRules: {
    '/api/**' : {
      cors: true,
      proxy: { to: `${process.env.API_BASE}/**`}
    }
  }
})

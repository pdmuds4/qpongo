import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'qpON→GO!'
    }
  },
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
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,

      awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
      awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      awsRegion: process.env.AWS_REGION,
      awsS3Bucket: process.env.AWS_S3_BUCKET_NAME,

      apiBase: process.env.API_BASE,
      S3Base: process.env.S3_BASE,
    }
  },
  routeRules: {
    '/api/**' : {
      cors: true,
      proxy: { to: `${process.env.API_BASE}/**`}
    },
    '/source/**' : {
      cors: true,
      proxy: { to: `${process.env.S3_BASE}/**`}
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'zh',
        name: '简体中文',
        language: 'zh-CN',
      },
    ],
  },

  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      },
    ],
  },

  compatibilityDate: '2024-07-06',
})

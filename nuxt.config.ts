// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],

  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    differentDomains: true,
    locales: [
      {
        code: 'en',
        domain: 'nuxt-i18n-play.en:3000',
      },
      {
        code: 'it',
        domain: 'nuxt-i18n-play.it:3000',
      },
      {
        code: 'fr',
        domain: 'nuxt-i18n-play.fr:3000',
      },
    ],
    customRoutes: 'config',
    pages: {
      travels: {
        en: '/travels',
        it: '/viaggi',
        fr: '/voyages',
      },
    },
  },

  runtimeConfig: {
    public: {
      i18n: {
        defaultLocale: '',
      },
    },
  },
});

import type { NuxtConfig } from 'nuxt/schema'

export const baseCfg: NuxtConfig = {

  devServer: {
    port: 5173,
  },

  components: {
    dirs: [{
      enabled: true,
      path: '~/components/ui-kit/',
      prefix: 'UI',
    }],
  },

  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/test-utils/module',
    ['nuxt-viewport', {
      breakpoints: {
        desktop: 1024,
        desktopMedium: 1280,
        desktopWide: 1600,

        mobile: 320,
        mobileMedium: 375,
        mobileWide: 425,

        tablet: 768,
      },
    }],

  ],

  icon: {
    serverBundle: {
      collections: ['mdi'],
    },
    customCollections: [{
      prefix: 'icon',
      dir: './assets/svg',
    }],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  css: [
    '~/assets/scss/global.scss',
  ],

  devtools: {
    timeline: { enabled: true },
  },
}

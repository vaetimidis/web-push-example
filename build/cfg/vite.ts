import type { NuxtConfig } from 'nuxt/schema'

export const viteCfg: NuxtConfig['vite'] = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '~/assets/scss/_variables.scss';
        `,
        api: 'modern-compiler',
      },
    },
  },
}

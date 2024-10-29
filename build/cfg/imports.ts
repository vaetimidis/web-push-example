import type { NuxtConfig } from 'nuxt/schema'

export const importsCfg: NuxtConfig['imports'] = {
  autoImport: true,
  dirs: [
    './shared/store',
    './shared/constant',
    './shared/lib',
    './shared/api',
    './shared/composables',
    './shared/types',
  ],
}

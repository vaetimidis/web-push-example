import type { NuxtConfig } from 'nuxt/schema'
import type { InputConfig } from './cfg.types'

export const runtimeCfg: Record<InputConfig, NuxtConfig['runtimeConfig']> = {
  development: {
    public: {
      stand: 'proxy',
      apiUrl: '',
    },
  },

  production: {
    public: {
      stand: 'NUXT_PUBLIC_STAND',
      apiUrl: '',
    },
  },
}

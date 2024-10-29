import {
  baseCfg,
  importsCfg,
  pwaCfg,
  runtimeCfg,
  viteCfg,
} from './build'

export default defineNuxtConfig({
  ssr: true,

  compatibilityDate: '2024-10-15',

  $development: {
    runtimeConfig: runtimeCfg.development,
    pwa: pwaCfg.development,
  },

  $production: {
    runtimeConfig: runtimeCfg.production,
    pwa: pwaCfg.production,
  },

  imports: importsCfg,
  vite: viteCfg,

  ...baseCfg,
})

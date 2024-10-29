import {
  baseCfg,
  importsCfg,
  runtimeCfg,
  viteCfg,
} from './build'

export default defineNuxtConfig({
  ssr: true,

  compatibilityDate: '2024-10-15',

  $development: {
    runtimeConfig: runtimeCfg.development,
  },

  $production: {
    runtimeConfig: runtimeCfg.production,
  },

  imports: importsCfg,
  vite: viteCfg,

  ...baseCfg,
})

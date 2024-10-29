import type { NuxtConfig } from 'nuxt/schema'
import type { InputConfig } from './cfg.types'

const sharedConf: NuxtConfig['pwa'] = {
  base: '/',
  scope: '/',
  strategies: 'generateSW',
  registerType: 'prompt',
  includeAssets: ['favicon.ico'],
  manifest: {
    id: '/',
    name: 'Web-push-example',
    short_name: 'Web-push-example',
    description: 'mock site for web-push testing',
    theme_color: '#ffffff',
    start_url: '/',
    display: 'standalone',
    lang: 'ru',
    icons: [{
      src: '/pwa/pwa-64x64.png',
      sizes: '64x64',
      type: 'image/png',
    }, {
      src: '/pwa/pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    }, {
      src: '/pwa/pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    }, {
      src: '/pwa/maskable-icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    }],
    screenshots: [{
      src: '/pwa/maskable-icon-512x512.png',
      sizes: '512X512',
      type: 'image/png',
      form_factor: 'wide',
      label: 'Application',
    }, {
      src: '/pwa/maskable-icon-512x512.png',
      sizes: '512X512',
      type: 'image/png',
      form_factor: 'narrow',
      label: 'Application',
    }],
  },
  workbox: {
    navigateFallback: '/',
    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    cleanupOutdatedCaches: true,
  },
  injectManifest: {
    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  },
  client: {
    installPrompt: true,
    periodicSyncForUpdates: 20,
  },
}

export const pwaCfg: Record<InputConfig, NuxtConfig['pwa']> = {
  development: {
    ...sharedConf,
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  production: {
    ...sharedConf,
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
}

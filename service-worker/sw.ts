/* eslint-disable no-console */
/// <reference lib="WebWorker" />
/// <reference types="vite/client" />

import { onNotificationClick, onPush } from './web-push-notification'

declare let self: ServiceWorkerGlobalScope

self.skipWaiting()
self.clients.claim()

self.addEventListener('push', onPush)
self.addEventListener('notificationclick', onNotificationClick)

self.addEventListener('message', (event) => {
  console.log('Message received:', event.data)
  if (event.data && event.data.type === 'SKIP_WAITING')
    self.skipWaiting()
})

<!-- eslint-disable no-console -->
<script setup lang="ts">
onMounted(() => {
  if ('Notification' in window) {
    requestNotificationPermission()
  }
  else {
    console.error('Браузер не поддерживает уведомления')
  }
})

async function requestNotificationPermission() {
  const permission = await Notification.requestPermission()
  if (permission === 'granted') {
    console.log('permission granted')
    await registerServiceWorker()
  }
  else if (permission === 'denied') {
    console.warn('permission denied')
  }
  else if (permission === 'default') {
    console.warn('permission ignored')
  }
}

function registerServiceWorker() {
  navigator.serviceWorker.getRegistration()
    .then((registration) => {
      if (registration && registration.active) {
        // we need to signal the service worker that we are ready to receive data
        registration.active.postMessage({ action: 'ready-to-receive' })
      }
    })
    .catch(err => console.error('Could not get registration', err))
}
</script>

<template>
  <div>
    <button @click="requestNotificationPermission">
      Запросить разрешение на уведомления
    </button>
  </div>
</template>

<style lang="scss" scoped>
</style>

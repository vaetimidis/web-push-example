<!-- eslint-disable no-console -->
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  if ('Notification' in window) {
    requestNotificationPermission()
  }
  else {
    console.error('Браузер не поддерживает уведомления')
  }
})

function requestNotificationPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Разрешение на уведомления получено')
      // Здесь вы можете продолжить работу с Web Push API
    }
    else if (permission === 'denied') {
      console.warn('Пользователь отклонил запрос на уведомления')
    }
    else if (permission === 'default') {
      console.warn('Пользователь проигнорировал запрос на уведомления')
    }
  })
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

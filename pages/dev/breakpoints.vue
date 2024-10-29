<script setup lang="ts">
const { $viewport } = useNuxtApp()

</script>

<template>
  <div class="page-viewport">
    <div>
      Документация: <a href="https://nuxt.com/modules/nuxt-viewport" target="_blank">nuxt-viewport</a>
    </div>
    <div>
      <h2>Использование по умолчанию</h2>
      <div v-if="$viewport.isLessThan('tablet')">
        Должно появиться только на мобилке
      </div>
      <div v-else>
        Текущий брейкпоинт: {{ $viewport.breakpoint }}
      </div>
    </div>
    <div>
      <h2>Примеры: </h2>
      <div>Current "Название" breakpoint: {{ $viewport.breakpoint }}</div>
      <div>Current "Число" breakpoint: {{ $viewport.breakpointValue('tablet') }}</div>
      <div>Если меньше tablet: {{ $viewport.isLessThan('tablet') }}</div>
      <div>Если больше tablet: {{ $viewport.isGreaterThan('tablet') }}</div>
      <div>Если больше или равно tablet: {{ $viewport.isGreaterOrEquals('tablet') }}</div>
      <div>Если равно tablet: {{ $viewport.match('tablet') }}</div>
      <div>Если равно dekstop: {{ $viewport.match('desktop') }}</div>
    </div>
  </div>
</template>

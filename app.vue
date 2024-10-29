<script lang="ts" setup>
const app = useAppConfig()
const { $pwa } = useNuxtApp()

useHead(app)

onMounted(() => {
  if ($pwa?.offlineReady) {
    // eslint-disable-next-line no-console
    console.info('App ready to work offline')
  }
  else {
    // eslint-disable-next-line no-console
    console.info('App is not ready, but why?')
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

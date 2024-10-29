<!-- eslint-disable no-console -->
<script lang="ts" setup>
const app = useAppConfig()
const { $pwa } = useNuxtApp()

useHead(app)

onMounted(() => {
  console.info(import.meta.env)

  if ($pwa?.offlineReady) {
    console.info('App ready to work offline')
  }
  else {
    console.info('App is not ready, but why?')
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPwaAssets />
    <NuxtPage />
  </NuxtLayout>
</template>

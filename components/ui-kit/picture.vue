<script setup lang="ts">
import type { IImage } from '~/shared/types/constant/image'

type Props = IImage

withDefaults(defineProps<Props>(), {
  alt: '',
  srcsets: () => [],
})
</script>

<template>
  <picture>
    <template v-if="srcsets">
      <template v-for="(source, idx) in srcsets">
        <source v-if="source.srcset" :key="idx" :media="source.media" :srcset="source.srcset" :type="source.type">
      </template>
    </template>
    <img :alt="alt" :src="src ? src : '/images/mock.svg'" :width="width" :height="height" :loading="loading">
  </picture>
</template>

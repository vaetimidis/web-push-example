<script setup lang="ts">
import { ELinkTypes } from '~/shared/types/constant/link'

interface Props {
  type?: ELinkTypes
  to: string
  title?: string
  mod?: string
}

withDefaults(defineProps<Props>(), {
  type: ELinkTypes.LINK,
})
</script>

<template>
  <a
    v-if="type === ELinkTypes.LINK"
    :href="to"
    :title="title"
    class="link"
    :class="[mod && `link--${mod}`]"
  >
    <slot />
  </a>
  <NuxtLink
    v-else-if="ELinkTypes.NUXTLINK"
    :to="to"
    :title="title"
    class="link"
    :class="[mod && `link--${mod}`]"
  >
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
</style>

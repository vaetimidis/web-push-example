<script setup lang="ts">
interface Props {
  className: string
  type: 'button' | 'submit' | 'reset'
  mod: string
}

withDefaults(defineProps<Partial<Props>>(), {
  type: 'button',
})
</script>

<template>
  <button
    class="button"
    :type="type"
    :class="[className, mod && `button--${mod}`]"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>

</style>

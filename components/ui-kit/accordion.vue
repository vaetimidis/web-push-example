<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()

const isOpen = ref<boolean>(false)

function toggleAccordion() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="accordion-item">
    <div class="accordion-header" @click="toggleAccordion">
      <span>{{ title }}</span>
      <span class="accordion-icon">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <Transition name="accordion">
      <div v-if="isOpen" class="accordion-content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.accordion-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.accordion-header {
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-icon {
  font-size: 18px;
}

.accordion-content {
  padding: 10px;
  background-color: #fff;
}

/* Transition styles */
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  max-height: 500px; /* Adjust this value based on your content */
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

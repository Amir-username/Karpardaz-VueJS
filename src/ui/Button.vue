<script setup lang="ts">
type ButtonProps = {
    variant: 'primary' | 'outline'
};

const props = defineProps<ButtonProps>();

</script>

<template>
  <button :class="props.variant">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  border-radius: 12px;
  color: var(--neutral-50);
  text-align: center;
  width: 100%;
  font-size: 24px;
  /* padding: 0.9rem 2rem; */
  font-weight: 500;
}

.primary {
  background-color: var(--primary-400);
}

.outline {
  border: 2px var(--neutral-50) solid;
  background-color: transparent;
}
</style>

<script setup lang="ts">
type ButtonProps = {
  variant: "primary" | "outline";
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
  border-radius: 8px;
  color: var(--neutral-50);
  text-align: center;
  width: 100%;
  font-size: 20px;
  padding: 0.8rem 2rem;
  font-weight: 500;
  font-family: "Vazirmatn", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  border: none;
}

.primary {
  background-color: var(--primary-400);
}

.outline {
  border: 1px var(--primary-300) solid;
  background-color: transparent;
}
</style>

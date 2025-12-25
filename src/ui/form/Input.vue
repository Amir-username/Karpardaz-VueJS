<script setup lang="ts">
const model = defineModel({ type: String, default: "" });
</script>

<template>
  <input
  class="vazirmatn-body-font"
    :value="model"
    @input="model = ($event.target as HTMLInputElement).value"
  />
</template>

<style scoped>
input {
  padding: 0.7rem 0.7rem;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid var(--neutral-100);

  /* @media (min-width:960px) {
    max-height: 50px;
  } */
}
</style>

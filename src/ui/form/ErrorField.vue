<script setup lang="ts">
const props = defineProps<{ errors: string[] }>();
</script>

<template>
  <div class="error-field">
    <p class="error-message" v-for="(err, index) in props.errors" :key="index">
      * {{ err }}
    </p>
  </div>
</template>

<style scoped>
.error-field {
  display: grid;
  gap: 0.7rem;
  border-radius: 8px;
  padding: 1rem;
  background-color: var(--danger);
}

.error-message {
  color: var(--danger-dark);
}
</style>

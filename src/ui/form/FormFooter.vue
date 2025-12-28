<script setup lang="ts">
const props = defineProps<{
  role: "jobseeker" | "employer";
  link: string
}>();
</script>

<template>
  <section v-if="props.role === 'jobseeker'" class="form-footer">
    <p>کارفرما هستید؟</p>
    <router-link :to="{ name: link }">
      ورود به بخش کارفرما
    </router-link>
  </section>
  <section v-else class="form-footer">
    <p>کارجو هستید؟</p>
    <router-link :to="{ name: link }">
      ورود به بخش کارجو
    </router-link>
  </section>
</template>

<style scoped>
.form-footer {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1ch;
  margin-block-start: 1rem;
}

p {
  color: var(--primary-500);
}

a {
  color: var(--primary-300);
  font-weight: 600;
}
</style>

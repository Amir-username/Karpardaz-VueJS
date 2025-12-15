<script setup lang="ts">
import JobSeekerLoginForm from "../../components/auth/JobSeekerLoginForm.vue";
</script>

<template>
  <main>
    <JobSeekerLoginForm />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--primary-500);
  min-height: 100vh;
}
</style>

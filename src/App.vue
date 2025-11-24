<script setup lang="ts">
import HeroImage from "./components/HeroImage.vue";
import Overview from "./components/Overview.vue";
</script>

<template>
  <main>
    <HeroImage />
    <Overview />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

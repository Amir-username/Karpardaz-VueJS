<script setup lang="ts">
import HeroImage from "./components/HeroImage.vue";
import Overview from "./components/Overview.vue";
import Carousel from "./ui/Carousel.vue";
</script>

<template>
  <main>
    <HeroImage />
    <Overview />
    <Carousel />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

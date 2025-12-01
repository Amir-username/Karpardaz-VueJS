<script setup lang="ts">
import Footer from "./components/Footer.vue";
import HeroImage from "./components/HeroImage.vue";
import Overview from "./components/Overview.vue";
import Carousel from "./ui/Carousel.vue";
</script>

<template>
  <main>
    <HeroImage />
    <Overview />
    <Carousel />
    <Footer />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

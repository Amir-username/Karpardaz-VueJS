<script setup lang="ts">
import CarouselCard from "./CarouselCard.vue";
import SectionHeader from "./SectionHeader.vue";
</script>

<template>
  <SectionHeader> جدید ترین آگهی ها </SectionHeader>
  <section class="carousel">
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
  </section>
</template>

<style scoped>
.carousel {
  display: flex;
  overflow: scroll;
  padding: 1rem;
  gap: 1rem;
}
</style>

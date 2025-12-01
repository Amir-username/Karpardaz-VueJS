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
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
  </section>
  <a class="more-ads" href="#">مشاهده بیش تر ...</a>
</template>

<style scoped>
.carousel {
  display: flex;
  overflow: scroll;
  padding: 1rem;
  gap: 1rem;

  @media (min-width: 1500px) {
    padding-inline: 12rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.more-ads {
  text-decoration: none;
  border: 1px solid var(--neutral-100);
  max-width: max-content;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: var(--primary-500);
  align-self: center;
}
</style>

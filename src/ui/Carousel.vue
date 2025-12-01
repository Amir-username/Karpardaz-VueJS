<script setup lang="ts">
import { onMounted, ref } from "vue";
import CarouselCard from "./CarouselCard.vue";
import SectionHeader from "./SectionHeader.vue";
import type { Advertise } from "../models/Advertise";
import { fetchAdvertises } from "../core/fetch/fetchAdvertises";

const advertises = ref<Advertise[]>([]);

onMounted(async () => {
  const handleFetchAdvertises = async () => {
    const res = await fetchAdvertises(0, 4);
    return res.advertises;
  };

  advertises.value = await handleFetchAdvertises();

  console.log(advertises.value);
});
</script>

<template>
  <SectionHeader> جدید ترین آگهی ها </SectionHeader>
  <section class="carousel">
    <CarouselCard v-for="ad in advertises" :key="ad.id" :advertise="ad" />
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

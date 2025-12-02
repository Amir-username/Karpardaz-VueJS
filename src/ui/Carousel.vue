<script setup lang="ts">
import { ref } from "vue";
import CarouselCard from "./CarouselCard.vue";
import SectionHeader from "./SectionHeader.vue";
import type { Advertise } from "../models/Advertise";
import { useFetch } from "@vueuse/core";

type FetchType = {
  advertises: Advertise[];
};

const advertises = ref<Advertise[]>([]);

const { data: res } = useFetch<FetchType>(
  "https://underlying-umeko-univercityproject317-ea179cc6.koyeb.app/advertisements",
  { refetch: true }
).json();

console.log(res);

if (res.value) {
  advertises.value = res.value?.advertises;
}
</script>

<template>
  <SectionHeader> جدید ترین آگهی ها </SectionHeader>
  <section class="carousel hide-scrollbar">
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

  @media (min-width: 800px) {
    padding-inline: 12rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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

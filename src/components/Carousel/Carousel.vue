<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Advertise } from "../../models/Advertise";
import { useFetch } from "@vueuse/core";
import { BASE_URL } from "../../api-config";
import SectionHeader from "../../ui/SectionHeader.vue";
import CarouselCard from "./CarouselCard.vue";
import CarouselLoading from "./CarouselLoading.vue";

type FetchType = {
  advertises: Advertise[];
};

const advertises = ref<Advertise[]>([]);

const { data: res, execute, error, isFetching } = useFetch<FetchType>(
  `${BASE_URL}/advertisements`,
  { refetch: true, immediate: false }
).json();


if (res.value) {
  advertises.value = res.value?.advertises;
}

onMounted(()=>{
  execute()
  console.log(error.value);
})

</script>

<template>
  <SectionHeader> جدید ترین آگهی ها </SectionHeader>
  <div class="loading" v-if="isFetching">
    <CarouselLoading v-for="(index) in 4" :key="index"/>
  </div>
  <section class="carousel hide-scrollbar">
    <CarouselCard v-for="ad in res?.advertises" :key="ad.id" :advertise="ad" />
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

.loading {
  display: flex;
  overflow: scroll;
  gap: 1rem;
  padding: 1rem;
}
</style>

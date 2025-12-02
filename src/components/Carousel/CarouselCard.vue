<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import type { Advertise } from "../../models/Advertise";
import { BASE_URL } from "../../api-config";
import { onMounted } from "vue";

type EmployerResType = {
  company_name: string;
};

const props = defineProps<{ advertise: Advertise }>();

const { data: employer, execute } = useFetch<EmployerResType>(
  `${BASE_URL}/employers/${props.advertise.employer_id}`, {
    immediate: false,
  }
).json();

onMounted(()=>{
  execute()
})
</script>

<template>
  <article class="carousel-card">
    <div class="carousel-card-content">
      <h3 class="carousel-card-title">{{ props.advertise.title }}</h3>
      <h5 class="carousel-card-subtitle">{{ employer?.company_name }}</h5>
    </div>
    <button class="carousel-card-button">مشاهده</button>
  </article>
</template>

<style scoped>
.carousel-card {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border: 1px solid var(--neutral-100);
  border-radius: 8px;
  width: 350px;

  &:hover {
    box-shadow: 0px 0px 8px var(--primary-100);
    transition-duration: 400ms;
  }

  @media (min-width: 1500px) {
    max-width: 300px;
  }
}

.carousel-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  padding: 4rem;
  height: 18rem;
  gap: 1rem;

  @media (min-width: 800px) {
    padding: 2rem;
    height: 13rem;
  }
}

.carousel-card-button {
  padding: 0.9rem;
  border: none;
  width: 100%;
  text-align: center;
  flex-grow: 1;
  background-color: var(--primary-500);
  border-radius: 0px 0px 8px 8px;
  font-size: 1.1rem;
  color: var(--neutral-50);
  font-family: Vazirmatn;
}

h3,
h5 {
  margin: 0;
}

.carousel-card-title {
  font-size: 1.6rem;
  color: var(--primary-500);
  text-align: center;
}

.carousel-card-subtitle {
  font-size: 1.2rem;
  color: var(--neutral-500);
}
</style>

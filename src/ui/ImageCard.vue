<script setup lang="ts">
const props = defineProps<{
  text: string;
  img: string;
}>();
</script>

<template>
  <article class="overview-card">
    <img :src="props.img" alt="جستجو آگهی" />
    <h3>{{ props.text }}</h3>
  </article>
</template>

<style scoped>
.overview-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--neutral-100);
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 0px 8px var(--secondary-500);
    transition-duration: 400ms;
  }
}

img {
  max-width: 100%;
  max-height: 300px;
}

h3 {
  text-align: center;
  font-size: 1.4rem;
  padding-inline: 2.2rem;
  color: var(--primary-500);
}
</style>

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

  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: calc(var(--i) * 0.15s);

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

.overview-card:nth-child(1) {
  --i: 1;
}
.overview-card:nth-child(2) {
  --i: 2;
}
.overview-card:nth-child(3) {
  --i: 3;
}
.overview-card:nth-child(4) {
  --i: 4;
}
.overview-card:nth-child(5) {
  --i: 5;
}
.overview-card:nth-child(6) {
  --i: 6;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

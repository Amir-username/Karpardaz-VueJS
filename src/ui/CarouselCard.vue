<script setup lang="ts"></script>

<template>
  <article class="carousel-card">
    <div class="carousel-card-content">
      <h3 class="carousel-card-title">عنوان آگهی شغلی</h3>
      <h5 class="carousel-card-subtitle">نام سازمان</h5>
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
}

.carousel-card-subtitle {
    font-size: 1.2rem;
    color: var(--neutral-500);
}
</style>

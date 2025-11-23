<script setup lang="ts"></script>

<template>
  <div class="hero-image">
    <h1 class="lalezar">
      وب سایت استخدام و کاریابی برای <span class="key-word">سازمان ها</span> و
      <span class="key-word">متخصصان فناوری</span>
    </h1>
  </div>
</template>

<style scoped>
.hero-image {
  height: 100vmax;
  width: 100%;
  background-image: url(../assets/hero-image-medium.jpg);
  background-color: rgb(49, 49, 49);
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
}

.key-word {
  color: var(--primary-300);
}

h1 {
  margin: 0;
  font-size: 3.8rem;
  color: var(--neutral-50);
  padding: 16rem 1.6rem;
}
</style>

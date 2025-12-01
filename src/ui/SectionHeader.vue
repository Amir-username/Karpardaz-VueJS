<script setup lang="ts"></script>

<template>
  <h1 class="section-title">
    <slot></slot>
  </h1>
</template>

<style scoped>
.section-title {
  margin-top: 4rem;
  text-align: center;
  color: var(--primary-400);
  font-family: "Vazirmatn", sans-serif;

  @media (min-width: 960px) {
    font-size: 2.9rem;
  }
}
</style>

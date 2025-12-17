<script setup lang="ts"></script>

<template>
  <form>
    <slot></slot>
  </form>
</template>

<style scoped>
form {
  display: grid;
  gap: 1rem;
  padding: 2rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--neutral-100);
  margin: 1rem;
  background-color: white;

  @media (min-width: 960px) {
    /* min-width: 360px;
    position: absolute;
    inset-block-start: 25%;
    inset-inline-start: 25%; */
    margin-block-start: 15rem;
    margin-inline:10rem
  }
}
</style>

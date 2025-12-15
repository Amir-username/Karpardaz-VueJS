<script setup lang="ts"></script>

<template>
  <form>
    <slot></slot>
    <button class="vazirmatn-body-font" type="submit">ورود</button>
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

  @media (min-width:960px) {
    min-width: 360px;
    position: absolute;
    inset-block-start: 25%;
    inset-inline-start: 25%;
  }
}

button {
  font-size: 1.1rem;
  padding: 0.7rem;
  background-color: var(--primary-400);
  border-radius: 8px;
  color: white;
  border: none;
  cursor: pointer;

  /* @media (min-width:960px) {
    max-height: 50px;
  } */

  &:hover {
    background-color: var(--primary-500);
    transition-duration: 500ms;
  }
}
</style>

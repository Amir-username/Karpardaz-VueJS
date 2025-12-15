<script setup lang="ts">
import JobSeekerLoginForm from "../../components/auth/JobSeekerLoginForm.vue";
</script>

<template>
  <main>
    <div class="login-form">
      <JobSeekerLoginForm />
    </div>
    <div class="login-bg">
      <h1 class="lalezar">مسیر شغلی خود را آغاز کنید</h1>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--primary-500);
  min-height: 100vh;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: black;
  }
}

.login-bg {
  position: relative;
  display: none;
  @media (min-width: 960px) {
    display: block;
    background: linear-gradient(rgba(1, 1, 1, 0.85)),
      url("/src/assets/hero-image-medium.jpg");
    min-height: 100vh;
    width: 50vw;
  }
}

h1 {
  position: absolute;
  inset-block-start: 25%;
  inset-inline-start: 7%;
  padding: 0 8rem;
  color: var(--primary-100);
  font-size: 4.5rem;
}

.login-form {
  @media (min-width: 960px) {
    position: relative;
    border-top-left-radius: 40px;
    background-color: var(--primary-500);
  }
}
</style>

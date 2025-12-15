<script setup lang="ts">
import Button from "../ui/Button.vue";
</script>

<template>
  <div class="hero-image">
    <h1 class="lalezar fade-in">
      وب سایت استخدام و کاریابی برای <span class="key-word">سازمان ها</span> و
      <span class="key-word">متخصصان فناوری</span>
    </h1>
    <div class="button-group">
      <router-link to="/auth/jobseeker/login" custom v-slot="{ navigate }">
        <Button @click="navigate" class="fade-in" variant="primary">
          ورود به حساب
        </Button>
      </router-link>
      <Button class="fade-in" variant="outline"> ثبت نام </Button>
    </div>
  </div>
</template>

<style scoped>
.hero-image {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  background-image: url(../assets/hero-image-medium.jpg);
  background-color: rgb(30, 30, 30);
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;

  @media (min-width: 800px) {
    background-image: url(../assets/hero-image-large.jpg);
    padding: 0.5rem 25rem;
    justify-content: center;
  }
}

.key-word {
  color: var(--primary-300);
}

h1 {
  margin: 0;
  font-size: 2.7rem;
  color: var(--neutral-50);
  padding-top: 16rem;
  padding-inline: 1rem;
  line-height: 3ch;

  @media (min-width: 800px) {
    padding-top: 0;
    font-size: 3.5rem;
    padding-inline-end: 3.5rem;
    line-height: 3.3ch;
  }
}

.button-group {
  display: grid;
  gap: 0.4rem;
  padding: 1rem;

  @media (min-width: 800px) {
    display: flex;
    max-width: 28rem;
  }
}

.fade-in {
  animation: 1.2s ease-out forwards fadeInUp;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>

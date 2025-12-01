<script setup lang="ts">
import githubIcon from "../assets/icons/github-icon.svg";
import emailIcon from "../assets/icons/email-icon.svg";
</script>

<template>
  <footer class="footer">
    <h3 class="contact-info">تماس با ما</h3>
    <div dir="ltr" class="link-group">
      <div class="link">
        <img :src="githubIcon" alt="github icon" />
        <a href="#">amir-username</a>
      </div>
      <div class="link">
        <img :src="emailIcon" alt="email icon" />
        <a href="#">amirnj3172@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem;
  background-color: var(--primary-500);
  display: grid;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-block-start: 4rem;
}

.link-group {
  display: grid;
  gap: 0.7rem;
}

.link {
  display: flex;
  gap: 1ch;
  align-items: center;
}

.link > a {
  text-decoration: none;
  color: var(--neutral-100);
  margin-top: 0.3ch;
}

.contact-info {
  text-align: center;
  color: var(--neutral-100);
  font-size: 1.3rem;
}
</style>

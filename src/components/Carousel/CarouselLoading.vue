<script setup lang="ts"></script>

<template>
  <div class="loading-card"></div>
</template>

<style scoped>
.loading-card {
  width: 350px;
  height: 350px;
  background-color: var(--neutral-50);
  border-radius: 8px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--neutral-100);

  animation: pulse 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @media (min-width: 800px) {
    max-width: 300px;
    max-height: 250px;
  }
}

.loading-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transform: translateX(-100%);
  animation: shimmer 2.2s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.15);
    transform: scale(1.005);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>

<script setup lang="ts">
import iLL1 from "../assets/Illustrates/iLL_1.svg";
import iLL2 from "../assets/Illustrates/iLL_2.svg";
import iLL3 from "../assets/Illustrates/iLL_3.svg";
import iLL4 from "../assets/Illustrates/iLL_4.svg";
import iLL5 from "../assets/Illustrates/iLL_5.svg";
import iLL6 from "../assets/Illustrates/iLL_6.svg";

import ImageCard from "../ui/ImageCard.vue";
</script>

<template>
  <h1 class="overview-title">چرا کارپرداز؟</h1>
  <section class="overview">
    <ImageCard text="امکان جستجو میان هزاران آگهی در سراسر کشور" :img="iLL1" />
    <ImageCard
      text="ایجاد آگهی توسط کارجو و درخواست همکاری از کارفرما"
      :img="iLL2"
    />
    <ImageCard text="مصاحبه شغلی آنلاین" :img="iLL3" />
    <ImageCard
      text="پلتفرم اختصاصی برای متخصصان و سازمان های فناوری"
      :img="iLL4"
    />
    <ImageCard text="سیستم پیشنهاد دهنده آگهی برای کارجو" :img="iLL5" />
    <ImageCard text="ایجاد و مدیریت رزومه" :img="iLL6" />
  </section>
</template>

<style scoped>
.overview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  padding: 1rem;
  gap: 1rem;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: normal;
    padding-inline: 12rem;
  }
}

.overview-title {
  margin-top: 4rem;
  text-align: center;
  color: var(--primary-400);
  font-family: "Vazirmatn", sans-serif;

  @media (min-width: 960px) {
    font-size: 2.9rem;
  }
}
</style>

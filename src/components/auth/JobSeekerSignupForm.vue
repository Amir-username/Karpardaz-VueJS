<script setup lang="ts">
import Form from "../../ui/form/Form.vue";
import Input from "../../ui/form/Input.vue";
</script>

<template>
  <Form id="form" novalidate>
    <h3>فرم ثبت نام کارجو</h3>
    <div class="input-group">
      <label for="firstName">نام</label>
      <Input type="text" id="firstName" />
    </div>
    <div class="input-group">
      <label for="lastName">نام خانوادگی</label>
      <Input type="text" id="lastName" />
    </div>
    <div class="input-group">
      <label for="phoneNumber">تلفن همراه</label>
      <Input type="number" id="phonenumber" />
    </div>
    <div class="input-group">
      <label for="email">ایمیل</label>
      <Input type="email" id="email" />
    </div>
    <div class="input-group">
      <label for="password">رمز عبور</label>
      <Input type="password" id="password" />
    </div>
    <button class="vazirmatn-body-font" type="submit">ثبت نام</button>
  </Form>
</template>

<style>
h3 {
  text-align: center;
  color: var(--neutral-600);
  font-size: 1.7rem;
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

.input-group {
  display: grid;
  gap: 1ch;
}

label {
  color: var(--neutral-600);
  margin-block-start: 0.4ch;
  font-size: 1.1rem;
}

.label {
  display: flex;
  gap: 0.6ch;
  align-items: first center;
}

#form {
  @media (min-width: 960px) {
    margin-block-start: 2rem;
  }
}
</style>

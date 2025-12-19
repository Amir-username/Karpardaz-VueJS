<script setup lang="ts">
import Form from "../../ui/form/Form.vue";
import Input from "../../ui/form/Input.vue";
</script>

<template>
  <Form id="form" novalidate>
    <h3>فرم ثبت نام کارجو</h3>
    <div class="input-group">
      <div class="label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#9C9C9C"
        >
          <path
            d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
          />
        </svg>
        <label for="firstName">نام</label>
      </div>
      <Input type="text" id="firstName" />
    </div>
    <div class="input-group">
      <div class="label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#9C9C9C"
        >
          <path
            d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
          />
        </svg>
        <label for="lastName">نام خانوادگی</label>
      </div>
      <Input type="text" id="lastName" />
    </div>
    <div class="input-group">
      <div class="label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#9C9C9C"
        >
          <path
            d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"
          />
        </svg>
        <label for="phoneNumber">تلفن همراه</label>
      </div>
      <Input type="number" id="phonenumber" />
    </div>
    <div class="input-group">
      <div class="label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#9C9C9C"
        >
          <path
            d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"
          />
        </svg>
        <label for="email">ایمیل</label>
      </div>
      <Input type="email" id="email" />
    </div>
    <div class="input-group">
      <div class="label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#9C9C9C"
        >
          <path
            d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"
          />
        </svg>
        <label for="password">رمز عبور</label>
      </div>
      <Input type="password" id="password" />
    </div>
    <div class="input-group">
      <div class="label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#9C9C9C"
        >
          <path
            d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480h80q0 66 25 124.5t68.5 102q43.5 43.5 102 69T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-89 0-161.5 43.5T204-640h116v80H80v-240h80v80q55-73 138-116.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-80-240q-17 0-28.5-11.5T360-360v-120q0-17 11.5-28.5T400-520v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40q17 0 28.5 11.5T600-480v120q0 17-11.5 28.5T560-320H400Zm40-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40Z"
          />
        </svg>
        <label for="rep-password">تکرار رمز عبور</label>
      </div>
      <Input type="password" id="rep-password" />
    </div>
    <button class="vazirmatn-body-font" type="submit">ثبت نام</button>
  </Form>
</template>

<style>
h3 {
  text-align: center;
  color: var(--neutral-600);
  font-size: 1.7rem;
  margin: 0;
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
    margin-block-start: 1.2rem;
  }
}
</style>

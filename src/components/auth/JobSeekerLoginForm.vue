<script setup lang="ts">
import Form from "../../ui/form/Form.vue";
import Input from "../../ui/form/Input.vue";
</script>

<template>
  <Form>
    <h3>فرم ورود کارجو</h3>
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
        <label for="username">نام کاربری</label>
      </div>
      <Input type="text" id="username" />
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
  </Form>
</template>

<style scoped>
h3 {
  text-align: center;
  color: var(--neutral-600);
  font-size: 1.7rem;
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
</style>

<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import Form from "../../ui/form/Form.vue";
import Input from "../../ui/form/Input.vue";
import { BASE_URL } from "../../api-config";
import { ref } from "vue";
import { validationUsername } from "../../core/validationUsername";
import ErrorField from "../../ui/form/ErrorField.vue";
import { validationPassword } from "../../core/validationPassword";
import FormFooter from "../../ui/form/FormFooter.vue";
import { useTokenStore } from "../../stores/tokenStore";

const formDataRef = ref<{ username: string; password: string }>({
  username: "",
  password: "",
});

const formData = new FormData();

const { execute, data, isFetching } = useFetch(`${BASE_URL}/jobseeker/login`, {
  immediate: false,
})
  .post(formData)
  .json();

const usernameErrors = ref<string[]>([]);
const passwordErrors = ref<string[]>([]);

const tokenStore = useTokenStore();

const handleLoginSubmit = async () => {
  const validateUsername = validationUsername(formDataRef.value.username);
  const validatePassword = validationPassword(formDataRef.value.password);

  if (validateUsername.length === 0 && validatePassword.length === 0) {
    formData.set("username", formDataRef.value.username);
    formData.set("password", formDataRef.value.password);

    await execute();
    tokenStore.setToken(data.value.access_token);
    console.log(data.value);
    console.log(formData);
  } else {
    validateUsername.forEach((error) => {
      usernameErrors.value.push(error);
    });

    validatePassword.forEach((error) => {
      passwordErrors.value.push(error);
    });
  }
};
</script>

<template>
  <Form novalidate @submit.prevent="handleLoginSubmit">
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
      <Input v-model="formDataRef.username" type="email" id="username" />
      <ErrorField v-show="usernameErrors.length" :errors="usernameErrors" />
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
      <Input v-model="formDataRef.password" type="password" id="password" />
      <ErrorField v-show="passwordErrors.length" :errors="passwordErrors" />
    </div>
    <button
      v-if="isFetching"
      disabled
      class="vazirmatn-body-font"
      type="submit"
    >
      در حال پردازش...
    </button>
    <button v-else class="vazirmatn-body-font" type="submit">ورود</button>
    <FormFooter role="jobseeker" link="employer-login" />
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

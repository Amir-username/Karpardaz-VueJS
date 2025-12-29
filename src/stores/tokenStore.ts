import { defineStore } from "pinia";
import { ref } from "vue";

export const useTokenStore = defineStore("token", () => {
  const token = ref<string | undefined>();

  const setToken = (sendToken: string) => {
    token.value = sendToken;
    localStorage.setItem("token", JSON.stringify(token.value));
  };

  const locToken = localStorage.getItem("token");
  if (locToken) setToken(locToken);

  return { token, setToken };
});

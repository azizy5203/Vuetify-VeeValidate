// Utilities
import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useAppStore = defineStore("app", () => {
  const database = {
    email: "admin@admin.com",
    password: "123456",
  };
  const email = ref(localStorage.getItem("username") || "");
  const password = ref(localStorage.getItem("password") || "");
  const getCredentials = computed(() => `${username.value}:${password.value}`);

  function login(form) {
    const loggedIn =
      form.email == database.email && form.password == database.password
        ? true
        : false;
    return loggedIn;
  }

  function logout(){
    localStorage.clear()
    email.value = null
    password.value = null
  }

  return { email, password, getCredentials,login,logout };
});

<script setup>
import router from "@/router";
import { useAppStore } from "@/store/app";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import { inject } from "vue";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});


const toast = inject('toast')

function onSubmit(values) {
  const { login } = useAppStore();
  console.log({ ...values });
  const loggedIn = login(values);
  if (loggedIn) {
    toast.success("Logged in");
    setTimeout(() => {
      router.push("/");
    }, 500);
  } else toast.error("Invalid Credentials");
}
</script>

<template>
  <Form
    class="login-form w-50 ma-auto fill-height"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <h1 class="text-purple">Login</h1>
    <div class="d-flex flex-column login-form__email-wrapper">
      <label class="text-purple" for="email">Email</label>
      <Field id="email" name="email" v-slot="{ meta, field }">
        <input
          v-bind="field"
          type="email"
          :class="[
            'login-form__field',
            { 'login-form__field--valid': meta.valid && meta.touched },
            { 'login-form__field--invalid': !meta.valid && meta.touched },
          ]"
        />
      </Field>
    </div>
    <div class="d-flex flex-column username-wrapper">
      <label class="text-purple" for="password">Password</label>
      <Field id="password" name="password" v-slot="{ meta, field }">
        <input
          v-bind="field"
          type="password"
          :class="[
            'login-form__field',
            { 'login-form__field--valid': meta.valid && meta.touched },
            { 'login-form__field--invalid': !meta.valid && meta.touched },
          ]"
        />
      </Field>
    </div>
    <div class="login-form__button-wrapper mx-auto">
      <v-btn color="purple" class="rounded" type="submit">login</v-btn>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  place-content: center;
  height: 100%;
  width: 100%;
  &__field {
    background-color: transparent;
    border: 1px solid #a02fb3;
    border-radius: 999px;
    outline: transparent;
    padding: 0.5rem 1rem;
  }
  &__field--valid {
    border: 1px solid rgb(29, 133, 55);
  }
  &__field--invalid {
    border: 1px solid rgb(247, 68, 56);
  }
}
</style>

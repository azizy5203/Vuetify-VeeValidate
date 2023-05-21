<script setup>
import { Field, useField } from "vee-validate";
import { toRef } from "vue";

const props = defineProps({
  name: {
    type: String,
    requird: true,
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
  },
  icon: {
    type: String,
  },
  variant: {
    type: String,
    default: "underlined",
  },
});

let { value, errors, setErrors, handleBlur } = useField(
  toRef(props, "name"),
  undefined,
  {
    validateOnValueUpdate: false,
  }
);

function clearErrors() {
  setErrors([]);
}
</script>

<template>
  <v-text-field
    v-model="value"
    @blur="handleBlur"
    :type="type"
    :label="label"
    :error-messages="errors"
    :prepend-inner-icon="props.icon"
    :variant="props.variant"
    @update:modelValue="clearErrors()"
    clearable
    clear-icon="mdi-close"
    :counter="counter"
    :maxlength="counter"
  ></v-text-field>
  <!-- loading="true" -->
</template>

<style lang="scss" scoped></style>

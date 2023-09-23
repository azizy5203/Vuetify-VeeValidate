<template>
    <v-container>
    <v-combobox
      v-model="selectedCountryCode"
      :items="items"
      item-title="text"
      item-value="value"
      label="Phone Number"
      variant="outlined"
    ></v-combobox>
    <v-btn @click="submit">click</v-btn>
  </v-container>
</template>
<script setup>
const selectedCountryCode = { text: "+1", value: "11" };
// const selectedCountryCode =null;
const phoneNumber = "";
const items = [
  { text: "+1", value: "11" },
  { text: "+44", value: "44" },
  { text: "+61", value: "61" },
];

function submit(){
  console.log(selectedCountryCode.value);
}
</script>

<script setup lang="ts">
import SimpleCard from "@/components/shared/SimpleCard.vue";
import TextField from "@/components/inputs/TextField.vue";
import { Form } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  search: yup.string().email().required("field required").min(10),
});

function handleSubmit(values) {
  console.log(values);
}

const cardBody =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis nostrum similique quis consectetur animi repellat! In dolore atque animi.";
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex fill-height justify-space-between align-center">
      <v-row>
        <v-col cols="12" md="4">
          <Form
            :validation-schema="schema"
            @submit="handleSubmit"
            :initial-values="{ search: 'terms', name: 'name' }"
          >
            <v-row>
              <v-col>
                <TextField
                  name="search"
                  label="search"
                  id="search"
                  icon="mdi-magnify"
                  variant="filled"
                  counter="12"
                  maxLength="12"
                />
              </v-col>
              <v-col>
                <TextField
                  name="name"
                  label="name"
                  id="name"
                  icon="mdi-account"
                  variant="outlined"
                  counter="12"
                  maxLength="12"
                />
              </v-col>
            </v-row>
            <v-btn color="primary" type="submit" class="ms-2">submit</v-btn>
          </Form>
        </v-col>
      </v-row>
      <v-row class="pa-0" style="row-gap: 1rem">
        <v-col class="ma-auto" offset="5" v-for="n in 12" cols="12" md="3">
          <SimpleCard title="Stats" :body="cardBody">
            <template #select-all-info="{ colorData }">
              <v-sheet
                :color="colorData"
                elevation="7"
                width="100%"
                height="70px"
              ></v-sheet>
            </template>
          </SimpleCard>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<style lang="scss" scoped></style>

<script setup>
import Table from "@/components/Table.vue";
import { ref } from "vue";

const checked = "@/assets/logo.png";
const unchecked =
  "data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.016.325h13.968c.382 0 .691.31.691.691v13.968c0 .382-.31.691-.691.691H1.016a.691.691 0 0 1-.691-.691V1.016c0-.382.31-.691.691-.691Z' stroke='%23D2D9DF' stroke-width='.65'/%3E%3C/svg%3E";
const checkboxSelected = ref(false);

function toggleCheck() {
  checkboxSelected.value = !checkboxSelected.value;
}
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height">
      <h1>Home</h1>
      <Table class="table">
        <thead>
          <tr>
            <td v-for="n in 5">title</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(n,index) in 5" :key="`trow-${index}`">
            <td :key="`check-${index}`">
              <input
                @click="toggleCheck"
                type="checkbox"
                class="checkbox"
                :class="[
                  checkboxSelected ? 'checkbox--cheked' : 'checkbox--uncheked',
                ]"
              />
            </td>
            <td v-for="n in 4">data example</td>
          </tr>
        </tbody>
      </Table>
    </v-responsive>
  </v-container>
</template>

<style lang="scss" scoped>
thead {
  tr {
    td {
      padding: 1rem;
      text-align: center;
    }
  }
}
tbody {
  tr {
    td {
      padding: 2rem;
    }
  }
}
.checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.016.325h13.968c.382 0 .691.31.691.691v13.968c0 .382-.31.691-.691.691H1.016a.691.691 0 0 1-.691-.691V1.016c0-.382.31-.691.691-.691Z' stroke='%23D2D9DF' stroke-width='.65'/%3E%3C/svg%3E");
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  min-width: 16px;
  cursor: pointer;
}

.checkbox--cheked {
  background-image: url("@/assets/logo.png");
}
.checkbox--unchecked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.016.325h13.968c.382 0 .691.31.691.691v13.968c0 .382-.31.691-.691.691H1.016a.691.691 0 0 1-.691-.691V1.016c0-.382.31-.691.691-.691Z' stroke='%23D2D9DF' stroke-width='.65'/%3E%3C/svg%3E");
}
</style>

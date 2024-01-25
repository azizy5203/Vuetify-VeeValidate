<script setup>
import CollapseItem from "./CollapseItem.vue";
</script>

<template>
  <div class="container">
    <CollapseItem>
      <template #body>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 5">
              <td>Youssef</td>
              <td>23</td>
              <td>email</td>
              <td>01065292537</td>
            </tr>
          </tbody>
        </table>
      </template>
    </CollapseItem>
    <CollapseItem />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  place-items: center;
  place-content: center;
  background-color: #e9e9e9;
  padding: 7rem 3rem;

  table {
    min-width: 70vw;
    border-collapse: separate;
    border-spacing: 0 5px;
    tr {
      padding: 1rem;
    }
    thead {
      tr {
        background-color: #4692de;
        color: white;
        th {
          padding: 0 0.5rem;
          text-align: start;
          border: none;
        }
      }
    }
    tbody {
        tr{
            td{
            padding: 0 .5rem;
            }
        }
    }
  }
}
</style>

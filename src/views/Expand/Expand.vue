<script setup>
import TableList from "../../components/shared/TableList";
</script>



<template>
  <div class="pa-5 h-100">
    <table-list>
      <thead>
        <tr>
          <th>long header text</th>
          <th>long header text</th>
          <th>long header text</th>
          <th>long header text</th>
          <th>long header text</th>
          <th>long header text</th>
          <th>long header text</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="15">
            <v-expansion-panels class="expand">
              <v-row no-gutters class="w-100">
                <v-expansion-panel  elevation="0" bg-color="blue">
                  <v-expansion-panel-title>
                    <v-row no-gutters>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                    </v-row>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-row no-gutters>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                      <v-col><span>long text header</span></v-col>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-row>
            </v-expansion-panels>
          </td>
        </tr>
      </tbody>
    </table-list>
  </div>
</template>
<style lang="scss" scoped>
.expand{
    .v-row{
        .v-col{
            text-align:start

        }
    }
}

table {
  tbody {
    tr {
      td {
      }
    }
  }
}
.table-list tbody tr td:first-child {
  padding: 0;
}
</style>

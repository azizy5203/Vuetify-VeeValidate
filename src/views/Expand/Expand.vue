<script setup>
import TableList from "../../components/shared/TableList";
</script>

<template>
  <div class="pa-5 h-100">
    <table-list>
      <!-- <thead>
        <v-row no-gutters tag="tr">
          <v-col v-for="n in 15" tag="th">long text header</v-col>
        </v-row>
      </thead> -->
      <tbody style="background-color: #00000000">
        <tr>
          <td>
            <v-expansion-panels multiple class="expand" variant="">
              <v-expansion-panel
                v-for="n in 4"
                class="expand__panel"
                elevation="0"
                :ripple="false"
              >
                <v-expansion-panel-title
                  class="expand__title"
                  hide-actions
                  :static="true"
                  :ripple="false"
                >
                  <v-row no-gutters>
                    <v-col v-for="n in 15"
                      >long text header long text header long text header
                    </v-col>
                  </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row no-gutters>
                    <v-col v-for="n in 15">long text header</v-col>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </td>
        </tr>
      </tbody>
    </table-list>
  </div>
</template>
<style lang="scss" scoped>
$expand-color: #16707a;
.expand {
  &:hover {
    // background-color: transparent;
  }

  .v-expansion-panel-title__overlay {
    // background-color: green;
    :hover {
      // background-color: transparent;
    }
  }

  &__panel {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 16px;

    &.v-expansion-panel--active {
      border: 1px solid $expand-color;
    }

    :hover {
      // background-color: transparent;
    }
  }

  &__title {
    &.v-expansion-panel-title--active {
      background-color: $expand-color;
      color: white;
      border-radius: 16px 16px 0 0;
    }

    // background-color: red;
    :hover {
      // background-color: transparent;
    }

    .v-expansion-panel-title__overlay {
      opacity: 0;
    }
  }

  .v-row {
    font-size: 1rem;
    gap: 1rem;

    .v-col {
      padding: 1rem 0;
    }
  }
}

table {
  td {
  }

  tbody {
    tr {
      td {
      }
    }
  }
}

.table-list {
  thead tr th:first-child {
    min-width: unset;
    width: unset;
    border-radius: unset;
  }

  thead tr {
    padding: 16px 24px;
    gap: 1rem;
  }

  .v-col {
    font-size: 12px;
    font-weight: 600;
    // color: rgba(70, 78, 95, 0.8);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  tbody {
    tr {
      &:hover {
        background-color: transparent;
      }

      td {
        &:hover {
          background-color: transparent;
        }

        &:first-child {
          padding: 0;
        }
      }
    }
  }
}
</style>

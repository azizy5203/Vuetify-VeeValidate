<script setup>
import { ref } from 'vue'

const model = ref()

</script>

<template>
    <div class="pa-15">
        <v-expansion-panels class="expansion" variant="accordion" v-model="model">

            <div class="expansion__headers"></div>
            <v-expansion-panel v-for="n in 3" elevation="0" :value="`panel-${n}`"
                :class="['expansion__panel', model == `panel-${n}` ? 'expansion__panel--expand' : 'expansion__panel--collapse']"
                rounded="lg">
                <v-expansion-panel-title  rounded="false"
                    :hide-actions="true"
                    :class="['expansion__title', model == `panel-${n}` ? 'expansion__title--expand' : 'expansion__title--collapse']">
                    <v-icon :icon="model == `panel-${n}` ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        :color="model == `panel-${n}` ? 'white' : '#464E5F'" class="me-4 mt-3" />
                    <table class="title-table">
                        <thead>
                            <tr class="title-table__labels-row" v-if="n == 1">
                                <th>Risk ID</th>
                                <th>Risk Name</th>
                                <th>Risk Category</th>
                                <th>Risk Status</th>
                                <th>Risk Rate</th>
                            </tr>
                            <tr>
                                <th>0045</th>
                                <th>asdqwd</th>
                                <th>Reputational</th>
                                <th>Active</th>
                                <th>Severe</th>
                            </tr>
                        </thead>
                    </table>
                </v-expansion-panel-title>

                <v-expansion-panel-text class="expansion__body">
                    <table class="content-table w-100">
                        <thead>
                            <tr>
                                <th>Owner</th>
                                <th>Caused by</th>
                                <th>Mitigation Measures</th>
                                <th>Impact</th>
                                <th>Likelihood</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>AA</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque repellat,
                                    facere ullam id quibusdam.</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque repellat,
                                    facere ullam id quibusdam.</td>
                                <td>
                                    <span class="bg-grey-lighten-3 px-4 py-2 rounded-lg font-weight-medium">High</span>
                                </td>
                                <td>
                                    <span class="bg-grey-lighten-3 px-4 py-2 rounded-lg font-weight-medium">High</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<style lang="scss">
.expansion {

    &__headers {
        background-color: #16707A;
        width: 100%;
        padding-block: 1.2rem;
        border-radius: .625rem;
    }

    &__panel {
        border-width: 1px;

        &--expand {
            border-color: #16707A;
            // border-radius: 0.625rem ;
        }

        &--collapse {
            border-color: transparent;
        }
    }

    .v-expansion-panel {
        // border-color: #16707A;
        border-style: solid;
    }


    &__title {
        // padding: 0;
        padding-inline-start: 1rem;
        font-size: 0.875rem;
        color: white;
        
        &--expand {
            background-color: #16707A;
            color: white;
        }
        
        &--collapse {
            background-color: transparent;
            color: #464E5F;
        }

    }

    &__body {
        padding-inline-start: .8rem;
    }
}


.title-table {
    border-collapse: collapse;
    width: 100%;


    &__labels-row {
        transform: translateY(-2.8rem);
        background-color: #16707A;
        color: #fff;
    }

    thead {
        tr {
            padding: 1rem;

            th {
                text-align: start;
                min-width: 7rem;

                &:nth-of-type(1) {
                    min-width: 4rem;
                }

                &:nth-of-type(2) {
                    min-width: 15rem;
                }
            }
        }
    }
}

.content-table {
    thead {
        tr {
            th {
                padding-block: .5rem;
                padding-inline-start: 1.5rem;
                color: #B5B5C3;
                ;
            }
        }
    }

    tbody {
        tr {
            vertical-align: middle;

            td {
                padding-inline-start: 1.5rem;
                color: #464E5F;
            }
        }
    }

    th,
    td {
        text-align: start;
    }
}</style>
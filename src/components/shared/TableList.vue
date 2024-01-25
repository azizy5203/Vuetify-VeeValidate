<template>
    <div :class="['table-responsive', { 'responsive-holding': responsiveHolding }]">
        <table :class="['table-list', { 'tooltips': tooltips }, apllyWidth ? '' : 'mw-900px']">
            <slot></slot>
        </table>
    </div>
    <div class="text-center">
        <v-pagination v-model="query.PageNumber" v-if="totalPage > 1" :length="totalPage" :total-visible="6"
            @input="pagination" @next="pagination()" @prev="pagination()" @update:model-value="pagination()"></v-pagination>
    </div>
</template>

<script>

export default {
    name: "tableList",
    props: ["totalRows", "responsiveHolding", "tooltips", "apllyWidth"],
    data() {
        return {
            query: {
                Order: {
                    FieldName: "Id",
                    SortType: 2,
                },
                Filter: [],
                Name: '',
                PageNumber: 1,
                PageSize: process.env.VUE_APP_Default_Page_Size,
                model: null,
            },
        }
    },
    computed: {
        totalPage() {
            return Math.ceil(this.totalRows / this.query.PageSize)
        }
    },
    methods: {
        pagination: function () {
            this.$emit("pagination", this.query);
        },
    },
};

</script>
<style lang="scss">
.small-nav {
    .responsive-holding {
        .table-list {
            &.tooltips {
                .padge-with-txt {
                    max-width: 520px;

                }

                tbody {
                    tr {
                        td {
                            min-width: 700px;

                            &:first-child {

                                min-width: 340px; //600
                            }
                        }
                    }
                }
            }
        }
    }

    .table-list {
        tbody {
            tr {


                &:hover {}
            }
        }
    }
}

.table-list {
    width: 100%;
    border-collapse: separate;
    text-align: -webkit-match-parent;
    border-spacing: 0 5px;

    .mw-900px {
        min-width: 900px;
    }

    &.tooltips {
        thead {
            tr {
                th {
                    &:first-child {
                        /*min-width: 100px;
                            width: 30%;*/
                    }
                }
            }
        }

        tbody {
            tr {
                td {
                    min-width: 100px; //130
                    /*   @include respond-below(xxl) {
                            min-width: 90px;
                        }*/

                    &:first-child {


                        min-width: 340px; //600
                    }
                }
            }
        }

        .padge-with-txt {
            max-width: 340px;
        }
    }

    thead {
        height: 60px;

        tr {
            background-color: #F4F7F5;
            border-bottom: 1px solid #fff;

            th {
                padding: 1rem 0;
                font-size: 12px;
                font-weight: 600;
                color: rgba(70, 78, 95, 0.8);
                white-space: nowrap;

                &:not(:first-child) {
                    min-width: 90px;
                }


                &:first-child {
                    min-width: 200px;
                    width: 40%;
                    border-radius: .625rem 0 0 .625rem;

                }

                &:last-child {
                    border-radius: .625rem 0 0 .625rem;
                    min-width: 60px;

                }
            }
        }
    }

    tbody {
        background-color: #FFFFFF;
        font-size: 13px;
        color: #464E5F;

        tr {
            position: relative;
            overflow: hidden;
            transition: background 0.25s ease-in-out;

            &:after {
                content: '';
                height: 1px;
                width: 100%;
                background-color: rgb(210, 223, 215);
                position: absolute;
                bottom: 0;
                left: 0;
                transition: background 0.25s ease-in-out;
            }

            td {
                padding: 1rem 0;
                min-width: 100px;


                .button {
                    height: auto;

                }

                .table-user-list {
                    ul {
                        list-style: none;
                    }
                }

                &:first-child {
                    padding: 0 1.25rem;

                }

                &:last-child {
                    min-width: unset;

                }
            }

            .table-list__chip {
                width: fit-content;
                transition: all 0.35s ease-in-out;

                &__item {
                    padding: 4px 10px;
                    text-align: center;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 400;
                    width: -moz-fit-content;
                    width: fit-content;

                    &--active {
                        background-color: #F4F7F5;
                        color: var(--green-dark);
                    }

                    &--not-active {
                        background-color: #D2D9DF;
                        color: #F4F7F5;
                    }
                }
            }

            .table-list__label {


                &__item {
                    color: #464E5F;
                    font-size: 12px;
                    font-weight: 600;
                }
            }

            .table-list__btns {
                display: inline-flex;
                gap: 0.5rem;
                align-items: center;
                opacity: 0;
                visibility: hidden;
                position: absolute;
                top: 50%;
                top: calc(50% - 2px);
                transform: translateY(-50%);
                transition: all 0.25s ease-in-out;


                .button {
                    padding: 0.15rem;
                    height: 28px;
                    width: 28px;
                    position: relative;
                    outline: transparent;
                    border: transparent;

                    path {
                        fill: var(--green-dark);
                    }

                    &:hover {
                        &.delete-btn path {
                            fill: var(--red);
                        }

                        &.edit-btn path {
                            fill: var(--primary-light);
                        }
                    }
                }

                .button--expand {
                    padding: 0.15rem;
                    height: 28px;
                    width: 28px;
                    position: relative;
                    outline: transparent;

                    path {
                        fill: var(--white);
                    }

                    &:hover {
                        &.delete-btn path {
                            fill: var(--red);
                        }

                        &.edit-btn path {
                            fill: var(--primary-light);
                        }
                    }
                }
            }


            &:hover {
                border-radius: .625rem;
                background-color: #F4F7F5;
                border-bottom-color: transparent;

                .app--prorgress-bar {
                    background-color: #fff;
                }

                &:after {
                    background-color: transparent;
                }

                .action__wrapper {

                    &__path {}
                }

                .table-list__chip {


                    &__item {

                        &--active {
                            background-color: var(--green-dark);
                            color: #F4F7F5;
                        }

                        &--not-active {
                            background-color: #7E8299;
                            color: #F4F7F5;
                        }
                    }
                }



                .table-list__btns {
                    opacity: 1;
                    visibility: visible;

                }

                td button.button--secondary-outline {
                    background-color: var(--primary);
                    color: #ffffff;
                }

                .padge-with-txt__icon {
                    background: #fff;
                }

                .table-list__title-wrapper__icon {
                    background-color: #FFFFFF;
                }

                .table-list__title-wrapper__txt {
                    color: var(--green-dark)
                }

                .padge-with-txt {
                    .padge-item {
                        background-color: var(--green-dark);
                        color: #F4F7F5;
                    }
                }
            }

            .action__wrapper {
                overflow: hidden;
                position: relative;
                height: 38px;


                &__path {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 0.5rem;
                    width: fit-content;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: all 0.25s ease-in-out;


                    .table-list__chip {
                        white-space: nowrap;
                    }

                    .table-list__control {
                        display: flex;
                        flex-wrap: nowrap;
                        align-items: center;
                        min-width: 54px;

                        .button {
                            padding: 0.5rem 0.25rem;
                            height: 28px;
                            width: 28px;

                            &.edit-btn {
                                
                            }

                            &.delete-btn {
                                
                            }

                            path {
                                fill: var(--green-dark);
                            }

                            &:hover {
                                &.delete-btn path {
                                    fill: var(--red);
                                }

                                &.edit-btn path {
                                    fill: var(--primary-light);
                                }
                            }
                        }
                    }
                }

                .expire-wapper {}
            }
        }
    }

    &__title-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;

        &__icon {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background-color: #F4F7F5;
            color: var(--primary);
            width: 40px;
            height: 40px;
            padding: 0.563rem;
            border-radius: .375rem;
            transition: background 0.25s ease-in-out;
        }

        &__txt {
            font-size: 14px;
            font-weight: 600;
            color: rgba(69, 77, 94, 0.8);
            transition: color 0.25s ease-in-out;
            word-wrap: break-word
        }

        &__normal-txt {
            color: #B5B5C3;
            font-size: 13px;
            font-weight: 500;
            vertical-align: middle;
            white-space: nowrap;

        }
    }

    &__date {
        display: block;
        min-width: 80px;
        font-weight: 500;
        font-size: 13px;
        color: #B5B5C3;
    }

    &__report-type {
        font-weight: 400;
        font-size: 14px;
        color: var(--green-dark)
    }

    .padge-with-txt {
        display: inline-flex;
        gap: .375rem;
        align-items: center;
        overflow-x: hidden;

        &__icon {
            width: 40px;
            height: 40px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: #F4F7F5;
            border-radius: 6px;
            transition: background 0.25s ease-in-out;
        }

        .padge-item {
            padding: 7.5px 10px;
            background-color: #F4F7F5;
            color: var(--green-dark);
            text-align: center;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 500;
            width: fit-content;
            white-space: nowrap;
            transition: all 0.25s ease-in-out;
            letter-spacing: 0px !important;
        }
    }

    .badge-txt {
        width: 32px;
        height: 32px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: #F4F5F7;
        color: #9FA8B7;
        border-radius: 50%;
        line-height: 0;
    }
}

.status {
    padding: 5px 8px;
    border-radius: 6px;

    &--new {
        background-color: #EEF1F3;
        color: #7E8299;
    }

    &--pending {
        background-color: #FFEBEE;
        color: #EC2D30;
    }

    &--progress {
        background-color: #E4F2FF;
        color: #3A70E2;
    }

    &--completed {
        background-color: #E5F5EC;
        color: #0C9D61;
    }

    &--archived {
        background-color: #FBE7D0;
        color: #9D5A0C;
    }
}
</style>
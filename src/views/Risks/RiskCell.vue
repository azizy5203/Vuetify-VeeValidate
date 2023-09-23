<script setup>
const props = defineProps(["item"])
</script>

<template>
    <!-- <span>{{item}}</span> -->
<span :style="[{backgroundColor:item?.RiskRateColor}]">{{item.RiskRateName}}</span>
</template>

<style lang="scss" scoped>
span{
    color: black;
}
</style>
<template>
  <div style="height: 300px">
    <div style="display: inline-block; height: 300px; margin-left: 70px">
      <a-slider v-model:value="value1" vertical :reverse="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref<number>(30);
</script>

<style lang="less" scoped></style>

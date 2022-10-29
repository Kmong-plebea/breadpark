<script lang="ts" setup>
import Header from "@/components/HeaderItem.vue";
</script>

<template>
  <div class="index">
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
}
</style>
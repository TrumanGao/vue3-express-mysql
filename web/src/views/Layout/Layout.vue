<template>
  <!-- 头部 -->
  <layout-header class="layout-header"></layout-header>
  <!-- 主体 -->
  <router-view class="layout-main"></router-view>
</template>

<script lang="ts">
import layoutHeader from "./components/layout-header.vue";
export default {
  components: { layoutHeader }
};
</script>

<style scoped lang="less">
.layout-header {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  background-color: rgba(1, 1, 1, 0.2);
}
.layout-main {
  width: 100%;
  height: calc(100% - 60px);
  background-color: rgba(1, 1, 1, 0.1);
  overflow-y: auto;
  padding-top: 60px;
}
</style>

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
  color: #fff;
}
.layout-main {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-top: 60px;
  color: #fff;
}
</style>

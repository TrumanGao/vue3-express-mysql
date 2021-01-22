<template>
  <a-layout>
    <a-layout-header>
      <layout-header></layout-header>
    </a-layout-header>
    <a-layout-content>Content</a-layout-content>
    <a-layout-footer>
      <layout-footer></layout-footer>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import layoutHeader from "./components/layout-header.vue";
import layoutFooter from "./components/layout-footer.vue";
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>

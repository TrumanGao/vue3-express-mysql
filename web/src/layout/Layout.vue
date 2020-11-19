<template>
  <div class="layout-page">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class LayoutPage extends Vue {}
</script>

<style scoped lang="scss">
.layout-page {
  height: 100%;
}
</style>

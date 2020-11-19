<template>
  <div class="home-page">
    <h2>首页</h2>
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <router-link to="About">关于我们</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HomePage extends Vue {}
</script>

<style scoped lang="scss">
.home-page {
}
</style>

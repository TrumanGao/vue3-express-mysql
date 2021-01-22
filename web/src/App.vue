<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <login-item msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import loginItem from "./components/login-item.vue";

export default {
  name: "App",
  components: {
    loginItem
  }
};
</script>

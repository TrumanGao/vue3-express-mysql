<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/login-item.vue</code> to test hot module replacement.
  </p>
  <a-button type="primary"> Primary </a-button>
</template>

<script lang="ts">
export default {
  name: "loginItem",
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>

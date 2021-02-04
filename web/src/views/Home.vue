<template>
  <div class="home-page">
    <div class="home-form">
      <input class="form-input" v-model="keyword" placeholder="请输入关键字" />
      <button class="form-btn" type="button">搜索</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
export default {
  setup() {
    const keyword = ref("");

    watch(keyword, val => {
      console.log("keyword", val);
    });
    return { keyword };
  }
};
</script>

<style scoped lang="less">
.home-page {
  font-size: 30px;
  background-color: #000000;

  .home-form {
    display: flex;
    align-items: center;
    width: 500px;
    margin: 0 auto;
    .form-input {
      width: 380px;
      height: 50px;
      border-radius: 50px;
      border: none;
      padding: 0 25px;
      line-height: 50px;
      font-size: 20px;
      margin-right: 20px;
    }
    .form-btn {
      width: 100px;
      height: 50px;
      border: none;
      background-color: #fff;
      border-radius: 10px;
      font-size: 20px;
    }
  }
}
</style>

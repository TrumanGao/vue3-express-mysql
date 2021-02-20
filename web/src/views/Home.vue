<template>
  <div class="home-page">
    <div class="home-form">
      <input class="form-input" v-model="keyword" placeholder="请输入关键字" />
      <button class="form-btn" type="button">搜索</button>
    </div>
    <div class="flex-center">
      <button class="form-btn" @click="addCount">增加</button>
      <div class="">{{ age }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, watch } from "vue";
export default {
  setup() {
    const keyword = ref("");
    const count = reactive({
      age: 10,
      year: 2000
    });

    watch(keyword, val => {
      console.log("keyword", val);
    });

    watch(
      () => count.age,
      (newVal, oldVal, clean) => {
        console.log("监听数据", newVal, oldVal);
        // clean(() => {
        //   console.log("清除异步事务，暂不了解如何使用");
        // });
      }
    );

    function addCount() {
      count.age += 1;
      count.year += 1;
    }

    return { keyword, ...toRefs(count), addCount };
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

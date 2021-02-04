<template>
  <div class="edit-page">
    <div class="edit-form">
      <input
        class="form-input"
        v-model="state.title"
        placeholder="请输入网站名称"
      />
      <input class="form-input" v-model="state.url" placeholder="请输入网址" />
      <div class="form-btns">
        <button class="form-btn" type="button" @click="handleAdd">添加</button>
        <button class="form-btn" type="button" @click="handleAdd">删除</button>
      </div>
    </div>
    <div class="edit-links">
      <div class="edit-link" v-for="link in state.links" :key="link.url">
        {{ link.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      title: "",
      url: "",
      links: [
        { title: "vue.js官网", url: "www.vue.com" },
        { title: "react.js官网", url: "www.react.com" },
        { title: "anglar.js官网", url: "www.anglar.com" },
        { title: "jquery.js官网", url: "www.jquery.com" }
      ]
    });

    function handleAdd() {
      state.links.push({ title: state.title, url: state.url });
    }

    return { state, handleAdd };
  }
};
</script>

<style scoped lang="less">
.edit-page {
  font-size: 30px;
  background-color: #333333;

  .edit-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-input {
      width: 400px;
      height: 50px;
      border-radius: 50px;
      border: none;
      padding: 0 25px;
      line-height: 50px;
      font-size: 20px;
      margin-bottom: 20px;
    }
    .form-btns {
      width: 400px;
      display: flex;
      justify-content: space-between;
      .form-btn {
        width: 180px;
        height: 50px;
        border: none;
        background-color: #fff;
        border-radius: 10px;
        font-size: 20px;
      }
    }
  }
  .edit-links {
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;

    .edit-link {
      min-width: 200px;
      padding: 20px;
      white-space: nowrap;
      background-color: gray;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>

<template>
  <div class="login-page">
    <form class="login-form" action="" enctype="multipart/form-data">
      <div class="form-item">
        <label class="form-item-label" for="form-name"></label>
        <div class="form-item-content">
          <input
            id="form-name"
            class="form-input"
            name="name"
            type="text"
            v-model="state.formData.name"
          />
        </div>
      </div>
      <button class="form-btn" type="submit">提交</button>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive, watch } from "vue";
export default {
  setup(props) {
    const state = reactive({
      formData: {
        name: "",
        gender: 1, // 1 男 2 女
        mobile: "",
        email: ""
      }
    });

    watch(state.formData, data => {
      console.log("formData", data.name);
      console.log("formData", data.gender);
      console.log("formData", data.mobile);
    });

    return { state };
  }
};
</script>

<style scoped lang="less">
.login-page {
  font-size: 30px;
  background-color: #333333;
}
</style>

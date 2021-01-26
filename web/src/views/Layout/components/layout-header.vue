<template>
  <div class="layout-header">
    <div
      :class="{
        'menu-item': true,
        'menu-item__active': menu.name === currentRouteName
      }"
      v-for="menu in state.menus"
      :key="menu.name"
      @click="clickMenu(menu)"
    >
      {{ menu.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "LayoutHeader",
  setup(props, context) {
    const $route = useRoute();
    const $router = useRouter();

    const state = reactive({
      // 菜单
      menus: [
        {
          path: "/Home",
          name: "Home",
          title: "首页"
        },
        {
          path: "/Login",
          name: "Login",
          title: "登录"
        }
      ]
    });
    // 当前路由名称
    const currentRouteName = computed(() => $route.name);

    // 切换菜单
    interface IMenu {
      path: string;
      name: string;
      title: string;
    }
    const clickMenu = (item: IMenu) => {
      $router.push({
        name: item.name
      });
    };

    return { state, currentRouteName, clickMenu };
  }
};
</script>

<style scoped lang="less">
.layout-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .menu-item {
    cursor: pointer;
    margin-right: 50px;
    &:hover {
      font-weight: bold;
    }
  }
  .menu-item__active {
    font-weight: bold;
  }
}
</style>

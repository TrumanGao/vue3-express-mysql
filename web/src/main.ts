import { createApp } from "vue";
import App from "./App.vue";
import $router from "./router/index";
import $store from "./store/index";
// 全局样式
import "./assets/style/common.less";

let app = createApp(App);

// 通过use 将 路由插件安装到 app 中
app.use($router).use($store);
app.mount("#app");

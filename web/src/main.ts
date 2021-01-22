import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import $router from "./router/index";
import $store from "./store/index";

let app = createApp(App);

// 引入 ant-design-vue
import $_antdv from "./plugins/antdv";
$_antdv(app);

// 通过use 将 路由插件安装到 app 中
app.use($router).use($store);
app.mount("#app");

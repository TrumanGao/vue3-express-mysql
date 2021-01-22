import { Button, message } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

export default (app: any) => {
  app.use(Button);
  app.config.globalProperties.$message = message;
};

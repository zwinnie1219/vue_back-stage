import Vue from "vue";
import { Row, Button } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/index";

Vue.config.productionTip = false;
Vue.use(Row);
Vue.use(Button);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

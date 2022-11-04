import Vue from "vue";
import {
  Row,
  Button,
  aside,
  container,
  header,
  main,
  row,
  menu,
  submenu,
  menuItem,
  MenuItemGroup,
} from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/index";

Vue.config.productionTip = false;

//按需引入
Vue.use(Row);
Vue.use(Button);
Vue.use(aside);
Vue.use(container);
Vue.use(header);
Vue.use(main);
Vue.use(row);

Vue.use(menu);
Vue.use(submenu);
Vue.use(menuItem);
Vue.use(MenuItemGroup);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

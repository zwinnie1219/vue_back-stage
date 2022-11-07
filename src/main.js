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
  dropdownMenu,
  dropdownItem,
  dropdown,
  col,
  Card,
  table,
  tableColumn,
} from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "../mock/mock";
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
Vue.use(dropdownMenu);
Vue.use(dropdownItem);
Vue.use(dropdown);
Vue.use(col);
Vue.use(row);
Vue.use(Card);
Vue.use(table);
Vue.use(tableColumn);

//挂载到vue实例中，就可以使用this.$...访问到该方法
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

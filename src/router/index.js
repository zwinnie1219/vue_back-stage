import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";

Vue.use(VueRouter);

//组件和路径之间映射
const routes = [
  //主路由
  {
    path: "/",
    component: Main,
    redirect: "/home", //重定向
    children: [
      //子路由
      { path: "home", component: Home, name: "home" }, //首页
      { path: "user", component: User, name: "User" }, //用户管理
      { path: "mall", component: Mall, name: "mall" }, //商品管理
      { path: "page1", component: PageOne, name: "page1" },
      { path: "page2", component: PageTwo, name: "page2" },
    ],
  },
];
//创建router实例
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;

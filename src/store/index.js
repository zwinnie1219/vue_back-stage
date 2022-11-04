import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab.js";

//目的是让vueX注入全局
Vue.use(Vuex);

//创建Vuex实例
export default new Vuex.Store({
  modules: {
    tab,
  },
});

//最后再main中进行挂载到vue实例中

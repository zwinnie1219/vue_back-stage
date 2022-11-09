export default {
  state: {
    isCollapse: false, //控制菜单的展开收起
    tabList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
    ], //面包屑内容
  },
  mutations: {
    //控制菜单方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    //更新面包屑数据
    selectMenu(state, val) {
      if (val.name !== "home") {
        const index = state.tabList.findIndex((item) => item.name === val.name);

        if (index === -1) {
          state.tabList.push(val);
        }
      } else if (val.name === "home") {
        state.tabList.splice(1, state.tabList.length - 1);
      }
    },
  },
};

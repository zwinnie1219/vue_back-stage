<template>
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>通用后台管理系统</h3>
    <el-menu-item
      v-for="item in noClidren"
      :index="item.name"
      :key="item.name"
      @click="clickMenu(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>

    <el-submenu index="item.label" v-for="item in hasClidren" :key="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="child in item.children"
        :key="child.name"
        :index="child.name"
      >
        <el-menu-item :index="child.name" @click="clickSubMenu(child)">{{
          child.name
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuDate: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "User",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面一",
              icon: "setting",
              url: "Other/pageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面二",
              icon: "setting",
              url: "Other/pageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //router:整个router实例
    //route:当前页面的path路径
    clickMenu(item) {
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
    },
    clickSubMenu(item) {
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
    },
  },
  computed: {
    //没有子菜单
    noClidren() {
      return this.menuDate.filter((item) => !item.children);
    },

    //有子菜单
    hasClidren() {
      return this.menuDate.filter((item) => item.children);
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 300px; */
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3 {
    color: aliceblue;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
  }
}
</style>

<template>
  <div class="heardBox">
    <div class="l-hearder">
      <el-button
        icon="el-icon-menu"
        @click="changeState"
        class="header-icon"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tagList"
          :key="item.path"
          :to="{ path: item.path }"
          @click.native="clickTab(item)"
          class="my-color"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-hearder">
      <el-dropdown placement="bottom">
        <span class="userBox">
          <img src="../assets/logo.png" alt="" class="userPhone" />
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    changeState() {
      this.$store.commit("collapseMenu");
    },
    clickTab(item) {
      if (item.name === "home") {
        console.log(111);
        let list = this.$store.state.tab.tabList;
        list.splice(1, list.length - 1);
      }
    },
  },
  computed: {
    ...mapState({ tagList: (state) => state.tab.tabList }),
  },
};
</script>

<style lang="less" scoped>
.heardBox {
  height: 60px;
  background-color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  .l-hearder {
    margin-top: 15px;
    display: flex;
    .header-icon {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-breadcrumb {
      margin-top: 10px;
      margin-left: 10px;
      .my-color /deep/ .el-breadcrumb__inner {
        color: rgb(244, 234, 234);
        .my-color/deep/ .el-breadcrumb__separator {
          color: aliceblue;
        }
      }
    }
  }
  .el-dropdown {
    margin-top: 10px;
    .userBox {
      width: 40px;
      height: 40px;
      .userPhone {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>

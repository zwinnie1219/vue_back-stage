<template>
  <div class="heardBox">
    <div class="l-hearder">
      <el-button icon="el-icon-menu" @click="changeState"></el-button>
      <span class="headerHomePage">首页</span>
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
export default {
  data() {},
  methods: {
    changeState() {
      this.$store.commit("collapseMenu");
    },
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
    margin-top: 10px;
    .headerHomePage {
      color: aliceblue;
      font-size: 13px;
      margin-left: 20px;
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

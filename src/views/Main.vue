<template>
  <div>
    <el-container>
      <el-aside><CommonAside /></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main> <RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonAside from "../components/CommonAside.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
  },
};
</script>

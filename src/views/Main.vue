<template>
  <div>
    <el-container>
      <el-aside><CommonAside /></el-aside>
      <el-container>
        <el-header><CommonHeader /></el-header>
        <el-main> <RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
</style>

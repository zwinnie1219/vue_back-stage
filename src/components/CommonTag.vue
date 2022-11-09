<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tabList"
      :key="item.path"
      :effect="item.name === $route.name ? 'dark' : 'plain'"
      :closable="item.name !== 'home'"
      @close="closeTab(item, index)"
      @click="$router.push(item.path)"
      class="tabItem"
      size="small"
      >{{ item.name }}</el-tag
    >
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tabList: (state) => state.tab.tabList,
    }),
  },
  methods: {
    //点击删除tag
    closeTab(item, index) {
      this.tabList.splice(index, 1);
      if (item.name !== this.$route.name) {
        return;
      }
      if (index === this.tabList.length) {
        this.$router.push(this.tabList[index - 1].path);
      } else {
        this.$router.push(this.tagList[index].path);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  margin-top: 10px;
  margin-left: 5px;
  .tabItem {
    margin-right: 8px;

    cursor: pointer;
  }
}
</style>

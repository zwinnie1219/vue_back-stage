<template>
  <div>
    <h1>main</h1>
    <RouterView />
  </div>
</template>
<script>
import { RouterView } from "vue-router";

export default {
  data() {
    return {};
  },
  components: { RouterView },
};
</script>

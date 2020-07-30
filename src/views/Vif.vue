<template>
  <div class="vif">
    <h3>条件付きレンダリング</h3>
    <button v-on:click="showDetail">表示</button>
    <div v-if="detail">
      詳細が表示されました。
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      detail: false
    };
  },
  methods: {
  showDetail(): void {
    this.detail = true;
  }
}
});
</script>

<style scoped>
.vif {
  text-align: center;
}
</style>
<template>
  <div class="event">
    <h3>イベントハンドリング</h3>
    <button v-on:click="onClick">実行</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      msg: "Hello Vue.js!"
    };
  },
  methods: {
    onClick(): void {
      alert(this.msg);
    }
  }
});
</script>

<style scoped>
.event {
  text-align: left;
}
</style>
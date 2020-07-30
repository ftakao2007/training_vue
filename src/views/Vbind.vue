<template>
  <div class="vbind">
    <button v-on:click="raiseError">エラー</button>
    <div v-bind:class="{ 'text-danger': hasError }">
      システムからのメッセージ
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      hasError: false
    };
  },
  methods: {
  raiseError(): void {
    this.hasError = true;
  }
}
});
</script>

<style scoped>
.vbind {
  text-align: left;
}
.text-danger {
  color: darkred;
}
</style>
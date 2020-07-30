<template>
  <div class="compute">
    <h3>算出プロパティ</h3>
    <p>{{ computedMsg }}</p>
    <p>{{ num1 }} + {{ num2 }} = {{ calcMsg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      msg: "Hello Vue.js!",
      num1: 1,
      num2: 2
    };
  },
  computed: {
  computedMsg(): string {
    return this.msg.replace(/!/g, "") + " + TypeScript!";
  },
  calcMsg(): number {
    return this.num1 + this.num2
  }
}
});
</script>

<style scoped>
.compute {
  text-align: center;
}
</style>
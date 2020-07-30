<template>
  <div class="home">
    <h3>{{ msg }}</h3>
      <p>
      <a href="https://github.com/vuejs-jp/hol-vue-ts-basic" target="_blank" rel="noopener">Vue.js 初心者向け Hands-on Lab</a>.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      msg: "Vueのサンプル"
    };
  }
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
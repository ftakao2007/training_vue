<template>
  <div class="list">
    <h3>リストレンダリング</h3>
    <ul id="item-list">
      <li v-for="item in items" :key="item.id">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

declare interface Item {
  id: number;
  name: string;
}

export default Vue.extend({
  data() {
    return {
      items: [
        {
          id: 1,
          name: "キーボード"
        },
        {
          id: 2,
          name: "マウス"
        }
      ] as Item[]
    };
  }
});
</script>

<style scoped>
.list {
  text-align: left;
}
</style>
<template>
  <div class="table">
    <el-table
      :data="noteBooks"
      :default-sort="{prop: 'id', order: 'ascending'}"
    >
      <el-table-column prop="id" label="ID" sortable> </el-table-column>
      <el-table-column prop="brand" label="メーカー"> </el-table-column>
      <el-table-column prop="name" label="機種名"> </el-table-column>
      <el-table-column prop="isUsed" label="利用中">
        <template slot-scope="scope">
          <i class="el-icon-check" v-if="scope.row.isUsed"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

declare interface NoteBook {
  id: number;
  brand: string;
  name: string;
  isUsed: boolean;
}

export default Vue.extend({
  data() {
    return {
      noteBooks: [
        {
          id: 1001,
          brand: "Microsoft",
          name: "Surface Go",
          isUsed: false
        },
        {
          id: 1002,
          brand: "Apple",
          name: "MacBook Air",
          isUsed: true
        }
      ] as NoteBook[]
    };
  }
});
</script>

<style scoped>
  .table {
  text-align: center;
  }
</style>
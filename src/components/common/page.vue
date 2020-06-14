<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNumber"
      background
      :page-sizes="[10,15,20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
      this.page();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNumber = val;
      this.page();
    },
    page() {
      var self = this;
      self.$store
        .dispatch("getTableData", {
          pageNumber: self.pageNumber,
          pageSize: self.pageSize,
          tableType: self.$store.state.tableType
        })
        .then(() => {
          self.$parent.$parent.changeTableData();
        });
    }
  },
  props: {
    total: Number
  },
  data() {
    return {
      pageSize: 10,
      pageNumber: 1
    };
  }
};
</script>

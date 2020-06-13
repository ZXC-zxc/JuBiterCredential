<!-- 使用权 -->
<template>
  <div>
    <Table :tabListData="tabListData"></Table>
  </div>
</template>

<script>
import Table from "@/components/common/table.vue";
export default {
  data: function() {
    return {
      tableType: 1,
      //接收子组件传来的数据
      // rowId:"",
      // 传递到子组件的数据

      tabListData: [
        {
          title: "交易hash", // 表格列 标题
          el_data: "txHash" //表格列 数据字段名称
        },
        {
          title: "高度",
          el_data: "height"
        },
        {
          title: "存证hash",
          el_data: "claimContent"
        },
        {
          title: "所属账户",
          el_data: "holder"
        },
        {
          title: "存证时间",
          el_data: "timestamp"
        }
      ]
    };
  },
  components: {
    Table
  },
  created() {}
};
</script>

<style>
</style>
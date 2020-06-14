<!-- 我提出的 -->
<template>
  <Table :tableData="tableData" :tabListData="tabListData" v-if="flag"></Table>
</template>

<script>
import Table from "@/components/common/table.vue";
export default {
  components: {
    Table
  },
  beforeCreate() {
    var self = this;
    self.$store
      .dispatch("getTableData", {
        pageNumber: 1,
        pageSize: 10,
        tableType: 2
      })
      .then(() => {
        self.tableData.list = self.$store.state.list;
        self.tableData.total = self.$store.state.total;
        self.flag = true;
      });
  },
  data() {
    return {
      flag: false,
      //接收子组件传来的数据
      // rowId:"",
      // 传递到子组件的数据
      tableData: {
        list: [],
        total: 0
      },
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
          title: "声明ID",
          el_data: "claimId"
        },
        {
          title: "声明内容hash",
          el_data: "claimContent"
        },
        {
          title: "所属账户",
          el_data: "issuer"
        },
        {
          title: "提到者",
          el_data: "holder"
        },
        {
          title: "声明时间",
          el_data: "timestamp"
        }
      ]
    };
  },
  methods: {
    getRowId(value) {
      this.rowId = value;
      console.log(this.rowId);
    },
    detailShow: function(id) {
      this.$router.push({
        name: "stateCert",
        params: {
          id: id
        }
      });
    }
  }
};
</script>

<style>
</style>

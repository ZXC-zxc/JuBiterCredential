<!-- 使用有权 -->
<template>
  <Table :tableData="tableData" :tabListData="tabListData" v-if="flag"></Table>
</template>

<script>
import Table from "@/components/common/table.vue";
export default {
  data: function() {
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
          width: "15%",
          title: "交易hash", // 表格列 标题
          el_data: "txHash" //表格列 数据字段名称
        },
        {
          width: "5%",
          title: "高度",
          el_data: "height"
        },
        {
          width: "15%",
          title: "存证hash",
          el_data: "claimContent"
        },
        {
          width: "10%",
          title: "所属账户",
          el_data: "holder"
        },
        {
          width: "10%",
          title: "存证时间",
          el_data: "timestamp"
        }
      ]
    };
  },
  components: {
    Table
  },
  beforeCreate() {
    var self = this;
    self.$store
      .dispatch("getTableData", {
        pageNumber: 1,
        pageSize: 10,
        tableType: 1
      })
      .then(() => {
        self.tableData.list = self.$store.state.list;
        self.tableData.total = self.$store.state.total;
        self.flag = true;
      });
  },
  mounted() {},
  methods: {
    getRowId(value) {
      this.rowId = value;
      console.log(this.rowId);
    },
    // '/Jubiter/cz/copyright/certificate/:id'
    detailShow: function(id) {
      // this.$router.push({
      //   name: "certificate",
      //   params: {
      //     id: id
      //   }
      // });
    }
  },
  mounted() {
    // getRowId:function(value) {
    //     this.rowId = value;
    // 	console.log(this.rowId);
    // }
  },
  watch: {
    // rowId:function(val){
    // 	console.log(val)
    // }
  }
};
</script>

<style>
</style>

<template>
  <div id="table">
    <div class="tableDiv">
      <el-table :data="list" @row-click="getDetail">
        <div v-for="(item,index) in tabListData">
          <el-table-column
            :min-width="item.width"
            align="center"
            header-align="center"
            :prop="item.el_data"
            :label="item.title"
          ></el-table-column>
        </div>
      </el-table>
    </div>

    <page :total="total"></page>
  </div>
</template>

<script>
import page from "@/components/common/page.vue";
export default {
  //tableData:接口返回的数据       tabListData：表格的列名（父组件定义）
  props: ["tableData", "tabListData"],
  data() {
    return {
      total: this.tableData.total,
      list: this.tableData.list
    };
  },
  components: {
    page
  },
  methods: {
    //存证证书详情页
    getDetail(row) {
      this.$parent.detailShow(row);
      // this.rowId = row.id
      // this.$emit("rowId",row.id);
    }

    // childMethod(id) {
    // 	this.$parent.detailShow(id);
    // }
  },
  watch: {
    // 	rowId:function(val){
    // 		console.log(val)
    // 	}
    tableData: {
      handler: function(newVal, oldVal) {
        if (newVal) {
          this.total = newVal.total;
          this.list = newVal.list;
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss">
#table {
  flex-grow: 1;
  padding: 2%;
  box-sizing: border-box;
  width: 98%;

  .el-table {
    // height: calc(100% - 80px)!important;
    max-height: 100%;
  }
  .el-pagination {
    margin-top: 20px;
    float: right;
  }
  .tableDiv {
    max-height: calc(100% - 40px) !important;
    overflow-y: auto;
    border-radius: 15px;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    padding: 20px 15px 15px 15px;
    background-color: white;
  }
  .el-table__body-wrapper {
    overflow-y: auto;
    position: relative;
    max-height: calc(100% - 40px) !important;
  }
}
</style>
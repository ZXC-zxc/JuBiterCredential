<template>
  <div>
    <el-table :data="list" style="width: 100%" height="100%" @row-click="getDetail">
      <div v-for="(item,index) in tabListData">
        <el-table-column :prop="item.el_data" :label="item.title"></el-table-column>
      </div>
    </el-table>
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
      alert(row.id);
      this.$parent.detailShow(row.id);
      // this.rowId = row.id
      // this.$emit("rowId",row.id);
    }

    // childMethod(id) {
    // 	this.$parent.detailShow(id);
    // }
  }
  // watch:{
  // 	rowId:function(val){
  // 		console.log(val)
  // 	}
  // }
};
</script>
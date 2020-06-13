<template>
  <div>
    <el-table :data="list" style="width: 100%" height="100%" @row-click="getDetail">
      <div v-for="(item,index) in tabListData">
        <el-table-column :prop="item.el_data" :label="item.title"></el-table-column>
      </div>

      <!-- <el-table-column fixed prop="date" label="日期" ></el-table-column> -->
      <!-- <el-table-column prop="name" label="姓名" ></el-table-column>
				<el-table-column prop="province" label="省份" ></el-table-column>
				<el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址" ></el-table-column>-->
      <!-- <el-table-column prop="zip" label="邮编" width="120"></el-table-column> -->
    </el-table>
    <page :total="total"></page>
  </div>
</template>

<script>
import page from "@/components/common/page.vue";
export default {
  //tableData:接口返回的数据       tabListData：表格的列名（父组件定义）
  props: ["tableType", "tabListData"],
  //   props: ["tableData", "tableType", "tabListData"],
  data() {
    return {
      total: 0,
      list: []
    };
  },
  components: {
    page
  },
  beforeCreate() {
    var self = this;
    var type = this.$parent.tableType;
    self.$store
      .dispatch("getTableData", {
        pageNumber: 1,
        pageSize: 10,
        tableType: type
      })
      .then(() => {
        self.list = self.$store.state.list;
        self.total = self.$store.state.total;
        // console.error("-----table------ffff----beforeCreate------ENDD----");
      });
  },
  created() {
    // console.error("-----------table----created------start----");
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
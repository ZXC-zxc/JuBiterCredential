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
  // props: ["tableData", "tabListData"],
  data() {
    return {
      total: this.$store.state.total,
      list: this.$store.state.list
      // total: this.tableData.total,
      // list: this.tableData.list
    };
  },
  components: {
    page
  },
  created() {
    this.getTableData();
    var type = this.$parent.tableType;
    // console.log("--table---created ---start ");
    // this.$store.dispatch("getTableData", {
    //   pageNumber: 1,
    //   pageSize: 10,
    //   tableType: type
    // });
    // console.error(
    //   "-----------table----created------this.$store.state.total----" +
    //     this.$store.state.total
    // );
  },
  methods: {
    //存证证书详情页
    getDetail(row) {
      alert(row.id);
      this.$parent.detailShow(row.id);
      // this.rowId = row.id
      // this.$emit("rowId",row.id);
    },

    // childMethod(id) {
    // 	this.$parent.detailShow(id);
    // }
    getTableData() {
      var self = this;
      this.$axios
        .post(
          "jubiter-credential-web/admin/credential/list.action",
          {
            data: {
              pageSize: 10,
              pageNumber: 1,
              type: "OwnerShip"
            }
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json" //将表单数据传递转化为request payload类型
            },
            withCredentials: true
          }
        )
        .then(function(response) {
          var res = response.data;
          self.list = res.list;
          self.total = res.total;
          console.error(
            "----table-------childMethod----------" + JSON.stringify(self.list)
          );
        })
        .catch(function(error) {
          console.error(error.message);
          alert(error);
        });
    }
  }
  // watch:{
  // 	rowId:function(val){
  // 		console.log(val)
  // 	}
  // }
};
</script>
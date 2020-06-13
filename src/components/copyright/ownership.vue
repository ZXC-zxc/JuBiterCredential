<!-- 所有权 -->
<template>
  <div>
    <!--<Table :tableData="tableData" :tabListData="tabListData"></Table>-->
    <Table :tableData="tableData" :tabListData="tabListData" v-if="flag"></Table>
  </div>
</template>

<script>
import Table from "@/components/common/table.vue";
var requireTableData = require("@/assets/data/table2.json");
export default {
  data: function() {
    return {
		flag:false,
      tableType: 0,
      //接收子组件传来的数据
      // rowId:"",
      // 传递到子组件的数据
	  tableData:{
		  list:"",
		  total:""
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
  created() {
    // this.tableData = requireTableData;
    this.getFTableData();
  },
  mounted() {},
  methods: {
    getRowId(value) {
      this.rowId = value;
      console.log(this.rowId);
    },
    // '/Jubiter/cz/copyright/certificate/:id'
    detailShow: function(id) {
      this.$router.push({
        name: "certificate",
        params: {
          id: id
        }
      });
    },

    getFTableData() {
		var self = this;
		this.$axios
			.post("jubiter-credential-web/admin/credential/list.action",
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
				
				self.tableData.list = res.list;
				self.tableData.total = res.total;
				console.log(self.tableData.total)
				self.flag=true
				console.error(
					"----table-------childMethod----------" + JSON.stringify(self.tableData.list)
				);
			})
			.catch(function(error) {
				console.error(error.message);
				alert(error);
			});
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

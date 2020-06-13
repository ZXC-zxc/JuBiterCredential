<template>
	<div id="table">
		<div class="tableDiv">
			<el-table :data="list" @row-click="getDetail">
				<div v-for="(item,index) in tabListData">
					<el-table-column :prop="item.el_data" :label="item.title"></el-table-column>
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
		// props: ["tableType", "tabListData"],
		props: ["tableData", "tabListData"],
		data() {
			return {
				// total: this.$store.state.total,
				// list: this.$store.state.list
				total: this.tableData.total,
				list: this.tableData.list
			};
		},
		components: {
			page
		},
		created() {
			// this.getTableData();
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
			// getTableData() {
			// var self = this;
			// this.$axios
			// 	.post("jubiter-credential-web/admin/credential/list.action",
			// 		{
			// 		data: {
			// 			pageSize: 10,
			// 			pageNumber: 1,
			// 			type: "OwnerShip"
			// 		}
			// 	},
			// 	{
			// 		headers: {
			// 			"Access-Control-Allow-Origin": "*", //解决cors头问题
			// 			"Access-Control-Allow-Credentials": "true", //解决session问题
			// 			"Content-Type": "application/json" //将表单数据传递转化为request payload类型
			// 		},
			// 		withCredentials: true
			// 	}
			// )
			// .then(function(response) {
			// 	var res = response.data;
			// 	self.list = res.list;
			// 	self.total = res.total;
			// 	console.error(
			// 		"----table-------childMethod----------" + JSON.stringify(self.list)
			// 	);
			// })
			// .catch(function(error) {
			// 	console.error(error.message);
			// 	alert(error);
			// });
		// }
	}
  // watch:{
  // 	rowId:function(val){
  // 		console.log(val)
  // 	}
  // }
};
</script>

<style lang="scss">
	#table{
		flex-grow: 1;
		padding: 2%;
		box-sizing: border-box;
		width: 98%;

		.el-table{
			 // height: calc(100% - 80px)!important;
			 max-height: 100%;
		}
		.el-pagination {
		    margin-top: 20px;
		    float: right;
		}
		.tableDiv{
			max-height: calc(100% - 40px) !important;
			overflow-y: auto;
			border-radius: 15px;
			box-shadow: 0 0 11px rgba(0,0,0,.2);
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
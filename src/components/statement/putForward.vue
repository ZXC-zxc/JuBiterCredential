<!-- 鎴戞彁鍑虹殑 -->
<template>
	<Table :tableData="tableData"  :tabListData="tabListData"></Table>
</template>

<script>
	import Table from "@/components/common/table.vue"
	var requireTableData = require('@/assets/data/table2.json')
	export default {
		
		components:{
			Table
		},
		created() {
			this.tableData=requireTableData
			// this.totalNum=requireTableData.total
		},
		data() {
		  return {
				tableData:"",
				tabListData:[
					{
						title:"交易hash",   // 表格列 标题
						el_data:"address"  //表格列 数据字段名称
					},{
						title:"高度",
						el_data:"name"
					},{
						title:"存证hsah",
						el_data:"address"
					},{
						title:"所属账户",
						el_data:"address"
					},{
						title:"存证时间",
						el_data:"date"
					}
					
				]
		  }
		},
		methods: {
			getRowId(value) {
			    this.rowId = value;
				console.log(this.rowId);
			},
			//表格行跳转详情页
			detailShow:function(id){
				this.$router.push({
					name:'stateCert',
					params:{ 
						id:id,
					}
				})
			}
		},
	}
</script>

<style>
</style>

<!-- 我提出的 -->
<template>
	<div>
		<Table :tableData="tableData"></Table>
	</div>
</template>

<script>
	import Table from "@/components/common/table.vue"
	var requireTableData = require('@/assets/data/tableData.json')
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
				// total:""
		  }
		}
	}
</script>

<style>
</style>

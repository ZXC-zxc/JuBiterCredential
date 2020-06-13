<!-- 使用权 -->
<template>
	<Table :tableData="tableData"></Table>
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
		},
		data() {
		  return {
				tableData:""
		  }
		}
	}
</script>

<style>
</style>
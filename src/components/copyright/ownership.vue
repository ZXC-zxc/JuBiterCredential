<!-- 所有权 -->
<template>
	<!-- <h1>111111{{claims.txs}}</h1> -->
	<div>
		<Table :tableData="tableData"></Table>
	</div>
</template>

<script>
    import axios from "axios"
	import Table from "@/components/common/table.vue"
	var requireTableData = require('@/assets/data/table2.json')
	export default {
		data: function() {
			return {
				claims:[],
				count: 0,
				page_number: 1,
				page_total: 0,
				limit: 10,
				
				tableData:""  
			}
		},
		components:{
			Table
		},
		created() {
			this.tableData=requireTableData
		},
		async mounted() {
			await this.fetchClaims()
		},
		methods: {
			async fetchClaims() {
				var json = await axios.get("http://192.168.17.84:8080/gocosmos/claim/queryOwnerShipTransactions?account=ftsafe1j7kzx9c86she9ne228jp0f8pc0jgsyzkqejftf")
				this.claims = json.data.txs
				this.count= json.data.count
				this.page_number = json.data.page_number
				this.page_total = json.data.page_total
			},
		},
		watch: {
			$route(to, from) {
				fetchClaims()
		   }
		},
	}
</script>

<style>
</style>

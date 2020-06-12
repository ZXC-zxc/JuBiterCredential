<template>
	<div>
		<el-table :data="list" style="width: 100%" height="100%">
			<div  v-for="(item,index) in tabListData">
				<el-table-column :prop="item.el_data" :label="item.title" ></el-table-column>
			</div>
			
				<!-- <el-table-column fixed prop="date" label="日期" ></el-table-column> -->
				<!-- <el-table-column prop="name" label="姓名" ></el-table-column>
				<el-table-column prop="province" label="省份" ></el-table-column>
				<el-table-column prop="city" label="市区"></el-table-column>
				<el-table-column prop="address" label="地址" ></el-table-column> -->
				<!-- <el-table-column prop="zip" label="邮编" width="120"></el-table-column> -->	
		</el-table>
		<page :total="total"></page>
	</div>
	
</template>

<script>
	import page from "@/components/common/page.vue"
  export default {
	  //tableData:接口返回的数据       tabListData：表格的列名（父组件定义）
	  props:[
		  "tableData","tabListData"
	  ],
	  data(){
		  return{
			  total:this.tableData.total,
			  list:this.tableData.list
		  }
	  },
	  components:{
		  page
	  },
    
  }
</script>
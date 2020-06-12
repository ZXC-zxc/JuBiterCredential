<!-- 证书页  出示  exhibit-->
<template>
	<inputAndBtn :tempData="tempData"></inputAndBtn>
</template>

<script>
	import inputAndBtn from "@/components/common/inputAndBtn.vue"
	export default {
		data: function() {
			return {
				// id:this.$route.params.id,
				tempData:{
					path:"",   //跳转路径 
					title:"",
					btn:"复制",
					value:"http://192.168.17.77:8080/#/Jubiter/cz/copyright/certificate/004/exhibit",
					readonly:"readonly"     //只读：readonly   可输入：" "
				}
			}
		},
		created() {

		},
		components:{
			inputAndBtn
		},
		
		watch: {
		},
	}
</script>

<style lang="scss" scoped="scoped">
</style>
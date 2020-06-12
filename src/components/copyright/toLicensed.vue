<!-- 授权给 -->
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
					title:"授权给",
					btn:"授权",
					
					// readonly:""     //只读：readonly   可输入：" "
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


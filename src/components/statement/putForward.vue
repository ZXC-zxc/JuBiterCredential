<!-- 我提出的 -->
<template>
	<div>
		<router-link to="/Jubiter/cz/statement/add"><img src="@/assets/images/icon/add.png"/></router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				
			}
		},
		mounted() {
			
		},
		components:{
			
		},
		methods:{
			addPath:function(){
				alert(1)
				this.$router.push({
					// path: "/Jubiter/cz/statement/add",
				});
			}
		}
	
	}
</script>

<style>
</style>

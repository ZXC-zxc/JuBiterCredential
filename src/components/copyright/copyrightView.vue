<template>
	<div class="copyrightView">
		<tab :first="first" :second="second"></tab>
		<!-- <div class="tabBar">
			<router-link to="/Jubiter/cz/copyright/"  id="owner" :class="[state=='owner'?'active':'tab']">我的所有权</router-link>
			<router-link to="/Jubiter/cz/copyright/use" id="use" :class="[state=='use'?'active':'tab']">我的使用权</router-link>
		</div> -->
		<!-- <router-link to="/JuBiter/cz/index/owner"></router-link> -->
		<section>
			<router-view name="copyright"></router-view>
		</section>	
	</div>
</template>

<script>
	import tab from "@/components/common/tab.vue"
	export default {
		data: function() {
			return {
				// firstPath:'/Jubiter/cz/copyright/',
				// secondPath:'/Jubiter/cz/copyright/use',
				first:{
					path:'/Jubiter/cz/copyright/',
					name:'我的所有权'
				},
				second:{
					path:'/Jubiter/cz/copyright/use',
					name:'我的使用权'
				}
			}
		},
		components:{
			tab
		},
		
		// watch: {
			
		// 	$route(to, from) {
		// 		if (to.path == this.firstPath ) {
		// 			this.state = "first"
		// 			alert(this.state)
		// 		}
		// 		if (to.path == this.senondPath) {
		// 			this.state = "second"
		// 			alert(this.state)
		// 		}
		// 	}
		// },
	}
</script>

<style  lang="scss" scoped="scoped">
	a{
		text-decoration: none;
		color: #181818;
	}
	.copyrightView{
		width: 100%;
		height: 100%;
		padding: 60px 44px;
		box-sizing: border-box;
	}
</style>

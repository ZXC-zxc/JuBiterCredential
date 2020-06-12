<template>
	<div id="index">
		<main>
			<subNav></subNav>
			<section>
				<router-view></router-view>	
			</section>
			
		</main>
		
		
	</div>
</template>

<script>
	import subNav from "@/components/common/subNav.vue"

	export default {
		data: function() {
			return {
				
			}
		},
		components:{
			subNav
		},
		created() {
			this.$router.push({
				path: "/Jubiter",
				// localStorage.setItem("homeShow",true);
			});
			
		},
		mounted() {
		},
		methods: {
			
		},
		watch: {
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import '@/assets/scss/common.scss';
	// @import '@/assets/scss/style.scss';
	#index{
		box-sizing: border-box;
		background: #E9EEF7;
		display: flex;
		width: 100%;
		position: absolute;
		height: 100%;
		padding: 44px;
		main{
			background: #FAFBFE;
			border-radius: 20px;
			overflow: hidden;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: flex-start;
			section{
				width:calc(100% - 160px);
				// position: relative;
				// padding: 30px;
			}
		}
	}
</style>

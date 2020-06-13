<template>
	<div class="process">
		<left></left>
		<right></right>
		<!-- <section>
			<router-view name="statement"></router-view>
		</section>	 -->
	</div>
</template>

<script>
	import left from "@/components/processed/left.vue"
	import right from "@/components/processed/right.vue"
	
	export default {
		data: function() {
			return {
				
			}
		},
		components:{
			left,right
		},
	}
</script>

<style  lang="scss" scoped="scoped">
	a{
		text-decoration: none;
		color: #181818;
	}
	.process{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		section{
			    
		}
		ul{
			margin: 0;
		}
		section:nth-child(2){
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}
</style>



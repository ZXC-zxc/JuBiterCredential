<template>
	<div class="statementView">
		<tab :first="first" :second="second"></tab>
		<section>
			<router-view name="statement"></router-view>
		</section>	
	</div>
</template>

<script>
	import tab from "@/components/common/tab.vue"
	export default {
		data: function() {
			return {
				first:{
					path:'/Jubiter/cz/statement/',
					name:'我提出的'
				},
				second:{
					path:'/Jubiter/cz/statement/mentioned',
					name:'提到我的'
				}
			}
		},
		components:{
			tab
		},
	}
</script>

<style  lang="scss" scoped="scoped">
	a{
		text-decoration: none;
		color: #181818;
	}
	.statementView{
		width: 100%;
		height: 100%;
		padding: 60px 44px;
		box-sizing: border-box;
		section{
			height: 94%;
			overflow: scroll;
			margin-top: 30px;
		}
	}
</style>



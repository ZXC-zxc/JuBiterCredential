<template>
	<div class="statementView">
		<div class="icon" v-show="iconShow">
			<router-link to="/Jubiter/cz/statement/add"><img src="@/assets/images/icon/add.png"/></router-link>
		</div>
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
				iconShow:true,
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
		watch: {
			$route(to,from){
				if(to.path == this.first.path){
					this.iconShow = true
				}
				else{
					this.iconShow = false
				}
			}
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
		box-sizing: border-box;
		position: relative;
		padding: 60px 20px 40px 20px;
		section{
			height: 98%;
			overflow-y: auto;
			margin-top: 20px;
			display: flex;
		}
		.icon{
			position: absolute;
			right: 40px;
			
			img{
				width: 28px;
				margin-right: 20px;
				box-shadow: 0px 0px 21px rgba(0,0,0,.08);
			}
		}
	}
</style>



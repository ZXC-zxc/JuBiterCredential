<template>
	<div class="copyrightView">
		<div class="icon" >
			<router-link to="/Jubiter/cz/copyright/owner/add"><img src="../../assets/images/icon/add.png" v-show="icon1Show"/></router-link>
			<img src="../../assets/images/icon/message.png" v-show="icon2Show" class="messageIcon"/>
		</div>
		<tab :first="first" :second="second"></tab>
		
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
				icon1Show:true,
				icon2Show:false,
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
		
		watch: {
			$route(to,from){
				if(to.path == this.first.path){
					this.icon1Show = true
					this.icon2Show = false
				}
				else{
					this.icon1Show = false
					this.icon2Show = true
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
	.copyrightView{
		width: 100%;
		height: 100%;
		padding: 60px 44px;
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
		.messageIcon:before{
			content: " ";
			border: 3px solid red; /*设置红色*/
			border-radius: 3px; /*设置圆角*/
			position: absolute;
			// z-index: 1000;
			margin-top: 9px;
			left: 6%;
		}
	}
</style>

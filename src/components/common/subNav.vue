<!-- 导航栏和搜索框 -->
<template>
	<nav class="sub-nav">
		<div  class="logo">
			<img src="@/assets/images/logo.png" />
		</div>
		<ul>
			<li class="">
				<router-link to="/Jubiter/cz/copyright">
					<img :src='icon1Img'  />
					<p :class="[btnId=='icon1'?'select':'']">我的著作权</p>
					<span :class="[btnId=='icon1'?'navActive':'']"></span>
				</router-link>
			</li>
			<li>
				<router-link to="/Jubiter/cz/statement">
					<img :src="icon2Img"  />
					<p :class="[btnId=='icon2'?'select':'']">我的声明</p>
					<span :class="[btnId=='icon2'?'navActive':'']"></span>
				</router-link>
			</li>
			<li>
				<router-link to="/Jubiter/cz/processed">
					<img :src="icon3Img"  />
					<p :class="[btnId=='icon3'?'select':'']">我的待处理</p>
					<span :class="[btnId=='icon3'?'navActive':'']"></span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	import icon1 from "@/assets/images/nav/copyright.png";
	import icon1Sel from "@/assets/images/nav/copyrightSel.png";
	import icon3 from "@/assets/images/nav/dealWith.png";
	import icon3Sel from "@/assets/images/nav/dealWithSel.png";
	import icon2 from "@/assets/images/nav/declaration.png";
	import icon2Sel from "@/assets/images/nav/declarationSel.png";
	
	
	export default {
		data: function() {
			return {
				icon1Img: icon1,
				icon2Img: icon2,
				icon3Img: icon3,
				btnId:"index",
				showMain:true
			}
		},
		props: [
			
		],
		mounted() {
			// $(".router-link-active").append(`<span class="navActive" v-show=""></span>`)
			// alert(1)
		},
		methods:{
			
		},
		watch: {
			$route(to, from) {
				if (to.path == '/' || to.path == '/Jubiter/cz/copyright') {
					this.icon1Img = icon1Sel
					this.icon2Img = icon2
					this.icon3Img = icon3
					this.btnId = "icon1"
				}
				if (to.path == '/Jubiter/cz/statement') {
					this.icon1Img = icon1
					this.icon2Img = icon2Sel
					this.icon3Img = icon3
					this.btnId = "icon2"
				}
				if (to.path == '/Jubiter/cz/processed' ) {
					this.icon1Img = icon1
					this.icon2Img = icon2
					this.icon3Img = icon3Sel
					this.btnId = "icon3"
				}
			}
		}
	
	}
</script>

<style lang="scss" scoped="scoped">
	.sub-nav{
		background: #181818;
		width: 160px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		.logo{
			padding: 55px 0;
			img{
				display: block;
				margin: 0 auto;
				width: 110px;
				
			}
		}
		ul{
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0;
				
			.navActive{
				position: absolute;
				width: 8px;
				height: 62%;
				background: white;
				top: 36%;
				transform: translateY(-50%);
				border-radius: 0 10px 10px 0;
			}
			li{
				margin: 30px 0;
				list-style: none;
				position: relative;
			}
			img{
				display: block;
				margin: 0 auto;
				transform: scale(0.95);
			}
			p{
				text-align: center;
				color: white;
				margin-top: 15px;
				font-size: 12px;
			}
		}
	}
</style>

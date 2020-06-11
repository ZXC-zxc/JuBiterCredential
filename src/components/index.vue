<!-- <template>
	<div class="all">
		<main>
			<nav class="sub-nav">
				<div  class="logo">
					<img src="@/assets/images/logo.png" />
				</div>
				<ul>
					<li>
						<router-link to="/JuBiter/cz/copyright">
							<img :src='icon1Img'  />
							<p :class="[btnId=='icon1'?'select':'']">我的著作权</p>
						</router-link>
					</li>
					<li>
						<router-link to="/articles">
							<img :src="icon2Img"  />
							<p :class="[btnId=='icon2'?'select':'']">我的声明</p>
						</router-link>
					</li>
					<li>
						<router-link to="/">
							<img :src="icon3Img"  />
							<p :class="[btnId=='icon3'?'select':'']">我的待处理</p>
						</router-link>
					</li>
				</ul>
			</nav>
			<section>
				<router-view name="content"></router-view>
			</section>
			
		</main>
	</div>
</template> -->

<!-- <script>
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
				btnId:"icon1",
				showMain:true
			}
		},
		props: [
			
		],
		mounted() {
			
		},
		methods:{
			
		},
		watch: {
			$route(to, from) {
				if (to.path == '/') {
					this.icon1Img = icon1Sel
					this.icon2Img = icon2
					this.icon3Img = icon3
					this.btnId = "icon1"
				}
				if (to.path == '/bb') {
					this.icon1Img = icon1
					this.icon2Img = icon2Sel
					this.icon3Img = icon3
					this.btnId = "icon2"
				}
				if (to.path == '/aa' ) {
					this.icon1Img = icon1
					this.icon2Img = icon2
					this.icon3Img = icon3Sel
					this.btnId = "icon3"
				}
			}
		}
			
	}
</script>

<style lang="scss">
	.all{
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
			justify-content: center;
			section{
				width: calc(100% - 160px);
			}
		}
		
		.sub-nav{
			background: #181818;
			width: 160px;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			.logo{
				padding: 62px 0;
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
				li{
					margin: 30px 0;
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
	}
</style> -->


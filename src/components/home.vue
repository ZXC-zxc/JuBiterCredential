<!-- 首页--插入硬件 -->
<template>
	<div class="home">
		<div class="imgDiv" @click="linkIndex()">
			<img class="hardware" src="@/assets/images/home/hardware.png" />
			<div>
				<img src="../assets/images/home/cable.png"/>
			</div>
			
		</div>
		<h3>请插入JuBiter</h3>
	</div>
</template>

<script>

	export default {
		data: function() {
			return {
				link:"/",
				categoryList:""
			}
	
		},
		components:{
		
		},
		mounted() {
			let self = this;
			let interval = setInterval(function(){ 				
				self.$socketApi.jubiterOper.getSerialNumber()
				.then((sn)=>{
					if(sn == "")return;
					alert(sn);
					clearInterval(interval);
					self.$router.push({
					path: "/Jubiter/cz/copyright"
				});
				})				
				.catch((code, msg) =>{
					console.log('no key');
				}); }, 
				3000);

			
		},
		methods:{
			linkIndex:function(){
				//alert(1)
				this.$router.push({
					path: "/Jubiter/cz/copyright"
				});
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.home{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		align-items: center;
		background: url(../assets/images/home/bg.png);
		overflow: hidden;
		.imgDiv{
			width: 100%;
			margin-top: -5%;
			display: flex;
			justify-content: center;
			position: relative;
			div{
				position: absolute;
				/* left: 81.5%; */
				top: 59.7%;
				height: 68px;
				/* transform: translateX(-50%); */
				/* margin-left: 30%; */
				/* margin-left: calc(100% * 0.161); */
				margin-left: 418px;
				animation:myfirst 1.5s;
				img{
					height: 100%;
				}
			}
		}
		.hardware{
			width: 570px;
			// width: 40%;
			// max-width: 610px;
			// min-width: 500px;
		}
		h3{
			color: white;
			font-size: 28px;
			text-align: center;
		}
	}
	div
	{
		// width:100px;
		// height:100px;
		// background:red;
		// position:relative;
		// animation:myfirst 5s;
		// -webkit-animation:myfirst 5s; /* Safari and Chrome */
	}
	
	@keyframes myfirst
	{
		0%   {margin-left: 1049px;}
		// 25%  {margin-left: 1649px;}
		// 50%  {margin-left: 1249px;}
		// 75%  {margin-left: 849px;}
		100% {margin-left: 418px;}
	}
</style>

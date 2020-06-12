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
	
	// const categoryData = require('@/assets/data/category/001.json')  
	
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
		.imgDiv{
			width: 100%;
			margin-top: -5%;
			display: flex;
			justify-content: center;
			position: relative;
			div{
				position: absolute;
				position: absolute;
				/* left: 80.5%; */
				/* top: 58.6%; */
				height: 19.5%;
				/* transform: translateX(-50%); */
				/* margin-left: 30%; */
				margin-left: calc(100% * 0.161);
				img{
					height: 100%;
				}
			}
		}
		.hardware{
			width: 40%;
			max-width: 610px;
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
		0%   {background:red; left:0px; top:0px;}
		25%  {background:yellow; left:200px; top:0px;}
		50%  {background:blue; left:200px; top:200px;}
		75%  {background:green; left:0px; top:200px;}
		100% {background:red; left:0px; top:0px;}
	}
</style>

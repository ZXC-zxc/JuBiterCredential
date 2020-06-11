<template>
	<section>
		<div>
			<label>请求您授权</label>
			<span></span>
		</div>
		<div>
			<label>给</label>
			<span></span>
		</div>
	</section>
</template>

<script>
	export default {
		data: function() {
			return {
				
			}
		},
		mounted() {
			
		},
		components:{
			
		},
		methods:{
			
		}
	
	}
</script>

<style lang="scss" scoped="scoped">
	section{
		flex: 1;
		div{
			width: 70%;
			max-width: 470px;
			label{
				display: block;
				margin-bottom: 20px;
				font-size: 20px;
			}
			span{
				display: block;
				min-width: 200px;
				max-width: 600px;
				/* border: 1px solid; */
				height: 50px;
				background-color: white;
				box-shadow: 0px 0px 9px rgba(0,0,0,.2);
				border-radius: 10px;
			}
			
		}
		div:nth-child(1){
			margin-bottom: 30px;
		}
	}
</style>

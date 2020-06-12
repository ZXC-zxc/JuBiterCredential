<template>
	<div id="iptBtn">
		<div class="iptBtn-c">
			<h3>{{tempData.title}}</h3>
			<div class="btnDiv">
				<input type="text" :value="tempData.value"  :readonly="tempData.readonly"/>
				<button>{{tempData.btn}}</button>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				// id:this.$route.params.id,
			}
		},
		props:["tempData"],
		created() {
			
		},
		methods:{
			toPath:function(){
				// alert(this.id)
				this.$router.push({
					name:this.tempData.path,
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
	#iptBtn{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		
		.iptBtn-c{
			width: 70%;
			// background: red;
			max-width: 567px;
			min-width: 440px;
			margin-top: -180px;
			h3{
				font-size: 20px;
				margin-bottom: 50px;
			}
			input{
				border: 1px solid #E1E2E3;
				border-right: 0;
				outline: none;
				background: white;
				border-radius: 4px 0 0 4px;
				width: calc(100% - 148px);
				padding: 0 20px;
				font-size: 18px;
			}
		}
		
		.btnDiv{
			display: flex;
			justify-content: flex-start;
			button{
				 background: #181818;
				 border: 0;
				 color: white;
				 width: 148px;
				 font-size: 17px;
				 height: 47px;
				 border-radius: 4px;
			}
		}
	}
</style>


<template>
	<!-- <section> -->
		<div id="add">
			<div class="add-c">
				<!-- tab -->
				<div class="tab">
					<span>上传文件</span>/
					<span>填写Hash</span>
				</div>
				<div class="input">
					<div>
						<input type="file" style="display: none;"/>
						<p class="seleclFile">
							<img src="@/assets/images/icon/file.png" />
							Select File
						</p>
						<p>aaaaaaaaaaaaaaaaaa</p>
					</div>
					
				</div>
				<div class="btnDiv">
					<button>存证</button>
				</div>
			</div>
			
		</div>
	<!-- </section> -->
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
	#add{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.add-c{
			width: 50%;
			// background: red;
			max-width: 567px;
			min-width: 440px;
			
		}
		.tab{
			span{
				font-size: 18px;
			}
		}
		.input{
			margin: 45px 0 92px 0;
			div{
				display: flex;
				align-items: center;
				background: white;
				box-shadow: 0 0 13px rgba(0,0,0,.1);
				border-radius: 9px;
				padding: 15px 0px;
				p{
					margin: 0;
					display: flex;
					padding: 0 18px;
					font-size: 16px;
					align-items: center;
				}
				.seleclFile{
					img{
						margin-right: 6px;
						    width: 20px;
						    margin-top: -2px;
					}
					border-right: 1px solid #e5e5e5;
				}
			}
		}
		.btnDiv{
			display: flex;
			justify-content: flex-end;
			button{
				 background: #181818;
				 border: 0;
				 color: white;
				 width: 34%;
				 min-width: 125px;
				 max-width: 170px;
				 height:40px;
				 border-radius: 7px;
			}
		}
	}
</style>

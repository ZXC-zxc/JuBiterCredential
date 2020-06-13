<template>
	<div id="add">
		<div class="add-c">
			<div class="tab">
				<span>上传文件</span>/
				<span>填写Hash</span>
			</div>
			<el-upload class="input"
				action="https://jsonplaceholder.typicode.com/posts/"
				:on-preview="handlePreview"
				:on-remove="handleRemove"
				:before-remove="beforeRemove"
				multiple
				:limit="1"  
				:on-exceed="handleExceed"
				:file-list="fileList">
				<el-button  type="primary">
					<img src="@/assets/images/icon/file.png" />
					<span>Select File</span>
				</el-button>
				<!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
			</el-upload>
			<div class="btnDiv">
				<button>存证</button>
			</div>
		</div>
		
	</div>
	
</template>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
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
			    display: flex;
			    box-shadow: 0 0 9px rgba(0,0,0,.18);
			    border-radius: 10px;
				background-color: white;
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
				.el-button--primary {
					background-color: white;
					border: 0;
					color: #999;
					font-size: 17px;
					border-radius: 8px 0 0 8px;
					border-right: 1px solid #e5e5e5;
					height: 50px;
					line-height: 50px;
					padding: 0 23px;
					img{
						margin-right: 6px;
						width: 20px;
						float: left;
						/* transform-style: flat; */
						float: left;
						margin-top: 12px;

					}
					border-right: 1px solid #e5e5e5;
				}
				
			}
			ul {
			   flex-grow: 1!important;
			   background-color: white!important;
			   font-size: 16px;
			}
			.el-upload-list {
			    flex-grow: 1;
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
				 border-radius: 8px 8px;
			}
		}
	}
</style>
<template>
	<div class="cert">
		<div id="certificate">
		  <img class="bg" src="@/assets/images/CZbg.png" />
		  <div class="content">
		    <div>
		      <p>
		        <span>所有人</span>
		        <span>Avfdvcsv88888888DDDDDDDDDDDDD88888888888DDDDDDDdDDD</span>
		      </p>
		      <p>
		        <span>可使用者</span>
		        <span>AvfdvcsD88888888888DDDDDDDdDDD</span>
		      </p>
		      <p>
		        <span>著作权指纹(HASH)</span>
		        <span>AvfdDDDDDDDDDDD88888888888DDDDDDDdDDD</span>
		      </p>
		      <p>
		        <span>创建时间</span>
		        <span>2020-02-25</span>
		      </p>
		    </div>
		    <div>
		      <p>
		        <span>颁发日期:</span>
		        <span>2020年2月25日</span>
		      </p>
		      <p>
		        <span>飞天诚信</span>
		        <span>2020年2月25日</span>
		      </p>
		    </div>
		  </div>
			
		</div>
		<div class="btnDiv">
			<button class="browser-btn">区块链浏览器</button>
		</div>
	</div>
  
</template>

<script>
	export default {
		data: function() {
			return {};
		},
		created() {
			alert(this.GetQueryString("hash"))
		},
		mounted() {
			// toImage()
		},
		methods:{
			GetQueryString:function(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);
			     if(r!=null)return  unescape(r[2]); return null;
			}
		},
		props: [],
		watch: {}
	};
</script>

<style  lang="scss" scoped="scoped">
	.cert {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		#certificate {
			display: -ms-flexbox;
			display: flex;
			justify-content: center;
			position: relative;
			.bg {
				width: 900px;
				height: 600px;
			}
			.content {
				position: absolute;
				z-index: 1;
				max-width: 800px;
				width: 70%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				top: 170px;
				height: 337px;
				div:first-child {
					p{
						display: flex;
						justify-content: flex-start;
						span:first-child {
							font-size: 15px;
							color: #666666;
							font-weight: 600;
							width: 157px;
						}
						span:last-child {
							width: calc(100% - 85px);
							word-break: break-all;
						}
					}
				}
				div:last-child {
					display: flex;
					justify-content: space-between;
					margin-top: 30px;
				}
			}
		}
		.btnDiv{
			width: 900px;
			display: flex;
			justify-content: flex-end;
			margin-top: 43px;
			button{
				width: 165px;
				height: 44px;
				color: white;
				background: #1F61DC;
				border: 0;
				outline: none;
				border-radius: 6px;
				font-size: 16px;
			}
		}
	}
</style>
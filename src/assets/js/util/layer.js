let layer = require('../../../../public/layer/mobile/layer.js');
const layerApi = {
	alert:function(msg){
		layer.open({
			 content: msg,
			 btn: 'OK',
			 shadeClose: false,
		})
	},
	//提示关闭刷新
	alertReload:function(msg){
		 layer.open({
			  content: msg,
			  btn: 'OK',
			  shadeClose: false,
			  yes: function(index){window.location.reload()}
		 });
	},
	/**
	 * 询问框
	 * @param {Object} msg 提示语
	 * @param {Object} yesCallback 确认回调函数
	 * @param {Object} noCallback  取消回调函数
	 * this.$layer.confirm("是吗？",function(){alert("确认回调函数")},function(){alert("取消回调函数")})
	 */
	confirm:function(msg,yesCallback,noCallback){
		layer.open({
			content: msg,
			btn: ['确认', '取消'],
			yes: function(index){
				//确定
				if (typeof yesCallback === "function"){
					yesCallback();
				}
				layer.close(index);
			},
			no : function(index){
				if (typeof noCallback === "function"){
					noCallback();
				}
				layer.close(index);
			}

		});
	},
	//loading带文字
	loading:function(){
	 var index= layer.open({
		type: 2
		,content: '加载中'
	  });
	  return index
	},
	close:function(index){
		layer.close(index)
	}

}
module.exports = layerApi
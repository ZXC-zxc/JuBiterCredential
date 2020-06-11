const ERR_CODE_LIST = { //常见错误码列表
  [400]: "请求错误",
  [401]: "登录失效或在其他地方已登录",
  [403]: "拒绝访问",
  [404]: "请求地址出错",
  [408]: "请求超时",
  [500]: "服务器内部错误",
  [501]: "服务未实现",
  [502]: "网关错误",
  [503]: "服务不可用",
  [504]: "网关超时",
  [505]: "HTTP版本不受支持"
}
const httpErrUtil = {
	getErrMsg:function(error) {//通过error处理错误码
	  if(!error.response) {//无网络时单独处理
	    return "网络不可用，请刷新重试"
	  }
	  const errCode = error.response.status //错误码
	  const errMsg = ERR_CODE_LIST[errCode] //错误消息
	
	  return errMsg;
	}
}

module.exports = httpErrUtil
//静态资源跳转路径
let url = window.location.href;

if (url.indexOf(".html") > -1) {
	
	url = url.substring(0, url.lastIndexOf('/') + 1);
}

const config = {

	htmlUrl: url,
	//微信数据
	getWxConfig: "/wx/getWxConfig"
}

module.exports = config

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import httpErrUtil from '@/assets/js/util/httpErrUtil.js'
import layer from '@/assets/js/util/layer.js'
import qs from 'qs'
Vue.use(VueAxios, axios)
// 请求超时
axios.defaults.timeout = 500000

let baseUrl = "/"
if (process.env.NODE_ENV == "production") {
	baseUrl = process.env.VUE_APP_URL
}

//设置默认请求url
axios.defaults.baseURL = baseUrl

axios.defaults.retry = 0; //可请求次数
axios.defaults.retryDelay = 1000; //再次请时间
console.log(axios.defaults.baseURL)

// 添加请求拦截器
axios.interceptors.request.use((config) => {
	const actNo = process.env.VUE_APP_ACT_NO
	let accessToken = localStorage.getItem(actNo + '-actToken');
	accessToken = "scan"
	const userAgent = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
	const time = new Date().getTime();
	//文件上传
	if (config.headers['Content-Type'] == 'multipart/form-data') {
		config.data.set('accessToken', accessToken);
		config.data.set('state', accessToken);
		config.data.set('userAgent', userAgent);
		config.data.set('time', time);
		return config;
	}
	//判断请求的类型：如果是post请求就把默认参数拼到data里面；如果是get请求就拼到params里面
	if (config.method === 'post') {
		if (config.headers['Content-Type'] == 'application/x-www-form-urlencoded') {
			config.data = qs.stringify({
				accessToken: accessToken,
				state: accessToken,
				userAgent: userAgent,
				time: time,
				...config.data.data
				//config.data.data
			})
		} else if (config.headers['Content-Type'] == 'application/json') {
			config.data = {
				accessToken: accessToken,
				state: accessToken,
				userAgent: userAgent,
				time: time,
				...config.data.data
				//config.data.data
			}
		} else {
			config.data = qs.stringify({
				accessToken: accessToken,
				state: accessToken,
				userAgent: userAgent,
				time: time,
				...config.data.data
				//config.data.data
			})
		}

	} else if (config.method === 'get') {
		config.params = {
			accessToken: accessToken,
			state: accessToken,
			userAgent: userAgent,
			time: time,
			...config.data.params
		}
	}
	return config;
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	if (response.status == 200) {
		return response;
	}
}, (error) => {
	var config = error.config;
	if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
		config.__retryCount = config.__retryCount || 0;
		//是否超过总的请求次数
		if (config.__retryCount >= axios.defaults.retry) {
			// 返回错误信息        
			layer.alert("请求超时")
			return Promise.reject(error);
		}
		config.__retryCount += 1;
		//再次发送请求
		var newHttp = new Promise(function (resolve) {
			setTimeout(function () {
				resolve();
			}, axios.defaults.retryDelay || 1);
		})
		return newHttp.then(function () {
			return axios(config)
		})
	}
	if (error && error.response) {
		layer.alert(httpErrUtil.getErrMsg(error.response.status))
	}
	return Promise.reject(error)
})

export default axios
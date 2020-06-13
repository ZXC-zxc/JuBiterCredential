import axios from 'axios';

// 登录请求方法
const loginreq = (url, params) => {
    return axios.post(
        url,
        { data: params },
        {
            headers: {
                "Access-Control-Allow-Origin": "*", //解决cors头问题
                "Access-Control-Allow-Credentials": "true", //解决session问题
                "Content-Type": "application/x-www-form-urlencoded" //将表单数据传递转化为request payload类型
            },
            withCredentials: true
        }
    ).then(res => res.data);
};
// 通用公用方法
const reqtablePost = (url, params) => {
    return axios.post(
        url,
        { data: params },
        {
            headers: {
                "Access-Control-Allow-Origin": "*", //解决cors头问题
                "Access-Control-Allow-Credentials": "true", //解决session问题
                "Content-Type": "application/json" //将表单数据传递转化为request payload类型
            },
            withCredentials: true
        }
    ).then(res => res.data);
};
// 通用公用方法
const reqPost = (method, url, params) => {
    return axios.post(
        url,
        { data: params },
        {
            headers: {
                "Access-Control-Allow-Origin": "*", //解决cors头问题
                "Access-Control-Allow-Credentials": "true", //解决session问题
                "Content-Type": "application/x-www-form-urlencoded" //将表单数据传递转化为request payload类型
            },
            withCredentials: true
        }
    ).then(res => res.data);
};

export {
    loginreq,
    reqtablePost,
    reqPost,
}
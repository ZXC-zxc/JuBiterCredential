import { loginreq } from './axiosFun';
// 登录接口 
var deviceLoginUrl = "jubiter-credential-web/admin/shiro/device/login.action";
export const deviceLogin = (params) => { return loginreq(deviceLoginUrl, params) };
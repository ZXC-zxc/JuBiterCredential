import { reqtablePost } from './axiosFun';
//获取请求列表
var applyListUrl = "jubiter-credential-web/admin/apply/list.action";
export const applyList = (params) => { return reqtablePost(applyListUrl, params) };
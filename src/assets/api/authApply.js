import { reqPost,reqtablePost } from './axiosFun';
//获取请求列表
var applyListUrl = "jubiter-credential-web/admin/apply/list.action";
export const applyList = (params) => { return reqtablePost(applyListUrl, params) };
//增加著作权授权声明
var addCredentialAuthClaimUrl = "jubiter-credential-web/admin/claim/addCredentialAuthClaim.action"
export const addCredentialAuthClaim = (params) => { return reqPost(addCredentialAuthClaimUrl, params) };
//修改请求状态
var changeApplyStatusUrl = "jubiter-credential-web//admin/apply/changeApplyStatus.action"
export const changeApplyStatus = (params) => { return reqPost(changeApplyStatusUrl, params) }; 

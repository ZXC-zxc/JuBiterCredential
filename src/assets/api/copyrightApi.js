import { reqPost, reqtablePost } from './axiosFun';
//增加声明
export const credentialAddUrl = "jubiter-credential-web/admin/credential/add.action"
//增加声明
var credentialHashAddUrl = "jubiter-credential-web/admin/credential/hash/add.action"
export const credentialHashAdd = (params) => { return reqPost(credentialHashAddUrl, params) };
//增加著作权授权请求
var addCredentialAuthApplyUrl = "jubiter-credential-web//admin/apply/addCredentialAuthApply.action"
export const addCredentialAuthApply = (params) => { return reqPost(addCredentialAuthApplyUrl, params) };
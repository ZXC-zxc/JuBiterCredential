import { reqPost } from './axiosFun';
//通过存证hash获取存证信息
var queryCredentialByHashUrl = "jubiter-credential-web/admin/credential/queryByHash.action";
export const queryCredentialByHash = (params) => { return reqPost(queryCredentialByHashUrl, params) };
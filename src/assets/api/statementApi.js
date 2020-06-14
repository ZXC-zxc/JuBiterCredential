import { reqPost, reqtablePost } from './axiosFun';
//获取自证声明列表
var statementListUrl = "jubiter-credential-web/admin/claim/list.action"
export const statementList = (params) => { return reqtablePost(statementListUrl, params) };
//增加自证声明
var statementAddUrl = "jubiter-credential-web/admin/claim/add.action"
export const statementAdd = (params) => { return reqPost(statementAddUrl, params) };
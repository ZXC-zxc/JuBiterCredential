import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/assets/axios'

Vue.use(Vuex)
//默认pageNumber
const DEFAULT_PAGE_NUMBER = 1;
//默认pageSize
const DEFAULT_PAGE_SIZE = 10;
//枚举存证声明
const  CREDENTIAL_LIST_URL = "jubiter-credential-web/admin/credential/list.action";
//枚举自证声明
const  CLAIM_LIST_URL = "jubiter-credential-web/admin/claim/list.action";
//存证类型:所有权
const CREDENTIAL_TYPE_OWNERSHIP = "OwnerShip";
//存证类型:使用权
const CREDENTIAL_TYPE_USUFRUCT  = "Usufruct";
//声明类型:我发起的
const CLAIM_TYPE_INITIATE = "initiate";
//声明类型:我收到的
const CLAIM_TYPE_RECEIVE = "receive";

const APPLY_LIST_URL = "jubiter-credential-web/admin/apply/list.action";

export default new Vuex.Store({
	// // (类似存储全局变量的数据)
  state: {
    list: [],
    total: 0,
    tableType:0
  },
   // (提供用来获取state数据的方法)
  getters:{
	  
  },
  // (提供存储设置state数据的方法)
  mutations: {
    setTableData(state,tableData){ 
      state.list = tableData.list
      state.total = tableData.total
      state.tableType = tableData.tableType
    }
  },
   // (提供跟后台接口打交道的方法，并调用mutations提供的方法)
  actions: {
    getTableData(context, options) {
      return new Promise((resolve,reject)=>{
        var type;
        var url;
        var pageNumber = options.pageNumber >1 ? options.pageNumber : DEFAULT_PAGE_NUMBER;
        var pageSize = options.pageSize>1 ? options.pageSize : DEFAULT_PAGE_SIZE;
        switch (options.tableType) {
          case 0://存证类型，支持Usufruct和OwnerShip。OwnerShip：所有权，Usufruct：使用权
            type = CREDENTIAL_TYPE_OWNERSHIP;
            url = CREDENTIAL_LIST_URL;
            break
          case 1://存证类型，支持Usufruct和OwnerShip。OwnerShip：所有权，Usufruct：使用权
            type = CREDENTIAL_TYPE_USUFRUCT
            url = CREDENTIAL_LIST_URL
            break
          case 2://声明类型，支持initiate和receive。initiate：我发起的，receive：我收到的
            type = CLAIM_TYPE_INITIATE
            url = CLAIM_LIST_URL
            break
          case 3://声明类型，支持initiate和receive。initiate：我发起的，receive：我收到的
            type = CLAIM_TYPE_RECEIVE
            url = CLAIM_LIST_URL
            break
          case 4://收到的授权请求，receive：我收到的
            type = CLAIM_TYPE_RECEIVE
            url = APPLY_LIST_URL
            break
      }
      axios.post(url,
          {
            data: {
              pageSize: pageSize,
              pageNumber: pageNumber,
              type: type
            }
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json" //将表单数据传递转化为request payload类型
            },
            withCredentials: true
          }
        ).then(function(response) {
          var res = response.data;
          console.error("store -----------"+JSON.stringify(options));
          context.commit("setTableData", {list:res.list,total:res.total,tableType:options.tableType})
           resolve()
        })
        .catch(function(error) {
          alert(error);
        });
      })
    },
  },
  modules: {
  }

})
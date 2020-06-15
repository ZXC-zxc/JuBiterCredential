import Vue from 'vue'
import router from '@/assets/router'
import home from './certImg.vue'
import store from '@/assets/store'

/********全局引用***************/
import axios from "@/assets/axios";
import layer from '@/assets/js/util/layer.js'
import requestUrl from '@/assets/js/util/requestUrl.js'
import * as socketApi from '@/assets/js/util/websocket.js'
Vue.config.productionTip = false;


// import ElementUI from 'element-ui';
// // import { Button, Select } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);


Vue.prototype.$axios = axios
Vue.prototype.$layer = layer
Vue.prototype.$requestUrl = requestUrl
Vue.prototype.router = router
Vue.prototype.$socketApi = socketApi
Vue.prototype.store = store
/********全局引用***************/

new Vue({
  router,
  store,
  render: h => h(home)
}).$mount('#app')
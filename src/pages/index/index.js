import Vue from 'vue'
import router from '@/assets/router'
import home from './index.vue'

/********全局引用***************/
import axios from "@/assets/axios";
import layer from '@/assets/js/util/layer.js'
import requestUrl from '@/assets/js/util/requestUrl.js'
import * as socketApi from '@/assets/js/util/websocket.js'
Vue.config.productionTip = false;

Vue.prototype.$axios = axios
Vue.prototype.$layer = layer
Vue.prototype.$requestUrl = requestUrl
Vue.prototype.router = router
Vue.prototype.$socketApi = socketApi
/********全局引用***************/

new Vue({
  router,
  render: h => h(home)
}).$mount('#app')
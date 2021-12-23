import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './router/mocks'
import {
    Container,
    Header,
    Main,
    Footer
} from 'element-ui'

Vue.config.productionTip = false
// 设置axios 的基础路由
axios.defaults.baseURL = "http://localhost:8081/"
// 挂载 axios 到 $http
Vue.prototype.$http = axios
// 注册element-ui组件
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

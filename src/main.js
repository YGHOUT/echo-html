import Vue from 'vue'
import './plugins/axios'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import '@/assets/css/global.css'
import '@/router/mocks'

import {
    Container,
    Header,
    Main,
    Footer,
    Card,
    Form,
    FormItem,
    Input,
    Tabs,
    TabPane,
    Button
} from 'element-ui'

import './plugins/element.js'

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
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Button)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

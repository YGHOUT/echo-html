import Vue from 'vue'
import './plugins/axios'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import '@/assets/css/global.css'
import '@/router/mocks'
import './plugins/element.js'
//富文本编辑器
import VueQuillEditor from "vue-quill-editor";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

Vue.config.productionTip = false
// 设置axios 的基础路由
axios.defaults.baseURL = "http://localhost:8081/"
// 挂载 axios 到 $http
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

// 引入vant组件
// import { Toast } from 'vant'
// 让所有的Vue实例上都挂载一个共同的成员
// Vue.use(Toast)
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

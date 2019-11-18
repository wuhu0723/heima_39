import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

// 引入重置样式
import '@/styles/reset.less'

// 引入vant组件
// import { Toast } from 'vant'
// 让所有的Vue实例上都挂载一个共同的成员,挂载成员之后，后期可能通过this.$的方式来使用这个组件
// Vue.use(Toast)
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

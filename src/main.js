import Vue from 'vue'
import App from './App.vue'

// 全局样式
import '@/styles/index.scss' // global css

// 标配工具
import router from './router'
import store from './store'

// 通用组件
import '@/components'
// 图标
import '@/icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

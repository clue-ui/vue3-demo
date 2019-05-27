import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import app style
import '@/assets/scss/index.scss'

// import moment zh-cn
import 'moment/locale/zh-cn'

// import app plugin
import Plugin from './plugin'
Vue.use(Plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

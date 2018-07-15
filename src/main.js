// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入组件
import ElButton from './components/button/main'
import ElCascadingAddress from './components/cascading-address/main'
import ElLoading from './components/loading/main'

Vue.use(ElButton)
Vue.use(ElCascadingAddress)
Vue.use(ElLoading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

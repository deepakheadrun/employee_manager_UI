import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VModal, { dialog: true })
new Vue({
  router:router,
  store,
  render: h => h(App),
}).$mount('#app')

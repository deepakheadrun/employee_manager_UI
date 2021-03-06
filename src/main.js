import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
import Toasted from 'vue-toasted';
 

 
import router from './router'
import store from './store'
Vue.config.productionTip = false
const tokens = JSON.parse(localStorage.getItem("tokens"))
if (tokens) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + tokens.access
}
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
 
  if (error.response.status == 401) {
    router.push({ path: '/login'}).catch(()=>{})
  }

  Vue.toasted.error(JSON.stringify(error.response.data), { duration: 5000 })
  return Promise.reject(error);
});
Vue.use(Toasted)
Vue.use(VueAxios, axios)
Vue.use(VModal, { dialog: true })
new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')

/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Axios from 'axios';
import router from './routers'

Vue.prototype.$http = Axios

const token = store.state.token

Vue.config.productionTip = false;

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

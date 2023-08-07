import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from "vue-router"
import routes from "../src/router/router"

Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  mode:"history",
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

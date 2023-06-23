import Vue from 'vue'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import * as allIcons from 'ionicons/icons'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(allIcons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

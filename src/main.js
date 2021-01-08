import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import ScrollReveal from 'scrollreveal'
import "./styles/common/common.scss";

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  ScrollReveal,
  render: h => h(App)
}).$mount('#app')

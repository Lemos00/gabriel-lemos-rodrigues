import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true
    })
  },
  render: h => h(App),
}).$mount('#app')

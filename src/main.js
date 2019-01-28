import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('two_digits', (value) => {
  if (value < 0) {
    return '00';
  }
  if (value.toString().length <= 1) {
    return `0${value}`;
  }
  return value;
});

new Vue({ 
    render: h => h(App),
}).$mount('#app')

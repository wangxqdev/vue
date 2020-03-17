// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // runtime only
  // render => vdom => UI
  render(h) {
    return h(App);
  }
  // runtime + compiler
  // template => ast => render => vdom => UI
  // components: { App },
  // template: '<App/>'
})

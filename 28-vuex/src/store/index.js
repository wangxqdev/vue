import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  counter: 0,
  books: [
    { id: "1", name: "Java开发详解", price: 109.5 },
    { id: "2", name: "Java编程思想", price: 89.1 },
    { id: "3", name: "零基础学Java", price: 64.2 },
    { id: "4", name: "Java核心技术", price: 109.3 }
  ],
  info: {
    name: 'codewhy',
    age: 18,
    height: 1.88
  }
}

export default new Vuex.Store({
  state,
  // 异步调用
  actions,
  // 同步调用
  mutations,
  getters,
  modules: {
    a: moduleA
  }
})
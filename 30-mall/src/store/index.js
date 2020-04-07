import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let product = state.cartList.find((item, index, arr) => payload.id === item.id)
      if (product) {
        product.count++
      } else {
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

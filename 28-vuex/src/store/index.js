import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    books: [
      { id: "1", name: "Java开发详解", price: 109.5 },
      { id: "2", name: "Java编程思想", price: 89.1 },
      { id: "3", name: "零基础学Java", price: 64.2 },
      { id: "4", name: "Java核心技术", price: 109.3 }
    ]
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    addBook(state, book) {
      state.books.push(book)
    }
  },
  getters: {
    gtPriceBooks(state, getters) {
      return price => state.books.filter(book => book.price > price)
    }
  }
})
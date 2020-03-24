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
    ],
    info: {
      name: 'codewhy',
      age: 18,
      height: 1.88
    }
  },
  // 异步调用
  actions: {
    aUpdateInfo(context, message) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(message)
          context.commit('updateInfo')
          resolve('aaa')
        }, 1000)
      })
    }
  },
  // 同步调用
  mutations: {
    // 方法名建议抽成常量
    ['increment'](state) {
      state.counter++
    },
    ['decrement'](state) {
      state.counter--
    },
    ['addBook'](state, book) {
      state.books.push(book)
    },
    ['updateInfo'](state) {
      // 1. 增加属性并添加至 Vue 响应式系统
      // state.info['address'] = 'China' => 无效
      Vue.set(state.info, 'address', 'China')
      // 2. 删除属性并添加至 Vue 响应式系统
      Vue.delete(state.info, 'age')
    }
  },
  getters: {
    gtPriceBooks(state, getters) {
      return price => state.books.filter(book => book.price > price)
    }
  },
  modules: {
    a: {
      state: {
        // 特殊 => 通过 this.$store.state.a.[prop] 调用
      },
      actions: {
        // 通过 this.$store.dispatch 调用
      },
      mutations: {
        // 通过 this.$store.commit 调用
      },
      getters: {
        // 通过 this.$store.getters.[prop] 调用
      }
    }
  }
})
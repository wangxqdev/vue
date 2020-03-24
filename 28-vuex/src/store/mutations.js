export default {
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
}
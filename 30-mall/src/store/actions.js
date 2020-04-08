export default {
  addCart({/* 对象的解构 */ state, commit }, payload) {
    let product = state.cartList.find(currentValue => payload.id === currentValue.id)
    if (product) {
      commit('addCounter', product)
    } else {
      payload.count = 1
      commit('addToCart', payload)
    }
  }
}
export default {
  addCart({/* 对象的解构 */ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let product = state.cartList.find(currentValue => payload.id === currentValue.id)
      if (product) {
        commit('addCounter', product)
        resolve('当前商品数量 + 1')
      } else {
        payload.count = 1
        commit('addToCart', payload)
        resolve('商品添加至购物车')
      }
    })
  }
}
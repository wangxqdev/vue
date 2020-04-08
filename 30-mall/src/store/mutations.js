export default {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.isActive = true
    state.cartList.push(payload)
  }
}
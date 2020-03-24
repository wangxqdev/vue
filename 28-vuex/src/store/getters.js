export default {
  ['gtPriceBooks'](state, getters) {
    return price => state.books.filter(book => book.price > price)
  }
}
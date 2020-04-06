import { debounce } from "./utils"

export const itemImageListener = {
  data() {
    return {
      imageListener: null
    }
  },
  mounted() {
    const refresh = this.$refs.scroll.refresh
    // 监听事件总线
    this.imageListener = () => {
      debounce(refresh, 100)()
    }
    this.$bus.$on('itemImageLoad', this.imageListener)
  }
}
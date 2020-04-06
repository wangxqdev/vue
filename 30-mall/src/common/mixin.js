import { debounce } from "./utils"

export const itemImageListener = {
  data() {
    return {
      imageListener: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100)
    // 监听事件总线
    this.imageListener = () => {
      this.refresh()
    }
    this.$bus.$on('itemImageLoad', this.imageListener)
  }
}
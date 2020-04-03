<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail, Goods, Shop } from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  data() {
    return {
      id: '',
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  created() {
    this.id = this.$route.params.id 
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail(this.id).then(res => {
        const result = res.result
        this.topImages = result.itemInfo.topImages
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
        this.shop = new Shop(result.shopInfo)
      })
    } 
  }
}
</script>

<style scoped>
#home {
  position: relative;
}

.detail-nav {
  position: relative;
  z-index: 999;
  background-color: var(--color-background);
}

.content {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background-color: var(--color-background);
}
</style>

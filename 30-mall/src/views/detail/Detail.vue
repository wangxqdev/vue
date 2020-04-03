<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'

import { getDetail, Goods, Shop } from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
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

</style>

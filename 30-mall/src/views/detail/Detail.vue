<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info ref="param"></detail-param-info>
      <detail-comment-info ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailParamInfo from './childcomps/DetailParamInfo'
import DetailCommentInfo from './childcomps/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'

import { getDetail, Goods, Shop } from 'network/detail'

import { itemImageListener } from "common/mixin"
import { debounce } from "common/utils"

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList
  },
  mixins: [ itemImageListener ],
  data() {
    return {
      id: '',
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  created() {
    this.id = this.$route.params.id 
    this.getDetail()
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    }, 100)
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.imageListener)
  },
  methods: {
    getDetail() {
      getDetail(this.id).then(res => {
        const result = res.result
        this.topImages = result.itemInfo.topImages
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
        this.shop = new Shop(result.shopInfo)
        this.detailInfo = result.detailInfo
        this.recommends = result.recommends
      })
    },
    detailImageLoad() {
      this.refresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    contentScroll(position) {
      let positionY = Math.abs(position.y)
      let length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        // if ((i !== this.currentIndex) && ((i < length - 1 && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) || (i === length - 1) && (positionY >= this.themeTopYs[i]))) {
        //   this.currentIndex = i
        //   this.$refs.detailNav.currentIndex = this.currentIndex
        // }
        if ((i !== this.currentIndex) && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
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

<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" ref="tabControl1" v-show="isShowTabControl"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childcomps/HomeSwiper";
import HomeRecommend from "./childcomps/HomeRecommend";
import HomeFeature from "./childcomps/HomeFeature";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll"

import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList"

import { getHomeMultiData, getHomeData } from "network/home";

import { itemImageListener, backTopMixin } from "common/mixin"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
  },
  mixins: [ itemImageListener, backTopMixin ],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        lastest: {
          page: 0,
          list: []
        },
        selected: {
          page: 0,
          list: []
        }
      },
      currentType: 'pop',
      isLoadingMore: false,
      tabOffsetTop: 0,
      isShowTabControl: false,
      saveY: 0,
      titles: [{
        cname: '流行',
        ename: 'pop'
      }, {
        cname: '新款',
        ename: 'lastest'
      }, {
        cname: '精选',
        ename: 'selected'
      }]
    };
  },
  created() {
    this.getHomeMultiData()
    this.titles.forEach((currentValue, index, arr) => {
      this.getHomeData(currentValue.ename)
    });
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('itemImageLoad', this.imageListener)
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        if (this.isLoadingMore) {
          this.$refs.scroll.finishPullUp()
          this.isLoadingMore = false
        }
      })
    },
    tabClick(index) {
      this.currentType = this.titles[index].ename
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000
      this.isShowTabControl = Math.abs(position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.isLoadingMore = true
      this.getHomeData(this.currentType)
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.home-nav {
  /* 使用原生滚动时需要 */
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999; */
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control {
  /* position: sticky;
  top: 44px;
  z-index: 999; */
  position: relative;
  z-index: 999;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 49px;
  left: 0;
}
</style>

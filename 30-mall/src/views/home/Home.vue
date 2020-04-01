<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
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
import BackTop from "components/content/backtop/BackTop"

import { getHomeMultiData, getHomeData } from "network/home";

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
    BackTop
  },
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
      isShowBackTop: false
    };
  },
  created() {
    this.getHomeMultiData()
    this.getHomeData('pop')
    this.getHomeData('lastest')
    this.getHomeData('selected')
    // 监听事件总线
    this.$bus.$on('itemImageLoad', ()=> {
      this.$refs.scroll.refresh()
    })
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

        this.$refs.scroll.finishPullUp()
      })
    },
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1: 
          this.currentType = 'lastest'
          break
        case 2:
          this.currentType = 'selected'
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000
    },
    loadMore() {
      this.getHomeData(this.currentType)
    }
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  padding-top: 44px;
}

.home-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  background-color: var(--color-tint);
  color: #fff;
}

.tab-control {
  position: sticky;
  top: 44px;
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

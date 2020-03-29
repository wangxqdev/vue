<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childcomps/HomeSwiper'
import HomeRecommend from './childcomps/HomeRecommend'

import { requestHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    requestHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

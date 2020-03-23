<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item link="/home" activeWeight="600">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.png" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.png" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.png" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.png" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.png" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
@import url("./assets/css/base.css");
</style>

<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url('./assets/css/base.css');

#tab-bar {
  display: flex;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  line-height: 49px;

  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
}

.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
}
</style>

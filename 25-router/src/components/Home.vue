<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页的内容, 哈哈哈</p>
    <router-link to="/home/news" tag="button" replace>新闻</router-link>
    <router-link to="/home/message" tag="button" replace>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },
  activated() {
    this.$router.push(this.path)
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    next()
  }
};
</script>

<style scoped>
.active {
  color: #0f0;
}
</style>

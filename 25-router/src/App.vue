<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!-- 
      tag：呈现样式
      replace：替换pushState方式
    -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="userPath" tag="button" replace>用户</router-link>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi"
    };
  },
  computed: {
    userPath() {
      return `/user/${this.userId}`;
    }
  },
  methods: {
    homeClick() {
      this.$router.replace("/home");
    },
    aboutClick() {
      this.$router.replace("/about");
    }
  }
};
</script>

<style scoped>
/* .router-link-active {
    color: #f00
  } */
.active {
  color: #f00;
}
</style>

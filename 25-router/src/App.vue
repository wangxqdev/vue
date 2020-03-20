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
    <router-link :to="profilePath" tag="button" replace>档案</router-link>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="profileClick">档案</button>-->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan"
    };
  },
  computed: {
    userPath() {
      return `/user/${this.userId}`;
    },
    profilePath() {
      return {
        path: '/profile',
        query: {
          name: 'codewhy',
          age: 18,
          height: 1.88
        }
      }
    }
  },
  methods: {
    homeClick() {
      this.$router.replace("/home");
    },
    aboutClick() {
      this.$router.replace("/about");
    },
    profileClick() {
      this.$router.replace(this.profilePath)
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

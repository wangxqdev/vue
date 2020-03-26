<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { requestHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: Array,
    }
  },
  components: {
    NavBar
  },
  created() {
    requestHomeMultidata().then(res => {
      this.banners = res.data.banner.list
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
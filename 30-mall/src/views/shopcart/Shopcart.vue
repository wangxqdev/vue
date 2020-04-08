<template>
  <div id="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import { mapGetters } from 'vuex'

export default {
  name: "Shopcart",
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
};
</script>

<style scoped>
.cart-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
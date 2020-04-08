<template>
  <div id="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartList from './childcomps/CartList'
import CartBottomBar from './childcomps/CartBottomBar'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import { mapGetters } from 'vuex'

export default {
  name: "Shopcart",
  components: {
    CartList,
    CartBottomBar,
    NavBar,
    Scroll
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
};
</script>

<style scoped>
#cart {
  height: 100vh;
}

.cart-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  overflow: hidden;
  height: calc(100% - 44px - 49px - 40px);
}
</style>
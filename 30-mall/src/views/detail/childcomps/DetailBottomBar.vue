<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <i class="icon service"></i>
        <div>客服</div>
      </div>
      <div>
        <i class="icon shop"></i>
        <div>店铺</div>
      </div>
      <div>
        <i class="icon collect"></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="right text">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addCart')
    } 
  }
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-background);
  z-index: 999;

  font-size: 14px;
  text-align: center;
}

.bottom-bar, .left, .right {
  display: flex;
}

.left, .right, .shop, .service, .collect, .cart, .buy {
  flex: 1;
}

.icon {
  display: block;
  width: 24px;
  height: 24px;
  margin: 3px 21px 1px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}

.shop {
  background-position: 0 57px;
}

.service {
  background-position: 0 107px;
}

.cart, .buy {
  line-height: 49px;
}

.cart {
  background-color: #fff737;
  color: #666;
}

.buy {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

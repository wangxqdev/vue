<template>
  <div class="bottom-bar">
    <div class="all-select">
      <check-button class="check-button" :is-active="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计: <span>{{ totalPrice | fullPrice }}</span></div>
    <div class="calc">去计算({{ totalCount }})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(currentValue => currentValue.isActive)
      .reduce((total, currentValue) => total += currentValue.price * currentValue.count, 0)
    },
    totalCount() {
      return this.cartList.filter(currentValue => currentValue.isActive).length
    },
    isSelectAll() {
      if (!this.cartList.length) {
        return false
      }
      return !this.cartList.find(currentValue => !currentValue.isActive)
    }
  },
  filters: {
    fullPrice(price) {
      return `¥${price}`
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(currentValue => currentValue.isActive = false)
      } else {
        this.cartList.forEach(currentValue => currentValue.isActive = true)
      }
    } 
  }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  background-color: #e5e5e5;
  font-size: 14px;
}

.all-select {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  padding: 0 10px;
}

.price, .calc {
  line-height: 40px;
  text-align: center;
}

.price {
  flex: 1;
}

.price span {
  color: #ffb805;
}

.calc {
  width: 100px;
  background-color: var(--color-tint);
  color: #fff;
}
</style>

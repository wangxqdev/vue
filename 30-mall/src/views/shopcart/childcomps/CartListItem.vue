<template>
  <div class="list-item">
    <div class="item-select">
      <check-button></check-button>
    </div>
    <div class="item-img">
      <img :src="goods.image" alt="">
    </div>
    <div class="item-info">
      <div class="info-title">{{ goods.title }}</div>
      <div class="info-desc">{{ goods.desc }}</div>
      <div class="info-bottom">
        <div class="info-price">{{ goods.price | fullPrice }}</div>
        <div class="info-count">{{ goods.count | fullCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    fullPrice(price) {
      return `¥${price}`
    },
    fullCount(count) {
      return `x${count}`
    }
  }
}
</script>

<style scoped>
.list-item {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-select {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
}

.item-info {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  color: #666;
}

.info-title, .info-desc, .info-bottom {
  flex: 1;
}

.info-title, .info-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.info-title {
  font-size: 17px;
}

.info-desc {
  font-size: 14px;
}

.info-bottom {
  display: flex;
  justify-content: space-between;
}

.info-price, .info-count {
  font-size: 20px;
}

.info-price {
  color: #ffb805;
}
</style>

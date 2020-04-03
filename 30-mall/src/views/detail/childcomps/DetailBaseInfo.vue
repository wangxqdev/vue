<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice | fullPrice }}</span>
      <span class="o-price">{{ goods.oldPrice | fullPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-others">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{ goods.services[index - 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
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
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 0 8px;
  margin-top: 15px;
  border-bottom: 5px solid #f2f5f8;
  color: #999;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-tint);
}

.info-price .o-price {
  margin-left: 5px;
  font-size: 13px;
  text-decoration: line-through;
}

.info-price .discount {
  padding: 2px 5px;
  margin-left: 5px;
  border-radius: 8px;
  font-size: 12px;
  color: #fff;
  background-color: var(--color-tint);

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-others {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  line-height: 30px;
  font-size: 13px;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  margin-left: 2px;
  font-size: 13px;
  color: #333;
}
</style>

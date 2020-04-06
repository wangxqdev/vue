<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start left"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end right"></div>
    </div>
    <div v-for="item in detailInfo.detailImage" :key="item.key">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list" v-for="item in item.list" :key="item">
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('detailImageLoad')
    } 
  }
}
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start, .info-desc .end {
  position: relative;
  width: 150px;
  height: 1px;
  background-color: #a3a3a5;
}

.info-desc .start::before, .info-desc .end::after {
  position: absolute;
  bottom: 0px;
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>

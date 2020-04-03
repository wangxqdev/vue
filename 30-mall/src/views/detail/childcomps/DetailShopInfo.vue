<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="shop-title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells | sellsCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shop.goods }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="item in shop.score" :key="item.score">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better':  item.better }">{{ item.score }}</td>
            <td class="better" :class="{ 'better-more': item.better }"><span>{{ item.better ? '高' : '低' }}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellsCountFilter(sells) {
      if (!sells < 10000) {
        return `${(sells / 10000).toFixed(1)}万`
      }
      return sells
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  display: flex;
  align-items: center;
  line-height: 45px;
}

.shop-top img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 50%;
  /* 去除底边3px */
  vertical-align: center;
}

.shop-top .shop-title {
  margin-left: 10px;
}

.shop-middle {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.shop-middle-item {
  flex: 1;
}

.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  border-right: 1px solid rgba(0, 0, 0, .1);
  color: #333;
  text-align: center;
}

.sells-count, .goods-count {
  font-size: 18px;
}

.sells-text, .goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-middle-right {
  font-size: 13px;
  color: #333;
}

.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}

.shop-middle-right table td {
  padding: 5px 0;
}

.shop-middle-right .score {
  color: #5ea732;
}

.shop-middle-right .score-better {
  color: #f13e3a;
}

.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}

.shop-bottom {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}

.shop-bottom span {
  display: inline-block;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  line-height: 30px;
  background-color: #f2f5f8;
}
</style>

<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px 0;
  border-bottom: 10px solid #eee;
  text-align: center;
  font-size: 12px;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
  /* 去除底边3px */
  vertical-align: center;
}
</style>
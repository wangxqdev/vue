<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childcomps/DetailNavBar'
import DetailSwiper from 'views/detail/childcomps/DetailSwiper'

import { getDetail } from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      id: '',
      topImages: []
    }
  },
  created() {
    this.id = this.$route.params.id 

    getDetail(this.id).then(res => {
      this.topImages = res.result.itemInfo.topImages
    })
  }
}
</script>

<style scoped>

</style>

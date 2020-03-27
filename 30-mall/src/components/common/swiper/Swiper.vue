<template>
  <div class="swiper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    duration: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      swiperItemCount: 0,
      swiperWidth: 0,
      swiperStyle: {},
      currentIndex: 0,
      scrolling: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom()
      this.startTimer()
    }, 300)
  },
  methods: {
    startTimer() {
      this.playTimer = setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.swiperWidth)
      }, this.interval)
    },
    handleDom() {
      let swiperEl = document.querySelector('.swiper')
      let swiperItemEls = swiperEl.getElementsByClassName('swiper-item')

      this.swiperItemCount = swiperItemEls.length
      this.swiperWidth = swiperEl.clientWidth
      this.swiperStyle = swiperEl.style

      if (this.swiperItemCount > 1) {
        let cloneFirst = swiperItemEls[0].cloneNode(true)
        swiperEl.appendChild(cloneFirst)
      }
    },
    scrollContent(currentPosition) {
      this.scrolling = true

      this.swiperStyle.transition = `transform ${this.duration}ms`
      this.setTransform(currentPosition)
      this.checkPosition()

      this.scrolling = false
    },
    checkPosition() {
      setTimeout(() => {
        this.swiperStyle.transition = 'transform 0ms'
        console.log(this.currentIndex)
        console.log(this.swiperItemCount)
        if (this.currentIndex === this.swiperItemCount) {
          this.currentIndex = 0
          this.setTransform(-this.currentIndex * this.swiperWidth)
        }
      }, this.duration)
    },
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px, 0, 0)`
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px, 0, 0)`
    }
  },
}
</script>

<style scoped>
  .swiper {
    display: flex;
  }
</style>

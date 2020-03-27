<template>
  <div id="swiper">
    <div class="swiper">
      <slot></slot>
    </div>
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
    animDuration: {
      type: Number,
      default: 300
    }
  },
  data: function() {
    return {
      sliderCount: 0,
      totalWidth: 0,
      swiperStype: {},
      currentIndex: 1,
      scrolling: false
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.handleDom()
      this.startTimer()
    }, 100)
  },
  methods: {
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },
    stopTimer() {
      window.clearInterval(this.playTimer)
    },
    handleDom() {
      let swiperEl = document.querySelector('.swiper')
      let sliderEls = swiperEl.getElementsByClassName('slider')

      this.sliderCount = sliderEls.length

      if (this.sliderCount > 1) {
        let cloneFirst = sliderEls[0].cloneNode(true)
        let cloneLast = sliderEls[this.sliderCount - 1].cloneNode(true)
        swiperEl.insertBefore(cloneLast, sliderEls[0])
        swiperEl.appendChild(cloneFirst)
        this.totalWidth = swiperEl.offsetWidth
        this.swiperStype = swiperEl.style
        
        this.setTransform(-this.totalWidth)
      }
    },
    scrollContent(currentPosition) {
      this.scrolling = true

      this.swiperStype.transition = `transform ${this.animDuration}ms`
      this.setTransform(currentPosition)
      this.checkPosition()

      this.scrolling = false
    },
    checkPosition() {
      setTimeout(() => {
        this.swiperStype.transition = '0ms'
        if (this.currentIndex >= this.sliderCount + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      }, this.animDuration)
    },
    setTransform(position) {
      console.log(this.currentIndex)
      this.swiperStype.transform = `translate3d(${position}px, 0, 0)`
      this.swiperStype['-webkit-transform'] = `translate3d(${position}px, 0, 0)`
      this.swiperStype['-ms-transform'] = `translate3d(${position}px, 0, 0)`
    }
  },
}
</script>

<style scoped>
  #swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }
</style>

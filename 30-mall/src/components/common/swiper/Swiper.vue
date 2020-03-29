<template>
  <div id="swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator">
      <div class="indicator" v-if="showIndicator && swiperItemCount > 0">
        <div
          class="indicator-item"
          v-for="(item, index) in swiperItemCount"
          :key="index"
          :class="{ 'indicator-item-active' : index === currentIndex - 1 }"
        ></div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    duration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperItemCount: 0,
      swiperWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 100);
  },
  methods: {
    startTimer() {
      this.playTimer = setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.swiperWidth);
      }, this.interval);
    },
    stopTimer() {
      clearInterval(this.playTimer);
    },
    handleDom() {
      let swiperEl = document.querySelector(".swiper");
      let swiperItemEls = swiperEl.getElementsByClassName("swiper-item");

      this.swiperItemCount = swiperItemEls.length;
      this.swiperWidth = swiperEl.clientWidth;
      this.swiperStyle = swiperEl.style;

      if (this.swiperItemCount > 1) {
        let cloneFirst = swiperItemEls[0].cloneNode(true);
        let cloneLast = swiperItemEls[this.swiperItemCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, swiperItemEls[0]);
        swiperEl.appendChild(cloneFirst);

        this.setTransform(-this.currentIndex * this.swiperWidth);
      }
    },
    touchStart(e) {
      if (this.scrolling) {
        return;
      }
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.swiperWidth;
      let moveDistance = this.distance + currentPosition;

      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      let currentMove = Math.abs(this.distance);

      if (this.distance === 0) {
        return;
      } else if (currentMove > this.swiperWidth * this.moveRatio) {
        if (this.distance < 0) {
          this.currentIndex++;
        } else {
          this.currentIndex--;
        }
      }

      this.scrollContent(-this.currentIndex * this.swiperWidth);
      this.startTimer();
    },
    scrollContent(currentPosition) {
      this.scrolling = true;

      this.swiperStyle.transition = `transform ${this.duration}ms`;
      this.setTransform(currentPosition);
      this.checkPosition();

      this.scrolling = false;
    },
    checkPosition() {
      setTimeout(() => {
        this.swiperStyle.transition = "transform 0ms";
        if (this.currentIndex === this.swiperItemCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.swiperWidth);
        } else if (this.currentIndex === 0) {
          this.currentIndex = this.swiperItemCount;
          this.setTransform(-this.currentIndex * this.swiperWidth);
        }
      }, this.duration);
    },
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px, 0, 0)`;
    }
  }
};
</script>

<style scoped>
#swiper {
  position: relative;
  overflow: hidden;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  width: 100%;
}

.indicator-item {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: var(--color-background);
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indicator-item-active {
  background-color: var(--color-high-text);
}
</style>

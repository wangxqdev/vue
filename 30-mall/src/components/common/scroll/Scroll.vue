<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
  },
  methods: {
    scrollTo(x, y, ms = 500) {
      return this.scroll.scrollTo(x, y, ms);
    }
  }
};
</script>

<style scoped>
</style>

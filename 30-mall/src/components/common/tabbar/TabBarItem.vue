<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 具名插槽 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.isActive ? { fontWeight: this.activeWeight } : {};
    }
  },
  props: {
    link: String,
    activeWeight: {
      type: Number,
      default: 400
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 2px 0 2px 0;
  /* 去除底边3px */
  vertical-align: middle;
}

.active {
  /* color: #f00; */
  font-weight: 400;
}
</style>

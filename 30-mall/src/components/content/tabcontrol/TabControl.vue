<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles" :key="item.ename"
      class="tab-control-item"
      :class="{ active: currentIndex === index}"
      @click="tabClick(index)">
      <span>{{ item.cname }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  text-align: center;
  background-color: var(--color-background);
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 3px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>
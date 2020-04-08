<template>
  <div class="check-button" :class="{ active: isActive }">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
}

/* 去除图片底边3px */
.check-button img {
  display: block;
}

.active {
  border-color: var(--color-tint);
  background-color: var(--color-tint);
}
</style>

<template>
  <div>
    <h2>我是{{userId}}</h2>
    <p>我是{{userId}}的内容, 嘿嘿嘿</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
};
</script>

<style scoped>
</style>

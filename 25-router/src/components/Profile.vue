<template>
  <div>
    <h2>我是档案</h2>
    <ul>
      <li v-for="item in $route.query" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
</style>

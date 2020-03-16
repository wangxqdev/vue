<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello, Vue.js"
    };
  },
  methods: {
    btnClick(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
.title {
  color: #0f0;
}
</style>
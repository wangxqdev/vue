<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">＋</button>
    <button @click="sub">－</button>
    <ul>
      <li v-for="item in $store.getters.gtPriceBooks(88)" :key="item.id">{{item.name}}</li>
    </ul>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: "App",
  components: {
    HelloVuex
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    }
  },
};
</script>

<style>
</style>

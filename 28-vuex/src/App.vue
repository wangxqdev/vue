<template>
  <div id="app">
    <h2>---------- APP ----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">＋</button>
    <button @click="sub">－</button>
    <button @click="addBook">添加书籍</button>
    <button @click="updateInfo">更新信息</button>
    <ul>
      <li v-for="item in $store.getters.gtPriceBooks(88)" :key="item.id">{{item.name}}</li>
    </ul>
    <ul>
      <li v-for="(value, key) in $store.state.info" :key="value">{{key}} - {{value}}</li>
    </ul>
    <h2>---------- HelloVuex ----------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    },
    addBook() {
      const book = { id: "5", name: "深入理解Java虚拟机", price: 94.6 }
      // 1. 第一种提交风格
      this.$store.commit('addBook', book)
      // 2. 另一种提交风格, 在 mutations 里需要通过 payload 形参对象接收
      // this.$store.commit({
      //   type: 'addBook',
      //   book
      // })
    },
    updateInfo() {
      // this.$store.commit('updateInfo')
      this.$store.dispatch('aUpdateInfo', 'test').then(res => {
        console.log(res)
      })
    }
  },  
}
</script>

<style>
</style>

// Common JS
// const {add, mul} = require("./math.js");

// ES6(推荐)
import { add, mul } from "./js/math.js";
// 导入css
import normal from "./css/normal.css";
// 导入scss
import special from "./css/special.scss";
// 导入Vue
import Vue from "vue";
// import App from "./js/vue/App.js"
import App from "./js/vue/App.vue"

console.log(add(20, 30));
console.log(mul(20, 30));
document.writeln("<h2>Hello, Webpack</h2>");

new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App
  }
});
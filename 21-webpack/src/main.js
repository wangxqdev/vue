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

console.log(add(20, 30));
console.log(mul(20, 30));
document.writeln("<h2>Hello, Webpack</h2>");

const App = {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
    </div>
  `,
  data() {
    return {
      message: "Hello, Vue.js"
    }
  },
  methods: {
    btnClick(e) {
      console.log(e);
    }
  }
}

new Vue({
  el: "#app",
  template: "<App></App>",
  components: {
    App
  }
});
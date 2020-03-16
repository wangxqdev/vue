// Common JS
// const {add, mul} = require("./math.js");

// ES6(推荐)
import {add, mul} from "./js/math.js";
// 导入css
import normal from "./css/normal.css";
// 导入scss
import special from "./css/special.scss";

console.log(add(20, 30));
console.log(mul(20, 30));
document.writeln("<h2>Hello, Webpack</h2>");
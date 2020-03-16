const webpackMerge = require("webpack-merge");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const baseConifg = require("./base.config.js")

module.exports = webpackMerge(baseConifg, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
});